"""Contextual avatar regression checks against a running production preview.

Run: py -3.13 scripts/verify_pet_dialogue.py
Set CV_TEST_URL to use another preview. Uses installed Edge, headless.
Set CV_TEST_FILTER to rerun checks whose names contain that text.
Touch dragging uses Chromium's native input protocol, not DOM event dispatch.
"""
import json
import os
import re
from pathlib import Path

from playwright.sync_api import expect, sync_playwright


URL = os.environ.get('CV_TEST_URL', 'http://127.0.0.1:4173')
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '.artifacts' / 'ui'
OUT.mkdir(parents=True, exist_ok=True)
ORIENTAL = 'experience:oriental-precision'
NEIGHBOR = 'experience:bufs-bgcf'
FAILURES = []
RESULTS = []
TEST_FILTER = os.environ.get('CV_TEST_FILTER', '').lower()


def target(page, topic):
    return page.locator(f'[data-avatar-context="{topic}"]').first


def bubble(page):
    return page.locator('.pet-thought')


def expect_topic(page, topic, timeout=4500):
    expect(bubble(page)).to_have_attribute('data-topic', topic, timeout=timeout)
    return bubble(page).locator('p').inner_text()


def hover_topic(page, topic):
    target(page, topic).hover(position={'x': 30, 'y': 30})
    return expect_topic(page, topic)


def check(name, fn):
    if TEST_FILTER and TEST_FILTER not in name.lower():
        return
    try:
        fn()
        RESULTS.append(name)
        print(json.dumps({'check': name, 'result': 'pass'}), flush=True)
    except Exception as error:
        FAILURES.append({'check': name, 'error': str(error).split('\nAria snapshot:', 1)[0]})
        print(json.dumps(FAILURES[-1]), flush=True)


def load(page, errors):
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(URL, wait_until='networkidle')
    page.locator('.pet-thought-toggle').wait_for()


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True, channel='msedge')
    desktop_errors = []
    page = browser.new_page(viewport={'width': 1440, 'height': 1000})
    load(page, desktop_errors)

    def idle():
        expect(bubble(page)).to_have_attribute('data-topic', 'idle', timeout=6500)
        assert bubble(page).locator('p').inner_text().strip()
    check('initial idle dialogue', idle)

    def coverage():
        source = (ROOT / 'src' / 'data' / 'avatarDialogues.ts').read_text(encoding='utf-8-sig')
        catalog_keys = {
            quoted or bare
            for quoted, bare in re.findall(r"^  (?:'([^']+)'|([\w-]+)):\s*\{", source, re.MULTILINE)
        }
        rendered = set(page.locator('[data-avatar-context]').evaluate_all(
            '(elements) => elements.map(element => element.dataset.avatarContext)'))
        assert rendered <= catalog_keys, f'Missing dialogue keys: {sorted(rendered - catalog_keys)}'
        for section in ('profile', 'about', 'experience', 'projects', 'education',
                        'publications', 'skills', 'tech-stack', 'recognition', 'links', 'contact'):
            assert section in rendered, f'Missing section: {section}'
    check('rendered context catalog coverage', coverage)

    seen = []

    def contextual_hover():
        text = hover_topic(page, ORIENTAL)
        assert any(word in text.lower() for word in ('oriental', 'research assistant', 'crane'))
        assert 'ai engineer intern' not in text.lower()
        seen.append(text)
        page.screenshot(path=str(OUT / 'pet-context-desktop.png'))
    check('stable hover identifies research assistant experience', contextual_hover)

    def flyby():
        before = bubble(page).locator('p').inner_text()
        other = target(page, NEIGHBOR).bounding_box()
        assert other and 0 < other['y'] < 950, 'Neighbor must be visible for a true flyby'
        page.mouse.move(other['x'] + 30, other['y'] + 30)
        page.wait_for_timeout(100)
        page.mouse.move(5, 5)
        page.wait_for_timeout(650)
        assert bubble(page).locator('p').inner_text() == before
    check('brief flyby preserves readable dialogue', flyby)

    def child_hover():
        before = hover_topic(page, ORIENTAL)
        target(page, ORIENTAL).locator('.resume-title').hover()
        page.wait_for_timeout(700)
        assert bubble(page).locator('p').inner_text() == before
        expect(bubble(page)).to_have_attribute('data-topic', ORIENTAL)
    check('moving among card children does not restart speech', child_hover)

    def halo():
        hover_topic(page, NEIGHBOR)
        rect = target(page, ORIENTAL).bounding_box()
        assert rect and rect['x'] >= 18
        page.mouse.move(rect['x'] - 10, rect['y'] + rect['height'] / 2)
        seen.append(expect_topic(page, ORIENTAL))
    check('10px proximity halo selects the specific card', halo)

    def variety():
        for _ in range(3):
            hover_topic(page, NEIGHBOR)
            seen.append(hover_topic(page, ORIENTAL))
        assert all(a != b for a, b in zip(seen, seen[1:])), seen
        assert len(set(seen[:3])) == 3, f'Expected all three lines before reuse: {seen}'
    check('revisits shuffle relevant lines without immediate repeats', variety)

    def keyboard():
        page.mouse.move(5, 5)
        first = page.locator('.cv-navigation a[href="#experience"]')
        first.focus()
        page.keyboard.press('Tab')
        expect(page.locator('.cv-navigation a[href="#publications"]')).to_be_focused()
        expect_topic(page, 'publications')
        page.keyboard.press('Tab')
        expect(page.locator('.cv-navigation a[href="#education"]')).to_be_focused()
        text = expect_topic(page, 'education')
        label = bubble(page).locator('.pet-thought-topic').inner_text()
        announcement = page.locator('.pet-caption [role="status"]')
        expect(announcement).to_have_text(f'{label}: {text}')
        assert 'undefined' not in announcement.inner_text()
    check('keyboard navigation provides contextual dialogue', keyboard)

    def mute():
        page.get_by_role('button', name='Mute pet thoughts', exact=True).click()
        expect(bubble(page)).to_have_count(0)
        hover_target = target(page, ORIENTAL)
        hover_target.hover(position={'x': 30, 'y': 30})
        page.wait_for_timeout(1600)
        expect(bubble(page)).to_have_count(0)
        page.reload(wait_until='networkidle')
        expect(page.get_by_role('button', name='Show pet thoughts', exact=True)).to_be_visible()
        target(page, ORIENTAL).hover(position={'x': 30, 'y': 30})
        page.wait_for_timeout(1600)
        expect(bubble(page)).to_have_count(0)
        page.get_by_role('button', name='Show pet thoughts', exact=True).click()
        hover_topic(page, ORIENTAL)
    check('mute persists across reload and suppresses hover', mute)

    def modal():
        page.get_by_role('button', name='Read details: Silla Road Global', exact=True).click()
        expect(page.get_by_role('dialog')).to_be_visible()
        expect(bubble(page)).to_have_count(0)
        page.locator('.project-document h2').hover()
        page.wait_for_timeout(5000)
        expect(bubble(page)).to_have_count(0)
        page.keyboard.press('Escape')
        expect(page.get_by_role('dialog')).to_have_count(0)
        hover_topic(page, ORIENTAL)
    check('modal suppresses chatter and closing restores hover', modal)
    if desktop_errors:
        FAILURES.append({'check': 'desktop runtime errors', 'error': desktop_errors})
    page.close()

    reduced_errors = []
    reduced = browser.new_page(reduced_motion='reduce', viewport={'width': 390, 'height': 844})
    load(reduced, reduced_errors)

    def reduced_motion():
        expect(reduced.get_by_role('button', name='Show pet thoughts', exact=True)).to_be_visible()
        target(reduced, ORIENTAL).hover(position={'x': 30, 'y': 30})
        reduced.wait_for_timeout(1600)
        expect(bubble(reduced)).to_have_count(0)
        reduced.get_by_role('button', name='Show pet thoughts', exact=True).click()
        hover_topic(reduced, ORIENTAL)
        expect(reduced.get_by_role('button', name='Play pet animation', exact=True)).to_be_visible()
        rect = bubble(reduced).bounding_box()
        assert rect and rect['x'] >= 0 and rect['y'] >= 0
        assert rect['x'] + rect['width'] <= 390 and rect['y'] + rect['height'] <= 844
        assert reduced.evaluate('document.documentElement.scrollWidth <= innerWidth')
        reduced.screenshot(path=str(OUT / 'pet-context-mobile.png'))
    check('reduced motion is muted by default with readable opt-in', reduced_motion)
    if reduced_errors:
        FAILURES.append({'check': 'reduced-motion runtime errors', 'error': reduced_errors})
    reduced.close()

    touch_errors = []
    mobile = browser.new_page(is_mobile=True, has_touch=True,
                              viewport={'width': 390, 'height': 844}, device_scale_factor=1)
    load(mobile, touch_errors)
    touch_state = {}

    def touch_tap():
        card = target(mobile, ORIENTAL)
        card.scroll_into_view_if_needed()
        mobile.wait_for_timeout(250)
        rect = card.bounding_box()
        mobile.touchscreen.tap(rect['x'] + 30, rect['y'] + 30)
        touch_state['first_text'] = expect_topic(mobile, ORIENTAL)
    check('touch tap describes the selected experience', touch_tap)

    def touch_scroll():
        assert 'first_text' in touch_state, 'Initial touch tap must work before testing scroll'
        # A native touch drag scrolls the page and must not select its start/end card.
        neighbor = target(mobile, NEIGHBOR)
        neighbor.scroll_into_view_if_needed()
        rect = neighbor.bounding_box()
        x, y = rect['x'] + 40, min(700, max(180, rect['y'] + 50))
        scroll_before = mobile.evaluate('scrollY')
        cdp = mobile.context.new_cdp_session(mobile)
        cdp.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x, 'y': y}]})
        for step in range(1, 7):
            cdp.send('Input.dispatchTouchEvent', {
                'type': 'touchMove', 'touchPoints': [{'x': x, 'y': y - step * 18}]})
            mobile.wait_for_timeout(35)
        cdp.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
        cdp.detach()
        mobile.wait_for_timeout(1600)
        assert abs(mobile.evaluate('scrollY') - scroll_before) > 20, 'Native drag must scroll the page'
        expect(bubble(mobile)).to_have_attribute('data-topic', ORIENTAL)
        assert bubble(mobile).locator('p').inner_text() == touch_state['first_text']
        # Real time avoids coupling this check to Motion's native animation clock.
        # Wait through the reading window and quiet interval to catch stale topics.
        expect(bubble(mobile)).to_have_count(0, timeout=10000)
        expect_topic(mobile, 'idle', timeout=32000)
        expect(mobile.locator('.pet-caption [role="status"]')).to_have_text('')
        neighbor.scroll_into_view_if_needed()
        mobile.wait_for_timeout(250)
        rect = neighbor.bounding_box()
        mobile.touchscreen.tap(rect['x'] + 30, rect['y'] + 30)
        expect_topic(mobile, NEIGHBOR)
    check('touch scrolling stays quiet and clears the previous topic', touch_scroll)
    if touch_errors:
        FAILURES.append({'check': 'touch runtime errors', 'error': touch_errors})
    mobile.close()
    browser.close()

print(json.dumps({'passed': len(RESULTS), 'failures': FAILURES}, ensure_ascii=False), flush=True)
if FAILURES:
    raise SystemExit(1)

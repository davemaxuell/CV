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


def expect_topic(page, topic, timeout=1000):
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
        page.mouse.move(5, 5)
        page.wait_for_timeout(5000)
        expect(bubble(page)).to_have_count(0)
    check('no dialogue appears while idle away from content', idle)

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
        expect(bubble(page)).to_have_css('opacity', '1')
        page.screenshot(path=str(OUT / 'pet-context-desktop.png'))
    check('stable hover identifies research assistant experience', contextual_hover)

    def persistent_hover():
        before = hover_topic(page, ORIENTAL)
        # Cross the former reading timeout. Use real time so Motion's native
        # animation clock and the page's requestAnimationFrame stay in sync.
        page.wait_for_timeout(12000)
        expect(bubble(page)).to_have_attribute('data-topic', ORIENTAL)
        expect(bubble(page).locator('p')).to_have_text(before)
    check('stationary hover keeps the same dialogue without a timer', persistent_hover)

    def flyby():
        other = target(page, NEIGHBOR).bounding_box()
        assert other and 0 < other['y'] < 950, 'Neighbor must be visible for a true flyby'
        page.mouse.move(other['x'] + 30, other['y'] + 30)
        page.wait_for_timeout(100)
        page.mouse.move(5, 5)
        expect(bubble(page)).to_have_count(0, timeout=500)
        # Stay outside longer than the old maximum idle chatter interval.
        page.wait_for_timeout(35000)
        expect(bubble(page)).to_have_count(0)
    check('moving away hides dialogue immediately and stays quiet', flyby)

    def child_hover():
        before = hover_topic(page, ORIENTAL)
        seen.append(before)
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

    def leave_viewport():
        hover_topic(page, ORIENTAL)
        page.mouse.move(-10, -10)
        expect(bubble(page)).to_have_count(0, timeout=500)
        hover_topic(page, ORIENTAL)
    check('leaving the browser viewport hides dialogue and reentry works', leave_viewport)

    def scroll_away():
        hover_topic(page, ORIENTAL)
        page.evaluate('window.scrollTo(0, 0)')
        expect(bubble(page)).not_to_have_attribute('data-topic', ORIENTAL, timeout=1000)
    check('scrolling reevaluates the content under a stationary pointer', scroll_away)

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

    def focus_away():
        page.get_by_role('button', name='Mute pet thoughts', exact=True).focus()
        expect(bubble(page)).to_have_count(0, timeout=500)
        expect(page.locator('.pet-caption [role="status"]')).to_have_text('')
    check('moving keyboard focus to avatar controls hides dialogue', focus_away)

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
        expect(bubble(mobile)).to_have_count(0, timeout=500)
        expect(mobile.locator('.pet-caption [role="status"]')).to_have_text('')
        neighbor.scroll_into_view_if_needed()
        mobile.wait_for_timeout(250)
        rect = neighbor.bounding_box()
        mobile.touchscreen.tap(rect['x'] + 30, rect['y'] + 30)
        expect_topic(mobile, NEIGHBOR)
    check('touch scrolling stays quiet and clears the previous topic', touch_scroll)

    def touch_away():
        mobile.touchscreen.tap(2, 2)
        expect(bubble(mobile)).to_have_count(0, timeout=500)
    check('tapping outside content dismisses touch dialogue', touch_away)
    if touch_errors:
        FAILURES.append({'check': 'touch runtime errors', 'error': touch_errors})
    mobile.close()
    browser.close()

print(json.dumps({'passed': len(RESULTS), 'failures': FAILURES}, ensure_ascii=False), flush=True)
if FAILURES:
    raise SystemExit(1)

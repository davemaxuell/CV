"""Check the academic production build with Python Playwright and installed Edge.
Run against port 4174, or set CV_TEST_URL to the GitHub Pages deployment.
"""
import json
import os
import re
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

URL = os.environ.get('CV_TEST_URL', 'http://127.0.0.1:4174')
OUT = Path(__file__).resolve().parents[1] / '.artifacts' / 'academic'
OUT.mkdir(parents=True, exist_ok=True)
CV_URL = 'https://docs.google.com/document/d/1UeQordLd55N3Tvdrse-tNfqrjUSfOBhcgXU6Df60-9c/edit?tab=t.0'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, channel='msedge')
    for width in (1440, 1000, 810, 600, 390, 320):
        page = browser.new_page(viewport={'width': width, 'height': 1000 if width >= 810 else 844})
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        response = page.goto(URL, wait_until='networkidle')
        assert response.ok
        page.evaluate('document.fonts.ready')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), width
        assert page.locator('body').evaluate('(e)=>getComputedStyle(e).fontFamily').startswith('Roboto')
        assert page.evaluate("Array.from(document.fonts).some(f=>f.family==='Roboto' && f.status==='loaded')")
        assert page.locator('h1').inner_text() == 'Dave Maxuell'
        assert 'Undergraduate student' in page.locator('.academic-subtitle').inner_text()
        assert 'February 2027' in page.locator('#about').inner_text()
        assert 'currently a research intern at UNIST' in page.locator('#about').inner_text()
        if width == 1440:
            box = page.locator('main').bounding_box()
            assert abs(box['width'] - 960) < 1
            assert abs(box['x'] - (page.evaluate('document.body.clientWidth') - 960) / 2) < 1
            assert page.locator('.academic-portrait').bounding_box()['width'] == 250
        page.screenshot(path=str(OUT / f'viewport-{width}.png'))

        # Visible evidence and all records survive the layout change.
        assert page.locator('#education article').count() == 2
        assert 'GPA: 4.25 / 4.50' in page.locator('#education').inner_text()
        assert page.locator('#research-experience article').count() == 4
        assert page.locator('#industry-experience article').count() == 3
        assert page.locator('#publications article').count() == 4
        publication_years = [int(re.search(r'20\d{2}', venue).group()) for venue in page.locator('.academic-venue').all_text_contents()]
        assert publication_years == sorted(publication_years, reverse=True)
        assert page.locator('#projects article').count() == 7
        assert page.locator('#recognition article').count() == 6
        assert page.get_by_text('Accepted for oral presentation', exact=True).count() == 2
        assert page.locator('#publications .academic-result').filter(has_text='Excellent Paper Award').count() == 2
        assert '3 first-author works listed' in page.locator('#publications').inner_text()
        assert '19th of 53 teams' in page.locator('#projects').inner_text()
        assert 'GKS-U Scholarship' in page.locator('#recognition').inner_text()
        language_text = page.locator('#languages').inner_text()
        assert all(s in language_text for s in ('TOEIC 955', '2026', 'IELTS Academic 7.5', '2021'))

        # All internal destinations exist; direct links retain their real destinations.
        for link in page.locator('a[href^="#"]').all():
            assert page.locator(link.get_attribute('href')).count() == 1
        assert page.get_by_role('link', name='View CV', exact=True).get_attribute('href') == CV_URL
        assert page.get_by_role('link', name='View project: PharmaAgent OS', exact=True).get_attribute('href') == 'https://pharmaagent-os-ochre.vercel.app/'
        assert page.get_by_role('link', name="GitHub: Factors Affecting Korea's Tourism Industry", exact=True).get_attribute('href') == 'https://github.com/davemaxuell/korea-tourism-forecasting'
        paper_link = page.get_by_role('link', name='View paper on Google Scholar:', exact=False)
        assert 'citation_for_view=DpN3XPYAAAAJ:u5HHmVD_uO8C' in paper_link.get_attribute('href')
        for link in page.locator('a[target="_blank"]').all():
            assert 'noopener' in link.get_attribute('rel')

        # Detailed evidence can be opened by keyboard without a dialog or pointer.
        disclosure = page.locator('#publications details').first
        disclosure.locator('summary').focus()
        page.keyboard.press('Enter')
        assert disclosure.get_attribute('open') is not None
        assert disclosure.locator('dl').is_visible()
        page.keyboard.press('Enter')
        assert disclosure.get_attribute('open') is None
        project = page.locator('#projects article').first
        project.locator('summary').click()
        assert 'DPO' in project.inner_text() and 'distillation' in project.inner_text().lower()
        project.locator('summary').click()

        # Scroll every image into view so lazy tech logos are actually decoded.
        for image in page.locator('img').all():
            image.scroll_into_view_if_needed()
            expect(image).to_have_js_property('complete', True)
            assert image.evaluate('(i)=>i.naturalWidth>0'), image.get_attribute('src')
        for date in page.locator('.academic-date').all():
            assert date.evaluate('(e)=>getComputedStyle(e).whiteSpace==="nowrap" && e.scrollWidth<=e.clientWidth'), date.inner_text()

        # The fixed header must not obscure the anchor heading, including on phones.
        if width <= 700:
            toggle = page.get_by_role('button', name='Open navigation')
            toggle.click()
            expect(page.locator('#academic-navigation')).to_be_visible()
            page.get_by_role('link', name='Projects', exact=True).focus()
            page.keyboard.press('Escape')
            expect(page.locator('#academic-navigation')).to_be_hidden()
            expect(toggle).to_be_focused()
            toggle.click()
        page.get_by_role('link', name='Publications', exact=True).click()
        page.wait_for_function("Math.abs(document.querySelector('#publications').getBoundingClientRect().top) < 150")
        page.wait_for_timeout(500)
        assert page.locator('#publications h2').bounding_box()['y'] >= 65, 'Fixed header hides anchor'
        if width <= 700:
            expect(page.locator('#academic-navigation')).to_be_hidden()
        assert page.locator('html').evaluate('(e)=>e.classList.contains("lenis")')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        page.evaluate('window.scrollTo({top:0,behavior:"instant"})')
        page.wait_for_timeout(200)
        page.screenshot(path=str(OUT / f'page-{width}.png'), full_page=True)
        assert not errors, errors
        print(json.dumps({'width': width, 'layout': 'pass', 'facts': 'pass', 'links': 'pass', 'disclosures': 'pass', 'images': 'pass', 'navigation': 'pass'}), flush=True)
        page.close()

    reduced = browser.new_page(reduced_motion='reduce', viewport={'width': 390, 'height': 844})
    reduced.goto(URL, wait_until='networkidle')
    assert not reduced.locator('html').evaluate('(e)=>e.classList.contains("lenis")')
    assert reduced.locator('html').evaluate('(e)=>getComputedStyle(e).scrollBehavior') == 'auto'
    reduced.keyboard.press('Tab')
    expect(reduced.get_by_role('link', name='Skip to content')).to_be_focused()
    reduced.keyboard.press('Enter')
    assert reduced.url.endswith('#about')
    assert reduced.locator('.floating-pet').count() == 0
    print(json.dumps({'reduced_motion': 'pass', 'skip_link': 'pass'}), flush=True)
    browser.close()

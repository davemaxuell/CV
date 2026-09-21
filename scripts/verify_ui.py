"""Playwright checks against a running production preview (default port 4173).
Run: py -3.13 scripts/verify_ui.py
Set CV_TEST_URL to test another deployment. Browser: installed Edge, headless.
"""
import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

URL = os.environ.get('CV_TEST_URL', 'http://127.0.0.1:4173')
OUT = Path(__file__).resolve().parents[1] / '.artifacts' / 'ui'
OUT.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, channel='msedge')
    for width in (1440, 1000, 810, 390, 320):
        page = browser.new_page(viewport={'width': width, 'height': 1000 if width >= 810 else 844})
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.goto(URL, wait_until='networkidle')
        page.evaluate('document.fonts.ready')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), f'Overflow at {width}'
        assert page.evaluate('document.fonts.check(\'500 24px "General Sans"\')')
        assert page.evaluate('document.fonts.check(\'400 16px "Inter Display"\')')
        assert page.locator('.about-copy p').first.evaluate('(e)=>getComputedStyle(e).fontFamily').startswith('"Inter Display"')
        body_box = page.locator('.cv-content').bounding_box()
        if width == 1440:
            usable_width=page.evaluate('document.body.clientWidth')
            assert abs(body_box['x']-((usable_width-1240)/2+288))<1 and abs(body_box['width']-952)<1
            profile_box = page.locator('.profile-sticky').bounding_box()
            assert abs(profile_box['x'] - (usable_width - body_box['x'] - body_box['width'])) < 1
        elif width in (1000,810):
            assert abs(body_box['width']-(page.evaluate('document.body.clientWidth')-64))<1
            assert body_box['y'] >= 208
        for image in page.locator('img[src*="/logos/"],.profile-photo').all():
            assert image.evaluate('(i)=>i.complete && i.naturalWidth>0'), image.get_attribute('src')
        row=page.locator('#experience .resume-trigger').first
        assert row.get_attribute('aria-expanded')=='false'
        before=row.locator('..').bounding_box()['height']
        row.click()
        page.wait_for_timeout(500)
        assert row.get_attribute('aria-expanded')=='true'
        assert row.locator('..').bounding_box()['height']>before+50
        row.click()
        page.locator('.skill-chip').first.click()
        page.locator('#skill-detail').wait_for()
        page.locator('.skill-chip').first.click()
        page.locator('#projects').scroll_into_view_if_needed()
        page.get_by_role('button',name='Next projects',exact=True).click()
        page.wait_for_timeout(550)
        assert page.locator('#projects-carousel').evaluate('(e)=>e.scrollLeft')>100
        project_trigger=page.locator('.project-link').nth(1)
        project_trigger.click()
        dialog=page.get_by_role('dialog')
        dialog.wait_for()
        assert dialog.evaluate('(e)=>e.contains(document.activeElement)')
        page.keyboard.press('Escape')
        page.get_by_role('dialog').wait_for(state='hidden')
        if width < 810:
            page.get_by_role('button',name='Open profile menu').click()
            page.locator('#mobile-profile-menu').wait_for()
        cv_link=page.get_by_role('link',name='View CV',exact=True).filter(visible=True)
        assert cv_link.get_attribute('href')=='https://docs.google.com/document/d/1UeQordLd55N3Tvdrse-tNfqrjUSfOBhcgXU6Df60-9c/edit?tab=t.0'
        assert cv_link.get_attribute('target')=='_blank'
        assert 'noopener' in cv_link.get_attribute('rel')
        assert page.locator('.contact-form').evaluate('(f)=>!f.checkValidity()')
        assert page.get_by_role('button',name='Open email draft',exact=True).count()==1
        page.evaluate('document.activeElement.blur(); window.scrollTo(0,0)')
        page.wait_for_timeout(500)
        page.screenshot(path=str(OUT/f'viewport-{width}.png'))
        page.screenshot(path=str(OUT/f'page-{width}.png'),full_page=True)
        assert not errors, errors
        print(json.dumps({'width':width,'layout':'pass','fonts':'pass','logos':'pass','accordion':'pass','carousel':'pass','dialogs':'pass','cv_link':'pass'}),flush=True)
        page.close()
    reduced=browser.new_page(reduced_motion='reduce',viewport={'width':390,'height':844})
    reduced.goto(URL,wait_until='networkidle')
    assert reduced.locator('.cv-shell').evaluate('(e)=>getComputedStyle(e).animationName')=='none'
    reduced.locator('#tech-stack').scroll_into_view_if_needed()
    assert reduced.locator('.tech-track').evaluate('(e)=>getComputedStyle(e).animationName')=='none'
    pet=reduced.locator('.floating-pet')
    pet.scroll_into_view_if_needed()
    assert pet.get_by_role('button',name='Play pet animation').is_visible()
    assert pet.locator('img').evaluate('(e)=>e.complete && e.naturalWidth>0')
    pet.get_by_role('button',name='Play pet animation').click()
    reduced.wait_for_function("!document.querySelector('.floating-pet canvas').classList.contains('invisible')")
    pet.get_by_role('button',name='Pause pet animation').click()
    print('Reduced motion, static tech strip, pet opt-in: pass',flush=True)
    browser.close()

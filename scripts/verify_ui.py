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
        assert page.locator('.project-grid .project-card').count()==7
        assert page.locator('.project-grid').evaluate('(e)=>e.scrollWidth<=e.clientWidth')
        for title in page.locator('.resume-title').all():
            assert title.evaluate('(e)=>e.scrollWidth<=e.clientWidth+1'), title.inner_text()
        assert page.locator('#experience .resume-summary').count()==7
        assert page.locator('#education .resume-summary').first.inner_text()=='GPA: 4.25 / 4.50 · Expected graduation: Feb. 2027'
        assert page.locator('#publications .resume-status').all_text_contents()==['Published in proceedings']*2
        hclt_links = page.get_by_role('link', name='View paper on KoreaScience:', exact=False)
        assert hclt_links.count() == 2
        assert {link.get_attribute('href') for link in hclt_links.all()} == {
            'https://koreascience.kr/article/CFKO202630154054759.do',
            'https://koreascience.kr/article/CFKO202630057630354.page?lang=ko',
        }
        assert '3 first-author works' in page.locator('#publications .section-context').inner_text()
        for link in page.locator('.cv-navigation a').all():
            assert page.locator(link.get_attribute('href')).count()==1
        assert 'Cheongeum (청음)' in page.locator('#projects').inner_text()
        assert 'SGIS Dongne Type' not in page.locator('#projects').inner_text()
        assert 'Silla Road' not in page.locator('#projects').inner_text()
        assert 'XAI · Hallucination' not in page.locator('#projects').inner_text()
        assert page.get_by_role('link',name='View project: PharmaAgent OS',exact=True).get_attribute('href')=='https://pharmaagent-os-ochre.vercel.app/'
        assert page.get_by_role('link',name="View Factors Affecting Korea's Tourism Industry on GitHub",exact=True).get_attribute('href')=='https://github.com/davemaxuell/korea-tourism-forecasting'
        assert page.get_by_role('link',name='View SLM_v2.1 — 46M Language Model on GitHub',exact=True).get_attribute('href')=='https://github.com/davemaxuell/Global-Innovation-Build-Challenge-V2'
        assert page.get_by_role('link',name='View SLM_v2.1 — 46M Language Model on Hugging Face',exact=True).get_attribute('href')=='https://huggingface.co/davemaxuellkr/Global-Innovation-Build-Challenge-V2'
        assert page.get_by_role('link',name='View SLM_v2.1 — 46M Language Model on Devpost',exact=True).get_attribute('href')=='https://devpost.com/software/slm_v1'
        assert page.get_by_role('link',name='View certificate for SLM_v2.1 — 46M Language Model',exact=True).get_attribute('href')=='/certificates/GIBC_V2_SLM_v2_1_Bronze_Dave_Maxuell.pdf'
        assert page.get_by_role('link',name='View Korean Essay Scoring — AI Malpyeong on Hugging Face',exact=True).get_attribute('href')=='https://huggingface.co/davemaxuellkr/260814-writer-model'
        assert page.get_by_role('link',name='Official leaderboard: Korean Essay Scoring — AI Malpyeong',exact=True).get_attribute('href')=='https://kli.korean.go.kr/benchmark/taskOrdtm/taskLeaderBoard.do?taskOrdtmId=205&clCd=ING_TASK&subMenuId=sub04'
        assert page.get_by_role('button',name='Read details: Korean Essay Scoring — AI Malpyeong',exact=True).count()==1
        assert '3rd Place (Bronze) · Track 01: Foundational LLM Development' in page.locator('#recognition').inner_text()
        assert page.get_by_role('link',name='Certificate (PDF): Global Innovation Build Challenge V2 — SLM_v2.1',exact=True).get_attribute('href')=='/certificates/GIBC_V2_SLM_v2_1_Bronze_Dave_Maxuell.pdf'
        assert 'Course Completion Certificates' in page.locator('#certificates').inner_text()
        assert page.locator('#certificates .recognition-row').count()==5
        assert page.get_by_role('link',name='View certificate: End-to-End Deep Learning (딥러닝 한번에 끝내기)',exact=True).get_attribute('href')=='https://drive.google.com/file/d/184AS_GqFYK33qzPr4QfVGMuaq2vQD98c/view?usp=sharing'
        assert page.get_by_role('link',name='View certificate: MLOps Essentials: Model Deployment to Operations (MLOps의 정석: AI 모델 배포부터 운영까지)',exact=True).get_attribute('href')=='https://drive.google.com/file/d/1_y2flKGx9G1N49SX-_ISFBmgQGHVjJgv/view?usp=sharing'
        lang_text=page.locator('#language-skills').inner_text()
        assert all(s in lang_text for s in ('Indonesian — Native','Korean — TOPIK Level 6','English — TOEIC 955','English — IELTS Academic 7.5'))
        assert 'Highest Tier' not in lang_text and 'Proficiency' not in lang_text
        project_trigger=page.get_by_role('button',name='Read details: Cheongeum (청음) — Voice AI Public-Service Agent',exact=True)
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
        assert cv_link.get_attribute('href')=='https://docs.google.com/document/d/1fJ1FdzzXGrje7FAMMglRCvJLzkBgA7TI/edit#heading=h.fpj7oqtimrw9'
        assert cv_link.get_attribute('target')=='_blank'
        assert 'noopener' in cv_link.get_attribute('rel')
        paper_cv_link=page.locator('#links').get_by_role('link',name='Paper CV (Google Docs)',exact=True)
        assert paper_cv_link.get_attribute('href')=='https://docs.google.com/document/d/1fJ1FdzzXGrje7FAMMglRCvJLzkBgA7TI/edit#heading=h.fpj7oqtimrw9'
        assert paper_cv_link.get_attribute('target')=='_blank'
        assert 'noopener' in paper_cv_link.get_attribute('rel')
        tech_text=page.locator('#tech-stack').inner_text()
        assert all(s in tech_text for s in ('LangChain','CUDA','Claude Code','Codex','Cursor'))
        assert page.locator('.contact-form').evaluate('(f)=>!f.checkValidity()')
        assert page.get_by_role('button',name='Open email draft',exact=True).count()==1
        page.evaluate('document.activeElement.blur(); window.scrollTo(0,0)')
        page.wait_for_timeout(500)
        page.screenshot(path=str(OUT/f'viewport-{width}.png'))
        page.screenshot(path=str(OUT/f'page-{width}.png'),full_page=True)
        assert not errors, errors
        print(json.dumps({'width':width,'layout':'pass','fonts':'pass','logos':'pass','accordion':'pass','project_grid':'pass','visible_evidence':'pass','dialogs':'pass','cv_link':'pass'}),flush=True)
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

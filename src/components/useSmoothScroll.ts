import { useCallback, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function useSmoothScroll() {
  const instance = useRef<Lenis | null>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncLock = () => {
      if (document.body.style.overflow === 'hidden') instance.current?.stop();
      else instance.current?.start();
    };
    const configure = () => {
      instance.current?.destroy();
      instance.current = null;
      if (preference.matches) return;
      instance.current = new Lenis({
        autoRaf: true,
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        prevent: element => element.classList.contains('cv-dialog'),
      });
      syncLock();
    };
    configure();
    const observer = new MutationObserver(syncLock);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    preference.addEventListener('change', configure);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', configure);
      instance.current?.destroy();
      instance.current = null;
    };
  }, []);

  return useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (instance.current) instance.current.scrollTo(target);
    else target.scrollIntoView({ behavior: 'instant' });
  }, []);
}

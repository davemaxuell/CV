import { useEffect, useRef, useState } from 'react';
import type { Rive } from '@rive-app/canvas';
import wasmUrl from '@rive-app/canvas/rive.wasm?url';

const source = 'https://rive.app/marketplace/28334-53514-interactive-character-follow/';
const assetBase = `${import.meta.env.BASE_URL}pet/interactive-character-follow`;

export const RivePet = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Rive | null>(null);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (sceneRef.current) observer.observe(sceneRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible && !paused) setStarted(true);
  }, [visible, paused]);

  useEffect(() => {
    if (!started || !canvasRef.current) return;
    const canvas = canvasRef.current;
    let disposed = false;
    let player: Rive | undefined;
    let resizeObserver: ResizeObserver | undefined;

    const load = async () => {
      try {
        const { Rive, Layout, Fit, Alignment, RuntimeLoader } = await import('@rive-app/canvas');
        if (disposed) return;
        RuntimeLoader.setWasmUrl(wasmUrl);
        RuntimeLoader.setWasmFallbackUrl(null);
        player = new Rive({
          canvas,
          src: `${assetBase}.riv`,
          artboard: 'Main artboard',
          stateMachine: 'State Machine 1',
          autoplay: false,
          isTouchScrollEnabled: true,
          layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
          onLoad: () => {
            if (disposed || !player) return;
            player.resizeDrawingSurfaceToCanvas();
            playerRef.current = player;
            resizeObserver = new ResizeObserver(() => player?.resizeDrawingSurfaceToCanvas());
            resizeObserver.observe(canvas);
            setReady(true);
          },
          onLoadError: () => { if (!disposed) setFailed(true); },
        });
      } catch {
        if (!disposed) setFailed(true);
      }
    };
    void load();

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      player?.cleanup();
      playerRef.current = null;
    };
  }, [started]);

  useEffect(() => {
    const syncPlayback = () => {
      const player = playerRef.current;
      if (!player) return;
      if (visible && !paused && !document.hidden) {
        player.play('State Machine 1');
        player.startRendering();
      } else {
        player.pause();
        player.stopRendering();
      }
    };
    syncPlayback();
    document.addEventListener('visibilitychange', syncPlayback);
    return () => document.removeEventListener('visibilitychange', syncPlayback);
  }, [visible, paused, ready]);

  useEffect(() => {
    if (!ready || paused || failed) return;
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const update = () => {
      frame = 0;
      const canvas = canvasRef.current;
      if (!canvas || document.hidden) return;
      const rect = canvas.getBoundingClientRect();
      canvas.dispatchEvent(new MouseEvent('mousemove', {
        clientX: rect.left + Math.max(0, Math.min(1, x / window.innerWidth)) * rect.width,
        clientY: rect.top + Math.max(0, Math.min(1, y / window.innerHeight)) * rect.height,
        bubbles: false,
      }));
    };
    const follow = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('pointermove', follow, { passive: true });
    window.addEventListener('pointerdown', follow, { passive: true });
    update();
    return () => {
      window.removeEventListener('pointermove', follow);
      window.removeEventListener('pointerdown', follow);
      cancelAnimationFrame(frame);
    };
  }, [ready, paused, failed]);

  return (
    <figure className="pet-companion print:hidden" aria-label="Interactive character companion">
      <div ref={sceneRef} className="pet-scene">
        {(!ready || failed) && (
          <img src={`${assetBase}.png`} alt="A friendly illustrated character with round glasses" className="absolute inset-0 w-full h-full object-contain" width="800" height="600" />
        )}
        <canvas
          ref={canvasRef}
          aria-label="Website pet that follows your pointer across the page"
          role="img"
          className={`block w-full h-full ${!ready || failed ? 'invisible' : ''} ${paused ? 'pointer-events-none' : ''}`}
        />
      </div>
      <figcaption className="pet-caption">
        <details className="pet-credits">
          <summary>Credits</summary>
          <div>
            <a href={source} target="_blank" rel="noreferrer">Character by alinazari</a>
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>
          </div>
        </details>
        {!failed && (
          <button type="button" onClick={() => setPaused(value => !value)}
            aria-label={paused ? 'Play pet animation' : 'Pause pet animation'}>
            {paused ? 'Play' : 'Pause'}
          </button>
        )}
        {failed && <span>Animation unavailable</span>}
      </figcaption>
    </figure>
  );
};

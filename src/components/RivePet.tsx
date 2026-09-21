import { useEffect, useRef, useState } from 'react';
import type { Rive } from '@rive-app/canvas';
import wasmUrl from '@rive-app/canvas/rive.wasm?url';
import { PetThoughts } from './PetThoughts';

const assetBase = `${import.meta.env.BASE_URL}pet/interactive-character-follow`;

export const RivePet = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Rive | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
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
    let frame = 0;
    let previousTime = performance.now();
    let gaze: { x: number; y: number } | null = null;
    const update = () => {
      frame = 0;
      const canvas = canvasRef.current;
      const pointer = pointerRef.current;
      if (!canvas || !pointer || !ready || paused || failed || document.hidden) return;
      const rect = canvas.getBoundingClientRect();
      // Rive expects a point inside its artboard. Preserve the actual direction
      // from the character, projecting distant pointers to the artboard edge.
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = pointer.x - centerX;
      const dy = pointer.y - centerY;
      const scale = Math.min(1,
        (rect.width * 0.45) / (Math.abs(dx) || 1),
        (rect.height * 0.45) / (Math.abs(dy) || 1));
      const target = { x: centerX + dx * scale, y: centerY + dy * scale };
      const now = performance.now();
      const blend = 1 - Math.exp(-Math.min(now - previousTime, 32) / 65);
      previousTime = now;
      if (!gaze) gaze = target;
      gaze.x += (target.x - gaze.x) * blend;
      gaze.y += (target.y - gaze.y) * blend;
      const settling = Math.hypot(target.x - gaze.x, target.y - gaze.y) > 0.2;
      if (!settling) gaze = target;
      canvas.dispatchEvent(new MouseEvent('mousemove', {
        clientX: gaze.x,
        clientY: gaze.y,
        bubbles: false,
      }));
      if (settling) frame = requestAnimationFrame(update);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const follow = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      schedule();
    };
    window.addEventListener('pointermove', follow, { passive: true });
    window.addEventListener('pointerdown', follow, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('scroll', schedule, { passive: true });
    update();
    return () => {
      window.removeEventListener('pointermove', follow);
      window.removeEventListener('pointerdown', follow);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('scroll', schedule);
      cancelAnimationFrame(frame);
    };
  }, [ready, paused, failed]);

  return (
    <figure className="pet-companion print:hidden" aria-label="Interactive character companion">
      <svg width="0" height="0" className="pet-filter" aria-hidden="true" focusable="false">
        <defs>
          <filter id="pet-ink" colorInterpolationFilters="sRGB">
            {/* Keep the monochrome artwork transparent without blending the speech bubble. */}
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -0.2126 -0.7152 -0.0722 1 0" />
          </filter>
        </defs>
      </svg>
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
        <PetThoughts active={visible} />
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

import { useEffect, useRef, useState } from 'react';
import { avatarDialogues } from '../data/avatarDialogues';
import { petThoughts } from '../data/portfolioData';

const targetSelector = '[data-avatar-context]';
const hoverDelay = 450;
const proximity = 18;

export interface PetDialogue {
  text: string;
  topic: string;
  label?: string;
  keyboard: boolean;
}

// Draw every line once before reshuffling, including across visits to a topic.
export function createDialogueDeck(random = Math.random) {
  const decks = new Map<string, { remaining: string[]; previous?: string }>();
  return (topic: string, lines: readonly string[]) => {
    const deck = decks.get(topic) ?? { remaining: [] };
    if (!deck.remaining.length) {
      deck.remaining = [...lines];
      for (let i = deck.remaining.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [deck.remaining[i], deck.remaining[j]] = [deck.remaining[j], deck.remaining[i]];
      }
      const last = deck.remaining.length - 1;
      if (last > 0 && deck.remaining[last] === deck.previous) {
        [deck.remaining[0], deck.remaining[last]] = [deck.remaining[last], deck.remaining[0]];
      }
    }
    const text = deck.remaining.pop();
    deck.previous = text;
    decks.set(topic, deck);
    return text;
  };
}

function topicFor(element: Element | null): string | null {
  const key = element?.closest<HTMLElement>(targetSelector)?.dataset.avatarContext;
  return key && avatarDialogues[key] ? key : null;
}

function nearbyTopic(x: number, y: number): string | null {
  const hit = document.elementFromPoint(x, y);
  if (!hit || hit.closest('[data-avatar-ignore], [role="dialog"]')) return null;
  const direct = hit.closest<HTMLElement>(targetSelector);
  const directTopic = topicFor(direct);
  // A specific card always wins over its containing section.
  if (directTopic?.includes(':')) return directTopic;

  let nearest = directTopic;
  let nearestDistance = proximity + 1;
  const scope = direct ?? document;
  for (const element of scope.querySelectorAll<HTMLElement>(targetSelector)) {
    const topic = element.dataset.avatarContext;
    if (!topic || !avatarDialogues[topic] || !element.getClientRects().length) continue;
    const rect = element.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= innerHeight || rect.right <= 0 || rect.left >= innerWidth) continue;
    const distance = Math.hypot(Math.max(rect.left - x, 0, x - rect.right), Math.max(rect.top - y, 0, y - rect.bottom));
    if (distance > proximity || distance > nearestDistance || (distance === nearestDistance && !topic.includes(':'))) continue;
    // Ignore clipped marquee copies and content covered by another surface.
    const edge = document.elementFromPoint(
      Math.max(0, Math.min(innerWidth - 1, Math.max(rect.left + 1, Math.min(x, rect.right - 1)))),
      Math.max(0, Math.min(innerHeight - 1, Math.max(rect.top + 1, Math.min(y, rect.bottom - 1)))),
    );
    if (!edge || !element.contains(edge)) continue;
    nearest = topic;
    nearestDistance = distance;
  }
  return nearest;
}

export function usePetDialogue(enabled: boolean) {
  const [dialogue, setDialogue] = useState<PetDialogue | null>(null);
  const draw = useRef(createDialogueDeck());

  useEffect(() => {
    let dwellTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    let candidate: string | null = null;
    let candidateKeyboard = false;
    let lastTopic: string | null = null;
    let lastSpokenAt = 0;
    let pointer: { x: number; y: number } | null = null;
    let touchStart: { x: number; y: number } | null = null;
    const available = () => enabled && !document.hidden && document.hasFocus();

    const scheduleIdle = (initial = false) => {
      clearTimeout(idleTimer);
      if (!available()) return;
      idleTimer = setTimeout(() => {
        if (!available()) return;
        if (pointer) {
          const topic = nearbyTopic(pointer.x, pointer.y);
          if (topic !== candidate) { select(topic); return; }
        }
        // A resting cursor gets another relevant line; idle chatter resumes off-topic.
        speak(candidate ?? 'idle', candidateKeyboard);
      }, initial ? 3000 + Math.random() * 1500 : 18000 + Math.random() * 12000);
    };

    const speak = (topic: string, keyboard: boolean) => {
      const entry = avatarDialogues[topic];
      const text = draw.current(topic, entry?.lines ?? petThoughts);
      if (!text || !available()) return;
      clearTimeout(hideTimer);
      clearTimeout(idleTimer);
      lastTopic = topic;
      lastSpokenAt = Date.now();
      setDialogue({ text, topic, label: entry?.label, keyboard });
      // Leave enough time to read the full sentence, then let the page breathe.
      hideTimer = setTimeout(() => {
        setDialogue(null);
        scheduleIdle();
      }, Math.max(6500, Math.min(10000, text.split(/\s+/).length * 280 + 2000)));
    };

    const select = (topic: string | null, keyboard = false) => {
      if (candidate === topic) return;
      candidate = topic;
      candidateKeyboard = keyboard && topic !== null;
      clearTimeout(dwellTimer);
      clearTimeout(idleTimer);
      if (!topic) {
        scheduleIdle();
        return;
      }
      // Moving within one card or briefly brushing its edge should not restart it.
      if (topic === lastTopic && Date.now() - lastSpokenAt < 8000) {
        scheduleIdle();
        return;
      }
      const readingDelay = lastTopic && lastTopic !== 'idle' ? Math.max(0, 1400 - (Date.now() - lastSpokenAt)) : 0;
      dwellTimer = setTimeout(() => {
        if (pointer) {
          const currentTopic = nearbyTopic(pointer.x, pointer.y);
          if (currentTopic !== topic) { select(currentTopic); return; }
        }
        if (available() && candidate === topic) speak(topic, keyboard);
      }, Math.max(hoverDelay, readingDelay));
    };

    const updatePointer = () => {
      frame = 0;
      if (available() && pointer) select(nearbyTopic(pointer.x, pointer.y));
    };
    const schedulePointer = () => {
      if (pointer && !frame && available()) frame = requestAnimationFrame(updatePointer);
    };
    const scroll = () => {
      if (pointer) schedulePointer();
      else if (!candidateKeyboard) select(null);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      pointer = { x: event.clientX, y: event.clientY };
      schedulePointer();
    };
    const leave = (event: PointerEvent) => {
      // Touch pointers leave the document after every tap; that is not a hover exit.
      if (event.pointerType === 'touch') return;
      pointer = null;
      select(null);
    };
    const focus = (event: FocusEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target?.matches(':focus-visible') || target.closest('[data-avatar-ignore]')) return;
      pointer = null;
      select(topicFor(target), true);
    };
    const blur = (event: FocusEvent) => {
      if (pointer) return;
      const next = event.relatedTarget instanceof Element ? event.relatedTarget : null;
      select(next?.closest('[data-avatar-ignore]') ? null : topicFor(next), true);
    };
    const down = (event: PointerEvent) => {
      if (event.pointerType === 'touch') touchStart = { x: event.clientX, y: event.clientY };
    };
    const up = (event: PointerEvent) => {
      if (event.pointerType !== 'touch' || !touchStart) return;
      const tapped = Math.hypot(event.clientX - touchStart.x, event.clientY - touchStart.y) < 10;
      touchStart = null;
      if (!tapped) return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('[data-avatar-ignore]')) return;
      pointer = null;
      select(topicFor(target));
    };
    const cancelTouch = () => { touchStart = null; };
    const reset = () => {
      clearTimeout(dwellTimer);
      clearTimeout(hideTimer);
      clearTimeout(idleTimer);
      cancelAnimationFrame(frame);
      frame = 0;
      candidate = null;
      candidateKeyboard = false;
      pointer = null;
      touchStart = null;
      setDialogue(null);
      scheduleIdle(true);
    };

    reset();
    if (!enabled) return;
    document.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    document.addEventListener('pointerdown', down, { passive: true });
    document.addEventListener('pointerup', up, { passive: true });
    document.addEventListener('pointercancel', cancelTouch);
    document.addEventListener('focusin', focus);
    document.addEventListener('focusout', blur);
    document.addEventListener('visibilitychange', reset);
    window.addEventListener('blur', reset);
    window.addEventListener('focus', reset);
    window.addEventListener('resize', schedulePointer);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      clearTimeout(dwellTimer);
      clearTimeout(hideTimer);
      clearTimeout(idleTimer);
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerdown', down);
      document.removeEventListener('pointerup', up);
      document.removeEventListener('pointercancel', cancelTouch);
      document.removeEventListener('focusin', focus);
      document.removeEventListener('focusout', blur);
      document.removeEventListener('visibilitychange', reset);
      window.removeEventListener('blur', reset);
      window.removeEventListener('focus', reset);
      window.removeEventListener('resize', schedulePointer);
      window.removeEventListener('scroll', scroll);
    };
  }, [enabled]);

  return enabled ? dialogue : null;
}

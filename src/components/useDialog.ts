import { useEffect, useRef } from "react";

export const useDialog = (open: boolean, onClose: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const close = useRef(onClose);
  close.current = onClose;
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () =>
      Array.from(
        ref.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]),a[href],input,textarea,[tabindex="0"]',
        ) || [],
      ).filter((el) => el.getClientRects().length);
    focusable()[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close.current();
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0],
        last = items.at(-1);
      if (!first) {
        event.preventDefault();
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.body.style.overflow = overflow;
      if (previous?.isConnected && previous !== document.body) {
        previous.focus();
      } else {
        // The mobile menu closes when it opens a dialog, removing its trigger.
        const fallback = Array.from(
          document.querySelectorAll<HTMLElement>(
            ".profile-menu, .profile-contact button",
          ),
        ).find((el) => el.getClientRects().length);
        fallback?.focus();
      }
    };
  }, [open]);
  return ref;
};

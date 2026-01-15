import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  handler: () => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | PointerEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("pointerdown", listener);

    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [ref, handler, enabled]);
}

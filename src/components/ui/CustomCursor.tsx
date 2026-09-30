import { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const updatePointerMode = () => setEnabled(finePointer.matches);
    updatePointerMode();
    finePointer.addEventListener('change', updatePointerMode);

    const handleMove = (event: PointerEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>('a, button, [data-cursor]');
      if (!interactive) return;

      setActive(true);
      setLabel(interactive.dataset.cursor ?? '');
    };

    const handleOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const related = event.relatedTarget as HTMLElement | null;
      const from = target?.closest<HTMLElement>('a, button, [data-cursor]');
      const to = related?.closest<HTMLElement>('a, button, [data-cursor]');

      if (from && from !== to) {
        setActive(false);
        setLabel('');
      }
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerover', handleOver);
    window.addEventListener('pointerout', handleOut);

    return () => {
      finePointer.removeEventListener('change', updatePointerMode);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
      window.removeEventListener('pointerout', handleOut);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className={`custom-cursor ${active ? 'is-active' : ''}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
};

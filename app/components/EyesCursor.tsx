'use client';

import { useEffect, useRef } from 'react';

const SIZE   = 28;   // outer eye diameter
const GAP    = 12;   // space between the two eyes
const PUPIL_MOVE = 6; // how far pupils can travel inside the eye

export default function EyesCursor() {
  const left  = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function move(e: MouseEvent) {
      const { clientX: x, clientY: y } = e;

      // position eyes left / right of pointer
      if (left.current && right.current) {
        left .current.style.left = `${x - GAP - SIZE}px`;
        left .current.style.top  = `${y - SIZE / 2}px`;
        right.current.style.left = `${x + GAP}px`;
        right.current.style.top  = `${y - SIZE / 2}px`;

        [left.current, right.current].forEach((eye) => {
          const pupil = eye.firstElementChild as HTMLElement;
          const rect  = eye.getBoundingClientRect();
          const dx    = x - (rect.left + rect.width / 2);
          const dy    = y - (rect.top  + rect.height / 2);
          const angle = Math.atan2(dy, dx);
          pupil.style.transform = `translate(${Math.cos(angle) * PUPIL_MOVE}px, ${Math.sin(angle) * PUPIL_MOVE}px)`;
        });
      }
    }
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <div ref={left}  className="eye"><div className="pupil" /></div>
      <div ref={right} className="eye"><div className="pupil" /></div>
    </>
  );
}

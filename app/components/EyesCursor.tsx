'use client';

import { useEffect, useRef } from 'react';

const SIZE        = 28;   // eye diameter
const GAP         = 12;   // space between the two eyes
const PUPIL_RANGE = 6;    // how far the pupil may drift

export default function EyesCursor() {
  const left  = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);

  // helper – centre of the cat SVG (used every pointer-move)
  const getCatCentre = () => {
    const cat = document.getElementById('cat-eyes');
    if (!cat) return null;
    const r = cat.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };

  /* -------- keep this single effect -------- */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      /* place eyes around the pointer */
      left .current?.style.setProperty('left', `${x - GAP - SIZE}px`);
      left .current?.style.setProperty('top',  `${y - SIZE / 2}px`);
      right.current?.style.setProperty('left', `${x + GAP}px`);
      right.current?.style.setProperty('top',  `${y - SIZE / 2}px`);

      /* steer pupils toward the cat */
      const cat = getCatCentre();
      if (!cat) return;

      [left.current, right.current].forEach(eye => {
        if (!eye) return;
        const pupil = eye.firstElementChild as HTMLElement;
        const rect  = eye.getBoundingClientRect();
        const dx    = cat.x - (rect.left + rect.width / 2);
        const dy    = cat.y - (rect.top  + rect.height / 2);
        const ang   = Math.atan2(dy, dx);
        pupil.style.transform =
          `translate(${Math.cos(ang) * PUPIL_RANGE}px, ${Math.sin(ang) * PUPIL_RANGE}px)`;
      });
    };

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

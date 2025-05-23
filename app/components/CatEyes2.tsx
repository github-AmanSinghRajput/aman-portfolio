"use client";
import { useEffect, useRef } from "react";

export default function CatEyes2() {
  // pupil refs
  const left = useRef<SVGCircleElement>(null);
  const right = useRef<SVGCircleElement>(null);

  /* ---------- cursor tracking ---------- */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const svg = document.getElementById("cat-eyes")!;
      const box = svg.getBoundingClientRect();

      // centres of each eye **after** we shift the path  ↓↓↓
      const eyeL = { x: 82, y: 48 }; // <- tune X until it sits perfectly
      const eyeR = { x: 116, y: 48 };

      const maxR = 6; // pupil travel radius

      const update = (
        ref: React.RefObject<SVGCircleElement>,
        eye: { x: number; y: number }
      ) => {
        if (!ref.current) return;
        const svgX = e.clientX - box.left;
        const svgY = e.clientY - box.top;
        const dx = svgX - eye.x,
          dy = svgY - eye.y;
        const angle = Math.atan2(dy, dx);
        ref.current.setAttribute(
          "transform",
          `translate(${maxR * Math.cos(angle)} ${maxR * Math.sin(angle)})`
        );
      };

      update(left, eyeL);
      update(right, eyeR);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <svg
      id="cat-eyes"
      viewBox="0 0 202.964 202.964"
      className="absolute bottom-2 left-2 w-[125px] pointer-events-none select-none z-30"
    >
      {/* ---------- shift silhouette 24 px right so head is centred ---------- */}
      <g transform="translate(-15 5)">
        <path
          className="fill-black dark:fill-white transition-colors duration-300"
          d="M150.236,134.375c0-14.017-7.971-47.964-19.625-67.054c15.644-3.876,26.64-13.043,26.64-23.748
		c0-7.953-6.083-15.052-15.594-19.765L130.617,0l-8.238,18.347c-2.716-0.32-5.522-0.494-8.397-0.494c-2.886,0-5.705,0.173-8.427,0.5
		L97.17,0L86.328,23.802c-9.536,4.713-15.606,11.819-15.606,19.771c0,10.705,10.997,19.872,26.631,23.748
		c-4.129,6.769-7.782,15.402-10.787,24.345c-0.38-4.141-1.586-8.257-3.903-12.023c-9.87-16.042-30.954-21.068-47.002-11.198
		C15.968,80.56,9.809,106.433,21.917,126.118c7.222,11.752,18.587,19.984,32.004,23.182c4.004,0.956,8.044,1.431,12.06,1.431
		c3.504,0,6.966-0.487,10.382-1.193c-1.31,4.555-2.125,9.384-2.125,13.28c0,10.541,5.587,10.145,12.471,10.145
		c5.718,0,10.492,0.177,11.953-5.766c4.658,2.174,9.834,3.428,15.32,3.428c5.48,0,10.662-1.254,15.32-3.428
		c1.468,5.955,6.235,5.766,11.96,5.766c6.887,0,12.47,0.396,12.47-10.145c0-5.925-1.766-14.041-4.53-20.021
		C149.854,140.087,150.236,137.273,150.236,134.375z M55.377,143.229c-11.798-2.813-21.793-10.041-28.141-20.38
		c-10.306-16.764-5.063-38.785,11.697-49.104c13.119-8.062,30.36-3.958,38.422,9.152c6.272,10.205,3.072,23.607-7.127,29.879
		c-3.809,2.345-8.3,3.058-12.66,2.028c-4.351-1.041-8.041-3.708-10.379-7.521c-3.693-6.004-1.814-13.901,4.183-17.579
		c1.465-0.907,1.921-2.828,1.023-4.293c-0.91-1.467-2.832-1.927-4.29-1.022c-8.924,5.486-11.719,17.226-6.229,26.165
		c3.215,5.23,8.272,8.89,14.246,10.314c5.967,1.419,12.142,0.427,17.378-2.776c3.057-1.875,5.562-4.293,7.603-6.99
		c-2.146,9.39-3.355,17.829-3.355,23.261c0,2.825,0.368,5.565,0.983,8.196C71.206,144.8,63.213,145.08,55.377,143.229z
		 M96.841,46.323c-5.992,0-10.851-2.07-10.851-4.616c0-2.137,3.431-3.921,8.056-4.445l2.789,6.573l2.789-6.573
		c4.627,0.524,8.062,2.308,8.062,4.445C107.691,44.259,102.833,46.323,96.841,46.323z M120.278,41.701
		c0-2.137,3.44-3.921,8.062-4.445l2.789,6.573l2.789-6.573c4.628,0.524,8.062,2.308,8.062,4.445c0,2.552-4.858,4.616-10.851,4.616
		C125.138,46.317,120.278,44.259,120.278,41.701z"
        />
      </g>
      {/* ---------- eye whites (vertical ellipse) ---------- */}
      {/* <ellipse cx="82"  cy="48" rx="12" ry="18" fill="lime" />
      <ellipse cx="116" cy="48" rx="12" ry="18" fill="lime" /> */}
      {/* ---------- pupils ---------- */}
      {/* <circle ref={left}  cx="82"  cy="48" r="4" fill="black" />
      <circle ref={right} cx="116" cy="48" r="4" fill="black" /> */}
      /* ─ eye whites ─ */
      <ellipse
        cx="82"
        cy="48"
        rx="11"
        ry="19"
        className="fill-[lime] dark:fill-[#C084FC]"
      />
      <ellipse
        cx="116"
        cy="48"
        rx="11"
        ry="19"
        className="fill-[lime] dark:fill-[#C084FC]"
      />
      /* ─ pupils ─ */
      <circle
        ref={left}
        cx="82"
        cy="48"
        r="4"
        className="fill-black dark:fill-black"
      />
      <circle
        ref={right}
        cx="116"
        cy="48"
        r="4"
        className="fill-black dark:fill-black"
      />
    </svg>
  );
}

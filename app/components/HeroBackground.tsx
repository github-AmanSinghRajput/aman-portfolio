'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10">
      {/* Dark Mode Background */}
      {/* <Image
        src="/assets/hero-bg-dark-mode.jpg"
        alt="Dark Mode Background"
        fill
        priority
        className={`object-cover transition-opacity duration-1000 ease-in-out ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      /> */}
      {/* ---------- DARK MODE VIDEO ---------- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        // hide on mobile to save data
        className={`
          absolute inset-0 w-full h-full object-cover
          hidden dark:block md:block
          transition-opacity duration-700
          ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}
        `}
        poster="/assets/hero-bg-dark-mode.jpg"   // quick first frame
      >
        <source src="/assets/dark_mode_background.mp4" type="video/mp4" />
        {/* fallback image for very old browsers */}
      </video>

      {/* ---------- DARK MODE FALLBACK IMAGE (if video fails) ---------- */}
      <Image
        src="/assets/hero-bg-dark-mode.jpg"
        alt="Dark mode background"
        fill
        priority
        className={`object-cover ${
          theme === 'dark' ? 'opacity-0 md:opacity-0' : 'opacity-0'
        }`}
      />

      {/* Light Mode Background */}
      {/* <Image
        src="/assets/hero-bg-light-mode.jpg"
        alt="Light Mode Background"
        fill
        priority
        className={`object-cover object-right transition-opacity duration-1000 ease-in-out ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      /> */}
      
    {/* ─── LIGHT MODE VIDEO ─── */}
    <video
        autoPlay loop muted playsInline
        className={`
          absolute inset-0 w-full h-full object-cover
          block dark:hidden md:block       /* show only when NOT dark */
          transition-opacity duration-700
          ${theme === 'light' ? 'opacity-100' : 'opacity-0'}
        `}
        poster="/assets/hero-bg-light-mode.jpg"
      >
        <source src="/assets/light_mode_background.mp4" type="video/mp4" />
      </video>

      {/* fallback still for light mode */}
      <Image
        src="/assets/hero-bg-light-mode.jpg"
        alt="Light mode background"
        fill priority
        className={`object-cover object-right ${
          theme === 'light' ? 'opacity-0' : 'opacity-0'
        }`}
      />
    </div>
  );
}

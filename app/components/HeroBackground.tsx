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
      <Image
        src="/assets/hero-bg-dark-mode.jpg"
        alt="Dark Mode Background"
        fill
        priority
        className={`object-cover transition-opacity duration-1000 ease-in-out ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Light Mode Background */}
      <Image
        src="/assets/hero-bg-light-mode.jpg"
        alt="Light Mode Background"
        fill
        priority
        className={`object-cover object-right transition-opacity duration-1000 ease-in-out ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

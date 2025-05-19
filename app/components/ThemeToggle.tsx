"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-4 right-4 z-50 
                 flex items-center justify-center 
                 w-12 h-12 bg-ctaRed 
                 text-primaryText 
                 rounded-full shadow-md 
                 hover:scale-105 
                 transition-transform"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}

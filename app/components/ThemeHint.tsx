'use client';
import { useTheme } from "next-themes";

export default function ThemeHint() {
  const { theme } = useTheme();

  return (
    <p
  className="text-base md:text-lg italic mb-6 text-neutral-700 dark:text-neutral-300 transition-all leading-relaxed"
>
  {theme === "dark" ? (
    <>
      Too shady in here? Tap the{" "}
      <span className="font-semibold text-ctaRed underline underline-offset-2">
        red sun&nbsp;🌞
      </span>{" "}
      to bring back the light.
    </>
  ) : (
    <>
      Too bright? Hit the{" "}
      <span className="font-semibold text-ctaRed underline underline-offset-2">
        red moon&nbsp;🌗
      </span>{" "}
      to switch to stealth mode.
    </>
  )}
</p>
  );
}

import "./globals.scss";
import { ThemeProvider } from "./theme-provider/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import EyesCursor from "./components/EyesCursor";
import SocialFloats from "./components/SocialFloats";

export const metadata = {
  title: "Aman’s Portfolio",
  description: "Midnight Samurai meets Fullstack—Aman’s personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <SocialFloats />
          <ThemeToggle />
          <EyesCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}

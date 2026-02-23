import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rohit Raj",
  description: "A developer portfolio with Solo Leveling System UI aesthetics",
  keywords: ["developer", "portfolio", "react", "next.js", "dark mode"],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-display antialiased min-h-screen flex flex-col overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Dark theme background */}
          <div className="hidden dark:block min-h-screen w-full bg-[#020617] relative">
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: "#020617",
                backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
                backgroundSize: "32px 32px, 32px 32px, 100% 100%",
              }}
            />
            <div className="relative z-10 flex flex-col min-h-screen">
              {<TooltipProvider>{children}</TooltipProvider>}
            </div>
          </div>

          {/* Light theme background */}
          <div className="block dark:hidden min-h-screen w-full bg-white relative">
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: "white",
                backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
          `,
                backgroundSize: "32px 32px, 32px 32px, 100% 100%",
              }}
            />
            <div className="relative z-10 flex flex-col min-h-screen">
              <TooltipProvider>{children}</TooltipProvider>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

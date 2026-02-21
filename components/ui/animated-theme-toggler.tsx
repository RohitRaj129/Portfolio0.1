"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark");
      });
    }).ready;

    // Animation originates from top-right corner
    const x = window.innerWidth;
    const y = 0;
    const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }, [isDark, duration, setTheme]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300",
        className,
      )}
      style={
        mounted
          ? {
              backgroundColor: isDark ? "#0d0025" : "#ffffff",
              border: isDark ? "1px solid #521786" : "1px solid #7c3aed",
            }
          : { visibility: "hidden" }
      }
      {...props}
    >
      {mounted && isDark ? (
        <Sun size={20} color="#c084fc" />
      ) : mounted && !isDark ? (
        <Moon size={20} color="#7c3aed" />
      ) : null}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

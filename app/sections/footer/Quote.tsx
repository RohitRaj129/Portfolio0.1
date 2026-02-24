"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { getRandomQuote, QuoteEntry } from "@/data/quote";

export default function QuoteCard() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [entry, setEntry] = useState<QuoteEntry | null>(null);

  useEffect(() => {
    setMounted(true);
    setEntry(getRandomQuote());
  }, []);

  if (!mounted || !entry) return null;

  const isDark = theme === "dark";

  return (
    <div className="w-full h-full">
      {/* OUTER FRAME */}
      <div className="bg-[#521786] p-1 md:p-0 shadow-2xl rounded-2xl w-full h-full">
        {/* Inner Frame */}
        <div
          className="p-4 md:p-8 flex flex-col gap-4 md:gap-6 items-start w-full h-full rounded-xl"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
          }}
        >
          {/* Decorative large quotation mark */}
          <span
            className="absolute left-4 top-2 text-[150px] leading-none font-serif select-none pointer-events-none"
            style={{
              color: isDark ? "rgba(255,255,255,0.07)" : "rgba(124,58,237,0.1)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote text */}
          <p
            className="relative z-10 text-sm md:text-base font-medium italic leading-relaxed max-w-[85%]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: isDark ? "rgba(255,255,255,0.75)" : "rgba(30,10,60,0.85)",
            }}
          >
            &ldquo;{entry.quote}&rdquo;
          </p>

          {/* Author */}
          <p
            className="relative z-10 text-right text-xs md:text-sm font-semibold tracking-widest uppercase mt-4"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              color: isDark ? "rgba(255,255,255,0.45)" : "rgba(109,40,217,0.7)",
            }}
          >
            — {entry.author}
          </p>
        </div>
      </div>
    </div>
  );
}

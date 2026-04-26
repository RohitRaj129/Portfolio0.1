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
    <div className="w-full">
      {/* OUTER FRAME — no h-full, height follows content */}
      <div
        className={`${isDark ? "bg-[#521786]" : "bg-[#d0c5f6]"} p-1 md:p-0 shadow-2xl rounded-3xl w-full h-full`}
      >
        {/* Inner Frame */}
        <div
          className="relative flex flex-col w-full rounded-[22px] overflow-hidden p-5 sm:p-7 md:p-8"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : `radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
       radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.3), transparent 60%)`,
            backgroundColor: isDark ? undefined : "#fefcff",
          }}
        >
          {/* Decorative large quotation mark */}
          <span
            className="absolute left-3 top-0 text-[150px] sm:text-[190px] leading-none font-serif select-none pointer-events-none"
            style={{
              color: isDark ? "rgba(255,255,255,0.07)" : "rgba(124,58,237,0.1)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote text — no flex-1, just natural height */}
          <p
            className="relative z-10 text-sm sm:text-base md:text-lg font-medium italic leading-relaxed pr-2 sm:pr-4"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: isDark ? "rgba(255,255,255,0.75)" : "rgba(30,10,60,0.85)",
              maxWidth: "88%",
            }}
          >
            &ldquo;{entry.quote}&rdquo;
          </p>

          {/* Author — self-end still pushes it to the right */}
          <p
            className="relative z-10 self-end text-right text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase mt-4"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              color: isDark ? "rgba(255,255,255,0.45)" : "rgba(109,40,217,0.7)",
              whiteSpace: "nowrap",
            }}
          >
            — {entry.author}
          </p>
        </div>
      </div>
    </div>
  );
}

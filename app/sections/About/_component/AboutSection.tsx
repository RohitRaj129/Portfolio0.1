"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start w-full h-full"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Profile Image */}
      <div className="shrink-0 flex flex-col items-center gap-3">
        <div
          className="relative w-44 h-52 md:w-52 md:h-64 rounded-2xl overflow-hidden"
          style={{
            border: isDark
              ? "2px solid rgba(167,139,250,0.4)"
              : "2px solid rgba(124,58,237,0.3)",
            boxShadow: isDark
              ? "0 0 40px rgba(139,92,246,0.25), inset 0 0 20px rgba(0,0,0,0.3)"
              : "0 8px 32px rgba(124,58,237,0.2)",
          }}
        >
          {/* Decorative grid lines
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: isDark
                ? "linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)"
                : "linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          /> */}
          {/* Avatar PNG */}
          <Image
            src="/Light-profile.png"
            alt="Portrait of Rohit Raj"
            width={1536}
            height={1536}
            sizes="160px"
            className="h-full w-full rounded-2xl object-cover object-top dark:hidden"
            priority
          />
          <Image
            src="/Dark-profile.png"
            alt="Portrait of Rohit Raj"
            width={1536}
            height={1536}
            sizes="160px"
            className="h-full w-full rounded-2xl object-cover object-top hidden dark:block"
            priority
          />
        </div>

        {/* Status pill */}
        <div
          className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
          style={{
            background: isDark
              ? "rgba(109,40,217,0.3)"
              : "rgba(124,58,237,0.1)",
            border: isDark
              ? "1px solid rgba(167,139,250,0.3)"
              : "1px solid rgba(124,58,237,0.25)",
            color: isDark ? "#c4b5fd" : "#6d28d9",
            fontFamily: "var(--font-syne)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#22c55e" }}
          />
          Available for work
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center gap-5 flex-1">
        {/* Title */}
        <div>
          <p
            className="text-xs uppercase tracking-[0.3em] mb-2 font-medium"
            style={{
              color: isDark ? "rgba(167,139,250,0.7)" : "rgba(109,40,217,0.6)",
              fontFamily: "var(--font-instrument)",
            }}
          >
            About Me
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-none"
            style={{
              color: isDark ? "#f5f3ff" : "#1e0a3c",
              // fontFamily: "'Georgia', serif",
              fontFamily: "var(--font-syne)",
              letterSpacing: "-0.02em",
            }}
          >
            Rohit Raj
          </h2>
        </div>

        {/* Tagline */}
        <div
          className="flex items-center gap-3 py-3 px-4 rounded-xl"
          style={{
            background: isDark
              ? "rgba(109,40,217,0.15)"
              : "rgba(124,58,237,0.06)",
            borderLeft: `3px solid ${isDark ? "#7c3aed" : "#7c3aed"}`,
          }}
        >
          <p
            className="text-sm leading-relaxed italic"
            style={{
              color: isDark ? "#c4b5fd" : "#5b21b6",
              // fontFamily: "'Georgia', serif",
              fontFamily: "var(--font-isntrument)",
            }}
          >
            Every project is a dungeon.
            <br />
            Every bug increases experience.
          </p>
        </div>

        {/* Bio */}
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{
            color: isDark ? "rgba(229,222,255,0.75)" : "rgba(30,10,60,0.7)",
            // fontFamily: "'Georgia', serif",
            fontFamily: "var(--font-syne)",
          }}
        >
          I started with frontend fundamentals and progressively moved into
          full-stack architecture and AI-driven applications. Today, I build
          modern web systems using{" "}
          <span
            className="font-semibold"
            style={{ color: isDark ? "#a78bfa" : "#6d28d9" }}
          >
            TypeScript, Next.js, and PostgreSQL
          </span>{" "}
          — designed for scale and real-world impact.
        </p>

        <p
          className="text-sm leading-relaxed"
          style={{
            color: isDark ? "rgba(229,222,255,0.6)" : "rgba(30,10,60,0.55)",
            // fontFamily: "'Georgia', serif",
            fontFamily: "var(--font-syne)",
          }}
        >
          I believe growth is engineered through execution, not theory.
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 pt-1 mb-1.5">
          {["TypeScript", "Next.js", "PostgreSQL", "AI/ML", "Full-Stack"].map(
            (tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full transition-all duration-200 cursor-default"
                style={{
                  fontFamily: "var(--font-instrument)",
                  background: isDark
                    ? "rgba(109,40,217,0.2)"
                    : "rgba(124,58,237,0.08)",
                  border: isDark
                    ? "1px solid rgba(167,139,250,0.25)"
                    : "1px solid rgba(124,58,237,0.2)",
                  color: isDark ? "#c4b5fd" : "#6d28d9",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = isDark
                    ? "rgba(109,40,217,0.45)"
                    : "rgba(124,58,237,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = isDark
                    ? "rgba(109,40,217,0.2)"
                    : "rgba(124,58,237,0.08)";
                }}
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

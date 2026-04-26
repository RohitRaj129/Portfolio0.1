"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WEEKS = 53;
const BLOCK_MARGIN = 4;
const WEEKDAY_LABEL_WIDTH = 28;
const CARD_PADDING = 32;

type Props = {};

export default function AboutMe({}: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [blockSize, setBlockSize] = useState(10);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateBlockSize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth - CARD_PADDING;
      const available = containerWidth - WEEKDAY_LABEL_WIDTH + BLOCK_MARGIN;
      const calculated = Math.floor(available / WEEKS) - BLOCK_MARGIN;
      const clamped = Math.max(4, Math.min(12, calculated));
      setBlockSize(clamped);
    };

    updateBlockSize();
    const observer = new ResizeObserver(updateBlockSize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const lightTheme = {
    light: ["#e9d5ff", "#c084fc", "#a855f7", "#7c3aed", "#521786"],
  };

  const darkTheme = {
    dark: ["#1a0a2e", "#3b1278", "#6d28d9", "#8b5cf6", "#c084fc"],
  };

  return (
    <div className="w-full">
      <div
        className={`${isDark ? "bg-[#521786]" : "bg-[#d0c5f6]"} p-1 md:p-0 shadow-2xl rounded-3xl w-full`}
      >
        <div
          className="p-4 md:p-6 pb-3 flex flex-col gap-3 md:gap-4 items-start w-full rounded-2xl"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : `radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
                 radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.3), transparent 60%)`,
            backgroundColor: isDark ? undefined : "#fefcff",
          }}
        >
          <div className="flex flex-col gap-0.5">
            <h2
              className="text-lg md:text-xl font-bold tracking-tight"
              style={{ color: isDark ? "#e9d5ff" : "#3b0764" }}
            >
              GitHub Contributions
            </h2>
            <p
              className="text-xs"
              style={{ color: isDark ? "#a78bfa" : "#6d28d9" }}
            >
              A year in commits
            </p>
          </div>

          <div
            ref={containerRef}
            className="w-full min-w-0"
          >
            <GitHubCalendar
              username="rohitraj129"
              colorScheme={isDark ? "dark" : "light"}
              theme={isDark ? darkTheme : lightTheme}
              blockSize={blockSize}
              blockMargin={BLOCK_MARGIN}
              blockRadius={2}
              fontSize={11}
              renderBlock={(block: React.ReactNode, activity: any) => (
                <Tooltip>
                  <TooltipTrigger asChild>{block}</TooltipTrigger>
                  <TooltipContent>
                    <p style={{ fontFamily: "var(--font-syne)" }}>
                      {activity.count} contribution
                      {activity.count !== 1 ? "s" : ""} on {activity.date}
                    </p>
                  </TooltipContent>
                </Tooltip>
              )}
              style={{
                color: isDark ? "#a78bfa" : "#6d28d9",
                width: "100%",
                maxWidth: "100%",
                display: "block",
                fontSize: "11px",
                verticalAlign: "top",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AboutSection from "./_component/AboutSection";

type Props = {};

export default function AboutMe({}: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="w-full h-full">
      {/* OUTER FRAME */}
      <div
        className={`${isDark ? "bg-[#521786]" : "bg-[#d0c5f6]"} p-1 md:p-0 shadow-2xl rounded-3xl w-full h-full`}
      >
        {/* Inner Frame */}
        <div
          className="p-4 md:p-8 flex flex-col gap-4 md:gap-6 items-start w-full h-full rounded-2xl"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : `radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
       radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.3), transparent 60%)`,
            backgroundColor: isDark ? undefined : "#fefcff",
          }}
        >
          <AboutSection />
        </div>
      </div>
    </div>
  );
}

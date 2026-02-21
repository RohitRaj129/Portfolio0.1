"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const stats = [
  {
    label: "HP (caffeine Level)",
    current: 77,
    max: 100,
    color: "bg-green-500",
    status: "Status: Healthy",
    statusColor: "text-green-500",
  },
  {
    label: "MP (Mana/code)",
    current: 70,
    max: 100,
    color: "bg-blue-500",
    status: "Status: Recharging",
    statusColor: "text-blue-400",
  },
  {
    label: "XP (to next level)",
    current: 7777,
    max: 10000,
    color: "bg-purple-500",
    status: null,
    statusColor: "",
  },
];

function StatsCard() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  const textPrimary = isDark ? "text-white" : "text-black";
  const textMuted = isDark ? "text-zinc-400" : "text-zinc-500";
  const borderColor = isDark ? "border-zinc-700" : "border-zinc-300";

  return (
    <div className="w-full h-full">
      {/* Outer Frame */}
      <div className="bg-[#521786] p-2 shadow-2xl rounded-3xl w-full h-full">
        {/* Inner Card */}
        <div
          className="p-4 md:p-6 rounded-2xl w-full h-full"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h2 className={`text-xl md:text-2xl font-bold ${textPrimary}`}>
              Player Stats
            </h2>
            <div className={`text-right text-xs md:text-sm ${textMuted}`}>
              <p>ID: #dev-2005</p>
              <p>Server: INDIA-1</p>
            </div>
          </div>

          {/* Divider */}
          <hr className={`border ${borderColor} mb-4 md:mb-6`} />

          {/* Stats */}
          <div className="flex flex-col gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`text-sm md:text-lg font-semibold ${textPrimary}`}
                  >
                    {stat.label}
                  </span>
                  <span className={`text-xs md:text-sm ${textMuted}`}>
                    {stat.current}/{stat.max}
                  </span>
                </div>

                <div
                  className={`w-full h-2 md:h-3 rounded-full ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}
                >
                  <div
                    className={`h-full rounded-full ${stat.color}`}
                    style={{ width: `${(stat.current / stat.max) * 100}%` }}
                  />
                </div>

                {stat.status && (
                  <p className={`text-xs text-right mt-1 ${stat.statusColor}`}>
                    {stat.status}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { playerStats as data } from "@/data/player";

function StatsCard() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hpValue, setHpValue] = useState(100);
  const [mpValue, setMpValue] = useState(85);

  const getHpColorClass = (current: number, max: number) => {
    const percentage = (current / max) * 100;

    if (percentage >= 75) return "from-emerald-500 to-green-400";
    if (percentage >= 50) return "from-lime-500 to-amber-400";
    if (percentage >= 25) return "from-amber-500 to-orange-500";
    return "from-red-600 to-red-400";
  };

  useEffect(() => {
    setMounted(true);
    // Re-evaluate HP/MP on client since they read from localStorage
    setHpValue(data.stats.hp.current);
    setMpValue(data.stats.mp.current);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const textPrimary = isDark ? "text-white" : "text-black";
  const textMuted = isDark ? "text-zinc-400" : "text-zinc-500";
  const borderColor = isDark ? "border-zinc-700" : "border-zinc-300";

  const mpStatus =
    mpValue < 20
      ? "BURNED OUT"
      : mpValue < 40
        ? "DRAINED"
        : mpValue < 55
          ? "LOW MANA"
          : mpValue < 70
            ? "RECHARGING"
            : mpValue < 85
              ? "FOCUSED"
              : "IN THE ZONE";

  const stats = [
    { ...data.stats.hp, current: hpValue },
    { ...data.stats.mp, current: mpValue, status: mpStatus },
    data.stats.xp,
  ];

  const statusColorMap: Record<string, string> = {
    HEALTHY: "text-green-400",
    TIRED: "text-yellow-400",
    "NEED SLEEP": "text-red-400",
    "IN THE ZONE": "text-cyan-300",
    FOCUSED: "text-blue-300",
    RECHARGING: "text-blue-400",
    "LOW MANA": "text-indigo-400",
    DRAINED: "text-purple-400",
    "BURNED OUT": "text-red-500",
  };

  return (
    <div className="w-full h-full">
      {/* Outer Frame */}
      <div
        className={`${isDark ? "bg-[#521786]" : "bg-[#d0c5f6]"} p-1 md:p-0 shadow-2xl rounded-3xl w-full h-full`}
      >
        {/* Inner Card */}
        <div
          className="p-4 md:p-6 rounded-2xl w-full h-full"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : `radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
       radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.3), transparent 60%)`,
            backgroundColor: isDark ? undefined : "#fefcff",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h2
              className={`text-xl md:text-2xl font-bold ${textPrimary}`}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Player Stats
            </h2>
            <div className={`text-right text-xs md:text-sm ${textMuted}`}>
              <p>ID: {data.id}</p>
              <p>Server: {data.server}</p>
            </div>
          </div>

          {/* Divider */}
          <hr className={`border ${borderColor} mb-4 md:mb-6`} />

          {/* Stats */}
          <div className="flex flex-col gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const barColorClass =
                stat.label === data.stats.hp.label
                  ? getHpColorClass(stat.current, stat.max)
                  : stat.colorClass;

              return (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <span
                        className={`text-sm md:text-lg font-semibold ${textPrimary}`}
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {stat.label}
                      </span>
                      <span
                        className={`ml-2 text-xs ${textMuted}`}
                        style={{ fontFamily: "var(--font-instrument)" }}
                      >
                        {stat.subLabel}
                      </span>
                    </div>
                    <span
                      className={`text-xs md:text-sm ${textMuted}`}
                      style={{ fontFamily: "var(--font-instrument)" }}
                    >
                      {stat.current}/{stat.max}
                    </span>
                  </div>

                  <div
                    className={`w-full h-2 md:h-3 rounded-full ${
                      isDark ? "bg-zinc-800" : "bg-zinc-200"
                    }`}
                  >
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${barColorClass}`}
                      style={{ width: `${(stat.current / stat.max) * 100}%` }}
                    />
                  </div>

                  {stat.status && (
                    <p
                      className={`text-xs text-right mt-1 ${
                        statusColorMap[stat.status] ?? textMuted
                      }`}
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {stat.status}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;

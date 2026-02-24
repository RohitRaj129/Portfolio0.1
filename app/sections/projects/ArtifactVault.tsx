"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import { projects } from "@/data/artifacts";

type FilterType = "all" | "working" | "building";

function ArtifactVault() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  const filters: FilterType[] = ["all", "working", "building"];

  return (
    <div className="w-full h-full">
      {/* OUTER FRAME */}
      <div className="bg-[#521786] p-1 md:p-0 shadow-2xl rounded-3xl w-full h-full">
        {/* Inner Frame */}
        <div
          className="p-4 md:p-8 flex flex-col gap-4 md:gap-6 items-start w-full h-full rounded-2xl"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
          }}
        >
          {/* Title */}
          <h1
            style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}
            className="text-2xl md:text-3xl font-bold"
          >
            Artifact Vault (Projects)
          </h1>

          {/* Description + Filters row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
            <p
              style={{ color: isDark ? "#64748b" : "#475569" }}
              className="text-sm max-w-md"
            >
              A curated collection of things I've built, broken, and rebuilt —
              each one a lesson in disguise.
            </p>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {filters.map((f) => {
                const isActive = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    style={{
                      borderColor: isActive
                        ? isDark
                          ? "rgba(255,255,255,0.25)"
                          : "#6d28d9"
                        : isDark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(109,40,217,0.3)",
                      backgroundColor: isActive
                        ? isDark
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(109,40,217,0.12)"
                        : isDark
                        ? "transparent"
                        : "rgba(255,255,255,0.4)",
                      color: isActive
                        ? isDark
                          ? "#f1f5f9"
                          : "#4c1d95"
                        : isDark
                        ? "#64748b"
                        : "#6d28d9",
                    }}
                    className="px-4 py-1.5 rounded-full border text-xs font-mono tracking-wide transition-all duration-200 hover:opacity-80 capitalize"
                  >
                    {/* status dot for working / building */}
                    {f === "working" && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 mb-px" />
                    )}
                    {f === "building" && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 mb-px animate-pulse" />
                    )}
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid mt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full h-auto">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p
                style={{ color: isDark ? "#334155" : "#94a3b8" }}
                className="col-span-2 text-center py-16 font-mono text-sm"
              >
                No projects with status "{filter}" yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtifactVault;

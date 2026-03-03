import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project } from "@/types";
import { ArrowRight, Github, Globe } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const handleMouseEnter = () => {
    setIsHovered(true);
    // videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // videoRef.current?.pause();
    // if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isDark ? "#111318" : "#ffffff",
        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        boxShadow: isHovered
          ? isDark
            ? "0 24px 60px rgba(0,0,0,0.5)"
            : "0 24px 60px rgba(0,0,0,0.12)"
          : isDark
            ? "0 4px 20px rgba(0,0,0,0.3)"
            : "0 4px 20px rgba(0,0,0,0.06)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      className="rounded-2xl border overflow-hidden flex flex-col"
    >
      {/* ── Media Section ── */}
      <div
        style={{
          backgroundColor: isDark ? "#0a0a0f" : "#f1f5f9",
          paddingTop: "56.25%", // 16:9 ratio
        }}
        className="relative w-full overflow-hidden"
      >
        <img
          src={project.thumbnail}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DEMO badge */}
        {/* {isHovered && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="text-xs font-mono">
              ▶ DEMO
            </Badge>
          </div>
        )} */}

        {/* <video
          ref={videoRef}
          src={project.demoVideo}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        /> */}
      </div>

      {/* ── Info Section ── */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Name + Links */}
        <div className="flex items-center justify-between">
          <h3
            style={{
              color: isDark ? "#f1f5f9" : "#0f172a",
              fontFamily: "var(--font-instrument)",
            }}
            className="text-lg font-bold tracking-tight"
          >
            {project.name}
          </h3>
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: isDark ? "#64748b" : "#94a3b8" }}
              className="transition-colors text-lg"
              title="Live Site"
            >
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Globe />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>Live url</p>
                </TooltipContent>
              </Tooltip>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: isDark ? "#64748b" : "#94a3b8" }}
              className="transition-colors text-lg"
              title="GitHub"
            >
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Github />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>Github</p>
                </TooltipContent>
              </Tooltip>
            </a>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            color: isDark ? "#64748b" : "#475569",
            fontFamily: "var(--font-syne)",
          }}
          className="text-sm leading-relaxed"
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-col gap-2">
          <span
            style={{
              color: isDark ? "#334155" : "#94a3b8",
              fontFamily: "var(--font-instrument)",
            }}
            className="text-[10px] uppercase tracking-widest"
          >
            technologies
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{ borderTopColor: isDark ? "#1e293b" : "#e2e8f0" }}
          className="flex items-center justify-between pt-3 mt-auto border-t"
        >
          {/* Status Badge */}
          <Badge
            variant="outline"
            className={`font-mono text-[11px] gap-1.5 ${
              project.status === "working"
                ? "border-emerald-500/40 text-emerald-500 bg-emerald-500/10"
                : "border-amber-500/40 text-amber-500 bg-amber-500/10"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                project.status === "working" ? "bg-emerald-500" : "bg-amber-500"
              }`}
              style={{ fontFamily: "var(--font-instrument)" }}
            />
            {project.status}
          </Badge>

          {/* View Details → modal trigger placeholder */}
          <button
            style={{
              color: isDark ? "#60a5fa" : "#3b82f6",
              fontFamily: "var(--font-syne)",
            }}
            className="text-sm hover:opacity-70 transition-opacity cursor-pointer"
          >
            View Details <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

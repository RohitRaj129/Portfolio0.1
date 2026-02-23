"use client";
import { useState } from "react";

const skillsData = {
  Core: {
    desc: "Foundational CS concepts & system thinking.",
    skills: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "OOP Principles",
      "Design Patterns",
      "Complexity Analysis",
    ],
  },
  Frontend: {
    desc: "Crafting fast, beautiful interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
      "Storybook",
      "Vite",
    ],
  },
  Backend: {
    desc: "APIs, databases, and server architecture.",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST APIs",
    ],
  },
  Tools: {
    desc: "Dev workflows & infrastructure.",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Linux",
      "Bash",
      "AWS",
      "Vercel",
      "Postman",
    ],
  },
  Languages: {
    desc: "Coding and spoken languages.",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "English", "Hindi"],
  },
};

type SkillCategory = keyof typeof skillsData;
const niches = Object.keys(skillsData) as SkillCategory[];

interface SkillsInventoryProps {
  isDark: boolean;
}

export default function SkillsInventory({ isDark }: SkillsInventoryProps) {
  const [selected, setSelected] = useState<SkillCategory>("Core");
  const data = skillsData[selected];

  // ── theme tokens ──────────────────────────────────────────
  const t = isDark
    ? {
        sidebarBorder: "rgba(255,255,255,0.08)",
        labelColor: "rgba(255,255,255,0.25)",
        btnColor: "rgba(255,255,255,0.35)",
        btnHoverBg: "rgba(255,255,255,0.06)",
        btnHoverColor: "rgba(255,255,255,0.80)",
        activeBg: "rgba(124,109,249,0.18)",
        activeBorder: "rgba(124,109,249,0.35)",
        activeColor: "#c4bcfe",
        titleColor: "rgba(255,255,255,0.90)",
        descColor: "rgba(255,255,255,0.30)",
        badgeBorder: "rgba(255,255,255,0.18)",
        badgeBg: "rgba(255,255,255,0.04)",
        badgeColor: "rgba(255,255,255,0.65)",
        badgeHoverBorder: "rgba(196,188,254,0.45)",
        badgeHoverBg: "rgba(124,109,249,0.10)",
        badgeHoverColor: "#c4bcfe",
        mobileDivider: "rgba(255,255,255,0.08)",
      }
    : {
        sidebarBorder: "rgba(109,40,217,0.15)",
        labelColor: "rgba(109,40,217,0.40)",
        btnColor: "rgba(55,10,120,0.45)",
        btnHoverBg: "rgba(124,58,237,0.08)",
        btnHoverColor: "rgba(55,10,120,0.90)",
        activeBg: "rgba(124,58,237,0.15)",
        activeBorder: "rgba(124,58,237,0.40)",
        activeColor: "#5b21b6",
        titleColor: "#1e1b4b",
        descColor: "rgba(55,10,120,0.45)",
        badgeBorder: "rgba(124,58,237,0.30)",
        badgeBg: "rgba(124,58,237,0.06)",
        badgeColor: "#3b0764",
        badgeHoverBorder: "rgba(124,58,237,0.60)",
        badgeHoverBg: "rgba(124,58,237,0.14)",
        badgeHoverColor: "#4c1d95",
        mobileDivider: "rgba(109,40,217,0.15)",
      };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Instrument+Sans:wght@400;500;600&display=swap');

        .ski-card {
          width: 100%;
          height: 100%;
          display: flex;
          font-family: 'Instrument Sans', sans-serif;
          overflow: hidden;
        }

        /* ── SIDEBAR ── */
        .ski-sidebar {
          width: 150px;
          flex-shrink: 0;
          padding: 4px 10px 4px 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-right: 1px solid ${t.sidebarBorder};
        }

        .ski-sidebar-label {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${t.labelColor};
          margin-bottom: 8px;
          padding-left: 8px;
        }

        .ski-nav-btn {
          width: 100%;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: ${t.btnColor};
          cursor: pointer;
          text-align: left;
          transition: all 0.16s ease;
        }

        .ski-nav-btn:hover {
          background: ${t.btnHoverBg};
          color: ${t.btnHoverColor};
        }

        .ski-nav-btn.ski-active {
          background: ${t.activeBg};
          border-color: ${t.activeBorder};
          color: ${t.activeColor};
        }

        /* ── PANEL ── */
        .ski-panel {
          flex: 1;
          padding: 4px 4px 4px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          overflow: hidden;
        }

        .ski-panel-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: ${t.titleColor};
          line-height: 1;
        }

        .ski-panel-desc {
          font-size: 11px;
          color: ${t.descColor};
          margin-top: 4px;
          line-height: 1.5;
        }

        /* ── BADGES ── */
        .ski-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-content: flex-start;
        }

        .ski-badge {
          padding: 5px 13px;
          border-radius: 8px;
          border: 1px dashed ${t.badgeBorder};
          background: ${t.badgeBg};
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: ${t.badgeColor};
          cursor: default;
          transition: all 0.15s ease;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }

        .ski-badge:hover {
          border-color: ${t.badgeHoverBorder};
          background: ${t.badgeHoverBg};
          color: ${t.badgeHoverColor};
          transform: translateY(-1px);
        }

        /* ── MOBILE ── */
        @media (max-width: 600px) {
          .ski-card { flex-direction: column; }

          .ski-sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid ${t.mobileDivider};
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0 0 12px 0;
            gap: 6px;
          }

          .ski-sidebar-label { display: none; }
          .ski-nav-btn { width: auto; padding: 6px 12px; }
          .ski-panel { padding: 12px 0 0 0; }
        }
      `}</style>

      <div className="ski-card">
        {/* Sidebar */}
        <nav className="ski-sidebar">
          <span className="ski-sidebar-label">Skills</span>
          {niches.map((n) => (
            <button
              key={n}
              className={`ski-nav-btn ${selected === n ? "ski-active" : ""}`}
              onClick={() => setSelected(n)}
            >
              {n}
            </button>
          ))}
        </nav>

        {/* Panel */}
        <main className="ski-panel">
          <div>
            <h3 className="ski-panel-title">{selected}</h3>
            <p className="ski-panel-desc">{data.desc}</p>
          </div>
          <div className="ski-badges">
            {data.skills.map((skill) => (
              <span className="ski-badge" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

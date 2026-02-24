"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SkillsInventory from "./SkillCard";

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

export default function SkillsGrid() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<keyof typeof skillsData>("Core");
  const data = skillsData[selected];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
          <SkillsInventory isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

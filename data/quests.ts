import type { Quest } from "@/types";

export const quests: Quest[] = [
  {
    id: 1,
    title: "Senior Architect at TechCorp",
    description:
      "Lead the development of the core microservices architecture. Optimize legacy codebases and mentor junior adventurers through the dungeon of technical debt.",
    status: "current",
    difficulty: 5,
    tech: ["React", "Node.js", "AWS"],
    rewards: {
      gold: 5000,
      skill: "LEADERSHIP",
    },
  },
  {
    id: 2,
    title: "Frontend Engineer at WebSolutions",
    description:
      "Successfully deployed 15+ client websites. Mastered responsive design and accessibility standards.",
    status: "completed",
    difficulty: 3,
    tech: ["Vue.js", "SASS"],
    rewards: {
      gold: 2500,
      skill: null,
    },
  },
];

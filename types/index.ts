import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons/lib";

// Player Types
export interface Stat {
  label: string;
  subLabel: string;
  current: number;
  max: number;
  status: string | null;
  colorClass: string;
}

//Profile Card Types
export interface Profile {
  name: string;
  level: number;
  rank: string;
  avatar_light: string;
  avatar_dark: string;
  guild: string;
  categories: ProfileCategory[];
}

export interface ProfileCategory {
  name: string;
  icon: string; // path to the png
}

export interface PlayerStats {
  hp: Stat;
  mp: Stat;
  xp: Stat;
}

export interface Player {
  name: string;
  class: string;
  level: number;
  rank: string;
  guild: string;
  id: string;
  server: string;
  avatar: string;
  stats: PlayerStats;
}

// Quest Types
export interface QuestRewards {
  gold: number;
  skill: string | null;
}

export interface Quest {
  id: number;
  title: string;
  description: string;
  status: "current" | "completed";
  difficulty: number;
  tech: string[];
  rewards: QuestRewards;
}

// Skill Types
export interface Skill {
  id: number;
  name: string;
  type: string;
  icon: string;
  iconColor: string;
  mastery: number;
  rank: string;
  isSpecial: boolean;
}

// Artifact Types
export interface Artifact {
  title: string;
  description: string;
  image: string; // project screenshot/image URL
  technologies: string[]; // tech stack icons/names
  liveUrl?: string;
  githubUrl?: string;
  status?: string; // "All Systems Operational" etc.
}

// TOC Types
export interface TOCItem {
  name: string;
  value: string;
}

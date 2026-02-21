import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const isSpecial = skill.isSpecial;

  return (
    <div
      className={`holo-card p-4 rounded-lg flex flex-col items-center gap-3 transition-colors group cursor-pointer ${
        isSpecial
          ? "hover:bg-secondary/5 border-secondary/20 hover:border-secondary/50"
          : "hover:bg-primary/5"
      }`}
    >
      {/* Icon Circle */}
      <div
        className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-all ${
          isSpecial
            ? "group-hover:border-secondary/50 group-hover:shadow-neon-purple"
            : "group-hover:border-primary/50 group-hover:shadow-neon"
        }`}
      >
        <span
          className={`material-symbols-outlined text-3xl ${skill.iconColor}`}
        >
          {skill.icon}
        </span>
      </div>

      {/* Skill Info */}
      <div className="text-center w-full">
        <h4 className="font-bold text-foreground text-sm">{skill.name}</h4>
        <p className="text-xs text-text-muted mb-2">{skill.type}</p>

        {/* Mastery Bar */}
        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full ${isSpecial ? "bg-secondary" : "bg-primary"}`}
            style={{ width: `${skill.mastery}%` }}
          ></div>
        </div>

        {/* Rank */}
        <p
          className={`text-[10px] mt-1 text-right font-mono ${isSpecial ? "text-secondary" : "text-primary"}`}
        >
          RANK: {skill.rank}
        </p>
      </div>
    </div>
  );
}

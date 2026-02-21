import type { Quest } from "@/types";

interface QuestItemProps {
  quest: Quest;
}

export default function QuestItem({ quest }: QuestItemProps) {
  const isCurrent = quest.status === "current";

  // Generate star rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`material-symbols-outlined text-sm ${
        i < quest.difficulty
          ? isCurrent
            ? "text-yellow-500"
            : "text-yellow-500/50"
          : "text-gray-700"
      }`}
    >
      star
    </span>
  ));

  return (
    <div
      className={`holo-card p-0 rounded-lg group ${isCurrent ? "hover:border-l-4 hover:border-l-primary" : "opacity-80 hover:opacity-100"} transition-all duration-300`}
    >
      <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex-1">
          {/* Status Badge & Title */}
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span
              className={`px-2 py-0.5 ${isCurrent ? "bg-primary text-black" : "bg-gray-700 text-gray-300"} text-xs font-bold rounded-sm`}
            >
              {isCurrent ? "CURRENT QUEST" : "COMPLETED"}
            </span>
            <h3
              className={`${isCurrent ? "text-xl font-bold text-foreground group-hover:text-primary" : "text-lg font-bold text-gray-300"} transition-colors`}
            >
              {quest.title}
            </h3>
          </div>

          {/* Description */}
          <p
            className={`${isCurrent ? "text-text-muted" : "text-gray-500"} text-sm mb-4 max-w-2xl`}
          >
            {quest.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {quest.tech.map((tech) => (
              <span
                key={tech}
                className={`text-xs bg-white/5 border border-white/10 px-2 py-1 rounded ${isCurrent ? "text-gray-300" : "text-gray-400"}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Difficulty & Rewards */}
        <div className="flex flex-col items-end gap-3 min-w-[140px]">
          <div
            className="flex gap-0.5"
            aria-label={`${quest.difficulty} star difficulty`}
          >
            {stars}
          </div>
          <div className={`text-right ${isCurrent ? "" : "opacity-60"}`}>
            <span className="block text-xs text-gray-500 font-mono">
              REWARD
            </span>
            <span
              className={`block text-sm ${isCurrent ? "text-primary" : "text-gray-300"} font-bold`}
            >
              +{quest.rewards.gold.toLocaleString()} GOLD
            </span>
            {quest.rewards.skill && (
              <span className="block text-xs text-secondary font-bold">
                SKILL: {quest.rewards.skill}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Quest } from "@/types";
import QuestItem from "./QuestItem";

interface QuestLogProps {
  quests: Quest[];
}

export default function QuestLog({ quests }: QuestLogProps) {
  return (
    <section id="quests" className="w-full flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 border-b border-primary/30 pb-2 mb-2">
        <span className="material-symbols-outlined text-primary text-3xl">
          swords
        </span>
        <h2 className="text-2xl font-bold text-foreground tracking-widest">
          QUEST LOG
        </h2>
      </div>

      {/* Quest Items */}
      <div className="grid grid-cols-1 gap-4">
        {quests.map((quest) => (
          <QuestItem key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  );
}

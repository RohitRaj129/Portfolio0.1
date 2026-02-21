import type { Skill } from "@/types";
import SkillCard from "./SkillCard";

interface SkillsGridProps {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <section id="skills" className="w-full flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 border-b border-primary/30 pb-2 mb-2">
        <span className="material-symbols-outlined text-primary text-3xl">
          bolt
        </span>
        <h2 className="text-2xl font-bold text-foreground tracking-widest">
          UNLOCKED SKILLS
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

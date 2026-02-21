import Image from "next/image";
import type { Player } from "@/types";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="lg:col-span-4 holo-card rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 group">
      <div className="relative">
        {/* Glow effect behind avatar */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>

        {/* Avatar */}
        <Image
          src={player.avatar}
          alt={`Portrait of ${player.name}`}
          width={128}
          height={128}
          className="relative w-32 h-32 rounded-full border-2 border-primary object-cover shadow-neon z-10"
          priority
        />

        {/* Level Badge */}
        <div className="absolute -bottom-2 -right-2 bg-background-dark border border-primary text-primary text-xs font-bold px-2 py-1 rounded z-20">
          LVL. {player.level}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-1">
          {player.name}
        </h2>
        <p className="text-primary font-mono text-sm tracking-wide">
          CLASS: {player.class}
        </p>

        {/* Badges */}
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary font-bold">
            RANK: {player.rank}
          </span>
          <span className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded text-xs text-secondary font-bold">
            GUILD: {player.guild}
          </span>
        </div>
      </div>
    </div>
  );
}

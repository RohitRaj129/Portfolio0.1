import type { Player } from "@/types";
import PlayerCard from "./PlayerCard";
import StatsPanel from "./StatsPanel";

interface StatusSectionProps {
  player: Player;
}

export default function StatusSection({ player }: StatusSectionProps) {
  return (
    <section
      id="status"
      className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in-up"
    >
      <PlayerCard player={player} />
      <StatsPanel player={player} />
    </section>
  );
}

import type { Player, Stat } from "@/types";

interface ProgressBarProps {
  label: string;
  subLabel: string;
  current: number;
  max: number;
  status: string | null;
  colorClass: string;
  isXP?: boolean;
}

function ProgressBar({
  label,
  subLabel,
  current,
  max,
  status,
  colorClass,
  isXP = false,
}: ProgressBarProps) {
  const percentage = (current / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-bold tracking-wider">
        <span className="text-foreground">
          {label}{" "}
          <span className="text-text-muted text-xs font-normal ml-1">
            ({subLabel})
          </span>
        </span>
        <span className={isXP ? "text-secondary" : "text-primary"}>
          {isXP
            ? `${current.toLocaleString()} / ${max.toLocaleString()}`
            : `${percentage}%`}
        </span>
      </div>

      <div
        className={`${isXP ? "h-2" : "h-4"} w-full bg-system-blue/50 rounded-sm overflow-hidden border border-white/5 relative`}
      >
        <div
          className={`h-full ${isXP ? colorClass : `bg-linear-to-r ${colorClass}`} relative ${!isXP ? "shadow-[0_0_10px_rgba(13,185,242,0.5)]" : "shadow-[0_0_10px_rgba(157,78,221,0.5)]"}`}
          style={{ width: `${percentage}%` }}
        >
          {!isXP && (
            <div className="absolute inset-0 bar-texture opacity-20"></div>
          )}
        </div>
      </div>

      {status && (
        <p className="text-xs text-text-muted text-right">STATUS: {status}</p>
      )}
    </div>
  );
}

interface StatsPanelProps {
  player: Player;
}

export default function StatsPanel({ player }: StatsPanelProps) {
  const { hp, mp, xp } = player.stats;

  return (
    <div className="lg:col-span-8 holo-card rounded-xl p-6 flex flex-col justify-between gap-6">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              analytics
            </span>
            PLAYER STATS
          </h3>
          <p className="text-text-muted text-sm mt-1">
            System optimization verified.
          </p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-xs text-text-muted font-mono">ID: {player.id}</p>
          <p className="text-xs text-text-muted font-mono">
            SERVER: {player.server}
          </p>
        </div>
      </div>

      {/* Stats Bars */}
      <div className="space-y-6">
        <ProgressBar
          label={hp.label}
          subLabel={hp.subLabel}
          current={hp.current}
          max={hp.max}
          status={hp.status}
          colorClass={hp.colorClass}
        />

        <ProgressBar
          label={mp.label}
          subLabel={mp.subLabel}
          current={mp.current}
          max={mp.max}
          status={mp.status}
          colorClass={mp.colorClass}
        />

        <ProgressBar
          label={xp.label}
          subLabel={xp.subLabel}
          current={xp.current}
          max={xp.max}
          status={xp.status}
          colorClass={xp.colorClass}
          isXP={true}
        />
      </div>
    </div>
  );
}

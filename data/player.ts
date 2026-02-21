import type { Player } from "@/types";

export const player: Player = {
  name: "Rohit Raj",
  class: "Full-Stack Developer",
  level: 21,
  rank: "Rookie Coder",
  guild: "not-in-a-guild",
  id: "#DEV-2005",
  server: "INDIA-1",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3jfC9heli69wfh3fIfrwBLergHkP0BBrNaYKl8gzGL5jriJyyyhMsrowTeIPXX39DjJhyK2MgTdI5JAkHd3mvW4dA8xLR8gdIy_2Wmy7QJiNsuL_mgD2i2_wz_UJ3TViXwSkaUTz73LOTZMHw-z9_KCxci_bw7byJeQJFFNuWrfqwKAjxN47TvpbcLsHRUQoARl6VzQIsoInJEBGXSWyLdgtVBVnR0xez36Z9UCUU06UOx6CjIviMsOZZ6gjcs8WuV6AhqZhQxWU",
  stats: {
    hp: {
      label: "HP",
      subLabel: "CAFFEINE LEVEL",
      current: 100,
      max: 100,
      status: "HEALTHY",
      colorClass: "from-red-600 to-red-400",
    },
    mp: {
      label: "MP",
      subLabel: "MANA / CODE",
      current: 85,
      max: 100,
      status: "RECHARGING",
      colorClass: "from-blue-700 to-primary",
    },
    xp: {
      label: "XP",
      subLabel: "TO NEXT LEVEL",
      current: 9420,
      max: 10000,
      status: null,
      colorClass: "bg-secondary",
    },
  },
};

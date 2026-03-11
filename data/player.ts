import type { Player } from "@/types";

export const playerStats: Player = {
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
    hp: (() => {
      const current = getRandomHPAfter24Hours();
      let status = "HEALTHY";
      if (current < 60) status = "NEED SLEEP";
      else if (current < 70) status = "TIRED";

      return {
        label: "HP",
        subLabel: "CAFFEINE LEVEL",
        current,
        max: 100,
        status,
        colorClass: "from-red-600 to-red-400",
      };
    })(),
    mp: (() => {
      const current = getRandomMPAfter24Hours();
      let status = "IN THE ZONE";
      if (current < 20) status = "BURNED OUT";
      else if (current < 40) status = "DRAINED";
      else if (current < 55) status = "LOW MANA";
      else if (current < 70) status = "RECHARGING";
      else if (current < 85) status = "FOCUSED";

      return {
        label: "MP",
        subLabel: "MANA / CODE",
        current,
        max: 100,
        status,
        colorClass: "from-blue-700 to-primary",
      };
    })(),
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

function getRandomMPAfter24Hours(): number {
  if (typeof window === "undefined") {
    return 85;
  }

  const lastUpdate = localStorage.getItem("lastMPUpdate");
  const lastValue = parseInt(localStorage.getItem("lastMPValue") || "85", 10);
  const now = Date.now();

  if (lastUpdate && now - parseInt(lastUpdate) < 24 * 60 * 60 * 1000) {
    return lastValue;
  }

  const newValue = Math.max(30, Math.floor(Math.random() * 101));
  localStorage.setItem("lastMPUpdate", now.toString());
  localStorage.setItem("lastMPValue", newValue.toString());

  return newValue;
}

function getRandomHPAfter24Hours(): number {
  if (typeof window === "undefined") {
    return 100;
  }

  const lastUpdate = localStorage.getItem("lastHPUpdate");
  const lastValue = parseInt(localStorage.getItem("lastHPValue") || "100", 10);
  const now = Date.now();

  if (lastUpdate && now - parseInt(lastUpdate) < 24 * 60 * 60 * 1000) {
    return lastValue;
  }

  const newValue = Math.max(50, Math.floor(Math.random() * 101));
  localStorage.setItem("lastHPUpdate", now.toString());
  localStorage.setItem("lastHPValue", newValue.toString());

  return newValue;
}

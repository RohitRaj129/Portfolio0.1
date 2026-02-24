export type QuoteEntry = {
  quote: string;
  author: string;
};

export const quotes: QuoteEntry[] = [
  // Bhagavad Gita Wisdom 🌺
  {
    quote:
      "You have the right to perform your duty, but not to the fruits of your actions.",
    author: "Bhagavad Gita",
  },
  {
    quote:
      "A person is said to be elevated who is equal in success and failure.",
    author: "Bhagavad Gita",
  },
  {
    quote:
      "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    author: "Bhagavad Gita",
  },
  {
    quote: "The soul is neither born, and nor does it die.",
    author: "Bhagavad Gita",
  },
  {
    quote:
      "There is neither this world nor the world beyond for the one who doubts.",
    author: "Bhagavad Gita",
  },
  {
    quote: "Set thy heart upon thy work, but never on its reward.",
    author: "Bhagavad Gita",
  },
  // Anime Quotes 🍥
  {
    quote: "Push through the pain. Giving up hurts more.",
    author: "Vegeta (Dragon Ball Z)",
  },
  {
    quote:
      "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    author: "Monkey D. Luffy (One Piece)",
  },
  {
    quote: "Hard work is worthless for those that don't believe in themselves.",
    author: "Naruto Uzumaki (Naruto)",
  },
  {
    quote: "Power comes in response to a need, not a desire.",
    author: "Goku (Dragon Ball Z)",
  },
  {
    quote: "No matter how deep the night, it always turns to day.",
    author: "Brook (One Piece)",
  },
  {
    quote: "A lesson without pain is meaningless.",
    author: "Edward Elric (Fullmetal Alchemist)",
  },
  {
    quote: "If you don’t take risks, you can’t create a future.",
    author: "Monkey D. Luffy (One Piece)",
  },
  {
    quote: "I will become stronger. Strong enough that no one can ignore me.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "I don’t run anymore.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "Every battle makes me stronger.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "If I can’t protect them, then I’ll become stronger.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "The stronger the enemy, the greater the reward.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "I survived because I had to.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "Fear won’t save you. Power will.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "Strength is earned on the battlefield.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "I refuse to stay weak.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "Leveling up is the only way forward.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "The moment you stop growing is the moment you fall behind.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "Pain is temporary. Growth is permanent.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "If I fail, I try again. If I fall, I rise stronger.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "Weakness is not permanent.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "The system didn’t choose me by accident.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  {
    quote: "I grow stronger every day.",
    author: "Sung Jin-Woo (Solo Leveling)",
  },
  // Fun Easter Eggs 🥚
  {
    quote: "You found me. I wasn't hiding, but... bonus points anyway.",
    author: "This Website",
  },
  {
    quote:
      "If you're reading this, you're probably procrastinating. Same, honestly.",
    author: "Relatable Energy",
  },
  {
    quote: "console.log('Hello, curious human 👋');",
    author: "A Developer, probably",
  },
  {
    quote:
      "There are only 10 types of people: those who understand binary and those who don't.",
    author: "Classic Dev Joke",
  },
  {
    quote: "Why do programmers prefer dark mode? Because light attracts bugs.",
    author: "The Internet",
  },
  {
    quote: "A day without sunshine is like... night.",
    author: "Steve Martin",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    quote: "It works on my machine. Ship the machine.",
    author: "Senior Developer, 2024",
  },
  {
    quote: "Eat. Sleep. Code. Repeat. (Don't skip sleep. Seriously.)",
    author: "Hard-Learned Wisdom",
  },
  {
    quote: "You are one refresh away from a different quote. Go ahead, try it.",
    author: "This Component",
  },
  {
    quote: "Hello, world.",
    author: "Every Programmer's First Program",
  },
];

export function getRandomQuote(): QuoteEntry {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

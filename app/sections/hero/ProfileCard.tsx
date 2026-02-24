"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const categories = [
  { name: "React", icon: "/assets/react.png", link: "https://react.dev/" },
  { name: "Next.js", icon: "/assets/nextjs.png", link: "https://nextjs.org/" },
  {
    name: "TypeScript",
    icon: "/assets/typescript.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind",
    icon: "/assets/tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    icon: "/assets/nodejs.png",
    link: "https://nodejs.org/en",
  },
  {
    name: "MongoDB",
    icon: "/assets/mongodb.png",
    link: "https://www.mongodb.com/",
  },
  { name: "Git", icon: "/assets/git.png", link: "https://git-scm.com/" },
  { name: "Figma", icon: "/assets/figma.png", link: "https://figma.com/" },
];

export default function ProfileCard() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="w-full h-full">
      {/* OUTER FRAME */}
      <div className="bg-[#521786] p-2 shadow-2xl rounded-3xl w-full h-full">
        {/* INNER CARD */}
        <div
          className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start w-full h-full rounded-2xl"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
          }}
        >
          {/* PHOTO */}
          <div className="flex md:flex-col flex-row items-center gap-4">
            <div className="w-30 h-38 md:w-40 md:h-48 rounded-3xl border-[6px] border-zinc-300 dark:border-zinc-700 flex items-center justify-center overflow-hidden">
              <Image
                src="/Light-profile.png"
                alt="Portrait of Rohit Raj"
                width={1536}
                height={1536}
                sizes="160px"
                className="h-full w-full rounded-2xl object-cover object-top dark:hidden"
                priority
              />
              <Image
                src="/Dark-profile.png"
                alt="Portrait of Rohit Raj"
                width={1536}
                height={1536}
                sizes="160px"
                className="h-full w-full rounded-2xl object-cover object-top hidden dark:block"
                priority
              />
            </div>

            {/* <div className="w-12 h-8 mt-5 md:w-16 md:h-10">
              <Image
                src="/chip.png"
                alt=""
                width={953}
                height={639}
                className="object-contain"
              />
            </div> */}
          </div>

          {/* INFO SECTION */}
          <div className="flex-1 w-full">
            <div className="flex justify-between">
              <div>
                <p className="text-xs md:text-sm text-zinc-500">Name</p>
                <h2
                  className={`text-base md:text-xl font-semibold tracking-wider ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Rohit Raj
                </h2>
              </div>
              <div className="text-right">
                <p className="text-xs md:text-sm text-zinc-500">Rank</p>
                <h2
                  className={`text-base md:text-xl font-bold ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Rookie Coder
                </h2>
              </div>
            </div>

            <div className="mt-3 md:mt-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs md:text-sm text-zinc-500">Level</p>
                  <h3
                    className={`text-2xl md:text-3xl font-bold tracking-wide ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    21
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs md:text-sm text-zinc-500">Guild</p>
                  <h2
                    className={`text-base md:text-xl font-bold ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    not-in-guild
                  </h2>
                </div>
              </div>
            </div>

            {/* CATEGORY BOXES */}
            <div className="hidden md:grid grid-cols-4 gap-2 mt-15">
              {Array.from({ length: 8 }).map((_, i) => (
                <Link href={categories[i].link} target="_blank" key={i}>
                  <div className="h-8 border-2 border-zinc-700 rounded-md flex items-center justify-center gap-1.5">
                    <Image
                      src={categories[i].icon}
                      alt={categories[i].name}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <span
                      className={`text-xs font-medium ${
                        isDark ? "text-white" : "text-zinc-950"
                      }`}
                    >
                      {categories[i].name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

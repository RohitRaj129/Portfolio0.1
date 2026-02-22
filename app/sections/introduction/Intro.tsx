"use client";
import { RippleButton } from "@/components/ui/ripple-button";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

type Props = {};

function Intro({}: Props) {
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
        {/* Inner Frame */}
        <div
          className="p-4 md:p-6 flex flex-col md:flex-col gap-4 md:gap-6 items-start w-full h-full rounded-2xl"
          style={{
            background: isDark
              ? "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
              : "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
          }}
        >
          {/* Greetings */}
          <div className="mt-2">
            <h1 className="text-4xl">Hey, I'm Rohit - A Web Developer.</h1>
          </div>
          {/* Description */}
          <div>
            <p>
              I build interactive web apps using Javascript , React , Next.js ,
              NPM and Tailwind CSS . with a focus on Scalability and UI design.
              Enthusiastic about GSAP and Three.js, driven by a keen eye for
              design.
            </p>
          </div>
          <div>
            <Link href="/projects">
              <RippleButton>View Projects</RippleButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

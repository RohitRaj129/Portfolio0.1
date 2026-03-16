"use client";
import Splash3dButton from "@/components/3d-splash-button";
import { RippleButton } from "@/components/ui/ripple-button";
import {
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsTwitterX } from "react-icons/bs";
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
      <div className="bg-[#521786] p-1 md:p-0 shadow-2xl rounded-3xl w-full h-full">
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
            <h1 className="text-4xl" style={{ fontFamily: "var(--font-syne)" }}>
              Hey, I'm Rohit - A Web Developer.
            </h1>
          </div>
          {/* Description */}
          <div>
            <p
              // className="text-lg max-w-2xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              I build interactive web apps using Javascript , React , Next.js ,
              NPM and Tailwind CSS . with a focus on Scalability and UI design.
              Enthusiastic about GSAP and Three.js, driven by a keen eye for
              design.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://drive.google.com/file/d/1wHiyE651RFUNI3vgK7d-yHRIHuqKiESu/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Splash3dButton className="">
                <FileText className="p-1" />
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-intrument)" }}
                >
                  Resume/CV
                </p>
              </Splash3dButton>
            </Link>
            <Link href="#">
              <Splash3dButton>
                <Send className="p-1" />
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-instrument)" }}
                >
                  Get in touch
                </p>
              </Splash3dButton>
            </Link>
          </div>
          <div className="mt-2 flex gap-2">
            <Link href={"https://github.com/RohitRaj129"} target="_blank">
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Github />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>Github</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rohit-raj-6ba7772b8/"}
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Linkedin />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href={"https://x.com/RohitRaj289"} target="_blank">
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <BsTwitterX className="size-6" />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>X</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href={"mailto:rohitraj289@gmail.com"} target="_blank">
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Mail />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>Email</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link
              href={"https://www.instagram.com/raj_rohit_19/"}
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Instagram />
                </TooltipTrigger>
                <TooltipContent>
                  <p style={{ fontFamily: "var(--font-syne)" }}>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

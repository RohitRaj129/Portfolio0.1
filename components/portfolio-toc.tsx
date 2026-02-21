"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DynamicScrollIslandTOC, { TOC_INTERFACE } from "./dynamic-toc-filter";
import GradualBlurMemo from "./GradualBlur";

const TOC_DATA: TOC_INTERFACE[] = [
  { name: "Home", value: "hero" },
  { name: "About", value: "about" },
  { name: "Skills", value: "skills" },
  { name: "Projects", value: "projects" },
  { name: "Contact", value: "contact" },
];

export default function PortfolioTOC() {
  const [tocOpen, setTocOpen] = useState(false);

  const handleScroll = (section: TOC_INTERFACE) => {
    if (!section.value) return;
    const element = document.getElementById(section.value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {tocOpen && (
          <motion.div
            onClick={() => setTocOpen(false)}
            className="fixed inset-0 z-40 backdrop-blur-[4px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <GradualBlurMemo
          target="parent"
          position="bottom"
          height="7rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </div>
      <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
        {/* <DynamicScrollIslandTOC
          data={TOC_DATA}
          value={TOC_DATA[0]}
          setValue={handleScroll}
          lPrefix="portfolio"
          open={tocOpen}
          onOpenChange={setTocOpen}
        /> */}
      </div>
    </>
  );
}

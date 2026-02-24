"use client";

import React, { useRef, useEffect, useState } from "react";
import { ParticleCard } from "./MagicBento";

interface PortfolioBentoProps {
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  children: React.ReactNode[];
}

const DEFAULT_GLOW_COLOR = "132, 0, 255";
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const MOBILE_BREAKPOINT = 768;

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".portfolio-bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".portfolio-bento-card");

      if (!mouseInside) {
        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = "0";
        }
        cards.forEach((card) => {
          (card as HTMLElement).style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius
        );
      });

      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;

        const targetOpacity =
          minDistance <= proximity
            ? 0.8
            : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

        spotlightRef.current.style.opacity = targetOpacity.toString();
      }
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current
        ?.querySelectorAll(".portfolio-bento-card")
        .forEach((card) => {
          (card as HTMLElement).style.setProperty("--glow-intensity", "0");
        });
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default function PortfolioBento({
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = 400,
  particleCount = 12,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = false,
  children,
}: PortfolioBentoProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <>
      <style>
        {`
    .portfolio-bento-section {
      --glow-x: 50%;
      --glow-y: 50%;
      --glow-intensity: 0;
      --glow-radius: ${spotlightRadius}px;
      --glow-color: ${glowColor};
      --border-color: rgba(132, 0, 255, 0.2);
    }

    /* ── Base (Mobile first) ── */
    .portfolio-bento-grid {
      display: grid;
      gap: 0.75rem;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      grid-template-columns: 1fr;
    }

    .portfolio-bento-card {
      position: relative;
      border-radius: 20px;
      overflow: visible;
      min-height: 200px;
      width: 100%;
    }

    /* Mobile — all cards stack */
    .portfolio-bento-card:nth-child(n) {
      grid-column: span 1;
      min-height: 200px;
    }

    /* Mobile — Quote full width */
    .portfolio-bento-card:nth-child(8) {
      grid-column: span 1;
      width: 100%;
      margin: 0 auto;
      min-height: 100px;
    }

    /* ── Tablet (600px+) ── */
    @media (min-width: 600px) {
      .portfolio-bento-grid {
        grid-template-columns: 3fr 2fr;
        gap: 1rem;
        padding: 0 1.5rem;
      }

      /* Card 1 and 2 — 3:2 ratio */
      .portfolio-bento-card:nth-child(1) { grid-column: span 1; min-height: 300px; }
      .portfolio-bento-card:nth-child(2) { grid-column: span 1; min-height: 300px; }

      /* All remaining — full width */
      .portfolio-bento-card:nth-child(n+3) { grid-column: span 2; min-height: 250px; }

      /* Artifacts Vault — taller */
      .portfolio-bento-card:nth-child(4) { min-height: 500px; }

      /* Skills Inventory — taller */
      .portfolio-bento-card:nth-child(5) { min-height: 400px; }

      /* Quote — 70% centered */
      .portfolio-bento-card:nth-child(8) {
        grid-column: span 2;
        width: 70%;
        margin: 0 auto;
        min-height: 100px;
      }
    }

    /* ── Desktop (1024px+) ── */
    @media (min-width: 1024px) {
      .portfolio-bento-grid {
        grid-template-columns: 3fr 2fr;
        gap: 1.25rem;
        padding: 0 2rem;
      }

      .portfolio-bento-card:nth-child(1) { min-height: 350px; }
      .portfolio-bento-card:nth-child(2) { min-height: 350px; }
      .portfolio-bento-card:nth-child(3) { min-height: 200px; }
      .portfolio-bento-card:nth-child(4) { min-height: 600px; }
      .portfolio-bento-card:nth-child(5) { min-height: 450px; }
      .portfolio-bento-card:nth-child(6) { min-height: 300px; }
      .portfolio-bento-card:nth-child(7) { min-height: 300px; }

      /* Quote — 60% centered */
      .portfolio-bento-card:nth-child(8) {
        grid-column: span 2;
        width: 60%;
        margin: 0 auto;
        min-height: 100px;
      }
    }

    /* ── Large Desktop (1280px+) ── */
    @media (min-width: 1280px) {
      .portfolio-bento-grid {
        gap: 1.5rem;
        padding: 0;
      }

      /* Quote — 50% centered */
      .portfolio-bento-card:nth-child(8) {
        grid-column: span 2;
        width: 50%;
        margin: 0 auto;
        min-height: 100px;
      }
    }

    ${
      enableBorderGlow
        ? `
      .portfolio-bento-card::after {
        content: '';
        position: absolute;
        inset: 0;
        padding: 2px;
        background: radial-gradient(
          var(--glow-radius) circle at var(--glow-x) var(--glow-y),
          rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
          rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
          transparent 60%
        );
        border-radius: inherit;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        pointer-events: none;
        opacity: 1;
        transition: opacity 0.3s ease;
        z-index: 1;
      }

      .portfolio-bento-card:hover::after {
        opacity: 1;
      }
    `
        : ""
    }
  `}
      </style>

      <div className="portfolio-bento-section relative w-full">
        {enableSpotlight && (
          <GlobalSpotlight
            gridRef={gridRef}
            disableAnimations={shouldDisableAnimations}
            enabled={enableSpotlight}
            spotlightRadius={spotlightRadius}
            glowColor={glowColor}
          />
        )}

        <div ref={gridRef} className="portfolio-bento-grid">
          {React.Children.map(children, (child, index) => (
            <div className="portfolio-bento-card" key={index}>
              {enableStars ? (
                <ParticleCard
                  className="w-full h-full"
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  {child}
                </ParticleCard>
              ) : (
                child
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

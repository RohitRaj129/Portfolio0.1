import QuestLog from "./sections/quests/QuestLog";
import SkillsGrid from "./sections/skills/SkillsGrid";
import ArtifactVault from "./sections/inventory/ArtifactVault";
import SystemFooter from "./sections/footer/SystemFooter";

import { quests } from "@/data/quests";
import { skills } from "@/data/skills";
import { artifacts } from "@/data/artifacts";
import PortfolioBento from "@/components/PortfolioBento";
import ProfileCard from "./sections/hero/ProfileCard";
import StatsCard from "./sections/hero/StatsCard";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import PortfolioTOC from "@/components/portfolio-toc";

export default function Home() {
  return (
    <>
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <AnimatedThemeToggler />
      </div>

      {/* CRT Scanline Overlay */}
      <div className="scanline"></div>

      {/* Main Wrapper with Grid Background */}
      <div>
        {/* Main Content */}
        <main className="grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-8 gap-12 max-w-7xl mx-auto">
          <PortfolioBento
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          >
            {/* Player Status Section */}
            <ProfileCard />

            {/* Quest Log Section */}
            <StatsCard />

            {/* Skills Section */}
            <SkillsGrid skills={skills} />

            {/* Artifact Vault Section */}
            <ArtifactVault artifacts={artifacts} />
          </PortfolioBento>
        </main>

        {/* Footer */}
        <SystemFooter />
      </div>
      <PortfolioTOC />
    </>
  );
}

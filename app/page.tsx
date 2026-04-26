import SkillsGrid from "./sections/skills/SkillsGrid";
import ArtifactVault from "./sections/projects/ArtifactVault";
import SystemFooter from "./sections/footer/SystemFooter";
import PortfolioBento from "@/components/PortfolioBento";
import ProfileCard from "./sections/hero/ProfileCard";
import StatsCard from "./sections/hero/StatsCard";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import PortfolioTOC from "@/components/portfolio-toc";
import Intro from "./sections/introduction/Intro";
import { BlurFade } from "@/components/ui/blur-fade";
import AboutMe from "./sections/About/AboutMe";
import Quote from "./sections/footer/Quote";


export default function Home() {
  return (
    <>
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <AnimatedThemeToggler />
      </div>

      {/* Main Wrapper with Grid Background */}
      <div>
        {/* Main Content */}
        <main className="grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-8 gap-12 max-w-7xl mx-auto">
          <BlurFade delay={0.25}>
            <PortfolioBento
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={15}
              glowColor="132, 0, 255"
              disableAnimations={false}
            >
              {/* Player Status Section */}
              <ProfileCard />

              {/* Quest Log Section */}
              <StatsCard />

              {/* Introduction Section */}
              <Intro />

              {/* Artifact Vault Section */}
              <ArtifactVault />

              {/* Skills Section */}
              <SkillsGrid />

              {/* About Me Section  */}
              <AboutMe />

              

              {/* Quote or fun easter egg can go here! Maybe a random quote generator or a hidden mini-game trigger? */}
              <Quote />
            </PortfolioBento>
          </BlurFade>
        </main>

        {/* Footer */}
        <SystemFooter />
      </div>
      <PortfolioTOC />
    </>
  );
}

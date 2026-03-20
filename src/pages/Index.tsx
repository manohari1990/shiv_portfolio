import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import TechnicalSkillsSection from "../components/TechnicalSkillsSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <SkillsSection />
      <TechnicalSkillsSection />
      <ContactSection />
      <footer className="py-6 border-t border-border">
        <div className="container flex items-center justify-between">
          <p className="font-mono text-[10px] text-muted-foreground/40 tracking-wider uppercase">
            Copyright © 2026. All Rights Reserved.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/40 tracking-wider uppercase">
            Developed by Manohari Gara.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

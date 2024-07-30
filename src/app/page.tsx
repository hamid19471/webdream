import { HeroSection } from "./_components/header/hero-section/hero-section";
import { AboutSection, TechnologySection } from "./_components/home-sections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechnologySection />
    </div>
  );
}

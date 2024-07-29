import { HeroSection } from "./_components/header/hero-section/hero-section";
import { AboutSection, ServicesSection } from "./_components/home-sections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}

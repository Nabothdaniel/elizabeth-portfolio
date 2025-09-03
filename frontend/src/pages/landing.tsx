import { useEffect } from "react";
import AOS from "aos";
import HeaderSection from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import CraftingSection from "../components/landing/CraftingSection";
import StatsSection from "../components/landing/Stats";
import ServicesSection from "../components/landing/ServicesSection";
import AboutSection from "../components/landing/AboutSection";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="relative">
      <HeaderSection />
      <main className="w-full lg:mr-[420px]">
        <HeroSection />
        <CraftingSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </div>
  );
};

export default LandingPage;
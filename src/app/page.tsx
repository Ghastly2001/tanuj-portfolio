import AvailableSection from "@/components/available-section";
import BringSection from "@/components/bring-section";
import ExpertiseSection from "@/components/expertise-section";
import HelpSection from "@/components/help-section";
import HeroSection from "@/components/hero-section";
import MoreAboutSection from "@/components/more-about-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialCarousel from "@/components/quote-section";
import SubHero from "@/components/sub-hero";
export default function Home() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <HeroSection />
      </div>
      <SubHero />
      <div className="max-w-[1440px] mx-auto">
        <ProjectsSection />
      </div>
      <ExpertiseSection />
      <div className="max-w-[1440px] mx-auto">
        <BringSection />
      </div>
      <HelpSection />
      <div className="max-w-[1440px] mx-auto">
        <MoreAboutSection />
      </div>
      <TestimonialCarousel />
      <div className="max-w-[1440px] mx-auto">
        <AvailableSection />
      </div>
    </div>
  );
}

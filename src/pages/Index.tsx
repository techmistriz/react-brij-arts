import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import StructureSection from "@/components/landing/StructureSection";
import WhoShouldApply from "@/components/landing/WhoShouldApply";
import TimelineSection from "@/components/landing/TimelineSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import ApplyCtaSection from "@/components/landing/ApplyCtaSection";
import PartnersSection from "@/components/landing/PartnersSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StructureSection />
      <WhoShouldApply />
      <TimelineSection />
      <ExperienceSection />
      <ApplyCtaSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;

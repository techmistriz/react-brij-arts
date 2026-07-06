import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import StructureSection from "@/components/landing/StructureSection";
import WhoShouldApply from "@/components/landing/WhoShouldApply";

import ExperienceSection from "@/components/landing/ExperienceSection";
import TimelineSection from "@/components/landing/TimelineSection";
import ApplyCtaSection from "@/components/landing/ApplyCtaSection";
import PartnersSection from "@/components/landing/PartnersSection";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>
          THE BRIJ Cultural Leaders Fellowship — Delivered by Serendipity Arts
        </title>

        <meta
          name="description"
          content="A leadership programme for emerging cultural practitioners. Apply now for THE BRIJ Cultural Leaders Fellowship delivered by Serendipity Arts Foundation."
          key="description"
        />

        <meta
          property="og:title"
          content="THE BRIJ Cultural Leaders Fellowship — Delivered by Serendipity Arts"
          key="og:title"
        />

        <meta
          property="og:description"
          content="A leadership programme for emerging cultural practitioners. Apply now for THE BRIJ Cultural Leaders Fellowship delivered by Serendipity Arts Foundation."
          key="og:description"
        />

        <meta
          name="twitter:title"
          content="THE BRIJ Cultural Leaders Fellowship — Delivered by Serendipity Arts"
          key="twitter:title"
        />

        <meta
          name="twitter:description"
          content="A leadership programme for emerging cultural practitioners. Apply now for THE BRIJ Cultural Leaders Fellowship delivered by Serendipity Arts Foundation."
          key="twitter:description"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <StructureSection />
        <WhoShouldApply />
        {/* <ExperienceSection /> */}
        <TimelineSection />
        <ApplyCtaSection />
        <PartnersSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;

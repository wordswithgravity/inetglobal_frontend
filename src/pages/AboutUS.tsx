import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getAboutUsTranslations } from "../data/aboutUsTranslations";
import { getRegionContent } from "../data/regionContent";
import AboutHero from "../components/AboutUs/AboutHero";
import AboutCompany from "../components/AboutUs/AboutCompany";
import WhatWeDo from "../components/AboutUs/WhatWeDo";
import AboutServices from "../components/AboutUs/AboutServices";
import AddressAndMap from "../components/AboutUs/AddressAndMap";
import AboutCta from "../components/AboutUs/AboutCta";

export const AboutUs: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getAboutUsTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  const regionContent = getRegionContent(selectedRegion, selectedLanguage);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section with iPhone Network Operations Mockup */}
      <AboutHero t={t} />

      {/* 3. About the Company: Who We Are, Story, Mission, Vision, Core Values */}
      <AboutCompany t={t} />

      {/* 4. What We Do: 4 Operational Telecom Pillars */}
      <WhatWeDo t={t} />

      {/* 5. About Our Services: Detailed 6 Services Suite */}
      <AboutServices t={t} />

      {/* 6. Show Our Address & Live Map Graphic */}
      <AddressAndMap t={t} regionContent={regionContent} />

      {/* 7. Action CTA Banner */}
      <AboutCta t={t} />

      {/* 8. Global Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

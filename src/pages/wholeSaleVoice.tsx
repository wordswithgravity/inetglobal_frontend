import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getWholesaleVoiceTranslations } from "../data/wholesaleVoiceTranslations";
import Hero from "../components/VoiceService/Hero";
import WhyVoice from "../components/VoiceService/WhyVoice";
import CoreCapabilities from "../components/VoiceService/CoreCapabilities";
import GlobalNetwork from "../components/VoiceService/GlobalNetwork";
import MomentsSection from "../components/VoiceService/MomentsSection";
import RequirementsTimeline from "../components/VoiceService/RequirementsTimeline";
import TestimonialSection from "../components/VoiceService/TestimonialSection";
import VoiceCta from "../components/VoiceService/VoiceCta";

export const WholeSaleVoice: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getWholesaleVoiceTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Global Voice Infrastructure */}
      <Hero t={t} />

      {/* 3. Why INET Voice Section */}
      <WhyVoice t={t} />

      {/* 4. Core Capabilities: One Voice Stack */}
      <CoreCapabilities t={t} />

      {/* 5. Global Network Section (Dark Navy World Map) */}
      <GlobalNetwork t={t} />

      {/* 6. Voice Services For Every Critical Moment */}
      <MomentsSection t={t} />

      {/* 7. Requirements To Live Traffic Timeline + Terminal */}
      <RequirementsTimeline t={t} />

      {/* 8. Trusted In Production (Maya Chen Testimonial) */}
      <TestimonialSection t={t} />

      {/* 9. Call To Action (Ready For Clearer Calls) */}
      <VoiceCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export default WholeSaleVoice;

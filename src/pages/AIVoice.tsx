import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getAIVoiceTranslations } from "../data/aiVoiceTranslations";
import Hero from "../components/VoiceService/Hero";
import WhyVoice from "../components/VoiceService/WhyVoice";
import CoreCapabilities from "../components/VoiceService/CoreCapabilities";
import GlobalNetwork from "../components/VoiceService/GlobalNetwork";
import MomentsSection from "../components/VoiceService/MomentsSection";
import RequirementsTimeline from "../components/VoiceService/RequirementsTimeline";
import TestimonialSection from "../components/VoiceService/TestimonialSection";
import VoiceCta from "../components/VoiceService/VoiceCta";

export const AIVoice: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getAIVoiceTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Every Call Connected with Confidence */}
      <Hero t={t} />

      {/* 3. Section 2: Voice Infrastructure That Earns Customer Trust */}
      <WhyVoice t={t} />

      {/* 4. Section 3: One Voice Stack, Built Around Your Traffic */}
      <CoreCapabilities t={t} />

      {/* 5. Section 4: A Network Designed to Keep Conversations Moving */}
      <GlobalNetwork t={t} />

      {/* 6. Section 5: Voice Services for Every Critical Moment */}
      <MomentsSection t={t} />

      {/* 7. Section 6: From Requirements to Live Traffic, Together */}
      <RequirementsTimeline t={t} />

      {/* 8. Section 7: A Voice Partner Your Operations Team Can Rely On */}
      <TestimonialSection t={t} />

      {/* 9. Section 8: Ready for Clearer Calls and Smarter Global Reach? */}
      <VoiceCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export default AIVoice;

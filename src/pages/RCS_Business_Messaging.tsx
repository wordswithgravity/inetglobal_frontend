import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getRcsBusinessMessagingTranslations } from "../data/rcsBusinessMessagingTranslations";
import Hero from "../components/MessageService/Hero";
import WhyMessage from "../components/MessageService/WhyMessage";
import CoreCapabilities from "../components/MessageService/CoreCapabilities";
import GlobalNetwork from "../components/MessageService/GlobalNetwork";
import MomentsSection from "../components/MessageService/MomentsSection";
import RcsDifferenceSection from "../components/RCS_Business_Messaging/RcsDifferenceSection";
import RequirementsTimeline from "../components/MessageService/RequirementsTimeline";
import MessageCta from "../components/MessageService/MessageCta";

export const RCS_Business_Messaging: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getRcsBusinessMessagingTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Every Message, Connected with Confidence */}
      <Hero t={t} />

      {/* 3. Section 2: Messaging Infrastructure That Makes Every Interaction Count */}
      <WhyMessage t={t} />

      {/* 4. Section 3: One Messaging Platform, Built Around Your Business */}
      <CoreCapabilities t={t} />

      {/* 5. Section 4: A Global Network Designed to Keep Messages Moving */}
      <GlobalNetwork t={t} />

      {/* 6. Section 5: Built for Every Customer Interaction */}
      <MomentsSection t={t} />

      {/* 7. Section 6: See the Difference Rich Messaging Can Make */}
      <RcsDifferenceSection comparison={t.comparison} />

      {/* 8. Section 7: From Requirements to Rich Messaging, Together */}
      <RequirementsTimeline t={t} />

      {/* 9. Section 8: Make Customer Communication More Engaging */}
      <MessageCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export default RCS_Business_Messaging;

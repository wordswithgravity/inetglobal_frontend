import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getWholesaleMessageTranslations } from "../data/wholesaleMessageTranslations";
import Hero from "../components/MessageService/Hero";
import WhyMessage from "../components/MessageService/WhyMessage";
import CoreCapabilities from "../components/MessageService/CoreCapabilities";
import HowItWorks from "../components/MessageService/HowItWorks";
import GlobalNetwork from "../components/MessageService/GlobalNetwork";
import MomentsSection from "../components/MessageService/MomentsSection";
import DeliveryIntelligence from "../components/MessageService/DeliveryIntelligence";
import RequirementsTimeline from "../components/MessageService/RequirementsTimeline";
import FaqSection from "../components/MessageService/FaqSection";
import MessageCta from "../components/MessageService/MessageCta";

export const WholeSaleMessage: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getWholesaleMessageTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Wholesale SMS & Messaging Infrastructure */}
      <Hero t={t} />

      {/* 3. Why iNet Wholesale SMS */}
      <WhyMessage t={t} />

      {/* 4. Core Capabilities: One SMS Platform Built Around Your Traffic */}
      <CoreCapabilities t={t} />

      {/* 5. How It Works: From Your Platform To The Handset */}
      <HowItWorks t={t} />

      {/* 6. Global Network Section (Dark Map & Carrier Relations) */}
      <GlobalNetwork t={t} />

      {/* 7. SMS For The Moments That Matter */}
      <MomentsSection t={t} />

      {/* 8. Delivery Intelligence & Traffic Protection */}
      <DeliveryIntelligence t={t} />

      {/* 9. Requirements To Live Traffic Timeline + Integration Plan */}
      <RequirementsTimeline t={t} />

      {/* 10. FAQ: A Clearer Path To Your SMS Solution */}
      <FaqSection t={t} />

      {/* 11. Call To Action (Ready For Smarter SMS Connectivity) */}
      <MessageCta t={t} />

      {/* 12. Global Footer */}
      <Footer />
    </div>
  );
};

export default WholeSaleMessage;

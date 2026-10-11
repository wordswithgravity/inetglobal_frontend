import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getRcsBusinessMessagingTranslations } from "../data/rcsBusinessMessagingTranslations";
import Hero from "../components/WhatsappBusiness/Hero";
import BusinessMessaging from "../components/WhatsappBusiness/BusinessMessaging";
import KeyFeatures from "../components/WhatsappBusiness/KeyFeatures";
import HowItWorks from "../components/WhatsappBusiness/HowItWorks";
import UseCasesSection from "../components/WhatsappBusiness/UseCasesSection";
import IndustriesSection from "../components/WhatsappBusiness/IndustriesSection";
import WhyChooseSection from "../components/WhatsappBusiness/WhyChooseSection";
import WhatsappCta from "../components/WhatsappBusiness/WhatsappCta";

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

      {/* 2. Hero Section: Transform Everyday SMS into Rich Conversational RCS */}
      <Hero t={t} />

      {/* 3. Section 2: Deliver rich, interactive app-like experiences without an app */}
      <BusinessMessaging t={t} />

      {/* 4. Section 3: Key Capabilities - Rich media. Verified security. Exceptional engagement. */}
      <KeyFeatures t={t} />

      {/* 5. Section 4: How It Works - Deploy verified RCS campaigns in four steps */}
      <HowItWorks t={t} />

      {/* 6. Section 5: Use Cases - Engage mobile users with richer conversational experiences */}
      <UseCasesSection t={t} />

      {/* 7. Section 6: Industries We Serve - RCS business messaging across market sectors */}
      <IndustriesSection t={t} />

      {/* 8. Section 7: Why Our RCS Platform - Why Leading Enterprises Choose iNet RCS */}
      <WhyChooseSection t={t} />

      {/* 9. Section 8: Upgrade To RCS Call to Action */}
      <WhatsappCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export const RCS = RCS_Business_Messaging;
export default RCS_Business_Messaging;

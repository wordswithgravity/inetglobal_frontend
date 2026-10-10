import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getWhatsappBusinessTranslations } from "../data/whatsappBusinessTranslations";
import Hero from "../components/WhatsappBusiness/Hero";
import BusinessMessaging from "../components/WhatsappBusiness/BusinessMessaging";
import KeyFeatures from "../components/WhatsappBusiness/KeyFeatures";
import HowItWorks from "../components/WhatsappBusiness/HowItWorks";
import UseCasesSection from "../components/WhatsappBusiness/UseCasesSection";
import IndustriesSection from "../components/WhatsappBusiness/IndustriesSection";
import WhyChooseSection from "../components/WhatsappBusiness/WhyChooseSection";
import WhatsappCta from "../components/WhatsappBusiness/WhatsappCta";

export const WhatsappBusiness: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getWhatsappBusinessTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Connect With Customers on WhatsApp */}
      <Hero t={t} />

      {/* 3. Business Messaging: Make every conversation more useful */}
      <BusinessMessaging t={t} />

      {/* 4. Key Features: Built for conversations. Ready for business. */}
      <KeyFeatures t={t} />

      {/* 5. How It Works: A clear path from setup to conversation. */}
      <HowItWorks t={t} />

      {/* 6. WhatsApp Use Cases: Be there at the moments that matter. */}
      <UseCasesSection t={t} />

      {/* 7. Industries We Serve: Relevant conversations, across industries. */}
      <IndustriesSection t={t} />

      {/* 8. Why Choose Our WhatsApp Solutions */}
      <WhyChooseSection t={t} />

      {/* 9. Call To Action: Bring your business to WhatsApp. */}
      <WhatsappCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export default WhatsappBusiness;

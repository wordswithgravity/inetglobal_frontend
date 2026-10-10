import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getLivechatTranslations } from "../data/omnichannelChannelTranslations";
import Hero from "../components/WhatsappBusiness/Hero";
import BusinessMessaging from "../components/WhatsappBusiness/BusinessMessaging";
import KeyFeatures from "../components/WhatsappBusiness/KeyFeatures";
import HowItWorks from "../components/WhatsappBusiness/HowItWorks";
import UseCasesSection from "../components/WhatsappBusiness/UseCasesSection";
import IndustriesSection from "../components/WhatsappBusiness/IndustriesSection";
import WhyChooseSection from "../components/WhatsappBusiness/WhyChooseSection";
import WhatsappCta from "../components/WhatsappBusiness/WhatsappCta";

export const LivechatPlugin: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getLivechatTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero t={t} />

      {/* 3. Business Messaging / Overview */}
      <BusinessMessaging t={t} />

      {/* 4. Key Features */}
      <KeyFeatures t={t} />

      {/* 5. How It Works */}
      <HowItWorks t={t} />

      {/* 6. Use Cases Section */}
      <UseCasesSection t={t} />

      {/* 7. Industries We Serve */}
      <IndustriesSection t={t} />

      {/* 8. Why Choose Our Solution */}
      <WhyChooseSection t={t} />

      {/* 9. Call To Action */}
      <WhatsappCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export default LivechatPlugin;

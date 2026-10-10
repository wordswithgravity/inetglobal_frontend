import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getOmnichannelTranslations } from "../data/omnichannelTranslations";
import Hero from "../components/OmniChannel/Hero";
import WhyOurService from "../components/OmniChannel/WhyOurService";
import WhyChooseOmnichannel from "../components/OmniChannel/WhyChooseOmnichannel";
import ServicesProvide from "../components/OmniChannel/ServicesProvide";
import OmnichannelCta from "../components/OmniChannel/OmnichannelCta";

export const OmniChannel: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getOmnichannelTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* SECTION 1: HERO (CONNECT EVERY CUSTOMER CONVERSATION THROUGH ONE PLATFORM) */}
      <Hero t={t} />

      {/* SECTION 2: WHY OUR SERVICE (OMNICHANNEL SERVICES THAT WORKS) CAROUSEL */}
      <WhyOurService t={t} />

      {/* SECTION 3: WHY CHOOSE OUR OMNICHANNEL SOLUTIONS (CONSTELLATION LAYOUT) */}
      <WhyChooseOmnichannel t={t} />

      {/* SECTION 4: WHAT OUR SERVICES PROVIDE (5-CARDS ROW) */}
      <ServicesProvide t={t} />

      {/* SECTION 5: CTA BANNER (LET'S BUILD YOUR MESSAGING NETWORK) */}
      <OmnichannelCta t={t} />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default OmniChannel;

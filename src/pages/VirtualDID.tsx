import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getVirtualDidTranslations } from "../data/virtualDidTranslations";
import Hero from "../components/Virtual_DID/Hero";
import HighlightsBar from "../components/Virtual_DID/HighlightsBar";
import DidManagement from "../components/Virtual_DID/DidManagement";
import IncomingCallManagement from "../components/Virtual_DID/IncomingCallManagement";
import MobileAppSection from "../components/Virtual_DID/MobileAppSection";
import SmsReceivingSection from "../components/Virtual_DID/SmsReceivingSection";
import MonitoringSection from "../components/Virtual_DID/MonitoringSection";
import ResellerSection from "../components/Virtual_DID/ResellerSection";
import DidCta from "../components/Virtual_DID/DidCta";

export const VirtualDID: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getVirtualDidTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Complete DID Management & Virtual Number Platform */}
      <Hero t={t} />

      {/* 3. Highlights Bar Section: Your Global Number. Your Complete Control. */}
      <HighlightsBar t={t} />

      {/* 4. Manage DIDs From One Centralized Portal & Inventory Table */}
      <DidManagement t={t} />

      {/* 4. Powerful Incoming Call Management & Call Journey Card */}
      <IncomingCallManagement t={t} />

      {/* 5. Your DID in Your Pocket: Mobile App Mockups & Features */}
      <MobileAppSection t={t} />

      {/* 6. Never Miss an Important Message: SMS Receiving & Dashboard */}
      <SmsReceivingSection t={t} />

      {/* 7. Know the Status of Every Number: Real-time Analytics & Chart */}
      <MonitoringSection t={t} />

      {/* 8. Create Your Own Virtual Number Business & White-Label Portal */}
      <ResellerSection t={t} />

      {/* 9. Call To Action Banner */}
      <DidCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export default VirtualDID;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getDailerSolutionTranslations } from "../data/dailerSolutionTranslations";
import Hero from "../components/DailerSolution/Hero";
import HighlightsBar from "../components/DailerSolution/HighlightsBar";
import DesktopDialerSection from "../components/DailerSolution/DesktopDialerSection";
import MobileDialerSection from "../components/DailerSolution/MobileDialerSection";
import GlobalRoutesSection from "../components/DailerSolution/GlobalRoutesSection";
import CallCenterMonitoring from "../components/DailerSolution/CallCenterMonitoring";
import DialingModesSection from "../components/DailerSolution/DialingModesSection";
import AnalyticsSection from "../components/DailerSolution/AnalyticsSection";
import DialerCta from "../components/DailerSolution/DialerCta";

export const DailerSolution: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getDailerSolutionTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Next-Generation Call Center Dialer for Desktop & Mobile */}
      <Hero t={t} />

      {/* 3. 6 Feature Highlights Bar */}
      <HighlightsBar t={t} />

      {/* 4. One Dialer. Every Calling Requirement. - Turn Any Computer Into a Professional Call Center */}
      <DesktopDialerSection t={t} />

      {/* 5. Mobile Dialer: Take Your Calling Operation Anywhere */}
      <MobileDialerSection t={t} />

      {/* 6. Advanced A-Z Global Routes: Reach Customers Through the Right Route */}
      <GlobalRoutesSection t={t} />

      {/* 7. Advanced Call Center Monitoring & Supervisor Tools */}
      <CallCenterMonitoring t={t} />

      {/* 8. Advanced Dialing Modes (Predictive, Progressive, Power, Preview) */}
      <DialingModesSection t={t} />

      {/* 9. Call Analytics & Reports: Turn Call Data Into Better Performance */}
      <AnalyticsSection t={t} />

      {/* 10. Call To Action Banner */}
      <DialerCta t={t} />

      {/* 11. Global Footer */}
      <Footer />
    </div>
  );
};

export default DailerSolution;

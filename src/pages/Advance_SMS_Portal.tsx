import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getOtpSmsTranslations } from "../data/otpSmsTranslations";
import Hero from "../components/Advance_SMS_Portal/Hero";
import ManagementSection from "../components/Advance_SMS_Portal/ManagementSection";
import AdvancedFeatures from "../components/Advance_SMS_Portal/AdvancedFeatures";
import VisibilitySection from "../components/Advance_SMS_Portal/VisibilitySection";
import EnterpriseSection from "../components/Advance_SMS_Portal/EnterpriseSection";
import WorkflowSection from "../components/Advance_SMS_Portal/WorkflowSection";
import OtpCta from "../components/Advance_SMS_Portal/OtpCta";

export const Advance_SMS_Portal: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getOtpSmsTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Powerful SMS Portal Built for High-Volume Messaging */}
      <Hero t={t} />

      {/* 3. Management Section: Everything You Need to Manage SMS & Interactive Campaign Builder */}
      <ManagementSection t={t} />

      {/* 4. Advanced Features: Messaging Capabilities */}
      <AdvancedFeatures t={t} />

      {/* 5. Visibility & Control: Know What Is Happening With Every Message */}
      <VisibilitySection t={t} />

      {/* 6. Enterprise Ready: Built for Resellers, Enterprises & SMS Providers */}
      <EnterpriseSection t={t} />

      {/* 7. Platform Workflow: From Message to Delivery */}
      <WorkflowSection t={t} />

      {/* 8. Call To Action: Grow Your Business with Business SMS Solutions */}
      <OtpCta t={t} />

      {/* 9. Global Footer */}
      <Footer />
    </div>
  );
};

export const OTP_SMS = Advance_SMS_Portal;
export default Advance_SMS_Portal;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getOtpSmsServicesTranslations } from "../data/otpSmsServicesTranslations";
import Hero from "../components/MessageService/Hero";
import WhyMessage from "../components/MessageService/WhyMessage";
import CoreCapabilities from "../components/MessageService/CoreCapabilities";
import GlobalNetwork from "../components/MessageService/GlobalNetwork";
import MomentsSection from "../components/MessageService/MomentsSection";
import OtpAuthComparisonSection from "../components/OTP_SMS_Services/OtpAuthComparisonSection";
import RequirementsTimeline from "../components/MessageService/RequirementsTimeline";
import MessageCta from "../components/MessageService/MessageCta";

export const OTP_sms: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getOtpSmsServicesTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section: Every Verification, Connected with Confidence */}
      <Hero t={t} />

      {/* 3. Section 2: Messaging Infrastructure That Protects Every Verification */}
      <WhyMessage t={t} />

      {/* 4. Section 3: One OTP Platform, Built Around Your Business */}
      <CoreCapabilities t={t} />

      {/* 5. Section 4: A Global Network Designed to Keep Verification Moving */}
      <GlobalNetwork t={t} />

      {/* 6. Section 5: Built for Every Verification Moment */}
      <MomentsSection t={t} />

      {/* 7. Section 6: See How OTP SMS Supports Authentication */}
      <OtpAuthComparisonSection comparison={t.comparison} />

      {/* 8. Section 7: From Integration to Verification, Together */}
      <RequirementsTimeline t={t} />

      {/* 9. Section 8: Make Every Verification More Reliable */}
      <MessageCta t={t} />

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
};

export default OTP_sms;

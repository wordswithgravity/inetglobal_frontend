import React, { useState } from "react";
import {
  ArrowRight,
  MessageSquare,
  Check,
  BarChart3,
  Zap,
  Lock,
  Share2,
  Send,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getMessagingTranslations } from "../data/messagingTranslations";
import globeImg from "../assets/globe.png";
import logoImg from "../assets/logo.png";
import Iphone from "../components/Iphone";

export const MessagingServices: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region,
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);
  const [isApiHovered, setIsApiHovered] = useState(false);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getMessagingTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name,
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (CONNECT INSTANTLY WITH RELIABLE SMS COMMUNICATION)       */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#EEF2EB] pt-8 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left relative z-20">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.heroBadge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[52px] font-bold text-[#102038] tracking-tight leading-[1.15]">
                {t.heroTitle}
              </h1>

              <p className="text-[15px] sm:text-[17px] text-[#4e5e70] leading-relaxed max-w-xl">
                {t.heroDesc}
              </p>

              <div className="pt-2 sm:pt-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
                >
                  {t.getStarted}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Graphic Column: Phone with Live Chat & Floating Badges */}
            <div className="lg:col-span-6 flex justify-center items-center relative py-6 lg:py-4 z-10">
              <div className="relative w-full max-w-[560px] sm:max-w-[660px] lg:max-w-[720px] flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
                {/* Background Ambient Glow */}
                <div className="absolute w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] rounded-full bg-[#dbe8d2]/85 blur-3xl -z-10" />

                {/* Large Background Globe */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-65 sm:opacity-75 scale-120 sm:scale-130 lg:scale-140 transition-transform duration-300 z-0">
                  <img
                    src={globeImg}
                    alt="Network Globe"
                    className="w-full max-w-[580px] sm:max-w-[680px] lg:max-w-[760px] h-auto object-contain select-none"
                  />
                </div>

                {/* iPhone Container with Live Chat Conversation */}
                <div className="relative z-10 w-[240px] sm:w-[270px] lg:w-[290px] drop-shadow-2xl">
                  <Iphone className="w-full">
                    <div className="w-full h-full bg-slate-50 flex flex-col justify-between font-sans text-slate-800 p-3 pt-7 select-none">
                      {/* Chat Top App Header */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-gray-200">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 rounded-full bg-[#102038] flex items-center justify-center p-1 shrink-0">
                            <img
                              src={logoImg}
                              alt="iNet Logo"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-[11.5px] font-bold text-[#102038] truncate flex items-center gap-1">
                              <span>{t.chatScreen.contactName}</span>
                              <ShieldCheck className="w-3 h-3 text-[#698a22] shrink-0" />
                            </div>
                            <div className="text-[9.5px] text-[#698a22] font-semibold">
                              {t.chatScreen.status}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Message Bubbles */}
                      <div className="space-y-3 py-3 flex-1 flex flex-col justify-center">
                        {/* Incoming Message Bubble */}
                        <div className="flex flex-col items-start space-y-1 max-w-[88%] text-left">
                          <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-xs p-3 shadow-xs text-[11px] text-slate-700 leading-snug">
                            {t.chatScreen.msg1}
                          </div>
                          <span className="text-[9px] text-slate-400 pl-1">
                            {t.chatScreen.time1}
                          </span>
                        </div>

                        {/* Outgoing Message Bubble */}
                        <div className="flex flex-col items-end space-y-1 max-w-[88%] self-end text-right">
                          <div className="bg-[#698a22] text-white rounded-2xl rounded-tr-xs p-3 shadow-xs text-[11px] leading-snug text-left">
                            {t.chatScreen.msg2}
                          </div>
                          <span className="text-[9px] text-slate-400 pr-1">
                            {t.chatScreen.time2}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Input Preview */}
                      <div className="bg-white border border-gray-200 rounded-full px-3 py-1.5 flex items-center justify-between text-[10.5px] text-slate-400">
                        <span>Type a message...</span>
                        <div className="w-5 h-5 rounded-full bg-[#83184d] text-white flex items-center justify-center">
                          <Send className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </div>
                  </Iphone>
                </div>

                {/* Floating Location/Service Badges Attached to Phone */}
                {/* 1. Top-Right Badge (Wholesale SMS) */}
                <a
                  href="/wholesale-message"
                  className="absolute top-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-xs rounded-2xl py-2 px-3.5 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 max-w-[210px] text-left transition hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[12px] font-bold text-[#102038] group-hover:text-[#698a22] transition-colors">
                      {t.floatingBadges.wholesale.title}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {t.floatingBadges.wholesale.desc}
                    </div>
                  </div>
                </a>

                {/* 2. Middle-Right Badge (RCS Business Messaging) */}
                <a
                  href="/rcs"
                  className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 bg-white/95 backdrop-blur-xs rounded-2xl py-2 px-3.5 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 max-w-[220px] text-left transition hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#fce7f3] text-[#83184d] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[12px] font-bold text-[#102038] group-hover:text-[#83184d] transition-colors">
                      {t.floatingBadges.rcs.title}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {t.floatingBadges.rcs.desc}
                    </div>
                  </div>
                </a>

                {/* 3. Bottom-Right Badge (OTP SMS) */}
                <a
                  href="/otp-sms-services"
                  className="absolute bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-xs rounded-2xl py-2 px-3.5 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 max-w-[210px] text-left transition hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[12px] font-bold text-[#102038] group-hover:text-[#698a22] transition-colors">
                      {t.floatingBadges.otp.title}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {t.floatingBadges.otp.desc}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: OUR CORE SERVICE (SMS SOLUTIONS BUILT FOR EVERY INDUSTRY)      */}
      {/* ========================================================================= */}
      <section
        id="core-services"
        className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
          {/* Section Heading */}
          <div className="text-left max-w-3xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.coreServiceBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.coreServiceTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl">
              {t.coreServiceSubtitle}
            </p>
          </div>

          {/* 3 Core Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Wholesale SMS */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-gray-200 shadow-xs hover:border-[#698a22] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#698a22] flex items-center justify-center text-white shadow-md">
                  <MessageSquare className="w-7 h-7" />
                </div>

                <div className="space-y-2.5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                    {t.services.wholesaleSms.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                    {t.services.wholesaleSms.description}
                  </p>
                </div>

                {/* Checkpoints */}
                <div className="space-y-2 pt-2 text-left">
                  {[
                    t.services.wholesaleSms.bullet1,
                    t.services.wholesaleSms.bullet2,
                    t.services.wholesaleSms.bullet3,
                  ].map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-slate-700"
                    >
                      <Check className="w-4 h-4 text-[#698a22] shrink-0 stroke-[2.5]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8 text-left">
                <a
                  href="/wholesale-message"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#83184d] group-hover:text-[#721240] transition"
                >
                  {t.services.wholesaleSms.learnMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 2: RCS Business Messaging */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-gray-200 shadow-xs hover:border-[#698a22] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#fce7f3] flex items-center justify-center text-[#83184d]">
                  <MessageSquare className="w-7 h-7" />
                </div>

                <div className="space-y-2.5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                    {t.services.rcsMessaging.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                    {t.services.rcsMessaging.description}
                  </p>
                </div>

                {/* Checkpoints */}
                <div className="space-y-2 pt-2 text-left">
                  {[
                    t.services.rcsMessaging.bullet1,
                    t.services.rcsMessaging.bullet2,
                    t.services.rcsMessaging.bullet3,
                  ].map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-slate-700"
                    >
                      <Check className="w-4 h-4 text-[#698a22] shrink-0 stroke-[2.5]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8 text-left">
                <a
                  href="/rcs"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#83184d] group-hover:text-[#721240] transition"
                >
                  {t.services.rcsMessaging.learnMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 3: OTP SMS */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-gray-200 shadow-xs hover:border-[#698a22] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#ecf4e6] flex items-center justify-center text-[#698a22]">
                  <MessageSquare className="w-7 h-7" />
                </div>

                <div className="space-y-2.5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                    {t.services.otpSms.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                    {t.services.otpSms.description}
                  </p>
                </div>

                {/* Checkpoints */}
                <div className="space-y-2 pt-2 text-left">
                  {[
                    t.services.otpSms.bullet1,
                    t.services.otpSms.bullet2,
                    t.services.otpSms.bullet3,
                  ].map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-slate-700"
                    >
                      <Check className="w-4 h-4 text-[#698a22] shrink-0 stroke-[2.5]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8 text-left">
                <a
                  href="/otp-sms-services"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#83184d] group-hover:text-[#721240] transition"
                >
                  {t.services.otpSms.learnMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHY CHOOSE OUR SMS SOLUTIONS (CONSTELLATION CARDS LAYOUT)      */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="text-left max-w-3xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.whyChooseBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.whyChooseTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-[#4e5e70] leading-relaxed max-w-2xl">
              {t.whyChooseSubtitle}
            </p>
          </div>

          {/* 5-Card Interactive Constellation Layout */}
          <div
            className="relative min-h-[380px] flex items-center justify-center"
            onMouseEnter={() => setIsApiHovered(true)}
            onMouseLeave={() => setIsApiHovered(false)}
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
              {/* Left Column (Cards 1 & 2) - Animated out on hover */}
              <div
                className={`space-y-6 lg:space-y-8 flex flex-col justify-between h-full transition-all duration-500 ease-out transform ${
                  isApiHovered
                    ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                    : "opacity-0 -translate-x-12 scale-90 pointer-events-none"
                }`}
              >
                {/* Card 1: Secure and Reliable Communication */}
                <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                    {t.whyCards.secure.title}
                  </h4>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                    {t.whyCards.secure.description}
                  </p>
                </div>

                {/* Card 2: Cloud-Based Infrastructure */}
                <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                    {t.whyCards.cloud.title}
                  </h4>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                    {t.whyCards.cloud.description}
                  </p>
                </div>
              </div>

              {/* Center Hero Navy Card (Card 3: Voice API Integration) */}
              <div
                className={`bg-[#102038] text-white rounded-[28px] p-8 sm:p-9 shadow-xl border border-slate-700/60 text-left space-y-3.5 my-auto transform transition-all duration-300 z-20 cursor-pointer ${
                  isApiHovered
                    ? "lg:scale-105 shadow-2xl shadow-[#102038]/30 ring-2 ring-[#698a22]/50"
                    : "scale-100 hover:scale-[1.02] shadow-xl hover:ring-2 hover:ring-[#698a22]/30"
                }`}
              >
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {t.whyCards.api.title}
                </h4>
                <p className="text-[14px] sm:text-[14.5px] text-slate-300 leading-relaxed">
                  {t.whyCards.api.description}
                </p>
              </div>

              {/* Right Column (Cards 4 & 5) - Animated out on hover */}
              <div
                className={`space-y-6 lg:space-y-8 flex flex-col justify-between h-full transition-all duration-500 ease-out transform ${
                  isApiHovered
                    ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-x-12 scale-90 pointer-events-none"
                }`}
              >
                {/* Card 4: Global Voice Connectivity */}
                <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                    {t.whyCards.connectivity.title}
                  </h4>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                    {t.whyCards.connectivity.description}
                  </p>
                </div>

                {/* Card 5: Automated Voice Services */}
                <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                    {t.whyCards.automated.title}
                  </h4>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                    {t.whyCards.automated.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHAT OUR SMS SERVICES PROVIDES (5-CARDS ROW)                   */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.featuresBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.featuresTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.featuresSubtitle}
            </p>
          </div>

          {/* 5 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {t.features.map((feat, idx) => {
              const icons = [
                <BarChart3 className="w-5 h-5 text-white" />,
                <MessageSquare className="w-5 h-5 text-white" />,
                <Zap className="w-5 h-5 text-white" />,
                <Lock className="w-5 h-5 text-white" />,
                <Share2 className="w-5 h-5 text-white" />,
              ];

              return (
                <div
                  key={idx}
                  className="bg-white rounded-[24px] p-6 border border-gray-200 hover:border-[#698a22] shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between text-left space-y-5"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#83184d] flex items-center justify-center shadow-xs">
                      {icons[idx % icons.length]}
                    </div>

                    <h4 className="text-lg sm:text-[18px] font-bold text-[#102038] leading-tight">
                      {feat.title}
                    </h4>

                    <p className="text-[13px] text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[11.5px] font-semibold text-[#698a22]">
                      {feat.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CTA BANNER (LET'S BUILD YOUR MESSAGING NETWORK)                */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Soft decorative background circles */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#e1ebd9]/80 blur-3xl -z-0" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#fcedf5]/80 blur-3xl -z-0" />

        <div className="max-w-[1120px] mx-auto relative z-10">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 lg:p-16 text-center shadow-sm border border-gray-100 space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.ctaBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#102038] tracking-tight leading-tight max-w-3xl mx-auto">
              {t.ctaTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.getStarted}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[14.5px] sm:text-[16px] font-medium transition duration-150 active:scale-[0.98]"
              >
                {t.contactUs}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MessagingServices;

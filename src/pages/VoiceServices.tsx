import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  PhoneCall,
  Bot,
  Hash,
  Check,
  Building2,
  Radio,
  User,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getVoiceTranslations } from "../data/voiceTranslations";
import globeImg from "../assets/globe.png";
import logoImg from "../assets/logo.png";

export const VoiceServices: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);
  const [isApiHovered, setIsApiHovered] = useState(false);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const t = getVoiceTranslations(
    selectedLanguage,
    selectedRegion,
    currentRegion?.name,
    currentRegion?.phonePrefix,
    currentRegion?.flag,
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (POWER BUSINESS COMMUNICATION WITH VOICE SOLUTIONS)       */}
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

              <h1 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-bold text-[#102038] tracking-tight leading-[1.15]">
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

            {/* Right Graphic Column: Globe with Interconnected Voice Hubs */}
            <div className="lg:col-span-6 flex justify-center items-center relative py-6 lg:py-2">
              <div className="relative w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[740px] flex items-center justify-center">
                {/* Background Ambient Glow */}
                <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#dbe8d2]/80 blur-3xl -z-10" />

                {/* Globe Image - Large and prominent */}
                <div className="relative w-full flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={globeImg}
                    alt="Voice Network Globe"
                    className="w-full max-w-[600px] sm:max-w-[720px] lg:max-w-[820px] xl:max-w-[900px] h-auto object-contain select-none transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Central Call Hub Button */}
                <div className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#698a22] flex items-center justify-center text-white shadow-xl shadow-[#698a22]/30 border-4 border-white transform transition hover:scale-110 duration-200">
                  <PhoneCall className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* Floating Location Cards (4 Hubs) */}
                {/* 1. Top-Left Hub (London / Hub 1) */}
                {t.defaultLocations[0] && (
                  <div className="absolute top-2 sm:top-13 left-0 sm:left-12 bg-white/95 backdrop-blur-xs rounded-full py-2 sm:py-2.5 px-3.5 sm:px-4 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 transition hover:shadow-xl hover:-translate-y-0.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left leading-tight pr-1">
                      <div className="text-[12px] sm:text-[13.5px] font-bold text-[#102038]">
                        {t.defaultLocations[0].city}
                      </div>
                      <div className="text-[10px] sm:text-[11.5px] text-slate-500 font-mono">
                        {t.defaultLocations[0].phone}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Top-Right Hub (Singapore / Hub 2) */}
                {t.defaultLocations[1] && (
                  <div className="absolute top-2 sm:top-13 right-0 sm:right-12 bg-white/95 backdrop-blur-xs rounded-full py-2 sm:py-2.5 px-3.5 sm:px-4 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 transition hover:shadow-xl hover:-translate-y-0.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left leading-tight pr-1">
                      <div className="text-[12px] sm:text-[13.5px] font-bold text-[#102038]">
                        {t.defaultLocations[1].city}
                      </div>
                      <div className="text-[10px] sm:text-[11.5px] text-slate-500 font-mono">
                        {t.defaultLocations[1].phone}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Bottom-Left Hub (New York / Central Hub) */}
                {t.defaultLocations[2] && (
                  <div className="absolute bottom-2 sm:bottom-14 left-0 sm:left-2 bg-white/95 backdrop-blur-xs rounded-full py-2 sm:py-2.5 px-3.5 sm:px-4 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 transition hover:shadow-xl hover:-translate-y-0.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left leading-tight pr-1">
                      <div className="text-[12px] sm:text-[13.5px] font-bold text-[#102038]">
                        {t.defaultLocations[2].city}
                      </div>
                      <div className="text-[10px] sm:text-[11.5px] text-slate-500 font-mono">
                        {t.defaultLocations[2].phone}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Bottom-Right Hub (Dubai / Gateway) */}
                {t.defaultLocations[3] && (
                  <div className="absolute bottom-2 sm:bottom-10 right-0 sm:right-2 bg-white/95 backdrop-blur-xs rounded-full py-2 sm:py-2.5 px-3.5 sm:px-4 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 transition hover:shadow-xl hover:-translate-y-0.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left leading-tight pr-1">
                      <div className="text-[12px] sm:text-[13.5px] font-bold text-[#102038]">
                        {t.defaultLocations[3].city}
                      </div>
                      <div className="text-[10px] sm:text-[11.5px] text-slate-500 font-mono">
                        {t.defaultLocations[3].phone}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: OUR CORE SERVICE (VOICE SOLUTIONS BUILT FOR EVERY INDUSTRY)   */}
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
            {/* Card 1: Wholesale Voice */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-gray-200 shadow-xs hover:border-[#698a22] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#698a22] flex items-center justify-center text-white shadow-md">
                  <PhoneCall className="w-7 h-7" />
                </div>

                <div className="space-y-2.5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                    {t.services.wholesale.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                    {t.services.wholesale.description}
                  </p>
                </div>

                {/* Checkpoints */}
                <div className="space-y-2 pt-2 text-left">
                  {[
                    t.services.wholesale.bullet1,
                    t.services.wholesale.bullet2,
                    t.services.wholesale.bullet3,
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
                  href="/wholesale-voice"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#83184d] group-hover:text-[#721240] transition"
                >
                  {t.services.wholesale.learnMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 2: Ai Voice */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-gray-200 shadow-xs hover:border-[#698a22] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#fce7f3] flex items-center justify-center text-[#83184d]">
                  <Bot className="w-7 h-7" />
                </div>

                <div className="space-y-2.5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                    {t.services.aiVoice.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                    {t.services.aiVoice.description}
                  </p>
                </div>

                {/* Checkpoints */}
                <div className="space-y-2 pt-2 text-left">
                  {[
                    t.services.aiVoice.bullet1,
                    t.services.aiVoice.bullet2,
                    t.services.aiVoice.bullet3,
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
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#83184d] group-hover:text-[#721240] transition"
                >
                  {t.services.aiVoice.learnMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 3: Virtual Number (DID) */}
            <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-gray-200 shadow-xs hover:border-[#698a22] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#ecf4e6] flex items-center justify-center text-[#698a22]">
                  <Hash className="w-7 h-7" />
                </div>

                <div className="space-y-2.5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                    {t.services.virtualNumbers.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                    {t.services.virtualNumbers.description}
                  </p>
                </div>

                {/* Checkpoints */}
                <div className="space-y-2 pt-2 text-left">
                  {[
                    t.services.virtualNumbers.bullet1,
                    t.services.virtualNumbers.bullet2,
                    t.services.virtualNumbers.bullet3,
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
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#83184d] group-hover:text-[#721240] transition"
                >
                  {t.services.virtualNumbers.learnMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHY CHOOSE OUR VOICE SOLUTIONS (CONSTELLATION CARDS LAYOUT)    */}
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
      {/* SECTION 4: HOW IT WORKS (CONNECTING EVERY CALL INTELLIGENT ROUTING)       */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.howItWorksBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.howItWorksTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.howItWorksSubtitle}
            </p>
          </div>

          {/* 4-Step Process Timeline */}
          <div className="relative pt-4">
            {/* Connecting Green Dashed Line (Visible on Desktop) */}
            <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] border-t-2 border-dashed border-[#698a22]/50 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {/* Step 1: Business */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-200 hover:border-[#698a22] shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between text-left space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#83184d]">
                    {t.steps.step1.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038]">
                    {t.steps.step1.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {t.steps.step1.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11.5px] font-semibold text-[#698a22]">
                    {t.steps.step1.subtext}
                  </span>
                </div>
              </div>

              {/* Step 2: iNet Global Network */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-200 hover:border-[#698a22] shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between text-left space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#fdf2f8] flex items-center justify-center p-2 shadow-xs">
                    <img
                      src={logoImg}
                      alt="iNet Global Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#83184d]">
                    {t.steps.step2.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038]">
                    {t.steps.step2.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {t.steps.step2.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11.5px] font-semibold text-[#698a22]">
                    {t.steps.step2.subtext}
                  </span>
                </div>
              </div>

              {/* Step 3: Global Carrier Routes */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-200 hover:border-[#698a22] shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between text-left space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
                    <Radio className="w-6 h-6" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#83184d]">
                    {t.steps.step3.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038]">
                    {t.steps.step3.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {t.steps.step3.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11.5px] font-semibold text-[#698a22]">
                    {t.steps.step3.subtext}
                  </span>
                </div>
              </div>

              {/* Step 4: Customer */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-200 hover:border-[#698a22] shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between text-left space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#83184d]">
                    {t.steps.step4.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#102038]">
                    {t.steps.step4.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {t.steps.step4.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11.5px] font-semibold text-[#698a22]">
                    {t.steps.step4.subtext}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CTA BANNER (LET'S BUILD YOUR VOICE NETWORK)                    */}
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

export default VoiceServices;

import React from "react";
import {
  ArrowRight,
  Globe2,
  MessageSquare,
  PhoneCall,
  PhoneOff,
  Wifi,
  Battery,
} from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface HeroProps {
  t: VirtualDidTranslation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative w-full bg-[#f8faf6] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.heroBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#102038] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.getStarted}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[15px] font-medium transition duration-150 shadow-xs active:scale-[0.98]"
              >
                {t.requestDemo}
              </a>
            </div>

            {/* Trust Footnote */}
            <div className="pt-2 flex items-center gap-2 text-[13px] text-slate-500 font-medium">
              <Globe2 className="w-4 h-4 text-[#698a22]" />
              <span>{t.heroFootnote}</span>
            </div>
          </div>

          {/* Right Column: Interactive DID Portal & Phone Mockup */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              {/* Main Desktop Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(16,32,56,0.12)] border border-slate-200/90 p-5 sm:p-6 text-left">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#698a22] flex items-center justify-center text-white text-xs font-bold">
                      ❖
                    </div>
                    <span className="font-bold text-[#102038] text-[15px]">
                      {t.dashboardPreview.title}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11.5px] font-semibold border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t.dashboardPreview.liveBadge}
                  </span>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex items-center gap-4 text-[12px] font-medium text-slate-500 pb-3 border-b border-slate-100 mb-4 overflow-x-auto">
                  <span className="text-[#698a22] font-semibold border-b-2 border-[#698a22] pb-1 cursor-pointer">
                    {t.dashboardPreview.tab1}
                  </span>
                  <span className="hover:text-slate-800 cursor-pointer">
                    {t.dashboardPreview.tab2}
                  </span>
                  <span className="hover:text-slate-800 cursor-pointer">
                    {t.dashboardPreview.tab3}
                  </span>
                  <span className="hover:text-slate-800 cursor-pointer">
                    {t.dashboardPreview.tab4}
                  </span>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {t.dashboardPreview.stat1Label}
                    </div>
                    <div className="text-xl font-bold text-[#102038] mt-0.5">
                      {t.dashboardPreview.stat1Val}
                    </div>
                  </div>
                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {t.dashboardPreview.stat2Label}
                    </div>
                    <div className="text-xl font-bold text-[#102038] mt-0.5">
                      {t.dashboardPreview.stat2Val}
                    </div>
                  </div>
                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {t.dashboardPreview.stat3Label}
                    </div>
                    <div className="text-xl font-bold text-[#102038] mt-0.5">
                      {t.dashboardPreview.stat3Val}
                    </div>
                  </div>
                </div>

                {/* Numbers Table Preview */}
                <div className="space-y-2">
                  <div className="text-[12px] font-bold text-[#102038] mb-2">
                    {t.dashboardPreview.tableTitle}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[12.5px] p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                      <span className="font-mono font-medium text-[#102038]">
                        +1 212 555 0198
                      </span>
                      <span className="text-slate-500 text-[11.5px]">
                        United States
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12.5px] p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                      <span className="font-mono font-medium text-[#102038]">
                        +44 20 7946 0912
                      </span>
                      <span className="text-slate-500 text-[11.5px]">
                        United Kingdom
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12.5px] p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                      <span className="font-mono font-medium text-[#102038]">
                        +65 6812 4500
                      </span>
                      <span className="text-slate-500 text-[11.5px]">
                        Singapore
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live SMS Notification Pill */}
              <div className="absolute -bottom-5 left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/90 flex items-start gap-3 max-w-[280px] z-20 animate-bounce-subtle text-left">
                <div className="w-8 h-8 rounded-lg bg-[#698a22]/15 flex items-center justify-center text-[#698a22] shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#102038]">
                    {t.dashboardPreview.smsNotificationTitle}
                  </div>
                  <div className="text-[11px] text-slate-600 leading-snug mt-0.5">
                    {t.dashboardPreview.smsNotificationBody}
                  </div>
                </div>
              </div>

              {/* Realistic iPhone Hardware Mockup Overlay on Right */}
              <div className="absolute -right-4 sm:-right-8 top-10 sm:top-8 w-[215px] sm:w-[235px] bg-[#0c1422] rounded-[44px] p-2.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border-[3px] border-slate-700/90 z-30">
                {/* Inner Screen */}
                <div className="w-full bg-[#132238] rounded-[36px] overflow-hidden flex flex-col justify-between h-[360px] sm:h-[390px] border border-slate-800/80 text-white p-3.5 relative">
                  {/* Status Bar & Dynamic Island */}
                  <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300 px-1 pt-0.5">
                    <span>9:41</span>
                    <div className="w-14 h-3.5 bg-black rounded-full mx-auto -mt-0.5 flex items-center justify-end pr-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#1c1c1e]" />
                    </div>
                    <div className="flex items-center gap-1 text-slate-300">
                      <Wifi className="w-2.5 h-2.5" />
                      <Battery className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Call Screen UI */}
                  <div className="text-center space-y-2 py-3 my-auto">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      {t.dashboardPreview.phoneIncomingText}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 mx-auto flex items-center justify-center text-base font-extrabold text-slate-100 shadow-md">
                      JD
                    </div>
                    <div>
                      <div className="font-extrabold text-[15px] text-white tracking-tight">
                        {t.dashboardPreview.phoneCaller}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {t.dashboardPreview.phoneDid}
                      </div>
                    </div>

                    {/* Action Call Buttons */}
                    <div className="flex items-center justify-center gap-6 pt-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-full bg-rose-600 hover:bg-rose-700 flex items-center justify-center text-white shadow-lg shadow-rose-900/40 cursor-pointer transition">
                          <PhoneOff className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-900/40 animate-pulse cursor-pointer transition">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="w-20 h-1 bg-slate-600/80 rounded-full mx-auto mt-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

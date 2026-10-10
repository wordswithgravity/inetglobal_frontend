import React from "react";
import { ArrowRight, MessageSquare, BarChart2 } from "lucide-react";
import globeImg from "../../assets/globe.png";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface HeroProps {
  t: WholesaleMessageTranslation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative w-full bg-[#EEF2EB] overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
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
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#102038] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-slate-600 leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.talkToExpert}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[15px] font-medium transition duration-150 active:scale-[0.98]"
              >
                {t.exploreCapabilities}
              </a>
            </div>

            {/* Bottom 3 Quick Highlights */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-[14px] sm:text-[15px] font-bold text-[#102038]">
                  {t.stats.routing}
                </div>
                <div className="text-[12px] sm:text-[13px] text-slate-500 mt-0.5">
                  {t.stats.routingLabel}
                </div>
              </div>
              <div>
                <div className="text-[14px] sm:text-[15px] font-bold text-[#102038]">
                  {t.stats.traffic}
                </div>
                <div className="text-[12px] sm:text-[13px] text-slate-500 mt-0.5">
                  {t.stats.trafficLabel}
                </div>
              </div>
              <div>
                <div className="text-[14px] sm:text-[15px] font-bold text-[#102038]">
                  {t.stats.insights}
                </div>
                <div className="text-[12px] sm:text-[13px] text-slate-500 mt-0.5">
                  {t.stats.insightsLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Globe & Interactive Badges */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-6 lg:py-4 z-10">
            <div className="relative w-full max-w-[560px] sm:max-w-[660px] lg:max-w-[740px] xl:max-w-[800px] flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[580px]">
              {/* Background Ambient Glow */}
              <div className="absolute w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] rounded-full bg-[#dbe8d2]/90 blur-3xl -z-10" />

              {/* Large Network Globe */}
              <div className="relative w-full flex items-center justify-center select-none">
                <img
                  src={globeImg}
                  alt="Global Wholesale SMS Network"
                  className="w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[780px] xl:max-w-[860px] h-auto object-contain scale-110 sm:scale-120 lg:scale-130 xl:scale-135 transition-transform duration-300"
                />
              </div>

              {/* Floating Badge 1: Top Right (A2P connectivity) */}
              <div className="absolute top-6 sm:top-10 -right-2 sm:-right-6 lg:-right-8 bg-white/95 backdrop-blur-xs rounded-2xl py-2.5 sm:py-3 px-4 sm:px-5 shadow-xl border border-gray-100 flex items-center gap-3 z-20 transform hover:scale-105 transition duration-200 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#fdf2f8] text-[#83184d] flex items-center justify-center shrink-0 shadow-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="leading-tight pr-1">
                  <div className="text-[14px] sm:text-[15px] font-bold text-[#102038]">
                    {t.heroLiveBadge1.title}
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-slate-500 font-medium">
                    {t.heroLiveBadge1.label}
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left (Visibility at every step) */}
              <div className="absolute bottom-6 sm:bottom-10 -left-2 sm:-left-6 lg:-left-8 bg-white/95 backdrop-blur-xs rounded-2xl py-2.5 sm:py-3 px-4 sm:px-5 shadow-xl border border-gray-100 flex items-center gap-3 z-20 transform hover:scale-105 transition duration-200 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#edf4e8] text-[#698a22] flex items-center justify-center shrink-0 shadow-xs">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div className="leading-tight pr-1">
                  <div className="text-[14px] sm:text-[15px] font-bold text-[#102038]">
                    {t.heroLiveBadge2.title}
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-slate-500 font-medium">
                    {t.heroLiveBadge2.sub}
                  </div>
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

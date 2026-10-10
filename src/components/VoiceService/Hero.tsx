import React from "react";
import { ArrowRight, PhoneCall, Check } from "lucide-react";
import globeImg from "../../assets/globe.png";
import type { WholesaleVoiceTranslation } from "../../data/wholesaleVoiceTranslations";

interface HeroProps {
  t: WholesaleVoiceTranslation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#EEF2EB] pt-8 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left relative z-20">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.heroBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-bold text-[#102038] tracking-tight leading-[1.12]">
              {t.heroTitle}
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#4e5e70] leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.talkToExpert}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[14.5px] sm:text-[16px] font-medium transition duration-150 active:scale-[0.98]"
              >
                {t.exploreCapabilities}
              </a>
            </div>

            {/* Bottom 3 Metrics */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 sm:gap-8 border-t border-gray-200/80 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#102038]">
                  {t.stats.countries}
                </div>
                <div className="text-[12px] sm:text-[13px] text-slate-500 font-medium">
                  {t.stats.countriesLabel}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#102038]">
                  {t.stats.availability}
                </div>
                <div className="text-[12px] sm:text-[13px] text-slate-500 font-medium">
                  {t.stats.availabilityLabel}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#102038]">
                  {t.stats.operations}
                </div>
                <div className="text-[12px] sm:text-[13px] text-slate-500 font-medium">
                  {t.stats.operationsLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Right Graphic Column: 3D Network Globe with 2 Floating Live Status Badges */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-6 lg:py-4 z-10">
            <div className="relative w-full max-w-[560px] sm:max-w-[660px] lg:max-w-[740px] xl:max-w-[800px] flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[580px]">
              {/* Background Ambient Glow */}
              <div className="absolute w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] rounded-full bg-[#dbe8d2]/90 blur-3xl -z-10" />

              {/* Large Network Globe */}
              <div className="relative w-full flex items-center justify-center select-none">
                <img
                  src={globeImg}
                  alt="Global Voice Network"
                  className="w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[780px] xl:max-w-[860px] h-auto object-contain scale-110 sm:scale-120 lg:scale-130 xl:scale-135 transition-transform duration-300"
                />
              </div>

              {/* Floating Badge 1: Top Right (12,480 live calls routed) */}
              <div className="absolute top-6 sm:top-10 -right-2 sm:-right-6 lg:-right-8 bg-white/95 backdrop-blur-xs rounded-2xl py-2.5 sm:py-3 px-4 sm:px-5 shadow-xl border border-gray-100 flex items-center gap-3 z-20 text-left transition hover:shadow-2xl hover:-translate-y-0.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#83184d] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <PhoneCall className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="leading-tight pr-1">
                  <div className="text-[15px] sm:text-[17px] font-bold text-[#102038]">
                    {t.heroLiveBadge1.count}
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-slate-500 font-medium">
                    {t.heroLiveBadge1.label}
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left (Best route selected • 43 ms • HD quality) */}
              <div className="absolute bottom-6 sm:bottom-10 -left-2 sm:-left-6 lg:-left-8 bg-white/95 backdrop-blur-xs rounded-2xl py-2.5 sm:py-3 px-4 sm:px-5 shadow-xl border border-gray-100 flex items-center gap-3 z-20 text-left transition hover:shadow-2xl hover:-translate-y-0.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="leading-tight pr-1">
                  <div className="text-[13px] sm:text-[15px] font-bold text-[#102038]">
                    {t.heroLiveBadge2.title}
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-slate-500 font-medium flex items-center gap-1.5 pt-0.5">
                    <span>{t.heroLiveBadge2.latency}</span>
                    <span>•</span>
                    <span className="text-[#698a22] font-semibold">
                      {t.heroLiveBadge2.quality}
                    </span>
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

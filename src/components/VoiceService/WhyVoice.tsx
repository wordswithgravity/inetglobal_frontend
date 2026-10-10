import React from "react";
import { Volume2, Globe, Sliders, TrendingUp } from "lucide-react";
import type { WholesaleVoiceTranslation } from "../../data/wholesaleVoiceTranslations";

interface WhyVoiceProps {
  t: WholesaleVoiceTranslation;
}

export const WhyVoice: React.FC<WhyVoiceProps> = ({ t }) => {
  const icons = [
    <div className="w-12 h-12 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
      <Volume2 className="w-6 h-6" />
    </div>,
    <div className="w-12 h-12 rounded-full bg-[#fdf2f8] flex items-center justify-center text-[#83184d]">
      <Globe className="w-6 h-6" />
    </div>,
    <div className="w-12 h-12 rounded-full bg-[#edf4e8] flex items-center justify-center text-[#698a22]">
      <Sliders className="w-6 h-6" />
    </div>,
    <div className="w-12 h-12 rounded-full bg-[#fdf2f8] flex items-center justify-center text-[#83184d]">
      <TrendingUp className="w-6 h-6" />
    </div>,
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.whyBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.whyTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.whySubtitle1}
            </p>
          </div>

          <div className="max-w-sm">
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 leading-relaxed">
              {t.whySubtitle2}
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {t.whyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[26px] p-7 border border-gray-200 hover:border-[#698a22] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between text-left space-y-6 group"
            >
              <div className="space-y-4">
                {icons[idx % icons.length]}

                <h3 className="text-xl font-bold text-[#102038] tracking-tight">
                  {card.title}
                </h3>

                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <span className="text-[12px] font-semibold text-[#83184d] group-hover:text-[#698a22] transition-colors">
                  {card.footer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVoice;

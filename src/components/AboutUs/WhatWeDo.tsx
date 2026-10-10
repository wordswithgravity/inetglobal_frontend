import React from "react";
import { Phone, MessageSquare, Globe, Headphones, Check } from "lucide-react";
import type { AboutUsTranslation } from "../../data/aboutUsTranslations";

interface WhatWeDoProps {
  t: AboutUsTranslation;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ t }) => {
  const pillarIcons = [
    <Phone className="w-6 h-6 text-[#698a22]" />,
    <MessageSquare className="w-6 h-6 text-[#83184d]" />,
    <Globe className="w-6 h-6 text-[#698a22]" />,
    <Headphones className="w-6 h-6 text-[#83184d]" />,
  ];

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.whatWeDoBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
            {t.whatWeDoTitle}
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.whatWeDoSubtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {t.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF2EB] flex items-center justify-center">
                  {pillarIcons[idx % pillarIcons.length]}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#102038]">
                  {pillar.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[13px] sm:text-[13.5px] text-slate-700 font-medium">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

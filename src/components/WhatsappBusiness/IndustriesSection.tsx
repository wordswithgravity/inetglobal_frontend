import React from "react";
import {
  Landmark,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Luggage,
} from "lucide-react";
import type { WhatsappBusinessTranslation } from "../../data/whatsappBusinessTranslations";

interface IndustriesSectionProps {
  t: WhatsappBusinessTranslation;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ t }) => {
  const industryIcons = [
    <Landmark className="w-5 h-5 text-slate-700" />,
    <ShoppingCart className="w-5 h-5 text-slate-700" />,
    <HeartPulse className="w-5 h-5 text-slate-700" />,
    <GraduationCap className="w-5 h-5 text-slate-700" />,
    <Luggage className="w-5 h-5 text-slate-700" />,
  ];

  return (
    <section className="w-full bg-[#f8faf6] py-16 sm:py-20 lg:py-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.industriesBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.industriesTitle}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[16px] text-slate-600">
            {t.industriesSubtitle}
          </p>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition duration-200 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {industryIcons[idx % industryIcons.length]}
                </div>

                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#102038] mb-2">
                  {ind.title}
                </h3>

                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

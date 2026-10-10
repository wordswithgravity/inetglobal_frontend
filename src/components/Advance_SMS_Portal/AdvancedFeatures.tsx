import React from "react";
import {
  Megaphone,
  MessageSquare,
  Key,
  Hash,
  Radio,
  BarChart3,
} from "lucide-react";
import type { OtpSmsTranslation } from "../../data/otpSmsTranslations";

interface AdvancedFeaturesProps {
  t: OtpSmsTranslation;
}

export const AdvancedFeatures: React.FC<AdvancedFeaturesProps> = ({ t }) => {
  const featureIcons = [
    <Megaphone className="w-5 h-5 text-[#698a22]" />,
    <MessageSquare className="w-5 h-5 text-[#698a22]" />,
    <Key className="w-5 h-5 text-[#698a22]" />,
    <Hash className="w-5 h-5 text-[#698a22]" />,
    <Radio className="w-5 h-5 text-[#698a22]" />,
    <BarChart3 className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-20 lg:py-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.capabilitiesBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.capabilitiesTitle}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[16px] text-slate-600">
            {t.capabilitiesSubtitle}
          </p>
        </div>

        {/* 6 Cards Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition duration-200 text-left flex flex-col justify-start group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#edf4e8] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {featureIcons[idx % featureIcons.length]}
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#102038] mb-2.5">
                {item.title}
              </h3>
              <p className="text-[13.5px] text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;

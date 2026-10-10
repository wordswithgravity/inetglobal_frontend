import React from "react";
import { BarChart3, MessageSquare, Zap, Lock, Share2 } from "lucide-react";
import type { OmnichannelTranslation } from "../../data/omnichannelTranslations";

interface ServicesProvideProps {
  t: OmnichannelTranslation;
}

export const ServicesProvide: React.FC<ServicesProvideProps> = ({ t }) => {
  const icons = [
    <BarChart3 className="w-5 h-5 text-white" />,
    <MessageSquare className="w-5 h-5 text-white" />,
    <Zap className="w-5 h-5 text-white" />,
    <Lock className="w-5 h-5 text-white" />,
    <Share2 className="w-5 h-5 text-white" />,
  ];

  return (
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
  );
};

export default ServicesProvide;

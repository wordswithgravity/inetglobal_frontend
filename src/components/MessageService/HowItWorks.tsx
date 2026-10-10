import React from "react";
import { Smartphone, GitMerge, BarChart2, ArrowRight } from "lucide-react";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface HowItWorksProps {
  t: WholesaleMessageTranslation;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  const stepIcons = [
    <Smartphone className="w-5 h-5 text-[#698a22]" />,
    <GitMerge className="w-5 h-5 text-[#83184d]" />,
    <BarChart2 className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.howItWorksBadge}
            </span>
            <span className="w-5 h-[2px] bg-[#698a22]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[16px] text-slate-600">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative items-stretch">
          {t.howItWorksSteps.map((stepItem, idx) => {
            const isHighlight = idx === 1;
            return (
              <div key={idx} className="relative flex flex-col">
                <div
                  className={`h-full rounded-2xl p-7 sm:p-8 flex flex-col justify-between text-left transition duration-200 ${
                    isHighlight
                      ? "bg-white border-2 border-[#83184d]/80 shadow-lg shadow-[#83184d]/5"
                      : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Header Row: Icon + Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isHighlight ? "bg-[#fdf2f8]" : "bg-[#edf4e8]"
                        }`}
                      >
                        {stepIcons[idx % stepIcons.length]}
                      </div>
                      <span
                        className={`text-[18px] sm:text-[20px] font-mono font-bold ${
                          isHighlight ? "text-[#83184d]" : "text-[#698a22]"
                        }`}
                      >
                        {stepItem.step}
                      </span>
                    </div>

                    <h3 className="text-[18px] sm:text-[19px] font-bold text-[#102038] mb-3">
                      {stepItem.title}
                    </h3>

                    <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span
                      className={`text-[12.5px] sm:text-[13px] font-semibold ${
                        isHighlight ? "text-[#83184d]" : "text-[#698a22]"
                      }`}
                    >
                      {stepItem.note}
                    </span>
                  </div>
                </div>

                {/* Connecting Arrow for Desktop */}
                {idx < t.howItWorksSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

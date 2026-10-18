import React from "react";
import { ArrowRight } from "lucide-react";
import type { WhatsappBusinessTranslation } from "../../data/whatsappBusinessTranslations";

interface HowItWorksProps {
  t: WhatsappBusinessTranslation;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.howItWorksBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.howItWorksTitle}
          </h2>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {t.howItWorksSteps.map((stepItem, idx) => (
            <div key={idx} className="relative flex flex-col text-left group">
              {/* Step Circle & Connector */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-[#edf4e8] text-[#698a22] font-mono font-bold text-[14px] flex items-center justify-center border border-[#d8e8ce] group-hover:bg-[#698a22] group-hover:text-white transition-colors duration-200">
                  {stepItem.step}
                </div>

                {/* Arrow to next step (hidden on mobile / last item) */}
                {idx < t.howItWorksSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 pr-2" />
                )}
              </div>

              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#102038] mb-2.5">
                {stepItem.title}
              </h3>

              <p className="text-[13.5px] text-slate-600 leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from "react";
import { ArrowRight } from "lucide-react";
import type { OmnichannelTranslation } from "../../data/omnichannelTranslations";

interface OmnichannelCtaProps {
  t: OmnichannelTranslation;
}

export const OmnichannelCta: React.FC<OmnichannelCtaProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft decorative background circles */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#e1ebd9]/80 blur-3xl -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#fcedf5]/80 blur-3xl -z-0" />

      <div className="max-w-[1120px] mx-auto relative z-10">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 lg:p-16 text-center shadow-sm border border-gray-100 space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.ctaBadge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#102038] tracking-tight leading-tight max-w-3xl mx-auto">
            {t.ctaTitle}
          </h2>

          <p className="text-[14.5px] sm:text-[16.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
            >
              {t.getStarted}
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[14.5px] sm:text-[16px] font-medium transition duration-150 active:scale-[0.98]"
            >
              {t.contactUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelCta;

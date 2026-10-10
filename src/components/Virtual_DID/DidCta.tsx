import React from "react";
import { ArrowRight, ShieldCheck, Zap, Globe2 } from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface DidCtaProps {
  t: VirtualDidTranslation;
}

export const DidCta: React.FC<DidCtaProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-white px-6 py-14 sm:px-12 sm:py-20 text-center text-[#102038] shadow-xl border border-slate-200/90">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f7f0] border border-[#698a22]/25 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#698a22]" />
              <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.ctaBadge}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.ctaTitle}
            </h2>

            {/* Description */}
            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-semibold transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.getStarted}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-slate-300 hover:border-[#698a22] text-[15px] font-semibold transition duration-150 shadow-xs active:scale-[0.98]"
              >
                {t.contactUs}
              </a>
            </div>

            {/* Small trust indicators */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center">
              <div className="flex items-center sm:justify-center gap-2 text-[13px] text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#698a22]" />
                <span>Enterprise Carrier SLA</span>
              </div>
              <div className="flex items-center sm:justify-center gap-2 text-[13px] text-slate-700 font-medium">
                <Zap className="w-4 h-4 text-[#698a22]" />
                <span>Instant DID Provisioning</span>
              </div>
              <div className="flex items-center sm:justify-center gap-2 text-[13px] text-slate-700 font-medium">
                <Globe2 className="w-4 h-4 text-[#698a22]" />
                <span>Coverage Across 100+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DidCta;

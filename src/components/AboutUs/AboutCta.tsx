import React from "react";
import { ArrowRight, ShieldCheck, Headphones } from "lucide-react";
import type { AboutUsTranslation } from "../../data/aboutUsTranslations";

interface AboutCtaProps {
  t: AboutUsTranslation;
}

export const AboutCta: React.FC<AboutCtaProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-14 lg:p-16 border border-slate-200/90 shadow-xl text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#102038] tracking-tight leading-tight">
              {t.ctaTitle}
            </h2>
            <p className="text-[15px] sm:text-[17px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-semibold transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
            >
              <span>{t.ctaPrimaryBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/voice"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#102038] hover:bg-[#192f50] text-white text-[15px] font-semibold transition duration-150 shadow-md active:scale-[0.98]"
            >
              <span>{t.ctaSecondaryBtn}</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-[13px] text-slate-500 font-medium border-t border-slate-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#698a22]" />
              <span>99.99% Guaranteed SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#698a22]" />
              <span>24/7/365 Dedicated NOC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;

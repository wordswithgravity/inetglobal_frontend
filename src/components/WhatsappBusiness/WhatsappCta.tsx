import React from "react";
import { ArrowRight, } from "lucide-react";
import ladyInPhoneImg from "../../assets/twopeople.png";
import type { WhatsappBusinessTranslation } from "../../data/whatsappBusinessTranslations";

interface WhatsappCtaProps {
  t: WhatsappBusinessTranslation;
}

export const WhatsappCta: React.FC<WhatsappCtaProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#f1f8ed] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="bg-[#f1f8ed] p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.ctaBadge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
                {t.ctaTitle}
              </h2>

              <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl">
                {t.ctaSubtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
                >
                  {t.talkToExpert}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[14.5px] sm:text-[16px] font-medium transition duration-150 active:scale-[0.98]"
                >
                  {t.contactUs}
                </a>

                <div className="flex items-center gap-1.5 text-[12.5px] text-slate-500 w-full sm:w-auto pt-1 sm:pt-0">
                  <span className="w-2 h-2 rounded-full bg-[#698a22]" />
                  <span>{t.ctaFootnote}</span>
                </div>
              </div>
            </div>

            {/* Right Illustration Artwork */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[660px] flex items-center justify-center">
                <img
                  src={ladyInPhoneImg}
                  alt="WhatsApp Business Messaging"
                  className="w-full h-auto object-contain select-none transform hover:scale-[1.02] transition-transform duration-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappCta;

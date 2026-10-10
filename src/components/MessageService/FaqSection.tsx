import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface FaqSectionProps {
  t: WholesaleMessageTranslation;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-[#f8faf6] py-16 sm:py-20 lg:py-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.faqBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.faqTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.faqSubtitle}
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {t.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 sm:py-6 flex items-center justify-between gap-4 text-left transition-colors hover:bg-slate-50/50"
                  >
                    <span className="text-[16px] sm:text-[17px] font-bold text-[#102038]">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#fdf2f8] text-[#83184d]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-left">
                      <p className="text-[14px] sm:text-[14.5px] text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

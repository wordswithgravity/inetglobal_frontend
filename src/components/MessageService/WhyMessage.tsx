import React from "react";
import { Globe, GitMerge, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface WhyMessageProps {
  t: WholesaleMessageTranslation;
}

export const WhyMessage: React.FC<WhyMessageProps> = ({ t }) => {
  const icons = [
    <Globe className="w-5 h-5 text-[#698a22]" />,
    <GitMerge className="w-5 h-5 text-[#83184d]" />,
    <BarChart3 className="w-5 h-5 text-[#698a22]" />,
    <ShieldCheck className="w-5 h-5 text-[#83184d]" />,
  ];

  const iconBgs = [
    "bg-[#edf4e8]",
    "bg-[#fdf2f8]",
    "bg-[#edf4e8]",
    "bg-[#fdf2f8]",
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.whyBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.whyTitle}
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600">
              {t.whySubtitle1}
            </p>
          </div>

          <div className="max-w-sm lg:text-right">
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 leading-relaxed">
              {t.whySubtitle2}
            </p>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                <div
                  className={`w-11 h-11 rounded-xl ${iconBgs[idx % iconBgs.length]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#102038] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[12.5px] sm:text-[13px] font-semibold text-[#83184d] group-hover:text-[#698a22] transition-colors">
                <span>{card.footer}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMessage;

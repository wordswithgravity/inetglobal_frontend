import React from "react";
import {
  Package,
  Calendar,
  Headphones,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import type { WhatsappBusinessTranslation } from "../../data/whatsappBusinessTranslations";

interface UseCasesSectionProps {
  t: WhatsappBusinessTranslation;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ t }) => {
  const useCaseIcons = [
    <Package className="w-5 h-5 text-[#8ec329]" />,
    <Calendar className="w-5 h-5 text-[#8ec329]" />,
    <Headphones className="w-5 h-5 text-[#8ec329]" />,
    <Sparkles className="w-5 h-5 text-[#8ec329]" />,
  ];

  return (
    <section className="w-full bg-[#0c192e] text-white py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#698a22]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#83184d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Live WhatsApp Action Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#8ec329]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#8ec329] uppercase">
                {t.useCasesBadge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
              {t.useCasesTitle}
            </h2>

            <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed max-w-xl">
              {t.useCasesSubtitle}
            </p>

            {/* Live Interactive WhatsApp Action Bubble Box */}
            <div className="pt-4">
              <div className="bg-[#132540] border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl space-y-4 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-[#8ec329] uppercase font-mono">
                    {t.interactiveCard.badge}
                  </span>
                </div>

                <p className="text-[14px] sm:text-[15px] text-slate-100 font-medium leading-relaxed italic">
                  {t.interactiveCard.message}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button className="px-4 py-2 rounded-lg bg-[#1c355a] hover:bg-[#234270] text-slate-200 border border-slate-600 text-[12.5px] font-medium transition active:scale-95">
                    {t.interactiveCard.btnConfirm}
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[#1c355a] hover:bg-[#234270] text-slate-200 border border-slate-600 text-[12.5px] font-medium transition active:scale-95">
                    {t.interactiveCard.btnReschedule}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Use Case Rows */}
          <div className="lg:col-span-6 space-y-8 text-left pt-2">
            {t.useCases.map((uc, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#142642] border border-slate-700/70 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {useCaseIcons[idx % useCaseIcons.length]}
                </div>
                <div>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-white mb-1.5">
                    {uc.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-300 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

import React from "react";
import {
  Users,
  User,
  ListOrdered,
  Contact,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface DialingModesSectionProps {
  t: DailerSolutionTranslation;
}

export const DialingModesSection: React.FC<DialingModesSectionProps> = ({
  t,
}) => {
  const modeIcons = [
    <Users className="w-5 h-5 text-[#698a22]" />,
    <User className="w-5 h-5 text-[#698a22]" />,
    <ListOrdered className="w-5 h-5 text-[#698a22]" />,
    <Contact className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.dialingModesBadge}
            </span>
            <span className="w-5 h-[2px] bg-[#698a22]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
            {t.dialingModesTitle}
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
            {t.dialingModesSubtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {t.dialingModes.map((mode, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Visual Flow Header Card */}
                <div className="bg-[#EEF2EB] rounded-2xl p-4 border border-slate-200/80 mb-5 flex items-center justify-around">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs">
                    {modeIcons[idx % modeIcons.length]}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <div className="w-10 h-10 rounded-xl bg-[#102038] text-white flex items-center justify-center shadow-xs">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-extrabold text-[#102038] mb-2 group-hover:text-[#698a22] transition-colors">
                  {mode.title}
                </h3>
                <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6">
                  {mode.desc}
                </p>
              </div>

              {/* Card Footer: Flow badge and category pill */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-[11.5px] font-semibold text-[#83184d] bg-[#fdf2f7] px-3 py-1.5 rounded-lg">
                  {mode.flow}
                </div>
                <div className="text-[10px] font-bold tracking-wider text-[#698a22] uppercase">
                  {mode.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DialingModesSection;

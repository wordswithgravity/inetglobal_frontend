import React from "react";
import {
  PhoneCall,
  Radio,
  Hash,
  ShieldAlert,
  BarChart2,
  GitBranch,
  Check,
  ArrowRight,
} from "lucide-react";
import type { WholesaleVoiceTranslation } from "../../data/wholesaleVoiceTranslations";

interface CoreCapabilitiesProps {
  t: WholesaleVoiceTranslation;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ t }) => {
  const icons = [
    <PhoneCall className="w-5 h-5 text-[#698a22]" />,
    <Radio className="w-5 h-5 text-[#698a22]" />,
    <Hash className="w-5 h-5 text-[#698a22]" />,
    <ShieldAlert className="w-5 h-5 text-[#698a22]" />,
    <BarChart2 className="w-5 h-5 text-[#698a22]" />,
    <GitBranch className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section
      id="capabilities"
      className="w-full bg-[#f4f7f2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header with CTA Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.capabilitiesBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.capabilitiesTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-[#4e5e70] leading-relaxed">
              {t.capabilitiesDesc}
            </p>
          </div>

          <div className="space-y-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[15.5px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
            >
              {t.designSolution}
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-slate-600">
              <Check className="w-3.5 h-3.5 text-[#698a22] stroke-[3]" />
              <span>{t.solutionNote}</span>
            </div>
          </div>
        </div>

        {/* 6 Capabilities Cards Grid (2 cols on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 items-stretch">
          {t.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-200/90 hover:border-[#698a22] shadow-xs hover:shadow-lg transition duration-200 flex flex-col justify-between text-left space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-full bg-[#edf4e8] flex items-center justify-center shrink-0">
                  {icons[idx % icons.length]}
                </div>

                <span className="text-[11.5px] sm:text-[12px] font-semibold text-[#83184d] bg-[#fdf2f8] px-3 py-1 rounded-full shrink-0">
                  {cap.tag}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#102038]">
                  {cap.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;

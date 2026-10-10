import React from "react";
import {
  ArrowRight,
  PenSquare,
  GitMerge,
  Globe2,
  LineChart,
} from "lucide-react";
import type { OtpSmsTranslation } from "../../data/otpSmsTranslations";

interface WorkflowSectionProps {
  t: OtpSmsTranslation;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ t }) => {
  const stepIcons = [
    <PenSquare className="w-5 h-5 text-[#83184d]" />,
    <GitMerge className="w-5 h-5 text-[#698a22]" />,
    <Globe2 className="w-5 h-5 text-[#102038]" />,
    <LineChart className="w-5 h-5 text-[#83184d]" />,
  ];

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.workflowBadge}
            </span>
            <span className="w-5 h-[2px] bg-[#698a22]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.workflowTitle}
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#EEF2EB] rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-[#698a22] tracking-wider font-mono">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-lg sm:text-xl font-bold text-[#102038] mb-2.5 group-hover:text-[#698a22] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connecting Arrow for desktop (between cards except last) */}
              {idx < t.workflowSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-slate-300 items-center justify-center text-slate-600 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;

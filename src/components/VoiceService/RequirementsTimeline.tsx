import React from "react";
import { ShieldCheck, Terminal, ArrowRight } from "lucide-react";
import type { WholesaleVoiceTranslation } from "../../data/wholesaleVoiceTranslations";

interface RequirementsTimelineProps {
  t: WholesaleVoiceTranslation;
}

export const RequirementsTimeline: React.FC<RequirementsTimelineProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#f4f7f2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.timelineBadge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.timelineTitle}
          </h2>

          <p className="text-[14.5px] sm:text-[16px] text-[#4e5e70] leading-relaxed">
            {t.timelineSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 4-Step Vertical Timeline */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {t.timelineSteps.map((step, idx) => {
              const isFirst = idx === 0;
              return (
                <div key={idx} className="flex items-start gap-4 sm:gap-5 text-left">
                  {/* Step Number Circle */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[14px] sm:text-[15px] font-bold shrink-0 ${
                      isFirst
                        ? "bg-[#83184d] text-white shadow-md shadow-[#83184d]/30 ring-4 ring-[#83184d]/15"
                        : "bg-gray-200 text-slate-700"
                    }`}
                  >
                    {step.step}
                  </div>

                  <div className="space-y-1 pt-0.5">
                    <h3 className="text-lg font-bold text-[#102038]">
                      {step.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Voice Connection Terminal Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#12243d] text-white rounded-[28px] p-6 sm:p-8 shadow-2xl border border-[#233a5d] space-y-6 text-left">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#233a5d]">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-5 h-5 text-[#a3e635]" />
                  <span className="text-[15px] sm:text-[16px] font-bold text-white tracking-wide">
                    {t.terminal.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-[#698a22]/25 border border-[#698a22]/40 text-[#a3e635] text-[11px] font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
                  <span>{t.terminal.readyBadge}</span>
                </div>
              </div>

              {/* Terminal Config Rows */}
              <div className="space-y-3 font-mono text-[13px] sm:text-[13.5px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-[#192f4e] border border-[#28466f] gap-1">
                  <span className="text-slate-400 font-sans text-[12.5px]">SIP endpoint</span>
                  <span className="text-[#a3e635] font-semibold">{t.terminal.sipEndpoint}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-[#192f4e] border border-[#28466f] gap-1">
                  <span className="text-slate-400 font-sans text-[12.5px]">Authentication</span>
                  <span className="text-white font-semibold">{t.terminal.auth}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-[#192f4e] border border-[#28466f] gap-1">
                  <span className="text-slate-400 font-sans text-[12.5px]">Media</span>
                  <span className="text-slate-200">{t.terminal.media}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-[#192f4e] border border-[#28466f] gap-1">
                  <span className="text-slate-400 font-sans text-[12.5px]">Failover</span>
                  <span className="text-slate-200">{t.terminal.failover}</span>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#233a5d]">
                <div className="flex items-center gap-2 text-[12.5px] text-slate-300 font-sans">
                  <ShieldCheck className="w-4 h-4 text-[#a3e635]" />
                  <span>{t.terminal.interopNote}</span>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[13px] font-semibold transition shadow-md shadow-[#83184d]/30"
                >
                  {t.terminal.viewApiDocs}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsTimeline;

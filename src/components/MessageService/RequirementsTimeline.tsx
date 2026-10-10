import React from "react";
import { Check, Terminal, ArrowRight } from "lucide-react";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface RequirementsTimelineProps {
  t: WholesaleMessageTranslation;
}

export const RequirementsTimeline: React.FC<RequirementsTimelineProps> = ({
  t,
}) => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: 4 Step Onboarding Roadmap */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.timelineBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.timelineTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.timelineSubtitle}
            </p>

            <div className="space-y-6 pt-4">
              {t.timelineSteps.map((stepItem, idx) => {
                const isActive = idx === 0;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 transition-transform ${
                        isActive
                          ? "bg-[#83184d] text-white shadow-md shadow-[#83184d]/30 ring-4 ring-[#83184d]/10"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {stepItem.step}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[16px] sm:text-[17px] font-bold text-[#102038]">
                        {stepItem.title}
                      </h3>
                      <p className="text-[13.5px] text-slate-600 leading-relaxed mt-0.5">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Sleek Integration Plan Spec Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg bg-[#0d1c33] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-700/60 text-left relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#83184d]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#698a22]/20 border border-[#698a22]/50 text-[#8ec329] flex items-center justify-center">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-[15px] sm:text-[16px] font-bold text-white">
                    {t.integrationPlan.title}
                  </span>
                </div>
                <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase text-[#8ec329] bg-[#698a22]/15 px-2.5 py-1 rounded-md border border-[#698a22]/30">
                  {t.integrationPlan.planBadge}
                </span>
              </div>

              {/* Specs Table */}
              <div className="py-4 space-y-3.5 text-[13.5px]">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Connection</span>
                  <span className="font-mono text-slate-200 font-medium">
                    {t.integrationPlan.connection}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Traffic</span>
                  <span className="font-mono text-slate-200 font-medium">
                    {t.integrationPlan.traffic}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Message formats</span>
                  <span className="font-mono text-slate-200 font-medium">
                    {t.integrationPlan.formats}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Feedback</span>
                  <span className="font-mono text-slate-200 font-medium">
                    {t.integrationPlan.feedback}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Sender setup</span>
                  <span className="font-mono text-slate-200 font-medium">
                    {t.integrationPlan.senderSetup}
                  </span>
                </div>
              </div>

              {/* Checklist items */}
              <div className="py-4 space-y-2.5">
                <div className="flex items-center gap-2.5 text-[13px] text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-[#698a22]/20 text-[#8ec329] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{t.integrationPlan.check1}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[13px] text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-[#698a22]/20 text-[#8ec329] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{t.integrationPlan.check2}</span>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-4 pt-5 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[12.5px] text-slate-400">
                  {t.integrationPlan.discussNote}
                </span>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[13px] font-medium transition duration-150 shadow-md shadow-[#83184d]/30 shrink-0"
                >
                  {t.integrationPlan.discussBtn}
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

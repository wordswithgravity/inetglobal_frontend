import React from "react";
import { Check } from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface MonitoringSectionProps {
  t: VirtualDidTranslation;
}

export const MonitoringSection: React.FC<MonitoringSectionProps> = ({ t }) => {
  const { monitoringStats } = t;

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.monitoringBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.monitoringTitle}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.monitoringSubtitle}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: DID Overview & Activity Chart Card */}
          <div className="lg:col-span-7 bg-[#EEF2EB] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md text-left space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
              <h3 className="text-lg font-bold text-[#102038]">
                {monitoringStats.title}
              </h3>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11.5px] font-semibold border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {monitoringStats.liveBadge}
              </span>
            </div>

            {/* 4 Stat Boxes in 2x2 grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">
                  {monitoringStats.stat1Label}
                </div>
                <div className="text-xl font-bold text-[#102038] mt-0.5">
                  {monitoringStats.stat1Val}
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-1">
                  {monitoringStats.stat1Sub}
                </div>
              </div>

              <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">
                  {monitoringStats.stat2Label}
                </div>
                <div className="text-xl font-bold text-[#102038] mt-0.5">
                  {monitoringStats.stat2Val}
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">
                  {monitoringStats.stat2Sub}
                </div>
              </div>

              <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">
                  {monitoringStats.stat3Label}
                </div>
                <div className="text-xl font-bold text-[#102038] mt-0.5">
                  {monitoringStats.stat3Val}
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">
                  {monitoringStats.stat3Sub}
                </div>
              </div>

              <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">
                  {monitoringStats.stat4Label}
                </div>
                <div className="text-xl font-bold text-[#102038] mt-0.5">
                  {monitoringStats.stat4Val}
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-1">
                  {monitoringStats.stat4Sub}
                </div>
              </div>
            </div>

            {/* Simulated Live SVG Multi-Line Chart */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-bold text-[#102038]">
                  {monitoringStats.chartTitle}
                </span>
                <span className="text-slate-400 font-medium">
                  {monitoringStats.chartTimeframe}
                </span>
              </div>

              <div className="relative h-40 w-full pt-4">
                {/* SVG Curves */}
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 400 120"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="greenGrad"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#698a22" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#698a22"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guide Lines */}
                  <line
                    x1="0"
                    y1="30"
                    x2="400"
                    y2="30"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="0"
                    y1="70"
                    x2="400"
                    y2="70"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="0"
                    y1="110"
                    x2="400"
                    y2="110"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />

                  {/* Green Curve (SMS volume) */}
                  <path
                    d="M 0 90 Q 60 40, 120 75 T 240 45 T 320 60 T 400 35"
                    fill="none"
                    stroke="#698a22"
                    strokeWidth="2.5"
                  />

                  {/* Maroon Curve (Incoming calls) */}
                  <path
                    d="M 0 100 Q 70 80, 140 90 T 260 55 T 340 70 T 400 45"
                    fill="none"
                    stroke="#83184d"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center gap-6 pt-2 border-t border-slate-100 text-[11.5px] font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#698a22]" />
                  <span className="text-slate-600">
                    {monitoringStats.legend1}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#83184d]" />
                  <span className="text-slate-600">
                    {monitoringStats.legend2}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Operational View Checklist */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h3 className="text-xl font-bold text-[#102038]">
              {t.operationalViewTitle}
            </h3>

            <ul className="space-y-3.5">
              {t.operationalViewItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] text-slate-700 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;

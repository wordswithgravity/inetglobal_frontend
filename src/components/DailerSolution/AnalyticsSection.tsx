import React, { useState } from "react";
import { Check, Download } from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface AnalyticsSectionProps {
  t: DailerSolutionTranslation;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<"hourly" | "daily" | "monthly">(
    "daily",
  );

  const { analyticsCard } = t;

  const chartData = [
    { day: "Mon", calls: 140, answered: 110, barHeight: "55%", lineY: 55 },
    { day: "Tue", calls: 210, answered: 185, barHeight: "75%", lineY: 35 },
    { day: "Wed", calls: 175, answered: 150, barHeight: "65%", lineY: 48 },
    { day: "Thu", calls: 240, answered: 215, barHeight: "85%", lineY: 25 },
    { day: "Fri", calls: 220, answered: 190, barHeight: "80%", lineY: 32 },
    { day: "Sat", calls: 290, answered: 260, barHeight: "95%", lineY: 15 },
    { day: "Sun", calls: 230, answered: 200, barHeight: "82%", lineY: 30 },
  ];

  return (
    <section className="w-full bg-[#ffff] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Title & 12 Checkmark Items */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.analyticsBadge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
                {t.analyticsTitle}
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                {t.analyticsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.analyticsFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[13.5px] text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[13.5px] text-slate-500 pt-2 border-t border-slate-200/60 leading-relaxed">
              {t.analyticsSubtext}
            </p>
          </div>

          {/* Right Column: Campaign Performance Analytics Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl text-left space-y-5">
            {/* Header with Title and Export Button */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-xl text-[#102038]">
                {analyticsCard.title}
              </h3>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 text-[12px] font-semibold hover:border-[#698a22] hover:text-[#698a22] transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#83184d]" />
                <span>{analyticsCard.exportBtn}</span>
              </button>
            </div>

            {/* Timeframe Tabs */}
            <div className="flex items-center justify-between text-[12px]">
              <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200/60">
                <button
                  type="button"
                  onClick={() => setActiveTab("hourly")}
                  className={`px-3 py-1 rounded-lg font-semibold transition cursor-pointer ${
                    activeTab === "hourly"
                      ? "bg-white text-[#83184d] shadow-2xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {analyticsCard.tabHourly}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("daily")}
                  className={`px-3 py-1 rounded-lg font-semibold transition cursor-pointer ${
                    activeTab === "daily"
                      ? "bg-white text-[#83184d] shadow-2xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {analyticsCard.tabDaily}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("monthly")}
                  className={`px-3 py-1 rounded-lg font-semibold transition cursor-pointer ${
                    activeTab === "monthly"
                      ? "bg-white text-[#83184d] shadow-2xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {analyticsCard.tabMonthly}
                </button>
              </div>

              <span className="text-slate-400 font-mono text-[11px]">
                {analyticsCard.timeframe}
              </span>
            </div>

            {/* 3 Metrics Summary */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#EEF2EB] p-3 rounded-2xl border border-slate-200/60">
                <div className="text-[11px] text-slate-500 font-medium">
                  {analyticsCard.stat1Label}
                </div>
                <div className="text-xl font-extrabold text-[#102038] mt-0.5">
                  {analyticsCard.stat1Val}
                </div>
              </div>
              <div className="bg-[#EEF2EB] p-3 rounded-2xl border border-slate-200/60">
                <div className="text-[11px] text-slate-500 font-medium">
                  {analyticsCard.stat2Label}
                </div>
                <div className="text-xl font-extrabold text-[#102038] mt-0.5">
                  {analyticsCard.stat2Val}
                </div>
              </div>
              <div className="bg-[#EEF2EB] p-3 rounded-2xl border border-slate-200/60">
                <div className="text-[11px] text-slate-500 font-medium">
                  {analyticsCard.stat3Label}
                </div>
                <div className="text-xl font-extrabold text-[#102038] mt-0.5">
                  {analyticsCard.stat3Val}
                </div>
              </div>
            </div>

            {/* Chart Legend */}
            <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-rose-200" />
                <span>{analyticsCard.legendCalls}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#698a22]" />
                <span>{analyticsCard.legendAnswered}</span>
              </div>
            </div>

            {/* Combined Bar & Line Chart Container */}
            <div className="relative h-44 bg-slate-50/70 rounded-2xl p-3 border border-slate-200/70 flex flex-col justify-end">
              {/* SVG Overlay Line Chart */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none p-3"
                viewBox="0 0 350 140"
                preserveAspectRatio="none"
              >
                <path
                  d="M 25 80 L 75 45 L 125 65 L 175 35 L 225 45 L 275 20 L 325 40"
                  fill="none"
                  stroke="#698a22"
                  strokeWidth="2.5"
                />
                {/* Dots */}
                <circle cx="25" cy="80" r="3.5" fill="#698a22" />
                <circle cx="75" cy="45" r="3.5" fill="#698a22" />
                <circle cx="125" cy="65" r="3.5" fill="#698a22" />
                <circle cx="175" cy="35" r="3.5" fill="#698a22" />
                <circle cx="225" cy="45" r="3.5" fill="#698a22" />
                <circle cx="275" cy="20" r="3.5" fill="#698a22" />
                <circle cx="325" cy="40" r="3.5" fill="#698a22" />
              </svg>

              {/* Bars Columns */}
              <div className="grid grid-cols-7 gap-2 h-32 items-end z-10">
                {chartData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center h-full justify-end"
                  >
                    <div
                      style={{ height: item.barHeight }}
                      className="w-5 sm:w-6 rounded-t-md bg-rose-200/70 hover:bg-rose-300 transition"
                    />
                    <span className="text-[10px] text-slate-500 font-medium mt-1">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call Disposition Mini Breakdown */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              <div className="text-[12px] font-bold text-[#102038]">
                {analyticsCard.dispositionTitle}
              </div>
              <div className="space-y-1.5 text-[12px]">
                <div className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium">Connected</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-slate-500">1,588</span>
                    <span className="font-bold text-[#102038] w-8 text-right">
                      86%
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    <span className="font-medium">No answer</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-slate-500">201</span>
                    <span className="font-bold text-[#102038] w-8 text-right">
                      11%
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#83184d]" />
                    <span className="font-medium">Follow-up</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-slate-500">53</span>
                    <span className="font-bold text-[#102038] w-8 text-right">
                      3%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic">
              * {analyticsCard.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;

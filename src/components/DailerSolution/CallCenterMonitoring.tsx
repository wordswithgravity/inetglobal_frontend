import React from "react";
import { Headphones, Mic, Users, ChevronDown } from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface CallCenterMonitoringProps {
  t: DailerSolutionTranslation;
}

export const CallCenterMonitoring: React.FC<CallCenterMonitoringProps> = ({
  t,
}) => {
  const {
    monitoringKpis,
    monitoringTable,
    supervisorTools,
    wallboardCard,
    supervisorToolsTitle,
    supervisorToolsSubtitle,
  } = t;

  return (
    <section className="w-full bg-[#fff] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.monitoringBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
              {t.monitoringTitle}
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.monitoringSubtitle}
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-[14.5px] font-bold text-[#102038] block">
              {t.monitoringLiveHeader}
            </span>
            <span className="text-[13px] text-slate-500">
              {t.monitoringLiveSub}
            </span>
          </div>
        </div>

        {/* Big Live Call Center Overview Dashboard Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl text-left space-y-6">
          {/* Card Sub-Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-[#102038]">
                {monitoringTable.title}
              </h3>
              <div className="flex items-center gap-2 text-[12px] text-slate-500 mt-1">
                <span className="flex items-center gap-1 font-semibold text-slate-700 cursor-pointer">
                  All campaigns <ChevronDown className="w-3 h-3" />
                </span>
                <span>•</span>
                <span>08 Oct 2026</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11.5px] font-semibold border border-emerald-200/60 self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live • Updated just now
            </span>
          </div>

          {/* 10 KPI Tiles in 2 Rows */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {monitoringKpis.map((kpi, idx) => (
              <div
                key={idx}
                className="bg-[#EEF2EB] rounded-2xl p-3.5 border border-slate-200/70 text-left"
              >
                <div className="text-[11px] text-slate-500 font-medium truncate">
                  {kpi.label}
                </div>
                <div
                  className={`text-xl font-extrabold mt-1 tracking-tight ${
                    kpi.danger ? "text-rose-600" : "text-[#102038]"
                  }`}
                >
                  {kpi.value}
                </div>
              </div>
            ))}
          </div>

          {/* Active Agents Table */}
          <div className="overflow-x-auto border border-slate-200/80 rounded-2xl">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-4">{monitoringTable.cols.agent}</th>
                  <th className="py-3 px-4">{monitoringTable.cols.campaign}</th>
                  <th className="py-3 px-4">{monitoringTable.cols.status}</th>
                  <th className="py-3 px-4">{monitoringTable.cols.duration}</th>
                  <th className="py-3 px-4">
                    {monitoringTable.cols.destination}
                  </th>
                  <th className="py-3 px-4 text-right">
                    {monitoringTable.cols.supervisor}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-[#f9fbf7] transition">
                  <td className="py-3 px-4 font-bold text-[#102038] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-[#102038] text-[10px] font-extrabold flex items-center justify-center">
                      AM
                    </span>
                    <span>Alex Morgan</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    Customer follow-up
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Connected
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-700">03:42</td>
                  <td className="py-3 px-4 text-slate-600">United Kingdom</td>
                  <td className="py-3 px-4 text-right">
                    <span className="text-[12px] font-bold text-[#83184d] hover:underline cursor-pointer">
                      Listen · Whisper · Barge-In
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#f9fbf7] transition">
                  <td className="py-3 px-4 font-bold text-[#102038] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-[#102038] text-[10px] font-extrabold flex items-center justify-center">
                      SC
                    </span>
                    <span>Sarah Chen</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">Sales outreach</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Connected
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-700">02:18</td>
                  <td className="py-3 px-4 text-slate-600">United States</td>
                  <td className="py-3 px-4 text-right">
                    <span className="text-[12px] font-bold text-[#83184d] hover:underline cursor-pointer">
                      Listen · Whisper · Barge-In
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#f9fbf7] transition">
                  <td className="py-3 px-4 font-bold text-[#102038] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-[#102038] text-[10px] font-extrabold flex items-center justify-center">
                      DR
                    </span>
                    <span>Daniel Reed</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">Renewals</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-lime-50 text-lime-800 border border-lime-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-600" />
                      Available
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-400">—</td>
                  <td className="py-3 px-4 text-slate-600">Germany</td>
                  <td className="py-3 px-4 text-right text-slate-400 text-[12px]">
                    Ready for next call
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11.5px] text-slate-500 italic">
            * {monitoringTable.note}
          </p>
        </div>

        {/* Supervisor Tools Section */}
        <div className="space-y-6 text-left">
          <div>
            <h3 className="text-2xl font-bold text-[#102038]">
              {supervisorToolsTitle}
            </h3>
            <p className="text-[14px] text-slate-500">
              {supervisorToolsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Tool 1: Listen */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#698a22]/50 shadow-sm transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fdf2f7] text-[#83184d] flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#102038]">
                {supervisorTools[0].title}
              </h4>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                {supervisorTools[0].desc}
              </p>
            </div>

            {/* Tool 2: Whisper */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#698a22]/50 shadow-sm transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fdf2f7] text-[#83184d] flex items-center justify-center">
                <Mic className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#102038]">
                {supervisorTools[1].title}
              </h4>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                {supervisorTools[1].desc}
              </p>
            </div>

            {/* Tool 3: Barge-In */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#698a22]/50 shadow-sm transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fdf2f7] text-[#83184d] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#102038]">
                {supervisorTools[2].title}
              </h4>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                {supervisorTools[2].desc}
              </p>
            </div>

            {/* Tool 4: Real-Time Wallboard (Dark Theme Card) */}
            <div className="bg-[#102038] text-white rounded-2xl p-6 border border-slate-800 shadow-md transition space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div>
                    <span className="text-xl font-black text-emerald-400">
                      {wallboardCard.stat1}
                    </span>
                    <span className="text-[10px] text-slate-400 block uppercase">
                      {wallboardCard.stat1Sub}
                    </span>
                  </div>
                  <div className="w-[1px] h-6 bg-slate-700" />
                  <div>
                    <span className="text-xl font-black text-emerald-400">
                      {wallboardCard.stat2}
                    </span>
                    <span className="text-[10px] text-slate-400 block uppercase">
                      {wallboardCard.stat2Sub}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {wallboardCard.title}
                </h4>
              </div>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                {wallboardCard.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallCenterMonitoring;

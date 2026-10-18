import React from "react";
import { Check, Radio, GitMerge, ArrowRight } from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface GlobalRoutesSectionProps {
  t: DailerSolutionTranslation;
}

export const GlobalRoutesSection: React.FC<GlobalRoutesSectionProps> = ({
  t,
}) => {
  const { routeControlCard, routesEngine } = t;

  return (
    <section className="w-full bg-[#102038] text-white py-16 sm:py-24 lg:py-28 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* Top 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Information & 10 Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.routesBadge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
                {t.routesTitle}
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-slate-300 leading-relaxed">
                {t.routesSubtitle}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                {t.routesFeaturesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.routesFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#698a22]/20 text-[#698a22] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[13.5px] text-slate-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Global Route Control Card & Rates Table */}
          <div className="lg:col-span-6 bg-[#162746] rounded-3xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl text-left space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
              <span className="font-bold text-white text-[15.5px]">
                {routeControlCard.title}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {routeControlCard.badge}
              </span>
            </div>

            {/* Smart Routing Flow Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              {/* Agent Call Box */}
              <div className="sm:col-span-3 bg-[#0d1b33] rounded-2xl p-3 text-center border border-slate-700 space-y-1">
                <div className="w-8 h-8 rounded-xl bg-[#698a22]/20 text-[#698a22] flex items-center justify-center mx-auto">
                  <Radio className="w-4 h-4" />
                </div>
                <div className="text-[11.5px] font-bold text-white">
                  {routeControlCard.agentCall}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex col-span-1 justify-center text-slate-500">
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Smart Routing Core */}
              <div className="sm:col-span-4 bg-[#83184d] text-white rounded-2xl p-3 text-center shadow-lg border border-rose-400/30 space-y-1">
                <GitMerge className="w-4 h-4 mx-auto text-rose-200" />
                <div className="text-[12px] font-bold">
                  {routeControlCard.smartRouting}
                </div>
                <div className="text-[9.5px] text-rose-100">
                  {routeControlCard.smartRoutingDesc}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex col-span-1 justify-center text-slate-500">
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Carrier Priorities List */}
              <div className="sm:col-span-3 space-y-1.5 text-[11px]">
                <div className="bg-[#0d1b33] p-1.5 rounded-xl border border-emerald-500/60 text-emerald-300 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{routeControlCard.carrier1}</span>
                </div>
                <div className="bg-[#0d1b33] p-1.5 rounded-xl border border-slate-700 text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>{routeControlCard.carrier2}</span>
                </div>
                <div className="bg-[#0d1b33] p-1.5 rounded-xl border border-slate-700 text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>{routeControlCard.carrier3}</span>
                </div>
              </div>
            </div>

            {/* Quality & Rates Mini Table */}
            <div className="overflow-x-auto border border-slate-700/80 rounded-2xl bg-[#0d1b33]">
              <table className="w-full text-left text-[12px]">
                <thead>
                  <tr className="border-b border-slate-800 text-[10.5px] text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-2.5 px-3">
                      {routeControlCard.tableDest}
                    </th>
                    <th className="py-2.5 px-3">
                      {routeControlCard.tableCarrier}
                    </th>
                    <th className="py-2.5 px-3">
                      {routeControlCard.tableQuality}
                    </th>
                    <th className="py-2.5 px-3 text-right">
                      {routeControlCard.tableRate}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-white">
                      +44 United Kingdom
                    </td>
                    <td className="py-2 px-3 text-slate-400">Carrier A</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">
                      98.6%
                    </td>
                    <td className="py-2 px-3 text-right font-mono text-slate-200">
                      $0.012
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-white">
                      +1 United States
                    </td>
                    <td className="py-2 px-3 text-slate-400">Carrier B</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">
                      99.1%
                    </td>
                    <td className="py-2 px-3 text-right font-mono text-slate-200">
                      $0.009
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-white">
                      +49 Germany
                    </td>
                    <td className="py-2 px-3 text-slate-400">Carrier C</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">
                      97.8%
                    </td>
                    <td className="py-2 px-3 text-right font-mono text-slate-200">
                      $0.015
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-white">
                      +91 India
                    </td>
                    <td className="py-2 px-3 text-slate-400">Carrier D</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">
                      98.2%
                    </td>
                    <td className="py-2 px-3 text-right font-mono text-slate-200">
                      $0.018
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              * {routeControlCard.note}
            </p>
          </div>
        </div>

        {/* Bottom Banner: Smart Routing Engine */}
        <div className="bg-[#162746]/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-xl">
            <h4 className="text-xl font-bold text-white">
              {routesEngine.title}
            </h4>
            <p className="text-[13.5px] text-slate-300 leading-relaxed">
              {routesEngine.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {routesEngine.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-[#0d1b33] border border-slate-700 text-slate-300 text-[12px] font-semibold hover:border-[#698a22] transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalRoutesSection;

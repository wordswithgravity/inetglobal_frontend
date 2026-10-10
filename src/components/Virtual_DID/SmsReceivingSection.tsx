import React from "react";
import { MessageSquare, Check } from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface SmsReceivingSectionProps {
  t: VirtualDidTranslation;
}

export const SmsReceivingSection: React.FC<SmsReceivingSectionProps> = ({
  t,
}) => {
  return (
    <section className="w-full bg-[#fffff] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.smsBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.smsTitle}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.smsSubtitle}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Use Cases & Sample SMS Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#698a22]" />
                <h3 className="text-lg font-bold text-[#102038]">
                  {t.smsPerfectTitle}
                </h3>
              </div>

              <ul className="space-y-3">
                {t.smsPerfectItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
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

            {/* Sample Received SMS Card */}
            <div className="bg-[#f0f6e9] rounded-2xl p-5 border border-[#698a22]/30 space-y-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#698a22]/15 text-[#698a22] text-[11px] font-bold">
                {t.sampleSms.badge}
              </span>
              <p className="text-[13.5px] text-[#102038] font-medium leading-snug">
                "{t.sampleSms.body}"
              </p>
              <div className="text-[11.5px] text-slate-500 pt-1">
                {t.sampleSms.meta}
              </div>
            </div>
          </div>

          {/* Right Column: SMS Dashboard Table & Monitoring Checklist */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-7 text-left space-y-6">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#102038] text-[16px]">
                  {t.smsDashboard.title}
                </span>
              </div>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11.5px] font-semibold border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t.smsDashboard.receivingBadge}
              </span>
            </div>

            {/* Stats Highlight */}
            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 flex items-center justify-between">
              <span className="text-[13px] font-medium text-slate-600">
                {t.smsDashboard.todayLabel}
              </span>
              <span className="text-lg font-bold text-[#698a22]">
                {t.smsDashboard.todayVal}
              </span>
            </div>

            {/* Mini SMS Log Table */}
            <div className="overflow-x-auto border border-slate-200/80 rounded-xl">
              <table className="w-full text-left border-collapse text-[12.5px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-2.5 px-3">{t.smsDashboard.colSender}</th>
                    <th className="py-2.5 px-3">{t.smsDashboard.colDid}</th>
                    <th className="py-2.5 px-3">{t.smsDashboard.colMessage}</th>
                    <th className="py-2.5 px-3 text-right">
                      {t.smsDashboard.colTime}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-[#f9fbf7]">
                    <td className="py-2.5 px-3 font-mono text-[#102038]">
                      +1 415 555 0132
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-600">
                      +1 212 555 0198
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 truncate max-w-[160px]">
                      Your appointment is confirmed...
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500 font-mono text-[11.5px]">
                      10:24
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f9fbf7]">
                    <td className="py-2.5 px-3 font-mono text-[#102038]">
                      +44 7700 900123
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-600">
                      +44 20 7946 0912
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 truncate max-w-[160px]">
                      Thanks, see you tomorrow!
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500 font-mono text-[11.5px]">
                      09:52
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f9fbf7]">
                    <td className="py-2.5 px-3 font-mono text-[#102038]">
                      +65 8123 4567
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-600">
                      +65 6812 4500
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 truncate max-w-[160px]">
                      Your service is now active.
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-500 font-mono text-[11.5px]">
                      08:30
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Monitor Checklist */}
            <div className="pt-2">
              <div className="text-[12.5px] font-bold text-[#102038] mb-3">
                {t.smsDashboard.monitorTitle}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {t.smsDashboard.monitorItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                      <Check className="w-2 h-2 stroke-[3]" />
                    </div>
                    <span className="text-[12px] text-slate-600 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmsReceivingSection;

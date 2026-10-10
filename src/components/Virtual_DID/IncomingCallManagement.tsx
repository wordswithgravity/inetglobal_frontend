import React from "react";
import { PhoneCall, GitMerge, Check, Phone, Clock, Users } from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface IncomingCallManagementProps {
  t: VirtualDidTranslation;
}

export const IncomingCallManagement: React.FC<IncomingCallManagementProps> = ({
  t,
}) => {
  return (
    <section className="w-full bg-[#ffff] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.callMgmtBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.callMgmtTitle}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.callMgmtSubtitle}
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 2 Sub-lists (Call Forwarding & Advanced Routing) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {/* Sub-col 1: Call Forwarding */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#698a22]/15 text-[#698a22] flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#102038]">
                  {t.forwardingTitle}
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 font-medium">
                {t.forwardingSubtitle}
              </p>
              <ul className="space-y-3 pt-1">
                {t.forwardingItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[13.5px] text-slate-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-col 2: Advanced Routing */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#83184d]/15 text-[#83184d] flex items-center justify-center">
                  <GitMerge className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#102038]">
                  {t.advancedRoutingTitle}
                </h3>
              </div>
              <p className="text-[12.5px] text-slate-500 font-medium">
                Intelligent rules:
              </p>
              <ul className="space-y-3 pt-1">
                {t.advancedRoutingItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#83184d]/15 text-[#83184d] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[13.5px] text-slate-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Smarter Call Journey Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-7 text-left space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="font-bold text-[#102038] text-[15.5px]">
                  {t.journeyCard.title}
                </h4>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11.5px] font-semibold border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t.journeyCard.liveBadge}
                </span>
              </div>

              {/* Journey Step 1 */}
              <div className="bg-[#f8faf6] rounded-xl p-3.5 border border-slate-200/80 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#698a22] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-medium text-slate-500">
                    {t.journeyCard.step1Title}
                  </div>
                  <div className="text-[14px] font-mono font-bold text-[#102038]">
                    {t.journeyCard.step1Val}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              <div className="flex justify-center -my-2">
                <div className="w-0.5 h-5 bg-[#698a22]/40" />
              </div>

              {/* Journey Step 2 */}
              <div className="bg-[#f8faf6] rounded-xl p-3.5 border border-slate-200/80 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#102038] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-medium text-slate-500">
                    {t.journeyCard.step2Title}
                  </div>
                  <div className="text-[13.5px] font-semibold text-[#102038]">
                    {t.journeyCard.step2Val}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              <div className="flex justify-center -my-2">
                <div className="w-0.5 h-5 bg-[#698a22]/40" />
              </div>

              {/* Journey Step 3 */}
              <div className="bg-[#f8faf6] rounded-xl p-3.5 border border-slate-200/80 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#83184d] text-white flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-medium text-slate-500">
                    {t.journeyCard.step3Title}
                  </div>
                  <div className="text-[13.5px] font-semibold text-[#102038]">
                    {t.journeyCard.step3Val}
                  </div>
                </div>
              </div>

              {/* Card Footer Subtext */}
              <div className="pt-2 text-center text-[12px] font-medium text-[#698a22] bg-[#f4f8ee] py-2 rounded-lg border border-[#698a22]/20">
                {t.journeyCard.footerText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomingCallManagement;

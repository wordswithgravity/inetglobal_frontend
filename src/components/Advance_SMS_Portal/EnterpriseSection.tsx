import React from "react";
import {
  Users,
  Wallet,
  Radio,
  CheckCircle2,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import type { OtpSmsTranslation } from "../../data/otpSmsTranslations";

interface EnterpriseSectionProps {
  t: OtpSmsTranslation;
}

export const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({ t }) => {
  const { card1, card2, card3 } = t.enterpriseCards;

  return (
    <section className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.enterpriseBadge}
            </span>
            <span className="w-5 h-[2px] bg-[#698a22]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.enterpriseTitle}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.enterpriseSubtitle}
          </p>
        </div>

        {/* 3 Interactive Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Workspace Access */}
          <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col p-6 sm:p-7 group">
            {/* Embedded Mini UI Preview */}
            <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 mb-6">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#83184d]/10 flex items-center justify-center text-[#83184d]">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-bold text-[#102038]">
                    {card1.header}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#698a22] bg-[#698a22]/10 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>

              {/* User rows */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#102038] text-white flex items-center justify-center text-[10px] font-bold">
                      AM
                    </div>
                    <span className="text-[12.5px] font-medium text-[#102038]">
                      {card1.user1Name}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                    {card1.user1Role}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#698a22] text-white flex items-center justify-center text-[10px] font-bold">
                      JL
                    </div>
                    <span className="text-[12.5px] font-medium text-[#102038]">
                      {card1.user2Name}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-lime-800 bg-lime-100/80 px-2 py-0.5 rounded-md">
                    {card1.user2Role}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-600 text-white flex items-center justify-center text-[10px] font-bold">
                      SK
                    </div>
                    <span className="text-[12.5px] font-medium text-[#102038]">
                      {card1.user3Name}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded-md">
                    {card1.user3Role}
                  </span>
                </div>
              </div>

              {/* Bottom protection tag */}
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-md border border-emerald-200/60">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{card1.protectionText}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#102038] mb-4 group-hover:text-[#698a22] transition-colors">
                  {card1.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {card1.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#698a22] mt-0.5 flex-shrink-0" />
                      <span className="text-[14px] text-slate-700 leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[11.5px] text-slate-600 italic border-t border-slate-100 pt-3">
                * {card1.note}
              </p>
            </div>
          </div>

          {/* Card 2: Account Wallet */}
          <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col p-6 sm:p-7 group">
            {/* Embedded Mini UI Preview */}
            <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 mb-6">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#698a22]/15 flex items-center justify-center text-[#698a22]">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-bold text-[#102038]">
                    {card2.header}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#83184d] bg-[#83184d]/10 px-2 py-0.5 rounded-full">
                  Prepaid
                </span>
              </div>

              {/* Amount Display */}
              <div className="bg-white p-3 rounded-lg border border-slate-200/70 mb-2.5">
                <div className="text-2xl font-bold text-[#102038] tracking-tight">
                  {card2.amount}
                </div>
                <div className="text-[11.5px] text-slate-600">{card2.sub}</div>
              </div>

              {/* 2 Stats */}
              <div className="grid grid-cols-2 gap-2 mb-2.5">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                  <div className="text-[11px] text-slate-600">
                    {card2.stat1Label}
                  </div>
                  <div className="text-[13px] font-bold text-[#102038]">
                    {card2.stat1Val}
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                  <div className="text-[11px] text-slate-600">
                    {card2.stat2Label}
                  </div>
                  <div className="text-[13px] font-bold text-emerald-600 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {card2.stat2Val}
                  </div>
                </div>
              </div>

              {/* Auto billing pill */}
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md">
                <span>{card2.pillText}</span>
                <span className="w-2 h-2 rounded-full bg-[#698a22] animate-pulse" />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#102038] mb-4 group-hover:text-[#698a22] transition-colors">
                  {card2.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {card2.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#698a22] mt-0.5 flex-shrink-0" />
                      <span className="text-[14px] text-slate-700 leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[11.5px] text-slate-600 italic border-t border-slate-100 pt-3">
                * {card2.note}
              </p>
            </div>
          </div>

          {/* Card 3: Pricing & Connectivity */}
          <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col p-6 sm:p-7 group">
            {/* Embedded Mini UI Preview */}
            <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 mb-6">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#102038]/10 flex items-center justify-center text-[#102038]">
                    <Radio className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-bold text-[#102038]">
                    {card3.header}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  Synced
                </span>
              </div>

              {/* Rate Rows */}
              <div className="space-y-2 mb-2.5">
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200/70 text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#102038]">
                      {card3.row1Country}
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      {card3.row1Type}
                    </span>
                  </div>
                  <span className="font-bold text-[#83184d]">
                    {card3.row1Rate}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200/70 text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#102038]">
                      {card3.row2Country}
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      {card3.row2Type}
                    </span>
                  </div>
                  <span className="font-bold text-[#83184d]">
                    {card3.row2Rate}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200/70 text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#102038]">
                      {card3.row3Country}
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      {card3.row3Type}
                    </span>
                  </div>
                  <span className="font-bold text-[#83184d]">
                    {card3.row3Rate}
                  </span>
                </div>
              </div>

              {/* Connectivity Pills */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center gap-1.5 bg-emerald-50 text-emerald-700 py-1.5 px-2 rounded-md text-[11px] font-semibold border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {card3.pill1}
                </div>
                <div className="flex items-center justify-center gap-1.5 bg-emerald-50 text-emerald-700 py-1.5 px-2 rounded-md text-[11px] font-semibold border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {card3.pill2}
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#102038] mb-4 group-hover:text-[#698a22] transition-colors">
                  {card3.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {card3.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#698a22] mt-0.5 flex-shrink-0" />
                      <span className="text-[14px] text-slate-700 leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[11.5px] text-slate-600 italic border-t border-slate-100 pt-3">
                * {card3.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;

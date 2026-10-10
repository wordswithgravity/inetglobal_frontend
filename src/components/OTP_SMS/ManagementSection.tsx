import React from "react";
import { Check } from "lucide-react";
import type { OtpSmsTranslation } from "../../data/otpSmsTranslations";

interface ManagementSectionProps {
  t: OtpSmsTranslation;
}

export const ManagementSection: React.FC<ManagementSectionProps> = ({ t }) => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Main Headline */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.managementBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.managementTitle}
          </h2>
        </div>

        {/* Split: Campaign UI Card (Left) + Platform Control (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Interactive Campaign Compose & 2-Way SMS UI */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl text-left space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[16px] sm:text-[17px] font-bold text-[#102038]">
                  {t.campaignCard.title}
                </span>
                <span className="text-[11px] font-semibold text-[#2c4e0b] bg-[#edf4e8] px-2.5 py-1 rounded-full border border-[#d8e8ce]">
                  {t.campaignCard.draftBadge}
                </span>
              </div>

              {/* 3 Step Tabs */}
              <div className="flex items-center gap-6 text-[12.5px] font-medium text-slate-500">
                <span className="text-[#83184d] font-bold border-b-2 border-[#83184d] pb-1">
                  {t.campaignCard.step1}
                </span>
                <span className="hover:text-slate-700 cursor-pointer">
                  {t.campaignCard.step2}
                </span>
                <span className="hover:text-slate-700 cursor-pointer">
                  {t.campaignCard.step3}
                </span>
              </div>

              {/* Form Row: Sender ID & Audience */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-[#EEF2EB] rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider">
                    {t.campaignCard.senderLabel}
                  </div>
                  <div className="text-[13.5px] font-bold text-[#102038] mt-0.5">
                    {t.campaignCard.senderVal}
                  </div>
                </div>
                <div className="bg-[#EEF2EB] rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider">
                    {t.campaignCard.audienceLabel}
                  </div>
                  <div className="text-[13px] font-bold text-[#102038] mt-0.5 truncate">
                    {t.campaignCard.audienceVal}
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div className="bg-[#EEF2EB] rounded-xl p-3.5 border border-slate-200/70 space-y-2">
                <div className="text-[10.5px] font-semibold text-slate-500 uppercase tracking-wider">
                  {t.campaignCard.messageLabel}
                </div>
                <p className="text-[13px] text-slate-800 leading-relaxed font-mono">
                  {t.campaignCard.messageText}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                  <span className="text-[#698a22] font-semibold">
                    {t.campaignCard.personalizedBadge}
                  </span>
                  <span>{t.campaignCard.charCount}</span>
                </div>
              </div>

              {/* Customer Replies / 2-way SMS */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#102038]">
                    {t.campaignCard.repliesTitle}
                  </span>
                  <span className="text-[10.5px] font-bold text-[#2c4e0b] bg-[#edf4e8] px-2 py-0.5 rounded-md">
                    {t.campaignCard.repliesBadge}
                  </span>
                </div>

                <div className="bg-[#EEF2EB] rounded-xl p-3 border border-slate-200/70 text-[12px] space-y-1">
                  <p className="text-slate-800">{t.campaignCard.inboundText}</p>
                  <p className="text-[10px] text-slate-400">
                    {t.campaignCard.inboundTime}
                  </p>
                </div>

                <div className="bg-[#fce7f3]/60 rounded-xl p-3 border border-[#fbcfe8] text-[12px] text-slate-800">
                  {t.campaignCard.replyText}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy & Checkpoint Bullets */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.platformControlTitle}
            </h3>

            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl">
              {t.platformControlDesc}
            </p>

            <div className="space-y-4 pt-2">
              {t.platformControlBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#edf4e8] text-[#698a22] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14.5px] sm:text-[15.5px] font-medium text-slate-800">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;

import React from "react";
import {
  Globe2,
  Phone,
  Headphones,
  Building2,
  Network,
  MessageSquareCode,
  Sliders,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface ResellerSectionProps {
  t: VirtualDidTranslation;
}

export const ResellerSection: React.FC<ResellerSectionProps> = ({ t }) => {
  const audienceIcons = [
    <Globe2 className="w-5 h-5 text-[#698a22]" />,
    <Phone className="w-5 h-5 text-[#698a22]" />,
    <Headphones className="w-5 h-5 text-[#698a22]" />,
    <Building2 className="w-5 h-5 text-[#698a22]" />,
    <Network className="w-5 h-5 text-[#698a22]" />,
    <MessageSquareCode className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section className="w-full bg-[#fffff] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.resellerBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.resellerTitle}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.resellerSubtitle}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 6 Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {t.supportedAudiences.map((aud, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f4f8ee] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {audienceIcons[idx % audienceIcons.length]}
                </div>
                <span className="text-[14.5px] font-bold text-[#102038] group-hover:text-[#698a22] transition-colors">
                  {aud.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: White-Label Ready Card */}
          <div className="lg:col-span-6 bg-[#EEF2EB]/60 rounded-3xl p-6 sm:p-8 border border-slate-200/90 text-left space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-[#102038] mb-2">
                {t.whiteLabelCard.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                {t.whiteLabelCard.desc}
              </p>
            </div>

            {/* Embedded White-Label Mini UI Preview */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-[#698a22]" />
                  <span className="text-[13px] font-bold text-[#102038]">
                    {t.whiteLabelCard.brandLabel}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  {t.whiteLabelCard.portalLabel}
                </span>
              </div>

              {/* 3 Tabs */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-200/60">
                  <Sliders className="w-4 h-4 text-[#698a22] mx-auto mb-1" />
                  <span className="text-[11.5px] font-bold text-[#102038]">
                    {t.whiteLabelCard.tab1}
                  </span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-200/60">
                  <PhoneCall className="w-4 h-4 text-[#698a22] mx-auto mb-1" />
                  <span className="text-[11.5px] font-bold text-[#102038]">
                    {t.whiteLabelCard.tab2}
                  </span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-200/60">
                  <MessageSquare className="w-4 h-4 text-[#698a22] mx-auto mb-1" />
                  <span className="text-[11.5px] font-bold text-[#102038]">
                    {t.whiteLabelCard.tab3}
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-center text-[11px] text-slate-400 font-medium pt-1">
                {t.whiteLabelCard.tagline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;

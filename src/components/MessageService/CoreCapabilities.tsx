import React from "react";
import {
  ArrowRight,
  MessageSquare,
  Globe,
  Radio,
  SlidersHorizontal,
  BarChart2,
  ShieldAlert,
} from "lucide-react";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface CoreCapabilitiesProps {
  t: WholesaleMessageTranslation;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ t }) => {
  const capabilityIcons = [
    <MessageSquare className="w-5 h-5 text-[#698a22]" />,
    <Globe className="w-5 h-5 text-[#698a22]" />,
    <Radio className="w-5 h-5 text-[#698a22]" />,
    <SlidersHorizontal className="w-5 h-5 text-[#698a22]" />,
    <BarChart2 className="w-5 h-5 text-[#698a22]" />,
    <ShieldAlert className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section
      id="capabilities"
      className="w-full bg-[#f8faf6] py-16 sm:py-20 lg:py-24 border-b border-slate-200/70"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-4 space-y-6 text-left lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.capabilitiesBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.capabilitiesTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.capabilitiesDesc}
            </p>

            <div className="pt-2 space-y-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.designSolution}
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-normal">
                {t.solutionNote}
              </p>
            </div>
          </div>

          {/* Right Column: 6 Grid Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition duration-200 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#edf4e8] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {capabilityIcons[idx % capabilityIcons.length]}
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-50 text-[#83184d] border border-slate-100">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#102038] mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-[13.5px] text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;

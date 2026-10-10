import React from "react";
import {
  Globe2,
  Phone,
  MessageSquare,
  Smartphone,
  PhoneForwarded,
  Sliders,
  Activity,
} from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface HighlightsBarProps {
  t: VirtualDidTranslation;
}

export const HighlightsBar: React.FC<HighlightsBarProps> = ({ t }) => {
  const highlightIcons = [
    <Globe2 className="w-5 h-5 text-[#698a22]" />,
    <Phone className="w-5 h-5 text-[#698a22]" />,
    <MessageSquare className="w-5 h-5 text-[#698a22]" />,
    <Smartphone className="w-5 h-5 text-[#698a22]" />,
    <PhoneForwarded className="w-5 h-5 text-[#698a22]" />,
    <Sliders className="w-5 h-5 text-[#698a22]" />,
    <Activity className="w-5 h-5 text-[#698a22]" />,
  ];

  return (
    <section className="w-full bg-[#ffff] py-14 sm:py-16 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h3 className="text-center font-bold text-[#102038] text-xl sm:text-2xl mb-8 sm:mb-10 tracking-tight">
          Your Global Number. Your Complete Control.
        </h3>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {t.highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-[#698a22]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-center min-h-[115px] group cursor-default"
            >
              <div className="w-11 h-11 rounded-full bg-[#f4f8ee] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {highlightIcons[idx % highlightIcons.length]}
              </div>
              <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#102038] group-hover:text-[#698a22] transition-colors leading-snug">
                {h.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsBar;

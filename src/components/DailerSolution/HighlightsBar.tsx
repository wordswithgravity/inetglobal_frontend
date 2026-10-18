import React from "react";
import {
  Laptop,
  Smartphone,
  Globe2,
  Radio,
  Headphones,
  BarChart2,
} from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface HighlightsBarProps {
  t: DailerSolutionTranslation;
}

export const HighlightsBar: React.FC<HighlightsBarProps> = ({ t }) => {
  const cardIcons = [
    {
      icon: <Laptop className="w-5 h-5 text-[#698a22]" />,
      bg: "bg-[#eef5e6]",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#83184d]" />,
      bg: "bg-[#fdf2f7]",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#698a22]" />,
      bg: "bg-[#eef5e6]",
    },
    {
      icon: <Radio className="w-5 h-5 text-[#83184d]" />,
      bg: "bg-[#fdf2f7]",
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#698a22]" />,
      bg: "bg-[#eef5e6]",
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-[#83184d]" />,
      bg: "bg-[#fdf2f7]",
    },
  ];

  return (
    <section className="w-full bg-[#fffff] py-12 sm:py-14 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.highlights.map((h, idx) => {
            const config = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#698a22]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-center min-h-[125px] group cursor-default"
              >
                <div
                  className={`w-11 h-11 rounded-2xl ${config.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  {config.icon}
                </div>
                <span className="text-[13px] font-bold text-[#102038] group-hover:text-[#698a22] transition-colors leading-snug">
                  {h.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsBar;

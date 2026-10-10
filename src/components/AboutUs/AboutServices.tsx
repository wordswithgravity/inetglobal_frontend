import React from "react";
import {
  PhoneCall,
  Bot,
  Hash,
  Send,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";
import type { AboutUsTranslation } from "../../data/aboutUsTranslations";

interface AboutServicesProps {
  t: AboutUsTranslation;
}

export const AboutServices: React.FC<AboutServicesProps> = ({ t }) => {
  const serviceIcons = [
    <PhoneCall className="w-5 h-5 text-[#698a22]" />,
    <Bot className="w-5 h-5 text-[#83184d]" />,
    <Hash className="w-5 h-5 text-[#698a22]" />,
    <Send className="w-5 h-5 text-[#83184d]" />,
    <ShieldCheck className="w-5 h-5 text-[#698a22]" />,
    <Headphones className="w-5 h-5 text-[#83184d]" />,
  ];

  return (
    <section
      id="services"
      className="w-full bg-white py-16 sm:py-24 lg:py-28 border-b border-slate-200/70"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.servicesBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {t.servicesList.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-[#EEF2EB] hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#698a22]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white group-hover:bg-[#EEF2EB] border border-slate-200/60 flex items-center justify-center transition-colors">
                    {serviceIcons[idx % serviceIcons.length]}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 group-hover:border-[#698a22]/30 group-hover:text-[#698a22] transition-colors">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#102038] group-hover:text-[#698a22] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-slate-200/60">
                {/* Feature Tags */}
                <div className="space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#698a22] shrink-0" />
                      <span className="text-[12.5px] text-slate-600 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Explore Link */}
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#83184d] group-hover:text-[#698a22] transition-colors pt-1"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;

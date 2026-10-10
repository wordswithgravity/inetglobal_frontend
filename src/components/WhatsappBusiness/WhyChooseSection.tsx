import React, { useState } from "react";
import type { WhatsappBusinessTranslation } from "../../data/whatsappBusinessTranslations";

interface WhyChooseSectionProps {
  t: WhatsappBusinessTranslation;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ t }) => {
  const [isApiHovered, setIsApiHovered] = useState(false);

  return (
    <section className="w-full bg-[#ffff] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.whyBadge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.whyTitle}
          </h2>

          <p className="text-[14.5px] sm:text-[16px] text-[#4e5e70] leading-relaxed max-w-2xl">
            {t.whySubtitle}
          </p>
        </div>

        {/* 5-Card Interactive Constellation Layout */}
        <div
          className="relative min-h-[380px] flex items-center justify-center"
          onMouseEnter={() => setIsApiHovered(true)}
          onMouseLeave={() => setIsApiHovered(false)}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            {/* Left Column (Cards 1 & 2) - Animated in/out on hover */}
            <div
              className={`space-y-6 lg:space-y-8 flex flex-col justify-between h-full transition-all duration-500 ease-out transform ${
                isApiHovered
                  ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-x-12 scale-90 pointer-events-none"
              }`}
            >
              {/* Card 1: Secure and Reliable Messaging */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                  {t.whyCards?.secure?.title || "Secure and Reliable Messaging"}
                </h4>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  {t.whyCards?.secure?.description ||
                    "Official Meta Business API connection with end-to-end encryption, guaranteed uptime, and verified sender security."}
                </p>
              </div>

              {/* Card 2: Cloud-Based Infrastructure */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                  {t.whyCards?.cloud?.title || "Cloud-Based Infrastructure"}
                </h4>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  {t.whyCards?.cloud?.description ||
                    "High-throughput cloud architecture designed to scale seamlessly with your growing customer conversations."}
                </p>
              </div>
            </div>

            {/* Center Hero Navy Card (Card 3: WhatsApp API & CRM Integration) */}
            <div
              onClick={() => setIsApiHovered((prev) => !prev)}
              className={`bg-[#102038] text-white rounded-[28px] p-8 sm:p-9 shadow-xl border border-slate-700/60 text-left space-y-3.5 my-auto transform transition-all duration-300 z-20 cursor-pointer select-none ${
                isApiHovered
                  ? "lg:scale-105 shadow-2xl shadow-[#102038]/30 ring-2 ring-[#698a22]/50"
                  : "scale-100 hover:scale-[1.02] shadow-xl hover:ring-2 hover:ring-[#698a22]/30"
              }`}
            >
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {t.whyCards?.api?.title ||
                  t.apiCard?.title ||
                  "WhatsApp API & CRM Integration"}
              </h4>
              <p className="text-[14px] sm:text-[14.5px] text-slate-300 leading-relaxed">
                {t.whyCards?.api?.description ||
                  t.apiCard?.desc ||
                  "As a trusted Business Solution Provider, we help businesses integrate WhatsApp messaging into websites, mobile apps, CRM systems, and customer service platforms."}
              </p>
            </div>

            {/* Right Column (Cards 4 & 5) - Animated in/out on hover */}
            <div
              className={`space-y-6 lg:space-y-8 flex flex-col justify-between h-full transition-all duration-500 ease-out transform ${
                isApiHovered
                  ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                  : "opacity-0 translate-x-12 scale-90 pointer-events-none"
              }`}
            >
              {/* Card 4: Global Message Connectivity */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                  {t.whyCards?.connectivity?.title ||
                    "Global Message Connectivity"}
                </h4>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  {t.whyCards?.connectivity?.description ||
                    "Worldwide reach across 190+ countries with carrier-grade reliability and high message delivery rates."}
                </p>
              </div>

              {/* Card 5: Automated Chatbot & Workflows */}
              <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-xs border border-[#e1ebd9] hover:border-[#698a22] hover:shadow-lg transition duration-200 text-left">
                <h4 className="text-lg sm:text-[19px] font-bold text-[#102038] mb-2.5">
                  {t.whyCards?.automated?.title ||
                    "Automated Chatbot & Workflows"}
                </h4>
                <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                  {t.whyCards?.automated?.description ||
                    "Deploy automated conversational flows, interactive buttons, quick replies, and seamless live-agent handover."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

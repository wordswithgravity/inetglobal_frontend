import React from "react";
import contactCenterImg from "../../assets/contactcenter.jpg";
import fintechPlatformImg from "../../assets/fintech&platform.jpg";
import travelHospitalImg from "../../assets/travelandhospital.jpg";
import criticalNotificationsImg from "../../assets/criticalnotifications.jpg";
import type { WholesaleVoiceTranslation } from "../../data/wholesaleVoiceTranslations";

interface MomentsSectionProps {
  t: WholesaleVoiceTranslation;
}

export const MomentsSection: React.FC<MomentsSectionProps> = ({ t }) => {
  const images = [
    contactCenterImg,
    fintechPlatformImg,
    travelHospitalImg,
    criticalNotificationsImg,
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.momentsBadge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.momentsTitle}
          </h2>

          <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
            {t.momentsSubtitle}
          </p>
        </div>

        {/* 4 Industry / Moment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {t.moments.map((moment, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[26px] border border-gray-200 hover:border-[#698a22] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group text-left"
            >
              <div>
                {/* Card Artwork Header */}
                <div className="w-full h-48 sm:h-52 bg-white flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <img
                    src={images[idx % images.length]}
                    alt={moment.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#102038]">
                    {moment.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {moment.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[12px] font-semibold text-[#83184d] group-hover:text-[#698a22] transition-colors">
                    {moment.footer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;

import React from "react";
import authImg from "../../assets/authentication.jpg";
import alertsImg from "../../assets/transactionalalert.jpg";
import journeyImg from "../../assets/customerjourneys.jpg";
import engagementImg from "../../assets/customerenganement.jpg";
import type { WholesaleMessageTranslation } from "../../data/wholesaleMessageTranslations";

interface MomentsSectionProps {
  t: WholesaleMessageTranslation;
}

export const MomentsSection: React.FC<MomentsSectionProps> = ({ t }) => {
  const momentImages = [authImg, alertsImg, journeyImg, engagementImg];

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-20 lg:py-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.momentsBadge}
            </span>
            <span className="w-5 h-[2px] bg-[#698a22]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.momentsTitle}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[16px] text-slate-600">
            {t.momentsSubtitle}
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.moments.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#698a22]/50 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Illustration Banner */}
                <div className="w-full h-44 sm:h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={momentImages[idx % momentImages.length]}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[18px] font-bold text-[#102038] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 pt-2">
                <span className="text-[12.5px] font-semibold text-[#83184d] group-hover:text-[#698a22] transition-colors">
                  {m.footer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;

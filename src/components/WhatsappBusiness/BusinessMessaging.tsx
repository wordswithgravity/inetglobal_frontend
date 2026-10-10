import React from "react";
import { Check } from "lucide-react";
import type { WhatsappBusinessTranslation } from "../../data/whatsappBusinessTranslations";

interface BusinessMessagingProps {
  t: WhatsappBusinessTranslation;
}

export const BusinessMessaging: React.FC<BusinessMessagingProps> = ({ t }) => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.overviewBadge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.overviewTitle}
            </h2>
          </div>

          {/* Right Column: Descriptions & Checklist */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.overviewDesc1}
            </p>

            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              {t.overviewDesc2}
            </p>

            {/* 3 Horizontal Checklist items */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 text-[13.5px] sm:text-[14.5px] font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#698a22] stroke-[3]" />
                <span>{t.check1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#698a22] stroke-[3]" />
                <span>{t.check2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#698a22] stroke-[3]" />
                <span>{t.check3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessMessaging;

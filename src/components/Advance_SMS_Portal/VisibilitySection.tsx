import React from "react";
import { Check } from "lucide-react";
import type { OtpSmsTranslation } from "../../data/otpSmsTranslations";

interface VisibilitySectionProps {
  t: OtpSmsTranslation;
}

export const VisibilitySection: React.FC<VisibilitySectionProps> = ({ t }) => {
  // Split bullets into 3 columns
  const col1 = t.visibilityBullets.slice(0, 4);
  const col2 = t.visibilityBullets.slice(4, 7);
  const col3 = t.visibilityBullets.slice(7);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.visibilityBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.visibilityTitle}
            </h2>
          </div>

          <div className="max-w-md lg:text-left">
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed">
              {t.visibilitySubtitle}
            </p>
          </div>
        </div>

        {/* 3 Columns Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
          {/* Column 1 */}
          <div className="space-y-4 text-left">
            {col1.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#698a22] shrink-0 stroke-[3]" />
                <span className="text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4 text-left">
            {col2.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#698a22] shrink-0 stroke-[3]" />
                <span className="text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-4 text-left">
            {col3.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#698a22] shrink-0 stroke-[3]" />
                <span className="text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilitySection;

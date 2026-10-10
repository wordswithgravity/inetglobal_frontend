import React from "react";
import { Check, ShieldCheck, KeyRound, AlertTriangle } from "lucide-react";
import type { OtpComparisonTranslation } from "../../data/otpSmsServicesTranslations";

interface OtpAuthComparisonSectionProps {
  comparison: OtpComparisonTranslation;
}

export const OtpAuthComparisonSection: React.FC<OtpAuthComparisonSectionProps> = ({
  comparison,
}) => {
  return (
    <section className="w-full bg-[#f8faf7] py-16 sm:py-20 lg:py-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              AUTHENTICATION METHODS
            </span>
            <span className="w-5 h-[2px] bg-[#698a22]" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-bold text-[#102038] tracking-tight leading-tight">
            {comparison.comparisonTitle}
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[16px] text-slate-600">
            {comparison.comparisonSubtitle}
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Card 1: OTP SMS */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#698a22] shadow-xl relative flex flex-col justify-between text-left overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#698a22] via-[#83184d] to-[#698a22]" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#edf4e8] text-[#698a22] flex items-center justify-center shadow-xs">
                    <KeyRound className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102038]">
                      {comparison.otpTitle}
                    </h3>
                    <p className="text-xs text-[#698a22] font-semibold">
                      Direct mobile phone delivery
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#edf4e8] text-[#698a22] border border-[#698a22]/30">
                  {comparison.otpBadge}
                </span>
              </div>

              {/* Items List */}
              <ul className="py-6 space-y-4">
                {comparison.otpItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#102038] text-[14.5px] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#698a22] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs shadow-[#698a22]/30">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-[#698a22]">
                Zero app installation required for end-users
              </span>
              <span className="text-[11px] font-bold text-[#83184d] bg-[#fdf2f8] px-2.5 py-1 rounded-full">
                Universal
              </span>
            </div>
          </div>

          {/* Card 2: App-Based Authentication */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#102038]">
                      {comparison.appTitle}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      In-app code generation
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  {comparison.appBadge}
                </span>
              </div>

              {/* Items List */}
              <ul className="py-6 space-y-4">
                {comparison.appItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-[14.5px]">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400">
                Suitable for high-security internal and specialist applications
              </span>
            </div>
          </div>
        </div>

        {/* Security Recommendation Card */}
        <div className="max-w-5xl mx-auto bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 text-left flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[14px] sm:text-[15px] font-bold text-amber-900 mb-1">
              Security Recommendation
            </h4>
            <p className="text-[12.5px] sm:text-[13.5px] text-amber-800/90 leading-relaxed">
              {comparison.securityNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpAuthComparisonSection;

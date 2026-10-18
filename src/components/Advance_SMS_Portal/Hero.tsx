import React from "react";
import {
  ArrowRight,
  Globe,
  Radio,
  Megaphone,
  MessageSquare,
  Key,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
import Iphone from "../Iphone";
import type { OtpSmsTranslation } from "../../data/otpSmsTranslations";

interface HeroProps {
  t: OtpSmsTranslation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const bottomIcons = [
    <Globe className="w-4 h-4 text-[#698a22]" />,
    <Radio className="w-4 h-4 text-[#698a22]" />,
    <Megaphone className="w-4 h-4 text-[#698a22]" />,
    <MessageSquare className="w-4 h-4 text-[#698a22]" />,
    <Key className="w-4 h-4 text-[#698a22]" />,
    <BarChart2 className="w-4 h-4 text-[#698a22]" />,
  ];

  return (
    <section className="relative w-full bg-[#EEF2EB] overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/70">
      {/* Background ambient subtle gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#698a22]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#83184d]/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-20">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.heroBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#102038] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-[16px] sm:text-[18px] font-semibold text-slate-800 leading-snug">
              {t.heroSubtitle}
            </p>

            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.getStarted}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[15px] font-medium transition duration-150 active:scale-[0.98]"
              >
                {t.bookDemo}
              </a>
            </div>
          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">
            <div className="relative w-full max-w-[380px] flex items-center justify-center">
              <div className="relative z-10 w-[260px] sm:w-[285px] lg:w-[305px] drop-shadow-2xl select-none">
                <Iphone className="w-full">
                  <div className="w-full h-full bg-[#f8fafc] flex flex-col justify-between font-sans text-slate-800 pt-8 pb-3 px-3">
                    {/* Top App Header */}
                    <div className="bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#698a22] text-white flex items-center justify-center font-bold text-xs">
                          iN
                        </div>
                        <div className="text-[11.5px] font-bold text-[#102038]">
                          iNet SMS Portal
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-[#698a22] bg-[#edf4e8] px-2 py-0.5 rounded-full">
                        Live
                      </span>
                    </div>

                    {/* Messages Body */}
                    <div className="space-y-3 py-3 flex-1 flex flex-col justify-center">
                      <div className="bg-white rounded-2xl p-3 shadow-xs border border-slate-100 space-y-1.5 text-left">
                        <div className="flex items-center justify-between text-[9.5px] text-slate-500">
                          <span className="font-bold text-[#102038]">
                            Security Alert
                          </span>
                          <span>Just now</span>
                        </div>
                        <p className="text-[11px] text-slate-800 leading-snug">
                          Your verification code is{" "}
                          <span className="font-bold text-[#83184d]">
                            849201
                          </span>
                          . Valid for 5 minutes.
                        </p>
                        <div className="flex items-center gap-1 text-[8.5px] text-emerald-600 font-semibold pt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Delivered • 0.8s</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-3 shadow-xs border border-slate-100 space-y-1.5 text-left">
                        <div className="flex items-center justify-between text-[9.5px] text-slate-500">
                          <span className="font-bold text-[#102038]">
                            Order Shipping
                          </span>
                          <span>10:42 AM</span>
                        </div>
                        <p className="text-[11px] text-slate-800 leading-snug">
                          Hi Alex, package #9821 has been dispatched with
                          express tracking.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="bg-white border border-gray-200 rounded-full px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Gateway status</span>
                      <span className="text-emerald-600 font-bold">
                        ● 99.99% Online
                      </span>
                    </div>
                  </div>
                </Iphone>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 6 Quick Feature Points */}
        <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.heroFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-8 rounded-lg bg-[#edf4e8] flex items-center justify-center shrink-0">
                {bottomIcons[idx % bottomIcons.length]}
              </div>
              <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#102038]">
                {feat.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

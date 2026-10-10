import React from "react";
import {
  ArrowRight,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";
import globeImg from "../../assets/globe.png";
import logoImg from "../../assets/logo.png";
import Iphone from "../Iphone";
import type { OmnichannelTranslation } from "../../data/omnichannelTranslations";

interface HeroProps {
  t: OmnichannelTranslation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#EEF2EB] pt-8 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left relative z-20">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.heroBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[52px] font-bold text-[#102038] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#4e5e70] leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            <div className="pt-2 sm:pt-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.getStarted}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Graphic Column: Phone with Omnichannel Chat & Floating Badges */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-6 lg:py-4 z-10">
            <div className="relative w-full max-w-[560px] sm:max-w-[660px] lg:max-w-[720px] flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
              {/* Background Ambient Glow */}
              <div className="absolute w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] rounded-full bg-[#dbe8d2]/85 blur-3xl -z-10" />

              {/* Large Background Globe */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-65 sm:opacity-75 scale-120 sm:scale-130 lg:scale-140 transition-transform duration-300 z-0">
                <img
                  src={globeImg}
                  alt="Network Globe"
                  className="w-full max-w-[580px] sm:max-w-[680px] lg:max-w-[760px] h-auto object-contain select-none"
                />
              </div>

              {/* iPhone Container with Live Omnichannel Conversation */}
              <div className="relative z-10 w-[240px] sm:w-[270px] lg:w-[290px] drop-shadow-2xl">
                <Iphone className="w-full">
                  <div className="w-full h-full bg-slate-50 flex flex-col justify-between font-sans text-slate-800 p-3 pt-7 select-none">
                    {/* Chat Top App Header */}
                    <div className="flex items-center justify-between pb-2.5 border-b border-gray-200">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded-full bg-[#102038] flex items-center justify-center p-1 shrink-0">
                          <img
                            src={logoImg}
                            alt="iNet Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="text-[11.5px] font-bold text-[#102038] truncate flex items-center gap-1">
                            <span>{t.chatScreen.contactName}</span>
                            <ShieldCheck className="w-3 h-3 text-[#698a22] shrink-0" />
                          </div>
                          <div className="text-[9.5px] text-[#698a22] font-semibold">
                            {t.chatScreen.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Message Bubbles */}
                    <div className="space-y-3 py-3 flex-1 flex flex-col justify-center">
                      {/* Incoming Message Bubble */}
                      <div className="flex flex-col items-start space-y-1 max-w-[88%] text-left">
                        <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-xs p-3 shadow-xs text-[11px] text-slate-700 leading-snug">
                          {t.chatScreen.msg1}
                        </div>
                        <span className="text-[9px] text-slate-400 pl-1">
                          {t.chatScreen.time1}
                        </span>
                      </div>

                      {/* Outgoing Message Bubble */}
                      <div className="flex flex-col items-end space-y-1 max-w-[88%] self-end text-right">
                        <div className="bg-[#698a22] text-white rounded-2xl rounded-tr-xs p-3 shadow-xs text-[11px] leading-snug text-left">
                          {t.chatScreen.msg2}
                        </div>
                        <span className="text-[9px] text-slate-400 pr-1">
                          {t.chatScreen.time2}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Input Preview */}
                    <div className="bg-white border border-gray-200 rounded-full px-3 py-1.5 flex items-center justify-between text-[10.5px] text-slate-400">
                      <span>{t.chatScreen.typeMessage}</span>
                      <div className="w-5 h-5 rounded-full bg-[#83184d] text-white flex items-center justify-center">
                        <Send className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                </Iphone>
              </div>

              {/* Floating Location/Service Badges Attached to Phone */}
              {/* 1. Top-Right Badge (Wholesale SMS / WhatsApp) */}
              <div className="absolute top-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-xs rounded-2xl py-2 px-3.5 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 max-w-[210px] text-left transition hover:shadow-xl hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-full bg-[#698a22] flex items-center justify-center text-white shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[12px] font-bold text-[#102038]">
                    {t.floatingBadges.wholesale.title}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {t.floatingBadges.wholesale.desc}
                  </div>
                </div>
              </div>

              {/* 2. Middle-Right Badge (Telegram) */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 bg-white/95 backdrop-blur-xs rounded-2xl py-2 px-3.5 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 max-w-[220px] text-left transition hover:shadow-xl hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-full bg-[#83184d] text-white flex items-center justify-center shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[12px] font-bold text-[#102038]">
                    {t.floatingBadges.telegram.title}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {t.floatingBadges.telegram.desc}
                  </div>
                </div>
              </div>

              {/* 3. Bottom-Right Badge (Facebook) */}
              <div className="absolute bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-xs rounded-2xl py-2 px-3.5 shadow-lg border border-gray-100 flex items-center gap-2.5 z-20 max-w-[210px] text-left transition hover:shadow-xl hover:-translate-y-0.5">
                <div className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center text-white shrink-0">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[12px] font-bold text-[#102038]">
                    {t.floatingBadges.facebook.title}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {t.floatingBadges.facebook.desc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

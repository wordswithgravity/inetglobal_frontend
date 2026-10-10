import React from "react";
import {
  ArrowRight,
  GitMerge,
  Radio,
  Lock,
  MoreVertical,
  CheckCheck,
} from "lucide-react";
import Iphone from "../Iphone";
import type { WhatsappBusinessTranslation } from "../../data/whatsappBusinessTranslations";

interface HeroProps {
  t: WhatsappBusinessTranslation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative w-full bg-[#EEF2EB] overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Background ambient subtle gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#698a22]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#83184d]/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.heroBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#102038] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-slate-600 leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.talkToExpert}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[15px] font-medium transition duration-150 active:scale-[0.98]"
              >
                {t.exploreCapabilities}
              </a>
            </div>
          </div>

          {/* Right Column: Phone Mockup with WhatsApp Conversation */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-6">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] flex items-center justify-center">
              {/* Background Geometric Radar Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#698a22]/20 relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#698a22] absolute top-12 left-16" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#698a22] absolute bottom-16 right-12" />
                  <span className="w-2 h-2 rounded-full bg-[#698a22] absolute top-20 right-8" />
                  <span className="w-2 h-2 rounded-full bg-[#698a22] absolute bottom-24 left-10" />
                  <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#698a22]/15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Floating Top-Left Badge: Connected to your CRM */}
              <div className="absolute top-4 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl py-2.5 px-4 shadow-xl border border-slate-100 flex items-center gap-2.5 z-20 text-left transform hover:scale-105 transition">
                <div className="w-7 h-7 rounded-lg bg-[#edf4e8] text-[#698a22] flex items-center justify-center shrink-0">
                  <GitMerge className="w-4 h-4" />
                </div>
                <span className="text-[12.5px] font-bold text-[#102038]">
                  {t.heroBadges.crm}
                </span>
              </div>

              {/* Floating Top-Right Mini Badge: Antenna */}
              <div className="absolute top-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-full w-10 h-10 shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 z-20 transform hover:scale-110 transition">
                <Radio className="w-4 h-4 text-slate-600" />
              </div>

              {/* Floating Bottom-Right Badge: Secure conversations */}
              <div className="absolute bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl py-2.5 px-4 shadow-xl border border-slate-100 flex items-center gap-2.5 z-20 text-left transform hover:scale-105 transition">
                <div className="w-7 h-7 rounded-lg bg-[#fdf2f8] text-[#83184d] flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="text-[12.5px] font-bold text-[#102038]">
                  {t.heroBadges.secure}
                </span>
              </div>

              {/* iPhone Mockup Frame */}
              <div className="relative z-10 w-[270px] sm:w-[295px] lg:w-[315px] drop-shadow-2xl select-none">
                <Iphone className="w-full">
                  <div className="w-full h-full bg-[#efeae2]/50 flex flex-col justify-between font-sans text-slate-800 pt-8 pb-3 px-3">
                    {/* WhatsApp Chat Header */}
                    <div className="bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold text-xs shrink-0">
                          💬
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="text-[11.5px] font-bold text-[#102038] truncate">
                            {t.chatScreen.contactName}
                          </div>
                          <div className="text-[9px] text-[#698a22] font-semibold">
                            {t.chatScreen.status}
                          </div>
                        </div>
                      </div>
                      <MoreVertical className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    {/* Chat Messages Body */}
                    <div className="space-y-3 py-3 flex-1 flex flex-col justify-center">
                      <div className="text-center">
                        <span className="text-[9px] bg-white/90 text-slate-500 px-2 py-0.5 rounded-md shadow-xs">
                          Today
                        </span>
                      </div>

                      {/* Incoming Msg 1 */}
                      <div className="bg-white rounded-2xl rounded-tl-xs p-2.5 shadow-xs max-w-[92%] text-left space-y-1.5 border border-slate-100">
                        <p className="text-[11px] text-slate-800 leading-snug">
                          {t.chatScreen.msg1}
                        </p>
                        <button className="w-full py-1 px-2.5 rounded-lg border border-[#83184d]/30 text-[#83184d] text-[10px] font-bold hover:bg-[#fdf2f8] transition flex items-center justify-center gap-1">
                          {t.chatScreen.actionBtn}
                        </button>
                        <div className="text-[8.5px] text-slate-400 text-right">
                          {t.chatScreen.time1}
                        </div>
                      </div>

                      {/* Outgoing Msg 2 */}
                      <div className="bg-[#d9fdd3] rounded-2xl rounded-tr-xs p-2.5 shadow-xs max-w-[90%] ml-auto text-left space-y-1">
                        <p className="text-[11px] text-slate-800 leading-snug">
                          {t.chatScreen.msg2}
                        </p>
                        <div className="flex items-center justify-end gap-1 text-[8.5px] text-slate-500">
                          <span>{t.chatScreen.time2}</span>
                          <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                        </div>
                      </div>

                      {/* Incoming Msg 3 */}
                      <div className="bg-white rounded-2xl rounded-tl-xs p-2.5 shadow-xs max-w-[90%] text-left space-y-1 border border-slate-100">
                        <p className="text-[11px] text-slate-800 leading-snug">
                          {t.chatScreen.msg3}
                        </p>
                        <div className="text-[8.5px] text-slate-400 text-right">
                          {t.chatScreen.time3}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Input Preview */}
                    <div className="bg-white border border-gray-200 rounded-full px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Type a message...</span>
                      <div className="w-4 h-4 rounded-full bg-[#83184d] text-white flex items-center justify-center text-[9px]">
                        ➤
                      </div>
                    </div>
                  </div>
                </Iphone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import {
  ArrowRight,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Pause,
  Play,
  ArrowRightLeft,
  PhoneOff,
  GitMerge,
  ChevronDown,
  Wifi,
  Battery,
  Signal,
  CheckCircle2,
  Radio,
} from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface HeroProps {
  t: DailerSolutionTranslation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isOnSpeaker, setIsOnSpeaker] = useState(true);
  const [isOnHold, setIsOnHold] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const { heroMockup } = t;

  return (
    <section className="relative w-full bg-[#EEF2EB] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
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
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#102038] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.requestDemo}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#browser-dialer"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[15px] font-medium transition duration-150 shadow-xs active:scale-[0.98]"
              >
                {t.exploreDialer}
              </a>
            </div>

            {/* Trust Footnote */}
            <div className="pt-2 text-[13px] text-slate-500 font-medium">
              {t.heroFootnote}
            </div>
          </div>

          {/* Right Column: Realistic iPhone Dialer Mockup */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] flex justify-center">
              {/* Floating Top-Left Badge: Synced with CRM */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 items-center gap-2.5 z-30 text-left animate-bounce duration-1000">
                <div className="w-7 h-7 rounded-lg bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#102038]">
                    WebRTC Mobile App
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Live Cloud Sync
                  </div>
                </div>
              </div>

              {/* iPhone Hardware Chassis */}
              <div className="relative w-[320px] sm:w-[350px] bg-[#0c121e] rounded-[52px] sm:rounded-[56px] p-3 sm:p-3.5 shadow-[0_30px_90px_-20px_rgba(16,32,56,0.38)] border-[3.5px] border-slate-700/80">
                {/* Hardware Side Buttons */}
                <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-slate-600 rounded-l-md" />
                <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-slate-600 rounded-l-md" />
                <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-slate-600 rounded-l-md" />
                <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-slate-600 rounded-r-md" />

                {/* iPhone Inner OLED Screen */}
                <div className="relative w-full rounded-[42px] sm:rounded-[46px] overflow-hidden bg-gradient-to-b from-[#0f1d33] via-[#132644] to-[#0c182b] text-white p-4 sm:p-5 flex flex-col justify-between h-[590px] sm:h-[630px] border border-slate-700/60 text-left select-none">
                  {/* Subtle ambient light */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#698a22]/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#83184d]/20 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Status Bar & Dynamic Island */}
                  <div className="relative z-20 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 px-2 pt-0.5">
                      <span className="font-mono">9:41</span>

                      {/* Dynamic Island Pill */}
                      <div className="w-24 h-6 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <div className="flex items-center gap-0.5">
                          <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-bounce" />
                          <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-bounce delay-75" />
                          <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-150" />
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between pt-1 border-b border-slate-800/80 pb-2.5">
                      <div>
                        <span className="font-extrabold text-[15px] text-white tracking-tight">
                          {heroMockup.title}
                        </span>
                        <div className="text-[10px] text-slate-400">
                          {heroMockup.campaign}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {heroMockup.agentStatus}
                      </span>
                    </div>
                  </div>

                  {/* Center: Active WebRTC Call View */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-3.5 text-center">
                    {/* Call Status Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162744] border border-slate-700/80 text-[11px] font-medium text-emerald-300 shadow-sm">
                      <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
                      <span>{heroMockup.connectedBadge}</span>
                    </div>

                    {/* Caller Avatar with Animated Rings */}
                    <div className="relative my-1">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#1a335a] to-[#254677] border-2 border-[#698a22]/60 flex items-center justify-center shadow-xl">
                        <span className="font-bold text-2xl text-white">JL</span>
                      </div>
                      <div className="absolute -inset-1.5 rounded-full border border-emerald-500/30 animate-ping pointer-events-none" />
                    </div>

                    {/* Caller Info */}
                    <div className="space-y-0.5">
                      <h3 className="font-extrabold text-xl text-white tracking-tight">
                        {heroMockup.callerName}
                      </h3>
                      <div className="text-[12px] text-slate-300 font-mono">
                        {heroMockup.callerPhone}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {heroMockup.companyVal}
                      </div>
                    </div>

                    {/* Live Duration */}
                    <div className="text-2xl sm:text-3xl font-mono font-black text-[#698a22] tracking-wider py-0.5">
                      {callEnded ? "00:00" : heroMockup.duration}
                    </div>

                    {/* Recording in progress indicator */}
                    <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>{heroMockup.recordingText}</span>
                    </div>
                  </div>

                  {/* Bottom: In-Call iOS Grid Controls + End Call */}
                  <div className="relative z-10 space-y-3">
                    {/* Controls Grid */}
                    <div className="grid grid-cols-3 gap-2.5 px-2">
                      {/* Mute */}
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        className={`flex flex-col items-center justify-center p-2 rounded-2xl transition cursor-pointer ${
                          isMuted
                            ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                            : "bg-[#182a47] text-slate-200 hover:bg-[#20375d]"
                        }`}
                      >
                        {isMuted ? (
                          <MicOff className="w-4 h-4 mb-1" />
                        ) : (
                          <Mic className="w-4 h-4 mb-1" />
                        )}
                        <span className="text-[9.5px] font-medium">Mute</span>
                      </button>

                      {/* Speaker */}
                      <button
                        type="button"
                        onClick={() => setIsOnSpeaker(!isOnSpeaker)}
                        className={`flex flex-col items-center justify-center p-2 rounded-2xl transition cursor-pointer ${
                          isOnSpeaker
                            ? "bg-[#698a22] text-white shadow-md shadow-[#698a22]/30"
                            : "bg-[#182a47] text-slate-200 hover:bg-[#20375d]"
                        }`}
                      >
                        {isOnSpeaker ? (
                          <Volume2 className="w-4 h-4 mb-1" />
                        ) : (
                          <VolumeX className="w-4 h-4 mb-1" />
                        )}
                        <span className="text-[9.5px] font-medium">Speaker</span>
                      </button>

                      {/* Hold */}
                      <button
                        type="button"
                        onClick={() => setIsOnHold(!isOnHold)}
                        className={`flex flex-col items-center justify-center p-2 rounded-2xl transition cursor-pointer ${
                          isOnHold
                            ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                            : "bg-[#182a47] text-slate-200 hover:bg-[#20375d]"
                        }`}
                      >
                        {isOnHold ? (
                          <Play className="w-4 h-4 mb-1" />
                        ) : (
                          <Pause className="w-4 h-4 mb-1" />
                        )}
                        <span className="text-[9.5px] font-medium">Hold</span>
                      </button>

                      {/* Transfer */}
                      <button
                        type="button"
                        className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#182a47] text-slate-200 hover:bg-[#20375d] transition cursor-pointer"
                      >
                        <ArrowRightLeft className="w-4 h-4 mb-1" />
                        <span className="text-[9.5px] font-medium">Transfer</span>
                      </button>

                      {/* Disposition */}
                      <button
                        type="button"
                        className="col-span-2 flex items-center justify-between px-3 py-2 rounded-2xl bg-[#182a47] text-slate-200 hover:bg-[#20375d] transition text-left"
                      >
                        <div>
                          <div className="text-[8.5px] text-slate-400 font-bold uppercase">
                            {heroMockup.dispositionLabel}
                          </div>
                          <div className="text-[10px] font-bold text-white truncate max-w-[120px]">
                            {heroMockup.dispositionVal}
                          </div>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                      </button>
                    </div>

                    {/* Big Red End Call Pill */}
                    <div className="pt-1 px-2">
                      <button
                        type="button"
                        onClick={() => setCallEnded(!callEnded)}
                        className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-[0.98] text-white rounded-2xl text-[12.5px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition cursor-pointer"
                      >
                        <PhoneOff className="w-4 h-4" />
                        <span>{heroMockup.endCall}</span>
                      </button>
                    </div>

                    {/* iOS Home Indicator Bar */}
                    <div className="w-28 h-1 bg-slate-500/40 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </div>

              {/* Floating Bottom-Right Route Intelligence Pill */}
              <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 flex items-center gap-3 z-30 text-left max-w-[240px]">
                <div className="w-8 h-8 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                  <GitMerge className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-bold text-[#102038]">
                    {heroMockup.floatBadgeTitle}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {heroMockup.floatBadgeDesc}
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

import React, { useState } from "react";
import {
  Check,
  Lock,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Pause,
  Play,
  ArrowRightLeft,
  ChevronDown,
  Wifi,
  Battery,
  Signal,
  Radio,
} from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface DesktopDialerSectionProps {
  t: DailerSolutionTranslation;
}

export const DesktopDialerSection: React.FC<DesktopDialerSectionProps> = ({
  t,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isOnSpeaker, setIsOnSpeaker] = useState(true);
  const [isOnHold, setIsOnHold] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const { heroMockup } = t;

  return (
    <section
      id="browser-dialer"
      className="w-full bg-[#EEF2EB] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102038] tracking-tight">
            One Dialer. Every Calling Requirement.
          </h2>
        </div>

        {/* 2-Column Content: iPhone Mockup on Left + Features on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: iPhone WebRTC Call Center Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-5">
            {/* Realistic iPhone Hardware Frame */}
            <div className="relative w-[320px] sm:w-[350px] bg-[#0c121e] rounded-[52px] sm:rounded-[56px] p-3 sm:p-3.5 shadow-[0_28px_80px_-18px_rgba(16,32,56,0.35)] border-[3.5px] border-slate-700/80">
              {/* Hardware Side Buttons */}
              <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-slate-600 rounded-l-md" />
              <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-slate-600 rounded-l-md" />
              <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-slate-600 rounded-l-md" />
              <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-slate-600 rounded-r-md" />

              {/* iPhone Inner OLED Screen */}
              <div className="relative w-full rounded-[42px] sm:rounded-[46px] overflow-hidden bg-gradient-to-b from-[#0f1d33] via-[#132644] to-[#0c182b] text-white p-4 sm:p-5 flex flex-col justify-between h-[590px] sm:h-[630px] border border-slate-700/60 text-left select-none">
                {/* Subtle Ambient Lighting */}
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

                  {/* Caller Avatar with Animated Pulse Rings */}
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

                  {/* Recording indicator */}
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

                  {/* Daily Call Stats Inside Screen */}
                  <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-800 text-center text-slate-300">
                    <div>
                      <div className="text-xs font-bold text-white">{heroMockup.stat1Val}</div>
                      <div className="text-[9px] text-slate-400">{heroMockup.stat1Label}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{heroMockup.stat2Val}</div>
                      <div className="text-[9px] text-slate-400">{heroMockup.stat2Label}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{heroMockup.stat3Val}</div>
                      <div className="text-[9px] text-slate-400">{heroMockup.stat3Label}</div>
                    </div>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="w-28 h-1 bg-slate-500/40 rounded-full mx-auto mt-1" />
                </div>
              </div>
            </div>

            {/* Sub-banner */}
            <div className="w-full max-w-[420px] bg-[#f4f8ee] rounded-2xl p-4 border border-[#698a22]/30 flex items-center gap-3.5 text-left shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#102038]">
                  Your browser is your workspace.
                </div>
                <div className="text-[12px] text-slate-600">
                  Secure agent access. No complicated installation.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & 11 Features Checklist */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.desktopBadge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#102038] tracking-tight leading-tight">
                {t.desktopTitle}
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                {t.desktopSubtitle}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#102038] mb-4">
                {t.desktopFeaturesTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.desktopFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[13.5px] text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopDialerSection;

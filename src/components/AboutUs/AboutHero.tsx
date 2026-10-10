import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Signal,
  Wifi,
  Battery,
  Server,
  Zap,
  Activity,
  CheckCircle2,
} from "lucide-react";
import type { AboutUsTranslation } from "../../data/aboutUsTranslations";

interface AboutHeroProps {
  t: AboutUsTranslation;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ t }) => {
  const { phoneMockup, heroStats } = t;

  return (
    <section className="relative w-full bg-[#EEF2EB] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & Key Stats */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.heroBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-[#102038] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed max-w-xl">
              {t.heroSubtitle}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                {t.contactBtn}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#102038] border border-gray-300 hover:border-[#698a22] text-[15px] font-medium transition duration-150 shadow-xs active:scale-[0.98]"
              >
                {t.servicesBtn}
              </a>
            </div>

            {/* 4 Trust Metric Cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#102038] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[12.5px] font-bold text-[#698a22]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Realistic iPhone Mockup */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] flex justify-center">
              {/* Floating Top-Left Badge */}
              <div className="hidden sm:flex absolute -top-3 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 items-center gap-2.5 z-30 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11.5px] font-bold text-[#102038]">
                    Tier-1 Direct Routes
                  </div>
                  <div className="text-[10px] text-slate-500">
                    99.99% Enterprise SLA
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
                        <span className="font-extrabold text-[15px] text-white tracking-tight flex items-center gap-1.5">
                          <Globe2 className="w-4 h-4 text-[#698a22]" />
                          {phoneMockup.appTitle}
                        </span>
                        <div className="text-[10px] text-slate-400">
                          {phoneMockup.regionLabel}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {phoneMockup.status}
                      </span>
                    </div>
                  </div>

                  {/* Center Content: Network Operations Overview */}
                  <div className="relative z-10 space-y-3 my-auto">
                    {/* Latency Indicator */}
                    <div className="flex items-center justify-between bg-[#162744] px-3 py-1.5 rounded-xl border border-slate-700/80 text-[11px]">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        Network Response
                      </span>
                      <span className="text-emerald-400 font-mono font-bold">
                        {phoneMockup.latency}
                      </span>
                    </div>

                    {/* 2 Core Performance Cards */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-[#12213a] p-3 rounded-2xl border border-slate-700/70 space-y-1">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">
                          {phoneMockup.card1Title}
                        </div>
                        <div className="text-base font-extrabold text-white">
                          {phoneMockup.card1Val}
                        </div>
                        <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-semibold">
                          {phoneMockup.card1Badge}
                        </span>
                      </div>

                      <div className="bg-[#12213a] p-3 rounded-2xl border border-slate-700/70 space-y-1">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">
                          {phoneMockup.card2Title}
                        </div>
                        <div className="text-base font-extrabold text-white">
                          {phoneMockup.card2Val}
                        </div>
                        <span className="inline-block text-[9px] px-1.5 py-0.5 rounded bg-[#698a22]/20 text-[#8fc42b] font-semibold">
                          {phoneMockup.card2Badge}
                        </span>
                      </div>
                    </div>

                    {/* Active Global Gateways List */}
                    <div className="bg-[#12213a]/90 p-3 rounded-2xl border border-slate-700/70 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5 text-[#698a22]" />
                          {phoneMockup.routesTitle}
                        </span>
                        <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                      </div>

                      <div className="space-y-1.5 text-[10.5px]">
                        {[
                          phoneMockup.route1,
                          phoneMockup.route2,
                          phoneMockup.route3,
                        ].map((route, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-center justify-between bg-[#192f52]/60 px-2.5 py-1.5 rounded-xl border border-slate-700/50"
                          >
                            <span className="text-slate-200 font-medium truncate max-w-[150px]">
                              {route.name}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-emerald-300 text-[10px]">
                                {route.quality}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats & iOS Indicator */}
                  <div className="relative z-10 pt-2 space-y-2 border-t border-slate-800">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-[#152744] p-2 rounded-xl">
                        <div className="text-xs font-bold text-white">
                          {phoneMockup.bottomStat1Val}
                        </div>
                        <div className="text-[9px] text-slate-400">
                          {phoneMockup.bottomStat1}
                        </div>
                      </div>
                      <div className="bg-[#152744] p-2 rounded-xl">
                        <div className="text-xs font-bold text-white">
                          {phoneMockup.bottomStat2Val}
                        </div>
                        <div className="text-[9px] text-slate-400">
                          {phoneMockup.bottomStat2}
                        </div>
                      </div>
                    </div>

                    <div className="w-28 h-1 bg-slate-500/40 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

              {/* Floating Bottom-Right Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 flex items-center gap-2.5 z-30 text-left">
                <div className="w-7 h-7 rounded-lg bg-[#83184d]/15 text-[#83184d] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#102038]">
                    Global POPs & NOC
                  </div>
                  <div className="text-[10px] text-slate-500">
                    24/7 Monitored
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

export default AboutHero;

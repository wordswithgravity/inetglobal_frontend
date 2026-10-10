import React, { useState } from "react";
import {
  Check,
  Phone,
  Bell,
  Wifi,
  Battery,
  User,
  Users,
  Clock,
  PhoneCall,
  Delete,
} from "lucide-react";
import type { DailerSolutionTranslation } from "../../data/dailerSolutionTranslations";

interface MobileDialerSectionProps {
  t: DailerSolutionTranslation;
}

export const MobileDialerSection: React.FC<MobileDialerSectionProps> = ({
  t,
}) => {
  const [dialedNumber, setDialedNumber] = useState("+1 415 555 0124");
  const [activeTab, setActiveTab] = useState<"dialer" | "contacts" | "history">(
    "dialer",
  );

  const keys = [
    { num: "1", sub: "" },
    { num: "2", sub: "ABC" },
    { num: "3", sub: "DEF" },
    { num: "4", sub: "GHI" },
    { num: "5", sub: "JKL" },
    { num: "6", sub: "MNO" },
    { num: "7", sub: "PQRS" },
    { num: "8", sub: "TUV" },
    { num: "9", sub: "WXYZ" },
    { num: "*", sub: "" },
    { num: "0", sub: "+" },
    { num: "#", sub: "" },
  ];

  const handleKeyPress = (num: string) => {
    if (dialedNumber.length < 18) {
      setDialedNumber((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setDialedNumber((prev) => prev.slice(0, -1));
  };

  return (
    <section className="w-full bg-[#fffff] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Information & 10 Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.mobileBadge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102038] tracking-tight leading-tight">
                {t.mobileTitle}
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                {t.mobileSubtitle}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#102038] mb-4">
                {t.mobileFeaturesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.mobileFeatures.map((item, idx) => (
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

            {/* Sub-banner */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-3.5 text-left max-w-md">
              <div className="w-9 h-9 rounded-xl bg-[#83184d]/15 text-[#83184d] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-[13px] font-bold text-[#102038]">
                {t.mobileFootnote}
              </span>
            </div>
          </div>

          {/* Right Column: Floating Contact Card + iPhone Keypad Mockup */}
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Floating Contacts in Sync Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200/90 text-left max-w-[210px] space-y-2 sm:self-center order-2 sm:order-1">
              <div className="w-9 h-9 rounded-xl bg-[#698a22]/15 text-[#698a22] flex items-center justify-center">
                <User className="w-4.5 h-4.5" />
              </div>
              <div className="font-bold text-[14px] text-[#102038]">
                {t.mobileSyncCard.title}
              </div>
              <p className="text-[11.5px] text-slate-500 leading-snug">
                {t.mobileSyncCard.desc}
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10.5px] font-semibold border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t.mobileSyncCard.badge}
                </span>
              </div>
            </div>

            {/* Realistic iPhone Hardware Frame with Keypad */}
            <div className="w-[280px] bg-[#0b121e] rounded-[48px] p-2.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border-[3.5px] border-slate-700/80 order-1 sm:order-2">
              {/* Inner White Screen */}
              <div className="w-full bg-white rounded-[40px] overflow-hidden flex flex-col justify-between h-[540px] border border-slate-200 text-slate-900 p-4 relative">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-900 px-2 pt-0.5">
                  <span>9:41</span>
                  <div className="w-16 h-3.5 bg-black rounded-full mx-auto -mt-0.5 flex items-center justify-end pr-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#1c1c1e]" />
                  </div>
                  <div className="flex items-center gap-1 text-slate-900">
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Header */}
                <div className="pt-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold text-[#102038]">
                      {t.mobileDialerMockup.title}
                    </span>
                    <Bell className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] text-slate-500">
                      {t.mobileDialerMockup.greeting}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#698a22] font-semibold bg-[#eef5e6] px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#698a22]" />
                      {t.mobileDialerMockup.status}
                    </span>
                  </div>
                </div>

                {/* Number Display & Caller ID */}
                <div className="text-center py-2">
                  <div className="text-[19px] font-mono font-extrabold text-[#102038] tracking-wide flex items-center justify-center gap-2">
                    <span>{dialedNumber || "Enter number"}</span>
                    {dialedNumber && (
                      <button
                        onClick={handleDelete}
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <Delete className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {t.mobileDialerMockup.callerIdLabel}
                  </div>
                </div>

                {/* 12-Key Numeric Keypad */}
                <div className="grid grid-cols-3 gap-2 px-1">
                  {keys.map((k) => (
                    <button
                      key={k.num}
                      type="button"
                      onClick={() => handleKeyPress(k.num)}
                      className="h-11 rounded-2xl bg-slate-50 hover:bg-[#eef5e6] active:bg-[#dbe9cc] text-[#102038] font-bold flex flex-col items-center justify-center transition border border-slate-200/60 cursor-pointer shadow-2xs"
                    >
                      <span className="text-[15px] leading-tight">{k.num}</span>
                      {k.sub && (
                        <span className="text-[8px] text-slate-400 leading-none">
                          {k.sub}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Big Call Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="button"
                    className="w-13 h-13 rounded-full bg-[#83184d] hover:bg-[#721240] text-white flex items-center justify-center shadow-lg shadow-[#83184d]/30 active:scale-95 transition cursor-pointer"
                  >
                    <PhoneCall className="w-6 h-6" />
                  </button>
                </div>

                {/* Bottom iOS Navigation Tabs */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-around text-[10.5px] font-semibold text-slate-400">
                  <button
                    onClick={() => setActiveTab("dialer")}
                    className={`flex flex-col items-center cursor-pointer ${
                      activeTab === "dialer"
                        ? "text-[#83184d]"
                        : "hover:text-slate-700"
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.mobileDialerMockup.tabDialer}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("contacts")}
                    className={`flex flex-col items-center cursor-pointer ${
                      activeTab === "contacts"
                        ? "text-[#83184d]"
                        : "hover:text-slate-700"
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>{t.mobileDialerMockup.tabContacts}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`flex flex-col items-center cursor-pointer ${
                      activeTab === "history"
                        ? "text-[#83184d]"
                        : "hover:text-slate-700"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t.mobileDialerMockup.tabHistory}</span>
                  </button>
                </div>

                {/* Home Indicator */}
                <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto -mb-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDialerSection;

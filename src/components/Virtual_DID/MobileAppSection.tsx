import React from "react";
import {
  Phone,
  MessageSquare,
  Clock,
  MessageSquareCheck,
  Bell,
  Layers,
  BookUser,
  PhoneIncoming,
  PhoneMissed,
  ChevronDown,
  User,
  Settings,
  Wifi,
  Battery,
} from "lucide-react";
import type { VirtualDidTranslation } from "../../data/virtualDidTranslations";

interface MobileAppSectionProps {
  t: VirtualDidTranslation;
}

export const MobileAppSection: React.FC<MobileAppSectionProps> = ({ t }) => {
  return (
    <section className="w-full bg-[#f8faf6] py-16 sm:py-24 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#698a22]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              {t.mobileBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-tight">
            {t.mobileTitle}
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed">
            {t.mobileSubtitle}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Dark Container with Dual iPhone Mockups */}
          <div className="lg:col-span-6 bg-[#132238] rounded-[36px] p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#698a22]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#83184d]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Dual iPhone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10 items-center justify-center">
              {/* iPhone 1: Calls Screen */}
              <div className="relative mx-auto w-full max-w-[260px] bg-[#0b121e] rounded-[44px] p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border-[3px] border-slate-700/80">
                {/* iPhone Inner Screen */}
                <div className="w-full bg-white text-slate-900 rounded-[36px] overflow-hidden flex flex-col justify-between h-[490px] border border-slate-200">
                  {/* Top Status Bar & Dynamic Island */}
                  <div className="px-5 pt-3 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-900">
                    <span>9:41</span>
                    <div className="w-[72px] h-[18px] bg-black rounded-full mx-auto -mt-0.5 flex items-center justify-end pr-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] border border-slate-800" />
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-900">
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className="px-4 py-2 text-left space-y-3 flex-1 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[13.5px] font-bold text-[#102038]">
                        iNet Global
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#eef5e6] border border-[#698a22]/30 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#698a22]" />
                      </div>
                    </div>

                    {/* Title & Selector */}
                    <div>
                      <h4 className="text-[18px] font-extrabold text-[#102038] tracking-tight">
                        Your numbers
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono font-medium">
                        <span>+1 212 555 0198</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>

                    {/* Active DID Highlight Card */}
                    <div className="bg-[#eef5e6] rounded-2xl p-3 border border-[#698a22]/25 space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#698a22]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#698a22]" />
                        <span>New York · United States</span>
                      </div>
                      <div className="text-[14px] font-mono font-extrabold text-[#102038]">
                        +1 212 555 0198
                      </div>
                      <div className="text-[10px] text-[#698a22] font-medium">
                        Ready for calls & SMS
                      </div>
                    </div>

                    {/* Recent Calls Section */}
                    <div className="pt-1">
                      <div className="text-[12px] font-bold text-[#102038] mb-2">
                        Recent calls
                      </div>
                      <div className="space-y-2">
                        {/* Row 1 */}
                        <div className="flex items-center justify-between text-[11.5px] pb-1.5 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <PhoneIncoming className="w-3.5 h-3.5 text-[#698a22] shrink-0" />
                            <div>
                              <div className="font-bold text-[#102038] leading-tight">
                                Jordan Davis
                              </div>
                              <div className="text-[9.5px] text-slate-400 leading-tight">
                                Incoming · 4 min
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">
                            10:28
                          </span>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-center justify-between text-[11.5px] pb-1.5 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <PhoneMissed className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                            <div>
                              <div className="font-bold text-[#102038] leading-tight">
                                Alex Morgan
                              </div>
                              <div className="text-[9.5px] text-rose-500 leading-tight">
                                Missed call
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">
                            09:46
                          </span>
                        </div>

                        {/* Row 3 */}
                        <div className="flex items-center justify-between text-[11.5px]">
                          <div className="flex items-center gap-2">
                            <PhoneIncoming className="w-3.5 h-3.5 text-[#698a22] shrink-0" />
                            <div>
                              <div className="font-bold text-[#102038] leading-tight">
                                Support team
                              </div>
                              <div className="text-[9.5px] text-slate-400 leading-tight">
                                Incoming · 12 min
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Yesterday
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* iOS Tab Bar */}
                  <div className="px-5 py-2.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-[#698a22]">
                    <div className="flex flex-col items-center">
                      <Phone className="w-4 h-4" />
                      <span className="w-1 h-1 rounded-full bg-[#698a22] mt-0.5" />
                    </div>
                    <MessageSquare className="w-4 h-4 text-slate-400 hover:text-[#698a22]" />
                    <User className="w-4 h-4 text-slate-400 hover:text-[#698a22]" />
                    <Settings className="w-4 h-4 text-slate-400 hover:text-[#698a22]" />
                  </div>
                </div>
              </div>

              {/* iPhone 2: SMS Inbox Screen */}
              <div className="relative mx-auto w-full max-w-[260px] bg-[#0b121e] rounded-[44px] p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border-[3px] border-slate-700/80">
                {/* iPhone Inner Screen */}
                <div className="w-full bg-white text-slate-900 rounded-[36px] overflow-hidden flex flex-col justify-between h-[490px] border border-slate-200">
                  {/* Top Status Bar & Dynamic Island */}
                  <div className="px-5 pt-3 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-900">
                    <span>9:41</span>
                    <div className="w-[72px] h-[18px] bg-black rounded-full mx-auto -mt-0.5 flex items-center justify-end pr-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] border border-slate-800" />
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-900">
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className="px-4 py-2 text-left space-y-3 flex-1 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[13.5px] font-bold text-[#102038]">
                        iNet Global
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#eef5e6] border border-[#698a22]/30 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#698a22]" />
                      </div>
                    </div>

                    {/* Title & Selector */}
                    <div>
                      <h4 className="text-[18px] font-extrabold text-[#102038] tracking-tight">
                        SMS Inbox
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono font-medium">
                        <span>+1 212 555 0198</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>

                    {/* SMS Message List */}
                    <div className="space-y-2 pt-1">
                      {/* Thread 1 */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-[#eef5e6]/40 border border-slate-100 transition">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-bold text-[#102038]">
                            Acme Support
                          </span>
                          <span className="text-[9.5px] text-slate-400 font-mono">
                            10:24
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-600 mt-0.5 line-clamp-1">
                          Your appointment is confirmed
                        </p>
                      </div>

                      {/* Thread 2 */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-[#eef5e6]/40 border border-slate-100 transition">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-bold text-[#102038] font-mono">
                            +44 7700 900123
                          </span>
                          <span className="text-[9.5px] text-slate-400 font-mono">
                            09:52
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-600 mt-0.5 line-clamp-1">
                          Thanks, see you tomorrow!
                        </p>
                      </div>

                      {/* Thread 3 */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-[#eef5e6]/40 border border-slate-100 transition">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-bold text-[#102038]">
                            Service Alerts
                          </span>
                          <span className="text-[9.5px] text-slate-400 font-mono">
                            08:30
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-600 mt-0.5 line-clamp-1">
                          Your service is now active.
                        </p>
                      </div>

                      {/* Thread 4 */}
                      <div className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-[#eef5e6]/40 border border-slate-100 transition">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-bold text-[#102038]">
                            Alex Morgan
                          </span>
                          <span className="text-[9.5px] text-slate-400 font-mono">
                            Yesterday
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-600 mt-0.5 line-clamp-1">
                          Can we reschedule our call?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* iOS Tab Bar */}
                  <div className="px-5 py-2.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-[#698a22]">
                    <Phone className="w-4 h-4 text-slate-400 hover:text-[#698a22]" />
                    <div className="flex flex-col items-center">
                      <MessageSquare className="w-4 h-4" />
                      <span className="w-1 h-1 rounded-full bg-[#698a22] mt-0.5" />
                    </div>
                    <User className="w-4 h-4 text-slate-400 hover:text-[#698a22]" />
                    <Settings className="w-4 h-4 text-slate-400 hover:text-[#698a22]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Slogan */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 text-center text-[13px] text-slate-400 font-medium">
              {t.mobileFooter}
            </div>
          </div>

          {/* Right Column: App Features 2-Column Grid */}
          <div className="lg:col-span-6 text-left space-y-7">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#102038] tracking-tight">
              {t.mobileFeaturesTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {/* Feature 1: Incoming Calls */}
              <div className="space-y-1.5">
                <Phone className="w-5 h-5 text-[#698a22] mb-2" />
                <h4 className="text-[15px] font-bold text-[#102038]">
                  Incoming Calls
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Receive calls to your DID directly through the mobile app.
                </p>
              </div>

              {/* Feature 2: SMS Inbox */}
              <div className="space-y-1.5">
                <MessageSquare className="w-5 h-5 text-[#698a22] mb-2" />
                <h4 className="text-[15px] font-bold text-[#102038]">
                  SMS Inbox
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Receive incoming SMS messages in a secure, organized inbox.
                </p>
              </div>

              {/* Feature 3: Call History */}
              <div className="space-y-1.5">
                <Clock className="w-5 h-5 text-[#698a22] mb-2" />
                <h4 className="text-[15px] font-bold text-[#102038]">
                  Call History
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  View incoming, missed, and answered calls.
                </p>
              </div>

              {/* Feature 4: SMS History */}
              <div className="space-y-1.5">
                <MessageSquareCheck className="w-5 h-5 text-[#698a22] mb-2" />
                <h4 className="text-[15px] font-bold text-[#102038]">
                  SMS History
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Access previous messages and conversations.
                </p>
              </div>

              {/* Feature 5: Push Notifications */}
              <div className="space-y-1.5">
                <Bell className="w-5 h-5 text-[#698a22] mb-2" />
                <h4 className="text-[15px] font-bold text-[#102038]">
                  Push Notifications
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Get instant notifications when a call or SMS arrives.
                </p>
              </div>

              {/* Feature 6: Multiple DIDs */}
              <div className="space-y-1.5">
                <Layers className="w-5 h-5 text-[#698a22] mb-2" />
                <h4 className="text-[15px] font-bold text-[#102038]">
                  Multiple DIDs
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Manage multiple virtual numbers from a single account.
                </p>
              </div>

              {/* Feature 7: Contact Management */}
              <div className="space-y-1.5 sm:col-span-2">
                <BookUser className="w-5 h-5 text-[#698a22] mb-2" />
                <h4 className="text-[15px] font-bold text-[#102038]">
                  Contact Management
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed max-w-sm">
                  Save and organize frequently contacted numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;

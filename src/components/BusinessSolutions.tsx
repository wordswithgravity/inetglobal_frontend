import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Building2,
  Megaphone,
  Bell,
  AlertTriangle,
  Receipt,
  Check,
  ArrowRight,
  ArrowLeft,
  User,
  MessageSquare,
  MapPin,
} from "lucide-react";

interface SolutionItem {
  id: string;
  name: string;
  tabIcon: React.ReactNode;
  tagline: string;
  title: string;
  description: string;
  features: string[];
  customerStatus: string;
  notification: {
    header: string;
    line1?: string;
    line2?: string;
    body?: string;
    bodyBold?: string;
    validTime?: string;
    time: string;
  };
  phoneScreen: {
    backTitle: string;
    icon: React.ReactNode;
    badge?: string;
    title: string;
    subtitle: string;
    bankingDetails?: {
      amount: string;
      status: string;
      reference: string;
    };
    infoCard?: {
      label: string;
      value: string;
    };
    otpDigits?: string[];
    buttonText: string;
    subNote: string;
  };
}

const phoneIconCls = "w-[22px] h-[22px] text-[#55801a]";
const tabIconCls = "w-[18px] h-[18px]";

const solutions: SolutionItem[] = [
  {
    id: "otp",
    name: "OTP Auth",
    tabIcon: <ShieldCheck className={tabIconCls} />,
    tagline: "Secure. Fast. Reliable.",
    title: "OTP Authentication",
    description:
      "Deliver one-time passwords quickly and securely for registrations, logins, account recovery, and payment verification across global networks.",
    features: [
      "Fast and reliable OTP delivery",
      "Secure multi-channel authentication",
      "Global reach with intelligent routing",
    ],
    customerStatus: "Identity Verified",
    notification: {
      header: "iNet Global",
      body: "Your verification code is",
      bodyBold: "53193",
      validTime: "Valid for 5 minutes",
      time: "10:24 AM",
    },
    phoneScreen: {
      backTitle: "Authentication",
      icon: <ShieldCheck className={phoneIconCls} />,
      title: "Verify your identity",
      subtitle:
        "We've sent a verification code to your registered mobile number.",
      otpDigits: ["5", "3", "1", "9", "3"],
      buttonText: "Verify and Continue",
      subNote: "Didn't receive the code?\nResend code in 00:45",
    },
  },
  {
    id: "banking",
    name: "Banking",
    tabIcon: <Building2 className={tabIconCls} />,
    tagline: "Secure. Connected. Trusted",
    title: "Banking & Financial Services",
    description:
      "Enable secure and reliable customer communication with transactional SMS, payment alerts, and other critical messages designed for banks and financial institutions.",
    features: [
      "Secure OTP and transaction alerts",
      "Reliable high-volume messaging",
      "Real-time customer notifications",
    ],
    customerStatus: "Transaction received",
    notification: {
      header: "Transaction Alert",
      body: "Your payment of $250.00 was completed successfully.",
      time: "10:24 AM",
    },
    phoneScreen: {
      backTitle: "Banking",
      icon: <Building2 className={phoneIconCls} />,
      title: "Transaction Successful",
      subtitle: "Your payment of $250.00 has been processed successfully.",
      bankingDetails: {
        amount: "$250.00",
        status: "Completed",
        reference: "TXN-482190",
      },
      buttonText: "View Transaction",
      subNote: "✓  Securely delivered",
    },
  },
  {
    id: "marketing",
    name: "Marketing",
    tabIcon: <Megaphone className={tabIconCls} />,
    tagline: "Reach. Engage. Convert",
    title: "Marketing Communications",
    description:
      "Connect with customers through targeted messaging campaigns that deliver promotions, offers, and brand communications at the right time.",
    features: [
      "Targeted customer campaigns",
      "High-volume SMS delivery",
      "Personalized customer engagement",
    ],
    customerStatus: "Offer delivered",
    notification: {
      header: "Marketing Campaign",
      line1: "20% OFF",
      line2: "Your exclusive offer is waiting.",
      time: "10:24 AM",
    },
    phoneScreen: {
      backTitle: "Marketing",
      icon: <Megaphone className={phoneIconCls} />,
      badge: "New Offer",
      title: "Special Offer Just for You",
      subtitle: "Get 20% off your next purchase.\nOffer valid until June 30.",
      buttonText: "Shop Now",
      subNote: "✓  Campaign delivered",
    },
  },
  {
    id: "reminders",
    name: "Reminders",
    tabIcon: <Bell className={tabIconCls} />,
    tagline: "Timely. Reliable. Automated",
    title: "Customer Reminders",
    description:
      "Keep customers informed with automated reminders for appointments, payments, renewals, bookings, and important upcoming events.",
    features: [
      "Automated reminder messaging",
      "Timely delivery across channels",
      "Reduce missed appointments and payments",
    ],
    customerStatus: "Reminder received",
    notification: {
      header: "Reminder",
      line1: "Appointment Tomorrow",
      line2: "Your appointment is scheduled for June 30",
      time: "10:24 AM",
    },
    phoneScreen: {
      backTitle: "Reminders",
      icon: <Bell className={phoneIconCls} />,
      title: "Your Appointment is Tomorrow",
      subtitle: "You have an appointment scheduled for 10:30 AM, June 30",
      infoCard: {
        label: "Location",
        value: "City Medical Center",
      },
      buttonText: "View Details",
      subNote: "Reply 1 to confirm",
    },
  },
  {
    id: "emergency",
    name: "Emergency",
    tabIcon: <AlertTriangle className={tabIconCls} />,
    tagline: "Critical. Fast. Always Connected",
    title: "Emergency Communications",
    description:
      "Deliver critical alerts quickly when every second matters, helping organizations communicate important information during urgent situations.",
    features: [
      "Rapid emergency notifications",
      "High-priority message delivery",
      "Reliable communication at scale",
    ],
    customerStatus: "Alert received",
    notification: {
      header: "Emergency Alert",
      line1: "Important Alert",
      line2: "Please check the latest safety information.",
      time: "10:24 AM",
    },
    phoneScreen: {
      backTitle: "Emergency",
      icon: <AlertTriangle className={phoneIconCls} />,
      title: "Important Safety Alert",
      subtitle:
        "Severe weather has been reported in your area. Please follow local safety instructions.",
      infoCard: {
        label: "Affected Area",
        value: "San Francisco, CA",
      },
      buttonText: "View Alert",
      subNote: "Emergency notification",
    },
  },
  {
    id: "order",
    name: "Order Alert",
    tabIcon: <Receipt className={tabIconCls} />,
    tagline: "Inform. Track. Deliver",
    title: "Order Alerts",
    description:
      "Keep customers updated throughout their order journey with real-time notifications for confirmations, dispatch, delivery, and status changes.",
    features: [
      "Real-time order notifications",
      "Delivery and status updates",
      "Seamless customer communication",
    ],
    customerStatus: "Order update received",
    notification: {
      header: "Order Update",
      line1: "Order #IN482190",
      line2: "Your package has been shipped.",
      time: "10:24 AM",
    },
    phoneScreen: {
      backTitle: "Order Alert",
      icon: <Receipt className={phoneIconCls} />,
      title: "Your Order Has Shipped",
      subtitle: "Order #IN482190 is on its way.",
      infoCard: {
        label: "Estimated Delivery",
        value: "Tomorrow, 2:00 - 5:00 PM",
      },
      buttonText: "Track Order",
      subNote: "Delivery notification",
    },
  },
];

// Fixed design stage (matches the screenshot); scaled down on smaller screens
const STAGE_W = 605;
const STAGE_H = 427;

export const BusinessSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("otp");
  const current = solutions.find((s) => s.id === activeTab) || solutions[0];
  const { notification: n, phoneScreen: p } = current;

  // Scale the fixed stage to fit the available panel width
  const panelRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const s = Math.min(1, w / STAGE_W);
      setScale(s);
      setOffsetX((w - STAGE_W * s) / 2);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f3f5f0] py-16 px-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto space-y-10">
        {/* Section Header (centered) */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#5f8a1a]" />
            <span className="text-[12px] font-semibold tracking-wide text-[#5f8a1a] uppercase">
              Business Solutions
            </span>
          </div>

          <h2 className="mt-3 text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#12243d] tracking-tight leading-[1.2]">
            Solutions For Every Customer Journey
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] text-[#5b6878] leading-[24px] max-w-[690px]">
            Connect, engage and communicate with customers through reliable
            voice, messaging and omnichannel solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 w-full">
          {solutions.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full h-[50px] sm:h-[54px] px-5 sm:px-6 flex items-center justify-center gap-2.5 sm:gap-3 rounded-full text-[14.5px] sm:text-[15.5px] font-medium border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#12243d] text-white border-[#6f9a1f] shadow-md shadow-slate-900/10"
                    : "bg-white/80 sm:bg-transparent text-[#364152] border-[#d3d9d0] hover:bg-white hover:border-[#bcc7b6]"
                }`}
              >
                <span
                  className={isActive ? "text-[#7fae2a]" : "text-[#6b7280]"}
                >
                  {tab.tabIcon}
                </span>
                <span className="truncate">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Card */}
        <div className="bg-white rounded-[30px] border border-[#d9ded6] p-6 sm:p-8 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-8 lg:gap-14 items-center">
            {/* ===== Left: dark panel ===== */}
            <div
              ref={panelRef}
              className="relative w-full rounded-[22px] bg-[#132641] overflow-hidden shadow-md"
              style={{ height: STAGE_H * scale }}
            >
              <div
                className="absolute top-0 left-0"
                style={{
                  width: STAGE_W,
                  height: STAGE_H,
                  transformOrigin: "top left",
                  transform: `translateX(${offsetX}px) scale(${scale})`,
                }}
              >
                {/* Dotted connectors */}
                <svg
                  className="absolute inset-0 pointer-events-none z-0"
                  width={STAGE_W}
                  height={STAGE_H}
                  viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
                  fill="none"
                >
                  <path
                    d="M129 116 V261 H224"
                    stroke="white"
                    strokeOpacity="0.7"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                  <path
                    d="M529 112 Q566 135 559 181 C556 205 530 215 512 245 C498 270 485 275 475 290 C462 310 445 320 423 322"
                    stroke="white"
                    strokeOpacity="0.7"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                  <circle cx="129" cy="151" r="4" fill="white" />
                  <circle cx="559" cy="181" r="4" fill="white" />
                </svg>

                {/* Notification card */}
                <div
                  className="absolute z-30 bg-white rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  style={{ left: 32, top: 24, width: 211 }}
                >
                  <div className="flex gap-[10px] px-3 pt-[13px] pb-[10px]">
                    <span className="w-[22px] h-[22px] shrink-0 rounded-full bg-[#e8f1d6] flex items-center justify-center -mt-px">
                      <MessageSquare className="w-[11px] h-[11px] text-[#5f8a1a] fill-[#5f8a1a]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-[#1f2937] leading-[16px]">
                        {n.header}
                      </p>

                      {n.line1 && (
                        <p className="mt-1 text-[11px] font-semibold text-[#1f2937] leading-[15px]">
                          {n.line1}
                        </p>
                      )}
                      {n.line2 && (
                        <p className="text-[10.5px] text-[#4b5563] leading-[15px]">
                          {n.line2}
                        </p>
                      )}
                      {n.body && (
                        <p className="mt-1 text-[11px] text-[#374151] leading-[16px]">
                          {n.body}
                          {n.bodyBold && (
                            <span className="ml-1 text-[13px] font-semibold text-[#4b5563]">
                              {n.bodyBold}
                            </span>
                          )}
                        </p>
                      )}
                      {n.validTime && (
                        <p className="text-[11px] text-[#374151] leading-[16px]">
                          {n.validTime}
                        </p>
                      )}
                      <p className="mt-1 text-[8px] text-[#6b7280] leading-[10px]">
                        {n.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="absolute z-10"
                  style={{ left: 227, top: 16, width: 194, height: 396 }}
                >
                  {/* side buttons */}
                  <span className="absolute -left-[2px] top-[72px] w-[3px] h-[14px] rounded-l bg-[#5b4a61]" />
                  <span className="absolute -left-[2px] top-[100px] w-[3px] h-[34px] rounded-l bg-[#5b4a61]" />
                  <span className="absolute -left-[2px] top-[142px] w-[3px] h-[34px] rounded-l bg-[#5b4a61]" />
                  <span className="absolute -right-[2px] top-[110px] w-[3px] h-[52px] rounded-r bg-[#5b4a61]" />

                  <div className="absolute inset-0 rounded-[34px] border-[3px] border-[#5b4a61] bg-[#1a1520] p-[5px] shadow-[0_14px_36px_rgba(0,0,0,0.4)]">
                    {/* Screen */}
                    <div className="relative w-full h-full rounded-[27px] bg-white overflow-hidden select-none">
                      {/* Dynamic island */}
                      <span className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[43px] h-[13px] rounded-full bg-black" />

                      {/* App bar */}
                      <div className="pt-[34px] px-[14px] flex items-center gap-1.5 text-[10px] font-medium text-[#1f2937] leading-4">
                        <ArrowLeft className="w-3 h-3" strokeWidth={2} />
                        <span>{p.backTitle}</span>
                      </div>

                      {/* Body */}
                      <div className="flex flex-col items-center px-[13px] text-center">
                        {/* Icon with soft halo */}
                        <div className="mt-5 w-[70px] h-[70px] rounded-full bg-[#f1f7e3] flex items-center justify-center">
                          <div className="w-[48px] h-[48px] rounded-full bg-[#dcebb8] flex items-center justify-center">
                            {p.icon}
                          </div>
                        </div>

                        {p.badge && (
                          <span className="mt-2 text-[9px] font-medium text-[#6b7280]">
                            {p.badge}
                          </span>
                        )}

                        <h4
                          className={`${
                            p.badge ? "mt-0.5" : "mt-[11px]"
                          } text-[12px] font-bold text-[#1f2937] leading-[15px]`}
                        >
                          {p.title}
                        </h4>
                        <p className="mt-[3px] px-[6px] text-[9px] leading-[14.5px] text-[#9aa3af] whitespace-pre-line">
                          {p.subtitle}
                        </p>

                        {/* OTP boxes */}
                        {p.otpDigits && (
                          <div className="mt-5 flex justify-center gap-2">
                            {p.otpDigits.map((digit, i) => (
                              <span
                                key={i}
                                className="w-6 h-[23px] rounded-[4px] bg-[#cbd2dc] flex items-center justify-center text-[12px] font-medium text-[#374151]"
                              >
                                {digit}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Banking details */}
                        {p.bankingDetails && (
                          <div className="mt-3.5 w-full bg-[#f1f5f9] rounded-lg p-2 text-left text-[9px] space-y-1 border border-slate-200/60">
                            <div className="text-slate-400 font-medium text-[8.5px]">
                              Transaction Details
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-500">Amount</span>
                              <span className="font-bold text-slate-800">
                                {p.bankingDetails.amount}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-500">Status</span>
                              <span className="px-1 rounded bg-[#dcfce7] text-[#15803d] text-[8px] font-semibold">
                                {p.bankingDetails.status}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[8px]">
                              <span className="text-slate-500">Reference</span>
                              <span className="text-slate-700 font-medium">
                                {p.bankingDetails.reference}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Info card */}
                        {p.infoCard && (
                          <div className="mt-3.5 w-full bg-[#e5eaf0] rounded-lg p-2 text-left border border-slate-200/50">
                            <div className="flex items-center gap-1 text-slate-500 font-medium text-[8.5px]">
                              <MapPin className="w-2.5 h-2.5 text-slate-400" />
                              <span>{p.infoCard.label}</span>
                            </div>
                            <div className="font-bold text-slate-800 text-[9.5px] pl-3.5">
                              {p.infoCard.value}
                            </div>
                          </div>
                        )}

                        {/* CTA */}
                        <button
                          className={`${
                            p.otpDigits ? "mt-[18px]" : "mt-3.5"
                          } w-[151px] h-[23px] rounded-full bg-[#668c1d] hover:bg-[#587919] text-white text-[9px] font-semibold flex items-center justify-center gap-1 transition cursor-pointer`}
                        >
                          <span>{p.buttonText}</span>
                          <ArrowRight
                            className="w-2.5 h-2.5"
                            strokeWidth={2.5}
                          />
                        </button>

                        <p className="mt-[7px] text-[8px] leading-[13px] text-[#9aa3af] whitespace-pre-line">
                          {p.subNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivered pill */}
                <div
                  className="absolute z-30 flex items-center gap-2 bg-white rounded-full shadow-lg"
                  style={{
                    left: 92,
                    top: 310,
                    width: 126,
                    height: 26,
                    paddingLeft: 8,
                  }}
                >
                  <span className="w-[15px] h-[15px] rounded-full bg-[#dfeccb] flex items-center justify-center">
                    <Check
                      className="w-[9px] h-[9px] text-[#5f8a1a]"
                      strokeWidth={3.5}
                    />
                  </span>
                  <span className="text-[11px] font-semibold text-[#1f2937] whitespace-nowrap">
                    Delivered - 1.2s
                  </span>
                </div>

                {/* Customer node */}
                <div
                  className="absolute z-30 flex flex-col items-center"
                  style={{ left: 449, top: 67, width: 100 }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-[#c6cacf] flex items-center justify-center">
                    <User
                      className="w-6 h-6 text-[#7b8087]"
                      fill="#7b8087"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="mt-[7px] text-[12px] font-medium text-white leading-4">
                    Customer
                  </span>
                  <span className="mt-0.5 text-[10px] font-medium text-[#8fb531] text-center leading-[13px] whitespace-nowrap">
                    {current.customerStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* ===== Right: details ===== */}
            <div className="flex flex-col">
              <span className="text-[12px] font-semibold text-[#658a1f] leading-4">
                {current.tagline}
              </span>

              <h3 className="mt-2 text-[26px] font-semibold text-[#12243d] tracking-tight leading-[32px]">
                {current.title}
              </h3>

              <p className="mt-1 text-[16px] text-[#5b6878] leading-[24px]">
                {current.description}
              </p>

              <ul className="mt-5 space-y-[11px]">
                {current.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-[10px] text-[14px] text-[#4b5563] leading-[18px]"
                  >
                    <Check
                      className="w-3.5 h-3.5 text-[#658a1f] shrink-0"
                      strokeWidth={2}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-[30px]">
                <a
                  href="#explore-solution"
                  className="inline-flex items-center justify-center gap-2 w-[180px] h-[45px] rounded-full bg-[#8b1a5e] hover:bg-[#751450] text-white text-[14.5px] font-medium transition duration-150 shadow-lg shadow-[#8b1a5e]/30 active:scale-[0.98]"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;

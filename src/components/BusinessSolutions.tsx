import React, { useState } from "react";
import {
  Shield,
  Building2,
  Megaphone,
  Bell,
  AlertTriangle,
  Receipt,
  Check,
  ArrowRight,
  User,
  MessageSquare,
  MapPin,
} from "lucide-react";
import Iphone from "./Iphone";

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
      icon: "pin";
      label: string;
      value: string;
    };
    otpDigits?: string[];
    buttonText: string;
    subNote: string;
  };
}

const solutions: SolutionItem[] = [
  {
    id: "otp",
    name: "OTP Auth",
    tabIcon: <Shield className="w-4 h-4" />,
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
      body: "Your verification code is 53193",
      validTime: "Valid for 5 minutes",
      time: "10:24 AM",
    },
    phoneScreen: {
      backTitle: "Authentication",
      icon: <Shield className="w-5 h-5 text-[#658a1f]" />,
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
    tabIcon: <Building2 className="w-4 h-4" />,
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
      icon: <Building2 className="w-5 h-5 text-[#658a1f]" />,
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
    tabIcon: <Megaphone className="w-4 h-4" />,
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
      icon: <Megaphone className="w-5 h-5 text-[#658a1f]" />,
      badge: "New Offer",
      title: "Special Offer Just for You",
      subtitle:
        "Get 20% off your next purchase.\nOffer valid until June 30.",
      buttonText: "Shop Now",
      subNote: "✓  Campaign delivered",
    },
  },
  {
    id: "reminders",
    name: "Reminders",
    tabIcon: <Bell className="w-4 h-4" />,
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
      icon: <Bell className="w-5 h-5 text-[#658a1f]" />,
      title: "Your Appointment is Tomorrow",
      subtitle:
        "You have an appointment scheduled for 10:30 AM, June 30",
      infoCard: {
        icon: "pin",
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
    tabIcon: <AlertTriangle className="w-4 h-4" />,
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
      icon: <AlertTriangle className="w-5 h-5 text-[#658a1f]" />,
      title: "Important Safety Alert",
      subtitle:
        "Severe weather has been reported in your area. Please follow local safety instructions.",
      infoCard: {
        icon: "pin",
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
    tabIcon: <Receipt className="w-4 h-4" />,
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
      icon: <Receipt className="w-5 h-5 text-[#658a1f]" />,
      title: "Your Order Has Shipped",
      subtitle: "Order #IN482190 is on its way.",
      infoCard: {
        icon: "pin",
        label: "Estimated Delivery",
        value: "Tomorrow, 2:00 - 5:00 PM",
      },
      buttonText: "Track Order",
      subNote: "Delivery notification",
    },
  },
];

export const BusinessSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("otp");

  const current = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section className="w-full bg-[#f8faf7] py-12 lg:py-16 px-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]"></span>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              BUSINESS SOLUTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#102038] tracking-tight leading-[1.15]">
            Solutions For Every Customer Journey
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#556578] leading-relaxed max-w-2xl">
            Connect, engage and communicate with customers through reliable
            voice, messaging and omnichannel solutions.
          </p>
        </div>

        {/* Full-width Left-to-Right Aligned Tab Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 w-full">
          {solutions.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 rounded-full text-[13.5px] font-medium transition-all duration-200 cursor-pointer w-full text-center ${
                  isActive
                    ? "bg-[#102038] text-white ring-1.5 ring-[#739b20] shadow-md shadow-slate-900/10"
                    : "bg-[#edf2eb] text-[#374151] hover:bg-[#e2eadf] border border-[#dce5d8]"
                }`}
              >
                <span className={isActive ? "text-[#84cc16]" : "text-slate-500"}>
                  {tab.tabIcon}
                </span>
                <span className="truncate">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Container Card */}
        <div className="bg-white rounded-[28px] p-5 sm:p-7 lg:p-8 border border-gray-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Mockup Graphic Showcase (7 cols) */}
            <div className="lg:col-span-7 bg-[#132238] rounded-[24px] p-4 sm:p-6 relative overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[400px]">
              
              {/* Background Network Glow & Dotted Matrix */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Floating Left Notification Badge */}
              <div className="absolute top-4 left-3 sm:left-5 z-30 bg-white rounded-xl p-3 sm:p-3.5 shadow-xl border border-gray-100 max-w-[175px] sm:max-w-[200px] transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-4 h-4 rounded bg-[#eaf3de] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-2.5 h-2.5 text-[#658a1f]" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-900 truncate">
                    {current.notification.header}
                  </span>
                </div>

                {/* Line 1 */}
                {current.notification.line1 && (
                  <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                    {current.notification.line1}
                  </p>
                )}

                {/* Line 2 */}
                {current.notification.line2 && (
                  <p className="text-[10px] text-gray-600 leading-tight mt-0.5">
                    {current.notification.line2}
                  </p>
                )}

                {/* Simple body */}
                {current.notification.body && (
                  <p className="text-[10px] text-gray-700 leading-tight">
                    {current.notification.body}
                  </p>
                )}

                {/* Valid time subtext */}
                {current.notification.validTime && (
                  <p className="text-[9px] text-gray-400 mt-0.5">
                    {current.notification.validTime}
                  </p>
                )}

                <div className="mt-1 text-left text-[9px] text-gray-400">
                  <span>{current.notification.time}</span>
                </div>
              </div>

              {/* High-fidelity iPhone Mockup */}
              <div className="relative z-10 w-[205px] sm:w-[220px] drop-shadow-xl my-1">
                <Iphone className="w-full">
                  <div className="w-full h-full bg-white flex flex-col justify-between p-3.5 pt-8 text-center select-none overflow-y-auto">
                    
                    {/* Header bar */}
                    <div className="flex items-center text-[10px] text-gray-500 pb-1.5 border-b border-gray-100">
                      <span className="font-semibold text-gray-800">
                        ← {current.phoneScreen.backTitle}
                      </span>
                    </div>

                    {/* Main UI body */}
                    <div className="space-y-2 my-auto py-1">
                      
                      {/* Icon Badge */}
                      <div className="w-10 h-10 mx-auto rounded-full bg-[#eaf3de] flex items-center justify-center shadow-xs">
                        {current.phoneScreen.icon}
                      </div>

                      {/* Optional Top Badge for Marketing */}
                      {current.phoneScreen.badge && (
                        <span className="text-[10px] font-medium text-gray-500 block -mt-1">
                          {current.phoneScreen.badge}
                        </span>
                      )}

                      {/* Screen Title & Subtitle */}
                      <div>
                        <h4 className="text-[12px] font-bold text-gray-900 leading-tight">
                          {current.phoneScreen.title}
                        </h4>
                        <p className="text-[9px] text-gray-500 mt-0.5 leading-tight px-0.5 whitespace-pre-line">
                          {current.phoneScreen.subtitle}
                        </p>
                      </div>

                      {/* Banking Details Card */}
                      {current.phoneScreen.bankingDetails && (
                        <div className="bg-[#f1f5f9] rounded-lg p-2 text-left text-[9px] space-y-1 border border-slate-200/60">
                          <div className="text-slate-400 font-medium text-[8.5px]">
                            Transaction Details
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500">Amount</span>
                            <span className="font-bold text-slate-800">
                              {current.phoneScreen.bankingDetails.amount}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500">Status</span>
                            <span className="px-1 py-0.2 rounded bg-[#dcfce7] text-[#15803d] text-[8px] font-semibold">
                              {current.phoneScreen.bankingDetails.status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[8px]">
                            <span className="text-slate-500">Reference</span>
                            <span className="text-slate-700 font-medium">
                              {current.phoneScreen.bankingDetails.reference}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Location / Area / Delivery Info Card */}
                      {current.phoneScreen.infoCard && (
                        <div className="bg-[#cbd5e1]/30 rounded-lg p-2 text-left text-[9px] space-y-0.5 border border-slate-200/40">
                          <div className="flex items-center gap-1 text-slate-500 font-medium text-[8.5px]">
                            <MapPin className="w-2.5 h-2.5 text-slate-400" />
                            <span>{current.phoneScreen.infoCard.label}</span>
                          </div>
                          <div className="font-bold text-slate-800 text-[9.5px] pl-3.5">
                            {current.phoneScreen.infoCard.value}
                          </div>
                        </div>
                      )}

                      {/* Digits Boxes for OTP */}
                      {current.phoneScreen.otpDigits && (
                        <div className="flex justify-center gap-1 pt-0.5">
                          {current.phoneScreen.otpDigits.map((digit, i) => (
                            <span
                              key={i}
                              className="w-6 h-7 rounded bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-800 border border-gray-200"
                            >
                              {digit}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Phone CTA Button */}
                      <button className="w-full py-1.5 bg-[#658a1f] hover:bg-[#57771a] text-white text-[10px] font-medium rounded-md flex items-center justify-center gap-1 shadow-xs transition cursor-pointer">
                        <span>{current.phoneScreen.buttonText}</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>

                      {/* Subnote */}
                      <p className="text-[8px] text-gray-400 leading-tight whitespace-pre-line">
                        {current.phoneScreen.subNote}
                      </p>
                    </div>

                    <div className="h-0.5"></div>
                  </div>
                </Iphone>
              </div>

              {/* Bottom Floating Delivery Pill */}
              <div className="absolute bottom-4 left-3 sm:left-6 z-30 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-100 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-[#789d26] stroke-[3]" />
                <span className="text-[11px] font-semibold text-gray-800">
                  Delivered - 1.2s
                </span>
              </div>

              {/* Right Floating Customer Avatar Node */}
              <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-1">
                <div className="w-11 h-11 rounded-full bg-[#303f56] flex items-center justify-center border-2 border-[#84cc16]/40 shadow-lg">
                  <User className="w-5 h-5 text-slate-300" />
                </div>
                <span className="text-[11px] font-medium text-slate-300">Customer</span>
                <span className="text-[9px] font-bold text-[#84cc16] text-center max-w-[80px] leading-tight">
                  {current.customerStatus}
                </span>
              </div>

              {/* Dashed connector line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                fill="none"
              >
                <path
                  d="M 100 100 L 100 240 L 140 280"
                  stroke="#84cc16"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
                <path
                  d="M 240 200 L 280 220 L 320 180"
                  stroke="#84cc16"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Right Details Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[12.5px] font-semibold text-[#658a1f]">
                {current.tagline}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#102038] tracking-tight leading-tight">
                {current.title}
              </h3>

              <p className="text-[14px] text-[#556578] leading-relaxed">
                {current.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5 pt-1">
                {current.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-[13.5px] text-gray-700"
                  >
                    <Check className="w-3.5 h-3.5 text-[#789d26] stroke-[2.5] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#explore-solution"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#83184d] hover:bg-[#701240] text-white text-[14px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
                >
                  Explore Solution
                  <ArrowRight className="w-3.5 h-3.5" />
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

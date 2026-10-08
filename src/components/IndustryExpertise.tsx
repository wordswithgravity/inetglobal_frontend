import React, { useState } from "react";
import {
  Building2,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Compass,
  ChevronRight,
} from "lucide-react";

import ecommerceImg from "../assets/Ecommerce.png";
import educationImg from "../assets/Education.png";
import financialImg from "../assets/Financial.png";
import healthcareImg from "../assets/healthcare.png";
import travelImg from "../assets/travel.png";

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
  title: string;
  description: string;
}

const industries: IndustryItem[] = [
  {
    id: "banking",
    name: "Banking",
    icon: <Building2 className="w-5 h-5" />,
    image: financialImg,
    title: "Banking & Financial Services",
    description:
      "Utilize Tier-1 SMS and Voice infrastructure for high-security OTP authentication, real-time transaction alerts, and fraud prevention.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <HeartPulse className="w-5 h-5" />,
    image: healthcareImg,
    title: "Healthcare Communications",
    description:
      "Send critical patient appointment reminders, prescription updates, and healthcare notifications with enterprise reliability.",
  },
  {
    id: "ecommerce",
    name: "E-Commerce and Retail",
    icon: <ShoppingCart className="w-5 h-5" />,
    image: ecommerceImg,
    title: "E-Commerce and Retail",
    description:
      "Enhance customer experiences with SMS Notification Service updates, order confirmations and promotional campaigns.",
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="w-5 h-5" />,
    image: educationImg,
    title: "Education & Learning",
    description:
      "Keep students and parents informed with admission alerts, campus updates, attendance notices, and exam results across channels.",
  },
  {
    id: "travel",
    name: "Travel and Hospitality",
    icon: <Compass className="w-5 h-5" />,
    image: travelImg,
    title: "Travel and Hospitality",
    description:
      "Deliver real-time flight updates, booking confirmations, itinerary changes, and 24/7 guest support messaging worldwide.",
  },
];

export const IndustryExpertise: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("ecommerce");

  const activeIndex = industries.findIndex((item) => item.id === activeId);
  const activeIndustry = industries[activeIndex] || industries[2];

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto space-y-10 lg:space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#698a22]"></span>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
              INDUSTRY EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-[1.15]">
            Communication Solutions Built <br className="hidden sm:inline" />
            For Every Industry
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#556578] leading-relaxed max-w-2xl">
            Connect, engage and communicate with customers through reliable
            voice, messaging and omnichannel solutions.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Industry Tabs (5 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {industries.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-full text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#102038] text-white ring-1.5 ring-[#739b20] shadow-lg shadow-slate-900/10"
                      : "bg-white text-[#1e2d42] border border-[#e2e8df] hover:bg-[#f6faf4] hover:border-[#ccd9c7]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={isActive ? "text-[#84cc16]" : "text-slate-500"}
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? "text-[#84cc16] translate-x-1"
                        : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Layered Stacked 3D Cards Showcase (8 cols) */}
          <div className="lg:col-span-8 relative flex items-center justify-center min-h-[460px] lg:min-h-[520px] overflow-hidden py-4">
            
            {/* Background stack layer cards for visual depth */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {industries.map((item, idx) => {
                const offset = idx - activeIndex;
                if (offset === 0) return null; // Front card rendered separately

                // Calculate horizontal translate and scale for the stack
                const translateX = offset * 110;
                const scale = 0.9 - Math.abs(offset) * 0.05;
                const opacity = 0.45 - Math.abs(offset) * 0.12;
                const zIndex = 10 - Math.abs(offset);

                if (Math.abs(offset) > 2) return null;

                return (
                  <div
                    key={item.id}
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      opacity: opacity > 0 ? opacity : 0,
                      zIndex,
                    }}
                    className="absolute w-full max-w-[380px] sm:max-w-[420px] bg-white rounded-[32px] border border-slate-200/80 shadow-md p-6 pointer-events-none transition-all duration-500 blur-[0.5px]"
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#eef5eb]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2 opacity-80"
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h4 className="font-bold text-slate-800 text-lg">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Front Card */}
            <div className="relative z-20 w-full max-w-[440px] sm:max-w-[500px] bg-white rounded-[32px] border border-gray-100 shadow-2xl shadow-slate-200/70 p-6 sm:p-8 space-y-6 text-center transition-all duration-300">
              
              {/* Card Illustration Area */}
              <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-[#eff4eb] flex items-center justify-center p-3 border border-[#e2ebdE]">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="w-full h-full object-contain drop-shadow-sm transition-all duration-300"
                />
              </div>

              {/* Card Text Content */}
              <div className="space-y-3 px-2">
                <h3 className="text-2xl sm:text-[26px] font-bold text-[#102038] tracking-tight">
                  {activeIndustry.title}
                </h3>

                <p className="text-[14px] sm:text-[15px] text-[#556578] leading-relaxed max-w-md mx-auto">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Contact Us CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#83184d] hover:bg-[#701240] text-white text-[15px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
                >
                  Contact Us
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default IndustryExpertise;

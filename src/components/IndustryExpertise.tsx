import React, { useState, useEffect } from "react";
import {
  Building2,
  BriefcaseMedical,
  ShoppingCart,
  GraduationCap,
  Compass,
  ChevronRight,
} from "lucide-react";
import { theme } from "../theme";

import ecommerceImg from "../assets/Ecommerce.png";
import educationImg from "../assets/Education.png";
import financialImg from "../assets/Financial.png";
import healthcareImg from "../assets/healthcare.png";
import travelImg from "../assets/travel.png";

interface IndustryItem {
  id: string;
  name: string; // tab label
  icon: React.ReactNode;
  image: string;
  title: string; // card heading
  description: string;
}

const industries: IndustryItem[] = [
  {
    id: "banking",
    name: "Banking",
    icon: <Building2 className="w-[22px] h-[22px]" strokeWidth={1.75} />,
    image: financialImg,
    title: "Banking and Financial Services",
    description:
      "Utilize Transactional SMS and OTP SMS Service solutions for secure customer authentication, payment alerts, and account notifications.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <BriefcaseMedical className="w-[22px] h-[22px]" strokeWidth={1.75} />,
    image: healthcareImg,
    title: "Healthcare",
    description:
      "Send critical patient appointment reminders, prescription updates, and healthcare notifications with enterprise reliability.",
  },
  {
    id: "ecommerce",
    name: "E-Commerce and Retail",
    icon: <ShoppingCart className="w-[22px] h-[22px]" strokeWidth={1.75} />,
    image: ecommerceImg,
    title: "E-Commerce and Retail",
    description:
      "Enhance customer experiences with SMS Notification Service updates, order confirmations and promotional campaigns.",
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="w-[22px] h-[22px]" strokeWidth={1.75} />,
    image: educationImg,
    title: "Education",
    description:
      "Keep students and parents informed with admission alerts, campus updates, attendance notices, and exam results across channels.",
  },
  {
    id: "travel",
    name: "Travel and Hospitality",
    icon: <Compass className="w-[22px] h-[22px]" strokeWidth={1.75} />,
    image: travelImg,
    title: "Travel and Hospitality",
    description:
      "Deliver real-time flight updates, booking confirmations, itinerary changes, and 24/7 guest support messaging worldwide.",
  },
];

/**
 * Deck geometry (by distance from the active card).
 * Same width for all cards; back cards are shorter and shifted sideways,
 * so they peek out from both sides of the centre card.
 */
const LEVELS = [
  { x: 0, h: 575, overlay: 0, z: 30 }, // active
  { x: 108, h: 435, overlay: 0.14, z: 20 }, // 1 step away
  { x: 180, h: 318, overlay: 0.24, z: 10 }, // 2 steps away
];

export const IndustryExpertise: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("banking");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const n = industries.length;
  const activeIndex = industries.findIndex((item) => item.id === activeId);

  // Auto-loop every 4 seconds when not paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveId((prev) => {
        const currentIndex = industries.findIndex((item) => item.id === prev);
        const nextIndex = (currentIndex + 1) % n;
        return industries[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, n]);

  // circular offset in range -2..2
  const getOffset = (idx: number) => ((idx - activeIndex + n + 2) % n) - 2;

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`w-full bg-white pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 ${theme.layout.sectionPx} overflow-hidden`}
    >
      <div className={`${theme.layout.maxWidth} mx-auto space-y-8 lg:space-y-12`}>
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className={theme.classes.badgeLine} />
            <span className={theme.classes.sectionBadge}>
              Industry Expertise
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#12223b] tracking-tight leading-[1.2]">
            Communication Solutions Built <br className="hidden sm:inline" />
            For Every Industry
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#5b6878] leading-relaxed max-w-[520px]">
            Connect, engage and communicate with customers through reliable
            voice, messaging and omnichannel solutions.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left: Large Tabs */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full lg:w-[380px]">
            {industries.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full flex items-center justify-between pl-5 sm:pl-7 pr-4 sm:pr-6 h-[52px] sm:h-[58px] lg:h-[62px] rounded-full text-[15px] sm:text-[16.5px] lg:text-[17.5px] font-medium transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-[#102038] text-white border-[#739b20] ring-1.5 ring-[#739b20] shadow-md shadow-slate-900/10"
                      : "bg-white text-[#1e2d42] border-[#d3d9de] hover:border-[#b6c2b0] hover:bg-[#f7faf5]"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={isActive ? "text-[#84cc16]" : "text-slate-500"}
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 sm:w-5 h-4 sm:h-5 transition-transform ${
                      isActive
                        ? "text-[#84cc16] translate-x-0.5"
                        : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Card deck */}
          <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[560px] lg:h-[620px] select-none">
            {industries.map((item, idx) => {
              const offset = getOffset(idx);
              const dist = Math.abs(offset);
              const level = LEVELS[dist];
              const isCenter = dist === 0;
              const dir = offset < 0 ? -1 : 1;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  style={
                    {
                      transform: `translateX(${dir * level.x}px)`,
                      zIndex: level.z,
                      ["--h" as string]: `${level.h}px`,
                      ["--ih" as string]: "57%",
                    } as React.CSSProperties
                  }
                  className={`absolute w-[min(570px,100%)] h-[490px] sm:h-[540px] md:h-[var(--h)] rounded-[26px] sm:rounded-[30px] overflow-hidden bg-white flex flex-col transition-all duration-500 ease-out cursor-pointer ${
                    isCenter
                      ? "block shadow-[0_20px_60px_-10px_rgba(15,23,42,0.25)] border border-gray-100"
                      : "hidden md:flex border border-slate-200/70"
                  }`}
                >
                  {/* Illustration */}
                  <div className="w-full shrink-0 h-[210px] sm:h-[240px] md:h-[var(--ih)] bg-gradient-to-b bg-[#66dd0b] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="w-full h-full object-fill object-center"
                    />
                  </div>

                  {/* Text + CTA */}
                  <div className="bg-white flex-1 px-5 sm:px-8 pt-5 sm:pt-7 pb-6 sm:pb-8 text-center space-y-3 sm:space-y-3.5 overflow-hidden flex flex-col justify-center">
                    <h3 className="text-[21px] sm:text-[25px] md:text-[29px] font-semibold text-[#102038] tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#5b6878] leading-[1.55] max-w-[460px] mx-auto">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <a
                        href="#contact"
                        onClick={(e) => {
                          if (!isCenter) e.preventDefault();
                        }}
                        className="inline-flex items-center justify-center px-10 sm:px-14 py-2.5 sm:py-3 rounded-full text-[14.5px] sm:text-[15.5px] font-medium text-white bg-[#8b1a5e] hover:bg-[#751450] shadow-md shadow-[#8b1a5e]/25 transition duration-150 active:scale-[0.98]"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>

                  {/* Grey overlay for back cards */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 bg-[#5d6b5d]"
                    style={{ opacity: level.overlay }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;

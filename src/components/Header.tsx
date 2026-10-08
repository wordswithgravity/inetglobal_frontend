import React from "react";
import { ArrowRight } from "lucide-react";
import globeImg from "../assets/globe.png";

export const Header: React.FC = () => {
  return (
    <section className="w-full bg-[#EEF2EB] pt-4 sm:pt-6 pb-12 lg:pb-16 px-2 sm:px-4 transition-colors">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[14px] sm:text-[15px] font-bold tracking-wider text-[#698a22] uppercase">
              GLOBAL COMMUNICATIONS INFRASTRUCTURE
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-semibold text-[#102038] tracking-tight leading-[1.08]">
              Global <br />
              Communication, <br />
              Built For Business.
            </h1>

            <p className="text-[17px] sm:text-[18px] text-[#4e5e70] leading-relaxed max-w-xl">
              Reliable voice, messaging and virtual numbers for companies that
              need to stay connected across borders, across teams, and across
              every customer touchpoint.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Get Started Button */}
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Explore Service Button */}
              <a
                href="#explore"
                className="inline-flex items-center px-8 py-3.5 rounded-full border border-[#7e995f] hover:bg-[#e4ece0] text-[#1e2d42] text-[16px] font-medium transition duration-150 active:scale-[0.98]"
              >
                Explore Service
              </a>
            </div>
          </div>

          {/* Center Column: Network Globe Graphic (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">
            <div className="relative w-full max-w-[590px] lg:max-w-[690px] aspect-square flex items-center justify-center scale-105 sm:scale-110 lg:scale-120 transition-transform">
              <img
                src={globeImg}
                alt="Global Network Globe"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: Connected Timeline Feature List (2 cols) */}
          <div className="lg:col-span-2 relative pl-7 lg:pl-8 py-2 select-none">
            {/* Continuous Vertical Green Line running from top dot past the bottom text */}
            <div className="absolute left-[3px] lg:left-[5px] top-1.5 bottom-1 w-[1.5px] bg-[#97be34]" />

            <div className="space-y-10 sm:space-y-12">
              {/* Item 1: Business Voice */}
              <div className="relative flex items-center">
                <span className="absolute -left-[28px] lg:-left-[30px] w-2.5 h-2.5 rounded-full bg-[#8cc624]" />
                <span className="text-[16px] font-medium text-[#1e2d42]">
                  Business Voice
                </span>
              </div>

              {/* Item 2: SMS & Messaging */}
              <div className="relative flex items-center">
                <span className="absolute -left-[28px] lg:-left-[30px] w-2.5 h-2.5 rounded-full bg-[#83184d]" />
                <span className="text-[16px] font-medium text-[#1e2d42]">
                  SMS & Messaging
                </span>
              </div>

              {/* Item 3: Virtual Numbers */}
              <div className="relative flex items-center">
                <span className="absolute -left-[28px] lg:-left-[30px] w-2.5 h-2.5 rounded-full bg-[#8cc624]" />
                <span className="text-[16px] font-medium text-[#1e2d42]">
                  Virtual Numbers
                </span>
              </div>

              {/* Bottom Note */}
              <div className="pt-6 text-[15px] font-normal text-[#1e2d42] leading-snug">
                <p>One platform</p>
                <p>Global reach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

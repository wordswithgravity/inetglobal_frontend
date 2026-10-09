import React from "react";
import { ArrowRight } from "lucide-react";
import globeImg from "../assets/globe.png";

export const Header: React.FC = () => {
  return (
    <section className="w-full bg-[#EEF2EB] pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-6 lg:px-8 transition-colors overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Content (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
            <span className="text-[12px] sm:text-[14px] font-bold tracking-wider text-[#698a22] uppercase">
              GLOBAL COMMUNICATIONS INFRASTRUCTURE
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-semibold text-[#102038] tracking-tight leading-[1.12]">
              Global <br className="hidden sm:inline" />
              Communication, <br className="hidden sm:inline" />
              Built For Business.
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#4e5e70] leading-relaxed max-w-xl">
              Reliable voice, messaging and virtual numbers for companies that
              need to stay connected across borders, across teams, and across
              every customer touchpoint.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              {/* Get Started Button */}
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Explore Service Button */}
              <a
                href="#explore"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#7e995f] hover:bg-[#e4ece0] text-[#1e2d42] text-[14.5px] sm:text-[16px] font-medium transition duration-150 active:scale-[0.98]"
              >
                Explore Service
              </a>
            </div>
          </div>

          {/* Center Column: Network Globe Graphic (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-2 sm:py-4">
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[620px] aspect-square flex items-center justify-center sm:scale-105 lg:scale-115 transition-transform">
              <img
                src={globeImg}
                alt="Global Network Globe"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: Connected Timeline Feature List (2 cols) */}
          <div className="lg:col-span-2 relative pl-6 sm:pl-7 lg:pl-8 py-2 select-none">
            {/* Continuous Vertical Green Line running from top dot past the bottom text */}
            <div className="absolute left-[3px] sm:left-[5px] top-1.5 bottom-1 w-[1.5px] bg-[#97be34]" />

            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {/* Item 1: Business Voice */}
              <div className="relative flex items-center">
                <span className="absolute -left-[27px] sm:-left-[29px] lg:-left-[30px] w-2.5 h-2.5 rounded-full bg-[#8cc624]" />
                <span className="text-[15px] sm:text-[16px] font-medium text-[#1e2d42]">
                  Business Voice
                </span>
              </div>

              {/* Item 2: SMS & Messaging */}
              <div className="relative flex items-center">
                <span className="absolute -left-[27px] sm:-left-[29px] lg:-left-[30px] w-2.5 h-2.5 rounded-full bg-[#83184d]" />
                <span className="text-[15px] sm:text-[16px] font-medium text-[#1e2d42]">
                  SMS & Messaging
                </span>
              </div>

              {/* Item 3: Virtual Numbers */}
              <div className="relative flex items-center">
                <span className="absolute -left-[27px] sm:-left-[29px] lg:-left-[30px] w-2.5 h-2.5 rounded-full bg-[#8cc624]" />
                <span className="text-[15px] sm:text-[16px] font-medium text-[#1e2d42]">
                  Virtual Numbers
                </span>
              </div>

              {/* Bottom Note */}
              <div className="pt-3 sm:pt-5 text-[14px] sm:text-[15px] font-normal text-[#1e2d42] leading-snug">
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

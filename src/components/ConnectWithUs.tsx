import React from "react";
import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import Iphone from "./Iphone";
import peopleImg from "../assets/people.png";

export const ConnectWithUs: React.FC = () => {
  return (
    <section className={`w-full bg-white pt-10 sm:pt-16 lg:pt-20 pb-0 ${theme.layout.sectionPx} overflow-hidden`}>
      <div className={`${theme.layout.maxWidth} mx-auto`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Heading & Content (7 cols) */}
          <div className="lg:col-span-7 space-y-4 pb-6 sm:pb-12 lg:pb-16">
            <div className="flex items-center gap-2">
              <span className={theme.classes.badgeLine}></span>
              <span className={theme.classes.sectionBadge}>
                CONNECT WITH US
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-bold text-[#102038] tracking-tight leading-[1.15]">
              Let’s Build The Right Communication{" "}
              <br className="hidden sm:inline" />
              Connection.
            </h2>

            <p className="text-[15px] sm:text-[16.5px] text-[#556578] leading-relaxed max-w-2xl">
              With INET Global Services, businesses can leverage reliable
              Business SMS Solutions to improve customer engagement, strengthen
              security, and streamline communication. Whether you need
              Transactional SMS, OTP SMS Service, or a scalable Bulk SMS
              Service, our platform delivers the speed, security, and
              performance your business demands.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* Get Started Button */}
              <a
                href="#get-started"
                className={theme.classes.primaryButton}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Contact Us Button */}
              <a
                href="#contact"
                className={theme.classes.secondaryButton}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Half Phone Mockup protruding from bottom */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-start h-[280px] sm:h-[380px] lg:h-[440px] relative overflow-hidden">
            <div className="w-[260px] sm:w-[340px] lg:w-[380px] drop-shadow-2xl transition-transform">
              <Iphone className="w-full">
                <div className="w-full h-full bg-white flex flex-col items-center pt-9 px-4 text-center select-none">
                  {/* People Image Illustration inside phone */}
                  <div className="w-full aspect-[4/3] flex items-center justify-center pt-2">
                    <img
                      src={peopleImg}
                      alt="Business Connection"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Brand Typography below illustration */}
                  <div className="pt-4">
                    <span className="text-[20px] sm:text-[24px] font-bold text-[#102038] tracking-tight">
                      iNet Global
                    </span>
                  </div>
                </div>
              </Iphone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;

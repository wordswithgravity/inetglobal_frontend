import React from "react";
import { ArrowRight } from "lucide-react";
import Iphone from "./Iphone";
import peopleImg from "../assets/people.png";

export const ConnectWithUs: React.FC = () => {
  return (
    <section className="w-full bg-white pt-12 lg:pt-16 pb-0 px-2 sm:px-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Heading & Content (7 cols) */}
          <div className="lg:col-span-7 space-y-4 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]"></span>
              <span className="text-[12.5px] sm:text-[13.5px] font-bold tracking-wider text-[#698a22] uppercase">
                CONNECT WITH US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#102038] tracking-tight leading-[1.12]">
              Let’s Build The Right Communication{" "}
              <br className="hidden sm:inline" />
              Connection.
            </h2>

            <p className="text-[15.5px] sm:text-[16.5px] text-[#556578] leading-relaxed max-w-2xl">
              With INET Global Services, businesses can leverage reliable
              Business SMS Solutions to improve customer engagement, strengthen
              security, and streamline communication. Whether you need
              Transactional SMS, OTP SMS Service, or a scalable Bulk SMS
              Service, our platform delivers the speed, security, and
              performance your business demands.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Get Started Button */}
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 px-12 py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[15.5px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Contact Us Button */}
              <a
                href="#contact"
                className="inline-flex items-center px-12 py-3.5 rounded-full border border-[#7e995f] hover:bg-[#f4f8f2] text-[#1e2d42] text-[15.5px] font-medium transition duration-150 active:scale-[0.98]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Half Phone Mockup protruding from bottom */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-start h-[340px] sm:h-[400px] lg:h-[440px] relative overflow-hidden">
            <div className="w-[300px] sm:w-[350px] lg:w-[380px] drop-shadow-2xl transition-transform">
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
                    <span className="text-[22px] sm:text-[24px] font-bold text-[#102038] tracking-tight">
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

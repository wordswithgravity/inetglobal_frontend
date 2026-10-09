import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "../assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0d1b33] text-slate-300 font-sans pt-16 pb-8 px-4 sm:px-6 lg:px-12 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto space-y-14">
        
        {/* Top Grid: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="iNet Global"
                className="h-10 w-auto object-contain shrink-0 drop-shadow-xs"
              />
              <span className="text-2xl font-bold tracking-tight text-white select-none">
                iNet Global
              </span>
            </div>

            {/* Description */}
            <p className="text-[14.5px] text-slate-400 leading-relaxed max-w-sm">
              Global communication infrastructure for businesses that need
              reliable voice, messaging and omnichannel connectivity.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3 pt-1">
              <p className="text-[14px] text-slate-300 font-medium">
                Get product updates & industry insights
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 max-w-md"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#162746] border border-[#263c62] text-slate-200 placeholder-slate-400 text-[13.5px] px-4 py-2.5 rounded-full focus:outline-none focus:border-[#739b20] transition"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[13.5px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#162746] hover:bg-[#20365e] text-slate-300 hover:text-white flex items-center justify-center transition border border-[#24375a]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#x"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-[#162746] hover:bg-[#20365e] text-slate-300 hover:text-white flex items-center justify-center transition border border-[#24375a]"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#162746] hover:bg-[#20365e] text-slate-300 hover:text-white flex items-center justify-center transition border border-[#24375a]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              Products
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#wholesale-voice" className="text-slate-400 hover:text-white transition">
                  Wholesale Voice
                </a>
              </li>
              <li>
                <a href="#ai-voice" className="text-slate-400 hover:text-white transition">
                  AI Voice
                </a>
              </li>
              <li>
                <a href="#virtual-numbers" className="text-slate-400 hover:text-white transition">
                  Virtual Numbers (DID)
                </a>
              </li>
              <li>
                <a href="#wholesale-sms" className="text-slate-400 hover:text-white transition">
                  Wholesale SMS
                </a>
              </li>
              <li>
                <a href="#rcs" className="text-slate-400 hover:text-white transition">
                  RCS Business Messaging
                </a>
              </li>
              <li>
                <a href="#otp-sms" className="text-slate-400 hover:text-white transition">
                  OTP SMS
                </a>
              </li>
              <li>
                <a href="#omnichannel" className="text-slate-400 hover:text-white transition">
                  Omnichannel Messaging
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solution (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              Solution
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#banking" className="text-slate-400 hover:text-white transition">
                  Banking & Financial Services
                </a>
              </li>
              <li>
                <a href="#healthcare" className="text-slate-400 hover:text-white transition">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#ecommerce" className="text-slate-400 hover:text-white transition">
                  E-Commerce & Retail
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-white transition">
                  Education
                </a>
              </li>
              <li>
                <a href="#travel" className="text-slate-400 hover:text-white transition">
                  Travel & Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#about-us" className="text-slate-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#career" className="text-slate-400 hover:text-white transition">
                  Career
                </a>
              </li>
              <li>
                <a href="#partners" className="text-slate-400 hover:text-white transition">
                  Partners
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-slate-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="text-slate-400 hover:text-white transition">
                  API / Developer
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-slate-400 hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#blog" className="text-slate-400 hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-[13.5px]">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <a href="mailto:hello@inetglobal.com" className="hover:text-white transition break-all">
                  hello@inetglobal.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="tel:+18001234567" className="hover:text-white transition">
                  +1 800 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  123 Innovation Drive, <br />
                  San Francisco, CA 94105, <br />
                  United States
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-[#182845] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <p>
            @2026 iNet Global Services. All right reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href="#privacy" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <span className="text-slate-700">|</span>
            <a href="#terms" className="hover:text-slate-300 transition">
              Terms of Services
            </a>
            <span className="text-slate-700">|</span>
            <a href="#cookie" className="hover:text-slate-300 transition">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

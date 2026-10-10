import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "../assets/logo.png";
import { useAppSelector } from "../store/hooks";
import { getRegionContent } from "../data/regionContent";
import { getNavTranslations } from "../data/translations";

export const Footer: React.FC = () => {
  const selectedRegion = useAppSelector((state) => state.region.selectedRegion);
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );
  const content = getRegionContent(selectedRegion, selectedLanguage).footer;
  const t = getNavTranslations(selectedLanguage);

  return (
    <footer className="w-full bg-[#0d1b33] text-slate-300 font-sans pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-14">
        {/* Top Grid: 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Column 1: Brand Info & Newsletter (4 cols) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="iNet Global"
                className="h-9 sm:h-10 w-auto object-contain shrink-0 drop-shadow-xs"
              />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white select-none">
                iNet Global
              </span>
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[14.5px] text-slate-400 leading-relaxed max-w-sm">
              {content.description}
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3 pt-1">
              <p className="text-[13.5px] sm:text-[14px] text-slate-300 font-medium">
                {t.newsletterTitle}
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md"
              >
                <input
                  type="email"
                  placeholder={t.newsletterPlaceholder}
                  className="flex-1 bg-[#162746] border border-[#263c62] text-slate-200 placeholder-slate-400 text-[13.5px] px-4 py-2.5 rounded-full focus:outline-none focus:border-[#739b20] transition"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[13.5px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 cursor-pointer shrink-0 text-center"
                >
                  {t.subscribe}
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
              {t.productsCol}
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="/wholesale-voice" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["wholesale-voice"]?.title || "Wholesale Voice"}
                </a>
              </li>
              <li>
                <a href="/ai-voice" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["ai-voice"]?.title || "AI Voice"}
                </a>
              </li>
              <li>
                <a href="/virtual-did" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["virtual-numbers"]?.title || "Virtual Numbers (DID)"}
                </a>
              </li>
              <li>
                <a href="/wholesale-message" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["wholesale-sms"]?.title || "Wholesale SMS"}
                </a>
              </li>
              <li>
                <a href="/messaging" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["rcs"]?.title || "RCS Business Messaging"}
                </a>
              </li>
              <li>
                <a href="/otp-sms" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["otp-sms"]?.title || "OTP SMS"}
                </a>
              </li>
              <li>
                <a href="/whatsapp" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["whatsapp"]?.title || "WhatsApp Business"}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solution (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              {t.solutionsCol}
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="/otp-sms" className="text-slate-400 hover:text-white transition">
                  {t.solutionItems?.[0]?.title || "Advance SMS Portal"}
                </a>
              </li>
              <li>
                <a href="/dialer" className="text-slate-400 hover:text-white transition">
                  {t.solutionItems?.[1]?.title || "Complete Dialer Solution"}
                </a>
              </li>
              <li>
                <a href="/virtual-did" className="text-slate-400 hover:text-white transition">
                  {t.solutionItems?.[2]?.title || "International Number (DID)"}
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition">
                  Banking & Finance
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition">
                  E-Commerce & Retail
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              {t.companyCol}
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="/about" className="text-slate-400 hover:text-white transition">
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  Partners
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  REST APIs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[15px] font-semibold text-white tracking-wide">
              {t.contactCol}
            </h4>
            <ul className="space-y-3.5 text-[13.5px]">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <a href={`mailto:${content.email}`} className="hover:text-white transition break-all">
                  {content.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                <a href={`tel:${content.phone.replace(/\s+/g, "")}`} className="hover:text-white transition">
                  {content.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {content.address.line1} <br />
                  {content.address.line2} <br />
                  {content.address.line3}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-[#182845] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <p>{content.copyright}</p>

          <div className="flex items-center gap-3">
            <a href="#privacy" className="hover:text-slate-300 transition">
              {t.privacyPolicy}
            </a>
            <span className="text-slate-700">|</span>
            <a href="#terms" className="hover:text-slate-300 transition">
              {t.termsOfService}
            </a>
            <span className="text-slate-700">|</span>
            <a href="#security" className="hover:text-slate-300 transition">
              {t.securityCompliance}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

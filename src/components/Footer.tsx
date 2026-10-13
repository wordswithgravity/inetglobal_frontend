import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import logoImg from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRegionContent } from "../data/regionContent";
import { getNavTranslations } from "../data/translations";
import { getCompanyTranslations } from "../data/companyTranslations";
import {
  subscribeNewsletter,
  fetchSocialLinks,
  resetSubscribeStatus,
} from "../store/slices/siteSettingsSlice";

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedRegion = useAppSelector((state) => state.region.selectedRegion);
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );
  const {
    socialLinks,
    subscribeSubmitting,
    subscribeSuccess,
    subscribeMessage,
    subscribeError,
  } = useAppSelector((state) => state.siteSettings);

  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    dispatch(fetchSocialLinks());
  }, [dispatch]);

  const regionContent = getRegionContent(selectedRegion, selectedLanguage);
  const content = regionContent.footer;
  const industries = regionContent.industryExpertise.industries;
  const t = getNavTranslations(selectedLanguage);
  const companyT = getCompanyTranslations(selectedLanguage);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    await dispatch(subscribeNewsletter(newsletterEmail.trim()));
    setNewsletterEmail("");

    setTimeout(() => {
      dispatch(resetSubscribeStatus());
    }, 4500);
  };

  // Determine which social links are configured
  const activeSocials = [
    {
      name: "Facebook",
      url: socialLinks.facebook,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      url: socialLinks.twitter,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: socialLinks.youtube,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: socialLinks.linkedin,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: socialLinks.instagram,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: socialLinks.github,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ].filter((item) => Boolean(item.url && item.url.trim()));

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
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t.newsletterPlaceholder}
                  required
                  disabled={subscribeSubmitting}
                  className="flex-1 bg-[#162746] border border-[#263c62] text-slate-200 placeholder-slate-400 text-[13.5px] px-4 py-2.5 rounded-full focus:outline-none focus:border-[#739b20] transition disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={subscribeSubmitting}
                  className="px-6 py-2.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[13.5px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 cursor-pointer shrink-0 text-center inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {subscribeSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>...</span>
                    </>
                  ) : (
                    t.subscribe
                  )}
                </button>
              </form>

              {/* Subscription feedback */}
              {subscribeSuccess && (
                <div className="flex items-center gap-2 text-emerald-400 text-xs mt-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{subscribeMessage || "Subscribed successfully!"}</span>
                </div>
              )}
              {subscribeError && (
                <div className="flex items-center gap-2 text-rose-400 text-xs mt-1">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{subscribeError}</span>
                </div>
              )}
            </div>

            {/* Social Icons (Only rendered if at least one social media account exists in the backend) */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {activeSocials.map((social) => {
                  const href = social.url.startsWith("http://") || social.url.startsWith("https://")
                    ? social.url
                    : `https://${social.url}`;
                  return (
                    <a
                      key={social.name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="w-9 h-9 rounded-full bg-[#162746] hover:bg-[#20365e] text-slate-300 hover:text-white flex items-center justify-center transition border border-[#24375a] cursor-pointer"
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            )}
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
                <a href="/virtual-numbers-did" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["virtual-numbers"]?.title || "Virtual Numbers (DID)"}
                </a>
              </li>
              <li>
                <a href="/wholesale-message" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["wholesale-sms"]?.title || "Wholesale SMS"}
                </a>
              </li>
              <li>
                <a href="/rcs" className="text-slate-400 hover:text-white transition">
                  {t.productItems?.["rcs"]?.title || "RCS Business Messaging"}
                </a>
              </li>
              <li>
                <a href="/otp-sms-services" className="text-slate-400 hover:text-white transition">
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
                <a href="/advance-sms-portal" className="text-slate-400 hover:text-white transition">
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
                  {industries.find((item) => item.id === "banking")?.name || "Banking & Finance"}
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition">
                  {industries.find((item) => item.id === "healthcare")?.name || "Healthcare"}
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition">
                  {industries.find((item) => item.id === "ecommerce")?.name || "E-Commerce & Retail"}
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
                  {companyT.aboutUs}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  {companyT.careers}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  {companyT.partners}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  {companyT.documentation}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  {companyT.restApis}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white transition">
                  {companyT.faqs}
                </a>
              </li>
              <li>
                <a href="/blog" className="text-slate-400 hover:text-white transition">
                  {companyT.blog}
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
            <a href="/privacy-policy" className="hover:text-slate-300 transition">
              {t.privacyPolicy}
            </a>
            <span className="text-slate-700">|</span>
            <a href="/terms-of-service" className="hover:text-slate-300 transition">
              {t.termsOfService}
            </a>
            <span className="text-slate-700">|</span>
            <a href="/security-and-compliance" className="hover:text-slate-300 transition">
              {t.securityCompliance}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

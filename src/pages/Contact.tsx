import React, { useState } from "react";
import { ArrowRight, Minus, Plus, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";
import { getContactTranslations } from "../data/translations";
import { getRegionContent } from "../data/regionContent";
import ladyinphoneImg from "../assets/ladyinphone.png";

export const Contact: React.FC = () => {
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region,
  );
  const { selectedLanguage } = useAppSelector((state) => state.language);

  const t = getContactTranslations(selectedLanguage);
  const regionContent = getRegionContent(selectedRegion, selectedLanguage);

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [customPhonePrefix, setCustomPhonePrefix] = useState<string | null>(null);
  const [customPhonePrefixFlag, setCustomPhonePrefixFlag] = useState<string | null>(null);

  // Derive phone prefix & flag directly from region unless user explicitly selected a custom code
  const phonePrefix = customPhonePrefix ?? currentRegion?.phonePrefix ?? "+1";
  const phonePrefixFlag = customPhonePrefixFlag ?? currentRegion?.flag ?? "🌐";

  const [phoneNumber, setPhoneNumber] = useState("");
  const [interest, setInterest] = useState<
    "Voice" | "Messaging" | "Omnichannel"
  >("Voice");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName("");
      setEmail("");
      setCompanyName("");
      setPhoneNumber("");
      setMessage("");
      setCustomPhonePrefix(null);
      setCustomPhonePrefixFlag(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#83184d] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* SECTION 1: HERO (LET'S TALK) */}
      <section className="w-full bg-[#EEF2EB] pt-8 sm:pt-12 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.heroBadge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-[#102038] tracking-tight leading-[1.14]">
                {t.heroTitle}
              </h1>

              <p className="text-[15px] sm:text-[17px] text-[#4e5e70] leading-relaxed max-w-xl">
                {t.heroDesc}
              </p>

              <div className="pt-2 sm:pt-3">
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98] cursor-pointer"
                >
                  {t.getStarted}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Graphic Column: ladyinphone.png with Floating Notification Bubbles */}
            <div className="lg:col-span-6 flex justify-center items-center relative py-4 lg:py-0">
              <div className="relative w-full max-w-[480px] sm:max-w-[580px] lg:max-w-[660px] xl:max-w-[720px] flex items-center justify-center">
                {/* Background Dotted Wave Lines Pattern */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 scale-110">
                  <svg
                    className="w-full h-full text-slate-400"
                    viewBox="0 0 400 350"
                    fill="none"
                  >
                    <path
                      d="M20 200 C 100 120, 250 100, 380 180"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M40 260 C 120 180, 280 160, 360 280"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M60 80 C 150 40, 260 80, 340 120"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                {/* Soft backdrop glow */}
                <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#e1ebd9]/90 blur-3xl -z-10" />

                {/* Actual Lady in Phone Image from user assets */}
                <div className="relative w-full flex items-center justify-center z-10">
                  <img
                    src={ladyinphoneImg}
                    alt="Let's Build Communication Solutions"
                    className="w-full max-w-[460px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT FORM & LOCATION CARDS */}
      <section
        id="contact-form"
        className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[1440px] mx-auto space-y-10 sm:space-y-14">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-[2px] bg-[#698a22]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                {t.formBadge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-tight">
              {t.formTitle}
            </h2>

            <p className="text-[14.5px] sm:text-[16px] text-slate-500 leading-relaxed">
              {t.formSubtitle}
            </p>
          </div>

          {/* Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Form Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[28px] border border-gray-200/90 p-6 sm:p-10 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Full Name & Business Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-semibold text-[#102038]">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.fullNamePlaceholder}
                      className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-semibold text-[#102038]">
                      {t.businessEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.businessEmailPlaceholder}
                      className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22] transition"
                    />
                  </div>
                </div>

                {/* Row 2: Company Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-semibold text-[#102038]">
                      {t.companyName}
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={t.companyNamePlaceholder}
                      className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-semibold text-[#102038]">
                      {t.phoneNumber}
                    </label>
                    <div className="flex items-center gap-2 relative">
                      {/* Dial code selector */}
                      <button
                        type="button"
                        onClick={() => setCountryCodeOpen(!countryCodeOpen)}
                        className="flex items-center gap-1.5 px-3 py-3 rounded-full border border-gray-300 bg-white text-[13px] text-slate-700 hover:bg-slate-50 transition cursor-pointer shrink-0"
                      >
                        <span>{phonePrefixFlag}</span>
                        <span className="font-medium">{phonePrefix}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      {countryCodeOpen && (
                        <div className="absolute left-0 top-full mt-1.5 w-48 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-2xl shadow-xl z-30 p-1 divide-y divide-gray-50">
                          {availableRegions.map((r) => (
                            <button
                              key={r.id}
                              type="button"
                              onClick={() => {
                                setCustomPhonePrefix(r.phonePrefix || "+1");
                                setCustomPhonePrefixFlag(r.flag || "🌐");
                                setCountryCodeOpen(false);
                              }}
                              className="w-full flex items-center justify-between px-3 py-2 text-xs text-left hover:bg-slate-50 rounded-xl cursor-pointer"
                            >
                              <span className="flex items-center gap-2">
                                <span>{r.flag}</span>
                                <span className="truncate">{r.name}</span>
                              </span>
                              <span className="font-mono text-slate-400 text-[11px]">
                                {r.phonePrefix || "+1"}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={t.phoneNumberPlaceholder}
                        className="flex-1 bg-white border border-gray-300 rounded-full px-5 py-3 text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22] transition min-w-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: What are you interested in ? */}
                <div className="space-y-2 pt-1">
                  <label className="block text-[13px] font-semibold text-[#102038]">
                    {t.interestQuestion}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { key: "Voice", label: t.interests.voice },
                      { key: "Messaging", label: t.interests.messaging },
                      { key: "Omnichannel", label: t.interests.omnichannel },
                    ].map((opt) => {
                      const isSelected = interest === opt.key;
                      return (
                        <button
                          type="button"
                          key={opt.key}
                          onClick={() =>
                            setInterest(
                              opt.key as "Voice" | "Messaging" | "Omnichannel",
                            )
                          }
                          className={`flex items-center gap-3 px-4 py-3 rounded-full border text-[13.5px] transition cursor-pointer text-left ${
                            isSelected
                              ? "border-[#83184d] bg-white text-[#102038] font-medium shadow-xs"
                              : "border-gray-300 text-slate-600 hover:border-gray-400 bg-white"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "border-[#83184d] bg-white"
                                : "border-gray-400 bg-white"
                            }`}
                          >
                            {isSelected && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[#83184d]" />
                            )}
                          </span>
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1.5 pt-1">
                  <label className="block text-[13px] font-semibold text-[#102038]">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.messagePlaceholder}
                    className="w-full bg-white border border-gray-300 rounded-[20px] p-4 text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#698a22] transition resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white font-medium text-[15.5px] shadow-md shadow-[#83184d]/25 transition active:scale-[0.99] cursor-pointer"
                  >
                    {submitted ? t.messageSent : t.sendMessage}
                  </button>
                  <p className="text-center text-[12px] text-slate-400 pt-2.5">
                    {t.securityNote}
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column: Location & Contact Info Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#EEF2EB] rounded-[28px] p-6 sm:p-8 space-y-6 border border-[#e0e8dc]">
              {/* Map Preview Graphic */}
              <div className="w-full h-[210px] sm:h-[220px] rounded-2xl overflow-hidden relative shadow-inner bg-[#2c3427] border border-[#3e4838]">
                {/* Stylized Vector Dark Map */}
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 400 240"
                  fill="none"
                >
                  <rect width="400" height="240" fill="#32382d" />
                  {/* Landmass shapes */}
                  <path
                    d="M 20 0 L 180 0 L 220 70 L 320 60 L 370 140 L 400 130 L 400 240 L 0 240 Z"
                    fill="#3b4234"
                  />
                  {/* Roads / Streets */}
                  <path
                    d="M 0 120 Q 150 160 300 100 T 400 80"
                    stroke="#485240"
                    strokeWidth="4"
                  />
                  <path
                    d="M 120 0 Q 160 140 280 240"
                    stroke="#485240"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M 60 240 Q 180 180 240 40"
                    stroke="#485240"
                    strokeWidth="3"
                  />
                  <path
                    d="M 200 80 L 340 180"
                    stroke="#485240"
                    strokeWidth="2.5"
                  />

                  {/* Street Names */}
                  <text
                    x="270"
                    y="65"
                    fill="#6e7a64"
                    fontSize="9"
                    fontWeight="600"
                  >
                    Victoria
                  </text>
                  <text
                    x="180"
                    y="185"
                    fill="#6e7a64"
                    fontSize="8"
                    fontWeight="500"
                  >
                    FINANCIAL PARK
                  </text>

                  {/* Red Location Pin */}
                  <g transform="translate(260, 105)">
                    {/* Pulsing ring */}
                    <circle
                      cx="0"
                      cy="0"
                      r="14"
                      fill="#ef4444"
                      opacity="0.25"
                    />
                    {/* Pin Shape */}
                    <path
                      d="M 0 -18 C -7 -18 -12 -12 -12 -5 C -12 4 0 16 0 16 C 0 16 12 4 12 -5 C 12 -12 7 -18 0 -18 Z"
                      fill="#ef4444"
                    />
                    <circle cx="0" cy="-6" r="4.5" fill="#ffffff" />
                  </g>
                </svg>
              </div>

              {/* Office Details - Dynamic based on Redux Region Content */}
              <div className="space-y-4 text-[13.5px]">
                <div className="space-y-1">
                  <span className="text-slate-400 text-[12px] font-medium block">
                    {t.ourLocation}
                  </span>
                  <p className="font-semibold text-[#102038] text-[14.5px] leading-snug">
                    {regionContent.footer.address.line1}{" "}
                    {regionContent.footer.address.line2}{" "}
                    {regionContent.footer.address.line3}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 text-[12px] font-medium block">
                    {t.addressLabel}
                  </span>
                  <p className="font-semibold text-[#102038]">
                    {regionContent.footer.address.line1},{" "}
                    {regionContent.footer.address.line3}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 text-[12px] font-medium block">
                    {t.phoneLabel}
                  </span>
                  <a
                    href={`tel:${regionContent.footer.phone.replace(/\s+/g, "")}`}
                    className="font-semibold text-[#102038] hover:text-[#698a22] transition block"
                  >
                    {regionContent.footer.phone}
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 text-[12px] font-medium block">
                    {t.emailLabel}
                  </span>
                  <a
                    href={`mailto:${regionContent.footer.email}`}
                    className="font-semibold text-[#102038] hover:text-[#698a22] transition block"
                  >
                    {regionContent.footer.email}
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="space-y-2 pt-2">
                  <span className="text-slate-400 text-[12px] font-medium block">
                    {t.socialLabel}
                  </span>
                  <div className="flex items-center gap-2.5">
                    {/* Facebook */}
                    <a
                      href="#facebook"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-[#102038] hover:bg-[#1a335a] text-white flex items-center justify-center transition"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="#x"
                      aria-label="X (Twitter)"
                      className="w-9 h-9 rounded-full bg-[#102038] hover:bg-[#1a335a] text-white flex items-center justify-center transition"
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
                      className="w-9 h-9 rounded-full bg-[#102038] hover:bg-[#1a335a] text-white flex items-center justify-center transition"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ ACCORDION (OUR FREQUENTLY ASKED QUESTION) */}
      <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading & Subtitle (4 cols) */}
            <div className="lg:col-span-4 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#698a22]" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase">
                  {t.faqBadge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#102038] tracking-tight leading-[1.15]">
                {t.faqTitle}
              </h2>

              <p className="text-[14.5px] sm:text-[16px] text-slate-500 leading-relaxed max-w-sm">
                {t.faqSubtitle}
              </p>
            </div>

            {/* Right Column: Interactive FAQ Accordion (8 cols) */}
            <div className="lg:col-span-8 divide-y divide-gray-200 border-t border-b border-gray-200">
              {t.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-5 sm:py-6">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                    >
                      <span className="text-[16px] sm:text-[17.5px] font-semibold text-[#102038] group-hover:text-[#698a22] transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-[#83184d] transition-transform duration-200">
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 pr-8 animate-in fade-in duration-200">
                        <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOOTER */}
      <Footer />
    </div>
  );
};

export default Contact;

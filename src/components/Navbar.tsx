import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Menu,
  X,
  Phone,
  MessageSquare,
  Layers,
  PhoneCall,
  Check,
  Search,
} from "lucide-react";

import logoImg from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setRegion } from "../store/slices/regionSlice";
import { setLanguage } from "../store/slices/languageSlice";
import { getNavTranslations } from "../data/translations";

export const Logo: React.FC<{ className?: string }> = ({
  className = "h-12",
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="iNet Global Logo"
        className="h-11 sm:h-12 w-auto object-contain shrink-0 drop-shadow-xs"
      />
      <span className="text-[23px] sm:text-[25px] font-bold tracking-tight text-[#16213e] select-none">
        iNet Global
      </span>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedRegion, availableRegions } = useAppSelector(
    (state) => state.region
  );
  const { selectedLanguage, availableLanguages } = useAppSelector(
    (state) => state.language
  );

  const t = getNavTranslations(selectedLanguage);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeProductTab, setActiveProductTab] = useState<string>("voice");
  const [searchRegionQuery, setSearchRegionQuery] = useState("");
  const [searchLangQuery, setSearchLangQuery] = useState("");
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
    if (name === "region") {
      setSearchRegionQuery("");
    }
    if (name === "language") {
      setSearchLangQuery("");
    }
  };

  const handleSelectRegion = (regionId: string) => {
    dispatch(setRegion(regionId));
    setActiveDropdown(null);
    setSearchRegionQuery("");
  };

  const handleSelectLanguage = (langId: string) => {
    dispatch(setLanguage(langId));
    setActiveDropdown(null);
    setSearchLangQuery("");
  };

  const currentRegion =
    availableRegions.find((r) => r.id === selectedRegion) ||
    availableRegions[0];

  const currentLanguage =
    availableLanguages.find((l) => l.id === selectedLanguage) ||
    availableLanguages[0];

  const filteredRegions = availableRegions.filter(
    (r) =>
      r.name.toLowerCase().includes(searchRegionQuery.toLowerCase()) ||
      r.code.toLowerCase().includes(searchRegionQuery.toLowerCase())
  );

  const filteredLanguages = availableLanguages.filter(
    (l) =>
      l.name.toLowerCase().includes(searchLangQuery.toLowerCase()) ||
      l.englishName.toLowerCase().includes(searchLangQuery.toLowerCase()) ||
      l.code.toLowerCase().includes(searchLangQuery.toLowerCase())
  );

  // Dynamic translated product categories
  const productCategories = [
    {
      id: "voice",
      name: t.categories?.voice?.name || "Voice",
      icon: <Phone className="w-[18px] h-[18px]" />,
      tagline: t.categories?.voice?.tagline || "Global voice connectivity built around your business.",
      items: [
        {
          key: "wholesale-voice",
          title: t.productItems?.["wholesale-voice"]?.title || "Wholesale Voice",
          description: t.productItems?.["wholesale-voice"]?.description || "Reliable global voice connectivity",
          href: "/voice",
        },
        {
          key: "ai-voice",
          title: t.productItems?.["ai-voice"]?.title || "Ai Voice",
          description: t.productItems?.["ai-voice"]?.description || "Intelligent automated voice solutions",
          href: "/voice",
        },
        {
          key: "virtual-numbers",
          title: t.productItems?.["virtual-numbers"]?.title || "Virtual Numbers (DID)",
          description: t.productItems?.["virtual-numbers"]?.description || "Local numbers, global presence",
          href: "/voice",
        },
      ],
    },
    {
      id: "messaging",
      name: t.categories?.messaging?.name || "Messaging",
      icon: <MessageSquare className="w-[18px] h-[18px]" />,
      tagline: t.categories?.messaging?.tagline || "Messaging solutions designed for reliable customer communication.",
      items: [
        {
          key: "wholesale-sms",
          title: t.productItems?.["wholesale-sms"]?.title || "Wholesale SMS",
          description: t.productItems?.["wholesale-sms"]?.description || "Global SMS delivery solutions",
          href: "/",
        },
        {
          key: "rcs",
          title: t.productItems?.["rcs"]?.title || "RCS Business Messaging",
          description: t.productItems?.["rcs"]?.description || "Rich interactive business messaging",
          href: "/",
        },
        {
          key: "otp-sms",
          title: t.productItems?.["otp-sms"]?.title || "OTP SMS",
          description: t.productItems?.["otp-sms"]?.description || "Secure verification message delivery",
          href: "/",
        },
      ],
    },
    {
      id: "omnichannel",
      name: t.categories?.omnichannel?.name || "Omnichannel",
      icon: <Layers className="w-[18px] h-[18px]" />,
      tagline: t.categories?.omnichannel?.tagline || "Connect with customers across the channels they already use.",
      items: [
        {
          key: "whatsapp",
          title: t.productItems?.["whatsapp"]?.title || "WhatsApp Business",
          description: t.productItems?.["whatsapp"]?.description || "Connect through WhatsApp conversations",
          href: "/",
        },
        {
          key: "voice-calls",
          title: t.productItems?.["voice-calls"]?.title || "Voice Calls",
          description: t.productItems?.["voice-calls"]?.description || "Business voice communication",
          href: "/voice",
        },
        {
          key: "telegram",
          title: t.productItems?.["telegram"]?.title || "Telegram",
          description: t.productItems?.["telegram"]?.description || "Engage customers through Telegram",
          href: "/",
        },
        {
          key: "instagram",
          title: t.productItems?.["instagram"]?.title || "Instagram",
          description: t.productItems?.["instagram"]?.description || "Connect through Instagram messaging",
          href: "/",
        },
        {
          key: "facebook",
          title: t.productItems?.["facebook"]?.title || "Facebook",
          description: t.productItems?.["facebook"]?.description || "Connect through Facebook messaging",
          href: "/",
        },
        {
          key: "tiktok",
          title: t.productItems?.["tiktok"]?.title || "TikTok",
          description: t.productItems?.["tiktok"]?.description || "Engage customers through TikTok",
          href: "/",
        },
        {
          key: "live-chat",
          title: t.productItems?.["live-chat"]?.title || "Live Chat Plugin",
          description: t.productItems?.["live-chat"]?.description || "Real-time website customer conversations",
          href: "/",
        },
        {
          key: "rcs-messaging",
          title: t.productItems?.["rcs-messaging"]?.title || "RCS",
          description: t.productItems?.["rcs-messaging"]?.description || "Rich conversational messaging",
          href: "/",
        },
        {
          key: "email",
          title: t.productItems?.["email"]?.title || "Email",
          description: t.productItems?.["email"]?.description || "Integrated business email communication",
          href: "/",
        },
      ],
    },
  ];

  const currentCategory =
    productCategories.find((cat) => cat.id === activeProductTab) ||
    productCategories[0];

  const solutionItems = [
    {
      title: t.solutionItems?.[0]?.title || "Advance SMS Portal",
      description: t.solutionItems?.[0]?.description || "Reliable global messaging connectivity",
      href: "/",
    },
    {
      title: t.solutionItems?.[1]?.title || "Complete Dialer Solution",
      description: t.solutionItems?.[1]?.description || "Enterprise call traffic & predictive dialing",
      href: "/voice",
    },
    {
      title: t.solutionItems?.[2]?.title || "International Number (DID)",
      description: t.solutionItems?.[2]?.description || "Virtual numbers across 100+ countries",
      href: "/voice",
    },
  ];

  return (
    <header
      ref={navRef}
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs"
    >
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 relative">
        {/* Three equal columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20 w-full">
          {/* DIV 1: Brand Logo (Left) */}
          <div className="flex items-center justify-start">
            <a href="/" className="flex items-center gap-2 group">
              <Logo />
            </a>
          </div>

          {/* DIV 2: Desktop Navigation Links (Center) */}
          <div className="hidden md:flex items-center justify-center h-full">
            <nav className="flex items-center space-x-8 text-[15.5px] font-normal h-full">
              {/* Products Dropdown Trigger */}
              <div className="relative h-full flex items-center">
                <button
                  type="button"
                  onClick={() => toggleDropdown("products")}
                  className={`flex items-center gap-1.5 transition-colors py-2 cursor-pointer focus:outline-none font-medium ${
                    activeDropdown === "products"
                      ? "text-[#5f8a1a]"
                      : "text-[#374151] hover:text-[#5f8a1a]"
                  }`}
                >
                  <span>{t.products}</span>
                  {activeDropdown === "products" ? (
                    <ChevronUp className="w-4 h-4 text-[#5f8a1a]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Solutions Dropdown Trigger */}
              <div className="relative h-full flex items-center">
                <button
                  type="button"
                  onClick={() => toggleDropdown("solutions")}
                  className={`flex items-center gap-1.5 transition-colors py-2 cursor-pointer focus:outline-none font-medium ${
                    activeDropdown === "solutions"
                      ? "text-[#5f8a1a]"
                      : "text-[#374151] hover:text-[#5f8a1a]"
                  }`}
                >
                  <span>{t.solutions}</span>
                  {activeDropdown === "solutions" ? (
                    <ChevronUp className="w-4 h-4 text-[#5f8a1a]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {/* Solutions Dropdown Card */}
                {activeDropdown === "solutions" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                    <div className="w-[330px] rounded-[24px] bg-white shadow-[0_20px_50px_rgba(16,32,56,0.14)] border border-slate-200/80 p-5 space-y-2 animate-in fade-in duration-200">
                      {solutionItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-[#f9fbf7] transition-all duration-150"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#ebf6dc] text-[#558117] flex items-center justify-center shrink-0 group-hover:bg-[#558117] group-hover:text-white transition-colors duration-150">
                            <PhoneCall className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="text-[14.5px] font-semibold text-[#102038] group-hover:text-[#558117] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-[12.5px] text-slate-400 group-hover:text-slate-500 leading-snug">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About Us */}
              <a
                href="/"
                className="text-[#374151] hover:text-[#5f8a1a] transition-colors py-2 font-medium"
              >
                {t.aboutUs}
              </a>
            </nav>
          </div>

          {/* DIV 3: Selectors & CTA Button (Right) */}
          <div className="hidden md:flex items-center justify-end gap-2.5 h-full">
            {/* Region Selector (Shows All Countries) */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => toggleDropdown("region")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[13.5px] transition cursor-pointer ${
                  selectedRegion !== "global"
                    ? "border-[#5f8a1a] bg-[#f7faf3] text-[#4d7212] font-semibold shadow-xs"
                    : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50/60 font-normal"
                }`}
                title="Select Country / Region"
              >
                <span className="text-base leading-none">
                  {currentRegion.flag || "🌐"}
                </span>
                <span className="max-w-[85px] truncate">
                  {selectedRegion === "global" ? t.region : currentRegion.name}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === "region" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "region" && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="w-64 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 py-2 border border-gray-100 animate-in fade-in duration-150">
                    {/* Search bar inside region dropdown */}
                    <div className="px-3 pt-1 pb-2 border-b border-gray-100">
                      <div className="relative flex items-center">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                        <input
                          type="text"
                          value={searchRegionQuery}
                          onChange={(e) => setSearchRegionQuery(e.target.value)}
                          placeholder={t.searchCountries}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#55801a] focus:bg-white transition"
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* Scrollable list of all countries */}
                    <div className="max-h-[300px] overflow-y-auto py-1 divide-y divide-gray-50">
                      {filteredRegions.length > 0 ? (
                        filteredRegions.map((region) => {
                          const isSelected = selectedRegion === region.id;
                          return (
                            <button
                              key={region.id}
                              onClick={() => handleSelectRegion(region.id)}
                              className={`w-full flex items-center justify-between px-3.5 py-2 text-[13px] transition cursor-pointer text-left ${
                                isSelected
                                  ? "bg-[#f4f8ee] text-[#55801a] font-semibold"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-[#55801a]"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="text-base shrink-0">
                                  {region.flag}
                                </span>
                                <span className="truncate">{region.name}</span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                                <span className="text-[10.5px] text-slate-400 font-mono">
                                  {region.code}
                                </span>
                                {isSelected && (
                                  <Check className="w-3.5 h-3.5 text-[#55801a]" />
                                )}
                              </div>
                            </button>
                          );
                        })
                      ) : (
                        <div className="px-4 py-3 text-xs text-slate-400 text-center">
                          {t.noCountries}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Language Selector (Shows All Languages Worldwide with Search) */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => toggleDropdown("language")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[13.5px] transition cursor-pointer ${
                  selectedLanguage !== "en"
                    ? "border-[#83184d] bg-[#fdf2f7] text-[#83184d] font-semibold shadow-xs"
                    : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50/60 font-normal"
                }`}
                title="Select Website Language"
              >
                <span className="text-base leading-none">
                  {currentLanguage.flag || "🌐"}
                </span>
                <span className="max-w-[75px] truncate font-medium">
                  {currentLanguage.name}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                    activeDropdown === "language" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "language" && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="w-64 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 py-2 border border-gray-100 animate-in fade-in duration-150">
                    {/* Search bar inside language dropdown */}
                    <div className="px-3 pt-1 pb-2 border-b border-gray-100">
                      <div className="relative flex items-center">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                        <input
                          type="text"
                          value={searchLangQuery}
                          onChange={(e) => setSearchLangQuery(e.target.value)}
                          placeholder={t.searchLanguages}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#83184d] focus:bg-white transition"
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* Scrollable list of all languages */}
                    <div className="max-h-[300px] overflow-y-auto py-1 divide-y divide-gray-50">
                      {filteredLanguages.length > 0 ? (
                        filteredLanguages.map((lang) => {
                          const isSelected = selectedLanguage === lang.id;
                          return (
                            <button
                              key={lang.id}
                              onClick={() => handleSelectLanguage(lang.id)}
                              className={`w-full flex items-center justify-between px-3.5 py-2 text-[13px] transition cursor-pointer text-left ${
                                isSelected
                                  ? "bg-[#fdf2f7] text-[#83184d] font-semibold"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-[#83184d]"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="text-base shrink-0">
                                  {lang.flag}
                                </span>
                                <div className="truncate">
                                  <div className="text-[13px] font-medium leading-tight">
                                    {lang.name}
                                  </div>
                                  <div className="text-[11px] text-slate-400 leading-tight">
                                    {lang.englishName}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                                <span className="text-[10.5px] text-slate-400 font-mono">
                                  {lang.code}
                                </span>
                                {isSelected && (
                                  <Check className="w-3.5 h-3.5 text-[#83184d]" />
                                )}
                              </div>
                            </button>
                          );
                        })
                      ) : (
                        <div className="px-4 py-3 text-xs text-slate-400 text-center">
                          {t.noLanguages}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button (Contact Us) */}
            <a
              href="/contact"
              className="px-5 py-2 rounded-full bg-[#83184d] text-white text-[14px] font-medium hover:bg-[#721240] transition duration-150 shadow-md shadow-[#83184d]/20 active:scale-[0.98] shrink-0"
            >
              {t.contactUs}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => toggleDropdown("language")}
              className="p-1.5 text-gray-600 rounded-lg hover:bg-gray-100"
              title="Select Language"
            >
              <span className="text-base">{currentLanguage.flag}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* PRODUCTS MEGA MENU (Desktop) */}
        {activeDropdown === "products" && (
          <div className="hidden md:block absolute left-0 right-0 top-full pt-3 z-50">
            <div className="w-full rounded-[24px] bg-white shadow-[0_20px_50px_rgba(16,32,56,0.14)] border border-slate-200/80 p-6 sm:p-8 animate-in fade-in duration-200">
              <div className="grid grid-cols-12 gap-8">
                {/* Left Side: Product Category Navigation Tabs (4 cols / w-[260px]) */}
                <div className="col-span-3 space-y-2 border-r border-slate-100 pr-6">
                  {productCategories.map((category) => {
                    const isActive = activeProductTab === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveProductTab(category.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left transition-all duration-150 cursor-pointer ${
                          isActive
                            ? "bg-[#102038] text-white font-semibold shadow-sm"
                            : "text-[#374151] hover:bg-slate-50 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={
                              isActive ? "text-[#789d26]" : "text-slate-400"
                            }
                          >
                            {category.id === "voice" ? (
                              <Phone className="w-4 h-4" />
                            ) : category.id === "messaging" ? (
                              <MessageSquare className="w-4 h-4" />
                            ) : (
                              <span className="w-4 h-4 flex items-center justify-center rounded-full border-[1.75px] border-current">
                                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                              </span>
                            )}
                          </span>
                          <span className="text-[14.5px]">{category.name}</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive
                              ? "text-[#789d26] translate-x-0.5"
                              : "text-slate-300"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Right Side: Category Items 2-Column Grid (9 cols) */}
                <div className="col-span-9 pl-4">
                  <div className="pb-3">
                    <h3 className="text-[19px] font-bold text-[#102038]">
                      {currentCategory.name}
                    </h3>
                    <p className="text-[13px] text-slate-400 mt-0.5">
                      {currentCategory.tagline}
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-slate-100 mb-6" />

                  {/* 2-Column Items Grid matching screenshot */}
                  <div className="grid grid-cols-2 gap-x-12 gap-y-5">
                    {currentCategory.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3.5 p-1.5 rounded-xl hover:bg-[#f9fbf7] transition-all duration-150"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#ebf6dc] text-[#558117] flex items-center justify-center shrink-0 group-hover:bg-[#558117] group-hover:text-white transition-colors duration-150">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-[14.5px] font-semibold text-[#102038] group-hover:text-[#558117] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[12.5px] text-slate-400 group-hover:text-slate-500 leading-snug">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-50 overflow-y-auto px-5 py-6 space-y-6 shadow-2xl border-t border-gray-100 animate-in slide-in-from-top-4 duration-200">
            {/* Mobile Region & Language Toggles */}
            <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() =>
                  setMobileSection(
                    mobileSection === "region" ? null : "region"
                  )
                }
                className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition ${
                  mobileSection === "region"
                    ? "bg-[#5f8a1a] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200"
                }`}
              >
                <span>{currentRegion.flag}</span>
                <span className="truncate max-w-[80px]">
                  {selectedRegion === "global" ? t.region : currentRegion.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setMobileSection(
                    mobileSection === "language" ? null : "language"
                  )
                }
                className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition ${
                  mobileSection === "language"
                    ? "bg-[#83184d] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200"
                }`}
              >
                <span>{currentLanguage.flag}</span>
                <span className="truncate max-w-[80px]">
                  {currentLanguage.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Region Selector Drawer Panel */}
            {mobileSection === "region" && (
              <div className="p-3 bg-white border border-[#5f8a1a]/30 rounded-2xl shadow-sm space-y-2 animate-in fade-in duration-150">
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchRegionQuery}
                    onChange={(e) => setSearchRegionQuery(e.target.value)}
                    placeholder={t.searchCountries}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-[#55801a]"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto divide-y divide-gray-50">
                  {filteredRegions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => {
                        handleSelectRegion(region.id);
                        setMobileSection(null);
                      }}
                      className={`w-full flex items-center justify-between px-2 py-2 text-xs text-left ${
                        selectedRegion === region.id
                          ? "text-[#55801a] font-bold"
                          : "text-slate-600"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{region.flag}</span>
                        <span>{region.name}</span>
                      </span>
                      {selectedRegion === region.id && (
                        <Check className="w-3.5 h-3.5 text-[#55801a]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Language Selector Drawer Panel */}
            {mobileSection === "language" && (
              <div className="p-3 bg-white border border-[#83184d]/30 rounded-2xl shadow-sm space-y-2 animate-in fade-in duration-150">
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchLangQuery}
                    onChange={(e) => setSearchLangQuery(e.target.value)}
                    placeholder={t.searchLanguages}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-[#83184d]"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto divide-y divide-gray-50">
                  {filteredLanguages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => {
                        handleSelectLanguage(lang.id);
                        setMobileSection(null);
                      }}
                      className={`w-full flex items-center justify-between px-2 py-2 text-xs text-left ${
                        selectedLanguage === lang.id
                          ? "text-[#83184d] font-bold"
                          : "text-slate-600"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>
                          {lang.name}{" "}
                          <span className="text-slate-400 text-[10px]">
                            ({lang.englishName})
                          </span>
                        </span>
                      </span>
                      {selectedLanguage === lang.id && (
                        <Check className="w-3.5 h-3.5 text-[#83184d]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t.products}
              </div>
              <div className="space-y-2">
                {productCategories.map((cat) => (
                  <div key={cat.id} className="p-3 bg-slate-50 rounded-xl space-y-1">
                    <div className="font-semibold text-sm text-[#102038] flex items-center gap-2">
                      <span className="text-[#558117]">{cat.icon}</span>
                      {cat.name}
                    </div>
                    <div className="pl-6 space-y-1 pt-1">
                      {cat.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-slate-500 hover:text-[#558117] py-0.5"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
                {t.solutions}
              </div>
              <div className="space-y-1">
                {solutionItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2.5 rounded-xl hover:bg-slate-50 font-medium text-sm text-[#102038]"
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 rounded-xl hover:bg-slate-50 font-medium text-sm text-[#102038]"
              >
                {t.aboutUs}
              </a>
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 rounded-full bg-[#83184d] text-white font-semibold text-sm shadow-md"
              >
                {t.contactUs}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


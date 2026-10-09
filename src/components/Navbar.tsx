import React, { useState, useRef, useEffect } from "react";
import {
  Globe,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Menu,
  X,
  Phone,
  MessageSquare,
  Layers,
  PhoneCall,
  Search,
  Check,
} from "lucide-react";
import { theme } from "../theme";
import logoImg from "../assets/logo.png";

export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

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
      <span
        className={`text-[23px] sm:text-[25px] font-bold tracking-tight text-[${theme.colors.text.heading}] select-none`}
      >
        iNet Global
      </span>
    </div>
  );
};

interface ProductSubItem {
  title: string;
  description: string;
  href: string;
}

interface ProductCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  items: ProductSubItem[];
}

const productCategories: ProductCategory[] = [
  {
    id: "voice",
    name: "Voice",
    icon: <Phone className="w-[18px] h-[18px]" />,
    tagline: "Global voice connectivity built around your business.",
    items: [
      {
        title: "Wholesale Voice",
        description: "Reliable global voice connectivity",
        href: "#wholesale-voice",
      },
      {
        title: "Ai Voice",
        description: "Intelligent automated voice solutions",
        href: "#ai-voice",
      },
      {
        title: "Virtual Numbers (DID)",
        description: "Local numbers, global presence",
        href: "#virtual-numbers",
      },
    ],
  },
  {
    id: "messaging",
    name: "Messaging",
    icon: <MessageSquare className="w-[18px] h-[18px]" />,
    tagline:
      "Messaging solutions designed for reliable customer communication.",
    items: [
      {
        title: "Wholesale SMS",
        description: "Global SMS delivery solutions",
        href: "#wholesale-sms",
      },
      {
        title: "RCS Business Messaging",
        description: "Rich interactive business messaging",
        href: "#rcs",
      },
      {
        title: "OTP SMS",
        description: "Secure verification message delivery",
        href: "#otp-sms",
      },
    ],
  },
  {
    id: "omnichannel",
    name: "Omnichannel",
    icon: <Layers className="w-[18px] h-[18px]" />,
    tagline: "Connect with customers across the channels they already use.",
    items: [
      {
        title: "WhatsApp Business",
        description: "Connect through WhatsApp conversations",
        href: "#whatsapp",
      },
      {
        title: "Voice Calls",
        description: "Business voice communication",
        href: "#voice-calls",
      },
      {
        title: "Telegram",
        description: "Engage customers through Telegram",
        href: "#telegram",
      },
      {
        title: "Instagram",
        description: "Connect through Instagram messaging",
        href: "#instagram",
      },
      {
        title: "Facebook",
        description: "Connect through Facebook messaging",
        href: "#facebook",
      },
      {
        title: "TikTok",
        description: "Engage customers through TikTok",
        href: "#tiktok",
      },
      {
        title: "Live Chat Plugin",
        description: "Real-time website customer conversations",
        href: "#live-chat",
      },
      {
        title: "RCS",
        description: "Rich conversational messaging",
        href: "#rcs-messaging",
      },
      {
        title: "Email",
        description: "Integrated business email communication",
        href: "#email",
      },
    ],
  },
];

const solutionItems = [
  {
    title: "Advance Sms portal",
    description: "Reliable global voice connectivity",
    href: "#advance-sms-portal",
  },
  {
    title: "Complete Dialer Solution",
    description: "Reliable global voice connectivity",
    href: "#complete-dialer",
  },
  {
    title: "Internation Number (DID)",
    description: "Reliable global voice connectivity",
    href: "#internation-number",
  },
];

export interface CountryItem {
  name: string;
  code: string;
  flag: string;
  region: string;
  dialCode: string;
}

export const countryList: CountryItem[] = [
  { name: "Global (All Regions)", code: "GLOBAL", flag: "🌐", region: "All", dialCode: "Global" },
  { name: "United States", code: "US", flag: "🇺🇸", region: "North America", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧", region: "Europe", dialCode: "+44" },
  { name: "Canada", code: "CA", flag: "🇨🇦", region: "North America", dialCode: "+1" },
  { name: "Germany", code: "DE", flag: "🇩🇪", region: "Europe", dialCode: "+49" },
  { name: "Singapore", code: "SG", flag: "🇸🇬", region: "Asia Pacific", dialCode: "+65" },
  { name: "India", code: "IN", flag: "🇮🇳", region: "Asia Pacific", dialCode: "+91" },
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", region: "Middle East", dialCode: "+971" },
  { name: "Australia", code: "AU", flag: "🇦🇺", region: "Asia Pacific", dialCode: "+61" },
  { name: "France", code: "FR", flag: "🇫🇷", region: "Europe", dialCode: "+33" },
  { name: "Japan", code: "JP", flag: "🇯🇵", region: "Asia Pacific", dialCode: "+81" },
  { name: "Netherlands", code: "NL", flag: "🇳🇱", region: "Europe", dialCode: "+31" },
  { name: "Switzerland", code: "CH", flag: "🇨🇭", region: "Europe", dialCode: "+41" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", region: "Middle East", dialCode: "+966" },
  { name: "Hong Kong", code: "HK", flag: "🇭🇰", region: "Asia Pacific", dialCode: "+852" },
  { name: "Spain", code: "ES", flag: "🇪🇸", region: "Europe", dialCode: "+34" },
  { name: "Italy", code: "IT", flag: "🇮🇹", region: "Europe", dialCode: "+39" },
  { name: "Sweden", code: "SE", flag: "🇸🇪", region: "Europe", dialCode: "+46" },
  { name: "Ireland", code: "IE", flag: "🇮🇪", region: "Europe", dialCode: "+353" },
  { name: "Mexico", code: "MX", flag: "🇲🇽", region: "North America", dialCode: "+52" },
  { name: "Brazil", code: "BR", flag: "🇧🇷", region: "Latin America", dialCode: "+55" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦", region: "Africa", dialCode: "+27" },
  { name: "South Korea", code: "KR", flag: "🇰🇷", region: "Asia Pacific", dialCode: "+82" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾", region: "Asia Pacific", dialCode: "+60" },
  { name: "Philippines", code: "PH", flag: "🇵🇭", region: "Asia Pacific", dialCode: "+63" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩", region: "Asia Pacific", dialCode: "+62" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿", region: "Asia Pacific", dialCode: "+64" },
  { name: "Qatar", code: "QA", flag: "🇶🇦", region: "Middle East", dialCode: "+974" },
  { name: "Egypt", code: "EG", flag: "🇪🇬", region: "Middle East", dialCode: "+20" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬", region: "Africa", dialCode: "+234" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeProductTab, setActiveProductTab] = useState<string>("voice");
  
  // Country & Region State
  const [selectedCountry, setSelectedCountry] = useState<CountryItem>(countryList[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegionFilter, setSelectedRegionFilter] = useState("All");

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
  };

  const currentCategory =
    productCategories.find((cat) => cat.id === activeProductTab) ||
    productCategories[0];

  // Filter countries based on search and region filter
  const filteredCountries = countryList.filter((country) => {
    const matchesSearch =
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion =
      selectedRegionFilter === "All" ||
      country.region === selectedRegionFilter ||
      country.code === "GLOBAL";
    return matchesSearch && matchesRegion;
  });

  const regions = ["All", "North America", "Europe", "Asia Pacific", "Middle East", "Latin America", "Africa"];

  return (
    <header
      ref={navRef}
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs"
    >
      <div className={`${theme.layout.maxWidth} mx-auto px-2 sm:px-4 relative`}>
        {/* Three equal columns: 1 (Left), 2 (Center), 3 (Right) */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20 w-full">
          {/* DIV 1: Brand Logo (Left) */}
          <div className="flex items-center justify-start">
            <a href="#" className="flex items-center gap-2 group">
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
                      ? `text-[${theme.colors.accent.DEFAULT}]`
                      : `text-[#374151] hover:text-[${theme.colors.accent.DEFAULT}]`
                  }`}
                >
                  <span>Products</span>
                  {activeDropdown === "products" ? (
                    <ChevronUp
                      className={`w-4 h-4 text-[${theme.colors.accent.DEFAULT}]`}
                    />
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
                      ? `text-[${theme.colors.accent.DEFAULT}]`
                      : `text-[#374151] hover:text-[${theme.colors.accent.DEFAULT}]`
                  }`}
                >
                  <span>Solutions</span>
                  {activeDropdown === "solutions" ? (
                    <ChevronUp
                      className={`w-4 h-4 text-[${theme.colors.accent.DEFAULT}]`}
                    />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {/* Solutions Dropdown Card */}
                {activeDropdown === "solutions" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                    <div className={theme.classes.dropdownCard + " w-[330px]"}>
                      {solutionItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-[#f9fbf7] transition-all duration-150"
                        >
                          {/* Light Green Circular Icon Badge */}
                          <div
                            className={`w-10 h-10 rounded-full bg-[${theme.colors.accent.lightBg}] text-[${theme.colors.accent.dark}] flex items-center justify-center shrink-0 group-hover:bg-[${theme.colors.accent.dark}] group-hover:text-white transition-colors duration-150`}
                          >
                            <PhoneCall className="w-4 h-4" />
                          </div>

                          {/* Text details */}
                          <div className="space-y-0.5">
                            <h4
                              className={`text-[14.5px] font-semibold text-[${theme.colors.text.heading}] group-hover:text-[${theme.colors.accent.DEFAULT}] transition-colors`}
                            >
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
                href="#about"
                className={`text-[#374151] hover:text-[${theme.colors.accent.DEFAULT}] transition-colors py-2 font-medium`}
              >
                About Us
              </a>
            </nav>
          </div>

          {/* DIV 3: Selectors & CTA Button (Right) */}
          <div className="hidden md:flex items-center justify-end gap-3 h-full">
            {/* Region / Country Selector */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => toggleDropdown("region")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                  activeDropdown === "region"
                    ? `border-[${theme.colors.accent.DEFAULT}] ring-1 ring-[${theme.colors.accent.DEFAULT}] bg-[#f7faf5]`
                    : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50/60"
                }`}
              >
                <span className="text-base">{selectedCountry.flag}</span>
                <span className="text-[13.5px] font-medium text-gray-800 max-w-[110px] truncate">
                  {selectedCountry.code === "GLOBAL" ? "Region" : selectedCountry.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {/* COUNTRY / REGION SELECTOR MODAL DROPDOWN */}
              {activeDropdown === "region" && (
                <div className="absolute right-0 top-full pt-3 z-50">
                  <div className="w-[360px] sm:w-[400px] rounded-[24px] bg-white shadow-[0_20px_50px_rgba(16,32,56,0.18)] border border-slate-200/80 p-4 space-y-3 animate-in fade-in duration-200 select-none">
                    
                    {/* Header with Title */}
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#5f8a1a]" />
                        <h4 className="text-[14.5px] font-bold text-[#102038]">
                          Select Region & Country
                        </h4>
                      </div>
                      <span className="text-[11.5px] text-slate-400 font-medium">
                        {filteredCountries.length} countries
                      </span>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by country or code (+1, +44...)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[13px] rounded-xl focus:outline-none focus:border-[#5f8a1a] focus:bg-white transition"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {/* Region Filter Chips */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[12px] no-scrollbar">
                      {regions.map((region) => (
                        <button
                          key={region}
                          onClick={() => setSelectedRegionFilter(region)}
                          className={`px-2.5 py-1 rounded-full whitespace-nowrap transition cursor-pointer font-medium ${
                            selectedRegionFilter === region
                              ? "bg-[#102038] text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {region}
                        </button>
                      ))}
                    </div>

                    {/* Country List (Scrollable) */}
                    <div className="max-h-[240px] overflow-y-auto space-y-1 pr-1 divide-y divide-slate-50">
                      {filteredCountries.length === 0 ? (
                        <div className="py-6 text-center text-[13px] text-slate-400">
                          No countries found for "{searchQuery}"
                        </div>
                      ) : (
                        filteredCountries.map((country) => {
                          const isSelected = selectedCountry.code === country.code;
                          return (
                            <button
                              key={country.code}
                              onClick={() => {
                                setSelectedCountry(country);
                                setActiveDropdown(null);
                                setSearchQuery("");
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition cursor-pointer text-left ${
                                isSelected
                                  ? "bg-[#f1f7e3] text-[#102038]"
                                  : "hover:bg-slate-50 text-slate-700"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="text-lg shrink-0">{country.flag}</span>
                                <div className="min-w-0">
                                  <div className="text-[13.5px] font-medium truncate">
                                    {country.name}
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    {country.region}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className="text-[12px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                                  {country.dialCode}
                                </span>
                                {isSelected && (
                                  <Check className="w-4 h-4 text-[#5f8a1a] stroke-[2.5]" />
                                )}
                              </div>
                            </button>
                          );
                        })
                      )}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => toggleDropdown("language")}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300 text-[14px] text-gray-700 hover:border-gray-400 hover:bg-gray-50/60 transition cursor-pointer"
              >
                <Globe className="w-4 h-4 text-gray-500 stroke-[1.75]" />
                <span className="font-normal">English</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {activeDropdown === "language" && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="w-36 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 border border-gray-100">
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      English
                    </button>
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Español
                    </button>
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      日本語
                    </button>
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Deutsch
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us CTA Button */}
            <a
              href="#contact"
              className={`inline-flex items-center justify-center px-5 py-2 rounded-full bg-[${theme.colors.primary.DEFAULT}] hover:bg-[${theme.colors.primary.hover}] text-white text-[14px] font-medium transition duration-150 shadow-sm shadow-[#83184d]/20 active:scale-[0.98]`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-end gap-2">
            <a
              href="#contact"
              className={`px-3.5 py-1.5 rounded-full bg-[${theme.colors.primary.DEFAULT}] text-white text-xs font-medium`}
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* PRODUCTS MEGA MENU DROPDOWN */}
        {activeDropdown === "products" && (
          <div className="hidden md:block absolute left-0 right-0 top-full pt-2 z-50">
            <div
              className={`w-full bg-white ${theme.radius.dropdown} ${theme.shadows.dropdown} border border-slate-200/80 p-6 lg:p-8 flex gap-8 items-stretch animate-in fade-in duration-200`}
            >
              {/* Left Column: Category Tabs (Voice, Messaging, Omnichannel) */}
              <div className="w-[240px] lg:w-[270px] shrink-0 space-y-2 border-r border-slate-100 pr-6">
                {productCategories.map((category) => {
                  const isActive = activeProductTab === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveProductTab(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-[12px] text-[15px] font-medium transition-all duration-150 cursor-pointer ${
                        isActive
                          ? `bg-[${theme.colors.dark.header}] text-white shadow-sm`
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            isActive
                              ? `text-[${theme.colors.accent.bright}]`
                              : "text-slate-400"
                          }
                        >
                          {category.icon}
                        </span>
                        <span>{category.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive
                            ? `text-[${theme.colors.accent.bright}]`
                            : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Category Details & Items Grid */}
              <div className="flex-1 pl-2 space-y-6">
                {/* Title & Tagline Header */}
                <div className="space-y-1 border-b border-slate-100 pb-4">
                  <h3
                    className={`text-[20px] font-bold text-[${theme.colors.text.heading}] tracking-tight`}
                  >
                    {currentCategory.name}
                  </h3>
                  <p className="text-[13.5px] text-slate-400 font-normal">
                    {currentCategory.tagline}
                  </p>
                </div>

                {/* Sub-items Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-1">
                  {currentCategory.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-[#f9fbf7] transition-all duration-150"
                    >
                      {/* Light Green Circular Icon Badge */}
                      <div
                        className={`w-10 h-10 rounded-full bg-[${theme.colors.accent.lightBg}] text-[${theme.colors.accent.dark}] flex items-center justify-center shrink-0 group-hover:bg-[${theme.colors.accent.dark}] group-hover:text-white transition-colors duration-150`}
                      >
                        <PhoneCall className="w-4 h-4" />
                      </div>

                      {/* Text details */}
                      <div className="space-y-0.5">
                        <h4
                          className={`text-[14.5px] font-semibold text-[${theme.colors.text.heading}] group-hover:text-[${theme.colors.accent.DEFAULT}] transition-colors`}
                        >
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
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            {/* Products Accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown((prev) =>
                    prev === "mobile-products" ? null : "mobile-products"
                  )
                }
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-[15px] font-medium text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    activeDropdown === "mobile-products"
                      ? `rotate-180 text-[${theme.colors.accent.DEFAULT}]`
                      : ""
                  }`}
                />
              </button>

              {activeDropdown === "mobile-products" && (
                <div
                  className={`pl-4 pr-2 py-2 space-y-2 border-l-2 border-[${theme.colors.accent.DEFAULT}]/40 ml-3`}
                >
                  {productCategories.map((category) => (
                    <div key={category.id} className="space-y-1.5 py-1">
                      <div
                        className={`text-[12.5px] font-semibold text-[${theme.colors.accent.DEFAULT}] uppercase tracking-wider`}
                      >
                        {category.name}
                      </div>
                      {category.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block py-1 text-[13.5px] text-gray-600 hover:text-gray-900"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown((prev) =>
                    prev === "mobile-solutions" ? null : "mobile-solutions"
                  )
                }
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-[15px] font-medium text-gray-800 hover:bg-gray-50 cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    activeDropdown === "mobile-solutions"
                      ? `rotate-180 text-[${theme.colors.accent.DEFAULT}]`
                      : ""
                  }`}
                />
              </button>

              {activeDropdown === "mobile-solutions" && (
                <div
                  className={`pl-4 pr-2 py-2 space-y-1.5 border-l-2 border-[${theme.colors.accent.DEFAULT}]/40 ml-3`}
                >
                  {solutionItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className="block py-1.5 text-[13.5px] text-gray-600 hover:text-gray-900"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* About Us */}
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-[15px] font-medium text-gray-800 hover:bg-gray-50"
            >
              About Us
            </a>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            {/* Mobile Region Accordion */}
            <div>
              <button
                onClick={() =>
                  setActiveDropdown((prev) =>
                    prev === "mobile-region" ? null : "mobile-region"
                  )
                }
                className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg cursor-pointer"
              >
                <span className="flex items-center gap-2 font-medium">
                  <span className="text-base">{selectedCountry.flag}</span>
                  <span>{selectedCountry.code === "GLOBAL" ? "Region: Global" : selectedCountry.name}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    activeDropdown === "mobile-region" ? "rotate-180 text-[#5f8a1a]" : ""
                  }`}
                />
              </button>

              {activeDropdown === "mobile-region" && (
                <div className="mt-2 p-3 bg-white border border-slate-200 rounded-2xl space-y-2.5 shadow-sm">
                  {/* Search Bar on Mobile */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search country or code (+1, +44...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[12.5px] rounded-lg focus:outline-none focus:border-[#5f8a1a] focus:bg-white transition"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Region Filter Chips on Mobile */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11.5px] no-scrollbar">
                    {regions.map((region) => (
                      <button
                        key={region}
                        onClick={() => setSelectedRegionFilter(region)}
                        className={`px-2 py-0.5 rounded-full whitespace-nowrap transition cursor-pointer font-medium ${
                          selectedRegionFilter === region
                            ? "bg-[#102038] text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>

                  {/* Filtered Country List on Mobile */}
                  <div className="max-h-[190px] overflow-y-auto space-y-1 divide-y divide-slate-50 pr-0.5">
                    {filteredCountries.length === 0 ? (
                      <div className="py-4 text-center text-xs text-slate-400">
                        No countries found
                      </div>
                    ) : (
                      filteredCountries.map((country) => {
                        const isSelected = selectedCountry.code === country.code;
                        return (
                          <button
                            key={country.code}
                            onClick={() => {
                              setSelectedCountry(country);
                              setActiveDropdown(null);
                              setSearchQuery("");
                            }}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition cursor-pointer ${
                              isSelected
                                ? "bg-[#f1f7e3] text-[#102038]"
                                : "hover:bg-slate-50 text-slate-700"
                            }`}
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              <span className="text-base shrink-0">{country.flag}</span>
                              <span className="truncate font-medium">{country.name}</span>
                            </span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="text-[11px] text-slate-500 font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                                {country.dialCode}
                              </span>
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 text-[#5f8a1a] stroke-[2.5]" />
                              )}
                            </div>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>

            <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                Language: English
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center py-2.5 rounded-full bg-[${theme.colors.primary.DEFAULT}] hover:bg-[${theme.colors.primary.hover}] text-white text-[14px] font-medium shadow-sm transition`}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

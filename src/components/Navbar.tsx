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
} from "lucide-react";

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
      <span className="text-[23px] sm:text-[25px] font-bold tracking-tight text-[#16213e] select-none">
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
    tagline: "Messaging solutions designed for reliable customer communication.",
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

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeProductTab, setActiveProductTab] = useState<string>("voice");

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

  return (
    <header
      ref={navRef}
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs"
    >
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 relative">
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
                      ? "text-[#5f8a1a]"
                      : "text-[#374151] hover:text-[#5f8a1a]"
                  }`}
                >
                  <span>Products</span>
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
                  <span>Solutions</span>
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
                          {/* Light Green Circular Icon Badge */}
                          <div className="w-10 h-10 rounded-full bg-[#ebf6dc] text-[#558117] flex items-center justify-center shrink-0 group-hover:bg-[#558117] group-hover:text-white transition-colors duration-150">
                            <PhoneCall className="w-4 h-4" />
                          </div>

                          {/* Text details */}
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
                href="#about"
                className="text-[#374151] hover:text-[#5f8a1a] transition-colors py-2 font-medium"
              >
                About Us
              </a>
            </nav>
          </div>

          {/* DIV 3: Selectors & CTA Button (Right) */}
          <div className="hidden md:flex items-center justify-end gap-3 h-full">
            {/* Region Selector */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => toggleDropdown("region")}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300 text-[14px] text-gray-700 hover:border-gray-400 hover:bg-gray-50/60 transition cursor-pointer"
              >
                <Globe className="w-4 h-4 text-gray-500 stroke-[1.75]" />
                <span className="font-normal">Region</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {activeDropdown === "region" && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="w-44 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 border border-gray-100">
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Global (All)
                    </button>
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      North America
                    </button>
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Asia Pacific
                    </button>
                    <button
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Europe
                    </button>
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
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#83184d] hover:bg-[#701240] text-white text-[14px] font-medium transition duration-150 shadow-sm shadow-[#83184d]/20 active:scale-[0.98]"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-end gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full bg-[#83184d] text-white text-xs font-medium"
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
            <div className="w-full bg-white rounded-[24px] shadow-[0_20px_50px_rgba(16,32,56,0.14)] border border-slate-200/80 p-6 lg:p-8 flex gap-8 items-stretch animate-in fade-in duration-200">
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
                          ? "bg-[#102038] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            isActive ? "text-[#84cc16]" : "text-slate-400"
                          }
                        >
                          {category.icon}
                        </span>
                        <span>{category.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive ? "text-[#84cc16]" : "text-slate-400"
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
                  <h3 className="text-[20px] font-bold text-[#102038] tracking-tight">
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
                      <div className="w-10 h-10 rounded-full bg-[#ebf6dc] text-[#558117] flex items-center justify-center shrink-0 group-hover:bg-[#558117] group-hover:text-white transition-colors duration-150">
                        <PhoneCall className="w-4 h-4" />
                      </div>

                      {/* Text details */}
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
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-2">
            <a
              href="#products"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50"
            >
              Solutions
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-50"
            >
              About Us
            </a>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                Region: Global
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                Language: English
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

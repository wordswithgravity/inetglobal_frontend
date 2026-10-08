import React, { useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

import logoImg from "../assets/logo.png";

export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4">
        {/* Three equal columns: 1 (Left), 2 (Center), 3 (Right) with equal space between */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20 w-full">
          
          {/* DIV 1: Brand Logo (Left) */}
          <div className="flex items-center justify-start">
            <a href="#" className="flex items-center gap-2 group">
              <Logo />
            </a>
          </div>

          {/* DIV 2: Desktop Navigation Links (Center) */}
          <div className="hidden md:flex items-center justify-center">
            <nav className="flex items-center space-x-8 text-[15px] text-[#374151] font-normal">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("products")}
                  className="flex items-center gap-1.5 hover:text-[#7e174b] transition-colors py-2 cursor-pointer focus:outline-none"
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform duration-200" />
                </button>

                {activeDropdown === "products" && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50 border border-gray-100">
                    <a
                      href="#cloud"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7e174b]"
                    >
                      Cloud Connectivity
                    </a>
                    <a
                      href="#sdwan"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7e174b]"
                    >
                      SD-WAN Solutions
                    </a>
                    <a
                      href="#security"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7e174b]"
                    >
                      Cybersecurity & SASE
                    </a>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center gap-1.5 hover:text-[#7e174b] transition-colors py-2 cursor-pointer focus:outline-none"
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform duration-200" />
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50 border border-gray-100">
                    <a
                      href="#enterprise"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7e174b]"
                    >
                      Enterprise Networking
                    </a>
                    <a
                      href="#datacenter"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7e174b]"
                    >
                      Data Center Interconnect
                    </a>
                    <a
                      href="#remote"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7e174b]"
                    >
                      Remote Workforce
                    </a>
                  </div>
                )}
              </div>

              {/* About Us */}
              <a
                href="#about"
                className="hover:text-[#7e174b] transition-colors py-2"
              >
                About Us
              </a>
            </nav>
          </div>

          {/* DIV 3: Selectors & CTA Button (Right) */}
          <div className="hidden md:flex items-center justify-end gap-3">
            {/* Region Selector */}
            <div className="relative">
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
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50 border border-gray-100">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Global (All)
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    North America
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Asia Pacific
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Europe
                  </button>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
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
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-50 border border-gray-100">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    English
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Español
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    日本語
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Deutsch
                  </button>
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

          {/* Mobile Menu Button (Mobile view fallback) */}
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
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

/**
 * iNet Global - Centralized Theme & Design System
 * 
 * Contains all colors, fonts, sizes, breakpoints, container constraints,
 * elevation shadows, and responsive style mappings for the entire application.
 */

export const theme = {
  // 1. BRAND & COLOR SYSTEM
  colors: {
    // Primary Brand (Plum / Berry)
    primary: {
      DEFAULT: "#83184d",
      hover: "#721240",
      active: "#5c0e33",
      light: "#f9e9f1",
      border: "#83184d",
      shadow: "rgba(131, 24, 77, 0.25)",
    },

    // Accent / Secondary (Fresh Lime & Green Ecosystem)
    accent: {
      DEFAULT: "#5f8a1a",
      dark: "#698a22",
      bright: "#84cc16",
      lime: "#8cc624",
      lightBg: "#ebf6dc",
      paleBg: "#eaf3de",
      softBg: "#f1f7e3",
      border: "#6f9a1f",
      line: "#97be34",
    },

    // Dark Navy & Deep Backgrounds
    dark: {
      header: "#102038",
      card: "#12243d",
      showcase: "#132641",
      footer: "#0d1b33",
      footerInput: "#162746",
      footerBorder: "#182845",
      phoneFrame: "#1a1520",
    },

    // Light Neutral & Background Colors
    light: {
      white: "#ffffff",
      heroBg: "#EEF2EB",
      solutionsBg: "#f3f5f0",
      hoverLight: "#f7faf5",
      subtleBg: "#f9fbf7",
      mutedBg: "#f1f5f9",
    },

    // Typography & Content Neutral Tones
    text: {
      heading: "#102038",
      subheading: "#12223b",
      body: "#4e5e70",
      secondary: "#556578",
      muted: "#5b6878",
      lightMuted: "#6b7280",
      placeholder: "#9aa3af",
      white: "#ffffff",
      footerMuted: "#94a3b8",
    },

    // Borders & Dividers
    border: {
      subtle: "#e5e7eb",
      card: "#d9ded6",
      tab: "#d3d9d0",
      lightGreen: "#7e995f",
      divider: "#f1f5f9",
    },
  },

  // 2. DEVICE BREAKPOINTS & CONTAINER CONSTRAINTS
  layout: {
    maxWidth: "max-w-[1440px]",
    sectionPx: "px-3 sm:px-6 lg:px-8",
    sectionPy: "py-12 sm:py-16 lg:py-20",
    container: "max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8",
    breakpoints: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },

  // 3. RESPONSIVE TYPOGRAPHY SCALES
  typography: {
    fontFamily: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    // Heading Scales
    heroHeading: "text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-semibold tracking-tight leading-[1.12]",
    sectionHeading: "text-2xl sm:text-3xl lg:text-[40px] xl:text-[42px] font-bold tracking-tight leading-[1.18]",
    subSectionHeading: "text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight leading-[1.2]",
    cardHeading: "text-xl sm:text-2xl font-bold tracking-tight",
    bodyLarge: "text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed",
    bodyRegular: "text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-relaxed",
    bodySmall: "text-[13px] sm:text-[14px] leading-normal",
    badge: "text-[12px] sm:text-[13px] font-bold tracking-wider uppercase",
  },

  // 4. BORDER RADII & ELEVATIONS
  radius: {
    full: "rounded-full",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    megaCard: "rounded-[30px]",
    serviceCard: "rounded-[26px]",
    dropdown: "rounded-[24px]",
    phone: "rounded-[34px]",
    phoneScreen: "rounded-[27px]",
  },

  shadows: {
    card: "shadow-sm hover:shadow-xl transition-shadow duration-300",
    dropdown: "shadow-[0_20px_50px_rgba(16,32,56,0.14)]",
    primaryCta: "shadow-md shadow-[#83184d]/25 hover:shadow-lg hover:shadow-[#83184d]/30",
    phone: "shadow-[0_14px_36px_rgba(0,0,0,0.4)]",
  },

  // 5. WIRED REUSABLE COMPONENT STYLE CLASSES
  classes: {
    // Primary CTA Button (Plum)
    primaryButton:
      "inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#83184d] hover:bg-[#721240] text-white text-[14.5px] sm:text-[16px] font-medium transition duration-150 shadow-md shadow-[#83184d]/25 active:scale-[0.98] cursor-pointer",

    // Secondary Outline Button
    secondaryButton:
      "inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#7e995f] hover:bg-[#e4ece0] text-[#1e2d42] text-[14.5px] sm:text-[16px] font-medium transition duration-150 active:scale-[0.98] cursor-pointer",

    // Section Category Pill Badge
    sectionBadge:
      "text-[12px] sm:text-[13px] font-bold tracking-wider text-[#698a22] uppercase flex items-center gap-2",

    // Section Badge Green Line Marker
    badgeLine: "w-5 h-[2px] bg-[#698a22]",

    // Section Header Container
    sectionHeader: "max-w-3xl space-y-3 sm:space-y-4",

    // Section Title
    sectionTitle: "text-2xl sm:text-3xl lg:text-[40px] xl:text-[42px] font-bold text-[#102038] tracking-tight leading-[1.18]",

    // Section Description
    sectionDescription: "text-[15px] sm:text-[16px] text-[#556578] leading-relaxed max-w-2xl",

    // Card Standard Style
    serviceCard:
      "bg-white rounded-[26px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200",

    // Pill Tab Active & Inactive
    pillTabActive:
      "bg-[#102038] text-white border-[#6f9a1f] shadow-md shadow-slate-900/10",
    pillTabInactive:
      "bg-white/80 sm:bg-transparent text-[#364152] border-[#d3d9d0] hover:bg-white hover:border-[#bcc7b6]",

    // Dropdown Floating Card
    dropdownCard:
      "rounded-[24px] bg-white shadow-[0_20px_50px_rgba(16,32,56,0.14)] border border-slate-200/80 p-5 z-50 space-y-2 animate-in fade-in duration-200",
  },
} as const;

export type Theme = typeof theme;
export default theme;

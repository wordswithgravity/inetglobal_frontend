import type { WholesaleMessageTranslation } from "./wholesaleMessageTranslations";

export interface OtpComparisonTranslation {
  comparisonTitle: string;
  comparisonSubtitle: string;
  otpTitle: string;
  otpBadge: string;
  otpItems: string[];
  appTitle: string;
  appBadge: string;
  appItems: string[];
  securityNotice: string;
}

export interface OtpSmsServicesTranslation extends WholesaleMessageTranslation {
  comparison: OtpComparisonTranslation;
}

const en: OtpSmsServicesTranslation = {
  // 1. Hero
  heroBadge: "OTP SMS SERVICES • AUTHENTICATION INFRASTRUCTURE",
  heroTitle: "Every Verification, Connected with Confidence",
  heroDesc:
    "Protect customer accounts and simplify user authentication with reliable OTP SMS services. Send one-time passwords for logins, registrations, password resets, and transaction verification through messaging infrastructure designed to support secure and efficient authentication workflows.",
  talkToExpert: "Talk to an OTP Specialist",
  exploreCapabilities: "Explore Capabilities",
  stats: {
    routing: "Reliable OTP",
    routingLabel: "Timely OTP Delivery",
    traffic: "Simple API",
    trafficLabel: "Flexible API Integration",
    insights: "Global Reach",
    insightsLabel: "Global SMS Connectivity",
  },
  heroLiveBadge1: {
    title: "Instant OTP Delivery",
    label: "Low-latency verification routes",
  },
  heroLiveBadge2: {
    title: "Carrier-Grade 2FA",
    sub: "Direct operator routing",
  },

  // 2. Messaging Infrastructure That Protects Every Verification
  whyBadge: "MESSAGING INFRASTRUCTURE",
  whyTitle: "Messaging Infrastructure That Protects Every Verification",
  whySubtitle1:
    "Support secure customer authentication with OTP messaging designed for timely delivery, application integration, and scalable verification requirements.",
  whySubtitle2:
    "Engineered for low-latency transmission and high delivery assurance across international operator networks.",
  whyCards: [
    {
      title: "Reliable OTP Delivery",
      desc: "Send one-time passwords through SMS routes designed to support consistent delivery across supported destinations and mobile networks.",
      footer: "High delivery assurance",
    },
    {
      title: "Fast Verification Messages",
      desc: "Help users complete authentication workflows efficiently with timely OTP delivery, subject to network and operator conditions.",
      footer: "Low-latency routing",
    },
    {
      title: "Flexible API Integration",
      desc: "Connect OTP SMS capabilities with websites, mobile applications, and backend systems through supported messaging APIs.",
      footer: "REST API & SMPP",
    },
    {
      title: "Scalable Authentication",
      desc: "Support growing user registrations, login requests, and transaction verification volumes with flexible messaging capacity.",
      footer: "High-volume throughput",
    },
  ],

  // 3. One OTP Platform, Built Around Your Business
  capabilitiesBadge: "ONE OTP PLATFORM",
  capabilitiesTitle: "One OTP Platform, Built Around Your Business",
  capabilitiesDesc:
    "Support different authentication journeys with OTP SMS services designed for everyday digital interactions and business-critical verification processes.",
  designSolution: "Start Verifying Users",
  solutionNote:
    "Configured for high-volume 2FA, logins, and transactional authentication.",
  capabilities: [
    {
      title: "Login Verification",
      desc: "Verify user access by sending one-time passwords during supported login workflows.",
      tag: "Login 2FA",
    },
    {
      title: "Account Registration",
      desc: "Confirm new user registrations with OTP messages that help validate access to a supplied mobile number.",
      tag: "Sign-Up",
    },
    {
      title: "Password Reset",
      desc: "Support account recovery workflows with one-time passwords for eligible password reset requests.",
      tag: "Account Recovery",
    },
    {
      title: "Transaction Authentication",
      desc: "Add an SMS-based verification step to supported financial and business transaction workflows.",
      tag: "Transactions",
    },
    {
      title: "User Identity Verification",
      desc: "Help validate mobile number ownership during registration and other appropriate identity verification processes.",
      tag: "Identity",
    },
    {
      title: "Application Security",
      desc: "Integrate OTP messaging into web applications, mobile apps, and digital services to support authentication requirements.",
      tag: "App Security",
    },
    {
      title: "Automated OTP Triggers",
      desc: "Trigger verification messages through configured application events and authentication workflows.",
      tag: "Automated",
    },
    {
      title: "High-Volume OTP Messaging",
      desc: "Support large volumes of verification requests with messaging capacity aligned with business demand.",
      tag: "Scalable Volume",
    },
  ],

  howItWorksBadge: "VERIFICATION WORKFLOW",
  howItWorksTitle: "How OTP Delivery Operates",
  howItWorksSubtitle:
    "Low-latency API submission to handset delivery within seconds.",
  howItWorksSteps: [
    {
      step: "01",
      title: "User Request",
      desc: "The user triggers an authentication event such as a login, signup, or financial transaction.",
      note: "Application trigger",
    },
    {
      step: "02",
      title: "API Submission",
      desc: "Your system passes the one-time code to our OTP API gateway via secure REST endpoints.",
      note: "REST API / SMPP",
    },
    {
      step: "03",
      title: "Priority Carrier Routing",
      desc: "The message is dispatched immediately over dedicated direct carrier routes with priority queueing.",
      note: "Low latency routing",
    },
    {
      step: "04",
      title: "Handset Delivery & Verification",
      desc: "The user receives the code and completes authentication, while delivery status is returned via webhook.",
      note: "Real-time DLR receipt",
    },
  ],

  // 4. A Global Network Designed to Keep Verification Moving
  networkBadge: "GLOBAL SMS COVERAGE",
  networkTitle: "A Global Network Designed to Keep Verification Moving",
  networkDesc:
    "Connect with users across supported markets through SMS connectivity designed to support authentication and account verification workflows.",
  networkBullets: [
    "SMS connectivity across supported destinations",
    "Integration with authentication systems",
    "Scalable OTP message volumes",
    "Delivery status visibility where available",
    "Flexible API-based message submission",
    "Support for time-sensitive verification workflows",
  ],
  networkStats: [
    { val: "Global Coverage", label: "Global SMS coverage across destinations" },
    { val: "Priority Routes", label: "Low latency verification traffic" },
  ],
  networkBadgeOverlay: {
    title: "OTP Carrier Gateway",
    sub: "Direct carrier routing for time-sensitive authentication",
  },
  networkFooterNote:
    "Delivery speed and route options depend on destination operator policies and recipient network conditions.",

  // 5. Built for Every Verification Moment
  momentsBadge: "USE CASES & INDUSTRIES",
  momentsTitle: "Built for Every Verification Moment",
  momentsSubtitle:
    "OTP SMS supports digital authentication across industries where businesses need to verify users, protect account access, or confirm important actions.",
  moments: [
    {
      title: "Banking and Financial Services",
      desc: "Support login verification and transaction authentication through OTP workflows designed to complement broader security controls.",
      footer: "Financial 2FA & payment authorization",
    },
    {
      title: "E-commerce and Retail",
      desc: "Verify customer accounts, support secure sign-ins, and help protect eligible checkout and account actions.",
      footer: "Secure checkout & account protection",
    },
    {
      title: "Travel and Hospitality",
      desc: "Confirm customer registrations, account access, and booking-related actions through SMS-based verification.",
      footer: "Booking validation & passenger security",
    },
    {
      title: "Digital Platforms and Applications",
      desc: "Integrate OTP messaging into user registration, password recovery, and login processes across web and mobile applications.",
      footer: "Smooth user onboarding & recovery",
    },
  ],

  // 6. See How OTP SMS Supports Authentication
  comparison: {
    comparisonTitle: "See How OTP SMS Supports Authentication",
    comparisonSubtitle:
      "Choose the appropriate verification method based on your application requirements, user experience, security needs, and target audience.",
    otpTitle: "OTP SMS",
    otpBadge: "Universal Mobile Access",
    otpItems: [
      "Delivers one-time passwords to mobile numbers",
      "Works with SMS-capable mobile phones",
      "Can support registration, login, and recovery workflows",
      "Depends on mobile network delivery conditions",
    ],
    appTitle: "App-Based Authentication",
    appBadge: "Software Authenticator",
    appItems: [
      "Can generate codes or approval requests within an authentication app",
      "May work without SMS connectivity, depending on the method",
      "Requires users to configure or access the relevant application",
      "Can offer security benefits depending on implementation",
    ],
    securityNotice:
      "Security recommendation: OTP SMS can help verify possession of a mobile number, but it is not phishing-resistant and may be vulnerable to SIM swapping, interception, or social engineering. For sensitive systems, consider additional authentication controls and risk-based verification.",
  },

  intelligenceBadge: "DELIVERY INTELLIGENCE",
  intelligenceTitle: "Sub-Second Latency & Real-Time Delivery Reports",
  intelligenceDesc:
    "Monitor OTP performance metrics, carrier response times, and real-time delivery receipts (DLR) to ensure your users never experience authentication delays.",
  intelligenceBullets: [
    "High-priority queueing for instant OTP dispatch",
    "Real-time DLR webhooks and status visibility",
    "Automated route failover for maximum delivery rates",
    "Detailed latency analytics by country and operator",
  ],
  intelligenceFootnote:
    "Webhooks notify your security systems immediately upon handset receipt.",
  messageLogCard: {
    title: "OTP Delivery Status Feed",
    badge: "PRIORITY DLR",
    tab1: "Delivered",
    tab2: "Queued",
    tab3: "Verified",
    colType: "Type",
    colState: "Status",
    colReceipt: "Carrier Latency",
    row1Type: "Login OTP",
    row1State: "Delivered",
    row1Receipt: "1.2s Handset DLR",
    row2Type: "Password Reset",
    row2State: "Delivered",
    row2Receipt: "0.9s Handset DLR",
    row3Type: "Transaction Auth",
    row3State: "Delivered",
    row3Receipt: "1.1s Handset DLR",
    footerText: "Sub-second verification delivery across global mobile operators",
  },
  protectionTitle: "Protection Built for Critical Verification",
  protectionBadge: "SECURITY & COMPLIANCE",
  protectionCards: [
    {
      title: "Rate Limiting & Abuse Prevention",
      desc: "Safeguard against SMS pumping and brute force with configurable velocity limits.",
    },
    {
      title: "Global Sender ID Compliance",
      desc: "Ensure international compliance and sender registration across regulated destinations.",
    },
  ],

  // 7. From Integration to Verification, Together
  timelineBadge: "STRUCTURED IMPLEMENTATION",
  timelineTitle: "From Integration to Verification, Together",
  timelineSubtitle:
    "Deploy OTP SMS with a structured implementation process that aligns with your application, security requirements, and expected message traffic.",
  timelineSteps: [
    {
      step: "01",
      title: "Share Your Requirements",
      desc: "Provide details about your application, target countries, expected OTP volumes, and authentication workflows.",
    },
    {
      step: "02",
      title: "Plan the Verification Flow",
      desc: "Define OTP triggers, validity periods, resend limits, message templates, and appropriate verification rules.",
    },
    {
      step: "03",
      title: "Integrate the SMS API",
      desc: "Connect your application or authentication system to the supported OTP messaging API.",
    },
    {
      step: "04",
      title: "Test and Validate",
      desc: "Test message delivery, verification logic, rate limits, failure handling, and user experience before deployment.",
    },
    {
      step: "05",
      title: "Go Live",
      desc: "Launch your OTP messaging workflow and monitor available delivery metrics and verification performance.",
    },
  ],
  integrationPlan: {
    title: "OTP Verification Specs",
    planBadge: "PRODUCTION READY",
    connection: "REST API / Webhooks / SMPP",
    traffic: "Time-Sensitive 2FA & Auth Codes",
    formats: "Numeric OTP, Alphanumeric Tokens",
    feedback: "Real-Time DLR Delivery Receipts",
    senderSetup: "Registered Sender ID / Short Code",
    check1: "Configured expiration timers & retry throttling",
    check2: "Fallback routes and delivery status webhooks ready",
    discussNote:
      "Speak with our specialists to plan your authentication integration.",
    discussBtn: "Start Integration",
  },

  faqBadge: "FREQUENTLY ASKED QUESTIONS",
  faqTitle: "Common Questions About OTP SMS Services",
  faqSubtitle:
    "Learn how our low-latency infrastructure secures your authentication flows.",
  faqs: [
    {
      q: "How fast are OTP SMS messages delivered?",
      a: "Our priority OTP routes deliver codes in seconds under standard carrier network conditions.",
    },
    {
      q: "What APIs are available for OTP integration?",
      a: "We support developer-friendly REST APIs with comprehensive documentation, code samples, and SMPP v3.4 for enterprise high-throughput setups.",
    },
    {
      q: "How can we protect against SMS pumping and fraud?",
      a: "We provide built-in rate limiting, velocity checks, destination blocking, and IP whitelist capabilities to prevent abusive traffic.",
    },
  ],

  // 8. Make Every Verification More Reliable
  ctaBadge: "UPGRADE AUTHENTICATION",
  ctaTitle: "Make Every Verification More Reliable",
  ctaSubtitle:
    "Support your digital customer journeys with OTP SMS services designed for authentication, account verification, and transaction confirmation. Integrate messaging into your applications and deliver verification codes through supported mobile networks.",
  contactUs: "Get Started with OTP SMS",
  ctaFootnote:
    "Speak with our specialists to learn more about OTP messaging routes and API setup.",
};

const translations: Record<string, OtpSmsServicesTranslation> = {
  en,
};

export const getOtpSmsServicesTranslations = (
  language?: string,
  _region?: string,
  _regionName?: string
): OtpSmsServicesTranslation => {
  return (language && translations[language]) || en;
};

export default getOtpSmsServicesTranslations;

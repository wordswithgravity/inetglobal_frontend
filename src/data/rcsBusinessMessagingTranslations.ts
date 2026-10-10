import type { WholesaleMessageTranslation } from "./wholesaleMessageTranslations";

export interface RcsComparisonTranslation {
  comparisonTitle: string;
  comparisonSubtitle: string;
  traditionalSmsTitle: string;
  traditionalSmsBadge: string;
  traditionalSmsItems: string[];
  rcsTitle: string;
  rcsBadge: string;
  rcsItems: string[];
  noticeTitle: string;
  noticeText: string;
}

export interface RcsBusinessMessagingTranslation extends WholesaleMessageTranslation {
  comparison: RcsComparisonTranslation;
}

const en: RcsBusinessMessagingTranslation = {
  heroBadge: "RCS BUSINESS MESSAGING • NEXT-GEN COMMUNICATION",
  heroTitle: "Every Message, Connected with Confidence",
  heroDesc:
    "Transform customer communication with RCS business messaging. Deliver interactive messages, rich media, branded content, and timely updates that help your business create more engaging customer experiences across supported mobile networks.",
  talkToExpert: "Talk to a Messaging Specialist",
  exploreCapabilities: "Explore Capabilities",
  stats: {
    routing: "Rich Interactive",
    routingLabel: "Interactive Messaging",
    traffic: "Branded Profile",
    trafficLabel: "Customer Communication",
    insights: "Global Reach",
    insightsLabel: "Carrier-Grade Messaging",
  },
  heroLiveBadge1: {
    title: "Verified Brand",
    label: "Sender ID with logo & badge",
  },
  heroLiveBadge2: {
    title: "Rich Interaction",
    sub: "Buttons, media & carousels",
  },

  // 2. Messaging Infrastructure That Makes Every Interaction Count
  whyBadge: "ENGAGING INFRASTRUCTURE",
  whyTitle: "Messaging Infrastructure That Makes Every Interaction Count",
  whySubtitle1:
    "Deliver engaging business communication with messaging infrastructure designed to support reliable delivery, interactive content, and scalable customer engagement.",
  whySubtitle2:
    "Combine high delivery rates with modern conversational capabilities on supported mobile networks.",
  whyCards: [
    {
      title: "Rich Media Messaging",
      desc: "Share images, videos, buttons, and other supported interactive elements to make business messages more engaging and informative.",
      footer: "High engagement",
    },
    {
      title: "Branded Business Messages",
      desc: "Present your business identity through supported branded messaging experiences that help customers recognize your communications.",
      footer: "Verified trust",
    },
    {
      title: "Interactive Customer Engagement",
      desc: "Encourage customers to take action directly from supported messages using interactive buttons and rich messaging features.",
      footer: "Direct actions",
    },
    {
      title: "Reliable Message Delivery",
      desc: "Support timely business communication through messaging routes and delivery capabilities available across supported networks.",
      footer: "Scalable routes",
    },
  ],

  // 3. One Messaging Platform, Built Around Your Business
  capabilitiesBadge: "ONE MESSAGING PLATFORM",
  capabilitiesTitle: "One Messaging Platform, Built Around Your Business",
  capabilitiesDesc:
    "Create customer messaging experiences that align with your communication goals, customer journey, and campaign requirements.",
  designSolution: "Get Started with RCS",
  solutionNote:
    "Tailored message formats for promotional and transactional business communication.",
  capabilities: [
    {
      title: "Promotional Messaging",
      desc: "Share offers, product announcements, and promotional updates through engaging RCS messages.",
      tag: "Promotions",
    },
    {
      title: "Transactional Notifications",
      desc: "Keep customers informed with order confirmations, booking updates, payment notifications, and other important business messages.",
      tag: "Notifications",
    },
    {
      title: "Interactive Campaigns",
      desc: "Encourage customer actions through supported interactive content, suggested replies, and call-to-action buttons.",
      tag: "Interactive",
    },
    {
      title: "Personalized Communication",
      desc: "Tailor message content to customer preferences and relevant business interactions where your systems and consent arrangements support personalization.",
      tag: "Personalized",
    },
    {
      title: "Appointment Reminders",
      desc: "Send timely reminders and service updates to help customers stay informed about upcoming appointments.",
      tag: "Reminders",
    },
    {
      title: "Customer Support Messaging",
      desc: "Help customers access relevant information and support options through interactive messaging experiences.",
      tag: "Support",
    },
    {
      title: "Rich Product Information",
      desc: "Present product details, images, and relevant offers in a more engaging message format.",
      tag: "Catalogs",
    },
    {
      title: "Automated Message Delivery",
      desc: "Integrate messaging into business workflows to trigger relevant communications based on configured events and customer actions.",
      tag: "Automated",
    },
  ],

  howItWorksBadge: "MESSAGE WORKFLOW",
  howItWorksTitle: "How RCS Messaging Operates",
  howItWorksSubtitle:
    "Seamless transmission from your CRM or API to recipient mobile devices with smart SMS fallback.",
  howItWorksSteps: [
    {
      step: "01",
      title: "API Trigger",
      desc: "Your application initiates an RCS message with rich media payloads, quick replies, and branding.",
      note: "Standard REST API",
    },
    {
      step: "02",
      title: "Capability Check",
      desc: "Our platform checks device and operator compatibility to route via RCS or gracefully fall back to SMS.",
      note: "Device & carrier detection",
    },
    {
      step: "03",
      title: "Carrier Transmission",
      desc: "The message is routed through supported mobile operators directly to the recipient's default messaging app.",
      note: "Direct operator connection",
    },
    {
      step: "04",
      title: "Interactive Delivery & Read Receipt",
      desc: "Track real-time delivery confirmations, read receipts, and button tap analytics.",
      note: "Rich reporting",
    },
  ],

  // 4. A Global Network Designed to Keep Messages Moving
  networkBadge: "GLOBAL REACH & CONNECTIVITY",
  networkTitle: "A Global Network Designed to Keep Messages Moving",
  networkDesc:
    "Reach customers across supported markets with messaging connectivity designed to support business communication at scale. RCS availability and functionality depend on device compatibility, mobile operator support, and market coverage.",
  networkBullets: [
    "Messaging connectivity across supported markets",
    "Rich messaging capabilities on compatible devices",
    "Flexible integration with business applications",
    "Scalable messaging for growing communication needs",
    "Delivery reporting where supported",
    "Support for transactional and promotional use cases",
  ],
  networkStats: [
    { val: "Global Reach", label: "Supported markets and carriers" },
    { val: "Operator Direct", label: "Supported operator connectivity" },
  ],
  networkBadgeOverlay: {
    title: "Supported Operator Connectivity",
    sub: "Direct carrier delivery with SMS fallback",
  },
  networkFooterNote:
    "RCS availability and functionality depend on device compatibility, mobile operator support, and market coverage.",

  // 5. Built for Every Customer Interaction
  momentsBadge: "USE CASES & INDUSTRIES",
  momentsTitle: "Built for Every Customer Interaction",
  momentsSubtitle:
    "Discover how businesses across industries use RCS messaging to improve engagement, share timely information, and create richer customer experiences.",
  moments: [
    {
      title: "Retail & E-commerce",
      desc: "Share rich product updates, promotional offers, order confirmations, and interactive customer journeys.",
      footer: "Rich carousels & instant checkout",
    },
    {
      title: "Banking & Financial Services",
      desc: "Deliver account alerts, transactional updates, appointment confirmations, and service information.",
      footer: "Verified sender trust & security",
    },
    {
      title: "Travel & Hospitality",
      desc: "Provide booking confirmations, itinerary updates, interactive boarding passes, and timely travel alerts.",
      footer: "Real-time itinerary & boarding cards",
    },
    {
      title: "Healthcare & Appointments",
      desc: "Send appointment reminders, visit notifications, service instructions, and relevant care updates.",
      footer: "Interactive rescheduling & updates",
    },
  ],

  // 6. See the Difference Rich Messaging Can Make
  comparison: {
    comparisonTitle: "See the Difference Rich Messaging Can Make",
    comparisonSubtitle:
      "Explore how RCS business messaging enhances customer communication compared to traditional messaging channels.",
    traditionalSmsTitle: "Traditional SMS",
    traditionalSmsBadge: "Standard Channel",
    traditionalSmsItems: [
      "Standard text messaging",
      "160-character limitation per segment",
      "Plain text only",
      "Basic sender information",
      "Standard delivery reports",
    ],
    rcsTitle: "RCS Business Messaging",
    rcsBadge: "Next-Gen Interactive",
    rcsItems: [
      "Rich media support (images, videos, cards)",
      "Interactive suggested replies and action buttons",
      "Branded sender profiles with logos and business names",
      "Carousels, rich cards, and formatted content",
      "Enhanced delivery and read receipts where supported",
    ],
    noticeTitle: "Operator and Device Availability Notice:",
    noticeText:
      "RCS messaging features, branded sender presentation, interactive buttons, and delivery capabilities depend on recipient device compatibility, mobile operating system support, mobile network operator enablement, and provider platform configuration. Where RCS is unavailable or unsupported, messages may fall back to standard SMS or alternative messaging channels based on your solution configuration.",
  },

  intelligenceBadge: "DELIVERY INTELLIGENCE",
  intelligenceTitle: "Intelligent Routing & Operator Reliability",
  intelligenceDesc:
    "Maintain high delivery rates with intelligent fallback mechanisms that transition smoothly to SMS when RCS is not supported on a recipient handset.",
  intelligenceBullets: [
    "Automatic device and carrier capability detection",
    "Configurable fallback to high-deliverability SMS routes",
    "Detailed delivery and interaction event tracking",
    "Compliance and opt-out management across all channels",
  ],
  intelligenceFootnote:
    "Real-time event webhooks give your operations team instant visibility on message status.",
  messageLogCard: {
    title: "RCS Live Interaction Stream",
    badge: "OPERATOR FEED",
    tab1: "RCS Delivered",
    tab2: "Button Clicked",
    tab3: "Read Receipt",
    colType: "Type",
    colState: "Status",
    colReceipt: "Carrier Result",
    row1Type: "Branded Card",
    row1State: "Read",
    row1Receipt: "Carrier Delivered",
    row2Type: "Suggested Reply",
    row2State: "Tapped",
    row2Receipt: "User Confirmed",
    row3Type: "Carousel Offer",
    row3State: "Delivered",
    row3Receipt: "Rich Media Rendered",
    footerText: "Real-time delivery verification across supported operators",
  },
  protectionTitle: "Protection & Compliance Built-In",
  protectionBadge: "ENTERPRISE GRADE",
  protectionCards: [
    {
      title: "Verified Brand Authentication",
      desc: "Prevent spoofing and impersonation with official carrier and platform verification.",
    },
    {
      title: "Safe Fallback Protocols",
      desc: "Ensure 100% of critical communications reach end-users via SMS when RCS is offline.",
    },
  ],

  // 7. From Requirements to Rich Messaging, Together
  timelineBadge: "ONBOARDING & INTEGRATION",
  timelineTitle: "From Requirements to Rich Messaging, Together",
  timelineSubtitle:
    "We work with you to understand your communication requirements, evaluate market availability, and help you launch engaging messaging experiences for your customers.",
  timelineSteps: [
    {
      step: "01",
      title: "Share Your Requirements",
      desc: "Tell us about your target destinations, expected message volumes, and communication use cases so we can evaluate suitable messaging solutions.",
    },
    {
      step: "02",
      title: "Plan Your Messaging Experience",
      desc: "Define your message formats, interactive elements, branding requirements, and campaign flows based on supported capabilities.",
    },
    {
      step: "03",
      title: "Configure Your Integration",
      desc: "Connect your systems using flexible messaging APIs, SMPP, or supported platform interfaces designed for scalable message delivery.",
    },
    {
      step: "04",
      title: "Test & Validate",
      desc: "Send test messages across supported routes and devices to confirm delivery, formatting, interactive buttons, and reporting capabilities.",
    },
    {
      step: "05",
      title: "Launch Your Campaigns",
      desc: "Begin sending branded, interactive messages to customers across supported mobile networks with ongoing technical support.",
    },
  ],
  integrationPlan: {
    title: "Integration & Setup Checklist",
    planBadge: "RCS PRODUCTION READY",
    connection: "REST API / SMPP / Webhooks",
    traffic: "Transactional & Promotional",
    formats: "Rich Cards, Carousels, Action Buttons",
    feedback: "Read Receipts & Interaction Analytics",
    senderSetup: "Verified Brand Profile with Logo",
    check1: "Configured fallback to standard SMS on unsupported devices",
    check2: "Branded agent verification & sandbox testing completed",
    discussNote:
      "Speak with our messaging specialists to explore RCS business messaging options.",
    discussBtn: "Discuss Requirements",
  },

  faqBadge: "FREQUENTLY ASKED QUESTIONS",
  faqTitle: "Common Questions About RCS Business Messaging",
  faqSubtitle:
    "Learn how RCS elevates customer communication and how it works with your existing setup.",
  faqs: [
    {
      q: "What happens if a recipient's phone does not support RCS?",
      a: "Our platform provides seamless SMS fallback. If the recipient device or mobile network does not support RCS, the message automatically delivers as a traditional SMS text.",
    },
    {
      q: "How does branded sender verification work?",
      a: "Branded sender profiles require business verification with mobile carriers. Once approved, messages display your official business name, logo, and a verified trust badge.",
    },
    {
      q: "Can customers interact directly with RCS messages?",
      a: "Yes. RCS supports interactive action buttons, suggested quick replies, calendar invites, maps, and external URLs right within the message window.",
    },
  ],

  // 8. Make Customer Communication More Engaging
  ctaBadge: "UPGRADE CUSTOMER COMMUNICATION",
  ctaTitle: "Make Customer Communication More Engaging",
  ctaSubtitle:
    "Upgrade your business communication with rich interactive messaging designed to engage customers and deliver memorable brand experiences. Enhance messages with rich content, build customer confidence with branded messaging, and automate key touchpoints.",
  contactUs: "Get Started with RCS Messaging",
  ctaFootnote:
    "Speak with our messaging specialists to learn more about RCS business messaging.",
};

const translations: Record<string, RcsBusinessMessagingTranslation> = {
  en,
};

export const getRcsBusinessMessagingTranslations = (
  language?: string,
  _region?: string,
  _regionName?: string
): RcsBusinessMessagingTranslation => {
  return (language && translations[language]) || en;
};

export default getRcsBusinessMessagingTranslations;

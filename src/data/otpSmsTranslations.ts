export interface OtpSmsTranslation {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  getStarted: string;
  bookDemo: string;
  heroFeatures: Array<{
    title: string;
  }>;
  managementBadge: string;
  managementTitle: string;
  platformControlTitle: string;
  platformControlDesc: string;
  platformControlBullets: string[];
  campaignCard: {
    title: string;
    draftBadge: string;
    step1: string;
    step2: string;
    step3: string;
    senderLabel: string;
    senderVal: string;
    audienceLabel: string;
    audienceVal: string;
    messageLabel: string;
    messageText: string;
    personalizedBadge: string;
    charCount: string;
    repliesTitle: string;
    repliesBadge: string;
    inboundText: string;
    inboundTime: string;
    replyText: string;
  };
  capabilitiesBadge: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  features: Array<{
    title: string;
    desc: string;
  }>;
  visibilityBadge: string;
  visibilityTitle: string;
  visibilitySubtitle: string;
  visibilityBullets: string[];
  enterpriseBadge: string;
  enterpriseTitle: string;
  enterpriseSubtitle: string;
  enterpriseCards: {
    card1: {
      title: string;
      header: string;
      user1Name: string;
      user1Role: string;
      user2Name: string;
      user2Role: string;
      user3Name: string;
      user3Role: string;
      protectionText: string;
      bullets: string[];
      note: string;
    };
    card2: {
      title: string;
      header: string;
      amount: string;
      sub: string;
      stat1Label: string;
      stat1Val: string;
      stat2Label: string;
      stat2Val: string;
      pillText: string;
      bullets: string[];
      note: string;
    };
    card3: {
      title: string;
      header: string;
      row1Country: string;
      row1Type: string;
      row1Rate: string;
      row2Country: string;
      row2Type: string;
      row2Rate: string;
      row3Country: string;
      row3Type: string;
      row3Rate: string;
      pill1: string;
      pill2: string;
      bullets: string[];
      note: string;
    };
  };
  workflowBadge: string;
  workflowTitle: string;
  workflowSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactUs: string;
}

const en: OtpSmsTranslation = {
  heroBadge: "SMS PORTAL SOLUTION",
  heroTitle: "Powerful SMS Portal Built for High-Volume Messaging",
  heroSubtitle:
    "Send, receive, manage, and monitor business SMS from one intelligent platform.",
  heroDesc:
    "From single messages to enterprise-scale campaigns, our SMS Portal gives you the tools, automation, routing, and analytics you need to communicate reliably.",
  getStarted: "Get Started",
  bookDemo: "Book a Demo",
  heroFeatures: [
    { title: "Global SMS Coverage" },
    { title: "Advanced Routing" },
    { title: "Bulk SMS & Campaigns" },
    { title: "Two-Way Messaging" },
    { title: "API Integration" },
    { title: "Real-Time Delivery Reports" },
  ],
  managementBadge: "SMS MANAGEMENT PLATFORM",
  managementTitle: "Everything You Need to Manage SMS",
  platformControlTitle: "One Platform. Complete SMS Control.",
  platformControlDesc:
    "Manage your entire messaging operation from a centralized dashboard designed for speed, visibility, and scalability.",
  platformControlBullets: [
    "Compose, personalize, and schedule campaigns",
    "Keep contacts and conversations in one workspace",
    "Track delivery, routing, and usage as messages move",
  ],
  campaignCard: {
    title: "Create a campaign",
    draftBadge: "Draft saved",
    step1: "01 Compose",
    step2: "02 Audience",
    step3: "03 Schedule",
    senderLabel: "Sender ID",
    senderVal: "iNet",
    audienceLabel: "Audience",
    audienceVal: "Order updates • 24,850 contacts",
    messageLabel: "Message",
    messageText:
      "Hi {first_name}, your order {order_id} has shipped. Track it at {tracking_url}. Reply HELP for support.",
    personalizedBadge: "Personalized fields enabled",
    charCount: "118 / 160",
    repliesTitle: "Customer replies",
    repliesBadge: "2-way SMS",
    inboundText: "Your order is on its way. Reply HELP for support.",
    inboundTime: "10:42 • Delivered",
    replyText: "Thanks! Can I update the delivery time?",
  },
  capabilitiesBadge: "MESSAGING CAPABILITIES",
  capabilitiesTitle: "Advanced SMS Features",
  capabilitiesSubtitle:
    "Powerful tools to manage, automate, and optimize every part of your SMS operation.",
  features: [
    {
      title: "Bulk SMS Campaigns",
      desc: "Send thousands or millions of messages with powerful campaign management, scheduling, contact segmentation, and delivery tracking.",
    },
    {
      title: "Two-Way SMS",
      desc: "Receive replies and manage conversations from the same platform. Perfect for customer support, notifications, verification, and engagement.",
    },
    {
      title: "SMS API",
      desc: "Connect your applications, CRM, website, or business software with our powerful REST API and automate your messaging workflows.",
    },
    {
      title: "Sender ID Management",
      desc: "Create and manage multiple Sender IDs based on destination, campaign, brand, or customer requirements.",
    },
    {
      title: "Smart Routing",
      desc: "Automatically select the best available route based on destination, carrier, cost, quality, and delivery performance.",
    },
    {
      title: "Delivery Reports",
      desc: "Monitor message status in real time with detailed Delivered, Failed, Pending, Expired, and Rejected reports.",
    },
  ],
  visibilityBadge: "VISIBILITY & CONTROL",
  visibilityTitle: "Know What Is Happening With Every Message",
  visibilitySubtitle:
    "Get complete visibility into your SMS traffic with real-time analytics and reporting.",
  visibilityBullets: [
    "Real-time SMS traffic monitoring",
    "Route performance analytics",
    "Campaign performance",
    "Real-time alerts",
    "Delivery and failure statistics",
    "Cost and usage reports",
    "API traffic monitoring",
    "Country and carrier-level reports",
    "Customer/account-wise reports",
    "Downloadable reports",
  ],
  enterpriseBadge: "ENTERPRISE READY",
  enterpriseTitle: "Built for Resellers, Enterprises & SMS Providers",
  enterpriseSubtitle:
    "Manage the people, pricing, and infrastructure behind a scalable messaging business.",
  enterpriseCards: {
    card1: {
      title: "Your workspace. Your brand.",
      header: "Workspace access",
      user1Name: "Aisha Morgan",
      user1Role: "Admin",
      user2Name: "James Lee",
      user2Role: "Operator",
      user3Name: "Sara Khan",
      user3Role: "Finance",
      protectionText: "Traffic protection active",
      bullets: [
        "Multi-user & role-based access",
        "White-label portal",
        "Customer management",
        "Fraud & abuse monitoring",
      ],
      note: "Illustrative configuration",
    },
    card2: {
      title: "Commercial control, simplified.",
      header: "Account wallet",
      amount: "$4,850.00",
      sub: "Available credit • USD",
      stat1Label: "October usage",
      stat1Val: "$2,569.00",
      stat2Label: "Last top-up",
      stat2Val: "+$5,000.00",
      pillText: "Auto billing enabled",
      bullets: [
        "Wallet & credit management",
        "Rate management",
        "Automated billing",
        "Transaction history",
      ],
      note: "Illustrative configuration",
    },
    card3: {
      title: "Flexible pricing. Connected routes.",
      header: "Pricing & connectivity",
      row1Country: "UK",
      row1Type: "Direct carrier",
      row1Rate: "$0.018",
      row2Country: "India",
      row2Type: "Premium A2P",
      row2Rate: "$0.012",
      row3Country: "US",
      row3Type: "Standard A2P",
      row3Rate: "$0.022",
      pill1: "SMPP online",
      pill2: "API online",
      bullets: [
        "Country-wise pricing",
        "Route-wise pricing",
        "Multiple supplier integration",
        "SMPP/API connectivity",
      ],
      note: "Illustrative configuration",
    },
  },
  workflowBadge: "PLATFORM WORKFLOW",
  workflowTitle: "From Message to Delivery",
  workflowSteps: [
    {
      step: "01",
      title: "Create Campaign",
      desc: "Compose your message, choose your audience, and schedule the right moment.",
    },
    {
      step: "02",
      title: "Smart Routing",
      desc: "Match every message to the best route for its destination and delivery needs.",
    },
    {
      step: "03",
      title: "Global Delivery",
      desc: "Reach mobile networks worldwide through connected SMS infrastructure.",
    },
    {
      step: "04",
      title: "Real-Time Reporting",
      desc: "Follow delivery receipts, performance, and usage from your portal.",
    },
  ],
  ctaBadge: "LET'S BUILD YOUR MESSAGING NETWORK",
  ctaTitle: "Grow Your Business with Business SMS Solutions",
  ctaSubtitle:
    "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
  contactUs: "Contact Us",
};

const es: OtpSmsTranslation = {
  ...en,
  heroBadge: "SOLUCIÓN DE PORTAL SMS",
  heroTitle: "Potente portal SMS para mensajería de alto volumen",
  heroSubtitle:
    "Envíe, reciba, administre y supervise SMS empresariales desde una plataforma inteligente.",
  heroDesc:
    "Desde mensajes individuales hasta campañas a gran escala, nuestro Portal SMS le ofrece las herramientas, automatización y análisis necesarios.",
  getStarted: "Empezar",
  bookDemo: "Reservar Demo",
  managementBadge: "PLATAFORMA DE GESTIÓN SMS",
  managementTitle: "Todo lo que necesita para gestionar sus SMS",
  platformControlTitle: "Una plataforma. Control total de SMS.",
  platformControlDesc:
    "Administre toda su operación de mensajería desde un panel centralizado diseñado para velocidad y escala.",
  capabilitiesBadge: "CAPACIDADES DE MENSAJERÍA",
  capabilitiesTitle: "Funciones avanzadas de SMS",
  capabilitiesSubtitle:
    "Herramientas potentes para gestionar, automatizar y optimizar su operación SMS.",
  visibilityBadge: "VISIBILIDAD Y CONTROL",
  visibilityTitle: "Sepa lo que ocurre con cada mensaje",
  visibilitySubtitle:
    "Obtenga visibilidad completa en tiempo real de su tráfico SMS.",
  enterpriseBadge: "LISTO PARA EMPRESAS",
  enterpriseTitle: "Diseñado para revendedores, empresas y proveedores de SMS",
  enterpriseSubtitle:
    "Administre usuarios, tarifas e infraestructura para escalar su negocio.",
  workflowBadge: "FLUJO DE TRABAJO DE LA PLATAFORMA",
  workflowTitle: "Del mensaje a la entrega",
  ctaBadge: "CONSTRUYAMOS SU RED DE MENSAJERÍA",
  ctaTitle: "Haga crecer su negocio con soluciones SMS empresariales",
  contactUs: "Contáctenos",
};

const ja: OtpSmsTranslation = {
  ...en,
  heroBadge: "SMSポータルソリューション",
  heroTitle: "大量配信に特化した高機能SMSポータル",
  heroSubtitle:
    "1つのインテリジェントなプラットフォームからビジネスSMSを送受信・管理・監視。",
  getStarted: "今すぐ始める",
  bookDemo: "デモを予約",
  managementBadge: "SMS管理プラットフォーム",
  managementTitle: "SMS管理に必要なすべてを網羅",
  platformControlTitle: "1つのプラットフォームで完全なSMSコントロール",
  capabilitiesBadge: "メッセージング機能",
  capabilitiesTitle: "高度なSMS機能",
  visibilityBadge: "可視化と制御",
  visibilityTitle: "すべてのメッセージの配信状況をリアルタイム把握",
  enterpriseBadge: "エンタープライズ対応",
  enterpriseTitle: "リセラー・大企業・SMSプロバイダー向け設計",
  workflowBadge: "プラットフォームワークフロー",
  workflowTitle: "メッセージ作成から配信完了まで",
  ctaBadge: "メッセージングネットワークの構築へ",
  ctaTitle: "ビジネスSMSソリューションで事業を拡大",
  contactUs: "お問い合わせ",
};

const te: OtpSmsTranslation = {
  ...en,
  heroBadge: "SMS పోర్టల్ సొల్యూషన్",
  heroTitle: "హై-వాల్యూమ్ మెసేజింగ్ కోసం శక్తివంతమైన SMS పోర్టల్",
  getStarted: "ప్రారంభించండి",
  bookDemo: "డెమో బుక్ చేయండి",
  managementBadge: "SMS మేనేజ్‌మెంట్ ప్లాట్‌ఫారమ్",
  managementTitle: "SMS నిర్వహణకు కావలసినవన్నీ ఒకే చోట",
  platformControlTitle: "ఒకే ప్లాట్‌ఫారమ్. పూర్తి SMS నియంత్రణ.",
  capabilitiesBadge: "మెసేజింగ్ సామర్థ్యాలు",
  capabilitiesTitle: "అత్యాధునిక SMS ఫీచర్లు",
  visibilityBadge: "విజిబిలిటీ & కంట్రోల్",
  visibilityTitle: "ప్రతి సందేశం యొక్క స్థితిని తెలుసుకోండి",
  enterpriseBadge: "ఎంటర్‌ప్రైజ్ రెడీ",
  enterpriseTitle: "రీసెల్లర్లు మరియు ఎంటర్‌ప్రైజెస్ కోసం నిర్మించబడింది",
  workflowBadge: "ప్లాట్‌ఫారమ్ వర్క్‌ఫ్లో",
  workflowTitle: "సందేశం నుండి డెలివరీ వరకు",
  ctaBadge: "మీ నెట్‌వర్క్‌ను నిర్మించండి",
  ctaTitle: "బిజినెస్ SMS సొల్యూషన్స్‌తో మీ వ్యాపారాన్ని విస్తరించండి",
  contactUs: "మమ్మల్ని సంప్రదించండి",
};

const ta: OtpSmsTranslation = {
  ...en,
  heroBadge: "SMS போர்டல் தீர்வு",
  heroTitle: "அதிக அளவிலான செய்திகளுக்கான சக்திவாய்ந்த SMS போர்டல்",
  getStarted: "தொடங்குங்கள்",
  bookDemo: "டெமோ பதிவு செய்யுங்கள்",
  managementBadge: "SMS மேலாண்மை தளம்",
  managementTitle: "SMS நிர்வகிக்க தேவையான அனைத்தும்",
  platformControlTitle: "ஒரே தளம். முழுமையான SMS கட்டுப்பாடு.",
  capabilitiesBadge: "தகவல் தொடர்பு திறன்கள்",
  capabilitiesTitle: "மேம்பட்ட SMS அம்சங்கள்",
  visibilityBadge: "கண்காணிப்பு மற்றும் கட்டுப்பாடு",
  visibilityTitle: "ஒவ்வொரு செய்தியின் நிலையை அறிந்து கொள்ளுங்கள்",
  enterpriseBadge: "நிறுவனங்களுக்கு ஏற்றது",
  enterpriseTitle: "மறுவிற்பனையாளர்கள் மற்றும் நிறுவனங்களுக்காக உருவாக்கப்பட்டது",
  workflowBadge: "தளத்தின் பணிப்பாய்வு",
  workflowTitle: "செய்தி உருவாக்கம் முதல் டெலிவரி வரை",
  ctaBadge: "மெசேஜிங் நெட்வொர்க்கை உருவாக்குங்கள்",
  ctaTitle: "வணிக SMS தீர்வுகள் மூலம் உங்கள் வணிகத்தை வளர்க்கவும்",
  contactUs: "தொடர்பு கொள்ளவும்",
};

const ar: OtpSmsTranslation = {
  ...en,
  heroBadge: "حلول بوابة الرسائل القصيرة",
  heroTitle: "بوابة SMS قوية مصممة للرسائل ذات الحجم الكبير",
  heroSubtitle:
    "إرسال واستقبال وإدارة ومراقبة رسائل SMS للأعمال من منصة ذكية واحدة.",
  getStarted: "ابدأ الآن",
  bookDemo: "طلب عرض توضيحي",
  managementBadge: "منصة إدارة الرسائل القصيرة",
  managementTitle: "كل ما تحتاجه لإدارة رسائل SMS",
  platformControlTitle: "منصة واحدة. تحكم كامل في الرسائل القصيرة.",
  capabilitiesBadge: "قدرات المراسلة",
  capabilitiesTitle: "ميزات SMS متقدمة",
  visibilityBadge: "الرؤية والتحكم",
  visibilityTitle: "اعرف ما يحدث مع كل رسالة بدقة",
  enterpriseBadge: "جاهز للمؤسسات",
  enterpriseTitle: "مصمم للموزعين والشركات الكبرى ومزودي خدمات SMS",
  workflowBadge: "سير عمل المنصة",
  workflowTitle: "من كتابة الرسالة إلى التسليم الفعلي",
  ctaBadge: "دعنا نبني شبكة المراسلة الخاصة بك",
  ctaTitle: "نمِّ أعمالك مع حلول رسائل SMS الاحترافية",
  contactUs: "اتصل بنا",
};

const translations: Record<string, OtpSmsTranslation> = {
  en,
  es,
  ja,
  te,
  ta,
  ar,
};

export const getOtpSmsTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): OtpSmsTranslation => {
  const base = translations[language] || translations["en"];
  return {
    ...base,
  };
};

export default getOtpSmsTranslations;

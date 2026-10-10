export interface VirtualDidTranslation {
  breadcrumb: string;
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  getStarted: string;
  requestDemo: string;
  heroFootnote: string;
  dashboardPreview: {
    title: string;
    liveBadge: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tab4: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    tableTitle: string;
    smsNotificationTitle: string;
    smsNotificationBody: string;
    phoneIncomingText: string;
    phoneCaller: string;
    phoneDid: string;
  };
  highlights: Array<{
    title: string;
  }>;
  managementBadge: string;
  managementTitle: string;
  managementSubtitle: string;
  managementChecklistTitle: string;
  managementChecklist: string[];
  inventoryCard: {
    title: string;
    subtitle: string;
    provisionBtn: string;
    searchPlaceholder: string;
    countryFilter: string;
    statusFilter: string;
    colDid: string;
    colCountry: string;
    colCustomer: string;
    colStatus: string;
    showingText: string;
  };
  callMgmtBadge: string;
  callMgmtTitle: string;
  callMgmtSubtitle: string;
  forwardingTitle: string;
  forwardingSubtitle: string;
  forwardingItems: string[];
  advancedRoutingTitle: string;
  advancedRoutingItems: string[];
  journeyCard: {
    title: string;
    liveBadge: string;
    step1Title: string;
    step1Val: string;
    step2Title: string;
    step2Val: string;
    step3Title: string;
    step3Val: string;
    footerText: string;
  };
  mobileBadge: string;
  mobileTitle: string;
  mobileSubtitle: string;
  mobileFooter: string;
  mobileFeaturesTitle: string;
  mobileFeatures: Array<{
    title: string;
    desc: string;
  }>;
  smsBadge: string;
  smsTitle: string;
  smsSubtitle: string;
  smsPerfectTitle: string;
  smsPerfectItems: string[];
  sampleSms: {
    badge: string;
    body: string;
    meta: string;
  };
  smsDashboard: {
    title: string;
    receivingBadge: string;
    todayLabel: string;
    todayVal: string;
    colSender: string;
    colDid: string;
    colMessage: string;
    colTime: string;
    monitorTitle: string;
    monitorItems: string[];
  };
  monitoringBadge: string;
  monitoringTitle: string;
  monitoringSubtitle: string;
  monitoringStats: {
    title: string;
    liveBadge: string;
    stat1Label: string;
    stat1Val: string;
    stat1Sub: string;
    stat2Label: string;
    stat2Val: string;
    stat2Sub: string;
    stat3Label: string;
    stat3Val: string;
    stat3Sub: string;
    stat4Label: string;
    stat4Val: string;
    stat4Sub: string;
    chartTitle: string;
    chartTimeframe: string;
    legend1: string;
    legend2: string;
  };
  operationalViewTitle: string;
  operationalViewItems: string[];
  resellerBadge: string;
  resellerTitle: string;
  resellerSubtitle: string;
  supportedAudiences: Array<{
    title: string;
  }>;
  whiteLabelCard: {
    title: string;
    desc: string;
    brandLabel: string;
    portalLabel: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tagline: string;
  };
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactUs: string;
}

const en: VirtualDidTranslation = {
  breadcrumb: "Products | DID Portal + Mobile App",
  heroBadge: "DID Portal + Mobile App",
  heroTitle: "Complete DID Management & Virtual Number Platform",
  heroDesc:
    "Manage virtual phone numbers, incoming calls, and SMS from one powerful DID Portal. Give your customers dedicated numbers with a mobile app for receiving calls and SMS from anywhere.",
  getStarted: "Get Started",
  requestDemo: "Request Demo",
  heroFootnote: "Global numbers. Local presence. One platform.",
  dashboardPreview: {
    title: "DID Portal",
    liveBadge: "Live",
    tab1: "Overview",
    tab2: "My numbers",
    tab3: "Call routing",
    tab4: "SMS inbox",
    stat1Label: "Active DIDs",
    stat1Val: "248",
    stat2Label: "Incoming calls",
    stat2Val: "1,842",
    stat3Label: "SMS received",
    stat3Val: "3,126",
    tableTitle: "Your global numbers",
    smsNotificationTitle: "New SMS received",
    smsNotificationBody: "Your appointment is confirmed for 10:30 AM.",
    phoneIncomingText: "Incoming business call",
    phoneCaller: "Jordan Davis",
    phoneDid: "via +1 212 555 0198",
  },
  highlights: [
    { title: "Global DID Numbers" },
    { title: "Incoming Calls" },
    { title: "SMS Receiving" },
    { title: "Mobile App" },
    { title: "Call Forwarding" },
    { title: "DID Management" },
    { title: "Real-Time Monitoring" },
  ],
  managementBadge: "DID Management",
  managementTitle: "Manage DIDs From One Centralized Portal",
  managementSubtitle:
    "Search, provision, activate, suspend, configure, and monitor your virtual numbers from a single dashboard.",
  managementChecklistTitle: "DID Management",
  managementChecklist: [
    "Global DID Inventory",
    "Country & city selection",
    "Number search",
    "Instant provisioning",
    "DID activation/deactivation",
    "Number assignment",
    "Customer-wise DID management",
    "Expiry management",
    "DID pricing management",
    "Number usage monitoring",
  ],
  inventoryCard: {
    title: "Number inventory",
    subtitle: "248 numbers across your customer accounts",
    provisionBtn: "+ Provision DID",
    searchPlaceholder: "Search numbers...",
    countryFilter: "All countries",
    statusFilter: "All statuses",
    colDid: "DID NUMBER",
    colCountry: "COUNTRY / CITY",
    colCustomer: "CUSTOMER",
    colStatus: "STATUS",
    showingText: "Showing 4 of 248 numbers",
  },
  callMgmtBadge: "Receive Calls Anywhere",
  callMgmtTitle: "Powerful Incoming Call Management",
  callMgmtSubtitle: "Route incoming calls exactly where you want them.",
  forwardingTitle: "Call Forwarding",
  forwardingSubtitle: "Forward calls to:",
  forwardingItems: [
    "Mobile numbers",
    "SIP accounts",
    "Browser softphones",
    "Call center agents",
    "IVR systems",
    "Multiple destinations",
  ],
  advancedRoutingTitle: "Advanced Routing",
  advancedRoutingItems: [
    "Time-based routing",
    "Country-based routing",
    "Caller-based routing",
    "Failover routing",
    "Sequential ringing",
    "Simultaneous ringing",
    "Business-hours routing",
  ],
  journeyCard: {
    title: "A smarter call journey",
    liveBadge: "Live",
    step1Title: "Incoming call",
    step1Val: "+44 20 7946 0912",
    step2Title: "Business hours",
    step2Val: "Mon-Fri · 09:00–18:00",
    step3Title: "Support team",
    step3Val: "Simultaneous ringing · 3 agents",
    footerText: "No answer? Forward to your mobile.",
  },
  mobileBadge: "Mobile App for Calls & SMS",
  mobileTitle: "Your DID in Your Pocket",
  mobileSubtitle:
    "Give users a dedicated mobile application to receive business calls and SMS directly on their smartphones.",
  mobileFooter: "Your business. Always with you.",
  mobileFeaturesTitle: "App Features",
  mobileFeatures: [
    {
      title: "Incoming Calls",
      desc: "Receive calls to your DID directly through the mobile app.",
    },
    {
      title: "SMS Inbox",
      desc: "Receive incoming SMS messages in a secure, organized inbox.",
    },
    {
      title: "Call History",
      desc: "View incoming, missed, and answered calls.",
    },
    {
      title: "SMS History",
      desc: "Access previous messages and conversations.",
    },
    {
      title: "Push Notifications",
      desc: "Get instant notifications when a call or SMS arrives.",
    },
    {
      title: "Multiple DIDs",
      desc: "Manage multiple virtual numbers from a single account.",
    },
    {
      title: "Contact Management",
      desc: "Save and organize frequently contacted numbers.",
    },
  ],
  smsBadge: "SMS Receiving Made Simple",
  smsTitle: "Never Miss an Important Message",
  smsSubtitle: "Turn your DID into a powerful SMS receiving endpoint.",
  smsPerfectTitle: "Perfect for:",
  smsPerfectItems: [
    "Customer support",
    "Business communications",
    "Lead generation",
    "Appointment notifications",
    "Service alerts",
    "Account notifications",
    "Two-way communication",
  ],
  sampleSms: {
    badge: "Business SMS · Received",
    body: "Hi Jordan, your appointment is confirmed for tomorrow at 10:30 AM. Reply if you need to reschedule.",
    meta: "Today, 10:24 AM · Acme Support",
  },
  smsDashboard: {
    title: "SMS Dashboard",
    receivingBadge: "Receiving",
    todayLabel: "Incoming SMS today",
    todayVal: "3,126 messages",
    colSender: "SENDER",
    colDid: "DESTINATION DID",
    colMessage: "MESSAGE",
    colTime: "TIME",
    monitorTitle: "Monitor:",
    monitorItems: [
      "Incoming SMS",
      "Sender number",
      "Destination DID",
      "Message content",
      "Date & time",
      "Customer/account",
      "SMS volume",
    ],
  },
  monitoringBadge: "Advanced DID Monitoring",
  monitoringTitle: "Know the Status of Every Number",
  monitoringSubtitle: "Monitor your entire DID inventory in real time.",
  monitoringStats: {
    title: "DID overview",
    liveBadge: "Real-time",
    stat1Label: "Active DIDs",
    stat1Val: "248",
    stat1Sub: "+12 this month",
    stat2Label: "Available",
    stat2Val: "64",
    stat2Sub: "Ready to assign",
    stat3Label: "Assigned",
    stat3Val: "184",
    stat3Sub: "32 customers",
    stat4Label: "Missed calls",
    stat4Val: "18",
    stat4Sub: "-8% this week",
    chartTitle: "Voice & SMS activity",
    chartTimeframe: "Last 7 days",
    legend1: "SMS volume",
    legend2: "Incoming call volume",
  },
  operationalViewTitle: "A complete operational view",
  operationalViewItems: [
    "Active DIDs",
    "Available DIDs",
    "Assigned DIDs",
    "Incoming call volume",
    "SMS volume",
    "Call duration",
    "Missed calls",
    "Number usage",
    "Customer allocation",
    "Revenue & cost tracking",
  ],
  resellerBadge: "Built for DID Resellers & Enterprises",
  resellerTitle: "Create Your Own Virtual Number Business",
  resellerSubtitle: "Our platform can support:",
  supportedAudiences: [
    { title: "DID resellers" },
    { title: "VoIP providers" },
    { title: "Call centers" },
    { title: "Enterprises" },
    { title: "UCaaS providers" },
    { title: "Communication platforms" },
  ],
  whiteLabelCard: {
    title: "White-Label Ready",
    desc: "Give your customers their own branded portal and mobile experience while you manage the underlying voice and messaging infrastructure.",
    brandLabel: "Your brand",
    portalLabel: "Customer portal",
    tab1: "Numbers",
    tab2: "Calls",
    tab3: "SMS",
    tagline: "Your customer experience. Our infrastructure.",
  },
  ctaBadge: "LET'S BUILD YOUR MESSAGING NETWORK",
  ctaTitle: "Grow Your Business with Business SMS Solutions",
  ctaSubtitle:
    "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
  contactUs: "Contact Us",
};

const es: VirtualDidTranslation = {
  ...en,
  breadcrumb: "Productos | Portal DID + App Móvil",
  heroBadge: "Portal DID + App Móvil",
  heroTitle: "Plataforma Integral de Gestión de DID y Números Virtuales",
  heroDesc:
    "Administre números de teléfono virtuales, llamadas entrantes y SMS desde un potente Portal DID.",
  getStarted: "Empezar",
  requestDemo: "Solicitar Demo",
  managementBadge: "Gestión de DID",
  managementTitle: "Gestione sus DIDs desde un Portal Centralizado",
  callMgmtBadge: "Reciba Llamadas en Cualquier Lugar",
  callMgmtTitle: "Potente Gestión de Llamadas Entrantes",
  mobileBadge: "App Móvil para Llamadas y SMS",
  mobileTitle: "Su DID en su Bolsillo",
  smsBadge: "Recepción de SMS Simplificada",
  smsTitle: "Nunca se Pierda un Mensaje Importante",
  monitoringBadge: "Monitoreo Avanzado de DID",
  monitoringTitle: "Conozca el Estado de Cada Número",
  resellerBadge: "Diseñado para Revendedores y Empresas",
  resellerTitle: "Cree su Propio Negocio de Números Virtuales",
  contactUs: "Contáctenos",
};

const ja: VirtualDidTranslation = {
  ...en,
  breadcrumb: "製品 | DIDポータル + モバイルアプリ",
  heroBadge: "DIDポータル + モバイルアプリ",
  heroTitle: "包括的なDID管理＆仮想番号プラットフォーム",
  heroDesc:
    "1つの高機能DIDポータルから仮想電話番号、着信通話、SMSを統合管理。",
  getStarted: "今すぐ始める",
  requestDemo: "デモをリクエスト",
  managementBadge: "DID管理",
  managementTitle: "一元化されたポータルからDIDを管理",
  callMgmtBadge: "どこでも着信可能",
  callMgmtTitle: "強力な着信通話管理機能",
  mobileBadge: "通話＆SMS対応モバイルアプリ",
  mobileTitle: "ポケットの中にDIDを",
  smsBadge: "シンプルなSMS受信",
  smsTitle: "重要なメッセージを決して見逃さない",
  monitoringBadge: "高度なDIDモニタリング",
  monitoringTitle: "すべての番号ステータスをリアルタイム把握",
  resellerBadge: "リセラー・エンタープライズ向け設計",
  resellerTitle: "独自の仮想番号ビジネスを構築",
  contactUs: "お問い合わせ",
};

const te: VirtualDidTranslation = {
  ...en,
  heroBadge: "DID పోర్టల్ + మొబైల్ యాప్",
  heroTitle: "పూర్తి DID నిర్వహణ & వర్చువల్ నంబర్ ప్లాట్‌ఫారమ్",
  getStarted: "ప్రారంభించండి",
  requestDemo: "డెమో అభ్యర్థించండి",
  contactUs: "మమ్మల్ని సంప్రదించండి",
};

const ta: VirtualDidTranslation = {
  ...en,
  heroBadge: "DID போர்டல் + மொபைல் ஆப்",
  heroTitle: "முழுமையான DID மேலாண்மை & மெய்நிகர் எண் தளம்",
  getStarted: "தொடங்குங்கள்",
  requestDemo: "டெமோ கோருங்கள்",
  contactUs: "தொடர்பு கொள்ளவும்",
};

const ar: VirtualDidTranslation = {
  ...en,
  breadcrumb: "المنتجات | بوابة DID + تطبيق الهاتف",
  heroBadge: "بوابة DID + تطبيق الجوال",
  heroTitle: "منصة إدارة أرقام DID والأرقام الافتراضية المتكاملة",
  heroDesc:
    "إدارة أرقام الهواتف الافتراضية والمكالمات الواردة والرسائل القصيرة من بوابة DID واحدة قوية.",
  getStarted: "ابدأ الآن",
  requestDemo: "طلب عرض توضيحي",
  contactUs: "اتصل بنا",
};

const translations: Record<string, VirtualDidTranslation> = {
  en,
  es,
  ja,
  te,
  ta,
  ar,
};

export const getVirtualDidTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): VirtualDidTranslation => {
  const base = translations[language] || translations["en"];
  return {
    ...base,
  };
};

export default getVirtualDidTranslations;

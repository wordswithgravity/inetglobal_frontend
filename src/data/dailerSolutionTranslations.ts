export interface DailerSolutionTranslation {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  requestDemo: string;
  exploreDialer: string;
  heroFootnote: string;
  heroMockup: {
    title: string;
    agentStatus: string;
    campaign: string;
    campaignMeta: string;
    contactsCount: string;
    connectedBadge: string;
    callerName: string;
    callerPhone: string;
    duration: string;
    endCall: string;
    tabContact: string;
    tabHistory: string;
    tabNotes: string;
    customerDetailsTitle: string;
    companyLabel: string;
    companyVal: string;
    emailLabel: string;
    emailVal: string;
    lastContactLabel: string;
    lastContactVal: string;
    dispositionLabel: string;
    dispositionVal: string;
    recordingText: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    floatBadgeTitle: string;
    floatBadgeDesc: string;
  };
  highlights: Array<{
    title: string;
  }>;
  desktopBadge: string;
  desktopTitle: string;
  desktopSubtitle: string;
  desktopFootnote: string;
  desktopFeaturesTitle: string;
  desktopFeatures: string[];
  mobileBadge: string;
  mobileTitle: string;
  mobileSubtitle: string;
  mobileFootnote: string;
  mobileFeaturesTitle: string;
  mobileFeatures: string[];
  mobileSyncCard: {
    title: string;
    desc: string;
    badge: string;
  };
  mobileDialerMockup: {
    title: string;
    greeting: string;
    status: string;
    callerId: string;
    callerIdLabel: string;
    tabDialer: string;
    tabContacts: string;
    tabHistory: string;
  };
  routesBadge: string;
  routesTitle: string;
  routesSubtitle: string;
  routesFeaturesTitle: string;
  routesFeatures: string[];
  routeControlCard: {
    title: string;
    badge: string;
    agentCall: string;
    smartRouting: string;
    smartRoutingDesc: string;
    carrier1: string;
    carrier2: string;
    carrier3: string;
    tableDest: string;
    tableCarrier: string;
    tableQuality: string;
    tableRate: string;
    note: string;
  };
  routesEngine: {
    title: string;
    desc: string;
    tags: string[];
  };
  monitoringBadge: string;
  monitoringTitle: string;
  monitoringSubtitle: string;
  monitoringLiveHeader: string;
  monitoringLiveSub: string;
  monitoringKpis: Array<{
    label: string;
    value: string;
    highlight?: boolean;
    danger?: boolean;
  }>;
  monitoringTable: {
    title: string;
    updateMeta: string;
    note: string;
    cols: {
      agent: string;
      campaign: string;
      status: string;
      duration: string;
      destination: string;
      supervisor: string;
    };
  };
  supervisorToolsTitle: string;
  supervisorToolsSubtitle: string;
  supervisorTools: Array<{
    title: string;
    desc: string;
  }>;
  wallboardCard: {
    stat1: string;
    stat1Sub: string;
    stat2: string;
    stat2Sub: string;
    title: string;
    desc: string;
  };
  dialingModesBadge: string;
  dialingModesTitle: string;
  dialingModesSubtitle: string;
  dialingModes: Array<{
    title: string;
    desc: string;
    flow: string;
    tag: string;
  }>;
  analyticsBadge: string;
  analyticsTitle: string;
  analyticsSubtitle: string;
  analyticsFeatures: string[];
  analyticsSubtext: string;
  analyticsCard: {
    title: string;
    exportBtn: string;
    tabHourly: string;
    tabDaily: string;
    tabMonthly: string;
    timeframe: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    legendCalls: string;
    legendAnswered: string;
    dispositionTitle: string;
    note: string;
  };
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  getStarted: string;
  contactUs: string;
}

const en: DailerSolutionTranslation = {
  heroBadge: "CALL CENTER DIALER SOLUTION",
  heroTitle: "Next-Generation Call Center Dialer for Desktop & Mobile",
  heroDesc:
    "Connect your agents, customers, and global routes through one powerful calling platform. Use our browser-based desktop dialer or mobile dialer to manage outbound calling with advanced routing, monitoring, analytics, and real-time control.",
  requestDemo: "Request a Demo",
  exploreDialer: "Explore Dialer",
  heroFootnote: "One connected workspace. From first call to final report.",
  heroMockup: {
    title: "iNet Dialer",
    agentStatus: "Agent available",
    campaign: "Customer follow-up",
    campaignMeta: "Progressive campaign • Today",
    contactsCount: "128 contacts",
    connectedBadge: "Connected - WebRTC",
    callerName: "Jamie Lawson",
    callerPhone: "+44 20 7946 0328",
    duration: "03:42",
    endCall: "End call",
    tabContact: "Contact",
    tabHistory: "History",
    tabNotes: "Notes",
    customerDetailsTitle: "CUSTOMER DETAILS",
    companyLabel: "Company",
    companyVal: "Lawson & Co.",
    emailLabel: "Email",
    emailVal: "jamie@lawson.co",
    lastContactLabel: "Last contact",
    lastContactVal: "07 Oct 2026",
    dispositionLabel: "CALL DISPOSITION",
    dispositionVal: "Follow-up scheduled",
    recordingText: "Recording in progress",
    stat1Label: "Calls today",
    stat1Val: "46",
    stat2Label: "Connected",
    stat2Val: "38",
    stat3Label: "Talk time",
    stat3Val: "02h 18m",
    floatBadgeTitle: "The right route. Every call.",
    floatBadgeDesc: "UK · Carrier A · Quality 98.6%",
  },
  highlights: [
    { title: "Browser-Based Dialer" },
    { title: "Mobile Dialer" },
    { title: "A–Z Global Routes" },
    { title: "Predictive & Progressive Dialing" },
    { title: "Live Call Monitoring" },
    { title: "Real-Time Analytics" },
  ],
  desktopBadge: "Desktop Browser Dialer",
  desktopTitle: "Turn Any Computer Into a Professional Call Center",
  desktopSubtitle:
    "No complicated desktop installation. Agents can securely log in through their browser and start making calls.",
  desktopFootnote: "Your browser is your workspace. Secure agent access. No complicated installation.",
  desktopFeaturesTitle: "Features",
  desktopFeatures: [
    "WebRTC browser calling",
    "Agent login & management",
    "Click-to-call",
    "Contact management",
    "Call history",
    "Call recording",
    "Call transfer",
    "Hold & mute",
    "Disposition management",
    "Agent status tracking",
    "Real-time call statistics",
  ],
  mobileBadge: "Mobile Dialer",
  mobileTitle: "Take Your Calling Operation Anywhere",
  mobileSubtitle:
    "Give remote and field agents a professional mobile calling experience with access to your business calling infrastructure.",
  mobileFootnote: "Your business number. Wherever work takes you.",
  mobileFeaturesTitle: "Mobile Features",
  mobileFeatures: [
    "Android/iOS compatible architecture",
    "SIP/WebRTC calling",
    "Contact synchronization",
    "Call history",
    "Click-to-call",
    "Caller ID management",
    "Call recording",
    "Agent availability",
    "Push notifications",
    "Secure authentication",
  ],
  mobileSyncCard: {
    title: "Contacts, in sync.",
    desc: "Your customers and call history, always with you.",
    badge: "Synced just now",
  },
  mobileDialerMockup: {
    title: "iNet Dialer",
    greeting: "Good morning, Alex",
    status: "Available",
    callerId: "+1 415 555 0124",
    callerIdLabel: "Caller ID: iNet Business",
    tabDialer: "Dialer",
    tabContacts: "Contacts",
    tabHistory: "History",
  },
  routesBadge: "Advanced A–Z Global Routes",
  routesTitle: "Reach Customers Through the Right Route",
  routesSubtitle:
    "Connect to multiple carriers and suppliers and intelligently manage your global voice traffic.",
  routesFeaturesTitle: "Route Management",
  routesFeatures: [
    "A–Z international destinations",
    "Multiple carrier integration",
    "Prefix-based routing",
    "Least-cost routing",
    "Quality-based routing",
    "Failover routing",
    "Priority routing",
    "Destination-based routing",
    "Carrier performance monitoring",
    "Route cost management",
  ],
  routeControlCard: {
    title: "Global route control",
    badge: "Routes healthy",
    agentCall: "Agent call",
    smartRouting: "Smart routing",
    smartRoutingDesc: "Best available route",
    carrier1: "Carrier A · Priority 1",
    carrier2: "Carrier B · Priority 2",
    carrier3: "Carrier C · Failover",
    tableDest: "Destination",
    tableCarrier: "Carrier",
    tableQuality: "Quality",
    tableRate: "/ min",
    note: "Illustrative destinations, carrier quality and rates.",
  },
  routesEngine: {
    title: "Smart Routing Engine",
    desc: "Automatically select the best route based on destination, price, quality, availability, and carrier performance.",
    tags: ["Destination", "Price", "Quality", "Availability", "Carrier performance"],
  },
  monitoringBadge: "Advanced Call Center Monitoring",
  monitoringTitle: "Complete Visibility Into Your Call Center",
  monitoringSubtitle: "Monitor your entire operation from a centralized dashboard.",
  monitoringLiveHeader: "Live Monitoring",
  monitoringLiveSub: "See what's happening right now.",
  monitoringKpis: [
    { label: "Active calls", value: "128" },
    { label: "Waiting calls", value: "12" },
    { label: "Available agents", value: "36" },
    { label: "Busy agents", value: "64" },
    { label: "Agent status", value: "Live" },
    { label: "Calls per second", value: "8.4" },
    { label: "Answer rate", value: "86.2%" },
    { label: "Average call duration", value: "04:32" },
    { label: "Concurrent calls", value: "140" },
    { label: "Failed calls", value: "3", danger: true },
  ],
  monitoringTable: {
    title: "Call center overview",
    updateMeta: "All campaigns • 08 Oct 2026",
    note: "Illustrative live dashboard • Monitor agents, queues and call quality from one workspace.",
    cols: {
      agent: "Agent",
      campaign: "Campaign",
      status: "Status",
      duration: "Duration",
      destination: "Destination",
      supervisor: "Supervisor",
    },
  },
  supervisorToolsTitle: "Supervisor Tools",
  supervisorToolsSubtitle: "Give managers complete control over agent performance.",
  supervisorTools: [
    {
      title: "Listen",
      desc: "Monitor live calls for quality assurance.",
    },
    {
      title: "Whisper",
      desc: "Guide an agent without the customer hearing the supervisor.",
    },
    {
      title: "Barge-In",
      desc: "Join an active conversation when intervention is required.",
    },
  ],
  wallboardCard: {
    stat1: "128",
    stat1Sub: "Calls",
    stat2: "86%",
    stat2Sub: "ASR",
    title: "Real-Time Wallboard",
    desc: "Display live call-center KPIs on large screens.",
  },
  dialingModesBadge: "Smarter outbound calling",
  dialingModesTitle: "Advanced Dialing Modes",
  dialingModesSubtitle: "Choose the dialing strategy that fits your operation.",
  dialingModes: [
    {
      title: "Predictive Dialer",
      desc: "Automatically calls multiple numbers and connects answered calls to available agents.",
      flow: "Multiple calls → Available agent",
      tag: "HIGH-VOLUME OUTREACH",
    },
    {
      title: "Progressive Dialer",
      desc: "Calls the next customer only when an agent becomes available.",
      flow: "Available agent → Next customer",
      tag: "AGENT-PACED CALLING",
    },
    {
      title: "Power Dialer",
      desc: "Automatically moves through contact lists to maximize agent productivity.",
      flow: "Contact list → Continuous calling",
      tag: "FOCUSED PRODUCTIVITY",
    },
    {
      title: "Preview Dialer",
      desc: "Allows agents to review customer information before initiating the call.",
      flow: "Review customer → Start call",
      tag: "PERSONALIZED CONVERSATIONS",
    },
  ],
  analyticsBadge: "Call Analytics & Reports",
  analyticsTitle: "Turn Call Data Into Better Performance",
  analyticsSubtitle: "Track every aspect of your calling operation.",
  analyticsFeatures: [
    "Agent performance",
    "Campaign performance",
    "Call duration",
    "Answer rate",
    "Abandon rate",
    "Conversion tracking",
    "Call disposition",
    "Route performance",
    "Carrier performance",
    "Cost analysis",
    "Hourly/daily/monthly reports",
    "Call detail records",
  ],
  analyticsSubtext: "From individual conversations to global carrier costs, bring the whole picture into focus.",
  analyticsCard: {
    title: "Campaign performance",
    exportBtn: "Export",
    tabHourly: "Hourly",
    tabDaily: "Daily",
    tabMonthly: "Monthly",
    timeframe: "01–07 Oct 2026",
    stat1Label: "Total calls",
    stat1Val: "1,842",
    stat2Label: "Answer rate",
    stat2Val: "86.2%",
    stat3Label: "Conversions",
    stat3Val: "18.4%",
    legendCalls: "Calls",
    legendAnswered: "Answered",
    dispositionTitle: "Call disposition",
    note: "Illustrative report data • Export the detail behind every call.",
  },
  ctaBadge: "LET'S BUILD YOUR MESSAGING NETWORK",
  ctaTitle: "Grow Your Business with Business SMS Solutions",
  ctaSubtitle:
    "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
  getStarted: "Get Started",
  contactUs: "Contact Us",
};

const es: DailerSolutionTranslation = {
  ...en,
  heroBadge: "SOLUCIÓN DE MARCADOR PARA CALL CENTER",
  heroTitle: "Marcador de Call Center de Última Generación para Escritorio y Móvil",
  heroDesc:
    "Conecte a sus agentes, clientes y rutas globales a través de una potente plataforma de llamadas.",
  requestDemo: "Solicitar una Demo",
  exploreDialer: "Explorar Marcador",
  desktopBadge: "Marcador de Navegador para Escritorio",
  desktopTitle: "Convierta Cualquier Computadora en un Call Center Profesional",
  mobileBadge: "Marcador Móvil",
  mobileTitle: "Lleve su Operación de Llamadas a Cualquier Lugar",
  routesBadge: "Rutas Globales A–Z Avanzadas",
  routesTitle: "Llegue a sus Clientes a Través de la Ruta Correcta",
  monitoringBadge: "Monitoreo Avanzado de Call Center",
  monitoringTitle: "Visibilidad Completa de su Call Center",
  dialingModesBadge: "Marcación saliente más inteligente",
  dialingModesTitle: "Modos de Marcación Avanzados",
  analyticsBadge: "Análisis e Informes de Llamadas",
  analyticsTitle: "Convierta los Datos de Llamadas en Mejor Rendimiento",
  getStarted: "Empezar",
  contactUs: "Contáctenos",
};

const ja: DailerSolutionTranslation = {
  ...en,
  heroBadge: "コールセンターダイヤラーソリューション",
  heroTitle: "デスクトップ＆モバイル向け次世代コールセンターダイヤラー",
  heroDesc:
    "1つの強力な通話プラットフォームでオペレーター、顧客、グローバル回線を統合接続。",
  requestDemo: "デモをリクエスト",
  exploreDialer: "ダイヤラーを見る",
  desktopBadge: "デスクトップブラウザダイヤラー",
  desktopTitle: "あらゆるPCをプロフェッショナルなコールセンターに",
  mobileBadge: "モバイルダイヤラー",
  mobileTitle: "どこからでもコールセンター業務を実行",
  routesBadge: "高度なA-Zグローバルルーティング",
  routesTitle: "最適なルートで顧客へ確実に接続",
  monitoringBadge: "高度なコールセンター監視",
  monitoringTitle: "コールセンター全体の完全な可視化",
  dialingModesBadge: "スマートな発信業務",
  dialingModesTitle: "高度な発信ダイヤリングモード",
  analyticsBadge: "通話分析とレポート",
  analyticsTitle: "通話データをパフォーマンス向上へ直結",
  getStarted: "今すぐ始める",
  contactUs: "お問い合わせ",
};

const te: DailerSolutionTranslation = {
  ...en,
  heroBadge: "కాల్ సెంటర్ డయలర్ సొల్యూషన్",
  heroTitle: "డెస్క్‌టాప్ మరియు మొబైల్ కోసం నెక్స్ట్-జెన్ కాల్ సెంటర్ డయలర్",
  requestDemo: "డెమో అభ్యర్థించండి",
  exploreDialer: "డయలర్ అన్వేషించండి",
  getStarted: "ప్రారంభించండి",
  contactUs: "మమ్మల్ని సంప్రదించండి",
};

const ta: DailerSolutionTranslation = {
  ...en,
  heroBadge: "கால் சென்டர் டயலர் தீர்வு",
  heroTitle: "டெஸ்க்டாப் மற்றும் மொபைலுக்கான அடுத்த தலைமுறை கால் சென்டர் டயலர்",
  requestDemo: "டெமோ கோருங்கள்",
  exploreDialer: "டயலரை ஆராயுங்கள்",
  getStarted: "தொடங்குங்கள்",
  contactUs: "தொடர்பு கொள்ளவும்",
};

const ar: DailerSolutionTranslation = {
  ...en,
  heroBadge: "حلول الاتصال الهاتفي لمراكز الاتصال",
  heroTitle: "برنامج اتصال الجيل القادم لمراكز الاتصال لسطح المكتب والجوال",
  heroDesc:
    "اربط بين وكلائك وعملائك ومساراتك العالمية من خلال منصة اتصال ذكية واحدة.",
  requestDemo: "طلب عرض توضيحي",
  exploreDialer: "استكشف البرنامج",
  getStarted: "ابدأ الآن",
  contactUs: "اتصل بنا",
};

const translations: Record<string, DailerSolutionTranslation> = {
  en,
  es,
  ja,
  te,
  ta,
  ar,
};

export const getDailerSolutionTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): DailerSolutionTranslation => {
  const base = translations[language] || translations["en"];
  return {
    ...base,
  };
};

export default getDailerSolutionTranslations;

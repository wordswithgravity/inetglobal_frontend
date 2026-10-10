export interface AboutUsTranslation {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  contactBtn: string;
  servicesBtn: string;
  heroStats: {
    label: string;
    value: string;
    sub: string;
  }[];
  phoneMockup: {
    appTitle: string;
    status: string;
    regionLabel: string;
    latency: string;
    card1Title: string;
    card1Val: string;
    card1Badge: string;
    card2Title: string;
    card2Val: string;
    card2Badge: string;
    routesTitle: string;
    route1: { name: string; quality: string; status: string };
    route2: { name: string; quality: string; status: string };
    route3: { name: string; quality: string; status: string };
    bottomStat1: string;
    bottomStat1Val: string;
    bottomStat2: string;
    bottomStat2Val: string;
  };
  companyBadge: string;
  companyTitle: string;
  companySubtitle: string;
  companyStory1: string;
  companyStory2: string;
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  coreValuesTitle: string;
  values: {
    title: string;
    desc: string;
  }[];
  whatWeDoBadge: string;
  whatWeDoTitle: string;
  whatWeDoSubtitle: string;
  pillars: {
    title: string;
    desc: string;
    points: string[];
  }[];
  servicesBadge: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesList: {
    id: string;
    title: string;
    desc: string;
    href: string;
    badge: string;
    features: string[];
  }[];
  mapBadge: string;
  mapTitle: string;
  mapSubtitle: string;
  officeTitle: string;
  officeAddressLabel: string;
  officePhoneLabel: string;
  officeEmailLabel: string;
  officeSupportLabel: string;
  officeSupportHours: string;
  nocLabel: string;
  nocDesc: string;
  mapPinTitle: string;
  mapPinDesc: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimaryBtn: string;
  ctaSecondaryBtn: string;
}

const en: AboutUsTranslation = {
  heroBadge: "ABOUT INET GLOBAL",
  heroTitle: "Empowering Global Connections with Carrier-Grade Communications",
  heroSubtitle:
    "iNet Global is a premier international telecommunications provider delivering enterprise wholesale voice, secure OTP messaging, virtual DIDs, and next-generation dialer infrastructure across 100+ countries.",
  contactBtn: "Contact Our Team",
  servicesBtn: "Explore Services",
  heroStats: [
    { label: "Countries Connected", value: "100+", sub: "Direct carrier termination" },
    { label: "Network Reliability", value: "99.99%", sub: "Enterprise SLA uptime" },
    { label: "Monthly Operations", value: "1B+", sub: "Voice minutes & SMS delivered" },
    { label: "Global Technical NOC", value: "24/7/365", sub: "Active latency monitoring" },
  ],
  phoneMockup: {
    appTitle: "iNet Global Network",
    status: "Active & Monitored",
    regionLabel: "Global Enterprise Route",
    latency: "14ms Avg Latency",
    card1Title: "Voice Termination",
    card1Val: "142.8M Min",
    card1Badge: "Tier-1 Direct",
    card2Title: "OTP / A2P SMS",
    card2Val: "99.8% ASR",
    card2Badge: "Instant Delivery",
    routesTitle: "Active Global Gateways",
    route1: { name: "APAC Hub (Singapore)", quality: "99.4%", status: "Optimal" },
    route2: { name: "EMEA Hub (London & Frankfurt)", quality: "99.7%", status: "Optimal" },
    route3: { name: "Americas Hub (New York)", quality: "99.5%", status: "Optimal" },
    bottomStat1: "Active Routes",
    bottomStat1Val: "540+",
    bottomStat2: "Direct Interconnects",
    bottomStat2Val: "120+",
  },
  companyBadge: "WHO WE ARE",
  companyTitle: "Built on Global Reliability, Engineered for Scalable Enterprise Growth",
  companySubtitle:
    "We eliminate telecommunication boundaries, helping international enterprises, carriers, and forward-thinking businesses communicate seamlessly with customers anywhere.",
  companyStory1:
    "iNet Global was founded with a unified ambition: to engineer ultra-reliable, carrier-grade telecommunication infrastructure that enterprises and telecom operators can depend upon without compromise.",
  companyStory2:
    "By establishing direct interconnects with premier global Tier-1 carriers and deploying redundant cloud points of presence worldwide, we ensure crystal-clear voice clarity, sub-second OTP authentication delivery, and frictionless communication across borders.",
  missionTitle: "Our Mission",
  missionDesc:
    "To deliver uncompromised connectivity, high-throughput transmission, and secure telecom architecture that scales effortlessly with our clients' ambitions.",
  visionTitle: "Our Vision",
  visionDesc:
    "To be the world’s most trusted communications partner for enterprises and service providers demanding mission-critical telecom performance.",
  coreValuesTitle: "What Drives Us",
  values: [
    {
      title: "Carrier-Grade Excellence",
      desc: "Every route is monitored 24/7 to guarantee pristine call clarity, minimal jitter, and zero message dropped packets.",
    },
    {
      title: "Uncompromising Security",
      desc: "End-to-end encryption, strict regulatory compliance, and anti-fraud filters built directly into our infrastructure.",
    },
    {
      title: "Customer Commitment",
      desc: "Dedicated account managers and round-the-clock technical network engineers standing by your business.",
    },
    {
      title: "Continuous Innovation",
      desc: "Pioneering WebRTC browser telephony, AI-powered conversational routing, and frictionless cloud communications.",
    },
  ],
  whatWeDoBadge: "WHAT WE DO",
  whatWeDoTitle: "Connecting Every Corner of the World Through Unified Telecom",
  whatWeDoSubtitle:
    "From high-volume wholesale voice termination to mission-critical OTP authentication, we engineer infrastructure that never sleeps.",
  pillars: [
    {
      title: "Wholesale Voice Infrastructure",
      desc: "Direct Tier-1 interconnects with guaranteed CLI, low PDD, and high ACD for enterprise call centers and telecom carriers globally.",
      points: [
        "A–Z international route destinations",
        "Direct CLI premium route termination",
        "Dynamic least-cost & quality-based routing",
        "Redundant failover to prevent downtime",
      ],
    },
    {
      title: "Global SMS & OTP Gateway",
      desc: "High-throughput messaging pipelines delivering mission-critical one-time passwords, transactional alerts, and customer notifications.",
      points: [
        "Sub-second OTP authentication delivery",
        "Direct connections to Tier-1 mobile operators",
        "SMPP and REST API instant integrations",
        "Real-time DLR analytics & delivery reports",
      ],
    },
    {
      title: "International Virtual Numbers (DID)",
      desc: "Establish local business presence in 100+ countries with local, national, toll-free, and mobile virtual numbers.",
      points: [
        "Instant number activation across 100+ nations",
        "Crystal-clear inbound two-way SIP trunking",
        "SMS-enabled virtual phone numbers",
        "Flexible call forwarding to any destination",
      ],
    },
    {
      title: "Next-Gen Dialer & Omnichannel",
      desc: "Browser-based WebRTC call center software and conversational messaging APIs uniting voice, WhatsApp, RCS, and Telegram.",
      points: [
        "Predictive, progressive & power dialing modes",
        "WebRTC browser calling with zero desktop installation",
        "Official WhatsApp Business Platform API",
        "Live supervisor whisper, listen & barge-in",
      ],
    },
  ],
  servicesBadge: "OUR SERVICES",
  servicesTitle: "Complete Telecommunications Suite for Modern Enterprises",
  servicesSubtitle:
    "Explore our modular products designed to scale your operations, enhance customer engagement, and lower operational overhead.",
  servicesList: [
    {
      id: "wholesale-voice",
      title: "Wholesale Voice",
      desc: "Reliable international voice termination with guaranteed CLI and premium carrier quality.",
      href: "/wholesale-voice",
      badge: "Direct Routes",
      features: ["A-Z Global Coverage", "Tier-1 Interconnects", "Least Cost Routing"],
    },
    {
      id: "ai-voice",
      title: "AI Voice Solutions",
      desc: "Intelligent automated voice experiences and enterprise IVR built for modern contact centers.",
      href: "/voice",
      badge: "Automated",
      features: ["Natural Voice Interaction", "Smart IVR Routing", "Real-Time Speech Insights"],
    },
    {
      id: "virtual-did",
      title: "Virtual Numbers (DID)",
      desc: "Local, toll-free, and mobile phone numbers across 100+ nations for global brand presence.",
      href: "/virtual-did",
      badge: "100+ Countries",
      features: ["Instant DID Provisioning", "Two-Way Voice & SMS", "Flexible Call Forwarding"],
    },
    {
      id: "wholesale-message",
      title: "Wholesale SMS",
      desc: "High-volume bulk SMS transmission to mobile subscribers across global network operators.",
      href: "/wholesale-message",
      badge: "High Throughput",
      features: ["Carrier Direct Routes", "SMPP & HTTP Protocol", "Global Reach"],
    },
    {
      id: "otp-sms",
      title: "OTP SMS Portal",
      desc: "Ultra-fast authentication message delivery engineered specifically for banks and fintech platforms.",
      href: "/otp-sms",
      badge: "Sub-Second Delivery",
      features: ["99.8% Delivery Rate", "Anti-Fraud Routing", "Encrypted Transmission"],
    },
    {
      id: "dialer",
      title: "Complete Dialer Solution",
      desc: "WebRTC browser and mobile call center dialer with supervisor monitoring and smart routing.",
      href: "/dialer",
      badge: "WebRTC & Mobile",
      features: ["Predictive & Progressive Dialing", "Listen, Whisper, Barge-In", "Real-Time Wallboard"],
    },
  ],
  mapBadge: "GLOBAL HEADQUARTERS & REACH",
  mapTitle: "Our Strategic Presence & Registered Address",
  mapSubtitle:
    "With specialized network operation centers and global interconnect points of presence, we support enterprises 24 hours a day, 365 days a year.",
  officeTitle: "Corporate Headquarters",
  officeAddressLabel: "Registered Address",
  officePhoneLabel: "Phone Support",
  officeEmailLabel: "Email Inquiries",
  officeSupportLabel: "Support Availability",
  officeSupportHours: "24/7/365 NOC Support",
  nocLabel: "Global Network Operation Center",
  nocDesc: "Proactive latency monitoring, route failover orchestration, and dedicated technical engineers on standby.",
  mapPinTitle: "iNet Global Operations",
  mapPinDesc: "Strategic Financial Park hub connected to Tier-1 international carrier transit networks.",
  ctaTitle: "Ready to Transform Your Global Telecommunication Infrastructure?",
  ctaSubtitle:
    "Partner with iNet Global to unlock pristine voice routes, high-throughput messaging, and virtual numbers across the globe.",
  ctaPrimaryBtn: "Schedule a Consultation",
  ctaSecondaryBtn: "Explore Our Products",
};

// Translations for other languages (es, ja, te, ta, ar)
const es: AboutUsTranslation = {
  ...en,
  heroBadge: "ACERCA DE INET GLOBAL",
  heroTitle: "Impulsando Conexiones Globales con Telecomunicaciones de Grado Operador",
  heroSubtitle:
    "iNet Global es un proveedor internacional de telecomunicaciones de primer nivel que ofrece terminación de voz al por mayor, mensajería OTP segura, DIDs virtuales e infraestructura de marcador para empresas en más de 100 países.",
  contactBtn: "Contactar a Nuestro Equipo",
  servicesBtn: "Explorar Servicios",
  companyBadge: "QUIÉNES SOMOS",
  companyTitle: "Construido sobre Confiabilidad Global, Diseñado para el Crecimiento Empresarial",
  missionTitle: "Nuestra Misión",
  visionTitle: "Nuestra Visión",
  whatWeDoBadge: "QUÉ HACEMOS",
  whatWeDoTitle: "Conectando Cada Rincón del Mundo con Telecomunicaciones Unificadas",
  servicesBadge: "NUESTROS SERVICIOS",
  servicesTitle: "Suite Completa de Telecomunicaciones para Empresas Modernas",
  mapBadge: "SEDE GLOBAL Y ALCANCE",
  mapTitle: "Nuestra Presencia Estratégica y Dirección Registrada",
  officeTitle: "Sede Corporativa",
  officeAddressLabel: "Dirección Registrada",
  ctaTitle: "¿Listo para Transformar su Infraestructura Global de Telecomunicaciones?",
  ctaPrimaryBtn: "Programar Consulta",
  ctaSecondaryBtn: "Explorar Productos",
};

const ja: AboutUsTranslation = {
  ...en,
  heroBadge: "INET GLOBALについて",
  heroTitle: "キャリアグレードの通信インフラでグローバルな接続を強化",
  heroSubtitle:
    "iNet Globalは、100カ国以上でエンタープライズ向けホールセール音声、セキュアなOTPメッセージング、仮想DID、次世代ダイヤラーインフラを提供する国際電気通信プロバイダーです。",
  contactBtn: "お問い合わせ",
  servicesBtn: "サービスを見る",
  companyBadge: "会社概要",
  companyTitle: "グローバルな信頼性と拡張性の高いエンタープライズ成長",
  missionTitle: "私たちの使命",
  visionTitle: "私たちのビジョン",
  whatWeDoBadge: "事業内容",
  whatWeDoTitle: "世界中をつなぐ統合テレコムソリューション",
  servicesBadge: "提供サービス",
  servicesTitle: "現代企業のための包括的な通信スイート",
  mapBadge: "グローバル拠点＆アクセス",
  mapTitle: "戦略的拠点および登録住所",
  officeTitle: "本社所在地",
  officeAddressLabel: "登録住所",
  ctaTitle: "通信インフラの刷新をお考えですか？",
  ctaPrimaryBtn: "ご相談を予約する",
  ctaSecondaryBtn: "サービス一覧を見る",
};

const te: AboutUsTranslation = {
  ...en,
  heroBadge: "INET GLOBAL గురించి",
  heroTitle: "క్యారియర్-గ్రేడ్ టెలికాం ఇన్ఫ్రాస్ట్రక్చర్‌తో గ్లోబల్ కనెక్టివిటీ",
  heroSubtitle:
    "iNet Global 100 కంటే ఎక్కువ దేశాలలో హోల్‌సేల్ వాయిస్, సురక్షిత OTP మెసేజింగ్, వర్చువల్ నంబర్లు మరియు డయలర్ సేవలను అందిస్తుంది.",
  contactBtn: "మమ్మల్ని సంప్రదించండి",
  servicesBtn: "సేవలను అన్వేషించండి",
  companyBadge: "మేము ఎవరు",
  companyTitle: "గ్లోబల్ విశ్వసనీయత మరియు ఆధునిక సాంకేతిక పరిజ్ఞానం",
  missionTitle: "మా లక్ష్యం",
  visionTitle: "మా దృక్పథం",
  whatWeDoBadge: "మేము ఏమి చేస్తాము",
  whatWeDoTitle: "ప్రపంచవ్యాప్తంగా వ్యాపారాలను అనుసంధానించడం",
  servicesBadge: "మా సేవలు",
  servicesTitle: "ఆధునిక వ్యాపారాల కోసం సమగ్ర టెలికాం సొల్యూషన్స్",
  mapBadge: "ప్రధాన కార్యాలయం & మ్యాప్",
  mapTitle: "మా నమోదిత చిరునామా & గ్లోబల్ నెట్‌వర్క్",
  officeTitle: "కార్పొరేట్ ప్రధాన కార్యాలయం",
  officeAddressLabel: "నమోదిత చిరునామా",
  ctaTitle: "మీ గ్లోబల్ టెలికాం సామర్థ్యాన్ని మెరుగుపరచడానికి సిద్ధంగా ఉన్నారా?",
  ctaPrimaryBtn: "సంప్రదింపును షెడ్యూల్ చేయండి",
  ctaSecondaryBtn: "ఉత్పత్తులను అన్వేషించండి",
};

const ta: AboutUsTranslation = {
  ...en,
  heroBadge: "INET GLOBAL பற்றி",
  heroTitle: "உலகளாவிய தொலைத்தொடர்பு உள்கட்டமைப்புடன் வணிகங்களை இணைத்தல்",
  heroSubtitle:
    "iNet Global 100-க்கும் மேற்பட்ட நாடுகளில் சர்வதேச குரல் அழைப்புகள், பாதுகாப்பான OTP குறுஞ்செய்தி மற்றும் மெய்நிகர் எண்களை வழங்குகிறது.",
  contactBtn: "எங்களைத் தொடர்பு கொள்ளவும்",
  servicesBtn: "சேவைகளை ஆராய்க",
  companyBadge: "நாங்கள் யார்",
  companyTitle: "நம்பகமான உலகளாவிய தொலைத்தொடர்பு உள்கட்டமைப்பு",
  missionTitle: "எங்கள் நோக்கம்",
  visionTitle: "எங்கள் தொலைநோக்கு",
  whatWeDoBadge: "நாங்கள் என்ன செய்கிறோம்",
  whatWeDoTitle: "உலகளாவிய வணிகங்களுக்கான இணைப்புகள்",
  servicesBadge: "எங்கள் சேவைகள்",
  servicesTitle: "முழுமையான தொலைத்தொடர்பு தீர்வுகள்",
  mapBadge: "தலைமையகம் மற்றும் வரைபடம்",
  mapTitle: "எங்கள் பதிவு செய்யப்பட்ட முகவரி",
  officeTitle: "நிறுவன தலைமையகம்",
  officeAddressLabel: "பதிவு செய்யப்பட்ட முகவரி",
  ctaTitle: "உங்கள் தொலைத்தொடர்பு அமைப்பை மேம்படுத்த தயாரா?",
  ctaPrimaryBtn: "ஆலோசனையை திட்டமிடுங்கள்",
  ctaSecondaryBtn: "தயாரிப்புகளைக் காண்க",
};

const ar: AboutUsTranslation = {
  ...en,
  heroBadge: "عن آي نت جلوبال",
  heroTitle: "تمكين الاتصالات العالمية ببنية تحتية بمعايير مشغلي الاتصالات",
  heroSubtitle:
    "تعد آي نت جلوبال مزوداً عالمياً رائداً في خدمات الاتصالات الصوتية بالجملة ورسائل OTP الآمنة والأرقام الافتراضية في أكثر من 100 دولة.",
  contactBtn: "اتصل بفريقنا",
  servicesBtn: "استكشف الخدمات",
  companyBadge: "من نحن",
  companyTitle: "بنيت على الموثوقية العالمية ومصممة للنمو المؤسسي",
  missionTitle: "مهمتنا",
  visionTitle: "رؤيتنا",
  whatWeDoBadge: "ماذا نقدم",
  whatWeDoTitle: "ربط كل ركن من أركان العالم عبر شبكة اتصالات موحدة",
  servicesBadge: "خدماتنا الأساسية",
  servicesTitle: "حزمة اتصالات شاملة مصممة للشركات الحديثة",
  mapBadge: "المقر الرئيسي والانتشار العالمي",
  mapTitle: "تواجدنا الاستراتيجي وعنواننا المسجل",
  officeTitle: "المقر الرئيسي للشركة",
  officeAddressLabel: "العنوان المسجل",
  ctaTitle: "هل أنت مستعد لتطوير بنية الاتصالات الخاصة بشركتك؟",
  ctaPrimaryBtn: "طلب استشارة",
  ctaSecondaryBtn: "استكشاف منتجاتنا",
};

export const getAboutUsTranslations = (
  lang: string,
  _region?: string,
  _regionName?: string
): AboutUsTranslation => {
  switch (lang) {
    case "es":
      return es;
    case "ja":
      return ja;
    case "te":
      return te;
    case "ta":
      return ta;
    case "ar":
      return ar;
    default:
      return en;
  }
};

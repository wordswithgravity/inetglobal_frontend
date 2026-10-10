export interface WholesaleVoiceTranslation {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  talkToExpert: string;
  exploreCapabilities: string;
  stats: {
    countries: string;
    countriesLabel: string;
    availability: string;
    availabilityLabel: string;
    operations: string;
    operationsLabel: string;
  };
  heroLiveBadge1: {
    count: string;
    label: string;
  };
  heroLiveBadge2: {
    title: string;
    latency: string;
    quality: string;
  };
  whyBadge: string;
  whyTitle: string;
  whySubtitle1: string;
  whySubtitle2: string;
  whyCards: Array<{
    title: string;
    desc: string;
    footer: string;
  }>;
  capabilitiesBadge: string;
  capabilitiesTitle: string;
  capabilitiesDesc: string;
  designSolution: string;
  solutionNote: string;
  capabilities: Array<{
    title: string;
    desc: string;
    tag: string;
  }>;
  networkBadge: string;
  networkTitle: string;
  networkDesc: string;
  networkBullets: string[];
  networkStats: Array<{
    val: string;
    label: string;
  }>;
  liveStatus: {
    title: string;
    check: string;
    live: string;
  };
  momentsBadge: string;
  momentsTitle: string;
  momentsSubtitle: string;
  moments: Array<{
    title: string;
    desc: string;
    footer: string;
  }>;
  timelineBadge: string;
  timelineTitle: string;
  timelineSubtitle: string;
  timelineSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  terminal: {
    title: string;
    readyBadge: string;
    sipEndpoint: string;
    auth: string;
    media: string;
    failover: string;
    interopNote: string;
    viewApiDocs: string;
  };
  testimonialBadge: string;
  testimonialTitle: string;
  testimonialSubtitle: string;
  testimonialPills: string[];
  quote: string;
  authorName: string;
  authorRole: string;
  stat1Val: string;
  stat1Label: string;
  stat2Val: string;
  stat2Label: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactUs: string;
  responseTime: string;
}

const en: WholesaleVoiceTranslation = {
  heroBadge: "GLOBAL VOICE INFRASTRUCTURE",
  heroTitle: "Every Call, Connected With Confidence.",
  heroDesc:
    "Carrier-grade voice termination, origination and virtual numbers for businesses that need clear conversations in every market—backed by intelligent routing and 24/7 network operations.",
  talkToExpert: "Talk to an expert",
  exploreCapabilities: "Explore capabilities",
  stats: {
    countries: "190+",
    countriesLabel: "countries reached",
    availability: "99.999%",
    availabilityLabel: "core availability",
    operations: "24/7",
    operationsLabel: "network operations",
  },
  heroLiveBadge1: {
    count: "12,480",
    label: "live calls routed",
  },
  heroLiveBadge2: {
    title: "Best route selected",
    latency: "43 ms",
    quality: "HD quality",
  },
  whyBadge: "WHY INET VOICE",
  whyTitle: "Voice Infrastructure That Earns Customer Trust",
  whySubtitle1:
    "Built for teams that cannot compromise on call quality, reach or operational control.",
  whySubtitle2:
    "One partner for international traffic, local presence and the network expertise behind every call.",
  whyCards: [
    {
      title: "Sound consistently clear",
      desc: "Low-latency routes and quality-based traffic steering keep conversations natural.",
      footer: "HD voice and codecs support",
    },
    {
      title: "Reach more markets",
      desc: "Terminate and originate calls across established carrier relationships worldwide.",
      footer: "190+ countries and territories",
    },
    {
      title: "Control every route",
      desc: "Set pricing, quality and destination rules with real-time visibility into performance.",
      footer: "Flexible LCR and quality routing",
    },
    {
      title: "Scale without friction",
      desc: "Add capacity, numbers and new markets through one resilient global platform.",
      footer: "Elastic SIP capacity",
    },
  ],
  capabilitiesBadge: "OUR CORE CAPABILITIES",
  capabilitiesTitle: "One Voice Stack, Built Around Your Traffic",
  capabilitiesDesc:
    "Combine only what you need, then expand by market, number type or routing policy without rebuilding your communications layer.",
  designSolution: "Design your solution",
  solutionNote: "Solution design and interoperability testing included",
  capabilities: [
    {
      title: "Wholesale termination",
      desc: "Route international voice traffic through quality-managed, multi-carrier paths.",
      tag: "CLI • TDM • SIP",
    },
    {
      title: "SIP trunking",
      desc: "Connect PBX, contact center and communications platforms with elastic capacity.",
      tag: "Inbound + outbound",
    },
    {
      title: "Virtual numbers",
      desc: "Build a trusted local presence with geographic, national and toll-free numbers.",
      tag: "Global DID inventory",
    },
    {
      title: "Fraud protection",
      desc: "Protect margins with destination controls, anomaly alerts and spend thresholds.",
      tag: "Always-on monitoring",
    },
    {
      title: "Quality analytics",
      desc: "Track ASR, ACD, PDD, jitter and completion rates by route and destination.",
      tag: "Real-time reporting",
    },
    {
      title: "Custom routing",
      desc: "Prioritize routes by quality, price, geography or customer-specific policy.",
      tag: "Rules-based control",
    },
  ],
  networkBadge: "RELIABILITY AT GLOBAL SCALE",
  networkTitle: "A Network Designed To Keep Conversations Moving",
  networkDesc:
    "Redundant interconnects, proactive route management and round-the-clock engineering protect every call from congestion and disruption.",
  networkBullets: [
    "Multi-carrier redundancy by destination",
    "Active quality scoring and automatic failover",
    "Geo-distributed signaling and media infrastructure",
    "Proactive fraud detection and traffic controls",
  ],
  networkStats: [
    { val: "99.999%", label: "Core network availability" },
    { val: "190+", label: "Countries and territories" },
    { val: "24/7", label: "Global network operations" },
    { val: "< 1 sec", label: "Automated route response" },
  ],
  liveStatus: {
    title: "All systems operational",
    check: "Last route check 12 sec ago",
    live: "LIVE",
  },
  momentsBadge: "BUILT FOR REAL CONVERSATION",
  momentsTitle: "Voice Services For Every Critical Moment",
  momentsSubtitle:
    "From everyday customer care to high-priority alerts, iNet Global gives teams the reach and control to keep people connected.",
  moments: [
    {
      title: "Contact centers",
      desc: "Give distributed agents consistent inbound and outbound voice across regions.",
      footer: "Local presence • overflow routing",
    },
    {
      title: "Fintech & platforms",
      desc: "Power verified calls, collections and service workflows with secure global reach.",
      footer: "CLI delivery • Fraud controls",
    },
    {
      title: "Travel & hospitality",
      desc: "Connect guests and operations teams before, during and after every journey.",
      footer: "Local numbers • Multilingual reach",
    },
    {
      title: "Critical notifications",
      desc: "Deliver time-sensitive calls with prioritized routes and real-time monitoring.",
      footer: "Priority routing • Instant failover",
    },
  ],
  timelineBadge: "LAUNCH WITH CONFIDENCE",
  timelineTitle: "From Requirements To Live Traffic, Together",
  timelineSubtitle:
    "A voice engineer stays with your team through design, testing and traffic migration—so every route is ready before launch.",
  timelineSteps: [
    {
      step: "1",
      title: "Scope",
      desc: "Confirm markets, volumes, codecs and quality targets.",
    },
    {
      step: "2",
      title: "Connect",
      desc: "Exchange SIP details and secure your interconnect.",
    },
    {
      step: "3",
      title: "Validate",
      desc: "Run interoperability tests and CLI presentation tests.",
    },
    {
      step: "4",
      title: "Launch",
      desc: "Move traffic in stages with an engineer monitoring.",
    },
  ],
  terminal: {
    title: "Your voice connection",
    readyBadge: "READY TO TEST",
    sipEndpoint: "sip.voice.inetglobal.com",
    auth: "IP Allowlist + TLS",
    media: "SRTP • G.711 • G.729",
    failover: "Automatic secondary route",
    interopNote: "Interop checklist included",
    viewApiDocs: "View API docs",
  },
  testimonialBadge: "TRUSTED IN PRODUCTION",
  testimonialTitle: "A Voice Partner Your Operations Team Can Rely On",
  testimonialSubtitle:
    "Transparent performance, responsive engineers and infrastructure built for business-critical communications.",
  testimonialPills: [
    "Encrypted transport",
    "Quality monitoring",
    "Fraud controls",
  ],
  quote:
    "iNet Global gave us the route visibility and hands-on support to consolidate voice traffic across three regions without compromising the customer experience.",
  authorName: "Maya Chen",
  authorRole: "VP, Network Operations • Global CX platform",
  stat1Val: "18%",
  stat1Label: "lower route cost",
  stat2Val: "+4.2 pts",
  stat2Label: "ASR improvement",
  ctaBadge: "LET'S BUILD YOUR VOICE NETWORK",
  ctaTitle: "Ready For Clearer Calls And Smarter Global Reach",
  ctaSubtitle:
    "Tell us where you need to connect, how much traffic you carry and what quality means to your business. Our voice team will design the right routing and number strategy.",
  contactUs: "Contact us",
  responseTime: "Response within one business day",
};

const es: WholesaleVoiceTranslation = {
  ...en,
  heroBadge: "INFRAESTRUCTURA GLOBAL DE VOZ",
  heroTitle: "Cada Llamada, Conectada Con Total Confianza.",
  heroDesc:
    "Terminación de voz de nivel operador, originación y números virtuales para empresas que necesitan conversaciones nítidas en todos los mercados.",
  talkToExpert: "Hablar con un experto",
  exploreCapabilities: "Explorar capacidades",
  whyBadge: "POR QUÉ INET VOICE",
  whyTitle: "Infraestructura de Voz que Genera Confianza",
  capabilitiesBadge: "NUESTRAS CAPACIDADES CLAVE",
  capabilitiesTitle: "Una Pila de Voz Diseñada para su Tráfico",
  networkBadge: "CONFIABILIDAD A ESCALA GLOBAL",
  networkTitle: "Una Red Diseñada para Mantener las Conversaciones en Marcha",
  momentsBadge: "DISEÑADO PARA CONVERSACIONES REALES",
  momentsTitle: "Servicios de Voz para Cada Momento Crítico",
  timelineBadge: "LANZAMIENTO CON CONFIANZA",
  timelineTitle: "De los Requisitos al Tráfico en Vivo, Juntos",
  testimonialBadge: "DE CONFIANZA EN PRODUCCIÓN",
  testimonialTitle: "Un Socio de Voz en el que su Equipo Puede Confiar",
  ctaBadge: "CONSTRUYAMOS SU RED DE VOZ",
  ctaTitle: "Listos para Llamadas más Claras y Alcance Global",
};

const ja: WholesaleVoiceTranslation = {
  ...en,
  heroBadge: "グローバル音声インフラストラクチャ",
  heroTitle: "すべての通話を、確かな品質と信頼でつなぐ。",
  heroDesc:
    "あらゆる市場でクリアな通話を必要とする企業向けに、キャリアグレードの音声終端、発信、仮想番号をインテリジェントルーティングと24時間365日のネットワーク運用で提供します。",
  talkToExpert: "専門スタッフに相談",
  exploreCapabilities: "機能を見る",
  whyBadge: "INET VOICE が選ばれる理由",
  whyTitle: "顧客の信頼を築く堅牢な音声インフラ",
  capabilitiesBadge: "主要な機能と性能",
  capabilitiesTitle: "トラフィックに最適化された音声スタック",
  networkBadge: "グローバル規模の信頼性",
  networkTitle: "スムーズな通話を維持するために設計されたグローバルネットワーク",
  momentsBadge: "ビジネスのあらゆる重要シーンに対応",
  momentsTitle: "クリティカルな瞬間のための音声サービス",
  timelineBadge: "安心の実装プロセス",
  timelineTitle: "要件定義から本番トラフィック移行まで、専任体制で伴走",
  testimonialBadge: "本番環境での確かな実績",
  testimonialTitle: "運用チームが信頼できる音声パートナー",
  ctaBadge: "音声ネットワークを構築しましょう",
  ctaTitle: "よりクリアな通話と、スマートなグローバル展開を今すぐ",
};

const te: WholesaleVoiceTranslation = {
  ...en,
  heroBadge: "గ్లోబల్ వాయిస్ ఇన్‌ఫ్రాస్ట్రక్చర్",
  heroTitle: "ప్రతి కాల్, పూర్తి విశ్వాసంతో కనెక్ట్ చేయబడుతుంది.",
  heroDesc:
    "ప్రతి మార్కెట్‌లో స్పష్టమైన సంభాషణలు అవసరమయ్యే వ్యాపారాల కోసం క్యారియర్-గ్రేడ్ వాయిస్ టెర్మినేషన్, ఆరిజినేషన్ మరియు వర్చువల్ నంబర్లు.",
  talkToExpert: "నిపుణుడితో మాట్లాడండి",
  exploreCapabilities: "సామర్థ్యాలను అన్వేషించండి",
  whyBadge: "INET VOICE ఎందుకు",
  whyTitle: "కస్టమర్ నమ్మకాన్ని సంపాదించే వాయిస్ ఇన్‌ఫ్రాస్ట్రక్చర్",
  capabilitiesBadge: "మా ముఖ్య సామర్థ్యాలు",
  capabilitiesTitle: "మీ ట్రాఫిక్ చుట్టూ నిర్మించిన వాయిస్ స్టాక్",
  networkBadge: "గ్లోబల్ స్కేల్‌లో విశ్వసనీయత",
  networkTitle: "సంభాషణలను నిరంతరం కొనసాగించేలా రూపొందించిన నెట్‌వర్క్",
  momentsBadge: "వాస్తవ సంభాషణల కోసం నిర్మించబడింది",
  momentsTitle: "ప్రతి కీలక క్షణం కోసం వాయిస్ సేవలు",
  timelineBadge: "విశ్వాసంతో ప్రారంభించండి",
  timelineTitle: "అవసరాల నుండి ప్రత్యక్ష ట్రాఫిక్ వరకు, కలిసి ముందుకు",
  testimonialBadge: "ఉత్పత్తిలో విశ్వసనీయమైనది",
  testimonialTitle: "మీ ఆపరేషన్స్ టీమ్ నమ్మదగిన వాయిస్ భాగస్వామి",
  ctaBadge: "మీ వాయిస్ నెట్‌వర్క్‌ను రూపొందించండి",
  ctaTitle: "స్పష్టమైన కాల్‌లు మరియు స్మార్ట్ గ్లోబల్ రీచ్ కోసం సిద్ధంగా ఉండండి",
};

const ta: WholesaleVoiceTranslation = {
  ...en,
  heroBadge: "உலகளாவிய குரல் கட்டமைப்பு",
  heroTitle: "ஒவ்வொரு அழைப்பும், முழு நம்பிக்கையுடன் இணைக்கப்படுகிறது.",
  heroDesc:
    "ஒவ்வொரு சந்தையிலும் தெளிவான உரையாடல்கள் தேவைப்படும் வணிகங்களுக்கான கேரியர்-கிரேடு குரல் நிறுத்தம், உருவாக்கம் மற்றும் மெய்நிகர் எண்கள்.",
  talkToExpert: "நிபுணரிடம் பேசுங்கள்",
  exploreCapabilities: "திறன்களை ஆராயுங்கள்",
  whyBadge: "INET குரலை ஏன் தேர்வு செய்ய வேண்டும்",
  whyTitle: "வாடிக்கையாளர் நம்பிக்கையைப் பெறும் குரல் கட்டமைப்பு",
  capabilitiesBadge: "எங்கள் முக்கிய திறன்கள்",
  capabilitiesTitle: "உங்கள் டிராஃபிக்கை மையமாகக் கொண்டு கட்டமைக்கப்பட்ட குரல் அடுக்கு",
  networkBadge: "உலகளாவிய அளவில் நம்பகத்தன்மை",
  networkTitle: "உரையாடல்களை தடையின்றி வைத்திருக்க வடிவமைக்கப்பட்ட நெட்வொர்க்",
  momentsBadge: "உண்மையான உரையாடல்களுக்காக உருவாக்கப்பட்டது",
  momentsTitle: "ஒவ்வொரு முக்கியமான தருணத்திற்கும் குரல் சேவைகள்",
  timelineBadge: "நம்பிக்கையுடன் தொடங்குங்கள்",
  timelineTitle: "தேவைகளிலிருந்து நேரடி டிராஃபிக் வரை, ஒன்றாக",
  testimonialBadge: "நம்பகமான குரல் கூட்டாளி",
  testimonialTitle: "உங்கள் செயல்பாட்டுக் குழு நம்பக்கூடிய குரல் கூட்டாளி",
  ctaBadge: "உங்கள் குரல் நெட்வொர்க்கை உருவாக்குங்கள்",
  ctaTitle: "தெளிவான அழைப்புகள் மற்றும் உலகளாவிய இணைப்பிற்கு தயாராகுங்கள்",
};

const ar: WholesaleVoiceTranslation = {
  ...en,
  heroBadge: "البنية التحتية العالمية للصوت",
  heroTitle: "كل مكالمة، متصلة بكل ثقة واحترافية.",
  heroDesc:
    "إنهاء الصوت بمستوى شركات الاتصالات، والتأسيس والأرقام الافتراضية للشركات التي تتطلب محادثات نقية في كل الأسواق العالمية.",
  talkToExpert: "تحدث مع خبير",
  exploreCapabilities: "استكشف الإمكانيات",
  whyBadge: "لماذا تختار صوت INET",
  whyTitle: "بنية تحتية صوتية تكتسب ثقة العملاء",
  capabilitiesBadge: "قدراتنا الأساسية",
  capabilitiesTitle: "بنية صوتية موحدة مصممة لتناسب حجم حركة المرور لديك",
  networkBadge: "الموثوقية على النطاق العالمي",
  networkTitle: "شبكة مصممة للحفاظ على استمرار المحادثات دون انقطاع",
  momentsBadge: "مصممة للمحادثات الحقيقية",
  momentsTitle: "خدمات صوتية لكل لحظة حرجة في عملك",
  timelineBadge: "انطلق بكل ثقة",
  timelineTitle: "من تحديد المتطلبات إلى حركة المرور المباشرة، معاً",
  testimonialBadge: "موثوق به في بيئات الإنتاج",
  testimonialTitle: "شريك الصوت الذي يمكن لفريق العمليات الاعتماد عليه",
  ctaBadge: "دعنا نبني شبكتك الصوتية",
  ctaTitle: "جاهز لمكالمات فائقة النقاء ووصول عالمي ذكي",
};

const translations: Record<string, WholesaleVoiceTranslation> = {
  en,
  es,
  ja,
  te,
  ta,
  ar,
};

export const getWholesaleVoiceTranslations = (
  languageId: string,
  _regionId?: string,
  _regionName?: string
): WholesaleVoiceTranslation => {
  return translations[languageId] || translations["en"];
};

export interface WholesaleMessageTranslation {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  talkToExpert: string;
  exploreCapabilities: string;
  stats: {
    routing: string;
    routingLabel: string;
    traffic: string;
    trafficLabel: string;
    insights: string;
    insightsLabel: string;
  };
  heroLiveBadge1: {
    title: string;
    label: string;
  };
  heroLiveBadge2: {
    title: string;
    sub: string;
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
  howItWorksBadge: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  howItWorksSteps: Array<{
    step: string;
    title: string;
    desc: string;
    note: string;
  }>;
  networkBadge: string;
  networkTitle: string;
  networkDesc: string;
  networkBullets: string[];
  networkStats: Array<{
    val: string;
    label: string;
  }>;
  networkBadgeOverlay: {
    title: string;
    sub: string;
  };
  networkFooterNote: string;
  momentsBadge: string;
  momentsTitle: string;
  momentsSubtitle: string;
  moments: Array<{
    title: string;
    desc: string;
    footer: string;
  }>;
  intelligenceBadge: string;
  intelligenceTitle: string;
  intelligenceDesc: string;
  intelligenceBullets: string[];
  intelligenceFootnote: string;
  messageLogCard: {
    title: string;
    badge: string;
    tab1: string;
    tab2: string;
    tab3: string;
    colType: string;
    colState: string;
    colReceipt: string;
    row1Type: string;
    row1State: string;
    row1Receipt: string;
    row2Type: string;
    row2State: string;
    row2Receipt: string;
    row3Type: string;
    row3State: string;
    row3Receipt: string;
    footerText: string;
  };
  protectionTitle: string;
  protectionBadge: string;
  protectionCards: Array<{
    title: string;
    desc: string;
  }>;
  timelineBadge: string;
  timelineTitle: string;
  timelineSubtitle: string;
  timelineSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  integrationPlan: {
    title: string;
    planBadge: string;
    connection: string;
    traffic: string;
    formats: string;
    feedback: string;
    senderSetup: string;
    check1: string;
    check2: string;
    discussNote: string;
    discussBtn: string;
  };
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: Array<{
    q: string;
    a: string;
  }>;
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactUs: string;
  ctaFootnote: string;
}

const en: WholesaleMessageTranslation = {
  heroBadge: "WHOLESALE SMS • GLOBAL MESSAGING INFRASTRUCTURE",
  heroTitle: "Every Message, Connected With Confidence.",
  heroDesc:
    "Carrier-grade wholesale SMS for carriers, aggregators and messaging platforms. Connect your A2P traffic to global routes with direct carrier connectivity, delivery visibility and hands-on network expertise.",
  talkToExpert: "Talk to an expert",
  exploreCapabilities: "Explore capabilities",
  stats: {
    routing: "Global routing",
    routingLabel: "Market-led reach",
    traffic: "A2P messaging",
    trafficLabel: "Business-critical traffic",
    insights: "Delivery insights",
    insightsLabel: "Operational control",
  },
  heroLiveBadge1: {
    title: "A2P connectivity",
    label: "Your platform. Global reach.",
  },
  heroLiveBadge2: {
    title: "Visibility at every step",
    sub: "Submit • Route • Report",
  },
  whyBadge: "WHY INET WHOLESALE SMS",
  whyTitle: "Messaging Infrastructure That Works For Your Business",
  whySubtitle1:
    "Built for teams that need reach, delivery insight and control over their A2P traffic.",
  whySubtitle2:
    "One partner for global messaging, carrier interconnects and the expertise behind every route.",
  whyCards: [
    {
      title: "Reach more markets",
      desc: "Build international messaging reach around the destinations your customers need.",
      footer: "Global SMS routing",
    },
    {
      title: "Connect to carriers",
      desc: "Bring your traffic closer to mobile networks through direct carrier relationships.",
      footer: "Direct connectivity",
    },
    {
      title: "Understand delivery",
      desc: "Use delivery receipts and route-level reporting to make informed traffic decisions.",
      footer: "Transparent reporting",
    },
    {
      title: "Protect your traffic",
      desc: "Pair messaging growth with fraud controls and market-specific sender requirements.",
      footer: "Traffic protection",
    },
  ],
  capabilitiesBadge: "OUR CORE CAPABILITIES",
  capabilitiesTitle: "One SMS Platform, Built Around Your Traffic",
  capabilitiesDesc:
    "Shape your messaging service by destination, use case and route policy—then expand without rebuilding your communications layer.",
  designSolution: "Design your solution",
  solutionNote:
    "Discuss coverage, sender requirements and interconnect options with our team.",
  capabilities: [
    {
      tag: "Business messaging",
      title: "Wholesale A2P messaging",
      desc: "Carry business-to-consumer SMS for authentication, notifications and opted-in customer engagement.",
    },
    {
      tag: "Market-led reach",
      title: "Global SMS routing",
      desc: "Align destinations, traffic types and routing preferences with your commercial and delivery needs.",
    },
    {
      tag: "Carrier interconnects",
      title: "Direct carrier connectivity",
      desc: "Access mobile network relationships and managed interconnects for clearer route accountability.",
    },
    {
      tag: "Route management",
      title: "Quality-based routing",
      desc: "Evaluate routes using delivery feedback and adapt traffic policies as network conditions change.",
    },
    {
      tag: "Operational visibility",
      title: "Delivery reporting",
      desc: "Track message status, review destination performance and investigate errors with delivery receipts.",
    },
    {
      tag: "Traffic safeguards",
      title: "SMS fraud protection",
      desc: "Apply traffic checks, sender controls and destination policies to help identify unwanted activity.",
    },
  ],
  howItWorksBadge: "HOW IT WORKS",
  howItWorksTitle: "From Your Platform To The Handset",
  howItWorksSubtitle:
    "A straightforward messaging flow, with network intelligence and delivery feedback built in.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Connect your platform",
      desc: "Submit A2P messages through an agreed SMPP or API connection, with your sender and destination settings.",
      note: "Your application → iNet",
    },
    {
      step: "02",
      title: "Validate and route",
      desc: "Traffic checks and routing policies guide each message to the appropriate carrier connection.",
      note: "Policy-led route selection",
    },
    {
      step: "03",
      title: "Deliver and report",
      desc: "Receive network delivery feedback and use message states to monitor traffic and refine your service.",
      note: "Delivery receipts → your platform",
    },
  ],
  networkBadge: "RELIABILITY AT GLOBAL SCALE",
  networkTitle: "A Network Designed To Keep Messages Moving",
  networkDesc:
    "Bring your A2P traffic closer to the mobile networks that serve your customers. Combine carrier connectivity with routing policies tailored to each market.",
  networkBullets: [
    "Direct carrier relationships and managed partner routes",
    "Destination-aware routing and alternative route options",
    "Sender ID and registration guidance by market",
    "Route monitoring and operational escalation",
  ],
  networkStats: [
    {
      val: "Carrier-led",
      label: "Connectivity strategy",
    },
    {
      val: "Market-aware",
      label: "Routing & sender policies",
    },
  ],
  networkBadgeOverlay: {
    title: "Connected through carrier relationships",
    sub: "Direct routes. Managed interconnects.",
  },
  networkFooterNote:
    "Coverage and sender options vary by destination. Ask our team about the markets you need.",
  momentsBadge: "BUILT FOR BUSINESS MESSAGING",
  momentsTitle: "SMS For The Moments That Matter",
  momentsSubtitle:
    "Give your enterprise customers the connectivity to reach people across their everyday digital journeys.",
  moments: [
    {
      title: "Authentication",
      desc: "Support account access, sign-in verification and transaction approvals with A2P SMS.",
      footer: "OTP & verification",
    },
    {
      title: "Transactional alerts",
      desc: "Keep customers informed with payment updates, account notices and service alerts.",
      footer: "Relevant updates",
    },
    {
      title: "Customer journeys",
      desc: "Send order confirmations, delivery updates and appointment reminders from your platform.",
      footer: "Timely notifications",
    },
    {
      title: "Customer engagement",
      desc: "Connect opted-in audiences with useful offers, loyalty updates and campaign messages.",
      footer: "Consent-led campaigns",
    },
  ],
  intelligenceBadge: "Delivery intelligence",
  intelligenceTitle: "See Your Traffic. Improve Your Decisions.",
  intelligenceDesc:
    "Move beyond submission counts. Delivery receipts and route-level reporting help your operations team understand what happens after a message leaves your platform.",
  intelligenceBullets: [
    "Message status and carrier-reported delivery receipts",
    "Destination and route performance analysis",
    "Error visibility for troubleshooting and route review",
  ],
  intelligenceFootnote:
    "Receipt availability and detail depend on the destination network.",
  messageLogCard: {
    title: "Message visibility",
    badge: "ILLUSTRATIVE VIEW",
    tab1: "Message log",
    tab2: "Routes",
    tab3: "Destinations",
    colType: "MESSAGE TYPE",
    colState: "STATE",
    colReceipt: "RECEIPT",
    row1Type: "Verification",
    row1State: "Delivered",
    row1Receipt: "Received",
    row2Type: "Order update",
    row2State: "Submitted",
    row2Receipt: "Pending",
    row3Type: "Service alert",
    row3State: "Rejected",
    row3Receipt: "Error detail",
    footerText: "Follow each message from submission to network feedback.",
  },
  protectionTitle: "Protection built into your messaging strategy",
  protectionBadge: "FRAUD & TRAFFIC CONTROLS",
  protectionCards: [
    {
      title: "Traffic screening",
      desc: "Review unusual patterns and apply controls to help reduce spam and SMS pumping exposure.",
    },
    {
      title: "Sender governance",
      desc: "Align sender identities and registration requirements with the rules of each destination.",
    },
    {
      title: "Policy-based controls",
      desc: "Set destination and traffic policies with your team, then review activity as your service evolves.",
    },
  ],
  timelineBadge: "Launch with confidence",
  timelineTitle: "From Requirements To Live Traffic, Together",
  timelineSubtitle:
    "Connect to your existing messaging stack with a clear onboarding plan. Our team helps align your integration, routing and sender setup before launch.",
  timelineSteps: [
    {
      step: "1",
      title: "Scope",
      desc: "Confirm destinations, traffic profiles, sender needs and commercial priorities.",
    },
    {
      step: "2",
      title: "Connect",
      desc: "Agree SMPP or API access, credentials and delivery-receipt handling.",
    },
    {
      step: "3",
      title: "Validate",
      desc: "Test message formats, sender setup, route behavior and network feedback.",
    },
    {
      step: "4",
      title: "Launch",
      desc: "Introduce live traffic and review delivery performance with our team.",
    },
  ],
  integrationPlan: {
    title: "Your SMS connection",
    planBadge: "INTEGRATION PLAN",
    connection: "SMPP / API",
    traffic: "A2P messaging",
    formats: "GSM-7 / Unicode",
    feedback: "Delivery receipts",
    senderSetup: "Market-specific",
    check1: "Credentials and connectivity testing",
    check2: "Sender and receipt validation",
    discussNote: "Discuss the right interface for your messaging platform.",
    discussBtn: "Discuss integration",
  },
  faqBadge: "Your questions, answered",
  faqTitle: "A Clearer Path To Your SMS Solution",
  faqSubtitle: "The practical details to consider before connecting your traffic.",
  faqs: [
    {
      q: "Who is wholesale SMS built for?",
      a: "Carriers, SMS aggregators, CPaaS providers and messaging platforms that need connectivity for enterprise A2P traffic.",
    },
    {
      q: "Can we keep our existing messaging platform?",
      a: "Yes. We can discuss an SMPP or API interconnect and agree the message formats, throughput requirements and delivery-receipt handling for your setup.",
    },
    {
      q: "How do coverage and sender requirements work?",
      a: "Route availability, sender ID rules and registration processes vary by market. Share your destinations and use cases so our team can review the requirements.",
    },
    {
      q: "What should we share to get started?",
      a: "Your target destinations, expected traffic profile, message types, sender needs and current integration. These help us shape a relevant routing and commercial proposal.",
    },
  ],
  ctaBadge: "LET'S BUILD YOUR MESSAGING NETWORK",
  ctaTitle: "Ready For Smarter SMS Connectivity And Global Reach",
  ctaSubtitle:
    "Tell us where you need to connect, the traffic you carry and what delivery quality means to your business. Our messaging team will help shape the right routing and integration plan.",
  contactUs: "Contact us",
  ctaFootnote: "Built around your markets and traffic",
};

const es: WholesaleMessageTranslation = {
  ...en,
  heroBadge: "SMS MAYORISTA • INFRAESTRUCTURA GLOBAL DE MENSAJERÍA",
  heroTitle: "Cada mensaje, conectado con total confianza.",
  heroDesc:
    "SMS mayorista de nivel operador para carriers, agregadores y plataformas de mensajería. Conecte su tráfico A2P con rutas globales y visibilidad de entrega directa.",
  talkToExpert: "Hablar con un experto",
  exploreCapabilities: "Explorar capacidades",
  stats: {
    routing: "Enrutamiento global",
    routingLabel: "Alcance por mercado",
    traffic: "Mensajería A2P",
    trafficLabel: "Tráfico crítico de negocio",
    insights: "Métricas de entrega",
    insightsLabel: "Control operacional",
  },
  heroLiveBadge1: {
    title: "Conectividad A2P",
    label: "Su plataforma. Alcance mundial.",
  },
  heroLiveBadge2: {
    title: "Visibilidad en cada paso",
    sub: "Envío • Ruta • Reporte",
  },
  whyBadge: "POR QUÉ INET WHOLESALE SMS",
  whyTitle: "Infraestructura de mensajería adaptada a su negocio",
  whySubtitle1:
    "Diseñada para equipos que necesitan alcance, visibilidad de entrega y control sobre su tráfico A2P.",
  whySubtitle2:
    "Un socio único para mensajería global, interconexiones de operadores y experiencia técnica.",
  capabilitiesBadge: "NUESTRAS CAPACIDADES CLAVE",
  capabilitiesTitle: "Una plataforma SMS construida para su tráfico",
  capabilitiesDesc:
    "Configure su servicio de mensajería según el destino, caso de uso y política de enrutamiento sin rehacer su infraestructura.",
  designSolution: "Diseñar solución",
  solutionNote:
    "Consulte cobertura, requisitos de remitente y opciones de interconexión con nuestro equipo.",
  howItWorksBadge: "CÓMO FUNCIONA",
  howItWorksTitle: "Desde su plataforma hasta el teléfono móvil",
  howItWorksSubtitle:
    "Un flujo de mensajería directo con inteligencia de red y confirmación de entrega en tiempo real.",
  networkBadge: "CONFIABILIDAD A ESCALA GLOBAL",
  networkTitle: "Una red diseñada para mantener sus mensajes en movimiento",
  networkDesc:
    "Acerque su tráfico A2P a las redes móviles que atienden a sus usuarios finales con políticas adaptadas a cada mercado.",
  momentsBadge: "CREADO PARA MENSAJERÍA EMPRESARIAL",
  momentsTitle: "SMS para los momentos que importan",
  momentsSubtitle:
    "Brinde a sus clientes corporativos la conectividad necesaria en sus interacciones digitales cotidianas.",
  intelligenceBadge: "Inteligencia de entrega",
  intelligenceTitle: "Vea su tráfico. Tome mejores decisiones.",
  intelligenceDesc:
    "Vaya más allá de los recuentos de envío. Los recibos de entrega y los informes por ruta ayudan a su equipo de operaciones a optimizar el rendimiento.",
  protectionTitle: "Protección integrada en su estrategia de mensajería",
  protectionBadge: "CONTROLES DE FRAUDE Y TRÁFICO",
  timelineBadge: "Lanzamiento con confianza",
  timelineTitle: "De los requisitos al tráfico en vivo, juntos",
  timelineSubtitle:
    "Conéctese a su stack actual con un plan claro de incorporación y validación previa al lanzamiento.",
  faqBadge: "Sus preguntas, respondidas",
  faqTitle: "Un camino claro hacia su solución SMS",
  faqSubtitle:
    "Los detalles prácticos a considerar antes de conectar su tráfico.",
  ctaBadge: "CONSTRUYAMOS SU RED DE MENSAJERÍA",
  ctaTitle: "Listo para una conectividad SMS más inteligente y global",
  ctaSubtitle:
    "Cuéntenos sus requerimientos de conexión, volumen de tráfico y objetivos de entrega para estructurar la ruta ideal.",
  contactUs: "Contáctenos",
  ctaFootnote: "Diseñado para sus mercados y tráfico",
};

const ja: WholesaleMessageTranslation = {
  ...en,
  heroBadge: "ホールセールSMS • グローバルメッセージング基盤",
  heroTitle: "すべてのメッセージを、確かな信頼で届ける。",
  heroDesc:
    "通信事業者、アグリゲーター、メッセージングプラットフォーム向けの高信頼ホールセールSMS。直収ルートと配信可視化でA2Pトラフィックをグローバルに接続。",
  talkToExpert: "専門家に相談する",
  exploreCapabilities: "機能を見る",
  stats: {
    routing: "グローバルルーティング",
    routingLabel: "市場直結リーチ",
    traffic: "A2Pメッセージング",
    trafficLabel: "ミッションクリティカル",
    insights: "配信インサイト",
    insightsLabel: "運用コントロール",
  },
  whyBadge: "INET WHOLESALE SMS が選ばれる理由",
  whyTitle: "ビジネスの成果を最大化するメッセージング基盤",
  capabilitiesBadge: "主要機能",
  capabilitiesTitle: "トラフィックに最適化されたSMSプラットフォーム",
  howItWorksBadge: "仕組み",
  howItWorksTitle: "プラットフォームから端末へのシームレスな配信",
  networkBadge: "グローバル規模の高信頼性",
  networkTitle: "メッセージを確実に届けるネットワーク設計",
  momentsBadge: "ビジネスメッセージング",
  momentsTitle: "重要な瞬間に届くSMS",
  intelligenceBadge: "配信インテリジェンス",
  intelligenceTitle: "トラフィックを可視化し、意思決定を向上",
  protectionTitle: "メッセージング戦略に組み込まれた保護機能",
  timelineBadge: "確実な導入プロセス",
  timelineTitle: "要件定義から本番運用まで、一貫サポート",
  faqBadge: "よくあるご質問",
  faqTitle: "SMSソリューション導入の明確なロードマップ",
  ctaBadge: "メッセージングネットワークの構築へ",
  ctaTitle: "よりスマートなSMS接続と世界規模のリーチを実現",
  contactUs: "お問い合わせ",
  ctaFootnote: "対象市場とトラフィックに合わせた柔軟な設計",
};

const te: WholesaleMessageTranslation = {
  ...en,
  heroBadge: "హోల్‌సేల్ SMS • గ్లోబల్ మెసేజింగ్ నెట్‌వర్క్",
  heroTitle: "ప్రతి సందేశం, పూర్తి విశ్వాసంతో చేరుతుంది.",
  heroDesc:
    "క్యారియర్‌లు మరియు మెసేజింగ్ ప్లాట్‌ఫారమ్‌ల కోసం క్యారియర్-గ్రేడ్ హోల్‌సేల్ SMS. డైరెక్ట్ క్యారియర్ కనెక్టివిటీ మరియు డెలివరీ విజిబిలిటీతో మీ A2P ట్రాఫిక్‌ను గ్లోబల్ రూట్‌లకు అనుసంధానించండి.",
  talkToExpert: "నిపుణుడితో మాట్లాడండి",
  exploreCapabilities: "ఫీచర్లను అన్వేషించండి",
  whyBadge: "INET హోల్‌సేల్ SMS ఎందుకు?",
  whyTitle: "మీ వ్యాపారానికి సరిగ్గా సరిపోయే మెసేజింగ్ నెట్‌వర్క్",
  capabilitiesBadge: "మా ముఖ్య సామర్థ్యాలు",
  capabilitiesTitle: "మీ ట్రాఫిక్ కోసం నిర్మించిన SMS ప్లాట్‌ఫారమ్",
  howItWorksBadge: "ఇది ఎలా పనిచేస్తుంది",
  howItWorksTitle: "మీ ప్లాట్‌ఫామ్ నుండి వినియోగదారు హ్యాండ్‌సెట్ వరకు",
  networkBadge: "గ్లోబల్ స్థాయిలో నమ్మకమైన నెట్‌వర్క్",
  networkTitle: "సందేశాలను వేగంగా చేరవేసే అత్యాధునిక నెట్‌వర్క్",
  momentsBadge: "బిజినెస్ మెసేజింగ్ కోసం",
  momentsTitle: "అత్యంత కీలక సమయాల్లో ఉపయోగపడే SMS",
  intelligenceBadge: "డెలివరీ ఇంటెలిజెన్స్",
  intelligenceTitle: "మీ ట్రాఫిక్‌ను పర్యవేక్షించండి. సరైన నిర్ణయాలు తీసుకోండి.",
  protectionTitle: "మీ మెసేజింగ్ రక్షణ కోసం భద్రతా వ్యవస్థలు",
  timelineBadge: "విశ్వాసంతో ప్రారంభించండి",
  timelineTitle: "అవసరాల నుండి ప్రత్యక్ష ట్రాఫిక్ వరకు పూర్తి మద్దతు",
  faqBadge: "తరచుగా అడిగే ప్రశ్నలు",
  faqTitle: "మీ SMS పరిష్కారానికి స్పష్టమైన మార్గం",
  ctaBadge: "మీ మెసేజింగ్ నెట్‌వర్క్‌ను నిర్మిద్దాం",
  ctaTitle: "స్మార్ట్ SMS కనెక్టివిటీ మరియు గ్లోబల్ రీచ్ కోసం సిద్ధంగా ఉండండి",
  contactUs: "మమ్మల్ని సంప్రదించండి",
  ctaFootnote: "మీ మార్కెట్లు మరియు ట్రాఫిక్ ఆధారంగా రూపొందించబడింది",
};

const ta: WholesaleMessageTranslation = {
  ...en,
  heroBadge: "ஹோல்சேல் SMS • உலகளாவிய தகவல் தொடர்பு கட்டமைப்பு",
  heroTitle: "ஒவ்வொரு செய்தியும், முழு நம்பிக்கையுடன் சென்றடைகிறது.",
  heroDesc:
    "கேரியர்கள் மற்றும் மெசேஜிங் தளங்களுக்கான தரமான ஹோல்சேல் SMS. நேரடி கேரியர் இணைப்பு மற்றும் டெலிவரி நுண்ணறிவுடன் உங்கள் A2P டிராஃபிக்கை இணைக்கவும்.",
  talkToExpert: "நிபுணரிடம் பேசுங்கள்",
  exploreCapabilities: "திறன்களை ஆராயுங்கள்",
  whyBadge: "ஏன் INET ஹோல்சேல் SMS?",
  whyTitle: "உங்கள் வணிகத்திற்கு ஏற்ற மெசேஜிங் கட்டமைப்பு",
  capabilitiesBadge: "எங்கள் முக்கிய திறன்கள்",
  capabilitiesTitle: "உங்கள் டிராஃபிக்கிற்கு ஏற்ப வடிவமைக்கப்பட்ட SMS தளம்",
  howItWorksBadge: "இது எவ்வாறு செயல்படுகிறது",
  howItWorksTitle: "உங்கள் தளத்திலிருந்து மொபைல் போன் வரை",
  networkBadge: "உலகளாவிய நம்பகத்தன்மை",
  networkTitle: "செய்திகளை தடையின்றி அனுப்பும் வலுவான நெட்வொர்க்",
  momentsBadge: "வணிக தகவல் தொடர்புக்கு",
  momentsTitle: "முக்கிய தருணங்களுக்கான SMS தீர்வுகள்",
  intelligenceBadge: "டெலிவரி நுண்ணறிவு",
  intelligenceTitle: "உங்கள் டிராஃபிக்கைக் கண்காணிக்கவும். சிறந்த முடிவுகளை எடுக்கவும்.",
  protectionTitle: "பாதுகாப்பான மெசேஜிங் கட்டமைப்பு",
  timelineBadge: "நம்பிக்கையுடன் தொடங்குங்கள்",
  timelineTitle: "தேவைகள் முதல் நேரடி டிராஃபிக் வரை முழு ஆதரவு",
  faqBadge: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  faqTitle: "உங்கள் SMS தீர்வுக்கு தெளிவான பாதை",
  ctaBadge: "உங்கள் மெசேஜிங் நெட்வொர்க்கை உருவாக்குங்கள்",
  ctaTitle: "சிறந்த SMS இணைப்பு மற்றும் உலகளாவிய வரம்பிற்கு தயாரா?",
  contactUs: "தொடர்பு கொள்ளவும்",
  ctaFootnote: "உங்கள் சந்தைகள் மற்றும் டிராஃபிக்கிற்கு ஏற்ப உருவாக்கப்பட்டது",
};

const ar: WholesaleMessageTranslation = {
  ...en,
  heroBadge: "الرسائل النصية بالجملة • بنية تحتية عالمية للرسائل",
  heroTitle: "كل رسالة، متصلة بكل ثقة وموثوقية.",
  heroDesc:
    "رسائل SMS بالجملة بمستوى الناقل لشركات الاتصالات ومجمعي الخدمات ومنصات المراسلة. اربط حركة A2P الخاصة بك بمسارات عالمية مباشرة مع رؤية كاملة للتسليم.",
  talkToExpert: "تحدث مع خبير",
  exploreCapabilities: "استكشف الإمكانيات",
  stats: {
    routing: "توجيه عالمي",
    routingLabel: "وصول موجه للأسواق",
    traffic: "رسائل A2P",
    trafficLabel: "حركة مرور حرجة للأعمال",
    insights: "رؤى التسليم",
    insightsLabel: "تحكم تشغيلي كامل",
  },
  heroLiveBadge1: {
    title: "اتصال A2P",
    label: "منصتك. وصول عالمي شامل.",
  },
  heroLiveBadge2: {
    title: "رؤية في كل خطوة",
    sub: "إرسال • توجيه • تقرير",
  },
  whyBadge: "لماذا INET للرسائل بالجملة؟",
  whyTitle: "بنية تحتية للرسائل تدعم نمو أعمالك",
  whySubtitle1:
    "مبنية للفرق التي تحتاج إلى وصول واسع ورؤية دقيقة وتحكم بحركة رسائل A2P.",
  whySubtitle2:
    "شريك موثوق للمراسلة العالمية والربط المباشر مع شركات الاتصالات.",
  capabilitiesBadge: "قدراتنا الأساسية",
  capabilitiesTitle: "منصة SMS متكاملة، مصممة حول حركة مرورك",
  capabilitiesDesc:
    "خصص خدمة الرسائل الخاصة بك حسب الوجهة ونوع الاستخدام وسياسة التوجيه بكل مرونة.",
  designSolution: "صمم حلولك",
  solutionNote: "ناقش التغطية ومتطلبات هوية المرسل وخيارات الربط مع فريقنا.",
  howItWorksBadge: "كيف تعمل المنظومة",
  howItWorksTitle: "من منصتك إلى هاتف المستخدم مباشرة",
  howItWorksSubtitle:
    "مسار مراسلة واضح ومباشر، مع ذكاء شبكي مدمج وإشعارات تسليم فورية.",
  networkBadge: "موثوقية على نطاق عالمي",
  networkTitle: "شبكة مصممة لضمان استمرار تدفق الرسائل",
  networkDesc:
    "قرب حركة A2P من شبكات الهاتف المحمول التي تخدم عملاءك مع سياسات توجيه مخصصة لكل سوق.",
  momentsBadge: "مخصصة لرسائل الأعمال",
  momentsTitle: "رسائل SMS للحظات الأكثر أهمية",
  momentsSubtitle:
    "امنح عملاء مؤسستك الاتصال اللازم للوصول إلى المستخدمين في مختلف مراحل تجربتهم الرقمية.",
  intelligenceBadge: "ذكاء التسليم والتقارير",
  intelligenceTitle: "راقب حركة رسائلك. واتخذ قرارات أكثر دقة.",
  intelligenceDesc:
    "تجاوز مجرد أرقام الإرسال، حيث تمنحك إشعارات التسليم والتقارير التفصيلية رؤية عميقة لما بعد خروج الرسالة.",
  protectionTitle: "حماية متقدمة مدمجة في استراتيجية المراسلة",
  protectionBadge: "ضوابط الاحتيال وحركة المرور",
  timelineBadge: "انطلاق بثقة تامة",
  timelineTitle: "من تحديد المتطلبات إلى إطلاق حركة المرور المباشرة",
  timelineSubtitle:
    "ارتبط ببنيتك الحالية مع خطة تأهيل واضحة واختبارات شاملة قبل الإطلاق.",
  faqBadge: "إجابات على استفساراتك",
  faqTitle: "مسار واضح لحلول الرسائل النصية القصيرة",
  faqSubtitle:
    "التفاصيل العملية والتقنية الواجب مراعاتها قبل ربط حركة رسائلك.",
  ctaBadge: "دعنا نبني شبكة المراسلة الخاصة بك",
  ctaTitle: "جاهز لاتصال SMS أكثر ذكاءً وانتشاراً عالمياً؟",
  ctaSubtitle:
    "أخبرنا باحتياجاتك وحجم رسائلك ومتطلبات الجودة لديك، وسيقوم فريقنا بتصميم خطة التوجيه والربط المثلى.",
  contactUs: "اتصل بنا",
  ctaFootnote: "مصممة وفقاً لأسواقك واحتياجات حركة رسائلك",
};

const translations: Record<string, WholesaleMessageTranslation> = {
  en,
  es,
  ja,
  te,
  ta,
  ar,
};

export const getWholesaleMessageTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): WholesaleMessageTranslation => {
  const base = translations[language] || translations["en"];
  return {
    ...base,
  };
};

export default getWholesaleMessageTranslations;

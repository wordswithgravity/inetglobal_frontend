export interface WhatsappBusinessTranslation {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  talkToExpert: string;
  exploreCapabilities: string;
  chatScreen: {
    contactName: string;
    status: string;
    msg1: string;
    time1: string;
    actionBtn: string;
    msg2: string;
    time2: string;
    msg3: string;
    time3: string;
  };
  heroBadges: {
    crm: string;
    secure: string;
  };
  overviewBadge: string;
  overviewTitle: string;
  overviewDesc1: string;
  overviewDesc2: string;
  check1: string;
  check2: string;
  check3: string;
  featuresBadge: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: Array<{
    title: string;
    desc: string;
  }>;
  howItWorksBadge: string;
  howItWorksTitle: string;
  howItWorksSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  useCasesBadge: string;
  useCasesTitle: string;
  useCasesSubtitle: string;
  interactiveCard: {
    badge: string;
    message: string;
    btnConfirm: string;
    btnReschedule: string;
  };
  useCases: Array<{
    title: string;
    desc: string;
  }>;
  industriesBadge: string;
  industriesTitle: string;
  industriesSubtitle: string;
  industries: Array<{
    title: string;
    desc: string;
  }>;
  whyBadge: string;
  whyTitle: string;
  whySubtitle: string;
  whyCards: {
    secure: { title: string; description: string };
    cloud: { title: string; description: string };
    api: { title: string; description: string };
    connectivity: { title: string; description: string };
    automated: { title: string; description: string };
  };
  apiCard: {
    title: string;
    desc: string;
  };
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactUs: string;
  ctaFootnote: string;
}

const en: WhatsappBusinessTranslation = {
  heroBadge: "WHATSAPP BUSINESS",
  heroTitle: "Connect With Customers on WhatsApp",
  heroDesc:
    "Engage customers through secure, scalable WhatsApp messaging built for modern business communication.",
  talkToExpert: "Talk to an expert",
  exploreCapabilities: "Explore capabilities",
  chatScreen: {
    contactName: "Northstar Store",
    status: "Business conversation",
    msg1: "Hi Maya, your order is on its way. Would you like to track your delivery?",
    time1: "10:25",
    actionBtn: "Track my order →",
    msg2: "Thanks! Can I update the delivery instructions?",
    time2: "10:26",
    msg3: "Of course. Our team is here to help.",
    time3: "10:28",
  },
  heroBadges: {
    crm: "Connected to your CRM",
    secure: "Secure conversations",
  },
  overviewBadge: "BUSINESS MESSAGING",
  overviewTitle: "Make every conversation more useful.",
  overviewDesc1:
    "Bring WhatsApp into your customer communication strategy with iNet Global Services. Connect service teams, business systems and customer journeys through a familiar messaging experience.",
  overviewDesc2:
    "From timely updates to two-way support, turn everyday messages into relevant, consent-based conversations that keep your customers informed and your teams connected.",
  check1: "Two-way engagement",
  check2: "Relevant updates",
  check3: "Connected workflows",
  featuresBadge: "KEY FEATURES",
  featuresTitle: "Built for conversations. Ready for business.",
  featuresSubtitle:
    "The capabilities you need to make WhatsApp a connected part of your customer experience.",
  features: [
    {
      title: "Two-way business messaging",
      desc: "Support real conversations with customers, from first enquiry to follow-up.",
    },
    {
      title: "Rich, interactive messages",
      desc: "Share documents, images and clear reply options to make the next step simple.",
    },
    {
      title: "Workflow automation",
      desc: "Build guided journeys for common questions, updates and service requests.",
    },
    {
      title: "API & CRM integration",
      desc: "Connect WhatsApp with your customer data, applications and service workflows.",
    },
    {
      title: "Consent-led communication",
      desc: "Use opt-in journeys and approved templates for relevant business-initiated messages.",
    },
    {
      title: "Message delivery insight",
      desc: "Review available delivery and read events to refine your messaging journeys.",
    },
  ],
  howItWorksBadge: "HOW IT WORKS",
  howItWorksTitle: "A clear path from setup to conversation.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Plan your journey",
      desc: "Define your use cases, customer opt-in approach and messaging requirements.",
    },
    {
      step: "02",
      title: "Set up your business",
      desc: "Prepare your business account, sender number and message templates.",
    },
    {
      step: "03",
      title: "Connect your systems",
      desc: "Integrate your applications and configure automation with our team.",
    },
    {
      step: "04",
      title: "Launch & refine",
      desc: "Test your journeys, go live and use message insights to improve them.",
    },
  ],
  useCasesBadge: "WHATSAPP USE CASES",
  useCasesTitle: "Be there at the moments that matter.",
  useCasesSubtitle:
    "Make customer journeys feel connected, from a helpful first response to the next important update.",
  interactiveCard: {
    badge: "A MORE CONNECTED CUSTOMER JOURNEY",
    message:
      '"Your appointment is confirmed for tomorrow at 10:00. Need to make a change?"',
    btnConfirm: "Confirm appointment",
    btnReschedule: "Reschedule",
  },
  useCases: [
    {
      title: "Order & delivery updates",
      desc: "Keep customers informed with confirmations, shipping updates and delivery notifications.",
    },
    {
      title: "Appointments & reminders",
      desc: "Share booking details, send timely reminders and make rescheduling easier.",
    },
    {
      title: "Customer service",
      desc: "Answer questions, guide customers and hand conversations over to your service team.",
    },
    {
      title: "Personalised engagement",
      desc: "Send relevant offers and follow-ups to customers who have opted in to hear from you.",
    },
  ],
  industriesBadge: "INDUSTRIES WE SERVE",
  industriesTitle: "Relevant conversations, across industries.",
  industriesSubtitle:
    "Adapt WhatsApp to the service moments and communication needs of your sector.",
  industries: [
    {
      title: "Banking & finance",
      desc: "Service enquiries and customer notifications.",
    },
    {
      title: "E-commerce & retail",
      desc: "Order updates and post-purchase support.",
    },
    {
      title: "Healthcare",
      desc: "Appointment reminders and service guidance.",
    },
    {
      title: "Education",
      desc: "Admissions enquiries and course updates.",
    },
    {
      title: "Travel & hospitality",
      desc: "Booking confirmations and guest assistance.",
    },
  ],
  whyBadge: "WHY OUR INET WHATSAPP SOLUTION",
  whyTitle: "Why Choose Our WhatsApp Solutions",
  whySubtitle:
    "Built for clear connections, flexible routing, and reliable messaging performance across global markets.",
  whyCards: {
    secure: {
      title: "Secure and Reliable Messaging",
      description:
        "Official Meta Business API connection with end-to-end encryption, guaranteed uptime, and verified sender security.",
    },
    cloud: {
      title: "Cloud-Based Infrastructure",
      description:
        "High-throughput cloud architecture designed to scale seamlessly with your growing customer conversations.",
    },
    api: {
      title: "WhatsApp API & CRM Integration",
      description:
        "As a trusted Business Solution Provider, we help businesses integrate WhatsApp messaging into websites, mobile apps, CRM systems, and customer service platforms.",
    },
    connectivity: {
      title: "Global Message Connectivity",
      description:
        "Worldwide reach across 190+ countries with carrier-grade reliability and high message delivery rates.",
    },
    automated: {
      title: "Automated Chatbot & Workflows",
      description:
        "Deploy automated conversational flows, interactive buttons, quick replies, and seamless live-agent handover.",
    },
  },
  apiCard: {
    title: "WhatsApp API & CRM Integration",
    desc: "As a trusted Business Solution Provider, we help businesses integrate WhatsApp messaging into websites, mobile apps, CRM systems, and customer service platforms.",
  },
  ctaBadge: "LET'S BUILD YOUR MESSAGING NETWORK",
  ctaTitle: "Bring your business to WhatsApp.",
  ctaSubtitle:
    "Tell us where you need to connect, the traffic you carry and what delivery quality means to your business. Our messaging team will help shape the right routing and integration plan.",
  contactUs: "Contact us",
  ctaFootnote: "Built around your markets and traffic",
};

const es: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "WHATSAPP BUSINESS",
  heroTitle: "Conecte con sus clientes en WhatsApp",
  heroDesc:
    "Interactúe con sus clientes mediante mensajería de WhatsApp segura y escalable diseñada para la comunicación empresarial moderna.",
  talkToExpert: "Hablar con un experto",
  exploreCapabilities: "Explorar capacidades",
  overviewBadge: "MENSAJERÍA EMPRESARIAL",
  overviewTitle: "Haga cada conversación más útil.",
  overviewDesc1:
    "Incorpore WhatsApp a su estrategia de comunicación con iNet Global Services. Conecte equipos de servicio, sistemas y clientes.",
  overviewDesc2:
    "Desde actualizaciones oportunas hasta soporte bidireccional, transforme mensajes cotidianos en conversaciones con consentimiento.",
  check1: "Interacción bidireccional",
  check2: "Actualizaciones relevantes",
  check3: "Flujos conectados",
  featuresBadge: "CARACTERÍSTICAS CLAVE",
  featuresTitle: "Creado para conversaciones. Listo para empresas.",
  featuresSubtitle:
    "Las capacidades que necesita para hacer de WhatsApp una parte integrada de su experiencia de cliente.",
  howItWorksBadge: "CÓMO FUNCIONA",
  howItWorksTitle: "Un camino claro desde la configuración hasta la conversación.",
  useCasesBadge: "CASOS DE USO DE WHATSAPP",
  useCasesTitle: "Presente en los momentos que importan.",
  useCasesSubtitle:
    "Haga que las interacciones con los clientes se sientan conectadas, desde la primera respuesta hasta la siguiente actualización.",
  industriesBadge: "INDUSTRIAS QUE ATENDEMOS",
  industriesTitle: "Conversaciones relevantes en diversas industrias.",
  whyBadge: "POR QUÉ NUESTRA SOLUCIÓN WHATSAPP",
  whyTitle: "Por qué elegir nuestras soluciones de WhatsApp",
  ctaBadge: "CONSTRUYAMOS SU RED DE MENSAJERÍA",
  ctaTitle: "Lleve su negocio a WhatsApp.",
  ctaSubtitle:
    "Cuéntenos sus requerimientos de conexión, volumen de tráfico y objetivos de entrega para estructurar la solución ideal.",
  contactUs: "Contáctenos",
  ctaFootnote: "Diseñado para sus mercados y tráfico",
};

const ja: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "WHATSAPP BUSINESS",
  heroTitle: "WhatsAppで顧客とつながる",
  heroDesc:
    "安全で拡張性の高いWhatsAppメッセージングを通じて、現代のビジネスコミュニケーションを実現。",
  talkToExpert: "専門家に相談する",
  exploreCapabilities: "機能を見る",
  overviewBadge: "ビジネスメッセージング",
  overviewTitle: "すべての会話をより価値あるものに。",
  featuresBadge: "主要機能",
  featuresTitle: "会話のために構築され、ビジネスに対応。",
  howItWorksBadge: "仕組み",
  howItWorksTitle: "設定から会話開始までの確実なステップ。",
  useCasesBadge: "活用シーン",
  useCasesTitle: "重要な瞬間に寄り添うコミュニケーション。",
  industriesBadge: "対応業界",
  industriesTitle: "あらゆる業界に適した会話体験。",
  whyBadge: "INET WHATSAPP が選ばれる理由",
  whyTitle: "当社のWhatsAppソリューションを選ぶ理由",
  ctaBadge: "メッセージングネットワークの構築へ",
  ctaTitle: "ビジネスをWhatsAppへ。",
  contactUs: "お問い合わせ",
};

const te: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "వాట్సాప్ బిజినెస్",
  heroTitle: "వాట్సాప్‌లో కస్టమర్లతో కనెక్ట్ అవ్వండి",
  heroDesc:
    "ఆధునిక వ్యాపార కమ్యూనికేషన్ కోసం నిర్మించిన సురక్షితమైన వాట్సాప్ మెసేజింగ్ ద్వారా కస్టమర్లతో కనెక్ట్ అవ్వండి.",
  talkToExpert: "నిపుణుడితో మాట్లాడండి",
  exploreCapabilities: "ఫీచర్లను అన్వేషించండి",
  overviewBadge: "బిజినెస్ మెసేజింగ్",
  overviewTitle: "ప్రతి సంభాషణను మరింత ఉపయోగకరంగా చేయండి.",
  featuresBadge: "ముఖ్య ఫీచర్లు",
  featuresTitle: "సంభాషణల కోసం నిర్మించబడింది. వ్యాపారానికి సిద్ధంగా ఉంది.",
  howItWorksBadge: "ఇది ఎలా పనిచేస్తుంది",
  howItWorksTitle: "సెటప్ నుండి సంభాషణ వరకు స్పష్టమైన మార్గం.",
  useCasesBadge: "వాట్సాప్ వినియోగ సందర్భాలు",
  useCasesTitle: "కీలక క్షణాల్లో కస్టమర్లకు అందుబాటులో ఉండండి.",
  industriesBadge: "వివిధ రంగాలు",
  industriesTitle: "పరిశ్రమలకు అనువైన సంభాషణలు.",
  whyBadge: "INET వాట్సాప్ ఎందుకు?",
  whyTitle: "మా వాట్సాప్ సొల్యూషన్స్‌ను ఎందుకు ఎంచుకోవాలి",
  ctaBadge: "మీ నెట్‌వర్క్‌ను నిర్మించండి",
  ctaTitle: "మీ వ్యాపారాన్ని వాట్సాప్‌కు తీసుకురండి.",
  contactUs: "మమ్మల్ని సంప్రదించండి",
};

const ta: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "வாட்ஸ்அப் பிசினஸ்",
  heroTitle: "வாட்ஸ்அப்பில் வாடிக்கையாளர்களுடன் இணையுங்கள்",
  heroDesc:
    "நவீன வணிகத் தொடர்புக்காக உருவாக்கப்பட்ட பாதுகாப்பான வாட்ஸ்அப் மெசேஜிங் மூலம் வாடிக்கையாளர்களை ஈர்க்கவும்.",
  talkToExpert: "நிபுணரிடம் பேசுங்கள்",
  exploreCapabilities: "திறன்களை ஆராயுங்கள்",
  overviewBadge: "வணிக தகவல் தொடர்பு",
  overviewTitle: "ஒவ்வொரு உரையாடலையும் பயனுள்ளதாக்குங்கள்.",
  featuresBadge: "முக்கிய அம்சங்கள்",
  featuresTitle: "உரையாடல்களுக்காக உருவாக்கப்பட்டது. வணிகத்திற்கு ஏற்றது.",
  howItWorksBadge: "இது எவ்வாறு செயல்படுகிறது",
  howItWorksTitle: "அமைவு முதல் உரையாடல் வரை தெளிவான பாதை.",
  useCasesBadge: "பயன்பாட்டு முறைகள்",
  useCasesTitle: "முக்கிய தருணங்களில் வாடிக்கையாளர்களுடன் இருங்கள்.",
  industriesBadge: "துறைகள்",
  industriesTitle: "பல்வேறு தொழில்களுக்கான சிறந்த உரையாடல் தீர்வுகள்.",
  whyBadge: "ஏன் INET வாட்ஸ்அப் தீர்வு?",
  whyTitle: "எங்கள் வாட்ஸ்அப் தீர்வுகளை ஏன் தேர்ந்தெடுக்க வேண்டும்",
  ctaBadge: "மெசேஜிங் நெட்வொர்க்கை உருவாக்குங்கள்",
  ctaTitle: "உங்கள் வணிகத்தை வாட்ஸ்அப்பிற்கு கொண்டு வாருங்கள்.",
  contactUs: "தொடர்பு கொள்ளவும்",
};

const ar: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "واتساب للأعمال",
  heroTitle: "تواصل مع عملائك عبر واتساب بكل سهولة",
  heroDesc:
    "تفاعل مع العملاء من خلال رسائل واتساب آمنة وقابلة للتوسع ومصممة للاتصالات التجارية الحديثة.",
  talkToExpert: "تحدث مع خبير",
  exploreCapabilities: "استكشف الإمكانيات",
  overviewBadge: "رسائل الأعمال",
  overviewTitle: "اجعل كل محادثة أكثر فائدة وقيمة.",
  featuresBadge: "الميزات الأساسية",
  featuresTitle: "مبنية للمحادثات. جاهزة لخدمة الأعمال.",
  howItWorksBadge: "كيف تعمل المنظومة",
  howItWorksTitle: "مسار واضح من الإعداد إلى بدء المحادثات.",
  useCasesBadge: "حالات الاستخدام",
  useCasesTitle: "كن حاضراً في اللحظات الأكثر أهمية.",
  industriesBadge: "القطاعات التي نخدمها",
  industriesTitle: "محادثات ملائمة لمختلف القطاعات.",
  whyBadge: "لماذا حلول واتساب من INET؟",
  whyTitle: "لماذا تختار حلول واتساب الخاصة بنا",
  ctaBadge: "دعنا نبني شبكة المراسلة الخاصة بك",
  ctaTitle: "انقل أعمالك إلى واتساب اليوم.",
  contactUs: "اتصل بنا",
};


const zh: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "全渠道通信服务",
  heroTitle: "轻松在 WhatsApp 上与您的客户建立连接",
  heroDesc: "通过专为现代企业设计的安全可扩展 WhatsApp 消息服务与全球用户互动。",
  talkToExpert: "咨询专家",
  exploreCapabilities: "了解功能",
  overviewBadge: "核心竞争优势",
  overviewTitle: "为规模化企业打造的统一客户沟通中心",
  featuresBadge: "平台功能",
  featuresTitle: "全方位的客户连接与互动能力",
  ctaBadge: "构建您的全渠道通信网络",
  ctaTitle: "利用现代全渠道通信实现业务飞跃",
  contactUs: "联系我们",
};

const hi: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "ऑम्नीचैनल सेवा",
  heroTitle: "व्हाट्सएप पर अपने ग्राहकों से आसानी से जुड़ें",
  heroDesc: "आधुनिक व्यावसायिक संचार के लिए डिज़ाइन किए गए सुरक्षित और स्केलेबल व्हाट्सएप मैसेजिंग से ग्राहकों को जोड़ें।",
  talkToExpert: "विशेषज्ञ से बात करें",
  exploreCapabilities: "सुविधाएं देखें",
  overviewBadge: "हमारा समाधान क्यों",
  overviewTitle: "बड़े पैमाने के लिए निर्मित एकीकृत ग्राहक संचार",
  featuresBadge: "प्लेटफॉर्म सुविधाएं",
  featuresTitle: "संपूर्ण ग्राहक सहभागिता क्षमताएं",
  ctaBadge: "अपना ऑम्नीचैनल नेटवर्क बनाएं",
  ctaTitle: "आधुनिक ऑम्नीचैनल समाधानों के साथ आगे बढ़ें",
  contactUs: "संपर्क करें",
};

const fr: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "SERVICE OMNICANICAL",
  heroTitle: "Connectez-vous Facilement à Vos Clients sur WhatsApp",
  heroDesc: "Engagez vos clients avec une messagerie WhatsApp sécurisée et évolutive adaptée aux entreprises modernes.",
  talkToExpert: "Parler à un expert",
  exploreCapabilities: "Découvrir les fonctionnalités",
  overviewBadge: "POURQUOI NOTRE SOLUTION",
  overviewTitle: "Communication Client Unifiée Conçue pour l'Échelle",
  featuresBadge: "FONCTIONNALITÉS DE LA PLATEFORME",
  featuresTitle: "Capacités Complètes d'Engagement Client",
  ctaBadge: "CONSTRUISEZ VOTRE RÉSEAU OMNICANICAL",
  ctaTitle: "Développez-vous avec des Solutions Omnicanales Modernes",
  contactUs: "Contactez-nous",
};

const de: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL-SERVICE",
  heroTitle: "Mühelos mit Ihren Kunden auf WhatsApp Verbinden",
  heroDesc: "Binden Sie Kunden mit sicheren, skalierbaren WhatsApp-Nachrichten für moderne Unternehmen ein.",
  talkToExpert: "Mit einem Experten sprechen",
  exploreCapabilities: "Funktionen erkunden",
  overviewBadge: "WARUM UNSERE LÖSUNG",
  overviewTitle: "Einheitliche Kundenkommunikation für Skalierbarkeit",
  featuresBadge: "PLATTFORMFUNKTIONEN",
  featuresTitle: "Vollständige Kundeninteraktionsfunktionen",
  ctaBadge: "BAUEN SIE IHR OMNICHANNEL-NETZWERK AUF",
  ctaTitle: "Wachsen Sie mit Modernen Omnichannel-Lösungen",
  contactUs: "Kontaktieren Sie uns",
};

const pt: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "SERVIÇO OMNICHANNEL",
  heroTitle: "Conecte-se com Seus Clientes no WhatsApp Sem Esforço",
  heroDesc: "Engaje clientes com mensagens seguras e escaláveis no WhatsApp, projetadas para empresas modernas.",
  talkToExpert: "Falar com um especialista",
  exploreCapabilities: "Explorar recursos",
  overviewBadge: "POR QUE NOSSA SOLUÇÃO",
  overviewTitle: "Comunicação Unificada com Clientes Construída para Escala",
  featuresBadge: "RECURSOS DA PLATAFORMA",
  featuresTitle: "Capacidades Completas de Engajamento de Clientes",
  ctaBadge: "CONSTRUA SUA REDE OMNICHANNEL",
  ctaTitle: "Cresça com Soluções Omnichannel Modernas",
  contactUs: "Fale Conosco",
};

const ru: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "ОМНИКАНАЛЬНЫЙ СЕРВИС",
  heroTitle: "Легко общайтесь с клиентами в WhatsApp",
  heroDesc: "Взаимодействуйте с аудиторией через безопасные масштабируемые сообщения WhatsApp для бизнеса.",
  talkToExpert: "Консультация с экспертом",
  exploreCapabilities: "Узнать возможности",
  overviewBadge: "ПОЧЕМУ НАШЕ РЕШЕНИЕ",
  overviewTitle: "Единая коммуникация с клиентами для масштабирования",
  featuresBadge: "ФУНКЦИИ ПЛАТФОРМЫ",
  featuresTitle: "Полный набор инструментов для взаимодействия с клиентами",
  ctaBadge: "ПОСТРОЙТЕ ВАШУ ОМНИКАНАЛЬНУЮ СЕТЬ",
  ctaTitle: "Растите вместе с современными омниканальными решениями",
  contactUs: "Связаться с нами",
};

const it: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "SERVIZIO OMNICANALE",
  heroTitle: "Connettiti con i Tuoi Clienti su WhatsApp con Facilità",
  heroDesc: "Coinvolgi i clienti con messaggistica WhatsApp sicura e scalabile creata per il business moderno.",
  talkToExpert: "Parla con un esperto",
  exploreCapabilities: "Esplora le funzionalità",
  overviewBadge: "PERCHÉ LA NOSTRA SOLUZIONE",
  overviewTitle: "Comunicazione Unificata Costruita per la Scalabilità",
  featuresBadge: "CARATTERISTICHE DELLA PIATTAFORMA",
  featuresTitle: "Funzionalità Complete per il Coinvolgimento dei Clienti",
  ctaBadge: "COSTRUISCI LA TUA RETE OMNICANALE",
  ctaTitle: "Cresci con le Moderne Soluzioni Omnicanale",
  contactUs: "Contattaci",
};

const ko: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "옴니채널 서비스",
  heroTitle: "WhatsApp에서 고객과 손쉽게 소통하세요",
  heroDesc: "현대 비즈니스를 위해 설계된 안전하고 확장 가능한 WhatsApp 메시징으로 고객과 대화하세요.",
  talkToExpert: "전문가와 상담",
  exploreCapabilities: "기능 살펴보기",
  overviewBadge: "솔루션의 강점",
  overviewTitle: "확장성을 위해 구축된 통합 고객 커뮤니케이션",
  featuresBadge: "플랫폼 주요 기능",
  featuresTitle: "완벽한 고객 인게이지먼트 역량",
  ctaBadge: "옴니채널 네트워크를 구축하세요",
  ctaTitle: "최신 옴니채널 솔루션으로 비즈니스를 성장시키세요",
  contactUs: "문의하기",
};

const nl: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL DIENST",
  heroTitle: "Maak Moeiteloos Verbinding met Klanten op WhatsApp",
  heroDesc: "Verbind klanten met veilige, schaalbare WhatsApp-berichten ontworpen voor moderne ondernemingen.",
  talkToExpert: "Praat met een expert",
  exploreCapabilities: "Bekijk mogelijkheden",
  overviewBadge: "WAAROM ONZE OPLOSSING",
  overviewTitle: "Geünificeerde Klantcommunicatie Gebouwd voor Schaal",
  featuresBadge: "PLATFORMFUNCTIES",
  featuresTitle: "Complete Klantbetrokkenheidsmogelijkheden",
  ctaBadge: "BOUW UW OMNICHANNEL NETWERK",
  ctaTitle: "Groei met Moderne Omnichannel Oplossingen",
  contactUs: "Contacteer ons",
};

const tr: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "ÇOK KANALLI (OMNICHANNEL) HİZMET",
  heroTitle: "WhatsApp Üzerinden Müşterilerinizle Kolayca Bağlantı Kurun",
  heroDesc: "Modern kurumsal iletişim için tasarlanmış güvenli ve ölçeklenebilir WhatsApp mesajlaşması.",
  talkToExpert: "Uzmanla Görüşün",
  exploreCapabilities: "Özellikleri Keşfedin",
  overviewBadge: "NEDEN BİZİM ÇÖZÜMÜMÜZ",
  overviewTitle: "Büyüme İçin Tasarlanmış Birleşik Müşteri İletişimi",
  featuresBadge: "PLATFORM ÖZELLİKLERİ",
  featuresTitle: "Kapsamlı Müşteri Etkileşim Yetenekleri",
  ctaBadge: "OMNICHANNEL AĞINIZI KURUN",
  ctaTitle: "Modern Çok Kanallı Çözümlerle Büyüyün",
  contactUs: "Bize Ulaşın",
};

const id: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "LAYANAN OMNICHANNEL",
  heroTitle: "Terhubung dengan Pelanggan di WhatsApp Tanpa Hambatan",
  heroDesc: "Libatkan pelanggan dengan pesan WhatsApp yang aman dan terukur untuk bisnis modern.",
  talkToExpert: "Bicara dengan Ahli",
  exploreCapabilities: "Jelajahi Fitur",
  overviewBadge: "MENGAPA SOLUSI KAMI",
  overviewTitle: "Komunikasi Pelanggan Terpadu yang Dibangun untuk Skala Besar",
  featuresBadge: "FITUR PLATFORM",
  featuresTitle: "Kemampuan Keterlibatan Pelanggan Lengkap",
  ctaBadge: "BANGUN JARINGAN OMNICHANNEL ANDA",
  ctaTitle: "Berkembang dengan Solusi Omnichannel Modern",
  contactUs: "Hubungi Kami",
};

const vi: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "DỊCH VỤ ĐA KÊNH (OMNICHANNEL)",
  heroTitle: "Kết Nối Dễ Dàng Với Khách Hàng Trên WhatsApp",
  heroDesc: "Tương tác với khách hàng qua tin nhắn WhatsApp an toàn, có thể mở rộng cho doanh nghiệp.",
  talkToExpert: "Trao Đổi Với Chuyên Gia",
  exploreCapabilities: "Khám Phá Tính Năng",
  overviewBadge: "ƯU THẾ GIẢI PHÁP",
  overviewTitle: "Giao Tiếp Khách Hàng Hợp Nhất Cho Mọi Quy Mô",
  featuresBadge: "TÍNH NĂNG NỀN TẢNG",
  featuresTitle: "Khả Năng Tương Tác Khách Hàng Toàn Diện",
  ctaBadge: "XÂY DỰNG MẠNG LƯỚI ĐA KÊNH",
  ctaTitle: "Phát Triển Với Giải Pháp Đa Kênh Hiện Đại",
  contactUs: "Liên Hệ Chúng Tôi",
};

const pl: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "USŁUGA OMNICHANNEL",
  heroTitle: "Łącz Się z Klientami na WhatsApp Bez Wysiłku",
  heroDesc: "Angażuj klientów za pomocą bezpiecznych i skalowalnych wiadomości WhatsApp dla biznesu.",
  talkToExpert: "Porozmawiaj z ekspertem",
  exploreCapabilities: "Poznaj możliwości",
  overviewBadge: "DLACZEGO NASZE ROZWIĄZANIE",
  overviewTitle: "Zunifikowana Komunikacja z Klientem Stworzona do Skalowania",
  featuresBadge: "FUNKCJE PLATFORMY",
  featuresTitle: "Kompletne Narzędzia Zaangażowania Klienta",
  ctaBadge: "ZBUDUJ SWOJĄ SIEĆ OMNICHANNEL",
  ctaTitle: "Rozwijaj Się Dzięki Nowoczesnym Rozwiązaniom Omnichannel",
  contactUs: "Skontaktuj się",
};

const th: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "บริการออมนิแชนเนล",
  heroTitle: "เชื่อมต่อกับลูกค้าของคุณบน WhatsApp ได้อย่างง่ายดาย",
  heroDesc: "สร้างการมีส่วนร่วมกับลูกค้าด้วยการส่งข้อความ WhatsApp ที่ปลอดภัยและปรับขนาดได้สำหรับธุรกิจ",
  talkToExpert: "คุยกับผู้เชี่ยวชาญ",
  exploreCapabilities: "สำรวจคุณสมบัติ",
  overviewBadge: "จุดเด่นของโซลูชัน",
  overviewTitle: "การสื่อสารกับลูกค้าแบบครบวงจรที่สร้างขึ้นเพื่อการเติบโต",
  featuresBadge: "ฟังก์ชันแพลตฟอร์ม",
  featuresTitle: "ขีดความสามารถการมีส่วนร่วมกับลูกค้าอย่างสมบูรณ์แบบ",
  ctaBadge: "สร้างเครือข่ายออมนิแชนเนลของคุณ",
  ctaTitle: "เติบโตไปพร้อมกับโซลูชัน Omnichannel ที่ทันสมัย",
  contactUs: "ติดต่อเรา",
};

const tl: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "SERBISYO NG OMNICHANNEL",
  heroTitle: "Kumonekta sa Iyong mga Kustomer sa WhatsApp nang Walang Kahirap-hirap",
  heroDesc: "Himukin ang mga customer gamit ang ligtas at nasusukat na WhatsApp messaging para sa negosyo.",
  talkToExpert: "Kausapin ang Dalubhasa",
  exploreCapabilities: "Tuklasin ang Kakayahan",
  overviewBadge: "BAKIT ANG AMING SOLUSYON",
  overviewTitle: "Pinag-isang Komunikasyon sa Kustomer Para sa Paglago",
  featuresBadge: "MGA TAMPOK NG PLATFORM",
  featuresTitle: "Kumpletong Kakayahan sa Pakikipag-ugnayan sa Kustomer",
  ctaBadge: "BUUIN ANG IYONG OMNICHANNEL NETWORK",
  ctaTitle: "Lumago Gamit ang Makabagong mga Solusyon sa Omnichannel",
  contactUs: "Makipag-ugnayan",
};

const bn: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "অমনিচ্যানেল পরিষেবা",
  heroTitle: "হোয়াটসঅ্যাপে অনায়াসে আপনার গ্রাহকদের সাথে সংযোগ করুন",
  heroDesc: "আধুনিক ব্যবসায়িক যোগাযোগের জন্য নির্মিত সুরক্ষিত ও স্কেলযোগ্য হোয়াটসঅ্যাপ মেসেজিংয়ের মাধ্যমে গ্রাহকদের যুক্ত করুন।",
  talkToExpert: "বিশেষজ্ঞের সাথে কথা বলুন",
  exploreCapabilities: "সুযোগ সুবিধা দেখুন",
  overviewBadge: "আমাদের সমাধানের সুবিধা",
  overviewTitle: "বৃহৎ পরিসরে তৈরি সমন্বিত গ্রাহক যোগাযোগ",
  featuresBadge: "প্ল্যাটফর্মের বৈশিষ্ট্য",
  featuresTitle: "সম্পূর্ণ গ্রাহক সম্পৃক্ততার সক্ষমতা",
  ctaBadge: "আপনার অমনিচ্যানেল নেটওয়ার্ক তৈরি করুন",
  ctaTitle: "আধুনিক অমনিচ্যানেল সমাধানের সাথে এগিয়ে যান",
  contactUs: "যোগাযোগ করুন",
};

const mr: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "ऑम्नीचॅनेल सेवा",
  heroTitle: "व्हॉट्सॲपवर तुमच्या ग्राहकांशी सहज कनेक्ट व्हा",
  heroDesc: "आधुनिक व्यावसायिक संवादासाठी डिझाइन केलेल्या सुरक्षित आणि स्केलेबल व्हॉट्सॲप मेसेजिंगद्वारे ग्राहकांशी संवाद साधा.",
  talkToExpert: "तज्ञांशी बोला",
  exploreCapabilities: "वैशिष्ट्ये एक्सप्लोर करा",
  overviewBadge: "आमचे सोल्यूशन का निवडावे",
  overviewTitle: "मोठ्या प्रमाणासाठी तयार केलेला युनिफाइड ग्राहक संवाद",
  featuresBadge: "प्लॅटफॉर्म वैशिष्ट्ये",
  featuresTitle: "संपूर्ण ग्राहक सहभाग क्षमता",
  ctaBadge: "तुमचे ऑम्नीचॅनेल नेटवर्क तयार करा",
  ctaTitle: "आधुनिक ऑम्नीचॅनेल सोल्यूशन्ससह व्यवसाय वाढवा",
  contactUs: "संपर्क साधा",
};

const sw: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "HUDUMA YA OMNICHANNEL",
  heroTitle: "Ungana na Wateja Wako Kwenye WhatsApp Bila Shida",
  heroDesc: "Wasiliana na wateja kupitia ujumbe salama na unaoweza kupanuka wa WhatsApp kwa biashara za kisasa.",
  talkToExpert: "Ongea na Mtaalamu",
  exploreCapabilities: "Gundua Uwezo",
  overviewBadge: "KWA NINI SULUHISHO LETU",
  overviewTitle: "Mawasiliano ya Wateja Yaliyounganishwa kwa Ukubwa wa Biashara",
  featuresBadge: "VIPENGELE VYA JUKWAA",
  featuresTitle: "Uwezo Kamili wa Kuingiliana na Wateja",
  ctaBadge: "JENGA MTANDAO WAKO WA OMNICHANNEL",
  ctaTitle: "Kuza Biashara Yako kwa Suluhisho za Kisasa za Omnichannel",
  contactUs: "Wasiliana Nasi",
};

const sv: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL-TJÄNST",
  heroTitle: "Koppla Upp Er med Kunder på WhatsApp Utan Ansträngning",
  heroDesc: "Engagera kunder med säkra, skalbara WhatsApp-meddelanden anpassade för moderna företag.",
  talkToExpert: "Tala med en expert",
  exploreCapabilities: "Utforska funktioner",
  overviewBadge: "VARFÖR VÅR LÖSNING",
  overviewTitle: "Enhetlig Kundkommunikation Byggd för Skalbarhet",
  featuresBadge: "PLATTFORMSFUNKTIONER",
  featuresTitle: "Fullständiga Funktioner för Kundengagemang",
  ctaBadge: "BYGG ERT OMNICHANNEL-NÄTVERK",
  ctaTitle: "Väx med Moderna Omnichannel-lösningar",
  contactUs: "Kontakta Oss",
};

const el: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "ΥΠΗΡΕΣΙΑ OMNICHANNEL",
  heroTitle: "Συνδεθείτε με τους Πελάτες σας στο WhatsApp με Ευκολία",
  heroDesc: "Προσεγγίστε πελάτες με ασφαλή και κλιμακούμενα μηνύματα WhatsApp για σύγχρονες επιχειρήσεις.",
  talkToExpert: "Μιλήστε με έναν ειδικό",
  exploreCapabilities: "Εξερευνήστε δυνατότητες",
  overviewBadge: "ΓΙΑΤΙ Η ΔΙΚΗ ΜΑΣ ΛΥΣΗ",
  overviewTitle: "Ενοποιημένη Επικοινωνία Πελατών Σχεδιασμένη για Ανάπτυξη",
  featuresBadge: "ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ ΠΛΑΤΦΟΡΜΑΣ",
  featuresTitle: "Πλήρεις Δυνατότητες Αλληλεπίδρασης με Πελάτες",
  ctaBadge: "ΧΤΙΣΤΕ ΤΟ OMNICHANNEL ΔΙΚΤΥΟ ΣΑΣ",
  ctaTitle: "Αναπτυχθείτε με Σύγχρονες Λύσεις Omnichannel",
  contactUs: "Επικοινωνήστε Μαζί Μας",
};

const cs: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL SLUŽBA",
  heroTitle: "Spojte se se Zákazníky na WhatsApp Snadno a Rychle",
  heroDesc: "Zapojte zákazníky prostřednictvím bezpečných a škálovatelných zpráv WhatsApp pro moderní podniky.",
  talkToExpert: "Konzultace s expertem",
  exploreCapabilities: "Prozkoumat možnosti",
  overviewBadge: "PROČ NAŠE ŘEŠENÍ",
  overviewTitle: "Sjednocená Komunikace se Zákazníky Postavená pro Růst",
  featuresBadge: "FUNKCE PLATFORMY",
  featuresTitle: "Kompletní Schopnosti Zákaznického Zapojení",
  ctaBadge: "VYBUDUJTE SVOU OMNICHANNEL SÍŤ",
  ctaTitle: "Rostěte s Moderními Omnichannel Řešeními",
  contactUs: "Kontaktujte Nás",
};

const ro: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "SERVICIU OMNICHANNEL",
  heroTitle: "Conectați-vă cu Clienții pe WhatsApp cu Ușurință",
  heroDesc: "Interacționați cu clienții prin mesaje WhatsApp sigure și scalabile create pentru companiile moderne.",
  talkToExpert: "Vorbiți cu un expert",
  exploreCapabilities: "Explorați funcționalitățile",
  overviewBadge: "DE CE SOLUȚIA NOASTRĂ",
  overviewTitle: "Comunicare Unificată cu Clienții Construită pentru Scalare",
  featuresBadge: "CARACTERISTICI PLATFORMĂ",
  featuresTitle: "Capacități Complete de Interacțiune cu Clienții",
  ctaBadge: "CONSTRUIȚI REȚEAUA OMNICHANNEL",
  ctaTitle: "Creșteți cu Soluții Omnichannel Moderne",
  contactUs: "Contactați-ne",
};

const hu: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL SZOLGÁLTATÁS",
  heroTitle: "Lépjen Kapcsolatba Ügyfeleivel a WhatsAppon Könnyedén",
  heroDesc: "Érje el ügyfeleit biztonságos és skálázható WhatsApp üzenetekkel modern vállalkozások számára.",
  talkToExpert: "Beszéljen szakértővel",
  exploreCapabilities: "Funkciók megismerése",
  overviewBadge: "MIÉRT A MI MEGOLDÁSUNK",
  overviewTitle: "Egységes Ügyfélkommunikáció a Skálázhatóságért",
  featuresBadge: "PLATFORM JELLEMZŐI",
  featuresTitle: "Teljes Körű Ügyfélelköteleződési Képességek",
  ctaBadge: "ÉPÍTSE KI OMNICHANNEL HÁLÓZATÁT",
  ctaTitle: "Növekedjen Modern Omnichannel Megoldásokkal",
  contactUs: "Kapcsolatfelvétel",
};

const uk: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "ОМНІКАНАЛЬНИЙ СЕРВІС",
  heroTitle: "Легко Спілкуйтеся з Клієнтами у WhatsApp",
  heroDesc: "Залучайте клієнтів за допомогою безпечних і масштабованих повідомлень WhatsApp для сучасного бізнесу.",
  talkToExpert: "Консультація з експертом",
  exploreCapabilities: "Дізнатися про можливості",
  overviewBadge: "ЧОМУ НАШЕ РІШЕННЯ",
  overviewTitle: "Єдина Комунікація з Клієнтами для Масштабування",
  featuresBadge: "ФУНКЦІЇ ПЛАТФОРМИ",
  featuresTitle: "Повні Можливості для Залучення Клієнтів",
  ctaBadge: "СТВОРІТЬ СВОЮ ОМНІКАНАЛЬНУ МЕРЕЖУ",
  ctaTitle: "Зростайте з Сучасними Омніканальними Рішеннями",
  contactUs: "Зв'яжіться з нами",
};

const he: WhatsappBusinessTranslation = {
  ...en,
  heroBadge: "שירות אומניצ'אנל",
  heroTitle: "התחברו ללקוחות שלכם ב-WhatsApp בקלות",
  heroDesc: "צרו מעורבות עם לקוחות באמצעות הודעות WhatsApp מאובטחות ומודולריות המיועדות לעסקים מודרניים.",
  talkToExpert: "דבר עם מומחה",
  exploreCapabilities: "גלה את היכולות",
  overviewBadge: "היתרון התחרותי שלנו",
  overviewTitle: "תקשורת לקוחות אחודה המיועדת להתרחבות עסקית",
  featuresBadge: "תכונות הפלטפורמה",
  featuresTitle: "יכולות מלאות לחיבור ומעורבות לקוחות",
  ctaBadge: "בואו נבנה את רשת האומניצ'אנל שלכם",
  ctaTitle: "צמחו עם פתרונות אומניצ'אנל מודרניים",
  contactUs: "צור קשר",
};

const translations: Record<string, WhatsappBusinessTranslation> = {
  en,
  es,
  zh,
  hi,
  ar,
  fr,
  de,
  ja,
  pt,
  ru,
  it,
  ko,
  nl,
  tr,
  id,
  vi,
  pl,
  th,
  tl,
  bn,
  ta,
  te,
  mr,
  sw,
  sv,
  el,
  cs,
  ro,
  hu,
  uk,
  he
};

export const getWhatsappBusinessTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): WhatsappBusinessTranslation => {
  const base = translations[language] || translations["en"];
  return {
    ...base,
  };
};

export default getWhatsappBusinessTranslations;

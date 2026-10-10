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

const translations: Record<string, WhatsappBusinessTranslation> = {
  en,
  es,
  ja,
  te,
  ta,
  ar,
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

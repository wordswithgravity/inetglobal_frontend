export interface NavTranslations {
  products: string;
  solutions: string;
  aboutUs: string;
  region: string;
  language: string;
  searchCountries: string;
  searchLanguages: string;
  noCountries: string;
  noLanguages: string;
  getStarted: string;
  contactUs: string;
  learnMore: string;
  exploreSolutions: string;
  subscribe: string;
  newsletterTitle: string;
  newsletterPlaceholder: string;
  quickLinks: string;
  productsCol: string;
  solutionsCol: string;
  companyCol: string;
  contactCol: string;
  privacyPolicy: string;
  termsOfService: string;
  securityCompliance: string;
  categories: {
    voice: { name: string; tagline: string };
    messaging: { name: string; tagline: string };
    omnichannel: { name: string; tagline: string };
  };
  productItems: Record<string, { title: string; description: string }>;
  solutionItems: Array<{ title: string; description: string }>;
}

export interface ContactTranslations {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  getStarted: string;
  formBadge: string;
  formTitle: string;
  formSubtitle: string;
  fullName: string;
  fullNamePlaceholder: string;
  businessEmail: string;
  businessEmailPlaceholder: string;
  companyName: string;
  companyNamePlaceholder: string;
  phoneNumber: string;
  phoneNumberPlaceholder: string;
  interestQuestion: string;
  interests: {
    voice: string;
    messaging: string;
    omnichannel: string;
  };
  messageLabel: string;
  messagePlaceholder: string;
  sendMessage: string;
  messageSent: string;
  securityNote: string;
  ourLocation: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  socialLabel: string;
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const navTranslations: Record<string, NavTranslations> = {
  // English
  en: {
    products: "Products",
    solutions: "Solutions",
    aboutUs: "About Us",
    region: "Region",
    language: "Language",
    searchCountries: "Search countries...",
    searchLanguages: "Search languages...",
    noCountries: "No countries found",
    noLanguages: "No languages found",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    learnMore: "Learn more",
    exploreSolutions: "Explore Solutions",
    subscribe: "Subscribe",
    newsletterTitle: "Get product updates & industry insights",
    newsletterPlaceholder: "Enter your email address",
    quickLinks: "Quick Links",
    productsCol: "Products",
    solutionsCol: "Solutions",
    companyCol: "Company",
    contactCol: "Contact",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    securityCompliance: "Security & Compliance",
    categories: {
      voice: {
        name: "Voice",
        tagline: "Global voice connectivity built around your business.",
      },
      messaging: {
        name: "Messaging",
        tagline: "Messaging solutions designed for reliable customer communication.",
      },
      omnichannel: {
        name: "Omnichannel",
        tagline: "Connect with customers across the channels they already use.",
      },
    },
    productItems: {
      "wholesale-voice": { title: "Wholesale Voice", description: "Reliable global voice connectivity" },
      "ai-voice": { title: "Ai Voice", description: "Intelligent automated voice solutions" },
      "virtual-numbers": { title: "Virtual Numbers (DID)", description: "Local numbers, global presence" },
      "wholesale-sms": { title: "Wholesale SMS", description: "Global SMS delivery solutions" },
      "rcs": { title: "RCS Business Messaging", description: "Rich interactive business messaging" },
      "otp-sms": { title: "OTP SMS", description: "Secure verification message delivery" },
      "whatsapp": { title: "WhatsApp Business", description: "Connect through WhatsApp conversations" },
      "voice-calls": { title: "Voice Calls", description: "Business voice communication" },
      "telegram": { title: "Telegram", description: "Engage customers through Telegram" },
      "instagram": { title: "Instagram", description: "Connect through Instagram messaging" },
      "facebook": { title: "Facebook", description: "Connect through Facebook messaging" },
      "tiktok": { title: "TikTok", description: "Engage customers through TikTok" },
      "live-chat": { title: "Live Chat Plugin", description: "Real-time website customer conversations" },
      "rcs-messaging": { title: "RCS", description: "Rich conversational messaging" },
      "email": { title: "Email", description: "Integrated business email communication" },
    },
    solutionItems: [
      { title: "Advance SMS Portal", description: "Reliable global messaging connectivity" },
      { title: "Complete Dialer Solution", description: "Enterprise call traffic & predictive dialing" },
      { title: "International Number (DID)", description: "Virtual numbers across 100+ countries" },
    ],
  },

  // Spanish (Español)
  es: {
    products: "Productos",
    solutions: "Soluciones",
    aboutUs: "Sobre Nosotros",
    region: "Región",
    language: "Idioma",
    searchCountries: "Buscar países...",
    searchLanguages: "Buscar idiomas...",
    noCountries: "No se encontraron países",
    noLanguages: "No se encontraron idiomas",
    getStarted: "Comenzar",
    contactUs: "Contáctenos",
    learnMore: "Saber más",
    exploreSolutions: "Explorar soluciones",
    subscribe: "Suscribirse",
    newsletterTitle: "Reciba actualizaciones de productos y novedades del sector",
    newsletterPlaceholder: "Ingrese su correo electrónico",
    quickLinks: "Enlaces Rápidos",
    productsCol: "Productos",
    solutionsCol: "Soluciones",
    companyCol: "Empresa",
    contactCol: "Contacto",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    securityCompliance: "Seguridad y Cumplimiento",
    categories: {
      voice: {
        name: "Voz",
        tagline: "Conectividad de voz global diseñada para su negocio.",
      },
      messaging: {
        name: "Mensajería",
        tagline: "Soluciones de mensajería para una comunicación fiable.",
      },
      omnichannel: {
        name: "Omnicanal",
        tagline: "Conéctese con clientes en los canales que ya utilizan.",
      },
    },
    productItems: {
      "wholesale-voice": { title: "Voz Mayorista", description: "Conectividad de voz global confiable" },
      "ai-voice": { title: "Voz IA", description: "Soluciones de voz automatizadas inteligentes" },
      "virtual-numbers": { title: "Números Virtuales (DID)", description: "Números locales, presencia global" },
      "wholesale-sms": { title: "SMS Mayorista", description: "Soluciones globales de entrega de SMS" },
      "rcs": { title: "Mensajería Empresarial RCS", description: "Mensajería interactiva enriquecida" },
      "otp-sms": { title: "SMS OTP", description: "Entrega segura de códigos de verificación" },
      "whatsapp": { title: "WhatsApp Business", description: "Conéctese a través de WhatsApp" },
      "voice-calls": { title: "Llamadas de Voz", description: "Comunicación de voz empresarial" },
      "telegram": { title: "Telegram", description: "Interactúe con clientes en Telegram" },
      "instagram": { title: "Instagram", description: "Mensajería directa en Instagram" },
      "facebook": { title: "Facebook", description: "Atención al cliente en Facebook" },
      "tiktok": { title: "TikTok", description: "Interacción con clientes en TikTok" },
      "live-chat": { title: "Chat en Vivo", description: "Conversaciones en tiempo real en la web" },
      "rcs-messaging": { title: "RCS", description: "Mensajería conversacional enriquecida" },
      "email": { title: "Correo Electrónico", description: "Comunicación empresarial por email" },
    },
    solutionItems: [
      { title: "Portal Avanzado de SMS", description: "Conectividad de mensajería global confiable" },
      { title: "Solución de Marcador Completo", description: "Tráfico de llamadas empresariales y marcación" },
      { title: "Número Internacional (DID)", description: "Números virtuales en más de 100 países" },
    ],
  },

  // Chinese (中文 简体)
  zh: {
    products: "产品中心",
    solutions: "解决方案",
    aboutUs: "关于我们",
    region: "地区",
    language: "语言",
    searchCountries: "搜索国家/地区...",
    searchLanguages: "搜索语言...",
    noCountries: "未找到国家",
    noLanguages: "未找到语言",
    getStarted: "立即体验",
    contactUs: "联系我们",
    learnMore: "了解更多",
    exploreSolutions: "探索解决方案",
    subscribe: "订阅资讯",
    newsletterTitle: "获取最新产品动态与行业洞察",
    newsletterPlaceholder: "输入您的工作邮箱",
    quickLinks: "快速链接",
    productsCol: "产品中心",
    solutionsCol: "解决方案",
    companyCol: "公司信息",
    contactCol: "联系我们",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    securityCompliance: "安全与合规",
    categories: {
      voice: {
        name: "语音服务",
        tagline: "为企业打造的高品质全球语音连接与直连路由。",
      },
      messaging: {
        name: "消息推送",
        tagline: "专为高效客户沟通打造的企业级全球消息服务。",
      },
      omnichannel: {
        name: "全渠道整合",
        tagline: "覆盖主流即时通讯应用，随时随地触达全球客户。",
      },
    },
    productItems: {
      "wholesale-voice": { title: "国际批发语音", description: "全球优质低延迟语音互联" },
      "ai-voice": { title: "AI 智能语音", description: "自动化智能呼叫与人机交互" },
      "virtual-numbers": { title: "全球虚拟号码 (DID)", description: "本地号码接入，全球品牌拓展" },
      "wholesale-sms": { title: "国际商业短信", description: "全球高到达率短信发送通道" },
      "rcs": { title: "RCS 富媒体消息", description: "富媒体交互式企业消息" },
      "otp-sms": { title: "OTP 验证码短信", description: "秒级到达，极速安全验证" },
      "whatsapp": { title: "WhatsApp 商业 API", description: "全球主流即时沟通与会话营销" },
      "voice-calls": { title: "商务语音通话", description: "高并发企业语音通信" },
      "telegram": { title: "Telegram 客户沟通", description: "全方位安全机器人服务" },
      "instagram": { title: "Instagram 消息", description: "社媒私信互动与客户转化" },
      "facebook": { title: "Facebook 消息", description: "多渠道客服与品牌触达" },
      "tiktok": { title: "TikTok 互动营销", description: "短视频平台私信与获客" },
      "live-chat": { title: "网站在线客服插件", description: "官网实时在线访客沟通" },
      "rcs-messaging": { title: "5G / RCS 消息", description: "新一代富媒体互动短信" },
      "email": { title: "企业邮件网关", description: "高送达率交易型与营销邮件" },
    },
    solutionItems: [
      { title: "高级 SMS 短信平台", description: "全球可靠的短信分发与分析平台" },
      { title: "全功能呼叫中心外呼系统", description: "高并发智能预测式外呼解决方案" },
      { title: "国际虚拟号码 (DID)", description: "覆盖全球 100+ 国家和地区的本土号码" },
    ],
  },

  // Hindi (हिन्दी)
  hi: {
    products: "उत्पाद",
    solutions: "समाधान",
    aboutUs: "हमारे बारे में",
    region: "क्षेत्र",
    language: "भाषा",
    searchCountries: "देश खोजें...",
    searchLanguages: "भाषा खोजें...",
    noCountries: "कोई देश नहीं मिला",
    noLanguages: "कोई भाषा नहीं मिली",
    getStarted: "शुरू करें",
    contactUs: "संपर्क करें",
    learnMore: "और जानें",
    exploreSolutions: "समाधान देखें",
    subscribe: "सदस्यता लें",
    newsletterTitle: "उत्पाद अपडेट और उद्योग की जानकारी प्राप्त करें",
    newsletterPlaceholder: "अपना ईमेल दर्ज करें",
    quickLinks: "त्वरित लिंक",
    productsCol: "उत्पाद",
    solutionsCol: "समाधान",
    companyCol: "कंपनी",
    contactCol: "संपर्क",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    securityCompliance: "सुरक्षा और अनुपालन",
    categories: {
      voice: {
        name: "वॉइस सेवाएं",
        tagline: "आपके व्यवसाय के लिए निर्मित वैश्विक वॉइस कनेक्टिविटी।",
      },
      messaging: {
        name: "मैसेजिंग",
        tagline: "विश्वसनीय ग्राहक संचार के लिए मैसेजिंग समाधान।",
      },
      omnichannel: {
        name: "ओमनीचैनल",
        tagline: "उन चैनलों पर ग्राहकों से जुड़ें जिनका वे उपयोग करते हैं।",
      },
    },
    productItems: {
      "wholesale-voice": { title: "होलसेल वॉइस", description: "विश्वसनीय वैश्विक वॉइस कनेक्टिविटी" },
      "ai-voice": { title: "एआई वॉइस", description: "स्मार्ट स्वचालित वॉइस समाधान" },
      "virtual-numbers": { title: "वर्चुअल नंबर (DID)", description: "स्थानीय नंबर, वैश्विक उपस्थिति" },
      "wholesale-sms": { title: "होलसेल एसएमएस", description: "वैश्विक एसएमएस डिलीवरी समाधान" },
      "rcs": { title: "RCS बिजनेस मैसेजिंग", description: "इंटरैक्टिव रिच बिजनेस मैसेजिंग" },
      "otp-sms": { title: "ओटीपी एसएमएस", description: "सुरक्षित सत्यापन कोड डिलीवरी" },
      "whatsapp": { title: "व्हाट्सएप बिजनेस", description: "व्हाट्सएप चैट के माध्यम से जुड़ें" },
      "voice-calls": { title: "वॉइस कॉल्स", description: "व्यावसायिक वॉइस संचार" },
      "telegram": { title: "टेलीग्राम", description: "टेलीग्राम पर ग्राहकों को जोड़ें" },
      "instagram": { title: "इंस्टाग्राम", description: "इंस्टाग्राम मैसेजिंग कनेक्ट" },
      "facebook": { title: "फेसबुक", description: "फेसबुक मैसेंजर सपोर्ट" },
      "tiktok": { title: "टिकटॉक", description: "टिकटॉक ग्राहक सहभागिता" },
      "live-chat": { title: "लाइव चैट प्लगइन", description: "वेबसाइट पर रीयल-टाइम बातचीत" },
      "rcs-messaging": { title: "आरसीएस संदेश", description: "रिच संवादात्मक मैसेजिंग" },
      "email": { title: "ईमेल संचार", description: "एकीकृत व्यावसायिक ईमेल" },
    },
    solutionItems: [
      { title: "उन्नत एसएमएस पोर्टल", description: "विश्वसनीय वैश्विक मैसेजिंग कनेक्टिविटी" },
      { title: "कॉल डायलर समाधान", description: "उद्यम कॉल ट्रैफ़िक और प्रेडिक्टिव डायलिंग" },
      { title: "इंटरनेशनल वर्चुअल नंबर (DID)", description: "100+ देशों में स्थानीय वर्चुअल नंबर" },
    ],
  },
};

export const contactTranslations: Record<string, ContactTranslations> = {
  // English
  en: {
    heroBadge: "LET'S TALK",
    heroTitle: "Let’s Build the Right Communication Solution for Your Business",
    heroDesc:
      "Tell us what you need to connect with customers. Our communication experts will help you find the right voice, messaging, and omnichannel solutions for your business.",
    getStarted: "Get Started",
    formBadge: "CONTACT US",
    formTitle: "Tell Us About Your Communication Needs",
    formSubtitle:
      "Share your requirements and our communication experts will help you find the right solution.",
    fullName: "Full Name*",
    fullNamePlaceholder: "Enter first name",
    businessEmail: "Business Email*",
    businessEmailPlaceholder: "you@company.com",
    companyName: "Company Name*",
    companyNamePlaceholder: "Enter company name",
    phoneNumber: "Phone Number*",
    phoneNumberPlaceholder: "Enter your number",
    interestQuestion: "What are you interested in ?*",
    interests: {
      voice: "Voice",
      messaging: "Messaging",
      omnichannel: "Omnichannel",
    },
    messageLabel: "Message",
    messagePlaceholder: "Send us message",
    sendMessage: "Send Message",
    messageSent: "✓ Message Sent Successfully!",
    securityNote: "Your information is secure and will never be shared.",
    ourLocation: "Our Location",
    addressLabel: "Address:",
    phoneLabel: "Phone Number:",
    emailLabel: "Email:",
    socialLabel: "Our Social media",
    faqBadge: "YOUR QUESTION AND ANSWER",
    faqTitle: "Our Frequently Asked Question",
    faqSubtitle: "The practical details to consider before connecting your traffic.",
    faqs: [
      {
        question: "Who is wholesale SMS built for?",
        answer:
          "Carriers, SMS aggregators, CPaaS providers and messaging platforms that need connectivity for enterprise A2P traffic.",
      },
      {
        question: "Can we keep our existing messaging platform?",
        answer:
          "Yes. We can discuss an SMPP or API interconnect and agree the message formats, throughput requirements and delivery-receipt handling for your setup.",
      },
      {
        question: "How do coverage and sender requirements work?",
        answer:
          "Route availability, sender ID rules and registration processes vary by market. Share your destinations and use cases so our team can review the requirements.",
      },
      {
        question: "What should we share to get started?",
        answer:
          "Your target destinations, expected traffic profile, message types, sender needs and current integration. These help us shape a relevant routing and commercial proposal.",
      },
    ],
  },

  // Spanish
  es: {
    heroBadge: "HABLEMOS",
    heroTitle: "Construyamos la Solución de Comunicación Adecuada Para Su Negocio",
    heroDesc:
      "Cuéntenos qué necesita para conectarse con sus clientes. Nuestros expertos en telecomunicaciones le ayudarán a encontrar las mejores soluciones de voz, mensajería y omnicanal.",
    getStarted: "Comenzar",
    formBadge: "CONTÁCTENOS",
    formTitle: "Cuéntenos Sobre Sus Necesidades de Comunicación",
    formSubtitle:
      "Comparta sus requerimientos y nuestros expertos le ayudarán a encontrar la solución perfecta.",
    fullName: "Nombre Completo*",
    fullNamePlaceholder: "Ingrese su nombre",
    businessEmail: "Correo Corporativo*",
    businessEmailPlaceholder: "su_nombre@empresa.com",
    companyName: "Nombre de la Empresa*",
    companyNamePlaceholder: "Ingrese el nombre de la empresa",
    phoneNumber: "Número Telefónico*",
    phoneNumberPlaceholder: "Ingrese su número",
    interestQuestion: "¿En qué servicio está interesado?*",
    interests: {
      voice: "Voz",
      messaging: "Mensajería",
      omnichannel: "Omnicanal",
    },
    messageLabel: "Mensaje",
    messagePlaceholder: "Escriba su mensaje aquí",
    sendMessage: "Enviar Mensaje",
    messageSent: "✓ ¡Mensaje enviado con éxito!",
    securityNote: "Su información está segura y nunca será compartida.",
    ourLocation: "Nuestra Ubicación",
    addressLabel: "Dirección:",
    phoneLabel: "Teléfono:",
    emailLabel: "Correo Electrónico:",
    socialLabel: "Redes Sociales",
    faqBadge: "PREGUNTAS Y RESPUESTAS",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Detalles prácticos a considerar antes de conectar su tráfico de telecomunicaciones.",
    faqs: [
      {
        question: "¿Para quién está diseñado el SMS mayorista?",
        answer:
          "Operadores, agregadores de SMS, proveedores de CPaaS y plataformas de mensajería que necesitan conectividad masiva A2P.",
      },
      {
        question: "¿Podemos mantener nuestra plataforma de mensajería actual?",
        answer:
          "Sí. Podemos habilitar una interconexión SMPP o API REST manteniendo sus formatos de mensaje y reportes de entrega.",
      },
      {
        question: "¿Cómo funcionan la cobertura y los requisitos de remitente?",
        answer:
          "La disponibilidad de rutas y las normativas de ID de remitente varían según el país. Comparta sus destinos para evaluar los requisitos.",
      },
      {
        question: "¿Qué información debemos proporcionar para comenzar?",
        answer:
          "Destinos previstos, volumen estimado de tráfico, tipos de mensajes y tipo de integración requerida.",
      },
    ],
  },

  // Chinese
  zh: {
    heroBadge: "联系专家",
    heroTitle: "让我们为您的企业构建最合适的通信连接方案",
    heroDesc:
      "告诉我们您触达全球客户的需求，我们的通信技术专家将帮助您选择最优质的国际语音、商业短信与全渠道集成方案。",
    getStarted: "立即咨询",
    formBadge: "联系我们",
    formTitle: "告诉我们您的业务通信需求",
    formSubtitle: "提交您的具体需求，我们的企业级通信顾问将为您提供专属解决方案与通道报价。",
    fullName: "您的姓名*",
    fullNamePlaceholder: "输入您的姓名",
    businessEmail: "企业工作邮箱*",
    businessEmailPlaceholder: "name@company.com",
    companyName: "公司名称*",
    companyNamePlaceholder: "输入您的公司名称",
    phoneNumber: "联系电话*",
    phoneNumberPlaceholder: "输入您的手机号码",
    interestQuestion: "您感兴趣的通信业务是？*",
    interests: {
      voice: "国际语音 (Voice)",
      messaging: "商业短信 (Messaging)",
      omnichannel: "全渠道整合 (Omnichannel)",
    },
    messageLabel: "详细需求描述",
    messagePlaceholder: "请简要描述您的业务场景、目标国家及预计发送量...",
    sendMessage: "立即提交需求",
    messageSent: "✓ 需求提交成功，我们的顾问将尽快联系您！",
    securityNote: "您的企业信息受严格数据加密保护，绝不对外泄露。",
    ourLocation: "全球总部位置",
    addressLabel: "办公地址：",
    phoneLabel: "联系电话：",
    emailLabel: "企业邮箱：",
    socialLabel: "官方社交媒体",
    faqBadge: "常见疑问解答",
    faqTitle: "客户常见问题与解答",
    faqSubtitle: "在接入与测试国际通信专线前，您可能关心的关键业务细节。",
    faqs: [
      {
        question: "国际批发 SMS 短信专线适合哪些企业？",
        answer: "电信运营商、短信聚合商、CPaaS 平台以及需要稳定高到达率 A2P 验证码与通知推送的全球出海与本土企业。",
      },
      {
        question: "我们可以保留现有的系统平台直接对接吗？",
        answer: "完全可以。我们支持标准 SMPP 协议直连以及简洁高效的 HTTP REST API，轻松无缝接入您当前的业务系统。",
      },
      {
        question: "不同国家地区的通道覆盖与发件人签名如何管理？",
        answer: "各国的运营商监管规则与签名报备流程有所不同。告知我们您的目标国家，我们将全程协助完成签名白名单报备。",
      },
      {
        question: "开启测试与商用需要准备哪些信息？",
        answer: "请提供目标发送国家、预计月发送量、短信消息类型（验证码/动账/营销）以及偏好的接口协议（API/SMPP）。",
      },
    ],
  },

  // Hindi
  hi: {
    heroBadge: "बातचीत करें",
    heroTitle: "आइए आपके व्यवसाय के लिए सही संचार समाधान का निर्माण करें",
    heroDesc:
      "ग्राहकों से जुड़ने के लिए अपनी जरूरतें हमें बताएं। हमारे विशेषज्ञ आपके व्यवसाय के लिए सर्वश्रेष्ठ वॉइस, एसएमएस और ओमनीचैनल समाधान चुनने में मदद करेंगे।",
    getStarted: "शुरू करें",
    formBadge: "संपर्क करें",
    formTitle: "अपनी संचार आवश्यकताओं के बारे में बताएं",
    formSubtitle:
      "अपनी आवश्यकताएं साझा करें और हमारे विशेषज्ञ सही समाधान ढूंढने में आपकी सहायता करेंगे।",
    fullName: "पूरा नाम*",
    fullNamePlaceholder: "अपना नाम दर्ज करें",
    businessEmail: "व्यावसायिक ईमेल*",
    businessEmailPlaceholder: "you@company.com",
    companyName: "कंपनी का नाम*",
    companyNamePlaceholder: "कंपनी का नाम दर्ज करें",
    phoneNumber: "फ़ोन नंबर*",
    phoneNumberPlaceholder: "अपना नंबर दर्ज करें",
    interestQuestion: "आपकी किस सेवा में रुचि है ?*",
    interests: {
      voice: "वॉइस सेवाएं",
      messaging: "मैसेजिंग / एसएमएस",
      omnichannel: "ओमनीचैनल",
    },
    messageLabel: "संदेश",
    messagePlaceholder: "हमें अपना संदेश भेजें...",
    sendMessage: "संदेश भेजें",
    messageSent: "✓ संदेश सफलतापूर्वक भेजा गया!",
    securityNote: "आपकी जानकारी पूरी तरह सुरक्षित है और कभी साझा नहीं की जाएगी।",
    ourLocation: "हमारा स्थान",
    addressLabel: "पता:",
    phoneLabel: "फ़ोन नंबर:",
    emailLabel: "ईमेल:",
    socialLabel: "सोशल मीडिया",
    faqBadge: "प्रश्न और उत्तर",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSubtitle: "अपना ट्रैफ़िक कनेक्ट करने से पहले ध्यान में रखने योग्य व्यावहारिक विवरण।",
    faqs: [
      {
        question: "होलसेल एसएमएस किसके लिए बनाया गया है?",
        answer:
          "टेलीकॉम ऑपरेटर्स, एसएमएस एग्रीगेटर्स, सीपीएएस प्रदाताओं और उद्यमों के लिए जिन्हें उच्च मात्रा वाले ए2पी एसएमएस की आवश्यकता होती है।",
      },
      {
        question: "क्या हम अपने मौजूदा प्लेटफॉर्म का उपयोग जारी रख सकते हैं?",
        answer:
          "हाँ। हम एसएमपीपी या रेस्ट एपीआई के माध्यम से आपके मौजूदा प्लेटफॉर्म के साथ सीधा कनेक्शन सक्षम कर सकते हैं।",
      },
      {
        question: "कवरेज और सेंडर आईडी आवश्यकताएं कैसे काम करती हैं?",
        answer:
          "प्रत्येक देश में नियम और सेंडर आईडी पंजीकरण अलग होते हैं। अपने गंतव्य देश साझा करें ताकि हम आवश्यकताओं की समीक्षा कर सकें।",
      },
      {
        question: "शुरू करने के लिए हमें क्या साझा करना चाहिए?",
        answer:
          "आपके लक्षित देश, अपेक्षित ट्रैफ़िक वॉल्यूम, संदेश प्रकार और वर्तमान एकीकरण प्राथमिकताएं।",
      },
    ],
  },
};

export const getNavTranslations = (lang: string): NavTranslations => {
  return navTranslations[lang] || navTranslations["en"];
};

export const getContactTranslations = (lang: string): ContactTranslations => {
  return contactTranslations[lang] || contactTranslations["en"];
};

export { getVoiceTranslations } from "./voiceTranslations";
export type { VoiceTranslations } from "./voiceTranslations";

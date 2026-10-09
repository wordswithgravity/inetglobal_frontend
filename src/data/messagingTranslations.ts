export interface MessagingTranslations {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  getStarted: string;
  contactUs: string;
  coreServiceBadge: string;
  coreServiceTitle: string;
  coreServiceSubtitle: string;
  services: {
    wholesaleSms: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      learnMore: string;
    };
    rcsMessaging: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      learnMore: string;
    };
    otpSms: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      learnMore: string;
    };
  };
  whyChooseBadge: string;
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  whyCards: {
    secure: { title: string; description: string };
    cloud: { title: string; description: string };
    api: { title: string; description: string };
    connectivity: { title: string; description: string };
    automated: { title: string; description: string };
  };
  featuresBadge: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: Array<{
    title: string;
    description: string;
    subtext: string;
  }>;
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  floatingBadges: {
    wholesale: { title: string; desc: string };
    rcs: { title: string; desc: string };
    otp: { title: string; desc: string };
  };
  chatScreen: {
    contactName: string;
    status: string;
    msg1: string;
    time1: string;
    msg2: string;
    time2: string;
  };
}

export const messagingTranslations: Record<string, MessagingTranslations> = {
  // English
  en: {
    heroBadge: "MESSAGING SERVICE",
    heroTitle: "Connect Instantly with Reliable SMS Communication",
    heroDesc:
      "Business SMS Solutions provide one of the fastest and most effective ways to communicate with customers, employees, and partners.",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    coreServiceBadge: "OUR CORE SERVICE",
    coreServiceTitle: "SMS solutions built for every industry",
    coreServiceSubtitle:
      "Modular telecom infrastructure engineered for high-availability voice, messaging, and virtual numbers.",
    services: {
      wholesaleSms: {
        title: "Wholesale SMS",
        description:
          "High-capacity SMS termination with route options designed around delivery speed, coverage, and cost efficiency.",
        bullet1: "High delivery assurance",
        bullet2: "Flexible route options",
        bullet3: "Global coverage",
        learnMore: "Learn more",
      },
      rcsMessaging: {
        title: "RCS Business Messaging",
        description:
          "Deliver critical transactional SMS, OTPs, and rich business messaging directly to handsets worldwide with high delivery assurance.",
        bullet1: "Rich media & interactive cards",
        bullet2: "Verified sender branding",
        bullet3: "Actionable quick replies",
        learnMore: "Learn more",
      },
      otpSms: {
        title: "OTP SMS",
        description:
          "Ultra-fast time-critical verification codes and two-factor authentication SMS delivered in seconds globally.",
        bullet1: "Sub-second delivery speeds",
        bullet2: "Direct operator binds",
        bullet3: "High conversion rates",
        learnMore: "Learn more",
      },
    },
    whyChooseBadge: "WHY OUR INET SMS SOLUTION",
    whyChooseTitle: "Why Choose Our SMS Solutions",
    whyChooseSubtitle:
      "Built for clear connections, flexible routing, and reliable voice & messaging performance across global markets.",
    whyCards: {
      secure: {
        title: "Secure and Reliable Communication",
        description:
          "Our infrastructure is designed to support secure business messaging with high throughput and carrier-grade reliability.",
      },
      cloud: {
        title: "Cloud-Based Infrastructure",
        description:
          "Leverage scalable Cloud Messaging Solutions that eliminate hardware bottlenecks while providing maximum delivery rates.",
      },
      api: {
        title: "Voice & SMS API Integration",
        description:
          "As a trusted Communication API Provider, we help businesses integrate SMS and calling capabilities into websites, mobile apps, CRM systems, and customer platforms.",
      },
      connectivity: {
        title: "Global Carrier Connectivity",
        description:
          "Direct Tier-1 carrier interconnects across 190+ countries ensure uninterrupted, high-priority delivery anywhere in the world.",
      },
      automated: {
        title: "Automated Messaging Services",
        description:
          "Improve engagement through automated notifications, trigger-based campaigns, appointment reminders, and two-way conversations.",
      },
    },
    featuresBadge: "WHAT OUR SMS SERVICES PROVIDES",
    featuresTitle: "Everything You Need for Smarter SMS Communication",
    featuresSubtitle:
      "Reliable messaging infrastructure built to help businesses send, manage, and monitor SMS at scale—with speed, security, and global reach.",
    features: [
      {
        title: "Real-Time Analytics",
        description:
          "Track delivery, performance, and messaging activity instantly.",
        subtext: "Live analytics • 24/7 NOC",
      },
      {
        title: "Global SMS Messaging",
        description: "Reach customers worldwide with reliable SMS delivery.",
        subtext: "Quality • Cost • Compliance",
      },
      {
        title: "High-Speed Delivery",
        description: "Send messages quickly with optimized global routes.",
        subtext: "Live analytics • 24/7 NOC",
      },
      {
        title: "Secure Messaging",
        description:
          "Protect business communications with secure infrastructure.",
        subtext: "Quality • Cost • Compliance",
      },
      {
        title: "Powerful SMS API",
        description: "Connect your applications with flexible SMS APIs.",
        subtext: "Live analytics • 24/7 NOC",
      },
    ],
    ctaBadge: "LET'S BUILD YOUR MESSAGING NETWORK",
    ctaTitle: "Grow Your Business with Business SMS Solutions",
    ctaSubtitle:
      "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
    floatingBadges: {
      wholesale: {
        title: "Wholesale SMS",
        desc: "High volume messaging",
      },
      rcs: {
        title: "RCS Business Messaging",
        desc: "Rich interactive business messaging",
      },
      otp: {
        title: "OTP SMS",
        desc: "Special verification message delivery",
      },
    },
    chatScreen: {
      contactName: "iNet Global Team",
      status: "Verified Sender",
      msg1: "Here is your verification code for the portal: 849201",
      time1: "10:24 AM",
      msg2: "Great! Thank you for the update.",
      time2: "10:25 AM",
    },
  },

  // Spanish
  es: {
    heroBadge: "SERVICIO DE MENSAJERÍA",
    heroTitle: "Conéctese al Instante con Comunicación SMS Confiable",
    heroDesc:
      "Las soluciones de SMS empresariales ofrecen una de las formas más rápidas y eficaces de comunicarse con clientes, empleados y socios.",
    getStarted: "Comenzar",
    contactUs: "Contáctenos",
    coreServiceBadge: "NUESTRO SERVICIO PRINCIPAL",
    coreServiceTitle: "Soluciones de SMS diseñadas para cada industria",
    coreServiceSubtitle:
      "Infraestructura de telecomunicaciones modular diseñada para voz de alta disponibilidad, mensajería y números virtuales.",
    services: {
      wholesaleSms: {
        title: "SMS Mayorista",
        description:
          "Terminación de SMS de alta capacidad con opciones de ruta diseñadas para velocidad de entrega, cobertura y costo.",
        bullet1: "Alta garantía de entrega",
        bullet2: "Opciones de ruta flexibles",
        bullet3: "Cobertura global",
        learnMore: "Saber más",
      },
      rcsMessaging: {
        title: "Mensajería Empresarial RCS",
        description:
          "Entregue SMS transaccionales, OTP y mensajería enriquecida con alta garantía de entrega a nivel mundial.",
        bullet1: "Multimedia enriquecida y tarjetas",
        bullet2: "Remitente verificado de marca",
        bullet3: "Respuestas rápidas interactivas",
        learnMore: "Saber más",
      },
      otpSms: {
        title: "SMS OTP",
        description:
          "Códigos de verificación ultra rápidos y autenticación de dos factores entregados en segundos globalmente.",
        bullet1: "Velocidad en menos de un segundo",
        bullet2: "Conexiones directas con operadores",
        bullet3: "Altas tasas de conversión",
        learnMore: "Saber más",
      },
    },
    whyChooseBadge: "POR QUÉ NUESTRA SOLUCIÓN SMS INET",
    whyChooseTitle: "Por Qué Elegir Nuestras Soluciones SMS",
    whyChooseSubtitle:
      "Diseñado para conexiones claras, enrutamiento flexible y rendimiento confiable en los mercados globales.",
    whyCards: {
      secure: {
        title: "Comunicación Segura y Confiable",
        description:
          "Nuestra infraestructura admite mensajería empresarial segura con alto rendimiento y confiabilidad de nivel de operador.",
      },
      cloud: {
        title: "Infraestructura Basada en la Nube",
        description:
          "Aproveche soluciones de mensajería en la nube escalables que eliminan cuellos de botella.",
      },
      api: {
        title: "Integración de API de Voz y SMS",
        description:
          "Como proveedor confiable de API, ayudamos a integrar SMS y llamadas en sitios web, aplicaciones y CRM.",
      },
      connectivity: {
        title: "Conectividad Global con Operadores",
        description:
          "Interconexiones directas Tier-1 en más de 190 países garantizan entrega prioritaria ininterrumpida.",
      },
      automated: {
        title: "Servicios de Mensajería Automatizados",
        description:
          "Mejore la interacción mediante notificaciones automáticas, campañas activadas y recordatorios de citas.",
      },
    },
    featuresBadge: "LO QUE OFRECEN NUESTROS SERVICIOS SMS",
    featuresTitle: "Todo lo que Necesita para una Comunicación SMS Inteligente",
    featuresSubtitle:
      "Infraestructura confiable para enviar, administrar y monitorear SMS a escala con velocidad y seguridad.",
    features: [
      {
        title: "Analítica en Tiempo Real",
        description:
          "Monitoree entregas, rendimiento y actividad de mensajería al instante.",
        subtext: "Analítica en vivo • 24/7 NOC",
      },
      {
        title: "Mensajería SMS Global",
        description:
          "Llegue a clientes en todo el mundo con entrega de SMS confiable.",
        subtext: "Calidad • Costo • Cumplimiento",
      },
      {
        title: "Entrega de Alta Velocidad",
        description:
          "Envíe mensajes rápidamente con rutas globales optimizadas.",
        subtext: "Analítica en vivo • 24/7 NOC",
      },
      {
        title: "Mensajería Segura",
        description:
          "Proteja las comunicaciones con infraestructura de nivel empresarial.",
        subtext: "Calidad • Costo • Cumplimiento",
      },
      {
        title: "API de SMS Potente",
        description: "Conecte sus aplicaciones con APIs de SMS flexibles.",
        subtext: "Analítica en vivo • 24/7 NOC",
      },
    ],
    ctaBadge: "CONSTRUYAMOS SU RED DE MENSAJERÍA",
    ctaTitle: "Haga Crecer su Negocio con Soluciones SMS Empresariales",
    ctaSubtitle:
      "Desde enrutamiento inteligente hasta AI Voice y números virtuales, iNet Global le ayuda a conectarse con clientes de forma clara y confiable.",
    floatingBadges: {
      wholesale: {
        title: "SMS Mayorista",
        desc: "Mensajería de alto volumen",
      },
      rcs: {
        title: "Mensajería RCS",
        desc: "Mensajería interactiva enriquecida",
      },
      otp: {
        title: "SMS OTP",
        desc: "Entrega especial de verificación",
      },
    },
    chatScreen: {
      contactName: "Equipo iNet Global",
      status: "Remitente Verificado",
      msg1: "Aquí está su código de verificación para el portal: 849201",
      time1: "10:24 AM",
      msg2: "¡Excelente! Gracias por la actualización.",
      time2: "10:25 AM",
    },
  },

  // French
  fr: {
    heroBadge: "SERVICE DE MESSAGERIE",
    heroTitle: "Connectez-vous Instantanément avec des SMS Fiables",
    heroDesc:
      "Les solutions de SMS professionnels offrent l'un des moyens les plus rapides et efficaces de communiquer avec vos clients et partenaires.",
    getStarted: "Commencer",
    contactUs: "Contactez-nous",
    coreServiceBadge: "NOTRE SERVICE PRINCIPAL",
    coreServiceTitle: "Solutions SMS conçues pour chaque secteur",
    coreServiceSubtitle:
      "Infrastructure télécom modulaire conçue pour la voix haute disponibilité, la messagerie et les numéros virtuels.",
    services: {
      wholesaleSms: {
        title: "SMS de Gros",
        description:
          "Terminaison SMS haute capacité avec des options de routage optimisées pour la rapidité, la couverture et le coût.",
        bullet1: "Assurance de livraison élevée",
        bullet2: "Options de routage flexibles",
        bullet3: "Couverture mondiale",
        learnMore: "En savoir plus",
      },
      rcsMessaging: {
        title: "Messagerie Professionnelle RCS",
        description:
          "Envoyez des SMS transactionnels, des OTP et des messages riches directement sur les mobiles avec une haute garantie.",
        bullet1: "Médias riches et cartes interactives",
        bullet2: "Marque d'expéditeur vérifiée",
        bullet3: "Réponses rapides actionnables",
        learnMore: "En savoir plus",
      },
      otpSms: {
        title: "SMS OTP",
        description:
          "Codes de vérification et authentification à deux facteurs ultra-rapides délivrés en quelques secondes dans le monde entier.",
        bullet1: "Livraison en moins d'une seconde",
        bullet2: "Connexions directes aux opérateurs",
        bullet3: "Taux de conversion élevés",
        learnMore: "En savoir plus",
      },
    },
    whyChooseBadge: "POURQUOI NOTRE SOLUTION SMS INET",
    whyChooseTitle: "Pourquoi Choisir Nos Solutions SMS",
    whyChooseSubtitle:
      "Conçu pour des connexions claires, un routage flexible et des performances fiables sur les marchés mondiaux.",
    whyCards: {
      secure: {
        title: "Communication Sécurisée et Fiable",
        description:
          "Notre infrastructure prend en charge les communications professionnelles sécurisées avec un débit élevé.",
      },
      cloud: {
        title: "Infrastructure Basée sur le Cloud",
        description:
          "Profitez de solutions de messagerie cloud évolutives éliminant les goulets d'étranglement matériels.",
      },
      api: {
        title: "Intégration d'API Vocale et SMS",
        description:
          "En tant que fournisseur d'API de confiance, nous aidons à intégrer les SMS et les appels dans vos applications et CRM.",
      },
      connectivity: {
        title: "Connectivité Opérateur Mondiale",
        description:
          "Des interconnexions directes Tier-1 dans plus de 190 pays garantissent une livraison prioritaire ininterrompue.",
      },
      automated: {
        title: "Services de Messagerie Automatisés",
        description:
          "Améliorez l'engagement grâce aux notifications automatisées, aux campagnes déclenchées et aux rappels.",
      },
    },
    featuresBadge: "CE QUE NOS SERVICES SMS OFFRENT",
    featuresTitle: "Tout ce Dont Vous Avez Besoin pour des SMS Plus Intelligents",
    featuresSubtitle:
      "Infrastructure de messagerie fiable pour envoyer, gérer et surveiller les SMS à grande échelle.",
    features: [
      {
        title: "Analyses en Temps Réel",
        description:
          "Suivez les livraisons, les performances et l'activité instantanément.",
        subtext: "Analyses en direct • NOC 24/7",
      },
      {
        title: "Messagerie SMS Mondiale",
        description:
          "Touchez des clients partout dans le monde avec une distribution fiable.",
        subtext: "Qualité • Coût • Conformité",
      },
      {
        title: "Livraison Haute Vitesse",
        description:
          "Envoyez des messages rapidement grâce à des routes optimisées.",
        subtext: "Analyses en direct • NOC 24/7",
      },
      {
        title: "Messagerie Sécurisée",
        description:
          "Protégez vos échanges grâce à une infrastructure ultra-sécurisée.",
        subtext: "Qualité • Coût • Conformité",
      },
      {
        title: "API SMS Puissante",
        description:
          "Connectez vos applications facilement grâce à des API flexibles.",
        subtext: "Analyses en direct • NOC 24/7",
      },
    ],
    ctaBadge: "CONSTRUISONS VOTRE RÉSEAU DE MESSAGERIE",
    ctaTitle: "Développez Votre Entreprise Avec les Solutions SMS",
    ctaSubtitle:
      "Du routage intelligent des appels aux numéros virtuels et à l'IA vocale, iNet Global vous connecte à vos clients de façon optimale.",
    floatingBadges: {
      wholesale: {
        title: "SMS de Gros",
        desc: "Messagerie haut volume",
      },
      rcs: {
        title: "Messagerie RCS",
        desc: "Messagerie interactive riche",
      },
      otp: {
        title: "SMS OTP",
        desc: "Distribution de vérification",
      },
    },
    chatScreen: {
      contactName: "Équipe iNet Global",
      status: "Expéditeur Vérifié",
      msg1: "Voici votre code de vérification : 849201",
      time1: "10:24",
      msg2: "Parfait ! Merci pour la mise à jour.",
      time2: "10:25",
    },
  },

  // Chinese (Simplified)
  zh: {
    heroBadge: "短信消息服务",
    heroTitle: "以高可靠短信通信即时连接全球客户",
    heroDesc:
      "企业级商业短信解决方案，提供触达客户、员工和合作伙伴最高效快速的通信方式。",
    getStarted: "立即体验",
    contactUs: "联系我们",
    coreServiceBadge: "核心业务",
    coreServiceTitle: "专为各行各业打造的短信解决方案",
    coreServiceSubtitle:
      "模块化电信基础设施，专为高可用性语音、智能消息和虚拟号码设计。",
    services: {
      wholesaleSms: {
        title: "批发短信 (Wholesale SMS)",
        description:
          "大容量国际短信落地服务，兼顾发送速度、到达率与高性价比路由。",
        bullet1: "极高到达率保障",
        bullet2: "灵活多样的路由选择",
        bullet3: "覆盖全球190+国家",
        learnMore: "了解更多",
      },
      rcsMessaging: {
        title: "RCS 富媒体消息",
        description:
          "直接向全球终端发送图文互动、卡片式按钮与品牌认证的高转化富媒体消息。",
        bullet1: "高清多媒体与交互卡片",
        bullet2: "企业认证品牌标识",
        bullet3: "一键快速回复与操作",
        learnMore: "了解更多",
      },
      otpSms: {
        title: "OTP 验证码短信",
        description:
          "秒级极速送达的动态验证码与双重身份验证服务，大幅提升用户注册转化率。",
        bullet1: "毫秒级极速送达",
        bullet2: "直连全球一级运营商通道",
        bullet3: "超高转化与防刷保障",
        learnMore: "了解更多",
      },
    },
    whyChooseBadge: "为什么选择 INET 短信解决方案",
    whyChooseTitle: "为什么选择我们的短信解决方案",
    whyChooseSubtitle:
      "专为清晰通话、智能灵活路由及全球市场中稳定可靠的语音与消息性能而打造。",
    whyCards: {
      secure: {
        title: "安全可靠的企业级通信",
        description:
          "电信级高并发消息架构，保障企业海量通知与营销短信安全合规发送。",
      },
      cloud: {
        title: "云原生弹性基础设施",
        description:
          "弹性云端消息服务，摆脱硬件性能瓶颈，轻松应对峰值话务量与海量并发。",
      },
      api: {
        title: "便捷的 Voice & SMS API 快速集成",
        description:
          "作为值得信赖的通信 API 提供商，帮助企业快速将短信与语音能力接入各类平台。",
      },
      connectivity: {
        title: "全球一级运营商直连网络",
        description:
          "直连全球 190+ 国家和地区 Tier-1 运营商通道，确保全天候高优先级畅通无阻。",
      },
      automated: {
        title: "自动化智能消息服务",
        description:
          "通过自动化通知、事件触发营销、预约提醒及双向互动，全面升级客户体验。",
      },
    },
    featuresBadge: "我们的短信服务特性",
    featuresTitle: "助力企业实现更智能短信通信的全套能力",
    featuresSubtitle:
      "高可用消息基础设施，助您以极速、安全与全球覆盖力大规模发送与监控短信。",
    features: [
      {
        title: "实时数据分析",
        description: "即时追踪短信发送状态、到达率与各项业务指标。",
        subtext: "实时监控 • 24/7 网络运维",
      },
      {
        title: "全球短信覆盖",
        description: "以极高可靠性触达全球各地的真实终端用户。",
        subtext: "优质通道 • 成本优势 • 合规保障",
      },
      {
        title: "极速秒级送达",
        description: "依托智能路由算法，实现全球短信毫秒级分发。",
        subtext: "实时监控 • 24/7 网络运维",
      },
      {
        title: "金融级安全保障",
        description: "端到端加密与防篡改通道，保护企业商业数据安全。",
        subtext: "优质通道 • 成本优势 • 合规保障",
      },
      {
        title: "强大的开发者 API",
        description: "支持 RESTful API、SMPP 协议与多语言 SDK 极速接入。",
        subtext: "实时监控 • 24/7 网络运维",
      },
    ],
    ctaBadge: "开启构建您的短信网络",
    ctaTitle: "以企业级短信解决方案加速您的业务增长",
    ctaSubtitle:
      "从智能语音路由、国际短信落地到 AI 语音与虚拟号码，iNet Global 赋能企业与全球客户顺畅互联。",
    floatingBadges: {
      wholesale: {
        title: "批发短信 (Wholesale SMS)",
        desc: "海量高并发短信通道",
      },
      rcs: {
        title: "RCS 富媒体消息",
        desc: "交互式智能商业消息",
      },
      otp: {
        title: "OTP 验证码短信",
        desc: "高优先级安全认证通道",
      },
    },
    chatScreen: {
      contactName: "iNet Global 官方团队",
      status: "已认证官方企业",
      msg1: "您的企业控制台安全验证码为: 849201",
      time1: "10:24",
      msg2: "收到！感谢实时更新。",
      time2: "10:25",
    },
  },

  // Hindi
  hi: {
    heroBadge: "मैसेजिंग सेवा",
    heroTitle: "विश्वसनीय एसएमएस संचार के साथ तुरंत जुड़ें",
    heroDesc:
      "व्यावसायिक एसएमएस समाधान ग्राहकों, कर्मचारियों और भागीदारों के साथ संवाद करने का सबसे तेज़ और प्रभावी तरीका प्रदान करते हैं।",
    getStarted: "शुरू करें",
    contactUs: "संपर्क करें",
    coreServiceBadge: "हमारी मुख्य सेवा",
    coreServiceTitle: "प्रत्येक उद्योग के लिए निर्मित एसएमएस समाधान",
    coreServiceSubtitle:
      "उच्च-उपलब्धता वॉइस, मैसेजिंग और वर्चुअल नंबरों के लिए इंजीनियर किया गया मॉड्यूलर टेलीकॉम इंफ्रास्ट्रक्चर।",
    services: {
      wholesaleSms: {
        title: "होलसेल एसएमएस",
        description:
          "वितरण गति, कवरेज और लागत दक्षता के आधार पर डिज़ाइन किए गए रूट विकल्पों के साथ उच्च-क्षमता एसएमएस टर्मिनेशन।",
        bullet1: "उच्च वितरण आश्वासन",
        bullet2: "लचीले रूट विकल्प",
        bullet3: "वैश्विक कवरेज",
        learnMore: "और जानें",
      },
      rcsMessaging: {
        title: "आरसीएस बिजनेस मैसेजिंग",
        description:
          "उच्च वितरण आश्वासन के साथ दुनिया भर में हैंडसेट पर महत्वपूर्ण ट्रांजेक्शनल एसएमएस, ओटीपी और रिच मैसेजिंग वितरित करें।",
        bullet1: "रिच मीडिया और इंटरैक्टिव कार्ड",
        bullet2: "सत्यापित प्रेषक ब्रांडिंग",
        bullet3: "त्वरित उत्तर विकल्प",
        learnMore: "और जानें",
      },
      otpSms: {
        title: "ओटीपी एसएमएस",
        description:
          "सेकंडों में वितरित किए जाने वाले अल्ट्रा-फास्ट सत्यापन कोड और टू-फैक्टर प्रमाणीकरण एसएमएस।",
        bullet1: "पलक झपकते डिलीवरी",
        bullet2: "प्रत्यक्ष ऑपरेटर कनेक्शन",
        bullet3: "उच्च रूपांतरण दर",
        learnMore: "और जानें",
      },
    },
    whyChooseBadge: "हमारा INET एसएमएस समाधान क्यों चुनें",
    whyChooseTitle: "हमारे एसएमएस समाधान क्यों चुनें",
    whyChooseSubtitle:
      "वैश्विक बाजारों में स्पष्ट कनेक्शन, लचीले रूटिंग और विश्वसनीय प्रदर्शन के लिए निर्मित।",
    whyCards: {
      secure: {
        title: "सुरक्षित और विश्वसनीय संचार",
        description:
          "हमारा इंफ्रास्ट्रक्चर उच्च थ्रूपुट और कैरियर-ग्रेड विश्वसनीयता के साथ सुरक्षित व्यावसायिक मैसेजिंग का समर्थन करता है।",
      },
      cloud: {
        title: "क्लाउड-आधारित इंफ्रास्ट्रक्चर",
        description:
          "स्केलेबल क्लाउड मैसेजिंग समाधानों का लाभ उठाएं जो हार्डवेयर बाधाओं को समाप्त करते हैं।",
      },
      api: {
        title: "वॉइस और एसएमएस एपीआई एकीकरण",
        description:
          "एक विश्वसनीय एपीआई प्रदाता के रूप में, हम वेबसाइटों, ऐप्स और सीआरएम में मैसेजिंग क्षमताओं को एकीकृत करने में मदद करते हैं।",
      },
      connectivity: {
        title: "ग्लोबल कैरियर कनेक्टिविटी",
        description:
          "190+ देशों में प्रत्यक्ष टियर-1 कैरियर इंटरकनेक्ट निर्बाध और उच्च प्राथमिकता वितरण सुनिश्चित करते हैं।",
      },
      automated: {
        title: "स्वचालित मैसेजिंग सेवाएं",
        description:
          "स्वचालित सूचनाओं, ट्रिगर-आधारित अभियानों और अपॉइंटमेंट रिमाइंडर के माध्यम से जुड़ाव में सुधार करें।",
      },
    },
    featuresBadge: "हमारी एसएमएस सेवाएं क्या प्रदान करती हैं",
    featuresTitle: "स्मार्ट एसएमएस संचार के लिए आपकी हर ज़रूरत",
    featuresSubtitle:
      "व्यवसायों को गति, सुरक्षा और वैश्विक पहुंच के साथ बड़े पैमाने पर एसएमएस भेजने, प्रबंधित करने और मॉनिटर करने के लिए निर्मित विश्वसनीय बुनियादी ढांचा।",
    features: [
      {
        title: "रीयल-टाइम एनालिटिक्स",
        description: "वितरण, प्रदर्शन और मैसेजिंग गतिविधि को तुरंत ट्रैक करें।",
        subtext: "लाइव एनालिटिक्स • 24/7 एनओसी",
      },
      {
        title: "ग्लोबल एसएमएस मैसेजिंग",
        description:
          "विश्वसनीय एसएमएस डिलीवरी के साथ दुनिया भर में ग्राहकों तक पहुंचें।",
        subtext: "गुणवत्ता • लागत • अनुपालन",
      },
      {
        title: "हाई-स्पीड डिलीवरी",
        description: "अनुकूलित वैश्विक मार्गों के साथ तेज़ी से संदेश भेजें।",
        subtext: "लाइव एनालिटिक्स • 24/7 एनओसी",
      },
      {
        title: "सुरक्षित मैसेजिंग",
        description:
          "सुरक्षित इंफ्रास्ट्रक्चर के साथ व्यावसायिक संचार की रक्षा करें।",
        subtext: "गुणवत्ता • लागत • अनुपालन",
      },
      {
        title: "शक्तिशाली एसएमएस एपीआई",
        description: "लचीले एसएमएस एपीआई के साथ अपने एप्लिकेशन कनेक्ट करें।",
        subtext: "लाइव एनालिटिक्स • 24/7 एनओसी",
      },
    ],
    ctaBadge: "आइए अपना मैसेजिंग नेटवर्क बनाएं",
    ctaTitle: "बिजनेस एसएमएस समाधानों के साथ अपना व्यवसाय बढ़ाएं",
    ctaSubtitle:
      "इंटेलिजेंट वॉइस रूटिंग से लेकर एआई वॉइस और वर्चुअल नंबरों तक, iNet Global स्केलेबल संचार समाधान प्रदान करता है।",
    floatingBadges: {
      wholesale: {
        title: "होलसेल एसएमएस",
        desc: "उच्च मात्रा मैसेजिंग",
      },
      rcs: {
        title: "आरसीएस बिजनेस मैसेजिंग",
        desc: "रिच इंटरैक्टिव मैसेजिंग",
      },
      otp: {
        title: "ओटीपी एसएमएस",
        desc: "सुरक्षित सत्यापन वितरण",
      },
    },
    chatScreen: {
      contactName: "iNet Global टीम",
      status: "सत्यापित प्रेषक",
      msg1: "पोर्टल के लिए आपका सत्यापन कोड है: 849201",
      time1: "10:24 AM",
      msg2: "शानदार! अपडेट के लिए धन्यवाद।",
      time2: "10:25 AM",
    },
  },
};

export const getMessagingTranslations = (
  lang: string,
  regionId?: string,
  countryName?: string
): MessagingTranslations => {
  const base = messagingTranslations[lang] || messagingTranslations["en"];
  const titleSuffix =
    regionId && regionId !== "global" && countryName
      ? ` in ${countryName}`
      : "";

  return {
    ...base,
    heroTitle: `${base.heroTitle}${titleSuffix}`,
    whyChooseTitle: `${base.whyChooseTitle}${titleSuffix}`,
    ctaTitle:
      regionId && regionId !== "global" && countryName
        ? `Grow Your Business in ${countryName} with Business SMS Solutions`
        : base.ctaTitle,
  };
};

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

  // Japanese (日本語)
  ja: {
    heroBadge: "メッセージングサービス",
    heroTitle: "高信頼SMS通信で世界中の顧客と瞬時に接続",
    heroDesc:
      "ビジネスSMSソリューションは、顧客、従業員、パートナーとの迅速かつ確実なコミュニケーションを実現します。",
    getStarted: "今すぐ始める",
    contactUs: "お問い合わせ",
    coreServiceBadge: "コアサービス",
    coreServiceTitle: "あらゆる業界に対応するSMSソリューション",
    coreServiceSubtitle:
      "高可用性の音声、メッセージング、仮想番号のために設計された通信インフラ。",
    services: {
      wholesaleSms: {
        title: "ホールセールSMS",
        description:
          "配信スピード、カバレッジ、コスト効率を最適化した大容量SMSターミネーション。",
        bullet1: "高い到達率保証",
        bullet2: "柔軟なルーティング設計",
        bullet3: "世界190カ国以上の配信網",
        learnMore: "詳細を見る",
      },
      rcsMessaging: {
        title: "RCS ビジネスメッセージ",
        description:
          "リッチメディア、インタラクティブボタン、企業ブランド認証を備えた高エンゲージメントメッセージ配信。",
        bullet1: "リッチメディア＆対話型カード",
        bullet2: "公式ブランド認証バッジ",
        bullet3: "ワンタップクイックアクション",
        learnMore: "詳細を見る",
      },
      otpSms: {
        title: "OTP 認証 SMS",
        description:
          "ユーザー登録や二要素認証を安全かつ数秒以内に届けるワンタイムパスワード配信サービス。",
        bullet1: "ミリ秒単位の高速配信",
        bullet2: "主要キャリア直結回線",
        bullet3: "高い配信完了率と耐障害性",
        learnMore: "詳細を見る",
      },
    },
    whyChooseBadge: "INET SMSソリューションが選ばれる理由",
    whyChooseTitle: "当社のSMSソリューションを選ぶ理由",
    whyChooseSubtitle:
      "確実な到達率、柔軟なルーティング、グローバル市場での高い安定性のために設計。",
    whyCards: {
      secure: {
        title: "安全で高信頼なエンタープライズ通信",
        description:
          "通信事業者レベルの高可用性アーキテクチャにより、企業メッセージを安全に配信します。",
      },
      cloud: {
        title: "クラウドベースの拡張基盤",
        description:
          "ハードウェアの制約なく、トラフィックの急増にも柔軟に対応できるクラウドメッセージング基盤。",
      },
      api: {
        title: "Voice & SMS API の迅速な連携",
        description:
          "開発者向けAPIにより、Webサイトやアプリ、CRMにSMS送信機能を即座に組み込み可能。",
      },
      connectivity: {
        title: "世界主要キャリアとの直接接続",
        description:
          "世界190カ国以上のTier-1通信キャリア網と直接接続し、安定した高品質ルートを確保。",
      },
      automated: {
        title: "自動化メッセージングサービス",
        description:
          "自動通知、イベントトリガー配信、リマインダーにより顧客体験と運用効率を飛躍的に向上。",
      },
    },
    featuresBadge: "当社SMSサービスの特徴",
    featuresTitle: "よりスマートなSMS通信を実現する包括的な機能群",
    featuresSubtitle:
      "大規模なSMS配信と監視を高速かつ安全に実現するエンタープライズ通信基盤。",
    features: [
      {
        title: "リアルタイム分析",
        description: "メッセージの到達状況や配信パフォーマンスを瞬時に可視化。",
        subtext: "ライブ監視 • 24/7 NOC",
      },
      {
        title: "グローバルSMS配信",
        description: "高い到達率と信頼性で世界中の端末へ確実にメッセージをお届け。",
        subtext: "直結ルート • コスト最適化 • 法令遵守",
      },
      {
        title: "超高速ミリ秒配信",
        description: "インテリジェントな最適ルーティングにより即座にメッセージを着信。",
        subtext: "ライブ監視 • 24/7 NOC",
      },
      {
        title: "強固なセキュリティ",
        description: "エンドツーエンドのデータ保護とコンプライアンス基準を徹底。",
        subtext: "直結ルート • コスト最適化 • 法令遵守",
      },
      {
        title: "強力なSMS API",
        description: "RESTful APIおよびSMPPプロトコルによる柔軟で容易なシステム統合。",
        subtext: "ライブ監視 • 24/7 NOC",
      },
    ],
    ctaBadge: "メッセージング基盤を構築",
    ctaTitle: "ビジネスSMSソリューションで貴社の成長を加速",
    ctaSubtitle:
      "国際SMS、AI音声、仮想番号まで、iNet Globalが世界中の顧客との強固な通信接続を実現します。",
    floatingBadges: {
      wholesale: {
        title: "ホールセールSMS",
        desc: "大容量配信ルート",
      },
      rcs: {
        title: "RCS ビジネスメッセージ",
        desc: "リッチインタラクティブ",
      },
      otp: {
        title: "OTP 認証 SMS",
        desc: "高優先セキュア配信",
      },
    },
    chatScreen: {
      contactName: "iNet Global チーム",
      status: "認証済み送信者",
      msg1: "ポータル用の安全な認証コードは: 849201 です",
      time1: "10:24",
      msg2: "確認しました。迅速なご対応ありがとうございます！",
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

  // Telugu (తెలుగు)
  te: {
    heroBadge: "మెసేజింగ్ సేవలు",
    heroTitle: "విశ్వసనీయ SMS కమ్యూనికేషన్‌తో తక్షణమే కనెక్ట్ అవ్వండి",
    heroDesc:
      "కస్టమర్‌లు, ఉద్యోగులు మరియు భాగస్వాములతో కమ్యూనికేట్ చేయడానికి బిజినెస్ SMS సొల్యూషన్స్ అత్యంత వేగవంతమైన మరియు ప్రభావవంతమైన మార్గాన్ని అందిస్తాయి.",
    getStarted: "ప్రారంభించండి",
    contactUs: "సంప్రదించండి",
    coreServiceBadge: "మా ముఖ్య సేవలు",
    coreServiceTitle: "ప్రతి పరిశ్రమ కోసం రూపొందించిన SMS సొల్యూషన్స్",
    coreServiceSubtitle:
      "అధిక లభ్యత కలిగిన వాయిస్, మెసేజింగ్ మరియు వర్చువల్ నంబర్ల కోసం టెలికాం మౌలిక సదుపాయాలు.",
    services: {
      wholesaleSms: {
        title: "హోల్‌సేల్ SMS",
        description:
          "డెలివరీ వేగం, కవరేజ్ మరియు వ్యయ సామర్థ్యంతో అధిక పరిమాణంలో SMS టెర్మినేషన్ మార్గాలు.",
        bullet1: "అధిక డెలివరీ హామీ",
        bullet2: "ఫ్లెక్సిబుల్ రూట్ ఎంపికలు",
        bullet3: "గ్లోబల్ కవరేజ్ (190+ దేశాలు)",
        learnMore: "మరింత తెలుసుకోండి",
      },
      rcsMessaging: {
        title: "RCS బిజినెస్ మెసేజింగ్",
        description:
          "రిచ్ మీడియా, ఇంటరాక్టివ్ బటన్లు మరియు బ్రాండ్ ధృవీకరణతో అధిక మార్పిడి గల సందేశాలను పంపండి.",
        bullet1: "రిచ్ మీడియా & ఇంటరాక్టివ్ కార్డ్‌లు",
        bullet2: "ధృవీకరించబడిన సెండర్ బ్రాండింగ్",
        bullet3: "త్వరిత ప్రత్యుత్తర ఎంపికలు",
        learnMore: "మరింత తెలుసుకోండి",
      },
      otpSms: {
        title: "OTP SMS",
        description:
          "వినియోగదారుల భద్రత కోసం సెకన్ల వ్యవధిలో డెలివరీ అయ్యే అత్యంత వేగవంతమైన వన్-టైమ్ పాస్‌వర్డ్‌లు.",
        bullet1: "మిల్లీసెకన్ల వేగవంతమైన డెలివరీ",
        bullet2: "డైరెక్ట్ Tier-1 క్యారియర్ కనెక్షన్లు",
        bullet3: "గరిష్ట డెలివరీ హామీ",
        learnMore: "మరింత తెలుసుకోండి",
      },
    },
    whyChooseBadge: "INET SMS సొల్యూషన్‌ను ఎందుకు ఎంచుకోవాలి",
    whyChooseTitle: "మా SMS సొల్యూషన్‌లను ఎందుకు ఎంచుకోవాలి",
    whyChooseSubtitle:
      "స్పష్టమైన కనెక్షన్‌లు, ఫ్లెక్సిబుల్ రూటింగ్ మరియు గ్లోబల్ మార్కెట్లలో స్థిరమైన పనితీరు కోసం రూపొందించబడింది.",
    whyCards: {
      secure: {
        title: "సురక్షితమైన మరియు నమ్మకమైన కమ్యూనికేషన్",
        description:
          "ఎంటర్‌ప్రైజ్-గ్రేడ్ భద్రతతో మీ వ్యాపార నోటిఫికేషన్‌లు మరియు ప్రచారాల విశ్వసనీయ డెలివరీ.",
      },
      cloud: {
        title: "క్లౌడ్ ఆధారిత మౌలిక సదుపాయాలు",
        description:
          "హార్డ్‌వేర్ పరిమితులు లేకుండా గరిష్ట ట్రాఫిక్‌ను సులభంగా నిర్వహించే స్కేలబుల్ క్లౌడ్ మెసేజింగ్.",
      },
      api: {
        title: "Voice & SMS API ఇంటిగ్రేషన్",
        description:
          "డెవలపర్-ఫ్రెండ్లీ APIల ద్వారా వెబ్‌సైట్‌లు, యాప్‌లు మరియు CRMలలో SMS సేవలను సులభంగా అనుసంధానించండి.",
      },
      connectivity: {
        title: "గ్లోబల్ క్యారియర్ నెట్‌వర్క్",
        description:
          "190+ దేశాలలో Tier-1 ఆపరేటర్ కనెక్షన్‌లతో ప్రపంచవ్యాప్తంగా కస్టమర్లను సులభంగా చేరుకోండి.",
      },
      automated: {
        title: "ఆటోమేటెడ్ మెసేజింగ్ సేవలు",
        description:
          "ఆటోమేటెడ్ నోటిఫికేషన్‌లు, ఈవెంట్ ట్రిగ్గర్‌లు మరియు అపాయింట్‌మెంట్ రిమైండర్‌ల ద్వారా కస్టమర్ అనుభవాన్ని పెంచండి.",
      },
    },
    featuresBadge: "మా SMS సేవా ఫీచర్లు",
    featuresTitle: "స్మార్ట్ SMS కమ్యూనికేషన్ కోసం పూర్తి సామర్థ్యాలు",
    featuresSubtitle:
      "గ్లోబల్ స్కేల్‌లో SMS పంపడానికి మరియు పర్యవేక్షించడానికి అవసరమైన అత్యాధునిక సాధనాలు.",
    features: [
      {
        title: "రియల్ టైమ్ అనలిటిక్స్",
        description: "డెలివరీ రేట్లు మరియు సందేశ స్థితిపై ప్రత్యక్ష నివేదికలను ట్రాక్ చేయండి.",
        subtext: "రియల్-టైమ్ మానిటరింగ్ • 24/7 NOC సపోర్ట్",
      },
      {
        title: "గ్లోబల్ SMS మెసేజింగ్",
        description: "అధిక విశ్వసనీయతతో ప్రపంచవ్యాప్తంగా నిజమైన వినియోగదారులను చేరుకోండి.",
        subtext: "డైరెక్ట్ రూట్లు • ఉత్తమ ధరలు • పూర్తి సమ్మతి",
      },
      {
        title: "హై-స్పీడ్ డెలివరీ",
        description: "ఇంటెలిజెంట్ రూటింగ్ ద్వారా ప్రపంచవ్యాప్తంగా సెకన్ల వ్యవధిలో SMS డెలివరీ.",
        subtext: "రియల్-టైమ్ మానిటరింగ్ • 24/7 NOC సపోర్ట్",
      },
      {
        title: "సురక్షిత మెసేజింగ్",
        description: "ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్‌తో మీ వ్యాపార డేటాకు పూర్తి రక్షణ.",
        subtext: "డైరెక్ట్ రూట్లు • ఉత్తమ ధరలు • పూర్తి సమ్మతి",
      },
      {
        title: "శక్తివంతమైన SMS API",
        description: "RESTful APIలు, SMPP మరియు SDKల ద్వారా తక్షణ సాంకేతిక ఇంటిగ్రేషన్.",
        subtext: "రియల్-టైమ్ మానిటరింగ్ • 24/7 NOC సపోర్ట్",
      },
    ],
    ctaBadge: "మీ SMS నెట్‌వర్క్‌ను ప్రారంభించండి",
    ctaTitle: "బిజినెస్ SMS సొల్యూషన్స్‌తో మీ వ్యాపారాన్ని విస్తరించండి",
    ctaSubtitle:
      "ఇంటెలిజెంట్ వాయిస్ రూటింగ్ మరియు SMS నుండి AI మరియు వర్చువల్ నంబర్ల వరకు, iNet Global వ్యాపారాలను ప్రపంచంతో కలుపుతుంది.",
    floatingBadges: {
      wholesale: {
        title: "హోల్‌సేల్ SMS",
        desc: "అధిక వాల్యూమ్ మెసేజింగ్",
      },
      rcs: {
        title: "RCS బిజినెస్ మెసేజింగ్",
        desc: "రిచ్ ఇంటరాక్టివ్ మెసేజింగ్",
      },
      otp: {
        title: "OTP SMS",
        desc: "సురక్షిత తక్షణ ధృవీకరణ",
      },
    },
    chatScreen: {
      contactName: "iNet Global బృందం",
      status: "ధృవీకరించబడిన వ్యాపారం",
      msg1: "మీ పోర్టల్ లాగిన్ ధృవీకరణ కోడ్: 849201",
      time1: "10:24 AM",
      msg2: "అందుకున్నాము! రియల్ టైమ్ అప్‌డేట్‌కు ధన్యవాదాలు.",
      time2: "10:25 AM",
    },
  },

  // Tamil (தமிழ்)
  ta: {
    heroBadge: "செய்தியிடல் சேவை",
    heroTitle: "நம்பகமான எஸ்எம்எஸ் தொடர்பு மூலம் உடனடியாக இணையுங்கள்",
    heroDesc:
      "வாடிக்கையாளர்கள், பணியாளர்கள் மற்றும் கூட்டாளர்களுடன் தொடர்புகொள்வதற்கான வேகமான மற்றும் பயனுள்ள வழியை வணிக எஸ்எம்எஸ் தீர்வுகள் வழங்குகின்றன.",
    getStarted: "தொடங்குங்கள்",
    contactUs: "தொடர்பு கொள்ள",
    coreServiceBadge: "எங்கள் முக்கிய சேவை",
    coreServiceTitle: "ஒவ்வொரு துறைக்காகவும் உருவாக்கப்பட்ட எஸ்எம்எஸ் தீர்வுகள்",
    coreServiceSubtitle:
      "உயர் கிடைக்கும் தன்மை கொண்ட குரல், செய்தியிடல் மற்றும் மெய்நிகர் எண்களுக்கான மட்டு தொலைத்தொடர்பு உள்கட்டமைப்பு.",
    services: {
      wholesaleSms: {
        title: "மொத்த எஸ்எம்எஸ்",
        description:
          "விநியோக வேகம், கவரேஜ் மற்றும் செலவுத் திறனின் அடிப்படையில் வடிவமைக்கப்பட்ட உயர் திறன் எஸ்எம்எஸ் வழிகள்.",
        bullet1: "உயர் விநியோக உத்தரவாதம்",
        bullet2: "நெகிழ்வான வழித்தட விருப்பங்கள்",
        bullet3: "உலகளாவிய கவரேஜ் (190+ நாடுகள்)",
        learnMore: "மேலும் அறிய",
      },
      rcsMessaging: {
        title: "RCS வணிக செய்தியிடல்",
        description:
          "பணக்கார ஊடகம், ஊடாடும் பொத்தான்கள் மற்றும் பிராண்ட் சரிபார்ப்புடன் கூடிய அதிக மாற்றும் செய்திகளை அனுப்புங்கள்.",
        bullet1: "ரிச் மீடியா மற்றும் ஊடாடும் அட்டைகள்",
        bullet2: "சரிபார்க்கப்பட்ட அனுப்புநர் பிராண்டிங்",
        bullet3: "விரைவான பதில் விருப்பங்கள்",
        learnMore: "மேலும் அறிய",
      },
      otpSms: {
        title: "OTP எஸ்எம்எஸ்",
        description:
          "பயனாளர் சரிபார்ப்பிற்காக வினாடிகளில் சென்றடையும் அதிவேக மற்றும் பாதுகாப்பான ஒருமுறை கடவுச்சொற்கள்.",
        bullet1: "மில்லி வினாடி வேக விநியோகம்",
        bullet2: "நேரடி Tier-1 கேரியர் இணைப்புகள்",
        bullet3: "அதிகபட்ச விநியோக உத்தரவாதம்",
        learnMore: "மேலும் அறிய",
      },
    },
    whyChooseBadge: "ஏன் INET எஸ்எம்எஸ் தீர்வை தேர்வு செய்ய வேண்டும்",
    whyChooseTitle: "எங்கள் எஸ்எம்எஸ் தீர்வுகளை ஏன் தேர்வு செய்ய வேண்டும்",
    whyChooseSubtitle:
      "தெளிவான இணைப்புகள், நெகிழ்வான ரூட்டிங் மற்றும் உலகளாவிய சந்தைகளில் நிலையான செயல்திறனுக்காக உருவாக்கப்பட்டது.",
    whyCards: {
      secure: {
        title: "பாதுகாப்பான மற்றும் நம்பகமான தொடர்பு",
        description:
          "நிறுவன தர பாதுகாப்புடன் உங்கள் வணிக அறிவிப்புகள் மற்றும் சந்தைப்படுத்தல் செய்திகளின் நம்பகமான விநியோகம்.",
      },
      cloud: {
        title: "கிளவுட் அடிப்படையிலான உள்கட்டமைப்பு",
        description:
          "வன்பொருள் வரம்புகள் இல்லாமல் அதிகபட்ச டிராஃபிக்கை எளிதில் கையாளும் நெகிழ்வான கிளவுட் செய்தியிடல்.",
      },
      api: {
        title: "Voice & SMS API ஒருங்கிணைப்பு",
        description:
          "வலைத்தளங்கள், பயன்பாடுகள் மற்றும் CRM அமைப்புகளில் எஸ்எம்எஸ் திறன்களை எளிதாக இணைக்கவும்.",
      },
      connectivity: {
        title: "உலகளாவிய கேரியர் நெட்வொர்க்",
        description:
          "190+ நாடுகளில் உள்ள Tier-1 ஆபரேட்டர் இணைப்புகளுடன் உலகளவில் வாடிக்கையாளர்களை எளிதாக சென்றடையுங்கள்.",
      },
      automated: {
        title: "தானியங்கி செய்தியிடல் சேவைகள்",
        description:
          "தானியங்கி அறிவிப்புகள், நிகழ்வு தூண்டுதல்கள் மற்றும் முன்பதிவு நினைவூட்டல்கள் மூலம் வாடிக்கையாளர் திருப்தியை உயர்த்துங்கள்.",
      },
    },
    featuresBadge: "எங்கள் எஸ்எம்எஸ் சேவை அம்சங்கள்",
    featuresTitle: "சிறந்த எஸ்எம்எஸ் தொடர்பிற்கான முழுமையான திறன்கள்",
    featuresSubtitle:
      "உலகளாவிய அளவில் எஸ்எம்எஸ் அனுப்ப மற்றும் கண்காணிக்க தேவையான அதிநவீன கருவிகள்.",
    features: [
      {
        title: "நிகழ்நேர பகுப்பாய்வு",
        description: "விநியோக விகிதங்கள் மற்றும் செய்தி நிலை பற்றிய நேரடி அறிக்கைகளைக் கண்காணிக்கவும்.",
        subtext: "நிகழ்நேர கண்காணிப்பு • 24/7 NOC ஆதரவு",
      },
      {
        title: "உலகளாவிய எஸ்எம்எஸ்",
        description: "அதிக நம்பகத்தன்மையுடன் உலகெங்கிலும் உள்ள உண்மையான பயனர்களை சென்றடையுங்கள்.",
        subtext: "நேரடி வழிகள் • சிறந்த கட்டணங்கள் • முழு இணக்கம்",
      },
      {
        title: "அதிவேக விநியோகம்",
        description: "நுண்ணறிவு வழித்தடம் மூலம் உலகளவில் சில வினாடிகளில் எஸ்எம்எஸ் டெலிவரி.",
        subtext: "நிகழ்நேர கண்காணிப்பு • 24/7 NOC ஆதரவு",
      },
      {
        title: "பாதுகாப்பான செய்தியிடல்",
        description: "முழுமையான குறியாக்கத்துடன் உங்கள் வணிகத் தரவுகளுக்கு முழு பாதுகாப்பு.",
        subtext: "நேரடி வழிகள் • சிறந்த கட்டணங்கள் • முழு இணக்கம்",
      },
      {
        title: "சக்திவாய்ந்த எஸ்எம்எஸ் API",
        description: "RESTful APIகள், SMPP மற்றும் SDKகள் மூலம் உடனடி தொழில்நுட்ப ஒருங்கிணைப்பு.",
        subtext: "நிகழ்நேர கண்காணிப்பு • 24/7 NOC ஆதரவு",
      },
    ],
    ctaBadge: "உங்கள் எஸ்எம்எஸ் நெட்வொர்க்கைத் தொடங்குங்கள்",
    ctaTitle: "வணிக எஸ்எம்எஸ் தீர்வுகள் மூலம் உங்கள் வணிகத்தை வளர்க்கவும்",
    ctaSubtitle:
      "நுண்ணறிவு குரல் வழித்தடம் மற்றும் எஸ்எம்எஸ் முதல் AI மற்றும் மெய்நிகர் எண்கள் வரை, iNet Global உலகத்துடன் உங்களை இணைக்கிறது.",
    floatingBadges: {
      wholesale: {
        title: "மொத்த எஸ்எம்எஸ்",
        desc: "அதிக அளவு செய்தியிடல்",
      },
      rcs: {
        title: "RCS வணிக செய்தி",
        desc: "ஊடாடும் பணக்கார செய்திகள்",
      },
      otp: {
        title: "OTP எஸ்எம்எஸ்",
        desc: "பாதுகாப்பான உடனடி சரிபார்ப்பு",
      },
    },
    chatScreen: {
      contactName: "iNet Global குழு",
      status: "சரிபார்க்கப்பட்ட வணிகம்",
      msg1: "உங்கள் போர்டல் சரிபார்ப்புக் குறியீடு: 849201",
      time1: "10:24 AM",
      msg2: "நன்றி! நிகழ்நேர தகவல் கிடைத்தது.",
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

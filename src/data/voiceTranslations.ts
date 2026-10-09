export interface VoiceTranslations {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  getStarted: string;
  contactUs: string;
  coreServiceBadge: string;
  coreServiceTitle: string;
  coreServiceSubtitle: string;
  services: {
    wholesale: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      learnMore: string;
    };
    aiVoice: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      learnMore: string;
    };
    virtualNumbers: {
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
  howItWorksBadge: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  steps: {
    step1: { step: string; title: string; description: string; subtext: string };
    step2: { step: string; title: string; description: string; subtext: string };
    step3: { step: string; title: string; description: string; subtext: string };
    step4: { step: string; title: string; description: string; subtext: string };
  };
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  defaultLocations: Array<{ city: string; phone: string }>;
}

export const voiceTranslations: Record<string, VoiceTranslations> = {
  // English
  en: {
    heroBadge: "VOICE SERVICE",
    heroTitle: "Power Business Communication with Voice Solutions",
    heroDesc:
      "Reliable, scalable voice solutions for clear communication, global connectivity, and growing businesses.",
    getStarted: "Get Started",
    contactUs: "Contact Us",
    coreServiceBadge: "OUR CORE SERVICE",
    coreServiceTitle: "Voice solutions built for every industry",
    coreServiceSubtitle:
      "Modular telecom infrastructure engineered for high-availability voice, messaging, and virtual numbers.",
    services: {
      wholesale: {
        title: "Wholesale Voice",
        description:
          "International voice termination with route options designed around quality, coverage and cost.",
        bullet1: "High-quality voice connections",
        bullet2: "Flexible route options",
        bullet3: "Global coverage",
        learnMore: "Learn more",
      },
      aiVoice: {
        title: "Ai Voice",
        description:
          "Deliver conversational AI voice agents, smart IVR, and automated speech interactions directly to handsets worldwide with high assurance.",
        bullet1: "High-quality voice connections",
        bullet2: "Flexible route options",
        bullet3: "Global coverage",
        learnMore: "Learn more",
      },
      virtualNumbers: {
        title: "Virtual Number (DID)",
        description:
          "Unify Voice, SMS, WhatsApp, and Verification into a single developer-friendly REST API suite designed for instant deployment.",
        bullet1: "High-quality voice connections",
        bullet2: "Flexible route options",
        bullet3: "Global coverage",
        learnMore: "Learn more",
      },
    },
    whyChooseBadge: "WHY OUR INET VOICE SOLUTION",
    whyChooseTitle: "Why Choose Our Voice Solutions",
    whyChooseSubtitle:
      "Built for clear connections, flexible routing, and reliable voice performance across global markets.",
    whyCards: {
      secure: {
        title: "Secure and Reliable Communication",
        description:
          "Our infrastructure is designed to support secure voice communication with high availability and enterprise-grade reliability.",
      },
      cloud: {
        title: "Cloud-Based Infrastructure",
        description:
          "Leverage flexible Cloud Voice Solutions that eliminate the need for expensive hardware while providing scalability, reliability, and cost efficiency.",
      },
      api: {
        title: "Voice API Integration",
        description:
          "As a trusted Voice API Provider, we help businesses integrate calling capabilities into websites, mobile apps, CRM systems, and customer service platforms.",
      },
      connectivity: {
        title: "Global Voice Connectivity",
        description:
          "Our Business Voice Solutions allow companies to connect with customers and teams across multiple countries with crystal-clear voice quality and reliable network performance.",
      },
      automated: {
        title: "Automated Voice Services",
        description:
          "Improve customer experiences through IVR systems, automated call routing, voice notifications, and appointment reminders.",
      },
    },
    howItWorksBadge: "HOW IT WORKS",
    howItWorksTitle: "Connecting Every Call Through Intelligent Voice Routing",
    howItWorksSubtitle:
      "Our global voice network connects businesses to reliable carrier routes and destinations, delivering clear, consistent communication at scale.",
    steps: {
      step1: {
        step: "01",
        title: "Business",
        description:
          "Bring your SBC, PBX, contact center or communications application over secure SIP.",
        subtext: "SIP credentials • IP authentication",
      },
      step2: {
        step: "02",
        title: "iNet Global Network",
        description:
          "Intelligent routing engine selects the lowest latency and highest ASR/ACD carrier route.",
        subtext: "SIP credentials • IP authentication",
      },
      step3: {
        step: "03",
        title: "Global Carrier Routes",
        description:
          "Direct Tier-1 carrier interconnects across 190+ countries with redundant failover paths.",
        subtext: "SIP credentials • IP authentication",
      },
      step4: {
        step: "04",
        title: "Customer",
        description:
          "Crystal-clear voice quality delivered to end-user handsets, softphones, or PSTN destinations.",
        subtext: "SIP credentials • IP authentication",
      },
    },
    ctaBadge: "LET'S BUILD YOUR VOICE NETWORK",
    ctaTitle: "Power Your Business With Reliable Voice Connectivity Worldwide",
    ctaSubtitle:
      "Tell us where you need to connect, the traffic you carry and what delivery quality means to your business. Our messaging & voice team will help shape the right routing and integration plan.",
    defaultLocations: [
      { city: "London", phone: "+44 XXXX XXXX" },
      { city: "Singapore", phone: "+44 XXXX XXXX" },
      { city: "New York", phone: "+44 XXXX XXXX" },
      { city: "Dubai", phone: "+44 XXXX XXXX" },
    ],
  },

  // Spanish
  es: {
    heroBadge: "SERVICIO DE VOZ",
    heroTitle: "Impulse la Comunicación Empresarial con Soluciones de Voz",
    heroDesc:
      "Soluciones de voz fiables y escalables para una comunicación clara, conectividad global y empresas en crecimiento.",
    getStarted: "Comenzar",
    contactUs: "Contáctenos",
    coreServiceBadge: "NUESTRO SERVICIO PRINCIPAL",
    coreServiceTitle: "Soluciones de voz diseñadas para cada industria",
    coreServiceSubtitle:
      "Infraestructura de telecomunicaciones modular diseñada para voz de alta disponibilidad, mensajería y números virtuales.",
    services: {
      wholesale: {
        title: "Voz Mayorista",
        description:
          "Terminación de voz internacional con opciones de ruta diseñadas en torno a la calidad, cobertura y costo.",
        bullet1: "Conexiones de voz de alta calidad",
        bullet2: "Opciones de enrutamiento flexibles",
        bullet3: "Cobertura global",
        learnMore: "Saber más",
      },
      aiVoice: {
        title: "Voz con IA",
        description:
          "Entregue agentes de voz con IA conversacional, IVR inteligente e interacciones de voz automatizadas a teléfonos de todo el mundo.",
        bullet1: "Conexiones de voz de alta calidad",
        bullet2: "Opciones de enrutamiento flexibles",
        bullet3: "Cobertura global",
        learnMore: "Saber más",
      },
      virtualNumbers: {
        title: "Número Virtual (DID)",
        description:
          "Unifique voz, SMS, WhatsApp y verificación en un conjunto de API REST para desarrolladores diseñado para un despliegue instantáneo.",
        bullet1: "Conexiones de voz de alta calidad",
        bullet2: "Opciones de enrutamiento flexibles",
        bullet3: "Cobertura global",
        learnMore: "Saber más",
      },
    },
    whyChooseBadge: "POR QUÉ NUESTRA SOLUCIÓN DE VOZ INET",
    whyChooseTitle: "Por Qué Elegir Nuestras Soluciones de Voz",
    whyChooseSubtitle:
      "Diseñado para conexiones claras, enrutamiento flexible y rendimiento de voz confiable en los mercados globales.",
    whyCards: {
      secure: {
        title: "Comunicación Segura y Confiable",
        description:
          "Nuestra infraestructura está diseñada para admitir comunicaciones de voz seguras con alta disponibilidad y confiabilidad empresarial.",
      },
      cloud: {
        title: "Infraestructura Basada en la Nube",
        description:
          "Aproveche las soluciones de voz en la nube que eliminan la necesidad de hardware costoso y brindan escalabilidad y eficiencia.",
      },
      api: {
        title: "Integración de API de Voz",
        description:
          "Como proveedor confiable de API de voz, ayudamos a integrar capacidades de llamadas en sitios web, apps móviles y CRM.",
      },
      connectivity: {
        title: "Conectividad de Voz Global",
        description:
          "Nuestras soluciones permiten conectarse con clientes y equipos en múltiples países con calidad nítida y rendimiento confiable.",
      },
      automated: {
        title: "Servicios de Voz Automatizados",
        description:
          "Mejore la experiencia del cliente a través de sistemas IVR, enrutamiento inteligente, notificaciones y recordatorios.",
      },
    },
    howItWorksBadge: "CÓMO FUNCIONA",
    howItWorksTitle: "Conectando Cada Llamada a Través de Enrutamiento Inteligente",
    howItWorksSubtitle:
      "Nuestra red global de voz conecta empresas con rutas de operadores confiables, ofreciendo comunicación clara y uniforme a escala.",
    steps: {
      step1: {
        step: "01",
        title: "Empresa",
        description:
          "Conecte su SBC, PBX, centro de contacto o aplicación de comunicaciones mediante SIP seguro.",
        subtext: "Credenciales SIP • Autenticación IP",
      },
      step2: {
        step: "02",
        title: "Red Global iNet",
        description:
          "El motor de enrutamiento inteligente selecciona la ruta de operador de menor latencia y mayor ASR/ACD.",
        subtext: "Credenciales SIP • Autenticación IP",
      },
      step3: {
        step: "03",
        title: "Rutas de Operadores Globales",
        description:
          "Interconexiones directas Tier-1 en más de 190 países con rutas de conmutación por error redundantes.",
        subtext: "Credenciales SIP • Autenticación IP",
      },
      step4: {
        step: "04",
        title: "Cliente Final",
        description:
          "Calidad de voz nítida entregada a terminales de usuarios finales, softphones o destinos PSTN.",
        subtext: "Credenciales SIP • Autenticación IP",
      },
    },
    ctaBadge: "CONSTRUYAMOS SU RED DE VOZ",
    ctaTitle: "Impulse su Negocio con Conectividad de Voz Confiable en Todo el Mundo",
    ctaSubtitle:
      "Cuéntenos dónde necesita conectarse y el tráfico que maneja. Nuestro equipo de voz le ayudará a diseñar el plan adecuado.",
    defaultLocations: [
      { city: "Londres", phone: "+44 XXXX XXXX" },
      { city: "Singapur", phone: "+65 XXXX XXXX" },
      { city: "Nueva York", phone: "+1 XXXX XXXX" },
      { city: "Dubái", phone: "+971 XXXX XXXX" },
    ],
  },

  // French
  fr: {
    heroBadge: "SERVICE VOCAL",
    heroTitle: "Dynamisez la Communication d'Entreprise avec les Solutions Vocales",
    heroDesc:
      "Des solutions vocales fiables et évolutives pour une communication claire, une connectivité mondiale et des entreprises en plein essor.",
    getStarted: "Commencer",
    contactUs: "Contactez-nous",
    coreServiceBadge: "NOTRE SERVICE PRINCIPAL",
    coreServiceTitle: "Solutions vocales conçues pour chaque industrie",
    coreServiceSubtitle:
      "Infrastructure télécom modulaire conçue pour la voix haute disponibilité, la messagerie et les numéros virtuels.",
    services: {
      wholesale: {
        title: "Voix de Gros",
        description:
          "Terminaison vocale internationale avec des options de routage conçues pour la qualité, la couverture et le coût.",
        bullet1: "Connexions vocales haute qualité",
        bullet2: "Options de routage flexibles",
        bullet3: "Couverture mondiale",
        learnMore: "En savoir plus",
      },
      aiVoice: {
        title: "Voix IA",
        description:
          "Déployez des agents vocaux IA conversationnels, des SVI intelligents et des interactions vocales automatisées avec une garantie élevée.",
        bullet1: "Connexions vocales haute qualité",
        bullet2: "Options de routage flexibles",
        bullet3: "Couverture mondiale",
        learnMore: "En savoir plus",
      },
      virtualNumbers: {
        title: "Numéro Virtuel (DID)",
        description:
          "Unifiez Voix, SMS, WhatsApp et Vérification dans une suite d'API REST conçue pour un déploiement instantané.",
        bullet1: "Connexions vocales haute qualité",
        bullet2: "Options de routage flexibles",
        bullet3: "Couverture mondiale",
        learnMore: "En savoir plus",
      },
    },
    whyChooseBadge: "POURQUOI NOTRE SOLUTION VOCALE INET",
    whyChooseTitle: "Pourquoi Choisir Nos Solutions Vocales",
    whyChooseSubtitle:
      "Conçu pour des connexions claires, un routage flexible et des performances vocales fiables sur les marchés mondiaux.",
    whyCards: {
      secure: {
        title: "Communication Sécurisée et Fiable",
        description:
          "Notre infrastructure est conçue pour prendre en charge une communication vocale sécurisée avec haute disponibilité.",
      },
      cloud: {
        title: "Infrastructure Basée sur le Cloud",
        description:
          "Profitez de solutions vocales dans le cloud flexibles éliminant le besoin de matériel coûteux tout en offrant évolutivité et rentabilité.",
      },
      api: {
        title: "Intégration d'API Vocale",
        description:
          "En tant que fournisseur d'API vocales de confiance, nous aidons à intégrer des capacités d'appel dans les sites web, applications et CRM.",
      },
      connectivity: {
        title: "Connectivité Vocale Mondiale",
        description:
          "Nos solutions permettent aux entreprises de se connecter avec leurs clients et équipes dans plusieurs pays avec une clarté optimale.",
      },
      automated: {
        title: "Services Vocaux Automatisés",
        description:
          "Améliorez l'expérience client grâce aux systèmes SVI, au routage d'appels intelligent, aux notifications et aux rappels.",
      },
    },
    howItWorksBadge: "COMMENT ÇA MARCHE",
    howItWorksTitle: "Connecter Chaque Appel Grâce au Routage Vocal Intelligent",
    howItWorksSubtitle:
      "Notre réseau vocal mondial connecte les entreprises à des routes d'opérateurs fiables, assurant une communication claire et fluide à grande échelle.",
    steps: {
      step1: {
        step: "01",
        title: "Entreprise",
        description:
          "Connectez votre SBC, IPBX, centre de contact ou application via SIP sécurisé.",
        subtext: "Identifiants SIP • Authentification IP",
      },
      step2: {
        step: "02",
        title: "Réseau Global iNet",
        description:
          "Le moteur de routage sélectionne l'opérateur avec la plus faible latence et les taux ASR/ACD optimaux.",
        subtext: "Identifiants SIP • Authentification IP",
      },
      step3: {
        step: "03",
        title: "Routes Opérateurs Mondiales",
        description:
          "Interconnexions directes Tier-1 dans plus de 190 pays avec basculement automatique redondant.",
        subtext: "Identifiants SIP • Authentification IP",
      },
      step4: {
        step: "04",
        title: "Client",
        description:
          "Qualité vocale cristalline livrée sur les combinés, softphones ou destinations RTC des utilisateurs finaux.",
        subtext: "Identifiants SIP • Authentification IP",
      },
    },
    ctaBadge: "CONSTRUISONS VOTRE RÉSEAU VOCAL",
    ctaTitle: "Propulsez Votre Entreprise Avec une Connectivité Vocale Fiable",
    ctaSubtitle:
      "Indiquez-nous où vous devez vous connecter et vos volumes de trafic. Notre équipe concevra le plan de routage idéal.",
    defaultLocations: [
      { city: "Londres", phone: "+44 XXXX XXXX" },
      { city: "Singapour", phone: "+65 XXXX XXXX" },
      { city: "New York", phone: "+1 XXXX XXXX" },
      { city: "Dubaï", phone: "+971 XXXX XXXX" },
    ],
  },

  // German
  de: {
    heroBadge: "SPRACHDIENSTE",
    heroTitle: "Stärken Sie die Unternehmenskommunikation mit Sprachlösungen",
    heroDesc:
      "Zuverlässige, skalierbare Sprachlösungen für klare Kommunikation, weltweite Konnektivität und wachsende Unternehmen.",
    getStarted: "Jetzt starten",
    contactUs: "Kontaktieren Sie uns",
    coreServiceBadge: "UNSER KERN-SERVICE",
    coreServiceTitle: "Sprachlösungen für jede Branche",
    coreServiceSubtitle:
      "Modulare Telekommunikationsinfrastruktur für hochverfügbare Sprach-, Messaging- und virtuelle Nummern.",
    services: {
      wholesale: {
        title: "Wholesale Voice",
        description:
          "Internationale Sprachterminierung mit Routing-Optionen optimiert für Qualität, Reichweite und Kosten.",
        bullet1: "Hochwertige Sprachverbindungen",
        bullet2: "Flexible Routing-Optionen",
        bullet3: "Globale Abdeckung",
        learnMore: "Mehr erfahren",
      },
      aiVoice: {
        title: "KI-Sprachlösungen",
        description:
          "Verbinden Sie konversationelle KI-Sprachagenten, intelligente IVR-Systeme und automatisierte Sprachdienste weltweit.",
        bullet1: "Hochwertige Sprachverbindungen",
        bullet2: "Flexible Routing-Optionen",
        bullet3: "Globale Abdeckung",
        learnMore: "Mehr erfahren",
      },
      virtualNumbers: {
        title: "Virtuelle Rufnummern (DID)",
        description:
          "Vereinen Sie Voice, SMS, WhatsApp und Verifizierung in einer entwicklerfreundlichen REST-API-Suite.",
        bullet1: "Hochwertige Sprachverbindungen",
        bullet2: "Flexible Routing-Optionen",
        bullet3: "Globale Abdeckung",
        learnMore: "Mehr erfahren",
      },
    },
    whyChooseBadge: "WARUM UNSERE INET SPRACHLÖSUNG",
    whyChooseTitle: "Warum Sie Unsere Sprachlösungen Wählen Sollten",
    whyChooseSubtitle:
      "Entwickelt für kristallklare Verbindungen, flexibles Routing und zuverlässige Leistung weltweit.",
    whyCards: {
      secure: {
        title: "Sichere und zuverlässige Kommunikation",
        description:
          "Unsere Infrastruktur unterstützt hochsichere Sprachkommunikation mit maximaler Verfügbarkeit.",
      },
      cloud: {
        title: "Cloudbasierte Infrastruktur",
        description:
          "Nutzen Sie flexible Cloud-Voice-Lösungen ohne teure Hardware bei voller Skalierbarkeit und Kosteneffizienz.",
      },
      api: {
        title: "Voice-API-Integration",
        description:
          "Integrieren Sie Anruffunktionen mühelos in Websites, mobile Apps, CRM-Systeme und Kundendienstplattformen.",
      },
      connectivity: {
        title: "Globale Sprachkonnektivität",
        description:
          "Verbinden Sie sich mit Kunden und Teams in zahlreichen Ländern mit erstklassiger Sprachqualität.",
      },
      automated: {
        title: "Automatisierte Sprachdienste",
        description:
          "Verbessern Sie das Kundenerlebnis durch IVR, automatische Anrufweiterleitung, Benachrichtigungen und Terminerinnerungen.",
      },
    },
    howItWorksBadge: "WIE ES FUNKTIONIERT",
    howItWorksTitle: "Verbindung jedes Anrufs durch intelligentes Sprachrouting",
    howItWorksSubtitle:
      "Unser globales Sprachnetzwerk verbindet Unternehmen mit zuverlässigen Carrier-Routen für konsistente Kommunikation im großen Maßstab.",
    steps: {
      step1: {
        step: "01",
        title: "Unternehmen",
        description:
          "Binden Sie Ihr SBC, PBX, Contact Center oder Ihre Kommunikationsanwendung über sicheres SIP an.",
        subtext: "SIP-Zugangsdaten • IP-Authentifizierung",
      },
      step2: {
        step: "02",
        title: "iNet Globales Netzwerk",
        description:
          "Die intelligente Routing-Engine wählt die Carrier-Route mit der geringsten Latenz und besten ASR/ACD-Werten.",
        subtext: "SIP-Zugangsdaten • IP-Authentifizierung",
      },
      step3: {
        step: "03",
        title: "Globale Carrier-Routen",
        description:
          "Direkte Tier-1-Zusammenschaltungen in über 190 Ländern mit redundanten Ausfallsicherungspfaden.",
        subtext: "SIP-Zugangsdaten • IP-Authentifizierung",
      },
      step4: {
        step: "04",
        title: "Endkunde",
        description:
          "Kristallklare Sprachqualität direkt auf Mobilgeräte, Softphones oder Festnetzanschlüsse geliefert.",
        subtext: "SIP-Zugangsdaten • IP-Authentifizierung",
      },
    },
    ctaBadge: "BAUEN WIR IHR SPRACHNETZWERK AUF",
    ctaTitle: "Stärken Sie Ihr Unternehmen mit weltweiter Sprachkonnektivität",
    ctaSubtitle:
      "Teilen Sie uns Ihre Anforderungen und Zielmärkte mit. Unser Team erarbeitet das optimale Routing für Sie.",
    defaultLocations: [
      { city: "London", phone: "+44 XXXX XXXX" },
      { city: "Singapur", phone: "+65 XXXX XXXX" },
      { city: "New York", phone: "+1 XXXX XXXX" },
      { city: "Dubai", phone: "+971 XXXX XXXX" },
    ],
  },

  // Chinese (Simplified)
  zh: {
    heroBadge: "语音服务",
    heroTitle: "以卓越语音解决方案赋能企业全球通信",
    heroDesc:
      "高可用、可扩展的全球语音解决方案，为企业提供清晰通信、全球互联与稳健业务支撑。",
    getStarted: "立即体验",
    contactUs: "联系我们",
    coreServiceBadge: "核心业务",
    coreServiceTitle: "专为各行各业打造的语音通信解决方案",
    coreServiceSubtitle:
      "模块化电信基础设施，专为高可用性语音、智能消息和虚拟号码设计。",
    services: {
      wholesale: {
        title: "批发语音 (Wholesale Voice)",
        description:
          "国际语音落地服务，根据通话质量、覆盖范围与成本优势量身定制高性价比路由。",
        bullet1: "高品质高清语音连接",
        bullet2: "灵活多样的路由选择",
        bullet3: "覆盖全球190+国家",
        learnMore: "了解更多",
      },
      aiVoice: {
        title: "AI 智能语音",
        description:
          "为全球企业提供对话式 AI 语音客服、智能 IVR 和自动化语音交互，大幅提升触达率。",
        bullet1: "高品质高清语音连接",
        bullet2: "灵活多样的路由选择",
        bullet3: "覆盖全球190+国家",
        learnMore: "了解更多",
      },
      virtualNumbers: {
        title: "虚拟号码 (DID)",
        description:
          "将语音、短信、WhatsApp 和身份验证集成在开发者友好的 REST API 套件中，即开即用。",
        bullet1: "高品质高清语音连接",
        bullet2: "灵活多样的路由选择",
        bullet3: "覆盖全球190+国家",
        learnMore: "了解更多",
      },
    },
    whyChooseBadge: "为什么选择 INET 语音服务",
    whyChooseTitle: "为什么选择我们的语音解决方案",
    whyChooseSubtitle:
      "专为清晰通话、智能灵活路由及全球市场中稳定可靠的语音性能而打造。",
    whyCards: {
      secure: {
        title: "安全可靠的企业级通信",
        description:
          "我们的电信级基础设施支持端到端安全语音通信，提供极高可用性与合规保障。",
      },
      cloud: {
        title: "云原生弹性基础设施",
        description:
          "利用灵活的云语音解决方案，告别昂贵硬件投资，获得超强弹性扩容与成本优势。",
      },
      api: {
        title: "便捷的 Voice API 快速集成",
        description:
          "作为值得信赖的语音 API 提供商，我们帮助企业将通话能力轻松嵌入网站、App 及 CRM 系统。",
      },
      connectivity: {
        title: "全球互联语音网络",
        description:
          "让企业与跨国客户和团队顺畅互联，享受高清纯净音质与低延迟稳定网络。",
      },
      automated: {
        title: "自动化智能语音服务",
        description:
          "通过智能 IVR、自动外呼、语音验证码与预约提醒，全方位优化客户服务体验。",
      },
    },
    howItWorksBadge: "运作原理",
    howItWorksTitle: "通过智能路由连接每一通全球通话",
    howItWorksSubtitle:
      "我们的全球语音网络将企业与可靠的运营商路由直连，提供大规模清晰一致的通信体验。",
    steps: {
      step1: {
        step: "01",
        title: "企业接入",
        description:
          "通过安全 SIP Trunk 轻松接入您的 SBC、PBX、联络中心或通信应用程序。",
        subtext: "SIP 凭证 • IP 鉴权",
      },
      step2: {
        step: "02",
        title: "iNet 全球网络",
        description:
          "智能路由引擎实时选择延迟最低、ASR/ACD 接通指标最高的运营商专线。",
        subtext: "SIP 凭证 • IP 鉴权",
      },
      step3: {
        step: "03",
        title: "全球运营商路由",
        description:
          "直连全球 190+ 国家的一级 Tier-1 运营商，具备多重冗余自动容灾能力。",
        subtext: "SIP 凭证 • IP 鉴权",
      },
      step4: {
        step: "04",
        title: "终端客户",
        description:
          "高清纯净音质直达最终用户的手机、软电话或传统 PSTN 固话终端。",
        subtext: "SIP 凭证 • IP 鉴权",
      },
    },
    ctaBadge: "开启构建您的语音网络",
    ctaTitle: "以全球高可靠语音连接赋能您的业务增长",
    ctaSubtitle:
      "告诉我们您的目标目的地、预计话务量及业务质量要求，我们的专家团队将为您量身定制路由方案。",
    defaultLocations: [
      { city: "伦敦", phone: "+44 XXXX XXXX" },
      { city: "新加坡", phone: "+65 XXXX XXXX" },
      { city: "纽约", phone: "+1 XXXX XXXX" },
      { city: "迪拜", phone: "+971 XXXX XXXX" },
    ],
  },

  // Hindi
  hi: {
    heroBadge: "वॉइस सेवा",
    heroTitle: "वॉइस समाधानों के साथ व्यावसायिक संचार को सशक्त बनाएं",
    heroDesc:
      "स्पष्ट संचार, वैश्विक कनेक्टिविटी और बढ़ते व्यवसायों के लिए विश्वसनीय, स्केलेबल वॉइस समाधान।",
    getStarted: "शुरू करें",
    contactUs: "संपर्क करें",
    coreServiceBadge: "हमारी मुख्य सेवा",
    coreServiceTitle: "प्रत्येक उद्योग के लिए निर्मित वॉइस समाधान",
    coreServiceSubtitle:
      "उच्च-उपलब्धता वॉइस, मैसेजिंग और वर्चुअल नंबरों के लिए इंजीनियर किया गया मॉड्यूलर टेलीकॉम इंफ्रास्ट्रक्चर।",
    services: {
      wholesale: {
        title: "होलसेल वॉइस",
        description:
          "गुणवत्ता, कवरेज और लागत के आधार पर डिज़ाइन किए गए रूट विकल्पों के साथ अंतर्राष्ट्रीय वॉइस टर्मिनेशन।",
        bullet1: "उच्च गुणवत्ता वाले वॉइस कनेक्शन",
        bullet2: "लचीले रूट विकल्प",
        bullet3: "वैश्विक कवरेज",
        learnMore: "और जानें",
      },
      aiVoice: {
        title: "एआई वॉइस",
        description:
          "उच्च विश्वसनीयता के साथ दुनिया भर में संवादात्मक एआई वॉइस एजेंट, स्मार्ट आईवीआर और स्वचालित सेवाएं प्रदान करें।",
        bullet1: "उच्च गुणवत्ता वाले वॉइस कनेक्शन",
        bullet2: "लचीले रूट विकल्प",
        bullet3: "वैश्विक कवरेज",
        learnMore: "और जानें",
      },
      virtualNumbers: {
        title: "वर्चुअल नंबर (DID)",
        description:
          "तत्काल परिनियोजन के लिए डिज़ाइन किए गए एकल डेवलपर-अनुकूल REST API सूट में वॉइस, एसएमएस और सत्यापन को एकीकृत करें।",
        bullet1: "उच्च गुणवत्ता वाले वॉइस कनेक्शन",
        bullet2: "लचीले रूट विकल्प",
        bullet3: "वैश्विक कवरेज",
        learnMore: "और जानें",
      },
    },
    whyChooseBadge: "हमारा INET वॉइस समाधान क्यों चुनें",
    whyChooseTitle: "हमारे वॉइस समाधान क्यों चुनें",
    whyChooseSubtitle:
      "वैश्विक बाजारों में स्पष्ट कनेक्शन, लचीले रूटिंग और विश्वसनीय वॉइस प्रदर्शन के लिए निर्मित।",
    whyCards: {
      secure: {
        title: "सुरक्षित और विश्वसनीय संचार",
        description:
          "हमारा इंफ्रास्ट्रक्चर उच्च उपलब्धता और एंटरप्राइज-ग्रेड विश्वसनीयता के साथ सुरक्षित वॉइस संचार का समर्थन करता है।",
      },
      cloud: {
        title: "क्लाउड-आधारित इंफ्रास्ट्रक्चर",
        description:
          "लचीले क्लाउड वॉइस समाधानों का लाभ उठाएं जो महंगे हार्डवेयर की आवश्यकता को समाप्त करते हैं।",
      },
      api: {
        title: "वॉइस एपीआई एकीकरण",
        description:
          "एक विश्वसनीय वॉइस एपीआई प्रदाता के रूप में, हम वेबसाइटों, ऐप्स और सीआरएम में कॉलिंग सुविधाओं को एकीकृत करने में मदद करते हैं।",
      },
      connectivity: {
        title: "वैश्विक वॉइस कनेक्टिविटी",
        description:
          "हमारे समाधान कंपनियों को उत्कृष्ट वॉइस गुणवत्ता और नेटवर्क प्रदर्शन के साथ कई देशों में ग्राहकों से जोड़ते हैं।",
      },
      automated: {
        title: "स्वचालित वॉइस सेवाएं",
        description:
          "आईवीआर सिस्टम, स्वचालित कॉल रूटिंग, वॉइस नोटिफिकेशन और अपॉइंटमेंट रिमाइंडर के माध्यम से अनुभव में सुधार करें।",
      },
    },
    howItWorksBadge: "यह कैसे काम करता है",
    howItWorksTitle: "इंटेलिजेंट वॉइस रूटिंग के माध्यम से हर कॉल को जोड़ना",
    howItWorksSubtitle:
      "हमारा वैश्विक वॉइस नेटवर्क व्यवसायों को विश्वसनीय वाहक मार्गों और गंतव्यों से जोड़ता है।",
    steps: {
      step1: {
        step: "01",
        title: "व्यवसाय",
        description:
          "सुरक्षित एसआईपी पर अपने एसबीसी, पीबीएक्स, संपर्क केंद्र या संचार ऐप को कनेक्ट करें।",
        subtext: "एसआईपी क्रेडेंशियल • आईपी प्रमाणीकरण",
      },
      step2: {
        step: "02",
        title: "iNet ग्लोबल नेटवर्क",
        description:
          "इंटेलिजेंट रूटिंग इंजन न्यूनतम विलंबता और उच्चतम ASR/ACD वाहक मार्ग का चयन करता है।",
        subtext: "एसआईपी क्रेडेंशियल • आईपी प्रमाणीकरण",
      },
      step3: {
        step: "03",
        title: "ग्लोबल कैरियर रूट्स",
        description:
          "अनावश्यक फेलओवर पथों के साथ 190+ देशों में प्रत्यक्ष टियर-1 कैरियर इंटरकनेक्ट।",
        subtext: "एसआईपी क्रेडेंशियल • आईपी प्रमाणीकरण",
      },
      step4: {
        step: "04",
        title: "ग्राहक",
        description:
          "अंतिम उपयोगकर्ताओं के हैंडसेट, सॉफ्टफ़ोन या पीएसटीएन गंतव्यों पर स्पष्ट ध्वनि गुणवत्ता।",
        subtext: "एसआईपी क्रेडेंशियल • आईपी प्रमाणीकरण",
      },
    },
    ctaBadge: "आइए अपना वॉइस नेटवर्क बनाएं",
    ctaTitle: "विश्वव्यापी विश्वसनीय वॉइस कनेक्टिविटी के साथ अपने व्यवसाय को शक्ति दें",
    ctaSubtitle:
      "हमें बताएं कि आपको कहाँ कनेक्ट करने की आवश्यकता है। हमारी टीम सही रूटिंग योजना बनाने में मदद करेगी।",
    defaultLocations: [
      { city: "लंदन", phone: "+44 XXXX XXXX" },
      { city: "सिंगापुर", phone: "+65 XXXX XXXX" },
      { city: "न्यूयॉर्क", phone: "+1 XXXX XXXX" },
      { city: "दुबई", phone: "+971 XXXX XXXX" },
    ],
  },

  // Arabic
  ar: {
    heroBadge: "خدمات الصوت",
    heroTitle: "تعزيز اتصالات الأعمال باستخدام حلول الصوت المتقدمة",
    heroDesc:
      "حلول صوتية موثوقة وقابلة للتطوير لتواصل واضح واتصال عالمي ونمو الأعمال.",
    getStarted: "ابدأ الآن",
    contactUs: "اتصل بنا",
    coreServiceBadge: "خدماتنا الأساسية",
    coreServiceTitle: "حلول صوتية مصممة خصيصاً لكل قطاع",
    coreServiceSubtitle:
      "بنية تحتية للاتصالات المعيارية مصممة للصوت عالي التوفر والرسائل والأرقام الافتراضية.",
    services: {
      wholesale: {
        title: "صوت الجملة (Wholesale Voice)",
        description:
          "إنهاء المكالمات الدولية مع خيارات مسارات مصممة حول الجودة والتغطية والتكلفة.",
        bullet1: "اتصالات صوتية عالية الجودة",
        bullet2: "خيارات توجيه مرنة",
        bullet3: "تغطية عالمية واسعة",
        learnMore: "اعرف المزيد",
      },
      aiVoice: {
        title: "صوت الذكاء الاصطناعي (AI Voice)",
        description:
          "تقديم وكلاء صوتيين مدعومين بالذكاء الاصطناعي، واستجابة صوتية تفاعلية وتفاعلات تلقائية للمستخدمين عالمياً.",
        bullet1: "اتصالات صوتية عالية الجودة",
        bullet2: "خيارات توجيه مرنة",
        bullet3: "تغطية عالمية واسعة",
        learnMore: "اعرف المزيد",
      },
      virtualNumbers: {
        title: "الأرقام الافتراضية (DID)",
        description:
          "توحيد الصوت والرسائل القصيرة وواتساب والتحقق في واجهة برمجية REST سهلة ومصممة للنشر الفوري.",
        bullet1: "اتصالات صوتية عالية الجودة",
        bullet2: "خيارات توجيه مرنة",
        bullet3: "تغطية عالمية واسعة",
        learnMore: "اعرف المزيد",
      },
    },
    whyChooseBadge: "لماذا تختار حلول صوت INET",
    whyChooseTitle: "لماذا تختار حلول الصوت لدينا",
    whyChooseSubtitle:
      "مصممة لتوفير اتصالات نقية وتوجيه مرن وأداء صوتي موثوق في الأسواق العالمية.",
    whyCards: {
      secure: {
        title: "اتصالات آمنة وموثوقة",
        description:
          "تم تصميم بنيتنا التحتية لدعم اتصالات صوتية مشفرة وآمنة مع توافر فائق وموثوقية مؤسسية.",
      },
      cloud: {
        title: "بنية تحتية سحابية مرنة",
        description:
          "استفد من حلول الصوت السحابية التي تلغي الحاجة إلى معدات باهظة الثمن وتوفر كفاءة عالية.",
      },
      api: {
        title: "تكامل واجهات برمجة تطبيقات الصوت",
        description:
          "بصفتنا مزوداً موثوقاً لواجهات برمجة الصوت، نساعدك على دمج المكالمات في التطبيقات وCRM.",
      },
      connectivity: {
        title: "اتصال صوتي عالمي",
        description:
          "تتيح حلولنا للشركات التواصل مع العملاء والفرق عبر دول متعددة بجودة نقية وموثوقة.",
      },
      automated: {
        title: "خدمات صوتية مؤتمتة",
        description:
          "تحسين تجارب العملاء من خلال أنظمة IVR والتوجيه التلقائي والتنبيهات الصوتية والتذكيرات.",
      },
    },
    howItWorksBadge: "كيف نعمل",
    howItWorksTitle: "ربط كل مكالمة من خلال التوجيه الصوتي الذكي",
    howItWorksSubtitle:
      "تربط شبكتنا الصوتية العالمية الشركات بمسارات مشغلين موثوقة لتقديم اتصالات واضحة ومتسقة.",
    steps: {
      step1: {
        step: "01",
        title: "الأعمال",
        description:
          "قم بربط SBC أو بدالة PBX أو تطبيق الاتصالات عبر بروتوكول SIP الآمن.",
        subtext: "بيانات اعتماد SIP • مصادقة IP",
      },
      step2: {
        step: "02",
        title: "شبكة iNet العالمية",
        description:
          "يختار محرك التوجيه الذكي مسار المشغل الأقل تأخيراً والأعلى في مقاييس ASR/ACD.",
        subtext: "بيانات اعتماد SIP • مصادقة IP",
      },
      step3: {
        step: "03",
        title: "مسارات المشغلين العالمية",
        description:
          "ربط مباشر مع مشغلي Tier-1 في أكثر من 190 دولة مع مسارات تجاوز فشل متكررة.",
        subtext: "بيانات اعتماد SIP • مصادقة IP",
      },
      step4: {
        step: "04",
        title: "العميل النهائي",
        description:
          "جودة صوت نقية وفائقة الوضوح تصل مباشرة إلى هواتف العملاء وأجهزتهم.",
        subtext: "بيانات اعتماد SIP • مصادقة IP",
      },
    },
    ctaBadge: "دعنا نبني شبكتك الصوتية",
    ctaTitle: "عزز أعمالك باتصالات صوتية موثوقة حول العالم",
    ctaSubtitle:
      "أخبرنا بالأماكن التي تريد الاتصال بها وحجم المكالمات المتوقع، وسيساعدك فريقنا في إعداد الخطة المناسبة.",
    defaultLocations: [
      { city: "لندن", phone: "+44 XXXX XXXX" },
      { city: "سنغافورة", phone: "+65 XXXX XXXX" },
      { city: "نيويورك", phone: "+1 XXXX XXXX" },
      { city: "دبي", phone: "+971 XXXX XXXX" },
    ],
  },
};

export interface RegionVoiceData {
  heroTitleSuffix?: string;
  heroDescOverride?: string;
  locations: Array<{ city: string; phone: string; flag?: string }>;
  whyTitleSuffix?: string;
}

export const regionVoiceData: Record<string, RegionVoiceData> = {
  global: {
    heroTitleSuffix: "",
    heroDescOverride:
      "Reliable, scalable voice solutions for clear communication, global connectivity, and growing businesses.",
    locations: [
      { city: "London", phone: "+44 XXXX XXXX", flag: "🇬🇧" },
      { city: "Singapore", phone: "+44 XXXX XXXX", flag: "🇸🇬" },
      { city: "New York", phone: "+44 XXXX XXXX", flag: "🇺🇸" },
      { city: "Dubai", phone: "+44 XXXX XXXX", flag: "🇦🇪" },
    ],
  },
  india: {
    heroTitleSuffix: " in India",
    heroDescOverride:
      "Best-in-class enterprise voice solutions, premium CLI routes, and high-ASR calling infrastructure across India.",
    locations: [
      { city: "Mumbai", phone: "+91 22 XXXX XXXX", flag: "🇮🇳" },
      { city: "Bengaluru", phone: "+91 80 XXXX XXXX", flag: "🇮🇳" },
      { city: "New Delhi", phone: "+91 11 XXXX XXXX", flag: "🇮🇳" },
      { city: "Hyderabad", phone: "+91 40 XXXX XXXX", flag: "🇮🇳" },
    ],
  },
  china: {
    heroTitleSuffix: " in China",
    heroDescOverride:
      "High-performance voice routes, low latency SIP trunking, and direct tier-1 carrier interconnects across China & APAC.",
    locations: [
      { city: "Beijing", phone: "+86 10 XXXX XXXX", flag: "🇨🇳" },
      { city: "Shanghai", phone: "+86 21 XXXX XXXX", flag: "🇨🇳" },
      { city: "Shenzhen", phone: "+86 755 XXXX XXXX", flag: "🇨🇳" },
      { city: "Guangzhou", phone: "+86 20 XXXX XXXX", flag: "🇨🇳" },
    ],
  },
  usa: {
    heroTitleSuffix: " in the United States",
    heroDescOverride:
      "Ultra-low latency SIP trunking, nationwide local DID coverage, and high-capacity voice termination across North America.",
    locations: [
      { city: "New York", phone: "+1 212 XXXX XXXX", flag: "🇺🇸" },
      { city: "San Francisco", phone: "+1 415 XXXX XXXX", flag: "🇺🇸" },
      { city: "Chicago", phone: "+1 312 XXXX XXXX", flag: "🇺🇸" },
      { city: "Dallas", phone: "+1 214 XXXX XXXX", flag: "🇺🇸" },
    ],
  },
  uk: {
    heroTitleSuffix: " in the United Kingdom",
    heroDescOverride:
      "Ofcom-compliant UK voice termination, premium CLI delivery, and local geographic virtual numbers nationwide.",
    locations: [
      { city: "London", phone: "+44 20 XXXX XXXX", flag: "🇬🇧" },
      { city: "Manchester", phone: "+44 161 XXXX XXXX", flag: "🇬🇧" },
      { city: "Birmingham", phone: "+44 121 XXXX XXXX", flag: "🇬🇧" },
      { city: "Edinburgh", phone: "+44 131 XXXX XXXX", flag: "🇬🇧" },
    ],
  },
  uae: {
    heroTitleSuffix: " in the UAE & Middle East",
    heroDescOverride:
      "Premium voice routes with high ACD and crystal-clear audio quality across the United Arab Emirates and GCC region.",
    locations: [
      { city: "Dubai", phone: "+971 4 XXXX XXXX", flag: "🇦🇪" },
      { city: "Abu Dhabi", phone: "+971 2 XXXX XXXX", flag: "🇦🇪" },
      { city: "Sharjah", phone: "+971 6 XXXX XXXX", flag: "🇦🇪" },
      { city: "Doha", phone: "+974 4 XXXX XXXX", flag: "🇶🇦" },
    ],
  },
  singapore: {
    heroTitleSuffix: " in Singapore",
    heroDescOverride:
      "Asia-Pacific hub voice termination, Tier-1 carrier routes, and high-reliability SIP trunking.",
    locations: [
      { city: "Marina Bay", phone: "+65 6XXX XXXX", flag: "🇸🇬" },
      { city: "Jurong", phone: "+65 6XXX XXXX", flag: "🇸🇬" },
      { city: "Raffles Place", phone: "+65 6XXX XXXX", flag: "🇸🇬" },
      { city: "Changi", phone: "+65 6XXX XXXX", flag: "🇸🇬" },
    ],
  },
  germany: {
    heroTitleSuffix: " in Germany & EU",
    heroDescOverride:
      "GDPR-compliant European voice routing with high-definition audio and redundant carrier interconnects.",
    locations: [
      { city: "Frankfurt", phone: "+49 69 XXXX XXXX", flag: "🇩🇪" },
      { city: "Berlin", phone: "+49 30 XXXX XXXX", flag: "🇩🇪" },
      { city: "Munich", phone: "+49 89 XXXX XXXX", flag: "🇩🇪" },
      { city: "Hamburg", phone: "+49 40 XXXX XXXX", flag: "🇩🇪" },
    ],
  },
  france: {
    heroTitleSuffix: " in France",
    heroDescOverride:
      "High-performance voice connectivity, French national DID numbering, and ARCEP compliant telecommunications.",
    locations: [
      { city: "Paris", phone: "+33 1 XXXX XXXX", flag: "🇫🇷" },
      { city: "Lyon", phone: "+33 4 XXXX XXXX", flag: "🇫🇷" },
      { city: "Marseille", phone: "+33 4 XXXX XXXX", flag: "🇫🇷" },
      { city: "Toulouse", phone: "+33 5 XXXX XXXX", flag: "🇫🇷" },
    ],
  },
  japan: {
    heroTitleSuffix: " in Japan",
    heroDescOverride:
      "High-reliability Japanese voice termination, low packet loss, and crystal clear call quality across Japan.",
    locations: [
      { city: "Tokyo", phone: "+81 3 XXXX XXXX", flag: "🇯🇵" },
      { city: "Osaka", phone: "+81 6 XXXX XXXX", flag: "🇯🇵" },
      { city: "Yokohama", phone: "+81 45 XXXX XXXX", flag: "🇯🇵" },
      { city: "Nagoya", phone: "+81 52 XXXX XXXX", flag: "🇯🇵" },
    ],
  },
};

export const getVoiceTranslations = (
  lang: string,
  regionId?: string,
  countryName?: string,
  phonePrefix?: string,
  _flag?: string
): VoiceTranslations => {
  const base = voiceTranslations[lang] || voiceTranslations["en"];
  const regionSpecific = regionId ? regionVoiceData[regionId.toLowerCase()] : undefined;

  let locations = base.defaultLocations;

  if (regionSpecific?.locations) {
    locations = regionSpecific.locations;
  } else if (countryName && phonePrefix && regionId !== "global") {
    locations = [
      { city: `${countryName} Hub 1`, phone: `${phonePrefix} XXXX XXXX` },
      { city: `${countryName} Hub 2`, phone: `${phonePrefix} XXXX XXXX` },
      { city: `${countryName} Central`, phone: `${phonePrefix} XXXX XXXX` },
      { city: `${countryName} Gateway`, phone: `${phonePrefix} XXXX XXXX` },
    ];
  }

  const titleSuffix = regionSpecific?.heroTitleSuffix
    ? regionSpecific.heroTitleSuffix
    : countryName && regionId !== "global"
    ? ` in ${countryName}`
    : "";

  return {
    ...base,
    heroTitle: `${base.heroTitle}${titleSuffix}`,
    heroDesc: regionSpecific?.heroDescOverride || base.heroDesc,
    whyChooseTitle: `${base.whyChooseTitle}${titleSuffix}`,
    ctaTitle:
      regionId && regionId !== "global" && countryName
        ? `Power Your Business in ${countryName} With Reliable Voice Connectivity`
        : base.ctaTitle,
    defaultLocations: locations,
  };
};

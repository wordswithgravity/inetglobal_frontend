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
  floatingTier1Badge?: { title: string; sub: string };
  ambientInterconnectBadge?: { title: string; sub: string };
  mapLiveLocation?: string;
  postalAddressLabel?: string;
  ctaGuaranteedSla?: string;
  ctaDedicatedNoc?: string;
}

const en: AboutUsTranslation = {
  "heroBadge": "ABOUT INET GLOBAL",
  "heroTitle": "Empowering Global Connections with Carrier-Grade Communications",
  "heroSubtitle": "iNet Global is a premier international telecommunications provider delivering enterprise wholesale voice, secure OTP messaging, virtual DIDs, and next-generation dialer infrastructure across 100+ countries.",
  "contactBtn": "Contact Our Team",
  "servicesBtn": "Explore Services",
  "heroStats": [
    {
      "label": "Countries Connected",
      "value": "100+",
      "sub": "Direct carrier termination"
    },
    {
      "label": "Network Reliability",
      "value": "99.99%",
      "sub": "Enterprise SLA uptime"
    },
    {
      "label": "Monthly Operations",
      "value": "1B+",
      "sub": "Voice minutes & SMS delivered"
    },
    {
      "label": "Global Technical NOC",
      "value": "24/7/365",
      "sub": "Active latency monitoring"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Global Network",
    "status": "Active & Monitored",
    "regionLabel": "Global Enterprise Route",
    "latency": "14ms",
    "card1Title": "Network SLA",
    "card1Val": "99.99%",
    "card1Badge": "Global SLA",
    "card2Title": "Active Routes",
    "card2Val": "100+",
    "card2Badge": "Tier-1 Telco",
    "routesTitle": "Live Route Health",
    "route1": {
      "name": "US & EU SIP Direct Route",
      "quality": "100%",
      "status": "Optimized"
    },
    "route2": {
      "name": "APAC Carrier SMS Gateway",
      "quality": "99.9%",
      "status": "Optimized"
    },
    "route3": {
      "name": "Global OTP High-Priority Route",
      "quality": "99.8%",
      "status": "Optimized"
    },
    "bottomStat1": "Round-Trip Latency",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Global Availability",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "WHO WE ARE",
  "companyTitle": "Built on Global Reliability, Designed for Enterprise Growth",
  "companySubtitle": "Delivering mission-critical telecom services to telecom operators, aggregators, and enterprises worldwide.",
  "companyStory1": "Founded with the ambition to simplify and elevate global telecommunications, iNet Global Services has established direct interconnects with premier Tier-1 carriers across the Americas, Europe, Asia, and the Middle East.",
  "companyStory2": "Today, we handle billions of minutes and messages each month for global fintechs, healthcare providers, ecommerce leaders, and telecom resellers, all powered by our resilient carrier infrastructure.",
  "missionTitle": "Our Mission",
  "missionDesc": "To provide uncompromised voice quality, trusted verification messaging, and seamless virtual numbers that enable enterprises to communicate effortlessly anywhere.",
  "visionTitle": "Our Vision",
  "visionDesc": "To be the world's most dependable global communications infrastructure partner, continually innovating with AI intelligence and carrier-grade performance.",
  "coreValuesTitle": "Principles That Guide Our Operations",
  "values": [
    {
      "title": "Uncompromising Quality",
      "desc": "Zero-compromise CLI voice routes and sub-second OTP messaging guarantees."
    },
    {
      "title": "Carrier-Grade Reliability",
      "desc": "99.99% enterprise uptime backed by proactive 24/7/365 NOC surveillance."
    },
    {
      "title": "Global Scalability",
      "desc": "Seamless infrastructure engineered to scale smoothly alongside your traffic spikes."
    },
    {
      "title": "Transparent Partnership",
      "desc": "Direct billing, live analytics dashboards, and dedicated technical account managers."
    }
  ],
  "whatWeDoBadge": "WHAT WE DO",
  "whatWeDoTitle": "Connecting Every Corner of the World with Unified Telecom",
  "whatWeDoSubtitle": "Built from the ground up to support high-throughput, latency-sensitive business operations.",
  "pillars": [
    {
      "title": "Voice Termination & SIP Trunking",
      "desc": "Carrier-grade international voice termination with guaranteed CLI and low latency.",
      "points": [
        "100+ direct carrier routes",
        "Tier-1 A-Z international termination",
        "Intelligent least-cost routing engine",
        "Redundant SIP trunk gateways"
      ]
    },
    {
      "title": "High-Assurance Messaging & OTP",
      "desc": "Fast and reliable SMS delivery for time-sensitive one-time passwords and transaction notifications.",
      "points": [
        "Sub-2 second OTP delivery",
        "SMPP and REST API connectivity",
        "Real-time delivery receipts (DLR)",
        "Direct mobile operator routes"
      ]
    },
    {
      "title": "Global Virtual Numbers (DID)",
      "desc": "Local, toll-free, and mobile virtual numbers in over 100 countries for global presence.",
      "points": [
        "Instant number provisioning",
        "Two-way voice and SMS capable",
        "Flexible SIP forwarding",
        "Localized caller ID presence"
      ]
    },
    {
      "title": "Cloud Contact Center Dialer",
      "desc": "WebRTC and mobile predictive dialer solutions tailored for sales and support teams.",
      "points": [
        "Predictive & progressive modes",
        "WebRTC in-browser calling",
        "Live supervisor whisper & barge-in",
        "Automated CRM call logging"
      ]
    }
  ],
  "servicesBadge": "OUR SERVICES",
  "servicesTitle": "Complete Telecommunications Suite for Modern Enterprises",
  "servicesSubtitle": "Explore our modular products designed to scale your operations, enhance customer engagement, and lower operational overhead.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Wholesale Voice",
      "desc": "Reliable international voice termination with guaranteed CLI and premium carrier quality.",
      "href": "/wholesale-voice",
      "badge": "Direct Routes",
      "features": [
        "A-Z Global Coverage",
        "Tier-1 Interconnects",
        "Least Cost Routing"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI Voice Solutions",
      "desc": "Intelligent automated voice experiences and enterprise IVR built for modern contact centers.",
      "href": "/voice",
      "badge": "Automated",
      "features": [
        "Natural Voice Interaction",
        "Smart IVR Routing",
        "Real-Time Speech Insights"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Virtual Numbers (DID)",
      "desc": "Local, toll-free, and mobile phone numbers across 100+ nations for global brand presence.",
      "href": "/virtual-did",
      "badge": "100+ Countries",
      "features": [
        "Instant DID Provisioning",
        "Two-Way Voice & SMS",
        "Flexible Call Forwarding"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Wholesale SMS",
      "desc": "High-volume bulk SMS transmission to mobile subscribers across global network operators.",
      "href": "/wholesale-message",
      "badge": "High Throughput",
      "features": [
        "Carrier Direct Routes",
        "SMPP & HTTP Protocol",
        "Global Reach"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS Portal",
      "desc": "Ultra-fast authentication message delivery engineered specifically for banks and fintech platforms.",
      "href": "/otp-sms",
      "badge": "Sub-Second Delivery",
      "features": [
        "99.8% Delivery Rate",
        "Anti-Fraud Routing",
        "Encrypted Transmission"
      ]
    },
    {
      "id": "dialer",
      "title": "Complete Dialer Solution",
      "desc": "WebRTC browser and mobile call center dialer with supervisor monitoring and smart routing.",
      "href": "/dialer",
      "badge": "WebRTC & Mobile",
      "features": [
        "Predictive & Progressive Dialing",
        "Listen, Whisper, Barge-In",
        "Real-Time Wallboard"
      ]
    }
  ],
  "mapBadge": "GLOBAL HEADQUARTERS & REACH",
  "mapTitle": "Our Strategic Presence & Registered Address",
  "mapSubtitle": "With specialized network operation centers and global interconnect points of presence, we support enterprises 24 hours a day, 365 days a year.",
  "officeTitle": "Corporate Headquarters",
  "officeAddressLabel": "Registered Address",
  "officePhoneLabel": "Phone Support",
  "officeEmailLabel": "Email Inquiries",
  "officeSupportLabel": "Support Availability",
  "officeSupportHours": "24/7/365 NOC Support",
  "nocLabel": "Global Network Operation Center",
  "nocDesc": "Proactive latency monitoring, route failover orchestration, and dedicated technical engineers on standby.",
  "mapPinTitle": "iNet Global Operations",
  "mapPinDesc": "Strategic Financial Park hub connected to Tier-1 international carrier transit networks.",
  "ctaTitle": "Ready to Transform Your Global Telecommunication Infrastructure?",
  "ctaSubtitle": "Partner with iNet Global to unlock pristine voice routes, high-throughput messaging, and virtual numbers across the globe.",
  "ctaPrimaryBtn": "Schedule a Consultation",
  "ctaSecondaryBtn": "Explore Our Products",
  "floatingTier1Badge": {
    "title": "Tier-1 Direct Routes",
    "sub": "99.99% Enterprise SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Direct Global Interconnects",
    "sub": "Zero-friction international wholesale transit"
  },
  "mapLiveLocation": "Live Location",
  "postalAddressLabel": "Postal Address",
  "ctaGuaranteedSla": "99.99% Guaranteed SLA",
  "ctaDedicatedNoc": "24/7/365 Dedicated NOC"
};

const es: AboutUsTranslation = {
  "heroBadge": "ACERCA DE INET GLOBAL",
  "heroTitle": "Impulsando Conexiones Globales con Telecomunicaciones de Grado Operador",
  "heroSubtitle": "iNet Global es un proveedor internacional líder de telecomunicaciones que ofrece voz mayorista empresarial, mensajería OTP segura, DIDs virtuales e infraestructura de marcador en más de 100 países.",
  "contactBtn": "Contactar a Nuestro Equipo",
  "servicesBtn": "Explorar Servicios",
  "heroStats": [
    {
      "label": "Países Conectados",
      "value": "100+",
      "sub": "Terminación directa de operador"
    },
    {
      "label": "Confiabilidad de Red",
      "value": "99.99%",
      "sub": "SLA empresarial 99.99%"
    },
    {
      "label": "Operaciones Mensuales",
      "value": "1B+",
      "sub": "Minutos de voz y SMS entregados"
    },
    {
      "label": "NOC Técnico Global",
      "value": "24/7/365",
      "sub": "Monitoreo activo de latencia"
    }
  ],
  "phoneMockup": {
    "appTitle": "Red Global iNet",
    "status": "Activo y Monitoreado",
    "regionLabel": "Ruta Empresarial Global",
    "latency": "14ms",
    "card1Title": "SLA de Red",
    "card1Val": "99.99%",
    "card1Badge": "SLA Global",
    "card2Title": "Rutas Activas",
    "card2Val": "100+",
    "card2Badge": "Operador Tier-1",
    "routesTitle": "Estado de Rutas en Vivo",
    "route1": {
      "name": "Ruta Directa SIP EE.UU. y Europa",
      "quality": "100%",
      "status": "Optimizado"
    },
    "route2": {
      "name": "Pasarela SMS Operador APAC",
      "quality": "99.9%",
      "status": "Optimizado"
    },
    "route3": {
      "name": "Ruta OTP Global Alta Prioridad",
      "quality": "99.8%",
      "status": "Optimizado"
    },
    "bottomStat1": "Latencia de Ida y Vuelta",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Disponibilidad Global",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "QUIÉNES SOMOS",
  "companyTitle": "Construido sobre Confiabilidad Global, Diseñado para el Crecimiento Empresarial",
  "companySubtitle": "Brindando servicios de telecomunicaciones de misión crítica a operadores, agregadores y empresas en todo el mundo.",
  "companyStory1": "Fundada con la ambición de simplificar y elevar las telecomunicaciones globales, iNet Global Services ha establecido interconexiones directas con operadores Tier-1 líderes en América, Europa, Asia y Medio Oriente.",
  "companyStory2": "Hoy en día, gestionamos miles de millones de minutos y mensajes cada mes para empresas fintech globales, salud, líderes de comercio electrónico y revendedores de telecomunicaciones.",
  "missionTitle": "Nuestra Misión",
  "missionDesc": "Proporcionar calidad de voz inigualable, mensajería de verificación confiable y números virtuales sin interrupciones para conectar empresas en cualquier lugar.",
  "visionTitle": "Nuestra Visión",
  "visionDesc": "Ser el socio de infraestructura de comunicaciones globales más confiable del mundo, innovando continuamente con inteligencia artificial y rendimiento de operador.",
  "coreValuesTitle": "Principios que Guían Nuestras Operaciones",
  "values": [
    {
      "title": "Calidad Sin Concesiones",
      "desc": "Rutas de voz CLI sin compromisos y garantías de entrega de mensajes OTP en menos de dos segundos."
    },
    {
      "title": "Confiabilidad de Operador",
      "desc": "99.99% de disponibilidad empresarial respaldada por vigilancia NOC proactiva 24/7/365."
    },
    {
      "title": "Escalabilidad Global",
      "desc": "Infraestructura robusta diseñada para escalar fluidamente junto con sus picos de tráfico."
    },
    {
      "title": "Asociación Transparente",
      "desc": "Facturación directa, paneles de análisis en vivo y gerentes de cuentas técnicas dedicados."
    }
  ],
  "whatWeDoBadge": "QUÉ HACEMOS",
  "whatWeDoTitle": "Conectando Cada Rincón del Mundo con Telecomunicaciones Unificadas",
  "whatWeDoSubtitle": "Diseñado desde cero para soportar operaciones de alto rendimiento y sensibles a la latencia.",
  "pillars": [
    {
      "title": "Terminación de Voz y Enlace SIP",
      "desc": "Terminación de voz internacional de grado operador con CLI garantizado y baja latencia.",
      "points": [
        "Más de 100 rutas directas",
        "Terminación internacional Tier-1 A-Z",
        "Enrutamiento inteligente de menor costo",
        "Pasarelas SIP redundantes"
      ]
    },
    {
      "title": "Mensajería de Alta Garantía y OTP",
      "desc": "Entrega rápida y confiable de SMS para contraseñas de un solo uso y notificaciones de transacciones.",
      "points": [
        "Entrega de OTP en menos de 2 segundos",
        "Conectividad SMPP y API REST",
        "Confirmaciones de entrega (DLR) en tiempo real",
        "Rutas directas con operadores móviles"
      ]
    },
    {
      "title": "Números Virtuales Globales (DID)",
      "desc": "Números locales, gratuitos y móviles en más de 100 países para presencia global inmediata.",
      "points": [
        "Aprovisionamiento instantáneo",
        "Capacidad de voz y SMS bidireccional",
        "Desvío SIP flexible",
        "Identificador de llamadas local"
      ]
    },
    {
      "title": "Marcador de Centro de Contacto en la Nube",
      "desc": "Soluciones de marcador predictivo WebRTC y móvil para equipos de ventas y soporte.",
      "points": [
        "Modos predictivo y progresivo",
        "Llamadas WebRTC en el navegador",
        "Monitoreo en vivo para supervisores",
        "Registro automático en CRM"
      ]
    }
  ],
  "servicesBadge": "NUESTROS SERVICIOS",
  "servicesTitle": "Suite Completa de Telecomunicaciones para Empresas Modernas",
  "servicesSubtitle": "Explore nuestros productos modulares diseñados para escalar sus operaciones y optimizar costos.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Voz Mayorista",
      "desc": "Terminación de voz internacional confiable con CLI garantizado y calidad de operador premium.",
      "href": "/wholesale-voice",
      "badge": "Rutas Directas",
      "features": [
        "Cobertura Global A-Z",
        "Interconexiones Tier-1",
        "Enrutamiento Eficiente"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Soluciones de Voz con IA",
      "desc": "Experiencias de voz automatizadas inteligentes e IVR empresarial para centros de contacto modernos.",
      "href": "/voice",
      "badge": "Automatizado",
      "features": [
        "Interacción Natural de Voz",
        "Enrutamiento IVR Inteligente",
        "Análisis de Voz en Vivo"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Números Virtuales (DID)",
      "desc": "Números locales, gratuitos y móviles en más de 100 países para presencia global de marca.",
      "href": "/virtual-did",
      "badge": "100+ Países",
      "features": [
        "Aprovisionamiento Instantáneo",
        "Voz y SMS Bidireccional",
        "Desvío Flexible"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS Mayorista",
      "desc": "Transmisión masiva de SMS a suscriptores móviles de operadores globales.",
      "href": "/wholesale-message",
      "badge": "Alto Rendimiento",
      "features": [
        "Rutas Directas de Operador",
        "Protocolos SMPP y HTTP",
        "Alcance Global"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portal de SMS OTP",
      "desc": "Entrega ultrarrápida de mensajes de autenticación para bancos y plataformas fintech.",
      "href": "/otp-sms",
      "badge": "Entrega Inmediata",
      "features": [
        "Tasa de Entrega del 99.8%",
        "Rutas Antifraude",
        "Transmisión Cifrada"
      ]
    },
    {
      "id": "dialer",
      "title": "Solución Integral de Marcador",
      "desc": "Marcador de centro de llamadas WebRTC y móvil con monitoreo de supervisores y enrutamiento inteligente.",
      "href": "/dialer",
      "badge": "WebRTC y Móvil",
      "features": [
        "Marcación Predictiva y Progresiva",
        "Escucha e Intervención en Vivo",
        "Panel en Tiempo Real"
      ]
    }
  ],
  "mapBadge": "SEDE GLOBAL Y ALCANCE",
  "mapTitle": "Nuestra Presencia Estratégica y Dirección Registrada",
  "mapSubtitle": "Con centros especializados de operaciones de red y puntos de presencia globales, respaldamos a las empresas las 24 horas del día, los 365 días del año.",
  "officeTitle": "Sede Corporativa",
  "officeAddressLabel": "Dirección Registrada",
  "officePhoneLabel": "Soporte Telefónico",
  "officeEmailLabel": "Consultas por Correo",
  "officeSupportLabel": "Disponibilidad de Soporte",
  "officeSupportHours": "Soporte NOC 24/7/365",
  "nocLabel": "Centro Global de Operaciones de Red",
  "nocDesc": "Monitoreo proactivo de latencia, respaldo de rutas e ingenieros dedicados disponibles.",
  "mapPinTitle": "Operaciones Globales de iNet",
  "mapPinDesc": "Centro estratégico en Financial Park conectado a redes internacionales de tránsito Tier-1.",
  "ctaTitle": "¿Listo para Transformar su Infraestructura Global de Telecomunicaciones?",
  "ctaSubtitle": "Asóciese con iNet Global para acceder a rutas de voz prístinas, mensajería de alta capacidad y números virtuales en todo el mundo.",
  "ctaPrimaryBtn": "Programar Consulta",
  "ctaSecondaryBtn": "Explorar Productos",
  "floatingTier1Badge": {
    "title": "Rutas Directas Tier-1",
    "sub": "SLA Empresarial 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Interconexiones Globales Directas",
    "sub": "Tránsito mayorista internacional fluido"
  },
  "mapLiveLocation": "Ubicación en Vivo",
  "postalAddressLabel": "Dirección Postal",
  "ctaGuaranteedSla": "SLA Garantizado del 99.99%",
  "ctaDedicatedNoc": "NOC Dedicado 24/7/365"
};

const zh: AboutUsTranslation = {
  "heroBadge": "关于 INET GLOBAL",
  "heroTitle": "以电信运营商级基础设施赋能全球企业通信",
  "heroSubtitle": "iNet Global 是一家卓越的国际电信基础设施服务商，为全球100多个国家和地区提供大容量批发语音、高可靠OTP验证码短信、全球虚拟DID号码和智能呼叫中心系统。",
  "contactBtn": "联系我们团队",
  "servicesBtn": "探索全部服务",
  "heroStats": [
    {
      "label": "覆盖国家与地区",
      "value": "100+",
      "sub": "一级运营商直连落地"
    },
    {
      "label": "网络高可用性",
      "value": "99.99%",
      "sub": "企业级 SLA 99.99%"
    },
    {
      "label": "月均通信业务量",
      "value": "1B+",
      "sub": "通话分钟与短信送达量"
    },
    {
      "label": "全球技术运维中心",
      "value": "24/7/365",
      "sub": "全天候活跃延迟监控"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet 全球网络监控",
    "status": "实时监控运行中",
    "regionLabel": "全球企业级路由",
    "latency": "14ms",
    "card1Title": "网络可用率",
    "card1Val": "99.99%",
    "card1Badge": "全球企业SLA",
    "card2Title": "在线活跃路由",
    "card2Val": "100+",
    "card2Badge": "一级电信运营商",
    "routesTitle": "核心路由健康度",
    "route1": {
      "name": "欧美 SIP 直连低延迟路由",
      "quality": "100%",
      "status": "已优化"
    },
    "route2": {
      "name": "亚太运营商短信综合网关",
      "quality": "99.9%",
      "status": "已优化"
    },
    "route3": {
      "name": "全球高优先级 OTP 验证通道",
      "quality": "99.8%",
      "status": "已优化"
    },
    "bottomStat1": "往返通信延迟",
    "bottomStat1Val": "14ms",
    "bottomStat2": "全球系统可用度",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "我们是谁",
  "companyTitle": "根植于全球可靠品质，专为企业规模化增长打造",
  "companySubtitle": "为全球电信运营商、通信集成商及跨国企业提供高标准的关键任务通信基础设施。",
  "companyStory1": "iNet Global 秉持着简化并重塑全球电信互联的愿景，与北美、欧洲、亚太及中东顶级电信运营商建立了直接互联互通机制。",
  "companyStory2": "如今，我们每月为全球知名金融科技、医疗健康、跨境电商龙头及电信转售商承载数十亿分钟的通话与海量验证信息，提供坚如磐石的通信保障。",
  "missionTitle": "我们的使命",
  "missionDesc": "提供卓越纯净的通话音质、极速可信的验证短信以及弹性的全球虚拟号码，助力企业在全球任何角落无缝沟通。",
  "visionTitle": "我们的愿景",
  "visionDesc": "成为全球最值得信赖的综合通信基础设施伙伴，持续以AI智能科技与电信级性能树立行业标杆。",
  "coreValuesTitle": "指引我们前行的核心准则",
  "values": [
    {
      "title": "追求极致品质",
      "desc": "保障纯CLI显号路由质量，实现秒级高到达率的验证码与交易短信发送。"
    },
    {
      "title": "电信级高可靠",
      "desc": "依托7x24小时全天候 NOC 网络监控中心，提供 99.99% 的企业运行可用性保障。"
    },
    {
      "title": "全球弹性扩展",
      "desc": "高并发架构从容应对业务流量高峰，无缝契合企业出海增长节奏。"
    },
    {
      "title": "透明合作共赢",
      "desc": "直观对账计费体系、实时数据可视化分析以及专属资深技术顾问支持。"
    }
  ],
  "whatWeDoBadge": "业务范围",
  "whatWeDoTitle": "以统一电信架构无缝连接全球各个角落",
  "whatWeDoSubtitle": "专为大通量、低延迟要求的高敏捷企业业务场景量身打造。",
  "pillars": [
    {
      "title": "国际语音落地与 SIP 中继",
      "desc": "运营商级国际SIP中继，具备灵活的高品质路由、经过验证的CLI覆盖与优化成本。",
      "points": [
        "100+ 一级直连运营商路由",
        "全球 A-Z 国际呼叫全覆盖",
        "智能最经济路由 (LCR) 引擎",
        "多活冗余 SIP 网关节点"
      ]
    },
    {
      "title": "高可靠验证码与业务通知短信",
      "desc": "专为时效敏感型一次性密码 (OTP) 和金融交易通知打造的极速短信送达服务。",
      "points": [
        "低于2秒极速 OTP 到达",
        "SMPP 与 RESTful API 双重对接",
        "实时状态报告 (DLR) 反馈",
        "直通目的地移动运营商通道"
      ]
    },
    {
      "title": "全球虚拟号码 (DID)",
      "desc": "覆盖全球100多个国家和地区的本地号码、免费800号码及移动号码，助您建立本土形象。",
      "points": [
        "即时号码申请与开通",
        "双向语音与短信全面支持",
        "灵活 SIP 呼叫转接设置",
        "本地主叫号码身份展示"
      ]
    },
    {
      "title": "云呼叫中心智能拨号系统",
      "desc": "基于 WebRTC 的网页与移动端预测式智能外呼系统，专为电销和客服团队赋能。",
      "points": [
        "预测式与渐进式外呼模式",
        "浏览器免安装 WebRTC 高清通话",
        "实时班长监听、耳语与强插",
        "自动关联 CRM 客户通话记录"
      ]
    }
  ],
  "servicesBadge": "产品中心",
  "servicesTitle": "为现代企业量身定制的完整电信级通信套件",
  "servicesSubtitle": "探索我们模块化的高性能产品，助力拓展海外版图、提升客户转化并降低运营成本。",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "国际批发语音",
      "desc": "高质量国际语音终止服务，稳定真实的 CLI 透传与顶级运营商路由。",
      "href": "/wholesale-voice",
      "badge": "直连路由",
      "features": [
        "A-Z 全球无缝覆盖",
        "一级运营商直连",
        "低延迟经济路由"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI 智能语音方案",
      "desc": "智能自动化语音交互与企业智能IVR系统，革新现代联络中心客户体验。",
      "href": "/voice",
      "badge": "智能自动化",
      "features": [
        "自然人声交互体验",
        "智能 IVR 路径分配",
        "实时语音数据洞察"
      ]
    },
    {
      "id": "virtual-did",
      "title": "虚拟 DID 号码",
      "desc": "在100多个国家和地区构建本地化品牌电话热线，增强客户信任度。",
      "href": "/virtual-did",
      "badge": "覆盖100+国",
      "features": [
        "快速号码调配",
        "双向呼叫与短信",
        "多终端灵活转接"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "批发商业短信",
      "desc": "直达全球主要移动网络的高并发批量短信通道，保障信息快速传递。",
      "href": "/wholesale-message",
      "badge": "高吞吐量",
      "features": [
        "直连通道保障",
        "SMPP 及 HTTP 协议",
        "全球广泛覆盖"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP 短信认证平台",
      "desc": "针对银行金融、跨境电商定制的高安全、极速动态验证码发送平台。",
      "href": "/otp-sms",
      "badge": "秒级极速送达",
      "features": [
        "99.8% 高送达率",
        "防刷防欺诈路由",
        "端到端加密传输"
      ]
    },
    {
      "id": "dialer",
      "title": "呼叫中心拨号方案",
      "desc": "免安装 WebRTC 软电话与移动端拨号器，配备全方位质检监控与仪表盘。",
      "href": "/dialer",
      "badge": "WebRTC与移动端",
      "features": [
        "智能预测式拨号",
        "实时监听与强插",
        "实时坐席监控看板"
      ]
    }
  ],
  "mapBadge": "全球总部与网络覆盖",
  "mapTitle": "全球战略布局与法定注册办公地",
  "mapSubtitle": "依托专业化全球网络运维中心 (NOC) 和核心网络节点，我们为全球客户提供365天全天候不间断技术支持。",
  "officeTitle": "企业全球总部",
  "officeAddressLabel": "法定注册地址",
  "officePhoneLabel": "电话咨询",
  "officeEmailLabel": "商务邮箱",
  "officeSupportLabel": "支持响应时间",
  "officeSupportHours": "7x24小时 全天候 NOC",
  "nocLabel": "全球网络运维监控中心",
  "nocDesc": "前瞻性延迟监控、自动路由故障倒换机制与专属技术专家值守。",
  "mapPinTitle": "iNet Global 运营中枢",
  "mapPinDesc": "设立于国际金融核心枢纽，无缝直通全球一级电信骨干网。",
  "ctaTitle": "准备好全面升级您的全球通信基础设施了吗？",
  "ctaSubtitle": "携手 iNet Global，开启高清通话、高到达率短信与全球虚拟号码的出海通信新体验。",
  "ctaPrimaryBtn": "预约业务咨询",
  "ctaSecondaryBtn": "浏览全部产品",
  "floatingTier1Badge": {
    "title": "一级运营商直连路由",
    "sub": "99.99% 企业级 SLA"
  },
  "ambientInterconnectBadge": {
    "title": "全球直连互联互通",
    "sub": "无缝国际批发通信中继"
  },
  "mapLiveLocation": "实时地理位置",
  "postalAddressLabel": "详细邮政地址",
  "ctaGuaranteedSla": "99.99% 保证 SLA 服务承诺",
  "ctaDedicatedNoc": "7x24小时 专属网络运维支持"
};

const hi: AboutUsTranslation = {
  "heroBadge": "INET GLOBAL के बारे में",
  "heroTitle": "कैरियर-ग्रेड इंफ्रास्ट्रक्चर के साथ वैश्विक संचार को सशक्त बनाना",
  "heroSubtitle": "iNet Global एक प्रमुख अंतरराष्ट्रीय दूरसंचार प्रदाता है जो 100 से अधिक देशों में थोक वॉयस, सुरक्षित OTP मैसेजिंग, वर्चुअल DIDs और आधुनिक डायलर तकनीक प्रदान करता है।",
  "contactBtn": "हमारी टीम से संपर्क करें",
  "servicesBtn": "सेवाएं देखें",
  "heroStats": [
    {
      "label": "जुड़े हुए देश",
      "value": "100+",
      "sub": "सीधा ऑपरेटर टर्मिनेशन"
    },
    {
      "label": "नेटवर्क विश्वसनीयता",
      "value": "99.99%",
      "sub": "एंटरप्राइज एसएलए 99.99%"
    },
    {
      "label": "मासिक वॉल्यूम",
      "value": "1B+",
      "sub": "करोड़ों वॉयस मिनट और एसएमएस"
    },
    {
      "label": "ग्लोबल टेक्निकल एनओसी",
      "value": "24/7/365",
      "sub": "24/7 सक्रिय लेटेंसी मॉनिटरिंग"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet ग्लोबल नेटवर्क",
    "status": "सक्रिय और मॉनिटर्ड",
    "regionLabel": "ग्लोबल एंटरप्राइज रूट",
    "latency": "14ms",
    "card1Title": "नेटवर्क एसएलए",
    "card1Val": "99.99%",
    "card1Badge": "ग्लोबल एसएलए",
    "card2Title": "सक्रिय रूट्स",
    "card2Val": "100+",
    "card2Badge": "टियर-1 टेल्को",
    "routesTitle": "लाइव रूट स्थिति",
    "route1": {
      "name": "यूएस और ईयू एसआईपी डायरेक्ट रूट",
      "quality": "100%",
      "status": "अनुकूलित"
    },
    "route2": {
      "name": "एपीएसी ऑपरेटर एसएमएस गेटवे",
      "quality": "99.9%",
      "status": "अनुकूलित"
    },
    "route3": {
      "name": "ग्लोबल ओटीपी हाई-प्रायोरिटी रूट",
      "quality": "99.8%",
      "status": "अनुकूलित"
    },
    "bottomStat1": "राउंड-ट्रिप लेटेंसी",
    "bottomStat1Val": "14ms",
    "bottomStat2": "वैश्विक उपलब्धता",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "हम कौन हैं",
  "companyTitle": "वैश्विक विश्वसनीयता पर आधारित, उद्यम विकास के लिए निर्मित",
  "companySubtitle": "दुनिया भर के ऑपरेटरों, एग्रीगेटर्स और उद्यमों को मिशन-क्रिटिकल दूरसंचार सेवाएं प्रदान करना।",
  "companyStory1": "वैश्विक दूरसंचार को सरल और उन्नत बनाने के उद्देश्य से स्थापित, iNet Global Services ने अमेरिका, यूरोप, एशिया और मध्य पूर्व में शीर्ष टियर-1 ऑपरेटरों के साथ सीधा संपर्क स्थापित किया है।",
  "companyStory2": "आज हम वैश्विक फिनटेक, स्वास्थ्य सेवा, ई-कॉमर्स और दूरसंचार कंपनियों के लिए प्रति माह अरबों मिनट और संदेशों को सफलतापूर्वक संचालित करते हैं।",
  "missionTitle": "हमारा मिशन",
  "missionDesc": "स्पष्ट वॉयस गुणवत्ता, सुरक्षित सत्यापन संदेश और निर्बाध वर्चुअल नंबर प्रदान करना ताकि उद्यम कहीं भी आसानी से संवाद कर सकें।",
  "visionTitle": "हमारा दृष्टिकोण",
  "visionDesc": "दुनिया का सबसे भरोसेमंद वैश्विक दूरसंचार अवसंरचना साझेदार बनना और निरंतर नई तकनीक पेश करना।",
  "coreValuesTitle": "सिद्धांत जो हमारे संचालन का मार्गदर्शन करते हैं",
  "values": [
    {
      "title": "अपरिमित गुणवत्ता",
      "desc": "सत्यापित सीएलआई वॉयस रूट्स और दो सेकंड से कम समय में ओटीपी डिलीवरी की गारंटी।"
    },
    {
      "title": "कैरियर-ग्रेड विश्वसनीयता",
      "desc": "24/7/365 सक्रिय एनओसी निगरानी द्वारा समर्थित 99.99% अपटाइम।"
    },
    {
      "title": "वैश्विक स्केलेबिलिटी",
      "desc": "आपके व्यावसायिक ट्रैफ़िक के साथ सुचारू रूप से विस्तार करने के लिए निर्मित अवसंरचना।"
    },
    {
      "title": "पारदर्शी साझेदारी",
      "desc": "सटीक बिलिंग, लाइव एनालिटिक्स डैशबोर्ड और समर्पित तकनीकी खाता प्रबंधक।"
    }
  ],
  "whatWeDoBadge": "हम क्या करते हैं",
  "whatWeDoTitle": "एकीकृत दूरसंचार के साथ दुनिया के हर कोने को जोड़ना",
  "whatWeDoSubtitle": "उच्च-थ्रूपुट और समय-संवेदनशील व्यावसायिक कार्यों का समर्थन करने के लिए निर्मित।",
  "pillars": [
    {
      "title": "वॉयस टर्मिनेशन और एसआईपी ट्रंकिंग",
      "desc": "गारंटीकृत सीएलआई और कम लेटेंसी के साथ अंतरराष्ट्रीय कैरियर-ग्रेड वॉयस सेवा।",
      "points": [
        "100+ सीधे कैरियर रूट्स",
        "टियर-1 ए-टू-जेड अंतरराष्ट्रीय टर्मिनेशन",
        "इंटेलिजेंट लीस्ट-कॉस्ट रूटिंग",
        "रेडंडेंट एसआईपी गेटवे"
      ]
    },
    {
      "title": "उच्च-आश्वासन मैसेजिंग और ओटीपी",
      "desc": "ओटीपी और महत्वपूर्ण लेनदेन सूचनाओं के लिए तेज़ और विश्वसनीय एसएमएस डिलीवरी।",
      "points": [
        "2 सेकंड के भीतर ओटीपी डिलीवरी",
        "एसएमपीपी और रेस्ट एपीआई कनेक्टिविटी",
        "रीयल-टाइम डिलीवरी रिपोर्ट (DLR)",
        "मोबाइल ऑपरेटरों के साथ सीधे रूट्स"
      ]
    },
    {
      "title": "ग्लोबल वर्चुअल नंबर (DID)",
      "desc": "वैश्विक उपस्थिति के लिए 100 से अधिक देशों में स्थानीय, टोल-फ्री और मोबाइल नंबर।",
      "points": [
        "तत्काल नंबर एक्टिवेशन",
        "इनबाउंड और आउटबाउंड वॉयस व एसएमएस",
        "लचीला एसआईपी फॉरवर्डिंग",
        "स्थानीय कॉलर आईडी उपस्थिति"
      ]
    },
    {
      "title": "क्लाउड कांटेक्ट सेंटर डायलर",
      "desc": "बिक्री और सहायता टीमों के लिए अनुकूलित वेबआरटीसी और मोबाइल प्रेडिक्टिव डायलर।",
      "points": [
        "प्रेडिक्टिव और प्रोग्रेसिव डायलिंग",
        "ब्राउज़र में सीधे वेबआरटीसी कॉलिंग",
        "लाइव सुपरवाइजर लिसन और बारगे-इन",
        "स्वचालित सीआरएम इंटीग्रेशन"
      ]
    }
  ],
  "servicesBadge": "हमारी सेवाएं",
  "servicesTitle": "आधुनिक उद्यमों के लिए संपूर्ण दूरसंचार उत्पाद",
  "servicesSubtitle": "अपने व्यवसाय के विस्तार और संचालन को सुगम बनाने के लिए हमारे मॉड्यूलर उत्पादों को देखें।",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "होलसेल वॉयस",
      "desc": "गारंटीकृत सीएलआई और प्रीमियम कैरियर गुणवत्ता के साथ अंतरराष्ट्रीय वॉयस टर्मिनेशन।",
      "href": "/wholesale-voice",
      "badge": "डायरेक्ट रूट्स",
      "features": [
        "ए-टू-जेड ग्लोबल कवरेज",
        "टियर-1 इंटरकनेक्ट्स",
        "किफायती रूटिंग"
      ]
    },
    {
      "id": "ai-voice",
      "title": "एआई वॉयस सॉल्यूशंस",
      "desc": "आधुनिक संपर्क केंद्रों के लिए बुद्धिमान स्वचालित वॉयस और एंटरप्राइज आईवीआर।",
      "href": "/voice",
      "badge": "स्वचालित",
      "features": [
        "प्राकृतिक वॉयस संवाद",
        "स्मार्ट आईवीआर रूटिंग",
        "रीयल-टाइम वॉयस अंतर्दृष्टि"
      ]
    },
    {
      "id": "virtual-did",
      "title": "वर्चुअल नंबर (DID)",
      "desc": "वैश्विक ब्रांड उपस्थिति के लिए 100+ देशों में स्थानीय और टोल-फ्री फोन नंबर।",
      "href": "/virtual-did",
      "badge": "100+ देश",
      "features": [
        "त्वरित डीआईडी सक्रियण",
        "टू-वे वॉयस और एसएमएस",
        "लचीला कॉल फॉरवर्डिंग"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "होलसेल एसएमएस",
      "desc": "दुनिया भर के ऑपरेटरों के मोबाइल ग्राहकों तक बल्क एसएमएस का सुरक्षित प्रेषण।",
      "href": "/wholesale-message",
      "badge": "उच्च थ्रूपुट",
      "features": [
        "कैरियर डायरेक्ट रूट्स",
        "एसएमपीपी और एचटीटीपी प्रोटोकॉल",
        "वैश्विक पहुंच"
      ]
    },
    {
      "id": "otp-sms",
      "title": "ओटीपी एसएमएस पोर्टल",
      "desc": "बैंकों और फिनटेक प्लेटफॉर्मों के लिए विशेष रूप से निर्मित तेज़ प्रमाणीकरण संदेश।",
      "href": "/otp-sms",
      "badge": "त्वरित डिलीवरी",
      "features": [
        "99.8% डिलीवरी दर",
        "धोखाधड़ी-रोधी रूटिंग",
        "एन्क्रिप्टेड ट्रांसमिशन"
      ]
    },
    {
      "id": "dialer",
      "title": "डायलर समाधान",
      "desc": "सुपरवाइजर निगरानी और स्मार्ट रूटिंग के साथ वेबआरटीसी और मोबाइल डायलर।",
      "href": "/dialer",
      "badge": "WebRTC और मोबाइल",
      "features": [
        "प्रेडिक्टिव डायलिंग",
        "लाइव कॉल मॉनिटरिंग",
        "रीयल-टाइम वॉलपैनल"
      ]
    }
  ],
  "mapBadge": "वैश्विक मुख्यालय और नेटवर्क",
  "mapTitle": "हमारी रणनीतिक उपस्थिति और पंजीकृत पता",
  "mapSubtitle": "विशेष नेटवर्क संचालन केंद्रों के साथ, हम साल के 365 दिन 24 घंटे उद्यमों को समर्थन देते हैं।",
  "officeTitle": "कॉर्पोरेट मुख्यालय",
  "officeAddressLabel": "पंजीकृत पता",
  "officePhoneLabel": "फोन सहायता",
  "officeEmailLabel": "ईमेल पूछताछ",
  "officeSupportLabel": "सहायता उपलब्धता",
  "officeSupportHours": "24/7/365 एनओसी सपोर्ट",
  "nocLabel": "ग्लोबल नेटवर्क ऑपरेशन सेंटर",
  "nocDesc": "सक्रिय लेटेंसी मॉनिटरिंग और 24 घंटे उपस्थित तकनीकी इंजीनियर।",
  "mapPinTitle": "iNet ग्लोबल ऑपरेशंस",
  "mapPinDesc": "अंतरराष्ट्रीय टियर-1 कैरियर नेटवर्क से जुड़ा रणनीतिक फाइनेंशियल पार्क हब।",
  "ctaTitle": "क्या आप अपने दूरसंचार इंफ्रास्ट्रक्चर को अपग्रेड करने के लिए तैयार हैं?",
  "ctaSubtitle": "क्रिस्टल क्लियर वॉयस और तेज़ एसएमएस का अनुभव करने के लिए iNet Global से जुड़ें।",
  "ctaPrimaryBtn": "परामर्श शेड्यूल करें",
  "ctaSecondaryBtn": "उत्पाद देखें",
  "floatingTier1Badge": {
    "title": "टियर-1 डायरेक्ट रूट्स",
    "sub": "99.99% एंटरप्राइज एसएलए"
  },
  "ambientInterconnectBadge": {
    "title": "डायरेक्ट ग्लोबल इंटरकनेक्ट्स",
    "sub": "निर्बाध अंतरराष्ट्रीय थोक संचार"
  },
  "mapLiveLocation": "लाइव लोकेशन",
  "postalAddressLabel": "डाक पता",
  "ctaGuaranteedSla": "99.99% गारंटीकृत एसएलए",
  "ctaDedicatedNoc": "24/7/365 समर्पित एनओसी"
};

const ar: AboutUsTranslation = {
  "heroBadge": "عن آي نت جلوبال",
  "heroTitle": "تمكين الاتصالات العالمية ببنية تحتية بمعايير مشغلي الاتصالات",
  "heroSubtitle": "تعد آي نت جلوبال مزوداً عالمياً رائداً في خدمات الاتصالات الصوتية بالجملة ورسائل OTP الآمنة والأرقام الافتراضية في أكثر من 100 دولة.",
  "contactBtn": "اتصل بفريقنا",
  "servicesBtn": "استكشف الخدمات",
  "heroStats": [
    {
      "label": "الدول المتصلة",
      "value": "100+",
      "sub": "إنهاء مباشر مع المشغلين"
    },
    {
      "label": "موثوقية الشبكة",
      "value": "99.99%",
      "sub": "اتفاقية مستوى خدمة 99.99%"
    },
    {
      "label": "العمليات الشهرية",
      "value": "1B+",
      "sub": "مليارات دقائق الصوت والرسائل"
    },
    {
      "label": "مركز العمليات الفني العالمي",
      "value": "24/7/365",
      "sub": "مراقبة نشطة لزمن الاستجابة"
    }
  ],
  "phoneMockup": {
    "appTitle": "شبكة آي نت جلوبال",
    "status": "نشط وتحت المراقبة",
    "regionLabel": "مسار المؤسسات العالمي",
    "latency": "14ms",
    "card1Title": "مستوى الخدمة",
    "card1Val": "99.99%",
    "card1Badge": "SLA عالمي",
    "card2Title": "المسارات النشطة",
    "card2Val": "100+",
    "card2Badge": "مشغل Tier-1",
    "routesTitle": "حالة المسارات المباشرة",
    "route1": {
      "name": "مسار SIP المباشر لأمريكا وأوروبا",
      "quality": "100%",
      "status": "محسّن"
    },
    "route2": {
      "name": "بوابة رسائل المشغلين لآسيا",
      "quality": "99.9%",
      "status": "محسّن"
    },
    "route3": {
      "name": "مسار OTP ذو الأولوية القصوى",
      "quality": "99.8%",
      "status": "محسّن"
    },
    "bottomStat1": "زمن الاستجابة ذهاباً وإياباً",
    "bottomStat1Val": "14ms",
    "bottomStat2": "التوافر العالمي",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "من نحن",
  "companyTitle": "بنيت على الموثوقية العالمية ومصممة للنمو المؤسسي",
  "companySubtitle": "تقديم خدمات اتصالات حيوية لمشغلي شبكات الهاتف والشركات في جميع أنحاء العالم.",
  "companyStory1": "تأسست آي نت جلوبال بهدف تبسيط وتطوير قطاع الاتصالات الدولي، وأقامت ربطاً مباشراً مع كبرى شبكات الاتصالات من الفئة الأولى في أمريكا وأوروبا وآسيا والشرق الأوسط.",
  "companyStory2": "ندير اليوم مليارات الدقائق والرسائل شهرياً لشركات التكنولوجيا المالية والرعاية الصحية والتجارة الإلكترونية العالمية بأعلى معايير الأمان.",
  "missionTitle": "مهمتنا",
  "missionDesc": "توفير جودة صوت فائقة ورسائل تحقق موثوقة وأرقام افتراضية مرنة لتمكين المؤسسات من التواصل بسلاسة في أي مكان.",
  "visionTitle": "رؤيتنا",
  "visionDesc": "أن نكون الشريك الأكثر موثوقية في البنية التحتية للاتصالات العالمية، مع الابتكار المستمر في الذكاء الاصطناعي.",
  "coreValuesTitle": "المبادئ التوجيهية لعملياتنا",
  "values": [
    {
      "title": "جودة لا تقبل المساومة",
      "desc": "مسارات صوتية معتمدة مع هوية المتصل وضمان تسليم رسائل التحقق في أقل من ثانيتين."
    },
    {
      "title": "موثوقية المشغلين",
      "desc": "جاهزية تشغيل بنسبة 99.99% مدعومة بمراقبة استباقية على مدار الساعة طوال أيام العام."
    },
    {
      "title": "قابلية التوسع العالمي",
      "desc": "بنية تحتية مصممة للتعامل مع ذروة حركة المرور دون أي تأخير."
    },
    {
      "title": "شراكة قائمة على الشفافية",
      "desc": "فواتير دقيقة ولوحات تحليلات مباشرة ومديرو حسابات فنية مخصصون."
    }
  ],
  "whatWeDoBadge": "ماذا نقدم",
  "whatWeDoTitle": "ربط كل ركن من أركان العالم عبر شبكة اتصالات موحدة",
  "whatWeDoSubtitle": "بنيت خصيصاً لدعم العمليات التجارية الحساسة لزمن الاستجابة وعالية الكثافة.",
  "pillars": [
    {
      "title": "إنهاء المكالمات الصوتية وربط SIP",
      "desc": "إنهاء صوتي دولي بمعايير شركات الاتصالات مع هوية متصل مضمونة وزمن استجابة منخفض.",
      "points": [
        "أكثر من 100 مسار مباشر",
        "إنهاء دولي من الدرجة الأولى A-Z",
        "محرك التوجيه الذكي الأقل تكلفة",
        "بوابات SIP احتياطية"
      ]
    },
    {
      "title": "مراسلة عالية الأمان ورموز OTP",
      "desc": "تسليم سريع وموثوق لرسائل SMS لكلمات المرور لمرة واحدة وتنبيهات المعاملات.",
      "points": [
        "تسليم OTP في أقل من ثانيتين",
        "اتصال عبر SMPP وREST API",
        "إشعارات تسليم فورية (DLR)",
        "مسارات مباشرة مع مشغلي المحمول"
      ]
    },
    {
      "title": "أرقام افتراضية دولية (DID)",
      "desc": "أرقام محلية ومجانية وجوال في أكثر من 100 دولة لحضور تجاري عالمي.",
      "points": [
        "توفير فوري للأرقام",
        "دعم الصوت والرسائل في الاتجاهين",
        "تحويل مكالمات مرن عبر SIP",
        "هوية متصل محلية"
      ]
    },
    {
      "title": "برنامج الاتصال السحابي لمراكز الاتصال",
      "desc": "حلول اتصال تنبؤية عبر المتصفح والهاتف المحمول لفرق المبيعات والدعم.",
      "points": [
        "أوضاع اتصال تنبؤية وتدريجية",
        "اتصال مباشر عبر المتصفح WebRTC",
        "مراقبة حية للمشرفين والتدخل السريع",
        "تسجيل المكالمات تلقائياً في CRM"
      ]
    }
  ],
  "servicesBadge": "خدماتنا الأساسية",
  "servicesTitle": "حزمة اتصالات شاملة مصممة للشركات الحديثة",
  "servicesSubtitle": "استكشف منتجاتنا المودولية المصممة لتمكين عملياتك وتعزيز تفاعل العملاء وخفض التكاليف التشغيلية.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "الصوت بالجملة",
      "desc": "إنهاء صوتي دولي موثوق مع CLI معتمد وجودة مشغلين ممتازة.",
      "href": "/wholesale-voice",
      "badge": "مسارات مباشرة",
      "features": [
        "تغطية عالمية A-Z",
        "ربط مباشر Tier-1",
        "توجيه اقتصادي ذكي"
      ]
    },
    {
      "id": "ai-voice",
      "title": "حلول الصوت بالذكاء الاصطناعي",
      "desc": "تجارب صوتية آلية ذكية وأنظمة رد آلي IVR متقدمة لمراكز الاتصال.",
      "href": "/voice",
      "badge": "أتمتة ذكية",
      "features": [
        "تفاعل صوتي طبيعي",
        "توجيه IVR ذكي",
        "رؤى تحليلية فورية"
      ]
    },
    {
      "id": "virtual-did",
      "title": "الأرقام الافتراضية (DID)",
      "desc": "أرقام هواتف محلية ومجانية في أكثر من 100 دولة لحضور فوري للعلامة التجارية.",
      "href": "/virtual-did",
      "badge": "100+ دولة",
      "features": [
        "تفعيل فوري للأرقام",
        "صوت ورسائل ثنائية الاتجاه",
        "إعادة توجيه مرنة"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "الرسائل القصيرة بالجملة",
      "desc": "إرسال رسائل SMS جماعية عالية السعة للمشتركين عبر شبكات الجوال العالمية.",
      "href": "/wholesale-message",
      "badge": "سعة فائقة",
      "features": [
        "مسارات مشغلين مباشرة",
        "بروتوكولات SMPP وHTTP",
        "وصول عالمي واسع"
      ]
    },
    {
      "id": "otp-sms",
      "title": "بوابة رسائل OTP",
      "desc": "تسليم فائق السرعة لرسائل التحقق والأمان للبنوك ومنصات التكنولوجيا المالية.",
      "href": "/otp-sms",
      "badge": "تسليم فوري",
      "features": [
        "معدل تسليم 99.8%",
        "توجيه ضد الاحتيال",
        "نقل مشفر بالكامل"
      ]
    },
    {
      "id": "dialer",
      "title": "برنامج الاتصال المتكامل",
      "desc": "برنامج اتصال سحابي لمراكز الاتصال يدعم WebRTC والهاتف مع مراقبة حية للمشرف.",
      "href": "/dialer",
      "badge": "WebRTC وجوال",
      "features": [
        "اتصال تنبئي متقدم",
        "استماع وتدخل مباشر",
        "لوحة تحكم فورية"
      ]
    }
  ],
  "mapBadge": "المقر الرئيسي والانتشار العالمي",
  "mapTitle": "تواجدنا الاستراتيجي وعنواننا المسجل",
  "mapSubtitle": "من خلال مراكز عمليات الشبكة المتخصصة ونقاط الربط البيني العالمية، ندعم المؤسسات على مدار 24 ساعة في اليوم طوال 365 يوماً في السنة.",
  "officeTitle": "المقر الرئيسي للشركة",
  "officeAddressLabel": "العنوان المسجل",
  "officePhoneLabel": "الدعم الهاتفي",
  "officeEmailLabel": "استفسارات البريد الإلكتروني",
  "officeSupportLabel": "جاهزية الدعم",
  "officeSupportHours": "دعم NOC على مدار 24/7/365",
  "nocLabel": "مركز عمليات الشبكة العالمية",
  "nocDesc": "مراقبة استباقية لزمن الاستجابة، وتوجيه مسارات الطوارئ ومهندسون تقنيون متخصصون على أهبة الاستعداد.",
  "mapPinTitle": "عمليات آي نت جلوبال",
  "mapPinDesc": "مركز استراتيجي في الحديقة المالية متصل بشبكات عبور المشغلين الدولية من الفئة الأولى.",
  "ctaTitle": "هل أنت مستعد لتطوير بنية الاتصالات الخاصة بشركتك؟",
  "ctaSubtitle": "شارك آي نت جلوبال للحصول على مسارات صوتية فائقة النقاء، ورسائل نصية عالية السعة، وأرقام افتراضية في جميع أنحاء العالم.",
  "ctaPrimaryBtn": "طلب استشارة",
  "ctaSecondaryBtn": "استكشاف منتجاتنا",
  "floatingTier1Badge": {
    "title": "مسارات Tier-1 مباشرة",
    "sub": "اتفاقية مستوى خدمة 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "ربط عالمي مباشر",
    "sub": "عبور اتصالات دولي بدون عوائق"
  },
  "mapLiveLocation": "الموقع المباشر",
  "postalAddressLabel": "العنوان البريدي",
  "ctaGuaranteedSla": "ضمان مستوى الخدمة 99.99%",
  "ctaDedicatedNoc": "مركز NOC متخصص 24/7/365"
};

const fr: AboutUsTranslation = {
  "heroBadge": "À PROPOS DE INET GLOBAL",
  "heroTitle": "Propulser les Télécommunications Mondiales avec une Qualité Opérateur",
  "heroSubtitle": "iNet Global est un opérateur international de télécommunications de premier ordre fournissant des services voix de gros, messagerie OTP sécurisée, numéros virtuels DID et logiciels de centre d'appels dans plus de 100 pays.",
  "contactBtn": "Contacter Notre Équipe",
  "servicesBtn": "Découvrir les Services",
  "heroStats": [
    {
      "label": "Pays Connectés",
      "value": "100+",
      "sub": "Terminaison directe opérateur"
    },
    {
      "label": "Fiabilité du Réseau",
      "value": "99.99%",
      "sub": "SLA d'entreprise 99.99%"
    },
    {
      "label": "Volume Mensuel",
      "value": "1B+",
      "sub": "Milliards de minutes voix et SMS"
    },
    {
      "label": "NOC Technique Mondial",
      "value": "24/7/365",
      "sub": "Surveillance active de latence"
    }
  ],
  "phoneMockup": {
    "appTitle": "Réseau Global iNet",
    "status": "Actif et Surveillé",
    "regionLabel": "Route Entreprise Mondiale",
    "latency": "14ms",
    "card1Title": "SLA Réseau",
    "card1Val": "99.99%",
    "card1Badge": "SLA Mondial",
    "card2Title": "Routes Actives",
    "card2Val": "100+",
    "card2Badge": "Opérateur Tier-1",
    "routesTitle": "État des Routes en Direct",
    "route1": {
      "name": "Route Directe SIP US & Europe",
      "quality": "100%",
      "status": "Optimisé"
    },
    "route2": {
      "name": "Passerelle SMS Opérateur APAC",
      "quality": "99.9%",
      "status": "Optimisé"
    },
    "route3": {
      "name": "Route OTP Priorité Maximale",
      "quality": "99.8%",
      "status": "Optimisé"
    },
    "bottomStat1": "Latence Aller-Retour",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Disponibilité Mondiale",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "QUI SOMMES-NOUS",
  "companyTitle": "Bâti sur une Fiabilité Mondiale, Conçu pour la Croissance Entreprise",
  "companySubtitle": "Fournisseur d'infrastructures télécoms critiques pour opérateurs, agrégateurs et entreprises du monde entier.",
  "companyStory1": "Fondé avec l'ambition de simplifier et d'élever les télécommunications mondiales, iNet Global Services a établi des interconnexions directes avec les plus grands opérateurs Tier-1 en Amérique, Europe, Asie et Moyen-Orient.",
  "companyStory2": "Aujourd'hui, nous traitons des milliards de minutes et de messages chaque mois pour des fintechs, des services de santé, des géants du e-commerce et des revendeurs télécoms.",
  "missionTitle": "Notre Mission",
  "missionDesc": "Fournir une qualité vocale irréprochable, des messages de vérification hautement sécurisés et des numéros virtuels flexibles partout dans le monde.",
  "visionTitle": "Notre Vision",
  "visionDesc": "Devenir le partenaire d'infrastructure télécom mondiale le plus fiable au monde en alliant innovation IA et performances opérateur.",
  "coreValuesTitle": "Nos Principes Directeurs",
  "values": [
    {
      "title": "Qualité Absolue",
      "desc": "Routes voix CLI sans compromis et livraison des SMS OTP en moins de 2 secondes."
    },
    {
      "title": "Fiabilité Opérateur",
      "desc": "Disponibilité de 99.99% garantie par une surveillance proactive 24/7/365 du NOC."
    },
    {
      "title": "Évolutivité Mondiale",
      "desc": "Infrastructure haut débit conçue pour absorber vos pics de trafic sans interruption."
    },
    {
      "title": "Partenariat Transparent",
      "desc": "Facturation claire, tableaux de bord analytiques en direct et gestionnaires de compte techniques dédiés."
    }
  ],
  "whatWeDoBadge": "NOTRE EXPERTISE",
  "whatWeDoTitle": "Connecter les Quatre Coins du Monde avec des Télécoms Unifiées",
  "whatWeDoSubtitle": "Conçu pour supporter les opérations d'entreprise à haut débit et ultra-sensibles à la latence.",
  "pillars": [
    {
      "title": "Terminaison Vocale & Trunking SIP",
      "desc": "Terminaison vocale internationale de qualité opérateur avec CLI garanti et latence minimale.",
      "points": [
        "Plus de 100 routes directes",
        "Terminaison internationale A-Z Tier-1",
        "Moteur de routage au moindre coût",
        "Passerelles SIP redondantes"
      ]
    },
    {
      "title": "Messagerie Haute Garantie & OTP",
      "desc": "Distribution SMS rapide et fiable pour mots de passe à usage unique et alertes bancaires.",
      "points": [
        "Livraison OTP en moins de 2s",
        "Connectivité SMPP et API REST",
        "Accusés de réception en temps réel",
        "Routes directes opérateurs mobiles"
      ]
    },
    {
      "title": "Numéros Virtuels Mondiaux (DID)",
      "desc": "Numéros locaux, gratuits et mobiles dans plus de 100 pays pour une présence de marque immédiate.",
      "points": [
        "Attribution instantanée de numéros",
        "Voix et SMS bidirectionnels",
        "Redirection SIP personnalisée",
        "Affichage de l'ID d'appel local"
      ]
    },
    {
      "title": "Dialer Centre de Contact Cloud",
      "desc": "Solutions de numérotation prédictive WebRTC et mobile pour équipes commerciales et support.",
      "points": [
        "Modes prédictif et progressif",
        "Appels WebRTC dans le navigateur",
        "Écoute et intervention superviseur",
        "Synchronisation automatique CRM"
      ]
    }
  ],
  "servicesBadge": "NOS SERVICES",
  "servicesTitle": "Suite Télécom Complète pour les Entreprises Modernes",
  "servicesSubtitle": "Découvrez nos produits modulaires conçus pour faire évoluer vos opérations et optimiser vos coûts.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Voix de Gros",
      "desc": "Terminaison vocale internationale fiable avec CLI certifié et qualité opérateur supérieure.",
      "href": "/wholesale-voice",
      "badge": "Routes Directes",
      "features": [
        "Couverture Mondiale A-Z",
        "Interconnexions Tier-1",
        "Routage Optimisé"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Solutions Vocales IA",
      "desc": "Expériences vocales automatisées intelligentes et SVI d'entreprise pour centres de contact modernes.",
      "href": "/voice",
      "badge": "Automatisé",
      "features": [
        "Interaction Vocale Naturelle",
        "Routage SVI Intelligent",
        "Analyses Vocales en Direct"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Numéros Virtuels (DID)",
      "desc": "Numéros locaux, gratuits et mobiles dans plus de 100 pays pour affirmer votre marque.",
      "href": "/virtual-did",
      "badge": "100+ Pays",
      "features": [
        "Provisioning Immédiat",
        "Voix & SMS Bidirectionnels",
        "Transfert SIP Souple"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS de Gros",
      "desc": "Envoi massif de SMS aux abonnés mobiles à travers les réseaux télécoms mondiaux.",
      "href": "/wholesale-message",
      "badge": "Haut Débit",
      "features": [
        "Routes Directes Opérateur",
        "Protocoles SMPP et HTTP",
        "Portée Mondiale"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portail SMS OTP",
      "desc": "Distribution ultra-rapide de codes d'authentification pour banques et plateformes fintech.",
      "href": "/otp-sms",
      "badge": "Livraison Instantanée",
      "features": [
        "Taux de Livraison 99.8%",
        "Routage Anti-Fraude",
        "Chiffrement Intégral"
      ]
    },
    {
      "id": "dialer",
      "title": "Solution Complète de Dialer",
      "desc": "Dialer WebRTC et mobile pour centres d'appels avec supervision en direct et routage intelligent.",
      "href": "/dialer",
      "badge": "WebRTC & Mobile",
      "features": [
        "Numérotation Prédictive",
        "Écoute et Chuchotement",
        "Tableau de Bord Live"
      ]
    }
  ],
  "mapBadge": "SIÈGE MONDIAL ET COUVERTURE",
  "mapTitle": "Notre Présence Stratégique et Adresse Enregistrée",
  "mapSubtitle": "Grâce à nos centres de supervision de réseau et points de présence mondiaux, nous assistons les entreprises 24h/24 et 365j/an.",
  "officeTitle": "Siège Social",
  "officeAddressLabel": "Adresse Enregistrée",
  "officePhoneLabel": "Support Téléphonique",
  "officeEmailLabel": "Demandes par E-mail",
  "officeSupportLabel": "Disponibilité du Support",
  "officeSupportHours": "Support NOC 24/7/365",
  "nocLabel": "Centre Mondial d'Opérations Réseau",
  "nocDesc": "Surveillance proactive de la latence, basculement automatique et ingénieurs télécoms dédiés.",
  "mapPinTitle": "Opérations iNet Global",
  "mapPinDesc": "Hub stratégique du Financial Park connecté aux réseaux de transit internationaux Tier-1.",
  "ctaTitle": "Prêt à Transformer Votre Infrastructure Télécom Mondiale ?",
  "ctaSubtitle": "Associez-vous à iNet Global pour bénéficier de routes vocales cristallines, de SMS à haut débit et de numéros virtuels partout dans le monde.",
  "ctaPrimaryBtn": "Planifier une Consultation",
  "ctaSecondaryBtn": "Explorer Nos Produits",
  "floatingTier1Badge": {
    "title": "Routes Directes Tier-1",
    "sub": "SLA Entreprise 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Interconnexions Mondiales Directes",
    "sub": "Transit télécom international fluide"
  },
  "mapLiveLocation": "Emplacement en Direct",
  "postalAddressLabel": "Adresse Postale",
  "ctaGuaranteedSla": "SLA Garanti à 99.99%",
  "ctaDedicatedNoc": "NOC Dédié 24/7/365"
};

const de: AboutUsTranslation = {
  "heroBadge": "ÜBER INET GLOBAL",
  "heroTitle": "Globale Telekommunikation mit Zuverlässigkeit auf Betreiberniveau",
  "heroSubtitle": "iNet Global ist ein führender internationaler Telekommunikationsanbieter für Wholesale-Sprachtransit, sichere OTP-Verifizierungsnachrichten, virtuelle DIDs und moderne Dialer-Infrastrukturen in über 100 Ländern.",
  "contactBtn": "Unser Team Kontaktieren",
  "servicesBtn": "Dienste Entdecken",
  "heroStats": [
    {
      "label": "Verbundene Länder",
      "value": "100+",
      "sub": "Direkte Carrier-Terminierung"
    },
    {
      "label": "Netzwerk-Zuverlässigkeit",
      "value": "99.99%",
      "sub": "Enterprise SLA 99.99%"
    },
    {
      "label": "Monatliches Volumen",
      "value": "1B+",
      "sub": "Milliarden Sprachminuten und SMS"
    },
    {
      "label": "Globales Technisches NOC",
      "value": "24/7/365",
      "sub": "Aktive Latenzüberwachung"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Globales Netzwerk",
    "status": "Aktiv & Überwacht",
    "regionLabel": "Globale Enterprise-Route",
    "latency": "14ms",
    "card1Title": "Netzwerk SLA",
    "card1Val": "99.99%",
    "card1Badge": "Globales SLA",
    "card2Title": "Aktive Routen",
    "card2Val": "100+",
    "card2Badge": "Tier-1 Betreiber",
    "routesTitle": "Echtzeit-Routenzustand",
    "route1": {
      "name": "US & EU SIP Direktroute",
      "quality": "100%",
      "status": "Optimiert"
    },
    "route2": {
      "name": "APAC Betreiber-SMS-Gateway",
      "quality": "99.9%",
      "status": "Optimiert"
    },
    "route3": {
      "name": "Globale OTP-Höchstprioritätsroute",
      "quality": "99.8%",
      "status": "Optimiert"
    },
    "bottomStat1": "Round-Trip-Latenz",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Globale Verfügbarkeit",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "WER WIR SIND",
  "companyTitle": "Auf Globaler Zuverlässigkeit Erbaut, für Unternehmenswachstum Entwickelt",
  "companySubtitle": "Bereitstellung geschäftskritischer Telekommunikationsdienste für Netzbetreiber, Aggregatoren und Unternehmen weltweit.",
  "companyStory1": "Gegründet mit dem Ziel, die weltweite Telekommunikation zu vereinfachen und auf ein neues Niveau zu heben, hat iNet Global direkte Zusammenschaltungen mit führenden Tier-1-Betreibern etabliert.",
  "companyStory2": "Heute wickeln wir monatlich Milliarden von Minuten und Nachrichten für globale Fintechs, Gesundheitsdienstleister, E-Commerce-Konzerne und Telekom-Reseller ab.",
  "missionTitle": "Unsere Mission",
  "missionDesc": "Erstklassige Sprachqualität, vertrauenswürdige Verifizierungsnachrichten und nahtlose virtuelle Nummern für weltweite Geschäftskommunikation.",
  "visionTitle": "Unsere Vision",
  "visionDesc": "Der verlässlichste globale Kommunikationsinfrastrukturpartner der Welt zu sein, gestützt auf kontinuierliche KI-Innovation.",
  "coreValuesTitle": "Unsere Leitprinzipien",
  "values": [
    {
      "title": "Kompromisslose Qualität",
      "desc": "Verifizierte CLI-Sprachrouten und garantierte OTP-Zustellung in unter zwei Sekunden."
    },
    {
      "title": "Carrier-Grade Zuverlässigkeit",
      "desc": "99.99% Verfügbarkeit, unterstützt durch proaktive 24/7/365-NOC-Überwachung."
    },
    {
      "title": "Globale Skalierbarkeit",
      "desc": "Hochleistungsfähige Infrastruktur, die mühelos mit Ihren Datenverkehrsspitzen wächst."
    },
    {
      "title": "Transparente Partnerschaft",
      "desc": "Direkte Abrechnung, Live-Analysedashboards und dedizierte technische Kundenbetreuer."
    }
  ],
  "whatWeDoBadge": "UNSERE LEISTUNGEN",
  "whatWeDoTitle": "Jeden Winkel der Welt mit Einheitlicher Telekommunikation Verbinden",
  "whatWeDoSubtitle": "Entwickelt zur Unterstützung von hochvolumigen, latenzkritischen Unternehmensprozessen.",
  "pillars": [
    {
      "title": "Sprachterterminierung & SIP-Trunking",
      "desc": "Internationale Sprachterterminierung auf Betreiberniveau mit garantierter CLI und minimaler Latenz.",
      "points": [
        "100+ direkte Betreiberrouten",
        "Tier-1 A-Z internationale Terminierung",
        "Intelligente Least-Cost-Routing-Engine",
        "Redundante SIP-Trunk-Gateways"
      ]
    },
    {
      "title": "Hochsicheres Messaging & OTP",
      "desc": "Schnelle und zuverlässige SMS-Zustellung für zeitkritische Einmalpasswörter und Transaktionshinweise.",
      "points": [
        "OTP-Zustellung unter 2 Sekunden",
        "SMPP- und REST-API-Konnektivität",
        "Echtzeit-Zustellberichte (DLR)",
        "Direkte Mobilfunkbetreiberrouten"
      ]
    },
    {
      "title": "Globale Virtuelle Nummern (DID)",
      "desc": "Lokale, gebührenfreie und mobile Rufnummern in über 100 Ländern für sofortige lokale Präsenz.",
      "points": [
        "Sofortige Rufnummernbereitstellung",
        "Zwei-Wege-Sprach- und SMS-Fähigkeit",
        "Flexible SIP-Weiterleitung",
        "Lokale Anrufer-ID-Präsenz"
      ]
    },
    {
      "title": "Cloud Contact Center Dialer",
      "desc": "WebRTC- und mobile Predictive-Dialer-Lösungen für moderne Vertriebs- und Supportteams.",
      "points": [
        "Prädiktive und progressive Modi",
        "WebRTC-Telefonie direkt im Browser",
        "Live-Supervisor-Mithören und Aufschalten",
        "Automatische CRM-Anruferfassung"
      ]
    }
  ],
  "servicesBadge": "UNSERE PRODUKTE",
  "servicesTitle": "Komplette Telekommunikations-Suite für Moderne Unternehmen",
  "servicesSubtitle": "Erkunden Sie unsere modularen Produkte, um Ihre Betriebsabläufe zu skalieren und Kosten zu senken.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Wholesale Voice",
      "desc": "Zuverlässige internationale Sprachterterminierung mit garantierter CLI und bester Netzqualität.",
      "href": "/wholesale-voice",
      "badge": "Direktrouten",
      "features": [
        "A-Z Globale Abdeckung",
        "Tier-1 Zusammenschaltungen",
        "Kosteneffizientes Routing"
      ]
    },
    {
      "id": "ai-voice",
      "title": "KI-Sprachlösungen",
      "desc": "Intelligente automatisierte Sprachdialoge und Enterprise-IVR für moderne Contact Center.",
      "href": "/voice",
      "badge": "Automatisiert",
      "features": [
        "Natürliche Sprachinteraktion",
        "Intelligentes IVR-Routing",
        "Echtzeit-Sprachanalytik"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Virtuelle Nummern (DID)",
      "desc": "Ortsnetz-, Mobil- und 0800-Nummern in über 100 Ländern für internationale Markenpräsenz.",
      "href": "/virtual-did",
      "badge": "100+ Länder",
      "features": [
        "Sofortiges Bereitstellen",
        "Zwei-Wege-Audio & SMS",
        "Flexible Weiterleitung"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Wholesale SMS",
      "desc": "Zuverlässiger Massen-SMS-Versand an Mobilfunkteilnehmer weltweit über direkte Leitungen.",
      "href": "/wholesale-message",
      "badge": "Hoher Durchsatz",
      "features": [
        "Direkte Carrier-Routen",
        "SMPP- & HTTP-Protokoll",
        "Weltweite Reichweite"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP-SMS-Portal",
      "desc": "Ultraschnelle Zustellung von Sicherheitscodes für Banken, Fintechs und digitale Plattformen.",
      "href": "/otp-sms",
      "badge": "Echtzeit-Versand",
      "features": [
        "99.8% Zustellquote",
        "Anti-Fraud-Routing",
        "Vollverschlüsselte Übertragung"
      ]
    },
    {
      "id": "dialer",
      "title": "Komplette Dialer-Lösung",
      "desc": "WebRTC- und mobiler Callcenter-Dialer mit Supervisor-Monitoring und intelligentem Routing.",
      "href": "/dialer",
      "badge": "WebRTC & Mobil",
      "features": [
        "Prädiktives Wählen",
        "Live-Mithören & Coaching",
        "Echtzeit-Wallboard"
      ]
    }
  ],
  "mapBadge": "HAUPTSITZ & WELTWEITE REICHWEITE",
  "mapTitle": "Unsere Strategische Präsenz und Offizielle Anschrift",
  "mapSubtitle": "Mit spezialisierten Network Operation Centers unterstützen wir Unternehmen 24 Stunden am Tag, 365 Tage im Jahr.",
  "officeTitle": "Unternehmenszentrale",
  "officeAddressLabel": "Eingetragene Adresse",
  "officePhoneLabel": "Telefonischer Support",
  "officeEmailLabel": "E-Mail-Anfragen",
  "officeSupportLabel": "Support-Verfügbarkeit",
  "officeSupportHours": "24/7/365 NOC-Support",
  "nocLabel": "Globales Network Operation Center",
  "nocDesc": "Proaktives Latenzmonitoring, automatisches Routen-Failover und dedizierte Fachingenieure.",
  "mapPinTitle": "iNet Global Operations",
  "mapPinDesc": "Strategischer Knotenpunkt im Financial Park mit Anbindung an internationale Tier-1-Netze.",
  "ctaTitle": "Bereit für Modernste Globale Telekommunikationsinfrastruktur?",
  "ctaSubtitle": "Arbeiten Sie mit iNet Global zusammen für kristallklare Sprachrouten, schnelle SMS und weltweite Rufnummern.",
  "ctaPrimaryBtn": "Beratungsgespräch Vereinbaren",
  "ctaSecondaryBtn": "Produkte Entdecken",
  "floatingTier1Badge": {
    "title": "Tier-1 Direktrouten",
    "sub": "99.99% Enterprise SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Direkte Globale Zusammenschaltungen",
    "sub": "Reibungsloser internationaler Sprachtransit"
  },
  "mapLiveLocation": "Live-Standort",
  "postalAddressLabel": "Postanschrift",
  "ctaGuaranteedSla": "99.99% Garantiertes SLA",
  "ctaDedicatedNoc": "24/7/365 Dediziertes NOC"
};

const ja: AboutUsTranslation = {
  "heroBadge": "INET GLOBALについて",
  "heroTitle": "通信事業者グレードのインフラでグローバルな接続を強化",
  "heroSubtitle": "iNet Globalは、100カ国以上でエンタープライズ向けホールセール音声、セキュアなOTPメッセージング、仮想DID、次世代ダイヤラーインフラを提供する国際電気通信事業者です。",
  "contactBtn": "お問い合わせ",
  "servicesBtn": "サービスを見る",
  "heroStats": [
    {
      "label": "接続国・地域数",
      "value": "100+",
      "sub": "キャリア直結終端"
    },
    {
      "label": "ネットワーク信頼性",
      "value": "99.99%",
      "sub": "エンタープライズSLA 99.99%"
    },
    {
      "label": "月間処理実績",
      "value": "1B+",
      "sub": "数十億分の音声通話＆SMS"
    },
    {
      "label": "グローバル技術NOC",
      "value": "24/7/365",
      "sub": "24時間365日のレイテンシ監視"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Global Network",
    "status": "稼働中・リアルタイム監視",
    "regionLabel": "グローバルエンタープライズルート",
    "latency": "14ms",
    "card1Title": "ネットワークSLA",
    "card1Val": "99.99%",
    "card1Badge": "グローバルSLA",
    "card2Title": "アクティブルート",
    "card2Val": "100+",
    "card2Badge": "Tier-1キャリア",
    "routesTitle": "回線稼働ステータス",
    "route1": {
      "name": "欧米向けSIP直結ダイレクトルート",
      "quality": "100%",
      "status": "最適化済み"
    },
    "route2": {
      "name": "アジア太平洋SMSゲートウェイ",
      "quality": "99.9%",
      "status": "最適化済み"
    },
    "route3": {
      "name": "グローバル高優先度OTPルート",
      "quality": "99.8%",
      "status": "最適化済み"
    },
    "bottomStat1": "ラウンドトリップ遅延",
    "bottomStat1Val": "14ms",
    "bottomStat2": "グローバル稼働率",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "会社概要",
  "companyTitle": "世界基準の信頼性と拡張性の高いエンタープライズ成長",
  "companySubtitle": "世界中の通信キャリア、アグリゲーター、大手企業にミッションクリティカルな通信インフラを提供しています。",
  "companyStory1": "国際電気通信のシンプル化と高品質化を目指して設立されたiNet Globalは、アメリカ、ヨーロッパ、アジア、中東の主要Tier-1キャリアと直接相互接続を確立しています。",
  "companyStory2": "現在、グローバルフィンテック、医療機関、大手EC企業、通信リセラー向けに、毎月数十億分の通話とメッセージを強固なインフラで処理しています。",
  "missionTitle": "私たちの使命",
  "missionDesc": "極めてクリアな音声品質、信頼できる認証メッセージ、自由度の高い仮想電話番号を提供し、世界中のどこでも円滑な通信を実現することです。",
  "visionTitle": "私たちのビジョン",
  "visionDesc": "AIインテリジェンスとキャリア品質の性能を融合させ、世界で最も信頼される通信インフラパートナーを目指します。",
  "coreValuesTitle": "行動指針・コアバリュー",
  "values": [
    {
      "title": "妥協のない品質",
      "desc": "正規番号通知(CLI)保証の音声ルートと、2秒以内のOTPメッセージ高速配信をお約束します。"
    },
    {
      "title": "通信事業者グレードの信頼性",
      "desc": "24時間365日体制のプロアクティブなNOC監視に支えられた99.99%のエンタープライズ稼働率。"
    },
    {
      "title": "グローバルな拡張性",
      "desc": "急激なトラフィック急増にも柔軟に対応できるよう設計された拡張可能なインフラストラクチャ。"
    },
    {
      "title": "透明性のあるパートナーシップ",
      "desc": "明確な請求体系、リアルタイム分析ダッシュボード、専任の技術アカウントマネージャー。"
    }
  ],
  "whatWeDoBadge": "事業内容",
  "whatWeDoTitle": "世界中をつなぐ統合テレコムソリューション",
  "whatWeDoSubtitle": "大容量かつ遅延に敏感なビジネスオペレーションを支えるためにゼロから構築されました。",
  "pillars": [
    {
      "title": "音声終端・SIPトランキング",
      "desc": "正規CLI通知と超低遅延を誇る国際通信キャリアグレードの音声終端サービス。",
      "points": [
        "100以上のキャリア直結ルート",
        "Tier-1 A-Z 国際通話終端",
        "最少コスト自動ルーティング(LCR)",
        "冗長化されたSIPゲートウェイ"
      ]
    },
    {
      "title": "高信頼メッセージング＆OTP",
      "desc": "ワンタイムパスワードや取引通知など、時間厳守の重要メッセージを高速かつ確実に配信。",
      "points": [
        "2秒以内の高速OTP配信",
        "SMPPおよびREST API連携",
        "リアルタイム配信レポート(DLR)",
        "モバイルキャリア直結ルート"
      ]
    },
    {
      "title": "グローバル仮想番号 (DID)",
      "desc": "世界100カ国以上のローカル番号、トールフリー(0120/0800)、モバイル番号を提供。",
      "points": [
        "即時番号プロビジョニング",
        "双方向音声通話およびSMS対応",
        "柔軟なSIP転送設定",
        "現地発信者番号表示"
      ]
    },
    {
      "title": "クラウドコールセンターダイヤラー",
      "desc": "営業およびカスタマーサポートチーム向けに最適化されたWebRTC＆モバイル予測ダイヤラー。",
      "points": [
        "プレディクティブ＆プログレッシブ発信",
        "ブラウザから直接通話可能なWebRTC",
        "リアルタイム管理者モニタリング",
        "CRM連携による通話自動記録"
      ]
    }
  ],
  "servicesBadge": "提供サービス",
  "servicesTitle": "現代企業のための包括的な通信スイート",
  "servicesSubtitle": "ビジネスの拡大、顧客満足度の向上、運用コスト削減を支援するモジュール型製品をご覧ください。",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "ホールセール音声",
      "desc": "保証されたCLIと高品質なキャリア回線による信頼性の高い国際音声終端。",
      "href": "/wholesale-voice",
      "badge": "直結ルート",
      "features": [
        "A-Z グローバル網羅",
        "Tier-1 相互接続",
        "最適コストルーティング"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI音声ソリューション",
      "desc": "最新のコンタクトセンター向けに設計されたインテリジェントな自動音声IVRソリューション。",
      "href": "/voice",
      "badge": "自動化",
      "features": [
        "自然な音声対話",
        "スマートIVRルーティング",
        "リアルタイム通話分析"
      ]
    },
    {
      "id": "virtual-did",
      "title": "仮想電話番号 (DID)",
      "desc": "グローバルブランド展開のための100カ国以上の地域番号・フリーダイヤル番号。",
      "href": "/virtual-did",
      "badge": "100カ国以上",
      "features": [
        "迅速な番号発行",
        "双方向音声＆SMS",
        "柔軟なSIP転送"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "ホールセールSMS",
      "desc": "世界中の携帯キャリア契約者へ向けた大量一括SMS配信プラットフォーム。",
      "href": "/wholesale-message",
      "badge": "高スループット",
      "features": [
        "キャリア直結回線",
        "SMPP / HTTPプロトコル",
        "グローバル広域配信"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMSポータル",
      "desc": "金融機関やフィンテック企業向けに設計された超高速な本人確認・認証コード配信。",
      "href": "/otp-sms",
      "badge": "即時配信",
      "features": [
        "到達率99.8%",
        "不正対策ルーティング",
        "完全暗号化通信"
      ]
    },
    {
      "id": "dialer",
      "title": "統合ダイヤラーソリューション",
      "desc": "ブラウザおよびスマホアプリから利用できる高機能コールセンターダイヤラー。",
      "href": "/dialer",
      "badge": "WebRTC＆スマホ",
      "features": [
        "予測発信機能",
        "リアルタイム通話介入",
        "ライブ分析ダッシュボード"
      ]
    }
  ],
  "mapBadge": "グローバル拠点＆アクセス",
  "mapTitle": "戦略的拠点および公式登録住所",
  "mapSubtitle": "専用のネットワーク運用センター(NOC)とグローバル接続拠点を備え、365日24時間体制でお客様をサポートしています。",
  "officeTitle": "コーポレート本社",
  "officeAddressLabel": "登録本店住所",
  "officePhoneLabel": "お電話窓口",
  "officeEmailLabel": "メールでのお問い合わせ",
  "officeSupportLabel": "サポート体制",
  "officeSupportHours": "24時間365日 NOC常駐",
  "nocLabel": "グローバル・ネットワーク・オペレーション・センター",
  "nocDesc": "予防的レイテンシ監視、自動ルートフェイルオーバー、専任エンジニア常駐。",
  "mapPinTitle": "iNet Global 運用拠点",
  "mapPinDesc": "Tier-1国際基幹ネットワークに直結する戦略的ファイナンシャルパークハブ。",
  "ctaTitle": "通信インフラの刷新をお考えですか？",
  "ctaSubtitle": "iNet Globalと連携し、クリアな音声通話、高速SMS配信、世界中の仮想番号をビジネスに導入しましょう。",
  "ctaPrimaryBtn": "ご相談を予約する",
  "ctaSecondaryBtn": "サービス一覧を見る",
  "floatingTier1Badge": {
    "title": "Tier-1 直結ルート",
    "sub": "99.99% エンタープライズSLA"
  },
  "ambientInterconnectBadge": {
    "title": "直接相互接続ネットワーク",
    "sub": "シームレスな国際トランジット"
  },
  "mapLiveLocation": "リアルタイム所在地",
  "postalAddressLabel": "郵便宛先住所",
  "ctaGuaranteedSla": "99.99% 保証SLA",
  "ctaDedicatedNoc": "24時間365日 専任NOC"
};

const pt: AboutUsTranslation = {
  "heroBadge": "SOBRE A INET GLOBAL",
  "heroTitle": "Impulsionando Conexões Globais com Telecomunicações de Operadora",
  "heroSubtitle": "A iNet Global é uma provedora internacional líder em telecomunicações, fornecendo terminação de voz no atacado, mensagens OTP seguras, DIDs virtuais e infraestrutura de discador em mais de 100 países.",
  "contactBtn": "Fale com Nossa Equipe",
  "servicesBtn": "Explorar Serviços",
  "heroStats": [
    {
      "label": "Países Conectados",
      "value": "100+",
      "sub": "Terminação direta de operadora"
    },
    {
      "label": "Confiabilidade de Rede",
      "value": "99.99%",
      "sub": "SLA corporativo de 99.99%"
    },
    {
      "label": "Volume Mensal",
      "value": "1B+",
      "sub": "Bilhões de minutos de voz e SMS"
    },
    {
      "label": "NOC Técnico Global",
      "value": "24/7/365",
      "sub": "Monitoramento ativo de latência"
    }
  ],
  "phoneMockup": {
    "appTitle": "Rede Global iNet",
    "status": "Ativo & Monitorado",
    "regionLabel": "Rota Empresarial Global",
    "latency": "14ms",
    "card1Title": "SLA de Rede",
    "card1Val": "99.99%",
    "card1Badge": "SLA Global",
    "card2Title": "Rotas Ativas",
    "card2Val": "100+",
    "card2Badge": "Operadora Tier-1",
    "routesTitle": "Saúde das Rotas em Tempo Real",
    "route1": {
      "name": "Rota Direta SIP EUA & Europa",
      "quality": "100%",
      "status": "Otimizado"
    },
    "route2": {
      "name": "Gateway SMS de Operadora APAC",
      "quality": "99.9%",
      "status": "Otimizado"
    },
    "route3": {
      "name": "Rota OTP de Alta Prioridade",
      "quality": "99.8%",
      "status": "Otimizado"
    },
    "bottomStat1": "Latência de Ida e Volta",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Disponibilidade Global",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "QUEM SOMOS",
  "companyTitle": "Construído sobre Confiabilidade Global, Projetado para o Crescimento",
  "companySubtitle": "Fornecendo serviços de telecomunicações de missão crítica para operadoras, agregadores e empresas em todo o mundo.",
  "companyStory1": "Fundada com a missão de simplificar e elevar as telecomunicações globais, a iNet Global estabeleceu interconexões diretas com operadoras Tier-1 líderes nas Américas, Europa, Ásia e Oriente Médio.",
  "companyStory2": "Hoje, processamos bilhões de minutos e mensagens todos os meses para fintechs globais, líderes em saúde, e-commerce e revendedores de telecomunicações.",
  "missionTitle": "Nossa Missão",
  "missionDesc": "Oferecer qualidade de voz impecável, mensagens de verificação confiáveis e números virtuais integrados para que empresas se comuniquem facilmente em qualquer lugar.",
  "visionTitle": "Nossa Visão",
  "visionDesc": "Ser o parceiro de infraestrutura de comunicações mais confiável do mundo, inovando continuamente com inteligência artificial e excelência operacional.",
  "coreValuesTitle": "Princípios que Orientam Nossas Operações",
  "values": [
    {
      "title": "Qualidade Inegociável",
      "desc": "Rotas de voz com CLI verificado e entrega de SMS OTP em menos de 2 segundos."
    },
    {
      "title": "Confiabilidade de Operadora",
      "desc": "99.99% de disponibilidade corporativa respaldada por vigilância ativa 24/7/365 no NOC."
    },
    {
      "title": "Escalabilidade Global",
      "desc": "Infraestrutura flexível projetada para absorver picos de tráfego sem qualquer atrito."
    },
    {
      "title": "Parceria Transparente",
      "desc": "Faturamento claro, painéis de análise em tempo real e gerentes técnicos de contas dedicados."
    }
  ],
  "whatWeDoBadge": "O QUE FAZEMOS",
  "whatWeDoTitle": "Conectando Cada Canto do Mundo com Telecomunicações Unificadas",
  "whatWeDoSubtitle": "Projetado desde o início para suportar operações corporativas de alto tráfego e baixa latência.",
  "pillars": [
    {
      "title": "Terminação de Voz & Troncos SIP",
      "desc": "Terminação de voz internacional de nível operadora com CLI garantido e baixa latência.",
      "points": [
        "Mais de 100 rotas diretas",
        "Terminação internacional A-Z Tier-1",
        "Roteamento inteligente de menor custo (LCR)",
        "Gateways SIP redundantes"
      ]
    },
    {
      "title": "Mensagens de Alta Garantia & OTP",
      "desc": "Entrega de SMS rápida e segura para senhas descartáveis e notificações bancárias.",
      "points": [
        "Entrega de OTP em menos de 2 segundos",
        "Conectividade SMPP e REST API",
        "Recibos de entrega em tempo real (DLR)",
        "Rotas diretas com operadoras móveis"
      ]
    },
    {
      "title": "Números Virtuais Globais (DID)",
      "desc": "Números locais, 0800 e móveis em mais de 100 países para presença global imediata.",
      "points": [
        "Ativação instantânea de números",
        "Voz e SMS bidirecionais",
        "Encaminhamento SIP flexível",
        "Identificador de chamada local"
      ]
    },
    {
      "title": "Discador para Contact Center na Nuvem",
      "desc": "Soluções de discador preditivo WebRTC e móvel para equipes de vendas e atendimento.",
      "points": [
        "Modos preditivo e progressivo",
        "Chamadas WebRTC no navegador",
        "Monitoramento em tempo real com escuta e sussurro",
        "Registro automático no CRM"
      ]
    }
  ],
  "servicesBadge": "NOSSOS SERVIÇOS",
  "servicesTitle": "Suíte Completa de Telecomunicações para Empresas Modernas",
  "servicesSubtitle": "Conheça nossos produtos modulares projetados para expandir suas operações e reduzir custos operacionais.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Voz no Atacado",
      "desc": "Terminação internacional confiável com CLI garantido e qualidade de operadora de topo.",
      "href": "/wholesale-voice",
      "badge": "Rotas Diretas",
      "features": [
        "Cobertura Global A-Z",
        "Interconexões Tier-1",
        "Menor Custo com Qualidade"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Soluções de Voz com IA",
      "desc": "Experiências automatizadas inteligentes e URA corporativa para contact centers modernos.",
      "href": "/voice",
      "badge": "Automação",
      "features": [
        "Interação Natural por Voz",
        "Roteamento Inteligente de URA",
        "Análise de Áudio ao Vivo"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Números Virtuais (DID)",
      "desc": "Números locais, toll-free e móveis em mais de 100 países para presença internacional da marca.",
      "href": "/virtual-did",
      "badge": "100+ Países",
      "features": [
        "Provisionamento Imediato",
        "Voz e SMS Bidirecionais",
        "Encaminhamento Dinâmico"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS no Atacado",
      "desc": "Transmissão em massa de SMS para assinantes de redes móveis globais com alta capacidade.",
      "href": "/wholesale-message",
      "badge": "Alta Capacidade",
      "features": [
        "Rotas Diretas de Operadoras",
        "Protocolos SMPP e HTTP",
        "Alcance Mundial"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portal de SMS OTP",
      "desc": "Entrega instantânea de códigos de autenticação projetada para bancos e fintechs.",
      "href": "/otp-sms",
      "badge": "Entrega Instantânea",
      "features": [
        "Taxa de Entrega de 99.8%",
        "Roteamento Antifraude",
        "Criptografia de Ponta a Ponta"
      ]
    },
    {
      "id": "dialer",
      "title": "Solução Completa de Discador",
      "desc": "Discador WebRTC para navegador e celular com supervisão ao vivo e roteamento inteligente.",
      "href": "/dialer",
      "badge": "WebRTC e Mobile",
      "features": [
        "Discagem Preditiva e Progressiva",
        "Escuta e Intervenção ao Vivo",
        "Painel em Tempo Real"
      ]
    }
  ],
  "mapBadge": "SEDE GLOBAL E ALCANCE",
  "mapTitle": "Nossa Presença Estratégica e Endereço Registrado",
  "mapSubtitle": "Com Centros de Operações de Rede especializados e Pontos de Presença globais, atendemos empresas 24 horas por dia, 365 dias por ano.",
  "officeTitle": "Sede Corporativa",
  "officeAddressLabel": "Endereço Registrado",
  "officePhoneLabel": "Suporte Telefônico",
  "officeEmailLabel": "E-mail de Contato",
  "officeSupportLabel": "Disponibilidade de Suporte",
  "officeSupportHours": "Suporte NOC 24/7/365",
  "nocLabel": "Centro Global de Operações de Rede (NOC)",
  "nocDesc": "Monitoramento proativo de latência, failover automático de rotas e engenheiros de plantão.",
  "mapPinTitle": "Operações da iNet Global",
  "mapPinDesc": "Polo estratégico no Financial Park conectado às redes internacionais de trânsito Tier-1.",
  "ctaTitle": "Pronto para Transformar Sua Infraestrutura Global de Telecomunicações?",
  "ctaSubtitle": "Seja parceiro da iNet Global para acessar rotas de voz cristalinas, SMS de alta capacidade e números virtuais no mundo todo.",
  "ctaPrimaryBtn": "Agendar Consulta",
  "ctaSecondaryBtn": "Conhecer Nossos Produtos",
  "floatingTier1Badge": {
    "title": "Rotas Diretas Tier-1",
    "sub": "SLA Corporativo de 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Interconexões Globais Diretas",
    "sub": "Trânsito internacional por atacado sem atrito"
  },
  "mapLiveLocation": "Localização em Tempo Real",
  "postalAddressLabel": "Endereço Postal",
  "ctaGuaranteedSla": "SLA Garantido de 99.99%",
  "ctaDedicatedNoc": "NOC Dedicado 24/7/365"
};

const ru: AboutUsTranslation = {
  "heroBadge": "О КОМПАНИИ INET GLOBAL",
  "heroTitle": "Глобальная телеком-связь операторского уровня надежности",
  "heroSubtitle": "iNet Global — ведущий международный телекоммуникационный провайдер, предоставляющий услуги оптовой передачи голоса, безопасных OTP-сообщений, виртуальных номеров DID и решений для колл-центров в более чем 100 странах.",
  "contactBtn": "Связаться с командой",
  "servicesBtn": "Все услуги",
  "heroStats": [
    {
      "label": "Подключенных стран",
      "value": "100+",
      "sub": "Прямая терминация операторов"
    },
    {
      "label": "Надежность сети",
      "value": "99.99%",
      "sub": "Корпоративный SLA 99.99%"
    },
    {
      "label": "Ежемесячный объем",
      "value": "1B+",
      "sub": "Миллиарды минут и SMS"
    },
    {
      "label": "Технический NOC",
      "value": "24/7/365",
      "sub": "24/7 мониторинг задержек"
    }
  ],
  "phoneMockup": {
    "appTitle": "Сеть iNet Global",
    "status": "Активно и под контролем",
    "regionLabel": "Корпоративный маршрут",
    "latency": "14ms",
    "card1Title": "SLA сети",
    "card1Val": "99.99%",
    "card1Badge": "Глобальный SLA",
    "card2Title": "Активные маршруты",
    "card2Val": "100+",
    "card2Badge": "Tier-1 операторы",
    "routesTitle": "Состояние маршрутов",
    "route1": {
      "name": "Прямой SIP маршрут США и Европа",
      "quality": "100%",
      "status": "Оптимизировано"
    },
    "route2": {
      "name": "SMS-шлюз операторов Азиатско-Тихоокеанского региона",
      "quality": "99.9%",
      "status": "Оптимизировано"
    },
    "route3": {
      "name": "Высокоприоритетный OTP маршрут",
      "quality": "99.8%",
      "status": "Оптимизировано"
    },
    "bottomStat1": "Круговая задержка",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Глобальная доступность",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "КТО МЫ",
  "companyTitle": "Глобальная надежность для масштабирования бизнеса",
  "companySubtitle": "Предоставление критически важной телеком-инфраструктуры для операторов связи, агрегаторов и международных компаний.",
  "companyStory1": "Основанная с целью упростить и вывести на новый уровень глобальные телекоммуникации, iNet Global установила прямые межоператорские соединения с крупнейшими провайдерами Tier-1 в Америке, Европе, Азии и на Ближнем Востоке.",
  "companyStory2": "Сегодня мы ежемесячно обрабатываем миллиарды минут и сообщений для ведущих финтех-компаний, медицинских учреждений, платформ электронной коммерции и реселлеров.",
  "missionTitle": "Наша миссия",
  "missionDesc": "Обеспечить безупречное качество голосовой связи, защищенные сообщения верификации и гибкие виртуальные номера для коммуникаций в любой точке мира.",
  "visionTitle": "Наше видение",
  "visionDesc": "Быть самым надежным партнером по глобальной коммуникационной инфраструктуре, сочетая инновации ИИ и операторскую стабильность.",
  "coreValuesTitle": "Наши руководящие принципы",
  "values": [
    {
      "title": "Безупречное качество",
      "desc": "Голосовые маршруты с проверенным CLI и доставка OTP-кодов менее чем за 2 секунды."
    },
    {
      "title": "Операторская надежность",
      "desc": "Доступность 99.99%, подкрепленная круглосуточным проактивным мониторингом NOC 24/7/365."
    },
    {
      "title": "Глобальная масштабируемость",
      "desc": "Эластичная архитектура, способная легко выдерживать любые пиковые нагрузки вашего трафика."
    },
    {
      "title": "Прозрачное партнерство",
      "desc": "Прямой биллинг, аналитика в реальном времени и персональные технические аккаунт-менеджеры."
    }
  ],
  "whatWeDoBadge": "НАША ДЕЯТЕЛЬНОСТЬ",
  "whatWeDoTitle": "Объединяем все точки планеты единой телеком-сетью",
  "whatWeDoSubtitle": "Создано для поддержки высоконагруженных и критичных к задержкам корпоративных операций.",
  "pillars": [
    {
      "title": "Терминация голоса и SIP-транкинг",
      "desc": "Международная терминация голоса операторского класса с гарантированным CLI и низкой задержкой.",
      "points": [
        "100+ прямых маршрутов операторов",
        "Терминация Tier-1 A-Z по всему миру",
        "Умный алгоритм наименьшей стоимости (LCR)",
        "Резервированные SIP-шлюзы"
      ]
    },
    {
      "title": "Надежные сообщения и OTP",
      "desc": "Быстрая доставка SMS для одноразовых паролей и важных транзакционных оповещений.",
      "points": [
        "Доставка OTP быстрее 2 секунд",
        "Подключение по SMPP и REST API",
        "Отчеты о доставке (DLR) в реальном времени",
        "Прямые маршруты мобильных операторов"
      ]
    },
    {
      "title": "Виртуальные номера по всему миру (DID)",
      "desc": "Местные, бесплатные 800 и мобильные номера в более чем 100 странах для глобального присутствия.",
      "points": [
        "Мгновенное выделение номеров",
        "Двусторонняя голосовая связь и SMS",
        "Гибкая переадресация SIP",
        "Локальный Caller ID"
      ]
    },
    {
      "title": "Облачный дайлер для контакт-центров",
      "desc": "WebRTC и мобильные предиктивные автодозвонщики для команд продаж и технической поддержки.",
      "points": [
        "Предиктивный и прогрессивный режимы",
        "Звонки прямо из браузера по WebRTC",
        "Супервизорский контроль: прослушивание и подсказка",
        "Автоматическая синхронизация с CRM"
      ]
    }
  ],
  "servicesBadge": "НАШИ УСЛУГИ",
  "servicesTitle": "Полный комплекс телеком-решений для современного бизнеса",
  "servicesSubtitle": "Ознакомьтесь с нашими модульными продуктами для масштабирования операций и снижения издержек.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Оптовая передача голоса",
      "desc": "Надежная международная терминация с гарантированным CLI и высочайшим качеством звука.",
      "href": "/wholesale-voice",
      "badge": "Прямые маршруты",
      "features": [
        "Покрытие A-Z по всему миру",
        "Tier-1 соединения",
        "Оптимизация стоимости"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Голосовые решения с ИИ",
      "desc": "Интеллектуальные голосовые роботы и корпоративные IVR-системы для контакт-центров.",
      "href": "/voice",
      "badge": "Автоматизация",
      "features": [
        "Естественная речь",
        "Умная маршрутизация IVR",
        "Аналитика звонков"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Виртуальные номера (DID)",
      "desc": "Местные и бесплатные номера в 100+ странах для локального присутствия вашего бренда.",
      "href": "/virtual-did",
      "badge": "100+ стран",
      "features": [
        "Быстрое подключение",
        "Входящие/исходящие звонки и SMS",
        "Гибкая переадресация"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Оптовые SMS",
      "desc": "Массовая отправка SMS абонентам мобильных операторов по всему миру.",
      "href": "/wholesale-message",
      "badge": "Высокая скорость",
      "features": [
        "Прямые маршруты операторов",
        "Протоколы SMPP и HTTP",
        "Глобальный охват"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Портал OTP SMS",
      "desc": "Мгновенная доставка кодов авторизации для банков и финтех-платформ.",
      "href": "/otp-sms",
      "badge": "Мгновенная доставка",
      "features": [
        "Доставляемость 99.8%",
        "Защита от фрода",
        "Сквозное шифрование"
      ]
    },
    {
      "id": "dialer",
      "title": "Комплексный дайлер",
      "desc": "Браузерный WebRTC и мобильный дайлер с контролем супервизора и аналитикой.",
      "href": "/dialer",
      "badge": "WebRTC и Mobile",
      "features": [
        "Предиктивный набор",
        "Супервизорский контроль",
        "Интерактивный дашборд"
      ]
    }
  ],
  "mapBadge": "ШТАБ-КВАРТИРА И МИРОВОЙ ОХВАТ",
  "mapTitle": "Наше стратегическое присутствие и юридический адрес",
  "mapSubtitle": "Благодаря центрам управления сетью и международным узлам связи мы поддерживаем корпоративных клиентов 24/7/365.",
  "officeTitle": "Корпоративная штаб-квартира",
  "officeAddressLabel": "Юридический адрес",
  "officePhoneLabel": "Телефонная поддержка",
  "officeEmailLabel": "Электронная почта",
  "officeSupportLabel": "Доступность поддержки",
  "officeSupportHours": "Поддержка NOC 24/7/365",
  "nocLabel": "Глобальный центр управления сетью (NOC)",
  "nocDesc": "Проактивный мониторинг задержек, автоматическое переключение маршрутов и инженеры на дежурстве.",
  "mapPinTitle": "Операционный центр iNet Global",
  "mapPinDesc": "Стратегический финансовый хаб, подключенный к магистральным операторам Tier-1.",
  "ctaTitle": "Готовы модернизировать вашу телеком-инфраструктуру?",
  "ctaSubtitle": "Станьте партнером iNet Global, чтобы получить безупречные голосовые маршруты, надежные SMS и виртуальные номера.",
  "ctaPrimaryBtn": "Запланировать консультацию",
  "ctaSecondaryBtn": "Ознакомиться с услугами",
  "floatingTier1Badge": {
    "title": "Прямые маршруты Tier-1",
    "sub": "Корпоративный SLA 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Прямые глобальные соединения",
    "sub": "Бесперебойный международный транзит"
  },
  "mapLiveLocation": "Текущее местоположение",
  "postalAddressLabel": "Почтовый адрес",
  "ctaGuaranteedSla": "Гарантированный SLA 99.99%",
  "ctaDedicatedNoc": "Выделенный NOC 24/7/365"
};

const it: AboutUsTranslation = {
  "heroBadge": "CHI SIAMO: INET GLOBAL",
  "heroTitle": "Potenziare le Connessioni Globali con Telecomunicazioni Carrier-Grade",
  "heroSubtitle": "iNet Global è un provider internazionale leader di telecomunicazioni che fornisce voce wholesale, messaggistica OTP sicura, DID virtuali e infrastrutture dialer avanzate in oltre 100 paesi.",
  "contactBtn": "Contatta il Nostro Team",
  "servicesBtn": "Esplora i Servizi",
  "heroStats": [
    {
      "label": "Paesi Connessi",
      "value": "100+",
      "sub": "Terminazione diretta di operatore"
    },
    {
      "label": "Affidabilità di Rete",
      "value": "99.99%",
      "sub": "SLA aziendale 99.99%"
    },
    {
      "label": "Volumi Mensili",
      "value": "1B+",
      "sub": "Miliardi di minuti voce e SMS"
    },
    {
      "label": "NOC Tecnico Globale",
      "value": "24/7/365",
      "sub": "Monitoraggio attivo della latenza"
    }
  ],
  "phoneMockup": {
    "appTitle": "Rete Globale iNet",
    "status": "Attivo e Monitorato",
    "regionLabel": "Rotta Enterprise Globale",
    "latency": "14ms",
    "card1Title": "SLA di Rete",
    "card1Val": "99.99%",
    "card1Badge": "SLA Globale",
    "card2Title": "Rotte Attive",
    "card2Val": "100+",
    "card2Badge": "Operatore Tier-1",
    "routesTitle": "Stato delle Rotte in Tempo Reale",
    "route1": {
      "name": "Rotta Diretta SIP USA ed Europa",
      "quality": "100%",
      "status": "Ottimizzato"
    },
    "route2": {
      "name": "Gateway SMS Operatori APAC",
      "quality": "99.9%",
      "status": "Ottimizzato"
    },
    "route3": {
      "name": "Rotta OTP ad Altissima Priorità",
      "quality": "99.8%",
      "status": "Ottimizzato"
    },
    "bottomStat1": "Latenza di Andata e Ritorno",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Disponibilità Globale",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "CHI SIAMO",
  "companyTitle": "Costruito sull'Affidabilità Globale, Progettato per la Crescita Aziendale",
  "companySubtitle": "Erogazione di servizi telecomunicativi mission-critical a operatori, aggregatori e aziende di tutto il mondo.",
  "companyStory1": "Fondata con l'obiettivo di semplificare e ottimizzare le telecomunicazioni globali, iNet Global ha stabilito interconnessioni dirette con i principali operatori Tier-1 in America, Europa, Asia e Medio Oriente.",
  "companyStory2": "Oggi gestiamo miliardi di minuti e messaggi ogni mese per fintech globali, sanità, e-commerce e rivenditori di telecomunicazioni.",
  "missionTitle": "La Nostra Missione",
  "missionDesc": "Offrire qualità vocale cristallina, messaggi di verifica affidabili e numeri virtuali flessibili per permettere alle aziende di comunicare ovunque.",
  "visionTitle": "La Nostra Visione",
  "visionDesc": "Essere il partner infrastrutturale di comunicazione globale più affidabile al mondo, innovando costantemente con l'intelligenza artificiale.",
  "coreValuesTitle": "I Principi che Guidano le Nostre Operazioni",
  "values": [
    {
      "title": "Qualità Senza Compromessi",
      "desc": "Rotte vocali CLI verificate e consegna di SMS OTP in meno di due secondi."
    },
    {
      "title": "Affidabilità di Grado Carrier",
      "desc": "Disponibilità del 99.99% supportata dalla sorveglianza proattiva del NOC 24/7/365."
    },
    {
      "title": "Scalabilità Globale",
      "desc": "Infrastruttura elastica progettata per gestire picchi di traffico senza interruzioni."
    },
    {
      "title": "Partnership Trasparente",
      "desc": "Fatturazione diretta, dashboard analitiche in tempo reale e technical account manager dedicati."
    }
  ],
  "whatWeDoBadge": "COSA FACCIAMO",
  "whatWeDoTitle": "Connettere Ogni Angolo del Mondo con Telecomunicazioni Unificate",
  "whatWeDoSubtitle": "Sviluppato da zero per supportare operazioni aziendali ad alto throughput e sensibili alla latenza.",
  "pillars": [
    {
      "title": "Terminazione Voce & SIP Trunking",
      "desc": "Terminazione vocale internazionale di grado carrier con CLI garantito e bassissima latenza.",
      "points": [
        "Oltre 100 rotte dirette",
        "Terminazione A-Z Tier-1 internazionale",
        "Motore Least-Cost-Routing intelligente",
        "Gateway SIP ridondanti"
      ]
    },
    {
      "title": "Messaggistica ad Alta Garanzia & OTP",
      "desc": "Consegna SMS rapida e affidabile per password monouso e notifiche di transazione.",
      "points": [
        "Consegna OTP in meno di 2 secondi",
        "Connettività SMPP e REST API",
        "Ricevute di consegna in tempo reale (DLR)",
        "Rotte dirette con operatori mobili"
      ]
    },
    {
      "title": "Numeri Virtuali Globali (DID)",
      "desc": "Numeri locali, verdi e mobili in oltre 100 paesi per una presenza aziendale immediata.",
      "points": [
        "Attivazione istantanea dei numeri",
        "Supporto voce e SMS bidirezionale",
        "Inoltro SIP altamente flessibile",
        "Caller ID locale"
      ]
    },
    {
      "title": "Dialer Cloud per Contact Center",
      "desc": "Soluzioni di composizione predittiva WebRTC e mobile per team commerciali e di supporto.",
      "points": [
        "Modalità predittiva e progressiva",
        "Chiamate WebRTC direttamente da browser",
        "Ascolto e intervento del supervisore in tempo reale",
        "Registrazione automatica su CRM"
      ]
    }
  ],
  "servicesBadge": "I NOSTRI SERVIZI",
  "servicesTitle": "Suite Telecom Completa per le Imprese Moderne",
  "servicesSubtitle": "Scopri i nostri prodotti modulari progettati per scalare le tue operazioni e ottimizzare i costi.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Voce Wholesale",
      "desc": "Terminazione vocale internazionale affidabile con CLI certificato e qualità carrier premium.",
      "href": "/wholesale-voice",
      "badge": "Rotte Dirette",
      "features": [
        "Copertura Globale A-Z",
        "Interconnessioni Tier-1",
        "Instradamento Ottimizzato"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Soluzioni Vocali con IA",
      "desc": "Esperienze vocali automatizzate e IVR intelligenti progettati per contact center all'avanguardia.",
      "href": "/voice",
      "badge": "Automatizzato",
      "features": [
        "Interazione Vocale Naturale",
        "Routing IVR Intelligente",
        "Analisi Vocale Live"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Numeri Virtuali (DID)",
      "desc": "Numeri geografici, verdi e mobili in oltre 100 nazioni per consolidare il tuo brand.",
      "href": "/virtual-did",
      "badge": "100+ Paesi",
      "features": [
        "Attivazione Immediata",
        "Voce e SMS Bidirezionali",
        "Inoltro SIP Flessibile"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS Wholesale",
      "desc": "Trasmissione massiva di SMS verso utenti mobili di reti telefoniche mondiali.",
      "href": "/wholesale-message",
      "badge": "Alto Throughput",
      "features": [
        "Rotte Dirette Operatori",
        "Protocolli SMPP e HTTP",
        "Copertura Globale"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portale SMS OTP",
      "desc": "Consegna ultraveloce di codici di verifica per banche e piattaforme fintech.",
      "href": "/otp-sms",
      "badge": "Consegna Immediata",
      "features": [
        "Tasso di Consegna 99.8%",
        "Routing Anti-Frode",
        "Crittografia End-to-End"
      ]
    },
    {
      "id": "dialer",
      "title": "Soluzione Dialer Completa",
      "desc": "Dialer per call center WebRTC e mobile con monitoraggio del supervisore e instradamento smart.",
      "href": "/dialer",
      "badge": "WebRTC & Mobile",
      "features": [
        "Chiamata Predittiva",
        "Ascolto e Inserimento Live",
        "Wallboard in Tempo Reale"
      ]
    }
  ],
  "mapBadge": "SEDE CENTRALE E COPERTURA",
  "mapTitle": "La Nostra Presenza Strategica e Indirizzo Registrato",
  "mapSubtitle": "Con centri operativi di rete specializzati e punti di presenza globali, supportiamo le imprese 24 ore su 24, 365 giorni all'anno.",
  "officeTitle": "Sede Aziendale",
  "officeAddressLabel": "Indirizzo Registrato",
  "officePhoneLabel": "Supporto Telefonico",
  "officeEmailLabel": "Richieste Via E-mail",
  "officeSupportLabel": "Disponibilità Supporto",
  "officeSupportHours": "Supporto NOC 24/7/365",
  "nocLabel": "Centro Operativo di Rete Globale",
  "nocDesc": "Monitoraggio proattivo della latenza, failover automatico e ingegneri tecnici dedicati.",
  "mapPinTitle": "Operazioni iNet Global",
  "mapPinDesc": "Hub strategico nel Financial Park collegato a reti di transito internazionali Tier-1.",
  "ctaTitle": "Pronto a Trasformare la Tua Infrastruttura di Telecomunicazioni?",
  "ctaSubtitle": "Collabora con iNet Global per ottenere rotte vocali cristalline, messaggistica ad alta capacità e numeri virtuali.",
  "ctaPrimaryBtn": "Prenota una Consulenza",
  "ctaSecondaryBtn": "Esplora i Nostri Prodotti",
  "floatingTier1Badge": {
    "title": "Rotte Dirette Tier-1",
    "sub": "SLA Aziendale 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Interconnessioni Globali Dirette",
    "sub": "Transito wholesale internazionale senza attriti"
  },
  "mapLiveLocation": "Posizione in Tempo Reale",
  "postalAddressLabel": "Indirizzo Postale",
  "ctaGuaranteedSla": "SLA Garantito 99.99%",
  "ctaDedicatedNoc": "NOC Dedicato 24/7/365"
};

const ko: AboutUsTranslation = {
  "heroBadge": "INET GLOBAL 소개",
  "heroTitle": "통신사 등급 인프라로 글로벌 비즈니스 커뮤니케이션 지원",
  "heroSubtitle": "iNet Global은 100개 이상의 국가에서 대용량 국제 도매 음성, 안전한 OTP 메시징, 가상 번호(DID) 및 차세대 다이얼러 인프라를 제공하는 프리미엄 통신 기업입니다.",
  "contactBtn": "전문가 팀에 문의",
  "servicesBtn": "서비스 둘러보기",
  "heroStats": [
    {
      "label": "연결 국가 수",
      "value": "100+",
      "sub": "글로벌 통신사 직결"
    },
    {
      "label": "네트워크 안정성",
      "value": "99.99%",
      "sub": "기업용 SLA 99.99%"
    },
    {
      "label": "월간 처리 트래픽",
      "value": "1B+",
      "sub": "수십억 분의 음성 및 SMS"
    },
    {
      "label": "글로벌 기술 NOC",
      "value": "24/7/365",
      "sub": "24/7 실시간 지연 모니터링"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet 글로벌 네트워크",
    "status": "실시간 운영 및 감시 중",
    "regionLabel": "글로벌 기업 전용 루트",
    "latency": "14ms",
    "card1Title": "네트워크 SLA",
    "card1Val": "99.99%",
    "card1Badge": "글로벌 SLA",
    "card2Title": "활성 경로",
    "card2Val": "100+",
    "card2Badge": "Tier-1 통신사",
    "routesTitle": "실시간 회선 상태",
    "route1": {
      "name": "미국 및 유럽 SIP 직결 루트",
      "quality": "100%",
      "status": "최적화됨"
    },
    "route2": {
      "name": "아시아 태평양 SMS 게이트웨이",
      "quality": "99.9%",
      "status": "최적화됨"
    },
    "route3": {
      "name": "글로벌 OTP 최우선 전송 경로",
      "quality": "99.8%",
      "status": "최적화됨"
    },
    "bottomStat1": "왕복 지연 시간",
    "bottomStat1Val": "14ms",
    "bottomStat2": "글로벌 가용성",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "회사 개요",
  "companyTitle": "글로벌 신뢰성을 기반으로 엔터프라이즈 성장을 견인합니다",
  "companySubtitle": "전 세계 통신 사업자, 애그리게이터 및 대기업에 미션 크리티컬 통신 서비스를 제공합니다.",
  "companyStory1": "글로벌 통신을 단순화하고 혁신하겠다는 비전으로 설립된 iNet Global은 미주, 유럽, 아시아, 중동 전역의 주요 Tier-1 통신사와 직접 연동망을 구축했습니다.",
  "companyStory2": "현재 전 세계 핀테크, 헬스케어, 이커머스 선도 기업 및 통신 리셀러를 위해 매월 수십억 건의 음성 통화와 메시지를 안정적으로 처리하고 있습니다.",
  "missionTitle": "우리의 사명",
  "missionDesc": "타협 없는 음성 품질, 신뢰할 수 있는 본인 인증 메시지, 유연한 가상 번호를 통해 기업이 전 세계 어디서나 원활하게 소통할 수 있도록 지원합니다.",
  "visionTitle": "우리의 비전",
  "visionDesc": "AI 지능형 기술과 통신사 등급의 인프라를 바탕으로 세계에서 가장 신뢰받는 글로벌 통신 인프라 파트너가 되는 것입니다.",
  "coreValuesTitle": "우리의 핵심 가치",
  "values": [
    {
      "title": "타협 없는 품질",
      "desc": "철저히 검증된 CLI 음성 라우팅과 2초 미만의 초고속 OTP 전송 보장."
    },
    {
      "title": "통신사급 신뢰성",
      "desc": "연중무휴 24시간 능동적인 NOC 감시 체계를 통한 99.99% 가용성 보장."
    },
    {
      "title": "글로벌 확장성",
      "desc": "급격한 트래픽 증가에도 안정적인 대용량 처리 아키텍처."
    },
    {
      "title": "투명한 파트너십",
      "desc": "투명한 정산, 실시간 데이터 분석 대시보드 및 전담 기술 매니저 지원."
    }
  ],
  "whatWeDoBadge": "사업 영역",
  "whatWeDoTitle": "통합 통신망으로 전 세계 모든 곳을 연결합니다",
  "whatWeDoSubtitle": "지연 시간에 민감한 대규모 비즈니스 운영을 지원하도록 설계되었습니다.",
  "pillars": [
    {
      "title": "국제 음성 통신 및 SIP 트렁킹",
      "desc": "보장된 CLI와 초저지연을 갖춘 통신사 등급의 국제 음성 종단 서비스.",
      "points": [
        "100개 이상의 통신사 직결 루트",
        "Tier-1 A-Z 국제 전화 종단",
        "지능형 최소 비용 라우팅(LCR) 엔진",
        "이중화된 SIP 게이트웨이"
      ]
    },
    {
      "title": "고신뢰 메시징 및 OTP 인증",
      "desc": "시간에 민감한 일회용 비밀번호 및 금융 거래 알림을 위한 빠르고 안전한 SMS.",
      "points": [
        "2초 이내 초고속 OTP 전송",
        "SMPP 및 REST API 연동 지원",
        "실시간 전송 영수증(DLR) 리포트",
        "현지 이동통신사 직접 연동"
      ]
    },
    {
      "title": "글로벌 가상 번호 (DID)",
      "desc": "전 세계 100개국 이상의 로컬, 톨프리 및 모바일 가상 번호 제공.",
      "points": [
        "즉각적인 번호 개통",
        "양방향 음성 및 SMS 완벽 지원",
        "유연한 SIP 착신 전환",
        "현지 발신번호 표시 지원"
      ]
    },
    {
      "title": "클라우드 콜센터 다이얼러",
      "desc": "영업 및 고객지원 팀을 위한 WebRTC 및 모바일 예측 다이얼러 솔루션.",
      "points": [
        "예측 및 순차 다이얼링 모드",
        "브라우저 기반 무설치 WebRTC 통화",
        "실시간 관리자 도청 및 코칭 기능",
        "CRM 자동 연동 및 통화 기록"
      ]
    }
  ],
  "servicesBadge": "서비스 제품군",
  "servicesTitle": "현대 기업을 위한 완벽한 통신 스위트",
  "servicesSubtitle": "비즈니스를 확장하고 운영 비용을 절감하도록 설계된 모듈형 통신 솔루션을 만나보세요.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "도매 음성 (Wholesale Voice)",
      "desc": "검증된 CLI와 고품질 통신사 경로를 통한 안정적인 국제 음성 서비스.",
      "href": "/wholesale-voice",
      "badge": "직결 경로",
      "features": [
        "A-Z 글로벌 커버리지",
        "Tier-1 직접 상호연동",
        "비용 최적화 라우팅"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI 음성 솔루션",
      "desc": "현대적인 컨택센터를 위한 지능형 자동 음성 응답 및 엔터프라이즈 IVR.",
      "href": "/voice",
      "badge": "자동화",
      "features": [
        "자연스러운 음성 대화",
        "스마트 IVR 라우팅",
        "실시간 음성 데이터 분석"
      ]
    },
    {
      "id": "virtual-did",
      "title": "가상 번호 (DID)",
      "desc": "브랜드의 글로벌 진출을 지원하는 100개국 이상의 가상 전화번호.",
      "href": "/virtual-did",
      "badge": "100개국 지원",
      "features": [
        "즉각적인 번호 발급",
        "양방향 음성/SMS",
        "유연한 착신 전환"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "대용량 SMS",
      "desc": "글로벌 모바일 가입자를 대상으로 대규모 비즈니스 SMS 전송.",
      "href": "/wholesale-message",
      "badge": "대용량 처리",
      "features": [
        "통신사 직접 루트",
        "SMPP 및 HTTP 지원",
        "광범위한 글로벌 도달"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS 포털",
      "desc": "금융권 및 핀테크 플랫폼에 최적화된 초고속 본인인증 번호 전송.",
      "href": "/otp-sms",
      "badge": "초고속 전송",
      "features": [
        "도달률 99.8%",
        "어뷰징 방지 라우팅",
        "종단간 암호화 전송"
      ]
    },
    {
      "id": "dialer",
      "title": "올인원 다이얼러 솔루션",
      "desc": "감독자 모니터링 및 스마트 라우팅을 갖춘 WebRTC 및 모바일 다이얼러.",
      "href": "/dialer",
      "badge": "WebRTC & 모바일",
      "features": [
        "예측 다이얼링 지원",
        "실시간 모니터링",
        "실시간 통계 보드"
      ]
    }
  ],
  "mapBadge": "글로벌 본사 및 인프라",
  "mapTitle": "전략적 거점 및 공식 등록 본사",
  "mapSubtitle": "전문 네트워크 운영 센터(NOC)와 글로벌 PoP을 통해 1년 365일 24시간 엔터프라이즈를 지원합니다.",
  "officeTitle": "글로벌 본사",
  "officeAddressLabel": "공식 등록 주소",
  "officePhoneLabel": "전화 지원",
  "officeEmailLabel": "이메일 문의",
  "officeSupportLabel": "기술 지원 가용성",
  "officeSupportHours": "연중무휴 24/7/365 NOC",
  "nocLabel": "글로벌 네트워크 운영 센터 (NOC)",
  "nocDesc": "선제적 지연 시간 모니터링, 자동 장애 조치 및 전문 엔지니어 24시간 상주.",
  "mapPinTitle": "iNet Global 운영 허브",
  "mapPinDesc": "국제 Tier-1 기간망과 직접 연결된 전략적 금융 단지 인프라 허브.",
  "ctaTitle": "글로벌 통신 인프라를 한 단계 업그레이드할 준비가 되셨나요?",
  "ctaSubtitle": "iNet Global과 함께 전 세계 깨끗한 음성 회선, 대용량 메시징, 가상 번호를 활용해 보세요.",
  "ctaPrimaryBtn": "전문가 상담 예약",
  "ctaSecondaryBtn": "전체 서비스 보기",
  "floatingTier1Badge": {
    "title": "Tier-1 직결 경로",
    "sub": "엔터프라이즈 SLA 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "글로벌 직접 상호연동",
    "sub": "무중단 국제 통신 중계"
  },
  "mapLiveLocation": "실시간 위치",
  "postalAddressLabel": "우편 주소",
  "ctaGuaranteedSla": "99.99% 보장형 SLA",
  "ctaDedicatedNoc": "24/7/365 전담 기술 NOC"
};

const nl: AboutUsTranslation = {
  "heroBadge": "OVER INET GLOBAL",
  "heroTitle": "Wereldwijde Bedrijfscommunicatie met Carrier-Grade Betrouwbaarheid",
  "heroSubtitle": "iNet Global is een vooraanstaande internationale telecomprovider van wholesale spraakterminatie, veilige OTP-authenticatie, virtuele DID-nummers en contactcenter-software in meer dan 100 landen.",
  "contactBtn": "Contacteer Ons Team",
  "servicesBtn": "Bekijk Diensten",
  "heroStats": [
    {
      "label": "Aangesloten Landen",
      "value": "100+",
      "sub": "Directe carrier-terminatie"
    },
    {
      "label": "Netwerkbetrouwbaarheid",
      "value": "99.99%",
      "sub": "Enterprise SLA 99.99%"
    },
    {
      "label": "Maandelijks Volume",
      "value": "1B+",
      "sub": "Miljarden spraakminuten & SMS"
    },
    {
      "label": "Wereldwijd Technisch NOC",
      "value": "24/7/365",
      "sub": "Actieve latency-monitoring"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Global Netwerk",
    "status": "Actief & Bewaakt",
    "regionLabel": "Globale Enterprise Route",
    "latency": "14ms",
    "card1Title": "Netwerk SLA",
    "card1Val": "99.99%",
    "card1Badge": "Globale SLA",
    "card2Title": "Actieve Routes",
    "card2Val": "100+",
    "card2Badge": "Tier-1 Operator",
    "routesTitle": "Live Routestatus",
    "route1": {
      "name": "VS & EU SIP Directe Route",
      "quality": "100%",
      "status": "Geoptimaliseerd"
    },
    "route2": {
      "name": "APAC Carrier SMS Gateway",
      "quality": "99.9%",
      "status": "Geoptimaliseerd"
    },
    "route3": {
      "name": "Globale OTP Hoge Prioriteit",
      "quality": "99.8%",
      "status": "Geoptimaliseerd"
    },
    "bottomStat1": "Round-Trip Latency",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Wereldwijde Beschikbaarheid",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "WIE WE ZIJN",
  "companyTitle": "Gebouwd op Wereldwijde Betrouwbaarheid, Ontworpen voor Bedrijfsgroei",
  "companySubtitle": "Het leveren van bedrijfskritieke telecomdiensten aan operators, aggregators en ondernemingen wereldwijd.",
  "companyStory1": "Opgericht met de ambitie om internationale telecom te vereenvoudigen, heeft iNet Global directe interconnecties opgezet met toonaangevende Tier-1 carriers in Amerika, Europa, Azië en het Midden-Oosten.",
  "companyStory2": "Vandaag verwerken we maandelijks miljarden minuten en berichten voor wereldwijde fintechs, zorgaanbieders, e-commerce leiders en telecomresellers.",
  "missionTitle": "Onze Missie",
  "missionDesc": "Het leveren van superieure spraakkwaliteit, betrouwbare verificatieberichten en flexibele virtuele nummers voor moeiteloze wereldwijde communicatie.",
  "visionTitle": "Onze Visie",
  "visionDesc": "De meest betrouwbare wereldwijde communicatie-infrastructuurpartner ter wereld zijn, gedreven door continue AI-innovatie.",
  "coreValuesTitle": "Onze Kernwaarden",
  "values": [
    {
      "title": "Compromisloze Kwaliteit",
      "desc": "Geverifieerde CLI-spraakroutes en gegarandeerde OTP-aflevering binnen 2 seconden."
    },
    {
      "title": "Carrier-Grade Betrouwbaarheid",
      "desc": "99.99% uptime ondersteund door proactieve 24/7/365 NOC-bewaking."
    },
    {
      "title": "Wereldwijde Schaalbaarheid",
      "desc": "Robuuste netwerkcapaciteit ontworpen om soepel mee te schalen met verkeerspieken."
    },
    {
      "title": "Transparant Partnerschap",
      "desc": "Directe facturatie, live dashboards en toegewijde technische accountmanagers."
    }
  ],
  "whatWeDoBadge": "WAT WE DOEN",
  "whatWeDoTitle": "Elke Uithoek van de Wereld Verbinden met Geünificeerde Telecom",
  "whatWeDoSubtitle": "Ontworpen om grootschalige, latentiegevoelige bedrijfsactiviteiten vlekkeloos te ondersteunen.",
  "pillars": [
    {
      "title": "Spraakterminatie & SIP-Trunking",
      "desc": "Internationale spraakterminatie op operatorniveau met gegarandeerde CLI en lage latentie.",
      "points": [
        "100+ directe carrier-routes",
        "Tier-1 A-Z wereldwijde terminatie",
        "Intelligente Least-Cost-Routing engine",
        "Redundante SIP-gateways"
      ]
    },
    {
      "title": "Veilige Messaging & OTP",
      "desc": "Snelle en betrouwbare SMS-aflevering voor tijdgevoelige verificatiecodes en transactiemeldingen.",
      "points": [
        "Sub-2 seconden OTP-aflevering",
        "SMPP- en REST-API-verbindingen",
        "Real-time afleverbevestigingen (DLR)",
        "Directe mobiele carrier-routes"
      ]
    },
    {
      "title": "Wereldwijde Virtuele Nummers (DID)",
      "desc": "Lokale, gratis en mobiele nummers in meer dan 100 landen voor een directe lokale merkidentiteit.",
      "points": [
        "Directe nummeractivatie",
        "Tweewegs spraak en SMS",
        "Flexibele SIP-doorschakeling",
        "Lokale nummerweergave"
      ]
    },
    {
      "title": "Cloud Contactcenter Dialer",
      "desc": "WebRTC- en mobiele voorspellende dialer-oplossingen voor verkoop- en supportteams.",
      "points": [
        "Predictieve en progressieve modi",
        "In-browser bellen via WebRTC",
        "Live meeluisteren en inbreken",
        "Automatische CRM-gespreksregistratie"
      ]
    }
  ],
  "servicesBadge": "ONZE DIENSTEN",
  "servicesTitle": "Complete Telecomsuite voor Moderne Ondernemingen",
  "servicesSubtitle": "Ontdek onze modulaire producten om uw activiteiten op te schalen en kosten te optimaliseren.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Wholesale Spraak",
      "desc": "Betrouwbare internationale spraakterminatie met gecertificeerde CLI en topkwaliteit.",
      "href": "/wholesale-voice",
      "badge": "Directe Routes",
      "features": [
        "A-Z Wereldwijd Bereik",
        "Tier-1 Interconnects",
        "Kostenefficiënte Routing"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI Spraakoplossingen",
      "desc": "Slimme geautomatiseerde spraakdialogen en enterprise IVR voor moderne contactcenters.",
      "href": "/voice",
      "badge": "Geautomatiseerd",
      "features": [
        "Natuurlijke Spraakinteractie",
        "Slimme IVR-routering",
        "Live Spraakanalyse"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Virtuele Nummers (DID)",
      "desc": "Lokale en 0800-nummers in meer dan 100 landen voor wereldwijde aanwezigheid.",
      "href": "/virtual-did",
      "badge": "100+ Landen",
      "features": [
        "Directe Toewijzing",
        "Twee-richtings Spraak & SMS",
        "Flexibele Doorschakeling"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Wholesale SMS",
      "desc": "Grootschalige bulk-SMS-verzending naar mobiele abonnees over wereldwijde netwerken.",
      "href": "/wholesale-message",
      "badge": "Hoge Capaciteit",
      "features": [
        "Directe Carrier-Routes",
        "SMPP & HTTP Protocollen",
        "Wereldwijd Bereik"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS Portaal",
      "desc": "Ultrasnelle verificatiecode-aflevering ontworpen voor banken en fintech-platformen.",
      "href": "/otp-sms",
      "badge": "Directe Aflevering",
      "features": [
        "99.8% Afleveringspercentage",
        "Anti-Fraude Routering",
        "Volledig Versleuteld"
      ]
    },
    {
      "id": "dialer",
      "title": "Complete Dialer Oplossing",
      "desc": "WebRTC browser- en mobiele dialer met supervisorsurveillance en slimme routering.",
      "href": "/dialer",
      "badge": "WebRTC & Mobiel",
      "features": [
        "Predictief Bellen",
        "Live Meeluisteren",
        "Real-Time Dashboard"
      ]
    }
  ],
  "mapBadge": "HOOFDKANTOOR & WERELDWIJD NETWERK",
  "mapTitle": "Onze Strategische Aanwezigheid en Vestigingsadres",
  "mapSubtitle": "Met gespecialiseerde netwerkoperatiecentra en wereldwijde PoP's ondersteunen we bedrijven 24 uur per dag, 365 dagen per jaar.",
  "officeTitle": "Hoofdkantoor",
  "officeAddressLabel": "Officieel Vestigingsadres",
  "officePhoneLabel": "Telefonische Support",
  "officeEmailLabel": "E-mail Vragen",
  "officeSupportLabel": "Supportbeschikbaarheid",
  "officeSupportHours": "24/7/365 NOC Support",
  "nocLabel": "Wereldwijd Network Operation Center",
  "nocDesc": "Proactieve monitoring van latentie, automatische failover en gespecialiseerde technici.",
  "mapPinTitle": "iNet Global Operaties",
  "mapPinDesc": "Strategische hub in Financial Park aangesloten op internationale Tier-1 netwerken.",
  "ctaTitle": "Klaar om Uw Globale Telecominfrastructuur te Transformeren?",
  "ctaSubtitle": "Werk samen met iNet Global voor kristalheldere spraak, snelle SMS en virtuele nummers over de hele wereld.",
  "ctaPrimaryBtn": "Plan een Adviesgesprek",
  "ctaSecondaryBtn": "Ontdek Onze Producten",
  "floatingTier1Badge": {
    "title": "Tier-1 Directe Routes",
    "sub": "99.99% Enterprise SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Directe Globale Interconnects",
    "sub": "Vlekkeloze internationale groothandelstransit"
  },
  "mapLiveLocation": "Live Locatie",
  "postalAddressLabel": "Postadres",
  "ctaGuaranteedSla": "99.99% Gegarandeerde SLA",
  "ctaDedicatedNoc": "24/7/365 Toegewijd NOC"
};

const tr: AboutUsTranslation = {
  "heroBadge": "INET GLOBAL HAKKINDA",
  "heroTitle": "Operatör Düzeyinde Altyapı ile Küresel İletişimi Güçlendiriyoruz",
  "heroSubtitle": "iNet Global, 100'den fazla ülkede toptan ses terminasyonu, güvenli OTP mesajlaşması, sanal numaralar (DID) ve yeni nesil çağrı merkezi altyapısı sunan lider bir uluslararası telekomünikasyon sağlayıcısıdır.",
  "contactBtn": "Ekibimizle İletişime Geçin",
  "servicesBtn": "Hizmetleri Keşfedin",
  "heroStats": [
    {
      "label": "Bağlantılı Ülke",
      "value": "100+",
      "sub": "Doğrudan operatör terminasyonu"
    },
    {
      "label": "Ağ Güvenilirliği",
      "value": "99.99%",
      "sub": "%99.99 Kurumsal SLA"
    },
    {
      "label": "Aylık İşlem Hacmi",
      "value": "1B+",
      "sub": "Milyarlarca ses dakikası & SMS"
    },
    {
      "label": "Küresel Teknik NOC",
      "value": "24/7/365",
      "sub": "7/24 aktif gecikme takibi"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Global Ağı",
    "status": "Aktif ve İzleniyor",
    "regionLabel": "Küresel Kurumsal Rota",
    "latency": "14ms",
    "card1Title": "Ağ SLA",
    "card1Val": "99.99%",
    "card1Badge": "Küresel SLA",
    "card2Title": "Aktif Rotalar",
    "card2Val": "100+",
    "card2Badge": "Tier-1 Operatör",
    "routesTitle": "Canlı Rota Durumu",
    "route1": {
      "name": "ABD & AB Doğrudan SIP Rotası",
      "quality": "100%",
      "status": "Optimize Edildi"
    },
    "route2": {
      "name": "APAC Operatör SMS Ağ Geçidi",
      "quality": "99.9%",
      "status": "Optimize Edildi"
    },
    "route3": {
      "name": "Küresel OTP Yüksek Öncelikli Rota",
      "quality": "99.8%",
      "status": "Optimize Edildi"
    },
    "bottomStat1": "Gidiş-Dönüş Gecikmesi",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Küresel Erişilebilirlik",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "BİZ KİMİZ",
  "companyTitle": "Küresel Güvenilirlik Üzerine İnşa Edildi, Büyüme İçin Tasarlandı",
  "companySubtitle": "Dünya genelindeki telekom operatörlerine, toplayıcılara ve kurumsal işletmelere kritik telekomünikasyon altyapısı sağlıyoruz.",
  "companyStory1": "Küresel telekomünikasyonu basitleştirmek ve standartları yükseltmek amacıyla kurulan iNet Global, Amerika, Avrupa, Asya ve Orta Doğu'daki önde gelen Tier-1 operatörlerle doğrudan ara bağlantılar kurmuştur.",
  "companyStory2": "Bugün, dünya çapındaki fintech, sağlık, e-ticaret devleri ve telekom bayileri için her ay milyarlarca dakika ve mesajı kesintisiz olarak yönetiyoruz.",
  "missionTitle": "Misyonumuz",
  "missionDesc": "Şirketlerin dünyanın her yerinde zahmetsizce iletişim kurmasını sağlayan kusursuz ses kalitesi, güvenilir doğrulama mesajları ve esnek sanal numaralar sunmak.",
  "visionTitle": "Vizyonumuz",
  "visionDesc": "Yapay zeka zekası ve operatör kalitesiyle sürekli yenilik yaparak dünyanın en güvenilir küresel iletişim altyapı ortağı olmak.",
  "coreValuesTitle": "Faaliyetlerimize Yön Veren İlkeler",
  "values": [
    {
      "title": "Ödünsüz Kalite",
      "desc": "Doğrulanmış CLI ses hatları ve 2 saniyenin altında OTP SMS teslimat garantisi."
    },
    {
      "title": "Operatör Güvenilirliği",
      "desc": "7/24/365 proaktif NOC izlemesiyle desteklenen %99.99 kurumsal çalışma süresi."
    },
    {
      "title": "Küresel Ölçeklenebilirlik",
      "desc": "Trafik artışlarınızla birlikte sorunsuz bir şekilde ölçeklenecek esnek altyapı."
    },
    {
      "title": "Şeffaf Ortaklık",
      "desc": "Net faturalandırma, anlık analitik panelleri ve özel teknik müşteri yöneticileri."
    }
  ],
  "whatWeDoBadge": "NELER YAPIYORUZ",
  "whatWeDoTitle": "Dünyanın Dört Bir Yanını Birleşik Telekom ile Birbirine Bağlıyoruz",
  "whatWeDoSubtitle": "Yüksek hacimli ve gecikmeye duyarlı kurumsal operasyonları desteklemek için sıfırdan tasarlandı.",
  "pillars": [
    {
      "title": "Ses Terminasyonu ve SIP Trunking",
      "desc": "Garantili CLI ve düşük gecikme süresi ile operatör düzeyinde uluslararası ses terminasyonu.",
      "points": [
        "100+ doğrudan operatör rotası",
        "Tier-1 A-Z uluslararası terminasyon",
        "Akıllı en düşük maliyetli yönlendirme (LCR)",
        "Yedekli SIP ağ geçitleri"
      ]
    },
    {
      "title": "Yüksek Güvenilirlikli Mesajlaşma & OTP",
      "desc": "Tek kullanımlık şifreler ve işlem bildirimleri için hızlı ve güvenli SMS teslimatı.",
      "points": [
        "2 saniyenin altında OTP teslimi",
        "SMPP ve REST API bağlantısı",
        "Gerçek zamanlı teslimat raporları (DLR)",
        "Doğrudan mobil operatör hatları"
      ]
    },
    {
      "title": "Küresel Sanal Numaralar (DID)",
      "desc": "Uluslararası varlık için 100'den fazla ülkede yerel, ücretsiz (0800) ve mobil numaralar.",
      "points": [
        "Anında numara tahsisi",
        "Çift yönlü ses ve SMS desteği",
        "Esnek SIP yönlendirme",
        "Yerel arayan kimliği (CLI)"
      ]
    },
    {
      "title": "Bulut Çağrı Merkezi Arayıcısı",
      "desc": "Satış ve destek ekipleri için WebRTC ve mobil uyumlu akıllı arama çözümleri.",
      "points": [
        "Tahmine dayalı (Predictive) arama",
        "Tarayıcı içi WebRTC aramaları",
        "Canlı dinleme ve çağrıya müdahale",
        "Otomatik CRM entegrasyonu"
      ]
    }
  ],
  "servicesBadge": "HİZMETLERİMİZ",
  "servicesTitle": "Modern İşletmeler İçin Eksiksiz Telekom Paketi",
  "servicesSubtitle": "Operasyonlarınızı büyütmek ve maliyetlerinizi düşürmek için tasarlanan modüler ürünlerimizi keşfedin.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Toptan Ses (Wholesale Voice)",
      "desc": "Garantili CLI ve birinci sınıf ses kalitesiyle güvenilir uluslararası ses terminasyonu.",
      "href": "/wholesale-voice",
      "badge": "Doğrudan Hatlar",
      "features": [
        "A-Z Küresel Kapsama",
        "Tier-1 Bağlantılar",
        "Maliyet Odaklı Rotalama"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Yapay Zeka Ses Çözümleri",
      "desc": "Modern çağrı merkezleri için akıllı sesli yanıt ve kurumsal IVR sistemleri.",
      "href": "/voice",
      "badge": "Otomasyon",
      "features": [
        "Doğal Sesli Etkileşim",
        "Akıllı IVR Yönlendirme",
        "Canlı Ses Analitiği"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Sanal Numaralar (DID)",
      "desc": "Markanızın küresel güvenilirliğini artırmak için 100+ ülkede yerel telefon numaraları.",
      "href": "/virtual-did",
      "badge": "100+ Ülke",
      "features": [
        "Hızlı Numara Kurulumu",
        "Çift Yönlü Ses ve SMS",
        "Dinamik Yönlendirme"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Toptan SMS",
      "desc": "Küresel mobil ağlar üzerinden son kullanıcılara yüksek kapasiteli toplu SMS iletimi.",
      "href": "/wholesale-message",
      "badge": "Yüksek Kapasite",
      "features": [
        "Doğrudan Operatör Rotaları",
        "SMPP ve HTTP Desteği",
        "Küresel Erişim"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS Portalı",
      "desc": "Bankalar ve fintech platformları için geliştirilmiş ultra hızlı doğrulama SMS'leri.",
      "href": "/otp-sms",
      "badge": "Anında Teslimat",
      "features": [
        "%99.8 Teslimat Oranı",
        "Dolandırıcılık Karşıtı Filtre",
        "Uçtan Uca Şifreleme"
      ]
    },
    {
      "id": "dialer",
      "title": "Entegre Arayıcı Çözümü",
      "desc": "Süpervizör izleme ve akıllı çağrı yönlendirme özellikli WebRTC ve mobil arayıcı.",
      "href": "/dialer",
      "badge": "WebRTC & Mobil",
      "features": [
        "Öngörülü Arama",
        "Canlı Dinleme ve Fısıldama",
        "Gerçek Zamanlı Panel"
      ]
    }
  ],
  "mapBadge": "GENEL MERKEZ VE KÜRESEL AĞ",
  "mapTitle": "Stratejik Varlığımız ve Resmi Adresimiz",
  "mapSubtitle": "Özel Ağ Operasyon Merkezlerimiz ve uluslararası erişim noktalarımızla, işletmeleri yılda 365 gün, günde 24 saat destekliyoruz.",
  "officeTitle": "Şirket Genel Merkezi",
  "officeAddressLabel": "Kayıtlı Resmi Adres",
  "officePhoneLabel": "Telefon Desteği",
  "officeEmailLabel": "E-posta İletişim",
  "officeSupportLabel": "Destek Erişilebilirliği",
  "officeSupportHours": "7/24/365 NOC Desteği",
  "nocLabel": "Küresel Ağ Operasyon Merkezi (NOC)",
  "nocDesc": "Proaktif gecikme izleme, otomatik rota yedekleme ve nöbetçi uzman telekom mühendisleri.",
  "mapPinTitle": "iNet Global Operasyonları",
  "mapPinDesc": "Uluslararası Tier-1 transit ağlarına bağlı stratejik Financial Park merkezi.",
  "ctaTitle": "Küresel İletişim Altyapınızı Dönüştürmeye Hazır mısınız?",
  "ctaSubtitle": "Dünya çapında kristal netliğinde ses rotaları, yüksek kapasiteli SMS ve sanal numaralar için iNet Global ile ortak olun.",
  "ctaPrimaryBtn": "Danışmanlık Randevusu Alın",
  "ctaSecondaryBtn": "Ürünlerimizi İnceleyin",
  "floatingTier1Badge": {
    "title": "Tier-1 Doğrudan Hatlar",
    "sub": "%99.99 Kurumsal SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Küresel Doğrudan Ara Bağlantılar",
    "sub": "Sorunsuz uluslararası toptan transit"
  },
  "mapLiveLocation": "Canlı Konum",
  "postalAddressLabel": "Posta Adresi",
  "ctaGuaranteedSla": "%99.99 Garantili SLA",
  "ctaDedicatedNoc": "7/24/365 Özel NOC Ekibi"
};

const id: AboutUsTranslation = {
  "heroBadge": "TENTANG INET GLOBAL",
  "heroTitle": "Memberdayakan Telekomunikasi Global dengan Kualitas Tingkat Operator",
  "heroSubtitle": "iNet Global adalah penyedia telekomunikasi internasional terkemuka yang menyediakan terminasi suara wholesale, perpesanan OTP aman, nomor virtual (DID), dan infrastruktur dialer di lebih dari 100 negara.",
  "contactBtn": "Hubungi Tim Kami",
  "servicesBtn": "Jelajahi Layanan",
  "heroStats": [
    {
      "label": "Negara Terhubung",
      "value": "100+",
      "sub": "Terminasi langsung operator"
    },
    {
      "label": "Keandalan Jaringan",
      "value": "99.99%",
      "sub": "SLA enterprise 99.99%"
    },
    {
      "label": "Volume Bulanan",
      "value": "1B+",
      "sub": "Miliaran menit suara & SMS"
    },
    {
      "label": "NOC Teknis Global",
      "value": "24/7/365",
      "sub": "Pemantauan latensi aktif 24/7"
    }
  ],
  "phoneMockup": {
    "appTitle": "Jaringan iNet Global",
    "status": "Aktif & Dipantau",
    "regionLabel": "Rute Enterprise Global",
    "latency": "14ms",
    "card1Title": "SLA Jaringan",
    "card1Val": "99.99%",
    "card1Badge": "SLA Global",
    "card2Title": "Rute Aktif",
    "card2Val": "100+",
    "card2Badge": "Operator Tier-1",
    "routesTitle": "Status Rute Langsung",
    "route1": {
      "name": "Rute Langsung SIP AS & Eropa",
      "quality": "100%",
      "status": "Dioptimalkan"
    },
    "route2": {
      "name": "Gateway SMS Operator APAC",
      "quality": "99.9%",
      "status": "Dioptimalkan"
    },
    "route3": {
      "name": "Rute Prioritas Tinggi OTP Global",
      "quality": "99.8%",
      "status": "Dioptimalkan"
    },
    "bottomStat1": "Latensi Bolak-Balik",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Ketersediaan Global",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "SIAPA KAMI",
  "companyTitle": "Dibangun atas Keandalan Global, Dirancang untuk Pertumbuhan Bisnis",
  "companySubtitle": "Menyediakan layanan telekomunikasi penting bagi operator seluler, agregator, dan perusahaan di seluruh dunia.",
  "companyStory1": "Didirikan dengan ambisi menyederhanakan telekomunikasi global, iNet Global telah membangun interkoneksi langsung dengan operator Tier-1 terkemuka di Amerika, Eropa, Asia, dan Timur Tengah.",
  "companyStory2": "Saat ini, kami memproses miliaran menit dan pesan setiap bulan untuk fintech global, layanan kesehatan, e-commerce terkemuka, dan reseller telekomunikasi.",
  "missionTitle": "Misi Kami",
  "missionDesc": "Memberikan kualitas suara murni, pesan verifikasi tepercaya, dan nomor virtual tanpa hambatan agar bisnis dapat berkomunikasi di mana saja.",
  "visionTitle": "Visi Kami",
  "visionDesc": "Menjadi mitra infrastruktur komunikasi global paling tepercaya di dunia dengan terus berinovasi melalui kecerdasan AI dan kinerja operator.",
  "coreValuesTitle": "Prinsip yang Memandu Operasi Kami",
  "values": [
    {
      "title": "Kualitas Tanpa Kompromi",
      "desc": "Rute suara CLI terverifikasi dan jaminan pengiriman SMS OTP di bawah 2 detik."
    },
    {
      "title": "Keandalan Tingkat Operator",
      "desc": "Uptime 99.99% yang didukung oleh pemantauan NOC proaktif 24/7/365."
    },
    {
      "title": "Skalabilitas Global",
      "desc": "Infrastruktur tangguh yang dirancang untuk mengatasi lonjakan trafik bisnis Anda dengan lancar."
    },
    {
      "title": "Kemitraan Transparan",
      "desc": "Penagihan langsung, dasbor analitik real-time, dan manajer akun teknis khusus."
    }
  ],
  "whatWeDoBadge": "APA YANG KAMI LAKUKAN",
  "whatWeDoTitle": "Menghubungkan Setiap Sudut Dunia dengan Telekomunikasi Terpadu",
  "whatWeDoSubtitle": "Dibangun dari awal untuk mendukung operasi bisnis berkapasitas tinggi dan sensitif terhadap latensi.",
  "pillars": [
    {
      "title": "Terminasi Suara & SIP Trunking",
      "desc": "Terminasi suara internasional tingkat operator dengan jaminan CLI dan latensi rendah.",
      "points": [
        "100+ rute operator langsung",
        "Terminasi internasional Tier-1 A-Z",
        "Mesin Least-Cost Routing cerdas",
        "Gateway SIP redundan"
      ]
    },
    {
      "title": "Pesan Berkeandalan Tinggi & OTP",
      "desc": "Pengiriman SMS cepat dan andal untuk kata sandi sekali pakai dan peringatan transaksi perbankan.",
      "points": [
        "Pengiriman OTP di bawah 2 detik",
        "Konektivitas SMPP dan REST API",
        "Laporan pengiriman real-time (DLR)",
        "Rute langsung operator seluler"
      ]
    },
    {
      "title": "Nomor Virtual Global (DID)",
      "desc": "Nomor lokal, bebas pulsa, dan seluler di lebih dari 100 negara untuk kehadiran global instan.",
      "points": [
        "Penyediaan nomor instan",
        "Mendukung suara dan SMS dua arah",
        "Penerusan panggilan SIP fleksibel",
        "Identitas penelepon lokal"
      ]
    },
    {
      "title": "Dialer Pusat Kontak Cloud",
      "desc": "Solusi dialer prediktif WebRTC dan seluler untuk tim penjualan dan layanan pelanggan.",
      "points": [
        "Mode prediktif dan progresif",
        "Panggilan WebRTC langsung di peramban",
        "Pemantauan langsung supervisor",
        "Pencatatan panggilan otomatis di CRM"
      ]
    }
  ],
  "servicesBadge": "LAYANAN KAMI",
  "servicesTitle": "Rangkaian Telekomunikasi Lengkap untuk Perusahaan Modern",
  "servicesSubtitle": "Jelajahi produk modular kami yang dirancang untuk mengembangkan operasi Anda dan menekan biaya.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Suara Wholesale",
      "desc": "Terminasi suara internasional tepercaya dengan CLI terjamin dan kualitas audio premium.",
      "href": "/wholesale-voice",
      "badge": "Rute Langsung",
      "features": [
        "Cakupan Global A-Z",
        "Interkoneksi Tier-1",
        "Perutean Hemat Biaya"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Solusi Suara AI",
      "desc": "Pengalaman suara otomatis cerdas dan IVR perusahaan untuk pusat kontak modern.",
      "href": "/voice",
      "badge": "Otomatisasi",
      "features": [
        "Interaksi Suara Alami",
        "Perutean IVR Pintar",
        "Wawasan Suara Real-Time"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Nomor Virtual (DID)",
      "desc": "Nomor telepon lokal dan bebas pulsa di 100+ negara untuk kehadiran merek global.",
      "href": "/virtual-did",
      "badge": "100+ Negara",
      "features": [
        "Aktivasi Nomor Cepat",
        "Suara & SMS Dua Arah",
        "Pengalihan Fleksibel"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS Wholesale",
      "desc": "Transmisi SMS massal bervolume tinggi ke pelanggan seluler di seluruh dunia.",
      "href": "/wholesale-message",
      "badge": "Throughput Tinggi",
      "features": [
        "Rute Operator Langsung",
        "Protokol SMPP & HTTP",
        "Jangkauan Global"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portal SMS OTP",
      "desc": "Pengiriman kode verifikasi ultra-cepat yang dirancang khusus untuk perbankan dan fintech.",
      "href": "/otp-sms",
      "badge": "Pengiriman Instan",
      "features": [
        "Tingkat Pengiriman 99.8%",
        "Perutean Anti-Penipuan",
        "Transmisi Terenkripsi"
      ]
    },
    {
      "id": "dialer",
      "title": "Solusi Dialer Lengkap",
      "desc": "Dialer WebRTC peramban dan seluler dengan pemantauan supervisor dan perutean cerdas.",
      "href": "/dialer",
      "badge": "WebRTC & Seluler",
      "features": [
        "Panggilan Prediktif",
        "Mendengarkan & Intervensi Langsung",
        "Wallboard Real-Time"
      ]
    }
  ],
  "mapBadge": "KANTOR PUSAT & JANGKAUAN GLOBAL",
  "mapTitle": "Kehadiran Strategis dan Alamat Terdaftar Kami",
  "mapSubtitle": "Dengan Pusat Operasi Jaringan khusus dan titik kehadiran global, kami mendukung bisnis 24 jam sehari, 365 hari setahun.",
  "officeTitle": "Kantor Pusat Perusahaan",
  "officeAddressLabel": "Alamat Terdaftar",
  "officePhoneLabel": "Dukungan Telepon",
  "officeEmailLabel": "Pertanyaan Email",
  "officeSupportLabel": "Ketersediaan Dukungan",
  "officeSupportHours": "Dukungan NOC 24/7/365",
  "nocLabel": "Pusat Operasi Jaringan Global (NOC)",
  "nocDesc": "Pemantauan latensi proaktif, pengalihan rute otomatis, dan teknisi siap siaga.",
  "mapPinTitle": "Operasi iNet Global",
  "mapPinDesc": "Pusat Financial Park strategis yang terhubung ke jaringan transit operator Tier-1 internasional.",
  "ctaTitle": "Siap Mentransformasi Infrastruktur Telekomunikasi Global Anda?",
  "ctaSubtitle": "Bermitra dengan iNet Global untuk membuka rute suara jernih, SMS berkecepatan tinggi, dan nomor virtual di seluruh dunia.",
  "ctaPrimaryBtn": "Jadwalkan Konsultasi",
  "ctaSecondaryBtn": "Jelajahi Produk Kami",
  "floatingTier1Badge": {
    "title": "Rute Langsung Tier-1",
    "sub": "SLA Enterprise 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Interkoneksi Langsung Global",
    "sub": "Transit wholesale internasional tanpa hambatan"
  },
  "mapLiveLocation": "Lokasi Langsung",
  "postalAddressLabel": "Alamat Pos",
  "ctaGuaranteedSla": "SLA Terjamin 99.99%",
  "ctaDedicatedNoc": "NOC Khusus 24/7/365"
};

const vi: AboutUsTranslation = {
  "heroBadge": "GIỚI THIỆU INET GLOBAL",
  "heroTitle": "Tiếp Sức Truyền Thông Toàn Cầu Với Hạ Tầng Chuẩn Nhà Mạng",
  "heroSubtitle": "iNet Global là nhà cung cấp viễn thông quốc tế hàng đầu, chuyên cung cấp dịch vụ thoại bán buôn, tin nhắn xác thực OTP bảo mật, số điện thoại ảo (DID) và giải pháp tổng đài quay số tại hơn 100 quốc gia.",
  "contactBtn": "Liên Hệ Đội Ngũ",
  "servicesBtn": "Khám Phá Dịch Vụ",
  "heroStats": [
    {
      "label": "Quốc Gia Kết Nối",
      "value": "100+",
      "sub": "Định tuyến nhà mạng trực tiếp"
    },
    {
      "label": "Độ Ổn Định Mạng",
      "value": "99.99%",
      "sub": "Cam kết SLA 99.99%"
    },
    {
      "label": "Lưu Lượng Hàng Tháng",
      "value": "1B+",
      "sub": "Hàng tỷ phút thoại & SMS"
    },
    {
      "label": "Trung Tâm NOC Kỹ Thuật",
      "value": "24/7/365",
      "sub": "Giám sát độ trễ chủ động 24/7"
    }
  ],
  "phoneMockup": {
    "appTitle": "Hạ Tầng iNet Global",
    "status": "Hoạt Động & Giám Sát",
    "regionLabel": "Tuyến Doanh Nghiệp Toàn Cầu",
    "latency": "14ms",
    "card1Title": "Cam Kết SLA",
    "card1Val": "99.99%",
    "card1Badge": "SLA Toàn Cầu",
    "card2Title": "Tuyến Đang Chạy",
    "card2Val": "100+",
    "card2Badge": "Nhà Mạng Tier-1",
    "routesTitle": "Tình Trạng Tuyến Trực Tiếp",
    "route1": {
      "name": "Tuyến Trực Tiếp SIP Mỹ & Châu Âu",
      "quality": "100%",
      "status": "Đã Tối Ưu"
    },
    "route2": {
      "name": "Cổng SMS Nhà Mạng APAC",
      "quality": "99.9%",
      "status": "Đã Tối Ưu"
    },
    "route3": {
      "name": "Tuyến OTP Ưu Tiên Cao Toàn Cầu",
      "quality": "99.8%",
      "status": "Đã Tối Ưu"
    },
    "bottomStat1": "Độ Trễ Hai Chiều",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Độ Sẵn Sàng Toàn Cầu",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "CHÚNG TÔI LÀ AI",
  "companyTitle": "Xây Dựng Trên Nền Tảng Uy Tín Toàn Cầu, Thiết Kế Cho Sự Mở Rộng Doanh Nghiệp",
  "companySubtitle": "Cung cấp các dịch vụ viễn thông thiết yếu cho các nhà khai thác di động, đơn vị tích hợp và doanh nghiệp trên toàn thế giới.",
  "companyStory1": "Được thành lập với sứ mệnh đơn giản hóa và nâng tầm viễn thông toàn cầu, iNet Global đã thiết lập kết nối trực tiếp với các nhà mạng Tier-1 hàng đầu tại Châu Mỹ, Châu Âu, Châu Á và Trung Đông.",
  "companyStory2": "Hiện nay, chúng tôi xử lý hàng tỷ phút gọi và tin nhắn mỗi tháng cho các công ty fintech, y tế, thương mại điện tử và các đại lý viễn thông quốc tế.",
  "missionTitle": "Sứ Mệnh Của Chúng Tôi",
  "missionDesc": "Cung cấp chất lượng âm thanh vượt trội, tin nhắn xác thực đáng tin cậy và đầu số ảo linh hoạt giúp doanh nghiệp kết nối liền mạch ở bất kỳ đâu.",
  "visionTitle": "Tầm Nhìn Của Chúng Tôi",
  "visionDesc": "Trở thành đối tác hạ tầng truyền thông toàn cầu đáng tin cậy nhất thế giới, tiên phong với trí tuệ nhân tạo AI và tiêu chuẩn viễn thông cao cấp.",
  "coreValuesTitle": "Giá Trị Cốt Lõi",
  "values": [
    {
      "title": "Chất Lượng Vượt Trội",
      "desc": "Tuyến thoại hiển thị đúng số (CLI) và đảm bảo gửi tin nhắn OTP dưới 2 giây."
    },
    {
      "title": "Độ Tin Cậy Chuẩn Nhà Mạng",
      "desc": "Thời gian hoạt động 99.99% được bảo đảm bởi trung tâm NOC giám sát liên tục 24/7/365."
    },
    {
      "title": "Khả Năng Mở Rộng Toàn Cầu",
      "desc": "Hạ tầng chịu tải lớn, sẵn sàng đáp ứng mọi đợt tăng vọt lưu lượng của doanh nghiệp."
    },
    {
      "title": "Hợp Tác Minh Bạch",
      "desc": "Báo cáo cước phí rõ ràng, bảng điều khiển số liệu tức thì và kỹ sư hỗ trợ chuyên trách."
    }
  ],
  "whatWeDoBadge": "LĨNH VỰC HOẠT ĐỘNG",
  "whatWeDoTitle": "Kết Nối Mọi Miền Thế Giới Bằng Hạ Tầng Viễn Thông Hợp Nhất",
  "whatWeDoSubtitle": "Được xây dựng chuyên biệt để vận hành các dịch vụ doanh nghiệp quy mô lớn và nhạy cảm về độ trễ.",
  "pillars": [
    {
      "title": "Dịch Vụ Thoại & SIP Trunking",
      "desc": "Dịch vụ thoại quốc tế chuẩn nhà mạng với hiển thị số đầy đủ và độ trễ cực thấp.",
      "points": [
        "Hơn 100 tuyến kết nối trực tiếp",
        "Định tuyến quốc tế A-Z Tier-1",
        "Hệ thống tối ưu chi phí (LCR)",
        "Cổng SIP dự phòng đa vùng"
      ]
    },
    {
      "title": "Tin Nhắn Bảo Mật & Mã OTP",
      "desc": "Gửi tin nhắn SMS tốc độ cao và ổn định cho mã xác thực một lần và thông báo giao dịch.",
      "points": [
        "Giao mã OTP dưới 2 giây",
        "Kết nối qua SMPP và REST API",
        "Báo cáo trạng thái tin nhắn (DLR) tức thì",
        "Kết nối trực tiếp nhà mạng di động"
      ]
    },
    {
      "title": "Đầu Số Điện Thoại Ảo (DID)",
      "desc": "Đầu số cố định, tổng đài miễn cước 1800/1900 và di động tại hơn 100 quốc gia.",
      "points": [
        "Kích hoạt số nhanh chóng",
        "Hỗ trợ gọi và nhắn tin hai chiều",
        "Chuyển tiếp cuộc gọi SIP linh hoạt",
        "Hiển thị đầu số địa phương"
      ]
    },
    {
      "title": "Hệ Thống Quay Số Call Center Đám Mây",
      "desc": "Giải pháp quay số dự đoán WebRTC và di động cho đội ngũ bán hàng và hỗ trợ khách hàng.",
      "points": [
        "Chế độ quay số tự động & dự đoán",
        "Gọi trực tiếp trên trình duyệt WebRTC",
        "Trưởng nhóm giám sát & can thiệp cuộc gọi",
        "Đồng bộ tự động dữ liệu vào CRM"
      ]
    }
  ],
  "servicesBadge": "DỊCH VỤ CỦA CHÚNG TÔI",
  "servicesTitle": "Hệ Thống Giải Pháp Viễn Thông Toàn Diện Cho Doanh Nghiệp Hiện Đại",
  "servicesSubtitle": "Khám phá các sản phẩm dạng module giúp tối ưu hóa chi phí và nâng tầm trải nghiệm khách hàng.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Thoại Bán Buôn (Wholesale Voice)",
      "desc": "Dịch vụ thoại quốc tế ổn định với CLI bảo đảm và chất lượng nhà mạng cao cấp.",
      "href": "/wholesale-voice",
      "badge": "Tuyến Trực Tiếp",
      "features": [
        "Phủ sóng A-Z toàn cầu",
        "Kết nối Tier-1",
        "Định tuyến tiết kiệm"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Giải Pháp Thoại AI",
      "desc": "Trợ lý ảo giọng nói AI và tổng đài IVR tự động thông minh cho các trung tâm liên lạc.",
      "href": "/voice",
      "badge": "Tự Động Hóa",
      "features": [
        "Tương tác giọng nói tự nhiên",
        "Định tuyến cuộc gọi thông minh",
        "Phân tích âm thanh tức thì"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Đầu Số Ảo (DID)",
      "desc": "Đầu số tại hơn 100 quốc gia giúp doanh nghiệp xây dựng uy tín thương hiệu bản địa.",
      "href": "/virtual-did",
      "badge": "Hơn 100 Quốc Gia",
      "features": [
        "Cấp số tức thì",
        "Thoại & SMS hai chiều",
        "Chuyển tiếp cuộc gọi"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS Bán Buôn",
      "desc": "Truyền gửi lượng lớn tin nhắn SMS tới thuê bao di động toàn cầu với tốc độ cao.",
      "href": "/wholesale-message",
      "badge": "Băng Thông Lớn",
      "features": [
        "Tuyến trực tiếp nhà mạng",
        "Giao thức SMPP & HTTP",
        "Độ phủ toàn cầu"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Cổng OTP SMS",
      "desc": "Gửi mã xác thực nhanh chóng cho các ngân hàng và tổ chức tài chính công nghệ fintech.",
      "href": "/otp-sms",
      "badge": "Gửi Tức Thì",
      "features": [
        "Tỷ lệ gửi đạt 99.8%",
        "Phòng chống gian lận cước",
        "Mã hóa toàn diện"
      ]
    },
    {
      "id": "dialer",
      "title": "Giải Pháp Quay Số Tự Động",
      "desc": "Phần mềm quay số WebRTC trên web và di động kèm tính năng giám sát trực tiếp.",
      "href": "/dialer",
      "badge": "WebRTC & Di Động",
      "features": [
        "Quay số dự đoán",
        "Nghe xen & nhắc cuộc gọi",
        "Bảng điều khiển trực quan"
      ]
    }
  ],
  "mapBadge": "TRỤ SỞ TOÀN CẦU & KẾT NỐI",
  "mapTitle": "Mạng Lưới Chiến Lược & Địa Chỉ Trụ Sở Đăng Ký",
  "mapSubtitle": "Với các trung tâm điều hành mạng chuyên biệt và hạ tầng viễn thông toàn cầu, chúng tôi hỗ trợ doanh nghiệp 24/7/365.",
  "officeTitle": "Trụ Sở Toàn Cầu",
  "officeAddressLabel": "Địa Chỉ Đăng Ký",
  "officePhoneLabel": "Hỗ Trợ Điện Thoại",
  "officeEmailLabel": "Email Liên Hệ",
  "officeSupportLabel": "Khung Giờ Hỗ Trợ",
  "officeSupportHours": "Hỗ Trợ NOC 24/7/365",
  "nocLabel": "Trung Tâm Điều Hành Mạng Toàn Cầu (NOC)",
  "nocDesc": "Giám sát độ trễ mạng chủ động, chuyển hướng tuyến tự động và kỹ sư trực liên tục.",
  "mapPinTitle": "Trung Tâm Điều Hành iNet Global",
  "mapPinDesc": "Trung tâm Financial Park chiến lược kết nối trực tiếp các mạng truyền dẫn Tier-1 quốc tế.",
  "ctaTitle": "Sẵn Sàng Nâng Cấp Hạ Tầng Viễn Thông Doanh Nghiệp?",
  "ctaSubtitle": "Hợp tác cùng iNet Global để mở khóa các tuyến thoại trong trẻo, tin nhắn tốc độ cao và số ảo trên toàn cầu.",
  "ctaPrimaryBtn": "Đặt Lịch Tư Vấn",
  "ctaSecondaryBtn": "Xem Danh Sách Sản Phẩm",
  "floatingTier1Badge": {
    "title": "Tuyến Trực Tiếp Tier-1",
    "sub": "Cam Kết SLA 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Kết Nối Quốc Tế Trực Tiếp",
    "sub": "Truyền dẫn bán buôn xuyên biên giới mượt mà"
  },
  "mapLiveLocation": "Vị Trí Trực Tiếp",
  "postalAddressLabel": "Địa Chỉ Thư Tín",
  "ctaGuaranteedSla": "Cam Kết SLA 99.99%",
  "ctaDedicatedNoc": "Đội Ngũ NOC Trực 24/7/365"
};

const pl: AboutUsTranslation = {
  "heroBadge": "O INET GLOBAL",
  "heroTitle": "Globalna Telekomunikacja o Niezawodności Klasy Operatorskiej",
  "heroSubtitle": "iNet Global to wiodący międzynarodowy dostawca telekomunikacyjny, świadczący usługi hurtowej terminacji głosu, bezpiecznych wiadomości OTP, wirtualnych numerów DID oraz systemów call center w ponad 100 krajach.",
  "contactBtn": "Skontaktuj się z Zespołem",
  "servicesBtn": "Poznaj Nasze Usługi",
  "heroStats": [
    {
      "label": "Połączone Kraje",
      "value": "100+",
      "sub": "Bezpośrednia terminacja u operatorów"
    },
    {
      "label": "Niezawodność Sieci",
      "value": "99.99%",
      "sub": "Biznesowe SLA 99.99%"
    },
    {
      "label": "Miesięczny Wolumen",
      "value": "1B+",
      "sub": "Miliardy minut głosowych i SMS"
    },
    {
      "label": "Globalne Centrum NOC",
      "value": "24/7/365",
      "sub": "Ciągły monitoring opóźnień 24/7"
    }
  ],
  "phoneMockup": {
    "appTitle": "Sieć iNet Global",
    "status": "Aktywna i Monitorowana",
    "regionLabel": "Trasa Korporacyjna",
    "latency": "14ms",
    "card1Title": "SLA Sieci",
    "card1Val": "99.99%",
    "card1Badge": "Globalne SLA",
    "card2Title": "Aktywne Trasy",
    "card2Val": "100+",
    "card2Badge": "Operator Tier-1",
    "routesTitle": "Stan Tras w Czasie Rzeczywistym",
    "route1": {
      "name": "Bezpośrednia Trasa SIP USA i Europa",
      "quality": "100%",
      "status": "Zoptymalizowana"
    },
    "route2": {
      "name": "Bramka SMS Operatorów APAC",
      "quality": "99.9%",
      "status": "Zoptymalizowana"
    },
    "route3": {
      "name": "Trasa OTP o Najwyższym Priorytecie",
      "quality": "99.8%",
      "status": "Zoptymalizowana"
    },
    "bottomStat1": "Opóźnienie w Obie Strony",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Globalna Dostępność",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "KIM JESTEŚMY",
  "companyTitle": "Zbudowani na Globalnej Niezawodności, Stworzeni dla Rozwoju Biznesu",
  "companySubtitle": "Dostarczanie krytycznych usług telekomunikacyjnych dla operatorów, agregatorów i przedsiębiorstw na całym świecie.",
  "companyStory1": "Założona z myślą o uproszczeniu i podniesieniu jakości międzynarodowej telekomunikacji, firma iNet Global nawiązała bezpośrednie połączenia z czołowymi operatorami Tier-1 w Ameryce, Europie, Azji i na Bliskim Wschodzie.",
  "companyStory2": "Dziś przetwarzamy miliardy minut i wiadomości każdego miesiąca dla globalnych firm fintech, opieki zdrowotnej, liderów e-commerce i resellerów telekomunikacyjnych.",
  "missionTitle": "Nasza Misja",
  "missionDesc": "Zapewnienie krystalicznej jakości głosu, zaufanych wiadomości weryfikacyjnych i elastycznych numerów wirtualnych, umożliwiających łatwą komunikację w dowolnym miejscu.",
  "visionTitle": "Nasza Wizja",
  "visionDesc": "Być najbardziej zaufanym partnerem w zakresie globalnej infrastruktury komunikacyjnej na świecie, wprowadzającym innowacje oparte na sztucznej inteligencji.",
  "coreValuesTitle": "Zasady Kierujące Naszą Działalnością",
  "values": [
    {
      "title": "Bezkompromisowa Jakość",
      "desc": "Zweryfikowane trasy głosowe CLI i gwarancja dostarczania SMS OTP w czasie poniżej 2 sekund."
    },
    {
      "title": "Niezawodność Operatorska",
      "desc": "Dostępność na poziomie 99.99% wspierana przez proaktywny monitoring NOC 24/7/365."
    },
    {
      "title": "Globalna Skalowalność",
      "desc": "Wydajna infrastruktura zaprojektowana tak, aby płynnie obsługiwać wszelkie skoki ruchu."
    },
    {
      "title": "Przejrzyste Partnerstwo",
      "desc": "Bezpośrednie rozliczenia, panele analityczne na żywo i dedykowani opiekunowie techniczni."
    }
  ],
  "whatWeDoBadge": "NASZA DZIAŁALNOŚĆ",
  "whatWeDoTitle": "Łączymy Każdy Zakątek Świata za Pomocą Zunifikowanej Sieci",
  "whatWeDoSubtitle": "Stworzona od podstaw z myślą o operacjach biznesowych o wysokiej przepustowości i niskich opóźnieniach.",
  "pillars": [
    {
      "title": "Terminacja Głosu & SIP Trunking",
      "desc": "Międzynarodowa terminacja połączeń klasy operatorskiej z gwarancją CLI i minimalnymi opóźnieniami.",
      "points": [
        "Ponad 100 bezpośrednich tras operatorskich",
        "Terminacja Tier-1 A-Z na całym świecie",
        "Inteligentny silnik najniższych kosztów (LCR)",
        "Nadmiarowe bramy SIP"
      ]
    },
    {
      "title": "Bezpieczne Wiadomości & OTP",
      "desc": "Błyskawiczne i pewne dostarczanie kodów SMS dla haseł jednorazowych i powiadomień bankowych.",
      "points": [
        "Dostarczenie OTP w czasie poniżej 2 sekund",
        "Łączność SMPP oraz REST API",
        "Raporty doręczenia w czasie rzeczywistym (DLR)",
        "Bezpośrednie trasy do sieci komórkowych"
      ]
    },
    {
      "title": "Globalne Numery Wirtualne (DID)",
      "desc": "Numery lokalne, bezpłatne i komórkowe w ponad 100 krajach zapewniające obecność marki.",
      "points": [
        "Natychmiastowa aktywacja numerów",
        "Dwukierunkowe połączenia i SMS",
        "Elastyczne przekierowania SIP",
        "Prezentacja lokalnego numeru dzwoniącego"
      ]
    },
    {
      "title": "Dialer Chmurowy dla Contact Center",
      "desc": "WebRTC oraz mobilne rozwiązania predykcyjne dla zespołów sprzedaży i obsługi klienta.",
      "points": [
        "Tryby predykcyjny i progresywny",
        "Połączenia WebRTC bezpośrednio w przeglądarce",
        "Podsłuch i szept menedżera na żywo",
        "Automatyczna synchronizacja z CRM"
      ]
    }
  ],
  "servicesBadge": "NASZE USŁUGI",
  "servicesTitle": "Kompletny Pakiet Telekomunikacyjny dla Nowoczesnych Firm",
  "servicesSubtitle": "Poznaj nasze modułowe produkty zaprojektowane w celu skalowania operacji i redukcji kosztów.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Głos Hurtowy (Wholesale)",
      "desc": "Niezawodna międzynarodowa terminacja połączeń z certyfikowanym CLI i jakością premium.",
      "href": "/wholesale-voice",
      "badge": "Trasy Bezpośrednie",
      "features": [
        "Zasięg A-Z na całym świecie",
        "Połączenia Tier-1",
        "Ekonomiczny Routing"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Rozwiązania Głosowe AI",
      "desc": "Inteligentne boty głosowe i systemy IVR stworzone dla nowoczesnych centrów obsługi.",
      "href": "/voice",
      "badge": "Automatyzacja",
      "features": [
        "Naturalna interakcja głosowa",
        "Inteligentny routing IVR",
        "Analiza mowy w czasie rzeczywistym"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Numery Wirtualne (DID)",
      "desc": "Numery stacjonarne i infolinie w ponad 100 krajach budujące zaufanie klientów.",
      "href": "/virtual-did",
      "badge": "Ponad 100 Krajów",
      "features": [
        "Błyskawiczne przydzielanie",
        "Głos i SMS w obie strony",
        "Elastyczny transfer połączeń"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS Hurtowy",
      "desc": "Wysokowydajny masowy wysył SMS do abonentów sieci komórkowych na całym świecie.",
      "href": "/wholesale-message",
      "badge": "Wysoka Przepustowość",
      "features": [
        "Bezpośrednie trasy operatorów",
        "Protokoły SMPP i HTTP",
        "Globalny zasięg"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portal SMS OTP",
      "desc": "Ekspresowe dostarczanie kodów uwierzytelniających dla banków i platform fintech.",
      "href": "/otp-sms",
      "badge": "Błyskawiczna Dostawa",
      "features": [
        "Skuteczność doręczeń 99.8%",
        "Routing antyfraudowy",
        "Pełne szyfrowanie danych"
      ]
    },
    {
      "id": "dialer",
      "title": "Kompleksowy Dialer",
      "desc": "Przeglądarkowy WebRTC i mobilny dialer z monitoringiem przełożonego i analizą na żywo.",
      "href": "/dialer",
      "badge": "WebRTC i Mobilny",
      "features": [
        "Wybieranie predykcyjne",
        "Podsłuch i wsparcie agenta",
        "Pulpit nawigacyjny na żywo"
      ]
    }
  ],
  "mapBadge": "CENTRALA I ZASIĘG GLOBALNY",
  "mapTitle": "Nasza Strategiczna Obecność i Adres Rejestrowy",
  "mapSubtitle": "Dzięki dedykowanym centrom zarządzania siecią wspieramy przedsiębiorstwa 24 godziny na dobę, 365 dni w roku.",
  "officeTitle": "Centrala Firmy",
  "officeAddressLabel": "Zarejestrowany Adres",
  "officePhoneLabel": "Wsparcie Telefoniczne",
  "officeEmailLabel": "Zapytania E-mail",
  "officeSupportLabel": "Dostępność Wsparcia",
  "officeSupportHours": "Wsparcie NOC 24/7/365",
  "nocLabel": "Globalne Centrum Zarządzania Siecią (NOC)",
  "nocDesc": "Ciągły monitoring parametrów sieci, automatyczne przełączanie tras i dyżurni inżynierowie.",
  "mapPinTitle": "Operacje iNet Global",
  "mapPinDesc": "Strategiczny węzeł Financial Park połączony z międzynarodowymi sieciami tranzytowymi Tier-1.",
  "ctaTitle": "Gotowy na Transformację Swojej Infrastruktury Telekomunikacyjnej?",
  "ctaSubtitle": "Współpracuj z iNet Global, aby zyskać krystalicznie czysty głos, błyskawiczne SMS-y i numery wirtualne na całym świecie.",
  "ctaPrimaryBtn": "Umów Konsultację",
  "ctaSecondaryBtn": "Przeglądaj Usługi",
  "floatingTier1Badge": {
    "title": "Trasy Bezpośrednie Tier-1",
    "sub": "Biznesowe SLA 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Bezpośrednie Łącza Globalne",
    "sub": "Płynny tranzyt hurtowy"
  },
  "mapLiveLocation": "Lokalizacja na Żywo",
  "postalAddressLabel": "Adres Korespondencyjny",
  "ctaGuaranteedSla": "Gwarantowane SLA 99.99%",
  "ctaDedicatedNoc": "Dedykowany Zespół NOC 24/7/365"
};

const th: AboutUsTranslation = {
  "heroBadge": "เกี่ยวกับ INET GLOBAL",
  "heroTitle": "ขับเคลื่อนการสื่อสารระดับโลกด้วยโครงสร้างพื้นฐานระดับโทรคมนาคม",
  "heroSubtitle": "iNet Global เป็นผู้ให้บริการโทรคมนาคมระหว่างประเทศชั้นนำ ให้บริการระบบเสียงขายส่ง ข้อความ OTP ที่ปลอดภัย เบอร์เสมือน (DID) และระบบโทรออก Call Center ในกว่า 100 ประเทศทั่วโลก",
  "contactBtn": "ติดต่อทีมงานของเรา",
  "servicesBtn": "ดูบริการทั้งหมด",
  "heroStats": [
    {
      "label": "ประเทศที่เชื่อมต่อ",
      "value": "100+",
      "sub": "เชื่อมต่อตรงกับผู้ให้บริการ"
    },
    {
      "label": "ความเสถียรของเครือข่าย",
      "value": "99.99%",
      "sub": "SLA ระดับองค์กร 99.99%"
    },
    {
      "label": "ปริมาณการใช้งานรายเดือน",
      "value": "1B+",
      "sub": "หลายพันล้านนาทีและ SMS"
    },
    {
      "label": "ศูนย์เทคนิค NOC ระดับโลก",
      "value": "24/7/365",
      "sub": "ตรวจสอบความหน่วงแบบเรียลไทม์ 24/7"
    }
  ],
  "phoneMockup": {
    "appTitle": "เครือข่าย iNet Global",
    "status": "ทำงานและตรวจสอบอยู่",
    "regionLabel": "เส้นทางองค์กรระดับโลก",
    "latency": "14ms",
    "card1Title": "SLA เครือข่าย",
    "card1Val": "99.99%",
    "card1Badge": "SLA ระดับโลก",
    "card2Title": "เส้นทางที่เปิดใช้งาน",
    "card2Val": "100+",
    "card2Badge": "ผู้ให้บริการ Tier-1",
    "routesTitle": "สถานะเส้นทางสด",
    "route1": {
      "name": "เส้นทางตรง SIP สหรัฐฯ และยุโรป",
      "quality": "100%",
      "status": "ปรับให้เหมาะสมแล้ว"
    },
    "route2": {
      "name": "เกตเวย์ SMS ผู้ให้บริการ APAC",
      "quality": "99.9%",
      "status": "ปรับให้เหมาะสมแล้ว"
    },
    "route3": {
      "name": "เส้นทาง OTP ลำดับความสำคัญสูงสุด",
      "quality": "99.8%",
      "status": "ปรับให้เหมาะสมแล้ว"
    },
    "bottomStat1": "ความหน่วงไป-กลับ",
    "bottomStat1Val": "14ms",
    "bottomStat2": "ความพร้อมใช้งานทั่วโลก",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "เราคือใคร",
  "companyTitle": "สร้างขึ้นจากความน่าเชื่อถือระดับโลก ออกแบบมาเพื่อการเติบโตขององค์กร",
  "companySubtitle": "ส่งมอบบริการโทรคมนาคมที่สำคัญยิ่งแก่ผู้ให้บริการเครือข่าย ผู้รวบรวมระบบ และองค์กรธุรกิจทั่วโลก",
  "companyStory1": "iNet Global ก่อตั้งขึ้นเพื่อทำให้การสื่อสารโทรคมนาคมทั่วโลกเรียบง่ายและมีประสิทธิภาพ โดยสร้างการเชื่อมต่อตรงกับผู้ให้บริการ Tier-1 ชั้นนำในอเมริกา ยุโรป เอเชีย และตะวันออกกลาง",
  "companyStory2": "ปัจจุบันเราจัดการปริมาณการโทรและข้อความหลายพันล้านรายการในแต่ละเดือนให้แก่ธุรกิจฟินเทค การแพทย์ อีคอมเมิร์ซชั้นนำ และตัวแทนจำหน่ายโทรคมนาคม",
  "missionTitle": "พันธกิจของเรา",
  "missionDesc": "มอบคุณภาพเสียงที่คมชัด ข้อความยืนยันตัวตนที่ปลอดภัย และเบอร์เสมือนที่ยืดหยุ่น เพื่อให้องค์กรสามารถสื่อสารได้อย่างราบรื่นในทุกที่",
  "visionTitle": "วิสัยทัศน์ของเรา",
  "visionDesc": "เป็นพันธมิตรโครงสร้างพื้นฐานการสื่อสารระดับโลกที่ได้รับความไว้วางใจสูงสุด ด้วยการพัฒนานวัตกรรม AI และมาตรฐานระดับผู้ให้บริการ",
  "coreValuesTitle": "หลักการดำเนินงานของเรา",
  "values": [
    {
      "title": "คุณภาพที่ไม่มีข้อประนีประนอม",
      "desc": "เส้นทางเสียงที่แสดงเบอร์โทรจริง (CLI) และการส่ง SMS OTP ภายใน 2 วินาที"
    },
    {
      "title": "ความน่าเชื่อถือระดับผู้ให้บริการ",
      "desc": "ความพร้อมใช้งาน 99.99% ด้วยการตรวจสอบอย่างใกล้ชิดจากศูนย์ NOC ตลอด 24/7/365"
    },
    {
      "title": "ความสามารถในการขยายขนาดระดับโลก",
      "desc": "โครงสร้างพื้นฐานที่พร้อมรองรับปริมาณการใช้งานที่เพิ่มสูงขึ้นได้อย่างราบรื่น"
    },
    {
      "title": "ความโปร่งใสในการเป็นพันธมิตร",
      "desc": "การเรียกเก็บเงินที่ตรงไปตรงมา แดชบอร์ดวิเคราะห์ผลแบบเรียลไทม์ และผู้ดูแลด้านเทคนิคเฉพาะ"
    }
  ],
  "whatWeDoBadge": "สิ่งที่เราทำ",
  "whatWeDoTitle": "เชื่อมต่อทุกมุมโลกด้วยระบบโทรคมนาคมครบวงจร",
  "whatWeDoSubtitle": "สร้างขึ้นเพื่อรองรับการดำเนินงานทางธุรกิจที่ต้องการปริมาณข้อมูลสูงและมีความไวต่อความหน่วงของสัญญาณ",
  "pillars": [
    {
      "title": "บริการปลายทางเสียงและ SIP Trunking",
      "desc": "การเชื่อมต่อเสียงระหว่างประเทศระดับผู้ให้บริการพร้อมการแสดงเบอร์โทรที่แม่นยำและความหน่วงต่ำ",
      "points": [
        "100+ เส้นทางตรงจากผู้ให้บริการ",
        "การส่งต่อระหว่างประเทศระดับ Tier-1 A-Z",
        "ระบบค้นหาเส้นทางที่คุ้มค่าที่สุด (LCR)",
        "เกตเวย์ SIP สำรองแบบไร้รอยต่อ"
      ]
    },
    {
      "title": "การส่งข้อความความปลอดภัยสูงและ OTP",
      "desc": "การส่ง SMS ที่รวดเร็วและแม่นยำสำหรับรหัสผ่านใช้ครั้งเดียวและการแจ้งเตือนธุรกรรมทางการเงิน",
      "points": [
        "ส่งมอบ OTP ภายใน 2 วินาที",
        "เชื่อมต่อผ่าน SMPP และ REST API",
        "รายงานสถานะการส่งมอบแบบเรียลไทม์ (DLR)",
        "เส้นทางตรงสู่ผู้ให้บริการมือถือ"
      ]
    },
    {
      "title": "เบอร์โทรเสมือนทั่วโลก (DID)",
      "desc": "เบอร์ท้องถิ่น เบอร์โทรฟรี 1800 และเบอร์มือถือในกว่า 100 ประเทศเพื่อสร้างภาพลักษณ์ในท้องถิ่น",
      "points": [
        "เปิดใช้งานเบอร์ได้ทันที",
        "รองรับทั้งการโทรและ SMS สองทาง",
        "โอนสายผ่าน SIP ได้อย่างยืดหยุ่น",
        "แสดงเบอร์ผู้โทรในประเทศ"
      ]
    },
    {
      "title": "ระบบโทรออกสำหรับ Contact Center บนคลาวด์",
      "desc": "โซลูชันระบบโทรออกแบบคาดการณ์ WebRTC และมือถือสำหรับทีมขายและทีมสนับสนุน",
      "points": [
        "โหมดโทรแบบคาดการณ์และต่อเนื่อง",
        "โทรผ่านเบราว์เซอร์ด้วย WebRTC โดยไม่ต้องลงโปรแกรม",
        "หัวหน้างานสามารถฟังและกระซิบสายได้สดๆ",
        "บันทึกประวัติการโทรเข้าสู่ CRM อัตโนมัติ"
      ]
    }
  ],
  "servicesBadge": "บริการของเรา",
  "servicesTitle": "ชุดโซลูชันโทรคมนาคมครบวงจรสำหรับองค์กรยุคใหม่",
  "servicesSubtitle": "สำรวจผลิตภัณฑ์ของเราที่ออกแบบมาเพื่อช่วยขยายขนาดธุรกิจและลดต้นทุนการดำเนินงาน",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "เสียงขายส่ง (Wholesale Voice)",
      "desc": "การส่งต่อเสียงระหว่างประเทศที่เสถียรพร้อมการรับประกัน CLI และคุณภาพเสียงระดับพรีเมียม",
      "href": "/wholesale-voice",
      "badge": "เส้นทางตรง",
      "features": [
        "ครอบคลุมทั่วโลก A-Z",
        "การเชื่อมต่อตรง Tier-1",
        "การกำหนดเส้นทางที่ประหยัดต้นทุน"
      ]
    },
    {
      "id": "ai-voice",
      "title": "โซลูชันเสียง AI",
      "desc": "ระบบเสียงตอบรับอัตโนมัติอัจฉริยะและ IVR ระดับองค์กรสำหรับศูนย์ติดต่อยุคใหม่",
      "href": "/voice",
      "badge": "ระบบอัตโนมัติ",
      "features": [
        "การสนทนาด้วยเสียงที่เป็นธรรมชาติ",
        "การจัดเส้นทาง IVR อัจฉริยะ",
        "การวิเคราะห์ข้อมูลเสียงแบบสด"
      ]
    },
    {
      "id": "virtual-did",
      "title": "เบอร์โทรเสมือน (DID)",
      "desc": "เบอร์โทรศัพท์ในกว่า 100 ประเทศเพื่อสร้างตัวตนของแบรนด์ในระดับสากล",
      "href": "/virtual-did",
      "badge": "100+ ประเทศ",
      "features": [
        "จัดสรรเบอร์ได้รวดเร็ว",
        "เสียงและ SMS สองทาง",
        "การโอนสายที่ยืดหยุ่น"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS ขายส่ง",
      "desc": "การส่ง SMS จำนวนมากไปยังผู้ใช้มือถือทั่วโลกด้วยความเร็วและประสิทธิภาพสูง",
      "href": "/wholesale-message",
      "badge": "ปริมาณส่งสูง",
      "features": [
        "เส้นทางตรงจากผู้ให้บริการ",
        "โปรโตคอล SMPP และ HTTP",
        "การเข้าถึงทั่วโลก"
      ]
    },
    {
      "id": "otp-sms",
      "title": "พอร์ทัล SMS OTP",
      "desc": "การส่งรหัสยืนยันตัวตนความเร็วสูงที่ออกแบบมาสำหรับธนาคารและฟินเทคโดยเฉพาะ",
      "href": "/otp-sms",
      "badge": "ส่งมอบทันที",
      "features": [
        "อัตราการส่งมอบ 99.8%",
        "ระบบป้องกันการทุจริต",
        "การเข้ารหัสข้อมูลแบบครบวงจร"
      ]
    },
    {
      "id": "dialer",
      "title": "ระบบโทรออกครบวงจร",
      "desc": "ระบบโทรออกผ่านเว็บเบราว์เซอร์ WebRTC และมือถือพร้อมการมอนิเตอร์แบบสด",
      "href": "/dialer",
      "badge": "WebRTC และมือถือ",
      "features": [
        "ระบบโทรออกอัตโนมัติ",
        "ฟังและแทรกสายได้สดๆ",
        "แดชบอร์ดสถิติแบบเรียลไทม์"
      ]
    }
  ],
  "mapBadge": "สำนักงานใหญ่และเครือข่ายทั่วโลก",
  "mapTitle": "การดำเนินงานเชิงกลยุทธ์และที่อยู่จดทะเบียน",
  "mapSubtitle": "ด้วยศูนย์ปฏิบัติการเครือข่ายเฉพาะทางและจุดเชื่อมต่อทั่วโลก เราพร้อมสนับสนุนธุรกิจตลอด 24 ชั่วโมง 365 วันต่อปี",
  "officeTitle": "สำนักงานใหญ่ของบริษัท",
  "officeAddressLabel": "ที่อยู่จดทะเบียน",
  "officePhoneLabel": "ฝ่ายสนับสนุนทางโทรศัพท์",
  "officeEmailLabel": "สอบถามทางอีเมล",
  "officeSupportLabel": "เวลาให้บริการ",
  "officeSupportHours": "ดูแลโดย NOC 24/7/365",
  "nocLabel": "ศูนย์ปฏิบัติการเครือข่ายระดับโลก (NOC)",
  "nocDesc": "ตรวจสอบความหน่วงในเชิงรุก การสลับเส้นทางสำรองอัตโนมัติ และวิศวกรพร้อมปฏิบัติการตลอดเวลา",
  "mapPinTitle": "ศูนย์ปฏิบัติการ iNet Global",
  "mapPinDesc": "ศูนย์กลางเชิงกลยุทธ์ Financial Park เชื่อมต่อกับเครือข่ายโทรคมนาคม Tier-1 ระหว่างประเทศ",
  "ctaTitle": "พร้อมที่จะยกระดับโครงสร้างพื้นฐานโทรคมนาคมระดับโลกของคุณแล้วหรือยัง?",
  "ctaSubtitle": "ร่วมเป็นพันธมิตรกับ iNet Global เพื่อเข้าถึงเส้นทางเสียงที่คมชัด บริการส่งข้อความความเร็วสูง และเบอร์เสมือนทั่วโลก",
  "ctaPrimaryBtn": "นัดหมายเพื่อขอคำปรึกษา",
  "ctaSecondaryBtn": "ดูผลิตภัณฑ์ทั้งหมด",
  "floatingTier1Badge": {
    "title": "เส้นทางตรง Tier-1",
    "sub": "SLA ระดับองค์กร 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "การเชื่อมต่อตรงระดับโลก",
    "sub": "การส่งผ่านข้อมูลระหว่างประเทศที่ราบรื่น"
  },
  "mapLiveLocation": "สถานที่จริง",
  "postalAddressLabel": "ที่อยู่ทางไปรษณีย์",
  "ctaGuaranteedSla": "รับประกัน SLA 99.99%",
  "ctaDedicatedNoc": "ทีมงาน NOC ดูแล 24/7/365"
};

const tl: AboutUsTranslation = {
  "heroBadge": "TUNGKOL SA INET GLOBAL",
  "heroTitle": "Pagpapalakas ng Pandaigdigang Komunikasyon gamit ang Carrier-Grade na Kalidad",
  "heroSubtitle": "Ang iNet Global ay isang nangungunang internasyonal na telecom provider na naghahatid ng enterprise wholesale voice, ligtas na OTP messaging, virtual DIDs, at makabagong call center dialer sa mahigit 100 bansa.",
  "contactBtn": "Makipag-ugnayan sa Aming Koponan",
  "servicesBtn": "Tuklasin ang mga Serbisyo",
  "heroStats": [
    {
      "label": "Mga Bansang Nakakonekta",
      "value": "100+",
      "sub": "Direktang carrier termination"
    },
    {
      "label": "Pagiging Maaasahan ng Network",
      "value": "99.99%",
      "sub": "Enterprise SLA 99.99%"
    },
    {
      "label": "Buwanang Dami ng Operasyon",
      "value": "1B+",
      "sub": "Bilyun-bilyong minuto ng boses at SMS"
    },
    {
      "label": "Pandaigdigang Teknikal na NOC",
      "value": "24/7/365",
      "sub": "24/7 aktibong pagsubaybay sa latency"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Global Network",
    "status": "Aktibo at Sinusubaybayan",
    "regionLabel": "Pandaigdigang Ruta ng Enterprise",
    "latency": "14ms",
    "card1Title": "Network SLA",
    "card1Val": "99.99%",
    "card1Badge": "Global SLA",
    "card2Title": "Mga Aktibong Ruta",
    "card2Val": "100+",
    "card2Badge": "Tier-1 Telco",
    "routesTitle": "Katayuan ng mga Ruta",
    "route1": {
      "name": "US & EU SIP Direktang Ruta",
      "quality": "100%",
      "status": "Na-optimize"
    },
    "route2": {
      "name": "APAC Carrier SMS Gateway",
      "quality": "99.9%",
      "status": "Na-optimize"
    },
    "route3": {
      "name": "Global OTP Mataas na Priyoridad",
      "quality": "99.8%",
      "status": "Na-optimize"
    },
    "bottomStat1": "Round-Trip Latency",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Pandaigdigang Availability",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "KUNG SINO KAMI",
  "companyTitle": "Itinayo sa Pandaigdigang Tiwala, Idinisenyo para sa Paglago ng Negosyo",
  "companySubtitle": "Naghahatid ng mga kritikal na serbisyo ng telecom sa mga operator, aggregator, at negosyo sa buong mundo.",
  "companyStory1": "Itinatag upang pasimplehin at itaas ang antas ng pandaigdigang telekomunikasyon, ang iNet Global ay nagtatag ng direktang koneksyon sa mga nangungunang Tier-1 carrier sa Amerika, Europa, Asya, at Gitnang Silangan.",
  "companyStory2": "Ngayon, namamahala kami ng bilyun-bilyong minuto at mensahe bawat buwan para sa mga fintech, kumpanya ng kalusugan, e-commerce, at telecom reseller.",
  "missionTitle": "Aming Misyon",
  "missionDesc": "Magbigay ng malinaw na kalidad ng boses, maaasahang verification messaging, at virtual numbers upang madaling makipag-usap ang mga negosyo saanman.",
  "visionTitle": "Aming Pananaw",
  "visionDesc": "Maging pinakapinagkakatiwalaang katuwang sa pandaigdigang imprastraktura ng komunikasyon sa pamamagitan ng AI at maaasahang serbisyo.",
  "coreValuesTitle": "Mga Prinsipyong Gumagabay sa Amin",
  "values": [
    {
      "title": "De-kalidad na Serbisyo",
      "desc": "Mga aprubadong CLI voice route at garantiya sa paghahatid ng OTP SMS nang wala pang 2 segundo."
    },
    {
      "title": "Maaasahang Carrier-Grade",
      "desc": "99.99% uptime na suportado ng maagap na pagsubaybay ng NOC 24/7/365."
    },
    {
      "title": "Pandaigdigang Kakayahang Lumaki",
      "desc": "Matatag na imprastraktura na kayang sumabay sa mabilis na pagdami ng inyong trapiko."
    },
    {
      "title": "Tapat na Pagsasama",
      "desc": "Malinaw na pagsingil, live analytics dashboard, at nakatalagang technical account managers."
    }
  ],
  "whatWeDoBadge": "ANG AMING GINAGAWA",
  "whatWeDoTitle": "Ikinokonekta ang Bawat Sulok ng Mundo gamit ang Pinag-isang Telecom",
  "whatWeDoSubtitle": "Itinayo mula sa simula upang suportahan ang malakihan at mabilisang operasyon ng negosyo.",
  "pillars": [
    {
      "title": "Voice Termination at SIP Trunking",
      "desc": "Pandaigdigang pagwawakas ng tawag na may garantisadong CLI at mababang latency.",
      "points": [
        "100+ direktang ruta ng carrier",
        "Tier-1 A-Z internasyonal na pagwawakas",
        "Matalinong Least-Cost Routing engine",
        "Maaasahang backup SIP gateways"
      ]
    },
    {
      "title": "Mataas na Seguradong Messaging at OTP",
      "desc": "Mabilis at ligtas na pagpapadala ng SMS para sa one-time passwords at mga abiso sa transaksyon.",
      "points": [
        "Paghahatid ng OTP nang wala pang 2 segundo",
        "SMPP at REST API koneksyon",
        "Real-time delivery receipts (DLR)",
        "Direktang ruta sa mga mobile operator"
      ]
    },
    {
      "title": "Pandaigdigang Virtual Numbers (DID)",
      "desc": "Lokal, toll-free, at mobile virtual numbers sa mahigit 100 bansa para sa agarang presensya.",
      "points": [
        "Mabilisang pagkakaloob ng numero",
        "Two-way voice at SMS suportado",
        "Madaling SIP call forwarding",
        "Lokal na caller ID presensya"
      ]
    },
    {
      "title": "Cloud Contact Center Dialer",
      "desc": "WebRTC at mobile predictive dialer para sa mga koponan ng benta at suporta.",
      "points": [
        "Predictive at progressive modes",
        "Direktang pagtawag sa browser gamit ang WebRTC",
        "Live supervisor listening at whisper",
        "Awtomatikong pagtala ng tawag sa CRM"
      ]
    }
  ],
  "servicesBadge": "ANG AMING MGA SERBISYO",
  "servicesTitle": "Kumpletong Telecom Suite para sa mga Makabagong Negosyo",
  "servicesSubtitle": "Tuklasin ang aming mga modular na produkto na tutulong magpalawak ng inyong negosyo at magpababa ng gastos.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Wholesale Voice",
      "desc": "Maaasahang internasyonal na tawag na may garantisadong CLI at mataas na kalidad.",
      "href": "/wholesale-voice",
      "badge": "Direktang Ruta",
      "features": [
        "A-Z Pandaigdigang Saklaw",
        "Tier-1 Interconnects",
        "Matipid na Routing"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Mga Solusyon sa AI Voice",
      "desc": "Matalinong automated voice interactions at enterprise IVR para sa mga contact center.",
      "href": "/voice",
      "badge": "Awtomatisado",
      "features": [
        "Natural na pakikipag-usap sa boses",
        "Smart IVR routing",
        "Real-time voice analytics"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Virtual Numbers (DID)",
      "desc": "Lokal at toll-free na mga numero sa mahigit 100 bansa para mapalakas ang tiwala ng customer.",
      "href": "/virtual-did",
      "badge": "100+ Bansa",
      "features": [
        "Mabilis na pag-setup ng numero",
        "Two-way Voice at SMS",
        "Madaling pagpapasa ng tawag"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Wholesale SMS",
      "desc": "Maramihang pagpapadala ng SMS sa mga subscriber sa buong mundo nang may mataas na bilis.",
      "href": "/wholesale-message",
      "badge": "Mataas na Dami",
      "features": [
        "Direktang ruta ng carrier",
        "SMPP at HTTP protocol",
        "Malawak na abot sa mundo"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portal ng OTP SMS",
      "desc": "Napakabilis na paghahatid ng authentication codes para sa mga bangko at fintech.",
      "href": "/otp-sms",
      "badge": "Agarang Pagpapadala",
      "features": [
        "99.8% Delivery rate",
        "Anti-fraud routing",
        "Ligtas at naka-encrypt"
      ]
    },
    {
      "id": "dialer",
      "title": "Kumpletong Dialer Solution",
      "desc": "WebRTC browser at mobile dialer na may live supervisor monitoring at smart routing.",
      "href": "/dialer",
      "badge": "WebRTC at Mobile",
      "features": [
        "Predictive dialing",
        "Live listening at coaching",
        "Real-time wallboard"
      ]
    }
  ],
  "mapBadge": "PANGUNAHING TANGGAPAN AT SAKLAW",
  "mapTitle": "Aming Madiskarteng Presensya at Rehistradong Tirahan",
  "mapSubtitle": "Gamit ang aming dedikadong Network Operation Centers, sinusuportahan namin ang mga negosyo 24 oras bawat araw, 365 araw sa isang taon.",
  "officeTitle": "Pangunahing Tanggapan",
  "officeAddressLabel": "Rehistradong Tirahan",
  "officePhoneLabel": "Tulong sa Telepono",
  "officeEmailLabel": "Pagtatanong sa Email",
  "officeSupportLabel": "Oras ng Suporta",
  "officeSupportHours": "24/7/365 NOC Suporta",
  "nocLabel": "Pandaigdigang Network Operation Center",
  "nocDesc": "Aktibong pagsubaybay sa latency, awtomatikong failover ng ruta, at mga nakahandang inhinyero.",
  "mapPinTitle": "Operasyon ng iNet Global",
  "mapPinDesc": "Madiskarteng Financial Park hub na nakakonekta sa mga internasyonal na Tier-1 transit network.",
  "ctaTitle": "Handa Ka Na Bang Baguhin ang Iyong Pandaigdigang Telecom?",
  "ctaSubtitle": "Makipagtulungan sa iNet Global para sa malilinaw na tawag, mabilis na SMS, at mga virtual number sa buong mundo.",
  "ctaPrimaryBtn": "Mag-iskedyul ng Konsultasyon",
  "ctaSecondaryBtn": "Tingnan ang Aming mga Produkto",
  "floatingTier1Badge": {
    "title": "Tier-1 Direktang Ruta",
    "sub": "Enterprise SLA 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "Direktang Pandaigdigang Koneksyon",
    "sub": "Mabilis at maaasahang internasyonal na transit"
  },
  "mapLiveLocation": "Kasalukuyang Lokasyon",
  "postalAddressLabel": "Tirahan sa Koreo",
  "ctaGuaranteedSla": "Garantisadong 99.99% SLA",
  "ctaDedicatedNoc": "Nakatalagang 24/7/365 NOC"
};

const bn: AboutUsTranslation = {
  "heroBadge": "INET GLOBAL সম্পর্কে",
  "heroTitle": "ক্যারিয়ার-গ্রেড অবকাঠামো সহ বৈশ্বিক যোগাযোগ ব্যবস্থার উন্নয়ন",
  "heroSubtitle": "iNet Global একটি নেতৃস্থানীয় আন্তর্জাতিক টেলিযোগাযোগ প্রদানকারী প্রতিষ্ঠান যা বিশ্বজুড়ে ১০০টিরও বেশি দেশে পাইকারি ভয়েস, নিরাপদ OTP মেসেজিং, ভার্চুয়াল ডিআইডি এবং ক্লাউড ডায়ালার সেবা প্রদান করে।",
  "contactBtn": "আমাদের টিমের সাথে যোগাযোগ করুন",
  "servicesBtn": "সেবাগুলি দেখুন",
  "heroStats": [
    {
      "label": "সংযুক্ত দেশসমূহ",
      "value": "100+",
      "sub": "সরাসরি ক্যারিয়ার টার্মিনেশন"
    },
    {
      "label": "নেটওয়ার্ক নির্ভরযোগ্যতা",
      "value": "99.99%",
      "sub": "এন্টারপ্রাইজ এসএলএ ৯৯.৯৯%"
    },
    {
      "label": "মাসিক কার্যক্রমের পরিমাণ",
      "value": "1B+",
      "sub": "বিলিয়ন ভয়েস মিনিট এবং এসএমএস"
    },
    {
      "label": "গ্লোবাল টেকনিক্যাল এনওসি",
      "value": "24/7/365",
      "sub": "২৪/৭ সক্রিয় লেটেন্সি মনিটরিং"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet গ্লোবাল নেটওয়ার্ক",
    "status": "সক্রিয় এবং পর্যবেক্ষণাধীন",
    "regionLabel": "গ্লোবাল এন্টারপ্রাইজ রুট",
    "latency": "14ms",
    "card1Title": "নেটওয়ার্ক এসএলএ",
    "card1Val": "99.99%",
    "card1Badge": "গ্লোবাল এসএলএ",
    "card2Title": "সক্রিয় রুটসমূহ",
    "card2Val": "100+",
    "card2Badge": "টিয়ার-১ টেলকো",
    "routesTitle": "সরাসরি রুটের অবস্থা",
    "route1": {
      "name": "ইউএস ও ইইউ এসআইপি ডিরেক্ট রুট",
      "quality": "100%",
      "status": "অপ্টিমাইজড"
    },
    "route2": {
      "name": "এপ্যাক ক্যারিয়ার এসএমএস গেটওয়ে",
      "quality": "99.9%",
      "status": "অপ্টিমাইজড"
    },
    "route3": {
      "name": "গ্লোবাল ওটিপি হাই-প্রায়োরিটি রুট",
      "quality": "99.8%",
      "status": "অপ্টিমাইজড"
    },
    "bottomStat1": "রাউন্ড-ট্রিপ লেটেন্সি",
    "bottomStat1Val": "14ms",
    "bottomStat2": "গ্লোবাল প্রাপ্যতা",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "আমরা কারা",
  "companyTitle": "বিশ্বস্ততার ওপর প্রতিষ্ঠিত, ব্যবসায়িক অগ্রগতির জন্য নির্মিত",
  "companySubtitle": "বিশ্বজুড়ে টেলিকম অপারেটর, এগ্রিগেটর এবং এন্টারপ্রাইজগুলির জন্য গুরুত্বপূর্ণ টেলিকম পরিষেবা প্রদান।",
  "companyStory1": "বিশ্বব্যাপী টেলিযোগাযোগ ব্যবস্থাকে সহজ ও উন্নত করার লক্ষ্যে প্রতিষ্ঠিত iNet Global উত্তর আমেরিকা, ইউরোপ, এশিয়া এবং মধ্যপ্রাচ্যের শীর্ষস্থানীয় টিয়ার-১ ক্যারিয়ারগুলির সাথে সরাসরি আন্তঃসংযোগ স্থাপন করেছে।",
  "companyStory2": "বর্তমানে আমরা বৈশ্বিক ফিনটেক, স্বাস্থ্যসেবা, ই-কমার্স এবং টেলিকম রিসেলারদের জন্য প্রতি মাসে কোটি কোটি মিনিট ও বার্তা সফলভাবে পরিচালনা করি।",
  "missionTitle": "আমাদের মিশন",
  "missionDesc": "উচ্চমানের ভয়েস সংযোগ, নির্ভরযোগ্য ওটিপি বার্তা এবং ভার্চুয়াল নম্বরের মাধ্যমে ব্যবসাগুলিকে যেকোনো স্থানে সহজে যোগাযোগের সুবিধা দেওয়া।",
  "visionTitle": "আমাদের লক্ষ্য",
  "visionDesc": "কৃত্রিম বুদ্ধিমত্তা এবং ক্যারিয়ার-গ্রেড পারফরম্যান্সের সমন্বয়ে বিশ্বের সবচেয়ে বিশ্বস্ত টেলিযোগাযোগ অবকাঠামো অংশীদার হওয়া।",
  "coreValuesTitle": "আমাদের কার্য পরিচালনার মূল নীতি",
  "values": [
    {
      "title": "আপসহীন গুণমান",
      "desc": "যাচাইকৃত সিএলআই ভয়েস রুট এবং ২ সেকেন্ডের মধ্যে ওটিপি বার্তা পৌঁছে দেওয়ার নিশ্চয়তা।"
    },
    {
      "title": "ক্যারিয়ার-গ্রেড নির্ভরযোগ্যতা",
      "desc": "২৪/৭/৩৬৫ এনওসি পর্যবেক্ষণ দ্বারা সুরক্ষিত ৯৯.৯৯% আপটাইম গ্যারান্টি।"
    },
    {
      "title": "বৈশ্বিক সম্প্রসারণ ক্ষমতা",
      "desc": "ট্র্যাফিক বৃদ্ধির সাথে সাথে সহজে সম্প্রসারণযোগ্য শক্তিশালী অবকাঠামো।"
    },
    {
      "title": "স্বচ্ছ অংশীদারিত্ব",
      "desc": "স্বচ্ছ বিলিং ব্যবস্থা, সরাসরি অ্যানালিটিক্স ড্যাশবোর্ড এবং সার্বক্ষণিক কারিগরি সহায়তা।"
    }
  ],
  "whatWeDoBadge": "আমরা কী করি",
  "whatWeDoTitle": "সমন্বিত টেলিযোগাযোগের মাধ্যমে বিশ্বের প্রতিটি প্রান্তকে যুক্ত করা",
  "whatWeDoSubtitle": "উচ্চ গতি এবং সময়-সংবেদনশীল ব্যবসায়িক কার্যক্রম পরিচালনার জন্য নিবেদিত।",
  "pillars": [
    {
      "title": "ভয়েস টার্মিনেশন এবং এসআইপি ট্রাঙ্কিং",
      "desc": "যাচাইকৃত সিএলআই এবং সর্বনিম্ন লেটেন্সি সহ আন্তর্জাতিক ভয়েস টার্মিনেশন।",
      "points": [
        "১০০+ সরাসরি ক্যারিয়ার রুট",
        "টিয়ার-১ এ-টু-জেড আন্তর্জাতিক টার্মিনেশন",
        "বুদ্ধিমান লিস্ট-কস্ট রাউটিং ইঞ্জিন",
        "রিডান্ডেন্ট এসআইপি গেটওয়ে"
      ]
    },
    {
      "title": "নিরাপদ মেসেজিং ও ওটিপি",
      "desc": "ওয়ান-টাইম পাসওয়ার্ড এবং লেনদেন সংক্রান্ত সতর্কতার জন্য দ্রুততম এসএমএস ডেলিভারি।",
      "points": [
        "২ সেকেন্ডের মধ্যে ওটিপি ডেলিভারি",
        "এসএমপিপি এবং রেস্ট এপিআই সংযোগ",
        "রিয়েল-টাইম ডেলিভারি রিপোর্ট (DLR)",
        "মোবাইল অপারেটরদের সরাসরি রুট"
      ]
    },
    {
      "title": "গ্লোবাল ভার্চুয়াল নম্বর (DID)",
      "desc": "বিশ্বব্যাপী ব্র্যান্ড উপস্থিতি গড়ে তুলতে ১০০টির বেশি দেশে স্থানীয় ও টোল-ফ্রি নম্বর।",
      "points": [
        "তাৎক্ষণিক নম্বর অ্যাক্টিভেশন",
        "দ্বিমুখী ভয়েস ও এসএমএস সুবিধা",
        "সহজ এসআইপি ফরওয়ার্ডিং",
        "স্থানীয় কলার আইডি প্রদর্শন"
      ]
    },
    {
      "title": "ক্লাউড কন্টাক্ট সেন্টার ডায়ালার",
      "desc": "বিক্রয় ও কাস্টমার কেয়ার টিমের জন্য তৈরি ওয়েবআরটিসি ও মোবাইল প্রেডিক্টিভ ডায়ালার।",
      "points": [
        "প্রেডিক্টিভ ও প্রোগ্রেসিভ মোড",
        "ব্রাউজারে সরাসরি কল করার সুবিধা",
        "সুপারভাইজার লাইভ মনিটরিং ও হুইস্পার",
        "সিআরএম-এর সাথে স্বয়ংক্রিয় ডেটা সংরক্ষণ"
      ]
    }
  ],
  "servicesBadge": "আমাদের সেবাসমূহ",
  "servicesTitle": "আধুনিক ব্যবসার জন্য সম্পূর্ণ টেলিযোগাযোগ স্যুয়িট",
  "servicesSubtitle": "আপনার কার্যক্রম বৃদ্ধি এবং পরিচালন খরচ কমানোর জন্য তৈরি আমাদের পণ্যগুলি দেখুন।",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "হোলসেল ভয়েস",
      "desc": "উচ্চমানের অডিও এবং নির্ভরযোগ্য সিএলআই সহ আন্তর্জাতিক ভয়েস টার্মিনেশন।",
      "href": "/wholesale-voice",
      "badge": "সরাসরি রুট",
      "features": [
        "বিশ্বজুড়ে এ-টু-জেড কভারেজ",
        "টিয়ার-১ সরাসরি সংযোগ",
        "সাশ্রয়ী রাউটিং"
      ]
    },
    {
      "id": "ai-voice",
      "title": "এআই ভয়েস সমাধান",
      "desc": "আধুনিক যোগাযোগ কেন্দ্রের জন্য বুদ্ধিমান স্বয়ংক্রিয় ভয়েস ও আইভিআর সিস্টেম।",
      "href": "/voice",
      "badge": "স্বয়ংক্রিয়",
      "features": [
        "স্বাভাবিক ভয়েস কথোপকথন",
        "স্মার্ট আইভিআর রাউটিং",
        "রিয়েল-টাইম অডিও বিশ্লেষণ"
      ]
    },
    {
      "id": "virtual-did",
      "title": "ভার্চুয়াল নম্বর (DID)",
      "desc": "১০০+ দেশে ব্র্যান্ডের বিশ্বাসযোগ্যতা বাড়াতে স্থানীয় ফোন নম্বর।",
      "href": "/virtual-did",
      "badge": "১০০+ দেশ",
      "features": [
        "দ্রুত নম্বর সেটআপ",
        "দ্বিমুখী কল ও এসএমএস",
        "নমনীয় কল ফরওয়ার্ডিং"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "হোলসেল এসএমএস",
      "desc": "বিশ্বব্যাপী মোবাইল গ্রাহকদের কাছে বাল্ক এসএমএস পাঠানোর সুরক্ষিত মাধ্যম।",
      "href": "/wholesale-message",
      "badge": "উচ্চ গতি",
      "features": [
        "সরাসরি অপারেটর রুট",
        "এসএমপিপি ও এইচটিটিপি সংযোগ",
        "বিশ্বব্যাপী বিস্তার"
      ]
    },
    {
      "id": "otp-sms",
      "title": "ওটিপি এসএমএস পোর্টাল",
      "desc": "ব্যাংক এবং ফিনটেক প্ল্যাটফর্মের জন্য অতি দ্রুত যাচাইকরণ কোড সরবরাহ।",
      "href": "/otp-sms",
      "badge": "তাৎক্ষণিক ডেলিভারি",
      "features": [
        "৯৯.৮% ডেলিভারি রেট",
        "জালিয়াতি বিরোধী সুরক্ষা",
        "সম্পূর্ণ এনক্রিপ্ট করা ডেটা"
      ]
    },
    {
      "id": "dialer",
      "title": "সম্পূর্ণ ডায়ালার সমাধান",
      "desc": "সুপারভাইজার পর্যবেক্ষণ এবং স্মার্ট রাউটিং সহ ওয়েব ও মোবাইল ডায়ালার।",
      "href": "/dialer",
      "badge": "WebRTC ও মোবাইল",
      "features": [
        "স্বয়ংক্রিয় প্রেডিক্টিভ ডায়ালিং",
        "সরাসরি কল মনিটরিং",
        "রিয়েল-টাইম বিশ্লেষণ ড্যাশবোর্ড"
      ]
    }
  ],
  "mapBadge": "প্রধান কার্যালয় ও বৈশ্বিক উপস্থিতি",
  "mapTitle": "আমাদের কৌশলগত উপস্থিতি এবং নিবন্ধিত ঠিকানা",
  "mapSubtitle": "বিশেষায়িত নেটওয়ার্ক অপারেশন সেন্টারের মাধ্যমে আমরা বছরের ৩৬৫ দিন, ২৪ ঘণ্টা গ্রাহকদের পাশে থাকি।",
  "officeTitle": "কর্পোরেট প্রধান কার্যালয়",
  "officeAddressLabel": "নিবন্ধিত ঠিকানা",
  "officePhoneLabel": "ফোন সহায়তা",
  "officeEmailLabel": "ইমেইল অনুসন্ধান",
  "officeSupportLabel": "সহায়তার সময়",
  "officeSupportHours": "২৪/৭/৩৬৫ এনওসি সাপোর্ট",
  "nocLabel": "গ্লোবাল নেটওয়ার্ক অপারেশন সেন্টার (NOC)",
  "nocDesc": "সক্রিয় লেটেন্সি মনিটরিং, স্বয়ংক্রিয় ব্যাকআপ রুট এবং সার্বক্ষণিক নিবেদিত ইঞ্জিনিয়ার।",
  "mapPinTitle": "iNet গ্লোবাল অপারেশনাল হাব",
  "mapPinDesc": "আন্তর্জাতিক টিয়ার-১ ট্রানজিট নেটওয়ার্কের সাথে সরাসরি সংযুক্ত ফাইন্যান্সিয়াল পার্ক।",
  "ctaTitle": "আপনার টেলিযোগাযোগ অবকাঠামো আধুনিকায়ন করতে প্রস্তুত?",
  "ctaSubtitle": "স্পষ্ট ভয়েস রুট, দ্রুততম এসএমএস এবং ভার্চুয়াল নম্বরের অভিজ্ঞতা নিতে iNet Global-এর সাথে যুক্ত হোন।",
  "ctaPrimaryBtn": "পরামর্শের জন্য সময় নির্ধারণ করুন",
  "ctaSecondaryBtn": "পণ্যসমূহ দেখুন",
  "floatingTier1Badge": {
    "title": "টিয়ার-১ সরাসরি রুট",
    "sub": "এন্টারপ্রাইজ এসএলএ ৯৯.৯৯%"
  },
  "ambientInterconnectBadge": {
    "title": "সরাসরি গ্লোবাল সংযোগ",
    "sub": "বাধাহীন আন্তর্জাতিক পাইকারি ট্রানজিট"
  },
  "mapLiveLocation": "সরাসরি অবস্থান",
  "postalAddressLabel": "ডাক ঠিকানা",
  "ctaGuaranteedSla": "৯৯.৯৯% নিশ্চিত এসএলএ",
  "ctaDedicatedNoc": "২৪/৭/৩৬৫ নিবেদিত এনওসি টিম"
};

const ta: AboutUsTranslation = {
  "heroBadge": "INET GLOBAL பற்றி",
  "heroTitle": "உலகளாவிய தொலைத்தொடர்பு உள்கட்டமைப்புடன் வணிகங்களை இணைத்தல்",
  "heroSubtitle": "iNet Global என்பது 100-க்கும் மேற்பட்ட நாடுகளில் சர்வதேச மொத்த குரல் அழைப்புகள், பாதுகாப்பான OTP குறுஞ்செய்தி, மெய்நிகர் எண்கள் (DID) மற்றும் டயலர் தொழில்நுட்பங்களை வழங்கும் முன்னணி தொலைத்தொடர்பு நிறுவனமாகும்.",
  "contactBtn": "எங்கள் குழுவைத் தொடர்பு கொள்ளவும்",
  "servicesBtn": "சேவைகளை ஆராய்க",
  "heroStats": [
    {
      "label": "இணைக்கப்பட்ட நாடுகள்",
      "value": "100+",
      "sub": "நேரடி ஆபரேட்டர் இணைப்பு"
    },
    {
      "label": "நெட்வொர்க் நம்பகத்தன்மை",
      "value": "99.99%",
      "sub": "வணிக SLA 99.99%"
    },
    {
      "label": "மாதாந்திர பயன்பாடு",
      "value": "1B+",
      "sub": "கோடிக்கணக்கான குரல் அழைப்புகள் & SMS"
    },
    {
      "label": "உலகளாவிய தொழில்நுட்ப NOC",
      "value": "24/7/365",
      "sub": "24/7 நேரடி கண்காணிப்பு"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet குளோபல் நெட்வொர்க்",
    "status": "செயலில் & கண்காணிக்கப்படுகிறது",
    "regionLabel": "குளோபல் எண்டர்பிரைஸ் பாதை",
    "latency": "14ms",
    "card1Title": "நெட்வொர்க் SLA",
    "card1Val": "99.99%",
    "card1Badge": "குளோபல் SLA",
    "card2Title": "செயலில் உள்ள பாதைகள்",
    "card2Val": "100+",
    "card2Badge": "Tier-1 டெல்கோ",
    "routesTitle": "நேரடி வழித்தட நிலை",
    "route1": {
      "name": "அமெரிக்கா & ஐரோப்பிய SIP நேரடிப் பாதை",
      "quality": "100%",
      "status": "மேம்படுத்தப்பட்டது"
    },
    "route2": {
      "name": "ஆசிய பசிபிக் SMS நுழைவாயில்",
      "quality": "99.9%",
      "status": "மேம்படுத்தப்பட்டது"
    },
    "route3": {
      "name": "குளோபல் OTP முன்னுரிமைப் பாதை",
      "quality": "99.8%",
      "status": "மேம்படுத்தப்பட்டது"
    },
    "bottomStat1": "சுற்றுப் பயண தாமதம்",
    "bottomStat1Val": "14ms",
    "bottomStat2": "உலகளாவிய கிடைக்கும் தன்மை",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "நாங்கள் யார்",
  "companyTitle": "நம்பகமான உலகளாவிய தொலைத்தொடர்பு உள்கட்டமைப்பு",
  "companySubtitle": "உலகெங்கிலும் உள்ள தொலைத்தொடர்பு ஆபரேட்டர்கள் மற்றும் நிறுவனங்களுக்கு உயர்தர சேவைகளை வழங்குதல்.",
  "companyStory1": "உலகளாவிய தொலைத்தொடர்பை எளிமைப்படுத்தவும் மேம்படுத்தவும் நிறுவப்பட்ட iNet Global, அமெரிக்கா, ஐரோப்பா, ஆசியா மற்றும் மத்திய கிழக்கின் முன்னணி Tier-1 ஆபரேட்டர்களுடன் நேரடி இணைப்புகளை உருவாக்கியுள்ளது.",
  "companyStory2": "இன்று நாம் உலகளாவிய ஃபின்டெக், சுகாதாரம், ஈ-காமர்ஸ் மற்றும் தொலைத்தொடர்பு நிறுவனங்களுக்காக மாதந்தோறும் கோடிக்கணக்கான அழைப்புகள் மற்றும் செய்திகளை வெற்றிகரமாக நிர்வகிக்கிறோம்.",
  "missionTitle": "எங்கள் நோக்கம்",
  "missionDesc": "தெளிவான குரல் தரம், பாதுகாப்பான சரிபார்ப்பு செய்திகள் மற்றும் மெய்நிகர் எண்களை வழங்கி உலகெங்கிலும் உள்ள நிறுவனங்களை தடையின்றி இணைப்பது.",
  "visionTitle": "எங்கள் தொலைநோக்கு",
  "visionDesc": "செயற்கை நுண்ணறிவு மற்றும் நம்பகமான செயல்திறனுடன் உலகின் மிகவும் நம்பகமான தொலைத்தொடர்பு கூட்டாளராக மாறுவது.",
  "coreValuesTitle": "எங்கள் செயல்பாட்டு கோட்பாடுகள்",
  "values": [
    {
      "title": "உயர்தர தரம்",
      "desc": "அங்கீகரிக்கப்பட்ட CLI குரல் அழைப்புகள் மற்றும் 2 வினாடிகளுக்குள் OTP குறுஞ்செய்தி வழங்கும் உத்தரவாதம்."
    },
    {
      "title": "ஆபரேட்டர் நம்பகத்தன்மை",
      "desc": "24/7/365 NOC கண்காணிப்புடன் கூடிய 99.99% நெட்வொர்க் கிடைக்கும் தன்மை."
    },
    {
      "title": "எளிதான விரிவாக்கம்",
      "desc": "உங்கள் போக்குவரத்து தேவைகளுக்கு ஏற்ப எளிதாக விரிவடையும் உறுதியான உள்கட்டமைப்பு."
    },
    {
      "title": "வெளிப்படையான கூட்டாண்மை",
      "desc": "நேரடி கட்டண விவரங்கள், நேரடி தரவு பகுப்பாய்வு மற்றும் அர்ப்பணிப்புள்ள தொழில்நுட்ப மேலாளர்கள்."
    }
  ],
  "whatWeDoBadge": "நாங்கள் என்ன செய்கிறோம்",
  "whatWeDoTitle": "உலகளாவிய வணிகங்களுக்கான ஒருங்கிணைந்த தொலைத்தொடர்பு இணைப்புகள்",
  "whatWeDoSubtitle": "அதிக போக்குவரத்து மற்றும் உடனடி தேவைகளை ஆதரிக்கும் வகையில் சிறப்பாக உருவாக்கப்பட்டது.",
  "pillars": [
    {
      "title": "குரல் அழைப்புகள் & SIP ட்ரங்க்கிங்",
      "desc": "அங்கீகரிக்கப்பட்ட CLI மற்றும் குறைந்த தாமதத்துடன் கூடிய சர்வதேச குரல் அழைப்பு சேவை.",
      "points": [
        "100+ நேரடி ஆபரேட்டர் பாதைகள்",
        "Tier-1 A-Z சர்வதேச குரல் சேவை",
        "செலவு குறைந்த ஸ்மார்ட் ரூட்டிங்",
        "இரட்டை SIP நுழைவாயில்கள்"
      ]
    },
    {
      "title": "உயர் பாதுகாப்பு செய்திகள் & OTP",
      "desc": "கடவுச்சொற்கள் மற்றும் பரிவர்த்தனை அறிவிப்புகளுக்கான அதிவேக மற்றும் பாதுகாப்பான SMS சேவை.",
      "points": [
        "2 வினாடிகளுக்குள் OTP விநியோகம்",
        "SMPP மற்றும் REST API இணைப்பு",
        "நேரடி டெலிவரி அறிக்கைகள் (DLR)",
        "நேரடி மொபைல் ஆபரேட்டர் இணைப்புகள்"
      ]
    },
    {
      "title": "குளோபல் மெய்நிகர் எண்கள் (DID)",
      "desc": "உள்ளூர் வர்த்தக இருப்புக்காக 100-க்கும் மேற்பட்ட நாடுகளில் உள்ளூர் மற்றும் கட்டணமில்லா எண்கள்.",
      "points": [
        "உடனடி எண் ஒதுக்கீடு",
        "இருவழி குரல் மற்றும் SMS ஆதரவு",
        "எளிதான SIP அழைப்பு பகிர்தல்",
        "உள்ளூர் அழைப்பாளர் எண் காட்சி"
      ]
    },
    {
      "title": "கிளவுட் காண்டாக்ட் சென்டர் டயலர்",
      "desc": "விற்பனை மற்றும் ஆதரவு குழுக்களுக்கான WebRTC மற்றும் மொபைல் டயலர் தீர்வுகள்.",
      "points": [
        "முன்கணிப்பு மற்றும் தொடர்ச்சியான டயலிங்",
        "பிரவுசரில் நேரடியாக WebRTC அழைப்புகள்",
        "நேரடி மேற்பார்வையாளர் கண்காணிப்பு",
        "CRM-ல் அழைப்பு விவரங்கள் தானியங்கி பதிவு"
      ]
    }
  ],
  "servicesBadge": "எங்கள் சேவைகள்",
  "servicesTitle": "முழுமையான தொலைத்தொடர்பு தீர்வுகள்",
  "servicesSubtitle": "உங்கள் செயல்பாடுகளை விரிவுபடுத்தவும் செலவுகளைக் குறைக்கவும் உதவும் எங்கள் தயாரிப்புகளை ஆராயுங்கள்.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "மொத்த குரல் சேவை (Wholesale)",
      "desc": "உயர்தர ஆடியோ மற்றும் நம்பகமான CLI உடனான சர்வதேச குரல் அழைப்புகள்.",
      "href": "/wholesale-voice",
      "badge": "நேரடி பாதைகள்",
      "features": [
        "A-Z உலகளாவிய கவரேஜ்",
        "Tier-1 நேரடி இணைப்புகள்",
        "செலவு குறைந்த பாதைகள்"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI குரல் தீர்வுகள்",
      "desc": "நவீன வாடிக்கையாளர் மையங்களுக்கான அறிவார்ந்த தானியங்கி குரல் மற்றும் IVR அமைப்புகள்.",
      "href": "/voice",
      "badge": "தானியங்கி",
      "features": [
        "இயற்கையான குரல் உரையாடல்",
        "ஸ்மார்ட் IVR ரூட்டிங்",
        "நேரடி குரல் பகுப்பாய்வு"
      ]
    },
    {
      "id": "virtual-did",
      "title": "மெய்நிகர் எண்கள் (DID)",
      "desc": "100+ நாடுகளில் உள்ளூர் வணிக இருப்பை நிலைநிறுத்த உதவும் போன் எண்கள்.",
      "href": "/virtual-did",
      "badge": "100+ நாடுகள்",
      "features": [
        "உடனடி எண் அமைப்பு",
        "இருவழி அழைப்பு மற்றும் SMS",
        "நெகிழ்வான அழைப்பு பகிர்தல்"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "மொத்த SMS",
      "desc": "உலகளாவிய மொபைல் பயனர்களுக்கு அதிக அளவிலான SMS செய்திகளை அனுப்பும் வசதி.",
      "href": "/wholesale-message",
      "badge": "அதிவேகம்",
      "features": [
        "நேரடி ஆபரேட்டர் பாதைகள்",
        "SMPP மற்றும் HTTP நெறிமுறைகள்",
        "உலகளாவிய ரீச்"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS போர்டல்",
      "desc": "வங்கிகள் மற்றும் நிதி நிறுவனங்களுக்கான அதிவேக சரிபார்ப்புக் குறியீடு விநியோகம்.",
      "href": "/otp-sms",
      "badge": "உடனடி டெலிவரி",
      "features": [
        "99.8% டெலிவரி விகிதம்",
        "மோசடி தடுப்பு பாதுகாப்பு",
        "முழுமையான குறியாக்கம்"
      ]
    },
    {
      "id": "dialer",
      "title": "முழுமையான டயலர் தீர்வு",
      "desc": "மேற்பார்வையாளர் கண்காணிப்பு மற்றும் ஸ்மார்ட் ரூட்டிங் கொண்ட WebRTC டயலர்.",
      "href": "/dialer",
      "badge": "WebRTC & மொபைல்",
      "features": [
        "முன்கணிப்பு டயலிங்",
        "நேரடி கண்காணிப்பு",
        "நேரடி பகுப்பாய்வு பலகை"
      ]
    }
  ],
  "mapBadge": "தலைமையகம் மற்றும் வரைபடம்",
  "mapTitle": "எங்கள் பதிவு செய்யப்பட்ட முகவரி மற்றும் நெட்வொர்க்",
  "mapSubtitle": "சிறப்பு நெட்வொர்க் செயல்பாட்டு மையங்கள் மூலம் வருடத்தின் 365 நாட்களும், 24 மணி நேரமும் நாங்கள் சேவையளிக்கிறோம்.",
  "officeTitle": "நிறுவன தலைமையகம்",
  "officeAddressLabel": "பதிவு செய்யப்பட்ட முகவரி",
  "officePhoneLabel": "தொலைபேசி ஆதரவு",
  "officeEmailLabel": "மின்னஞ்சல் விசாரணைகள்",
  "officeSupportLabel": "ஆதரவு கிடைக்கும் நேரம்",
  "officeSupportHours": "24/7/365 NOC ஆதரவு",
  "nocLabel": "குளோபல் நெட்வொர்க் செயல்பாட்டு மையம் (NOC)",
  "nocDesc": "தாமத கண்காணிப்பு, தானியங்கி மாற்றுப் பாதை மற்றும் அர்ப்பணிப்புள்ள தொழில்நுட்ப பொறியாளர்கள்.",
  "mapPinTitle": "iNet குளோபல் செயல்பாட்டு மையம்",
  "mapPinDesc": "சர்வதேச Tier-1 டிரான்சிட் நெட்வொர்க்குகளுடன் இணைக்கப்பட்ட பைனான்சியல் பார்க் ஹப்.",
  "ctaTitle": "உங்கள் தொலைத்தொடர்பு அமைப்பை மேம்படுத்த தயாரா?",
  "ctaSubtitle": "தெளிவான குரல் அழைப்புகள், அதிவேக SMS மற்றும் மெய்நிகர் எண்களைப் பெற iNet Global உடன் இணையுங்கள்.",
  "ctaPrimaryBtn": "ஆலோசனையை திட்டமிடுங்கள்",
  "ctaSecondaryBtn": "தயாரிப்புகளைக் காண்க",
  "floatingTier1Badge": {
    "title": "Tier-1 நேரடி பாதைகள்",
    "sub": "நிறுவன SLA 99.99%"
  },
  "ambientInterconnectBadge": {
    "title": "நேரடி உலகளாவிய இணைப்புகள்",
    "sub": "தடையற்ற சர்வதேச மொத்த தொலைத்தொடர்பு"
  },
  "mapLiveLocation": "நேரடி இருப்பிடம்",
  "postalAddressLabel": "அஞ்சல் முகவரி",
  "ctaGuaranteedSla": "99.99% உத்தரவாதமான SLA",
  "ctaDedicatedNoc": "அர்ப்பணிப்புள்ள 24/7/365 NOC"
};

const te: AboutUsTranslation = {
  "heroBadge": "ఐనెట్ గ్లోబల్ గురించి",
  "heroTitle": "క్యారియర్-గ్రేడ్ నాణ్యతతో ప్రపంచ టెలికాంను సాధికారపరచడం",
  "heroSubtitle": "iNet Global అనేది 100 కంటే ఎక్కువ దేశాలలో హోల్‌సేల్ వాయిస్ టెర్మినేషన్, సురక్షిత OTP మెసేజింగ్, వర్చువల్ నంబర్లు (DID) మరియు డయలర్ మౌలిక సదుపాయాలను అందించే ప్రముఖ అంతర్జాతీయ టెలికమ్యూనికేషన్స్ ప్రొవైడర్.",
  "contactBtn": "మా బృందాన్ని సంప్రదించండి",
  "servicesBtn": "సేవలను అన్వేషించండి",
  "heroStats": [
    {
      "label": "కనెక్ట్ చేయబడిన దేశాలు",
      "value": "100+",
      "sub": "డైరెక్ట్ ఆపరేటర్ టెర్మినేషన్"
    },
    {
      "label": "నెట్‌వర్క్ విశ్వసనీయత",
      "value": "99.99%",
      "sub": "99.99% ఎంటర్‌ప్రైజ్ SLA"
    },
    {
      "label": "నెలవారీ పరిమాణం",
      "value": "1B+",
      "sub": "బిలియన్ల కొద్దీ వాయిస్ నిమిషాలు & SMS"
    },
    {
      "label": "గ్లోబల్ టెక్నికల్ NOC",
      "value": "24/7/365",
      "sub": "24/7 యాక్టివ్ లేటెన్సీ పర్యవేక్షణ"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet గ్లోబల్ నెట్‌వర్క్",
    "status": "క్రియాశీల & పర్యవేక్షించబడుతోంది",
    "regionLabel": "గ్లోబల్ ఎంటర్‌ప్రైజ్ రూట్లు",
    "latency": "14ms",
    "card1Title": "నెట్‌వర్క్ SLA",
    "card1Val": "99.99%",
    "card1Badge": "గ్లోబల్ SLA",
    "card2Title": "క్రియాశీల రూట్లు",
    "card2Val": "100+",
    "card2Badge": "టైర్-1 క్యారియర్లు",
    "routesTitle": "డైరెక్ట్ రూట్ల స్థితి",
    "route1": {
      "name": "US & EU SIP డైరెక్ట్ రూట్",
      "quality": "100%",
      "status": "ఆప్టిమైజ్ చేయబడింది"
    },
    "route2": {
      "name": "APAC ఆపరేటర్ SMS గేట్‌వే",
      "quality": "99.9%",
      "status": "ఆప్టిమైజ్ చేయబడింది"
    },
    "route3": {
      "name": "గ్లోబల్ OTP అధిక ప్రాధాన్యత",
      "quality": "99.8%",
      "status": "ఆప్టిమైజ్ చేయబడింది"
    },
    "bottomStat1": "రౌండ్-ట్రిప్ లేటెన్సీ",
    "bottomStat1Val": "14ms",
    "bottomStat2": "గ్లోబల్ లభ్యత",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "మేము ఎవరు",
  "companyTitle": "ప్రపంచ విశ్వసనీయతపై నిర్మించబడింది, వ్యాపార వృద్ధికి రూపకల్పన చేయబడింది",
  "companySubtitle": "ప్రపంచవ్యాప్తంగా మొబైల్ ఆపరేటర్లు, అగ్రిగేటర్లు మరియు ఎంటర్‌ప్రైజెస్ కోసం అవసరమైన టెలికమ్యూనికేషన్స్ సేవలను అందిస్తోంది.",
  "companyStory1": "గ్లోబల్ టెలికాంను సరళీకృతం చేసే లక్ష్యంతో స్థాపించబడిన iNet Global, అమెరికాస్, యూరప్, ఆసియా మరియు మధ్యప్రాచ్యాలలో ప్రముఖ టైర్-1 క్యారియర్లతో నేరుగా ఇంటర్‌కనెక్ట్‌లను నిర్మించింది.",
  "companyStory2": "నేడు, మేము గ్లోబల్ ఫిన్‌టెక్, హెల్త్‌కేర్, ప్రముఖ ఇ-కామర్స్ మరియు టెలికాం రీసెల్లర్ల కోసం ప్రతి నెలా బిలియన్ల కొద్దీ నిమిషాలు మరియు సందేశాలను సురక్షితంగా ప్రాసెస్ చేస్తున్నాము.",
  "missionTitle": "మా లక్ష్యం",
  "missionDesc": "వ్యాపారాలు ప్రతిచోటా కనెక్ట్ కావడానికి స్పష్టమైన వాయిస్ నాణ్యత, విశ్వసనీయ ధృవీకరణ సందేశాలు మరియు అతుకులు లేని వర్చువల్ నంబర్లను అందించడం.",
  "visionTitle": "మా దార్శనికత",
  "visionDesc": "AI ఇంటెలిజెన్స్ మరియు క్యారియర్ పనితీరు ద్వారా నిరంతరం ఆవిష్కరిస్తూ ప్రపంచంలోనే అత్యంత విశ్వసనీయ గ్లోబల్ కమ్యూనికేషన్ ఇన్‌ఫ్రాస్ట్రక్చర్ భాగస్వామిగా మారడం.",
  "coreValuesTitle": "మా కార్యకలాపాలను మార్గదర్శనం చేసే సూత్రాలు",
  "values": [
    {
      "title": "రాజీలేని నాణ్యత",
      "desc": "ధృవీకరించబడిన CLI వాయిస్ రూట్లు మరియు 2-సెకన్ల లోపు హామీ ఇవ్వబడిన SMS OTP డెలివరీ."
    },
    {
      "title": "క్యారియర్-గ్రేడ్ విశ్వసనీయత",
      "desc": "24/7/365 ప్రోయాక్టివ్ NOC పర్యవేక్షణ ద్వారా 99.99% అప్‌టైమ్ మద్దతు."
    },
    {
      "title": "గ్లోబల్ స్కేలబిలిటీ",
      "desc": "మీ వ్యాపార ట్రాఫిక్ స్పైక్‌లను సజావుగా నిర్వహించడానికి రూపొందించబడిన బలమైన మౌలిక సదుపాయాలు."
    },
    {
      "title": "పారదర్శక భాగస్వామ్యం",
      "desc": "సూటిగా బిల్లింగ్, రియల్-టైమ్ అనలిటిక్స్ డాష్‌బోర్డులు మరియు అంకితమైన సాంకేతిక ఖాతా నిర్వాహకులు."
    }
  ],
  "whatWeDoBadge": "మేము ఏమి చేస్తాము",
  "whatWeDoTitle": "ఏకీకృత టెలికాం ద్వారా ప్రపంచంలోని ప్రతి మూలను కనెక్ట్ చేయడం",
  "whatWeDoSubtitle": "అధిక సామర్థ్యం మరియు లేటెన్సీ-సెన్సిటివ్ వ్యాపార కార్యకలాపాలకు మద్దతు ఇవ్వడానికి పునాది నుండి నిర్మించబడింది.",
  "pillars": [
    {
      "title": "వాయిస్ టెర్మినేషన్ & SIP ట్రంకింగ్",
      "desc": "గ్యారెంటీడ్ CLI మరియు అత్యల్ప లేటెన్సీతో క్యారియర్-గ్రేడ్ అంతర్జాతీయ వాయిస్ టెర్మినేషన్.",
      "points": [
        "100+ డైరెక్ట్ ఆపరేటర్ రూట్లు",
        "టైర్-1 A-Z అంతర్జాతీయ టెర్మినేషన్",
        "ఇంటెలిజెంట్ లీస్ట్-కాస్ట్ రూటింగ్",
        "రిడండెంట్ SIP గేట్‌వేలు"
      ]
    },
    {
      "title": "హై-రిలయబిలిటీ మెసేజింగ్ & OTP",
      "desc": "వన్-టైమ్ పాస్‌వర్డ్‌లు మరియు బ్యాంకింగ్ లావాదేవీ హెచ్చరికల కోసం వేగవంతమైన, నమ్మకమైన SMS డెలివరీ.",
      "points": [
        "2 సెకన్ల లోపు OTP డెలివరీ",
        "SMPP మరియు REST API కనెక్టివిటీ",
        "రియల్-టైమ్ డెలివరీ నివేదికలు (DLR)",
        "డైరెక్ట్ మొబైల్ ఆపరేటర్ రూట్లు"
      ]
    },
    {
      "title": "గ్లోబల్ వర్చువల్ నంబర్లు (DID)",
      "desc": "తక్షణ ప్రపంచ ఉనికి కోసం 100+ దేశాలలో స్థానిక, టోల్-ఫ్రీ మరియు మొబైల్ నంబర్లు.",
      "points": [
        "తక్షణ నంబర్ ప్రొవిజనింగ్",
        "టూ-వే వాయిస్ మరియు SMS మద్దతు",
        "ఫ్లెక్సిబుల్ SIP కాల్ ఫార్వార్డింగ్",
        "స్థానిక కాలర్ ఐడెంటిటీలు"
      ]
    },
    {
      "title": "క్లౌడ్ కాంటాక్ట్ సెంటర్ డయలర్",
      "desc": "సేల్స్ మరియు కస్టమర్ సర్వీస్ బృందాల కోసం ప్రిడిక్టివ్ వెబ్‌ఆర్‌టిసి మరియు మొబైల్ డయలర్ పరిష్కారాలు.",
      "points": [
        "ప్రిడిక్టివ్ & ప్రోగ్రెసివ్ మోడ్‌లు",
        "బ్రౌజర్‌లో నేరుగా WebRTC కాలింగ్",
        "లైవ్ సూపర్‌వైజర్ మానిటరింగ్",
        "స్వయంచాలక CRM కాల్ లాగింగ్"
      ]
    }
  ],
  "servicesBadge": "మా సేవలు",
  "servicesTitle": "ఆధునిక ఎంటర్‌ప్రైజ్ కోసం సమగ్ర టెలికాం సూట్",
  "servicesSubtitle": "మీ కార్యకలాపాలను విస్తరించడానికి మరియు ఖర్చులను తగ్గించడానికి రూపొందించబడిన మా మాడ్యులర్ ఉత్పత్తులను అన్వేషించండి.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "హోల్‌సేల్ వాయిస్",
      "desc": "గ్యారెంటీడ్ CLI మరియు ప్రీమియం ఆడియో నాణ్యతతో నమ్మకమైన అంతర్జాతీయ వాయిస్ టెర్మినేషన్.",
      "href": "/wholesale-voice",
      "badge": "డైరెక్ట్ రూట్లు",
      "features": [
        "A-Z గ్లోబల్ కవరేజ్",
        "టైర్-1 ఇంటర్‌కనెక్ట్‌లు",
        "కాస్ట్-ఎఫెక్టివ్ రూటింగ్"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI వాయిస్ సొల్యూషన్స్",
      "desc": "ఆధునిక కాంటాక్ట్ సెంటర్ల కోసం తెలివైన ఆటోమేటెడ్ వాయిస్ అనుభవాలు మరియు ఎంటర్‌ప్రైజ్ IVR.",
      "href": "/voice",
      "badge": "ఆటోమేషన్",
      "features": [
        "సహజ వాయిస్ పరస్పర చర్యలు",
        "స్మార్ట్ IVR రూటింగ్",
        "రియల్-టైమ్ వాయిస్ అంతర్దృష్టులు"
      ]
    },
    {
      "id": "virtual-did",
      "title": "వర్చువల్ నంబర్లు (DID)",
      "desc": "గ్లోబల్ బ్రాండ్ ఉనికి కోసం 100+ దేశాలలో స్థానిక మరియు టోల్-ఫ్రీ ఫోన్ నంబర్లు.",
      "href": "/virtual-did",
      "badge": "100+ దేశాలు",
      "features": [
        "శీఘ్ర నంబర్ యాక్టివేషన్",
        "టూ-వే వాయిస్ & SMS",
        "ఫ్లెక్సిబుల్ డైవర్షన్"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "హోల్‌సేల్ SMS",
      "desc": "ప్రపంచవ్యాప్తంగా మొబైల్ చందాదారులకు అధిక-వాల్యూమ్ బల్క్ SMS ప్రసారం.",
      "href": "/wholesale-message",
      "badge": "హై త్రూపుట్",
      "features": [
        "డైరెక్ట్ టెల్కో రూట్లు",
        "SMPP & HTTP ప్రోటోకాల్స్",
        "గ్లోబల్ రీచ్"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS పోర్టల్",
      "desc": "బ్యాంకింగ్ మరియు ఫిన్‌టెక్ కోసం ప్రత్యేకంగా రూపొందించబడిన అల్ట్రా-ఫాస్ట్ వెరిఫికేషన్ కోడ్ డెలివరీ.",
      "href": "/otp-sms",
      "badge": "తక్షణ డెలివరీ",
      "features": [
        "99.8% డెలివరీ రేటు",
        "యాంటీ-ఫ్రాడ్ రూటింగ్",
        "ఎన్‌క్రిప్టెడ్ ట్రాన్స్‌మిషన్"
      ]
    },
    {
      "id": "dialer",
      "title": "పూర్తి డయలర్ సొల్యూషన్స్",
      "desc": "సూపర్‌వైజర్ మానిటరింగ్ మరియు ఇంటెలిజెంట్ రూటింగ్‌తో బ్రౌజర్ మరియు మొబైల్ వెబ్‌ఆర్‌టిసి డయలర్.",
      "href": "/dialer",
      "badge": "WebRTC & మొబైల్",
      "features": [
        "ప్రిడిక్టివ్ డయలింగ్",
        "లైవ్ లిజనింగ్ & జోక్యం",
        "రియల్-టైమ్ వాల్‌బోర్డులు"
      ]
    }
  ],
  "mapBadge": "ప్రధాన కార్యాలయం & గ్లోబల్ రీచ్",
  "mapTitle": "మా వ్యూహాత్మక ఉనికి మరియు నమోదిత చిరునామా",
  "mapSubtitle": "అంకితమైన నెట్‌వర్క్ ఆపరేషన్స్ కేంద్రాలు మరియు ప్రపంచ ఉనికి పాయింట్లతో, మేము వ్యాపారాలకు 24/7 మద్దతు ఇస్తాము.",
  "officeTitle": "కార్పొరేట్ ప్రధాన కార్యాలయం",
  "officeAddressLabel": "నమోదిత చిరునామా",
  "officePhoneLabel": "ఫోన్ మద్దతు",
  "officeEmailLabel": "ఇమెయిల్ విచారణలు",
  "officeSupportLabel": "మద్దతు లభ్యత",
  "officeSupportHours": "24/7/365 NOC మద్దతు",
  "nocLabel": "గ్లోబల్ నెట్‌వర్క్ ఆపరేషన్స్ సెంటర్ (NOC)",
  "nocDesc": "ప్రోయాక్టివ్ లేటెన్సీ పర్యవేక్షణ, ఆటోమేటిక్ రీ-రూటింగ్ మరియు స్టాండ్‌బై ఇంజనీర్లు.",
  "mapPinTitle": "iNet గ్లోబల్ కార్యకలాపాలు",
  "mapPinDesc": "అంతర్జాతీయ టైర్-1 క్యారియర్ ట్రాన్సిట్ నెట్‌వర్క్‌లకు కనెక్ట్ చేయబడిన వ్యూహాత్మక ఫైనాన్షియల్ పార్క్ హబ్.",
  "ctaTitle": "మీ గ్లోబల్ టెలికాం మౌలిక సదుపాయాలను మార్చడానికి సిద్ధంగా ఉన్నారా?",
  "ctaSubtitle": "మా టైర్-1 డైరెక్ట్ రూట్లలో ఇప్పటికే తమ గ్లోబల్ వాయిస్ మరియు SMS డెలివరీని ఆప్టిమైజ్ చేసిన ప్రముఖ సంస్థలతో చేరండి.",
  "ctaPrimaryBtn": "టెలికాం నిపుణుడితో మాట్లాడండి",
  "ctaSecondaryBtn": "మా సేవలను అన్వేషించండి",
  "floatingTier1Badge": {
    "title": "టైర్-1 డైరెక్ట్ రూట్లు",
    "sub": "99.99% ఎంటర్‌ప్రైజ్ SLA"
  },
  "ambientInterconnectBadge": {
    "title": "డైరెక్ట్ గ్లోబల్ ఇంటర్‌కనెక్ట్‌లు",
    "sub": "సున్నా-రాపిడి అంతర్జాతీయ హోల్‌సేల్ ట్రాన్సిట్"
  },
  "mapLiveLocation": "ప్రత్యక్ష స్థానం",
  "postalAddressLabel": "పోస్టల్ చిరునామా",
  "ctaGuaranteedSla": "99.99% హామీ ఇవ్వబడిన SLA",
  "ctaDedicatedNoc": "24/7/365 అంకితమైన NOC"
};

const mr: AboutUsTranslation = {
  "heroBadge": "आयनेट ग्लोबल बद्दल",
  "heroTitle": "कॅरियर-ग्रेड गुणवत्तेसह जागतिक दूरसंचार सक्षम करणे",
  "heroSubtitle": "iNet Global ही १०० हून अधिक देशांमध्ये घाऊक व्हॉइस टर्मिनेशन, सुरक्षित OTP मेसेजिंग, व्हर्च्युअल नंबर (DID) आणि डायलर पायाभूत सुविधा पुरवणारी एक आघाडीची आंतरराष्ट्रीय दूरसंचार प्रदाता आहे.",
  "contactBtn": "आमच्या टीमशी संपर्क साधा",
  "servicesBtn": "सेवा एक्सप्लोर करा",
  "heroStats": [
    {
      "label": "जोडलेले देश",
      "value": "100+",
      "sub": "थेट ऑपरेटर टर्मिनेशन"
    },
    {
      "label": "नेटवर्क विश्वसनीयता",
      "value": "99.99%",
      "sub": "९९.९९% एंटरप्राइझ SLA"
    },
    {
      "label": "मासिक प्रमाण",
      "value": "1B+",
      "sub": "अब्जावधी व्हॉइस मिनिटे आणि SMS"
    },
    {
      "label": "ग्लोबल टेक्निकल NOC",
      "value": "24/7/365",
      "sub": "२४/७ सक्रिय लेटन्सी देखरेख"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet ग्लोबल नेटवर्क",
    "status": "सक्रिय आणि निरीक्षण केलेले",
    "regionLabel": "ग्लोबल एंटरप्राइझ रूट्स",
    "latency": "14ms",
    "card1Title": "नेटवर्क SLA",
    "card1Val": "99.99%",
    "card1Badge": "ग्लोबल SLA",
    "card2Title": "सक्रिय रूट्स",
    "card2Val": "100+",
    "card2Badge": "टियर-१ कॅरियर्स",
    "routesTitle": "थेट रूट्स स्थिती",
    "route1": {
      "name": "US आणि EU SIP थेट रूट",
      "quality": "100%",
      "status": "ऑप्टिमाइझ केलेले"
    },
    "route2": {
      "name": "APAC ऑपरेटर SMS गेटवे",
      "quality": "99.9%",
      "status": "ऑप्टिमाइझ केलेले"
    },
    "route3": {
      "name": "ग्लोबल OTP उच्च प्राधान्य",
      "quality": "99.8%",
      "status": "ऑप्टिमाइझ केलेले"
    },
    "bottomStat1": "राउंड-ट्रिप लेटन्सी",
    "bottomStat1Val": "14ms",
    "bottomStat2": "जागतिक उपलब्धता",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "आम्ही कोण आहोत",
  "companyTitle": "जागतिक विश्वासार्हतेवर आधारित, व्यवसाय वाढीसाठी डिझाइन केलेले",
  "companySubtitle": "जगभरातील मोबाइल ऑपरेटर, एग्रीगेटर आणि उद्योगांसाठी आवश्यक दूरसंचार सेवा प्रदान करत आहे.",
  "companyStory1": "जागतिक दूरसंचार सुलभ करण्याच्या महत्त्वाकांक्षेने स्थापन झालेल्या iNet Global ने अमेरिका, युरोप, आशिया आणि मध्यपूर्वेतील प्रमुख टियर-१ वाहकांसोबत थेट इंटरकनेक्ट्स तयार केले आहेत.",
  "companyStory2": "आज, आम्ही जागतिक फिनटेक, हेल्थकेअर, आघाडीच्या ई-कॉमर्स आणि दूरसंचार पुनर्विक्रेत्यांसाठी दरमहा अब्जावधी मिनिटे आणि संदेश सुरक्षितपणे प्रक्रिया करतो.",
  "missionTitle": "आमचे ध्येय",
  "missionDesc": "व्यवसायांना सर्वत्र कनेक्ट राहण्यासाठी क्रिस्टल-क्लियर व्हॉइस गुणवत्ता, विश्वासार्ह प्रमाणीकरण संदेश आणि अखंड व्हर्च्युअल नंबर प्रदान करणे.",
  "visionTitle": "आमची दृष्टी",
  "visionDesc": "AI बुद्धिमत्ता आणि कॅरियर कार्यक्षमतेद्वारे सतत नवनवीन शोध लावत जगातील सर्वात विश्वासू जागतिक संप्रेषण पायाभूत सुविधा भागीदार बनणे.",
  "coreValuesTitle": "आमच्या कार्याचे मार्गदर्शन करणारी तत्त्वे",
  "values": [
    {
      "title": "तडजोड न करणारी गुणवत्ता",
      "desc": "सत्यापित CLI व्हॉइस रूट्स आणि २-सेकंदांच्या आत हमी दिलेली SMS OTP वितरण."
    },
    {
      "title": "कॅरियर-ग्रेड विश्वसनीयता",
      "desc": "२४/७/३६५ सक्रिय NOC देखरेखीद्वारे समर्थित ९९.९९% अपटाइम."
    },
    {
      "title": "जागतिक स्केलेबिलिटी",
      "desc": "तुमच्या व्यवसायातील ट्रॅफिक स्पाइक्स सहजपणे हाताळण्यासाठी डिझाइन केलेली मजबूत पायाभूत सुविधा."
    },
    {
      "title": "पारदर्शक भागीदारी",
      "desc": "थेट बिलिंग, रीअल-टाइम अ‍ॅनालिटिक्स डॅशबोर्ड आणि समर्पित तांत्रिक खाते व्यवस्थापक."
    }
  ],
  "whatWeDoBadge": "आम्ही काय करतो",
  "whatWeDoTitle": "एकीकृत दूरसंचार द्वारे जगातील प्रत्येक कोपरा जोडणे",
  "whatWeDoSubtitle": "उच्च-क्षमता आणि लेटन्सी-संवेदनशील व्यवसाय ऑपरेशन्सना समर्थन देण्यासाठी तयार केले गेले आहे.",
  "pillars": [
    {
      "title": "व्हॉइस टर्मिनेशन आणि SIP ट्रंकिंग",
      "desc": "हमी CLI आणि किमान लेटन्सीसह कॅरियर-ग्रेड आंतरराष्ट्रीय व्हॉइस टर्मिनेशन.",
      "points": [
        "१००+ थेट ऑपरेटर रूट्स",
        "टियर-१ A-Z आंतरराष्ट्रीय टर्मिनेशन",
        "इंटेलिजेंट लीस्ट-कॉस्ट रूटिंग",
        "रिडंडंट SIP गेटवे"
      ]
    },
    {
      "title": "उच्च-विश्वसनीयता मेसेजिंग आणि OTP",
      "desc": "वन-टाइम पासवर्ड आणि बँकिंग व्यवहार सूचनांसाठी जलद आणि विश्वासार्ह SMS वितरण.",
      "points": [
        "२ सेकंदांच्या आत OTP वितरण",
        "SMPP आणि REST API कनेक्टिव्हिटी",
        "रिअल-टाइम डिलिव्हरी अहवाल (DLR)",
        "थेट मोबाइल ऑपरेटर रूट्स"
      ]
    },
    {
      "title": "ग्लोबल व्हर्च्युअल नंबर (DID)",
      "desc": "झटपट जागतिक उपस्थितीसाठी १००+ देशांमध्ये स्थानिक, टोल-फ्री आणि मोबाइल नंबर.",
      "points": [
        "झटपट नंबर प्रोव्हिजनिंग",
        "टू-वे व्हॉइस आणि SMS सपोर्ट",
        "लवचिक SIP कॉल फॉरवर्डिंग",
        "स्थानिक कॉलर ओळख"
      ]
    },
    {
      "title": "क्लाउड कॉन्टॅक्ट सेंटर डायलर",
      "desc": "विक्री आणि ग्राहक सेवा संघांसाठी प्रेडिक्टिव WebRTC आणि मोबाइल डायलर सोल्यूशन्स.",
      "points": [
        "प्रेडिक्टिव आणि प्रोग्रेसिव्ह मोड्स",
        "थेट ब्राउझरमध्ये WebRTC कॉलिंग",
        "थेट पर्यवेक्षक देखरेख",
        "स्वयंचलित CRM कॉल लॉगिंग"
      ]
    }
  ],
  "servicesBadge": "आमच्या सेवा",
  "servicesTitle": "आधुनिक एंटरप्राइझसाठी संपूर्ण दूरसंचार संच",
  "servicesSubtitle": "तुमची ऑपरेशन्स वाढवण्यासाठी आणि खर्च कमी करण्यासाठी डिझाइन केलेली आमची मॉड्यूलर उत्पादने एक्सप्लोर करा.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "घाऊक व्हॉइस",
      "desc": "हमी CLI आणि प्रीमियम ऑडिओ गुणवत्तेसह विश्वासार्ह आंतरराष्ट्रीय व्हॉइस टर्मिनेशन.",
      "href": "/wholesale-voice",
      "badge": "थेट रूट्स",
      "features": [
        "A-Z जागतिक कव्हरेज",
        "टियर-१ इंटरकनेक्ट्स",
        "खर्च-प्रभावी रूटिंग"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI व्हॉइस सोल्यूशन्स",
      "desc": "आधुनिक संपर्क केंद्रांसाठी बुद्धिमान स्वयंचलित व्हॉइस अनुभव आणि एंटरप्राइझ IVR.",
      "href": "/voice",
      "badge": "ऑटोमेशन",
      "features": [
        "नैसर्गिक व्हॉइस संवाद",
        "स्मार्ट IVR रूटिंग",
        "रिअल-टाइम व्हॉइस विश्लेषण"
      ]
    },
    {
      "id": "virtual-did",
      "title": "व्हर्च्युअल नंबर (DID)",
      "desc": "जागतिक ब्रँड उपस्थितीसाठी १००+ देशांमध्ये स्थानिक आणि टोल-फ्री फोन नंबर.",
      "href": "/virtual-did",
      "badge": "१००+ देश",
      "features": [
        "जलद नंबर सक्रियकरण",
        "टू-वे व्हॉइस आणि SMS",
        "लवचिक डायव्हर्जन"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "घाऊक SMS",
      "desc": "जगभरातील मोबाइल ग्राहकांसाठी उच्च-व्हॉल्यूम बल्क SMS ट्रान्समिशन.",
      "href": "/wholesale-message",
      "badge": "उच्च थ्रूपुट",
      "features": [
        "थेट टेल्को रूट्स",
        "SMPP आणि HTTP प्रोटोकॉल",
        "जागतिक पोहोच"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS पोर्टल",
      "desc": "बँकिंग आणि फिनटेकसाठी डिझाइन केलेले अल्ट्रा-फास्ट पडताळणी कोड वितरण.",
      "href": "/otp-sms",
      "badge": "झटपट वितरण",
      "features": [
        "९९.८% वितरण दर",
        "अँटी-फ्रॉड रूटिंग",
        "एनक्रिप्टेड ट्रान्समिशन"
      ]
    },
    {
      "id": "dialer",
      "title": "संपूर्ण डायलर सोल्यूशन्स",
      "desc": "पर्यवेक्षक देखरेख आणि बुद्धिमान रूटिंगसह ब्राउझर आणि मोबाइल WebRTC डायलर.",
      "href": "/dialer",
      "badge": "WebRTC आणि मोबाइल",
      "features": [
        "प्रेडिक्टिव डायलिंग",
        "थेट ऐकणे आणि हस्तक्षेप",
        "रिअल-टाइम वॉल Raphael"
      ]
    }
  ],
  "mapBadge": "मुख्यालय आणि जागतिक पोहोच",
  "mapTitle": "आमची धोरणात्मक उपस्थिती आणि नोंदणीकृत पत्ता",
  "mapSubtitle": "समर्पित नेटवर्क ऑपरेशन्स सेंटर्स आणि जागतिक उपस्थिती बिंदूंसह, आम्ही २४/७ व्यवसायांना समर्थन देतो.",
  "officeTitle": "कॉर्पोरेट मुख्यालय",
  "officeAddressLabel": "नोंदणीकृत पत्ता",
  "officePhoneLabel": "फोन समर्थन",
  "officeEmailLabel": "ईमेल चौकशी",
  "officeSupportLabel": "समर्थन उपलब्धता",
  "officeSupportHours": "२४/७/३६५ NOC समर्थन",
  "nocLabel": "ग्लोबल नेटवर्क ऑपरेशन्स सेंटर (NOC)",
  "nocDesc": "सक्रिय लेटन्सी मॉनिटरिंग, ऑटोमॅटिक री-रूटिंग आणि स्टँडबाय इंजिनियर्स.",
  "mapPinTitle": "iNet ग्लोबल ऑपरेशन्स",
  "mapPinDesc": "आंतरराष्ट्रीय टियर-१ वाहक ट्रॅन्झिट नेटवर्क्सशी जोडलेले धोरणात्मक फायनान्शियल पार्क केंद्र.",
  "ctaTitle": "तुमची जागतिक दूरसंचार पायाभूत सुविधा बदलण्यासाठी तयार आहात?",
  "ctaSubtitle": "आमच्या टियर-१ थेट रूट्सवर आधीच त्यांचे व्हॉइस आणि SMS वितरण ऑप्टिमाइझ केलेल्या आघाडीच्या संस्थांमध्ये सामील व्हा.",
  "ctaPrimaryBtn": "दूरसंचार तज्ञाशी बोला",
  "ctaSecondaryBtn": "आमच्या सेवा एक्सप्लोर करा",
  "floatingTier1Badge": {
    "title": "टियर-१ थेट रूट्स",
    "sub": "९९.९९% एंटरप्राइझ SLA"
  },
  "ambientInterconnectBadge": {
    "title": "थेट जागतिक इंटरकनेक्ट्स",
    "sub": "शून्य-घर्षण आंतरराष्ट्रीय घाऊक ट्रान्झिट"
  },
  "mapLiveLocation": "थेट स्थान",
  "postalAddressLabel": "टपाल पत्ता",
  "ctaGuaranteedSla": "९९.९९% हमी दिलेले SLA",
  "ctaDedicatedNoc": "२४/७/३६५ समर्पित NOC"
};

const sw: AboutUsTranslation = {
  "heroBadge": "KUHUSU INET GLOBAL",
  "heroTitle": "Kuwezesha Mawasiliano ya Kimataifa kwa Ubora wa Kiwango cha Mtoa Huduma",
  "heroSubtitle": "iNet Global ni mtoa huduma anayeongoza wa mawasiliano ya kimataifa anayetoa usitishaji wa sauti wa jumla, utumaji salama wa OTP, nambari pepe (DID), na miundombinu ya kupiga simu katika zaidi ya nchi 100.",
  "contactBtn": "Wasiliana na Timu Yetu",
  "servicesBtn": "Chunguza Huduma",
  "heroStats": [
    {
      "label": "Nchi Zilizounganishwa",
      "value": "100+",
      "sub": "Usitishaji wa moja kwa moja wa mtoa huduma"
    },
    {
      "label": "Uaminifu wa Mtandao",
      "value": "99.99%",
      "sub": "SLA ya biashara ya 99.99%"
    },
    {
      "label": "Kiasi cha Kila Mwezi",
      "value": "1B+",
      "sub": "Mabilioni ya dakika za sauti na SMS"
    },
    {
      "label": "NOC ya Kiufundi ya Kimataifa",
      "value": "24/7/365",
      "sub": "Ufuatiliaji wa latency wa 24/7"
    }
  ],
  "phoneMockup": {
    "appTitle": "Mtandao wa iNet Global",
    "status": "Inafanya Kazi & Inafuatiliwa",
    "regionLabel": "Njia za Biashara za Kimataifa",
    "latency": "14ms",
    "card1Title": "SLA ya Mtandao",
    "card1Val": "99.99%",
    "card1Badge": "SLA ya Kimataifa",
    "card2Title": "Njia Zinazofanya Kazi",
    "card2Val": "100+",
    "card2Badge": "Watoa Huduma wa Tier-1",
    "routesTitle": "Hali ya Njia za Moja kwa Moja",
    "route1": {
      "name": "Njia ya Moja kwa Moja ya SIP ya Marekani na Ulaya",
      "quality": "100%",
      "status": "Imeboreshwa"
    },
    "route2": {
      "name": "Lango la SMS la APAC",
      "quality": "99.9%",
      "status": "Imeboreshwa"
    },
    "route3": {
      "name": "Kipaumbele cha Juu cha OTP Ulimwenguni",
      "quality": "99.8%",
      "status": "Imeboreshwa"
    },
    "bottomStat1": "Latency ya Safari ya Pande Zote",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Upatikanaji wa Kimataifa",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "SISI NI NANI",
  "companyTitle": "Imejengwa Juu ya Uaminifu wa Kimataifa, Iliyoundwa kwa Ukuaji wa Biashara",
  "companySubtitle": "Kutoa huduma muhimu za mawasiliano kwa waendeshaji simu, wakusanyaji, na biashara kote ulimwenguni.",
  "companyStory1": "Ilianzishwa kwa lengo la kurahisisha mawasiliano ya simu ya kimataifa, iNet Global imeunda miunganisho ya moja kwa moja na watoa huduma wakuu wa Tier-1 kote Amerika, Ulaya, Asia, na Mashariki ya Kati.",
  "companyStory2": "Leo, tunashughulikia mabilioni ya dakika na ujumbe kila mwezi kwa kampuni za kimataifa za fintech, huduma za afya, biashara za kielektroniki, na wauzaji wa mawasiliano.",
  "missionTitle": "Dhamira Yetu",
  "missionDesc": "Kutoa ubora wa sauti ulio wazi, ujumbe unaoaminika wa uthibitishaji, na nambari pepe zisizo na mshono ili biashara ziweze kuwasiliana popote.",
  "visionTitle": "Maono Yetu",
  "visionDesc": "Kuwa mshirika anayeaminika zaidi wa miundombinu ya mawasiliano duniani kote kwa kubuni mara kwa mara kupitia akili bandia (AI) na utendaji wa mtoa huduma.",
  "coreValuesTitle": "Misingi Inayoongoza Operesheni Zetu",
  "values": [
    {
      "title": "Ubora Usio na Maelewano",
      "desc": "Njia za sauti za CLI zilizothibitishwa na utoaji wa SMS OTP uliohakikishwa chini ya sekunde 2."
    },
    {
      "title": "Uaminifu wa Kiwango cha Mtoa Huduma",
      "desc": "Upatikanaji wa 99.99% unaoungwa mkono na ufuatiliaji thabiti wa NOC wa 24/7/365."
    },
    {
      "title": "Upanuzi wa Kimataifa",
      "desc": "Miundombinu thabiti iliyoundwa kushughulikia ongezeko la trafiki ya biashara yako bila matatizo."
    },
    {
      "title": "Ushirikiano wa Uwazi",
      "desc": "Utozaji wa wazi, dashibodi za uchanganuzi wa wakati halisi, na wasimamizi maalum wa akaunti za kiufundi."
    }
  ],
  "whatWeDoBadge": "TUNACHOFANYA",
  "whatWeDoTitle": "Kuunganisha Kila Pembe ya Dunia Kupitia Mawasiliano Yaliyounganishwa",
  "whatWeDoSubtitle": "Imejengwa kuanzia mwanzo ili kusaidia shughuli za biashara zenye uwezo mkubwa na zinazojali muda.",
  "pillars": [
    {
      "title": "Usitishaji wa Sauti & SIP Trunking",
      "desc": "Usitishaji wa sauti wa kimataifa wa kiwango cha mtoa huduma wenye CLI iliyohakikishwa na latency ya chini.",
      "points": [
        "Njia 100+ za moja kwa moja za waendeshaji",
        "Usitishaji wa kimataifa wa Tier-1 A-Z",
        "Njia bora ya gharama nafuu (LCR)",
        "Malango ya SIP yaliyohifadhiwa nakala"
      ]
    },
    {
      "title": "Ujumbe wa Uaminifu wa Juu & OTP",
      "desc": "Uwasilishaji wa SMS wa haraka na wa kuaminika kwa manenosiri ya mara moja na arifa za miamala ya benki.",
      "points": [
        "Uwasilishaji wa OTP chini ya sekunde 2",
        "Muunganisho wa SMPP na REST API",
        "Ripoti za uwasilishaji za wakati halisi (DLR)",
        "Njia za moja kwa moja za watoa huduma za rununu"
      ]
    },
    {
      "title": "Nambari Pepe za Kimataifa (DID)",
      "desc": "Nambari za ndani, bila malipo, na za rununu katika nchi 100+ kwa uwepo wa papo hapo ulimwenguni.",
      "points": [
        "Utoaji wa haraka wa nambari",
        "Usaidizi wa sauti na SMS za njia mbili",
        "Uelekezaji rahisi wa simu za SIP",
        "Vitambulisho vya ndani vya mpigaji simu"
      ]
    },
    {
      "title": "Kipiga Simu cha Kituo cha Mawasiliano cha Wingu",
      "desc": "Masuluhisho ya kupiga simu ya WebRTC na rununu kwa timu za mauzo na huduma kwa wateja.",
      "points": [
        "Njia za utabiri na maendeleo",
        "Kupiga simu moja kwa moja kwenye kivinjari kupitia WebRTC",
        "Ufuatiliaji wa moja kwa moja wa msimamizi",
        "Kurekodi simu kiotomatiki kwenye CRM"
      ]
    }
  ],
  "servicesBadge": "HUDUMA ZETU",
  "servicesTitle": "Suite Kamili ya Mawasiliano kwa Biashara za Kisasa",
  "servicesSubtitle": "Gundua bidhaa zetu zilizoundwa kukuza shughuli zako na kupunguza gharama.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Sauti ya Jumla",
      "desc": "Usitishaji wa sauti wa kimataifa unaoaminika wenye CLI iliyohakikishwa na ubora wa sauti wa hali ya juu.",
      "href": "/wholesale-voice",
      "badge": "Njia za Moja kwa Moja",
      "features": [
        "Ufikiaji wa Kimataifa wa A-Z",
        "Miunganisho ya Tier-1",
        "Uelekezaji wa Gharama Nafuu"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Masuluhisho ya Sauti ya AI",
      "desc": "Uzoefu wa sauti wa kiotomatiki na IVR ya biashara kwa vituo vya kisasa vya mawasiliano.",
      "href": "/voice",
      "badge": "Uendeshaji Kiotomatiki",
      "features": [
        "Mwingiliano wa Sauti Asilia",
        "Uelekezaji Mahiri wa IVR",
        "Maarifa ya Sauti ya Wakati Halisi"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Nambari Pepe (DID)",
      "desc": "Nambari za simu za ndani na bila malipo katika nchi 100+ kwa uwepo wa chapa ulimwenguni.",
      "href": "/virtual-did",
      "badge": "Nchi 100+",
      "features": [
        "Uwezeshaji wa Haraka wa Nambari",
        "Sauti & SMS za Njia Mbili",
        "Uelekezaji Rahisi"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS za Jumla",
      "desc": "Uwasilishaji wa SMS nyingi kwa watumiaji wa simu kote ulimwenguni.",
      "href": "/wholesale-message",
      "badge": "Uwezo Mkubwa",
      "features": [
        "Njia za Moja kwa Moja za Telco",
        "Itifaki za SMPP & HTTP",
        "Ufikiaji wa Kimataifa"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Tovuti ya SMS ya OTP",
      "desc": "Uwasilishaji wa haraka sana wa nambari za uthibitishaji iliyoundwa maalum kwa benki na fintech.",
      "href": "/otp-sms",
      "badge": "Uwasilishaji wa Papo Hapo",
      "features": [
        "Kiwango cha Uwasilishaji cha 99.8%",
        "Uelekezaji Dhidi ya Udanganyifu",
        "Uwasilishaji Uliosimbwa kwa Njia Fiche"
      ]
    },
    {
      "id": "dialer",
      "title": "Suluhisho Kamili la Kupiga Simu",
      "desc": "Kipiga simu cha WebRTC cha kivinjari na rununu chenye ufuatiliaji wa msimamizi na uelekezaji mahiri.",
      "href": "/dialer",
      "badge": "WebRTC & Rununu",
      "features": [
        "Upigaji Simu wa Utabiri",
        "Kusikiliza & Kuingilia Moja kwa Moja",
        "Bodi za Ukuta za Wakati Halisi"
      ]
    }
  ],
  "mapBadge": "MAKAO MAKUU & UFIKIAJI WA KIMATAIFA",
  "mapTitle": "Uwepo Wetu wa Kimkakati na Anwani Iliyosajiliwa",
  "mapSubtitle": "Pamoja na Vituo maalum vya Uendeshaji wa Mtandao na vituo vya uwepo ulimwenguni, tunasaidia biashara 24/7/365.",
  "officeTitle": "Makao Makuu ya Biashara",
  "officeAddressLabel": "Anwani Iliyosajiliwa",
  "officePhoneLabel": "Usaidizi wa Simu",
  "officeEmailLabel": "Maswali ya Barua Pepe",
  "officeSupportLabel": "Upatikanaji wa Usaidizi",
  "officeSupportHours": "Usaidizi wa NOC wa 24/7/365",
  "nocLabel": "Kituo cha Kimataifa cha Uendeshaji wa Mtandao (NOC)",
  "nocDesc": "Ufuatiliaji wa makini wa latency, uelekezaji upya kiotomatiki, na wahandisi walio tayari.",
  "mapPinTitle": "Shughuli za iNet Global",
  "mapPinDesc": "Kituo cha kimkakati cha Financial Park kilichounganishwa na mitandao ya usafirishaji ya kimataifa ya Tier-1.",
  "ctaTitle": "Uko Tayari Kubadilisha Miundombinu Yako ya Mawasiliano ya Kimataifa?",
  "ctaSubtitle": "Jiunge na mashirika yanayoongoza ambayo tayari yanaboresha utoaji wao wa sauti na SMS kwenye njia zetu za moja kwa moja za Tier-1.",
  "ctaPrimaryBtn": "Ongea na Mtaalamu wa Mawasiliano",
  "ctaSecondaryBtn": "Chunguza Huduma Zetu",
  "floatingTier1Badge": {
    "title": "Njia za Moja kwa Moja za Tier-1",
    "sub": "99.99% Enterprise SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Miunganisho ya Moja kwa Moja ya Kimataifa",
    "sub": "Usafirishaji wa jumla wa kimataifa usio na msuguano"
  },
  "mapLiveLocation": "Eneo la Moja kwa Moja",
  "postalAddressLabel": "Anwani ya Posta",
  "ctaGuaranteedSla": "SLA Iliyohakikishwa ya 99.99%",
  "ctaDedicatedNoc": "NOC Maalum ya 24/7/365"
};

const sv: AboutUsTranslation = {
  "heroBadge": "OM INET GLOBAL",
  "heroTitle": "Stärker Global Telekommunikation med Operatörsklassad Kvalitet",
  "heroSubtitle": "iNet Global är en ledande internationell telekomleverantör som levererar grossistterminering av röst, säker OTP-meddelandehantering, virtuella nummer (DID) och uppringningsinfrastruktur i över 100 länder.",
  "contactBtn": "Kontakta Vårt Team",
  "servicesBtn": "Utforska Tjänster",
  "heroStats": [
    {
      "label": "Anslutna Länder",
      "value": "100+",
      "sub": "Direkt operatörsterminering"
    },
    {
      "label": "Nätverkstillförlitlighet",
      "value": "99.99%",
      "sub": "99.99% företags-SLA"
    },
    {
      "label": "Månadsvolym",
      "value": "1B+",
      "sub": "Miljarder röstminuter & SMS"
    },
    {
      "label": "Global Teknisk NOC",
      "value": "24/7/365",
      "sub": "24/7 aktiv latensövervakning"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Global Nätverk",
    "status": "Aktivt & Övervakat",
    "regionLabel": "Globala Företagsrutter",
    "latency": "14ms",
    "card1Title": "Nätverks-SLA",
    "card1Val": "99.99%",
    "card1Badge": "Global SLA",
    "card2Title": "Aktiva Rutter",
    "card2Val": "100+",
    "card2Badge": "Tier-1 Operatörer",
    "routesTitle": "Status för Direktrutter",
    "route1": {
      "name": "USA & EU SIP Direktrutt",
      "quality": "100%",
      "status": "Optimerad"
    },
    "route2": {
      "name": "APAC Operatör SMS Gateway",
      "quality": "99.9%",
      "status": "Optimerad"
    },
    "route3": {
      "name": "Global OTP Högprioritet",
      "quality": "99.8%",
      "status": "Optimerad"
    },
    "bottomStat1": "Tur-och-retur-latens",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Global Tillgänglighet",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "VILKA VI ÄR",
  "companyTitle": "Byggt på Global Pålitlighet, Konstruerat för Affärstillväxt",
  "companySubtitle": "Tillhandahåller nödvändiga telekomtjänster för mobiloperatörer, aggregatorer och företag över hela världen.",
  "companyStory1": "Grundat med ambitionen att förenkla global telekom, har iNet Global byggt direkta sammankopplingar med ledande Tier-1-operatörer i Amerika, Europa, Asien och Mellanöstern.",
  "companyStory2": "Idag hanterar vi säkert miljarder minuter och meddelanden varje månad för globala fintech-bolag, hälsovård, ledande e-handelsföretag och telekomåterförsäljare.",
  "missionTitle": "Vårt Uppdrag",
  "missionDesc": "Att leverera kristallklar röstkvalitet, pålitliga verifieringsmeddelanden och sömlösa virtuella nummer så att företag kan kommunicera var som helst.",
  "visionTitle": "Vår Vision",
  "visionDesc": "Att vara världens mest betrodda partner för global kommunikationsinfrastruktur genom kontinuerlig innovation med AI-intelligens och operatörsprestanda.",
  "coreValuesTitle": "Principer Som Styr Vår Verksamhet",
  "values": [
    {
      "title": "Kompromisslös Kvalitet",
      "desc": "Verifierade CLI-röstrutter och garanterad SMS OTP-leverans inom 2 sekunder."
    },
    {
      "title": "Operatörsklassad Tillförlitlighet",
      "desc": "99.99% drifttid som stöds av proaktiv 24/7/365 NOC-övervakning."
    },
    {
      "title": "Global Skalbarhet",
      "desc": "Robust infrastruktur byggd för att hantera dina affärstrafiktoppar utan problem."
    },
    {
      "title": "Transparent Partnerskap",
      "desc": "Rak fakturering, realtidsanalyspaneler och dedikerade tekniska kontoansvariga."
    }
  ],
  "whatWeDoBadge": "VAD VI GÖR",
  "whatWeDoTitle": "Förbinder Världens Alla Hörn med Enad Telekommunikation",
  "whatWeDoSubtitle": "Byggd från grunden för att stödja affärsverksamhet med hög kapacitet och höga krav på låg latens.",
  "pillars": [
    {
      "title": "Röstterminering & SIP-trunking",
      "desc": "Operatörsklassad internationell röstterminering med garanterat CLI och lägsta latens.",
      "points": [
        "100+ direkta operatörsrutter",
        "Tier-1 A-Z internationell terminering",
        "Intelligent Least-Cost Routing",
        "Redundanta SIP-gateways"
      ]
    },
    {
      "title": "Högtillförlitliga Meddelanden & OTP",
      "desc": "Snabb och pålitlig SMS-leverans för engångslösenord och banktransaktionsaviseringar.",
      "points": [
        "OTP-leverans under 2 sekunder",
        "SMPP och REST API-anslutning",
        "Realtidsrapportering (DLR)",
        "Direkta mobiloperatörsrutter"
      ]
    },
    {
      "title": "Globala Virtuella Nummer (DID)",
      "desc": "Lokala, avgiftsfria och mobilnummer i 100+ länder för omedelbar global närvaro.",
      "points": [
        "Omedelbar nummertilldelning",
        "Stöd för tvåvägs röst och SMS",
        "Flexibel vidarekoppling av SIP-samtal",
        "Lokala uppringningsidentiteter"
      ]
    },
    {
      "title": "Molnbaserad Kontaktcenter-uppringare",
      "desc": "Förutsägande WebRTC- och mobiluppringningslösningar för sälj- och kundserviceteam.",
      "points": [
        "Prediktiva & progressiva lägen",
        "WebRTC-samtal direkt i webbläsaren",
        "Realtidsövervakning för arbetsledare",
        "Automatisk CRM-samtalsloggning"
      ]
    }
  ],
  "servicesBadge": "VÅRA TJÄNSTER",
  "servicesTitle": "Komplett Telekomsvit för Det Moderna Företaget",
  "servicesSubtitle": "Utforska våra modulära produkter designade för att skala din verksamhet och sänka kostnaderna.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Grossist Röst",
      "desc": "Pålitlig internationell röstterminering med garanterad CLI och premiumljudkvalitet.",
      "href": "/wholesale-voice",
      "badge": "Direkta Rutter",
      "features": [
        "A-Z Global Täckning",
        "Tier-1 Sammankopplingar",
        "Kostnadseffektiv Ruttning"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI Röstlösningar",
      "desc": "Intelligenta automatiserade röstupplevelser och företags-IVR för moderna kontaktcenter.",
      "href": "/voice",
      "badge": "Automatisering",
      "features": [
        "Naturliga Röstinteraktioner",
        "Smart IVR-Ruttning",
        "Röstinsikter i Realtid"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Virtuella Nummer (DID)",
      "desc": "Lokala och avgiftsfria telefonnummer i 100+ länder för global varumärkesnärvaro.",
      "href": "/virtual-did",
      "badge": "100+ Länder",
      "features": [
        "Snabb Nummeraktivering",
        "Tvåvägs Röst & SMS",
        "Flexibel Omdirigering"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Grossist SMS",
      "desc": "Storskalig mass-SMS-sändning till mobilabonnenter över hela världen.",
      "href": "/wholesale-message",
      "badge": "Hög Genomströmning",
      "features": [
        "Direkta Telco-Rutter",
        "SMPP & HTTP-Protokoll",
        "Global Räckvidd"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS Portal",
      "desc": "Ultrasnabb leverans av verifieringskoder skräddarsydd för bank och fintech.",
      "href": "/otp-sms",
      "badge": "Omedelbar Leverans",
      "features": [
        "99.8% Leveransgrad",
        "Bedrägeriskyddad Ruttning",
        "Krypterad Överföring"
      ]
    },
    {
      "id": "dialer",
      "title": "Kompletta Uppringningslösningar",
      "desc": "Webbläsar- och mobil WebRTC-uppringare med övervakning och intelligent dirigering.",
      "href": "/dialer",
      "badge": "WebRTC & Mobil",
      "features": [
        "Prediktiv Uppringning",
        "Realtidslyssning & Intervention",
        "Realtidsväggtavlor"
      ]
    }
  ],
  "mapBadge": "HUVUDKONTOR & GLOBAL RÄCKVIDD",
  "mapTitle": "Vår Strategiska Närvaro och Registrerade Adress",
  "mapSubtitle": "Med dedikerade nätverksoperationscenter och globala närvaropunkter stödjer vi företag dygnet runt, året om.",
  "officeTitle": "Företagets Huvudkontor",
  "officeAddressLabel": "Registrerad Adress",
  "officePhoneLabel": "Telefonsupport",
  "officeEmailLabel": "E-postförfrågningar",
  "officeSupportLabel": "Supporttillgänglighet",
  "officeSupportHours": "24/7/365 NOC-support",
  "nocLabel": "Globalt Nätverksdriftcenter (NOC)",
  "nocDesc": "Proaktiv latensövervakning, automatisk omdirigering och jourhavande ingenjörer.",
  "mapPinTitle": "iNet Global Verksamhet",
  "mapPinDesc": "Strategisk Financial Park-hubb ansluten till internationella Tier-1-transitnätverk.",
  "ctaTitle": "Är Du Redo att Förvandla Din Globala Telekominfrastruktur?",
  "ctaSubtitle": "Gå med i de ledande organisationer som redan optimerar sin röst- och SMS-leverans på våra direkta Tier-1-rutter.",
  "ctaPrimaryBtn": "Prata med en Telekomexpert",
  "ctaSecondaryBtn": "Utforska Våra Tjänster",
  "floatingTier1Badge": {
    "title": "Tier-1 Direktrutter",
    "sub": "99.99% Enterprise SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Direkta Globala Sammankopplingar",
    "sub": "Friktionsfri internationell grossisttransit"
  },
  "mapLiveLocation": "Live Plats",
  "postalAddressLabel": "Postadress",
  "ctaGuaranteedSla": "99.99% Garanterad SLA",
  "ctaDedicatedNoc": "24/7/365 Dedikerad NOC"
};

const el: AboutUsTranslation = {
  "heroBadge": "ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ INET GLOBAL",
  "heroTitle": "Ενδυνάμωση των Παγκόσμιων Τηλεπικοινωνιών με Ποιότητα Επιπέδου Παρόχου",
  "heroSubtitle": "Η iNet Global είναι ένας κορυφαίος διεθνής πάροχος τηλεπικοινωνιών που παρέχει χονδρική τερματισμό φωνής, ασφαλή ανταλλαγή μηνυμάτων OTP, εικονικούς αριθμούς (DID) και υποδομή dialer σε περισσότερες από 100 χώρες.",
  "contactBtn": "Επικοινωνήστε με την Ομάδα μας",
  "servicesBtn": "Εξερευνήστε τις Υπηρεσίες",
  "heroStats": [
    {
      "label": "Συνδεδεμένες Χώρες",
      "value": "100+",
      "sub": "Άμεσος τερματισμός παρόχου"
    },
    {
      "label": "Αξιοπιστία Δικτύου",
      "value": "99.99%",
      "sub": "99.99% εταιρικό SLA"
    },
    {
      "label": "Μηνιαίος Όγκος",
      "value": "1B+",
      "sub": "Δισεκατομμύρια λεπτά φωνής & SMS"
    },
    {
      "label": "Παγκόσμιο Τεχνικό NOC",
      "value": "24/7/365",
      "sub": "24/7 ενεργή παρακολούθηση καθυστέρησης"
    }
  ],
  "phoneMockup": {
    "appTitle": "Δίκτυο iNet Global",
    "status": "Ενεργό & Υπό Παρακολούθηση",
    "regionLabel": "Παγκόσμιες Εταιρικές Διαδρομές",
    "latency": "14ms",
    "card1Title": "SLA Δικτύου",
    "card1Val": "99.99%",
    "card1Badge": "Παγκόσμιο SLA",
    "card2Title": "Ενεργές Διαδρομές",
    "card2Val": "100+",
    "card2Badge": "Πάροχοι Tier-1",
    "routesTitle": "Κατάσταση Άμεσων Διαδρομών",
    "route1": {
      "name": "Άμεση Διαδρομή SIP ΗΠΑ & ΕΕ",
      "quality": "100%",
      "status": "Βελτιστοποιημένο"
    },
    "route2": {
      "name": "SMS Gateway Παρόχων APAC",
      "quality": "99.9%",
      "status": "Βελτιστοποιημένο"
    },
    "route3": {
      "name": "Παγκόσμια Υψηλή Προτεραιότητα OTP",
      "quality": "99.8%",
      "status": "Βελτιστοποιημένο"
    },
    "bottomStat1": "Καθυστέρηση μετ' επιστροφής",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Παγκόσμια Διαθεσιμότητα",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "ΠΟΙΟΙ ΕΙΜΑΣΤΕ",
  "companyTitle": "Χτισμένο στην Παγκόσμια Αξιοπιστία, Σχεδιασμένο για Επιχειρηματική Ανάπτυξη",
  "companySubtitle": "Παροχή βασικών τηλεπικοινωνιακών υπηρεσιών για παρόχους κινητής τηλεφωνίας, aggregators και επιχειρήσεις σε όλο τον κόσμο.",
  "companyStory1": "Ιδρυμένη με τη φιλοδοξία να απλοποιήσει τις παγκόσμιες τηλεπικοινωνίες, η iNet Global έχει δημιουργήσει άμεσες διασυνδέσεις με κορυφαίους παρόχους Tier-1 στην Αμερική, την Ευρώπη, την Ασία και τη Μέση Ανατολή.",
  "companyStory2": "Σήμερα, επεξεργαζόμαστε με ασφάλεια δισεκατομμύρια λεπτά και μηνύματα κάθε μήνα για παγκόσμιες εταιρείες fintech, υγειονομικής περίθαλψης, κορυφαίες πλατφόρμες ηλεκτρονικού εμπορίου και μεταπωλητές τηλεπικοινωνιών.",
  "missionTitle": "Η Αποστολή μας",
  "missionDesc": "Να προσφέρουμε κρυστάλλινη ποιότητα φωνής, αξιόπιστα μηνύματα επαλήθευσης και απρόσκοπτους εικονικούς αριθμούς, ώστε οι επιχειρήσεις να επικοινωνούν οπουδήποτε.",
  "visionTitle": "Το Όραμά μας",
  "visionDesc": "Να γίνουμε ο πιο αξιόπιστος συνεργάτης παγκόσμιας υποδομής επικοινωνιών στον κόσμο, καινοτομώντας συνεχώς μέσω νοημοσύνης AI και απόδοσης επιπέδου παρόχου.",
  "coreValuesTitle": "Αρχές που Καθοδηγούν τις Λειτουργίες μας",
  "values": [
    {
      "title": "Ασυμβίβαστη Ποιότητα",
      "desc": "Επαληθευμένες διαδρομές φωνής CLI και εγγυημένη παράδοση SMS OTP σε λιγότερο από 2 δευτερόλεπτα."
    },
    {
      "title": "Αξιοπιστία Επιπέδου Παρόχου",
      "desc": "99.99% χρόνος συνεχούς λειτουργίας υποστηριζόμενος από προληπτική παρακολούθηση NOC 24/7/365."
    },
    {
      "title": "Παγκόσμια Επεκτασιμότητα",
      "desc": "Ισχυρή υποδομή σχεδιασμένη να χειρίζεται απρόσκοπτα τις αυξήσεις της επισκεψιμότητας της επιχείρησής σας."
    },
    {
      "title": "Διαφανής Συνεργασία",
      "desc": "Άμεση τιμολόγηση, πίνακες ανάλυσης σε πραγματικό χρόνο και αποκλειστικοί τεχνικοί διαχειριστές λογαριασμών."
    }
  ],
  "whatWeDoBadge": "ΤΙ ΚΑΝΟΥΜΕ",
  "whatWeDoTitle": "Συνδέοντας Κάθε Γωνιά του Κόσμου με Ενοποιημένες Τηλεπικοινωνίες",
  "whatWeDoSubtitle": "Χτισμένο από την αρχή για την υποστήριξη επιχειρηματικών λειτουργιών υψηλής χωρητικότητας και ευαισθησίας στην καθυστέρηση.",
  "pillars": [
    {
      "title": "Τερματισμός Φωνής & SIP Trunking",
      "desc": "Διεθνής τερματισμός φωνής επιπέδου παρόχου με εγγυημένο CLI και ελάχιστη καθυστέρηση.",
      "points": [
        "100+ άμεσες διαδρομές παρόχων",
        "Διεθνής τερματισμός Tier-1 A-Z",
        "Έξυπνη δρομολόγηση ελάχιστου κόστους",
        "Εφεδρικές πύλες SIP"
      ]
    },
    {
      "title": "Μηνύματα Υψηλής Αξιοπιστίας & OTP",
      "desc": "Γρήγορη και αξιόπιστη παράδοση SMS για κωδικούς μίας χρήσης και ειδοποιήσεις τραπεζικών συναλλαγών.",
      "points": [
        "Παράδοση OTP κάτω από 2 δευτερόλεπτα",
        "Συνδεσιμότητα SMPP και REST API",
        "Αναφορές παράδοσης σε πραγματικό χρόνο (DLR)",
        "Άμεσες διαδρομές παρόχων κινητής"
      ]
    },
    {
      "title": "Παγκόσμιοι Εικονικοί Αριθμοί (DID)",
      "desc": "Τοπικοί, δωρεάν και κινητοί αριθμοί σε 100+ χώρες για άμεση παγκόσμια παρουσία.",
      "points": [
        "Άμεση παροχή αριθμών",
        "Υποστήριξη αμφίδρομης φωνής και SMS",
        "Ευέλικτη προώθηση κλήσεων SIP",
        "Τοπικές ταυτότητες καλούντος"
      ]
    },
    {
      "title": "Dialer Cloud Contact Center",
      "desc": "Λύσεις προγνωστικού dialer WebRTC και κινητών για ομάδες πωλήσεων και εξυπηρέτησης πελατών.",
      "points": [
        "Προγνωστικές & προοδευτικές λειτουργίες",
        "Κλήσεις WebRTC απευθείας στο πρόγραμμα περιήγησης",
        "Ζωντανή παρακολούθηση επόπτη",
        "Αυτόματη καταγραφή κλήσεων CRM"
      ]
    }
  ],
  "servicesBadge": "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ",
  "servicesTitle": "Πλήρης Σουίτα Τηλεπικοινωνιών για τη Σύγχρονη Επιχείρηση",
  "servicesSubtitle": "Εξερευνήστε τα αρθρωτά προϊόντα μας που έχουν σχεδιαστεί για να κλιμακώσουν τις λειτουργίες σας και να μειώσουν το κόστος.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Χονδρική Φωνή",
      "desc": "Αξιόπιστος διεθνής τερματισμός φωνής με εγγυημένο CLI και κορυφαία ποιότητα ήχου.",
      "href": "/wholesale-voice",
      "badge": "Άμεσες Διαδρομές",
      "features": [
        "Παγκόσμια Κάλυψη A-Z",
        "Διασυνδέσεις Tier-1",
        "Οικονομική Δρομολόγηση"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Λύσεις Φωνής AI",
      "desc": "Έξυπνες αυτοματοποιημένες εμπειρίες φωνής και επιχειρησιακό IVR για σύγχρονα κέντρα επικοινωνίας.",
      "href": "/voice",
      "badge": "Αυτοματοποίηση",
      "features": [
        "Φυσικές Φωνητικές Αλληλεπιδράσεις",
        "Έξυπνη Δρομολόγηση IVR",
        "Στατιστικά Φωνής σε Πραγματικό Χρόνο"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Εικονικοί Αριθμοί (DID)",
      "desc": "Τοπικοί και δωρεάν τηλεφωνικοί αριθμοί σε 100+ χώρες για παγκόσμια παρουσία επωνυμίας.",
      "href": "/virtual-did",
      "badge": "100+ Χώρες",
      "features": [
        "Γρήγορη Ενεργοποίηση Αριθμών",
        "Αμφίδρομη Φωνή & SMS",
        "Ευέλικτη Εκτροπή"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Χονδρικό SMS",
      "desc": "Μαζική μετάδοση SMS μεγάλου όγκου σε συνδρομητές κινητής τηλεφωνίας παγκοσμίως.",
      "href": "/wholesale-message",
      "badge": "Υψηλή Απόδοση",
      "features": [
        "Άμεσες Διαδρομές Τηλεπικοινωνιών",
        "Πρωτόκολλα SMPP & HTTP",
        "Παγκόσμια Εμβέλεια"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Πύλη SMS OTP",
      "desc": "Εξαιρετικά γρήγορη παράδοση κωδικών επαλήθευσης ειδικά σχεδιασμένη για τράπεζες και fintech.",
      "href": "/otp-sms",
      "badge": "Άμεση Παράδοση",
      "features": [
        "Ποσοστό Παράδοσης 99.8%",
        "Δρομολόγηση κατά της Απάτης",
        "Κρυπτογραφημένη Μετάδοση"
      ]
    },
    {
      "id": "dialer",
      "title": "Ολοκληρωμένες Λύσεις Dialer",
      "desc": "Πρόγραμμα περιήγησης και κινητός dialer WebRTC με παρακολούθηση επόπτη και έξυπνη δρομολόγηση.",
      "href": "/dialer",
      "badge": "WebRTC & Κινητά",
      "features": [
        "Προγνωστική Κλήση",
        "Ζωντανή Ακρόαση & Παρέμβαση",
        "Πίνακες σε Πραγματικό Χρόνο"
      ]
    }
  ],
  "mapBadge": "ΕΔΡΑ & ΠΑΓΚΟΣΜΙΑ ΕΜΒΕΛΕΙΑ",
  "mapTitle": "Η Στρατηγική μας Παρουσία και η Εγγεγραμμένη Διεύθυνση",
  "mapSubtitle": "Με αποκλειστικά Κέντρα Επιχειρήσεων Δικτύου και σημεία παρουσίας παγκοσμίως, υποστηρίζουμε τις επιχειρήσεις 24/7/365.",
  "officeTitle": "Εταιρική Έδρα",
  "officeAddressLabel": "Εγγεγραμμένη Διεύθυνση",
  "officePhoneLabel": "Τηλεφωνική Υποστήριξη",
  "officeEmailLabel": "Ερωτήσεις μέσω Email",
  "officeSupportLabel": "Διαθεσιμότητα Υποστήριξης",
  "officeSupportHours": "Υποστήριξη NOC 24/7/365",
  "nocLabel": "Παγκόσμιο Κέντρο Επιχειρήσεων Δικτύου (NOC)",
  "nocDesc": "Προληπτική παρακολούθηση καθυστέρησης, αυτόματη αναδρομολόγηση και μηχανικοί σε επιφυλακή.",
  "mapPinTitle": "Λειτουργίες iNet Global",
  "mapPinDesc": "Στρατηγικός κόμβος Financial Park συνδεδεμένος με διεθνή δίκτυα διαμετακόμισης παρόχων Tier-1.",
  "ctaTitle": "Είστε Έτοιμοι να Μεταμορφώσετε την Παγκόσμια Τηλεπικοινωνιακή σας Υποδομή;",
  "ctaSubtitle": "Γίνετε μέλος των κορυφαίων οργανισμών που ήδη βελτιστοποιούν την παράδοση φωνής και SMS στις άμεσες διαδρομές Tier-1 μας.",
  "ctaPrimaryBtn": "Μιλήστε με έναν Ειδικό Τηλεπικοινωνιών",
  "ctaSecondaryBtn": "Εξερευνήστε τις Υπηρεσίες μας",
  "floatingTier1Badge": {
    "title": "Άμεσες Διαδρομές Tier-1",
    "sub": "99.99% Εταιρικό SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Άμεσες Παγκόσμιες Διασυνδέσεις",
    "sub": "Διεθνής χονδρική διαμετακόμιση χωρίς τριβές"
  },
  "mapLiveLocation": "Ζωντανή Τοποθεσία",
  "postalAddressLabel": "Ταχυδρομική Διεύθυνση",
  "ctaGuaranteedSla": "99.99% Εγγυημένο SLA",
  "ctaDedicatedNoc": "24/7/365 Αποκλειστικό NOC"
};

const cs: AboutUsTranslation = {
  "heroBadge": "O SPOLEČNOSTI INET GLOBAL",
  "heroTitle": "Posílení Globálních Telekomunikací s Kvalitou Operátorské Úrovně",
  "heroSubtitle": "iNet Global je přední mezinárodní telekomunikační poskytovatel nabízející velkoobchodní terminaci hlasu, bezpečné zasílání zpráv OTP, virtuální čísla (DID) a infrastrukturu dialerů ve více než 100 zemích.",
  "contactBtn": "Kontaktujte Náš Tým",
  "servicesBtn": "Prozkoumat Služby",
  "heroStats": [
    {
      "label": "Připojené Země",
      "value": "100+",
      "sub": "Přímá terminace operátorů"
    },
    {
      "label": "Spolehlivost Sítě",
      "value": "99.99%",
      "sub": "99.99% podnikové SLA"
    },
    {
      "label": "Měsíční Objem",
      "value": "1B+",
      "sub": "Miliardy minut hovorů & SMS"
    },
    {
      "label": "Globální Technické NOC",
      "value": "24/7/365",
      "sub": "24/7 aktivní monitorování latence"
    }
  ],
  "phoneMockup": {
    "appTitle": "Síť iNet Global",
    "status": "Aktivní & Monitorováno",
    "regionLabel": "Globální Podnikové Trasy",
    "latency": "14ms",
    "card1Title": "SLA Sítě",
    "card1Val": "99.99%",
    "card1Badge": "Globální SLA",
    "card2Title": "Aktivní Trasy",
    "card2Val": "100+",
    "card2Badge": "Operátoři Tier-1",
    "routesTitle": "Stav Přímých Tras",
    "route1": {
      "name": "Přímá Trasa SIP USA & EU",
      "quality": "100%",
      "status": "Optimalizováno"
    },
    "route2": {
      "name": "SMS Brána Operátorů APAC",
      "quality": "99.9%",
      "status": "Optimalizováno"
    },
    "route3": {
      "name": "Globální OTP Vysoká Priorita",
      "quality": "99.8%",
      "status": "Optimalizováno"
    },
    "bottomStat1": "Latence odezvy",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Globální Dostupnost",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "KDO JSME",
  "companyTitle": "Postaveno na Globální Spolehlivosti, Navrženo pro Růst Podnikání",
  "companySubtitle": "Poskytování klíčových telekomunikačních služeb pro mobilní operátory, agregátory a podniky po celém světě.",
  "companyStory1": "Společnost iNet Global byla založena s ambicí zjednodušit globální telekomunikace a vybudovala přímá propojení s předními operátory Tier-1 v Americe, Evropě, Asii a na Blízkém východě.",
  "companyStory2": "Dnes bezpečně zpracováváme miliardy minut a zpráv každý měsíc pro globální fintech, zdravotnictví, přední e-commerce a telekomunikační prodejce.",
  "missionTitle": "Naše Mise",
  "missionDesc": "Poskytovat křišťálově čistou kvalitu hlasu, spolehlivé ověřovací zprávy a bezproblémová virtuální čísla, aby podniky mohly komunikovat kdekoli.",
  "visionTitle": "Naše Vize",
  "visionDesc": "Stát se nejdůvěryhodnějším partnerem pro globální komunikační infrastrukturu na světě neustálou inovací prostřednictvím AI a operátorského výkonu.",
  "coreValuesTitle": "Principy, Které Řídí Naše Operace",
  "values": [
    {
      "title": "Nekompromisní Kvalita",
      "desc": "Ověřené hlasové trasy CLI a garantované doručení SMS OTP do 2 sekund."
    },
    {
      "title": "Operátorská Spolehlivost",
      "desc": "99.99% dostupnost podpořená proaktivním monitorováním NOC 24/7/365."
    },
    {
      "title": "Globální Škálovatelnost",
      "desc": "Robustní infrastruktura navržená tak, aby hladce zvládla špičky v provozu vaší firmy."
    },
    {
      "title": "Transparentní Partnerství",
      "desc": "Přímá fakturace, analytické panely v reálném čase a specializovaní techničtí manažeři."
    }
  ],
  "whatWeDoBadge": "CO DĚLÁME",
  "whatWeDoTitle": "Propojení Všech Koutů Světa Pomocí Jednotných Telekomunikací",
  "whatWeDoSubtitle": "Postaveno od základu pro podporu vysokokapacitních obchodních operací citlivých na latenci.",
  "pillars": [
    {
      "title": "Hlasová Terminace & SIP Trunking",
      "desc": "Mezinárodní hlasová terminace operátorské úrovně s garantovaným CLI a minimální latencí.",
      "points": [
        "100+ přímých tras operátorů",
        "Tier-1 A-Z mezinárodní terminace",
        "Inteligentní Least-Cost Routing",
        "Redundantní brány SIP"
      ]
    },
    {
      "title": "Vysoce Spolehlivé Zprávy & OTP",
      "desc": "Rychlé a spolehlivé doručování SMS pro jednorázová hesla a upozornění na bankovní transakce.",
      "points": [
        "Doručení OTP do 2 sekund",
        "Konektivita SMPP a REST API",
        "Zprávy o doručení v reálném čase (DLR)",
        "Přímé trasy mobilních operátorů"
      ]
    },
    {
      "title": "Globální Virtuální Čísla (DID)",
      "desc": "Místní, bezplatná a mobilní čísla ve více než 100 zemích pro okamžitou globální přítomnost.",
      "points": [
        "Okamžité zřízení čísel",
        "Podpora obousměrného hlasu a SMS",
        "Flexibilní přesměrování hovorů SIP",
        "Lokální identity volajícího"
      ]
    },
    {
      "title": "Cloudový Kontaktní Centrum Dialer",
      "desc": "Prediktivní WebRTC a mobilní dialer řešení pro prodejní a zákaznické týmy.",
      "points": [
        "Prediktivní a progresivní režimy",
        "Volání WebRTC přímo v prohlížeči",
        "Živý dohled supervizora",
        "Automatické protokolování hovorů v CRM"
      ]
    }
  ],
  "servicesBadge": "NAŠE SLUŽBY",
  "servicesTitle": "Kompletní Telekomunikační Sada pro Moderní Podniky",
  "servicesSubtitle": "Prozkoumejte naše modulární produkty navržené pro škálování vašich operací a snížení nákladů.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Velkoobchodní Hlas",
      "desc": "Důvěryhodná mezinárodní hlasová terminace s garantovaným CLI a prémiovou kvalitou zvuku.",
      "href": "/wholesale-voice",
      "badge": "Přímé Trasy",
      "features": [
        "A-Z Globální Pokrytí",
        "Propojení Tier-1",
        "Nákladově Efektivní Směrování"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI Hlasová Řešení",
      "desc": "Inteligentní automatizované hlasové zážitky a podnikové IVR pro moderní kontaktní centra.",
      "href": "/voice",
      "badge": "Automatizace",
      "features": [
        "Přirozené Hlasové Interakce",
        "Chytré Směrování IVR",
        "Hlasové Přehledy v Reálném Čase"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Virtuální Čísla (DID)",
      "desc": "Místní a bezplatná telefonní čísla ve 100+ zemích pro globální přítomnost značky.",
      "href": "/virtual-did",
      "badge": "100+ Zemí",
      "features": [
        "Rychlá Aktivace Čísel",
        "Obousměrný Hlas & SMS",
        "Flexibilní Přesměrování"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Velkoobchodní SMS",
      "desc": "Velkoobjemové hromadné odesílání SMS mobilním účastníkům po celém světě.",
      "href": "/wholesale-message",
      "badge": "Vysoká Propustnost",
      "features": [
        "Přímé Telekomunikační Trasy",
        "Protokoly SMPP & HTTP",
        "Globální Dosah"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portál SMS OTP",
      "desc": "Bleskurychlé doručování ověřovacích kódů navržené pro bankovnictví a fintech.",
      "href": "/otp-sms",
      "badge": "Okamžité Doručení",
      "features": [
        "99.8% Míra Doručení",
        "Směrování proti Podvodům",
        "Šifrovaný Přenos"
      ]
    },
    {
      "id": "dialer",
      "title": "Kompletní Řešení Dialerů",
      "desc": "Prohlížečový a mobilní dialer WebRTC s dohledem supervizora a inteligentním směrováním.",
      "href": "/dialer",
      "badge": "WebRTC & Mobil",
      "features": [
        "Prediktivní Vytáčení",
        "Živý Poslech & Zásah",
        "Nástěnky v Reálném Čase"
      ]
    }
  ],
  "mapBadge": "SÍDLO & GLOBÁLNÍ DOSAH",
  "mapTitle": "Naše Strategická Přítomnost a Registrovaná Adresa",
  "mapSubtitle": "S dedikovanými síťovými operačními centry a globálními body přítomnosti podporujeme podniky 24/7/365.",
  "officeTitle": "Centrála Společnosti",
  "officeAddressLabel": "Registrovaná Adresa",
  "officePhoneLabel": "Telefonní Podpora",
  "officeEmailLabel": "E-mailové Dotazy",
  "officeSupportLabel": "Dostupnost Podpory",
  "officeSupportHours": "Podpora NOC 24/7/365",
  "nocLabel": "Globální Síťové Operační Centrum (NOC)",
  "nocDesc": "Proaktivní sledování latence, automatické přesměrování a inženýři v pohotovosti.",
  "mapPinTitle": "Operace iNet Global",
  "mapPinDesc": "Strategické centrum Financial Park připojené k mezinárodním tranzitním sítím Tier-1.",
  "ctaTitle": "Jste Připraveni Transformovat Svou Globální Telekomunikační Infrastrukturu?",
  "ctaSubtitle": "Připojte se k předním organizacím, které již optimalizují své doručování hlasu a SMS na našich přímých trasách Tier-1.",
  "ctaPrimaryBtn": "Promluvte si s Telekomunikačním Expertem",
  "ctaSecondaryBtn": "Prozkoumat Naše Služby",
  "floatingTier1Badge": {
    "title": "Přímé Trasy Tier-1",
    "sub": "99.99% Podnikové SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Přímá Globální Propojení",
    "sub": "Bezproblémový mezinárodní velkoobchodní tranzit"
  },
  "mapLiveLocation": "Živé Umístění",
  "postalAddressLabel": "Poštovní Adresa",
  "ctaGuaranteedSla": "99.99% Garantované SLA",
  "ctaDedicatedNoc": "24/7/365 Dedikované NOC"
};

const ro: AboutUsTranslation = {
  "heroBadge": "DESPRE INET GLOBAL",
  "heroTitle": "Împuternicirea Telecomunicațiilor Globale cu Calitate de Nivel Operator",
  "heroSubtitle": "iNet Global este un furnizor internațional de top de telecomunicații care oferă terminare vocală wholesale, mesagerie securizată OTP, numere virtuale (DID) și infrastructură dialer în peste 100 de țări.",
  "contactBtn": "Contactați Echipa Noastră",
  "servicesBtn": "Explorați Serviciile",
  "heroStats": [
    {
      "label": "Țări Conectate",
      "value": "100+",
      "sub": "Terminare directă prin operator"
    },
    {
      "label": "Fiabilitatea Rețelei",
      "value": "99.99%",
      "sub": "SLA de nivel enterprise de 99.99%"
    },
    {
      "label": "Volum Lunar",
      "value": "1B+",
      "sub": "Miliarde de minute vocale & SMS-uri"
    },
    {
      "label": "NOC Tehnic Global",
      "value": "24/7/365",
      "sub": "Monitorizare activă a latenței 24/7"
    }
  ],
  "phoneMockup": {
    "appTitle": "Rețeaua iNet Global",
    "status": "Activ & Monitorizat",
    "regionLabel": "Rute Enterprise Globale",
    "latency": "14ms",
    "card1Title": "SLA Rețea",
    "card1Val": "99.99%",
    "card1Badge": "SLA Global",
    "card2Title": "Rute Active",
    "card2Val": "100+",
    "card2Badge": "Operatori Tier-1",
    "routesTitle": "Stare Rute Directe",
    "route1": {
      "name": "Ruta Directă SIP SUA & UE",
      "quality": "100%",
      "status": "Optimizat"
    },
    "route2": {
      "name": "Gateway SMS Operatori APAC",
      "quality": "99.9%",
      "status": "Optimizat"
    },
    "route3": {
      "name": "Prioritate Înaltă OTP Global",
      "quality": "99.8%",
      "status": "Optimizat"
    },
    "bottomStat1": "Latență Dus-Întors",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Disponibilitate Globală",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "CINE SUNTEM",
  "companyTitle": "Construit pe Fiabilitate Globală, Proiectat pentru Dezvoltarea Afacerilor",
  "companySubtitle": "Furnizarea de servicii esențiale de telecomunicații pentru operatori mobili, agregatori și întreprinderi din întreaga lume.",
  "companyStory1": "Fondată cu ambiția de a simplifica telecomunicațiile globale, iNet Global a construit interconectări directe cu operatori de top Tier-1 din Americi, Europa, Asia și Orientul Mijlociu.",
  "companyStory2": "Astăzi, procesăm în siguranță miliarde de minute și mesaje în fiecare lună pentru fintech-uri globale, sănătate, giganți din e-commerce și revânzători telecom.",
  "missionTitle": "Misiunea Noastră",
  "missionDesc": "Să oferim o calitate impecabilă a vocii, mesaje de verificare de încredere și numere virtuale fluide, astfel încât companiile să poată comunica oriunde.",
  "visionTitle": "Viziunea Noastră",
  "visionDesc": "Să fim cel mai de încredere partener global de infrastructură de comunicații din lume, inovând continuu prin inteligență AI și performanță de nivel operator.",
  "coreValuesTitle": "Principii Care Ne Ghidează Operațiunile",
  "values": [
    {
      "title": "Calitate Fără Compromis",
      "desc": "Rute vocale CLI verificate și livrare garantată a SMS-urilor OTP în mai puțin de 2 secunde."
    },
    {
      "title": "Fiabilitate de Nivel Operator",
      "desc": "Timp de funcționare de 99.99% susținut de monitorizarea proactivă NOC 24/7/365."
    },
    {
      "title": "Scalabilitate Globală",
      "desc": "Infrastructură robustă concepută pentru a gestiona fără probleme vârfurile de trafic ale afacerii dumneavoastră."
    },
    {
      "title": "Parteneriat Transparent",
      "desc": "Facturare directă, tablouri de bord analitice în timp real și manageri tehnici de cont dedicați."
    }
  ],
  "whatWeDoBadge": "CE FACEM",
  "whatWeDoTitle": "Conectarea Fiecărui Colț al Lumii prin Telecomunicații Unificate",
  "whatWeDoSubtitle": "Construit de la zero pentru a susține operațiunile de afaceri de mare capacitate și sensibile la latență.",
  "pillars": [
    {
      "title": "Terminare Vocală & SIP Trunking",
      "desc": "Terminare vocală internațională de nivel operator cu CLI garantat și latență minimă.",
      "points": [
        "100+ rute directe de operator",
        "Terminare internațională Tier-1 A-Z",
        "Rutare inteligentă cu cost minim (LCR)",
        "Gateway-uri SIP redundante"
      ]
    },
    {
      "title": "Mesagerie de Înaltă Fiabilitate & OTP",
      "desc": "Livrare rapidă și de încredere a SMS-urilor pentru parole unice și alerte pentru tranzacții bancare.",
      "points": [
        "Livrare OTP sub 2 secunde",
        "Conectivitate SMPP și REST API",
        "Rapoarte de livrare în timp real (DLR)",
        "Rute directe prin operatori mobili"
      ]
    },
    {
      "title": "Numere Virtuale Globale (DID)",
      "desc": "Numere locale, gratuite și mobile în peste 100 de țări pentru prezență globală instantanee.",
      "points": [
        "Alocare instantanee a numerelor",
        "Suport pentru voce și SMS bidirecțional",
        "Redirecționare flexibilă a apelurilor SIP",
        "Identități locale de apelant"
      ]
    },
    {
      "title": "Dialer Cloud pentru Centre de Contact",
      "desc": "Soluții de apelare predictivă WebRTC și mobilă pentru echipele de vânzări și servicii pentru clienți.",
      "points": [
        "Moduri predictive & progresive",
        "Apelare WebRTC direct în browser",
        "Monitorizare live a supervizorului",
        "Înregistrare automată a apelurilor în CRM"
      ]
    }
  ],
  "servicesBadge": "SERVICIILE NOASTRE",
  "servicesTitle": "Suită Completă de Telecomunicații pentru Întreprinderea Modernă",
  "servicesSubtitle": "Explorați produsele noastre modulare concepute pentru a vă scala operațiunile și a reduce costurile.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Voce Wholesale",
      "desc": "Terminare vocală internațională de încredere cu CLI garantat și calitate audio premium.",
      "href": "/wholesale-voice",
      "badge": "Rute Directe",
      "features": [
        "Acoperire Globală A-Z",
        "Interconectări Tier-1",
        "Rutare Eficientă ca Cost"
      ]
    },
    {
      "id": "ai-voice",
      "title": "Soluții Vocale AI",
      "desc": "Experiențe vocale automate inteligente și IVR enterprise pentru centre moderne de contact.",
      "href": "/voice",
      "badge": "Automatizare",
      "features": [
        "Interacțiuni Vocale Naturale",
        "Rutare Inteligentă IVR",
        "Perspective Vocale în Timp Real"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Numere Virtuale (DID)",
      "desc": "Numere de telefon locale și gratuite în peste 100 de țări pentru o prezență globală a mărcii.",
      "href": "/virtual-did",
      "badge": "100+ Țări",
      "features": [
        "Activare Rapidă a Numerelor",
        "Voce & SMS Bidirecțional",
        "Redirecționare Flexibilă"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS Wholesale",
      "desc": "Transmitere de SMS-uri în masă de mare volum către abonați mobili din întreaga lume.",
      "href": "/wholesale-message",
      "badge": "Randament Ridicat",
      "features": [
        "Rute Directe Telco",
        "Protocoale SMPP & HTTP",
        "Acoperire Globală"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Portal SMS OTP",
      "desc": "Livrare ultra-rapidă a codurilor de verificare concepută special pentru bănci și fintech.",
      "href": "/otp-sms",
      "badge": "Livrare Instantanee",
      "features": [
        "Rată de Livrare de 99.8%",
        "Rutare Anti-Fraudă",
        "Transmisie Criptată"
      ]
    },
    {
      "id": "dialer",
      "title": "Soluții Complete Dialer",
      "desc": "Dialer WebRTC pe browser și mobil cu monitorizare de către supervizor și rutare inteligentă.",
      "href": "/dialer",
      "badge": "WebRTC & Mobil",
      "features": [
        "Apelare Predictivă",
        "Ascultare & Intervenție Live",
        "Tablouri de Bord în Timp Real"
      ]
    }
  ],
  "mapBadge": "SEDIUL CENTRAL & ACOPERIRE GLOBALĂ",
  "mapTitle": "Prezența Noastră Strategică și Adresa Înregistrată",
  "mapSubtitle": "Cu Centre dedicate de Operațiuni de Rețea și puncte de prezență globale, sprijinim companiile 24/7/365.",
  "officeTitle": "Sediul Central Corporativ",
  "officeAddressLabel": "Adresă Înregistrată",
  "officePhoneLabel": "Suport Telefonic",
  "officeEmailLabel": "Întrebări prin Email",
  "officeSupportLabel": "Disponibilitate Suport",
  "officeSupportHours": "Suport NOC 24/7/365",
  "nocLabel": "Centru Global de Operațiuni de Rețea (NOC)",
  "nocDesc": "Monitorizare proactivă a latenței, re-rutare automată și ingineri mereu disponibili.",
  "mapPinTitle": "Operațiunile iNet Global",
  "mapPinDesc": "Hub strategic în Financial Park conectat la rețele internaționale de tranzit Tier-1.",
  "ctaTitle": "Sunteți Gata să Vă Transformați Infrastructura Globală de Telecomunicații?",
  "ctaSubtitle": "Alăturați-vă organizațiilor de top care își optimizează deja livrarea de voce și SMS pe rutele noastre directe Tier-1.",
  "ctaPrimaryBtn": "Vorbiți cu un Expert în Telecomunicații",
  "ctaSecondaryBtn": "Explorați Serviciile Noastre",
  "floatingTier1Badge": {
    "title": "Rute Directe Tier-1",
    "sub": "99.99% Enterprise SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Interconectări Globale Directe",
    "sub": "Tranzit internațional wholesale fără fricțiuni"
  },
  "mapLiveLocation": "Locație Live",
  "postalAddressLabel": "Adresă Poștală",
  "ctaGuaranteedSla": "99.99% SLA Garantat",
  "ctaDedicatedNoc": "24/7/365 NOC Dedicat"
};

const hu: AboutUsTranslation = {
  "heroBadge": "AZ INET GLOBALRÓL",
  "heroTitle": "A Globális Távközlés Megerősítése Szolgáltatói Szintű Minőséggel",
  "heroSubtitle": "Az iNet Global egy vezető nemzetközi távközlési szolgáltató, amely nagykereskedelmi hangtovábbítást, biztonságos OTP üzenetküldést, virtuális számokat (DID) és tárcsázó infrastruktúrát biztosít több mint 100 országban.",
  "contactBtn": "Lépjen Kapcsolatba Csapatunkkal",
  "servicesBtn": "Szolgáltatások Felfedezése",
  "heroStats": [
    {
      "label": "Összekapcsolt Országok",
      "value": "100+",
      "sub": "Közvetlen szolgáltatói terminálás"
    },
    {
      "label": "Hálózati Megbízhatóság",
      "value": "99.99%",
      "sub": "99.99% vállalati SLA"
    },
    {
      "label": "Havi Forgalom",
      "value": "1B+",
      "sub": "Milliárdnyi hangperc & SMS"
    },
    {
      "label": "Globális Műszaki NOC",
      "value": "24/7/365",
      "sub": "24/7 aktív késleltetés-felügyelet"
    }
  ],
  "phoneMockup": {
    "appTitle": "iNet Global Hálózat",
    "status": "Aktív & Felügyelt",
    "regionLabel": "Globális Vállalati Útvonalak",
    "latency": "14ms",
    "card1Title": "Hálózati SLA",
    "card1Val": "99.99%",
    "card1Badge": "Globális SLA",
    "card2Title": "Aktív Útvonalak",
    "card2Val": "100+",
    "card2Badge": "Tier-1 Szolgáltatók",
    "routesTitle": "Közvetlen Útvonalak Állapota",
    "route1": {
      "name": "USA & EU SIP Közvetlen Útvonal",
      "quality": "100%",
      "status": "Optimalizált"
    },
    "route2": {
      "name": "APAC Szolgáltatói SMS Átjáró",
      "quality": "99.9%",
      "status": "Optimalizált"
    },
    "route3": {
      "name": "Globális OTP Magas Prioritás",
      "quality": "99.8%",
      "status": "Optimalizált"
    },
    "bottomStat1": "Kétirányú késleltetés",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Globális Elérhetőség",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "KIK VAGYUNK",
  "companyTitle": "Globális Megbízhatóságra Építve, Üzleti Növekedésre Tervezve",
  "companySubtitle": "Alapvető távközlési szolgáltatások nyújtása mobilszolgáltatók, aggregátorok és vállalatok számára világszerte.",
  "companyStory1": "A globális telekommunikáció egyszerűsítésének céljával alapított iNet Global közvetlen összeköttetéseket épített ki vezető Tier-1 szolgáltatókkal Amerikában, Európában, Ázsiában és a Közel-Keleten.",
  "companyStory2": "Ma havonta több milliárd percet és üzenetet dolgozunk fel biztonságosan globális fintech cégek, az egészségügy, vezető e-kereskedelmi szereplők és távközlési viszonteladók számára.",
  "missionTitle": "Küldetésünk",
  "missionDesc": "Kristálytiszta hangminőség, megbízható ellenőrző üzenetek és zökkenőmentes virtuális számok biztosítása, hogy a vállalkozások bárhol kapcsolatba léphessenek.",
  "visionTitle": "Jövőképünk",
  "visionDesc": "A világ legmegbízhatóbb globális kommunikációs infrastrukturális partnerévé válni, folyamatos innovációval az AI intelligencia és a szolgáltatói szintű teljesítmény révén.",
  "coreValuesTitle": "Működésünket Vezérlő Alapelvek",
  "values": [
    {
      "title": "Kompromisszummentes Minőség",
      "desc": "Ellenőrzött CLI hangútvonalak és garantált 2 másodpercen belüli SMS OTP kézbesítés."
    },
    {
      "title": "Szolgáltatói Szintű Megbízhatóság",
      "desc": "99.99%-os rendelkezésre állás proaktív 24/7/365 NOC felügyelettel támogatva."
    },
    {
      "title": "Globális Skálázhatóság",
      "desc": "Robusztus infrastruktúra, amely zökkenőmentesen kezeli vállalkozása forgalmi csúcsait."
    },
    {
      "title": "Átlátható Partnerség",
      "desc": "Világos elszámolás, valós idejű analitikai irányítópultok és elkötelezett műszaki ügyfélmenedzserek."
    }
  ],
  "whatWeDoBadge": "AMIT CSINÁLUNK",
  "whatWeDoTitle": "A Világ Minden Pontjának Összekapcsolása Egységes Távközléssel",
  "whatWeDoSubtitle": "Az alapoktól kezdve nagy kapacitású és alacsony késleltetést igénylő üzleti műveletek támogatására épült.",
  "pillars": [
    {
      "title": "Hangterminálás & SIP Trunking",
      "desc": "Szolgáltatói szintű nemzetközi hangterminálás garantált CLI-vel és alacsony késleltetéssel.",
      "points": [
        "100+ közvetlen szolgáltatói útvonal",
        "Tier-1 A-Z nemzetközi terminálás",
        "Intelligens Least-Cost Routing (LCR)",
        "Redundáns SIP átjárók"
      ]
    },
    {
      "title": "Magas Megbízhatóságú Üzenetküldés & OTP",
      "desc": "Gyors és megbízható SMS-kézbesítés egyszeri jelszavakhoz és banki tranzakciós értesítésekhez.",
      "points": [
        "OTP kézbesítés 2 másodperc alatt",
        "SMPP és REST API kapcsolat",
        "Valós idejű kézbesítési jelentések (DLR)",
        "Közvetlen mobilszolgáltatói útvonalak"
      ]
    },
    {
      "title": "Globális Virtuális Számok (DID)",
      "desc": "Helyi, ingyenesen hívható és mobilszámok több mint 100 országban az azonnali globális jelenléthez.",
      "points": [
        "Azonnali számkiosztás",
        "Kétirányú hang- és SMS-támogatás",
        "Rugalmas SIP hívásátirányítás",
        "Helyi hívóazonosítók"
      ]
    },
    {
      "title": "Felhőalapú Kapcsolati Központ Tárcsázó",
      "desc": "Prediktív WebRTC és mobil tárcsázó megoldások értékesítési és ügyfélszolgálati csapatoknak.",
      "points": [
        "Prediktív és progresszív módok",
        "WebRTC hívások közvetlenül böngészőből",
        "Élő felügyelői monitorozás",
        "Automatikus CRM hívásnaplózás"
      ]
    }
  ],
  "servicesBadge": "SZOLGÁLTATÁSAINK",
  "servicesTitle": "Teljes Távközlési Készlet a Modern Vállalatok Számára",
  "servicesSubtitle": "Fedezze fel moduláris termékeinket, amelyek célja a működés skálázása és a költségek csökkentése.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Nagykereskedelmi Hang",
      "desc": "Megbízható nemzetközi hangterminálás garantált CLI-vel és prémium hangminőséggel.",
      "href": "/wholesale-voice",
      "badge": "Közvetlen Útvonalak",
      "features": [
        "A-Z Globális Lefedettség",
        "Tier-1 Összekapcsolások",
        "Költséghatékony Útválasztás"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI Hangmegoldások",
      "desc": "Intelligens automatizált hangélmények és vállalati IVR modern kapcsolati központokhoz.",
      "href": "/voice",
      "badge": "Automatizálás",
      "features": [
        "Természetes Hanginterakciók",
        "Okos IVR Útválasztás",
        "Valós Idejű Hangelemzések"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Virtuális Számok (DID)",
      "desc": "Helyi és díjmentes telefonszámok 100+ országban a globális márkajelenléthez.",
      "href": "/virtual-did",
      "badge": "100+ Ország",
      "features": [
        "Gyors Számaktiválás",
        "Kétirányú Hang & SMS",
        "Rugalmas Átirányítás"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Nagykereskedelmi SMS",
      "desc": "Nagy volumenű tömeges SMS-küldés mobil előfizetőknek világszerte.",
      "href": "/wholesale-message",
      "badge": "Nagy Áteresztőképesség",
      "features": [
        "Közvetlen Távközlési Útvonalak",
        "SMPP & HTTP Protokollok",
        "Globális Elérés"
      ]
    },
    {
      "id": "otp-sms",
      "title": "OTP SMS Portál",
      "desc": "Rendkívül gyors ellenőrző kód kézbesítés kifejezetten bankok és fintech cégek számára tervezve.",
      "href": "/otp-sms",
      "badge": "Azonnali Kézbesítés",
      "features": [
        "99.8%-os Kézbesítési Arány",
        "Csalásmegelőző Útválasztás",
        "Titkosított Átvitel"
      ]
    },
    {
      "id": "dialer",
      "title": "Teljes Tárcsázó Megoldások",
      "desc": "Böngészős és mobil WebRTC tárcsázó felügyelői ellenőrzéssel és intelligens útválasztással.",
      "href": "/dialer",
      "badge": "WebRTC & Mobil",
      "features": [
        "Prediktív Tárcsázás",
        "Élő Belehallgatás & Beavatkozás",
        "Valós Idejű Falitáblák"
      ]
    }
  ],
  "mapBadge": "SZÉKHELY & GLOBÁLIS ELÉRÉS",
  "mapTitle": "Stratégiai Jelenlétünk és Bejegyzett Címünk",
  "mapSubtitle": "Elkötelezett Hálózati Műveleti Központokkal és globális jelenléti pontokkal a nap 24 órájában, az év 365 napján támogatjuk a vállalkozásokat.",
  "officeTitle": "Vállalati Székhely",
  "officeAddressLabel": "Bejegyzett Cím",
  "officePhoneLabel": "Telefonos Támogatás",
  "officeEmailLabel": "E-mailes Megkeresések",
  "officeSupportLabel": "Támogatási Elérhetőség",
  "officeSupportHours": "24/7/365 NOC Támogatás",
  "nocLabel": "Globális Hálózati Műveleti Központ (NOC)",
  "nocDesc": "Proaktív késleltetés-figyelés, automatikus átirányítás és készenléti mérnökök.",
  "mapPinTitle": "iNet Global Műveletek",
  "mapPinDesc": "Stratégiai Financial Park központ nemzetközi Tier-1 tranzithálózatokhoz csatlakoztatva.",
  "ctaTitle": "Készen Áll Globális Távközlési Infrastruktúrája Átalakítására?",
  "ctaSubtitle": "Csatlakozzon a vezető szervezetekhez, amelyek már optimalizálják hang- és SMS-kézbesítésüket közvetlen Tier-1 útvonalainkon.",
  "ctaPrimaryBtn": "Beszéljen egy Távközlési Szakértővel",
  "ctaSecondaryBtn": "Fedezze fel Szolgáltatásainkat",
  "floatingTier1Badge": {
    "title": "Tier-1 Közvetlen Útvonalak",
    "sub": "99.99% Vállalati SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Közvetlen Globális Összekapcsolások",
    "sub": "Súrlódásmentes nemzetközi nagykereskedelmi tranzit"
  },
  "mapLiveLocation": "Élő Helyszín",
  "postalAddressLabel": "Postai Cím",
  "ctaGuaranteedSla": "99.99% Garantált SLA",
  "ctaDedicatedNoc": "24/7/365 Dedikált NOC"
};

const uk: AboutUsTranslation = {
  "heroBadge": "ПРО INET GLOBAL",
  "heroTitle": "Розвиток Глобальних Телекомунікацій із Якістю Операторського Рівня",
  "heroSubtitle": "iNet Global — провідний міжнародний постачальник телекомунікаційних послуг, що пропонує оптову термінацію голосу, захищені OTP-повідомлення, віртуальні номери (DID) та інфраструктуру автодозвону в понад 100 країнах світу.",
  "contactBtn": "Зв'язатися з Нами",
  "servicesBtn": "Переглянути Послуги",
  "heroStats": [
    {
      "label": "Підключені Країни",
      "value": "100+",
      "sub": "Пряма термінація операторів"
    },
    {
      "label": "Надійність Мережі",
      "value": "99.99%",
      "sub": "99.99% корпоративний SLA"
    },
    {
      "label": "Щомісячний Обсяг",
      "value": "1B+",
      "sub": "Мільярди голосових хвилин & SMS"
    },
    {
      "label": "Глобальний Технічний NOC",
      "value": "24/7/365",
      "sub": "Цілодобовий 24/7 моніторинг затримки"
    }
  ],
  "phoneMockup": {
    "appTitle": "Мережа iNet Global",
    "status": "Активно & Під Наглядом",
    "regionLabel": "Глобальні Корпоративні Маршрути",
    "latency": "14ms",
    "card1Title": "SLA Мережі",
    "card1Val": "99.99%",
    "card1Badge": "Глобальний SLA",
    "card2Title": "Активні Маршрути",
    "card2Val": "100+",
    "card2Badge": "Оператори Tier-1",
    "routesTitle": "Статус Прямих Маршрутів",
    "route1": {
      "name": "Прямий SIP-маршрут США та ЄС",
      "quality": "100%",
      "status": "Оптимізовано"
    },
    "route2": {
      "name": "SMS-шлюз операторів APAC",
      "quality": "99.9%",
      "status": "Оптимізовано"
    },
    "route3": {
      "name": "Глобальний Високий Пріоритет OTP",
      "quality": "99.8%",
      "status": "Оптимізовано"
    },
    "bottomStat1": "Затримка туди й назад",
    "bottomStat1Val": "14ms",
    "bottomStat2": "Глобальна Доступність",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "ХТО МИ",
  "companyTitle": "Побудовано на Глобальній Надійності, Створено для Зростання Бізнесу",
  "companySubtitle": "Надання критично важливих телекомунікаційних послуг для мобільних операторів, агрегаторів та корпорацій по всьому світу.",
  "companyStory1": "Заснована з метою спрощення глобальних телекомунікацій, iNet Global побудувала прямі з'єднання з провідними операторами Tier-1 у країнах Америки, Європи, Азії та Близького Сходу.",
  "companyStory2": "Сьогодні ми щомісяця безпечно обробляємо мільярди хвилин і повідомлень для міжнародних фінтех-компаній, закладів охорони здоров'я, лідерів електронної комерції та реселерів зв'язку.",
  "missionTitle": "Наша Місія",
  "missionDesc": "Забезпечувати бездоганну якість голосу, надійні повідомлення для верифікації та безшовні віртуальні номери для спілкування бізнесу в будь-якій точці світу.",
  "visionTitle": "Наше Бачення",
  "visionDesc": "Бути найнадійнішим у світі партнером у сфері глобальної комунікаційної інфраструктури, постійно впроваджуючи інновації завдяки AI та продуктивності рівня операторів.",
  "coreValuesTitle": "Принципи, Що Керують Нашою Роботою",
  "values": [
    {
      "title": "Безкомпромісна Якість",
      "desc": "Перевірені голосові маршрути з CLI та гарантована доставка SMS OTP менш ніж за 2 секунди."
    },
    {
      "title": "Надійність Операторського Рівня",
      "desc": "Доступність 99.99%, підтверджена проактивним моніторингом NOC 24/7/365."
    },
    {
      "title": "Глобальна Масштабованість",
      "desc": "Потужна інфраструктура, розрахована на безперебійну обробку пікових навантажень вашого бізнесу."
    },
    {
      "title": "Прозоре Партнерство",
      "desc": "Чесні розрахунки, аналітичні панелі в реальному часі та персональні технічні менеджери."
    }
  ],
  "whatWeDoBadge": "ЩО МИ РОБИМО",
  "whatWeDoTitle": "Поєднуємо Кожен Куточок Світу за Допомогою Єдиного Телекому",
  "whatWeDoSubtitle": "Створено з нуля для підтримки високопродуктивних бізнес-операцій, чутливих до затримок.",
  "pillars": [
    {
      "title": "Голосова Термінація & SIP-транкінг",
      "desc": "Міжнародна голосова термінація операторського рівня з гарантованим CLI та мінімальною затримкою.",
      "points": [
        "100+ прямих маршрутів операторів",
        "Міжнародна термінація Tier-1 A-Z",
        "Інтелектуальна маршрутизація найменшої вартості",
        "Резервовані SIP-шлюзи"
      ]
    },
    {
      "title": "Високонадійні Повідомлення & OTP",
      "desc": "Швидка та надійна доставка SMS для одноразових паролів і сповіщень про банківські транзакції.",
      "points": [
        "Доставка OTP менш ніж за 2 секунди",
        "Підключення через SMPP та REST API",
        "Звіти про доставку в реальному часі (DLR)",
        "Прямі маршрути мобільних операторів"
      ]
    },
    {
      "title": "Глобальні Віртуальні Номери (DID)",
      "desc": "Місцеві, безкоштовні (toll-free) та мобільні номери у понад 100 країнах для миттєвої глобальної присутності.",
      "points": [
        "Миттєве надання номерів",
        "Підтримка двостороннього зв'язку та SMS",
        "Гнучка переадресація SIP-дзвінків",
        "Локальні ідентифікатори абонента"
      ]
    },
    {
      "title": "Хмарний Дайлер Контакт-Центру",
      "desc": "Рішення предиктивного WebRTC та мобільного автодозвону для команд продажу та підтримки клієнтів.",
      "points": [
        "Предиктивний і прогресивний режими",
        "Дзвінки WebRTC безпосередньо в браузері",
        "Моніторинг супервізора в реальному часі",
        "Автоматична фіксація дзвінків у CRM"
      ]
    }
  ],
  "servicesBadge": "НАШІ ПОСЛУГИ",
  "servicesTitle": "Повний Комплекс Телекомунікацій для Сучасного Бізнесу",
  "servicesSubtitle": "Ознайомтеся з нашими модульними продуктами, створеними для масштабування ваших операцій та оптимізації витрат.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "Оптовий Голос",
      "desc": "Надійна міжнародна голосова термінація з гарантованим CLI та преміальною якістю аудіо.",
      "href": "/wholesale-voice",
      "badge": "Прямі Маршрути",
      "features": [
        "Глобальне Покриття A-Z",
        "Інтерконекти Tier-1",
        "Економічна Маршрутизація"
      ]
    },
    {
      "id": "ai-voice",
      "title": "AI Голосові Рішення",
      "desc": "Інтелектуальний автоматизований голос і корпоративний IVR для сучасних контакт-центрів.",
      "href": "/voice",
      "badge": "Автоматизація",
      "features": [
        "Природна Взаємодія Голосом",
        "Розумна Маршрутизація IVR",
        "Голосова Аналітика в Реальному Часі"
      ]
    },
    {
      "id": "virtual-did",
      "title": "Віртуальні Номери (DID)",
      "desc": "Місцеві та безкоштовні телефонні номери в 100+ країнах для глобальної присутності бренду.",
      "href": "/virtual-did",
      "badge": "100+ Країн",
      "features": [
        "Швидка Активація Номерів",
        "Двосторонній Голос & SMS",
        "Гнучка Переадресація"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "Оптові SMS",
      "desc": "Масове розсилання SMS великого обсягу мобільним абонентам по всьому світу.",
      "href": "/wholesale-message",
      "badge": "Висока Пропускна Здатність",
      "features": [
        "Прямі Маршрути Операторів",
        "Протоколи SMPP & HTTP",
        "Глобальне Охоплення"
      ]
    },
    {
      "id": "otp-sms",
      "title": "Портал SMS OTP",
      "desc": "Надшвидка доставка кодів верифікації, створена спеціально для банківського сектора та фінтеху.",
      "href": "/otp-sms",
      "badge": "Миттєва Доставка",
      "features": [
        "Рівень Доставки 99.8%",
        "Антифрод-маршрутизація",
        "Зашифрована Передача"
      ]
    },
    {
      "id": "dialer",
      "title": "Комплексні Рішення Дайлера",
      "desc": "Браузерний і мобільний WebRTC дайлер з контролем супервізора та інтелектуальною маршрутизацією.",
      "href": "/dialer",
      "badge": "WebRTC & Мобільний",
      "features": [
        "Предиктивний Додзвін",
        "Прослуховування & Втручання Наживо",
        "Інформаційні Панелі Онлайн"
      ]
    }
  ],
  "mapBadge": "ГОЛОВНИЙ ОФІС & ГЛОБАЛЬНЕ ОХОПЛЕННЯ",
  "mapTitle": "Наша Стратегічна Присутність та Офіційна Адреса",
  "mapSubtitle": "Завдяки спеціалізованим центрам керування мережею та точкам присутності по всьому світу ми підтримуємо бізнес 24/7/365.",
  "officeTitle": "Головний Офіс Компанії",
  "officeAddressLabel": "Офіційна Адреса",
  "officePhoneLabel": "Телефонна Підтримка",
  "officeEmailLabel": "Запити електронною поштою",
  "officeSupportLabel": "Доступність Підтримки",
  "officeSupportHours": "Підтримка NOC 24/7/365",
  "nocLabel": "Глобальний Центр Керування Мережею (NOC)",
  "nocDesc": "Проактивний моніторинг затримок, автоматична перемаршрутизація та чергові інженери.",
  "mapPinTitle": "Операційна Діяльність iNet Global",
  "mapPinDesc": "Стратегічний хаб у Financial Park, підключений до міжнародних транзитних мереж Tier-1.",
  "ctaTitle": "Готові Трансформувати Свою Глобальну Інфраструктуру Зв'язку?",
  "ctaSubtitle": "Приєднуйтеся до провідних організацій, які вже оптимізували доставку голосу та SMS на наших прямих маршрутах Tier-1.",
  "ctaPrimaryBtn": "Поговорити з Експертом у Галузі Телекому",
  "ctaSecondaryBtn": "Переглянути Наші Послуги",
  "floatingTier1Badge": {
    "title": "Прямі Маршрути Tier-1",
    "sub": "99.99% Корпоративний SLA"
  },
  "ambientInterconnectBadge": {
    "title": "Прямі Глобальні Інтерконекти",
    "sub": "Безперешкодний міжнародний оптовий транзит"
  },
  "mapLiveLocation": "Місцезнаходження Онлайн",
  "postalAddressLabel": "Поштова Адреса",
  "ctaGuaranteedSla": "99.99% Гарантований SLA",
  "ctaDedicatedNoc": "Цілодобовий 24/7/365 NOC"
};

const he: AboutUsTranslation = {
  "heroBadge": "אודות INET GLOBAL",
  "heroTitle": "העצמת תקשורת גלובלית באיכות ברמת ספק",
  "heroSubtitle": "iNet Global היא ספקית תקשורת בינלאומית מובילה המספקת סיום שיחות קוליות בסיטונאות, הודעות OTP מאובטחות, מספרים וירטואליים (DID) ותשתיות חייגן ביותר מ-100 מדינות.",
  "contactBtn": "צור קשר עם הצוות שלנו",
  "servicesBtn": "גלה את השירותים",
  "heroStats": [
    {
      "label": "מדינות מחוברות",
      "value": "100+",
      "sub": "סיום ישיר מול מפעילים"
    },
    {
      "label": "אמינות רשת",
      "value": "99.99%",
      "sub": "SLA ארגוני של 99.99%"
    },
    {
      "label": "נפח חודשי",
      "value": "1B+",
      "sub": "מיליארדי דקות קוליות ו-SMS"
    },
    {
      "label": "NOC טכני גלובלי",
      "value": "24/7/365",
      "sub": "ניטור השהיה פעיל 24/7"
    }
  ],
  "phoneMockup": {
    "appTitle": "רשת iNet Global",
    "status": "פעיל ומנוטר",
    "regionLabel": "נתיבים ארגוניים גלובליים",
    "latency": "14ms",
    "card1Title": "SLA של הרשת",
    "card1Val": "99.99%",
    "card1Badge": "SLA גלובלי",
    "card2Title": "נתיבים פעילים",
    "card2Val": "100+",
    "card2Badge": "מפעילי Tier-1",
    "routesTitle": "סטטוס נתיבים ישירים",
    "route1": {
      "name": "נתיב SIP ישיר ארה\"ב ואירופה",
      "quality": "100%",
      "status": "מותאם"
    },
    "route2": {
      "name": "שער SMS מפעילי APAC",
      "quality": "99.9%",
      "status": "מותאם"
    },
    "route3": {
      "name": "עדיפות גבוהה OTP גלובלי",
      "quality": "99.8%",
      "status": "מותאם"
    },
    "bottomStat1": "השהיית הלוך ושוב",
    "bottomStat1Val": "14ms",
    "bottomStat2": "זמינות גלובלית",
    "bottomStat2Val": "99.99%"
  },
  "companyBadge": "מי אנחנו",
  "companyTitle": "נבנה על אמינות גלובלית, תוכנן לצמיחה עסקית",
  "companySubtitle": "אספקת שירותי תקשורת חיוניים עבור מפעילי סלולר, אגרגטורים וארגונים ברחבי העולם.",
  "companyStory1": "נוסדה מתוך שאיפה לפשט את התקשורת הגלובלית, iNet Global בנתה חיבורים ישירים עם מפעילי Tier-1 מובילים ביבשת אמריקה, אירופה, אסיה והמזרח התיכון.",
  "companyStory2": "כיום, אנו מעבדים באופן מאובטח מיליארדי דקות והודעות מדי חודש עבור חברות פינטק בינלאומיות, שירותי בריאות, ענקי מסחר אלקטרוני ומשווקי תקשורת.",
  "missionTitle": "המשימה שלנו",
  "missionDesc": "לספק איכות קול צלולה כבדולח, הודעות אימות מהימנות ומספרים וירטואליים חלקים כדי שעסקים יוכלו לתקשר בכל מקום.",
  "visionTitle": "החזון שלנו",
  "visionDesc": "להיות השותף האמין ביותר בעולם לתשתיות תקשורת גלובליות תוך חדשנות מתמדת באמצעות בינה מלאכותית וביצועים ברמת ספק.",
  "coreValuesTitle": "עקרונות המנחים את הפעילות שלנו",
  "values": [
    {
      "title": "איכות ללא פשרות",
      "desc": "נתיבי קול CLI מאומתים ומסירת SMS OTP מובטחת תוך פחות מ-2 שניות."
    },
    {
      "title": "אמינות ברמת ספק",
      "desc": "99.99% זמן פעולה תקין המגובה בניטור NOC יזום 24/7/365."
    },
    {
      "title": "יכולת הרחבה גלובלית",
      "desc": "תשתית חזקה המתוכננת להתמודד בצורה חלקה עם עליות חדות בתעבורת העסק שלך."
    },
    {
      "title": "שותפות שקופה",
      "desc": "חיוב ישיר, לוחות מחוונים של ניתוח נתונים בזמן אמת ומנהלי חשבונות טכניים ייעודיים."
    }
  ],
  "whatWeDoBadge": "מה אנחנו עושים",
  "whatWeDoTitle": "חיבור כל פינה בעולם באמצעות תקשורת אחודה",
  "whatWeDoSubtitle": "נבנה מהיסוד כדי לתמוך בפעולות עסקיות בעלות קיבולת גבוהה ורגישות להשהיה.",
  "pillars": [
    {
      "title": "סיום שיחות קוליות & SIP Trunking",
      "desc": "סיום שיחות בינלאומי ברמת ספק עם CLI מובטח והשהיה מינימלית.",
      "points": [
        "100+ נתיבי מפעילים ישירים",
        "סיום שיחות בינלאומי Tier-1 A-Z",
        "ניתוב בעלות הנמוכה ביותר (LCR)",
        "שערי SIP עם גיבוי מלא"
      ]
    },
    {
      "title": "הודעות באמינות גבוהה & OTP",
      "desc": "מסירת SMS מהירה ואמינה עבור סיסמאות חד-פעמיות והתראות על עסקאות בנקאיות.",
      "points": [
        "מסירת OTP תוך פחות מ-2 שניות",
        "קישוריות SMPP ו-REST API",
        "דוחות מסירה בזמן אמת (DLR)",
        "נתיבי מפעילים סלולריים ישירים"
      ]
    },
    {
      "title": "מספרים וירטואליים גלובליים (DID)",
      "desc": "מספרים מקומיים, חינמיים וסלולריים ביותר מ-100 מדינות לנוכחות גלובלית מיידית.",
      "points": [
        "הקצאת מספרים מיידית",
        "תמיכה בשיחות קוליות ו-SMS דו-כיווני",
        "העברת שיחות SIP גמישה",
        "זהויות מתקשר מקומיות"
      ]
    },
    {
      "title": "חייגן מוקד שירות בענן",
      "desc": "פתרונות חייגן WebRTC וסלולר חזויים עבור צוותי מכירות ושירות לקוחות.",
      "points": [
        "מצבים חזויים ומתקדמים",
        "שיחות WebRTC ישירות בדפדפן",
        "ניטור מפקח בזמן אמת",
        "רישום שיחות אוטומטי ב-CRM"
      ]
    }
  ],
  "servicesBadge": "השירותים שלנו",
  "servicesTitle": "חבילת תקשורת מלאה לארגון המודרני",
  "servicesSubtitle": "גלה את המוצרים המודולריים שלנו שנועדו להרחיב את הפעילות שלך ולהפחית עלויות.",
  "servicesList": [
    {
      "id": "wholesale-voice",
      "title": "קול בסיטונאות",
      "desc": "סיום שיחות בינלאומי אמין עם CLI מובטח ואיכות שמע מעולה.",
      "href": "/wholesale-voice",
      "badge": "נתיבים ישירים",
      "features": [
        "כיסוי גלובלי A-Z",
        "חיבורי Tier-1",
        "ניתוב חסכוני"
      ]
    },
    {
      "id": "ai-voice",
      "title": "פתרונות קול מבוססי AI",
      "desc": "חוויות קוליות אוטומטיות חכמות ו-IVR ארגוני למוקדי שירות מודרניים.",
      "href": "/voice",
      "badge": "אוטומציה",
      "features": [
        "אינטראקציות קוליות טבעיות",
        "ניתוב IVR חכם",
        "תובנות קוליות בזמן אמת"
      ]
    },
    {
      "id": "virtual-did",
      "title": "מספרים וירטואליים (DID)",
      "desc": "מספרי טלפון מקומיים וחינמיים ביותר מ-100 מדינות לנוכחות מותג בינלאומית.",
      "href": "/virtual-did",
      "badge": "100+ מדינות",
      "features": [
        "הפעלת מספרים מהירה",
        "קול ו-SMS דו-כיווני",
        "הפניה גמישה"
      ]
    },
    {
      "id": "wholesale-message",
      "title": "SMS בסיטונאות",
      "desc": "העברת SMS המוני בנפח גבוה למנויי סלולר ברחבי העולם.",
      "href": "/wholesale-message",
      "badge": "תפוקה גבוהה",
      "features": [
        "נתיבי טלקום ישירים",
        "פרוטוקולי SMPP & HTTP",
        "פריסה גלובלית"
      ]
    },
    {
      "id": "otp-sms",
      "title": "פורטל SMS OTP",
      "desc": "מסירה מהירה במיוחד של קודי אימות המיועדת במיוחד לבנקים ולפינטק.",
      "href": "/otp-sms",
      "badge": "מסירה מיידית",
      "features": [
        "שיעור מסירה של 99.8%",
        "ניתוב נגד הונאות",
        "שידור מוצפן"
      ]
    },
    {
      "id": "dialer",
      "title": "פתרונות חייגן מלאים",
      "desc": "חייגן WebRTC בדפדפן ובסלולר עם פיקוח מנהל וניתוב חכם.",
      "href": "/dialer",
      "badge": "WebRTC & סלולר",
      "features": [
        "חיוג חזוי",
        "האזנה והתערבות חיה",
        "לוחות מחוונים בזמן אמת"
      ]
    }
  ],
  "mapBadge": "מטה ונוכחות גלובלית",
  "mapTitle": "הנוכחות האסטרטגית והכתובת הרשומה שלנו",
  "mapSubtitle": "עם מרכזי תפעול רשת ייעודיים ונקודות נוכחות ברחבי העולם, אנו תומכים בעסקים 24/7/365.",
  "officeTitle": "מטה החברה",
  "officeAddressLabel": "כתובת רשומה",
  "officePhoneLabel": "תמיכה טלפונית",
  "officeEmailLabel": "פניות בדוא\"ל",
  "officeSupportLabel": "זמינות תמיכה",
  "officeSupportHours": "תמיכת NOC 24/7/365",
  "nocLabel": "מרכז תפעול רשת גלובלי (NOC)",
  "nocDesc": "ניטור השהיה יזום, ניתוב מחדש אוטומטי ומהנדסים בכוננות.",
  "mapPinTitle": "פעילות iNet Global",
  "mapPinDesc": "מוקד אסטרטגי ב-Financial Park המחובר לרשתות מעבר בינלאומיות של מפעילי Tier-1.",
  "ctaTitle": "מוכן לשדרג את תשתית התקשורת הגלובלית שלך?",
  "ctaSubtitle": "הצטרף לארגונים המובילים שכבר מייעלים את מסירת הקול וה-SMS שלהם בנתיבי Tier-1 הישירים שלנו.",
  "ctaPrimaryBtn": "דבר עם מומחה תקשורת",
  "ctaSecondaryBtn": "גלה את השירותים שלנו",
  "floatingTier1Badge": {
    "title": "נתיבי Tier-1 ישירים",
    "sub": "99.99% Enterprise SLA"
  },
  "ambientInterconnectBadge": {
    "title": "חיבורים גלובליים ישירים",
    "sub": "מעבר סיטונאי בינלאומי חלק לחלוטין"
  },
  "mapLiveLocation": "מיקום חי",
  "postalAddressLabel": "כתובת למשלוח דואר",
  "ctaGuaranteedSla": "99.99% SLA מובטח",
  "ctaDedicatedNoc": "NOC ייעודי 24/7/365"
};

const translations: Record<string, AboutUsTranslation> = {
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

export const getAboutUsTranslations = (
  lang: string,
  _region?: string,
  _regionName?: string
): AboutUsTranslation => {
  return translations[lang] || translations["en"];
};

export default getAboutUsTranslations;

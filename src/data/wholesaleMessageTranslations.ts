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
  "heroBadge": "WHOLESALE SMS • GLOBAL MESSAGING INFRASTRUCTURE",
  "heroTitle": "Every Message, Connected With Confidence.",
  "heroDesc": "Carrier-grade wholesale SMS for carriers, aggregators and messaging platforms. Connect your A2P traffic to global routes with direct carrier connectivity, delivery visibility and hands-on network expertise.",
  "talkToExpert": "Talk to an expert",
  "exploreCapabilities": "Explore capabilities",
  "stats": {
    "routing": "Global routing",
    "routingLabel": "Market-led reach",
    "traffic": "A2P messaging",
    "trafficLabel": "Business-critical traffic",
    "insights": "Delivery insights",
    "insightsLabel": "Operational control"
  },
  "heroLiveBadge1": {
    "title": "A2P connectivity",
    "label": "Your platform. Global reach."
  },
  "heroLiveBadge2": {
    "title": "Visibility at every step",
    "sub": "Submit • Route • Report"
  },
  "whyBadge": "WHY INET WHOLESALE SMS",
  "whyTitle": "Messaging Infrastructure That Works For Your Business",
  "whySubtitle1": "Built for teams that need reach, delivery insight and control over their A2P traffic.",
  "whySubtitle2": "One partner for global messaging, carrier interconnects and the expertise behind every route.",
  "whyCards": [
    {
      "title": "Reach more markets",
      "desc": "Build international messaging reach around the destinations your customers need.",
      "footer": "Global SMS routing"
    },
    {
      "title": "Connect to carriers",
      "desc": "Bring your traffic closer to mobile networks through direct carrier relationships.",
      "footer": "Direct connectivity"
    },
    {
      "title": "Understand delivery",
      "desc": "Use delivery receipts and route-level reporting to make informed traffic decisions.",
      "footer": "Transparent reporting"
    },
    {
      "title": "Protect your traffic",
      "desc": "Pair messaging growth with fraud controls and market-specific sender requirements.",
      "footer": "Traffic protection"
    }
  ],
  "capabilitiesBadge": "OUR CORE CAPABILITIES",
  "capabilitiesTitle": "One SMS Platform, Built Around Your Traffic",
  "capabilitiesDesc": "Shape your messaging service by destination, use case and route policy—then expand without rebuilding your communications layer.",
  "designSolution": "Design your solution",
  "solutionNote": "Discuss coverage, sender requirements and interconnect options with our team.",
  "capabilities": [
    {
      "tag": "Business messaging",
      "title": "Wholesale A2P messaging",
      "desc": "Carry business-to-consumer SMS for authentication, notifications and opted-in customer engagement."
    },
    {
      "tag": "Market-led reach",
      "title": "Global SMS routing",
      "desc": "Align destinations, traffic types and routing preferences with your commercial and delivery needs."
    },
    {
      "tag": "Carrier interconnects",
      "title": "Direct carrier connectivity",
      "desc": "Access mobile network relationships and managed interconnects for clearer route accountability."
    },
    {
      "tag": "Route management",
      "title": "Quality-based routing",
      "desc": "Evaluate routes using delivery feedback and adapt traffic policies as network conditions change."
    },
    {
      "tag": "Operational visibility",
      "title": "Delivery reporting",
      "desc": "Track message status, review destination performance and investigate errors with delivery receipts."
    },
    {
      "tag": "Traffic safeguards",
      "title": "SMS fraud protection",
      "desc": "Apply traffic checks, sender controls and destination policies to help identify unwanted activity."
    }
  ],
  "howItWorksBadge": "HOW IT WORKS",
  "howItWorksTitle": "From Your Platform To The Handset",
  "howItWorksSubtitle": "A straightforward messaging flow, with network intelligence and delivery feedback built in.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Connect your platform",
      "desc": "Submit A2P messages through an agreed SMPP or API connection, with your sender and destination settings.",
      "note": "Your application → iNet"
    },
    {
      "step": "02",
      "title": "Validate and route",
      "desc": "Traffic checks and routing policies guide each message to the appropriate carrier connection.",
      "note": "Policy-led route selection"
    },
    {
      "step": "03",
      "title": "Deliver and report",
      "desc": "Receive network delivery feedback and use message states to monitor traffic and refine your service.",
      "note": "Delivery receipts → your platform"
    }
  ],
  "networkBadge": "RELIABILITY AT GLOBAL SCALE",
  "networkTitle": "A Network Designed To Keep Messages Moving",
  "networkDesc": "Bring your A2P traffic closer to the mobile networks that serve your customers. Combine carrier connectivity with routing policies tailored to each market.",
  "networkBullets": [
    "Direct carrier relationships and managed partner routes",
    "Destination-aware routing and alternative route options",
    "Sender ID and registration guidance by market",
    "Route monitoring and operational escalation"
  ],
  "networkStats": [
    {
      "val": "Carrier-led",
      "label": "Connectivity strategy"
    },
    {
      "val": "Market-aware",
      "label": "Routing & sender policies"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Connected through carrier relationships",
    "sub": "Direct routes. Managed interconnects."
  },
  "networkFooterNote": "Coverage and sender options vary by destination. Ask our team about the markets you need.",
  "momentsBadge": "BUILT FOR BUSINESS MESSAGING",
  "momentsTitle": "SMS For The Moments That Matter",
  "momentsSubtitle": "Give your enterprise customers the connectivity to reach people across their everyday digital journeys.",
  "moments": [
    {
      "title": "Authentication",
      "desc": "Support account access, sign-in verification and transaction approvals with A2P SMS.",
      "footer": "OTP & verification"
    },
    {
      "title": "Transactional alerts",
      "desc": "Keep customers informed with payment updates, account notices and service alerts.",
      "footer": "Relevant updates"
    },
    {
      "title": "Customer journeys",
      "desc": "Send order confirmations, delivery updates and appointment reminders from your platform.",
      "footer": "Timely notifications"
    },
    {
      "title": "Customer engagement",
      "desc": "Connect opted-in audiences with useful offers, loyalty updates and campaign messages.",
      "footer": "Consent-led campaigns"
    }
  ],
  "intelligenceBadge": "Delivery intelligence",
  "intelligenceTitle": "See Your Traffic. Improve Your Decisions.",
  "intelligenceDesc": "Move beyond submission counts. Delivery receipts and route-level reporting help your operations team understand what happens after a message leaves your platform.",
  "intelligenceBullets": [
    "Message status and carrier-reported delivery receipts",
    "Destination and route performance analysis",
    "Error visibility for troubleshooting and route review"
  ],
  "intelligenceFootnote": "Receipt availability and detail depend on the destination network.",
  "messageLogCard": {
    "title": "Message visibility",
    "badge": "ILLUSTRATIVE VIEW",
    "tab1": "Message log",
    "tab2": "Routes",
    "tab3": "Destinations",
    "colType": "MESSAGE TYPE",
    "colState": "STATE",
    "colReceipt": "RECEIPT",
    "row1Type": "Verification",
    "row1State": "Delivered",
    "row1Receipt": "Received",
    "row2Type": "Order update",
    "row2State": "Submitted",
    "row2Receipt": "Pending",
    "row3Type": "Service alert",
    "row3State": "Rejected",
    "row3Receipt": "Error detail",
    "footerText": "Follow each message from submission to network feedback."
  },
  "protectionTitle": "Protection built into your messaging strategy",
  "protectionBadge": "FRAUD & TRAFFIC CONTROLS",
  "protectionCards": [
    {
      "title": "Traffic screening",
      "desc": "Review unusual patterns and apply controls to help reduce spam and SMS pumping exposure."
    },
    {
      "title": "Sender governance",
      "desc": "Align sender identities and registration requirements with the rules of each destination."
    },
    {
      "title": "Policy-based controls",
      "desc": "Set destination and traffic policies with your team, then review activity as your service evolves."
    }
  ],
  "timelineBadge": "Launch with confidence",
  "timelineTitle": "From Requirements To Live Traffic, Together",
  "timelineSubtitle": "Connect to your existing messaging stack with a clear onboarding plan. Our team helps align your integration, routing and sender setup before launch.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Scope",
      "desc": "Confirm destinations, traffic profiles, sender needs and commercial priorities."
    },
    {
      "step": "2",
      "title": "Connect",
      "desc": "Agree SMPP or API access, credentials and delivery-receipt handling."
    },
    {
      "step": "3",
      "title": "Validate",
      "desc": "Test message formats, sender setup, route behavior and network feedback."
    },
    {
      "step": "4",
      "title": "Launch",
      "desc": "Introduce live traffic and review delivery performance with our team."
    }
  ],
  "integrationPlan": {
    "title": "Your SMS connection",
    "planBadge": "INTEGRATION PLAN",
    "connection": "SMPP / API",
    "traffic": "A2P messaging",
    "formats": "GSM-7 / Unicode",
    "feedback": "Delivery receipts",
    "senderSetup": "Market-specific",
    "check1": "Credentials and connectivity testing",
    "check2": "Sender and receipt validation",
    "discussNote": "Discuss the right interface for your messaging platform.",
    "discussBtn": "Discuss integration"
  },
  "faqBadge": "Your questions, answered",
  "faqTitle": "A Clearer Path To Your SMS Solution",
  "faqSubtitle": "The practical details to consider before connecting your traffic.",
  "faqs": [
    {
      "q": "Who is wholesale SMS built for?",
      "a": "Carriers, SMS aggregators, CPaaS providers and messaging platforms that need connectivity for enterprise A2P traffic."
    },
    {
      "q": "Can we keep our existing messaging platform?",
      "a": "Yes. We can discuss an SMPP or API interconnect and agree the message formats, throughput requirements and delivery-receipt handling for your setup."
    },
    {
      "q": "How do coverage and sender requirements work?",
      "a": "Route availability, sender ID rules and registration processes vary by market. Share your destinations and use cases so our team can review the requirements."
    },
    {
      "q": "What should we share to get started?",
      "a": "Your target destinations, expected traffic profile, message types, sender needs and current integration. These help us shape a relevant routing and commercial proposal."
    }
  ],
  "ctaBadge": "LET'S BUILD YOUR MESSAGING NETWORK",
  "ctaTitle": "Ready For Smarter SMS Connectivity And Global Reach",
  "ctaSubtitle": "Tell us where you need to connect, the traffic you carry and what delivery quality means to your business. Our messaging team will help shape the right routing and integration plan.",
  "contactUs": "Contact us",
  "ctaFootnote": "Built around your markets and traffic"
};

const es: WholesaleMessageTranslation = {
  "heroBadge": "SMS MAYORISTA • INFRAESTRUCTURA GLOBAL DE MENSAJERÍA",
  "heroTitle": "Cada mensaje, conectado con total confianza.",
  "heroDesc": "SMS mayorista de nivel operador para carriers, agregadores y plataformas de mensajería. Conecte su tráfico A2P con rutas globales y visibilidad de entrega directa.",
  "talkToExpert": "Hablar con un experto",
  "exploreCapabilities": "Explorar capacidades",
  "stats": {
    "routing": "Enrutamiento global",
    "routingLabel": "Alcance por mercado",
    "traffic": "Mensajería A2P",
    "trafficLabel": "Tráfico crítico de negocio",
    "insights": "Métricas de entrega",
    "insightsLabel": "Control operacional"
  },
  "heroLiveBadge1": {
    "title": "Conectividad A2P",
    "label": "Su plataforma. Alcance mundial."
  },
  "heroLiveBadge2": {
    "title": "Visibilidad en cada paso",
    "sub": "Envío • Ruta • Reporte"
  },
  "whyBadge": "POR QUÉ INET WHOLESALE SMS",
  "whyTitle": "Infraestructura de mensajería que potencia cada interacción",
  "whySubtitle1": "Ofrecemos terminación global de SMS respaldada por interconexiones directas, monitoreo activo de rutas e informes detallados de entrega.",
  "whySubtitle2": "Diseñado para agregadores, operadores y plataformas empresariales que requieren estabilidad a escala.",
  "whyCards": [
    {
      "title": "Alcance global de mercados",
      "desc": "Construya cobertura internacional de mensajería para los destinos estratégicos que sus clientes demandan.",
      "footer": "Enrutamiento SMS global"
    },
    {
      "title": "Interconexiones directas de operador",
      "desc": "Minimice saltos innecesarios con enlaces de red directos y acuerdos gestionados de alta calidad.",
      "footer": "Calidad de nivel carrier"
    },
    {
      "title": "Monitoreo en tiempo real",
      "desc": "Supervise tasas de entrega, códigos DLR y latencia de transmisión con telemetría transparente.",
      "footer": "Visibilidad operativa"
    },
    {
      "title": "Capacidad de escala masiva",
      "desc": "Transmita millones de mensajes diarios con arquitectura elástica y tolerancia a fallos.",
      "footer": "Rendimiento empresarial"
    }
  ],
  "capabilitiesBadge": "CAPACIDADES PRINCIPALES",
  "capabilitiesTitle": "Diseñado para el tráfico de mensajería empresarial",
  "capabilitiesDesc": "Nuestra suite de servicios mayoristas cubre todo el ciclo de vida del tráfico A2P con confiabilidad demostrada.",
  "designSolution": "Diseñar solución",
  "solutionNote": "Hable con nuestros ingenieros para optimizar rutas y precios.",
  "capabilities": [
    {
      "tag": "Mensajería empresarial",
      "title": "Terminación A2P mayorista",
      "desc": "Envíe SMS empresa a cliente para autenticación, notificaciones críticas y fidelización consentida."
    },
    {
      "tag": "Conectividad global",
      "title": "Enrutamiento internacional",
      "desc": "Alcance operadores de red móvil en todo el mundo con perfiles de ruta adaptados a cada mercado."
    },
    {
      "tag": "Protocolos estándar",
      "title": "Integración SMPP y API",
      "desc": "Conéctese mediante enlaces SMPP v3.4 de alto rendimiento o APIs REST modernas y documentadas."
    },
    {
      "tag": "Fiabilidad de entrega",
      "title": "Gestión inteligente de rutas",
      "desc": "Enrutamiento adaptativo que selecciona el camino óptimo basándose en rendimiento de entrega en tiempo real."
    },
    {
      "tag": "Cumplimiento normativo",
      "title": "Políticas de remitente y registro",
      "desc": "Soporte experto para Sender IDs alfanuméricos, códigos cortos y directrices regulatorias locales."
    },
    {
      "tag": "Informes avanzados",
      "title": "Recibos de entrega y telemetría",
      "desc": "DLRs granulares y analíticas completas para un diagnóstico operativo claro y rápido."
    }
  ],
  "howItWorksBadge": "CÓMO FUNCIONA",
  "howItWorksTitle": "De la integración al alcance global en tres pasos",
  "howItWorksSubtitle": "Un proceso estructurado para habilitar y expandir su conectividad SMS internacional.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Conecte su plataforma",
      "desc": "Envíe mensajes A2P mediante una conexión SMPP o API acordada con sus configuraciones de remitente y destino.",
      "note": "Su aplicación → iNet"
    },
    {
      "step": "02",
      "title": "Enrutamiento inteligente",
      "desc": "Procesamos y dirigimos cada paquete a través del enlace de operador más adecuado para su perfil de tráfico.",
      "note": "Motor de enrutamiento carrier"
    },
    {
      "step": "03",
      "title": "Reportes y optimización",
      "desc": "Reciba recibos de entrega en tiempo real y optimice volúmenes con asistencia técnica continua.",
      "note": "DLRs confirmados en destino"
    }
  ],
  "networkBadge": "RED Y COBERTURA",
  "networkTitle": "Conectividad global para cada destino",
  "networkDesc": "Acceda a más de mil redes móviles a nivel mundial con infraestructura optimizada para alta disponibilidad.",
  "networkBullets": [
    "Interconexiones directas y gestionadas con operadores líderes",
    "Compatibilidad total con GSM-7 y Unicode multinacional",
    "Infraestructura redundante distribuida geográficamente",
    "Soporte 24/7 de centro de operaciones de red (NOC)"
  ],
  "networkStats": [
    {
      "val": "Estrategia carrier",
      "label": "Conectividad gestionada"
    },
    {
      "val": "Sensible al mercado",
      "label": "Políticas de remitente y ruta"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Conectado mediante relaciones de operador",
    "sub": "Rutas directas. Interconexiones gestionadas."
  },
  "networkFooterNote": "La disponibilidad de rutas y las políticas de remitente varían según la regulación local de cada país.",
  "momentsBadge": "CASOS DE USO",
  "momentsTitle": "Construido para interacciones de alto impacto",
  "momentsSubtitle": "Garantice la entrega puntual de mensajes que definen la experiencia del usuario final.",
  "moments": [
    {
      "title": "Autenticación y 2FA",
      "desc": "Facilite accesos seguros, códigos de verificación OTP y validación de transacciones con SMS A2P prioritario.",
      "footer": "OTP y verificación rápida"
    },
    {
      "title": "Notificaciones transaccionales",
      "desc": "Comunique alertas bancarias, confirmaciones de compra y cambios de estado con entrega inmediata.",
      "footer": "Alertas críticas en tiempo real"
    },
    {
      "title": "Alertas de servicio y recordatorios",
      "desc": "Envíe avisos de citas, actualizaciones de logística y alertas de servicio esenciales a tiempo.",
      "footer": "Notificaciones operativas"
    },
    {
      "title": "Campañas de fidelización",
      "desc": "Llegue a clientes suscritos con mensajes informativos y promocionales cumpliendo normativas locales.",
      "footer": "Mensajería con consentimiento"
    }
  ],
  "intelligenceBadge": "INTELIGENCIA DE ENTREGA",
  "intelligenceTitle": "Visibilidad integral y control sobre cada mensaje",
  "intelligenceDesc": "Tome decisiones informadas con análisis detallados de tráfico, códigos de estado y monitoreo proactivo.",
  "intelligenceBullets": [
    "Informes de entrega a nivel de mensaje individual",
    "Detección y conmutación automática ante fallos de ruta",
    "Alertas operativas de rendimiento y latencia anómala",
    "Historial completo de auditoría para resolución de disputas"
  ],
  "intelligenceFootnote": "Los datos de telemetría y códigos de estado se transmiten en tiempo real a través de DLRs.",
  "messageLogCard": {
    "title": "Visibilidad de mensajes",
    "badge": "VISTA ILUSTRATIVA",
    "tab1": "Registro de mensajes",
    "tab2": "Rutas",
    "tab3": "Destinos",
    "colType": "TIPO DE MENSAJE",
    "colState": "ESTADO",
    "colReceipt": "RECIBO",
    "row1Type": "Verificación",
    "row1State": "Entregado",
    "row1Receipt": "Recibido",
    "row2Type": "Actualización pedido",
    "row2State": "Enviado",
    "row2Receipt": "Pendiente",
    "row3Type": "Alerta de servicio",
    "row3State": "Rechazado",
    "row3Receipt": "Detalle error",
    "footerText": "Siga cada mensaje desde el envío hasta la confirmación de red."
  },
  "protectionTitle": "Seguridad y protección antifraude",
  "protectionBadge": "INTEGRIDAD DE RED",
  "protectionCards": [
    {
      "title": "Detección de tráfico anómalo",
      "desc": "Analice patrones inusuales y aplique filtros inteligentes para prevenir ataques de bombeo de SMS y spam."
    },
    {
      "title": "Cumplimiento normativo y listas de exclusión",
      "desc": "Gestione listas de bloqueo y aplique normativas locales para proteger la reputación de su marca y rutas."
    },
    {
      "title": "Protección de remitente (Sender ID)",
      "desc": "Salvaguarde identificadores alfanuméricos contra suplantación de identidad en mercados admitidos."
    }
  ],
  "timelineBadge": "PLAN DE INTEGRACIÓN",
  "timelineTitle": "Puesta en marcha ágil y estructurada",
  "timelineSubtitle": "Metodología comprobada para conectar su plataforma sin contratiempos.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Alcance y requerimientos",
      "desc": "Confirmación de destinos, volúmenes proyectados, requisitos de remitente y prioridades comerciales."
    },
    {
      "step": "2",
      "title": "Configuración técnica",
      "desc": "Aprovisionamiento de credenciales SMPP o API y configuración de listas de IP autorizadas."
    },
    {
      "step": "3",
      "title": "Pruebas de conectividad",
      "desc": "Validación de latencia, codificación de caracteres y recepción precisa de DLRs en entornos reales."
    },
    {
      "step": "4",
      "title": "Pase a producción",
      "desc": "Activación del tráfico comercial con monitoreo asistido por nuestros ingenieros de red."
    }
  ],
  "integrationPlan": {
    "title": "Su conexión SMS mayorista",
    "planBadge": "PLAN DE INTEGRACIÓN",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Mensajería A2P",
    "formats": "GSM-7 / Unicode",
    "feedback": "Recibos de entrega (DLR)",
    "senderSetup": "Específico por mercado",
    "check1": "Credenciales y pruebas de conectividad",
    "check2": "Validación de remitentes y recibos",
    "discussNote": "Consulte con nosotros para elegir la interfaz óptima para su plataforma.",
    "discussBtn": "Solicitar integración"
  },
  "faqBadge": "PREGUNTAS FRECUENTES",
  "faqTitle": "Todo lo que necesita saber sobre SMS mayorista",
  "faqSubtitle": "Respuestas claras a dudas comunes sobre conectividad y terminación.",
  "faqs": [
    {
      "q": "¿Para quién está diseñado el servicio de SMS mayorista?",
      "a": "Para operadores de telecomunicaciones, agregadores de SMS, plataformas CPaaS y empresas con grandes volúmenes de tráfico A2P que necesitan conectividad carrier internacional."
    },
    {
      "q": "¿Qué protocolos de interconexión son compatibles?",
      "a": "Soportamos enlaces SMPP v3.4 estándar de alta velocidad, así como APIs REST seguras con webhooks para entrega y acuse de recibo."
    },
    {
      "q": "¿Cómo se gestiona el soporte para remitentes alfanuméricos?",
      "a": "Gestionamos el registro y cumplimiento normativo de Sender IDs según los requisitos específicos de cada país y operador móvil de destino."
    },
    {
      "q": "¿Qué nivel de visibilidad se ofrece sobre los envíos?",
      "a": "Proporcionamos recibos de entrega (DLR) en tiempo real con códigos de estado estandarizados y telemetría de red accesible vía API o portal."
    }
  ],
  "ctaBadge": "COMENZAR HOY",
  "ctaTitle": "¿Listo para optimizar su conectividad SMS mayorista?",
  "ctaSubtitle": "Conéctese con nuestros especialistas en telecomunicaciones para diseñar una ruta a la medida de sus destinos prioritarios.",
  "contactUs": "Contactar a un especialista",
  "ctaFootnote": "Consultoría personalizada de rutas y análisis de tráfico disponible para operadores y empresas."
};

const zh: WholesaleMessageTranslation = {
  "heroBadge": "批发短信 • 全球消息通信基础设施",
  "heroTitle": "每一条消息，皆承载可靠交付承诺。",
  "heroDesc": "专为电信运营商、聚合商和消息平台打造的运营商级批发短信服务。通过直接运营商互联、透明交付状态和专业运维支持，将您的A2P流量顺畅连接至全球目的地。",
  "talkToExpert": "咨询专家",
  "exploreCapabilities": "探索服务能力",
  "stats": {
    "routing": "全球智能路由",
    "routingLabel": "覆盖全球市场",
    "traffic": "A2P企业短信",
    "trafficLabel": "业务核心关键流量",
    "insights": "交付深度分析",
    "insightsLabel": "全流程运营管控"
  },
  "heroLiveBadge1": {
    "title": "A2P互联互通",
    "label": "您的平台，触达全球目的地。"
  },
  "heroLiveBadge2": {
    "title": "全链路可见性",
    "sub": "提交 • 路由 • 回执"
  },
  "whyBadge": "为什么选择 INET 批发短信",
  "whyTitle": "赋能每一次关键业务交互的消息基础设施",
  "whySubtitle1": "提供依托直接互联、主动路由监控与精准交付回执的全球短信终结服务。",
  "whySubtitle2": "专为需要大规模高并发与高可靠性的聚合商、运营商和跨国企业精心构建。",
  "whyCards": [
    {
      "title": "覆盖全球核心市场",
      "desc": "针对客户所需的战略目标目的地构建国际消息覆盖能力。",
      "footer": "全球短信智能路由"
    },
    {
      "title": "运营商直接互联",
      "desc": "通过优质网络直连和托管互联协议，减少中间跳数，提升投递时效。",
      "footer": "运营商级网络品质"
    },
    {
      "title": "全天候实时监控",
      "desc": "具备实时交付率、状态回执和传输延迟的透明遥测感知能力。",
      "footer": "运维透明可控"
    },
    {
      "title": "大规模高弹性吞吐",
      "desc": "弹性高可用架构支持每日平稳承载数百万级消息并发分发。",
      "footer": "企业级高并发保障"
    }
  ],
  "capabilitiesBadge": "核心业务能力",
  "capabilitiesTitle": "专为企业级关键业务消息流量而设计",
  "capabilitiesDesc": "覆盖A2P消息全生命周期的端到端批发电信服务组合。",
  "designSolution": "定制解决方案",
  "solutionNote": "与我们的工程团队探讨路由配置与商务方案。",
  "capabilities": [
    {
      "tag": "企业消息",
      "title": "批发A2P短信终结",
      "desc": "承载用于身份验证、交易通知及授权营销的B2C短信流量。"
    },
    {
      "tag": "全球互通",
      "title": "国际路由覆盖",
      "desc": "覆盖全球各大移动网络运营商，具备针对不同市场的本地化合规配置。"
    },
    {
      "tag": "工业级接口",
      "title": "SMPP与API集成",
      "desc": "支持高性能SMPP v3.4协议连接以及标准化现代REST API接口。"
    },
    {
      "tag": "交付可靠性",
      "title": "智能路由调度",
      "desc": "根据实时投递成功率与延迟动态选择最优传输路径。"
    },
    {
      "tag": "合规支持",
      "title": "发送者标识与监管政策",
      "desc": "为字母发送者ID、专用短码和各地区合规注册提供专业辅导。"
    },
    {
      "tag": "数据洞察",
      "title": "投递回执与遥测分析",
      "desc": "提供详细的DLR状态回执与指标洞察，便于排查与优化。"
    }
  ],
  "howItWorksBadge": "运作流程",
  "howItWorksTitle": "三步完成对接并拓展全球连接",
  "howItWorksSubtitle": "结构化对接流程，助您快速启用高品质国际短信通道。",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "对接您的业务平台",
      "desc": "根据约定的发送者与目的地配置，通过SMPP或REST API提交A2P消息。",
      "note": "您的系统 → iNet"
    },
    {
      "step": "02",
      "title": "智能分发与路由",
      "desc": "通过适配您业务特征的最优运营商链路进行消息分发与传输。",
      "note": "运营商级路由引擎"
    },
    {
      "step": "03",
      "title": "状态回执与持续优化",
      "desc": "实时获取终端投递回执，并在专业网络工程师协助下持续优化通道质量。",
      "note": "终端网络确认交付"
    }
  ],
  "networkBadge": "全球网络与覆盖",
  "networkTitle": "直达全球目的地的运营商级连接",
  "networkDesc": "连接全球千余家移动运营商网络，采用多活冗余架构确保业务连续性。",
  "networkBullets": [
    "与主流运营商建立直接互联与优质托管通道",
    "全面支持GSM-7与多语言Unicode字符集编码",
    "全球多地机房分布式部署与自动故障转移",
    "24/7/365 全天候网络运营中心(NOC)技术支持"
  ],
  "networkStats": [
    {
      "val": "运营商主导",
      "label": "互联互通策略"
    },
    {
      "val": "市场洞察",
      "label": "本地合规与路由策略"
    }
  ],
  "networkBadgeOverlay": {
    "title": "依托深厚运营商合作关系",
    "sub": "优质直连路径 • 托管互联节点"
  },
  "networkFooterNote": "实际路由可用性与发送者政策视各国及运营商当地监管要求而定。",
  "momentsBadge": "应用场景",
  "momentsTitle": "面向高价值业务交互而生",
  "momentsSubtitle": "确保关乎用户体验与业务安全的关键信息分秒必达。",
  "moments": [
    {
      "title": "身份验证与双因素认证",
      "desc": "通过高优先级A2P通道发送登录验证码、OTP与交易鉴权信息。",
      "footer": "OTP 与安全验证"
    },
    {
      "title": "交易确认与关键通知",
      "desc": "快速传递银行动账提醒、支付确认、订单变更与账户动态。",
      "footer": "实时交易通知"
    },
    {
      "title": "物流与服务提醒",
      "desc": "按时送达物流派送进展、预约提醒、航班变动及紧急维护通告。",
      "footer": "运营履约提醒"
    },
    {
      "title": "授权客户互动",
      "desc": "在严格遵循营销合规的前提下，向订阅用户推送会员关怀与业务信息。",
      "footer": "合规会员消息"
    }
  ],
  "intelligenceBadge": "交付智能与监控",
  "intelligenceTitle": "掌控每一条消息的流转脉络",
  "intelligenceDesc": "借助多维度流量指标、状态码分析和主动预警，全盘掌握消息链路动态。",
  "intelligenceBullets": [
    "单条消息维度的完整投递状态生命周期追踪",
    "网络抖动时的智能容灾与自动路径切换",
    "异常延迟与投递跌幅的实时运维告警",
    "完整的审计日志支持合规追溯与账单核对"
  ],
  "intelligenceFootnote": "所有遥测数据与网络状态码均通过实时DLR通道透明返回。",
  "messageLogCard": {
    "title": "消息全链路状态",
    "badge": "示例视图",
    "tab1": "消息日志",
    "tab2": "路由路径",
    "tab3": "目的国家",
    "colType": "消息类型",
    "colState": "状态",
    "colReceipt": "回执",
    "row1Type": "身份验证",
    "row1State": "已送达",
    "row1Receipt": "确认接收",
    "row2Type": "订单更新",
    "row2State": "处理中",
    "row2Receipt": "等待确认",
    "row3Type": "服务告警",
    "row3State": "已拦截",
    "row3Receipt": "错误详情",
    "footerText": "追踪从提交发送到终端网络确认的每个关键节点。"
  },
  "protectionTitle": "流量安全与防欺诈保护",
  "protectionBadge": "网络完整性保障",
  "protectionCards": [
    {
      "title": "异常流量甄别与拦截",
      "desc": "实时检测突发异常流量模式，有效防御短信轰炸(SMS Pumping)与垃圾信息泛滥。"
    },
    {
      "title": "合规准则与黑名单管理",
      "desc": "提供智能合规筛查与退订黑名单自动化过滤，维护企业品牌信誉。"
    },
    {
      "title": "发送者标识防伪保护",
      "desc": "在支持的市场中严格校验Sender ID真实性，防止伪造与非法冒用。"
    }
  ],
  "timelineBadge": "接入时间线",
  "timelineTitle": "高效规范的四步对接流程",
  "timelineSubtitle": "成熟标准化的电信工程交付体系，保障业务平稳快速上线。",
  "timelineSteps": [
    {
      "step": "1",
      "title": "需求评估与方案确认",
      "desc": "明确目标国家目的地、预计话务量规模、发送者标识要求与商业条款。"
    },
    {
      "step": "2",
      "title": "技术环境开通",
      "desc": "分配专属SMPP/API联调账号、配置安全IP白名单及通道参数。"
    },
    {
      "step": "3",
      "title": "端到端联调测试",
      "desc": "针对编码规范、接收时延及状态回执进行多目的地真实真机验证。"
    },
    {
      "step": "4",
      "title": "正式上线与切量",
      "desc": "平滑开启生产流量，由资深网络工程师提供全程护航监控。"
    }
  ],
  "integrationPlan": {
    "title": "您的批发短信互联方案",
    "planBadge": "对接方案",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P 关键企业流量",
    "formats": "GSM-7 / 多语言 Unicode",
    "feedback": "实时交付回执 (DLR)",
    "senderSetup": "依目的地市场合规配置",
    "check1": "认证信息与联调连通性验证",
    "check2": "发送者标识与回执解析校验",
    "discussNote": "欢迎与技术团队沟通，为您的业务定制最优接入模式。",
    "discussBtn": "探讨对接方案"
  },
  "faqBadge": "常见问题",
  "faqTitle": "关于批发短信服务的常见解答",
  "faqSubtitle": "帮助您了解互联架构、交付规范与业务细节。",
  "faqs": [
    {
      "q": "批发短信服务主要适合哪些机构或企业？",
      "a": "面向电信运营商、短消息聚合商、CPaaS云通信服务商以及拥有大规模国际A2P发送需求的企业用户。"
    },
    {
      "q": "支持哪些协议与对接方式？",
      "a": "原生支持业界标准的SMPP v3.4高并发协议，同时提供支持Webhook回调通知的现代化REST API接口。"
    },
    {
      "q": "如何协助完成不同国家的发送者名称（Sender ID）登记？",
      "a": "我们的合规团队熟知各国政策，协助客户准备资质并向当地运营商报备登记字母或数字Sender ID。"
    },
    {
      "q": "发送后的投递状态透明度如何保障？",
      "a": "提供毫秒级DLR状态回执通道，并在控制台展示完整的错误码解析与投递成功率趋势分析。"
    }
  ],
  "ctaBadge": "立即开始",
  "ctaTitle": "准备好升级您的全球短信通道了吗？",
  "ctaSubtitle": "与我们的资深通信专家团队建立联系，为您量身定制高可靠的全球路由规划。",
  "contactUs": "联系专家团队",
  "ctaFootnote": "为全球运营商与跨国企业提供专属测试环境与流量规划咨询。"
};

const hi: WholesaleMessageTranslation = {
  "heroBadge": "थोक एसएमएस • वैश्विक संदेश अवसंरचना",
  "heroTitle": "प्रत्येक संदेश, पूर्ण विश्वास के साथ जुड़ा हुआ।",
  "heroDesc": "दूरसंचार ऑपरेटरों, एग्रीगेटर्स और मैसेजिंग प्लेटफॉर्म्स के लिए कैरियर-ग्रेड थोक एसएमएस सेवा। अपने A2P ट्रैफ़िक को सीधी कैरियर कनेक्टिविटी, लाइव डिलीवरी दृश्यता और समर्पित विशेषज्ञता के साथ वैश्विक मार्गों से जोड़ें।",
  "talkToExpert": "विशेषज्ञ से बात करें",
  "exploreCapabilities": "क्षमताओं को जानें",
  "stats": {
    "routing": "वैश्विक रूटिंग",
    "routingLabel": "विस्तृत बाज़ार पहुंच",
    "traffic": "A2P मैसेजिंग",
    "trafficLabel": "व्यावसायिक महत्वपूर्ण ट्रैफ़िक",
    "insights": "डिलीवरी विश्लेषण",
    "insightsLabel": "परिचालन नियंत्रण"
  },
  "heroLiveBadge1": {
    "title": "A2P कनेक्टिविटी",
    "label": "आपका प्लेटफ़ॉर्म। वैश्विक पहुंच।"
  },
  "heroLiveBadge2": {
    "title": "प्रत्येक चरण पर दृश्यता",
    "sub": "सबमिशन • रूट • रसीद"
  },
  "whyBadge": "INET होलसेल एसएमएस क्यों चुनें",
  "whyTitle": "मैसेजिंग अवसंरचना जो हर व्यावसायिक बातचीत को सशक्त बनाती है",
  "whySubtitle1": "हम सीधे इंटरकनेक्ट्स, सक्रिय रूट मॉनिटरिंग और विस्तृत डिलीवरी रिपोर्टिंग के साथ अंतरराष्ट्रीय एसएमएस टर्मिनेशन प्रदान करते हैं।",
  "whySubtitle2": "एग्रीगेटर्स, ऑपरेटरों और उद्यमों के लिए डिज़ाइन किया गया जिन्हें बड़े पैमाने पर स्थिरता की आवश्यकता होती है।",
  "whyCards": [
    {
      "title": "वैश्विक बाज़ारों तक पहुंच",
      "desc": "उन रणनीतिक गंतव्यों तक संदेश पहुंच बनाएं जिनकी आपके ग्राहकों को आवश्यकता है।",
      "footer": "वैश्विक एसएमएस रूटिंग"
    },
    {
      "title": "प्रत्यक्ष कैरियर इंटरकनेक्ट्स",
      "desc": "उच्च गुणवत्ता वाले सीधे नेटवर्क लिंक्स और प्रबंधित समझौतों के साथ अनावश्यक हॉप्स को कम करें।",
      "footer": "कैरियर-ग्रेड गुणवत्ता"
    },
    {
      "title": "वास्तविक समय निगरानी",
      "desc": "पारदर्शी टेलीमेट्री के साथ डिलीवरी दर, DLR कोड और ट्रांसमिशन विलंबता की निगरानी करें।",
      "footer": "परिचालन दृश्यता"
    },
    {
      "title": "व्यापक स्केलेबिलिटी",
      "desc": "लोचदार वास्तुकला के साथ प्रतिदिन लाखों संदेशों का निर्बाध और स्थिर प्रवाह सुनिश्चित करें।",
      "footer": "उद्यम-स्तरीय विश्वसनीयता"
    }
  ],
  "capabilitiesBadge": "प्रमुख क्षमताएं",
  "capabilitiesTitle": "व्यावसायिक संदेश ट्रैफ़िक के लिए विशेष रूप से डिज़ाइन किया गया",
  "capabilitiesDesc": "हमारी थोक दूरसंचार सेवाओं का सूट सिद्ध विश्वसनीयता के साथ A2P ट्रैफ़िक के संपूर्ण जीवनचक्र को संभालता है।",
  "designSolution": "समाधान डिज़ाइन करें",
  "solutionNote": "रूट और मूल्य निर्धारण को अनुकूलित करने के लिए हमारे इंजीनियरों से संपर्क करें।",
  "capabilities": [
    {
      "tag": "व्यावसायिक मैसेजिंग",
      "title": "थोक A2P एसएमएस टर्मिनेशन",
      "desc": "प्रमाणीकरण, सूचनाओं और सहमति-आधारित जुड़ाव के लिए B2C संदेश सुरक्षित रूप से भेजें।"
    },
    {
      "tag": "वैश्विक कनेक्टिविटी",
      "title": "अंतरराष्ट्रीय रूटिंग कवरेज",
      "desc": "प्रत्येक बाज़ार के अनुकूल विशिष्ट रूट प्रोफाइल के साथ दुनिया भर के मोबाइल ऑपरेटरों तक पहुंचें।"
    },
    {
      "tag": "मानक प्रोटोकॉल",
      "title": "SMPP और API एकीकरण",
      "desc": "उच्च-प्रदर्शन SMPP v3.4 लिंक्स या आधुनिक REST APIs के माध्यम से आसानी से एकीकृत हों।"
    },
    {
      "tag": "डिलीवरी विश्वसनीयता",
      "title": "इंटेलिजेंट रूट प्रबंधन",
      "desc": "वास्तविक समय डिलीवरी प्रदर्शन मेट्रिक्स के आधार पर सर्वोत्तम मार्ग का चयन करने वाली अनुकूली रूटिंग।"
    },
    {
      "tag": "नियामक अनुपालन",
      "title": "प्रेषक आईडी और पंजीकरण नीतियां",
      "desc": "अल्फ़ान्यूमेरिक सेंडर आईडी, शॉर्ट कोड और स्थानीय विनियामक दिशानिर्देशों के लिए विशेषज्ञ मार्गदर्शन।"
    },
    {
      "tag": "उन्नत रिपोर्टिंग",
      "title": "डिलीवरी रसीदें और टेलीमेट्री",
      "desc": "त्वरित परिचालन निदान और विश्लेषण के लिए विस्तृत DLR रसीदें और प्रदर्शन रिपोर्ट।"
    }
  ],
  "howItWorksBadge": "यह कैसे कार्य करता है",
  "howItWorksTitle": "तीन सरल चरणों में एकीकरण से वैश्विक पहुंच तक",
  "howItWorksSubtitle": "आपकी अंतरराष्ट्रीय एसएमएस कनेक्टिविटी को तेज़ी से सक्षम करने के लिए एक संरचित प्रक्रिया।",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "अपना प्लेटफ़ॉर्म कनेक्ट करें",
      "desc": "अपने प्रेषक और गंतव्य सेटिंग्स के साथ सहमत SMPP या API कनेक्शन के माध्यम से A2P संदेश सबमिट करें।",
      "note": "आपका ऐप्लिकेशन → iNet"
    },
    {
      "step": "02",
      "title": "बुद्धिमान रूटिंग",
      "desc": "हम आपके ट्रैफ़िक प्रोफ़ाइल के लिए सबसे उपयुक्त कैरियर लिंक के माध्यम से प्रत्येक संदेश को रूट करते हैं।",
      "note": "कैरियर रूटिंग इंजन"
    },
    {
      "step": "03",
      "title": "रिपोर्ट और अनुकूलन",
      "desc": "वास्तविक समय में डिलीवरी रसीदें प्राप्त करें और निरंतर तकनीकी सहायता के साथ वॉल्यूम का विस्तार करें।",
      "note": "गंतव्य नेटवर्क द्वारा सत्यापित DLR"
    }
  ],
  "networkBadge": "नेटवर्क और कवरेज",
  "networkTitle": "प्रत्येक गंतव्य के लिए कैरियर-ग्रेड कनेक्टिविटी",
  "networkDesc": "उच्च उपलब्धता और विश्वसनीयता के लिए अनुकूलित अवसंरचना के साथ विश्वभर में 1,000+ मोबाइल नेटवर्क तक पहुंचें।",
  "networkBullets": [
    "अग्रणी वैश्विक ऑपरेटरों के साथ सीधे और प्रबंधित इंटरकनेक्ट्स",
    "GSM-7 और बहुभाषी यूनिकोड एन्कोडिंग का पूर्ण समर्थन",
    "भौगोलिक रूप से वितरित रिडंडेंट और सुरक्षित अवसंरचना",
    "24/7 नेटवर्क संचालन केंद्र (NOC) तकनीकी निगरानी"
  ],
  "networkStats": [
    {
      "val": "कैरियर-आधारित",
      "label": "कनेक्टिविटी रणनीति"
    },
    {
      "val": "बाज़ार-सचेत",
      "label": "रूटिंग एवं सेंडर नीतियां"
    }
  ],
  "networkBadgeOverlay": {
    "title": "मजबूत ऑपरेटर संबंधों से संचालित",
    "sub": "सीधे मार्ग • प्रबंधित इंटरकनेक्ट्स"
  },
  "networkFooterNote": "रूट उपलब्धता और प्रेषक नीतियां स्थानीय विनियामक आवश्यकताओं के अनुसार भिन्न हो सकती हैं।",
  "momentsBadge": "उपयोग के मामले",
  "momentsTitle": "महत्वपूर्ण व्यावसायिक बातचीत के लिए निर्मित",
  "momentsSubtitle": "अंतिम उपयोगकर्ता अनुभव को परिभाषित करने वाले समय-संवेदनशील संदेशों की समय पर डिलीवरी सुनिश्चित करें।",
  "moments": [
    {
      "title": "प्रमाणीकरण एवं 2FA",
      "desc": "प्राथमिकता A2P एसएमएस के साथ सुरक्षित लॉगिन, ओटीपी सत्यापन और वित्तीय लेनदेन को सक्षम करें।",
      "footer": "ओटीपी और त्वरित सत्यापन"
    },
    {
      "title": "लेनदेन संबंधी सूचनाएं",
      "desc": "बैंकिंग अलर्ट, ऑर्डर पुष्टिकरण और महत्वपूर्ण खाता परिवर्तनों को तुरंत डिलीवर करें।",
      "footer": "वास्तविक समय अलर्ट"
    },
    {
      "title": "सेवा अपडेट और अनुस्मारक",
      "desc": "अपॉइंटमेंट रिमाइंडर, डिलीवरी अपडेट और आपातकालीन सेवा सूचनाएं समय पर भेजें।",
      "footer": "परिचालन सूचनाएं"
    },
    {
      "title": "सहमति-आधारित सहभागिता",
      "desc": "स्थानीय अनुपालन का पालन करते हुए सक्रिय ग्राहकों तक सूचनात्मक व प्रचार संदेश पहुंचाएं।",
      "footer": "सहमति संदेश सेवा"
    }
  ],
  "intelligenceBadge": "डिलीवरी इंटेलिजेंस",
  "intelligenceTitle": "प्रत्येक संदेश पर संपूर्ण दृश्यता और नियंत्रण",
  "intelligenceDesc": "विस्तृत ट्रैफ़िक मेट्रिक्स, त्रुटि कोड विश्लेषण और सक्रिय निगरानी के साथ सूचित निर्णय लें।",
  "intelligenceBullets": [
    "प्रत्येक व्यक्तिगत संदेश के लिए पूर्ण डिलीवरी स्थिति ट्रैकिंग",
    "रूट में व्यवधान होने पर स्वचालित पथ स्विचिंग और अतिरेक",
    "असामान्य विलंबता और वॉल्यूम उतार-चढ़ाव के लिए त्वरित अलर्ट",
    "सुलह और ऑडिट के लिए पारदर्शी ऐतिहासिक लॉग"
  ],
  "intelligenceFootnote": "सभी टेलीमेट्री मेट्रिक्स और नेटवर्क स्थिति कोड वास्तविक समय DLRs द्वारा प्रदान किए जाते हैं।",
  "messageLogCard": {
    "title": "संदेश दृश्यता फ़ीड",
    "badge": "उदाहरणात्मक दृश्य",
    "tab1": "संदेश लॉग",
    "tab2": "मार्ग",
    "tab3": "गंतव्य",
    "colType": "संदेश प्रकार",
    "colState": "स्थिति",
    "colReceipt": "रसीद",
    "row1Type": "सत्यापन",
    "row1State": "वितरित",
    "row1Receipt": "पुष्टि प्राप्त",
    "row2Type": "ऑर्डर अपडेट",
    "row2State": "प्रगति पर",
    "row2Receipt": "लंबित",
    "row3Type": "सेवा अलर्ट",
    "row3State": "अस्वीकृत",
    "row3Receipt": "त्रुटि विवरण",
    "footerText": "प्रेषण से लेकर नेटवर्क पुष्टि तक प्रत्येक संदेश का अनुसरण करें।"
  },
  "protectionTitle": "ट्रैफ़िक सुरक्षा और धोखाधड़ी की रोकथाम",
  "protectionBadge": "नेटवर्क अखंडता",
  "protectionCards": [
    {
      "title": "असामान्य ट्रैफ़िक जांच",
      "desc": "असामान्य पैटर्न की तुरंत पहचान करें और एसएमएस पंपिंग व स्पैम हमलों को कम करने के लिए स्वचालित नियंत्रण लागू करें।"
    },
    {
      "title": "नियामक अनुपालन और ब्लॉकलिस्ट",
      "desc": "ब्रांड की प्रतिष्ठा और परिचालन सुरक्षा बनाए रखने के लिए स्थानीय नियमों और ब्लॉकलिस्ट का कड़ाई से पालन करें।"
    },
    {
      "title": "सेंडर आईडी स्पूफ़िंग सुरक्षा",
      "desc": "समर्थित बाज़ारों में अनधिकृत प्रेषक प्रतिरूपण से अल्फ़ान्यूमेरिक पहचानकर्ताओं की रक्षा करें।"
    }
  ],
  "timelineBadge": "एकीकरण योजना",
  "timelineTitle": "स्पष्ट और त्वरित 4-चरणीय एकीकरण",
  "timelineSubtitle": "बिना किसी बाधा के आपके प्लेटफ़ॉर्म को कनेक्ट करने की सिद्ध कार्यप्रणाली।",
  "timelineSteps": [
    {
      "step": "1",
      "title": "आवश्यकताओं का विश्लेषण",
      "desc": "गंतव्य देशों, अनुमानित वॉल्यूम, प्रेषक पहचान और व्यावसायिक प्राथमिकताओं की पुष्टि करें।"
    },
    {
      "step": "2",
      "title": "तकनीकी सेटअप",
      "desc": "SMPP/API क्रेडेंशियल्स का प्रावधान और सुरक्षित IP श्वेतसूचीकरण कॉन्फ़िगर करें।"
    },
    {
      "step": "3",
      "title": "कनेक्टिविटी परीक्षण",
      "desc": "वास्तविक वातावरण में विलंबता, एन्कोडिंग और सटीक DLR रसीदों का पूर्ण सत्यापन करें।"
    },
    {
      "step": "4",
      "title": "लाइव उत्पादन में प्रवेश",
      "desc": "विशेषज्ञ नेटवर्क इंजीनियरों की निगरानी में व्यावसायिक ट्रैफ़िक को सक्रिय करें।"
    }
  ],
  "integrationPlan": {
    "title": "आपका थोक एसएमएस कनेक्शन",
    "planBadge": "एकीकरण योजना",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P संदेश ट्रैफ़िक",
    "formats": "GSM-7 / बहुभाषी यूनिकोड",
    "feedback": "वास्तविक समय डिलीवरी रसीदें (DLR)",
    "senderSetup": "बाज़ार-विशिष्ट विन्यास",
    "check1": "क्रेडेंशियल्स और कनेक्टिविटी सत्यापन",
    "check2": "प्रेषक पहचान और रसीद परीक्षण",
    "discussNote": "अपने प्लेटफ़ॉर्म के लिए सबसे उपयुक्त इंटरफ़ेस का चयन करने के लिए हमसे संपर्क करें।",
    "discussBtn": "एकीकरण पर चर्चा करें"
  },
  "faqBadge": "अक्सर पूछे जाने वाले प्रश्न",
  "faqTitle": "थोक एसएमएस के संबंध में महत्वपूर्ण प्रश्न",
  "faqSubtitle": "कनेक्टिविटी, प्रोटोकॉल और टर्मिनेशन से जुड़े सामान्य प्रश्नों के स्पष्ट उत्तर।",
  "faqs": [
    {
      "q": "थोक एसएमएस सेवा किसके लिए बनाई गई है?",
      "a": "टेलीकॉम कैरियर्स, एसएमएस एग्रीगेटर्स, CPaaS प्रदाताओं और बड़े पैमाने पर A2P मैसेजिंग की आवश्यकता वाले उद्यमों के लिए।"
    },
    {
      "q": "कौन से इंटरफ़ेस और प्रोटोकॉल समर्थित हैं?",
      "a": "हम मानक उच्च-थ्रूपुट SMPP v3.4 प्रोटोकॉल और वेबहुक सूचनाओं के साथ सुरक्षित आधुनिक REST API दोनों का समर्थन करते हैं।"
    },
    {
      "q": "अल्फ़ान्यूमेरिक सेंडर आईडी पंजीकरण का प्रबंधन कैसे किया जाता है?",
      "a": "हम गंतव्य देश और मोबाइल ऑपरेटरों के विनियामक नियमों के अनुसार सेंडर आईडी पंजीकरण में पूर्ण सहायता प्रदान करते हैं।"
    },
    {
      "q": "संदेश डिलीवरी पर किस स्तर की दृश्यता मिलती है?",
      "a": "हम मानकीकृत त्रुटि कोड और पारदर्शी नेटवर्क मेट्रिक्स के साथ रीयल-टाइम DLR डिलीवरी रसीदें प्रदान करते हैं।"
    }
  ],
  "ctaBadge": "आज ही प्रारंभ करें",
  "ctaTitle": "क्या आप अपनी वैश्विक एसएमएस कनेक्टिविटी को अनुकूलित करने के लिए तैयार हैं?",
  "ctaSubtitle": "अपने प्राथमिक गंतव्यों के लिए एक दर्जी-निर्मित रूटिंग रणनीति तैयार करने हेतु हमारे विशेषज्ञों से संपर्क करें।",
  "contactUs": "विशेषज्ञ से संपर्क करें",
  "ctaFootnote": "ऑपरेटरों और उद्यमों के लिए समर्पित परीक्षण परिवेश और ट्रैफ़िक विश्लेषण परामर्श उपलब्ध है।"
};

const ar: WholesaleMessageTranslation = {
  "heroBadge": "رسائل الجملة القصيرة • البنية التحتية العالمية للرسائل",
  "heroTitle": "كل رسالة، متصلة بثقة مطلقة.",
  "heroDesc": "خدمة رسائل قصيرة بالجملة بمستوى المشغلين مصممة لشركات الاتصالات ومجمعي الرسائل والمنصات الرقمية. اربط حركة A2P الخاصة بك بمسارات دولية موثوقة مع اتصالات مباشرة ورؤية تسليم شفافة.",
  "talkToExpert": "تحدث مع خبير",
  "exploreCapabilities": "استكشف الإمكانيات",
  "stats": {
    "routing": "توجيه عالمي",
    "routingLabel": "وصول يقوده السوق",
    "traffic": "رسائل A2P",
    "trafficLabel": "حركة مرور حيوية للأعمال",
    "insights": "تحليلات التسليم",
    "insightsLabel": "تحكم تشغيلي متكامل"
  },
  "heroLiveBadge1": {
    "title": "اتصال A2P",
    "label": "منصتك. وصول عالمي موثوق."
  },
  "heroLiveBadge2": {
    "title": "رؤية في كل مرحلة",
    "sub": "إرسال • توجيه • إشعار"
  },
  "whyBadge": "لماذا تختار INET WHOLESALE SMS",
  "whyTitle": "بنية تحتية للرسائل تعزز كل تفاعل أعمال",
  "whySubtitle1": "نوفر إنهاءً عالمياً للرسائل القصيرة مدعوماً باتصالات مباشرة مع المشغلين، ومراقبة نشطة للمسارات، وتقارير تسليم مفصلة.",
  "whySubtitle2": "مصمم للمجمعين والمشغلين والمؤسسات التي تتطلب الاستقرار والموثوقية على نطاق واسع.",
  "whyCards": [
    {
      "title": "الوصول إلى أسواق استراتيجية",
      "desc": "بناء تغطية دولية للرسائل للوجهات الحيوية التي يحتاجها عملاؤك.",
      "footer": "توجيه عالمي للرسائل القصيرة"
    },
    {
      "title": "اتصالات بينية مباشرة مع المشغلين",
      "desc": "تقليل القفزات غير الضرورية من خلال روابط شبكة مباشرة واتفاقيات ربط عالية الجودة.",
      "footer": "جودة اتصالات معتمدة"
    },
    {
      "title": "مراقبة مباشرة وفورية",
      "desc": "متابعة معدلات التسليم وأكواد الإشعار DLR وزمن الانتقال بشفافية تشغيلية تامة.",
      "footer": "رؤية تشغيلية واضحة"
    },
    {
      "title": "سعة استيعابية فائقة",
      "desc": "نقل ملايين الرسائل يومياً بهندسة مرنة ومقاومة للأعطال لتلبية متطلبات النمو السريع.",
      "footer": "أداء مؤسسي موثوق"
    }
  ],
  "capabilitiesBadge": "القدرات الأساسية",
  "capabilitiesTitle": "مصمم لحركة الرسائل المؤسسية الحيوية",
  "capabilitiesDesc": "مجموعة خدمات الجملة لدينا تغطي دورة حياة رسائل A2P بالكامل بموثوقية مثبتة.",
  "designSolution": "تصميم الحل",
  "solutionNote": "تحدث مع مهندسينا لتحسين المسارات والأسعار بما يناسب احتياجاتك.",
  "capabilities": [
    {
      "tag": "رسائل الأعمال",
      "title": "إنهاء رسائل A2P بالجملة",
      "desc": "تمرير رسائل الشركات إلى المستهلكين للمصادقة والإشعارات والتفاعل المصرح به."
    },
    {
      "tag": "اتصال دولي",
      "title": "توجيه عالمي للمسارات",
      "desc": "الوصول إلى مشغلي شبكات الهاتف المحمول عالمياً مع ملفات توجيه متوافقة محلياً."
    },
    {
      "tag": "بروتوكولات قياسية",
      "title": "تكامل SMPP وواجهات API",
      "desc": "اتصال عبر روابط SMPP v3.4 عالية الكفاءة أو واجهات برمجة REST الحديثة."
    },
    {
      "tag": "موثوقية التسليم",
      "title": "إدارة ذكية للمسارات",
      "desc": "توجيه متكيف يختار المسار الأمثل استناداً إلى أداء التسليم في الوقت الفعلي."
    },
    {
      "tag": "الامتثال التنظيمي",
      "title": "هوية المرسل والسياسات المحلية",
      "desc": "دعم متخصص لتسجيل هوية المرسل الأبجدية الرقمية والأكواد القصيرة وفقاً للقوانين."
    },
    {
      "tag": "تقارير متقدمة",
      "title": "إشعارات التسليم والقياس",
      "desc": "تقارير استلام تفصيلية DLR وتحليلات شاملة للتشخيص السريع للأداء."
    }
  ],
  "howItWorksBadge": "كيف يعمل النظام",
  "howItWorksTitle": "من التكامل إلى الوصول العالمي في ثلاث خطوات",
  "howItWorksSubtitle": "عملية منظمة لتفعيل وتوسيع اتصالك الدولي بالرسائل القصيرة بكل سهولة.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "ربط منصتك",
      "desc": "أرسل رسائل A2P عبر اتصال SMPP أو API متفق عليه مع إعدادات المرسل والوجهة.",
      "note": "تطبيقك → iNet"
    },
    {
      "step": "02",
      "title": "توجيه ذكي وفوري",
      "desc": "نقوم بتوجيه كل حزمة عبر مسار المشغل الأنسب لملف حركة المرور الخاص بك.",
      "note": "محرك توجيه المشغلين"
    },
    {
      "step": "03",
      "title": "التقارير والتحسين",
      "desc": "استلم إشعارات التسليم في الوقت الفعلي ووسع نطاق حركة المرور مع دعم فني مستمر.",
      "note": "إشعار تسليم مؤكد من الشبكة"
    }
  ],
  "networkBadge": "الشبكة والتغطية",
  "networkTitle": "اتصال بمستوى المشغلين لكل وجهة",
  "networkDesc": "الوصول إلى أكثر من 1000 شبكة هاتف محمول عالمياً مع بنية تحتية محسنة لتحقيق أعلى جاهزية.",
  "networkBullets": [
    "اتصالات مباشرة ومدارة مع كبرى شركات الاتصالات العالمية",
    "دعم كامل لترميز GSM-7 والترميز العالمي المتعدد Unicode",
    "بنية تحتية موزعة جغرافياً مع توفير مسارات احتياطية تلقائية",
    "دعم فني مستمر 24/7 من مركز عمليات الشبكة (NOC)"
  ],
  "networkStats": [
    {
      "val": "بقيادة المشغلين",
      "label": "استراتيجية الربط"
    },
    {
      "val": "مراعاة السوق",
      "label": "سياسات التوجيه وهوية المرسل"
    }
  ],
  "networkBadgeOverlay": {
    "title": "متصل عبر علاقات وثيقة مع المشغلين",
    "sub": "مسارات مباشرة • نقاط ربط مدارة"
  },
  "networkFooterNote": "تخضع مسارات الإرسال وسياسات هوية المرسل للمتطلبات التنظيمية المحلية في كل دولة.",
  "momentsBadge": "حالات الاستخدام",
  "momentsTitle": "مصمم لتفاعلات الأعمال عالية الأهمية",
  "momentsSubtitle": "ضمان تسليم الرسائل الحساسة للوقت والتي تحدد جودة تجربة العميل.",
  "moments": [
    {
      "title": "المصادقة والأمان 2FA",
      "desc": "دعم تسجيل الدخول الآمن ورموز OTP وتأكيد المعاملات عبر رسائل A2P ذات الأولوية القصوى.",
      "footer": "OTP والتحقق الفوري"
    },
    {
      "title": "الإشعارات المالية والمعاملات",
      "desc": "إرسال التنبيهات المصرفية وتأكيدات الشراء وتحديثات الحساب بشكل فوري وموثوق.",
      "footer": "تنبيهات فورية"
    },
    {
      "title": "تحديثات الخدمة والتذكيرات",
      "desc": "تسليم مواعيد الحجز وتحديثات الشحن وتنبيهات الصيانة الطارئة في الوقت المناسب.",
      "footer": "إشعارات تشغيلية"
    },
    {
      "title": "تفاعل العملاء المصرح به",
      "desc": "التواصل مع العملاء المشتركين عبر رسائل إخبارية وترويجية متوافقة مع القوانين.",
      "footer": "رسائل بموافقة مسبقة"
    }
  ],
  "intelligenceBadge": "ذكاء التسليم",
  "intelligenceTitle": "رؤية شاملة وتحكم دقيق في كل رسالة",
  "intelligenceDesc": "اتخذ قرارات مدروسة مدعومة بتحليلات حركة المرور وأكواد الحالة والمراقبة الاستباقية.",
  "intelligenceBullets": [
    "تتبع كامل لحالة تسليم كل رسالة بشكل فردي",
    "تبديل تلقائي للمسار عند حدوث أي اضطراب في الشبكة",
    "تنبيهات تشغيلية فورية عند وجود تأخير غير معتاد",
    "سجلات تدقيق مفصلة لحل النزاعات والمطابقة الفنية"
  ],
  "intelligenceFootnote": "تُنقل جميع بيانات القياس وأكواد الشبكة في الوقت الفعلي عبر إشعارات DLR.",
  "messageLogCard": {
    "title": "سجل متابعة الرسائل",
    "badge": "عرض توضيحي",
    "tab1": "سجل الرسائل",
    "tab2": "المسارات",
    "tab3": "الوجهات",
    "colType": "نوع الرسالة",
    "colState": "الحالة",
    "colReceipt": "الإشعار",
    "row1Type": "مصادقة",
    "row1State": "تم التسليم",
    "row1Receipt": "مستلم بنجاح",
    "row2Type": "تحديث طلب",
    "row2State": "قيد الإرسال",
    "row2Receipt": "معلق",
    "row3Type": "تنبيه خدمة",
    "row3State": "مرفوض",
    "row3Receipt": "تفاصيل الخطأ",
    "footerText": "متابعة دقيقة لكل رسالة من لحظة الإرسال حتى تأكيد الشبكة."
  },
  "protectionTitle": "حماية حركة المرور ومكافحة الاحتيال",
  "protectionBadge": "سلامة الشبكة",
  "protectionCards": [
    {
      "title": "الكشف عن الحركة غير الطبيعية",
      "desc": "مراقبة الأنماط غير العادية وتطبيق ضوابط فورية للمساعدة في منع ضخ الرسائل (SMS Pumping) والبريد العشوائي."
    },
    {
      "title": "الامتثال وقوائم الحظر التلقائية",
      "desc": "إدارة قوائم عدم الإرسال وتطبيق القواعد المحلية لحماية سمعة العلامة التجارية واستقرار المسارات."
    },
    {
      "title": "حماية هوية المرسل (Sender ID)",
      "desc": "حماية الهويات الأبجدية الرقمية من التزوير والانتحال في الأسواق المعتمدة."
    }
  ],
  "timelineBadge": "خطة التكامل",
  "timelineTitle": "تكامل واضح ومدروس في 4 خطوات",
  "timelineSubtitle": "منهجية معتمدة لربط منصتك دون أي تعقيدات تقنية.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "تحديد النطاق والمتطلبات",
      "desc": "تأكيد الوجهات المستهدفة، أحجام الرسائل المتوقعة، متطلبات هوية المرسل والأولويات التجارية."
    },
    {
      "step": "2",
      "title": "الإعداد الفني",
      "desc": "توفير بيانات اعتماد SMPP أو API وإعداد القوائم البيضاء لعناوين IP المعتمدة."
    },
    {
      "step": "3",
      "title": "اختبار الاتصال الميداني",
      "desc": "التحقق من زمن الانتقال وترميز النصوص واستلام إشعارات التسليم بدقة على وجهات حقيقية."
    },
    {
      "step": "4",
      "title": "الإطلاق الفعلي",
      "desc": "تفعيل حركة الرسائل التجارية مع مراقبة مباشرة من مهندسي الشبكة المتخصصين."
    }
  ],
  "integrationPlan": {
    "title": "اتصالك للرسائل بالجملة",
    "planBadge": "خطة التكامل الفني",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "رسائل A2P",
    "formats": "GSM-7 / متعدد اللغات Unicode",
    "feedback": "إشعارات التسليم المباشرة (DLR)",
    "senderSetup": "وفق متطلبات السوق المحلي",
    "check1": "فحص بيانات الاعتماد واختبار الاتصال",
    "check2": "التحقق من هوية المرسل وإشعارات التسليم",
    "discussNote": "تواصل معنا لاختيار واجهة الربط الأنسب لمنصتك.",
    "discussBtn": "مناقشة التكامل"
  },
  "faqBadge": "الأسئلة الشائعة",
  "faqTitle": "إجابات واضحة حول خدمة رسائل الجملة",
  "faqSubtitle": "كل ما تحتاج لمعرفته حول الاتصال والبروتوكولات وإنهاء الحركة.",
  "faqs": [
    {
      "q": "لمن صُممت خدمة الرسائل القصيرة بالجملة؟",
      "a": "لشركات الاتصالات ومجمعي الرسائل ومنصات CPaaS والمؤسسات الكبرى التي تحتاج إلى اتصال دولي مباشر وموثوق لحركة A2P."
    },
    {
      "q": "ما هي البروتوكولات المدعومة للربط؟",
      "a": "ندعم بروتوكول SMPP v3.4 القياسي عالي السرعة، بالإضافة إلى واجهات REST API الحديثة مع إشعارات Webhook فورية."
    },
    {
      "q": "كيف تتم مساعدة العملاء في تسجيل هوية المرسل (Sender ID)؟",
      "a": "يقوم فريق الامتثال لدينا بتسهيل تقديم المستندات المطلوبة وتسجيل الهويات لدى المشغلين وفقاً للوائح كل بلد."
    },
    {
      "q": "ما مدى الشفافية المتوفرة حول تسليم الرسائل؟",
      "a": "نوفر إشعارات تسليم DLR لحظية مع أكواد أخطاء قياسية وتحليلات أداء شاملة عبر المنصة أو واجهة API."
    }
  ],
  "ctaBadge": "ابدأ اليوم",
  "ctaTitle": "هل أنت مستعد لتحسين اتصالك برسائل الجملة القصيرة؟",
  "ctaSubtitle": "تواصل مع خبرائنا في الاتصالات لتصميم مسار مخصص يلبي احتياجات وجهاتك الاستراتيجية.",
  "contactUs": "تواصل مع خبير",
  "ctaFootnote": "تتوفر استشارات مخصصة للمسارات وتحليل حركة المرور للمشغلين والمؤسسات الكبرى."
};

const fr: WholesaleMessageTranslation = {
  "heroBadge": "SMS DE GROS • INFRASTRUCTURE MONDIALE DE MESSAGERIE",
  "heroTitle": "Chaque message, transmis en toute confiance.",
  "heroDesc": "SMS de gros de niveau opérateur pour les télécoms, agrégateurs et plateformes de messagerie. Connectez votre trafic A2P à des routes mondiales avec interconnexion directe et visibilité complète.",
  "talkToExpert": "Parler à un expert",
  "exploreCapabilities": "Explorer les fonctionnalités",
  "stats": {
    "routing": "Routage mondial",
    "routingLabel": "Couverture ciblée",
    "traffic": "Messagerie A2P",
    "trafficLabel": "Trafic critique d'entreprise",
    "insights": "Analyse des livraisons",
    "insightsLabel": "Contrôle opérationnel"
  },
  "heroLiveBadge1": {
    "title": "Connectivité A2P",
    "label": "Votre plateforme. Portée mondiale."
  },
  "heroLiveBadge2": {
    "title": "Visibilité à chaque étape",
    "sub": "Envoi • Route • Accusé"
  },
  "whyBadge": "POURQUOI CHOISIR INET WHOLESALE SMS",
  "whyTitle": "Une infrastructure de messagerie pensée pour valoriser chaque échange",
  "whySubtitle1": "Nous proposons une terminaison SMS internationale appuyée par des interconnexions directes, une surveillance active des routes et des rapports de livraison détaillés.",
  "whySubtitle2": "Conçu pour les agrégateurs, opérateurs et entreprises nécessitant une fiabilité éprouvée à grande échelle.",
  "whyCards": [
    {
      "title": "Couverture des marchés mondiaux",
      "desc": "Développez une portée internationale pour les destinations stratégiques dont vos clients ont besoin.",
      "footer": "Routage SMS mondial"
    },
    {
      "title": "Interconnexions directes opérateurs",
      "desc": "Limitez les intermédiaires grâce à des liaisons directes de haute qualité et des accords gérés.",
      "footer": "Qualité de niveau opérateur"
    },
    {
      "title": "Surveillance en temps réel",
      "desc": "Suivez les taux de livraison, les codes DLR et la latence avec une télémétrie transparente.",
      "footer": "Visibilité opérationnelle"
    },
    {
      "title": "Haute capacité et évolutivité",
      "desc": "Acheminez des millions de messages par jour grâce à une architecture résiliente et extensible.",
      "footer": "Performance d'entreprise"
    }
  ],
  "capabilitiesBadge": "CAPACITÉS CLÉS",
  "capabilitiesTitle": "Conçu pour le trafic de messagerie d'entreprise",
  "capabilitiesDesc": "Notre suite de services de gros prend en charge l'intégralité du cycle de vie du trafic A2P.",
  "designSolution": "Concevoir une solution",
  "solutionNote": "Échangez avec nos ingénieurs pour optimiser les routes et la tarification.",
  "capabilities": [
    {
      "tag": "Messagerie professionnelle",
      "title": "Terminaison SMS A2P de gros",
      "desc": "Acheminez les SMS B2C pour l'authentification, les notifications d'urgence et l'engagement client consenti."
    },
    {
      "tag": "Connectivité mondiale",
      "title": "Routage international",
      "desc": "Accédez aux opérateurs mobiles du monde entier avec des profils adaptés à chaque marché local."
    },
    {
      "tag": "Protocoles standards",
      "title": "Intégration SMPP et API",
      "desc": "Connectez-vous via des liaisons SMPP v3.4 à haut débit ou des API REST modernes et documentées."
    },
    {
      "tag": "Fiabilité d'acheminement",
      "title": "Gestion intelligente des routes",
      "desc": "Routage adaptatif sélectionnant la meilleure liaison selon les performances de livraison constatées."
    },
    {
      "tag": "Conformité réglementaire",
      "title": "Politiques d'expéditeur et conformité",
      "desc": "Accompagnement expert pour l'enregistrement d'identifiants Sender ID et de codes courts."
    },
    {
      "tag": "Rapports précis",
      "title": "Accusés de réception et télémétrie",
      "desc": "DLR détaillés et tableaux de bord pour un diagnostic opérationnel rapide et sans équivoque."
    }
  ],
  "howItWorksBadge": "COMMENT ÇA MARCHE",
  "howItWorksTitle": "De l'intégration à la portée mondiale en trois étapes",
  "howItWorksSubtitle": "Un processus fluide pour activer et étendre votre connectivité SMS internationale.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Connectez votre plateforme",
      "desc": "Transmettez vos messages A2P via une liaison SMPP ou API configurée selon vos paramètres.",
      "note": "Votre système → iNet"
    },
    {
      "step": "02",
      "title": "Routage intelligent",
      "desc": "Chaque message est dirigé vers la liaison opérateur optimale pour votre profil de trafic.",
      "note": "Moteur de routage opérateur"
    },
    {
      "step": "03",
      "title": "Rapports et optimisation",
      "desc": "Recevez les accusés de réception en direct et développez vos volumes avec un support continu.",
      "note": "DLR validé par le réseau destinataire"
    }
  ],
  "networkBadge": "RÉSEAU ET COUVERTURE",
  "networkTitle": "Connectivité opérateur vers chaque destination",
  "networkDesc": "Accédez à plus de 1 000 réseaux mobiles dans le monde grâce à une infrastructure haute disponibilité.",
  "networkBullets": [
    "Interconnexions directes et gérées avec les principaux opérateurs télécoms",
    "Prise en charge intégrale des encodages GSM-7 et Unicode international",
    "Infrastructure redondante géographiquement distribuée",
    "Supervision continue 24/7 par notre centre des opérations réseau (NOC)"
  ],
  "networkStats": [
    {
      "val": "Partenariats directs",
      "label": "Stratégie de connectivité"
    },
    {
      "val": "Conformité marché",
      "label": "Politiques de route et d'expéditeur"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Soutenu par des relations opérateurs fortes",
    "sub": "Routes directes • Interconnexions gérées"
  },
  "networkFooterNote": "La disponibilité des routes et les règles d'expéditeur dépendent des réglementations locales en vigueur.",
  "momentsBadge": "CAS D'USAGE",
  "momentsTitle": "Conçu pour les interactions critiques",
  "momentsSubtitle": "Garantissez la remise ponctuelle des messages qui forgent la confiance des utilisateurs.",
  "moments": [
    {
      "title": "Authentification et 2FA",
      "desc": "Sécurisez les connexions, codes de vérification OTP et validations de transactions avec du SMS A2P prioritaire.",
      "footer": "OTP et vérification instantanée"
    },
    {
      "title": "Notifications transactionnelles",
      "desc": "Transmettez instantanément alertes bancaires, confirmations de commande et changements de statut.",
      "footer": "Alertes critiques en temps réel"
    },
    {
      "title": "Rappels et alertes de service",
      "desc": "Envoyez rappels de rendez-vous, étapes de livraison et notifications de maintenance à temps.",
      "footer": "Notifications opérationnelles"
    },
    {
      "title": "Engagement client consenti",
      "desc": "Communiquez avec vos clients abonnés via des messages informatifs respectant le consentement.",
      "footer": "Messagerie conforme opt-in"
    }
  ],
  "intelligenceBadge": "INTELLIGENCE DE LIVRAISON",
  "intelligenceTitle": "Visibilité complète et contrôle sur chaque message",
  "intelligenceDesc": "Pilotez vos flux avec des indicateurs précis, une analyse des codes retour et une surveillance proactive.",
  "intelligenceBullets": [
    "Suivi du cycle de vie complet de chaque message individuel",
    "Bascule automatique en cas d'instabilité sur une liaison",
    "Alertes en temps réel sur les variations inhabituelles de latence",
    "Historique d'audit détaillé pour la réconciliation et le support"
  ],
  "intelligenceFootnote": "Toutes les métriques et codes d'état sont renvoyés en temps réel via des accusés DLR.",
  "messageLogCard": {
    "title": "Suivi des messages en direct",
    "badge": "VUE ILLUSTRATIVE",
    "tab1": "Journal",
    "tab2": "Routes",
    "tab3": "Destinations",
    "colType": "TYPE DE MESSAGE",
    "colState": "ÉTAT",
    "colReceipt": "ACCUSÉ",
    "row1Type": "Vérification",
    "row1State": "Livré",
    "row1Receipt": "Reçu",
    "row2Type": "Mise à jour commande",
    "row2State": "Soumis",
    "row2Receipt": "En attente",
    "row3Type": "Alerte service",
    "row3State": "Rejeté",
    "row3Receipt": "Détail erreur",
    "footerText": "Suivez chaque message de sa soumission jusqu'à la confirmation réseau."
  },
  "protectionTitle": "Sécurité et protection antifraude",
  "protectionBadge": "INTÉGRITÉ DU RÉSEAU",
  "protectionCards": [
    {
      "title": "Filtrage des anomalies de trafic",
      "desc": "Détectez les comportements atypiques et appliquez des filtres stricts contre le pompage SMS et le spam."
    },
    {
      "title": "Conformité et gestion des listes de blocage",
      "desc": "Gérez les désabonnements et respectez les règles locales pour protéger votre réputation d'expéditeur."
    },
    {
      "title": "Protection de l'identité de l'expéditeur",
      "desc": "Protégez vos Sender IDs contre l'usurpation d'identité sur les marchés compatibles."
    }
  ],
  "timelineBadge": "DÉPLOIEMENT",
  "timelineTitle": "Mise en service structurée en 4 phases",
  "timelineSubtitle": "Une méthode éprouvée pour connecter votre plateforme sans interruption d'activité.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Cadrage des besoins",
      "desc": "Confirmation des destinations cibles, des volumes prévisionnels, des identifiants et des conditions commerciales."
    },
    {
      "step": "2",
      "title": "Configuration technique",
      "desc": "Création des identifiants SMPP ou clés API et déclaration des listes blanches d'adresses IP."
    },
    {
      "step": "3",
      "title": "Validation et tests",
      "desc": "Vérification de la latence, de l'encodage et de la bonne réception des accusés DLR sur des réseaux réels."
    },
    {
      "step": "4",
      "title": "Mise en production",
      "desc": "Ouverture du trafic commercial avec surveillance rapprochée par nos ingénieurs télécoms."
    }
  ],
  "integrationPlan": {
    "title": "Votre interconnexion SMS de gros",
    "planBadge": "PLAN D'INTÉGRATION",
    "connection": "SMPP v3.4 / API REST",
    "traffic": "Messagerie A2P",
    "formats": "GSM-7 / Unicode international",
    "feedback": "Accusés de réception (DLR)",
    "senderSetup": "Spécifique selon le marché",
    "check1": "Validation des identifiants et connectivité",
    "check2": "Vérification de l'expéditeur et des accusés",
    "discussNote": "Contactez notre équipe pour définir l'interface la plus adaptée à vos systèmes.",
    "discussBtn": "Discuter de l'intégration"
  },
  "faqBadge": "QUESTIONS FRÉQUENTES",
  "faqTitle": "Tout ce qu'il faut savoir sur le SMS de gros",
  "faqSubtitle": "Des réponses transparentes sur nos interconnexions, protocoles et terminaisons.",
  "faqs": [
    {
      "q": "À qui s'adresse le service de SMS de gros ?",
      "a": "Aux opérateurs télécoms, agrégateurs SMS, plateformes CPaaS et entreprises générant de forts volumes A2P internationaux."
    },
    {
      "q": "Quelles interfaces de connexion sont supportées ?",
      "a": "Nous supportons le protocole standard haute performance SMPP v3.4 ainsi que des API REST modernes avec webhooks."
    },
    {
      "q": "Comment fonctionne l'enregistrement des Sender IDs alphanumériques ?",
      "a": "Notre équipe conformité vous assiste dans la déclaration auprès des opérateurs selon la réglementation propre à chaque pays."
    },
    {
      "q": "Quelle transparence fournissez-vous sur la livraison ?",
      "a": "Nous délivrons des accusés DLR en temps réel avec codes d'erreur normalisés et métriques de réseau détaillées."
    }
  ],
  "ctaBadge": "DÉMARRER MAINTENANT",
  "ctaTitle": "Prêt à optimiser votre connectivité SMS de gros ?",
  "ctaSubtitle": "Échangez avec nos spécialistes pour bâtir une stratégie de routage sur mesure pour vos marchés cibles.",
  "contactUs": "Contacter un spécialiste",
  "ctaFootnote": "Environnements de test dédiés et analyse de trafic disponibles pour opérateurs et entreprises."
};

const de: WholesaleMessageTranslation = {
  "heroBadge": "WHOLESALE SMS • GLOBALE NACHRICHTEN-INFRASTRUKTUR",
  "heroTitle": "Jede Nachricht, verbunden mit höchster Zuverlässigkeit.",
  "heroDesc": "Wholesale-SMS auf Carrier-Niveau für Netzbetreiber, Aggregatoren und Messaging-Plattformen. Verbinden Sie Ihren A2P-Verkehr mit weltweiten Routen durch direkte Carrier-Konnektivität und transparente Zustellungsberichte.",
  "talkToExpert": "Mit einem Experten sprechen",
  "exploreCapabilities": "Leistungsumfang entdecken",
  "stats": {
    "routing": "Globales Routing",
    "routingLabel": "Marktgerechte Reichweite",
    "traffic": "A2P-Messaging",
    "trafficLabel": "Geschäftskritischer Datenverkehr",
    "insights": "Zustellungsanalysen",
    "insightsLabel": "Betriebliche Kontrolle"
  },
  "heroLiveBadge1": {
    "title": "A2P-Konnektivität",
    "label": "Ihre Plattform. Weltweite Reichweite."
  },
  "heroLiveBadge2": {
    "title": "Transparenz in jedem Schritt",
    "sub": "Übermittlung • Route • Quittung"
  },
  "whyBadge": "WARUM INET WHOLESALE SMS",
  "whyTitle": "Nachrichten-Infrastruktur, die jede Interaktion stärkt",
  "whySubtitle1": "Wir bieten weltweite SMS-Terminierung mit direkten Netzzusammenschaltungen, aktivem Routen-Monitoring und detaillierten Zustellberichten.",
  "whySubtitle2": "Entwickelt für Aggregatoren, Carrier und Großunternehmen, die kompromisslose Stabilität im Massenversand verlangen.",
  "whyCards": [
    {
      "title": "Internationale Marktabdeckung",
      "desc": "Bauen Sie weltweite SMS-Reichweite für die Zielmärkte auf, die Ihre Geschäftskunden benötigen.",
      "footer": "Globales SMS-Routing"
    },
    {
      "title": "Direkte Carrier-Zusammenschaltungen",
      "desc": "Minimieren Sie Zwischenstationen durch hochwertige direkte Netzwerkanbindungen.",
      "footer": "Carrier-Grade Qualität"
    },
    {
      "title": "Echtzeit-Überwachung",
      "desc": "Verfolgen Sie Zustellungsraten, DLR-Codes und Latenzzeiten mit transparenter Telemetrie.",
      "footer": "Operative Transparenz"
    },
    {
      "title": "Skalierbarkeit für Spitzenlasten",
      "desc": "Übertragen Sie Millionen von Nachrichten täglich mit einer fehlertoleranten Cloud-Architektur.",
      "footer": "Enterprise-Performance"
    }
  ],
  "capabilitiesBadge": "KERNKOMPETENZEN",
  "capabilitiesTitle": "Entwickelt für geschäftskritischen Nachrichtenverkehr",
  "capabilitiesDesc": "Unser Wholesale-Portfolio deckt den gesamten Lebenszyklus des A2P-Traffics mit nachgewiesener Zuverlässigkeit ab.",
  "designSolution": "Lösung konfigurieren",
  "solutionNote": "Sprechen Sie mit unseren Ingenieuren, um Routen und Konditionen zu optimieren.",
  "capabilities": [
    {
      "tag": "Business-Messaging",
      "title": "Wholesale A2P-SMS-Terminierung",
      "desc": "Übertragen Sie B2C-SMS für Authentifizierung, Notfallbenachrichtigungen und Kundeninteraktionen."
    },
    {
      "tag": "Globale Anbindung",
      "title": "Internationale Routenabdeckung",
      "desc": "Erreichen Sie Mobilfunknetzbetreiber weltweit mit maßgeschneiderten länderspezifischen Profilen."
    },
    {
      "tag": "Standardprotokolle",
      "title": "SMPP- und API-Integration",
      "desc": "Verbinden Sie sich über performante SMPP v3.4-Verbindungen oder moderne REST-APIs."
    },
    {
      "tag": "Zustellsicherheit",
      "title": "Intelligentes Routenmanagement",
      "desc": "Adaptives Routing wählt dynamisch die beste Verbindung basierend auf Live-Zustellungsdaten."
    },
    {
      "tag": "Regulatorische Konformität",
      "title": "Sender-IDs & Registrierungsrichtlinien",
      "desc": "Expertenunterstützung bei alphanumerischen Absenderkennungen und Kurzwahlnummern."
    },
    {
      "tag": "Detaillierte Berichte",
      "title": "Zustellungsquittungen & Telemetrie",
      "desc": "Präzise DLRs und detaillierte Fehleranalysen für eine schnelle Fehlerbehebung."
    }
  ],
  "howItWorksBadge": "SO FUNKTIONIERT ES",
  "howItWorksTitle": "In drei Schritten von der Integration zur weltweiten Reichweite",
  "howItWorksSubtitle": "Ein strukturierter Prozess zur schnellen und sicheren Aktivierung Ihres SMS-Verkehrs.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Plattform anbinden",
      "desc": "Übermitteln Sie A2P-Nachrichten über eine vereinbarte SMPP- oder API-Schnittstelle.",
      "note": "Ihre Anwendung → iNet"
    },
    {
      "step": "02",
      "title": "Intelligentes Routing",
      "desc": "Wir leiten jedes Datenpaket über die optimale Carrier-Verbindung für Ihr Verkehrsprofil.",
      "note": "Carrier-Routing-Engine"
    },
    {
      "step": "03",
      "title": "Berichte & Optimierung",
      "desc": "Empfangen Sie Echtzeit-Zustellberichte und skalieren Sie Ihr Volumen mit technischem Support.",
      "note": "DLR durch Zielnetz bestätigt"
    }
  ],
  "networkBadge": "NETZWERK & REICHWEITE",
  "networkTitle": "Carrier-Grade Konnektivität für jedes Ziel",
  "networkDesc": "Zugang zu über 1.000 Mobilfunknetzen weltweit mit hochverfügbarer Infrastruktur.",
  "networkBullets": [
    "Direkte und gemanagte Zusammenschaltungen mit führenden Netzbetreibern",
    "Vollständige Unterstützung von GSM-7 und internationalem Unicode",
    "Geografisch redundante Infrastruktur mit automatischer Umschaltung",
    "24/7/365 technischer Support durch unser Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Carrier-fokussiert",
      "label": "Zusammenschaltungsstrategie"
    },
    {
      "val": "Marktkonform",
      "label": "Routen- & Absenderrichtlinien"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Gestützt auf enge Betreiberbeziehungen",
    "sub": "Direkte Routen • Verwaltete Interconnects"
  },
  "networkFooterNote": "Routenverfügbarkeit und Absenderrichtlinien unterliegen den jeweiligen nationalen Vorgaben.",
  "momentsBadge": "ANWENDUNGSFÄLLE",
  "momentsTitle": "Entwickelt für zeitkritische Interaktionen",
  "momentsSubtitle": "Sichern Sie die pünktliche Zustellung von Nachrichten, die das Vertrauen Ihrer Nutzer stärken.",
  "moments": [
    {
      "title": "Authentifizierung & 2FA",
      "desc": "Unterstützen Sie sichere Logins, Einmal-Passwörter (OTP) und Freigaben mit priorisiertem SMS-Versand.",
      "footer": "OTP & Verifizierung"
    },
    {
      "title": "Transaktionsbenachrichtigungen",
      "desc": "Übermitteln Sie Bankwarnungen, Kaufbestätigungen und Statusänderungen ohne Verzögerung.",
      "footer": "Echtzeit-Warnungen"
    },
    {
      "title": "Terminerinnerungen & Updates",
      "desc": "Senden Sie Terminbestätigungen, Lieferstati und wichtige Wartungshinweise termingerecht.",
      "footer": "Betriebliche Mitteilungen"
    },
    {
      "title": "Zustimmungsbasierte Kommunikation",
      "desc": "Erreichen Sie Kunden mit relevanten Servicenachrichten unter Einhaltung des Datenschutzes.",
      "footer": "Opt-in-Kundenbindung"
    }
  ],
  "intelligenceBadge": "ZUSTELLUNGS-INTELLIGENZ",
  "intelligenceTitle": "Volle Kontrolle und Transparenz über jede Nachricht",
  "intelligenceDesc": "Treffen Sie fundierte Entscheidungen mit umfassenden Verkehrsmetriken und proaktiver Überwachung.",
  "intelligenceBullets": [
    "Verfolgung des gesamten Lebenszyklus jeder einzelnen Nachricht",
    "Automatisches Ausweich-Routing bei Leitungsstörungen",
    "Sofortige Warnmeldungen bei auffälligen Latenzabweichungen",
    "Vollständiges Audit-Protokoll für Abrechnungs- und Streitfälle"
  ],
  "intelligenceFootnote": "Alle Telemetriedaten und Statuscodes werden über Echtzeit-DLRs bereitgestellt.",
  "messageLogCard": {
    "title": "Nachrichten-Protokoll",
    "badge": "BEISPIELANSICHT",
    "tab1": "Nachrichten",
    "tab2": "Routen",
    "tab3": "Ziele",
    "colType": "NACHRICHTENTYP",
    "colState": "STATUS",
    "colReceipt": "QUITTUNG",
    "row1Type": "Verifizierung",
    "row1State": "Zugestellt",
    "row1Receipt": "Bestätigt",
    "row2Type": "Bestell-Update",
    "row2State": "Übermittelt",
    "row2Receipt": "Ausstehend",
    "row3Type": "Service-Warnung",
    "row3State": "Abgewiesen",
    "row3Receipt": "Fehlerdetails",
    "footerText": "Verfolgen Sie jede Nachricht von der Einreichung bis zur Bestätigung."
  },
  "protectionTitle": "Netzwerksicherheit & Betrugsprävention",
  "protectionBadge": "NETZWERK-INTEGRITÄT",
  "protectionCards": [
    {
      "title": "Erkennung von Datenverkehrs-Anomalien",
      "desc": "Erkennen Sie ungewöhnliche Muster sofort, um SMS-Pumping und Spam-Angriffe wirksam abzuwehren."
    },
    {
      "title": "Compliance & Sperrlistenverwaltung",
      "desc": "Automatisierter Abgleich von Abmeldungen zur Wahrung des Absenderrufs und der Rechtssicherheit."
    },
    {
      "title": "Schutz von Absenderkennungen",
      "desc": "Schützen Sie alphanumerische Sender-IDs vor Fälschung und Missbrauch in regulierten Märkten."
    }
  ],
  "timelineBadge": "INTEGRATIONSPLAN",
  "timelineTitle": "Strukturierte Inbetriebnahme in 4 Phasen",
  "timelineSubtitle": "Eine bewährte Methodik für die nahtlose Anbindung Ihrer Systeme.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Bedarfsanalyse",
      "desc": "Definition der Zielmärkte, Verkehrsprofile, Absenderanforderungen und kaufmännischen Rahmenbedingungen."
    },
    {
      "step": "2",
      "title": "Technische Bereitstellung",
      "desc": "Einrichtung von SMPP-/API-Zugangsdaten und Konfiguration sicherer IP-Whitelists."
    },
    {
      "step": "3",
      "title": "Konnektivitätstests",
      "desc": "Prüfung von Latenzen, Kodierungen und DLR-Rückmeldungen in realen Zielnetzen."
    },
    {
      "step": "4",
      "title": "Produktivstart",
      "desc": "Freischaltung des Live-Verkehrs mit intensiver Begleitung durch unsere Netzwerkingenieure."
    }
  ],
  "integrationPlan": {
    "title": "Ihre Wholesale-SMS-Anbindung",
    "planBadge": "INTEGRATIONSPLAN",
    "connection": "SMPP v3.4 / REST-API",
    "traffic": "A2P-Nachrichtenverkehr",
    "formats": "GSM-7 / Internationales Unicode",
    "feedback": "Echtzeit-Zustellberichte (DLR)",
    "senderSetup": "Marktspezifische Konfiguration",
    "check1": "Zugangsdaten- und Konnektivitätsprüfung",
    "check2": "Absender- und Quittungsvalidierung",
    "discussNote": "Kontaktieren Sie uns, um die optimale Schnittstelle für Ihre Plattform abzustimmen.",
    "discussBtn": "Integration besprechen"
  },
  "faqBadge": "HÄUFIG GESTELLTE FRAGEN",
  "faqTitle": "Wissenswertes über Wholesale-SMS",
  "faqSubtitle": "Klare Antworten zu Schnittstellen, Routen und Betrieb.",
  "faqs": [
    {
      "q": "Für wen ist der Wholesale-SMS-Dienst konzipiert?",
      "a": "Für Telekommunikationsanbieter, SMS-Aggregatoren, CPaaS-Plattformen und Großunternehmen mit hohem internationalem A2P-Bedarf."
    },
    {
      "q": "Welche Protokolle werden unterstützt?",
      "a": "Wir unterstützen standardmäßig hochperformantes SMPP v3.4 sowie moderne REST-APIs mit Webhook-Zustellung."
    },
    {
      "q": "Wie erfolgt die Registrierung alphanumerischer Absender-IDs?",
      "a": "Unser Compliance-Team unterstützt Sie bei der Vorbereitung und Einreichung der Registrierungen bei den jeweiligen Betreibern."
    },
    {
      "q": "Wie transparent ist die Berichterstattung über den Versand?",
      "a": "Wir stellen DLR-Zustellberichte in Echtzeit mit standardisierten Fehlercodes und umfassenden Telemetriedaten bereit."
    }
  ],
  "ctaBadge": "JETZT STARTEN",
  "ctaTitle": "Bereit, Ihre SMS-Konnektivität auf das nächste Level zu heben?",
  "ctaSubtitle": "Verbinden Sie sich mit unseren Telekommunikationsexperten, um eine maßgeschneiderte Routing-Strategie zu entwickeln.",
  "contactUs": "Experten kontaktieren",
  "ctaFootnote": "Individuelle Testkonten und Verkehrsanalysen für Carrier und Unternehmen verfügbar."
};

const ja: WholesaleMessageTranslation = {
  "heroBadge": "ホールセールSMS • グローバルメッセージング基盤",
  "heroTitle": "すべてのメッセージを、確かな信頼性で届ける。",
  "heroDesc": "通信事業者、アグリゲーター、メッセージング基盤のためのキャリアグレード・ホールセールSMS。直接接続、明確な配信可視性、専門知識により、貴社のA2Pトラフィックをグローバルルートへ円滑に接続します。",
  "talkToExpert": "専門スタッフに相談する",
  "exploreCapabilities": "サービス機能を見る",
  "stats": {
    "routing": "グローバルルーティング",
    "routingLabel": "市場直結のカバレッジ",
    "traffic": "A2Pメッセージング",
    "trafficLabel": "重要ビジネス通信トラフィック",
    "insights": "配信インサイト",
    "insightsLabel": "高度な運用管理"
  },
  "heroLiveBadge1": {
    "title": "A2P接続性",
    "label": "貴社のシステムから世界中へ直接配信。"
  },
  "heroLiveBadge2": {
    "title": "全工程の可視化",
    "sub": "送信 • ルート • 配信受領"
  },
  "whyBadge": "INETホールセールSMSが選ばれる理由",
  "whyTitle": "あらゆるビジネス接点を強化するメッセージングインフラ",
  "whySubtitle1": "直接インターコネクト、アクティブなルート監視、詳細な配信レポートに支えられた国際SMSターミネーションを提供します。",
  "whySubtitle2": "大規模トラフィックにおいて極めて高い安定性を必要とするアグリゲーターや通信事業者のために設計されています。",
  "whyCards": [
    {
      "title": "世界主要市場へのリーチ",
      "desc": "顧客が求める重要展開先に応じた国際メッセージングカバレッジを構築します。",
      "footer": "グローバルSMSルーティング"
    },
    {
      "title": "キャリア直接相互接続",
      "desc": "高品質な直接回線とマネージド接続により不要な中継ホップを最小限に抑制します。",
      "footer": "キャリアグレードの品質"
    },
    {
      "title": "リアルタイム監視体制",
      "desc": "配信成功率、DLRコード、伝送レイテンシを透明性の高いテレメトリで常時監視します。",
      "footer": "運用プロセスの可視化"
    },
    {
      "title": "大規模トラフィック耐性",
      "desc": "耐障害性に優れた弾力的なアーキテクチャにより、1日あたり数百万件の配信を安定処理します。",
      "footer": "エンタープライズ性能"
    }
  ],
  "capabilitiesBadge": "主要機能と強み",
  "capabilitiesTitle": "企業の基幹メッセージング通信に最適化",
  "capabilitiesDesc": "実績ある信頼性でA2Pトラフィックのライフサイクル全体を包括的にサポートします。",
  "designSolution": "ソリューションを設計",
  "solutionNote": "最適なルート構成や料金体系についてエンジニアチームにご相談ください。",
  "capabilities": [
    {
      "tag": "法人メッセージング",
      "title": "ホールセールA2P SMSターミネーション",
      "desc": "認証コード、緊急通知、オプトインに基づく顧客コミュニケーションのSMSを安全に配信。"
    },
    {
      "tag": "グローバル網羅性",
      "title": "国際ルーティングカバレッジ",
      "desc": "国や地域ごとの規制要件に対応した専用プロファイルで世界中のMNOへ配信。"
    },
    {
      "tag": "標準プロトコル",
      "title": "SMPPおよびAPI連携",
      "desc": "高スループットなSMPP v3.4接続および最新の標準REST APIによるスムーズな統合。"
    },
    {
      "tag": "配信信頼性",
      "title": "インテリジェントルート管理",
      "desc": "リアルタイムの配信パフォーマンス実績に基づき、常に最適な経路を動的に選択。"
    },
    {
      "tag": "法規制遵守",
      "title": "送信者名（Sender ID）と登録支援",
      "desc": "アルファベットSender IDやショートコードの現地規制登録を専門家が手厚く支援。"
    },
    {
      "tag": "高度なレポート",
      "title": "配信受領書（DLR）とテレメトリ",
      "desc": "迅速な障害切り分けと状況把握を可能にする詳細なDLRとステータス解析。"
    }
  ],
  "howItWorksBadge": "運用の流れ",
  "howItWorksTitle": "連携から世界展開までわずか3ステップ",
  "howItWorksSubtitle": "国際SMS接続を迅速かつ確実に立ち上げるための標準化された導入プロセス。",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "プラットフォーム接続",
      "desc": "合意されたSMPPまたはAPI接続経由で、設定した送信者・宛先情報とともにA2Pメッセージを送信。",
      "note": "貴社システム → iNet"
    },
    {
      "step": "02",
      "title": "インテリジェント転送",
      "desc": "トラフィックの特性に最も適したキャリア回線を選択して確実に転送。",
      "note": "キャリアルーティングエンジン"
    },
    {
      "step": "03",
      "title": "受領確認と継続的改善",
      "desc": "リアルタイムで配信受領書（DLR）を受信し、専門技術サポートのもとで安定運用。",
      "note": "着信先キャリアが受領を確認"
    }
  ],
  "networkBadge": "ネットワークとカバレッジ",
  "networkTitle": "世界中のあらゆる宛先へ届くキャリア品質",
  "networkDesc": "高可用性を誇る分散インフラにより、世界1,000以上の携帯電話事業者に直接アクセス。",
  "networkBullets": [
    "世界の主要通信キャリアとの直接およびマネージド相互接続",
    "GSM-7および多言語Unicode文字セットに完全対応",
    "地理的分散冗長構成による自動フェイルオーバー",
    "24時間365日のネットワークオペレーションセンター（NOC）監視体制"
  ],
  "networkStats": [
    {
      "val": "キャリア主導",
      "label": "接続パートナーシップ戦略"
    },
    {
      "val": "市場適応型",
      "label": "ルートおよび送信者ポリシー"
    }
  ],
  "networkBadgeOverlay": {
    "title": "強固な通信事業者ネットワークと連携",
    "sub": "直接ルート • マネージド相互接続点"
  },
  "networkFooterNote": "ルートの可用性および送信者ポリシーは各国の法規制やキャリア規約に準拠します。",
  "momentsBadge": "ユースケース",
  "momentsTitle": "即時性と確実性が求められる重要場面に",
  "momentsSubtitle": "エンドユーザーの信頼を左右する時間的制約の厳しいメッセージを確実に届けます。",
  "moments": [
    {
      "title": "本人認証・2要素認証（2FA）",
      "desc": "ログイン認証、OTPワンタイムパスワード、決済確認を優先A2Pルートで遅延なく配信。",
      "footer": "OTP・高速認証"
    },
    {
      "title": "トランザクション通知",
      "desc": "銀行取引通知、注文確認、アカウントの重要なステータス変更を即座に通知。",
      "footer": "リアルタイム取引アラート"
    },
    {
      "title": "サービス連絡・リマインダー",
      "desc": "予約確認、配送進捗通知、緊急メンテナンス案内をスケジュール通りにお届け。",
      "footer": "運用オペレーション通知"
    },
    {
      "title": "許諾済み顧客エンゲージメント",
      "desc": "法令を遵守したオプトイン形式で、会員ユーザーへ有益な情報をお届け。",
      "footer": "合意に基づくメッセージング"
    }
  ],
  "intelligenceBadge": "配信インテリジェンス",
  "intelligenceTitle": "全メッセージの配信状況を完全に把握",
  "intelligenceDesc": "詳細なトラフィック分析、エラーコード判定、プロアクティブ監視で最適な判断をサポート。",
  "intelligenceBullets": [
    "メッセージ1件ごとの送信から受領までの全ステータス追跡",
    "一時的な回線障害時における自動バックアップ経路への切り替え",
    "レイテンシ悪化や配信率低下を検知するリアルタイムアラート",
    "監査や料金照合に役立つ完全なログ履歴"
  ],
  "intelligenceFootnote": "すべてのテレメトリ指標およびネットワーク応答コードはリアルタイムDLRで提供されます。",
  "messageLogCard": {
    "title": "メッセージ配信ログ",
    "badge": "監視ビュー（例）",
    "tab1": "ログ一覧",
    "tab2": "ルート",
    "tab3": "宛先国",
    "colType": "種別",
    "colState": "状態",
    "colReceipt": "受領ステータス",
    "row1Type": "本人認証",
    "row1State": "配信完了",
    "row1Receipt": "端末着信済",
    "row2Type": "注文更新",
    "row2State": "送信処理中",
    "row2Receipt": "受領待ち",
    "row3Type": "サービス通知",
    "row3State": "拒否",
    "row3Receipt": "エラー詳細",
    "footerText": "送信リクエストからキャリア着信まで一貫してトラッキング。"
  },
  "protectionTitle": "トラフィック保護と不正対策",
  "protectionBadge": "ネットワークの整合性",
  "protectionCards": [
    {
      "title": "異常トラフィックの検知・遮断",
      "desc": "異常な急増パターンを監視し、SMSポンピングやスパム攻撃からシステムを堅固に防御。"
    },
    {
      "title": "法規制遵守とブロックリスト管理",
      "desc": "配信拒否リストの自動同期と各国の法的規制の遵守により、ブランドの信頼性を保護。"
    },
    {
      "title": "Sender ID（送信者名）のなりすまし防止",
      "desc": "登録制市場において英数字Sender IDの偽装や不正利用を厳格に防止。"
    }
  ],
  "timelineBadge": "導入タイムライン",
  "timelineTitle": "明確で無駄のない4段階の導入フロー",
  "timelineSubtitle": "業務を中断することなくスムーズにシステムを連携させる確立された手順。",
  "timelineSteps": [
    {
      "step": "1",
      "title": "要件定義とスコープ確認",
      "desc": "対象宛先国、想定トラフィック量、送信者名（Sender ID）の要件、商談条件の確認。"
    },
    {
      "step": "2",
      "title": "技術環境のセットアップ",
      "desc": "SMPP/APIの接続用認証情報の発行、および接続元IPアドレスのホワイトリスト登録。"
    },
    {
      "step": "3",
      "title": "接続テストと品質検証",
      "desc": "実ネットワーク環境における文字コード、到達速度、DLR受領の確実性を徹底検証。"
    },
    {
      "step": "4",
      "title": "商用サービス開始",
      "desc": "専任のネットワークエンジニアが見守る中、本番トラフィックの送信を開始。"
    }
  ],
  "integrationPlan": {
    "title": "ホールセールSMS接続プラン",
    "planBadge": "統合仕様",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2Pメッセージング",
    "formats": "GSM-7 / 国際Unicode",
    "feedback": "リアルタイム配信受領書 (DLR)",
    "senderSetup": "宛先市場別の個別設定",
    "check1": "認証情報とネットワーク疎通の検証",
    "check2": "送信者名およびDLR受領の妥当性確認",
    "discussNote": "貴社システムに最適なインターフェース仕様について専門チームにご相談ください。",
    "discussBtn": "統合について相談する"
  },
  "faqBadge": "よくあるご質問",
  "faqTitle": "ホールセールSMSに関するQ&A",
  "faqSubtitle": "接続プロトコル、品質、配信仕様に関する疑問にお答えします。",
  "faqs": [
    {
      "q": "ホールセールSMSはどのような企業を対象としていますか？",
      "a": "世界中の通信事業者、SMSアグリゲーター、CPaaS基盤事業者、および大規模な国際A2P配信を行う企業様を対象としています。"
    },
    {
      "q": "どのようなプロトコルに対応していますか？",
      "a": "業界標準の高スループットSMPP v3.4プロトコル、およびWebhookコールバックに対応したREST APIをサポートしています。"
    },
    {
      "q": "アルファベットSender IDの登録は支援してもらえますか？",
      "a": "はい。各国の法規制や現地キャリアの申請要件に合わせ、弊社のコンプライアンスチームが登録手続きを支援します。"
    },
    {
      "q": "配信状況はどの程度詳細に確認できますか？",
      "a": "標準化されたエラーコードを含むリアルタイムDLRを提供しており、管理画面やAPIを通じて詳細な状態を瞬時に把握できます。"
    }
  ],
  "ctaBadge": "今すぐ始める",
  "ctaTitle": "国際SMSの接続品質をアップグレードしませんか？",
  "ctaSubtitle": "通信の専門チームにご相談いただき、優先配信国に最適な専用ルーティングをご体感ください。",
  "contactUs": "専門スタッフに問い合わせる",
  "ctaFootnote": "通信事業者および企業様向けに専用のテスト環境とトラフィック分析を提供しています。"
};

const pt: WholesaleMessageTranslation = {
  "heroBadge": "SMS NO ATACADO • INFRAESTRUTURA GLOBAL DE MENSAGENS",
  "heroTitle": "Cada mensagem, conectada com total confiança.",
  "heroDesc": "SMS no atacado de nível de operadora para carriers, agregadores e plataformas de mensagens. Conecte seu tráfego A2P a rotas globais com interconexão direta de operadora, visibilidade de entrega e suporte especializado.",
  "talkToExpert": "Falar com um especialista",
  "exploreCapabilities": "Explorar recursos",
  "stats": {
    "routing": "Roteamento global",
    "routingLabel": "Alcance orientado ao mercado",
    "traffic": "Mensagens A2P",
    "trafficLabel": "Tráfego crítico para negócios",
    "insights": "Análise de entrega",
    "insightsLabel": "Controle operacional"
  },
  "heroLiveBadge1": {
    "title": "Conectividade A2P",
    "label": "Sua plataforma. Alcance mundial."
  },
  "heroLiveBadge2": {
    "title": "Visibilidade em cada etapa",
    "sub": "Envio • Rota • Recibo"
  },
  "whyBadge": "POR QUE ESCOLHER A INET WHOLESALE SMS",
  "whyTitle": "Infraestrutura de mensagens que valoriza cada interação",
  "whySubtitle1": "Fornecemos terminação internacional de SMS apoiada por interconexões diretas, monitoramento ativo de rotas e relatórios detalhados de entrega.",
  "whySubtitle2": "Desenvolvido para agregadores, operadoras e plataformas corporativas que exigem estabilidade comprovada em grande escala.",
  "whyCards": [
    {
      "title": "Alcance mais mercados",
      "desc": "Construa alcance internacional de mensagens para os destinos estratégicos de que seus clientes precisam.",
      "footer": "Roteamento global de SMS"
    },
    {
      "title": "Interconexões diretas com operadoras",
      "desc": "Minimize saltos desnecessários com links de rede diretos e acordos gerenciados de alta qualidade.",
      "footer": "Qualidade de nível carrier"
    },
    {
      "title": "Monitoramento em tempo real",
      "desc": "Acompanhe taxas de entrega, códigos DLR e latência com telemetria transparente.",
      "footer": "Visibilidade operacional"
    },
    {
      "title": "Capacidade de escala elástica",
      "desc": "Transmita milhões de mensagens por dia com uma arquitetura tolerante a falhas.",
      "footer": "Desempenho empresarial"
    }
  ],
  "capabilitiesBadge": "PRINCIPAIS RECURSOS",
  "capabilitiesTitle": "Projetado para o tráfego corporativo de mensagens",
  "capabilitiesDesc": "Nosso conjunto de serviços no atacado cobre todo o ciclo de vida do tráfego A2P com confiabilidade comprovada.",
  "designSolution": "Projetar solução",
  "solutionNote": "Fale com nossos engenheiros para otimizar rotas e custos.",
  "capabilities": [
    {
      "tag": "Mensagens corporativas",
      "title": "Terminação A2P no atacado",
      "desc": "Entregue SMS B2C para autenticação, notificações críticas e engajamento autorizado do cliente."
    },
    {
      "tag": "Conectividade global",
      "title": "Roteamento internacional",
      "desc": "Alcance operadoras de rede móvel em todo o mundo com perfis adaptados a cada mercado."
    },
    {
      "tag": "Protocolos padrão",
      "title": "Integração SMPP e API",
      "desc": "Conecte-se por meio de links SMPP v3.4 de alto desempenho ou APIs REST modernas e seguras."
    },
    {
      "tag": "Confiabilidade de entrega",
      "title": "Gerenciamento inteligente de rotas",
      "desc": "Roteamento adaptativo que seleciona o melhor caminho com base no desempenho de entrega em tempo real."
    },
    {
      "tag": "Conformidade regulatória",
      "title": "Sender ID e políticas de registro",
      "desc": "Suporte especializado para IDs de remetente alfanuméricos, short codes e diretrizes locais."
    },
    {
      "tag": "Relatórios avançados",
      "title": "Recibos de entrega e telemetria",
      "desc": "DLRs granulares e análises abrangentes para diagnósticos operacionais rápidos e precisos."
    }
  ],
  "howItWorksBadge": "COMO FUNCIONA",
  "howItWorksTitle": "Da integração ao alcance global em três etapas",
  "howItWorksSubtitle": "Um processo estruturado para ativar e expandir sua conectividade internacional de SMS.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Conecte sua plataforma",
      "desc": "Envie mensagens A2P por meio de uma conexão SMPP ou API acordada com suas configurações.",
      "note": "Sua aplicação → iNet"
    },
    {
      "step": "02",
      "title": "Roteamento inteligente",
      "desc": "Direcionamos cada pacote pelo link de operadora mais adequado ao seu perfil de tráfego.",
      "note": "Motor de roteamento de operadora"
    },
    {
      "step": "03",
      "title": "Relatórios e otimização",
      "desc": "Receba recibos de entrega em tempo real e expanda volumes com suporte contínuo.",
      "note": "DLR confirmado na rede de destino"
    }
  ],
  "networkBadge": "REDE E COBERTURA",
  "networkTitle": "Conectividade de nível carrier para qualquer destino",
  "networkDesc": "Acesso a mais de 1.000 redes móveis em todo o mundo com infraestrutura otimizada para alta disponibilidade.",
  "networkBullets": [
    "Interconexões diretas e gerenciadas com operadoras líderes mundiais",
    "Suporte completo a GSM-7 e codificações internacionais Unicode",
    "Infraestrutura redundante distribuída geograficamente",
    "Suporte ininterrupto 24/7/365 do Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Foco em operadoras",
      "label": "Estratégia de conectividade"
    },
    {
      "val": "Sensível ao mercado",
      "label": "Políticas de rotas e remetente"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Conectado através de sólidas parcerias com operadoras",
    "sub": "Rotas diretas • Interconexões gerenciadas"
  },
  "networkFooterNote": "A disponibilidade de rotas e as políticas de remetente variam conforme as normas locais de cada país.",
  "momentsBadge": "CASOS DE USO",
  "momentsTitle": "Construído para interações de alto impacto",
  "momentsSubtitle": "Garanta a entrega pontual de mensagens essenciais para a confiança dos seus usuários.",
  "moments": [
    {
      "title": "Autenticação e 2FA",
      "desc": "Viabilize logins seguros, verificação com OTP e aprovação de transações com SMS A2P prioritário.",
      "footer": "OTP e verificação rápida"
    },
    {
      "title": "Notificações transacionais",
      "desc": "Transmita alertas bancários, confirmações de pedidos e alterações de conta instantaneamente.",
      "footer": "Alertas críticos em tempo real"
    },
    {
      "title": "Alertas e lembretes de serviço",
      "desc": "Envie lembretes de agendamentos, atualizações de entregas e avisos de manutenção no prazo certo.",
      "footer": "Notificações operacionais"
    },
    {
      "title": "Comunicação autorizada",
      "desc": "Comunique-se com clientes opt-in por meio de mensagens informativas respeitando as leis locais.",
      "footer": "Mensagens com consentimento"
    }
  ],
  "intelligenceBadge": "INTELIGÊNCIA DE ENTREGA",
  "intelligenceTitle": "Visibilidade e controle total sobre cada mensagem",
  "intelligenceDesc": "Tome decisões embasadas com análises completas de tráfego, códigos de status e monitoramento proativo.",
  "intelligenceBullets": [
    "Acompanhamento completo do ciclo de vida de cada mensagem individual",
    "Comutação automática de rota em caso de oscilações na rede",
    "Alertas operacionais imediatos sobre variações incomuns de latência",
    "Histórico de auditoria detalhado para conciliação e suporte"
  ],
  "intelligenceFootnote": "Todas as métricas de telemetria e códigos de status de rede são transmitidos via DLRs em tempo real.",
  "messageLogCard": {
    "title": "Visibilidade das mensagens",
    "badge": "VISUALIZAÇÃO ILUSTRATIVA",
    "tab1": "Registro",
    "tab2": "Rotas",
    "tab3": "Destinos",
    "colType": "TIPO DE MENSAGEM",
    "colState": "ESTADO",
    "colReceipt": "RECIBO",
    "row1Type": "Verificação",
    "row1State": "Entregue",
    "row1Receipt": "Recebido",
    "row2Type": "Atualização pedido",
    "row2State": "Submetido",
    "row2Receipt": "Pendente",
    "row3Type": "Alerta de serviço",
    "row3State": "Rejeitado",
    "row3Receipt": "Detalhe do erro",
    "footerText": "Acompanhe cada mensagem desde a submissão até a confirmação da rede."
  },
  "protectionTitle": "Segurança de tráfego e prevenção a fraudes",
  "protectionBadge": "INTEGRIDADE DA REDE",
  "protectionCards": [
    {
      "title": "Detecção de tráfego anômalo",
      "desc": "Identifique padrões incomuns e aplique controles automatizados para conter SMS pumping e spam."
    },
    {
      "title": "Conformidade e listas de bloqueio",
      "desc": "Gerenciamento automatizado de opt-out e respeito às normas locais para proteger sua reputação."
    },
    {
      "title": "Proteção de Sender ID",
      "desc": "Proteja identificadores alfanuméricos contra falsificação e uso não autorizado em mercados compatíveis."
    }
  ],
  "timelineBadge": "CRONOGRAMA DE INTEGRAÇÃO",
  "timelineTitle": "Implantação estruturada em 4 etapas",
  "timelineSubtitle": "Uma metodologia comprovada para conectar sua plataforma sem fricção.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Alinhamento de requisitos",
      "desc": "Confirmação de destinos, perfis de tráfego, especificações de remetente e prioridades comerciais."
    },
    {
      "step": "2",
      "title": "Configuração técnica",
      "desc": "Provisionamento de credenciais SMPP/API e configuração de listas seguras de IPs autorizados."
    },
    {
      "step": "3",
      "title": "Testes de conectividade",
      "desc": "Validação de latência, formatos de codificação e recepção correta de DLRs em redes reais."
    },
    {
      "step": "4",
      "title": "Entrada em produção",
      "desc": "Ativação do tráfego comercial com acompanhamento próximo de engenheiros de telecomunicações."
    }
  ],
  "integrationPlan": {
    "title": "Sua conexão de SMS no atacado",
    "planBadge": "PLANO DE INTEGRAÇÃO",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Mensagens A2P",
    "formats": "GSM-7 / Unicode internacional",
    "feedback": "Recibos de entrega (DLR)",
    "senderSetup": "Específico para cada mercado",
    "check1": "Validação de credenciais e conectividade",
    "check2": "Validação de remetente e recibos de entrega",
    "discussNote": "Consulte nossos especialistas para escolher a interface ideal para sua plataforma.",
    "discussBtn": "Discutir integração"
  },
  "faqBadge": "PERGUNTAS FREQUENTES",
  "faqTitle": "Tudo o que você precisa saber sobre SMS no atacado",
  "faqSubtitle": "Respostas transparentes sobre conectividade, protocolos e terminação.",
  "faqs": [
    {
      "q": "Para quem o serviço de SMS no atacado é indicado?",
      "a": "Para operadoras de telecomunicações, agregadores de SMS, plataformas CPaaS e empresas com grandes volumes de tráfego A2P internacional."
    },
    {
      "q": "Quais interfaces e protocolos são suportados?",
      "a": "Oferecemos suporte ao protocolo padrão SMPP v3.4 de alto rendimento e a APIs REST modernas com callbacks via webhook."
    },
    {
      "q": "Como funciona o registro de Sender IDs alfanuméricos?",
      "a": "Nossa equipe de conformidade cuida do processo de envio e registro junto às operadoras de acordo com a legislação de cada país."
    },
    {
      "q": "Qual o nível de transparência sobre o status de entrega?",
      "a": "Fornecemos recibos DLR em tempo real com códigos de erro padronizados e métricas operacionais completas via API e portal."
    }
  ],
  "ctaBadge": "COMECE HOJE",
  "ctaTitle": "Pronto para otimizar sua conectividade de SMS no atacado?",
  "ctaSubtitle": "Conecte-se com nossos especialistas para desenhar uma estratégia de roteamento sob medida para seus destinos prioritários.",
  "contactUs": "Falar com um especialista",
  "ctaFootnote": "Consultoria personalizada de rotas e análise de tráfego disponíveis para operadoras e empresas."
};

const ru: WholesaleMessageTranslation = {
  "heroBadge": "ОПТОВЫЙ SMS • ГЛОБАЛЬНАЯ ИНФРАСТРУКТУРА СООБЩЕНИЙ",
  "heroTitle": "Каждое сообщение доставлено с абсолютной надежностью.",
  "heroDesc": "Оптовые SMS операторского уровня для телеком-провайдеров, агрегаторов и коммуникационных платформ. Подключайте трафик A2P к глобальным маршрутам с прямым сопряжением и прозрачными отчетами о доставке.",
  "talkToExpert": "Связаться с экспертом",
  "exploreCapabilities": "Изучить возможности",
  "stats": {
    "routing": "Глобальная маршрутизация",
    "routingLabel": "Широкий охват рынков",
    "traffic": "A2P сообщения",
    "trafficLabel": "Критически важный трафик",
    "insights": "Анализ доставки",
    "insightsLabel": "Операционный контроль"
  },
  "heroLiveBadge1": {
    "title": "A2P связность",
    "label": "Ваша платформа. Глобальный охват."
  },
  "heroLiveBadge2": {
    "title": "Прозрачность каждого шага",
    "sub": "Отправка • Маршрут • Отчет"
  },
  "whyBadge": "ПОЧЕМУ ВЫБИРАЮТ ОПТОВЫЙ SMS ОТ INET",
  "whyTitle": "Инфраструктура сообщений, укрепляющая доверие клиентов",
  "whySubtitle1": "Мы обеспечиваем международную терминацию SMS на базе прямых интерконнектов, активного мониторинга маршрутов и детальных отчетов о доставке.",
  "whySubtitle2": "Разработано для агрегаторов, операторов и крупных корпораций, которым требуется непревзойденная стабильность при больших объемах.",
  "whyCards": [
    {
      "title": "Широкий охват рынков",
      "desc": "Обеспечивайте международную доставку SMS в стратегически важные регионы ваших клиентов.",
      "footer": "Глобальная маршрутизация SMS"
    },
    {
      "title": "Прямые интерконнекты с операторами",
      "desc": "Минимизируйте задержки благодаря прямым сетевым каналам и соглашениям высокого качества.",
      "footer": "Операторский уровень надежности"
    },
    {
      "title": "Мониторинг в реальном времени",
      "desc": "Отслеживайте проценты доставки, коды DLR и задержки передачи с прозрачной телеметрией.",
      "footer": "Операционная прозрачность"
    },
    {
      "title": "Высокая масштабируемость",
      "desc": "Передавайте миллионы сообщений в день благодаря эластичной отказоустойчивой архитектуре.",
      "footer": "Корпоративная производительность"
    }
  ],
  "capabilitiesBadge": "КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ",
  "capabilitiesTitle": "Создано для масштабного корпоративного трафика",
  "capabilitiesDesc": "Наш комплекс оптовых услуг охватывает весь жизненный цикл A2P трафика с доказанной надежностью.",
  "designSolution": "Разработать решение",
  "solutionNote": "Обсудите с нашими инженерами оптимизацию маршрутов и тарифы.",
  "capabilities": [
    {
      "tag": "Бизнес-сообщения",
      "title": "Оптовая терминация A2P SMS",
      "desc": "Передача B2C SMS для аутентификации, сервисных уведомлений и целевого взаимодействия."
    },
    {
      "tag": "Глобальная связность",
      "title": "Международная маршрутизация",
      "desc": "Охват мобильных операторов по всему миру с адаптацией под локальные требования рынков."
    },
    {
      "tag": "Стандартные протоколы",
      "title": "Интеграция по SMPP и API",
      "desc": "Подключение по высокоскоростным каналам SMPP v3.4 или современным REST API."
    },
    {
      "tag": "Надежность доставки",
      "title": "Интеллектуальное управление маршрутами",
      "desc": "Адаптивная маршрутизация выбирает оптимальный путь на основе данных о доставке в реальном времени."
    },
    {
      "tag": "Регуляторное соответствие",
      "title": "Sender ID и политики регистрации",
      "desc": "Экспертная помощь в регистрации буквенных Sender ID, коротких номеров и соблюдении законов."
    },
    {
      "tag": "Детальная отчетность",
      "title": "Статусы доставки (DLR) и телеметрия",
      "desc": "Детализированные DLR и глубокая аналитика для быстрой операционной диагностики."
    }
  ],
  "howItWorksBadge": "КАК ЭТО РАБОТАЕТ",
  "howItWorksTitle": "От интеграции до глобального охвата за три шага",
  "howItWorksSubtitle": "Структурированный процесс для быстрого и надежного запуска международной SMS-связи.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Подключите вашу платформу",
      "desc": "Отправляйте A2P сообщения через согласованное SMPP или API соединение с вашими настройками.",
      "note": "Ваша система → iNet"
    },
    {
      "step": "02",
      "title": "Интеллектуальная маршрутизация",
      "desc": "Каждое сообщение направляется через наиболее подходящий канал оператора для вашего профиля трафика.",
      "note": "Маршрутизатор операторского класса"
    },
    {
      "step": "03",
      "title": "Отчеты и масштабирование",
      "desc": "Получайте моментальные отчеты о доставке и наращивайте объемы с постоянной техподдержкой.",
      "note": "Подтверждение DLR от сети получателя"
    }
  ],
  "networkBadge": "СЕТЬ И ПОКРЫТИЕ",
  "networkTitle": "Операторская связь для любого направления",
  "networkDesc": "Доступ к более чем 1000 мобильных сетей по всему миру с инфраструктурой высокой доступности.",
  "networkBullets": [
    "Прямые и управляемые интерконнекты с ведущими мировыми операторами",
    "Полная поддержка кодировок GSM-7 и многоязычного Unicode",
    "Географически распределенная резервированная инфраструктура",
    "Круглосуточный мониторинг 24/7 центром управления сетью (NOC)"
  ],
  "networkStats": [
    {
      "val": "Операторский подход",
      "label": "Стратегия подключений"
    },
    {
      "val": "Учет специфики рынка",
      "label": "Политики маршрутов и отправителей"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Партнерство с ведущими операторами связи",
    "sub": "Прямые маршруты • Управляемые интерконнекты"
  },
  "networkFooterNote": "Доступность маршрутов и правила регистрации Sender ID зависят от законодательства каждой страны.",
  "momentsBadge": "СЦЕНАРИИ ИСПОЛЬЗОВАНИЯ",
  "momentsTitle": "Создано для критически важных коммуникаций",
  "momentsSubtitle": "Обеспечьте своевременную доставку сообщений, определяющих надежность пользовательского опыта.",
  "moments": [
    {
      "title": "Аутентификация и 2FA",
      "desc": "Обеспечивайте безопасный вход, коды подтверждения OTP и авторизацию транзакций приоритетными SMS.",
      "footer": "OTP и мгновенная проверка"
    },
    {
      "title": "Транзакционные уведомления",
      "desc": "Моментально доставляйте банковские оповещения, подтверждения покупок и изменения статуса счетов.",
      "footer": "Уведомления в реальном времени"
    },
    {
      "title": "Сервисные напоминания",
      "desc": "Отправляйте напоминания о встречах, статусы доставки и важные сервисные оповещения вовремя.",
      "footer": "Операционные оповещения"
    },
    {
      "title": "Информационные рассылки",
      "desc": "Взаимодействуйте с подписавшимися клиентами при строгом соблюдении требований к согласию.",
      "footer": "Согласованная коммуникация"
    }
  ],
  "intelligenceBadge": "ИНТЕЛЛЕКТ ДОСТАВКИ",
  "intelligenceTitle": "Полный контроль и прозрачность каждого сообщения",
  "intelligenceDesc": "Принимайте обоснованные решения благодаря подробным метрикам трафика и проактивному мониторингу.",
  "intelligenceBullets": [
    "Полное отслеживание статуса доставки каждого отдельного сообщения",
    "Автоматическое переключение маршрута при сбоях в сети",
    "Мгновенные оповещения при отклонениях задержки от нормы",
    "Детальные журналы аудита для сверки и оперативного разрешения споров"
  ],
  "intelligenceFootnote": "Все данные телеметрии и сетевые статус-коды передаются в реальном времени через DLR.",
  "messageLogCard": {
    "title": "Журнал сообщений",
    "badge": "ДЕМОНСТРАЦИОННЫЙ ВИД",
    "tab1": "Журнал",
    "tab2": "Маршруты",
    "tab3": "Направления",
    "colType": "ТИП СООБЩЕНИЯ",
    "colState": "СТАТУС",
    "colReceipt": "ОТЧЕТ",
    "row1Type": "Верификация",
    "row1State": "Доставлено",
    "row1Receipt": "Получено",
    "row2Type": "Обновление заказа",
    "row2State": "Отправлено",
    "row2Receipt": "В ожидании",
    "row3Type": "Сервисное оповещение",
    "row3State": "Отклонено",
    "row3Receipt": "Код ошибки",
    "footerText": "Отслеживайте каждое сообщение от момента отправки до подтверждения сетью."
  },
  "protectionTitle": "Защита трафика и предотвращение мошенничества",
  "protectionBadge": "ЦЕЛОСТНОСТЬ СЕТИ",
  "protectionCards": [
    {
      "title": "Выявление аномального трафика",
      "desc": "Распознавайте нетипичные паттерны и применяйте фильтры для защиты от SMS-пампинга и спама."
    },
    {
      "title": "Соблюдение нормативов и черные списки",
      "desc": "Управление списками исключений и соблюдение правил для защиты репутации отправителя."
    },
    {
      "title": "Защита идентификатора отправителя (Sender ID)",
      "desc": "Защита буквенных имен от подделки и несанкционированного использования на регулируемых рынках."
    }
  ],
  "timelineBadge": "ПЛАН ИНТЕГРАЦИИ",
  "timelineTitle": "Понятный запуск в 4 этапа",
  "timelineSubtitle": "Проверенная методология для быстрого и бесшовного подключения вашей платформы.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Анализ требований",
      "desc": "Согласование целевых направлений, объемов трафика, требований к Sender ID и коммерческих условий."
    },
    {
      "step": "2",
      "title": "Техническая настройка",
      "desc": "Предоставление реквизитов SMPP/API и настройка разрешенных IP-адресов."
    },
    {
      "step": "3",
      "title": "Тестирование связности",
      "desc": "Проверка времени отклика, кодировок и корректного получения отчетов DLR в реальных сетях."
    },
    {
      "step": "4",
      "title": "Запуск в продакшн",
      "desc": "Перевод коммерческого трафика с постоянным сопровождением нашими инженерами связи."
    }
  ],
  "integrationPlan": {
    "title": "Ваше оптовое SMS-подключение",
    "planBadge": "ПЛАН ИНТЕГРАЦИИ",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P сообщения",
    "formats": "GSM-7 / Международный Unicode",
    "feedback": "Отчеты о доставке (DLR)",
    "senderSetup": "Специфично для рынка",
    "check1": "Проверка учетных данных и связности",
    "check2": "Валидация отправителя и отчетов DLR",
    "discussNote": "Свяжитесь с нами для выбора наилучшего интерфейса интеграции для вашей системы.",
    "discussBtn": "Обсудить интеграцию"
  },
  "faqBadge": "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
  "faqTitle": "Все, что нужно знать об оптовых SMS",
  "faqSubtitle": "Ответы на ключевые вопросы о протоколах, маршрутах и терминации.",
  "faqs": [
    {
      "q": "Для кого предназначена услуга оптовых SMS?",
      "a": "Для операторов связи, SMS-агрегаторов, CPaaS платформ и корпораций, которым требуется надежная международная терминация больших объемов A2P трафика."
    },
    {
      "q": "Какие протоколы интеграции поддерживаются?",
      "a": "Мы поддерживаем стандартный высокопроизводительный протокол SMPP v3.4, а также современные защищенные REST API с вебхуками."
    },
    {
      "q": "Как осуществляется регистрация буквенных Sender ID?",
      "a": "Наш отдел комплаенса оказывает полное содействие в регистрации Sender ID у операторов согласно законам каждой страны."
    },
    {
      "q": "Насколько прозрачны данные о доставке сообщений?",
      "a": "Мы передаем отчеты DLR в реальном времени со стандартными статус-кодами и детальной телеметрией через API и личный кабинет."
    }
  ],
  "ctaBadge": "НАЧАТЬ СЕГОДНЯ",
  "ctaTitle": "Готовы оптимизировать международную отправку SMS?",
  "ctaSubtitle": "Свяжитесь с нашими специалистами по телекоммуникациям для построения индивидуального маршрута под ваши приоритетные направления.",
  "contactUs": "Связаться со специалистом",
  "ctaFootnote": "Доступны тестовые среды и детальный аудит трафика для операторов и корпоративных клиентов."
};

const it: WholesaleMessageTranslation = {
  "heroBadge": "SMS ALL'INGROSSO • INFRASTRUTTURA GLOBALE DI MESSAGGISTICA",
  "heroTitle": "Ogni messaggio, connesso con totale affidabilità.",
  "heroDesc": "SMS all'ingrosso di livello operatore per carrier, aggregatori e piattaforme di messaggistica. Connetti il tuo traffico A2P a rotte internazionali con interconnessione diretta, visibilità completa e supporto dedicato.",
  "talkToExpert": "Parla con un esperto",
  "exploreCapabilities": "Esplora le funzionalità",
  "stats": {
    "routing": "Instradamento globale",
    "routingLabel": "Copertura di mercato strategica",
    "traffic": "Messaggistica A2P",
    "trafficLabel": "Traffico critico aziendale",
    "insights": "Metriche di consegna",
    "insightsLabel": "Controllo operativo"
  },
  "heroLiveBadge1": {
    "title": "Connettività A2P",
    "label": "La tua piattaforma. Portata mondiale."
  },
  "heroLiveBadge2": {
    "title": "Visibilità su ogni fase",
    "sub": "Invio • Instradamento • Ricevuta"
  },
  "whyBadge": "PERCHÉ SCEGLIERE INET WHOLESALE SMS",
  "whyTitle": "Infrastruttura di messaggistica che valorizza ogni interazione",
  "whySubtitle1": "Forniamo terminazione SMS globale supportata da interconnessioni dirette, monitoraggio attivo dei percorsi e report dettagliati di consegna.",
  "whySubtitle2": "Progettato per aggregatori, operatori e aziende che richiedono stabilità comprovata su larga scala.",
  "whyCards": [
    {
      "title": "Copertura dei mercati globali",
      "desc": "Costruisci una copertura di messaggistica internazionale per le destinazioni strategiche richieste dai tuoi clienti.",
      "footer": "Instradamento SMS globale"
    },
    {
      "title": "Interconnessioni dirette con gli operatori",
      "desc": "Riduci al minimo i passaggi intermedi con collegamenti di rete diretti e accordi gestiti di alta qualità.",
      "footer": "Qualità di livello carrier"
    },
    {
      "title": "Monitoraggio in tempo reale",
      "desc": "Controlla i tassi di consegna, i codici DLR e la latenza con telemetria trasparente.",
      "footer": "Visibilità operativa"
    },
    {
      "title": "Scalabilità ad alta capacità",
      "desc": "Invia milioni di messaggi al giorno con un'architettura elastica e resistente ai guasti.",
      "footer": "Prestazioni enterprise"
    }
  ],
  "capabilitiesBadge": "CAPACITÀ PRINCIPALI",
  "capabilitiesTitle": "Progettato per il traffico di messaggistica aziendale",
  "capabilitiesDesc": "La nostra suite di servizi all'ingrosso copre l'intero ciclo di vita del traffico A2P con affidabilità comprovata.",
  "designSolution": "Configura soluzione",
  "solutionNote": "Parla con i nostri ingegneri per ottimizzare percorsi e tariffe.",
  "capabilities": [
    {
      "tag": "Messaggistica aziendale",
      "title": "Terminazione A2P all'ingrosso",
      "desc": "Invia SMS B2C per autenticazione, notifiche critiche e interazioni concordate con i clienti."
    },
    {
      "tag": "Connettività globale",
      "title": "Copertura internazionale",
      "desc": "Raggiungi gli operatori di rete mobile in tutto il mondo con profili personalizzati per ciascun mercato."
    },
    {
      "tag": "Protocolli standard",
      "title": "Integrazione SMPP e API",
      "desc": "Connettiti tramite collegamenti SMPP v3.4 ad alta velocità o API REST moderne e documentate."
    },
    {
      "tag": "Affidabilità di consegna",
      "title": "Gestione intelligente dei percorsi",
      "desc": "Routing adattivo che seleziona il percorso migliore in base alle prestazioni di consegna in tempo reale."
    },
    {
      "tag": "Conformità normativa",
      "title": "Sender ID e politiche di registrazione",
      "desc": "Supporto esperto per mittenti alfanumerici, codici brevi e conformità normativa locale."
    },
    {
      "tag": "Reportistica avanzata",
      "title": "Ricevute di consegna e telemetria",
      "desc": "DLR granulari e analisi approfondite per una diagnostica operativa tempestiva e accurata."
    }
  ],
  "howItWorksBadge": "COME FUNZIONA",
  "howItWorksTitle": "Dall'integrazione alla portata globale in tre passaggi",
  "howItWorksSubtitle": "Un processo strutturato per attivare ed espandere rapidamente la tua connettività SMS internazionale.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Connetti la tua piattaforma",
      "desc": "Invia messaggi A2P tramite una connessione SMPP o API concordata con le impostazioni del mittente e della destinazione.",
      "note": "La tua applicazione → iNet"
    },
    {
      "step": "02",
      "title": "Instradamento intelligente",
      "desc": "Dirigiamo ciascun pacchetto attraverso il collegamento operatore più adatto al tuo profilo di traffico.",
      "note": "Motore di instradamento carrier"
    },
    {
      "step": "03",
      "title": "Report e ottimizzazione",
      "desc": "Ricevi ricevute di consegna in tempo reale ed espandi i volumi con assistenza tecnica continua.",
      "note": "DLR confermato dalla rete di destinazione"
    }
  ],
  "networkBadge": "RETE E COPERTURA",
  "networkTitle": "Connettività di livello carrier per ogni destinazione",
  "networkDesc": "Accesso a oltre 1.000 reti mobili in tutto il mondo con un'infrastruttura ottimizzata per l'alta disponibilità.",
  "networkBullets": [
    "Interconnessioni dirette e gestite con i principali operatori globali",
    "Supporto completo per codifica GSM-7 e Unicode multinazionale",
    "Infrastruttura geograficamente distribuita e ridondante",
    "Monitoraggio continuo 24/7/365 dal Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Guidato da carrier",
      "label": "Strategia di connettività"
    },
    {
      "val": "Conforme al mercato",
      "label": "Politiche di routing e mittente"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Supportato da solide relazioni con gli operatori",
    "sub": "Percorsi diretti • Punti di interconnessione gestiti"
  },
  "networkFooterNote": "La disponibilità delle rotte e le politiche di mittente dipendono dalle normative locali di ogni nazione.",
  "momentsBadge": "CASI D'USO",
  "momentsTitle": "Creato per interazioni aziendali essenziali",
  "momentsSubtitle": "Garantisci la consegna puntuale dei messaggi che determinano la fiducia degli utenti.",
  "moments": [
    {
      "title": "Autenticazione e 2FA",
      "desc": "Supporta accessi sicuri, password monouso OTP e conferme transazionali con SMS A2P prioritari.",
      "footer": "OTP e verifica rapida"
    },
    {
      "title": "Notifiche transazionali",
      "desc": "Invia avvisi bancari, conferme d'ordine e variazioni di stato dell'account in tempo reale.",
      "footer": "Avvisi critici in tempo reale"
    },
    {
      "title": "Promemoria e aggiornamenti di servizio",
      "desc": "Consegna promemoria di appuntamenti, notifiche di spedizione e avvisi operativi puntuali.",
      "footer": "Notifiche operative"
    },
    {
      "title": "Interazione concordata con i clienti",
      "desc": "Comunica con clienti iscritti attraverso messaggi informativi nel pieno rispetto della privacy.",
      "footer": "Messaggistica con consenso"
    }
  ],
  "intelligenceBadge": "INTELLIGENZA DI CONSEGNA",
  "intelligenceTitle": "Visibilità e controllo completo su ogni messaggio",
  "intelligenceDesc": "Prendi decisioni informate grazie a metriche di traffico approfondite e monitoraggio proattivo.",
  "intelligenceBullets": [
    "Tracciamento completo del ciclo di vita per ogni singolo messaggio",
    "Commutazione automatica del percorso in caso di anomalie di rete",
    "Avvisi operativi immediati su variazioni impreviste di latenza",
    "Registro storico dettagliato per conciliazione e audit"
  ],
  "intelligenceFootnote": "Tutte le metriche di telemetria e i codici di stato vengono trasmessi tramite DLR in tempo reale.",
  "messageLogCard": {
    "title": "Monitoraggio messaggi in tempo reale",
    "badge": "VISTA DIMOSTRATIVA",
    "tab1": "Registro",
    "tab2": "Percorsi",
    "tab3": "Destinazioni",
    "colType": "TIPO MESSAGGIO",
    "colState": "STATO",
    "colReceipt": "RICEVUTA",
    "row1Type": "Verifica",
    "row1State": "Consegnato",
    "row1Receipt": "Ricevuto",
    "row2Type": "Aggiornamento ordine",
    "row2State": "Inviato",
    "row2Receipt": "In attesa",
    "row3Type": "Avviso di servizio",
    "row3State": "Rifiutato",
    "row3Receipt": "Dettaglio errore",
    "footerText": "Segui ogni messaggio dall'invio fino alla conferma della rete di destinazione."
  },
  "protectionTitle": "Sicurezza del traffico e prevenzione delle frodi",
  "protectionBadge": "INTEGRITÀ DELLA RETE",
  "protectionCards": [
    {
      "title": "Rilevamento del traffico anomalo",
      "desc": "Individua modelli insoliti e applica filtri automatici per prevenire SMS pumping e attacchi spam."
    },
    {
      "title": "Conformità e gestione liste di blocco",
      "desc": "Gestione centralizzata dei rifiuti e applicazione delle normative locali per proteggere il mittente."
    },
    {
      "title": "Protezione del Sender ID",
      "desc": "Salvaguarda gli identificatori alfanumerici contro la falsificazione e l'uso non autorizzato."
    }
  ],
  "timelineBadge": "PIANO DI INTEGRAZIONE",
  "timelineTitle": "Attivazione strutturata in 4 passaggi",
  "timelineSubtitle": "Una metodologia collaudata per connettere la tua piattaforma senza interruzioni.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Definizione dei requisiti",
      "desc": "Conferma delle destinazioni, dei volumi previsti, dei requisiti del mittente e delle priorità commerciali."
    },
    {
      "step": "2",
      "title": "Configurazione tecnica",
      "desc": "Attivazione delle credenziali SMPP/API e impostazione delle whitelist IP autorizzate."
    },
    {
      "step": "3",
      "title": "Test di connettività",
      "desc": "Verifica di latenza, codifica dei caratteri e corretta ricezione dei DLR su reti reali."
    },
    {
      "step": "4",
      "title": "Avvio in produzione",
      "desc": "Attivazione del traffico commerciale con monitoraggio dedicato da parte dei nostri ingegneri."
    }
  ],
  "integrationPlan": {
    "title": "La tua connessione SMS all'ingrosso",
    "planBadge": "PIANO DI INTEGRAZIONE",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Messaggistica A2P",
    "formats": "GSM-7 / Unicode internazionale",
    "feedback": "Ricevute di consegna (DLR)",
    "senderSetup": "Configurazione specifica per mercato",
    "check1": "Verifica delle credenziali e della connettività",
    "check2": "Validazione del mittente e delle ricevute DLR",
    "discussNote": "Contattaci per individuare l'interfaccia ideale per la tua piattaforma.",
    "discussBtn": "Discuti l'integrazione"
  },
  "faqBadge": "DOMANDE FREQUENTI",
  "faqTitle": "Tutto ciò che c'è da sapere sugli SMS all'ingrosso",
  "faqSubtitle": "Risposte chiare su interfacce, protocolli e terminazione del traffico.",
  "faqs": [
    {
      "q": "A chi è rivolto il servizio di SMS all'ingrosso?",
      "a": "A operatori di telecomunicazioni, aggregatori di SMS, piattaforme CPaaS e aziende con grandi volumi di traffico A2P internazionale."
    },
    {
      "q": "Quali interfacce e protocolli sono supportati?",
      "a": "Supportiamo il protocollo standard ad alte prestazioni SMPP v3.4 e API REST moderne con notifiche tramite webhook."
    },
    {
      "q": "Come viene gestita la registrazione dei Sender ID alfanumerici?",
      "a": "Il nostro team di conformità assiste l'intera procedura di richiesta e approvazione presso gli operatori secondo le norme locali."
    },
    {
      "q": "Quale livello di trasparenza viene garantito sulle consegne?",
      "a": "Forniamo ricevute DLR in tempo reale con codici di errore standardizzati e telemetria di rete completa via API e portale."
    }
  ],
  "ctaBadge": "INIZIA OGGI",
  "ctaTitle": "Pronto a ottimizzare la tua connettività SMS all'ingrosso?",
  "ctaSubtitle": "Connettiti con i nostri specialisti per progettare una strategia di instradamento su misura per le tue destinazioni.",
  "contactUs": "Contatta uno specialista",
  "ctaFootnote": "Ambienti di test dedicati e analisi del traffico disponibili per carrier e aziende."
};

const ko: WholesaleMessageTranslation = {
  "heroBadge": "도매 SMS • 글로벌 메시징 인프라",
  "heroTitle": "모든 메시지를 흔들림 없는 신뢰로 연결합니다.",
  "heroDesc": "통신사, 메시징 애그리게이터 및 플랫폼을 위한 캐리어 등급 도매 SMS 솔루션. 직접 캐리어 연동, 투명한 전송 보고서 및 전담 엔지니어링 지원을 통해 귀사의 A2P 트래픽을 글로벌 경로로 연결합니다.",
  "talkToExpert": "전문가와 상담하기",
  "exploreCapabilities": "주요 역량 보기",
  "stats": {
    "routing": "글로벌 라우팅",
    "routingLabel": "시장 중심의 도달 범위",
    "traffic": "A2P 메시징",
    "trafficLabel": "비즈니스 핵심 트래픽",
    "insights": "전송 인사이트",
    "insightsLabel": "운영 제어 및 모니터링"
  },
  "heroLiveBadge1": {
    "title": "A2P 연결성",
    "label": "귀사의 플랫폼. 전 세계 커버리지."
  },
  "heroLiveBadge2": {
    "title": "전 구간 가시성",
    "sub": "발송 • 경로 • 수신 확인"
  },
  "whyBadge": "INET 홀세일 SMS를 선택하는 이유",
  "whyTitle": "모든 고객 접점을 강화하는 메시징 인프라",
  "whySubtitle1": "직접 인터커넥트, 실시간 경로 감시 및 상세한 전송 리포트를 바탕으로 글로벌 SMS 착신 서비스를 제공합니다.",
  "whySubtitle2": "대규모 트래픽에서 완벽한 신뢰성과 안정성을 필요로 하는 애그리게이터와 엔터프라이즈를 위해 설계되었습니다.",
  "whyCards": [
    {
      "title": "글로벌 핵심 시장 도달",
      "desc": "고객이 필요로 하는 전 세계 전략적 목적지에 최적화된 국제 메시징 도달 범위를 구축합니다.",
      "footer": "글로벌 SMS 라우팅"
    },
    {
      "title": "통신사 직접 상호 연동",
      "desc": "고품질 직접 네트워크 링크와 관리형 연동을 통해 불필요한 네트워크 홉을 최소화합니다.",
      "footer": "통신사 등급 품질"
    },
    {
      "title": "실시간 모니터링",
      "desc": "전송 성공률, DLR 코드, 전송 지연 시간을 투명한 텔레메트리로 실시간 추적합니다.",
      "footer": "운영 가시성"
    },
    {
      "title": "탄력적인 대규모 확장성",
      "desc": "내결함성 고가용성 아키텍처로 하루 수백만 건의 대용량 메시지를 안정적으로 처리합니다.",
      "footer": "엔터프라이즈급 성능"
    }
  ],
  "capabilitiesBadge": "핵심 역량",
  "capabilitiesTitle": "기업 핵심 메시징 트래픽을 위한 전문 설계",
  "capabilitiesDesc": "검증된 안정성을 바탕으로 A2P 트래픽의 전 주기를 아우르는 포괄적인 도매 통신 서비스 스위트.",
  "designSolution": "솔루션 설계하기",
  "solutionNote": "최적의 라우팅과 맞춤형 요금제를 엔지니어링 팀과 상의하세요.",
  "capabilities": [
    {
      "tag": "기업 메시징",
      "title": "도매 A2P SMS 착신",
      "desc": "본인 인증, 긴급 안내, 마케팅 동의 고객을 위한 B2C 메시지를 안전하게 전송합니다."
    },
    {
      "tag": "글로벌 연결성",
      "title": "국제 라우팅 커버리지",
      "desc": "국가별 현지 규제에 맞춘 최적화 프로파일로 전 세계 이동통신망에 도달합니다."
    },
    {
      "tag": "표준 프로토콜",
      "title": "SMPP 및 API 연동",
      "desc": "고처리량 SMPP v3.4 연결 및 최신 표준 REST API를 지원합니다."
    },
    {
      "tag": "전송 신뢰성",
      "title": "지능형 라우팅 관리",
      "desc": "실시간 전송 성능 지표를 기반으로 항상 최적의 네트워크 경로를 동적으로 선택합니다."
    },
    {
      "tag": "규제 준수",
      "title": "발신번호(Sender ID) 등록 정책",
      "desc": "영숫자 발신번호 및 숏코드의 현지 규제 등록을 전문가가 완벽하게 지원합니다."
    },
    {
      "tag": "고급 분석 리포트",
      "title": "전송 수신 확인(DLR) 및 텔레메트리",
      "desc": "신속한 문제 해결과 진단을 위한 상세 DLR 및 상태 코드 분석을 제공합니다."
    }
  ],
  "howItWorksBadge": "작동 방식",
  "howItWorksTitle": "연동부터 글로벌 도달까지 단 3단계",
  "howItWorksSubtitle": "국제 SMS 연결을 신속하고 안전하게 개통하기 위한 표준화된 프로세스.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "플랫폼 연동",
      "desc": "협의된 SMPP 또는 API 연결을 통해 발신자 및 목적지 설정과 함께 A2P 메시지를 전송합니다.",
      "note": "귀사 애플리케이션 → iNet"
    },
    {
      "step": "02",
      "title": "지능형 라우팅",
      "desc": "귀사의 트래픽 특성에 가장 적합한 통신사 회선으로 각 메시지를 분배 전송합니다.",
      "note": "캐리어 라우팅 엔진"
    },
    {
      "step": "03",
      "title": "리포트 및 최적화",
      "desc": "실시간 전송 영수증을 확인하고 전담 기술 지원을 바탕으로 규모를 확장합니다.",
      "note": "착신 네트워크 수신 확인 완료"
    }
  ],
  "networkBadge": "네트워크 및 커버리지",
  "networkTitle": "전 세계 모든 목적지를 위한 캐리어급 연결성",
  "networkDesc": "고가용성 분산 인프라를 바탕으로 전 세계 1,000개 이상의 이동통신망에 연결됩니다.",
  "networkBullets": [
    "글로벌 주요 통신사와의 직접 및 관리형 상호 연동",
    "GSM-7 및 다국어 유니코드(Unicode) 완벽 지원",
    "지리적으로 분산된 다중 이중화 고가용성 인프라",
    "24/7/365 네트워크 운영 센터(NOC) 전문 모니터링"
  ],
  "networkStats": [
    {
      "val": "통신사 중심",
      "label": "연동 파트너십 전략"
    },
    {
      "val": "시장 밀착형",
      "label": "라우팅 및 발신자 정책"
    }
  ],
  "networkBadgeOverlay": {
    "title": "견고한 통신사 파트너십 네트워크",
    "sub": "직접 경로 • 관리형 인터커넥트 노드"
  },
  "networkFooterNote": "경로 가용성 및 발신번호 정책은 목적지 국가의 현지 법률 및 규정에 따릅니다.",
  "momentsBadge": "활용 사례",
  "momentsTitle": "즉시성과 정확성이 요구되는 순간을 위해",
  "momentsSubtitle": "고객 경험과 신뢰를 결정짓는 핵심 메시지를 지연 없이 정확하게 전달합니다.",
  "moments": [
    {
      "title": "본인 인증 및 2차 인증(2FA)",
      "desc": "우선순위 A2P SMS를 통해 안전한 로그인, OTP 인증번호 및 금융 거래 승인을 지원합니다.",
      "footer": "OTP 및 신속한 본인 인증"
    },
    {
      "title": "금융 및 결제 알림",
      "desc": "은행 승인 내역, 결제 확인, 계좌 변동 알림을 실시간으로 지연 없이 전달합니다.",
      "footer": "실시간 거래 알림"
    },
    {
      "title": "서비스 알림 및 일정 안내",
      "desc": "예약 확인, 배송 상태 업데이트 및 긴급 서비스 공지를 정해진 시간에 안내합니다.",
      "footer": "운영 및 알림 메시지"
    },
    {
      "title": "동의 기반 고객 안내",
      "desc": "수신 동의를 마친 회원 고객에게 관련 안내 및 혜택 정보를 관련 법규에 맞추어 전달합니다.",
      "footer": "동의 기반 메시징"
    }
  ],
  "intelligenceBadge": "전송 인텔리전스",
  "intelligenceTitle": "모든 메시지에 대한 완전한 통제와 가시성",
  "intelligenceDesc": "상세한 트래픽 지표와 상태 코드 분석, 사전 예방 감시를 바탕으로 신속하게 의사결정합니다.",
  "intelligenceBullets": [
    "개별 메시지 단위의 완전한 발송 생애주기 추적",
    "회선 불안정 발생 시 자동 우회 경로 전환",
    "지연 시간 이상 징후에 대한 실시간 알림",
    "정산 및 대사를 위한 상세 감사 로그 제공"
  ],
  "intelligenceFootnote": "모든 텔레메트리 지표와 상태 코드는 실시간 DLR을 통해 제공됩니다.",
  "messageLogCard": {
    "title": "메시지 전송 피드",
    "badge": "모니터링 예시",
    "tab1": "전송 로그",
    "tab2": "경로",
    "tab3": "목적지",
    "colType": "메시지 유형",
    "colState": "상태",
    "colReceipt": "영수증",
    "row1Type": "본인 인증",
    "row1State": "전송 완료",
    "row1Receipt": "수신 확인",
    "row2Type": "주문 업데이트",
    "row2State": "처리 중",
    "row2Receipt": "대기",
    "row3Type": "서비스 알림",
    "row3State": "거부됨",
    "row3Receipt": "오류 상세",
    "footerText": "발송 요청부터 최종 단말 네트워크 확인까지 전 과정을 추적합니다."
  },
  "protectionTitle": "트래픽 보호 및 부정 사용 방지",
  "protectionBadge": "네트워크 무결성",
  "protectionCards": [
    {
      "title": "이상 트래픽 감지 및 차단",
      "desc": "비정상적인 트래픽 급증을 실시간 감지하여 SMS 펌핑 및 스팸 공격으로부터 시스템을 보호합니다."
    },
    {
      "title": "규제 준수 및 차단 목록 관리",
      "desc": "수신 거부 목록 자동 동기화와 현지 규제 준수를 통해 발신자 신뢰도를 안전하게 유지합니다."
    },
    {
      "title": "발신번호(Sender ID) 사칭 방지",
      "desc": "승인된 영숫자 발신번호의 위조 및 무단 도용을 원천 방지합니다."
    }
  ],
  "timelineBadge": "구축 일정",
  "timelineTitle": "체계적인 4단계 연동 로드맵",
  "timelineSubtitle": "기존 서비스에 영향을 주지 않고 안전하게 시스템을 연결하는 검증된 프로세스.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "요구사항 분석",
      "desc": "목적지 국가, 예상 트래픽 규모, 발신번호 규제 요건 및 상업적 조건 확정."
    },
    {
      "step": "2",
      "title": "기술 환경 구성",
      "desc": "SMPP/API 연동 계정 발급 및 보안 IP 화이트리스트 등록."
    },
    {
      "step": "3",
      "title": "연결 및 품질 검증",
      "desc": "실제 네트워크 환경에서 문자 인코딩, 도달 속도 및 DLR 수신 정확성 검증."
    },
    {
      "step": "4",
      "title": "상용 서비스 개시",
      "desc": "전담 엔지니어의 집중 모니터링 하에 본 트래픽 안전 오픈."
    }
  ],
  "integrationPlan": {
    "title": "귀사의 도매 SMS 연동 플랜",
    "planBadge": "연동 규격서",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P 비즈니스 메시징",
    "formats": "GSM-7 / 다국어 유니코드",
    "feedback": "실시간 전송 확인서 (DLR)",
    "senderSetup": "국가별 맞춤 규격",
    "check1": "계정 인증 및 네트워크 연결 테스트",
    "check2": "발신번호 유효성 및 DLR 수신 검증",
    "discussNote": "귀사 시스템에 가장 적합한 연동 방식에 대해 기술팀과 상의하세요.",
    "discussBtn": "연동 상담 신청"
  },
  "faqBadge": "자주 묻는 질문",
  "faqTitle": "도매 SMS에 대해 자주 묻는 질문",
  "faqSubtitle": "연결 프로토콜, 라우팅 및 착신 품질에 대한 궁금증을 풀어드립니다.",
  "faqs": [
    {
      "q": "도매 SMS 서비스는 어떤 기업에 적합한가요?",
      "a": "통신 사업자, SMS 애그리게이터, CPaaS 플랫폼 및 대규모 국제 A2P 메시지를 정기적으로 발송하는 글로벌 기업을 위해 제공됩니다."
    },
    {
      "q": "어떤 연동 인터페이스와 프로토콜을 지원하나요?",
      "a": "업계 표준 고성능 SMPP v3.4 프로토콜과 웹훅 콜백을 지원하는 최신 REST API를 모두 지원합니다."
    },
    {
      "q": "해외 국가별 영숫자 발신번호(Sender ID) 등록은 지원되나요?",
      "a": "네, 각 국가별 규제 및 현지 통신사 가이드라인에 맞추어 전문 컴플라이언스 팀이 등록 서류와 절차를 지원합니다."
    },
    {
      "q": "전송 결과에 대한 가시성은 어느 정도로 제공되나요?",
      "a": "표준화된 에러 코드가 포함된 실시간 DLR과 상세 통계 지표를 API 및 관리자 포털을 통해 즉시 확인하실 수 있습니다."
    }
  ],
  "ctaBadge": "지금 시작하기",
  "ctaTitle": "귀사의 글로벌 SMS 연결 품질을 업그레이드할 준비가 되셨나요?",
  "ctaSubtitle": "전문 통신 컨설턴트와 상담하고 주요 타깃 국가에 최적화된 라우팅 전략을 수립해 보세요.",
  "contactUs": "전문가와 상담하기",
  "ctaFootnote": "통신사 및 글로벌 기업을 위한 전용 테스트 계정 및 트래픽 분석 컨설팅을 제공합니다."
};

const nl: WholesaleMessageTranslation = {
  "heroBadge": "WHOLESALE SMS • WERELDWIJDE BERICHTENINFRASTRUCTUUR",
  "heroTitle": "Elk bericht, verbonden met absolute betrouwbaarheid.",
  "heroDesc": "Wholesale SMS van carrier-niveau voor telecomoperators, aggregators en berichtenplatforms. Verbind uw A2P-verkeer met wereldwijde routes via directe carrier-koppelingen en transparante afleverrapportages.",
  "talkToExpert": "Praat met een expert",
  "exploreCapabilities": "Ontdek mogelijkheden",
  "stats": {
    "routing": "Wereldwijde routering",
    "routingLabel": "Marktgericht bereik",
    "traffic": "A2P-berichtenverkeer",
    "trafficLabel": "Bedrijfskritisch verkeer",
    "insights": "Afleverinzichten",
    "insightsLabel": "Operationele controle"
  },
  "heroLiveBadge1": {
    "title": "A2P-connectiviteit",
    "label": "Uw platform. Wereldwijd bereik."
  },
  "heroLiveBadge2": {
    "title": "Zichtbaarheid in elke fase",
    "sub": "Verzending • Route • Bevestiging"
  },
  "whyBadge": "WAAROM KIEZEN VOOR INET WHOLESALE SMS",
  "whyTitle": "Berichteninfrastructuur die elke interactie versterkt",
  "whySubtitle1": "Wij bieden wereldwijde SMS-terminatie ondersteund door directe interconnecties, actieve route-monitoring en gedetailleerde afleverrapportages.",
  "whySubtitle2": "Ontworpen voor aggregators, carriers en enterprises die bewezen stabiliteit op grote schaal vereisen.",
  "whyCards": [
    {
      "title": "Bereik wereldwijde markten",
      "desc": "Bouw internationaal SMS-bereik op voor de strategische bestemmingen die uw klanten nodig hebben.",
      "footer": "Wereldwijde SMS-routering"
    },
    {
      "title": "Directe carrier-interconnecties",
      "desc": "Minimaliseer tussenstappen met directe netwerkverbindingen en hoogwaardige overeenkomsten.",
      "footer": "Carrier-grade kwaliteit"
    },
    {
      "title": "Realtime monitoring",
      "desc": "Volg afleverpercentages, DLR-codes en transmissievertragingen met transparante telemetrie.",
      "footer": "Operationele zichtbaarheid"
    },
    {
      "title": "Elastische schaalbaarheid",
      "desc": "Verstuur miljoenen berichten per dag met een fouttolerante en veerkrachtige architectuur.",
      "footer": "Enterprise-prestaties"
    }
  ],
  "capabilitiesBadge": "KERNVAARDIGHEDEN",
  "capabilitiesTitle": "Ontworpen voor bedrijfskritisch berichtenverkeer",
  "capabilitiesDesc": "Onze wholesale-diensten dekken de volledige levenscyclus van A2P-verkeer af met bewezen betrouwbaarheid.",
  "designSolution": "Oplossing ontwerpen",
  "solutionNote": "Overleg met onze engineers om routes en tarieven te optimaliseren.",
  "capabilities": [
    {
      "tag": "Zakelijke berichten",
      "title": "Wholesale A2P SMS-terminatie",
      "desc": "Verzend B2C-SMS voor authenticatie, waarschuwingen en goedgekeurde klantinteracties."
    },
    {
      "tag": "Wereldwijde connectiviteit",
      "title": "Internationale routering",
      "desc": "Bereik mobiele netwerkoperators wereldwijd met marktconforme routeprofielen."
    },
    {
      "tag": "Standaardprotocollen",
      "title": "SMPP- en API-integratie",
      "desc": "Verbind via krachtige SMPP v3.4-koppelingen of moderne, gedocumenteerde REST-API's."
    },
    {
      "tag": "Afleverzekerheid",
      "title": "Intelligent routebeheer",
      "desc": "Adaptieve routering selecteert het beste pad op basis van realtime leveringsprestaties."
    },
    {
      "tag": "Regelgeving & compliance",
      "title": "Afzender-ID's & registratiebeleid",
      "desc": "Deskundige ondersteuning voor alfanumerieke Sender ID's en lokale regelgeving."
    },
    {
      "tag": "Geavanceerde rapportage",
      "title": "Afleverbevestigingen & telemetrie",
      "desc": "Gedetailleerde DLR's en analyses voor snelle operationele diagnostiek."
    }
  ],
  "howItWorksBadge": "HOE HET WERKT",
  "howItWorksTitle": "Van integratie tot wereldwijd bereik in drie stappen",
  "howItWorksSubtitle": "Een gestructureerd proces om uw internationale SMS-verbinding snel en veilig te activeren.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Verbind uw platform",
      "desc": "Verstuur A2P-berichten via een overeengekomen SMPP- of API-koppeling met uw instellingen.",
      "note": "Uw applicatie → iNet"
    },
    {
      "step": "02",
      "title": "Intelligente routering",
      "desc": "Elk bericht wordt via de meest geschikte operatorverbinding voor uw verkeersprofiel geleid.",
      "note": "Carrier routeringsengine"
    },
    {
      "step": "03",
      "title": "Rapportages & optimalisatie",
      "desc": "Ontvang realtime afleverbevestigingen en schaal volumes op met continue technische ondersteuning.",
      "note": "DLR bevestigd door bestemmingsnetwerk"
    }
  ],
  "networkBadge": "NETWERK & DEKKING",
  "networkTitle": "Carrier-grade connectiviteit voor elke bestemming",
  "networkDesc": "Toegang tot meer dan 1.000 mobiele netwerken wereldwijd met een infrastructuur geoptimaliseerd voor hoge beschikbaarheid.",
  "networkBullets": [
    "Directe en beheerde interconnecties met toonaangevende operators wereldwijd",
    "Volledige ondersteuning voor GSM-7 en meertalige Unicode-tekensets",
    "Geografisch redundante en veilige cloudinfrastructuur",
    "24/7/365 toezicht door ons Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Carrier-gestuurd",
      "label": "Connectiviteitsstrategie"
    },
    {
      "val": "Marktbewust",
      "label": "Routerings- & afzenderbeleid"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Gesteund door sterke operatorrelaties",
    "sub": "Directe routes • Beheerde interconnects"
  },
  "networkFooterNote": "Routebeschikbaarheid en afzenderbeleid zijn onderhevig aan lokale wet- en regelgeving per land.",
  "momentsBadge": "TOEPASSINGEN",
  "momentsTitle": "Gebouwd voor bedrijfskritische interacties",
  "momentsSubtitle": "Garandeer de tijdige aflevering van berichten die het vertrouwen van uw eindgebruikers bepalen.",
  "moments": [
    {
      "title": "Authenticatie & 2FA",
      "desc": "Faciliteer veilige logins, OTP-verificatiecodes en transactiegoedkeuringen met prioritaire A2P-SMS.",
      "footer": "OTP & snelle verificatie"
    },
    {
      "title": "Transactionele meldingen",
      "desc": "Verstuur bankwaarschuwingen, orderbevestigingen en statusupdates zonder vertraging.",
      "footer": "Realtime waarschuwingen"
    },
    {
      "title": "Afspraakherinneringen & updates",
      "desc": "Lever afspraakbevestigingen, bezorgstatussen en dringende servicemeldingen op tijd af.",
      "footer": "Operationele notificaties"
    },
    {
      "title": "Klantbetrokkenheid op toestemming",
      "desc": "Communiceer met geabonneerde klanten via informatieve berichten volgens de opt-in richtlijnen.",
      "footer": "Conforme communicatie"
    }
  ],
  "intelligenceBadge": "AFLEVERINTELLIGENTIE",
  "intelligenceTitle": "Volledige zichtbaarheid en controle over elk bericht",
  "intelligenceDesc": "Neem weloverwogen beslissingen met diepgaande verkeersstatistieken en proactieve monitoring.",
  "intelligenceBullets": [
    "Volledige statuscyclusbewaking van elk individueel bericht",
    "Automatische failover-omschakeling bij netwerkstoringen",
    "Directe waarschuwingen bij ongebruikelijke latentieafwijkingen",
    "Uitgebreide auditlogs voor reconciliatie en geschillenbeslechting"
  ],
  "intelligenceFootnote": "Alle telemetrie en statuscodes worden realtime doorgegeven via DLR-berichten.",
  "messageLogCard": {
    "title": "Berichtenlogboek",
    "badge": "VOORBEELDWEERGAVE",
    "tab1": "Logboek",
    "tab2": "Routes",
    "tab3": "Bestemmingen",
    "colType": "BERICHTTYPE",
    "colState": "STATUS",
    "colReceipt": "ONTVANGST",
    "row1Type": "Verificatie",
    "row1State": "Afgeleverd",
    "row1Receipt": "Ontvangen",
    "row2Type": "Bestelupdate",
    "row2State": "Verzonden",
    "row2Receipt": "In behandeling",
    "row3Type": "Servicewaarschuwing",
    "row3State": "Afgewezen",
    "row3Receipt": "Foutdetails",
    "footerText": "Volg elk bericht vanaf indiening tot netwerkbevestiging."
  },
  "protectionTitle": "Beveiliging & fraudepreventie",
  "protectionBadge": "NETWERKINTEGRITEIT",
  "protectionCards": [
    {
      "title": "Detectie van afwijkend verkeer",
      "desc": "Signaleer ongebruikelijke patronen direct om SMS-pumping en spamaanvallen te blokkeren."
    },
    {
      "title": "Naleving & blokkeerlijstbeheer",
      "desc": "Automatische verwerking van afmeldingen ter bescherming van uw afzenderreputatie."
    },
    {
      "title": "Bescherming van Sender ID",
      "desc": "Bescherm alfanumerieke afzenderidentificaties tegen spoofing en misbruik in gereguleerde markten."
    }
  ],
  "timelineBadge": "INTEGRATIEPLAN",
  "timelineTitle": "Gestructureerde oplevering in 4 fasen",
  "timelineSubtitle": "Een beproefde methodologie om uw systemen naadloos aan te sluiten.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Scope & vereisten",
      "desc": "Bevestiging van doellanden, verwachte volumes, afzenderspecificaties en commerciële voorwaarden."
    },
    {
      "step": "2",
      "title": "Technische inrichting",
      "desc": "Aanmaken van SMPP-/API-inloggegevens en configureren van geautoriseerde IP-whitelists."
    },
    {
      "step": "3",
      "title": "Connectiviteitstests",
      "desc": "Validatie van latentie, tekencodering en correcte ontvangst van DLR's op echte netwerken."
    },
    {
      "step": "4",
      "title": "Livegang",
      "desc": "Inschakeling van commercieel verkeer onder actieve supervisie van onze netwerkingenieurs."
    }
  ],
  "integrationPlan": {
    "title": "Uw wholesale SMS-koppeling",
    "planBadge": "INTEGRATIEPLAN",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P-berichtenverkeer",
    "formats": "GSM-7 / Internationaal Unicode",
    "feedback": "Realtime afleverbevestigingen (DLR)",
    "senderSetup": "Marktspecifieke configuratie",
    "check1": "Inloggegevens en connectiviteitstest",
    "check2": "Validatie van afzender en DLR-ontvangst",
    "discussNote": "Bespreek met ons team welke interface het beste past bij uw architectuur.",
    "discussBtn": "Integratie bespreken"
  },
  "faqBadge": "VEELGESTELDE VRAGEN",
  "faqTitle": "Alles over wholesale SMS-diensten",
  "faqSubtitle": "Heldere antwoorden op vragen over koppelingen, protocollen en aflevering.",
  "faqs": [
    {
      "q": "Voor wie is wholesale SMS bedoeld?",
      "a": "Voor telecomaanbieders, SMS-aggregators, CPaaS-platformen en ondernemingen met grootschalig internationaal A2P-verkeer."
    },
    {
      "q": "Welke protocollen worden ondersteund?",
      "a": "Wij ondersteunen de standaard high-throughput SMPP v3.4-interface en moderne REST-API's met webhook-notificaties."
    },
    {
      "q": "Hoe werkt de registratie van alfanumerieke Sender ID's?",
      "a": "Ons complianceteam begeleidt het registratieproces bij de desbetreffende mobiele operators volgens de lokale wetgeving."
    },
    {
      "q": "Welke mate van transparantie wordt geboden over leveringen?",
      "a": "Wij leveren realtime DLR's met gestandaardiseerde foutcodes en uitgebreide netwerkmetrieken via API en portal."
    }
  ],
  "ctaBadge": "START VANDAAG",
  "ctaTitle": "Klaar om uw wholesale SMS-connectiviteit te optimaliseren?",
  "ctaSubtitle": "Neem contact op met onze telecomspecialisten om een routeringsstrategie op maat te ontwikkelen voor uw belangrijkste bestemmingen.",
  "contactUs": "Contact opnemen met een specialist",
  "ctaFootnote": "Toegewijde testomgevingen en verkeersanalyses beschikbaar voor carriers en ondernemingen."
};

const tr: WholesaleMessageTranslation = {
  "heroBadge": "TOPTAN SMS • KÜRESEL MESAJLAŞMA ALTYAPISI",
  "heroTitle": "Her mesaj, tam bir güvenle hedefine ulaştırılır.",
  "heroDesc": "Operatörler, mesajlaşma toplayıcıları ve platformlar için operatör düzeyinde toptan SMS hizmeti. A2P trafiğinizi doğrudan operatör ara bağlantıları, teslimat şeffaflığı ve uzman mühendislik desteğiyle küresel rotalara bağlayın.",
  "talkToExpert": "Uzmanla Görüşün",
  "exploreCapabilities": "Yetenekleri Keşfedin",
  "stats": {
    "routing": "Küresel Yönlendirme",
    "routingLabel": "Piyasa Odaklı Erişim",
    "traffic": "A2P Mesajlaşma",
    "trafficLabel": "Kritik İş Trafiği",
    "insights": "Teslimat Analitiği",
    "insightsLabel": "Operasyonel Kontrol"
  },
  "heroLiveBadge1": {
    "title": "A2P Bağlantısı",
    "label": "Platformunuz. Küresel Erişim."
  },
  "heroLiveBadge2": {
    "title": "Her Adımda Şeffaflık",
    "sub": "Gönderim • Rota • Rapor"
  },
  "whyBadge": "NEDEN INET WHOLESALE SMS",
  "whyTitle": "Her iş etkileşimini güçlendiren mesajlaşma altyapısı",
  "whySubtitle1": "Doğrudan ara bağlantılar, aktif rota izleme ve ayrıntılı teslimat raporları ile desteklenen uluslararası SMS sonlandırma sağlıyoruz.",
  "whySubtitle2": "Büyük ölçekte kanıtlanmış kararlılık ve kesintisiz güvenilirlik gerektiren toplayıcılar ve kurumsal işletmeler için tasarlanmıştır.",
  "whyCards": [
    {
      "title": "Küresel Pazarlara Ulaşın",
      "desc": "Müşterilerinizin ihtiyaç duyduğu stratejik hedefler için uluslararası SMS erişimi oluşturun.",
      "footer": "Küresel SMS Yönlendirmesi"
    },
    {
      "title": "Doğrudan Operatör Bağlantıları",
      "desc": "Doğrudan ağ bağlantıları ve yönetilen anlaşmalarla gereksiz yönlendirme gecikmelerini en aza indirin.",
      "footer": "Operatör Düzeyinde Kalite"
    },
    {
      "title": "Gerçek Zamanlı İzleme",
      "desc": "Teslimat oranlarını, DLR kodlarını ve iletim gecikmelerini şeffaf telemetri ile takip edin.",
      "footer": "Operasyonel Görünürlük"
    },
    {
      "title": "Yüksek Ölçeklenebilirlik",
      "desc": "Hata toleranslı esnek mimariyle günde milyonlarca mesajı kesintisiz olarak iletin.",
      "footer": "Kurumsal Performans"
    }
  ],
  "capabilitiesBadge": "TEMEL YETENEKLER",
  "capabilitiesTitle": "Kurumsal kritik mesaj trafiği için özel olarak tasarlandı",
  "capabilitiesDesc": "Toptan telekom hizmet paketimiz, A2P trafiğinin tüm yaşam döngüsünü kanıtlanmış güvenilirlikle yönetir.",
  "designSolution": "Çözüm Tasarla",
  "solutionNote": "Rotaları ve fiyatlandırmayı optimize etmek için mühendislerimizle görüşün.",
  "capabilities": [
    {
      "tag": "Kurumsal Mesajlaşma",
      "title": "Toptan A2P SMS Sonlandırma",
      "desc": "Kimlik doğrulama, kritik bildirimler ve onaylı müşteri etkileşimi için B2C SMS iletimi."
    },
    {
      "tag": "Küresel Bağlantı",
      "title": "Uluslararası Rota Kapsamı",
      "desc": "Yerel düzenlemelere uygun rota profilleriyle dünya çapındaki mobil operatörlere ulaşın."
    },
    {
      "tag": "Standart Protokoller",
      "title": "SMPP ve API Entegrasyonu",
      "desc": "Yüksek verimli SMPP v3.4 bağlantıları veya modern REST API'ler aracılığıyla kolayca entegre olun."
    },
    {
      "tag": "Teslimat Güvenilirliği",
      "title": "Akıllı Rota Yönetimi",
      "desc": "Gerçek zamanlı teslimat performansı verilerine göre en iyi yolu dinamik olarak seçen uyarlanabilir yönlendirme."
    },
    {
      "tag": "Yasal Uyum",
      "title": "Gönderici Başlığı (Sender ID) Politikaları",
      "desc": "Alfanümerik başlıklar ve kısa kodların yerel mevzuata uygun tescili için uzman desteği."
    },
    {
      "tag": "Gelişmiş Raporlama",
      "title": "Teslimat Raporları (DLR) ve Telemetri",
      "desc": "Hızlı operasyonel teşhis ve analiz için ayrıntılı DLR raporları ve performans metrikleri."
    }
  ],
  "howItWorksBadge": "NASIL ÇALIŞIR",
  "howItWorksTitle": "Entegrasyondan küresel erişime üç adımda",
  "howItWorksSubtitle": "Uluslararası SMS bağlantınızı hızlı ve güvenli bir şekilde devreye almak için yapılandırılmış süreç.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Platformunuzu Bağlayın",
      "desc": "Gönderici ve hedef ayarlarınızla mutabık kalınan SMPP veya API bağlantısı üzerinden A2P mesajları gönderin.",
      "note": "Uygulamanız → iNet"
    },
    {
      "step": "02",
      "title": "Akıllı Yönlendirme",
      "desc": "Her mesaj paketini trafik profilinize en uygun operatör hattı üzerinden yönlendiriyoruz.",
      "note": "Operatör Yönlendirme Motoru"
    },
    {
      "step": "03",
      "title": "Raporlama ve İyileştirme",
      "desc": "Gerçek zamanlı teslimat raporları alın ve sürekli teknik destek ile hacminizi büyütün.",
      "note": "Hedef şebeke teslimat onayı"
    }
  ],
  "networkBadge": "AĞ VE KAPSAMA",
  "networkTitle": "Her hedef için operatör düzeyinde bağlantı",
  "networkDesc": "Yüksek erişilebilirlik için optimize edilmiş altyapı ile dünya çapında 1.000'den fazla mobil şebekeye erişim.",
  "networkBullets": [
    "Önde gelen küresel operatörlerle doğrudan ve yönetilen ara bağlantılar",
    "GSM-7 ve çok dilli Unicode kodlamalarına tam destek",
    "Coğrafi olarak dağıtılmış yedekli ve güvenli bulut mimarisi",
    "Ağ Operasyon Merkezi (NOC) tarafından 7/24/365 kesintisiz gözetim"
  ],
  "networkStats": [
    {
      "val": "Operatör Odaklı",
      "label": "Bağlantı Stratejisi"
    },
    {
      "val": "Piyasaya Uyumlu",
      "label": "Yönlendirme ve Gönderici Politikaları"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Güçlü operatör iş birlikleriyle desteklenir",
    "sub": "Doğrudan Rotalar • Yönetilen Ara Bağlantı Noktaları"
  },
  "networkFooterNote": "Rota kullanılabilirliği ve gönderici politikaları her ülkenin yerel düzenlemelerine tabidir.",
  "momentsBadge": "KULLANIM ALANLARI",
  "momentsTitle": "Zaman açısından kritik iş etkileşimleri için tasarlandı",
  "momentsSubtitle": "Kullanıcı güvenini belirleyen kritik mesajların zamanında teslim edilmesini garanti edin.",
  "moments": [
    {
      "title": "Kimlik Doğrulama ve 2FA",
      "desc": "Öncelikli A2P SMS ile güvenli oturum açma, OTP doğrulama kodları ve finansal işlem onaylarını destekleyin.",
      "footer": "OTP ve Hızlı Doğrulama"
    },
    {
      "title": "İşlemsel Bildirimler",
      "desc": "Banka uyarılarını, sipariş onaylarını ve hesap durumu güncellemelerini anında ulaştırın.",
      "footer": "Gerçek Zamanlı Bildirimler"
    },
    {
      "title": "Randevu ve Hizmet Hatırlatıcıları",
      "desc": "Randevu teyitlerini, teslimat durumlarını ve acil bakım duyurularını tam zamanında iletin.",
      "footer": "Operasyonel Bildirimler"
    },
    {
      "title": "İzinli Müşteri İletişimi",
      "desc": "Yasal izinleri alınmış müşterilere mevzuata uygun bilgilendirme mesajları gönderin.",
      "footer": "Onaylı Mesajlaşma"
    }
  ],
  "intelligenceBadge": "TESLİMAT ZEKA VE ANALİTİĞİ",
  "intelligenceTitle": "Her mesaj üzerinde tam görünürlük ve denetim",
  "intelligenceDesc": "Ayrıntılı trafik metrikleri, hata kodu analizi ve proaktif izleme ile bilinçli kararlar alın.",
  "intelligenceBullets": [
    "Her bağımsız mesaj için tam teslimat yaşam döngüsü takibi",
    "Ağ dalgalanmalarında otomatik alternatif rota geçişi",
    "Olağan dışı gecikme dalgalanmalarında anında uyarılar",
    "Mutabakat ve denetim için eksiksiz geçmiş kayıtları"
  ],
  "intelligenceFootnote": "Tüm telemetri metrikleri ve ağ durum kodları gerçek zamanlı DLR'lar aracılığıyla iletilir.",
  "messageLogCard": {
    "title": "Mesaj Günlüğü",
    "badge": "ÖRNEK GÖRÜNÜM",
    "tab1": "Günlük",
    "tab2": "Rotalar",
    "tab3": "Hedefler",
    "colType": "MESAJ TÜRÜ",
    "colState": "DURUM",
    "colReceipt": "RAPOR",
    "row1Type": "Doğrulama",
    "row1State": "Teslim Edildi",
    "row1Receipt": "Alındı",
    "row2Type": "Sipariş Güncellemesi",
    "row2State": "İletildi",
    "row2Receipt": "Beklemede",
    "row3Type": "Hizmet Uyarısı",
    "row3State": "Reddedildi",
    "row3Receipt": "Hata Ayrıntısı",
    "footerText": "Gönderimden şebeke onayına kadar her mesajı adım adım izleyin."
  },
  "protectionTitle": "Trafik Güvenliği ve Dolandırıcılık Önleme",
  "protectionBadge": "AĞ BÜTÜNLÜĞÜ",
  "protectionCards": [
    {
      "title": "Anormal Trafik Tespiti",
      "desc": "Olağan dışı desenleri anında tespit ederek SMS pumping ve spam saldırılarına karşı koruma sağlayın."
    },
    {
      "title": "Mevzuata Uyum ve Engelleme Listeleri",
      "desc": "Abonelikten çıkma taleplerinin otomatik senkronizasyonu ile gönderici itibarını koruyun."
    },
    {
      "title": "Sender ID Sahteciliğine Karşı Koruma",
      "desc": "Kayıtlı alfanümerik başlıkları yetkisiz kullanım ve taklit girişimlerine karşı koruyun."
    }
  ],
  "timelineBadge": "ENTEGRASYON PLANI",
  "timelineTitle": "4 aşamalı yapılandırılmış devreye alma",
  "timelineSubtitle": "Platformunuzu kesintisiz bağlamak için sahada kanıtlanmış metodoloji.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Gereksinim Belirleme",
      "desc": "Hedef ülkeler, beklenen trafik hacmi, başlık gereksinimleri ve ticari şartların netleştirilmesi."
    },
    {
      "step": "2",
      "title": "Teknik Kurulum",
      "desc": "SMPP/API erişim bilgilerinin oluşturulması ve güvenli IP beyaz listelerinin tanımlanması."
    },
    {
      "step": "3",
      "title": "Bağlantı Testleri",
      "desc": "Gerçek operatör şebekelerinde gecikme, karakter kodlaması ve DLR raporlarının doğrulanması."
    },
    {
      "step": "4",
      "title": "Canlı Yayına Geçiş",
      "desc": "Ağ mühendislerimizin gözetiminde ticari trafiğin güvenli şekilde başlatılması."
    }
  ],
  "integrationPlan": {
    "title": "Toptan SMS Bağlantınız",
    "planBadge": "ENTEGRASYON PLANI",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P Mesaj Trafiği",
    "formats": "GSM-7 / Çok Dilli Unicode",
    "feedback": "Gerçek Zamanlı Teslimat Raporları (DLR)",
    "senderSetup": "Pazara Özel Yapılandırma",
    "check1": "Erişim bilgileri ve bağlantı doğrulaması",
    "check2": "Gönderici başlığı ve DLR kontrolü",
    "discussNote": "Sisteminiz için en ideal entegrasyon modelini belirlemek üzere ekibimizle görüşün.",
    "discussBtn": "Entegrasyonu Görüşün"
  },
  "faqBadge": "SIKÇA SORULAN SORULAR",
  "faqTitle": "Toptan SMS hakkında merak edilenler",
  "faqSubtitle": "Arayüzler, protokoller ve sonlandırma hakkında net cevaplar.",
  "faqs": [
    {
      "q": "Toptan SMS hizmeti kimler için uygundur?",
      "a": "Telekom operatörleri, SMS toplayıcıları, CPaaS sağlayıcıları ve büyük hacimli uluslararası A2P trafiği olan kurumsal şirketler için."
    },
    {
      "q": "Hangi entegrasyon protokolleri destekleniyor?",
      "a": "Yüksek verimli endüstri standardı SMPP v3.4 protokolünü ve webhook bildirimli modern REST API'leri destekliyoruz."
    },
    {
      "q": "Alfanümerik başlık (Sender ID) kayıtları nasıl yapılır?",
      "a": "Uyum ekibimiz, her ülkenin yasal düzenlemelerine ve yerel operatör kurallarına uygun olarak kayıt sürecini yönetir."
    },
    {
      "q": "Mesaj teslimat durumları ne kadar şeffaf takip edilebilir?",
      "a": "Standart hata kodları ve kapsamlı telemetri içeren gerçek zamanlı DLR'lar hem API hem de kullanıcı paneli üzerinden sunulur."
    }
  ],
  "ctaBadge": "BUGÜN BAŞLAYIN",
  "ctaTitle": "Küresel SMS bağlantınızı optimize etmeye hazır mısınız?",
  "ctaSubtitle": "Stratejik hedefleriniz için özel bir yönlendirme planı oluşturmak üzere uzmanlarımızla iletişime geçin.",
  "contactUs": "Uzmanla İletişime Geçin",
  "ctaFootnote": "Operatörler ve kurumsal müşteriler için özel test ortamı ve trafik analizi danışmanlığı mevcuttur."
};

const id: WholesaleMessageTranslation = {
  "heroBadge": "SMS GROSIR • INFRASTRUKTUR PERPESANAN GLOBAL",
  "heroTitle": "Setiap pesan, terhubung dengan keandalan penuh.",
  "heroDesc": "SMS grosir kelas operator untuk penyedia telekomunikasi, agregator, dan platform perpesanan. Hubungkan lalu lintas A2P Anda ke rute global dengan interkoneksi langsung dan transparansi pengiriman penuh.",
  "talkToExpert": "Bicara dengan Pakar",
  "exploreCapabilities": "Jelajahi Kemampuan",
  "stats": {
    "routing": "Perutean Global",
    "routingLabel": "Jangkauan Berbasis Pasar",
    "traffic": "Perpesanan A2P",
    "trafficLabel": "Lalu Lintas Kritis Bisnis",
    "insights": "Wawasan Pengiriman",
    "insightsLabel": "Kontrol Operasional"
  },
  "heroLiveBadge1": {
    "title": "Konektivitas A2P",
    "label": "Platform Anda. Jangkauan Global."
  },
  "heroLiveBadge2": {
    "title": "Visibilitas Tiap Langkah",
    "sub": "Kirim • Rute • Bukti Terima"
  },
  "whyBadge": "MENGAPA INET WHOLESALE SMS",
  "whyTitle": "Infrastruktur perpesanan yang memperkuat setiap interaksi bisnis",
  "whySubtitle1": "Kami menyediakan terminasi SMS internasional yang didukung interkoneksi langsung, pemantauan rute aktif, dan laporan pengiriman terperinci.",
  "whySubtitle2": "Dirancang untuk agregator, operator, dan perusahaan yang membutuhkan stabilitas teruji dalam volume besar.",
  "whyCards": [
    {
      "title": "Jangkau Pasar Global",
      "desc": "Bangun jangkauan perpesanan internasional untuk destinasi strategis yang dibutuhkan pelanggan Anda.",
      "footer": "Perutean SMS Global"
    },
    {
      "title": "Interkoneksi Operator Langsung",
      "desc": "Minimalkan perantara dengan tautan jaringan langsung dan perjanjian interkoneksi berkualitas tinggi.",
      "footer": "Kualitas Kelas Operator"
    },
    {
      "title": "Pemantauan Waktu Nyata",
      "desc": "Pantau tingkat pengiriman, kode DLR, dan latensi transmisi dengan telemetri transparan.",
      "footer": "Visibilitas Operasional"
    },
    {
      "title": "Skalabilitas Elastis",
      "desc": "Kirim jutaan pesan per hari dengan arsitektur yang tangguh dan toleran terhadap kegagalan.",
      "footer": "Performa Perusahaan"
    }
  ],
  "capabilitiesBadge": "KEMAMPUAN UTAMA",
  "capabilitiesTitle": "Dirancang untuk lalu lintas perpesanan penting bisnis",
  "capabilitiesDesc": "Rangkaian layanan telekomunikasi grosir kami mengelola seluruh siklus hidup lalu lintas A2P dengan keandalan terbukti.",
  "designSolution": "Rancang Solusi",
  "solutionNote": "Konsultasikan dengan teknisi kami untuk mengoptimalkan rute dan tarif.",
  "capabilities": [
    {
      "tag": "Perpesanan Bisnis",
      "title": "Terminasi SMS A2P Grosir",
      "desc": "Kirim SMS B2C untuk autentikasi, pemberitahuan penting, dan interaksi pelanggan yang disetujui."
    },
    {
      "tag": "Konektivitas Global",
      "title": "Cakupan Perutean Internasional",
      "desc": "Jangkau operator jaringan seluler di seluruh dunia dengan profil rute yang sesuai peraturan setempat."
    },
    {
      "tag": "Protokol Standar",
      "title": "Integrasi SMPP dan API",
      "desc": "Terhubung melalui tautan SMPP v3.4 berkecepatan tinggi atau REST API modern yang terdokumentasi."
    },
    {
      "tag": "Keandalan Pengiriman",
      "title": "Manajemen Rute Cerdas",
      "desc": "Perutean adaptif yang secara dinamis memilih jalur terbaik berdasarkan performa pengiriman langsung."
    },
    {
      "tag": "Kepatuhan Regulasi",
      "title": "Sender ID dan Kebijakan Pendaftaran",
      "desc": "Dukungan ahli untuk pendaftaran ID Pengirim alfanumerik dan kode pendek sesuai regulasi lokal."
    },
    {
      "tag": "Pelaporan Mendalam",
      "title": "Tanda Terima Pengiriman (DLR) & Telemetri",
      "desc": "DLR terperinci dan analitik lengkap untuk diagnosis operasional yang cepat dan tepat."
    }
  ],
  "howItWorksBadge": "CARA KERJA",
  "howItWorksTitle": "Dari integrasi hingga jangkauan global dalam tiga langkah",
  "howItWorksSubtitle": "Proses terstruktur untuk mengaktifkan konektivitas SMS internasional Anda dengan aman dan cepat.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Hubungkan Platform Anda",
      "desc": "Kirim pesan A2P melalui koneksi SMPP atau API yang disepakati dengan konfigurasi pengirim dan tujuan Anda.",
      "note": "Aplikasi Anda → iNet"
    },
    {
      "step": "02",
      "title": "Perutean Cerdas",
      "desc": "Setiap paket dialihkan melalui tautan operator yang paling optimal untuk profil lalu lintas Anda.",
      "note": "Mesin Perutean Operator"
    },
    {
      "step": "03",
      "title": "Laporan & Optimalisasi",
      "desc": "Terima tanda terima pengiriman waktu nyata dan kembangkan volume pengiriman dengan dukungan teknis berkelanjutan.",
      "note": "DLR dikonfirmasi jaringan tujuan"
    }
  ],
  "networkBadge": "JARINGAN & CAKUPAN",
  "networkTitle": "Konektivitas tingkat operator untuk setiap tujuan",
  "networkDesc": "Akses ke lebih dari 1.000 jaringan seluler di seluruh dunia dengan infrastruktur yang dioptimalkan untuk ketersediaan tinggi.",
  "networkBullets": [
    "Interkoneksi langsung dan terkelola dengan operator global terkemuka",
    "Dukungan penuh untuk pengkodean GSM-7 dan Unicode multibahasa",
    "Infrastruktur terdistribusi secara geografis dengan failover otomatis",
    "Dukungan teknis 24/7/365 oleh Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Berbasis Operator",
      "label": "Strategi Interkoneksi"
    },
    {
      "val": "Sadar Regulasi",
      "label": "Kebijakan Rute & Pengirim"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Didukung kemitraan operator yang kuat",
    "sub": "Rute Langsung • Titik Interkoneksi Terkelola"
  },
  "networkFooterNote": "Ketersediaan rute dan kebijakan ID pengirim tunduk pada peraturan lokal masing-masing negara.",
  "momentsBadge": "SKENARIO PENGGUNAAN",
  "momentsTitle": "Dibuat untuk interaksi bisnis yang penting",
  "momentsSubtitle": "Pastikan pengiriman tepat waktu untuk pesan yang menentukan kepercayaan dan pengalaman pengguna.",
  "moments": [
    {
      "title": "Autentikasi & 2FA",
      "desc": "Dukung login aman, kode OTP, dan konfirmasi transaksi perbankan dengan SMS A2P prioritas.",
      "footer": "OTP & Verifikasi Cepat"
    },
    {
      "title": "Notifikasi Transaksional",
      "desc": "Kirim peringatan perbankan, konfirmasi pesanan, dan pembaruan akun seketika tanpa jeda.",
      "footer": "Peringatan Waktu Nyata"
    },
    {
      "title": "Pengingat Layanan & Jadwal",
      "desc": "Kirimkan pengingat janji temu, status pengiriman logistik, dan info pemeliharaan tepat waktu.",
      "footer": "Notifikasi Operasional"
    },
    {
      "title": "Interaksi Pelanggan Berizin",
      "desc": "Jangkau pelanggan yang berlangganan melalui pesan informatif dengan tetap mematuhi hukum privasi.",
      "footer": "Perpesanan Berbasis Izin"
    }
  ],
  "intelligenceBadge": "INTELIJEN PENGIRIMAN",
  "intelligenceTitle": "Visibilitas dan kontrol penuh atas setiap pesan",
  "intelligenceDesc": "Ambil keputusan tepat didukung metrik lalu lintas terperinci dan pemantauan proaktif.",
  "intelligenceBullets": [
    "Pelacakan siklus hidup lengkap untuk setiap pesan individu",
    "Pengalihan rute otomatis jika terjadi fluktuasi jaringan",
    "Pemberitahuan instan saat terjadi anomali latensi",
    "Log audit terperinci untuk rekonsiliasi dan verifikasi data"
  ],
  "intelligenceFootnote": "Semua metrik telemetri dan kode status jaringan dikirimkan secara langsung melalui DLR.",
  "messageLogCard": {
    "title": "Log Pemantauan Pesan",
    "badge": "TAMPILAN CONTOH",
    "tab1": "Log Pesan",
    "tab2": "Rute",
    "tab3": "Tujuan",
    "colType": "JENIS PESAN",
    "colState": "STATUS",
    "colReceipt": "TANDA TERIMA",
    "row1Type": "Verifikasi",
    "row1State": "Terkirim",
    "row1Receipt": "Diterima",
    "row2Type": "Pembaruan Pesanan",
    "row2State": "Diproses",
    "row2Receipt": "Tertunda",
    "row3Type": "Peringatan Layanan",
    "row3State": "Ditolak",
    "row3Receipt": "Detail Kesalahan",
    "footerText": "Lacak setiap pesan dari pengajuan hingga konfirmasi akhir jaringan."
  },
  "protectionTitle": "Keamanan Lalu Lintas & Pencegahan Penipuan",
  "protectionBadge": "INTEGRITAS JARINGAN",
  "protectionCards": [
    {
      "title": "Deteksi Lalu Lintas Tidak Normal",
      "desc": "Deteksi lonjakan mencurigakan secara otomatis untuk memblokir SMS pumping dan serangan spam."
    },
    {
      "title": "Kepatuhan Regulasi & Daftar Blokir",
      "desc": "Sinkronisasi otomatis permintaan opt-out guna menjaga reputasi pengirim dan kestabilan saluran."
    },
    {
      "title": "Perlindungan Pemalsuan Sender ID",
      "desc": "Cegah pemalsuan identitas pengirim alfanumerik di pasar-pasar yang telah teregulasi."
    }
  ],
  "timelineBadge": "RENCANA INTEGRASI",
  "timelineTitle": "Peluncuran bertahap dalam 4 langkah",
  "timelineSubtitle": "Metodologi teruji untuk menghubungkan platform Anda tanpa hambatan operasional.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Analisis Kebutuhan",
      "desc": "Konfirmasi negara tujuan, estimasi volume, persyaratan Sender ID, dan kesepakatan komersial."
    },
    {
      "step": "2",
      "title": "Pengaturan Teknis",
      "desc": "Pemberian kredensial SMPP/API dan konfigurasi daftar putih IP yang aman."
    },
    {
      "step": "3",
      "title": "Uji Coba Konektivitas",
      "desc": "Validasi latensi, pengkodean teks, dan penerimaan DLR di jaringan tujuan nyata."
    },
    {
      "step": "4",
      "title": "Peluncuran Produksi",
      "desc": "Pengaktifan lalu lintas komersial dengan pendampingan langsung oleh tim teknisi kami."
    }
  ],
  "integrationPlan": {
    "title": "Koneksi SMS Grosir Anda",
    "planBadge": "SPESIFIKASI INTEGRASI",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Lalu Lintas Pesan A2P",
    "formats": "GSM-7 / Unicode Multibahasa",
    "feedback": "Tanda Terima Pengiriman Waktu Nyata (DLR)",
    "senderSetup": "Konfigurasi Khusus Pasar",
    "check1": "Verifikasi kredensial dan uji konektivitas",
    "check2": "Validasi identitas pengirim dan penerimaan DLR",
    "discussNote": "Diskusikan dengan tim kami untuk menentukan antarmuka yang ideal bagi platform Anda.",
    "discussBtn": "Diskusikan Integrasi"
  },
  "faqBadge": "PERTANYAAN UMUM",
  "faqTitle": "Hal yang sering ditanyakan tentang SMS grosir",
  "faqSubtitle": "Jawaban transparan mengenai antarmuka, protokol, dan terminasi pesan.",
  "faqs": [
    {
      "q": "Untuk siapa layanan SMS grosir ini ditujukan?",
      "a": "Untuk operator telekomunikasi, agregator SMS, platform CPaaS, dan perusahaan besar dengan kebutuhan pengiriman SMS A2P internasional skala tinggi."
    },
    {
      "q": "Protokol apa saja yang didukung?",
      "a": "Kami mendukung protokol standar berkecepatan tinggi SMPP v3.4 serta REST API modern dengan webhook callback."
    },
    {
      "q": "Bagaimana proses pendaftaran Sender ID alfanumerik?",
      "a": "Tim kepatuhan kami siap mendampingi pendaftaran dokumen resmi ke operator lokal sesuai undang-undang masing-masing negara."
    },
    {
      "q": "Seberapa transparan laporan pengiriman yang disediakan?",
      "a": "Kami menyediakan DLR instan dengan kode kesalahan terstandarisasi dan analitik jaringan lengkap melalui API dan portal klien."
    }
  ],
  "ctaBadge": "MULAI SEKARANG",
  "ctaTitle": "Siap mengoptimalkan konektivitas SMS grosir Anda?",
  "ctaSubtitle": "Hubungi pakar telekomunikasi kami untuk merancang strategi perutean khusus bagi destinasi prioritas Anda.",
  "contactUs": "Hubungi Pakar",
  "ctaFootnote": "Lingkungan pengujian khusus dan konsultasi analisis lalu lintas tersedia untuk operator dan korporasi."
};

const vi: WholesaleMessageTranslation = {
  "heroBadge": "SMS BÁN BUÔN • HẠ TẦNG TIN NHẮN TOÀN CẦU",
  "heroTitle": "Mỗi tin nhắn, kết nối với sự tin cậy tuyệt đối.",
  "heroDesc": "Dịch vụ SMS bán buôn chuẩn nhà mạng dành cho các nhà mạng viễn thông, đơn vị tích hợp và nền tảng nhắn tin. Kết nối lưu lượng A2P của bạn với các tuyến toàn cầu thông qua kết nối trực tiếp và báo cáo minh bạch.",
  "talkToExpert": "Trao đổi với chuyên gia",
  "exploreCapabilities": "Khám phá năng lực",
  "stats": {
    "routing": "Định tuyến toàn cầu",
    "routingLabel": "Độ phủ theo thị trường",
    "traffic": "Tin nhắn A2P",
    "trafficLabel": "Lưu lượng then chốt doanh nghiệp",
    "insights": "Phân tích phân phối",
    "insightsLabel": "Kiểm soát vận hành"
  },
  "heroLiveBadge1": {
    "title": "Kết nối A2P",
    "label": "Nền tảng của bạn. Vươn tầm toàn cầu."
  },
  "heroLiveBadge2": {
    "title": "Minh bạch từng bước",
    "sub": "Gửi • Định tuyến • Biên nhận"
  },
  "whyBadge": "TẠI SAO CHỌN INET WHOLESALE SMS",
  "whyTitle": "Hạ tầng tin nhắn nâng tầm mọi tương tác kinh doanh",
  "whySubtitle1": "Chúng tôi cung cấp dịch vụ chuyển tiếp SMS quốc tế dựa trên kết nối trực tiếp, giám sát định tuyến chủ động và báo cáo phát tin chi tiết.",
  "whySubtitle2": "Được thiết kế cho các đơn vị tích hợp, nhà mạng và doanh nghiệp đòi hỏi sự ổn định tuyệt đối ở quy mô lớn.",
  "whyCards": [
    {
      "title": "Mở rộng thị trường toàn cầu",
      "desc": "Xây dựng mạng lưới gửi tin nhắn quốc tế đến các điểm đến chiến lược mà khách hàng của bạn cần.",
      "footer": "Định tuyến SMS toàn cầu"
    },
    {
      "title": "Kết nối trực tiếp nhà mạng",
      "desc": "Giảm thiểu các bước trung gian nhờ các kênh mạng trực tiếp và thỏa thuận viễn thông chất lượng cao.",
      "footer": "Tiêu chuẩn nhà mạng"
    },
    {
      "title": "Giám sát theo thời gian thực",
      "desc": "Theo dõi tỷ lệ phát thành công, mã DLR và độ trễ truyền dữ liệu với đo kiểm minh bạch.",
      "footer": "Minh bạch vận hành"
    },
    {
      "title": "Khả năng mở rộng linh hoạt",
      "desc": "Truyền tải hàng triệu tin nhắn mỗi ngày với kiến trúc đám mây chịu lỗi và đàn hồi cao.",
      "footer": "Hiệu năng doanh nghiệp"
    }
  ],
  "capabilitiesBadge": "NĂNG LỰC CỐT LÕI",
  "capabilitiesTitle": "Được xây dựng cho lưu lượng tin nhắn quan trọng của doanh nghiệp",
  "capabilitiesDesc": "Bộ giải pháp viễn thông bán buôn của chúng tôi quản lý toàn diện vòng đời lưu lượng A2P với độ tin cậy đã được kiểm chứng.",
  "designSolution": "Thiết kế giải pháp",
  "solutionNote": "Liên hệ với đội ngũ kỹ sư của chúng tôi để tối ưu hóa tuyến đường và chi phí.",
  "capabilities": [
    {
      "tag": "Tin nhắn doanh nghiệp",
      "title": "Chuyển tiếp SMS A2P bán buôn",
      "desc": "Truyền gửi SMS B2C phục vụ xác thực bảo mật, thông báo giao dịch và chăm sóc khách hàng theo sự đồng ý."
    },
    {
      "tag": "Kết nối toàn cầu",
      "title": "Định tuyến quốc tế",
      "desc": "Tiếp cận các nhà mạng di động trên toàn thế giới với cấu hình phù hợp với quy định từng quốc gia."
    },
    {
      "tag": "Giao thức tiêu chuẩn",
      "title": "Tích hợp SMPP và API",
      "desc": "Kết nối dễ dàng qua giao thức SMPP v3.4 tốc độ cao hoặc các giao diện REST API hiện đại."
    },
    {
      "tag": "Độ tin cậy chuyển phát",
      "title": "Quản lý tuyến đường thông minh",
      "desc": "Định tuyến thích ứng tự động lựa chọn đường truyền tốt nhất dựa trên hiệu suất gửi tin thực tế."
    },
    {
      "tag": "Tuân thủ quy định",
      "title": "Chính sách đăng ký Sender ID",
      "desc": "Hỗ trợ chuyên môn đăng ký tên thương hiệu (Sender ID) và mã ngắn theo quy định viễn thông sở tại."
    },
    {
      "tag": "Báo cáo chuyên sâu",
      "title": "Biên nhận phát tin (DLR) & Đo kiểm",
      "desc": "Báo cáo DLR chi tiết và số liệu phân tích hỗ trợ chẩn đoán vận hành nhanh chóng, chính xác."
    }
  ],
  "howItWorksBadge": "QUY TRÌNH HOẠT ĐỘNG",
  "howItWorksTitle": "Từ tích hợp đến phủ sóng toàn cầu chỉ trong 3 bước",
  "howItWorksSubtitle": "Quy trình rõ ràng giúp kích hoạt và mở rộng kết nối SMS quốc tế của bạn một cách nhanh chóng và an toàn.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Kết nối nền tảng của bạn",
      "desc": "Gửi tin nhắn A2P qua kết nối SMPP hoặc API đã thống nhất với các cấu hình người gửi và điểm đến.",
      "note": "Hệ thống của bạn → iNet"
    },
    {
      "step": "02",
      "title": "Định tuyến thông minh",
      "desc": "Chúng tôi chuyển tiếp từng gói tin qua tuyến nhà mạng phù hợp nhất với đặc thù lưu lượng của bạn.",
      "note": "Bộ định tuyến nhà mạng"
    },
    {
      "step": "03",
      "title": "Báo cáo & Tối ưu hóa",
      "desc": "Nhận báo cáo phát tin theo thời gian thực và mở rộng quy mô với sự hỗ trợ kỹ thuật liên tục.",
      "note": "Mạng nhận xác nhận DLR"
    }
  ],
  "networkBadge": "MẠNG LƯỚI & ĐỘ PHỦ",
  "networkTitle": "Kết nối cấp nhà mạng đến mọi điểm đến",
  "networkDesc": "Tiếp cận hơn 1.000 mạng di động trên toàn cầu với hạ tầng được tối ưu hóa cho độ sẵn sàng cao.",
  "networkBullets": [
    "Kết nối trực tiếp và được quản lý với các nhà mạng viễn thông hàng đầu",
    "Hỗ trợ hoàn toàn bảng mã ký tự GSM-7 và Unicode đa ngôn ngữ",
    "Hạ tầng phân tán theo khu vực địa lý với tính năng tự động chuyển đổi dự phòng",
    "Trung tâm Điều hành Mạng (NOC) giám sát liên tục 24/7/365"
  ],
  "networkStats": [
    {
      "val": "Định hướng nhà mạng",
      "label": "Chiến lược kết nối"
    },
    {
      "val": "Hiểu rõ thị trường",
      "label": "Chính sách tuyến đường & định danh"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Được hỗ trợ bởi quan hệ hợp tác nhà mạng vững chắc",
    "sub": "Tuyến trực tiếp • Điểm kết nối được quản lý"
  },
  "networkFooterNote": "Khả năng cung cấp tuyến và chính sách tên thương hiệu phụ thuộc vào quy định pháp lý của từng quốc gia.",
  "momentsBadge": "TÌNH HUỐNG SỬ DỤNG",
  "momentsTitle": "Được thiết kế cho các tương tác quan trọng",
  "momentsSubtitle": "Đảm bảo gửi kịp thời những tin nhắn quyết định sự an tâm và trải nghiệm của người dùng.",
  "moments": [
    {
      "title": "Xác thực & 2FA",
      "desc": "Hỗ trợ đăng nhập an toàn, gửi mã OTP và xác thực giao dịch tài chính với SMS A2P ưu tiên cao.",
      "footer": "OTP & Xác minh nhanh"
    },
    {
      "title": "Thông báo giao dịch",
      "desc": "Chuyển phát ngay lập tức biến động số dư ngân hàng, xác nhận đơn hàng và cập nhật tài khoản.",
      "footer": "Cảnh báo tức thì"
    },
    {
      "title": "Nhắc hẹn & Cập nhật dịch vụ",
      "desc": "Gửi nhắc nhở lịch hẹn, tiến độ giao hàng và thông báo bảo trì đúng thời điểm cam kết.",
      "footer": "Thông báo vận hành"
    },
    {
      "title": "Tương tác theo sự đồng ý",
      "desc": "Giao tiếp với khách hàng đã đăng ký thông qua các thông điệp hữu ích, tuân thủ chính sách opt-in.",
      "footer": "Tin nhắn theo sự đồng thuận"
    }
  ],
  "intelligenceBadge": "TRÍ TUỆ PHÂN PHỐI",
  "intelligenceTitle": "Kiểm soát và minh bạch toàn diện trên từng tin nhắn",
  "intelligenceDesc": "Đưa ra quyết định chính xác dựa trên dữ liệu lưu lượng chi tiết, mã lỗi chuẩn hóa và giám sát chủ động.",
  "intelligenceBullets": [
    "Theo dõi toàn bộ vòng đời trạng thái của từng tin nhắn riêng lẻ",
    "Tự động chuyển đổi tuyến dự phòng khi xảy ra sự cố mạng",
    "Cảnh báo tức thời khi phát hiện độ trễ bất thường",
    "Nhật ký kiểm toán đầy đủ phục vụ đối soát và hỗ trợ kỹ thuật"
  ],
  "intelligenceFootnote": "Mọi chỉ số đo kiểm và mã trạng thái mạng được truyền tải theo thời gian thực qua kênh DLR.",
  "messageLogCard": {
    "title": "Nhật ký truyền tin",
    "badge": "GIAO DIỆN MINH HỌA",
    "tab1": "Nhật ký tin",
    "tab2": "Tuyến đường",
    "tab3": "Quốc gia đến",
    "colType": "LOẠI TIN",
    "colState": "TRẠNG THÁI",
    "colReceipt": "BIÊN NHẬN",
    "row1Type": "Xác thực OTP",
    "row1State": "Đã phát",
    "row1Receipt": "Đã nhận",
    "row2Type": "Cập nhật đơn",
    "row2State": "Đang gửi",
    "row2Receipt": "Chờ xác nhận",
    "row3Type": "Cảnh báo dịch vụ",
    "row3State": "Từ chối",
    "row3Receipt": "Chi tiết lỗi",
    "footerText": "Theo dõi từng tin nhắn từ lúc gửi đi đến khi có xác nhận từ mạng thuê bao."
  },
  "protectionTitle": "An ninh lưu lượng & Chống gian lận",
  "protectionBadge": "TÍNH TOÀN VẸN MẠNG",
  "protectionCards": [
    {
      "title": "Phát hiện lưu lượng bất thường",
      "desc": "Nhận diện kịp thời các dấu hiệu bất thường nhằm ngăn chặn tấn công bơm SMS (SMS pumping) và tin rác."
    },
    {
      "title": "Tuân thủ quy định & Danh sách chặn",
      "desc": "Quản lý danh sách từ chối nhận tin và tuân thủ luật pháp để bảo vệ uy tín thương hiệu của bạn."
    },
    {
      "title": "Bảo vệ tên định danh (Sender ID)",
      "desc": "Ngăn chặn hành vi giả mạo và sử dụng trái phép tên định danh tại các thị trường được quản lý."
    }
  ],
  "timelineBadge": "KẾ HOẠCH TRIỂN KHAI",
  "timelineTitle": "Lộ trình 4 bước chuẩn hóa và nhanh chóng",
  "timelineSubtitle": "Phương pháp luận đã được kiểm chứng giúp kết nối nền tảng của bạn một cách mượt mà.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Xác định phạm vi & nhu cầu",
      "desc": "Thống nhất các quốc gia đích, sản lượng dự kiến, yêu cầu về tên định danh và điều kiện thương mại."
    },
    {
      "step": "2",
      "title": "Thiết lập kỹ thuật",
      "desc": "Khởi tạo tài khoản kết nối SMPP/API và cấu hình danh sách địa chỉ IP được phép (whitelist)."
    },
    {
      "step": "3",
      "title": "Kiểm thử kết nối",
      "desc": "Xác minh độ trễ, bảng mã ký tự và độ chính xác của biên nhận DLR trên các mạng di động thực tế."
    },
    {
      "step": "4",
      "title": "Khai thác chính thức",
      "desc": "Mở lưu lượng thương mại dưới sự giám sát sát sao của các kỹ sư mạng viễn thông."
    }
  ],
  "integrationPlan": {
    "title": "Kết nối SMS bán buôn của bạn",
    "planBadge": "KẾ HOẠCH KẾT NỐI",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Lưu lượng tin nhắn A2P",
    "formats": "GSM-7 / Unicode đa ngôn ngữ",
    "feedback": "Biên nhận phát tin thời gian thực (DLR)",
    "senderSetup": "Cấu hình theo thị trường",
    "check1": "Xác thực thông tin kết nối và kiểm tra mạng",
    "check2": "Kiểm tra tên thương hiệu và xử lý DLR",
    "discussNote": "Trao đổi với đội ngũ kỹ thuật để lựa chọn giao diện tích hợp tối ưu nhất.",
    "discussBtn": "Thảo luận kết nối"
  },
  "faqBadge": "CÂU HỎI THƯỜNG GẶP",
  "faqTitle": "Những điều cần biết về SMS bán buôn",
  "faqSubtitle": "Giải đáp rõ ràng về các giao diện kết nối, giao thức và chất lượng phát tin.",
  "faqs": [
    {
      "q": "Dịch vụ SMS bán buôn dành cho những đối tượng nào?",
      "a": "Dành cho các nhà mạng viễn thông, đơn vị gom lưu lượng SMS, nhà cung cấp CPaaS và các doanh nghiệp lớn có nhu cầu gửi tin A2P quốc tế với số lượng lớn."
    },
    {
      "q": "Hỗ trợ những giao thức kết nối nào?",
      "a": "Chúng tôi hỗ trợ giao thức tiêu chuẩn SMPP v3.4 hiệu năng cao cũng như các API REST hiện đại tích hợp webhook nhận thông báo."
    },
    {
      "q": "Quy trình đăng ký tên thương hiệu (Sender ID) được hỗ trợ ra sao?",
      "a": "Đội ngũ chuyên trách pháp lý của chúng tôi sẽ hướng dẫn thủ tục nộp hồ sơ đăng ký với các nhà mạng sở tại theo đúng quy định."
    },
    {
      "q": "Mức độ minh bạch về kết quả gửi tin như thế nào?",
      "a": "Chúng tôi cung cấp DLR thời gian thực với các mã lỗi tiêu chuẩn quốc tế và phân tích số liệu mạng qua cổng quản trị hoặc API."
    }
  ],
  "ctaBadge": "BẮT ĐẦU NGAY HÔM NAY",
  "ctaTitle": "Sẵn sàng tối ưu hóa hạ tầng kết nối SMS bán buôn?",
  "ctaSubtitle": "Kết nối với các chuyên gia viễn thông của chúng tôi để xây dựng chiến lược định tuyến chuyên biệt cho các thị trường trọng điểm của bạn.",
  "contactUs": "Liên hệ với chuyên gia",
  "ctaFootnote": "Cung cấp môi trường kiểm thử chuyên biệt và tư vấn phân tích lưu lượng cho nhà mạng và doanh nghiệp."
};

const pl: WholesaleMessageTranslation = {
  "heroBadge": "HURTOWY SMS • GLOBALNA INFRASTRUKTURA WIADOMOŚCI",
  "heroTitle": "Każda wiadomość połączona z absolutną niezawodnością.",
  "heroDesc": "Hurtowy SMS klasy operatorskiej dla telekomów, agregatorów i platform komunikacyjnych. Połącz swój ruch A2P z globalnymi trasami dzięki bezpośrednim połączeniom carrierskim i przejrzystym raportom doręczeń.",
  "talkToExpert": "Porozmawiaj z ekspertem",
  "exploreCapabilities": "Poznaj możliwości",
  "stats": {
    "routing": "Globalny routing",
    "routingLabel": "Zasięg dostosowany do rynków",
    "traffic": "Wiadomości A2P",
    "trafficLabel": "Ruch o krytycznym znaczeniu",
    "insights": "Analityka doręczeń",
    "insightsLabel": "Kontrola operacyjna"
  },
  "heroLiveBadge1": {
    "title": "Łączność A2P",
    "label": "Twoja platforma. Zasięg globalny."
  },
  "heroLiveBadge2": {
    "title": "Przejrzystość na każdym etapie",
    "sub": "Wysłanie • Trasa • Potwierdzenie"
  },
  "whyBadge": "DLACZEGO INET WHOLESALE SMS",
  "whyTitle": "Infrastruktura wiadomości, która wzmacnia każdą interakcję",
  "whySubtitle1": "Zapewniamy międzynarodową terminację SMS opartą na bezpośrednich połączeniach operatorskich, aktywnym monitorowaniu tras i szczegółowych raportach doręczeń.",
  "whySubtitle2": "Stworzone dla agregatorów, operatorów i przedsiębiorstw, które wymagają bezkompromisowej stabilności przy dużej skali.",
  "whyCards": [
    {
      "title": "Zasięg na rynkach globalnych",
      "desc": "Buduj międzynarodowy zasięg wiadomości dla strategicznych kierunków, których potrzebują Twoi klienci.",
      "footer": "Globalny routing SMS"
    },
    {
      "title": "Bezpośrednie połączenia z operatorami",
      "desc": "Zminimalizuj liczbę pośredników dzięki bezpośrednim łączom sieciowym i zarządzanym porozumieniom wysokiej jakości.",
      "footer": "Jakość klasy operatorskiej"
    },
    {
      "title": "Monitorowanie w czasie rzeczywistym",
      "desc": "Śledź wskaźniki doręczeń, kody DLR i opóźnienia transmisji z pełną telemetrią.",
      "footer": "Przejrzystość operacyjna"
    },
    {
      "title": "Elastyczna skalowalność",
      "desc": "Przesyłaj miliony wiadomości dziennie dzięki odpornej na błędy, rozproszonej architekturze.",
      "footer": "Wydajność klasy korporacyjnej"
    }
  ],
  "capabilitiesBadge": "KLUCZOWE MOŻLIWOŚCI",
  "capabilitiesTitle": "Zaprojektowane dla krytycznego ruchu wiadomości biznesowych",
  "capabilitiesDesc": "Nasz pakiet hurtowych usług telekomunikacyjnych obejmuje cały cykl życia ruchu A2P z potwierdzoną niezawodnością.",
  "designSolution": "Zaprojektuj rozwiązanie",
  "solutionNote": "Skonsultuj się z naszymi inżynierami, aby zoptymalizować trasy i stawki.",
  "capabilities": [
    {
      "tag": "Komunikacja biznesowa",
      "title": "Hurtowa terminacja A2P SMS",
      "desc": "Dostarczaj SMS B2C do uwierzytelniania, powiadomień krytycznych i komunikacji z klientami."
    },
    {
      "tag": "Globalna łączność",
      "title": "Międzynarodowy routing",
      "desc": "Docieraj do operatorów komórkowych na całym świecie dzięki profilom zgodnym z lokalnymi przepisami."
    },
    {
      "tag": "Standardowe protokoły",
      "title": "Integracja SMPP i API",
      "desc": "Łącz się przez wydajne interfejsy SMPP v3.4 lub nowoczesne, udokumentowane REST API."
    },
    {
      "tag": "Niezawodność doręczeń",
      "title": "Inteligentne zarządzanie trasami",
      "desc": "Adaptacyjny routing wybierający optymalną ścieżkę na podstawie bieżących wyników doręczeń."
    },
    {
      "tag": "Zgodność z przepisami",
      "title": "Polityka Sender ID i rejestracja",
      "desc": "Wsparcie ekspertów w rejestracji alfanumerycznych identyfikatorów nadawcy i krótkich numerów."
    },
    {
      "tag": "Zaawansowane raporty",
      "title": "Raporty doręczeń (DLR) i telemetria",
      "desc": "Szczegółowe statusy DLR i analizy umożliwiające szybką i precyzyjną diagnostykę operacyjną."
    }
  ],
  "howItWorksBadge": "JAK TO DZIAŁA",
  "howItWorksTitle": "Od integracji do globalnego zasięgu w trzech krokach",
  "howItWorksSubtitle": "Przejrzysty proces umożliwiający szybkie i bezpieczne uruchomienie międzynarodowej łączności SMS.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Połącz swoją platformę",
      "desc": "Wysyłaj wiadomości A2P przez uzgodnione łącze SMPP lub API ze skonfigurowanymi parametrami nadawcy i odbiorcy.",
      "note": "Twoja aplikacja → iNet"
    },
    {
      "step": "02",
      "title": "Inteligentne trasowanie",
      "desc": "Kierujemy każdą paczkę wiadomości przez trasę operatorską najlepiej dobraną do profilu ruchu.",
      "note": "Silnik routingu operatorskiego"
    },
    {
      "step": "03",
      "title": "Raporty i optymalizacja",
      "desc": "Odbieraj raporty doręczeń w czasie rzeczywistym i skaluj wolumeny przy ciągłym wsparciu technicznym.",
      "note": "Potwierdzenie DLR z sieci docelowej"
    }
  ],
  "networkBadge": "SIEĆ I ZASIĘG",
  "networkTitle": "Łączność klasy operatorskiej do każdego celu",
  "networkDesc": "Dostęp do ponad 1 000 sieci komórkowych na świecie dzięki infrastrukturze o wysokiej dostępności.",
  "networkBullets": [
    "Bezpośrednie i zarządzane połączenia z czołowymi globalnymi operatorami",
    "Pełne wsparcie dla kodowania GSM-7 oraz wielojęzycznego Unicode",
    "Geograficznie redundantna infrastruktura chmurowa z automatycznym przełączaniem",
    "Ciągły nadzór 24/7/365 przez Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Oparte na operatorach",
      "label": "Strategia połączeń"
    },
    {
      "val": "Zgodne z rynkiem",
      "label": "Zasady routingu i nadawców"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Oparte na silnych relacjach z operatorami",
    "sub": "Trasy bezpośrednie • Węzły zarządzane"
  },
  "networkFooterNote": "Dostępność tras i zasady dotyczące Sender ID podlegają lokalnym regulacjom prawnym w każdym kraju.",
  "momentsBadge": "PRZYPADKI UŻYCIA",
  "momentsTitle": "Stworzone dla kluczowych interakcji biznesowych",
  "momentsSubtitle": "Zagwarantuj terminowe doręczenie wiadomości budujących zaufanie użytkowników.",
  "moments": [
    {
      "title": "Uwierzytelnianie i 2FA",
      "desc": "Wspieraj bezpieczne logowanie, kody jednorazowe OTP i autoryzację transakcji priorytetowym SMS A2P.",
      "footer": "OTP i szybka weryfikacja"
    },
    {
      "title": "Powiadomienia transakcyjne",
      "desc": "Przesyłaj alerty bankowe, potwierdzenia zamówień i zmiany statusu konta bez opóźnień.",
      "footer": "Alerty w czasie rzeczywistym"
    },
    {
      "title": "Przypomnienia i aktualizacje usług",
      "desc": "Dostarczaj przypomnienia o wizytach, statusy przesyłek i komunikaty serwisowe dokładnie na czas.",
      "footer": "Powiadomienia operacyjne"
    },
    {
      "title": "Komunikacja za zgodą odbiorcy",
      "desc": "Docieraj do subskrybentów z wartościowymi komunikatami w pełnej zgodzie z polityką opt-in.",
      "footer": "Wiadomości oparte na zgodzie"
    }
  ],
  "intelligenceBadge": "INTELIGENCJA DORĘCZEŃ",
  "intelligenceTitle": "Pełna kontrola i przejrzystość każdej wiadomości",
  "intelligenceDesc": "Podejmuj trafne decyzje w oparciu o szczegółowe metryki ruchu i proaktywny monitoring.",
  "intelligenceBullets": [
    "Śledzenie pełnego cyklu życia każdej pojedynczej wiadomości",
    "Automatyczne przełączanie na trasy zapasowe w przypadku wahań sieci",
    "Błyskawiczne alerty przy nietypowych skokach opóźnień",
    "Kompletne logi audytowe do rozliczeń i weryfikacji spornych kwestii"
  ],
  "intelligenceFootnote": "Wszystkie dane telemetryczne i kody statusu sieci są przekazywane na żywo przez raporty DLR.",
  "messageLogCard": {
    "title": "Dziennik wiadomości",
    "badge": "WIDOK POGLĄDOWY",
    "tab1": "Dziennik",
    "tab2": "Trasy",
    "tab3": "Kierunki",
    "colType": "TYP WIADOMOŚCI",
    "colState": "STATUS",
    "colReceipt": "POTWIERDZENIE",
    "row1Type": "Weryfikacja",
    "row1State": "Doręczono",
    "row1Receipt": "Odebrano",
    "row2Type": "Aktualizacja zamówienia",
    "row2State": "Wysłano",
    "row2Receipt": "Oczekuje",
    "row3Type": "Alert serwisowy",
    "row3State": "Odrzucono",
    "row3Receipt": "Szczegóły błędu",
    "footerText": "Śledź każdą wiadomość od momentu nadania do potwierdzenia przez sieć odbiorcy."
  },
  "protectionTitle": "Bezpieczeństwo ruchu i ochrona przed nadużyciami",
  "protectionBadge": "INTEGRALNOŚĆ SIECI",
  "protectionCards": [
    {
      "title": "Wykrywanie anomalii w ruchu",
      "desc": "Identyfikuj nietypowe wzorce, aby skutecznie blokować zjawisko SMS pumping i spam."
    },
    {
      "title": "Zgodność i zarządzanie czarnymi listami",
      "desc": "Automatyczna synchronizacja rezygnacji i przestrzeganie przepisów w celu ochrony reputacji nadawcy."
    },
    {
      "title": "Ochrona identyfikatora nadawcy (Sender ID)",
      "desc": "Zabezpiecz alfanumeryczne nazwy nadawców przed podszywaniem się i nieautoryzowanym użyciem."
    }
  ],
  "timelineBadge": "PLAN WDROŻENIA",
  "timelineTitle": "Strukturyzowane uruchomienie w 4 krokach",
  "timelineSubtitle": "Sprawdzona metodyka pozwalająca na bezproblemowe podłączenie Twojej platformy.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Określenie wymagań",
      "desc": "Ustalenie krajów docelowych, prognozowanego wolumenu, wytycznych Sender ID i warunków handlowych."
    },
    {
      "step": "2",
      "title": "Konfiguracja techniczna",
      "desc": "Utworzenie danych dostępowych SMPP/API oraz konfiguracja bezpiecznych białych list adresów IP."
    },
    {
      "step": "3",
      "title": "Testy łączności",
      "desc": "Sprawdzenie opóźnień, kodowania znaków i poprawności odbioru raportów DLR w rzeczywistych sieciach."
    },
    {
      "step": "4",
      "title": "Uruchomienie produkcyjne",
      "desc": "Otwarcie ruchu komercyjnego pod bezpośrednim nadzorem naszych inżynierów sieciowych."
    }
  ],
  "integrationPlan": {
    "title": "Twoje hurtowe połączenie SMS",
    "planBadge": "SPECYFIKACJA INTEGRACJI",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Ruch wiadomości A2P",
    "formats": "GSM-7 / Międzynarodowy Unicode",
    "feedback": "Raporty doręczeń w czasie rzeczywistym (DLR)",
    "senderSetup": "Konfiguracja specyficzna dla rynku",
    "check1": "Weryfikacja poświadczeń i test łączności",
    "check2": "Walidacja nadawcy i odbiór raportów DLR",
    "discussNote": "Skontaktuj się z nami, aby dobrać optymalny interfejs dla Twojej platformy.",
    "discussBtn": "Omów integrację"
  },
  "faqBadge": "CZĘSTO ZADAWANE PYTANIA",
  "faqTitle": "Wszystko o hurtowych usługach SMS",
  "faqSubtitle": "Przejrzyste odpowiedzi na pytania dotyczące integracji, protokołów i terminacji.",
  "faqs": [
    {
      "q": "Dla kogo przeznaczona jest usługa hurtowego SMS-a?",
      "a": "Dla operatorów telekomunikacyjnych, agregatorów SMS, dostawców CPaaS oraz firm z dużym międzynarodowym ruchem A2P."
    },
    {
      "q": "Jakie protokoły połączeniowe są obsługiwane?",
      "a": "Wspieramy standardowy protokół wysokiej przepustowości SMPP v3.4 oraz nowoczesne interfejsy REST API z powiadomieniami webhook."
    },
    {
      "q": "Jak przebiega rejestracja alfanumerycznego Sender ID?",
      "a": "Nasz zespół ds. zgodności pomaga w przygotowaniu dokumentów i zgłoszeniu identyfikatorów u lokalnych operatorów zgodnie z prawem danego kraju."
    },
    {
      "q": "Jak szczegółowe są raporty o doręczeniach?",
      "a": "Zapewniamy raporty DLR w czasie rzeczywistym ze znormalizowanymi kodami błędów i wskaźnikami sieciowymi dostępnymi przez API i portal."
    }
  ],
  "ctaBadge": "ROZPOCZNIJ TERAZ",
  "ctaTitle": "Gotowy na optymalizację hurtowej łączności SMS?",
  "ctaSubtitle": "Skontaktuj się z naszymi ekspertami telekomunikacyjnymi, aby opracować dedykowaną strategię routingu dla Twoich rynków docelowych.",
  "contactUs": "Skontaktuj się z ekspertem",
  "ctaFootnote": "Dedykowane środowiska testowe i audyty ruchu dostępne dla operatorów i przedsiębiorstw."
};

const th: WholesaleMessageTranslation = {
  "heroBadge": "SMS ขายส่ง • โครงสร้างพื้นฐานการส่งข้อความระดับโลก",
  "heroTitle": "ทุกข้อความเชื่อมต่อด้วยความมั่นใจและน่าเชื่อถือสูงสุด",
  "heroDesc": "บริการ SMS ขายส่งระดับผู้ให้บริการโทรคมนาคมสำหรับเครือข่าย ผู้รวบรวมข้อความ และแพลตฟอร์มการสื่อสาร เชื่อมต่อทราฟฟิก A2P ของคุณเข้ากับเส้นทางทั่วโลกด้วยการเชื่อมต่อตรงและความโปร่งใสในการส่งมอบอย่างสมบูรณ์",
  "talkToExpert": "พูดคุยกับผู้เชี่ยวชาญ",
  "exploreCapabilities": "สำรวจความสามารถ",
  "stats": {
    "routing": "การกำหนดเส้นทางทั่วโลก",
    "routingLabel": "ครอบคลุมตามความต้องการตลาด",
    "traffic": "การส่งข้อความ A2P",
    "trafficLabel": "ทราฟฟิกสำคัญทางธุรกิจ",
    "insights": "ข้อมูลเชิงลึกการส่งมอบ",
    "insightsLabel": "การควบคุมเชิงปฏิบัติการ"
  },
  "heroLiveBadge1": {
    "title": "การเชื่อมต่อ A2P",
    "label": "แพลตฟอร์มของคุณ ครอบคลุมทั่วโลก"
  },
  "heroLiveBadge2": {
    "title": "ความโปร่งใสในทุกขั้นตอน",
    "sub": "การส่ง • เส้นทาง • ใบตอบรับ"
  },
  "whyBadge": "ทำไมต้องเลือก INET WHOLESALE SMS",
  "whyTitle": "โครงสร้างพื้นฐานการส่งข้อความที่เสริมสร้างทุกการมีส่วนร่วมของลูกค้า",
  "whySubtitle1": "เราให้บริการการส่งปลายทาง SMS ระหว่างประเทศที่รองรับด้วยการเชื่อมต่อโครงข่ายโดยตรง การตรวจสอบเส้นทางเชิงรุก และรายงานการส่งมอบอย่างละเอียด",
  "whySubtitle2": "ออกแบบมาสำหรับผู้รวบรวมข้อความ ผู้ให้บริการ และองค์กรขนาดใหญ่ที่ต้องการเสถียรภาพที่พิสูจน์ได้ในระดับปริมาณมหาศาล",
  "whyCards": [
    {
      "title": "เข้าถึงตลาดระดับโลก",
      "desc": "สร้างความครอบคลุมการส่งข้อความระหว่างประเทศสำหรับจุดหมายปลายทางเชิงกลยุทธ์ที่ลูกค้าของคุณต้องการ",
      "footer": "การกำหนดเส้นทาง SMS ทั่วโลก"
    },
    {
      "title": "การเชื่อมต่อตรงกับผู้ให้บริการเครือข่าย",
      "desc": "ลดจำนวนจุดเชื่อมต่อที่ไม่จำเป็นด้วยลิงก์เครือข่ายตรงและข้อตกลงการเชื่อมต่อคุณภาพสูง",
      "footer": "คุณภาพระดับผู้ให้บริการโทรคมนาคม"
    },
    {
      "title": "การตรวจสอบแบบเรียลไทม์",
      "desc": "ติดตามอัตราการส่งมอบ รหัส DLR และเวลาแฝงในการส่งข้อความด้วยระบบวัดระยะไกลที่โปร่งใส",
      "footer": "ความชัดเจนในการปฏิบัติงาน"
    },
    {
      "title": "ความสามารถในการขยายขนาดที่ยืดหยุ่น",
      "desc": "ส่งข้อความนับล้านข้อความต่อวันด้วยสถาปัตยกรรมคลาวด์ที่มีความทนทานต่อความเสียหายสูง",
      "footer": "ประสิทธิภาพระดับองค์กร"
    }
  ],
  "capabilitiesBadge": "ขีดความสามารถหลัก",
  "capabilitiesTitle": "ออกแบบมาสำหรับทราฟฟิกข้อความสำคัญขององค์กรโดยเฉพาะ",
  "capabilitiesDesc": "ชุดบริการโทรคมนาคมขายส่งของเราครอบคลุมวงจรชีวิตของทราฟฟิก A2P ทั้งหมดด้วยความน่าเชื่อถือที่ได้รับการพิสูจน์แล้ว",
  "designSolution": "ออกแบบโซลูชัน",
  "solutionNote": "ปรึกษากับวิศวกรของเราเพื่อเพิ่มประสิทธิภาพของเส้นทางและอัตราค่าบริการ",
  "capabilities": [
    {
      "tag": "ข้อความธุรกิจ",
      "title": "บริการส่ง SMS A2P ขายส่ง",
      "desc": "ส่ง SMS ธุรกิจสู่ผู้บริโภคสำหรับการยืนยันตัวตน การแจ้งเตือนธุรกรรม และการสื่อสารที่ได้รับความยินยอม"
    },
    {
      "tag": "การเชื่อมต่อทั่วโลก",
      "title": "ความครอบคลุมเส้นทางระหว่างประเทศ",
      "desc": "เข้าถึงผู้ให้บริการเครือข่ายมือถือทั่วโลกด้วยโปรไฟล์เส้นทางที่ปรับให้สอดคล้องกับกฎระเบียบท้องถิ่น"
    },
    {
      "tag": "โปรโตคอลมาตรฐาน",
      "title": "การผสานการทำงาน SMPP และ API",
      "desc": "เชื่อมต่อผ่านลิงก์ SMPP v3.4 ความเร็วสูงหรือ REST API ที่ทันสมัยและมีเอกสารครบถ้วน"
    },
    {
      "tag": "ความน่าเชื่อถือในการส่งมอบ",
      "title": "การจัดการเส้นทางอัจฉริยะ",
      "desc": "การกำหนดเส้นทางแบบปรับเปลี่ยนได้ซึ่งเลือกเส้นทางที่ดีที่สุดโดยอัตโนมัติตามประสิทธิภาพการส่งจริง"
    },
    {
      "tag": "การปฏิบัติตามกฎระเบียบ",
      "title": "นโยบายการลงทะเบียน Sender ID",
      "desc": "การสนับสนุนจากผู้เชี่ยวชาญในการลงทะเบียนชื่อผู้ส่งแบบตัวอักษรและรหัสสั้นตามกฎหมายท้องถิ่น"
    },
    {
      "tag": "การรายงานขั้นสูง",
      "title": "ใบตอบรับการส่ง (DLR) และข้อมูลระยะไกล",
      "desc": "รายงานสถานะ DLR โดยละเอียดและการวิเคราะห์เชิงลึกเพื่อการวินิจฉัยปัญหาการดำเนินงานอย่างแม่นยำ"
    }
  ],
  "howItWorksBadge": "ขั้นตอนการทำงาน",
  "howItWorksTitle": "จากการผสานการทำงานสู่การเข้าถึงทั่วโลกในสามขั้นตอน",
  "howItWorksSubtitle": "กระบวนการที่เป็นระบบเพื่อเปิดใช้งานการเชื่อมต่อ SMS ระหว่างประเทศของคุณอย่างรวดเร็วและปลอดภัย",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "เชื่อมต่อแพลตฟอร์มของคุณ",
      "desc": "ส่งข้อความ A2P ผ่านการเชื่อมต่อ SMPP หรือ API ที่ตกลงไว้พร้อมการตั้งค่าชื่อผู้ส่งและปลายทาง",
      "note": "แอปพลิเคชันของคุณ → iNet"
    },
    {
      "step": "02",
      "title": "การกำหนดเส้นทางอัจฉริยะ",
      "desc": "เราส่งต่อแต่ละข้อความผ่านลิงก์เครือข่ายที่เหมาะสมที่สุดสำหรับโปรไฟล์ทราฟฟิกของคุณ",
      "note": "เครื่องมือกำหนดเส้นทางโทรคมนาคม"
    },
    {
      "step": "03",
      "title": "รายงานและการเพิ่มประสิทธิภาพ",
      "desc": "รับใบตอบรับการส่งแบบเรียลไทม์และขยายปริมาณการส่งด้วยการสนับสนุนทางเทคนิคอย่างต่อเนื่อง",
      "note": "เครือข่ายปลายทางยืนยัน DLR"
    }
  ],
  "networkBadge": "เครือข่ายและความครอบคลุม",
  "networkTitle": "การเชื่อมต่อระดับผู้ให้บริการสำหรับทุกจุดหมายปลายทาง",
  "networkDesc": "เข้าถึงเครือข่ายมือถือมากกว่า 1,000 เครือข่ายทั่วโลกด้วยโครงสร้างพื้นฐานที่พร้อมใช้งานสูง",
  "networkBullets": [
    "การเชื่อมต่อตรงและการเชื่อมต่อที่ได้รับการจัดการกับผู้ให้บริการชั้นนำของโลก",
    "รองรับการเข้ารหัส GSM-7 และ Unicode หลายภาษาอย่างสมบูรณ์",
    "โครงสร้างพื้นฐานแบบกระจายตัวทางภูมิศาสตร์พร้อมระบบเฟลโอเวอร์อัตโนมัติ",
    "ศูนย์ปฏิบัติการเครือข่าย (NOC) ดูแลตรวจสอบตลอด 24 ชั่วโมงทุกวัน"
  ],
  "networkStats": [
    {
      "val": "ขับเคลื่อนโดยเครือข่าย",
      "label": "กลยุทธ์การเชื่อมต่อ"
    },
    {
      "val": "สอดคล้องกับตลาด",
      "label": "นโยบายเส้นทางและผู้ส่ง"
    }
  ],
  "networkBadgeOverlay": {
    "title": "สนับสนุนด้วยความสัมพันธ์ที่แน่นแฟ้นกับผู้ให้บริการ",
    "sub": "เส้นทางตรง • จุดเชื่อมต่อที่ได้รับการจัดการ"
  },
  "networkFooterNote": "ความพร้อมใช้งานของเส้นทางและนโยบายชื่อผู้ส่งขึ้นอยู่กับข้อกำหนดของกฎหมายในแต่ละประเทศ",
  "momentsBadge": "กรณีการใช้งาน",
  "momentsTitle": "สร้างขึ้นสำหรับปฏิสัมพันธ์ทางธุรกิจที่สำคัญยิ่ง",
  "momentsSubtitle": "รับประกันการส่งมอบข้อความตรงเวลาซึ่งสร้างความไว้วางใจให้กับผู้ใช้งานปลายทาง",
  "moments": [
    {
      "title": "การยืนยันตัวตนและ 2FA",
      "desc": "รองรับการเข้าสู่ระบบที่ปลอดภัย รหัส OTP และการอนุมัติธุรกรรมด้วย SMS A2P ลำดับความสำคัญสูง",
      "footer": "OTP และการยืนยันตัวตนอย่างรวดเร็ว"
    },
    {
      "title": "การแจ้งเตือนธุรกรรม",
      "desc": "ส่งการแจ้งเตือนจากธนาคาร การยืนยันคำสั่งซื้อ และการเปลี่ยนแปลงบัญชีได้ทันทีโดยไม่มีสะดุด",
      "footer": "การแจ้งเตือนแบบเรียลไทม์"
    },
    {
      "title": "การเตือนนัดหมายและบริการ",
      "desc": "ส่งการเตือนนัดหมาย อัปเดตสถานะการจัดส่ง และประกาศการบำรุงรักษาฉุกเฉินได้ตรงตามเวลา",
      "footer": "การแจ้งเตือนการดำเนินงาน"
    },
    {
      "title": "การสื่อสารที่ได้รับความยินยอม",
      "desc": "สื่อสารกับลูกค้าที่ลงทะเบียนรับข่าวสารด้วยข้อมูลที่เป็นประโยชน์ภายใต้กฎระเบียบ opt-in",
      "footer": "การส่งข้อความตามความยินยอม"
    }
  ],
  "intelligenceBadge": "ความชาญฉลาดในการส่งมอบ",
  "intelligenceTitle": "การมองเห็นและการควบคุมที่สมบูรณ์ในทุกข้อความ",
  "intelligenceDesc": "ตัดสินใจอย่างมั่นใจด้วยตัวชี้วัดทราฟฟิกโดยละเอียด การวิเคราะห์รหัสสถานะ และการตรวจสอบเชิงรุก",
  "intelligenceBullets": [
    "ติดตามวงจรชีวิตสถานะอย่างสมบูรณ์ของทุกข้อความรายบุคคล",
    "สลับไปยังเส้นทางสำรองโดยอัตโนมัติเมื่อเกิดความผันผวนของเครือข่าย",
    "การแจ้งเตือนทันทีเมื่อตรวจพบความผิดปกติของเวลาแฝง",
    "บันทึกการตรวจสอบที่สมบูรณ์สำหรับการกระทบยอดและการตรวจสอบย้อนหลัง"
  ],
  "intelligenceFootnote": "ข้อมูลการวัดระยะไกลและรหัสสถานะเครือข่ายทั้งหมดส่งผ่าน DLR แบบเรียลไทม์",
  "messageLogCard": {
    "title": "บันทึกการส่งข้อความ",
    "badge": "มุมมองตัวอย่าง",
    "tab1": "บันทึกข้อความ",
    "tab2": "เส้นทาง",
    "tab3": "ประเทศปลายทาง",
    "colType": "ประเภทข้อความ",
    "colState": "สถานะ",
    "colReceipt": "ใบตอบรับ",
    "row1Type": "การยืนยันตัวตน",
    "row1State": "ส่งมอบสำเร็จ",
    "row1Receipt": "ได้รับแล้ว",
    "row2Type": "อัปเดตคำสั่งซื้อ",
    "row2State": "กำลังส่ง",
    "row2Receipt": "รอดำเนินการ",
    "row3Type": "แจ้งเตือนบริการ",
    "row3State": "ถูกปฏิเสธ",
    "row3Receipt": "รายละเอียดข้อผิดพลาด",
    "footerText": "ติดตามทุกข้อความตั้งแต่ขั้นตอนการส่งไปจนถึงการยืนยันของเครือข่ายปลายทาง"
  },
  "protectionTitle": "ความปลอดภัยของทราฟฟิกและการป้องกันการฉ้อโกง",
  "protectionBadge": "ความสมบูรณ์ของเครือข่าย",
  "protectionCards": [
    {
      "title": "การตรวจจับทราฟฟิกที่ผิดปกติ",
      "desc": "ตรวจจับรูปแบบที่น่าสงสัยได้ทันทีเพื่อป้องกันการโจมตีแบบ SMS pumping และสแปมข้อความ"
    },
    {
      "title": "การปฏิบัติตามกฎหมายและรายการบล็อก",
      "desc": "ซิงค์คำขอยกเลิกการรับข้อความอัตโนมัติและปฏิบัติตามกฎหมายเพื่อปกป้องชื่อเสียงของผู้ส่ง"
    },
    {
      "title": "การปกป้องการปลอมแปลง Sender ID",
      "desc": "ปกป้องชื่อผู้ส่งแบบตัวอักษรจากการแอบอ้างและการใช้งานโดยไม่ได้รับอนุญาตในตลาดที่มีการควบคุม"
    }
  ],
  "timelineBadge": "แผนการผสานการทำงาน",
  "timelineTitle": "การเริ่มต้นใช้งานอย่างเป็นระบบใน 4 ขั้นตอน",
  "timelineSubtitle": "ระเบียบวิธีที่ผ่านการพิสูจน์แล้วเพื่อเชื่อมต่อแพลตฟอร์มของคุณโดยไม่สะดุด",
  "timelineSteps": [
    {
      "step": "1",
      "title": "การประเมินความต้องการ",
      "desc": "ยืนยันประเทศปลายทาง ปริมาณที่คาดการณ์ ข้อกำหนดของชื่อผู้ส่ง และเงื่อนไขทางการค้า"
    },
    {
      "step": "2",
      "title": "การติดตั้งระบบทางเทคนิค",
      "desc": "ออกข้อมูลรับรอง SMPP/API และกำหนดค่าไวท์ลิสต์ IP ที่ปลอดภัย"
    },
    {
      "step": "3",
      "title": "การทดสอบการเชื่อมต่อ",
      "desc": "ตรวจสอบเวลาแฝง การเข้ารหัสตัวอักษร และการรับใบตอบรับ DLR ในเครือข่ายจริง"
    },
    {
      "step": "4",
      "title": "เปิดใช้งานระบบจริง",
      "desc": "เริ่มต้นส่งทราฟฟิกเชิงพาณิชย์ภายใต้การดูแลอย่างใกล้ชิดของวิศวกรเครือข่ายของเรา"
    }
  ],
  "integrationPlan": {
    "title": "การเชื่อมต่อ SMS ขายส่งของคุณ",
    "planBadge": "แผนผสานการทำงาน",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "ทราฟฟิกข้อความ A2P",
    "formats": "GSM-7 / Unicode หลายภาษา",
    "feedback": "ใบตอบรับการส่งแบบเรียลไทม์ (DLR)",
    "senderSetup": "กำหนดค่าตามกฎระเบียบแต่ละตลาด",
    "check1": "การตรวจสอบข้อมูลประจำตัวและการเชื่อมต่อ",
    "check2": "การตรวจสอบชื่อผู้ส่งและการรับ DLR",
    "discussNote": "ติดต่อทีมงานของเราเพื่อเลือกอินเทอร์เฟซที่เหมาะสมที่สุดสำหรับแพลตฟอร์มของคุณ",
    "discussBtn": "ปรึกษาเรื่องการเชื่อมต่อ"
  },
  "faqBadge": "คำถามที่พบบ่อย",
  "faqTitle": "ข้อสงสัยทั่วไปเกี่ยวกับ SMS ขายส่ง",
  "faqSubtitle": "คำตอบที่ชัดเจนเกี่ยวกับอินเทอร์เฟซ โปรโตคอล และคุณภาพการส่งข้อความ",
  "faqs": [
    {
      "q": "บริการ SMS ขายส่งเหมาะสำหรับใคร?",
      "a": "สำหรับผู้ให้บริการโทรคมนาคม ผู้รวบรวมข้อความ SMS แพลตฟอร์ม CPaaS และองค์กรขนาดใหญ่ที่มีความต้องการส่งข้อความ A2P ระหว่างประเทศในปริมาณสูง"
    },
    {
      "q": "รองรับโปรโตคอลและอินเทอร์เฟซใดบ้าง?",
      "a": "เรารองรับโปรโตคอลมาตรฐานอุตสาหกรรม SMPP v3.4 ความเร็วสูงและ REST API สมัยใหม่ที่รองรับการแจ้งเตือนผ่าน webhook"
    },
    {
      "q": "มีบริการช่วยเหลือในการลงทะเบียน Sender ID ตัวอักษรหรือไม่?",
      "a": "มี ทีมงานด้านการปฏิบัติตามกฎระเบียบของเราพร้อมช่วยเหลือในการยื่นเอกสารลงทะเบียนกับผู้ให้บริการเครือข่ายในแต่ละประเทศตามกฎหมาย"
    },
    {
      "q": "สามารถตรวจสอบสถานะการส่งมอบได้ละเอียดเพียงใด?",
      "a": "เรามีรายงาน DLR แบบเรียลไทม์พร้อมรหัสข้อผิดพลาดที่เป็นมาตรฐานสากลและการวิเคราะห์ข้อมูลเครือข่ายผ่าน API และพอร์ทัลลูกค้า"
    }
  ],
  "ctaBadge": "เริ่มต้นวันนี้",
  "ctaTitle": "พร้อมที่จะยกระดับการเชื่อมต่อ SMS ขายส่งของคุณหรือยัง?",
  "ctaSubtitle": "ติดต่อผู้เชี่ยวชาญด้านโทรคมนาคมของเราเพื่อวางแผนกลยุทธ์การกำหนดเส้นทางที่ตรงกับความต้องการของจุดหมายปลายทางของคุณ",
  "contactUs": "ติดต่อผู้เชี่ยวชาญ",
  "ctaFootnote": "มีสภาพแวดล้อมการทดสอบเฉพาะและการให้คำปรึกษาการวิเคราะห์ทราฟฟิกสำหรับผู้ให้บริการและองค์กร"
};

const tl: WholesaleMessageTranslation = {
  "heroBadge": "WHOLESALE SMS • PANDAIGDIGANG IMPRASTRAKTURA NG MENSAHE",
  "heroTitle": "Bawat mensahe, konektado nang may buong tiwala.",
  "heroDesc": "Wholesale SMS na antas-carrier para sa mga telekom, aggregator, at platform ng pagmemensahe. Ikonekta ang iyong A2P trapiko sa mga pandaigdigang ruta gamit ang direktang koneksyon at buong transparency sa paghahatid.",
  "talkToExpert": "Makipag-usap sa Eksperto",
  "exploreCapabilities": "Tuklasin ang Kakayahan",
  "stats": {
    "routing": "Pandaigdigang Pagruruta",
    "routingLabel": "Abot na Nakatuon sa Merkado",
    "traffic": "A2P Pagmemensahe",
    "trafficLabel": "Kritikal na Trapiko sa Negosyo",
    "insights": "Mga Insight sa Paghahatid",
    "insightsLabel": "Operasyonal na Pagkontrol"
  },
  "heroLiveBadge1": {
    "title": "A2P Pagkakakonekta",
    "label": "Iyong platform. Pandaigdigang abot."
  },
  "heroLiveBadge2": {
    "title": "Kalinawan sa Bawat Hakbang",
    "sub": "Pagsusumite • Ruta • Resibo"
  },
  "whyBadge": "BAKIT PILIIN ANG INET WHOLESALE SMS",
  "whyTitle": "Impraktraktura ng mensahe na nagpapalakas sa bawat ugnayan sa negosyo",
  "whySubtitle1": "Nagbibigay kami ng internasyonal na terminasyon ng SMS na sinusuportahan ng direktang interconnects, aktibong pagsubaybay sa ruta, at detalyadong ulat sa paghahatid.",
  "whySubtitle2": "Binuo para sa mga aggregator, carrier, at enterprise na nangangailangan ng subok na katatagan sa malakihang bulto.",
  "whyCards": [
    {
      "title": "Maabot ang Pandaigdigang Merkado",
      "desc": "Bumuo ng internasyonal na abot ng mensahe para sa mga estratehikong destinasyon na kailangan ng iyong mga customer.",
      "footer": "Pandaigdigang SMS Routing"
    },
    {
      "title": "Direktang Interconnect sa Carrier",
      "desc": "Bawasan ang hindi kinakailangang pagkaantala gamit ang direktang mga link sa network at pinamamahalaang kasunduan.",
      "footer": "Kalidad na Antas-Carrier"
    },
    {
      "title": "Real-time na Pagsubaybay",
      "desc": "Subaybayan ang mga rate ng paghahatid, DLR code, at latency ng transmisyon gamit ang malinaw na telemetriya.",
      "footer": "Operasyonal na Kalinawan"
    },
    {
      "title": "Mataas na Skalabilidad",
      "desc": "Magpadala ng milyun-milyong mensahe bawat araw gamit ang elastiko at matatag na arkitektura ng cloud.",
      "footer": "Pang-enterprise na Pagganap"
    }
  ],
  "capabilitiesBadge": "MGA PANGUNAHING KAKAYAHAN",
  "capabilitiesTitle": "Idinisenyo para sa kritikal na trapiko ng mensahe sa negosyo",
  "capabilitiesDesc": "Sinasaklaw ng aming wholesale suite ang buong siklo ng buhay ng A2P trapiko nang may napatunayang pagiging maaasahan.",
  "designSolution": "Magdisenyo ng Solusyon",
  "solutionNote": "Kumonsulta sa aming mga inhinyero upang i-optimize ang mga ruta at rate.",
  "capabilities": [
    {
      "tag": "Pangnegosyong Mensahe",
      "title": "Wholesale A2P SMS Terminasyon",
      "desc": "Maghatid ng B2C SMS para sa beripikasyon, mga kritikal na abiso, at pinahintulutang pakikipag-ugnayan sa customer."
    },
    {
      "tag": "Pandaigdigang Koneksyon",
      "title": "Internasyonal na Saklaw ng Ruta",
      "desc": "Abutin ang mga mobile network operator sa buong mundo gamit ang mga profile ng ruta na sumusunod sa lokal na regulasyon."
    },
    {
      "tag": "Karaniwang Protokol",
      "title": "Integrasyon ng SMPP at API",
      "desc": "Kumonekta sa pamamagitan ng mabilis na mga link ng SMPP v3.4 o modernong dokumentadong REST API."
    },
    {
      "tag": "Maaasahang Paghahatid",
      "title": "Matalinong Pamamahala ng Ruta",
      "desc": "Umaangkop na pagruruta na awtomatikong pumipili ng pinakamainam na landas batay sa live na pagganap ng paghahatid."
    },
    {
      "tag": "Pagsunod sa Regulasyon",
      "title": "Mga Patakaran sa Sender ID at Rehistrasyon",
      "desc": "Ekspertong gabay para sa pagpaparehistro ng alphanumeric Sender ID at short code ayon sa lokal na batas."
    },
    {
      "tag": "Mataas na Antas ng Pag-uulat",
      "title": "Mga Resibo ng Paghahatid (DLR) at Telemetriya",
      "desc": "Detalyadong DLR at analytics para sa mabilis at tumpak na pagsusuri ng operasyon."
    }
  ],
  "howItWorksBadge": "PAANO ITO GUMAGANA",
  "howItWorksTitle": "Mula integrasyon hanggang pandaigdigang abot sa tatlong hakbang",
  "howItWorksSubtitle": "Isang maayos na proseso upang mapagana at mapalawak ang iyong internasyonal na koneksyon sa SMS nang ligtas at mabilis.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Ikonekta ang Iyong Platform",
      "desc": "Magpadala ng mga mensaheng A2P sa pamamagitan ng napagkasunduang koneksyon ng SMPP o API kasama ang mga setting mo.",
      "note": "Iyong aplikasyon → iNet"
    },
    {
      "step": "02",
      "title": "Matalinong Pagruruta",
      "desc": "Idinidirekta namin ang bawat pakete sa pinakaangkop na link ng carrier para sa iyong profile ng trapiko.",
      "note": "Carrier routing engine"
    },
    {
      "step": "03",
      "title": "Mga Ulat at Pagpapahusay",
      "desc": "Tumanggap ng real-time na mga resibo ng paghahatid at palawakin ang dami ng padala nang may patuloy na suporta.",
      "note": "DLR kinumpirma ng destinasyong network"
    }
  ],
  "networkBadge": "NETWORK AT SAKLAW",
  "networkTitle": "Koneksyon na antas-carrier para sa bawat destinasyon",
  "networkDesc": "Access sa mahigit 1,000 mobile network sa buong mundo gamit ang imprastraktura na na-optimize para sa mataas na availability.",
  "networkBullets": [
    "Direkta at pinamamahalaang interconnects sa mga nangungunang carrier sa buong mundo",
    "Buong suporta para sa GSM-7 at multilinggwal na Unicode character sets",
    "Heograpikal na distribyuting kalabisan ng cloud na may awtomatikong failover",
    "24/7/365 na pagbabantay ng aming Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Pinangungunahan ng Carrier",
      "label": "Estratehiya sa Koneksyon"
    },
    {
      "val": "Alinsunod sa Merkado",
      "label": "Mga Patakaran sa Ruta at Sender"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Sinusuportahan ng matatag na relasyon sa mga carrier",
    "sub": "Direktang Ruta • Pinamamahalaang Interconnect Points"
  },
  "networkFooterNote": "Ang availability ng ruta at mga patakaran sa Sender ID ay napapailalim sa lokal na batas sa bawat bansa.",
  "momentsBadge": "MGA SITWASYON NG PAGGAMIT",
  "momentsTitle": "Binuo para sa mahahalagang ugnayan sa negosyo",
  "momentsSubtitle": "Tiyakin ang napapanahong paghahatid ng mga mensaheng bumubuo sa tiwala ng iyong mga end user.",
  "moments": [
    {
      "title": "Awtentikasyon at 2FA",
      "desc": "Suportahan ang ligtas na pag-login, mga OTP verification code, at pag-apruba sa transaksyon gamit ang prayoridad na A2P SMS.",
      "footer": "OTP at Mabilis na Beripikasyon"
    },
    {
      "title": "Mga Alerto sa Transaksyon",
      "desc": "Ipadala kaagad ang mga alerto sa bangko, kumpirmasyon ng order, at mga pagbabago sa account nang walang pagkaantala.",
      "footer": "Real-time na mga Alerto"
    },
    {
      "title": "Mga Paalala at Update sa Serbisyo",
      "desc": "Maghatid ng mga paalala sa appointment, status ng logistics, at anunsyo sa emergency maintenance sa tamang oras.",
      "footer": "Operasyonal na Abiso"
    },
    {
      "title": "Pinahintulutang Pakikipag-ugnayan",
      "desc": "Makipag-ugnayan sa mga naka-subscribe na customer gamit ang mga impormasyong alinsunod sa mga panuntunan sa opt-in.",
      "footer": "Pinahintulutang Pagmemensahe"
    }
  ],
  "intelligenceBadge": "KATALINUHAN SA PAGHAHATID",
  "intelligenceTitle": "Buong kalinawan at kontrol sa bawat mensahe",
  "intelligenceDesc": "Gumawa ng matalinong mga desisyon gamit ang detalyadong sukatan ng trapiko at maagap na pagsubaybay.",
  "intelligenceBullets": [
    "Kumpletong pagsubaybay sa siklo ng buhay para sa bawat indibidwal na mensahe",
    "Awtomatikong paglipat sa backup route kapag may aberya sa linya ng network",
    "Agad na mga babala kapag may di-pangkaraniwang pagtaas ng latency",
    "Kumpletong audit log para sa beripikasyon at pagtutugma ng data"
  ],
  "intelligenceFootnote": "Ang lahat ng sukatan ng telemetriya at status code ay ipinapadala sa real-time sa pamamagitan ng mga DLR.",
  "messageLogCard": {
    "title": "Log ng Mensahe",
    "badge": "HALIMBAWANG TINGIN",
    "tab1": "Log ng Mensahe",
    "tab2": "Mga Ruta",
    "tab3": "Mga Destinasyon",
    "colType": "URI NG MENSAHE",
    "colState": "STATUS",
    "colReceipt": "RESIBO",
    "row1Type": "Awtentikasyon",
    "row1State": "Naihatid",
    "row1Receipt": "Natanggap",
    "row2Type": "Update sa Order",
    "row2State": "Isinumite",
    "row2Receipt": "Nakabinbin",
    "row3Type": "Alerto sa Serbisyo",
    "row3State": "Tinanggihan",
    "row3Receipt": "Detalye ng Error",
    "footerText": "Sundan ang bawat mensahe mula sa pagsusumite hanggang sa kumpirmasyon ng network."
  },
  "protectionTitle": "Seguridad ng Trapiko at Pag-iwas sa Pandaraya",
  "protectionBadge": "KATAPATAN NG NETWORK",
  "protectionCards": [
    {
      "title": "Pagtukoy sa Hindi Karaniwang Trapiko",
      "desc": "Kilalanin agad ang kahina-hinalang pagdagsa ng trapiko upang harangan ang SMS pumping at spam attacks."
    },
    {
      "title": "Pagsunod sa Batas at Pamamahala ng Blocklist",
      "desc": "Awtomatikong pagproseso ng mga kahilingan sa pag-opt-out upang maprotektahan ang reputasyon ng iyong nagpapadala."
    },
    {
      "title": "Proteksyon Laban sa Sender ID Spoofing",
      "desc": "Protektahan ang mga alphanumeric sender ID laban sa pamemeke at hindi awtorisadong paggamit sa mga regulated na merkado."
    }
  ],
  "timelineBadge": "PLANO SA INTEGRASYON",
  "timelineTitle": "Maayos na pagpapatupad sa 4 na hakbang",
  "timelineSubtitle": "Isang subok na pamamaraan upang maikonekta ang iyong platform nang walang abala sa operasyon.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Pagsusuri ng Pangangailangan",
      "desc": "Pagtiyak sa mga destinasyong bansa, inaasahang volume ng mensahe, mga kinakailangan sa Sender ID, at komersyal na tuntunin."
    },
    {
      "step": "2",
      "title": "Teknikal na Pag-setup",
      "desc": "Pagbibigay ng mga kredensyal ng SMPP/API at pag-configure ng ligtas na IP whitelist."
    },
    {
      "step": "3",
      "title": "Pagsusuri ng Koneksyon",
      "desc": "Pagpapatunay sa bilis ng latency, encoding ng character, at tamang pagtanggap ng mga DLR sa tunay na network."
    },
    {
      "step": "4",
      "title": "Paglulunsad sa Produksyon",
      "desc": "Pagbubukas ng komersyal na trapiko sa ilalim ng masusing paggabay ng aming mga inhinyero sa network."
    }
  ],
  "integrationPlan": {
    "title": "Ang Iyong Wholesale SMS Koneksyon",
    "planBadge": "PLANO NG INTEGRASYON",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P Mensahe Trapiko",
    "formats": "GSM-7 / Multilinggwal na Unicode",
    "feedback": "Real-time na Resibo ng Paghahatid (DLR)",
    "senderSetup": "Naka-configure Ayon sa Merkado",
    "check1": "Beripikasyon ng kredensyal at pagsusuri ng koneksyon",
    "check2": "Pagpapatunay sa nagpapadala at pagtanggap ng DLR",
    "discussNote": "Makipag-ugnayan sa amin upang mapili ang pinakaangkop na interface para sa iyong platform.",
    "discussBtn": "Pag-usapan ang Integrasyon"
  },
  "faqBadge": "MGA MADALAS ITANONG",
  "faqTitle": "Mga Karaniwang Katanungan Tungkol sa Wholesale SMS",
  "faqSubtitle": "Malinaw na mga sagot tungkol sa mga interface, protokol, at pagtatapos ng mensahe.",
  "faqs": [
    {
      "q": "Para kanino ang serbisyo ng wholesale SMS?",
      "a": "Para sa mga telecom operator, SMS aggregator, CPaaS provider, at mga enterprise na may malaking dami ng internasyonal na A2P trapiko."
    },
    {
      "q": "Anong mga interface at protokol ang sinusuportahan?",
      "a": "Sinusuportahan namin ang karaniwang mataas na bilis na SMPP v3.4 protocol at mga modernong REST API na may webhook callback."
    },
    {
      "q": "Paano tinutulungan ang pagpaparehistro ng alphanumeric Sender ID?",
      "a": "Tumutulong ang aming compliance team sa paghahanda ng mga dokumento at pagpaparehistro sa mga lokal na operator alinsunod sa batas ng bawat bansa."
    },
    {
      "q": "Gaano kalinaw ang ulat sa katayuan ng paghahatid?",
      "a": "Nagbibigay kami ng real-time DLR na may mga standardized error code at kumpletong telemetriya sa pamamagitan ng API at client portal."
    }
  ],
  "ctaBadge": "SIMULAN NGAYON",
  "ctaTitle": "Handa ka na bang i-optimize ang iyong wholesale SMS koneksyon?",
  "ctaSubtitle": "Makipag-ugnayan sa aming mga telecom specialist upang lumikha ng customized na diskarte sa pagruruta para sa iyong mga pangunahing destinasyon.",
  "contactUs": "Makipag-usap sa Eksperto",
  "ctaFootnote": "May nakalaang testing environment at konsultasyon sa pagsusuri ng trapiko para sa mga carrier at enterprise."
};

const bn: WholesaleMessageTranslation = {
  "heroBadge": "পাইকারি এসএমএস • বৈশ্বিক মেসেজিং অবকাঠামো",
  "heroTitle": "প্রতিটি বার্তা, পূর্ণ আস্থার সাথে সংযুক্ত।",
  "heroDesc": "টেলিকম অপারেটর, মেসেজিং এগ্রিগেটর এবং প্ল্যাটফর্মের জন্য ক্যারিয়ার-গ্রেড পাইকারি এসএমএস সেবা। সরাসরি ক্যারিয়ার সংযোগ এবং স্বচ্ছ ডেলিভারি রিপোর্টের মাধ্যমে আপনার A2P ট্র্যাফিককে বিশ্বব্যাপী রুটের সাথে যুক্ত করুন।",
  "talkToExpert": "বিশেষজ্ঞের সাথে কথা বলুন",
  "exploreCapabilities": "সক্ষমতা অন্বেষণ করুন",
  "stats": {
    "routing": "গ্লোবাল রাউটিং",
    "routingLabel": "বাজার-চালিত পরিধি",
    "traffic": "A2P মেসেজিং",
    "trafficLabel": "ব্যবসায়িক গুরুত্বপূর্ণ ট্র্যাফিক",
    "insights": "ডেলিভারি অন্তর্দৃষ্টি",
    "insightsLabel": "অপারেশনাল নিয়ন্ত্রণ"
  },
  "heroLiveBadge1": {
    "title": "A2P সংযোগ",
    "label": "আপনার প্ল্যাটফর্ম। বৈশ্বিক বিস্তৃতি।"
  },
  "heroLiveBadge2": {
    "title": "প্রতিটি ধাপে স্বচ্ছতা",
    "sub": "জমা • রুট • ডেলিভারি রশিদ"
  },
  "whyBadge": "কেন INET হোলসেল এসএমএস বেছে নেবেন",
  "whyTitle": "মেসেজিং অবকাঠামো যা প্রতিটি ব্যবসায়িক মিথস্ক্রিয়াকে শক্তিশালী করে",
  "whySubtitle1": "আমরা সরাসরি ক্যারিয়ার ইন্টারকানেক্ট, সক্রিয় রুট পর্যবেক্ষণ এবং বিস্তারিত ডেলিভারি রিপোর্টিং দ্বারা সমর্থিত আন্তর্জাতিক এসএমএস টার্মিনেশন প্রদান করি।",
  "whySubtitle2": "এগ্রিগেটর, ক্যারিয়ার এবং এন্টারপ্রাইজের জন্য নির্মিত যাদের বৃহৎ পরিসরে নির্ভরযোগ্য স্থিতিশীলতা প্রয়োজন।",
  "whyCards": [
    {
      "title": "বিশ্ব বাজারে বিস্তৃতি",
      "desc": "আপনার গ্রাহকদের প্রয়োজনীয় কৌশলগত গন্তব্যের জন্য আন্তর্জাতিক বার্তা কভারেজ তৈরি করুন।",
      "footer": "গ্লোবাল এসএমএস রাউটিং"
    },
    {
      "title": "সরাসরি ক্যারিয়ার ইন্টারকানেক্ট",
      "desc": "সরাসরি উচ্চমানের নেটওয়ার্ক লিংক এবং পরিচালিত চুক্তির মাধ্যমে অপ্রয়োজনীয় বিলম্ব হ্রাস করুন।",
      "footer": "ক্যারিয়ার-গ্রেড মান"
    },
    {
      "title": "রিয়েল-টাইম পর্যবেক্ষণ",
      "desc": "স্বচ্ছ টেলিমেট্রির সাহায্যে ডেলিভারি রেট, ডিএলআর কোড এবং ট্রান্সমিশন বিলম্ব পর্যবেক্ষণ করুন।",
      "footer": "অপারেশনাল দৃশ্যমানতা"
    },
    {
      "title": "উচ্চ স্কেলেবিলিটি",
      "desc": "স্থিতিস্থাপক এবং নির্ভরযোগ্য ক্লাউড আর্কিটেকচারের সাথে প্রতিদিন লক্ষ লক্ষ বার্তা নির্বিঘ্নে প্রেরণ করুন।",
      "footer": "এন্টারপ্রাইজ পারফরম্যান্স"
    }
  ],
  "capabilitiesBadge": "মূল সক্ষমতা",
  "capabilitiesTitle": "ব্যবসায়িক গুরুত্বপূর্ণ বার্তা ট্র্যাফিকের জন্য বিশেষভাবে ডিজাইন করা",
  "capabilitiesDesc": "আমাদের পাইকারি টেলিকম সেবা প্যাকেজ প্রমাণিত নির্ভরযোগ্যতার সাথে A2P ট্র্যাফিকের সম্পূর্ণ চক্র পরিচালনা করে।",
  "designSolution": "সমাধান ডিজাইন করুন",
  "solutionNote": "রুট এবং ট্যারিফ অপ্টিমাইজ করতে আমাদের ইঞ্জিনিয়ারদের সাথে আলোচনা করুন।",
  "capabilities": [
    {
      "tag": "ব্যবসায়িক মেসেজিং",
      "title": "হোলসেল A2P এসএমএস টার্মিনেশন",
      "desc": "নিরাপদ প্রমাণীকরণ, গুরুত্বপূর্ণ বিজ্ঞপ্তি এবং অনুমোদিত প্রচারমূলক বার্তার জন্য B2C এসএমএস প্রেরণ করুন।"
    },
    {
      "tag": "বৈশ্বিক সংযোগ",
      "title": "আন্তর্জাতিক রুট কভারেজ",
      "desc": "স্থানীয় নিয়মাবলী মেনে উপযুক্ত রুট প্রোফাইল সহ বিশ্বব্যাপী মোবাইল নেটওয়ার্ক অপারেটরদের কাছে পৌঁছান।"
    },
    {
      "tag": "স্ট্যান্ডার্ড প্রোটোকল",
      "title": "SMPP এবং API ইন্টিগ্রেশন",
      "desc": "উচ্চ ক্ষমতাসম্পন্ন SMPP v3.4 লিংক অথবা আধুনিক ডকুমেন্ট সমৃদ্ধ REST API-এর মাধ্যমে সহজেই সংহত করুন।"
    },
    {
      "tag": "ডেলিভারি নির্ভরযোগ্যতা",
      "title": "বুদ্ধিমান রুট ব্যবস্থাপনা",
      "desc": "অভিযোজিত রাউটিং যা লাইভ পারফরম্যান্সের ভিত্তিতে গতিশীলভাবে সর্বোত্তম রুট নির্বাচন করে।"
    },
    {
      "tag": "নিয়ন্ত্রক সম্মতি",
      "title": "প্রেরক আইডি এবং নিবন্ধন নীতিমালা",
      "desc": "স্থানীয় আইন অনুযায়ী আলফানিউমেরিক প্রেরক আইডি এবং শর্ট কোড নিবন্ধনে বিশেষজ্ঞ সহায়তা।"
    },
    {
      "tag": "উন্নত রিপোর্টিং",
      "title": "ডেলিভারি রশিদ (DLR) ও টেলিমেট্রি",
      "desc": "দ্রুত অপারেশনাল বিশ্লেষণ এবং পর্যবেক্ষণের জন্য বিস্তারিত ডিএলআর ও স্ট্যাটাস রিপোর্ট।"
    }
  ],
  "howItWorksBadge": "কার্যপদ্ধতি",
  "howItWorksTitle": "ইন্টিগ্রেশন থেকে বিশ্বব্যাপী সংযোগ মাত্র তিন ধাপে",
  "howItWorksSubtitle": "আপনার আন্তর্জাতিক এসএমএস সংযোগ দ্রুত ও নিরাপদে চালু করার জন্য একটি কাঠামোগত প্রক্রিয়া।",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "আপনার প্ল্যাটফর্ম সংযুক্ত করুন",
      "desc": "প্রেরক এবং গন্তব্য সেটিংস সহ নির্ধারিত SMPP বা API সংযোগের মাধ্যমে A2P বার্তা জমা দিন।",
      "note": "আপনার সিস্টেম → iNet"
    },
    {
      "step": "02",
      "title": "বুদ্ধিমান রাউটিং",
      "desc": "আমরা আপনার ট্র্যাফিকের প্রকৃতির উপর ভিত্তি করে সর্বোত্তম ক্যারিয়ার রুটের মাধ্যমে বার্তা প্রেরণ করি।",
      "note": "ক্যারিয়ার রাউটিং ইঞ্জিন"
    },
    {
      "step": "03",
      "title": "রিপোর্ট ও অপ্টিমাইজেশন",
      "desc": "রিয়েল-টাইম ডেলিভারি রশিদ পান এবং সার্বক্ষণিক প্রযুক্তিগত সহায়তায় ব্যবসার পরিধি বৃদ্ধি করুন।",
      "note": "গন্তব্য নেটওয়ার্ক ডিএলআর নিশ্চিত করেছে"
    }
  ],
  "networkBadge": "নেটওয়ার্ক ও কভারেজ",
  "networkTitle": "প্রতিটি গন্তব্যের জন্য ক্যারিয়ার-গ্রেড সংযোগ",
  "networkDesc": "উচ্চ প্রাপ্যতা বিশিষ্ট ক্লাউড পরিকাঠামোর মাধ্যমে বিশ্বজুড়ে ১,০০০+ মোবাইল নেটওয়ার্কে সরাসরি প্রবেশাধিকার।",
  "networkBullets": [
    "বিশ্বের শীর্ষস্থানীয় অপারেটরদের সাথে সরাসরি এবং পরিচালিত সংযোগ",
    "GSM-7 এবং বহুভাষিক ইউনিকোড এনকোডিং-এর পূর্ণ সমর্থন",
    "ভৌগোলিকভাবে বিস্তৃত স্বয়ংক্রিয় ফেইলওভার বিশিষ্ট পরিকাঠামো",
    "নেটওয়ার্ক অপারেশনস সেন্টার (NOC) দ্বারা ২৪/৭/৩৬৫ নিরবচ্ছিন্ন পর্যবেক্ষণ"
  ],
  "networkStats": [
    {
      "val": "ক্যারিয়ার-ভিত্তিক",
      "label": "সংযোগ কৌশল"
    },
    {
      "val": "বাজার-সচেতন",
      "label": "রুট এবং প্রেরক নীতি"
    }
  ],
  "networkBadgeOverlay": {
    "title": "দৃঢ় অপারেটর অংশীদারিত্ব দ্বারা চালিত",
    "sub": "সরাসরি রুট • পরিচালিত ইন্টারকানেক্ট নোড"
  },
  "networkFooterNote": "রুটের প্রাপ্যতা এবং প্রেরক আইডি নীতি গন্তব্য দেশের স্থানীয় নিয়মাবলীর উপর নির্ভরশীল।",
  "momentsBadge": "ব্যবহারিক ক্ষেত্র",
  "momentsTitle": "সময়োপযোগী এবং সংবেদনশীল ব্যবসায়ের জন্য নির্মিত",
  "momentsSubtitle": "গ্রাহকের আস্থা ও সন্তুষ্টি অর্জনকারী বার্তাগুলির সময়মতো ডেলিভারি নিশ্চিত করুন।",
  "moments": [
    {
      "title": "প্রমাণীকরণ এবং 2FA",
      "desc": "অগ্রাধিকারভিত্তিক A2P এসএমএসের মাধ্যমে সুরক্ষিত লগইন, ওটিপি কোড এবং আর্থিক লেনদেন পরিচালনা করুন।",
      "footer": "ওটিপি ও দ্রুত যাচাইকরণ"
    },
    {
      "title": "লেনদেনের তাৎক্ষণিক বিজ্ঞপ্তি",
      "desc": "ব্যাংক অ্যালার্ট, অর্ডার নিশ্চিতকরণ এবং অ্যাকাউন্ট স্ট্যাটাস আপডেট তাৎক্ষণিকভাবে পৌঁছে দিন।",
      "footer": "রিয়েল-টাইম সতর্কতা"
    },
    {
      "title": "সেবা আপডেট ও রিমাইন্ডার",
      "desc": "অ্যাপয়েন্টমেন্ট রিমাইন্ডার, ডেলিভারি আপডেট এবং গুরুত্বপূর্ণ নোটিশ সঠিক সময়ে ডেলিভার করুন।",
      "footer": "অপারেশনাল নোটিফিকেশন"
    },
    {
      "title": "সম্মতি-ভিত্তিক যোগাযোগ",
      "desc": "সাবস্ক্রাইব করা গ্রাহকদের কাছে স্থানীয় নীতিমালা মেনে প্রয়োজনীয় ও তথ্যমূলক বার্তা পাঠান।",
      "footer": "অনুমোদিত বার্তা সেবা"
    }
  ],
  "intelligenceBadge": "ডেলিভারি ইন্টেলিজেন্স",
  "intelligenceTitle": "প্রতিটি বার্তার উপর সম্পূর্ণ দৃশ্যমানতা ও নিয়ন্ত্রণ",
  "intelligenceDesc": "বিস্তারিত ট্র্যাফিক মেট্রিক্স এবং সক্রিয় মনিটরিংয়ের মাধ্যমে আত্মবিশ্বাসের সাথে ব্যবসায়িক সিদ্ধান্ত নিন।",
  "intelligenceBullets": [
    "প্রতিটি বার্তার সম্পূর্ণ লাইফসাইকেল ট্র্যাকিং",
    "নেটওয়ার্ক বিঘ্ন ঘটলে স্বয়ংক্রিয় বিকল্প রুটে স্থানান্তর",
    "লেটেন্সি বৃদ্ধি পেলে তাত্ক্ষণিক সতর্কবার্তা প্রদান",
    "অডিট এবং অসংগতি দূরীকরণের জন্য সম্পূর্ণ হিস্ট্রি লগ"
  ],
  "intelligenceFootnote": "সমস্ত টেলিমেট্রি মেট্রিক্স এবং স্ট্যাটাস কোড রিয়েল-টাইম ডিএলআর চ্যানেলের মাধ্যমে ফেরত পাঠানো হয়।",
  "messageLogCard": {
    "title": "বার্তা পর্যবেক্ষণ লগ",
    "badge": "নমুনা দৃশ্য",
    "tab1": "লগ তালিকা",
    "tab2": "রুট",
    "tab3": "গন্তব্য",
    "colType": "বার্তার ধরন",
    "colState": "অবস্থা",
    "colReceipt": "রশিদ",
    "row1Type": "যাচাইকরণ কোড",
    "row1State": "বিতরিত",
    "row1Receipt": "গৃহীত",
    "row2Type": "অর্ডার আপডেট",
    "row2State": "প্রক্রিয়াধীন",
    "row2Receipt": "অপেক্ষমান",
    "row3Type": "সেবা সতর্কতা",
    "row3State": "প্রত্যাখ্যাত",
    "row3Receipt": "ত্রুটির বিবরণ",
    "footerText": "বার্তা জমা দেওয়া থেকে নেটওয়ার্ক নিশ্চিতকরণ পর্যন্ত প্রতিটি ধাপ ট্র্যাক করুন।"
  },
  "protectionTitle": "ট্র্যাফিক সুরক্ষা ও জালিয়াতি প্রতিরোধ",
  "protectionBadge": "নেটওয়ার্ক অখণ্ডতা",
  "protectionCards": [
    {
      "title": "অস্বাভাবিক ট্র্যাফিক শনাক্তকরণ",
      "desc": "এসএমএস পাম্পিং এবং স্প্যাম আক্রমণ প্রতিরোধ করতে স্বয়ংক্রিয় নিরাপত্তা ব্যবস্থা প্রয়োগ করুন।"
    },
    {
      "title": "নিয়ম মেনে চলা ও ব্লক তালিকা",
      "desc": "প্রেরকের সুনাম রক্ষা করতে আনসাবস্ক্রাইব তালিকা স্বয়ংক্রিয়ভাবে পরিচালনা করুন।"
    },
    {
      "title": "Sender ID সুরক্ষা",
      "desc": "নিয়ন্ত্রিত বাজারে আলফানিউমেরিক প্রেরক নামের অননুমোদিত ব্যবহার ও স্পুফিং প্রতিরোধ করুন।"
    }
  ],
  "timelineBadge": "সংযোজন পরিকল্পনা",
  "timelineTitle": "সহজ এবং সুনির্দিষ্ট ৪-ধাপের ইন্টিগ্রেশন",
  "timelineSubtitle": "কোনো বিঘ্ন ছাড়াই আপনার সিস্টেম সংযোগ করার প্রমাণিত পদ্ধতি।",
  "timelineSteps": [
    {
      "step": "1",
      "title": "প্রয়োজনীয়তা মূল্যায়ন",
      "desc": "গন্তব্য দেশ, আনুমানিক ট্র্যাফিক ভলিউম, প্রেরক আইডি এবং বাণিজ্যিক শর্তাবলী চূড়ান্তকরণ।"
    },
    {
      "step": "2",
      "title": "কারিগরি সেটআপ",
      "desc": "SMPP/API অ্যাকাউন্ট প্রদান এবং নিরাপদ আইপি হোয়াইটলিস্ট কনফিগারেশন।"
    },
    {
      "step": "3",
      "title": "সংযোগ পরীক্ষা",
      "desc": "বাস্তব নেটওয়ার্কে টেক্সট এনকোডিং, ডেলিভারি গতি এবং ডিএলআর রশিদের সঠিকতা যাচাই।"
    },
    {
      "step": "4",
      "title": "লাইভ কার্যক্রম শুরু",
      "desc": "আমাদের প্রকৌশলীদের তত্ত্বাবধানে বাণিজ্যিক ট্র্যাফিক আনুষ্ঠানিকভাবে চালু করা।"
    }
  ],
  "integrationPlan": {
    "title": "আপনার পাইকারি এসএমএস সংযোগ",
    "planBadge": "ইন্টিগ্রেশন প্ল্যান",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P বার্তা ট্র্যাফিক",
    "formats": "GSM-7 / বহুভাষিক ইউনিকোড",
    "feedback": "রিয়েল-টাইম ডেলিভারি রশিদ (DLR)",
    "senderSetup": "বাজার অনুযায়ী কনফিগারেশন",
    "check1": "ক্রেডেনশিয়াল এবং নেটওয়ার্ক সংযোগ যাচাই",
    "check2": "প্রেরক পরিচয় এবং ডিএলআর বিশ্লেষণ পরীক্ষা",
    "discussNote": "আপনার প্ল্যাটফর্মের জন্য সেরা ইন্টারফেস নির্ধারণ করতে আমাদের সাথে কথা বলুন।",
    "discussBtn": "ইন্টিগ্রেশন আলোচনা করুন"
  },
  "faqBadge": "সাধারণ জিজ্ঞাসা",
  "faqTitle": "পাইকারি এসএমএস সম্পর্কে গুরুত্বপূর্ণ তথ্য",
  "faqSubtitle": "কানেক্টিভিটি, প্রোটোকল এবং টার্মিনেশন সম্পর্কিত স্পষ্ট উত্তর।",
  "faqs": [
    {
      "q": "পাইকারি এসএমএস সেবা কাদের জন্য উপযুক্ত?",
      "a": "টেলিকম অপারেটর, এসএমএস এগ্রিগেটর, CPaaS প্ল্যাটফর্ম এবং বৃহৎ পরিসরে আন্তর্জাতিক A2P বার্তা প্রেরণকারী এন্টারপ্রাইজের জন্য।"
    },
    {
      "q": "কোন কোন প্রোটোকল এবং ইন্টারফেস সমর্থিত?",
      "a": "আমরা উচ্চগতির মানসম্মত SMPP v3.4 প্রোটোকল এবং ওয়েবহুক সহ আধুনিক REST API উভয়ই সমর্থন করি।"
    },
    {
      "q": "আলফানিউমেরিক Sender ID নিবন্ধনে কীভাবে সহায়তা করা হয়?",
      "a": "আমাদের কমপ্লায়েন্স টিম সংশ্লিষ্ট দেশের আইন অনুযায়ী স্থানীয় অপারেটরদের কাছে কাগজপত্র প্রস্তুত এবং নিবন্ধনে পূর্ণ সহায়তা প্রদান করে।"
    },
    {
      "q": "ডেলিভারি রিপোর্ট কতটা স্বচ্ছভাবে দেখা যায়?",
      "a": "আমরা স্ট্যান্ডার্ড এরর কোড সহ লাইভ ডিএলআর এবং বিস্তারিত নেটওয়ার্ক মেট্রিক্স ক্লায়েন্ট পোর্টাল ও এপিআই-এর মাধ্যমে প্রদান করি।"
    }
  ],
  "ctaBadge": "আজই শুরু করুন",
  "ctaTitle": "আপনার বৈশ্বিক এসএমএস কানেক্টিভিটি অপ্টিমাইজ করতে প্রস্তুত?",
  "ctaSubtitle": "আপনার অগ্রাধিকারমূলক গন্তব্যগুলির জন্য একটি উপযোগী রাউটিং কৌশল তৈরি করতে আমাদের টেলিকম বিশেষজ্ঞদের সাথে যোগাযোগ করুন।",
  "contactUs": "বিশেষজ্ঞের সাথে যোগাযোগ করুন",
  "ctaFootnote": "ক্যারিয়ার ও এন্টারপ্রাইজ গ্রাহকদের জন্য নিবেদিত টেস্টিং পরিবেশ এবং ট্র্যাফিক পরামর্শ উপলব্ধ।"
};

const ta: WholesaleMessageTranslation = {
  "heroBadge": "மொத்த விற்பனை எஸ்எம்எஸ் • உலகளாவிய செய்தி உள்கட்டமைப்பு",
  "heroTitle": "ஒவ்வொரு செய்தியும், முழுமையான நம்பகத்தன்மையுடன் இணைக்கப்பட்டுள்ளது.",
  "heroDesc": "தொலைத்தொடர்பு ஆபரேட்டர்கள், மொத்த செய்தி திரட்டுநர்கள் மற்றும் தகவல் தொடர்பு தளங்களுக்கான கேரியர்-கிரேடு மொத்த விற்பனை எஸ்எம்எஸ் சேவை. நேரடி இணைப்பு மற்றும் வெளிப்படையான டெலிவரி அறிக்கைகளுடன் உங்கள் A2P டிராஃபிக்கை உலகளாவிய பாதைகளுடன் இணைக்கவும்.",
  "talkToExpert": "நிபுணரிடம் பேசுங்கள்",
  "exploreCapabilities": "திறன்களை ஆராயுங்கள்",
  "stats": {
    "routing": "உலகளாவிய ரூட்டிங்",
    "routingLabel": "சந்தை வழிநடத்தும் அணுகல்",
    "traffic": "A2P செய்தியிடல்",
    "trafficLabel": "வணிக முக்கிய டிராஃபிக்",
    "insights": "டெலிவரி நுண்ணறிவு",
    "insightsLabel": "செயல்பாட்டுக் கட்டுப்பாடு"
  },
  "heroLiveBadge1": {
    "title": "A2P இணைப்பு",
    "label": "உங்கள் தளம். உலகளாவிய ரீச்."
  },
  "heroLiveBadge2": {
    "title": "ஒவ்வொரு படியிலும் வெளிப்படைத்தன்மை",
    "sub": "சமர்ப்பிப்பு • பாதை • ரசீது"
  },
  "whyBadge": "INET மொத்த விற்பனை எஸ்எம்எஸ்-ஐ ஏன் தேர்வு செய்ய வேண்டும்",
  "whyTitle": "ஒவ்வொரு வணிகத் தொடர்பையும் வலுப்படுத்தும் செய்தி உள்கட்டமைப்பு",
  "whySubtitle1": "நேரடி கேரியர் இணைப்புகள், தீவிர பாதை கண்காணிப்பு மற்றும் விரிவான டெலிவரி அறிக்கைகளால் ஆதரிக்கப்படும் சர்வதேச எஸ்எம்எஸ் முடிவை நாங்கள் வழங்குகிறோம்.",
  "whySubtitle2": "பெரிய அளவில் நிரூபிக்கப்பட்ட நிலைத்தன்மை மற்றும் நம்பகத்தன்மை தேவைப்படும் நிறுவனங்களுக்காக உருவாக்கப்பட்டது.",
  "whyCards": [
    {
      "title": "உலகளாவிய சந்தைகளை அடையுங்கள்",
      "desc": "உங்கள் வாடிக்கையாளர்களுக்குத் தேவையான உத்திசார் இடங்களுக்கு சர்வதேச செய்தி அணுகலை உருவாக்குங்கள்.",
      "footer": "உலகளாவிய எஸ்எம்எஸ் ரூட்டிங்"
    },
    {
      "title": "நேரடி ஆபரேட்டர் இணைப்புகள்",
      "desc": "உயர்தர நேரடி நெட்வொர்க் இணைப்புகள் மூலம் தேவையற்ற தாமதங்களை குறைக்கவும்.",
      "footer": "கேரியர்-கிரேடு தரம்"
    },
    {
      "title": "நிகழ்நேர கண்காணிப்பு",
      "desc": "டெலிவரி விகிதங்கள், DLR குறியீடுகள் மற்றும் தாமதங்களை வெளிப்படையான டெலிமெட்ரியுடன் கண்காணிக்கவும்.",
      "footer": "செயல்பாட்டு வெளிப்படைத்தன்மை"
    },
    {
      "title": "நெகிழ்வான விரிவாக்கம்",
      "desc": "பிழை தாங்கும் கிளவுட் கட்டமைப்பின் மூலம் தினமும் மில்லியன் கணக்கான செய்திகளை சீராக அனுப்புங்கள்.",
      "footer": "நிறுவன செயல்திறன்"
    }
  ],
  "capabilitiesBadge": "முக்கிய திறன்கள்",
  "capabilitiesTitle": "முக்கியமான வணிக செய்தி டிராஃபிக்கிற்காக வடிவமைக்கப்பட்டது",
  "capabilitiesDesc": "எங்கள் தொலைத்தொடர்பு சேவைகள் A2P டிராஃபிக்கின் முழு சுழற்சியையும் நம்பகத்தன்மையுடன் கையாள்கிறது.",
  "designSolution": "தீர்வை வடிவமைக்கவும்",
  "solutionNote": "ரூட்டிங் மற்றும் கட்டணங்களை மேம்படுத்த எங்கள் பொறியாளர்களுடன் கலந்துரையாடுங்கள்.",
  "capabilities": [
    {
      "tag": "வணிக செய்தியிடல்",
      "title": "மொத்த விற்பனை A2P எஸ்எம்எஸ் முடிவு",
      "desc": "அங்கீகாரம், முக்கியமான எச்சரிக்கைகள் மற்றும் ஒப்புதல் பெற்ற வாடிக்கையாளர் ஈடுபாட்டிற்காக B2C எஸ்எம்எஸ் அனுப்புங்கள்."
    },
    {
      "tag": "உலகளாவிய இணைப்பு",
      "title": "சர்வதேச ரூட்டிங் கவரேஜ்",
      "desc": "உள்ளூர் விதிமுறைகளுக்கு இணங்க தனிப்பயனாக்கப்பட்ட சுயவிவரங்களுடன் உலகளாவிய மொபைல் நெட்வொர்க்குகளை அடையுங்கள்."
    },
    {
      "tag": "நிலையான நெறிமுறைகள்",
      "title": "SMPP மற்றும் API ஒருங்கிணைப்பு",
      "desc": "உயர் செயல்திறன் கொண்ட SMPP v3.4 இணைப்புகள் அல்லது நவீன REST API-கள் மூலம் எளிதாக இணையுங்கள்."
    },
    {
      "tag": "டெலிவரி நம்பகத்தன்மை",
      "title": "புத்திசாலி பாதை மேலாண்மை",
      "desc": "நிகழ்நேர செயல்திறனின் அடிப்படையில் சிறந்த பாதையை தானாகவே தேர்ந்தெடுக்கும் தகவமைப்பு ரூட்டிங்."
    },
    {
      "tag": "ஒழுங்குமுறை இணக்கம்",
      "title": "அனுப்புநர் ஐடி மற்றும் பதிவு கொள்கைகள்",
      "desc": "உள்ளூர் சட்டங்களுக்கு ஏற்ப அனுப்புநர் ஐடி (Sender ID) மற்றும் குறுகிய குறியீடுகளைப் பதிவு செய்வதில் நிபுணர் வழிகாட்டுதல்."
    },
    {
      "tag": "மேம்பட்ட அறிக்கையிடல்",
      "title": "டெலிவரி ரசீதுகள் (DLR) மற்றும் டெலிமெட்ரி",
      "desc": "விரைவான செயல்பாட்டு பகுப்பாய்விற்கான விரிவான DLR ரசீதுகள் மற்றும் செயல்திறன் அறிக்கைகள்."
    }
  ],
  "howItWorksBadge": "இது எவ்வாறு செயல்படுகிறது",
  "howItWorksTitle": "ஒருங்கிணைப்பிலிருந்து உலகளாவிய அணுகல் வரை 3 எளிய படிகள்",
  "howItWorksSubtitle": "உங்கள் சர்வதேச எஸ்எம்எஸ் இணைப்பை விரைவாகவும் பாதுகாப்பாகவும் செயல்படுத்த ஒரு முறையான செயல்முறை.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "உங்கள் தளத்தை இணைக்கவும்",
      "desc": "ஒப்புக்கொள்ளப்பட்ட SMPP அல்லது API இணைப்பு வழியாக உங்கள் அமைப்புகளுடன் A2P செய்திகளைச் சமர்ப்பிக்கவும்.",
      "note": "உங்கள் பயன்பாடு → iNet"
    },
    {
      "step": "02",
      "title": "புத்திசாலி ரூட்டிங்",
      "desc": "உங்கள் டிராஃபிக் சுயவிவரத்திற்கு மிகவும் பொருத்தமான கேரியர் இணைப்பு வழியாக ஒவ்வொரு செய்தியையும் அனுப்புகிறோம்.",
      "note": "கேரியர் ரூட்டிங் என்ஜின்"
    },
    {
      "step": "03",
      "title": "அறிக்கைகள் மற்றும் மேம்படுத்தல்",
      "desc": "நிகழ்நேர டெலிவரி ரசீதுகளைப் பெறுங்கள் மற்றும் தொடர்ச்சியான தொழில்நுட்ப ஆதரவுடன் உங்கள் அளவை விரிவாக்குங்கள்.",
      "note": "இலக்கு நெட்வொர்க் DLR உறுதிப்படுத்தப்பட்டது"
    }
  ],
  "networkBadge": "நெட்வொர்க் மற்றும் கவரேஜ்",
  "networkTitle": "ஒவ்வொரு இலக்குக்கும் கேரியர்-கிரேடு இணைப்பு",
  "networkDesc": "அதிக கிடைக்கும் தன்மைக்காக உகந்ததாக்கப்பட்ட உள்கட்டமைப்புடன் உலகளவில் 1,000+ மொபைல் நெட்வொர்க்குகளுக்கான அணுகல்.",
  "networkBullets": [
    "முன்னணி உலகளாவிய ஆபரேட்டர்களுடன் நேரடி மற்றும் நிர்வகிக்கப்படும் இணைப்புகள்",
    "GSM-7 மற்றும் பலமொழி யூனிகோட் என்கோடிங்கிற்கான முழு ஆதரவு",
    "புவியியல் ரீதியாக விநியோகிக்கப்பட்ட தானியங்கி ஃபெயில்ஓவர் உள்கட்டமைப்பு",
    "நெட்வொர்க் செயல்பாட்டு மையம் (NOC) மூலம் 24/7/365 தொடர்ச்சியான கண்காணிப்பு"
  ],
  "networkStats": [
    {
      "val": "கேரியர் தலைமையிலானது",
      "label": "இணைப்பு உத்தி"
    },
    {
      "val": "சந்தைக்கு ஏற்றது",
      "label": "ரூட்டிங் & அனுப்புநர் கொள்கைகள்"
    }
  ],
  "networkBadgeOverlay": {
    "title": "வலுவான ஆபரேட்டர் கூட்டாண்மையால் இயக்கப்படுகிறது",
    "sub": "நேரடி வழிகள் • நிர்வகிக்கப்படும் இணைப்புகள்"
  },
  "networkFooterNote": "பாதையின் கிடைக்கும் தன்மை மற்றும் அனுப்புநர் கொள்கைகள் ஒவ்வொரு நாட்டின் உள்ளூர் விதிமுறைகளுக்கு உட்பட்டவை.",
  "momentsBadge": "பயன்பாட்டு நிகழ்வுகள்",
  "momentsTitle": "முக்கியமான வணிக தருணங்களுக்காக உருவாக்கப்பட்டது",
  "momentsSubtitle": "பயனர்களின் நம்பிக்கையை உருவாக்கும் நேரக் கட்டுப்பாட்டு செய்திகளை சரியான நேரத்தில் வழங்குவதை உறுதிசெய்யவும்.",
  "moments": [
    {
      "title": "அங்கீகாரம் மற்றும் 2FA",
      "desc": "பாதுகாப்பான உள்நுழைவு, OTP சரிபார்ப்புக் குறியீடுகள் மற்றும் பரிவர்த்தனை ஒப்புதல்களை முன்னுரிமை A2P எஸ்எம்எஸ் மூலம் ஆதரிக்கவும்.",
      "footer": "OTP மற்றும் விரைவான சரிபார்ப்பு"
    },
    {
      "title": "பரிவர்த்தனை எச்சரிக்கைகள்",
      "desc": "வங்கி எச்சரிக்கைகள், ஆர்டர் உறுதிப்படுத்தல்கள் மற்றும் கணக்கு மாற்றங்களை தாமதமின்றி உடனடியாக வழங்கவும்.",
      "footer": "நிகழ்நேர எச்சரிக்கைகள்"
    },
    {
      "title": "சேவை நினைவூட்டல்கள்",
      "desc": "சந்திப்பு நினைவூட்டல்கள், டெலிவரி புதுப்பிப்புகள் மற்றும் அவசர பராமரிப்பு அறிவிப்புகளை சரியான நேரத்தில் அனுப்பவும்.",
      "footer": "செயல்பாட்டு அறிவிப்புகள்"
    },
    {
      "title": "ஒப்புதல் அடிப்படையிலான ஈடுபாடு",
      "desc": "உள்ளூர் விதிமுறைகளுக்கு இணங்க சந்தாதாரர்களிடம் தகவல் தொடர்பு மற்றும் விளம்பரங்களை மேற்கொள்ளுங்கள்.",
      "footer": "ஒப்புதல் பெற்ற செய்தி சேவை"
    }
  ],
  "intelligenceBadge": "டெலிவரி நுண்ணறிவு",
  "intelligenceTitle": "ஒவ்வொரு செய்தியிலும் முழுமையான கட்டுப்பாடு மற்றும் பார்வை",
  "intelligenceDesc": "விரிவான டிராஃபிக் அளவீடுகள், நிலை குறியீட்டு பகுப்பாய்வு மற்றும் தீவிர கண்காணிப்புடன் சரியான முடிவுகளை எடுங்கள்.",
  "intelligenceBullets": [
    "ஒவ்வொரு தனிப்பட்ட செய்தியின் முழு வாழ்க்கைச் சுழற்சி கண்காணிப்பு",
    "நெட்வொர்க் மாறுபாடுகளின் போது தானியங்கி மாற்றுப் பாதை மாறுதல்",
    "தாமதங்கள் அதிகரிக்கும் போது உடனடி எச்சரிக்கைகள்",
    "தணிக்கை மற்றும் சரிபார்ப்பிற்கான முழுமையான வரலாற்றுப் பதிவுகள்"
  ],
  "intelligenceFootnote": "அனைத்து டெலிமெட்ரி அளவீடுகளும் நெட்வொர்க் நிலை குறியீடுகளும் நேரலை DLR மூலம் அனுப்பப்படுகின்றன.",
  "messageLogCard": {
    "title": "செய்தி கண்காணிப்பு பதிவு",
    "badge": "மாதிரி பார்வை",
    "tab1": "செய்தி பதிவு",
    "tab2": "பாதைகள்",
    "tab3": "இலக்குகள்",
    "colType": "செய்தி வகை",
    "colState": "நிலை",
    "colReceipt": "ரசீது",
    "row1Type": "சரிபார்ப்பு OTP",
    "row1State": "வழங்கப்பட்டது",
    "row1Receipt": "பெறப்பட்டது",
    "row2Type": "ஆர்டர் புதுப்பிப்பு",
    "row2State": "அனுப்பப்படுகிறது",
    "row2Receipt": "நிலுவையில்",
    "row3Type": "சேவை எச்சரிக்கை",
    "row3State": "நிராகரிக்கப்பட்டது",
    "row3Receipt": "பிழை விவரம்",
    "footerText": "செய்தி சமர்ப்பிப்பிலிருந்து நெட்வொர்க் உறுதிப்படுத்தல் வரை ஒவ்வொரு அடியையும் கண்காணிக்கவும்."
  },
  "protectionTitle": "டிராஃபிக் பாதுகாப்பு மற்றும் மோசடி தடுப்பு",
  "protectionBadge": "நெட்வொர்க் ஒருமைப்பாடு",
  "protectionCards": [
    {
      "title": "அசாதாரண டிராஃபிக் கண்டறிதல்",
      "desc": "எஸ்எம்எஸ் பம்பிங் மற்றும் ஸ்பேம் தாக்குதல்களைத் தடுக்க சந்தேகத்திற்கிடமான முறைகளை உடனடியாகக் கண்டறிந்து தடுக்கவும்."
    },
    {
      "title": "விதிமுறை இணக்கம் மற்றும் பிளாக்லிஸ்ட்",
      "desc": "அனுப்புநரின் நற்பெயரைப் பாதுகாக்க விலகல் கோரிக்கைகளைத் தானாகக் கையாளுங்கள்."
    },
    {
      "title": "Sender ID போலி பயன்பாட்டுத் தடுப்பு",
      "desc": "ஒழுங்குபடுத்தப்பட்ட சந்தைகளில் அனுப்புநர் பெயர்கள் தவறாகப் பயன்படுத்தப்படுவதைத் தடுக்கவும்."
    }
  ],
  "timelineBadge": "ஒருங்கிணைப்புத் திட்டம்",
  "timelineTitle": "4 எளிய படிகளில் முறையான செயலாக்கம்",
  "timelineSubtitle": "உங்கள் தளத்தை தடையின்றி இணைப்பதற்கான நிரூபிக்கப்பட்ட வழிமுறை.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "தேவை மதிப்பீடு",
      "desc": "இலக்கு நாடுகள், எதிர்பார்க்கப்படும் செய்திகளின் அளவு, அனுப்புநர் அடையாள தேவைகள் மற்றும் வணிக விதிமுறைகளை உறுதிப்படுத்துதல்."
    },
    {
      "step": "2",
      "title": "தொழில்நுட்ப கட்டமைப்பு",
      "desc": "SMPP/API கணக்கு விவரங்களை வழங்குதல் மற்றும் பாதுகாப்பான ஐபி ஏற்புப்பட்டியல் உள்ளமைத்தல்."
    },
    {
      "step": "3",
      "title": "இணைப்பு சோதனை",
      "desc": "உண்மையான நெட்வொர்க்குகளில் குறியாக்கம், வேகம் மற்றும் DLR ரசீதுகளின் துல்லியத்தை முழுமையாகச் சரிபார்த்தல்."
    },
    {
      "step": "4",
      "title": "நேரலை தொடக்கம்",
      "desc": "எங்கள் நெட்வொர்க் பொறியாளர்களின் மேற்பார்வையில் வணிக டிராஃபிக்கை முறையாகத் தொடங்குதல்."
    }
  ],
  "integrationPlan": {
    "title": "உங்கள் மொத்த விற்பனை எஸ்எம்எஸ் இணைப்பு",
    "planBadge": "ஒருங்கிணைப்பு விவரக்குறிப்பு",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P செய்தி டிராஃபிக்",
    "formats": "GSM-7 / பலமொழி யூனிகோட்",
    "feedback": "நிகழ்நேர டெலிவரி ரசீதுகள் (DLR)",
    "senderSetup": "சந்தைக்கு ஏற்ப உள்ளமைவு",
    "check1": "சான்றுகள் மற்றும் இணைப்பு சோதனை",
    "check2": "அனுப்புநர் அடையாளம் மற்றும் DLR சரிபார்ப்பு",
    "discussNote": "உங்கள் தளத்திற்கு மிகவும் பொருத்தமான இடைமுகத்தைத் தேர்ந்தெடுக்க எங்களைத் தொடர்பு கொள்ளவும்.",
    "discussBtn": "ஒருங்கிணைப்பைப் பற்றி விவாதிக்கவும்"
  },
  "faqBadge": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  "faqTitle": "மொத்த விற்பனை எஸ்எம்எஸ் பற்றிய முக்கிய விவரங்கள்",
  "faqSubtitle": "இடைமுகங்கள், நெறிமுறைகள் மற்றும் டெலிவரி தரம் பற்றிய தெளிவான பதில்கள்.",
  "faqs": [
    {
      "q": "மொத்த விற்பனை எஸ்எம்எஸ் சேவை யாருக்காக உருவாக்கப்பட்டது?",
      "a": "தொலைத்தொடர்பு ஆபரேட்டர்கள், எஸ்எம்எஸ் திரட்டுநர்கள், CPaaS தளங்கள் மற்றும் பெரிய அளவில் சர்வதேச A2P செய்திகளை அனுப்பும் நிறுவனங்களுக்காக."
    },
    {
      "q": "எந்த நெறிமுறைகள் மற்றும் இடைமுகங்கள் ஆதரிக்கப்படுகின்றன?",
      "a": "நிலையான அதிவேக SMPP v3.4 நெறிமுறை மற்றும் வெப்ஹூக் உடனான நவீன REST API-கள் இரண்டையும் நாங்கள் ஆதரிக்கிறோம்."
    },
    {
      "q": "அனுப்புநர் பெயர் (Sender ID) பதிவுக்கு உதவி வழங்கப்படுகிறதா?",
      "a": "ஆம், உள்ளூர் விதிமுறைகளுக்கு ஏற்ப தேவையான ஆவணங்களைத் தயாரித்து உள்ளூர் ஆபரேட்டர்களிடம் பதிவு செய்ய எங்கள் குழு உதவுகிறது."
    },
    {
      "q": "டெலிவரி அறிக்கைகளின் வெளிப்படைத்தன்மை எவ்வாறு உறுதி செய்யப்படுகிறது?",
      "a": "நிலையான பிழைக் குறியீடுகளுடன் கூடிய நிகழ்நேர DLR மற்றும் முழுமையான நெட்வொர்க் அளவீடுகளை API மற்றும் போர்டல் மூலம் நாங்கள் வழங்குகிறோம்."
    }
  ],
  "ctaBadge": "இன்றே தொடங்குங்கள்",
  "ctaTitle": "உங்கள் உலகளாவிய எஸ்எம்எஸ் இணைப்பை மேம்படுத்தத் தயாரா?",
  "ctaSubtitle": "உங்கள் முக்கிய இலக்குகளுக்கு உகந்த ரூட்டிங் உத்தியை வடிவமைக்க எங்கள் தொலைத்தொடர்பு நிபுணர்களைத் தொடர்பு கொள்ளுங்கள்.",
  "contactUs": "நிபுணரைத் தொடர்பு கொள்ளவும்",
  "ctaFootnote": "ஆபரேட்டர்கள் மற்றும் நிறுவனங்களுக்கு அர்ப்பணிக்கப்பட்ட சோதனை சூழல் மற்றும் ஆலோசனை கிடைக்கிறது."
};

const te: WholesaleMessageTranslation = {
  "heroBadge": "హోల్‌సేల్ SMS • గ్లోబల్ మెసేజింగ్ మౌలిక సదుపాయాలు",
  "heroTitle": "ప్రతి సందేశం, సంపూర్ణ విశ్వసనీయతతో అనుసంధానించబడింది.",
  "heroDesc": "టెలికాం ఆపరేటర్లు, మెసేజింగ్ అగ్రిగేటర్లు మరియు కమ్యూనికేషన్ ప్లాట్‌ఫారమ్‌ల కోసం క్యారియర్-గ్రేడ్ హోల్‌సేల్ SMS సేవ. ప్రత్యక్ష క్యారియర్ ఇంటర్‌కనెక్ట్‌లు మరియు పారదర్శక డెలివరీ నివేదికలతో మీ A2P ట్రాఫిక్‌ను ప్రపంచ మార్గాలకు కనెక్ట్ చేయండి.",
  "talkToExpert": "నిపుణుడితో మాట్లాడండి",
  "exploreCapabilities": "సామర్థ్యాలను అన్వేషించండి",
  "stats": {
    "routing": "గ్లోబల్ రూటింగ్",
    "routingLabel": "మార్కెట్ ఆధారిత పరిధి",
    "traffic": "A2P మెసేజింగ్",
    "trafficLabel": "వ్యాపార కీలక ట్రాఫిక్",
    "insights": "డెలివరీ అంతర్దృష్టులు",
    "insightsLabel": "కార్యాచరణ నియంత్రణ"
  },
  "heroLiveBadge1": {
    "title": "A2P కనెక్టివిటీ",
    "label": "మీ ప్లాట్‌ఫారమ్. గ్లోబల్ రీచ్."
  },
  "heroLiveBadge2": {
    "title": "ప్రతి దశలో స్పష్టత",
    "sub": "సమర్పణ • మార్గం • రసీదు"
  },
  "whyBadge": "INET హోల్‌సేల్ SMS ఎందుకు ఎంచుకోవాలి",
  "whyTitle": "ప్రతి వ్యాపార పరస్పర చర్యను బలోపేతం చేసే మెసేజింగ్ మౌలిక సదుపాయాలు",
  "whySubtitle1": "మేము ప్రత్యక్ష ఇంటర్‌కనెక్ట్‌లు, యాక్టివ్ రూట్ మానిటరింగ్ మరియు వివరణాత్మక డెలివరీ రిపోర్టింగ్‌తో అంతర్జాతీయ SMS టెర్మినేషన్‌ను అందిస్తున్నాము.",
  "whySubtitle2": "పెద్ద పరిమాణంలో నిరూపితమైన స్థిరత్వం మరియు విశ్వసనీయత అవసరమయ్యే అగ్రిగేటర్లు మరియు సంస్థల కోసం రూపొందించబడింది.",
  "whyCards": [
    {
      "title": "గ్లోబల్ మార్కెట్లను చేరుకోండి",
      "desc": "మీ కస్టమర్లకు అవసరమైన వ్యూహాత్మక గమ్యస్థానాల కోసం అంతర్జాతీయ సందేశ పరిధిని నిర్మించండి.",
      "footer": "గ్లోబల్ SMS రూటింగ్"
    },
    {
      "title": "ప్రత్యక్ష క్యారియర్ ఇంటర్‌కనెక్ట్‌లు",
      "desc": "అధిక నాణ్యత గల డైరెక్ట్ నెట్‌వర్క్ లింక్‌లు మరియు నిర్వహించబడే ఒప్పందాల ద్వారా అనవసరమైన జాప్యాలను తగ్గించండి.",
      "footer": "క్యారియర్-గ్రేడ్ నాణ్యత"
    },
    {
      "title": "రియల్ టైమ్ పర్యవేక్షణ",
      "desc": "పారదర్శక టెలిమెట్రీతో డెలివరీ రేట్లు, DLR కోడ్‌లు మరియు ప్రసార జాప్యాలను పర్యవేక్షించండి.",
      "footer": "కార్యాచరణ పారదర్శకత"
    },
    {
      "title": "అధిక స్కేలబిలిటీ",
      "desc": "వైఫల్యాలను తట్టుకునే స్థితిస్థాపక క్లౌడ్ ఆర్కిటెక్చర్‌తో రోజుకు మిలియన్ల కొద్దీ సందేశాలను సజావుగా బట్వాడా చేయండి.",
      "footer": "ఎంటర్‌ప్రైజ్ పనితీరు"
    }
  ],
  "capabilitiesBadge": "ప్రధాన సామర్థ్యాలు",
  "capabilitiesTitle": "వ్యాపార కీలక సందేశ ట్రాఫిక్ కోసం ప్రత్యేకంగా రూపొందించబడింది",
  "capabilitiesDesc": "మా హోల్‌సేల్ టెలికాం సేవల సూట్ A2P ట్రాఫిక్ యొక్క పూర్తి జీవితచక్రాన్ని నిరూపితమైన విశ్వసనీయతతో నిర్వహిస్తుంది.",
  "designSolution": "పరిష్కారాన్ని రూపొందించండి",
  "solutionNote": "రూటింగ్‌లు మరియు టారిఫ్‌లను ఆప్టిమైజ్ చేయడానికి మా ఇంజనీర్లతో సంప్రదించండి.",
  "capabilities": [
    {
      "tag": "వ్యాపార మెసేజింగ్",
      "title": "హోల్‌సేల్ A2P SMS టెర్మినేషన్",
      "desc": "ధృవీకరణ, అత్యవసర హెచ్చరికలు మరియు సమ్మతి ఆధారిత కస్టమర్ నిమగ్నత కోసం B2C SMS పంపండి."
    },
    {
      "tag": "గ్లోబల్ కనెక్టివిటీ",
      "title": "అంతర్జాతీయ రూటింగ్ కవరేజ్",
      "desc": "స్థానిక నిబంధనలకు అనుగుణంగా ప్రత్యేక ప్రొఫైల్‌లతో ప్రపంచవ్యాప్తంగా మొబైల్ ఆపరేటర్లను చేరుకోండి."
    },
    {
      "tag": "ప్రామాణిక ప్రోటోకాల్‌లు",
      "title": "SMPP మరియు API ఇంటిగ్రేషన్",
      "desc": "అధిక సామర్థ్యం గల SMPP v3.4 లింక్‌లు లేదా ఆధునిక REST APIల ద్వారా సులభంగా అనుసంధానించండి."
    },
    {
      "tag": "డెలివరీ విశ్వసనీయత",
      "title": "తెలివైన రూట్ నిర్వహణ",
      "desc": "రియల్ టైమ్ పనితీరు ఆధారంగా ఉత్తమమైన మార్గాన్ని ఎంపిక చేసే అనుకూల రూటింగ్."
    },
    {
      "tag": "నిబంధనల వర్తింపు",
      "title": "Sender ID మరియు రిజిస్ట్రేషన్ విధానాలు",
      "desc": "స్థానిక చట్టాల ప్రకారం ఆల్ఫాన్యూమరిక్ పంపినవారి గుర్తింపు మరియు షార్ట్ కోడ్‌లను నమోదు చేయడంలో నిపుణుల మార్గదర్శకత్వం."
    },
    {
      "tag": "అధునాతన రిపోర్టింగ్",
      "title": "డెలివరీ రసీదులు (DLR) & టెలిమెట్రీ",
      "desc": "త్వరిత కార్యాచరణ విశ్లేషణ కోసం వివరణాత్మక DLR రసీదులు మరియు స్థితి నివేదికలు."
    }
  ],
  "howItWorksBadge": "ఇది ఎలా పనిచేస్తుంది",
  "howItWorksTitle": "ఇంటిగ్రేషన్ నుండి ప్రపంచ పరిధి వరకు 3 దశల్లో",
  "howItWorksSubtitle": "మీ అంతర్జాతీయ SMS కనెక్టివిటీని వేగంగా మరియు సురక్షితంగా ప్రారంభించడానికి ఒక క్రమబద్ధమైన ప్రక్రియ.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "మీ ప్లాట్‌ఫారమ్‌ను కనెక్ట్ చేయండి",
      "desc": "అంగీకరించిన SMPP లేదా API కనెక్షన్ ద్వారా మీ సెట్టింగ్‌లతో A2P సందేశాలను సమర్పించండి.",
      "note": "మీ అప్లికేషన్ → iNet"
    },
    {
      "step": "02",
      "title": "తెలివైన రూటింగ్",
      "desc": "మీ ట్రాఫిక్ ప్రొఫైల్‌కు అత్యంత అనుకూలమైన క్యారియర్ లింక్ ద్వారా మేము ప్రతి సందేశాన్ని రూట్ చేస్తాము.",
      "note": "క్యారియర్ రూటింగ్ ఇంజిన్"
    },
    {
      "step": "03",
      "title": "రిపోర్టులు మరియు ఆప్టిమైజేషన్",
      "desc": "రియల్ టైమ్ డెలివరీ రసీదులను పొందండి మరియు నిరంతర సాంకేతిక మద్దతుతో పరిమాణాన్ని విస్తరించండి.",
      "note": "గమ్యస్థాన నెట్‌వర్క్ ద్వారా DLR నిర్ధారణ"
    }
  ],
  "networkBadge": "నెట్‌వర్క్ మరియు కవరేజ్",
  "networkTitle": "ప్రతి గమ్యస్థానానికి క్యారియర్-గ్రేడ్ కనెక్టివిటీ",
  "networkDesc": "అధిక లభ్యత కోసం ఆప్టిమైజ్ చేయబడిన మౌలిక సదుపాయాలతో ప్రపంచవ్యాప్తంగా 1,000+ మొబైల్ నెట్‌వర్క్‌లకు ప్రాప్యత.",
  "networkBullets": [
    "ప్రముఖ గ్లోబల్ ఆపరేటర్లతో ప్రత్యక్ష మరియు నిర్వహించబడే ఇంటర్‌కనెక్ట్‌లు",
    "GSM-7 మరియు బహుభాషా యూనికోడ్ ఎన్‌కోడింగ్‌కు పూర్తి మద్దతు",
    "భౌగోళికంగా పంపిణీ చేయబడిన ఆటోమేటిక్ ఫెయిల్‌ఓవర్ మౌలిక సదుపాయాలు",
    "నెట్‌వర్క్ ఆపరేషన్స్ సెంటర్ (NOC) ద్వారా 24/7/365 పర్యవేక్షణ"
  ],
  "networkStats": [
    {
      "val": "క్యారియర్ ఆధారితం",
      "label": "కనెక్టివిటీ వ్యూహం"
    },
    {
      "val": "మార్కెట్-అనుకూలం",
      "label": "రూటింగ్ & పంపినవారి విధానాలు"
    }
  ],
  "networkBadgeOverlay": {
    "title": "బలమైన ఆపరేటర్ భాగస్వామ్యాల ద్వారా నడపబడుతుంది",
    "sub": "డైరెక్ట్ రూట్స్ • మేనేజ్డ్ ఇంటర్‌కనెక్ట్స్"
  },
  "networkFooterNote": "రూట్ లభ్యత మరియు పంపినవారి విధానాలు స్థానిక చట్టాలు మరియు నియమాలకు లోబడి ఉంటాయి.",
  "momentsBadge": "వినియోగ సందర్భాలు",
  "momentsTitle": "కీలకమైన వ్యాపార పరస్పర చర్యల కోసం నిర్మించబడింది",
  "momentsSubtitle": "వినియోగదారుల నమ్మకాన్ని పెంచే సమయ-సున్నితమైన సందేశాలను సకాలంలో బట్వాడా చేయడాన్ని నిర్ధారించండి.",
  "moments": [
    {
      "title": "ధృవీకరణ మరియు 2FA",
      "desc": "సురక్షిత లాగిన్, OTP వెరిఫికేషన్ కోడ్‌లు మరియు లావాదేవీల ఆమోదాలను ప్రాధాన్యత A2P SMS తో ప్రారంభించండి.",
      "footer": "OTP మరియు వేగవంతమైన ధృవీకరణ"
    },
    {
      "title": "లావాదేవీల హెచ్చరికలు",
      "desc": "బ్యాంకింగ్ హెచ్చరికలు, ఆర్డర్ నిర్ధారణలు మరియు ఖాతా అప్‌డేట్‌లను ఆలస్యం లేకుండా తక్షణమే పంపండి.",
      "footer": "రియల్ టైమ్ హెచ్చరికలు"
    },
    {
      "title": "సేవా రిమైండర్‌లు & అప్‌డేట్‌లు",
      "desc": "అపాయింట్‌మెంట్ రిమైండర్‌లు, డెలివరీ అప్‌డేట్‌లు మరియు అత్యవసర నోటీసులను సకాలంలో డెలివరీ చేయండి.",
      "footer": "కార్యాచరణ నోటిఫికేషన్‌లు"
    },
    {
      "title": "సమ్మతి ఆధారిత కమ్యూనికేషన్",
      "desc": "సభ్యత్వం పొందిన కస్టమర్లకు స్థానిక నిబంధనల ప్రకారం సమాచార సందేశాలను అందించండి.",
      "footer": "సమ్మతి ఆధారిత మెసేజింగ్"
    }
  ],
  "intelligenceBadge": "డెలివరీ ఇంటెలిజెన్స్",
  "intelligenceTitle": "ప్రతి సందేశంపై సంపూర్ణ నియంత్రణ మరియు పారదర్శకత",
  "intelligenceDesc": "వివరణాత్మక ట్రాఫిక్ కొలమానాలు, ఎర్రర్ కోడ్ విశ్లేషణ మరియు చురుకైన పర్యవేక్షణతో సరైన నిర్ణయాలు తీసుకోండి.",
  "intelligenceBullets": [
    "ప్రతి సందేశం యొక్క పూర్తి స్థితి ట్రాకింగ్",
    "నెట్‌వర్క్ అంతరాయాలు ఏర్పడినప్పుడు ఆటోమేటిక్ ప్రత్యామ్నాయ రూట్ బదిలీ",
    "జాప్యాలు పెరిగినప్పుడు తక్షణ హెచ్చరికలు",
    "ఆడిట్ మరియు సరిపోలిక కోసం సమగ్ర చారిత్రక లాగ్‌లు"
  ],
  "intelligenceFootnote": "అన్ని టెలిమెట్రీ కొలమానాలు మరియు నెట్‌వర్క్ స్థితి కోడ్‌లు లైవ్ DLR ద్వారా తిరిగి పంపబడతాయి.",
  "messageLogCard": {
    "title": "సందేశ పర్యవేక్షణ లాగ్",
    "badge": "నమూనా వీక్షణ",
    "tab1": "లాగ్ జాబితా",
    "tab2": "మార్గాలు",
    "tab3": "గమ్యస్థానాలు",
    "colType": "సందేశ రకం",
    "colState": "స్థితి",
    "colReceipt": "రసీదు",
    "row1Type": "ధృవీకరణ OTP",
    "row1State": "డెలివరీ అయింది",
    "row1Receipt": "స్వీకరించబడింది",
    "row2Type": "ఆర్డర్ అప్‌డేట్",
    "row2State": "పంపబడుతోంది",
    "row2Receipt": "పెండింగ్‌లో ఉంది",
    "row3Type": "సేవా హెచ్చరిక",
    "row3State": "తిరస్కరించబడింది",
    "row3Receipt": "లోపం వివరాలు",
    "footerText": "సమర్పణ నుండి నెట్‌వర్క్ నిర్ధారణ వరకు ప్రతి అడుగును ట్రాక్ చేయండి."
  },
  "protectionTitle": "ట్రాఫిక్ భద్రత మరియు మోసం నివారణ",
  "protectionBadge": "నెట్‌వర్క్ సమగ్రత",
  "protectionCards": [
    {
      "title": "అసాధారణ ట్రాఫిక్ గుర్తింపు",
      "desc": "SMS పంపింగ్ మరియు స్పామ్ దాడులను నిరోధించడానికి అనుమానాస్పద విధానాలను వెంటనే గుర్తించి నిరోధించండి."
    },
    {
      "title": "నియమాలకు లోబడి ఉండటం మరియు బ్లాక్‌లిస్ట్‌లు",
      "desc": "పంపినవారి ఖ్యాతిని కాపాడటానికి నిలిపివేత అభ్యర్థనలను స్వయంచాలకంగా నిర్వహించండి."
    },
    {
      "title": "Sender ID దుర్వినియోగ రక్షణ",
      "desc": "నియంత్రిత మార్కెట్లలో ఆల్ఫాన్యూమరిక్ పంపినవారి పేర్లు దుర్వినియోగం కాకుండా రక్షించండి."
    }
  ],
  "timelineBadge": "ఇంటిగ్రేషన్ ప్రణాళిక",
  "timelineTitle": "4 దశల్లో నిర్మాణాత్మక అమలు",
  "timelineSubtitle": "మీ ప్లాట్‌ఫారమ్‌ను ఎలాంటి ఆటంకం లేకుండా అనుసంధానించడానికి నిరూపితమైన పద్ధతి.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "అవసరాల అంచనా",
      "desc": "గమ్యస్థాన దేశాలు, అంచనా వేసిన వాల్యూమ్, పంపినవారి ఐడి అవసరాలు మరియు వాణిజ్య నిబంధనల నిర్ధారణ."
    },
    {
      "step": "2",
      "title": "సాంకేతిక సెటప్",
      "desc": "SMPP/API ఖాతా వివరాల జారీ మరియు సురక్షిత ఐపి వైట్‌లిస్ట్ కాన్ఫిగరేషన్."
    },
    {
      "step": "3",
      "title": "కనెక్టివిటీ పరీక్ష",
      "desc": "వాస్తవ నెట్‌వర్క్‌లలో ఎన్‌కోడింగ్, వేగం మరియు DLR రసీదుల ఖచ్చితత్వాన్ని ధృవీకరించడం."
    },
    {
      "step": "4",
      "title": "లైవ్ లాంచ్",
      "desc": "మా నెట్‌వర్క్ ఇంజనీర్ల పర్యవేక్షణలో వాణిజ్య ట్రాఫిక్‌ను అధికారికంగా ప్రారంభించడం."
    }
  ],
  "integrationPlan": {
    "title": "మీ హోల్‌సేల్ SMS కనెక్షన్",
    "planBadge": "ఇంటిగ్రేషన్ ప్రణాళిక",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P సందేశ ట్రాఫిక్",
    "formats": "GSM-7 / బహుభాషా యూనికోడ్",
    "feedback": "రియల్ టైమ్ డెలివరీ రసీదులు (DLR)",
    "senderSetup": "మార్కెట్ ఆధారిత కాన్ఫిగరేషన్",
    "check1": "ఖాతా ఆధారాలు మరియు నెట్‌వర్క్ పరీక్ష",
    "check2": "పంపినవారి గుర్తింపు మరియు DLR ధృవీకరణ",
    "discussNote": "మీ ప్లాట్‌ఫారమ్‌కు సరైన ఇంటర్‌ఫేస్‌ను ఎంచుకోవడానికి మాతో మాట్లాడండి.",
    "discussBtn": "ఇంటిగ్రేషన్ గురించి చర్చించండి"
  },
  "faqBadge": "తరచుగా అడిగే ప్రశ్నలు",
  "faqTitle": "హోల్‌సేల్ SMS గురించి ముఖ్యమైన ప్రశ్నలు",
  "faqSubtitle": "కనెక్టివిటీ, ప్రోటోకాల్‌లు మరియు డెలివరీ నాణ్యత గురించి స్పష్టమైన సమాధానాలు.",
  "faqs": [
    {
      "q": "హోల్‌సేల్ SMS సేవ ఎవరి కోసం ఉద్దేశించబడింది?",
      "a": "టెలికాం ఆపరేటర్లు, SMS అగ్రిగేటర్లు, CPaaS ప్లాట్‌ఫారమ్‌లు మరియు అంతర్జాతీయ A2P సందేశాలను పెద్ద ఎత్తున పంపే సంస్థల కోసం."
    },
    {
      "q": "ఏ ప్రోటోకాల్‌లు మరియు ఇంటర్‌ఫేస్‌లు మద్దతు ఇస్తాయి?",
      "a": "మేము హై-స్పీడ్ SMPP v3.4 ప్రోటోకాల్ మరియు వెబ్‌హుక్‌లతో కూడిన ఆధునిక REST API రెండింటికీ మద్దతు ఇస్తున్నాము."
    },
    {
      "q": "ఆల్ఫాన్యూమరిక్ Sender ID నమోదుకు మద్దతు ఇవ్వబడుతుందా?",
      "a": "అవును, మా బృందం స్థానిక నిబంధనల ప్రకారం స్థానిక ఆపరేటర్లతో డాక్యుమెంటేషన్ మరియు నమోదులో పూర్తి సహాయం అందిస్తుంది."
    },
    {
      "q": "డెలివరీ రిపోర్టులు ఎంత పారదర్శకంగా అందుబాటులో ఉంటాయి?",
      "a": "ప్రామాణిక ఎర్రర్ కోడ్‌లతో కూడిన రియల్ టైమ్ DLR మరియు వివరణాత్మక నెట్‌వర్క్ కొలమానాలను API మరియు పోర్టల్ ద్వారా అందిస్తాము."
    }
  ],
  "ctaBadge": "ఈరోజే ప్రారంభించండి",
  "ctaTitle": "మీ గ్లోబల్ SMS కనెక్టివిటీని ఆప్టిమైజ్ చేయడానికి సిద్ధంగా ఉన్నారా?",
  "ctaSubtitle": "మీ ప్రాధాన్యత గమ్యస్థానాలకు తగిన రూటింగ్ వ్యూహాన్ని రూపొందించడానికి మా నిపుణులను సంప్రదించండి.",
  "contactUs": "నిపుణుడితో సంప్రదించండి",
  "ctaFootnote": "ఆపరేటర్లు మరియు సంస్థల కోసం అంకితమైన పరీక్ష వాతావరణం మరియు ట్రాఫిక్ విశ్లేషణ అందుబాటులో ఉంది."
};

const mr: WholesaleMessageTranslation = {
  "heroBadge": "घाऊक एसएमएस • जागतिक मेसेजिंग पायाभूत सुविधा",
  "heroTitle": "प्रत्येक संदेश, पूर्ण विश्वासाने जोडलेला.",
  "heroDesc": "टेलिकॉम ऑपरेटर, मेसेजिंग ॲग्रीगेटर्स आणि प्लॅटफॉर्मसाठी वाहक-दर्जाची घाऊक एसएमएस सेवा. थेट ऑपरेटर जोडणी आणि पारदर्शक वितरण अहवालांसह तुमचा A2P ट्रॅफिक जागतिक मार्गांशी जोडा.",
  "talkToExpert": "तज्ज्ञांशी बोला",
  "exploreCapabilities": "क्षमता जाणून घ्या",
  "stats": {
    "routing": "ग्लोबल राउटिंग",
    "routingLabel": "बाजारपेठ-केंद्रित पोहोच",
    "traffic": "A2P मेसेजिंग",
    "trafficLabel": "व्यवसाय-गंभीर ट्रॅफिक",
    "insights": "वितरण विश्लेषण",
    "insightsLabel": "ऑपरेशनल नियंत्रण"
  },
  "heroLiveBadge1": {
    "title": "A2P कनेक्टिव्हिटी",
    "label": "तुमचे प्लॅटफॉर्म. जागतिक पोहोच."
  },
  "heroLiveBadge2": {
    "title": "प्रत्येक टप्प्यावर पारदर्शकता",
    "sub": "सादर • मार्ग • पावती"
  },
  "whyBadge": "INET होलसेल एसएमएस का निवडावे",
  "whyTitle": "प्रत्येक व्यावसायिक संवादाला बळकट करणारी मेसेजिंग पायाभूत सुविधा",
  "whySubtitle1": "आम्ही थेट वाहक इंटरकनेक्ट, सक्रिय मार्ग देखरेख आणि तपशीलवार वितरण अहवालांद्वारे समर्थित आंतरराष्ट्रीय एसएमएस सेवा देतो.",
  "whySubtitle2": "मोठ्या प्रमाणावर सिद्ध स्थिरता आणि अखंड विश्वसनीयता आवश्यक असणाऱ्या संस्थांसाठी डिझाइन केलेले.",
  "whyCards": [
    {
      "title": "जागतिक बाजारपेठांमध्ये पोहोच",
      "desc": "तुमच्या ग्राहकांना आवश्यक असलेल्या धोरणात्मक गंतव्यस्थानांसाठी आंतरराष्ट्रीय संदेश पोहोच तयार करा.",
      "footer": "ग्लोबल एसएमएस राउटिंग"
    },
    {
      "title": "थेट वाहक इंटरकनेक्ट्स",
      "desc": "उच्च दर्जाच्या थेट नेटवर्क लिंक्स आणि व्यवस्थापित करारांद्वारे अनावश्यक विलंब कमी करा.",
      "footer": "वाहक-दर्जाची गुणवत्ता"
    },
    {
      "title": "रिअल-टाइम देखरेख",
      "desc": "पारदर्शक टेलिमेट्रीसह वितरण दर, DLR कोड आणि ट्रान्समिशन लेटन्सीचे निरीक्षण करा.",
      "footer": "ऑपरेशनल पारदर्शकता"
    },
    {
      "title": "लवचिक स्केलेबिलिटी",
      "desc": "दोष-सहिष्णू क्लाउड आर्किटेक्चरसह दररोज लाखो संदेश अखंडपणे वितरित करा.",
      "footer": "एंटरप्राइझ कामगिरी"
    }
  ],
  "capabilitiesBadge": "प्रमुख क्षमता",
  "capabilitiesTitle": "महत्त्वाच्या व्यावसायिक संदेश ट्रॅफिकसाठी डिझाइन केलेले",
  "capabilitiesDesc": "आमचा घाऊक टेलिकॉम सेवा संच सिद्ध विश्वासासह A2P ट्रॅफिकचे संपूर्ण चक्र व्यवस्थापित करतो.",
  "designSolution": "समाधान डिझाइन करा",
  "solutionNote": "मार्ग आणि दर ऑप्टिमाइझ करण्यासाठी आमच्या अभियंत्यांशी बोला.",
  "capabilities": [
    {
      "tag": "व्यावसायिक मेसेजिंग",
      "title": "घाऊक A2P एसएमएस टर्मिनेशन",
      "desc": "प्रमाणीकरण, महत्त्वपूर्ण सूचना आणि संमती-आधारित ग्राहक संवादासाठी B2C एसएमएस पाठवा."
    },
    {
      "tag": "जागतिक कनेक्टिव्हिटी",
      "title": "आंतरराष्ट्रीय राउटिंग व्याप्ती",
      "desc": "स्थानिक नियमांनुसार सानुकूलित प्रोफाइलसह जगभरातील मोबाइल नेटवर्क ऑपरेटर्सपर्यंत पोहोचा."
    },
    {
      "tag": "मानक प्रोटोकॉल",
      "title": "SMPP आणि API एकत्रीकरण",
      "desc": "उच्च क्षमतेच्या SMPP v3.4 लिंक्स किंवा आधुनिक REST APIs द्वारे सहजपणे कनेक्ट व्हा."
    },
    {
      "tag": "वितरण विश्वसनीयता",
      "title": "स्मार्ट मार्ग व्यवस्थापन",
      "desc": "थेट वितरण कामगिरीच्या आधारे सर्वोत्तम मार्ग निवडणारे अनुकूली राउटिंग."
    },
    {
      "tag": "नियामक अनुपालन",
      "title": "प्रेषक आयडी आणि नोंदणी धोरणे",
      "desc": "स्थानिक कायद्यांनुसार अल्फान्यूमेरिक प्रेषक आयडी आणि शॉर्ट कोड नोंदणीसाठी तज्ज्ञ मार्गदर्शन."
    },
    {
      "tag": "प्रगत अहवाल",
      "title": "वितरण पावत्या (DLR) आणि टेलिमेट्री",
      "desc": "जलद ऑपरेशनल निदानासाठी तपशीलवार DLR पावत्या आणि कामगिरी विश्लेषण."
    }
  ],
  "howItWorksBadge": "हे कसे कार्य करते",
  "howItWorksTitle": "एकीकरणापासून जागतिक पोहोचेपर्यंत 3 सोप्या टप्प्यांत",
  "howItWorksSubtitle": "तुमची आंतरराष्ट्रीय एसएमएस कनेक्टिव्हिटी जलद आणि सुरक्षितपणे सुरू करण्यासाठी एक संरचित प्रक्रिया.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "तुमचे प्लॅटफॉर्म जोडा",
      "desc": "मान्य केलेल्या SMPP किंवा API कनेक्शनद्वारे तुमच्या सेटिंग्जसह A2P संदेश पाठवा.",
      "note": "तुमचे ॲप्लिकेशन → iNet"
    },
    {
      "step": "02",
      "title": "स्मार्ट राउटिंग",
      "desc": "आम्ही तुमच्या ट्रॅफिक प्रोफाइलसाठी सर्वाधिक योग्य वाहक लिंकद्वारे प्रत्येक संदेश पाठवतो.",
      "note": "कॅरियर राउटिंग इंजिन"
    },
    {
      "step": "03",
      "title": "अहवाल आणि ऑप्टिमायझेशन",
      "desc": "रिअल-टाइम वितरण पावत्या मिळवा आणि निरंतर तांत्रिक समर्थनासह तुमचे प्रमाण वाढवा.",
      "note": "गंतव्य नेटवर्कद्वारे DLR पुष्टी"
    }
  ],
  "networkBadge": "नेटवर्क आणि व्याप्ती",
  "networkTitle": "प्रत्येक गंतव्यासाठी वाहक-दर्जाची कनेक्टिव्हिटी",
  "networkDesc": "उच्च उपलब्धतेसाठी अनुकूलित पायाभूत सुविधांसह जगभरातील १,०००+ मोबाइल नेटवर्कवर प्रवेश.",
  "networkBullets": [
    "जागतिक आघाडीच्या ऑपरेटर्सशी थेट आणि व्यवस्थापित जोडणी",
    "GSM-7 आणि बहुभाषिक युनिकॉड एन्कोडिंगसाठी पूर्ण समर्थन",
    "स्वयंचलित फेलओव्हरसह भौगोलिकदृष्ट्या वितरित रिडंडंट आर्किटेक्चर",
    "नेटवर्क ऑपरेशन्स सेंटर (NOC) द्वारे २४/७/३६५ सतत देखरेख"
  ],
  "networkStats": [
    {
      "val": "वाहक-आधारित",
      "label": "कनेक्टिव्हिटी धोरण"
    },
    {
      "val": "बाजार-सुसंगत",
      "label": "राउटिंग व प्रेषक धोरणे"
    }
  ],
  "networkBadgeOverlay": {
    "title": "मजबूत ऑपरेटर भागीदारीद्वारे समर्थित",
    "sub": "थेट मार्ग • व्यवस्थापित इंटरकनेक्ट्स"
  },
  "networkFooterNote": "मार्गांची उपलब्धता आणि प्रेषक धोरणे प्रत्येक देशाच्या स्थानिक नियमांवर अवलंबून असतात.",
  "momentsBadge": "वापर प्रसंग",
  "momentsTitle": "महत्त्वाच्या व्यावसायिक क्षणांसाठी निर्मित",
  "momentsSubtitle": "वापरकर्त्यांचा विश्वास टिकवून ठेवणाऱ्या वेळ-संवेदनशील संदेशांचे वेळेवर वितरण सुनिश्चित करा.",
  "moments": [
    {
      "title": "प्रमाणीकरण आणि 2FA",
      "desc": "प्राधान्य A2P एसएमएस द्वारे सुरक्षित लॉगिन, OTP पडताळणी कोड आणि व्यवहार मंजुरी सुलभ करा.",
      "footer": "OTP आणि जलद पडताळणी"
    },
    {
      "title": "व्यवहार सूचना",
      "desc": "बँक अलर्ट, ऑर्डर पुष्टीकरण आणि खाते बदल त्वरित आणि सुरक्षितपणे वितरित करा.",
      "footer": "रिअल-टाइम सूचना"
    },
    {
      "title": "सेवा स्मरणपत्रे",
      "desc": "अपॉइंटमेंट स्मरणपत्रे, वितरण अद्यतने आणि तातडीच्या देखभाल सूचना वेळेवर पोहोचवा.",
      "footer": "ऑपरेशनल नोटिफिकेशन्स"
    },
    {
      "title": "संमती-आधारित संवाद",
      "desc": "स्थानिक नियमांचे पालन करून ग्राहकांपर्यंत माहितीपूर्ण आणि सेवा संदेश पोहोचवा.",
      "footer": "संमती-आधारित मेसेजिंग"
    }
  ],
  "intelligenceBadge": "वितरण बुद्धिमत्ता",
  "intelligenceTitle": "प्रत्येक संदेशावर संपूर्ण दृश्यमानता आणि नियंत्रण",
  "intelligenceDesc": "तपशीलवार ट्रॅफिक मेट्रिक्स आणि सक्रिय देखरेखीसह माहितीपूर्ण व्यावसायिक निर्णय घ्या.",
  "intelligenceBullets": [
    "प्रत्येक संदेशाचे संपूर्ण लाइफसायकल ट्रॅकिंग",
    "नेटवर्क चढ-उतारांमध्ये स्वयंचलित पर्यायी मार्ग बदल",
    "लेटन्सी वाढल्यास त्वरित सूचना",
    "तपासणी आणि मेळासाठी संपूर्ण ऐतिहासिक नोंदी"
  ],
  "intelligenceFootnote": "सर्व टेलिमेट्री मेट्रिक्स आणि स्टेटस कोड थेट DLR द्वारे पाठवले जातात.",
  "messageLogCard": {
    "title": "संदेश मॉनिटरिंग लॉग",
    "badge": "नमुना दृश्य",
    "tab1": "नोंद यादी",
    "tab2": "मार्ग",
    "tab3": "गंतव्य",
    "colType": "संदेश प्रकार",
    "colState": "स्थिती",
    "colReceipt": "पावती",
    "row1Type": "पडताळणी OTP",
    "row1State": "वितरित",
    "row1Receipt": "मिळाले",
    "row2Type": "ऑर्डर अपडेट",
    "row2State": "पाठवले जात आहे",
    "row2Receipt": "प्रलंबित",
    "row3Type": "सेवा सूचना",
    "row3State": "नाकारले",
    "row3Receipt": "त्रुटी तपशील",
    "footerText": "संदेश पाठवण्यापासून नेटवर्क पुष्टीकरणापर्यंत प्रत्येक टप्पा ट्रॅक करा."
  },
  "protectionTitle": "ट्रॅफिक सुरक्षा आणि फसवणूक प्रतिबंध",
  "protectionBadge": "नेटवर्क अखंडता",
  "protectionCards": [
    {
      "title": "असामान्य ट्रॅफिक शोधणे",
      "desc": "एसएमएस पंपिंग आणि स्पॅम हल्ले रोखण्यासाठी संशयास्पद हालचाली ताबडतोब ओळखा आणि रोखा."
    },
    {
      "title": "नियम पालन आणि ब्लॉकलिस्ट",
      "desc": "प्रेषकाची प्रतिष्ठा राखण्यासाठी नकार विनंत्या स्वयंचलितपणे व्यवस्थापित करा."
    },
    {
      "title": "Sender ID संरक्षण",
      "desc": "नियंत्रित बाजारपेठांमध्ये प्रेषक नावांचा गैरवापर आणि स्पूफिंग रोखा."
    }
  ],
  "timelineBadge": "एकीकरण योजना",
  "timelineTitle": "४ टप्प्यांत सुरळीत अंमलबजावणी",
  "timelineSubtitle": "तुमचे प्लॅटफॉर्म कोणत्याही व्यत्ययाशिवाय जोडण्यासाठी सिद्ध कार्यपद्धती.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "गरजांचे मूल्यांकन",
      "desc": "गंतव्य देश, अपेक्षित संदेश संख्या, प्रेषक ओळख आवश्यकता आणि व्यावसायिक अटी निश्चित करणे."
    },
    {
      "step": "2",
      "title": "तांत्रिक सेटअप",
      "desc": "SMPP/API खात्याची माहिती देणे आणि सुरक्षित आयपी व्हाइटलिस्ट कॉन्फिगर करणे."
    },
    {
      "step": "3",
      "title": "कनेक्टिव्हिटी चाचणी",
      "desc": "वास्तविक नेटवर्कवर लेटन्सी, एन्कोडिंग आणि DLR पावत्यांची अचूकता तपासणे."
    },
    {
      "step": "4",
      "title": "थेट प्रक्षेपण",
      "desc": "आमच्या नेटवर्क अभियंत्यांच्या देखरेखीखाली व्यावसायिक ट्रॅफिक सुरू करणे."
    }
  ],
  "integrationPlan": {
    "title": "तुमचे घाऊक एसएमएस कनेक्शन",
    "planBadge": "एकीकरण तपशील",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P संदेश ट्रॅफिक",
    "formats": "GSM-7 / बहुभाषिक युनिकॉड",
    "feedback": "रिअल-टाइम वितरण पावत्या (DLR)",
    "senderSetup": "बाजारपेठेनुसार संरचना",
    "check1": "क्रेडेन्शियल्स आणि नेटवर्क चाचणी",
    "check2": "प्रेषक ओळख आणि DLR पडताळणी",
    "discussNote": "तुमच्या प्लॅटफॉर्मसाठी सर्वोत्तम इंटरफेस निवडण्यासाठी आमच्याशी चर्चा करा.",
    "discussBtn": "एकीकरणावर चर्चा करा"
  },
  "faqBadge": "नेहमी विचारले जाणारे प्रश्न",
  "faqTitle": "घाऊक एसएमएस बद्दल महत्त्वाची माहिती",
  "faqSubtitle": "इंटरफेस, प्रोटोकॉल आणि वितरणाबद्दल स्पष्ट उत्तरे.",
  "faqs": [
    {
      "q": "घाऊक एसएमएस सेवा कोणासाठी आहे?",
      "a": "टेलिकॉम ऑपरेटर्स, एसएमएस ॲग्रीगेटर्स, CPaaS प्लॅटफॉर्म्स आणि मोठ्या प्रमाणावर आंतरराष्ट्रीय A2P संदेश पाठवणाऱ्या कंपन्यांसाठी."
    },
    {
      "q": "कोणते प्रोटोकॉल समर्थित आहेत?",
      "a": "आम्ही हाय-स्पीड SMPP v3.4 प्रोटोकॉल आणि वेबहुकसह आधुनिक REST API चे समर्थन करतो."
    },
    {
      "q": "अल्फान्यूमेरिक Sender ID नोंदणीत मदत केली जाते का?",
      "a": "होय, आमची टीम स्थानिक नियमांनुसार स्थानिक ऑपरेटर्सकडे नोंदणी करण्यात संपूर्ण मदत करते."
    },
    {
      "q": "वितरण अहवाल किती पारदर्शक असतात?",
      "a": "आम्ही स्टँडर्ड एरर कोडसह थेट DLR आणि सर्वसमावेशक मेट्रिक्स API आणि पोर्टलद्वारे देतो."
    }
  ],
  "ctaBadge": "आजच सुरू करा",
  "ctaTitle": "तुमची जागतिक एसएमएस कनेक्टिव्हिटी सुधारण्यास तयार आहात?",
  "ctaSubtitle": "तुमच्या प्राधान्य गंतव्यांसाठी योग्य राउटिंग धोरण आखण्यासाठी आमच्या तज्ज्ञांशी संपर्क साधा.",
  "contactUs": "तज्ज्ञांशी संपर्क साधा",
  "ctaFootnote": "ऑपरेटर्स आणि कॉर्पोरेट्ससाठी चाचणी खाती आणि ट्रॅफिक सल्ला उपलब्ध आहे."
};

const sw: WholesaleMessageTranslation = {
  "heroBadge": "SMS YA JUMLA • MIUNDOMBINU YA KIMATAIFA YA UJUMBE",
  "heroTitle": "Kila ujumbe, umeunganishwa kwa uaminifu kamili.",
  "heroDesc": "Huduma ya SMS ya jumla ya kiwango cha mtoa huduma kwa kampuni za mawasiliano, wajumlishaji na majukwaa ya ujumbe. Unganisha trafiki yako ya A2P na njia za kimataifa kupitia viunganishi vya moja kwa moja na ripoti za wazi.",
  "talkToExpert": "Ongea na Mtaalamu",
  "exploreCapabilities": "Gundua Uwezo Wetu",
  "stats": {
    "routing": "Uelekezaji wa Kimataifa",
    "routingLabel": "Ufikiaji wa Kina wa Soko",
    "traffic": "Ujumbe wa A2P",
    "trafficLabel": "Trafiki Muhimu ya Kibiashara",
    "insights": "Takwimu za Uwasilishaji",
    "insightsLabel": "Udhibiti wa Uendeshaji"
  },
  "heroLiveBadge1": {
    "title": "Muunganisho wa A2P",
    "label": "Jukwaa lako. Ufikiaji wa ulimwengu."
  },
  "heroLiveBadge2": {
    "title": "Uwazi Katika Kila Hatua",
    "sub": "Uwasilishaji • Njia • Risiti"
  },
  "whyBadge": "KWA NINI UCHAGUE INET WHOLESALE SMS",
  "whyTitle": "Miundombinu ya ujumbe inayowezesha kila mawasiliano ya biashara",
  "whySubtitle1": "Tunatoa usitishaji wa kimataifa wa SMS unaoungwa mkono na viunganishi vya moja kwa moja, ufuatiliaji thabiti wa njia, na ripoti za kina za uwasilishaji.",
  "whySubtitle2": "Imeundwa kwa ajili ya wajumlishaji, watoa huduma za mtandao, na mashirika yanayohitaji utulivu uliothibitishwa kwa viwango vikubwa.",
  "whyCards": [
    {
      "title": "Fikia Masoko ya Kimataifa",
      "desc": "Jenga ufikiaji wa ujumbe wa kimataifa kwa maeneo muhimu ambayo wateja wako wanayahitaji.",
      "footer": "Uelekezaji wa SMS Duniani"
    },
    {
      "title": "Viunganishi vya Moja kwa Moja",
      "desc": "Punguza ucheleweshaji usio wa lazima kwa viungo vya mtandao vya moja kwa moja na mikataba yenye ubora.",
      "footer": "Ubora wa Kiwango cha Mtoa Huduma"
    },
    {
      "title": "Ufuatiliaji wa Moja kwa Moja",
      "desc": "Fuatilia viwango vya uwasilishaji, misimbo ya DLR, na kasi ya utumaji kwa telemetria ya wazi.",
      "footer": "Uwazi wa Kiutendaji"
    },
    {
      "title": "Uwezo Mkubwa wa Upanuzi",
      "desc": "Tuma mamilioni ya ujumbe kwa siku kupitia usanifu dhabiti na thabiti wa wingu.",
      "footer": "Utendaji wa Kiwango cha Biashara"
    }
  ],
  "capabilitiesBadge": "UWEZO MUHIMU",
  "capabilitiesTitle": "Imeundwa mahususi kwa trafiki muhimu ya ujumbe wa biashara",
  "capabilitiesDesc": "Huduma zetu za jumla zinasimamia mzunguko mzima wa trafiki ya A2P kwa uhakika na uaminifu uliothibitishwa.",
  "designSolution": "Tengeneza Suluhisho",
  "solutionNote": "Zungumza na wahandisi wetu ili kuboresha njia na viwango vya bei.",
  "capabilities": [
    {
      "tag": "Ujumbe wa Biashara",
      "title": "Usitishaji wa SMS za A2P za Jumla",
      "desc": "Tuma SMS za B2C kwa uthibitishaji, arifa muhimu, na mawasiliano yaliyoidhinishwa na wateja."
    },
    {
      "tag": "Muunganisho wa Kimataifa",
      "title": "Ufikiaji wa Njia za Kimataifa",
      "desc": "Fikia watoa huduma za mtandao wa simu duniani kote kwa usanidi unaozingatia sheria za ndani."
    },
    {
      "tag": "Itifaki Sanifu",
      "title": "Ujumuishaji wa SMPP na API",
      "desc": "Unganisha kupitia viungo vya SMPP v3.4 vya kasi ya juu au REST APIs za kisasa zilizo na nyaraka."
    },
    {
      "tag": "Uaminifu wa Uwasilishaji",
      "title": "Usimamizi Bora wa Njia",
      "desc": "Uelekezaji unaobadilika unaochagua njia bora kiotomatiki kulingana na utendaji wa sasa."
    },
    {
      "tag": "Uzingatiaji wa Sheria",
      "title": "Sera za Usajili wa Sender ID",
      "desc": "Mwongozo wa kitaalamu wa kusajili majina ya utambulisho (Sender ID) na nambari fupi kisheria."
    },
    {
      "tag": "Ripoti za Hali ya Juu",
      "title": "Risiti za Uwasilishaji (DLR) na Telemetria",
      "desc": "Risiti za kina za DLR na takwimu kwa ajili ya uchunguzi wa haraka na sahihi wa utendaji."
    }
  ],
  "howItWorksBadge": "JINSI INAVYOFANYA KAZI",
  "howItWorksTitle": "Kutoka ujumuishaji hadi ufikiaji wa kimataifa kwa hatua tatu",
  "howItWorksSubtitle": "Mchakato uliopangwa ili kuwezesha muunganisho wako wa SMS wa kimataifa haraka na kwa usalama.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Unganisha Jukwaa Lako",
      "desc": "Tuma ujumbe wa A2P kupitia muunganisho uliokubaliwa wa SMPP au API ukiwa na mipangilio yako.",
      "note": "Programu yako → iNet"
    },
    {
      "step": "02",
      "title": "Uelekezaji Mahiri",
      "desc": "Tunasambaza kila ujumbe kupitia kiungo bora cha mtoa huduma kinachofaa trafiki yako.",
      "note": "Injini ya uelekezaji ya mtandao"
    },
    {
      "step": "03",
      "title": "Ripoti na Uboreshaji",
      "desc": "Pata risiti za uwasilishaji papo hapo na panua viwango vyako kwa usaidizi endelevu wa kiufundi.",
      "note": "DLR imethibitishwa na mtandao lengwa"
    }
  ],
  "networkBadge": "MTANDAO NA UFIKIAJI",
  "networkTitle": "Muunganisho wa kiwango cha mtoa huduma kwa kila eneo",
  "networkDesc": "Ufikiaji wa mitandao ya simu zaidi ya 1,000 duniani kote kwa miundombinu iliyoboreshwa ya upatikanaji wa juu.",
  "networkBullets": [
    "Viunganishi vya moja kwa moja na vinavyosimamiwa na watoa huduma wakuu duniani",
    "Usaidizi kamili wa usimbaji wa GSM-7 na Unicode ya lugha nyingi",
    "Miundombinu ya wingu iliyosambazwa kijiografia yenye kubadili kiotomatiki wakati wa hitilafu",
    "Usimamizi wa saa 24/7/365 na Kituo cha Uendeshaji wa Mtandao (NOC)"
  ],
  "networkStats": [
    {
      "val": "Inayoongozwa na Mtoa Huduma",
      "label": "Mkakati wa Muunganisho"
    },
    {
      "val": "Kuzingatia Soko",
      "label": "Sera za Njia na Mtumaji"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Inaungwa mkono na ubia dhabiti wa watoa huduma",
    "sub": "Njia za Moja kwa Moja • Sehemu za Muunganisho Zinazosimamiwa"
  },
  "networkFooterNote": "Upatikanaji wa njia na sera za mtumaji hutegemea kanuni za kisheria za kila nchi husika.",
  "momentsBadge": "MATUMIZI MUHIMU",
  "momentsTitle": "Imeundwa kwa mwingiliano muhimu wa kibiashara",
  "momentsSubtitle": "Hakikisha uwasilishaji wa wakati unaofaa wa ujumbe unaojenga uaminifu wa watumiaji wako.",
  "moments": [
    {
      "title": "Uthibitishaji na 2FA",
      "desc": "Saidia kuingia salama, misimbo ya uthibitishaji ya OTP, na idhini za malipo kwa SMS za kipaumbele za A2P.",
      "footer": "OTP na Uthibitishaji wa Haraka"
    },
    {
      "title": "Arifa za Miamala",
      "desc": "Tuma arifa za benki, uthibitisho wa maagizo, na mabadiliko ya akaunti papo hapo bila kuchelewa.",
      "footer": "Arifa za Papo Hapo"
    },
    {
      "title": "Kikumbusho cha Huduma",
      "desc": "Fikisha vikumbusho vya miadi, maelezo ya uwasilishaji, na matangazo ya dharura kwa wakati uliopangwa.",
      "footer": "Taarifa za Kiutendaji"
    },
    {
      "title": "Mawasiliano Yaliyoidhinishwa",
      "desc": "Wasiliana na wateja waliojisajili kwa ujumbe wa taarifa kulingana na miongozo ya kisheria.",
      "footer": "Ujumbe kwa Idhini"
    }
  ],
  "intelligenceBadge": "UFUNDI WA UWASILISHAJI",
  "intelligenceTitle": "Uwazi kamili na udhibiti wa kila ujumbe",
  "intelligenceDesc": "Fanya maamuzi sahihi ukitumia vipimo vya kina vya trafiki na ufuatiliaji thabiti.",
  "intelligenceBullets": [
    "Ufuatiliaji kamili wa maisha ya kila ujumbe mmoja mmoja",
    "Ubadilishaji wa njia kiotomatiki wakati mtandao unapotikisika",
    "Arifa za haraka wakati ucheleweshaji unapoongezeka bila kutarajiwa",
    "Kumbukumbu kamili za ukaguzi kwa ajili ya usuluhishi na uthibitisho"
  ],
  "intelligenceFootnote": "Vipimo vyote vya telemetria na misimbo ya hali ya mtandao hutumwa moja kwa moja kupitia DLR.",
  "messageLogCard": {
    "title": "Kumbukumbu ya Ujumbe",
    "badge": "MTAZAMO WA MFANO",
    "tab1": "Kumbukumbu",
    "tab2": "Njia",
    "tab3": "Maeneo",
    "colType": "AINA YA UJUMBE",
    "colState": "HALI",
    "colReceipt": "RISITI",
    "row1Type": "Uthibitishaji wa OTP",
    "row1State": "Umewasilishwa",
    "row1Receipt": "Imepokelewa",
    "row2Type": "Taarifa ya Agizo",
    "row2State": "Inatumwa",
    "row2Receipt": "Inasubiri",
    "row3Type": "Tahadhari ya Huduma",
    "row3State": "Imekataliwa",
    "row3Receipt": "Maelezo ya Hitilafu",
    "footerText": "Fuatilia kila ujumbe kuanzia kutumwa hadi uthibitisho wa mtandao lengwa."
  },
  "protectionTitle": "Usalama wa Trafiki na Kuzuia Udanganyifu",
  "protectionBadge": "UADILIFU WA MTANDAO",
  "protectionCards": [
    {
      "title": "Ugunduzi wa Trafiki Isiyo ya Kawaida",
      "desc": "Gundua mienendo isiyo ya kawaida mara moja ili kuzuia mashambulizi ya SMS pumping na barua taka."
    },
    {
      "title": "Uzingatiaji na Orodha za Kuzuia",
      "desc": "Dhibiti maombi ya kujiondoa kiotomatiki ili kulinda heshima ya mtumaji na kufuata kanuni."
    },
    {
      "title": "Ulinzi wa Sender ID",
      "desc": "Zuia uigaji na matumizi yasiyoidhinishwa ya majina ya utambulisho katika masoko yaliyodhibitiwa."
    }
  ],
  "timelineBadge": "MPANGO WA UJUMUISHI",
  "timelineTitle": "Utaratibu wa kuanza katika hatua 4",
  "timelineSubtitle": "Mbinu iliyothibitishwa ya kuunganisha jukwaa lako bila kusumbua uendeshaji wa kawaida.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Tathmini ya Mahitaji",
      "desc": "Uthibitisho wa nchi lengwa, makadirio ya idadi ya ujumbe, mahitaji ya Sender ID, na makubaliano ya kibiashara."
    },
    {
      "step": "2",
      "title": "Usanidi wa Kiufundi",
      "desc": "Kutoa vitambulisho vya akaunti ya SMPP/API na kusanidi orodha salama ya anwani za IP."
    },
    {
      "step": "3",
      "title": "Upimaji wa Muunganisho",
      "desc": "Kuthibitisha kasi, usimbaji wa herufi, na usahihi wa risiti za DLR kwenye mitandao halisi."
    },
    {
      "step": "4",
      "title": "Kuanza Rasmi",
      "desc": "Kufungua trafiki ya kibiashara chini ya usimamizi wa wahandisi wetu wa mtandao."
    }
  ],
  "integrationPlan": {
    "title": "Muunganisho Wako wa SMS ya Jumla",
    "planBadge": "MPANGO WA UJUMUISHI",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Trafiki ya Ujumbe wa A2P",
    "formats": "GSM-7 / Unicode ya Lugha Nyingi",
    "feedback": "Risiti za Uwasilishaji za Papo Hapo (DLR)",
    "senderSetup": "Usanidi Mahususi kwa Kila Soko",
    "check1": "Uthibitishaji wa vitambulisho na jaribio la muunganisho",
    "check2": "Uthibitishaji wa jina la mtumaji na usindikaji wa DLR",
    "discussNote": "Ongea na timu yetu ili kuchagua kiolesura bora kinachofaa mifumo yako.",
    "discussBtn": "Jadili Ujumuishaji"
  },
  "faqBadge": "MASWALI YANAYOULIZWA MARA KWA MARA",
  "faqTitle": "Mambo muhimu kuhusu huduma ya SMS ya jumla",
  "faqSubtitle": "Majibu ya wazi kuhusu violesura, itifaki, na ubora wa uwasilishaji.",
  "faqs": [
    {
      "q": "Huduma ya SMS ya jumla inafaa kwa nani?",
      "a": "Inafaa kwa watoa huduma za simu, wajumlishaji wa SMS, majukwaa ya CPaaS, na makampuni yenye mahitaji makubwa ya kutuma ujumbe wa A2P kimataifa."
    },
    {
      "q": "Je, ni itifaki zipi zinazoungwa mkono?",
      "a": "Tunaauni itifaki sanifu ya kasi ya juu ya SMPP v3.4 na pia REST API za kisasa zenye arifa za webhook."
    },
    {
      "q": "Je, kuna usaidizi wa kusajili majina ya utambulisho (Sender ID)?",
      "a": "Ndiyo, timu yetu ya kisheria husaidia kuandaa nyaraka na kusajili kwa watoa huduma wa ndani kulingana na sheria za kila nchi."
    },
    {
      "q": "Je, ripoti za uwasilishaji zina uwazi wa kiwango gani?",
      "a": "Tunatoa ripoti za DLR za wakati halisi zenye misimbo ya makosa sanifu na takwimu kamili za mtandao kupitia API na lango la wateja."
    }
  ],
  "ctaBadge": "ANZA LEO",
  "ctaTitle": "Uko tayari kuboresha muunganisho wako wa kimataifa wa SMS?",
  "ctaSubtitle": "Wasiliana na wataalamu wetu wa mawasiliano ili kuandaa mkakati maalum wa njia kwa ajili ya maeneo yako muhimu.",
  "contactUs": "Wasiliana na Mtaalamu",
  "ctaFootnote": "Mazingira maalum ya kujaribu na mashauriano ya uchambuzi wa trafiki yanapatikana kwa watoa huduma na mashirika."
};

const sv: WholesaleMessageTranslation = {
  "heroBadge": "GROSSIST-SMS • GLOBALT MEDDELANDE-INFRASTRUKTUR",
  "heroTitle": "Varje meddelande, anslutet med full tillförlitlighet.",
  "heroDesc": "Grossist-SMS av operatörsklass för telekomoperatörer, aggregatorer och meddelandeplattformar. Anslut din A2P-trafik till globala rutter med direkt operatörsanslutning och full leveranstransparens.",
  "talkToExpert": "Prata med en expert",
  "exploreCapabilities": "Utforska funktioner",
  "stats": {
    "routing": "Global dirigering",
    "routingLabel": "Marknadsanpassad räckvidd",
    "traffic": "A2P-meddelanden",
    "trafficLabel": "Affärskritisk trafik",
    "insights": "Leveransinsikter",
    "insightsLabel": "Operativ kontroll"
  },
  "heroLiveBadge1": {
    "title": "A2P-anslutning",
    "label": "Din plattform. Global räckvidd."
  },
  "heroLiveBadge2": {
    "title": "Insyn i varje steg",
    "sub": "Skickat • Rutt • Kvitto"
  },
  "whyBadge": "VARFÖR VÄLJA INET WHOLESALE SMS",
  "whyTitle": "Meddelandeinfrastruktur som stärker varje affärsinteraktion",
  "whySubtitle1": "Vi tillhandahåller internationell SMS-terminering som stöds av direkta sammankopplingar, aktiv ruttövervakning och detaljerade leveransrapporter.",
  "whySubtitle2": "Byggt för aggregatorer, operatörer och företag som kräver beprövad stabilitet i stor skala.",
  "whyCards": [
    {
      "title": "Nå globala marknader",
      "desc": "Bygg internationell meddelanderäckvidd för de strategiska destinationer dina kunder behöver.",
      "footer": "Global SMS-dirigering"
    },
    {
      "title": "Direkta operatörsförbindelser",
      "desc": "Minimera onödiga mellanhänder med direkta nätverkslänkar och hanterade samtrafikavtal.",
      "footer": "Operatörsklassad kvalitet"
    },
    {
      "title": "Realtidsövervakning",
      "desc": "Följ leveransgrader, DLR-koder och överföringslatens med transparent telemetri.",
      "footer": "Operativ transparens"
    },
    {
      "title": "Elastisk skalbarhet",
      "desc": "Överför miljontals meddelanden per dag med en feltolerant och skalbar molnarkitektur.",
      "footer": "Företagsprestanda"
    }
  ],
  "capabilitiesBadge": "KÄRNKAPACITET",
  "capabilitiesTitle": "Utformat för affärskritisk meddelandetrafik",
  "capabilitiesDesc": "Vår grossistsvit hanterar hela livscykeln för A2P-trafik med bevisad pålitlighet.",
  "designSolution": "Utforma lösning",
  "solutionNote": "Rådgör med våra ingenjörer för att optimera rutter och priser.",
  "capabilities": [
    {
      "tag": "Företagsmeddelanden",
      "title": "Grossist A2P SMS-terminering",
      "desc": "Leverera B2C-SMS för autentisering, kritiska aviseringar och samtyckesbaserad kundkommunikation."
    },
    {
      "tag": "Global uppkoppling",
      "title": "Internationell ruttäckning",
      "desc": "Nå mobilnätsoperatörer över hela världen med ruttprofiler anpassade efter lokala regelverk."
    },
    {
      "tag": "Standardprotokoll",
      "title": "SMPP- och API-integration",
      "desc": "Anslut via högpresterande SMPP v3.4-länkar eller moderna, väldokumenterade REST-API:er."
    },
    {
      "tag": "Leveranssäkerhet",
      "title": "Intelligent rutthantering",
      "desc": "Adaptiv dirigering som dynamiskt väljer bästa väg baserat på realtidsprestanda."
    },
    {
      "tag": "Regelefterlevnad",
      "title": "Sender ID & registreringspolicyer",
      "desc": "Expertstöd för registrering av alfanumeriska avsändar-ID och kortnummer enligt lokal lagstiftning."
    },
    {
      "tag": "Avancerad rapportering",
      "title": "Leveranskvitton (DLR) och telemetri",
      "desc": "Detaljerade DLR och analyser för snabb och exakt operativ felsökning."
    }
  ],
  "howItWorksBadge": "HUR DET FUNGERAR",
  "howItWorksTitle": "Från integration till global räckvidd i tre steg",
  "howItWorksSubtitle": "En strukturerad process för att snabbt och säkert aktivera din internationella SMS-anslutning.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Anslut din plattform",
      "desc": "Skicka A2P-meddelanden via en överenskommen SMPP- eller API-anslutning med dina inställningar.",
      "note": "Din applikation → iNet"
    },
    {
      "step": "02",
      "title": "Intelligent dirigering",
      "desc": "Vi vidarebefordrar varje meddelande via den operatörslänk som passar din trafikprofil bäst.",
      "note": "Operatörsdirigeringsmotor"
    },
    {
      "step": "03",
      "title": "Rapporter och optimering",
      "desc": "Ta emot realtidskvitton på leverans och skala upp dina volymer med kontinuerlig teknisk support.",
      "note": "DLR bekräftat av destinationsnätet"
    }
  ],
  "networkBadge": "NÄTVERK OCH TÄCKNING",
  "networkTitle": "Operatörsklassad anslutning till varje destination",
  "networkDesc": "Tillgång till över 1 000 mobilnätverk världen över med infrastruktur optimerad för hög tillgänglighet.",
  "networkBullets": [
    "Direkta och hanterade samtrafikförbindelser med ledande globala operatörer",
    "Fullt stöd för GSM-7 och flerspråkig Unicode-teckenkodning",
    "Geografiskt redundant molninfrastruktur med automatisk redundansväxling",
    "24/7/365 kontinuerlig övervakning av Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Operatörsdrivet",
      "label": "Anslutningsstrategi"
    },
    {
      "val": "Marknadsanpassat",
      "label": "Rutt- & avsändarpolicyer"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Stöds av starka operatörsrelationer",
    "sub": "Direkta rutter • Hanterade sammankopplingspunkter"
  },
  "networkFooterNote": "Rutttillgänglighet och avsändarpolicyer styrs av lokala lagar och regler i respektive land.",
  "momentsBadge": "ANVÄNDNINGSOMRÅDEN",
  "momentsTitle": "Byggt för tidskänsliga affärsinteraktioner",
  "momentsSubtitle": "Säkerställ snabb leverans av meddelanden som bygger dina användares förtroende.",
  "moments": [
    {
      "title": "Autentisering och 2FA",
      "desc": "Stöd säker inloggning, OTP-engångskoder och transaktionsgodkännanden med prioriterad A2P-SMS.",
      "footer": "OTP & snabb verifiering"
    },
    {
      "title": "Transaktionsaviseringar",
      "desc": "Skicka bankvarningar, orderbekräftelser och kontouppdateringar omedelbart utan fördröjning.",
      "footer": "Realtidsaviseringar"
    },
    {
      "title": "Bokningspåminnelser & uppdateringar",
      "desc": "Leverera mötespåminnelser, leveransstatus och akuta servicemeddelanden i rätt tid.",
      "footer": "Operativa meddelanden"
    },
    {
      "title": "Samtyckesbaserad kommunikation",
      "desc": "Kommunicera med prenumererande kunder via informativa meddelanden enligt opt-in-regler.",
      "footer": "Samtyckesbaserade meddelanden"
    }
  ],
  "intelligenceBadge": "LEVERANSINTELLIGENS",
  "intelligenceTitle": "Fullständig insyn och kontroll över varje meddelande",
  "intelligenceDesc": "Fatta välgrundade beslut med djupgående trafikstatistik och proaktiv övervakning.",
  "intelligenceBullets": [
    "Fullständig livscykelspårning för varje enskilt meddelande",
    "Automatisk omdirigering vid tillfälliga nätverksstörningar",
    "Omedelbara varningar vid oväntade fördröjningsökningar",
    "Kompletta granskningsloggar för avstämning och historik"
  ],
  "intelligenceFootnote": "Alla telemetrimätningar och nätverksstatuskoder skickas i realtid via DLR.",
  "messageLogCard": {
    "title": "Meddelandelogg",
    "badge": "EXEMPELVY",
    "tab1": "Logg",
    "tab2": "Rutter",
    "tab3": "Destinationer",
    "colType": "MEDDELANDETYP",
    "colState": "STATUS",
    "colReceipt": "KVITTO",
    "row1Type": "Verifiering",
    "row1State": "Levererat",
    "row1Receipt": "Mottaget",
    "row2Type": "Orderuppdatering",
    "row2State": "Skickas",
    "row2Receipt": "Väntande",
    "row3Type": "Servicevarning",
    "row3State": "Avvisat",
    "row3Receipt": "Feldetalj",
    "footerText": "Följ varje meddelande från inlämning till destinationsnätets bekräftelse."
  },
  "protectionTitle": "Trafiksäkerhet & bedrägeribekämpning",
  "protectionBadge": "NÄTVERKSINTEGRITET",
  "protectionCards": [
    {
      "title": "Upptäckt av avvikande trafik",
      "desc": "Identifiera misstänkta mönster direkt för att blockera SMS pumping och spamangrepp."
    },
    {
      "title": "Efterlevnad & spärrlistor",
      "desc": "Automatisk hantering av avanmälningar för att skydda avsändarryktet och följa lagar."
    },
    {
      "title": "Skydd mot Sender ID-förfalskning",
      "desc": "Skydda alfanumeriska avsändarnamn mot spoofing och obehörig användning i reglerade marknader."
    }
  ],
  "timelineBadge": "INTEGRATIONSPLAN",
  "timelineTitle": "Strukturerad driftsättning i 4 faser",
  "timelineSubtitle": "En beprövad metodik för att koppla in din plattform utan avbrott.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Behovsanalys",
      "desc": "Fastställande av destinationsländer, beräknad trafikvolym, krav på avsändar-ID och kommersiella villkor."
    },
    {
      "step": "2",
      "title": "Teknisk konfiguration",
      "desc": "Tilldelning av SMPP-/API-inloggningsuppgifter och konfiguration av säkra IP-vitlistor."
    },
    {
      "step": "3",
      "title": "Anslutningstester",
      "desc": "Validering av latens, teckenkodning och korrekt mottagning av DLR-kvitton i skarpa nät."
    },
    {
      "step": "4",
      "title": "Produktionsstart",
      "desc": "Öppning av kommersiell trafik under noggrann övervakning av våra nätverksingenjörer."
    }
  ],
  "integrationPlan": {
    "title": "Din grossist-SMS-anslutning",
    "planBadge": "INTEGRATIONSPLAN",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P-meddelandetrafik",
    "formats": "GSM-7 / Flerspråkig Unicode",
    "feedback": "Realtidsleveranskvitton (DLR)",
    "senderSetup": "Marknadsspecifik konfiguration",
    "check1": "Inloggningskontroll och anslutningstest",
    "check2": "Avsändarverifiering och DLR-kontroll",
    "discussNote": "Diskutera med vårt team för att hitta det gränssnitt som passar din plattform bäst.",
    "discussBtn": "Diskutera integration"
  },
  "faqBadge": "VANLIGA FRÅGOR",
  "faqTitle": "Allt du behöver veta om grossist-SMS",
  "faqSubtitle": "Tydliga svar om gränssnitt, protokoll och leveranskvoter.",
  "faqs": [
    {
      "q": "Vem är grossist-SMS avsett för?",
      "a": "För telekomoperatörer, SMS-aggregatorer, CPaaS-plattformar och storföretag med stora internationella A2P-volymer."
    },
    {
      "q": "Vilka protokoll stöds?",
      "a": "Vi stödjer branschstandardiserade SMPP v3.4 med hög kapacitet samt moderna REST-API:er med webhook-aviseringar."
    },
    {
      "q": "Hjälper ni till med registrering av alfanumeriskt Sender ID?",
      "a": "Ja, vårt compliance-team hjälper till att sammanställa dokumentation och registrera hos lokala operatörer enligt landets lagar."
    },
    {
      "q": "Hur detaljerade är leveransrapporterna?",
      "a": "Vi levererar realtids-DLR med standardiserade felkoder och fullständiga nätverksmått via API och kundportal."
    }
  ],
  "ctaBadge": "BÖRJA IDAG",
  "ctaTitle": "Redo att optimera din globala SMS-anslutning?",
  "ctaSubtitle": "Kontakta våra telekomspecialister för att utforma en skräddarsydd dirigeringsstrategi för dina viktigaste marknader.",
  "contactUs": "Kontakta en specialist",
  "ctaFootnote": "Dedikerade testmiljöer och trafikanalyskonsultation finns tillgängliga för operatörer och företag."
};

const el: WholesaleMessageTranslation = {
  "heroBadge": "ΧΟΝΔΡΙΚΗ SMS • ΠΑΓΚΟΣΜΙΑ ΥΠΟΔΟΜΗ ΜΗΝΥΜΑΤΩΝ",
  "heroTitle": "Κάθε μήνυμα, συνδεδεμένο με απόλυτη αξιοπιστία.",
  "heroDesc": "Χονδρική υπηρεσία SMS επιπέδου τηλεπικοινωνιακού παρόχου για παρόχους, aggregators και πλατφόρμες επικοινωνίας. Συνδέστε την κυκλοφορία A2P σας με παγκόσμιες διαδρομές μέσω άμεσων διασυνδέσεων και πλήρους διαφάνειας παράδοσης.",
  "talkToExpert": "Μιλήστε με έναν ειδικό",
  "exploreCapabilities": "Εξερευνήστε τις δυνατότητες",
  "stats": {
    "routing": "Παγκόσμια δρομολόγηση",
    "routingLabel": "Στοχευμένη εμβέλεια αγοράς",
    "traffic": "Μηνύματα A2P",
    "trafficLabel": "Κρίσιμη επιχειρηματική κυκλοφορία",
    "insights": "Αναλυτικά στοιχεία παράδοσης",
    "insightsLabel": "Επιχειρησιακός έλεγχος"
  },
  "heroLiveBadge1": {
    "title": "Συνδεσιμότητα A2P",
    "label": "Η πλατφόρμα σας. Παγκόσμια εμβέλεια."
  },
  "heroLiveBadge2": {
    "title": "Διαφάνεια σε κάθε βήμα",
    "sub": "Υποβολή • Διαδρομή • Απόδειξη"
  },
  "whyBadge": "ΓΙΑΤΙ ΝΑ ΕΠΙΛΕΞΕΤΕ ΤΟ INET WHOLESALE SMS",
  "whyTitle": "Υποδομή μηνυμάτων που ενισχύει κάθε επιχειρηματική αλληλεπίδραση",
  "whySubtitle1": "Παρέχουμε διεθνή τερματισμό SMS που υποστηρίζεται από άμεσες διασυνδέσεις, ενεργή παρακολούθηση διαδρομών και λεπτομερείς αναφορές παράδοσης.",
  "whySubtitle2": "Σχεδιασμένο για aggregators, παρόχους και επιχειρήσεις που απαιτούν αποδεδειγμένη σταθερότητα σε μεγάλη κλίμακα.",
  "whyCards": [
    {
      "title": "Πρόσβαση σε παγκόσμιες αγορές",
      "desc": "Δημιουργήστε διεθνή εμβέλεια μηνυμάτων για τους στρατηγικούς προορισμούς που χρειάζονται οι πελάτες σας.",
      "footer": "Παγκόσμια δρομολόγηση SMS"
    },
    {
      "title": "Άμεσες διασυνδέσεις παρόχων",
      "desc": "Ελαχιστοποιήστε τις περιττές καθυστερήσεις με άμεσες συνδέσεις δικτύου και συμφωνίες υψηλής ποιότητας.",
      "footer": "Ποιότητα επιπέδου παρόχου"
    },
    {
      "title": "Παρακολούθηση σε πραγματικό χρόνο",
      "desc": "Παρακολουθήστε ποσοστά παράδοσης, κωδικούς DLR και καθυστέρηση μετάδοσης με διαφανή τηλεμετρία.",
      "footer": "Επιχειρησιακή διαφάνεια"
    },
    {
      "title": "Ελαστική επεκτασιμότητα",
      "desc": "Μεταδώστε εκατομμύρια μηνύματα την ημέρα με μια ανθεκτική αρχιτεκτονική cloud.",
      "footer": "Εταιρική απόδοση"
    }
  ],
  "capabilitiesBadge": "ΒΑΣΙΚΕΣ ΔΥΝΑΤΟΤΗТΕΣ",
  "capabilitiesTitle": "Σχεδιασμένο για κρίσιμη επιχειρηματική κυκλοφορία μηνυμάτων",
  "capabilitiesDesc": "Η σουίτα χονδρικών υπηρεσιών μας καλύπτει ολόκληρο τον κύκλο ζωής της κυκλοφορίας A2P με αποδεδειγμένη αξιοπιστία.",
  "designSolution": "Σχεδιασμός λύσης",
  "solutionNote": "Συμβουλευτείτε τους μηχανικούς μας για τη βελτιστοποίηση των διαδρομών και των τιμών.",
  "capabilities": [
    {
      "tag": "Επιχειρηματικά μηνύματα",
      "title": "Χονδρικός τερματισμός A2P SMS",
      "desc": "Αποστολή B2C SMS για έλεγχο ταυτότητας, κρίσιμες ειδοποιήσεις και εξουσιοδοτημένη επικοινωνία πελατών."
    },
    {
      "tag": "Παγκόσμια σύνδεση",
      "title": "Διεθνής κάλυψη δρομολόγησης",
      "desc": "Προσεγγίστε παρόχους κινητής τηλεφωνίας παγκοσμίως με προφίλ προσαρμοσμένα στους τοπικούς κανονισμούς."
    },
    {
      "tag": "Τυπικά πρωτόκολλα",
      "title": "Ενσωμάτωση SMPP και API",
      "desc": "Συνδεθείτε μέσω συνδέσεων SMPP v3.4 υψηλής ταχύτητας ή σύγχρονων REST API με πλήρη τεκμηρίωση."
    },
    {
      "tag": "Αξιοπιστία παράδοσης",
      "title": "Έξυπνη διαχείριση διαδρομών",
      "desc": "Προσαρμοστική δρομολόγηση που επιλέγει δυναμικά την καλύτερη διαδρομή βάσει πραγματικών επιδόσεων."
    },
    {
      "tag": "Κανονιστική συμμόρφωση",
      "title": "Πολιτικές καταχώρισης Sender ID",
      "desc": "Καθοδήγηση ειδικών για την καταχώριση αλφαριθμητικών ονομάτων αποστολέα και σύντομων κωδικών."
    },
    {
      "tag": "Προηγμένες αναφορές",
      "title": "Αποδείξεις παράδοσης (DLR) και τηλεμετρία",
      "desc": "Λεπτομερείς αποδείξεις DLR και αναλύσεις για γρήγορη και ακριβή διάγνωση λειτουργίας."
    }
  ],
  "howItWorksBadge": "ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ",
  "howItWorksTitle": "Από την ενσωμάτωση στην παγκόσμια εμβέλεια σε τρία βήματα",
  "howItWorksSubtitle": "Μια δομημένη διαδικασία για να ενεργοποιήσετε τη διεθνή συνδεσιμότητα SMS γρήγορα και με ασφάλεια.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Συνδέστε την πλατφόρμα σας",
      "desc": "Υποβάλετε μηνύματα A2P μέσω συμφωνημένης σύνδεσης SMPP ή API με τις παραμέτρους αποστολέα και προορισμού σας.",
      "note": "Η εφαρμογή σας → iNet"
    },
    {
      "step": "02",
      "title": "Έξυπνη δρομολόγηση",
      "desc": "Προωθούμε κάθε πακέτο μέσω της βέλτιστης σύνδεσης παρόχου για το προφίλ κυκλοφορίας σας.",
      "note": "Μηχανή δρομολόγησης παρόχου"
    },
    {
      "step": "03",
      "title": "Αναφορές και βελτιστοποίηση",
      "desc": "Λάβετε αποδείξεις παράδοσης σε πραγματικό χρόνο και επεκτείνετε τους όγκους σας με συνεχή τεχνική υποστήριξη.",
      "note": "Επιβεβαίωση DLR από το δίκτυο προορισμού"
    }
  ],
  "networkBadge": "ΔΙΚΤΥΟ ΚΑΙ ΚΑΛΥΨΗ",
  "networkTitle": "Συνδεσιμότητα επιπέδου παρόχου για κάθε προορισμό",
  "networkDesc": "Πρόσβαση σε περισσότερα από 1.000 δίκτυα κινητής τηλεφωνίας παγκοσμίως με υποδομή βελτιστοποιημένη για υψηλή διαθεσιμότητα.",
  "networkBullets": [
    "Άμεσες και διαχειριζόμενες διασυνδέσεις με κορυφαίους παρόχους παγκοσμίως",
    "Πλήρης υποστήριξη για κωδικοποίηση GSM-7 και πολύγλωσσο Unicode",
    "Γεωγραφικά κατανεμημένη υποδομή cloud με αυτόματη μετάπτωση",
    "Συνεχής παρακολούθηση 24/7/365 από το Κέντρο Επιχειρήσεων Δικτύου (NOC)"
  ],
  "networkStats": [
    {
      "val": "Βασισμένο σε παρόχους",
      "label": "Στρατηγική διασύνδεσης"
    },
    {
      "val": "Προσαρμοσμένο στην αγορά",
      "label": "Πολιτικές διαδρομών & αποστολέα"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Υποστηρίζεται από ισχυρές σχέσεις με παρόχους",
    "sub": "Άμεσες διαδρομές • Διαχειριζόμενα σημεία διασύνδεσης"
  },
  "networkFooterNote": "Η διαθεσιμότητα διαδρομών και οι πολιτικές Sender ID υπόκεινται στους τοπικούς κανονισμούς κάθε χώρας.",
  "momentsBadge": "ΠΕΡΙΠΤΩΣΕΙΣ ΧΡΗΣΗΣ",
  "momentsTitle": "Σχεδιασμένο για κρίσιμες επιχειρηματικές επικοινωνίες",
  "momentsSubtitle": "Διασφαλίστε την έγκαιρη παράδοση των μηνυμάτων που χτίζουν την εμπιστοσύνη των τελικών χρηστών.",
  "moments": [
    {
      "title": "Έλεγχος ταυτότητας και 2FA",
      "desc": "Υποστηρίξτε ασφαλείς συνδέσεις, κωδικούς επαλήθευσης OTP και εγκρίσεις συναλλαγών με SMS A2P υψηλής προτεραιότητας.",
      "footer": "OTP & άμεση επαλήθευση"
    },
    {
      "title": "Ειδοποιήσεις συναλλαγών",
      "desc": "Μεταδώστε τραπεζικές ειδοποιήσεις, επιβεβαιώσεις παραγγελιών και ενημερώσεις λογαριασμών αμέσως χωρίς καθυστέρηση.",
      "footer": "Ειδοποιήσεις σε πραγματικό χρόνο"
    },
    {
      "title": "Υπενθυμίσεις ραντεβού & υπηρεσιών",
      "desc": "Στείλτε υπενθυμίσεις κρατήσεων, ενημερώσεις παράδοσης και ανακοινώσεις συντήρησης ακριβώς στην ώρα τους.",
      "footer": "Λειτουργικές ειδοποιήσεις"
    },
    {
      "title": "Επικοινωνία βάσει συγκατάθεσης",
      "desc": "Επικοινωνήστε με εγγεγραμμένους πελάτες μέσω ενημερωτικών μηνυμάτων σύμφωνα με τους κανονισμούς opt-in.",
      "footer": "Μηνύματα βάσει συγκατάθεσης"
    }
  ],
  "intelligenceBadge": "ΕΥΦΥΙΑ ΠΑΡΑΔΟΣΗΣ",
  "intelligenceTitle": "Πλήρης έλεγχος και διαφάνεια σε κάθε μήνυμα",
  "intelligenceDesc": "Λάβετε τεκμηριωμένες αποφάσεις με λεπτομερείς μετρήσεις κυκλοφορίας και προληπτική παρακολούθηση.",
  "intelligenceBullets": [
    "Πλήρης παρακολούθηση του κύκλου ζωής κάθε μεμονωμένου μηνύματος",
    "Αυτόματη εναλλαγή σε εφεδρική διαδρομή σε περίπτωση αστάθειας δικτύου",
    "Άμεσες ειδοποιήσεις σε περιπτώσεις ασυνήθιστων διακυμάνσεων καθυστέρησης",
    "Πλήρη αρχεία καταγραφής για εκκαθάριση και έλεγχο"
  ],
  "intelligenceFootnote": "Όλες οι μετρήσεις τηλεμετρίας και οι κωδικοί κατάστασης μεταδίδονται σε πραγματικό χρόνο μέσω DLR.",
  "messageLogCard": {
    "title": "Αρχείο καταγραφής μηνυμάτων",
    "badge": "ΕΝΔΕΙΚΤΙΚΗ ΠΡΟΒΟΛΗ",
    "tab1": "Καταγραφή",
    "tab2": "Διαδρομές",
    "tab3": "Προορισμοί",
    "colType": "ΤΥΠΟΣ ΜΗΝΥΜΑΤΟΣ",
    "colState": "ΚΑΤΑΣΤΑΣΗ",
    "colReceipt": "ΑΠΟΔΕΙΞΗ",
    "row1Type": "Επαλήθευση",
    "row1State": "Παραδόθηκε",
    "row1Receipt": "Ελήφθη",
    "row2Type": "Ενημέρωση παραγγελίας",
    "row2State": "Σε αποστολή",
    "row2Receipt": "Σε εκκρεμότητα",
    "row3Type": "Ειδοποίηση υπηρεσίας",
    "row3State": "Απορρίφθηκε",
    "row3Receipt": "Λεπτομέρεια σφάλματος",
    "footerText": "Παρακολουθήστε κάθε μήνυμα από την υποβολή έως την επιβεβαίωση του δικτύου προορισμού."
  },
  "protectionTitle": "Ασφάλεια κυκλοφορίας & Πρόληψη απάτης",
  "protectionBadge": "ΑΚΕΡΑΙΟΤΗΤΑ ΔΙΚΤΥΟΥ",
  "protectionCards": [
    {
      "title": "Εντοπισμός ασυνήθιστης κυκλοφορίας",
      "desc": "Εντοπίστε άμεσα ύποπτα μοτίβα για να αποκλείσετε επιθέσεις SMS pumping και ανεπιθύμητα μηνύματα (spam)."
    },
    {
      "title": "Συμμόρφωση & Διαχείριση λιστών αποκλεισμού",
      "desc": "Αυτόματος συγχρονισμός αιτημάτων εξαίρεσης για την προστασία της φήμης του αποστολέα."
    },
    {
      "title": "Προστασία από πλαστογράφηση Sender ID",
      "desc": "Προστατέψτε τα αλφαριθμητικά ονόματα αποστολέα από πλαστοπροσωπία και μη εξουσιοδοτημένη χρήση."
    }
  ],
  "timelineBadge": "ΣΧΕΔΙΟ ΕΝΣΩΜΑΤΩΣΗΣ",
  "timelineTitle": "Δομημένη υλοποίηση σε 4 στάδια",
  "timelineSubtitle": "Μια δοκιμασμένη μεθοδολογία για να συνδέσετε την πλατφόρμα σας χωρίς διακοπές.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Αξιολόγηση αναγκών",
      "desc": "Καθορισμός χωρών προορισμού, εκτιμώμενου όγκου, απαιτήσεων Sender ID και εμπορικών όρων."
    },
    {
      "step": "2",
      "title": "Τεχνική ρύθμιση",
      "desc": "Έκδοση διαπιστευτηρίων SMPP/API και διαμόρφωση ασφαλών λιστών επιτρεπόμενων διευθύνσεων IP."
    },
    {
      "step": "3",
      "title": "Δοκιμές συνδεσιμότητας",
      "desc": "Επαλήθευση καθυστέρησης, κωδικοποίησης χαρακτήρων και ακρίβειας λήψης αποδείξεων DLR σε πραγματικά δίκτυα."
    },
    {
      "step": "4",
      "title": "Έναρξη παραγωγής",
      "desc": "Έναρξη εμπορικής κυκλοφορίας υπό τη στενή επίβλεψη των μηχανικών δικτύου μας."
    }
  ],
  "integrationPlan": {
    "title": "Η σύνδεση χονδρικής SMS σας",
    "planBadge": "ΣΧΕΔΙΟ ΕΝΣΩΜΑΤΩΣΗΣ",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Κυκλοφορία μηνυμάτων A2P",
    "formats": "GSM-7 / Πολύγλωσσο Unicode",
    "feedback": "Αποδείξεις παράδοσης πραγματικού χρόνου (DLR)",
    "senderSetup": "Διαμόρφωση ανάλογα με την αγορά",
    "check1": "Επαλήθευση διαπιστευτηρίων και έλεγχος σύνδεσης",
    "check2": "Επικύρωση αποστολέα και λήψη αποδείξεων DLR",
    "discussNote": "Επικοινωνήστε με την ομάδα μας για να επιλέξετε την κατάλληλη διεπαφή για την πλατφόρμα σας.",
    "discussBtn": "Συζητήστε την ενσωμάτωση"
  },
  "faqBadge": "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ",
  "faqTitle": "Όλα όσα πρέπει να γνωρίζετε για το χονδρικό SMS",
  "faqSubtitle": "Σαφείς απαντήσεις σχετικά με διασυνδέσεις, πρωτόκολλα και ποιότητα παράδοσης.",
  "faqs": [
    {
      "q": "Σε ποιους απευθύνεται η υπηρεσία χονδρικού SMS;",
      "a": "Σε τηλεπικοινωνιακούς παρόχους, SMS aggregators, πλατφόρμες CPaaS και επιχειρήσεις με μεγάλους όγκους διεθνούς κυκλοφορίας A2P."
    },
    {
      "q": "Ποια πρωτόκολλα διασύνδεσης υποστηρίζονται;",
      "a": "Υποστηρίζουμε το πρότυπο πρωτόκολλο υψηλής ταχύτητας SMPP v3.4 καθώς και σύγχρονα REST API με ειδοποιήσεις webhook."
    },
    {
      "q": "Παρέχεται βοήθεια για την καταχώριση αλφαριθμητικού Sender ID;",
      "a": "Ναι, η ομάδα συμμόρφωσης μας βοηθά στην προετοιμασία των εγγράφων και την υποβολή στους τοπικούς παρόχους σύμφωνα με τους νόμους κάθε χώρας."
    },
    {
      "q": "Πόσο διαφανείς είναι οι αναφορές παράδοσης;",
      "a": "Παρέχουμε αναφορές DLR σε πραγματικό χρόνο με τυποποιημένους κωδικούς σφαλμάτων και πλήρη αναλυτικά στοιχεία μέσω API και πύλης πελατών."
    }
  ],
  "ctaBadge": "ΞΕΚΙΝΗΣΤΕ ΣΗΜΕΡΑ",
  "ctaTitle": "Έτοιμοι να βελτιστοποιήσετε τη διεθνή συνδεσιμότητα SMS σας;",
  "ctaSubtitle": "Συνδεθείτε με τους ειδικούς τηλεπικοινωνιών μας για να σχεδιάσετε μια προσαρμοσμένη στρατηγική δρομολόγησης για τους βασικούς σας προορισμούς.",
  "contactUs": "Επικοινωνήστε με έναν ειδικό",
  "ctaFootnote": "Διαθέσιμα περιβάλλοντα δοκιμών και συμβουλευτική ανάλυσης κυκλοφορίας για παρόχους και επιχειρήσεις."
};

const cs: WholesaleMessageTranslation = {
  "heroBadge": "VELKOOBCHODNÍ SMS • GLOBÁLNÍ INFRASTRUKTURA ZPRÁV",
  "heroTitle": "Každá zpráva, doručena s absolutní spolehlivostí.",
  "heroDesc": "Velkoobchodní SMS operátorské úrovně pro telekomunikace, agregátory a komunikační platformy. Propojte svůj A2P provoz s globálními trasami prostřednictvím přímých spojení a transparentních reportů doručení.",
  "talkToExpert": "Promluvte si s odborníkem",
  "exploreCapabilities": "Prozkoumat možnosti",
  "stats": {
    "routing": "Globální směrování",
    "routingLabel": "Cílený dosah na trhy",
    "traffic": "A2P zprávy",
    "trafficLabel": "Kritický firemní provoz",
    "insights": "Přehledy o doručení",
    "insightsLabel": "Provozní kontrola"
  },
  "heroLiveBadge1": {
    "title": "A2P konektivita",
    "label": "Vaše platforma. Globální dosah."
  },
  "heroLiveBadge2": {
    "title": "Přehled v každém kroku",
    "sub": "Odeslání • Trasa • Potvrzení"
  },
  "whyBadge": "PROČ ZVOLIT INET VELKOOBCHODNÍ SMS",
  "whyTitle": "Infrastruktura zpráv, která posiluje každou obchodní interakci",
  "whySubtitle1": "Poskytujeme mezinárodní terminaci SMS podpořenou přímými propojeními, aktivním monitorováním tras a podrobnými přehledy o doručení.",
  "whySubtitle2": "Navrženo pro agregátory, operátory a podniky vyžadující ověřenou stabilitu ve velkém měřítku.",
  "whyCards": [
    {
      "title": "Dosah na globální trhy",
      "desc": "Vybudujte mezinárodní dosah zpráv pro strategické destinace, které vaši zákazníci potřebují.",
      "footer": "Globální směrování SMS"
    },
    {
      "title": "Přímé propojení s operátory",
      "desc": "Minimalizujte zbytečná zpoždění díky přímým síťovým linkám a spravovaným smlouvám vysoké kvality.",
      "footer": "Kvalita operátorské úrovně"
    },
    {
      "title": "Monitorování v reálném čase",
      "desc": "Sledujte úspěšnost doručení, DLR kódy a latenci přenosu s transparentní telemetrií.",
      "footer": "Provozní transparentnost"
    },
    {
      "title": "Vysoká škálovatelnost",
      "desc": "Přenášejte miliony zpráv denně díky odolné a flexibilní cloudové architektuře.",
      "footer": "Podnikový výkon"
    }
  ],
  "capabilitiesBadge": "KLÍČOVÉ MOŽNOSTI",
  "capabilitiesTitle": "Navrženo pro kritický firemní provoz zpráv",
  "capabilitiesDesc": "Naše portfolio velkoobchodních telekomunikačních služeb pokrývá celý životní cyklus A2P provozu.",
  "designSolution": "Navrhnout řešení",
  "solutionNote": "Konzultujte s našimi inženýry optimalizaci tras a sazeb.",
  "capabilities": [
    {
      "tag": "Firemní zprávy",
      "title": "Velkoobchodní terminace A2P SMS",
      "desc": "Doručujte B2C SMS pro ověřování, kritická oznámení a autorizovanou komunikaci se zákazníky."
    },
    {
      "tag": "Globální propojení",
      "title": "Mezinárodní pokrytí směrování",
      "desc": "Dosáhněte na mobilní operátory po celém světě s profily tras přizpůsobenými místním předpisům."
    },
    {
      "tag": "Standardní protokoly",
      "title": "Integrace SMPP a API",
      "desc": "Připojte se prostřednictvím výkonných linek SMPP v3.4 nebo moderních dokumentovaných REST API."
    },
    {
      "tag": "Spolehlivost doručení",
      "title": "Inteligentní správa tras",
      "desc": "Adaptivní směrování, které dynamicky vybírá nejlepší cestu na základě skutečného výkonu."
    },
    {
      "tag": "Soulad s předpisy",
      "title": "Zásady registrace Sender ID",
      "desc": "Odborná pomoc s registrací alfanumerických identifikátorů odesílatele a zkrácených čísel."
    },
    {
      "tag": "Pokročilý reporting",
      "title": "Potvrzení o doručení (DLR) a telemetrie",
      "desc": "Detailní DLR a analytika pro rychlou a přesnou provozní diagnostiku."
    }
  ],
  "howItWorksBadge": "JAK TO FUNGUJE",
  "howItWorksTitle": "Od integrace ke globálnímu dosahu ve třech krocích",
  "howItWorksSubtitle": "Strukturovaný proces pro rychlé a bezpečné spuštění vašeho mezinárodního SMS připojení.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Připojte svou platformu",
      "desc": "Odesílejte zprávy A2P prostřednictvím dohodnutého připojení SMPP nebo API s vaším nastavením.",
      "note": "Vaše aplikace → iNet"
    },
    {
      "step": "02",
      "title": "Inteligentní směrování",
      "desc": "Směrujeme každý balíček přes nejvhodnější operátorskou linku pro váš profil provozu.",
      "note": "Směrovací engine operátora"
    },
    {
      "step": "03",
      "title": "Přehledy a optimalizace",
      "desc": "Získávejte potvrzení o doručení v reálném čase a rozšiřujte objemy s nepřetržitou technickou podporou.",
      "note": "DLR potvrzeno cílovou sítí"
    }
  ],
  "networkBadge": "SÍŤ A POKRYTÍ",
  "networkTitle": "Konektivita operátorské úrovně pro každou destinaci",
  "networkDesc": "Přístup k více než 1 000 mobilních sítí po celém světě s infrastrukturou optimalizovanou pro vysokou dostupnost.",
  "networkBullets": [
    "Přímá a spravovaná propojení s předními světovými operátory",
    "Plná podpora kódování GSM-7 a vícejazyčného kódování Unicode",
    "Geograficky redundantní cloudová infrastruktura s automatickým převzetím služeb",
    "Nepřetržitý dohled 24/7/365 ze strany Network Operations Center (NOC)"
  ],
  "networkStats": [
    {
      "val": "Řízeno operátory",
      "label": "Strategie propojení"
    },
    {
      "val": "Přizpůsobeno trhu",
      "label": "Zásady tras a odesílatelů"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Podpořeno silnými partnerskými vztahy s operátory",
    "sub": "Přímé trasy • Spravované body propojení"
  },
  "networkFooterNote": "Dostupnost tras a zásady pro Sender ID podléhají místním předpisům v každé zemi.",
  "momentsBadge": "PŘÍPADY UŽITÍ",
  "momentsTitle": "Stvořeno pro časově citlivé obchodní interakce",
  "momentsSubtitle": "Zajistěte včasné doručení zpráv, které budují důvěru vašich koncových uživatelů.",
  "moments": [
    {
      "title": "Ověřování a 2FA",
      "desc": "Podpořte bezpečné přihlášení, jednorázové kódy OTP a schvalování transakcí prioritními A2P SMS.",
      "footer": "OTP a rychlé ověření"
    },
    {
      "title": "Transakční oznámení",
      "desc": "Doručujte bankovní upozornění, potvrzení objednávek a změny účtů okamžitě bez zpoždění.",
      "footer": "Upozornění v reálném čase"
    },
    {
      "title": "Připomínky schůzek a služeb",
      "desc": "Posílejte připomenutí termínů, stavy doručení a naléhavá servisní oznámení přesně včas.",
      "footer": "Provozní oznámení"
    },
    {
      "title": "Komunikace na základě souhlasu",
      "desc": "Komunikujte s přihlášenými zákazníky prostřednictvím informativních zpráv v souladu s opt-in pravidly.",
      "footer": "Zprávy se souhlasem"
    }
  ],
  "intelligenceBadge": "DORUČOVACÍ INTELIGENCE",
  "intelligenceTitle": "Úplný přehled a kontrola nad každou zprávou",
  "intelligenceDesc": "Dělejte informovaná rozhodnutí díky podrobným metrikám provozu a proaktivnímu monitorování.",
  "intelligenceBullets": [
    "Kompletní sledování životního cyklu každé jednotlivé zprávy",
    "Automatické přepnutí na záložní trasu při nestabilitě sítě",
    "Okamžitá upozornění při neočekávaných výkyvech latence",
    "Podrobné záznamy pro audit a odsouhlasení vyúčtování"
  ],
  "intelligenceFootnote": "Všechny telemetrické metriky a stavové kódy sítě jsou přenášeny v reálném čase prostřednictvím DLR.",
  "messageLogCard": {
    "title": "Protokol zpráv",
    "badge": "PŘÍKLAD ZOBRAZENÍ",
    "tab1": "Protokol",
    "tab2": "Trasy",
    "tab3": "Destinace",
    "colType": "TYP ZPRÁVY",
    "colState": "STAV",
    "colReceipt": "POTVRZENÍ",
    "row1Type": "Ověření",
    "row1State": "Doručeno",
    "row1Receipt": "Přijato",
    "row2Type": "Aktualizace objednávky",
    "row2State": "Odesílá se",
    "row2Receipt": "Čeká na vyřízení",
    "row3Type": "Servisní upozornění",
    "row3State": "Odmítnuto",
    "row3Receipt": "Podrobnosti chyby",
    "footerText": "Sledujte každou zprávu od odeslání až po potvrzení cílovou sítí."
  },
  "protectionTitle": "Zabezpečení provozu a prevence podvodů",
  "protectionBadge": "INTEGRITA SÍTĚ",
  "protectionCards": [
    {
      "title": "Detekce anomálií v provozu",
      "desc": "Okamžitě odhalujte podezřelé vzorce chování a blokujte SMS pumping a spamové útoky."
    },
    {
      "title": "Soulad s předpisy a seznamy blokování",
      "desc": "Automatická správa odhlášení z odběru pro ochranu reputace odesílatele a dodržování zákonů."
    },
    {
      "title": "Ochrana před falšováním Sender ID",
      "desc": "Chraňte alfanumerické názvy odesílatelů před zneužitím a neoprávněným použitím na regulovaných trzích."
    }
  ],
  "timelineBadge": "PLÁN INTEGRACE",
  "timelineTitle": "Strukturované spuštění ve 4 krocích",
  "timelineSubtitle": "Osvědčená metodika pro bezproblémové připojení vaší platformy.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Analýza požadavků",
      "desc": "Potvrzení cílových zemí, předpokládaného objemu, požadavků na Sender ID a obchodních podmínek."
    },
    {
      "step": "2",
      "title": "Technická konfigurace",
      "desc": "Přidělení přístupových údajů SMPP/API a nastavení bezpečné IP whitelist adres."
    },
    {
      "step": "3",
      "title": "Testování konektivity",
      "desc": "Ověření odezvy, kódování znaků a správného příjmu DLR v reálných mobilních sítích."
    },
    {
      "step": "4",
      "title": "Ostrý provoz",
      "desc": "Zahájení komerčního provozu pod přímým dohledem našich síťových specialistů."
    }
  ],
  "integrationPlan": {
    "title": "Vaše velkoobchodní SMS připojení",
    "planBadge": "PLÁN INTEGRACE",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Provoz zpráv A2P",
    "formats": "GSM-7 / Vícejazyčné Unicode",
    "feedback": "Potvrzení o doručení v reálném čase (DLR)",
    "senderSetup": "Specifické nastavení pro daný trh",
    "check1": "Ověření přihlašovacích údajů a test připojení",
    "check2": "Validace odesílatele a zpracování DLR",
    "discussNote": "Konzultujte s naším týmem nejvhodnější rozhraní pro vaše systémy.",
    "discussBtn": "Probrat integraci"
  },
  "faqBadge": "ČASTO KLADENÉ OTÁZKY",
  "faqTitle": "Vše o velkoobchodních SMS službách",
  "faqSubtitle": "Jasné odpovědi na otázky týkající se rozhraní, protokolů a terminace.",
  "faqs": [
    {
      "q": "Pro koho je velkoobchodní služba SMS určena?",
      "a": "Pro telekomunikační operátory, SMS agregátory, platformy CPaaS a podniky s vysokými objemy mezinárodního A2P provozu."
    },
    {
      "q": "Které protokoly a rozhraní jsou podporovány?",
      "a": "Podporujeme standardní vysokorychlostní protokol SMPP v3.4 i moderní rozhraní REST API s webhook notifikacemi."
    },
    {
      "q": "Poskytujete pomoc s registrací alfanumerického Sender ID?",
      "a": "Ano, náš compliance tým vám pomůže s přípravou podkladů a registrací u místních operátorů dle zákonů dané země."
    },
    {
      "q": "Jak detailní jsou zprávy o doručení?",
      "a": "Poskytujeme DLR v reálném čase se standardizovanými chybovými kódy a kompletními síťovými metrikami přes API i klientský portál."
    }
  ],
  "ctaBadge": "ZAČNĚTE DNES",
  "ctaTitle": "Jste připraveni optimalizovat své globální SMS připojení?",
  "ctaSubtitle": "Spojte se s našimi telekomunikačními specialisty a navrhněte směrovací strategii na míru pro vaše klíčové destinace.",
  "contactUs": "Kontaktovat specialistu",
  "ctaFootnote": "Vyhrazená testovací prostředí a analýza provozu jsou k dispozici pro operátory i firmy."
};

const ro: WholesaleMessageTranslation = {
  "heroBadge": "SMS EN-GROS • INFRASTRUCTURĂ GLOBALĂ DE MESAJE",
  "heroTitle": "Fiecare mesaj, conectat cu deplină încredere.",
  "heroDesc": "SMS en-gros de nivel operator pentru furnizori de telecomunicații, agregatori și platforme de mesagerie. Conectați traficul A2P la rute globale cu interconectare directă și transparență completă a livrării.",
  "talkToExpert": "Discută cu un expert",
  "exploreCapabilities": "Explorează funcționalitățile",
  "stats": {
    "routing": "Rutare globală",
    "routingLabel": "Acoperire orientată pe piețe",
    "traffic": "Mesagerie A2P",
    "trafficLabel": "Trafic critic de afaceri",
    "insights": "Informații despre livrare",
    "insightsLabel": "Control operațional"
  },
  "heroLiveBadge1": {
    "title": "Conectivitate A2P",
    "label": "Platforma ta. Acoperire globală."
  },
  "heroLiveBadge2": {
    "title": "Transparență la fiecare pas",
    "sub": "Trimitere • Rută • Confirmare"
  },
  "whyBadge": "DE CE SĂ ALEGI INET WHOLESALE SMS",
  "whyTitle": "Infrastructură de mesagerie care susține fiecare interacțiune de afaceri",
  "whySubtitle1": "Oferim terminare internațională de SMS susținută de interconectări directe, monitorizare activă a rutelor și rapoarte detaliate de livrare.",
  "whySubtitle2": "Construit pentru agregatori, operatori și companii care solicită stabilitate dovedită la scară largă.",
  "whyCards": [
    {
      "title": "Acces pe piețele globale",
      "desc": "Construiți o acoperire internațională de mesagerie pentru destinațiile strategice solicitate de clienții dvs.",
      "footer": "Rutare SMS globală"
    },
    {
      "title": "Interconectări directe cu operatorii",
      "desc": "Minimizați intermediarii inutili cu legături directe de rețea și acorduri de înaltă calitate.",
      "footer": "Calitate de nivel operator"
    },
    {
      "title": "Monitorizare în timp real",
      "desc": "Urmăriți ratele de livrare, codurile DLR și latența de transmisie cu telemetrie transparentă.",
      "footer": "Vizibilitate operațională"
    },
    {
      "title": "Scalabilitate elastică",
      "desc": "Transmiteți milioane de mesaje pe zi printr-o arhitectură cloud rezistentă la erori.",
      "footer": "Performanță enterprise"
    }
  ],
  "capabilitiesBadge": "CAPACITĂȚI PRINCIPALE",
  "capabilitiesTitle": "Proiectat pentru traficul critic de mesagerie de afaceri",
  "capabilitiesDesc": "Suita noastră de servicii en-gros gestionează întregul ciclu de viață al traficului A2P cu fiabilitate dovedită.",
  "designSolution": "Configurează o soluție",
  "solutionNote": "Discutați cu inginerii noștri pentru a optimiza rutele și tarifele.",
  "capabilities": [
    {
      "tag": "Mesagerie de afaceri",
      "title": "Terminare SMS A2P en-gros",
      "desc": "Livrați SMS-uri B2C pentru autentificare, alerte critice și comunicare autorizată cu clienții."
    },
    {
      "tag": "Conectivitate globală",
      "title": "Acoperire internațională de rutare",
      "desc": "Ajungeți la operatorii de telefonie mobilă din întreaga lume cu profiluri conforme reglementărilor locale."
    },
    {
      "tag": "Protocoale standard",
      "title": "Integrare SMPP și API",
      "desc": "Conectați-vă prin legături SMPP v3.4 de mare viteză sau API-uri REST moderne și documentate."
    },
    {
      "tag": "Fiabilitate de livrare",
      "title": "Gestionare inteligentă a rutelor",
      "desc": "Rutare adaptivă care selectează dinamic cea mai bună cale pe baza performanței reale de livrare."
    },
    {
      "tag": "Conformitate de reglementare",
      "title": "Politici de înregistrare Sender ID",
      "desc": "Asistență specializată pentru înregistrarea numelor de expeditor alfanumerice și a codurilor scurte."
    },
    {
      "tag": "Raportare avansată",
      "title": "Confirmări de livrare (DLR) și telemetrie",
      "desc": "DLR-uri detaliate și analize complete pentru diagnosticare operațională rapidă și precisă."
    }
  ],
  "howItWorksBadge": "CUM FUNCȚIONEAZĂ",
  "howItWorksTitle": "De la integrare la acoperire globală în trei pași",
  "howItWorksSubtitle": "Un proces bine structurat pentru a activa conexiunea internațională de SMS rapid și în siguranță.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Conectați platforma dvs.",
      "desc": "Trimiteți mesaje A2P printr-o conexiune agreată SMPP sau API cu setările dvs. de expeditor și destinație.",
      "note": "Aplicația dvs. → iNet"
    },
    {
      "step": "02",
      "title": "Rutare inteligentă",
      "desc": "Direcționăm fiecare pachet prin cea mai potrivită legătură de operator pentru profilul dvs. de trafic.",
      "note": "Motor de rutare operator"
    },
    {
      "step": "03",
      "title": "Rapoarte și optimizare",
      "desc": "Primiți confirmări de livrare în timp real și extindeți volumele cu asistență tehnică continuă.",
      "note": "DLR confirmat de rețeaua de destinație"
    }
  ],
  "networkBadge": "REȚEA ȘI ACOPERIRE",
  "networkTitle": "Conectivitate de nivel operator pentru orice destinație",
  "networkDesc": "Acces la peste 1.000 de rețele mobile din întreaga lume cu infrastructură optimizată pentru disponibilitate ridicată.",
  "networkBullets": [
    "Interconectări directe și gestionate cu operatori globali de top",
    "Suport complet pentru codificarea GSM-7 și Unicode multilingv",
    "Infrastructură cloud distribuită geografic cu comutare automată în caz de eroare",
    "Monitorizare continuă 24/7/365 de către Centrul de Operațiuni de Rețea (NOC)"
  ],
  "networkStats": [
    {
      "val": "Condus de operatori",
      "label": "Strategie de interconectare"
    },
    {
      "val": "Adaptat la piață",
      "label": "Politici de rutare și expeditor"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Susținut de parteneriate puternice cu operatorii",
    "sub": "Rute directe • Puncte de interconectare gestionate"
  },
  "networkFooterNote": "Disponibilitatea rutelor și politicile Sender ID se supun reglementărilor legale din fiecare țară.",
  "momentsBadge": "SCENARII DE UTILIZARE",
  "momentsTitle": "Construit pentru interacțiuni de afaceri esențiale",
  "momentsSubtitle": "Garantarea livrării la timp a mesajelor care definesc încrederea utilizatorilor finali.",
  "moments": [
    {
      "title": "Autentificare și 2FA",
      "desc": "Facilitați autentificarea securizată, codurile de verificare OTP și aprobările financiare prin SMS A2P prioritar.",
      "footer": "OTP și verificare rapidă"
    },
    {
      "title": "Notificări tranzacționale",
      "desc": "Transmiteți alerte bancare, confirmări de comenzi și modificări de cont instantaneu fără întârzieri.",
      "footer": "Alerte în timp real"
    },
    {
      "title": "Memento-uri de programări & servicii",
      "desc": "Trimiteți confirmări de întâlniri, actualizări logistice și notificări urgente de mentenanță la timp.",
      "footer": "Notificări operaționale"
    },
    {
      "title": "Interacțiune bazată pe consimțământ",
      "desc": "Comunicați cu clienții abonați prin mesaje informative, respectând reglementările opt-in.",
      "footer": "Mesagerie cu consimțământ"
    }
  ],
  "intelligenceBadge": "INTELIGENȚĂ DE LIVRARE",
  "intelligenceTitle": "Vizibilitate și control complet asupra fiecărui mesaj",
  "intelligenceDesc": "Luați decizii documentate pe baza unor indicatori de trafic detaliați și a unei monitorizări proactive.",
  "intelligenceBullets": [
    "Urmărirea ciclului complet de viață al fiecărui mesaj individual",
    "Comutare automată pe rută de rezervă în cazul instabilității rețelei",
    "Alerte imediate la apariția unor variații neobișnuite de latență",
    "Jurnale complete de audit pentru reconciliere și suport tehnic"
  ],
  "intelligenceFootnote": "Toți indicatorii de telemetrie și codurile de stare sunt transmise în timp real prin rapoarte DLR.",
  "messageLogCard": {
    "title": "Jurnal de mesaje",
    "badge": "VIZUALIZARE EXEMPLU",
    "tab1": "Jurnal",
    "tab2": "Rute",
    "tab3": "Destinații",
    "colType": "TIP MESAJ",
    "colState": "STARE",
    "colReceipt": "CONFIRMARE",
    "row1Type": "Verificare OTP",
    "row1State": "Livrat",
    "row1Receipt": "Recepționat",
    "row2Type": "Actualizare comandă",
    "row2State": "Se trimite",
    "row2Receipt": "În așteptare",
    "row3Type": "Alertă de serviciu",
    "row3State": "Respins",
    "row3Receipt": "Detalii eroare",
    "footerText": "Urmăriți fiecare mesaj de la transmitere până la confirmarea finală a rețelei."
  },
  "protectionTitle": "Securitatea traficului & Prevenirea fraudelor",
  "protectionBadge": "INTEGRITATEA REȚELEI",
  "protectionCards": [
    {
      "title": "Detectarea anomaliilor de trafic",
      "desc": "Identificați tiparele neobișnuite pentru a bloca atacurile de SMS pumping și spam-ul."
    },
    {
      "title": "Conformitate & Liste de blocare",
      "desc": "Sincronizare automată a solicitărilor de dezabonare pentru a proteja reputația expeditorului."
    },
    {
      "title": "Protecție împotriva falsificării Sender ID",
      "desc": "Protejați identificatorii alfanumerici de uzurpare și utilizare neautorizată pe piețele reglementate."
    }
  ],
  "timelineBadge": "PLAN DE INTEGRARE",
  "timelineTitle": "Lansare structurată în 4 etape",
  "timelineSubtitle": "O metodologie dovedită pentru conectarea platformei dvs. fără întreruperi.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Definirea cerințelor",
      "desc": "Confirmarea țărilor de destinație, a volumului estimat, a cerințelor Sender ID și a condițiilor comerciale."
    },
    {
      "step": "2",
      "title": "Configurare tehnică",
      "desc": "Generarea credențialelor SMPP/API și configurarea listelor albe de adrese IP sigure."
    },
    {
      "step": "3",
      "title": "Testarea conectivității",
      "desc": "Verificarea latenței, a codificării caracterelor și a recepției rapoartelor DLR în rețele reale."
    },
    {
      "step": "4",
      "title": "Trecerea în producție",
      "desc": "Deschiderea traficului comercial sub supravegherea atentă a inginerilor noștri de rețea."
    }
  ],
  "integrationPlan": {
    "title": "Conexiunea dvs. de SMS en-gros",
    "planBadge": "SPECIFICAȚII INTEGRARE",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "Trafic de mesaje A2P",
    "formats": "GSM-7 / Unicode multilingv",
    "feedback": "Confirmări de livrare în timp real (DLR)",
    "senderSetup": "Configurare adaptată pieței",
    "check1": "Verificarea datelor de autentificare și test de rețea",
    "check2": "Validarea expeditorului și recepționarea DLR",
    "discussNote": "Discutați cu echipa noastră pentru a alege interfața optimă pentru platforma dvs.",
    "discussBtn": "Discută integrarea"
  },
  "faqBadge": "ÎNTREBĂRI FRECVENTE",
  "faqTitle": "Tot ce trebuie să știți despre SMS-ul en-gros",
  "faqSubtitle": "Răspunsuri clare despre interfețe, protocoale și calitatea livrării.",
  "faqs": [
    {
      "q": "Cui i se adresează serviciul de SMS en-gros?",
      "a": "Operatorilor de telecomunicații, agregatorilor de SMS, platformelor CPaaS și companiilor cu volume mari de mesaje A2P internaționale."
    },
    {
      "q": "Ce protocoale de conectare sunt acceptate?",
      "a": "Susținem protocolul standard de mare viteză SMPP v3.4, precum și API-uri REST moderne cu notificări webhook."
    },
    {
      "q": "Cum se realizează înregistrarea numelor de expeditor (Sender ID)?",
      "a": "Echipa noastră de conformitate vă asistă la pregătirea documentelor și înregistrarea la operatorii locali conform legislației."
    },
    {
      "q": "Cât de detaliate sunt rapoartele privind livrarea?",
      "a": "Oferim DLR în timp real cu coduri de eroare standardizate și telemetrie completă de rețea prin API și portalul dedicat."
    }
  ],
  "ctaBadge": "ÎNCEPEȚI ASTĂZI",
  "ctaTitle": "Sunteți gata să optimizați conectivitatea SMS en-gros?",
  "ctaSubtitle": "Conectați-vă cu specialiștii noștri pentru a proiecta o strategie de rutare dedicată piețelor dvs. strategice.",
  "contactUs": "Contactează un specialist",
  "ctaFootnote": "Medii de testare dedicate și audit de trafic disponibile pentru operatori și corporații."
};

const hu: WholesaleMessageTranslation = {
  "heroBadge": "NAGYKERESKEDELMI SMS • GLOBÁLIS ÜZENETKÜLDŐ INFRASTRUKTÚRA",
  "heroTitle": "Minden üzenet, teljes megbízhatósággal kézbesítve.",
  "heroDesc": "Szolgáltatói szintű nagykereskedelmi SMS távközlési cégek, aggregátorok és üzenetküldő platformok számára. Csatlakoztassa A2P forgalmát globális útvonalakhoz közvetlen összekapcsolással és átlátható kézbesítési jelentésekkel.",
  "talkToExpert": "Beszéljen szakértőnkkel",
  "exploreCapabilities": "Képességek felfedezése",
  "stats": {
    "routing": "Globális útválasztás",
    "routingLabel": "Piacvezérelt elérés",
    "traffic": "A2P üzenetküldés",
    "trafficLabel": "Üzletileg kritikus forgalom",
    "insights": "Kézbesítési elemzések",
    "insightsLabel": "Működési felügyelet"
  },
  "heroLiveBadge1": {
    "title": "A2P kapcsolat",
    "label": "Az Ön platformja. Globális elérés."
  },
  "heroLiveBadge2": {
    "title": "Átláthatóság minden lépésben",
    "sub": "Beküldés • Útvonal • Nyugta"
  },
  "whyBadge": "MIÉRT VÁLASSZA AZ INET NAGYKERESKEDELMI SMS-T",
  "whyTitle": "Üzenetküldő infrastruktúra, amely megerősíti az üzleti interakciókat",
  "whySubtitle1": "Közvetlen hálózati összeköttetéseken, aktív útvonal-felügyeleten és részletes kézbesítési jelentéseken alapuló nemzetközi SMS végződtetést biztosítunk.",
  "whySubtitle2": "Olyan aggregátorok és vállalatok számára készült, akik nagy volumenben is bizonyított stabilitást követelnek meg.",
  "whyCards": [
    {
      "title": "Globális piacok elérése",
      "desc": "Építsen nemzetközi üzenetküldési elérést az ügyfelei számára stratégiai jelentőségű célállomásokra.",
      "footer": "Globális SMS útválasztás"
    },
    {
      "title": "Közvetlen szolgáltatói kapcsolatok",
      "desc": "Minimalizálja a felesleges hálózati ugrásokat közvetlen linkekkel és magas színvonalú megállapodásokkal.",
      "footer": "Szolgáltatói szintű minőség"
    },
    {
      "title": "Valós idejű felügyelet",
      "desc": "Kövesse nyomon a kézbesítési arányokat, DLR kódokat és átviteli késleltetést átlátható telemetriával.",
      "footer": "Működési átláthatóság"
    },
    {
      "title": "Rugalmas skálázhatóság",
      "desc": "Továbbítson naponta több millió üzenetet hibatűrő és rugalmas felhőarchitektúrával.",
      "footer": "Vállalati teljesítmény"
    }
  ],
  "capabilitiesBadge": "FŐ KÉPESSÉGEK",
  "capabilitiesTitle": "Kifejezetten üzletileg kritikus üzenetforgalomra tervezve",
  "capabilitiesDesc": "Nagykereskedelmi szolgáltatásaink az A2P forgalom teljes életciklusát lefedik bizonyított megbízhatósággal.",
  "designSolution": "Megoldás tervezése",
  "solutionNote": "Egyeztessen mérnökeinkkel az útvonalak és tarifák optimalizálásáról.",
  "capabilities": [
    {
      "tag": "Üzleti üzenetküldés",
      "title": "Nagykereskedelmi A2P SMS végződtetés",
      "desc": "B2C SMS küldése hitelesítéshez, kritikus értesítésekhez és hozzájáruláson alapuló ügyfélkapcsolathoz."
    },
    {
      "tag": "Globális kapcsolat",
      "title": "Nemzetközi útvonallefedettség",
      "desc": "Érje el a mobilszolgáltatókat világszerte a helyi szabályozásoknak megfelelő útvonalprofilokkal."
    },
    {
      "tag": "Szabványos protokollok",
      "title": "SMPP és API integráció",
      "desc": "Csatlakozzon nagy sebességű SMPP v3.4 kapcsolatokon vagy modern REST API-kon keresztül."
    },
    {
      "tag": "Kézbesítési megbízhatóság",
      "title": "Intelligens útvonalkezelés",
      "desc": "Adaptív útválasztás, amely a valós idejű teljesítmény alapján dinamikusan választja ki a legjobb utat."
    },
    {
      "tag": "Szabályozási megfelelőség",
      "title": "Sender ID regisztrációs irányelvek",
      "desc": "Szakértői támogatás alfanumerikus feladói azonosítók és rövid kódok helyi törvények szerinti bejegyzéséhez."
    },
    {
      "tag": "Részletes jelentések",
      "title": "Kézbesítési nyugták (DLR) és telemetria",
      "desc": "Részletes DLR státuszok és analitikák a gyors működési diagnosztikához."
    }
  ],
  "howItWorksBadge": "HOGYAN MŰKÖDIK",
  "howItWorksTitle": "Az integrációtól a globális elérésig három lépésben",
  "howItWorksSubtitle": "Strukturált folyamat nemzetközi SMS kapcsolatának gyors és biztonságos aktiválásához.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Csatlakoztassa platformját",
      "desc": "Küldjön A2P üzeneteket egyeztetett SMPP vagy API kapcsolaton keresztül a beállításainak megfelelően.",
      "note": "Az Ön rendszere → iNet"
    },
    {
      "step": "02",
      "title": "Intelligens útválasztás",
      "desc": "Minden üzenetet az Ön forgalmi profiljának leginkább megfelelő szolgáltatói kapcsolaton továbbítunk.",
      "note": "Szolgáltatói útválasztó motor"
    },
    {
      "step": "03",
      "title": "Jelentések és optimalizálás",
      "desc": "Kapjon valós idejű kézbesítési igazolásokat, és növelje a volument folyamatos technikai támogatással.",
      "note": "A célhálózat által megerősített DLR"
    }
  ],
  "networkBadge": "HÁLÓZAT ÉS LEFEDETTSÉG",
  "networkTitle": "Szolgáltatói szintű kapcsolat minden célállomásra",
  "networkDesc": "Hozzáférés több mint 1000 mobilhálózathoz világszerte magas rendelkezésre állású infrastruktúrával.",
  "networkBullets": [
    "Közvetlen és menedzselt összeköttetések a világ vezető távközlési szolgáltatóival",
    "GSM-7 és többnyelvű Unicode karakterkódolás teljes támogatása",
    "Földrajzilag redundáns felhőinfrastruktúra automatikus hibaelhárítással",
    "24/7/365 folyamatos felügyelet a Hálózati Műveleti Központ (NOC) által"
  ],
  "networkStats": [
    {
      "val": "Szolgáltató-központú",
      "label": "Összekapcsolási stratégia"
    },
    {
      "val": "Piacérzékeny",
      "label": "Útvonal- és feladói irányelvek"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Erős szolgáltatói partnerségekre építve",
    "sub": "Közvetlen útvonalak • Menedzselt összekapcsolási pontok"
  },
  "networkFooterNote": "Az útvonalak elérhetősége és a Sender ID szabályzatok az adott ország helyi jogszabályaitól függenek.",
  "momentsBadge": "FELHASZNÁLÁSI ESETEK",
  "momentsTitle": "Időérzékeny üzleti interakciókra tervezve",
  "momentsSubtitle": "Biztosítsa a felhasználói bizalmat építő üzenetek pontos és késlekedésmentes kézbesítését.",
  "moments": [
    {
      "title": "Hitelesítés és 2FA",
      "desc": "Biztonságos bejelentkezések, OTP kódok és tranzakció-jóváhagyások támogatása kiemelt A2P SMS-sel.",
      "footer": "OTP és gyors ellenőrzés"
    },
    {
      "title": "Tranzakciós értesítések",
      "desc": "Banki figyelmeztetések, rendelés-visszaigazolások és fiókmódosítások azonnali továbbítása.",
      "footer": "Valós idejű riasztások"
    },
    {
      "title": "Időpont- és szolgáltatási emlékeztetők",
      "desc": "Küldjön időpont-emlékeztetőket, kézbesítési állapotokat és karbantartási értesítéseket pontosan időben.",
      "footer": "Működési értesítések"
    },
    {
      "title": "Hozzájáruláson alapuló kommunikáció",
      "desc": "Kommunikáljon a feliratkozott ügyfelekkel releváns üzenetekkel az opt-in szabályok betartása mellett.",
      "footer": "Engedélyezett üzenetküldés"
    }
  ],
  "intelligenceBadge": "KÉZBESÍTÉSI INTELLIGENCIA",
  "intelligenceTitle": "Teljes körű átláthatóság és felügyelet minden üzenet felett",
  "intelligenceDesc": "Hozzon megalapozott döntéseket részletes forgalmi mutatók és proaktív monitorozás segítségével.",
  "intelligenceBullets": [
    "Minden egyes üzenet teljes életciklusának nyomon követése",
    "Automatikus átkapcsolás tartalék útvonalra hálózati zavarok esetén",
    "Azonnali riasztások váratlan késleltetési ingadozások esetén",
    "Részletes auditnaplók az elszámoláshoz és ellenőrzéshez"
  ],
  "intelligenceFootnote": "Minden telemetriai adat és hálózati állapotkód valós időben érkezik a DLR csatornákon.",
  "messageLogCard": {
    "title": "Üzenetnapló",
    "badge": "PÉLDA NÉZET",
    "tab1": "Napló",
    "tab2": "Útvonalak",
    "tab3": "Célállomások",
    "colType": "ÜZENETTÍPUS",
    "colState": "ÁLLAPOT",
    "colReceipt": "NYUGTA",
    "row1Type": "OTP ellenőrzés",
    "row1State": "Kézbesítve",
    "row1Receipt": "Átvéve",
    "row2Type": "Rendelés frissítés",
    "row2State": "Küldés alatt",
    "row2Receipt": "Függőben",
    "row3Type": "Szolgáltatási riasztás",
    "row3State": "Elutasítva",
    "row3Receipt": "Hiba részletei",
    "footerText": "Kövesse nyomon minden üzenet útját a beküldéstől a célhálózat megerősítéséig."
  },
  "protectionTitle": "Forgalombiztonság és csalásmegelőzés",
  "protectionBadge": "HÁLÓZATI INTEGRITÁS",
  "protectionCards": [
    {
      "title": "Rendellenes forgalom észlelése",
      "desc": "Azonosítsa a gyanús mintákat az SMS pumping és a spamtámadások azonnali megakadályozására."
    },
    {
      "title": "Megfelelőség és tiltólisták kezelése",
      "desc": "Leiratkozási kérelmek automatikus szinkronizálása a feladói jó hírnév megőrzése érdekében."
    },
    {
      "title": "Sender ID hamisítás elleni védelem",
      "desc": "Védje az alfanumerikus feladói neveket a visszaélésekkel szemben a szabályozott piacokon."
    }
  ],
  "timelineBadge": "INTEGRÁCIÓS TERV",
  "timelineTitle": "Strukturált bevezetés 4 lépésben",
  "timelineSubtitle": "Bevált módszertan rendszereinek zökkenőmentes csatlakoztatásához.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Igényfelmérés",
      "desc": "A célországok, a várható forgalom, a Sender ID követelmények és a kereskedelmi feltételek rögzítése."
    },
    {
      "step": "2",
      "title": "Technikai beállítás",
      "desc": "SMPP/API hitelesítő adatok kiadása és biztonságos IP fehérlisták konfigurálása."
    },
    {
      "step": "3",
      "title": "Csatlakozási tesztek",
      "desc": "Karakterkódolás, késleltetés és a DLR nyugták pontosságának ellenőrzése valós hálózatokon."
    },
    {
      "step": "4",
      "title": "Éles indulás",
      "desc": "A kereskedelmi forgalom megnyitása hálózati mérnökeink közvetlen felügyelete mellett."
    }
  ],
  "integrationPlan": {
    "title": "Nagykereskedelmi SMS kapcsolata",
    "planBadge": "INTEGRÁCIÓS TERV",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P üzenetforgalom",
    "formats": "GSM-7 / Többnyelvű Unicode",
    "feedback": "Valós idejű kézbesítési igazolások (DLR)",
    "senderSetup": "Piacspecifikus beállítások",
    "check1": "Hitelesítő adatok és hálózati teszt",
    "check2": "Feladó érvényesítése és DLR feldolgozás",
    "discussNote": "Keresse csapatunkat a rendszereihez leginkább illeszkedő interfész kiválasztásához.",
    "discussBtn": "Integráció megbeszélése"
  },
  "faqBadge": "GYAKRAN ISMÉTELT KÉRDÉSEK",
  "faqTitle": "Minden a nagykereskedelmi SMS szolgáltatásról",
  "faqSubtitle": "Világos válaszok interfészekről, protokollokról és a kézbesítés minőségéről.",
  "faqs": [
    {
      "q": "Kinek szól a nagykereskedelmi SMS szolgáltatás?",
      "a": "Távközlési szolgáltatóknak, SMS aggregátoroknak, CPaaS platformoknak és nagy volumenű nemzetközi A2P forgalmat bonyolító vállalatoknak."
    },
    {
      "q": "Milyen interfészek és protokollok támogatottak?",
      "a": "Támogatjuk az iparági szabványos nagy sebességű SMPP v3.4 protokollt, valamint modern REST API-kat webhook értesítésekkel."
    },
    {
      "q": "Segítenek az alfanumerikus Sender ID bejegyzésében?",
      "a": "Igen, szakértő csapatunk segítséget nyújt a szükséges dokumentáció előkészítésében és a helyi szolgáltatóknál történő bejegyzésben."
    },
    {
      "q": "Mennyire részletesek a kézbesítési jelentések?",
      "a": "Valós idejű DLR-t biztosítunk szabványos hibakódokkal és átfogó hálózati statisztikákkal az API-n és az ügyfélportálon keresztül."
    }
  ],
  "ctaBadge": "KEZDJE EL MA",
  "ctaTitle": "Készen áll globális SMS kapcsolatának optimalizálására?",
  "ctaSubtitle": "Lépjen kapcsolatba távközlési szakértőinkkel a legfontosabb célpiacaira szabott útválasztási stratégia kialakításához.",
  "contactUs": "Kapcsolatfelvétel szakértővel",
  "ctaFootnote": "Dedikált tesztkörnyezetek és forgalomelemzési tanácsadás elérhető szolgáltatók és vállalatok számára."
};

const uk: WholesaleMessageTranslation = {
  "heroBadge": "ОПТОВИЙ SMS • ГЛОБАЛЬНА ІНФРАСТРУКТУРА ПОВІДОМЛЕНЬ",
  "heroTitle": "Кожне повідомлення, підключене з абсолютною надійністю.",
  "heroDesc": "Оптовий SMS операторського рівня для телеком-провайдерів, агрегаторів та комунікаційних платформ. Підключайте свій A2P трафік до глобальних маршрутів із прямим сполученням і прозорими звітами про доставку.",
  "talkToExpert": "Зв'язатися з експертом",
  "exploreCapabilities": "Дізнатися про можливості",
  "stats": {
    "routing": "Глобальна маршрутизація",
    "routingLabel": "Широке охоплення ринків",
    "traffic": "A2P повідомлення",
    "trafficLabel": "Критично важливий трафік",
    "insights": "Аналітика доставки",
    "insightsLabel": "Операційний контроль"
  },
  "heroLiveBadge1": {
    "title": "A2P зв'язність",
    "label": "Ваша платформа. Глобальне охоплення."
  },
  "heroLiveBadge2": {
    "title": "Прозорість на кожному кроці",
    "sub": "Надсилання • Маршрут • Квитанція"
  },
  "whyBadge": "ЧОМУ ОБИРАЮТЬ INET ОПТОВИЙ SMS",
  "whyTitle": "Інфраструктура повідомлень, яка зміцнює кожну ділову взаємодію",
  "whySubtitle1": "Ми забезпечуємо міжнародну термінацію SMS на базі прямих інтерконектів, активного моніторингу маршрутів та детальних звітів про доставку.",
  "whySubtitle2": "Створено для агрегаторів, операторів та підприємств, яким потрібна доведена стабільність у великих масштабах.",
  "whyCards": [
    {
      "title": "Охоплення глобальних ринків",
      "desc": "Створюйте міжнародне охоплення повідомленнями для стратегічних напрямків, які потрібні вашим клієнтам.",
      "footer": "Глобальна маршрутизація SMS"
    },
    {
      "title": "Прямі підключення до операторів",
      "desc": "Мінімізуйте затримки завдяки прямим мережевим каналам та керованим угодам високої якості.",
      "footer": "Якість операторського рівня"
    },
    {
      "title": "Моніторинг у реальному часі",
      "desc": "Відстежуйте відсоток доставки, коди DLR та затримку передачі за допомогою прозорої телеметрії.",
      "footer": "Операційна прозорість"
    },
    {
      "title": "Висока масштабованість",
      "desc": "Передавайте мільйони повідомлень щодня завдяки відмовостійкій та еластичній хмарній архітектурі.",
      "footer": "Корпоративна продуктивність"
    }
  ],
  "capabilitiesBadge": "КЛЮЧОВІ МОЖЛИВОСТІ",
  "capabilitiesTitle": "Розроблено для критично важливого корпоративного трафіку",
  "capabilitiesDesc": "Наш пакет оптових телекомунікаційних послуг охоплює весь життєвий цикл A2P трафіку з підтвердженою надійністю.",
  "designSolution": "Спроєктувати рішення",
  "solutionNote": "Обговоріть із нашими інженерами оптимізацію маршрутів та тарифів.",
  "capabilities": [
    {
      "tag": "Бізнес-повідомлення",
      "title": "Оптова термінація A2P SMS",
      "desc": "Доставка B2C SMS для автентифікації, критичних сповіщень та дозволеної комунікації з клієнтами."
    },
    {
      "tag": "Глобальний зв'язок",
      "title": "Міжнародне покриття маршрутів",
      "desc": "Досягайте операторів мобільного зв'язку в усьому світі з профілями маршрутів, адаптованими до місцевих норм."
    },
    {
      "tag": "Стандартні протоколи",
      "title": "Інтеграція SMPP та API",
      "desc": "Підключайтеся через високошвидкісні канали SMPP v3.4 або сучасні задокументовані REST API."
    },
    {
      "tag": "Надійність доставки",
      "title": "Інтелектуальне керування маршрутами",
      "desc": "Адаптивна маршрутизація, яка динамічно обирає найкращий шлях на основі фактичних показників."
    },
    {
      "tag": "Регуляторна відповідність",
      "title": "Політика реєстрації Sender ID",
      "desc": "Експертна підтримка під час реєстрації альфанумеричних ідентифікаторів відправника та коротких номерів."
    },
    {
      "tag": "Розширена звітність",
      "title": "Звіти про доставку (DLR) і телеметрія",
      "desc": "Детальні статуси DLR та аналітика для швидкої та точної операційної діагностики."
    }
  ],
  "howItWorksBadge": "ЯК ЦЕ ПРАЦЮЄ",
  "howItWorksTitle": "Від інтеграції до глобального охоплення за три кроки",
  "howItWorksSubtitle": "Структурований процес для швидкого та безпечного запуску вашого міжнародного SMS-з'єднання.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Підключіть вашу платформу",
      "desc": "Надсилайте повідомлення A2P через узгоджене підключення SMPP або API з вашими налаштуваннями.",
      "note": "Ваша система → iNet"
    },
    {
      "step": "02",
      "title": "Інтелектуальна маршрутизація",
      "desc": "Ми спрямовуємо кожен пакет через найбільш оптимальний канал оператора для вашого профілю трафіку.",
      "note": "Маршрутизатор операторського класу"
    },
    {
      "step": "03",
      "title": "Звіти та оптимізація",
      "desc": "Отримуйте звіти про доставку в реальному часі та масштабуйте обсяги за постійної технічної підтримки.",
      "note": "DLR підтверджено мережею призначення"
    }
  ],
  "networkBadge": "МЕРЕЖА ТА ПОКРИТТЯ",
  "networkTitle": "Зв'язок операторського рівня для кожного напрямку",
  "networkDesc": "Доступ до понад 1 000 мобільних мереж по всьому світу з інфраструктурою високої доступності.",
  "networkBullets": [
    "Прямі та керовані інтерконекти з провідними світовими операторами",
    "Повна підтримка кодування GSM-7 та багатомовного Unicode",
    "Географічно розподілена хмарна інфраструктура з автоматичним перемиканням",
    "Цілодобовий моніторинг 24/7/365 Центром управління мережею (NOC)"
  ],
  "networkStats": [
    {
      "val": "Операторський підхід",
      "label": "Стратегія підключення"
    },
    {
      "val": "Адаптація до ринку",
      "label": "Політики маршрутів і відправників"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Спираючись на міцні партнерства з операторами",
    "sub": "Прямі маршрути • Керовані вузли з'єднання"
  },
  "networkFooterNote": "Доступність маршрутів і політики Sender ID регулюються місцевим законодавством кожної країни.",
  "momentsBadge": "СЦЕНАРІЇ ВИКОРИСТАННЯ",
  "momentsTitle": "Створено для критично важливих бізнес-комунікацій",
  "momentsSubtitle": "Забезпечте своєчасну доставку повідомлень, які формують довіру кінцевих користувачів.",
  "moments": [
    {
      "title": "Автентифікація та 2FA",
      "desc": "Безпечний вхід, перевірка одноразовими кодами OTP та підтвердження транзакцій пріоритетними SMS.",
      "footer": "OTP та швидка перевірка"
    },
    {
      "title": "Транзакційні сповіщення",
      "desc": "Миттєва доставка банківських сповіщень, підтверджень замовлень та оновлень рахунків без затримок.",
      "footer": "Сповіщення в реальному часі"
    },
    {
      "title": "Нагадування про зустрічі та послуги",
      "desc": "Надсилайте нагадування про візити, статуси доставки та термінові сервісні повідомлення вчасно.",
      "footer": "Операційні сповіщення"
    },
    {
      "title": "Комунікація за згодою",
      "desc": "Взаємодійте з підписаними клієнтами за допомогою інформативних повідомлень відповідно до правил opt-in.",
      "footer": "Повідомлення за згодою"
    }
  ],
  "intelligenceBadge": "ІНТЕЛЕКТ ДОСТАВКИ",
  "intelligenceTitle": "Повна видимість і контроль над кожним повідомленням",
  "intelligenceDesc": "Приймайте зважені рішення на основі детальних показників трафіку та проактивного моніторингу.",
  "intelligenceBullets": [
    "Повне відстеження життєвого циклу кожного окремого повідомлення",
    "Автоматичне перемикання на резервний маршрут у разі збоїв у мережі",
    "Миттєві сповіщення при неочікуваних стрибках затримки",
    "Детальні журнали аудиту для звірки розрахунків та технічної підтримки"
  ],
  "intelligenceFootnote": "Всі метрики телеметрії та коди стану мережі передаються в реальному часі через звіти DLR.",
  "messageLogCard": {
    "title": "Журнал повідомлень",
    "badge": "ПРИКЛАД ВИГЛЯДУ",
    "tab1": "Журнал",
    "tab2": "Маршрути",
    "tab3": "Напрямки",
    "colType": "ТИП ПОВІДОМЛЕННЯ",
    "colState": "СТАН",
    "colReceipt": "КВИТАНЦІЯ",
    "row1Type": "Верифікація OTP",
    "row1State": "Доставлено",
    "row1Receipt": "Отримано",
    "row2Type": "Оновлення замовлення",
    "row2State": "Надсилається",
    "row2Receipt": "В очікуванні",
    "row3Type": "Сервісне сповіщення",
    "row3State": "Відхилено",
    "row3Receipt": "Деталі помилки",
    "footerText": "Слідкуйте за кожним повідомленням від моменту надсилання до підтвердження мережею."
  },
  "protectionTitle": "Безпека трафіку та протидія шахрайству",
  "protectionBadge": "ЦІЛІСНІСТЬ МЕРЕЖІ",
  "protectionCards": [
    {
      "title": "Виявлення аномального трафіку",
      "desc": "Вчасно виявляйте підозрілі патерни поведінки для блокування SMS pumping та спам-атак."
    },
    {
      "title": "Відповідність нормам та списки блокування",
      "desc": "Автоматична обробка запитів на відписку для захисту репутації відправника."
    },
    {
      "title": "Захист від підробки Sender ID",
      "desc": "Захищайте альфанумеричні імена відправника від несанкціонованого використання на регульованих ринках."
    }
  ],
  "timelineBadge": "ПЛАН ІНТЕГРАЦІЇ",
  "timelineTitle": "Структурований запуск у 4 етапи",
  "timelineSubtitle": "Перевірена методологія для підключення вашої платформи без жодних перебоїв.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Аналіз вимог",
      "desc": "Узгодження країн призначення, прогнозованих обсягів, вимог до Sender ID та комерційних умов."
    },
    {
      "step": "2",
      "title": "Технічне налаштування",
      "desc": "Видача облікових даних SMPP/API та налаштування безпечних білих списків IP-адрес."
    },
    {
      "step": "3",
      "title": "Тестування зв'язку",
      "desc": "Перевірка часу відгуку, кодування символів та коректності отримання звітів DLR у реальних мережах."
    },
    {
      "step": "4",
      "title": "Запуск у продуктив",
      "desc": "Відкриття комерційного трафіку під пильним наглядом наших інженерів зв'язку."
    }
  ],
  "integrationPlan": {
    "title": "Ваше оптове SMS-підключення",
    "planBadge": "ПЛАН ІНТЕГРАЦІЇ",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "A2P повідомлення",
    "formats": "GSM-7 / Багатомовний Unicode",
    "feedback": "Звіти про доставку в реальному часі (DLR)",
    "senderSetup": "Конфігурація під конкретний ринок",
    "check1": "Перевірка облікових даних та тестування мережі",
    "check2": "Валідація відправника та отримання DLR",
    "discussNote": "Зв'яжіться з нами, щоб підібрати оптимальний інтерфейс для вашої платформи.",
    "discussBtn": "Обговорити інтеграцію"
  },
  "faqBadge": "ПОШИРЕНІ ЗАПИТАННЯ",
  "faqTitle": "Усе про оптові послуги SMS",
  "faqSubtitle": "Чіткі відповіді про інтерфейси, протоколи та якість термінації.",
  "faqs": [
    {
      "q": "Для кого призначена послуга оптових SMS?",
      "a": "Для операторів зв'язку, агрегаторів SMS, платформ CPaaS та великих компаній з міжнародним A2P трафіком значних обсягів."
    },
    {
      "q": "Які протоколи та інтерфейси підтримуються?",
      "a": "Ми підтримуємо галузевий стандарт високошвидкісного протоколу SMPP v3.4, а також сучасні REST API зі сповіщеннями через вебхуки."
    },
    {
      "q": "Чи надається допомога з реєстрацією альфанумеричного Sender ID?",
      "a": "Так, наш відділ комплаєнсу допомагає підготувати документи та зареєструвати імена у місцевих операторів згідно із законами кожної країни."
    },
    {
      "q": "Наскільки прозорими є дані про доставку повідомлень?",
      "a": "Ми надаємо DLR у реальному часі зі стандартизованими кодами помилок та повною статистикою через API та клієнтський кабінет."
    }
  ],
  "ctaBadge": "ПОЧНІТЬ СЬОГОДНІ",
  "ctaTitle": "Готові оптимізувати глобальне надсилання SMS?",
  "ctaSubtitle": "Зв'яжіться з нашими телеком-експертами, щоб розробити персональну стратегію маршрутизації для ваших пріоритетних напрямків.",
  "contactUs": "Зв'язатися з експертом",
  "ctaFootnote": "Доступні тестові середовища та консультації з аналізу трафіку для операторів і корпоративних клієнтів."
};

const he: WholesaleMessageTranslation = {
  "heroBadge": "SMS בסיטונאות • תשתית הודעות גלובלית",
  "heroTitle": "כל הודעה מחוברת באמינות מלאה.",
  "heroDesc": "שירות SMS בסיטונאות ברמת ספק תקשורת עבור מפעילים, אגרגטורים ופלטפורמות הודעות. חברו את תעבורת ה-A2P שלכם לנתיבים גלובליים עם חיבורים ישירים ושקיפות מסירה מלאה.",
  "talkToExpert": "שוחח עם מומחה",
  "exploreCapabilities": "גלה את היכולות",
  "stats": {
    "routing": "ניתוב גלובלי",
    "routingLabel": "כיסוי שווקים ממוקד",
    "traffic": "הודעות A2P",
    "trafficLabel": "תעבורה עסקית קריטית",
    "insights": "תובנות מסירה",
    "insightsLabel": "שליטה תפעולית"
  },
  "heroLiveBadge1": {
    "title": "קישוריות A2P",
    "label": "הפלטפורמה שלך. פריסה עולמית."
  },
  "heroLiveBadge2": {
    "title": "שקיפות בכל שלב",
    "sub": "שליחה • נתיב • אישור"
  },
  "whyBadge": "למה לבחור ב-INET WHOLESALE SMS",
  "whyTitle": "תשתית הודעות המעצימה כל אינטראקציה עסקית",
  "whySubtitle1": "אנו מספקים סיום SMS בינלאומי המגובה בחיבורי מפעיל ישירים, ניטור נתיבים פעיל ודוחות מסירה מפורטים.",
  "whySubtitle2": "נבנה עבור אגרגטורים, מפעילים וארגונים הדורשים יציבות מוכחת בהיקפים נרחבים.",
  "whyCards": [
    {
      "title": "הגעה לשווקים גלובליים",
      "desc": "בנו כיסוי הודעות בינלאומי עבור יעדים אסטרטגיים שהלקוחות שלכם זקוקים להם.",
      "footer": "ניתוב SMS גלובלי"
    },
    {
      "title": "חיבורי מפעיל ישירים",
      "desc": "צמצמו עיכובים מיותרים באמצעות חיבורי רשת ישירים והסכמי קישור איכותיים.",
      "footer": "איכות ברמת מפעיל"
    },
    {
      "title": "ניטור בזמן אמת",
      "desc": "עקבו אחר אחוזי מסירה, קודי DLR וזמני שהייה באמצעות טלמטריה שקופה.",
      "footer": "שקיפות תפעולית"
    },
    {
      "title": "יכולת הרחבה גמישה",
      "desc": "העבירו מיליוני הודעות ביום באמצעות ארכיטקטורת ענן שרידה ועמידה בתקלות.",
      "footer": "ביצועים ברמה ארגונית"
    }
  ],
  "capabilitiesBadge": "יכולות ליבה",
  "capabilitiesTitle": "מתוכנן במיוחד עבור תעבורת הודעות עסקית קריטית",
  "capabilitiesDesc": "חבילת שירותי הסיטונאות שלנו מנהלת את מחזור החיים המלא של תעבורת A2P באמינות מוכחת.",
  "designSolution": "תכנן פתרון",
  "solutionNote": "התייעצו עם המהנדסים שלנו כדי לייעל נתיבים ותעריפים.",
  "capabilities": [
    {
      "tag": "הודעות עסקיות",
      "title": "סיום SMS A2P בסיטונאות",
      "desc": "שליחת SMS B2C עבור אימות, התראות קריטיות ותקשורת לקוחות מאושרת מראש."
    },
    {
      "tag": "קישוריות גלובלית",
      "title": "כיסוי ניתוב בינלאומי",
      "desc": "הגיעו למפעילי רשתות סלולריות ברחבי העולם עם פרופילי נתיב המותאמים לרגולציה מקומית."
    },
    {
      "tag": "פרוטוקולים תקניים",
      "title": "אינטגרציית SMPP ו-API",
      "desc": "התחברו באמצעות קישורי SMPP v3.4 מהירים או ממשקי REST API מודרניים ומתועדים."
    },
    {
      "tag": "אמינות מסירה",
      "title": "ניהול נתיבים חכם",
      "desc": "ניתוב דינמי הבוחר אוטומטית את הנתיב הטוב ביותר בהתבסס על ביצועי מסירה בזמן אמת."
    },
    {
      "tag": "עמידה ברגולציה",
      "title": "מדיניות רישום Sender ID",
      "desc": "הדרכה מקצועית לרישום שמות שולח אלפאנומריים וקודים מקוצרים לפי החוק המקומי."
    },
    {
      "tag": "דיווח מתקדם",
      "title": "אישורי מסירה (DLR) וטלמטריה",
      "desc": "דוחות DLR מפורטים וניתוחים לאבחון תפעולי מהיר ומדויק."
    }
  ],
  "howItWorksBadge": "איך זה עובד",
  "howItWorksTitle": "מאינטגרציה לכיסוי גלובלי בשלושה שלבים",
  "howItWorksSubtitle": "תהליך מובנה להפעלת חיבור ה-SMS הבינלאומי שלכם במהירות ובבטחה.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "חברו את הפלטפורמה שלכם",
      "desc": "שלחו הודעות A2P דרך חיבור SMPP או API מוסכם עם הגדרות השולח והיעד שלכם.",
      "note": "היישום שלכם → iNet"
    },
    {
      "step": "02",
      "title": "ניתוב חכם",
      "desc": "אנו מנתבים כל הודעה דרך קישור המפעיל המתאים ביותר לפרופיל התעבורה שלכם.",
      "note": "מנוע ניתוב מפעיל"
    },
    {
      "step": "03",
      "title": "דוחות ואופטימיזציה",
      "desc": "קבלו אישורי מסירה בזמן אמת והרחיבו כמויות בליווי תמיכה טכנית רציפה.",
      "note": "DLR מאושר על ידי רשת היעד"
    }
  ],
  "networkBadge": "רשת וכיסוי",
  "networkTitle": "קישוריות ברמת מפעיל לכל יעד",
  "networkDesc": "גישה ליותר מ-1,000 רשתות סלולריות ברחבי העולם עם תשתית המותאמת לזמינות גבוהה.",
  "networkBullets": [
    "חיבורים ישירים ומנוהלים עם מפעילי תקשורת מובילים בעולם",
    "תמיכה מלאה בקידוד GSM-7 ו-Unicode רב-לשוני",
    "תשתית ענן מבוזרת גיאוגרפית עם מעבר אוטומטי במקרה תקלה",
    "ניטור רציף 24/7/365 על ידי מרכז תפעול הרשת (NOC)"
  ],
  "networkStats": [
    {
      "val": "מבוסס מפעילים",
      "label": "אסטרטגיית חיבור"
    },
    {
      "val": "מותאם לשוק",
      "label": "מדיניות נתיבים ושולחים"
    }
  ],
  "networkBadgeOverlay": {
    "title": "מגובה בשותפויות מפעילים חזקות",
    "sub": "נתיבים ישירים • נקודות קישור מנוהלות"
  },
  "networkFooterNote": "זמינות הנתיבים ומדיניות ה-Sender ID כפופות לחוקים המקומיים בכל מדינה.",
  "momentsBadge": "תרחישי שימוש",
  "momentsTitle": "נבנה עבור אינטראקציות עסקיות קריטיות",
  "momentsSubtitle": "הבטיחו מסירה מדויקת של הודעות הרגישות לזמן ויוצרות אמון אצל הלקוחות.",
  "moments": [
    {
      "title": "אימות ו-2FA",
      "desc": "תמיכה בכניסה מאובטחת, קודי אימות OTP ואישור עסקאות באמצעות SMS A2P בעדיפות גבוהה.",
      "footer": "OTP ואימות מהיר"
    },
    {
      "title": "התראות על עסקאות",
      "desc": "העברת התראות בנקאיות, אישורי הזמנות ועדכוני חשבון באופן מיידי ללא דיחוי.",
      "footer": "התראות בזמן אמת"
    },
    {
      "title": "תזכורות תורים ושירות",
      "desc": "שלחו תזכורות פגישות, סטטוסי משלוחים והודעות תחזוקה דחופות בדיוק בזמן.",
      "footer": "הודעות תפעוליות"
    },
    {
      "title": "תקשורת בהסכמה",
      "desc": "תקשרו עם לקוחות רשומים באמצעות הודעות מידע בהתאם לכללי opt-in.",
      "footer": "הודעות מבוססות הסכמה"
    }
  ],
  "intelligenceBadge": "אינטליגנציית מסירה",
  "intelligenceTitle": "שליטה מלאה ושקיפות על כל הודעה",
  "intelligenceDesc": "קבלו החלטות מושכלות על בסיס מדדי תעבורה מפורטים וניטור יזום.",
  "intelligenceBullets": [
    "מעקב מלא אחר מחזור החיים של כל הודעה בנפרד",
    "מעבר אוטומטי לנתיב גיבוי בעת תנודות ברשת",
    "התראות מיידיות בעת עליות חריגות בזמני השהייה",
    "יומני ביקורת מלאים לצורכי התאמות ובדיקות"
  ],
  "intelligenceFootnote": "כל נתוני הטלמטריה וקודי המצב מועברים בזמן אמת דרך ערוצי DLR.",
  "messageLogCard": {
    "title": "יומן מעקב הודעות",
    "badge": "תצוגת דוגמה",
    "tab1": "יומן",
    "tab2": "נתיבים",
    "tab3": "יעדים",
    "colType": "סוג הודעה",
    "colState": "מצב",
    "colReceipt": "אישור",
    "row1Type": "אימות OTP",
    "row1State": "נמסר",
    "row1Receipt": "התקבל",
    "row2Type": "עדכון הזמנה",
    "row2State": "נשלח",
    "row2Receipt": "ממתין",
    "row3Type": "התראת שירות",
    "row3State": "נדחה",
    "row3Receipt": "פרטי שגיאה",
    "footerText": "עקבו אחר כל הודעה משלב השליחה ועד לאישור רשת היעד."
  },
  "protectionTitle": "אבטחת תעבורה ומניעת הונאות",
  "protectionBadge": "שלמות הרשת",
  "protectionCards": [
    {
      "title": "זיהוי תעבורה חריגה",
      "desc": "זהו דפוסים חשודים באופן מידי כדי לחסום מתקפות SMS pumping וספאם."
    },
    {
      "title": "עמידה ברגולציה ורשימות חסימה",
      "desc": "סנכרון אוטומטי של בקשות הסרה לשמירה על מוניטין השולח."
    },
    {
      "title": "הגנה מפני זיוף Sender ID",
      "desc": "מנעו התחזות ושימוש לא מורשה בשמות שולח אלפאנומריים בשווקים מפוקחים."
    }
  ],
  "timelineBadge": "תוכנית אינטגרציה",
  "timelineTitle": "הטמעה מובנית ב-4 שלבים",
  "timelineSubtitle": "מתודולוגיה מוכחת לחיבור הפלטפורמה שלכם ללא הפרעה לפעילות.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "הגדרת דרישות",
      "desc": "אישור מדינות יעד, צפי היקפי תעבורה, דרישות Sender ID ותנאים מסחריים."
    },
    {
      "step": "2",
      "title": "הגדרה טכנית",
      "desc": "הנפקת פרטי גישה של SMPP/API והגדרת רשימות כתובות IP מורשות."
    },
    {
      "step": "3",
      "title": "בדיקות קישוריות",
      "desc": "אימות זמני השהייה, קידוד תווים וקבלת אישורי DLR תקינים ברשתות אמיתיות."
    },
    {
      "step": "4",
      "title": "מעבר לייצור",
      "desc": "פתיחת תעבורה מסחרית בליווי צמוד של מהנדסי הרשת שלנו."
    }
  ],
  "integrationPlan": {
    "title": "חיבור ה-SMS בסיטונאות שלכם",
    "planBadge": "מפרט אינטגרציה",
    "connection": "SMPP v3.4 / REST API",
    "traffic": "תעבורת הודעות A2P",
    "formats": "GSM-7 / Unicode רב-לשוני",
    "feedback": "אישורי מסירה בזמן אמת (DLR)",
    "senderSetup": "הגדרה ייעודית לפי שוק",
    "check1": "בדיקת הרשאות וחיבור לרשת",
    "check2": "אימות שולח וקליטת DLR",
    "discussNote": "דברו עם הצוות שלנו כדי לבחור את הממשק המתאים ביותר למערכות שלכם.",
    "discussBtn": "שוחח על אינטגרציה"
  },
  "faqBadge": "שאלות נפוצות",
  "faqTitle": "כל מה שחשוב לדעת על SMS בסיטונאות",
  "faqSubtitle": "תשובות ברורות לגבי ממשקים, פרוטוקולים ואיכות סיום התעבורה.",
  "faqs": [
    {
      "q": "למי מיועד שירות SMS בסיטונאות?",
      "a": "למפעילי תקשורת, אגרגטורים של SMS, פלטפורמות CPaaS וחברות גדולות עם נפחי תעבורת A2P בינלאומית גבוהים."
    },
    {
      "q": "באילו פרוטוקולים וממשקים אתם תומכים?",
      "a": "אנו תומכים בפרוטוקול התקני המהיר SMPP v3.4 וכן בממשקי REST API מודרניים עם התראות webhook."
    },
    {
      "q": "האם אתם מסייעים ברישום Sender ID אלפאנומרי?",
      "a": "כן, צוות הציות שלנו מסייע בהכנת המסמכים ורישום מול המפעילים המקומיين בהתאם לחוק בכל מדינה."
    },
    {
      "q": "עד כמה שקופים דוחות המסירה?",
      "a": "אנו מספקים DLR בזמן אמת עם קודי שגיאה תקניים ומדדי רשת מלאים דרך ה-API ופורטל הלקוחות."
    }
  ],
  "ctaBadge": "התחילו היום",
  "ctaTitle": "מוכנים לייעל את קישוריות ה-SMS הגלובלית שלכם?",
  "ctaSubtitle": "צרו קשר עם מומחי התקשורת שלנו כדי לתכנן אסטרטגיית ניתוב מותאמת אישית ליעדים המרכזיים שלכם.",
  "contactUs": "צור קשר עם מומחה",
  "ctaFootnote": "סביבות בדיקה ייעודיות וייעוץ לניתוח תעבורה זמינים עבור מפעילים וארגונים."
};

const translations: Record<string, WholesaleMessageTranslation> = {
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

export const getWholesaleMessageTranslations = (
  languageId: string,
  _regionId?: string,
  _regionName?: string
): WholesaleMessageTranslation => {
  return translations[languageId] || translations["en"];
};

export default getWholesaleMessageTranslations;

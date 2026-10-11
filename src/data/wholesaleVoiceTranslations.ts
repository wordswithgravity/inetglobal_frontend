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
  "heroBadge": "GLOBAL VOICE INFRASTRUCTURE",
  "heroTitle": "Every Call, Connected With Confidence.",
  "heroDesc": "Carrier-grade voice termination, origination and virtual numbers for businesses that need clear conversations in every market—backed by intelligent routing and 24/7 network operations.",
  "talkToExpert": "Talk to an expert",
  "exploreCapabilities": "Explore capabilities",
  "stats": {
    "countries": "190+",
    "countriesLabel": "countries reached",
    "availability": "99.999%",
    "availabilityLabel": "core availability",
    "operations": "24/7",
    "operationsLabel": "network operations"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "live calls routed"
  },
  "heroLiveBadge2": {
    "title": "Best route selected",
    "latency": "43 ms",
    "quality": "HD quality"
  },
  "whyBadge": "WHY INET VOICE",
  "whyTitle": "Voice Infrastructure That Earns Customer Trust",
  "whySubtitle1": "Built for teams that cannot compromise on call quality, reach or operational control.",
  "whySubtitle2": "One partner for international traffic, local presence and the network expertise behind every call.",
  "whyCards": [
    {
      "title": "Sound consistently clear",
      "desc": "Low-latency routes and quality-based traffic steering keep conversations natural.",
      "footer": "HD voice and codecs support"
    },
    {
      "title": "Reach more markets",
      "desc": "Terminate and originate calls across established carrier relationships worldwide.",
      "footer": "190+ countries and territories"
    },
    {
      "title": "Control every route",
      "desc": "Set pricing, quality and destination rules with real-time visibility into performance.",
      "footer": "Flexible LCR and quality routing"
    },
    {
      "title": "Scale without friction",
      "desc": "Add capacity, numbers and new markets through one resilient global platform.",
      "footer": "Elastic SIP capacity"
    }
  ],
  "capabilitiesBadge": "OUR CORE CAPABILITIES",
  "capabilitiesTitle": "One Voice Stack, Built Around Your Traffic",
  "capabilitiesDesc": "Combine only what you need, then expand by market, number type or routing policy without rebuilding your communications layer.",
  "designSolution": "Design your solution",
  "solutionNote": "Solution design and interoperability testing included",
  "capabilities": [
    {
      "title": "Wholesale termination",
      "desc": "Route international voice traffic through quality-managed, multi-carrier paths.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP trunking",
      "desc": "Connect PBX, contact center and communications platforms with elastic capacity.",
      "tag": "Inbound + outbound"
    },
    {
      "title": "Virtual numbers",
      "desc": "Build a trusted local presence with geographic, national and toll-free numbers.",
      "tag": "Global DID inventory"
    },
    {
      "title": "Fraud protection",
      "desc": "Protect margins with destination controls, anomaly alerts and spend thresholds.",
      "tag": "Always-on monitoring"
    },
    {
      "title": "Quality analytics",
      "desc": "Track ASR, ACD, PDD, jitter and completion rates by route and destination.",
      "tag": "Real-time reporting"
    },
    {
      "title": "Custom routing",
      "desc": "Prioritize routes by quality, price, geography or customer-specific policy.",
      "tag": "Rules-based control"
    }
  ],
  "networkBadge": "RELIABILITY AT GLOBAL SCALE",
  "networkTitle": "A Network Designed To Keep Conversations Moving",
  "networkDesc": "Redundant interconnects, proactive route management and round-the-clock engineering protect every call from congestion and disruption.",
  "networkBullets": [
    "Multi-carrier redundancy by destination",
    "Active quality scoring and automatic failover",
    "Geo-distributed signaling and media infrastructure",
    "Proactive fraud detection and traffic controls"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Core network availability"
    },
    {
      "val": "190+",
      "label": "Countries and territories"
    },
    {
      "val": "24/7",
      "label": "Global network operations"
    },
    {
      "val": "< 1 sec",
      "label": "Automated route response"
    }
  ],
  "liveStatus": {
    "title": "All systems operational",
    "check": "Last route check 12 sec ago",
    "live": "LIVE"
  },
  "momentsBadge": "BUILT FOR REAL CONVERSATION",
  "momentsTitle": "Voice Services For Every Critical Moment",
  "momentsSubtitle": "From everyday customer care to high-priority alerts, iNet Global gives teams the reach and control to keep people connected.",
  "moments": [
    {
      "title": "Contact centers",
      "desc": "Give distributed agents consistent inbound and outbound voice across regions.",
      "footer": "Local presence • overflow routing"
    },
    {
      "title": "Fintech & platforms",
      "desc": "Power verified calls, collections and service workflows with secure global reach.",
      "footer": "CLI delivery • Fraud controls"
    },
    {
      "title": "Travel & hospitality",
      "desc": "Connect guests and operations teams before, during and after every journey.",
      "footer": "Local numbers • Multilingual reach"
    },
    {
      "title": "Critical notifications",
      "desc": "Deliver time-sensitive calls with prioritized routes and real-time monitoring.",
      "footer": "Priority routing • Instant failover"
    }
  ],
  "timelineBadge": "LAUNCH WITH CONFIDENCE",
  "timelineTitle": "From Requirements To Live Traffic, Together",
  "timelineSubtitle": "A voice engineer stays with your team through design, testing and traffic migration—so every route is ready before launch.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Scope",
      "desc": "Confirm markets, volumes, codecs and quality targets."
    },
    {
      "step": "2",
      "title": "Connect",
      "desc": "Exchange SIP details and secure your interconnect."
    },
    {
      "step": "3",
      "title": "Validate",
      "desc": "Run interoperability tests and CLI presentation tests."
    },
    {
      "step": "4",
      "title": "Launch",
      "desc": "Move traffic in stages with an engineer monitoring."
    }
  ],
  "terminal": {
    "title": "Your voice connection",
    "readyBadge": "READY TO TEST",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP Allowlist + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Automatic secondary route",
    "interopNote": "Interop checklist included",
    "viewApiDocs": "View API docs"
  },
  "testimonialBadge": "TRUSTED IN PRODUCTION",
  "testimonialTitle": "A Voice Partner Your Operations Team Can Rely On",
  "testimonialSubtitle": "Transparent performance, responsive engineers and infrastructure built for business-critical communications.",
  "testimonialPills": [
    "Encrypted transport",
    "Quality monitoring",
    "Fraud controls"
  ],
  "quote": "iNet Global gave us the route visibility and hands-on support to consolidate voice traffic across three regions without compromising the customer experience.",
  "authorName": "Maya Chen",
  "authorRole": "VP, Network Operations • Global CX platform",
  "stat1Val": "18%",
  "stat1Label": "lower route cost",
  "stat2Val": "+4.2 pts",
  "stat2Label": "ASR improvement",
  "ctaBadge": "LET'S BUILD YOUR VOICE NETWORK",
  "ctaTitle": "Ready For Clearer Calls And Smarter Global Reach",
  "ctaSubtitle": "Tell us where you need to connect, how much traffic you carry and what quality means to your business. Our voice team will design the right routing and number strategy.",
  "contactUs": "Contact us",
  "responseTime": "Response within one business day"
};

const es: WholesaleVoiceTranslation = {
  "heroBadge": "INFRAESTRUCTURA GLOBAL DE VOZ",
  "heroTitle": "Cada Llamada, Conectada Con Total Confianza.",
  "heroDesc": "Terminación de voz de nivel operador, originación y números virtuales para empresas que necesitan conversaciones nítidas en todos los mercados, con enrutamiento inteligente y operaciones 24/7.",
  "talkToExpert": "Hablar con un experto",
  "exploreCapabilities": "Explorar capacidades",
  "stats": {
    "countries": "190+",
    "countriesLabel": "países alcanzados",
    "availability": "99.999%",
    "availabilityLabel": "disponibilidad del núcleo",
    "operations": "24/7",
    "operationsLabel": "operaciones de red"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "llamadas en vivo enrutadas"
  },
  "heroLiveBadge2": {
    "title": "Mejor ruta seleccionada",
    "latency": "43 ms",
    "quality": "Calidad HD"
  },
  "whyBadge": "POR QUÉ INET VOICE",
  "whyTitle": "Infraestructura de Voz que Genera Confianza",
  "whySubtitle1": "Creado para equipos que no pueden comprometer la calidad de llamada, el alcance o el control operativo.",
  "whySubtitle2": "Un único socio para tráfico internacional, presencia local y experiencia en redes detrás de cada llamada.",
  "whyCards": [
    {
      "title": "Sonido nítido constante",
      "desc": "Rutas de baja latencia y gestión de tráfico por calidad mantienen conversaciones naturales.",
      "footer": "Voz HD y soporte de códecs"
    },
    {
      "title": "Alcance a más mercados",
      "desc": "Termine y origine llamadas mediante relaciones establecidas con operadores en todo el mundo.",
      "footer": "190+ países y territorios"
    },
    {
      "title": "Controle cada ruta",
      "desc": "Establezca reglas de precio, calidad y destino con visibilidad en tiempo real del rendimiento.",
      "footer": "LCR flexible y enrutamiento por calidad"
    },
    {
      "title": "Escale sin fricción",
      "desc": "Añada capacidad, números y nuevos mercados a través de una plataforma global resiliente.",
      "footer": "Capacidad SIP elástica"
    }
  ],
  "capabilitiesBadge": "NUESTRAS CAPACIDADES CLAVE",
  "capabilitiesTitle": "Una Pila de Voz Diseñada para su Tráfico",
  "capabilitiesDesc": "Combine solo lo que necesita y luego expanda por mercado, tipo de número o política de enrutamiento sin reconstruir su capa de telecomunicaciones.",
  "designSolution": "Diseñe su solución",
  "solutionNote": "Diseño de solución y pruebas de interoperabilidad incluidas",
  "capabilities": [
    {
      "title": "Terminación mayorista",
      "desc": "Enrute tráfico de voz internacional a través de rutas multioperador gestionadas por calidad.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "Troncales SIP",
      "desc": "Conecte PBX, centros de contacto y plataformas de comunicación con capacidad elástica.",
      "tag": "Entrante + saliente"
    },
    {
      "title": "Números virtuales",
      "desc": "Construya presencia local confiable con números geográficos, nacionales y gratuitos.",
      "tag": "Inventario global de DID"
    },
    {
      "title": "Protección contra fraude",
      "desc": "Proteja márgenes con controles de destino, alertas de anomalías y límites de gasto.",
      "tag": "Monitoreo siempre activo"
    },
    {
      "title": "Analítica de calidad",
      "desc": "Rastree ASR, ACD, PDD, jitter y tasas de finalización por ruta y destino.",
      "tag": "Informes en tiempo real"
    },
    {
      "title": "Enrutamiento personalizado",
      "desc": "Priorice rutas por calidad, precio, geografía o políticas específicas del cliente.",
      "tag": "Control basado en reglas"
    }
  ],
  "networkBadge": "CONFIABILIDAD A ESCALA GLOBAL",
  "networkTitle": "Una Red Diseñada para Mantener las Conversaciones en Marcha",
  "networkDesc": "Interconexiones redundantes, gestión proactiva de rutas e ingeniería ininterrumpida protegen cada llamada contra congestión e interrupciones.",
  "networkBullets": [
    "Redundancia multioperador por destino",
    "Puntuación activa de calidad y conmutación por error automática",
    "Infraestructura de señalización y medios geodistribuida",
    "Detección proactiva de fraudes y controles de tráfico"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Disponibilidad del núcleo"
    },
    {
      "val": "190+",
      "label": "Países y territorios"
    },
    {
      "val": "24/7",
      "label": "Operaciones globales de red"
    },
    {
      "val": "< 1 seg",
      "label": "Respuesta de ruta automatizada"
    }
  ],
  "liveStatus": {
    "title": "Todos los sistemas operativos",
    "check": "Última comprobación hace 12 seg",
    "live": "EN VIVO"
  },
  "momentsBadge": "DISEÑADO PARA CONVERSACIONES REALES",
  "momentsTitle": "Servicios de Voz para Cada Momento Crítico",
  "momentsSubtitle": "Desde atención al cliente cotidiana hasta alertas de alta prioridad, iNet Global brinda el alcance y control para mantener a las personas conectadas.",
  "moments": [
    {
      "title": "Contact Centers",
      "desc": "Brinde a agentes distribuidos voz consistente entrante y saliente en todas las regiones.",
      "footer": "Presencia local • enrutamiento de desbordamiento"
    },
    {
      "title": "Fintech y plataformas",
      "desc": "Potencie llamadas verificadas, cobranzas y flujos de servicio con alcance global seguro.",
      "footer": "Entrega de CLI • Controles de fraude"
    },
    {
      "title": "Viajes y hospitalidad",
      "desc": "Conecte a huéspedes y equipos operativos antes, durante y después de cada viaje.",
      "footer": "Números locales • Alcance multilingüe"
    },
    {
      "title": "Notificaciones críticas",
      "desc": "Entregue llamadas urgentes con rutas priorizadas y monitoreo en tiempo real.",
      "footer": "Enrutamiento prioritario • Conmutación instantánea"
    }
  ],
  "timelineBadge": "LANZAMIENTO CON CONFIANZA",
  "timelineTitle": "De los Requisitos al Tráfico en Vivo, Juntos",
  "timelineSubtitle": "Un ingeniero de voz acompaña a su equipo durante el diseño, pruebas y migración de tráfico para que cada ruta esté lista antes del lanzamiento.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Alcance",
      "desc": "Confirme mercados, volúmenes, códecs y objetivos de calidad."
    },
    {
      "step": "2",
      "title": "Conexión",
      "desc": "Intercambie detalles SIP y asegure su interconexión."
    },
    {
      "step": "3",
      "title": "Validación",
      "desc": "Ejecute pruebas de interoperabilidad y presentación de CLI."
    },
    {
      "step": "4",
      "title": "Lanzamiento",
      "desc": "Transfiera tráfico por etapas con monitoreo de un ingeniero."
    }
  ],
  "terminal": {
    "title": "Su conexión de voz",
    "readyBadge": "LISTO PARA PROBAR",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Lista blanca IP + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Ruta secundaria automática",
    "interopNote": "Lista de verificación de interop incluida",
    "viewApiDocs": "Ver documentación API"
  },
  "testimonialBadge": "DE CONFIANZA EN PRODUCCIÓN",
  "testimonialTitle": "Un Socio de Voz en el que su Equipo Puede Confiar",
  "testimonialSubtitle": "Rendimiento transparente, ingenieros receptivos e infraestructura construida para comunicaciones empresariales críticas.",
  "testimonialPills": [
    "Transporte cifrado",
    "Monitoreo de calidad",
    "Controles de fraude"
  ],
  "quote": "iNet Global nos brindó visibilidad de rutas y soporte directo para consolidar el tráfico de voz en tres regiones sin comprometer la experiencia del cliente.",
  "authorName": "Maya Chen",
  "authorRole": "Vicepresidenta de Operaciones de Red • Plataforma global CX",
  "stat1Val": "18%",
  "stat1Label": "menor costo de ruta",
  "stat2Val": "+4.2 pts",
  "stat2Label": "mejora de ASR",
  "ctaBadge": "CONSTRUYAMOS SU RED DE VOZ",
  "ctaTitle": "Listos para Llamadas más Claras y Alcance Global Inteligente",
  "ctaSubtitle": "Indíquenos dónde necesita conectarse, cuánto tráfico maneja y qué significa la calidad para su negocio. Nuestro equipo diseñará la estrategia perfecta.",
  "contactUs": "Contáctenos",
  "responseTime": "Respuesta en un día hábil"
};

const zh: WholesaleVoiceTranslation = {
  "heroBadge": "全球语音基础设施",
  "heroTitle": "每一次通话，皆以卓越品质自信连接。",
  "heroDesc": "面向全球企业的电信级语音落地、发起及虚拟号码服务，结合智能路由调度与 7×24 小时全天候网络运维保障，确保各市场清晰通话。",
  "talkToExpert": "联系专家咨询",
  "exploreCapabilities": "探索平台能力",
  "stats": {
    "countries": "190+",
    "countriesLabel": "覆盖国家及地区",
    "availability": "99.999%",
    "availabilityLabel": "核心网可用性",
    "operations": "24/7",
    "operationsLabel": "全天候网络运营中心"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "正在并发路由通话"
  },
  "heroLiveBadge2": {
    "title": "智能路由已锁定",
    "latency": "43 毫秒",
    "quality": "高清通话音质"
  },
  "whyBadge": "为什么选择 INET 语音",
  "whyTitle": "赢得客户信任的企业级语音通信底座",
  "whySubtitle1": "专为对通话音质、全球覆盖范围及运营控制力有严苛要求的企业团队量身打造。",
  "whySubtitle2": "一站式合作伙伴，提供国际话务落地、本地号码覆盖及每通电话背后的顶尖网络专长。",
  "whyCards": [
    {
      "title": "始终如一的清晰音质",
      "desc": "超低延迟线路与基于质量指标的动态流量调度，确保跨国通话如同面对面交谈。",
      "footer": "高清语音及全主流编解码支持"
    },
    {
      "title": "广泛触达全球市场",
      "desc": "依托与全球顶级一级运营商建立的长期直连互联，轻松完成跨国呼叫接入与落地。",
      "footer": "覆盖 190+ 国家和地区"
    },
    {
      "title": "精细管控每条路由",
      "desc": "根据价格、质量及特定目的地规则灵活调配，全流程数据实时透明监控。",
      "footer": "弹性 LCR 最低成本与优质路由"
    },
    {
      "title": "无感弹性扩展",
      "desc": "依托高弹性全球分布式架构，即时扩充并发通道、号码资源并拓展新市场。",
      "footer": "弹性 SIP 并发容量"
    }
  ],
  "capabilitiesBadge": "核心业务能力",
  "capabilitiesTitle": "一体化语音通信栈，围绕您的话务量定制",
  "capabilitiesDesc": "按需灵活组合所需功能，后续可随业务扩展按国家市场、号码类型或路由策略扩容，无需重构现有通信层。",
  "designSolution": "定制专属方案",
  "solutionNote": "包含架构方案设计与端到端互通性联调测试",
  "capabilities": [
    {
      "title": "批发语音落地",
      "desc": "通过质量受控的多运营商优质路径，分发并落地高并发国际语音话务。",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP 中继服务",
      "desc": "为企业 PBX、呼叫中心及现代通信应用平台提供大容量弹性连接中继。",
      "tag": "支持呼入与呼出"
    },
    {
      "title": "全球虚拟号码",
      "desc": "提供全球地理号码、国家号码及免费 800 号码，快速构建值得信赖的本地业务形象。",
      "tag": "全球 DID 号码资源库"
    },
    {
      "title": "反欺诈与风险控制",
      "desc": "通过目的地访问控制、异常流量突发预警及消费限额保护企业利润。",
      "tag": "实时全天候风控监测"
    },
    {
      "title": "通话质量分析",
      "desc": "分路由及目的地实时统计 ASR 接通率、ACD 通话时长、PDD 拨号延迟及抖动指标。",
      "tag": "全维度实时报表"
    },
    {
      "title": "自定义路由引擎",
      "desc": "支持按音质优先、成本优先、地理就近或客户私有策略灵活调配通信路由。",
      "tag": "规则化智能路由调度"
    }
  ],
  "networkBadge": "全球级的高可靠性",
  "networkTitle": "专为保障流畅沟通而设计的全球网络",
  "networkDesc": "多重冗余互联互通、前瞻性线路治理与 7×24 小时资深工程运维团队，全面守护每通电话免受拥堵与中断。",
  "networkBullets": [
    "面向所有目的地的多运营商线路自动冗余",
    "动态通话质量打分与毫秒级故障自动倒换",
    "全球分布式信令与流媒体传输基础设施",
    "前瞻性话务防欺诈拦截与流量异常控制"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "核心网络可用性"
    },
    {
      "val": "190+",
      "label": "覆盖国家及地区"
    },
    {
      "val": "24/7",
      "label": "全球网络运营中心"
    },
    {
      "val": "< 1 秒",
      "label": "自动化路由故障响应"
    }
  ],
  "liveStatus": {
    "title": "全部系统运行正常",
    "check": "上次路由健康检查于 12 秒前",
    "live": "在线运行"
  },
  "momentsBadge": "为关键业务沟通而生",
  "momentsTitle": "赋能企业每一个关键通话时刻",
  "momentsSubtitle": "从日常客户服务到高优先级紧急外呼通知，iNet Global 为团队提供覆盖范围与深度控制力，保持时刻在线。",
  "moments": [
    {
      "title": "全球联络中心",
      "desc": "为跨国分布式客服坐席提供高品质一致的双向语音呼入与呼出。",
      "footer": "本地业务展现 • 话务溢流调度"
    },
    {
      "title": "金融科技与平台",
      "desc": "以安全合规的全球通信网络支撑身份核验电话、催收及业务服务工作流。",
      "footer": "合规主叫呈现 • 防欺诈风控"
    },
    {
      "title": "差旅与酒店业",
      "desc": "在旅客行程前、中、后全程高效连接客户与后台运营调度团队。",
      "footer": "本地号码资源 • 多语言服务支持"
    },
    {
      "title": "关键紧急通知",
      "desc": "通过最高优先级的专用路由通道与实时状态监控，秒级送达紧急语音电话。",
      "footer": "最高优先级路由 • 瞬间故障倒换"
    }
  ],
  "timelineBadge": "从容上线保障",
  "timelineTitle": "从业务需求到话务割接上线，全程并肩协作",
  "timelineSubtitle": "资深语音通信架构师全程参与您的方案设计、联调压测与流量割接，确保每条线路在上线前达到最佳状态。",
  "timelineSteps": [
    {
      "step": "1",
      "title": "需求评估",
      "desc": "明确目标国家市场、预估并发量、编解码要求及质量指标。"
    },
    {
      "step": "2",
      "title": "互联对接",
      "desc": "互通 SIP 参数配置，建立安全可靠的私网或公网加密互联。"
    },
    {
      "step": "3",
      "title": "测试验证",
      "desc": "进行端到端互通性测试、编解码适配以及主叫号码 CLI 显示测试。"
    },
    {
      "step": "4",
      "title": "割接上线",
      "desc": "由专属架构师实时保障，分阶段平稳将业务流量割接至生产线路。"
    }
  ],
  "terminal": {
    "title": "您的语音互联配置",
    "readyBadge": "就绪待测试",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP 白名单 + TLS 加密",
    "media": "SRTP • G.711 • G.729",
    "failover": "自动主备冗余备用路由",
    "interopNote": "已附带完整联调清单",
    "viewApiDocs": "查阅 API 开发文档"
  },
  "testimonialBadge": "生产环境真实验证",
  "testimonialTitle": "值得您运维团队全权信赖的全球语音合作伙伴",
  "testimonialSubtitle": "透明清晰的运行指标、快速响应的技术专家以及专为业务关键通信构建的电信级底层体系。",
  "testimonialPills": [
    "全链路加密传输",
    "全时段质量监控",
    "智能防欺诈风控"
  ],
  "quote": "iNet Global 为我们提供了极其清晰的路由可见性和周到的技术支持，帮助我们在不牺牲任何客户体验的前提下，平稳整合了三大洲的语音话务。",
  "authorName": "陈美亚 (Maya Chen)",
  "authorRole": "网络运营副总裁 • 全球客户体验平台",
  "stat1Val": "18%",
  "stat1Label": "降低综合路由通信成本",
  "stat2Val": "+4.2 %",
  "stat2Label": "接通率 ASR 显著提升",
  "ctaBadge": "立即构建您的语音通信网络",
  "ctaTitle": "准备好迎接更清晰的通话质量与更智能的全球覆盖了吗？",
  "ctaSubtitle": "告诉我们您的业务落地目标、预计并发话务规模及音质要求。我们的语音专家团队将为您设计兼顾品质与成本的最佳路由与号码方案。",
  "contactUs": "联系我们",
  "responseTime": "1 个工作日内快速响应"
};

const hi: WholesaleVoiceTranslation = {
  "heroBadge": "ग्लोबल वॉइस इन्फ्रास्ट्रक्चर",
  "heroTitle": "हर कॉल, आत्मविश्वास और स्पष्टता के साथ कनेक्टेड।",
  "heroDesc": "हर बाजार में स्पष्ट संवाद की आवश्यकता वाले व्यवसायों के लिए कैरियर-ग्रेड वॉइस टर्मिनेशन, ऑरिजिनेशन और वर्चुअल नंबर—बुद्धिमान रूटिंग और 24/7 नेटवर्क संचालन द्वारा समर्थित।",
  "talkToExpert": "विशेषज्ञ से बात करें",
  "exploreCapabilities": "क्षमताओं का अन्वेषण करें",
  "stats": {
    "countries": "190+",
    "countriesLabel": "देशों तक पहुंच",
    "availability": "99.999%",
    "availabilityLabel": "कोर उपलब्धता",
    "operations": "24/7",
    "operationsLabel": "नेटवर्क संचालन केंद्र"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "सक्रिय कॉल रूटेड"
  },
  "heroLiveBadge2": {
    "title": "सर्वश्रेष्ठ रूट चयनित",
    "latency": "43 एमएस",
    "quality": "एचडी गुणवत्ता"
  },
  "whyBadge": "INET वॉइस क्यों चुनें",
  "whyTitle": "वॉइस इन्फ्रास्ट्रक्चर जो ग्राहकों का विश्वास जीतता है",
  "whySubtitle1": "उन टीमों के लिए निर्मित जो कॉल गुणवत्ता, पहुंच या परिचालन नियंत्रण पर समझौता नहीं कर सकतीं।",
  "whySubtitle2": "अंतरराष्ट्रीय ट्रैफिक, स्थानीय उपस्थिति और हर कॉल के पीछे नेटवर्क विशेषज्ञता के लिए एक विश्वसनीय भागीदार।",
  "whyCards": [
    {
      "title": "लगातार स्पष्ट आवाज",
      "desc": "कम विलंबता वाले रूट और गुणवत्ता-आधारित ट्रैफिक स्टीयरिंग बातचीत को स्वाभाविक बनाए रखते हैं।",
      "footer": "एचडी वॉइस और कोडेक्स समर्थन"
    },
    {
      "title": "अधिक बाजारों तक पहुंचें",
      "desc": "दुनिया भर में स्थापित कैरियर संबंधों के माध्यम से कॉल समाप्त और उत्पन्न करें।",
      "footer": "190+ देश और क्षेत्र"
    },
    {
      "title": "हर रूट पर पूर्ण नियंत्रण",
      "desc": "प्रदर्शन में वास्तविक समय की दृश्यता के साथ मूल्य निर्धारण, गुणवत्ता और गंतव्य नियम निर्धारित करें।",
      "footer": "लचीला LCR और गुणवत्ता रूटिंग"
    },
    {
      "title": "बिना किसी बाधा के विस्तार",
      "desc": "एक लचीले वैश्विक प्लेटफॉर्म के माध्यम से क्षमता, नंबर और नए बाजार आसानी से जोड़ें।",
      "footer": "इलास्टिक एसआईपी क्षमता"
    }
  ],
  "capabilitiesBadge": "हमारी मुख्य क्षमताएं",
  "capabilitiesTitle": "एक वॉइस स्टैक, आपके ट्रैफिक के अनुरूप निर्मित",
  "capabilitiesDesc": "केवल वही चुनें जिसकी आपको आवश्यकता है, फिर अपने संचार ढांचे को दोबारा बनाए बिना बाजार, नंबर प्रकार या रूटिंग नीति का विस्तार करें।",
  "designSolution": "अपना समाधान डिजाइन करें",
  "solutionNote": "समाधान डिजाइन और इंटरऑपरेबिलिटी परीक्षण शामिल",
  "capabilities": [
    {
      "title": "होलसेल टर्मिनेशन",
      "desc": "गुणवत्ता-प्रबंधित, मल्टी-कैरियर पाथवे के माध्यम से अंतरराष्ट्रीय वॉइस ट्रैफिक रूट करें।",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "एसआईपी ट्रंकिंग",
      "desc": "इलास्टिक क्षमता के साथ पीबीएक्स, संपर्क केंद्र और संचार प्लेटफॉर्म कनेक्ट करें।",
      "tag": "इनबाउंड + आउटबाउंड"
    },
    {
      "title": "वर्चुअल नंबर",
      "desc": "भौगोलिक, राष्ट्रीय और टोल-फ्री नंबरों के साथ एक विश्वसनीय स्थानीय उपस्थिति बनाएं।",
      "tag": "ग्लोबल DID इन्वेंटरी"
    },
    {
      "title": "धोखाधड़ी से सुरक्षा",
      "desc": "गंतव्य नियंत्रण, विसंगति अलर्ट और खर्च सीमा के साथ अपने मार्जिन की रक्षा करें।",
      "tag": "हमेशा सक्रिय निगरानी"
    },
    {
      "title": "गुणवत्ता एनालिटिक्स",
      "desc": "मार्ग और गंतव्य के अनुसार ASR, ACD, PDD, जिटर और पूर्णता दर ट्रैक करें।",
      "tag": "रीयल-टाइम रिपोर्टिंग"
    },
    {
      "title": "कस्टम रूटिंग",
      "desc": "गुणवत्ता, मूल्य, भूगोल या ग्राहक-विशिष्ट नीति के आधार पर मार्गों को प्राथमिकता दें।",
      "tag": "नियम-आधारित नियंत्रण"
    }
  ],
  "networkBadge": "वैश्विक स्तर पर विश्वसनीयता",
  "networkTitle": "बातचीत को निर्बाध रखने के लिए डिजाइन किया गया नेटवर्क",
  "networkDesc": "अतिरेक इंटरकनेक्ट, सक्रिय रूट प्रबंधन और 24 घंटे इंजीनियरिंग हर कॉल को भीड़भाड़ और व्यवधान से बचाते हैं।",
  "networkBullets": [
    "गंतव्य के अनुसार मल्टी-कैरियर अतिरेक",
    "सक्रिय गुणवत्ता स्कोरिंग और स्वचालित फेलओवर",
    "भू-वितरित सिग्नलिंग और मीडिया अवसंरचना",
    "सक्रिय धोखाधड़ी का पता लगाने और यातायात नियंत्रण"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "कोर नेटवर्क उपलब्धता"
    },
    {
      "val": "190+",
      "label": "देश और क्षेत्र"
    },
    {
      "val": "24/7",
      "label": "वैश्विक नेटवर्क संचालन"
    },
    {
      "val": "< 1 सेकंड",
      "label": "स्वचालित मार्ग प्रतिक्रिया"
    }
  ],
  "liveStatus": {
    "title": "सभी प्रणालियां चालू हैं",
    "check": "अंतिम रूट चेक 12 सेकंड पहले",
    "live": "लाइव"
  },
  "momentsBadge": "वास्तविक बातचीत के लिए निर्मित",
  "momentsTitle": "हर महत्वपूर्ण क्षण के लिए वॉइस सेवाएं",
  "momentsSubtitle": "दैनिक ग्राहक सेवा से लेकर उच्च-प्राथमिकता वाले अलर्ट तक, iNet Global टीमों को लोगों को जोड़े रखने की शक्ति देता है।",
  "moments": [
    {
      "title": "कॉन्टैक्ट सेंटर्स",
      "desc": "विभिन्न क्षेत्रों में वितरित एजेंटों को लगातार स्पष्ट इनबाउंड और आउटबाउंड वॉइस प्रदान करें।",
      "footer": "स्थानीय उपस्थिति • ओवरफ्लो रूटिंग"
    },
    {
      "title": "फिनटेक और प्लेटफॉर्म",
      "desc": "सुरक्षित वैश्विक पहुंच के साथ सत्यापित कॉल, संग्रह और सेवा वर्कफ़्लो को सशक्त बनाएं।",
      "footer": "CLI डिलीवरी • धोखाधड़ी नियंत्रण"
    },
    {
      "title": "यात्रा और आतिथ्य",
      "desc": "हर यात्रा से पहले, उसके दौरान और बाद में मेहमानों और परिचालन टीमों को कनेक्ट करें।",
      "footer": "स्थानीय नंबर • बहुभाषी पहुंच"
    },
    {
      "title": "महत्वपूर्ण सूचनाएं",
      "desc": "प्राथमिकता वाले मार्गों और रीयल-टाइम मॉनिटरिंग के साथ समय-संवेदनशील कॉल डिलीवर करें।",
      "footer": "प्राथमिकता रूटिंग • त्वरित फेलओवर"
    }
  ],
  "timelineBadge": "विश्वास के साथ लॉन्च करें",
  "timelineTitle": "आवश्यकताओं से लेकर लाइव ट्रैफिक तक, एक साथ",
  "timelineSubtitle": "एक समर्पित वॉइस इंजीनियर डिजाइन, परीक्षण और ट्रैफिक माइग्रेशन के दौरान आपकी टीम के साथ रहता है ताकि हर मार्ग तैयार रहे।",
  "timelineSteps": [
    {
      "step": "1",
      "title": "दायरा",
      "desc": "बाजारों, मात्रा, कोडेक्स और गुणवत्ता लक्ष्यों की पुष्टि करें।"
    },
    {
      "step": "2",
      "title": "कनेक्ट करें",
      "desc": "एसआईपी विवरण साझा करें और अपना इंटरकनेक्ट सुरक्षित करें।"
    },
    {
      "step": "3",
      "title": "मान्य करें",
      "desc": "इंटरऑपरेबिलिटी परीक्षण और सीएलआई प्रस्तुति परीक्षण चलाएं।"
    },
    {
      "step": "4",
      "title": "लॉन्च करें",
      "desc": "इंजीनियर की निगरानी में चरणों में ट्रैफिक ट्रांसफर करें।"
    }
  ],
  "terminal": {
    "title": "आपका वॉइस कनेक्शन",
    "readyBadge": "परीक्षण के लिए तैयार",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "आईपी अनुमति सूची + टीएलएस",
    "media": "SRTP • G.711 • G.729",
    "failover": "स्वचालित द्वितीयक मार्ग",
    "interopNote": "इंटरऑप चेकलिस्ट शामिल",
    "viewApiDocs": "एपीआई दस्तावेज देखें"
  },
  "testimonialBadge": "उत्पादन में विश्वसनीय",
  "testimonialTitle": "एक वॉइस पार्टनर जिस पर आपकी संचालन टीम भरोसा कर सकती है",
  "testimonialSubtitle": "पारदर्शी प्रदर्शन, उत्तरदायी इंजीनियर और मिशन-महत्वपूर्ण संचार के लिए निर्मित बुनियादी ढांचा।",
  "testimonialPills": [
    "एन्क्रिप्टेड ट्रांसपोर्ट",
    "गुणवत्ता निगरानी",
    "धोखाधड़ी नियंत्रण"
  ],
  "quote": "iNet Global ने हमें ग्राहक अनुभव से समझौता किए बिना तीन क्षेत्रों में वॉइस ट्रैफिक को समेकित करने के लिए उत्कृष्ट रूट दृश्यता और सहायता प्रदान की।",
  "authorName": "माया चेन",
  "authorRole": "उपाध्यक्ष, नेटवर्क संचालन • ग्लोबल CX प्लेटफॉर्म",
  "stat1Val": "18%",
  "stat1Label": "कम रूट लागत",
  "stat2Val": "+4.2 अंक",
  "stat2Label": "ASR में सुधार",
  "ctaBadge": "आइए अपना वॉइस नेटवर्क बनाएं",
  "ctaTitle": "स्पष्ट कॉल और स्मार्ट वैश्विक पहुंच के लिए तैयार",
  "ctaSubtitle": "हमें बताएं कि आपको कहां कनेक्ट करने की आवश्यकता है, आपका ट्रैफिक कितना है। हमारी टीम सही रूटिंग रणनीति तैयार करेगी।",
  "contactUs": "संपर्क करें",
  "responseTime": "एक कार्यदिवस के भीतर उत्तर"
};

const ar: WholesaleVoiceTranslation = {
  "heroBadge": "البنية التحتية العالمية للصوت",
  "heroTitle": "كل مكالمة، متصلة بثقة تامة.",
  "heroDesc": "إنهاء وتمرير المكالمات والأرقام الافتراضية بمستوى المشغلين للشركات التي تتطلب محادثات واضحة في كل سوق—مدعومة بتوجيه ذكي وعمليات شبكة على مدار الساعة.",
  "talkToExpert": "تحدث إلى خبير",
  "exploreCapabilities": "استكشف الإمكانيات",
  "stats": {
    "countries": "190+",
    "countriesLabel": "دولة مغطاة",
    "availability": "99.999%",
    "availabilityLabel": "جاهزية الشبكة الأساسية",
    "operations": "24/7",
    "operationsLabel": "عمليات الشبكة"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "مكالمة حية موجهة"
  },
  "heroLiveBadge2": {
    "title": "تم اختيار أفضل مسار",
    "latency": "43 مللي ثانية",
    "quality": "جودة فائقة HD"
  },
  "whyBadge": "لماذا صوت INET",
  "whyTitle": "بنية تحتية صوتية تكتسب ثقة العملاء",
  "whySubtitle1": "صُممت للفرق التي لا تقبل المساومة على جودة الاتصال أو الوصول أو التحكم التشغيلي.",
  "whySubtitle2": "شريك موحد لحركة المرور الدولية والحضور المحلي والخبرة الشبكية وراء كل مكالمة.",
  "whyCards": [
    {
      "title": "صوت واضح باستمرار",
      "desc": "مسارات بزمن استجابة منخفض وتوجيه حركة مرور قائم على الجودة للحفاظ على طبيعية المحادثات.",
      "footer": "صوت HD ودعم كامل لبرامج الترميز"
    },
    {
      "title": "الوصول إلى مزيد من الأسواق",
      "desc": "إنهاء وتمرير المكالمات عبر علاقات مشغلين عريقة وموثوقة حول العالم.",
      "footer": "أكثر من 190 دولة ومنطقة"
    },
    {
      "title": "التحكم في كل مسار",
      "desc": "تحديد قواعد التسعير والجودة والوجهة مع رؤية فورية للأداء اللحظي.",
      "footer": "توجيه LCR مرن وتوجيه قائم على الجودة"
    },
    {
      "title": "التوسع دون عوائق",
      "desc": "إضافة سعة وأرقام وأسواق جديدة عبر منصة عالمية واحدة فائقة المرونة.",
      "footer": "سعة SIP مرنة وقابلة للتمدد"
    }
  ],
  "capabilitiesBadge": "إمكانياتنا الأساسية",
  "capabilitiesTitle": "منظومة صوتية واحدة، مبنية حول حركة مرورك",
  "capabilitiesDesc": "اجمع فقط ما تحتاجه، ثم توسع حسب السوق أو نوع الرقم أو سياسة التوجيه دون إعادة بناء طبقة اتصالاتك.",
  "designSolution": "صمم حلك المخصص",
  "solutionNote": "يشمل تصميم الحل واختبارات التوافق التشغيلي",
  "capabilities": [
    {
      "title": "إنهاء المكالمات بالجملة",
      "desc": "توجيه حركة الصوت الدولية عبر مسارات متعددة المشغلين ومدارة الجودة.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "اتصال SIP Trunking",
      "desc": "ربط أنظمة PBX ومراكز الاتصال ومنصات المحادثات بسعة مرنة وقابلة للتوسع.",
      "tag": "وارد + صادر"
    },
    {
      "title": "الأرقام الافتراضية",
      "desc": "بناء حضور محلي موثوق بأرقام جغرافية ووطنية ومجانية.",
      "tag": "مخزون DID عالمي"
    },
    {
      "title": "الحماية من الاحتيال",
      "desc": "حماية الأرباح بضوابط الوجهات وتنبيهات الأنماط غير الطبيعية وحدود الإنفاق.",
      "tag": "مراقبة دائمة 24/7"
    },
    {
      "title": "تحليلات الجودة المتقدمة",
      "desc": "تتبع معدلات ASR وACD وPDD والتذبذب والإنجاز حسب المسار والوجهة.",
      "tag": "تقارير فورية مباشرة"
    },
    {
      "title": "توجيه مخصص ومتقدم",
      "desc": "منح الأولوية للمسارات حسب الجودة أو السعر أو الموقع أو السياسات المخصصة.",
      "tag": "تحكم قائم على القواعد"
    }
  ],
  "networkBadge": "الموثوقية على نطاق عالمي",
  "networkTitle": "شبكة مصممة لضمان استمرارية المحادثات دون انقطاع",
  "networkDesc": "ترابطات متكررة، وإدارة استباقية للمسارات، وهندسة على مدار الساعة لحماية كل مكالمة من الازدحام والانقطاع.",
  "networkBullets": [
    "تكرار متعدد المشغلين لكل وجهة",
    "تقييم نشط للجودة مع تحويل تلقائي عند الأعطال",
    "بنية تحتية موزعة جغرافياً للإشارات والوسائط",
    "اكتشاف استباقي للاحتيال وضوابط صارمة لحركة المرور"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "جاهزية الشبكة الأساسية"
    },
    {
      "val": "190+",
      "label": "دولة ومنطقة مدعومة"
    },
    {
      "val": "24/7",
      "label": "عمليات شبكية عالمية"
    },
    {
      "val": "< 1 ثانية",
      "label": "استجابة تلقائية لتوجيه المسار"
    }
  ],
  "liveStatus": {
    "title": "جميع الأنظمة تعمل بكفاءة",
    "check": "آخر فحص للمسار قبل 12 ثانية",
    "live": "مباشر"
  },
  "momentsBadge": "مبنية للمحادثات الواقعية",
  "momentsTitle": "خدمات صوتية لكل لحظة عمل حرجة",
  "momentsSubtitle": "من خدمة العملاء اليومية إلى الإشعارات عالية الأولوية، تمنح iNet Global الفرق الوصول والتحكم للبقاء على اتصال.",
  "moments": [
    {
      "title": "مراكز الاتصال",
      "desc": "تزويد الوكلاء الموزعين بخدمات صوتية متسقة واردة وصادرة عبر مختلف المناطق.",
      "footer": "حضور محلي • توجيه التدفق الزائد"
    },
    {
      "title": "التكنولوجيا المالية والمنصات",
      "desc": "تشغيل المكالمات الموثقة والتحصيل وسير عمل الخدمة بوصول عالمي آمن.",
      "footer": "تسليم CLI • ضوابط الاحتيال"
    },
    {
      "title": "السفر والضيافة",
      "desc": "ربط النزلاء وفرق العمليات قبل وأثناء وبعد كل رحلة بسلاسة.",
      "footer": "أرقام محلية • وصول متعدد اللغات"
    },
    {
      "title": "الإشعارات الحساسة للوقت",
      "desc": "توصيل المكالمات العاجلة بمسارات ذات أولوية ومراقبة فورية ومستمرة.",
      "footer": "توجيه ذو أولوية • تجاوز فوري للأعطال"
    }
  ],
  "timelineBadge": "انطلق بكل ثقة",
  "timelineTitle": "معاً من تحديد المتطلبات إلى حركة المرور الحية",
  "timelineSubtitle": "مهندس صوت مخصص يرافق فريقك خلال التصميم والاختبار ونقل حركة المرور—لجاهزية تامة قبل الإطلاق.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "تحديد النطاق",
      "desc": "تأكيد الأسواق والأحجام وبرامج الترميز ومستهدفات الجودة."
    },
    {
      "step": "2",
      "title": "الربط",
      "desc": "تبادل تفاصيل SIP وتأمين نقطة الربط البيني."
    },
    {
      "step": "3",
      "title": "التحقق",
      "desc": "إجراء اختبارات التوافق التشغيلي واختبارات ظهور CLI."
    },
    {
      "step": "4",
      "title": "الإطلاق",
      "desc": "نقل حركة المرور على مراحل بإشراف ومراقبة هندسية حية."
    }
  ],
  "terminal": {
    "title": "اتصال الصوت الخاص بك",
    "readyBadge": "جاهز للاختبار",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "القائمة البيضاء للـ IP + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "مسار احتياطي ثانوي تلقائي",
    "interopNote": "تتضمن قائمة التحقق من التوافق التشغيلي",
    "viewApiDocs": "عرض وثائق API"
  },
  "testimonialBadge": "موثوق به في بيئات الإنتاج",
  "testimonialTitle": "شريك صوتي يمكن لفريق عملياتك الاعتماد عليه تماماً",
  "testimonialSubtitle": "أداء شفاف، ومهندسون متجاوبون، وبنية تحتية صُممت للاتصالات الحيوية للأعمال.",
  "testimonialPills": [
    "نقل مشفر آمن",
    "مراقبة الجودة المستمرة",
    "ضوابط متقدمة للاحتيال"
  ],
  "quote": "منحتنا iNet Global رؤية المسارات والدعم العملي لدمج حركة الصوت عبر ثلاث مناطق دون التأثير على تجربة العملاء.",
  "authorName": "مايا تشين",
  "authorRole": "نائب رئيس عمليات الشبكة • منصة CX العالمية",
  "stat1Val": "18%",
  "stat1Label": "تكلفة مسار أقل",
  "stat2Val": "+4.2 نقطة",
  "stat2Label": "تحسن في نسبة نجاح المكالمات (ASR)",
  "ctaBadge": "دعنا نبني شبكتك الصوتية",
  "ctaTitle": "جاهز لمكالمات أكثر وضوحاً ووصول عالمي أذكى؟",
  "ctaSubtitle": "أخبرنا بالوجهات وحجم الحركة ومتطلبات الجودة لديك. سيقوم فريق الصوت لدينا بتصميم استراتيجية التوجيه والأرقام المثالية.",
  "contactUs": "تواصل معنا",
  "responseTime": "الرد خلال يوم عمل واحد"
};

const fr: WholesaleVoiceTranslation = {
  "heroBadge": "INFRASTRUCTURE VOCALE MONDIALE",
  "heroTitle": "Chaque Appel, Connecté En Toute Confiance.",
  "heroDesc": "Terminaison, origination vocale et numéros virtuels de qualité opérateur pour les entreprises exigeant des conversations claires sur chaque marché—soutenues par un routage intelligent et des opérations réseau 24/7.",
  "talkToExpert": "Parler à un expert",
  "exploreCapabilities": "Découvrir les fonctionnalités",
  "stats": {
    "countries": "190+",
    "countriesLabel": "pays desservis",
    "availability": "99,999%",
    "availabilityLabel": "disponibilité cœur",
    "operations": "24/7",
    "operationsLabel": "opérations réseau"
  },
  "heroLiveBadge1": {
    "count": "12 480",
    "label": "appels en direct acheminés"
  },
  "heroLiveBadge2": {
    "title": "Meilleure route sélectionnée",
    "latency": "43 ms",
    "quality": "Qualité HD"
  },
  "whyBadge": "POURQUOI CHOISIR INET VOICE",
  "whyTitle": "Une Infrastructure Vocale Qui Gagne La Confiance Des Clients",
  "whySubtitle1": "Conçue pour les équipes qui refusent tout compromis sur la qualité d'appel, la portée ou le contrôle opérationnel.",
  "whySubtitle2": "Un partenaire unique pour le trafic international, la présence locale et l'expertise réseau derrière chaque appel.",
  "whyCards": [
    {
      "title": "Un son toujours cristallin",
      "desc": "Des routes à faible latence et un acheminement basé sur la qualité préservent le naturel des conversations.",
      "footer": "Voix HD et prise en charge des codecs avancés"
    },
    {
      "title": "Touchez plus de marchés",
      "desc": "Terminez et initiez des appels grâce à des accords opérateurs directs et établis dans le monde entier.",
      "footer": "Plus de 190 pays et territoires"
    },
    {
      "title": "Contrôlez chaque route",
      "desc": "Définissez les règles de tarification, de qualité et de destination avec une visibilité en temps réel.",
      "footer": "LCR flexible et routage qualitatif"
    },
    {
      "title": "Évoluez sans friction",
      "desc": "Ajoutez de la capacité, des numéros et de nouveaux marchés via une plateforme mondiale résiliente.",
      "footer": "Capacité SIP élastique"
    }
  ],
  "capabilitiesBadge": "NOS CAPACITÉS FONDAMENTALES",
  "capabilitiesTitle": "Une Suite Vocale Complète, Bâtie Autour De Votre Trafic",
  "capabilitiesDesc": "Combinez exactement ce dont vous avez besoin, puis développez par marché, type de numéro ou politique de routage sans reconstruire votre couche télécom.",
  "designSolution": "Concevoir votre solution",
  "solutionNote": "Conception de la solution et tests d'interopérabilité inclus",
  "capabilities": [
    {
      "title": "Terminaison Wholesale",
      "desc": "Acheminez le trafic vocal international via des chemins multi-opérateurs gérés en qualité.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "Trunking SIP",
      "desc": "Connectez PBX, centres de contact et plateformes de communication avec une capacité élastique.",
      "tag": "Entrant + sortant"
    },
    {
      "title": "Numéros Virtuels",
      "desc": "Établissez une présence locale de confiance avec des numéros géographiques, nationaux et sans frais.",
      "tag": "Inventaire mondial de DID"
    },
    {
      "title": "Protection Anti-Fraude",
      "desc": "Protégez vos marges grâce au filtrage des destinations, alertes d'anomalies et plafonds de dépenses.",
      "tag": "Surveillance continue 24/7"
    },
    {
      "title": "Analytique de Qualité",
      "desc": "Suivez ASR, ACD, PDD, gigue et taux de complétion par route et par destination.",
      "tag": "Rapports en direct"
    },
    {
      "title": "Routage Personnalisé",
      "desc": "Priorisez les routes selon la qualité, le coût, la zone géographique ou des politiques dédiées.",
      "tag": "Contrôle par règles métier"
    }
  ],
  "networkBadge": "FIABILITÉ À L'ÉCHELLE MONDIALE",
  "networkTitle": "Un Réseau Conçu Pour Maintenir Les Conversations Fluides",
  "networkDesc": "Des interconnexions redondantes, une gestion proactive des routes et des ingénieurs 24h/24 protègent chaque appel de la congestion.",
  "networkBullets": [
    "Redondance multi-opérateurs par destination",
    "Score de qualité actif et basculement automatique",
    "Infrastructure de signalisation et de média géo-distribuée",
    "Détection proactive des fraudes et contrôle du trafic"
  ],
  "networkStats": [
    {
      "val": "99,999%",
      "label": "Disponibilité du réseau cœur"
    },
    {
      "val": "190+",
      "label": "Pays et territoires couverts"
    },
    {
      "val": "24/7",
      "label": "Supervision réseau mondiale"
    },
    {
      "val": "< 1 sec",
      "label": "Réponse automatique de routage"
    }
  ],
  "liveStatus": {
    "title": "Tous les systèmes sont opérationnels",
    "check": "Dernière vérification de route il y a 12 sec",
    "live": "EN DIRECT"
  },
  "momentsBadge": "CONÇU POUR DE VRAIES CONVERSATIONS",
  "momentsTitle": "Des Services Vocaux Pour Chaque Moment Décisif",
  "momentsSubtitle": "Du service client quotidien aux alertes hautement prioritaires, iNet Global donne aux équipes la portée et le contrôle nécessaires pour maintenir le contact.",
  "moments": [
    {
      "title": "Centres de contact",
      "desc": "Fournissez aux agents distribués une voix entrante et sortante cohérente à travers toutes les régions.",
      "footer": "Présence locale • routage de débordement"
    },
    {
      "title": "Fintechs & Plateformes",
      "desc": "Alimentez les appels vérifiés, le recouvrement et les workflows de service avec une portée mondiale sécurisée.",
      "footer": "Délivrance CLI • Contrôles anti-fraude"
    },
    {
      "title": "Voyage & Hôtellerie",
      "desc": "Connectez voyageurs et équipes opérationnelles avant, pendant et après chaque voyage.",
      "footer": "Numéros locaux • Portée multilingue"
    },
    {
      "title": "Notifications critiques",
      "desc": "Délivrez des appels urgents avec des routes prioritaires et une surveillance en temps réel.",
      "footer": "Routage prioritaire • Basculement instantané"
    }
  ],
  "timelineBadge": "DÉPLOYEZ EN TOUTE CONFIANCE",
  "timelineTitle": "De Vos Exigences Au Trafic En Direct, Ensemble",
  "timelineSubtitle": "Un ingénieur voix dédié accompagne votre équipe tout au long de la conception, des tests et de la migration du trafic—pour une parfaite préparation avant le lancement.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Cadrage",
      "desc": "Confirmation des marchés, des volumes, des codecs et des objectifs de qualité."
    },
    {
      "step": "2",
      "title": "Connexion",
      "desc": "Échange des paramètres SIP et sécurisation de votre interconnexion."
    },
    {
      "step": "3",
      "title": "Validation",
      "desc": "Exécution des tests d'interopérabilité et de présentation CLI."
    },
    {
      "step": "4",
      "title": "Lancement",
      "desc": "Bascule progressive du trafic sous surveillance d'ingénieurs en direct."
    }
  ],
  "terminal": {
    "title": "Votre connexion vocale",
    "readyBadge": "PRÊT POUR TEST",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Liste blanche IP + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Route secondaire automatique",
    "interopNote": "Checklist d'interopérabilité incluse",
    "viewApiDocs": "Consulter la documentation API"
  },
  "testimonialBadge": "ÉPROUVÉ EN PRODUCTION",
  "testimonialTitle": "Un Partenaire Télécom Sur Lequel Vos Équipes Peuvent Compter",
  "testimonialSubtitle": "Performance transparente, ingénieurs réactifs et infrastructure taillée pour les communications critiques.",
  "testimonialPills": [
    "Transport chiffré",
    "Surveillance de qualité",
    "Contrôles anti-fraude"
  ],
  "quote": "iNet Global nous a apporté la visibilité sur les routes et le support technique nécessaire pour consolider notre trafic vocal sur trois continents sans impacter l'expérience client.",
  "authorName": "Maya Chen",
  "authorRole": "VP, Network Operations • Plateforme mondiale CX",
  "stat1Val": "18%",
  "stat1Label": "coût de route réduit",
  "stat2Val": "+4,2 pts",
  "stat2Label": "amélioration de l'ASR",
  "ctaBadge": "CONSTRUISONS VOTRE RÉSEAU VOCAL",
  "ctaTitle": "Prêt Pour Des Appels Plus Clairs Et Une Portée Mondiale Optimisée ?",
  "ctaSubtitle": "Indiquez-nous vos destinations, vos volumes de trafic et vos exigences de qualité. Nos ingénieurs concevront la stratégie de routage et de numérotation idéale.",
  "contactUs": "Contactez-nous",
  "responseTime": "Réponse sous un jour ouvré"
};

const de: WholesaleVoiceTranslation = {
  "heroBadge": "GLOBALE SPRACHINFRASTRUKTUR",
  "heroTitle": "Jeder Anruf, Mit Vollem Vertrauen Verbunden.",
  "heroDesc": "Carrier-Grade Sprachterminierung, Origination und virtuelle Rufnummern für Unternehmen, die in jedem Markt klare Gespräche benötigen – unterstützt durch intelligentes Routing und 24/7-Netzwerkbetrieb.",
  "talkToExpert": "Experten kontaktieren",
  "exploreCapabilities": "Funktionen erkunden",
  "stats": {
    "countries": "190+",
    "countriesLabel": "Länder erreicht",
    "availability": "99,999%",
    "availabilityLabel": "Kernverfügbarkeit",
    "operations": "24/7",
    "operationsLabel": "Netzwerkbetrieb"
  },
  "heroLiveBadge1": {
    "count": "12.480",
    "label": "Live-Anrufe geroutet"
  },
  "heroLiveBadge2": {
    "title": "Beste Route gewählt",
    "latency": "43 ms",
    "quality": "HD-Qualität"
  },
  "whyBadge": "WARUM INET VOICE",
  "whyTitle": "Sprachinfrastruktur, Die Kundenvertrauen Schafft",
  "whySubtitle1": "Entwickelt für Teams, die bei Sprachqualität, Reichweite oder betrieblicher Kontrolle keine Kompromisse eingehen können.",
  "whySubtitle2": "Ein zentraler Partner für internationalen Datenverkehr, lokale Präsenz und fundierte Netzwerkkompetenz hinter jedem Anruf.",
  "whyCards": [
    {
      "title": "Konstant kristallklarer Klang",
      "desc": "Routen mit geringer Latenz und qualitätsbasiertes Verkehrsrouting halten Gespräche vollkommen natürlich.",
      "footer": "HD-Voice und Codec-Unterstützung"
    },
    {
      "title": "Mehr Märkte erschließen",
      "desc": "Terminieren und initiieren Sie Anrufe über etablierte direkte Carrier-Beziehungen weltweit.",
      "footer": "Über 190 Länder und Gebiete"
    },
    {
      "title": "Jede Route präzise steuern",
      "desc": "Legen Sie Preis-, Qualitäts- und Zielregeln fest – mit Echtzeit-Einblick in die Netzwerkleistung.",
      "footer": "Flexibles LCR und Qualitätsrouting"
    },
    {
      "title": "Reibungslos skalieren",
      "desc": "Fügen Sie Kapazitäten, Rufnummern und neue Märkte über eine widerstandsfähige globale Plattform hinzu.",
      "footer": "Elastische SIP-Kapazität"
    }
  ],
  "capabilitiesBadge": "UNSERE KERNKOMPETENZEN",
  "capabilitiesTitle": "Ein Sprach-Stack, Maßgeschneidert Für Ihr Verkehrsaufkommen",
  "capabilitiesDesc": "Kombinieren Sie exakt das, was Sie benötigen, und erweitern Sie nach Markt, Nummerntyp oder Routing-Richtlinie ohne Neuaufbau Ihrer Kommunikationsschicht.",
  "designSolution": "Lösung konfigurieren",
  "solutionNote": "Lösungsdesign und Interoperabilitätstests inklusive",
  "capabilities": [
    {
      "title": "Wholesale-Terminierung",
      "desc": "Leiten Sie internationalen Sprachverkehr über qualitätsüberwachte Multi-Carrier-Pfade.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP-Trunking",
      "desc": "Verbinden Sie TK-Anlagen, Contact Center und Kommunikationsplattformen mit elastischer Kapazität.",
      "tag": "Eingehend + ausgehend"
    },
    {
      "title": "Virtuelle Rufnummern",
      "desc": "Bauen Sie eine verlässliche lokale Präsenz mit geografischen, nationalen und gebührenfreien Nummern auf.",
      "tag": "Globales DID-Inventar"
    },
    {
      "title": "Betrugsschutz",
      "desc": "Schützen Sie Ihre Margen durch Zielkontrollen, Anomalie-Warnungen und Ausgabenlimits.",
      "tag": "Rund-um-die-Uhr-Überwachung"
    },
    {
      "title": "Qualitätsanalysen",
      "desc": "Verfolgen Sie ASR, ACD, PDD, Jitter und Erfolgsquoten nach Route und Zielort.",
      "tag": "Echtzeit-Reporting"
    },
    {
      "title": "Individuelles Routing",
      "desc": "Priorisieren Sie Routen nach Qualität, Preis, Geografie oder kundenindividuellen Richtlinien.",
      "tag": "Regelbasiertes Routing"
    }
  ],
  "networkBadge": "ZUVERLÄSSIGKEIT IM WELTWEITEN MAßSTAB",
  "networkTitle": "Ein Netzwerk, Das Gespräche Unterbrechungsfrei Hält",
  "networkDesc": "Redundante Zusammenschaltungen, proaktives Routenmanagement und 24/7-Engineering schützen jeden Anruf vor Überlastung und Ausfällen.",
  "networkBullets": [
    "Multi-Carrier-Redundanz pro Zielgebiet",
    "Aktives Qualitäts-Scoring und automatisches Failover",
    "Geo-verteilte Signalisierungs- und Medieninfrastruktur",
    "Proaktive Betrugserkennung und strenge Verkehrskontrollen"
  ],
  "networkStats": [
    {
      "val": "99,999%",
      "label": "Verfügbarkeit des Kernnetzwerks"
    },
    {
      "val": "190+",
      "label": "Länder und Gebiete abgedeckt"
    },
    {
      "val": "24/7",
      "label": "Weltweiter Netzwerkbetrieb"
    },
    {
      "val": "< 1 Sek.",
      "label": "Automatisierte Routenreaktion"
    }
  ],
  "liveStatus": {
    "title": "Alle Systeme betriebsbereit",
    "check": "Letzte Routenprüfung vor 12 Sek.",
    "live": "LIVE"
  },
  "momentsBadge": "FÜR ECHTE GESPRÄCHE GESCHAFFEN",
  "momentsTitle": "Sprachdienste Für Jeden Geschäftskritischen Moment",
  "momentsSubtitle": "Vom alltäglichen Kundenservice bis zu zeitkritischen Benachrichtigungen – iNet Global gibt Teams die Reichweite und Kontrolle, um Menschen verlässlich zu verbinden.",
  "moments": [
    {
      "title": "Contact Center",
      "desc": "Bieten Sie dezentralen Agenten konsistente ein- und ausgehende Sprachverbindungen über Regionen hinweg.",
      "footer": "Lokale Präsenz • Überlauf-Routing"
    },
    {
      "title": "Fintech & Plattformen",
      "desc": "Unterstützen Sie verifizierte Anrufe, Inkasso und Service-Workflows mit sicherer globaler Reichweite.",
      "footer": "CLI-Übermittlung • Betrugskontrollen"
    },
    {
      "title": "Reisen & Hotellerie",
      "desc": "Verbinden Sie Gäste und Betriebsteams vor, während und nach jeder Reise.",
      "footer": "Lokale Rufnummern • Mehrsprachige Reichweite"
    },
    {
      "title": "Kritische Benachrichtigungen",
      "desc": "Zustellen zeitkritischer Anrufe mit priorisierten Routen und Echtzeitüberwachung.",
      "footer": "Prioritätsrouting • Sofortiges Failover"
    }
  ],
  "timelineBadge": "SICHER UND ZIELGERICHTET STARTEN",
  "timelineTitle": "Gemeinsam Von Den Anforderungen Zum Live-Betrieb",
  "timelineSubtitle": "Ein Voice-Ingenieur begleitet Ihr Team bei Design, Tests und Verkehrsmigration – damit jede Route vor dem Launch optimal bereitsteht.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Bedarfsanalyse",
      "desc": "Märkte, Volumina, Codecs und Qualitätsziele verbindlich abstimmen."
    },
    {
      "step": "2",
      "title": "Verbindung",
      "desc": "SIP-Daten austauschen und den Zusammenschluss absichern."
    },
    {
      "step": "3",
      "title": "Validierung",
      "desc": "Interoperabilitäts- und CLI-Präsentationstests durchführen."
    },
    {
      "step": "4",
      "title": "Livegang",
      "desc": "Verkehr stufenweise unter Live-Überwachung von Ingenieuren migrieren."
    }
  ],
  "terminal": {
    "title": "Ihre Sprachverbindung",
    "readyBadge": "BEREIT ZUM TESTEN",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP-Allowlist + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Automatische sekundäre Route",
    "interopNote": "Interoperabilitäts-Checkliste enthalten",
    "viewApiDocs": "API-Dokumentation ansehen"
  },
  "testimonialBadge": "IN PRODUKTION BEWÄHRT",
  "testimonialTitle": "Ein Sprachpartner, Auf Den Sich Ihr Betrieb Verlassen Kann",
  "testimonialSubtitle": "Transparente Leistung, reaktionsschnelle Ingenieure und eine Infrastruktur für unternehmenskritische Verbindungen.",
  "testimonialPills": [
    "Verschlüsselter Transport",
    "Qualitätsüberwachung",
    "Betrugskontrollen"
  ],
  "quote": "iNet Global gab uns die Routentransparenz und praktische Unterstützung, um unseren Sprachverkehr über drei Regionen hinweg ohne Beeinträchtigung des Kundenerlebnisses zu konsolidieren.",
  "authorName": "Maya Chen",
  "authorRole": "VP, Network Operations • Globale CX-Plattform",
  "stat1Val": "18%",
  "stat1Label": "niedrigere Routenkosten",
  "stat2Val": "+4,2 Pkt.",
  "stat2Label": "ASR-Verbesserung",
  "ctaBadge": "LASSEN SIE UNS IHR SPRACHNETZWERK AUFBAUEN",
  "ctaTitle": "Bereit Für Klarere Anrufe Und Intelligentere Globale Reichweite?",
  "ctaSubtitle": "Sagen Sie uns, wohin Sie verbinden müssen, wie viel Verkehr anfällt und welche Qualitätsstandards Sie fordern. Unser Voice-Team entwickelt die passende Strategie.",
  "contactUs": "Kontaktieren Sie uns",
  "responseTime": "Antwort innerhalb eines Werktages"
};

const ja: WholesaleVoiceTranslation = {
  "heroBadge": "グローバル音声インフラストラクチャ",
  "heroTitle": "すべての通話を、確かな信頼でつなぐ。",
  "heroDesc": "あらゆる市場で明瞭な会話を必要とする企業向けのキャリアグレード音声発着信および仮想番号サービス。インテリジェントなルーティングと24時間365日のネットワーク運用体制で支えられています。",
  "talkToExpert": "エキスパートに相談する",
  "exploreCapabilities": "機能を見る",
  "stats": {
    "countries": "190+",
    "countriesLabel": "到達国・地域数",
    "availability": "99.999%",
    "availabilityLabel": "コア可用性",
    "operations": "24/7",
    "operationsLabel": "ネットワーク運用監視"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "ルーティング中のライブ通話"
  },
  "heroLiveBadge2": {
    "title": "最適ルート選択完了",
    "latency": "43 ms",
    "quality": "HD高音質"
  },
  "whyBadge": "INET VOICE が選ばれる理由",
  "whyTitle": "顧客の信頼を獲得する音声インフラストラクチャ",
  "whySubtitle1": "通話品質、到達性、運用の制御性を妥協できないチームのために構築されました。",
  "whySubtitle2": "国際トラフィック、ローカルプレゼンス、そしてすべての通話を支える高度なネットワーク技術をワンストップで提供します。",
  "whyCards": [
    {
      "title": "常にクリアな高音質",
      "desc": "低遅延ルートと品質ベースのトラフィック制御により、自然で円滑な会話を実現します。",
      "footer": "HD音声と各種コーデックに対応"
    },
    {
      "title": "より多くの市場へリーチ",
      "desc": "世界中の確立された直接キャリア提携ネットワークを通じて通話を発着信します。",
      "footer": "190以上の国と地域に対応"
    },
    {
      "title": "すべてのルートを完全制御",
      "desc": "パフォーマンスをリアルタイムで可視化しながら、価格・品質・宛先ルールを設定可能です。",
      "footer": "柔軟なLCRと品質ベースルーティング"
    },
    {
      "title": "摩擦のないスムーズな拡張",
      "desc": "耐障害性に優れた単一のグローバルプラットフォームを通じて、回線容量・番号・新市場を追加できます。",
      "footer": "エラスティックなSIP回線容量"
    }
  ],
  "capabilitiesBadge": "中核となる機能群",
  "capabilitiesTitle": "お客様のトラフィックに合わせて構築された音声スタック",
  "capabilitiesDesc": "必要な機能のみを組み合わせ、既存の通信基盤を再構築することなく市場、番号種別、ルーティングポリシーごとに拡張できます。",
  "designSolution": "ソリューションを設計する",
  "solutionNote": "ソリューション設計および相互接続検証試験を含みます",
  "capabilities": [
    {
      "title": "卸売（ホールセール）ターミネーション",
      "desc": "品質管理されたマルチキャリアパスを通じて国際音声トラフィックを確実にルーティングします。",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIPトランキング",
      "desc": "PBX、コンタクトセンター、通信プラットフォームを柔軟な容量で接続します。",
      "tag": "インバウンド ＋ アウトバウンド"
    },
    {
      "title": "仮想番号（DID）",
      "desc": "地域番号、国内番号、フリーダイヤルを活用し、信頼性の高い現地プレゼンスを構築します。",
      "tag": "グローバルDIDインベントリ"
    },
    {
      "title": "不正利用防止・保護",
      "desc": "宛先制御、異常アラート、利用制限によって通信コストと利益を確実に保護します。",
      "tag": "常時24時間監視体制"
    },
    {
      "title": "品質アナリティクス",
      "desc": "ルートおよび宛先ごとにASR、ACD、PDD、ジッター、完了率を詳細に追跡します。",
      "tag": "リアルタイム分析レポート"
    },
    {
      "title": "カスタムルーティング",
      "desc": "品質、価格、地域、または顧客固有のポリシールールに基づいてルートを優先設定します。",
      "tag": "ルールベース制御"
    }
  ],
  "networkBadge": "グローバルスケールの高い信頼性",
  "networkTitle": "会話を途切れさせないために設計されたネットワーク",
  "networkDesc": "冗長化された相互接続、プロアクティブなルート管理、24時間の専任エンジニアリングにより、混雑や障害からすべての通話を保護します。",
  "networkBullets": [
    "宛先ごとのマルチキャリア冗長化",
    "アクティブ品質スコアリングと自動フェイルオーバー",
    "地理分散されたシグナリングおよびメディア基盤",
    "プロアクティブな不正検知とトラフィック制御"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "コアネットワーク可用性"
    },
    {
      "val": "190+",
      "label": "サポート対象の国と地域"
    },
    {
      "val": "24/7",
      "label": "世界規模のネットワーク運用"
    },
    {
      "val": "< 1秒",
      "label": "自動ルート切り替え応答"
    }
  ],
  "liveStatus": {
    "title": "すべてのシステムが正常稼働中",
    "check": "直近のルート健全性チェック: 12秒前",
    "live": "LIVE"
  },
  "momentsBadge": "リアルな対話のために構築",
  "momentsTitle": "あらゆる重要な瞬間のための音声サービス",
  "momentsSubtitle": "日々のカスタマーサポートから優先度の高い緊急通知まで、iNet Globalは確実につながるリーチと制御性を提供します。",
  "moments": [
    {
      "title": "コンタクトセンター",
      "desc": "世界各地に分散するオペレーターに、安定した高品質な発着信音声環境を提供します。",
      "footer": "ローカルプレゼンス • オーバーフロールーティング"
    },
    {
      "title": "フィンテック＆プラットフォーム",
      "desc": "安全な世界的リーチにより、本人確認認証通話、督促、サービス案内を強力に支援します。",
      "footer": "発信番号(CLI)通知 • 不正防止制御"
    },
    {
      "title": "旅行＆ホスピタリティ",
      "desc": "旅行前、旅行中、旅行後のすべての行程において、宿泊客と運用スタッフを確実につなぎます。",
      "footer": "現地番号 • 多言語対応リーチ"
    },
    {
      "title": "緊急・重要通知",
      "desc": "優先ルートとリアルタイム監視により、緊急性の高い通話を迅速かつ確実に配信します。",
      "footer": "優先ルーティング • 即時フェイルオーバー"
    }
  ],
  "timelineBadge": "安心の導入プロセス",
  "timelineTitle": "要件定義から本番トラフィック開始まで、ワンチームで",
  "timelineSubtitle": "専任の音声エンジニアが設計、テスト、トラフィック移行まで一貫してサポートし、ローンチ前の完全な準備を保証します。",
  "timelineSteps": [
    {
      "step": "1",
      "title": "要件確認",
      "desc": "対象市場、トラフィック量、コーデック、品質要件を確定。"
    },
    {
      "step": "2",
      "title": "相互接続",
      "desc": "SIP情報を交換し、強固な相互接続環境を構築。"
    },
    {
      "step": "3",
      "title": "検証テスト",
      "desc": "相互接続試験およびCLI番号通知テストの実施。"
    },
    {
      "step": "4",
      "title": "本番移行",
      "desc": "エンジニアの監視のもと、段階的にトラフィックを移行。"
    }
  ],
  "terminal": {
    "title": "音声接続設定情報",
    "readyBadge": "接続検証準備完了",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IPホワイトリスト ＋ TLS暗号化",
    "media": "SRTP • G.711 • G.729",
    "failover": "自動セカンダリールート",
    "interopNote": "相互接続チェックリスト完備",
    "viewApiDocs": "APIドキュメントを見る"
  },
  "testimonialBadge": "本番環境での実績",
  "testimonialTitle": "運用チームが心から信頼できる音声パートナー",
  "testimonialSubtitle": "透明性の高いパフォーマンス、迅速な技術サポート、ビジネスクリティカルな通信に特化した堅牢なインフラ。",
  "testimonialPills": [
    "暗号化トランスポート",
    "常時品質モニタリング",
    "高度な不正防止"
  ],
  "quote": "iNet Globalの導入により、優れたルート可視性と迅速な技術支援が得られ、顧客体験を損なうことなく3つの地域の音声トラフィックを統合できました。",
  "authorName": "Maya Chen",
  "authorRole": "ネットワーク運用担当副社長 • グローバルCXプラットフォーム",
  "stat1Val": "18%",
  "stat1Label": "回線ルートコスト削減",
  "stat2Val": "+4.2 pt",
  "stat2Label": "通話完了率（ASR）向上",
  "ctaBadge": "貴社の音声ネットワークを共に構築",
  "ctaTitle": "よりクリアな通話とスマートな世界展開を始めませんか？",
  "ctaSubtitle": "接続先、通話トラフィック量、求める品質水準をお聞かせください。専任チームが最適なルーティングと番号戦略をご提案します。",
  "contactUs": "お問い合わせ",
  "responseTime": "1営業日以内に迅速回答"
};

const pt: WholesaleVoiceTranslation = {
  "heroBadge": "INFRAESTRUTURA GLOBAL DE VOZ",
  "heroTitle": "Cada Chamada, Conectada Com Confiança.",
  "heroDesc": "Terminação, originação e números virtuais de nível de operadora para empresas que exigem conversas claras em todos os mercados—com roteamento inteligente e operações de rede 24/7.",
  "talkToExpert": "Falar com um especialista",
  "exploreCapabilities": "Explorar recursos",
  "stats": {
    "countries": "190+",
    "countriesLabel": "países alcançados",
    "availability": "99,999%",
    "availabilityLabel": "disponibilidade do núcleo",
    "operations": "24/7",
    "operationsLabel": "operações de rede"
  },
  "heroLiveBadge1": {
    "count": "12.480",
    "label": "chamadas em tempo real roteadas"
  },
  "heroLiveBadge2": {
    "title": "Melhor rota selecionada",
    "latency": "43 ms",
    "quality": "Qualidade HD"
  },
  "whyBadge": "POR QUE ESCOLHER A INET VOICE",
  "whyTitle": "Infraestrutura De Voz Que Conquista A Confiança Do Cliente",
  "whySubtitle1": "Criada para equipes que não abrem mão da qualidade de chamada, alcance global ou controle operacional.",
  "whySubtitle2": "Um parceiro único para tráfego internacional, presença local e conhecimento técnico de ponta por trás de cada ligação.",
  "whyCards": [
    {
      "title": "Som consistentemente nítido",
      "desc": "Rotas de baixa latência e direcionamento por qualidade mantêm as conversas completamente naturais.",
      "footer": "Voz em HD e suporte avançado a codecs"
    },
    {
      "title": "Alcance mais mercados",
      "desc": "Termine e origine chamadas por meio de parcerias diretas com operadoras líderes mundiais.",
      "footer": "Mais de 190 países e territórios"
    },
    {
      "title": "Controle total sobre cada rota",
      "desc": "Defina regras de preço, qualidade e destino com visibilidade total do desempenho em tempo real.",
      "footer": "LCR flexível e roteamento por qualidade"
    },
    {
      "title": "Escale sem qualquer fricção",
      "desc": "Adicione capacidade, números e novos destinos em uma plataforma global resiliente e unificada.",
      "footer": "Capacidade SIP elástica"
    }
  ],
  "capabilitiesBadge": "NOSSOS RECURSOS CENTRAIS",
  "capabilitiesTitle": "Uma Solução de Voz Completa, Feita Para o Seu Tráfego",
  "capabilitiesDesc": "Combine apenas o que necessita e expanda por mercado, tipo de número ou política de tráfego sem reconstruir sua camada de comunicação.",
  "designSolution": "Projetar sua solução",
  "solutionNote": "Projeto de arquitetura e testes de interoperabilidade inclusos",
  "capabilities": [
    {
      "title": "Terminação no atacado (Wholesale)",
      "desc": "Encaminhe tráfego internacional de voz por caminhos multioperadora com rigorosa gestão de qualidade.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Conecte centrais PABX, contact centers e plataformas com capacidade flexível e sob demanda.",
      "tag": "Entrada + Saída"
    },
    {
      "title": "Números Virtuais (DID)",
      "desc": "Estabeleça presença local confiável com números geográficos, nacionais e 0800 gratuitos.",
      "tag": "Inventário global de DIDs"
    },
    {
      "title": "Proteção contra fraudes",
      "desc": "Proteja suas margens com bloqueio de destinos suspeitos, alertas de anomalias e limites de gastos.",
      "tag": "Monitoramento 24/7 contínuo"
    },
    {
      "title": "Análise de qualidade",
      "desc": "Acompanhe métricas de ASR, ACD, PDD, jitter e taxas de completamento por rota e destino.",
      "tag": "Relatórios em tempo real"
    },
    {
      "title": "Roteamento personalizado",
      "desc": "Priorize rotas por qualidade, custo, localização geográfica ou regras comerciais específicas.",
      "tag": "Controle baseado em regras"
    }
  ],
  "networkBadge": "CONFIABILIDADE EM ESCALA GLOBAL",
  "networkTitle": "Uma Rede Projetada Para Manter As Conversas Sem Interrupções",
  "networkDesc": "Interconexões redundantes, gestão proativa de rotas e engenharia 24 horas protegem todas as chamadas contra congestionamentos.",
  "networkBullets": [
    "Redundância multioperadora por destino",
    "Pontuação ativa de qualidade e failover automático",
    "Infraestrutura de sinalização e mídia distribuída geograficamente",
    "Detecção proativa de fraudes e controle rigoroso de tráfego"
  ],
  "networkStats": [
    {
      "val": "99,999%",
      "label": "Disponibilidade da rede central"
    },
    {
      "val": "190+",
      "label": "Países e territórios cobertos"
    },
    {
      "val": "24/7",
      "label": "Operações de rede globais"
    },
    {
      "val": "< 1 seg",
      "label": "Resposta automática de rota"
    }
  ],
  "liveStatus": {
    "title": "Todos os sistemas operacionais",
    "check": "Última verificação de rota há 12 seg",
    "live": "AO VIVO"
  },
  "momentsBadge": "FEITO PARA CONVERSAS REAIS",
  "momentsTitle": "Serviços De Voz Para Cada Momento Decisivo",
  "momentsSubtitle": "Do atendimento ao cliente do dia a dia aos alertas críticos, a iNet Global oferece o alcance e a segurança que sua equipe precisa.",
  "moments": [
    {
      "title": "Contact Centers",
      "desc": "Proporcione aos agentes remotos comunicação estável de entrada e saída em todas as regiões.",
      "footer": "Presença local • transbordo inteligente"
    },
    {
      "title": "Fintechs e Plataformas",
      "desc": "Potencialize chamadas verificadas, cobranças e fluxos de atendimento com alcance mundial seguro.",
      "footer": "Entrega de CLI • Prevenção a fraudes"
    },
    {
      "title": "Viagens e Hospitalidade",
      "desc": "Conecte hóspedes, viajantes e equipes de operações antes, durante e após cada jornada.",
      "footer": "Números locais • Cobertura multilíngue"
    },
    {
      "title": "Notificações Críticas",
      "desc": "Transmita alertas urgentes com rotas prioritárias de entrega e supervisão contínua em tempo real.",
      "footer": "Roteamento prioritário • Failover instantâneo"
    }
  ],
  "timelineBadge": "LANCE COM TOTAL SEGURANÇA",
  "timelineTitle": "Dos Requisitos Ao Tráfego Real, Lado A Lado",
  "timelineSubtitle": "Um engenheiro de voz dedicado acompanha sua equipe durante o design, testes e migração de tráfego para garantir tranquilidade antes do lançamento.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Planejamento",
      "desc": "Confirmação de destinos, volumes, codecs e metas de qualidade."
    },
    {
      "step": "2",
      "title": "Conexão",
      "desc": "Troca de parâmetros SIP e configuração da interconexão segura."
    },
    {
      "step": "3",
      "title": "Validação",
      "desc": "Realização de testes de interoperabilidade e apresentação de CLI."
    },
    {
      "step": "4",
      "title": "Lançamento",
      "desc": "Migração faseada do tráfego com monitoramento técnico em tempo real."
    }
  ],
  "terminal": {
    "title": "Sua conexão de voz",
    "readyBadge": "PRONTO PARA TESTAR",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Lista de permissões IP + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Rota secundária automática",
    "interopNote": "Checklist de interoperabilidade incluído",
    "viewApiDocs": "Ver documentação da API"
  },
  "testimonialBadge": "COMPROVADO EM PRODUÇÃO",
  "testimonialTitle": "O Parceiro De Voz Em Que Sua Equipe De Operações Pode Confiar",
  "testimonialSubtitle": "Desempenho transparente, engenheiros ágeis e uma arquitetura construída para comunicações essenciais ao negócio.",
  "testimonialPills": [
    "Transporte criptografado",
    "Monitoramento de qualidade",
    "Controle antifraude"
  ],
  "quote": "A iNet Global nos proporcionou excelente visibilidade de rotas e suporte prático para consolidar o tráfego de voz em três regiões sem comprometer a experiência dos clientes.",
  "authorName": "Maya Chen",
  "authorRole": "VP de Operações de Rede • Plataforma Global de CX",
  "stat1Val": "18%",
  "stat1Label": "redução no custo de rota",
  "stat2Val": "+4,2 pts",
  "stat2Label": "aumento no ASR",
  "ctaBadge": "VAMOS CONSTRUIR SUA REDE DE VOZ",
  "ctaTitle": "Pronto Para Chamadas Mais Claras E Um Alcance Global Inteligente?",
  "ctaSubtitle": "Diga-nos onde você precisa conectar, seu volume de tráfego e seus requisitos de qualidade. Nossa equipe criará a estratégia ideal de rotas e números.",
  "contactUs": "Fale conosco",
  "responseTime": "Resposta em até 1 dia útil"
};

const ru: WholesaleVoiceTranslation = {
  "heroBadge": "ГЛОБАЛЬНАЯ ГОЛОСОВАЯ ИНФРАСТРУКТУРА",
  "heroTitle": "Каждый Звонок — Соединен С Полной Уверенностью.",
  "heroDesc": "Оригинация, терминация голоса и виртуальные номера операторского уровня для бизнеса, требующего безупречной связи на любом рынке — на базе интеллектуальной маршрутизации и круглосуточной эксплуатации сети 24/7.",
  "talkToExpert": "Связаться с экспертом",
  "exploreCapabilities": "Изучить возможности",
  "stats": {
    "countries": "190+",
    "countriesLabel": "охваченных стран",
    "availability": "99.999%",
    "availabilityLabel": "доступность ядра сети",
    "operations": "24/7",
    "operationsLabel": "эксплуатация сети"
  },
  "heroLiveBadge1": {
    "count": "12 480",
    "label": "активных звонков маршрутизируется"
  },
  "heroLiveBadge2": {
    "title": "Выбран лучший маршрут",
    "latency": "43 мс",
    "quality": "HD качество"
  },
  "whyBadge": "ПОЧЕМУ INET VOICE",
  "whyTitle": "Голосовая Инфраструктура, Заслуживающая Доверие Клиентов",
  "whySubtitle1": "Создана для команд, которые не идут на компромиссы в качестве звонков, географии охвата или операционном контроле.",
  "whySubtitle2": "Единый партнер для международного трафика, локального присутствия и передовой сетевой экспертизы за каждым вызовом.",
  "whyCards": [
    {
      "title": "Стабильно кристальный звук",
      "desc": "Маршруты с минимальной задержкой и управление трафиком по качеству сохраняют естественность каждого диалога.",
      "footer": "HD голос и поддержка современных кодеков"
    },
    {
      "title": "Охватывайте больше рынков",
      "desc": "Осуществляйте терминацию и оригинацию вызовов через прямые соглашения с ведущими операторами мира.",
      "footer": "Более 190 стран и территорий"
    },
    {
      "title": "Контроль каждого маршрута",
      "desc": "Задавайте правила стоимости, качества и направлений с прозрачной видимостью производительности в реальном времени.",
      "footer": "Гибкий LCR и маршрутизация по качеству"
    },
    {
      "title": "Масштабирование без барьеров",
      "desc": "Добавляйте емкость, телефонные номера и новые направления на базе единой отказоустойчивой глобальной платформы.",
      "footer": "Эластичная емкость SIP"
    }
  ],
  "capabilitiesBadge": "НАШИ КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ",
  "capabilitiesTitle": "Единый Голосовой Стек, Построенный Вокруг Вашего Трафика",
  "capabilitiesDesc": "Комбинируйте только нужные модули и масштабируйтесь по рынкам, типам номеров или политикам маршрутизации без перестройки архитектуры связи.",
  "designSolution": "Спроектировать решение",
  "solutionNote": "Архитектурное проектирование и тестирование совместимости включены",
  "capabilities": [
    {
      "title": "Оптовая терминация (Wholesale)",
      "desc": "Маршрутизируйте международный трафик через мультиоператорские каналы с контролем качества.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP-транкинг",
      "desc": "Подключайте IP-АТС, контакт-центры и платформы связи с эластичной пропускной способностью.",
      "tag": "Входящие + исходящие"
    },
    {
      "title": "Виртуальные номера (DID)",
      "desc": "Создавайте доверительное местное присутствие с географическими, национальными и бесплатными номерами Toll-Free.",
      "tag": "Глобальный пул DID"
    },
    {
      "title": "Защита от мошенничества",
      "desc": "Защищайте доходы контролем направлений, уведомлениями об аномалиях и лимитами расходов.",
      "tag": "Круглосуточный мониторинг"
    },
    {
      "title": "Аналитика качества",
      "desc": "Отслеживайте ASR, ACD, PDD, джиттер и показатели успешности по маршрутам и направлениям.",
      "tag": "Отчеты в реальном времени"
    },
    {
      "title": "Кастомная маршрутизация",
      "desc": "Приоритезируйте маршруты по качеству, стоимости, географии или персональным правилам клиента.",
      "tag": "Управление на основе правил"
    }
  ],
  "networkBadge": "НАДЕЖНОСТЬ В ГЛОБАЛЬНОМ МАСШТАБЕ",
  "networkTitle": "Сеть, Спроектированная Для Бесперебойного Общения",
  "networkDesc": "Резервированные интерконнекты, проактивное управление маршрутами и инженеры 24/7 защищают каждый вызов от перегрузок и сбоев.",
  "networkBullets": [
    "Мультиоператорское резервирование по каждому направлению",
    "Активный скоринг качества и автоматическое переключение при сбоях",
    "Геораспределенная инфраструктура сигнализации и медиа",
    "Проактивное обнаружение фрода и строгий контроль трафика"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Доступность ядра сети"
    },
    {
      "val": "190+",
      "label": "Стран и регионов мира"
    },
    {
      "val": "24/7",
      "label": "Глобальный мониторинг сети"
    },
    {
      "val": "< 1 сек",
      "label": "Автоматическая реакция маршрута"
    }
  ],
  "liveStatus": {
    "title": "Все системы работают штатно",
    "check": "Проверка маршрутов 12 сек назад",
    "live": "В ЭФИРЕ"
  },
  "momentsBadge": "СОЗДАНО ДЛЯ ЖИВОГО ОБЩЕНИЯ",
  "momentsTitle": "Голосовые Сервисы Для Каждого Критически Важного Момента",
  "momentsSubtitle": "От повседневной клиентской поддержки до экстренных оповещений — iNet Global обеспечивает надежный охват и контроль над коммуникациями.",
  "moments": [
    {
      "title": "Контакт-центры",
      "desc": "Обеспечьте распределенных операторов стабильной входящей и исходящей связью во всех регионах.",
      "footer": "Локальное присутствие • перелив трафика"
    },
    {
      "title": "Финтех и платформы",
      "desc": "Поддерживайте верифицированные звонки, взыскания и сервисные сценарии с безопасным мировым охватом.",
      "footer": "Доставка CLI • Контроль мошенничества"
    },
    {
      "title": "Туризм и гостиничный бизнес",
      "desc": "Соединяйте гостей и операционные команды до, во время и после каждого путешествия.",
      "footer": "Местные номера • Многоязычный охват"
    },
    {
      "title": "Критические уведомления",
      "desc": "Доставляйте срочные голосовые сообщения по приоритетным маршрутам с непрерывным мониторингом.",
      "footer": "Приоритетный роутинг • Мгновенный failover"
    }
  ],
  "timelineBadge": "ЗАПУСКАЙТЕСЬ С УВЕРЕННОСТЬЮ",
  "timelineTitle": "Вместе: От Формирования Требований До Боевого Трафика",
  "timelineSubtitle": "Выделенный голосовой инженер сопровождает вашу команду на этапах проектирования, тестирования и миграции — для полной готовности к запуску.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Анализ",
      "desc": "Фиксация рынков, объемов трафика, кодеков и целевых показателей качества."
    },
    {
      "step": "2",
      "title": "Стык",
      "desc": "Обмен параметрами SIP и настройка защищенного интерконнекта."
    },
    {
      "step": "3",
      "title": "Тесты",
      "desc": "Проведение тестов на совместимость и корректность передачи CLI."
    },
    {
      "step": "4",
      "title": "Запуск",
      "desc": "Поэтапный перевод рабочего трафика под наблюдением инженеров."
    }
  ],
  "terminal": {
    "title": "Параметры голосового соединения",
    "readyBadge": "ГОТОВО К ТЕСТИРОВАНИЮ",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP-белые списки + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Автоматический резервный маршрут",
    "interopNote": "Чек-лист совместимости включен",
    "viewApiDocs": "Документация API"
  },
  "testimonialBadge": "ПРОВЕРЕНО НА ПРАКТИКЕ",
  "testimonialTitle": "Голосовой Партнер, На Которого Ваша Команда Может Положиться",
  "testimonialSubtitle": "Прозрачная производительность, отзывчивые инженеры и архитектура, созданная для критически важных бизнес-коммуникаций.",
  "testimonialPills": [
    "Шифрованный транспорт",
    "Мониторинг качества",
    "Антифрод защита"
  ],
  "quote": "iNet Global обеспечил нам полную прозрачность маршрутов и практическую помощь для консолидации голосового трафика в трех регионах без потери качества обслуживания клиентов.",
  "authorName": "Майя Чэнь",
  "authorRole": "Вице-президент по сетевым операциям • Глобальная CX платформа",
  "stat1Val": "18%",
  "stat1Label": "снижение стоимости маршрутов",
  "stat2Val": "+4.2 п.п.",
  "stat2Label": "рост успешности вызовов (ASR)",
  "ctaBadge": "ПОСТРОИМ ВАШУ ГОЛОСОВУЮ СЕТЬ",
  "ctaTitle": "Готовы К Безупречным Звонкам И Умному Глобальному Охвату?",
  "ctaSubtitle": "Расскажите, какие направления вам нужны, какой объем трафика вы передаете и каковы стандарты качества. Наши инженеры разработают оптимальную стратегию маршрутизации.",
  "contactUs": "Связаться с нами",
  "responseTime": "Ответ в течение одного рабочего дня"
};

const it: WholesaleVoiceTranslation = {
  "heroBadge": "INFRASTRUTTURA VOCALE GLOBALE",
  "heroTitle": "Ogni Chiamata, Connessa Con Totale Sicurezza.",
  "heroDesc": "Terminazione, originazione vocale e numeri virtuali carrier-grade per aziende che necessitano di conversazioni chiare in ogni mercato, supportate da instradamento intelligente e monitoraggio NOC 24/7.",
  "talkToExpert": "Parla con un esperto",
  "exploreCapabilities": "Esplora le funzionalità",
  "stats": {
    "countries": "190+",
    "countriesLabel": "paesi raggiunti",
    "availability": "99,999%",
    "availabilityLabel": "disponibilità del core",
    "operations": "24/7",
    "operationsLabel": "operazioni di rete"
  },
  "heroLiveBadge1": {
    "count": "12.480",
    "label": "chiamate live instradate"
  },
  "heroLiveBadge2": {
    "title": "Miglior rotta selezionata",
    "latency": "43 ms",
    "quality": "Qualità HD"
  },
  "whyBadge": "PERCHÉ INET VOICE",
  "whyTitle": "Un'Infrastruttura Vocale Che Conquista La Fiducia Del Cliente",
  "whySubtitle1": "Creata per team che non possono accettare compromessi su qualità di chiamata, copertura o controllo operativo.",
  "whySubtitle2": "Un unico partner per traffico internazionale, presenza locale e competenza ingegneristica dietro ogni conversazione.",
  "whyCards": [
    {
      "title": "Audio costantemente nitido",
      "desc": "Rotte a bassa latenza e gestione basata sulla qualità mantengono le conversazioni fluide e naturali.",
      "footer": "Voce HD e supporto codec avanzati"
    },
    {
      "title": "Raggiungi più mercati",
      "desc": "Termina e origina chiamate tramite partnership carrier dirette e consolidate a livello mondiale.",
      "footer": "Oltre 190 paesi e territori"
    },
    {
      "title": "Controlla ogni rotta",
      "desc": "Definisci regole su tariffe, qualità e destinazioni con visibilità in tempo reale sulle prestazioni.",
      "footer": "LCR flessibile e routing orientato alla qualità"
    },
    {
      "title": "Scala senza attrito",
      "desc": "Aggiungi capacità, numerazioni e nuovi mercati attraverso un'unica piattaforma globale altamente resiliente.",
      "footer": "Capacità SIP elastica"
    }
  ],
  "capabilitiesBadge": "LE NOSTRE CAPACITÀ FONDAMENTALI",
  "capabilitiesTitle": "Uno Stack Vocale Completo, Costruito Attorno Al Tuo Traffico",
  "capabilitiesDesc": "Combina solo ciò di cui hai bisogno ed espandi per mercato, tipo di numero o policy di instradamento senza ricostruire la tua architettura.",
  "designSolution": "Configura la tua soluzione",
  "solutionNote": "Progettazione architetturale e test di interoperabilità inclusi",
  "capabilities": [
    {
      "title": "Terminazione Wholesale",
      "desc": "Instrada il traffico voce internazionale attraverso percorsi multicarrier a qualità controllata.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "Trunking SIP",
      "desc": "Connetti PBX, contact center e piattaforme applicative con capacità elastica e scalabile.",
      "tag": "Entrata + Uscita"
    },
    {
      "title": "Numeri Virtuali (DID)",
      "desc": "Stabilisci una presenza locale affidabile con numeri geografici, nazionali e numeri verdi gratuiti.",
      "tag": "Inventario DID globale"
    },
    {
      "title": "Protezione dalle frodi",
      "desc": "Proteggi i tuoi margini con controlli sulle destinazioni, alert anomalie e tetti massimi di spesa.",
      "tag": "Monitoraggio attivo 24/7"
    },
    {
      "title": "Analitiche di qualità",
      "desc": "Monitora ASR, ACD, PDD, jitter e tassi di successo per singola rotta e destinazione.",
      "tag": "Report in tempo reale"
    },
    {
      "title": "Routing personalizzato",
      "desc": "Assegna priorità alle rotte per qualità, costo, area geografica o policy su misura del cliente.",
      "tag": "Controllo basato su regole"
    }
  ],
  "networkBadge": "AFFIDABILITÀ SU SCALA MONDIALE",
  "networkTitle": "Una Rete Progettata Per Mantenere Le Conversazioni Sempre Attive",
  "networkDesc": "Interconnessioni ridondate, gestione proattiva delle rotte e tecnici 24 ore su 24 proteggono ogni chiamata da congestione e guasti.",
  "networkBullets": [
    "Ridondanza multicarrier per ogni destinazione",
    "Scoring attivo di qualità e failover automatico",
    "Infrastruttura di segnalazione e media geodistribuita",
    "Rilevamento proattivo delle frodi e rigoroso controllo del traffico"
  ],
  "networkStats": [
    {
      "val": "99,999%",
      "label": "Disponibilità del core network"
    },
    {
      "val": "190+",
      "label": "Paesi e territori coperti"
    },
    {
      "val": "24/7",
      "label": "Operazioni di rete globali"
    },
    {
      "val": "< 1 sec",
      "label": "Risposta automatica di instradamento"
    }
  ],
  "liveStatus": {
    "title": "Tutti i sistemi operativi",
    "check": "Ultimo controllo rotta 12 sec fa",
    "live": "LIVE"
  },
  "momentsBadge": "COSTRUITO PER CONVERSAZIONI REALI",
  "momentsTitle": "Servizi Vocali Per Ogni Momento Fondamentale",
  "momentsSubtitle": "Dall'assistenza clienti ordinaria agli avvisi ad alta priorità, iNet Global offre la copertura e il controllo necessari per connettere le persone.",
  "moments": [
    {
      "title": "Contact Center",
      "desc": "Offri agli agenti remoti comunicazioni voce affidabili sia in entrata che in uscita in ogni regione.",
      "footer": "Presenza locale • routing di overflow"
    },
    {
      "title": "Fintech & Piattaforme",
      "desc": "Supporta chiamate verificate, solleciti e workflow di servizio con una portata globale sicura.",
      "footer": "Consegna CLI • Controlli antifrode"
    },
    {
      "title": "Viaggi & Ospitalità",
      "desc": "Connetti viaggiatori e team operativi prima, durante e dopo ogni viaggio.",
      "footer": "Numeri locali • Copertura multilingue"
    },
    {
      "title": "Notifiche critiche",
      "desc": "Invia comunicazioni urgenti con percorsi prioritari e monitoraggio in tempo reale.",
      "footer": "Routing prioritario • Failover istantaneo"
    }
  ],
  "timelineBadge": "LANCIA CON PIENA SICUREZZA",
  "timelineTitle": "Dalle Specifiche Al Traffico Live, Fianco A Fianco",
  "timelineSubtitle": "Un ingegnere vocale dedicato segue il tuo team attraverso design, collaudo e migrazione del traffico—per essere pronti prima del rilascio.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Definizione",
      "desc": "Conferma di mercati, volumi di traffico, codec e target di qualità."
    },
    {
      "step": "2",
      "title": "Connessione",
      "desc": "Scambio dei parametri SIP e messa in sicurezza dell'interconnessione."
    },
    {
      "step": "3",
      "title": "Validazione",
      "desc": "Esecuzione test di interoperabilità e verifica visualizzazione CLI."
    },
    {
      "step": "4",
      "title": "Rilascio",
      "desc": "Migrazione graduale del traffico con supervisione live dei nostri tecnici."
    }
  ],
  "terminal": {
    "title": "La tua connessione vocale",
    "readyBadge": "PRONTO PER TEST",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Whitelist IP + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Rotta secondaria automatica",
    "interopNote": "Checklist di interoperabilità inclusa",
    "viewApiDocs": "Visualizza documentazione API"
  },
  "testimonialBadge": "COLLAUDATO IN PRODUZIONE",
  "testimonialTitle": "Un Partner Telefonico Su Cui Il Tuo Team Operativo Può Contare",
  "testimonialSubtitle": "Prestazioni trasparenti, ingegneri reattivi e infrastruttura ingegnerizzata per comunicazioni aziendali critiche.",
  "testimonialPills": [
    "Trasporto crittografato",
    "Monitoraggio qualità",
    "Protezione antifrode"
  ],
  "quote": "iNet Global ci ha fornito la visibilità sulle rotte e il supporto pratico necessari per consolidare il traffico vocale in tre regioni senza impattare l'esperienza cliente.",
  "authorName": "Maya Chen",
  "authorRole": "VP Operazioni di Rete • Piattaforma CX Globale",
  "stat1Val": "18%",
  "stat1Label": "riduzione dei costi per tratta",
  "stat2Val": "+4,2 pt",
  "stat2Label": "incremento dell'ASR",
  "ctaBadge": "COSTRUIAMO LA TUA RETE VOCALE",
  "ctaTitle": "Pronto Per Chiamate Più Chiare E Una Portata Globale Più Intelligente?",
  "ctaSubtitle": "Spiegaci dove desideri connetterti, il volume di traffico e i tuoi parametri di qualità. Il nostro team progetterà la strategia ideale di instradamento e numerazione.",
  "contactUs": "Contattaci",
  "responseTime": "Risposta entro un giorno lavorativo"
};

const ko: WholesaleVoiceTranslation = {
  "heroBadge": "글로벌 음성 인프라",
  "heroTitle": "모든 통화, 절대적인 신뢰로 연결됩니다.",
  "heroDesc": "모든 시장에서 선명한 대화를 필요로 하는 기업을 위한 캐리어 등급 음성 착신, 발신 및 가상 번호 서비스. 지능형 라우팅과 연중무휴 24/7 네트워크 운영이 뒷받침합니다.",
  "talkToExpert": "전문가와 상담하기",
  "exploreCapabilities": "기능 살펴보기",
  "stats": {
    "countries": "190+",
    "countriesLabel": "도달 국가 및 지역",
    "availability": "99.999%",
    "availabilityLabel": "코어 가용성",
    "operations": "24/7",
    "operationsLabel": "네트워크 운영"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "라우팅 중인 실시간 통화"
  },
  "heroLiveBadge2": {
    "title": "최적 경로 선택됨",
    "latency": "43ms",
    "quality": "HD 음질"
  },
  "whyBadge": "INET VOICE를 선택하는 이유",
  "whyTitle": "고객의 신뢰를 얻는 음성 인프라",
  "whySubtitle1": "통화 품질, 도달 범위, 운영 제어에서 타협할 수 없는 엔지니어링 팀을 위해 구축되었습니다.",
  "whySubtitle2": "국제 트래픽, 로컬 프레즌스 및 모든 통화 뒤에 자리한 전문 네트워크 기술을 지원하는 단일 파트너.",
  "whyCards": [
    {
      "title": "일관되게 선명한 음질",
      "desc": "지연 시간이 짧은 경로와 품질 기반 트래픽 제어로 자연스러운 대화를 유지합니다.",
      "footer": "HD 보이스 및 다양한 코덱 지원"
    },
    {
      "title": "더 많은 시장으로 확장",
      "desc": "전 세계적으로 확립된 통신사 직접 관계망을 통해 전화를 착신 및 발신합니다.",
      "footer": "190개 이상의 국가 및 영토"
    },
    {
      "title": "모든 경로를 정밀 제어",
      "desc": "실시간 성능 가시성을 바탕으로 요금, 품질 및 목적지 규칙을 설정할 수 있습니다.",
      "footer": "유연한 LCR 및 품질 라우팅"
    },
    {
      "title": "마찰 없는 원활한 확장",
      "desc": "안정적인 단일 글로벌 플랫폼을 통해 용량, 번호, 신규 시장을 손쉽게 추가합니다.",
      "footer": "탄력적인 SIP 수용 용량"
    }
  ],
  "capabilitiesBadge": "핵심 기술 역량",
  "capabilitiesTitle": "트래픽에 맞춤 구성된 통합 음성 스택",
  "capabilitiesDesc": "필요한 기능만 조합하고 통신 계층을 재구축할 필요 없이 시장, 번호 유형, 라우팅 정책별로 확장하세요.",
  "designSolution": "솔루션 설계하기",
  "solutionNote": "솔루션 설계 및 상호 운용성 테스트 기본 포함",
  "capabilities": [
    {
      "title": "도매(홀세일) 음성 착신",
      "desc": "품질 관리형 멀티 캐리어 경로를 통해 국제 음성 트래픽을 안전하게 라우팅합니다.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP 트렁킹",
      "desc": "유연한 용량으로 PBX, 컨택 센터 및 커뮤니케이션 플랫폼을 연결합니다.",
      "tag": "인바운드 + 아웃바운드"
    },
    {
      "title": "가상 번호 (DID)",
      "desc": "지역, 국내 및 수신자 부담 무료 번호로 신뢰할 수 있는 로컬 프레즌스를 구축합니다.",
      "tag": "글로벌 DID 인벤토리"
    },
    {
      "title": "부정 사용 방지",
      "desc": "목적지 통제, 이상 패턴 감지 알림, 지출 한도로 비즈니스 마진을 보호합니다.",
      "tag": "24/7 상시 모니터링"
    },
    {
      "title": "품질 분석",
      "desc": "경로 및 목적지별 ASR, ACD, PDD, 지터, 통화 완료율을 정밀 추적합니다.",
      "tag": "실시간 분석 리포트"
    },
    {
      "title": "맞춤형 라우팅",
      "desc": "품질, 가격, 지역 또는 고객사 맞춤 정책에 따라 경로 우선순위를 설정합니다.",
      "tag": "규칙 기반 제어"
    }
  ],
  "networkBadge": "글로벌 규모의 강력한 신뢰성",
  "networkTitle": "대화가 끊기지 않도록 설계된 전 세계 네트워크",
  "networkDesc": "이중화된 상호 연결, 선제적 경로 관리, 연중무휴 엔지니어링이 모든 통화를 정체와 장애로부터 보호합니다.",
  "networkBullets": [
    "목적지별 멀티 통신사 이중화",
    "능동적 품질 스코어링 및 자동 장애 조치",
    "지리적으로 분산된 신호 및 미디어 인프라",
    "선제적 사기 탐지 및 엄격한 트래픽 제어"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "코어 네트워크 가용성"
    },
    {
      "val": "190+",
      "label": "지원 국가 및 지역"
    },
    {
      "val": "24/7",
      "label": "글로벌 네트워크 운영 센터"
    },
    {
      "val": "< 1초",
      "label": "자동화된 경로 전환 응답"
    }
  ],
  "liveStatus": {
    "title": "모든 시스템 정상 가동 중",
    "check": "최근 경로 확인: 12초 전",
    "live": "LIVE"
  },
  "momentsBadge": "실제 비즈니스 대화를 위해 준비됨",
  "momentsTitle": "모든 결정적 순간을 위한 음성 서비스",
  "momentsSubtitle": "일상적인 고객 관리부터 긴급한 알림까지, iNet Global은 사람들을 연결하는 강력한 도달력과 통제력을 제공합니다.",
  "moments": [
    {
      "title": "컨택 센터",
      "desc": "분산된 상담원에게 전 지역에 걸쳐 일관된 인바운드 및 아웃바운드 음성 통화를 제공합니다.",
      "footer": "로컬 프레즌스 • 오버플로 라우팅"
    },
    {
      "title": "핀테크 및 플랫폼",
      "desc": "안전한 글로벌 도달 범위로 본인 인증 통화, 회수, 서비스 워크플로우를 가동합니다.",
      "footer": "발신번호(CLI) 전달 • 사기 방지"
    },
    {
      "title": "여행 및 호스피탈리티",
      "desc": "모든 여정의 전, 중, 후에 걸쳐 여행객과 운영팀을 원활하게 연결합니다.",
      "footer": "로컬 번호 • 다국어 연결"
    },
    {
      "title": "중요 비상 알림",
      "desc": "우선순위 경로와 실시간 모니터링을 통해 시간에 민감한 알림을 확실하게 전달합니다.",
      "footer": "우선순위 라우팅 • 즉각적인 페일오버"
    }
  ],
  "timelineBadge": "자신감 있는 서비스 개시",
  "timelineTitle": "요구사항 정의부터 라이브 트래픽까지 원팀으로",
  "timelineSubtitle": "전담 음성 엔지니어가 설계, 검증, 트래픽 마이그레이션까지 함께하여 론칭 전 철저히 준비합니다.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "요구 분석",
      "desc": "대상 시장, 트래픽 양, 코덱, 품질 목표 합의."
    },
    {
      "step": "2",
      "title": "상호 연결",
      "desc": "SIP 세부 정보 교환 및 보안 연동 구성."
    },
    {
      "step": "3",
      "title": "검증 시험",
      "desc": "상호 운용성 시험 및 발신 번호 표시 테스트."
    },
    {
      "step": "4",
      "title": "정식 개통",
      "desc": "엔지니어 실시간 모니터링 하에 단계별 트래픽 이전."
    }
  ],
  "terminal": {
    "title": "음성 연결 설정 파라미터",
    "readyBadge": "테스트 준비 완료",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP 허용 목록 + TLS 암호화",
    "media": "SRTP • G.711 • G.729",
    "failover": "자동 보조 백업 경로",
    "interopNote": "상호 운용성 체크리스트 포함",
    "viewApiDocs": "API 문서 확인하기"
  },
  "testimonialBadge": "프로덕션 환경에서 검증됨",
  "testimonialTitle": "운영팀이 확신을 갖고 의지할 수 있는 음성 파트너",
  "testimonialSubtitle": "투명한 성능 지표, 민첩한 엔지니어 지원, 비즈니스 핵심 커뮤니케이션을 위해 제작된 아키텍처.",
  "testimonialPills": [
    "암호화 전송",
    "품질 모니터링",
    "사기 방지 통제"
  ],
  "quote": "iNet Global은 고객 경험을 저해하지 않으면서도 세 개 지역의 음성 트래픽을 단일화할 수 있는 경로 가시성과 밀착 지원을 제공했습니다.",
  "authorName": "Maya Chen",
  "authorRole": "네트워크 운영 부사장 • 글로벌 CX 플랫폼",
  "stat1Val": "18%",
  "stat1Label": "경로 비용 절감",
  "stat2Val": "+4.2%p",
  "stat2Label": "통화 성공률(ASR) 개선",
  "ctaBadge": "귀사만의 음성 네트워크 구축",
  "ctaTitle": "더 선명한 통화와 스마트한 글로벌 확장을 시작할 준비가 되셨습니까?",
  "ctaSubtitle": "연결하려는 지역, 트래픽 규모, 요구 품질을 알려주시면 전담 팀이 최적의 라우팅과 번호 전략을 맞춤 설계해 드립니다.",
  "contactUs": "문의하기",
  "responseTime": "영업일 기준 1일 이내 신속 답변"
};

const nl: WholesaleVoiceTranslation = {
  "heroBadge": "WERELDWIJDE SPRAAKINFRASTRUCTUUR",
  "heroTitle": "Elk Gesprek, Verbonden Met Vol Vertrouwen.",
  "heroDesc": "Carrier-grade spraakterminatie, -originatie en virtuele nummers voor bedrijven die kristalheldere gesprekken in elke markt vereisen—ondersteund door intelligente routering en 24/7 netwerkbeheer.",
  "talkToExpert": "Praat met een expert",
  "exploreCapabilities": "Ontdek mogelijkheden",
  "stats": {
    "countries": "190+",
    "countriesLabel": "landen bereikt",
    "availability": "99,999%",
    "availabilityLabel": "beschikbaarheid kernnetwerk",
    "operations": "24/7",
    "operationsLabel": "netwerkoperaties"
  },
  "heroLiveBadge1": {
    "count": "12.480",
    "label": "actieve oproepen gerouteerd"
  },
  "heroLiveBadge2": {
    "title": "Beste route geselecteerd",
    "latency": "43 ms",
    "quality": "HD-kwaliteit"
  },
  "whyBadge": "WAAROM INET VOICE",
  "whyTitle": "Spraakinfrastructuur Die Klantenvertrouwen Wint",
  "whySubtitle1": "Gebouwd voor teams die geen concessies kunnen doen aan gesprekskwaliteit, bereik of operationele controle.",
  "whySubtitle2": "Eén partner voor internationaal verkeer, lokale aanwezigheid en diepgaande netwerkkennis achter elk gesprek.",
  "whyCards": [
    {
      "title": "Consistent helder geluid",
      "desc": "Routings met lage latentie en kwaliteitsgestuurde verkeersstromen houden gesprekken volkomen natuurlijk.",
      "footer": "HD-spraak en geavanceerde codec-ondersteuning"
    },
    {
      "title": "Bereik meer markten",
      "desc": "Termineer en initieer oproepen via gevestigde rechtstreekse carrier-relaties wereldwijd.",
      "footer": "190+ landen en gebieden"
    },
    {
      "title": "Beheers elke route",
      "desc": "Stel regels in voor tarieven, kwaliteit en bestemmingen met realtime inzicht in netwerkprestaties.",
      "footer": "Flexibele LCR en kwaliteitsroutering"
    },
    {
      "title": "Schaal zonder frictie",
      "desc": "Voeg capaciteit, nummers en nieuwe markten toe via één veerkrachtig mondiaal platform.",
      "footer": "Elastische SIP-capaciteit"
    }
  ],
  "capabilitiesBadge": "ONZE KERNFUNCTIONALITEITEN",
  "capabilitiesTitle": "Eén Spraakstack, Gebouwd Rondom Uw Verkeer",
  "capabilitiesDesc": "Combineer uitsluitend wat u nodig heeft en breid uit per markt, nummertype of routeringsbeleid zonder uw telecommuur opnieuw op te bouwen.",
  "designSolution": "Ontwerp uw oplossing",
  "solutionNote": "Oplossingsontwerp en interoperabiliteitstesten inbegrepen",
  "capabilities": [
    {
      "title": "Wholesale terminatie",
      "desc": "Routeer internationaal spraakverkeer via kwaliteitsbewaakte paden met meerdere carriers.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP-trunking",
      "desc": "Verbind telefooncentrales, contactcenters en communicatieplatforms met elastische capaciteit.",
      "tag": "Inkomend + uitgaand"
    },
    {
      "title": "Virtuele nummers (DID)",
      "desc": "Bouw een vertrouwde lokale aanwezigheid op met geografische, nationale en gratis servicenummers.",
      "tag": "Wereldwijde DID-voorraad"
    },
    {
      "title": "Fraudebescherming",
      "desc": "Bescherm uw marges met bestemmingscontroles, anomaliewaarschuwingen en uitgavenlimieten.",
      "tag": "24/7 continue monitoring"
    },
    {
      "title": "Kwaliteitsanalyses",
      "desc": "Volg ASR, ACD, PDD, jitter en voltooiingspercentages per route en per bestemming nauwgezet.",
      "tag": "Realtime rapportage"
    },
    {
      "title": "Aangepaste routering",
      "desc": "Geef prioriteit aan routes op basis van kwaliteit, prijs, geografie of klantspecifiek beleid.",
      "tag": "Regelgestuurde controle"
    }
  ],
  "networkBadge": "BETROUWBAARHEID OP WERELDWIJDE SCHAAL",
  "networkTitle": "Een Netwerk Ontworpen Om Gesprekken Vloeiend Te Houden",
  "networkDesc": "Redundante interconnecties, proactief routebeheer en 24/7 technische ondersteuning beschermen elk gesprek tegen congestie en uitval.",
  "networkBullets": [
    "Multi-carrier redundantie per bestemming",
    "Actieve kwaliteitsscores en automatische failover",
    "Geografisch verspreide signalerings- en media-infrastructuur",
    "Proactieve fraudedetectie en strikte verkeerscontroles"
  ],
  "networkStats": [
    {
      "val": "99,999%",
      "label": "Beschikbaarheid van het kernnetwerk"
    },
    {
      "val": "190+",
      "label": "Ondersteunde landen en gebieden"
    },
    {
      "val": "24/7",
      "label": "Wereldwijde netwerkoperaties"
    },
    {
      "val": "< 1 sec",
      "label": "Geautomatiseerde routeringsreactie"
    }
  ],
  "liveStatus": {
    "title": "Alle systemen operationeel",
    "check": "Laatste routecontrole 12 sec geleden",
    "live": "LIVE"
  },
  "momentsBadge": "GEBOUWD VOOR ECHTE GESPREKKEN",
  "momentsTitle": "Spraakdiensten Voor Elk Cruciaal Moment",
  "momentsSubtitle": "Van dagelijkse klantenservice tot urgente meldingen, iNet Global biedt teams het bereik en de controle om mensen verbonden te houden.",
  "moments": [
    {
      "title": "Contactcenters",
      "desc": "Geef externe medewerkers consistente inkomende en uitgaande telefonie over alle regio's.",
      "footer": "Lokale aanwezigheid • overlooproutering"
    },
    {
      "title": "Fintech & Platforms",
      "desc": "Faciliteer geverifieerde gesprekken, incasso's en serviceworkflows met veilig wereldwijd bereik.",
      "footer": "Nummerweergave (CLI) • Fraudebewaking"
    },
    {
      "title": "Reizen & Gastvrijheid",
      "desc": "Verbind reizigers en operationele teams voor, tijdens en na elke reis soepel.",
      "footer": "Lokale nummers • Meertalig bereik"
    },
    {
      "title": "Kritieke notificaties",
      "desc": "Lever tijdgevoelige gesprekken af met geprioriteerde routes en continue realtime monitoring.",
      "footer": "Prioriteitsroutering • Directe failover"
    }
  ],
  "timelineBadge": "LANCEER MET VERTROUWEN",
  "timelineTitle": "Van Vereisten Tot Live Verkeer, Schouder Aan Schouder",
  "timelineSubtitle": "Een vaste spraaktechnicus begeleidt uw team bij ontwerp, tests en verkeersmigratie—zodat alles gereed is voor de lancering.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Inventarisatie",
      "desc": "Markten, verkeersvolumes, codecs en kwaliteitsdoelen bevestigen."
    },
    {
      "step": "2",
      "title": "Koppeling",
      "desc": "SIP-gegevens uitwisselen en interconnectie beveiligen."
    },
    {
      "step": "3",
      "title": "Validatie",
      "desc": "Interoperabiliteitstesten en nummerweergave-controles uitvoeren."
    },
    {
      "step": "4",
      "title": "Livegang",
      "desc": "Verkeer gefaseerd overzetten onder toezicht van technici."
    }
  ],
  "terminal": {
    "title": "Uw spraakverbinding",
    "readyBadge": "KLAAR VOOR TEST",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP-allowlist + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Automatische secundaire route",
    "interopNote": "Interoperabiliteits-checklist inbegrepen",
    "viewApiDocs": "Bekijk API-documentatie"
  },
  "testimonialBadge": "BEWEZEN IN PRODUCTIE",
  "testimonialTitle": "Een Spraakpartner Waar Uw Operatie Altijd Op Kan Bouwen",
  "testimonialSubtitle": "Transparante prestaties, proactieve ingenieurs en een architectuur gebouwd voor bedrijfskritieke communicatie.",
  "testimonialPills": [
    "Versleuteld transport",
    "Kwaliteitsbewaking",
    "Fraudebescherming"
  ],
  "quote": "iNet Global gaf ons de routetransparantie en praktische ondersteuning om spraakverkeer in drie regio's te consolideren zonder de klantervaring aan te tasten.",
  "authorName": "Maya Chen",
  "authorRole": "VP Network Operations • Wereldwijd CX-platform",
  "stat1Val": "18%",
  "stat1Label": "lagere routekosten",
  "stat2Val": "+4,2 pt",
  "stat2Label": "ASR-verbetering",
  "ctaBadge": "LATEN WE UW SPRAAKNETWERK BOUWEN",
  "ctaTitle": "Klaar Voor Duidelijkere Gesprekken En Een Slimmer Wereldwijd Bereik?",
  "ctaSubtitle": "Vertel ons waar u wilt verbinden, hoeveel verkeer u verwacht en wat uw kwaliteitsnormen zijn. Ons team ontwerpt de juiste routerings- en nummerstrategie.",
  "contactUs": "Neem contact op",
  "responseTime": "Reactie binnen één werkdag"
};

const tr: WholesaleVoiceTranslation = {
  "heroBadge": "KÜRESEL SES ALTYAPISI",
  "heroTitle": "Her Çağrı, Tam Güvenle Bağlanır.",
  "heroDesc": "Her pazarda net ve berrak görüşmelere ihtiyaç duyan işletmeler için taşıyıcı düzeyinde ses sonlandırma, başlatma ve sanal numaralar—akıllı yönlendirme ve 7/24 ağ operasyonları ile desteklenir.",
  "talkToExpert": "Bir uzmanla görüşün",
  "exploreCapabilities": "Yetenekleri keşfedin",
  "stats": {
    "countries": "190+",
    "countriesLabel": "ulaşılan ülke",
    "availability": "99.999%",
    "availabilityLabel": "çekirdek ağ kullanılabilirliği",
    "operations": "24/7",
    "operationsLabel": "kesintisiz ağ operasyonu"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "yönlendirilen anlık çağrı"
  },
  "heroLiveBadge2": {
    "title": "En iyi rota seçildi",
    "latency": "43 ms",
    "quality": "HD kalitesi"
  },
  "whyBadge": "NEDEN INET SES ÇÖZÜMLERİ",
  "whyTitle": "Müşteri Güveni Kazandıran Ses Altyapısı",
  "whySubtitle1": "Çağrı kalitesi, erişim kapsamı ve operasyonel kontrolden ödün vermeyen ekipler için tasarlandı.",
  "whySubtitle2": "Uluslararası trafik, yerel varlık ve her çağrının arkasındaki telekom uzmanlığı için tek güvenilir ortak.",
  "whyCards": [
    {
      "title": "Sürekli kristal netliğinde ses",
      "desc": "Düşük gecikmeli rotalar ve kalite tabanlı trafik yönlendirmesi görüşmelerin doğal kalmasını sağlar.",
      "footer": "HD ses ve gelişmiş kodek desteği"
    },
    {
      "title": "Daha fazla pazara ulaşın",
      "desc": "Dünya çapında köklü doğrudan taşıyıcı ilişkileri üzerinden çağrıları sonlandırın ve başlatın.",
      "footer": "190'dan fazla ülke ve bölge"
    },
    {
      "title": "Her rotayı tam kontrol edin",
      "desc": "Gerçek zamanlı performans görünürlüğü ile fiyatlandırma, kalite ve hedef kurallarını belirleyin.",
      "footer": "Esnek LCR ve kalite yönlendirmesi"
    },
    {
      "title": "Sürtünmesizce ölçeklenin",
      "desc": "Dayanıklı tek bir küresel platform üzerinden kapasite, numara ve yeni pazarları kolayca ekleyin.",
      "footer": "Esnek SIP kapasitesi"
    }
  ],
  "capabilitiesBadge": "TEMEL YETENEKLERİMİZ",
  "capabilitiesTitle": "Trafiğinizin Etrafında Şekillenen Tek Ses Mimarisi",
  "capabilitiesDesc": "Yalnızca ihtiyacınız olanı birleştirin; iletişim katmanınızı yeniden inşa etmeden pazar, numara türü veya yönlendirme politikasına göre genişletin.",
  "designSolution": "Çözümünüzü tasarlayın",
  "solutionNote": "Çözüm tasarımı ve birlikte çalışabilirlik testleri dahildir",
  "capabilities": [
    {
      "title": "Toptan ses sonlandırma",
      "desc": "Uluslararası ses trafiğini kalite yönetimli, çoklu taşıyıcı yolları üzerinden yönlendirin.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Santral (Trunking)",
      "desc": "PBX, çağrı merkezi ve iletişim platformlarını esnek kapasiteyle bağlayın.",
      "tag": "Gelen + Giden"
    },
    {
      "title": "Sanal Numaralar (DID)",
      "desc": "Coğrafi, ulusal ve ücretsiz (toll-free) numaralarla güvenilir bir yerel varlık oluşturun.",
      "tag": "Küresel DID envanteri"
    },
    {
      "title": "Dolandırıcılık koruması",
      "desc": "Hedef kontrolleri, anomali uyarıları ve harcama limitleriyle kâr marjlarınızı koruyun.",
      "tag": "7/24 sürekli izleme"
    },
    {
      "title": "Kalite analitiği",
      "desc": "Rota ve hedefe göre ASR, ACD, PDD, jitter ve tamamlanma oranlarını anlık izleyin.",
      "tag": "Gerçek zamanlı raporlama"
    },
    {
      "title": "Özel rota belirleme",
      "desc": "Rotaları kalite, fiyat, coğrafya veya müşteriye özel kurallara göre önceliklendirin.",
      "tag": "Kural tabanlı yönetim"
    }
  ],
  "networkBadge": "KÜRESEL ÖLÇEKTE GÜVENİLİRLİK",
  "networkTitle": "Konuşmaların Kesintisiz Akması İçin Tasarlanan Bir Ağ",
  "networkDesc": "Yedekli ara bağlantılar, proaktif rota yönetimi ve 24 saat mühendislik desteği her çağrıyı yoğunluk ve kesintilerden korur.",
  "networkBullets": [
    "Hedef bazında çoklu operatör yedekliliği",
    "Aktif kalite puanlaması ve otomatik failover",
    "Coğrafi olarak dağıtılmış sinyalleşme ve medya altyapısı",
    "Proaktif dolandırıcılık tespiti ve trafik kontrolleri"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Çekirdek ağ kullanılabilirliği"
    },
    {
      "val": "190+",
      "label": "Desteklenen ülke ve bölge"
    },
    {
      "val": "24/7",
      "label": "Küresel ağ operasyonları"
    },
    {
      "val": "< 1 sn",
      "label": "Otomatik rota tepki süresi"
    }
  ],
  "liveStatus": {
    "title": "Tüm sistemler çalışıyor",
    "check": "Son rota kontrolü 12 sn önce",
    "live": "CANLI"
  },
  "momentsBadge": "GERÇEK İLETİŞİM İÇİN ÜRETİLDİ",
  "momentsTitle": "Her Kritik An İçin Kesintisiz Ses Hizmetleri",
  "momentsSubtitle": "Günlük müşteri hizmetlerinden yüksek öncelikli uyarılara kadar, iNet Global ekiplere insanları bağlı tutacak erişim ve kontrolü sunar.",
  "moments": [
    {
      "title": "Çağrı merkezleri",
      "desc": "Dağıtık müşteri temsilcilerine tüm bölgelerde tutarlı gelen ve giden ses iletişimi sağlayın.",
      "footer": "Yerel varlık • taşma yönlendirmesi"
    },
    {
      "title": "Fintek ve dijital platformlar",
      "desc": "Doğrulanmış aramaları, tahsilatları ve hizmet iş akışlarını güvenli küresel erişimle güçlendirin.",
      "footer": "CLI iletimi • Dolandırıcılık kontrolleri"
    },
    {
      "title": "Seyahat ve konaklama",
      "desc": "Misafirleri ve operasyon ekiplerini her yolculuk öncesinde, sırasında ve sonrasında bağlayın.",
      "footer": "Yerel numaralar • Çok dilli erişim"
    },
    {
      "title": "Kritik acil bildirimler",
      "desc": "Zamana duyarlı aramaları öncelikli rotalar ve gerçek zamanlı izleme ile gecikmesiz iletin.",
      "footer": "Öncelikli yönlendirme • Anında failover"
    }
  ],
  "timelineBadge": "GÜVENLE BAŞLATIN",
  "timelineTitle": "Gereksinimlerden Canlı Trafiğe, Birlikte",
  "timelineSubtitle": "Özel bir ses mühendisi tasarım, test ve trafik taşıma süreci boyunca ekibinizin yanında yer alır.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Kapsam",
      "desc": "Pazarları, hacimleri, kodekleri ve kalite hedeflerini netleştirin."
    },
    {
      "step": "2",
      "title": "Bağlantı",
      "desc": "SIP parametrelerini paylaşın ve ara bağlantınızı güvene alın."
    },
    {
      "step": "3",
      "title": "Doğrulama",
      "desc": "Birlikte çalışabilirlik ve numara gösterim testlerini gerçekleştirin."
    },
    {
      "step": "4",
      "title": "Canlıya Geçiş",
      "desc": "Mühendislerimizin canlı gözetimi altında trafiği aşamalı aktarın."
    }
  ],
  "terminal": {
    "title": "Ses bağlantı parametreleriniz",
    "readyBadge": "TESTE HAZIR",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP Beyaz Liste + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Otomatik ikincil yedek rota",
    "interopNote": "Birlikte çalışabilirlik kontrol listesi dahil",
    "viewApiDocs": "API belgelerini görüntüle"
  },
  "testimonialBadge": "ÜRETİMDE KANITLANMIŞ",
  "testimonialTitle": "Operasyon Ekibinizin Tamamen Güvenebileceği Bir Ses Ortağı",
  "testimonialSubtitle": "Şeffaf performans, hızlı mühendisler ve kritik iş iletişimi için inşa edilmiş altyapı.",
  "testimonialPills": [
    "Şifreli taşıma",
    "Kalite izleme",
    "Dolandırıcılık kontrolleri"
  ],
  "quote": "iNet Global, müşteri deneyimini olumsuz etkilemeden üç bölgedeki ses trafiğini tek çatı altında birleştirmemiz için bize tam rota görünürlüğü ve operasyonel destek sağladı.",
  "authorName": "Maya Chen",
  "authorRole": "Ağ Operasyonları Başkan Yardımcısı • Global CX Platformu",
  "stat1Val": "18%",
  "stat1Label": "daha düşük rota maliyeti",
  "stat2Val": "+4.2 puan",
  "stat2Label": "ASR başarı artışı",
  "ctaBadge": "SES AĞINIZI BİRLİKTE kURALIM",
  "ctaTitle": "Daha Net Aramalar Ve Akıllı Küresel Erişim İçin Hazır mısınız?",
  "ctaSubtitle": "Nereye bağlanmak istediğinizi, trafik hacminizi ve kalite hedeflerinizi paylaşın. Ses uzmanlarımız doğru yönlendirme ve numara stratejisini tasarlasın.",
  "contactUs": "Bize ulaşın",
  "responseTime": "1 iş günü içinde dönüş garantisi"
};

const id: WholesaleVoiceTranslation = {
  "heroBadge": "INFRASTRUKTUR SUARA GLOBAL",
  "heroTitle": "Setiap Panggilan, Terhubung Dengan Penuh Percaya Diri.",
  "heroDesc": "Terminasi, originasi suara, dan nomor virtual tingkat operator untuk bisnis yang membutuhkan percakapan jernih di setiap pasar—didukung perutean cerdas dan operasi jaringan 24/7.",
  "talkToExpert": "Bicara dengan pakar",
  "exploreCapabilities": "Jelajahi kapabilitas",
  "stats": {
    "countries": "190+",
    "countriesLabel": "negara terjangkau",
    "availability": "99.999%",
    "availabilityLabel": "ketersediaan jaringan inti",
    "operations": "24/7",
    "operationsLabel": "operasi jaringan"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "panggilan langsung dirutekan"
  },
  "heroLiveBadge2": {
    "title": "Rute terbaik dipilih",
    "latency": "43 ms",
    "quality": "Kualitas HD"
  },
  "whyBadge": "MENGAPA INET VOICE",
  "whyTitle": "Infrastruktur Suara Yang Meraih Kepercayaan Pelanggan",
  "whySubtitle1": "Dibangun untuk tim yang tidak dapat berkompromi dalam hal kualitas panggilan, jangkauan, atau kendali operasional.",
  "whySubtitle2": "Satu mitra tepercaya untuk lalu lintas internasional, kehadiran lokal, dan keahlian jaringan di balik setiap panggilan.",
  "whyCards": [
    {
      "title": "Suara jernih konsisten",
      "desc": "Rute latensi rendah dan pengarahan lalu lintas berbasis kualitas menjaga percakapan tetap alami.",
      "footer": "Suara HD dan dukungan ragam codec"
    },
    {
      "title": "Jangkau lebih banyak pasar",
      "desc": "Terminasi dan lakukan panggilan melalui kemitraan operator langsung yang mapan di seluruh dunia.",
      "footer": "190+ negara dan wilayah"
    },
    {
      "title": "Kendalikan setiap rute",
      "desc": "Tetapkan aturan harga, kualitas, dan tujuan dengan visibilitas performa secara real-time.",
      "footer": "LCR fleksibel dan perutean kualitas"
    },
    {
      "title": "Skalakan tanpa hambatan",
      "desc": "Tambahkan kapasitas, nomor, dan pasar baru melalui satu platform global yang tangguh.",
      "footer": "Kapasitas SIP elastis"
    }
  ],
  "capabilitiesBadge": "KAPABILITAS UTAMA KAMI",
  "capabilitiesTitle": "Satu Tumpukan Suara, Dibangun Sesuai Kebutuhan Trafik Anda",
  "capabilitiesDesc": "Gabungkan hanya fitur yang Anda butuhkan, lalu kembangkan berdasarkan pasar, jenis nomor, atau kebijakan rute tanpa perlu merombak sistem komunikasi Anda.",
  "designSolution": "Rancang solusi Anda",
  "solutionNote": "Termasuk perancangan arsitektur dan pengujian interoperabilitas",
  "capabilities": [
    {
      "title": "Terminasi wholesale",
      "desc": "Rute lalu lintas suara internasional melalui jalur multi-operator yang dikelola secara berkualitas.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Hubungkan PBX, contact center, dan platform komunikasi dengan kapasitas elastis.",
      "tag": "Masuk + Keluar"
    },
    {
      "title": "Nomor Virtual (DID)",
      "desc": "Bangun kehadiran lokal tepercaya dengan nomor geografis, nasional, dan bebas pulsa (toll-free).",
      "tag": "Inventaris DID global"
    },
    {
      "title": "Proteksi penipuan (Fraud)",
      "desc": "Lindungi margin bisnis dengan kontrol tujuan, peringatan anomali, dan batas pengeluaran.",
      "tag": "Pemantauan 24/7 non-stop"
    },
    {
      "title": "Analitik kualitas",
      "desc": "Pantau ASR, ACD, PDD, jitter, dan tingkat keberhasilan berdasarkan rute dan tujuan.",
      "tag": "Pelaporan real-time"
    },
    {
      "title": "Perutean kustom",
      "desc": "Prioritaskan rute berdasarkan kualitas, tarif, letak geografis, atau kebijakan kustom pelanggan.",
      "tag": "Kontrol berbasis aturan"
    }
  ],
  "networkBadge": "KEANDALAN PADA SKALA GLOBAL",
  "networkTitle": "Jaringan Yang Dirancang Agar Percakapan Terus Berjalan",
  "networkDesc": "Interkoneksi redundan, manajemen rute proaktif, dan rekayasa teknis 24 jam melindungi setiap panggilan dari kemacetan dan gangguan.",
  "networkBullets": [
    "Redundansi multi-operator per tujuan",
    "Skoring kualitas aktif dan failover otomatis",
    "Infrastruktur sinyal dan media yang terdistribusi secara geografis",
    "Deteksi penipuan proaktif dan kendali lalu lintas ketat"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Ketersediaan jaringan inti"
    },
    {
      "val": "190+",
      "label": "Negara dan wilayah terlayani"
    },
    {
      "val": "24/7",
      "label": "Operasi jaringan global"
    },
    {
      "val": "< 1 dtk",
      "label": "Respons pengalihan rute otomatis"
    }
  ],
  "liveStatus": {
    "title": "Semua sistem beroperasi normal",
    "check": "Pengecekan rute terakhir 12 detik lalu",
    "live": "LANGSUNG"
  },
  "momentsBadge": "DIBUAT UNTUK PERCAKAPAN NYATA",
  "momentsTitle": "Layanan Suara Untuk Setiap Momen Krusial Bisnis",
  "momentsSubtitle": "Dari layanan pelanggan harian hingga peringatan prioritas tinggi, iNet Global memberi tim jangkauan dan kontrol untuk menjaga orang tetap terhubung.",
  "moments": [
    {
      "title": "Contact Center",
      "desc": "Beri agen terdistribusi komunikasi suara masuk dan keluar yang konsisten di semua wilayah.",
      "footer": "Kehadiran lokal • overflow routing"
    },
    {
      "title": "Fintech & Platform Digital",
      "desc": "Dukung panggilan verifikasi, penagihan, dan alur layanan dengan jangkauan global yang aman.",
      "footer": "Penyampaian CLI • Kontrol fraud"
    },
    {
      "title": "Perjalanan & Perhotelan",
      "desc": "Hubungkan tamu dan tim operasi sebelum, selama, dan setelah setiap perjalanan.",
      "footer": "Nomor lokal • Jangkauan multibahasa"
    },
    {
      "title": "Notifikasi Kritis",
      "desc": "Kirim panggilan yang sensitif terhadap waktu dengan rute prioritas dan pemantauan real-time.",
      "footer": "Perutean prioritas • Failover instan"
    }
  ],
  "timelineBadge": "LUNCURKAN DENGAN YAKIN",
  "timelineTitle": "Bersama: Dari Spesifikasi Hingga Lalu Lintas Live",
  "timelineSubtitle": "Insinyur suara berdedikasi mendampingi tim Anda melalui desain, pengujian, dan migrasi trafik hingga siap diluncurkan.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Cakupan",
      "desc": "Konfirmasi pasar, volume lalu lintas, codec, dan target kualitas."
    },
    {
      "step": "2",
      "title": "Koneksi",
      "desc": "Pertukaran detail SIP dan pengamanan interkoneksi Anda."
    },
    {
      "step": "3",
      "title": "Validasi",
      "desc": "Jalankan uji interoperabilitas dan tes presentasi nomor pemanggil (CLI)."
    },
    {
      "step": "4",
      "title": "Peluncuran",
      "desc": "Alihkan trafik secara bertahap di bawah pengawasan langsung teknisi."
    }
  ],
  "terminal": {
    "title": "Koneksi suara Anda",
    "readyBadge": "SIAP DIUJI",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Daftar Putih IP + TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Rute sekunder otomatis",
    "interopNote": "Daftar periksa interoperabilitas disertakan",
    "viewApiDocs": "Lihat dokumentasi API"
  },
  "testimonialBadge": "TERBUKTI DI PRODUKSI",
  "testimonialTitle": "Mitra Suara Yang Dapat Diandalkan Sepenuhnya Oleh Tim Operasi",
  "testimonialSubtitle": "Performa transparan, teknisi responsif, dan infrastruktur yang dibangun untuk komunikasi bisnis kritis.",
  "testimonialPills": [
    "Transport terenkripsi",
    "Pemantauan kualitas",
    "Kontrol anti-penipuan"
  ],
  "quote": "iNet Global memberi kami visibilitas rute dan dukungan langsung untuk mengonsolidasikan lalu lintas suara di tiga wilayah tanpa menurunkan pengalaman pelanggan.",
  "authorName": "Maya Chen",
  "authorRole": "VP Operasi Jaringan • Platform CX Global",
  "stat1Val": "18%",
  "stat1Label": "biaya rute lebih hemat",
  "stat2Val": "+4.2 poin",
  "stat2Label": "peningkatan rasio ASR",
  "ctaBadge": "MARI BANGUN JARINGAN SUARA ANDA",
  "ctaTitle": "Siap Untuk Panggilan Lebih Jernih Dan Jangkauan Global Cerdas?",
  "ctaSubtitle": "Beri tahu kami tujuan koneksi Anda, volume trafik, dan standar kualitas yang diharapkan. Tim suara kami akan merancang strategi routing dan penomoran yang tepat.",
  "contactUs": "Hubungi kami",
  "responseTime": "Respon dalam 1 hari kerja"
};

const vi: WholesaleVoiceTranslation = {
  "heroBadge": "HẠ TẦNG THOẠI TOÀN CẦU",
  "heroTitle": "Mọi Cuộc Gọi, Kết Nối Với Sự Tự Tin Tuyệt Đối.",
  "heroDesc": "Dịch vụ đích đến thoại (termination), khởi tạo cuộc gọi và đầu số ảo chuẩn nhà mạng dành cho các doanh nghiệp cần cuộc hội thoại trong trẻo tại mọi thị trường—được hỗ trợ bởi định tuyến thông minh và trung tâm điều hành 24/7.",
  "talkToExpert": "Trao đổi với chuyên gia",
  "exploreCapabilities": "Khám phá tính năng",
  "stats": {
    "countries": "190+",
    "countriesLabel": "quốc gia kết nối",
    "availability": "99.999%",
    "availabilityLabel": "độ sẵn sàng mạng lõi",
    "operations": "24/7",
    "operationsLabel": "vận hành mạng lưới"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "cuộc gọi trực tiếp đang định tuyến"
  },
  "heroLiveBadge2": {
    "title": "Đã chọn tuyến tối ưu nhất",
    "latency": "43 ms",
    "quality": "Chất lượng HD"
  },
  "whyBadge": "TẠI SAO CHỌN INET VOICE",
  "whyTitle": "Hạ Tầng Thoại Tạo Dựng Niềm Tin Khách Hàng",
  "whySubtitle1": "Được xây dựng cho các đội ngũ kỹ thuật không chấp nhận thỏa hiệp về chất lượng cuộc gọi, độ phủ sóng hay khả năng kiểm soát vận hành.",
  "whySubtitle2": "Một đối tác duy nhất cho lưu lượng quốc tế, hiện diện nội địa và năng lực chuyên sâu đằng sau mỗi cuộc gọi.",
  "whyCards": [
    {
      "title": "Âm thanh trong trẻo ổn định",
      "desc": "Các tuyến đường độ trễ thấp và điều phối lưu lượng theo chất lượng giữ cho các cuộc hội thoại luôn tự nhiên.",
      "footer": "Hỗ trợ chuẩn thoại HD và đa dạng codec"
    },
    {
      "title": "Tiếp cận nhiều thị trường hơn",
      "desc": "Thực hiện cuộc gọi đi và đến qua các mối quan hệ trực tiếp với nhà mạng viễn thông hàng đầu thế giới.",
      "footer": "Hơn 190 quốc gia và vùng lãnh thổ"
    },
    {
      "title": "Kiểm soát từng tuyến đường",
      "desc": "Thiết lập quy tắc giá cước, chất lượng và điểm đến với khả năng theo dõi hiệu suất theo thời gian thực.",
      "footer": "Định tuyến LCR linh hoạt & theo chất lượng"
    },
    {
      "title": "Mở rộng không rào cản",
      "desc": "Gia tăng dung lượng, thêm đầu số và khai phóng thị trường mới trên một nền tảng toàn cầu kiên cố.",
      "footer": "Dung lượng SIP co giãn linh hoạt"
    }
  ],
  "capabilitiesBadge": "NĂNG LỰC CỐT LÕI CỦA CHÚNG TÔI",
  "capabilitiesTitle": "Một Hệ Thống Thoại Toàn Diện, Xoay Quanh Lưu Lượng Của Bạn",
  "capabilitiesDesc": "Chỉ kết hợp những gì bạn cần, sau đó mở rộng theo thị trường, loại đầu số hoặc chính sách định tuyến mà không cần xây dựng lại toàn bộ tầng liên lạc.",
  "designSolution": "Thiết kế giải pháp của bạn",
  "solutionNote": "Bao gồm tư vấn thiết kế giải pháp và kiểm thử khả năng tương thích",
  "capabilities": [
    {
      "title": "Kết thúc cuộc gọi sỉ (Wholesale)",
      "desc": "Định tuyến lưu lượng thoại quốc tế qua các tuyến đa nhà mạng được quản lý chất lượng nghiêm ngặt.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Kết nối tổng đài IP PBX, trung tâm liên lạc và nền tảng ứng dụng với dung lượng co giãn không giới hạn.",
      "tag": "Chiều vào + Chiều ra"
    },
    {
      "title": "Đầu số ảo (DID)",
      "desc": "Xây dựng hiện diện địa phương uy tín với các số địa lý, quốc gia và đầu số miễn cước (toll-free).",
      "tag": "Kho số DID toàn cầu"
    },
    {
      "title": "Bảo vệ chống gian lận",
      "desc": "Bảo vệ biên lợi nhuận với kiểm soát điểm đến, cảnh báo bất thường và hạn mức chi tiêu tự động.",
      "tag": "Giám sát 24/7 liên tục"
    },
    {
      "title": "Phân tích chất lượng",
      "desc": "Theo dõi sát sao ASR, ACD, PDD, jitter và tỷ lệ hoàn thành cuộc gọi theo từng tuyến và điểm đến.",
      "tag": "Báo cáo thời gian thực"
    },
    {
      "title": "Định tuyến tùy chỉnh",
      "desc": "Ưu tiên tuyến theo chất lượng, chi phí, địa lý hoặc theo quy chuẩn nghiệp vụ riêng của khách hàng.",
      "tag": "Điều khiển theo quy tắc"
    }
  ],
  "networkBadge": "ĐỘ TIN CẬY Ở QUY MÔ TOÀN CẦU",
  "networkTitle": "Mạng Lưới Được Thiết Kế Để Cuộc Trò Chuyện Luôn Liền Mạch",
  "networkDesc": "Kết nối dự phòng, chủ động quản lý tuyến và đội ngũ kỹ sư 24/7 bảo vệ mọi cuộc gọi khỏi nghẽn mạng và gián đoạn.",
  "networkBullets": [
    "Dự phòng đa nhà mạng theo từng điểm đến",
    "Chấm điểm chất lượng chủ động và tự động chuyển đổi dự phòng",
    "Hạ tầng báo hiệu và truyền thông phân tán theo vị trí địa lý",
    "Chủ động phát hiện gian lận và kiểm soát chặt chẽ lưu lượng"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Độ sẵn sàng mạng lõi"
    },
    {
      "val": "190+",
      "label": "Quốc gia & vùng lãnh thổ"
    },
    {
      "val": "24/7",
      "label": "Vận hành mạng toàn cầu"
    },
    {
      "val": "< 1 giây",
      "label": "Phản hồi chuyển tuyến tự động"
    }
  ],
  "liveStatus": {
    "title": "Tất cả hệ thống đang hoạt động",
    "check": "Lần kiểm tra tuyến gần nhất: 12 giây trước",
    "live": "TRỰC TIẾP"
  },
  "momentsBadge": "ĐƯỢC TẠO DỰNG CHO CUỘC GỌI THỰC TẾ",
  "momentsTitle": "Dịch Vụ Thoại Cho Mọi Khoảnh Khắc Then Chốt",
  "momentsSubtitle": "Từ chăm sóc khách hàng hàng ngày đến thông báo khẩn cấp ưu tiên cao, iNet Global mang đến độ phủ và sự kiểm soát giúp kết nối mọi người.",
  "moments": [
    {
      "title": "Trung tâm liên lạc (Contact Center)",
      "desc": "Cung cấp cho các tổng đài viên phân tán thoại vào/ra ổn định đồng nhất trên mọi khu vực.",
      "footer": "Hiện diện địa phương • định tuyến tràn cuộc gọi"
    },
    {
      "title": "Fintech & Nền tảng số",
      "desc": "Vận hành các cuộc gọi xác thực, thu hồi nợ và quy trình dịch vụ với phạm vi toàn cầu an toàn.",
      "footer": "Hiển thị số CLI chuẩn • Kiểm soát gian lận"
    },
    {
      "title": "Du lịch & Khách sạn",
      "desc": "Kết nối du khách và đội ngũ vận hành trước, trong và sau mỗi hành trình chuyến đi.",
      "footer": "Đầu số bản địa • Độ phủ đa ngôn ngữ"
    },
    {
      "title": "Thông báo khẩn cấp",
      "desc": "Chuyển phát các cuộc gọi nhạy cảm về thời gian với tuyến ưu tiên và giám sát theo thời gian thực.",
      "footer": "Định tuyến ưu tiên • Dự phòng tức thì"
    }
  ],
  "timelineBadge": "TRIỂN KHAI VỚI SỰ TỰ TIN",
  "timelineTitle": "Đồng Hành Cùng Nhau Từ Yêu Cầu Đến Lưu Lượng Trực Tiếp",
  "timelineSubtitle": "Một kỹ sư thoại chuyên trách luôn đồng hành cùng đội ngũ của bạn qua các khâu thiết kế, kiểm thử và chuyển dịch lưu lượng trước khi chính thức vận hành.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Khảo sát",
      "desc": "Xác nhận thị trường, lưu lượng, codec và mục tiêu chất lượng."
    },
    {
      "step": "2",
      "title": "Kết nối",
      "desc": "Trao đổi thông số kỹ thuật SIP và thiết lập liên kết an toàn."
    },
    {
      "step": "3",
      "title": "Kiểm thử",
      "desc": "Thực hiện kiểm tra tương thích và kiểm tra hiển thị đầu số CLI."
    },
    {
      "step": "4",
      "title": "Phát sóng",
      "desc": "Chuyển lưu lượng theo từng giai đoạn dưới sự giám sát trực tiếp."
    }
  ],
  "terminal": {
    "title": "Thông số kết nối thoại của bạn",
    "readyBadge": "SẴN SÀNG THỬ NGHIỆM",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Danh sách IP tin cậy + Mã hóa TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Tuyến phụ tự động chuyển đổi",
    "interopNote": "Bao gồm danh mục kiểm tra tương thích",
    "viewApiDocs": "Xem tài liệu API"
  },
  "testimonialBadge": "ĐÃ ĐƯỢC CHỨNG MINH THỰC TẾ",
  "testimonialTitle": "Đối Tác Viễn Thông Đáng Tin Cậy Cho Đội Ngũ Vận Hành",
  "testimonialSubtitle": "Hiệu suất minh bạch, kỹ sư hỗ trợ nhanh chóng và kiến trúc hạ tầng chuyên biệt cho truyền thông doanh nghiệp trọng yếu.",
  "testimonialPills": [
    "Truyền dẫn mã hóa",
    "Giám sát chất lượng",
    "Kiểm soát gian lận"
  ],
  "quote": "iNet Global đã mang lại cho chúng tôi tầm nhìn xuyên suốt về các tuyến gọi và hỗ trợ trực tiếp để hợp nhất lưu lượng thoại trên ba khu vực mà không ảnh hưởng đến trải nghiệm khách hàng.",
  "authorName": "Maya Chen",
  "authorRole": "Phó chủ tịch Vận hành Mạng lưới • Nền tảng CX Toàn cầu",
  "stat1Val": "18%",
  "stat1Label": "tiết kiệm chi phí tuyến gọi",
  "stat2Val": "+4.2 điểm",
  "stat2Label": "tăng tỷ lệ thành công (ASR)",
  "ctaBadge": "HÃY CÙNG XÂY DỰNG MẠNG THOẠI CỦA BẠN",
  "ctaTitle": "Sẵn Sàng Cho Cuộc Gọi Rõ Ràng Hơn Và Phạm Vi Toàn Cầu Thông Minh?",
  "ctaSubtitle": "Hãy chia sẻ với chúng tôi điểm đến cần kết nối, lưu lượng cuộc gọi và tiêu chuẩn chất lượng của bạn. Đội ngũ kỹ sư sẽ thiết kế chiến lược định tuyến và đầu số tối ưu.",
  "contactUs": "Liên hệ chúng tôi",
  "responseTime": "Phản hồi trong vòng 1 ngày làm việc"
};

const pl: WholesaleVoiceTranslation = {
  "heroBadge": "GLOBALNA INFRASTRUKTURA GŁOSOWA",
  "heroTitle": "Każde Połączenie, Zestawione Z Pełnym Zaufaniem.",
  "heroDesc": "Terminacja, pochodzenie połączeń i numery wirtualne klasy operatorskiej dla firm wymagających krystalicznie czystych rozmów na każdym rynku—wspierane przez inteligentny routing i całodobowe centrum operacji sieciowych 24/7.",
  "talkToExpert": "Porozmawiaj z ekspertem",
  "exploreCapabilities": "Poznaj możliwości",
  "stats": {
    "countries": "190+",
    "countriesLabel": "obsługiwanych krajów",
    "availability": "99.999%",
    "availabilityLabel": "dostępność rdzenia sieci",
    "operations": "24/7",
    "operationsLabel": "operacje sieciowe"
  },
  "heroLiveBadge1": {
    "count": "12 480",
    "label": "aktywnych połączeń na żywo"
  },
  "heroLiveBadge2": {
    "title": "Wybrano najlepszą trasę",
    "latency": "43 ms",
    "quality": "Jakość HD"
  },
  "whyBadge": "DLACZEGO INET VOICE",
  "whyTitle": "Infrastruktura Głosowa, Która Buduje Zaufanie Klientów",
  "whySubtitle1": "Stworzona dla zespołów, które nie uznają kompromisów w zakresie jakości rozmów, globalnego zasięgu ani kontroli operacyjnej.",
  "whySubtitle2": "Jeden zaufany partner w ruchu międzynarodowym, lokalnej obecności i zaawansowanej wiedzy inżynieryjnej stojącej za każdym połączeniem.",
  "whyCards": [
    {
      "title": "Niezmiennie czysty dźwięk",
      "desc": "Trasy o niskim opóźnieniu i sterowanie ruchem oparte na parametrach jakościowych gwarantują naturalną konwersację.",
      "footer": "Głos HD i obsługa nowoczesnych kodeków"
    },
    {
      "title": "Docieraj na kolejne rynki",
      "desc": "Terminuj i inicjuj połączenia dzięki bezpośrednim i ugruntowanym relacjom operatorskim na całym świecie.",
      "footer": "Ponad 190 krajów i terytoriów"
    },
    {
      "title": "Kontroluj każdą trasę",
      "desc": "Definiuj reguły cenowe, jakościowe i docelowe z pełnym wglądem w wydajność sieci w czasie rzeczywistym.",
      "footer": "Elastyczny LCR i routing jakościowy"
    },
    {
      "title": "Skaluj bez jakichkolwiek barier",
      "desc": "Zwiększaj przepustowość, dodawaj numery i wchodź na nowe rynki za pośrednictwem jednej odpornej na awarie platformy.",
      "footer": "Elastyczna pojemność SIP"
    }
  ],
  "capabilitiesBadge": "NASZE KLUCZOWE KOMPETENCJE",
  "capabilitiesTitle": "Jeden Zintegrowany Stos Głosowy, Dopasowany Do Twojego Ruchu",
  "capabilitiesDesc": "Łącz tylko te moduły, których potrzebujesz, a następnie rozszerzaj zasięg według rynków, rodzajów numerów czy polityk routingu bez przebudowy warstwy telekomunikacyjnej.",
  "designSolution": "Zaprojektuj swoje rozwiązanie",
  "solutionNote": "Projektowanie architektury i testy interoperacyjności w pakiecie",
  "capabilities": [
    {
      "title": "Terminacja hurtowa (Wholesale)",
      "desc": "Kieruj międzynarodowy ruch głosowy przez zarządzane jakościowo ścieżki wielooperatorskie.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Łącz centrale PBX, contact center i platformy komunikacyjne z elastyczną przepustowością na żądanie.",
      "tag": "Ruch przychodzący + wychodzący"
    },
    {
      "title": "Numery Wirtualne (DID)",
      "desc": "Buduj zaufaną lokalną obecność za pomocą numerów geograficznych, krajowych oraz bezpłatnych linii toll-free.",
      "tag": "Globalny inwentarz DID"
    },
    {
      "title": "Ochrona przed nadużyciami (Antyfraud)",
      "desc": "Chroń marżę dzięki filtrom destynacji, alertom anomalii oraz automatycznym limitom wydatków.",
      "tag": "Ciągły monitoring 24/7"
    },
    {
      "title": "Analityka jakościowa",
      "desc": "Śledź wskaźniki ASR, ACD, PDD, jitter i współczynniki powodzenia połączeń według tras i kierunków.",
      "tag": "Raportowanie w czasie rzeczywistym"
    },
    {
      "title": "Dedykowany routing",
      "desc": "Ustalaj priorytety tras według parametrów jakościowych, stawek, lokalizacji lub reguł biznesowych.",
      "tag": "Kontrola regułowa"
    }
  ],
  "networkBadge": "NIEZAWODNOŚĆ W SKALI GLOBALNEJ",
  "networkTitle": "Sieć Zaprojektowana Tak, By Rozmowy Płynęły Bez Zakłóceń",
  "networkDesc": "Zdublowane punkty styku, proaktywne zarządzanie trasami i inżynierowie czuwający 24/7 zabezpieczają każde połączenie przed przeciążeniami.",
  "networkBullets": [
    "Redundancja wielu operatorów dla każdego kierunku",
    "Aktywny scoring jakości i automatyczne przełączanie awaryjne",
    "Geograficznie rozproszona infrastruktura sygnalizacyjna i mediów",
    "Proaktywne wykrywanie nadużyć i rygorystyczna kontrola ruchu"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Dostępność rdzenia sieci"
    },
    {
      "val": "190+",
      "label": "Obsługiwanych krajów i terytoriów"
    },
    {
      "val": "24/7",
      "label": "Globalne operacje sieciowe"
    },
    {
      "val": "< 1 s",
      "label": "Automatyczna reakcja trasy"
    }
  ],
  "liveStatus": {
    "title": "Wszystkie systemy działają sprawnie",
    "check": "Ostatnie sprawdzenie trasy 12 sek temu",
    "live": "NA ŻYWO"
  },
  "momentsBadge": "STWORZONE DLA PRAWDZIWYCH ROZMÓW",
  "momentsTitle": "Usługi Głosowe Na Każdy Kluczowy Moment W Biznesie",
  "momentsSubtitle": "Od codziennej obsługi klienta po pilne powiadomienia o wysokim priorytecie, iNet Global zapewnia zasięg i kontrolę niezbędne do niezawodnego kontaktu.",
  "moments": [
    {
      "title": "Contact Center",
      "desc": "Zapewnij rozproszonym konsultantom stabilną łączność przychodzącą i wychodzącą we wszystkich regionach.",
      "footer": "Lokalna obecność • routing overflow"
    },
    {
      "title": "Fintech i platformy",
      "desc": "Obsługuj zweryfikowane połączenia, windykację i procesy obsługowe z bezpiecznym zasięgiem globalnym.",
      "footer": "Prezentacja CLI • Kontrole antyfraudowe"
    },
    {
      "title": "Podróże i hotelarstwo",
      "desc": "Łącz podróżnych i zespoły operacyjne przed, w trakcie oraz po zakończeniu każdej podróży.",
      "footer": "Lokalne numery • Zasięg wielojęzyczny"
    },
    {
      "title": "Powiadomienia krytyczne",
      "desc": "Dostarczaj pilne komunikaty głosowe za pośrednictwem tras priorytetowych z ciągłym nadzorem.",
      "footer": "Routing priorytetowy • Natychmiastowy failover"
    }
  ],
  "timelineBadge": "WDRÓŻ Z PEŁNYM SPOKOJEM",
  "timelineTitle": "Od Wymagań Do Działającego Ruchu, Ramię W Ramię",
  "timelineSubtitle": "Dedykowany inżynier telekomunikacji wspiera Twój zespół na etapach projektowania, testowania i migracji ruchu—wszystko gotowe przed startem.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Zakres",
      "desc": "Ustalenie rynków docelowych, wolumenów ruchu, kodeków i celów jakościowych."
    },
    {
      "step": "2",
      "title": "Styk SIP",
      "desc": "Wymiana parametrów połączenia i zabezpieczenie punktu styku."
    },
    {
      "step": "3",
      "title": "Walidacja",
      "desc": "Przeprowadzenie testów zgodności i poprawnej prezentacji numeru (CLI)."
    },
    {
      "step": "4",
      "title": "Uruchomienie",
      "desc": "Stopniowa migracja ruchu pod bezpośrednim nadzorem naszych inżynierów."
    }
  ],
  "terminal": {
    "title": "Twoje parametry połączenia głosowego",
    "readyBadge": "GOTOWE DO TESTÓW",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Biała lista IP + Szyfrowanie TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Automatyczna zapasowa trasa",
    "interopNote": "Lista kontrolna interoperacyjności w zestawie",
    "viewApiDocs": "Zobacz dokumentację API"
  },
  "testimonialBadge": "SPRAWDZONE W PRODUKCJI",
  "testimonialTitle": "Partner Telekomunikacyjny, Na Którym Twój Zespół Operacyjny Zawsze Może Polegać",
  "testimonialSubtitle": "Przejrzyste wyniki, pomocni inżynierowie i infrastruktura stworzona z myślą o komunikacji o krytycznym znaczeniu dla biznesu.",
  "testimonialPills": [
    "Szyfrowany transport",
    "Monitorowanie jakości",
    "Ochrona przed nadużyciami"
  ],
  "quote": "iNet Global zapewnił nam pełną przejrzystość tras i bezpośrednie wsparcie techniczne, aby skonsolidować ruch głosowy w trzech regionach bez uszczerbku dla zadowolenia klientów.",
  "authorName": "Maya Chen",
  "authorRole": "Wiceprezes ds. Operacji Sieciowych • Globalna platforma CX",
  "stat1Val": "18%",
  "stat1Label": "niższy koszt tras",
  "stat2Val": "+4.2 pkt",
  "stat2Label": "poprawa wskaźnika ASR",
  "ctaBadge": "ZBUDUJMY TWOJĄ SIEĆ GŁOSOWĄ",
  "ctaTitle": "Gotowy Na Bardziej Krystaliczne Rozmowy I Inteligentny Zasięg Globalny?",
  "ctaSubtitle": "Opowiedz nam o rynkach docelowych, spodziewanym wolumenie ruchu i wymaganiach jakościowych. Nasi eksperci opracują optymalną strategię routingu i numeracji.",
  "contactUs": "Skontaktuj się z nami",
  "responseTime": "Odpowiedź w ciągu 1 dnia roboczego"
};

const th: WholesaleVoiceTranslation = {
  "heroBadge": "โครงสร้างพื้นฐานระบบเสียงระดับโลก",
  "heroTitle": "ทุกสายสนทนา เชื่อมต่อด้วยความมั่นใจสูงสุด",
  "heroDesc": "บริการรับส่งทราฟฟิกเสียงระดับผู้ให้บริการโครงข่าย (Carrier-grade) และหมายเลขเสมือน สำหรับธุรกิจที่ต้องการการสนทนาที่คมชัดในทุกตลาด—ขับเคลื่อนด้วยระบบกำหนดเส้นทางอัจฉริยะและการปฏิบัติการเครือข่ายตลอด 24 ชั่วโมง",
  "talkToExpert": "ปรึกษาผู้เชี่ยวชาญ",
  "exploreCapabilities": "สำรวจความสามารถ",
  "stats": {
    "countries": "190+",
    "countriesLabel": "ประเทศที่ครอบคลุม",
    "availability": "99.999%",
    "availabilityLabel": "ความพร้อมใช้งานของเครือข่ายหลัก",
    "operations": "24/7",
    "operationsLabel": "การดำเนินงานเครือข่าย"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "สายสนทนาสดที่กำลังส่งผ่าน"
  },
  "heroLiveBadge2": {
    "title": "เลือกเส้นทางที่ดีที่สุดแล้ว",
    "latency": "43 ms",
    "quality": "คุณภาพเสียงระดับ HD"
  },
  "whyBadge": "ทำไมต้องเลือก INET VOICE",
  "whyTitle": "โครงสร้างพื้นฐานเสียงที่สร้างความไว้วางใจให้ลูกค้า",
  "whySubtitle1": "สร้างขึ้นสำหรับทีมงานที่ไม่ยอมประนีประนอมกับคุณภาพสายสนทนา ขอบเขตการเข้าถึง หรือการควบคุมการปฏิบัติงาน",
  "whySubtitle2": "พันธมิตรเดียวสำหรับทราฟฟิกระหว่างประเทศ การมีตัวตนในท้องถิ่น และความเชี่ยวชาญด้านเครือข่ายเบื้องหลังทุกสายการโทร",
  "whyCards": [
    {
      "title": "เสียงคมชัดอย่างสม่ำเสมอ",
      "desc": "เส้นทางที่มีความหน่วงต่ำและการจัดสรรทราฟฟิกตามคุณภาพช่วยให้การสนทนาเป็นไปอย่างเป็นธรรมชาติ",
      "footer": "รองรับเสียงระดับ HD และตัวแปลงสัญญาณที่หลากหลาย"
    },
    {
      "title": "เข้าถึงตลาดได้มากขึ้น",
      "desc": "ส่งต่อและริเริ่มการโทรผ่านความสัมพันธ์โดยตรงกับผู้ให้บริการเครือข่ายโทรคมนาคมชั้นนำทั่วโลก",
      "footer": "ครอบคลุมกว่า 190 ประเทศและเขตการปกครอง"
    },
    {
      "title": "ควบคุมทุกเส้นทางได้เต็มที่",
      "desc": "กำหนดกฎด้านราคา คุณภาพ และปลายทางพร้อมทัศนวิสัยด้านประสิทธิภาพแบบเรียลไทม์",
      "footer": "LCR ที่ยืดหยุ่นและการจัดเส้นทางตามคุณภาพ"
    },
    {
      "title": "ขยายขนาดได้อย่างไร้รอยต่อ",
      "desc": "เพิ่มความจุ หมายเลข และตลาดใหม่ได้อย่างง่ายดายผ่านแพลตฟอร์มระดับโลกที่มั่นคงเพียงหนึ่งเดียว",
      "footer": "ความจุ SIP ที่ยืดหยุ่นสูง"
    }
  ],
  "capabilitiesBadge": "ขีดความสามารถหลักของเรา",
  "capabilitiesTitle": "สแตกบริการเสียงครบวงจร สร้างขึ้นรอบทราฟฟิกของคุณ",
  "capabilitiesDesc": "ผสมผสานเฉพาะสิ่งที่คุณต้องการ จากนั้นขยายตามตลาด ประเภทหมายเลข หรือนโยบายการจัดเส้นทางโดยไม่ต้องสร้างเลเยอร์การสื่อสารใหม่",
  "designSolution": "ออกแบบโซลูชันของคุณ",
  "solutionNote": "รวมการออกแบบสถาปัตยกรรมและการทดสอบการทำงานร่วมกัน",
  "capabilities": [
    {
      "title": "การส่งต่อทราฟฟิกเสียงขายส่ง (Wholesale)",
      "desc": "กำหนดเส้นทางทราฟฟิกเสียงระหว่างประเทศผ่านเส้นทางหลายเครือข่ายที่ควบคุมคุณภาพอย่างเข้มงวด",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "เชื่อมต่อตู้สาขา PBX ศูนย์บริการลูกค้า และแพลตฟอร์มการสื่อสารด้วยความจุที่ปรับขนาดได้",
      "tag": "สายโทรเข้า + โทรออก"
    },
    {
      "title": "หมายเลขเสมือน (DID)",
      "desc": "สร้างความน่าเชื่อถือในท้องถิ่นด้วยหมายเลขตามพื้นที่ หมายเลขประจำชาติ และหมายเลขโทรฟรี",
      "tag": "คลังหมายเลข DID ทั่วโลก"
    },
    {
      "title": "ระบบป้องกันการฉ้อโกง",
      "desc": "ปกป้องผลกำไรด้วยการควบคุมปลายทาง การแจ้งเตือนสิ่งผิดปกติ และการจำกัดวงเงินค่าใช้จ่าย",
      "tag": "เฝ้าระวังตลอด 24 ชั่วโมง 7 วัน"
    },
    {
      "title": "การวิเคราะห์คุณภาพเชิงลึก",
      "desc": "ติดตาม ASR, ACD, PDD, jitter และอัตราการโทรสำเร็จตามเส้นทางและปลายทางอย่างแม่นยำ",
      "tag": "การรายงานแบบเรียลไทม์"
    },
    {
      "title": "การจัดเส้นทางแบบกำหนดเอง",
      "desc": "จัดลำดับความสำคัญของเส้นทางตามคุณภาพ ราคา พื้นที่ทางภูมิศาสตร์ หรือนโยบายเฉพาะของลูกค้า",
      "tag": "การควบคุมตามกฎที่กำหนด"
    }
  ],
  "networkBadge": "ความน่าเชื่อถือในระดับสากล",
  "networkTitle": "เครือข่ายที่ออกแบบมาเพื่อให้ทุกการสนทนาดำเนินไปอย่างราบรื่น",
  "networkDesc": "การเชื่อมต่อระหว่างโครงข่ายแบบสำรอง การจัดการเส้นทางเชิงรุก และวิศวกรผู้เชี่ยวชาญตลอด 24 ชั่วโมง ช่วยปกป้องทุกการโทรจากความหนาแน่นและการหยุดชะงัก",
  "networkBullets": [
    "ระบบสำรองหลายผู้ให้บริการในแต่ละปลายทาง",
    "การให้คะแนนคุณภาพเชิงรุกและระบบสลับเส้นทางอัตโนมัติเมื่อเกิดข้อผิดพลาด",
    "โครงสร้างพื้นฐานด้านการส่งสัญญาณและสื่อที่กระจายตัวตามภูมิศาสตร์",
    "การตรวจจับการฉ้อโกงเชิงรุกและการควบคุมทราฟฟิกที่เข้มงวด"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "ความพร้อมใช้งานของเครือข่ายหลัก"
    },
    {
      "val": "190+",
      "label": "ประเทศและเขตการปกครอง"
    },
    {
      "val": "24/7",
      "label": "ศูนย์ปฏิบัติการเครือข่ายระดับโลก"
    },
    {
      "val": "< 1 วินาที",
      "label": "การตอบสนองสลับเส้นทางอัตโนมัติ"
    }
  ],
  "liveStatus": {
    "title": "ทุกระบบทำงานได้ตามปกติ",
    "check": "ตรวจสอบเส้นทางล่าสุดเมื่อ 12 วินาทีที่แล้ว",
    "live": "สด"
  },
  "momentsBadge": "สร้างขึ้นเพื่อการสนทนาที่แท้จริง",
  "momentsTitle": "บริการเสียงสำหรับทุกช่วงเวลาที่สำคัญของธุรกิจ",
  "momentsSubtitle": "ตั้งแต่การบริการลูกค้าในชีวิตประจำวันไปจนถึงการแจ้งเตือนที่มีลำดับความสำคัญสูง iNet Global ช่วยให้ทีมงานเข้าถึงและควบคุมเพื่อเชื่อมโยงผู้คนเข้าด้วยกัน",
  "moments": [
    {
      "title": "ศูนย์บริการข้อมูลลูกค้า (Contact Center)",
      "desc": "มอบระบบเสียงโทรเข้าและโทรออกที่มีคุณภาพสม่ำเสมอแก่เจ้าหน้าที่ที่กระจายอยู่ทั่วทุกภูมิภาค",
      "footer": "ตัวตนท้องถิ่น • การจัดเส้นทางล้นสาย"
    },
    {
      "title": "ฟินเทคและแพลตฟอร์มดิจิทัล",
      "desc": "ขับเคลื่อนการโทรยืนยันตัวตน การติดตามหนี้ และเวิร์กโฟลว์บริการด้วยการเข้าถึงระดับโลกที่ปลอดภัย",
      "footer": "การแสดงหมายเลขผู้โทร (CLI) • ควบคุมการฉ้อโกง"
    },
    {
      "title": "การท่องเที่ยวและการบริการ",
      "desc": "เชื่อมโยงผู้เดินทางและทีมปฏิบัติการก่อน ระหว่าง และหลังจากการเดินทางทุกครั้ง",
      "footer": "หมายเลขท้องถิ่น • ครอบคลุมหลายภาษา"
    },
    {
      "title": "การแจ้งเตือนเหตุการณ์สำคัญ",
      "desc": "ส่งมอบการโทรที่คำนึงถึงเวลาอย่างรวดเร็วด้วยเส้นทางที่ให้ความสำคัญสูงและการตรวจสอบแบบเรียลไทม์",
      "footer": "การจัดเส้นทางพิเศษ • สลับระบบสำรองทันที"
    }
  ],
  "timelineBadge": "เริ่มต้นใช้งานด้วยความมั่นใจ",
  "timelineTitle": "ร่วมมือกันตั้งแต่ข้อกำหนดไปจนถึงทราฟฟิกจริง",
  "timelineSubtitle": "วิศวกรระบบเสียงเฉพาะทางจะร่วมงานกับทีมของคุณผ่านขั้นตอนการออกแบบ การทดสอบ และการโอนย้ายทราฟฟิก—เพื่อให้พร้อมสมบูรณ์แบบก่อนเปิดใช้งาน",
  "timelineSteps": [
    {
      "step": "1",
      "title": "กำหนดขอบเขต",
      "desc": "ยืนยันตลาด ปริมาณสายโทร ตัวแปลงสัญญาณ และเป้าหมายคุณภาพ"
    },
    {
      "step": "2",
      "title": "เชื่อมต่อ",
      "desc": "แลกเปลี่ยนรายละเอียด SIP และรักษาความปลอดภัยการเชื่อมต่อระหว่างระบบ"
    },
    {
      "step": "3",
      "title": "ตรวจสอบความถูกต้อง",
      "desc": "ทำการทดสอบการทำงานร่วมกันและการแสดงผลหมายเลขผู้โทร (CLI)"
    },
    {
      "step": "4",
      "title": "เปิดใช้งานจริง",
      "desc": "โอนย้ายทราฟฟิกเป็นระยะๆ ภายใต้การดูแลของวิศวกรแบบเรียลไทม์"
    }
  ],
  "terminal": {
    "title": "พารามิเตอร์การเชื่อมต่อเสียงของคุณ",
    "readyBadge": "พร้อมสำหรับการทดสอบ",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "รายการ IP ที่อนุญาต + การเข้ารหัส TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "เส้นทางสำรองอัตโนมัติ",
    "interopNote": "รวมรายการตรวจสอบความเข้ากันได้ของระบบ",
    "viewApiDocs": "ดูเอกสารประกอบ API"
  },
  "testimonialBadge": "พิสูจน์แล้วในการใช้งานจริง",
  "testimonialTitle": "พันธมิตรด้านเสียงที่ทีมปฏิบัติการของคุณวางใจได้อย่างแท้จริง",
  "testimonialSubtitle": "ประสิทธิภาพที่โปร่งใส วิศวกรที่ตอบสนองรวดเร็ว และโครงสร้างพื้นฐานที่สร้างขึ้นสำหรับการสื่อสารที่สำคัญต่อภารกิจทางธุรกิจ",
  "testimonialPills": [
    "การส่งข้อมูลที่เข้ารหัส",
    "การตรวจสอบคุณภาพอย่างต่อเนื่อง",
    "การป้องกันการฉ้อโกง"
  ],
  "quote": "iNet Global มอบทัศนวิสัยด้านเส้นทางและการสนับสนุนอย่างใกล้ชิดแก่เราในการรวมทราฟฟิกเสียงในสามภูมิภาคเข้าด้วยกัน โดยไม่กระทบต่อประสบการณ์ของลูกค้าแม้แต่น้อย",
  "authorName": "Maya Chen",
  "authorRole": "รองประธานฝ่ายปฏิบัติการเครือข่าย • แพลตฟอร์ม CX ระดับโลก",
  "stat1Val": "18%",
  "stat1Label": "ลดต้นทุนเส้นทางโทร",
  "stat2Val": "+4.2 จุด",
  "stat2Label": "อัตราการโทรสำเร็จ (ASR) เพิ่มขึ้น",
  "ctaBadge": "มาร่วมสร้างเครือข่ายเสียงของคุณ",
  "ctaTitle": "พร้อมสำหรับการโทรที่ชัดเจนยิ่งขึ้นและการเข้าถึงทั่วโลกที่ชาญฉลาดยิ่งขึ้นหรือยัง?",
  "ctaSubtitle": "บอกเราเกี่ยวกับปลายทางที่คุณต้องการเชื่อมต่อ ปริมาณทราฟฟิก และมาตรฐานคุณภาพที่คุณต้องการ ทีมงานเสียงของเราจะช่วยออกแบบกลยุทธ์เส้นทางและหมายเลขที่เหมาะสมที่สุด",
  "contactUs": "ติดต่อเรา",
  "responseTime": "ตอบกลับภายในหนึ่งวันทำการ"
};

const tl: WholesaleVoiceTranslation = {
  "heroBadge": "PANDAIGDIGANG IMPRASTRAKTURA NG BOSES",
  "heroTitle": "Bawat Tawag, Nakakonekta Nang May Buong Tiwala.",
  "heroDesc": "Carrier-grade na voice termination, origination, at virtual numbers para sa mga negosyong nangangailangan ng malinaw na pag-uusap sa bawat merkado—sinusuportahan ng matalinong routing at 24/7 network operations.",
  "talkToExpert": "Kausapin ang isang eksperto",
  "exploreCapabilities": "Tuklasin ang mga kakayahan",
  "stats": {
    "countries": "190+",
    "countriesLabel": "mga bansang naaabot",
    "availability": "99.999%",
    "availabilityLabel": "availability ng core network",
    "operations": "24/7",
    "operationsLabel": "mga operasyon sa network"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "aktibong tawag na niruruta"
  },
  "heroLiveBadge2": {
    "title": "Napili ang pinakamagandang ruta",
    "latency": "43 ms",
    "quality": "HD na kalidad"
  },
  "whyBadge": "BAKIT INET VOICE",
  "whyTitle": "Impraktraktura Ng Boses Na Nagkakamit Ng Tiwala Ng Kustomer",
  "whySubtitle1": "Binuo para sa mga pangkat na hindi maaaring magkompromiso sa kalidad ng tawag, lawak ng abot, o kontrol sa operasyon.",
  "whySubtitle2": "Isang pinagkakatiwalaang kasosyo para sa internasyonal na trapiko, lokal na presensya, at kasanayan sa network sa likod ng bawat tawag.",
  "whyCards": [
    {
      "title": "Patuloy na malinaw na tunog",
      "desc": "Ang mga ruta na may mababang latency at quality-based steering ay nagpapanatili ng natural na takbo ng pag-uusap.",
      "footer": "HD voice at malawak na suporta sa codec"
    },
    {
      "title": "Abutin ang mas maraming merkado",
      "desc": "Magpatapos at magpasimula ng mga tawag gamit ang matatag na direktang relasyon sa carrier sa buong mundo.",
      "footer": "Higit sa 190 bansa at teritoryo"
    },
    {
      "title": "Kontrolin ang bawat ruta",
      "desc": "Magtakda ng mga patakaran sa presyo, kalidad, at destinasyon na may real-time na pagsubaybay sa pagganap.",
      "footer": "Mababagong LCR at quality routing"
    },
    {
      "title": "Magpalawak nang walang sagabal",
      "desc": "Magdagdag ng kapasidad, mga numero, at mga bagong merkado sa pamamagitan ng isang matatag na pandaigdigang platform.",
      "footer": "Maaasahang nababanat na kapasidad ng SIP"
    }
  ],
  "capabilitiesBadge": "ANG AMING MGA PANGUNAHING KAKAYAHAN",
  "capabilitiesTitle": "Isang Voice Stack, Binuo Ayon Sa Iyong Trapiko",
  "capabilitiesDesc": "Pagsamahin lamang ang kailangan mo, pagkatapos ay magpalawak ayon sa merkado, uri ng numero, o patakaran sa ruta nang hindi muling itinatayo ang iyong telekomunikasyon.",
  "designSolution": "Idisenyo ang iyong solusyon",
  "solutionNote": "Kasama ang pagdidisenyo ng solusyon at pagsubok sa interoperability",
  "capabilities": [
    {
      "title": "Wholesale termination",
      "desc": "Iruta ang pandaigdigang trapiko ng boses sa pamamagitan ng pinamamahalaang mga landas ng multi-carrier.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP trunking",
      "desc": "Ikonekta ang PBX, contact center, at mga platform ng komunikasyon na may nababagong kapasidad.",
      "tag": "Papasok + Palabas"
    },
    {
      "title": "Mga virtual na numero (DID)",
      "desc": "Bumuo ng pinagkakatiwalaang lokal na presensya gamit ang mga heograpiko, pambansa, at toll-free na numero.",
      "tag": "Pandaigdigang imbentaryo ng DID"
    },
    {
      "title": "Proteksyon laban sa pandaraya",
      "desc": "Protektahan ang kita sa pamamagitan ng mga kontrol sa destinasyon, alerto sa anomalya, at limitasyon sa gastos.",
      "tag": "Patuloy na pagbabantay 24/7"
    },
    {
      "title": "Pagsusuri ng kalidad",
      "desc": "Subaybayan ang ASR, ACD, PDD, jitter, at rate ng pagkumpleto ayon sa ruta at patutunguhan.",
      "tag": "Real-time na ulat"
    },
    {
      "title": "Pasadyang pagruruta",
      "desc": "Unahin ang mga ruta ayon sa kalidad, presyo, heograpiya, o partikular na patakaran ng kustomer.",
      "tag": "Kontrol na nakabatay sa patakaran"
    }
  ],
  "networkBadge": "KATAPATAN SA PANDAIGDIGANG SUKAT",
  "networkTitle": "Isang Network Na Idinisenyo Upang Panatilihing Tuloy-tuloy Ang Usapan",
  "networkDesc": "Ang mga redundant interconnect, maagap na pamamahala ng ruta, at 24-oras na inhinyero ay nagpoprotekta sa bawat tawag mula sa pagkaantala.",
  "networkBullets": [
    "Multi-carrier redundancy sa bawat destinasyon",
    "Aktibong pagmamarka ng kalidad at awtomatikong failover",
    "Heograpikong ipinamamahaging imprastraktura ng pagbibigay-senyas at media",
    "Maagap na pagtuklas ng pandaraya at mahigpit na kontrol sa trapiko"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Availability ng pangunahing network"
    },
    {
      "val": "190+",
      "label": "Mga bansa at teritoryong sakop"
    },
    {
      "val": "24/7",
      "label": "Pandaigdigang operasyon sa network"
    },
    {
      "val": "< 1 seg",
      "label": "Awtomatikong tugon sa ruta"
    }
  ],
  "liveStatus": {
    "title": "Lahat ng sistema ay gumagana",
    "check": "Huling pagsusuri sa ruta 12 seg ang nakalipas",
    "live": "LIVE"
  },
  "momentsBadge": "BINUO PARA SA TUNAY NA PAG-UUSAP",
  "momentsTitle": "Mga Serbisyong Boses Para Sa Bawat Mahalagang Sandali",
  "momentsSubtitle": "Mula sa pang-araw-araw na pangangalaga sa kustomer hanggang sa mga agarang abiso, nagbibigay ang iNet Global ng abot at kontrol para panatilihing konektado ang mga tao.",
  "moments": [
    {
      "title": "Mga Contact Center",
      "desc": "Bigyan ang mga nakakalat na ahente ng pare-parehong boses sa papasok at papalabas na tawag sa lahat ng rehiyon.",
      "footer": "Lokal na presensya • overflow routing"
    },
    {
      "title": "Fintech at mga Platform",
      "desc": "Paganahin ang mga napatunayang tawag, paniningil, at daloy ng serbisyo gamit ang ligtas na pandaigdigang abot.",
      "footer": "Paghahatid ng CLI • Kontrol laban sa fraud"
    },
    {
      "title": "Paglalakbay at Pagtanggap ng Bisita",
      "desc": "Ikonekta ang mga bisita at pangkat ng operasyon bago, habang, at pagkatapos ng bawat paglalakbay.",
      "footer": "Mga lokal na numero • Multilinggwal na abot"
    },
    {
      "title": "Mga Kritikal na Abiso",
      "desc": "Maghatid ng mga tawag na sensitibo sa oras gamit ang mga inuunang ruta at tuluy-tuloy na pagsubaybay.",
      "footer": "Prayoridad na routing • Agarang failover"
    }
  ],
  "timelineBadge": "MAGSIMULA NANG MAY TIWALA",
  "timelineTitle": "Mula Sa Mga Pangangailangan Hanggang Sa Buhay Na Trapiko, Magkasama",
  "timelineSubtitle": "Ang isang nakalaang voice engineer ay kasama ng iyong koponan sa disenyo, pagsubok, at paglipat ng trapiko—handang-handa bago ilunsad.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Saklaw",
      "desc": "Kumpirmahin ang mga merkado, dami ng tawag, codec, at target ng kalidad."
    },
    {
      "step": "2",
      "title": "Pagkonekta",
      "desc": "Ipagpalit ang mga detalye ng SIP at i-secure ang iyong interconnect."
    },
    {
      "step": "3",
      "title": "Pagpapatunay",
      "desc": "Magsagawa ng mga pagsusuri sa interoperability at pagsusuri sa pagpapakita ng numero (CLI)."
    },
    {
      "step": "4",
      "title": "Paglulunsad",
      "desc": "Ilipat ang trapiko nang pira-piraso sa ilalim ng pagsubaybay ng inhinyero."
    }
  ],
  "terminal": {
    "title": "Ang iyong koneksyon sa boses",
    "readyBadge": "HANDA NANG SUBUKAN",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP Allowlist + Pag-encrypt ng TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Awtomatikong pangalawang ruta",
    "interopNote": "Kasama ang checklist ng interoperability",
    "viewApiDocs": "Tingnan ang dokumentasyon ng API"
  },
  "testimonialBadge": "NAPATUNAYAN SA PRODUKSYON",
  "testimonialTitle": "Isang Kasosyo Sa Boses Na Maaaring Asahan Ng Iyong Koponan Ng Operasyon",
  "testimonialSubtitle": "Transparent na pagganap, mabilis na mga inhinyero, at imprastraktura na binuo para sa mahahalagang komunikasyon sa negosyo.",
  "testimonialPills": [
    "Naka-encrypt na transportasyon",
    "Pagsubaybay sa kalidad",
    "Kontrol laban sa pandaraya"
  ],
  "quote": "Binigyan kami ng iNet Global ng buong visibility sa ruta at praktikal na suporta upang pagsamahin ang trapiko ng boses sa tatlong rehiyon nang hindi nasisira ang karanasan ng kustomer.",
  "authorName": "Maya Chen",
  "authorRole": "Bise Presidente, Network Operations • Pandaigdigang platform ng CX",
  "stat1Val": "18%",
  "stat1Label": "mas mababang gastusin sa ruta",
  "stat2Val": "+4.2 pts",
  "stat2Label": "pagbuti ng ASR",
  "ctaBadge": "ITAYO NATIN ANG IYONG NETWORK NG BOSES",
  "ctaTitle": "Handa Na Para Sa Mas Malinaw Na Mga Tawag At Matalinong Pandaigdigang Abot?",
  "ctaSubtitle": "Sabihin sa amin kung saan mo gustong kumonekta, gaano karaming trapiko ang mayroon ka, at ano ang pamantayan sa kalidad. Ididisenyo ng aming pangkat ang tamang estratehiya.",
  "contactUs": "Makipag-ugnayan sa amin",
  "responseTime": "Tugon sa loob ng isang araw ng negosyo"
};

const bn: WholesaleVoiceTranslation = {
  "heroBadge": "গ্লোবাল ভয়েস ইনফ্রাস্ট্রাকচার",
  "heroTitle": "প্রতিটি কল, পূর্ণ আস্থার সাথে সংযুক্ত।",
  "heroDesc": "প্রতিটি বাজারে স্পষ্ট কথোপকথনের প্রয়োজনে ব্যবসাগুলির জন্য ক্যারিয়ার-গ্রেড ভয়েস টার্মিনেশন, অরিজিনেশন এবং ভার্চুয়াল নম্বর—বুদ্ধিমান রাউটিং এবং ২৪/৭ নেটওয়ার্ক অপারেশনের মাধ্যমে সমর্থিত।",
  "talkToExpert": "বিশেষজ্ঞের সাথে কথা বলুন",
  "exploreCapabilities": "সক্ষমতা অন্বেষণ করুন",
  "stats": {
    "countries": "১৯০+",
    "countriesLabel": "দেশে উপলব্ধ",
    "availability": "৯৯.৯৯৯%",
    "availabilityLabel": "কোর নেটওয়ার্ক প্রাপ্যতা",
    "operations": "২৪/৭",
    "operationsLabel": "নেটওয়ার্ক অপারেশন"
  },
  "heroLiveBadge1": {
    "count": "১২,৪৮০",
    "label": "সরাসরি কল রাউট করা হচ্ছে"
  },
  "heroLiveBadge2": {
    "title": "সেরা রুট নির্বাচিত",
    "latency": "৪৩ মিলি সেকেন্ড",
    "quality": "এইচডি কোয়ালিটি"
  },
  "whyBadge": "কেন INET ভয়েস",
  "whyTitle": "ভয়েস ইনফ্রাস্ট্রাকচার যা গ্রাহকের আস্থা অর্জন করে",
  "whySubtitle1": "এমন দলগুলির জন্য নির্মিত যারা কলের গুণমান, পৌঁছানো বা অপারেশনাল নিয়ন্ত্রণে আপস করতে পারে না।",
  "whySubtitle2": "আন্তর্জাতিক ট্র্যাফিক, স্থানীয় উপস্থিতি এবং প্রতিটি কলের পেছনে নেটওয়ার্ক দক্ষতার জন্য একক অংশীদার।",
  "whyCards": [
    {
      "title": "ধারাবাহিকভাবে স্পষ্ট শব্দ",
      "desc": "কম লেটেন্সি রুট এবং গুণমান-ভিত্তিক ট্র্যাফিক পরিচালনা কথোপকথনকে সম্পূর্ণ প্রাকৃতিক রাখে।",
      "footer": "এইচডি ভয়েস এবং উন্নত কোডেক সমর্থন"
    },
    {
      "title": "আরও বাজারে পৌঁছান",
      "desc": "বিশ্বজুড়ে সরাসরি প্রতিষ্ঠিত ক্যারিয়ার সম্পর্কের মাধ্যমে কল টার্মিনেট এবং শুরু করুন।",
      "footer": "১৯০টিরও বেশি দেশ এবং অঞ্চল"
    },
    {
      "title": "প্রতিটি রুট নিয়ন্ত্রণ করুন",
      "desc": "রিয়েল-টাইম পারফরম্যান্স দৃশ্যমানতার সাথে মূল্য, গুণমান এবং গন্তব্য নিয়ম নির্ধারণ করুন।",
      "footer": "নমনীয় এলসিআর এবং গুণমানভিত্তিক রাউটিং"
    },
    {
      "title": "স্বাচ্ছন্দ্যে স্কেল করুন",
      "desc": "একটি স্থিতিস্থাপক বিশ্বব্যাপী প্ল্যাটফর্মের মাধ্যমে ক্ষমতা, নম্বর এবং নতুন বাজার যুক্ত করুন।",
      "footer": "ইলাস্টিক এসআইপি ক্ষমতা"
    }
  ],
  "capabilitiesBadge": "আমাদের মূল সক্ষমতা",
  "capabilitiesTitle": "একটি ভয়েস স্ট্যাক, আপনার ট্র্যাফিকের চারপাশে নির্মিত",
  "capabilitiesDesc": "কেবল আপনার যা প্রয়োজন তা একত্রিত করুন, তারপর যোগাযোগ স্তর পুনর্নির্মাণ না করেই বাজার, নম্বরের ধরন বা রাউটিং নীতি দ্বারা প্রসারিত করুন।",
  "designSolution": "আপনার সমাধান ডিজাইন করুন",
  "solutionNote": "সমাধান ডিজাইন এবং ইন্টারঅপারেবিলিটি পরীক্ষা অন্তর্ভুক্ত",
  "capabilities": [
    {
      "title": "পাইকারি টার্মিনেশন (Wholesale)",
      "desc": "গুণমান পরিচালিত, বহু-ক্যারিয়ার পাথের মাধ্যমে আন্তর্জাতিক ভয়েস ট্র্যাফিক রাউট করুন।",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "এসআইপি ট্রাঙ্কিং",
      "desc": "স্থিতিস্থাপক ক্ষমতার সাথে পিবিএক্স, যোগাযোগ কেন্দ্র এবং প্ল্যাটফর্মগুলি সংযুক্ত করুন।",
      "tag": "ইনবাউন্ড + আউটবাউন্ড"
    },
    {
      "title": "ভার্চুয়াল নম্বর (DID)",
      "desc": "ভৌগোলিক, জাতীয় এবং টোল-ফ্রি নম্বর সহ একটি বিশ্বস্ত স্থানীয় উপস্থিতি তৈরি করুন।",
      "tag": "গ্লোবাল ডিআইডি ইনভেন্টরি"
    },
    {
      "title": "প্রতারণা প্রতিরোধ (Fraud Protection)",
      "desc": "গন্তব্য নিয়ন্ত্রণ, অস্বাভাবিকতা সতর্কতা এবং ব্যয় সীমার মাধ্যমে মুনাফা রক্ষা করুন।",
      "tag": "২৪/৭ সার্বক্ষণিক পর্যবেক্ষণ"
    },
    {
      "title": "গুণমান বিশ্লেষণ",
      "desc": "রুট এবং গন্তব্য অনুসারে ASR, ACD, PDD, জিটার এবং সমাপ্তির হার ট্র্যাক করুন।",
      "tag": "রিয়েল-টাইম রিপোর্টিং"
    },
    {
      "title": "কাস্টম রাউটিং",
      "desc": "গুণমান, মূল্য, ভূগোল বা কাস্টম নীতির মাধ্যমে রুটের অগ্রাধিকার নির্ধারণ করুন।",
      "tag": "নিয়ম-ভিত্তিক নিয়ন্ত্রণ"
    }
  ],
  "networkBadge": "বিশ্বব্যাপী পরিসরে নির্ভরযোগ্যতা",
  "networkTitle": "কথোপকথন নিরবচ্ছিন্ন রাখার জন্য ডিজাইন করা একটি নেটওয়ার্ক",
  "networkDesc": "রিডানড্যান্ট ইন্টারকানেক্ট, সক্রিয় রুট পরিচালনা এবং চব্বিশ ঘণ্টার ইঞ্জিনিয়ারিং প্রতিটি কলকে যানজট থেকে রক্ষা করে।",
  "networkBullets": [
    "গন্তব্য অনুসারে মাল্টি-ক্যারিয়ার রিডানড্যান্সি",
    "সক্রিয় গুণমান স্কোরিং এবং স্বয়ংক্রিয় ফেইলওভার",
    "ভৌগোলিকভাবে বিতরণ করা সিগন্যালিং এবং মিডিয়া অবকাঠামো",
    "সক্রিয় জালিয়াতি সনাক্তকরণ এবং ট্র্যাফিক নিয়ন্ত্রণ"
  ],
  "networkStats": [
    {
      "val": "৯৯.৯৯৯%",
      "label": "কোর নেটওয়ার্ক প্রাপ্যতা"
    },
    {
      "val": "১৯০+",
      "label": "দেশ ও অঞ্চল কভার করা হয়েছে"
    },
    {
      "val": "২৪/৭",
      "label": "গ্লোবাল নেটওয়ার্ক অপারেশন"
    },
    {
      "val": "< ১ সেকেন্ড",
      "label": "স্বয়ংক্রিয় রুট প্রতিক্রিয়া"
    }
  ],
  "liveStatus": {
    "title": "সমস্ত সিস্টেম সচল রয়েছে",
    "check": "শেষ রুট পরীক্ষা ১২ সেকেন্ড আগে",
    "live": "লাইভ"
  },
  "momentsBadge": "প্রকৃত যোগাযোগের জন্য নির্মিত",
  "momentsTitle": "প্রতিটি গুরুত্বপূর্ণ মুহূর্তের জন্য ভয়েস পরিষেবা",
  "momentsSubtitle": "দৈনন্দিন গ্রাহক পরিষেবা থেকে শুরু করে উচ্চ-অগ্রাধিকারের সতর্কতা পর্যন্ত, iNet Global দলগুলিকে সংযোগ বজায় রাখার বিস্তার দেয়।",
  "moments": [
    {
      "title": "যোগাযোগ কেন্দ্র (Contact Centers)",
      "desc": "বিতরণ করা এজেন্টদের সমস্ত অঞ্চলে ধারাবাহিক ইনবাউন্ড এবং আউটবাউন্ড ভয়েস প্রদান করুন।",
      "footer": "স্থানীয় উপস্থিতি • ওভারফ্লো রাউটিং"
    },
    {
      "title": "ফিনটেক ও প্ল্যাটফর্ম",
      "desc": "নিরাপদ বিশ্বব্যাপী পৌঁছানোর সাথে যাচাইকৃত কল, সংগ্রহ এবং পরিষেবা ওয়ার্কফ্লো পরিচালনা করুন।",
      "footer": "সিএলআই ডেলিভারি • প্রতারণা নিয়ন্ত্রণ"
    },
    {
      "title": "ভ্রমণ ও আতিথেয়তা",
      "desc": "প্রতিটি যাত্রার আগে, চলাকালীন এবং পরে অতিথি এবং অপারেশন দলগুলিকে নির্বিঘ্নে যুক্ত করুন।",
      "footer": "স্থানীয় নম্বর • বহুভাষিক সুবিধা"
    },
    {
      "title": "জরুরি বিজ্ঞপ্তি",
      "desc": "অগ্রাধিকারপ্রাপ্ত রুট এবং রিয়েল-টাইম পর্যবেক্ষণের সাথে সময়-সংবেদনশীল কলগুলি সরবরাহ করুন।",
      "footer": "অগ্রাধিকার রাউটিং • তাৎক্ষণিক ফেইলওভার"
    }
  ],
  "timelineBadge": "আস্থার সাথে শুরু করুন",
  "timelineTitle": "প্রয়োজনীয়তা থেকে লাইভ ট্র্যাফিক পর্যন্ত একসাথে",
  "timelineSubtitle": "একজন ডেডিকেটেড ভয়েস ইঞ্জিনিয়ার ডিজাইন, পরীক্ষা এবং ট্র্যাফিক স্থানান্তরের মাধ্যমে আপনার দলের সাথে থাকেন।",
  "timelineSteps": [
    {
      "step": "১",
      "title": "পরিমাপ",
      "desc": "বাজার, ভলিউম, কোডেক এবং গুণমানের লক্ষ্য নিশ্চিত করুন।"
    },
    {
      "step": "২",
      "title": "সংযোগ",
      "desc": "এসআইপি বিশদ বিনিময় করুন এবং ইন্টারকানেক্ট সুরক্ষিত করুন।"
    },
    {
      "step": "৩",
      "title": "যাচাইকরণ",
      "desc": "ইন্টারঅপারেবিলিটি এবং সিএলআই উপস্থাপনা পরীক্ষা চালান।"
    },
    {
      "step": "৪",
      "title": "উদ্বোধন",
      "desc": "লাইভ ইঞ্জিনিয়ারিং পর্যবেক্ষণের সাথে ধাপে ধাপে ট্র্যাফিক স্থানান্তর করুন।"
    }
  ],
  "terminal": {
    "title": "আপনার ভয়েস সংযোগ বিবরণ",
    "readyBadge": "পরীক্ষার জন্য প্রস্তুত",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "আইপি অনুমোদন তালিকা + টিএলএস",
    "media": "SRTP • G.711 • G.729",
    "failover": "স্বয়ংক্রিয় গৌণ রুট",
    "interopNote": "ইন্টারঅপারেবিলিটি চেকলিস্ট অন্তর্ভুক্ত",
    "viewApiDocs": "এপিআই ডকুমেন্টেশন দেখুন"
  },
  "testimonialBadge": "উৎপাদনে পরীক্ষিত",
  "testimonialTitle": "একটি বিশ্বস্ত ভয়েস পার্টনার যার ওপর আপনার দল ভরসা করতে পারে",
  "testimonialSubtitle": "স্বচ্ছ কর্মক্ষমতা, প্রতিক্রিয়াশীল প্রকৌশলী এবং ব্যবসায়িক-গুরুত্বপূর্ণ যোগাযোগের জন্য নির্মিত অবকাঠামো।",
  "testimonialPills": [
    "এনক্রিপ্ট করা পরিবহন",
    "গুণমান পর্যবেক্ষণ",
    "প্রতারণা নিয়ন্ত্রণ"
  ],
  "quote": "iNet Global গ্রাহকের অভিজ্ঞতার সাথে আপস না করে তিনটি অঞ্চলে ভয়েস ট্র্যাফিক একত্রিত করতে আমাদের সম্পূর্ণ রুট দৃশ্যমানতা এবং সমর্থন দিয়েছে।",
  "authorName": "Maya Chen",
  "authorRole": "ভিপি, নেটওয়ার্ক অপারেশনস • গ্লোবাল সিএক্স প্ল্যাটফর্ম",
  "stat1Val": "১৮%",
  "stat1Label": "কম রুট খরচ",
  "stat2Val": "+৪.২ পয়েন্ট",
  "stat2Label": "এএসআর উন্নতি",
  "ctaBadge": "আসুন আপনার ভয়েস নেটওয়ার্ক তৈরি করি",
  "ctaTitle": "আরও স্পষ্ট কল এবং স্মার্ট গ্লোবাল যোগাযোগের জন্য প্রস্তুত?",
  "ctaSubtitle": "কোথায় সংযোগ করতে চান, ট্র্যাফিকের পরিমাণ এবং গুণমানের প্রত্যাশা আমাদের জানান। আমাদের দল সঠিক রাউটিং এবং নম্বর কৌশল তৈরি করবে।",
  "contactUs": "যোগাযোগ করুন",
  "responseTime": "এক কার্যদিবসের মধ্যে দ্রুত প্রতিক্রিয়া"
};

const ta: WholesaleVoiceTranslation = {
  "heroBadge": "உலகளாவிய குரல் உள்கட்டமைப்பு",
  "heroTitle": "ஒவ்வொரு அழைப்பும், முழு நம்பிக்கையுடன் இணைக்கப்படுகிறது.",
  "heroDesc": "ஒவ்வொரு சந்தையிலும் தெளிவான உரையாடல்கள் தேவைப்படும் வணிகங்களுக்கான கேரியர்-கிரேட் வாய்ஸ் டெர்மினேஷன், ஆரிஜினேஷன் மற்றும் மெய்நிகர் எண்கள்—அறிவார்ந்த ரூட்டிங் மற்றும் 24/7 நெட்வொர்க் செயல்பாடுகளால் ஆதரிக்கப்படுகிறது.",
  "talkToExpert": "நிபுணரிடம் பேசுங்கள்",
  "exploreCapabilities": "திறன்களை ஆராயுங்கள்",
  "stats": {
    "countries": "190+",
    "countriesLabel": "நாடுகள் சென்றடைகிறது",
    "availability": "99.999%",
    "availabilityLabel": "முக்கிய நெட்வொர்க் கிடைக்கும் தன்மை",
    "operations": "24/7",
    "operationsLabel": "நெட்வொர்க் செயல்பாடுகள்"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "நேரலை அழைப்புகள் ரூட் செய்யப்படுகின்றன"
  },
  "heroLiveBadge2": {
    "title": "சிறந்த வழித்தடம் தேர்வு செய்யப்பட்டது",
    "latency": "43 மி.வி",
    "quality": "HD தரம்"
  },
  "whyBadge": "ஏன் INET வாய்ஸ்",
  "whyTitle": "வாடிக்கையாளர் நம்பிக்கையை ஈட்டும் குரல் உள்கட்டமைப்பு",
  "whySubtitle1": "அழைப்பு தரம், சென்றடைதல் அல்லது செயல்பாட்டுக் கட்டுப்பாட்டில் சமரசம் செய்ய முடியாத குழுக்களுக்காக உருவாக்கப்பட்டது.",
  "whySubtitle2": "சர்வதேச போக்குவரத்து, உள்ளூர் இருப்பு மற்றும் ஒவ்வொரு அழைப்பிற்குப் பின்னாலும் நெட்வொர்க் நிபுணத்துவத்திற்கான ஒரே கூட்டாளர்.",
  "whyCards": [
    {
      "title": "தொடர்ந்து தெளிவான ஒலி",
      "desc": "குறைந்த தாமத வழிகள் மற்றும் தர அடிப்படையிலான போக்குவரத்து உரையாடல்களை இயல்பாக வைத்திருக்கின்றன.",
      "footer": "HD வாய்ஸ் மற்றும் கோடெக் ஆதரவு"
    },
    {
      "title": "அதிக சந்தைகளை சென்றடையுங்கள்",
      "desc": "உலகளாவிய நேரடி கேரியர் கூட்டாண்மைகள் மூலம் அழைப்புகளை முடித்து துவக்குங்கள்.",
      "footer": "190க்கும் மேற்பட்ட நாடுகள் மற்றும் பகுதிகள்"
    },
    {
      "title": "ஒவ்வொரு பாதையையும் கட்டுப்படுத்துங்கள்",
      "desc": "நிகழ்நேர செயல்திறன் பார்வையுடன் விலை, தரம் மற்றும் இலக்கு விதிகளை அமைக்கவும்.",
      "footer": "நெகிழ்வான LCR மற்றும் தர ரூட்டிங்"
    },
    {
      "title": "தடங்கல் இன்றி அளவிடுங்கள்",
      "desc": "ஒரு மீள்திறன் கொண்ட உலகளாவிய தளம் மூலம் கொள்ளளவு, எண்கள் மற்றும் புதிய சந்தைகளைச் சேர்க்கவும்.",
      "footer": "நெகிழ்வான SIP திறன்"
    }
  ],
  "capabilitiesBadge": "எங்கள் முக்கிய திறன்கள்",
  "capabilitiesTitle": "உங்கள் போக்குவரத்தைச் சுற்றி கட்டமைக்கப்பட்ட ஒரே குரல் அடுக்கு",
  "capabilitiesDesc": "உங்களுக்குத் தேவையானதை மட்டும் இணைத்து, தகவல்தொடர்பு அடுக்கை மீண்டும் உருவாக்காமல் சந்தை, எண் வகை அல்லது கொள்கை மூலம் விரிவாக்குங்கள்.",
  "designSolution": "உங்கள் தீர்வை வடிவமைக்கவும்",
  "solutionNote": "தீர்வு வடிவமைப்பு மற்றும் இயங்குதன்மை சோதனை சேர்க்கப்பட்டுள்ளது",
  "capabilities": [
    {
      "title": "மொத்த டெர்மினேஷன் (Wholesale)",
      "desc": "சர்வதேச குரல் போக்குவரத்தை தர நிர்வகிக்கப்பட்ட மல்டி-கேரியர் பாதைகள் மூலம் ரூட் செய்யுங்கள்.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP ட்ரங்கிங்",
      "desc": "PBX, தொடர்பு மையங்கள் மற்றும் தகவல் தொடர்பு தளங்களை நெகிழ்வான திறனுடன் இணைக்கவும்.",
      "tag": "உள்வரும் + வெளிச்செல்லும்"
    },
    {
      "title": "மெய்நிகர் எண்கள் (DID)",
      "desc": "புவியியல், தேசிய மற்றும் கட்டணமில்லா எண்களுடன் நம்பகமான உள்ளூர் இருப்பை உருவாக்குங்கள்.",
      "tag": "உலகளாவிய DID இருப்பு"
    },
    {
      "title": "மோசடி பாதுகாப்பு",
      "desc": "இலக்கு கட்டுப்பாடுகள், முரண்பாட்டு விழிப்பூட்டல்கள் மற்றும் செலவு வரம்புகளுடன் லாபத்தைப் பாதுகாக்கவும்.",
      "tag": "24/7 தொடர் கண்காணிப்பு"
    },
    {
      "title": "தர பகுப்பாய்வு",
      "desc": "ASR, ACD, PDD, ஜிட்டர் மற்றும் நிறைவு விகிதங்களை பாதை மற்றும் இலக்கு வாரியாக கண்காணிக்கவும்.",
      "tag": "நிகழ்நேர அறிக்கையிடல்"
    },
    {
      "title": "தனிப்பயன் ரூட்டிங்",
      "desc": "தரம், விலை, புவியியல் அல்லது வாடிக்கையாளர் குறிப்பிட்ட கொள்கை மூலம் பாதைகளுக்கு முன்னுரிமை அளியுங்கள்.",
      "tag": "விதிகள் அடிப்படையிலான கட்டுப்பாடு"
    }
  ],
  "networkBadge": "உலகளாவிய அளவில் நம்பகத்தன்மை",
  "networkTitle": "உரையாடல்களை தொடர்ந்து வைத்திருக்க வடிவமைக்கப்பட்ட நெட்வொர்க்",
  "networkDesc": "தேவையற்ற இடையூறுகள், செயல்திறன்மிக்க பாதை மேலாண்மை மற்றும் 24 மணிநேர பொறியியல் ஒவ்வொரு அழைப்பையும் பாதுகாக்கிறது.",
  "networkBullets": [
    "இலக்கு வாரியாக மல்டி-கேரியர் பணிநீக்கம்",
    "செயலில் உள்ள தர மதிப்பீடு மற்றும் தானியங்கி தோல்வி மீட்பு",
    "புவியியல் ரீதியாக விநியோகிக்கப்பட்ட சமிக்ஞை மற்றும் ஊடக உள்கட்டமைப்பு",
    "செயலூக்கமான மோசடி கண்டறிதல் மற்றும் போக்குவரத்து கட்டுப்பாடுகள்"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "முக்கிய நெட்வொர்க் கிடைக்கும் தன்மை"
    },
    {
      "val": "190+",
      "label": "நாடுகள் மற்றும் பகுதிகள்"
    },
    {
      "val": "24/7",
      "label": "உலகளாவிய நெட்வொர்க் செயல்பாடுகள்"
    },
    {
      "val": "< 1 வினாடி",
      "label": "தானியங்கி பாதை பதில்"
    }
  ],
  "liveStatus": {
    "title": "அனைத்து அமைப்புகளும் செயல்படுகின்றன",
    "check": "கடைசி பாதை சரிபார்ப்பு 12 வினாடிகளுக்கு முன்",
    "live": "லைவ்"
  },
  "momentsBadge": "உண்மையான உரையாடலுக்காக கட்டப்பட்டது",
  "momentsTitle": "ஒவ்வொரு முக்கியமான தருணத்திற்கும் குரல் சேவைகள்",
  "momentsSubtitle": "அன்றாட வாடிக்கையாளர் சேவை முதல் அதிக முன்னுரிமை விழிப்பூட்டல்கள் வரை, iNet Global மக்களை இணைக்க தேவையான விரிவை வழங்குகிறது.",
  "moments": [
    {
      "title": "தொடர்பு மையங்கள்",
      "desc": "பிராந்தியங்கள் முழுவதும் முகவர்களுக்கு நிலையான உள்வரும் மற்றும் வெளிச்செல்லும் குரல் சேவையை வழங்கவும்.",
      "footer": "உள்ளூர் இருப்பு • வழிதல் ரூட்டிங்"
    },
    {
      "title": "ஃபின்டெக் & தளங்கள்",
      "desc": "பாதுகாப்பான உலகளாவிய அணுகலுடன் சரிபார்க்கப்பட்ட அழைப்புகள், வசூலிப்பு மற்றும் சேவை பணிப்பாய்வுகளை இயக்கவும்.",
      "footer": "CLI டெலிவரி • மோசடி கட்டுப்பாடுகள்"
    },
    {
      "title": "பயணம் & விருந்தோம்பல்",
      "desc": "ஒவ்வொரு பயணத்திற்கும் முன்னும், பின்னும் விருந்தினர்களையும் செயல்பாட்டுக் குழுக்களையும் தடையின்றி இணைக்கவும்.",
      "footer": "உள்ளூர் எண்கள் • பலமொழி அணுகல்"
    },
    {
      "title": "முக்கிய அறிவிப்புகள்",
      "desc": "முன்னுரிமை வழிகள் மற்றும் நிகழ்நேர கண்காணிப்புடன் அவசர கால அழைப்புகளை உடனடியாக வழங்கவும்.",
      "footer": "முன்னுரிமை ரூட்டிங் • உடனடி மீட்பு"
    }
  ],
  "timelineBadge": "நம்பிக்கையுடன் தொடங்குங்கள்",
  "timelineTitle": "தேவைகள் முதல் நேரலை போக்குவரத்து வரை, ஒன்றாக",
  "timelineSubtitle": "ஒரு பிரத்யேக குரல் பொறியாளர் வடிவமைப்பு, சோதனை மற்றும் போக்குவரத்து இடம்பெயர்வு முழுவதும் உங்களுடன் இருப்பார்.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "வரையறை",
      "desc": "சந்தைகள், அளவுகள், கோடெக்குகள் மற்றும் தர இலக்குகளை உறுதிப்படுத்தவும்."
    },
    {
      "step": "2",
      "title": "இணைப்பு",
      "desc": "SIP விவரங்களைப் பரிமாறிக்கொண்டு உங்கள் இணைப்பைப் பாதுகாக்கவும்."
    },
    {
      "step": "3",
      "title": "சரிபார்த்தல்",
      "desc": "இயங்குதன்மை சோதனைகள் மற்றும் CLI விளக்கக்காட்சி சோதனைகளை இயக்கவும்."
    },
    {
      "step": "4",
      "title": "தொடங்குதல்",
      "desc": "நேரலை பொறியாளர் மேற்பார்வையுடன் போக்குவரத்தை கட்டம் கட்டமாக மாற்றவும்."
    }
  ],
  "terminal": {
    "title": "உங்கள் குரல் இணைப்பு அளவுருக்கள்",
    "readyBadge": "சோதிக்க தயார்",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP அனுமதி பட்டியல் + TLS குறியாக்கம்",
    "media": "SRTP • G.711 • G.729",
    "failover": "தானியங்கி இரண்டாம் நிலை பாதை",
    "interopNote": "இயங்குதன்மை சரிபார்ப்பு பட்டியல் சேர்க்கப்பட்டுள்ளது",
    "viewApiDocs": "API ஆவணங்களைக் காண்க"
  },
  "testimonialBadge": "உற்பத்தியில் நிரூபிக்கப்பட்டது",
  "testimonialTitle": "உங்கள் செயல்பாட்டுக் குழு முழுமையாக நம்பக்கூடிய ஒரு குரல் கூட்டாளர்",
  "testimonialSubtitle": "வெளிப்படையான செயல்திறன், விரைவான பதிலளிக்கும் பொறியாளர்கள் மற்றும் வணிகத் தொடர்புக்காக கட்டமைக்கப்பட்ட உள்கட்டமைப்பு.",
  "testimonialPills": [
    "மறைகுறியாக்கப்பட்ட போக்குவரத்து",
    "தர கண்காணிப்பு",
    "மோசடி கட்டுப்பாடுகள்"
  ],
  "quote": "வாடிக்கையாளர் அனுபவத்தில் சமரசம் செய்யாமல் மூன்று பிராந்தியங்களில் குரல் போக்குவரத்தை ஒருங்கிணைக்க iNet Global எங்களுக்கு முழுமையான பாதை பார்வையை வழங்கியது.",
  "authorName": "Maya Chen",
  "authorRole": "துணைத் தலைவர், நெட்வொர்க் செயல்பாடுகள் • குளோபல் CX தளம்",
  "stat1Val": "18%",
  "stat1Label": "குறைந்த வழித்தடச் செலவு",
  "stat2Val": "+4.2 புள்ளிகள்",
  "stat2Label": "ASR முன்னேற்றம்",
  "ctaBadge": "உங்கள் குரல் நெட்வொர்க்கை உருவாக்குவோம்",
  "ctaTitle": "தெளிவான அழைப்புகள் மற்றும் சிறந்த உலகளாவிய அணுகலுக்கு தயாரா?",
  "ctaSubtitle": "நீங்கள் எங்கு இணைக்க வேண்டும், போக்குவரத்து அளவு மற்றும் தர எதிர்பார்ப்புகளை எங்களிடம் கூறுங்கள். எங்கள் குழு சரியான உத்தியை வடிவமைக்கும்.",
  "contactUs": "எங்களைத் தொடர்பு கொள்ளுங்கள்",
  "responseTime": "ஒரு வணிக நாளுக்குள் உடனடி பதில்"
};

const te: WholesaleVoiceTranslation = {
  "heroBadge": "గ్లోబల్ వాయిస్ ఇన్ఫ్రాస్ట్రక్చర్",
  "heroTitle": "ప్రతి కాల్, సంపూర్ణ విశ్వాసంతో కనెక్ట్ చేయబడింది.",
  "heroDesc": "ప్రతి మార్కెట్లో స్పష్టమైన సంభాషణలు అవసరమయ్యే వ్యాపారాల కోసం క్యారియర్-గ్రేడ్ వాయిస్ టెర్మినేషన్, ఆరిజినేషన్ మరియు వర్చువల్ నంబర్లు—తెలివైన రూటింగ్ మరియు 24/7 నెట్వర్క్ ఆపరేషన్లతో అందించబడుతుంది.",
  "talkToExpert": "నిపుణులతో మాట్లాడండి",
  "exploreCapabilities": "సామర్థ్యాలను అన్వేషించండి",
  "stats": {
    "countries": "190+",
    "countriesLabel": "దేశాలు చేరుకున్నాయి",
    "availability": "99.999%",
    "availabilityLabel": "కోర్ నెట్వర్క్ లభ్యత",
    "operations": "24/7",
    "operationsLabel": "నెట్వర్క్ ఆపరేషన్లు"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "లైవ్ కాల్స్ రూట్ చేయబడుతున్నాయి"
  },
  "heroLiveBadge2": {
    "title": "ఉత్తమ మార్గం ఎంపిక చేయబడింది",
    "latency": "43 ms",
    "quality": "HD నాణ్యత"
  },
  "whyBadge": "INET వాయిస్ ఎందుకు",
  "whyTitle": "కస్టమర్ల నమ్మకాన్ని గెలుచుకునే వాయిస్ ఇన్ఫ్రాస్ట్రక్చర్",
  "whySubtitle1": "కాల్ నాణ్యత, రీచ్ లేదా కార్యాచరణ నియంత్రణలో రాజీపడని బృందాల కోసం ప్రత్యేకంగా నిర్మించబడింది.",
  "whySubtitle2": "అంతర్జాతీయ ట్రాఫిక్, స్థానిక ఉనికి మరియు ప్రతి కాల్ వెనుక నెట్వర్క్ నైపుణ్యం కోసం ఒకే విశ్వసనీయ భాగస్వామి.",
  "whyCards": [
    {
      "title": "స్థిరమైన స్పష్టమైన ధ్వని",
      "desc": "తక్కువ జాప్యం మార్గాలు మరియు నాణ్యత ఆధారిత ట్రాఫిక్ నిర్వహణ సంభాషణలను సహజంగా ఉంచుతాయి.",
      "footer": "HD వాయిస్ మరియు కోడెక్ మద్దతు"
    },
    {
      "title": "మరిన్ని మార్కెట్లను చేరుకోండి",
      "desc": "ప్రపంచవ్యాప్తంగా స్థాపించబడిన ప్రత్యక్ష క్యారియర్ సంబంధాల ద్వారా కాల్లను ప్రారంభించండి మరియు ముగించండి.",
      "footer": "190 కంటే ఎక్కువ దేశాలు మరియు భూభాగాలు"
    },
    {
      "title": "ప్రతి మార్గాన్ని నియంత్రించండి",
      "desc": "రియల్ టైమ్ పనితీరు పర్యవేక్షణతో ధర, నాణ్యత మరియు గమ్యస్థాన నియమాలను సెట్ చేయండి.",
      "footer": "సౌకర్యవంతమైన LCR మరియు నాణ్యత రూటింగ్"
    },
    {
      "title": "ఆటంకం లేకుండా విస్తరించండి",
      "desc": "ఒక బలమైన గ్లోబల్ ప్లాట్ఫారమ్ ద్వారా సామర్థ్యం, నంబర్లు మరియు కొత్త మార్కెట్లను సులభంగా జోడించండి.",
      "footer": "ఎలాస్టిక్ SIP సామర్థ్యం"
    }
  ],
  "capabilitiesBadge": "మా ప్రధాన సామర్థ్యాలు",
  "capabilitiesTitle": "మీ వాయిస్ ట్రాఫిక్ చుట్టూ నిర్మించబడిన సమగ్ర స్టాక్",
  "capabilitiesDesc": "మీకు అవసరమైన వాటిని మాత్రమే ఎంచుకోండి, కమ్యూనికేషన్ లేయర్ను మళ్లీ నిర్మించకుండా మార్కెట్, నంబర్ రకం ద్వారా విస్తరించండి.",
  "designSolution": "మీ పరిష్కారాన్ని రూపొందించండి",
  "solutionNote": "పరిష్కార రూపకల్పన మరియు ఇంటర్‌ఆపరేబిలిటీ పరీక్షలు చేర్చబడ్డాయి",
  "capabilities": [
    {
      "title": "హోల్‌సేల్ టెర్మినేషన్ (Wholesale)",
      "desc": "నాణ్యత-నిర్వహించబడే బహుళ-క్యారియర్ మార్గాల ద్వారా అంతర్జాతీయ వాయిస్ ట్రాఫిక్ను రూట్ చేయండి.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP ట్రంకింగ్",
      "desc": "ఎలాస్టిక్ సామర్థ్యంతో PBX, కాంటాక్ట్ సెంటర్లు మరియు కమ్యూనికేషన్ ప్లాట్‌ఫారమ్‌లను కనెక్ట్ చేయండి.",
      "tag": "ఇన్‌బౌండ్ + అవుట్‌బౌండ్"
    },
    {
      "title": "వర్చువల్ నంబర్లు (DID)",
      "desc": "భౌగోళిక, జాతీయ మరియు టోల్-ఫ్రీ నంబర్లతో నమ్మకమైన స్థానిక ఉనికిని సృష్టించండి.",
      "tag": "గ్లోబల్ DID ఇన్వెంటరీ"
    },
    {
      "title": "మోసం రక్షణ (Fraud Protection)",
      "desc": "గమ్యస్థాన నియంత్రణలు, క్రమరాహిత్య హెచ్చరికలు మరియు వ్యయ పరిమితులతో మార్జిన్లను రక్షించండి.",
      "tag": "24/7 నిరంతర పర్యవేక్షణ"
    },
    {
      "title": "నాణ్యత విశ్లేషణలు",
      "desc": "రూట్ మరియు గమ్యస్థానం ద్వారా ASR, ACD, PDD, జిట్టర్ మరియు పూర్తి రేట్లను ట్రాక్ చేయండి.",
      "tag": "రియల్-టైమ్ రిపోర్టింగ్"
    },
    {
      "title": "అనుకూల రూటింగ్",
      "desc": "నాణ్యత, ధర, భౌగోళిక ప్రాంతం లేదా కస్టమర్ నిర్దిష్ట నిబంధనల ప్రకారం మార్గాలకు ప్రాధాన్యత ఇవ్వండి.",
      "tag": "నియమాల ఆధారిత నియంత్రణ"
    }
  ],
  "networkBadge": "ప్రపంచ స్థాయిలో విశ్వసనీయత",
  "networkTitle": "సంభాషణలు అంతరాయం లేకుండా సాగేందుకు రూపొందించిన నెట్వర్క్",
  "networkDesc": "రిడండెంట్ ఇంటర్‌కనెక్ట్‌లు, ముందస్తు రూట్ నిర్వహణ మరియు 24 గంటల ఇంజనీరింగ్ ప్రతి కాల్‌ను ట్రాఫిక్ రద్దీ నుండి రక్షిస్తాయి.",
  "networkBullets": [
    "గమ్యస్థానం వారీగా బహుళ-క్యారియర్ రిడెండెన్సీ",
    "క్రియాశీల నాణ్యత స్కోరింగ్ మరియు స్వయంచాలక ఫెయిల్‌ఓవర్",
    "భౌగోళికంగా పంపిణీ చేయబడిన సిగ్నలింగ్ మరియు మీడియా మౌలిక సదుపాయాలు",
    "ముందస్తు మోసం గుర్తింపు మరియు ట్రాఫిక్ నియంత్రణలు"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "కోర్ నెట్‌వర్క్ లభ్యత"
    },
    {
      "val": "190+",
      "label": "కవర్ చేయబడిన దేశాలు & ప్రాంతాలు"
    },
    {
      "val": "24/7",
      "label": "గ్లోబల్ నెట్‌వర్క్ ఆపరేషన్స్"
    },
    {
      "val": "< 1 సెకను",
      "label": "స్వయంచాలక రూట్ స్పందన"
    }
  ],
  "liveStatus": {
    "title": "అన్ని సిస్టమ్‌లు సాధారణంగా పనిచేస్తున్నాయి",
    "check": "చివరి రూట్ తనిఖీ 12 సెకన్ల క్రితం",
    "live": "లైవ్"
  },
  "momentsBadge": "నిజమైన సంభాషణల కోసం నిర్మించబడింది",
  "momentsTitle": "ప్రతి కీలకమైన క్షణం కోసం వాయిస్ సేవలు",
  "momentsSubtitle": "రోజువారీ కస్టమర్ సేవ నుండి అత్యవసర నోటిఫికేషన్ల వరకు, iNet Global ప్రజలను కనెక్ట్ చేయడానికి అవసరమైన నియంత్రణను అందిస్తుంది.",
  "moments": [
    {
      "title": "కాంటాక్ట్ సెంటర్లు",
      "desc": "వివిధ ప్రాంతాలలో ఉన్న ఏజెంట్లకు స్థిరమైన ఇన్‌బౌండ్ మరియు అవుట్‌బౌండ్ వాయిస్ సేవలను అందించండి.",
      "footer": "స్థానిక ఉనికి • ఓవర్‌ఫ్లో రూటింగ్"
    },
    {
      "title": "ఫిన్‌టెక్ & ప్లాట్‌ఫారమ్‌లు",
      "desc": "ధృవీకరించబడిన కాల్స్, సేకరణలు మరియు సేవా వర్క్‌ఫ్లోలను సురక్షితమైన గ్లోబల్ రీచ్‌తో నిర్వహించండి.",
      "footer": "CLI డెలివరీ • మోసం నియంత్రణలు"
    },
    {
      "title": "ప్రయాణం & ఆతిథ్యం",
      "desc": "ప్రతి ప్రయాణానికి ముందు, ప్రయాణంలో మరియు తర్వాత అతిథులను మరియు ఆపరేషన్ బృందాలను కనెక్ట్ చేయండి.",
      "footer": "స్థానిక నంబర్లు • బహుభాషా రీచ్"
    },
    {
      "title": "కీలక నోటిఫికేషన్‌లు",
      "desc": "ప్రాధాన్యత మార్గాలు మరియు రియల్ టైమ్ పర్యవేక్షణతో అత్యవసర కాల్‌లను వెంటనే అందించండి.",
      "footer": "ప్రాధాన్యత రూటింగ్ • తక్షణ ఫెయిల్‌ఓవర్"
    }
  ],
  "timelineBadge": "పూర్తి నమ్మకంతో ప్రారంభించండి",
  "timelineTitle": "అవసరాల నుండి ప్రత్యక్ష ట్రాఫిక్ వరకు, కలిసి ప్రయాణం",
  "timelineSubtitle": "డిజైన్, టెస్టింగ్ మరియు ట్రాఫిక్ మైగ్రేషన్ అంతటా ఒక ప్రత్యేక వాయిస్ ఇంజనీర్ మీ బృందంతో ఉంటారు.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "పరిధి",
      "desc": "మార్కెట్లు, పరిమాణాలు, కోడెక్‌లు మరియు నాణ్యతా లక్ష్యాలను నిర్ధారించండి."
    },
    {
      "step": "2",
      "title": "కనెక్ట్",
      "desc": "SIP వివరాలను మార్పిడి చేసుకోండి మరియు ఇంటర్‌కనెక్ట్‌ను భద్రపరచండి."
    },
    {
      "step": "3",
      "title": "ధృవీకరణ",
      "desc": "ఇంటర్‌ఆపరేబిలిటీ పరీక్షలు మరియు CLI ప్రదర్శన పరీక్షలను అమలు చేయండి."
    },
    {
      "step": "4",
      "title": "ప్రారంభం",
      "desc": "ఇంజనీరింగ్ పర్యవేక్షణలో దశలవారీగా ట్రాఫిక్‌ను తరలించండి."
    }
  ],
  "terminal": {
    "title": "మీ వాయిస్ కనెక్షన్ వివరాలు",
    "readyBadge": "పరీక్షకు సిద్ధంగా ఉంది",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP అనుమతి జాబితా + TLS ఎన్‌క్రిప్షన్",
    "media": "SRTP • G.711 • G.729",
    "failover": "స్వయంచాలక ద్వితీయ రూట్",
    "interopNote": "ఇంటర్‌ఆపరేబిలిటీ చెక్‌లిస్ట్ చేర్చబడింది",
    "viewApiDocs": "API డాక్యుమెంటేషన్‌ను చూడండి"
  },
  "testimonialBadge": "ఉత్పత్తిలో నిరూపించబడింది",
  "testimonialTitle": "మీ ఆపరేషన్ బృందం పూర్తిగా ఆధారపడగల వాయిస్ భాగస్వామి",
  "testimonialSubtitle": "పారదర్శక పనితీరు, వేగంగా స్పందించే ఇంజనీర్లు మరియు వ్యాపార-క్లిష్టమైన కమ్యూనికేషన్ల కోసం నిర్మించబడిన మౌలిక సదుపాయాలు.",
  "testimonialPills": [
    "ఎన్‌క్రిప్టెడ్ రవాణా",
    "నాణ్యత పర్యవేక్షణ",
    "మోసం నియంత్రణలు"
  ],
  "quote": "కస్టమర్ అనుభవంలో రాజీ పడకుండా మూడు ప్రాంతాలలో వాయిస్ ట్రాఫిక్‌ను ఏకీకృతం చేయడానికి iNet Global మాకు పూర్తి రూట్ విజిబిలిటీని అందించింది.",
  "authorName": "Maya Chen",
  "authorRole": "వైస్ ప్రెసిడెంట్, నెట్‌వర్క్ ఆపరేషన్స్ • గ్లోబల్ CX ప్లాట్‌ఫారమ్",
  "stat1Val": "18%",
  "stat1Label": "తక్కువ రూట్ ఖర్చు",
  "stat2Val": "+4.2 పాయింట్లు",
  "stat2Label": "ASR మెరుగుదల",
  "ctaBadge": "మీ వాయిస్ నెట్‌వర్క్‌ను నిర్మిద్దాం",
  "ctaTitle": "మరింత స్పష్టమైన కాల్స్ మరియు తెలివైన ప్రపంచ వ్యాప్తికి సిద్ధంగా ఉన్నారా?",
  "ctaSubtitle": "మీరు ఎక్కడ కనెక్ట్ కావాలనుకుంటున్నారు, మీ ట్రాఫిక్ పరిమాణం మరియు నాణ్యత అవసరాలను మాకు చెప్పండి. మా నిపుణుల బృందం సరైన వ్యూహాన్ని రూపొందిస్తుంది.",
  "contactUs": "మమ్మల్ని సంప్రదించండి",
  "responseTime": "ఒక పని దినంలో వేగవంతమైన ప్రతిస్పందన"
};

const mr: WholesaleVoiceTranslation = {
  "heroBadge": "ग्लोबल व्हॉइस इन्फ्रास्ट्रक्चर",
  "heroTitle": "प्रत्येक कॉल, पूर्ण आत्मविश्वासाने जोडलेला.",
  "heroDesc": "प्रत्येक बाजारपेठेत स्पष्ट संभाषणाची आवश्यकता असणाऱ्या व्यवसायांसाठी कॅरियर-ग्रेड व्हॉइस टर्मिनेशन, ओरिजिनेंशन आणि व्हर्च्युअल नंबर्स—इंटेलिजंट राउटिंग आणि २४/७ नेटवर्क ऑपरेशन्सद्वारे समर्थित.",
  "talkToExpert": "तज्ज्ञांशी बोला",
  "exploreCapabilities": "क्षमता जाणून घ्या",
  "stats": {
    "countries": "१९०+",
    "countriesLabel": "देशांमध्ये पोहोच",
    "availability": "९९.९९९%",
    "availabilityLabel": "कोर नेटवर्क उपलब्धता",
    "operations": "२४/७",
    "operationsLabel": "नेटवर्क ऑपरेशन्स"
  },
  "heroLiveBadge1": {
    "count": "१२,४८०",
    "label": "थेट कॉल राऊट केले जात आहेत"
  },
  "heroLiveBadge2": {
    "title": "सर्वोत्कृष्ट मार्ग निवडला",
    "latency": "४३ ms",
    "quality": "HD गुणवत्ता"
  },
  "whyBadge": "INET व्हॉइस का निवडावे",
  "whyTitle": "ग्राहकांचा विश्वास संपादन करणारे व्हॉइस इन्फ्रास्ट्रक्चर",
  "whySubtitle1": "कॉल गुणवत्ता, पोहोच किंवा ऑपरेशनल नियंत्रणात तडजोड न करणाऱ्या टीम्ससाठी तयार केलेले.",
  "whySubtitle2": "आंतरराष्ट्रीय ट्रॅफिक, स्थानिक उपस्थिती आणि प्रत्येक कॉलमागील नेटवर्क कौशल्यासाठी एकच भागीदार.",
  "whyCards": [
    {
      "title": "सातत्याने स्पष्ट आवाज",
      "desc": "कमी लेटन्सी असलेले मार्ग आणि गुणवत्ता-आधारित ट्रॅफिक नियंत्रण संभाषणे पूर्णपणे नैसर्गिक ठेवतात.",
      "footer": "HD व्हॉइस आणि प्रगत कोडेक सपोर्ट"
    },
    {
      "title": "अधिक बाजारपेठांमध्ये पोहोचा",
      "desc": "जगभरातील थेट कॅरियर संबंधांद्वारे कॉल्स टर्मिनेट आणि ओरिजिनेंट करा.",
      "footer": "१९० हून अधिक देश आणि प्रदेश"
    },
    {
      "title": "प्रत्येक मार्गावर पूर्ण नियंत्रण",
      "desc": "रिअल-टाइम कार्यप्रदर्शन दृश्यमानतेसह किंमत, गुणवत्ता आणि गंतव्य नियमावली ठरवा.",
      "footer": "लवचिक LCR आणि गुणवत्ता राउटिंग"
    },
    {
      "title": "विनासायास स्केलिंग",
      "desc": "एकाच लवचिक जागतिक प्लॅटफॉर्मद्वारे क्षमता, नंबर आणि नवीन बाजारपेठा जोडा.",
      "footer": "लवचिक SIP क्षमता"
    }
  ],
  "capabilitiesBadge": "आमच्या मुख्य क्षमता",
  "capabilitiesTitle": "तुमच्या ट्रॅफिकनुसार तयार केलेला व्हॉइस स्टॅक",
  "capabilitiesDesc": "फक्त तुम्हाला आवश्यक असलेले घटक एकत्र करा आणि संपूर्ण संप्रेषण स्तर पुन्हा न बांधता बाजार, नंबर प्रकारानुसार विस्तार करा.",
  "designSolution": "तुमचे समाधान डिझाइन करा",
  "solutionNote": "सोल्युशन डिझाइन आणि इंटरऑपरेबिलिटी चाचण्या समाविष्ट",
  "capabilities": [
    {
      "title": "होलसेल टर्मिनेशन (Wholesale)",
      "desc": "आंतरराष्ट्रीय व्हॉइस ट्रॅफिक गुणवत्ता-व्यवस्थापित मल्टी-कॅरियर मार्गांद्वारे राऊट करा.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP ट्रंकिंग",
      "desc": "PBX, संपर्क केंद्रे आणि संप्रेषण प्लॅटफॉर्म लवचिक क्षमतेसह अखंडित जोडा.",
      "tag": "इनबाउंड + आउटबाउंड"
    },
    {
      "title": "व्हर्च्युअल नंबर्स (DID)",
      "desc": "भौगोलिक, राष्ट्रीय आणि टोल-फ्री क्रमांकांसह विश्वासार्ह स्थानिक उपस्थिती निर्माण करा.",
      "tag": "ग्लोबल DID इन्व्हेंटरी"
    },
    {
      "title": "फसवणूक प्रतिबंध (Fraud Protection)",
      "desc": "गंतव्य नियंत्रणे, विसंगती सूचना आणि खर्च मर्यादा याद्वारे नफ्याचे रक्षण करा.",
      "tag": "२४/७ अखंड देखरेख"
    },
    {
      "title": "गुणवत्ता विश्लेषण",
      "desc": "मार्ग आणि गंतव्यस्थानानुसार ASR, ACD, PDD, जिटर आणि कॉल पूर्णत्वाचा दर ट्रॅक करा.",
      "tag": "रिअल-टाइम अहवाल"
    },
    {
      "title": "सानुकूल राउटिंग",
      "desc": "गुणवत्ता, किंमत, भूगोल किंवा ग्राहक-विशिष्ट नियमांनुसार मार्गांना प्राधान्य द्या.",
      "tag": "नियम-आधारित नियंत्रण"
    }
  ],
  "networkBadge": "जागतिक स्तरावर विश्वासार्हता",
  "networkTitle": "संभाषणे सुरळीत सुरू ठेवण्यासाठी डिझाइन केलेले नेटवर्क",
  "networkDesc": "रिडंडंट इंटरकनेक्ट्स, सक्रिय मार्ग व्यवस्थापन आणि २४ तास अभियांत्रिकी प्रत्येक कॉलचे नेटवर्क गर्दीपासून संरक्षण करतात.",
  "networkBullets": [
    "प्रत्येक गंतव्यस्थानासाठी मल्टी-कॅरियर रिडंडन्सी",
    "सक्रिय गुणवत्ता स्कोअरिंग आणि स्वयंचलित फेलओव्हर",
    "भौगोलिकदृष्ट्या वितरित सिग्नलिंग आणि मीडिया इन्फ्रास्ट्रक्चर",
    "सक्रिय फसवणूक शोध आणि कठोर ट्रॅफिक नियंत्रणे"
  ],
  "networkStats": [
    {
      "val": "९९.९९९%",
      "label": "कोर नेटवर्क उपलब्धता"
    },
    {
      "val": "१९०+",
      "label": "समाविष्ट देश आणि प्रदेश"
    },
    {
      "val": "२४/७",
      "label": "ग्लोबल नेटवर्क ऑपरेशन्स"
    },
    {
      "val": "< १ सेकंद",
      "label": "स्वयंचलित मार्ग प्रतिसाद"
    }
  ],
  "liveStatus": {
    "title": "सर्व यंत्रणा सुरळीत सुरू आहेत",
    "check": "शेवटची मार्ग तपासणी १२ सेकंदांपूर्वी",
    "live": "थेट"
  },
  "momentsBadge": "वास्तविक संभाषणासाठी तयार केलेले",
  "momentsTitle": "प्रत्येक महत्त्वपूर्ण क्षणासाठी व्हॉइस सेवा",
  "momentsSubtitle": "दैनंदिन ग्राहक सेवेपासून ते उच्च-प्राधान्य सूचनांपर्यंत, iNet Global टीम्सना कनेक्ट राहण्यासाठी आवश्यक विस्तार देते.",
  "moments": [
    {
      "title": "संपर्क केंद्रे (Contact Centers)",
      "desc": "सर्व क्षेत्रांमध्ये विखुरलेल्या प्रतिनिधींना सातत्यपूर्ण इनबाउंड आणि आउटबाउंड व्हॉइस प्रदान करा.",
      "footer": "स्थानिक उपस्थिती • ओव्हरफ्लो राउटिंग"
    },
    {
      "title": "फिनटेक आणि प्लॅटफॉर्म्स",
      "desc": "सुरक्षित जागतिक पोहोचासह सत्यापित कॉल्स, वसुली आणि सेवा वर्कफ्लो चालवा.",
      "footer": "CLI डिलिव्हरी • फ्रॉड नियंत्रणे"
    },
    {
      "title": "प्रवास आणि आदरातिथ्य",
      "desc": "प्रत्येक प्रवासापूर्वी, दरम्यान आणि नंतर पाहुणे आणि ऑपरेशन्स टीम्सना सहजपणे जोडा.",
      "footer": "स्थानिक नंबर्स • बहुभाषिक पोहोच"
    },
    {
      "title": "महत्त्वपूर्ण सूचना",
      "desc": "वेळेवर पोहोचणाऱ्या कॉल्सचे प्राधान्य मार्ग आणि थेट देखरेखीसह वितरण करा.",
      "footer": "प्राधान्य राउटिंग • त्वरित फेलओव्हर"
    }
  ],
  "timelineBadge": "आत्मविश्वासाने सुरू करा",
  "timelineTitle": "गरजा समजून घेण्यापासून थेट ट्रॅफिकपर्यंत एकत्र प्रवास",
  "timelineSubtitle": "एक समर्पित व्हॉइस अभियंता डिझाइन, चाचणी आणि ट्रॅफिक मायग्रेशन दरम्यान आपल्या टीमसोबत पूर्णपणे सज्ज असतो.",
  "timelineSteps": [
    {
      "step": "१",
      "title": "व्याप्ती",
      "desc": "बाजारपेठा, ट्रॅफिकचे प्रमाण, कोडेक्स आणि गुणवत्ता उद्दिष्टे निश्चित करा."
    },
    {
      "step": "२",
      "title": "कनेक्ट",
      "desc": "SIP तपशील देवाणघेवाण करा आणि इंटरकनेक्ट सुरक्षित करा."
    },
    {
      "step": "३",
      "title": "पडताळणी",
      "desc": "इंटरऑपरेबिलिटी चाचण्या आणि CLI सादरीकरण चाचण्या चालवा."
    },
    {
      "step": "४",
      "title": "लाँच",
      "desc": "थेट अभियांत्रिकी देखरेखीखाली टप्प्याटप्प्याने ट्रॅफिक हस्तांतरित करा."
    }
  ],
  "terminal": {
    "title": "तुमचे व्हॉइस कनेक्शन तपशील",
    "readyBadge": "चाचणीसाठी सज्ज",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP अनुमती सूची + TLS एन्क्रिप्शन",
    "media": "SRTP • G.711 • G.729",
    "failover": "स्वयंचलित दुय्यम बॅकअप मार्ग",
    "interopNote": "इंटरऑपरेबिलिटी चेकलिस्ट समाविष्ट",
    "viewApiDocs": "API दस्तऐवजीकरण पहा"
  },
  "testimonialBadge": "उत्पादनात सिद्ध झालेले",
  "testimonialTitle": "तुमची ऑपरेशन्स टीम ज्यावर पूर्णपणे अवलंबून राहू शकते असा व्हॉइस पार्टनर",
  "testimonialSubtitle": "पारदर्शक कार्यप्रदर्शन, तत्पर अभियंते आणि व्यवसायासाठी गंभीर संप्रेषणासाठी तयार केलेली रचना.",
  "testimonialPills": [
    "एन्क्रिप्टेड ट्रान्सपोर्ट",
    "गुणवत्ता देखरेख",
    "फसवणूक नियंत्रणे"
  ],
  "quote": "ग्राहकांच्या अनुभवात तडजोड न करता तीन क्षेत्रांमध्ये व्हॉइस ट्रॅफिक एकत्रित करण्यासाठी iNet Global ने आम्हाला संपूर्ण मार्ग दृश्यमानता आणि थेट मदत दिली.",
  "authorName": "Maya Chen",
  "authorRole": "उपाध्यक्ष, नेटवर्क ऑपरेशन्स • ग्लोबल CX प्लॅटफॉर्म",
  "stat1Val": "१८%",
  "stat1Label": "कमी मार्ग खर्च",
  "stat2Val": "+४.२ गुण",
  "stat2Label": "ASR सुधारणा",
  "ctaBadge": "चला तुमचे व्हॉइस नेटवर्क तयार करूया",
  "ctaTitle": "अधिक स्पष्ट कॉल्स आणि स्मार्ट जागतिक संपर्कासाठी सज्ज आहात का?",
  "ctaSubtitle": "तुम्हाला कुठे कनेक्ट करायचे आहे, ट्रॅफिकचे प्रमाण आणि गुणवत्ता अपेक्षा आम्हाला सांगा. आमची टीम योग्य रणनीती तयार करेल.",
  "contactUs": "आमच्याशी संपर्क साधा",
  "responseTime": "एका कामाच्या दिवसात त्वरित प्रतिसाद"
};

const sw: WholesaleVoiceTranslation = {
  "heroBadge": "MIUNDOMBINU YA SAUTI YA ULIMWENGU",
  "heroTitle": "Kila Simu, Imeunganishwa Kwa Ujasiri Kamili.",
  "heroDesc": "Usitishaji na uanzishaji wa sauti wa kiwango cha mtoa huduma (carrier-grade) pamoja na nambari pepe kwa biashara zinazohitaji mazungumzo wazi katika kila soko—yakiungwa mkono na uelekezaji mahiri na uendeshaji wa mtandao 24/7.",
  "talkToExpert": "Zungumza na mtaalamu",
  "exploreCapabilities": "Chunguza uwezo",
  "stats": {
    "countries": "190+",
    "countriesLabel": "nchi zilizofikiwa",
    "availability": "99.999%",
    "availabilityLabel": "upatikanaji wa mtandao mkuu",
    "operations": "24/7",
    "operationsLabel": "uendeshaji wa mtandao"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "simu za moja kwa moja zikielekezwa"
  },
  "heroLiveBadge2": {
    "title": "Njia bora imechaguliwa",
    "latency": "43 ms",
    "quality": "Ubora wa HD"
  },
  "whyBadge": "KWA NINI INET VOICE",
  "whyTitle": "Miundombinu Ya Sauti Inayojenga Imani Ya Wateja",
  "whySubtitle1": "Imejengwa kwa timu ambazo haziwezi kuathiri ubora wa simu, ufikiaji au udhibiti wa uendeshaji.",
  "whySubtitle2": "Mshirika mmoja kwa trafiki ya kimataifa, uwepo wa ndani na utaalamu wa mtandao nyuma ya kila simu.",
  "whyCards": [
    {
      "title": "Sauti iliyo wazi mara kwa mara",
      "desc": "Njia zenye ucheleweshaji mdogo na uelekezaji wa trafiki unaozingatia ubora huweka mazungumzo ya asili.",
      "footer": "Sauti ya HD na usaidizi mpana wa kodeki"
    },
    {
      "title": "Fikia masoko zaidi",
      "desc": "Sitisha na uanzishe simu kupitia mahusiano imara ya moja kwa moja ya watoa huduma ulimwenguni kote.",
      "footer": "Zaidi ya nchi na maeneo 190"
    },
    {
      "title": "Dhibiti kila njia",
      "desc": "Weka sheria za bei, ubora na unakoenda ukiwa na mwonekano wa utendaji wa wakati halisi.",
      "footer": "LCR inayoweza kubadilika na uelekezaji wa ubora"
    },
    {
      "title": "Panuka bila vikwazo",
      "desc": "Ongeza uwezo, nambari na masoko mapya kupitia jukwaa moja imara la kimataifa.",
      "footer": "Uwezo wa SIP unaonyumbulika"
    }
  ],
  "capabilitiesBadge": "UWEZO WETU WA MSINGI",
  "capabilitiesTitle": "Mfumo Mmoja Wa Sauti, Uliojengwa Kulingana Na Trafiki Yako",
  "capabilitiesDesc": "Changanya kile unachohitaji pekee, kisha panua kwa soko, aina ya nambari au sera ya uelekezaji bila kujenga upya safu yako ya mawasiliano.",
  "designSolution": "Tengeneza suluhisho lako",
  "solutionNote": "Muundo wa suluhisho na majaribio ya uwezo wa kushirikiana yamejumuishwa",
  "capabilities": [
    {
      "title": "Usitishaji wa jumla (Wholesale)",
      "desc": "Elekeza trafiki ya sauti ya kimataifa kupitia njia za watoa huduma wengi zinazosimamiwa kwa ubora.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Unganisha mifumo ya PBX, vituo vya mawasiliano na majukwaa yenye uwezo unaonyumbulika.",
      "tag": "Zinazoingia + Zinazotoka"
    },
    {
      "title": "Nambari Pepe (DID)",
      "desc": "Jenga uwepo wa ndani unaoaminika kwa nambari za kijiografia, kitaifa na bila malipo (toll-free).",
      "tag": "Hifadhi ya DID ya kimataifa"
    },
    {
      "title": "Ulinzi dhidi ya ulaghai",
      "desc": "Kinga faida kwa vidhibiti vya maeneo unakoenda, arifa za hitilafu na viwango vya juu vya matumizi.",
      "tag": "Ufuatiliaji unaoendelea 24/7"
    },
    {
      "title": "Uchambuzi wa ubora",
      "desc": "Fuatilia ASR, ACD, PDD, mtetemo (jitter) na viwango vya ukamilishaji kulingana na njia na unakoenda.",
      "tag": "Ripoti za wakati halisi"
    },
    {
      "title": "Uelekezaji maalum",
      "desc": "Weka kipaumbele kwa njia kulingana na ubora, bei, jiografia au sera maalum za mteja.",
      "tag": "Udhibiti unaotegemea sheria"
    }
  ],
  "networkBadge": "UAMINIFU KATIKA KIWANGO CHA ULIMWENGU",
  "networkTitle": "Mtandao Ulioundwa Kuweka Mazungumzo Yakiendelea",
  "networkDesc": "Viunganishi vilivyopunguzwa makosa, usimamizi makini wa njia na wahandisi wa saa 24 hulinda kila simu dhidi ya msongamano.",
  "networkBullets": [
    "Utoaji huduma wa watoa huduma wengi kwa kila eneo",
    "Ufungaji wa ubora unaoendelea na ubadilishaji wa hitilafu kiotomatiki",
    "Miundombinu ya uashiriaji na media iliyosambazwa kijiografia",
    "Utambuzi thabiti wa ulaghai na udhibiti mkali wa trafiki"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Upatikanaji wa mtandao mkuu"
    },
    {
      "val": "190+",
      "label": "Nchi na maeneo yaliyofikiwa"
    },
    {
      "val": "24/7",
      "label": "Uendeshaji wa mtandao wa kimataifa"
    },
    {
      "val": "< sekunde 1",
      "label": "Jibu la kiotomatiki la njia"
    }
  ],
  "liveStatus": {
    "title": "Mifumo yote inafanya kazi",
    "check": "Ukaguzi wa mwisho wa njia sekunde 12 zilizopita",
    "live": "MOJA KWA MOJA"
  },
  "momentsBadge": "IMEJENGWA KWA MAZUNGUMZO HALISI",
  "momentsTitle": "Huduma Za Sauti Kwa Kila Wakati Muhimu",
  "momentsSubtitle": "Kuanzia huduma ya kila siku ya wateja hadi arifa za dharura za kipaumbele cha juu, iNet Global huwapa timu uwezo wa kuweka watu wakiwasiliana.",
  "moments": [
    {
      "title": "Vituo vya Mawasiliano",
      "desc": "Wape mawakala waliotawanyika sauti thabiti ya kuingia na kutoka katika maeneo yote.",
      "footer": "Uwepo wa ndani • uelekezaji wa ziada"
    },
    {
      "title": "Fintech & Majukwaa",
      "desc": "Wezesha simu zilizothibitishwa, mikusanyiko na mtiririko wa huduma kwa ufikiaji salama wa kimataifa.",
      "footer": "Uwasilishaji wa CLI • Vidhibiti vya udanganyifu"
    },
    {
      "title": "Usafiri na Ukarimu",
      "desc": "Unganisha wageni na timu za uendeshaji kabla, wakati na baada ya kila safari.",
      "footer": "Nambari za ndani • Ufikiaji wa lugha nyingi"
    },
    {
      "title": "Arifa Muhimu",
      "desc": "Wasilisha simu zinazozingatia muda ukiwa na njia za kipaumbele na ufuatiliaji wa wakati halisi.",
      "footer": "Uelekezaji wa kipaumbele • Failover ya papo hapo"
    }
  ],
  "timelineBadge": "ANZA KWA UJASIRI",
  "timelineTitle": "Kutoka Mahitaji Hadi Trafiki Halisi, Pamoja",
  "timelineSubtitle": "Mhandisi maalum wa sauti anakaa na timu yako kupitia usanifu, majaribio na uhamishaji wa trafiki—ili kila njia iwe tayari.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Upeo",
      "desc": "Thibitisha masoko, ujazo, kodeki na malengo ya ubora."
    },
    {
      "step": "2",
      "title": "Unganisha",
      "desc": "Badilishana maelezo ya SIP na salimisha muunganisho wako."
    },
    {
      "step": "3",
      "title": "Thibitisha",
      "desc": "Endesha majaribio ya uwezo wa kufanya kazi pamoja na majaribio ya uwasilishaji wa CLI."
    },
    {
      "step": "4",
      "title": "Zindua",
      "desc": "Hamisha trafiki kwa awamu chini ya ufuatiliaji wa moja kwa moja wa mhandisi."
    }
  ],
  "terminal": {
    "title": "Vigezo vya muunganisho wako wa sauti",
    "readyBadge": "TAYARI KUPIMA",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Orodha ya IP Zinazoruhusiwa + Usimbaji fiche wa TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Njia mbadala ya upili ya kiotomatiki",
    "interopNote": "Orodha ya ukaguzi wa uwezo wa kushirikiana imejumuishwa",
    "viewApiDocs": "Tazama nyaraka za API"
  },
  "testimonialBadge": "IMETHIBITISHWA KATIKA UZALISHAJI",
  "testimonialTitle": "Mshirika Wa Sauti Ambaye Timu Yako Ya Uendeshaji Inaweza Kumtegemea",
  "testimonialSubtitle": "Utendaji ulio wazi, wahandisi wanaojibu haraka na miundombinu iliyojengwa kwa mawasiliano muhimu ya biashara.",
  "testimonialPills": [
    "Usafirishaji uliosimbwa",
    "Ufuatiliaji wa ubora",
    "Vidhibiti vya ulaghai"
  ],
  "quote": "iNet Global ilitupa mwonekano kamili wa njia na usaidizi wa vitendo ili kuunganisha trafiki ya sauti katika maeneo matatu bila kuathiri uzoefu wa mteja.",
  "authorName": "Maya Chen",
  "authorRole": "Makamu wa Rais, Uendeshaji wa Mtandao • Jukwaa la Kimataifa la CX",
  "stat1Val": "18%",
  "stat1Label": "gharama ya chini ya njia",
  "stat2Val": "+4.2 alama",
  "stat2Label": "uboreshaji wa ASR",
  "ctaBadge": "TUJENGE MTANDAO WAKO WA SAUTI",
  "ctaTitle": "Uko Tayari Kwa Simu Wazi Zaidi Na Ufikiaji Mahiri Wa Ulimwengu?",
  "ctaSubtitle": "Tuambie unahitaji kuungana wapi, kiasi cha trafiki ulichonacho na viwango vyako vya ubora. Timu yetu itatengeneza mkakati sahihi wa uelekezaji na nambari.",
  "contactUs": "Wasiliana nasi",
  "responseTime": "Jibu ndani ya siku moja ya kazi"
};

const sv: WholesaleVoiceTranslation = {
  "heroBadge": "GLOBAL RÖSTINFRASTRUKTUR",
  "heroTitle": "Varje Samtal, Anslutet Med Fullt Förtroende.",
  "heroDesc": "Carrier-grade röstterminering, originering och virtuella nummer för företag som kräver kristallklara samtal på varje marknad—stödd av intelligent dirigering och dygnet-runt-öppen nätverksdrift 24/7.",
  "talkToExpert": "Prata med en expert",
  "exploreCapabilities": "Utforska funktioner",
  "stats": {
    "countries": "190+",
    "countriesLabel": "länder nådda",
    "availability": "99.999%",
    "availabilityLabel": "kärntillgänglighet",
    "operations": "24/7",
    "operationsLabel": "nätverksdrift"
  },
  "heroLiveBadge1": {
    "count": "12 480",
    "label": "aktiva samtal dirigeras"
  },
  "heroLiveBadge2": {
    "title": "Bästa rutten vald",
    "latency": "43 ms",
    "quality": "HD-kvalitet"
  },
  "whyBadge": "VARFÖR INET VOICE",
  "whyTitle": "Röstinfrastruktur Som Bygger Kundernas Förtroende",
  "whySubtitle1": "Byggd för team som inte kan kompromissa med samtalskvalitet, räckvidd eller operativ kontroll.",
  "whySubtitle2": "En partner för internationell trafik, lokal närvaro och djup nätverksexpertis bakom varje samtal.",
  "whyCards": [
    {
      "title": "Konsekvent klart ljud",
      "desc": "Låglatensrutter och kvalitetsbaserad trafikstyrning håller samtalen helt naturliga.",
      "footer": "HD-röst och omfattande codec-stöd"
    },
    {
      "title": "Nå fler marknader",
      "desc": "Terminera och initiera samtal genom väletablerade direkta operatörsrelationer världen över.",
      "footer": "Över 190 länder och territorier"
    },
    {
      "title": "Kontrollera varje rutt",
      "desc": "Sätt regler för priser, kvalitet och destinationer med realtidssynlighet i nätverksprestanda.",
      "footer": "Flexibel LCR och kvalitetsdirigering"
    },
    {
      "title": "Skala utan friktion",
      "desc": "Lägg till kapacitet, nummer och nya marknader via en enda motståndskraftig global plattform.",
      "footer": "Elastisk SIP-kapacitet"
    }
  ],
  "capabilitiesBadge": "VÅRA KÄRNFUNKTIONER",
  "capabilitiesTitle": "En Hel Röststack, Byggd Kring Din Trafik",
  "capabilitiesDesc": "Kombinera bara det du behöver och expandera efter marknad, nummertyp eller dirigeringspolicy utan att bygga om din kommunikationsarkitektur.",
  "designSolution": "Designa din lösning",
  "solutionNote": "Lösningsdesign och interoperabilitetstester ingår",
  "capabilities": [
    {
      "title": "Grossistterminering (Wholesale)",
      "desc": "Dirigera internationell rösttrafik via kvalitetshanterade vägar med flera operatörer.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP-trunking",
      "desc": "Koppla ihop växlar, kontaktcenter och kommunikationsplattformar med elastisk kapacitet.",
      "tag": "Inkommande + utgående"
    },
    {
      "title": "Virtuella nummer (DID)",
      "desc": "Bygg en pålitlig lokal närvaro med geografiska, nationella och avgiftsfria (toll-free) nummer.",
      "tag": "Globalt DID-lager"
    },
    {
      "title": "Bedrägeriskydd",
      "desc": "Skydda marginaler med destinationskontroller, avvikelsevarningar och utgiftstak.",
      "tag": "Kontinuerlig övervakning 24/7"
    },
    {
      "title": "Kvalitetsanalys",
      "desc": "Spåra ASR, ACD, PDD, jitter och fullföljandegrad noggrant per rutt och destination.",
      "tag": "Realtidsrapportering"
    },
    {
      "title": "Anpassad dirigering",
      "desc": "Prioritera rutter baserat på kvalitet, pris, geografi eller kundspecifika policyer.",
      "tag": "Regelbaserad kontroll"
    }
  ],
  "networkBadge": "PÅLITLIGHET I GLOBAL SKALA",
  "networkTitle": "Ett Nätverk Byggt För Att Hålla Samtalen Igång",
  "networkDesc": "Redundanta sammankopplingar, proaktiv rutthantering och tekniker dygnet runt skyddar varje samtal mot överbelastning och avbrott.",
  "networkBullets": [
    "Operatörsredundans per destination",
    "Aktiv kvalitetspoängsättning och automatisk redundansväxling",
    "Geografiskt distribuerad signalerings- och medieinfrastruktur",
    "Proaktiv bedrägeriupptäckt och strikta trafikkontroller"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Kärnnätets tillgänglighet"
    },
    {
      "val": "190+",
      "label": "Länder och territorier täckta"
    },
    {
      "val": "24/7",
      "label": "Global nätverksdrift"
    },
    {
      "val": "< 1 sek",
      "label": "Automatisk ruttsvarkänslighet"
    }
  ],
  "liveStatus": {
    "title": "Alla system fungerar felfritt",
    "check": "Senaste ruttkontroll för 12 sek sedan",
    "live": "LIVE"
  },
  "momentsBadge": "BYGGT FÖR RIKTIGA SAMTAL",
  "momentsTitle": "Rösttjänster För Varje Affärskritiskt Ögonblick",
  "momentsSubtitle": "Från vardaglig kundsupport till brådskande larm med hög prioritet – iNet Global ger teamen räckvidd och kontroll för att hålla människor anslutna.",
  "moments": [
    {
      "title": "Kontaktcenter",
      "desc": "Ge distribuerade agenter konsekvent inkommande och utgående rösttrafik över alla regioner.",
      "footer": "Lokal närvaro • spilldirigering"
    },
    {
      "title": "Fintech & Plattformar",
      "desc": "Driv verifierade samtal, inkasso och serviceflöden med säker global räckvidd.",
      "footer": "CLI-leverans • Bedrägerikontroller"
    },
    {
      "title": "Resor & Hotell",
      "desc": "Koppla samman resenärer och driftteam före, under och efter varje resa.",
      "footer": "Lokala nummer • Flerspråkig räckvidd"
    },
    {
      "title": "Kritiska Meddelanden",
      "desc": "Leverera tidskritiska samtal med prioriterade rutter och kontinuerlig realtidsövervakning.",
      "footer": "Prioritetsdirigering • Omedelbar failover"
    }
  ],
  "timelineBadge": "LANSERA MED TRYGGHET",
  "timelineTitle": "Från Kravspecifikation Till Skarp Trafik, Tillsammans",
  "timelineSubtitle": "En dedikerad röstingenjör stöttar ditt team genom design, tester och trafikmigrering—allt förberett och redo innan start.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Omfattning",
      "desc": "Fastställ marknader, volymer, codecs och kvalitetsmål."
    },
    {
      "step": "2",
      "title": "Anslut",
      "desc": "Utbyt SIP-detaljer och säkra er samtrafikanslutning."
    },
    {
      "step": "3",
      "title": "Validera",
      "desc": "Kör interoperabilitetstester och tester för nummerpresentation (CLI)."
    },
    {
      "step": "4",
      "title": "Driftsätt",
      "desc": "Flytta över trafiken stegvis under direkt övervakning av ingenjörer."
    }
  ],
  "terminal": {
    "title": "Dina anslutningsparametrar för röst",
    "readyBadge": "REDO FÖR TEST",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP-vitlistning + TLS-kryptering",
    "media": "SRTP • G.711 • G.729",
    "failover": "Automatisk sekundär rutt",
    "interopNote": "Checklista för sammankoppling ingår",
    "viewApiDocs": "Visa API-dokumentation"
  },
  "testimonialBadge": "BEPRÖVAT I PRODUKTION",
  "testimonialTitle": "En Röstpartner Som Ditt Driftsteam Kan Lita På Fullt Ut",
  "testimonialSubtitle": "Transparent prestanda, snabba ingenjörer och infrastruktur anpassad för affärskritisk kommunikation.",
  "testimonialPills": [
    "Krypterad transport",
    "Kvalitetsövervakning",
    "Bedrägerikontroller"
  ],
  "quote": "iNet Global gav oss fullständig ruttsynlighet och praktiskt stöd för att samla vår rösttrafik i tre regioner utan att kompromissa med kundupplevelsen.",
  "authorName": "Maya Chen",
  "authorRole": "VP, Network Operations • Global CX-plattform",
  "stat1Val": "18%",
  "stat1Label": "lägre ruttkostnad",
  "stat2Val": "+4.2 punkter",
  "stat2Label": "ASR-förbättring",
  "ctaBadge": "LÅT OSS BYGGA DITT RÖSTNÄTVERK",
  "ctaTitle": "Redo För Tydligare Samtal Och Smartare Global Räckvidd?",
  "ctaSubtitle": "Berätta var du vill ansluta, trafikmängd och dina kvalitetskrav. Vårt röstteam designar den optimala dirigerings- och nummerstrategin.",
  "contactUs": "Kontakta oss",
  "responseTime": "Svar inom en arbetsdag"
};

const el: WholesaleVoiceTranslation = {
  "heroBadge": "ΠΑΓΚΟΣΜΙΑ ΦΩΝΗΤΙΚΗ ΥΠΟΔΟΜΗ",
  "heroTitle": "Κάθε Κλήση, Συνδεδεμένη Με Απόλυτη Εμπιστοσύνη.",
  "heroDesc": "Τερματισμός φωνής επιπέδου παρόχου, εκκίνηση κλήσεων και εικονικοί αριθμοί για επιχειρήσεις που απαιτούν κρυστάλλινες συνομιλίες σε κάθε αγορά—με την υποστήριξη έξυπνης δρομολόγησης και 24/7 λειτουργιών δικτύου.",
  "talkToExpert": "Μιλήστε με έναν ειδικό",
  "exploreCapabilities": "Εξερευνήστε τις δυνατότητες",
  "stats": {
    "countries": "190+",
    "countriesLabel": "χώρες κάλυψης",
    "availability": "99.999%",
    "availabilityLabel": "διαθεσιμότητα πυρήνα",
    "operations": "24/7",
    "operationsLabel": "λειτουργίες δικτύου"
  },
  "heroLiveBadge1": {
    "count": "12.480",
    "label": "ζωντανές κλήσεις δρομολογούνται"
  },
  "heroLiveBadge2": {
    "title": "Επιλέχθηκε η βέλτιστη διαδρομή",
    "latency": "43 ms",
    "quality": "Ποιότητα HD"
  },
  "whyBadge": "ΓΙΑΤΙ INET VOICE",
  "whyTitle": "Φωνητική Υποδομή Που Κερδίζει Την Εμπιστοσύνη Των Πελατών",
  "whySubtitle1": "Σχεδιασμένη για ομάδες που δεν μπορούν να συμβιβαστούν στην ποιότητα των κλήσεων, την εμβέλεια ή τον επιχειρησιακό έλεγχο.",
  "whySubtitle2": "Ένας ενιαίος συνεργάτης για διεθνή κίνηση, τοπική παρουσία και βαθιά τεχνογνωσία δικτύου πίσω από κάθε κλήση.",
  "whyCards": [
    {
      "title": "Σταθερά κρυστάλλινος ήχος",
      "desc": "Διαδρομές χαμηλής καθυστέρησης και δρομολόγηση βάσει ποιότητας διατηρούν τις συνομιλίες απόλυτα φυσικές.",
      "footer": "Υποστήριξη φωνής HD και σύγχρονων codecs"
    },
    {
      "title": "Προσεγγίστε περισσότερες αγορές",
      "desc": "Τερματίστε και εκκινήστε κλήσεις μέσω εδραιωμένων άμεσων σχέσεων με παρόχους παγκοσμίως.",
      "footer": "Περισσότερες από 190 χώρες και περιοχές"
    },
    {
      "title": "Ελέγξτε κάθε διαδρομή",
      "desc": "Ορίστε κανόνες τιμολόγησης, ποιότητας και προορισμών με ορατότητα απόδοσης σε πραγματικό χρόνο.",
      "footer": "Ευέλικτο LCR και ποιοτική δρομολόγηση"
    },
    {
      "title": "Κλιμακώστε χωρίς τριβές",
      "desc": "Προσθέστε χωρητικότητα, αριθμούς και νέες αγορές μέσω μιας ανθεκτικής παγκόσμιας πλατφόρμας.",
      "footer": "Ελαστική χωρητικότητα SIP"
    }
  ],
  "capabilitiesBadge": "ΟΙ ΒΑΣΙΚΕΣ ΜΑΣ ΔΥΝΑΤΟΤΗΤΕΣ",
  "capabilitiesTitle": "Μια Ενιαία Στοίβα Φωνής, Χτισμένη Γύρω Από Την Κίνησή Σας",
  "capabilitiesDesc": "Συνδυάστε μόνο ό,τι χρειάζεστε και επεκταθείτε ανά αγορά, τύπο αριθμού ή πολιτική δρομολόγησης χωρίς να ανακατασκευάσετε το τηλεπικοινωνιακό σας επίπεδο.",
  "designSolution": "Σχεδιάστε τη λύση σας",
  "solutionNote": "Περιλαμβάνονται αρχιτεκτονικός σχεδιασμός και δοκιμές διαλειτουργικότητας",
  "capabilities": [
    {
      "title": "Χονδρικός τερματισμός (Wholesale)",
      "desc": "Δρομολογήστε διεθνή κίνηση φωνής μέσω ποιοτικά ελεγχόμενων διαδρομών πολλαπλών παρόχων.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Συνδέστε τηλεφωνικά κέντρα PBX, contact centers και πλατφόρμες με ελαστική χωρητικότητα.",
      "tag": "Εισερχόμενα + Εξερχόμενα"
    },
    {
      "title": "Εικονικοί Αριθμοί (DID)",
      "desc": "Χτίστε αξιόπιστη τοπική παρουσία με γεωγραφικούς, εθνικούς αριθμούς και αριθμούς χωρίς χρέωση (toll-free).",
      "tag": "Παγκόσμιο απόθεμα DID"
    },
    {
      "title": "Προστασία από απάτες",
      "desc": "Προστατεύστε τα περιθώρια κέρδους με ελέγχους προορισμών, ειδοποιήσεις ανωμαλιών και όρια δαπανών.",
      "tag": "24/7 συνεχής παρακολούθηση"
    },
    {
      "title": "Αναλυτικά στοιχεία ποιότητας",
      "desc": "Παρακολουθήστε ASR, ACD, PDD, jitter και ποσοστά ολοκλήρωσης ανά διαδρομή και προορισμό.",
      "tag": "Αναφορές σε πραγματικό χρόνο"
    },
    {
      "title": "Προσαρμοσμένη δρομολόγηση",
      "desc": "Δώστε προτεραιότητα σε διαδρομές βάσει ποιότητας, κόστους, γεωγραφίας ή ειδικών πολιτικών.",
      "tag": "Έλεγχος βάσει κανόνων"
    }
  ],
  "networkBadge": "ΑΞΙΟΠΙΣΤΙΑ ΣΕ ΠΑΓΚΟΣΜΙΑ ΚΛΙΜΑΚΑ",
  "networkTitle": "Ένα Δίκτυο Σχεδιασμένο Για Να Διατηρεί Τις Συνομιλίες Απρόσκοπτες",
  "networkDesc": "Εφεδρικές διασυνδέσεις, προληπτική διαχείριση διαδρομών και 24ωρη μηχανική υποστήριξη προστατεύουν κάθε κλήση από συμφόρηση και διακοπές.",
  "networkBullets": [
    "Πλεονασμός πολλαπλών παρόχων ανά προορισμό",
    "Ενεργή αξιολόγηση ποιότητας και αυτόματη ανακατεύθυνση αστοχίας",
    "Γεωγραφικά κατανεμημένη υποδομή σηματοδοσίας και πολυμέσων",
    "Προληπτικός εντοπισμός απάτης και αυστηροί έλεγχοι κυκλοφορίας"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Διαθεσιμότητα πυρήνα δικτύου"
    },
    {
      "val": "190+",
      "label": "Χώρες και περιοχές που καλύπτονται"
    },
    {
      "val": "24/7",
      "label": "Παγκόσμιες λειτουργίες δικτύου"
    },
    {
      "val": "< 1 δευτ",
      "label": "Αυτόματη απόκριση διαδρομής"
    }
  ],
  "liveStatus": {
    "title": "Όλα τα συστήματα λειτουργούν κανονικά",
    "check": "Τελευταίος έλεγχος διαδρομής πριν από 12 δευτ",
    "live": "LIVE"
  },
  "momentsBadge": "ΦΤΙΑΓΜΕΝΟ ΓΙΑ ΠΡΑΓΜΑΤΙΚΕΣ ΣΥΝΟΜΙΛΙΕΣ",
  "momentsTitle": "Υπηρεσίες Φωνής Για Κάθε Κρίσιμη Επιχειρηματική Στιγμή",
  "momentsSubtitle": "Από την καθημερινή εξυπηρέτηση πελατών έως τις ειδοποιήσεις υψηλής προτεραιότητας, η iNet Global προσφέρει εμβέλεια και έλεγχο.",
  "moments": [
    {
      "title": "Κέντρα Επικοινωνίας (Contact Centers)",
      "desc": "Προσφέρετε σε απομακρυσμένους εκπροσώπους σταθερή εισερχόμενη και εξερχόμενη φωνή σε όλες τις περιοχές.",
      "footer": "Τοπική παρουσία • overflow routing"
    },
    {
      "title": "Fintech & Πλατφόρμες",
      "desc": "Υποστηρίξτε επαληθευμένες κλήσεις, εισπράξεις και ροές εξυπηρέτησης με ασφαλή παγκόσμια εμβέλεια.",
      "footer": "Παράδοση CLI • Έλεγχοι απάτης"
    },
    {
      "title": "Ταξίδια & Φιλοξενία",
      "desc": "Συνδέστε ταξιδιώτες και επιχειρησιακές ομάδες πριν, κατά τη διάρκεια και μετά από κάθε ταξίδι.",
      "footer": "Τοπικοί αριθμοί • Πολυγλωσσική εμβέλεια"
    },
    {
      "title": "Κρίσιμες Ειδοποιήσεις",
      "desc": "Παραδώστε ευαίσθητες στον χρόνο κλήσεις με διαδρομές προτεραιότητας και παρακολούθηση σε πραγματικό χρόνο.",
      "footer": "Δρομολόγηση προτεραιότητας • Άμεσο failover"
    }
  ],
  "timelineBadge": "ΞΕΚΙΝΗΣΤΕ ΜΕ ΑΥΤΟΠΕΠΟΙΘΗΣΗ",
  "timelineTitle": "Μαζί: Από Τις Απαιτήσεις Έως Την Πραγματική Κίνηση",
  "timelineSubtitle": "Ένας ειδικός μηχανικός φωνής παραμένει με την ομάδα σας καθ' όλη τη διάρκεια σχεδιασμού, δοκιμών και μετάβασης της κυκλοφορίας.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Ανάλυση",
      "desc": "Επιβεβαίωση αγορών, όγκων κίνησης, codecs και ποιοτικών στόχων."
    },
    {
      "step": "2",
      "title": "Σύνδεση",
      "desc": "Ανταλλαγή στοιχείων SIP και ασφάλιση της διασύνδεσής σας."
    },
    {
      "step": "3",
      "title": "Επικύρωση",
      "desc": "Εκτέλεση δοκιμών διαλειτουργικότητας και εμφάνισης αριθμού καλούντος (CLI)."
    },
    {
      "step": "4",
      "title": "Έναρξη",
      "desc": "Σταδιακή μεταφορά της κίνησης υπό ζωντανή επίβλεψη μηχανικών."
    }
  ],
  "terminal": {
    "title": "Παράμετροι της φωνητικής σας σύνδεσης",
    "readyBadge": "ΕΤΟΙΜΟ ΓΙΑ ΔΟΚΙΜΗ",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP Allowlist + Κρυπτογράφηση TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Αυτόματη δευτερεύουσα διαδρομή",
    "interopNote": "Περιλαμβάνεται λίστα ελέγχου διαλειτουργικότητας",
    "viewApiDocs": "Προβολή τεκμηρίωσης API"
  },
  "testimonialBadge": "ΑΠΟΔΕΔΕΙΓΜΕΝΟ ΣΤΗΝ ΠΡΑΞΗ",
  "testimonialTitle": "Ένας Συνεργάτης Φωνής Στον Οποίο Μπορεί Να Βασιστεί Η Ομάδα Σας",
  "testimonialSubtitle": "Διαφανής απόδοση, άμεση ανταπόκριση μηχανικών και υποδομή σχεδιασμένη για κρίσιμες εταιρικές επικοινωνίες.",
  "testimonialPills": [
    "Κρυπτογραφημένη μεταφορά",
    "Παρακολούθηση ποιότητας",
    "Έλεγχοι απάτης"
  ],
  "quote": "Η iNet Global μας πρόσφερε πλήρη ορατότητα διαδρομών και πρακτική υποστήριξη για την ενοποίηση της κίνησης φωνής σε τρεις περιοχές χωρίς να επηρεαστεί η εμπειρία του πελάτη.",
  "authorName": "Maya Chen",
  "authorRole": "Αντιπρόεδρος Λειτουργιών Δικτύου • Παγκόσμια πλατφόρμα CX",
  "stat1Val": "18%",
  "stat1Label": "χαμηλότερο κόστος διαδρομής",
  "stat2Val": "+4.2 μονάδες",
  "stat2Label": "βελτίωση ASR",
  "ctaBadge": "ΑΣ ΧΤΙΣΟΥΜΕ ΤΟ ΔΙΚΤΥΟ ΦΩΝΗΣ ΣΑΣ",
  "ctaTitle": "Έτοιμοι Για Πιο Καθαρές Κλήσεις Και Πιο Έξυπνη Παγκόσμια Εμβέλεια;",
  "ctaSubtitle": "Ενημερώστε μας για τους προορισμούς, τον όγκο κίνησης και τις προδιαγραφές ποιότητας. Η ομάδα μας θα σχεδιάσει τη βέλτιστη στρατηγική δρομολόγησης.",
  "contactUs": "Επικοινωνήστε μαζί μας",
  "responseTime": "Απάντηση εντός μίας εργάσιμης ημέρας"
};

const cs: WholesaleVoiceTranslation = {
  "heroBadge": "GLOBÁLNÍ HLASOVÁ INFRASTRUKTURA",
  "heroTitle": "Každý Hovor, Spojen S Naprostou Jistotou.",
  "heroDesc": "Hlasová terminace, originace a virtuální čísla na úrovni operátora pro podniky, které vyžadují křišťálově čisté hovory na každém trhu—podpořené inteligentním směrováním a nepřetržitým dohledem sítě 24/7.",
  "talkToExpert": "Promluvte si s expertem",
  "exploreCapabilities": "Prozkoumat možnosti",
  "stats": {
    "countries": "190+",
    "countriesLabel": "dosažených zemí",
    "availability": "99.999%",
    "availabilityLabel": "dostupnost jádra sítě",
    "operations": "24/7",
    "operationsLabel": "provoz sítě"
  },
  "heroLiveBadge1": {
    "count": "12 480",
    "label": "aktivních hovorů směrováno"
  },
  "heroLiveBadge2": {
    "title": "Vybrána nejlepší trasa",
    "latency": "43 ms",
    "quality": "HD kvalita"
  },
  "whyBadge": "PROČ INET VOICE",
  "whyTitle": "Hlasová Infrastruktura, Která Získává Důvěru Zákazníků",
  "whySubtitle1": "Vyvinuto pro týmy, které nemohou dělat kompromisy v kvalitě hovorů, dosahu ani provozní kontrole.",
  "whySubtitle2": "Jeden spolehlivý partner pro mezinárodní provoz, lokální přítomnost a špičkovou síťovou expertízu za každým hovorem.",
  "whyCards": [
    {
      "title": "Konzistentně čistý zvuk",
      "desc": "Trasy s nízkou latencí a řízení provozu na základě kvality udržují konverzace zcela přirozené.",
      "footer": "HD hlas a široká podpora kodeků"
    },
    {
      "title": "Oslovte více trhů",
      "desc": "Terminujte a iniciujte hovory prostřednictvím přímo navázaných partnerských vztahů s operátory po celém světě.",
      "footer": "Více než 190 zemí a teritorií"
    },
    {
      "title": "Kontrola nad každou trasou",
      "desc": "Nastavujte cenová, kvalitativní a cílová pravidla s přehledem o výkonu v reálném čase.",
      "footer": "Flexibilní LCR a směrování podle kvality"
    },
    {
      "title": "Škálování bez překážek",
      "desc": "Přidávejte kapacitu, telefonní čísla a nové trhy prostřednictvím jediné odolné globální platformy.",
      "footer": "Elastická kapacita SIP"
    }
  ],
  "capabilitiesBadge": "NAŠE KLÍČOVÉ SCHOPNOSTI",
  "capabilitiesTitle": "Jeden Hlasový Stack, Postavený Na Míru Vašemu Provozu",
  "capabilitiesDesc": "Kombinujte pouze to, co potřebujete, a rozšiřujte podle trhu, typu čísla nebo směrovacích zásad bez nutnosti přestavby komunikační vrstvy.",
  "designSolution": "Navrhnout vaše řešení",
  "solutionNote": "Návrh řešení a testování interoperability v ceně",
  "capabilities": [
    {
      "title": "Velkoobchodní terminace (Wholesale)",
      "desc": "Směrujte mezinárodní hlasový provoz přes kvalitativně spravované trasy s více operátory.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Propojte pobočkové ústředny PBX, kontaktní centra a komunikační platformy s elastickou kapacitou.",
      "tag": "Příchozí + Odchozí"
    },
    {
      "title": "Virtuální čísla (DID)",
      "desc": "Vybudujte důvěryhodnou lokální přítomnost pomocí geografických, národních a bezplatných čísel (toll-free).",
      "tag": "Globální inventář DID"
    },
    {
      "title": "Ochrana proti podvodům",
      "desc": "Chraňte své marže pomocí kontrol destinací, varování před anomáliemi a výdajových limitů.",
      "tag": "Nepřetržitý monitoring 24/7"
    },
    {
      "title": "Analýza kvality",
      "desc": "Sledujte ASR, ACD, PDD, jitter a úspěšnost spojení podle trasy a destinace.",
      "tag": "Reporting v reálném čase"
    },
    {
      "title": "Vlastní směrování",
      "desc": "Upřednostňujte trasy podle kvality, ceny, geografie nebo vlastních zákaznických zásad.",
      "tag": "Řízení na základě pravidel"
    }
  ],
  "networkBadge": "SPOLEHLIVOST V GLOBÁLNÍM MĚŘÍTKU",
  "networkTitle": "Síť Navržená Tak, Aby Hovory Plynuly Zcela Bez Přerušení",
  "networkDesc": "Redundantní propojení, proaktivní správa tras a nepřetržitý inženýrský dohled chrání každý hovor před přetížením a výpadky.",
  "networkBullets": [
    "Redundance více operátorů pro každou destinaci",
    "Aktivní hodnocení kvality a automatické přepnutí při selhání",
    "Geograficky distribuovaná signalizační a mediální infrastruktura",
    "Proaktivní detekce podvodů a přísná kontrola provozu"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Dostupnost jádra sítě"
    },
    {
      "val": "190+",
      "label": "Pokrytých zemí a teritorií"
    },
    {
      "val": "24/7",
      "label": "Globální síťový provoz"
    },
    {
      "val": "< 1 s",
      "label": "Automatická reakce trasy"
    }
  ],
  "liveStatus": {
    "title": "Všechny systémy jsou funkční",
    "check": "Poslední kontrola tras před 12 s",
    "live": "ŽIVĚ"
  },
  "momentsBadge": "POSTAVENO PRO SKUTEČNOU KONVERZACI",
  "momentsTitle": "Hlasové Služby Pro Každý Kritický Obchodní Okamžik",
  "momentsSubtitle": "Od každodenní zákaznické péče po urgentní výstrahy s vysokou prioritou – iNet Global poskytuje dosah a kontrolu pro spolehlivé spojení.",
  "moments": [
    {
      "title": "Kontaktní centra",
      "desc": "Poskytněte distribuovaným agentům stabilní příchozí a odchozí hlasové služby ve všech regionech.",
      "footer": "Lokální přítomnost • přepadové směrování"
    },
    {
      "title": "Fintech & Platformy",
      "desc": "Zabezpečte ověřovací hovory, vymáhání a servisní procesy s bezpečným celosvětovým dosahem.",
      "footer": "Doručení CLI • Kontrola podvodů"
    },
    {
      "title": "Cestování a pohostinství",
      "desc": "Propojte hosty a provozní týmy před, během i po každé cestě.",
      "footer": "Místní čísla • Vícejazyčný dosah"
    },
    {
      "title": "Kritická oznámení",
      "desc": "Doručujte časově naléhavé hovory po prioritních trasách s nepřetržitým sledováním v reálném čase.",
      "footer": "Prioritní směrování • Okamžitý failover"
    }
  ],
  "timelineBadge": "SPUSŤTE S JISTOTOU",
  "timelineTitle": "Od Požadavků K Živému Provozu, Krok Za Krokem",
  "timelineSubtitle": "Vyhrazený hlasový inženýr provede váš tým fázemi návrhu, testování a migrace provozu—vše dokonale připraveno před spuštěním.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Rozsah",
      "desc": "Potvrzení trhů, objemů provozu, kodeků a cílů kvality."
    },
    {
      "step": "2",
      "title": "Propojení",
      "desc": "Výměna parametrů SIP a zabezpečení vzájemného propojení."
    },
    {
      "step": "3",
      "title": "Ověření",
      "desc": "Spuštění testů interoperability a testů prezentace volajícího čísla (CLI)."
    },
    {
      "step": "4",
      "title": "Spuštění",
      "desc": "Postupný převod provozu pod přímým dohledem našich inženýrů."
    }
  ],
  "terminal": {
    "title": "Parametry vašeho hlasového připojení",
    "readyBadge": "PŘIPRAVENO K TESTU",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP povolené adresy + Šifrování TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Automatická záložní sekundární trasa",
    "interopNote": "Kontrolní seznam interoperability součástí",
    "viewApiDocs": "Zobrazit dokumentaci API"
  },
  "testimonialBadge": "OVĚŘENO V PROVOZU",
  "testimonialTitle": "Hlasový Partner, Na Kterého Se Váš Provozní Tým Může Spolehnout",
  "testimonialSubtitle": "Transparentní výkon, rychlá odezva inženýrů a infrastruktura vyvinutá pro kritickou podnikovou komunikaci.",
  "testimonialPills": [
    "Šifrovaný přenos",
    "Monitorování kvality",
    "Kontroly proti podvodům"
  ],
  "quote": "iNet Global nám poskytl dokonalý přehled o trasách a praktickou technickou podporu, abychom mohli sloučit hlasový provoz ve třech regionech bez dopadu na zákaznickou spokojenost.",
  "authorName": "Maya Chen",
  "authorRole": "Viceprezidentka pro síťový provoz • Globální platforma CX",
  "stat1Val": "18%",
  "stat1Label": "nižší náklady na trasy",
  "stat2Val": "+4.2 b.",
  "stat2Label": "zlepšení úspěšnosti ASR",
  "ctaBadge": "POJĎME VYBUDOVAT VAŠI HLASOVOU SÍŤ",
  "ctaTitle": "Jste Připraveni Na Čistší Hovory A Chytřejší Globální Dosah?",
  "ctaSubtitle": "Sdělte nám požadované destinace, objem provozu a očekávané standardy kvality. Náš tým navrhne optimální strategii směrování a číslování.",
  "contactUs": "Kontaktujte nás",
  "responseTime": "Odpověď do jednoho pracovního dne"
};

const ro: WholesaleVoiceTranslation = {
  "heroBadge": "INFRASTRUCTURĂ VOCALĂ GLOBALĂ",
  "heroTitle": "Fiecare Apel, Conectat Cu Încredere Deplină.",
  "heroDesc": "Terminare, originare vocală și numere virtuale de nivel carrier-grade pentru companii ce necesită conversații clare pe fiecare piață—susținute de rutare inteligentă și operațiuni de rețea 24/7.",
  "talkToExpert": "Vorbește cu un expert",
  "exploreCapabilities": "Explorează funcționalitățile",
  "stats": {
    "countries": "190+",
    "countriesLabel": "țări acoperite",
    "availability": "99.999%",
    "availabilityLabel": "disponibilitate rețea centrală",
    "operations": "24/7",
    "operationsLabel": "operațiuni de rețea"
  },
  "heroLiveBadge1": {
    "count": "12.480",
    "label": "apeluri live rutate"
  },
  "heroLiveBadge2": {
    "title": "Cea mai bună rută selectată",
    "latency": "43 ms",
    "quality": "Calitate HD"
  },
  "whyBadge": "DE CE INET VOICE",
  "whyTitle": "Infrastructură Vocală Care Câștigă Încrederea Clienților",
  "whySubtitle1": "Construită pentru echipe care nu acceptă compromisuri în calitatea apelurilor, acoperire sau control operațional.",
  "whySubtitle2": "Un partener unic pentru traficul internațional, prezența locală și expertiza inginerească din spatele fiecărui apel.",
  "whyCards": [
    {
      "title": "Sunet clar în mod constant",
      "desc": "Rutele cu latență redusă și dirijarea traficului bazată pe calitate mențin conversațiile perfect naturale.",
      "footer": "Voce HD și suport pentru codec-uri avansate"
    },
    {
      "title": "Extindeți-vă pe mai multe piețe",
      "desc": "Terminați și inițiați apeluri prin relații directe și consolidate cu operatori globali.",
      "footer": "Peste 190 de țări și teritorii"
    },
    {
      "title": "Controlați fiecare rută",
      "desc": "Setați reguli de preț, calitate și destinație cu vizibilitate în timp real asupra performanței.",
      "footer": "LCR flexibil și rutare pe calitate"
    },
    {
      "title": "Scalați fără fricțiune",
      "desc": "Adăugați capacitate, numere și piețe noi printr-o platformă globală unificată și rezistentă.",
      "footer": "Capacitate SIP elastică"
    }
  ],
  "capabilitiesBadge": "CAPACITĂȚILE NOASTRE CHEIE",
  "capabilitiesTitle": "O Singură Arhitectură Vocală, Construită În Jurul Traficului Tău",
  "capabilitiesDesc": "Combinați doar ceea ce aveți nevoie, apoi extindeți după piață, tip de număr sau politică de rutare fără a reconstrui stratul de telecomunicații.",
  "designSolution": "Configurează soluția ta",
  "solutionNote": "Proiectarea soluției și testarea interoperabilității sunt incluse",
  "capabilities": [
    {
      "title": "Terminare Wholesale",
      "desc": "Rutați traficul vocal internațional prin căi multi-operator gestionate strict din punct de vedere calitativ.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Conectați centrale PBX, centre de contact și platforme de comunicații cu o capacitate scalabilă.",
      "tag": "Intrare + Ieșire"
    },
    {
      "title": "Numere Virtuale (DID)",
      "desc": "Stabiliți o prezență locală de încredere cu numere geografice, naționale și linii gratuite (toll-free).",
      "tag": "Inventar DID global"
    },
    {
      "title": "Protecție antifraudă",
      "desc": "Protejați marjele de profit prin controale ale destinațiilor, alerte de anomalii și limite de consum.",
      "tag": "Monitorizare continuă 24/7"
    },
    {
      "title": "Analiză de calitate",
      "desc": "Urmăriți ASR, ACD, PDD, jitter și ratele de finalizare pe fiecare rută și destinație.",
      "tag": "Raportare în timp real"
    },
    {
      "title": "Rutare personalizată",
      "desc": "Prioritizați rutele în funcție de calitate, preț, locație geografică sau reguli personalizate.",
      "tag": "Control bazat pe reguli"
    }
  ],
  "networkBadge": "FIABILITATE LA SCARĂ GLOBALĂ",
  "networkTitle": "O Rețea Proiectată Pentru A Menține Conversațiile Fluide",
  "networkDesc": "Interconectări redundante, gestionare proactivă a rutelor și ingineri disponibili non-stop protejează fiecare apel de congestie.",
  "networkBullets": [
    "Redundanță multi-operator per destinație",
    "Scor de calitate activ și comutare automată la avarie (failover)",
    "Infrastructură de semnalizare și media distribuită geografic",
    "Detectare proactivă a fraudelor și control strict al traficului"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Disponibilitatea rețelei centrale"
    },
    {
      "val": "190+",
      "label": "Țări și teritorii acoperite"
    },
    {
      "val": "24/7",
      "label": "Operațiuni de rețea globale"
    },
    {
      "val": "< 1 sec",
      "label": "Răspuns automat de redirecționare"
    }
  ],
  "liveStatus": {
    "title": "Toate sistemele sunt operaționale",
    "check": "Ultima verificare a rutei acum 12 sec",
    "live": "LIVE"
  },
  "momentsBadge": "CREAT PENTRU CONVERSAȚII REALE",
  "momentsTitle": "Servicii Vocale Pentru Fiecare Moment Decisiv",
  "momentsSubtitle": "De la asistența zilnică pentru clienți până la alerte urgente de mare prioritate, iNet Global oferă acoperirea și controlul necesare pentru conectivitate continuă.",
  "moments": [
    {
      "title": "Centre de Contact",
      "desc": "Oferiți agenților distribuiți comunicații vocale stabile de intrare și ieșire în toate regiunile.",
      "footer": "Prezență locală • rutare de revărsare (overflow)"
    },
    {
      "title": "Fintech & Platforme",
      "desc": "Alimentați apeluri verificate, recuperări de creanțe și fluxuri de asistență cu acoperire mondială sigură.",
      "footer": "Livrare CLI • Controale antifraudă"
    },
    {
      "title": "Turism & Ospitalitate",
      "desc": "Conectați călătorii și echipele operaționale înainte, în timpul și după fiecare călătorie.",
      "footer": "Numere locale • Acoperire multilingvă"
    },
    {
      "title": "Notificări Critice",
      "desc": "Transmiteți apeluri urgente prin rute prioritare cu monitorizare continuă în timp real.",
      "footer": "Rutare prioritară • Failover instantaneu"
    }
  ],
  "timelineBadge": "LANSAȚI CU TOTALĂ ÎNCREDERE",
  "timelineTitle": "De La Specificații La Trafic Live, Împreună",
  "timelineSubtitle": "Un inginer vocal dedicat este alături de echipa dvs. pe tot parcursul proiectării, testării și migrării traficului—totul pregătit înainte de lansare.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Definire",
      "desc": "Confirmarea piețelor, volumelor de apeluri, codec-urilor și obiectivelor de calitate."
    },
    {
      "step": "2",
      "title": "Conectare",
      "desc": "Schimbul detaliilor SIP și securizarea punctului de interconectare."
    },
    {
      "step": "3",
      "title": "Validare",
      "desc": "Rularea testelor de interoperabilitate și a testelor de afișare a numărului (CLI)."
    },
    {
      "step": "4",
      "title": "Lansare",
      "desc": "Migrarea etapizată a traficului sub monitorizarea tehnică live."
    }
  ],
  "terminal": {
    "title": "Parametrii conexiunii dvs. vocale",
    "readyBadge": "GATA PENTRU TESTARE",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "Listă albă IP + Criptare TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "Rută secundară automată de rezervă",
    "interopNote": "Listă de verificare a interoperabilității inclusă",
    "viewApiDocs": "Vezi documentația API"
  },
  "testimonialBadge": "DOVEDIT ÎN MEDII REALE",
  "testimonialTitle": "Un Partener Telecom Pe Care Echipa Dvs. Se Poate Baza Pe Deplin",
  "testimonialSubtitle": "Performanță transparentă, ingineri agili și infrastructură creată special pentru comunicații critice de business.",
  "testimonialPills": [
    "Transport criptat",
    "Monitorizare calitativă",
    "Controale antifraudă"
  ],
  "quote": "iNet Global ne-a oferit vizibilitatea rutelor și asistența practică necesară pentru a consolida traficul vocal în trei regiuni fără a afecta experiența clienților.",
  "authorName": "Maya Chen",
  "authorRole": "Vicepreședinte Operațiuni de Rețea • Platformă Globală CX",
  "stat1Val": "18%",
  "stat1Label": "cost mai mic pe rută",
  "stat2Val": "+4.2 pct",
  "stat2Label": "creștere a ratei ASR",
  "ctaBadge": "SĂ CONSTRUIM REȚEAUA TA VOCALĂ",
  "ctaTitle": "Ești Pregătit Pentru Apeluri Mai Clare Și O Acoperire Globală Inteligentă?",
  "ctaSubtitle": "Spune-ne unde dorești să te conectezi, volumul de trafic și cerințele de calitate. Echipa noastră va elabora strategia optimă de rutare și numerotare.",
  "contactUs": "Contactează-ne",
  "responseTime": "Răspuns garantat într-o zi lucrătoare"
};

const hu: WholesaleVoiceTranslation = {
  "heroBadge": "GLOBÁLIS HANGINFRASTRUKTÚRA",
  "heroTitle": "Minden Hívás, Teljes Bizalommal Csatlakoztatva.",
  "heroDesc": "Szolgáltatói szintű hangtermináció, -origináció és virtuális számok azon vállalkozások számára, amelyek kristálytiszta beszélgetéseket igényelnek minden piacon—intelligens útválasztással és 24/7 hálózatfelügyelettel támogatva.",
  "talkToExpert": "Beszéljen szakértőnkkel",
  "exploreCapabilities": "Funkciók felfedezése",
  "stats": {
    "countries": "190+",
    "countriesLabel": "elért ország",
    "availability": "99.999%",
    "availabilityLabel": "maghálózati rendelkezésre állás",
    "operations": "24/7",
    "operationsLabel": "hálózati üzemeltetés"
  },
  "heroLiveBadge1": {
    "count": "12 480",
    "label": "élő hívás irányítása folyamatban"
  },
  "heroLiveBadge2": {
    "title": "Legjobb útvonal kiválasztva",
    "latency": "43 ms",
    "quality": "HD minőség"
  },
  "whyBadge": "MIÉRT AZ INET VOICE",
  "whyTitle": "Hanginfrastruktúra, Amely Elnyeri Az Ügyfelek Bizalmát",
  "whySubtitle1": "Olyan csapatok számára kifejlesztve, amelyek nem köthetnek kompromisszumot a hívásminőség, az elérés vagy az operatív kontroll terén.",
  "whySubtitle2": "Egyetlen partner a nemzetközi forgalom, a helyi jelenlét és a hálózati szakértelem mögött minden egyes hívásnál.",
  "whyCards": [
    {
      "title": "Következetesen tiszta hangzás",
      "desc": "Az alacsony késleltetésű útvonalak és a minőségvezérelt forgalomirányítás teljesen természetessé teszik a beszélgetéseket.",
      "footer": "HD hang és széles körű kodektámogatás"
    },
    {
      "title": "Érjen el több piacot",
      "desc": "Végződtessen és indítson hívásokat világszerte kiépített közvetlen szolgáltatói kapcsolatokon keresztül.",
      "footer": "Több mint 190 ország és terület"
    },
    {
      "title": "Irányítson minden útvonalat",
      "desc": "Állítson be díjszabási, minőségi és célállomás-szabályokat valós idejű hálózati teljesítmény-átláthatósággal.",
      "footer": "Rugalmas LCR és minőségalapú útválasztás"
    },
    {
      "title": "Skálázzon akadálytalanul",
      "desc": "Adjon hozzá kapacitást, telefonszámokat és új piacokat egyetlen ellenálló globális platformon keresztül.",
      "footer": "Rugalmas SIP kapacitás"
    }
  ],
  "capabilitiesBadge": "FŐBB KÉPESSÉGEINK",
  "capabilitiesTitle": "Egy Teljes Hangplatform, Az Ön Forgalma Köré Építve",
  "capabilitiesDesc": "Kombinálja kizárólag azt, amire szüksége van, majd bővítsen piac, számtípus vagy útválasztási irányelv szerint anélkül, hogy át kellene alakítania a kommunikációs réteget.",
  "designSolution": "Tervezze meg megoldását",
  "solutionNote": "A megoldástervezés és az együttműködési tesztelés benne foglaltatik",
  "capabilities": [
    {
      "title": "Nagykereskedelmi termináció (Wholesale)",
      "desc": "Irányítsa a nemzetközi hangforgalmat minőségellenőrzött, több szolgáltatót átfogó útvonalakon.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP Trunking",
      "desc": "Kapcsoljon össze alközpontokat, kontaktdiplomáciai központokat rugalmas, igény szerinti kapacitással.",
      "tag": "Bejövő + Kimenő"
    },
    {
      "title": "Virtuális számok (DID)",
      "desc": "Építsen ki megbízható helyi jelenlétet földrajzi, nemzeti és ingyenesen hívható (toll-free) számokkal.",
      "tag": "Globális DID leltár"
    },
    {
      "title": "Csalás elleni védelem (Antifraud)",
      "desc": "Védje haszonkulcsait célállomás-szűréssel, anomália-riasztásokkal és automatikus költési limitekkel.",
      "tag": "24/7 folyamatos felügyelet"
    },
    {
      "title": "Minőségi analitika",
      "desc": "Kövesse nyomon az ASR, ACD, PDD, jitter és hívásbefejezési arányokat útvonal és célállomás szerint.",
      "tag": "Valós idejű jelentéskészítés"
    },
    {
      "title": "Testreszabott útválasztás",
      "desc": "Rangsorolja az útvonalakat minőség, költség, földrajzi elhelyezkedés vagy egyedi ügyfélszabályok alapján.",
      "tag": "Szabályalapú vezérlés"
    }
  ],
  "networkBadge": "MEGBÍZHATÓSÁG GLOBÁLIS LÉPTÉKBEN",
  "networkTitle": "Egy Hálózat, Amelyet A Folyamatos Beszélgetések Fenntartására Terveztek",
  "networkDesc": "Redundáns összeköttetések, proaktív útvonalkezelés és 24 órás mérnöki csapat védi minden hívását a torlódásoktól és kiesésektől.",
  "networkBullets": [
    "Több szolgáltatós redundancia célállomásonként",
    "Aktív minőségi pontozás és automatikus tartalékra váltás",
    "Földrajzilag megosztott jelzés- és médiainfrastruktúra",
    "Proaktív csalásészlelés és szigorú forgalomkontroll"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Maghálózat rendelkezésre állása"
    },
    {
      "val": "190+",
      "label": "Lefedett ország és terület"
    },
    {
      "val": "24/7",
      "label": "Globális hálózatfelügyelet"
    },
    {
      "val": "< 1 mp",
      "label": "Automatikus útvonalváltási válaszidő"
    }
  ],
  "liveStatus": {
    "title": "Minden rendszer hibátlanul üzemel",
    "check": "Utolsó útvonal-ellenőrzés 12 mp-cel ezelőtt",
    "live": "ÉLŐ"
  },
  "momentsBadge": "VALÓDI BESZÉLGETÉSEKRE ÉPÍTVE",
  "momentsTitle": "Hangszolgáltatások Minden Üzletileg Kritikus Pillanatra",
  "momentsSubtitle": "A mindennapi ügyfélszolgálattól a magas prioritású sürgősségi riasztásokig az iNet Global biztosítja a szükséges elérést és felügyeletet.",
  "moments": [
    {
      "title": "Kapcsolati központok",
      "desc": "Biztosítson az elosztott ügyfélszolgálatosoknak megbízható be- és kimenő hangkapcsolatot minden régióban.",
      "footer": "Helyi jelenlét • túlcsordulási útválasztás"
    },
    {
      "title": "Fintech & Digitális platformok",
      "desc": "Működtessen hitelesített hívásokat, követeléskezelést és kiszolgálási folyamatokat biztonságos globális eléréssel.",
      "footer": "CLI hívószámkijelzés • Csalásvédelem"
    },
    {
      "title": "Utazás & Vendéglátás",
      "desc": "Kösse össze az utazókat és az üzemeltetői csapatokat minden utazás előtt, alatt és után.",
      "footer": "Helyi telefonszámok • Többnyelvű elérés"
    },
    {
      "title": "Kritikus értesítések",
      "desc": "Kézbesítsen időérzékeny hívásokat kiemelt útvonalakon és valós idejű felügyelet mellett.",
      "footer": "Prioritásos útválasztás • Azonnali failover"
    }
  ],
  "timelineBadge": "INDÍTSON TELJES BIZALOMMAL",
  "timelineTitle": "A Követelményektől Az Élő Forgalomig, Kéz A Kézben",
  "timelineSubtitle": "Egy dedikált hangmérnök támogatja csapatát a tervezés, a tesztelés és a forgalomátirányítás során—hogy az indulás zökkenőmentes legyen.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Koncepció",
      "desc": "A célpiacok, forgalomnagyság, kodekek és minőségi célok rögzítése."
    },
    {
      "step": "2",
      "title": "Csatlakozás",
      "desc": "A SIP adatok cseréje és az összekapcsolás biztosítása."
    },
    {
      "step": "3",
      "title": "Validáció",
      "desc": "Együttműködési tesztek és hívószámkijelzési (CLI) próbák elvégzése."
    },
    {
      "step": "4",
      "title": "Élesítés",
      "desc": "A forgalom szakaszos átterelése élő mérnöki felügyelet mellett."
    }
  ],
  "terminal": {
    "title": "Az Ön hangkapcsolatának paraméterei",
    "readyBadge": "TESZTELÉSRE KÉSZ",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP engedélyezési lista + TLS titkosítás",
    "media": "SRTP • G.711 • G.729",
    "failover": "Automatikus másodlagos tartalék útvonal",
    "interopNote": "Együttműködési ellenőrző lista mellékelve",
    "viewApiDocs": "API dokumentáció megtekintése"
  },
  "testimonialBadge": "BIZONYÍTOTT ÉLES KÖRNYEZETBEN",
  "testimonialTitle": "Egy Olyan Hangpartner, Akire Üzemeltetési Csapata Mindig Biztosan Támaszkodhat",
  "testimonialSubtitle": "Átlátható teljesítmény, gyorsan reagáló mérnökök és kritikus üzleti kommunikációra kifejlesztett architektúra.",
  "testimonialPills": [
    "Titkosított átvitel",
    "Folyamatos minőségellenőrzés",
    "Csalásmegelőzés"
  ],
  "quote": "Az iNet Global pontos útvonallátást és gyakorlati segítséget nyújtott számunkra, hogy három régió hangforgalmát egyesítsük az ügyfélélmény romlása nélkül.",
  "authorName": "Maya Chen",
  "authorRole": "Hálózati Műveletekért Felelős Alelnök • Globális CX Platform",
  "stat1Val": "18%",
  "stat1Label": "alacsonyabb útvonalköltség",
  "stat2Val": "+4.2 pont",
  "stat2Label": "ASR hívássikerességi javulás",
  "ctaBadge": "ÉPÍTSÜK KI AZ ÖN HANGHÁLÓZATÁT",
  "ctaTitle": "Készen Áll A Tisztább Hívásokra És Az Okosabb Globális Elérésre?",
  "ctaSubtitle": "Mondja el hová szeretne csatlakozni, mekkora a várható forgalom és mik a minőségi követelmények. Csapatunk kidolgozza az optimális útválasztási és számozási stratégiát.",
  "contactUs": "Kapcsolatfelvétel",
  "responseTime": "Válasz egy munkanapon belül"
};

const uk: WholesaleVoiceTranslation = {
  "heroBadge": "ГЛОБАЛЬНА ГОЛОСОВА ІНФРАСТРУКТУРА",
  "heroTitle": "Кожен Дзвінок, З'єднаний З Повною Впевненістю.",
  "heroDesc": "Оригінація, термінація голосу та віртуальні номери операторського рівня для компаній, які вимагають кришталево чистого зв'язку на кожному ринку—на базі інтелектуальної маршрутизації та цілодобового центру керування мережею 24/7.",
  "talkToExpert": "Поговорити з експертом",
  "exploreCapabilities": "Дослідити можливості",
  "stats": {
    "countries": "190+",
    "countriesLabel": "охоплених країн",
    "availability": "99.999%",
    "availabilityLabel": "доступність ядра мережі",
    "operations": "24/7",
    "operationsLabel": "експлуатація мережі"
  },
  "heroLiveBadge1": {
    "count": "12 480",
    "label": "активних дзвінків маршрутизується"
  },
  "heroLiveBadge2": {
    "title": "Обрано найкращий маршрут",
    "latency": "43 мс",
    "quality": "HD якість"
  },
  "whyBadge": "ЧОМУ INET VOICE",
  "whyTitle": "Голосова Інфраструктура, Що Заслуговує На Довіру Клієнтів",
  "whySubtitle1": "Створена для команд, які не йдуть на компроміси щодо якості дзвінків, охоплення чи операційного контролю.",
  "whySubtitle2": "Єдиний партнер для міжнародного трафіку, локальної присутності та глибокої інженерної експертизи за кожним викликом.",
  "whyCards": [
    {
      "title": "Постійно кришталевий звук",
      "desc": "Маршрути з мінімальною затримкою та спрямування трафіку на основі якості зберігають природність кожної бесіди.",
      "footer": "HD голос та підтримка сучасних кодеків"
    },
    {
      "title": "Охоплюйте більше ринків",
      "desc": "Здійснюйте термінацію та оригінацію дзвінків через прямі та налагоджені партнерства з операторами по всьому світу.",
      "footer": "Понад 190 країн і територій"
    },
    {
      "title": "Контролюйте кожен маршрут",
      "desc": "Встановлюйте правила вартості, якості та напрямків з повною видимістю показників у реальному часі.",
      "footer": "Гнучкий LCR та маршрутизація за якістю"
    },
    {
      "title": "Масштабуйтеся без перешкод",
      "desc": "Додавайте пропускну здатність, номери та нові напрямки через єдину стійку глобальну платформу.",
      "footer": "Еластична ємність SIP"
    }
  ],
  "capabilitiesBadge": "НАШІ КЛЮЧОВІ МОЖЛИВОСТІ",
  "capabilitiesTitle": "Єдиний Голосовий Стек, Побудований Навколо Вашого Трафіку",
  "capabilitiesDesc": "Комбінуйте лише те, що вам потрібно, та розширюйте за ринками, типами номерів або політиками маршрутизації без перебудови телекомунікаційної архітектури.",
  "designSolution": "Спроєктувати ваше рішення",
  "solutionNote": "Архітектурне проєктування та тестування сумісності включено",
  "capabilities": [
    {
      "title": "Оптова термінація (Wholesale)",
      "desc": "Маршрутизуйте міжнародний голосовий трафік через мультиоператорські канали з контролем якості.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "SIP-транкінг",
      "desc": "Підключайте IP-АТС, контакт-центри та комунікаційні платформи з еластичною пропускною здатністю.",
      "tag": "Вхідні + Вихідні"
    },
    {
      "title": "Віртуальні номери (DID)",
      "desc": "Створюйте надійну локальну присутність за допомогою географічних, національних та безкоштовних номерів (toll-free).",
      "tag": "Глобальний пул DID"
    },
    {
      "title": "Захист від шахрайства",
      "desc": "Захищайте маржинальність завдяки контролю напрямків, сповіщенням про аномалії та лімітам витрат.",
      "tag": "Цілодобовий моніторинг 24/7"
    },
    {
      "title": "Аналітика якості",
      "desc": "Відстежуйте показники ASR, ACD, PDD, джитер та успішність дзвінків за маршрутами й напрямками.",
      "tag": "Звітність у реальному часі"
    },
    {
      "title": "Кастомна маршрутизація",
      "desc": "Встановлюйте пріоритет маршрутів за якістю, вартістю, географією або індивідуальними правилами.",
      "tag": "Керування на основі правил"
    }
  ],
  "networkBadge": "НАДІЙНІСТЬ У ГЛОБАЛЬНОМУ МАСШТАБІ",
  "networkTitle": "Мережа, Спроєктована Для Безперебійного Спілкування",
  "networkDesc": "Резервовані інтерконекти, проактивне керування маршрутами та цілодобові інженери захищають кожен дзвінок від перевантажень.",
  "networkBullets": [
    "Мультиоператорське резервування за кожним напрямком",
    "Активний скоринг якості та автоматичне перемикання при аваріях",
    "Георозподілена інфраструктура сигналізації та медіа",
    "Проактивне виявлення фроду та суворий контроль трафіку"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "Доступність ядра мережі"
    },
    {
      "val": "190+",
      "label": "Охоплених країн та регіонів"
    },
    {
      "val": "24/7",
      "label": "Глобальне керування мережею"
    },
    {
      "val": "< 1 сек",
      "label": "Автоматична реакція маршруту"
    }
  ],
  "liveStatus": {
    "title": "Всі системи працюють штатно",
    "check": "Остання перевірка маршруту 12 сек тому",
    "live": "В ЕФІРІ"
  },
  "momentsBadge": "СТВОРЕНО ДЛЯ СПРАВЖНІХ РОЗМОВ",
  "momentsTitle": "Голосові Послуги Для Кожного Критичного Моменту В Бізнесі",
  "momentsSubtitle": "Від щоденної підтримки клієнтів до термінових сповіщень найвищого пріоритету — iNet Global забезпечує надійне охоплення та контроль.",
  "moments": [
    {
      "title": "Контакт-центри",
      "desc": "Надайте розподіленим операторам стабільний вхідний та вихідний голосовий зв'язок у всіх регіонах.",
      "footer": "Локальна присутність • overflow routing"
    },
    {
      "title": "Фінтех та платформи",
      "desc": "Забезпечуйте верифіковані дзвінки, стягнення та робочі процеси обслуговування з безпечним охопленням.",
      "footer": "Доставка CLI • Контроль шахрайства"
    },
    {
      "title": "Подорожі та гостинність",
      "desc": "З'єднуйте гостей та операційні команди до, під час і після кожної подорожі.",
      "footer": "Місцеві номери • Багатомовне охоплення"
    },
    {
      "title": "Критичні сповіщення",
      "desc": "Доставляйте термінові виклики за пріоритетними маршрутами та з постійним моніторингом.",
      "footer": "Пріоритетний роутинг • Миттєвий failover"
    }
  ],
  "timelineBadge": "ЗАПУСКАЙТЕСЯ З ВПЕВНЕНІСТЮ",
  "timelineTitle": "Разом: Від Формування Вимог До Реального Трафіку",
  "timelineSubtitle": "Виділений інженер супроводжує вашу команду на етапах проєктування, тестування та міграції — для бездоганного запуску.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "Аналіз",
      "desc": "Узгодження ринків, обсягів трафіку, кодеків та цілей якості."
    },
    {
      "step": "2",
      "title": "Стик",
      "desc": "Обмін параметрами SIP та налаштування безпечного інтерконекту."
    },
    {
      "step": "3",
      "title": "Валідація",
      "desc": "Виконання тестів сумісності та коректності показу номера (CLI)."
    },
    {
      "step": "4",
      "title": "Запуск",
      "desc": "Поетапний перевід трафіку під живим інженерним контролем."
    }
  ],
  "terminal": {
    "title": "Параметри вашого голосового з'єднання",
    "readyBadge": "ГОТОВО ДО ТЕСТУВАННЯ",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "IP-білі списки + TLS шифрування",
    "media": "SRTP • G.711 • G.729",
    "failover": "Автоматичний вторинний резервний маршрут",
    "interopNote": "Чек-лист сумісності включено",
    "viewApiDocs": "Документація API"
  },
  "testimonialBadge": "ДОВЕДЕНО НА ПРАКТИЦІ",
  "testimonialTitle": "Голосовий Партнер, На Якого Ваша Команда Може Повністю Покластися",
  "testimonialSubtitle": "Прозора продуктивність, швидкі інженери та інфраструктура, розроблена для критично важливих бізнес-комунікацій.",
  "testimonialPills": [
    "Шифрований транспорт",
    "Моніторинг якості",
    "Захист від шахрайства"
  ],
  "quote": "iNet Global забезпечив нам повну видимість маршрутів і пряму технічну допомогу для консолідації голосового трафіку в трьох регіонах без втрати якості для клієнтів.",
  "authorName": "Майя Чень",
  "authorRole": "Віцепрезидент з мережевих операцій • Глобальна платформа CX",
  "stat1Val": "18%",
  "stat1Label": "зниження вартості маршрутів",
  "stat2Val": "+4.2 п.",
  "stat2Label": "зростання успішності викликів (ASR)",
  "ctaBadge": "ПОБУДУЙМО ВАШУ ГОЛОСОВУ МЕРЕЖУ",
  "ctaTitle": "Готові До Кришталево Чистих Дзвінків Та Розумного Світового Охоплення?",
  "ctaSubtitle": "Розкажіть нам про необхідні напрямки, обсяг трафіку та стандарти якості. Наша команда розробить оптимальну стратегію маршрутизації та нумерації.",
  "contactUs": "Зв'язатися з нами",
  "responseTime": "Відповідь протягом одного робочого дня"
};

const he: WholesaleVoiceTranslation = {
  "heroBadge": "תשתית קול גלובלית",
  "heroTitle": "כל שיחה, מחוברת בביטחון מלא.",
  "heroDesc": "סיום שיחות (טרמינציה), יזימת שיחות ומספרים וירטואליים ברמת ספק (carrier-grade) לעסקים הזקוקים לשיחות צלולות בכל שוק—בגיבוי ניתוב חכם ותפעול רשת מסביב לשעון 24/7.",
  "talkToExpert": "שוחח עם מומחה",
  "exploreCapabilities": "גלה את היכולות",
  "stats": {
    "countries": "190+",
    "countriesLabel": "מדינות בכיסוי",
    "availability": "99.999%",
    "availabilityLabel": "זמינות ליבת הרשת",
    "operations": "24/7",
    "operationsLabel": "תפעול רשת שוטף"
  },
  "heroLiveBadge1": {
    "count": "12,480",
    "label": "שיחות חיות מנותבות כעת"
  },
  "heroLiveBadge2": {
    "title": "נבחר הנתיב הטוב ביותר",
    "latency": "43 ms",
    "quality": "איכות HD"
  },
  "whyBadge": "למה לבחור ב-INET VOICE",
  "whyTitle": "תשתית קולית הבונה את אמון הלקוחות",
  "whySubtitle1": "נבנתה עבור צוותים שאינם מוכנים להתפשר על איכות שיחה, טווח הגעה או שליטה תפעולית.",
  "whySubtitle2": "שותף אחוד לתעבורה בינלאומית, נוכחות מקומית ומומחיות רשת מתקדמת מאחורי כל שיחה.",
  "whyCards": [
    {
      "title": "צליל צלול וברור בעקביות",
      "desc": "נתיבים בעלי שיהוי נמוך וניתוב תעבורה מבוסס איכות שומרים על שיחות טבעיות וזורמות.",
      "footer": "קול HD ותמיכה במגוון רחב של קודקים"
    },
    {
      "title": "הגעה לשווקים רבים יותר",
      "desc": "סיום ויזימת שיחות באמצעות קשרים ישירים ומבוססים עם ספקי תקשורת מובילים ברחבי העולם.",
      "footer": "מעל 190 מדינות וטריטוריות"
    },
    {
      "title": "שליטה מלאה בכל נתיב",
      "desc": "הגדרת כללי תמחור, איכות ויעדים עם שקיפות ביצועים מלאה בזמן אמת.",
      "footer": "LCR גמיש וניתוב מבוסס איכות"
    },
    {
      "title": "צמיחה ללא חסמים",
      "desc": "הוספת קיבולת, מספרים ושווקים חדשים באמצעות פלטפורמה גלובלית איתנה ועמידה.",
      "footer": "קיבולת SIP אלסטית"
    }
  ],
  "capabilitiesBadge": "יכולות הליבה שלנו",
  "capabilitiesTitle": "מערך קולי מקיף, הבנוי סביב התעבורה שלך",
  "capabilitiesDesc": "שלב רק את הרכיבים הדרושים לך, והתרחב לפי שווקים, סוגי מספרים ומדיניות ניתוב מבלי לבנות מחדש את שכבת התקשורת.",
  "designSolution": "תכנן את הפתרון שלך",
  "solutionNote": "כולל תכנון ארכיטקטורה ובדיקות תאימות הדדית",
  "capabilities": [
    {
      "title": "סיום שיחות סיטונאי (Wholesale)",
      "desc": "ניתוב תעבורת קול בינלאומית דרך מסלולים מרובי ספקים המנוהלים באיכות קפדנית.",
      "tag": "CLI • TDM • SIP"
    },
    {
      "title": "קישוריות SIP Trunking",
      "desc": "חיבור מרכזיות PBX, מוקדי שירות ופלטפורמות תקשורת בקיבולת אלסטית ומותאמת.",
      "tag": "נכנס + יוצא"
    },
    {
      "title": "מספרים וירטואליים (DID)",
      "desc": "בניית נוכחות מקומית אמינה עם מספרים גיאוגרפיים, לאומיים ומספרי חינם (toll-free).",
      "tag": "מלאי DID גלובלי"
    },
    {
      "title": "הגנה מפני הונאות (Fraud)",
      "desc": "הגנה על שולי הרווח באמצעות בקרת יעדים, התראות אנומליה ומגבלות הוצאה.",
      "tag": "ניטור רציף 24/7"
    },
    {
      "title": "ניתוח איכות מתקדם",
      "desc": "מעקב אחר ASR, ACD, PDD, jitter ושיעורי השלמת שיחות לפי נתיב ויעד.",
      "tag": "דיווחים בזמן אמת"
    },
    {
      "title": "ניתוב מותאם אישית",
      "desc": "תעדוף נתיבים לפי איכות, מחיר, מיקום גיאוגרפי או מדיניות ייעודית של הלקוח.",
      "tag": "שליטה מבוססת כללים"
    }
  ],
  "networkBadge": "אמינות בקנה מידה גלובלי",
  "networkTitle": "רשת שתוכננה לשמור על שיחות רציפות ללא הפרעה",
  "networkDesc": "חיבורים שרידים (redundant), ניהול נתיבים יזום ומהנדסים בכוננות מסביב לשעון מגנים על כל שיחה מעומסים ותקלות.",
  "networkBullets": [
    "שרידות מרובת ספקים לכל יעד",
    "ציון איכות פעיל ומעבר גיבוי אוטומטי (failover)",
    "תשתית איתות ומדיה מבוזרת גיאוגרפית",
    "זיהוי הונאות יזום ובקרות תעבורה הדוקות"
  ],
  "networkStats": [
    {
      "val": "99.999%",
      "label": "זמינות ליבת הרשת"
    },
    {
      "val": "190+",
      "label": "מדינות וטריטוריות נתמכות"
    },
    {
      "val": "24/7",
      "label": "תפעול רשת גלובלי"
    },
    {
      "val": "< 1 שנ'",
      "label": "תגובת ניתוב אוטומטית"
    }
  ],
  "liveStatus": {
    "title": "כל המערכות פועלות כסדרן",
    "check": "בדיקת נתיב אחרונה לפני 12 שנ'",
    "live": "חי"
  },
  "momentsBadge": "נבנה עבור שיחות אמיתיות",
  "momentsTitle": "שירותי קול לכל רגע עסקי מכריע",
  "momentsSubtitle": "משירות לקוחות שוטף ועד התראות חירום בעדיפות עליונה, iNet Global מעניקה את הטווח והשליטה לחבר בין אנשים.",
  "moments": [
    {
      "title": "מוקדי שירות (Contact Centers)",
      "desc": "הענקת קול נכנס ויוצא יציב ואחיד לנציגים מבוזרים בכל האזורים.",
      "footer": "נוכחות מקומית • ניתוב גלישת שיחות"
    },
    {
      "title": "פינטק ופלטפורמות",
      "desc": "הפעלת שיחות אימות, גבייה ותהליכי שירות עם פריסה גלובלית מאובטחת.",
      "footer": "מסירת זיהוי שיחה (CLI) • בקרות הונאה"
    },
    {
      "title": "נסיעות ואירוח",
      "desc": "חיבור אורחים וצוותי תפעול לפני, במהלך ואחרי כל נסיעה בצורה חלקה.",
      "footer": "מספרים מקומיים • פריסה רב-לשונית"
    },
    {
      "title": "הודעות קריטיות",
      "desc": "העברת שיחות דחופות הרגישות לזמן בנתיבים בעלי עדיפות עם ניטור בזמן אמת.",
      "footer": "ניתוב בעדיפות • מעבר גיבוי מיידי"
    }
  ],
  "timelineBadge": "השקה בביטחון מלא",
  "timelineTitle": "יחד: מהגדרת הדרישות ועד לתעבורה חיה",
  "timelineSubtitle": "מהנדס קול ייעודי מלווה את הצוות שלך לאורך שלבי התכנון, הבדיקות והעברת התעבורה—מוכנים במלואם לפני העלייה לאוויר.",
  "timelineSteps": [
    {
      "step": "1",
      "title": "אפיון",
      "desc": "אישור שווקים, היקפי שיחות, קודקים ויעדי איכות."
    },
    {
      "step": "2",
      "title": "חיבור",
      "desc": "החלפת פרטי SIP ואבטחת החיבור ההדדי."
    },
    {
      "step": "3",
      "title": "אימות",
      "desc": "ביצוע בדיקות תאימות הדדית ובדיקות הצגת זיהוי מתקשר (CLI)."
    },
    {
      "step": "4",
      "title": "השקה",
      "desc": "העברה הדרגתית של התעבורה תחת ניטור הנדסי חי."
    }
  ],
  "terminal": {
    "title": "פרטי חיבור הקול שלך",
    "readyBadge": "מוכן לבדיקה",
    "sipEndpoint": "sip.voice.inetglobal.com",
    "auth": "רשימת IP מורשים + הצפנת TLS",
    "media": "SRTP • G.711 • G.729",
    "failover": "נתיב גיבוי משני אוטומטי",
    "interopNote": "כולל רשימת תיוג לבדיקת תאימות",
    "viewApiDocs": "צפה בתיעוד ה-API"
  },
  "testimonialBadge": "מוכח בסביבות ייצור",
  "testimonialTitle": "שותף תקשורת קולית שצוות התפעול שלך יכול לסמוך עליו בעיניים עצומות",
  "testimonialSubtitle": "ביצועים שקופים, מהנדסים זמינים ותשתית המותאמת לתקשורת עסקית קריטית.",
  "testimonialPills": [
    "תעבורה מוצפנת",
    "ניטור איכות רציף",
    "בקרת הונאות"
  ],
  "quote": "iNet Global העניקה לנו שקיפות נתיבים מלאה ותמיכה מעשית שאפשרו לאחד תעבורת קול בשלושה אזורים ללא כל פגיעה בחוויית הלקוח.",
  "authorName": "Maya Chen",
  "authorRole": "סמנכ\"ל תפעול רשת • פלטפורמת CX עולמית",
  "stat1Val": "18%",
  "stat1Label": "עלות נתיב נמוכה יותר",
  "stat2Val": "+4.2 נק'",
  "stat2Label": "שיפור בשיעור ההשלמה (ASR)",
  "ctaBadge": "בוא נבנה את רשת הקול שלך",
  "ctaTitle": "מוכן לשיחות ברורות יותר ולנוכחות עולמית חכמה?",
  "ctaSubtitle": "ספר לנו היכן ברצונך להתחבר, מהו נפח התעבורה ומהם תקני האיכות הדרושים. המומחים שלנו יתכננו את אסטרטגיית הניתוב והמספור המדויקת.",
  "contactUs": "צור קשר",
  "responseTime": "מענה בתוך יום עסקים אחד"
};

const translations: Record<string, WholesaleVoiceTranslation> = {
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

export const getWholesaleVoiceTranslations = (
  languageId: string,
  _regionId?: string,
  _regionName?: string
): WholesaleVoiceTranslation => {
  return translations[languageId] || translations["en"];
};

export default getWholesaleVoiceTranslations;

export interface VirtualDidTranslation {
  breadcrumb: string;
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  getStarted: string;
  requestDemo: string;
  heroFootnote: string;
  dashboardPreview: {
    title: string;
    liveBadge: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tab4: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    tableTitle: string;
    smsNotificationTitle: string;
    smsNotificationBody: string;
    phoneIncomingText: string;
    phoneCaller: string;
    phoneDid: string;
  };
  highlightsHeading?: string;
  highlights: Array<{
    title: string;
  }>;
  managementBadge: string;
  managementTitle: string;
  managementSubtitle: string;
  managementChecklistTitle: string;
  managementChecklist: string[];
  inventoryCard: {
    title: string;
    subtitle: string;
    provisionBtn: string;
    searchPlaceholder: string;
    countryFilter: string;
    statusFilter: string;
    colDid: string;
    colCountry: string;
    colCustomer: string;
    colStatus: string;
    showingText: string;
  };
  callMgmtBadge: string;
  callMgmtTitle: string;
  callMgmtSubtitle: string;
  forwardingTitle: string;
  forwardingSubtitle: string;
  forwardingItems: string[];
  advancedRoutingTitle: string;
  advancedRoutingItems: string[];
  journeyCard: {
    title: string;
    liveBadge: string;
    step1Title: string;
    step1Val: string;
    step2Title: string;
    step2Val: string;
    step3Title: string;
    step3Val: string;
    footerText: string;
  };
  mobileBadge: string;
  mobileTitle: string;
  mobileSubtitle: string;
  mobileFooter: string;
  mobileFeaturesTitle: string;
  mobileFeatures: Array<{
    title: string;
    desc: string;
  }>;
  smsBadge: string;
  smsTitle: string;
  smsSubtitle: string;
  smsPerfectTitle: string;
  smsPerfectItems: string[];
  sampleSms: {
    badge: string;
    body: string;
    meta: string;
  };
  smsDashboard: {
    title: string;
    receivingBadge: string;
    todayLabel: string;
    todayVal: string;
    colSender: string;
    colDid: string;
    colMessage: string;
    colTime: string;
    monitorTitle: string;
    monitorItems: string[];
  };
  monitoringBadge: string;
  monitoringTitle: string;
  monitoringSubtitle: string;
  monitoringStats: {
    title: string;
    liveBadge: string;
    stat1Label: string;
    stat1Val: string;
    stat1Sub: string;
    stat2Label: string;
    stat2Val: string;
    stat2Sub: string;
    stat3Label: string;
    stat3Val: string;
    stat3Sub: string;
    stat4Label: string;
    stat4Val: string;
    stat4Sub: string;
    chartTitle: string;
    chartTimeframe: string;
    legend1: string;
    legend2: string;
  };
  operationalViewTitle: string;
  operationalViewItems: string[];
  resellerBadge: string;
  resellerTitle: string;
  resellerSubtitle: string;
  supportedAudiences: Array<{
    title: string;
  }>;
  whiteLabelCard: {
    title: string;
    desc: string;
    brandLabel: string;
    portalLabel: string;
    tab1: string;
    tab2: string;
    tab3: string;
    tagline: string;
  };
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactUs: string;
  ctaTrust1?: string;
  ctaTrust2?: string;
  ctaTrust3?: string;
}

const en: VirtualDidTranslation = {
  "breadcrumb": "Products | DID Portal + Mobile App",
  "heroBadge": "DID Portal + Mobile App",
  "heroTitle": "Complete DID Management & Virtual Number Platform",
  "heroDesc": "Manage virtual phone numbers, incoming calls, and SMS from one powerful DID Portal. Give your customers dedicated numbers with a mobile app for receiving calls and SMS from anywhere.",
  "getStarted": "Get Started",
  "requestDemo": "Request Demo",
  "heroFootnote": "Global numbers. Local presence. One platform.",
  "dashboardPreview": {
    "title": "DID Portal",
    "liveBadge": "Live",
    "tab1": "Overview",
    "tab2": "My numbers",
    "tab3": "Call routing",
    "tab4": "SMS inbox",
    "stat1Label": "Active DIDs",
    "stat1Val": "248",
    "stat2Label": "Incoming calls",
    "stat2Val": "1,842",
    "stat3Label": "SMS received",
    "stat3Val": "3,126",
    "tableTitle": "Your global numbers",
    "smsNotificationTitle": "New SMS received",
    "smsNotificationBody": "Your appointment is confirmed for 10:30 AM.",
    "phoneIncomingText": "Incoming business call",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "via +1 212 555 0198"
  },
  "highlightsHeading": "Your Global Number. Your Complete Control.",
  "highlights": [
    {
      "title": "Global DID Numbers"
    },
    {
      "title": "Incoming Calls"
    },
    {
      "title": "SMS Receiving"
    },
    {
      "title": "Mobile App"
    },
    {
      "title": "Call Forwarding"
    },
    {
      "title": "DID Management"
    },
    {
      "title": "Real-Time Monitoring"
    }
  ],
  "managementBadge": "DID Management",
  "managementTitle": "Manage DIDs From One Centralized Portal",
  "managementSubtitle": "Search, provision, activate, suspend, configure, and monitor your virtual numbers from a single dashboard.",
  "managementChecklistTitle": "DID Management",
  "managementChecklist": [
    "Global DID Inventory",
    "Country & city selection",
    "Number search",
    "Instant provisioning",
    "DID activation/deactivation",
    "Number assignment",
    "Customer-wise DID management",
    "Expiry management",
    "DID pricing management",
    "Number usage monitoring"
  ],
  "inventoryCard": {
    "title": "Number inventory",
    "subtitle": "248 numbers across your customer accounts",
    "provisionBtn": "+ Provision DID",
    "searchPlaceholder": "Search numbers...",
    "countryFilter": "All countries",
    "statusFilter": "All statuses",
    "colDid": "DID NUMBER",
    "colCountry": "COUNTRY / CITY",
    "colCustomer": "CUSTOMER",
    "colStatus": "STATUS",
    "showingText": "Showing 4 of 248 numbers"
  },
  "callMgmtBadge": "Receive Calls Anywhere",
  "callMgmtTitle": "Powerful Incoming Call Management",
  "callMgmtSubtitle": "Route incoming calls exactly where you want them.",
  "forwardingTitle": "Call Forwarding",
  "forwardingSubtitle": "Forward calls to:",
  "forwardingItems": [
    "Mobile numbers",
    "SIP accounts",
    "Browser softphones",
    "Call center agents",
    "IVR systems",
    "Multiple destinations"
  ],
  "advancedRoutingTitle": "Advanced Routing",
  "advancedRoutingItems": [
    "Time-based routing",
    "Country-based routing",
    "Caller-based routing",
    "Failover routing",
    "Sequential ringing",
    "Simultaneous ringing",
    "Business-hours routing"
  ],
  "journeyCard": {
    "title": "A smarter call journey",
    "liveBadge": "Live",
    "step1Title": "Incoming call",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Business hours",
    "step2Val": "Mon-Fri · 09:00–18:00",
    "step3Title": "Support team",
    "step3Val": "Simultaneous ringing · 3 agents",
    "footerText": "No answer? Forward to your mobile."
  },
  "mobileBadge": "Mobile App for Calls & SMS",
  "mobileTitle": "Your DID in Your Pocket",
  "mobileSubtitle": "Give users a dedicated mobile application to receive business calls and SMS directly on their smartphones.",
  "mobileFooter": "Your business. Always with you.",
  "mobileFeaturesTitle": "App Features",
  "mobileFeatures": [
    {
      "title": "Incoming Calls",
      "desc": "Receive calls to your DID directly through the mobile app."
    },
    {
      "title": "SMS Inbox",
      "desc": "Receive incoming SMS messages in a secure, organized inbox."
    },
    {
      "title": "Call History",
      "desc": "View incoming, missed, and answered calls."
    },
    {
      "title": "SMS History",
      "desc": "Access previous messages and conversations."
    },
    {
      "title": "Push Notifications",
      "desc": "Get instant notifications when a call or SMS arrives."
    },
    {
      "title": "Multiple DIDs",
      "desc": "Manage multiple virtual numbers from a single account."
    },
    {
      "title": "Contact Management",
      "desc": "Save and organize frequently contacted numbers."
    }
  ],
  "smsBadge": "SMS Receiving Made Simple",
  "smsTitle": "Never Miss an Important Message",
  "smsSubtitle": "Turn your DID into a powerful SMS receiving endpoint.",
  "smsPerfectTitle": "Perfect for:",
  "smsPerfectItems": [
    "Customer support",
    "Business communications",
    "Lead generation",
    "Appointment notifications",
    "Service alerts",
    "Account notifications",
    "Two-way communication"
  ],
  "sampleSms": {
    "badge": "Business SMS · Received",
    "body": "Hi Jordan, your appointment is confirmed for tomorrow at 10:30 AM. Reply if you need to reschedule.",
    "meta": "Today, 10:24 AM · Acme Support"
  },
  "smsDashboard": {
    "title": "SMS Dashboard",
    "receivingBadge": "Receiving",
    "todayLabel": "Incoming SMS today",
    "todayVal": "3,126 messages",
    "colSender": "SENDER",
    "colDid": "DESTINATION DID",
    "colMessage": "MESSAGE",
    "colTime": "TIME",
    "monitorTitle": "Monitor:",
    "monitorItems": [
      "Incoming SMS",
      "Sender number",
      "Destination DID",
      "Message content",
      "Date & time",
      "Customer/account",
      "SMS volume"
    ]
  },
  "monitoringBadge": "Advanced DID Monitoring",
  "monitoringTitle": "Know the Status of Every Number",
  "monitoringSubtitle": "Monitor your entire DID inventory in real time.",
  "monitoringStats": {
    "title": "DID overview",
    "liveBadge": "Real-time",
    "stat1Label": "Active DIDs",
    "stat1Val": "248",
    "stat1Sub": "+12 this month",
    "stat2Label": "Available",
    "stat2Val": "64",
    "stat2Sub": "Ready to assign",
    "stat3Label": "Assigned",
    "stat3Val": "184",
    "stat3Sub": "32 customers",
    "stat4Label": "Missed calls",
    "stat4Val": "18",
    "stat4Sub": "-8% this week",
    "chartTitle": "Voice & SMS activity",
    "chartTimeframe": "Last 7 days",
    "legend1": "SMS volume",
    "legend2": "Incoming call volume"
  },
  "operationalViewTitle": "A complete operational view",
  "operationalViewItems": [
    "Active DIDs",
    "Available DIDs",
    "Assigned DIDs",
    "Incoming call volume",
    "SMS volume",
    "Call duration",
    "Missed calls",
    "Number usage",
    "Customer allocation",
    "Revenue & cost tracking"
  ],
  "resellerBadge": "Built for DID Resellers & Enterprises",
  "resellerTitle": "Create Your Own Virtual Number Business",
  "resellerSubtitle": "Our platform can support:",
  "supportedAudiences": [
    {
      "title": "DID resellers"
    },
    {
      "title": "VoIP providers"
    },
    {
      "title": "Call centers"
    },
    {
      "title": "Enterprises"
    },
    {
      "title": "UCaaS providers"
    },
    {
      "title": "Communication platforms"
    }
  ],
  "whiteLabelCard": {
    "title": "White-Label Ready",
    "desc": "Give your customers their own branded portal and mobile experience while you manage the underlying voice and messaging infrastructure.",
    "brandLabel": "Your brand",
    "portalLabel": "Customer portal",
    "tab1": "Numbers",
    "tab2": "Calls",
    "tab3": "SMS",
    "tagline": "Your customer experience. Our infrastructure."
  },
  "ctaBadge": "LET'S BUILD YOUR MESSAGING NETWORK",
  "ctaTitle": "Grow Your Business with Business SMS Solutions",
  "ctaSubtitle": "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
  "contactUs": "Contact Us",
  "ctaTrust1": "Enterprise Carrier SLA",
  "ctaTrust2": "Instant DID Provisioning",
  "ctaTrust3": "Coverage Across 100+ Countries"
};

const es: VirtualDidTranslation = {
  "breadcrumb": "Productos | Portal DID + App Móvil",
  "heroBadge": "Portal DID + App Móvil",
  "heroTitle": "Plataforma Integral de Gestión de DID y Números Virtuales",
  "heroDesc": "Gestione números de teléfono virtuales, llamadas entrantes y SMS desde un potente Portal DID. Ofrezca a sus clientes números dedicados con una aplicación móvil para recibir llamadas y SMS desde cualquier lugar.",
  "getStarted": "Empezar",
  "requestDemo": "Solicitar Demo",
  "heroFootnote": "Números globales. Presencia local. Una sola plataforma.",
  "dashboardPreview": {
    "title": "Portal DID",
    "liveBadge": "En vivo",
    "tab1": "Resumen",
    "tab2": "Mis números",
    "tab3": "Enrutamiento",
    "tab4": "Bandeja SMS",
    "stat1Label": "DIDs Activos",
    "stat1Val": "248",
    "stat2Label": "Llamadas entrantes",
    "stat2Val": "1,842",
    "stat3Label": "SMS recibidos",
    "stat3Val": "3,126",
    "tableTitle": "Sus números globales",
    "smsNotificationTitle": "Nuevo SMS recibido",
    "smsNotificationBody": "Su cita está confirmada para las 10:30 AM.",
    "phoneIncomingText": "Llamada comercial entrante",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "vía +1 212 555 0198"
  },
  "highlightsHeading": "Su Número Global. Su Control Absoluto.",
  "highlights": [
    {
      "title": "Números DID Globales"
    },
    {
      "title": "Llamadas Entrantes"
    },
    {
      "title": "Recepción de SMS"
    },
    {
      "title": "App Móvil"
    },
    {
      "title": "Desvío de Llamadas"
    },
    {
      "title": "Gestión de DIDs"
    },
    {
      "title": "Monitoreo en Tiempo Real"
    }
  ],
  "managementBadge": "Gestión de DID",
  "managementTitle": "Gestione sus DIDs desde un Portal Centralizado",
  "managementSubtitle": "Busque, aprovisione, active, suspenda, configure y supervise sus números virtuales desde un único panel intuitivo.",
  "managementChecklistTitle": "Gestión de DID",
  "managementChecklist": [
    "Inventario global de DIDs",
    "Selección de país y ciudad",
    "Búsqueda de números",
    "Aprovisionamiento instantáneo",
    "Activación/desactivación de DID",
    "Asignación de números",
    "Gestión de DIDs por cliente",
    "Control de vencimientos",
    "Gestión de tarifas DID",
    "Monitoreo de uso de números"
  ],
  "inventoryCard": {
    "title": "Inventario de números",
    "subtitle": "248 números en las cuentas de sus clientes",
    "provisionBtn": "+ Aprovisionar DID",
    "searchPlaceholder": "Buscar números...",
    "countryFilter": "Todos los países",
    "statusFilter": "Todos los estados",
    "colDid": "NÚMERO DID",
    "colCountry": "PAÍS / CIUDAD",
    "colCustomer": "CLIENTE",
    "colStatus": "ESTADO",
    "showingText": "Mostrando 4 de 248 números"
  },
  "callMgmtBadge": "Reciba Llamadas en Cualquier Lugar",
  "callMgmtTitle": "Potente Gestión de Llamadas Entrantes",
  "callMgmtSubtitle": "Enrute las llamadas entrantes exactamente a donde las necesita.",
  "forwardingTitle": "Desvío de Llamadas",
  "forwardingSubtitle": "Desviar llamadas a:",
  "forwardingItems": [
    "Números móviles",
    "Cuentas SIP",
    "Softphones en navegador",
    "Agentes de call center",
    "Sistemas IVR",
    "Múltiples destinos"
  ],
  "advancedRoutingTitle": "Enrutamiento Avanzado",
  "advancedRoutingItems": [
    "Enrutamiento por horario",
    "Enrutamiento por país",
    "Enrutamiento por llamante",
    "Enrutamiento de respaldo (Failover)",
    "Timbrado secuencial",
    "Timbrado simultáneo",
    "Enrutamiento por horas comerciales"
  ],
  "journeyCard": {
    "title": "Flujo de llamada inteligente",
    "liveBadge": "En vivo",
    "step1Title": "Llamada entrante",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Horario comercial",
    "step2Val": "Lun-Vie · 09:00–18:00",
    "step3Title": "Equipo de soporte",
    "step3Val": "Timbrado simultáneo · 3 agentes",
    "footerText": "¿Sin respuesta? Desvío automático al móvil."
  },
  "mobileBadge": "App Móvil para Llamadas y SMS",
  "mobileTitle": "Su DID en su Bolsillo",
  "mobileSubtitle": "Brinde a sus usuarios una app móvil dedicada para recibir llamadas de negocios y SMS directamente en sus teléfonos inteligentes.",
  "mobileFooter": "Su empresa. Siempre con usted.",
  "mobileFeaturesTitle": "Características de la App",
  "mobileFeatures": [
    {
      "title": "Llamadas Entrantes",
      "desc": "Reciba llamadas a su DID directamente a través de la aplicación móvil."
    },
    {
      "title": "Bandeja de SMS",
      "desc": "Reciba mensajes SMS entrantes en una bandeja de entrada segura y organizada."
    },
    {
      "title": "Historial de Llamadas",
      "desc": "Consulte llamadas entrantes, perdidas y atendidas."
    },
    {
      "title": "Historial de SMS",
      "desc": "Acceda a mensajes y conversaciones anteriores."
    },
    {
      "title": "Notificaciones Push",
      "desc": "Reciba notificaciones instantáneas al entrar una llamada o SMS."
    },
    {
      "title": "Múltiples DIDs",
      "desc": "Administre varios números virtuales desde una sola cuenta."
    },
    {
      "title": "Gestión de Contactos",
      "desc": "Guarde y organice números contactados frecuentemente."
    }
  ],
  "smsBadge": "Recepción de SMS Simplificada",
  "smsTitle": "Nunca se Pierda un Mensaje Importante",
  "smsSubtitle": "Convierta su DID en un potente punto de recepción de SMS.",
  "smsPerfectTitle": "Perfecto para:",
  "smsPerfectItems": [
    "Atención al cliente",
    "Comunicaciones empresariales",
    "Generación de prospectos",
    "Recordatorios de citas",
    "Alertas de servicio",
    "Notificaciones de cuenta",
    "Comunicación bidireccional"
  ],
  "sampleSms": {
    "badge": "SMS Comercial · Recibido",
    "body": "Hola Jordan, su cita está confirmada para mañana a las 10:30 AM. Responda si necesita reprogramar.",
    "meta": "Hoy, 10:24 AM · Soporte Acme"
  },
  "smsDashboard": {
    "title": "Panel de SMS",
    "receivingBadge": "Recepción activa",
    "todayLabel": "SMS entrantes hoy",
    "todayVal": "3,126 mensajes",
    "colSender": "REMITENTE",
    "colDid": "DID DESTINO",
    "colMessage": "MENSAJE",
    "colTime": "HORA",
    "monitorTitle": "Monitorear:",
    "monitorItems": [
      "SMS entrantes",
      "Número remitente",
      "DID de destino",
      "Contenido del mensaje",
      "Fecha y hora",
      "Cliente/cuenta",
      "Volumen de SMS"
    ]
  },
  "monitoringBadge": "Monitoreo Avanzado de DID",
  "monitoringTitle": "Conozca el Estado de Cada Número",
  "monitoringSubtitle": "Supervise todo su inventario de DIDs en tiempo real.",
  "monitoringStats": {
    "title": "Resumen de DID",
    "liveBadge": "Tiempo real",
    "stat1Label": "DIDs activos",
    "stat1Val": "248",
    "stat1Sub": "+12 este mes",
    "stat2Label": "Disponibles",
    "stat2Val": "64",
    "stat2Sub": "Listos para asignar",
    "stat3Label": "Asignados",
    "stat3Val": "184",
    "stat3Sub": "32 clientes",
    "stat4Label": "Llamadas perdidas",
    "stat4Val": "18",
    "stat4Sub": "-8% esta semana",
    "chartTitle": "Actividad de Voz y SMS",
    "chartTimeframe": "Últimos 7 días",
    "legend1": "Volumen SMS",
    "legend2": "Volumen llamadas"
  },
  "operationalViewTitle": "Una vista operativa completa",
  "operationalViewItems": [
    "DIDs activos",
    "DIDs disponibles",
    "DIDs asignados",
    "Volumen de llamadas entrantes",
    "Volumen de SMS",
    "Duración de llamadas",
    "Llamadas perdidas",
    "Uso de números",
    "Asignación por cliente",
    "Seguimiento de ingresos y costes"
  ],
  "resellerBadge": "Diseñado para Revendedores y Empresas",
  "resellerTitle": "Cree su Propio Negocio de Números Virtuales",
  "resellerSubtitle": "Nuestra plataforma es ideal para:",
  "supportedAudiences": [
    {
      "title": "Revendedores de DID"
    },
    {
      "title": "Proveedores VoIP"
    },
    {
      "title": "Centros de llamadas"
    },
    {
      "title": "Grandes empresas"
    },
    {
      "title": "Proveedores UCaaS"
    },
    {
      "title": "Plataformas de comunicación"
    }
  ],
  "whiteLabelCard": {
    "title": "Listo para Marca Blanca",
    "desc": "Ofrezca a sus clientes su propio portal y experiencia móvil personalizada mientras usted administra la infraestructura de voz y mensajería.",
    "brandLabel": "Su marca",
    "portalLabel": "Portal de cliente",
    "tab1": "Números",
    "tab2": "Llamadas",
    "tab3": "SMS",
    "tagline": "La experiencia de su cliente. Nuestra infraestructura."
  },
  "ctaBadge": "CONSTRUYAMOS SU RED DE COMUNICACIÓN",
  "ctaTitle": "Haga Crecer su Negocio con Soluciones SMS Profesionales",
  "ctaSubtitle": "Desde enrutamiento de voz inteligente y terminación internacional hasta IA de Voz y números virtuales, iNet Global proporciona soluciones de comunicación escalables que ayudan a conectar con clientes de todo el mundo con total claridad y fiabilidad.",
  "contactUs": "Contáctenos",
  "ctaTrust1": "SLA de Operador Empresarial",
  "ctaTrust2": "Aprovisionamiento Instantáneo de DID",
  "ctaTrust3": "Cobertura en más de 100 Países"
};

const zh: VirtualDidTranslation = {
  "breadcrumb": "产品 | DID 门户 + 移动 App",
  "heroBadge": "DID 门户 + 移动 App",
  "heroTitle": "全面的 DID 管理与全球虚拟号码平台",
  "heroDesc": "通过功能强大的统一 DID 门户，轻松管理全球虚拟电话号码、呼入电话及短信。为您的客户提供专属号码，并配备移动应用程序，随时随地接听电话与接收短信。",
  "getStarted": "立即开始",
  "requestDemo": "申请演示",
  "heroFootnote": "全球号码。本地化覆盖。单一集成平台。",
  "dashboardPreview": {
    "title": "DID 门户",
    "liveBadge": "实时运行",
    "tab1": "概览",
    "tab2": "我的号码",
    "tab3": "呼叫路由",
    "tab4": "短信收件箱",
    "stat1Label": "活跃 DID",
    "stat1Val": "248",
    "stat2Label": "呼入电话",
    "stat2Val": "1,842",
    "stat3Label": "已收短信",
    "stat3Val": "3,126",
    "tableTitle": "您的全球号码库",
    "smsNotificationTitle": "收到新短信",
    "smsNotificationBody": "您的预约已确认，时间为上午 10:30。",
    "phoneIncomingText": "商务来电",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "转自 +1 212 555 0198"
  },
  "highlightsHeading": "您的全球号码。您的全权掌控。",
  "highlights": [
    {
      "title": "全球 DID 号码"
    },
    {
      "title": "来电呼入处理"
    },
    {
      "title": "短信接收"
    },
    {
      "title": "专属移动 App"
    },
    {
      "title": "智能呼叫转移"
    },
    {
      "title": "DID 资源管理"
    },
    {
      "title": "实时监控与统计"
    }
  ],
  "managementBadge": "DID 资源管理",
  "managementTitle": "在单一集中门户中高效管理所有 DID",
  "managementSubtitle": "从单一控制台快速搜索、开通、激活、暂停、配置并全方位监控您的虚拟电话号码。",
  "managementChecklistTitle": "DID 管理能力",
  "managementChecklist": [
    "全球 DID 号码库存",
    "国家与城市灵活筛选",
    "号码智能检索",
    "即时秒级开通",
    "DID 激活与停用控制",
    "客户号码灵活分配",
    "按客户细分管理 DID",
    "号码租期与到期管理",
    "DID 定价与计费管理",
    "号码使用量实时监控"
  ],
  "inventoryCard": {
    "title": "号码库存明细",
    "subtitle": "涵盖客户账户下的 248 个全球号码",
    "provisionBtn": "+ 开通新 DID",
    "searchPlaceholder": "搜索号码...",
    "countryFilter": "所有国家",
    "statusFilter": "所有状态",
    "colDid": "DID 号码",
    "colCountry": "国家 / 城市",
    "colCustomer": "所属客户",
    "colStatus": "状态",
    "showingText": "显示 248 个号码中的 4 个"
  },
  "callMgmtBadge": "随时随地轻松接听",
  "callMgmtTitle": "强大的呼入电话智能路由管理",
  "callMgmtSubtitle": "将呼入电话精准无误地路由至您指定的任何终端与坐席。",
  "forwardingTitle": "呼叫转移终端",
  "forwardingSubtitle": "支持无缝转移至：",
  "forwardingItems": [
    "手机号码",
    "SIP 语音账号",
    "网页浏览器软电话",
    "呼叫中心座席",
    "IVR 语音导航系统",
    "多重目的地组合"
  ],
  "advancedRoutingTitle": "高级智能路由",
  "advancedRoutingItems": [
    "基于时间的路由",
    "基于呼入国家路由",
    "基于主叫号码路由",
    "故障应急备用路由",
    "顺次振铃轮询",
    "多终端同时振铃",
    "工作时间/非工作时间策略"
  ],
  "journeyCard": {
    "title": "更智能的通话路径",
    "liveBadge": "实时",
    "step1Title": "来电呼入",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "营业时间策略",
    "step2Val": "周一至周五 · 09:00–18:00",
    "step3Title": "支持团队",
    "step3Val": "同时振铃 · 3 位座席",
    "footerText": "无应答？自动转接至您的个人手机。"
  },
  "mobileBadge": "通话与短信专属移动 App",
  "mobileTitle": "将您的专属 DID 装进口袋",
  "mobileSubtitle": "为用户提供专属移动应用，直接在智能手机上随时随地接收企业商务来电与短信。",
  "mobileFooter": "您的业务。随您同行。",
  "mobileFeaturesTitle": "移动 App 核心功能",
  "mobileFeatures": [
    {
      "title": "呼入接听",
      "desc": "直接通过移动 App 顺畅接听打入您 DID 的所有电话。"
    },
    {
      "title": "短信收件箱",
      "desc": "在安全、条理清晰的专属收件箱中接收所有来电短信。"
    },
    {
      "title": "通话记录",
      "desc": "完整查看所有呼入、未接和已接电话记录。"
    },
    {
      "title": "短信历史",
      "desc": "随时检索和回溯过往会话与文本内容。"
    },
    {
      "title": "推送通知",
      "desc": "来电或短信送达时即时接收手机锁屏通知。"
    },
    {
      "title": "多号码管理",
      "desc": "在单一登录账户下轻松聚合管理多个虚拟号码。"
    },
    {
      "title": "通讯录管理",
      "desc": "安全保存并归类常用联系人与重要客户。"
    }
  ],
  "smsBadge": "简便高效的短信接收",
  "smsTitle": "绝不错过任何关键客户信息",
  "smsSubtitle": "将您的 DID 转换为功能完备、高并发的短信接收中枢。",
  "smsPerfectTitle": "完美适用于：",
  "smsPerfectItems": [
    "客户服务与售后支持",
    "企业商务日常沟通",
    "销售线索收集与咨询",
    "预约与行程确认通知",
    "系统与安全告警",
    "账户验证与提醒",
    "双向双通互动交流"
  ],
  "sampleSms": {
    "badge": "企业短信 · 已接收",
    "body": "您好 Jordan，您的预约已确认于明天上午 10:30。如需改期请直接回复。",
    "meta": "今天 10:24 AM · Acme 客服支持"
  },
  "smsDashboard": {
    "title": "短信控制台",
    "receivingBadge": "实时接收中",
    "todayLabel": "今日接收短信总量",
    "todayVal": "3,126 条信息",
    "colSender": "发送方",
    "colDid": "接收方 DID",
    "colMessage": "短信内容",
    "colTime": "时间",
    "monitorTitle": "实时监控指标：",
    "monitorItems": [
      "实时接收短信",
      "发件人号码",
      "目标 DID 号码",
      "完整短信内容",
      "精确日期与时间",
      "归属客户/账户",
      "短信发送量统计"
    ]
  },
  "monitoringBadge": "高级 DID 实时监控",
  "monitoringTitle": "洞悉每个号码的实时状态与负荷",
  "monitoringSubtitle": "对整个 DID 号码库及通信负载进行毫秒级实时监控。",
  "monitoringStats": {
    "title": "DID 运行概览",
    "liveBadge": "实时",
    "stat1Label": "活跃 DID",
    "stat1Val": "248",
    "stat1Sub": "本月新增 +12",
    "stat2Label": "可用空闲",
    "stat2Val": "64",
    "stat2Sub": "待分配",
    "stat3Label": "已分配",
    "stat3Val": "184",
    "stat3Sub": "共 32 家客户",
    "stat4Label": "未接来电",
    "stat4Val": "18",
    "stat4Sub": "本周下降 -8%",
    "chartTitle": "语音与短信活跃走势",
    "chartTimeframe": "最近 7 天",
    "legend1": "短信量",
    "legend2": "呼入电话量"
  },
  "operationalViewTitle": "全维度的运维洞察",
  "operationalViewItems": [
    "活跃号码总数",
    "空闲号码库存",
    "已分配号码",
    "呼入通话总量",
    "短信接收总量",
    "平均通话时长",
    "未接来电统计",
    "号码利用率分析",
    "客户配额占用",
    "营收与成本收益追踪"
  ],
  "resellerBadge": "专为转售商与大型企业打造",
  "resellerTitle": "轻松开拓您的专属虚拟号码运营业务",
  "resellerSubtitle": "我们的平台完美支持：",
  "supportedAudiences": [
    {
      "title": "DID 转售商与代理商"
    },
    {
      "title": "VoIP 语音通信运营商"
    },
    {
      "title": "现代呼叫中心服务商"
    },
    {
      "title": "跨国企业集团"
    },
    {
      "title": "UCaaS 统一通信提供商"
    },
    {
      "title": "CPaaS 通信云平台"
    }
  ],
  "whiteLabelCard": {
    "title": "支持完全白标定制",
    "desc": "为您的客户提供完全品牌化的定制门户与移动端体验，而由您掌控底层语音与短信通信核心基础设施。",
    "brandLabel": "您的独立品牌",
    "portalLabel": "客户专属门户",
    "tab1": "号码管理",
    "tab2": "电话呼叫",
    "tab3": "短信收发",
    "tagline": "您的客户体验。我们的专业基础设施。"
  },
  "ctaBadge": "携手构建您的全球通信网络",
  "ctaTitle": "借助企业级商业通信解决方案推动业务增长",
  "ctaSubtitle": "从智能语音路由、全球国际终结落地，到 AI 智能语音与多国虚拟号码，iNet Global 提供高弹性的通信解决方案，助力企业在国际市场上以高清晰、高稳定和高效率连通客户。",
  "contactUs": "联系我们",
  "ctaTrust1": "企业级运营商 SLA 保障",
  "ctaTrust2": "即时秒级开通 DID",
  "ctaTrust3": "覆盖全球 100+ 国家与地区"
};

const hi: VirtualDidTranslation = {
  "breadcrumb": "उत्पाद | DID पोर्टल + मोबाइल ऐप",
  "heroBadge": "DID पोर्टल + मोबाइल ऐप",
  "heroTitle": "संपूर्ण DID प्रबंधन एवं वर्चुअल नंबर प्लेटफॉर्म",
  "heroDesc": "एक शक्तिशाली DID पोर्टल से वर्चुअल फ़ोन नंबर, इनकमिंग कॉल और SMS का सुचारू प्रबंधन करें। अपने ग्राहकों को किसी भी स्थान से कॉल और SMS प्राप्त करने के लिए मोबाइल ऐप के साथ समर्पित नंबर प्रदान करें।",
  "getStarted": "शुरू करें",
  "requestDemo": "डेमो का अनुरोध करें",
  "heroFootnote": "वैश्विक नंबर। स्थानीय उपस्थिति। एक एकीकृत मंच।",
  "dashboardPreview": {
    "title": "DID पोर्टल",
    "liveBadge": "लाइव",
    "tab1": "अवलोकन",
    "tab2": "मेरे नंबर",
    "tab3": "कॉल रूटिंग",
    "tab4": "SMS इनबॉक्स",
    "stat1Label": "सक्रिय DIDs",
    "stat1Val": "248",
    "stat2Label": "इनकमिंग कॉल",
    "stat2Val": "1,842",
    "stat3Label": "प्राप्त SMS",
    "stat3Val": "3,126",
    "tableTitle": "आपके वैश्विक नंबर",
    "smsNotificationTitle": "नया SMS प्राप्त हुआ",
    "smsNotificationBody": "आपका अपॉइंटमेंट सुबह 10:30 बजे के लिए पुष्ट हो गया है।",
    "phoneIncomingText": "इनकमिंग व्यावसायिक कॉल",
    "phoneCaller": "जॉर्डन डेविस",
    "phoneDid": "वाया +1 212 555 0198"
  },
  "highlightsHeading": "आपका वैश्विक नंबर। आपका पूर्ण नियंत्रण।",
  "highlights": [
    {
      "title": "ग्लोबल DID नंबर"
    },
    {
      "title": "इनकमिंग कॉल प्रबंधन"
    },
    {
      "title": "SMS प्राप्ति"
    },
    {
      "title": "समर्पित मोबाइल ऐप"
    },
    {
      "title": "कॉल फ़ॉरवर्डिंग"
    },
    {
      "title": "DID इन्वेंट्री प्रबंधन"
    },
    {
      "title": "रीयल-टाइम मॉनिटरिंग"
    }
  ],
  "managementBadge": "DID प्रबंधन",
  "managementTitle": "एक केंद्रीकृत पोर्टल से अपने सभी DIDs प्रबंधित करें",
  "managementSubtitle": "एक ही डैशबोर्ड से अपने वर्चुअल नंबरों को खोजें, प्रावधान करें, सक्रिय करें, निलंबित करें और मॉनिटर करें।",
  "managementChecklistTitle": "DID प्रबंधन क्षमताएं",
  "managementChecklist": [
    "वैश्विक DID इन्वेंटरी",
    "देश और शहर का चयन",
    "नंबर खोज",
    "त्वरित प्रावधान (Instant Provisioning)",
    "DID सक्रियण/निष्क्रियण",
    "नंबर आवंटन",
    "ग्राहक-वार DID प्रबंधन",
    "वैधता व समाप्ति प्रबंधन",
    "DID मूल्य निर्धारण नियंत्रण",
    "नंबर उपयोग मॉनिटरिंग"
  ],
  "inventoryCard": {
    "title": "नंबर इन्वेंटरी",
    "subtitle": "आपके ग्राहक खातों में 248 नंबर उपलब्ध",
    "provisionBtn": "+ नया DID जोड़ें",
    "searchPlaceholder": "नंबर खोजें...",
    "countryFilter": "सभी देश",
    "statusFilter": "सभी स्थितियां",
    "colDid": "DID नंबर",
    "colCountry": "देश / शहर",
    "colCustomer": "ग्राहक",
    "colStatus": "स्थिति",
    "showingText": "248 में से 4 नंबर दिखाए जा रहे हैं"
  },
  "callMgmtBadge": "कहीं भी कॉल प्राप्त करें",
  "callMgmtTitle": "शक्तिशाली इनकमिंग कॉल रूटिंग प्रबंधन",
  "callMgmtSubtitle": "आने वाली कॉलों को ठीक उसी गंतव्य पर रूट करें जहां आप चाहते हैं।",
  "forwardingTitle": "कॉल फ़ॉरवर्डिंग",
  "forwardingSubtitle": "कॉल फ़ॉरवर्ड करें:",
  "forwardingItems": [
    "मोबाइल नंबरों पर",
    "SIP खातों पर",
    "ब्राउज़र सॉफ्टफ़ोन पर",
    "कॉल सेंटर एजेंटों पर",
    "IVR प्रणालियों पर",
    "एकाधिक गंतव्यों पर"
  ],
  "advancedRoutingTitle": "उन्नत रूटिंग",
  "advancedRoutingItems": [
    "समय-आधारित रूटिंग",
    "देश-आधारित रूटिंग",
    "कॉलर-आधारित रूटिंग",
    "फ़ेलओवर व बैकअप रूटिंग",
    "क्रमिक रिंगिंग (Sequential Ringing)",
    "एक साथ रिंगिंग (Simultaneous Ringing)",
    "कार्य-घंटे रूटिंग"
  ],
  "journeyCard": {
    "title": "स्मार्ट कॉल यात्रा",
    "liveBadge": "लाइव",
    "step1Title": "इनकमिंग कॉल",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "व्यावसायिक घंटे",
    "step2Val": "सोम-शुक्र · 09:00–18:00",
    "step3Title": "सपोर्ट टीम",
    "step3Val": "एक साथ रिंग · 3 एजेंट",
    "footerText": "उत्तर नहीं मिला? सीधे आपके मोबाइल पर फ़ॉरवर्ड।"
  },
  "mobileBadge": "कॉल और SMS के लिए मोबाइल ऐप",
  "mobileTitle": "आपकी जेब में आपका DID नंबर",
  "mobileSubtitle": "उपयोगकर्ताओं को सीधे उनके स्मार्टफ़ोन पर व्यावसायिक कॉल और SMS प्राप्त करने के लिए एक समर्पित मोबाइल ऐप दें।",
  "mobileFooter": "आपका व्यवसाय। हमेशा आपके साथ।",
  "mobileFeaturesTitle": "ऐप विशेषताएं",
  "mobileFeatures": [
    {
      "title": "इनकमिंग कॉल्स",
      "desc": "मोबाइल ऐप के माध्यम से सीधे अपने DID पर आने वाली कॉल प्राप्त करें।"
    },
    {
      "title": "SMS इनबॉक्स",
      "desc": "एक सुरक्षित, व्यवस्थित इनबॉक्स में आने वाले SMS संदेश प्राप्त करें।"
    },
    {
      "title": "कॉल इतिहास",
      "desc": "इनकमिंग, मिस्ड और उत्तर दी गई कॉलों का विवरण देखें।"
    },
    {
      "title": "SMS इतिहास",
      "desc": "पिछले संदेशों और बातचीत को आसानी से एक्सेस करें।"
    },
    {
      "title": "पुश सूचनाएं (Push Notifications)",
      "desc": "कॉल या SMS आते ही तुरंत सूचनाएं प्राप्त करें।"
    },
    {
      "title": "एकाधिक DIDs",
      "desc": "एक ही खाते से कई वर्चुअल नंबरों का प्रबंधन करें।"
    },
    {
      "title": "संपर्क प्रबंधन",
      "desc": "अक्सर संपर्क किए जाने वाले नंबरों को सहेजें और व्यवस्थित करें।"
    }
  ],
  "smsBadge": "सरल और सुरक्षित SMS प्राप्ति",
  "smsTitle": "कोई भी महत्वपूर्ण संदेश कभी न चूकें",
  "smsSubtitle": "अपने DID नंबर को एक शक्तिशाली SMS प्राप्ति एंडपॉइंट में बदलें।",
  "smsPerfectTitle": "इनके लिए एकदम सही:",
  "smsPerfectItems": [
    "ग्राहक सहायता",
    "व्यावसायिक संचार",
    "लीड जनरेशन",
    "अपॉइंटमेंट सूचनाएं",
    "सेवा अलर्ट",
    "खाता सूचनाएं",
    "द्वि-मार्गी संचार (Two-way communication)"
  ],
  "sampleSms": {
    "badge": "व्यावसायिक SMS · प्राप्त हुआ",
    "body": "नमस्ते जॉर्डन, आपका अपॉइंटमेंट कल सुबह 10:30 बजे के लिए कन्फर्म है। समय बदलने के लिए उत्तर दें।",
    "meta": "आज, 10:24 AM · एक्मे सपोर्ट"
  },
  "smsDashboard": {
    "title": "SMS डैशबोर्ड",
    "receivingBadge": "प्राप्ति सक्रिय",
    "todayLabel": "आज प्राप्त कुल SMS",
    "todayVal": "3,126 संदेश",
    "colSender": "प्रेषक",
    "colDid": "गंतव्य DID",
    "colMessage": "संदेश",
    "colTime": "समय",
    "monitorTitle": "निगरानी करें:",
    "monitorItems": [
      "इनकमिंग SMS",
      "प्रेषक का नंबर",
      "गंतव्य DID",
      "संदेश सामग्री",
      "दिनांक व समय",
      "ग्राहक/खाता",
      "SMS मात्रा व वॉल्यूम"
    ]
  },
  "monitoringBadge": "उन्नत DID मॉनिटरिंग",
  "monitoringTitle": "प्रत्येक नंबर की सटीक स्थिति जानें",
  "monitoringSubtitle": "अपनी संपूर्ण DID इन्वेंट्री की रीयल-टाइम में निगरानी करें।",
  "monitoringStats": {
    "title": "DID अवलोकन",
    "liveBadge": "रीयल-टाइम",
    "stat1Label": "सक्रिय DIDs",
    "stat1Val": "248",
    "stat1Sub": "इस महीने +12",
    "stat2Label": "उपलब्ध",
    "stat2Val": "64",
    "stat2Sub": "आवंटन के लिए तैयार",
    "stat3Label": "आवंटित",
    "stat3Val": "184",
    "stat3Sub": "32 ग्राहक",
    "stat4Label": "मिस्ड कॉल",
    "stat4Val": "18",
    "stat4Sub": "इस सप्ताह -8%",
    "chartTitle": "वॉइस और SMS गतिविधि",
    "chartTimeframe": "पिछले 7 दिन",
    "legend1": "SMS वॉल्यूम",
    "legend2": "इनकमिंग कॉल वॉल्यूम"
  },
  "operationalViewTitle": "पूर्ण परिचालन दृश्य",
  "operationalViewItems": [
    "सक्रिय DIDs",
    "उपलब्ध DIDs",
    "आवंटित DIDs",
    "इनकमिंग कॉल मात्रा",
    "SMS मात्रा",
    "कॉल अवधि",
    "मिस्ड कॉल्स",
    "नंबर उपयोग दर",
    "ग्राहक आवंटन",
    "राजस्व और लागत ट्रैकिंग"
  ],
  "resellerBadge": "DID पुनर्विक्रेताओं और उद्यमों के लिए निर्मित",
  "resellerTitle": "अपना स्वयं का वर्चुअल नंबर व्यवसाय बनाएं",
  "resellerSubtitle": "हमारा प्लेटफ़ॉर्म इनके लिए उपयुक्त है:",
  "supportedAudiences": [
    {
      "title": "DID पुनर्विक्रेता (Resellers)"
    },
    {
      "title": "VoIP प्रदाता"
    },
    {
      "title": "कॉल सेंटर"
    },
    {
      "title": "उद्यम (Enterprises)"
    },
    {
      "title": "UCaaS प्रदाता"
    },
    {
      "title": "संचार प्लेटफ़ॉर्म"
    }
  ],
  "whiteLabelCard": {
    "title": "व्हाइट-लेबल तैयार",
    "desc": "अपने ग्राहकों को उनका स्वयं का ब्रांडेड पोर्टल और मोबाइल अनुभव दें, जबकि आप अंतर्निहित वॉइस और मैसेजिंग बुनियादी ढांचे का प्रबंधन करते हैं।",
    "brandLabel": "आपका ब्रांड",
    "portalLabel": "ग्राहक पोर्टल",
    "tab1": "नंबर",
    "tab2": "कॉल्स",
    "tab3": "SMS",
    "tagline": "आपके ग्राहक का अनुभव। हमारा बुनियादी ढांचा।"
  },
  "ctaBadge": "आइए आपका मैसेजिंग नेटवर्क बनाएं",
  "ctaTitle": "व्यावसायिक संचार समाधानों के साथ अपना व्यवसाय बढ़ाएं",
  "ctaSubtitle": "इंटेलिजेंट वॉइस रूटिंग और अंतरराष्ट्रीय टर्मिनेशन से लेकर एआई वॉइस और वर्चुअल नंबरों तक, iNet Global स्केलेबल समाधान प्रदान करता है जो वैश्विक बाजारों में ग्राहकों से स्पष्ट और सुरक्षित रूप से जुड़ने में मदद करते हैं।",
  "contactUs": "संपर्क करें",
  "ctaTrust1": "एंटरप्राइज कैरियर SLA",
  "ctaTrust2": "त्वरित DID प्रोविज़निंग",
  "ctaTrust3": "100+ देशों में व्यापक कवरेज"
};

const ar: VirtualDidTranslation = {
  "breadcrumb": "المنتجات | بوابة DID + تطبيق الهاتف",
  "heroBadge": "بوابة DID + تطبيق الهاتف",
  "heroTitle": "منصة شاملة لإدارة أرقام DID والأرقام الافتراضية",
  "heroDesc": "إدارة الأرقام الافتراضية والمكالمات الواردة والرسائل النصية قصيرة عبر بوابة DID مركزية وقوية. امنح عملاءك أرقاماً مخصصة مع تطبيق للهاتف لاستقبال المكالمات والرسائل من أي مكان.",
  "getStarted": "ابدأ الآن",
  "requestDemo": "طلب عرض توضيحي",
  "heroFootnote": "أرقام عالمية. تواجد محلي. منصة واحدة.",
  "dashboardPreview": {
    "title": "بوابة DID",
    "liveBadge": "مباشر",
    "tab1": "نظرة عامة",
    "tab2": "أرقامي",
    "tab3": "توجيه المكالمات",
    "tab4": "صندوق الرسائل",
    "stat1Label": "أرقام DID نشطة",
    "stat1Val": "248",
    "stat2Label": "مكالمات واردة",
    "stat2Val": "1,842",
    "stat3Label": "رسائل مستلمة",
    "stat3Val": "3,126",
    "tableTitle": "أرقامك العالمية",
    "smsNotificationTitle": "تم استلام رسالة جديدة",
    "smsNotificationBody": "تم تأكيد موعدك الساعة 10:30 صباحاً.",
    "phoneIncomingText": "مكالمة عمل واردة",
    "phoneCaller": "جوردان ديفيس",
    "phoneDid": "عبر +1 212 555 0198"
  },
  "highlightsHeading": "رقمك العالمي. تحكمك الكامل.",
  "highlights": [
    {
      "title": "أرقام DID عالمية"
    },
    {
      "title": "المكالمات الواردة"
    },
    {
      "title": "استقبال الرسائل النصية"
    },
    {
      "title": "تطبيق الهاتف الذكي"
    },
    {
      "title": "تحويل المكالمات"
    },
    {
      "title": "إدارة الأرقام"
    },
    {
      "title": "المراقبة الفورية"
    }
  ],
  "managementBadge": "إدارة أرقام DID",
  "managementTitle": "إدارة أرقام DID من بوابة مركزية واحدة",
  "managementSubtitle": "ابحث عن الأرقام الافتراضية واشترك بها وفعلها وعلقها واضبط إعداداتها وراقبها من لوحة تحكم واحدة.",
  "managementChecklistTitle": "ميزات إدارة DID",
  "managementChecklist": [
    "مخزون DID عالمي",
    "تحديد الدولة والمدينة",
    "بحث متقدم عن الأرقام",
    "تفعيل فوري للأرقام",
    "تفعيل وتعطيل DID",
    "تخصيص الأرقام للمستخدمين",
    "إدارة DID حسب العميل",
    "إدارة تواريخ الانتهاء",
    "التحكم في أسعار وتكاليف DID",
    "مراقبة استخدام الأرقام"
  ],
  "inventoryCard": {
    "title": "مخزون الأرقام",
    "subtitle": "248 رقماً عبر حسابات عملائك",
    "provisionBtn": "+ إضافة DID جديد",
    "searchPlaceholder": "البحث عن الأرقام...",
    "countryFilter": "جميع الدول",
    "statusFilter": "جميع الحالات",
    "colDid": "رقم DID",
    "colCountry": "الدولة / المدينة",
    "colCustomer": "العميل",
    "colStatus": "الحالة",
    "showingText": "عرض 4 من أصل 248 رقماً"
  },
  "callMgmtBadge": "استقبال المكالمات في أي مكان",
  "callMgmtTitle": "إدارة متطورة للمكالمات الواردة",
  "callMgmtSubtitle": "وجه المكالمات الواردة بدقة إلى الوجهة التي تريدها.",
  "forwardingTitle": "تحويل المكالمات",
  "forwardingSubtitle": "تحويل المكالمات إلى:",
  "forwardingItems": [
    "أرقام الهواتف المحمولة",
    "حسابات SIP الصوتية",
    "الهواتف البرمجية عبر المتصفح",
    "وكلاء مراكز الاتصال",
    "أنظمة الرد الصوتي التفاعلي (IVR)",
    "وجهات متعددة في نفس الوقت"
  ],
  "advancedRoutingTitle": "توجيه متقدم",
  "advancedRoutingItems": [
    "التوجيه القائم على الوقت",
    "التوجيه حسب بلد المتصل",
    "التوجيه حسب هوية المتصل",
    "التوجيه الاحتياطي وتجاوز الأعطال",
    "الرنين المتسلسل",
    "الرنين المتزامن المتعدد",
    "توجيه ساعات العمل الرسمية"
  ],
  "journeyCard": {
    "title": "مسار اتصال ذكي",
    "liveBadge": "مباشر",
    "step1Title": "مكالمة واردة",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "ساعات العمل",
    "step2Val": "الإثنين-الجمعة · 09:00–18:00",
    "step3Title": "فريق الدعم",
    "step3Val": "رنين متزامن · 3 وكلاء",
    "footerText": "لا يوجد رد؟ تحويل فوري إلى هاتفك المحمول."
  },
  "mobileBadge": "تطبيق هاتف للمكالمات والرسائل",
  "mobileTitle": "رقم DID الخاص بك في جيبك",
  "mobileSubtitle": "امنح مستخدميك تطبيق هاتف مخصصاً لاستقبال مكالمات العمل والرسائل النصية مباشرة على هواتفهم الذكية.",
  "mobileFooter": "أعمالك معك أينما ذهبت.",
  "mobileFeaturesTitle": "ميزات التطبيق",
  "mobileFeatures": [
    {
      "title": "المكالمات الواردة",
      "desc": "استقبال المكالمات على رقم DID مباشرة عبر تطبيق الهاتف."
    },
    {
      "title": "صندوق الرسائل",
      "desc": "استقبال الرسائل النصية القصيرة في صندوق وارد آمن ومنظم."
    },
    {
      "title": "سجل المكالمات",
      "desc": "عرض سجل المكالمات الواردة والمستلمة والفائتة بدقة."
    },
    {
      "title": "سجل الرسائل",
      "desc": "الوصول السريع إلى الرسائل والمحادثات السابقة."
    },
    {
      "title": "إشعارات فورية",
      "desc": "تلقي تنبيهات فورية عند وصول مكالمة أو رسالة جديدة."
    },
    {
      "title": "أرقام DID متعددة",
      "desc": "إدارة عدة أرقام افتراضية من حساب مستخدم واحد."
    },
    {
      "title": "إدارة جهات الاتصال",
      "desc": "حفظ وتنظيم جهات الاتصال المتكررة بسهولة."
    }
  ],
  "smsBadge": "استقبال رسائل SMS بكل سهولة",
  "smsTitle": "لا تفوت أي رسالة مهمة من عملائك",
  "smsSubtitle": "حول رقم DID الخاص بك إلى نقطة استقبال رسائل نصية فائقة الفعالية.",
  "smsPerfectTitle": "مثالي لـ:",
  "smsPerfectItems": [
    "خدمة العملاء والدعم الفني",
    "اتصالات الأعمال والشركات",
    "توليد العملاء المحتملين",
    "تأكيدات وتذكيرات المواعيد",
    "تنبيهات وإشعارات الخدمة",
    "إشعارات الحساب والأمان",
    "التواصل التفاعلي ثنائي الاتجاه"
  ],
  "sampleSms": {
    "badge": "رسالة عمل · مستلمة",
    "body": "مرحباً جوردان، تم تأكيد موعدك لغداً الساعة 10:30 صباحاً. أجب إذا أردت تعديل الموعد.",
    "meta": "اليوم، 10:24 صباحاً · دعم Acme"
  },
  "smsDashboard": {
    "title": "لوحة تحكم الرسائل",
    "receivingBadge": "الاستقبال نشط",
    "todayLabel": "الرسائل المستلمة اليوم",
    "todayVal": "3,126 رسالة",
    "colSender": "المرسل",
    "colDid": "رقم DID المستهدف",
    "colMessage": "نص الرسالة",
    "colTime": "الوقت",
    "monitorTitle": "المراقبة المباشرة:",
    "monitorItems": [
      "الرسائل الواردة",
      "رقم هاتف المرسل",
      "رقم DID المستلم",
      "محتوى الرسالة بالكامل",
      "التاريخ والوقت بالتفصيل",
      "العميل / الحساب المخصص",
      "إجمالي حجم الرسائل"
    ]
  },
  "monitoringBadge": "مراقبة متقدمة لأرقام DID",
  "monitoringTitle": "اعرف حالة ونشاط كل رقم في الوقت الفعلي",
  "monitoringSubtitle": "راقب مخزون وحركة اتصالات أرقام DID بالكامل في الوقت الحقيقي.",
  "monitoringStats": {
    "title": "نظرة عامة على DID",
    "liveBadge": "وقت حقيقي",
    "stat1Label": "أرقام DID نشطة",
    "stat1Val": "248",
    "stat1Sub": "+12 هذا الشهر",
    "stat2Label": "متاحة",
    "stat2Val": "64",
    "stat2Sub": "جاهزة للتخصيص",
    "stat3Label": "مخصصة",
    "stat3Val": "184",
    "stat3Sub": "32 عميلاً",
    "stat4Label": "مكالمات فائتة",
    "stat4Val": "18",
    "stat4Sub": "-8% هذا الأسبوع",
    "chartTitle": "نشاط الصوت والرسائل",
    "chartTimeframe": "آخر 7 أيام",
    "legend1": "حجم الرسائل",
    "legend2": "حجم المكالمات الواردة"
  },
  "operationalViewTitle": "رؤية تشغيلية شاملة",
  "operationalViewItems": [
    "أرقام DID النشطة",
    "أرقام DID المتاحة",
    "أرقام DID المخصصة",
    "حجم المكالمات الواردة",
    "حجم الرسائل المستلمة",
    "متوسط مدة المكالمات",
    "المكالمات الفائتة",
    "معدل استخدام الأرقام",
    "توزيع الأرقام على العملاء",
    "تتبع التكاليف والإيرادات"
  ],
  "resellerBadge": "مصمم للموزعين والشركات الكبرى",
  "resellerTitle": "أنشئ مشروعك الخاص في تزويد الأرقام الافتراضية",
  "resellerSubtitle": "منصتنا تدعم وتلبي احتياجات:",
  "supportedAudiences": [
    {
      "title": "موزعو أرقام DID"
    },
    {
      "title": "مزودو خدمات VoIP"
    },
    {
      "title": "مراكز الاتصال الدولية"
    },
    {
      "title": "الشركات والمؤسسات الكبرى"
    },
    {
      "title": "مزودو حلول UCaaS"
    },
    {
      "title": "منصات الاتصالات السحابية"
    }
  ],
  "whiteLabelCard": {
    "title": "جاهز للعلامة البيضاء (White-Label)",
    "desc": "امنح عملاءك بوابة مخصصة بهويتهم وتطبيق هاتف يحمل علامتهم التجارية، بينما تدير أنت البنية التحتية الأساسية للصوت والرسائل.",
    "brandLabel": "علامتك التجارية",
    "portalLabel": "بوابة العميل",
    "tab1": "الأرقام",
    "tab2": "المكالمات",
    "tab3": "الرسائل",
    "tagline": "تجربة عميلك. بنيتنا التحتية الموثوقة."
  },
  "ctaBadge": "دعنا نبني شبكة اتصالاتك المؤسسية",
  "ctaTitle": "طور أعمالك مع حلول الأرقام الافتراضية والرسائل المتطورة",
  "ctaSubtitle": "من التوجيه الصوتي الذكي والإنهاء الدولي إلى الصوت المعتمد على الذكاء الاصطناعي والأرقام الافتراضية، توفر iNet Global حلول اتصالات قابلة للتوسع تساعد الشركات على التواصل مع العملاء بوضوح وموثوقية عبر الأسواق العالمية.",
  "contactUs": "اتصل بنا",
  "ctaTrust1": "اتفاقية مستوى الخدمة لمشغلي الأعمال",
  "ctaTrust2": "تفعيل فوري لأرقام DID",
  "ctaTrust3": "تغطية عالمية في أكثر من 100 دولة"
};

const fr: VirtualDidTranslation = {
  "breadcrumb": "Produits | Portail DID + Application Mobile",
  "heroBadge": "Portail DID + App Mobile",
  "heroTitle": "Plateforme Complète de Gestion des DID et Numéros Virtuels",
  "heroDesc": "Gérez vos numéros virtuels, vos appels entrants et vos SMS depuis un portail DID unifié et performant. Fournissez à vos clients des numéros dédiés avec une application mobile pour recevoir des appels et des SMS partout dans le monde.",
  "getStarted": "Commencer",
  "requestDemo": "Demander une démo",
  "heroFootnote": "Numéros mondiaux. Présence locale. Une seule plateforme.",
  "dashboardPreview": {
    "title": "Portail DID",
    "liveBadge": "En direct",
    "tab1": "Vue d'ensemble",
    "tab2": "Mes numéros",
    "tab3": "Routage d'appels",
    "tab4": "Boîte SMS",
    "stat1Label": "DID actifs",
    "stat1Val": "248",
    "stat2Label": "Appels entrants",
    "stat2Val": "1 842",
    "stat3Label": "SMS reçus",
    "stat3Val": "3 126",
    "tableTitle": "Vos numéros internationaux",
    "smsNotificationTitle": "Nouveau SMS reçu",
    "smsNotificationBody": "Votre rendez-vous est confirmé pour 10h30.",
    "phoneIncomingText": "Appel professionnel entrant",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "via +1 212 555 0198"
  },
  "highlightsHeading": "Votre Numéro Global. Votre Contrôle Total.",
  "highlights": [
    {
      "title": "Numéros DID Internationaux"
    },
    {
      "title": "Appels Entrants"
    },
    {
      "title": "Réception de SMS"
    },
    {
      "title": "Application Mobile Dédiée"
    },
    {
      "title": "Transfert d'Appels"
    },
    {
      "title": "Gestion Complète des DID"
    },
    {
      "title": "Supervision en Temps Réel"
    }
  ],
  "managementBadge": "Gestion des DID",
  "managementTitle": "Gérez Tous Vos DID Depuis un Portail Centralisé",
  "managementSubtitle": "Recherchez, provisionnez, activez, suspendez, configurez et supervisez vos numéros virtuels depuis un tableau de bord unique.",
  "managementChecklistTitle": "Fonctionnalités de Gestion DID",
  "managementChecklist": [
    "Inventaire mondial de DID",
    "Sélection par pays et ville",
    "Recherche intelligente de numéros",
    "Attribution et activation instantanées",
    "Activation / suspension de DID",
    "Affectation souple des numéros",
    "Gestion des DID par compte client",
    "Gestion des dates d'expiration",
    "Tarification et facturation des DID",
    "Suivi de l'utilisation des numéros"
  ],
  "inventoryCard": {
    "title": "Inventaire des numéros",
    "subtitle": "248 numéros attribués à vos clients",
    "provisionBtn": "+ Provisionner un DID",
    "searchPlaceholder": "Rechercher des numéros...",
    "countryFilter": "Tous les pays",
    "statusFilter": "Tous les statuts",
    "colDid": "NUMÉRO DID",
    "colCountry": "PAYS / VILLE",
    "colCustomer": "CLIENT",
    "colStatus": "STATUT",
    "showingText": "Affichage de 4 numéros sur 248"
  },
  "callMgmtBadge": "Recevez Vos Appels Partout",
  "callMgmtTitle": "Gestion Puissante des Appels Entrants",
  "callMgmtSubtitle": "Acheminez vos appels entrants exactement vers les destinations souhaitées.",
  "forwardingTitle": "Transfert d'Appel",
  "forwardingSubtitle": "Transférer les appels vers :",
  "forwardingItems": [
    "Numéros de téléphones mobiles",
    "Comptes et trunks SIP",
    "Softphones sur navigateur Web",
    "Agents de centres d'appels",
    "Serveurs vocaux interactifs (SVI / IVR)",
    "Destinations multiples et combinées"
  ],
  "advancedRoutingTitle": "Routage Avancé",
  "advancedRoutingItems": [
    "Routage selon les horaires",
    "Routage basé sur le pays d'origine",
    "Routage selon le numéro appelant",
    "Routage de secours et basculement (Failover)",
    "Sonnerie séquentielle",
    "Sonnerie simultanée sur plusieurs terminaux",
    "Routage heures ouvrées / non ouvrées"
  ],
  "journeyCard": {
    "title": "Un parcours d'appel intelligent",
    "liveBadge": "En direct",
    "step1Title": "Appel entrant",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Heures de bureau",
    "step2Val": "Lun-Ven · 09:00–18:00",
    "step3Title": "Équipe support",
    "step3Val": "Sonnerie simultanée · 3 agents",
    "footerText": "Pas de réponse ? Transfert immédiat vers le mobile."
  },
  "mobileBadge": "App Mobile pour Appels et SMS",
  "mobileTitle": "Votre Numéro DID Toujours en Poche",
  "mobileSubtitle": "Fournissez à vos collaborateurs une application mobile dédiée pour recevoir leurs appels professionnels et SMS directement sur smartphone.",
  "mobileFooter": "Votre entreprise. Toujours à vos côtés.",
  "mobileFeaturesTitle": "Fonctionnalités de l'Application",
  "mobileFeatures": [
    {
      "title": "Appels Entrants",
      "desc": "Recevez les appels vers vos numéros DID directement dans l'application mobile."
    },
    {
      "title": "Boîte de Réception SMS",
      "desc": "Recevez tous vos messages SMS dans une boîte sécurisée et organisée."
    },
    {
      "title": "Historique d'Appels",
      "desc": "Consultez l'historique détaillé des appels entrants, manqués et répondus."
    },
    {
      "title": "Historique des SMS",
      "desc": "Accédez à tout moment aux conversations et messages archivés."
    },
    {
      "title": "Notifications Push",
      "desc": "Soyez alerté instantanément à l'arrivée d'un appel ou d'un nouveau SMS."
    },
    {
      "title": "Gestion Multi-DID",
      "desc": "Pilotez plusieurs numéros virtuels depuis un seul compte utilisateur."
    },
    {
      "title": "Gestion des Contacts",
      "desc": "Enregistrez et classez facilement les numéros de vos clients fréquents."
    }
  ],
  "smsBadge": "Réception SMS Intuitive",
  "smsTitle": "Ne Manquez Jamais un Message Important",
  "smsSubtitle": "Transformez vos numéros DID en puissants points de terminaison pour la réception de SMS.",
  "smsPerfectTitle": "Idéal pour :",
  "smsPerfectItems": [
    "Service client et assistance",
    "Communications d'entreprise",
    "Génération de leads et prospection",
    "Rappels et confirmations de rendez-vous",
    "Alertes système et notifications de service",
    "Codes de sécurité et vérifications",
    "Échanges conversationnels bidirectionnels"
  ],
  "sampleSms": {
    "badge": "SMS Professionnel · Reçu",
    "body": "Bonjour Jordan, votre rendez-vous est confirmé pour demain à 10h30. Répondez pour modifier la date.",
    "meta": "Aujourd'hui, 10:24 · Support Acme"
  },
  "smsDashboard": {
    "title": "Tableau de Bord SMS",
    "receivingBadge": "Réception en direct",
    "todayLabel": "SMS reçus aujourd'hui",
    "todayVal": "3 126 messages",
    "colSender": "EXPÉDITEUR",
    "colDid": "DID DESTINATION",
    "colMessage": "MESSAGE",
    "colTime": "HEURE",
    "monitorTitle": "Supervisez en direct :",
    "monitorItems": [
      "SMS entrants",
      "Numéro expéditeur",
      "DID de destination",
      "Contenu intégral du message",
      "Date et heure précises",
      "Client / Compte associé",
      "Volumes et statistiques SMS"
    ]
  },
  "monitoringBadge": "Supervision Avancée des DID",
  "monitoringTitle": "Connaissez le Statut de Chaque Numéro en Temps Réel",
  "monitoringSubtitle": "Suivez l'intégralité de votre parc de numéros virtuels en direct.",
  "monitoringStats": {
    "title": "Aperçu des DID",
    "liveBadge": "Temps réel",
    "stat1Label": "DID actifs",
    "stat1Val": "248",
    "stat1Sub": "+12 ce mois-ci",
    "stat2Label": "Disponibles",
    "stat2Val": "64",
    "stat2Sub": "Prêts à être affectés",
    "stat3Label": "Assignés",
    "stat3Val": "184",
    "stat3Sub": "32 clients",
    "stat4Label": "Appels manqués",
    "stat4Val": "18",
    "stat4Sub": "-8% cette semaine",
    "chartTitle": "Activité Voix & SMS",
    "chartTimeframe": "7 derniers jours",
    "legend1": "Volume SMS",
    "legend2": "Volume appels"
  },
  "operationalViewTitle": "Une visibilité opérationnelle exhaustive",
  "operationalViewItems": [
    "Nombre de DID actifs",
    "DID disponibles en stock",
    "DID assignés aux clients",
    "Volume d'appels entrants",
    "Volume de SMS reçus",
    "Durée moyenne des appels",
    "Statistiques d'appels manqués",
    "Taux d'utilisation des numéros",
    "Répartition par compte client",
    "Suivi des coûts et de la rentabilité"
  ],
  "resellerBadge": "Conçu pour Revendeurs & Grandes Entreprises",
  "resellerTitle": "Créez Votre Propre Offre de Numéros Virtuels",
  "resellerSubtitle": "Notre plateforme s'adapte parfaitement à :",
  "supportedAudiences": [
    {
      "title": "Revendeurs de DID"
    },
    {
      "title": "Opérateurs VoIP & Télécoms"
    },
    {
      "title": "Centres de contact internationaux"
    },
    {
      "title": "Grandes entreprises et groupes"
    },
    {
      "title": "Fournisseurs de solutions UCaaS"
    },
    {
      "title": "Plateformes de communication CPaaS"
    }
  ],
  "whiteLabelCard": {
    "title": "Prêt pour la Marque Blanche",
    "desc": "Offrez à vos clients un portail web et une application mobile à vos couleurs, tandis que vous pilotez toute l'infrastructure voix et messagerie sous-jacente.",
    "brandLabel": "Votre marque",
    "portalLabel": "Portail client",
    "tab1": "Numéros",
    "tab2": "Appels",
    "tab3": "SMS",
    "tagline": "L'expérience de votre client. Notre infrastructure experte."
  },
  "ctaBadge": "CONSTRUISONS VOTRE RÉSEAU DE MESSAGERIE ET DE VOIX",
  "ctaTitle": "Développez Votre Entreprise grâce aux Solutions Numériques et SMS",
  "ctaSubtitle": "Du routage vocal intelligent et de la terminaison internationale aux numéros virtuels et à l'IA vocale, iNet Global fournit des solutions évolutives qui permettent aux entreprises de communiquer clairement et de manière fiable avec leurs clients dans le monde entier.",
  "contactUs": "Contactez-nous",
  "ctaTrust1": "SLA Opérateur Haute Disponibilité",
  "ctaTrust2": "Provisionnement Immédiat de DID",
  "ctaTrust3": "Couverture dans Plus de 100 Pays"
};

const de: VirtualDidTranslation = {
  "breadcrumb": "Produkte | DID-Portal + Mobile App",
  "heroBadge": "DID-Portal + Mobile App",
  "heroTitle": "Komplette Plattform für DID-Verwaltung & Virtuelle Rufnummern",
  "heroDesc": "Verwalten Sie virtuelle Telefonnummern, eingehende Anrufe und SMS über ein leistungsstarkes DID-Portal. Statten Sie Ihre Kunden mit dedizierten Nummern und einer mobilen App aus, um Anrufe und SMS überall entgegenzunehmen.",
  "getStarted": "Jetzt starten",
  "requestDemo": "Demo anfordern",
  "heroFootnote": "Globale Rufnummern. Lokale Präsenz. Eine einheitliche Plattform.",
  "dashboardPreview": {
    "title": "DID-Portal",
    "liveBadge": "Live",
    "tab1": "Übersicht",
    "tab2": "Meine Nummern",
    "tab3": "Anruf-Routing",
    "tab4": "SMS-Eingang",
    "stat1Label": "Aktive DIDs",
    "stat1Val": "248",
    "stat2Label": "Eingehende Anrufe",
    "stat2Val": "1.842",
    "stat3Label": "Empfangene SMS",
    "stat3Val": "3.126",
    "tableTitle": "Ihre globalen Rufnummern",
    "smsNotificationTitle": "Neue SMS empfangen",
    "smsNotificationBody": "Ihr Termin wurde für 10:30 Uhr bestätigt.",
    "phoneIncomingText": "Eingehender geschäftlicher Anruf",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "über +1 212 555 0198"
  },
  "highlightsHeading": "Ihre globale Rufnummer. Ihre vollständige Kontrolle.",
  "highlights": [
    {
      "title": "Globale DID-Rufnummern"
    },
    {
      "title": "Eingehende Anrufe"
    },
    {
      "title": "SMS-Empfang"
    },
    {
      "title": "Mobile App"
    },
    {
      "title": "Anrufweiterleitung"
    },
    {
      "title": "DID-Inventarverwaltung"
    },
    {
      "title": "Echtzeit-Überwachung"
    }
  ],
  "managementBadge": "DID-Verwaltung",
  "managementTitle": "Verwalten Sie DIDs über ein zentrales Portal",
  "managementSubtitle": "Suchen, buchen, aktivieren, sperren, konfigurieren und überwachen Sie Ihre virtuellen Nummern über ein zentrales Dashboard.",
  "managementChecklistTitle": "DID-Verwaltungsfunktionen",
  "managementChecklist": [
    "Weltweiter DID-Bestand",
    "Länder- & Städteauswahl",
    "Gezielte Rufnummernsuche",
    "Sofortige Bereitstellung (Provisioning)",
    "DID-Aktivierung und Deaktivierung",
    "Flexible Rufnummernzuweisung",
    "Kundenbezogenes DID-Management",
    "Fristen- und Ablaufverwaltung",
    "DID-Preis- und Kostenkontrolle",
    "Nutzungsüberwachung in Echtzeit"
  ],
  "inventoryCard": {
    "title": "Rufnummernbestand",
    "subtitle": "248 Rufnummern über Ihre Kundenkonten hinweg",
    "provisionBtn": "+ DID bereitstellen",
    "searchPlaceholder": "Nummern durchsuchen...",
    "countryFilter": "Alle Länder",
    "statusFilter": "Alle Status",
    "colDid": "DID-NUMMER",
    "colCountry": "LAND / STADT",
    "colCustomer": "KUNDE",
    "colStatus": "STATUS",
    "showingText": "Zeigt 4 von 248 Nummern"
  },
  "callMgmtBadge": "Anrufe überall empfangen",
  "callMgmtTitle": "Leistungsstarkes Management für Eingehende Anrufe",
  "callMgmtSubtitle": "Leiten Sie eingehende Anrufe genau dorthin weiter, wo sie gebraucht werden.",
  "forwardingTitle": "Anrufweiterleitung",
  "forwardingSubtitle": "Anrufe weiterleiten an:",
  "forwardingItems": [
    "Mobilfunknummern",
    "SIP-Konten & Trunks",
    "Browserbasierte Softphones",
    "Call-Center-Mitarbeiter",
    "IVR-Sprachdialogsysteme",
    "Mehrere kombinierte Ziele"
  ],
  "advancedRoutingTitle": "Erweitertes Routing",
  "advancedRoutingItems": [
    "Zeitbasiertes Routing",
    "Länderbasiertes Routing",
    "Anruferbasiertes Routing",
    "Ausfall- und Failover-Routing",
    "Sequenzielles Klingeln",
    "Gleichzeitiges Klingeln auf allen Geräten",
    "Geschäftszeiten-Routing"
  ],
  "journeyCard": {
    "title": "Intelligenter Anruffluss",
    "liveBadge": "Live",
    "step1Title": "Eingehender Anruf",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Geschäftszeiten",
    "step2Val": "Mo-Fr · 09:00–18:00",
    "step3Title": "Support-Team",
    "step3Val": "Gleichzeitiges Klingeln · 3 Agenten",
    "footerText": "Keine Antwort? Sofortige Weiterleitung auf Ihr Smartphone."
  },
  "mobileBadge": "Mobile App für Anrufe & SMS",
  "mobileTitle": "Ihre DID-Nummer immer in der Tasche",
  "mobileSubtitle": "Geben Sie Ihren Mitarbeitern eine dedizierte mobile Anwendung, um geschäftliche Telefonate und SMS direkt auf dem Smartphone zu empfangen.",
  "mobileFooter": "Ihr Unternehmen. Immer dabei.",
  "mobileFeaturesTitle": "App-Funktionen",
  "mobileFeatures": [
    {
      "title": "Eingehende Anrufe",
      "desc": "Empfangen Sie Anrufe auf Ihre DID direkt über die mobile Applikation."
    },
    {
      "title": "SMS-Posteingang",
      "desc": "Erhalten Sie eingehende SMS in einem sicheren, übersichtlichen Posteingang."
    },
    {
      "title": "Anrufverlauf",
      "desc": "Detaillierte Übersicht aller eingehenden, verpassten und angenommenen Telefonate."
    },
    {
      "title": "SMS-Historie",
      "desc": "Jederzeit Zugriff auf frühere Nachrichten und Kundenkonversationen."
    },
    {
      "title": "Push-Benachrichtigungen",
      "desc": "Echtzeit-Meldungen bei neuen Anrufen oder eingehenden SMS-Nachrichten."
    },
    {
      "title": "Multi-DID-Verwaltung",
      "desc": "Verwalten Sie mehrere virtuelle Nummern unter einem einzigen Benutzerkonto."
    },
    {
      "title": "Kontaktverwaltung",
      "desc": "Speichern und organisieren Sie wichtige und häufig gewählte Rufnummern."
    }
  ],
  "smsBadge": "SMS-Empfang leicht gemacht",
  "smsTitle": "Verpassen Sie nie wieder eine wichtige Kundennachricht",
  "smsSubtitle": "Verwandeln Sie Ihre DID in einen voll ausgestatteten SMS-Empfangsendpunkt.",
  "smsPerfectTitle": "Ideal für:",
  "smsPerfectItems": [
    "Kundenservice & technischer Support",
    "Geschäftliche Unternehmenskommunikation",
    "Lead-Generierung & Vertrieb",
    "Terminbestätigungen & Erinnerungen",
    "System- und Servicewarnungen",
    "Kontosicherheit & Verifizierungen",
    "Zwei-Wege-Dialoge"
  ],
  "sampleSms": {
    "badge": "Business SMS · Empfangen",
    "body": "Hallo Jordan, Ihr Termin ist für morgen um 10:30 Uhr bestätigt. Antworten Sie, falls Sie verschieben möchten.",
    "meta": "Heute, 10:24 Uhr · Acme Support"
  },
  "smsDashboard": {
    "title": "SMS-Dashboard",
    "receivingBadge": "Empfang aktiv",
    "todayLabel": "Heute empfangene SMS",
    "todayVal": "3.126 Nachrichten",
    "colSender": "ABSENDER",
    "colDid": "ZIEL-DID",
    "colMessage": "NACHRICHT",
    "colTime": "UHRZEIT",
    "monitorTitle": "Live-Überwachung:",
    "monitorItems": [
      "Eingehende SMS",
      "Absenderrufnummer",
      "Ziel-DID",
      "Vollständiger Nachrichteninhalt",
      "Exakter Zeitstempel",
      "Zugehöriger Kunde / Account",
      "SMS-Gesamtvolumen"
    ]
  },
  "monitoringBadge": "Erweitertes DID-Monitoring",
  "monitoringTitle": "Kennen Sie den Live-Status jeder Rufnummer",
  "monitoringSubtitle": "Behalten Sie den gesamten DID-Bestand in Echtzeit im Blick.",
  "monitoringStats": {
    "title": "DID-Übersicht",
    "liveBadge": "Echtzeit",
    "stat1Label": "Aktive DIDs",
    "stat1Val": "248",
    "stat1Sub": "+12 diesen Monat",
    "stat2Label": "Verfügbar",
    "stat2Val": "64",
    "stat2Sub": "Bereit zur Zuweisung",
    "stat3Label": "Zugewiesen",
    "stat3Val": "184",
    "stat3Sub": "32 Kunden",
    "stat4Label": "Verpasste Anrufe",
    "stat4Val": "18",
    "stat4Sub": "-8% diese Woche",
    "chartTitle": "Sprach- & SMS-Aktivität",
    "chartTimeframe": "Letzte 7 Tage",
    "legend1": "SMS-Volumen",
    "legend2": "Anrufvolumen"
  },
  "operationalViewTitle": "Vollständige operative Transparenz",
  "operationalViewItems": [
    "Aktive DIDs",
    "Verfügbare Nummern im Bestand",
    "Zugewiesene DIDs",
    "Eingehendes Anrufvolumen",
    "Empfangenes SMS-Volumen",
    "Durchschnittliche Gesprächsdauer",
    "Verpasste Anrufe",
    "Nutzungsgrad der Nummern",
    "Verteilung nach Kundenkonten",
    "Umsatz- und Kostenverfolgung"
  ],
  "resellerBadge": "Gebaut für Reseller & Enterprise",
  "resellerTitle": "Starten Sie Ihr eigenes Geschäft mit virtuellen Rufnummern",
  "resellerSubtitle": "Unsere Plattform ist optimiert für:",
  "supportedAudiences": [
    {
      "title": "DID-Reseller & Wiederverkäufer"
    },
    {
      "title": "VoIP- und Telefonieanbieter"
    },
    {
      "title": "Callcenter-Dienstleister"
    },
    {
      "title": "Großunternehmen & Konzerne"
    },
    {
      "title": "UCaaS-Anbieter"
    },
    {
      "title": "CPaaS-Kommunikationsplattformen"
    }
  ],
  "whiteLabelCard": {
    "title": "White-Label-fähig",
    "desc": "Bieten Sie Ihren Kunden ein eigenes Markenportal und eine eigene mobile App, während Sie die zugrundeliegende Sprach- und SMS-Infrastruktur steuern.",
    "brandLabel": "Ihre Marke",
    "portalLabel": "Kundenportal",
    "tab1": "Nummern",
    "tab2": "Anrufe",
    "tab3": "SMS",
    "tagline": "Die Erfahrung Ihrer Kunden. Unsere verlässliche Infrastruktur."
  },
  "ctaBadge": "LASSEN SIE UNS IHR NETZWERK AUFBAUEN",
  "ctaTitle": "Bringen Sie Ihr Unternehmen mit professionellen Telekom-Lösungen voran",
  "ctaSubtitle": "Von intelligentem Voice-Routing und internationaler Terminierung bis hin zu KI-Sprachlösungen und virtuellen Nummern – iNet Global bietet skalierbare Telekommunikationslösungen für klare, verlässliche und globale Verbindungen zu Ihren Kunden.",
  "contactUs": "Kontaktieren Sie uns",
  "ctaTrust1": "Carrier-Grad SLA",
  "ctaTrust2": "Sofortige DID-Bereitstellung",
  "ctaTrust3": "Abdeckung in über 100 Ländern"
};

const ja: VirtualDidTranslation = {
  "breadcrumb": "製品 | DIDポータル + モバイルアプリ",
  "heroBadge": "DIDポータル + モバイルアプリ",
  "heroTitle": "包括的なDID管理＆仮想番号プラットフォーム",
  "heroDesc": "1つの高機能DIDポータルから仮想電話番号、着信通話、SMSを統合管理。顧客に専用番号を提供し、世界中どこからでも通話やSMSを送受信できるモバイルアプリを活用できます。",
  "getStarted": "今すぐ始める",
  "requestDemo": "デモをリクエスト",
  "heroFootnote": "グローバルな番号。ローカルな存在感。単一の統合プラットフォーム。",
  "dashboardPreview": {
    "title": "DIDポータル",
    "liveBadge": "ライブ",
    "tab1": "概要",
    "tab2": "保有番号",
    "tab3": "着信ルーティング",
    "tab4": "SMS受信トレイ",
    "stat1Label": "稼働中DID",
    "stat1Val": "248",
    "stat2Label": "着信通話数",
    "stat2Val": "1,842",
    "stat3Label": "受信SMS数",
    "stat3Val": "3,126",
    "tableTitle": "保有グローバル番号一覧",
    "smsNotificationTitle": "新規SMSを受信しました",
    "smsNotificationBody": "予約が午前10:30に確定しました。",
    "phoneIncomingText": "ビジネス着信中",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "経由番号: +1 212 555 0198"
  },
  "highlightsHeading": "グローバルな番号。あなたの完全なコントロール。",
  "highlights": [
    {
      "title": "世界各国のDID番号"
    },
    {
      "title": "着信通話の制御"
    },
    {
      "title": "SMS双方向受信"
    },
    {
      "title": "専用モバイルアプリ"
    },
    {
      "title": "スマート通話転送"
    },
    {
      "title": "DIDインベントリ管理"
    },
    {
      "title": "リアルタイム監視"
    }
  ],
  "managementBadge": "DID管理機能",
  "managementTitle": "一元化されたポータルからすべてのDIDを集中管理",
  "managementSubtitle": "単一のダッシュボードから仮想番号の検索、プロビジョニング、有効化、一時停止、設定、稼働監視までを完結。",
  "managementChecklistTitle": "DID管理の主要機能",
  "managementChecklist": [
    "グローバルDIDインベントリ",
    "国および都市による絞り込み",
    "番号のリアルタイム検索",
    "即時プロビジョニング発行",
    "DIDの有効化・無効化制御",
    "顧客・ユーザーへの番号割り当て",
    "顧客別DIDポートフォリオ管理",
    "有効期限および更新管理",
    "DID販売価格およびコスト管理",
    "番号利用状況の監視"
  ],
  "inventoryCard": {
    "title": "番号インベントリ詳細",
    "subtitle": "顧客アカウントに紐づく248件の仮想番号",
    "provisionBtn": "+ 新規DIDを発行",
    "searchPlaceholder": "番号を検索...",
    "countryFilter": "すべての国",
    "statusFilter": "すべてのステータス",
    "colDid": "DID番号",
    "colCountry": "国 / 都市",
    "colCustomer": "割り当て顧客",
    "colStatus": "ステータス",
    "showingText": "248件中4件の番号を表示中"
  },
  "callMgmtBadge": "どこでも電話を着信",
  "callMgmtTitle": "高度で柔軟な着信通話ルーティング",
  "callMgmtSubtitle": "着信通話を指定した端末や拠点へ確実にルーティングします。",
  "forwardingTitle": "着信転送先",
  "forwardingSubtitle": "以下の転送先へスムーズに接続:",
  "forwardingItems": [
    "携帯電話番号",
    "SIPアカウントおよびトランク",
    "Webブラウザ上のソフトフォン",
    "コールセンターのオペレーター",
    "IVR自動音声応答システム",
    "複数拠点・端末の同時呼び出し"
  ],
  "advancedRoutingTitle": "高度なルーティングルール",
  "advancedRoutingItems": [
    "時間帯別ルーティング",
    "発信国別ルーティング",
    "発信者番号別ルーティング",
    "障害時自動迂回 (Failover)",
    "順次呼び出し (Sequential)",
    "複数端末の同時呼び出し",
    "営業時間内外の自動切替"
  ],
  "journeyCard": {
    "title": "スマートな着信フロー",
    "liveBadge": "稼働中",
    "step1Title": "着信電話",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "営業時間ルール",
    "step2Val": "月〜金 · 09:00–18:00",
    "step3Title": "サポートチーム",
    "step3Val": "同時呼び出し · オペレーター3名",
    "footerText": "無応答の場合、担当者のスマートフォンへ自動転送されます。"
  },
  "mobileBadge": "通話＆SMS対応モバイルアプリ",
  "mobileTitle": "ポケットの中にDIDビジネスフォンを",
  "mobileSubtitle": "専用のスマートフォンアプリを提供し、社員が外出先でもビジネス電話やSMSを直接受発信できるようにします。",
  "mobileFooter": "あなたのビジネス。いつでもどこでも。",
  "mobileFeaturesTitle": "アプリの主な機能",
  "mobileFeatures": [
    {
      "title": "着信通話の受信",
      "desc": "DID宛ての通話をスマートフォンアプリで高音質に直接着信。"
    },
    {
      "title": "SMS受信トレイ",
      "desc": "安全かつ整理された受信ボックスで顧客からのSMSを受信。"
    },
    {
      "title": "通話履歴の閲覧",
      "desc": "着信、不在着信、応答済み通話の履歴を詳細に確認。"
    },
    {
      "title": "SMS履歴管理",
      "desc": "過去のやり取りやスレッドをいつでも検索・参照可能。"
    },
    {
      "title": "プッシュ通知",
      "desc": "着信やSMSの受信時にスマホ画面へ即座に通知を表示。"
    },
    {
      "title": "複数DIDの切り替え",
      "desc": "1つのアカウントで複数の仮想番号を使い分け可能。"
    },
    {
      "title": "連絡先管理",
      "desc": "頻繁に連絡する取引先や顧客の番号を安全に保存・管理。"
    }
  ],
  "smsBadge": "シンプルなSMS受信システム",
  "smsTitle": "顧客からの重要メッセージを決して見逃さない",
  "smsSubtitle": "お持ちのDID番号を、信頼性の高いSMS受信窓口として活用。",
  "smsPerfectTitle": "最適な活用シーン:",
  "smsPerfectItems": [
    "カスタマーサポートおよび問い合わせ窓口",
    "企業間および取引先とのビジネス連絡",
    "新規見込み客からの相談受付",
    "来店・予約日時の確認通知",
    "サービス障害やメンテナンスの緊急アラート",
    "本人確認・アカウント認証コード受信",
    "双方向のインタラクティブな顧客対話"
  ],
  "sampleSms": {
    "badge": "ビジネスSMS · 受信済み",
    "body": "Jordan様、明日の10:30のご予約が確定しました。日程変更をご希望の場合は本メッセージにご返信ください。",
    "meta": "本日 10:24 AM · Acme サポート"
  },
  "smsDashboard": {
    "title": "SMS管理ダッシュボード",
    "receivingBadge": "受信待機中",
    "todayLabel": "本日の受信SMS総数",
    "todayVal": "3,126 通",
    "colSender": "送信元番号",
    "colDid": "受信DID番号",
    "colMessage": "メッセージ内容",
    "colTime": "受信日時",
    "monitorTitle": "リアルタイム監視項目:",
    "monitorItems": [
      "着信SMSストリーム",
      "送信者の電話番号",
      "受信先端末DID",
      "SMS本文の内容",
      "送受信の日時タイムスタンプ",
      "紐づく顧客および企業アカウント",
      "SMSトラフィック量統計"
    ]
  },
  "monitoringBadge": "高度なDIDモニタリング",
  "monitoringTitle": "すべての番号ステータスと通信量を完全把握",
  "monitoringSubtitle": "保有するすべてのDIDインベントリをリアルタイムに可視化。",
  "monitoringStats": {
    "title": "DID全体サマリー",
    "liveBadge": "リアルタイム",
    "stat1Label": "稼働中DID",
    "stat1Val": "248",
    "stat1Sub": "今月 +12件",
    "stat2Label": "利用可能",
    "stat2Val": "64",
    "stat2Sub": "割当可能",
    "stat3Label": "割当済み",
    "stat3Val": "184",
    "stat3Sub": "32顧客",
    "stat4Label": "不在着信",
    "stat4Val": "18",
    "stat4Sub": "今週 -8%",
    "chartTitle": "音声通話およびSMSトラフィック推移",
    "chartTimeframe": "過去7日間",
    "legend1": "SMS件数",
    "legend2": "着信通話件数"
  },
  "operationalViewTitle": "完全なオペレーション可視化",
  "operationalViewItems": [
    "稼働中DID番号数",
    "在庫として利用可能なDID",
    "顧客に割り当て済みのDID",
    "総着信コール数",
    "受信SMS総数",
    "平均通話時間",
    "放棄呼・不在着信率",
    "番号稼働効率",
    "顧客別リソース配分状況",
    "売上および通信コスト追跡"
  ],
  "resellerBadge": "リセラーおよびエンタープライズ向け",
  "resellerTitle": "独自の仮想番号サービス事業を迅速に立ち上げ",
  "resellerSubtitle": "以下のような事業者様に最適です:",
  "supportedAudiences": [
    {
      "title": "DIDリセラー・再販事業者"
    },
    {
      "title": "VoIP通信キャリア"
    },
    {
      "title": "国際コンタクトセンター"
    },
    {
      "title": "グローバルエンタープライズ"
    },
    {
      "title": "UCaaSクラウド電話事業者"
    },
    {
      "title": "CPaaS・コミュニケーション基盤"
    }
  ],
  "whiteLabelCard": {
    "title": "ホワイトレーベル完全対応",
    "desc": "貴社ブランドのロゴやデザインを適用した顧客用ポータルとモバイルアプリを提供可能。基盤となる音声・SMSインフラはiNet Globalが安全に運用します。",
    "brandLabel": "貴社の独自ブランド",
    "portalLabel": "顧客専用ポータル",
    "tab1": "番号管理",
    "tab2": "通話管理",
    "tab3": "SMS",
    "tagline": "顧客には貴社ブランドの体験を。裏側には当社の強固なインフラを。"
  },
  "ctaBadge": "メッセージング＆音声ネットワークを構築しましょう",
  "ctaTitle": "ビジネス向け通信ソリューションで事業を拡大",
  "ctaSubtitle": "インテリジェントな音声ルーティングや国際終端から、AIボイス、仮想電話番号まで、iNet Globalは世界各地の顧客と確実かつ高品質につながる通信インフラを提供します。",
  "contactUs": "お問い合わせ",
  "ctaTrust1": "通信事業者レベルの厳格なSLA",
  "ctaTrust2": "即時DIDプロビジョニング",
  "ctaTrust3": "世界100カ国以上を網羅するカバー力"
};

const pt: VirtualDidTranslation = {
  "breadcrumb": "Produtos | Portal DID + App Móvel",
  "heroBadge": "Portal DID + App Móvel",
  "heroTitle": "Plataforma Completa de Gestão de DID e Números Virtuais",
  "heroDesc": "Gerencie números virtuais, chamadas recebidas e SMS em um único Portal DID corporativo e potente. Ofereça aos seus clientes números dedicados com aplicativo móvel para receber chamadas e mensagens em qualquer lugar do mundo.",
  "getStarted": "Começar",
  "requestDemo": "Solicitar Demonstração",
  "heroFootnote": "Números globais. Presença local. Uma única plataforma integrada.",
  "dashboardPreview": {
    "title": "Portal DID",
    "liveBadge": "Ao vivo",
    "tab1": "Visão geral",
    "tab2": "Meus números",
    "tab3": "Roteamento",
    "tab4": "Caixa de SMS",
    "stat1Label": "DIDs Ativos",
    "stat1Val": "248",
    "stat2Label": "Chamadas recebidas",
    "stat2Val": "1.842",
    "stat3Label": "SMS recebidos",
    "stat3Val": "3.126",
    "tableTitle": "Seus números globais",
    "smsNotificationTitle": "Novo SMS recebido",
    "smsNotificationBody": "Seu agendamento foi confirmado para as 10:30.",
    "phoneIncomingText": "Chamada corporativa recebida",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "via +1 212 555 0198"
  },
  "highlightsHeading": "Seu Número Global. Seu Controle Total.",
  "highlights": [
    {
      "title": "Números DID Globais"
    },
    {
      "title": "Chamadas Recebidas"
    },
    {
      "title": "Recepção de SMS"
    },
    {
      "title": "Aplicativo Móvel Dedicado"
    },
    {
      "title": "Encaminhamento de Chamadas"
    },
    {
      "title": "Gestão Completa de DID"
    },
    {
      "title": "Monitoramento em Tempo Real"
    }
  ],
  "managementBadge": "Gestão de DID",
  "managementTitle": "Gerencie Todos os DIDs a Partir de um Portal Centralizado",
  "managementSubtitle": "Pesquise, provisione, ative, suspenda, configure e monitore seus números virtuais a partir de um painel unificado.",
  "managementChecklistTitle": "Recursos de Gestão DID",
  "managementChecklist": [
    "Inventário global de DIDs",
    "Seleção por país e cidade",
    "Busca inteligente de números",
    "Provisionamento instantâneo",
    "Ativação e desativação de DID",
    "Atribuição flexível de números",
    "Gestão de DIDs por cliente",
    "Controle de datas de expiração",
    "Gerenciamento de tarifas DID",
    "Monitoramento de uso de números"
  ],
  "inventoryCard": {
    "title": "Inventário de números",
    "subtitle": "248 números ativos nas contas dos clientes",
    "provisionBtn": "+ Provisionar DID",
    "searchPlaceholder": "Pesquisar números...",
    "countryFilter": "Todos os países",
    "statusFilter": "Todos os status",
    "colDid": "NÚMERO DID",
    "colCountry": "PAÍS / CIDADE",
    "colCustomer": "CLIENTE",
    "colStatus": "STATUS",
    "showingText": "Exibindo 4 de 248 números"
  },
  "callMgmtBadge": "Receba Chamadas em Qualquer Lugar",
  "callMgmtTitle": "Gestão Avançada de Chamadas Recebidas",
  "callMgmtSubtitle": "Encaminhe as chamadas recebidas com precisão para os destinos desejados.",
  "forwardingTitle": "Encaminhamento de Chamadas",
  "forwardingSubtitle": "Encaminhar chamadas para:",
  "forwardingItems": [
    "Números de celulares",
    "Contas e ramais SIP",
    "Softphones no navegador web",
    "Agentes de call center",
    "Sistemas de URA (IVR)",
    "Múltiplos destinos simultâneos"
  ],
  "advancedRoutingTitle": "Roteamento Avançado",
  "advancedRoutingItems": [
    "Roteamento por horário",
    "Roteamento baseado no país de origem",
    "Roteamento por identificador de chamada",
    "Roteamento de contingência (Failover)",
    "Toque sequencial de ramais",
    "Toque simultâneo em vários dispositivos",
    "Roteamento por horário comercial"
  ],
  "journeyCard": {
    "title": "Fluxo de chamada inteligente",
    "liveBadge": "Ao vivo",
    "step1Title": "Chamada recebida",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Horário comercial",
    "step2Val": "Seg-Sex · 09:00–18:00",
    "step3Title": "Equipe de suporte",
    "step3Val": "Toque simultâneo · 3 agentes",
    "footerText": "Sem resposta? Encaminhamento automático para o celular."
  },
  "mobileBadge": "App Móvel para Chamadas & SMS",
  "mobileTitle": "Seu Número DID no Seu Bolso",
  "mobileSubtitle": "Ofereça aos seus usuários um aplicativo móvel dedicado para receber chamadas de negócios e SMS diretamente no smartphone.",
  "mobileFooter": "Sua empresa. Sempre com você.",
  "mobileFeaturesTitle": "Recursos do Aplicativo",
  "mobileFeatures": [
    {
      "title": "Chamadas Recebidas",
      "desc": "Receba chamadas para o seu DID diretamente pelo aplicativo móvel."
    },
    {
      "title": "Caixa de Entrada de SMS",
      "desc": "Receba mensagens SMS em uma caixa de entrada segura e organizada."
    },
    {
      "title": "Histórico de Chamadas",
      "desc": "Visualize chamadas recebidas, atendidas e não atendidas."
    },
    {
      "title": "Histórico de SMS",
      "desc": "Acesse facilmente conversas e mensagens anteriores."
    },
    {
      "title": "Notificações Push",
      "desc": "Receba notificações instantâneas na tela quando uma ligação ou SMS chegar."
    },
    {
      "title": "Múltiplos DIDs",
      "desc": "Gerencie vários números virtuais sob uma única conta."
    },
    {
      "title": "Gestão de Contatos",
      "desc": "Salve e organize contatos frequentes de forma prática."
    }
  ],
  "smsBadge": "Recepção de SMS Simplificada",
  "smsTitle": "Nunca Perca uma Mensagem Importante de um Cliente",
  "smsSubtitle": "Transforme seu número DID em um ponto de recebimento de SMS seguro e escalável.",
  "smsPerfectTitle": "Ideal para:",
  "smsPerfectItems": [
    "Atendimento e suporte ao cliente",
    "Comunicação corporativa diária",
    "Captação de leads e vendas",
    "Notificações e confirmações de consultas",
    "Alertas operacionais e de serviço",
    "Códigos de segurança e verificação de contas",
    "Comunicação bidirecional contínua"
  ],
  "sampleSms": {
    "badge": "SMS Corporativo · Recebido",
    "body": "Olá Jordan, seu horário está confirmado para amanhã às 10:30. Responda caso precise reagendar.",
    "meta": "Hoje, 10:24 · Suporte Acme"
  },
  "smsDashboard": {
    "title": "Painel de SMS",
    "receivingBadge": "Recebimento ativo",
    "todayLabel": "SMS recebidos hoje",
    "todayVal": "3.126 mensagens",
    "colSender": "REMETENTE",
    "colDid": "DID DESTINO",
    "colMessage": "MENSAGEM",
    "colTime": "HORA",
    "monitorTitle": "Monitoramento ao vivo:",
    "monitorItems": [
      "SMS recebidos em tempo real",
      "Número do remetente",
      "DID de destino",
      "Conteúdo completo da mensagem",
      "Data e hora com carimbo preciso",
      "Cliente / Conta vinculada",
      "Volume de tráfego de mensagens"
    ]
  },
  "monitoringBadge": "Monitoramento Avançado de DID",
  "monitoringTitle": "Saiba o Status e Volume de Cada Número em Tempo Real",
  "monitoringSubtitle": "Acompanhe todo o seu inventário de DIDs ao vivo com máxima precisão.",
  "monitoringStats": {
    "title": "Visão geral de DID",
    "liveBadge": "Tempo real",
    "stat1Label": "DIDs ativos",
    "stat1Val": "248",
    "stat1Sub": "+12 este mês",
    "stat2Label": "Disponíveis",
    "stat2Val": "64",
    "stat2Sub": "Prontos para atribuir",
    "stat3Label": "Atribuídos",
    "stat3Val": "184",
    "stat3Sub": "32 clientes",
    "stat4Label": "Chamadas perdidas",
    "stat4Val": "18",
    "stat4Sub": "-8% esta semana",
    "chartTitle": "Atividade de Voz e SMS",
    "chartTimeframe": "Últimos 7 dias",
    "legend1": "Volume SMS",
    "legend2": "Volume chamadas"
  },
  "operationalViewTitle": "Visão operacional completa",
  "operationalViewItems": [
    "Total de DIDs ativos",
    "DIDs disponíveis para venda",
    "DIDs alocados a clientes",
    "Volume de chamadas recebidas",
    "Volume de SMS recebidos",
    "Duração média de chamadas",
    "Taxa de chamadas não atendidas",
    "Taxa de utilização dos números",
    "Distribuição por conta de cliente",
    "Acompanhamento de custos e receitas"
  ],
  "resellerBadge": "Criado para Revendedores & Empresas",
  "resellerTitle": "Crie Seu Próprio Negócio de Telefonia e Números Virtuais",
  "resellerSubtitle": "Nossa plataforma atende com perfeição:",
  "supportedAudiences": [
    {
      "title": "Revendedores de DID"
    },
    {
      "title": "Provedores de VoIP"
    },
    {
      "title": "Call centers internacionais"
    },
    {
      "title": "Grandes corporações e empresas"
    },
    {
      "title": "Provedores de UCaaS"
    },
    {
      "title": "Plataformas de comunicação na nuvem"
    }
  ],
  "whiteLabelCard": {
    "title": "Pronto para Marca Branca (White-Label)",
    "desc": "Ofereça aos seus clientes um portal com a identidade visual da sua marca e um aplicativo móvel personalizado, enquanto você controla toda a infraestrutura subjacente de voz e SMS.",
    "brandLabel": "Sua marca",
    "portalLabel": "Portal do cliente",
    "tab1": "Números",
    "tab2": "Chamadas",
    "tab3": "SMS",
    "tagline": "A experiência do seu cliente. Nossa infraestrutura confiável."
  },
  "ctaBadge": "VAMOS CONSTRUIR SUA REDE DE COMUNICAÇÃO",
  "ctaTitle": "Impulsione Seus Negócios com Soluções Corporativas Completas",
  "ctaSubtitle": "Do roteamento de voz inteligente e terminação internacional à IA de voz e números virtuais, a iNet Global oferece soluções escaláveis para conectar sua empresa com clientes em todo o mundo com máxima clareza e confiabilidade.",
  "contactUs": "Fale Conosco",
  "ctaTrust1": "SLA de Nível Operadora Corporativa",
  "ctaTrust2": "Provisionamento Instantâneo de DID",
  "ctaTrust3": "Cobertura em mais de 100 Países"
};

const ru: VirtualDidTranslation = {
  "breadcrumb": "Продукты | Портал DID + Мобильное приложение",
  "heroBadge": "Портал DID + Мобильное приложение",
  "heroTitle": "Полная платформа управления DID и виртуальными номерами",
  "heroDesc": "Управляйте виртуальными телефонными номерами, входящими звонками и SMS через единый мощный портал DID. Предоставьте клиентам выделенные номера с мобильным приложением для приема звонков и сообщений отовсюду.",
  "getStarted": "Начать",
  "requestDemo": "Запросить демо",
  "heroFootnote": "Международные номера. Локальное присутствие. Единая платформа.",
  "dashboardPreview": {
    "title": "Портал DID",
    "liveBadge": "Онлайн",
    "tab1": "Обзор",
    "tab2": "Мои номера",
    "tab3": "Маршрутизация",
    "tab4": "SMS входящие",
    "stat1Label": "Активные DID",
    "stat1Val": "248",
    "stat2Label": "Входящие звонки",
    "stat2Val": "1,842",
    "stat3Label": "Получено SMS",
    "stat3Val": "3,126",
    "tableTitle": "Ваши международные номера",
    "smsNotificationTitle": "Получено новое SMS",
    "smsNotificationBody": "Ваша запись подтверждена на 10:30.",
    "phoneIncomingText": "Входящий деловой звонок",
    "phoneCaller": "Джордан Дэвис",
    "phoneDid": "через +1 212 555 0198"
  },
  "highlightsHeading": "Ваш международный номер. Ваш полный контроль.",
  "highlights": [
    {
      "title": "Международные номера DID"
    },
    {
      "title": "Входящие звонки"
    },
    {
      "title": "Прием SMS"
    },
    {
      "title": "Мобильное приложение"
    },
    {
      "title": "Переадресация звонков"
    },
    {
      "title": "Управление пулом DID"
    },
    {
      "title": "Мониторинг в реальном времени"
    }
  ],
  "managementBadge": "Управление номерами DID",
  "managementTitle": "Управляйте всеми DID из единого централизованного портала",
  "managementSubtitle": "Ищите, подключайте, активируйте, блокируйте, настраивайте и контролируйте виртуальные номера на едином дашборде.",
  "managementChecklistTitle": "Возможности управления DID",
  "managementChecklist": [
    "Глобальный каталог номеров DID",
    "Выбор по стране и городу",
    "Быстрый поиск номеров",
    "Мгновенное подключение (Provisioning)",
    "Активация и деактивация DID",
    "Гибкое назначение номеров клиентам",
    "Управление DID в разрезе клиентов",
    "Контроль сроков действия и продления",
    "Управление тарификацией и ценами DID",
    "Мониторинг объемов использования номеров"
  ],
  "inventoryCard": {
    "title": "Инвентарь номеров",
    "subtitle": "248 номеров на клиентских аккаунтах",
    "provisionBtn": "+ Подключить DID",
    "searchPlaceholder": "Поиск номеров...",
    "countryFilter": "Все страны",
    "statusFilter": "Все статусы",
    "colDid": "НОМЕР DID",
    "colCountry": "СТРАНА / ГОРОД",
    "colCustomer": "КЛИЕНТ",
    "colStatus": "СТАТУС",
    "showingText": "Показано 4 из 248 номеров"
  },
  "callMgmtBadge": "Принимайте звонки где угодно",
  "callMgmtTitle": "Продвинутая маршрутизация входящих вызовов",
  "callMgmtSubtitle": "Направляйте входящие вызовы точно туда, куда вам нужно.",
  "forwardingTitle": "Переадресация звонков",
  "forwardingSubtitle": "Переадресация вызовов на:",
  "forwardingItems": [
    "Мобильные телефоны",
    "SIP-аккаунты и транки",
    "Браузерные софтфоны",
    "Операторов колл-центра",
    "Голосовые меню (IVR)",
    "Несколько направлений одновременно"
  ],
  "advancedRoutingTitle": "Интеллектуальная маршрутизация",
  "advancedRoutingItems": [
    "Маршрутизация по времени суток",
    "Маршрутизация по стране звонящего",
    "Маршрутизация по номеру абонента",
    "Резервная аварийная маршрутизация (Failover)",
    "Последовательный обзвон группы",
    "Одновременный вызов нескольких устройств",
    "Правила для рабочих и нерабочих часов"
  ],
  "journeyCard": {
    "title": "Умный маршрут входящего звонка",
    "liveBadge": "Онлайн",
    "step1Title": "Входящий вызов",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Рабочие часы",
    "step2Val": "Пн-Пт · 09:00–18:00",
    "step3Title": "Группа поддержки",
    "step3Val": "Одновременный вызов · 3 оператора",
    "footerText": "Нет ответа? Автоматический перевод на мобильный телефон."
  },
  "mobileBadge": "Мобильное приложение для звонков и SMS",
  "mobileTitle": "Ваш рабочий DID номер всегда в кармане",
  "mobileSubtitle": "Предоставьте сотрудникам удобное мобильное приложение для приема корпоративных звонков и SMS прямо на личных смартфонах.",
  "mobileFooter": "Ваш бизнес всегда на связи с вами.",
  "mobileFeaturesTitle": "Функции мобильного приложения",
  "mobileFeatures": [
    {
      "title": "Входящие звонки",
      "desc": "Принимайте звонки на ваш номер DID прямо через мобильное приложение."
    },
    {
      "title": "Входящие SMS",
      "desc": "Получайте входящие текстовые сообщения в защищенный и удобный почтовый ящик."
    },
    {
      "title": "Журнал звонков",
      "desc": "Просматривайте подробную историю принятых, пропущенных и набранных номеров."
    },
    {
      "title": "История сообщений",
      "desc": "Удобный доступ ко всей переписке и предыдущим диалогам с клиентами."
    },
    {
      "title": "Push-уведомления",
      "desc": "Мгновенные оповещения на экране блокировки при поступлении звонка или SMS."
    },
    {
      "title": "Несколько номеров DID",
      "desc": "Управляйте несколькими виртуальными номерами под одним профилем."
    },
    {
      "title": "Контакты",
      "desc": "Сохраняйте и группируйте важные деловые контакты клиентов."
    }
  ],
  "smsBadge": "Простой прием SMS",
  "smsTitle": "Не упустите ни одного важного клиентского сообщения",
  "smsSubtitle": "Превратите ваш номер DID в функциональную точку приема текстовых сообщений.",
  "smsPerfectTitle": "Идеально подходит для:",
  "smsPerfectItems": [
    "Службы клиентской поддержки",
    "Внутренних и внешних деловых коммуникаций",
    "Сбора входящих заявок и лидогенерации",
    "Напоминаний и подтверждений записей",
    "Сервисных и аварийных уведомлений",
    "Верификации и безопасности учетных записей",
    "Двусторонней переписки с клиентами"
  ],
  "sampleSms": {
    "badge": "Деловое SMS · Получено",
    "body": "Здравствуйте, Джордан! Ваша запись подтверждена на завтра в 10:30. Ответьте, если нужно перенести.",
    "meta": "Сегодня, 10:24 · Поддержка Acme"
  },
  "smsDashboard": {
    "title": "Панель мониторинга SMS",
    "receivingBadge": "Прием активен",
    "todayLabel": "Получено сообщений сегодня",
    "todayVal": "3,126 сообщений",
    "colSender": "ОТПРАВИТЕЛЬ",
    "colDid": "DID ПОЛУЧАТЕЛЯ",
    "colMessage": "СООБЩЕНИЕ",
    "colTime": "ВРЕМЯ",
    "monitorTitle": "Мониторинг в реальном времени:",
    "monitorItems": [
      "Входящий поток сообщений",
      "Номер телефона отправителя",
      "Целевой номер DID",
      "Полный текст сообщения",
      "Точная дата и время получения",
      "Привязанный клиент или аккаунт",
      "Аналитика объемов переписки"
    ]
  },
  "monitoringBadge": "Расширенный мониторинг номеров DID",
  "monitoringTitle": "Контролируйте состояние и нагрузку каждого номера",
  "monitoringSubtitle": "Отслеживайте весь пул номеров DID и активность абонентов в реальном времени.",
  "monitoringStats": {
    "title": "Сводка по номерам DID",
    "liveBadge": "Реальное время",
    "stat1Label": "Активные DID",
    "stat1Val": "248",
    "stat1Sub": "+12 за месяц",
    "stat2Label": "Доступно",
    "stat2Val": "64",
    "stat2Sub": "Готовы к выдаче",
    "stat3Label": "Выделено",
    "stat3Val": "184",
    "stat3Sub": "32 клиента",
    "stat4Label": "Пропущенные",
    "stat4Val": "18",
    "stat4Sub": "-8% за неделю",
    "chartTitle": "Динамика голосовых вызовов и SMS",
    "chartTimeframe": "За последние 7 дней",
    "legend1": "Объем SMS",
    "legend2": "Объем звонков"
  },
  "operationalViewTitle": "Полная операционная картина",
  "operationalViewItems": [
    "Количество активных номеров",
    "Свободные номера в пуле",
    "Номера, закрепленные за клиентами",
    "Общий объем входящих вызовов",
    "Количество принятых сообщений",
    "Средняя продолжительность вызовов",
    "Количество пропущенных вызовов",
    "Коэффициент утилизации номеров",
    "Распределение по аккаунтам клиентов",
    "Анализ расходов и прибыльности"
  ],
  "resellerBadge": "Создано для реселлеров и корпораций",
  "resellerTitle": "Запустите собственный бизнес по предоставлению виртуальных номеров",
  "resellerSubtitle": "Наша платформа оптимальна для:",
  "supportedAudiences": [
    {
      "title": "Реселлеров и дистрибьюторов DID"
    },
    {
      "title": "Операторов IP-телефонии (VoIP)"
    },
    {
      "title": "Международных контакт-центров"
    },
    {
      "title": "Крупных компаний и холдингов"
    },
    {
      "title": "Провайдеров UCaaS решений"
    },
    {
      "title": "Облачных коммуникационных платформ"
    }
  ],
  "whiteLabelCard": {
    "title": "Поддержка White-Label",
    "desc": "Предоставьте клиентам портал под вашим брендом и мобильное приложение с вашим логотипом, полностью контролируя голосовую и SMS-инфраструктуру на бэкенде.",
    "brandLabel": "Ваш бренд",
    "portalLabel": "Клиентский портал",
    "tab1": "Номера",
    "tab2": "Вызовы",
    "tab3": "SMS",
    "tagline": "Ваш премиальный бренд для клиента. Наша надежная инфраструктура."
  },
  "ctaBadge": "ПОСТРОИМ ВАШУ ТЕЛЕКОМ-СЕТЬ",
  "ctaTitle": "Развивайте бизнес с надежными решениями для связи",
  "ctaSubtitle": "От умной голосовой маршрутизации и международного транзита до голосового искусственного интеллекта и виртуальных номеров — iNet Global обеспечивает стабильную и масштабируемую связь для взаимодействия с клиентами по всему миру.",
  "contactUs": "Связаться с нами",
  "ctaTrust1": "Корпоративный SLA операторского уровня",
  "ctaTrust2": "Мгновенное подключение номеров DID",
  "ctaTrust3": "Покрытие в более чем 100 странах мира"
};

const it: VirtualDidTranslation = {
  "breadcrumb": "Prodotti | Portale DID + App Mobile",
  "heroBadge": "Portale DID + App Mobile",
  "heroTitle": "Piattaforma Completa per la Gestione di DID e Numeri Virtuali",
  "heroDesc": "Gestisci numeri virtuali, chiamate in entrata e SMS da un unico portale DID aziendale sicuro. Offri ai tuoi clienti numeri dedicati con un'applicazione mobile per ricevere telefonate e messaggi ovunque nel mondo.",
  "getStarted": "Inizia Ora",
  "requestDemo": "Richiedi una Demo",
  "heroFootnote": "Numeri globali. Presenza locale. Un'unica piattaforma.",
  "dashboardPreview": {
    "title": "Portale DID",
    "liveBadge": "Live",
    "tab1": "Panoramica",
    "tab2": "I miei numeri",
    "tab3": "Instradamento",
    "tab4": "Posta SMS",
    "stat1Label": "DID attivi",
    "stat1Val": "248",
    "stat2Label": "Chiamate in entrata",
    "stat2Val": "1.842",
    "stat3Label": "SMS ricevuti",
    "stat3Val": "3.126",
    "tableTitle": "I tuoi numeri globali",
    "smsNotificationTitle": "Nuovo SMS ricevuto",
    "smsNotificationBody": "Il tuo appuntamento è confermato per le 10:30.",
    "phoneIncomingText": "Chiamata aziendale in arrivo",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "via +1 212 555 0198"
  },
  "highlightsHeading": "Il Tuo Numero Globale. Il Tuo Controllo Completo.",
  "highlights": [
    {
      "title": "Numeri DID Globali"
    },
    {
      "title": "Chiamate in Entrata"
    },
    {
      "title": "Ricezione SMS"
    },
    {
      "title": "App Mobile Dedicata"
    },
    {
      "title": "Inoltro Chiamate"
    },
    {
      "title": "Gestione Completa DID"
    },
    {
      "title": "Monitoraggio in Tempo Reale"
    }
  ],
  "managementBadge": "Gestione DID",
  "managementTitle": "Gestisci i Tuoi DID da un Portale Centralizzato",
  "managementSubtitle": "Cerca, assegna, attiva, sospendi, configura e monitora i tuoi numeri virtuali da una dashboard intuitiva e unificata.",
  "managementChecklistTitle": "Funzionalità Gestione DID",
  "managementChecklist": [
    "Inventario globale di numeri DID",
    "Selezione per paese e città",
    "Ricerca rapida e intelligente",
    "Attivazione istantanea (Provisioning)",
    "Attivazione e sospensione DID",
    "Assegnazione flessibile dei numeri",
    "Gestione DID per cliente",
    "Monitoraggio scadenze e rinnovi",
    "Controllo listini e costi DID",
    "Monitoraggio utilizzo numerazioni"
  ],
  "inventoryCard": {
    "title": "Inventario numeri",
    "subtitle": "248 numeri distribuiti sugli account cliente",
    "provisionBtn": "+ Attiva nuovo DID",
    "searchPlaceholder": "Cerca numeri...",
    "countryFilter": "Tutti i paesi",
    "statusFilter": "Tutti gli stati",
    "colDid": "NUMERO DID",
    "colCountry": "PAESE / CITTÀ",
    "colCustomer": "CLIENTE",
    "colStatus": "STATO",
    "showingText": "Mostrando 4 di 248 numeri"
  },
  "callMgmtBadge": "Ricevi Chiamate Ovunque",
  "callMgmtTitle": "Gestione Avanzata delle Chiamate in Entrata",
  "callMgmtSubtitle": "Instrada le chiamate in ingresso esattamente verso le destinazioni necessarie.",
  "forwardingTitle": "Inoltro di Chiamata",
  "forwardingSubtitle": "Inoltra le chiamate a:",
  "forwardingItems": [
    "Numeri di cellulare",
    "Account e trunk SIP",
    "Softphone su browser web",
    "Operatori di contact center",
    "Sistemi IVR a risposta vocale",
    "Destinazioni multiple e combinate"
  ],
  "advancedRoutingTitle": "Instradamento Intelligente",
  "advancedRoutingItems": [
    "Instradamento per fasce orarie",
    "Instradamento in base al paese chiamante",
    "Instradamento per mittente (CLI)",
    "Instradamento di backup e ridondanza (Failover)",
    "Squillo sequenziale tra operatori",
    "Squillo simultaneo su più terminali",
    "Gestione orari di apertura e chiusura"
  ],
  "journeyCard": {
    "title": "Flusso di chiamata intelligente",
    "liveBadge": "Live",
    "step1Title": "Chiamata in arrivo",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Orari lavorativi",
    "step2Val": "Lun-Ven · 09:00–18:00",
    "step3Title": "Team di supporto",
    "step3Val": "Squillo simultaneo · 3 operatori",
    "footerText": "Nessuna risposta? Inoltro immediato al cellulare."
  },
  "mobileBadge": "App Mobile per Chiamate e SMS",
  "mobileTitle": "Il Tuo Numero DID Sempre in Tasca",
  "mobileSubtitle": "Offri ai collaboratori un'app per smartphone per ricevere telefonate aziendali e messaggi SMS ovunque si trovino.",
  "mobileFooter": "La tua azienda. Sempre con te.",
  "mobileFeaturesTitle": "Caratteristiche dell'App",
  "mobileFeatures": [
    {
      "title": "Chiamate in Entrata",
      "desc": "Ricevi chiamate al tuo DID direttamente tramite l'app mobile."
    },
    {
      "title": "Posta in Arrivo SMS",
      "desc": "Ricevi i messaggi SMS in una casella di posta protetta e organizzata."
    },
    {
      "title": "Cronologia Chiamate",
      "desc": "Visualizza chiamate in arrivo, perse e risposte con data e ora."
    },
    {
      "title": "Archivio SMS",
      "desc": "Accedi comodamente a messaggi e conversazioni passate con i clienti."
    },
    {
      "title": "Notifiche Push",
      "desc": "Ricevi notifiche istantanee all'arrivo di telefonate o nuovi SMS."
    },
    {
      "title": "Numeri DID Multipli",
      "desc": "Gestisci più numeri virtuali associati a un unico account utente."
    },
    {
      "title": "Rubrica Contatti",
      "desc": "Salva e organizza i contatti più frequenti in modo sicuro."
    }
  ],
  "smsBadge": "Ricezione SMS Semplificata",
  "smsTitle": "Non Perdere Mai Messaggi Cruciali dai Clienti",
  "smsSubtitle": "Trasforma il tuo DID in un canale affidabile e potente per ricevere SMS.",
  "smsPerfectTitle": "Ideale per:",
  "smsPerfectItems": [
    "Assistenza clienti e helpdesk",
    "Comunicazioni aziendali quotidiane",
    "Lead generation e contatto commerciale",
    "Promemoria e conferme di appuntamenti",
    "Avvisi di emergenza e stato servizi",
    "Codici di verifica e sicurezza account",
    "Comunicazioni bidirezionali interattive"
  ],
  "sampleSms": {
    "badge": "SMS Aziendale · Ricevuto",
    "body": "Ciao Jordan, il tuo appuntamento è confermato per domani alle 10:30. Rispondi se desideri riprogrammare.",
    "meta": "Oggi, 10:24 · Supporto Acme"
  },
  "smsDashboard": {
    "title": "Dashboard SMS",
    "receivingBadge": "Ricezione attiva",
    "todayLabel": "SMS ricevuti oggi",
    "todayVal": "3.126 messaggi",
    "colSender": "MITTENTE",
    "colDid": "DID DESTINAZIONE",
    "colMessage": "MESSAGGIO",
    "colTime": "ORA",
    "monitorTitle": "Parametri monitorati:",
    "monitorItems": [
      "Flusso SMS in arrivo",
      "Numero del mittente",
      "DID di destinazione",
      "Testo completo del messaggio",
      "Orario esatto di ricezione",
      "Cliente / Account associato",
      "Volume aggregato di messaggi"
    ]
  },
  "monitoringBadge": "Monitoraggio Avanzato DID",
  "monitoringTitle": "Monitora lo Stato e il Traffico di Ciascun Numero",
  "monitoringSubtitle": "Controlla l'intero inventario di numeri virtuali in tempo reale.",
  "monitoringStats": {
    "title": "Panoramica DID",
    "liveBadge": "Tempo reale",
    "stat1Label": "DID attivi",
    "stat1Val": "248",
    "stat1Sub": "+12 questo mese",
    "stat2Label": "Disponibili",
    "stat2Val": "64",
    "stat2Sub": "Pronti all'uso",
    "stat3Label": "Assegnati",
    "stat3Val": "184",
    "stat3Sub": "32 clienti",
    "stat4Label": "Chiamate perse",
    "stat4Val": "18",
    "stat4Sub": "-8% questa settimana",
    "chartTitle": "Andamento Traffico Voce e SMS",
    "chartTimeframe": "Ultimi 7 giorni",
    "legend1": "Volume SMS",
    "legend2": "Volume chiamate"
  },
  "operationalViewTitle": "Visibilità operativa a 360 gradi",
  "operationalViewItems": [
    "Totale DID attivi",
    "Numeri disponibili a magazzino",
    "DID assegnati ai clienti",
    "Volume chiamate in arrivo",
    "Volume SMS ricevuti",
    "Durata media delle chiamate",
    "Conteggio chiamate senza risposta",
    "Tasso di utilizzo delle linee",
    "Allocazione per account cliente",
    "Controllo costi e marginalità"
  ],
  "resellerBadge": "Progettato per Rivenditori e Aziende",
  "resellerTitle": "Avvia il Tuo Business di Numeri Telefonici Virtuali",
  "resellerSubtitle": "La nostra infrastruttura è adatta a:",
  "supportedAudiences": [
    {
      "title": "Rivenditori di DID"
    },
    {
      "title": "Provider VoIP e telecomunicazioni"
    },
    {
      "title": "Contact center internazionali"
    },
    {
      "title": "Medie e grandi aziende"
    },
    {
      "title": "Provider di soluzioni UCaaS"
    },
    {
      "title": "Piattaforme di comunicazione CPaaS"
    }
  ],
  "whiteLabelCard": {
    "title": "Supporto White-Label Completo",
    "desc": "Offri ai clienti un portale e un'app mobile personalizzati con il tuo brand, mentre gestisci l'infrastruttura di rete con la massima tranquillità.",
    "brandLabel": "Il tuo marchio",
    "portalLabel": "Portale clienti",
    "tab1": "Numeri",
    "tab2": "Chiamate",
    "tab3": "SMS",
    "tagline": "L'esperienza dei tuoi clienti. La nostra solida infrastruttura."
  },
  "ctaBadge": "COSTRUIAMO LA TUA RETE DI COMUNICAZIONE",
  "ctaTitle": "Fai Crescere la Tua Azienda con Soluzioni Professionali",
  "ctaSubtitle": "Dall'instradamento vocale intelligente e dalla terminazione internazionale alla voce AI e ai numeri virtuali, iNet Global offre soluzioni di comunicazione scalabili per connetterti con i clienti in tutto il mondo con chiarezza e affidabilità.",
  "contactUs": "Contattaci",
  "ctaTrust1": "SLA Operatore di Grado Enterprise",
  "ctaTrust2": "Attivazione Immediata di Numeri DID",
  "ctaTrust3": "Copertura Globale in Oltre 100 Paesi"
};

const ko: VirtualDidTranslation = {
  "breadcrumb": "제품 | DID 포털 + 모바일 앱",
  "heroBadge": "DID 포털 + 모바일 앱",
  "heroTitle": "완벽한 DID 관리 및 가상 번호 플랫폼",
  "heroDesc": "하나의 강력한 DID 포털을 통해 전 세계 가상 전화번호, 인바운드 통화 라우팅, SMS를 통합 관리하세요. 스마트폰 전용 모바일 앱을 지원하여 전 세계 어디서든 비즈니스 통화와 SMS를 손쉽게 수신할 수 있습니다.",
  "getStarted": "시작하기",
  "requestDemo": "데모 신청",
  "heroFootnote": "글로벌 번호. 로컬 존재감. 단 하나의 통합 플랫폼.",
  "dashboardPreview": {
    "title": "DID 포털",
    "liveBadge": "실시간",
    "tab1": "개요",
    "tab2": "내 번호",
    "tab3": "통화 라우팅",
    "tab4": "SMS 받은편지함",
    "stat1Label": "활성 DID",
    "stat1Val": "248",
    "stat2Label": "인바운드 통화",
    "stat2Val": "1,842",
    "stat3Label": "수신된 SMS",
    "stat3Val": "3,126",
    "tableTitle": "보유 글로벌 번호 목록",
    "smsNotificationTitle": "새로운 SMS 수신",
    "smsNotificationBody": "고객님의 예약이 오전 10시 30분으로 확정되었습니다.",
    "phoneIncomingText": "비즈니스 인바운드 통화",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "경유 번호: +1 212 555 0198"
  },
  "highlightsHeading": "글로벌 가상 번호. 완벽한 중앙 통제.",
  "highlights": [
    {
      "title": "글로벌 DID 번호"
    },
    {
      "title": "인바운드 통화 수신"
    },
    {
      "title": "양방향 SMS 수신"
    },
    {
      "title": "전용 모바일 앱"
    },
    {
      "title": "지능형 착신 전환"
    },
    {
      "title": "DID 인벤토리 관리"
    },
    {
      "title": "실시간 상태 모니터링"
    }
  ],
  "managementBadge": "DID 관리",
  "managementTitle": "중앙 집중식 포털에서 모든 DID를 효율적으로 관리",
  "managementSubtitle": "단일 대시보드에서 가상 전화번호를 검색, 즉시 개통, 활성화, 일시 중지, 맞춤 설정 및 실시간 모니터링하세요.",
  "managementChecklistTitle": "DID 관리 핵심 기능",
  "managementChecklist": [
    "글로벌 DID 번호 인벤토리",
    "국가 및 도시별 세부 선택",
    "실시간 번호 검색",
    "즉시 개통 (Instant Provisioning)",
    "DID 활성화 및 비활성화 제어",
    "유연한 사용자/고객 번호 할당",
    "고객사별 DID 포트폴리오 관리",
    "사용 기한 및 갱신 관리",
    "DID 요금 및 비용 관리",
    "번호 트래픽 사용량 모니터링"
  ],
  "inventoryCard": {
    "title": "번호 인벤토리 현황",
    "subtitle": "고객 계정에 할당된 248개 가상 번호",
    "provisionBtn": "+ 신규 DID 개통",
    "searchPlaceholder": "번호 검색...",
    "countryFilter": "모든 국가",
    "statusFilter": "모든 상태",
    "colDid": "DID 번호",
    "colCountry": "국가 / 도시",
    "colCustomer": "할당 고객",
    "colStatus": "상태",
    "showingText": "전체 248개 중 4개 표시 중"
  },
  "callMgmtBadge": "어디서나 자유로운 통화 수신",
  "callMgmtTitle": "강력한 인바운드 통화 라우팅 관리",
  "callMgmtSubtitle": "걸려오는 인바운드 전화를 원하는 엔드포인트와 상담원에게 정확하게 전달합니다.",
  "forwardingTitle": "착신 전환 대상",
  "forwardingSubtitle": "다음 대상으로 원활하게 전달:",
  "forwardingItems": [
    "모바일 휴대전화 번호",
    "SIP 트렁크 및 VoIP 계정",
    "웹 브라우저 소프트폰",
    "콜센터 상담원",
    "IVR 자동응답 시스템",
    "다중 복합 목적지 동시 설정"
  ],
  "advancedRoutingTitle": "고급 라우팅 규칙",
  "advancedRoutingItems": [
    "시간대별 맞춤 라우팅",
    "발신 국가 기반 라우팅",
    "발신자 번호(CLI) 기반 라우팅",
    "장애 시 자동 우회 (Failover)",
    "순차적 순환 벨 울림",
    "다중 기기 동시 벨 울림",
    "업무시간 / 야간 라우팅 자동 전환"
  ],
  "journeyCard": {
    "title": "스마트한 인바운드 통화 여정",
    "liveBadge": "실시간",
    "step1Title": "인바운드 전화 수신",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "업무 시간 정책",
    "step2Val": "월-금 · 09:00–18:00",
    "step3Title": "지원 팀 연결",
    "step3Val": "동시 벨 울림 · 상담원 3명",
    "footerText": "무응답 시? 개인 휴대폰으로 즉시 자동 착신 전환."
  },
  "mobileBadge": "통화 및 SMS 전용 모바일 앱",
  "mobileTitle": "주머니 속 비즈니스 DID 전화기",
  "mobileSubtitle": "전용 스마트폰 앱을 제공하여 이동 중이거나 원격 근무 중에도 회사 전화와 SMS를 휴대폰에서 바로 수발신하세요.",
  "mobileFooter": "당신의 비즈니스. 언제나 당신과 함께.",
  "mobileFeaturesTitle": "모바일 앱 주요 기능",
  "mobileFeatures": [
    {
      "title": "인바운드 전화 수신",
      "desc": "DID 번호로 걸려오는 전화를 모바일 앱에서 고음질로 직접 수신."
    },
    {
      "title": "SMS 받은편지함",
      "desc": "안전하고 체계적인 전용 수신함에서 SMS 메시지를 확인."
    },
    {
      "title": "통화 내역 조회",
      "desc": "수신, 부재중, 통화 완료 내역을 한눈에 확인."
    },
    {
      "title": "SMS 대화 이력",
      "desc": "이전 고객 상담 내역과 메시지를 언제든 손쉽게 검색."
    },
    {
      "title": "푸시 알림",
      "desc": "전화나 SMS가 수신되는 즉시 잠금 화면 팝업 알림 제공."
    },
    {
      "title": "다중 DID 번호 관리",
      "desc": "단일 앱 로그인으로 여러 개의 가상 번호를 편리하게 전환 관리."
    },
    {
      "title": "연락처 관리",
      "desc": "자주 연락하는 비즈니스 고객 및 거래처 번호를 안전하게 저장."
    }
  ],
  "smsBadge": "손쉬운 양방향 SMS 수신",
  "smsTitle": "고객의 중요한 메시지를 절대 놓치지 마세요",
  "smsSubtitle": "귀사의 가상 번호(DID)를 강력하고 확장성 있는 SMS 수신 엔드포인트로 활용하세요.",
  "smsPerfectTitle": "다양한 활용 분야:",
  "smsPerfectItems": [
    "고객 지원 및 CS 헬프데스크",
    "기업 간 B2B 비즈니스 소통",
    "잠재 고객 인바운드 문의 접수",
    "예약 및 방문 일정 확인 알림",
    "서비스 긴급 공지 및 시스템 알림",
    "계정 2단계 보안 인증 코드 수신",
    "대화형 양방향 고객 커뮤니케이션"
  ],
  "sampleSms": {
    "badge": "비즈니스 SMS · 수신 완료",
    "body": "안녕하세요 Jordan님, 내일 오전 10:30 예약이 확정되었습니다. 일정 변경을 원하시면 회신해 주세요.",
    "meta": "오늘 10:24 AM · Acme 지원팀"
  },
  "smsDashboard": {
    "title": "SMS 대시보드",
    "receivingBadge": "수신 대기 중",
    "todayLabel": "오늘 수신된 총 SMS",
    "todayVal": "3,126건",
    "colSender": "발신 번호",
    "colDid": "수신 DID",
    "colMessage": "메시지 내용",
    "colTime": "수신 시간",
    "monitorTitle": "실시간 모니터링 항목:",
    "monitorItems": [
      "실시간 인바운드 SMS 스트림",
      "발신자 전화번호",
      "수신 대상 DID 번호",
      "전체 메시지 본문",
      "정확한 날짜 및 타임스탬프",
      "연동된 고객사 / 사용자 계정",
      "SMS 트래픽 총량 분석"
    ]
  },
  "monitoringBadge": "고급 DID 상태 모니터링",
  "monitoringTitle": "모든 번호의 실시간 상태와 트래픽 파악",
  "monitoringSubtitle": "보유 중인 전체 DID 인벤토리를 실시간으로 추적 및 분석합니다.",
  "monitoringStats": {
    "title": "DID 종합 현황",
    "liveBadge": "실시간",
    "stat1Label": "활성 DID",
    "stat1Val": "248",
    "stat1Sub": "이번 달 +12건 증가",
    "stat2Label": "사용 가능",
    "stat2Val": "64",
    "stat2Sub": "즉시 할당 대기",
    "stat3Label": "할당됨",
    "stat3Val": "184",
    "stat3Sub": "32개 고객사",
    "stat4Label": "부재중 전화",
    "stat4Val": "18",
    "stat4Sub": "이번 주 -8% 감소",
    "chartTitle": "음성 및 SMS 트래픽 추이",
    "chartTimeframe": "최근 7일간",
    "legend1": "SMS 처리량",
    "legend2": "인바운드 통화량"
  },
  "operationalViewTitle": "완벽한 운영 통계 뷰",
  "operationalViewItems": [
    "활성 DID 총계",
    "재고로 보유 중인 번호",
    "고객사에 할당된 DID",
    "인바운드 통화량",
    "수신된 SMS 총량",
    "평균 통화 시간",
    "부재중 전화 통계",
    "번호 가동률 분석",
    "고객사별 리소스 배분",
    "수익 및 회선 비용 추적"
  ],
  "resellerBadge": "리셀러 및 엔터프라이즈 맞춤형",
  "resellerTitle": "독자적인 글로벌 가상 번호 비즈니스를 시작하세요",
  "resellerSubtitle": "다음과 같은 기업에 최적화되어 있습니다:",
  "supportedAudiences": [
    {
      "title": "DID 재판매 사업자 (리셀러)"
    },
    {
      "title": "VoIP 인터넷 전화 사업자"
    },
    {
      "title": "글로벌 컨택센터"
    },
    {
      "title": "다국적 대기업"
    },
    {
      "title": "UCaaS 클라우드 솔루션사"
    },
    {
      "title": "CPaaS 통신 플랫폼사"
    }
  ],
  "whiteLabelCard": {
    "title": "화이트 라벨 (White-Label) 완벽 지원",
    "desc": "귀사의 브랜드 로고와 디자인을 적용한 고객 전용 웹 포털과 모바일 앱을 제공하고, 백엔드의 음성 및 메시징 통신 인프라는 iNet Global이 안전하게 운영합니다.",
    "brandLabel": "귀사의 독자 브랜드",
    "portalLabel": "고객 전용 포털",
    "tab1": "번호 관리",
    "tab2": "통화 관리",
    "tab3": "SMS",
    "tagline": "고객에게는 최고의 브랜드 경험을. 뒷받침은 당사의 탄탄한 인프라로."
  },
  "ctaBadge": "귀사의 글로벌 통신 네트워크를 구축하세요",
  "ctaTitle": "기업 맞춤형 통신 솔루션으로 비즈니스를 확장하세요",
  "ctaSubtitle": "지능형 음성 라우팅 및 글로벌 회선 종단부터 AI 음성, 가상 번호에 이르기까지, iNet Global은 기업이 전 세계 고객과 선명하고 신뢰성 있게 소통할 수 있도록 지원합니다.",
  "contactUs": "문의하기",
  "ctaTrust1": "통신사 등급 엔터프라이즈 SLA",
  "ctaTrust2": "즉각적인 DID 개통 (Provisioning)",
  "ctaTrust3": "전 세계 100개국 이상의 광범위한 커버리지"
};

const nl: VirtualDidTranslation = {
  "breadcrumb": "Producten | DID Portaal + Mobiele App",
  "heroBadge": "DID Portaal + Mobiele App",
  "heroTitle": "Complete DID Beheer & Virtuele Nummers Platform",
  "heroDesc": "Beheer virtuele telefoonnummers, inkomende oproepen en SMS via één krachtig DID-portaal. Geef uw klanten speciale nummers met een mobiele app om overal ter wereld oproepen en SMS te ontvangen.",
  "getStarted": "Aan de slag",
  "requestDemo": "Vraag Demo Aan",
  "heroFootnote": "Wereldwijde nummers. Lokale aanwezigheid. Eén platform.",
  "dashboardPreview": {
    "title": "DID Portaal",
    "liveBadge": "Live",
    "tab1": "Overzicht",
    "tab2": "Mijn nummers",
    "tab3": "Oproeproutering",
    "tab4": "SMS inbox",
    "stat1Label": "Actieve DIDs",
    "stat1Val": "248",
    "stat2Label": "Inkomende oproepen",
    "stat2Val": "1.842",
    "stat3Label": "Ontvangen SMS",
    "stat3Val": "3.126",
    "tableTitle": "Uw internationale nummers",
    "smsNotificationTitle": "Nieuwe SMS ontvangen",
    "smsNotificationBody": "Uw afspraak is bevestigd voor 10:30 uur.",
    "phoneIncomingText": "Inkomende zakelijke oproep",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "via +1 212 555 0198"
  },
  "highlightsHeading": "Uw Wereldwijde Nummer. Uw Volledige Controle.",
  "highlights": [
    {
      "title": "Wereldwijde DID-nummers"
    },
    {
      "title": "Inkomende Gesprekken"
    },
    {
      "title": "SMS-ontvangst"
    },
    {
      "title": "Mobiele App"
    },
    {
      "title": "Doorschakelen"
    },
    {
      "title": "DID-beheer"
    },
    {
      "title": "Realtime Monitoring"
    }
  ],
  "managementBadge": "DID Beheer",
  "managementTitle": "Beheer DIDs vanuit één Gecentraliseerd Portaal",
  "managementSubtitle": "Zoek, lever op, activeer, schort op, configureer en bewaak uw virtuele nummers vanuit één intuïtief dashboard.",
  "managementChecklistTitle": "DID Beheerfuncties",
  "managementChecklist": [
    "Wereldwijde DID-inventaris",
    "Selectie op land en stad",
    "Gericht nummers zoeken",
    "Directe oplevering (Provisioning)",
    "DID-activering en deactivering",
    "Flexibele nummertoewijzing",
    "DID-beheer per klantaccount",
    "Vervaldatumbeheer",
    "Prijs- en tariefbeheer van DIDs",
    "Monitoring van nummergebruik"
  ],
  "inventoryCard": {
    "title": "Nummerinventaris",
    "subtitle": "248 nummers verdeeld over uw klantaccounts",
    "provisionBtn": "+ DID Opleveren",
    "searchPlaceholder": "Nummers zoeken...",
    "countryFilter": "Alle landen",
    "statusFilter": "Alle statussen",
    "colDid": "DID NUMMER",
    "colCountry": "LAND / STAD",
    "colCustomer": "KLANT",
    "colStatus": "STATUS",
    "showingText": "Toont 4 van 248 nummers"
  },
  "callMgmtBadge": "Ontvang Oproepen Overal",
  "callMgmtTitle": "Krachtig Beheer van Inkomende Oproepen",
  "callMgmtSubtitle": "Routeer inkomende oproepen precies naar de gewenste bestemmingen.",
  "forwardingTitle": "Oproepdoorschakeling",
  "forwardingSubtitle": "Schakel oproepen door naar:",
  "forwardingItems": [
    "Mobiele nummers",
    "SIP-accounts en trunks",
    "Softphones in webbrowsers",
    "Callcenter-medewerkers",
    "IVR-keuzemenu's",
    "Meerdere gecombineerde bestemmingen"
  ],
  "advancedRoutingTitle": "Geavanceerde Routering",
  "advancedRoutingItems": [
    "Tijdsafhankelijke routering",
    "Routering op basis van herkomstland",
    "Routering op basis van beller",
    "Nood- en failover-routering",
    "Sequentieel belsignaal",
    "Gelijktijdig overgaan op meerdere apparaten",
    "Openingstijden-routering"
  ],
  "journeyCard": {
    "title": "Een slimmere oproepstroom",
    "liveBadge": "Live",
    "step1Title": "Inkomende oproep",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Openingstijden",
    "step2Val": "Ma-Vr · 09:00–18:00",
    "step3Title": "Supportteam",
    "step3Val": "Gelijktijdig overgaan · 3 medewerkers",
    "footerText": "Geen gehoor? Automatisch doorgeschakeld naar mobiel."
  },
  "mobileBadge": "Mobiele App voor Oproepen & SMS",
  "mobileTitle": "Uw DID Altijd op Zak",
  "mobileSubtitle": "Geef gebruikers een speciale mobiele applicatie om zakelijke oproepen en SMS rechtstreeks op hun smartphone te ontvangen.",
  "mobileFooter": "Uw bedrijf. Altijd bereikbaar.",
  "mobileFeaturesTitle": "Functies van de App",
  "mobileFeatures": [
    {
      "title": "Inkomende Oproepen",
      "desc": "Ontvang oproepen naar uw DID rechtstreeks via de mobiele app."
    },
    {
      "title": "SMS Inbox",
      "desc": "Ontvang inkomende SMS in een beveiligde, overzichtelijke inbox."
    },
    {
      "title": "Oproepgeschiedenis",
      "desc": "Bekijk gedetailleerd inkomende, gemiste en beantwoorde oproepen."
    },
    {
      "title": "SMS Geschiedenis",
      "desc": "Krijg op elk moment toegang tot eerdere berichten en klantgesprekken."
    },
    {
      "title": "Pushmeldingen",
      "desc": "Ontvang direct meldingen op uw scherm bij een oproep of SMS."
    },
    {
      "title": "Meerdere DIDs",
      "desc": "Beheer meerdere virtuele nummers binnen één gebruikersaccount."
    },
    {
      "title": "Contactbeheer",
      "desc": "Bewaar en orden veelgebruikte contactnummers eenvoudig."
    }
  ],
  "smsBadge": "Eenvoudig SMS Ontvangen",
  "smsTitle": "Mis Nooit Meer een Belangrijk Klantbericht",
  "smsSubtitle": "Maak van uw DID een krachtig eindpunt voor het ontvangen van SMS.",
  "smsPerfectTitle": "Ideaal voor:",
  "smsPerfectItems": [
    "Klantenservice en support",
    "Zakelijke communicatie",
    "Leadgeneratie en acquisitie",
    "Afspraakbevestigingen en reminders",
    "Systeemberichten en servicemeldingen",
    "Accountverificaties en 2FA",
    "Interactieve tweewegcommunicatie"
  ],
  "sampleSms": {
    "badge": "Zakelijke SMS · Ontvangen",
    "body": "Hallo Jordan, uw afspraak is bevestigd voor morgen om 10:30 uur. Reageer indien u wilt verzetten.",
    "meta": "Vandaag, 10:24 uur · Acme Support"
  },
  "smsDashboard": {
    "title": "SMS Dashboard",
    "receivingBadge": "Ontvangst actief",
    "todayLabel": "Vandaag ontvangen SMS",
    "todayVal": "3.126 berichten",
    "colSender": "AFZENDER",
    "colDid": "BESTEMMING DID",
    "colMessage": "BERICHT",
    "colTime": "TIJD",
    "monitorTitle": "Realtime monitoring:",
    "monitorItems": [
      "Inkomende SMS-stroom",
      "Telefoonnummer afzender",
      "Bestemmings-DID",
      "Volledige berichtinhoud",
      "Exacte datum en tijd",
      "Gekoppelde klant / account",
      "SMS-verkeersstatistieken"
    ]
  },
  "monitoringBadge": "Geavanceerde DID Monitoring",
  "monitoringTitle": "Bewaak de Status en Activiteit van Elk Nummer",
  "monitoringSubtitle": "Houd uw volledige DID-inventaris realtime nauwkeurig in de gaten.",
  "monitoringStats": {
    "title": "DID Overzicht",
    "liveBadge": "Realtime",
    "stat1Label": "Actieve DIDs",
    "stat1Val": "248",
    "stat1Sub": "+12 deze maand",
    "stat2Label": "Beschikbaar",
    "stat2Val": "64",
    "stat2Sub": "Klaar om toe te wijzen",
    "stat3Label": "Toegewezen",
    "stat3Val": "184",
    "stat3Sub": "32 klanten",
    "stat4Label": "Gemiste oproepen",
    "stat4Val": "18",
    "stat4Sub": "-8% deze week",
    "chartTitle": "Spraak- en SMS-activiteit",
    "chartTimeframe": "Laatste 7 dagen",
    "legend1": "SMS-volume",
    "legend2": "Oproepvolume"
  },
  "operationalViewTitle": "Een compleet operationeel overzicht",
  "operationalViewItems": [
    "Totaal actieve DIDs",
    "Beschikbare DIDs in voorraad",
    "Toegewezen nummers aan klanten",
    "Inkomend oproepvolume",
    "Ontvangen SMS-volume",
    "Gemiddelde gespreksduur",
    "Aantal gemiste oproepen",
    "Benuttingsgraad van nummers",
    "Verdeling per klantaccount",
    "Kosten- en opbrengstenoverzicht"
  ],
  "resellerBadge": "Ontworpen voor Resellers & Enterprises",
  "resellerTitle": "Bouw Uw Eigen Virtuele Nummers Business",
  "resellerSubtitle": "Ons platform ondersteunt uitstekend:",
  "supportedAudiences": [
    {
      "title": "DID-resellers & distributeurs"
    },
    {
      "title": "VoIP-telecomaanbieders"
    },
    {
      "title": "Internationale callcenters"
    },
    {
      "title": "Grote ondernemingen"
    },
    {
      "title": "UCaaS-aanbieders"
    },
    {
      "title": "CPaaS-communicatieplatforms"
    }
  ],
  "whiteLabelCard": {
    "title": "Klaar voor White-Label",
    "desc": "Bied uw klanten een portaal en mobiele app onder uw eigen merknaam, terwijl u de onderliggende spraak- en SMS-infrastructuur beheert.",
    "brandLabel": "Uw merk",
    "portalLabel": "Klantportaal",
    "tab1": "Nummers",
    "tab2": "Oproepen",
    "tab3": "SMS",
    "tagline": "De ervaring van uw klant. Onze betrouwbare infrastructuur."
  },
  "ctaBadge": "LATEN WE UW COMMUNICATIENETWERK BOUWEN",
  "ctaTitle": "Laat Uw Bedrijf Groeien met Zakelijke SMS- & Spraakoplossingen",
  "ctaSubtitle": "Van intelligente spraakroutering en internationale terminatie tot AI Voice en virtuele nummers: iNet Global biedt schaalbare communicatieoplossingen waarmee bedrijven helder en betrouwbaar contact leggen met klanten wereldwijd.",
  "contactUs": "Neem contact op",
  "ctaTrust1": "Enterprise Carrier SLA",
  "ctaTrust2": "Directe DID-oplevering",
  "ctaTrust3": "Dekking in meer dan 100 landen"
};

const tr: VirtualDidTranslation = {
  "breadcrumb": "Ürünler | DID Portalı + Mobil Uygulama",
  "heroBadge": "DID Portalı + Mobil Uygulama",
  "heroTitle": "Eksiksiz DID Yönetimi ve Sanal Numara Platformu",
  "heroDesc": "Güçlü bir DID Portalı üzerinden sanal telefon numaralarını, gelen çağrıları ve SMS'leri yönetin. Müşterilerinize her yerden çağrı ve SMS alabilecekleri mobil uygulamalı özel numaralar sağlayın.",
  "getStarted": "Başlayın",
  "requestDemo": "Demo Talep Et",
  "heroFootnote": "Küresel numaralar. Yerel varlık. Tek entegre platform.",
  "dashboardPreview": {
    "title": "DID Portalı",
    "liveBadge": "Canlı",
    "tab1": "Genel Bakış",
    "tab2": "Numaralarım",
    "tab3": "Çağrı Yönlendirme",
    "tab4": "SMS Kutusu",
    "stat1Label": "Aktif DID'ler",
    "stat1Val": "248",
    "stat2Label": "Gelen çağrılar",
    "stat2Val": "1.842",
    "stat3Label": "Alınan SMS",
    "stat3Val": "3.126",
    "tableTitle": "Küresel numaralarınız",
    "smsNotificationTitle": "Yeni SMS alındı",
    "smsNotificationBody": "Randevunuz saat 10:30 için onaylandı.",
    "phoneIncomingText": "Gelen kurumsal çağrı",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "+1 212 555 0198 üzerinden"
  },
  "highlightsHeading": "Küresel Numaranız. Tam Kontrolünüz.",
  "highlights": [
    {
      "title": "Küresel DID Numaraları"
    },
    {
      "title": "Gelen Çağrılar"
    },
    {
      "title": "SMS Alma"
    },
    {
      "title": "Özel Mobil Uygulama"
    },
    {
      "title": "Çağrı Yönlendirme"
    },
    {
      "title": "DID Yönetimi"
    },
    {
      "title": "Gerçek Zamanlı İzleme"
    }
  ],
  "managementBadge": "DID Yönetimi",
  "managementTitle": "Tüm DID'leri Merkezi Bir Portaldan Yönetin",
  "managementSubtitle": "Sanal numaralarınızı tek bir kontrol panelinden arayın, tahsis edin, etkinleştirin, askıya alın, yapılandırın ve izleyin.",
  "managementChecklistTitle": "DID Yönetim Yetenekleri",
  "managementChecklist": [
    "Küresel DID envanteri",
    "Ülke ve şehir seçimi",
    "Gelişmiş numara arama",
    "Anında tahsis (Instant Provisioning)",
    "DID etkinleştirme ve devre dışı bırakma",
    "Esnek numara atama",
    "Müşteri bazlı DID portföy yönetimi",
    "Süre bitimi ve yenileme yönetimi",
    "DID fiyatlandırma kontrolü",
    "Numara kullanım trafiği izleme"
  ],
  "inventoryCard": {
    "title": "Numara envanteri",
    "subtitle": "Müşteri hesaplarınızda 248 numara",
    "provisionBtn": "+ Yeni DID Tahsis Et",
    "searchPlaceholder": "Numara ara...",
    "countryFilter": "Tüm ülkeler",
    "statusFilter": "Tüm durumlar",
    "colDid": "DID NUMARASI",
    "colCountry": "ÜLKE / ŞEHİR",
    "colCustomer": "MÜŞTERİ",
    "colStatus": "DURUM",
    "showingText": "248 numaradan 4'ü gösteriliyor"
  },
  "callMgmtBadge": "Her Yerde Çağrı Alın",
  "callMgmtTitle": "Gelişmiş Gelen Çağrı Yönetimi",
  "callMgmtSubtitle": "Gelen çağrıları tam olarak istediğiniz hedeflere ve cihazlara yönlendirin.",
  "forwardingTitle": "Çağrı Yönlendirme",
  "forwardingSubtitle": "Çağrıları şuraya aktarın:",
  "forwardingItems": [
    "Cep telefonu numaraları",
    "SIP hesapları ve santral hatları",
    "Tarayıcı tabanlı softphone'lar",
    "Çağrı merkezi temsilcileri",
    "IVR sesli yanıt sistemleri",
    "Çoklu ve birleşik hedefler"
  ],
  "advancedRoutingTitle": "Gelişmiş Yönlendirme",
  "advancedRoutingItems": [
    "Zaman bazlı yönlendirme",
    "Arayan ülke bazlı yönlendirme",
    "Arayan numara bazlı yönlendirme",
    "Yedekleme ve kesinti yönlendirmesi (Failover)",
    "Sıralı çaldırma",
    "Aynı anda birden fazla cihazda çaldırma",
    "Mesai saatleri bazlı yönlendirme"
  ],
  "journeyCard": {
    "title": "Akıllı çağrı yolculuğu",
    "liveBadge": "Canlı",
    "step1Title": "Gelen çağrı",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Çalışma saatleri",
    "step2Val": "Pzt-Cum · 09:00–18:00",
    "step3Title": "Destek ekibi",
    "step3Val": "Eşzamanlı çaldırma · 3 temsilci",
    "footerText": "Cevap yok mu? Anında cep telefonunuza yönlendirilir."
  },
  "mobileBadge": "Çağrı ve SMS İçin Mobil Uygulama",
  "mobileTitle": "DID Numaranız Artık Cebinizde",
  "mobileSubtitle": "Kullanıcılarınıza iş telefonlarını ve SMS'lerini doğrudan akıllı telefonlarından alabilmeleri için özel bir mobil uygulama sunun.",
  "mobileFooter": "İşiniz. Her zaman sizinle.",
  "mobileFeaturesTitle": "Uygulama Özellikleri",
  "mobileFeatures": [
    {
      "title": "Gelen Çağrılar",
      "desc": "DID numaranıza gelen çağrıları doğrudan mobil uygulama üzerinden yanıtlayın."
    },
    {
      "title": "SMS Gelen Kutusu",
      "desc": "Gelen SMS mesajlarını güvenli ve düzenli bir gelen kutusunda alın."
    },
    {
      "title": "Çağrı Geçmişi",
      "desc": "Gelen, cevapsız ve yanıtlanan tüm çağrıları detaylarıyla görüntüleyin."
    },
    {
      "title": "SMS Geçmişi",
      "desc": "Önceki mesajlara ve müşteri yazışmalarına kolayca erişin."
    },
    {
      "title": "Anlık Bildirimler",
      "desc": "Yeni bir çağrı veya SMS geldiğinde ekranınıza anında bildirim düşsün."
    },
    {
      "title": "Çoklu DID Yönetimi",
      "desc": "Tek bir kullanıcı hesabından birden fazla sanal numarayı yönetin."
    },
    {
      "title": "Rehber Yönetimi",
      "desc": "Sık iletişim kurulan numaraları güvenle kaydedin ve düzenleyin."
    }
  ],
  "smsBadge": "Kolay ve Hızlı SMS Alımı",
  "smsTitle": "Müşterilerden Gelen Önemli Mesajları Asla Kaçırmayın",
  "smsSubtitle": "DID numaranızı güçlü bir SMS alma noktasına dönüştürün.",
  "smsPerfectTitle": "Şunlar için mükemmeldir:",
  "smsPerfectItems": [
    "Müşteri hizmetleri ve destek",
    "Kurumsal şirket iletişimi",
    "Potansiyel müşteri toplama",
    "Randevu teyitleri ve hatırlatmalar",
    "Hizmet ve sistem uyarıları",
    "Hesap doğrulama ve 2FA kodları",
    "Karşılıklı çift yönlü iletişim"
  ],
  "sampleSms": {
    "badge": "Kurumsal SMS · Alındı",
    "body": "Merhaba Jordan, randevunuz yarın saat 10:30 için onaylandı. Değiştirmek isterseniz yanıtlayın.",
    "meta": "Bugün, 10:24 · Acme Destek"
  },
  "smsDashboard": {
    "title": "SMS Kontrol Paneli",
    "receivingBadge": "Alım aktif",
    "todayLabel": "Bugün alınan toplam SMS",
    "todayVal": "3.126 mesaj",
    "colSender": "GÖNDEREN",
    "colDid": "HEDEF DID",
    "colMessage": "MESAJ",
    "colTime": "SAAT",
    "monitorTitle": "Canlı izleme parametreleri:",
    "monitorItems": [
      "Canlı gelen SMS akışı",
      "Gönderen telefon numarası",
      "Hedef DID numarası",
      "Eksiksiz mesaj içeriği",
      "Hassas tarih ve zaman damgası",
      "İlişkili müşteri / hesap",
      "SMS trafik hacmi"
    ]
  },
  "monitoringBadge": "Gelişmiş DID İzleme",
  "monitoringTitle": "Her Numaranın Durumunu ve Trafiğini Anlık Bilin",
  "monitoringSubtitle": "Tüm DID numara envanterinizi gerçek zamanlı olarak izleyin.",
  "monitoringStats": {
    "title": "DID Genel Görünümü",
    "liveBadge": "Gerçek zamanlı",
    "stat1Label": "Aktif DID'ler",
    "stat1Val": "248",
    "stat1Sub": "Bu ay +12 artış",
    "stat2Label": "Kullanılabilir",
    "stat2Val": "64",
    "stat2Sub": "Atamaya hazır",
    "stat3Label": "Atanmış",
    "stat3Val": "184",
    "stat3Sub": "32 müşteri",
    "stat4Label": "Cevapsız çağrılar",
    "stat4Val": "18",
    "stat4Sub": "Bu hafta -%8 düşüş",
    "chartTitle": "Ses ve SMS Trafiği",
    "chartTimeframe": "Son 7 gün",
    "legend1": "SMS hacmi",
    "legend2": "Gelen çağrı hacmi"
  },
  "operationalViewTitle": "Eksiksiz operasyonel görünüm",
  "operationalViewItems": [
    "Toplam aktif DID'ler",
    "Stokta hazır DID'ler",
    "Müşterilere tahsisli DID'ler",
    "Gelen çağrı hacmi",
    "Alınan SMS hacmi",
    "Ortalama çağrı süresi",
    "Cevapsız çağrı oranları",
    "Numara kullanım verimliliği",
    "Müşteri hesap dağılımı",
    "Gelir ve maliyet takibi"
  ],
  "resellerBadge": "Bayiler ve Büyük Kuruluşlar İçin",
  "resellerTitle": "Kendi Sanal Numara Sağlayıcı İşinizi Kurun",
  "resellerSubtitle": "Platformumuz şunlar için idealdir:",
  "supportedAudiences": [
    {
      "title": "DID bayileri ve satıcıları"
    },
    {
      "title": "VoIP ve telekom operatörleri"
    },
    {
      "title": "Uluslararası çağrı merkezleri"
    },
    {
      "title": "Büyük kurumsal şirketler"
    },
    {
      "title": "UCaaS çözüm sağlayıcıları"
    },
    {
      "title": "Bulut iletişim platformları"
    }
  ],
  "whiteLabelCard": {
    "title": "White-Label Desteği",
    "desc": "Müşterilerinize kendi markanızı taşıyan bir portal ve mobil uygulama sunun; arka plandaki ses ve mesajlaşma altyapısını iNet Global yönetsin.",
    "brandLabel": "Sizin markanız",
    "portalLabel": "Müşteri portalı",
    "tab1": "Numaralar",
    "tab2": "Çağrılar",
    "tab3": "SMS",
    "tagline": "Müşterinizin deneyimi. Bizim güçlü altyapımız."
  },
  "ctaBadge": "İLETİŞİM AĞINIZI BİRLİKTE kURALIM",
  "ctaTitle": "Kurumsal İletişim Çözümleriyle İşinizi Büyütün",
  "ctaSubtitle": "Akıllı ses yönlendirmesinden uluslararası ses sonlandırmaya, Yapay Zeka Ses teknolojisinden sanal numaralara kadar iNet Global, şirketlerin dünya çapındaki müşterileriyle net ve güvenilir bağ kurmasını sağlar.",
  "contactUs": "Bize Ulaşın",
  "ctaTrust1": "Kurumsal Operatör SLA Garantisi",
  "ctaTrust2": "Anında DID Numarası Tahsisi",
  "ctaTrust3": "100'den Fazla Ülkede Geniş Kapsama"
};

const id: VirtualDidTranslation = {
  "breadcrumb": "Produk | Portal DID + Aplikasi Seluler",
  "heroBadge": "Portal DID + Aplikasi Seluler",
  "heroTitle": "Platform Manajemen DID & Nomor Virtual Lengkap",
  "heroDesc": "Kelola nomor telepon virtual, panggilan masuk, dan SMS dari satu Portal DID terpusat yang andal. Berikan pelanggan Anda nomor khusus lengkap dengan aplikasi seluler untuk menerima panggilan dan SMS dari mana saja di dunia.",
  "getStarted": "Mulai Sekarang",
  "requestDemo": "Minta Demo",
  "heroFootnote": "Nomor global. Kehadiran lokal. Satu platform terpadu.",
  "dashboardPreview": {
    "title": "Portal DID",
    "liveBadge": "Langsung",
    "tab1": "Ikhtisar",
    "tab2": "Nomor saya",
    "tab3": "Rute panggilan",
    "tab4": "Kotak masuk SMS",
    "stat1Label": "DID Aktif",
    "stat1Val": "248",
    "stat2Label": "Panggilan masuk",
    "stat2Val": "1.842",
    "stat3Label": "SMS diterima",
    "stat3Val": "3.126",
    "tableTitle": "Daftar nomor global Anda",
    "smsNotificationTitle": "SMS baru diterima",
    "smsNotificationBody": "Janji temu Anda telah dikonfirmasi pukul 10:30.",
    "phoneIncomingText": "Panggilan bisnis masuk",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "via +1 212 555 0198"
  },
  "highlightsHeading": "Nomor Global Anda. Kendali Penuh Anda.",
  "highlights": [
    {
      "title": "Nomor DID Global"
    },
    {
      "title": "Panggilan Masuk"
    },
    {
      "title": "Penerimaan SMS"
    },
    {
      "title": "Aplikasi Seluler"
    },
    {
      "title": "Penerusan Panggilan"
    },
    {
      "title": "Manajemen DID"
    },
    {
      "title": "Pemantauan Waktu Nyata"
    }
  ],
  "managementBadge": "Manajemen DID",
  "managementTitle": "Kelola Semua DID dari Satu Portal Terpusat",
  "managementSubtitle": "Cari, sediakan, aktifkan, tangguhkan, konfigurasikan, dan pantau nomor virtual Anda dari satu dasbor yang intuitif.",
  "managementChecklistTitle": "Fitur Manajemen DID",
  "managementChecklist": [
    "Inventaris nomor DID global",
    "Pilihan negara dan kota lengkap",
    "Pencarian nomor cerdas",
    "Penyediaan instan (Instant Provisioning)",
    "Aktivasi dan penonaktifan DID",
    "Penetapan nomor yang fleksibel",
    "Manajemen DID berbasis akun pelanggan",
    "Manajemen masa berlaku nomor",
    "Kontrol tarif dan harga DID",
    "Pemantauan volume pemakaian nomor"
  ],
  "inventoryCard": {
    "title": "Inventaris nomor",
    "subtitle": "248 nomor tersebar di akun pelanggan Anda",
    "provisionBtn": "+ Sediakan DID Baru",
    "searchPlaceholder": "Cari nomor...",
    "countryFilter": "Semua negara",
    "statusFilter": "Semua status",
    "colDid": "NOMOR DID",
    "colCountry": "NEGARA / KOTA",
    "colCustomer": "PELANGGAN",
    "colStatus": "STATUS",
    "showingText": "Menampilkan 4 dari 248 nomor"
  },
  "callMgmtBadge": "Terima Panggilan di Mana Saja",
  "callMgmtTitle": "Manajemen Panggilan Masuk yang Canggih",
  "callMgmtSubtitle": "Arahkan panggilan masuk persis ke tujuan yang Anda kehendaki.",
  "forwardingTitle": "Penerusan Panggilan",
  "forwardingSubtitle": "Teruskan panggilan ke:",
  "forwardingItems": [
    "Nomor telepon seluler",
    "Akun dan trunk SIP",
    "Softphone berbasis browser",
    "Agen call center",
    "Sistem respon suara interaktif (IVR)",
    "Beberapa tujuan sekaligus"
  ],
  "advancedRoutingTitle": "Perutean Lanjutan",
  "advancedRoutingItems": [
    "Perutean berbasis waktu",
    "Perutean berbasis negara pemanggil",
    "Perutean berbasis ID penelepon",
    "Perutean cadangan otomatis (Failover)",
    "Dering berurutan antar agen",
    "Dering simultan di banyak perangkat",
    "Perutean jam operasional kerja"
  ],
  "journeyCard": {
    "title": "Alur panggilan pintar",
    "liveBadge": "Langsung",
    "step1Title": "Panggilan masuk",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Jam kerja",
    "step2Val": "Sen-Jum · 09:00–18:00",
    "step3Title": "Tim dukungan",
    "step3Val": "Dering bersamaan · 3 agen",
    "footerText": "Tidak ada jawaban? Diteruskan otomatis ke ponsel Anda."
  },
  "mobileBadge": "Aplikasi Seluler untuk Panggilan & SMS",
  "mobileTitle": "Nomor DID Anda Selalu di Saku Anda",
  "mobileSubtitle": "Berikan pengguna Anda aplikasi seluler khusus untuk menerima panggilan bisnis dan SMS langsung di ponsel pintar mereka.",
  "mobileFooter": "Bisnis Anda. Selalu bersama Anda.",
  "mobileFeaturesTitle": "Fitur Aplikasi",
  "mobileFeatures": [
    {
      "title": "Panggilan Masuk",
      "desc": "Terima panggilan ke DID Anda langsung melalui aplikasi seluler."
    },
    {
      "title": "Kotak Masuk SMS",
      "desc": "Terima pesan SMS dalam kotak masuk yang aman dan terorganisasi rapi."
    },
    {
      "title": "Riwayat Panggilan",
      "desc": "Lihat panggilan masuk, tidak terjawab, dan terjawab secara lengkap."
    },
    {
      "title": "Riwayat SMS",
      "desc": "Akses riwayat pesan dan percakapan pelanggan sebelumnya kapan saja."
    },
    {
      "title": "Notifikasi Push",
      "desc": "Dapatkan notifikasi instan saat panggilan atau SMS baru masuk."
    },
    {
      "title": "Banyak Nomor DID",
      "desc": "Kelola beberapa nomor virtual dari satu akun pengguna."
    },
    {
      "title": "Manajemen Kontak",
      "desc": "Simpan dan kelompokkan nomor pelanggan penting dengan mudah."
    }
  ],
  "smsBadge": "Penerimaan SMS Sangat Mudah",
  "smsTitle": "Jangan Lewatkan Pesan Penting dari Pelanggan",
  "smsSubtitle": "Ubah nomor DID Anda menjadi titik akhir penerimaan SMS yang handal.",
  "smsPerfectTitle": "Sangat cocok untuk:",
  "smsPerfectItems": [
    "Dukungan dan layanan pelanggan",
    "Komunikasi operasional bisnis",
    "Pengumpulan prospek dan lead",
    "Notifikasi dan konfirmasi janji temu",
    "Pemberitahuan darurat dan sistem",
    "Verifikasi akun dan kode OTP",
    "Komunikasi interaktif dua arah"
  ],
  "sampleSms": {
    "badge": "SMS Bisnis · Diterima",
    "body": "Halo Jordan, janji temu Anda telah dikonfirmasi besok pukul 10:30. Balas jika Anda perlu menjadwal ulang.",
    "meta": "Hari ini, 10:24 · Dukungan Acme"
  },
  "smsDashboard": {
    "title": "Dasbor SMS",
    "receivingBadge": "Penerimaan aktif",
    "todayLabel": "SMS masuk hari ini",
    "todayVal": "3.126 pesan",
    "colSender": "PENGIRIM",
    "colDid": "DID TUJUAN",
    "colMessage": "PESAN",
    "colTime": "WAKTU",
    "monitorTitle": "Pantau langsung:",
    "monitorItems": [
      "Aliran SMS masuk",
      "Nomor pengirim",
      "Nomor DID tujuan",
      "Isi pesan lengkap",
      "Waktu dan tanggal presisi",
      "Pelanggan / Akun terkait",
      "Statistik volume SMS"
    ]
  },
  "monitoringBadge": "Pemantauan DID Tingkat Lanjut",
  "monitoringTitle": "Ketahui Status dan Trafik Setiap Nomor secara Waktu Nyata",
  "monitoringSubtitle": "Pantau seluruh inventaris DID dan volume panggilan Anda secara langsung.",
  "monitoringStats": {
    "title": "Ikhtisar DID",
    "liveBadge": "Waktu nyata",
    "stat1Label": "DID aktif",
    "stat1Val": "248",
    "stat1Sub": "+12 bulan ini",
    "stat2Label": "Tersedia",
    "stat2Val": "64",
    "stat2Sub": "Siap ditetapkan",
    "stat3Label": "Ditetapkan",
    "stat3Val": "184",
    "stat3Sub": "32 pelanggan",
    "stat4Label": "Panggilan terlewat",
    "stat4Val": "18",
    "stat4Sub": "-8% minggu ini",
    "chartTitle": "Aktivitas Suara & SMS",
    "chartTimeframe": "7 hari terakhir",
    "legend1": "Volume SMS",
    "legend2": "Volume panggilan"
  },
  "operationalViewTitle": "Visibilitas operasional menyeluruh",
  "operationalViewItems": [
    "Total DID aktif",
    "DID tersedia dalam stok",
    "DID yang dialokasikan ke pelanggan",
    "Volume panggilan masuk",
    "Volume SMS diterima",
    "Rata-rata durasi panggilan",
    "Statistik panggilan terlewat",
    "Tingkat utilisasi nomor",
    "Alokasi per akun pelanggan",
    "Pelacakan pendapatan dan biaya"
  ],
  "resellerBadge": "Dirancang untuk Reseller & Korporasi",
  "resellerTitle": "Bangun Bisnis Penyedia Nomor Virtual Anda Sendiri",
  "resellerSubtitle": "Platform kami sangat ideal untuk:",
  "supportedAudiences": [
    {
      "title": "Reseller nomor DID"
    },
    {
      "title": "Penyedia VoIP dan telekomunikasi"
    },
    {
      "title": "Pusat kontak (Call center)"
    },
    {
      "title": "Perusahaan besar & korporasi"
    },
    {
      "title": "Penyedia solusi UCaaS"
    },
    {
      "title": "Platform komunikasi cloud (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Mendukung Penuh White-Label",
    "desc": "Berikan pelanggan Anda portal dengan merek Anda sendiri dan aplikasi seluler bermerek, sementara Anda mengelola infrastruktur suara dan SMS di belakang layar.",
    "brandLabel": "Merek Anda",
    "portalLabel": "Portal pelanggan",
    "tab1": "Nomor",
    "tab2": "Panggilan",
    "tab3": "SMS",
    "tagline": "Pengalaman pelanggan Anda. Infrastruktur terpercaya kami."
  },
  "ctaBadge": "MARI BANGUN JARINGAN KOMUNIKASI BISNIS ANDA",
  "ctaTitle": "Kembangkan Bisnis Anda dengan Solusi Komunikasi Andal",
  "ctaSubtitle": "Dari perutean suara cerdas dan terminasi internasional hingga AI Voice dan nomor virtual, iNet Global menyediakan solusi telekomunikasi berskala besar yang menghubungkan bisnis dengan pelanggan secara jelas, aman, dan efisien.",
  "contactUs": "Hubungi Kami",
  "ctaTrust1": "SLA Operator Tingkat Enterprise",
  "ctaTrust2": "Penyediaan Nomor DID Instan",
  "ctaTrust3": "Cakupan di Lebih dari 100 Negara"
};

const vi: VirtualDidTranslation = {
  "breadcrumb": "Sản phẩm | Cổng DID + Ứng dụng Di động",
  "heroBadge": "Cổng DID + Ứng dụng Di động",
  "heroTitle": "Nền Tảng Quản Lý Đầu Số DID & Số Ảo Toàn Diện",
  "heroDesc": "Quản lý số điện thoại ảo, cuộc gọi đến và tin nhắn SMS từ một Cổng DID tập trung mạnh mẽ. Cung cấp cho khách hàng các đầu số chuyên dụng kèm ứng dụng di động để nhận cuộc gọi và tin nhắn mọi lúc mọi nơi.",
  "getStarted": "Bắt Đầu",
  "requestDemo": "Yêu Cầu Demo",
  "heroFootnote": "Đầu số toàn cầu. Hiện diện nội địa. Một nền tảng duy nhất.",
  "dashboardPreview": {
    "title": "Cổng DID",
    "liveBadge": "Trực tiếp",
    "tab1": "Tổng quan",
    "tab2": "Số của tôi",
    "tab3": "Định tuyến cuộc gọi",
    "tab4": "Hộp thư SMS",
    "stat1Label": "DID hoạt động",
    "stat1Val": "248",
    "stat2Label": "Cuộc gọi đến",
    "stat2Val": "1.842",
    "stat3Label": "SMS đã nhận",
    "stat3Val": "3.126",
    "tableTitle": "Danh sách đầu số quốc tế của bạn",
    "smsNotificationTitle": "Tin nhắn SMS mới",
    "smsNotificationBody": "Lịch hẹn của bạn đã được xác nhận lúc 10:30 sáng.",
    "phoneIncomingText": "Cuộc gọi doanh nghiệp đến",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "qua số +1 212 555 0198"
  },
  "highlightsHeading": "Đầu Số Toàn Cầu Của Bạn. Toàn Quyền Kiểm Soát.",
  "highlights": [
    {
      "title": "Đầu Số DID Toàn Cầu"
    },
    {
      "title": "Tiếp Nhận Cuộc Gọi Đến"
    },
    {
      "title": "Nhận Tin Nhắn SMS"
    },
    {
      "title": "Ứng Dụng Di Động"
    },
    {
      "title": "Chuyển Tiếp Cuộc Gọi"
    },
    {
      "title": "Quản Lý Kho Số DID"
    },
    {
      "title": "Giám Sát Thời Gian Thực"
    }
  ],
  "managementBadge": "Quản Lý Kho DID",
  "managementTitle": "Quản Lý Tất Cả DID Từ Một Cổng Thông Tin Tập Trung",
  "managementSubtitle": "Tìm kiếm, cấp phát, kích hoạt, tạm dừng, cấu hình và giám sát các số ảo của bạn từ một bảng điều khiển duy nhất.",
  "managementChecklistTitle": "Tính Năng Quản Lý DID",
  "managementChecklist": [
    "Kho số DID toàn cầu",
    "Lựa chọn theo quốc gia và thành phố",
    "Tìm kiếm số thông minh",
    "Cấp phát số tức thì (Instant Provisioning)",
    "Kích hoạt và tạm ngưng DID",
    "Phân bổ số linh hoạt cho khách hàng",
    "Quản lý DID theo từng tài khoản khách",
    "Quản lý thời hạn và gia hạn số",
    "Kiểm soát cước phí và bảng giá DID",
    "Giám sát lưu lượng sử dụng số"
  ],
  "inventoryCard": {
    "title": "Kho số hiện có",
    "subtitle": "248 số thuộc các tài khoản khách hàng",
    "provisionBtn": "+ Cấp phát DID mới",
    "searchPlaceholder": "Tìm kiếm số...",
    "countryFilter": "Tất cả quốc gia",
    "statusFilter": "Tất cả trạng thái",
    "colDid": "SỐ DID",
    "colCountry": "QUỐC GIA / THÀNH PHỐ",
    "colCustomer": "KHÁCH HÀNG",
    "colStatus": "TRẠNG THÁI",
    "showingText": "Hiển thị 4 trên tổng số 248 số"
  },
  "callMgmtBadge": "Nhận Cuộc Gọi Bất Cứ Đâu",
  "callMgmtTitle": "Quản Lý Định Tuyến Cuộc Gọi Đến Mạnh Mẽ",
  "callMgmtSubtitle": "Định tuyến cuộc gọi đến chính xác đến các điểm đích mà bạn mong muốn.",
  "forwardingTitle": "Chuyển Tiếp Cuộc Gọi",
  "forwardingSubtitle": "Chuyển tiếp cuộc gọi đến:",
  "forwardingItems": [
    "Số điện thoại di động",
    "Tài khoản và trung kế SIP",
    "Softphone trên trình duyệt web",
    "Điện thoại viên tổng đài",
    "Hệ thống trả lời tự động IVR",
    "Nhiều đích đến đồng thời"
  ],
  "advancedRoutingTitle": "Định Tuyến Nâng Cao",
  "advancedRoutingItems": [
    "Định tuyến theo khung giờ",
    "Định tuyến theo quốc gia gọi đến",
    "Định tuyến theo số người gọi",
    "Định tuyến dự phòng khi có sự cố (Failover)",
    "Đổ chuông tuần tự",
    "Đổ chuông đồng thời nhiều thiết bị",
    "Định tuyến giờ làm việc / ngoài giờ"
  ],
  "journeyCard": {
    "title": "Quy trình cuộc gọi thông minh",
    "liveBadge": "Trực tiếp",
    "step1Title": "Cuộc gọi đến",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Giờ làm việc",
    "step2Val": "T2-T6 · 09:00–18:00",
    "step3Title": "Đội ngũ hỗ trợ",
    "step3Val": "Đổ chuông đồng thời · 3 nhân viên",
    "footerText": "Không ai trả lời? Tự động chuyển tiếp vào di động của bạn."
  },
  "mobileBadge": "Ứng Dụng Di Động Cho Cuộc Gọi & SMS",
  "mobileTitle": "Số DID Doanh Nghiệp Luôn Trong Túi Bạn",
  "mobileSubtitle": "Cung cấp cho người dùng ứng dụng di động chuyên dụng để tiếp nhận cuộc gọi kinh doanh và tin nhắn SMS trực tiếp trên điện thoại thông minh.",
  "mobileFooter": "Doanh nghiệp của bạn. Luôn đồng hành cùng bạn.",
  "mobileFeaturesTitle": "Tính Năng Ứng Dụng",
  "mobileFeatures": [
    {
      "title": "Cuộc Gọi Đến",
      "desc": "Nhận cuộc gọi đến số DID trực tiếp qua ứng dụng di động."
    },
    {
      "title": "Hộp Thư SMS",
      "desc": "Nhận tin nhắn SMS trong hộp thư đến an toàn và được sắp xếp khoa học."
    },
    {
      "title": "Lịch Sử Cuộc Gọi",
      "desc": "Xem đầy đủ danh sách cuộc gọi đến, cuộc gọi nhỡ và đã trả lời."
    },
    {
      "title": "Lịch Sử SMS",
      "desc": "Dễ dàng tra cứu các tin nhắn và cuộc trò chuyện trước đây."
    },
    {
      "title": "Thông Báo Đẩy",
      "desc": "Nhận thông báo tức thì ngay khi có cuộc gọi hoặc SMS mới gửi đến."
    },
    {
      "title": "Quản Lý Nhiều DID",
      "desc": "Quản lý đồng thời nhiều số ảo chỉ từ một tài khoản duy nhất."
    },
    {
      "title": "Quản Lý Danh Bạ",
      "desc": "Lưu trữ và phân loại các liên hệ thường xuyên một cách tiện lợi."
    }
  ],
  "smsBadge": "Tiếp Nhận SMS Dễ Dàng",
  "smsTitle": "Không Bao Giờ Bỏ Lỡ Tin Nhắn Khách Hàng Quan Trọng",
  "smsSubtitle": "Biến đầu số DID của bạn thành điểm tiếp nhận tin nhắn SMS đáng tin cậy.",
  "smsPerfectTitle": "Rất phù hợp cho:",
  "smsPerfectItems": [
    "Chăm sóc khách hàng và hỗ trợ kỹ thuật",
    "Giao tiếp kinh doanh nội bộ và đối tác",
    "Thu thập thông tin khách hàng tiềm năng",
    "Thông báo và xác nhận lịch hẹn",
    "Cảnh báo hệ thống và thông báo dịch vụ",
    "Mã xác thực OTP và bảo mật tài khoản",
    "Giao tiếp tương tác hai chiều"
  ],
  "sampleSms": {
    "badge": "SMS Doanh nghiệp · Đã nhận",
    "body": "Xin chào Jordan, lịch hẹn của bạn vào ngày mai lúc 10:30 sáng đã được xác nhận. Vui lòng phản hồi nếu muốn đổi lịch.",
    "meta": "Hôm nay, 10:24 · Hỗ trợ Acme"
  },
  "smsDashboard": {
    "title": "Bảng Điều Khiển SMS",
    "receivingBadge": "Đang tiếp nhận",
    "todayLabel": "Tổng SMS nhận hôm nay",
    "todayVal": "3.126 tin nhắn",
    "colSender": "NGƯỜI GỬI",
    "colDid": "DID ĐÍCH",
    "colMessage": "NỘI DUNG",
    "colTime": "THỜI GIAN",
    "monitorTitle": "Theo dõi trực tiếp:",
    "monitorItems": [
      "Luồng tin nhắn SMS đến",
      "Số điện thoại người gửi",
      "Số DID tiếp nhận",
      "Nội dung tin nhắn đầy đủ",
      "Dấu thời gian chính xác",
      "Khách hàng / Tài khoản tương ứng",
      "Thống kê lưu lượng SMS"
    ]
  },
  "monitoringBadge": "Giám Sát DID Nâng Cao",
  "monitoringTitle": "Nắm Bắt Trạng Thái và Lưu Lượng Từng Số Theo Thời Gian Thực",
  "monitoringSubtitle": "Giám sát toàn bộ kho số DID của bạn trực tiếp 24/7.",
  "monitoringStats": {
    "title": "Tổng quan kho số DID",
    "liveBadge": "Thời gian thực",
    "stat1Label": "DID hoạt động",
    "stat1Val": "248",
    "stat1Sub": "+12 số trong tháng này",
    "stat2Label": "Số sẵn sàng",
    "stat2Val": "64",
    "stat2Sub": "Sẵn sàng phân bổ",
    "stat3Label": "Đã phân bổ",
    "stat3Val": "184",
    "stat3Sub": "32 khách hàng",
    "stat4Label": "Cuộc gọi nhỡ",
    "stat4Val": "18",
    "stat4Sub": "-8% tuần này",
    "chartTitle": "Lưu lượng Thoại & SMS",
    "chartTimeframe": "7 ngày qua",
    "legend1": "Lưu lượng SMS",
    "legend2": "Lưu lượng cuộc gọi"
  },
  "operationalViewTitle": "Bức tranh vận hành toàn diện",
  "operationalViewItems": [
    "Tổng số DID đang hoạt động",
    "Số DID còn trống trong kho",
    "Số DID đã giao cho khách hàng",
    "Lưu lượng cuộc gọi đến",
    "Tổng số tin nhắn SMS đã nhận",
    "Thời lượng đàm thoại trung bình",
    "Tỷ lệ cuộc gọi nhỡ",
    "Hiệu suất sử dụng đầu số",
    "Phân bổ tài nguyên theo khách hàng",
    "Theo dõi doanh thu và chi phí"
  ],
  "resellerBadge": "Thiết Kế Cho Đại Lý & Doanh Nghiệp Lớn",
  "resellerTitle": "Khởi Tạo Doanh Nghiệp Cung Cấp Số Ảo Của Riêng Bạn",
  "resellerSubtitle": "Nền tảng của chúng tôi là giải pháp hoàn hảo cho:",
  "supportedAudiences": [
    {
      "title": "Đại lý phân phối số DID"
    },
    {
      "title": "Nhà cung cấp dịch vụ VoIP"
    },
    {
      "title": "Trung tâm chăm sóc khách hàng (Contact Center)"
    },
    {
      "title": "Các tập đoàn và doanh nghiệp lớn"
    },
    {
      "title": "Nhà cung cấp giải pháp UCaaS"
    },
    {
      "title": "Nền tảng truyền thông đám mây (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Hỗ Trợ White-Label Hoàn Toàn",
    "desc": "Cung cấp cho khách hàng cổng thông tin mang thương hiệu của bạn và ứng dụng di động tùy biến, trong khi bạn quản lý toàn bộ hạ tầng thoại và tin nhắn bên dưới.",
    "brandLabel": "Thương hiệu của bạn",
    "portalLabel": "Cổng thông tin khách hàng",
    "tab1": "Kho số",
    "tab2": "Cuộc gọi",
    "tab3": "Tin nhắn",
    "tagline": "Trải nghiệm thương hiệu của bạn. Hạ tầng tin cậy của chúng tôi."
  },
  "ctaBadge": "HÃY CÙNG XÂY DỰNG MẠNG LƯỚI VIỄN THÔNG DOANH NGHIỆP",
  "ctaTitle": "Phát Triển Doanh Nghiệp Với Giải Pháp Viễn Thông Toàn Cầu",
  "ctaSubtitle": "Từ định tuyến thoại thông minh và chuyển tiếp quốc tế đến AI Voice và số ảo, iNet Global cung cấp các giải pháp liên lạc linh hoạt giúp doanh nghiệp kết nối với khách hàng rõ ràng, an toàn và hiệu quả trên khắp thế giới.",
  "contactUs": "Liên Hệ Chúng Tôi",
  "ctaTrust1": "Cam kết SLA Cấp Nhà Mạng",
  "ctaTrust2": "Cấp Phát Đầu Số DID Tức Thì",
  "ctaTrust3": "Vùng Phủ Sóng Trên 100+ Quốc Gia"
};

const pl: VirtualDidTranslation = {
  "breadcrumb": "Produkty | Portal DID + Aplikacja Mobilna",
  "heroBadge": "Portal DID + Aplikacja Mobilna",
  "heroTitle": "Kompleksowa Platforma Zarządzania DID i Numerami Wirtualnymi",
  "heroDesc": "Zarządzaj wirtualnymi numerami telefonów, połączeniami przychodzącymi i SMS-ami z poziomu jednego potężnego Portalu DID. Zapewnij swoim klientom dedykowane numery z aplikacją mobilną do odbierania połączeń i wiadomości z dowolnego miejsca.",
  "getStarted": "Rozpocznij",
  "requestDemo": "Poproś o Demo",
  "heroFootnote": "Numery globalne. Obecność lokalna. Jedna spójna platforma.",
  "dashboardPreview": {
    "title": "Portal DID",
    "liveBadge": "Na żywo",
    "tab1": "Przegląd",
    "tab2": "Moje numery",
    "tab3": "Routing połączeń",
    "tab4": "Skrzynka SMS",
    "stat1Label": "Aktywne DID",
    "stat1Val": "248",
    "stat2Label": "Połączenia przychodzące",
    "stat2Val": "1 842",
    "stat3Label": "Odebrane SMS",
    "stat3Val": "3 126",
    "tableTitle": "Twoje międzynarodowe numery",
    "smsNotificationTitle": "Otrzymano nowy SMS",
    "smsNotificationBody": "Twoje spotkanie zostało potwierdzone na godzinę 10:30.",
    "phoneIncomingText": "Przychodzące połączenie biznesowe",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "przez +1 212 555 0198"
  },
  "highlightsHeading": "Twój Globalny Numer. Twoja Pełna Kontrola.",
  "highlights": [
    {
      "title": "Globalne Numery DID"
    },
    {
      "title": "Połączenia Przychodzące"
    },
    {
      "title": "Odbieranie SMS-ów"
    },
    {
      "title": "Aplikacja Mobilna"
    },
    {
      "title": "Przekierowanie Połączeń"
    },
    {
      "title": "Zarządzanie Numeracją DID"
    },
    {
      "title": "Monitoring w Czasie Rzeczywistym"
    }
  ],
  "managementBadge": "Zarządzanie DID",
  "managementTitle": "Zarządzaj Wszystkimi Numerami DID z Jednego Portalu",
  "managementSubtitle": "Wyszukuj, przydzielaj, aktywuj, zawieszaj, konfiguruj i monitoruj numery wirtualne z jednego intuicyjnego panelu.",
  "managementChecklistTitle": "Funkcje Zarządzania DID",
  "managementChecklist": [
    "Globalny katalog numerów DID",
    "Wybór według kraju i miasta",
    "Zaawansowane wyszukiwanie numerów",
    "Natychmiastowe uruchomienie (Provisioning)",
    "Aktywacja i dezaktywacja numerów",
    "Elastyczne przypisywanie numerów",
    "Zarządzanie DID wg kont klientów",
    "Kontrola dat ważności i odnowień",
    "Zarządzanie cennikami i kosztami DID",
    "Monitoring wykorzystania numerów"
  ],
  "inventoryCard": {
    "title": "Zasoby numerów",
    "subtitle": "248 numerów na kontach Twoich klientów",
    "provisionBtn": "+ Aktywuj nowy DID",
    "searchPlaceholder": "Szukaj numerów...",
    "countryFilter": "Wszystkie kraje",
    "statusFilter": "Wszystkie statusy",
    "colDid": "NUMER DID",
    "colCountry": "KRAJ / MIASTO",
    "colCustomer": "KLIENT",
    "colStatus": "STATUS",
    "showingText": "Wyświetlanie 4 z 248 numerów"
  },
  "callMgmtBadge": "Odbieraj Połączenia Gdziekolwiek Jesteś",
  "callMgmtTitle": "Zaawansowane Zarządzanie Połączeniami Przychodzącymi",
  "callMgmtSubtitle": "Kieruj połączenia przychodzące dokładnie tam, gdzie są potrzebne.",
  "forwardingTitle": "Przekierowanie Połączeń",
  "forwardingSubtitle": "Przekierowuj połączenia na:",
  "forwardingItems": [
    "Numery telefonów komórkowych",
    "Konta i trunki SIP",
    "Softphony w przeglądarce",
    "Konsultantów call center",
    "Systemy menu głosowego (IVR)",
    "Wiele miejsc docelowych jednocześnie"
  ],
  "advancedRoutingTitle": "Inteligentny Routing",
  "advancedRoutingItems": [
    "Routing w oparciu o czas i harmonogram",
    "Routing na podstawie kraju dzwoniącego",
    "Routing według numeru osoby dzwoniącej",
    "Routing awaryjny i zapasowy (Failover)",
    "Dzwonienie sekwencyjne",
    "Jednoczesne dzwonienie na wielu urządzeniach",
    "Routing według godzin pracy biura"
  ],
  "journeyCard": {
    "title": "Inteligentna ścieżka połączenia",
    "liveBadge": "Na żywo",
    "step1Title": "Połączenie przychodzące",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Godziny pracy",
    "step2Val": "Pn-Pt · 09:00–18:00",
    "step3Title": "Zespół wsparcia",
    "step3Val": "Jednoczesne dzwonienie · 3 agentów",
    "footerText": "Brak odpowiedzi? Natychmiastowe przekierowanie na komórkę."
  },
  "mobileBadge": "Aplikacja Mobilna do Połączeń i SMS",
  "mobileTitle": "Twój Numer DID Zawsze w Twojej Kieszeni",
  "mobileSubtitle": "Zaoferuj pracownikom aplikację mobilną do odbierania połączeń firmowych i wiadomości SMS bezpośrednio na smartfonach.",
  "mobileFooter": "Twój biznes. Zawsze przy Tobie.",
  "mobileFeaturesTitle": "Funkcje Aplikacji",
  "mobileFeatures": [
    {
      "title": "Połączenia Przychodzące",
      "desc": "Odbieraj połączenia na swój numer DID bezpośrednio w aplikacji mobilnej."
    },
    {
      "title": "Skrzynka Odbiorcza SMS",
      "desc": "Odbieraj wiadomości SMS w bezpiecznej i przejrzystej skrzynce pocztowej."
    },
    {
      "title": "Historia Połączeń",
      "desc": "Przeglądaj szczegółowy wykaz połączeń przychodzących, nieodebranych i odebranych."
    },
    {
      "title": "Historia Wiadomości",
      "desc": "Łatwy wgląd w dotychczasową korespondencję i konwersacje z klientami."
    },
    {
      "title": "Powiadomienia Push",
      "desc": "Błyskawiczne powiadomienia na ekranie telefonu o nowym połączeniu lub SMS-ie."
    },
    {
      "title": "Obsługa Wielu DID",
      "desc": "Zarządzaj wieloma numerami wirtualnymi w ramach jednego konta użytkownika."
    },
    {
      "title": "Zarządzanie Kontaktami",
      "desc": "Wygodne zapisywanie i organizowanie numerów kluczowych klientów."
    }
  ],
  "smsBadge": "Łatwe Odbieranie SMS-ów",
  "smsTitle": "Nigdy Nie Przegap Istotnej Wiadomości od Klienta",
  "smsSubtitle": "Przekształć swój numer DID w niezawodny punkt końcowy do odbioru wiadomości SMS.",
  "smsPerfectTitle": "Idealne rozwiązanie dla:",
  "smsPerfectItems": [
    "Działów obsługi klienta i pomocy technicznej",
    "Bieżącej komunikacji biznesowej B2B",
    "Generowania leadów i zapytań ofertowych",
    "Potwierdzeń wizyt i przypomnień",
    "Powiadomień o awariach i statusie usług",
    "Kodów weryfikacyjnych i bezpieczeństwa konta",
    "Dwukierunkowej komunikacji interaktywnej"
  ],
  "sampleSms": {
    "badge": "Biznesowy SMS · Odebrano",
    "body": "Cześć Jordan, Twoja wizyta została potwierdzona na jutro na godz. 10:30. Odpowiedz, jeśli chcesz zmienić termin.",
    "meta": "Dzisiaj, 10:24 · Wsparcie Acme"
  },
  "smsDashboard": {
    "title": "Panel SMS",
    "receivingBadge": "Odbiór aktywny",
    "todayLabel": "Odebrane SMS-y dzisiaj",
    "todayVal": "3 126 wiadomości",
    "colSender": "NADAWCA",
    "colDid": "DOCELOWY DID",
    "colMessage": "TREŚĆ",
    "colTime": "CZAS",
    "monitorTitle": "Monitoring na żywo:",
    "monitorItems": [
      "Strumień przychodzących SMS-ów",
      "Numer telefonu nadawcy",
      "Docelowy numer DID",
      "Pełna treść wiadomości",
      "Precyzyjny znacznik daty i godziny",
      "Przypisany klient / konto",
      "Statystyki wolumenu wiadomości"
    ]
  },
  "monitoringBadge": "Zaawansowany Monitoring DID",
  "monitoringTitle": "Bądź na Bieżąco ze Statusem i Ruchem Każdego Numeru",
  "monitoringSubtitle": "Śledź cały zasób numerów wirtualnych w czasie rzeczywistym.",
  "monitoringStats": {
    "title": "Podsumowanie DID",
    "liveBadge": "Czas rzeczywisty",
    "stat1Label": "Aktywne DID",
    "stat1Val": "248",
    "stat1Sub": "+12 w tym miesiącu",
    "stat2Label": "Dostępne",
    "stat2Val": "64",
    "stat2Sub": "Gotowe do przydziału",
    "stat3Label": "Przydzielone",
    "stat3Val": "184",
    "stat3Sub": "32 klientów",
    "stat4Label": "Nieodebrane",
    "stat4Val": "18",
    "stat4Sub": "-8% w tym tygodniu",
    "chartTitle": "Aktywność Połączeń i SMS",
    "chartTimeframe": "Ostatnie 7 dni",
    "legend1": "Wolumen SMS",
    "legend2": "Wolumen połączeń"
  },
  "operationalViewTitle": "Pełny obraz operacyjny",
  "operationalViewItems": [
    "Łączna liczba aktywnych numerów",
    "Numery dostępne w magazynie",
    "Numery przydzielone klientom",
    "Wolumen połączeń przychodzących",
    "Liczba odebranych wiadomości SMS",
    "Średni czas trwania rozmowy",
    "Liczba połączeń nieodebranych",
    "Wskaźnik utylizacji numerów",
    "Alokacja według kont klientów",
    "Śledzenie przychodów i rentowności"
  ],
  "resellerBadge": "Stworzone dla Resellerów i Korporacji",
  "resellerTitle": "Zbuduj Własny Biznes Sprzedaży Numerów Wirtualnych",
  "resellerSubtitle": "Nasza platforma jest idealnym fundamentem dla:",
  "supportedAudiences": [
    {
      "title": "Dystrybutorów i resellerów DID"
    },
    {
      "title": "Operatorów VoIP i telekomunikacyjnych"
    },
    {
      "title": "Międzynarodowych call center"
    },
    {
      "title": "Przedsiębiorstw i korporacji"
    },
    {
      "title": "Dostawców rozwiązań UCaaS"
    },
    {
      "title": "Chmurowych platform CPaaS"
    }
  ],
  "whiteLabelCard": {
    "title": "Pełne Wsparcie White-Label",
    "desc": "Zaoferuj klientom portal pod własną marką i dedykowaną aplikację mobilną z Twoim logo, podczas gdy my dbamy o niezawodność infrastruktury telekomunikacyjnej.",
    "brandLabel": "Twoja marka",
    "portalLabel": "Portal klienta",
    "tab1": "Numery",
    "tab2": "Połączenia",
    "tab3": "SMS",
    "tagline": "Doświadczenie Twojego klienta. Nasza stabilna infrastruktura."
  },
  "ctaBadge": "ZBUDUJMY TWOJĄ SIEĆ TELEKOMUNIKACYJNĄ",
  "ctaTitle": "Rozwijaj Swój Biznes z Profesjonalnymi Rozwiązaniami do Komunikacji",
  "ctaSubtitle": "Od inteligentnego routingu głosowego i międzynarodowej terminacji po AI Voice i numery wirtualne — iNet Global oferuje skalowalne rozwiązania, które pomagają firmom łączyć się z klientami na całym świecie.",
  "contactUs": "Skontaktuj się z nami",
  "ctaTrust1": "Gwarancja SLA Klasy Operatorskiej",
  "ctaTrust2": "Błyskawiczne Uruchamianie Numerów DID",
  "ctaTrust3": "Zasięg w Ponad 100 Krajach Świata"
};

const th: VirtualDidTranslation = {
  "breadcrumb": "ผลิตภัณฑ์ | พอร์ทัล DID + แอปมือถือ",
  "heroBadge": "พอร์ทัล DID + แอปมือถือ",
  "heroTitle": "แพลตฟอร์มการจัดการ DID และเบอร์เสมือนแบบครบวงจร",
  "heroDesc": "จัดการหมายเลขโทรศัพท์เสมือน การโทรเข้า และ SMS ได้จากพอร์ทัล DID ศูนย์กลางที่ทรงพลังเพียงแห่งเดียว มอบเบอร์เฉพาะสำหรับลูกค้าพร้อมแอปพลิเคชันมือถือเพื่อรับสายและรับ SMS ได้จากทุกที่ทั่วโลก",
  "getStarted": "เริ่มต้นใช้งาน",
  "requestDemo": "ขอชมการสาธิต",
  "heroFootnote": "เบอร์ระดับโลก การเข้าถึงระดับท้องถิ่น บนแพลตฟอร์มเดียว",
  "dashboardPreview": {
    "title": "พอร์ทัล DID",
    "liveBadge": "ออนไลน์",
    "tab1": "ภาพรวม",
    "tab2": "เบอร์ของฉัน",
    "tab3": "การจัดเส้นทาง",
    "tab4": "กล่องข้อความ SMS",
    "stat1Label": "DID ที่ใช้งานอยู่",
    "stat1Val": "248",
    "stat2Label": "สายโทรเข้า",
    "stat2Val": "1,842",
    "stat3Label": "SMS ที่ได้รับ",
    "stat3Val": "3,126",
    "tableTitle": "รายการเบอร์โทรศัพท์ทั่วโลกของคุณ",
    "smsNotificationTitle": "ได้รับ SMS ใหม่",
    "smsNotificationBody": "การนัดหมายของคุณได้รับการยืนยันแล้วเวลา 10:30 น.",
    "phoneIncomingText": "สายเรียกเข้าทางธุรกิจ",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "ผ่าน +1 212 555 0198"
  },
  "highlightsHeading": "เบอร์โทรระดับโลกของคุณ ภายใต้การควบคุมที่สมบูรณ์แบบ",
  "highlights": [
    {
      "title": "เบอร์ DID ทั่วโลก"
    },
    {
      "title": "การรับสายโทรเข้า"
    },
    {
      "title": "การรับข้อความ SMS"
    },
    {
      "title": "แอปพลิเคชันมือถือ"
    },
    {
      "title": "การโอนสายอัตโนมัติ"
    },
    {
      "title": "การจัดการคลัง DID"
    },
    {
      "title": "การตรวจสอบแบบเรียลไทม์"
    }
  ],
  "managementBadge": "การจัดการ DID",
  "managementTitle": "จัดการ DID ทั้งหมดได้จากพอร์ทัลศูนย์กลางแห่งเดียว",
  "managementSubtitle": "ค้นหา เปิดใช้งาน พักการใช้งาน ตั้งค่า และตรวจสอบเบอร์เสมือนของคุณได้จากแดชบอร์ดเดียวที่ใช้งานง่าย",
  "managementChecklistTitle": "ฟังก์ชันการจัดการ DID",
  "managementChecklist": [
    "คลังหมายเลข DID ทั่วโลก",
    "เลือกตามประเทศและเมืองได้ละเอียด",
    "ระบบค้นหาเบอร์อัจฉริยะ",
    "เปิดใช้งานเบอร์ได้ทันที (Instant Provisioning)",
    "เปิดและปิดการทำงานของ DID",
    "การจัดสรรเบอร์ให้ลูกค้าอย่างยืดหยุ่น",
    "การจัดการ DID ตามบัญชีลูกค้า",
    "การดูแลวันหมดอายุและการต่ออายุ",
    "การจัดการราคาและต้นทุนของ DID",
    "การตรวจสอบปริมาณการใช้งานหมายเลข"
  ],
  "inventoryCard": {
    "title": "คลังหมายเลข",
    "subtitle": "248 หมายเลขที่จัดสรรในบัญชีลูกค้า",
    "provisionBtn": "+ เปิดใช้งาน DID ใหม่",
    "searchPlaceholder": "ค้นหาหมายเลข...",
    "countryFilter": "ทุกประเทศ",
    "statusFilter": "ทุกสถานะ",
    "colDid": "หมายเลข DID",
    "colCountry": "ประเทศ / เมือง",
    "colCustomer": "ลูกค้า",
    "colStatus": "สถานะ",
    "showingText": "แสดง 4 จากทั้งหมด 248 หมายเลข"
  },
  "callMgmtBadge": "รับสายได้จากทุกที่",
  "callMgmtTitle": "ระบบจัดการการโทรเข้าอันทรงพลัง",
  "callMgmtSubtitle": "กำหนดเส้นทางสายเรียกเข้าให้ส่งต่อไปยังปลายทางที่คุณต้องการได้อย่างแม่นยำ",
  "forwardingTitle": "การโอนสาย",
  "forwardingSubtitle": "โอนสายไปยัง:",
  "forwardingItems": [
    "หมายเลขโทรศัพท์มือถือ",
    "บัญชีและทรังก์ SIP",
    "ซอฟต์โฟนบนเว็บเบราว์เซอร์",
    "เจ้าหน้าที่คอลเซ็นเตอร์",
    "ระบบตอบรับอัตโนมัติ (IVR)",
    "หลายปลายทางพร้อมกัน"
  ],
  "advancedRoutingTitle": "การจัดเส้นทางขั้นสูง",
  "advancedRoutingItems": [
    "กำหนดเส้นทางตามช่วงเวลา",
    "กำหนดเส้นทางตามประเทศต้นสาย",
    "กำหนดเส้นทางตามเบอร์ผู้โทร",
    "ระบบสำรองฉุกเฉินเมื่อระบบขัดข้อง (Failover)",
    "การส่งเสียงกริ่งตามลำดับ",
    "การส่งเสียงกริ่งพร้อมกันหลายอุปกรณ์",
    "การกำหนดเส้นทางตามเวลาทำการ / นอกเวลาทำการ"
  ],
  "journeyCard": {
    "title": "ขั้นตอนการรับสายอัจฉริยะ",
    "liveBadge": "ออนไลน์",
    "step1Title": "สายโทรเข้า",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "เวลาทำการ",
    "step2Val": "จันทร์-ศุกร์ · 09:00–18:00",
    "step3Title": "ทีมสนับสนุน",
    "step3Val": "ส่งเสียงกริ่งพร้อมกัน · เจ้าหน้าที่ 3 ท่าน",
    "footerText": "ไม่มีผู้รับสาย? โอนสายอัตโนมัติไปยังมือถือของคุณทันที"
  },
  "mobileBadge": "แอปมือถือสำหรับโทรและ SMS",
  "mobileTitle": "เบอร์ DID ธุรกิจของคุณ พกพาติดตัวได้เสมอ",
  "mobileSubtitle": "มอบแอปพลิเคชันมือถือเฉพาะให้ผู้ใช้งาน เพื่อรับสายโทรศัพท์ธุรกิจและ SMS ได้โดยตรงบนสมาร์ทโฟน",
  "mobileFooter": "ธุรกิจของคุณ อยู่กับคุณเสมอ",
  "mobileFeaturesTitle": "คุณสมบัติของแอปพลิเคชัน",
  "mobileFeatures": [
    {
      "title": "สายโทรเข้า",
      "desc": "รับสายโทรเข้าสู่เบอร์ DID ของคุณได้โดยตรงผ่านแอปพลิเคชันมือถือ"
    },
    {
      "title": "กล่องข้อความ SMS",
      "desc": "รับข้อความ SMS ในกล่องจดหมายที่ปลอดภัยและเป็นระเบียบ"
    },
    {
      "title": "ประวัติการโทร",
      "desc": "ดูประวัติสายโทรเข้า ไม่ได้รับสาย และรับสายได้อย่างละเอียด"
    },
    {
      "title": "ประวัติ SMS",
      "desc": "เข้าถึงข้อความและการสนทนากับลูกค้าก่อนหน้าได้ตลอดเวลา"
    },
    {
      "title": "การแจ้งเตือนทันที",
      "desc": "รับการแจ้งเตือนบนหน้าจอทันทีเมื่อมีสายเรียกเข้าหรือ SMS ใหม่"
    },
    {
      "title": "จัดการได้หลาย DID",
      "desc": "ควบคุมและสลับการใช้งานหลายเบอร์เสมือนได้จากบัญชีเดียว"
    },
    {
      "title": "การจัดการรายชื่อ",
      "desc": "บันทึกและจัดระเบียบเบอร์ลูกค้าสำคัญที่ติดต่อบ่อยได้อย่างง่ายดาย"
    }
  ],
  "smsBadge": "การรับ SMS ที่ง่ายดาย",
  "smsTitle": "ไม่พลาดข้อความสำคัญจากลูกค้าของคุณ",
  "smsSubtitle": "เปลี่ยนเบอร์ DID ของคุณให้เป็นปลายทางรับข้อความ SMS ที่มีประสิทธิภาพสูง",
  "smsPerfectTitle": "เหมาะอย่างยิ่งสำหรับ:",
  "smsPerfectItems": [
    "ฝ่ายบริการลูกค้าและสนับสนุนด้านเทคนิค",
    "การสื่อสารระหว่างธุรกิจและองค์กร",
    "การเก็บข้อมูลลูกค้าเป้าหมาย",
    "การยืนยันและแจ้งเตือนนัดหมาย",
    "การแจ้งเตือนเหตุฉุกเฉินและสถานะระบบ",
    "รหัสยืนยันความปลอดภัย OTP",
    "การสื่อสารแบบสองทางกับลูกค้า"
  ],
  "sampleSms": {
    "badge": "SMS ธุรกิจ · ได้รับแล้ว",
    "body": "สวัสดี Jordan การนัดหมายของคุณสำหรับวันพรุ่งนี้เวลา 10:30 น. ได้รับการยืนยันแล้ว ตอบกลับหากต้องการเลื่อนนัด",
    "meta": "วันนี้ 10:24 น. · ฝ่ายบริการ Acme"
  },
  "smsDashboard": {
    "title": "แดชบอร์ดข้อความ SMS",
    "receivingBadge": "พร้อมรับข้อความ",
    "todayLabel": "SMS ที่ได้รับในวันนี้",
    "todayVal": "3,126 ข้อความ",
    "colSender": "ผู้ส่ง",
    "colDid": "DID ปลายทาง",
    "colMessage": "ข้อความ",
    "colTime": "เวลา",
    "monitorTitle": "รายการตรวจสอบแบบเรียลไทม์:",
    "monitorItems": [
      "สตรีมข้อความ SMS ขาเข้า",
      "หมายเลขโทรศัพท์ผู้ส่ง",
      "หมายเลข DID ปลายทาง",
      "เนื้อหาข้อความฉบับเต็ม",
      "วันและเวลาอย่างแม่นยำ",
      "ลูกค้าหรือบัญชีที่เกี่ยวข้อง",
      "สถิติปริมาณการใช้งาน SMS"
    ]
  },
  "monitoringBadge": "การตรวจสอบ DID ขั้นสูง",
  "monitoringTitle": "ทราบสถานะและปริมาณการใช้งานของทุกเบอร์แบบเรียลไทม์",
  "monitoringSubtitle": "ตรวจสอบคลังหมายเลข DID และกิจกรรมการโทรทั้งหมดแบบสดตลอด 24 ชั่วโมง",
  "monitoringStats": {
    "title": "ภาพรวมของ DID",
    "liveBadge": "เรียลไทม์",
    "stat1Label": "DID ที่ใช้งาน",
    "stat1Val": "248",
    "stat1Sub": "เพิ่มขึ้น +12 เบอร์ในเดือนนี้",
    "stat2Label": "พร้อมใช้งาน",
    "stat2Val": "64",
    "stat2Sub": "พร้อมจัดสรร",
    "stat3Label": "จัดสรรแล้ว",
    "stat3Val": "184",
    "stat3Sub": "ลูกค้า 32 ราย",
    "stat4Label": "สายที่ไม่ได้รับ",
    "stat4Val": "18",
    "stat4Sub": "ลดลง -8% สัปดาห์นี้",
    "chartTitle": "กิจกรรมการโทรและ SMS",
    "chartTimeframe": "7 วันที่ผ่านมา",
    "legend1": "ปริมาณ SMS",
    "legend2": "ปริมาณสายโทรเข้า"
  },
  "operationalViewTitle": "มุมมองการดำเนินงานที่ครอบคลุม",
  "operationalViewItems": [
    "จำนวน DID ที่ใช้งานอยู่ทั้งหมด",
    "หมายเลข DID ว่างในคลัง",
    "DID ที่จัดสรรให้ลูกค้าแล้ว",
    "ปริมาณสายโทรเข้า",
    "ปริมาณ SMS ที่ได้รับ",
    "ระยะเวลาการสนทนาเฉลี่ย",
    "จำนวนสายที่ไม่ได้รับ",
    "อัตราการใช้ประโยชน์ของหมายเลข",
    "การกระจายตามบัญชีลูกค้า",
    "การติดตามรายได้และต้นทุน"
  ],
  "resellerBadge": "ออกแบบมาเพื่อตัวแทนจำหน่ายและองค์กร",
  "resellerTitle": "สร้างธุรกิจให้บริการเบอร์เสมือนของคุณเอง",
  "resellerSubtitle": "แพลตฟอร์มของเรารองรับได้อย่างสมบูรณ์แบบสำหรับ:",
  "supportedAudiences": [
    {
      "title": "ตัวแทนจำหน่ายเบอร์ DID"
    },
    {
      "title": "ผู้ให้บริการระบบโทรศัพท์ VoIP"
    },
    {
      "title": "คอนแทกต์เซ็นเตอร์ระดับสากล"
    },
    {
      "title": "องค์กรและกลุ่มธุรกิจขนาดใหญ่"
    },
    {
      "title": "ผู้ให้บริการโซลูชัน UCaaS"
    },
    {
      "title": "แพลตฟอร์มการสื่อสารบนคลาวด์ (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "รองรับระบบ White-Label เต็มรูปแบบ",
    "desc": "มอบพอร์ทัลและแอปพลิเคชันมือถือที่ปรับแต่งตามแบรนด์ของคุณเองให้ลูกค้า โดยที่คุณสามารถบริหารจัดการโครงสร้างพื้นฐานระบบเสียงและข้อความได้อย่างมั่นใจ",
    "brandLabel": "แบรนด์ของคุณ",
    "portalLabel": "พอร์ทัลลูกค้า",
    "tab1": "เบอร์โทร",
    "tab2": "สายโทร",
    "tab3": "SMS",
    "tagline": "ประสบการณ์ของลูกค้าภายใต้แบรนด์คุณ โครงสร้างพื้นฐานที่วางใจได้จากเรา"
  },
  "ctaBadge": "ร่วมสร้างเครือข่ายการสื่อสารธุรกิจของคุณ",
  "ctaTitle": "ขยายธุรกิจของคุณด้วยโซลูชันระบบโทรศัพท์และ SMS สำหรับองค์กร",
  "ctaSubtitle": "ตั้งแต่ระบบกำหนดเส้นทางเสียงอัจฉริยะและการเชื่อมต่อระหว่างประเทศ ไปจนถึง AI Voice และเบอร์โทรเสมือน iNet Global พร้อมส่งมอบโครงสร้างพื้นฐานด้านการสื่อสารที่ช่วยให้ธุรกิจเชื่อมต่อกับลูกค้าทั่วโลกได้อย่างคมชัด ปลอดภัย และมีเสถียรภาพ",
  "contactUs": "ติดต่อเรา",
  "ctaTrust1": "ข้อตกลงระดับบริการ SLA มาตรฐานผู้ให้บริการ",
  "ctaTrust2": "เปิดใช้งานหมายเลข DID ได้ทันที",
  "ctaTrust3": "ครอบคลุมพื้นที่มากกว่า 100 ประเทศทั่วโลก"
};

const tl: VirtualDidTranslation = {
  "breadcrumb": "Mga Produkto | DID Portal + Mobile App",
  "heroBadge": "DID Portal + Mobile App",
  "heroTitle": "Kumpletong Pamamahala ng DID at Virtual Number Platform",
  "heroDesc": "Pamahalaan ang mga virtual na numero ng telepono, papasok na tawag, at SMS mula sa isang maaasahang DID Portal. Bigyan ang iyong mga customer ng mga nakalaang numero na may mobile app upang makatanggap ng mga tawag at SMS mula saanman sa mundo.",
  "getStarted": "Magsimula Na",
  "requestDemo": "Humiling ng Demo",
  "heroFootnote": "Pandaigdigang numero. Lokal na presensya. Isang pinag-isang platform.",
  "dashboardPreview": {
    "title": "DID Portal",
    "liveBadge": "Live",
    "tab1": "Pangkalahatan",
    "tab2": "Aking mga numero",
    "tab3": "Routing ng tawag",
    "tab4": "SMS inbox",
    "stat1Label": "Aktibong DIDs",
    "stat1Val": "248",
    "stat2Label": "Papasok na tawag",
    "stat2Val": "1,842",
    "stat3Label": "Natanggap na SMS",
    "stat3Val": "3,126",
    "tableTitle": "Iyong mga pandaigdigang numero",
    "smsNotificationTitle": "Bagong SMS na natanggap",
    "smsNotificationBody": "Kumpirmado ang iyong appointment para sa 10:30 AM.",
    "phoneIncomingText": "Papasok na tawag sa negosyo",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "sa pamamagitan ng +1 212 555 0198"
  },
  "highlightsHeading": "Ang Iyong Pandaigdigang Numero. Ang Iyong Ganap na Kontrol.",
  "highlights": [
    {
      "title": "Global DID Numbers"
    },
    {
      "title": "Papasok na Tawag"
    },
    {
      "title": "Pagtanggap ng SMS"
    },
    {
      "title": "Mobile App"
    },
    {
      "title": "Call Forwarding"
    },
    {
      "title": "Pamamahala ng DID"
    },
    {
      "title": "Real-Time Monitoring"
    }
  ],
  "managementBadge": "Pamamahala ng DID",
  "managementTitle": "Pamahalaan ang Lahat ng DID Mula sa Isang Sentralisadong Portal",
  "managementSubtitle": "Maghanap, mag-provision, mag-activate, mag-suspend, mag-configure, at mag-monitor ng iyong mga virtual number mula sa iisang dashboard.",
  "managementChecklistTitle": "Mga Tampok sa Pamamahala ng DID",
  "managementChecklist": [
    "Pandaigdigang imbentaryo ng DID",
    "Pagpili ayon sa bansa at lungsod",
    "Matalinong paghahanap ng numero",
    "Agarang provisioning",
    "Pag-activate at pag-deactivate ng DID",
    "Flexible na pagtatalaga ng numero",
    "Pamamahala ng DID batay sa customer",
    "Pamamahala sa petsa ng pag-expire",
    "Pagkontrol sa presyo at bayarin ng DID",
    "Pagsubaybay sa paggamit ng trapiko"
  ],
  "inventoryCard": {
    "title": "Imbentaryo ng numero",
    "subtitle": "248 numero sa mga account ng iyong customer",
    "provisionBtn": "+ Mag-provision ng DID",
    "searchPlaceholder": "Maghanap ng mga numero...",
    "countryFilter": "Lahat ng bansa",
    "statusFilter": "Lahat ng katayuan",
    "colDid": "NUMERO NG DID",
    "colCountry": "BANSA / LUNGSOD",
    "colCustomer": "CUSTOMER",
    "colStatus": "KATAYUAN",
    "showingText": "Ipinapakita ang 4 sa 248 numero"
  },
  "callMgmtBadge": "Tumanggap ng Tawag Kahit Saan",
  "callMgmtTitle": "Mabisang Pamamahala sa Papasok na Tawag",
  "callMgmtSubtitle": "I-ruta ang mga papasok na tawag nang eksakto sa mga destinasyong gusto mo.",
  "forwardingTitle": "Pagpasa ng Tawag (Forwarding)",
  "forwardingSubtitle": "Ipasa ang mga tawag sa:",
  "forwardingItems": [
    "Mga mobile number",
    "Mga SIP account at trunk",
    "Mga browser softphone",
    "Mga ahente ng call center",
    "Mga interactive voice response (IVR) system",
    "Maramihang destinasyon nang sabay-sabay"
  ],
  "advancedRoutingTitle": "Advanced na Routing",
  "advancedRoutingItems": [
    "Time-based routing",
    "Country-based routing",
    "Caller ID-based routing",
    "Failover at backup routing",
    "Sunud-sunod na pag-ring (Sequential ringing)",
    "Sabay-sabay na pag-ring sa maraming device",
    "Routing sa oras ng negosyo"
  ],
  "journeyCard": {
    "title": "Matalinong daloy ng tawag",
    "liveBadge": "Live",
    "step1Title": "Papasok na tawag",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Oras ng negosyo",
    "step2Val": "Lun-Biy · 09:00–18:00",
    "step3Title": "Koponan ng suporta",
    "step3Val": "Sabay-sabay na pag-ring · 3 ahente",
    "footerText": "Walang sumagot? Awtomatikong ipapasa sa iyong mobile."
  },
  "mobileBadge": "Mobile App para sa Tawag at SMS",
  "mobileTitle": "Ang Iyong DID Number sa Iyong Bulsa",
  "mobileSubtitle": "Bigyan ang iyong mga user ng dedikadong mobile app upang makatanggap ng mga tawag sa negosyo at SMS nang direkta sa kanilang smartphone.",
  "mobileFooter": "Ang iyong negosyo. Palaging kasama mo.",
  "mobileFeaturesTitle": "Mga Tampok ng App",
  "mobileFeatures": [
    {
      "title": "Papasok na Tawag",
      "desc": "Tumanggap ng mga tawag sa iyong DID direkta sa pamamagitan ng mobile app."
    },
    {
      "title": "SMS Inbox",
      "desc": "Tumanggap ng mga papasok na mensaheng SMS sa isang ligtas at maayos na inbox."
    },
    {
      "title": "Kasaysayan ng Tawag",
      "desc": "Tingnan nang detalyado ang mga papasok, hindi nasagot, at sinagot na tawag."
    },
    {
      "title": "Kasaysayan ng SMS",
      "desc": "Madaling ma-access ang mga nakaraang mensahe at pag-uusap ng customer."
    },
    {
      "title": "Push Notifications",
      "desc": "Makatanggap ng agarang alerto sa screen kapag may bagong tawag o SMS."
    },
    {
      "title": "Maramihang DID",
      "desc": "Pamahalaan ang ilang virtual number mula sa iisang account."
    },
    {
      "title": "Pamamahala ng Contact",
      "desc": "I-save at ayusin ang mahahalagang contact ng customer nang ligtas."
    }
  ],
  "smsBadge": "Madaling Pagtanggap ng SMS",
  "smsTitle": "Huwag Palampasin ang Mahahalagang Mensahe ng Customer",
  "smsSubtitle": "Gawing maaasahang endpoint para sa pagtanggap ng SMS ang iyong DID number.",
  "smsPerfectTitle": "Perpekto para sa:",
  "smsPerfectItems": [
    "Suporta sa customer at helpdesk",
    "Pang-araw-araw na komunikasyon sa negosyo",
    "Pangangalap ng mga lead at inquiry",
    "Mga kumpirmasyon at paalala sa appointment",
    "Mga alerto sa serbisyo at emergency",
    "Mga verification code at seguridad ng account",
    "Interactive na two-way na komunikasyon"
  ],
  "sampleSms": {
    "badge": "Business SMS · Natanggap",
    "body": "Kumusta Jordan, kumpirmado ang iyong appointment bukas ng 10:30 AM. Mag-reply kung nais mong i-reschedule.",
    "meta": "Ngayon, 10:24 AM · Suporta ng Acme"
  },
  "smsDashboard": {
    "title": "SMS Dashboard",
    "receivingBadge": "Aktibong tumatanggap",
    "todayLabel": "Kabuuang natanggap na SMS ngayon",
    "todayVal": "3,126 mensahe",
    "colSender": "NAGPADALA",
    "colDid": "DESTINASYON DID",
    "colMessage": "MENSAHE",
    "colTime": "ORAS",
    "monitorTitle": "Real-time monitoring:",
    "monitorItems": [
      "Papasok na SMS stream",
      "Numero ng telepono ng nagpadala",
      "Destinasyong DID number",
      "Kumpletong nilalaman ng mensahe",
      "Tumpak na petsa at oras",
      "Kaugnay na customer / account",
      "Kabuuang dami ng trapiko ng SMS"
    ]
  },
  "monitoringBadge": "Advanced na DID Monitoring",
  "monitoringTitle": "Alamin ang Katayuan at Trapiko ng Bawat Numero",
  "monitoringSubtitle": "Subaybayan ang iyong buong imbentaryo ng DID sa real time 24/7.",
  "monitoringStats": {
    "title": "Pangkalahatang-ideya ng DID",
    "liveBadge": "Real-time",
    "stat1Label": "Aktibong DIDs",
    "stat1Val": "248",
    "stat1Sub": "+12 ngayong buwan",
    "stat2Label": "Available",
    "stat2Val": "64",
    "stat2Sub": "Handang italaga",
    "stat3Label": "Itinalaga",
    "stat3Val": "184",
    "stat3Sub": "32 customer",
    "stat4Label": "Hindi nasagot",
    "stat4Val": "18",
    "stat4Sub": "-8% ngayong linggo",
    "chartTitle": "Aktibidad ng Boses at SMS",
    "chartTimeframe": "Huling 7 araw",
    "legend1": "Dami ng SMS",
    "legend2": "Dami ng tawag"
  },
  "operationalViewTitle": "Kumpletong pananaw sa operasyon",
  "operationalViewItems": [
    "Kabuuang aktibong DIDs",
    "Available na mga DID sa stock",
    "Mga DID na nakatalaga sa mga customer",
    "Dami ng papasok na tawag",
    "Kabuuang natanggap na SMS",
    "Average na tagal ng tawag",
    "Bilang ng hindi nasagot na tawag",
    "Porsyento ng paggamit ng numero",
    "Pamamahagi ayon sa account ng customer",
    "Pagsubaybay sa kita at gastos"
  ],
  "resellerBadge": "Binuo para sa mga Reseller at Negosyo",
  "resellerTitle": "Simulan ang Iyong Sariling Negosyo sa Virtual Number",
  "resellerSubtitle": "Tamang-tama ang aming platform para sa:",
  "supportedAudiences": [
    {
      "title": "Mga reseller at distributor ng DID"
    },
    {
      "title": "Mga provider ng VoIP at telecom"
    },
    {
      "title": "Mga pandaigdigang contact center"
    },
    {
      "title": "Malalaking kumpanya at korporasyon"
    },
    {
      "title": "Mga provider ng solusyon sa UCaaS"
    },
    {
      "title": "Mga cloud communication platform (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Handa para sa White-Label",
    "desc": "Mag-alok sa iyong mga customer ng sarili mong branded na portal at mobile app, habang pinamamahalaan mo ang pinagbabatayang imprastraktura ng boses at SMS.",
    "brandLabel": "Ang iyong brand",
    "portalLabel": "Portal ng customer",
    "tab1": "Mga Numero",
    "tab2": "Mga Tawag",
    "tab3": "SMS",
    "tagline": "Karanasan ng iyong customer. Ang aming maaasahang imprastraktura."
  },
  "ctaBadge": "BUUIN NATIN ANG IYONG MESSAGING NETWORK",
  "ctaTitle": "Palaguin ang Iyong Negosyo gamit ang Mga Solusyon sa Business SMS at Voice",
  "ctaSubtitle": "Mula sa matalinong voice routing at pandaigdigang terminasyon hanggang sa AI Voice at mga virtual na numero, nagbibigay ang iNet Global ng mga scalable na solusyon sa komunikasyon para sa mga negosyo sa buong mundo.",
  "contactUs": "Makipag-ugnayan sa Amin",
  "ctaTrust1": "Enterprise Carrier SLA",
  "ctaTrust2": "Mabilisang Pag-provision ng DID",
  "ctaTrust3": "Saklaw sa Mahigit 100 Bansa"
};

const bn: VirtualDidTranslation = {
  "breadcrumb": "পণ্যসমূহ | ডিআইডি পোর্টাল + মোবাইল অ্যাপ",
  "heroBadge": "ডিআইডি পোর্টাল + মোবাইল অ্যাপ",
  "heroTitle": "সম্পূর্ণ ডিআইডি ব্যবস্থাপনা ও ভার্চুয়াল নম্বর প্ল্যাটফর্ম",
  "heroDesc": "একটি শক্তিশালী কেন্দ্রীভূত ডিআইডি পোর্টাল থেকে ভার্চুয়াল ফোন নম্বর, ইনবাউন্ড কল এবং এসএমএস পরিচালনা করুন। আপনার গ্রাহকদের ডেডিকেটেড নম্বর দিন সাথে মোবাইল অ্যাপ যাতে তারা বিশ্বের যেকোনো স্থান থেকে কল ও বার্তা গ্রহণ করতে পারে।",
  "getStarted": "শুরু করুন",
  "requestDemo": "ডেমো অনুরোধ করুন",
  "heroFootnote": "বিশ্বব্যাপী নম্বর। স্থানীয় উপস্থিতি। একটি সমন্বিত প্ল্যাটফর্ম।",
  "dashboardPreview": {
    "title": "ডিআইডি পোর্টাল",
    "liveBadge": "লাইভ",
    "tab1": "সারসংক্ষেপ",
    "tab2": "আমার নম্বরসমূহ",
    "tab3": "কল রাউটিং",
    "tab4": "এসএমএস ইনবক্স",
    "stat1Label": "সক্রিয় ডিআইডি",
    "stat1Val": "248",
    "stat2Label": "ইনকামিং কল",
    "stat2Val": "1,842",
    "stat3Label": "প্রাপ্ত এসএমএস",
    "stat3Val": "3,126",
    "tableTitle": "আপনার বিশ্বব্যাপী নম্বরসমূহ",
    "smsNotificationTitle": "নতুন এসএমএস প্রাপ্ত হয়েছে",
    "smsNotificationBody": "আপনার অ্যাপয়েন্টমেন্ট সকাল ১০:৩০ মিনিটে নিশ্চিত করা হয়েছে।",
    "phoneIncomingText": "ব্যবসায়িক ইনকামিং কল",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "+1 212 555 0198 এর মাধ্যমে"
  },
  "highlightsHeading": "আপনার গ্লোবাল নম্বর। আপনার পূর্ণ নিয়ন্ত্রণ।",
  "highlights": [
    {
      "title": "গ্লোবাল ডিআইডি নম্বর"
    },
    {
      "title": "ইনকামিং কলসমূহ"
    },
    {
      "title": "এসএমএস গ্রহণ"
    },
    {
      "title": "মোবাইল অ্যাপ্লিকেশন"
    },
    {
      "title": "কল ফরোয়ার্ডিং"
    },
    {
      "title": "ডিআইডি ইনভেন্টরি"
    },
    {
      "title": "রিয়েল-টাইম মনিটরিং"
    }
  ],
  "managementBadge": "ডিআইডি ব্যবস্থাপনা",
  "managementTitle": "একটি কেন্দ্রীভূত পোর্টাল থেকে সকল ডিআইডি পরিচালনা করুন",
  "managementSubtitle": "একটি ড্যাশবোর্ড থেকেই আপনার ভার্চুয়াল নম্বরগুলো সন্ধান, সক্রিয়, স্থগিত, কনফিগার এবং নিরীক্ষণ করুন।",
  "managementChecklistTitle": "ডিআইডি ব্যবস্থাপনার মূল সুবিধাসমূহ",
  "managementChecklist": [
    "বিশ্বব্যাপী ডিআইডি ইনভেন্টরি",
    "দেশ ও শহরভিত্তিক নির্বাচন",
    "বুদ্ধিমান নম্বর অনুসন্ধান",
    "তাৎক্ষণিক প্রভিশনিং (Provisioning)",
    "ডিআইডি সক্রিয় ও নিষ্ক্রিয়করণ",
    "গ্রাহকদের জন্য নমনীয় নম্বর বরাদ্দ",
    "গ্রাহক অ্যাকাউন্টভিত্তিক ডিআইডি ব্যবস্থাপনা",
    "মেয়াদোত্তীর্ণ ও নবায়ন ট্র্যাকিং",
    "ডিআইডি মূল্য নির্ধারণ ও খরচ নিয়ন্ত্রণ",
    "নম্বর ব্যবহারের রিয়েল-টাইম ট্র্যাকিং"
  ],
  "inventoryCard": {
    "title": "নম্বর ইনভেন্টরি",
    "subtitle": "গ্রাহকদের অ্যাকাউন্টে ২৪৮টি নম্বর বরাদ্দ রয়েছে",
    "provisionBtn": "+ নতুন ডিআইডি যুক্ত করুন",
    "searchPlaceholder": "নম্বর খুঁজুন...",
    "countryFilter": "সকল দেশ",
    "statusFilter": "সকল স্ট্যাটাস",
    "colDid": "ডিআইডি নম্বর",
    "colCountry": "দেশ / শহর",
    "colCustomer": "গ্রাহক",
    "colStatus": "স্ট্যাটাস",
    "showingText": "২৪৮টির মধ্যে ৪টি নম্বর প্রদর্শিত হচ্ছে"
  },
  "callMgmtBadge": "যেকোনো স্থান থেকে কল রিসিভ করুন",
  "callMgmtTitle": "ইনকামিং কল রাউটিংয়ের শক্তিশালী ব্যবস্থাপনা",
  "callMgmtSubtitle": "ইনকামিং কলগুলোকে আপনার পছন্দসই নির্দিষ্ট ডিভাইসে নির্ভুলভাবে পৌঁছে দিন।",
  "forwardingTitle": "কল ফরোয়ার্ডিং",
  "forwardingSubtitle": "কল ফরোয়ার্ড করুন এখানে:",
  "forwardingItems": [
    "মোবাইল ফোন নম্বর",
    "এসআইপি (SIP) অ্যাকাউন্ট ও ট্রাঙ্ক",
    "ব্রাউজার সফটফোন",
    "কল সেন্টার এজেন্ট",
    "আইভিআর (IVR) ভয়েস সিস্টেম",
    "একাধিক সংযুক্ত গন্তব্য"
  ],
  "advancedRoutingTitle": "উন্নত কল রাউটিং",
  "advancedRoutingItems": [
    "সময়ভিত্তিক রাউটিং",
    "কলকারী দেশের ওপর ভিত্তি করে রাউটিং",
    "কলার আইডিভিত্তিক রাউটিং",
    "জরুরি ব্যাকআপ ও ফেইলওভার রাউটিং",
    "ধারাবাহিক রিংিং",
    "একযোগে একাধিক ডিভাইসে রিং",
    "অফিস সময় ও অফ-আওয়ার রাউটিং"
  ],
  "journeyCard": {
    "title": "স্মার্ট কল জার্নি",
    "liveBadge": "লাইভ",
    "step1Title": "ইনকামিং কল",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "অফিস সময়",
    "step2Val": "সোম-শুক্র · ০৯:০০–১৮:০০",
    "step3Title": "সাপোর্ট টিম",
    "step3Val": "একযোগে রিং · ৩ জন এজেন্ট",
    "footerText": "উত্তর মেলেনি? স্বয়ংক্রিয়ভাবে আপনার মোবাইলে ফরোয়ার্ড।"
  },
  "mobileBadge": "কল ও এসএমএসের জন্য মোবাইল অ্যাপ",
  "mobileTitle": "আপনার ব্যবসায়িক ডিআইডি নম্বর এখন আপনার পকেটে",
  "mobileSubtitle": "ব্যবহারকারীদের একটি ডেডিকেটেড মোবাইল অ্যাপ দিন যাতে তারা স্মার্টফোনে সরাসরি ব্যবসায়িক কল এবং এসএমএস গ্রহণ করতে পারে।",
  "mobileFooter": "আপনার ব্যবসা। সর্বদা আপনার সাথে।",
  "mobileFeaturesTitle": "অ্যাপের বৈশিষ্ট্যসমূহ",
  "mobileFeatures": [
    {
      "title": "ইনকামিং কল",
      "desc": "মোবাইল অ্যাপের মাধ্যমে সরাসরি আপনার ডিআইডি নম্বরে কল গ্রহণ করুন।"
    },
    {
      "title": "এসএমএস ইনবক্স",
      "desc": "একটি সুরক্ষিত এবং সুসংগঠিত ইনবক্সে ইনকামিং এসএমএস গ্রহণ করুন।"
    },
    {
      "title": "কল ইতিহাস",
      "desc": "ইনকামিং, মিসড এবং উত্তর দেওয়া কলের পূর্ণাঙ্গ বিবরণ দেখুন।"
    },
    {
      "title": "এসএমএস ইতিহাস",
      "desc": "পূর্ববর্তী বার্তা এবং কথোপকথন সহজে অনুসন্ধান ও সংরক্ষণ করুন।"
    },
    {
      "title": "পুশ নোটিফিকেশন",
      "desc": "নতুন কল বা এসএমএস এলে ফোনের স্ক্রিনে তাৎক্ষণিক সতর্কতা পান।"
    },
    {
      "title": "মাল্টিপল ডিআইডি",
      "desc": "একটি অ্যাকাউন্ট থেকেই একাধিক ভার্চুয়াল নম্বর সুবিধাজনকভাবে পরিচালনা করুন।"
    },
    {
      "title": "কন্টাক্টস ম্যানেজমেন্ট",
      "desc": "নিয়মিত গ্রাহক ও ব্যবসায়িক পরিচিতিগুলো নিরাপদে সংরক্ষণ করুন।"
    }
  ],
  "smsBadge": "সহজ ও নির্ভরযোগ্য এসএমএস গ্রহণ",
  "smsTitle": "গ্রাহকদের গুরুত্বপূর্ণ বার্তা কখনোই মিস করবেন না",
  "smsSubtitle": "আপনার ডিআইডি নম্বরটিকে একটি শক্তিশালী এসএমএস রিসিভিং এন্ডপয়েন্টে রূপান্তর করুন।",
  "smsPerfectTitle": "যেসব ক্ষেত্রে আদর্শ:",
  "smsPerfectItems": [
    "কাস্টমার সাপোর্ট ও হেল্পডেস্ক",
    "দৈনন্দিন কর্পোরেট ব্যবসায়িক যোগাযোগ",
    "লিড জেনারেশন ও ক্লায়েন্ট এনকোয়ারি",
    "অ্যাপয়েন্টমেন্ট নিশ্চিতকরণ ও রিমাইন্ডার",
    "সিস্টেম ও জরুরি সেবা সতর্কতা",
    "অ্যাকাউন্ট ভেরিফিকেশন ও ওটিপি",
    "দ্বিমুখী ইন্টারঅ্যাকটিভ যোগাযোগ"
  ],
  "sampleSms": {
    "badge": "ব্যবসায়িক এসএমএস · প্রাপ্ত",
    "body": "হ্যালো Jordan, আগামীকাল সকাল ১০:৩০ মিনিটে আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত হয়েছে। সময় পরিবর্তন করতে চাইলে রিপ্লাই দিন।",
    "meta": "আজ, ১০:২৪ AM · Acme সাপোর্ট"
  },
  "smsDashboard": {
    "title": "এসএমএস ড্যাশবোর্ড",
    "receivingBadge": "গ্রহণ সক্রিয়",
    "todayLabel": "আজ প্রাপ্ত মোট এসএমএস",
    "todayVal": "৩,১২৬টি বার্তা",
    "colSender": "প্রেরক",
    "colDid": "গন্তব্য ডিআইডি",
    "colMessage": "বার্তা",
    "colTime": "সময়",
    "monitorTitle": "রিয়েল-টাইম ট্র্যাকিং:",
    "monitorItems": [
      "ইনকামিং এসএমএস স্ট্রিম",
      "প্রেরকের ফোন নম্বর",
      "টার্গেট ডিআইডি নম্বর",
      "সম্পূর্ণ বার্তার বিষয়বস্তু",
      "সঠিক তারিখ ও সময় স্ট্যাম্প",
      "সম্পর্কিত গ্রাহক / অ্যাকাউন্ট",
      "এসএমএস ট্র্যাফিক ভলিউম"
    ]
  },
  "monitoringBadge": "উন্নত ডিআইডি মনিটরিং",
  "monitoringTitle": "প্রতিটি নম্বরের রিয়েল-টাইম স্ট্যাটাস এবং ট্র্যাফিক জানুন",
  "monitoringSubtitle": "আপনার সম্পূর্ণ ডিআইডি ইনভেন্টরি রিয়েল-টাইমে ২৪/৭ পর্যবেক্ষণ করুন।",
  "monitoringStats": {
    "title": "ডিআইডি বিবরণী",
    "liveBadge": "রিয়েল-টাইম",
    "stat1Label": "সক্রিয় ডিআইডি",
    "stat1Val": "248",
    "stat1Sub": "এই মাসে +১২টি বৃদ্ধি",
    "stat2Label": "ব্যবহারযোগ্য",
    "stat2Val": "64",
    "stat2Sub": "বরাদ্দের জন্য প্রস্তুত",
    "stat3Label": "বরাদ্দকৃত",
    "stat3Val": "184",
    "stat3Sub": "৩২টি ক্লায়েন্ট",
    "stat4Label": "মিসড কল",
    "stat4Val": "18",
    "stat4Sub": "এই সপ্তাহে -৮% হ্রাস",
    "chartTitle": "ভয়েস ও এসএমএস ট্র্যাফিক অ্যাক্টিভিটি",
    "chartTimeframe": "গত ৭ দিন",
    "legend1": "এসএমএস ভলিউম",
    "legend2": "কল ভলিউম"
  },
  "operationalViewTitle": "সম্পূর্ণ অপারেশনাল চিত্র",
  "operationalViewItems": [
    "মোট সক্রিয় ডিআইডি",
    "স্টকে উপলব্ধ ডিআইডি",
    "গ্রাহকদের বরাদ্দকৃত ডিআইডি",
    "ইনকামিং কলের সংখ্যা",
    "প্রাপ্ত এসএমএসের পরিমাণ",
    "গড় কলের সময়কাল",
    "মিসড কলের হার",
    "নম্বর ব্যবহারের কার্যক্ষমতা",
    "গ্রাহক অ্যাকাউন্টভিত্তিক বন্টন",
    "আয় এবং খরচের বিশ্লেষণ"
  ],
  "resellerBadge": "রিসেলার এবং এন্টারপ্রাইজের জন্য নির্মিত",
  "resellerTitle": "আপনার নিজস্ব ভার্চুয়াল নম্বর সরবরাহকারী ব্যবসা গড়ে তুলুন",
  "resellerSubtitle": "আমাদের প্ল্যাটফর্ম যাদের জন্য আদর্শ:",
  "supportedAudiences": [
    {
      "title": "ডিআইডি রিসেলার ও পরিবেশক"
    },
    {
      "title": "ভিওআইপি (VoIP) ও টেলিকম প্রদানকারী"
    },
    {
      "title": "আন্তর্জাতিক কন্ট্যাক্ট সেন্টার"
    },
    {
      "title": "বৃহৎ বহুজাতিক কর্পোরেশন"
    },
    {
      "title": "ইউসিএএএস (UCaaS) সমাধান প্রদানকারী"
    },
    {
      "title": "ক্লাউড কমিউনিকেশন প্ল্যাটফর্ম"
    }
  ],
  "whiteLabelCard": {
    "title": "হোয়াইট-লেবেল (White-Label) উপযোগী",
    "desc": "গ্রাহকদের আপনার নিজস্ব ব্র্যান্ডেড ওয়েব পোর্টাল এবং মোবাইল অ্যাপ অফার করুন, আর নেপথ্যে শক্তিশালী ভয়েস ও মেসেজিং অবকাঠামো পরিচালনা করবে iNet Global।",
    "brandLabel": "আপনার নিজস্ব ব্র্যান্ড",
    "portalLabel": "গ্রাহক পোর্টাল",
    "tab1": "নম্বরসমূহ",
    "tab2": "কলসমূহ",
    "tab3": "এসএমএস",
    "tagline": "আপনার গ্রাহকের দারুণ অভিজ্ঞতা। আমাদের নির্ভরযোগ্য পরিকাঠামো।"
  },
  "ctaBadge": "আসুন আপনার মেসেজিং নেটওয়ার্ক তৈরি করি",
  "ctaTitle": "ব্যবসায়িক সমাধানগুলির সাথে আপনার ব্যবসা বৃদ্ধি করুন",
  "ctaSubtitle": "বুদ্ধিমান ভয়েস রাউটিং এবং আন্তর্জাতিক সমাপ্তি থেকে শুরু করে এআই ভয়েস এবং ভার্চুয়াল নম্বর পর্যন্ত, iNet Global স্কেলেবল টেলিকম সমাধান প্রদান করে যা বিশ্বজুড়ে গ্রাহকদের সাথে যুক্ত হতে সাহায্য করে।",
  "contactUs": "যোগাযোগ করুন",
  "ctaTrust1": "এন্টারপ্রাইজ ক্যারিয়ার SLA",
  "ctaTrust2": "তাৎক্ষণিক ডিআইডি প্রভিশনিং",
  "ctaTrust3": "১০০টিরও বেশি দেশে গ্লোবাল কভারেজ"
};

const ta: VirtualDidTranslation = {
  "breadcrumb": "தயாரிப்புகள் | DID போர்டல் + மொபைல் ஆப்",
  "heroBadge": "DID போர்டல் + மொபைல் ஆப்",
  "heroTitle": "முழுமையான DID மேலாண்மை & மெய்நிகர் எண் தளம்",
  "heroDesc": "ஒருங்கிணைந்த சக்திவாய்ந்த DID போர்டல் மூலம் மெய்நிகர் தொலைபேசி எண்கள், உள்வரும் அழைப்புகள் மற்றும் SMS ஆகியவற்றை நிர்வகிக்கவும். உங்கள் வாடிக்கையாளர்களுக்கு பிரத்யேக எண்களையும் எங்கிருந்தும் தொடர்பு கொள்ள மொபைல் செயலிகளையும் வழங்கவும்.",
  "getStarted": "தொடங்குங்கள்",
  "requestDemo": "டெமோ கோருங்கள்",
  "heroFootnote": "உலகளாவிய எண்கள். உள்ளூர் இருப்பு. ஒரே தளம்.",
  "dashboardPreview": {
    "title": "DID போர்டல்",
    "liveBadge": "நேரலை",
    "tab1": "கண்ணோட்டம்",
    "tab2": "எனது எண்கள்",
    "tab3": "அழைப்பு ரூட்டிங்",
    "tab4": "SMS இன்பாக்ஸ்",
    "stat1Label": "செயலில் உள்ள DIDs",
    "stat1Val": "248",
    "stat2Label": "உள்வரும் அழைப்புகள்",
    "stat2Val": "1,842",
    "stat3Label": "பெறப்பட்ட SMS",
    "stat3Val": "3,126",
    "tableTitle": "உங்கள் உலகளாவிய எண்கள் பட்டியல்",
    "smsNotificationTitle": "புதிய SMS பெறப்பட்டது",
    "smsNotificationBody": "உங்கள் சந்திப்பு காலை 10:30 மணிக்கு உறுதி செய்யப்பட்டுள்ளது.",
    "phoneIncomingText": "உள்வரும் வணிக அழைப்பு",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "+1 212 555 0198 வழியாக"
  },
  "highlightsHeading": "உங்கள் உலகளாவிய எண். உங்கள் முழுமையான கட்டுப்பாடு.",
  "highlights": [
    {
      "title": "உலகளாவிய DID எண்கள்"
    },
    {
      "title": "உள்வரும் அழைப்புகள்"
    },
    {
      "title": "SMS பெறுதல்"
    },
    {
      "title": "மொபைல் செயலி"
    },
    {
      "title": "அழைப்பு பகிர்தல்"
    },
    {
      "title": "DID இருப்பு மேலாண்மை"
    },
    {
      "title": "நேரலை கண்காணிப்பு"
    }
  ],
  "managementBadge": "DID மேலாண்மை",
  "managementTitle": "ஒரே மையப்படுத்தப்பட்ட போர்ட்டலில் அனைத்து DIDகளையும் நிர்வகிக்கவும்",
  "managementSubtitle": "ஒற்றை டாஷ்போர்டிலிருந்து உங்கள் மெய்நிகர் எண்களைத் தேடவும், செயல்படுத்தவும், இடைநிறுத்தவும், உள்ளமைக்கவும் மற்றும் கண்காணிக்கவும்.",
  "managementChecklistTitle": "DID மேலாண்மை அம்சங்கள்",
  "managementChecklist": [
    "உலகளாவிய DID இருப்புப் பட்டியல்",
    "நாடு மற்றும் நகரம் வாரியான தேர்வு",
    "புத்திசாலித்தனமான எண் தேடல்",
    "உடனடி செயல்படுத்தல் (Instant Provisioning)",
    "DID செயல்படுத்துதல் மற்றும் முடக்குதல்",
    "வாடிக்கையாளர்களுக்கு நெகிழ்வான எண் ஒதுக்கீடு",
    "வாடிக்கையாளர் வாரியான DID மேலாண்மை",
    "காலாவதி மற்றும் புதுப்பித்தல் கண்காணிப்பு",
    "DID கட்டணங்கள் மற்றும் செலவுக் கட்டுப்பாடு",
    "எண் பயன்பாட்டுப் போக்குவரத்து கண்காணிப்பு"
  ],
  "inventoryCard": {
    "title": "எண் இருப்பு",
    "subtitle": "உங்கள் வாடிக்கையாளர் கணக்குகளில் 248 எண்கள் ஒதுக்கப்பட்டுள்ளன",
    "provisionBtn": "+ புதிய DID சேர்க்கவும்",
    "searchPlaceholder": "எண்களைத் தேடுங்கள்...",
    "countryFilter": "அனைத்து நாடுகள்",
    "statusFilter": "அனைத்து நிலைகள்",
    "colDid": "DID எண்",
    "colCountry": "நாடு / நகரம்",
    "colCustomer": "வாடிக்கையாளர்",
    "colStatus": "நிலை",
    "showingText": "248 எண்களில் 4 எண்கள் காட்டப்படுகின்றன"
  },
  "callMgmtBadge": "எங்கிருந்தும் அழைப்புகளைப் பெறுங்கள்",
  "callMgmtTitle": "சக்திவாய்ந்த உள்வரும் அழைப்பு ரூட்டிங் மேலாண்மை",
  "callMgmtSubtitle": "உள்வரும் அழைப்புகளை நீங்கள் விரும்பும் சாதனங்களுக்குத் துல்லியமாக வழிநடத்துங்கள்.",
  "forwardingTitle": "அழைப்பு பகிர்தல் (Forwarding)",
  "forwardingSubtitle": "அழைப்புகளை இங்கே பகிரவும்:",
  "forwardingItems": [
    "மொபைல் எண்கள்",
    "SIP கணக்குகள் மற்றும் டிரங்க்குகள்",
    "உலாவி மென்பொருள் போன்கள்",
    "கால் சென்டர் முகவர்கள்",
    "IVR குரல் அமைப்புகள்",
    "பல இடங்களுக்கு ஒரே நேரத்தில்"
  ],
  "advancedRoutingTitle": "மேம்பட்ட ரூட்டிங்",
  "advancedRoutingItems": [
    "நேர அடிப்படையிலான ரூட்டிங்",
    "அழைக்கும் நாடு அடிப்படையிலான ரூட்டிங்",
    "அழைப்பாளர் எண் அடிப்படையிலான ரூட்டிங்",
    "தோல்வி பாதுகாப்பு மாற்று ரூட்டிங் (Failover)",
    "வரிசைமுறை ரிங்கிங்",
    "பல சாதனங்களில் ஒரே நேரத்தில் ரிங்கிங்",
    "வணிக நேர ரூட்டிங் விதிகள்"
  ],
  "journeyCard": {
    "title": "ஸ்மார்ட் அழைப்பு பயணம்",
    "liveBadge": "நேரலை",
    "step1Title": "உள்வரும் அழைப்பு",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "வணிக நேரம்",
    "step2Val": "திங்கள்-வெள்ளி · 09:00–18:00",
    "step3Title": "ஆதரவு குழு",
    "step3Val": "ஒரே நேரத்தில் ரிங் · 3 முகவர்கள்",
    "footerText": "பதில் இல்லையா? உங்கள் மொபைலுக்கு உடனடியாக தானியங்கி பகிர்தல்."
  },
  "mobileBadge": "அழைப்புகள் மற்றும் SMSக்கான மொபைல் ஆப்",
  "mobileTitle": "உங்கள் வணிக DID எண் உங்கள் பாக்கெட்டில்",
  "mobileSubtitle": "பயனர்கள் தங்களின் ஸ்மார்ட்போன்களில் நேரடியாக வணிக அழைப்புகள் மற்றும் SMS செய்திகளைப் பெற பிரத்யேக மொபைல் செயலியை வழங்குங்கள்.",
  "mobileFooter": "உங்கள் வணிகம். எப்போதும் உங்களுடன்.",
  "mobileFeaturesTitle": "செயலியின் முக்கிய அம்சங்கள்",
  "mobileFeatures": [
    {
      "title": "உள்வரும் அழைப்புகள்",
      "desc": "மொபைல் செயலி மூலம் உங்கள் DIDக்கு வரும் அழைப்புகளை நேரடியாகப் பெறுங்கள்."
    },
    {
      "title": "SMS இன்பாக்ஸ்",
      "desc": "பாதுகாப்பான மற்றும் ஒழுங்கமைக்கப்பட்ட இன்பாக்ஸில் SMS செய்திகளைப் பெறுங்கள்."
    },
    {
      "title": "அழைப்பு வரலாறு",
      "desc": "உள்வரும், தவறவிட்ட மற்றும் பதிலளிக்கப்பட்ட அழைப்புகளின் விவரங்களைக் காண்க."
    },
    {
      "title": "SMS வரலாறு",
      "desc": "முந்தைய செய்திகள் மற்றும் வாடிக்கையாளர் உரையாடல்களை எளிதாக அணுகலாம்."
    },
    {
      "title": "புஷ் அறிவிப்புகள்",
      "desc": "அழைப்பு அல்லது புதிய SMS வரும்போது திரையில் உடனடி எச்சரிக்கைகளைப் பெறுங்கள்."
    },
    {
      "title": "பல DID எண்கள்",
      "desc": "ஒரே கணக்கிலிருந்து பல மெய்நிகர் எண்களை நிர்வகிக்கலாம்."
    },
    {
      "title": "தொடர்புகள் மேலாண்மை",
      "desc": "முக்கியமான வணிக வாடிக்கையாளர் எண்களைப் பாதுகாப்பாகச் சேமிக்கவும்."
    }
  ],
  "smsBadge": "எளிமையான SMS பெறுதல்",
  "smsTitle": "வாடிக்கையாளர்களின் முக்கியமான செய்திகளை ஒருபோதும் தவறவிடாதீர்கள்",
  "smsSubtitle": "உங்கள் DID எண்ணை சக்திவாய்ந்த மற்றும் நம்பகமான SMS பெறும் மையமாக மாற்றவும்.",
  "smsPerfectTitle": "இதற்கு மிகவும் ஏற்றது:",
  "smsPerfectItems": [
    "வாடிக்கையாளர் சேவை மற்றும் உதவி மையம்",
    "நிறுவன வணிகத் தொடர்புகள்",
    "விற்பனை வாய்ப்புகள் சேகரிப்பு",
    "சந்திப்பு உறுதிப்படுத்தல்கள் மற்றும் நினைவூட்டல்கள்",
    "அவசர சேவை மற்றும் கணினி எச்சரிக்கைகள்",
    "பாதுகாப்பு சரிபார்ப்பு OTP குறியீடுகள்",
    "இருவழி ஊடாடும் வாடிக்கையாளர் தொடர்பு"
  ],
  "sampleSms": {
    "badge": "வணிக SMS · பெறப்பட்டது",
    "body": "வணக்கம் Jordan, நாளைய உங்களது சந்திப்பு காலை 10:30 மணிக்கு உறுதிசெய்யப்பட்டுள்ளது. மாற்ற விரும்பினால் பதிலளிக்கவும்.",
    "meta": "இன்று, 10:24 AM · Acme ஆதரவு"
  },
  "smsDashboard": {
    "title": "SMS கட்டுப்பாட்டு டாஷ்போர்டு",
    "receivingBadge": "செயலில் உள்ளது",
    "todayLabel": "இன்று பெறப்பட்ட மொத்த SMS",
    "todayVal": "3,126 செய்திகள்",
    "colSender": "அனுப்புநர்",
    "colDid": "இலக்கு DID",
    "colMessage": "செய்தி",
    "colTime": "நேரம்",
    "monitorTitle": "நேரலை கண்காணிப்பு:",
    "monitorItems": [
      "உள்வரும் SMS ஸ்ட்ரீம்",
      "அனுப்புநரின் தொலைபேசி எண்",
      "இலக்கு DID எண்",
      "முழுமையான செய்தி உள்ளடக்கம்",
      "துல்லியமான தேதி மற்றும் நேர முத்திரை",
      "தொடர்புடைய வாடிக்கையாளர் / கணக்கு",
      "மொத்த SMS போக்குவரத்து அளவு"
    ]
  },
  "monitoringBadge": "மேம்பட்ட DID கண்காணிப்பு",
  "monitoringTitle": "ஒவ்வொரு எண்ணின் நிலையும் செயல்பாடும் துல்லியமாக அறியுங்கள்",
  "monitoringSubtitle": "உங்கள் மொத்த DID இருப்பையும் 24/7 நேரலையில் கண்காணிக்கவும்.",
  "monitoringStats": {
    "title": "DID கண்ணோட்டம்",
    "liveBadge": "நேரலை",
    "stat1Label": "செயலில் உள்ள DIDs",
    "stat1Val": "248",
    "stat1Sub": "இந்த மாதம் +12 அதிகரிப்பு",
    "stat2Label": "கிடைப்பவை",
    "stat2Val": "64",
    "stat2Sub": "ஒதுக்கீட்டிற்கு தயார்",
    "stat3Label": "ஒதுக்கப்பட்டவை",
    "stat3Val": "184",
    "stat3Sub": "32 வாடிக்கையாளர்கள்",
    "stat4Label": "தவறவிட்ட அழைப்புகள்",
    "stat4Val": "18",
    "stat4Sub": "இந்த வாரம் -8% குறைவு",
    "chartTitle": "குரல் மற்றும் SMS செயல்பாட்டுப் போக்கு",
    "chartTimeframe": "கடந்த 7 நாட்கள்",
    "legend1": "SMS அளவு",
    "legend2": "அழைப்பு அளவு"
  },
  "operationalViewTitle": "முழுமையான செயல்பாட்டுக் கண்ணோட்டம்",
  "operationalViewItems": [
    "மொத்த செயலில் உள்ள DIDs",
    "இருப்பில் உள்ள DID எண்கள்",
    "வாடிக்கையாளர்களுக்கு ஒதுக்கப்பட்ட DIDs",
    "உள்வரும் அழைப்புகளின் எண்ணிக்கை",
    "பெறப்பட்ட SMSகளின் எண்ணிக்கை",
    "சராசரி அழைப்பு நேரம்",
    "தவறவிட்ட அழைப்புகளின் விகிதம்",
    "எண் பயன்பாட்டுத் திறன்",
    "வாடிக்கையாளர் வாரியான ஒதுக்கீடு",
    "வருவாய் மற்றும் செலவு பகுப்பாய்வு"
  ],
  "resellerBadge": "மறுவிற்பனையாளர்கள் மற்றும் நிறுவனங்களுக்காக",
  "resellerTitle": "உங்கள் சொந்த மெய்நிகர் எண் வழங்கும் வணிகத்தைத் தொடங்குங்கள்",
  "resellerSubtitle": "எங்கள் தளம் இவர்களுக்கு மிகச் சிறந்தது:",
  "supportedAudiences": [
    {
      "title": "DID மறுவிற்பனையாளர்கள்"
    },
    {
      "title": "VoIP மற்றும் தொலைத்தொடர்பு வழங்குநர்கள்"
    },
    {
      "title": "சர்வதேச கால் சென்டர்கள்"
    },
    {
      "title": "பெரிய கார்ப்பரேட் நிறுவனங்கள்"
    },
    {
      "title": "UCaaS தீர்வு வழங்குநர்கள்"
    },
    {
      "title": "கிளவுட் தகவல் தொடர்பு தளங்கள்"
    }
  ],
  "whiteLabelCard": {
    "title": "White-Label முழு ஆதரவு",
    "desc": "உங்கள் சொந்த பிராண்டட் போர்ட்டலையும் மொபைல் பயன்பாட்டையும் வாடிக்கையாளர்களுக்கு வழங்குங்கள்; அடித்தள நெட்வொர்க் உள்கட்டமைப்பை iNet Global பாதுகாப்பாக நிர்வகிக்கிறது.",
    "brandLabel": "உங்கள் சொந்த பிராண்ட்",
    "portalLabel": "வாடிக்கையாளர் போர்ட்டல்",
    "tab1": "எண்கள்",
    "tab2": "அழைப்புகள்",
    "tab3": "SMS",
    "tagline": "உங்கள் வாடிக்கையாளரின் பிராண்ட் அனுபவம். எங்கள் நம்பகமான உள்கட்டமைப்பு."
  },
  "ctaBadge": "உங்கள் வணிகத் தொலைத்தொடர்பு நெட்வொர்க்கை உருவாக்குவோம்",
  "ctaTitle": "நம்பகமான தகவல் தொடர்பு தீர்வுகளுடன் உங்கள் வணிகத்தை வளர்க்கவும்",
  "ctaSubtitle": "ஸ்மார்ட் வாய்ஸ் ரூட்டிங் மற்றும் சர்வதேச டெர்மினேஷன் முதல் AI வாய்ஸ் மற்றும் விர்ச்சுவல் எண்கள் வரை, உலகெங்கிலும் உள்ள வாடிக்கையாளர்களுடன் தெளிவாக இணைய iNet Global நிறுவனங்களுக்கு உதவுகிறது.",
  "contactUs": "எங்களைத் தொடர்பு கொள்ளவும்",
  "ctaTrust1": "எண்டர்பிரைஸ் கேரியர் SLA",
  "ctaTrust2": "உடனடி DID எண் செயல்படுத்தல்",
  "ctaTrust3": "100க்கும் மேற்பட்ட நாடுகளில் உலகளாவிய கவரேஜ்"
};

const te: VirtualDidTranslation = {
  "breadcrumb": "ఉత్పత్తులు | DID పోర్టల్ + మొబైల్ యాప్",
  "heroBadge": "DID పోర్టల్ + మొబైల్ యాప్",
  "heroTitle": "పూర్తి DID నిర్వహణ & వర్చువల్ నంబర్ ప్లాట్‌ఫారమ్",
  "heroDesc": "ఒకే శక్తివంతమైన కేంద్రీకృత DID పోర్టల్ నుండి వర్చువల్ ఫోన్ నంబర్లు, ఇన్‌కమింగ్ కాల్స్ మరియు SMSలను సమర్థవంతంగా నిర్వహించండి. మీ కస్టమర్‌లకు ప్రత్యేక నంబర్‌లతో పాటు ఎక్కడి నుండైనా కాల్స్ మరియు SMSలు స్వీకరించడానికి మొబైల్ యాప్‌ను అందించండి.",
  "getStarted": "ప్రారంభించండి",
  "requestDemo": "డెమో అభ్యర్థించండి",
  "heroFootnote": "గ్లోబల్ నంబర్లు. స్థానిక ఉనికి. ఒకే సమగ్ర వేదిక.",
  "dashboardPreview": {
    "title": "DID పోర్టల్",
    "liveBadge": "లైవ్",
    "tab1": "అవలోకనం",
    "tab2": "నా నంబర్లు",
    "tab3": "కాల్ రూటింగ్",
    "tab4": "SMS ఇన్‌బాక్స్",
    "stat1Label": "యాక్టివ్ DIDs",
    "stat1Val": "248",
    "stat2Label": "ఇన్‌కమింగ్ కాల్స్",
    "stat2Val": "1,842",
    "stat3Label": "స్వీకరించిన SMSలు",
    "stat3Val": "3,126",
    "tableTitle": "మీ గ్లోబల్ నంబర్ల జాబితా",
    "smsNotificationTitle": "కొత్త SMS అందింది",
    "smsNotificationBody": "మీ అపాయింట్‌మెంట్ ఉదయం 10:30 గంటలకు నిర్ధారించబడింది.",
    "phoneIncomingText": "ఇన్‌కమింగ్ బిజినెస్ కాల్",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "+1 212 555 0198 ద్వారా"
  },
  "highlightsHeading": "మీ గ్లోబల్ నంబర్. మీ సంపూర్ణ నియంత్రణ.",
  "highlights": [
    {
      "title": "గ్లోబల్ DID నంబర్లు"
    },
    {
      "title": "ఇన్‌కమింగ్ కాల్స్"
    },
    {
      "title": "SMS స్వీకరణ"
    },
    {
      "title": "మొబైల్ అప్లికేషన్"
    },
    {
      "title": "కాల్ ఫార్వార్డింగ్"
    },
    {
      "title": "DID ఇన్వెంటరీ నిర్వహణ"
    },
    {
      "title": "రియల్-టైమ్ మానిటరింగ్"
    }
  ],
  "managementBadge": "DID నిర్వహణ",
  "managementTitle": "ఒకే కేంద్రీకృత పోర్టల్ నుండి అన్ని DIDలను నిర్వహించండి",
  "managementSubtitle": "సింగిల్ డ్యాష్‌బోర్డ్ నుండి మీ వర్చువల్ నంబర్లను శోధించండి, కేటాయించండి, యాక్టివేట్ చేయండి, తాత్కాలికంగా నిలిపివేయండి, కాన్ఫిగర్ చేయండి మరియు పర్యవేక్షించండి.",
  "managementChecklistTitle": "DID నిర్వహణ ఫీచర్లు",
  "managementChecklist": [
    "గ్లోబల్ DID ఇన్వెంటరీ",
    "దేశం మరియు నగరం వారీగా ఎంపిక",
    "స్మార్ట్ నంబర్ శోధన",
    "తక్షణ కేటాయింపు (Instant Provisioning)",
    "DID యాక్టివేషన్ మరియు డియాక్టివేషన్",
    "వినియోగదారులకు సౌకర్యవంతమైన నంబర్ కేటాయింపు",
    "కస్టమర్ వారీగా DID నిర్వహణ",
    "గడువు మరియు పునరుద్ధరణ పర్యవేక్షణ",
    "DID ధర మరియు వ్యయ నియంత్రణ",
    "నంబర్ వినియోగ ట్రాఫిక్ పర్యవేక్షణ"
  ],
  "inventoryCard": {
    "title": "నంబర్ ఇన్వెంటరీ",
    "subtitle": "మీ కస్టమర్ ఖాతాల్లో 248 నంబర్లు అందుబాటులో ఉన్నాయి",
    "provisionBtn": "+ కొత్త DIDని జోడించండి",
    "searchPlaceholder": "నంబర్లను శోధించండి...",
    "countryFilter": "అన్ని దేశాలు",
    "statusFilter": "అన్ని స్థితులు",
    "colDid": "DID నంబర్",
    "colCountry": "దేశం / నగరం",
    "colCustomer": "కస్టమర్",
    "colStatus": "స్థితి",
    "showingText": "248 నంబర్లలో 4 నంబర్లు చూపబడుతున్నాయి"
  },
  "callMgmtBadge": "ఎక్కడి నుండైనా కాల్స్ స్వీకరించండి",
  "callMgmtTitle": "శక్తివంతమైన ఇన్‌కమింగ్ కాల్ రూటింగ్ నిర్వహణ",
  "callMgmtSubtitle": "ఇన్‌కమింగ్ కాల్‌లను మీరు కోరుకున్న పరికరాలకు ఖచ్చితంగా చేర్చండి.",
  "forwardingTitle": "కాల్ ఫార్వార్డింగ్",
  "forwardingSubtitle": "కాల్‌లను ఇక్కడికి ఫార్వార్డ్ చేయండి:",
  "forwardingItems": [
    "మొబైల్ ఫోన్ నంబర్లు",
    "SIP ఖాతాలు మరియు ట్రంక్‌లు",
    "బ్రౌజర్ సాఫ్ట్‌ఫోన్లు",
    "కాల్ సెంటర్ ఏజెంట్లు",
    "IVR వాయిస్ సిస్టమ్స్",
    "ఒకేసారి బహుళ గమ్యస్థానాలు"
  ],
  "advancedRoutingTitle": "అధునాతన రూటింగ్",
  "advancedRoutingItems": [
    "సమయ-ఆధారిత రూటింగ్",
    "కాలర్ దేశం ఆధారిత రూటింగ్",
    "కాలర్ ఐడీ ఆధారిత రూటింగ్",
    "ఆటోమేటిక్ ఫెయిల్‌ఓవర్ బ్యాకప్ రూటింగ్",
    "వరుసక్రమ రింగింగ్",
    "ఒకేసారి బహుళ పరికరాలలో రింగింగ్",
    "పనివేళల రూటింగ్ నిబంధనలు"
  ],
  "journeyCard": {
    "title": "స్మార్ట్ కాల్ జర్నీ",
    "liveBadge": "లైవ్",
    "step1Title": "ఇన్‌కమింగ్ కాల్",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "వ్యాపార వేళలు",
    "step2Val": "సోమ-శుక్ర · 09:00–18:00",
    "step3Title": "సపోర్ట్ టీమ్",
    "step3Val": "ఏకకాల రింగ్ · 3 ఏజెంట్లు",
    "footerText": "సమాధానం లేదా? వెంటనే మీ మొబైల్‌కు ఆటోమేటిక్ ఫార్వార్డ్."
  },
  "mobileBadge": "కాల్స్ మరియు SMSల కోసం మొబైల్ యాప్",
  "mobileTitle": "మీ బిజినెస్ DID నంబర్ మీ జేబులోనే",
  "mobileSubtitle": "స్మార్ట్‌ఫోన్‌లలో నేరుగా వ్యాపార కాల్‌లు మరియు SMS సందేశాలను స్వీకరించడానికి వినియోగదారులకు ప్రత్యేక మొబైల్ యాప్‌ను అందించండి.",
  "mobileFooter": "మీ వ్యాపారం. ఎల్లప్పుడూ మీతోనే.",
  "mobileFeaturesTitle": "యాప్ ముఖ్య ఫీచర్లు",
  "mobileFeatures": [
    {
      "title": "ఇన్‌కమింగ్ కాల్స్",
      "desc": "మొబైల్ యాప్ ద్వారా నేరుగా మీ DIDకి వచ్చే కాల్‌లను స్వీకరించండి."
    },
    {
      "title": "SMS ఇన్‌బాక్స్",
      "desc": "సురక్షితమైన మరియు క్రమబద్ధీకరించిన ఇన్‌బాక్స్‌లో SMS సందేశాలను పొందండి."
    },
    {
      "title": "కాల్ హిస్టరీ",
      "desc": "ఇన్‌కమింగ్, మిస్డ్ మరియు సమాధానమిచ్చిన కాల్‌ల పూర్తి వివరాలను చూడండి."
    },
    {
      "title": "SMS హిస్టరీ",
      "desc": "మునుపటి సందేశాలు మరియు కస్టమర్ సంభాషణలను సులభంగా శోధించండి."
    },
    {
      "title": "పుష్ నోటిఫికేషన్‌లు",
      "desc": "కాల్ లేదా కొత్త SMS రాగానే మొబైల్ స్క్రీన్‌పై తక్షణ హెచ్చరికలను పొందండి."
    },
    {
      "title": "బహుళ DID నంబర్లు",
      "desc": "ఒకే ఖాతా నుండి బహుళ వర్చువల్ నంబర్లను సౌకర్యవంతంగా నిర్వహించండి."
    },
    {
      "title": "పరిచయాల నిర్వహణ",
      "desc": "ముఖ్యమైన కస్టమర్ నంబర్లను సురక్షితంగా సేవ్ చేయండి."
    }
  ],
  "smsBadge": "సులభమైన SMS స్వీకరణ",
  "smsTitle": "కస్టమర్ల నుండి ముఖ్యమైన సందేశాలను ఎప్పటికీ కోల్పోకండి",
  "smsSubtitle": "మీ DID నంబర్‌ను నమ్మదగిన SMS స్వీకరణ ముగింపు బిందువుగా మార్చుకోండి.",
  "smsPerfectTitle": "వీటికి ఎంతో అనుకూలం:",
  "smsPerfectItems": [
    "కస్టమర్ సపోర్ట్ మరియు హెల్ప్‌డెస్క్",
    "కార్పొరేట్ వ్యాపార సమాచార మార్పిడి",
    "లీడ్ జనరేషన్ మరియు ఎంక్వైరీలు",
    "అపాయింట్‌మెంట్ నిర్ధారణలు మరియు రిమైండర్‌లు",
    "సిస్టమ్ మరియు సేవా అత్యవసర హెచ్చరికలు",
    "భద్రతా నిర్ధారణ OTP కోడ్‌లు",
    "ద్విముఖ పరస్పర కస్టమర్ కమ్యూనికేషన్"
  ],
  "sampleSms": {
    "badge": "వ్యాపార SMS · అందింది",
    "body": "హలో Jordan, రేపు ఉదయం 10:30 గంటలకు మీ అపాయింట్‌మెంట్ నిర్ధారించబడింది. మార్చాలనుకుంటే ప్రత్యుత్తరం ఇవ్వండి.",
    "meta": "నేడు, 10:24 AM · Acme సపోర్ట్"
  },
  "smsDashboard": {
    "title": "SMS నియంత్రణ డ్యాష్‌బోర్డ్",
    "receivingBadge": "స్వీకరణ సక్రియం",
    "todayLabel": "నేడు అందిన మొత్తం SMSలు",
    "todayVal": "3,126 సందేశాలు",
    "colSender": "పంపినవారు",
    "colDid": "గమ్య DID",
    "colMessage": "సందేశం",
    "colTime": "సమయం",
    "monitorTitle": "రియల్-టైమ్ పర్యవేక్షణ:",
    "monitorItems": [
      "ఇన్‌కమింగ్ SMS స్ట్రీమ్",
      "పంపినవారి ఫోన్ నంబర్",
      "లక్ష్య DID నంబర్",
      "పూర్తి సందేశ కంటెంట్",
      "ఖచ్చితమైన తేదీ మరియు సమయం",
      "సంబంధిత కస్టమర్ / ఖాతా",
      "మొత్తం SMS ట్రాఫిక్ పరిమాణం"
    ]
  },
  "monitoringBadge": "అధునాతన DID పర్యవేక్షణ",
  "monitoringTitle": "ప్రతి నంబర్ యొక్క నిజ-సమయ స్థితి మరియు ట్రాఫిక్‌ను తెలుసుకోండి",
  "monitoringSubtitle": "మీ మొత్తం DID ఇన్వెంటరీని 24/7 నిజ సమయంలో పర్యవేక్షించండి.",
  "monitoringStats": {
    "title": "DID సమగ్ర వివరాలు",
    "liveBadge": "నిజ-సమయం",
    "stat1Label": "యాక్టివ్ DIDs",
    "stat1Val": "248",
    "stat1Sub": "ఈ నెలలో +12 పెరుగుదల",
    "stat2Label": "అందుబాటులో ఉన్నవి",
    "stat2Val": "64",
    "stat2Sub": "కేటాయింపుకు సిద్ధం",
    "stat3Label": "కేటాయించినవి",
    "stat3Val": "184",
    "stat3Sub": "32 క్లయింట్లు",
    "stat4Label": "మిస్డ్ కాల్స్",
    "stat4Val": "18",
    "stat4Sub": "ఈ వారం -8% తగ్గుదల",
    "chartTitle": "వాయిస్ & SMS ట్రాఫిక్ ధోరణి",
    "chartTimeframe": "గత 7 రోజులు",
    "legend1": "SMS పరిమాణం",
    "legend2": "కాల్ పరిమాణం"
  },
  "operationalViewTitle": "పూర్తి కార్యాచరణ దృశ్యమానత",
  "operationalViewItems": [
    "మొత్తం యాక్టివ్ DIDs",
    "స్టాక్‌లో అందుబాటులో ఉన్న నంబర్లు",
    "కస్టమర్లకు కేటాయించిన DIDs",
    "ఇన్‌కమింగ్ కాల్స్ పరిమాణం",
    "స్వీకరించిన SMSల సంఖ్య",
    "సగటు కాల్ సమయం",
    "మిస్డ్ కాల్స్ రేటు",
    "నంబర్ వినియోగ సామర్థ్యం",
    "కస్టమర్ ఖాతాల వారీగా పంపిణీ",
    "ఆదాయం మరియు వ్యయ విశ్లేషణ"
  ],
  "resellerBadge": "రీసెల్లర్లు మరియు సంస్థల కోసం రూపొందించబడింది",
  "resellerTitle": "మీ స్వంత వర్చువల్ నంబర్ సేవల వ్యాపారాన్ని ప్రారంభించండి",
  "resellerSubtitle": "మా ప్లాట్‌ఫారమ్ వీరికి అత్యంత అనుకూలమైనది:",
  "supportedAudiences": [
    {
      "title": "DID రీసెల్లర్లు మరియు పంపిణీదారులు"
    },
    {
      "title": "VoIP మరియు టెలికాం ప్రొవైడర్లు"
    },
    {
      "title": "అంతర్జాతీయ కాంటాక్ట్ సెంటర్లు"
    },
    {
      "title": "బహుళజాతి కార్పొరేట్ సంస్థలు"
    },
    {
      "title": "UCaaS పరిష్కారాల ప్రొవైడర్లు"
    },
    {
      "title": "క్లౌడ్ కమ్యూనికేషన్ ప్లాట్‌ఫారమ్‌లు"
    }
  ],
  "whiteLabelCard": {
    "title": "వైట్-లేబుల్ (White-Label) పూర్తి మద్దతు",
    "desc": "కస్టమర్లకు మీ స్వంత బ్రాండెడ్ పోర్టల్ మరియు మొబైల్ యాప్‌ను అందించండి; అంతర్లీన నెట్‌వర్క్ మౌలిక సదుపాయాలను iNet Global సురక్షితంగా నిర్వహిస్తుంది.",
    "brandLabel": "మీ స్వంత బ్రాండ్",
    "portalLabel": "కస్టమర్ పోర్టల్",
    "tab1": "నంబర్లు",
    "tab2": "కాల్స్",
    "tab3": "SMS",
    "tagline": "మీ కస్టమర్‌కు మీ బ్రాండ్ అనుభవం. మా విశ్వసనీయ నెట్‌వర్క్."
  },
  "ctaBadge": "మీ మెసేజింగ్ మరియు వాయిస్ నెట్‌వర్క్‌ను నిర్మిద్దాం",
  "ctaTitle": "వ్యాపార కమ్యూనికేషన్ పరిష్కారాలతో మీ వ్యాపారాన్ని విస్తరించండి",
  "ctaSubtitle": "స్మార్ట్ వాయిస్ రూటింగ్ మరియు అంతర్జాతీయ టెర్మినేషన్ నుండి AI వాయిస్ మరియు వర్చువల్ నంబర్ల వరకు, iNet Global కంపెనీలు ప్రపంచవ్యాప్తంగా కస్టమర్లతో విశ్వసనీయంగా కనెక్ట్ అవ్వడానికి స్కేలబుల్ పరిష్కారాలను అందిస్తుంది.",
  "contactUs": "మమ్మల్ని సంప్రదించండి",
  "ctaTrust1": "ఎంటర్‌ప్రైజ్ క్యారియర్ SLA",
  "ctaTrust2": "తక్షణ DID నంబర్ కేటాయింపు",
  "ctaTrust3": "100 కంటే ఎక్కువ దేశాలలో గ్లోబల్ కవరేజ్"
};

const mr: VirtualDidTranslation = {
  "breadcrumb": "उत्पादने | DID पोर्टल + मोबाईल ॲप",
  "heroBadge": "DID पोर्टल + मोबाईल ॲप",
  "heroTitle": "संपूर्ण DID व्यवस्थापन आणि व्हर्च्युअल नंबर प्लॅटफॉर्म",
  "heroDesc": "एका शक्तिशाली केंद्रीकृत DID पोर्टलवरून व्हर्च्युअल फोन नंबर, येणारे कॉल्स आणि SMS चे सहज व्यवस्थापन करा. आपल्या ग्राहकांना जगात कुठूनही कॉल आणि SMS स्वीकारण्यासाठी मोबाईल ॲपसह समर्पित नंबर द्या.",
  "getStarted": "सुरू करा",
  "requestDemo": "डेमो विनंती करा",
  "heroFootnote": "जागतिक नंबर. स्थानिक उपस्थिती. एकच एकात्मिक व्यासपीठ.",
  "dashboardPreview": {
    "title": "DID पोर्टल",
    "liveBadge": "थेट",
    "tab1": "विहंगावलोकन",
    "tab2": "माझे नंबर",
    "tab3": "कॉल राउटिंग",
    "tab4": "SMS इनबॉक्स",
    "stat1Label": "सक्रिय DIDs",
    "stat1Val": "248",
    "stat2Label": "येणारे कॉल्स",
    "stat2Val": "1,842",
    "stat3Label": "प्राप्त SMS",
    "stat3Val": "3,126",
    "tableTitle": "तुमची जागतिक नंबर सूची",
    "smsNotificationTitle": "नवीन SMS प्राप्त झाला",
    "smsNotificationBody": "तुमची अपॉइंटमेंट सकाळी 10:30 वाजता निश्चित झाली आहे.",
    "phoneIncomingText": "येणारा व्यावसायिक कॉल",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "+1 212 555 0198 द्वारे"
  },
  "highlightsHeading": "तुमचा जागतिक नंबर. तुमचे पूर्ण नियंत्रण.",
  "highlights": [
    {
      "title": "ग्लोबल DID नंबर्स"
    },
    {
      "title": "येणारे कॉल्स"
    },
    {
      "title": "SMS स्वीकारणे"
    },
    {
      "title": "मोबाईल ॲप"
    },
    {
      "title": "कॉल फॉरवर्डिंग"
    },
    {
      "title": "DID इन्व्हेंटरी व्यवस्थापन"
    },
    {
      "title": "थेट मॉनिटरिंग"
    }
  ],
  "managementBadge": "DID व्यवस्थापन",
  "managementTitle": "एकाच मध्यवर्ती पोर्टलवरून सर्व DID व्यवस्थापित करा",
  "managementSubtitle": "एकाच डॅशबोर्डवरून तुमचे व्हर्च्युअल नंबर शोधा, तरतूद करा, सक्रिय करा, निलंबित करा, कॉन्फिगर करा आणि निरीक्षण करा.",
  "managementChecklistTitle": "DID व्यवस्थापन वैशिष्ट्ये",
  "managementChecklist": [
    "जागतिक DID इन्व्हेंटरी",
    "देश आणि शहरानुसार निवड",
    "स्मार्ट नंबर शोध",
    "झटपट तरतूद (Instant Provisioning)",
    "DID सक्रिय आणि निष्क्रिय करणे",
    "ग्राहकांना लवचिक नंबर वाटप",
    "ग्राहकनिहाय DID व्यवस्थापन",
    "मुदत संपणे आणि नूतनीकरण ट्रॅकिंग",
    "DID दर आणि खर्च नियंत्रण",
    "नंबर वापर ट्रॅफिक मॉनिटरिंग"
  ],
  "inventoryCard": {
    "title": "नंबर इन्व्हेंटरी",
    "subtitle": "तुमच्या ग्राहक खात्यांमध्ये 248 नंबर उपलब्ध",
    "provisionBtn": "+ नवीन DID जोडा",
    "searchPlaceholder": "नंबर शोधा...",
    "countryFilter": "सर्व देश",
    "statusFilter": "सर्व स्थिती",
    "colDid": "DID नंबर",
    "colCountry": "देश / शहर",
    "colCustomer": "ग्राहक",
    "colStatus": "स्थिती",
    "showingText": "248 पैकी 4 नंबर दाखवत आहे"
  },
  "callMgmtBadge": "कुठूनही कॉल स्वीकारा",
  "callMgmtTitle": "शक्तिशाली इनकमिंग कॉल राउटिंग व्यवस्थापन",
  "callMgmtSubtitle": "येणारे कॉल्स तुम्हाला हव्या असलेल्या उपकरणांवर आणि ठिकाणी अचूकपणे पोहोचवा.",
  "forwardingTitle": "कॉल फॉरवर्डिंग",
  "forwardingSubtitle": "कॉल फॉरवर्ड करा इथे:",
  "forwardingItems": [
    "मोबाईल फोन नंबर",
    "SIP खाती आणि ट्रंक्स",
    "ब्राउझर सॉफ्टफोन्स",
    "कॉल सेंटर एजंट्स",
    "IVR व्हॉइस प्रणाली",
    "एकाच वेळी अनेक गंतव्यस्थाने"
  ],
  "advancedRoutingTitle": "प्रगत राउटिंग",
  "advancedRoutingItems": [
    "वेळेवर आधारित राउटिंग",
    "कॉलरच्या देशावर आधारित राउटिंग",
    "कॉलर आयडीवर आधारित राउटिंग",
    "आपत्कालीन बॅकअप राउटिंग (Failover)",
    "अनुक्रमिक रिंगिंग",
    "एकाच वेळी अनेक उपकरणांवर रिंग",
    "कार्यालयीन कामकाजाच्या वेळेचे नियम"
  ],
  "journeyCard": {
    "title": "स्मार्ट कॉल प्रवास",
    "liveBadge": "थेट",
    "step1Title": "येणारा कॉल",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "कामाचे तास",
    "step2Val": "सोम-शुक्र · 09:00–18:00",
    "step3Title": "सपोर्ट टीम",
    "step3Val": "एकाच वेळी रिंग · 3 एजंट्स",
    "footerText": "उत्तर नाही? त्वरित तुमच्या मोबाईलवर फॉरवर्ड."
  },
  "mobileBadge": "कॉल आणि SMS साठी मोबाईल ॲप",
  "mobileTitle": "तुमचा व्यावसायिक DID नंबर तुमच्या खिशात",
  "mobileSubtitle": "वापरकर्त्यांना त्यांच्या स्मार्टफोनवर थेट व्यवसाय कॉल्स आणि SMS प्राप्त करण्यासाठी एक समर्पित मोबाईल ॲप द्या.",
  "mobileFooter": "तुमचा व्यवसाय. नेहमी तुमच्या सोबत.",
  "mobileFeaturesTitle": "ॲपची प्रमुख वैशिष्ट्ये",
  "mobileFeatures": [
    {
      "title": "येणारे कॉल्स",
      "desc": "मोबाईल ॲपद्वारे थेट तुमच्या DID वर येणारे कॉल्स स्वीकारा."
    },
    {
      "title": "SMS इनबॉक्स",
      "desc": "सुरक्षित आणि व्यवस्थित इनबॉक्समध्ये येणारे SMS संदेश मिळवा."
    },
    {
      "title": "कॉल इतिहास",
      "desc": "येणारे, चुकलेले आणि उत्तर दिलेले कॉल्स तपशीलवार पहा."
    },
    {
      "title": "SMS इतिहास",
      "desc": "मागील संदेश आणि ग्राहक संभाषणे सहज शोधा."
    },
    {
      "title": "पुश सूचना (Push Notifications)",
      "desc": "नवीन कॉल किंवा SMS येताच स्क्रीनवर झटपट सूचना मिळवा."
    },
    {
      "title": "एकाधिक DID नंबर्स",
      "desc": "एकाच खात्यावरून अनेक व्हर्च्युअल नंबर सोयीस्करपणे व्यवस्थापित करा."
    },
    {
      "title": "संपर्क व्यवस्थापन",
      "desc": "महत्त्वाचे ग्राहक आणि व्यावसायिक नंबर सुरक्षितपणे जतन करा."
    }
  ],
  "smsBadge": "सुलभ SMS स्वीकारणे",
  "smsTitle": "ग्राहकांचे महत्त्वाचे संदेश कधीही चुकवू नका",
  "smsSubtitle": "तुमचा DID नंबर एका शक्तिशाली आणि विश्वासार्ह SMS स्वीकारण्याच्या एंडपॉईंटमध्ये बदला.",
  "smsPerfectTitle": "यासाठी अत्यंत उपयुक्त:",
  "smsPerfectItems": [
    "ग्राहक सेवा आणि हेल्पडेस्क सपोर्ट",
    "दैनंदिन कॉर्पोरेट व्यावसायिक संवाद",
    "लीड जनरेशन आणि ग्राहकांच्या चौकशी",
    "अपॉइंटमेंट पुष्टीकरण आणि स्मरणपत्रे",
    "सिस्टम आणि आपत्कालीन सेवा सूचना",
    "खाते पडताळणी OTP सुरक्षा कोड",
    "द्विमार्गी परस्पर ग्राहक संवाद"
  ],
  "sampleSms": {
    "badge": "व्यवसाय SMS · प्राप्त",
    "body": "नमस्कार Jordan, उद्या सकाळी 10:30 वाजता तुमची अपॉइंटमेंट निश्चित झाली आहे. वेळ बदलायची असल्यास उत्तर द्या.",
    "meta": "आज, 10:24 AM · Acme सपोर्ट"
  },
  "smsDashboard": {
    "title": "SMS नियंत्रण डॅशबोर्ड",
    "receivingBadge": "स्वीकृती सक्रिय",
    "todayLabel": "आज प्राप्त झालेले एकूण SMS",
    "todayVal": "3,126 संदेश",
    "colSender": "प्रेषक",
    "colDid": "लक्ष्य DID",
    "colMessage": "संदेश",
    "colTime": "वेळ",
    "monitorTitle": "थेट मॉनिटरिंग:",
    "monitorItems": [
      "इनकमिंग SMS प्रवाह",
      "प्रेषकाचा फोन नंबर",
      "लक्ष्य DID नंबर",
      "संपूर्ण संदेश मजकूर",
      "अचूक तारीख आणि वेळ",
      "संबंधित ग्राहक / खाते",
      "एकूण SMS ट्रॅफिक प्रमाण"
    ]
  },
  "monitoringBadge": "प्रगत DID मॉनिटरिंग",
  "monitoringTitle": "प्रत्येक नंबरची थेट स्थिती आणि ट्रॅफिक जाणून घ्या",
  "monitoringSubtitle": "तुमची संपूर्ण DID इन्व्हेंटरी 24/7 थेट पहा.",
  "monitoringStats": {
    "title": "DID तपशील विहंगावलोकन",
    "liveBadge": "थेट",
    "stat1Label": "सक्रिय DIDs",
    "stat1Val": "248",
    "stat1Sub": "या महिन्यात +12 वाढ",
    "stat2Label": "उपलब्ध",
    "stat2Val": "64",
    "stat2Sub": "वाटपासाठी तयार",
    "stat3Label": "वाटप केलेले",
    "stat3Val": "184",
    "stat3Sub": "32 ग्राहक",
    "stat4Label": "चुकलेले कॉल्स",
    "stat4Val": "18",
    "stat4Sub": "या आठवड्यात -8% घट",
    "chartTitle": "व्हॉइस आणि SMS ट्रॅफिक ट्रेंड",
    "chartTimeframe": "मागील 7 दिवस",
    "legend1": "SMS प्रमाण",
    "legend2": "कॉल प्रमाण"
  },
  "operationalViewTitle": "संपूर्ण ऑपरेशनल दृश्य",
  "operationalViewItems": [
    "एकूण सक्रिय DIDs",
    "स्टॉकमध्ये उपलब्ध नंबर",
    "ग्राहकांना वाटप केलेले DIDs",
    "येणाऱ्या कॉल्सचे प्रमाण",
    "प्राप्त SMS ची संख्या",
    "सरासरी कॉल कालावधी",
    "चुकलेल्या कॉल्सचा दर",
    "नंबर वापर कार्यक्षमता",
    "ग्राहक खात्यांनुसार वाटप",
    "महसूल आणि खर्च विश्लेषण"
  ],
  "resellerBadge": "पुनर्विक्रेते आणि उद्योगांसाठी",
  "resellerTitle": "तुमचा स्वतःचा व्हर्च्युअल नंबर सेवा व्यवसाय सुरू करा",
  "resellerSubtitle": "आमचे व्यासपीठ यांच्यासाठी आदर्श आहे:",
  "supportedAudiences": [
    {
      "title": "DID पुनर्विक्रेते आणि वितरक"
    },
    {
      "title": "VoIP आणि टेलिकॉम प्रदाते"
    },
    {
      "title": "आंतरराष्ट्रीय संपर्क केंद्रे"
    },
    {
      "title": "मोठ्या कॉर्पोरेट कंपन्या"
    },
    {
      "title": "UCaaS सोल्यूशन्स प्रदाते"
    },
    {
      "title": "क्लाउड कम्युनिकेशन प्लॅटफॉर्म"
    }
  ],
  "whiteLabelCard": {
    "title": "व्हाईट-लेबल (White-Label) पूर्ण समर्थन",
    "desc": "ग्राहकांना तुमचे स्वतःचे ब्रँडेड पोर्टल आणि मोबाईल ॲप ऑफर करा; तर मुख्य व्हॉइस आणि मेसेजिंग पायाभूत सुविधा iNet Global सुरक्षितपणे चालवेल.",
    "brandLabel": "तुमचा स्वतःचा ब्रँड",
    "portalLabel": "ग्राहक पोर्टल",
    "tab1": "नंबर",
    "tab2": "कॉल्स",
    "tab3": "SMS",
    "tagline": "तुमच्या ग्राहकाचा ब्रँड अनुभव. आमची विश्वासार्ह पायाभूत सुविधा."
  },
  "ctaBadge": "चला तुमचे दूरसंचार नेटवर्क उभे करूया",
  "ctaTitle": "व्यावसायिक संवादाच्या सोल्यूशन्ससह तुमचा व्यवसाय वाढवा",
  "ctaSubtitle": "स्मार्ट व्हॉइस राउटिंग आणि आंतरराष्ट्रीय टर्मिनेशनपासून ते एआय व्हॉइस आणि व्हर्च्युअल नंबरपर्यंत, iNet Global जगभरातील ग्राहकांशी जोडले राहण्यासाठी स्केलेबल उपाय प्रदान करते.",
  "contactUs": "आमच्याशी संपर्क साधा",
  "ctaTrust1": "एंटरप्राइझ कॅरियर SLA",
  "ctaTrust2": "झटपट DID नंबर वाटप",
  "ctaTrust3": "100 हून अधिक देशांमध्ये जागतिक कव्हरेज"
};

const sw: VirtualDidTranslation = {
  "breadcrumb": "Bidhaa | Tovuti ya DID + Programu ya Simu",
  "heroBadge": "Tovuti ya DID + Programu ya Simu",
  "heroTitle": "Usimamizi Kamili wa DID na Mfumo wa Nambari Pepe",
  "heroDesc": "Simamia nambari za simu pepe, simu zinazoingia, na SMS kupitia tovuti moja imara ya DID. Wape wateja wako nambari maalum pamoja na programu ya simu ya mkononi ili kupokea simu na SMS popote walipo duniani.",
  "getStarted": "Anza Sasa",
  "requestDemo": "Omba Onyesho",
  "heroFootnote": "Nambari za kimataifa. Uwepo wa ndani. Jukwaa moja jumuishi.",
  "dashboardPreview": {
    "title": "Tovuti ya DID",
    "liveBadge": "Moja kwa moja",
    "tab1": "Muhtasari",
    "tab2": "Nambari zangu",
    "tab3": "Uelekezaji simu",
    "tab4": "Kikasha cha SMS",
    "stat1Label": "DID Zinazotumika",
    "stat1Val": "248",
    "stat2Label": "Simu zinazoingia",
    "stat2Val": "1,842",
    "stat3Label": "SMS zilizopokelewa",
    "stat3Val": "3,126",
    "tableTitle": "Orodha ya nambari zako za kimataifa",
    "smsNotificationTitle": "SMS mpya imepokelewa",
    "smsNotificationBody": "Miadi yako imethibitishwa saa 10:30 asubuhi.",
    "phoneIncomingText": "Simu ya kibiashara inayoingia",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "kupitia +1 212 555 0198"
  },
  "highlightsHeading": "Nambari Yako ya Kimataifa. Udhibiti Wako Kamili.",
  "highlights": [
    {
      "title": "Nambari za Kimataifa za DID"
    },
    {
      "title": "Simu Zinazoingia"
    },
    {
      "title": "Kupokea SMS"
    },
    {
      "title": "Programu ya Simu"
    },
    {
      "title": "Uhamishaji wa Simu"
    },
    {
      "title": "Usimamizi wa DID"
    },
    {
      "title": "Ufuatiliaji wa Wakati Halisi"
    }
  ],
  "managementBadge": "Usimamizi wa DID",
  "managementTitle": "Simamia DID Zote Kutoka Tovuti Moja Kuu",
  "managementSubtitle": "Tafuta, sajili, anzisha, sitisha, sanidi na fuatilia nambari zako pepe kutoka dashibodi moja rahisi.",
  "managementChecklistTitle": "Vipengele vya Usimamizi wa DID",
  "managementChecklist": [
    "Orodha ya kimataifa ya nambari za DID",
    "Uchaguzi kulingana na nchi na jiji",
    "Utafutaji wa nambari kwa wepesi",
    "Usajili wa papo hapo (Instant Provisioning)",
    "Kuanzisha na kusitisha DID",
    "Ugawaji rahisi wa nambari kwa wateja",
    "Usimamizi wa DID kwa kila akaunti ya mteja",
    "Usimamizi wa tarehe za kumalizika",
    "Udhibiti wa bei na gharama za DID",
    "Ufuatiliaji wa matumizi ya nambari"
  ],
  "inventoryCard": {
    "title": "Orodha ya nambari",
    "subtitle": "Nambari 248 zilizosambazwa kwa akaunti za wateja",
    "provisionBtn": "+ Sajili DID Mpya",
    "searchPlaceholder": "Tafuta nambari...",
    "countryFilter": "Nchi zote",
    "statusFilter": "Hali zote",
    "colDid": "NAMBARI YA DID",
    "colCountry": "NCHI / JIJI",
    "colCustomer": "MTEJA",
    "colStatus": "HALI",
    "showingText": "Inaonyesha 4 kati ya nambari 248"
  },
  "callMgmtBadge": "Pokea Simu Popote Ulipo",
  "callMgmtTitle": "Usimamizi Bora wa Uelekezaji wa Simu Zinazoingia",
  "callMgmtSubtitle": "Elekeza simu zinazoingia kwa usahihi pale unapotaka zifike.",
  "forwardingTitle": "Uhamishaji wa Simu",
  "forwardingSubtitle": "Hamisha simu kwenda:",
  "forwardingItems": [
    "Nambari za simu za mkononi",
    "Akaunti na mifumo ya SIP",
    "Softphones kwenye vivinjari",
    "Mawakala wa vituo vya simu",
    "Mifumo ya sauti ya kiotomatiki (IVR)",
    "Maeneo mengi kwa wakati mmoja"
  ],
  "advancedRoutingTitle": "Uelekezaji Mahiri",
  "advancedRoutingItems": [
    "Uelekezaji kulingana na muda",
    "Uelekezaji kulingana na nchi ya mpigaji",
    "Uelekezaji kulingana na nambari ya mpigaji",
    "Uelekezaji mbadala wa dharura (Failover)",
    "Milio ya mfululizo",
    "Milio ya wakati mmoja kwenye vifaa vingi",
    "Uelekezaji wa saa za kazi za ofisi"
  ],
  "journeyCard": {
    "title": "Mtiririko wa simu mahiri",
    "liveBadge": "Moja kwa moja",
    "step1Title": "Simu inayoingia",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Saa za kazi",
    "step2Val": "Jumatatu-Ijumaa · 09:00–18:00",
    "step3Title": "Timu ya usaidizi",
    "step3Val": "Milio ya pamoja · Mawakala 3",
    "footerText": "Hakuna jibu? Inahamishiwa kiotomatiki kwenye simu yako."
  },
  "mobileBadge": "Programu ya Simu kwa Simu na SMS",
  "mobileTitle": "Nambari Yako ya Biashara ya DID Kwenye Mfuko Wako",
  "mobileSubtitle": "Wape watumiaji programu maalum ya simu ili kupokea simu za kibiashara na SMS moja kwa moja kwenye simu zao za mkononi.",
  "mobileFooter": "Biashara yako. Daima iko nawe.",
  "mobileFeaturesTitle": "Vipengele Muhimu vya Programu",
  "mobileFeatures": [
    {
      "title": "Simu Zinazoingia",
      "desc": "Pokea simu zinazokuja kwenye DID yako moja kwa moja kupitia programu ya simu."
    },
    {
      "title": "Kikasha cha SMS",
      "desc": "Pokea ujumbe wa SMS kwenye kikasha salama na kilichopangwa vizuri."
    },
    {
      "title": "Historia ya Simu",
      "desc": "Tazama kumbukumbu kamili za simu zilizopokelewa, zilizokosa na zilizopigwa."
    },
    {
      "title": "Historia ya SMS",
      "desc": "Fikia kwa urahisi mazungumzo na jumbe zilizopita za wateja."
    },
    {
      "title": "Arifa za Papo Hapo",
      "desc": "Pata taarifa za haraka kwenye skrini simu au SMS mpya inapoingia."
    },
    {
      "title": "Nambari Nyingi za DID",
      "desc": "Simamia nambari pepe kadhaa kwa urahisi kutoka kwenye akaunti moja."
    },
    {
      "title": "Usimamizi wa Anwani",
      "desc": "Hifadhi na panga nambari za wateja muhimu kwa usalama."
    }
  ],
  "smsBadge": "Kupokea SMS kwa Urahisi",
  "smsTitle": "Kamwe Usikose Ujumbe Muhimu Kutoka kwa Wateja",
  "smsSubtitle": "Geuza nambari yako ya DID kuwa kituo imara na thabiti cha kupokea SMS.",
  "smsPerfectTitle": "Inafaa sana kwa:",
  "smsPerfectItems": [
    "Huduma na msaada kwa wateja",
    "Mawasiliano ya kawaida ya kibiashara",
    "Kukusanya fursa mpya za biashara",
    "Uthibitisho na vikumbusho vya miadi",
    "Taarifa za dharura na mfumo",
    "Nambari za uthibitishaji wa akaunti (OTP)",
    "Mawasiliano shirikishi ya pande mbili"
  ],
  "sampleSms": {
    "badge": "SMS ya Biashara · Imepokelewa",
    "body": "Hujambo Jordan, miadi yako ya kesho saa 10:30 asubuhi imethibitishwa. Jibu ujumbe huu ikiwa ungependa kubadilisha.",
    "meta": "Leo, 10:24 AM · Usaidizi wa Acme"
  },
  "smsDashboard": {
    "title": "Dashibodi ya Usimamizi wa SMS",
    "receivingBadge": "Inapokea sasa",
    "todayLabel": "Jumla ya SMS zilizopokelewa leo",
    "todayVal": "Ujumbe 3,126",
    "colSender": "MTUMAJI",
    "colDid": "DID INAYOPOKEA",
    "colMessage": "UJUMBE",
    "colTime": "MUDA",
    "monitorTitle": "Ufuatiliaji wa moja kwa moja:",
    "monitorItems": [
      "Mtiririko wa SMS zinazoingia",
      "Nambari ya simu ya mtumaji",
      "Nambari ya DID inayopokea",
      "Maudhui yote ya ujumbe",
      "Tarehe na muhuri sahihi wa muda",
      "Mteja / Akaunti inayohusika",
      "Takwimu za ujazo wa SMS"
    ]
  },
  "monitoringBadge": "Ufuatiliaji wa Kina wa DID",
  "monitoringTitle": "Fahamu Hali na Trafiki ya Kila Nambari kwa Wakati Halisi",
  "monitoringSubtitle": "Fuatilia orodha yako yote ya DID moja kwa moja masaa 24/7.",
  "monitoringStats": {
    "title": "Muhtasari wa DID",
    "liveBadge": "Wakati halisi",
    "stat1Label": "DID Zinazotumika",
    "stat1Val": "248",
    "stat1Sub": "Ongezeko la +12 mwezi huu",
    "stat2Label": "Zinazopatikana",
    "stat2Val": "64",
    "stat2Sub": "Ziko tayari kugawiwa",
    "stat3Label": "Zilizogawiwa",
    "stat3Val": "184",
    "stat3Sub": "Wateja 32",
    "stat4Label": "Simu zilizokosa",
    "stat4Val": "18",
    "stat4Sub": "Punguzo la -8% wiki hii",
    "chartTitle": "Mwenendo wa Trafiki ya Sauti na SMS",
    "chartTimeframe": "Siku 7 zilizopita",
    "legend1": "Kiasi cha SMS",
    "legend2": "Kiasi cha simu"
  },
  "operationalViewTitle": "Muonekano kamili wa kiutendaji",
  "operationalViewItems": [
    "Jumla ya DID zinazotumika",
    "Nambari za DID zilizopo ghalani",
    "DID zilizogawiwa kwa wateja",
    "Idadi ya simu zinazoingia",
    "Kiasi cha SMS zilizopokelewa",
    "Wastani wa muda wa maongezi",
    "Kiwango cha simu zilizokosa",
    "Kiwango cha matumizi ya nambari",
    "Ugawaji kulingana na akaunti za wateja",
    "Ufuatiliaji wa mapato na gharama"
  ],
  "resellerBadge": "Imejengwa kwa Wauzaji na Mashirika Makubwa",
  "resellerTitle": "Anzisha Biashara Yako Mwenyewe ya Kutoa Nambari Pepe",
  "resellerSubtitle": "Jukwaa letu linafaa zaidi kwa:",
  "supportedAudiences": [
    {
      "title": "Wauzaji na wasambazaji wa DID"
    },
    {
      "title": "Watoa huduma za VoIP na simu"
    },
    {
      "title": "Vituo vya kimataifa vya mawasiliano"
    },
    {
      "title": "Makampuni makubwa ya kibiashara"
    },
    {
      "title": "Watoa huduma za suluhisho za UCaaS"
    },
    {
      "title": "Majukwaa ya mawasiliano ya wingu (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Usaidizi Kamili wa White-Label",
    "desc": "Wape wateja wako tovuti yenye nembo yako na programu maalum ya simu, huku miundombinu thabiti ya sauti na ujumbe ikiendeshwa na iNet Global.",
    "brandLabel": "Chapa yako mwenyewe",
    "portalLabel": "Tovuti ya mteja",
    "tab1": "Nambari",
    "tab2": "Simu",
    "tab3": "SMS",
    "tagline": "Uzoefu wa chapa ya mteja wako. Miundombinu yetu ya kuaminika."
  },
  "ctaBadge": "TUJENGE MTANDAO WAKO WA MAWASILIANO",
  "ctaTitle": "Kuza Biashara Yako na Suluhisho za Mawasiliano ya Biashara",
  "ctaSubtitle": "Kuanzia uelekezaji mahiri wa sauti na huduma za kimataifa hadi AI Voice na nambari pepe, iNet Global hutoa suluhisho imara zinazosaidia biashara kuungana na wateja kwa uwazi na usalama duniani kote.",
  "contactUs": "Wasiliana Nasi",
  "ctaTrust1": "Mkataba wa Huduma (SLA) wa Kiwango cha Juu",
  "ctaTrust2": "Usajili wa Papo Hapo wa Nambari za DID",
  "ctaTrust3": "Ufikiaji wa Kimataifa Katika Nchi Zaidi ya 100"
};

const sv: VirtualDidTranslation = {
  "breadcrumb": "Produkter | DID-portal + Mobilapp",
  "heroBadge": "DID-portal + Mobilapp",
  "heroTitle": "Komplett DID-hantering & Plattform för Virtuella Nummer",
  "heroDesc": "Hantera virtuella telefonnummer, inkommande samtal och SMS från en kraftfull, centraliserad DID-portal. Ge dina kunder dedikerade nummer med en mobilapp för att ta emot samtal och meddelanden var som helst i världen.",
  "getStarted": "Kom Igång",
  "requestDemo": "Boka Demo",
  "heroFootnote": "Globala nummer. Lokal närvaro. En integrerad plattform.",
  "dashboardPreview": {
    "title": "DID-portal",
    "liveBadge": "Live",
    "tab1": "Översikt",
    "tab2": "Mina nummer",
    "tab3": "Samtalsdirigering",
    "tab4": "SMS-inkorg",
    "stat1Label": "Aktiva DIDs",
    "stat1Val": "248",
    "stat2Label": "Inkommande samtal",
    "stat2Val": "1 842",
    "stat3Label": "Mottagna SMS",
    "stat3Val": "3 126",
    "tableTitle": "Dina internationella nummer",
    "smsNotificationTitle": "Nytt SMS mottaget",
    "smsNotificationBody": "Ditt möte har bekräftats till kl. 10:30.",
    "phoneIncomingText": "Inkommande företagssamtal",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "via +1 212 555 0198"
  },
  "highlightsHeading": "Ditt Globala Nummer. Din Fullständiga Kontroll.",
  "highlights": [
    {
      "title": "Globala DID-nummer"
    },
    {
      "title": "Inkommande Samtal"
    },
    {
      "title": "Mottagning av SMS"
    },
    {
      "title": "Dedikerad Mobilapp"
    },
    {
      "title": "Vidarekoppling av Samtal"
    },
    {
      "title": "DID-lagerhantering"
    },
    {
      "title": "Realtidsövervakning"
    }
  ],
  "managementBadge": "DID-hantering",
  "managementTitle": "Hantera Alla DIDs från En Central Portal",
  "managementSubtitle": "Sök, tilldela, aktivera, pausa, konfigurera och övervaka dina virtuella nummer från en och samma användarvänliga kontrollpanel.",
  "managementChecklistTitle": "DID-hanteringsfunktioner",
  "managementChecklist": [
    "Globalt DID-nummerlager",
    "Urval baserat på land och stad",
    "Smart och snabb nummersökning",
    "Omedelbar aktivering (Instant Provisioning)",
    "Aktivera och inaktivera DID-nummer",
    "Flexibel nummertilldelning till kunder",
    "Kundbaserad DID-portföljhantering",
    "Hantering av utgångsdatum och förnyelser",
    "DID-prissättning och kostnadskontroll",
    "Övervakning av nummertrafik i realtid"
  ],
  "inventoryCard": {
    "title": "Nummerlager",
    "subtitle": "248 nummer fördelade över dina kundkonton",
    "provisionBtn": "+ Tilldela Nytt DID",
    "searchPlaceholder": "Sök nummer...",
    "countryFilter": "Alla länder",
    "statusFilter": "Alla statusar",
    "colDid": "DID-NUMMER",
    "colCountry": "LAND / STAD",
    "colCustomer": "KUND",
    "colStatus": "STATUS",
    "showingText": "Visar 4 av 248 nummer"
  },
  "callMgmtBadge": "Ta Emot Samtal Var Som Helst",
  "callMgmtTitle": "Kraftfull Dirigering av Inkommande Samtal",
  "callMgmtSubtitle": "Styr inkommande samtal exakt till de enheter och destinationer du önskar.",
  "forwardingTitle": "Vidarekoppling av Samtal",
  "forwardingSubtitle": "Vidarekoppla samtal till:",
  "forwardingItems": [
    "Mobiltelefonnummer",
    "SIP-konton och trunkar",
    "Webbläsarbaserade softphones",
    "Callcenter-agenter",
    "IVR-talsvarssystem",
    "Flera samtidiga destinationer"
  ],
  "advancedRoutingTitle": "Avancerad Samtalsdirigering",
  "advancedRoutingItems": [
    "Tidsbaserad dirigering",
    "Dirigering baserad på uppringarens land",
    "Dirigering baserad på uppringande nummer (CLI)",
    "Automatisk felväxling (Failover)",
    "Sekventiell ringning",
    "Samtidig ringning på flera enheter",
    "Regler för öppettider och helger"
  ],
  "journeyCard": {
    "title": "Smart samtalsflöde",
    "liveBadge": "Live",
    "step1Title": "Inkommande samtal",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Öppettider",
    "step2Val": "Mån-Fre · 09:00–18:00",
    "step3Title": "Supportteam",
    "step3Val": "Samtidig ringning · 3 agenter",
    "footerText": "Inget svar? Automatisk vidarekoppling till mobilen."
  },
  "mobileBadge": "Mobilapp för Samtal & SMS",
  "mobileTitle": "Ditt Företags-DID Alltid i Fickan",
  "mobileSubtitle": "Ge dina användare en dedikerad mobilapplikation för att ta emot företagssamtal och SMS direkt i sina smartphones.",
  "mobileFooter": "Ditt företag. Alltid med dig.",
  "mobileFeaturesTitle": "Appens Huvudfunktioner",
  "mobileFeatures": [
    {
      "title": "Inkommande Samtal",
      "desc": "Ta emot samtal till ditt DID direkt via mobilapplikationen."
    },
    {
      "title": "SMS-inkorg",
      "desc": "Ta emot SMS i en säker och välorganiserad inkorg."
    },
    {
      "title": "Samtalshistorik",
      "desc": "Se fullständiga listor över inkommande, missade och besvarade samtal."
    },
    {
      "title": "SMS-historik",
      "desc": "Få enkel tillgång till tidigare meddelanden och kundkonversationer."
    },
    {
      "title": "Push-notiser",
      "desc": "Få direkta aviseringar på skärmen vid nytt inkommande samtal eller SMS."
    },
    {
      "title": "Flera DID-nummer",
      "desc": "Hantera flera virtuella nummer smidigt från ett enda användarkonto."
    },
    {
      "title": "Kontakthantering",
      "desc": "Spara och organisera viktiga kundkontakter tryggt och enkelt."
    }
  ],
  "smsBadge": "Enkel SMS-mottagning",
  "smsTitle": "Missa Aldrig Ett Viktigt Kundmeddelande",
  "smsSubtitle": "Gör om ditt DID-nummer till en pålitlig och skalbar mottagningspunkt för SMS.",
  "smsPerfectTitle": "Perfekt för:",
  "smsPerfectItems": [
    "Kundtjänst och teknisk support",
    "Löpande affärskommunikation",
    "Insamling av leads och förfrågningar",
    "Bokningsbekräftelser och påminnelser",
    "Driftlarm och systemaviseringar",
    "Säkerhetsverifieringar och 2FA-koder",
    "Interaktiv tvåvägskommunikation"
  ],
  "sampleSms": {
    "badge": "Företags-SMS · Mottaget",
    "body": "Hej Jordan, ditt möte är bekräftat för imorgon kl. 10:30. Svara på detta meddelande om du vill omboka.",
    "meta": "Idag, 10:24 · Acme Support"
  },
  "smsDashboard": {
    "title": "SMS Kontrollpanel",
    "receivingBadge": "Mottagning aktiv",
    "todayLabel": "Totalt mottagna SMS idag",
    "todayVal": "3 126 meddelanden",
    "colSender": "AVSÄNDARE",
    "colDid": "DESTINATIONS-DID",
    "colMessage": "MEDDELANDE",
    "colTime": "TID",
    "monitorTitle": "Realtidsövervakning:",
    "monitorItems": [
      "Inkommande SMS-flöde",
      "Avsändarens telefonnummer",
      "Mottagande DID-nummer",
      "Hela meddelandetexten",
      "Exakt datum- och tidsstämpel",
      "Kopplad kund / användarkonto",
      "Statistik över SMS-volymer"
    ]
  },
  "monitoringBadge": "Avancerad DID-övervakning",
  "monitoringTitle": "Följ Status och Trafik för Varje Nummer i Realtid",
  "monitoringSubtitle": "Håll koll på hela ditt nummerlager live dygnet runt.",
  "monitoringStats": {
    "title": "DID-översikt",
    "liveBadge": "Realtid",
    "stat1Label": "Aktiva DIDs",
    "stat1Val": "248",
    "stat1Sub": "+12 denna månad",
    "stat2Label": "Tillgängliga",
    "stat2Val": "64",
    "stat2Sub": "Redo att tilldelas",
    "stat3Label": "Tilldelade",
    "stat3Val": "184",
    "stat3Sub": "32 kunder",
    "stat4Label": "Missade samtal",
    "stat4Val": "18",
    "stat4Sub": "-8% denna vecka",
    "chartTitle": "Aktivitet för Röst & SMS",
    "chartTimeframe": "Senaste 7 dagarna",
    "legend1": "SMS-volym",
    "legend2": "Samtalsvolym"
  },
  "operationalViewTitle": "Komplett operativ överblick",
  "operationalViewItems": [
    "Totalt antal aktiva DIDs",
    "Tillgängliga nummer i lager",
    "DIDs tilldelade kunder",
    "Volym inkommande samtal",
    "Antal mottagna SMS",
    "Genomsnittlig samtalstid",
    "Frekvens av missade samtal",
    "Nummerutnyttjandegrad",
    "Fördelning per kundkonto",
    "Intäkts- och kostnadskontroll"
  ],
  "resellerBadge": "Byggt för Återförsäljare & Företag",
  "resellerTitle": "Starta Din Egen Verksamhet med Virtuella Nummer",
  "resellerSubtitle": "Vår plattform passar utmärkt för:",
  "supportedAudiences": [
    {
      "title": "DID-återförsäljare och distributörer"
    },
    {
      "title": "VoIP- och telekomoperatörer"
    },
    {
      "title": "Internationella kontaktcenter"
    },
    {
      "title": "Större företag och koncerner"
    },
    {
      "title": "UCaaS-lösningsleverantörer"
    },
    {
      "title": "Molnbaserade CPaaS-plattformar"
    }
  ],
  "whiteLabelCard": {
    "title": "Fullt Stöd för White-Label",
    "desc": "Erbjud dina kunder en webbportal och mobilapp i ditt eget varumärke, medan den underliggande röst- och meddelandeinfrastrukturen hanteras säkert av iNet Global.",
    "brandLabel": "Ditt eget varumärke",
    "portalLabel": "Kundportal",
    "tab1": "Nummer",
    "tab2": "Samtal",
    "tab3": "SMS",
    "tagline": "Dina kunders varumärkesupplevelse. Vår beprövade infrastruktur."
  },
  "ctaBadge": "LÅT OSS BYGGA DITT KOMMUNIKATIONSNÄTVERK",
  "ctaTitle": "Utveckla Ditt Företag Med Pålitliga Telekomlösningar",
  "ctaSubtitle": "Från intelligent röstdirigering och internationell terminering till AI Voice och virtuella nummer – iNet Global erbjuder skalbara lösningar som hjälper företag att nå sina kunder med klarhet och tillförlitlighet världen över.",
  "contactUs": "Kontakta Oss",
  "ctaTrust1": "Carrier-Grad SLA",
  "ctaTrust2": "Omedelbar DID-aktivering",
  "ctaTrust3": "Global Täckning i Över 100 Länder"
};

const el: VirtualDidTranslation = {
  "breadcrumb": "Προϊόντα | Πύλη DID + Εφαρμογή για Κινητά",
  "heroBadge": "Πύλη DID + Εφαρμογή για Κινητά",
  "heroTitle": "Ολοκληρωμένη Διαχείριση DID & Πλατφόρμα Εικονικών Αριθμών",
  "heroDesc": "Διαχειριστείτε εικονικούς τηλεφωνικούς αριθμούς, εισερχόμενες κλήσεις και SMS από μία ισχυρή, ενιαία πύλη DID. Προσφέρετε στους πελάτες σας αποκλειστικούς αριθμούς με εφαρμογή για κινητά ώστε να λαμβάνουν κλήσεις και SMS από οπουδήποτε.",
  "getStarted": "Ξεκινήστε Τώρα",
  "requestDemo": "Ζητήστε Επίδειξη",
  "heroFootnote": "Παγκόσμιοι αριθμοί. Τοπική παρουσία. Μία ενιαία πλατφόρμα.",
  "dashboardPreview": {
    "title": "Πύλη DID",
    "liveBadge": "Ζωντανά",
    "tab1": "Επισκόπηση",
    "tab2": "Οι αριθμοί μου",
    "tab3": "Δρομολόγηση κλήσεων",
    "tab4": "Εισερχόμενα SMS",
    "stat1Label": "Ενεργά DID",
    "stat1Val": "248",
    "stat2Label": "Εισερχόμενες κλήσεις",
    "stat2Val": "1.842",
    "stat3Label": "SMS που ελήφθησαν",
    "stat3Val": "3.126",
    "tableTitle": "Οι διεθνείς σας αριθμοί",
    "smsNotificationTitle": "Λήφθηκε νέο SMS",
    "smsNotificationBody": "Το ραντεβού σας επιβεβαιώθηκε για τις 10:30 π.μ.",
    "phoneIncomingText": "Εισερχόμενη επαγγελματική κλήση",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "μέσω +1 212 555 0198"
  },
  "highlightsHeading": "Ο Παγκόσμιος Αριθμός σας. Ο Πλήρης Έλεγχός σας.",
  "highlights": [
    {
      "title": "Παγκόσμιοι Αριθμοί DID"
    },
    {
      "title": "Εισερχόμενες Κλήσεις"
    },
    {
      "title": "Λήψη SMS"
    },
    {
      "title": "Εφαρμογή για Κινητά"
    },
    {
      "title": "Προώθηση Κλήσεων"
    },
    {
      "title": "Διαχείριση Αποθέματος DID"
    },
    {
      "title": "Παρακολούθηση σε Πραγματικό Χρόνο"
    }
  ],
  "managementBadge": "Διαχείριση DID",
  "managementTitle": "Διαχειριστείτε Όλα τα DID από μία Κεντρική Πύλη",
  "managementSubtitle": "Αναζητήστε, εκχωρήστε, ενεργοποιήστε, αναστείλετε, ρυθμίστε και παρακολουθήστε τους εικονικούς αριθμούς σας από έναν ενιαίο πίνακα ελέγχου.",
  "managementChecklistTitle": "Δυνατότητες Διαχείρισης DID",
  "managementChecklist": [
    "Παγκόσμιο απόθεμα αριθμών DID",
    "Επιλογή ανά χώρα και πόλη",
    "Έξυπνη και γρήγορη αναζήτηση αριθμών",
    "Άμεση εκχώρηση (Instant Provisioning)",
    "Ενεργοποίηση και απενεργοποίηση DID",
    "Ευέλικτη κατανομή αριθμών σε πελάτες",
    "Διαχείριση DID ανά λογαριασμό πελάτη",
    "Παρακολούθηση ημερομηνιών λήξης και ανανεώσεων",
    "Διαχείριση τιμολόγησης και κόστους DID",
    "Παρακολούθηση χρήσης και κίνησης αριθμών"
  ],
  "inventoryCard": {
    "title": "Απόθεμα αριθμών",
    "subtitle": "248 αριθμοί κατανεμημένοι στους πελάτες σας",
    "provisionBtn": "+ Εκχώρηση Νέου DID",
    "searchPlaceholder": "Αναζήτηση αριθμών...",
    "countryFilter": "Όλες οι χώρες",
    "statusFilter": "Όλες οι καταστάσεις",
    "colDid": "ΑΡΙΘΜΟΣ DID",
    "colCountry": "ΧΩΡΑ / ΠΟΛΗ",
    "colCustomer": "ΠΕΛΑΤΗΣ",
    "colStatus": "ΚΑΤΑΣΤΑΣΗ",
    "showingText": "Εμφάνιση 4 από 248 αριθμούς"
  },
  "callMgmtBadge": "Λάβετε Κλήσεις Παντού",
  "callMgmtTitle": "Ισχυρή Διαχείριση Εισερχόμενων Κλήσεων",
  "callMgmtSubtitle": "Κατευθύνετε τις εισερχόμενες κλήσεις ακριβώς στους προορισμούς που επιθυμείτε.",
  "forwardingTitle": "Προώθηση Κλήσεων",
  "forwardingSubtitle": "Προωθήστε κλήσεις σε:",
  "forwardingItems": [
    "Αριθμούς κινητών τηλεφώνων",
    "Λογαριασμούς και trunks SIP",
    "Softphones μέσω προγράμματος περιήγησης",
    "Εκπροσώπους τηλεφωνικών κέντρων",
    "Συστήματα φωνητικής απόκρισης (IVR)",
    "Πολλαπλούς συνδυασμένους προορισμούς"
  ],
  "advancedRoutingTitle": "Προηγμένη Δρομολόγηση",
  "advancedRoutingItems": [
    "Δρομολόγηση βάσει ώρας και προγράμματος",
    "Δρομολόγηση βάσει χώρας καλούντος",
    "Δρομολόγηση βάσει αναγνώρισης κλήσης (CLI)",
    "Εφεδρική δρομολόγηση ασφαλείας (Failover)",
    "Διαδοχικό κουδούνισμα",
    "Ταυτόχρονο κουδούνισμα σε πολλαπλές συσκευές",
    "Δρομολόγηση ωραρίου εργασίας"
  ],
  "journeyCard": {
    "title": "Έξυπνη ροή κλήσης",
    "liveBadge": "Ζωντανά",
    "step1Title": "Εισερχόμενη κλήση",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Ώρες γραφείου",
    "step2Val": "Δευ-Παρ · 09:00–18:00",
    "step3Title": "Ομάδα υποστήριξης",
    "step3Val": "Ταυτόχρονο κουδούνισμα · 3 εκπρόσωποι",
    "footerText": "Δεν απαντά κανείς; Αυτόματη προώθηση στο κινητό σας."
  },
  "mobileBadge": "Εφαρμογή για Κλήσεις & SMS",
  "mobileTitle": "Ο Επαγγελματικός Αριθμός DID Πάντα στην Τσέπη σας",
  "mobileSubtitle": "Δώστε στους χρήστες μια ειδική εφαρμογή για να λαμβάνουν επαγγελματικές κλήσεις και SMS απευθείας στα smartphone τους.",
  "mobileFooter": "Η επιχείρησή σας. Πάντα μαζί σας.",
  "mobileFeaturesTitle": "Χαρακτηριστικά της Εφαρμογής",
  "mobileFeatures": [
    {
      "title": "Εισερχόμενες Κλήσεις",
      "desc": "Λάβετε κλήσεις προς το DID σας απευθείας μέσω της εφαρμογής για κινητά."
    },
    {
      "title": "Εισερχόμενα SMS",
      "desc": "Λάβετε μηνύματα SMS σε ένα ασφαλές και οργανωμένο περιβάλλον."
    },
    {
      "title": "Ιστορικό Κλήσεων",
      "desc": "Δείτε λεπτομερείς καταστάσεις εισερχόμενων, αναπάντητων και απαντημένων κλήσεων."
    },
    {
      "title": "Ιστορικό SMS",
      "desc": "Εύκολη πρόσβαση σε προηγούμενες συνομιλίες και μηνύματα πελατών."
    },
    {
      "title": "Ειδοποιήσεις Push",
      "desc": "Άμεση ενημέρωση στην οθόνη του κινητού σας κατά την άφιξη κλήσης ή SMS."
    },
    {
      "title": "Πολλαπλά DID",
      "desc": "Διαχειριστείτε πολλούς εικονικούς αριθμούς από έναν μόνο λογαριασμό."
    },
    {
      "title": "Διαχείριση Επαφών",
      "desc": "Αποθηκεύστε και οργανώστε συχνές επαφές πελατών με ασφάλεια."
    }
  ],
  "smsBadge": "Απλή Λήψη SMS",
  "smsTitle": "Μην Χάνετε Ποτέ Ένα Σημαντικό Μήνυμα Πελάτη",
  "smsSubtitle": "Μετατρέψτε τον αριθμό DID σας σε ένα αξιόπιστο τερματικό λήψης SMS.",
  "smsPerfectTitle": "Ιδανικό για:",
  "smsPerfectItems": [
    "Εξυπηρέτηση και υποστήριξη πελατών",
    "Καθημερινή εταιρική επικοινωνία",
    "Συλλογή ενδιαφέροντος και leads",
    "Επιβεβαιώσεις και υπενθυμίσεις ραντεβού",
    "Ειδοποιήσεις έκτακτης ανάγκης και συστήματος",
    "Κωδικούς ασφαλείας και επαλήθευση λογαριασμού",
    "Αμφίδρομη διαδραστική επικοινωνία"
  ],
  "sampleSms": {
    "badge": "Επαγγελματικό SMS · Ελήφθη",
    "body": "Γεια σας Jordan, το ραντεβού σας επιβεβαιώθηκε για αύριο στις 10:30 π.μ. Απαντήστε αν θέλετε να αλλάξετε ώρα.",
    "meta": "Σήμερα, 10:24 π.μ. · Υποστήριξη Acme"
  },
  "smsDashboard": {
    "title": "Πίνακας Ελέγχου SMS",
    "receivingBadge": "Λήψη ενεργή",
    "todayLabel": "Συνολικά ληφθέντα SMS σήμερα",
    "todayVal": "3.126 μηνύματα",
    "colSender": "ΑΠΟΣΤΟΛΕΑΣ",
    "colDid": "DID ΠΡΟΟΡΙΣΜΟΥ",
    "colMessage": "ΜΗΝΥΜΑ",
    "colTime": "ΩΡΑ",
    "monitorTitle": "Ζωντανή παρακολούθηση:",
    "monitorItems": [
      "Ροή εισερχόμενων SMS",
      "Αριθμός τηλεφώνου αποστολέα",
      "Αριθμός DID προορισμού",
      "Πλήρες περιεχόμενο μηνύματος",
      "Ακριβής ημερομηνία και ώρα",
      "Σχετικός πελάτης / λογαριασμός",
      "Στατιστικά όγκου μηνυμάτων"
    ]
  },
  "monitoringBadge": "Προηγμένη Παρακολούθηση DID",
  "monitoringTitle": "Γνωρίζετε την Κατάσταση και την Κίνηση Κάθε Αριθμού σε Πραγματικό Χρόνο",
  "monitoringSubtitle": "Παρακολουθήστε ολόκληρο το απόθεμα αριθμών DID σε ζωντανή ροή 24/7.",
  "monitoringStats": {
    "title": "Επισκόπηση DID",
    "liveBadge": "Πραγματικός χρόνος",
    "stat1Label": "Ενεργά DID",
    "stat1Val": "248",
    "stat1Sub": "+12 αυτόν τον μήνα",
    "stat2Label": "Διαθέσιμα",
    "stat2Val": "64",
    "stat2Sub": "Έτοιμα προς εκχώρηση",
    "stat3Label": "Εκχωρημένα",
    "stat3Val": "184",
    "stat3Sub": "32 πελάτες",
    "stat4Label": "Αναπάντητες",
    "stat4Val": "18",
    "stat4Sub": "-8% αυτή την εβδομάδα",
    "chartTitle": "Δραστηριότητα Φωνής & SMS",
    "chartTimeframe": "Τελευταίες 7 ημέρες",
    "legend1": "Όγκος SMS",
    "legend2": "Όγκος κλήσεων"
  },
  "operationalViewTitle": "Πλήρης επιχειρησιακή εικόνα",
  "operationalViewItems": [
    "Σύνολο ενεργών DID",
    "Διαθέσιμοι αριθμοί στο απόθεμα",
    "DID που έχουν εκχωρηθεί σε πελάτες",
    "Όγκος εισερχόμενων κλήσεων",
    "Αριθμός ληφθέντων SMS",
    "Μέση διάρκεια κλήσεων",
    "Ποσοστό αναπάντητων κλήσεων",
    "Βαθμός αξιοποίησης αριθμών",
    "Κατανομή ανά λογαριασμό πελάτη",
    "Παρακολούθηση εσόδων και δαπανών"
  ],
  "resellerBadge": "Σχεδιασμένο για Μεταπωλητές & Επιχειρήσεις",
  "resellerTitle": "Δημιουργήστε τη Δική σας Επιχείρηση Παροχής Εικονικών Αριθμών",
  "resellerSubtitle": "Η πλατφόρμα μας είναι ιδανική για:",
  "supportedAudiences": [
    {
      "title": "Μεταπωλητές και διανομείς DID"
    },
    {
      "title": "Παρόχους VoIP και τηλεπικοινωνιών"
    },
    {
      "title": "Διεθνή κέντρα επικοινωνίας (Call Centers)"
    },
    {
      "title": "Μεγάλες επιχειρήσεις και ομίλους"
    },
    {
      "title": "Παρόχους λύσεων UCaaS"
    },
    {
      "title": "Πλατφόρμες επικοινωνίας cloud (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Πλήρης Υποστήριξη White-Label",
    "desc": "Προσφέρετε στους πελάτες σας μια πύλη με τη δική σας επωνυμία και εξατομικευμένη εφαρμογή για κινητά, ενώ εσείς διαχειρίζεστε την υποκείμενη υποδομή φωνής και SMS.",
    "brandLabel": "Η δική σας επωνυμία",
    "portalLabel": "Πύλη πελάτη",
    "tab1": "Αριθμοί",
    "tab2": "Κλήσεις",
    "tab3": "SMS",
    "tagline": "Η εμπειρία της επωνυμίας σας. Η αξιόπιστη υποδομή μας."
  },
  "ctaBadge": "ΑΣ ΔΗΜΙΟΥΡΓΗΣΟΥΜΕ ΤΟ ΤΗΛΕΠΙΚΟΙΝΩΝΙΑΚΟ ΣΑΣ ΔΙΚΤΥΟ",
  "ctaTitle": "Αναπτύξτε την Επιχείρησή σας με Επαγγελματικές Λύσεις Επικοινωνίας",
  "ctaSubtitle": "Από την έξυπνη δρομολόγηση φωνής και τον διεθνή τερματισμό έως το AI Voice και τους εικονικούς αριθμούς, η iNet Global παρέχει κλιμακούμενες λύσεις που βοηθούν τις επιχειρήσεις να επικοινωνούν με πελάτες σε όλο τον κόσμο με αξιοπιστία και καθαρότητα.",
  "contactUs": "Επικοινωνήστε Μαζί Μας",
  "ctaTrust1": "SLA Επιπέδου Τηλεπικοινωνιακού Παρόχου",
  "ctaTrust2": "Άμεση Εκχώρηση Αριθμών DID",
  "ctaTrust3": "Παγκόσμια Κάλυψη σε Πάνω από 100 Χώρες"
};

const cs: VirtualDidTranslation = {
  "breadcrumb": "Produkty | DID Portál + Mobilní Aplikace",
  "heroBadge": "DID Portál + Mobilní Aplikace",
  "heroTitle": "Kompletní Správa DID a Platforma Virtuálních Čísel",
  "heroDesc": "Spravujte virtuální telefonní čísla, příchozí hovory a SMS z jednoho výkonného centralizovaného DID portálu. Poskytněte svým klientům vyhrazená čísla s mobilní aplikací pro příjem hovorů a zpráv odkudkoli na světě.",
  "getStarted": "Začít Nyní",
  "requestDemo": "Požádat o Demo",
  "heroFootnote": "Globální čísla. Místní přítomnost. Jedna integrovaná platforma.",
  "dashboardPreview": {
    "title": "DID Portál",
    "liveBadge": "Živě",
    "tab1": "Přehled",
    "tab2": "Moje čísla",
    "tab3": "Směrování hovorů",
    "tab4": "SMS schránka",
    "stat1Label": "Aktivní DID",
    "stat1Val": "248",
    "stat2Label": "Příchozí hovory",
    "stat2Val": "1 842",
    "stat3Label": "Přijaté SMS",
    "stat3Val": "3 126",
    "tableTitle": "Vaše mezinárodní čísla",
    "smsNotificationTitle": "Přijata nová SMS",
    "smsNotificationBody": "Vaše schůzka byla potvrzena na 10:30.",
    "phoneIncomingText": "Příchozí firemní hovor",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "přes +1 212 555 0198"
  },
  "highlightsHeading": "Vaše Globální Číslo. Vaše Úplná Kontrola.",
  "highlights": [
    {
      "title": "Globální DID Čísla"
    },
    {
      "title": "Příchozí Hovory"
    },
    {
      "title": "Příjem SMS"
    },
    {
      "title": "Mobilní Aplikace"
    },
    {
      "title": "Přesměrování Hovorů"
    },
    {
      "title": "Správa DID Čísel"
    },
    {
      "title": "Monitoring v Reálném Čase"
    }
  ],
  "managementBadge": "Správa DID",
  "managementTitle": "Spravujte Všechna DID z Jednoho Centrálního Portálu",
  "managementSubtitle": "Vyhledávejte, přidělujte, aktivujte, pozastavujte, konfigurujte a sledujte svá virtuální čísla z jediného přehledného řídicího panelu.",
  "managementChecklistTitle": "Funkce Správy DID",
  "managementChecklist": [
    "Globální inventář čísel DID",
    "Výběr podle země a města",
    "Chytré a rychlé vyhledávání čísel",
    "Okamžité zřízení (Instant Provisioning)",
    "Aktivace a deaktivace DID",
    "Flexibilní přidělování čísel klientům",
    "Správa DID podle zákaznických účtů",
    "Sledování expirace a obnovy",
    "Správa ceníků a nákladů na DID",
    "Sledování provozu a vytížení čísel"
  ],
  "inventoryCard": {
    "title": "Inventář čísel",
    "subtitle": "248 čísel rozdělených mezi vaše zákazníky",
    "provisionBtn": "+ Zřídit Nové DID",
    "searchPlaceholder": "Hledat čísla...",
    "countryFilter": "Všechny země",
    "statusFilter": "Všechny stavy",
    "colDid": "ČÍSLO DID",
    "colCountry": "ZEMĚ / MĚSTO",
    "colCustomer": "ZÁKAZNÍK",
    "colStatus": "STAV",
    "showingText": "Zobrazeno 4 z 248 čísel"
  },
  "callMgmtBadge": "Přijímejte Hovory Kdekoli",
  "callMgmtTitle": "Výkonné Řízení Směrování Příchozích Hovorů",
  "callMgmtSubtitle": "Směrujte příchozí hovory přesně na cílová zařízení, která potřebujete.",
  "forwardingTitle": "Přesměrování Hovorů",
  "forwardingSubtitle": "Přesměrujte hovory na:",
  "forwardingItems": [
    "Mobilní telefonní čísla",
    "SIP účty a trunky",
    "Webové softphony v prohlížeči",
    "Operátory call centra",
    "Hlasové systémy IVR",
    "Více kombinovaných cílů současně"
  ],
  "advancedRoutingTitle": "Pokročilé Směrování",
  "advancedRoutingItems": [
    "Časově podmíněné směrování",
    "Směrování podle země volajícího",
    "Směrování podle identifikace volajícího (CLI)",
    "Automatické záložní směrování (Failover)",
    "Sekvenční vyzvánění",
    "Současné vyzvánění na více zařízeních",
    "Pravidla pro pracovní a mimopracovní dobu"
  ],
  "journeyCard": {
    "title": "Chytrý průběh hovoru",
    "liveBadge": "Živě",
    "step1Title": "Příchozí hovor",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Pracovní doba",
    "step2Val": "Po-Pá · 09:00–18:00",
    "step3Title": "Tým podpory",
    "step3Val": "Současné vyzvánění · 3 operátoři",
    "footerText": "Nikdo neodpovídá? Okamžité přesměrování na mobil."
  },
  "mobileBadge": "Mobilní Aplikace pro Hovory a SMS",
  "mobileTitle": "Vaše Firemní DID Číslo Vždy v Kapse",
  "mobileSubtitle": "Poskytněte uživatelům vyhrazenou mobilní aplikaci pro příjem firemních hovorů a SMS zpráv přímo na jejich smartphonech.",
  "mobileFooter": "Vaše podnikání. Vždy s vámi.",
  "mobileFeaturesTitle": "Klíčové Funkce Aplikace",
  "mobileFeatures": [
    {
      "title": "Příchozí Hovory",
      "desc": "Přijímejte hovory na vaše číslo DID přímo prostřednictvím mobilní aplikace."
    },
    {
      "title": "SMS Schránka",
      "desc": "Přijímejte SMS zprávy v zabezpečené a přehledně uspořádané schránce."
    },
    {
      "title": "Historie Hovorů",
      "desc": "Zobrazte podrobné přehledy příchozích, zmeškaných a přijatých hovorů."
    },
    {
      "title": "Historie SMS",
      "desc": "Snadný přístup k dřívějším zprávám a konverzacím se zákazníky."
    },
    {
      "title": "Push Notifikace",
      "desc": "Okamžitá upozornění na displeji telefonu při příchodu nového hovoru nebo SMS."
    },
    {
      "title": "Správa Více DID",
      "desc": "Spravujte několik virtuálních čísel pohodlně z jednoho uživatelského účtu."
    },
    {
      "title": "Správa Kontaktů",
      "desc": "Bezpečně ukládejte a organizujte důležité kontakty na klienty."
    }
  ],
  "smsBadge": "Snadný Příjem SMS",
  "smsTitle": "Už Nikdy Nezmeškejte Důležitou Zprávu od Zákazníka",
  "smsSubtitle": "Proměňte své DID číslo ve spolehlivý koncový bod pro příjem SMS zpráv.",
  "smsPerfectTitle": "Skvěle se hodí pro:",
  "smsPerfectItems": [
    "Zákaznickou podporu a helpdesk",
    "Běžnou firemní B2B komunikaci",
    "Získávání poptávek a nových kontaktů",
    "Potvrzování a připomínání schůzek",
    "Hlášení výpadků a provozní oznámení",
    "Ověřovací kódy a zabezpečení účtů",
    "Obousměrnou interaktivní komunikaci"
  ],
  "sampleSms": {
    "badge": "Firemní SMS · Přijato",
    "body": "Dobrý den Jordan, vaše schůzka je potvrzena na zítra v 10:30. Odpovězte, pokud potřebujete změnit termín.",
    "meta": "Dnes, 10:24 · Podpora Acme"
  },
  "smsDashboard": {
    "title": "SMS Řídicí Panel",
    "receivingBadge": "Příjem aktivní",
    "todayLabel": "Dnes přijaté SMS celkem",
    "todayVal": "3 126 zpráv",
    "colSender": "ODESÍLATEL",
    "colDid": "CÍLOVÉ DID",
    "colMessage": "ZPRÁVA",
    "colTime": "ČAS",
    "monitorTitle": "Živý monitoring:",
    "monitorItems": [
      "Proud příchozích SMS zpráv",
      "Telefonní číslo odesílatele",
      "Cílové telefonní číslo DID",
      "Kompletní text zprávy",
      "Přesné datum a časové razítko",
      "Přiřazený zákazník / účet",
      "Statistiky objemu SMS zpráv"
    ]
  },
  "monitoringBadge": "Pokročilý Monitoring DID",
  "monitoringTitle": "Mějte Přehled o Stavu a Provozu Každého Čísla v Reálném Čase",
  "monitoringSubtitle": "Sledujte kompletní inventář DID čísel nepřetržitě 24/7.",
  "monitoringStats": {
    "title": "Přehled DID",
    "liveBadge": "Reálný čas",
    "stat1Label": "Aktivní DID",
    "stat1Val": "248",
    "stat1Sub": "+12 tento měsíc",
    "stat2Label": "K dispozici",
    "stat2Val": "64",
    "stat2Sub": "Připraveno k přidělení",
    "stat3Label": "Přiděleno",
    "stat3Val": "184",
    "stat3Sub": "32 zákazníků",
    "stat4Label": "Zmeškané hovory",
    "stat4Val": "18",
    "stat4Sub": "-8% tento týden",
    "chartTitle": "Aktivita Hlasu a SMS",
    "chartTimeframe": "Posledních 7 dní",
    "legend1": "Objem SMS",
    "legend2": "Objem hovorů"
  },
  "operationalViewTitle": "Kompletní provozní přehled",
  "operationalViewItems": [
    "Celkový počet aktivních DID",
    "Dostupná čísla na skladě",
    "DID přidělená zákazníkům",
    "Objem příchozích hovorů",
    "Počet přijatých SMS zpráv",
    "Průměrná délka hovoru",
    "Podíl zmeškaných hovorů",
    "Míra vytížení čísel",
    "Rozdělení podle zákaznických účtů",
    "Sledování nákladů a výnosů"
  ],
  "resellerBadge": "Vytvořeno pro Přeprodejce a Korporace",
  "resellerTitle": "Založte Si Vlastní Podnikání v Poskytování Virtuálních Čísel",
  "resellerSubtitle": "Naše platforma je optimální pro:",
  "supportedAudiences": [
    {
      "title": "Přeprodejce a distributory DID"
    },
    {
      "title": "Poskytovatele VoIP a telekomunikací"
    },
    {
      "title": "Mezinárodní kontaktní centra"
    },
    {
      "title": "Velké korporace a holdingy"
    },
    {
      "title": "Poskytovatele řešení UCaaS"
    },
    {
      "title": "Cloudové komunikační platformy (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Plná Podpora White-Label",
    "desc": "Nabídněte klientům webový portál a mobilní aplikaci pod vaší vlastní značkou, zatímco o spolehlivost hlasové a SMS infrastruktury pečuje iNet Global.",
    "brandLabel": "Vaše značka",
    "portalLabel": "Zákaznický portál",
    "tab1": "Čísla",
    "tab2": "Hovory",
    "tab3": "SMS",
    "tagline": "Zkušenost s vaší značkou pro klienta. Naše spolehlivá infrastruktura v pozadí."
  },
  "ctaBadge": "VYBUDUJME VAŠI TELEKOMUNIKAČNÍ SÍŤ",
  "ctaTitle": "Rozvíjejte Své Podnikání s Profesionálními Komunikačními Řešeními",
  "ctaSubtitle": "Od inteligentního hlasového směrování a mezinárodní terminace až po AI Voice a virtuální čísla – iNet Global poskytuje škálovatelná řešení, která pomáhají firmám spojovat se se zákazníky po celém světě spolehlivě a čistě.",
  "contactUs": "Kontaktujte Nás",
  "ctaTrust1": "Garantovaná SLA Úrovně Operátora",
  "ctaTrust2": "Okamžité Zřízení Čísel DID",
  "ctaTrust3": "Globální Pokrytí ve Více Než 100 Zemích"
};

const ro: VirtualDidTranslation = {
  "breadcrumb": "Produse | Portal DID + Aplicație Mobilă",
  "heroBadge": "Portal DID + Aplicație Mobilă",
  "heroTitle": "Platformă Completă de Gestionare DID și Numere Virtuale",
  "heroDesc": "Gestionați numerele de telefon virtuale, apelurile primite și mesajele SMS dintr-un singur Portal DID centralizat și puternic. Oferiți clienților numere dedicate cu aplicație mobilă pentru a primi apeluri și SMS de oriunde în lume.",
  "getStarted": "Începeți Acum",
  "requestDemo": "Solicitați Demo",
  "heroFootnote": "Numere globale. Prezență locală. O singură platformă integrată.",
  "dashboardPreview": {
    "title": "Portal DID",
    "liveBadge": "În direct",
    "tab1": "Prezentare generală",
    "tab2": "Numerele mele",
    "tab3": "Rutare apeluri",
    "tab4": "Mesaje SMS",
    "stat1Label": "DID-uri active",
    "stat1Val": "248",
    "stat2Label": "Apeluri primite",
    "stat2Val": "1.842",
    "stat3Label": "SMS-uri primite",
    "stat3Val": "3.126",
    "tableTitle": "Numerele dumneavoastră internaționale",
    "smsNotificationTitle": "SMS nou primit",
    "smsNotificationBody": "Programarea dumneavoastră a fost confirmată pentru ora 10:30.",
    "phoneIncomingText": "Apel de afaceri primit",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "prin +1 212 555 0198"
  },
  "highlightsHeading": "Numărul Dumneavoastră Global. Controlul Dumneavoastră Total.",
  "highlights": [
    {
      "title": "Numere DID Globale"
    },
    {
      "title": "Apeluri Primite"
    },
    {
      "title": "Recepție SMS"
    },
    {
      "title": "Aplicație Mobilă"
    },
    {
      "title": "Redirecționare Apeluri"
    },
    {
      "title": "Gestionare Inventar DID"
    },
    {
      "title": "Monitorizare în Timp Real"
    }
  ],
  "managementBadge": "Gestionare DID",
  "managementTitle": "Gestionați Toate DID-urile dintr-un Singur Portal Centralizat",
  "managementSubtitle": "Căutați, alocați, activați, suspendați, configurați și monitorizați numerele dumneavoastră virtuale dintr-un singur panou de control intuitiv.",
  "managementChecklistTitle": "Funcționalități Gestionare DID",
  "managementChecklist": [
    "Inventar global de numere DID",
    "Selecție pe țară și oraș",
    "Căutare inteligentă și rapidă a numerelor",
    "Alocare instantanee (Instant Provisioning)",
    "Activare și dezactivare DID",
    "Alocare flexibilă a numerelor către clienți",
    "Gestionare DID per cont de client",
    "Monitorizare scadențe și reînnoiri",
    "Control tarife și costuri DID",
    "Monitorizare volum și trafic de utilizare"
  ],
  "inventoryCard": {
    "title": "Inventar numere",
    "subtitle": "248 de numere distribuite pe conturile clienților",
    "provisionBtn": "+ Alocă DID Nou",
    "searchPlaceholder": "Caută numere...",
    "countryFilter": "Toate țările",
    "statusFilter": "Toate statusurile",
    "colDid": "NUMĂR DID",
    "colCountry": "ȚARĂ / ORAȘ",
    "colCustomer": "CLIENT",
    "colStatus": "STATUS",
    "showingText": "Se afișează 4 din 248 de numere"
  },
  "callMgmtBadge": "Primiți Apeluri Oriunde",
  "callMgmtTitle": "Gestionare Avansată a Rutării Apelurilor Primite",
  "callMgmtSubtitle": "Direcționați apelurile primite exact către dispozitivele și destinațiile dorite.",
  "forwardingTitle": "Redirecționare Apeluri",
  "forwardingSubtitle": "Redirecționați apelurile către:",
  "forwardingItems": [
    "Numere de telefon mobil",
    "Conturi și trunchiuri SIP",
    "Softphone-uri în browser web",
    "Agenți de call center",
    "Sisteme cu răspuns vocal interactiv (IVR)",
    "Destinații multiple combinate"
  ],
  "advancedRoutingTitle": "Rutare Inteligentă Avansată",
  "advancedRoutingItems": [
    "Rutare pe intervale orare",
    "Rutare în funcție de țara apelantului",
    "Rutare după numărul apelantului (CLI)",
    "Rutare de rezervă în caz de defecțiune (Failover)",
    "Apelare secvențială",
    "Apelare simultană pe mai multe dispozitive",
    "Rutare după programul de lucru"
  ],
  "journeyCard": {
    "title": "Traseu inteligent al apelului",
    "liveBadge": "În direct",
    "step1Title": "Apel primit",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Program de lucru",
    "step2Val": "Lun-Vin · 09:00–18:00",
    "step3Title": "Echipă de asistență",
    "step3Val": "Apelare simultană · 3 agenți",
    "footerText": "Nu răspunde nimeni? Redirecționare automată pe mobil."
  },
  "mobileBadge": "Aplicație Mobilă pentru Apeluri și SMS",
  "mobileTitle": "Numărul DID al Companiei Mereu în Buzunarul Dumneavoastră",
  "mobileSubtitle": "Oferiți utilizatorilor o aplicație mobilă dedicată pentru a primi apeluri de afaceri și SMS-uri direct pe smartphone.",
  "mobileFooter": "Afacerea dumneavoastră. Mereu cu dumneavoastră.",
  "mobileFeaturesTitle": "Funcțiile Aplicației Mobile",
  "mobileFeatures": [
    {
      "title": "Apeluri Primite",
      "desc": "Primiți apeluri către DID direct prin aplicația mobilă."
    },
    {
      "title": "Mesaje SMS Primite",
      "desc": "Primiți mesaje SMS într-o căsuță poștală securizată și bine organizată."
    },
    {
      "title": "Istoric Apeluri",
      "desc": "Vizualizați rapoarte detaliate ale apelurilor primite, pierdute și efectuate."
    },
    {
      "title": "Istoric SMS",
      "desc": "Acces facil la mesajele și conversațiile anterioare cu clienții."
    },
    {
      "title": "Notificări Push",
      "desc": "Alerte instantanee pe ecran la primirea unui nou apel sau SMS."
    },
    {
      "title": "Numere DID Multiple",
      "desc": "Gestionați mai multe numere virtuale dintr-un singur cont de utilizator."
    },
    {
      "title": "Gestionare Contacte",
      "desc": "Salvați și organizați contactele clienților importanți în siguranță."
    }
  ],
  "smsBadge": "Recepție SMS Extrem de Simplă",
  "smsTitle": "Nu Pierdeți Niciodată un Mesaj Important de la Clienți",
  "smsSubtitle": "Transformați numărul dumneavoastră DID într-un punct final sigur de recepție SMS.",
  "smsPerfectTitle": "Ideal pentru:",
  "smsPerfectItems": [
    "Serviciul de relații cu clienții și suport tehnic",
    "Comunicare operațională zilnică în afaceri",
    "Generare de lead-uri și cereri de ofertă",
    "Confirmări și memento-uri de programări",
    "Alerte de sistem și notificări urgente",
    "Coduri de verificare OTP și securitate conturi",
    "Comunicare interactivă bidirecțională"
  ],
  "sampleSms": {
    "badge": "SMS Business · Primit",
    "body": "Bună ziua Jordan, programarea dumneavoastră pentru mâine la ora 10:30 a fost confirmată. Răspundeți dacă doriți reprogramare.",
    "meta": "Astăzi, 10:24 · Suport Acme"
  },
  "smsDashboard": {
    "title": "Panou de Control SMS",
    "receivingBadge": "Recepție activă",
    "todayLabel": "Total SMS-uri primite astăzi",
    "todayVal": "3.126 mesaje",
    "colSender": "EXPEDITOR",
    "colDid": "DID DESTINAȚIE",
    "colMessage": "CONȚINUT",
    "colTime": "ORĂ",
    "monitorTitle": "Parametri monitorizați:",
    "monitorItems": [
      "Fluxul de SMS-uri primite",
      "Numărul de telefon al expeditorului",
      "Numărul DID de destinație",
      "Textul complet al mesajului",
      "Data și ora exactă a recepției",
      "Clientul / Contul asociat",
      "Volumul total de trafic SMS"
    ]
  },
  "monitoringBadge": "Monitorizare Avansată DID",
  "monitoringTitle": "Cunoașteți Starea și Traficul Fiecărui Număr în Timp Real",
  "monitoringSubtitle": "Urmăriți întregul inventar de numere virtuale în flux continuu 24/7.",
  "monitoringStats": {
    "title": "Privire de ansamblu DID",
    "liveBadge": "Timp real",
    "stat1Label": "DID active",
    "stat1Val": "248",
    "stat1Sub": "+12 luna aceasta",
    "stat2Label": "Disponibile",
    "stat2Val": "64",
    "stat2Sub": "Pregătite pentru alocare",
    "stat3Label": "Alocate",
    "stat3Val": "184",
    "stat3Sub": "32 de clienți",
    "stat4Label": "Apeluri pierdute",
    "stat4Val": "18",
    "stat4Sub": "-8% săptămâna aceasta",
    "chartTitle": "Activitate Voce și SMS",
    "chartTimeframe": "Ultimele 7 zile",
    "legend1": "Volum SMS",
    "legend2": "Volum apeluri"
  },
  "operationalViewTitle": "O imagine operațională completă",
  "operationalViewItems": [
    "Număr total de DID-uri active",
    "Numere DID disponibile în stoc",
    "DID-uri atribuite clienților",
    "Volum de apeluri primite",
    "Număr total de SMS-uri primite",
    "Durata medie a convorbirilor",
    "Ponderea apelurilor nepreluate",
    "Gradul de utilizare al numerelor",
    "Alocare pe conturi de clienți",
    "Monitorizare costuri și venituri"
  ],
  "resellerBadge": "Creat pentru Revânzători & Companii Mari",
  "resellerTitle": "Lansați Propria Afacere de Furnizare de Numere Virtuale",
  "resellerSubtitle": "Platforma noastră este optimă pentru:",
  "supportedAudiences": [
    {
      "title": "Revânzători și distribuitori de DID"
    },
    {
      "title": "Operatori VoIP și de telecomunicații"
    },
    {
      "title": "Centre de contact internaționale"
    },
    {
      "title": "Corporații și companii multinaționale"
    },
    {
      "title": "Furnizori de soluții UCaaS"
    },
    {
      "title": "Platforme de comunicații cloud (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Suport Complet White-Label",
    "desc": "Oferiți clienților un portal web cu sigla dumneavoastră și o aplicație mobilă dedicată, în timp ce iNet Global gestionează în siguranță infrastructura de voce și SMS din spate.",
    "brandLabel": "Brandul dumneavoastră",
    "portalLabel": "Portal client",
    "tab1": "Numere",
    "tab2": "Apeluri",
    "tab3": "SMS",
    "tagline": "Experiența brandului dumneavoastră. Infrastructura noastră sigură."
  },
  "ctaBadge": "SĂ CONSTRUIM REȚEAUA DUMNEAVOASTRĂ DE COMUNICAȚII",
  "ctaTitle": "Dezvoltați-vă Afacerea cu Soluții de Telecomunicații Profesionale",
  "ctaSubtitle": "De la rutare vocală inteligentă și terminație internațională până la AI Voice și numere virtuale, iNet Global oferă soluții scalabile care ajută companiile să se conecteze cu clienții din întreaga lume cu claritate și siguranță.",
  "contactUs": "Contactați-ne",
  "ctaTrust1": "SLA Garantat la Nivel de Operator",
  "ctaTrust2": "Alocare Instantanee de Numere DID",
  "ctaTrust3": "Acoperire Globală în Peste 100 de Țări"
};

const hu: VirtualDidTranslation = {
  "breadcrumb": "Termékek | DID Portál + Mobilalkalmazás",
  "heroBadge": "DID Portál + Mobilalkalmazás",
  "heroTitle": "Teljes Körű DID Kezelés és Virtuális Szám Platform",
  "heroDesc": "Kezeljen virtuális telefonszámokat, bejövő hívásokat és SMS-eket egyetlen professzionális DID portálról. Biztosítson ügyfeleinek dedikált számokat mobilalkalmazással, hogy a világ bármely pontjáról fogadhassanak hívásokat és üzeneteket.",
  "getStarted": "Kezdés",
  "requestDemo": "Demó Kérése",
  "heroFootnote": "Globális telefonszámok. Helyi jelenlét. Egyetlen integrált platform.",
  "dashboardPreview": {
    "title": "DID Portál",
    "liveBadge": "Élő",
    "tab1": "Áttekintés",
    "tab2": "Számaim",
    "tab3": "Hívásirányítás",
    "tab4": "SMS beérkező",
    "stat1Label": "Aktív DID-ek",
    "stat1Val": "248",
    "stat2Label": "Bejövő hívások",
    "stat2Val": "1 842",
    "stat3Label": "Fogadott SMS-ek",
    "stat3Val": "3 126",
    "tableTitle": "Nemzetközi számaink listája",
    "smsNotificationTitle": "Új SMS érkezett",
    "smsNotificationBody": "Időpontja megerősítve: 10:30.",
    "phoneIncomingText": "Bejövő üzleti hívás",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "+1 212 555 0198 számon keresztül"
  },
  "highlightsHeading": "Az Ön Globális Száma. Az Ön Teljes Kontrollja.",
  "highlights": [
    {
      "title": "Globális DID Számok"
    },
    {
      "title": "Bejövő Hívások"
    },
    {
      "title": "SMS Fogadás"
    },
    {
      "title": "Mobilalkalmazás"
    },
    {
      "title": "Hívásátirányítás"
    },
    {
      "title": "DID Készletkezelés"
    },
    {
      "title": "Valós Idejű Monitoring"
    }
  ],
  "managementBadge": "DID Kezelés",
  "managementTitle": "Kezelje Minden DID-jét Egyetlen Központi Portálról",
  "managementSubtitle": "Keressen, rendeljen hozzá, aktiváljon, szüneteltessen, konfiguráljon és felügyeljen virtuális számokat egyetlen átlátható vezérlőpultról.",
  "managementChecklistTitle": "DID Kezelési Funkciók",
  "managementChecklist": [
    "Globális DID számkészlet",
    "Keresés ország és város szerint",
    "Intelligens és gyors számlista-kereső",
    "Azonnali kiosztás (Instant Provisioning)",
    "DID számok be- és kikapcsolása",
    "Rugalmas számkiosztás ügyfeleknek",
    "DID menedzsment ügyfélfiókonként",
    "Lejárati idők és megújítások nyomon követése",
    "DID árazás és költségkezelés",
    "Forgalmi használat valós idejű követése"
  ],
  "inventoryCard": {
    "title": "Számkészlet",
    "subtitle": "248 aktív szám az ügyfelek fiókjaihoz rendelve",
    "provisionBtn": "+ Új DID Kiosztása",
    "searchPlaceholder": "Számok keresése...",
    "countryFilter": "Minden ország",
    "statusFilter": "Minden állapot",
    "colDid": "DID SZÁM",
    "colCountry": "ORSZÁG / VÁROS",
    "colCustomer": "ÜGYFÉL",
    "colStatus": "ÁLLAPOT",
    "showingText": "4 megjelenítve a 248 számból"
  },
  "callMgmtBadge": "Fogadjon Hívásokat Bárhol",
  "callMgmtTitle": "Bejövő Hívások Hatékony Irányítása és Menedzselése",
  "callMgmtSubtitle": "Irányítsa a bejövő hívásokat pontosan a kívánt eszközökre és kollégákhoz.",
  "forwardingTitle": "Hívásátirányítás",
  "forwardingSubtitle": "Hívások átirányítása a következőkre:",
  "forwardingItems": [
    "Mobiltelefonszámok",
    "SIP fiókok és trönkök",
    "Böngészőalapú szoftveres telefonok",
    "Call center operátorok",
    "IVR automata hangmenü-rendszerek",
    "Több célállomás egyidejűleg"
  ],
  "advancedRoutingTitle": "Fejlett Útválasztás",
  "advancedRoutingItems": [
    "Időalapú hívásirányítás",
    "Hívó országa szerinti útválasztás",
    "Hívószám szerinti útválasztás (CLI)",
    "Automatikus tartalék útvonal (Failover)",
    "Egymás utáni csengetés",
    "Egyidejű csengetés több eszközön",
    "Munkaidőhöz igazított szabályok"
  ],
  "journeyCard": {
    "title": "Intelligens hívási folyamat",
    "liveBadge": "Élő",
    "step1Title": "Bejövő hívás",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Nyitvatartás",
    "step2Val": "Hét-Pén · 09:00–18:00",
    "step3Title": "Támogató csapat",
    "step3Val": "Egyidejű csengetés · 3 operátor",
    "footerText": "Nincs válasz? Automatikus továbbítás mobiltelefonra."
  },
  "mobileBadge": "Mobilapp Hívásokhoz és SMS-hez",
  "mobileTitle": "Vállalati DID Száma Mindig a Zsebében",
  "mobileSubtitle": "Biztosítson munkatársainak okostelefonos alkalmazást, hogy a vállalati hívásokat és SMS-eket közvetlenül a mobiljukon fogadhassák.",
  "mobileFooter": "Az Ön vállalkozása. Mindig Önnel.",
  "mobileFeaturesTitle": "Az Alkalmazás Fő Funkciói",
  "mobileFeatures": [
    {
      "title": "Bejövő Hívások",
      "desc": "Fogadja a DID-re érkező telefonhívásokat közvetlenül a mobilalkalmazásban."
    },
    {
      "title": "SMS Beérkező Fiók",
      "desc": "Fogadjon SMS üzeneteket egy biztonságos és áttekinthető postafiókban."
    },
    {
      "title": "Híváselőzmények",
      "desc": "Tekintse meg a bejövő, nem fogadott és kezdeményezett hívások részleteit."
    },
    {
      "title": "SMS Előzmények",
      "desc": "Bármikor könnyen visszakeresheti a korábbi ügyfélbeszélgetéseket."
    },
    {
      "title": "Push Értesítések",
      "desc": "Azonnali képernyőértesítést kap minden új hívásról vagy beérkező SMS-ről."
    },
    {
      "title": "Több DID Kezelése",
      "desc": "Kezeljen több virtuális számot kényelmesen egyetlen fiókból."
    },
    {
      "title": "Névjegyzék Kezelése",
      "desc": "Mentse és rendszerezze a fontos ügyfélkapcsolatokat biztonságosan."
    }
  ],
  "smsBadge": "Egyszerű SMS Fogadás",
  "smsTitle": "Soha Többé Ne Mulasszon El Fontos Ügyfélüzenetet",
  "smsSubtitle": "Alakítsa át DID számát megbízható és nagy kapacitású SMS-fogadó végponttá.",
  "smsPerfectTitle": "Tökéletes a következőkhöz:",
  "smsPerfectItems": [
    "Ügyfélszolgálat és technikai segítségnyújtás",
    "Mindennapi vállalati B2B kommunikáció",
    "Érdeklődők és leadek fogadása",
    "Időpont-visszaigazolások és emlékeztetők",
    "Rendszer- és üzemzavar-értesítések",
    "Biztonsági hitelesítő kódok (OTP)",
    "Kétirányú interaktív ügyfélpárbeszéd"
  ],
  "sampleSms": {
    "badge": "Üzleti SMS · Érkezett",
    "body": "Kedves Jordan, a holnap 10:30-as időpontját megerősítettük. Kérjük, válaszoljon, ha módosítani szeretné.",
    "meta": "Ma, 10:24 · Acme Támogatás"
  },
  "smsDashboard": {
    "title": "SMS Vezérlőpult",
    "receivingBadge": "Fogadás aktív",
    "todayLabel": "Ma fogadott SMS-ek összesen",
    "todayVal": "3 126 üzenet",
    "colSender": "KÜLDŐ",
    "colDid": "CÉL DID",
    "colMessage": "ÜZENET",
    "colTime": "IDŐPONT",
    "monitorTitle": "Élő felügyeleti mutatók:",
    "monitorItems": [
      "Bejövő SMS adatfolyam",
      "Küldő telefonszáma",
      "Fogadó DID telefonszám",
      "Üzenet teljes szöveges tartalma",
      "Pontos dátum és időbélyeg",
      "Hozzárendelt ügyfél / fiók",
      "SMS forgalom összesített volumene"
    ]
  },
  "monitoringBadge": "Fejlett DID Monitoring",
  "monitoringTitle": "Ismerje Minden Telefonszám Élő Állapotát és Terheltségét",
  "monitoringSubtitle": "Kövesse nyomon a teljes virtuális számkészletét valós időben a nap 24 órájában.",
  "monitoringStats": {
    "title": "DID Összesítő",
    "liveBadge": "Valós idejű",
    "stat1Label": "Aktív DID-ek",
    "stat1Val": "248",
    "stat1Sub": "+12 ebben a hónapban",
    "stat2Label": "Elérhető",
    "stat2Val": "64",
    "stat2Sub": "Kiosztásra kész",
    "stat3Label": "Hozzárendelve",
    "stat3Val": "184",
    "stat3Sub": "32 ügyfélnél",
    "stat4Label": "Nem fogadott",
    "stat4Val": "18",
    "stat4Sub": "-8% ezen a héten",
    "chartTitle": "Hang- és SMS-forgalom alakulása",
    "chartTimeframe": "Elmúlt 7 nap",
    "legend1": "SMS volumen",
    "legend2": "Hívásvolumen"
  },
  "operationalViewTitle": "Teljes körű működési rálátás",
  "operationalViewItems": [
    "Aktív DID-ek összesített száma",
    "Készleten lévő szabad számok",
    "Ügyfelekhez rendelt DID-ek",
    "Bejövő hívások volumene",
    "Fogadott SMS-ek száma",
    "Átlagos beszélgetési időtartam",
    "Nem fogadott hívások aránya",
    "Számok kihasználtsági mutatója",
    "Ügyfélfiókok szerinti megoszlás",
    "Költségek és bevételek nyomon követése"
  ],
  "resellerBadge": "Viszonteladóknak és Nagyvállalatoknak",
  "resellerTitle": "Indítsa El Saját Virtuális Telefonszám Szolgáltatását",
  "resellerSubtitle": "Platformunk ideális alap a következőknek:",
  "supportedAudiences": [
    {
      "title": "DID viszonteladók és disztribútorok"
    },
    {
      "title": "VoIP és távközlési szolgáltatók"
    },
    {
      "title": "Nemzetközi kapcsolattartó központok"
    },
    {
      "title": "Nagyvállalatok és cégcsoportok"
    },
    {
      "title": "UCaaS felhőszolgáltatók"
    },
    {
      "title": "Felhőalapú CPaaS kommunikációs platformok"
    }
  ],
  "whiteLabelCard": {
    "title": "Teljes White-Label Támogatás",
    "desc": "Kínáljon ügyfeleinek saját márkájával ellátott webes portált és mobilappot, miközben a stabil hang- és SMS-infrastruktúrát a háttérben az iNet Global biztosítja.",
    "brandLabel": "Az Ön márkája",
    "portalLabel": "Ügyfélportál",
    "tab1": "Számok",
    "tab2": "Hívások",
    "tab3": "SMS",
    "tagline": "Ügyfelének az Ön márkaneve. A háttérben a mi megbízható infrastruktúránk."
  },
  "ctaBadge": "ÉPÍTSÜK KI VÁLLALATI KOMMUNIKÁCIÓS HÁLÓZATÁT",
  "ctaTitle": "Fejlessze Vállalkozását Megbízható Távközlési Megoldásokkal",
  "ctaSubtitle": "Az intelligens hangútválasztástól és nemzetközi terminációtól az AI Voice és virtuális számokig az iNet Global olyan skálázható megoldásokat kínál, amelyekkel tisztán és stabilan érheti el ügyfeleit a világ bármely pontján.",
  "contactUs": "Kapcsolatfelvétel",
  "ctaTrust1": "Szolgáltatói Szintű Garantált SLA",
  "ctaTrust2": "Azonnali DID Kiosztás és Aktiválás",
  "ctaTrust3": "Globális Lefedettség Több Mint 100 Országban"
};

const uk: VirtualDidTranslation = {
  "breadcrumb": "Продукти | Портал DID + Мобільний додаток",
  "heroBadge": "Портал DID + Мобільний додаток",
  "heroTitle": "Повна Платформа Керування DID та Віртуальними Номерами",
  "heroDesc": "Керуйте віртуальними телефонними номерами, вхідними дзвінками та SMS через єдиний потужний портал DID. Надайте клієнтам виділені номери з мобільним додатком для прийому дзвінків і повідомлень з будь-якої точки світу.",
  "getStarted": "Почати",
  "requestDemo": "Замовити Демо",
  "heroFootnote": "Міжнародні номери. Локальна присутність. Єдина платформа.",
  "dashboardPreview": {
    "title": "Портал DID",
    "liveBadge": "Онлайн",
    "tab1": "Огляд",
    "tab2": "Мої номери",
    "tab3": "Маршрутизація",
    "tab4": "SMS вхідні",
    "stat1Label": "Активні DID",
    "stat1Val": "248",
    "stat2Label": "Вхідні дзвінки",
    "stat2Val": "1 842",
    "stat3Label": "Отримано SMS",
    "stat3Val": "3 126",
    "tableTitle": "Ваші міжнародні номери",
    "smsNotificationTitle": "Отримано нове SMS",
    "smsNotificationBody": "Ваш запис підтверджено на 10:30.",
    "phoneIncomingText": "Вхідний діловий дзвінок",
    "phoneCaller": "Jordan Davis",
    "phoneDid": "через +1 212 555 0198"
  },
  "highlightsHeading": "Ваш Міжнародний Номер. Ваш Повний Контроль.",
  "highlights": [
    {
      "title": "Міжнародні Номери DID"
    },
    {
      "title": "Вхідні Дзвінки"
    },
    {
      "title": "Прийом SMS"
    },
    {
      "title": "Мобільний Додаток"
    },
    {
      "title": "Переадресація Дзвінків"
    },
    {
      "title": "Керування Пулом DID"
    },
    {
      "title": "Моніторинг в Реальному Часі"
    }
  ],
  "managementBadge": "Керування DID",
  "managementTitle": "Керуйте Всіма DID з Єдиного Централізованого Порталу",
  "managementSubtitle": "Шукайте, підключайте, активуйте, блокуйте, налаштовуйте та контролюйте віртуальні номери на єдиній інформативній панелі.",
  "managementChecklistTitle": "Можливості Керування DID",
  "managementChecklist": [
    "Глобальний каталог номерів DID",
    "Вибір за країною та містом",
    "Швидкий та зручний пошук номерів",
    "Миттєве підключення (Instant Provisioning)",
    "Активація та деактивація DID",
    "Гнучке призначення номерів клієнтам",
    "Управління DID в розрізі клієнтів",
    "Контроль термінів дії та продовження",
    "Керування тарифікацією та вартістю DID",
    "Моніторинг обсягів використання номерів"
  ],
  "inventoryCard": {
    "title": "Інвентар номерів",
    "subtitle": "248 номерів на клієнтських акаунтах",
    "provisionBtn": "+ Підключити Новий DID",
    "searchPlaceholder": "Пошук номерів...",
    "countryFilter": "Усі країни",
    "statusFilter": "Усі статуси",
    "colDid": "НОМЕР DID",
    "colCountry": "КРАЇНА / МІСТО",
    "colCustomer": "КЛІЄНТ",
    "colStatus": "СТАТУС",
    "showingText": "Показано 4 з 248 номерів"
  },
  "callMgmtBadge": "Приймайте Дзвінки Де Завгодно",
  "callMgmtTitle": "Потужне Керування Маршрутизацією Вхідних Дзвінків",
  "callMgmtSubtitle": "Спрямовуйте вхідні виклики саме туди, де на них чекають.",
  "forwardingTitle": "Переадресація Дзвінків",
  "forwardingSubtitle": "Переадресація викликів на:",
  "forwardingItems": [
    "Мобільні телефонні номери",
    "SIP-акаунти та транки",
    "Браузерні софтфони",
    "Операторів контакт-центру",
    "Голосові меню IVR",
    "Кілька напрямків одночасно"
  ],
  "advancedRoutingTitle": "Інтелектуальна Маршрутизація",
  "advancedRoutingItems": [
    "Маршрутизація за часом доби",
    "Маршрутизація за країною того, хто телефонує",
    "Маршрутизація за номером абонента (CLI)",
    "Аварійна резервна маршрутизація (Failover)",
    "Послідовний дзвінок",
    "Одночасний дзвінок на кількох пристроях",
    "Правила для робочого та неробочого часу"
  ],
  "journeyCard": {
    "title": "Розумний маршрут дзвінка",
    "liveBadge": "Онлайн",
    "step1Title": "Вхідний виклик",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "Робочі години",
    "step2Val": "Пн-Пт · 09:00–18:00",
    "step3Title": "Команда підтримки",
    "step3Val": "Одночасний дзвінок · 3 оператори",
    "footerText": "Немає відповіді? Автоматичний перевід на мобільний."
  },
  "mobileBadge": "Мобільний Додаток для Дзвінків та SMS",
  "mobileTitle": "Ваш Робочий Номер DID Завжди у Кишені",
  "mobileSubtitle": "Надайте співробітникам мобільний додаток для прийому корпоративних дзвінків та SMS прямо на смартфонах.",
  "mobileFooter": "Ваш бізнес. Завжди на зв'язку з вами.",
  "mobileFeaturesTitle": "Функції Мобільного Додатка",
  "mobileFeatures": [
    {
      "title": "Вхідні Дзвінки",
      "desc": "Приймайте дзвінки на ваш номер DID безпосередньо через мобільний додаток."
    },
    {
      "title": "Вхідні SMS",
      "desc": "Отримуйте SMS у захищену та зручно впорядковану поштову скриньку."
    },
    {
      "title": "Історія Дзвінків",
      "desc": "Переглядайте детальні списки прийнятих, пропущених та набраних викликів."
    },
    {
      "title": "Історія SMS",
      "desc": "Швидкий доступ до всієї попередньої переписки з клієнтами."
    },
    {
      "title": "Push-сповіщення",
      "desc": "Миттєві сповіщення на екрані при надходженні нового дзвінка або SMS."
    },
    {
      "title": "Кілька Номерів DID",
      "desc": "Керуйте кількома віртуальними номерами під одним профілем."
    },
    {
      "title": "Керування Контактами",
      "desc": "Зберігайте та групуйте важливі ділові контакти клієнтів."
    }
  ],
  "smsBadge": "Простий Прийом SMS",
  "smsTitle": "Не Пропустіть Жодного Важливого Клієнтського Повідомлення",
  "smsSubtitle": "Перетворіть ваш номер DID на функціональну точку прийому текстових повідомлень.",
  "smsPerfectTitle": "Ідеально підходить для:",
  "smsPerfectItems": [
    "Служби підтримки та турботи про клієнтів",
    "Щоденної корпоративної ділової комунікації",
    "Збору лідів та вхідних звернень",
    "Підтверджень та нагадувань про зустрічі",
    "Сервісних та аварійних сповіщень системи",
    "Кодів безпеки та верифікації облікових записів",
    "Двостороннього інтерактивного діалогу"
  ],
  "sampleSms": {
    "badge": "Бізнес SMS · Отримано",
    "body": "Вітаємо, Jordan! Ваш запис підтверджено на завтра о 10:30. Дайте відповідь, якщо потрібно перенести.",
    "meta": "Сьогодні, 10:24 · Підтримка Acme"
  },
  "smsDashboard": {
    "title": "Панель Моніторингу SMS",
    "receivingBadge": "Прийом активний",
    "todayLabel": "Отримано SMS сьогодні",
    "todayVal": "3 126 повідомлень",
    "colSender": "ВІДПРАВНИК",
    "colDid": "DID ОТРИМУВАЧА",
    "colMessage": "ПОВІДОМЛЕННЯ",
    "colTime": "ЧАС",
    "monitorTitle": "Моніторинг у реальному часі:",
    "monitorItems": [
      "Вхідний потік SMS-повідомлень",
      "Номер телефону відправника",
      "Цільовий номер DID",
      "Повний текст повідомлення",
      "Точна дата та часова мітка",
      "Прив'язаний клієнт / акаунт",
      "Аналітика обсягів переписки"
    ]
  },
  "monitoringBadge": "Розширений Моніторинг DID",
  "monitoringTitle": "Контролюйте Стан та Навантаження Кожного Номера",
  "monitoringSubtitle": "Відстежуйте весь пул номерів DID та активність у реальному часі 24/7.",
  "monitoringStats": {
    "title": "Зведення по номерах DID",
    "liveBadge": "Реальний час",
    "stat1Label": "Активні DID",
    "stat1Val": "248",
    "stat1Sub": "+12 за цей місяць",
    "stat2Label": "Доступно",
    "stat2Val": "64",
    "stat2Sub": "Готові до видачі",
    "stat3Label": "Виділено",
    "stat3Val": "184",
    "stat3Sub": "32 клієнти",
    "stat4Label": "Пропущені",
    "stat4Val": "18",
    "stat4Sub": "-8% за цей тиждень",
    "chartTitle": "Динаміка Голосу та SMS",
    "chartTimeframe": "Останні 7 днів",
    "legend1": "Обсяг SMS",
    "legend2": "Обсяг дзвінків"
  },
  "operationalViewTitle": "Повна операційна картина",
  "operationalViewItems": [
    "Загальна кількість активних номерів",
    "Вільні номери в пулі",
    "Номери, закріплені за клієнтами",
    "Обсяг вхідних дзвінків",
    "Кількість прийнятих SMS-повідомлень",
    "Середня тривалість викликів",
    "Відсоток пропущених дзвінків",
    "Коефіцієнт утилізації номерів",
    "Розподіл за акаунтами клієнтів",
    "Аналіз витрат та прибутковості"
  ],
  "resellerBadge": "Створено для Реселерів та Корпорацій",
  "resellerTitle": "Запустіть Власний Бізнес із Надання Віртуальних Номерів",
  "resellerSubtitle": "Наша платформа оптимальна для:",
  "supportedAudiences": [
    {
      "title": "Реселерів та дистриб'юторів DID"
    },
    {
      "title": "Операторів IP-телефонії (VoIP)"
    },
    {
      "title": "Міжнародних контакт-центрів"
    },
    {
      "title": "Великих компаній та корпорацій"
    },
    {
      "title": "Провайдерів рішень UCaaS"
    },
    {
      "title": "Хмарних комунікаційних платформ (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "Підтримка White-Label",
    "desc": "Надайте клієнтам веб-портал під вашим брендом та мобільний додаток з вашим логотипом, повністю контролюючи голосову та SMS-інфраструктуру на бекенді.",
    "brandLabel": "Ваш власний бренд",
    "portalLabel": "Клієнтський портал",
    "tab1": "Номери",
    "tab2": "Виклики",
    "tab3": "SMS",
    "tagline": "Досвід вашого бренду для клієнта. Наша надійна інфраструктура."
  },
  "ctaBadge": "ПОБУДУЙМО ВАШУ КОРПОРАТИВНУ МЕРЕЖУ ЗВ'ЯЗКУ",
  "ctaTitle": "Розвивайте бізнес за допомогою сучасних рішень для комунікації",
  "ctaSubtitle": "Від розумної голосової маршрутизації та міжнародного транзиту до голосового штучного інтелекту та віртуальних номерів — iNet Global забезпечує надійні рішення для ефективного спілкування з клієнтами в усьому світі.",
  "contactUs": "Зв'язатися з нами",
  "ctaTrust1": "Корпоративний SLA Операторського Рівня",
  "ctaTrust2": "Миттєве Підключення Номерів DID",
  "ctaTrust3": "Покриття у Більш Ніж 100 Країнах Світу"
};

const he: VirtualDidTranslation = {
  "breadcrumb": "מוצרים | פורטל DID + אפליקציה לנייד",
  "heroBadge": "פורטל DID + אפליקציה לנייד",
  "heroTitle": "פלטפורמת ניהול מספרי DID ומספרים וירטואליים מלאה",
  "heroDesc": "נהלו מספרי טלפון וירטואליים, שיחות נכנסות והודעות SMS מפורטל DID עוצמתי ומרכזי אחד. העניקו ללקוחות שלכם מספרים ייעודיים עם אפליקציה לנייד לקבלת שיחות והודעות מכל מקום בעולם.",
  "getStarted": "התחל עכשיו",
  "requestDemo": "בקש הדגמה",
  "heroFootnote": "מספרים בינלאומיים. נוכחות מקומית. פלטפורמה אחת מאוחדת.",
  "dashboardPreview": {
    "title": "פורטל DID",
    "liveBadge": "פעיל",
    "tab1": "סקירה",
    "tab2": "המספרים שלי",
    "tab3": "ניתוב שיחות",
    "tab4": "דואר SMS",
    "stat1Label": "מספרי DID פעילים",
    "stat1Val": "248",
    "stat2Label": "שיחות נכנסות",
    "stat2Val": "1,842",
    "stat3Label": "הודעות SMS שהתקבלו",
    "stat3Val": "3,126",
    "tableTitle": "המספרים הבינלאומיים שלכם",
    "smsNotificationTitle": "התקבלה הודעת SMS חדשה",
    "smsNotificationBody": "הפגישה שלכם אושרה לשעה 10:30 בבוקר.",
    "phoneIncomingText": "שיחה עסקית נכנסת",
    "phoneCaller": "ג'ורדן דייוויס",
    "phoneDid": "דרך +1 212 555 0198"
  },
  "highlightsHeading": "המספר הבינלאומי שלכם. השליטה המלאה שלכם.",
  "highlights": [
    {
      "title": "מספרי DID בינלאומיים"
    },
    {
      "title": "שיחות נכנסות"
    },
    {
      "title": "קבלת SMS"
    },
    {
      "title": "אפליקציה ייעודית לנייד"
    },
    {
      "title": "הפניית שיחות"
    },
    {
      "title": "ניהול מלאי מספרי DID"
    },
    {
      "title": "ניטור בזמן אמת"
    }
  ],
  "managementBadge": "ניהול מספרי DID",
  "managementTitle": "נהלו את כל מספרי ה-DID מפורטל מרכזי אחד",
  "managementSubtitle": "חפשו, הקצו, הפעילו, השהו, הגדירו ונטרו את המספרים הווירטואליים שלכם מלוח בקרה אחד וידידותי.",
  "managementChecklistTitle": "יכולות ניהול DID מרכזיות",
  "managementChecklist": [
    "מלאי עולמי של מספרי DID",
    "בחירה לפי מדינה ועיר",
    "חיפוש מספרים מתקדם ומהיר",
    "הקצאה מיידית (Instant Provisioning)",
    "הפעלה והשבתה של מספרי DID",
    "הקצאת מספרים גמישה למשתמשים",
    "ניהול מספרי DID לפי לקוח",
    "ניהול תוקף וחידוש מספרים",
    "בקרת מחירונים ועלויות של DID",
    "ניטור תעבורת שימוש במספרים"
  ],
  "inventoryCard": {
    "title": "מלאי מספרים",
    "subtitle": "248 מספרים בחשבונות הלקוחות שלכם",
    "provisionBtn": "+ הקצה DID חדש",
    "searchPlaceholder": "חפש מספרים...",
    "countryFilter": "כל המדינות",
    "statusFilter": "כל הסטטוסים",
    "colDid": "מספר DID",
    "colCountry": "מדינה / עיר",
    "colCustomer": "לקוח",
    "colStatus": "סטטוס",
    "showingText": "מציג 4 מתוך 248 מספרים"
  },
  "callMgmtBadge": "קבלו שיחות בכל מקום",
  "callMgmtTitle": "ניהול מתקדם של ניתוב שיחות נכנסות",
  "callMgmtSubtitle": "נתבו שיחות נכנסות בדיוק ליעדים ולמכשירים שאתם צריכים.",
  "forwardingTitle": "הפניית שיחות",
  "forwardingSubtitle": "הפניית שיחות אל:",
  "forwardingItems": [
    "מספרי טלפון ניידים",
    "חשבונות וקווים של SIP",
    "טלפונים מבוססי דפדפן (Softphones)",
    "נציגי מוקד שירות ומכירות",
    "מערכות ניתוב קולי (IVR)",
    "יעדים מרובים במקביל"
  ],
  "advancedRoutingTitle": "ניתוב שיחות חכם",
  "advancedRoutingItems": [
    "ניתוב מבוסס שעות וימים",
    "ניתוב לפי מדינת המתקשר",
    "ניתוב לפי זיהוי מתקשר (CLI)",
    "ניתוב גיבוי אוטומטי (Failover)",
    "צלצול סדרתי בין עמדות",
    "צלצול בו-זמני במספר מכשירים",
    "חוקי ניתוב לשעות פעילות ומחוצה להן"
  ],
  "journeyCard": {
    "title": "מסלול שיחה חכם",
    "liveBadge": "חי",
    "step1Title": "שיחה נכנסת",
    "step1Val": "+44 20 7946 0912",
    "step2Title": "שעות פעילות",
    "step2Val": "ב'-ו' · 09:00–18:00",
    "step3Title": "צוות תמיכה",
    "step3Val": "צלצול במקביל · 3 נציגים",
    "footerText": "אין מענה? הפניה אוטומטית מיידית לטלפון הנייד."
  },
  "mobileBadge": "אפליקציה לנייד לשיחות ו-SMS",
  "mobileTitle": "מספר ה-DID העסקי שלכם תמיד בכיס",
  "mobileSubtitle": "העניקו לעובדים אפליקציה ייעודית לסמארטפון כדי לקבל שיחות עסקיות והודעות SMS ישירות במכשיר הנייד.",
  "mobileFooter": "העסק שלכם. תמיד איתכם.",
  "mobileFeaturesTitle": "יכולות האפליקציה",
  "mobileFeatures": [
    {
      "title": "שיחות נכנסות",
      "desc": "קבלו שיחות למספר ה-DID ישירות דרך האפליקציה הניידת."
    },
    {
      "title": "תיבת SMS נכנסת",
      "desc": "קבלו הודעות SMS בתיבת דואר מאובטחת ומסודרת."
    },
    {
      "title": "היסטוריית שיחות",
      "desc": "צפו ברשימה מפורטת של שיחות נכנסות, שלא נענו ושיחות יוצאות."
    },
    {
      "title": "היסטוריית SMS",
      "desc": "גישה נוחה לכל ההודעות והשיחות הקודמות עם לקוחות."
    },
    {
      "title": "התראות Push",
      "desc": "קבלו התראות מיידיות במסך הנעילה בעת קבלת שיחה או הודעה חדשה."
    },
    {
      "title": "ניהול מספרי DID מרובים",
      "desc": "נהלו מספר מספרים וירטואליים בנוחות מתוך חשבון משתמש אחד."
    },
    {
      "title": "ניהול אנשי קשר",
      "desc": "שמרו וארגנו אנשי קשר עסקיים חשובים בצורה מאובטחת."
    }
  ],
  "smsBadge": "קבלת SMS בקלות ובמהירות",
  "smsTitle": "לעולם אל תפספסו הודעה קריטית מלקוח",
  "smsSubtitle": "הפכו את מספר ה-DID שלכם לערוץ קליטת הודעות SMS עוצמתי ואמין.",
  "smsPerfectTitle": "אידיאלי עבור:",
  "smsPerfectItems": [
    "מוקדי שירות לקוחות ותמיכה טכנית",
    "תקשורת עסקית יומיומית",
    "איסוף לידים ופניות של לקוחות מתעניינים",
    "אישורי פגישות ותזכורות ללקוחות",
    "התראות מערכת והודעות שירות דחופות",
    "קודי אימות ואבטחת חשבונות (OTP)",
    "תקשורת דו-כיוונית ואינטראקטיבית"
  ],
  "sampleSms": {
    "badge": "SMS עסקי · התקבל",
    "body": "שלום ג'ורדן, הפגישה שלכם אושרה למחר בשעה 10:30. אנא השב אם ברצונך לתאם מחדש.",
    "meta": "היום, 10:24 · תמיכת Acme"
  },
  "smsDashboard": {
    "title": "לוח בקרת SMS",
    "receivingBadge": "קליטה פעילה",
    "todayLabel": "סה\"כ הודעות שהתקבלו היום",
    "todayVal": "3,126 הודעות",
    "colSender": "שולח",
    "colDid": "DID יעד",
    "colMessage": "הודעה",
    "colTime": "שעה",
    "monitorTitle": "ניטור בזמן אמת:",
    "monitorItems": [
      "זרימת הודעות SMS נכנסות",
      "מספר הטלפון של השולח",
      "מספר ה-DID המקבל",
      "תוכן ההודעה המלא",
      "תאריך ושעה מדויקים",
      "הלקוח / החשבון המשויך",
      "ניתוח נפחי תעבורת הודעות"
    ]
  },
  "monitoringBadge": "ניטור מתקדם של מספרי DID",
  "monitoringTitle": "דעו את הסטטוס והתעבורה של כל מספר בזמן אמת",
  "monitoringSubtitle": "עקבו אחר כל מלאי מספרי ה-DID שלכם בשידור חי 24/7.",
  "monitoringStats": {
    "title": "סקירת מספרי DID",
    "liveBadge": "זמן אמת",
    "stat1Label": "מספרי DID פעילים",
    "stat1Val": "248",
    "stat1Sub": "+12 החודש",
    "stat2Label": "זמינים",
    "stat2Val": "64",
    "stat2Sub": "מוכנים להקצאה",
    "stat3Label": "מוקצים",
    "stat3Val": "184",
    "stat3Sub": "32 לקוחות",
    "stat4Label": "שיחות שלא נענו",
    "stat4Val": "18",
    "stat4Sub": "-8% השבוע",
    "chartTitle": "מגמת פעילות קול ו-SMS",
    "chartTimeframe": "7 הימים האחרונים",
    "legend1": "נפח הודעות",
    "legend2": "נפח שיחות"
  },
  "operationalViewTitle": "תמונה תפעולית מלאה",
  "operationalViewItems": [
    "סך כל מספרי ה-DID הפעילים",
    "מספרים פנויים במלאי",
    "מספרי DID שהוקצו ללקוחות",
    "נפח השיחות הנכנסות",
    "כמות הודעות ה-SMS שהתקבלו",
    "משך שיחה ממוצע",
    "אחוז השיחות שלא נענו",
    "מדד ניצול המספרים",
    "התפלגות לפי חשבונות לקוחות",
    "מעקב עלויות והכנסות"
  ],
  "resellerBadge": "נבנה עבור מפיצים וארגונים גדולים",
  "resellerTitle": "הקימו עסק משלכם לאספקת מספרים וירטואליים",
  "resellerSubtitle": "הפלטפורמה שלנו אידיאלית עבור:",
  "supportedAudiences": [
    {
      "title": "מפיצים ומשווקי מספרי DID"
    },
    {
      "title": "ספקי טלפוניה ו-VoIP"
    },
    {
      "title": "מוקדי שירות ומכירות בינלאומיים"
    },
    {
      "title": "תאגידים וחברות גדולות"
    },
    {
      "title": "ספקי פתרוนำ UCaaS"
    },
    {
      "title": "פלטפורמות תקשורת ענן (CPaaS)"
    }
  ],
  "whiteLabelCard": {
    "title": "תמיכה מלאה במותג פרטי (White-Label)",
    "desc": "העניקו ללקוחות שלכם פורטל ואפליקציה ממותגים עם הלוגו שלכם, בזמן ש-iNet Global מנהלת את תשתית התקשורת האמינה ברקע.",
    "brandLabel": "המותג שלכם",
    "portalLabel": "פורטל לקוחות",
    "tab1": "מספרים",
    "tab2": "שיחות",
    "tab3": "SMS",
    "tagline": "חוויית המותג שלכם ללקוח. התשתית האמינה שלנו ברקע."
  },
  "ctaBadge": "בואו נבנה את רשת התקשורת שלכם",
  "ctaTitle": "הצמיחו את העסק שלכם עם פתרונות תקשורת ארגוניים מתקדמים",
  "ctaSubtitle": "מניתוב קולי חכם וטרמינציה בינלאומית ועד ל-AI Voice ומספרים וירטואליים, iNet Global מספקת פתרונות תקשורת מתקדמים המסייעים לעסקים להתחבר ללקוחות בכל מקום בעולם בבהירות ובאמינות.",
  "contactUs": "צור קשר",
  "ctaTrust1": "הסכם רמת שירות (SLA) ברמת מפעיל",
  "ctaTrust2": "הקצאת מספרי DID מיידית",
  "ctaTrust3": "כיסוי עולמי בלמעלה מ-100 מדינות"
};

const translations: Record<string, VirtualDidTranslation> = {
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

export const getVirtualDidTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): VirtualDidTranslation => {
  return translations[language] || translations["en"];
};

export default getVirtualDidTranslations;

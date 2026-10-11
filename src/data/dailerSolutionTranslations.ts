export interface DailerSolutionTranslation {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  requestDemo: string;
  exploreDialer: string;
  heroFootnote: string;
  heroMockup: {
    title: string;
    agentStatus: string;
    campaign: string;
    campaignMeta: string;
    contactsCount: string;
    connectedBadge: string;
    callerName: string;
    callerPhone: string;
    duration: string;
    endCall: string;
    tabContact: string;
    tabHistory: string;
    tabNotes: string;
    customerDetailsTitle: string;
    companyLabel: string;
    companyVal: string;
    emailLabel: string;
    emailVal: string;
    lastContactLabel: string;
    lastContactVal: string;
    dispositionLabel: string;
    dispositionVal: string;
    recordingText: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    floatBadgeTitle: string;
    floatBadgeDesc: string;
  };
  highlights: Array<{
    title: string;
  }>;
  desktopBadge: string;
  desktopTitle: string;
  desktopSubtitle: string;
  desktopFootnote: string;
  desktopFeaturesTitle: string;
  desktopFeatures: string[];
  desktopMainHeading?: string;
  desktopWorkspaceTitle?: string;
  desktopWorkspaceSubtitle?: string;
  mobileBadge: string;
  mobileTitle: string;
  mobileSubtitle: string;
  mobileFootnote: string;
  mobileFeaturesTitle: string;
  mobileFeatures: string[];
  mobileSyncCard: {
    title: string;
    desc: string;
    badge: string;
  };
  mobileDialerMockup: {
    title: string;
    greeting: string;
    status: string;
    callerId: string;
    callerIdLabel: string;
    tabDialer: string;
    tabContacts: string;
    tabHistory: string;
  };
  routesBadge: string;
  routesTitle: string;
  routesSubtitle: string;
  routesFeaturesTitle: string;
  routesFeatures: string[];
  routeControlCard: {
    title: string;
    badge: string;
    agentCall: string;
    smartRouting: string;
    smartRoutingDesc: string;
    carrier1: string;
    carrier2: string;
    carrier3: string;
    tableDest: string;
    tableCarrier: string;
    tableQuality: string;
    tableRate: string;
    note: string;
  };
  routesEngine: {
    title: string;
    desc: string;
    tags: string[];
  };
  monitoringBadge: string;
  monitoringTitle: string;
  monitoringSubtitle: string;
  monitoringLiveHeader: string;
  monitoringLiveSub: string;
  monitoringKpis: Array<{
    label: string;
    value: string;
    highlight?: boolean;
    danger?: boolean;
  }>;
  monitoringTable: {
    title: string;
    updateMeta: string;
    note: string;
    cols: {
      agent: string;
      campaign: string;
      status: string;
      duration: string;
      destination: string;
      supervisor: string;
    };
  };
  supervisorToolsTitle: string;
  supervisorToolsSubtitle: string;
  supervisorTools: Array<{
    title: string;
    desc: string;
  }>;
  wallboardCard: {
    stat1: string;
    stat1Sub: string;
    stat2: string;
    stat2Sub: string;
    title: string;
    desc: string;
  };
  dialingModesBadge: string;
  dialingModesTitle: string;
  dialingModesSubtitle: string;
  dialingModes: Array<{
    title: string;
    desc: string;
    flow: string;
    tag: string;
  }>;
  analyticsBadge: string;
  analyticsTitle: string;
  analyticsSubtitle: string;
  analyticsFeatures: string[];
  analyticsSubtext: string;
  analyticsCard: {
    title: string;
    exportBtn: string;
    tabHourly: string;
    tabDaily: string;
    tabMonthly: string;
    timeframe: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    legendCalls: string;
    legendAnswered: string;
    dispositionTitle: string;
    note: string;
  };
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  getStarted: string;
  contactUs: string;
  ctaTrust1?: string;
  ctaTrust2?: string;
  ctaTrust3?: string;
}

const en: DailerSolutionTranslation = {
  "heroBadge": "CALL CENTER DIALER SOLUTION",
  "heroTitle": "Next-Generation Call Center Dialer for Desktop & Mobile",
  "heroDesc": "Connect your agents, customers, and global routes through one powerful calling platform. Use our browser-based desktop dialer or mobile dialer to manage outbound calling with advanced routing, monitoring, analytics, and real-time control.",
  "requestDemo": "Request a Demo",
  "exploreDialer": "Explore Dialer",
  "heroFootnote": "One connected workspace. From first call to final report.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Agent available",
    "campaign": "Customer follow-up",
    "campaignMeta": "Progressive campaign • Today",
    "contactsCount": "128 contacts",
    "connectedBadge": "Connected - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "End call",
    "tabContact": "Contact",
    "tabHistory": "History",
    "tabNotes": "Notes",
    "customerDetailsTitle": "CUSTOMER DETAILS",
    "companyLabel": "Company",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Email",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Last contact",
    "lastContactVal": "07 Oct 2026",
    "dispositionLabel": "CALL DISPOSITION",
    "dispositionVal": "Follow-up scheduled",
    "recordingText": "Recording in progress",
    "stat1Label": "Calls today",
    "stat1Val": "46",
    "stat2Label": "Connected",
    "stat2Val": "38",
    "stat3Label": "Talk time",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "The right route. Every call.",
    "floatBadgeDesc": "UK · Carrier A · Quality 98.6%"
  },
  "highlights": [
    {
      "title": "Browser-Based Dialer"
    },
    {
      "title": "Mobile Dialer"
    },
    {
      "title": "A–Z Global Routes"
    },
    {
      "title": "Predictive & Progressive Dialing"
    },
    {
      "title": "Live Call Monitoring"
    },
    {
      "title": "Real-Time Analytics"
    }
  ],
  "desktopBadge": "Desktop Browser Dialer",
  "desktopTitle": "Turn Any Computer Into a Professional Call Center",
  "desktopSubtitle": "No complicated desktop installation. Agents can securely log in through their browser and start making calls.",
  "desktopFootnote": "Your browser is your workspace. Secure agent access. No complicated installation.",
  "desktopFeaturesTitle": "Features",
  "desktopFeatures": [
    "WebRTC browser calling",
    "Agent login & management",
    "Click-to-call",
    "Contact management",
    "Call history",
    "Call recording",
    "Call transfer",
    "Hold & mute",
    "Disposition management",
    "Agent status tracking",
    "Real-time call statistics"
  ],
  "desktopMainHeading": "One Dialer. Every Calling Requirement.",
  "desktopWorkspaceTitle": "Your browser is your workspace.",
  "desktopWorkspaceSubtitle": "Secure agent access. No complicated installation.",
  "mobileBadge": "Mobile Dialer",
  "mobileTitle": "Take Your Calling Operation Anywhere",
  "mobileSubtitle": "Give remote and field agents a professional mobile calling experience with access to your business calling infrastructure.",
  "mobileFootnote": "Your business number. Wherever work takes you.",
  "mobileFeaturesTitle": "Mobile Features",
  "mobileFeatures": [
    "Android/iOS compatible architecture",
    "SIP/WebRTC calling",
    "Contact synchronization",
    "Call history",
    "Click-to-call",
    "Caller ID management",
    "Call recording",
    "Agent availability",
    "Push notifications",
    "Secure authentication"
  ],
  "mobileSyncCard": {
    "title": "Contacts, in sync.",
    "desc": "Your customers and call history, always with you.",
    "badge": "Synced just now"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Good morning, Alex",
    "status": "Available",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Caller ID: iNet Business",
    "tabDialer": "Dialer",
    "tabContacts": "Contacts",
    "tabHistory": "History"
  },
  "routesBadge": "Advanced A–Z Global Routes",
  "routesTitle": "Reach Customers Through the Right Route",
  "routesSubtitle": "Connect to multiple carriers and suppliers and intelligently manage your global voice traffic.",
  "routesFeaturesTitle": "Route Management",
  "routesFeatures": [
    "A–Z international destinations",
    "Multiple carrier integration",
    "Prefix-based routing",
    "Least-cost routing",
    "Quality-based routing",
    "Failover routing",
    "Priority routing",
    "Destination-based routing",
    "Carrier performance monitoring",
    "Route cost management"
  ],
  "routeControlCard": {
    "title": "Global route control",
    "badge": "Routes healthy",
    "agentCall": "Agent call",
    "smartRouting": "Smart routing",
    "smartRoutingDesc": "Best available route",
    "carrier1": "Carrier A · Priority 1",
    "carrier2": "Carrier B · Priority 2",
    "carrier3": "Carrier C · Failover",
    "tableDest": "Destination",
    "tableCarrier": "Carrier",
    "tableQuality": "Quality",
    "tableRate": "/ min",
    "note": "Illustrative destinations, carrier quality and rates."
  },
  "routesEngine": {
    "title": "Smart Routing Engine",
    "desc": "Automatically select the best route based on destination, price, quality, availability, and carrier performance.",
    "tags": [
      "Destination",
      "Price",
      "Quality",
      "Availability",
      "Carrier performance"
    ]
  },
  "monitoringBadge": "Advanced Call Center Monitoring",
  "monitoringTitle": "Complete Visibility Into Your Call Center",
  "monitoringSubtitle": "Monitor your entire operation from a centralized dashboard.",
  "monitoringLiveHeader": "Live Monitoring",
  "monitoringLiveSub": "See what's happening right now.",
  "monitoringKpis": [
    {
      "label": "Active calls",
      "value": "128"
    },
    {
      "label": "Waiting calls",
      "value": "12"
    },
    {
      "label": "Available agents",
      "value": "36"
    },
    {
      "label": "Busy agents",
      "value": "64"
    },
    {
      "label": "Agent status",
      "value": "Live"
    },
    {
      "label": "Calls per second",
      "value": "8.4"
    },
    {
      "label": "Answer rate",
      "value": "86.2%"
    },
    {
      "label": "Average call duration",
      "value": "04:32"
    },
    {
      "label": "Concurrent calls",
      "value": "140"
    },
    {
      "label": "Failed calls",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Call center overview",
    "updateMeta": "All campaigns • 08 Oct 2026",
    "note": "Illustrative live dashboard • Monitor agents, queues and call quality from one workspace.",
    "cols": {
      "agent": "Agent",
      "campaign": "Campaign",
      "status": "Status",
      "duration": "Duration",
      "destination": "Destination",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Supervisor Tools",
  "supervisorToolsSubtitle": "Give managers complete control over agent performance.",
  "supervisorTools": [
    {
      "title": "Listen",
      "desc": "Monitor live calls for quality assurance."
    },
    {
      "title": "Whisper",
      "desc": "Guide an agent without the customer hearing the supervisor."
    },
    {
      "title": "Barge-In",
      "desc": "Join an active conversation when intervention is required."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Calls",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Real-Time Wallboard",
    "desc": "Display live call-center KPIs on large screens."
  },
  "dialingModesBadge": "Smarter outbound calling",
  "dialingModesTitle": "Advanced Dialing Modes",
  "dialingModesSubtitle": "Choose the dialing strategy that fits your operation.",
  "dialingModes": [
    {
      "title": "Predictive Dialer",
      "desc": "Automatically calls multiple numbers and connects answered calls to available agents.",
      "flow": "Multiple calls → Available agent",
      "tag": "HIGH-VOLUME OUTREACH"
    },
    {
      "title": "Progressive Dialer",
      "desc": "Calls the next customer only when an agent becomes available.",
      "flow": "Available agent → Next customer",
      "tag": "AGENT-PACED CALLING"
    },
    {
      "title": "Power Dialer",
      "desc": "Automatically moves through contact lists to maximize agent productivity.",
      "flow": "Contact list → Continuous calling",
      "tag": "FOCUSED PRODUCTIVITY"
    },
    {
      "title": "Preview Dialer",
      "desc": "Allows agents to review customer information before initiating the call.",
      "flow": "Review customer → Start call",
      "tag": "PERSONALIZED CONVERSATIONS"
    }
  ],
  "analyticsBadge": "Call Analytics & Reports",
  "analyticsTitle": "Turn Call Data Into Better Performance",
  "analyticsSubtitle": "Track every aspect of your calling operation.",
  "analyticsFeatures": [
    "Agent performance",
    "Campaign performance",
    "Call duration",
    "Answer rate",
    "Abandon rate",
    "Conversion tracking",
    "Call disposition",
    "Route performance",
    "Carrier performance",
    "Cost analysis",
    "Hourly/daily/monthly reports",
    "Call detail records"
  ],
  "analyticsSubtext": "From individual conversations to global carrier costs, bring the whole picture into focus.",
  "analyticsCard": {
    "title": "Campaign performance",
    "exportBtn": "Export",
    "tabHourly": "Hourly",
    "tabDaily": "Daily",
    "tabMonthly": "Monthly",
    "timeframe": "01–07 Oct 2026",
    "stat1Label": "Total calls",
    "stat1Val": "1,842",
    "stat2Label": "Answer rate",
    "stat2Val": "86.2%",
    "stat3Label": "Conversions",
    "stat3Val": "18.4%",
    "legendCalls": "Calls",
    "legendAnswered": "Answered",
    "dispositionTitle": "Call disposition",
    "note": "Illustrative report data • Export the detail behind every call."
  },
  "ctaBadge": "LET'S BUILD YOUR MESSAGING NETWORK",
  "ctaTitle": "Grow Your Business with Business SMS Solutions",
  "ctaSubtitle": "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
  "getStarted": "Get Started",
  "contactUs": "Contact Us",
  "ctaTrust1": "Enterprise Dialer SLA",
  "ctaTrust2": "Instant WebRTC Activation",
  "ctaTrust3": "24/7 Dedicated Support"
};

const es: DailerSolutionTranslation = {
  "heroBadge": "SOLUCIÓN DE MARCADOR PARA CALL CENTER",
  "heroTitle": "Marcador de Call Center de Última Generación para Escritorio y Móvil",
  "heroDesc": "Conecte a sus agentes, clientes y rutas globales a través de una potente plataforma de llamadas. Utilice nuestro marcador de escritorio basado en navegador o marcador móvil para gestionar llamadas salientes con enrutamiento avanzado, monitorización, análisis y control en tiempo real.",
  "requestDemo": "Solicitar una Demo",
  "exploreDialer": "Explorar Marcador",
  "heroFootnote": "Un espacio de trabajo conectado. Desde la primera llamada hasta el informe final.",
  "heroMockup": {
    "title": "Marcador iNet",
    "agentStatus": "Agente disponible",
    "campaign": "Seguimiento de clientes",
    "campaignMeta": "Campaña progresiva • Hoy",
    "contactsCount": "128 contactos",
    "connectedBadge": "Conectado - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Finalizar llamada",
    "tabContact": "Contacto",
    "tabHistory": "Historial",
    "tabNotes": "Notas",
    "customerDetailsTitle": "DETALLES DEL CLIENTE",
    "companyLabel": "Empresa",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Correo",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Último contacto",
    "lastContactVal": "07 Oct 2026",
    "dispositionLabel": "DISPOSICIÓN DE LLAMADA",
    "dispositionVal": "Seguimiento programado",
    "recordingText": "Grabación en curso",
    "stat1Label": "Llamadas hoy",
    "stat1Val": "46",
    "stat2Label": "Conectadas",
    "stat2Val": "38",
    "stat3Label": "Tiempo de conversación",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "La ruta correcta. Cada llamada.",
    "floatBadgeDesc": "Reino Unido · Operador A · Calidad 98.6%"
  },
  "highlights": [
    {
      "title": "Marcador Basado en Navegador"
    },
    {
      "title": "Marcador Móvil"
    },
    {
      "title": "Rutas Globales A–Z"
    },
    {
      "title": "Marcación Predictiva y Progresiva"
    },
    {
      "title": "Monitoreo de Llamadas en Vivo"
    },
    {
      "title": "Analítica en Tiempo Real"
    }
  ],
  "desktopBadge": "Marcador de Navegador de Escritorio",
  "desktopTitle": "Convierta Cualquier Computadora en un Call Center Profesional",
  "desktopSubtitle": "Sin instalaciones complicadas. Los agentes pueden iniciar sesión de forma segura en su navegador y comenzar a realizar llamadas.",
  "desktopFootnote": "Su navegador es su espacio de trabajo. Acceso seguro para agentes. Sin instalaciones complicadas.",
  "desktopFeaturesTitle": "Características",
  "desktopFeatures": [
    "Llamadas WebRTC en navegador",
    "Inicio de sesión y gestión de agentes",
    "Clic para llamar (Click-to-call)",
    "Gestión de contactos",
    "Historial de llamadas",
    "Grabación de llamadas",
    "Transferencia de llamadas",
    "Pausa y silencio (Hold & mute)",
    "Gestión de disposiciones",
    "Seguimiento de estado del agente",
    "Estadísticas de llamadas en tiempo real"
  ],
  "desktopMainHeading": "Un Solo Marcador. Cada Requisito de Llamada.",
  "desktopWorkspaceTitle": "Su navegador es su espacio de trabajo.",
  "desktopWorkspaceSubtitle": "Acceso seguro para agentes. Sin instalaciones complicadas.",
  "mobileBadge": "Marcador Móvil",
  "mobileTitle": "Lleve su Operación de Llamadas a Cualquier Lugar",
  "mobileSubtitle": "Ofrezca a agentes remotos y en campo una experiencia profesional de llamadas móviles con acceso directo a la infraestructura corporativa.",
  "mobileFootnote": "Su número de empresa. Dondequiera que el trabajo lo lleve.",
  "mobileFeaturesTitle": "Funciones Móviles",
  "mobileFeatures": [
    "Arquitectura compatible con Android e iOS",
    "Llamadas SIP y WebRTC",
    "Sincronización de contactos",
    "Historial de llamadas",
    "Clic para llamar",
    "Gestión de Caller ID",
    "Grabación de llamadas",
    "Disponibilidad de agentes",
    "Notificaciones push",
    "Autenticación segura"
  ],
  "mobileSyncCard": {
    "title": "Contactos sincronizados.",
    "desc": "Sus clientes y el historial de llamadas, siempre con usted.",
    "badge": "Sincronizado ahora mismo"
  },
  "mobileDialerMockup": {
    "title": "Marcador iNet",
    "greeting": "Buenos días, Alex",
    "status": "Disponible",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Caller ID: iNet Business",
    "tabDialer": "Marcador",
    "tabContacts": "Contactos",
    "tabHistory": "Historial"
  },
  "routesBadge": "Rutas Globales A–Z Avanzadas",
  "routesTitle": "Llegue a sus Clientes a Través de la Ruta Adecuada",
  "routesSubtitle": "Conéctese con múltiples operadores y proveedores y gestione de forma inteligente el tráfico global de voz.",
  "routesFeaturesTitle": "Gestión de Rutas",
  "routesFeatures": [
    "Destinos internacionales A–Z",
    "Integración con múltiples operadores",
    "Enrutamiento basado en prefijos",
    "Enrutamiento de menor coste (LCR)",
    "Enrutamiento basado en calidad",
    "Enrutamiento de conmutación por error (Failover)",
    "Enrutamiento por prioridad",
    "Enrutamiento por destino",
    "Monitoreo de rendimiento del operador",
    "Gestión de costes de ruta"
  ],
  "routeControlCard": {
    "title": "Control global de rutas",
    "badge": "Rutas en estado óptimo",
    "agentCall": "Llamada de agente",
    "smartRouting": "Enrutamiento inteligente",
    "smartRoutingDesc": "Mejor ruta disponible",
    "carrier1": "Operador A · Prioridad 1",
    "carrier2": "Operador B · Prioridad 2",
    "carrier3": "Operador C · Failover",
    "tableDest": "Destino",
    "tableCarrier": "Operador",
    "tableQuality": "Calidad",
    "tableRate": "/ min",
    "note": "Destinos, calidad de operadores y tarifas ilustrativas."
  },
  "routesEngine": {
    "title": "Motor de Enrutamiento Inteligente",
    "desc": "Selecciona automáticamente la mejor ruta según destino, precio, calidad, disponibilidad y rendimiento del operador.",
    "tags": [
      "Destino",
      "Precio",
      "Calidad",
      "Disponibilidad",
      "Rendimiento del operador"
    ]
  },
  "monitoringBadge": "Monitoreo Avanzado de Call Center",
  "monitoringTitle": "Visibilidad Completa de su Centro de Llamadas",
  "monitoringSubtitle": "Supervise toda su operación desde un panel de control centralizado.",
  "monitoringLiveHeader": "Monitoreo en Vivo",
  "monitoringLiveSub": "Vea lo que está sucediendo ahora mismo.",
  "monitoringKpis": [
    {
      "label": "Llamadas activas",
      "value": "128"
    },
    {
      "label": "Llamadas en espera",
      "value": "12"
    },
    {
      "label": "Agentes disponibles",
      "value": "36"
    },
    {
      "label": "Agentes ocupados",
      "value": "64"
    },
    {
      "label": "Estado de agentes",
      "value": "En vivo"
    },
    {
      "label": "Llamadas por segundo",
      "value": "8.4"
    },
    {
      "label": "Tasa de respuesta",
      "value": "86.2%"
    },
    {
      "label": "Duración promedio",
      "value": "04:32"
    },
    {
      "label": "Llamadas concurrentes",
      "value": "140"
    },
    {
      "label": "Llamadas fallidas",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Resumen del centro de llamadas",
    "updateMeta": "Todas las campañas • 08 Oct 2026",
    "note": "Panel en vivo ilustrativo • Monitoree agentes, colas y calidad de llamadas en un solo lugar.",
    "cols": {
      "agent": "Agente",
      "campaign": "Campaña",
      "status": "Estado",
      "duration": "Duración",
      "destination": "Destino",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Herramientas de Supervisor",
  "supervisorToolsSubtitle": "Otorgue a los supervisores el control total sobre el rendimiento de los agentes.",
  "supervisorTools": [
    {
      "title": "Escuchar (Listen)",
      "desc": "Supervise llamadas en vivo para garantizar el aseguramiento de calidad."
    },
    {
      "title": "Susurrar (Whisper)",
      "desc": "Oriente al agente en tiempo real sin que el cliente escuche al supervisor."
    },
    {
      "title": "Intervenir (Barge-In)",
      "desc": "Únase directamente a una conversación activa cuando se requiera asistencia."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Llamadas",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard en Tiempo Real",
    "desc": "Muestre KPIs en vivo del call center en pantallas grandes."
  },
  "dialingModesBadge": "Llamadas salientes más inteligentes",
  "dialingModesTitle": "Modos de Marcación Avanzados",
  "dialingModesSubtitle": "Elija la estrategia de marcación que mejor se adapte a su operativa.",
  "dialingModes": [
    {
      "title": "Marcador Predictivo",
      "desc": "Llama automáticamente a múltiples números y conecta las llamadas contestadas con agentes disponibles.",
      "flow": "Múltiples llamadas → Agente disponible",
      "tag": "ALTO VOLUMEN DE ALCANCE"
    },
    {
      "title": "Marcador Progresivo",
      "desc": "Llama al siguiente cliente únicamente cuando un agente queda disponible.",
      "flow": "Agente disponible → Siguiente cliente",
      "tag": "RITMO GUIADO POR EL AGENTE"
    },
    {
      "title": "Marcador Power",
      "desc": "Avanza continuamente por listas de contactos para maximizar la productividad de los agentes.",
      "flow": "Lista de contactos → Marcación continua",
      "tag": "PRODUCTIVIDAD ENFOCADA"
    },
    {
      "title": "Marcador Preview",
      "desc": "Permite a los agentes revisar la ficha del cliente antes de iniciar la llamada.",
      "flow": "Revisar cliente → Iniciar llamada",
      "tag": "CONVERSACIONES PERSONALIZADAS"
    }
  ],
  "analyticsBadge": "Analítica e Informes de Llamadas",
  "analyticsTitle": "Convierta los Datos de Llamadas en Mejor Rendimiento",
  "analyticsSubtitle": "Realice un seguimiento exhaustivo de cada faceta de su operación telefónica.",
  "analyticsFeatures": [
    "Rendimiento de agentes",
    "Rendimiento de campañas",
    "Duración de llamadas",
    "Tasa de respuesta",
    "Tasa de abandono",
    "Seguimiento de conversiones",
    "Disposición de llamadas",
    "Rendimiento de rutas",
    "Rendimiento de operadores",
    "Análisis de costes",
    "Informes por hora, día y mes",
    "Registros detallados de llamadas (CDR)"
  ],
  "analyticsSubtext": "Desde conversaciones individuales hasta costes globales de operadores, obtenga una visión nítida de todo el panorama.",
  "analyticsCard": {
    "title": "Rendimiento de campaña",
    "exportBtn": "Exportar",
    "tabHourly": "Por hora",
    "tabDaily": "Diario",
    "tabMonthly": "Mensual",
    "timeframe": "01–07 Oct 2026",
    "stat1Label": "Total de llamadas",
    "stat1Val": "1,842",
    "stat2Label": "Tasa de respuesta",
    "stat2Val": "86.2%",
    "stat3Label": "Conversiones",
    "stat3Val": "18.4%",
    "legendCalls": "Llamadas",
    "legendAnswered": "Contestadas",
    "dispositionTitle": "Disposición de llamadas",
    "note": "Datos de informe ilustrativos • Exporte el detalle detrás de cada llamada."
  },
  "ctaBadge": "CONSTRUYAMOS SU RED DE MENSAJERÍA",
  "ctaTitle": "Haga Crecer su Negocio con Soluciones SMS Empresariales",
  "ctaSubtitle": "Desde enrutamiento de voz inteligente y terminación internacional hasta Voz IA y números virtuales, iNet Global proporciona soluciones de comunicación escalables para conectar con clientes de forma clara, fiable y eficiente en todo el mundo.",
  "getStarted": "Comenzar",
  "contactUs": "Contáctenos",
  "ctaTrust1": "SLA de Marcador Empresarial",
  "ctaTrust2": "Activación Inmediata de WebRTC",
  "ctaTrust3": "Soporte Dedicado 24/7"
};

const zh: DailerSolutionTranslation = {
  "heroBadge": "呼叫中心拨号器解决方案",
  "heroTitle": "面向桌面与移动端的下一代呼叫中心智能拨号器",
  "heroDesc": "通过一个强大的统一呼叫平台连接您的客服坐席、全球客户与国际通信路由。利用我们基于浏览器的桌面拨号器或移动呼叫器，通过高级路由、实时监控、深度分析与全面掌控开展外呼业务。",
  "requestDemo": "申请演示",
  "exploreDialer": "探索拨号器",
  "heroFootnote": "一体化互联工作区。从首次呼叫到最终分析报表。",
  "heroMockup": {
    "title": "iNet 智能拨号器",
    "agentStatus": "坐席空闲就绪",
    "campaign": "高价值客户回访",
    "campaignMeta": "渐进式外呼活动 • 今日",
    "contactsCount": "128 位联系人",
    "connectedBadge": "通话已连接 - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "挂断电话",
    "tabContact": "联系人",
    "tabHistory": "历史记录",
    "tabNotes": "通话备注",
    "customerDetailsTitle": "客户详细资料",
    "companyLabel": "所属公司",
    "companyVal": "Lawson & Co.",
    "emailLabel": "电子邮箱",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "上次联系",
    "lastContactVal": "2026年10月07日",
    "dispositionLabel": "通话结果标记",
    "dispositionVal": "已预约二次跟进",
    "recordingText": "高清录音进行中",
    "stat1Label": "今日呼叫",
    "stat1Val": "46",
    "stat2Label": "成功接通",
    "stat2Val": "38",
    "stat3Label": "通话时长",
    "stat3Val": "02小时 18分",
    "floatBadgeTitle": "优质路由，护航每次通话",
    "floatBadgeDesc": "英国 · 运营商 A · 线路质量 98.6%"
  },
  "highlights": [
    {
      "title": "免安装浏览器拨号器"
    },
    {
      "title": "移动端专业拨号器"
    },
    {
      "title": "A–Z 全球优质语音路由"
    },
    {
      "title": "预测式与渐进式智能外呼"
    },
    {
      "title": "实时通话监控与质检"
    },
    {
      "title": "多维实时数据分析"
    }
  ],
  "desktopBadge": "桌面浏览器拨号器",
  "desktopTitle": "将任何电脑瞬间转变为专业级联络中心",
  "desktopSubtitle": "无需繁琐复杂的桌面客户端安装。客服坐席只需通过网页浏览器安全登录，即可立即开启专业呼叫。",
  "desktopFootnote": "浏览器即是工作台。安全的坐席登录，零门槛极速启用。",
  "desktopFeaturesTitle": "核心功能特性",
  "desktopFeatures": [
    "WebRTC 浏览器高清原生呼叫",
    "坐席账号登录与权限管理",
    "一键点击拨号 (Click-to-call)",
    "联系人客户关系管理",
    "详尽通话历史记录",
    "全程通话双轨录音",
    "呼叫无缝转移",
    "通话保持与一键静音",
    "外呼结果状态标记 (Disposition)",
    "坐席在线状态实时追踪",
    "实时通话性能统计数据"
  ],
  "desktopMainHeading": "一款拨号器，满足全部呼叫业务需求。",
  "desktopWorkspaceTitle": "浏览器即是您的专业工作台。",
  "desktopWorkspaceSubtitle": "安全的坐席权限访问，免除复杂客户端安装。",
  "mobileBadge": "移动端呼叫器",
  "mobileTitle": "随时随地开展跨地域移动外呼业务",
  "mobileSubtitle": "为远程办公坐席与现场外勤团队提供专业移动呼叫体验，无缝接入企业级专属通信基础设施。",
  "mobileFootnote": "无论身处何地，均以企业统一号码呈现。",
  "mobileFeaturesTitle": "移动端专属特性",
  "mobileFeatures": [
    "Android 与 iOS 双平台原生兼容架构",
    "SIP / WebRTC 高清移动网络通话",
    "联系人数据云端双向实时同步",
    "实时通话详单与历史记录",
    "一键轻触快速拨号",
    "外显主叫号码 (Caller ID) 灵活管理",
    "移动端全程通话录音",
    "坐席在线忙闲状态切换",
    "离线来电即时推送通知",
    "银行级安全加密认证"
  ],
  "mobileSyncCard": {
    "title": "联系人资料实时同步",
    "desc": "客户档案与历史通话记录随时随地与您同行。",
    "badge": "刚刚已完成云端同步"
  },
  "mobileDialerMockup": {
    "title": "iNet 移动拨号器",
    "greeting": "早上好，Alex",
    "status": "就绪空闲",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "主叫号码: iNet 商务专线",
    "tabDialer": "拨号键盘",
    "tabContacts": "联系人",
    "tabHistory": "通话记录"
  },
  "routesBadge": "高级 A–Z 全球通信路由",
  "routesTitle": "通过最佳路径精准触达全球客户",
  "routesSubtitle": "直连全球多家一级运营商与供应商，以高智能策略调度您的跨国语音通信流量。",
  "routesFeaturesTitle": "路由智能管理能力",
  "routesFeatures": [
    "A–Z 全球国家与地区直连目的地",
    "支持多运营商并发接入与整合",
    "基于号码前缀的精细化路由",
    "成本最优最小成本路由 (LCR)",
    "基于语音接通率与音质的高质量路由",
    "智能故障自动转移备用路由 (Failover)",
    "高价值业务优先级保障路由",
    "按地域目的地的差异化智能分配",
    "各运营商链路质量实时监控",
    "全链路通话成本预算与开销控制"
  ],
  "routeControlCard": {
    "title": "全球通信路由调度中心",
    "badge": "全部链路健康正常",
    "agentCall": "坐席呼出请求",
    "smartRouting": "智能路由调度引擎",
    "smartRoutingDesc": "当前最优可用通信链路",
    "carrier1": "运营商 A · 优先级 1",
    "carrier2": "运营商 B · 优先级 2",
    "carrier3": "运营商 C · 故障冗余",
    "tableDest": "目标目的地",
    "tableCarrier": "承载运营商",
    "tableQuality": "接通品质",
    "tableRate": "费率 / 分钟",
    "note": "以上数据为演示性目的地、运营商质量及参考费率。"
  },
  "routesEngine": {
    "title": "智能路由调度引擎",
    "desc": "根据目的地、单价、链路品质、线路可用度及运营商实时表现，毫秒级自动优选最佳呼叫通路。",
    "tags": [
      "目的地",
      "单价成本",
      "线路质量",
      "可用状态",
      "运营商综合表现"
    ]
  },
  "monitoringBadge": "高级呼叫中心综合监控",
  "monitoringTitle": "全局掌控联络中心的每一处细节",
  "monitoringSubtitle": "通过统一的集中化可视化大屏，全面监控整个呼叫中心的实时运作。",
  "monitoringLiveHeader": "实时大盘监控",
  "monitoringLiveSub": "即刻洞察现场发生的每一次交互。",
  "monitoringKpis": [
    {
      "label": "当前活跃通话",
      "value": "128"
    },
    {
      "label": "排队等待呼叫",
      "value": "12"
    },
    {
      "label": "空闲就绪坐席",
      "value": "36"
    },
    {
      "label": "忙碌通话坐席",
      "value": "64"
    },
    {
      "label": "坐席实时状态",
      "value": "在线"
    },
    {
      "label": "每秒发起呼叫 (CPS)",
      "value": "8.4"
    },
    {
      "label": "平均应答接通率",
      "value": "86.2%"
    },
    {
      "label": "平均通话时长 (ACD)",
      "value": "04:32"
    },
    {
      "label": "并发通话总数",
      "value": "140"
    },
    {
      "label": "异常失败呼叫",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "呼叫中心运行总览",
    "updateMeta": "全部外呼活动 • 2026年10月08日",
    "note": "实时监控面板演示 • 在同一视图下集中把控坐席、排队队列及通话品质。",
    "cols": {
      "agent": "客服坐席",
      "campaign": "归属活动",
      "status": "当前状态",
      "duration": "持续时长",
      "destination": "呼叫目的地",
      "supervisor": "主管质检操作"
    }
  },
  "supervisorToolsTitle": "班长席/主管监听工具",
  "supervisorToolsSubtitle": "为管理人员提供坐席绩效把控与关键通话介入的全面手段。",
  "supervisorTools": [
    {
      "title": "静默监听 (Listen)",
      "desc": "实时在线监听通话音频，用于服务质量监测与坐席合规考核。"
    },
    {
      "title": "耳语指导 (Whisper)",
      "desc": "实时向坐席单向传话指导，客户完全听不到主管的辅助声音。"
    },
    {
      "title": "强插通话 (Barge-In)",
      "desc": "遇到疑难纠纷或重大商务谈判时，主管直接加入通话参与三方沟通。"
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "当前通话数",
    "stat2": "86%",
    "stat2Sub": "接通率 (ASR)",
    "title": "车间实时运营大屏",
    "desc": "支持在大屏幕显示器上投屏展示呼叫中心核心 KPI 指标。"
  },
  "dialingModesBadge": "更智能的外呼策略",
  "dialingModesTitle": "高级智能外呼拨号模式",
  "dialingModesSubtitle": "根据业务场景灵活选择最适合您团队的外呼调度策略。",
  "dialingModes": [
    {
      "title": "预测式外呼 (Predictive Dialer)",
      "desc": "利用算法提前并发拨打多个号码，并在客户接通瞬间自动转接至就绪坐席。",
      "flow": "多并发外呼 → 分配就绪坐席",
      "tag": "大容量规模型外呼"
    },
    {
      "title": "渐进式外呼 (Progressive Dialer)",
      "desc": "仅在坐席处于完全空闲就绪状态时，系统才自动发起下一通客户拨号。",
      "flow": "坐席空闲 → 呼叫下位客户",
      "tag": "坐席节奏受控型呼叫"
    },
    {
      "title": "强力外呼 (Power Dialer)",
      "desc": "自动按名单顺序连续快速轮转拨打，最大化坐席工作饱和度与拨打产出。",
      "flow": "名单列表 → 持续连续外呼",
      "tag": "高专注高产出模式"
    },
    {
      "title": "预览式外呼 (Preview Dialer)",
      "desc": "拨打前允许坐席完整查看客户背景资料与历史记录，充分准备后再发起通话。",
      "flow": "预览客户背景 → 手动触发呼叫",
      "tag": "高价值个性化对话"
    }
  ],
  "analyticsBadge": "呼叫分析与运营报表",
  "analyticsTitle": "将通话数据转化为更出色的业务绩效",
  "analyticsSubtitle": "全方位深入追踪外呼业务的每一个关键指标与细节。",
  "analyticsFeatures": [
    "坐席工时与工作效率表现",
    "营销外呼活动转化率评估",
    "各阶段平均通话时长统计",
    "多维度应答率与接通率分析",
    "用户呼损率与挂断放弃率",
    "成单业务转化全流程追踪",
    "通话结果标签状态聚类",
    "语音通信路由性能与质量",
    "各运营商网络交付能力",
    "通信费用与单位通话成本分析",
    "按小时、天、月的周期性报表",
    "细粒度通话详单记录 (CDR)"
  ],
  "analyticsSubtext": "从单通客服沟通记录到全球运营商通信成本，全景数据尽在掌握。",
  "analyticsCard": {
    "title": "外呼活动绩效表现",
    "exportBtn": "导出报表",
    "tabHourly": "小时级",
    "tabDaily": "按日汇总",
    "tabMonthly": "按月分析",
    "timeframe": "2026年10月01日–07日",
    "stat1Label": "总呼叫数",
    "stat1Val": "1,842",
    "stat2Label": "综合接通率",
    "stat2Val": "86.2%",
    "stat3Label": "业务转化率",
    "stat3Val": "18.4%",
    "legendCalls": "总呼叫量",
    "legendAnswered": "成功应答量",
    "dispositionTitle": "通话标记分布统计",
    "note": "以上数据为演示性报表数据 • 支持一键完整导出每通呼叫背后的详尽参数。"
  },
  "ctaBadge": "携手打造您的全球通信网络",
  "ctaTitle": "借助企业级呼叫与消息方案拓展全球业务",
  "ctaSubtitle": "从智能语音路由、全球语音落地到 AI 智能语音坐席与全球虚拟 DID 号码，iNet Global 提供高弹性的通信基础设施，助力企业在全球市场上清晰、可靠、高效地连接每一位客户。",
  "getStarted": "立即开始",
  "contactUs": "联系我们",
  "ctaTrust1": "99.99% 企业级呼叫 SLA 保障",
  "ctaTrust2": "即时 WebRTC 极速开通激活",
  "ctaTrust3": "7x24x365 专业技术支持保障"
};

const hi: DailerSolutionTranslation = {
  "heroBadge": "कॉल सेंटर डायलर समाधान",
  "heroTitle": "डेस्कटॉप और मोबाइल के लिए अगली पीढ़ी का कॉल सेंटर डायलर",
  "heroDesc": "एक शक्तिशाली कॉलिंग प्लेटफॉर्म के माध्यम से अपने एजेंटों, ग्राहकों और वैश्विक मार्गों को कनेक्ट करें। उन्नत रूटिंग, निगरानी, विश्लेषण और वास्तविक समय नियंत्रण के साथ आउटबाउंड कॉलिंग प्रबंधित करने के लिए हमारे ब्राउज़र-आधारित डेस्कटॉप डायलर या मोबाइल डायलर का उपयोग करें।",
  "requestDemo": "डेमो का अनुरोध करें",
  "exploreDialer": "डायलर एक्सप्लोर करें",
  "heroFootnote": "एक कनेक्टेड वर्कस्पेस। पहली कॉल से लेकर अंतिम रिपोर्ट तक।",
  "heroMockup": {
    "title": "iNet डायलर",
    "agentStatus": "एजेंट उपलब्ध है",
    "campaign": "ग्राहक फॉलो-अप",
    "campaignMeta": "प्रोग्रेसिव अभियान • आज",
    "contactsCount": "128 संपर्क",
    "connectedBadge": "कनेक्टेड - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "कॉल समाप्त करें",
    "tabContact": "संपर्क",
    "tabHistory": "इतिहास",
    "tabNotes": "नोट्स",
    "customerDetailsTitle": "ग्राहक विवरण",
    "companyLabel": "कंपनी",
    "companyVal": "Lawson & Co.",
    "emailLabel": "ईमेल",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "पिछला संपर्क",
    "lastContactVal": "07 अक्टूबर 2026",
    "dispositionLabel": "कॉल परिणाम",
    "dispositionVal": "फॉलो-अप निर्धारित",
    "recordingText": "रिकॉर्डिंग जारी है",
    "stat1Label": "आज की कॉल",
    "stat1Val": "46",
    "stat2Label": "कनेक्टेड",
    "stat2Val": "38",
    "stat3Label": "बातचीत का समय",
    "stat3Val": "02घंटे 18मिनट",
    "floatBadgeTitle": "सही रूट। हर कॉल।",
    "floatBadgeDesc": "यूके · कैरियर A · गुणवत्ता 98.6%"
  },
  "highlights": [
    {
      "title": "ब्राउज़र-आधारित डायलर"
    },
    {
      "title": "मोबाइल डायलर"
    },
    {
      "title": "A–Z ग्लोबल रूट्स"
    },
    {
      "title": "प्रेडिक्टिव और प्रोग्रेसिव डायलिंग"
    },
    {
      "title": "लाइव कॉल निगरानी"
    },
    {
      "title": "रीयल-टाइम एनालिटिक्स"
    }
  ],
  "desktopBadge": "डेस्कटॉप ब्राउज़र डायलर",
  "desktopTitle": "किसी भी कंप्यूटर को पेशेवर कॉल सेंटर में बदलें",
  "desktopSubtitle": "कोई जटिल डेस्कटॉप इंस्टॉलेशन नहीं। एजेंट अपने ब्राउज़र से सुरक्षित रूप से लॉग इन कर सकते हैं और तुरंत कॉल करना शुरू कर सकते हैं।",
  "desktopFootnote": "आपका ब्राउज़र ही आपका वर्कस्पेस है। सुरक्षित एजेंट पहुंच। कोई जटिल इंस्टॉलेशन नहीं।",
  "desktopFeaturesTitle": "विशेषताएं",
  "desktopFeatures": [
    "WebRTC ब्राउज़र कॉलिंग",
    "एजेंट लॉगिन और प्रबंधन",
    "क्लिक-टू-कॉल",
    "संपर्क प्रबंधन",
    "कॉल इतिहास",
    "कॉल रिकॉर्डिंग",
    "कॉल ट्रांसफर",
    "होल्ड और म्यूट",
    "कॉल परिणाम (Disposition) प्रबंधन",
    "एजेंट स्थिति ट्रैकिंग",
    "रीयल-टाइम कॉल सांख्यिकी"
  ],
  "desktopMainHeading": "एक डायलर। हर कॉलिंग आवश्यकता।",
  "desktopWorkspaceTitle": "आपका ब्राउज़र ही आपका वर्कस्पेस है।",
  "desktopWorkspaceSubtitle": "सुरक्षित एजेंट पहुंच। कोई जटिल इंस्टॉलेशन नहीं।",
  "mobileBadge": "मोबाइल डायलर",
  "mobileTitle": "अपने कॉलिंग ऑपरेशन को कहीं भी ले जाएं",
  "mobileSubtitle": "रिमोट और फील्ड एजेंटों को आपके व्यावसायिक बुनियादी ढांचे तक सीधी पहुंच के साथ एक पेशेवर मोबाइल कॉलिंग अनुभव प्रदान करें।",
  "mobileFootnote": "आपका व्यावसायिक नंबर। काम आपको जहां भी ले जाए।",
  "mobileFeaturesTitle": "मोबाइल सुविधाएं",
  "mobileFeatures": [
    "Android और iOS संगत आर्किटेक्चर",
    "SIP / WebRTC कॉलिंग",
    "संपर्क सिंक्रोनाइज़ेशन",
    "कॉल इतिहास",
    "क्लिक-टू-कॉल",
    "कॉलर आईडी प्रबंधन",
    "कॉल रिकॉर्डिंग",
    "एजेंट उपलब्धता स्थिति",
    "पुश सूचनाएं",
    "सुरक्षित प्रमाणीकरण"
  ],
  "mobileSyncCard": {
    "title": "संपर्क, हमेशा सिंक में।",
    "desc": "आपके ग्राहक और कॉल इतिहास हमेशा आपके साथ।",
    "badge": "अभी-अभी सिंक हुआ"
  },
  "mobileDialerMockup": {
    "title": "iNet डायलर",
    "greeting": "सुप्रभात, Alex",
    "status": "उपलब्ध",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "कॉलर आईडी: iNet बिजनेस",
    "tabDialer": "डायलर",
    "tabContacts": "संपर्क",
    "tabHistory": "इतिहास"
  },
  "routesBadge": "उन्नत A–Z ग्लोबल रूट्स",
  "routesTitle": "सही रूट के माध्यम से ग्राहकों तक पहुंचें",
  "routesSubtitle": "कई कैरियर्स और सप्लायर्स से जुड़ें और अपने वैश्विक वॉयस ट्रैफ़िक को बुद्धिमानी से प्रबंधित करें।",
  "routesFeaturesTitle": "रूट प्रबंधन",
  "routesFeatures": [
    "A–Z अंतरराष्ट्रीय गंतव्य",
    "एकाधिक कैरियर एकीकरण",
    "उपसर्ग-आधारित (Prefix) रूटिंग",
    "न्यूनतम लागत रूटिंग (LCR)",
    "गुणवत्ता-आधारित रूटिंग",
    "फेलओवर रूटिंग",
    "प्राथमिकता रूटिंग",
    "गंतव्य-आधारित रूटिंग",
    "कैरियर प्रदर्शन निगरानी",
    "रूट लागत प्रबंधन"
  ],
  "routeControlCard": {
    "title": "ग्लोबल रूट नियंत्रण",
    "badge": "रूट्स स्वस्थ हैं",
    "agentCall": "एजेंट कॉल",
    "smartRouting": "स्मार्ट रूटिंग",
    "smartRoutingDesc": "सर्वोत्तम उपलब्ध रूट",
    "carrier1": "कैरियर A · प्राथमिकता 1",
    "carrier2": "कैरियर B · प्राथमिकता 2",
    "carrier3": "कैरियर C · फेलओवर",
    "tableDest": "गंतव्य",
    "tableCarrier": "कैरियर",
    "tableQuality": "गुणवत्ता",
    "tableRate": "/ मिनट",
    "note": "उदाहरणात्मक गंतव्य, कैरियर गुणवत्ता और दरें।"
  },
  "routesEngine": {
    "title": "स्मार्ट रूटिंग इंजन",
    "desc": "गंतव्य, मूल्य, गुणवत्ता, उपलब्धता और कैरियर प्रदर्शन के आधार पर स्वचालित रूप से सर्वोत्तम मार्ग का चयन करता है।",
    "tags": [
      "गंतव्य",
      "मूल्य",
      "गुणवत्ता",
      "उपलब्धता",
      "कैरियर प्रदर्शन"
    ]
  },
  "monitoringBadge": "उन्नत कॉल सेंटर निगरानी",
  "monitoringTitle": "आपके कॉल सेंटर में पूर्ण दृश्यता",
  "monitoringSubtitle": "एक केंद्रीकृत डैशबोर्ड से अपने संपूर्ण संचालन की निगरानी करें।",
  "monitoringLiveHeader": "लाइव निगरानी",
  "monitoringLiveSub": "देखें कि अभी क्या हो रहा है।",
  "monitoringKpis": [
    {
      "label": "सक्रिय कॉल",
      "value": "128"
    },
    {
      "label": "प्रतीक्षारत कॉल",
      "value": "12"
    },
    {
      "label": "उपलब्ध एजेंट",
      "value": "36"
    },
    {
      "label": "व्यस्त एजेंट",
      "value": "64"
    },
    {
      "label": "एजेंट स्थिति",
      "value": "लाइव"
    },
    {
      "label": "कॉल प्रति सेकंड",
      "value": "8.4"
    },
    {
      "label": "उत्तर दर (Answer rate)",
      "value": "86.2%"
    },
    {
      "label": "औसत कॉल अवधि",
      "value": "04:32"
    },
    {
      "label": "समवर्ती कॉल",
      "value": "140"
    },
    {
      "label": "विफल कॉल",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "कॉल सेंटर अवलोकन",
    "updateMeta": "सभी अभियान • 08 अक्टूबर 2026",
    "note": "उदाहरणात्मक लाइव डैशबोर्ड • एक ही वर्कस्पेस से एजेंटों, कतारों और कॉल गुणवत्ता की निगरानी करें।",
    "cols": {
      "agent": "एजेंट",
      "campaign": "अभियान",
      "status": "स्थिति",
      "duration": "अवधि",
      "destination": "गंतव्य",
      "supervisor": "सुपरवाइजर"
    }
  },
  "supervisorToolsTitle": "सुपरवाइजर टूल्स",
  "supervisorToolsSubtitle": "प्रबंधकों को एजेंट के प्रदर्शन पर पूर्ण नियंत्रण दें।",
  "supervisorTools": [
    {
      "title": "सुनें (Listen)",
      "desc": "गुणवत्ता आश्वासन के लिए लाइव कॉल की निगरानी करें।"
    },
    {
      "title": "फुसफुसाएं (Whisper)",
      "desc": "ग्राहक को सुनाई दिए बिना एजेंट का मार्गदर्शन करें।"
    },
    {
      "title": "दखल दें (Barge-In)",
      "desc": "हस्तक्षेप की आवश्यकता होने पर सक्रिय बातचीत में शामिल हों।"
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "कॉल",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "रीयल-टाइम वॉल Samarth",
    "desc": "बड़ी स्क्रीन पर लाइव कॉल सेंटर के प्रमुख प्रदर्शन संकेतक (KPI) प्रदर्शित करें।"
  },
  "dialingModesBadge": "अधिक स्मार्ट आउटबाउंड कॉलिंग",
  "dialingModesTitle": "उन्नत डायलिंग मोड",
  "dialingModesSubtitle": "वह डायलिंग रणनीति चुनें जो आपके संचालन के अनुकूल हो।",
  "dialingModes": [
    {
      "title": "प्रेडिक्टिव डायलर",
      "desc": "स्वचालित रूप से कई नंबरों पर कॉल करता है और उत्तर दी गई कॉल को उपलब्ध एजेंटों से जोड़ता है।",
      "flow": "एकाधिक कॉल → उपलब्ध एजेंट",
      "tag": "उच्च-मात्रा आउटरीच"
    },
    {
      "title": "प्रोग्रेसिव डायलर",
      "desc": "केवल तभी अगले ग्राहक को कॉल करता है जब कोई एजेंट उपलब्ध हो जाता है।",
      "flow": "उपलब्ध एजेंट → अगला ग्राहक",
      "tag": "एजेंट-गति कॉलिंग"
    },
    {
      "title": "पावर डायलर",
      "desc": "एजेंट की उत्पादकता को अधिकतम करने के लिए संपर्क सूचियों में स्वचालित रूप से आगे बढ़ता है।",
      "flow": "संपर्क सूची → निरंतर कॉलिंग",
      "tag": "केंद्रित उत्पादकता"
    },
    {
      "title": "पूर्वावलोकन (Preview) डायलर",
      "desc": "एजेंटों को कॉल शुरू करने से पहले ग्राहक की जानकारी की समीक्षा करने की अनुमति देता है।",
      "flow": "ग्राहक समीक्षा → कॉल शुरू",
      "tag": "व्यक्तिगत बातचीत"
    }
  ],
  "analyticsBadge": "कॉल एनालिटिक्स और रिपोर्ट",
  "analyticsTitle": "कॉल डेटा को बेहतर प्रदर्शन में बदलें",
  "analyticsSubtitle": "अपने कॉलिंग ऑपरेशन के हर पहलू को ट्रैक करें।",
  "analyticsFeatures": [
    "एजेंट प्रदर्शन",
    "अभियान प्रदर्शन",
    "कॉल अवधि",
    "उत्तर दर",
    "कॉल परित्याग दर",
    "रूपांतरण ट्रैकिंग",
    "कॉल परिणाम स्थिति",
    "रूट प्रदर्शन",
    "कैरियर प्रदर्शन",
    "लागत विश्लेषण",
    "प्रति घंटा/दैनिक/मासिक रिपोर्ट",
    "कॉल डिटेल रिकॉर्ड्स (CDR)"
  ],
  "analyticsSubtext": "व्यक्तिगत बातचीत से लेकर वैश्विक कैरियर लागतों तक, संपूर्ण तस्वीर को सामने लाएं।",
  "analyticsCard": {
    "title": "अभियान प्रदर्शन",
    "exportBtn": "निर्यात करें",
    "tabHourly": "प्रति घंटा",
    "tabDaily": "दैनिक",
    "tabMonthly": "मासिक",
    "timeframe": "01–07 अक्टूबर 2026",
    "stat1Label": "कुल कॉल",
    "stat1Val": "1,842",
    "stat2Label": "उत्तर दर",
    "stat2Val": "86.2%",
    "stat3Label": "रूपांतरण",
    "stat3Val": "18.4%",
    "legendCalls": "कॉल",
    "legendAnswered": "उत्तर दिया",
    "dispositionTitle": "कॉल परिणाम",
    "note": "उदाहरणात्मक रिपोर्ट डेटा • हर कॉल के पीछे के विवरण को निर्यात करें।"
  },
  "ctaBadge": "आइए आपका मैसेजिंग नेटवर्क बनाएं",
  "ctaTitle": "व्यावसायिक संदेश समाधानों के साथ अपना व्यवसाय बढ़ाएं",
  "ctaSubtitle": "इंटेलिजेंट वॉयस रूटिंग और अंतरराष्ट्रीय टर्मिनेशन से लेकर एआई वॉयस और वर्चुअल नंबरों तक, iNet Global स्केलेबल संचार समाधान प्रदान करता है जो वैश्विक बाजारों में ग्राहकों से जुड़ने में मदद करते हैं।",
  "getStarted": "शुरू करें",
  "contactUs": "हमसे संपर्क करें",
  "ctaTrust1": "एंटरप्राइझ डायलर SLA",
  "ctaTrust2": "तत्काल WebRTC सक्रियण",
  "ctaTrust3": "24/7 समर्पित तकनीकी सहायता"
};

const ar: DailerSolutionTranslation = {
  "heroBadge": "حل متصل الاتصال لمركز الاتصال",
  "heroTitle": "طالب اتصال متقدم لمركز الاتصال للكمبيوتر والهاتف المحمول",
  "heroDesc": "اربط بين وكلائك وعملائك ومساراتك العالمية عبر منصة اتصال موحدة وقوية. استخدم طالب سطح المكتب المستند إلى المتصفح أو تطبيق الهاتف لإدارة المكالمات الصادرة مع توجيه ذكي ومراقبة وتحليلات وتحكم فوري.",
  "requestDemo": "طلب عرض توضيحي",
  "exploreDialer": "استكشف طالب الاتصال",
  "heroFootnote": "مساحة عمل متصلة واحدة. من المكالمة الأولى إلى التقرير النهائي.",
  "heroMockup": {
    "title": "طالب iNet",
    "agentStatus": "الوكيل متاح",
    "campaign": "متابعة العملاء",
    "campaignMeta": "حملة تصاعدية • اليوم",
    "contactsCount": "128 جهة اتصال",
    "connectedBadge": "متصل - WebRTC",
    "callerName": "جيمي لوسون",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "إنهاء المكالمة",
    "tabContact": "جهة الاتصال",
    "tabHistory": "السجل",
    "tabNotes": "ملاحظات",
    "customerDetailsTitle": "تفاصيل العميل",
    "companyLabel": "الشركة",
    "companyVal": "Lawson & Co.",
    "emailLabel": "البريد الإلكتروني",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "آخر اتصال",
    "lastContactVal": "07 أكتوبر 2026",
    "dispositionLabel": "حالة المكالمة",
    "dispositionVal": "متابعة مجدولة",
    "recordingText": "التسجيل قيد التشغيل",
    "stat1Label": "مكالمات اليوم",
    "stat1Val": "46",
    "stat2Label": "متصلة",
    "stat2Val": "38",
    "stat3Label": "مدة التحدث",
    "stat3Val": "02س 18د",
    "floatBadgeTitle": "المسار الصحيح. لكل مكالمة.",
    "floatBadgeDesc": "المملكة المتحدة · الناقل A · الجودة 98.6%"
  },
  "highlights": [
    {
      "title": "طالب اتصال عبر المتصفح"
    },
    {
      "title": "طالب اتصال للهاتف المحمول"
    },
    {
      "title": "مسارات عالمية شاملة A–Z"
    },
    {
      "title": "اتصال تنبؤي وتدريجي"
    },
    {
      "title": "مراقبة المكالمات الحية"
    },
    {
      "title": "تحليلات فورية وشاملة"
    }
  ],
  "desktopBadge": "طالب متصفح سطح المكتب",
  "desktopTitle": "حول أي جهاز كمبيوتر إلى مركز اتصال احترافي",
  "desktopSubtitle": "لا يلزم تثبيت برامج معقدة. يمكن للوكلاء تسجيل الدخول بأمان عبر المتصفح والبدء في إجراء المكالمات فوراً.",
  "desktopFootnote": "متصفحك هو بيئة عملك. وصول آمن للوكلاء وبدون تثبيت معقد.",
  "desktopFeaturesTitle": "الميزات",
  "desktopFeatures": [
    "مكالمات WebRTC عبر المتصفح",
    "تسجيل دخول وإدارة الوكلاء",
    "اتصال بنقرة واحدة (Click-to-call)",
    "إدارة جهات الاتصال",
    "سجل المكالمات",
    "تسجيل المكالمات",
    "تحويل المكالمات",
    "الانتظار وكتم الصوت",
    "إدارة حالات ونتائج المكالمات",
    "تتبع حالة الوكيل وتواجده",
    "إحصائيات الاتصال المباشرة"
  ],
  "desktopMainHeading": "طالب اتصال واحد. لجميع متطلبات الاتصال.",
  "desktopWorkspaceTitle": "متصفحك هو مساحة عملك المتكاملة.",
  "desktopWorkspaceSubtitle": "وصول آمن وسلس للوكلاء دون أي إعدادات برمجية معقدة.",
  "mobileBadge": "طالب اتصال الهاتف المحمول",
  "mobileTitle": "أدر عمليات الاتصال الخاصة بك من أي مكان",
  "mobileSubtitle": "امنح الوكلاء عن بُعد وفرق العمل الميدانية تجربة اتصال احترافية عبر الهاتف المحمول مع ربط مباشر ببنيتك التحتية للاتصالات المؤسسية.",
  "mobileFootnote": "رقم عملك التجاري. أينما كنت.",
  "mobileFeaturesTitle": "ميزات الهاتف المحمول",
  "mobileFeatures": [
    "بنية متوافقة مع Android و iOS",
    "مكالمات صوتية عبر SIP و WebRTC",
    "مزامنة فورية لجهات الاتصال",
    "سجل المكالمات الكامل",
    "الاتصال بنقرة واحدة",
    "إدارة هوية المتصل (Caller ID)",
    "تسجيل المكالمات تلقائياً",
    "إدارة حالة توفر الوكيل",
    "إشعارات فورية (Push Notifications)",
    "مصادقة وأمان مشدد"
  ],
  "mobileSyncCard": {
    "title": "جهات الاتصال متزامنة دوماً.",
    "desc": "بيانات عملائك وسجل المكالمات معك أينما تحركت.",
    "badge": "تمت المزامنة للتو"
  },
  "mobileDialerMockup": {
    "title": "طالب iNet",
    "greeting": "صباح الخير، أليكس",
    "status": "متاح",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "هوية المتصل: iNet Business",
    "tabDialer": "طالب الاتصال",
    "tabContacts": "جهات الاتصال",
    "tabHistory": "السجل"
  },
  "routesBadge": "مسارات عالمية متطورة A–Z",
  "routesTitle": "صل إلى عملائك عبر المسار الأمثل والأعلى جودة",
  "routesSubtitle": "اتصل بشركات اتصالات ومزودين متعددين وأدر حركة المكالمات الصوتية العالمية بذكاء وكفاءة عالية.",
  "routesFeaturesTitle": "إدارة المسارات",
  "routesFeatures": [
    "وجهات دولية شاملة A–Z",
    "دمج مباشر مع ناقلين متعددين",
    "توجيه يعتمد على رمز الاتصال (Prefix)",
    "توجيه بأقل تكلفة (LCR)",
    "توجيه يضمن أعلى جودة صوت",
    "توجيه احتياطي وتجاوز الأعطال (Failover)",
    "توجيه قائم على الأولوية",
    "توجيه حسب وجهة الاتصال",
    "مراقبة أداء وجودة المشغلين",
    "إدارة تكاليف وتسعير المسارات"
  ],
  "routeControlCard": {
    "title": "التحكم في المسارات العالمية",
    "badge": "المسارات تعمل بكفاءة",
    "agentCall": "مكالمة وكيل",
    "smartRouting": "توجيه ذكي",
    "smartRoutingDesc": "أفضل مسار متاح",
    "carrier1": "الناقل A · أولوية 1",
    "carrier2": "الناقل B · أولوية 2",
    "carrier3": "الناقل C · احتياطي",
    "tableDest": "الوجهة",
    "tableCarrier": "الناقل",
    "tableQuality": "الجودة",
    "tableRate": "/ دقيقة",
    "note": "وجهات ونسب جودة وأسعار توضيحية."
  },
  "routesEngine": {
    "title": "محرك التوجيه الذكي",
    "desc": "تحديد أفضل مسار تلقائياً بناءً على الوجهة والسعر وجودة الصوت والتوافر وأداء الناقل.",
    "tags": [
      "الوجهة",
      "السعر",
      "الجودة",
      "التوافر",
      "أداء الناقل"
    ]
  },
  "monitoringBadge": "مراقبة متقدمة لمركز الاتصال",
  "monitoringTitle": "رؤية شاملة ومباشرة لمركز الاتصال الخاص بك",
  "monitoringSubtitle": "راقب وأدر كامل عمليات الاتصال وفريق العمل من لوحة تحكم مركزية واحدة.",
  "monitoringLiveHeader": "المراقبة الحية",
  "monitoringLiveSub": "شاهد ما يحدث الآن في الوقت الفعلي.",
  "monitoringKpis": [
    {
      "label": "مكالمات نشطة",
      "value": "128"
    },
    {
      "label": "مكالمات قيد الانتظار",
      "value": "12"
    },
    {
      "label": "وكلاء متاحون",
      "value": "36"
    },
    {
      "label": "وكلاء مشغولون",
      "value": "64"
    },
    {
      "label": "حالة الوكيل",
      "value": "مباشر"
    },
    {
      "label": "مكالمات بالثانية",
      "value": "8.4"
    },
    {
      "label": "معدل الرد",
      "value": "86.2%"
    },
    {
      "label": "متوسط مدة المكالمة",
      "value": "04:32"
    },
    {
      "label": "مكالمات متزامنة",
      "value": "140"
    },
    {
      "label": "مكالمات فاشلة",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "نظرة عامة على مركز الاتصال",
    "updateMeta": "جميع الحملات • 08 أكتوبر 2026",
    "note": "لوحة متابعة توضيحية مباشرة • مراقبة الوكلاء وطوابير الانتظار وجودة الصوت من شاشة واحدة.",
    "cols": {
      "agent": "الوكيل",
      "campaign": "الحملة",
      "status": "الحالة",
      "duration": "المدة",
      "destination": "الوجهة",
      "supervisor": "المشرف"
    }
  },
  "supervisorToolsTitle": "أدوات المشرف والرقابة",
  "supervisorToolsSubtitle": "امنح المديرين تحكماً كاملاً لرفع جودة وأداء الوكلاء.",
  "supervisorTools": [
    {
      "title": "استماع (Listen)",
      "desc": "مراقبة المكالمات الجارية لضمان ومراقبة الجودة دون إشعار المتصلين."
    },
    {
      "title": "همس (Whisper)",
      "desc": "توجيه وتدريب الوكيل أثناء المكالمة دون أن يسمع العميل صوت المشرف."
    },
    {
      "title": "اقتحام (Barge-In)",
      "desc": "الانضمام المباشر للمحادثة الجارية وتحويلها لمكالمة ثلاثية عند الحاجة للتدخل."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "مكالمات",
    "stat2": "86%",
    "stat2Sub": "معدل الرد (ASR)",
    "title": "لوحة جدارية فورية (Wallboard)",
    "desc": "عرض مؤشرات الأداء الحية لمركز الاتصال على شاشات العرض الكبيرة."
  },
  "dialingModesBadge": "اتصال صادر أذكى وأعلى إنتاجية",
  "dialingModesTitle": "أوضاع اتصال متقدمة",
  "dialingModesSubtitle": "اختر استراتيجية الاتصال المناسبة لطبيعة عملياتك التجارية.",
  "dialingModes": [
    {
      "title": "طالب تنبؤي (Predictive Dialer)",
      "desc": "يتصل تلقائياً بأرقام متعددة في نفس الوقت ويربط المكالمات المجابة فوراً بالوكلاء المتاحين.",
      "flow": "مكالمات متعددة ← وكيل متاح",
      "tag": "حملات ذات وتيرة ضخمة"
    },
    {
      "title": "طالب تصاعدي (Progressive Dialer)",
      "desc": "يتصل بالعميل التالي فقط عندما يصبح الوكيل جاهزاً ومتاحاً لاستقبال المكالمة.",
      "flow": "وكيل متاح ← العميل التالي",
      "tag": "اتصال بوتيرة الوكيل"
    },
    {
      "title": "طالب الطاقة (Power Dialer)",
      "desc": "يتنقل تلقائياً عبر قوائم جهات الاتصال تباعاً لتعظيم إنتاجية الوكيل وتقليل فترات الانتظار.",
      "flow": "قائمة الاتصال ← اتصال متواصل",
      "tag": "إنتاجية موجهة ومكثفة"
    },
    {
      "title": "طالب المعاينة (Preview Dialer)",
      "desc": "يتيح للوكيل مراجعة بيانات العميل وسجل تعاملاته قبل بدء المكالمة.",
      "flow": "مراجعة العميل ← بدء المكالمة",
      "tag": "محادثات مخصصة ودقيقة"
    }
  ],
  "analyticsBadge": "تحليلات وتقارير الاتصال",
  "analyticsTitle": "حول بيانات المكالمات إلى أداء مبيعات وخدمة أعلى",
  "analyticsSubtitle": "تتبع كل تفاصيل حملات وعمليات الاتصال الصادرة والواردة.",
  "analyticsFeatures": [
    "أداء الوكلاء الفردي والجماعي",
    "أداء الحملات الإعلانية والمبيعات",
    "مدة المكالمات ومتوسط وقت الحديث",
    "معدل الرد والاتصال الناجح",
    "معدل التخلي وانقطاع المكالمات",
    "تتبع التحويلات وإتمام الصفقات",
    "حالات ونتائج المكالمات (Dispositions)",
    "أداء وجودة مسارات الاتصال",
    "تقييم أداء مزودي الخدمة والناقلين",
    "تحليل مفصل للتكاليف والأرباح",
    "تقارير ساعية ويومية وشهرية",
    "سجلات تفصيل المكالمات الكاملة (CDR)"
  ],
  "analyticsSubtext": "من المحادثات الفردية إلى تكاليف شبكات الاتصال العالمية، رؤية كاملة وتحكم شفاف.",
  "analyticsCard": {
    "title": "أداء الحملة",
    "exportBtn": "تصدير",
    "tabHourly": "ساعي",
    "tabDaily": "يومي",
    "tabMonthly": "شهري",
    "timeframe": "01–07 أكتوبر 2026",
    "stat1Label": "إجمالي المكالمات",
    "stat1Val": "1,842",
    "stat2Label": "معدل الرد",
    "stat2Val": "86.2%",
    "stat3Label": "معدل التحويل",
    "stat3Val": "18.4%",
    "legendCalls": "المكالمات",
    "legendAnswered": "تم الرد عليها",
    "dispositionTitle": "نتائج المكالمات",
    "note": "بيانات تقارير توضيحية • تصدير التفاصيل الدقيقة لكل مكالمة."
  },
  "ctaBadge": "دعنا نبني شبكة اتصالاتك المؤسسية",
  "ctaTitle": "طور أعمالك مع حلول الرسائل والمكالمات المتطورة",
  "ctaSubtitle": "من التوجيه الصوتي الذكي والإنهاء الدولي إلى الصوت المعتمد على الذكاء الاصطناعي والأرقام الافتراضية، توفر iNet Global حلول اتصالات قابلة للتوسع تساعد الشركات على التواصل مع العملاء بوضوح وموثوقية وكفاءة عبر الأسواق العالمية.",
  "getStarted": "ابدأ الآن",
  "contactUs": "اتصل بنا",
  "ctaTrust1": "اتفاقية مستوى الخدمة لمشغلي الأعمال",
  "ctaTrust2": "تفعيل فوري بتقنية WebRTC",
  "ctaTrust3": "دعم فني مخصص على مدار الساعة"
};

const fr: DailerSolutionTranslation = {
  "heroBadge": "SOLUTION DE COMPOSEUR POUR CENTRE D'APPELS",
  "heroTitle": "Composeur de Centre d'Appels Nouvelle Génération pour Ordinateur et Mobile",
  "heroDesc": "Connectez vos agents, vos clients et vos routes mondiales via une plateforme d'appel unifiée et performante. Utilisez notre composeur Web pour ordinateur ou notre composeur mobile pour gérer vos appels sortants avec routage intelligent, supervision en direct, analyses et contrôle en temps réel.",
  "requestDemo": "Demander une démo",
  "exploreDialer": "Explorer le composeur",
  "heroFootnote": "Un espace de travail connecté. Du premier appel au rapport final.",
  "heroMockup": {
    "title": "Composeur iNet",
    "agentStatus": "Agent disponible",
    "campaign": "Suivi clientèle",
    "campaignMeta": "Campagne progressive • Aujourd'hui",
    "contactsCount": "128 contacts",
    "connectedBadge": "Connecté - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Raccrocher",
    "tabContact": "Contact",
    "tabHistory": "Historique",
    "tabNotes": "Notes",
    "customerDetailsTitle": "DÉTAILS DU CLIENT",
    "companyLabel": "Entreprise",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Dernier contact",
    "lastContactVal": "07 oct. 2026",
    "dispositionLabel": "QUALIFICATION DE L'APPEL",
    "dispositionVal": "Rappel planifié",
    "recordingText": "Enregistrement en cours",
    "stat1Label": "Appels du jour",
    "stat1Val": "46",
    "stat2Label": "Connectés",
    "stat2Val": "38",
    "stat3Label": "Temps d'échange",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "La bonne route. Chaque appel.",
    "floatBadgeDesc": "Royaume-Uni · Opérateur A · Qualité 98,6%"
  },
  "highlights": [
    {
      "title": "Composeur Web sur navigateur"
    },
    {
      "title": "Composeur mobile"
    },
    {
      "title": "Routes mondiales A–Z"
    },
    {
      "title": "Numérotation prédictive et progressive"
    },
    {
      "title": "Supervision des appels en direct"
    },
    {
      "title": "Analytique et rapports en temps réel"
    }
  ],
  "desktopBadge": "Composeur Web pour Ordinateur",
  "desktopTitle": "Transformez n'importe quel ordinateur en centre d'appels professionnel",
  "desktopSubtitle": "Aucune installation logicielle complexe. Vos agents se connectent en toute sécurité via leur navigateur et démarrent leurs appels instantanément.",
  "desktopFootnote": "Votre navigateur est votre espace de travail. Accès agent sécurisé sans installation compliquée.",
  "desktopFeaturesTitle": "Fonctionnalités",
  "desktopFeatures": [
    "Appels WebRTC via navigateur",
    "Connexion et gestion des agents",
    "Appel en un clic (Click-to-call)",
    "Gestion des contacts",
    "Historique des appels",
    "Enregistrement des appels",
    "Transfert d'appels",
    "Mise en attente et sourdine",
    "Gestion des qualifications (Dispositions)",
    "Suivi des statuts des agents",
    "Statistiques d'appels en direct"
  ],
  "desktopMainHeading": "Un seul composeur. Toutes vos exigences d'appel.",
  "desktopWorkspaceTitle": "Votre navigateur est votre espace de travail.",
  "desktopWorkspaceSubtitle": "Accès agent sécurisé. Aucune installation complexe.",
  "mobileBadge": "Composeur Mobile",
  "mobileTitle": "Gérez vos opérations d'appel où que vous soyez",
  "mobileSubtitle": "Offrez à vos agents à distance et sur le terrain une expérience d'appel mobile professionnelle connectée à votre infrastructure télécom d'entreprise.",
  "mobileFootnote": "Votre numéro d'entreprise. Partout où le travail vous mène.",
  "mobileFeaturesTitle": "Fonctionnalités Mobiles",
  "mobileFeatures": [
    "Architecture compatible Android et iOS",
    "Appels SIP et WebRTC haute fidélité",
    "Synchronisation instantanée des contacts",
    "Historique complet des appels",
    "Fonction Click-to-call",
    "Gestion de l'identifiant de l'appelant (Caller ID)",
    "Enregistrement des appels",
    "Gestion de la disponibilité des agents",
    "Notifications push instantanées",
    "Authentification sécurisée"
  ],
  "mobileSyncCard": {
    "title": "Contacts synchronisés.",
    "desc": "Vos clients et l'historique de vos appels toujours avec vous.",
    "badge": "Synchronisé à l'instant"
  },
  "mobileDialerMockup": {
    "title": "Composeur iNet",
    "greeting": "Bonjour, Alex",
    "status": "Disponible",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Numéro sortant : iNet Business",
    "tabDialer": "Composeur",
    "tabContacts": "Contacts",
    "tabHistory": "Historique"
  },
  "routesBadge": "Routes Mondiales Avancées A–Z",
  "routesTitle": "Joignez vos clients par la route optimale",
  "routesSubtitle": "Connectez-vous à de multiples opérateurs et fournisseurs pour gérer intelligemment votre trafic voix international.",
  "routesFeaturesTitle": "Gestion des Routes",
  "routesFeatures": [
    "Destinations internationales A–Z",
    "Intégration multi-opérateurs",
    "Routage par préfixe téléphonique",
    "Routage au moindre coût (LCR)",
    "Routage basé sur la qualité sonore",
    "Routage de basculement de secours (Failover)",
    "Routage par priorités",
    "Routage par destination",
    "Suivi des performances des opérateurs",
    "Contrôle et gestion des coûts d'acheminement"
  ],
  "routeControlCard": {
    "title": "Contrôle des routes mondiales",
    "badge": "Routes stables",
    "agentCall": "Appel agent",
    "smartRouting": "Routage intelligent",
    "smartRoutingDesc": "Meilleure route disponible",
    "carrier1": "Opérateur A · Priorité 1",
    "carrier2": "Opérateur B · Priorité 2",
    "carrier3": "Opérateur C · Secours",
    "tableDest": "Destination",
    "tableCarrier": "Opérateur",
    "tableQuality": "Qualité",
    "tableRate": "/ min",
    "note": "Destinations, qualité opérateur et tarifs à titre illustratif."
  },
  "routesEngine": {
    "title": "Moteur de Routage Intelligent",
    "desc": "Sélectionnez automatiquement le meilleur itinéraire selon la destination, le tarif, la qualité, la disponibilité et les performances réseau de l'opérateur.",
    "tags": [
      "Destination",
      "Tarif",
      "Qualité",
      "Disponibilité",
      "Performance opérateur"
    ]
  },
  "monitoringBadge": "Supervision Avancée de Centre d'Appels",
  "monitoringTitle": "Visibilité Totale sur Votre Centre d'Appels",
  "monitoringSubtitle": "Supervisez l'ensemble de vos opérations à partir d'un tableau de bord unifié.",
  "monitoringLiveHeader": "Supervision en direct",
  "monitoringLiveSub": "Visualisez l'activité en temps réel.",
  "monitoringKpis": [
    {
      "label": "Appels actifs",
      "value": "128"
    },
    {
      "label": "Appels en attente",
      "value": "12"
    },
    {
      "label": "Agents disponibles",
      "value": "36"
    },
    {
      "label": "Agents occupés",
      "value": "64"
    },
    {
      "label": "Statut agent",
      "value": "En direct"
    },
    {
      "label": "Appels par seconde",
      "value": "8,4"
    },
    {
      "label": "Taux de décroché",
      "value": "86,2%"
    },
    {
      "label": "Durée moyenne d'appel",
      "value": "04:32"
    },
    {
      "label": "Appels simultanés",
      "value": "140"
    },
    {
      "label": "Appels échoués",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Aperçu du centre d'appels",
    "updateMeta": "Toutes les campagnes • 08 oct. 2026",
    "note": "Tableau de bord illustratif en direct • Supervisez agents, files d'attente et qualité sonore depuis un espace unique.",
    "cols": {
      "agent": "Agent",
      "campaign": "Campagne",
      "status": "Statut",
      "duration": "Durée",
      "destination": "Destination",
      "supervisor": "Superviseur"
    }
  },
  "supervisorToolsTitle": "Outils de Supervision",
  "supervisorToolsSubtitle": "Donnez aux managers un contrôle complet sur la performance et le coaching des agents.",
  "supervisorTools": [
    {
      "title": "Écoute discrète",
      "desc": "Supervisez les appels en direct pour l'assurance qualité en toute transparence."
    },
    {
      "title": "Chuchotement (Whisper)",
      "desc": "Guidez l'agent en direct sans que le client n'entende la voix du superviseur."
    },
    {
      "title": "Intervention (Barge-In)",
      "desc": "Rejoignez une conversation active dès qu'une intervention d'urgence est nécessaire."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Appels",
    "stat2": "86%",
    "stat2Sub": "Taux de réponse",
    "title": "Wallboard Temps Réel",
    "desc": "Affichez les indicateurs clés de votre centre d'appels sur grands écrans."
  },
  "dialingModesBadge": "Appels sortants intelligents",
  "dialingModesTitle": "Modes de Numérotation Avancés",
  "dialingModesSubtitle": "Choisissez la stratégie de numérotation adaptée à votre flux de travail.",
  "dialingModes": [
    {
      "title": "Composeur Prédictif",
      "desc": "Compose automatiquement plusieurs numéros et relie instantanément les appels répondus aux agents disponibles.",
      "flow": "Appels multiples → Agent disponible",
      "tag": "PROSPECTION À FORT VOLUME"
    },
    {
      "title": "Composeur Progressif",
      "desc": "Compose le numéro suivant uniquement lorsqu'un agent se libère et est prêt.",
      "flow": "Agent disponible → Client suivant",
      "tag": "NUMÉROTATION AU RYTHME DE L'AGENT"
    },
    {
      "title": "Power Dialer",
      "desc": "Enchaîne automatiquement les contacts de la liste pour maximiser la productivité de chaque agent.",
      "flow": "Liste de contacts → Appels continus",
      "tag": "PRODUCTIVITÉ MAXIMISÉE"
    },
    {
      "title": "Composeur Prévisuel (Preview)",
      "desc": "Permet aux agents d'examiner le dossier client avant de lancer l'appel téléphonique.",
      "flow": "Examen du client → Lancement d'appel",
      "tag": "CONVERSATIONS PERSONNALISÉES"
    }
  ],
  "analyticsBadge": "Analyses & Rapports d'Appels",
  "analyticsTitle": "Transformez les Données d'Appels en Performances",
  "analyticsSubtitle": "Suivez chaque dimension de vos opérations d'appel en temps réel.",
  "analyticsFeatures": [
    "Performance des agents",
    "Performance des campagnes",
    "Durée des appels",
    "Taux de décroché (ASR)",
    "Taux d'abandon",
    "Suivi des conversions",
    "Qualifications d'appels (Dispositions)",
    "Performance des routes",
    "Performance des opérateurs",
    "Analyse détaillée des coûts",
    "Rapports horaires, quotidiens et mensuels",
    "Détail des enregistrements d'appels (CDR)"
  ],
  "analyticsSubtext": "Des conversations individuelles aux coûts des opérateurs mondiaux, bénéficiez d'une vision limpide et exhaustive.",
  "analyticsCard": {
    "title": "Performance de la campagne",
    "exportBtn": "Exporter",
    "tabHourly": "Horaire",
    "tabDaily": "Quotidien",
    "tabMonthly": "Mensuel",
    "timeframe": "01–07 oct. 2026",
    "stat1Label": "Total des appels",
    "stat1Val": "1 842",
    "stat2Label": "Taux de décroché",
    "stat2Val": "86,2%",
    "stat3Label": "Conversions",
    "stat3Val": "18,4%",
    "legendCalls": "Appels",
    "legendAnswered": "Répondus",
    "dispositionTitle": "Qualification des appels",
    "note": "Données de rapport illustratives • Exportez le détail derrière chaque appel."
  },
  "ctaBadge": "CONSTRUISONS VOTRE RÉSEAU DE MESSAGERIE",
  "ctaTitle": "Développez Votre Entreprise grâce aux Solutions SMS Professionnelles",
  "ctaSubtitle": "Du routage vocal intelligent et de la terminaison internationale à l'IA Vocale et aux numéros virtuels, iNet Global fournit des solutions de communication évolutives qui permettent aux entreprises de communiquer clairement, de manière fiable et efficace à l'échelle mondiale.",
  "getStarted": "Commencer",
  "contactUs": "Contactez-nous",
  "ctaTrust1": "SLA Composeur Entreprise",
  "ctaTrust2": "Activation WebRTC Instantanée",
  "ctaTrust3": "Support Dédié 24/7"
};

const de: DailerSolutionTranslation = {
  "heroBadge": "CALL-CENTER-DIALER-LÖSUNG",
  "heroTitle": "Call-Center-Dialer der nächsten Generation für Desktop & Mobile",
  "heroDesc": "Verbinden Sie Ihre Agenten, Kunden und globalen Routen über eine leistungsstarke Anrufplattform. Nutzen Sie unseren browserbasierten Desktop-Dialer oder mobilen Dialer für ausgehende Telefonie mit modernem Routing, Live-Überwachung, Analysen und Echtzeitsteuerung.",
  "requestDemo": "Demo anfordern",
  "exploreDialer": "Dialer entdecken",
  "heroFootnote": "Ein vernetzter Arbeitsbereich. Vom ersten Anruf bis zum fertigen Bericht.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Agent verfügbar",
    "campaign": "Kunden-Nachverfolgung",
    "campaignMeta": "Progressive Kampagne • Heute",
    "contactsCount": "128 Kontakte",
    "connectedBadge": "Verbunden - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Anruf beenden",
    "tabContact": "Kontakt",
    "tabHistory": "Verlauf",
    "tabNotes": "Notizen",
    "customerDetailsTitle": "KUNDENDETAILS",
    "companyLabel": "Unternehmen",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-Mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Letzter Kontakt",
    "lastContactVal": "07. Okt. 2026",
    "dispositionLabel": "ANRUFERGEBNIS",
    "dispositionVal": "Wiedervorlage geplant",
    "recordingText": "Aufzeichnung läuft",
    "stat1Label": "Anrufe heute",
    "stat1Val": "46",
    "stat2Label": "Verbunden",
    "stat2Val": "38",
    "stat3Label": "Gesprächszeit",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "Die richtige Route. Bei jedem Anruf.",
    "floatBadgeDesc": "UK · Carrier A · Qualität 98,6%"
  },
  "highlights": [
    {
      "title": "Browserbasierter Dialer"
    },
    {
      "title": "Mobiler Dialer"
    },
    {
      "title": "A–Z globale Routen"
    },
    {
      "title": "Prädiktives & progressives Wählen"
    },
    {
      "title": "Live-Anrufüberwachung"
    },
    {
      "title": "Echtzeit-Analysen"
    }
  ],
  "desktopBadge": "Desktop-Browser-Dialer",
  "desktopTitle": "Verwandeln Sie jeden Computer in ein professionelles Callcenter",
  "desktopSubtitle": "Keine komplizierte Desktop-Installation. Agenten melden sich sicher über ihren Browser an und können sofort Anrufe tätigen.",
  "desktopFootnote": "Ihr Browser ist Ihr Arbeitsbereich. Sicherer Agentenzugriff ohne komplizierte Installation.",
  "desktopFeaturesTitle": "Funktionen",
  "desktopFeatures": [
    "WebRTC-Browsertelefonie",
    "Agenten-Login & Verwaltung",
    "Click-to-Call",
    "Kontaktverwaltung",
    "Anrufhistorie",
    "Anrufaufzeichnung",
    "Anrufweiterleitung",
    "Halten & Stummschalten",
    "Ergebnisverwaltung (Dispositions)",
    "Agenten-Statusverfolgung",
    "Echtzeit-Anrufstatistiken"
  ],
  "desktopMainHeading": "Ein Dialer. Für jede Telefonieanforderung.",
  "desktopWorkspaceTitle": "Ihr Browser ist Ihr Arbeitsbereich.",
  "desktopWorkspaceSubtitle": "Sicherer Agentenzugriff. Keine komplizierte Installation.",
  "mobileBadge": "Mobiler Dialer",
  "mobileTitle": "Nehmen Sie Ihre Telefonie überallhin mit",
  "mobileSubtitle": "Bieten Sie Remote- und Außendienstmitarbeitern ein professionelles mobiles Anruferlebnis mit direktem Zugriff auf Ihre Unternehmenstelefonie.",
  "mobileFootnote": "Ihre geschäftliche Rufnummer. Wo auch immer Sie arbeiten.",
  "mobileFeaturesTitle": "Mobile Funktionen",
  "mobileFeatures": [
    "Kompatibel mit Android und iOS",
    "SIP- und WebRTC-Telefonie",
    "Kontaktsynchronisation",
    "Anrufverlauf",
    "Click-to-Call",
    "Caller-ID-Verwaltung",
    "Anrufaufzeichnung",
    "Agenten-Verfügbarkeitsstatus",
    "Push-Benachrichtigungen",
    "Sichere Authentifizierung"
  ],
  "mobileSyncCard": {
    "title": "Kontakte stets synchron.",
    "desc": "Ihre Kunden und Ihre Anrufhistorie immer griffbereit.",
    "badge": "Gerade synchronisiert"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Guten Morgen, Alex",
    "status": "Verfügbar",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Absender: iNet Business",
    "tabDialer": "Dialer",
    "tabContacts": "Kontakte",
    "tabHistory": "Verlauf"
  },
  "routesBadge": "Moderne A–Z Globale Routen",
  "routesTitle": "Erreichen Sie Kunden über die optimale Route",
  "routesSubtitle": "Verbinden Sie sich mit mehreren Carriern und verwalten Sie Ihren weltweiten Sprachverkehr intelligent und zuverlässig.",
  "routesFeaturesTitle": "Routen-Management",
  "routesFeatures": [
    "A–Z internationale Destinationen",
    "Multi-Carrier-Integration",
    "Präfixbasiertes Routing",
    "Least-Cost-Routing (LCR)",
    "Qualitätsbasiertes Routing",
    "Failover- & Ausfall-Routing",
    "Prioritätsbasiertes Routing",
    "Destinationsbasiertes Routing",
    "Carrier-Leistungsüberwachung",
    "Routenkosten-Management"
  ],
  "routeControlCard": {
    "title": "Globale Routensteuerung",
    "badge": "Routen stabil",
    "agentCall": "Agentenanruf",
    "smartRouting": "Smart Routing",
    "smartRoutingDesc": "Beste verfügbare Route",
    "carrier1": "Carrier A · Priorität 1",
    "carrier2": "Carrier B · Priorität 2",
    "carrier3": "Carrier C · Ausfallsicherung",
    "tableDest": "Ziel",
    "tableCarrier": "Carrier",
    "tableQuality": "Qualität",
    "tableRate": "/ Min.",
    "note": "Beispielhafte Ziele, Carrier-Qualität und Tarife."
  },
  "routesEngine": {
    "title": "Intelligente Routing-Engine",
    "desc": "Wählt automatisch die beste Route basierend auf Ziel, Preis, Sprachqualität, Verfügbarkeit und Carrier-Performance.",
    "tags": [
      "Ziel",
      "Preis",
      "Qualität",
      "Verfügbarkeit",
      "Carrier-Leistung"
    ]
  },
  "monitoringBadge": "Modernes Call-Center-Monitoring",
  "monitoringTitle": "Volle Transparenz über Ihr gesamtes Callcenter",
  "monitoringSubtitle": "Überwachen Sie den gesamten Betrieb über ein zentrales Dashboard.",
  "monitoringLiveHeader": "Live-Überwachung",
  "monitoringLiveSub": "Sehen Sie sofort, was gerade passiert.",
  "monitoringKpis": [
    {
      "label": "Aktive Anrufe",
      "value": "128"
    },
    {
      "label": "Wartende Anrufe",
      "value": "12"
    },
    {
      "label": "Verfügbare Agenten",
      "value": "36"
    },
    {
      "label": "Belegte Agenten",
      "value": "64"
    },
    {
      "label": "Agentenstatus",
      "value": "Live"
    },
    {
      "label": "Anrufe pro Sekunde",
      "value": "8,4"
    },
    {
      "label": "Annahmerate",
      "value": "86,2%"
    },
    {
      "label": "Durchschnittliche Dauer",
      "value": "04:32"
    },
    {
      "label": "Gleichzeitige Anrufe",
      "value": "140"
    },
    {
      "label": "Fehlgeschlagene Anrufe",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Call-Center-Übersicht",
    "updateMeta": "Alle Kampagnen • 08. Okt. 2026",
    "note": "Illustratives Live-Dashboard • Überwachen Sie Agenten, Warteschlangen und Sprachqualität in einem Arbeitsbereich.",
    "cols": {
      "agent": "Agent",
      "campaign": "Kampagne",
      "status": "Status",
      "duration": "Dauer",
      "destination": "Ziel",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Supervisor-Werkzeuge",
  "supervisorToolsSubtitle": "Geben Sie Managern vollständige Kontrolle zur Qualitäts- und Leistungssteigerung.",
  "supervisorTools": [
    {
      "title": "Mithören (Listen)",
      "desc": "Live-Anrufe unbemerkt zur Qualitätssicherung und Schulung verfolgen."
    },
    {
      "title": "Flüstern (Whisper)",
      "desc": "Den Agenten coachen, ohne dass der Kunde die Stimme des Supervisors hört."
    },
    {
      "title": "Einschalten (Barge-In)",
      "desc": "Direkt in das Gespräch eingreifen und die Konversation übernehmen."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Anrufe",
    "stat2": "86%",
    "stat2Sub": "Annahmerate",
    "title": "Echtzeit-Wallboard",
    "desc": "Live-KPIs Ihres Callcenters auf großen Monitoren darstellen."
  },
  "dialingModesBadge": "Intelligentere Outbound-Telefonie",
  "dialingModesTitle": "Erweiterte Wählmodi",
  "dialingModesSubtitle": "Wählen Sie die Wählstrategie, die optimal zu Ihren Geschäftsprozessen passt.",
  "dialingModes": [
    {
      "title": "Predictive Dialer",
      "desc": "Wählt automatisch mehrere Rufnummern an und verbindet angenommene Anrufe direkt mit freien Agenten.",
      "flow": "Mehrere Anrufe → Freier Agent",
      "tag": "HOCHVOLUMIGE KAMPAGNEN"
    },
    {
      "title": "Progressive Dialer",
      "desc": "Wählt den nächsten Kunden erst an, sobald ein Agent tatsächlich frei und verfügbar ist.",
      "flow": "Freier Agent → Nächster Kunde",
      "tag": "AGENTENGESTEUERTES WÄHLEN"
    },
    {
      "title": "Power Dialer",
      "desc": "Arbeitet Kontaktlisten automatisch nacheinander ab, um die Agentenproduktivität zu maximieren.",
      "flow": "Kontaktliste → Fortlaufende Anrufe",
      "tag": "FOKUSSIERTE PRODUKTIVITÄT"
    },
    {
      "title": "Preview Dialer",
      "desc": "Ermöglicht Agenten, Kundendaten vor dem eigentlichen Gesprächsaufbau einzusehen.",
      "flow": "Kundenansicht → Anruf starten",
      "tag": "INDIVIDUELLE GESPRÄCHE"
    }
  ],
  "analyticsBadge": "Anruf-Analysen & Berichte",
  "analyticsTitle": "Anrufdaten in bessere Vertriebs- und Serviceleistung verwandeln",
  "analyticsSubtitle": "Verfolgen Sie jeden Aspekt Ihrer Telefonieaktivitäten in Echtzeit.",
  "analyticsFeatures": [
    "Agenten-Leistung",
    "Kampagnen-Performance",
    "Gesprächsdauer",
    "Annahmerate (ASR)",
    "Abbruchrate",
    "Conversion-Tracking",
    "Anrufergebnisse (Dispositions)",
    "Routen-Performance",
    "Carrier-Leistung",
    "Kostenanalyse",
    "Stündliche, tägliche und monatliche Berichte",
    "Detaillierte Einzelverbindungsnachweise (CDR)"
  ],
  "analyticsSubtext": "Von einzelnen Telefonaten bis hin zu weltweiten Verbindungskosten – behalten Sie das gesamte Bild im Blick.",
  "analyticsCard": {
    "title": "Kampagnen-Performance",
    "exportBtn": "Exportieren",
    "tabHourly": "Stündlich",
    "tabDaily": "Täglich",
    "tabMonthly": "Monatlich",
    "timeframe": "01.–07. Okt. 2026",
    "stat1Label": "Anrufe gesamt",
    "stat1Val": "1.842",
    "stat2Label": "Annahmerate",
    "stat2Val": "86,2%",
    "stat3Label": "Conversions",
    "stat3Val": "18,4%",
    "legendCalls": "Anrufe",
    "legendAnswered": "Angenommen",
    "dispositionTitle": "Anrufergebnisse",
    "note": "Illustrative Berichtsdaten • Exportieren Sie jedes Detail Ihrer Telefonie."
  },
  "ctaBadge": "LASSEN SIE UNS IHR NETZWERK AUFBAUEN",
  "ctaTitle": "Bringen Sie Ihr Unternehmen mit professionellen SMS-Lösungen voran",
  "ctaSubtitle": "Von intelligentem Voice-Routing und internationaler Terminierung bis hin zu KI-Sprachlösungen und virtuellen Rufnummern – iNet Global bietet skalierbare Telekommunikationslösungen für klare, verlässliche und globale Verbindungen zu Ihren Kunden.",
  "getStarted": "Jetzt starten",
  "contactUs": "Kontaktieren Sie uns",
  "ctaTrust1": "Enterprise Dialer SLA",
  "ctaTrust2": "Sofortige WebRTC-Aktivierung",
  "ctaTrust3": "24/7 Dedizierter Support"
};

const ja: DailerSolutionTranslation = {
  "heroBadge": "コールセンターダイヤラーソリューション",
  "heroTitle": "デスクトップ＆モバイル向け次世代コールセンターダイヤラー",
  "heroDesc": "オペレーター、顧客、グローバル回線を統合された強力な通話プラットフォームで接続します。ブラウザベースのデスクトップダイヤラーまたはモバイルアプリを活用し、高度なルーティング、ライブ監視、分析、リアルタイム制御で発信業務を効率化します。",
  "requestDemo": "デモをリクエスト",
  "exploreDialer": "ダイヤラーを見る",
  "heroFootnote": "最初の通話から最終レポートまで、すべてを単一の統合環境で。",
  "heroMockup": {
    "title": "iNet ダイヤラー",
    "agentStatus": "オペレーター待機中",
    "campaign": "顧客フォローアップ",
    "campaignMeta": "プログレッシブ発信 • 本日",
    "contactsCount": "128件の連絡先",
    "connectedBadge": "接続済み - WebRTC",
    "callerName": "ジェイミー・ローソン",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "通話を終了",
    "tabContact": "連絡先",
    "tabHistory": "履歴",
    "tabNotes": "メモ",
    "customerDetailsTitle": "顧客詳細情報",
    "companyLabel": "会社名",
    "companyVal": "Lawson & Co.",
    "emailLabel": "メール",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "最終対応日時",
    "lastContactVal": "2026年10月7日",
    "dispositionLabel": "通話結果 (ステータス)",
    "dispositionVal": "再コール予定",
    "recordingText": "通話録音中",
    "stat1Label": "本日の通話数",
    "stat1Val": "46",
    "stat2Label": "接続数",
    "stat2Val": "38",
    "stat3Label": "通話時間",
    "stat3Val": "02時間 18分",
    "floatBadgeTitle": "すべての通話に最適なルートを。",
    "floatBadgeDesc": "英国 · キャリアA · 品質 98.6%"
  },
  "highlights": [
    {
      "title": "ブラウザ型ダイヤラー"
    },
    {
      "title": "モバイルダイヤラー"
    },
    {
      "title": "A–Z グローバル音声回線"
    },
    {
      "title": "プレディクティブ＆プログレッシブ発信"
    },
    {
      "title": "通話ライブモニタリング"
    },
    {
      "title": "リアルタイム分析＆レポート"
    }
  ],
  "desktopBadge": "デスクトップブラウザダイヤラー",
  "desktopTitle": "あらゆるPCをプロフェッショナルなコールセンターへ",
  "desktopSubtitle": "面倒なアプリのインストールは不要。ブラウザから安全にログインするだけで、即座に通話を開始できます。",
  "desktopFootnote": "ブラウザがそのまま作業環境に。安全なオペレーターアクセスと手間のない導入。",
  "desktopFeaturesTitle": "主な機能",
  "desktopFeatures": [
    "WebRTCブラウザ通話",
    "オペレーターログイン＆権限管理",
    "ワンクリック発信 (Click-to-call)",
    "連絡先管理",
    "通話履歴",
    "自動通話録音",
    "通話転送機能",
    "保留＆ミュート",
    "通話結果ステータス管理",
    "オペレーターステータス監視",
    "リアルタイム通話統計"
  ],
  "desktopMainHeading": "ひとつのダイヤラーで、あらゆる通話ニーズに対応。",
  "desktopWorkspaceTitle": "ブラウザがあなたの統合ワークスペース。",
  "desktopWorkspaceSubtitle": "安全なオペレーターアクセス。複雑なインストールは一切不要。",
  "mobileBadge": "モバイルダイヤラー",
  "mobileTitle": "場所を選ばずコールセンター業務を実行",
  "mobileSubtitle": "リモートワーカーや現場の営業担当者に、企業内線・発信インフラと直結した高品質なモバイル通話環境を提供します。",
  "mobileFootnote": "どこにいても、あなたのビジネス番号で発信。",
  "mobileFeaturesTitle": "モバイル機能",
  "mobileFeatures": [
    "Android / iOS 対応アーキテクチャ",
    "SIP / WebRTC 高音質通話",
    "連絡先の自動同期",
    "通話履歴の閲覧",
    "ワンクリック発信",
    "発信者番号 (Caller ID) 設定",
    "通話録音",
    "対応可能ステータス管理",
    "プッシュ通知対応",
    "セキュア認証"
  ],
  "mobileSyncCard": {
    "title": "連絡先を常に同期。",
    "desc": "顧客情報と通話履歴をいつでも手元に。",
    "badge": "同期完了"
  },
  "mobileDialerMockup": {
    "title": "iNet ダイヤラー",
    "greeting": "おはようございます、Alex",
    "status": "待機中",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "発信番号: iNet Business",
    "tabDialer": "ダイヤラー",
    "tabContacts": "連絡先",
    "tabHistory": "履歴"
  },
  "routesBadge": "先進の A–Z グローバルルート",
  "routesTitle": "最適な通信ルートで確実に顧客へリーチ",
  "routesSubtitle": "世界中の複数通信キャリアやサプライヤーと接続し、高品質な国際音声トラフィックをインテリジェントに制御します。",
  "routesFeaturesTitle": "ルート管理機能",
  "routesFeatures": [
    "A–Z 全世界の通話先対応",
    "マルチキャリア統合接続",
    "プレフィックス単位のルーティング",
    "最安コストルーティング (LCR)",
    "品質重視ルーティング",
    "自動フェイルオーバー・障害迂回",
    "優先順位ルーティング",
    "通話先別ルーティング",
    "キャリアパフォーマンス監視",
    "通信コストのリアルタイム管理"
  ],
  "routeControlCard": {
    "title": "グローバルルート制御",
    "badge": "回線状態良好",
    "agentCall": "オペレーター通話",
    "smartRouting": "スマートルーティング",
    "smartRoutingDesc": "最適な利用可能ルート",
    "carrier1": "キャリアA · 優先度1",
    "carrier2": "キャリアB · 優先度2",
    "carrier3": "キャリアC · フェイルオーバー",
    "tableDest": "通話先",
    "tableCarrier": "キャリア",
    "tableQuality": "品質",
    "tableRate": "/ 分",
    "note": "表示の通話先、品質、料金は参考値です。"
  },
  "routesEngine": {
    "title": "スマートルーティングエンジン",
    "desc": "通話先、通話料、音質、回線可用性、キャリアの稼働実績に基づき、最適な回線を自動選定します。",
    "tags": [
      "通話先",
      "価格",
      "品質",
      "可用性",
      "キャリア実績"
    ]
  },
  "monitoringBadge": "高度なコールセンター監視",
  "monitoringTitle": "コールセンターの稼働状況を完全に可視化",
  "monitoringSubtitle": "一元化されたダッシュボードから業務全体をリアルタイムに把握。",
  "monitoringLiveHeader": "ライブモニタリング",
  "monitoringLiveSub": "今起きている状況を即座に確認。",
  "monitoringKpis": [
    {
      "label": "通話中の回線",
      "value": "128"
    },
    {
      "label": "待機中の着信",
      "value": "12"
    },
    {
      "label": "待機中オペレーター",
      "value": "36"
    },
    {
      "label": "通話中オペレーター",
      "value": "64"
    },
    {
      "label": "稼働ステータス",
      "value": "ライブ"
    },
    {
      "label": "秒間通話数 (CPS)",
      "value": "8.4"
    },
    {
      "label": "応答率 (ASR)",
      "value": "86.2%"
    },
    {
      "label": "平均通話時間",
      "value": "04:32"
    },
    {
      "label": "同時通話数",
      "value": "140"
    },
    {
      "label": "失敗呼",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "コールセンター概要",
    "updateMeta": "全キャンペーン • 2026年10月8日",
    "note": "ライブ監視ダッシュボード • オペレーター、待機キュー、通話品質を単一画面で把握。",
    "cols": {
      "agent": "オペレーター",
      "campaign": "キャンペーン",
      "status": "状態",
      "duration": "通話時間",
      "destination": "通話先",
      "supervisor": "スーパーバイザー"
    }
  },
  "supervisorToolsTitle": "スーパーバイザー管理機能",
  "supervisorToolsSubtitle": "管理者にオペレーターの指導と品質管理のための強力なツールを提供します。",
  "supervisorTools": [
    {
      "title": "モニタリング (Listen)",
      "desc": "顧客やオペレーターに気づかれずに通話をリアルタイムで聴取。"
    },
    {
      "title": "ウィスパリング (Whisper)",
      "desc": "顧客には聞こえない状態で、オペレーターだけにアドバイスを通話中に伝達。"
    },
    {
      "title": "バージイン (Barge-In)",
      "desc": "トラブル時やクロージング時に通話へ直接介入し、3者間通話を開始。"
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "通話数",
    "stat2": "86%",
    "stat2Sub": "応答率",
    "title": "リアルタイム大型モニター (ウォールボード)",
    "desc": "コールセンターの重要指標を大画面ディスプレイにライブ表示。"
  },
  "dialingModesBadge": "よりスマートな発信業務",
  "dialingModesTitle": "高度なオートダイヤル方式",
  "dialingModesSubtitle": "業務モデルに合わせた最適な発信戦略を選択。",
  "dialingModes": [
    {
      "title": "プレディクティブダイヤラー",
      "desc": "複数の電話番号へ同時に自動発信し、応答があった通話のみを待機中のオペレーターへ即座に接続します。",
      "flow": "複数発信 → 空きオペレーター",
      "tag": "大量リストへの一斉アプローチ"
    },
    {
      "title": "プログレッシブダイヤラー",
      "desc": "オペレーターが対応可能になった瞬間に次の顧客へ自動発信します。",
      "flow": "待機オペレーター → 次の顧客",
      "tag": "オペレーター主導の着実な架電"
    },
    {
      "title": "パワーダイヤラー",
      "desc": "顧客リストを順番に自動発信し、オペレーターのアイドル時間を最小限に抑えます。",
      "flow": "連絡先リスト → 連続発信",
      "tag": "架電効率と生産性の最大化"
    },
    {
      "title": "プレビューダイヤラー",
      "desc": "発信前にオペレーターが顧客情報や対応履歴をじっくり確認してからコールを開始します。",
      "flow": "顧客情報確認 → 発信開始",
      "tag": "パーソナライズされた丁寧な商談"
    }
  ],
  "analyticsBadge": "通話分析＆詳細レポート",
  "analyticsTitle": "通話データを分析し、業務品質と成約率を最大化",
  "analyticsSubtitle": "発信・着信オペレーションのあらゆるデータを多角的に可視化。",
  "analyticsFeatures": [
    "オペレーター別実績",
    "キャンペーン別パフォーマンス",
    "平均通話時間",
    "応答率 (ASR)",
    "放棄呼率",
    "成約・コンバージョン追跡",
    "通話結果ステータス分析",
    "回線ルート品質実績",
    "キャリアパフォーマンス比較",
    "詳細コスト分析",
    "時間別・日別・月別レポート",
    "全通話詳細ログ (CDR)"
  ],
  "analyticsSubtext": "1件1件の会話ログからグローバルなキャリア回線費用まで、全容をクリアに把握できます。",
  "analyticsCard": {
    "title": "キャンペーン実績",
    "exportBtn": "出力",
    "tabHourly": "時間別",
    "tabDaily": "日別",
    "tabMonthly": "月別",
    "timeframe": "2026年10月1日〜7日",
    "stat1Label": "総発信数",
    "stat1Val": "1,842",
    "stat2Label": "応答率",
    "stat2Val": "86.2%",
    "stat3Label": "成約数",
    "stat3Val": "18.4%",
    "legendCalls": "発信数",
    "legendAnswered": "応答数",
    "dispositionTitle": "通話結果内訳",
    "note": "レポートサンプルデータ • すべての通話の詳細ログを簡単にCSVエクスポート可能。"
  },
  "ctaBadge": "メッセージング＆音声ネットワークを構築しましょう",
  "ctaTitle": "ビジネス向け通信ソリューションで事業を拡大",
  "ctaSubtitle": "インテリジェントな音声ルーティングや国際終端から、AIボイス、仮想電話番号まで、iNet Globalは世界各地の顧客と確実かつ高品質につながる通信インフラを提供します。",
  "getStarted": "今すぐ始める",
  "contactUs": "お問い合わせ",
  "ctaTrust1": "エンタープライズダイヤラーSLA",
  "ctaTrust2": "即時WebRTCアクティベーション",
  "ctaTrust3": "24時間365日の専任サポート"
};

const pt: DailerSolutionTranslation = {
  "heroBadge": "SOLUÇÃO DE DISCADOR PARA CALL CENTER",
  "heroTitle": "Discador de Call Center de Próxima Geração para Desktop e Celular",
  "heroDesc": "Conecte seus agentes, clientes e rotas globais por meio de uma plataforma de chamadas unificada e potente. Use nosso discador no navegador ou o discador móvel para gerenciar chamadas ativas com roteamento inteligente, monitoramento ao vivo, relatórios e controle em tempo real.",
  "requestDemo": "Solicitar demonstração",
  "exploreDialer": "Explorar discador",
  "heroFootnote": "Um espaço de trabalho integrado. Da primeira chamada ao relatório final.",
  "heroMockup": {
    "title": "Discador iNet",
    "agentStatus": "Agente disponível",
    "campaign": "Acompanhamento de clientes",
    "campaignMeta": "Campanha progressiva • Hoje",
    "contactsCount": "128 contatos",
    "connectedBadge": "Conectado - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Encerrar chamada",
    "tabContact": "Contato",
    "tabHistory": "Histórico",
    "tabNotes": "Anotações",
    "customerDetailsTitle": "DETALHES DO CLIENTE",
    "companyLabel": "Empresa",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Último contato",
    "lastContactVal": "07 out 2026",
    "dispositionLabel": "DISPOSIÇÃO DA CHAMADA",
    "dispositionVal": "Retorno agendado",
    "recordingText": "Gravação em andamento",
    "stat1Label": "Chamadas hoje",
    "stat1Val": "46",
    "stat2Label": "Conectadas",
    "stat2Val": "38",
    "stat3Label": "Tempo de fala",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "A rota certa. A cada chamada.",
    "floatBadgeDesc": "Reino Unido · Operadora A · Qualidade 98,6%"
  },
  "highlights": [
    {
      "title": "Discador no navegador Web"
    },
    {
      "title": "Discador móvel"
    },
    {
      "title": "Rotas globais A–Z"
    },
    {
      "title": "Discagem preditiva e progressiva"
    },
    {
      "title": "Monitoramento de chamadas ao vivo"
    },
    {
      "title": "Análises em tempo real"
    }
  ],
  "desktopBadge": "Discador Web para Desktop",
  "desktopTitle": "Transforme qualquer computador em um call center profissional",
  "desktopSubtitle": "Sem instalações complicadas. Os agentes fazem login de forma segura no navegador e começam a ligar imediatamente.",
  "desktopFootnote": "Seu navegador é seu espaço de trabalho. Acesso seguro para agentes sem instalações pesadas.",
  "desktopFeaturesTitle": "Recursos",
  "desktopFeatures": [
    "Chamadas WebRTC via navegador",
    "Login e gerenciamento de agentes",
    "Clique para ligar (Click-to-call)",
    "Gestão de contatos",
    "Histórico de chamadas",
    "Gravação de chamadas",
    "Transferência de chamadas",
    "Espera e mudo",
    "Gestão de tabulações (Disposições)",
    "Acompanhamento de status do agente",
    "Estatísticas de chamadas em tempo real"
  ],
  "desktopMainHeading": "Um único discador. Para todas as necessidades de telefonia.",
  "desktopWorkspaceTitle": "Seu navegador é sua central de trabalho.",
  "desktopWorkspaceSubtitle": "Acesso seguro para agentes. Sem instalações complexas.",
  "mobileBadge": "Discador Móvel",
  "mobileTitle": "Leve suas operações de atendimento para qualquer lugar",
  "mobileSubtitle": "Ofereça aos agentes remotos e externos uma experiência profissional no smartphone integrada à infraestrutura corporativa.",
  "mobileFootnote": "Seu número comercial. Onde quer que o trabalho aconteça.",
  "mobileFeaturesTitle": "Recursos Móveis",
  "mobileFeatures": [
    "Compatível com Android e iOS",
    "Chamadas SIP e WebRTC",
    "Sincronização de contatos",
    "Histórico de chamadas",
    "Clique para ligar",
    "Gerenciamento de identificador de chamada",
    "Gravação de chamadas",
    "Status de disponibilidade do agente",
    "Notificações push",
    "Autenticação segura"
  ],
  "mobileSyncCard": {
    "title": "Contatos sempre sincronizados.",
    "desc": "Seus clientes e o histórico de ligações sempre na palma da mão.",
    "badge": "Sincronizado agora"
  },
  "mobileDialerMockup": {
    "title": "Discador iNet",
    "greeting": "Bom dia, Alex",
    "status": "Disponível",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Bina: iNet Business",
    "tabDialer": "Discador",
    "tabContacts": "Contatos",
    "tabHistory": "Histórico"
  },
  "routesBadge": "Rotas Globais Avançadas A–Z",
  "routesTitle": "Conecte-se aos clientes pela rota ideal",
  "routesSubtitle": "Conecte-se a várias operadoras e gerencie seu tráfego global de voz com inteligência e estabilidade.",
  "routesFeaturesTitle": "Gestão de Rotas",
  "routesFeatures": [
    "Destinos internacionais A–Z",
    "Integração com múltiplas operadoras",
    "Roteamento por prefixo",
    "Roteamento de menor custo (LCR)",
    "Roteamento baseado em qualidade",
    "Roteamento com redundância e failover",
    "Roteamento por prioridade",
    "Roteamento por destino",
    "Monitoramento de performance de operadoras",
    "Controle e gestão de custos de rotas"
  ],
  "routeControlCard": {
    "title": "Controle global de rotas",
    "badge": "Rotas ativas",
    "agentCall": "Chamada do agente",
    "smartRouting": "Roteamento inteligente",
    "smartRoutingDesc": "Melhor rota disponível",
    "carrier1": "Operadora A · Prioridade 1",
    "carrier2": "Operadora B · Prioridade 2",
    "carrier3": "Operadora C · Contingência",
    "tableDest": "Destino",
    "tableCarrier": "Operadora",
    "tableQuality": "Qualidade",
    "tableRate": "/ min",
    "note": "Destinos, qualidade e tarifas apenas para fins demonstrativos."
  },
  "routesEngine": {
    "title": "Motor de Roteamento Inteligente",
    "desc": "Selecione automaticamente o melhor trajeto com base em destino, custo, qualidade de áudio, disponibilidade e estabilidade do fornecedor.",
    "tags": [
      "Destino",
      "Preço",
      "Qualidade",
      "Disponibilidade",
      "Desempenho da operadora"
    ]
  },
  "monitoringBadge": "Monitoramento Avançado de Call Center",
  "monitoringTitle": "Visibilidade Total do Seu Call Center",
  "monitoringSubtitle": "Acompanhe toda a sua operação a partir de um painel centralizado em tempo real.",
  "monitoringLiveHeader": "Monitoramento ao vivo",
  "monitoringLiveSub": "Veja exatamente o que está acontecendo agora.",
  "monitoringKpis": [
    {
      "label": "Chamadas ativas",
      "value": "128"
    },
    {
      "label": "Chamadas em espera",
      "value": "12"
    },
    {
      "label": "Agentes disponíveis",
      "value": "36"
    },
    {
      "label": "Agentes ocupados",
      "value": "64"
    },
    {
      "label": "Status do agente",
      "value": "Ao vivo"
    },
    {
      "label": "Chamadas por segundo",
      "value": "8,4"
    },
    {
      "label": "Taxa de atendimento",
      "value": "86,2%"
    },
    {
      "label": "Duração média",
      "value": "04:32"
    },
    {
      "label": "Chamadas simultâneas",
      "value": "140"
    },
    {
      "label": "Chamadas com falha",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Visão geral do call center",
    "updateMeta": "Todas as campanhas • 08 out 2026",
    "note": "Painel em tempo real ilustrativo • Monitore agentes, filas e qualidade de áudio em uma única tela.",
    "cols": {
      "agent": "Agente",
      "campaign": "Campanha",
      "status": "Status",
      "duration": "Duração",
      "destination": "Destino",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Ferramentas do Supervisor",
  "supervisorToolsSubtitle": "Dê aos gestores controle total para treinar equipes e garantir a excelência.",
  "supervisorTools": [
    {
      "title": "Escuta (Listen)",
      "desc": "Monitore chamadas ao vivo discretamente para controle de qualidade."
    },
    {
      "title": "Sussurro (Whisper)",
      "desc": "Oriente o agente durante o atendimento sem que o cliente ouça a voz do supervisor."
    },
    {
      "title": "Intervenção (Barge-In)",
      "desc": "Entre na conversa ao vivo quando for necessário assumir o atendimento."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Chamadas",
    "stat2": "86%",
    "stat2Sub": "Atendimento",
    "title": "Wallboard em Tempo Real",
    "desc": "Exiba métricas vitais da central de atendimento em telas grandes."
  },
  "dialingModesBadge": "Discagem ativa inteligente",
  "dialingModesTitle": "Modos de Discagem Avançados",
  "dialingModesSubtitle": "Escolha a estratégia de discagem ideal para sua operação.",
  "dialingModes": [
    {
      "title": "Discador Preditivo",
      "desc": "Disca automaticamente para vários números simultaneamente e entrega as ligações atendidas aos agentes livres.",
      "flow": "Múltiplas chamadas → Agente disponível",
      "tag": "PROSPECÇÃO DE ALTO VOLUME"
    },
    {
      "title": "Discador Progressivo",
      "desc": "Disca para o próximo cliente somente quando um operador termina o atendimento anterior e fica livre.",
      "flow": "Agente disponível → Próximo cliente",
      "tag": "DISCAGEM NO RITMO DO AGENTE"
    },
    {
      "title": "Power Dialer",
      "desc": "Percorre listas de contatos sequencialmente para manter o agente sempre em linha produtiva.",
      "flow": "Lista de contatos → Ligações contínuas",
      "tag": "FOCO TOTAL EM PRODUTIVIDADE"
    },
    {
      "title": "Discador com Pré-visualização",
      "desc": "Permite ao agente revisar as informações e o histórico do cliente antes de iniciar a ligação.",
      "flow": "Revisar cliente → Iniciar chamada",
      "tag": "CONVERSAS PERSONALIZADAS"
    }
  ],
  "analyticsBadge": "Análises e Relatórios de Chamadas",
  "analyticsTitle": "Transforme Dados em Resultados Comerciais Superiores",
  "analyticsSubtitle": "Monitore e aprimore cada métrica da sua central de telefonia.",
  "analyticsFeatures": [
    "Desempenho por agente",
    "Desempenho por campanha",
    "Tempo de duração das chamadas",
    "Taxa de atendimento (ASR)",
    "Taxa de abandono de chamadas",
    "Acompanhamento de conversões",
    "Tabulações e desfechos de chamadas",
    "Performance de rotas e troncos",
    "Desempenho por operadora parceira",
    "Análise aprofundada de custos",
    "Relatórios por hora, dia e mês",
    "Registros detalhados de chamadas (CDR)"
  ],
  "analyticsSubtext": "De conversas individuais a custos globais com operadoras, tenha controle absoluto e clareza total.",
  "analyticsCard": {
    "title": "Desempenho da campanha",
    "exportBtn": "Exportar",
    "tabHourly": "Por hora",
    "tabDaily": "Diário",
    "tabMonthly": "Mensal",
    "timeframe": "01–07 out 2026",
    "stat1Label": "Total de chamadas",
    "stat1Val": "1.842",
    "stat2Label": "Taxa de atendimento",
    "stat2Val": "86,2%",
    "stat3Label": "Conversões",
    "stat3Val": "18,4%",
    "legendCalls": "Chamadas",
    "legendAnswered": "Atendidas",
    "dispositionTitle": "Tabulações",
    "note": "Dados ilustrativos de relatório • Exporte o histórico detalhado de cada chamada."
  },
  "ctaBadge": "VAMOS CONSTRUIR SUA REDE DE COMUNICAÇÃO",
  "ctaTitle": "Impulsione seus negócios com soluções corporativas completas",
  "ctaSubtitle": "Do roteamento de voz inteligente e terminação internacional à IA de voz e números virtuais, a iNet Global oferece soluções escaláveis para conectar sua empresa com clientes em todo o mundo com máxima clareza e confiabilidade.",
  "getStarted": "Começar agora",
  "contactUs": "Fale conosco",
  "ctaTrust1": "SLA de Nível Corporativo",
  "ctaTrust2": "Ativação Instantânea WebRTC",
  "ctaTrust3": "Suporte Dedicado 24/7"
};

const ru: DailerSolutionTranslation = {
  "heroBadge": "РЕШЕНИЕ ДЛЯ КОЛЛ-ЦЕНТРОВ: ДАЙЛЕР",
  "heroTitle": "Интеллектуальный дайлер нового поколения для ПК и мобильных устройств",
  "heroDesc": "Объедините операторов, клиентов и международные маршруты на единой надежной платформе. Используйте наш браузерный или мобильный дайлер для эффективных исходящих звонков с умной маршрутизацией, онлайн-мониторингом, аналитикой и контролем в реальном времени.",
  "requestDemo": "Запросить демо",
  "exploreDialer": "Узнать больше о дайлере",
  "heroFootnote": "Единое рабочее пространство. От первого звонка до итогового отчета.",
  "heroMockup": {
    "title": "Дайлер iNet",
    "agentStatus": "Оператор свободен",
    "campaign": "Повторные звонки клиентам",
    "campaignMeta": "Прогрессивный обзвон • Сегодня",
    "contactsCount": "128 контактов",
    "connectedBadge": "Подключено - WebRTC",
    "callerName": "Джейми Лоусон",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Завершить вызов",
    "tabContact": "Контакт",
    "tabHistory": "История",
    "tabNotes": "Заметки",
    "customerDetailsTitle": "ДАННЫЕ КЛИЕНТА",
    "companyLabel": "Компания",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Эл. почта",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Посл. контакт",
    "lastContactVal": "07 окт 2026",
    "dispositionLabel": "СТАТУС ЗВОНКА",
    "dispositionVal": "Запланирован перезвон",
    "recordingText": "Идет запись разговора",
    "stat1Label": "Звонков сегодня",
    "stat1Val": "46",
    "stat2Label": "Соединено",
    "stat2Val": "38",
    "stat3Label": "Время разговора",
    "stat3Val": "02ч 18м",
    "floatBadgeTitle": "Точный маршрут для каждого звонка.",
    "floatBadgeDesc": "Великобритания · Оператор A · Качество 98.6%"
  },
  "highlights": [
    {
      "title": "Браузерный дайлер"
    },
    {
      "title": "Мобильный дайлер"
    },
    {
      "title": "A–Z глобальные маршруты"
    },
    {
      "title": "Предиктивный и прогрессивный обзвон"
    },
    {
      "title": "Мониторинг звонков в реальном времени"
    },
    {
      "title": "Детальная аналитика"
    }
  ],
  "desktopBadge": "Браузерный дайлер для ПК",
  "desktopTitle": "Превратите любой компьютер в профессиональный колл-центр",
  "desktopSubtitle": "Никаких сложных установок. Операторы безопасно входят через браузер и сразу приступают к звонкам.",
  "desktopFootnote": "Ваш браузер — это полноценное рабочее место. Безопасный доступ без лишнего софта.",
  "desktopFeaturesTitle": "Возможности",
  "desktopFeatures": [
    "WebRTC звонки через браузер",
    "Авторизация и управление операторами",
    "Звонок в один клик (Click-to-call)",
    "Управление базой контактов",
    "История вызовов",
    "Запись разговоров",
    "Перевод звонков",
    "Удержание и отключение микрофона",
    "Управление статусами завершения звонка",
    "Отслеживание статуса оператора",
    "Статистика вызовов в реальном времени"
  ],
  "desktopMainHeading": "Один дайлер для любых задач телефонной связи.",
  "desktopWorkspaceTitle": "Ваш браузер — ваше полноценное рабочее пространство.",
  "desktopWorkspaceSubtitle": "Безопасный доступ операторов без сложной установки программ.",
  "mobileBadge": "Мобильный дайлер",
  "mobileTitle": "Управляйте телефонными продажами и сервисом отовсюду",
  "mobileSubtitle": "Предоставьте удаленным и выездным сотрудникам профессиональный мобильный инструмент с прямым доступом к корпоративной телефонии.",
  "mobileFootnote": "Ваш рабочий номер там, где вы находитесь.",
  "mobileFeaturesTitle": "Мобильные функции",
  "mobileFeatures": [
    "Архитектура для Android и iOS",
    "Звонки по протоколам SIP и WebRTC",
    "Синхронизация контактов",
    "История звонков",
    "Звонок в один клик",
    "Управление АОН (Caller ID)",
    "Запись разговоров",
    "Статус доступности оператора",
    "Push-уведомления",
    "Безопасная аутентификация"
  ],
  "mobileSyncCard": {
    "title": "Контакты всегда синхронизированы.",
    "desc": "Клиенты и история звонков всегда под рукой.",
    "badge": "Только что обновлено"
  },
  "mobileDialerMockup": {
    "title": "Дайлер iNet",
    "greeting": "Доброе утро, Алекс",
    "status": "Свободен",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "АОН: iNet Business",
    "tabDialer": "Набор",
    "tabContacts": "Контакты",
    "tabHistory": "История"
  },
  "routesBadge": "Международные маршруты A–Z",
  "routesTitle": "Соединяйтесь с клиентами по оптимальному каналу связи",
  "routesSubtitle": "Подключайтесь к множеству операторов и эффективно управляйте международным голосовым трафиком.",
  "routesFeaturesTitle": "Управление маршрутами",
  "routesFeatures": [
    "Международные направления A–Z",
    "Интеграция с несколькими операторами",
    "Маршрутизация по префиксам",
    "Маршрутизация по наименьшей стоимости (LCR)",
    "Маршрутизация по качеству связи",
    "Резервная маршрутизация (Failover)",
    "Приоритетная маршрутизация",
    "Маршрутизация по направлениям",
    "Мониторинг качества операторов",
    "Контроль себестоимости трафика"
  ],
  "routeControlCard": {
    "title": "Управление глобальными маршрутами",
    "badge": "Маршруты активны",
    "agentCall": "Звонок оператора",
    "smartRouting": "Умная маршрутизация",
    "smartRoutingDesc": "Лучший доступный маршрут",
    "carrier1": "Оператор A · Приоритет 1",
    "carrier2": "Оператор B · Приоритет 2",
    "carrier3": "Оператор C · Резерв",
    "tableDest": "Направление",
    "tableCarrier": "Оператор",
    "tableQuality": "Качество",
    "tableRate": "/ мин",
    "note": "Направления, качество и тарифы приведены для примера."
  },
  "routesEngine": {
    "title": "Интеллектуальный движок маршрутизации",
    "desc": "Автоматический выбор оптимального маршрута на основе направления, тарифа, качества звука, доступности и стабильности оператора.",
    "tags": [
      "Направление",
      "Цена",
      "Качество",
      "Доступность",
      "Надежность оператора"
    ]
  },
  "monitoringBadge": "Расширенный мониторинг колл-центра",
  "monitoringTitle": "Полный контроль работы вашего контакт-центра",
  "monitoringSubtitle": "Отслеживайте все ключевые показатели на едином информативном дашборде.",
  "monitoringLiveHeader": "Мониторинг в реальном времени",
  "monitoringLiveSub": "Смотрите, что происходит прямо сейчас.",
  "monitoringKpis": [
    {
      "label": "Активные вызовы",
      "value": "128"
    },
    {
      "label": "Ожидают в очереди",
      "value": "12"
    },
    {
      "label": "Свободные операторы",
      "value": "36"
    },
    {
      "label": "Занятые операторы",
      "value": "64"
    },
    {
      "label": "Статус оператора",
      "value": "В сети"
    },
    {
      "label": "Вызовов в секунду",
      "value": "8.4"
    },
    {
      "label": "Процент ответов",
      "value": "86.2%"
    },
    {
      "label": "Средняя длительность",
      "value": "04:32"
    },
    {
      "label": "Параллельные звонки",
      "value": "140"
    },
    {
      "label": "Сбои вызовов",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Обзор контакт-центра",
    "updateMeta": "Все кампании • 08 окт 2026",
    "note": "Интерактивный дашборд • Мониторинг операторов, очередей и качества звука в одном окне.",
    "cols": {
      "agent": "Оператор",
      "campaign": "Кампания",
      "status": "Статус",
      "duration": "Длительность",
      "destination": "Направление",
      "supervisor": "Супервайзер"
    }
  },
  "supervisorToolsTitle": "Инструменты супервайзера",
  "supervisorToolsSubtitle": "Предоставьте руководителям полный контроль для контроля качества и обучения сотрудников.",
  "supervisorTools": [
    {
      "title": "Прослушивание (Listen)",
      "desc": "Незаметный контроль разговоров в реальном времени для оценки качества."
    },
    {
      "title": "Суфлирование (Whisper)",
      "desc": "Подсказки оператору во время разговора, неслышные для клиента."
    },
    {
      "title": "Вмешательство (Barge-In)",
      "desc": "Подключение к разговору в режиме трехстороннего звонка при необходимости."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Звонки",
    "stat2": "86%",
    "stat2Sub": "Дозвон",
    "title": "Вордборд реального времени",
    "desc": "Вывод ключевых показателей колл-центра на большие мониторы зала."
  },
  "dialingModesBadge": "Умный исходящий обзвон",
  "dialingModesTitle": "Продвинутые режимы автодозвона",
  "dialingModesSubtitle": "Подберите идеальную стратегию обзвона под особенности вашего бизнеса.",
  "dialingModes": [
    {
      "title": "Предиктивный дайлер (Predictive)",
      "desc": "Автоматически набирает несколько номеров параллельно и мгновенно переводит ответивших клиентов на свободных операторов.",
      "flow": "Массовый набор → Свободный оператор",
      "tag": "МАССОВЫЕ ПРОДАЖИ"
    },
    {
      "title": "Прогрессивный дайлер (Progressive)",
      "desc": "Набирает номер следующего клиента только в тот момент, когда оператор освобождается.",
      "flow": "Свободный оператор → Следующий контакт",
      "tag": "КОНТРОЛИРУЕМЫЙ ТЕМП"
    },
    {
      "title": "Пауэр дайлер (Power Dialer)",
      "desc": "Последовательно обзванивает базу контактов, избавляя операторов от ручного набора номеров.",
      "flow": "Список контактов → Непрерывный обзвон",
      "tag": "ВЫСОКАЯ ПРОИЗВОДИТЕЛЬНОСТЬ"
    },
    {
      "title": "Превью дайлер (Preview Dialer)",
      "desc": "Позволяет оператору ознакомиться с карточкой клиента и историей до совершения вызова.",
      "flow": "Изучение карточки → Начало звонка",
      "tag": "ИНДИВИДУАЛЬНЫЙ ПОДХОД"
    }
  ],
  "analyticsBadge": "Аналитика и отчеты по звонкам",
  "analyticsTitle": "Превращайте данные о звонках в растущие показатели продаж",
  "analyticsSubtitle": "Отслеживайте каждый аспект работы операторов и каналов связи.",
  "analyticsFeatures": [
    "Эффективность операторов",
    "Показатели кампаний",
    "Продолжительность разговоров",
    "Процент дозвона (ASR)",
    "Процент потерянных вызовов",
    "Отслеживание конверсий",
    "Результаты завершения звонков (Dispositions)",
    "Качество маршрутов",
    "Надежность операторов связи",
    "Анализ расходов и себестоимости",
    "Почасовые, суточные и ежемесячные отчеты",
    "Детальные журналы соединений (CDR)"
  ],
  "analyticsSubtext": "От индивидуальных диалогов до глобальных затрат на транзитных операторов — полная прозрачность.",
  "analyticsCard": {
    "title": "Эффективность кампании",
    "exportBtn": "Экспорт",
    "tabHourly": "По часам",
    "tabDaily": "По дням",
    "tabMonthly": "По месяцам",
    "timeframe": "01–07 окт 2026",
    "stat1Label": "Всего звонков",
    "stat1Val": "1 842",
    "stat2Label": "Процент ответов",
    "stat2Val": "86.2%",
    "stat3Label": "Конверсии",
    "stat3Val": "18.4%",
    "legendCalls": "Вызовы",
    "legendAnswered": "Отвечено",
    "dispositionTitle": "Итоги разговоров",
    "note": "Пример отчета • Выгружайте детальные сведения по каждому вызову."
  },
  "ctaBadge": "ПОСТРОИМ ВАШУ ТЕЛЕКОМ-СЕТЬ",
  "ctaTitle": "Развивайте бизнес с надежными решениями для связи",
  "ctaSubtitle": "От умной голосовой маршрутизации и международного транзита до голосового искусственного интеллекта и виртуальных номеров — iNet Global обеспечивает стабильную и масштабируемую связь для взаимодействия с клиентами по всему миру.",
  "getStarted": "Начать работу",
  "contactUs": "Связаться с нами",
  "ctaTrust1": "Корпоративный SLA дайлера",
  "ctaTrust2": "Мгновенное подключение WebRTC",
  "ctaTrust3": "Круглосуточная поддержка 24/7"
};

const it: DailerSolutionTranslation = {
  "heroBadge": "SOLUZIONE DIALER PER CALL CENTER",
  "heroTitle": "Dialer per Call Center di Nuova Generazione per Desktop e Mobile",
  "heroDesc": "Connetti operatori, clienti e rotte globali attraverso una piattaforma di chiamata unificata e performante. Utilizza il nostro dialer desktop basato su browser o l'app mobile per gestire le chiamate in uscita con instradamento intelligente, monitoraggio dal vivo, analisi e controllo in tempo reale.",
  "requestDemo": "Richiedi una demo",
  "exploreDialer": "Esplora il dialer",
  "heroFootnote": "Un unico ambiente di lavoro connesso. Dalla prima chiamata al report finale.",
  "heroMockup": {
    "title": "Dialer iNet",
    "agentStatus": "Operatore disponibile",
    "campaign": "Follow-up clienti",
    "campaignMeta": "Campagna progressiva • Oggi",
    "contactsCount": "128 contatti",
    "connectedBadge": "Connesso - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Termina chiamata",
    "tabContact": "Contatto",
    "tabHistory": "Cronologia",
    "tabNotes": "Note",
    "customerDetailsTitle": "DETTAGLI CLIENTE",
    "companyLabel": "Azienda",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Ultimo contatto",
    "lastContactVal": "07 Ott 2026",
    "dispositionLabel": "ESITO CHIAMATA",
    "dispositionVal": "Richiamata programmata",
    "recordingText": "Registrazione in corso",
    "stat1Label": "Chiamate oggi",
    "stat1Val": "46",
    "stat2Label": "Connesse",
    "stat2Val": "38",
    "stat3Label": "Tempo di conversazione",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "La rotta giusta. Per ogni chiamata.",
    "floatBadgeDesc": "Regno Unito · Carrier A · Qualità 98.6%"
  },
  "highlights": [
    {
      "title": "Dialer basato su browser"
    },
    {
      "title": "Dialer mobile"
    },
    {
      "title": "Rotte globali A–Z"
    },
    {
      "title": "Composizione predittiva e progressiva"
    },
    {
      "title": "Monitoraggio chiamate in tempo reale"
    },
    {
      "title": "Analisi avanzate in tempo reale"
    }
  ],
  "desktopBadge": "Dialer Browser per Desktop",
  "desktopTitle": "Trasforma qualsiasi computer in un call center professionale",
  "desktopSubtitle": "Nessuna installazione complessa. Gli operatori effettuano l'accesso in sicurezza dal browser e possono iniziare a chiamare immediatamente.",
  "desktopFootnote": "Il tuo browser è il tuo spazio di lavoro. Accesso operatore sicuro senza software complessi.",
  "desktopFeaturesTitle": "Funzionalità",
  "desktopFeatures": [
    "Chiamate WebRTC da browser",
    "Accesso e gestione operatori",
    "Click-to-call integrato",
    "Gestione rubrica e contatti",
    "Cronologia chiamate",
    "Registrazione delle chiamate",
    "Trasferimento di chiamata",
    "Attesa e silenziamento",
    "Gestione esiti di chiamata (Disposizioni)",
    "Tracciamento stato operatore",
    "Statistiche chiamate in tempo reale"
  ],
  "desktopMainHeading": "Un unico dialer. Tutte le tue esigenze di chiamata.",
  "desktopWorkspaceTitle": "Il tuo browser è il tuo spazio operativo.",
  "desktopWorkspaceSubtitle": "Accesso sicuro per operatori. Nessuna installazione complicata.",
  "mobileBadge": "Dialer Mobile",
  "mobileTitle": "Porta le tue operazioni di chiamata ovunque",
  "mobileSubtitle": "Offri agli operatori remoti e sul campo un'esperienza di chiamata mobile professionale collegata all'infrastruttura telefonica aziendale.",
  "mobileFootnote": "Il tuo numero aziendale. Ovunque ti porti il lavoro.",
  "mobileFeaturesTitle": "Funzionalità Mobile",
  "mobileFeatures": [
    "Architettura compatibile Android e iOS",
    "Chiamate vocali SIP e WebRTC",
    "Sincronizzazione contatti",
    "Cronologia chiamate",
    "Click-to-call",
    "Gestione Caller ID aziendale",
    "Registrazione chiamate",
    "Stato disponibilità operatore",
    "Notifiche push",
    "Autenticazione sicura"
  ],
  "mobileSyncCard": {
    "title": "Contatti sempre sincronizzati.",
    "desc": "I tuoi clienti e la cronologia delle chiamate sempre con te.",
    "badge": "Sincronizzato adesso"
  },
  "mobileDialerMockup": {
    "title": "Dialer iNet",
    "greeting": "Buongiorno, Alex",
    "status": "Disponibile",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "ID Chiamante: iNet Business",
    "tabDialer": "Tastierino",
    "tabContacts": "Contatti",
    "tabHistory": "Cronologia"
  },
  "routesBadge": "Rotte Globali Avanzate A–Z",
  "routesTitle": "Raggiungi i clienti attraverso la rotta migliore",
  "routesSubtitle": "Connettiti a più operatori telefonici e gestisci il traffico vocale globale con intelligenza ed efficienza.",
  "routesFeaturesTitle": "Gestione Rotte",
  "routesFeatures": [
    "Destinazioni internazionali A–Z",
    "Integrazione multi-operatore",
    "Instradamento basato su prefisso",
    "Instradamento a minor costo (LCR)",
    "Instradamento basato sulla qualità",
    "Instradamento di failover e ridondanza",
    "Instradamento prioritario",
    "Instradamento per destinazione",
    "Monitoraggio performance operatori",
    "Gestione e controllo costi rotte"
  ],
  "routeControlCard": {
    "title": "Controllo rotte globali",
    "badge": "Rotte stabili",
    "agentCall": "Chiamata operatore",
    "smartRouting": "Instradamento smart",
    "smartRoutingDesc": "Migliore rotta disponibile",
    "carrier1": "Operatore A · Priorità 1",
    "carrier2": "Operatore B · Priorità 2",
    "carrier3": "Operatore C · Failover",
    "tableDest": "Destinazione",
    "tableCarrier": "Operatore",
    "tableQuality": "Qualità",
    "tableRate": "/ min",
    "note": "Destinazioni, qualità operatori e tariffe a scopo illustrativo."
  },
  "routesEngine": {
    "title": "Motore di Routing Intelligente",
    "desc": "Seleziona automaticamente la rotta migliore in base a destinazione, prezzo, qualità vocale, disponibilità e affidabilità dell'operatore.",
    "tags": [
      "Destinazione",
      "Prezzo",
      "Qualità",
      "Disponibilità",
      "Affidabilità operatore"
    ]
  },
  "monitoringBadge": "Monitoraggio Avanzato Call Center",
  "monitoringTitle": "Visibilità Completa del Tuo Call Center",
  "monitoringSubtitle": "Supervisiona l'intera operatività da una dashboard centralizzata in tempo reale.",
  "monitoringLiveHeader": "Monitoraggio dal vivo",
  "monitoringLiveSub": "Guarda cosa sta accadendo in questo momento.",
  "monitoringKpis": [
    {
      "label": "Chiamate attive",
      "value": "128"
    },
    {
      "label": "Chiamate in attesa",
      "value": "12"
    },
    {
      "label": "Operatori disponibili",
      "value": "36"
    },
    {
      "label": "Operatori occupati",
      "value": "64"
    },
    {
      "label": "Stato operatore",
      "value": "Live"
    },
    {
      "label": "Chiamate al secondo",
      "value": "8.4"
    },
    {
      "label": "Tasso di risposta",
      "value": "86.2%"
    },
    {
      "label": "Durata media chiamata",
      "value": "04:32"
    },
    {
      "label": "Chiamate contemporanee",
      "value": "140"
    },
    {
      "label": "Chiamate fallite",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Panoramica call center",
    "updateMeta": "Tutte le campagne • 08 Ott 2026",
    "note": "Dashboard live illustrativa • Monitora operatori, code e qualità vocale da un'unica schermata.",
    "cols": {
      "agent": "Operatore",
      "campaign": "Campagna",
      "status": "Stato",
      "duration": "Durata",
      "destination": "Destinazione",
      "supervisor": "Supervisore"
    }
  },
  "supervisorToolsTitle": "Strumenti per Supervisori",
  "supervisorToolsSubtitle": "Offri ai manager il pieno controllo per formare gli operatori e garantire la qualità.",
  "supervisorTools": [
    {
      "title": "Ascolto (Listen)",
      "desc": "Ascolta le chiamate in diretta in modo discreto per la garanzia della qualità."
    },
    {
      "title": "Suggerimento (Whisper)",
      "desc": "Guida l'operatore in tempo reale senza che il cliente senta la voce del supervisore."
    },
    {
      "title": "Intromissione (Barge-In)",
      "desc": "Entra attivamente nella conversazione quando è necessario intervenire direttamente."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Chiamate",
    "stat2": "86%",
    "stat2Sub": "Risposte",
    "title": "Wallboard in Tempo Reale",
    "desc": "Visualizza i KPI del call center su schermi giganti."
  },
  "dialingModesBadge": "Chiamate in uscita più intelligenti",
  "dialingModesTitle": "Modalità di Composizione Avanzate",
  "dialingModesSubtitle": "Scegli la strategia di chiamata adatta alle tue esigenze operative.",
  "dialingModes": [
    {
      "title": "Dialer Predittivo",
      "desc": "Chiama automaticamente più numeri contemporaneamente e collega le risposte agli operatori liberi.",
      "flow": "Chiamate multiple → Operatore disponibile",
      "tag": "CONTATTI AD ALTO VOLUME"
    },
    {
      "title": "Dialer Progressivo",
      "desc": "Avvia la chiamata al cliente successivo solo quando un operatore diventa effettivamente disponibile.",
      "flow": "Operatore libero → Cliente successivo",
      "tag": "COMPOSIZIONE AL RITMO DELL'OPERATORE"
    },
    {
      "title": "Power Dialer",
      "desc": "Scorre gli elenchi telefonici in automatico per massimizzare la produttività ed eliminare i tempi morti.",
      "flow": "Lista contatti → Chiamate continue",
      "tag": "PRODUTTIVITÀ FOCALIZZATA"
    },
    {
      "title": "Preview Dialer",
      "desc": "Consente all'operatore di visualizzare le informazioni e lo storico del cliente prima di avviare la chiamata.",
      "flow": "Revisione cliente → Avvio chiamata",
      "tag": "CONVERSAZIONI PERSONALIZZATE"
    }
  ],
  "analyticsBadge": "Analisi e Report delle Chiamate",
  "analyticsTitle": "Trasforma i Dati delle Chiamate in Risultati Commerciali",
  "analyticsSubtitle": "Traccia ogni dettaglio delle tue operazioni di chiamata.",
  "analyticsFeatures": [
    "Performance operatori",
    "Performance campagne",
    "Durata delle chiamate",
    "Tasso di risposta (ASR)",
    "Tasso di abbandono",
    "Tracciamento conversioni",
    "Esiti di chiamata (Disposizioni)",
    "Prestazioni delle rotte",
    "Performance dei carrier",
    "Analisi dettagliata dei costi",
    "Report orari, giornalieri e mensili",
    "Dettaglio completo delle chiamate (CDR)"
  ],
  "analyticsSubtext": "Dalle singole conversazioni ai costi degli operatori globali, mantieni la piena visibilità.",
  "analyticsCard": {
    "title": "Performance della campagna",
    "exportBtn": "Esporta",
    "tabHourly": "Orario",
    "tabDaily": "Giornaliero",
    "tabMonthly": "Mensile",
    "timeframe": "01–07 Ott 2026",
    "stat1Label": "Chiamate totali",
    "stat1Val": "1.842",
    "stat2Label": "Tasso di risposta",
    "stat2Val": "86.2%",
    "stat3Label": "Conversioni",
    "stat3Val": "18.4%",
    "legendCalls": "Chiamate",
    "legendAnswered": "Risposte",
    "dispositionTitle": "Esiti chiamata",
    "note": "Dati di report illustrativi • Esporta i dettagli di ogni singola chiamata."
  },
  "ctaBadge": "COSTRUIAMO LA TUA RETE DI MESSAGGISTICA E VOCE",
  "ctaTitle": "Fai Crescere la Tua Azienda con Soluzioni Professionali",
  "ctaSubtitle": "Dall'instradamento vocale intelligente e dalla terminazione internazionale alla voce AI e ai numeri virtuali, iNet Global offre soluzioni di comunicazione scalabili per connetterti con i clienti in tutto il mondo con chiarezza e affidabilità.",
  "getStarted": "Inizia ora",
  "contactUs": "Contattaci",
  "ctaTrust1": "SLA Dialer Aziendale",
  "ctaTrust2": "Attivazione WebRTC Istantanea",
  "ctaTrust3": "Supporto Dedicato 24/7"
};

const ko: DailerSolutionTranslation = {
  "heroBadge": "콜센터 다이얼러 솔루션",
  "heroTitle": "데스크톱 및 모바일을 위한 차세대 콜센터 다이얼러",
  "heroDesc": "하나의 강력한 통화 플랫폼을 통해 상담원, 고객 및 글로벌 통신 경로를 연결하세요. 브라우저 기반 데스크톱 다이얼러 또는 모바일 다이얼러를 활용하여 고급 라우팅, 실시간 모니터링, 분석 및 제어로 아웃바운드 통화를 스마트하게 관리하세요.",
  "requestDemo": "데모 신청",
  "exploreDialer": "다이얼러 둘러보기",
  "heroFootnote": "하나로 연결된 워크스페이스. 첫 통화부터 최종 보고서까지.",
  "heroMockup": {
    "title": "iNet 다이얼러",
    "agentStatus": "상담원 대기 중",
    "campaign": "고객 후속 관리",
    "campaignMeta": "프로그레시브 캠페인 • 오늘",
    "contactsCount": "128명 연락처",
    "connectedBadge": "연결됨 - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "통화 종료",
    "tabContact": "연락처",
    "tabHistory": "기록",
    "tabNotes": "메모",
    "customerDetailsTitle": "고객 상세 정보",
    "companyLabel": "회사",
    "companyVal": "Lawson & Co.",
    "emailLabel": "이메일",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "최근 통화",
    "lastContactVal": "2026년 10월 07일",
    "dispositionLabel": "통화 처리 결과",
    "dispositionVal": "후속 상담 예약됨",
    "recordingText": "녹음 진행 중",
    "stat1Label": "오늘 통화",
    "stat1Val": "46",
    "stat2Label": "연결 성공",
    "stat2Val": "38",
    "stat3Label": "통화 시간",
    "stat3Val": "02시간 18분",
    "floatBadgeTitle": "모든 통화에 최적화된 경로.",
    "floatBadgeDesc": "영국 · 통신사 A · 통화품질 98.6%"
  },
  "highlights": [
    {
      "title": "브라우저 기반 다이얼러"
    },
    {
      "title": "모바일 다이얼러"
    },
    {
      "title": "A–Z 글로벌 회선 경로"
    },
    {
      "title": "예측 및 프로그레시브 다이얼링"
    },
    {
      "title": "실시간 통화 모니터링"
    },
    {
      "title": "실시간 통계 및 분석"
    }
  ],
  "desktopBadge": "데스크톱 브라우저 다이얼러",
  "desktopTitle": "모든 컴퓨터를 프로페셔널 콜센터로 전환",
  "desktopSubtitle": "복잡한 프로그램 설치가 필요 없습니다. 상담원은 웹 브라우저를 통해 안전하게 로그인하고 즉시 전화를 걸 수 있습니다.",
  "desktopFootnote": "웹 브라우저가 바로 스마트한 작업 공간입니다. 복잡한 설치 없이 안전한 상담원 접속.",
  "desktopFeaturesTitle": "주요 기능",
  "desktopFeatures": [
    "WebRTC 브라우저 통화",
    "상담원 로그인 및 관리",
    "원클릭 통화 (Click-to-call)",
    "연락처 관리",
    "통화 이력 조회",
    "통화 녹음",
    "통화 호 전환",
    "통화 보류 및 음소거",
    "통화 처리 결과 (Disposition) 관리",
    "상담원 상태 실시간 추적",
    "실시간 통화 통계"
  ],
  "desktopMainHeading": "하나의 다이얼러. 모든 통화 요구 사항 충족.",
  "desktopWorkspaceTitle": "웹 브라우저가 바로 상담원의 통합 업무 공간입니다.",
  "desktopWorkspaceSubtitle": "안전한 상담원 액세스. 복잡한 프로그램 설치 불필요.",
  "mobileBadge": "모바일 다이얼러",
  "mobileTitle": "언제 어디서나 콜센터 업무를 스마트하게",
  "mobileSubtitle": "원격 및 현장 영업 상담원에게 엔터프라이즈 통화 인프라와 연결된 전문 모바일 통화 환경을 제공합니다.",
  "mobileFootnote": "어디서 업무를 보든 항상 비즈니스 대표 번호로 통화하세요.",
  "mobileFeaturesTitle": "모바일 기능",
  "mobileFeatures": [
    "Android 및 iOS 호환 아키텍처",
    "SIP 및 WebRTC 고음질 통화",
    "연락처 실시간 동기화",
    "통화 기록",
    "원클릭 통화",
    "발신 번호 (Caller ID) 관리",
    "통화 녹음",
    "상담원 대기 상태 관리",
    "푸시 알림 지원",
    "보안 인증"
  ],
  "mobileSyncCard": {
    "title": "연락처 실시간 동기화.",
    "desc": "고객 정보와 통화 기록이 언제나 함께합니다.",
    "badge": "방금 동기화됨"
  },
  "mobileDialerMockup": {
    "title": "iNet 다이얼러",
    "greeting": "좋은 아침입니다, Alex",
    "status": "대기 중",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "발신번호: iNet Business",
    "tabDialer": "다이얼러",
    "tabContacts": "연락처",
    "tabHistory": "기록"
  },
  "routesBadge": "고급 A–Z 글로벌 회선 경로",
  "routesTitle": "가장 안정적인 통신 경로를 통해 고객에게 연결",
  "routesSubtitle": "전 세계 다양한 통신사와 연결하여 국제 음성 트래픽을 지능적으로 라우팅하고 제어하세요.",
  "routesFeaturesTitle": "경로 관리",
  "routesFeatures": [
    "전 세계 A–Z 국제 목적지",
    "다중 통신사 연동",
    "국가/지역 번호 기반 라우팅",
    "최소 비용 라우팅 (LCR)",
    "품질 기반 최적 라우팅",
    "장애 대응 자동 장애 조치 (Failover)",
    "우선순위 라우팅",
    "목적지별 맞춤 라우팅",
    "통신사 성능 및 품질 모니터링",
    "통화 원가 및 요율 관리"
  ],
  "routeControlCard": {
    "title": "글로벌 경로 제어",
    "badge": "경로 정상",
    "agentCall": "상담원 통화",
    "smartRouting": "스마트 라우팅",
    "smartRoutingDesc": "최적 경로 자동 할당",
    "carrier1": "통신사 A · 우선순위 1",
    "carrier2": "통신사 B · 우선순위 2",
    "carrier3": "통신사 C · 백업",
    "tableDest": "목적지",
    "tableCarrier": "통신사",
    "tableQuality": "품질",
    "tableRate": "/ 분",
    "note": "표시된 목적지, 통신사 품질 및 요율은 예시입니다."
  },
  "routesEngine": {
    "title": "스마트 라우팅 엔진",
    "desc": "목적지, 요금, 통화 음질, 가용성 및 통신사 품질을 종합 평가하여 최적의 경로를 자동으로 선택합니다.",
    "tags": [
      "목적지",
      "요금",
      "품질",
      "가용성",
      "통신사 성능"
    ]
  },
  "monitoringBadge": "고급 콜센터 모니터링",
  "monitoringTitle": "콜센터 운영 현황에 대한 완전한 가시성",
  "monitoringSubtitle": "중앙 집중식 대시보드에서 전체 상담 및 통화 운영 현황을 실시간 파악하세요.",
  "monitoringLiveHeader": "실시간 모니터링",
  "monitoringLiveSub": "지금 이 순간 일어나는 상황을 즉시 확인하세요.",
  "monitoringKpis": [
    {
      "label": "통화 중 회선",
      "value": "128"
    },
    {
      "label": "대기 중 통화",
      "value": "12"
    },
    {
      "label": "대기 중 상담원",
      "value": "36"
    },
    {
      "label": "통화 중 상담원",
      "value": "64"
    },
    {
      "label": "상담원 상태",
      "value": "실시간"
    },
    {
      "label": "초당 통화수 (CPS)",
      "value": "8.4"
    },
    {
      "label": "응답률",
      "value": "86.2%"
    },
    {
      "label": "평균 통화 시간",
      "value": "04:32"
    },
    {
      "label": "동시 통화 수",
      "value": "140"
    },
    {
      "label": "실패한 통화",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "콜센터 실시간 개요",
    "updateMeta": "전체 캠페인 • 2026년 10월 08일",
    "note": "실시간 모니터링 대시보드 • 상담원, 대기열, 음질을 하나의 화면에서 확인하세요.",
    "cols": {
      "agent": "상담원",
      "campaign": "캠페인",
      "status": "상태",
      "duration": "통화시간",
      "destination": "목적지",
      "supervisor": "관리자"
    }
  },
  "supervisorToolsTitle": "관리자(슈퍼바이저) 도구",
  "supervisorToolsSubtitle": "상담원 코칭과 서비스 품질 관리를 위한 강력한 관리 기능을 제공합니다.",
  "supervisorTools": [
    {
      "title": "실시간 청취 (Listen)",
      "desc": "품질 평가를 위해 통화에 영향 없이 실시간으로 통화 내용을 모니터링합니다."
    },
    {
      "title": "위스퍼링 (Whisper)",
      "desc": "고객에게는 들리지 않고 상담원에게만 실시간 코칭과 조언을 전달합니다."
    },
    {
      "title": "통화 개입 (Barge-In)",
      "desc": "중요한 순간에 상담 통화에 즉시 개입하여 3자 통화로 전환합니다."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "총 통화",
    "stat2": "86%",
    "stat2Sub": "응답률",
    "title": "실시간 대형 현황판 (Wallboard)",
    "desc": "콜센터의 주요 핵심 지표를 대형 스크린에 실시간으로 표시합니다."
  },
  "dialingModesBadge": "더 스마트한 아웃바운드 통화",
  "dialingModesTitle": "고급 다이얼링 모드",
  "dialingModesSubtitle": "비즈니스 운영 목표에 딱 맞는 맞춤형 다이얼링 전략을 선택하세요.",
  "dialingModes": [
    {
      "title": "예측 다이얼러 (Predictive Dialer)",
      "desc": "여러 번호로 동시 자동 발신 후, 응답한 고객만을 대기 중인 상담원에게 즉시 연결합니다.",
      "flow": "다중 발신 → 대기 상담원 연결",
      "tag": "대규모 아웃바운드 캠페인"
    },
    {
      "title": "프로그레시브 다이얼러 (Progressive Dialer)",
      "desc": "상담원이 통화를 마칠 때만 다음 고객에게 순차적으로 자동 발신합니다.",
      "flow": "상담원 대기 → 다음 고객 발신",
      "tag": "안정적인 상담원 중심 발신"
    },
    {
      "title": "파워 다이얼러 (Power Dialer)",
      "desc": "연락처 목록을 자동으로 순차 발신하여 상담원의 유휴 시간을 최소화합니다.",
      "flow": "연락처 목록 → 연속 발신",
      "tag": "생산성 극대화 모드"
    },
    {
      "title": "프리뷰 다이얼러 (Preview Dialer)",
      "desc": "전화를 걸기 전 상담원이 고객 정보와 상담 이력을 충분히 검토한 뒤 발신합니다.",
      "flow": "고객 정보 검토 → 통화 시작",
      "tag": "맞춤형 VIP 상담"
    }
  ],
  "analyticsBadge": "통화 분석 및 리포트",
  "analyticsTitle": "통화 데이터를 활용해 비즈니스 성과를 극대화하세요",
  "analyticsSubtitle": "아웃바운드 및 인바운드 콜센터의 모든 핵심 지표를 정밀하게 추적합니다.",
  "analyticsFeatures": [
    "상담원별 성과 분석",
    "캠페인별 성과 지표",
    "평균 통화 시간",
    "응답률 (ASR)",
    "포기율",
    "전환율 추적",
    "통화 결과 (Disposition) 통계",
    "회선 경로 성능",
    "통신사별 품질 비교",
    "상세 원가 분석",
    "시간/일/월별 통계 보고서",
    "상세 통화 내역 로그 (CDR)"
  ],
  "analyticsSubtext": "개별 상담 기록부터 글로벌 통신망 비용까지, 전체적인 운영 현황을 투명하게 파악하세요.",
  "analyticsCard": {
    "title": "캠페인 성과 리포트",
    "exportBtn": "내보내기",
    "tabHourly": "시간별",
    "tabDaily": "일별",
    "tabMonthly": "월별",
    "timeframe": "2026년 10월 01일–07일",
    "stat1Label": "총 통화 수",
    "stat1Val": "1,842",
    "stat2Label": "응답률",
    "stat2Val": "86.2%",
    "stat3Label": "전환 성공",
    "stat3Val": "18.4%",
    "legendCalls": "총 발신",
    "legendAnswered": "응답 완료",
    "dispositionTitle": "통화 결과 분포",
    "note": "리포트 샘플 데이터 • 모든 통화의 상세 내역을 엑셀 및 CSV로 내보낼 수 있습니다."
  },
  "ctaBadge": "귀사의 비즈니스 통신 네트워크를 구축하세요",
  "ctaTitle": "엔터프라이즈 통신 솔루션으로 비즈니스를 확장하세요",
  "ctaSubtitle": "지능형 음성 라우팅 및 글로벌 회선 종단부터 AI 음성, 가상 번호에 이르기까지, iNet Global은 기업이 전 세계 고객과 선명하고 신뢰성 있게 소통할 수 있도록 지원합니다.",
  "getStarted": "시작하기",
  "contactUs": "문의하기",
  "ctaTrust1": "엔터프라이즈 다이얼러 SLA",
  "ctaTrust2": "즉각적인 WebRTC 활성화",
  "ctaTrust3": "24/7 전담 기술 지원"
};

const nl: DailerSolutionTranslation = {
  "heroBadge": "CALLCENTER DIALER OPLOSSING",
  "heroTitle": "Next-Generation Callcenter Dialer voor Desktop & Mobiel",
  "heroDesc": "Verbind uw agenten, klanten en wereldwijde routes via één krachtig communicatieplatform. Gebruik onze browsergebaseerde desktop dialer of mobiele dialer om uitgaande gesprekken te beheren met geavanceerde routering, live monitoring, analytics en realtime controle.",
  "requestDemo": "Demo aanvragen",
  "exploreDialer": "Ontdek Dialer",
  "heroFootnote": "Eén verbonden werkplek. Van het eerste gesprek tot het eindrapport.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Agent beschikbaar",
    "campaign": "Klant follow-up",
    "campaignMeta": "Progressieve campagne • Vandaag",
    "contactsCount": "128 contacten",
    "connectedBadge": "Verbonden - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Gesprek beëindigen",
    "tabContact": "Contact",
    "tabHistory": "Geschiedenis",
    "tabNotes": "Notities",
    "customerDetailsTitle": "KLANTGEGEVENS",
    "companyLabel": "Bedrijf",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Laatste contact",
    "lastContactVal": "07 okt 2026",
    "dispositionLabel": "GESPREKSSTATUS",
    "dispositionVal": "Follow-up ingepland",
    "recordingText": "Opname actief",
    "stat1Label": "Gesprekken vandaag",
    "stat1Val": "46",
    "stat2Label": "Verbonden",
    "stat2Val": "38",
    "stat3Label": "Gesprekstijd",
    "stat3Val": "02u 18m",
    "floatBadgeTitle": "De juiste route. Elk gesprek.",
    "floatBadgeDesc": "VK · Provider A · Kwaliteit 98.6%"
  },
  "highlights": [
    {
      "title": "Browsergebaseerde dialer"
    },
    {
      "title": "Mobiele dialer"
    },
    {
      "title": "A–Z wereldwijde routes"
    },
    {
      "title": "Predictief & progressief bellen"
    },
    {
      "title": "Live gespreksmonitoring"
    },
    {
      "title": "Realtime analytics & rapportage"
    }
  ],
  "desktopBadge": "Desktop Browser Dialer",
  "desktopTitle": "Verander elke computer in een professioneel callcenter",
  "desktopSubtitle": "Geen ingewikkelde software-installatie. Agenten loggen veilig in via hun browser en kunnen direct beginnen met bellen.",
  "desktopFootnote": "Uw browser is uw werkplek. Veilige agent-toegang zonder gecompliceerde installaties.",
  "desktopFeaturesTitle": "Functies",
  "desktopFeatures": [
    "WebRTC browsertelefonie",
    "Agent login & beheer",
    "Click-to-call",
    "Contactbeheer",
    "Oproepgeschiedenis",
    "Gespreksopname",
    "Doorverbinden van gesprekken",
    "In de wacht & dempen",
    "Gespreksstatusbeheer (Disposities)",
    "Statusregistratie van agenten",
    "Realtime gespreksstatistieken"
  ],
  "desktopMainHeading": "Eén dialer. Voor elke telefoniebehoefte.",
  "desktopWorkspaceTitle": "Uw browser is uw complete werkomgeving.",
  "desktopWorkspaceSubtitle": "Veilige toegang voor medewerkers. Geen complexe installaties vereist.",
  "mobileBadge": "Mobiele Dialer",
  "mobileTitle": "Neem uw belactiviteiten overal mee naartoe",
  "mobileSubtitle": "Bied externe medewerkers en buitendienstmedewerkers een professionele mobiele belervaring die naadloos aansluit op uw bedrijfstelefonie.",
  "mobileFootnote": "Uw zakelijke telefoonnummer. Waar u ook werkt.",
  "mobileFeaturesTitle": "Mobiele Functies",
  "mobileFeatures": [
    "Compatibel met Android en iOS",
    "SIP & WebRTC bellen",
    "Contactsynchronisatie",
    "Oproepgeschiedenis",
    "Click-to-call",
    "Caller ID beheer",
    "Gespreksopname",
    "Beschikbaarheidsstatus agent",
    "Pushmeldingen",
    "Beveiligde authenticatie"
  ],
  "mobileSyncCard": {
    "title": "Contacten altijd synchroon.",
    "desc": "Uw klanten en gesprekshistorie altijd bij de hand.",
    "badge": "Zojuist gesynchroniseerd"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Goedemorgen, Alex",
    "status": "Beschikbaar",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Nummerweergave: iNet Business",
    "tabDialer": "Kiezer",
    "tabContacts": "Contacten",
    "tabHistory": "Historie"
  },
  "routesBadge": "Geavanceerde A–Z Wereldwijde Routes",
  "routesTitle": "Bereik klanten via de meest betrouwbare route",
  "routesSubtitle": "Koppel met meerdere telecomproviders en beheer uw internationale spraakverkeer intelligent en kosteneffectief.",
  "routesFeaturesTitle": "Routebeheer",
  "routesFeatures": [
    "A–Z internationale bestemmingen",
    "Multi-carrier integratie",
    "Routering op basis van netnummer",
    "Least-Cost Routing (LCR)",
    "Routering op basis van geluidskwaliteit",
    "Failover en noodroutering",
    "Prioriteitsroutering",
    "Routering per bestemming",
    "Prestatiebewaking van providers",
    "Kostenbeheersing van routes"
  ],
  "routeControlCard": {
    "title": "Wereldwijd routebeheer",
    "badge": "Routes stabiel",
    "agentCall": "Agent gesprek",
    "smartRouting": "Slimme routering",
    "smartRoutingDesc": "Beste beschikbare route",
    "carrier1": "Provider A · Prioriteit 1",
    "carrier2": "Provider B · Prioriteit 2",
    "carrier3": "Provider C · Uitvalbeveiliging",
    "tableDest": "Bestemming",
    "tableCarrier": "Provider",
    "tableQuality": "Kwaliteit",
    "tableRate": "/ min",
    "note": "Bestemmingen, kwaliteit en tarieven zijn ter illustratie."
  },
  "routesEngine": {
    "title": "Slimme Routeringsengine",
    "desc": "Selecteert automatisch de beste route op basis van bestemming, tarief, audiokwaliteit, beschikbaarheid en providerprestaties.",
    "tags": [
      "Bestemming",
      "Prijs",
      "Kwaliteit",
      "Beschikbaarheid",
      "Providerprestaties"
    ]
  },
  "monitoringBadge": "Geavanceerde Callcenter Monitoring",
  "monitoringTitle": "Volledig Inzicht in Uw Callcenter",
  "monitoringSubtitle": "Bewaak uw gehele operatie vanuit een centraal realtime dashboard.",
  "monitoringLiveHeader": "Live Monitoring",
  "monitoringLiveSub": "Bekijk direct wat er nu gebeurt.",
  "monitoringKpis": [
    {
      "label": "Actieve gesprekken",
      "value": "128"
    },
    {
      "label": "Wachtende gesprekken",
      "value": "12"
    },
    {
      "label": "Beschikbare agenten",
      "value": "36"
    },
    {
      "label": "Bezet",
      "value": "64"
    },
    {
      "label": "Status agent",
      "value": "Live"
    },
    {
      "label": "Gesprekken per seconde",
      "value": "8.4"
    },
    {
      "label": "Beantwoordingspercentage",
      "value": "86.2%"
    },
    {
      "label": "Gemiddelde gespreksduur",
      "value": "04:32"
    },
    {
      "label": "Gelijktijdige gesprekken",
      "value": "140"
    },
    {
      "label": "Mislukte oproepen",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Callcenter overzicht",
    "updateMeta": "Alle campagnes • 08 okt 2026",
    "note": "Illustratief live dashboard • Bewaak agenten, wachtrijen en geluidskwaliteit vanuit één werkruimte.",
    "cols": {
      "agent": "Agent",
      "campaign": "Campagne",
      "status": "Status",
      "duration": "Duur",
      "destination": "Bestemming",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Supervisor Hulpmiddelen",
  "supervisorToolsSubtitle": "Geef managers volledige controle over coaching en kwaliteitsbewaking.",
  "supervisorTools": [
    {
      "title": "Meeluisteren (Listen)",
      "desc": "Volg gesprekken live om de servicekwaliteit discreet te beoordelen."
    },
    {
      "title": "Fluisteren (Whisper)",
      "desc": "Coach de agent tijdens het gesprek zonder dat de klant de supervisor hoort."
    },
    {
      "title": "Inbreken (Barge-In)",
      "desc": "Neem direct deel aan het actieve gesprek wanneer interventie vereist is."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Oproepen",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Realtime Wallboard",
    "desc": "Toon live callcenter statistieken op grote schermen in de werkruimte."
  },
  "dialingModesBadge": "Slimmer uitgaand bellen",
  "dialingModesTitle": "Geavanceerde Belmodi",
  "dialingModesSubtitle": "Kies de belstrategie die perfect aansluit op uw workflow.",
  "dialingModes": [
    {
      "title": "Predictive Dialer",
      "desc": "Belt automatisch meerdere telefoonnummers en verbindt aangenomen oproepen direct door naar vrije agenten.",
      "flow": "Meerdere oproepen → Vrije agent",
      "tag": "GROOTSCHALIGE OUTREACH"
    },
    {
      "title": "Progressive Dialer",
      "desc": "Belt de volgende klant pas wanneer een agent daadwerkelijk vrij en beschikbaar is.",
      "flow": "Vrije agent → Volgende klant",
      "tag": "BELLEN IN HET TEMPO VAN DE AGENT"
    },
    {
      "title": "Power Dialer",
      "desc": "Doorloopt contactlijsten automatisch na elkaar om de productiviteit van agenten te maximaliseren.",
      "flow": "Contactlijst → Continu bellen",
      "tag": "FOCUS OP PRODUCTIVITEIT"
    },
    {
      "title": "Preview Dialer",
      "desc": "Stelt agenten in staat klantinformatie en voorgeschiedenis vooraf in te zien alvorens te bellen.",
      "flow": "Klant bekijken → Gesprek starten",
      "tag": "GEPERSONALISEERDE GESPREKKEN"
    }
  ],
  "analyticsBadge": "Gespreksanalyses & Rapportages",
  "analyticsTitle": "Zet Gespreksdata om in Betere Prestaties",
  "analyticsSubtitle": "Volg elk aspect van uw telefonische operatie nauwkeurig.",
  "analyticsFeatures": [
    "Prestaties van agenten",
    "Campagneresultaten",
    "Gespreksduur",
    "Beantwoordingspercentage (ASR)",
    "Verlaten oproepen",
    "Conversietracking",
    "Gespreksstatussen (Disposities)",
    "Routeprestaties",
    "Providerprestaties",
    "Kostenanalyse",
    "Uurlijkse, dagelijkse en maandelijkse rapporten",
    "Gedetailleerde gespreksverslagen (CDR)"
  ],
  "analyticsSubtext": "Van individuele gesprekken tot wereldwijde providerkosten: houd het volledige overzicht.",
  "analyticsCard": {
    "title": "Campagneprestaties",
    "exportBtn": "Exporteren",
    "tabHourly": "Per uur",
    "tabDaily": "Dagelijks",
    "tabMonthly": "Maandelijks",
    "timeframe": "01–07 okt 2026",
    "stat1Label": "Totaal oproepen",
    "stat1Val": "1.842",
    "stat2Label": "Beantwoord",
    "stat2Val": "86.2%",
    "stat3Label": "Conversies",
    "stat3Val": "18.4%",
    "legendCalls": "Oproepen",
    "legendAnswered": "Beantwoord",
    "dispositionTitle": "Gespreksuitkomsten",
    "note": "Illustratieve rapportdata • Exporteer alle details van elk gesprek."
  },
  "ctaBadge": "LATEN WE UW COMMUNICATIENETWERK BOUWEN",
  "ctaTitle": "Laat Uw Bedrijf Groeien met Zakelijke SMS- & Spraakoplossingen",
  "ctaSubtitle": "Van intelligente spraakroutering en internationale terminatie tot AI Voice en virtuele nummers: iNet Global biedt schaalbare communicatieoplossingen waarmee bedrijven helder en betrouwbaar contact leggen met klanten wereldwijd.",
  "getStarted": "Aan de slag",
  "contactUs": "Neem contact op",
  "ctaTrust1": "Enterprise Dialer SLA",
  "ctaTrust2": "Directe WebRTC Activatie",
  "ctaTrust3": "24/7 Toegewijde Ondersteuning"
};

const tr: DailerSolutionTranslation = {
  "heroBadge": "ÇAĞRI MERKEZİ DİALER ÇÖZÜMÜ",
  "heroTitle": "Masaüstü ve Mobil İçin Yeni Nesil Çağrı Merkezi Çeviricisi",
  "heroDesc": "Müşteri temsilcilerinizi, müşterilerinizi ve küresel ses hatlarınızı tek bir güçlü arama platformunda birleştirin. Gelişmiş yönlendirme, canlı izleme, analitik ve gerçek zamanlı kontrol ile dış aramalarınızı yönetmek için tarayıcı tabanlı masaüstü veya mobil çeviricimizi kullanın.",
  "requestDemo": "Demo Talep Edin",
  "exploreDialer": "Çeviriciyi Keşfedin",
  "heroFootnote": "Tek bir entegre çalışma alanı. İlk aramadan nihai rapora kadar.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Temsilci müsait",
    "campaign": "Müşteri takibi",
    "campaignMeta": "Aşamalı kampanya • Bugün",
    "contactsCount": "128 kişi",
    "connectedBadge": "Bağlandı - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Aramayı sonlandır",
    "tabContact": "Kişi",
    "tabHistory": "Geçmiş",
    "tabNotes": "Notlar",
    "customerDetailsTitle": "MÜŞTERİ BİLGİLERİ",
    "companyLabel": "Şirket",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-posta",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Son görüşme",
    "lastContactVal": "07 Eki 2026",
    "dispositionLabel": "ÇAĞRI SONUCU",
    "dispositionVal": "Geri arama planlandı",
    "recordingText": "Ses kaydı sürüyor",
    "stat1Label": "Bugünkü aramalar",
    "stat1Val": "46",
    "stat2Label": "Bağlanan",
    "stat2Val": "38",
    "stat3Label": "Konuşma süresi",
    "stat3Val": "02s 18d",
    "floatBadgeTitle": "Doğru hat. Her aramada.",
    "floatBadgeDesc": "İngiltere · Operatör A · Kalite %98.6"
  },
  "highlights": [
    {
      "title": "Tarayıcı Tabanlı Çevirici"
    },
    {
      "title": "Mobil Çevirici"
    },
    {
      "title": "A–Z Küresel Hatlar"
    },
    {
      "title": "Tahmine Dayalı ve Aşamalı Arama"
    },
    {
      "title": "Canlı Çağrı İzleme"
    },
    {
      "title": "Gerçek Zamanlı Analitik"
    }
  ],
  "desktopBadge": "Masaüstü Tarayıcı Çeviricisi",
  "desktopTitle": "Her Bilgisayarı Profesyonel Bir Çağrı Merkezine Dönüştürün",
  "desktopSubtitle": "Karmaşık yazılım kurulumlarına son. Temsilciler tarayıcılarından güvenle oturum açıp anında arama yapmaya başlayabilir.",
  "desktopFootnote": "Tarayıcınız çalışma alanınızdır. Karmaşık kurulum gerektirmeyen güvenli temsilci erişimi.",
  "desktopFeaturesTitle": "Özellikler",
  "desktopFeatures": [
    "WebRTC tarayıcı araması",
    "Temsilci girişi ve yönetimi",
    "Tek tıkla ara (Click-to-call)",
    "Kişi yönetimi",
    "Çağrı geçmişi",
    "Ses kaydı alma",
    "Çağrı aktarma",
    "Bekletme ve sessize alma",
    "Çağrı sonuç kodu (Disposition) yönetimi",
    "Temsilci durum takibi",
    "Gerçek zamanlı arama istatistikleri"
  ],
  "desktopMainHeading": "Tek Bir Çevirici. Tüm Arama İhtiyaçlarınız.",
  "desktopWorkspaceTitle": "Tarayıcınız artık çalışma alanınız.",
  "desktopWorkspaceSubtitle": "Güvenli temsilci erişimi. Karmaşık yazılım kurulumlarına gerek yok.",
  "mobileBadge": "Mobil Çevirici",
  "mobileTitle": "Çağrı Operasyonlarınızı Her Yere Taşıyın",
  "mobileSubtitle": "Uzaktan ve sahada çalışan temsilcilerinize kurumsal santral altyapınıza bağlı profesyonel bir mobil arama deneyimi sunun.",
  "mobileFootnote": "İş numaranız. Çalışma sizi nereye götürürse götürsün yanınızda.",
  "mobileFeaturesTitle": "Mobil Özellikler",
  "mobileFeatures": [
    "Android ve iOS uyumlu mimari",
    "SIP ve WebRTC üzerinden arama",
    "Kişi senkronizasyonu",
    "Arama geçmişi",
    "Tek tıkla arama",
    "Arayan numara (Caller ID) yönetimi",
    "Ses kaydı",
    "Temsilci uygunluk durumu",
    "Anlık bildirimler",
    "Güvenli kimlik doğrulama"
  ],
  "mobileSyncCard": {
    "title": "Kişiler daima senkronize.",
    "desc": "Müşterileriniz ve arama geçmişiniz her zaman yanınızda.",
    "badge": "Az önce eşitlendi"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Günaydın, Alex",
    "status": "Müsait",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Arayan No: iNet Business",
    "tabDialer": "Çevirici",
    "tabContacts": "Kişiler",
    "tabHistory": "Geçmiş"
  },
  "routesBadge": "Gelişmiş A–Z Küresel Hatlar",
  "routesTitle": "Müşterilerinize En Doğru ve Kaliteli Hatla Ulaşın",
  "routesSubtitle": "Birden fazla telekom operatörü ve tedarikçisine bağlanarak uluslararası ses trafiğinizi akıllıca yönetin.",
  "routesFeaturesTitle": "Hat Yönetimi",
  "routesFeatures": [
    "A–Z uluslararası varış noktaları",
    "Çoklu operatör entegrasyonu",
    "Alan koduna göre yönlendirme",
    "En düşük maliyetli yönlendirme (LCR)",
    "Kalite odaklı yönlendirme",
    "Yedek hat ve otomatik yönlendirme (Failover)",
    "Öncelikli yönlendirme",
    "Hedef bazlı yönlendirme",
    "Operatör performans izleme",
    "Hat maliyet yönetimi"
  ],
  "routeControlCard": {
    "title": "Küresel hat kontrolü",
    "badge": "Hatlar sağlıklı",
    "agentCall": "Temsilci araması",
    "smartRouting": "Akıllı yönlendirme",
    "smartRoutingDesc": "Mevcut en iyi hat",
    "carrier1": "Operatör A · Öncelik 1",
    "carrier2": "Operatör B · Öncelik 2",
    "carrier3": "Operatör C · Yedek",
    "tableDest": "Hedef",
    "tableCarrier": "Operatör",
    "tableQuality": "Kalite",
    "tableRate": "/ dk",
    "note": "Örnek hedefler, operatör kalitesi ve tarifeler."
  },
  "routesEngine": {
    "title": "Akıllı Yönlendirme Motoru",
    "desc": "Hedef, fiyat, ses kalitesi, hat erişilebilirliği ve operatör performansına göre en iyi rotayı otomatik seçer.",
    "tags": [
      "Hedef",
      "Fiyat",
      "Kalite",
      "Erişilebilirlik",
      "Operatör performansı"
    ]
  },
  "monitoringBadge": "Gelişmiş Çağrı Merkezi İzleme",
  "monitoringTitle": "Çağrı Merkezinizin Tüm Süreçlerine Tam Hakimiyet",
  "monitoringSubtitle": "Tüm operasyonunuzu merkezi ve canlı bir kontrol panelinden izleyin.",
  "monitoringLiveHeader": "Canlı İzleme",
  "monitoringLiveSub": "Şu anda neler olduğunu anlık görün.",
  "monitoringKpis": [
    {
      "label": "Aktif aramalar",
      "value": "128"
    },
    {
      "label": "Bekleyen aramalar",
      "value": "12"
    },
    {
      "label": "Müsait temsilciler",
      "value": "36"
    },
    {
      "label": "Meşgul temsilciler",
      "value": "64"
    },
    {
      "label": "Temsilci durumu",
      "value": "Canlı"
    },
    {
      "label": "Saniye başına çağrı",
      "value": "8.4"
    },
    {
      "label": "Cevaplama oranı",
      "value": "86.2%"
    },
    {
      "label": "Ortalama görüşme",
      "value": "04:32"
    },
    {
      "label": "Eşzamanlı çağrı",
      "value": "140"
    },
    {
      "label": "Başarısız çağrılar",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Çağrı merkezi genel görünümü",
    "updateMeta": "Tüm kampanyalar • 08 Eki 2026",
    "note": "Canlı izleme paneli • Temsilcileri, kuyrukları ve çağrı kalitesini tek ekrandan takip edin.",
    "cols": {
      "agent": "Temsilci",
      "campaign": "Kampanya",
      "status": "Durum",
      "duration": "Süre",
      "destination": "Hedef",
      "supervisor": "Süpervizör"
    }
  },
  "supervisorToolsTitle": "Süpervizör Araçları",
  "supervisorToolsSubtitle": "Yöneticilere temsilci performansını ve hizmet kalitesini artıracak eksiksiz araçlar sunun.",
  "supervisorTools": [
    {
      "title": "Dinleme (Listen)",
      "desc": "Kalite kontrol amacıyla devam eden çağrıları hissettirmeden canlı dinleyin."
    },
    {
      "title": "Fısıldama (Whisper)",
      "desc": "Müşteri duymadan temsilciye görüşme esnasında canlı destek ve taktik verin."
    },
    {
      "title": "Araya Girme (Barge-In)",
      "desc": "Gerektiğinde görüşmeye doğrudan dahil olarak 3'lü konferansa dönüştürün."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Çağrı",
    "stat2": "86%",
    "stat2Sub": "Cevap",
    "title": "Gerçek Zamanlı Wallboard",
    "desc": "Çağrı merkezinin canlı KPI'larını büyük bilgi ekranlarına yansıtın."
  },
  "dialingModesBadge": "Daha akıllı dış aramalar",
  "dialingModesTitle": "Gelişmiş Arama Modları",
  "dialingModesSubtitle": "Operasyonunuza en uygun otomatik arama stratejisini seçin.",
  "dialingModes": [
    {
      "title": "Tahmine Dayalı Çevirici (Predictive)",
      "desc": "Aynı anda birden fazla numarayı otomatik arar ve yanıtlanan çağrıları boşta olan temsilcilere anında bağlar.",
      "flow": "Çoklu arama → Müsait temsilci",
      "tag": "YÜKSEK HACİMLİ ARAMALAR"
    },
    {
      "title": "Aşamalı Çevirici (Progressive)",
      "desc": "Bir sonraki müşteriyi yalnızca bir temsilci görüşmesini bitirip boşa çıktığında arar.",
      "flow": "Müsait temsilci → Sonraki müşteri",
      "tag": "TEMSİLCİ TEMPOLU ARAMA"
    },
    {
      "title": "Güç Çeviricisi (Power Dialer)",
      "desc": "Temsilcinin bekleme süresini sıfıra indirmek için kişi listelerini sırayla otomatik çevirir.",
      "flow": "Kişi listesi → Kesintisiz arama",
      "tag": "ODAKLANMIŞ VERİMLİLİK"
    },
    {
      "title": "Önizlemeli Çevirici (Preview)",
      "desc": "Temsilcinin aramayı başlatmadan önce müşteri bilgilerini ve geçmişini incelemesine olanak tanır.",
      "flow": "Kayıt inceleme → Aramayı başlatma",
      "tag": "KİŞİSELLEŞTİRİLMİŞ DİYALOGLAR"
    }
  ],
  "analyticsBadge": "Çağrı Analitiği ve Raporlar",
  "analyticsTitle": "Arama Verilerini Satış ve Hizmet Başarısına Dönüştürün",
  "analyticsSubtitle": "Arama operasyonunuzun her aşamasını derinlemesine takip edin.",
  "analyticsFeatures": [
    "Temsilci performansı",
    "Kampanya performansı",
    "Görüşme süreleri",
    "Cevaplama oranı (ASR)",
    "Terk edilme oranı",
    "Dönüşüm takibi",
    "Çağrı sonuç kodları (Dispositions)",
    "Hat performansı",
    "Operatör kalite değerlendirmesi",
    "Detaylı maliyet analizi",
    "Saatlik, günlük ve aylık raporlar",
    "Ayrıntılı çağrı kayıtları (CDR)"
  ],
  "analyticsSubtext": "Tek tek diyaloglardan küresel operatör maliyetlerine kadar tüm tabloyu net biçimde görün.",
  "analyticsCard": {
    "title": "Kampanya performansı",
    "exportBtn": "Dışa aktar",
    "tabHourly": "Saatlik",
    "tabDaily": "Günlük",
    "tabMonthly": "Aylık",
    "timeframe": "01–07 Eki 2026",
    "stat1Label": "Toplam arama",
    "stat1Val": "1.842",
    "stat2Label": "Cevaplama oranı",
    "stat2Val": "86.2%",
    "stat3Label": "Dönüşümler",
    "stat3Val": "18.4%",
    "legendCalls": "Aramalar",
    "legendAnswered": "Cevaplanan",
    "dispositionTitle": "Çağrı sonuçları",
    "note": "Örnek rapor verileri • Her aramanın ayrıntılı dökümünü dışa aktarın."
  },
  "ctaBadge": "İLETİŞİM AĞINIZI BİRLİKTE kURALIM",
  "ctaTitle": "Kurumsal İletişim Çözümleriyle İşinizi Büyütün",
  "ctaSubtitle": "Akıllı ses yönlendirmesinden uluslararası ses sonlandırmaya, Yapay Zeka Ses teknolojisinden sanal numaralara kadar iNet Global, şirketlerin dünya çapındaki müşterileriyle net ve güvenilir bağ kurmasını sağlar.",
  "getStarted": "Hemen Başlayın",
  "contactUs": "Bize Ulaşın",
  "ctaTrust1": "Kurumsal Düzeyde Dialer SLA",
  "ctaTrust2": "Anında WebRTC Aktivasyonu",
  "ctaTrust3": "7/24 Kesintisiz Destek"
};

const id: DailerSolutionTranslation = {
  "heroBadge": "SOLUSI DIALER CALL CENTER",
  "heroTitle": "Dialer Call Center Generasi Terbaru untuk Desktop & Seluler",
  "heroDesc": "Hubungkan agen, pelanggan, dan rute panggilan global Anda melalui satu platform terpadu yang andal. Gunakan dialer browser desktop atau aplikasi seluler kami untuk mengelola panggilan keluar dengan perutean pintar, pemantauan langsung, analitik, dan kontrol waktu nyata.",
  "requestDemo": "Minta Demo",
  "exploreDialer": "Jelajahi Dialer",
  "heroFootnote": "Satu ruang kerja terintegrasi. Dari panggilan pertama hingga laporan akhir.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Agen siap",
    "campaign": "Tindak lanjut pelanggan",
    "campaignMeta": "Kampanye progresif • Hari ini",
    "contactsCount": "128 kontak",
    "connectedBadge": "Terhubung - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Akhiri panggilan",
    "tabContact": "Kontak",
    "tabHistory": "Riwayat",
    "tabNotes": "Catatan",
    "customerDetailsTitle": "DETAIL PELANGGAN",
    "companyLabel": "Perusahaan",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Email",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Kontak terakhir",
    "lastContactVal": "07 Okt 2026",
    "dispositionLabel": "HASIL PANGGILAN",
    "dispositionVal": "Jadwal tindak lanjut",
    "recordingText": "Merekam percakapan",
    "stat1Label": "Panggilan hari ini",
    "stat1Val": "46",
    "stat2Label": "Terhubung",
    "stat2Val": "38",
    "stat3Label": "Waktu bicara",
    "stat3Val": "02j 18m",
    "floatBadgeTitle": "Rute tepat. Setiap panggilan.",
    "floatBadgeDesc": "Inggris · Operator A · Kualitas 98.6%"
  },
  "highlights": [
    {
      "title": "Dialer Berbasis Browser"
    },
    {
      "title": "Dialer Seluler"
    },
    {
      "title": "Rute Global Lengkap A–Z"
    },
    {
      "title": "Panggilan Prediktif & Progresif"
    },
    {
      "title": "Pemantauan Panggilan Langsung"
    },
    {
      "title": "Analitik Waktu Nyata"
    }
  ],
  "desktopBadge": "Dialer Browser Desktop",
  "desktopTitle": "Ubah Komputer Mana Pun Menjadi Call Center Profesional",
  "desktopSubtitle": "Tanpa instalasi aplikasi rumit. Agen dapat masuk dengan aman melalui browser dan langsung melakukan panggilan.",
  "desktopFootnote": "Browser Anda adalah ruang kerja Anda. Akses agen yang aman tanpa konfigurasi yang rumit.",
  "desktopFeaturesTitle": "Fitur Unggulan",
  "desktopFeatures": [
    "Panggilan browser WebRTC",
    "Login & manajemen agen",
    "Klik untuk memanggil (Click-to-call)",
    "Manajemen data kontak",
    "Riwayat panggilan",
    "Perekaman panggilan",
    "Transfer panggilan",
    "Tahan & bisukan (Hold & mute)",
    "Manajemen hasil panggilan (Disposition)",
    "Pelacakan status agen",
    "Statistik panggilan waktu nyata"
  ],
  "desktopMainHeading": "Satu Dialer. Memenuhi Semua Kebutuhan Panggilan Bisnis.",
  "desktopWorkspaceTitle": "Browser Anda adalah ruang kerja terintegrasi Anda.",
  "desktopWorkspaceSubtitle": "Akses agen yang aman tanpa instalasi aplikasi yang rumit.",
  "mobileBadge": "Dialer Seluler",
  "mobileTitle": "Bawa Operasional Panggilan Anda ke Mana Saja",
  "mobileSubtitle": "Berikan agen jarak jauh dan lapangan pengalaman panggilan seluler profesional yang terhubung langsung ke infrastruktur telekomunikasi bisnis Anda.",
  "mobileFootnote": "Nomor bisnis resmi Anda. Di mana pun Anda bekerja.",
  "mobileFeaturesTitle": "Fitur Seluler",
  "mobileFeatures": [
    "Arsitektur kompatibel Android dan iOS",
    "Panggilan suara SIP & WebRTC",
    "Sinkronisasi kontak otomatis",
    "Riwayat panggilan lengkap",
    "Klik untuk memanggil",
    "Manajemen ID Penelepon (Caller ID)",
    "Perekaman panggilan",
    "Status ketersediaan agen",
    "Notifikasi push instan",
    "Autentikasi aman"
  ],
  "mobileSyncCard": {
    "title": "Kontak selalu tersinkron.",
    "desc": "Data pelanggan dan riwayat panggilan selalu dalam genggaman.",
    "badge": "Baru saja disinkronkan"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Selamat pagi, Alex",
    "status": "Tersedia",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "ID Penelepon: iNet Business",
    "tabDialer": "Dialer",
    "tabContacts": "Kontak",
    "tabHistory": "Riwayat"
  },
  "routesBadge": "Rute Global Canggih A–Z",
  "routesTitle": "Jangkau Pelanggan Melalui Rute Terbaik",
  "routesSubtitle": "Terhubung ke berbagai operator telekomunikasi dunia dan kelola lalu lintas suara internasional dengan pintar dan hemat biaya.",
  "routesFeaturesTitle": "Manajemen Rute",
  "routesFeatures": [
    "Tujuan panggilan internasional A–Z",
    "Integrasi multi-operator",
    "Perutean berbasis kode area",
    "Perutean biaya terendah (LCR)",
    "Perutean berbasis kualitas suara",
    "Perutean pencadangan otomatis (Failover)",
    "Perutean prioritas",
    "Perutean berdasarkan destinasi",
    "Pemantauan performa operator",
    "Kontrol biaya rute panggilan"
  ],
  "routeControlCard": {
    "title": "Kontrol rute global",
    "badge": "Rute stabil",
    "agentCall": "Panggilan agen",
    "smartRouting": "Perutean cerdas",
    "smartRoutingDesc": "Rute terbaik tersedia",
    "carrier1": "Operator A · Prioritas 1",
    "carrier2": "Operator B · Prioritas 2",
    "carrier3": "Operator C · Cadangan",
    "tableDest": "Tujuan",
    "tableCarrier": "Operator",
    "tableQuality": "Kualitas",
    "tableRate": "/ mnt",
    "note": "Tujuan, kualitas operator, dan tarif hanya untuk ilustrasi."
  },
  "routesEngine": {
    "title": "Mesin Perutean Cerdas",
    "desc": "Memilih rute terbaik secara otomatis berdasarkan tujuan, harga, kualitas audio, ketersediaan jalur, dan performa operator.",
    "tags": [
      "Tujuan",
      "Harga",
      "Kualitas",
      "Ketersediaan",
      "Performa operator"
    ]
  },
  "monitoringBadge": "Pemantauan Call Center Tingkat Lanjut",
  "monitoringTitle": "Visibilitas Penuh ke Seluruh Operasional Call Center",
  "monitoringSubtitle": "Pantau seluruh operasional tim Anda dari dasbor terpusat secara langsung.",
  "monitoringLiveHeader": "Pemantauan Langsung",
  "monitoringLiveSub": "Lihat apa yang sedang terjadi detik ini.",
  "monitoringKpis": [
    {
      "label": "Panggilan aktif",
      "value": "128"
    },
    {
      "label": "Panggilan antrean",
      "value": "12"
    },
    {
      "label": "Agen siap",
      "value": "36"
    },
    {
      "label": "Agen sibuk",
      "value": "64"
    },
    {
      "label": "Status agen",
      "value": "Live"
    },
    {
      "label": "Panggilan per detik",
      "value": "8.4"
    },
    {
      "label": "Tingkat jawaban",
      "value": "86.2%"
    },
    {
      "label": "Rata-rata durasi",
      "value": "04:32"
    },
    {
      "label": "Panggilan bersamaan",
      "value": "140"
    },
    {
      "label": "Panggilan gagal",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Ikhtisar call center",
    "updateMeta": "Semua kampanye • 08 Okt 2026",
    "note": "Dasbor pemantauan langsung • Pantau agen, antrean, dan kualitas panggilan dari satu layar terpadu.",
    "cols": {
      "agent": "Agen",
      "campaign": "Kampanye",
      "status": "Status",
      "duration": "Durasi",
      "destination": "Tujuan",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Alat Supervisor",
  "supervisorToolsSubtitle": "Beri manajer kontrol penuh untuk membimbing agen dan menjaga mutu layanan.",
  "supervisorTools": [
    {
      "title": "Mendengarkan (Listen)",
      "desc": "Pantau panggilan yang sedang berlangsung secara diam-diam untuk jaminan kualitas."
    },
    {
      "title": "Membisik (Whisper)",
      "desc": "Bimbing agen saat panggilan berlangsung tanpa terdengar oleh pelanggan."
    },
    {
      "title": "Intervensi (Barge-In)",
      "desc": "Masuk langsung ke percakapan aktif menjadi panggilan 3 arah saat diperlukan bantuan."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Panggilan",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard Waktu Nyata",
    "desc": "Tampilkan KPI penting call center di layar monitor besar secara langsung."
  },
  "dialingModesBadge": "Panggilan keluar yang lebih cerdas",
  "dialingModesTitle": "Mode Panggilan Otomatis Canggih",
  "dialingModesSubtitle": "Pilih strategi panggilan yang paling sesuai dengan ritme tim Anda.",
  "dialingModes": [
    {
      "title": "Dialer Prediktif (Predictive)",
      "desc": "Memanggil banyak nomor secara otomatis sekaligus dan langsung menyambungkan panggilan yang diangkat ke agen yang sedang kosong.",
      "flow": "Panggilan massal → Agen siap",
      "tag": "KAMPANYE VOLUME TINGGI"
    },
    {
      "title": "Dialer Progresif (Progressive)",
      "desc": "Hanya memanggil nomor berikutnya saat agen telah menyelesaikan tugas dan siap menerima panggilan baru.",
      "flow": "Agen siap → Pelanggan berikutnya",
      "tag": "PANGGILAN SESUAI RITME AGEN"
    },
    {
      "title": "Power Dialer",
      "desc": "Memanggil daftar kontak secara berurutan dan otomatis untuk memaksimalkan produktivitas agen.",
      "flow": "Daftar kontak → Panggilan berkelanjutan",
      "tag": "PRODUKTIVITAS MAKSIMAL"
    },
    {
      "title": "Dialer Pratinjau (Preview)",
      "desc": "Memberi kesempatan bagi agen untuk membaca profil dan riwayat pelanggan sebelum memulai panggilan.",
      "flow": "Pelajari profil → Mulai panggilan",
      "tag": "PERCAKAPAN PERSONALISASI"
    }
  ],
  "analyticsBadge": "Analitik & Laporan Panggilan",
  "analyticsTitle": "Ubah Data Panggilan Menjadi Peningkatan Performa",
  "analyticsSubtitle": "Lacak setiap aspek dari operasional panggilan Anda dengan akurat.",
  "analyticsFeatures": [
    "Kinerja agen",
    "Kinerja kampanye",
    "Durasi panggilan",
    "Tingkat jawaban (ASR)",
    "Tingkat panggilan terputus",
    "Pelacakan konversi",
    "Hasil status panggilan (Dispositions)",
    "Performa rute suara",
    "Performa operator telekomunikasi",
    "Analisis biaya terperinci",
    "Laporan per jam, harian, dan bulanan",
    "Catatan detail panggilan lengkap (CDR)"
  ],
  "analyticsSubtext": "Dari rekaman pembicaraan individu hingga biaya terminasi operator global, dapatkan gambaran yang utuh.",
  "analyticsCard": {
    "title": "Kinerja kampanye",
    "exportBtn": "Ekspor",
    "tabHourly": "Per jam",
    "tabDaily": "Harian",
    "tabMonthly": "Bulanan",
    "timeframe": "01–07 Okt 2026",
    "stat1Label": "Total panggilan",
    "stat1Val": "1.842",
    "stat2Label": "Tingkat jawaban",
    "stat2Val": "86.2%",
    "stat3Label": "Konversi",
    "stat3Val": "18.4%",
    "legendCalls": "Panggilan",
    "legendAnswered": "Dijawab",
    "dispositionTitle": "Hasil panggilan",
    "note": "Data laporan ilustrasi • Ekspor riwayat dan rincian di balik setiap panggilan."
  },
  "ctaBadge": "MARI BANGUN JARINGAN KOMUNIKASI BISNIS ANDA",
  "ctaTitle": "Kembangkan Bisnis Anda dengan Solusi Komunikasi Andal",
  "ctaSubtitle": "Dari perutean suara cerdas dan terminasi internasional hingga AI Voice dan nomor virtual, iNet Global menyediakan solusi telekomunikasi berskala besar yang menghubungkan bisnis dengan pelanggan secara jelas, aman, dan efisien.",
  "getStarted": "Mulai Sekarang",
  "contactUs": "Hubungi Kami",
  "ctaTrust1": "SLA Dialer Tingkat Enterprise",
  "ctaTrust2": "Aktivasi WebRTC Instan",
  "ctaTrust3": "Dukungan Khusus 24/7"
};

const vi: DailerSolutionTranslation = {
  "heroBadge": "GIẢI PHÁP TỔNG ĐÀI QUAY SỐ CALL CENTER",
  "heroTitle": "Hệ Thống Quay Số Call Center Thế Hệ Mới Cho Máy Tính & Di Động",
  "heroDesc": "Kết nối điện thoại viên, khách hàng và các tuyến viễn thông toàn cầu qua một nền tảng liên lạc hợp nhất. Sử dụng trình quay số trên trình duyệt máy tính hoặc ứng dụng di động để quản lý các cuộc gọi đi với định tuyến thông minh, giám sát trực tiếp, phân tích và kiểm soát theo thời gian thực.",
  "requestDemo": "Yêu cầu bản demo",
  "exploreDialer": "Khám phá trình quay số",
  "heroFootnote": "Một không gian làm việc liền mạch. Từ cuộc gọi đầu tiên đến báo cáo hoàn chỉnh.",
  "heroMockup": {
    "title": "Trình quay số iNet",
    "agentStatus": "Điện thoại viên sẵn sàng",
    "campaign": "Chăm sóc khách hàng",
    "campaignMeta": "Chiến dịch tuần tự • Hôm nay",
    "contactsCount": "128 liên hệ",
    "connectedBadge": "Đã kết nối - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Kết thúc cuộc gọi",
    "tabContact": "Liên hệ",
    "tabHistory": "Lịch sử",
    "tabNotes": "Ghi chú",
    "customerDetailsTitle": "THÔNG TIN KHÁCH HÀNG",
    "companyLabel": "Công ty",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Email",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Liên hệ gần nhất",
    "lastContactVal": "07/10/2026",
    "dispositionLabel": "KẾT QUẢ CUỘC GỌI",
    "dispositionVal": "Đã hẹn gọi lại",
    "recordingText": "Đang ghi âm cuộc gọi",
    "stat1Label": "Cuộc gọi hôm nay",
    "stat1Val": "46",
    "stat2Label": "Đã kết nối",
    "stat2Val": "38",
    "stat3Label": "Thời gian thoại",
    "stat3Val": "02g 18p",
    "floatBadgeTitle": "Tuyến đường tối ưu. Mọi cuộc gọi.",
    "floatBadgeDesc": "Anh Quốc · Nhà mạng A · Chất lượng 98.6%"
  },
  "highlights": [
    {
      "title": "Trình quay số trên trình duyệt"
    },
    {
      "title": "Trình quay số di động"
    },
    {
      "title": "Tuyến viễn thông A–Z toàn cầu"
    },
    {
      "title": "Quay số dự đoán & tuần tự"
    },
    {
      "title": "Giám sát cuộc gọi trực tiếp"
    },
    {
      "title": "Báo cáo phân tích thời gian thực"
    }
  ],
  "desktopBadge": "Trình Quay Số Trình Duyệt Máy Tính",
  "desktopTitle": "Biến Bất Kỳ Máy Tính Nào Thành Tổng Đài Chuyên Nghiệp",
  "desktopSubtitle": "Không cần cài đặt phần mềm phức tạp. Điện thoại viên chỉ cần đăng nhập an toàn qua trình duyệt web và bắt đầu thực hiện cuộc gọi ngay.",
  "desktopFootnote": "Trình duyệt chính là không gian làm việc. Truy cập bảo mật và không yêu cầu cài đặt rườm rà.",
  "desktopFeaturesTitle": "Tính năng",
  "desktopFeatures": [
    "Gọi thoại WebRTC qua trình duyệt",
    "Đăng nhập & quản lý điện thoại viên",
    "Nhấp để gọi (Click-to-call)",
    "Quản lý danh bạ khách hàng",
    "Lịch sử cuộc gọi chi tiết",
    "Ghi âm cuộc gọi tự động",
    "Chuyển tiếp cuộc gọi",
    "Giữ máy & tắt tiếng",
    "Quản lý phân loại kết quả (Disposition)",
    "Theo dõi trạng thái điện thoại viên",
    "Thống kê cuộc gọi thời gian thực"
  ],
  "desktopMainHeading": "Một Trình Quay Số. Đáp Ứng Mọi Yêu Cầu Gọi Thoại Doanh Nghiệp.",
  "desktopWorkspaceTitle": "Trình duyệt web là không gian làm việc hoàn chỉnh của bạn.",
  "desktopWorkspaceSubtitle": "Truy cập an toàn cho nhân viên. Không cần cài đặt phần mềm rắc rối.",
  "mobileBadge": "Trình Quay Số Di Động",
  "mobileTitle": "Linh Hoạt Điều Hành Tổng Đài Mọi Lúc Mọi Nơi",
  "mobileSubtitle": "Cung cấp cho nhân viên làm việc từ xa và nhân viên kinh doanh trải nghiệm gọi thoại di động chuyên nghiệp kết nối trực tiếp với tổng đài doanh nghiệp.",
  "mobileFootnote": "Hiển thị số điện thoại doanh nghiệp của bạn mọi lúc, mọi nơi.",
  "mobileFeaturesTitle": "Tính năng Di động",
  "mobileFeatures": [
    "Tương thích hoàn hảo với Android và iOS",
    "Gọi thoại chuẩn SIP & WebRTC",
    "Đồng bộ hóa danh bạ tự động",
    "Lịch sử cuộc gọi",
    "Nhấp để gọi",
    "Quản lý số hiển thị (Caller ID)",
    "Ghi âm cuộc gọi",
    "Trạng thái sẵn sàng làm việc",
    "Thông báo đẩy tức thì",
    "Xác thực bảo mật cao"
  ],
  "mobileSyncCard": {
    "title": "Danh bạ luôn đồng bộ.",
    "desc": "Thông tin khách hàng và lịch sử cuộc gọi luôn ở bên bạn.",
    "badge": "Vừa đồng bộ xong"
  },
  "mobileDialerMockup": {
    "title": "Trình quay số iNet",
    "greeting": "Chào buổi sáng, Alex",
    "status": "Sẵn sàng",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Số hiển thị: iNet Business",
    "tabDialer": "Bàn phím",
    "tabContacts": "Danh bạ",
    "tabHistory": "Lịch sử"
  },
  "routesBadge": "Tuyến Viễn Thông Toàn Cầu A–Z",
  "routesTitle": "Kết Nối Khách Hàng Qua Tuyến Đường Chất Lượng Nhất",
  "routesSubtitle": "Kết nối trực tiếp với nhiều nhà mạng quốc tế và quản lý lưu lượng thoại toàn cầu một cách thông minh, tiết kiệm chi phí.",
  "routesFeaturesTitle": "Quản lý tuyến đường",
  "routesFeatures": [
    "Đích đến quốc tế A–Z toàn cầu",
    "Tích hợp đa nhà mạng",
    "Định tuyến theo đầu số",
    "Định tuyến chi phí thấp nhất (LCR)",
    "Định tuyến ưu tiên chất lượng âm thanh",
    "Định tuyến dự phòng tự động (Failover)",
    "Định tuyến theo mức ưu tiên",
    "Định tuyến theo quốc gia đích",
    "Giám sát hiệu suất nhà mạng",
    "Quản lý chi phí tuyến đường"
  ],
  "routeControlCard": {
    "title": "Kiểm soát tuyến toàn cầu",
    "badge": "Tuyến ổn định",
    "agentCall": "Cuộc gọi nhân viên",
    "smartRouting": "Định tuyến thông minh",
    "smartRoutingDesc": "Tuyến tốt nhất hiện có",
    "carrier1": "Nhà mạng A · Ưu tiên 1",
    "carrier2": "Nhà mạng B · Ưu tiên 2",
    "carrier3": "Nhà mạng C · Dự phòng",
    "tableDest": "Điểm đến",
    "tableCarrier": "Nhà mạng",
    "tableQuality": "Chất lượng",
    "tableRate": "/ phút",
    "note": "Các điểm đến, chất lượng nhà mạng và mức cước mang tính minh họa."
  },
  "routesEngine": {
    "title": "Công Cụ Định Tuyến Thông Minh",
    "desc": "Tự động chọn tuyến tối ưu dựa trên điểm đến, chi phí, chất lượng thoại, độ khả dụng và độ ổn định của nhà mạng.",
    "tags": [
      "Điểm đến",
      "Giá cước",
      "Chất lượng",
      "Khả dụng",
      "Hiệu suất nhà mạng"
    ]
  },
  "monitoringBadge": "Giám Sát Call Center Nâng Cao",
  "monitoringTitle": "Minh Bạch Toàn Diện Hoạt Động Call Center",
  "monitoringSubtitle": "Giám sát toàn bộ hoạt động từ một bảng điều khiển tập trung theo thời gian thực.",
  "monitoringLiveHeader": "Giám sát trực tiếp",
  "monitoringLiveSub": "Nắm bắt chính xác những gì đang diễn ra ngay lúc này.",
  "monitoringKpis": [
    {
      "label": "Cuộc gọi đang thoại",
      "value": "128"
    },
    {
      "label": "Cuộc gọi đang chờ",
      "value": "12"
    },
    {
      "label": "Điện thoại viên rảnh",
      "value": "36"
    },
    {
      "label": "Điện thoại viên bận",
      "value": "64"
    },
    {
      "label": "Trạng thái",
      "value": "Trực tiếp"
    },
    {
      "label": "Cuộc gọi mỗi giây",
      "value": "8.4"
    },
    {
      "label": "Tỷ lệ nghe máy",
      "value": "86.2%"
    },
    {
      "label": "Thời lượng gọi TB",
      "value": "04:32"
    },
    {
      "label": "Cuộc gọi đồng thời",
      "value": "140"
    },
    {
      "label": "Cuộc gọi thất bại",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Tổng quan trung tâm cuộc gọi",
    "updateMeta": "Tất cả chiến dịch • 08/10/2026",
    "note": "Bảng điều khiển trực tiếp minh họa • Theo dõi điện thoại viên, hàng đợi và chất lượng thoại từ một màn hình.",
    "cols": {
      "agent": "Nhân viên",
      "campaign": "Chiến dịch",
      "status": "Trạng thái",
      "duration": "Thời lượng",
      "destination": "Điểm đến",
      "supervisor": "Giám sát viên"
    }
  },
  "supervisorToolsTitle": "Công Cụ Cho Giám Sát Viên",
  "supervisorToolsSubtitle": "Trao quyền cho các cấp quản lý kiểm soát chất lượng dịch vụ và đào tạo nhân sự.",
  "supervisorTools": [
    {
      "title": "Nghe lén (Listen)",
      "desc": "Theo dõi trực tiếp cuộc gọi để đánh giá chất lượng mà không làm gián đoạn."
    },
    {
      "title": "Thì thầm (Whisper)",
      "desc": "Hướng dẫn trực tiếp cho điện thoại viên mà khách hàng không hề nghe thấy tiếng giám sát."
    },
    {
      "title": "Can thiệp (Barge-In)",
      "desc": "Tham gia trực tiếp vào cuộc gọi để hỗ trợ xử lý khi có tình huống phát sinh."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Cuộc gọi",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Màn Hình Wallboard Thời Gian Thực",
    "desc": "Trình chiếu các chỉ số KPI quan trọng của tổng đài lên màn hình lớn trong văn phòng."
  },
  "dialingModesBadge": "Gọi ra thông minh và năng suất hơn",
  "dialingModesTitle": "Các Chế Độ Quay Số Tự Động Nâng Cao",
  "dialingModesSubtitle": "Lựa chọn chiến lược quay số phù hợp nhất với mô hình vận hành của doanh nghiệp.",
  "dialingModes": [
    {
      "title": "Quay số dự đoán (Predictive Dialer)",
      "desc": "Tự động gọi đồng thời nhiều số điện thoại và chuyển ngay các cuộc gọi có người nhấc máy cho nhân viên rảnh.",
      "flow": "Gọi đồng loạt → Nhân viên sẵn sàng",
      "tag": "CHIẾN DỊCH KHÁCH HÀNG LỚN"
    },
    {
      "title": "Quay số tuần tự (Progressive Dialer)",
      "desc": "Chỉ tự động gọi cho khách hàng tiếp theo khi nhân viên vừa kết thúc cuộc gọi trước và sẵn sàng.",
      "flow": "Nhân viên rảnh → Gọi khách tiếp theo",
      "tag": "THEO NHỊP ĐỘ ĐIỆN THOẠI VIÊN"
    },
    {
      "title": "Power Dialer",
      "desc": "Tự động quay số liên tục theo danh sách liên hệ để tối đa hóa năng suất làm việc của nhân viên.",
      "flow": "Danh sách liên hệ → Gọi liên tục",
      "tag": "TẬP TRUNG TỐI ĐA NĂNG SUẤT"
    },
    {
      "title": "Quay số xem trước (Preview Dialer)",
      "desc": "Cho phép nhân viên xem trước thông tin và lịch sử khách hàng trước khi bấm gọi.",
      "flow": "Xem hồ sơ khách → Bắt đầu cuộc gọi",
      "tag": "TƯ VẤN CHUYÊN SÂU"
    }
  ],
  "analyticsBadge": "Phân Tích & Báo Cáo Cuộc Gọi",
  "analyticsTitle": "Biến Dữ Liệu Cuộc Gọi Thành Hiệu Quả Kinh Doanh",
  "analyticsSubtitle": "Theo dõi chi tiết từng khía cạnh trong hoạt động gọi thoại của tổng đài.",
  "analyticsFeatures": [
    "Hiệu suất từng điện thoại viên",
    "Hiệu quả chiến dịch bán hàng",
    "Thời lượng các cuộc gọi",
    "Tỷ lệ kết nối thành công (ASR)",
    "Tỷ lệ cuộc gọi nhỡ/bị ngắt",
    "Theo dõi chuyển đổi đơn hàng",
    "Thống kê kết quả cuộc gọi (Dispositions)",
    "Chất lượng từng tuyến viễn thông",
    "Hiệu suất các đối tác nhà mạng",
    "Phân tích chi phí cước chi tiết",
    "Báo cáo theo giờ, ngày và tháng",
    "Nhật ký chi tiết cuộc gọi (CDR)"
  ],
  "analyticsSubtext": "Từ từng đoạn ghi âm đối thoại đến chi phí nhà mạng quốc tế, nắm bắt toàn diện bức tranh hoạt động.",
  "analyticsCard": {
    "title": "Hiệu quả chiến dịch",
    "exportBtn": "Xuất dữ liệu",
    "tabHourly": "Theo giờ",
    "tabDaily": "Theo ngày",
    "tabMonthly": "Theo tháng",
    "timeframe": "01–07/10/2026",
    "stat1Label": "Tổng cuộc gọi",
    "stat1Val": "1.842",
    "stat2Label": "Tỷ lệ nghe máy",
    "stat2Val": "86.2%",
    "stat3Label": "Chuyển đổi",
    "stat3Val": "18.4%",
    "legendCalls": "Cuộc gọi",
    "legendAnswered": "Đã nghe máy",
    "dispositionTitle": "Kết quả cuộc gọi",
    "note": "Dữ liệu báo cáo minh họa • Xuất dữ liệu chi tiết cho mọi cuộc gọi."
  },
  "ctaBadge": "HÃY CÙNG XÂY DỰNG MẠNG LƯỚI VIỄN THÔNG DOANH NGHIỆP",
  "ctaTitle": "Phát Triển Doanh Nghiệp Với Giải Pháp Viễn Thông Toàn Cầu",
  "ctaSubtitle": "Từ định tuyến thoại thông minh và chuyển tiếp quốc tế đến AI Voice và số ảo, iNet Global cung cấp các giải pháp liên lạc linh hoạt giúp doanh nghiệp kết nối với khách hàng rõ ràng, an toàn và hiệu quả trên khắp thế giới.",
  "getStarted": "Bắt đầu ngay",
  "contactUs": "Liên hệ chúng tôi",
  "ctaTrust1": "Cam kết SLA chuẩn Doanh nghiệp",
  "ctaTrust2": "Kích hoạt WebRTC tức thì",
  "ctaTrust3": "Hỗ trợ kỹ thuật chuyên trách 24/7"
};

const pl: DailerSolutionTranslation = {
  "heroBadge": "ROZWIĄZANIE DIALERA DLA CALL CENTER",
  "heroTitle": "Dialer Call Center Nowej Generacji na Komputery i Urządzenia Mobilne",
  "heroDesc": "Połącz swoich konsultantów, klientów i globalne trasy połączeń za pośrednictwem jednej, zaawansowanej platformy telekomunikacyjnej. Wykorzystaj nasz dialer w przeglądarce lub dialer mobilny do zarządzania połączeniami wychodzącymi z inteligentnym routingiem, monitoringiem na żywo, analityką i kontrolą w czasie rzeczywistym.",
  "requestDemo": "Poproś o wersję demo",
  "exploreDialer": "Poznaj dialer",
  "heroFootnote": "Jedno zintegrowane środowisko pracy. Od pierwszego połączenia do końcowego raportu.",
  "heroMockup": {
    "title": "Dialer iNet",
    "agentStatus": "Konsultant dostępny",
    "campaign": "Kontakt z klientem",
    "campaignMeta": "Kampania progresywna • Dzisiaj",
    "contactsCount": "128 kontaktów",
    "connectedBadge": "Połączono - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Zakończ połączenie",
    "tabContact": "Kontakt",
    "tabHistory": "Historia",
    "tabNotes": "Notatki",
    "customerDetailsTitle": "DANE KLIENTA",
    "companyLabel": "Firma",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Ostatni kontakt",
    "lastContactVal": "07 paź 2026",
    "dispositionLabel": "STATUS POŁĄCZENIA",
    "dispositionVal": "Zaplanowano ponowny kontakt",
    "recordingText": "Nagrywanie w toku",
    "stat1Label": "Połączenia dzisiaj",
    "stat1Val": "46",
    "stat2Label": "Połączone",
    "stat2Val": "38",
    "stat3Label": "Czas rozmów",
    "stat3Val": "02g 18m",
    "floatBadgeTitle": "Właściwa trasa. Każde połączenie.",
    "floatBadgeDesc": "Wielka Brytania · Operator A · Jakość 98.6%"
  },
  "highlights": [
    {
      "title": "Dialer w przeglądarce"
    },
    {
      "title": "Dialer mobilny"
    },
    {
      "title": "Globalne trasy A–Z"
    },
    {
      "title": "Wybieranie predykcyjne i progresywne"
    },
    {
      "title": "Monitoring rozmów na żywo"
    },
    {
      "title": "Analityka w czasie rzeczywistym"
    }
  ],
  "desktopBadge": "Dialer Przeglądarkowy na Komputery",
  "desktopTitle": "Zmień Dowolny Komputer w Profesjonalne Call Center",
  "desktopSubtitle": "Bez skomplikowanej instalacji programów. Konsultanci logują się bezpiecznie przez przeglądarkę i natychmiast rozpoczynają rozmowy.",
  "desktopFootnote": "Przeglądarka to Twoje kompletne biuro. Bezpieczny dostęp konsultantów bez instalacji oprogramowania.",
  "desktopFeaturesTitle": "Funkcje",
  "desktopFeatures": [
    "Połączenia WebRTC w przeglądarce",
    "Logowanie i zarządzanie konsultantami",
    "Kliknij, aby zadzwonić (Click-to-call)",
    "Zarządzanie bazą kontaktów",
    "Historia połączeń",
    "Nagrywanie rozmów",
    "Przekierowywanie połączeń",
    "Zawieszanie i wyciszanie",
    "Zarządzanie statusami (Dispositions)",
    "Śledzenie statusu konsultanta",
    "Statystyki połączeń w czasie rzeczywistym"
  ],
  "desktopMainHeading": "Jeden Dialer. Wszystkie Wymagania Połączeń.",
  "desktopWorkspaceTitle": "Twoja przeglądarka to Twoje środowisko pracy.",
  "desktopWorkspaceSubtitle": "Bezpieczny dostęp dla agentów. Brak skomplikowanej instalacji.",
  "mobileBadge": "Dialer Mobilny",
  "mobileTitle": "Prowadź Działania Call Center z Dowolnego Miejsca",
  "mobileSubtitle": "Zapewnij pracownikom zdalnym i mobilnym profesjonalne narzędzie do dzwonienia, połączone z Twoją infrastrukturą firmową.",
  "mobileFootnote": "Twój numer firmowy. Gdziekolwiek pracujesz.",
  "mobileFeaturesTitle": "Funkcje Mobilne",
  "mobileFeatures": [
    "Architektura zgodna z Android i iOS",
    "Połączenia głosowe SIP i WebRTC",
    "Synchronizacja kontaktów",
    "Historia połączeń",
    "Click-to-call",
    "Zarządzanie identyfikatorem rozmówcy (Caller ID)",
    "Nagrywanie połączeń",
    "Status dostępności konsultanta",
    "Powiadomienia push",
    "Bezpieczne uwierzytelnianie"
  ],
  "mobileSyncCard": {
    "title": "Kontakty zawsze zsynchronizowane.",
    "desc": "Baza klientów i historia połączeń zawsze pod ręką.",
    "badge": "Zsynchronizowano przed chwilą"
  },
  "mobileDialerMockup": {
    "title": "Dialer iNet",
    "greeting": "Dzień dobry, Alex",
    "status": "Dostępny",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Numer wychodzący: iNet Business",
    "tabDialer": "Klawiatura",
    "tabContacts": "Kontakty",
    "tabHistory": "Historia"
  },
  "routesBadge": "Zaawansowane Globalne Trasy A–Z",
  "routesTitle": "Docieraj do Klientów Najlepszą Trasą Telekomunikacyjną",
  "routesSubtitle": "Połącz się z wieloma operatorami i inteligentnie zarządzaj międzynarodowym ruchem głosowym o najwyższej jakości.",
  "routesFeaturesTitle": "Zarządzanie Trasami",
  "routesFeatures": [
    "Kierunki międzynarodowe A–Z na całym świecie",
    "Integracja z wieloma operatorami",
    "Routing według numerów kierunkowych",
    "Routing najniższego kosztu (LCR)",
    "Routing oparty na jakości głosu",
    "Automatyczny routing awaryjny (Failover)",
    "Routing priorytetowy",
    "Routing według destynacji",
    "Monitoring jakości operatorów",
    "Zarządzanie kosztami tras"
  ],
  "routeControlCard": {
    "title": "Kontrola globalnych tras",
    "badge": "Trasy stabilne",
    "agentCall": "Połączenie konsultanta",
    "smartRouting": "Inteligentny routing",
    "smartRoutingDesc": "Najlepsza dostępna trasa",
    "carrier1": "Operator A · Priorytet 1",
    "carrier2": "Operator B · Priorytet 2",
    "carrier3": "Operator C · Zapasowy",
    "tableDest": "Kierunek",
    "tableCarrier": "Operator",
    "tableQuality": "Jakość",
    "tableRate": "/ min",
    "note": "Kierunki, jakość operatora i stawki mają charakter poglądowy."
  },
  "routesEngine": {
    "title": "Silnik Inteligentnego Routingu",
    "desc": "Automatycznie wybiera optymalną trasę na podstawie kierunku, ceny, jakości dźwięku, dostępności i stabilności operatora.",
    "tags": [
      "Kierunek",
      "Cena",
      "Jakość",
      "Dostępność",
      "Wydajność operatora"
    ]
  },
  "monitoringBadge": "Zaawansowany Monitoring Call Center",
  "monitoringTitle": "Pełny Wgląd w Pracę Twojego Call Center",
  "monitoringSubtitle": "Monitoruj całą operację ze scentralizowanego panelu w czasie rzeczywistym.",
  "monitoringLiveHeader": "Monitoring na żywo",
  "monitoringLiveSub": "Sprawdzaj, co dzieje się dokładnie w tym momencie.",
  "monitoringKpis": [
    {
      "label": "Aktywne połączenia",
      "value": "128"
    },
    {
      "label": "Oczekujące",
      "value": "12"
    },
    {
      "label": "Dostępni konsultanci",
      "value": "36"
    },
    {
      "label": "Zajęci konsultanci",
      "value": "64"
    },
    {
      "label": "Status konsultanta",
      "value": "Na żywo"
    },
    {
      "label": "Połączeń na sekundę",
      "value": "8.4"
    },
    {
      "label": "Wskaźnik odebranych",
      "value": "86.2%"
    },
    {
      "label": "Średni czas rozmowy",
      "value": "04:32"
    },
    {
      "label": "Jednoczesne połączenia",
      "value": "140"
    },
    {
      "label": "Nieudane połączenia",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Przegląd call center",
    "updateMeta": "Wszystkie kampanie • 08 paź 2026",
    "note": "Poglądowy panel na żywo • Monitoruj konsultantów, kolejki i jakość głosu z jednego miejsca.",
    "cols": {
      "agent": "Konsultant",
      "campaign": "Kampania",
      "status": "Status",
      "duration": "Czas",
      "destination": "Kierunek",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Narzędzia Supervisora",
  "supervisorToolsSubtitle": "Daj menedżerom pełną kontrolę nad wsparciem zespołu i kontrolą jakości.",
  "supervisorTools": [
    {
      "title": "Podsłuch (Listen)",
      "desc": "Dyskretny odsłuch rozmów na żywo w celu kontroli jakości standardów obsługi."
    },
    {
      "title": "Szept (Whisper)",
      "desc": "Podpowiedzi dla konsultanta podczas rozmowy, niesłyszalne dla klienta."
    },
    {
      "title": "Wtrącenie (Barge-In)",
      "desc": "Dołączenie do aktywnej rozmowy w trybie trójstronnym w sytuacjach awaryjnych."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Połączeń",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard w Czasie Rzeczywistym",
    "desc": "Wyświetlaj kluczowe wskaźniki efektywności call center na dużych ekranach w biurze."
  },
  "dialingModesBadge": "Inteligentniejsze połączenia wychodzące",
  "dialingModesTitle": "Zaawansowane Tryby Wybierania Numerów",
  "dialingModesSubtitle": "Dobierz strategię dzwonienia idealnie dopasowaną do Twojego procesu biznesowego.",
  "dialingModes": [
    {
      "title": "Dialer Predykcyjny (Predictive)",
      "desc": "Automatycznie wybiera wiele numerów jednocześnie i natychmiast łączy odebrane rozmowy z dostępnymi konsultantami.",
      "flow": "Wiele połączeń → Wolny konsultant",
      "tag": "KAMPANIE MASOWE"
    },
    {
      "title": "Dialer Progresywny (Progressive)",
      "desc": "Wybiera numer kolejnego klienta dopiero wtedy, gdy konsultant zakończy rozmowę i jest wolny.",
      "flow": "Wolny konsultant → Następny klient",
      "tag": "W TEMPIE KONSULTANTA"
    },
    {
      "title": "Power Dialer",
      "desc": "Automatycznie wybiera kolejne numery z listy kontaktów, eliminując straty czasu konsultanta.",
      "flow": "Lista kontaktów → Ciągłe połączenia",
      "tag": "MAKSYMALNA PRODUKTYWNOŚĆ"
    },
    {
      "title": "Dialer z Podglądem (Preview)",
      "desc": "Umożliwia konsultantowi zapoznanie się z kartą klienta i historią przed rozpoczęciem rozmowy.",
      "flow": "Analiza danych klienta → Rozpoczęcie rozmowy",
      "tag": "ROZMOWY SPERSONALIZOWANE"
    }
  ],
  "analyticsBadge": "Analityka i Raporty Połączeń",
  "analyticsTitle": "Zamień Dane z Rozmów w Lepsze Wyniki Sprzedaży i Obsługi",
  "analyticsSubtitle": "Śledź każdy aspekt działań telefonicznych Twojej organizacji.",
  "analyticsFeatures": [
    "Wydajność konsultantów",
    "Efektywność kampanii",
    "Średni czas trwania rozmów",
    "Wskaźnik odebranych połączeń (ASR)",
    "Wskaźnik porzuceń",
    "Śledzenie konwersji",
    "Statusy zakończenia rozmów (Dispositions)",
    "Jakość tras telekomunikacyjnych",
    "Stabilność operatorów",
    "Szczegółowa analiza kosztów",
    "Raporty godzinowe, dzienne i miesięczne",
    "Szczegółowe wykazy połączeń (CDR)"
  ],
  "analyticsSubtext": "Od pojedynczych dialogów po koszty globalnych operatorów — pełna przejrzystość.",
  "analyticsCard": {
    "title": "Efektywność kampanii",
    "exportBtn": "Eksportuj",
    "tabHourly": "Godzinowe",
    "tabDaily": "Dzienne",
    "tabMonthly": "Miesięczne",
    "timeframe": "01–07 paź 2026",
    "stat1Label": "Wszystkie połączenia",
    "stat1Val": "1 842",
    "stat2Label": "Odebrane",
    "stat2Val": "86.2%",
    "stat3Label": "Konwersje",
    "stat3Val": "18.4%",
    "legendCalls": "Połączenia",
    "legendAnswered": "Odebrane",
    "dispositionTitle": "Statusy rozmów",
    "note": "Poglądowe dane raportu • Eksportuj szczegółowe zestawienia dla każdej rozmowy."
  },
  "ctaBadge": "ZBUDUJMY TWOJĄ SIEĆ TELEKOMUNIKACYJNĄ",
  "ctaTitle": "Rozwijaj Swój Biznes z Profesjonalnymi Rozwiązaniami do Komunikacji",
  "ctaSubtitle": "Od inteligentnego routingu głosowego i międzynarodowej terminacji po AI Voice i numery wirtualne — iNet Global oferuje skalowalne rozwiązania, które pomagają firmom łączyć się z klientami na całym świecie.",
  "getStarted": "Rozpocznij teraz",
  "contactUs": "Skontaktuj się z nami",
  "ctaTrust1": "Gwarancja SLA Klasy Enterprise",
  "ctaTrust2": "Błyskawiczna Aktywacja WebRTC",
  "ctaTrust3": "Dedykowane Wsparcie 24/7"
};

const th: DailerSolutionTranslation = {
  "heroBadge": "โซลูชันระบบโทรออกสำหรับคอลเซ็นเตอร์",
  "heroTitle": "ระบบโทรออกคอลเซ็นเตอร์ยุคใหม่สำหรับเดสก์ท็อปและมือถือ",
  "heroDesc": "เชื่อมต่อเจ้าหน้าที่ ลูกค้า และเส้นทางโทรศัพท์ทั่วโลกผ่านแพลตฟอร์มการโทรที่ทรงพลังเพียงหนึ่งเดียว ใช้ระบบโทรออกบนเบราว์เซอร์หรือแอปพลิเคชันมือถือเพื่อจัดการการโทรออกอย่างมีประสิทธิภาพ พร้อมระบบกำหนดเส้นทางอัจฉริยะ การตรวจสอบสด การวิเคราะห์ และการควบคุมแบบเรียลไทม์",
  "requestDemo": "ขอรับชมการสาธิต",
  "exploreDialer": "สำรวจระบบโทรออก",
  "heroFootnote": "พื้นที่ทำงานที่เชื่อมต่อเป็นหนึ่งเดียว ตั้งแต่สายแรกจนถึงรายงานสรุปผล",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "เจ้าหน้าที่พร้อมให้บริการ",
    "campaign": "ติดตามลูกค้าเป้าหมาย",
    "campaignMeta": "แคมเปญแบบโปรเกรสซีฟ • วันนี้",
    "contactsCount": "128 รายชื่อ",
    "connectedBadge": "เชื่อมต่อแล้ว - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "วางสาย",
    "tabContact": "ผู้ติดต่อ",
    "tabHistory": "ประวัติ",
    "tabNotes": "บันทึก",
    "customerDetailsTitle": "ข้อมูลลูกค้า",
    "companyLabel": "บริษัท",
    "companyVal": "Lawson & Co.",
    "emailLabel": "อีเมล",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "ติดต่อล่าสุด",
    "lastContactVal": "07 ต.ค. 2026",
    "dispositionLabel": "ผลการโทร",
    "dispositionVal": "กำหนดการติดตามผลแล้ว",
    "recordingText": "กำลังบันทึกเสียงสนทนา",
    "stat1Label": "สายโทรวันนี้",
    "stat1Val": "46",
    "stat2Label": "เชื่อมต่อสำเร็จ",
    "stat2Val": "38",
    "stat3Label": "เวลาสนทนา",
    "stat3Val": "02 ชม. 18 นาที",
    "floatBadgeTitle": "เส้นทางที่ถูกต้องสำหรับทุกสายสนทนา",
    "floatBadgeDesc": "สหราชอาณาจักร · ผู้ให้บริการ A · คุณภาพ 98.6%"
  },
  "highlights": [
    {
      "title": "ระบบโทรออกผ่านเว็บเบราว์เซอร์"
    },
    {
      "title": "ระบบโทรออกบนมือถือ"
    },
    {
      "title": "เส้นทางโทรศัพท์ A–Z ทั่วโลก"
    },
    {
      "title": "ระบบโทรออกอัตโนมัติแบบคาดการณ์และต่อเนื่อง"
    },
    {
      "title": "การตรวจสอบสายโทรแบบเรียลไทม์"
    },
    {
      "title": "การวิเคราะห์และรายงานผลสด"
    }
  ],
  "desktopBadge": "ระบบโทรออกผ่านเบราว์เซอร์บนเดสก์ท็อป",
  "desktopTitle": "เปลี่ยนคอมพิวเตอร์ทุกเครื่องให้เป็นคอลเซ็นเตอร์มืออาชีพ",
  "desktopSubtitle": "ไม่ต้องติดตั้งโปรแกรมที่ยุ่งยาก เจ้าหน้าที่สามารถเข้าสู่ระบบอย่างปลอดภัยผ่านเว็บเบราว์เซอร์และเริ่มโทรออกได้ทันที",
  "desktopFootnote": "เบราว์เซอร์ของคุณคือพื้นที่ทำงานที่สมบูรณ์แบบ เข้าถึงได้อย่างปลอดภัยโดยไม่ต้องติดตั้งซอฟต์แวร์ซับซ้อน",
  "desktopFeaturesTitle": "คุณสมบัติเด่น",
  "desktopFeatures": [
    "การโทรผ่าน WebRTC บนเบราว์เซอร์",
    "การเข้าสู่ระบบและจัดการเจ้าหน้าที่",
    "คลิกเพื่อโทรออก (Click-to-call)",
    "การจัดการรายชื่อผู้ติดต่อ",
    "ประวัติการโทรอย่างละเอียด",
    "การบันทึกเสียงสนทนา",
    "การโอนสายสนทนา",
    "พักสายและปิดเสียง",
    "การจัดการผลการสนทนา (Disposition)",
    "การติดตามสถานะของเจ้าหน้าที่",
    "สถิติการโทรแบบเรียลไทม์"
  ],
  "desktopMainHeading": "ระบบโทรออกเดียว ครบทุกความต้องการด้านการโทร",
  "desktopWorkspaceTitle": "เบราว์เซอร์ของคุณคือพื้นที่ทำงานที่ครบครัน",
  "desktopWorkspaceSubtitle": "การเข้าถึงที่ปลอดภัยสำหรับเจ้าหน้าที่ โดยไม่ต้องติดตั้งโปรแกรมยุ่งยาก",
  "mobileBadge": "ระบบโทรออกบนมือถือ",
  "mobileTitle": "จัดการงานโทรคอลเซ็นเตอร์ได้จากทุกที่ทุกเวลา",
  "mobileSubtitle": "มอบประสบการณ์การโทรระดับมืออาชีพให้กับเจ้าหน้าที่ภาคสนามและพนักงานที่ทำงานระยะไกล เชื่อมต่อตรงกับระบบโทรคมนาคมขององค์กร",
  "mobileFootnote": "เบอร์ธุรกิจของคุณ ติดตัวคุณไปได้ทุกที่ที่ทำงาน",
  "mobileFeaturesTitle": "คุณสมบัติบนมือถือ",
  "mobileFeatures": [
    "รองรับทั้งระบบ Android และ iOS",
    "โทรผ่านระบบ SIP และ WebRTC คุณภาพเสียงคมชัด",
    "ซิงค์ข้อมูลผู้ติดต่ออัตโนมัติ",
    "ประวัติการโทร",
    "คลิกเพื่อโทรออก",
    "การจัดการหมายเลขโทรออก (Caller ID)",
    "บันทึกเสียงการโทร",
    "สถานะความพร้อมของเจ้าหน้าที่",
    "การแจ้งเตือนแบบพุชทันที",
    "ระบบยืนยันตัวตนที่ปลอดภัย"
  ],
  "mobileSyncCard": {
    "title": "ซิงค์รายชื่อติดต่อเสมอ",
    "desc": "ข้อมูลลูกค้าและประวัติการโทรอยู่กับคุณตลอดเวลา",
    "badge": "ซิงค์แล้วเมื่อสักครู่"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "สวัสดีตอนเช้า, Alex",
    "status": "พร้อมให้บริการ",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "เบอร์โทรออก: iNet Business",
    "tabDialer": "แป้นโทร",
    "tabContacts": "ผู้ติดต่อ",
    "tabHistory": "ประวัติ"
  },
  "routesBadge": "เส้นทางเสียงระหว่างประเทศ A–Z ระดับพรีเมียม",
  "routesTitle": "ติดต่อลูกค้าผ่านเส้นทางโทรศัพท์ที่ดีที่สุดเสมอ",
  "routesSubtitle": "เชื่อมต่อกับผู้ให้บริการโทรคมนาคมหลายรายทั่วโลก พร้อมจัดการปริมาณการโทรต่างประเทศได้อย่างชาญฉลาดและคุ้มค่า",
  "routesFeaturesTitle": "การจัดการเส้นทางโทรศัพท์",
  "routesFeatures": [
    "ครอบคลุมปลายทางทั่วโลก A–Z",
    "เชื่อมต่อหลายเครือข่ายผู้ให้บริการ",
    "กำหนดเส้นทางตามรหัสประเทศและพื้นที่",
    "ระบบเลือกเส้นทางต้นทุนต่ำสุด (LCR)",
    "กำหนดเส้นทางตามคุณภาพเสียงสูงสุด",
    "ระบบสำรองเส้นทางอัตโนมัติเมื่อเกิดข้อผิดพลาด (Failover)",
    "กำหนดเส้นทางตามลำดับความสำคัญ",
    "กำหนดเส้นทางตามจุดหมายปลายทาง",
    "ตรวจสอบประสิทธิภาพของผู้ให้บริการ",
    "ควบคุมต้นทุนเส้นทางการโทร"
  ],
  "routeControlCard": {
    "title": "การควบคุมเส้นทางทั่วโลก",
    "badge": "เส้นทางปกติ",
    "agentCall": "สายโทรเจ้าหน้าที่",
    "smartRouting": "การกำหนดเส้นทางอัจฉริยะ",
    "smartRoutingDesc": "เส้นทางที่ดีที่สุดในขณะนั้น",
    "carrier1": "ผู้ให้บริการ A · ลำดับความสำคัญ 1",
    "carrier2": "ผู้ให้บริการ B · ลำดับความสำคัญ 2",
    "carrier3": "ผู้ให้บริการ C · สำรองฉุกเฉิน",
    "tableDest": "ปลายทาง",
    "tableCarrier": "เครือข่าย",
    "tableQuality": "คุณภาพ",
    "tableRate": "/ นาที",
    "note": "จุดหมายปลายทาง คุณภาพ และอัตราค่าบริการเป็นตัวอย่างประกอบ"
  },
  "routesEngine": {
    "title": "ระบบคัดเลือกเส้นทางอัจฉริยะ",
    "desc": "เลือกเส้นทางที่ดีที่สุดโดยอัตโนมัติตามปลายทาง ราคา คุณภาพเสียง ความพร้อมใช้งาน และความเสถียรของผู้ให้บริการ",
    "tags": [
      "ปลายทาง",
      "ราคา",
      "คุณภาพ",
      "ความพร้อมใช้งาน",
      "ประสิทธิภาพผู้ให้บริการ"
    ]
  },
  "monitoringBadge": "การตรวจสอบคอลเซ็นเตอร์ขั้นสูง",
  "monitoringTitle": "มองเห็นภาพรวมการทำงานของคอลเซ็นเตอร์อย่างสมบูรณ์แบบ",
  "monitoringSubtitle": "ตรวจสอบการทำงานของทีมงานทั้งหมดผ่านแดชบอร์ดศูนย์กลางแบบเรียลไทม์",
  "monitoringLiveHeader": "การตรวจสอบสด",
  "monitoringLiveSub": "ดูสิ่งที่กำลังเกิดขึ้นในวินาทีนี้",
  "monitoringKpis": [
    {
      "label": "สายที่กำลังโทร",
      "value": "128"
    },
    {
      "label": "สายที่รอคิว",
      "value": "12"
    },
    {
      "label": "เจ้าหน้าที่พร้อม",
      "value": "36"
    },
    {
      "label": "เจ้าหน้าที่ติดสาย",
      "value": "64"
    },
    {
      "label": "สถานะเจ้าหน้าที่",
      "value": "สด"
    },
    {
      "label": "จำนวนสายต่อวินาที",
      "value": "8.4"
    },
    {
      "label": "อัตราการรับสาย",
      "value": "86.2%"
    },
    {
      "label": "เวลาคุยเฉลี่ย",
      "value": "04:32"
    },
    {
      "label": "สายพร้อมกัน",
      "value": "140"
    },
    {
      "label": "สายโทรไม่สำเร็จ",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "ภาพรวมคอลเซ็นเตอร์",
    "updateMeta": "ทุกแคมเปญ • 08 ต.ค. 2026",
    "note": "แดชบอร์ดตรวจสอบสดจำลอง • ดูแลเจ้าหน้าที่ คิวรอสาย และคุณภาพเสียงได้จากหน้าจอเดียว",
    "cols": {
      "agent": "เจ้าหน้าที่",
      "campaign": "แคมเปญ",
      "status": "สถานะ",
      "duration": "ระยะเวลา",
      "destination": "ปลายทาง",
      "supervisor": "หัวหน้างาน"
    }
  },
  "supervisorToolsTitle": "เครื่องมือสำหรับหัวหน้างาน (Supervisor)",
  "supervisorToolsSubtitle": "มอบอำนาจการควบคุมให้หัวหน้างานเพื่อพัฒนาคุณภาพและให้คำแนะนำเจ้าหน้าที่",
  "supervisorTools": [
    {
      "title": "ฟังการสนทนา (Listen)",
      "desc": "แอบฟังสายที่กำลังสนทนาสดเพื่อประเมินและควบคุมคุณภาพการบริการ"
    },
    {
      "title": "กระซิบสอนงาน (Whisper)",
      "desc": "แนะนำเจ้าหน้าที่ขณะสนทนา โดยที่ลูกค้าจะไม่ได้ยินเสียงของหัวหน้างาน"
    },
    {
      "title": "แทรกสาย (Barge-In)",
      "desc": "เข้าร่วมการสนทนาทันทีเมื่อจำเป็นต้องช่วยเหลือหรือเจรจาในกรณีเร่งด่วน"
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "สายโทร",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "จอแสดงผลสถานะแบบเรียลไทม์ (Wallboard)",
    "desc": "แสดงตัวชี้วัดประสิทธิภาพหลักของคอลเซ็นเตอร์บนหน้าจอขนาดใหญ่ในห้องปฏิบัติการ"
  },
  "dialingModesBadge": "การโทรออกที่ชาญฉลาดและรวดเร็วยิ่งขึ้น",
  "dialingModesTitle": "โหมดการโทรออกอัตโนมัติขั้นสูง",
  "dialingModesSubtitle": "เลือกกลยุทธ์การโทรออกที่ตอบโจทย์รูปแบบการทำงานของธุรกิจคุณมากที่สุด",
  "dialingModes": [
    {
      "title": "ระบบโทรออกคาดการณ์ (Predictive Dialer)",
      "desc": "โทรออกหลายหมายเลขพร้อมกันโดยอัตโนมัติ และเชื่อมต่อสายที่รับแล้วไปยังเจ้าหน้าที่ที่ว่างทันที",
      "flow": "โทรออกหลายสายพร้อมกัน → เจ้าหน้าที่ที่พร้อม",
      "tag": "แคมเปญโทรออกจำนวนมาก"
    },
    {
      "title": "ระบบโทรออกต่อเนื่อง (Progressive Dialer)",
      "desc": "โทรหาลูกค้ารายถัดไปเฉพาะเมื่อมีเจ้าหน้าที่วางสายและพร้อมรับสายใหม่แล้วเท่านั้น",
      "flow": "เจ้าหน้าที่ว่าง → โทรหาลูกค้ารายต่อไป",
      "tag": "โทรตามจังหวะของเจ้าหน้าที่"
    },
    {
      "title": "ระบบพาวเวอร์ไดอัลเลอร์ (Power Dialer)",
      "desc": "โทรออกตามรายชื่ออย่างต่อเนื่องโดยอัตโนมัติเพื่อลดเวลาว่างและเพิ่มผลผลิตของเจ้าหน้าที่",
      "flow": "รายการผู้ติดต่อ → โทรออกต่อเนื่อง",
      "tag": "เน้นประสิทธิผลสูงสุด"
    },
    {
      "title": "ระบบโทรออกพรีวิว (Preview Dialer)",
      "desc": "เปิดโอกาสให้เจ้าหน้าที่ตรวจสอบข้อมูลและประวัติของลูกค้าก่อนที่จะกดเริ่มโทรออก",
      "flow": "ดูข้อมูลลูกค้า → กดเริ่มโทร",
      "tag": "การเจรจาแบบเฉพาะบุคคล"
    }
  ],
  "analyticsBadge": "การวิเคราะห์สายโทรและรายงานเชิงลึก",
  "analyticsTitle": "เปลี่ยนข้อมูลการโทรให้เป็นยอดขายและบริการที่ยอดเยี่ยม",
  "analyticsSubtitle": "ติดตามและประเมินผลทุกมิติของกระบวนการโทรออกและรับสาย",
  "analyticsFeatures": [
    "ประสิทธิภาพของเจ้าหน้าที่รายบุคคล",
    "ผลการดำเนินงานของแต่ละแคมเปญ",
    "ระยะเวลาการสนทนา",
    "อัตราการรับสาย (ASR)",
    "อัตราการละทิ้งสาย",
    "การติดตามยอดขายและการแปลงสภาพ",
    "การวิเคราะห์ผลการโทร (Dispositions)",
    "ประสิทธิภาพของเส้นทางเครือข่าย",
    "คุณภาพของผู้ให้บริการเครือข่าย",
    "การวิเคราะห์ต้นทุนอย่างละเอียด",
    "รายงานสรุปรายชั่วโมง รายวัน และรายเดือน",
    "บันทึกข้อมูลการโทรอย่างละเอียด (CDR)"
  ],
  "analyticsSubtext": "ตั้งแต่บทสนทนารายบุคคลไปจนถึงต้นทุนเครือข่ายทั่วโลก มองเห็นภาพรวมทั้งหมดได้อย่างชัดเจน",
  "analyticsCard": {
    "title": "ประสิทธิภาพของแคมเปญ",
    "exportBtn": "ส่งออกข้อมูล",
    "tabHourly": "รายชั่วโมง",
    "tabDaily": "รายวัน",
    "tabMonthly": "รายเดือน",
    "timeframe": "01–07 ต.ค. 2026",
    "stat1Label": "การโทรทั้งหมด",
    "stat1Val": "1,842",
    "stat2Label": "อัตราการรับสาย",
    "stat2Val": "86.2%",
    "stat3Label": "ปิดการขายสำเร็จ",
    "stat3Val": "18.4%",
    "legendCalls": "สายที่โทร",
    "legendAnswered": "สายที่รับ",
    "dispositionTitle": "ผลลัพธ์การโทร",
    "note": "ข้อมูลรายงานจำลอง • ส่งออกรายละเอียดเชิงลึกของทุกสายสนทนาได้ทันที"
  },
  "ctaBadge": "ร่วมสร้างเครือข่ายการสื่อสารธุรกิจของคุณ",
  "ctaTitle": "ขยายธุรกิจของคุณด้วยโซลูชันระบบโทรศัพท์และ SMS สำหรับองค์กร",
  "ctaSubtitle": "ตั้งแต่ระบบกำหนดเส้นทางเสียงอัจฉริยะและการเชื่อมต่อระหว่างประเทศ ไปจนถึง AI Voice และเบอร์โทรเสมือน iNet Global พร้อมส่งมอบโครงสร้างพื้นฐานด้านการสื่อสารที่ช่วยให้ธุรกิจเชื่อมต่อกับลูกค้าทั่วโลกได้อย่างคมชัด ปลอดภัย และมีเสถียรภาพ",
  "getStarted": "เริ่มต้นใช้งาน",
  "contactUs": "ติดต่อเรา",
  "ctaTrust1": "ข้อตกลงระดับการบริการ SLA มาตรฐานองค์กร",
  "ctaTrust2": "เปิดใช้งาน WebRTC ได้ทันที",
  "ctaTrust3": "ทีมงานสนับสนุนเฉพาะทางตลอด 24/7"
};

const tl: DailerSolutionTranslation = {
  "heroBadge": "SOLUSYON SA CALL CENTER DIALER",
  "heroTitle": "Makabagong Call Center Dialer para sa Desktop at Mobile",
  "heroDesc": "Ikonekta ang iyong mga ahente, customer, at mga pandaigdigang ruta sa pamamagitan ng isang maaasahang calling platform. Gamitin ang aming browser-based desktop dialer o mobile dialer upang pamahalaan ang mga papalabas na tawag gamit ang matalinong pagruruta, live monitoring, analytics, at real-time control.",
  "requestDemo": "Humiling ng Demo",
  "exploreDialer": "Tuklasin ang Dialer",
  "heroFootnote": "Isang konektadong workspace. Mula sa unang tawag hanggang sa huling ulat.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Available ang ahente",
    "campaign": "Customer follow-up",
    "campaignMeta": "Progresibong kampanya • Ngayon",
    "contactsCount": "128 contact",
    "connectedBadge": "Konektado - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Tapusin ang tawag",
    "tabContact": "Contact",
    "tabHistory": "Kasaysayan",
    "tabNotes": "Mga Tala",
    "customerDetailsTitle": "MGA DETALYE NG CUSTOMER",
    "companyLabel": "Kumpanya",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Email",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Huling contact",
    "lastContactVal": "07 Okt 2026",
    "dispositionLabel": "RESULTA NG TAWAG",
    "dispositionVal": "Nai-iskedyul ang follow-up",
    "recordingText": "Kasalukuyang nagre-record",
    "stat1Label": "Mga tawag ngayon",
    "stat1Val": "46",
    "stat2Label": "Nakakonekta",
    "stat2Val": "38",
    "stat3Label": "Oras ng pag-uusap",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "Ang tamang ruta. Bawat tawag.",
    "floatBadgeDesc": "UK · Carrier A · Kalidad 98.6%"
  },
  "highlights": [
    {
      "title": "Dialer na Nakabatay sa Browser"
    },
    {
      "title": "Mobile Dialer"
    },
    {
      "title": "Pandaigdigang Ruta A–Z"
    },
    {
      "title": "Predictive at Progressive Dialing"
    },
    {
      "title": "Live Call Monitoring"
    },
    {
      "title": "Real-Time na Analytics"
    }
  ],
  "desktopBadge": "Desktop Browser Dialer",
  "desktopTitle": "Gawing Propesyonal na Call Center ang Kahit Anong Computer",
  "desktopSubtitle": "Walang kumplikadong pag-install ng software. Ligtas na makakapag-log in ang mga ahente gamit ang kanilang browser at magsimulang tumawag agad.",
  "desktopFootnote": "Ang iyong browser ang iyong workspace. Ligtas na access ng ahente nang walang kumplikadong pag-install.",
  "desktopFeaturesTitle": "Mga Tampok",
  "desktopFeatures": [
    "WebRTC browser calling",
    "Login at pamamahala ng ahente",
    "Pindutin para tumawag (Click-to-call)",
    "Pamamahala ng mga contact",
    "Kasaysayan ng tawag",
    "Pag-record ng tawag",
    "Paglipat ng tawag (Transfer)",
    "Hold at mute",
    "Pamamahala ng disposition ng tawag",
    "Pagsubaybay sa katayuan ng ahente",
    "Real-time na istatistika ng tawag"
  ],
  "desktopMainHeading": "Isang Dialer. Para sa Bawat Pangangailangan sa Pagtawag.",
  "desktopWorkspaceTitle": "Ang iyong browser ang iyong pinagsamang workspace.",
  "desktopWorkspaceSubtitle": "Ligtas na access ng ahente. Walang kumplikadong pag-install na kailangan.",
  "mobileBadge": "Mobile Dialer",
  "mobileTitle": "Dalhin ang Iyong Operasyon sa Pagtawag Kahit Saan",
  "mobileSubtitle": "Bigyan ang mga remote at field agent ng propesyonal na karanasan sa pagtawag gamit ang mobile na konektado sa imprastraktura ng iyong negosyo.",
  "mobileFootnote": "Ang numero ng iyong negosyo. Saanman ka dalhin ng iyong trabaho.",
  "mobileFeaturesTitle": "Mga Tampok sa Mobile",
  "mobileFeatures": [
    "Arkitekturang tugma sa Android at iOS",
    "SIP at WebRTC calling",
    "Pagsabay-sabay (sync) ng mga contact",
    "Kasaysayan ng tawag",
    "Click-to-call",
    "Pamamahala ng Caller ID",
    "Pag-record ng tawag",
    "Katayuan ng availability ng ahente",
    "Push notifications",
    "Ligtas na pagpapatotoo (authentication)"
  ],
  "mobileSyncCard": {
    "title": "Naka-sync palagi ang mga contact.",
    "desc": "Ang iyong mga customer at kasaysayan ng tawag, palaging kasama mo.",
    "badge": "Naka-sync ngayon lang"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Magandang umaga, Alex",
    "status": "Available",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Caller ID: iNet Business",
    "tabDialer": "Dialer",
    "tabContacts": "Mga Contact",
    "tabHistory": "Kasaysayan"
  },
  "routesBadge": "Mga Makabagong Pandaigdigang Ruta A–Z",
  "routesTitle": "Abutin ang mga Customer sa Pamamagitan ng Tamang Ruta",
  "routesSubtitle": "Kumonekta sa maraming telecommunication carrier at matalinong pamahalaan ang iyong pandaigdigang trapiko ng boses.",
  "routesFeaturesTitle": "Pamamahala ng Ruta",
  "routesFeatures": [
    "Pandaigdigang destinasyon A–Z",
    "Pagsasama ng maraming carrier",
    "Pagruruta batay sa prefix",
    "Least-cost routing (LCR)",
    "Pagruruta batay sa kalidad",
    "Failover at backup routing",
    "Pagruruta batay sa prayoridad",
    "Pagruruta batay sa destinasyon",
    "Pagsubaybay sa pagganap ng carrier",
    "Pamamahala ng gastos sa ruta"
  ],
  "routeControlCard": {
    "title": "Pandaigdigang kontrol sa ruta",
    "badge": "Maayos ang mga ruta",
    "agentCall": "Tawag ng ahente",
    "smartRouting": "Matalinong pagruruta",
    "smartRoutingDesc": "Pinakamahusay na rutang magagamit",
    "carrier1": "Carrier A · Prayoridad 1",
    "carrier2": "Carrier B · Prayoridad 2",
    "carrier3": "Carrier C · Failover",
    "tableDest": "Destinasyon",
    "tableCarrier": "Carrier",
    "tableQuality": "Kalidad",
    "tableRate": "/ min",
    "note": "Mga halimbawang destinasyon, kalidad ng carrier, at mga rate."
  },
  "routesEngine": {
    "title": "Smart Routing Engine",
    "desc": "Awtomatikong pinipili ang pinakamagandang ruta batay sa destinasyon, presyo, kalidad ng boses, availability, at pagganap ng carrier.",
    "tags": [
      "Destinasyon",
      "Presyo",
      "Kalidad",
      "Availability",
      "Pagganap ng Carrier"
    ]
  },
  "monitoringBadge": "Advanced Call Center Monitoring",
  "monitoringTitle": "Kumpletong Pagtingin sa Iyong Call Center",
  "monitoringSubtitle": "Subaybayan ang iyong buong operasyon mula sa isang sentralisadong dashboard.",
  "monitoringLiveHeader": "Live na Pagsubaybay",
  "monitoringLiveSub": "Tingnan ang nangyayari sa mismong oras na ito.",
  "monitoringKpis": [
    {
      "label": "Aktibong tawag",
      "value": "128"
    },
    {
      "label": "Nakatambay na tawag",
      "value": "12"
    },
    {
      "label": "Available na ahente",
      "value": "36"
    },
    {
      "label": "Abalang ahente",
      "value": "64"
    },
    {
      "label": "Katayuan ng ahente",
      "value": "Live"
    },
    {
      "label": "Tawag bawat segundo",
      "value": "8.4"
    },
    {
      "label": "Rate ng pagsagot",
      "value": "86.2%"
    },
    {
      "label": "Average na tagal",
      "value": "04:32"
    },
    {
      "label": "Sabay-sabay na tawag",
      "value": "140"
    },
    {
      "label": "Bigo na tawag",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Pangkalahatang-ideya ng call center",
    "updateMeta": "Lahat ng kampanya • 08 Okt 2026",
    "note": "Live dashboard • Subaybayan ang mga ahente, pila, at kalidad ng tawag mula sa iisang screen.",
    "cols": {
      "agent": "Ahente",
      "campaign": "Kampanya",
      "status": "Katayuan",
      "duration": "Tagal",
      "destination": "Destinasyon",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Mga Tool ng Supervisor",
  "supervisorToolsSubtitle": "Bigyan ang mga manager ng kumpletong kontrol sa pagsasanay ng ahente at kalidad.",
  "supervisorTools": [
    {
      "title": "Pakikinig (Listen)",
      "desc": "Subaybayan ang mga live na tawag nang tahimik para sa quality assurance."
    },
    {
      "title": "Pabulong (Whisper)",
      "desc": "Gabayan ang ahente nang hindi naririnig ng customer ang boses ng supervisor."
    },
    {
      "title": "Pagsali (Barge-In)",
      "desc": "Direktang pumasok sa aktibong pag-uusap kapag kinakailangan ng agarang tulong."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Mga Tawag",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Real-Time na Wallboard",
    "desc": "Ipakita ang mga live na KPI ng call center sa malalaking screen."
  },
  "dialingModesBadge": "Mas matalinong outbound calling",
  "dialingModesTitle": "Mga Advanced na Mode sa Pag-dial",
  "dialingModesSubtitle": "Piliin ang diskarte sa pagtawag na akma sa iyong operasyon.",
  "dialingModes": [
    {
      "title": "Predictive Dialer",
      "desc": "Awtomatikong tumatawag sa maraming numero nang sabay-sabay at ikinokonekta ang mga nasagot sa mga libreng ahente.",
      "flow": "Maraming tawag → Libreng ahente",
      "tag": "MATAAS NA VOLUME NG TAWAG"
    },
    {
      "title": "Progressive Dialer",
      "desc": "Tinatawagan lamang ang susunod na customer kapag naging available na ang isang ahente.",
      "flow": "Libreng ahente → Susunod na customer",
      "tag": "DIALING SA BILIS NG AHENTE"
    },
    {
      "title": "Power Dialer",
      "desc": "Awtomatikong dumadaan sa mga listahan ng contact upang i-maximize ang pagiging produktibo ng ahente.",
      "flow": "Listahan ng contact → Tuloy-tuloy na pagtawag",
      "tag": "NAKAPOKUS NA PRODUKTIBIDAD"
    },
    {
      "title": "Preview Dialer",
      "desc": "Pinapayagan ang mga ahente na suriin ang impormasyon ng customer bago simulan ang tawag.",
      "flow": "Suriin ang customer → Simulan ang tawag",
      "tag": "PERSONALISADONG PAG-UUSAP"
    }
  ],
  "analyticsBadge": "Analytics at Ulat ng Tawag",
  "analyticsTitle": "Gawing Mas Magandang Resulta ang Data ng Tawag",
  "analyticsSubtitle": "Subaybayan ang bawat aspeto ng iyong operasyon sa pagtawag.",
  "analyticsFeatures": [
    "Pagganap ng ahente",
    "Pagganap ng kampanya",
    "Tagal ng tawag",
    "Rate ng pagsagot (ASR)",
    "Rate ng pag-abandona",
    "Pagsubaybay sa conversion",
    "Resulta ng tawag (Dispositions)",
    "Pagganap ng ruta",
    "Pagganap ng carrier",
    "Pagsusuri sa gastos",
    "Mga ulat bawat oras, araw, at buwan",
    "Detalyadong tala ng tawag (CDR)"
  ],
  "analyticsSubtext": "Mula sa mga indibidwal na pag-uusap hanggang sa pandaigdigang gastos sa carrier, magkaroon ng malinaw na pananaw.",
  "analyticsCard": {
    "title": "Pagganap ng kampanya",
    "exportBtn": "I-export",
    "tabHourly": "Bawat oras",
    "tabDaily": "Araw-araw",
    "tabMonthly": "Buwan-buwan",
    "timeframe": "01–07 Okt 2026",
    "stat1Label": "Kabuuang tawag",
    "stat1Val": "1,842",
    "stat2Label": "Rate ng pagsagot",
    "stat2Val": "86.2%",
    "stat3Label": "Mga Conversion",
    "stat3Val": "18.4%",
    "legendCalls": "Mga Tawag",
    "legendAnswered": "Sinagot",
    "dispositionTitle": "Resulta ng tawag",
    "note": "Halimbawang data ng ulat • I-export ang detalye sa likod ng bawat tawag."
  },
  "ctaBadge": "BUUIN NATIN ANG IYONG MESSAGING NETWORK",
  "ctaTitle": "Palaguin ang Iyong Negosyo gamit ang Mga Solusyon sa Business SMS at Voice",
  "ctaSubtitle": "Mula sa matalinong voice routing at pandaigdigang terminasyon hanggang sa AI Voice at mga virtual na numero, nagbibigay ang iNet Global ng mga scalable na solusyon sa komunikasyon para sa mga negosyo sa buong mundo.",
  "getStarted": "Magsimula Na",
  "contactUs": "Makipag-ugnayan sa Amin",
  "ctaTrust1": "Enterprise Dialer SLA",
  "ctaTrust2": "Mabilisang WebRTC Activation",
  "ctaTrust3": "24/7 Dedikadong Suporta"
};

const bn: DailerSolutionTranslation = {
  "heroBadge": "কল সেন্টার ডায়ালার সমাধান",
  "heroTitle": "ডেস্কটপ ও মোবাইলের জন্য পরবর্তী প্রজন্মের কল সেন্টার ডায়ালার",
  "heroDesc": "একটি শক্তিশালী কলিং প্ল্যাটফর্মের মাধ্যমে আপনার এজেন্ট, গ্রাহক এবং বৈশ্বিক রুটগুলোকে সংযুক্ত করুন। উন্নত রাউটিং, লাইভ মনিটরিং, অ্যানালিটিক্স এবং রিয়েল-টাইম নিয়ন্ত্রণের সাথে আউটবাউন্ড কলিং পরিচালনা করতে আমাদের ব্রাউজার-ভিত্তিক ডেস্কটপ ডায়ালার বা মোবাইল ডায়ালার ব্যবহার করুন।",
  "requestDemo": "ডেমো অনুরোধ করুন",
  "exploreDialer": "ডায়ালার দেখুন",
  "heroFootnote": "একটি সংযুক্ত কর্মক্ষেত্র। প্রথম কল থেকে চূড়ান্ত রিপোর্ট পর্যন্ত।",
  "heroMockup": {
    "title": "iNet ডায়ালার",
    "agentStatus": "এজেন্ট উপলব্ধ",
    "campaign": "গ্রাহক ফলো-আপ",
    "campaignMeta": "প্রগ্রেসিভ ক্যাম্পেইন • আজ",
    "contactsCount": "১২৮ পরিচিতি",
    "connectedBadge": "সংযুক্ত - WebRTC",
    "callerName": "জেমি লসন",
    "callerPhone": "+44 20 7946 0328",
    "duration": "০৩:৪২",
    "endCall": "কল শেষ করুন",
    "tabContact": "যোগাযোগ",
    "tabHistory": "ইতিহাস",
    "tabNotes": "নোট",
    "customerDetailsTitle": "গ্রাহকের বিবরণ",
    "companyLabel": "কোম্পানি",
    "companyVal": "Lawson & Co.",
    "emailLabel": "ইমেইল",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "শেষ যোগাযোগ",
    "lastContactVal": "০৭ অক্টোবর ২০২৬",
    "dispositionLabel": "কলের ফলাফল",
    "dispositionVal": "ফলো-আপ নির্ধারিত",
    "recordingText": "রেকর্ডিং চলছে",
    "stat1Label": "আজকের কল",
    "stat1Val": "৪৬",
    "stat2Label": "সংযুক্ত",
    "stat2Val": "৩৮",
    "stat3Label": "কথোপকথনের সময়",
    "stat3Val": "০২ঘণ্টা ১৮মি",
    "floatBadgeTitle": "সঠিক রুট। প্রতিটি কলে।",
    "floatBadgeDesc": "যুক্তরাজ্য · ক্যারিয়ার A · গুণমান ৯৮.৬%"
  },
  "highlights": [
    {
      "title": "ব্রাউজার-ভিত্তিক ডায়ালার"
    },
    {
      "title": "মোবাইল ডায়ালার"
    },
    {
      "title": "A–Z গ্লোবাল রুট"
    },
    {
      "title": "প্রেডিক্টিভ ও প্রগ্রেসিভ ডায়ালিং"
    },
    {
      "title": "লাইভ কল মনিটরিং"
    },
    {
      "title": "রিয়েল-টাইম অ্যানালিটিক্স"
    }
  ],
  "desktopBadge": "ডেস্কটপ ব্রাউজার ডায়ালার",
  "desktopTitle": "যেকোনো কম্পিউটারকে একটি পেশাদার কল সেন্টারে রূপান্তর করুন",
  "desktopSubtitle": "কোনো জটিল সফটওয়্যার ইনস্টলেশন নেই। এজেন্টরা তাদের ব্রাউজারের মাধ্যমে নিরাপদে লগ ইন করতে পারেন এবং অবিলম্বে কল করা শুরু করতে পারেন।",
  "desktopFootnote": "আপনার ব্রাউজারই আপনার কর্মক্ষেত্র। নিরাপদ এজেন্ট অ্যাক্সেস এবং কোনো জটিল ইনস্টলেশন নেই।",
  "desktopFeaturesTitle": "বৈশিষ্ট্যসমূহ",
  "desktopFeatures": [
    "WebRTC ব্রাউজার কলিং",
    "এজেন্ট লগইন ও ব্যবস্থাপনা",
    "ক্লিক-টু-কল (Click-to-call)",
    "পরিচিতি ব্যবস্থাপনা",
    "কলের ইতিহাস",
    "কল রেকর্ডিং",
    "কল ট্রান্সফার",
    "হোল্ড ও মিউট",
    "কলের ফলাফল (Disposition) ব্যবস্থাপনা",
    "এজেন্ট স্ট্যাটাস ট্র্যাকিং",
    "রিয়েল-টাইম কল পরিসংখ্যান"
  ],
  "desktopMainHeading": "একটি ডায়ালার। প্রতিটি কলিং প্রয়োজনীয়তা পূরণ করে।",
  "desktopWorkspaceTitle": "আপনার ব্রাউজারই আপনার সম্পূর্ণ কর্মক্ষেত্র।",
  "desktopWorkspaceSubtitle": "নিরাপদ এজেন্ট অ্যাক্সেস। কোনো জটিল সফটওয়্যার ইনস্টলেশন নেই।",
  "mobileBadge": "মোবাইল ডায়ালার",
  "mobileTitle": "আপনার কলিং অপারেশন যেকোনো স্থানে পরিচালনা করুন",
  "mobileSubtitle": "রিমোট এবং ফিল্ড এজেন্টদের আপনার ব্যবসায়িক কলিং অবকাঠামোর সাথে সংযুক্ত একটি পেশাদার মোবাইল কলিং অভিজ্ঞতা দিন।",
  "mobileFootnote": "আপনার ব্যবসায়িক নম্বর। আপনি যেখানেই কাজ করুন না কেন।",
  "mobileFeaturesTitle": "মোবাইল বৈশিষ্ট্য",
  "mobileFeatures": [
    "Android এবং iOS সামঞ্জস্যপূর্ণ আর্কিটেকচার",
    "SIP ও WebRTC ভয়েস কলিং",
    "পরিচিতি সিঙ্ক",
    "কল হিস্ট্রি",
    "ক্লিক-টু-কল",
    "কলার আইডি (Caller ID) ব্যবস্থাপনা",
    "কল রেকর্ডিং",
    "এজেন্ট উপলব্ধতা স্ট্যাটাস",
    "পুশ নোটিফিকেশন",
    "নিরাপদ প্রমাণীকরণ"
  ],
  "mobileSyncCard": {
    "title": "পরিচিতি সবসময় সিঙ্ক করা থাকে।",
    "desc": "আপনার গ্রাহক এবং কল ইতিহাস সর্বদা আপনার সাথে।",
    "badge": "এইমাত্র সিঙ্ক হয়েছে"
  },
  "mobileDialerMockup": {
    "title": "iNet ডায়ালার",
    "greeting": "শুভ সকাল, Alex",
    "status": "উপলব্ধ",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "কলার আইডি: iNet Business",
    "tabDialer": "ডায়ালার",
    "tabContacts": "পরিচিতি",
    "tabHistory": "ইতিহাস"
  },
  "routesBadge": "উন্নত A–Z গ্লোবাল রুট",
  "routesTitle": "সঠিক ও নির্ভরযোগ্য রুটের মাধ্যমে গ্রাহকদের কাছে পৌঁছান",
  "routesSubtitle": "একাধিক টেলিকম ক্যারিয়ার এবং সরবরাহকারীদের সাথে সংযুক্ত হন এবং বুদ্ধিমত্তার সাথে বৈশ্বিক ভয়েস ট্র্যাফিক পরিচালনা করুন।",
  "routesFeaturesTitle": "রুট ব্যবস্থাপনা",
  "routesFeatures": [
    "A–Z আন্তর্জাতিক গন্তব্য",
    "মাল্টি-ক্যারিয়ার ইন্টিগ্রেশন",
    "উপসর্গ-ভিত্তিক (Prefix) রাউটিং",
    "সর্বনিম্ন খরচের রাউটিং (LCR)",
    "গুণমান-ভিত্তিক রাউটিং",
    "ফেলওভার এবং ব্যাকআপ রাউটিং",
    "অগ্রাধিকার-ভিত্তিক রাউটিং",
    "গন্তব্য-ভিত্তিক রাউটিং",
    "ক্যারিয়ার কর্মক্ষমতা পর্যবেক্ষণ",
    "রুট খরচ ব্যবস্থাপনা"
  ],
  "routeControlCard": {
    "title": "গ্লোবাল রুট নিয়ন্ত্রণ",
    "badge": "রুট কার্যকর",
    "agentCall": "এজেন্ট কল",
    "smartRouting": "স্মার্ট রাউটিং",
    "smartRoutingDesc": "সেরা উপলব্ধ রুট",
    "carrier1": "ক্যারিয়ার A · অগ্রাধিকার ১",
    "carrier2": "ক্যারিয়ার B · অগ্রাধিকার ২",
    "carrier3": "ক্যারিয়ার C · ফেলওভার",
    "tableDest": "গন্তব্য",
    "tableCarrier": "ক্যারিয়ার",
    "tableQuality": "গুণমান",
    "tableRate": "/ মিনিট",
    "note": "প্রদর্শিত গন্তব্য, ক্যারিয়ারের মান এবং রেট উদাহরণের জন্য।"
  },
  "routesEngine": {
    "title": "স্মার্ট রাউটিং ইঞ্জিন",
    "desc": "গন্তব্য, মূল্য, ভয়েস গুণমান, প্রাপ্যতা এবং ক্যারিয়ারের কর্মক্ষমতার উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সেরা রুট নির্বাচন করে।",
    "tags": [
      "গন্তব্য",
      "মূল্য",
      "গুণমান",
      "প্রাপ্যতা",
      "ক্যারিয়ার পারফরম্যান্স"
    ]
  },
  "monitoringBadge": "উন্নত কল সেন্টার মনিটরিং",
  "monitoringTitle": "আপনার কল সেন্টারের সম্পূর্ণ দৃশ্যমানতা",
  "monitoringSubtitle": "একটি কেন্দ্রীভূত লাইভ ড্যাশবোর্ড থেকে আপনার সম্পূর্ণ অপারেশন পর্যবেক্ষণ করুন।",
  "monitoringLiveHeader": "লাইভ মনিটরিং",
  "monitoringLiveSub": "এই মুহূর্তে কী ঘটছে তা সরাসরি দেখুন।",
  "monitoringKpis": [
    {
      "label": "সক্রিয় কল",
      "value": "১২৮"
    },
    {
      "label": "অপেক্ষারত কল",
      "value": "১২"
    },
    {
      "label": "উপলব্ধ এজেন্ট",
      "value": "৩৬"
    },
    {
      "label": "ব্যস্ত এজেন্ট",
      "value": "৬৪"
    },
    {
      "label": "এজেন্ট স্ট্যাটাস",
      "value": "লাইভ"
    },
    {
      "label": "প্রতি সেকেন্ডে কল",
      "value": "৮.৪"
    },
    {
      "label": "উত্তরের হার",
      "value": "৮৬.২%"
    },
    {
      "label": "গড় কল সময়",
      "value": "০৪:৩২"
    },
    {
      "label": "একযোগে কল",
      "value": "১৪০"
    },
    {
      "label": "ব্যর্থ কল",
      "value": "৩",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "কল সেন্টার ওভারভিউ",
    "updateMeta": "সমস্ত ক্যাম্পেইন • ০৮ অক্টোবর ২০২৬",
    "note": "লাইভ ড্যাশবোর্ড • এক স্ক্রিন থেকে এজেন্ট, কিউ এবং ভয়েস গুণমান পর্যবেক্ষণ করুন।",
    "cols": {
      "agent": "এজেন্ট",
      "campaign": "ক্যাম্পেইন",
      "status": "স্ট্যাটাস",
      "duration": "সময়কাল",
      "destination": "গন্তব্য",
      "supervisor": "সুপারভাইজার"
    }
  },
  "supervisorToolsTitle": "সুপারভাইজার টুলস",
  "supervisorToolsSubtitle": "ম্যানেজারদের এজেন্টদের প্রশিক্ষণ এবং মান নিশ্চিত করার সম্পূর্ণ নিয়ন্ত্রণ প্রদান করুন।",
  "supervisorTools": [
    {
      "title": "শোনা (Listen)",
      "desc": "মান নিয়ন্ত্রণের জন্য গ্রাহক বা এজেন্টকে বাধা না দিয়ে লাইভ কল শুনুন।"
    },
    {
      "title": "ফিসফিস (Whisper)",
      "desc": "গ্রাহক শুনতে না পেয়ে শুধুমাত্র এজেন্টকে সরাসরি কলে নির্দেশ দিন।"
    },
    {
      "title": "হস্তক্ষেপ (Barge-In)",
      "desc": "জরুরি প্রয়োজনে সরাসরি কথোপকথনে প্রবেশ করে ৩-মুখী কলে রূপান্তর করুন।"
    }
  ],
  "wallboardCard": {
    "stat1": "১২৮",
    "stat1Sub": "কল",
    "stat2": "৮৬%",
    "stat2Sub": "ASR",
    "title": "রিয়েল-টাইম ওয়ালবোর্ড",
    "desc": "বড় স্ক্রিনে কল সেন্টারের লাইভ কেপিআই প্রদর্শন করুন।"
  },
  "dialingModesBadge": "স্মার্ট আউটবাউন্ড কলিং",
  "dialingModesTitle": "উন্নত ডায়ালিং মোডসমূহ",
  "dialingModesSubtitle": "আপনার অপারেশনাল লক্ষ্যের সাথে মানানসই ডায়ালিং কৌশল নির্বাচন করুন।",
  "dialingModes": [
    {
      "title": "প্রেডিক্টিভ ডায়ালার (Predictive)",
      "desc": "স্বয়ংক্রিয়ভাবে একাধিক নম্বরে কল করে এবং উত্তর দেওয়া কলগুলো উপলব্ধ এজেন্টদের সাথে যুক্ত করে।",
      "flow": "একাধিক কল → উপলব্ধ এজেন্ট",
      "tag": "উচ্চ পরিমাণের কল ক্যাম্পেইন"
    },
    {
      "title": "প্রগ্রেসিভ ডায়ালার (Progressive)",
      "desc": "শুধুমাত্র তখনই পরবর্তী গ্রাহককে কল করে যখন একজন এজেন্ট প্রস্তুত এবং মুক্ত হন।",
      "flow": "উপলব্ধ এজেন্ট → পরবর্তী গ্রাহক",
      "tag": "এজেন্টের গতিতে ডায়ালিং"
    },
    {
      "title": "পাওয়ার ডায়ালার (Power Dialer)",
      "desc": "এজেন্টের উৎপাদনশীলতা বাড়াতে স্বয়ংক্রিয়ভাবে পরিচিতি তালিকা ধরে ধারাবাহিকভাবে কল করে।",
      "flow": "পরিচিতি তালিকা → অবিরাম কলিং",
      "tag": "উৎপাদনশীলতার উপর জোর"
    },
    {
      "title": "প্রিভিউ ডায়ালার (Preview Dialer)",
      "desc": "কল শুরু করার আগে এজেন্টদের গ্রাহকের তথ্য এবং ইতিহাস পর্যালোচনা করার সুযোগ দেয়।",
      "flow": "গ্রাহক পর্যালোচনা → কল শুরু",
      "tag": "ব্যক্তিগতকৃত কথোপকথন"
    }
  ],
  "analyticsBadge": "কল অ্যানালিটিক্স ও রিপোর্ট",
  "analyticsTitle": "কল ডেটাকে উন্নত ব্যবসায়িক ফলাফলে রূপান্তর করুন",
  "analyticsSubtitle": "আপনার কলিং অপারেশনের প্রতিটি দিক নির্ভুলভাবে ট্র্যাক করুন।",
  "analyticsFeatures": [
    "এজেন্ট পারফরম্যান্স",
    "ক্যাম্পেইন পারফরম্যান্স",
    "কলের সময়কাল",
    "উত্তরের হার (ASR)",
    "কল পরিত্যাগের হার",
    "কনভার্সন ট্র্যাকিং",
    "কলের ফলাফল (Dispositions)",
    "রুট পারফরম্যান্স",
    "ক্যারিয়ার পারফরম্যান্স",
    "খরচ বিশ্লেষণ",
    "প্রতি ঘণ্টার, দৈনিক ও মাসিক রিপোর্ট",
    "কল ডিটেইল রেকর্ড (CDR)"
  ],
  "analyticsSubtext": "ব্যক্তিগত সংলাপ থেকে শুরু করে বৈশ্বিক ক্যারিয়ার খরচ পর্যন্ত, সম্পূর্ণ চিত্র পরিষ্কারভাবে দেখুন।",
  "analyticsCard": {
    "title": "ক্যাম্পেইন পারফরম্যান্স",
    "exportBtn": "রপ্তানি করুন",
    "tabHourly": "ঘণ্টায়",
    "tabDaily": "দৈনিক",
    "tabMonthly": "মাসিক",
    "timeframe": "০১–০৭ অক্টোবর ২০২৬",
    "stat1Label": "মোট কল",
    "stat1Val": "১,৮৪২",
    "stat2Label": "উত্তরের হার",
    "stat2Val": "৮৬.২%",
    "stat3Label": "কনভার্সন",
    "stat3Val": "১৮.৪%",
    "legendCalls": "কলসমূহ",
    "legendAnswered": "উত্তর দেওয়া হয়েছে",
    "dispositionTitle": "কলের ফলাফল",
    "note": "নমুনা রিপোর্ট ডেটা • প্রতিটি কলের বিস্তারিত বিবরণ সহজেই এক্সপোর্ট করুন।"
  },
  "ctaBadge": "আসুন আপনার মেসেজিং নেটওয়ার্ক তৈরি করি",
  "ctaTitle": "ব্যবসায়িক সমাধানগুলির সাথে আপনার ব্যবসা বৃদ্ধি করুন",
  "ctaSubtitle": "বুদ্ধিমান ভয়েস রাউটিং এবং আন্তর্জাতিক সমাপ্তি থেকে শুরু করে এআই ভয়েস এবং ভার্চুয়াল নম্বর পর্যন্ত, iNet Global স্কেলেবল টেলিকম সমাধান প্রদান করে যা বিশ্বজুড়ে গ্রাহকদের সাথে যুক্ত হতে সাহায্য করে।",
  "getStarted": "শুরু করুন",
  "contactUs": "যোগাযোগ করুন",
  "ctaTrust1": "এন্টারপ্রাইজ ডায়ালার SLA",
  "ctaTrust2": "তাত্ক্ষণিক WebRTC সক্রিয়করণ",
  "ctaTrust3": "২৪/৭ ডেডিকেটেড সাপোর্ট"
};

const ta: DailerSolutionTranslation = {
  "heroBadge": "கால் சென்டர் டயலர் தீர்வு",
  "heroTitle": "டெஸ்க்டாப் மற்றும் மொபைலுக்கான அடுத்த தலைமுறை கால் சென்டர் டயலர்",
  "heroDesc": "ஒருங்கிணைந்த மற்றும் சக்திவாய்ந்த அழைப்பு தளம் மூலம் உங்கள் முகவர்கள், வாடிக்கையாளர்கள் மற்றும் உலகளாவிய வழித்தடங்களை இணைக்கவும். ஸ்மார்ட் ரூட்டிங், நேரலை கண்காணிப்பு, பகுப்பாய்வு மற்றும் நிகழ்நேரக் கட்டுப்பாட்டுடன் வெளிச்செல்லும் அழைப்புகளை நிர்வகிக்க எங்கள் உலாவி அடிப்படையிலான டெஸ்க்டாப் டயலர் அல்லது மொபைல் டயலரைப் பயன்படுத்தவும்.",
  "requestDemo": "டெமோ கோரிக்கை",
  "exploreDialer": "டயலரை ஆராயுங்கள்",
  "heroFootnote": "ஒரு ஒருங்கிணைந்த பணியிடம். முதல் அழைப்பிலிருந்து இறுதி அறிக்கை வரை.",
  "heroMockup": {
    "title": "iNet டயலர்",
    "agentStatus": "முகவர் தயார்",
    "campaign": "வாடிக்கையாளர் பின்தொடர்தல்",
    "campaignMeta": "முற்போக்கான பிரச்சாரம் • இன்று",
    "contactsCount": "128 தொடர்புகள்",
    "connectedBadge": "இணைக்கப்பட்டது - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "அழைப்பை முடிக்கவும்",
    "tabContact": "தொடர்பு",
    "tabHistory": "வரலாறு",
    "tabNotes": "குறிப்புகள்",
    "customerDetailsTitle": "வாடிக்கையாளர் விவரங்கள்",
    "companyLabel": "நிறுவனம்",
    "companyVal": "Lawson & Co.",
    "emailLabel": "மின்னஞ்சல்",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "கடைசி தொடர்பு",
    "lastContactVal": "07 அக் 2026",
    "dispositionLabel": "அழைப்பு நிலை",
    "dispositionVal": "பின்தொடர்தல் திட்டமிடப்பட்டது",
    "recordingText": "பதிவு செய்யப்படுகிறது",
    "stat1Label": "இன்றைய அழைப்புகள்",
    "stat1Val": "46",
    "stat2Label": "இணைக்கப்பட்டது",
    "stat2Val": "38",
    "stat3Label": "பேசிய நேரம்",
    "stat3Val": "02ம 18நி",
    "floatBadgeTitle": "சரியான வழித்தடம். ஒவ்வொரு அழைப்புக்கும்.",
    "floatBadgeDesc": "UK · கேரியர் A · தரம் 98.6%"
  },
  "highlights": [
    {
      "title": "உலாவி அடிப்படையிலான டயலர்"
    },
    {
      "title": "மொபைல் டயலர்"
    },
    {
      "title": "A–Z உலகளாவிய வழித்தடங்கள்"
    },
    {
      "title": "முன்கணிப்பு மற்றும் தொடர்ச்சியான டயலிங்"
    },
    {
      "title": "நேரலை அழைப்பு கண்காணிப்பு"
    },
    {
      "title": "நிகழ்நேர பகுப்பாய்வு"
    }
  ],
  "desktopBadge": "டெஸ்க்டாப் உலாவி டயலர்",
  "desktopTitle": "எந்த கணினியையும் தொழில்முறை கால் சென்டராக மாற்றவும்",
  "desktopSubtitle": "சிக்கலான மென்பொருள் நிறுவல்கள் தேவையில்லை. முகவர்கள் தங்கள் உலாவி மூலம் பாதுகாப்பாக உள்நுழைந்து உடனடியாக அழைப்புகளைத் தொடங்கலாம்.",
  "desktopFootnote": "உங்கள் உலாவியே உங்கள் பணியிடம். சிக்கலான நிறுவல்கள் இல்லாமல் பாதுகாப்பான முகவர் அணுகல்.",
  "desktopFeaturesTitle": "அம்சங்கள்",
  "desktopFeatures": [
    "WebRTC உலாவி அழைப்பு",
    "முகவர் உள்நுழைவு & மேலாண்மை",
    "கிளிக் செய்து அழைக்கவும் (Click-to-call)",
    "தொடர்புகள் மேலாண்மை",
    "அழைப்பு வரலாறு",
    "அழைப்பு பதிவு செய்தல்",
    "அழைப்பு பரிமாற்றம் (Transfer)",
    "ஹோல்ட் & மியூட்",
    "அழைப்பு முடிவு (Disposition) மேலாண்மை",
    "முகவர் நிலை கண்காணிப்பு",
    "நிகழ்நேர அழைப்பு புள்ளிவிவரங்கள்"
  ],
  "desktopMainHeading": "ஒரே டயலர். அனைத்து அழைப்புத் தேவைகளுக்கும்.",
  "desktopWorkspaceTitle": "உங்கள் உலாவியே உங்களின் முழுமையான பணியிடம்.",
  "desktopWorkspaceSubtitle": "முகவர்களுக்கான பாதுகாப்பான அணுகல். சிக்கலான மென்பொருள் நிறுவல்கள் தேவையில்லை.",
  "mobileBadge": "மொபைல் டயலர்",
  "mobileTitle": "உங்கள் அழைப்பு செயல்பாடுகளை எங்கு வேண்டுமானாலும் கொண்டு செல்லுங்கள்",
  "mobileSubtitle": "தொலைதூர மற்றும் கள முகவர்களுக்கு உங்கள் வணிகத் தொலைத்தொடர்புடன் இணைக்கப்பட்ட தொழில்முறை மொபைல் அழைப்பு அனுபவத்தை வழங்கவும்.",
  "mobileFootnote": "உங்கள் வணிக எண். நீங்கள் எங்கு பணிபுரிந்தாலும் உங்களுடன்.",
  "mobileFeaturesTitle": "மொபைல் அம்சங்கள்",
  "mobileFeatures": [
    "Android மற்றும் iOS இணக்கமான கட்டமைப்பு",
    "SIP & WebRTC குரல் அழைப்பு",
    "தொடர்புகள் ஒத்திசைவு (Sync)",
    "அழைப்பு வரலாறு",
    "கிளிக் செய்து அழைக்கவும்",
    "அழைப்பாளர் ஐடி (Caller ID) மேலாண்மை",
    "அழைப்பு பதிவு செய்தல்",
    "முகவர் கிடைக்கும் நிலை",
    "புஷ் அறிவிப்புகள்",
    "பாதுகாப்பான அங்கீகாரம்"
  ],
  "mobileSyncCard": {
    "title": "தொடர்புகள் எப்போதும் ஒத்திசைவில் உள்ளன.",
    "desc": "உங்கள் வாடிக்கையாளர்கள் மற்றும் அழைப்பு வரலாறு எப்போதும் உங்களுடன்.",
    "badge": "இப்போது ஒத்திசைக்கப்பட்டது"
  },
  "mobileDialerMockup": {
    "title": "iNet டயலர்",
    "greeting": "காலை வணக்கம், Alex",
    "status": "தயார்",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "அழைப்பாளர் எண்: iNet Business",
    "tabDialer": "டயலர்",
    "tabContacts": "தொடர்புகள்",
    "tabHistory": "வரலாறு"
  },
  "routesBadge": "மேம்பட்ட A–Z உலகளாவிய வழித்தடங்கள்",
  "routesTitle": "சரியான வழித்தடத்தின் மூலம் வாடிக்கையாளர்களை அடையுங்கள்",
  "routesSubtitle": "பல தொலைத்தொடர்பு நிறுவனங்களுடன் இணைந்து உங்கள் சர்வதேச குரல் போக்குவரத்தை புத்திசாலித்தனமாகவும் செலவு குறைந்ததாகவும் நிர்வகிக்கவும்.",
  "routesFeaturesTitle": "வழித்தட மேலாண்மை",
  "routesFeatures": [
    "A–Z சர்வதேச நாடுகள் & இலக்குகள்",
    "பல கேரியர் ஒருங்கிணைப்பு",
    "முன்னொட்டு (Prefix) அடிப்படையிலான ரூட்டிங்",
    "குறைந்த விலை ரூட்டிங் (LCR)",
    "குரல் தர அடிப்படையிலான ரூட்டிங்",
    "தானியங்கி காப்பு வழித்தடம் (Failover)",
    "முன்னுரிமை ரூட்டிங்",
    "இலக்கு அடிப்படையிலான ரூட்டிங்",
    "கேரியர் செயல்திறன் கண்காணிப்பு",
    "வழித்தட செலவு கட்டுப்பாடு"
  ],
  "routeControlCard": {
    "title": "உலகளாவிய வழித்தட கட்டுப்பாடு",
    "badge": "வழித்தடங்கள் சீரானவை",
    "agentCall": "முகவர் அழைப்பு",
    "smartRouting": "ஸ்மார்ட் ரூட்டிங்",
    "smartRoutingDesc": "சிறந்த கிடைக்கக்கூடிய வழித்தடம்",
    "carrier1": "கேரியர் A · முன்னுரிமை 1",
    "carrier2": "கேரியர் B · முன்னுரிமை 2",
    "carrier3": "கேரியர் C · காப்பு",
    "tableDest": "இலக்கு",
    "tableCarrier": "கேரியர்",
    "tableQuality": "தரம்",
    "tableRate": "/ நிமிடம்",
    "note": "இலக்குகள், கேரியர் தரம் மற்றும் கட்டணங்கள் விளக்க நோக்கத்திற்காக மட்டுமே."
  },
  "routesEngine": {
    "title": "ஸ்மார்ட் ரூட்டிங் எஞ்சின்",
    "desc": "இலக்கு, கட்டணம், ஒலி தரம், கிடைக்கும் தன்மை மற்றும் கேரியர் செயல்திறன் அடிப்படையில் சிறந்த வழியை தானாகத் தேர்ந்தெடுக்கிறது.",
    "tags": [
      "இலக்கு",
      "விலை",
      "தரம்",
      "கிடைக்கும் தன்மை",
      "கேரியர் செயல்திறன்"
    ]
  },
  "monitoringBadge": "மேம்பட்ட கால் சென்டர் கண்காணிப்பு",
  "monitoringTitle": "உங்கள் கால் சென்டர் செயல்பாடுகளின் முழுமையான பார்வை",
  "monitoringSubtitle": "ஒரு மையப்படுத்தப்பட்ட நேரலை டாஷ்போர்டில் இருந்து உங்கள் முழு செயல்பாட்டையும் கண்காணிக்கவும்.",
  "monitoringLiveHeader": "நேரலை கண்காணிப்பு",
  "monitoringLiveSub": "இந்த வினாடியில் என்ன நடக்கிறது என்பதை நேரடியாகப் பாருங்கள்.",
  "monitoringKpis": [
    {
      "label": "செயலில் உள்ளவை",
      "value": "128"
    },
    {
      "label": "காத்திருக்கும் அழைப்புகள்",
      "value": "12"
    },
    {
      "label": "தயாராக உள்ள முகவர்கள்",
      "value": "36"
    },
    {
      "label": "அழைப்பில் உள்ளவர்கள்",
      "value": "64"
    },
    {
      "label": "முகவர் நிலை",
      "value": "நேரலை"
    },
    {
      "label": "வினாடிக்கு அழைப்புகள்",
      "value": "8.4"
    },
    {
      "label": "பதில் அளிக்கும் விகிதம்",
      "value": "86.2%"
    },
    {
      "label": "சராசரி அழைப்பு நேரம்",
      "value": "04:32"
    },
    {
      "label": "ஒரே நேர அழைப்புகள்",
      "value": "140"
    },
    {
      "label": "தோல்வியடைந்த அழைப்புகள்",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "கால் சென்டர் கண்ணோட்டம்",
    "updateMeta": "அனைத்து பிரச்சாரங்களும் • 08 அக் 2026",
    "note": "நேரலை டாஷ்போர்டு • ஒரே திரையிலிருந்து முகவர்கள், வரிசைகள் மற்றும் குரல் தரத்தை கண்காணிக்கவும்.",
    "cols": {
      "agent": "முகவர்",
      "campaign": "பிரச்சாரம்",
      "status": "நிலை",
      "duration": "கால அளவு",
      "destination": "இலக்கு",
      "supervisor": "மேற்பார்வையாளர்"
    }
  },
  "supervisorToolsTitle": "மேற்பார்வையாளர் கருவிகள்",
  "supervisorToolsSubtitle": "முகவர்களைப் பயிற்றுவிக்கவும் தரத்தை உறுதிப்படுத்தவும் மேலாளர்களுக்கு முழுமையான கட்டுப்பாட்டை வழங்கவும்.",
  "supervisorTools": [
    {
      "title": "கேட்டல் (Listen)",
      "desc": "வாடிக்கையாளர் அறியாமல் தர உத்தரவாதத்திற்காக நேரலை அழைப்புகளைக் கேளுங்கள்."
    },
    {
      "title": "ரகசிய வழிகாட்டல் (Whisper)",
      "desc": "வாடிக்கையாளருக்குக் கேட்காமல் முகவருக்கு மட்டும் அழைப்பின் போது வழிகாட்டுங்கள்."
    },
    {
      "title": "இடையீடு (Barge-In)",
      "desc": "அவசரத் தேவை ஏற்படும் போது உரையாடலில் நேரடியாக இணைந்து 3-வழி அழைப்பாக மாற்றவும்."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "அழைப்புகள்",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "நிகழ்நேர வால்போர்டு (Wallboard)",
    "desc": "கால் சென்டரின் முக்கிய அளவீடுகளை பெரிய திரைகளில் நேரலையாகக் காட்சிப்படுத்துங்கள்."
  },
  "dialingModesBadge": "புத்திசாலித்தனமான வெளிச்செல்லும் அழைப்புகள்",
  "dialingModesTitle": "மேம்பட்ட டயலிங் முறைகள்",
  "dialingModesSubtitle": "உங்கள் வணிக மாதிரிக்கு மிகவும் பொருத்தமான டயலிங் உத்தியைத் தேர்ந்தெடுக்கவும்.",
  "dialingModes": [
    {
      "title": "முன்கணிப்பு டயலர் (Predictive Dialer)",
      "desc": "ஒரே நேரத்தில் பல எண்களுக்கு தானாக அழைத்து, எடுக்கப்பட்ட அழைப்புகளை உடனே இருக்கும் முகவர்களுடன் இணைக்கிறது.",
      "flow": "பல அழைப்புகள் → தயாராக உள்ள முகவர்",
      "tag": "அதிக அளவு பிரச்சாரங்கள்"
    },
    {
      "title": "முற்போக்கான டயலர் (Progressive Dialer)",
      "desc": "முகவர் தனது முந்தைய அழைப்பை முடித்து தயாராக இருக்கும் போது மட்டுமே அடுத்த வாடிக்கையாளருக்கு அழைக்கிறது.",
      "flow": "தயாராக உள்ள முகவர் → அடுத்த வாடிக்கையாளர்",
      "tag": "முகவர் வேகத்தில் டயலிங்"
    },
    {
      "title": "பவர் டயலர் (Power Dialer)",
      "desc": "முகவரின் உற்பத்தித்திறனை அதிகரிக்க தொடர்பு பட்டியலை வரிசையாக தானாக அழைக்கிறது.",
      "flow": "தொடர்பு பட்டியல் → தொடர் அழைப்புகள்",
      "tag": "அதிகபட்ச உற்பத்தித்திறன்"
    },
    {
      "title": "முன்னோட்ட டயலர் (Preview Dialer)",
      "desc": "அழைப்பைத் தொடங்குவதற்கு முன் வாடிக்கையாளர் விவரங்களையும் வரலாற்றையும் மதிப்பாய்வு செய்ய முகவர்களை அனுமதிக்கிறது.",
      "flow": "விவரங்களை மதிப்பாய்வு → அழைப்பைத் தொடங்கு",
      "tag": "தனிப்பயனாக்கப்பட்ட உரையாடல்கள்"
    }
  ],
  "analyticsBadge": "அழைப்பு பகுப்பாய்வு & அறிக்கைகள்",
  "analyticsTitle": "அழைப்புத் தரவை சிறந்த வணிக முடிவுகளாக மாற்றவும்",
  "analyticsSubtitle": "உங்கள் அழைப்பு செயல்பாட்டின் ஒவ்வொரு பகுதியையும் துல்லியமாகக் கண்காணிக்கவும்.",
  "analyticsFeatures": [
    "முகவர் செயல்திறன்",
    "பிரச்சார செயல்திறன்",
    "அழைப்பு கால அளவு",
    "பதில் அளிக்கும் விகிதம் (ASR)",
    "கைவிடப்பட்ட அழைப்பு விகிதம்",
    "விற்பனை மாற்றக் கண்காணிப்பு",
    "அழைப்பு முடிவுகள் (Dispositions)",
    "வழித்தட தரம்",
    "கேரியர் செயல்திறன்",
    "செலவு பகுப்பாய்வு",
    "மணிநேர, தினசரி மற்றும் மாதாந்திர அறிக்கைகள்",
    "முழுமையான அழைப்பு பதிவுகள் (CDR)"
  ],
  "analyticsSubtext": "தனிப்பட்ட உரையாடல்கள் முதல் உலகளாவிய கேரியர் செலவுகள் வரை, முழுமையான தெளிவைப் பெறுங்கள்.",
  "analyticsCard": {
    "title": "பிரச்சார செயல்திறன்",
    "exportBtn": "ஏற்றுமதி",
    "tabHourly": "மணிநேரம்",
    "tabDaily": "தினசரி",
    "tabMonthly": "மாதாந்திரம்",
    "timeframe": "01–07 அக் 2026",
    "stat1Label": "மொத்த அழைப்புகள்",
    "stat1Val": "1,842",
    "stat2Label": "பதில் விகிதம்",
    "stat2Val": "86.2%",
    "stat3Label": "மாற்றங்கள்",
    "stat3Val": "18.4%",
    "legendCalls": "அழைப்புகள்",
    "legendAnswered": "பதிலளிக்கப்பட்டவை",
    "dispositionTitle": "அழைப்பு முடிவுகள்",
    "note": "மாதிரி அறிக்கை தரவு • ஒவ்வொரு அழைப்பின் விரிவான விவரங்களையும் ஏற்றுமதி செய்யவும்."
  },
  "ctaBadge": "உங்கள் வணிகத் தொலைத்தொடர்பு நெட்வொர்க்கை உருவாக்குவோம்",
  "ctaTitle": "நம்பகமான தகவல் தொடர்பு தீர்வுகளுடன் உங்கள் வணிகத்தை வளர்க்கவும்",
  "ctaSubtitle": "ஸ்மார்ட் வாய்ஸ் ரூட்டிங் மற்றும் சர்வதேச டெர்மினேஷன் முதல் AI வாய்ஸ் மற்றும் விர்ச்சுவல் எண்கள் வரை, உலகெங்கிலும் உள்ள வாடிக்கையாளர்களுடன் தெளிவாக இணைய iNet Global நிறுவனங்களுக்கு உதவுகிறது.",
  "getStarted": "இப்போதே தொடங்கவும்",
  "contactUs": "எங்களைத் தொடர்பு கொள்ளவும்",
  "ctaTrust1": "எண்டர்பிரைஸ் டயலர் SLA",
  "ctaTrust2": "உடனடி WebRTC செயல்பாடு",
  "ctaTrust3": "24/7 பிரத்யேக ஆதரவு"
};

const te: DailerSolutionTranslation = {
  "heroBadge": "కాల్ సెంటర్ డయలర్ సొల్యూషన్",
  "heroTitle": "డెస్క్‌టాప్ & మొబైల్ కోసం నెక్స్ట్-జనరేషన్ కాల్ సెంటర్ డయలర్",
  "heroDesc": "ఒకే శక్తివంతమైన కాలింగ్ ప్లాట్‌ఫామ్ ద్వారా మీ ఏజెంట్లు, కస్టమర్‌లు మరియు గ్లోబల్ రూట్‌లను అనుసంధానించండి. అధునాతన రూటింగ్, లైవ్ మానిటరింగ్, అనలిటిక్స్ మరియు రియల్-టైమ్ కంట్రోల్‌తో అవుట్‌బౌండ్ కాలింగ్‌ను నిర్వహించడానికి మా బ్రౌజర్ ఆధారిత డెస్క్‌టాప్ లేదా మొబైల్ డయలర్‌ను ఉపయోగించండి.",
  "requestDemo": "డెమో కోసం అడగండి",
  "exploreDialer": "డయలర్‌ను అన్వేషించండి",
  "heroFootnote": "ఒక సమగ్ర పని ప్రదేశం. మొదటి కాల్ నుండి చివరి నివేదిక వరకు.",
  "heroMockup": {
    "title": "iNet డయలర్",
    "agentStatus": "ఏజెంట్ అందుబాటులో ఉన్నారు",
    "campaign": "కస్టమర్ ఫాలో-అప్",
    "campaignMeta": "ప్రోగ్రెసివ్ క్యాంపెయిన్ • ఈరోజు",
    "contactsCount": "128 కాంటాక్ట్‌లు",
    "connectedBadge": "కనెక్ట్ అయింది - WebRTC",
    "callerName": "జేమీ లాసన్",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "కాల్ ముగించండి",
    "tabContact": "కాంటాక్ట్",
    "tabHistory": "చరిత్ర",
    "tabNotes": "నోట్స్",
    "customerDetailsTitle": "కస్టమర్ వివరాలు",
    "companyLabel": "కంపెనీ",
    "companyVal": "Lawson & Co.",
    "emailLabel": "ఈమెయిల్",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "చివరి పరిచయం",
    "lastContactVal": "07 అక్టోబర్ 2026",
    "dispositionLabel": "కాల్ స్థితి",
    "dispositionVal": "ఫాలో-అప్ షెడ్యూల్ చేయబడింది",
    "recordingText": "రికార్డింగ్ జరుగుతోంది",
    "stat1Label": "ఈరోజు కాల్స్",
    "stat1Val": "46",
    "stat2Label": "కనెక్ట్ అయినవి",
    "stat2Val": "38",
    "stat3Label": "మాట్లాడిన సమయం",
    "stat3Val": "02గం 18ని",
    "floatBadgeTitle": "సరైన రూట్. ప్రతి కాల్‌కు.",
    "floatBadgeDesc": "UK · క్యారియర్ A · నాణ్యత 98.6%"
  },
  "highlights": [
    {
      "title": "బ్రౌజర్ ఆధారిత డయలర్"
    },
    {
      "title": "మొబైల్ డయలర్"
    },
    {
      "title": "A–Z గ్లోబల్ రూట్స్"
    },
    {
      "title": "ప్రిడిక్టివ్ & ప్రోగ్రెసివ్ డయలింగ్"
    },
    {
      "title": "లైవ్ కాల్ మానిటరింగ్"
    },
    {
      "title": "రియల్-టైమ్ అనలిటిక్స్"
    }
  ],
  "desktopBadge": "డెస్క్‌టాప్ బ్రౌజర్ డయలర్",
  "desktopTitle": "ఏ కంప్యూటర్‌నైనా ప్రొఫెషనల్ కాల్ సెంటర్‌గా మార్చండి",
  "desktopSubtitle": "ఎలాంటి సంక్లిష్టమైన సాఫ్ట్‌వేర్ ఇన్‌స్టాలేషన్ అవసరం లేదు. ఏజెంట్లు వారి బ్రౌజర్ ద్వారా సురక్షితంగా లాగిన్ అయి వెంటనే కాల్స్ చేయడం ప్రారంభించవచ్చు.",
  "desktopFootnote": "మీ బ్రౌజరే మీ వర్క్‌స్పేస్. సంక్లిష్టమైన ఇన్‌స్టాలేషన్ లేకుండా సురక్షితమైన ఏజెంట్ యాక్సెస్.",
  "desktopFeaturesTitle": "ఫీచర్లు",
  "desktopFeatures": [
    "WebRTC బ్రౌజర్ కాలింగ్",
    "ఏజెంట్ లాగిన్ & నిర్వహణ",
    "క్లిక్-టు-కాల్ (Click-to-call)",
    "కాంటాక్ట్స్ నిర్వహణ",
    "కాల్ హిస్టరీ",
    "కాల్ రికార్డింగ్",
    "కాల్ బదిలీ (Transfer)",
    "హోల్డ్ & మ్యూట్",
    "కాల్ ఫలితాల (Disposition) నిర్వహణ",
    "ఏజెంట్ స్థితి ట్రాకింగ్",
    "రియల్-టైమ్ కాల్ గణాంకాలు"
  ],
  "desktopMainHeading": "ఒకే డయలర్. మీ అన్ని కాలింగ్ అవసరాలకు.",
  "desktopWorkspaceTitle": "మీ బ్రౌజరే మీ సమగ్ర వర్క్‌స్పేస్.",
  "desktopWorkspaceSubtitle": "ఏజెంట్లకు సురక్షితమైన యాక్సెస్. సంక్లిష్టమైన ఇన్‌స్టాలేషన్ అవసరం లేదు.",
  "mobileBadge": "మొబైల్ డయలర్",
  "mobileTitle": "మీ కాలింగ్ కార్యకలాపాలను ఎక్కడికైనా తీసుకెళ్లండి",
  "mobileSubtitle": "రిమోట్ మరియు ఫీల్డ్ ఏజెంట్లకు మీ వ్యాపార టెలికాం మౌలిక సదుపాయాలతో అనుసంధానించబడిన ప్రొఫెషనల్ మొబైల్ కాలింగ్ అనుభవాన్ని అందించండి.",
  "mobileFootnote": "మీ వ్యాపార నంబర్. మీరు ఎక్కడ పనిచేసినా మీతోనే.",
  "mobileFeaturesTitle": "మొబైల్ ఫీచర్లు",
  "mobileFeatures": [
    "Android మరియు iOS అనుకూల ఆర్కిటెక్చర్",
    "SIP & WebRTC వాయిస్ కాలింగ్",
    "కాంటాక్ట్స్ సింక్",
    "కాల్ హిస్టరీ",
    "క్లిక్-టు-కాల్",
    "కాలర్ ఐడీ (Caller ID) నిర్వహణ",
    "కాల్ రికార్డింగ్",
    "ఏజెంట్ లభ్యత స్థితి",
    "పుష్ నోటిఫికేషన్‌లు",
    "సురక్షితమైన ప్రమాణీకరణ"
  ],
  "mobileSyncCard": {
    "title": "కాంటాక్ట్‌లు ఎల్లప్పుడూ సింక్‌లో ఉంటాయి.",
    "desc": "మీ కస్టమర్లు మరియు కాల్ చరిత్ర ఎల్లప్పుడూ మీతో ఉంటాయి.",
    "badge": "ఇప్పుడే సింక్ అయింది"
  },
  "mobileDialerMockup": {
    "title": "iNet డయలర్",
    "greeting": "శుభోదయం, Alex",
    "status": "అందుబాటులో ఉన్నారు",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "కాలర్ ఐడీ: iNet Business",
    "tabDialer": "డయలర్",
    "tabContacts": "కాంటాక్ట్‌లు",
    "tabHistory": "చరిత్ర"
  },
  "routesBadge": "అధునాతన A–Z గ్లోబల్ రూట్స్",
  "routesTitle": "సరైన మార్గం ద్వారా కస్టమర్‌లను చేరుకోండి",
  "routesSubtitle": "బహుళ టెలికాం క్యారియర్‌లతో కనెక్ట్ అవ్వండి మరియు అంతర్జాతీయ వాయిస్ ట్రాఫిక్‌ను తెలివిగా మరియు తక్కువ ఖర్చుతో నిర్వహించండి.",
  "routesFeaturesTitle": "రూట్ మేనేజ్‌మెంట్",
  "routesFeatures": [
    "A–Z అంతర్జాతీయ గమ్యస్థానాలు",
    "మల్టీ-క్యారియర్ ఇంటిగ్రేషన్",
    "ప్రిఫిక్స్ ఆధారిత రూటింగ్",
    "లీస్ట్-కాస్ట్ రూటింగ్ (LCR)",
    "నాణ్యత ఆధారిత రూటింగ్",
    "ఆటోమేటిక్ ఫెయిల్‌ఓవర్ రూటింగ్",
    "ప్రాధాన్యత రూటింగ్",
    "గమ్యస్థాన ఆధారిత రూటింగ్",
    "క్యారియర్ పనితీరు పర్యవేక్షణ",
    "రూట్ ఖర్చు నిర్వహణ"
  ],
  "routeControlCard": {
    "title": "గ్లోబల్ రూట్ కంట్రోల్",
    "badge": "రూట్లు సజావుగా ఉన్నాయి",
    "agentCall": "ఏజెంట్ కాల్",
    "smartRouting": "స్మార్ట్ రూటింగ్",
    "smartRoutingDesc": "అత్యుత్తమ అందుబాటులో ఉన్న రూట్",
    "carrier1": "క్యారియర్ A · ప్రాధాన్యత 1",
    "carrier2": "క్యారియర్ B · ప్రాధాన్యత 2",
    "carrier3": "క్యారియర్ C · ఫెయిల్‌ఓవర్",
    "tableDest": "గమ్యం",
    "tableCarrier": "క్యారియర్",
    "tableQuality": "నాణ్యత",
    "tableRate": "/ నిమిషం",
    "note": "గమ్యస్థానాలు, నాణ్యత మరియు ధరలు ఉదాహరణ ప్రయోజనాల కోసం మాత్రమే."
  },
  "routesEngine": {
    "title": "స్మార్ట్ రూటింగ్ ఇంజిన్",
    "desc": "గమ్యం, ధర, వాయిస్ నాణ్యత, లభ్యత మరియు క్యారియర్ పనితీరు ఆధారంగా ఉత్తమమైన రూట్‌ను స్వయంచాలకంగా ఎంచుకుంటుంది.",
    "tags": [
      "గమ్యం",
      "ధర",
      "నాణ్యత",
      "లభ్యత",
      "క్యారియర్ పనితీరు"
    ]
  },
  "monitoringBadge": "అధునాతన కాల్ సెంటర్ మానిటరింగ్",
  "monitoringTitle": "మీ కాల్ సెంటర్ కార్యకలాపాలపై పూర్తి నియంత్రణ",
  "monitoringSubtitle": "కేంద్రీకృత లైవ్ డాష్‌బోర్డ్ నుండి మీ మొత్తం కార్యకలాపాలను పర్యవేక్షించండి.",
  "monitoringLiveHeader": "లైవ్ మానిటరింగ్",
  "monitoringLiveSub": "ఈ క్షణంలో ఏమి జరుగుతుందో ప్రత్యక్షంగా చూడండి.",
  "monitoringKpis": [
    {
      "label": "యాక్టివ్ కాల్స్",
      "value": "128"
    },
    {
      "label": "వేచి ఉన్న కాల్స్",
      "value": "12"
    },
    {
      "label": "అందుబాటులో ఉన్న ఏజెంట్లు",
      "value": "36"
    },
    {
      "label": "బిజీ ఏజెంట్లు",
      "value": "64"
    },
    {
      "label": "ఏజెంట్ స్థితి",
      "value": "లైవ్"
    },
    {
      "label": "సెకనుకు కాల్స్",
      "value": "8.4"
    },
    {
      "label": "సమాధానం ఇచ్చిన రేటు",
      "value": "86.2%"
    },
    {
      "label": "సగటు కాల్ సమయం",
      "value": "04:32"
    },
    {
      "label": "ఏకకాల కాల్స్",
      "value": "140"
    },
    {
      "label": "విఫలమైన కాల్స్",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "కాల్ సెంటర్ అవలోకనం",
    "updateMeta": "అన్ని క్యాంపెయిన్‌లు • 08 అక్టోబర్ 2026",
    "note": "లైవ్ డాష్‌బోర్డ్ • ఒకే స్క్రీన్ నుండి ఏజెంట్లు, క్యూలు మరియు వాయిస్ నాణ్యతను పర్యవేక్షించండి.",
    "cols": {
      "agent": "ఏజెంట్",
      "campaign": "క్యాంపెయిన్",
      "status": "స్థితి",
      "duration": "సమయం",
      "destination": "గమ్యం",
      "supervisor": "సూపర్‌వైజర్"
    }
  },
  "supervisorToolsTitle": "సూపర్‌వైజర్ టూల్స్",
  "supervisorToolsSubtitle": "ఏజెంట్ల శిక్షణ మరియు నాణ్యత నియంత్రణ కోసం మేనేజర్లకు పూర్తి నియంత్రణను అందించండి.",
  "supervisorTools": [
    {
      "title": "వినడం (Listen)",
      "desc": "నాణ్యత హామీ కోసం అంతరాయం లేకుండా లైవ్ కాల్‌లను రహస్యంగా వినండి."
    },
    {
      "title": "గుసగుస (Whisper)",
      "desc": "కస్టమర్‌కు వినబడకుండా కేవలం ఏజెంట్‌కు మాత్రమే లైవ్ కాల్‌లో సలహాలు ఇవ్వండి."
    },
    {
      "title": "జోక్యం (Barge-In)",
      "desc": "అత్యవసర పరిస్థితుల్లో నేరుగా సంభాషణలోకి ప్రవేశించి 3-వే కాల్‌గా మార్చండి."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "కాల్స్",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "రియల్-టైమ్ వాల్‌బోర్డ్",
    "desc": "పెద్ద స్క్రీన్‌లపై కాల్ సెంటర్ లైవ్ KPIలను ప్రదర్శించండి."
  },
  "dialingModesBadge": "తెలివైన అవుట్‌బౌండ్ కాలింగ్",
  "dialingModesTitle": "అధునాతన డయలింగ్ మోడ్‌లు",
  "dialingModesSubtitle": "మీ వ్యాపార ప్రక్రియకు సరిపోయే సరైన డయలింగ్ వ్యూహాన్ని ఎంచుకోండి.",
  "dialingModes": [
    {
      "title": "ప్రిడిక్టివ్ డయలర్ (Predictive)",
      "desc": "స్వయంచాలకంగా ఒకేసారి బహుళ నంబర్లకు డయల్ చేస్తుంది మరియు సమాధానం ఇచ్చిన కాల్‌లను అందుబాటులో ఉన్న ఏజెంట్లకు కలుపుతుంది.",
      "flow": "బహుళ కాల్స్ → ఖాళీగా ఉన్న ఏజెంట్",
      "tag": "అధిక వాల్యూమ్ ప్రచారాలు"
    },
    {
      "title": "ప్రోగ్రెసివ్ డయలర్ (Progressive)",
      "desc": "ఏజెంట్ మునుపటి కాల్ ముగించి సిద్ధంగా ఉన్నప్పుడు మాత్రమే తదుపరి కస్టమర్‌కు డయల్ చేస్తుంది.",
      "flow": "ఖాళీ ఏజెంట్ → తదుపరి కస్టమర్",
      "tag": "ఏజెంట్ వేగంతో డయలింగ్"
    },
    {
      "title": "పవర్ డయలర్ (Power Dialer)",
      "desc": "ఏజెంట్ ఉత్పాదకతను పెంచడానికి కాంటాక్ట్ లిస్ట్‌ను వరుసగా ఆటోమేటిక్‌గా డయల్ చేస్తుంది.",
      "flow": "కాంటాక్ట్ లిస్ట్ → నిరంతర కాలింగ్",
      "tag": "గరిష్ట ఉత్పాదకత"
    },
    {
      "title": "ప్రివ్యూ డయలర్ (Preview Dialer)",
      "desc": "కాల్ ప్రారంభించే ముందు కస్టమర్ సమాచారం మరియు చరిత్రను సమీక్షించడానికి ఏజెంట్‌ను అనుమతిస్తుంది.",
      "flow": "కస్టమర్ సమాచారం పరిశీలన → కాల్ ప్రారంభం",
      "tag": "వ్యక్తిగతీకరించిన సంభాషణలు"
    }
  ],
  "analyticsBadge": "కాల్ అనలిటిక్స్ & నివేదికలు",
  "analyticsTitle": "కాల్ డేటాను మెరుగైన వ్యాపార ఫలితాలుగా మార్చండి",
  "analyticsSubtitle": "మీ కాలింగ్ కార్యకలాపాల యొక్క ప్రతి అంశాన్ని ఖచ్చితంగా ట్రాక్ చేయండి.",
  "analyticsFeatures": [
    "ఏజెంట్ పనితీరు",
    "క్యాంపెయిన్ ఫలితాలు",
    "కాల్ సమయం",
    "సమాధానం ఇచ్చిన రేటు (ASR)",
    "కాల్ విరమణ రేటు",
    "కన్వర్షన్ ట్రాకింగ్",
    "కాల్ ఫలితాలు (Dispositions)",
    "రూట్ నాణ్యత",
    "క్యారియర్ పనితీరు",
    "వివరణాత్మక వ్యయ విశ్లేషణ",
    "గంట, రోజు మరియు నెలవారీ నివేదికలు",
    "కాల్ డిటైల్ రికార్డ్స్ (CDR)"
  ],
  "analyticsSubtext": "వ్యక్తిగత సంభాషణల నుండి గ్లోబల్ క్యారియర్ ఖర్చుల వరకు, మొత్తం సమాచారాన్ని స్పష్టంగా చూడండి.",
  "analyticsCard": {
    "title": "క్యాంపెయిన్ పనితీరు",
    "exportBtn": "ఎగుమతి చేయండి",
    "tabHourly": "గంటవారీ",
    "tabDaily": "రోజువారీ",
    "tabMonthly": "నెలవారీ",
    "timeframe": "01–07 అక్టోబర్ 2026",
    "stat1Label": "మొత్తం కాల్స్",
    "stat1Val": "1,842",
    "stat2Label": "సమాధానం ఇచ్చిన రేటు",
    "stat2Val": "86.2%",
    "stat3Label": "కన్వర్షన్లు",
    "stat3Val": "18.4%",
    "legendCalls": "కాల్స్",
    "legendAnswered": "సమాధానం ఇచ్చారు",
    "dispositionTitle": "కాల్ ఫలితాలు",
    "note": "నమూనా నివేదిక డేటా • ప్రతి కాల్ వివరాలను సులభంగా ఎగుమతి చేయండి."
  },
  "ctaBadge": "మీ మెసేజింగ్ మరియు వాయిస్ నెట్‌వర్క్‌ను నిర్మిద్దాం",
  "ctaTitle": "వ్యాపార కమ్యూనికేషన్ పరిష్కారాలతో మీ వ్యాపారాన్ని విస్తరించండి",
  "ctaSubtitle": "స్మార్ట్ వాయిస్ రూటింగ్ మరియు అంతర్జాతీయ టెర్మినేషన్ నుండి AI వాయిస్ మరియు వర్చువల్ నంబర్ల వరకు, iNet Global కంపెనీలు ప్రపంచవ్యాప్తంగా కస్టమర్లతో విశ్వసనీయంగా కనెక్ట్ అవ్వడానికి స్కేలబుల్ పరిష్కారాలను అందిస్తుంది.",
  "getStarted": "ఇప్పుడే ప్రారంభించండి",
  "contactUs": "మమ్మల్ని సంప్రదించండి",
  "ctaTrust1": "ఎంటర్‌ప్రైజ్ డయలర్ SLA",
  "ctaTrust2": "తక్షణ WebRTC యాక్టివేషన్",
  "ctaTrust3": "24/7 అంకితమైన సపోర్ట్"
};

const mr: DailerSolutionTranslation = {
  "heroBadge": "कॉल सेंटर डायलर सोल्यूशन",
  "heroTitle": "डेस्कटॉप आणि मोबाईलसाठी पुढील पिढीचे कॉल सेंटर डायलर",
  "heroDesc": "एका शक्तिशाली कॉलिंग प्लॅटफॉर्मद्वारे तुमचे एजंट्स, ग्राहक आणि जागतिक कॉलिंग रूट्स एकत्र आणा. प्रगत राउटिंग, थेट निरीक्षण, विश्लेषण आणि रिअल-टाइम नियंत्रणासह आउटबाउंड कॉलिंग व्यवस्थापित करण्यासाठी आमचे ब्राउझर-आधारित डेस्कटॉप डायलर किंवा मोबाईल डायलर वापरा.",
  "requestDemo": "डेमोसाठी विनंती करा",
  "exploreDialer": "डायलर एक्सप्लोर करा",
  "heroFootnote": "एक जोडलेली कार्यप्रणाली. पहिल्या कॉलपासून ते अंतिम अहवालापर्यंत.",
  "heroMockup": {
    "title": "iNet डायलर",
    "agentStatus": "एजंट उपलब्ध",
    "campaign": "ग्राहक फॉलो-अप",
    "campaignMeta": "प्रोग्रेसिव्ह मोहीम • आज",
    "contactsCount": "१२८ संपर्क",
    "connectedBadge": "कनेक्ट झाले - WebRTC",
    "callerName": "जेमी लॉसन",
    "callerPhone": "+44 20 7946 0328",
    "duration": "०३:४२",
    "endCall": "कॉल समाप्त करा",
    "tabContact": "संपर्क",
    "tabHistory": "इतिहास",
    "tabNotes": "नोंदी",
    "customerDetailsTitle": "ग्राहक तपशील",
    "companyLabel": "कंपनी",
    "companyVal": "Lawson & Co.",
    "emailLabel": "ईमेल",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "शेवटचा संपर्क",
    "lastContactVal": "०७ ऑक्टो २०२६",
    "dispositionLabel": "कॉल स्थिती",
    "dispositionVal": "फॉलो-अप शेड्यूल केले",
    "recordingText": "रेकॉर्डिंग सुरू आहे",
    "stat1Label": "आजचे कॉल्स",
    "stat1Val": "४६",
    "stat2Label": "कनेक्ट झाले",
    "stat2Val": "३८",
    "stat3Label": "बोलण्याचा वेळ",
    "stat3Val": "०२ता १८मि",
    "floatBadgeTitle": "योग्य रूट. प्रत्येक कॉलसाठी.",
    "floatBadgeDesc": "UK · कॅरियर A · गुणवत्ता ९८.६%"
  },
  "highlights": [
    {
      "title": "ब्राउझर-आधारित डायलर"
    },
    {
      "title": "मोबाईल डायलर"
    },
    {
      "title": "A–Z जागतिक रूट्स"
    },
    {
      "title": "प्रेडिक्टिव्ह आणि प्रोग्रेसिव्ह डायलिंग"
    },
    {
      "title": "थेट कॉल मॉनिटरिंग"
    },
    {
      "title": "रिअल-टाइम विश्लेषण"
    }
  ],
  "desktopBadge": "डेस्कटॉप ब्राउझर डायलर",
  "desktopTitle": "कोणत्याही संगणकाला एका व्यावसायिक कॉल सेंटरमध्ये बदला",
  "desktopSubtitle": "कोणत्याही क्लिष्ट सॉफ्टवेअर इन्स्टॉलेशनची गरज नाही. एजंट्स सुरक्षितपणे ब्राउझरद्वारे लॉग इन करू शकतात आणि ताबडतोब कॉल सुरू करू शकतात.",
  "desktopFootnote": "तुमचा ब्राउझर हेच तुमचे कामाचे ठिकाण आहे. क्लिष्ट इन्स्टॉलेशनशिवाय सुरक्षित एजंट प्रवेश.",
  "desktopFeaturesTitle": "वैशिष्ट्ये",
  "desktopFeatures": [
    "WebRTC ब्राउझर कॉलिंग",
    "एजंट लॉगिन आणि व्यवस्थापन",
    "क्लिक-टू-कॉल (Click-to-call)",
    "संपर्क व्यवस्थापन",
    "कॉल इतिहास",
    "कॉल रेकॉर्डिंग",
    "कॉल ट्रान्सफर",
    "होल्ड आणि म्यूट",
    "कॉल निकाल (Disposition) व्यवस्थापन",
    "एजंट स्थिती ट्रॅकिंग",
    "रिअल-टाइम कॉल आकडेवारी"
  ],
  "desktopMainHeading": "एकच डायलर. प्रत्येक कॉलिंग गरजेसाठी परिपूर्ण.",
  "desktopWorkspaceTitle": "तुमचा ब्राउझर हेच तुमचे संपूर्ण कार्यक्षेत्र.",
  "desktopWorkspaceSubtitle": "एजंट्ससाठी सुरक्षित प्रवेश. कोणत्याही क्लिष्ट सॉफ्टवेअर इन्स्टॉलेशनची गरज नाही.",
  "mobileBadge": "मोबाईल डायलर",
  "mobileTitle": "तुमचे कॉलिंग ऑपरेशन्स कुठेही घेऊन जा",
  "mobileSubtitle": "रिमोट आणि फील्ड एजंट्सना तुमच्या व्यावसायिक दूरसंचार पायाभूत सुविधांशी जोडलेला व्यावसायिक मोबाईल कॉलिंग अनुभव द्या.",
  "mobileFootnote": "तुमचा व्यवसाय नंबर. तुम्ही जिथे काम कराल तिथे उपलब्ध.",
  "mobileFeaturesTitle": "मोबाईल वैशिष्ट्ये",
  "mobileFeatures": [
    "Android आणि iOS सुसंगत आर्किटेक्चर",
    "SIP आणि WebRTC कॉलिंग",
    "संपर्क सिंक्रोनाइझेशन",
    "कॉल इतिहास",
    "क्लिक-टू-कॉल",
    "कॉलर आयडी (Caller ID) व्यवस्थापन",
    "कॉल रेकॉर्डिंग",
    "एजंट उपलब्धता स्थिती",
    "पुश सूचना (Notifications)",
    "सुरक्षित प्रमाणीकरण"
  ],
  "mobileSyncCard": {
    "title": "संपर्क नेहमी सिंक असतात.",
    "desc": "तुमचे ग्राहक आणि कॉल इतिहास नेहमी तुमच्यासोबत.",
    "badge": "आत्ताच सिंक झाले"
  },
  "mobileDialerMockup": {
    "title": "iNet डायलर",
    "greeting": "शुभ प्रभात, Alex",
    "status": "उपलब्ध",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "कॉलर आयडी: iNet Business",
    "tabDialer": "डायलर",
    "tabContacts": "संपर्क",
    "tabHistory": "इतिहास"
  },
  "routesBadge": "प्रगत A–Z जागतिक रूट्स",
  "routesTitle": "योग्य आणि सर्वोत्तम मार्गाने ग्राहकांपर्यंत पोहोचा",
  "routesSubtitle": "अनेक दूरसंचार प्रदात्यांशी कनेक्ट व्हा आणि आंतरराष्ट्रीय व्हॉइस ट्रॅफिक हुशारीने आणि किफायतशीरपणे व्यवस्थापित करा.",
  "routesFeaturesTitle": "रूट व्यवस्थापन",
  "routesFeatures": [
    "A–Z आंतरराष्ट्रीय गंतव्यस्थाने",
    "मल्टी-कॅरियर एकत्रीकरण",
    "प्रीफिक्स-आधारित राउटिंग",
    "किमान-खर्च राउटिंग (LCR)",
    "गुणवत्ता-आधारित राउटिंग",
    "स्वयंचलित बॅकअप राउटिंग (Failover)",
    "प्राधान्य राउटिंग",
    "गंतव्य-आधारित राउटिंग",
    "कॅरियर कार्यप्रदर्शन देखरेख",
    "रूट खर्च नियंत्रण"
  ],
  "routeControlCard": {
    "title": "ग्लोबल रूट नियंत्रण",
    "badge": "रूट्स सुरळीत आहेत",
    "agentCall": "एजंट कॉल",
    "smartRouting": "स्मार्ट राउटिंग",
    "smartRoutingDesc": "सर्वोत्तम उपलब्ध रूट",
    "carrier1": "कॅरियर A · प्राधान्य १",
    "carrier2": "कॅरियर B · प्राधान्य २",
    "carrier3": "कॅरियर C · बॅकअप",
    "tableDest": "गंतव्य",
    "tableCarrier": "कॅरियर",
    "tableQuality": "गुणवत्ता",
    "tableRate": "/ मिनिट",
    "note": "गंतव्यस्थाने, गुणवत्ता आणि दर केवळ उदाहरणासाठी आहेत."
  },
  "routesEngine": {
    "title": "स्मार्ट राउटिंग इंजिन",
    "desc": "गंतव्यस्थान, दर, व्हॉइस गुणवत्ता, उपलब्धता आणि कॅरियरच्या कार्यक्षमतेवर आधारित सर्वोत्तम मार्ग स्वयंचलितपणे निवडतो.",
    "tags": [
      "गंतव्य",
      "किंमत",
      "गुणवत्ता",
      "उपलब्धता",
      "कॅरियर कार्यक्षमता"
    ]
  },
  "monitoringBadge": "प्रगत कॉल सेंटर मॉनिटरिंग",
  "monitoringTitle": "तुमच्या कॉल सेंटरवर संपूर्ण नियंत्रण आणि दृश्यमानता",
  "monitoringSubtitle": "केंद्रीकृत थेट डॅशबोर्डवरून तुमच्या संपूर्ण कामकाजाचे निरीक्षण करा.",
  "monitoringLiveHeader": "थेट निरीक्षण (Live Monitoring)",
  "monitoringLiveSub": "या क्षणी काय घडत आहे ते थेट पहा.",
  "monitoringKpis": [
    {
      "label": "सक्रिय कॉल्स",
      "value": "१२८"
    },
    {
      "label": "प्रतीक्षेतील कॉल्स",
      "value": "१२"
    },
    {
      "label": "उपलब्ध एजंट्स",
      "value": "३६"
    },
    {
      "label": "व्यस्त एजंट्स",
      "value": "६४"
    },
    {
      "label": "एजंट स्थिती",
      "value": "लाइव्ह"
    },
    {
      "label": "प्रति सेकंद कॉल्स",
      "value": "८.४"
    },
    {
      "label": "उत्तर देण्याचा दर",
      "value": "८६.२%"
    },
    {
      "label": "सरासरी कॉल वेळ",
      "value": "०४:३२"
    },
    {
      "label": "एकाच वेळी कॉल्स",
      "value": "१४०"
    },
    {
      "label": "अयशस्वी कॉल्स",
      "value": "३",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "कॉल सेंटर विहंगावलोकन",
    "updateMeta": "सर्व मोहिमा • ०८ ऑक्टो २०२६",
    "note": "थेट डॅशबोर्ड • एकाच स्क्रीनवरून एजंट्स, रांगा आणि व्हॉइस गुणवत्तेचे निरीक्षण करा.",
    "cols": {
      "agent": "एजंट",
      "campaign": "मोहीम",
      "status": "स्थिती",
      "duration": "कालावधी",
      "destination": "गंतव्य",
      "supervisor": "सुपरवायझर"
    }
  },
  "supervisorToolsTitle": "सुपरवायझर टूल्स",
  "supervisorToolsSubtitle": "व्यवस्थापकांना एजंट्सना प्रशिक्षण देण्यासाठी आणि सेवेची गुणवत्ता राखण्यासाठी पूर्ण नियंत्रण द्या.",
  "supervisorTools": [
    {
      "title": "ऐकणे (Listen)",
      "desc": "गुणवत्ता तपासणीसाठी कोणालाही कळू न देता थेट कॉल ऐका."
    },
    {
      "title": "कुजबुजणे (Whisper)",
      "desc": "ग्राहकाला न ऐकू येता केवळ एजंटला थेट मार्गदर्शन करा."
    },
    {
      "title": "हस्तक्षेप (Barge-In)",
      "desc": "तातडीच्या प्रसंगी संभाषणात थेट सामील होऊन ३-मार्गी कॉल सुरू करा."
    }
  ],
  "wallboardCard": {
    "stat1": "१२८",
    "stat1Sub": "कॉल्स",
    "stat2": "८६%",
    "stat2Sub": "ASR",
    "title": "रिअल-टाइम वॉलबोर्ड",
    "desc": "मोठ्या स्क्रीनवर कॉल सेंटरचे थेट मुख्य कार्यप्रदर्शन निर्देशक (KPI) दाखवा."
  },
  "dialingModesBadge": "स्मार्ट आउटबाउंड कॉलिंग",
  "dialingModesTitle": "प्रगत डायलिंग मोड्स",
  "dialingModesSubtitle": "तुमच्या व्यावसायिक गरजांनुसार सर्वात योग्य डायलिंग धोरण निवडा.",
  "dialingModes": [
    {
      "title": "प्रेडिक्टिव्ह डायलर (Predictive)",
      "desc": "एकाच वेळी अनेक नंबर स्वयंचलितपणे डायल करतो आणि उत्तर मिळालेले कॉल उपलब्ध एजंट्सना जोडतो.",
      "flow": "अनेक कॉल्स → उपलब्ध एजंट",
      "tag": "मोठ्या प्रमाणातील मोहिमा"
    },
    {
      "title": "प्रोग्रेसिव्ह डायलर (Progressive)",
      "desc": "एजंट मागील कॉल संपवून मोकळा झाल्यावरच पुढील ग्राहकाला कॉल करतो.",
      "flow": "उपलब्ध एजंट → पुढील ग्राहक",
      "tag": "एजंटच्या गतीने डायलिंग"
    },
    {
      "title": "पॉवर डायलर (Power Dialer)",
      "desc": "एजंटची उत्पादकता वाढवण्यासाठी संपर्क यादीनुसार एकापाठोपाठ एक स्वयंचलित कॉल करतो.",
      "flow": "संपर्क यादी → सतत कॉलिंग",
      "tag": "उत्पादकतेवर भर"
    },
    {
      "title": "प्रिव्ह्यू डायलर (Preview Dialer)",
      "desc": "कॉल सुरू करण्यापूर्वी एजंटला ग्राहकाची माहिती आणि पार्श्वभूमी तपासण्याची मुभा देतो.",
      "flow": "ग्राहक माहिती तपासणे → कॉल सुरू",
      "tag": "वैयक्तिकृत संभाषण"
    }
  ],
  "analyticsBadge": "कॉल विश्लेषण आणि अहवाल",
  "analyticsTitle": "कॉल डेटाचे रूपांतर उच्च व्यावसायिक यशात करा",
  "analyticsSubtitle": "तुमच्या कॉलिंग ऑपरेशन्सच्या प्रत्येक पैलूचा अचूक मागोवा घ्या.",
  "analyticsFeatures": [
    "एजंट कामगिरी",
    "मोहीम निकाल",
    "कॉल कालावधी",
    "उत्तर देण्याचा दर (ASR)",
    "कॉल ड्रॉप दर",
    "रूपांतरण ट्रॅकिंग",
    "कॉल निकाल (Dispositions)",
    "रूट गुणवत्ता",
    "कॅरियर कामगिरी",
    "तपशीलवार खर्च विश्लेषण",
    "ताशी, दैनंदिन आणि मासिक अहवाल",
    "कॉल तपशील नोंदी (CDR)"
  ],
  "analyticsSubtext": "वैयक्तिक संभाषणांपासून ते जागतिक कॅरियर खर्चापर्यंत, संपूर्ण चित्र स्पष्टपणे पहा.",
  "analyticsCard": {
    "title": "मोहीम कामगिरी",
    "exportBtn": "एक्सपोर्ट",
    "tabHourly": "ताशी",
    "tabDaily": "दैनंदिन",
    "tabMonthly": "मासिक",
    "timeframe": "०१–०७ ऑक्टो २०२६",
    "stat1Label": "एकूण कॉल्स",
    "stat1Val": "१,८४२",
    "stat2Label": "उत्तर दर",
    "stat2Val": "८६.२%",
    "stat3Label": "रूपांतरणे",
    "stat3Val": "१८.४%",
    "legendCalls": "कॉल्स",
    "legendAnswered": "उत्तर दिलेले",
    "dispositionTitle": "कॉल निकाल",
    "note": "नमुना अहवाल डेटा • प्रत्येक कॉलचा तपशील सहजपणे एक्सपोर्ट करा."
  },
  "ctaBadge": "चला तुमचे दूरसंचार नेटवर्क उभे करूया",
  "ctaTitle": "व्यावसायिक संवादाच्या सोल्यूशन्ससह तुमचा व्यवसाय वाढवा",
  "ctaSubtitle": "स्मार्ट व्हॉइस राउटिंग आणि आंतरराष्ट्रीय टर्मिनेशनपासून ते एआय व्हॉइस आणि व्हर्च्युअल नंबरपर्यंत, iNet Global जगभरातील ग्राहकांशी जोडले राहण्यासाठी स्केलेबल उपाय प्रदान करते.",
  "getStarted": "आत्ताच सुरू करा",
  "contactUs": "आमच्याशी संपर्क साधा",
  "ctaTrust1": "एंटरप्राइझ डायलर SLA",
  "ctaTrust2": "त्वरित WebRTC सक्रियता",
  "ctaTrust3": "२४/७ समर्पित सहकार्य"
};

const sw: DailerSolutionTranslation = {
  "heroBadge": "SULUHISHO LA DIALER YA CALL CENTER",
  "heroTitle": "Dialer ya Kizazi Kipya ya Kituo cha Simu kwa Kompyuta na Simu ya Mkononi",
  "heroDesc": "Unganisha mawakala wako, wateja, na njia za kimataifa kupitia jukwaa moja imara la kupiga simu. Tumia dialer yetu ya kivinjari kwenye kompyuta au simu ya mkononi kudhibiti simu za nje kwa kutumia mfumo bora wa kuelekeza simu, ufuatiliaji wa moja kwa moja, uchambuzi, na udhibiti wa papo hapo.",
  "requestDemo": "Omba Onyesho",
  "exploreDialer": "Chunguza Dialer",
  "heroFootnote": "Eneo moja la kazi lililounganishwa. Kuanzia simu ya kwanza hadi ripoti ya mwisho.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Wakala yupo tayari",
    "campaign": "Ufuatiliaji wa mteja",
    "campaignMeta": "Kampeni inayoendelea • Leo",
    "contactsCount": "Mawasiliano 128",
    "connectedBadge": "Imeunganishwa - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Kata simu",
    "tabContact": "Mawasiliano",
    "tabHistory": "Historia",
    "tabNotes": "Vidokezo",
    "customerDetailsTitle": "MAELEZO YA MTEJA",
    "companyLabel": "Kampuni",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Barua pepe",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Mawasiliano ya mwisho",
    "lastContactVal": "07 Okt 2026",
    "dispositionLabel": "MATOKEO YA SIMU",
    "dispositionVal": "Ufuatiliaji umepangwa",
    "recordingText": "Kurekodi kunaendelea",
    "stat1Label": "Simu za leo",
    "stat1Val": "46",
    "stat2Label": "Zilizounganishwa",
    "stat2Val": "38",
    "stat3Label": "Muda wa maongezi",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "Njia sahihi. Kila simu.",
    "floatBadgeDesc": "UK · Mtoa huduma A · Ubora 98.6%"
  },
  "highlights": [
    {
      "title": "Dialer ya Kwenye Kivinjari"
    },
    {
      "title": "Dialer ya Simu ya Mkononi"
    },
    {
      "title": "Njia za Kimataifa za A–Z"
    },
    {
      "title": "Upigaji Simu wa Kutabiri na Kuendelea"
    },
    {
      "title": "Ufuatiliaji wa Simu Papo Hapo"
    },
    {
      "title": "Uchambuzi wa Wakati Halisi"
    }
  ],
  "desktopBadge": "Dialer ya Kivinjari kwenye Kompyuta",
  "desktopTitle": "Geuza Kompyuta Yoyote Kuwa Kituo cha Simu cha Kitaalamu",
  "desktopSubtitle": "Hakuna usanidi mgumu wa programu. Mawakala wanaweza kuingia kwa usalama kupitia kivinjari chao na kuanza kupiga simu mara moja.",
  "desktopFootnote": "Kivinjari chako ndicho eneo lako la kazi. Upatikanaji salama wa wakala bila usumbufu wa kusakinisha programu.",
  "desktopFeaturesTitle": "Vipengele Muhimu",
  "desktopFeatures": [
    "Kupiga simu kwa WebRTC kupitia kivinjari",
    "Kuingia na usimamizi wa mawakala",
    "Bofya kupiga simu (Click-to-call)",
    "Usimamizi wa orodha ya mawasiliano",
    "Historia ya simu",
    "Kurekodi simu",
    "Kuhamisha simu (Transfer)",
    "Kusitisha (Hold) na kunyamazisha (Mute)",
    "Usimamizi wa matokeo ya simu (Dispositions)",
    "Ufuatiliaji wa hali ya wakala",
    "Takwimu za simu za wakati halisi"
  ],
  "desktopMainHeading": "Dialer Moja. Kwa Mahitaji Yote ya Kupiga Simu.",
  "desktopWorkspaceTitle": "Kivinjari chako ndio eneo lako la kazi kamili.",
  "desktopWorkspaceSubtitle": "Ufikiaji salama kwa mawakala. Hakuna usanidi mgumu unaohitajika.",
  "mobileBadge": "Dialer ya Simu ya Mkononi",
  "mobileTitle": "Peleka Shughuli Zako za Simu Popote Ulipo",
  "mobileSubtitle": "Wape mawakala wa masafa marefu na walio shambani uzoefu wa kitaalamu wa kupiga simu za mkononi uliounganishwa na mtandao wa mawasiliano wa biashara yako.",
  "mobileFootnote": "Nambari yako ya biashara. Popote ambapo kazi inakupeleka.",
  "mobileFeaturesTitle": "Vipengele vya Simu ya Mkononi",
  "mobileFeatures": [
    "Muundo unaoendana na Android na iOS",
    "Kupiga simu kwa sauti kupitia SIP na WebRTC",
    "Usawazishaji wa orodha ya mawasiliano",
    "Historia ya simu",
    "Bofya kupiga simu",
    "Usimamizi wa nambari inayoonekana (Caller ID)",
    "Kurekodi simu",
    "Hali ya upatikanaji wa wakala",
    "Arifa za papo hapo",
    "Uthibitishaji salama"
  ],
  "mobileSyncCard": {
    "title": "Mawasiliano yanasawazishwa kila wakati.",
    "desc": "Wateja wako na historia ya simu daima viko nawe.",
    "badge": "Imesawazishwa sasa hivi"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Habari za asubuhi, Alex",
    "status": "Yupo tayari",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Caller ID: iNet Business",
    "tabDialer": "Dialer",
    "tabContacts": "Mawasiliano",
    "tabHistory": "Historia"
  },
  "routesBadge": "Njia za Kisasa za Kimataifa za A–Z",
  "routesTitle": "Wafikie Wateja Kupitia Njia Bora ya Mawasiliano",
  "routesSubtitle": "Ungana na watoa huduma mbalimbali wa mawasiliano na udhibiti trafiki ya sauti ya kimataifa kwa busara na gharama nafuu.",
  "routesFeaturesTitle": "Usimamizi wa Njia",
  "routesFeatures": [
    "Maeneo ya kimataifa ya A–Z kote duniani",
    "Muunganisho wa watoa huduma wengi",
    "Uelekezaji simu kulingana na msimbo wa eneo",
    "Uelekezaji wa gharama ya chini zaidi (LCR)",
    "Uelekezaji kulingana na ubora wa sauti",
    "Njia mbadala ya dharura (Failover)",
    "Uelekezaji kulingana na kipaumbele",
    "Uelekezaji kulingana na nchi lengwa",
    "Ufuatiliaji wa utendaji wa mtoa huduma",
    "Udhibiti wa gharama za njia"
  ],
  "routeControlCard": {
    "title": "Udhibiti wa njia za kimataifa",
    "badge": "Njia ziko imara",
    "agentCall": "Simu ya wakala",
    "smartRouting": "Uelekezaji mahiri",
    "smartRoutingDesc": "Njia bora inayopatikana",
    "carrier1": "Mtoa huduma A · Kipaumbele 1",
    "carrier2": "Mtoa huduma B · Kipaumbele 2",
    "carrier3": "Mtoa huduma C · Mbadala",
    "tableDest": "Mahali",
    "tableCarrier": "Mtoa huduma",
    "tableQuality": "Ubora",
    "tableRate": "/ dk",
    "note": "Maeneo, ubora wa mtoa huduma na viwango vya bei ni kwa ajili ya mifano tu."
  },
  "routesEngine": {
    "title": "Injini ya Uelekezaji Mahiri",
    "desc": "Huchagua moja kwa moja njia bora zaidi kulingana na nchi lengwa, bei, ubora wa sauti, upatikanaji, na uthabiti wa mtandao.",
    "tags": [
      "Mahali",
      "Bei",
      "Ubora",
      "Upatikanaji",
      "Utendaji wa Mtoa Huduma"
    ]
  },
  "monitoringBadge": "Ufuatiliaji wa Kina wa Kituo cha Simu",
  "monitoringTitle": "Mwonekano Kamili wa Kituo Chako cha Simu",
  "monitoringSubtitle": "Fuatilia shughuli zako zote kutoka kwenye dashibodi moja kuu ya moja kwa moja.",
  "monitoringLiveHeader": "Ufuatiliaji wa Moja kwa Moja",
  "monitoringLiveSub": "Tazama kile kinachoendelea sekunde hii.",
  "monitoringKpis": [
    {
      "label": "Simu zinazoendelea",
      "value": "128"
    },
    {
      "label": "Simu zinasubiri",
      "value": "12"
    },
    {
      "label": "Mawakala waliopo",
      "value": "36"
    },
    {
      "label": "Mawakala wenye simu",
      "value": "64"
    },
    {
      "label": "Hali ya wakala",
      "value": "Moja kwa moja"
    },
    {
      "label": "Simu kwa sekunde",
      "value": "8.4"
    },
    {
      "label": "Kiwango cha mapokezi",
      "value": "86.2%"
    },
    {
      "label": "Wastani wa muda wa simu",
      "value": "04:32"
    },
    {
      "label": "Simu za wakati mmoja",
      "value": "140"
    },
    {
      "label": "Simu zilizoshindikana",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Muhtasari wa kituo cha simu",
    "updateMeta": "Kampeni zote • 08 Okt 2026",
    "note": "Dashibodi ya moja kwa moja • Fuatilia mawakala, foleni na ubora wa sauti kutoka skrini moja.",
    "cols": {
      "agent": "Wakala",
      "campaign": "Kampeni",
      "status": "Hali",
      "duration": "Muda",
      "destination": "Mahali",
      "supervisor": "Msimamizi"
    }
  },
  "supervisorToolsTitle": "Zana za Msimamizi (Supervisor)",
  "supervisorToolsSubtitle": "Wape wasimamizi udhibiti kamili wa kufundisha mawakala na kudhibiti ubora wa huduma.",
  "supervisorTools": [
    {
      "title": "Kusikiliza (Listen)",
      "desc": "Sikiliza simu zinazoendelea bila kugundulika kwa ajili ya kudhibiti ubora."
    },
    {
      "title": "Kunong'ona (Whisper)",
      "desc": "Mpe wakala maelekezo wakati wa simu bila mteja kusikia sauti ya msimamizi."
    },
    {
      "title": "Kuingilia (Barge-In)",
      "desc": "Ingia moja kwa moja kwenye mazungumzo ili kusaidia pale panapohitajika msaada wa haraka."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Simu",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard ya Wakati Halisi",
    "desc": "Onyesha vipimo muhimu vya kituo cha simu kwenye skrini kubwa ofisini."
  },
  "dialingModesBadge": "Upigaji simu wa nje wenye akili zaidi",
  "dialingModesTitle": "Mbinu za Kisasa za Kupiga Simu",
  "dialingModesSubtitle": "Chagua mkakati wa upigaji simu unaolingana na utendaji wa timu yako.",
  "dialingModes": [
    {
      "title": "Predictive Dialer",
      "desc": "Hupiga simu kwa nambari nyingi kiotomatiki kwa wakati mmoja na kuwaunganisha waliopokea kwa mawakala waliopo huru.",
      "flow": "Simu nyingi → Wakala huru",
      "tag": "KAMPENI ZA WINGI WA JUU"
    },
    {
      "title": "Progressive Dialer",
      "desc": "Humpigia mteja anayefuata pale tu ambapo wakala amemaliza simu na yuko tayari.",
      "flow": "Wakala yupo tayari → Mteja anayefuata",
      "tag": "UPIGAJI WA MWENDO WA WAKALA"
    },
    {
      "title": "Power Dialer",
      "desc": "Hupiga orodha ya mawasiliano moja baada ya nyingine ili kuongeza tija ya wakala.",
      "flow": "Orodha ya mawasiliano → Simu mfululizo",
      "tag": "TIJA ILIYOLENGWA"
    },
    {
      "title": "Preview Dialer",
      "desc": "Inamruhusu wakala kupitia taarifa na historia ya mteja kabla ya kuanzisha simu.",
      "flow": "Kagua taarifa za mteja → Anza simu",
      "tag": "MAZUNGUMZO BINAFSI"
    }
  ],
  "analyticsBadge": "Uchambuzi wa Simu na Ripoti",
  "analyticsTitle": "Geuza Data ya Simu Kuwa Matokeo Bora ya Kibiashara",
  "analyticsSubtitle": "Fuatilia kila kipengele cha shughuli zako za kupiga simu kwa usahihi.",
  "analyticsFeatures": [
    "Utendaji wa mawakala",
    "Matokeo ya kampeni",
    "Urefu wa muda wa simu",
    "Kiwango cha majibu (ASR)",
    "Kiwango cha simu zilizokatika",
    "Ufuatiliaji wa mauzo na ubadilishaji",
    "Matokeo ya simu (Dispositions)",
    "Ubora wa njia za mawasiliano",
    "Utendaji wa watoa huduma",
    "Uchambuzi wa kina wa gharama",
    "Ripoti za kila saa, kila siku na kila mwezi",
    "Kumbukumbu za kina za kila simu (CDR)"
  ],
  "analyticsSubtext": "Kuanzia mazungumzo ya mtu mmoja mmoja hadi gharama za mitandao ya kimataifa, pata picha kamili na iliyo wazi.",
  "analyticsCard": {
    "title": "Matokeo ya kampeni",
    "exportBtn": "Hamisha data",
    "tabHourly": "Kila saa",
    "tabDaily": "Kila siku",
    "tabMonthly": "Kila mwezi",
    "timeframe": "01–07 Okt 2026",
    "stat1Label": "Jumla ya simu",
    "stat1Val": "1,842",
    "stat2Label": "Kiwango cha kupokelewa",
    "stat2Val": "86.2%",
    "stat3Label": "Mabadiliko (Conversions)",
    "stat3Val": "18.4%",
    "legendCalls": "Simu",
    "legendAnswered": "Zilizopokelewa",
    "dispositionTitle": "Matokeo ya simu",
    "note": "Data ya mfano wa ripoti • Hamisha maelezo ya kina ya kila simu."
  },
  "ctaBadge": "TUJENGE MTANDAO WAKO WA MAWASILIANO",
  "ctaTitle": "Kuza Biashara Yako na Suluhisho za Mawasiliano ya Biashara",
  "ctaSubtitle": "Kuanzia uelekezaji mahiri wa sauti na huduma za kimataifa hadi AI Voice na nambari pepe, iNet Global hutoa suluhisho imara zinazosaidia biashara kuungana na wateja kwa uwazi na usalama duniani kote.",
  "getStarted": "Anza Sasa",
  "contactUs": "Wasiliana Nasi",
  "ctaTrust1": "Mkataba wa Huduma (SLA) wa Kiwango cha Juu",
  "ctaTrust2": "Uwezeshaji wa Papo Hapo wa WebRTC",
  "ctaTrust3": "Usaidizi wa Kujitolea 24/7"
};

const sv: DailerSolutionTranslation = {
  "heroBadge": "CALLCENTER DIALER-LÖSNING",
  "heroTitle": "Nästa Generations Callcenter-Dialer för Desktop & Mobil",
  "heroDesc": "Koppla samman dina agenter, kunder och globala samtalsrutter genom en kraftfull samtalsplattform. Använd vår webbläsarbaserade desktop-dialer eller mobila dialer för att hantera utgående samtal med intelligent routing, liveövervakning, analyser och realtidskontroll.",
  "requestDemo": "Boka en demo",
  "exploreDialer": "Utforska Dialer",
  "heroFootnote": "En samlad arbetsyta. Från första samtalet till den slutliga rapporten.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Agent tillgänglig",
    "campaign": "Kunduppföljning",
    "campaignMeta": "Progressiv kampanj • Idag",
    "contactsCount": "128 kontakter",
    "connectedBadge": "Ansluten - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Avsluta samtal",
    "tabContact": "Kontakt",
    "tabHistory": "Historik",
    "tabNotes": "Anteckningar",
    "customerDetailsTitle": "KUNDUPPGIFTER",
    "companyLabel": "Företag",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-post",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Senaste kontakt",
    "lastContactVal": "07 okt 2026",
    "dispositionLabel": "SAMTALSSTATUS",
    "dispositionVal": "Uppföljning bokad",
    "recordingText": "Inspelning pågår",
    "stat1Label": "Samtal idag",
    "stat1Val": "46",
    "stat2Label": "Kopplade",
    "stat2Val": "38",
    "stat3Label": "Samtalstid",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "Rätt rutt. Varje samtal.",
    "floatBadgeDesc": "UK · Operatör A · Kvalitet 98.6%"
  },
  "highlights": [
    {
      "title": "Webbläsarbaserad Dialer"
    },
    {
      "title": "Mobil Dialer"
    },
    {
      "title": "A–Z Globala Rutter"
    },
    {
      "title": "Prediktiv och Progressiv Uppringning"
    },
    {
      "title": "Live Samtalsövervakning"
    },
    {
      "title": "Realtidsanalys och Rapporter"
    }
  ],
  "desktopBadge": "Desktop Webbläsardialer",
  "desktopTitle": "Förvandla Vilken Dator Som Helst Till Ett Professionellt Callcenter",
  "desktopSubtitle": "Ingen krånglig programinstallation. Agenter kan säkert logga in via sin webbläsare och börja ringa omedelbart.",
  "desktopFootnote": "Din webbläsare är din arbetsyta. Säker agentåtkomst utan komplicerade installationer.",
  "desktopFeaturesTitle": "Funktioner",
  "desktopFeatures": [
    "WebRTC-samtal via webbläsaren",
    "Agentinloggning och behörighetshantering",
    "Klicka för att ringa (Click-to-call)",
    "Kontakthantering",
    "Samtalshistorik",
    "Samtalsinspelning",
    "Vidarekoppling av samtal",
    "Parkera och stäng av ljud",
    "Hantering av samtalsstatus (Dispositions)",
    "Spårning av agentstatus",
    "Samtalsstatistik i realtid"
  ],
  "desktopMainHeading": "En Dialer. För Alla Dina Samtalsbehov.",
  "desktopWorkspaceTitle": "Din webbläsare är din kompletta arbetsyta.",
  "desktopWorkspaceSubtitle": "Säker agentåtkomst. Ingen krånglig programvaruinstallation krävs.",
  "mobileBadge": "Mobil Dialer",
  "mobileTitle": "Ta Med Dina Samtalsoperationer Överallt",
  "mobileSubtitle": "Ge fält- och distansarbetande agenter en professionell mobil samtalsupplevelse ansluten direkt till företagets telefoniinfrastruktur.",
  "mobileFootnote": "Ditt företagsnummer. Var än arbetet tar dig.",
  "mobileFeaturesTitle": "Mobila Funktioner",
  "mobileFeatures": [
    "Kompatibel arkitektur för Android och iOS",
    "SIP- och WebRTC-samtal",
    "Synkronisering av kontakter",
    "Samtalshistorik",
    "Click-to-call",
    "Hantering av nummerpresentation (Caller ID)",
    "Samtalsinspelning",
    "Status för agenttillgänglighet",
    "Push-notiser",
    "Säker autentisering"
  ],
  "mobileSyncCard": {
    "title": "Kontakter alltid synkroniserade.",
    "desc": "Dina kunder och din samtalshistorik finns alltid med dig.",
    "badge": "Synkades nyss"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "God morgon, Alex",
    "status": "Tillgänglig",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Avsändare: iNet Business",
    "tabDialer": "Knappsats",
    "tabContacts": "Kontakter",
    "tabHistory": "Historik"
  },
  "routesBadge": "Avancerade A–Z Globala Rutter",
  "routesTitle": "Nå Kunder Genom Den Bästa Förbindelsen",
  "routesSubtitle": "Anslut till flera telekomoperatörer och hantera din internationella samtalstrafik intelligent och kostnadseffektivt.",
  "routesFeaturesTitle": "Rutthantering",
  "routesFeatures": [
    "A–Z internationella destinationer",
    "Integration med flera operatörer",
    "Prefixbaserad samtalsdirigering",
    "Lägsta kostnadsrouting (LCR)",
    "Kvalitetsbaserad samtalsdirigering",
    "Automatisk felredundans (Failover)",
    "Prioritetsbaserad routing",
    "Destinationsbaserad routing",
    "Prestandaövervakning av operatörer",
    "Kostnadskontroll för rutter"
  ],
  "routeControlCard": {
    "title": "Global ruttkontroll",
    "badge": "Rutter stabila",
    "agentCall": "Agentsamtal",
    "smartRouting": "Smart routing",
    "smartRoutingDesc": "Bästa tillgängliga rutt",
    "carrier1": "Operatör A · Prioritet 1",
    "carrier2": "Operatör B · Prioritet 2",
    "carrier3": "Operatör C · Backup",
    "tableDest": "Destination",
    "tableCarrier": "Operatör",
    "tableQuality": "Kvalitet",
    "tableRate": "/ min",
    "note": "Destinationer, operatörskvalitet och priser är endast illustrativa."
  },
  "routesEngine": {
    "title": "Smart Routing-Motor",
    "desc": "Väljer automatiskt den bästa rutten baserat på destination, taxa, röstkvalitet, tillgänglighet och operatörsprestanda.",
    "tags": [
      "Destination",
      "Pris",
      "Kvalitet",
      "Tillgänglighet",
      "Operatörsprestanda"
    ]
  },
  "monitoringBadge": "Avancerad Callcenter-Övervakning",
  "monitoringTitle": "Fullständig Insyn i Hela Ditt Callcenter",
  "monitoringSubtitle": "Övervaka hela verksamheten från en centraliserad instrumentpanel i realtid.",
  "monitoringLiveHeader": "Liveövervakning",
  "monitoringLiveSub": "Se vad som händer exakt just nu.",
  "monitoringKpis": [
    {
      "label": "Aktiva samtal",
      "value": "128"
    },
    {
      "label": "Väntande samtal",
      "value": "12"
    },
    {
      "label": "Tillgängliga agenter",
      "value": "36"
    },
    {
      "label": "Upptagna agenter",
      "value": "64"
    },
    {
      "label": "Agentstatus",
      "value": "Live"
    },
    {
      "label": "Samtal per sekund",
      "value": "8.4"
    },
    {
      "label": "Svarsfrekvens",
      "value": "86.2%"
    },
    {
      "label": "Genomsnittlig samtalstid",
      "value": "04:32"
    },
    {
      "label": "Samtidiga samtal",
      "value": "140"
    },
    {
      "label": "Misslyckade samtal",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Översikt över callcenter",
    "updateMeta": "Alla kampanjer • 08 okt 2026",
    "note": "Illustrativ instrumentpanel • Övervaka agenter, köer och samtalskvalitet från en samlad vy.",
    "cols": {
      "agent": "Agent",
      "campaign": "Kampanj",
      "status": "Status",
      "duration": "Varaktighet",
      "destination": "Destination",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Supervisor-Verktyg",
  "supervisorToolsSubtitle": "Ge chefer full kontroll för coaching och kvalitetssäkring i realtid.",
  "supervisorTools": [
    {
      "title": "Medlyssning (Listen)",
      "desc": "Lyssna diskret på pågående samtal för kvalitetssäkring utan att deltagarna märker det."
    },
    {
      "title": "Viskning (Whisper)",
      "desc": "Coacha agenten under samtalet utan att kunden hör supervisorns röst."
    },
    {
      "title": "Ingripande (Barge-In)",
      "desc": "Gå direkt in i ett aktivt samtal när omedelbar eskalering eller hjälp behövs."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Samtal",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard i Realtid",
    "desc": "Visa callcentrets viktigaste nyckeltal live på stora skärmar i lokalen."
  },
  "dialingModesBadge": "Smartare utgående samtal",
  "dialingModesTitle": "Avancerade Uppringningslägen",
  "dialingModesSubtitle": "Välj den uppringningsstrategi som passar bäst för ditt team och dina mål.",
  "dialingModes": [
    {
      "title": "Prediktiv Dialer (Predictive)",
      "desc": "Ringer automatiskt flera telefonnummer samtidigt och kopplar besvarade samtal direkt till lediga agenter.",
      "flow": "Flera samtal → Ledig agent",
      "tag": "HÖGVOLYMSKAMPANJER"
    },
    {
      "title": "Progressiv Dialer (Progressive)",
      "desc": "Ringer nästa kund först när en agent har avslutat föregående samtal och är tillgänglig.",
      "flow": "Ledig agent → Nästa kund",
      "tag": "RING I AGENTENS TEMPO"
    },
    {
      "title": "Power Dialer",
      "desc": "Går automatiskt igenom kontaktlistor i följd för att maximera agenternas produktivitet.",
      "flow": "Kontaktlista → Kontinuerliga samtal",
      "tag": "FOKUSERAD PRODUKTIVITET"
    },
    {
      "title": "Preview Dialer",
      "desc": "Gör det möjligt för agenten att granska kundinformation och historik innan samtalet startas.",
      "flow": "Granska kund → Starta samtal",
      "tag": "PERSONLIGA SAMTAL"
    }
  ],
  "analyticsBadge": "Samtalsanalys & Rapporter",
  "analyticsTitle": "Förvandla Samtalsdata Till Bättre Försäljning och Service",
  "analyticsSubtitle": "Följ upp varje aspekt av dina samtalsoperationer i detalj.",
  "analyticsFeatures": [
    "Agentprestanda",
    "Kampanjresultat",
    "Samtalslängd",
    "Svarsfrekvens (ASR)",
    "Avbrutna samtal",
    "Konverteringsspårning",
    "Samtalsstatus (Dispositions)",
    "Ruttprestanda",
    "Operatörskvalitet",
    "Djupgående kostnadsanalys",
    "Rapporter per timme, dag och månad",
    "Fullständiga samtalsloggar (CDR)"
  ],
  "analyticsSubtext": "Från enskilda dialoger till globala operatörskostnader – få en kristallklar helhetsbild.",
  "analyticsCard": {
    "title": "Kampanjresultat",
    "exportBtn": "Exportera",
    "tabHourly": "Timvis",
    "tabDaily": "Dagligen",
    "tabMonthly": "Månadsvis",
    "timeframe": "01–07 okt 2026",
    "stat1Label": "Totalt antal samtal",
    "stat1Val": "1 842",
    "stat2Label": "Svarsfrekvens",
    "stat2Val": "86.2%",
    "stat3Label": "Konverteringar",
    "stat3Val": "18.4%",
    "legendCalls": "Samtal",
    "legendAnswered": "Besvarade",
    "dispositionTitle": "Samtalsutfall",
    "note": "Illustrativa rapportdata • Exportera detaljerna bakom varje samtal."
  },
  "ctaBadge": "LÅT OSS BYGGA DITT KOMMUNIKATIONSNÄTVERK",
  "ctaTitle": "Utveckla Ditt Företag Med Pålitliga Telekomlösningar",
  "ctaSubtitle": "Från intelligent röstdirigering och internationell terminering till AI Voice och virtuella nummer – iNet Global erbjuder skalbara lösningar som hjälper företag att nå sina kunder med klarhet och tillförlitlighet världen över.",
  "getStarted": "Kom igång nu",
  "contactUs": "Kontakta oss",
  "ctaTrust1": "Enterprise Dialer SLA",
  "ctaTrust2": "Omedelbar WebRTC-Aktivering",
  "ctaTrust3": "Dedikerad Support Dygnet Runt (24/7)"
};

const el: DailerSolutionTranslation = {
  "heroBadge": "ΛΥΣΗ DIALER ΓΙΑ CALL CENTER",
  "heroTitle": "Dialer Call Center Νέας Γενιάς για Υπολογιστές & Κινητά",
  "heroDesc": "Συνδέστε τους εκπροσώπους, τους πελάτες και τις παγκόσμιες διαδρομές σας μέσω μιας ενιαίας, ισχυρής πλατφόρμας κλήσεων. Χρησιμοποιήστε το dialer βασισμένο σε πρόγραμμα περιήγησης ή την εφαρμογή για κινητά για να διαχειριστείτε εξερχόμενες κλήσεις με έξυπνη δρομολόγηση, ζωντανή παρακολούθηση, αναλυτικά στοιχεία και έλεγχο σε πραγματικό χρόνο.",
  "requestDemo": "Ζητήστε Επίδειξη",
  "exploreDialer": "Εξερευνήστε το Dialer",
  "heroFootnote": "Ένας συνδεδεμένος χώρος εργασίας. Από την πρώτη κλήση μέχρι την τελική αναφορά.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Εκπρόσωπος διαθέσιμος",
    "campaign": "Follow-up πελατών",
    "campaignMeta": "Προοδευτική καμπάνια • Σήμερα",
    "contactsCount": "128 επαφές",
    "connectedBadge": "Συνδεδεμένο - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Τερματισμός κλήσης",
    "tabContact": "Επαφή",
    "tabHistory": "Ιστορικό",
    "tabNotes": "Σημειώσεις",
    "customerDetailsTitle": "ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ",
    "companyLabel": "Εταιρεία",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Email",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Τελευταία επαφή",
    "lastContactVal": "07 Οκτ 2026",
    "dispositionLabel": "ΚΑΤΑΣΤΑΣΗ ΚΛΗΣΗΣ",
    "dispositionVal": "Προγραμματισμένη επανάκληση",
    "recordingText": "Εγγραφή σε εξέλιξη",
    "stat1Label": "Κλήσεις σήμερα",
    "stat1Val": "46",
    "stat2Label": "Συνδεδεμένες",
    "stat2Val": "38",
    "stat3Label": "Χρόνος ομιλίας",
    "stat3Val": "02ώ 18λ",
    "floatBadgeTitle": "Η σωστή διαδρομή. Σε κάθε κλήση.",
    "floatBadgeDesc": "Ηνωμένο Βασίλειο · Πάροχος A · Ποιότητα 98.6%"
  },
  "highlights": [
    {
      "title": "Dialer Βασισμένο σε Browser"
    },
    {
      "title": "Dialer για Κινητά"
    },
    {
      "title": "Παγκόσμιες Διαδρομές A–Z"
    },
    {
      "title": "Προγνωστική & Προοδευτική Κλήση"
    },
    {
      "title": "Ζωντανή Παρακολούθηση Κλήσεων"
    },
    {
      "title": "Αναλυτικά Στοιχεία σε Πραγματικό Χρόνο"
    }
  ],
  "desktopBadge": "Desktop Browser Dialer",
  "desktopTitle": "Μετατρέψτε Οποιονδήποτε Υπολογιστή σε Επαγγελματικό Call Center",
  "desktopSubtitle": "Χωρίς πολύπλοκες εγκαταστάσεις λογισμικού. Οι εκπρόσωποι συνδέονται με ασφάλεια μέσω του προγράμματος περιήγησης και ξεκινούν άμεσα να πραγματοποιούν κλήσεις.",
  "desktopFootnote": "Το πρόγραμμα περιήγησής σας είναι ο χώρος εργασίας σας. Ασφαλής πρόσβαση χωρίς περίπλοκες εγκαταστάσεις.",
  "desktopFeaturesTitle": "Δυνατότητες",
  "desktopFeatures": [
    "Κλήσεις WebRTC μέσω browser",
    "Σύνδεση & διαχείριση εκπροσώπων",
    "Κλήση με ένα κλικ (Click-to-call)",
    "Διαχείριση επαφών",
    "Ιστορικό κλήσεων",
    "Ηχογράφηση κλήσεων",
    "Μεταφορά κλήσεων",
    "Αναμονή & σίγαση",
    "Διαχείριση αποτελεσμάτων κλήσης (Dispositions)",
    "Παρακολούθηση κατάστασης εκπροσώπου",
    "Στατιστικά κλήσεων σε πραγματικό χρόνο"
  ],
  "desktopMainHeading": "Ένα Dialer. Για Κάθε Ανάγκη Τηλεφωνικών Κλήσεων.",
  "desktopWorkspaceTitle": "Ο περιηγητής σας είναι ο ολοκληρωμένος χώρος εργασίας σας.",
  "desktopWorkspaceSubtitle": "Ασφαλής πρόσβαση εκπροσώπων. Χωρίς περίπλοκες εγκαταστάσεις λογισμικού.",
  "mobileBadge": "Mobile Dialer",
  "mobileTitle": "Πάρτε τις Λειτουργίες Κλήσεων Μαζί σας Παντού",
  "mobileSubtitle": "Δώστε στους απομακρυσμένους εκπροσώπους και στις ομάδες πεδίου μια επαγγελματική εμπειρία κλήσεων μέσω κινητού, συνδεδεμένη απευθείας με τις τηλεπικοινωνίες της επιχείρησής σας.",
  "mobileFootnote": "Ο επαγγελματικός σας αριθμός. Όπου κι αν σας οδηγήσει η εργασία.",
  "mobileFeaturesTitle": "Δυνατότητες για Κινητά",
  "mobileFeatures": [
    "Αρχιτεκτονική συμβατή με Android & iOS",
    "Κλήσεις φωνής SIP & WebRTC",
    "Συγχρονισμός επαφών",
    "Ιστορικό κλήσεων",
    "Click-to-call",
    "Διαχείριση αναγνώρισης κλήσης (Caller ID)",
    "Ηχογράφηση κλήσεων",
    "Κατάσταση διαθεσιμότητας εκπροσώπου",
    "Ειδοποιήσεις push",
    "Ασφαλής ταυτοποίηση"
  ],
  "mobileSyncCard": {
    "title": "Επαφές πάντα συγχρονισμένες.",
    "desc": "Οι πελάτες και το ιστορικό κλήσεων πάντα μαζί σας.",
    "badge": "Συγχρονίστηκε μόλις τώρα"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Καλημέρα, Alex",
    "status": "Διαθέσιμος",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Αριθμός κλήσης: iNet Business",
    "tabDialer": "Κλήση",
    "tabContacts": "Επαφές",
    "tabHistory": "Ιστορικό"
  },
  "routesBadge": "Προηγμένες Παγκόσμιες Διαδρομές A–Z",
  "routesTitle": "Προσεγγίστε Πελάτες Μέσω της Βέλτιστης Διαδρομής",
  "routesSubtitle": "Συνδεθείτε με πολλαπλούς τηλεπικοινωνιακούς παρόχους και διαχειριστείτε τη διεθνή κίνηση φωνής έξυπνα και οικονομικά.",
  "routesFeaturesTitle": "Διαχείριση Διαδρομών",
  "routesFeatures": [
    "Διεθνείς προορισμοί A–Z παγκοσμίως",
    "Ενσωμάτωση πολλαπλών παρόχων",
    "Δρομολόγηση βάσει προθέματος (Prefix)",
    "Δρομολόγηση χαμηλότερου κόστους (LCR)",
    "Δρομολόγηση βάσει ποιότητας ήχου",
    "Αυτόματη δρομολόγηση εφεδρείας (Failover)",
    "Δρομολόγηση κατά προτεραιότητα",
    "Δρομολόγηση βάσει προορισμού",
    "Παρακολούθηση απόδοσης παρόχων",
    "Διαχείριση κόστους διαδρομών"
  ],
  "routeControlCard": {
    "title": "Έλεγχος παγκόσμιων διαδρομών",
    "badge": "Διαδρομές σταθερές",
    "agentCall": "Κλήση εκπροσώπου",
    "smartRouting": "Έξυπνη δρομολόγηση",
    "smartRoutingDesc": "Καλύτερη διαθέσιμη διαδρομή",
    "carrier1": "Πάροχος A · Προτεραιότητα 1",
    "carrier2": "Πάροχος B · Προτεραιότητα 2",
    "carrier3": "Πάροχος C · Εφεδρικός",
    "tableDest": "Προορισμός",
    "tableCarrier": "Πάροχος",
    "tableQuality": "Ποιότητα",
    "tableRate": "/ λεπτό",
    "note": "Προορισμοί, ποιότητα και τιμές ενδεικτικά."
  },
  "routesEngine": {
    "title": "Μηχανή Έξυπνης Δρομολόγησης",
    "desc": "Επιλέγει αυτόματα την καλύτερη διαδρομή με βάση τον προορισμό, το κόστος, την ποιότητα ήχου, τη διαθεσιμότητα και την αξιοπιστία του παρόχου.",
    "tags": [
      "Προορισμός",
      "Τιμή",
      "Ποιότητα",
      "Διαθεσιμότητα",
      "Απόδοση Παρόχου"
    ]
  },
  "monitoringBadge": "Προηγμένη Παρακολούθηση Call Center",
  "monitoringTitle": "Πλήρης Εικόνα και Έλεγχος του Call Center σας",
  "monitoringSubtitle": "Παρακολουθήστε ολόκληρη τη λειτουργία σας από έναν κεντρικό πίνακα ελέγχου σε πραγματικό χρόνο.",
  "monitoringLiveHeader": "Ζωντανή Παρακολούθηση",
  "monitoringLiveSub": "Δείτε ακριβώς τι συμβαίνει αυτή τη στιγμή.",
  "monitoringKpis": [
    {
      "label": "Ενεργές κλήσεις",
      "value": "128"
    },
    {
      "label": "Κλήσεις σε αναμονή",
      "value": "12"
    },
    {
      "label": "Διαθέσιμοι εκπρόσωποι",
      "value": "36"
    },
    {
      "label": "Απασχολημένοι",
      "value": "64"
    },
    {
      "label": "Κατάσταση εκπροσώπου",
      "value": "Live"
    },
    {
      "label": "Κλήσεις ανά δευτερόλεπτο",
      "value": "8.4"
    },
    {
      "label": "Ποσοστό απάντησης",
      "value": "86.2%"
    },
    {
      "label": "Μέση διάρκεια κλήσης",
      "value": "04:32"
    },
    {
      "label": "Ταυτόχρονες κλήσεις",
      "value": "140"
    },
    {
      "label": "Αποτυχημένες κλήσεις",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Επισκόπηση call center",
    "updateMeta": "Όλες οι καμπάνιες • 08 Οκτ 2026",
    "note": "Ζωντανός πίνακας ελέγχου • Παρακολουθήστε εκπροσώπους, ουρές και ποιότητα φωνής από μία οθόνη.",
    "cols": {
      "agent": "Εκπρόσωπος",
      "campaign": "Καμπάνια",
      "status": "Κατάσταση",
      "duration": "Διάρκεια",
      "destination": "Προορισμός",
      "supervisor": "Επόπτης"
    }
  },
  "supervisorToolsTitle": "Εργαλεία Επόπτη (Supervisor)",
  "supervisorToolsSubtitle": "Δώστε στους υπευθύνους τον απόλυτο έλεγχο για την εκπαίδευση των εκπροσώπων και τη διασφάλιση ποιότητας.",
  "supervisorTools": [
    {
      "title": "Ακρόαση (Listen)",
      "desc": "Παρακολουθήστε διακριτικά ζωντανές κλήσεις για διασφάλιση ποιότητας χωρίς να γίνεστε αντιληπτοί."
    },
    {
      "title": "Ψίθυρος (Whisper)",
      "desc": "Καθοδηγήστε τον εκπρόσωπο κατά τη διάρκεια της κλήσης χωρίς να ακούει ο πελάτης τον επόπτη."
    },
    {
      "title": "Παρέμβαση (Barge-In)",
      "desc": "Συμμετάσχετε άμεσα στην ενεργή συνομιλία μετατρέποντάς την σε τριμερή κλήση όταν απαιτείται."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Κλήσεις",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard Πραγματικού Χρόνου",
    "desc": "Προβάλετε ζωντανά τους βασικούς δείκτες απόδοσης (KPIs) του call center σε μεγάλες οθόνες."
  },
  "dialingModesBadge": "Εξυπνότερες εξερχόμενες κλήσεις",
  "dialingModesTitle": "Προηγμένες Λειτουργίες Αυτόματης Κλήσης",
  "dialingModesSubtitle": "Επιλέξτε τη στρατηγική κλήσεων που ταιριάζει ιδανικά στο επιχειρηματικό σας μοντέλο.",
  "dialingModes": [
    {
      "title": "Προγνωστικό Dialer (Predictive)",
      "desc": "Καλεί αυτόματα πολλούς αριθμούς ταυτόχρονα και συνδέει αμέσως τις απαντημένες κλήσεις στους διαθέσιμους εκπροσώπους.",
      "flow": "Πολλαπλές κλήσεις → Διαθέσιμος εκπρόσωπος",
      "tag": "ΚΑΜΠΑΝΙΕΣ ΥΨΗΛΟΥ ΟΓΚΟΥ"
    },
    {
      "title": "Προοδευτικό Dialer (Progressive)",
      "desc": "Καλεί τον επόμενο πελάτη μόνο όταν ένας εκπρόσωπος ολοκληρώσει την προηγούμενη κλήση και είναι έτοιμος.",
      "flow": "Διαθέσιμος εκπρόσωπος → Επόμενος πελάτης",
      "tag": "ΚΛΗΣΕΙΣ ΣΤΟ ΡΥΘΜΟ ΤΟΥ ΕΚΠΡΟΣΩΠΟΥ"
    },
    {
      "title": "Power Dialer",
      "desc": "Πραγματοποιεί αυτόματα διαδοχικές κλήσεις από τη λίστα επαφών για να μεγιστοποιήσει την παραγωγικότητα του εκπροσώπου.",
      "flow": "Λίστα επαφών → Συνεχείς κλήσεις",
      "tag": "ΕΣΤΙΑΣΜΕΝΗ ΠΑΡΑΓΩΓΙΚΟΤΗΤΑ"
    },
    {
      "title": "Preview Dialer",
      "desc": "Επιτρέπει στους εκπροσώπους να ελέγξουν το προφίλ και το ιστορικό του πελάτη πριν ξεκινήσουν την κλήση.",
      "flow": "Έλεγχος στοιχείων → Έναρξη κλήσης",
      "tag": "ΕΞΑΤΟΜΙΚΕΥΜΕΝΕΣ ΣΥΝΟΜΙΛΙΕΣ"
    }
  ],
  "analyticsBadge": "Αναλυτικά Στοιχεία & Αναφορές Κλήσεων",
  "analyticsTitle": "Μετατρέψτε τα Δεδομένα Κλήσεων σε Καλύτερα Αποτελέσματα",
  "analyticsSubtitle": "Παρακολουθήστε κάθε πτυχή των τηλεφωνικών σας λειτουργιών με ακρίβεια.",
  "analyticsFeatures": [
    "Απόδοση εκπροσώπων",
    "Αποτελέσματα καμπάνιας",
    "Διάρκεια κλήσεων",
    "Ποσοστό απάντησης (ASR)",
    "Ποσοστό εγκατάλειψης",
    "Παρακολούθηση μετατροπών",
    "Αποτελέσματα κλήσεων (Dispositions)",
    "Απόδοση διαδρομών",
    "Αξιοπιστία παρόχων",
    "Λεπτομερής ανάλυση κόστους",
    "Ωριαίες, ημερήσιες και μηνιαίες αναφορές",
    "Αναλυτικά αρχεία καταγραφής κλήσεων (CDR)"
  ],
  "analyticsSubtext": "Από μεμονωμένες συνομιλίες μέχρι το παγκόσμιο κόστος παρόχων, αποκτήστε πλήρη και καθαρή εικόνα.",
  "analyticsCard": {
    "title": "Απόδοση καμπάνιας",
    "exportBtn": "Εξαγωγή",
    "tabHourly": "Ωριαία",
    "tabDaily": "Ημερήσια",
    "tabMonthly": "Μηνιαία",
    "timeframe": "01–07 Οκτ 2026",
    "stat1Label": "Σύνολο κλήσεων",
    "stat1Val": "1.842",
    "stat2Label": "Ποσοστό απάντησης",
    "stat2Val": "86.2%",
    "stat3Label": "Μετατροπές",
    "stat3Val": "18.4%",
    "legendCalls": "Κλήσεις",
    "legendAnswered": "Απαντήθηκαν",
    "dispositionTitle": "Αποτελέσματα κλήσεων",
    "note": "Ενδεικτικά δεδομένα αναφοράς • Εξάγετε αναλυτικά στοιχεία για κάθε κλήση."
  },
  "ctaBadge": "ΑΣ ΔΗΜΙΟΥΡΓΗΣΟΥΜΕ ΤΟ ΤΗΛΕΠΙΚΟΙΝΩΝΙΑΚΟ ΣΑΣ ΔΙΚΤΥΟ",
  "ctaTitle": "Αναπτύξτε την Επιχείρησή σας με Επαγγελματικές Λύσεις Επικοινωνίας",
  "ctaSubtitle": "Από την έξυπνη δρομολόγηση φωνής και τον διεθνή τερματισμό έως το AI Voice και τους εικονικούς αριθμούς, η iNet Global παρέχει κλιμακούμενες λύσεις που βοηθούν τις επιχειρήσεις να επικοινωνούν με πελάτες σε όλο τον κόσμο με αξιοπιστία και καθαρότητα.",
  "getStarted": "Ξεκινήστε Τώρα",
  "contactUs": "Επικοινωνήστε μαζί μας",
  "ctaTrust1": "Enterprise Dialer SLA",
  "ctaTrust2": "Άμεση Ενεργοποίηση WebRTC",
  "ctaTrust3": "24/7 Αφοσιωμένη Υποστήριξη"
};

const cs: DailerSolutionTranslation = {
  "heroBadge": "ŘEŠENÍ DIALERU PRO CALL CENTRA",
  "heroTitle": "Nová Generace Call Center Dialeru pro Počítače i Mobily",
  "heroDesc": "Propojte své operátory, zákazníky a globální trasy prostřednictvím jediné výkonné platformy pro volání. Využijte náš webový desktopový dialer nebo mobilní aplikaci pro správu odchozích hovorů s inteligentním směrováním, živým monitoringem, analytikou a kontrolou v reálném čase.",
  "requestDemo": "Požádat o demo",
  "exploreDialer": "Prozkoumat Dialer",
  "heroFootnote": "Jedno propojené pracoviště. Od prvního hovoru až po finální report.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Operátor volný",
    "campaign": "Následný kontakt se zákazníky",
    "campaignMeta": "Progresivní kampaň • Dnes",
    "contactsCount": "128 kontaktů",
    "connectedBadge": "Připojeno - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Ukončit hovor",
    "tabContact": "Kontakt",
    "tabHistory": "Historie",
    "tabNotes": "Poznámky",
    "customerDetailsTitle": "PODROBNOSTI O ZÁKAZNÍKOVI",
    "companyLabel": "Společnost",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Poslední kontakt",
    "lastContactVal": "07. říj 2026",
    "dispositionLabel": "VÝSLEDEK HOVORU",
    "dispositionVal": "Naplánován další kontakt",
    "recordingText": "Probíhá nahrávání",
    "stat1Label": "Dnešní hovory",
    "stat1Val": "46",
    "stat2Label": "Spojeno",
    "stat2Val": "38",
    "stat3Label": "Doba hovoru",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "Správná trasa. Pro každý hovor.",
    "floatBadgeDesc": "UK · Operátor A · Kvalita 98.6%"
  },
  "highlights": [
    {
      "title": "Webový Dialer v Prohlížeči"
    },
    {
      "title": "Mobilní Dialer"
    },
    {
      "title": "Globální Trasy A–Z"
    },
    {
      "title": "Prediktivní a Progresivní Vytáčení"
    },
    {
      "title": "Živý Monitoring Hovorů"
    },
    {
      "title": "Analytika v Reálném Čase"
    }
  ],
  "desktopBadge": "Desktopový Prohlížečový Dialer",
  "desktopTitle": "Proměňte Jakýkoli Počítač v Profesionální Call Centrum",
  "desktopSubtitle": "Žádné složité instalace programů. Operátoři se bezpečně přihlásí přes webový prohlížeč a mohou okamžitě začít volat.",
  "desktopFootnote": "Váš prohlížeč je vaše kompletní pracoviště. Bezpečný přístup pro operátory bez instalace softwaru.",
  "desktopFeaturesTitle": "Funkce",
  "desktopFeatures": [
    "WebRTC volání v prohlížeči",
    "Přihlašování a správa operátorů",
    "Kliknutím vytočit (Click-to-call)",
    "Správa kontaktů",
    "Historie hovorů",
    "Nahrávání hovorů",
    "Přepojování hovorů",
    "Přidržení a ztlumení",
    "Správa výsledků hovoru (Dispositions)",
    "Sledování stavu operátorů",
    "Statistiky hovorů v reálném čase"
  ],
  "desktopMainHeading": "Jeden Dialer. Všechny Vaše Potřeby Pro Volání.",
  "desktopWorkspaceTitle": "Váš prohlížeč je váš kompletní pracovní prostor.",
  "desktopWorkspaceSubtitle": "Bezpečný přístup operátorů. Žádná komplikovaná instalace softwaru.",
  "mobileBadge": "Mobilní Dialer",
  "mobileTitle": "Mějte Své Telefonické Operace Vždy Po Ruce",
  "mobileSubtitle": "Poskytněte operátorům na dálku a v terénu profesionální mobilní prostředí propojené s vaší podnikovou infrastrukturou.",
  "mobileFootnote": "Vaše firemní číslo. Kdekoliv zrovna pracujete.",
  "mobileFeaturesTitle": "Mobilní Funkce",
  "mobileFeatures": [
    "Kompatibilní s Android i iOS",
    "SIP a WebRTC hlasové hovory",
    "Synchronizace kontaktů",
    "Historie hovorů",
    "Click-to-call",
    "Správa odchozí identifikace (Caller ID)",
    "Nahrávání hovorů",
    "Stav dostupnosti operátora",
    "Push notifikace",
    "Bezpečné ověřování"
  ],
  "mobileSyncCard": {
    "title": "Kontakty neustále synchronizované.",
    "desc": "Vaši zákazníci a historie hovorů vždy u vás.",
    "badge": "Právě synchronizováno"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Dobré ráno, Alexi",
    "status": "K dispozici",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Odchozí ID: iNet Business",
    "tabDialer": "Číselník",
    "tabContacts": "Kontakty",
    "tabHistory": "Historie"
  },
  "routesBadge": "Pokročilé Globální Trasy A–Z",
  "routesTitle": "Dovolte Se Zákazníkům Přes Tu Nejlepší Trasu",
  "routesSubtitle": "Připojte se k více telekomunikačním operátorům a inteligentně spravujte svůj mezinárodní hlasový provoz s maximální spolehlivostí.",
  "routesFeaturesTitle": "Správa Tras",
  "routesFeatures": [
    "Mezinárodní destinace A–Z po celém světě",
    "Integrace více operátorů",
    "Směrování podle předčíslí",
    "Nejlevnější směrování (LCR)",
    "Směrování podle kvality zvuku",
    "Automatické záložní směrování (Failover)",
    "Prioritní směrování",
    "Směrování podle destinace",
    "Sledování výkonu operátorů",
    "Kontrola nákladů na trasy"
  ],
  "routeControlCard": {
    "title": "Globální kontrola tras",
    "badge": "Trasy v pořádku",
    "agentCall": "Hovor operátora",
    "smartRouting": "Chytré směrování",
    "smartRoutingDesc": "Nejlepší dostupná trasa",
    "carrier1": "Operátor A · Priorita 1",
    "carrier2": "Operátor B · Priorita 2",
    "carrier3": "Operátor C · Záloha",
    "tableDest": "Destinace",
    "tableCarrier": "Operátor",
    "tableQuality": "Kvalita",
    "tableRate": "/ min",
    "note": "Destinace, kvalita operátora a tarify jsou ilustrativní."
  },
  "routesEngine": {
    "title": "Chytrý Směrovací Engine",
    "desc": "Automaticky vybírá nejlepší trasu na základě destinace, ceny, kvality hlasu, dostupnosti a stability operátora.",
    "tags": [
      "Destinace",
      "Cena",
      "Kvalita",
      "Dostupnost",
      "Výkon operátora"
    ]
  },
  "monitoringBadge": "Pokročilý Monitoring Call Centra",
  "monitoringTitle": "Dokonalý Přehled o Chodu Celého Call Centra",
  "monitoringSubtitle": "Sledujte kompletní provoz z jednoho centralizovaného přehledu v reálném čase.",
  "monitoringLiveHeader": "Živý Monitoring",
  "monitoringLiveSub": "Mějte okamžitý přehled o tom, co se děje v této vteřině.",
  "monitoringKpis": [
    {
      "label": "Aktivní hovory",
      "value": "128"
    },
    {
      "label": "Čekající hovory",
      "value": "12"
    },
    {
      "label": "Volní operátoři",
      "value": "36"
    },
    {
      "label": "Zaneprázdnění",
      "value": "64"
    },
    {
      "label": "Stav operátora",
      "value": "Živě"
    },
    {
      "label": "Hovorů za sekundu",
      "value": "8.4"
    },
    {
      "label": "Míra přijetí (ASR)",
      "value": "86.2%"
    },
    {
      "label": "Průměrná délka hovoru",
      "value": "04:32"
    },
    {
      "label": "Souběžné hovory",
      "value": "140"
    },
    {
      "label": "Neúspěšné hovory",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Přehled call centra",
    "updateMeta": "Všechny kampaně • 08. říj 2026",
    "note": "Ukázkový živý přehled • Sledujte operátory, fronty i kvalitu hovorů z jediné obrazovky.",
    "cols": {
      "agent": "Operátor",
      "campaign": "Kampaň",
      "status": "Stav",
      "duration": "Délka",
      "destination": "Destinace",
      "supervisor": "Supervizor"
    }
  },
  "supervisorToolsTitle": "Nástroje Supervizora",
  "supervisorToolsSubtitle": "Poskytněte manažerům plnou kontrolu pro koučování operátorů a zajištění kvality hovorů.",
  "supervisorTools": [
    {
      "title": "Příposlech (Listen)",
      "desc": "Nenápadně sledujte probíhající hovory v reálném čase pro kontrolu kvality."
    },
    {
      "title": "Šeptání (Whisper)",
      "desc": "Raďte operátorovi během hovoru, aniž by zákazník supervizora slyšel."
    },
    {
      "title": "Vstoupení do hovoru (Barge-In)",
      "desc": "Připojte se přímo do hovoru v režimu konference, když je nutný okamžitý zásah."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Hovorů",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard v Reálném Čase",
    "desc": "Zobrazte klíčové ukazatele call centra živě na velkých obrazovkách."
  },
  "dialingModesBadge": "Chytřejší odchozí volání",
  "dialingModesTitle": "Pokročilé Režimy Vytáčení",
  "dialingModesSubtitle": "Vyberte si strategii vytáčení, která nejlépe vyhovuje vašemu pracovnímu procesu.",
  "dialingModes": [
    {
      "title": "Prediktivní Dialer (Predictive)",
      "desc": "Automaticky vytáčí více čísel současně a přijaté hovory ihned spojuje s volnými operátory.",
      "flow": "Hromadné vytáčení → Volný operátor",
      "tag": "VELKOOBJEMOVÉ KAMPANĚ"
    },
    {
      "title": "Progresivní Dialer (Progressive)",
      "desc": "Vytáčí dalšího zákazníka teprve ve chvíli, kdy operátor dokončí předchozí hovor a je volný.",
      "flow": "Volný operátor → Další zákazník",
      "tag": "VYTÁČENÍ V TEMPU OPERÁTORA"
    },
    {
      "title": "Power Dialer",
      "desc": "Automaticky a plynule prochází seznam kontaktů, čímž maximalizuje produktivitu operátora.",
      "flow": "Seznam kontaktů → Nepřetržité volání",
      "tag": "MAXIMÁLNÍ PRODUKTIVITA"
    },
    {
      "title": "Náhledový Dialer (Preview)",
      "desc": "Umožňuje operátorovi projít si údaje a historii zákazníka ještě před zahájením samotného hovoru.",
      "flow": "Kontrola záznamu → Zahájení hovoru",
      "tag": "INDIVIDUÁLNÍ ROZHOVORY"
    }
  ],
  "analyticsBadge": "Analytika a Reporty Hovorů",
  "analyticsTitle": "Přeměňte Údaje o Hovorech v Lepší Výsledky Prodeje i Servisu",
  "analyticsSubtitle": "Sledujte každý aspekt svých telefonických operací s maximální přesností.",
  "analyticsFeatures": [
    "Výkonnost operátorů",
    "Úspěšnost kampaní",
    "Délka hovorů",
    "Míra přijetí (ASR)",
    "Míra opuštění fronty",
    "Sledování konverzí",
    "Výsledky hovorů (Dispositions)",
    "Kvalita tras",
    "Spolehlivost operátorů",
    "Detailní analýza nákladů",
    "Hodinové, denní a měsíční reporty",
    "Kompletní záznamy hovorů (CDR)"
  ],
  "analyticsSubtext": "Od jednotlivých rozhovorů až po globální velkoobchodní náklady – získejte dokonalý přehled.",
  "analyticsCard": {
    "title": "Výkonnost kampaně",
    "exportBtn": "Exportovat",
    "tabHourly": "Hodinový",
    "tabDaily": "Denní",
    "tabMonthly": "Měsíční",
    "timeframe": "01.–07. říj 2026",
    "stat1Label": "Celkem hovorů",
    "stat1Val": "1 842",
    "stat2Label": "Míra přijetí",
    "stat2Val": "86.2%",
    "stat3Label": "Konverze",
    "stat3Val": "18.4%",
    "legendCalls": "Hovory",
    "legendAnswered": "Přijato",
    "dispositionTitle": "Výsledky hovorů",
    "note": "Ukázková data reportu • Snadný export detailních záznamů každého hovoru."
  },
  "ctaBadge": "VYBUDUJME VAŠI TELEKOMUNIKAČNÍ SÍŤ",
  "ctaTitle": "Rozvíjejte Své Podnikání s Profesionálními Komunikačními Řešeními",
  "ctaSubtitle": "Od inteligentního hlasového směrování a mezinárodní terminace až po AI Voice a virtuální čísla – iNet Global poskytuje škálovatelná řešení, která pomáhají firmám spojovat se se zákazníky po celém světě spolehlivě a čistě.",
  "getStarted": "Začít nyní",
  "contactUs": "Kontaktujte nás",
  "ctaTrust1": "Garantovaná SLA Call Centra",
  "ctaTrust2": "Okamžitá Aktivace WebRTC",
  "ctaTrust3": "Dedikovaná Podpora 24/7"
};

const ro: DailerSolutionTranslation = {
  "heroBadge": "SOLUȚIE DE DIALER PENTRU CALL CENTER",
  "heroTitle": "Dialer Call Center de Nouă Generație pentru Desktop și Mobil",
  "heroDesc": "Conectați-vă agenții, clienții și rutele globale printr-o singură platformă de apeluri performantă. Utilizați dialerul nostru bazat pe browser sau aplicația mobilă pentru a gestiona apelurile de ieșire cu rutare inteligentă, monitorizare live, analize și control în timp real.",
  "requestDemo": "Solicitați un demo",
  "exploreDialer": "Explorați dialerul",
  "heroFootnote": "Un spațiu de lucru complet integrat. De la primul apel până la raportul final.",
  "heroMockup": {
    "title": "iNet Dialer",
    "agentStatus": "Agent disponibil",
    "campaign": "Urmărire clienți",
    "campaignMeta": "Campanie progresivă • Astăzi",
    "contactsCount": "128 contacte",
    "connectedBadge": "Conectat - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Încheie apelul",
    "tabContact": "Contact",
    "tabHistory": "Istoric",
    "tabNotes": "Notițe",
    "customerDetailsTitle": "DETALII CLIENT",
    "companyLabel": "Companie",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Email",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Ultimul contact",
    "lastContactVal": "07 oct 2026",
    "dispositionLabel": "STATUS APEL",
    "dispositionVal": "Urmărire programată",
    "recordingText": "Înregistrare în curs",
    "stat1Label": "Apeluri azi",
    "stat1Val": "46",
    "stat2Label": "Conectate",
    "stat2Val": "38",
    "stat3Label": "Timp de vorbire",
    "stat3Val": "02h 18m",
    "floatBadgeTitle": "Ruta optimă. La fiecare apel.",
    "floatBadgeDesc": "Marea Britanie · Operator A · Calitate 98.6%"
  },
  "highlights": [
    {
      "title": "Dialer pe Bază de Browser"
    },
    {
      "title": "Dialer Mobil"
    },
    {
      "title": "Rute Globale A–Z"
    },
    {
      "title": "Apelare Predictivă și Progresivă"
    },
    {
      "title": "Monitorizare Apeluri Live"
    },
    {
      "title": "Analize în Timp Real"
    }
  ],
  "desktopBadge": "Dialer Browser pentru Desktop",
  "desktopTitle": "Transformați Orice Calculator într-un Call Center Profesionist",
  "desktopSubtitle": "Fără instalări complicate de software. Agenții se autentifică în siguranță prin browser și încep să sune imediat.",
  "desktopFootnote": "Browserul dumneavoastră este spațiul dumneavoastră de lucru. Acces securizat pentru agenți fără instalări greoaie.",
  "desktopFeaturesTitle": "Funcționalități",
  "desktopFeatures": [
    "Apeluri WebRTC prin browser",
    "Autentificare și administrare agenți",
    "Click-to-call direct",
    "Gestionarea bazei de contacte",
    "Istoricul apelurilor",
    "Înregistrarea convorbirilor",
    "Transfer de apeluri",
    "Punere în așteptare și mut",
    "Gestionarea calificării apelurilor (Dispositions)",
    "Urmărirea stării agenților",
    "Statistici despre apeluri în timp real"
  ],
  "desktopMainHeading": "Un Singur Dialer. Pentru Toate Nevoile Dumneavoastră de Apelare.",
  "desktopWorkspaceTitle": "Browserul dumneavoastră este spațiul de lucru integrat.",
  "desktopWorkspaceSubtitle": "Acces securizat pentru agenți. Fără instalări complicate de software.",
  "mobileBadge": "Dialer Mobil",
  "mobileTitle": "Luați Operațiunile de Apelare Oriunde Mergeți",
  "mobileSubtitle": "Oferiți agenților la distanță și celor de pe teren o experiență profesională pe mobil, conectată direct la infrastructura telecom a companiei.",
  "mobileFootnote": "Numărul companiei dumneavoastră. Oriunde vă poartă afacerea.",
  "mobileFeaturesTitle": "Funcții Mobile",
  "mobileFeatures": [
    "Arhitectură compatibilă Android și iOS",
    "Apeluri de voce prin SIP și WebRTC",
    "Sincronizarea contactelor",
    "Istoricul apelurilor",
    "Click-to-call",
    "Gestionarea numărului afișat (Caller ID)",
    "Înregistrarea apelurilor",
    "Starea de disponibilitate a agentului",
    "Notificări push",
    "Autentificare securizată"
  ],
  "mobileSyncCard": {
    "title": "Contacte mereu sincronizate.",
    "desc": "Clienții și istoricul apelurilor mereu la îndemână.",
    "badge": "Sincronizat chiar acum"
  },
  "mobileDialerMockup": {
    "title": "iNet Dialer",
    "greeting": "Bună dimineața, Alex",
    "status": "Disponibil",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Număr ieșire: iNet Business",
    "tabDialer": "Tastatură",
    "tabContacts": "Contacte",
    "tabHistory": "Istoric"
  },
  "routesBadge": "Rute Globale Avansate A–Z",
  "routesTitle": "Conectați-vă cu Clienții Prin Cea Mai Bună Rută",
  "routesSubtitle": "Conectați-vă la mai mulți operatori telecom și gestionați traficul internațional de voce cu inteligență și eficiență maximă.",
  "routesFeaturesTitle": "Gestionarea Rutelor",
  "routesFeatures": [
    "Destinații internaționale A–Z la nivel global",
    "Integrare cu operatori multipli",
    "Rutare pe bază de prefix telefonic",
    "Rutare la cel mai mic cost (LCR)",
    "Rutare bazată pe calitatea sunetului",
    "Rutare de rezervă automată (Failover)",
    "Rutare după priorități",
    "Rutare pe bază de destinație",
    "Monitorizarea performanței operatorilor",
    "Controlul costurilor pe rute"
  ],
  "routeControlCard": {
    "title": "Controlul rutelor globale",
    "badge": "Rute funcționale",
    "agentCall": "Apel agent",
    "smartRouting": "Rutare inteligentă",
    "smartRoutingDesc": "Cea mai bună rută disponibilă",
    "carrier1": "Operator A · Prioritate 1",
    "carrier2": "Operator B · Prioritate 2",
    "carrier3": "Operator C · Rezervă",
    "tableDest": "Destinație",
    "tableCarrier": "Operator",
    "tableQuality": "Calitate",
    "tableRate": "/ min",
    "note": "Destinațiile, calitatea și tarifele sunt doar ilustrative."
  },
  "routesEngine": {
    "title": "Motor de Rutare Inteligentă",
    "desc": "Alege automat cel mai bun traseu în funcție de destinație, preț, calitatea audio, disponibilitate și stabilitatea operatorului.",
    "tags": [
      "Destinație",
      "Preț",
      "Calitate",
      "Disponibilitate",
      "Performanță Operator"
    ]
  },
  "monitoringBadge": "Monitorizare Avansată Call Center",
  "monitoringTitle": "Vizibilitate Completă Asupra Call Center-ului Dumneavoastră",
  "monitoringSubtitle": "Supravegheați întreaga operațiune dintr-un panou de control centralizat în timp real.",
  "monitoringLiveHeader": "Monitorizare Live",
  "monitoringLiveSub": "Vedeți exact ce se întâmplă în această secundă.",
  "monitoringKpis": [
    {
      "label": "Apeluri active",
      "value": "128"
    },
    {
      "label": "Apeluri în așteptare",
      "value": "12"
    },
    {
      "label": "Agenți disponibili",
      "value": "36"
    },
    {
      "label": "Agenți ocupați",
      "value": "64"
    },
    {
      "label": "Stare agent",
      "value": "Live"
    },
    {
      "label": "Apeluri pe secundă",
      "value": "8.4"
    },
    {
      "label": "Rată de răspuns",
      "value": "86.2%"
    },
    {
      "label": "Durată medie apel",
      "value": "04:32"
    },
    {
      "label": "Apeluri concurente",
      "value": "140"
    },
    {
      "label": "Apeluri eșuate",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Privire de ansamblu call center",
    "updateMeta": "Toate campaniile • 08 oct 2026",
    "note": "Panou live demonstrativ • Monitorizați agenții, cozile și calitatea sunetului dintr-un singur ecran.",
    "cols": {
      "agent": "Agent",
      "campaign": "Campanie",
      "status": "Status",
      "duration": "Durată",
      "destination": "Destinație",
      "supervisor": "Supervizor"
    }
  },
  "supervisorToolsTitle": "Instrumente pentru Supervizori",
  "supervisorToolsSubtitle": "Oferiți managerilor control total pentru instruirea agenților și asigurarea calității serviciilor.",
  "supervisorTools": [
    {
      "title": "Ascultare (Listen)",
      "desc": "Ascultați apelurile live în mod discret pentru evaluarea calității fără întrerupere."
    },
    {
      "title": "Șoaptă (Whisper)",
      "desc": "Ghidează agentul în timpul apelului fără ca clientul să audă vocea supervizorului."
    },
    {
      "title": "Intervenție (Barge-In)",
      "desc": "Intrați direct în conversație ca apel tripartit atunci când este nevoie de asistență."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Apeluri",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Wallboard în Timp Real",
    "desc": "Afișați indicatorii esențiali ai call center-ului pe ecrane mari în birou."
  },
  "dialingModesBadge": "Apeluri de ieșire mai inteligente",
  "dialingModesTitle": "Moduri Avansate de Apelare Automată",
  "dialingModesSubtitle": "Alegeți strategia de apelare adaptată cerințelor operaționale ale echipei dumneavoastră.",
  "dialingModes": [
    {
      "title": "Dialer Predictiv (Predictive)",
      "desc": "Apelează automat mai multe numere în paralel și transferă apelurile conectate direct agenților liberi.",
      "flow": "Apeluri simultane → Agent disponibil",
      "tag": "CAMPANII DE VOLUM MARE"
    },
    {
      "title": "Dialer Progresiv (Progressive)",
      "desc": "Apelează următorul client doar atunci când un agent și-a finalizat convorbirea și este pregătit.",
      "flow": "Agent liber → Următorul client",
      "tag": "APELARE ÎN RITMUL AGENTULUI"
    },
    {
      "title": "Power Dialer",
      "desc": "Parcurge automat listele de contacte în mod secvențial pentru a elimina timpii morți ai agentului.",
      "flow": "Listă de contacte → Apelare continuă",
      "tag": "PRODUCTIVITATE CONCENTRATĂ"
    },
    {
      "title": "Dialer cu Previzualizare (Preview)",
      "desc": "Permite agentului să consulte fișa și istoricul clientului înainte de a iniția apelul.",
      "flow": "Verificare client → Pornire apel",
      "tag": "CONVERSAȚII PERSONALIZATE"
    }
  ],
  "analyticsBadge": "Analize și Rapoarte de Apeluri",
  "analyticsTitle": "Transformați Datele Apelurilor în Rezultate Comerciale Superioare",
  "analyticsSubtitle": "Urmăriți fiecare parametru al campaniilor și activităților telefonice.",
  "analyticsFeatures": [
    "Performanța agenților",
    "Eficiența campaniilor",
    "Durata convorbirilor",
    "Rata de răspuns (ASR)",
    "Rata de abandon a apelurilor",
    "Urmărirea conversiilor",
    "Calificarea apelurilor (Dispositions)",
    "Calitatea rutelor telecom",
    "Performanța operatorilor parteneri",
    "Analiză detaliată a costurilor",
    "Rapoarte orare, zilnice și lunare",
    "Înregistrări detaliate de apeluri (CDR)"
  ],
  "analyticsSubtext": "De la convorbiri individuale până la cheltuielile globale cu operatorii de tranzit, aveți o imagine perfect limpede.",
  "analyticsCard": {
    "title": "Performanța campaniei",
    "exportBtn": "Exportă",
    "tabHourly": "Orar",
    "tabDaily": "Zilnic",
    "tabMonthly": "Lunar",
    "timeframe": "01–07 oct 2026",
    "stat1Label": "Total apeluri",
    "stat1Val": "1.842",
    "stat2Label": "Rată de răspuns",
    "stat2Val": "86.2%",
    "stat3Label": "Conversii",
    "stat3Val": "18.4%",
    "legendCalls": "Apeluri",
    "legendAnswered": "Răspunsuri",
    "dispositionTitle": "Rezultate apeluri",
    "note": "Date de raport demonstrative • Exportați istoricul detaliat al fiecărui apel."
  },
  "ctaBadge": "SĂ CONSTRUIM REȚEAUA DUMNEAVOASTRĂ DE COMUNICAȚII",
  "ctaTitle": "Dezvoltați-vă Afacerea cu Soluții de Telecomunicații Profesionale",
  "ctaSubtitle": "De la rutare vocală inteligentă și terminație internațională până la AI Voice și numere virtuale, iNet Global oferă soluții scalabile care ajută companiile să se conecteze cu clienții din întreaga lume cu claritate și siguranță.",
  "getStarted": "Începeți acum",
  "contactUs": "Contactați-ne",
  "ctaTrust1": "SLA Garantat la Nivel Enterprise",
  "ctaTrust2": "Activare Imediată WebRTC",
  "ctaTrust3": "Suport Tehnic Dedicat 24/7"
};

const hu: DailerSolutionTranslation = {
  "heroBadge": "CALL CENTER TÁRCSÁZÓ MEGOLDÁS",
  "heroTitle": "Új Generációs Call Center Tárcsázó Asztali és Mobil Eszközökre",
  "heroDesc": "Kapcsolja össze operátorait, ügyfeleit és nemzetközi vonalait egyetlen hatékony híváskezelő platformon. Használja böngészőalapú asztali tárcsázónkat vagy mobilalkalmazásunkat a kimenő hívások menedzselésére intelligens útválasztással, élő felügyelettel, analitikával és valós idejű vezérléssel.",
  "requestDemo": "Demó kérése",
  "exploreDialer": "Fedezze fel a tárcsázót",
  "heroFootnote": "Egyetlen integrált munkakörnyezet. Az első hívástól a végső riportig.",
  "heroMockup": {
    "title": "iNet Tárcsázó",
    "agentStatus": "Operátor elérhető",
    "campaign": "Ügyfélkövetés",
    "campaignMeta": "Progresszív kampány • Ma",
    "contactsCount": "128 kapcsolat",
    "connectedBadge": "Kapcsolódva - WebRTC",
    "callerName": "Jamie Lawson",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Hívás befejezése",
    "tabContact": "Kapcsolat",
    "tabHistory": "Előzmények",
    "tabNotes": "Jegyzetek",
    "customerDetailsTitle": "ÜGYFÉL ADATAI",
    "companyLabel": "Vállalat",
    "companyVal": "Lawson & Co.",
    "emailLabel": "E-mail",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Utolsó kapcsolat",
    "lastContactVal": "2026. okt. 07.",
    "dispositionLabel": "HÍVÁS EREDMÉNYE",
    "dispositionVal": "Visszahívás ütemezve",
    "recordingText": "Hangrögzítés folyamatban",
    "stat1Label": "Mai hívások",
    "stat1Val": "46",
    "stat2Label": "Kapcsolt hívások",
    "stat2Val": "38",
    "stat3Label": "Beszélgetési idő",
    "stat3Val": "02ó 18p",
    "floatBadgeTitle": "A megfelelő vonal. Minden híváshoz.",
    "floatBadgeDesc": "Egyesült Királyság · Szolgáltató A · Minőség 98.6%"
  },
  "highlights": [
    {
      "title": "Böngészőalapú Tárcsázó"
    },
    {
      "title": "Mobil Tárcsázó"
    },
    {
      "title": "A–Z Globális Vonalak"
    },
    {
      "title": "Prediktív és Progresszív Tárcsázás"
    },
    {
      "title": "Élő Hívásfelügyelet"
    },
    {
      "title": "Valós Idejű Analitika"
    }
  ],
  "desktopBadge": "Asztali Böngészős Tárcsázó",
  "desktopTitle": "Varázsoljon Bármelyik Számítógépből Professzionális Call Centert",
  "desktopSubtitle": "Nincs szükség bonyolult szoftvertelepítésre. Az operátorok biztonságosan bejelentkezhetnek a böngészőjükön keresztül, és azonnal megkezdhetik a telefonálást.",
  "desktopFootnote": "A böngészője a teljes munkaállomása. Biztonságos operátori hozzáférés bonyolult telepítés nélkül.",
  "desktopFeaturesTitle": "Funkciók",
  "desktopFeatures": [
    "WebRTC hívások a böngészőből",
    "Operátori belépés és jogosultságkezelés",
    "Egykattintásos hívás (Click-to-call)",
    "Névjegyzék és kontaktkezelés",
    "Hívástörténet",
    "Hívásrögzítés",
    "Hívásátirányítás",
    "Tartás és némítás",
    "Híváseredmények kezelése (Dispositions)",
    "Operátori státuszkövetés",
    "Valós idejű hívásstatisztikák"
  ],
  "desktopMainHeading": "Egyetlen Tárcsázó. Minden Hívási Követelményhez.",
  "desktopWorkspaceTitle": "A böngésző az Ön teljes munkakörnyezete.",
  "desktopWorkspaceSubtitle": "Biztonságos operátori hozzáférés. Bonyolult telepítés nélkül.",
  "mobileBadge": "Mobil Tárcsázó",
  "mobileTitle": "Vigye Magával Hívásközponti Munkáját Bárhová",
  "mobileSubtitle": "Biztosítson a távmunkában vagy terepen dolgozó kollégáknak professzionális mobiltelefonos élményt, amely közvetlenül csatlakozik vállalati infrastruktúrájához.",
  "mobileFootnote": "Az Ön vállalati telefonszáma. Bárhol is dolgozik.",
  "mobileFeaturesTitle": "Mobil Funkciók",
  "mobileFeatures": [
    "Android és iOS kompatibilis architektúra",
    "SIP és WebRTC hanghívások",
    "Névjegyek szinkronizálása",
    "Híváselőzmények",
    "Click-to-call",
    "Hívóazonosító (Caller ID) kezelése",
    "Hívásrögzítés",
    "Operátori elérhetőségi állapot",
    "Push értesítések",
    "Biztonságos hitelesítés"
  ],
  "mobileSyncCard": {
    "title": "A kontaktok mindig szinkronban vannak.",
    "desc": "Ügyfelei és a hívástörténet mindig kéznél vannak.",
    "badge": "Épp most szinkronizálva"
  },
  "mobileDialerMockup": {
    "title": "iNet Tárcsázó",
    "greeting": "Jó reggelt, Alex",
    "status": "Elérhető",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "Kimenő szám: iNet Business",
    "tabDialer": "Tárcsázó",
    "tabContacts": "Kontaktok",
    "tabHistory": "Előzmények"
  },
  "routesBadge": "Fejlett A–Z Globális Útvonalak",
  "routesTitle": "Érje El Ügyfeleit a Legmegbízhatóbb Útvonalon",
  "routesSubtitle": "Kapcsolódjon több távközlési szolgáltatóhoz, és kezelje a nemzetközi hangforgalmat intelligensen, kiváló minőségben és költséghatékonyan.",
  "routesFeaturesTitle": "Útvonalkezelés",
  "routesFeatures": [
    "A–Z nemzetközi célállomások világszerte",
    "Több szolgáltató integrációja",
    "Körzetszám alapú útválasztás",
    "Legkisebb költségű útválasztás (LCR)",
    "Hangminőség alapú útválasztás",
    "Automatikus tartalék útvonal (Failover)",
    "Prioritás alapú útválasztás",
    "Célállomás alapú útválasztás",
    "Szolgáltatói teljesítmény megfigyelése",
    "Útvonalköltségek menedzselése"
  ],
  "routeControlCard": {
    "title": "Globális útvonalvezérlés",
    "badge": "Stabil vonalak",
    "agentCall": "Operátori hívás",
    "smartRouting": "Okos útválasztás",
    "smartRoutingDesc": "Legjobb elérhető útvonal",
    "carrier1": "Szolgáltató A · Prioritás 1",
    "carrier2": "Szolgáltató B · Prioritás 2",
    "carrier3": "Szolgáltató C · Tartalék",
    "tableDest": "Célállomás",
    "tableCarrier": "Szolgáltató",
    "tableQuality": "Minőség",
    "tableRate": "/ perc",
    "note": "A célállomások, a minőség és a percdíjak illusztrációk."
  },
  "routesEngine": {
    "title": "Intelligens Útválasztó Motor",
    "desc": "Automatikusan kiválasztja a legjobb vonalat a célállomás, az ár, a hangminőség, a rendelkezésre állás és a szolgáltató megbízhatósága alapján.",
    "tags": [
      "Célállomás",
      "Ár",
      "Minőség",
      "Elérhetőség",
      "Szolgáltatói teljesítmény"
    ]
  },
  "monitoringBadge": "Fejlett Call Center Felügyelet",
  "monitoringTitle": "Teljes Rálátás a Call Center Teljes Működésére",
  "monitoringSubtitle": "Kövesse nyomon a teljes műveletet egy központi, valós idejű műszerfalról.",
  "monitoringLiveHeader": "Élő Megfigyelés",
  "monitoringLiveSub": "Nézze meg, mi történik pontosan ebben a másodpercben.",
  "monitoringKpis": [
    {
      "label": "Aktív hívások",
      "value": "128"
    },
    {
      "label": "Várakozó hívások",
      "value": "12"
    },
    {
      "label": "Elérhető operátorok",
      "value": "36"
    },
    {
      "label": "Foglaltak",
      "value": "64"
    },
    {
      "label": "Operátori állapot",
      "value": "Élő"
    },
    {
      "label": "Hívás / másodperc",
      "value": "8.4"
    },
    {
      "label": "Válaszadási arány",
      "value": "86.2%"
    },
    {
      "label": "Átlagos hívásidő",
      "value": "04:32"
    },
    {
      "label": "Egyidejű hívások",
      "value": "140"
    },
    {
      "label": "Sikertelen hívások",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Call center áttekintése",
    "updateMeta": "Összes kampány • 2026. okt. 08.",
    "note": "Szemléltető élő műszerfal • Kövesse nyomon az operátorokat, a várakozási sorokat és a hangminőséget egy képernyőn.",
    "cols": {
      "agent": "Operátor",
      "campaign": "Kampány",
      "status": "Állapot",
      "duration": "Időtartam",
      "destination": "Célállomás",
      "supervisor": "Supervisor"
    }
  },
  "supervisorToolsTitle": "Vezetői Eszközök (Supervisor)",
  "supervisorToolsSubtitle": "Biztosítson a menedzsereknek teljes kontrollt a munkatársak támogatására és a minőségbiztosításra.",
  "supervisorTools": [
    {
      "title": "Belehallgatás (Listen)",
      "desc": "Hallgassa észrevétlenül az élő beszélgetéseket minőségbiztosítási célból."
    },
    {
      "title": "Súgás (Whisper)",
      "desc": "Adjon tanácsot az operátornak a hívás közben anélkül, hogy az ügyfél hallaná a vezető hangját."
    },
    {
      "title": "Közbelépés (Barge-In)",
      "desc": "Lépjen be közvetlenül az aktív hívásba háromoldalú konferenciaként sürgős helyzetekben."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Hívás",
    "stat2": "86%",
    "stat2Sub": "ASR",
    "title": "Valós Idejű Wallboard",
    "desc": "Jelenítse meg a call center legfontosabb mutatóit élőben a nagy irodai kivetítőkön."
  },
  "dialingModesBadge": "Okosabb kimenő hívások",
  "dialingModesTitle": "Fejlett Automata Tárcsázási Módok",
  "dialingModesSubtitle": "Válassza ki a csapata működéséhez és céljaihoz leginkább illeszkedő stratégiát.",
  "dialingModes": [
    {
      "title": "Prediktív Tárcsázó (Predictive)",
      "desc": "Automatikusan több számot tárcsáz egyszerre, és a sikeresen felvett hívásokat azonnal a szabad operátorokhoz kapcsolja.",
      "flow": "Párhuzamos hívások → Szabad operátor",
      "tag": "NAGY VOLUMENŰ KAMPÁNYOK"
    },
    {
      "title": "Progresszív Tárcsázó (Progressive)",
      "desc": "Csak akkor indítja a következő hívást, ha egy operátor befejezte az előzőt és készen áll.",
      "flow": "Szabad operátor → Következő ügyfél",
      "tag": "OPERÁTORI TEMPÓJÚ HÍVÁS"
    },
    {
      "title": "Power Tárcsázó (Power Dialer)",
      "desc": "Automatikusan sorban tárcsázza a partnerlistát az üresjáratok megszüntetésére és a termelékenység maximalizálására.",
      "flow": "Kontaktlista → Folyamatos hívások",
      "tag": "FÓKUSZÁLT TERMELÉKENYSÉG"
    },
    {
      "title": "Betekintő Tárcsázó (Preview)",
      "desc": "Lehetővé teszi az operátor számára az ügyféladatok és előzmények áttekintését még a hívás elindítása előtt.",
      "flow": "Adatok áttekintése → Hívásindítás",
      "tag": "SZEMÉLYRE SZABOTT MEGBESZÉLÉSEK"
    }
  ],
  "analyticsBadge": "Híváselemzések és Riportok",
  "analyticsTitle": "Alakítsa Hívásadatait Sikeres Értékesítési Eredményekké",
  "analyticsSubtitle": "Kövesse nyomon a telefonos tevékenységek minden fontos részletét.",
  "analyticsFeatures": [
    "Operátori teljesítmény",
    "Kampányok eredményessége",
    "Beszélgetési időtartamok",
    "Válaszadási arány (ASR)",
    "Híváselfogadási arány",
    "Konverziók követése",
    "Híváseredmények (Dispositions)",
    "Útvonalak minősége",
    "Szolgáltatói megbízhatóság",
    "Részletes költségelemzés",
    "Óránkénti, napi és havi jelentések",
    "Részletes hívásnaplók (CDR)"
  ],
  "analyticsSubtext": "Az egyedi beszélgetésektől a globális hálózati költségekig – lásson mindent kristálytisztán.",
  "analyticsCard": {
    "title": "Kampányteljesítmény",
    "exportBtn": "Exportálás",
    "tabHourly": "Óránkénti",
    "tabDaily": "Napi",
    "tabMonthly": "Havi",
    "timeframe": "2026. okt. 01–07.",
    "stat1Label": "Összes hívás",
    "stat1Val": "1 842",
    "stat2Label": "Válaszadási arány",
    "stat2Val": "86.2%",
    "stat3Label": "Konverziók",
    "stat3Val": "18.4%",
    "legendCalls": "Hívások",
    "legendAnswered": "Fogadva",
    "dispositionTitle": "Híváskimenetelek",
    "note": "Szemléltető riportadatok • Exportálja bármely hívás részletes adatait."
  },
  "ctaBadge": "ÉPÍTSÜK KI VÁLLALATI KOMMUNIKÁCIÓS HÁLÓZATÁT",
  "ctaTitle": "Fejlessze Vállalkozását Megbízható Távközlési Megoldásokkal",
  "ctaSubtitle": "Az intelligens hangútválasztástól és nemzetközi terminációtól az AI Voice és virtuális számokig az iNet Global olyan skálázható megoldásokat kínál, amelyekkel tisztán és stabilan érheti el ügyfeleit a világ bármely pontján.",
  "getStarted": "Kezdés most",
  "contactUs": "Kapcsolatfelvétel",
  "ctaTrust1": "Vállalati Szintű Dialer SLA",
  "ctaTrust2": "Azonnali WebRTC Aktiválás",
  "ctaTrust3": "24/7 Elkötelezett Támogatás"
};

const uk: DailerSolutionTranslation = {
  "heroBadge": "РІШЕННЯ ДАЙЛЕРА ДЛЯ КОЛ-ЦЕНТРІВ",
  "heroTitle": "Інтелектуальний дайлер нового покоління для ПК та мобільних пристроїв",
  "heroDesc": "Об'єднайте ваших операторів, клієнтів та глобальні маршрути через єдину надійну комунікаційну платформу. Використовуйте наш браузерний або мобільний дайлер для керування вихідними дзвінками з інтелектуальною маршрутизацією, онлайн-моніторингом, аналітикою та контролем у реальному часі.",
  "requestDemo": "Замовити демо",
  "exploreDialer": "Ознайомитися з дайлером",
  "heroFootnote": "Єдиний інтегрований робочий простір. Від першого дзвінка до фінального звіту.",
  "heroMockup": {
    "title": "Дайлер iNet",
    "agentStatus": "Оператор вільний",
    "campaign": "Повторний контакт з клієнтами",
    "campaignMeta": "Прогресивний продзвін • Сьогодні",
    "contactsCount": "128 контактів",
    "connectedBadge": "Підключено - WebRTC",
    "callerName": "Джеймі Лоусон",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "Завершити виклик",
    "tabContact": "Контакт",
    "tabHistory": "Історія",
    "tabNotes": "Нотатки",
    "customerDetailsTitle": "ДАНІ КЛІЄНТА",
    "companyLabel": "Компанія",
    "companyVal": "Lawson & Co.",
    "emailLabel": "Ел. пошта",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "Останній контакт",
    "lastContactVal": "07 жовт 2026",
    "dispositionLabel": "СТАТУС ДЗВІНКА",
    "dispositionVal": "Заплановано передзвін",
    "recordingText": "Триває запис розмови",
    "stat1Label": "Дзвінків сьогодні",
    "stat1Val": "46",
    "stat2Label": "З'єднано",
    "stat2Val": "38",
    "stat3Label": "Час розмови",
    "stat3Val": "02г 18хв",
    "floatBadgeTitle": "Точний маршрут. Кожен дзвінок.",
    "floatBadgeDesc": "Велика Британія · Оператор A · Якість 98.6%"
  },
  "highlights": [
    {
      "title": "Браузерний дайлер"
    },
    {
      "title": "Мобільний дайлер"
    },
    {
      "title": "Глобальні маршрути A–Z"
    },
    {
      "title": "Предиктивний та прогресивний продзвін"
    },
    {
      "title": "Моніторинг дзвінків у реальному часі"
    },
    {
      "title": "Детальна аналітика"
    }
  ],
  "desktopBadge": "Браузерний дайлер для ПК",
  "desktopTitle": "Перетворіть будь-який комп'ютер на професійний кол-центр",
  "desktopSubtitle": "Ніяких складних встановлень програм. Оператори безпечно входять через свій браузер і одразу починають здійснювати дзвінки.",
  "desktopFootnote": "Ваш браузер — це ваше повноцінне робоче місце. Безпечний доступ без зайвого клопоту.",
  "desktopFeaturesTitle": "Можливості",
  "desktopFeatures": [
    "WebRTC дзвінки через браузер",
    "Авторизація та керування операторами",
    "Дзвінок в один клік (Click-to-call)",
    "Управління базою контактів",
    "Історія дзвінків",
    "Запис розмов",
    "Переадресація дзвінків",
    "Утримання та вимкнення мікрофона",
    "Управління статусами дзвінків (Dispositions)",
    "Відстеження статусу оператора",
    "Статистика дзвінків у реальному часі"
  ],
  "desktopMainHeading": "Один дайлер. Для всіх ваших потреб телефонного зв'язку.",
  "desktopWorkspaceTitle": "Ваш браузер — це ваш повноцінний робочий простір.",
  "desktopWorkspaceSubtitle": "Безпечний доступ операторів. Без складного встановлення програмного забезпечення.",
  "mobileBadge": "Мобільний дайлер",
  "mobileTitle": "Керуйте дзвінками вашої компанії з будь-якої точки світу",
  "mobileSubtitle": "Надайте віддаленим і мобільним співробітникам професійний інструмент зв'язку, підключений до вашої корпоративної інфраструктури.",
  "mobileFootnote": "Ваш робочий номер, де б ви не перебували.",
  "mobileFeaturesTitle": "Мобільні можливості",
  "mobileFeatures": [
    "Сумісність з Android та iOS",
    "Голосові дзвінки SIP та WebRTC",
    "Синхронізація контактів",
    "Історія викликів",
    "Дзвінок в один клік",
    "Керування АВН (Caller ID)",
    "Запис дзвінків",
    "Статус доступності оператора",
    "Push-сповіщення",
    "Безпечна автентифікація"
  ],
  "mobileSyncCard": {
    "title": "Контакти завжди синхронізовані.",
    "desc": "Клієнти та історія дзвінків завжди під рукою.",
    "badge": "Щойно оновлено"
  },
  "mobileDialerMockup": {
    "title": "Дайлер iNet",
    "greeting": "Доброго ранку, Алекс",
    "status": "Вільний",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "АВН: iNet Business",
    "tabDialer": "Набір",
    "tabContacts": "Контакти",
    "tabHistory": "Історія"
  },
  "routesBadge": "Міжнародні голосові маршрути A–Z",
  "routesTitle": "З'єднуйтесь із клієнтами за найоптимальнішим каналом",
  "routesSubtitle": "Підключайтеся до провідних міжнародних операторів та розумно керуйте глобальним голосовим трафіком з найвищою якістю.",
  "routesFeaturesTitle": "Керування маршрутами",
  "routesFeatures": [
    "Міжнародні напрямки A–Z по всьому світу",
    "Інтеграція з декількома операторами",
    "Маршрутизація за префіксами",
    "Маршрутизація за найменшою вартістю (LCR)",
    "Маршрутизація на основі якості зв'язку",
    "Резервна маршрутизація (Failover)",
    "Пріоритетна маршрутизація",
    "Маршрутизація за напрямками",
    "Моніторинг продуктивності операторів",
    "Контроль собівартості маршрутів"
  ],
  "routeControlCard": {
    "title": "Контроль глобальних маршрутів",
    "badge": "Маршрути стабільні",
    "agentCall": "Дзвінок оператора",
    "smartRouting": "Розумна маршрутизація",
    "smartRoutingDesc": "Кращий доступний маршрут",
    "carrier1": "Оператор A · Пріоритет 1",
    "carrier2": "Оператор B · Пріоритет 2",
    "carrier3": "Оператор C · Резерв",
    "tableDest": "Напрямок",
    "tableCarrier": "Оператор",
    "tableQuality": "Якість",
    "tableRate": "/ хв",
    "note": "Напрямки, якість та тарифи наведено для прикладу."
  },
  "routesEngine": {
    "title": "Інтелектуальний модуль маршрутизації",
    "desc": "Автоматично обирає найкращий маршрут на основі напрямку, тарифу, якості звуку, доступності та надійності партнера.",
    "tags": [
      "Напрямок",
      "Ціна",
      "Якість",
      "Доступність",
      "Надійність оператора"
    ]
  },
  "monitoringBadge": "Розширений моніторинг кол-центру",
  "monitoringTitle": "Повний контроль за діяльністю вашого кол-центру",
  "monitoringSubtitle": "Контролюйте всі операції з єдиного централізованого дашборду в режимі реального часу.",
  "monitoringLiveHeader": "Моніторинг наживо",
  "monitoringLiveSub": "Дивіться, що відбувається саме цієї секунди.",
  "monitoringKpis": [
    {
      "label": "Активні дзвінки",
      "value": "128"
    },
    {
      "label": "Очікують у черзі",
      "value": "12"
    },
    {
      "label": "Вільні оператори",
      "value": "36"
    },
    {
      "label": "Зайняті оператори",
      "value": "64"
    },
    {
      "label": "Статус оператора",
      "value": "В мережі"
    },
    {
      "label": "Дзвінків на секунду",
      "value": "8.4"
    },
    {
      "label": "Відсоток відповідей",
      "value": "86.2%"
    },
    {
      "label": "Середня тривалість",
      "value": "04:32"
    },
    {
      "label": "Паралельні дзвінки",
      "value": "140"
    },
    {
      "label": "Збої викликів",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "Огляд контакт-центру",
    "updateMeta": "Усі кампанії • 08 жовт 2026",
    "note": "Інтерактивний дашборд • Моніторинг операторів, черг та якості звуку на одному екрані.",
    "cols": {
      "agent": "Оператор",
      "campaign": "Кампанія",
      "status": "Статус",
      "duration": "Тривалість",
      "destination": "Напрямок",
      "supervisor": "Супервізор"
    }
  },
  "supervisorToolsTitle": "Інструменти супервізора",
  "supervisorToolsSubtitle": "Надайте керівникам повний контроль для навчання персоналу та забезпечення якості обслуговування.",
  "supervisorTools": [
    {
      "title": "Прослуховування (Listen)",
      "desc": "Непомітний контроль дзвінків у реальному часі для контролю стандартів якості."
    },
    {
      "title": "Підказки (Whisper)",
      "desc": "Коучинг оператора під час розмови так, щоб клієнт не чув супервізора."
    },
    {
      "title": "Втручання (Barge-In)",
      "desc": "Пряме підключення до розмови в режимі тристороннього дзвінка при необхідності."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "Дзвінків",
    "stat2": "86%",
    "stat2Sub": "Додзвон",
    "title": "Волборд у реальному часі",
    "desc": "Відображення ключових метрик кол-центру на великих моніторах зали."
  },
  "dialingModesBadge": "Розумний вихідний продзвін",
  "dialingModesTitle": "Просунуті режими автододзвону",
  "dialingModesSubtitle": "Оберіть стратегію обдзвону, яка найкраще відповідає вашим бізнес-завданням.",
  "dialingModes": [
    {
      "title": "Предиктивний дайлер (Predictive)",
      "desc": "Автоматично набирає кілька номерів паралельно та миттєво з'єднує клієнтів, що відповіли, з вільними операторами.",
      "flow": "Масовий набір → Вільний оператор",
      "tag": "МАСОВІ ПРОДАЖІ"
    },
    {
      "title": "Прогресивний дайлер (Progressive)",
      "desc": "Набирає наступного клієнта лише тоді, коли оператор звільняється після попереднього дзвінка.",
      "flow": "Вільний оператор → Наступний клієнт",
      "tag": "ПРОДЗВІН У ТЕМПІ ОПЕРАТОРА"
    },
    {
      "title": "Пауер дайлер (Power Dialer)",
      "desc": "Послідовно обдзвонює списки контактів, мінімізуючи час очікування оператора.",
      "flow": "Список контактів → Безперервний продзвін",
      "tag": "МАКСИМАЛЬНА ПРОДУКТИВНІСТЬ"
    },
    {
      "title": "Попередній перегляд (Preview)",
      "desc": "Дозволяє оператору ознайомитися з карткою клієнта та його історією до початку виклику.",
      "flow": "Вивчення картки → Початок дзвінка",
      "tag": "ПЕРСОНАЛІЗОВАНІ ПЕРЕГОВОРИ"
    }
  ],
  "analyticsBadge": "Аналітика та звіти про дзвінки",
  "analyticsTitle": "Перетворюйте дані про дзвінки на зростання результатів продажів та сервісу",
  "analyticsSubtitle": "Відстежуйте кожен аспект роботи вашого телефонного підрозділу.",
  "analyticsFeatures": [
    "Ефективність операторів",
    "Результативність кампаній",
    "Тривалість розмов",
    "Відсоток додзвону (ASR)",
    "Відсоток втрачених викликів",
    "Відстеження конверсій",
    "Результати дзвінків (Dispositions)",
    "Якість маршрутів",
    "Надійність транзитних операторів",
    "Детальний аналіз витрат",
    "Погодинні, щоденні та щомісячні звіти",
    "Повні деталізовані журнали дзвінків (CDR)"
  ],
  "analyticsSubtext": "Від окремих розмов до загальних міжнародних витрат на операторів — повна прозорість.",
  "analyticsCard": {
    "title": "Результативність кампанії",
    "exportBtn": "Експорт",
    "tabHourly": "Погодинно",
    "tabDaily": "Щодня",
    "tabMonthly": "Щомісяця",
    "timeframe": "01–07 жовт 2026",
    "stat1Label": "Усього дзвінків",
    "stat1Val": "1 842",
    "stat2Label": "Відсоток відповідей",
    "stat2Val": "86.2%",
    "stat3Label": "Конверсії",
    "stat3Val": "18.4%",
    "legendCalls": "Дзвінки",
    "legendAnswered": "Відповіли",
    "dispositionTitle": "Підсумки розмов",
    "note": "Зразок звіту • Вивантажуйте деталі по кожному виклику."
  },
  "ctaBadge": "ПОБУДУЙМО ВАШУ КОРПОРАТИВНУ МЕРЕЖУ ЗВ'ЯЗКУ",
  "ctaTitle": "Розвивайте бізнес за допомогою сучасних рішень для комунікації",
  "ctaSubtitle": "Від розумної голосової маршрутизації та міжнародного транзиту до голосового штучного інтелекту та віртуальних номерів — iNet Global забезпечує надійні рішення для ефективного спілкування з клієнтами в усьому світі.",
  "getStarted": "Розпочати зараз",
  "contactUs": "Зв'язатися з нами",
  "ctaTrust1": "Корпоративний SLA дайлера",
  "ctaTrust2": "Миттєва активація WebRTC",
  "ctaTrust3": "Цілодобова підтримка 24/7"
};

const he: DailerSolutionTranslation = {
  "heroBadge": "פתרון חייגן למוקד טלפוני",
  "heroTitle": "חייגן מוקד טלפוני מהדור הבא למחשב ולנייד",
  "heroDesc": "חברו את הנציגים, הלקוחות והניתובים הבינלאומיים שלכם דרך פלטפורמת שיחות אחת ועוצמתית. השתמשו בחייגן הדפדפן השולחני או בחייגן הנייד שלנו כדי לנהל שיחות יוצאות עם ניתוב מתקדם, ניטור חי, ניתוח נתונים ושליטה בזמן אמת.",
  "requestDemo": "בקש הדגמה",
  "exploreDialer": "גלה את החייגן",
  "heroFootnote": "מרחב עבודה מחובר אחד. מהשיחה הראשונה ועד לדוח המסכם.",
  "heroMockup": {
    "title": "חייגן iNet",
    "agentStatus": "נציג פנוי",
    "campaign": "מעקב לקוחות",
    "campaignMeta": "קמפיין פרוגרסיבי • היום",
    "contactsCount": "128 אנשי קשר",
    "connectedBadge": "מחובר - WebRTC",
    "callerName": "ג'יימי לוסון",
    "callerPhone": "+44 20 7946 0328",
    "duration": "03:42",
    "endCall": "סיום שיחה",
    "tabContact": "איש קשר",
    "tabHistory": "היסטוריה",
    "tabNotes": "הערות",
    "customerDetailsTitle": "פרטי לקוח",
    "companyLabel": "חברה",
    "companyVal": "Lawson & Co.",
    "emailLabel": "דוא\"ל",
    "emailVal": "jamie@lawson.co",
    "lastContactLabel": "קשר אחרון",
    "lastContactVal": "07 אוק 2026",
    "dispositionLabel": "סטטוס שיחה",
    "dispositionVal": "נקבע מעקב חוזר",
    "recordingText": "הקלטה פעילה",
    "stat1Label": "שיחות היום",
    "stat1Val": "46",
    "stat2Label": "חוברו",
    "stat2Val": "38",
    "stat3Label": "זמן דיבור",
    "stat3Val": "02ש 18ד",
    "floatBadgeTitle": "הנתיב הנכון. לכל שיחה.",
    "floatBadgeDesc": "בריטניה · ספק A · איכות 98.6%"
  },
  "highlights": [
    {
      "title": "חייגן מבוסס דפדפן"
    },
    {
      "title": "חייגן לסמארטפון"
    },
    {
      "title": "נתיבים גלובליים A–Z"
    },
    {
      "title": "חיוג פרדיקטיבי ופרוגרסיבי"
    },
    {
      "title": "ניטור שיחות בזמן אמת"
    },
    {
      "title": "ניתוח נתונים ודוחות חיים"
    }
  ],
  "desktopBadge": "חייגן דפדפן שולחני",
  "desktopTitle": "הפכו כל מחשב למוקד טלפוני מקצועי",
  "desktopSubtitle": "ללא התקנות תוכנה מסובכות. נציגים מתחברים בצורה מאובטחת דרך הדפדפן ומתחילים להוציא שיחות באופן מיידי.",
  "desktopFootnote": "הדפדפן שלכם הוא סביבת העבודה שלכם. גישה מאובטחת לנציגים ללא התקנה מורכבת.",
  "desktopFeaturesTitle": "יכולות מרכזיות",
  "desktopFeatures": [
    "שיחות WebRTC דרך הדפדפן",
    "התחברות וניהול נציגים",
    "לחיצה לחיוג (Click-to-call)",
    "ניהול אנשי קשר",
    "היסטוריית שיחות",
    "הקלטת שיחות",
    "העברת שיחות",
    "המתנה והשתקה",
    "ניהול סטטוסי סיום שיחה (Dispositions)",
    "מעקב אחר נוכחות וסטטוס נציג",
    "סטטיסטיקות שיחה בזמן אמת"
  ],
  "desktopMainHeading": "חייגן אחד. לכל דרישות השיחה של העסק שלכם.",
  "desktopWorkspaceTitle": "הדפדפן שלכם הוא מרחב העבודה המלא שלכם.",
  "desktopWorkspaceSubtitle": "גישה מאובטחת לנציגים ללא צורך בהתקנת תוכנות מורכבות.",
  "mobileBadge": "חייגן נייד",
  "mobileTitle": "קחו את פעילות המוקד שלכם לכל מקום",
  "mobileSubtitle": "העניקו לנציגים מרוחקים ונציגי שטח חוויית שיחה מקצועית בנייד, המחוברת ישירות למרכזיית הטלקום של החברה.",
  "mobileFootnote": "מספר הטלפון של העסק שלכם. בכל מקום שבו אתם עובדים.",
  "mobileFeaturesTitle": "יכולות ניידות",
  "mobileFeatures": [
    "ארכיטקטורה תואמת Android ו-iOS",
    "שיחות קוליות SIP ו-WebRTC",
    "סנכרון אנשי קשר",
    "היסטוריית שיחות",
    "לחיצה לחיוג",
    "ניהול זיהוי מתקשר (Caller ID)",
    "הקלטת שיחות",
    "סטטוס זמינות נציג",
    "התראות Push",
    "אימות מאובטח"
  ],
  "mobileSyncCard": {
    "title": "אנשי קשר מסונכרנים תמיד.",
    "desc": "הלקוחות והיסטוריית השיחות תמיד בהישג ידכם.",
    "badge": "סונכרן הרגע"
  },
  "mobileDialerMockup": {
    "title": "חייגן iNet",
    "greeting": "בוקר טוב, Alex",
    "status": "זמין",
    "callerId": "+1 415 555 0124",
    "callerIdLabel": "מספר מזוהה: iNet Business",
    "tabDialer": "חייגן",
    "tabContacts": "אנשי קשר",
    "tabHistory": "היסטוריה"
  },
  "routesBadge": "נתיבים גלובליים מתקדמים A–Z",
  "routesTitle": "הגיעו ללקוחות דרך הנתיב האיכותי והנכון ביותר",
  "routesSubtitle": "התחברו למספר רב של ספקי תקשורת ונהלו את תעבורת הקול הבינלאומית בחכמה וביעילות כלכלית.",
  "routesFeaturesTitle": "ניהול נתיבים",
  "routesFeatures": [
    "יעדים בינלאומיים A–Z בכל העולם",
    "אינטגרציה עם מגוון ספקי תקשורת",
    "ניתוב מבוסס קידומת חיוג",
    "ניתוב לפי עלות נמוכה ביותר (LCR)",
    "ניתוב מבוסס איכות שמע",
    "ניתוב גיבוי אוטומטי (Failover)",
    "ניתוב לפי עדיפויות",
    "ניתוב לפי יעדי שיחה",
    "ניטור ביצועי ספקים",
    "שליטה ובקרת עלויות נתיב"
  ],
  "routeControlCard": {
    "title": "שליטה בנתיבים גלובליים",
    "badge": "נתיבים יציבים",
    "agentCall": "שיחת נציג",
    "smartRouting": "ניתוב חכם",
    "smartRoutingDesc": "הנתיב הטוב ביותר הזמין",
    "carrier1": "ספק A · עדיפות 1",
    "carrier2": "ספק B · עדיפות 2",
    "carrier3": "ספק C · גיבוי",
    "tableDest": "יעד",
    "tableCarrier": "ספק",
    "tableQuality": "איכות",
    "tableRate": "/ דקה",
    "note": "יעדים, איכות ספק ותעריפים להמחשה בלבד."
  },
  "routesEngine": {
    "title": "מנוע ניתוב חכם",
    "desc": "בוחר אוטומטית את הנתיב הטוב ביותר בהתבסס על יעד, מחיר, איכות שמע, זמינות וביצועי ספק התקשורת.",
    "tags": [
      "יעד",
      "מחיר",
      "איכות",
      "זמינות",
      "ביצועי ספק"
    ]
  },
  "monitoringBadge": "ניטור מוקד טלפוני מתקדם",
  "monitoringTitle": "שקיפות מלאה על כל פעילות המוקד הטלפוני",
  "monitoringSubtitle": "נטרו את כלל המערך מלוח בקרה מרכזי אחד בזמן אמת.",
  "monitoringLiveHeader": "ניטור חי",
  "monitoringLiveSub": "ראו מה קורה בדיוק ברגע זה.",
  "monitoringKpis": [
    {
      "label": "שיחות פעילות",
      "value": "128"
    },
    {
      "label": "שיחות ממתינות",
      "value": "12"
    },
    {
      "label": "נציגים פנויים",
      "value": "36"
    },
    {
      "label": "נציגים בשיחה",
      "value": "64"
    },
    {
      "label": "סטטוס נציג",
      "value": "פעיל"
    },
    {
      "label": "שיחות לשנייה",
      "value": "8.4"
    },
    {
      "label": "אחוז מענה",
      "value": "86.2%"
    },
    {
      "label": "משך שיחה ממוצע",
      "value": "04:32"
    },
    {
      "label": "שיחות במקביל",
      "value": "140"
    },
    {
      "label": "שיחות שנכשלו",
      "value": "3",
      "danger": true
    }
  ],
  "monitoringTable": {
    "title": "סקירת מוקד טלפוני",
    "updateMeta": "כל הקמפיינים • 08 אוק 2026",
    "note": "לוח מחוונים חי להמחשה • נטרו נציגים, תורים ואיכות קול ממסך אחד.",
    "cols": {
      "agent": "נציג",
      "campaign": "קמפיין",
      "status": "סטטוס",
      "duration": "משך שיחה",
      "destination": "יעד",
      "supervisor": "אחראי משמרת"
    }
  },
  "supervisorToolsTitle": "כלי מנהל וסופרווייזר",
  "supervisorToolsSubtitle": "העניקו למנהלים שליטה מלאה לאימון נציגים והבטחת איכות שירות.",
  "supervisorTools": [
    {
      "title": "האזנה שקטה (Listen)",
      "desc": "האזינו לשיחות חיות ללא התערבות לצורך בקרת איכות ושירות."
    },
    {
      "title": "לחישה (Whisper)",
      "desc": "הנחו את הנציג בזמן השיחה מבלי שהלקוח ישמע את קולו של המנהל."
    },
    {
      "title": "התערבות בשיחה (Barge-In)",
      "desc": "הצטרפו ישירות לשיחה פעילה כשיחה משולשת בעת צורך בסיוע דחוף."
    }
  ],
  "wallboardCard": {
    "stat1": "128",
    "stat1Sub": "שיחות",
    "stat2": "86%",
    "stat2Sub": "מענה (ASR)",
    "title": "מסך נתונים חי (Wallboard)",
    "desc": "הציגו מדדי ביצועים מרכזיים של המוקד על גבי מסכים גדולים במוקד."
  },
  "dialingModesBadge": "חיוג יוצא חכם ויעיל יותר",
  "dialingModesTitle": "מצבי חיוג אוטומטי מתקדמים",
  "dialingModesSubtitle": "בחרו את אסטרטגיית החיוג המתאימה ביותר לתהליך העבודה שלכם.",
  "dialingModes": [
    {
      "title": "חייגן פרדיקטיבי (Predictive)",
      "desc": "מחייג אוטומטית למספרים רבים בו-זמנית ומחבר שיחות שנענו ישירות לנציגים פנויים.",
      "flow": "חיוג מרובה ← נציג פנוי",
      "tag": "קמפיינים בהיקף גבוה"
    },
    {
      "title": "חייגן פרוגרסיבי (Progressive)",
      "desc": "מחייג ללקוח הבא רק כאשר נציג מסיים שיחה ומתפנה לקבלת שיחה חדשה.",
      "flow": "נציג פנוי ← הלקוח הבא",
      "tag": "חיוג בקצב הנציג"
    },
    {
      "title": "Power Dialer",
      "desc": "עובר אוטומטית על רשימות אנשי קשר ברצף כדי למקסם את תפוקת הנציג ולמנוע זמני המתנה.",
      "flow": "רשימת אנשי קשר ← חיוג רציף",
      "tag": "פרודוקטיביות ממוקדת"
    },
    {
      "title": "חייגן תצוגה מקדימה (Preview)",
      "desc": "מאפשר לנציג לעיין בפרטי הלקוח ובהיסטוריה שלו לפני תחילת השיחה.",
      "flow": "עיון בפרטים ← תחילת שיחה",
      "tag": "שיחות בהתאמה אישית"
    }
  ],
  "analyticsBadge": "ניתוח שיחות ודוחות מתקדמים",
  "analyticsTitle": "הפכו את נתוני השיחות להצלחה עסקית ומכירתית",
  "analyticsSubtitle": "עקבו אחר כל היבט של פעילות השיחות שלכם בדיוק מקסימלי.",
  "analyticsFeatures": [
    "ביצועי נציגים",
    "תוצאות קמפיינים",
    "משך שיחות",
    "אחוז מענה (ASR)",
    "שיעור נטישת שיחות",
    "מעקב אחר המרות ומכירות",
    "סטטוסי סיום שיחה (Dispositions)",
    "איכות נתיבים",
    "ביצועי ספקי תקשורת",
    "ניתוח עלויות מעמיק",
    "דוחות לפי שעה, יום וחודש",
    "יומני פירוט שיחות מלאים (CDR)"
  ],
  "analyticsSubtext": "משיחות אישיות ועד לעלויות ספקי תקשורת בינלאומיים, קבלו תמונה ברורה ושלמה.",
  "analyticsCard": {
    "title": "ביצועי קמפיין",
    "exportBtn": "ייצוא",
    "tabHourly": "לפי שעה",
    "tabDaily": "יומי",
    "tabMonthly": "חודשי",
    "timeframe": "01–07 אוק 2026",
    "stat1Label": "סה\"כ שיחות",
    "stat1Val": "1,842",
    "stat2Label": "אחוז מענה",
    "stat2Val": "86.2%",
    "stat3Label": "המרות",
    "stat3Val": "18.4%",
    "legendCalls": "שיחות",
    "legendAnswered": "נענו",
    "dispositionTitle": "תוצאות שיחה",
    "note": "נתוני דוח להמחשה • ייצוא נתונים מפורטים על כל שיחה ושיחה."
  },
  "ctaBadge": "בואו נבנה את רשת התקשורת שלכם",
  "ctaTitle": "הצמיחו את העסק שלכם עם פתרונות תקשורת ארגוניים מתקדמים",
  "ctaSubtitle": "מניתוב קולי חכם וטרמינציה בינלאומית ועד ל-AI Voice ומספרים וירטואליים, iNet Global מספקת פתרונות תקשורת מתקדמים המסייעים לעסקים להתחבר ללקוחות בכל מקום בעולם בבהירות ובאמינות.",
  "getStarted": "התחל עכשיו",
  "contactUs": "צור קשר",
  "ctaTrust1": "הסכם רמת שירות (SLA) ארגוני",
  "ctaTrust2": "הפעלת WebRTC מיידית",
  "ctaTrust3": "תמיכה ייעודית 24/7"
};

const translations: Record<string, DailerSolutionTranslation> = {
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

export const getDailerSolutionTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): DailerSolutionTranslation => {
  return translations[language] || translations["en"];
};

export default getDailerSolutionTranslations;

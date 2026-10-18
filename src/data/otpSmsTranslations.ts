export interface OtpSmsTranslation {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  getStarted: string;
  bookDemo: string;
  heroFeatures: Array<{
    title: string;
  }>;
  managementBadge: string;
  managementTitle: string;
  platformControlTitle: string;
  platformControlDesc: string;
  platformControlBullets: string[];
  campaignCard: {
    title: string;
    draftBadge: string;
    step1: string;
    step2: string;
    step3: string;
    senderLabel: string;
    senderVal: string;
    audienceLabel: string;
    audienceVal: string;
    messageLabel: string;
    messageText: string;
    personalizedBadge: string;
    charCount: string;
    repliesTitle: string;
    repliesBadge: string;
    inboundText: string;
    inboundTime: string;
    replyText: string;
  };
  capabilitiesBadge: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  features: Array<{
    title: string;
    desc: string;
  }>;
  visibilityBadge: string;
  visibilityTitle: string;
  visibilitySubtitle: string;
  visibilityBullets: string[];
  enterpriseBadge: string;
  enterpriseTitle: string;
  enterpriseSubtitle: string;
  enterpriseCards: {
    card1: {
      title: string;
      header: string;
      user1Name: string;
      user1Role: string;
      user2Name: string;
      user2Role: string;
      user3Name: string;
      user3Role: string;
      protectionText: string;
      bullets: string[];
      note: string;
    };
    card2: {
      title: string;
      header: string;
      amount: string;
      sub: string;
      stat1Label: string;
      stat1Val: string;
      stat2Label: string;
      stat2Val: string;
      pillText: string;
      bullets: string[];
      note: string;
    };
    card3: {
      title: string;
      header: string;
      row1Country: string;
      row1Type: string;
      row1Rate: string;
      row2Country: string;
      row2Type: string;
      row2Rate: string;
      row3Country: string;
      row3Type: string;
      row3Rate: string;
      pill1: string;
      pill2: string;
      bullets: string[];
      note: string;
    };
  };
  workflowBadge: string;
  workflowTitle: string;
  workflowSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactUs: string;
  ctaTrust1?: string;
  ctaTrust2?: string;
  ctaTrust3?: string;
}

const en: OtpSmsTranslation = {
  "heroBadge": "SMS PORTAL SOLUTION",
  "heroTitle": "Powerful SMS Portal Built for High-Volume Messaging",
  "heroSubtitle": "Send, receive, manage, and monitor business SMS from one intelligent platform.",
  "heroDesc": "From single messages to enterprise-scale campaigns, our SMS Portal gives you the tools, automation, routing, and analytics you need to communicate reliably.",
  "getStarted": "Get Started",
  "bookDemo": "Book a Demo",
  "heroFeatures": [
    {
      "title": "Global SMS Coverage"
    },
    {
      "title": "Advanced Routing"
    },
    {
      "title": "Bulk SMS & Campaigns"
    },
    {
      "title": "Two-Way Messaging"
    },
    {
      "title": "API Integration"
    },
    {
      "title": "Real-Time Delivery Reports"
    }
  ],
  "managementBadge": "SMS MANAGEMENT PLATFORM",
  "managementTitle": "Everything You Need to Manage SMS",
  "platformControlTitle": "One Platform. Complete SMS Control.",
  "platformControlDesc": "Manage your entire messaging operation from a centralized dashboard designed for speed, visibility, and scalability.",
  "platformControlBullets": [
    "Compose, personalize, and schedule campaigns",
    "Keep contacts and conversations in one workspace",
    "Track delivery, routing, and usage as messages move"
  ],
  "campaignCard": {
    "title": "Create a campaign",
    "draftBadge": "Draft saved",
    "step1": "01 Compose",
    "step2": "02 Audience",
    "step3": "03 Schedule",
    "senderLabel": "Sender ID",
    "senderVal": "iNet",
    "audienceLabel": "Audience",
    "audienceVal": "Order updates • 24,850 contacts",
    "messageLabel": "Message",
    "messageText": "Hi {first_name}, your order {order_id} has shipped. Track it at {tracking_url}. Reply HELP for support.",
    "personalizedBadge": "Personalized fields enabled",
    "charCount": "118 / 160",
    "repliesTitle": "Customer replies",
    "repliesBadge": "2-way SMS",
    "inboundText": "Your order is on its way. Reply HELP for support.",
    "inboundTime": "10:42 • Delivered",
    "replyText": "Thanks! Can I update the delivery time?"
  },
  "capabilitiesBadge": "MESSAGING CAPABILITIES",
  "capabilitiesTitle": "Advanced SMS Features",
  "capabilitiesSubtitle": "Powerful tools to manage, automate, and optimize every part of your SMS operation.",
  "features": [
    {
      "title": "Bulk SMS Campaigns",
      "desc": "Send thousands or millions of messages with powerful campaign management, scheduling, contact segmentation, and delivery tracking."
    },
    {
      "title": "Two-Way SMS",
      "desc": "Receive replies and manage conversations from the same platform. Perfect for customer support, notifications, verification, and engagement."
    },
    {
      "title": "SMS API",
      "desc": "Connect your applications, CRM, website, or business software with our powerful REST API and automate your messaging workflows."
    },
    {
      "title": "Sender ID Management",
      "desc": "Create and manage multiple Sender IDs based on destination, campaign, brand, or customer requirements."
    },
    {
      "title": "Smart Routing",
      "desc": "Automatically select the best available route based on destination, carrier, cost, quality, and delivery performance."
    },
    {
      "title": "Delivery Reports",
      "desc": "Monitor message status in real time with detailed Delivered, Failed, Pending, Expired, and Rejected reports."
    }
  ],
  "visibilityBadge": "VISIBILITY & CONTROL",
  "visibilityTitle": "Know What Is Happening With Every Message",
  "visibilitySubtitle": "Get complete visibility into your SMS traffic with real-time analytics and reporting.",
  "visibilityBullets": [
    "Real-time SMS traffic monitoring",
    "Route performance analytics",
    "Campaign performance",
    "Real-time alerts",
    "Delivery and failure statistics",
    "Cost and usage reports",
    "API traffic monitoring",
    "Country and carrier-level reports",
    "Customer/account-wise reports",
    "Downloadable reports"
  ],
  "enterpriseBadge": "ENTERPRISE READY",
  "enterpriseTitle": "Built for Resellers, Enterprises & SMS Providers",
  "enterpriseSubtitle": "Manage the people, pricing, and infrastructure behind a scalable messaging business.",
  "enterpriseCards": {
    "card1": {
      "title": "Your workspace. Your brand.",
      "header": "Workspace access",
      "user1Name": "Aisha Morgan",
      "user1Role": "Admin",
      "user2Name": "James Lee",
      "user2Role": "Operator",
      "user3Name": "Sara Khan",
      "user3Role": "Finance",
      "protectionText": "Traffic protection active",
      "bullets": [
        "Multi-user & role-based access",
        "White-label portal",
        "Customer management",
        "Fraud & abuse monitoring"
      ],
      "note": "Illustrative configuration"
    },
    "card2": {
      "title": "Commercial control, simplified.",
      "header": "Account wallet",
      "amount": "$4,850.00",
      "sub": "Available credit • USD",
      "stat1Label": "October usage",
      "stat1Val": "$2,569.00",
      "stat2Label": "Last top-up",
      "stat2Val": "+$5,000.00",
      "pillText": "Auto billing enabled",
      "bullets": [
        "Wallet & credit management",
        "Rate management",
        "Automated billing",
        "Transaction history"
      ],
      "note": "Illustrative configuration"
    },
    "card3": {
      "title": "Flexible pricing. Connected routes.",
      "header": "Pricing & connectivity",
      "row1Country": "UK",
      "row1Type": "Direct carrier",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "Premium A2P",
      "row2Rate": "$0.012",
      "row3Country": "US",
      "row3Type": "Standard A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Country-wise pricing",
        "Route-wise pricing",
        "Multiple supplier integration",
        "SMPP/API connectivity"
      ],
      "note": "Illustrative configuration"
    }
  },
  "workflowBadge": "PLATFORM WORKFLOW",
  "workflowTitle": "From Message to Delivery",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Create Campaign",
      "desc": "Compose your message, choose your audience, and schedule the right moment."
    },
    {
      "step": "02",
      "title": "Smart Routing",
      "desc": "Match every message to the best route for its destination and delivery needs."
    },
    {
      "step": "03",
      "title": "Global Delivery",
      "desc": "Reach mobile networks worldwide through connected SMS infrastructure."
    },
    {
      "step": "04",
      "title": "Real-Time Reporting",
      "desc": "Follow delivery receipts, performance, and usage from your portal."
    }
  ],
  "ctaBadge": "LET'S BUILD YOUR MESSAGING NETWORK",
  "ctaTitle": "Grow Your Business with Business SMS Solutions",
  "ctaSubtitle": "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
  "contactUs": "Contact Us",
  "ctaTrust1": "Enterprise SLA Guarantee",
  "ctaTrust2": "Instant API & SMPP Setup",
  "ctaTrust3": "Global Carrier Connectivity"
};

const es: OtpSmsTranslation = {
  "heroBadge": "SOLUCIÓN DE PORTAL SMS",
  "heroTitle": "Potente Portal SMS Diseñado para Mensajería de Alto Volumen",
  "heroSubtitle": "Envíe, reciba, gestione y monitorice SMS empresariales desde una plataforma inteligente unificada.",
  "heroDesc": "Desde mensajes individuales hasta campañas de nivel empresarial, nuestro portal SMS le brinda las herramientas, automatización, enrutamiento y análisis necesarios para comunicarse con total confianza.",
  "getStarted": "Comenzar",
  "bookDemo": "Solicitar Demostración",
  "heroFeatures": [
    {
      "title": "Cobertura Global de SMS"
    },
    {
      "title": "Enrutamiento Avanzado"
    },
    {
      "title": "SMS Masivos y Campañas"
    },
    {
      "title": "Mensajería Bidireccional"
    },
    {
      "title": "Integración API"
    },
    {
      "title": "Informes de Entrega en Tiempo Real"
    }
  ],
  "managementBadge": "PLATAFORMA DE GESTIÓN SMS",
  "managementTitle": "Todo lo que Necesita para Gestionar sus SMS",
  "platformControlTitle": "Una Sola Plataforma. Control Total de SMS.",
  "platformControlDesc": "Administre toda su operación de mensajería desde un panel centralizado diseñado para velocidad, visibilidad y escalabilidad.",
  "platformControlBullets": [
    "Redacte, personalice y programe campañas",
    "Mantenga contactos y conversaciones en un solo espacio de trabajo",
    "Rastree entregas, enrutamiento y consumo en tiempo real"
  ],
  "campaignCard": {
    "title": "Crear una campaña",
    "draftBadge": "Borrador guardado",
    "step1": "01 Redactar",
    "step2": "02 Audiencia",
    "step3": "03 Programar",
    "senderLabel": "ID de Remitente",
    "senderVal": "iNet",
    "audienceLabel": "Audiencia",
    "audienceVal": "Actualizaciones • 24,850 contactos",
    "messageLabel": "Mensaje",
    "messageText": "Hola {first_name}, su pedido {order_id} ha sido enviado. Sígalo en {tracking_url}. Responda AYUDA para soporte.",
    "personalizedBadge": "Campos personalizados activados",
    "charCount": "118 / 160",
    "repliesTitle": "Respuestas de clientes",
    "repliesBadge": "SMS bidireccional",
    "inboundText": "Su pedido está en camino. Responda AYUDA para soporte.",
    "inboundTime": "10:42 • Entregado",
    "replyText": "¡Gracias! ¿Puedo actualizar la hora de entrega?"
  },
  "capabilitiesBadge": "CAPACIDADES DE MENSAJERÍA",
  "capabilitiesTitle": "Funciones Avanzadas de SMS",
  "capabilitiesSubtitle": "Potentes herramientas para gestionar, automatizar y optimizar cada aspecto de su operación de mensajería.",
  "features": [
    {
      "title": "Campañas de SMS Masivos",
      "desc": "Envíe miles o millones de mensajes con gestión avanzada de campañas, programación, segmentación de contactos y seguimiento de entrega."
    },
    {
      "title": "SMS Bidireccional",
      "desc": "Reciba respuestas y gestione conversaciones desde la misma plataforma. Ideal para soporte al cliente, notificaciones, verificación e interacción."
    },
    {
      "title": "API de SMS",
      "desc": "Conecte sus aplicaciones, CRM, sitio web o software empresarial con nuestra potente API REST y automatice sus flujos de mensajería."
    },
    {
      "title": "Gestión de ID de Remitente",
      "desc": "Cree y administre múltiples IDs de remitente según el destino, campaña, marca o requisitos del cliente."
    },
    {
      "title": "Enrutamiento Inteligente",
      "desc": "Seleccione automáticamente la mejor ruta disponible según destino, operador, coste, calidad y rendimiento de entrega."
    },
    {
      "title": "Informes de Entrega",
      "desc": "Supervise el estado de los mensajes en tiempo real con reportes detallados de Entregado, Fallido, Pendiente, Caducado y Rechazado."
    }
  ],
  "visibilityBadge": "VISIBILIDAD Y CONTROL",
  "visibilityTitle": "Sepa Qué Sucede con Cada Mensaje",
  "visibilitySubtitle": "Obtenga visibilidad completa de su tráfico de SMS con análisis y reportes en tiempo real.",
  "visibilityBullets": [
    "Monitoreo de tráfico SMS en tiempo real",
    "Análisis de rendimiento de rutas",
    "Rendimiento de campañas",
    "Alertas en tiempo real",
    "Estadísticas de entrega y fallos",
    "Informes de costes y consumo",
    "Monitoreo de tráfico API",
    "Informes por país y operador",
    "Informes por cliente y cuenta",
    "Informes descargables"
  ],
  "enterpriseBadge": "PREPARADO PARA EMPRESAS",
  "enterpriseTitle": "Diseñado para Distribuidores, Grandes Empresas y Proveedores de SMS",
  "enterpriseSubtitle": "Gestione el personal, precios e infraestructura detrás de un negocio de mensajería escalable.",
  "enterpriseCards": {
    "card1": {
      "title": "Su espacio de trabajo. Su marca.",
      "header": "Acceso al espacio de trabajo",
      "user1Name": "Aisha Morgan",
      "user1Role": "Administrador",
      "user2Name": "James Lee",
      "user2Role": "Operador",
      "user3Name": "Sara Khan",
      "user3Role": "Finanzas",
      "protectionText": "Protección de tráfico activa",
      "bullets": [
        "Acceso multiusuario basado en roles",
        "Portal de marca blanca",
        "Gestión de clientes",
        "Monitoreo de fraude y abusos"
      ],
      "note": "Configuración ilustrativa"
    },
    "card2": {
      "title": "Control comercial simplificado.",
      "header": "Monedero de cuenta",
      "amount": "$4,850.00",
      "sub": "Crédito disponible • USD",
      "stat1Label": "Consumo de octubre",
      "stat1Val": "$2,569.00",
      "stat2Label": "Última recarga",
      "stat2Val": "+$5,000.00",
      "pillText": "Facturación automática activa",
      "bullets": [
        "Gestión de monedero y crédito",
        "Gestión de tarifas",
        "Facturación automatizada",
        "Historial de transacciones"
      ],
      "note": "Configuración ilustrativa"
    },
    "card3": {
      "title": "Precios flexibles. Rutas conectadas.",
      "header": "Precios y conectividad",
      "row1Country": "Reino Unido",
      "row1Type": "Operador directo",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "A2P Premium",
      "row2Rate": "$0.012",
      "row3Country": "EE. UU.",
      "row3Type": "A2P Estándar",
      "row3Rate": "$0.022",
      "pill1": "SMPP en línea",
      "pill2": "API en línea",
      "bullets": [
        "Precios por país",
        "Precios por ruta",
        "Integración de múltiples proveedores",
        "Conectividad SMPP/API"
      ],
      "note": "Configuración ilustrativa"
    }
  },
  "workflowBadge": "FLUJO DE TRABAJO DE LA PLATAFORMA",
  "workflowTitle": "Del Mensaje a la Entrega",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Crear Campaña",
      "desc": "Redacte su mensaje, elija su audiencia y programe el momento ideal."
    },
    {
      "step": "02",
      "title": "Enrutamiento Inteligente",
      "desc": "Asigne cada mensaje a la ruta óptima según el destino y las necesidades de entrega."
    },
    {
      "step": "03",
      "title": "Entrega Global",
      "desc": "Llegue a redes móviles de todo el mundo mediante infraestructura SMS interconectada."
    },
    {
      "step": "04",
      "title": "Informes en Tiempo Real",
      "desc": "Siga recibos de entrega, rendimiento y consumo desde su portal."
    }
  ],
  "ctaBadge": "CONSTRUYAMOS SU RED DE MENSAJERÍA",
  "ctaTitle": "Haga Crecer su Negocio con Soluciones SMS Empresariales",
  "ctaSubtitle": "Desde enrutamiento de voz inteligente y terminación internacional hasta Voz IA y números virtuales, iNet Global ofrece soluciones de comunicación escalables para conectar con clientes de forma clara, fiable y eficiente en todo el mundo.",
  "contactUs": "Contáctenos",
  "ctaTrust1": "Garantía de SLA Empresarial",
  "ctaTrust2": "Configuración Inmediata de API y SMPP",
  "ctaTrust3": "Conectividad Global con Operadores"
};

const zh: OtpSmsTranslation = {
  "heroBadge": "SMS 门户解决方案",
  "heroTitle": "专为大容量短信构建的高性能 SMS 门户",
  "heroSubtitle": "通过一个智能平台发送、接收、管理和监控企业短信。",
  "heroDesc": "从单条验证码到大规模企业级营销，我们的短信门户为您提供可靠通信所需的一切工具、自动化、智能路由和实时分析。",
  "getStarted": "立即开始",
  "bookDemo": "预约演示",
  "heroFeatures": [
    {
      "title": "全球短信覆盖"
    },
    {
      "title": "高级智能路由"
    },
    {
      "title": "批量短信与营销活动"
    },
    {
      "title": "双向双工互动消息"
    },
    {
      "title": "开放 API 集成"
    },
    {
      "title": "实时送达回执报告"
    }
  ],
  "managementBadge": "短信管理平台",
  "managementTitle": "高效管理短信所需的一切功能",
  "platformControlTitle": "一个平台，实现全面的短信掌控。",
  "platformControlDesc": "通过专为速度、透明度和弹性扩展设计的集中式控制台，全面管理您的消息收发业务。",
  "platformControlBullets": [
    "撰写、个性化定制并按计划排期发送营销活动",
    "在一个统一工作区中集中管理联系人与互动对话",
    "全程实时追踪消息的路由状态、送达率与用量"
  ],
  "campaignCard": {
    "title": "创建营销活动",
    "draftBadge": "草稿已保存",
    "step1": "01 撰写内容",
    "step2": "02 目标受众",
    "step3": "03 发送排期",
    "senderLabel": "发送者 ID",
    "senderVal": "iNet",
    "audienceLabel": "受众群体",
    "audienceVal": "订单通知 • 24,850 联系人",
    "messageLabel": "短信正文",
    "messageText": "尊敬的 {first_name}，您的订单 {order_id} 已发货。追踪链接：{tracking_url}。回复 HELP 获取支持。",
    "personalizedBadge": "已启用个性化动态变量",
    "charCount": "118 / 160 字符",
    "repliesTitle": "客户互动回复",
    "repliesBadge": "双向 SMS",
    "inboundText": "您的订单正在派送中。回复 HELP 获取支持。",
    "inboundTime": "10:42 • 已送达",
    "replyText": "收到！请问我可以更改配送时间吗？"
  },
  "capabilitiesBadge": "消息能力",
  "capabilitiesTitle": "高级短信功能特性",
  "capabilitiesSubtitle": "强大的工具，用于全面管理、自动化和优化您的短信业务流程。",
  "features": [
    {
      "title": "批量短信营销活动",
      "desc": "具备强大的活动管理、定时排期、受众细分和送达追踪功能，轻松发送成千上万或数百万条消息。"
    },
    {
      "title": "双向短信 (Two-Way SMS)",
      "desc": "在同一平台内接收回复并管理对话，非常适用于客户支持、交易通知、安全验证和深度互动。"
    },
    {
      "title": "短信 API",
      "desc": "通过强大的 REST API 将短信功能无缝接入您的应用程序、CRM、电商网站或企业内部系统。"
    },
    {
      "title": "发送者 ID (Sender ID) 管理",
      "desc": "根据目的地国家、业务类型、品牌名称或客户需求创建并管理多个定制发送者 ID。"
    },
    {
      "title": "智能路由 (Smart Routing)",
      "desc": "根据目标国家、运营商、通道成本、链路质量和交付成功率自动选择最优通信路径。"
    },
    {
      "title": "送达回执与报告",
      "desc": "实时监控消息状态，提供详细的已送达、失败、挂起、过期和被拒等多维度数据分析。"
    }
  ],
  "visibilityBadge": "全面监控与管控",
  "visibilityTitle": "洞察每一条消息的实时流动",
  "visibilitySubtitle": "通过实时分析和综合报表，全面掌握您的短信流量与交付表现。",
  "visibilityBullets": [
    "实时短信流量监控",
    "通道路由性能分析",
    "营销活动效果追踪",
    "实时异常预警与告警",
    "送达与失败多维统计",
    "成本与用量明细报表",
    "API 调用流量监控",
    "按国家与运营商维度的报表",
    "按客户与子账户维度的分析",
    "支持一键导出与报表下载"
  ],
  "enterpriseBadge": "企业级就绪",
  "enterpriseTitle": "专为转售商、大型企业与短信服务商打造",
  "enterpriseSubtitle": "全面管理高并发短信业务背后的人员权限、费率体系与基础设施。",
  "enterpriseCards": {
    "card1": {
      "title": "专属工作区，定制您的品牌。",
      "header": "工作区访问权限",
      "user1Name": "Aisha Morgan",
      "user1Role": "管理员",
      "user2Name": "James Lee",
      "user2Role": "操作员",
      "user3Name": "Sara Khan",
      "user3Role": "财务主管",
      "protectionText": "流量安全防护已激活",
      "bullets": [
        "多用户与基于角色的精细化权限控制 (RBAC)",
        "支持白标定制 (White-label) 独立门户",
        "客户与子账户多层级管理",
        "反欺诈与滥用智能监控"
      ],
      "note": "配置示例图示"
    },
    "card2": {
      "title": "商务财务管控，化繁为简。",
      "header": "账户钱包与余额",
      "amount": "$4,850.00",
      "sub": "可用授信额度 • USD",
      "stat1Label": "十月累计用量",
      "stat1Val": "$2,569.00",
      "stat2Label": "最近充值",
      "stat2Val": "+$5,000.00",
      "pillText": "已开启自动账单",
      "bullets": [
        "钱包充值与信用额度管理",
        "灵活的费率卡自定义设置",
        "全自动账单生成与扣款",
        "透明完整的交易流水记录"
      ],
      "note": "配置示例图示"
    },
    "card3": {
      "title": "弹性计费，互联全球路由。",
      "header": "价格与连接通道",
      "row1Country": "英国 (UK)",
      "row1Type": "直连运营商",
      "row1Rate": "$0.018",
      "row2Country": "印度 (India)",
      "row2Type": "优质 A2P 通道",
      "row2Rate": "$0.012",
      "row3Country": "美国 (US)",
      "row3Type": "标准 A2P 通道",
      "row3Rate": "$0.022",
      "pill1": "SMPP 正常在线",
      "pill2": "API 正常在线",
      "bullets": [
        "支持按国家灵活定价",
        "支持按通道质量路由计费",
        "无缝整合多家供应商链路",
        "兼容高性能 SMPP 与 REST API"
      ],
      "note": "配置示例图示"
    }
  },
  "workflowBadge": "平台交付工作流",
  "workflowTitle": "从消息创建到终端送达",
  "workflowSteps": [
    {
      "step": "01",
      "title": "创建营销活动",
      "desc": "撰写消息内容，精准选取受众群体，并排期最佳发送时间点。"
    },
    {
      "step": "02",
      "title": "智能路由匹配",
      "desc": "根据目的地网络与交付质量要求，将每条消息精准匹配至最优通道。"
    },
    {
      "step": "03",
      "title": "全球移动送达",
      "desc": "通过直连的全球运营商短信基础设施，迅速触达世界各地的移动网络。"
    },
    {
      "step": "04",
      "title": "实时监控与报告",
      "desc": "在门户控制台中实时跟踪送达回执、通道表现及各项用量分析。"
    }
  ],
  "ctaBadge": "携手构建您的全球消息网络",
  "ctaTitle": "借助企业级短信解决方案加速业务增长",
  "ctaSubtitle": "从智能语音路由、国际语音落地到 AI 智能语音和全球虚拟号码，iNet Global 提供高弹性的通信解决方案，助力企业在全球市场上清晰、可靠、高效地连接每一位客户。",
  "contactUs": "联系我们",
  "ctaTrust1": "99.99% 企业级 SLA 保障",
  "ctaTrust2": "即时 API 与 SMPP 极速开通",
  "ctaTrust3": "全球一级运营商直连网络"
};

const hi: OtpSmsTranslation = {
  "heroBadge": "एसएमएस पोर्टल समाधान",
  "heroTitle": "उच्च-मात्रा मैसेजिंग के लिए निर्मित शक्तिशाली एसएमएस पोर्टल",
  "heroSubtitle": "एक ही बुद्धिमान प्लेटफ़ॉर्म से व्यावसायिक एसएमएस भेजें, प्राप्त करें, प्रबंधित करें और निगरानी करें।",
  "heroDesc": "एकल संदेशों से लेकर उद्यम-स्तरीय अभियानों तक, हमारा एसएमएस पोर्टल आपको विश्वसनीयता के साथ संवाद करने के लिए आवश्यक उपकरण, स्वचालन, रूटिंग और विश्लेषण प्रदान करता है।",
  "getStarted": "शुरू करें",
  "bookDemo": "डेमो बुक करें",
  "heroFeatures": [
    {
      "title": "वैश्विक एसएमएस कवरेज"
    },
    {
      "title": "उन्नत रूटिंग"
    },
    {
      "title": "बल्क एसएमएस और अभियान"
    },
    {
      "title": "द्वि-मार्गी मैसेजिंग"
    },
    {
      "title": "एपीआई एकीकरण"
    },
    {
      "title": "रीयल-टाइम डिलीवरी रिपोर्ट"
    }
  ],
  "managementBadge": "एसएमएस प्रबंधन प्लेटफ़ॉर्म",
  "managementTitle": "एसएमएस प्रबंधित करने के लिए आपकी ज़रूरत की हर चीज़",
  "platformControlTitle": "एक प्लेटफ़ॉर्म। पूर्ण एसएमएस नियंत्रण।",
  "platformControlDesc": "गति, दृश्यता और मापनीयता के लिए डिज़ाइन किए गए एक केंद्रीकृत डैशबोर्ड से अपने संपूर्ण मैसेजिंग संचालन का प्रबंधन करें।",
  "platformControlBullets": [
    "अभियान लिखें, वैयक्तिकृत करें और शेड्यूल करें",
    "संपर्कों और वार्तालापों को एक कार्यक्षेत्र में रखें",
    "संदेशों के प्रवाह के साथ डिलीवरी, रूटिंग और उपयोग को ट्रैक करें"
  ],
  "campaignCard": {
    "title": "एक अभियान बनाएं",
    "draftBadge": "ड्राफ्ट सहेजा गया",
    "step1": "01 लिखें",
    "step2": "02 दर्शक",
    "step3": "03 शेड्यूल करें",
    "senderLabel": "प्रेषक आईडी",
    "senderVal": "iNet",
    "audienceLabel": "दर्शक",
    "audienceVal": "ऑर्डर अपडेट • 24,850 संपर्क",
    "messageLabel": "संदेश",
    "messageText": "नमस्ते {first_name}, आपका ऑर्डर {order_id} भेज दिया गया है। इसे {tracking_url} पर ट्रैक करें। सहायता के लिए HELP का उत्तर दें।",
    "personalizedBadge": "वैयक्तिकृत फ़ील्ड सक्षम हैं",
    "charCount": "118 / 160",
    "repliesTitle": "ग्राहक उत्तर",
    "repliesBadge": "2-वे एसएमएस",
    "inboundText": "आपका ऑर्डर रास्ते में है। सहायता के लिए HELP का उत्तर दें।",
    "inboundTime": "10:42 • डिलीवर हुआ",
    "replyText": "धन्यवाद! क्या मैं डिलीवरी का समय बदल सकता हूँ?"
  },
  "capabilitiesBadge": "मैसेजिंग क्षमताएं",
  "capabilitiesTitle": "उन्नत एसएमएस सुविधाएं",
  "capabilitiesSubtitle": "अपने एसएमएस संचालन के हर हिस्से को प्रबंधित, स्वचालित और अनुकूलित करने के लिए शक्तिशाली उपकरण।",
  "features": [
    {
      "title": "बल्क एसएमएस अभियान",
      "desc": "शक्तिशाली अभियान प्रबंधन, शेड्यूलिंग, संपर्क विभाजन और डिलीवरी ट्रैकिंग के साथ हजारों या लाखों संदेश भेजें।"
    },
    {
      "title": "द्वि-मार्गी एसएमएस (Two-Way SMS)",
      "desc": "उसी प्लेटफ़ॉर्म से उत्तर प्राप्त करें और वार्तालाप प्रबंधित करें। ग्राहक सहायता, सूचनाओं और सत्यापन के लिए बिल्कुल उपयुक्त।"
    },
    {
      "title": "एसएमएस एपीआई",
      "desc": "हमारे शक्तिशाली REST API के साथ अपने एप्लिकेशन, सीआरएम या व्यावसायिक सॉफ़्टवेयर को कनेक्ट करें और वर्कफ़्लो को स्वचालित करें।"
    },
    {
      "title": "प्रेषक आईडी प्रबंधन",
      "desc": "गंतव्य, अभियान, ब्रांड या ग्राहक आवश्यकताओं के आधार पर कई प्रेषक आईडी बनाएं और प्रबंधित करें।"
    },
    {
      "title": "स्मार्ट रूटिंग",
      "desc": "गंतव्य, वाहक, लागत, गुणवत्ता और डिलीवरी प्रदर्शन के आधार पर स्वचालित रूप से सर्वोत्तम उपलब्ध मार्ग का चयन करें।"
    },
    {
      "title": "डिलीवरी रिपोर्ट",
      "desc": "विस्तृत डिलीवर, विफल, लंबित, समाप्त और अस्वीकृत रिपोर्ट के साथ वास्तविक समय में संदेश स्थिति की निगरानी करें।"
    }
  ],
  "visibilityBadge": "दृश्यता और नियंत्रण",
  "visibilityTitle": "जानिए हर संदेश के साथ क्या हो रहा है",
  "visibilitySubtitle": "रीयल-टाइम एनालिटिक्स और रिपोर्टिंग के साथ अपने एसएमएस ट्रैफ़िक में पूर्ण पारदर्शिता प्राप्त करें।",
  "visibilityBullets": [
    "रीयल-टाइम एसएमएस ट्रैफ़िक निगरानी",
    "रूट प्रदर्शन एनालिटिक्स",
    "अभियान प्रदर्शन",
    "रीयल-टाइम अलर्ट",
    "डिलीवरी और विफलता आंकड़े",
    "लागत और उपयोग रिपोर्ट",
    "एपीआई ट्रैफ़िक निगरानी",
    "देश और वाहक-स्तरीय रिपोर्ट",
    "ग्राहक/खाता-वार रिपोर्ट",
    "डाउनलोड करने योग्य रिपोर्ट"
  ],
  "enterpriseBadge": "उद्यम-स्तरीय तैयार",
  "enterpriseTitle": "रीसेलर्स, उद्यमों और एसएमएस प्रदाताओं के लिए निर्मित",
  "enterpriseSubtitle": "एक स्केलेबल मैसेजिंग व्यवसाय के पीछे के लोगों, मूल्य निर्धारण और बुनियादी ढांचे का प्रबंधन करें।",
  "enterpriseCards": {
    "card1": {
      "title": "आपका कार्यक्षेत्र। आपका ब्रांड।",
      "header": "कार्यक्षेत्र पहुंच",
      "user1Name": "Aisha Morgan",
      "user1Role": "व्यवस्थापक",
      "user2Name": "James Lee",
      "user2Role": "ऑपरेटर",
      "user3Name": "Sara Khan",
      "user3Role": "वित्त",
      "protectionText": "ट्रैफ़िक सुरक्षा सक्रिय",
      "bullets": [
        "बहु-उपयोगकर्ता और भूमिका-आधारित पहुंच",
        "व्हाइट-लेबल पोर्टल",
        "ग्राहक प्रबंधन",
        "धोखाधड़ी और दुरुपयोग निगरानी"
      ],
      "note": "उदाहरणात्मक विन्यास"
    },
    "card2": {
      "title": "वाणिज्यिक नियंत्रण, सरलीकृत।",
      "header": "खाता वॉलेट",
      "amount": "$4,850.00",
      "sub": "उपलब्ध क्रेडिट • USD",
      "stat1Label": "अक्टूबर उपयोग",
      "stat1Val": "$2,569.00",
      "stat2Label": "अंतिम टॉप-अप",
      "stat2Val": "+$5,000.00",
      "pillText": "स्वचालित बिलिंग सक्षम",
      "bullets": [
        "वॉलेट और क्रेडिट प्रबंधन",
        "दर प्रबंधन",
        "स्वचालित बिलिंग",
        "लेन-देन इतिहास"
      ],
      "note": "उदाहरणात्मक विन्यास"
    },
    "card3": {
      "title": "लचीला मूल्य निर्धारण। जुड़े हुए मार्ग।",
      "header": "मूल्य निर्धारण और कनेक्टिविटी",
      "row1Country": "यूके",
      "row1Type": "डायरेक्ट कैरियर",
      "row1Rate": "$0.018",
      "row2Country": "भारत",
      "row2Type": "प्रीमियम A2P",
      "row2Rate": "$0.012",
      "row3Country": "यूएस",
      "row3Type": "मानक A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP ऑनलाइन",
      "pill2": "API ऑनलाइन",
      "bullets": [
        "देश-वार मूल्य निर्धारण",
        "मार्ग-वार मूल्य निर्धारण",
        "एकाधिक आपूर्तिकर्ता एकीकरण",
        "SMPP/API कनेक्टिविटी"
      ],
      "note": "उदाहरणात्मक विन्यास"
    }
  },
  "workflowBadge": "प्लेटफ़ॉर्म वर्कफ़्लो",
  "workflowTitle": "संदेश से डिलीवरी तक",
  "workflowSteps": [
    {
      "step": "01",
      "title": "अभियान बनाएं",
      "desc": "अपना संदेश लिखें, अपने दर्शकों को चुनें, और सही समय निर्धारित करें।"
    },
    {
      "step": "02",
      "title": "स्मार्ट रूटिंग",
      "desc": "हर संदेश को उसके गंतव्य और डिलीवरी की ज़रूरतों के लिए सर्वोत्तम मार्ग से मिलाएं।"
    },
    {
      "step": "03",
      "title": "वैश्विक डिलीवरी",
      "desc": "कनेक्टेड एसएमएस बुनियादी ढांचे के माध्यम से दुनिया भर के मोबाइल नेटवर्क तक पहुंचें।"
    },
    {
      "step": "04",
      "title": "रीयल-टाइम रिपोर्टिंग",
      "desc": "अपने पोर्टल से डिलीवरी रसीदों, प्रदर्शन और उपयोग पर नज़र रखें।"
    }
  ],
  "ctaBadge": "आइए आपका मैसेजिंग नेटवर्क बनाएं",
  "ctaTitle": "व्यावसायिक एसएमएस समाधानों के साथ अपना व्यवसाय बढ़ाएं",
  "ctaSubtitle": "इंटेलिजेंट वॉयस रूटिंग और अंतर्राष्ट्रीय समाप्ति से लेकर एआई वॉयस और वर्चुअल नंबरों तक, iNet Global स्केलेबल संचार समाधान प्रदान करता है जो वैश्विक बाजारों में ग्राहकों से जुड़ने में मदद करते हैं।",
  "contactUs": "हमसे संपर्क करें",
  "ctaTrust1": "उद्यम SLA गारंटी",
  "ctaTrust2": "तत्काल API और SMPP सेटअप",
  "ctaTrust3": "वैश्विक कैरियर कनेक्टिविटी"
};

const ar: OtpSmsTranslation = {
  "heroBadge": "حلول بوابة الرسائل القصيرة SMS",
  "heroTitle": "بوابة SMS قوية مصممة للمراسلة ذات الحجم الكبير",
  "heroSubtitle": "إرسال واستقبال وإدارة ومراقبة رسائل SMS للأعمال من منصة ذكية واحدة وموحدة.",
  "heroDesc": "من الرسائل الفردية إلى الحملات واسعة النطاق للمؤسسات، تمنحك بوابة الرسائل القصيرة الخاصة بنا الأدوات والأتمتة والتوجيه والتحليلات التي تحتاجها للتواصل بموثوقية تامة.",
  "getStarted": "ابدأ الآن",
  "bookDemo": "طلب عرض توضيحي",
  "heroFeatures": [
    {
      "title": "تغطية عالمية لرسائل SMS"
    },
    {
      "title": "توجيه ذكي متقدم"
    },
    {
      "title": "رسائل جماعية وحملات"
    },
    {
      "title": "مراسلة تفاعلية ثنائية الاتجاه"
    },
    {
      "title": "تكامل سلس عبر واجهة API"
    },
    {
      "title": "تقارير التسليم في الوقت الفعلي"
    }
  ],
  "managementBadge": "منصة إدارة رسائل SMS",
  "managementTitle": "كل ما تحتاجه لإدارة رسائل SMS باحترافية",
  "platformControlTitle": "منصة واحدة. تحكم كامل في رسائل SMS.",
  "platformControlDesc": "قم بإدارة عملية المراسلة بأكملها من لوحة تحكم مركزية مصممة للسرعة والوضوح وقابلية التوسع.",
  "platformControlBullets": [
    "إنشاء وتخصيص وجدولة الحملات بكل سهولة",
    "الاحتفاظ بجهات الاتصال والمحادثات في مساحة عمل واحدة",
    "تتبع التسليم والتوجيه والاستهلاك لحظة بلحظة"
  ],
  "campaignCard": {
    "title": "إنشاء حملة مراسلة",
    "draftBadge": "تم حفظ المسودة",
    "step1": "01 كتابة الرسالة",
    "step2": "02 الجمهور المستهدف",
    "step3": "03 الجدولة",
    "senderLabel": "معرّف المرسل (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "الجمهور",
    "audienceVal": "تحديثات الطلبات • 24,850 جهة اتصال",
    "messageLabel": "نص الرسالة",
    "messageText": "مرحبًا {first_name}، تم شحن طلبك رقم {order_id}. تتبعه عبر {tracking_url}. أرسل HELP للدعم.",
    "personalizedBadge": "تم تفعيل الحقول المخصصة",
    "charCount": "118 / 160",
    "repliesTitle": "ردود العملاء",
    "repliesBadge": "SMS ثنائي الاتجاه",
    "inboundText": "طلبك في طريقه إليك. أرسل HELP للدعم.",
    "inboundTime": "10:42 • تم التسليم",
    "replyText": "شكرًا لك! هل يمكنني تعديل وقت التسليم؟"
  },
  "capabilitiesBadge": "إمكانيات المراسلة",
  "capabilitiesTitle": "ميزات SMS المتقدمة",
  "capabilitiesSubtitle": "أدوات فعالة لإدارة وأتمتة وتحسين كل مرحلة من مراحل تشغيل رسائل SMS.",
  "features": [
    {
      "title": "حملات SMS الجماعية",
      "desc": "أرسل آلافًا أو ملايين الرسائل مع إدارة فعالة للحملات والجدولة وتقسيم جهات الاتصال وتتبع التسليم."
    },
    {
      "title": "رسائل SMS ثنائية الاتجاه",
      "desc": "استقبل الردود وأدر المحادثات من المنصة نفسها. مثالي لخدمة العملاء والإشعارات والتحقق والتفاعل المستمر."
    },
    {
      "title": "واجهة برمجة تطبيقات SMS API",
      "desc": "اربط تطبيقاتك أو نظام إدارة علاقات العملاء (CRM) أو موقعك بواجهة REST API القوية وأتمت سير العمل."
    },
    {
      "title": "إدارة معرّف المرسل (Sender ID)",
      "desc": "أنشئ وأدر معرّفات مرسل متعددة بناءً على الوجهة أو الحملة أو العلامة التجارية أو متطلبات العملاء."
    },
    {
      "title": "التوجيه الذكي (Smart Routing)",
      "desc": "حدد تلقائيًا أفضل مسار متاح بناءً على الوجهة والمشغل والتكلفة والجودة وأداء التسليم الفعلي."
    },
    {
      "title": "تقارير التسليم اللحظية",
      "desc": "راقب حالة الرسائل في الوقت الفعلي مع تقارير مفصلة عن الرسائل المسلّمة والفاشلة والمعلقة والمنتهية والمرفوضة."
    }
  ],
  "visibilityBadge": "الرؤية والتحكم",
  "visibilityTitle": "اعرف ما يحدث مع كل رسالة بدقة",
  "visibilitySubtitle": "احصل على رؤية شاملة لحركة رسائل SMS مع تحليلات وتقارير لحظية متقدمة.",
  "visibilityBullets": [
    "مراقبة حركة رسائل SMS في الوقت الفعلي",
    "تحليلات أداء المسارات وقنوات الربط",
    "متابعة أداء الحملات التسويقية",
    "تنبيهات فورية في الوقت الفعلي",
    "إحصائيات دقيقة للتسليم ونسب الفشل",
    "تقارير مفصلة عن التكلفة والاستهلاك",
    "مراقبة حركة واجهات برمجة التطبيقات (API)",
    "تقارير على مستوى الدول ومزودي الخدمة",
    "تقارير مخصصة لكل عميل وحساب فرعي",
    "تقارير قابلة للتنزيل والتصدير الفوري"
  ],
  "enterpriseBadge": "جاهز للمؤسسات الكبرى",
  "enterpriseTitle": "مصمم للموزعين والشركات الكبرى ومزودي خدمات الرسائل",
  "enterpriseSubtitle": "إدارة شاملة للمستخدمين والأسعار والبنية التحتية لتشغيل تجارة مراسلة عالية التوسع.",
  "enterpriseCards": {
    "card1": {
      "title": "مساحة عملك. علامتك التجارية.",
      "header": "الوصول إلى مساحة العمل",
      "user1Name": "عائشة مورغان",
      "user1Role": "مدير النظام",
      "user2Name": "جيمس لي",
      "user2Role": "مشغّل",
      "user3Name": "سارة خان",
      "user3Role": "مسؤول مالي",
      "protectionText": "حماية حركة المرور نشطة",
      "bullets": [
        "وصول متعدد المستخدمين قائم على الأدوار (RBAC)",
        "بوابة ذات علامة تجارية بيضاء (White-label)",
        "إدارة متطورة لحسابات العملاء",
        "مراقبة ومنع الاحتيال وسوء الاستخدام"
      ],
      "note": "تكوين توضيحي تجريبي"
    },
    "card2": {
      "title": "تحكم تجاري بسيط وموثوق.",
      "header": "محفظة الحساب والرصيد",
      "amount": "$4,850.00",
      "sub": "الرصيد المتاح • USD",
      "stat1Label": "استهلاك شهر أكتوبر",
      "stat1Val": "$2,569.00",
      "stat2Label": "آخر شحن رصيد",
      "stat2Val": "+$5,000.00",
      "pillText": "الفواتير التلقائية مفعّلة",
      "bullets": [
        "إدارة المحفظة والحدود الائتمانية",
        "إدارة التسعير وجداول الأسعار",
        "فوترة وإصدار حسابات آلي",
        "سجل معاملات مفصل وكامل"
      ],
      "note": "تكوين توضيحي تجريبي"
    },
    "card3": {
      "title": "تسعير مرن. مسارات متصلة عالميًا.",
      "header": "الأسعار وقنوات الاتصال",
      "row1Country": "المملكة المتحدة",
      "row1Type": "مشغل اتصالات مباشر",
      "row1Rate": "$0.018",
      "row2Country": "الهند",
      "row2Type": "A2P فائق الجودة",
      "row2Rate": "$0.012",
      "row3Country": "الولايات المتحدة",
      "row3Type": "A2P قياسي",
      "row3Rate": "$0.022",
      "pill1": "SMPP متصل",
      "pill2": "API متصل",
      "bullets": [
        "تسعير مخصص حسب الدولة",
        "تسعير حسب جودة المسار",
        "تكامل مع مزودين متعددين",
        "اتصال عالي الكفاءة عبر SMPP وAPI"
      ],
      "note": "تكوين توضيحي تجريبي"
    }
  },
  "workflowBadge": "مسار عمل المنصة",
  "workflowTitle": "من كتابة الرسالة إلى التسليم الفعلي",
  "workflowSteps": [
    {
      "step": "01",
      "title": "إنشاء الحملة",
      "desc": "اكتب رسالتك، واختر جمهورك المستهدف، وحدد التوقيت الأمثل للإرسال."
    },
    {
      "step": "02",
      "title": "التوجيه الذكي",
      "desc": "مطابقة كل رسالة بأفضل مسار متاح وفقًا للوجهة واحتياجات وسرعة التسليم."
    },
    {
      "step": "03",
      "title": "التسليم العالمي",
      "desc": "الوصول المباشر إلى شبكات الهاتف المحمول في جميع أنحاء العالم عبر بنية تحتية متصلة."
    },
    {
      "step": "04",
      "title": "تقارير في الوقت الفعلي",
      "desc": "متابعة إشعارات الاستلام ومؤشرات الأداء ومعدلات الاستهلاك من بوابتك."
    }
  ],
  "ctaBadge": "دعنا نبني شبكة المراسلة الخاصة بك",
  "ctaTitle": "نمّ أعمالك مع حلول الرسائل القصيرة المؤسسية",
  "ctaSubtitle": "من توجيه المكالمات الذكي والإنهاء الدولي إلى الصوت الذكي بالذكاء الاصطناعي والأرقام الافتراضية، تقدم iNet Global حلول اتصالات قابلة للتوسع لمساعدة الشركات على التواصل مع عملائها بوضوح وثقة وكفاءة عبر الأسواق العالمية.",
  "contactUs": "اتصل بنا",
  "ctaTrust1": "ضمان اتفاقية مستوى الخدمة المؤسسية (SLA)",
  "ctaTrust2": "إعداد فوري لـ API و SMPP",
  "ctaTrust3": "اتصال مباشر مع مشغلي الاتصالات حول العالم"
};

const fr: OtpSmsTranslation = {
  "heroBadge": "SOLUTION PORTAIL SMS",
  "heroTitle": "Portail SMS Puissant Conçu pour la Messagerie à Fort Volume",
  "heroSubtitle": "Envoyez, recevez, gérez et surveillez vos SMS professionnels depuis une plateforme intelligente unique.",
  "heroDesc": "Du message individuel aux campagnes d'envergure internationale, notre portail SMS vous offre les outils, l'automatisation, le routage et les analyses nécessaires pour communiquer en toute fiabilité.",
  "getStarted": "Commencer",
  "bookDemo": "Réserver une Démo",
  "heroFeatures": [
    {
      "title": "Couverture SMS Mondiale"
    },
    {
      "title": "Routage Intelligent Avancé"
    },
    {
      "title": "SMS en Masse & Campagnes"
    },
    {
      "title": "Messagerie Bidirectionnelle"
    },
    {
      "title": "Intégration API Facile"
    },
    {
      "title": "Rapports de Livraison en Temps Réel"
    }
  ],
  "managementBadge": "PLATEFORME DE GESTION SMS",
  "managementTitle": "Tout ce Dont Vous Avez Besoin pour Gérer Vos SMS",
  "platformControlTitle": "Une Plateforme Unique. Contrôle Total des SMS.",
  "platformControlDesc": "Gérez l'ensemble de vos opérations de messagerie depuis un tableau de bord centralisé conçu pour la vitesse, la visibilité et l'évolutivité.",
  "platformControlBullets": [
    "Rédigez, personnalisez et planifiez vos campagnes en quelques clics",
    "Centralisez contacts et conversations au sein d'un espace de travail unifié",
    "Suivez la livraison, le routage et la consommation en temps réel"
  ],
  "campaignCard": {
    "title": "Créer une campagne",
    "draftBadge": "Brouillon enregistré",
    "step1": "01 Rédiger",
    "step2": "02 Audience",
    "step3": "03 Planifier",
    "senderLabel": "ID Expéditeur (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Audience",
    "audienceVal": "Mises à jour • 24,850 contacts",
    "messageLabel": "Message",
    "messageText": "Bonjour {first_name}, votre commande {order_id} est expédiée. Suivez-la sur {tracking_url}. Répondez AIDE pour le support.",
    "personalizedBadge": "Champs personnalisés activés",
    "charCount": "118 / 160",
    "repliesTitle": "Réponses des clients",
    "repliesBadge": "SMS bidirectionnel",
    "inboundText": "Votre commande est en cours de livraison. Répondez AIDE pour le support.",
    "inboundTime": "10:42 • Livré",
    "replyText": "Merci ! Puis-je modifier l'heure de livraison ?"
  },
  "capabilitiesBadge": "CAPACITÉS DE MESSAGERIE",
  "capabilitiesTitle": "Fonctionnalités SMS Avancées",
  "capabilitiesSubtitle": "Des outils performants pour gérer, automatiser et optimiser chaque aspect de vos envois de SMS.",
  "features": [
    {
      "title": "Campagnes SMS en Masse",
      "desc": "Diffusez des milliers ou des millions de messages grâce à une gestion robuste des campagnes, la planification, la segmentation et le suivi d'acheminement."
    },
    {
      "title": "SMS Bidirectionnel (Two-Way SMS)",
      "desc": "Recevez les réponses et gérez les conversations en temps réel. Idéal pour le support client, les alertes, l'authentification et l'engagement."
    },
    {
      "title": "API SMS Dédiée",
      "desc": "Connectez vos applications, CRM, sites e-commerce ou logiciels d'entreprise grâce à notre puissante API REST et automatisez vos flux de communication."
    },
    {
      "title": "Gestion des ID Expéditeurs",
      "desc": "Créez et configurez plusieurs identifiants d'expéditeur en fonction de la destination, de la campagne, de la marque ou des exigences clients."
    },
    {
      "title": "Routage Intelligent (Smart Routing)",
      "desc": "Sélectionnez automatiquement la meilleure route disponible selon la destination, l'opérateur, le coût, la qualité et la rapidité d'acheminement."
    },
    {
      "title": "Rapports d'Acheminement Détaillés",
      "desc": "Suivez le statut de chaque SMS en temps réel : Livré, Échoué, En attente, Expiré ou Rejeté."
    }
  ],
  "visibilityBadge": "VISIBILITÉ & CONTRÔLE",
  "visibilityTitle": "Visualisez Tout ce Qui se Passe avec Chaque Message",
  "visibilitySubtitle": "Bénéficiez d'une transparence totale sur votre trafic SMS grâce à des analyses et des rapports en temps réel.",
  "visibilityBullets": [
    "Surveillance du trafic SMS en direct",
    "Analyses des performances des routes",
    "Suivi de l'efficacité des campagnes",
    "Alertes automatisées en temps réel",
    "Statistiques détaillées de livraison et d'échec",
    "Rapports de coûts et de consommation",
    "Monitoring du trafic API",
    "Rapports par pays et par opérateur",
    "Rapports par compte client",
    "Exportation et téléchargement instantané"
  ],
  "enterpriseBadge": "CONÇU POUR LES ENTREPRISES",
  "enterpriseTitle": "Pensé pour les Revendeurs, Grandes Entreprises et Fournisseurs SMS",
  "enterpriseSubtitle": "Gérez les collaborateurs, la tarification et l'infrastructure technique d'une activité de messagerie à grande échelle.",
  "enterpriseCards": {
    "card1": {
      "title": "Votre espace de travail. Votre marque.",
      "header": "Accès à l'espace de travail",
      "user1Name": "Aisha Morgan",
      "user1Role": "Administrateur",
      "user2Name": "James Lee",
      "user2Role": "Opérateur",
      "user3Name": "Sara Khan",
      "user3Role": "Finance",
      "protectionText": "Protection du trafic activée",
      "bullets": [
        "Gestion multi-utilisateurs basée sur les rôles (RBAC)",
        "Portail en marque blanche (White-label)",
        "Gestion avancée des comptes clients",
        "Surveillance anti-fraude et abus"
      ],
      "note": "Configuration illustrative"
    },
    "card2": {
      "title": "Contrôle commercial simplifié.",
      "header": "Portefeuille de compte",
      "amount": "$4,850.00",
      "sub": "Crédit disponible • USD",
      "stat1Label": "Consommation d'octobre",
      "stat1Val": "$2,569.00",
      "stat2Label": "Dernier rechargement",
      "stat2Val": "+$5,000.00",
      "pillText": "Facturation automatique activée",
      "bullets": [
        "Gestion du solde et des crédits",
        "Gestion des grilles tarifaires",
        "Facturation automatisée",
        "Historique complet des transactions"
      ],
      "note": "Configuration illustrative"
    },
    "card3": {
      "title": "Tarification flexible. Routes interconnectées.",
      "header": "Tarifs & connectivité",
      "row1Country": "Royaume-Uni",
      "row1Type": "Opérateur direct",
      "row1Rate": "$0.018",
      "row2Country": "Inde",
      "row2Type": "A2P Premium",
      "row2Rate": "$0.012",
      "row3Country": "États-Unis",
      "row3Type": "A2P Standard",
      "row3Rate": "$0.022",
      "pill1": "SMPP en ligne",
      "pill2": "API en ligne",
      "bullets": [
        "Tarification personnalisée par pays",
        "Tarification selon la qualité de route",
        "Intégration multi-fournisseurs",
        "Connectivité haut débit SMPP/API"
      ],
      "note": "Configuration illustrative"
    }
  },
  "workflowBadge": "FLUX DE TRAVAIL DE LA PLATEFORME",
  "workflowTitle": "De la Création du Message à la Réception",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Créer la Campagne",
      "desc": "Rédigez votre message, ciblez votre audience et programmez l'heure d'envoi idéale."
    },
    {
      "step": "02",
      "title": "Routage Intelligent",
      "desc": "Associez chaque SMS à la meilleure route selon sa destination et ses exigences de rapidité."
    },
    {
      "step": "03",
      "title": "Livraison Mondiale",
      "desc": "Atteignez les réseaux mobiles du monde entier via une infrastructure de télécommunications directe."
    },
    {
      "step": "04",
      "title": "Rapports en Temps Réel",
      "desc": "Consultez les accusés de réception, les statistiques de performance et les données d'usage depuis votre portail."
    }
  ],
  "ctaBadge": "DÉVELOPPONS VOTRE RÉSEAU DE MESSAGERIE",
  "ctaTitle": "Accélérez Votre Croissance avec nos Solutions SMS d'Entreprise",
  "ctaSubtitle": "Du routage vocal intelligent à la terminaison internationale, en passant par la Voix IA et les numéros virtuels, iNet Global propose des solutions de télécommunications évolutives permettant aux entreprises de communiquer clairement et efficacement partout dans le monde.",
  "contactUs": "Contactez-nous",
  "ctaTrust1": "Garantie SLA Entreprise 99.99%",
  "ctaTrust2": "Configuration Immédiate API & SMPP",
  "ctaTrust3": "Connectivité Directe avec les Opérateurs Mondiaux"
};

const de: OtpSmsTranslation = {
  "heroBadge": "SMS-PORTAL-LÖSUNG",
  "heroTitle": "Leistungsstarkes SMS-Portal für Hochvolumiges Messaging",
  "heroSubtitle": "Senden, empfangen, verwalten und überwachen Sie geschäftliche SMS über eine einzige intelligente Plattform.",
  "heroDesc": "Von individuellen Verifizierungscodes bis hin zu unternehmensweiten Kampagnen – unser SMS-Portal bietet Ihnen die Tools, Automatisierung, Routen und Analysen für absolut zuverlässige Kommunikation.",
  "getStarted": "Jetzt Starten",
  "bookDemo": "Demo Vereinbaren",
  "heroFeatures": [
    {
      "title": "Globale SMS-Abdeckung"
    },
    {
      "title": "Intelligentes Routing"
    },
    {
      "title": "Massen-SMS & Kampagnen"
    },
    {
      "title": "Zwei-Wege-Messaging"
    },
    {
      "title": "Nahtlose API-Integration"
    },
    {
      "title": "Echtzeit-Zustellberichte"
    }
  ],
  "managementBadge": "SMS-MANAGEMENT-PLATTFORM",
  "managementTitle": "Alles, was Sie zur Verwaltung Ihrer SMS Benötigen",
  "platformControlTitle": "Eine Plattform. Vollständige SMS-Kontrolle.",
  "platformControlDesc": "Steuern Sie Ihren gesamten Messaging-Betrieb über ein zentrales Dashboard, das auf Schnelligkeit, Transparenz und Skalierbarkeit ausgelegt ist.",
  "platformControlBullets": [
    "Kampagnen mühelos verfassen, personalisieren und terminieren",
    "Kontakte und Dialoge in einem gemeinsamen Arbeitsbereich bündeln",
    "Zustellung, Routenführung und Verbrauch live nachverfolgen"
  ],
  "campaignCard": {
    "title": "Kampagne erstellen",
    "draftBadge": "Entwurf gespeichert",
    "step1": "01 Verfassen",
    "step2": "02 Zielgruppe",
    "step3": "03 Terminieren",
    "senderLabel": "Absender-ID (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Zielgruppe",
    "audienceVal": "Bestellupdates • 24.850 Kontakte",
    "messageLabel": "Nachricht",
    "messageText": "Hallo {first_name}, Ihre Bestellung {order_id} wurde versandt. Verfolgung: {tracking_url}. Antworten Sie mit HILFE für Support.",
    "personalizedBadge": "Personalisierte Variablen aktiviert",
    "charCount": "118 / 160",
    "repliesTitle": "Kundenantworten",
    "repliesBadge": "2-Wege-SMS",
    "inboundText": "Ihre Lieferung ist unterwegs. Antworten Sie mit HILFE für Support.",
    "inboundTime": "10:42 • Zugestellt",
    "replyText": "Danke! Kann ich das Lieferzeitfenster noch anpassen?"
  },
  "capabilitiesBadge": "MESSAGING-KAPAZITÄTEN",
  "capabilitiesTitle": "Erweiterte SMS-Funktionen",
  "capabilitiesSubtitle": "Leistungsfähige Werkzeuge zur Verwaltung, Automatisierung und Optimierung Ihres gesamten SMS-Workflows.",
  "features": [
    {
      "title": "Massen-SMS-Kampagnen",
      "desc": "Versenden Sie Tausende oder Millionen Nachrichten mit präzisem Kampagnenmanagement, Zeitplanung, Zielgruppensegmentierung und lückenloser Zustellverfolgung."
    },
    {
      "title": "Zwei-Wege-SMS (Two-Way SMS)",
      "desc": "Empfangen Sie Antworten und führen Sie Kundendialoge direkt auf der Plattform. Perfekt für Support, Transaktionshinweise, Verifizierungen und Engagement."
    },
    {
      "title": "SMS-API-Schnittstelle",
      "desc": "Verbinden Sie Ihre Apps, Ihr CRM oder Ihr E-Commerce-System über unsere REST-API und automatisieren Sie Benachrichtigungsprozesse."
    },
    {
      "title": "Absender-ID-Verwaltung",
      "desc": "Erstellen und verwalten Sie flexible Sender-IDs je nach Zielland, Kampagnenzweck, Markenidentität oder regulatorischen Anforderungen."
    },
    {
      "title": "Intelligentes Routing",
      "desc": "Automatische Auswahl der optimalen Route basierend auf Destination, Netzbetreiber, Kosten, Audio-/Textqualität und Zustellrate."
    },
    {
      "title": "Echtzeit-Zustellberichte (DLR)",
      "desc": "Überwachen Sie den Übertragungsstatus in Echtzeit: Zugestellt, Fehlgeschlagen, Ausstehend, Abgelaufen und Zurückgewiesen."
    }
  ],
  "visibilityBadge": "TRANSPARENZ & KONTROLLE",
  "visibilityTitle": "Wissen, was mit Jeder Einzelnen Nachricht Passiert",
  "visibilitySubtitle": "Volle Kontrolle über Ihren gesamten SMS-Traffic mit Echtzeit-Analysen und detaillierten Auswertungen.",
  "visibilityBullets": [
    "Echtzeit-Überwachung des SMS-Traffics",
    "Detaillierte Analyse der Routen-Performance",
    "Erfolgsmessung aller aktiven Kampagnen",
    "Automatische Benachrichtigungen bei Auffälligkeiten",
    "Statistiken zu Zustellraten und Fehlergründen",
    "Transparente Kosten- und Nutzungsberichte",
    "Monitoring des API-Datenverkehrs",
    "Länder- und Netzbetreiber-Auswertungen",
    "Berichte auf Kunden- und Unterkonto-Ebene",
    "Daten-Export als CSV/Excel auf Knopfdruck"
  ],
  "enterpriseBadge": "ENTERPRISE-FÄHIG",
  "enterpriseTitle": "Entwickelt für Reseller, Großunternehmen & SMS-Provider",
  "enterpriseSubtitle": "Steuern Sie Mitarbeiterrechte, Tarifstrukturen und Netzanbindungen für ein hochgradig skalierbares Messaging-Geschäft.",
  "enterpriseCards": {
    "card1": {
      "title": "Ihr Arbeitsbereich. Ihre Marke.",
      "header": "Zugriffsverwaltung",
      "user1Name": "Aisha Morgan",
      "user1Role": "Administrator",
      "user2Name": "James Lee",
      "user2Role": "Operator",
      "user3Name": "Sara Khan",
      "user3Role": "Finanzen",
      "protectionText": "Traffic-Schutz aktiv",
      "bullets": [
        "Rollenbasierte Mehrbenutzerverwaltung (RBAC)",
        "White-Label-Portal mit eigenem Branding",
        "Strukturierte Mandanten- und Kundenverwaltung",
        "Echtzeit-Überwachung gegen Betrug und Missbrauch"
      ],
      "note": "Beispielhafte Konfigurationsansicht"
    },
    "card2": {
      "title": "Finanzielle Kontrolle, vereinfacht.",
      "header": "Konto-Wallet & Guthaben",
      "amount": "$4,850.00",
      "sub": "Verfügbares Guthaben • USD",
      "stat1Label": "Verbrauch im Oktober",
      "stat1Val": "$2,569.00",
      "stat2Label": "Letzte Aufladung",
      "stat2Val": "+$5,000.00",
      "pillText": "Automatische Abrechnung aktiv",
      "bullets": [
        "Guthaben- und Kreditlimitverwaltung",
        "Flexible Tarifkarten und Preisstaffeln",
        "Vollautomatische Rechnungsstellung",
        "Lückenlose Transaktionshistorie"
      ],
      "note": "Beispielhafte Konfigurationsansicht"
    },
    "card3": {
      "title": "Flexible Tarife. Vernetzte Routen.",
      "header": "Preise & Netzanbindung",
      "row1Country": "Großbritannien",
      "row1Type": "Direkter Carrier",
      "row1Rate": "$0.018",
      "row2Country": "Indien",
      "row2Type": "Premium A2P",
      "row2Rate": "$0.012",
      "row3Country": "USA",
      "row3Type": "Standard A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Länderspezifische Preisgestaltung",
        "Routenspezifische Qualitätsstaffeln",
        "Multi-Lieferanten-Integration",
        "Leistungsstarke SMPP- und API-Verbindung"
      ],
      "note": "Beispielhafte Konfigurationsansicht"
    }
  },
  "workflowBadge": "PLATTFORM-WORKFLOW",
  "workflowTitle": "Von der Nachricheterstellung bis zur Zustellung",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Kampagne Erstellen",
      "desc": "Nachricht verfassen, Empfängergruppe auswählen und den idealen Versandzeitpunkt festlegen."
    },
    {
      "step": "02",
      "title": "Smart Routing",
      "desc": "Automatische Zuordnung jeder Nachricht zur schnellsten und verlässlichsten Route."
    },
    {
      "step": "03",
      "title": "Globale Zustellung",
      "desc": "Direkte Auslieferung an weltweite Mobilfunknetze über redundante SMS-Infrastruktur."
    },
    {
      "step": "04",
      "title": "Echtzeit-Reporting",
      "desc": "Zustellberichte, Übertragungsgeschwindigkeiten und Kosten live im Portal verfolgen."
    }
  ],
  "ctaBadge": "BAUEN WIR IHR MESSAGING-NETZWERK AUF",
  "ctaTitle": "Bringen Sie Ihr Unternehmen mit Enterprise-SMS-Lösungen voran",
  "ctaSubtitle": "Von intelligenter Sprachterminierung über KI-Sprachlösungen bis hin zu virtuellen Rufnummern – iNet Global liefert skalierbare Telekommunikation, mit der Sie weltweit klar und zuverlässig mit Ihren Kunden in Verbindung bleiben.",
  "contactUs": "Kontaktieren Sie Uns",
  "ctaTrust1": "Garantierte Enterprise-SLA von 99,99%",
  "ctaTrust2": "Sofortige Einrichtung von API & SMPP",
  "ctaTrust3": "Globale Direktanbindung an Tier-1-Netzbetreiber"
};

const ja: OtpSmsTranslation = {
  "heroBadge": "SMS ポータルソリューション",
  "heroTitle": "大量配信に特化した高性能エンタープライズ SMS ポータル",
  "heroSubtitle": "単一のインテリジェントなプラットフォームからビジネス SMS の送信、受信、管理、監視を実行。",
  "heroDesc": "個別の認証コード配信から企業規模の大規模キャンペーンまで、確実なコミュニケーションを実現するために必要なすべてのツール、自動化、最適ルーティング、詳細分析を提供します。",
  "getStarted": "今すぐ始める",
  "bookDemo": "デモを予約する",
  "heroFeatures": [
    {
      "title": "グローバル SMS 配信網"
    },
    {
      "title": "高度な自動ルーティング"
    },
    {
      "title": "一斉配信＆キャンペーン管理"
    },
    {
      "title": "双方向インタラクティブ通信"
    },
    {
      "title": "シームレスな API 連携"
    },
    {
      "title": "リアルタイム到達・配信レポート"
    }
  ],
  "managementBadge": "SMS 総合管理プラットフォーム",
  "managementTitle": "SMS 運用管理に必要なすべてをこの一つに",
  "platformControlTitle": "単一プラットフォームで SMS を完全掌握。",
  "platformControlDesc": "高速処理、優れた視認性、自在なスケーラビリティを備えた集中型ダッシュボードで、メッセージング運用全体を一元管理します。",
  "platformControlBullets": [
    "キャンペーンの作成、パーソナライズ、スケジュール予約配信",
    "連絡先リストと会話スレッドをひとつのワークスペースに集約",
    "配信状況、ルーティング経路、利用実績をリアルタイム追跡"
  ],
  "campaignCard": {
    "title": "キャンペーンの作成",
    "draftBadge": "下書きを保存しました",
    "step1": "01 本文作成",
    "step2": "02 配信対象",
    "step3": "03 配信予約",
    "senderLabel": "送信元 ID (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "ターゲット層",
    "audienceVal": "注文通知 • 24,850 件の連絡先",
    "messageLabel": "メッセージ本文",
    "messageText": "{first_name} 様、ご注文商品 {order_id} を発送いたしました。配送状況: {tracking_url}。サポートは HELP と返信してください。",
    "personalizedBadge": "動的変数フィールド有効",
    "charCount": "118 / 160 文字",
    "repliesTitle": "顧客からの返信",
    "repliesBadge": "双方向 SMS",
    "inboundText": "ご注文の品を配送中です。サポートは HELP と返信してください。",
    "inboundTime": "10:42 • 配信完了",
    "replyText": "ご連絡ありがとうございます！配達時間の変更は可能でしょうか？"
  },
  "capabilitiesBadge": "メッセージング機能",
  "capabilitiesTitle": "高度な SMS 機能群",
  "capabilitiesSubtitle": "SMS 運用のあらゆるプロセスを管理、自動化、最適化するための強力なツールセット。",
  "features": [
    {
      "title": "一斉 SMS 配信キャンペーン",
      "desc": "高度なスケジュール設定、詳細なセグメント分類、正確な到達追跡機能を備え、数千〜数百万通のメッセージを安定配信。"
    },
    {
      "title": "双方向 SMS (Two-Way SMS)",
      "desc": "同一ダッシュボード内で返信を受信し会話を継続。カスタマーサポート、重要通知、本人確認、エンゲージメント向上に最適です。"
    },
    {
      "title": "SMS 連携 API",
      "desc": "高性能な REST API により、貴社の基幹システム、CRM、ECサイト、モバイルアプリと瞬時に連携し、業務フローを自動化。"
    },
    {
      "title": "送信者 ID (Sender ID) 管理",
      "desc": "配信国、キャンペーン用途、企業ブランド、規制要件に合わせて複数の送信元アルファベット ID を柔軟に管理。"
    },
    {
      "title": "スマートルーティング (Smart Routing)",
      "desc": "送信先キャリア、コスト、回線品質、過去の到達率データに基づき、最適な通信ルートをミリ秒単位で自動選択。"
    },
    {
      "title": "リアルタイム到達レポート",
      "desc": "配信成功、失敗、処理中、期限切れ、拒否など、ステータスを即座に可視化し、詳細な配信ログを提供。"
    }
  ],
  "visibilityBadge": "可視化と制御",
  "visibilityTitle": "すべてのメッセージの送達状況を瞬時に把握",
  "visibilitySubtitle": "リアルタイムの分析と詳細レポートにより、SMS トラフィック全体に対する完全な透明性を確保。",
  "visibilityBullets": [
    "リアルタイム SMS トラフィック監視",
    "通信ルート別パフォーマンス分析",
    "配信キャンペーン別成果追跡",
    "異常検知とリアルタイム自動アラート",
    "到達率およびエラー要因の詳細統計",
    "通信コストおよび利用量レポート",
    "API トラフィック監視とリクエスト推移",
    "国別・携帯キャリア別詳細集計",
    "クライアントアカウント別レポート",
    "ワンクリックでダウンロード可能なデータ出力"
  ],
  "enterpriseBadge": "エンタープライズ仕様",
  "enterpriseTitle": "再販事業者、大企業、SMS プロバイダー向けに構築",
  "enterpriseSubtitle": "大規模なメッセージングビジネスを支える権限管理、料金設定、通信インフラを自在にコントロール。",
  "enterpriseCards": {
    "card1": {
      "title": "自社専用の環境、自社ブランドで。",
      "header": "ワークスペース権限設定",
      "user1Name": "アイシャ・モーガン",
      "user1Role": "管理者",
      "user2Name": "ジェームズ・リー",
      "user2Role": "オペレーター",
      "user3Name": "サラ・カーン",
      "user3Role": "財務担当",
      "protectionText": "トラフィック保護機能 稼働中",
      "bullets": [
        "ロールベースのきめ細やかな複数ユーザー権限 (RBAC)",
        "自社名義で運用可能なホワイトレーベルポータル",
        "階層化されたマルチクライアント管理",
        "不正利用およびスパムの自動検知システム"
      ],
      "note": "設定画面のイメージ例"
    },
    "card2": {
      "title": "ビジネス管理を、よりシンプルに。",
      "header": "アカウントウォレットと残高",
      "amount": "$4,850.00",
      "sub": "利用可能クレジット • USD",
      "stat1Label": "10月利用実績",
      "stat1Val": "$2,569.00",
      "stat2Label": "直近のチャージ額",
      "stat2Val": "+$5,000.00",
      "pillText": "自動請求が有効です",
      "bullets": [
        "プリペイド残高および与信枠のリアルタイム管理",
        "柔軟な料金テーブル（レートカード）設定",
        "自動請求書発行と自動引き落とし",
        "透明性の高い完全な取引履歴ログ"
      ],
      "note": "設定画面のイメージ例"
    },
    "card3": {
      "title": "柔軟な価格設定。世界をつなぐ通信ルート。",
      "header": "料金設定とキャリア接続",
      "row1Country": "イギリス (UK)",
      "row1Type": "キャリア直収回線",
      "row1Rate": "$0.018",
      "row2Country": "インド (India)",
      "row2Type": "プレミアム A2P",
      "row2Rate": "$0.012",
      "row3Country": "アメリカ (US)",
      "row3Type": "標準 A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP オンライン",
      "pill2": "API オンライン",
      "bullets": [
        "国別のカスタマイズ価格設定",
        "通信品質・ルート別の段階価格",
        "マルチサプライヤー回線のシームレス統合",
        "高スループット SMPP および REST API"
      ],
      "note": "設定画面のイメージ例"
    }
  },
  "workflowBadge": "配信ワークフロー",
  "workflowTitle": "メッセージ作成から端末到達までの流れ",
  "workflowSteps": [
    {
      "step": "01",
      "title": "キャンペーン作成",
      "desc": "メッセージ本文を作成し、宛先ターゲットを選定し、最適な配信スケジュールを設定。"
    },
    {
      "step": "02",
      "title": "スマートルーティング",
      "desc": "宛先の通信会社や要件に応じて、最高品質の通信経路にメッセージを瞬時に割り当て。"
    },
    {
      "step": "03",
      "title": "世界各国への配信",
      "desc": "直接相互接続されたグローバルな通信インフラを経由して、世界中の携帯端末へ確実に配信。"
    },
    {
      "step": "04",
      "title": "リアルタイム集計",
      "desc": "ポータル上で到達完了通知、配信速度、利用コストを即座に確認・分析。"
    }
  ],
  "ctaBadge": "貴社専用のメッセージングネットワークを構築",
  "ctaTitle": "エンタープライズ SMS ソリューションでビジネスを加速",
  "ctaSubtitle": "インテリジェントな音声ルーティングや国際電話ターミネーションから、AI 音声ソリューション、グローバル DID 仮想番号まで、iNet Global は世界市場で顧客と確実につながるための通信インフラを提供します。",
  "contactUs": "お問い合わせ",
  "ctaTrust1": "99.99% エンタープライズ SLA 保証",
  "ctaTrust2": "API および SMPP の即時開通セットアップ",
  "ctaTrust3": "グローバル Tier-1 通信事業者との直収接続"
};

const pt: OtpSmsTranslation = {
  "heroBadge": "SOLUÇÃO DE PORTAL SMS",
  "heroTitle": "Portal SMS Potente Projetado para Mensagens em Alto Volume",
  "heroSubtitle": "Envie, receba, gerencie e monitore SMS corporativos a partir de uma única plataforma inteligente.",
  "heroDesc": "De mensagens individuais a campanhas de escala empresarial, nosso Portal SMS oferece as ferramentas, automação, roteamento e métricas que você precisa para se comunicar com total confiabilidade.",
  "getStarted": "Começar Agora",
  "bookDemo": "Agendar Demonstração",
  "heroFeatures": [
    {
      "title": "Cobertura Global de SMS"
    },
    {
      "title": "Roteamento Inteligente Avançado"
    },
    {
      "title": "SMS em Massa & Campanhas"
    },
    {
      "title": "Mensagens Bidirecionais"
    },
    {
      "title": "Integração via API REST"
    },
    {
      "title": "Relatórios de Entrega em Tempo Real"
    }
  ],
  "managementBadge": "PLATAFORMA DE GESTÃO SMS",
  "managementTitle": "Tudo o que Você Precisa para Gerenciar SMS com Eficiência",
  "platformControlTitle": "Uma Só Plataforma. Controle Total de SMS.",
  "platformControlDesc": "Gerencie toda a sua operação de mensagens a partir de um painel centralizado projetado para velocidade, visibilidade e escalabilidade.",
  "platformControlBullets": [
    "Crie, personalize e agende campanhas com facilidade",
    "Reúna contatos e conversas em um único espaço de trabalho",
    "Acompanhe entrega, roteamento e consumo em tempo real"
  ],
  "campaignCard": {
    "title": "Criar uma campanha",
    "draftBadge": "Rascunho salvo",
    "step1": "01 Redigir",
    "step2": "02 Público",
    "step3": "03 Agendar",
    "senderLabel": "ID do Remetente (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Público-alvo",
    "audienceVal": "Atualizações • 24.850 contatos",
    "messageLabel": "Mensagem",
    "messageText": "Olá {first_name}, seu pedido {order_id} foi enviado. Rastreie em {tracking_url}. Responda AJUDA para suporte.",
    "personalizedBadge": "Campos personalizados ativados",
    "charCount": "118 / 160",
    "repliesTitle": "Respostas dos clientes",
    "repliesBadge": "SMS bidirecional",
    "inboundText": "Seu pedido está a caminho. Responda AJUDA para suporte.",
    "inboundTime": "10:42 • Entregue",
    "replyText": "Obrigado! Posso alterar o horário de entrega?"
  },
  "capabilitiesBadge": "CAPACIDADES DE MENSAGENS",
  "capabilitiesTitle": "Recursos Avançados de SMS",
  "capabilitiesSubtitle": "Ferramentas poderosas para gerenciar, automatizar e otimizar cada etapa de sua operação de mensagens.",
  "features": [
    {
      "title": "Campanhas de SMS em Massa",
      "desc": "Envie milhares ou milhões de mensagens com gerenciamento intuitivo, agendamento programado, segmentação e acompanhamento de entrega."
    },
    {
      "title": "SMS Bidirecional (Two-Way SMS)",
      "desc": "Receba respostas e gerencie conversas na mesma plataforma. Perfeito para suporte ao cliente, notificações, autenticação e engajamento."
    },
    {
      "title": "API de SMS",
      "desc": "Conecte seus aplicativos, CRM, e-commerce ou software empresarial por meio de nossa poderosa API REST e automatize seus fluxos."
    },
    {
      "title": "Gestão de Sender ID",
      "desc": "Crie e gerencie múltiplos identificadores de remetente com base em destino, campanha, marca ou requisitos específicos."
    },
    {
      "title": "Roteamento Inteligente",
      "desc": "Selecione automaticamente a melhor rota disponível de acordo com o destino, operadora, custo, qualidade e taxa de entrega."
    },
    {
      "title": "Relatórios de Entrega (DLR)",
      "desc": "Monitore o status das mensagens em tempo real com relatórios detalhados de Entregue, Falhou, Pendente, Expirado e Rejeitado."
    }
  ],
  "visibilityBadge": "VISIBILIDADE E CONTROLE",
  "visibilityTitle": "Saiba o que Acontece com Cada Mensagem em Detalhes",
  "visibilitySubtitle": "Tenha visibilidade total sobre seu tráfego de SMS com análises e métricas em tempo real.",
  "visibilityBullets": [
    "Monitoramento de tráfego de SMS em tempo real",
    "Análise de desempenho por rota de tráfego",
    "Métricas de eficácia de campanhas",
    "Alertas proativos em tempo real",
    "Estatísticas de entrega e taxas de falha",
    "Relatórios detalhados de custos e consumo",
    "Monitoramento de requisições via API",
    "Relatórios por país e por operadora móvel",
    "Relatórios por conta de cliente",
    "Relatórios disponíveis para download e exportação"
  ],
  "enterpriseBadge": "PRONTO PARA EMPRESAS",
  "enterpriseTitle": "Desenvolvido para Revendedores, Grandes Empresas e Provedores de SMS",
  "enterpriseSubtitle": "Gerencie permissões de equipe, precificação e infraestrutura técnica de uma operação de mensageria escalável.",
  "enterpriseCards": {
    "card1": {
      "title": "Seu espaço de trabalho. Sua marca.",
      "header": "Controle de acesso",
      "user1Name": "Aisha Morgan",
      "user1Role": "Administrador",
      "user2Name": "James Lee",
      "user2Role": "Operador",
      "user3Name": "Sara Khan",
      "user3Role": "Financeiro",
      "protectionText": "Proteção de tráfego ativa",
      "bullets": [
        "Acesso multiusuário baseado em funções (RBAC)",
        "Portal totalmente personalizável (White-label)",
        "Gerenciamento estruturado de contas de clientes",
        "Monitoramento ativo antifraude e antiabuso"
      ],
      "note": "Configuração meramente ilustrativa"
    },
    "card2": {
      "title": "Controle financeiro e comercial descomplicado.",
      "header": "Carteira e saldo da conta",
      "amount": "$4,850.00",
      "sub": "Crédito disponível • USD",
      "stat1Label": "Consumo em outubro",
      "stat1Val": "$2,569.00",
      "stat2Label": "Última recarga",
      "stat2Val": "+$5,000.00",
      "pillText": "Faturamento automático ativado",
      "bullets": [
        "Gestão de créditos e limites de saldo",
        "Tabelas de tarifas flexíveis",
        "Faturamento automatizado",
        "Histórico completo e detalhado de transações"
      ],
      "note": "Configuração meramente ilustrativa"
    },
    "card3": {
      "title": "Preços flexíveis. Rotas interligadas.",
      "header": "Preços & conectividade",
      "row1Country": "Reino Unido",
      "row1Type": "Operadora direta",
      "row1Rate": "$0.018",
      "row2Country": "Índia",
      "row2Type": "A2P Premium",
      "row2Rate": "$0.012",
      "row3Country": "EUA",
      "row3Type": "A2P Standard",
      "row3Rate": "$0.022",
      "pill1": "SMPP conectado",
      "pill2": "API conectada",
      "bullets": [
        "Precificação por país",
        "Precificação por qualidade de rota",
        "Integração com múltiplos fornecedores",
        "Conectividade de alto tráfego SMPP/API"
      ],
      "note": "Configuração meramente ilustrativa"
    }
  },
  "workflowBadge": "FLUXO DE TRABALHO DA PLATAFORMA",
  "workflowTitle": "Do Envio da Mensagem à Entrega no Destino",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Criar a Campanha",
      "desc": "Escreva sua mensagem, defina o público-alvo e programe o melhor momento para o envio."
    },
    {
      "step": "02",
      "title": "Roteamento Inteligente",
      "desc": "Direcione cada SMS para a rota mais rápida e confiável de acordo com o destino."
    },
    {
      "step": "03",
      "title": "Entrega Global",
      "desc": "Conecte-se com redes móveis em todo o mundo por meio de infraestrutura direta de telecomunicações."
    },
    {
      "step": "04",
      "title": "Relatórios em Tempo Real",
      "desc": "Monitore recibos de entrega, métricas de desempenho e custos diretamente no seu portal."
    }
  ],
  "ctaBadge": "VAMOS CONSTRUIR SUA REDE DE MENSAGENS",
  "ctaTitle": "Impulsione seu Negócio com Soluções Corporativas de SMS",
  "ctaSubtitle": "Do roteamento de voz inteligente e terminação internacional à Voz com IA e números virtuais (DID), a iNet Global oferece soluções de comunicação escaláveis para conectar você aos seus clientes em escala global.",
  "contactUs": "Fale Conosco",
  "ctaTrust1": "Garantia de SLA Corporativo de 99.99%",
  "ctaTrust2": "Configuração Imediata de API e SMPP",
  "ctaTrust3": "Conectividade Direta com Operadoras Globais"
};

const ru: OtpSmsTranslation = {
  "heroBadge": "РЕШЕНИЕ ДЛЯ SMS-ПОРТАЛА",
  "heroTitle": "Мощный SMS-портал для Массовой и Транзакционной Рассылки",
  "heroSubtitle": "Отправляйте, принимайте, контролируйте и анализируйте корпоративные SMS с единой интеллектуальной платформы.",
  "heroDesc": "От одиночных кодов подтверждения до глобальных маркетинговых кампаний — наш SMS-портал предоставляет надежные инструменты, автоматизацию, умную маршрутизацию и аналитику.",
  "getStarted": "Начать Работу",
  "bookDemo": "Заказать Демо",
  "heroFeatures": [
    {
      "title": "Глобальное SMS-покрытие"
    },
    {
      "title": "Интеллектуальная маршрутизация"
    },
    {
      "title": "Массовые SMS и кампании"
    },
    {
      "title": "Двусторонний обмен SMS"
    },
    {
      "title": "Интеграция по API"
    },
    {
      "title": "Отчеты о доставке в реальном времени"
    }
  ],
  "managementBadge": "ПЛАТФОРМА УПРАВЛЕНИЯ SMS",
  "managementTitle": "Все Необходимое для Профессионального Управления SMS",
  "platformControlTitle": "Единая платформа. Полный контроль над SMS.",
  "platformControlDesc": "Управляйте всеми операциями обмена сообщениями из централизованной панели, созданной для высокой скорости, прозрачности и масштабируемости.",
  "platformControlBullets": [
    "Создавайте, персонализируйте и планируйте кампании рассылок",
    "Храните контакты и диалоги в едином рабочем пространстве",
    "Отслеживайте статус доставки, маршрутизацию и баланс на каждом этапе"
  ],
  "campaignCard": {
    "title": "Создание кампании",
    "draftBadge": "Черновик сохранен",
    "step1": "01 Сообщение",
    "step2": "02 Аудитория",
    "step3": "03 Расписание",
    "senderLabel": "Имя отправителя (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Аудитория",
    "audienceVal": "Статусы заказов • 24 850 контактов",
    "messageLabel": "Текст сообщения",
    "messageText": "Здравствуйте, {first_name}! Ваш заказ {order_id} отправлен. Отслеживание: {tracking_url}. Ответьте HELP для связи с поддержкой.",
    "personalizedBadge": "Динамические поля включены",
    "charCount": "118 / 160",
    "repliesTitle": "Ответы клиентов",
    "repliesBadge": "2-way SMS",
    "inboundText": "Ваш заказ уже в пути. Ответьте HELP для связи с поддержкой.",
    "inboundTime": "10:42 • Доставлено",
    "replyText": "Спасибо! Могу ли я изменить время доставки?"
  },
  "capabilitiesBadge": "ВОЗМОЖНОСТИ ПЛАТФОРМЫ",
  "capabilitiesTitle": "Продвинутый Функционал SMS",
  "capabilitiesSubtitle": "Мощные инструменты для автоматизации, контроля и оптимизации каждого аспекта ваших SMS-коммуникаций.",
  "features": [
    {
      "title": "Массовые SMS-кампании",
      "desc": "Отправляйте тысячи и миллионы сообщений с гибким управлением расписанием, сегментацией базы и мониторингом статуса доставки."
    },
    {
      "title": "Двусторонние SMS (Two-Way SMS)",
      "desc": "Получайте входящие ответы и ведите непрерывные диалоги с клиентами. Идеально для клиентской поддержки, уведомлений и подтверждений."
    },
    {
      "title": "SMS API для Интеграций",
      "desc": "Подключайте ваши приложения, CRM, веб-сайты и внутренние системы через производительный REST API для автоматизации процессов."
    },
    {
      "title": "Управление Sender ID",
      "desc": "Создавайте и регистрируйте буквенные имена отправителей под различные страны, бренды и типы рекламных или транзакционных рассылок."
    },
    {
      "title": "Умная Маршрутизация",
      "desc": "Автоматический выбор оптимального маршрута с учетом направления, оператора связи, тарифа, качества и процента доставляемости."
    },
    {
      "title": "Отчеты о Доставке (DLR)",
      "desc": "Отслеживайте статус каждого сообщения в режиме реального времени: Доставлено, Ошибка, В ожидании, Просрочено, Отклонено."
    }
  ],
  "visibilityBadge": "ПРОЗРАЧНОСТЬ И КОНТРОЛЬ",
  "visibilityTitle": "Знайте, Что Происходит с Каждым Сообщением",
  "visibilitySubtitle": "Полный контроль над SMS-трафиком благодаря подробной аналитике и отчетам в реальном времени.",
  "visibilityBullets": [
    "Мониторинг трафика SMS в режиме онлайн",
    "Аналитика производительности маршрутов связи",
    "Контроль эффективности рекламных кампаний",
    "Мгновенные оповещения об инцидентах",
    "Статистика успешной доставки и причин сбоев",
    "Детальные отчеты о расходах и использовании",
    "Мониторинг запросов к шлюзам API",
    "Аналитика по странам и мобильным операторам",
    "Отчетность по клиентам и субаккаунтам",
    "Выгрузка отчетов в Excel и CSV"
  ],
  "enterpriseBadge": "ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ",
  "enterpriseTitle": "Создано для Реселлеров, Корпораций и SMS-Провайдеров",
  "enterpriseSubtitle": "Управляйте персоналом, тарифами и инфраструктурой крупного телекоммуникационного бизнеса.",
  "enterpriseCards": {
    "card1": {
      "title": "Ваше рабочее пространство. Ваш бренд.",
      "header": "Управление доступом",
      "user1Name": "Аиша Морган",
      "user1Role": "Администратор",
      "user2Name": "Джеймс Ли",
      "user2Role": "Оператор",
      "user3Name": "Сара Хан",
      "user3Role": "Финансист",
      "protectionText": "Защита трафика активна",
      "bullets": [
        "Многопользовательский ролевой доступ (RBAC)",
        "White-label портал под вашим брендом",
        "Иерархическое управление клиентами",
        "Система защиты от фрода и спама"
      ],
      "note": "Иллюстративная конфигурация"
    },
    "card2": {
      "title": "Финансовый контроль без сложностей.",
      "header": "Баланс и кошелек аккаунта",
      "amount": "$4,850.00",
      "sub": "Доступный баланс • USD",
      "stat1Label": "Расход за октябрь",
      "stat1Val": "$2,569.00",
      "stat2Label": "Последнее пополнение",
      "stat2Val": "+$5,000.00",
      "pillText": "Автоматический биллинг включен",
      "bullets": [
        "Управление балансом и кредитными лимитами",
        "Гибкие тарифные сетки",
        "Автоматическое выставление счетов",
        "Полная история финансовых транзакций"
      ],
      "note": "Иллюстративная конфигурация"
    },
    "card3": {
      "title": "Гибкие тарифы. Прямые маршруты.",
      "header": "Тарифы и подключение",
      "row1Country": "Великобритания",
      "row1Type": "Прямой оператор",
      "row1Rate": "$0.018",
      "row2Country": "Индия",
      "row2Type": "Премиум A2P",
      "row2Rate": "$0.012",
      "row3Country": "США",
      "row3Type": "Стандарт A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP подключен",
      "pill2": "API подключен",
      "bullets": [
        "Тарификация по странам мира",
        "Тарифы в зависимости от качества маршрута",
        "Интеграция с несколькими поставщиками",
        "Подключение по протоколам SMPP и REST API"
      ],
      "note": "Иллюстративная конфигурация"
    }
  },
  "workflowBadge": "ПРОЦЕСС РАБОТЫ ПЛАТФОРМЫ",
  "workflowTitle": "От Создания Сообщения до Вручения Абоненту",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Создание Кампании",
      "desc": "Напишите текст, выберите целевую аудиторию и настройте удобное время отправки."
    },
    {
      "step": "02",
      "title": "Умная Маршрутизация",
      "desc": "Каждое сообщение направляется по лучшему прямому маршруту с минимальной задержкой."
    },
    {
      "step": "03",
      "title": "Глобальная Доставка",
      "desc": "Мгновенная доставка абонентам мобильных сетей по всему миру через надежные шлюзы."
    },
    {
      "step": "04",
      "title": "Отчетность Онлайн",
      "desc": "Отслеживайте статусы доставки, аналитику и расходы прямо в личном кабинете."
    }
  ],
  "ctaBadge": "СОЗДАДИМ ВАШУ СЕТЬ СООБЩЕНИЙ",
  "ctaTitle": "Развивайте Бизнес с Помощью Корпоративных SMS-Решений",
  "ctaSubtitle": "От интеллектуальной голосовой маршрутизации и международной терминации до голосовых AI-ботов и виртуальных номеров — iNet Global предоставляет масштабируемые решения связи для взаимодействия с клиентами по всему миру.",
  "contactUs": "Связаться с Нами",
  "ctaTrust1": "Гарантия Enterprise SLA 99.99%",
  "ctaTrust2": "Мгновенное подключение API и SMPP",
  "ctaTrust3": "Прямое подключение к мировым операторам связи"
};

const it: OtpSmsTranslation = {
  "heroBadge": "SOLUZIONE PORTALE SMS",
  "heroTitle": "Potente Portale SMS Progettato per la Messaggistica ad Alto Volume",
  "heroSubtitle": "Invia, ricevi, gestisci e monitora gli SMS aziendali da un'unica piattaforma intelligente.",
  "heroDesc": "Dai singoli codici di verifica alle campagne promozionali su larga scala, il nostro portale SMS ti offre gli strumenti, l'automazione, l'instradamento e le analisi necessarie per comunicare con assoluta affidabilità.",
  "getStarted": "Inizia Ora",
  "bookDemo": "Richiedi una Demo",
  "heroFeatures": [
    {
      "title": "Copertura SMS Globale"
    },
    {
      "title": "Instradamento Intelligente"
    },
    {
      "title": "SMS Massivi e Campagne"
    },
    {
      "title": "Messaggistica Bidirezionale"
    },
    {
      "title": "Integrazione API Semplice"
    },
    {
      "title": "Report di Consegna in Tempo Reale"
    }
  ],
  "managementBadge": "PIATTAFORMA DI GESTIONE SMS",
  "managementTitle": "Tutto Ciò di Cui Hai Bisogno per Gestire gli SMS",
  "platformControlTitle": "Un'Unica Piattaforma. Controllo SMS Completo.",
  "platformControlDesc": "Gestisci l'intera operatività di messaggistica da un cruscotto centralizzato, progettato per garantire velocità, massima visibilità e scalabilità.",
  "platformControlBullets": [
    "Componi, personalizza e programma le tue campagne",
    "Conserva contatti e conversazioni in un unico spazio di lavoro",
    "Monitora consegna, instradamento e consumi in tempo reale"
  ],
  "campaignCard": {
    "title": "Crea una campagna",
    "draftBadge": "Bozza salvata",
    "step1": "01 Componi",
    "step2": "02 Destinatari",
    "step3": "03 Pianifica",
    "senderLabel": "ID Mittente (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Destinatari",
    "audienceVal": "Aggiornamenti ordini • 24.850 contatti",
    "messageLabel": "Messaggio",
    "messageText": "Ciao {first_name}, il tuo ordine {order_id} è stato spedito. Traccialo su {tracking_url}. Rispondi HELP per assistenza.",
    "personalizedBadge": "Campi personalizzati attivi",
    "charCount": "118 / 160",
    "repliesTitle": "Risposte dei clienti",
    "repliesBadge": "SMS bidirezionale",
    "inboundText": "Il tuo ordine è in viaggio. Rispondi HELP per assistenza.",
    "inboundTime": "10:42 • Consegnato",
    "replyText": "Grazie mille! È possibile modificare l'orario di consegna?"
  },
  "capabilitiesBadge": "CAPACITÀ DI MESSAGGISTICA",
  "capabilitiesTitle": "Funzionalità SMS Avanzate",
  "capabilitiesSubtitle": "Strumenti potenti per gestire, automatizzare e ottimizzare ogni aspetto dei tuoi flussi SMS.",
  "features": [
    {
      "title": "Campagne SMS Massive",
      "desc": "Invia migliaia o milioni di messaggi con gestione avanzata delle campagne, pianificazione temporale, segmentazione dei contatti e tracciamento delle consegne."
    },
    {
      "title": "SMS Bidirezionali (Two-Way SMS)",
      "desc": "Ricevi risposte e gestisci conversazioni dalla stessa piattaforma. Ideale per supporto clienti, notifiche, verifiche e fidelizzazione."
    },
    {
      "title": "API SMS per Sviluppatori",
      "desc": "Connetti le tue applicazioni, il CRM, il tuo e-commerce o software gestionali tramite la nostra potente API REST e automatizza i flussi di lavoro."
    },
    {
      "title": "Gestione del Sender ID",
      "desc": "Crea e gestisci molteplici mittenti alfanumerici personalizzati in base a destinazione, campagna, brand o requisiti normativi."
    },
    {
      "title": "Instradamento Intelligente",
      "desc": "Seleziona automaticamente la migliore rotta disponibile in base a destinazione, operatore, costo, qualità e percentuali di consegna."
    },
    {
      "title": "Report di Consegna (DLR)",
      "desc": "Monitora lo stato dei messaggi in tempo reale con report dettagliati: Consegnato, Fallito, In sospeso, Scaduto e Rifiutato."
    }
  ],
  "visibilityBadge": "VISIBILITÀ & CONTROLLO",
  "visibilityTitle": "Sapere Esattamente Cosa Accade a Ogni Messaggio",
  "visibilitySubtitle": "Ottieni la massima visibilità sul tuo traffico SMS grazie ad analisi e reportistica approfondita in tempo reale.",
  "visibilityBullets": [
    "Monitoraggio del traffico SMS in tempo reale",
    "Analisi delle prestazioni per singola rotta",
    "Valutazione del rendimento delle campagne",
    "Notifiche e allarmi proattivi in tempo reale",
    "Statistiche dettagliate su consegne ed errori",
    "Report completi su costi e consumi",
    "Monitoraggio del traffico tramite API",
    "Reportistica aggregata per Paese e operatore",
    "Report dettagliati per cliente e sotto-account",
    "Report scaricabili ed esportabili con un clic"
  ],
  "enterpriseBadge": "PRONTO PER LE GRANDI AZIENDE",
  "enterpriseTitle": "Creato per Rivenditori, Grandi Aziende e Provider SMS",
  "enterpriseSubtitle": "Gestisci team, listini prezzi e infrastruttura tecnica di un'attività di messaggistica altamente scalabile.",
  "enterpriseCards": {
    "card1": {
      "title": "Il tuo spazio di lavoro. Il tuo brand.",
      "header": "Accesso all'area di lavoro",
      "user1Name": "Aisha Morgan",
      "user1Role": "Amministratore",
      "user2Name": "James Lee",
      "user2Role": "Operatore",
      "user3Name": "Sara Khan",
      "user3Role": "Finanza",
      "protectionText": "Protezione traffico attiva",
      "bullets": [
        "Accesso multiutente basato sui ruoli (RBAC)",
        "Piattaforma personalizzabile in White-label",
        "Gestione multilivello dei clienti",
        "Monitoraggio antifrode e antiabuso avanzato"
      ],
      "note": "Configurazione illustrativa"
    },
    "card2": {
      "title": "Controllo commerciale e finanziario semplificato.",
      "header": "Portafoglio e saldo account",
      "amount": "$4,850.00",
      "sub": "Credito disponibile • USD",
      "stat1Label": "Consumo di ottobre",
      "stat1Val": "$2,569.00",
      "stat2Label": "Ultima ricarica",
      "stat2Val": "+$5,000.00",
      "pillText": "Fatturazione automatica attiva",
      "bullets": [
        "Gestione crediti e fidi d'acquisto",
        "Listini e tabelle tariffarie personalizzate",
        "Fatturazione e incasso automatizzati",
        "Cronologia trasparente e completa delle transazioni"
      ],
      "note": "Configurazione illustrativa"
    },
    "card3": {
      "title": "Prezzi flessibili. Rotte interconnesse.",
      "header": "Tariffe e connettività",
      "row1Country": "Regno Unito",
      "row1Type": "Operatore diretto",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "A2P Premium",
      "row2Rate": "$0.012",
      "row3Country": "Stati Uniti",
      "row3Type": "A2P Standard",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Tariffazione personalizzata per Paese",
        "Tariffazione in base alla qualità della rotta",
        "Integrazione multi-fornitore",
        "Connettività ad alta velocità SMPP/API"
      ],
      "note": "Configurazione illustrativa"
    }
  },
  "workflowBadge": "FLUSSO DI LAVORO DELLA PIATTAFORMA",
  "workflowTitle": "Dalla Composizione del Messaggio alla Consegna Finale",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Crea la Campagna",
      "desc": "Componi il tuo testo, seleziona i destinatari e imposta l'orario di invio più opportuno."
    },
    {
      "step": "02",
      "title": "Smart Routing",
      "desc": "Assegna ogni messaggio al percorso più rapido ed economico in base alla destinazione."
    },
    {
      "step": "03",
      "title": "Consegna Globale",
      "desc": "Raggiungi le reti mobili di tutto il mondo attraverso un'infrastruttura di telecomunicazioni connessa."
    },
    {
      "step": "04",
      "title": "Reportistica in Tempo Reale",
      "desc": "Controlla ricevute di consegna, prestazioni e statistiche di utilizzo direttamente dal portale."
    }
  ],
  "ctaBadge": "COSTRUIAMO LA TUA RETE DI MESSAGGISTICA",
  "ctaTitle": "Fai Crescere il Tuo Business con le Soluzioni SMS Aziendali",
  "ctaSubtitle": "Dall'instradamento vocale intelligente e terminazione wholesale alla Voce AI e numeri virtuali DID, iNet Global fornisce soluzioni di telecomunicazione scalabili per connettere le aziende con i propri clienti in modo chiaro ed efficiente in tutto il mondo.",
  "contactUs": "Contattaci",
  "ctaTrust1": "Garanzia SLA Enterprise al 99,99%",
  "ctaTrust2": "Attivazione Istantanea di API & SMPP",
  "ctaTrust3": "Connettività Diretta con Operatori Globali"
};

const ko: OtpSmsTranslation = {
  "heroBadge": "SMS 포털 솔루션",
  "heroTitle": "대용량 메시징을 위해 구축된 강력한 엔터프라이즈 SMS 포털",
  "heroSubtitle": "하나의 지능형 플랫폼에서 비즈니스 SMS를 발송, 수신, 관리 및 실시간 모니터링하세요.",
  "heroDesc": "단건 인증번호 발송부터 엔터프라이즈급 대규모 마케팅 캠페인까지, 당사의 SMS 포털은 신뢰할 수 있는 소통에 필요한 도구, 자동화, 스마트 라우팅 및 분석 기능을 완벽히 제공합니다.",
  "getStarted": "지금 시작하기",
  "bookDemo": "데모 신청",
  "heroFeatures": [
    {
      "title": "글로벌 SMS 커버리지"
    },
    {
      "title": "고급 스마트 라우팅"
    },
    {
      "title": "대량 SMS 및 캠페인 관리"
    },
    {
      "title": "양방향 인터랙티브 메시징"
    },
    {
      "title": "원활한 API 연동"
    },
    {
      "title": "실시간 전송 완료 보고서"
    }
  ],
  "managementBadge": "SMS 통합 관리 플랫폼",
  "managementTitle": "SMS 운영 관리에 필요한 모든 기능",
  "platformControlTitle": "단일 플랫폼. 완벽한 SMS 제어.",
  "platformControlDesc": "속도, 가시성, 확장성을 고려하여 설계된 중앙 대시보드에서 메시징 운영 전체를 일괄 관리하세요.",
  "platformControlBullets": [
    "캠페인 메시지 작성, 맞춤 개인화 및 예약 발송",
    "하나의 워크스페이스에서 연락처 목록과 대화 세션 통합 관리",
    "메시지 이동 경로, 전송 상태 및 사용량을 실시간 추적"
  ],
  "campaignCard": {
    "title": "캠페인 만들기",
    "draftBadge": "임시 저장됨",
    "step1": "01 메시지 작성",
    "step2": "02 수신 대상",
    "step3": "03 발송 예약",
    "senderLabel": "발신번호 ID (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "수신 대상",
    "audienceVal": "주문 알림 • 24,850 연락처",
    "messageLabel": "메시지 내용",
    "messageText": "안녕하세요 {first_name}님, 주문하신 상품 {order_id}가 발송되었습니다. 배송조회: {tracking_url}. 도움이 필요하시면 HELP를 회신해 주세요.",
    "personalizedBadge": "개인화 변수 필드 활성화됨",
    "charCount": "118 / 160",
    "repliesTitle": "고객 회신 내역",
    "repliesBadge": "양방향 SMS",
    "inboundText": "주문하신 상품이 배송 중입니다. 지원이 필요하시면 HELP를 회신하세요.",
    "inboundTime": "10:42 • 전송 완료",
    "replyText": "감사합니다! 혹시 배송 시간대를 변경할 수 있을까요?"
  },
  "capabilitiesBadge": "메시징 핵심 기능",
  "capabilitiesTitle": "고급 SMS 기능",
  "capabilitiesSubtitle": "SMS 운영의 모든 단계를 관리, 자동화 및 최적화하는 강력한 도구 모음입니다.",
  "features": [
    {
      "title": "대량 SMS 캠페인",
      "desc": "정교한 캠페인 관리, 예약 발송, 연락처 타겟 세분화, 실시간 도달률 추적을 통해 수천~수백만 건의 메시지를 안정적으로 발송합니다."
    },
    {
      "title": "양방향 SMS (Two-Way SMS)",
      "desc": "동일한 플랫폼에서 고객 회신을 수신하고 대화를 이어가세요. 고객 지원, 알림, 2단계 인증 및 참여 증대에 최적화되어 있습니다."
    },
    {
      "title": "SMS 연동 API",
      "desc": "강력한 REST API를 통해 웹사이트, 앱, CRM 또는 사내 ERP 시스템과 연동하여 메시징 워크플로를 완전 자동화합니다."
    },
    {
      "title": "발신자 ID (Sender ID) 관리",
      "desc": "도착 국가, 캠페인 목적, 브랜드명, 고객 요건에 맞춰 여러 발신자 식별자를 유연하게 등록 및 관리할 수 있습니다."
    },
    {
      "title": "스마트 라우팅 (Smart Routing)",
      "desc": "목적지 국가, 이동통신사, 회선 비용, 품질, 전송 성공률을 종합 분석하여 최적의 경로를 밀리초 단위로 자동 배정합니다."
    },
    {
      "title": "실시간 전송 보고서",
      "desc": "성공(Delivered), 실패(Failed), 대기(Pending), 만료(Expired), 거부(Rejected) 등 메시지 상태를 실시간 상세 보고서로 확인합니다."
    }
  ],
  "visibilityBadge": "가시성 및 통제력",
  "visibilityTitle": "모든 메시지의 흐름을 한눈에 파악",
  "visibilitySubtitle": "실시간 분석과 맞춤 보고서를 통해 SMS 트래픽의 모든 상태를 완벽히 모니터링하세요.",
  "visibilityBullets": [
    "실시간 SMS 트래픽 라이브 모니터링",
    "라우팅 경로별 성능 분석",
    "마케팅 캠페인 성과 지표",
    "실시간 이상 징후 자동 알림",
    "전송 성공률 및 실패 원인 통계",
    "비용 및 사용량 상세 보고서",
    "API 호출 트래픽 모니터링",
    "국가별 및 통신사별 상세 통계",
    "고객사 및 서브 계정별 보고서",
    "클릭 한 번으로 다운로드 가능한 데이터 출력"
  ],
  "enterpriseBadge": "엔터프라이즈 레디",
  "enterpriseTitle": "리셀러, 대기업 및 SMS 공급업체를 위해 최적화",
  "enterpriseSubtitle": "확장 가능한 대규모 메시징 비즈니스를 지원하는 권한 관리, 요금 체계 및 인프라를 완벽 제어합니다.",
  "enterpriseCards": {
    "card1": {
      "title": "나만의 워크스페이스. 나만의 브랜드.",
      "header": "워크스페이스 접근 권한",
      "user1Name": "아이샤 모건",
      "user1Role": "관리자",
      "user2Name": "제임스 리",
      "user2Role": "운영자",
      "user3Name": "사라 칸",
      "user3Role": "재무",
      "protectionText": "트래픽 보호 활성화됨",
      "bullets": [
        "역할 기반 다중 사용자 권한 관리 (RBAC)",
        "독자적 브랜드 적용 가능한 화이트라벨 포털",
        "다계층 고객사 및 서브 계정 관리",
        "사기 및 어뷰징 실시간 탐지 시스템"
      ],
      "note": "예시 설정 화면"
    },
    "card2": {
      "title": "상업적 제어를 더욱 간편하게.",
      "header": "계정 지갑 및 잔액",
      "amount": "$4,850.00",
      "sub": "사용 가능 잔액 • USD",
      "stat1Label": "10월 총 사용량",
      "stat1Val": "$2,569.00",
      "stat2Label": "최근 충전액",
      "stat2Val": "+$5,000.00",
      "pillText": "자동 결제 활성화됨",
      "bullets": [
        "지갑 충전 및 신용 한도 관리",
        "유연한 단가표(Rate Card) 설정",
        "자동 청구 및 인보이스 발행",
        "투명하고 상세한 거래 내역 기록"
      ],
      "note": "예시 설정 화면"
    },
    "card3": {
      "title": "유연한 단가. 글로벌 연결 경로.",
      "header": "요금 및 통신망 연결",
      "row1Country": "영국 (UK)",
      "row1Type": "통신사 직접 연결",
      "row1Rate": "$0.018",
      "row2Country": "인도 (India)",
      "row2Type": "프리미엄 A2P",
      "row2Rate": "$0.012",
      "row3Country": "미국 (US)",
      "row3Type": "표준 A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP 정상 연결",
      "pill2": "API 정상 연결",
      "bullets": [
        "국가별 맞춤형 단가 체계",
        "품질 등급별 라우팅 요금",
        "다중 공급업체 회선 통합",
        "고성능 SMPP 및 REST API 연동"
      ],
      "note": "예시 설정 화면"
    }
  },
  "workflowBadge": "플랫폼 전송 워크플로",
  "workflowTitle": "메시지 생성부터 수신 단말 도착까지",
  "workflowSteps": [
    {
      "step": "01",
      "title": "캠페인 생성",
      "desc": "메시지를 작성하고 타겟 수신 대상을 지정한 후 최적의 발송 시간을 예약합니다."
    },
    {
      "step": "02",
      "title": "스마트 라우팅",
      "desc": "수신 국가와 전송 속도 요건에 맞춰 최적의 통신 경로로 메시지를 자동 매칭합니다."
    },
    {
      "step": "03",
      "title": "글로벌 도달",
      "desc": "직접 연결된 글로벌 통신 인프라를 통해 전 세계 모바일 네트워크로 즉시 전달합니다."
    },
    {
      "step": "04",
      "title": "실시간 보고",
      "desc": "포털 대시보드에서 전송 영수증, 도달 속도 및 사용 현황을 실시간으로 확인합니다."
    }
  ],
  "ctaBadge": "귀사만의 메시징 네트워크를 구축하세요",
  "ctaTitle": "기업용 SMS 솔루션으로 비즈니스를 확장하세요",
  "ctaSubtitle": "지능형 음성 라우팅과 국제 음성 터미네이션부터 AI 음성 솔루션과 가상 번호(DID)에 이르기까지, iNet Global은 기업이 전 세계 고객과 명확하고 안정적으로 연결될 수 있도록 확장성 높은 통신 솔루션을 제공합니다.",
  "contactUs": "문의하기",
  "ctaTrust1": "99.99% 엔터프라이즈 SLA 보장",
  "ctaTrust2": "API 및 SMPP 즉시 개통 지원",
  "ctaTrust3": "글로벌 Tier-1 통신사 직결 회선"
};

const nl: OtpSmsTranslation = {
  "heroBadge": "SMS-PORTAALOPLOSSING",
  "heroTitle": "Krachtig SMS-portaal Gebouwd voor Zakelijke Berichten in Hoog Volume",
  "heroSubtitle": "Verstuur, ontvang, beheer en bewaak zakelijke SMS-berichten via één intelligent platform.",
  "heroDesc": "Van individuele verificatieberichten tot grootschalige bedrijfscampagnes: ons SMS-portaal biedt u de tools, automatisering, routering en analyses die u nodig hebt voor betrouwbare communicatie.",
  "getStarted": "Aan de Slag",
  "bookDemo": "Demo Aanvragen",
  "heroFeatures": [
    {
      "title": "Wereldwijde SMS-dekking"
    },
    {
      "title": "Geavanceerde Routering"
    },
    {
      "title": "Bulk SMS & Campagnes"
    },
    {
      "title": "Tweewegcommunicatie"
    },
    {
      "title": "Eenvoudige API-integratie"
    },
    {
      "title": "Realtime Afleverrapporten"
    }
  ],
  "managementBadge": "SMS-BEHEERPLATFORM",
  "managementTitle": "Alles Wat u Nodig Hebt om SMS te Beheren",
  "platformControlTitle": "Eén Platform. Volledige SMS-controle.",
  "platformControlDesc": "Beheer uw gehele berichtgeving vanuit een gecentraliseerd dashboard, ontworpen voor snelheid, inzicht en schaalbaarheid.",
  "platformControlBullets": [
    "Stel campagnes op, personaliseer berichten en plan verzendingen",
    "Bewaar contacten en interactieve gesprekken in één centrale werkruimte",
    "Volg aflevering, routering en verbruik realtime terwijl berichten bewegen"
  ],
  "campaignCard": {
    "title": "Campagne aanmaken",
    "draftBadge": "Concept opgeslagen",
    "step1": "01 Opstellen",
    "step2": "02 Doelgroep",
    "step3": "03 Inplannen",
    "senderLabel": "Afzender-ID (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Doelgroep",
    "audienceVal": "Bestelupdates • 24.850 contacten",
    "messageLabel": "Bericht",
    "messageText": "Hallo {first_name}, uw bestelling {order_id} is verzonden. Volg het via {tracking_url}. Antwoord HELP voor ondersteuning.",
    "personalizedBadge": "Gepersonaliseerde velden actief",
    "charCount": "118 / 160",
    "repliesTitle": "Klantreacties",
    "repliesBadge": "2-weg SMS",
    "inboundText": "Uw bestelling is onderweg. Antwoord HELP voor ondersteuning.",
    "inboundTime": "10:42 • Afgeleverd",
    "replyText": "Bedankt! Kan ik het bezorgtijdstip nog wijzigen?"
  },
  "capabilitiesBadge": "MESSAGING-CAPACITEITEN",
  "capabilitiesTitle": "Geavanceerde SMS-functies",
  "capabilitiesSubtitle": "Krachtige hulpmiddelen om elk onderdeel van uw SMS-activiteiten te beheren, automatiseren en optimaliseren.",
  "features": [
    {
      "title": "Bulk SMS-campagnes",
      "desc": "Verstuur duizenden of miljoenen berichten met geavanceerd campagnebeheer, flexibele planning, contactsegmentatie en accurate afleveropvolging."
    },
    {
      "title": "Tweeweg-SMS (Two-Way SMS)",
      "desc": "Ontvang antwoorden en beheer conversaties binnen hetzelfde platform. Ideaal voor klantenservice, meldingen, verificaties en engagement."
    },
    {
      "title": "SMS API-koppeling",
      "desc": "Verbind uw applicaties, CRM, webshop of bedrijfssoftware via onze krachtige REST API en automatiseer uw communicatiestromen."
    },
    {
      "title": "Afzender-ID Beheer",
      "desc": "Creëer en beheer meerdere afzender-ID's op basis van land van bestemming, type campagne, merknaam of klantspecificaties."
    },
    {
      "title": "Slimme Routering (Smart Routing)",
      "desc": "Selecteer automatisch de beste beschikbare route op basis van bestemming, operator, kosten, kwaliteit en afleverprestaties."
    },
    {
      "title": "Afleverrapportages (DLR)",
      "desc": "Bewaak de berichtstatus in realtime met gedetailleerde rapporten over afgeleverde, mislukte, wachtende, verlopen en afgewezen berichten."
    }
  ],
  "visibilityBadge": "INZICHT & CONTROLE",
  "visibilityTitle": "Weet Wat er Gebeurt met Elk Bericht",
  "visibilitySubtitle": "Krijg volledig inzicht in uw SMS-verkeer met realtime analyses en uitgebreide rapportages.",
  "visibilityBullets": [
    "Realtime monitoring van SMS-verkeer",
    "Prestatieanalyse per routeringspad",
    "Voortgang en succes van campagnes",
    "Realtime waarschuwingen en notificaties",
    "Gedetailleerde statistieken over bezorging en fouten",
    "Transparante kosten- en verbruiksoverzichten",
    "API-verkeersmonitoring",
    "Rapporten per land en mobiele operator",
    "Rapportages per klant- en subaccount",
    "Eenvoudig downloadbare data en exports"
  ],
  "enterpriseBadge": "KLAAR VOOR BEDRIJVEN",
  "enterpriseTitle": "Gebouwd voor Resellers, Ondernemingen & SMS-providers",
  "enterpriseSubtitle": "Beheer teamleden, tarieven en technische infrastructuur voor een schaalbare berichtgevingsonderneming.",
  "enterpriseCards": {
    "card1": {
      "title": "Uw werkruimte. Uw merk.",
      "header": "Werkruimtetoegang",
      "user1Name": "Aisha Morgan",
      "user1Role": "Beheerder",
      "user2Name": "James Lee",
      "user2Role": "Operator",
      "user3Name": "Sara Khan",
      "user3Role": "Financiën",
      "protectionText": "Verkeersbeveiliging actief",
      "bullets": [
        "Toegangsbeheer voor meerdere gebruikers (RBAC)",
        "White-label portaal onder eigen merknaam",
        "Geavanceerd beheer van klantaccounts",
        "Continue fraudebewaking en misbruikpreventie"
      ],
      "note": "Illustratieve configuratie"
    },
    "card2": {
      "title": "Commerciële controle, vereenvoudigd.",
      "header": "Accountportemonnee & saldo",
      "amount": "$4,850.00",
      "sub": "Beschikbaar tegoed • USD",
      "stat1Label": "Verbruik oktober",
      "stat1Val": "$2,569.00",
      "stat2Label": "Laatste opwaardering",
      "stat2Val": "+$5,000.00",
      "pillText": "Automatische facturatie ingeschakeld",
      "bullets": [
        "Beheer van tegoeden en kredietlimieten",
        "Aanpasbare tarieflijsten per klant",
        "Volledig geautomatiseerde facturering",
        "Transparante en gedetailleerde transactiehistorie"
      ],
      "note": "Illustratieve configuratie"
    },
    "card3": {
      "title": "Flexibele tarieven. Verbonden routes.",
      "header": "Tarieven & connectiviteit",
      "row1Country": "VK (UK)",
      "row1Type": "Directe operator",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "Premium A2P",
      "row2Rate": "$0.012",
      "row3Country": "VS (US)",
      "row3Type": "Standaard A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Tariefstelling per land",
        "Gedifferentieerde prijzen per routekwaliteit",
        "Integratie van meerdere leveranciers",
        "Hoge doorvoersnelheid via SMPP en API"
      ],
      "note": "Illustratieve configuratie"
    }
  },
  "workflowBadge": "PLATFORMWORKFLOW",
  "workflowTitle": "Van Berichtcreatie tot Succesvolle Aflevering",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Campagne Aanmaken",
      "desc": "Stel uw bericht op, kies de gewenste doelgroep en plan het optimale verzendmoment."
    },
    {
      "step": "02",
      "title": "Slimme Routering",
      "desc": "Koppel elk bericht automatisch aan de snelste en meest betrouwbare route."
    },
    {
      "step": "03",
      "title": "Wereldwijde Bezorging",
      "desc": "Bereik mobiele netwerken over de hele wereld via verbonden telecominfrastructuur."
    },
    {
      "step": "04",
      "title": "Realtime Rapportage",
      "desc": "Volg ontvangstbevestigingen, prestaties en verbruik live in uw portaal."
    }
  ],
  "ctaBadge": "LATEN WE UW MESSAGING-NETWERK BOUWEN",
  "ctaTitle": "Laat uw Bedrijf Groeien met Zakelijke SMS-oplossingen",
  "ctaSubtitle": "Van intelligente spraakroutering en internationale wholesale-beëindiging tot AI Voice en virtuele DID-nummers: iNet Global biedt schaalbare communicatieoplossingen waarmee bedrijven helder en betrouwbaar contact houden met klanten wereldwijd.",
  "contactUs": "Neem Contact Op",
  "ctaTrust1": "Gegarandeerde 99,99% Enterprise SLA",
  "ctaTrust2": "Directe Inrichting van API & SMPP",
  "ctaTrust3": "Directe Koppeling met Wereldwijde Telecomoperators"
};

const tr: OtpSmsTranslation = {
  "heroBadge": "SMS PORTAL ÇÖZÜMÜ",
  "heroTitle": "Yüksek Hacimli Mesajlaşma İçin Geliştirilmiş Güçlü SMS Portalı",
  "heroSubtitle": "Kurumsal SMS'leri tek bir akıllı platformdan gönderin, alın, yönetin ve izleyin.",
  "heroDesc": "Tekil doğrulama kodlarından kurumsal ölçekli büyük kampanyalara kadar, SMS portalımız güvenilir iletişim kurmanız için ihtiyaç duyduğunuz tüm araçları, otomasyonu, yönlendirmeyi ve analitiği sunar.",
  "getStarted": "Hemen Başlayın",
  "bookDemo": "Demo Talep Edin",
  "heroFeatures": [
    {
      "title": "Küresel SMS Kapsamı"
    },
    {
      "title": "Gelişmiş Akıllı Yönlendirme"
    },
    {
      "title": "Toplu SMS ve Kampanyalar"
    },
    {
      "title": "Çift Yönlü Mesajlaşma"
    },
    {
      "title": "Kolay API Entegrasyonu"
    },
    {
      "title": "Gerçek Zamanlı İletim Raporları"
    }
  ],
  "managementBadge": "SMS YÖNETİM PLATFORMU",
  "managementTitle": "SMS Yönetimi İçin İhtiyacınız Olan Her Şey",
  "platformControlTitle": "Tek Platform. Eksiksiz SMS Kontrolü.",
  "platformControlDesc": "Hız, şeffaflık ve ölçeklenebilirlik için tasarlanmış merkezi bir kontrol panelinden tüm mesajlaşma operasyonunuzu yönetin.",
  "platformControlBullets": [
    "Kampanyaları kolayca oluşturun, kişiselleştirin ve zamanlayın",
    "Kişileri ve etkileşimli sohbetleri tek bir çalışma alanında toplayın",
    "Mesajlar iletilirken teslimatı, yönlendirmeyi ve kullanımı anlık takip edin"
  ],
  "campaignCard": {
    "title": "Kampanya oluştur",
    "draftBadge": "Taslak kaydedildi",
    "step1": "01 Mesaj Yaz",
    "step2": "02 Hedef Kitle",
    "step3": "03 Zamanla",
    "senderLabel": "Gönderici Başlığı (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Hedef Kitle",
    "audienceVal": "Sipariş güncellemeleri • 24.850 kişi",
    "messageLabel": "Mesaj Metni",
    "messageText": "Merhaba {first_name}, {order_id} numaralı siparişiniz kargoya verildi. Takip: {tracking_url}. Destek için YARDIM yazın.",
    "personalizedBadge": "Dinamik alanlar etkin",
    "charCount": "118 / 160",
    "repliesTitle": "Müşteri yanıtları",
    "repliesBadge": "2 yönlü SMS",
    "inboundText": "Siparişiniz yola çıktı. Destek için YARDIM yazabilirsiniz.",
    "inboundTime": "10:42 • İletildi",
    "replyText": "Teşekkürler! Teslimat saatini değiştirebilir miyim?"
  },
  "capabilitiesBadge": "MESAJLAŞMA YETENEKLERİ",
  "capabilitiesTitle": "Gelişmiş SMS Özellikleri",
  "capabilitiesSubtitle": "SMS operasyonunuzun her aşamasını yönetmek, otomatikleştirmek ve optimize etmek için güçlü araçlar.",
  "features": [
    {
      "title": "Toplu SMS Kampanyaları",
      "desc": "Gelişmiş kampanya yönetimi, ileri tarihli zamanlama, rehber segmentasyonu ve anlık teslimat takibi ile binlerce veya milyonlarca mesaj gönderin."
    },
    {
      "title": "Çift Yönlü SMS (Two-Way SMS)",
      "desc": "Aynı platformdan gelen yanıtları görüntüleyin ve müşteriyle sohbet edin. Müşteri desteği, bildirimler, doğrulama ve etkileşim için idealdir."
    },
    {
      "title": "SMS Entegrasyon API'si",
      "desc": "Güçlü REST API'miz ile mobil uygulamalarınızı, CRM'inizi, web sitenizi veya iş yazılımlarınızı bağlayın ve iş akışlarınızı otomatikleştirin."
    },
    {
      "title": "Gönderici Başlığı (Sender ID) Yönetimi",
      "desc": "Hedef ülkeye, kampanya türüne, markaya veya müşteri gereksinimlerine göre birden fazla alfasayısal başlık oluşturun ve yönetin."
    },
    {
      "title": "Akıllı Yönlendirme (Smart Routing)",
      "desc": "Hedef ülke, operatör, maliyet, hat kalitesi ve iletim başarısına göre en iyi rotayı otomatik olarak milisaniyeler içinde seçin."
    },
    {
      "title": "Gerçek Zamanlı İletim Raporları",
      "desc": "İletildi, Başarısız, Beklemede, Süresi Doldu ve Reddedildi gibi detaylı raporlarla mesaj durumunu anlık olarak izleyin."
    }
  ],
  "visibilityBadge": "GÖRÜNÜRLÜK VE KONTROL",
  "visibilityTitle": "Her Mesajın Durumunu Anında Görün",
  "visibilitySubtitle": "Gerçek zamanlı analitik ve raporlama ile SMS trafiğiniz üzerinde tam kontrol ve şeffaflık elde edin.",
  "visibilityBullets": [
    "Gerçek zamanlı SMS trafiği izleme",
    "Güzergah ve rota bazlı performans analitiği",
    "Kampanya performans ve başarı takibi",
    "Anlık uyarılar ve otomatik bildirimler",
    "Teslimat ve hata istatistikleri",
    "Maliyet ve kullanım raporları",
    "API trafiği ve çağrı izleme",
    "Ülke ve operatör düzeyinde raporlar",
    "Müşteri ve alt hesap bazlı dökümler",
    "Tek tıkla indirilebilir detaylı raporlar"
  ],
  "enterpriseBadge": "KURUMSAL KULLANIMA HAZIR",
  "enterpriseTitle": "Bayiler, Büyük İşletmeler ve SMS Sağlayıcıları İçin Tasarlandı",
  "enterpriseSubtitle": "Büyük ölçekli mesajlaşma operasyonunuzun arkasındaki kullanıcı yetkilerini, fiyatlandırmayı ve altyapıyı kolayca yönetin.",
  "enterpriseCards": {
    "card1": {
      "title": "Sizin çalışma alanınız. Sizin markanız.",
      "header": "Çalışma alanı erişimi",
      "user1Name": "Aisha Morgan",
      "user1Role": "Yönetici",
      "user2Name": "James Lee",
      "user2Role": "Operatör",
      "user3Name": "Sara Khan",
      "user3Role": "Finans",
      "protectionText": "Trafik koruması devrede",
      "bullets": [
        "Rol tabanlı çok kullanıcılı yetkilendirme (RBAC)",
        "Kendi markanızla White-label portal kullanımı",
        "Hiyerarşik müşteri ve hesap yönetimi",
        "Sahtekarlık (Fraud) ve kötüye kullanım izleme"
      ],
      "note": "Örnek yapılandırma görseli"
    },
    "card2": {
      "title": "Ticari kontrol, basitleştirildi.",
      "header": "Hesap cüzdanı ve bakiye",
      "amount": "$4,850.00",
      "sub": "Kullanılabilir bakiye • USD",
      "stat1Label": "Ekim ayı kullanımı",
      "stat1Val": "$2,569.00",
      "stat2Label": "Son yükleme",
      "stat2Val": "+$5,000.00",
      "pillText": "Otomatik faturalandırma açık",
      "bullets": [
        "Bakiye ve kredi limiti yönetimi",
        "Esnek tarife ve fiyat listeleri",
        "Otomatik faturalandırma sistemi",
        "Şeffaf ve eksiksiz işlem geçmişi"
      ],
      "note": "Örnek yapılandırma görseli"
    },
    "card3": {
      "title": "Esnek fiyatlandırma. Bağlantılı rotalar.",
      "header": "Fiyatlandırma ve bağlantılar",
      "row1Country": "Birleşik Krallık",
      "row1Type": "Doğrudan Operatör",
      "row1Rate": "$0.018",
      "row2Country": "Hindistan",
      "row2Type": "Premium A2P",
      "row2Rate": "$0.012",
      "row3Country": "ABD",
      "row3Type": "Standart A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP çevrimiçi",
      "pill2": "API çevrimiçi",
      "bullets": [
        "Ülke bazlı özel fiyatlandırma",
        "Rota kalitesine göre kademeli tarifeler",
        "Çoklu tedarikçi hat entegrasyonu",
        "Yüksek kapasiteli SMPP ve REST API bağlantısı"
      ],
      "note": "Örnek yapılandırma görseli"
    }
  },
  "workflowBadge": "PLATFORM İŞ AKIŞI",
  "workflowTitle": "Mesaj Oluşturmadan Teslimata Kadar Olan Süreç",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Kampanya Oluştur",
      "desc": "Mesajınızı hazırlayın, hedef kitlenizi belirleyin ve ideal gönderim zamanını planlayın."
    },
    {
      "step": "02",
      "title": "Akıllı Yönlendirme",
      "desc": "Her mesajı hedef ülkeye ve hız ihtiyacına göre en kaliteli hatta otomatik eşleştirin."
    },
    {
      "step": "03",
      "title": "Küresel İletim",
      "desc": "Doğrudan bağlı telekom altyapısıyla dünya çapındaki mobil şebekelere hızla ulaşın."
    },
    {
      "step": "04",
      "title": "Gerçek Zamanlı Raporlama",
      "desc": "İletim raporlarını, hat performansını ve harcamaları panelinizden canlı izleyin."
    }
  ],
  "ctaBadge": "MESAJLAŞMA AĞINIZI BİRLİKTE kuralım",
  "ctaTitle": "Kurumsal SMS Çözümleri ile İşinizi Büyütün",
  "ctaSubtitle": "Akıllı ses yönlendirmesi ve uluslararası ses sonlandırmasından yapay zeka destekli ses ve sanal DID numaralarına kadar, iNet Global işletmelerin küresel pazarlarda müşterileriyle güvenilir ve verimli bir şekilde bağlantı kurmasını sağlayan ölçeklenebilir telekomünikasyon çözümleri sunar.",
  "contactUs": "Bize Ulaşın",
  "ctaTrust1": "%99,99 Kurumsal SLA Garantisi",
  "ctaTrust2": "Anında API ve SMPP Kurulumu",
  "ctaTrust3": "Küresel Tier-1 Operatör Bağlantısı"
};

const id: OtpSmsTranslation = {
  "heroBadge": "SOLUSI PORTAL SMS",
  "heroTitle": "Portal SMS Andal yang Dirancang untuk Pengiriman Pesan Volume Tinggi",
  "heroSubtitle": "Kirim, terima, kelola, dan pantau SMS bisnis dari satu platform cerdas terpusat.",
  "heroDesc": "Dari pesan verifikasi tunggal hingga kampanye pemasaran skala perusahaan, Portal SMS kami memberi Anda alat, otomatisasi, perutean cerdas, dan analitik lengkap untuk berkomunikasi secara andal.",
  "getStarted": "Mulai Sekarang",
  "bookDemo": "Jadwalkan Demo",
  "heroFeatures": [
    {
      "title": "Cakupan SMS Global"
    },
    {
      "title": "Perutean Cerdas Canggih"
    },
    {
      "title": "SMS Massal & Kampanye"
    },
    {
      "title": "Pesan Dua Arah"
    },
    {
      "title": "Integrasi API Mudah"
    },
    {
      "title": "Laporan Pengiriman Real-Time"
    }
  ],
  "managementBadge": "PLATFORM MANAJEMEN SMS",
  "managementTitle": "Semua yang Anda Butuhkan untuk Mengelola SMS",
  "platformControlTitle": "Satu Platform. Kendali SMS Sepenuhnya.",
  "platformControlDesc": "Kelola seluruh operasi perpesanan Anda dari dasbor terpusat yang dirancang untuk kecepatan, visibilitas tinggi, dan skalabilitas.",
  "platformControlBullets": [
    "Susun, sesuaikan dengan variabel pribadi, dan jadwalkan kampanye",
    "Simpan kontak dan riwayat percakapan dalam satu ruang kerja terpadu",
    "Pantau pengiriman, rute operator, dan kuota saat pesan diproses"
  ],
  "campaignCard": {
    "title": "Buat kampanye pesan",
    "draftBadge": "Draf tersimpan",
    "step1": "01 Tulis Pesan",
    "step2": "02 Audiens",
    "step3": "03 Jadwalkan",
    "senderLabel": "ID Pengirim (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Audiens",
    "audienceVal": "Pembaruan pesanan • 24.850 kontak",
    "messageLabel": "Isi Pesan",
    "messageText": "Halo {first_name}, pesanan {order_id} Anda telah dikirim. Lacak di {tracking_url}. Balas BANTUAN untuk bantuan.",
    "personalizedBadge": "Variabel personalisasi aktif",
    "charCount": "118 / 160",
    "repliesTitle": "Balasan pelanggan",
    "repliesBadge": "SMS 2 arah",
    "inboundText": "Pesanan Anda sedang dalam perjalanan. Balas BANTUAN untuk bantuan.",
    "inboundTime": "10:42 • Terkirim",
    "replyText": "Terima kasih! Bisakah saya mengubah jadwal pengantaran?"
  },
  "capabilitiesBadge": "KEMAMPUAN PERPESANAN",
  "capabilitiesTitle": "Fitur SMS Tingkat Lanjut",
  "capabilitiesSubtitle": "Alat canggih untuk mengelola, mengotomatiskan, dan mengoptimalkan setiap alur operasional SMS Anda.",
  "features": [
    {
      "title": "Kampanye SMS Massal",
      "desc": "Kirim ribuan atau jutaan pesan dengan manajemen kampanye yang kuat, penjadwalan presisi, segmentasi kontak, dan pelacakan pengiriman."
    },
    {
      "title": "SMS Dua Arah (Two-Way SMS)",
      "desc": "Terima balasan dan kelola percakapan dari platform yang sama. Sangat cocok untuk layanan pelanggan, notifikasi transaksi, dan interaksi."
    },
    {
      "title": "SMS API Andal",
      "desc": "Hubungkan aplikasi, CRM, toko online, atau sistem bisnis Anda dengan REST API kami yang bertenaga untuk mengotomatiskan komunikasi."
    },
    {
      "title": "Manajemen Sender ID",
      "desc": "Buat dan kelola beberapa nama pengirim alfanumerik berdasarkan negara tujuan, jenis kampanye, merek dagang, atau regulasi lokal."
    },
    {
      "title": "Perutean Cerdas (Smart Routing)",
      "desc": "Pilih rute terbaik secara otomatis berdasarkan tujuan, operator, biaya, kualitas jalur, dan rasio keberhasilan pengiriman."
    },
    {
      "title": "Laporan Pengiriman (DLR)",
      "desc": "Pantau status pesan secara langsung dengan laporan detail: Terkirim, Gagal, Tertunda, Kedaluwarsa, dan Ditolak."
    }
  ],
  "visibilityBadge": "VISIBILITAS & KENDALI",
  "visibilityTitle": "Ketahui Apa yang Terjadi pada Setiap Pesan",
  "visibilitySubtitle": "Dapatkan visibilitas penuh atas trafik SMS Anda dengan analitik dan pelaporan mendalam secara real-time.",
  "visibilityBullets": [
    "Pemantauan trafik SMS secara langsung",
    "Analisis performa rute pengiriman",
    "Pelacakan efektivitas kampanye",
    "Peringatan instan jika terjadi anomali",
    "Statistik lengkap pengiriman dan kegagalan",
    "Laporan biaya dan pemakaian kuota",
    "Pemantauan panggilan dan trafik API",
    "Laporan per negara dan operator seluler",
    "Laporan per akun dan sub-akun pelanggan",
    "Laporan yang dapat diunduh dan diekspor seketika"
  ],
  "enterpriseBadge": "SIAP UNTUK PERUSAHAAN",
  "enterpriseTitle": "Dibangun untuk Reseller, Perusahaan Besar & Penyedia SMS",
  "enterpriseSubtitle": "Kelola tim kerja, penetapan harga, dan infrastruktur di balik bisnis perpesanan berkapasitas besar.",
  "enterpriseCards": {
    "card1": {
      "title": "Ruang kerja Anda. Merek Anda.",
      "header": "Akses ruang kerja",
      "user1Name": "Aisha Morgan",
      "user1Role": "Admin",
      "user2Name": "James Lee",
      "user2Role": "Operator",
      "user3Name": "Sara Khan",
      "user3Role": "Keuangan",
      "protectionText": "Perlindungan trafik aktif",
      "bullets": [
        "Akses multi-pengguna berbasis peran (RBAC)",
        "Portal White-label dengan identitas merek Anda",
        "Manajemen pelanggan bertingkat",
        "Pemantauan anti-penipuan dan anti-spam"
      ],
      "note": "Konfigurasi ilustratif"
    },
    "card2": {
      "title": "Kontrol komersial yang disederhanakan.",
      "header": "Dompet dan saldo akun",
      "amount": "$4,850.00",
      "sub": "Kredit tersedia • USD",
      "stat1Label": "Penggunaan Oktober",
      "stat1Val": "$2,569.00",
      "stat2Label": "Top-up terakhir",
      "stat2Val": "+$5,000.00",
      "pillText": "Penagihan otomatis aktif",
      "bullets": [
        "Manajemen saldo dompet dan limit kredit",
        "Pengaturan daftar tarif fleksibel",
        "Penagihan dan pembuatan faktur otomatis",
        "Riwayat transaksi lengkap dan transparan"
      ],
      "note": "Konfigurasi ilustratif"
    },
    "card3": {
      "title": "Harga fleksibel. Rute terhubung global.",
      "header": "Tarif & konektivitas",
      "row1Country": "Inggris (UK)",
      "row1Type": "Operator Langsung",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "A2P Premium",
      "row2Rate": "$0.012",
      "row3Country": "AS (US)",
      "row3Type": "A2P Standar",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Penetapan harga spesifik per negara",
        "Penetapan tarif bertingkat sesuai rute",
        "Integrasi beberapa pemasok rute",
        "Konektivitas throughput tinggi SMPP/API"
      ],
      "note": "Konfigurasi ilustratif"
    }
  },
  "workflowBadge": "ALUR KERJA PLATFORM",
  "workflowTitle": "Dari Pembuatan Pesan Hingga Sampai ke Penerima",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Buat Kampanye",
      "desc": "Tulis pesan Anda, pilih target audiens, dan jadwalkan waktu pengiriman yang tepat."
    },
    {
      "step": "02",
      "title": "Perutean Pintar",
      "desc": "Cocokkan setiap pesan dengan rute terbaik sesuai tujuan dan kebutuhan kecepatan pengiriman."
    },
    {
      "step": "03",
      "title": "Pengiriman Global",
      "desc": "Jangkau jaringan seluler di seluruh dunia melalui infrastruktur telekomunikasi terhubung."
    },
    {
      "step": "04",
      "title": "Laporan Real-Time",
      "desc": "Pantau bukti tanda terima pengiriman, performa, dan pemakaian langsung dari portal Anda."
    }
  ],
  "ctaBadge": "MARI BANGUN JARINGAN PERPESANAN ANDA",
  "ctaTitle": "Kembangkan Bisnis Anda dengan Solusi SMS Perusahaan",
  "ctaSubtitle": "Dari perutean suara cerdas dan terminasi internasional hingga Voice AI dan nomor virtual DID, iNet Global menyediakan solusi telekomunikasi terukur untuk menghubungkan bisnis dengan pelanggan secara andal di pasar global.",
  "contactUs": "Hubungi Kami",
  "ctaTrust1": "Jaminan SLA Perusahaan 99.99%",
  "ctaTrust2": "Aktivasi Instan API & SMPP",
  "ctaTrust3": "Konektivitas Langsung Operator Tingkat 1 (Tier-1)"
};

const vi: OtpSmsTranslation = {
  "heroBadge": "GIẢI PHÁP CỔNG SMS DOANH NGHIỆP",
  "heroTitle": "Cổng SMS Mạnh Mẽ Được Thiết Kế Cho Lưu Lượng Tin Nhắn Khối Lượng Lớn",
  "heroSubtitle": "Gửi, nhận, quản lý và giám sát tin nhắn SMS doanh nghiệp từ một nền tảng thông minh tập trung duy nhất.",
  "heroDesc": "Từ các mã xác thực OTP đơn lẻ đến các chiến dịch tiếp thị quy mô lớn của doanh nghiệp, Cổng SMS của chúng tôi cung cấp đầy đủ công cụ, tự động hóa, định tuyến thông minh và phân tích chi tiết để bạn giao tiếp đáng tin cậy.",
  "getStarted": "Bắt Đầu Ngay",
  "bookDemo": "Đăng Ký Bản Demo",
  "heroFeatures": [
    {
      "title": "Phủ Sóng SMS Toàn Cầu"
    },
    {
      "title": "Định Tuyến Nâng Cao"
    },
    {
      "title": "SMS Hàng Loạt & Chiến Dịch"
    },
    {
      "title": "Tin Nhắn Tương Tác Hai Chiều"
    },
    {
      "title": "Tích Hợp API Dễ Dàng"
    },
    {
      "title": "Báo Cáo Giao Nhận Thời Gian Thực"
    }
  ],
  "managementBadge": "NỀN TẢNG QUẢN LÝ SMS",
  "managementTitle": "Tất Cả Những Gì Bạn Cần Để Quản Lý SMS Chuyên Nghiệp",
  "platformControlTitle": "Một Nền Tảng. Toàn Quyền Kiểm Soát SMS.",
  "platformControlDesc": "Quản lý toàn bộ hoạt động nhắn tin của bạn từ bảng điều khiển tập trung được thiết kế cho tốc độ cao, tính minh bạch và khả năng mở rộng không giới hạn.",
  "platformControlBullets": [
    "Soạn thảo, cá nhân hóa biến động và lên lịch gửi chiến dịch",
    "Lưu trữ danh bạ và các luồng hội thoại trong một không gian làm việc duy nhất",
    "Theo dõi trạng thái phát tin, định tuyến và cước phí theo thời gian thực"
  ],
  "campaignCard": {
    "title": "Tạo chiến dịch tin nhắn",
    "draftBadge": "Đã lưu bản nháp",
    "step1": "01 Soạn tin",
    "step2": "02 Khách hàng",
    "step3": "03 Lên lịch",
    "senderLabel": "Tên định danh (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Đối tượng nhận",
    "audienceVal": "Cập nhật đơn hàng • 24.850 liên hệ",
    "messageLabel": "Nội dung tin nhắn",
    "messageText": "Xin chào {first_name}, đơn hàng {order_id} của bạn đã được xuất kho. Tra cứu tại {tracking_url}. Soạn HELP để được hỗ trợ.",
    "personalizedBadge": "Đã bật trường cá nhân hóa",
    "charCount": "118 / 160",
    "repliesTitle": "Phản hồi từ khách hàng",
    "repliesBadge": "SMS 2 chiều",
    "inboundText": "Đơn hàng của bạn đang được giao. Soạn HELP để được trợ giúp.",
    "inboundTime": "10:42 • Đã nhận",
    "replyText": "Cảm ơn bạn! Tôi có thể đổi khung giờ nhận hàng được không?"
  },
  "capabilitiesBadge": "NĂNG LỰC NHẮN TIN",
  "capabilitiesTitle": "Tính Năng SMS Nâng Cao",
  "capabilitiesSubtitle": "Bộ công cụ mạnh mẽ để quản lý, tự động hóa và tối ưu hóa từng khâu trong quy trình gửi SMS của bạn.",
  "features": [
    {
      "title": "Chiến Dịch SMS Hàng Loạt",
      "desc": "Gửi hàng nghìn hoặc hàng triệu tin nhắn với công cụ quản lý chiến dịch mạnh mẽ, đặt lịch gửi, phân khúc tệp khách hàng và theo dõi tỷ lệ phát thành công."
    },
    {
      "title": "SMS Tương Tác Hai Chiều (Two-Way SMS)",
      "desc": "Nhận phản hồi và duy trì cuộc trò chuyện trực tiếp trên cùng một nền tảng. Rất thích hợp cho chăm sóc khách hàng, thông báo giao dịch và xác minh bảo mật."
    },
    {
      "title": "API SMS Tích Hợp",
      "desc": "Kết nối ứng dụng, CRM, website bán hàng hoặc phần mềm doanh nghiệp của bạn với REST API mạnh mẽ để tự động hóa hoàn toàn quy trình."
    },
    {
      "title": "Quản Lý Tên Định Danh (Sender ID)",
      "desc": "Khởi tạo và quản lý linh hoạt nhiều Brandname/Sender ID theo từng quốc gia, chiến dịch, thương hiệu hoặc yêu cầu pháp lý."
    },
    {
      "title": "Định Tuyến Thông Minh (Smart Routing)",
      "desc": "Hệ thống tự động chọn tuyến đường truyền tốt nhất dựa trên nhà mạng, chi phí, chất lượng âm thanh/dữ liệu và tỷ lệ giao tin thành công."
    },
    {
      "title": "Báo Cáo Trạng Thái Chi Tiết (DLR)",
      "desc": "Giám sát trạng thái tin nhắn tức thì: Đã giao, Thất bại, Đang chờ, Hết hạn và Bị từ chối với dữ liệu rõ ràng."
    }
  ],
  "visibilityBadge": "MINH BẠCH & KIỂM SOÁT",
  "visibilityTitle": "Nắm Bắt Chính Xác Điều Gì Đang Diễn Ra Với Mỗi Tin Nhắn",
  "visibilitySubtitle": "Xem xét toàn cảnh lưu lượng SMS của bạn với bảng phân tích và báo cáo số liệu chuyên sâu theo thời gian thực.",
  "visibilityBullets": [
    "Giám sát lưu lượng tin nhắn SMS trực tiếp",
    "Phân tích hiệu suất từng luồng định tuyến",
    "Đo lường hiệu quả các chiến dịch tiếp thị",
    "Cảnh báo tự động ngay khi có sự cố bất thường",
    "Thống kê chi tiết tỷ lệ thành công và mã lỗi",
    "Báo cáo chi phí và lưu lượng sử dụng",
    "Giám sát lưu lượng gọi qua API",
    "Báo cáo tổng hợp theo quốc gia và nhà mạng di động",
    "Báo cáo chi tiết theo từng tài khoản khách hàng",
    "Xuất và tải dữ liệu báo cáo nhanh chóng"
  ],
  "enterpriseBadge": "CHUẨN DOANH NGHIỆP",
  "enterpriseTitle": "Được Xây Dựng Cho Đại Lý, Doanh Nghiệp Lớn & Nhà Cung Cấp SMS",
  "enterpriseSubtitle": "Quản trị người dùng, chính sách giá và hạ tầng công nghệ đằng sau một hệ thống tin nhắn quy mô mở rộng.",
  "enterpriseCards": {
    "card1": {
      "title": "Không gian của bạn. Thương hiệu của bạn.",
      "header": "Phân quyền không gian làm việc",
      "user1Name": "Aisha Morgan",
      "user1Role": "Quản trị viên",
      "user2Name": "James Lee",
      "user2Role": "Vận hành",
      "user3Name": "Sara Khan",
      "user3Role": "Tài chính",
      "protectionText": "Bảo vệ lưu lượng đang hoạt động",
      "bullets": [
        "Phân quyền đa người dùng theo vai trò (RBAC)",
        "Cổng thông tin White-label mang thương hiệu riêng",
        "Quản lý khách hàng và tài khoản phụ nhiều cấp",
        "Hệ thống giám sát chống gian lận và tin nhắn rác"
      ],
      "note": "Giao diện cấu hình minh họa"
    },
    "card2": {
      "title": "Kiểm soát tài chính và cước phí đơn giản hóa.",
      "header": "Ví tài khoản và số dư",
      "amount": "$4,850.00",
      "sub": "Số dư khả dụng • USD",
      "stat1Label": "Tiêu dùng tháng 10",
      "stat1Val": "$2,569.00",
      "stat2Label": "Nạp tiền gần nhất",
      "stat2Val": "+$5,000.00",
      "pillText": "Thanh toán tự động đang bật",
      "bullets": [
        "Quản lý số dư ví và hạn mức tín dụng",
        "Thiết lập bảng cước linh hoạt",
        "Hóa đơn và thanh toán tự động",
        "Lịch sử giao dịch minh bạch và đầy đủ"
      ],
      "note": "Giao diện cấu hình minh họa"
    },
    "card3": {
      "title": "Giá cả linh hoạt. Kết nối đa tuyến.",
      "header": "Bảng giá & kênh kết nối",
      "row1Country": "Vương quốc Anh (UK)",
      "row1Type": "Nhà mạng trực tiếp",
      "row1Rate": "$0.018",
      "row2Country": "Ấn Độ (India)",
      "row2Type": "A2P Cao cấp",
      "row2Rate": "$0.012",
      "row3Country": "Hoa Kỳ (US)",
      "row3Type": "A2P Tiêu chuẩn",
      "row3Rate": "$0.022",
      "pill1": "SMPP trực tuyến",
      "pill2": "API trực tuyến",
      "bullets": [
        "Định giá riêng theo từng quốc gia",
        "Định giá theo cấp độ chất lượng tuyến",
        "Tích hợp nhiều nhà cung cấp viễn thông",
        "Kết nối thông lượng cao qua SMPP và REST API"
      ],
      "note": "Giao diện cấu hình minh họa"
    }
  },
  "workflowBadge": "QUY TRÌNH NỀN TẢNG",
  "workflowTitle": "Từ Soạn Tin Nhắn Đến Khi Người Nhận Mở Máy",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Khởi Tạo Chiến Dịch",
      "desc": "Soạn nội dung tin nhắn, lựa chọn danh sách người nhận và lên lịch trình gửi tối ưu."
    },
    {
      "step": "02",
      "title": "Định Tuyến Thông Minh",
      "desc": "Tự động phân bổ mỗi tin nhắn vào luồng truyền dẫn nhanh và ổn định nhất."
    },
    {
      "step": "03",
      "title": "Chuyển Phát Toàn Cầu",
      "desc": "Tiếp cận các mạng di động trên toàn thế giới thông qua hạ tầng viễn thông kết nối trực tiếp."
    },
    {
      "step": "04",
      "title": "Báo Cáo Tức Thì",
      "desc": "Theo dõi biên nhận giao hàng, tốc độ truyền và chi phí ngay trên cổng thông tin của bạn."
    }
  ],
  "ctaBadge": "HÃY CÙNG XÂY DỰNG MẠNG LƯỚI TIN NHẮN CỦA BẠN",
  "ctaTitle": "Tăng Trưởng Doanh Nghiệp Với Giải Pháp SMS Doanh Nghiệp Toàn Cầu",
  "ctaSubtitle": "Từ định tuyến thoại thông minh và chuyển tiếp quốc tế đến Thoại AI và đầu số ảo DID, iNet Global cung cấp các giải pháp viễn thông linh hoạt giúp doanh nghiệp kết nối với khách hàng một cách rõ ràng, ổn định và hiệu quả trên toàn cầu.",
  "contactUs": "Liên Hệ Với Chúng Tôi",
  "ctaTrust1": "Cam Kết Chất Lượng SLA Doanh Nghiệp 99.99%",
  "ctaTrust2": "Kích Hoạt Nhanh Chóng Cổng API & SMPP",
  "ctaTrust3": "Kết Nối Trực Tiếp Nhà Mạng Viễn Thông Cấp 1 Toàn Cầu"
};

const pl: OtpSmsTranslation = {
  "heroBadge": "ROZWIĄZANIE PORTALU SMS",
  "heroTitle": "Zaawansowany Portal SMS Stworzony do Masowej Komunikacji Biznesowej",
  "heroSubtitle": "Wysyłaj, odbieraj, zarządzaj i monitoruj firmowe wiadomości SMS z poziomu jednej inteligentnej platformy.",
  "heroDesc": "Od pojedynczych kodów uwierzytelniających po globalne kampanie marketingowe – nasz Portal SMS zapewnia narzędzia, automatyzację, inteligentny routing i analitykę niezbędne do w pełni niezawodnej komunikacji.",
  "getStarted": "Rozpocznij Teraz",
  "bookDemo": "Zamów Prezentację",
  "heroFeatures": [
    {
      "title": "Globalny Zasięg SMS"
    },
    {
      "title": "Zaawansowany Routing"
    },
    {
      "title": "Masowe SMS i Kampanie"
    },
    {
      "title": "Komunikacja Dwukierunkowa"
    },
    {
      "title": "Łatwa Integracja API"
    },
    {
      "title": "Raporty Doręczeń w Czasie Rzeczywistym"
    }
  ],
  "managementBadge": "PLATFORMA ZARZĄDZANIA SMS",
  "managementTitle": "Wszystko, Czego Potrzebujesz do Sprawnego Zarządzania SMS-ami",
  "platformControlTitle": "Jedna Platforma. Pełna Kontrola nad SMS.",
  "platformControlDesc": "Zarządzaj całą komunikacją tekstową ze scentralizowanego panelu, stworzonego z myślą o szybkości, przejrzystości i elastycznej skalowalności.",
  "platformControlBullets": [
    "Twórz, personalizuj i planuj wysyłkę kampanii w prosty sposób",
    "Gromadź kontakty i historię dialogów w jednym wspólnym obszarze roboczym",
    "Śledź statusy doręczeń, trasy operatorów i koszty na bieżąco"
  ],
  "campaignCard": {
    "title": "Utwórz kampanię",
    "draftBadge": "Wersja robocza zapisana",
    "step1": "01 Treść",
    "step2": "02 Odbiorcy",
    "step3": "03 Harmonogram",
    "senderLabel": "Pole Nadawcy (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Grupa odbiorców",
    "audienceVal": "Aktualizacje zamówień • 24 850 kontaktów",
    "messageLabel": "Treść wiadomości",
    "messageText": "Cześć {first_name}, Twoje zamówienie {order_id} zostało wysłane. Śledź przesyłkę: {tracking_url}. Odpowiedz HELP, aby uzyskać pomoc.",
    "personalizedBadge": "Zmienne dynamiczne aktywne",
    "charCount": "118 / 160",
    "repliesTitle": "Odpowiedzi klientów",
    "repliesBadge": "Dwukierunkowy SMS",
    "inboundText": "Twoja przesyłka jest w drodze. Odpowiedz HELP, aby uzyskać wsparcie.",
    "inboundTime": "10:42 • Doręczono",
    "replyText": "Dziękuję! Czy mogę zmienić preferowaną godzinę dostawy?"
  },
  "capabilitiesBadge": "MOŻLIWOŚCI MESSAGINGU",
  "capabilitiesTitle": "Zaawansowane Funkcje SMS",
  "capabilitiesSubtitle": "Niezawodne narzędzia do zarządzania, automatyzacji i optymalizacji każdego etapu Twojej komunikacji SMS.",
  "features": [
    {
      "title": "Masowe Kampanie SMS",
      "desc": "Wysyłaj tysiące lub miliony wiadomości dzięki zaawansowanemu modułowi kampanii, harmonogramom wysyłek, segmentacji baz i śledzeniu doręczeń."
    },
    {
      "title": "Dwukierunkowe SMS-y (Two-Way SMS)",
      "desc": "Odbieraj odpowiedzi i prowadź bezpośredni dialog z klientami na tej samej platformie. Doskonałe dla obsługi klienta, alertów i weryfikacji."
    },
    {
      "title": "Interfejs SMS API",
      "desc": "Połącz swoje aplikacje, system CRM, sklep internetowy lub oprogramowanie firmowe za pośrednictwem REST API i zautomatyzuj procesy wysyłki."
    },
    {
      "title": "Zarządzanie Sender ID",
      "desc": "Twórz i rejestruj alfanumeryczne nazwy nadawcy dostosowane do kraju docelowego, kampanii, marki lub lokalnych przepisów prawnych."
    },
    {
      "title": "Inteligentny Routing",
      "desc": "Automatyczny wybór najszybszej i najbardziej opłacalnej trasy w oparciu o kraj, operatora, koszt i wskaźniki skuteczności dostarczenia."
    },
    {
      "title": "Raporty Doręczeń (DLR)",
      "desc": "Monitoruj statusy wiadomości na żywo: Doręczona, Nieudana, Oczekująca, Wygasła oraz Odrzucona."
    }
  ],
  "visibilityBadge": "PRZEJRZYSTOŚĆ I KONTROLA",
  "visibilityTitle": "Wiedz Dokładnie, Co Dzieje się z Każdą Wiadomością",
  "visibilitySubtitle": "Zyskaj pełną kontrolę nad ruchem SMS dzięki zaawansowanym analizom i szczegółowym raportom w czasie rzeczywistym.",
  "visibilityBullets": [
    "Bieżący monitoring ruchu SMS na żywo",
    "Analiza wydajności poszczególnych tras operatorów",
    "Wskaźniki skuteczności i konwersji kampanii",
    "Automatyczne powiadomienia o incydentach",
    "Precyzyjne statystyki doręczeń i kodów błędów",
    "Szczegółowe zestawienia kosztów i zużycia",
    "Monitoring zapytań i obciążenia interfejsu API",
    "Raporty zagregowane według krajów i sieci komórkowych",
    "Raporty rozliczeniowe dla poszczególnych subkont",
    "Błyskawiczny eksport i pobieranie danych"
  ],
  "enterpriseBadge": "GOTOWY DLA KORPORACJI",
  "enterpriseTitle": "Stworzony dla Resellerów, Przedsiębiorstw i Dostawców Usług SMS",
  "enterpriseSubtitle": "Zarządzaj zespołem, cennikami i infrastrukturą technologiczną dużej operacji telekomunikacyjnej.",
  "enterpriseCards": {
    "card1": {
      "title": "Twoja przestrzeń. Twoja marka.",
      "header": "Uprawnienia w przestrzeni roboczej",
      "user1Name": "Aisha Morgan",
      "user1Role": "Administrator",
      "user2Name": "James Lee",
      "user2Role": "Operator",
      "user3Name": "Sara Khan",
      "user3Role": "Finanse",
      "protectionText": "Ochrona ruchu aktywna",
      "bullets": [
        "Wielopoziomowy dostęp oparty na rolach (RBAC)",
        "Dedykowany portal White-label z Twoim logo",
        "Elastyczne zarządzanie kontami klientów",
        "Zaawansowane wykrywanie nadużyć i fraudów"
      ],
      "note": "Konfiguracja przykładowa"
    },
    "card2": {
      "title": "Kontrola finansowa bez komplikacji.",
      "header": "Portfel konta i saldo",
      "amount": "$4,850.00",
      "sub": "Dostępne środki • USD",
      "stat1Label": "Zużycie w październiku",
      "stat1Val": "$2,569.00",
      "stat2Label": "Ostatnie doładowanie",
      "stat2Val": "+$5,000.00",
      "pillText": "Automatyczne fakturowanie włączone",
      "bullets": [
        "Zarządzanie stanem konta i limitami kredytowymi",
        "Konfiguracja elastycznych tabel stawek (Rate Cards)",
        "Zautomatyzowane fakturowanie",
        "Pełna i przejrzysta historia transakcji"
      ],
      "note": "Konfiguracja przykładowa"
    },
    "card3": {
      "title": "Elastyczne stawki. Zintegrowane łącza.",
      "header": "Cenniki i bezpośrednie trasy",
      "row1Country": "Wielka Brytania",
      "row1Type": "Bezpośredni Operator",
      "row1Rate": "$0.018",
      "row2Country": "Indie",
      "row2Type": "A2P Premium",
      "row2Rate": "$0.012",
      "row3Country": "USA",
      "row3Type": "A2P Standard",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Indywidualne stawki według krajów",
        "Wycena zależna od jakości trasy tranzytowej",
        "Integracja wielu dostawców telekomunikacyjnych",
        "Łączność o wysokiej przepustowości przez SMPP i API"
      ],
      "note": "Konfiguracja przykładowa"
    }
  },
  "workflowBadge": "PRZEBIEG PROCESU WYSYŁKI",
  "workflowTitle": "Od Stworzenia Wiadomości do Dostarczenia na Telefon",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Utwórz Kampanię",
      "desc": "Przygotuj treść, wskaż bazę odbiorców i ustaw najbardziej optymalny czas doręczenia."
    },
    {
      "step": "02",
      "title": "Inteligentny Routing",
      "desc": "System automatycznie kieruje każdy SMS do najszybszego i niezawodnego łącza operatora."
    },
    {
      "step": "03",
      "title": "Globalne Doręczenie",
      "desc": "Błyskawiczne dotarcie do sieci komórkowych na całym świecie dzięki bezpośredniej infrastrukturze."
    },
    {
      "step": "04",
      "title": "Raportowanie na Żywo",
      "desc": "Śledź potwierdzenia odbioru, parametry jakościowe i koszty bezpośrednio w panelu klienta."
    }
  ],
  "ctaBadge": "ZBUDUJMY TWOJĄ GLOBALNĄ SIEĆ KOMUNIKACJI",
  "ctaTitle": "Rozwijaj Swoją Firmę z Biznesowymi Rozwiązaniami SMS",
  "ctaSubtitle": "Od inteligentnego routingu połączeń głosowych i międzynarodowej terminacji wholesale po asystentów Voice AI i wirtualne numery DID – iNet Global dostarcza skalowalne technologie telekomunikacyjne, łącząc firmy z klientami na całym świecie.",
  "contactUs": "Skontaktuj się z Nami",
  "ctaTrust1": "Gwarancja SLA na Poziomie 99.99%",
  "ctaTrust2": "Błyskawiczna Konfiguracja API & SMPP",
  "ctaTrust3": "Bezpośrednie Styki z Operatorami Tier-1"
};

const th: OtpSmsTranslation = {
  "heroBadge": "โซลูชัน SMS พอร์ทัลสำหรับองค์กร",
  "heroTitle": "SMS พอร์ทัลประสิทธิภาพสูง ออกแบบมาเพื่อการส่งข้อความปริมาณมาก",
  "heroSubtitle": "ส่ง รับ จัดการ และตรวจสอบ SMS ธุรกิจของคุณได้อย่างครอบคลุมจากแพลตฟอร์มอัจฉริยะเพียงแห่งเดียว",
  "heroDesc": "ตั้งแต่รหัสยืนยัน OTP รายข้อความ ไปจนถึงแคมเปญการตลาดระดับองค์กรขนาดใหญ่ SMS พอร์ทัลของเรามีเครื่องมือ ระบบอัตโนมัติ การกำหนดเส้นทางอัจฉริยะ และการวิเคราะห์ที่คุณต้องการเพื่อการสื่อสารที่เสถียรและมั่นใจได้สูงสุด",
  "getStarted": "เริ่มต้นใช้งาน",
  "bookDemo": "นัดหมายชมการสาธิต",
  "heroFeatures": [
    {
      "title": "ครอบคลุมเครือข่ายทั่วโลก"
    },
    {
      "title": "ระบบกำหนดเส้นทางอัจฉริยะ"
    },
    {
      "title": "SMS จำนวนมากและแคมเปญ"
    },
    {
      "title": "ระบบส่งข้อความสองทาง (2-Way)"
    },
    {
      "title": "เชื่อมต่อ API ได้ง่ายดาย"
    },
    {
      "title": "รายงานสถานะแบบเรียลไทม์"
    }
  ],
  "managementBadge": "แพลตฟอร์มการจัดการ SMS",
  "managementTitle": "ทุกสิ่งที่คุณต้องการเพื่อการบริหารจัดการ SMS อย่างมืออาชีพ",
  "platformControlTitle": "แพลตฟอร์มเดียว ควบคุมระบบ SMS ได้อย่างสมบูรณ์แบบ",
  "platformControlDesc": "บริหารจัดการการส่งข้อความทั้งหมดของคุณจากแดชบอร์ดศูนย์กลางที่ออกแบบมาเพื่อความรวดเร็ว ความโปร่งใส และความสามารถในการขยายขนาดอย่างไร้ขีดจำกัด",
  "platformControlBullets": [
    "เขียน ปรับแต่งฟิลด์เฉพาะบุคคล และกำหนดเวลาส่งแคมเปญได้อย่างง่ายดาย",
    "รวบรวมรายชื่อผู้ติดต่อและบทสนทนาไว้ในพื้นที่ทำงานเดียว",
    "ติดตามสถานะการจัดส่ง เส้นทางเครือข่าย และค่าใช้จ่ายได้แบบเรียลไทม์"
  ],
  "campaignCard": {
    "title": "สร้างแคมเปญข้อความ",
    "draftBadge": "บันทึกฉบับร่างแล้ว",
    "step1": "01 เขียนข้อความ",
    "step2": "02 กลุ่มเป้าหมาย",
    "step3": "03 กำหนดเวลา",
    "senderLabel": "ชื่อผู้ส่ง (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "ผู้รับ",
    "audienceVal": "อัปเดตคำสั่งซื้อ • 24,850 รายชื่อ",
    "messageLabel": "ข้อความ",
    "messageText": "สวัสดีคุณ {first_name} คำสั่งซื้อ {order_id} ของคุณจัดส่งแล้ว ติดตามพัสดุได้ที่ {tracking_url} ตอบ HELP เพื่อขอความช่วยเหลือ",
    "personalizedBadge": "เปิดใช้งานฟิลด์ข้อมูลเฉพาะบุคคล",
    "charCount": "118 / 160",
    "repliesTitle": "ข้อความตอบกลับจากลูกค้า",
    "repliesBadge": "SMS สองทาง",
    "inboundText": "คำสั่งซื้อของคุณกำลังเดินทาง ตอบ HELP หากต้องการความช่วยเหลือ",
    "inboundTime": "10:42 • จัดส่งสำเร็จ",
    "replyText": "ขอบคุณมากครับ! ขอเปลี่ยนเวลาจัดส่งได้ไหมครับ?"
  },
  "capabilitiesBadge": "ศักยภาพการส่งข้อความ",
  "capabilitiesTitle": "คุณสมบัติ SMS ขั้นสูง",
  "capabilitiesSubtitle": "เครื่องมือทรงพลังเพื่อจัดการ ดำเนินการอัตโนมัติ และเพิ่มประสิทธิภาพการทำงานของ SMS ในทุกขั้นตอน",
  "features": [
    {
      "title": "แคมเปญ SMS จำนวนมาก",
      "desc": "ส่งข้อความนับหมื่นหรือนับล้านได้อย่างราบรื่นด้วยระบบจัดการแคมเปญ การตั้งเวลา การแบ่งกลุ่มผู้รับ และการติดตามการส่งอย่างแม่นยำ"
    },
    {
      "title": "SMS แบบสองทาง (Two-Way SMS)",
      "desc": "รับข้อความตอบกลับและพูดคุยโต้ตอบกับลูกค้าได้บนแพลตฟอร์มเดียวกัน เหมาะสำหรับฝ่ายบริการลูกค้า การแจ้งเตือน และการมีส่วนร่วม"
    },
    {
      "title": "SMS API สำหรับนักพัฒนา",
      "desc": "เชื่อมต่อแอปพลิเคชัน, CRM, เว็บไซต์ หรือระบบ ERP ภายในองค์กรของคุณผ่าน REST API ประสิทธิภาพสูงเพื่อระบบอัตโนมัติที่สมบูรณ์"
    },
    {
      "title": "การจัดการ Sender ID",
      "desc": "สร้างและจัดการชื่อผู้ส่งข้อความ (Sender ID) หลากหลายชื่อตามประเทศปลายทาง แคมเปญ แบรนด์ หรือข้อกำหนดทางกฎหมาย"
    },
    {
      "title": "การกำหนดเส้นทางอัจฉริยะ (Smart Routing)",
      "desc": "เลือกลิงก์และเส้นทางที่ดีที่สุดโดยอัตโนมัติตามเครือข่ายปลายทาง ต้นทุน คุณภาพสัญญาณ และอัตราความสำเร็จในการส่ง"
    },
    {
      "title": "รายงานการจัดส่งแบบเรียลไทม์ (DLR)",
      "desc": "ตรวจสอบสถานะของทุกข้อความได้ทันที: ส่งสำเร็จ, ล้มเหลว, กำลังรอ, หมดเวลา หรือถูกปฏิเสธ พร้อมข้อมูลวิเคราะห์เชิงลึก"
    }
  ],
  "visibilityBadge": "การมองเห็นและการควบคุม",
  "visibilityTitle": "รู้ทุกความเคลื่อนไหวของทุกข้อความที่ถูกส่ง",
  "visibilitySubtitle": "เห็นภาพรวมการรับส่ง SMS ทั้งหมดด้วยระบบวิเคราะห์และรายงานสรุปผลแบบเรียลไทม์",
  "visibilityBullets": [
    "ติดตามปริมาณการรับส่ง SMS แบบสด",
    "วิเคราะห์ประสิทธิภาพของแต่ละเส้นทางเครือข่าย",
    "วัดผลความสำเร็จของแต่ละแคมเปญ",
    "ระบบแจ้งเตือนข้อผิดพลาดทันที",
    "สถิติความสำเร็จและสาเหตุของข้อผิดพลาด",
    "รายงานค่าใช้จ่ายและปริมาณการใช้งานแบบละเอียด",
    "ตรวจสอบการเรียกใช้งานผ่าน API",
    "รายงานแยกตามรายประเทศและเครือข่ายมือถือ",
    "รายงานสรุปสำหรับลูกค้ารายย่อยและบัญชีย่อย",
    "ดาวน์โหลดและส่งออกข้อมูลรายงานได้ทันที"
  ],
  "enterpriseBadge": "พร้อมสำหรับระดับองค์กร",
  "enterpriseTitle": "สร้างขึ้นสำหรับตัวแทนจำหน่าย องค์กรธุรกิจ และผู้ให้บริการ SMS",
  "enterpriseSubtitle": "จัดการสิทธิ์ทีมงาน โครงสร้างราคา และโครงสร้างพื้นฐานเบื้องหลังธุรกิจข้อความขนาดใหญ่ได้อย่างมีประสิทธิภาพ",
  "enterpriseCards": {
    "card1": {
      "title": "พื้นที่ทำงานของคุณ แบรนด์ของคุณ",
      "header": "การเข้าถึงพื้นที่ทำงาน",
      "user1Name": "Aisha Morgan",
      "user1Role": "ผู้ดูแลระบบ",
      "user2Name": "James Lee",
      "user2Role": "เจ้าหน้าที่ปฏิบัติการ",
      "user3Name": "Sara Khan",
      "user3Role": "ฝ่ายการเงิน",
      "protectionText": "ระบบปกป้องการรับส่งข้อมูลทำงานอยู่",
      "bullets": [
        "การกำหนดสิทธิ์ผู้ใช้หลายระดับตามบทบาท (RBAC)",
        "พอร์ทัลแบบ White-label ภายใต้แบรนด์ของคุณเอง",
        "การจัดการบัญชีลูกค้าและบัญชีย่อยหลายระดับ",
        "ระบบตรวจสอบและป้องกันการทุจริตแบบเรียลไทม์"
      ],
      "note": "ภาพจำลองการกำหนดค่า"
    },
    "card2": {
      "title": "การควบคุมเชิงพาณิชย์ที่ง่ายดาย",
      "header": "กระเป๋าเงินและยอดเงินคงเหลือ",
      "amount": "$4,850.00",
      "sub": "เครดิตที่ใช้ได้ • USD",
      "stat1Label": "ยอดใช้งานเดือนตุลาคม",
      "stat1Val": "$2,569.00",
      "stat2Label": "เติมเงินล่าสุด",
      "stat2Val": "+$5,000.00",
      "pillText": "เปิดใช้งานการเรียกเก็บเงินอัตโนมัติ",
      "bullets": [
        "การจัดการยอดเงินและวงเงินเครดิต",
        "การตั้งค่าตารางอัตราค่าบริการที่ยืดหยุ่น",
        "ระบบออกใบแจ้งหนี้อัตโนมัติ",
        "ประวัติการทำธุรกรรมที่โปร่งใสและครบถ้วน"
      ],
      "note": "ภาพจำลองการกำหนดค่า"
    },
    "card3": {
      "title": "ราคาที่ยืดหยุ่น เส้นทางที่เชื่อมโยงทั่วโลก",
      "header": "ราคาและการเชื่อมต่อเครือข่าย",
      "row1Country": "สหราชอาณาจักร (UK)",
      "row1Type": "ผู้ให้บริการโดยตรง",
      "row1Rate": "$0.018",
      "row2Country": "อินเดีย (India)",
      "row2Type": "A2P พรีเมียม",
      "row2Rate": "$0.012",
      "row3Country": "สหรัฐอเมริกา (US)",
      "row3Type": "A2P มาตรฐาน",
      "row3Rate": "$0.022",
      "pill1": "SMPP ออนไลน์",
      "pill2": "API ออนไลน์",
      "bullets": [
        "การกำหนดราคาเฉพาะตามแต่ละประเทศ",
        "อัตราค่าบริการตามระดับคุณภาพของเส้นทาง",
        "เชื่อมโยงผู้ให้บริการเครือข่ายหลายรายพร้อมกัน",
        "การเชื่อมต่อความเร็วสูงผ่าน SMPP และ REST API"
      ],
      "note": "ภาพจำลองการกำหนดค่า"
    }
  },
  "workflowBadge": "ขั้นตอนการทำงานของแพลตฟอร์ม",
  "workflowTitle": "ตั้งแต่การสร้างข้อความไปจนถึงการส่งถึงมือผู้รับ",
  "workflowSteps": [
    {
      "step": "01",
      "title": "สร้างแคมเปญ",
      "desc": "เขียนข้อความ เลือกกลุ่มเป้าหมายผู้รับ และกำหนดเวลาส่งที่เหมาะสมที่สุด"
    },
    {
      "step": "02",
      "title": "กำหนดเส้นทางอัจฉริยะ",
      "desc": "จับคู่แต่ละข้อความกับเส้นทางเครือข่ายที่ดีที่สุดตามปลายทางและความเร็ว"
    },
    {
      "step": "03",
      "title": "จัดส่งทั่วโลก",
      "desc": "ส่งตรงถึงเครือข่ายมือถือทั่วโลกผ่านโครงสร้างพื้นฐานโทรคมนาคมที่เชื่อมต่อโดยตรง"
    },
    {
      "step": "04",
      "title": "รายงานแบบเรียลไทม์",
      "desc": "ติดตามใบตอบรับการส่ง ประสิทธิภาพ และค่าใช้จ่ายได้สดๆ บนพอร์ทัลของคุณ"
    }
  ],
  "ctaBadge": "มาร่วมสร้างเครือข่ายการส่งข้อความของคุณ",
  "ctaTitle": "ขยายธุรกิจของคุณด้วยโซลูชัน SMS ระดับองค์กร",
  "ctaSubtitle": "ตั้งแต่การกำหนดเส้นทางเสียงอัจฉริยะและการยุติสายระหว่างประเทศ ไปจนถึง AI Voice และหมายเลขเสมือน DID – iNet Global มอบโซลูชันโทรคมนาคมที่ปรับขนาดได้ เพื่อช่วยให้ธุรกิจเชื่อมต่อกับลูกค้าได้อย่างชัดเจน เสถียร และมีประสิทธิภาพในทุกตลาดทั่วโลก",
  "contactUs": "ติดต่อเรา",
  "ctaTrust1": "รับประกัน SLA ระดับองค์กร 99.99%",
  "ctaTrust2": "ติดตั้งและเริ่มใช้งาน API & SMPP ได้ทันที",
  "ctaTrust3": "เชื่อมต่อตรงกับผู้ให้บริการเครือข่าย Tier-1 ทั่วโลก"
};

const tl: OtpSmsTranslation = {
  "heroBadge": "SOLUSYON SA SMS PORTAL",
  "heroTitle": "Makapangyarihang SMS Portal na Binuo para sa Malakihang Pagmemensahe",
  "heroSubtitle": "Magpadala, tumanggap, mamahala, at sumubaybay ng pangnegosyong SMS mula sa iisang intelihenteng platform.",
  "heroDesc": "Mula sa mga indibidwal na verification code hanggang sa malalaking campaign ng korporasyon, ibinibigay ng aming SMS Portal ang mga tool, automation, routing, at analytics na kailangan mo para sa maaasahang komunikasyon.",
  "getStarted": "Magsimula Na",
  "bookDemo": "Mag-book ng Demo",
  "heroFeatures": [
    {
      "title": "Pandaigdigang Saklaw ng SMS"
    },
    {
      "title": "Mataas na Uri ng Smart Routing"
    },
    {
      "title": "Maramihang SMS at Campaign"
    },
    {
      "title": "Two-Way na Pagmemensahe"
    },
    {
      "title": "Madaling Pagsasama ng API"
    },
    {
      "title": "Ulat ng Paghahatid sa Real-Time"
    }
  ],
  "managementBadge": "PLATFORM SA PAMAMAHALA NG SMS",
  "managementTitle": "Lahat ng Kailangan Mo Para Pamahalaan ang SMS",
  "platformControlTitle": "Isang Platform. Ganap na Kontrol sa SMS.",
  "platformControlDesc": "Pamahalaan ang iyong buong operasyon sa pagmemensahe mula sa isang sentralisadong dashboard na dinisenyo para sa bilis, kalinawan, at scalability.",
  "platformControlBullets": [
    "Gumawa, mag-personalize, at mag-iskedyul ng mga campaign",
    "Pagsama-samahin ang mga contact at usapan sa iisang workspace",
    "Subaybayan ang paghahatid, routing, at paggamit habang gumagalaw ang mga mensahe"
  ],
  "campaignCard": {
    "title": "Gumawa ng campaign",
    "draftBadge": "Nai-save ang draft",
    "step1": "01 Gumawa",
    "step2": "02 Audience",
    "step3": "03 Iskedyul",
    "senderLabel": "Sender ID",
    "senderVal": "iNet",
    "audienceLabel": "Audience",
    "audienceVal": "Mga update sa order • 24,850 contact",
    "messageLabel": "Mensahe",
    "messageText": "Kumusta {first_name}, naipadala na ang iyong order {order_id}. I-track sa {tracking_url}. Mag-reply ng HELP para sa tulong.",
    "personalizedBadge": "Naka-enable ang mga personalized field",
    "charCount": "118 / 160",
    "repliesTitle": "Mga tugon ng customer",
    "repliesBadge": "2-way SMS",
    "inboundText": "Paparating na ang iyong order. Mag-reply ng HELP para sa suporta.",
    "inboundTime": "10:42 • Naihatid",
    "replyText": "Salamat! Maaari ko bang baguhin ang oras ng paghahatid?"
  },
  "capabilitiesBadge": "MGA KAKAYAHAN SA PAGMEMENSAHE",
  "capabilitiesTitle": "Mga Advanced na Tampok ng SMS",
  "capabilitiesSubtitle": "Mga makapangyarihang tool para pamahalaan, i-automate, at i-optimize ang bawat bahagi ng iyong operasyon sa SMS.",
  "features": [
    {
      "title": "Maramihang SMS Campaign",
      "desc": "Magpadala ng libo-libo o milyun-milyong mensahe na may mahusay na pamamahala sa campaign, pag-iiskedyul, segmentation ng contact, at pagsubaybay."
    },
    {
      "title": "Two-Way SMS",
      "desc": "Tumanggap ng mga tugon at pamahalaan ang mga pag-uusap mula sa parehong platform. Tamang-tama para sa suporta sa customer at pakikipag-ugnayan."
    },
    {
      "title": "SMS API",
      "desc": "Ikonekta ang iyong mga application, CRM, website, o software sa negosyo gamit ang aming REST API at i-automate ang mga daloy ng trabaho."
    },
    {
      "title": "Pamamahala ng Sender ID",
      "desc": "Lumikha at mamahala ng maraming Sender ID batay sa destinasyon, campaign, tatak, o mga kinakailangan ng customer."
    },
    {
      "title": "Smart Routing",
      "desc": "Awtomatikong piliin ang pinakamahusay na magagamit na ruta batay sa destinasyon, carrier, gastos, kalidad, at pagganap ng paghahatid."
    },
    {
      "title": "Mga Ulat sa Paghahatid",
      "desc": "Subaybayan ang katayuan ng mensahe sa real time na may mga detalyadong ulat ng Naihatid, Nabigo, Nakabinbin, Nag-expire, at Tinanggihan."
    }
  ],
  "visibilityBadge": "PAGKITA AT KONTROL",
  "visibilityTitle": "Alamin Kung Ano ang Nangyayari sa Bawat Mensahe",
  "visibilitySubtitle": "Kumuha ng kumpletong visibility sa iyong trapiko sa SMS na may real-time na analytics at pag-uulat.",
  "visibilityBullets": [
    "Real-time na pagsubaybay sa trapiko ng SMS",
    "Analytics sa pagganap ng ruta",
    "Pagganap ng campaign",
    "Mga alerto sa real-time",
    "Mga istatistika ng paghahatid at pagkabigo",
    "Mga ulat sa gastos at paggamit",
    "Pagsubaybay sa trapiko ng API",
    "Mga ulat sa antas ng bansa at carrier",
    "Mga ulat batay sa customer o account",
    "Mada-download na mga detalyadong ulat"
  ],
  "enterpriseBadge": "HANDA PARA SA ENTERPRISE",
  "enterpriseTitle": "Binuo para sa mga Reseller, Enterprise at SMS Provider",
  "enterpriseSubtitle": "Pamahalaan ang mga tao, pagpepresyo, at imprastraktura sa likod ng isang nasusukat na negosyo sa pagmemensahe.",
  "enterpriseCards": {
    "card1": {
      "title": "Ang iyong workspace. Ang iyong tatak.",
      "header": "Access sa workspace",
      "user1Name": "Aisha Morgan",
      "user1Role": "Admin",
      "user2Name": "James Lee",
      "user2Role": "Operator",
      "user3Name": "Sara Khan",
      "user3Role": "Pananalapi",
      "protectionText": "Aktibo ang proteksyon sa trapiko",
      "bullets": [
        "Multi-user at role-based na access (RBAC)",
        "White-label portal na may sariling tatak",
        "Pamamahala ng customer sa maraming antas",
        "Pagsubaybay sa pandaraya at pang-aabuso"
      ],
      "note": "Naglalarawang pagsasaayos"
    },
    "card2": {
      "title": "Komersyal na kontrol, pinasimple.",
      "header": "Wallet at balanse ng account",
      "amount": "$4,850.00",
      "sub": "Magagamit na credit • USD",
      "stat1Label": "Paggamit sa Oktubre",
      "stat1Val": "$2,569.00",
      "stat2Label": "Huling top-up",
      "stat2Val": "+$5,000.00",
      "pillText": "Naka-enable ang auto billing",
      "bullets": [
        "Pamamahala ng wallet at credit",
        "Pamamahala ng mga taripa at rate",
        "Awtomatikong pagsingil",
        "Kumpletong kasaysayan ng transaksyon"
      ],
      "note": "Naglalarawang pagsasaayos"
    },
    "card3": {
      "title": "May kakayahang umangkop na presyo. Konektadong mga ruta.",
      "header": "Pagpepresyo at koneksyon",
      "row1Country": "UK",
      "row1Type": "Direktang carrier",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "Premium A2P",
      "row2Rate": "$0.012",
      "row3Country": "US",
      "row3Type": "Standard A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Pagpepresyo ayon sa bansa",
        "Pagpepresyo ayon sa kalidad ng ruta",
        "Pagsasama ng maraming supplier",
        "Mataas na throughput na koneksyon ng SMPP/API"
      ],
      "note": "Naglalarawang pagsasaayos"
    }
  },
  "workflowBadge": "DALOY NG TRABAHO NG PLATFORM",
  "workflowTitle": "Mula sa Paglikha ng Mensahe Hanggang sa Paghahatid",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Gumawa ng Campaign",
      "desc": "Isulat ang iyong mensahe, piliin ang audience, at iiskedyul ang tamang oras."
    },
    {
      "step": "02",
      "title": "Smart Routing",
      "desc": "Itugma ang bawat mensahe sa pinakamahusay na ruta para sa destinasyon nito."
    },
    {
      "step": "03",
      "title": "Pandaigdigang Paghahatid",
      "desc": "Abutin ang mga mobile network sa buong mundo sa pamamagitan ng direktang imprastraktura ng SMS."
    },
    {
      "step": "04",
      "title": "Real-Time na Pag-uulat",
      "desc": "Subaybayan ang mga resibo ng paghahatid, pagganap, at paggamit mula sa iyong portal."
    }
  ],
  "ctaBadge": "BUUIN NATIN ANG IYONG MESSAGING NETWORK",
  "ctaTitle": "Palaguin ang Iyong Negosyo Gamit ang Mga Solusyon sa SMS",
  "ctaSubtitle": "Mula sa matalinong voice routing at international termination hanggang sa AI Voice at mga virtual number, nagbibigay ang iNet Global ng mga nasusukat na solusyon sa komunikasyon upang matulungan ang mga negosyo na kumonekta sa mga customer sa buong mundo.",
  "contactUs": "Makipag-ugnayan sa Amin",
  "ctaTrust1": "Garantiyang 99.99% Enterprise SLA",
  "ctaTrust2": "Mabilisang Pag-setup ng API at SMPP",
  "ctaTrust3": "Direktang Koneksyon sa Pandaigdigang Tier-1 Carrier"
};

const bn: OtpSmsTranslation = {
  "heroBadge": "এসএমএস পোর্টাল সলিউশন",
  "heroTitle": "উচ্চ-ভলিউম মেসেজিংয়ের জন্য নির্মিত শক্তিশালী এসএমএস পোর্টাল",
  "heroSubtitle": "একটি বুদ্ধিমান প্ল্যাটফর্ম থেকে ব্যবসায়িক এসএমএস পাঠান, গ্রহণ করুন, পরিচালনা করুন এবং পর্যবেক্ষণ করুন।",
  "heroDesc": "একক ওটিপি যাচাইকরণ থেকে শুরু করে এন্টারপ্রাইজ-স্তরের বিশাল প্রচার অভিযান পর্যন্ত, আমাদের এসএমএস পোর্টাল আপনাকে নির্ভরযোগ্য যোগাযোগের জন্য প্রয়োজনীয় সমস্ত সরঞ্জাম, অটোমেশন, রাউটিং এবং বিশ্লেষণ সরবরাহ করে।",
  "getStarted": "শুরু করুন",
  "bookDemo": "ডেমো বুক করুন",
  "heroFeatures": [
    {
      "title": "গ্লোবাল এসএমএস কভারেজ"
    },
    {
      "title": "উন্নত স্মার্ট রাউটিং"
    },
    {
      "title": "বাল্ক এসএমএস ও ক্যাম্পেইন"
    },
    {
      "title": "দ্বিমুখী মেসেজিং"
    },
    {
      "title": "সহজ এপিআই ইন্টিগ্রেশন"
    },
    {
      "title": "রিয়েল-টাইম ডেলিভারি রিপোর্ট"
    }
  ],
  "managementBadge": "এসএমএস ম্যানেজমেন্ট প্ল্যাটফর্ম",
  "managementTitle": "এসএমএস পরিচালনার জন্য আপনার প্রয়োজনীয় সবকিছু",
  "platformControlTitle": "এক প্ল্যাটফর্ম। সম্পূর্ণ এসএমএস নিয়ন্ত্রণ।",
  "platformControlDesc": "গতি, দৃশ্যমানতা এবং পরিমাপযোগ্যতার জন্য ডিজাইন করা একটি কেন্দ্রীভূত ড্যাশবোর্ড থেকে আপনার সম্পূর্ণ মেসেজিং কার্যক্রম পরিচালনা করুন।",
  "platformControlBullets": [
    "ক্যাম্পেইন রচনা করুন, ব্যক্তিগতকৃত করুন এবং সময় নির্ধারণ করুন",
    "একই ওয়ার্কস্পেসে পরিচিতি এবং কথোপকথন সংরক্ষণ করুন",
    "বার্তা প্রেরণের সাথে সাথে ডেলিভারি, রাউটিং এবং খরচ ট্র্যাক করুন"
  ],
  "campaignCard": {
    "title": "একটি ক্যাম্পেইন তৈরি করুন",
    "draftBadge": "খসড়া সংরক্ষিত",
    "step1": "01 লিখুন",
    "step2": "02 প্রাপক",
    "step3": "03 সময়সূচী",
    "senderLabel": "প্রেরক আইডি (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "প্রাপক দল",
    "audienceVal": "অর্ডার আপডেট • ২৪,৮৫০ পরিচিতি",
    "messageLabel": "বার্তা",
    "messageText": "হ্যালো {first_name}, আপনার অর্ডার {order_id} পাঠানো হয়েছে। ট্র্যাক করুন {tracking_url}-এ। সহায়তার জন্য HELP লিখে উত্তর দিন।",
    "personalizedBadge": "ব্যক্তিগতকৃত ক্ষেত্র সক্রিয়",
    "charCount": "১১৮ / ১৬০",
    "repliesTitle": "গ্রাহকের উত্তর",
    "repliesBadge": "২-ওয়ে এসএমএস",
    "inboundText": "আপনার অর্ডার পথে রয়েছে। সহায়তার জন্য HELP লিখে উত্তর দিন।",
    "inboundTime": "১০:৪২ • ডেলিভার হয়েছে",
    "replyText": "ধন্যবাদ! আমি কি ডেলিভারির সময় পরিবর্তন করতে পারি?"
  },
  "capabilitiesBadge": "মেসেজিং সক্ষমতা",
  "capabilitiesTitle": "উন্নত এসএমএস বৈশিষ্ট্যসমূহ",
  "capabilitiesSubtitle": "আপনার এসএমএস কার্যক্রমের প্রতিটি অংশ পরিচালনা, স্বয়ংক্রিয় এবং অপ্টিমাইজ করার শক্তিশালী সরঞ্জাম।",
  "features": [
    {
      "title": "বাল্ক এসএমএস ক্যাম্পেইন",
      "desc": "শক্তিশালী ক্যাম্পেইন পরিচালনা, সময় নির্ধারণ, যোগাযোগ বিভাজন এবং ডেলিভারি ট্র্যাকিং সহ হাজার হাজার বা লক্ষ লক্ষ বার্তা পাঠান।"
    },
    {
      "title": "দ্বিমুখী এসএমএস (Two-Way SMS)",
      "desc": "একই প্ল্যাটফর্ম থেকে উত্তর গ্রহণ করুন এবং গ্রাহকের সাথে সরাসরি কথোপকথন চালান। গ্রাহক সহায়তা এবং সম্পৃক্ততার জন্য উপযুক্ত।"
    },
    {
      "title": "এসএমএস এপিআই (SMS API)",
      "desc": "আমাদের শক্তিশালী REST API-এর মাধ্যমে আপনার অ্যাপ্লিকেশন, সিআরএম বা ব্যবসায়িক সফটওয়্যার সংযুক্ত করুন এবং কর্মপ্রবাহ স্বয়ংক্রিয় করুন।"
    },
    {
      "title": "প্রেরক আইডি ব্যবস্থাপনা",
      "desc": "গন্তব্য দেশ, প্রচারণা, ব্র্যান্ড বা গ্রাহকের প্রয়োজনীয়তার উপর ভিত্তি করে একাধিক প্রেরক আইডি তৈরি এবং পরিচালনা করুন।"
    },
    {
      "title": "স্মার্ট রাউটিং",
      "desc": "গন্তব্য, ক্যারিয়ার, খরচ, গুণমান এবং ডেলিভারি কর্মক্ষমতার উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সেরা উপলব্ধ রুট নির্বাচন করুন।"
    },
    {
      "title": "ডেলিভারি রিপোর্ট (DLR)",
      "desc": "ডেলিভারড, ব্যর্থ, মুলতুবি, মেয়াদোত্তীর্ণ এবং প্রত্যাখ্যাত বিস্তারিত প্রতিবেদন সহ রিয়েল-টাইমে বার্তার অবস্থা পর্যবেক্ষণ করুন।"
    }
  ],
  "visibilityBadge": "স্বচ্ছতা ও নিয়ন্ত্রণ",
  "visibilityTitle": "প্রতিটি বার্তার সাথে কী ঘটছে তা নিখুঁতভাবে জানুন",
  "visibilitySubtitle": "রিয়েল-টাইম অ্যানালিটিক্স এবং রিপোর্টিং সহ আপনার এসএমএস ট্রাফিকের সম্পূর্ণ দৃশ্যমানতা পান।",
  "visibilityBullets": [
    "রিয়েল-টাইম এসএমএস ট্রাফিক পর্যবেক্ষণ",
    "রুট পারফরম্যান্স অ্যানালিটিক্স",
    "প্রচারণার কার্যকারিতা ট্র্যাকিং",
    "তাৎক্ষণিক স্বয়ংক্রিয় সতর্কতা",
    "ডেলিভারি এবং ব্যর্থতার বিস্তারিত পরিসংখ্যান",
    "খরচ এবং ব্যবহারের বিশদ রিপোর্ট",
    "এপিআই ট্রাফিক ও কল পর্যবেক্ষণ",
    "দেশ এবং ক্যারিয়ার ভিত্তিক রিপোর্ট",
    "গ্রাহক এবং সাব-অ্যাকাউন্ট ভিত্তিক রিপোর্ট",
    "এক ক্লিকে ডাউনলোডযোগ্য রিপোর্ট"
  ],
  "enterpriseBadge": "এন্টারপ্রাইজ প্রস্তুত",
  "enterpriseTitle": "রিসেলার, এন্টারপ্রাইজ এবং এসএমএস সরবরাহকারীদের জন্য নির্মিত",
  "enterpriseSubtitle": "একটি বৃহৎ আকারের মেসেজিং ব্যবসার পেছনের দলীয় অধিকার, মূল্য নির্ধারণ এবং প্রযুক্তিগত পরিকাঠামো পরিচালনা করুন।",
  "enterpriseCards": {
    "card1": {
      "title": "আপনার ওয়ার্কস্পেস। আপনার ব্র্যান্ড।",
      "header": "ওয়ার্কস্পেস অ্যাক্সেস",
      "user1Name": "আয়েশা মরগান",
      "user1Role": "অ্যাডমিন",
      "user2Name": "জেমস লি",
      "user2Role": "অপারেটর",
      "user3Name": "সারা খান",
      "user3Role": "অর্থ বিভাগ",
      "protectionText": "ট্রাফিক সুরক্ষা সক্রিয়",
      "bullets": [
        "ভূমিকা-ভিত্তিক বহু-ব্যবহারকারী অ্যাক্সেস (RBAC)",
        "নিজস্ব ব্র্যান্ডের হোয়াইট-লেবেল পোর্টাল",
        "বহুস্তরের গ্রাহক অ্যাকাউন্ট ব্যবস্থাপনা",
        "জালিয়াতি এবং অপব্যবহার প্রতিরোধ মনিটরিং"
      ],
      "note": "দৃষ্টান্তমূলক কনফিগারেশন"
    },
    "card2": {
      "title": "বাণিজ্যিক নিয়ন্ত্রণ, সরলীকৃত।",
      "header": "অ্যাকাউন্ট ওয়ালেট এবং ব্যালেন্স",
      "amount": "$4,850.00",
      "sub": "উপলব্ধ ক্রেডিট • USD",
      "stat1Label": "অক্টোবর মাসের খরচ",
      "stat1Val": "$2,569.00",
      "stat2Label": "সর্বশেষ টপ-আপ",
      "stat2Val": "+$5,000.00",
      "pillText": "স্বয়ংক্রিয় বিলিং সক্রিয়",
      "bullets": [
        "ওয়ালেট এবং ক্রেডিট সীমা ব্যবস্থাপনা",
        "নমনীয় রেট কার্ড কনফিগারেশন",
        "স্বয়ংক্রিয় বিলিং ও চালান ব্যবস্থা",
        "স্বচ্ছ এবং সম্পূর্ণ লেনদেনের ইতিহাস"
      ],
      "note": "দৃষ্টান্তমূলক কনফিগারেশন"
    },
    "card3": {
      "title": "নমনীয় মূল্য। সংযুক্ত গ্লোবাল রুট।",
      "header": "মূল্য নির্ধারণ এবং সংযোগ",
      "row1Country": "যুক্তরাজ্য (UK)",
      "row1Type": "সরাসরি ক্যারিয়ার",
      "row1Rate": "$0.018",
      "row2Country": "ভারত (India)",
      "row2Type": "প্রিমিয়াম A2P",
      "row2Rate": "$0.012",
      "row3Country": "যুক্তরাষ্ট্র (US)",
      "row3Type": "স্ট্যান্ডার্ড A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP অনলাইন",
      "pill2": "API অনলাইন",
      "bullets": [
        "দেশ ভিত্তিক বিশেষ মূল্য নির্ধারণ",
        "রুটের মান অনুযায়ী স্তরযুক্ত রেট",
        "একাধিক ক্যারিয়ার সংযোগের সমন্বয়",
        "উচ্চগতির SMPP এবং REST API সংযোগ"
      ],
      "note": "দৃষ্টান্তমূলক কনফিগারেশন"
    }
  },
  "workflowBadge": "প্ল্যাটফর্মের কাজের ধারা",
  "workflowTitle": "বার্তা তৈরি থেকে গ্রাহকের ফোনে পৌঁছানো পর্যন্ত",
  "workflowSteps": [
    {
      "step": "01",
      "title": "ক্যাম্পেইন তৈরি করুন",
      "desc": "বার্তা লিখুন, উদ্দিষ্ট প্রাপক নির্বাচন করুন এবং সঠিক প্রেরণের সময় নির্ধারণ করুন।"
    },
    {
      "step": "02",
      "title": "স্মার্ট রাউটিং",
      "desc": "গন্তব্য এবং গতির প্রয়োজনীয়তা অনুযায়ী প্রতিটি বার্তা সেরা রুটে প্রেরণ করুন।"
    },
    {
      "step": "03",
      "title": "বিশ্বব্যাপী ডেলিভারি",
      "desc": "সরাসরি সংযুক্ত অবকাঠামোর মাধ্যমে বিশ্বজুড়ে মোবাইল নেটওয়ার্কে পৌঁছে যান।"
    },
    {
      "step": "04",
      "title": "রিয়েল-টাইম রিপোর্টিং",
      "desc": "ডেলিভারি প্রাপ্তিস্বীকার, রুটের কর্মক্ষমতা এবং ব্যয় সরাসরি ড্যাশবোর্ড থেকে দেখুন।"
    }
  ],
  "ctaBadge": "আসুন আপনার মেসেজিং নেটওয়ার্ক তৈরি করি",
  "ctaTitle": "ব্যবসায়িক এসএমএস সমাধানের মাধ্যমে আপনার ব্যবসা প্রসারিত করুন",
  "ctaSubtitle": "ইন্টেলিজেন্ট ভয়েস রাউটিং এবং আন্তর্জাতিক টার্মিনেশন থেকে শুরু করে এআই ভয়েস এবং ভার্চুয়াল ডিআইডি নম্বর—iNet Global বিশ্বজুড়ে গ্রাহকদের সাথে নির্ভরযোগ্যভাবে যোগাযোগের পরিমাপযোগ্য টেলিযোগাযোগ সমাধান সরবরাহ করে।",
  "contactUs": "যোগাযোগ করুন",
  "ctaTrust1": "৯৯.৯৯% এন্টারপ্রাইজ SLA গ্যারান্টি",
  "ctaTrust2": "তাৎক্ষণিক এপিআই এবং এসএমপিপি সেটআপ",
  "ctaTrust3": "গ্লোবাল টিয়ার-১ টেলিকম অপারেটর সংযোগ"
};

const ta: OtpSmsTranslation = {
  "heroBadge": "எஸ்எம்எஸ் போர்டல் தீர்வு",
  "heroTitle": "அதிக அளவிலான செய்தியிடலுக்காக உருவாக்கப்பட்ட சக்திவாய்ந்த எஸ்எம்எஸ் போர்டல்",
  "heroSubtitle": "ஒரே அறிவார்ந்த தளத்திலிருந்து வணிக எஸ்எம்எஸ்களை அனுப்பவும், பெறவும், நிர்வகிக்கவும் மற்றும் கண்காணிக்கவும்.",
  "heroDesc": "ஒற்றை சரிபார்ப்புக் குறியீடுகள் முதல் நிறுவன அளவிலான பிரச்சாரங்கள் வரை, நம்பகமான தொடர்புக்குத் தேவையான கருவிகள், ஆட்டோமேஷன், ஸ்மார்ட் ரூட்டிங் மற்றும் பகுப்பாய்வுகளை எங்கள் போர்டல் வழங்குகிறது.",
  "getStarted": "இப்போதே தொடங்குங்கள்",
  "bookDemo": "டெமோ பதிவு செய்யுங்கள்",
  "heroFeatures": [
    {
      "title": "உலகளாவிய எஸ்எம்எஸ் கவரேஜ்"
    },
    {
      "title": "மேம்பட்ட ஸ்மார்ட் ரூட்டிங்"
    },
    {
      "title": "மொத்த எஸ்எம்எஸ் & பிரச்சாரங்கள்"
    },
    {
      "title": "இருவழி செய்தியிடல்"
    },
    {
      "title": "எளிதான ஏபிஐ ஒருங்கிணைப்பு"
    },
    {
      "title": "நிகழ்நேர டெலிவரி அறிக்கைகள்"
    }
  ],
  "managementBadge": "எஸ்எம்எஸ் மேலாண்மை தளம்",
  "managementTitle": "எஸ்எம்எஸ் நிர்வகிக்க உங்களுக்கு தேவையான அனைத்தும்",
  "platformControlTitle": "ஒரே தளம். முழுமையான எஸ்எம்எஸ் கட்டுப்பாடு.",
  "platformControlDesc": "வேகம், வெளிப்படைத்தன்மை மற்றும் அளவிடுதலுக்காக வடிவமைக்கப்பட்ட மையப்படுத்தப்பட்ட டாஷ்போர்டிலிருந்து உங்கள் முழு செய்தியிடல் செயல்பாட்டையும் நிர்வகிக்கவும்.",
  "platformControlBullets": [
    "பிரச்சாரங்களை எளிதாக உருவாக்கவும், தனிப்பயனாக்கவும், திட்டமிடவும்",
    "தொடர்புகளையும் உரையாடல்களையும் ஒரே பணியிடத்தில் சேமிக்கவும்",
    "செய்திகள் அனுப்பப்படும் போது டெலிவரி, ரூட்டிங் மற்றும் செலவை நேரலையாகக் கண்காணிக்கவும்"
  ],
  "campaignCard": {
    "title": "பிரச்சாரத்தை உருவாக்குங்கள்",
    "draftBadge": "வரைவு சேமிக்கப்பட்டது",
    "step1": "01 எழுதுங்கள்",
    "step2": "02 பார்வையாளர்கள்",
    "step3": "03 திட்டமிடுங்கள்",
    "senderLabel": "அனுப்புநர் ஐடி (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "பார்வையாளர்கள்",
    "audienceVal": "ஆர்டர் புதுப்பிப்புகள் • 24,850 தொடர்புகள்",
    "messageLabel": "செய்தி விவரம்",
    "messageText": "வணக்கம் {first_name}, உங்கள் ஆர்டர் {order_id} அனுப்பப்பட்டுவிட்டது. {tracking_url}-ல் கண்காணிக்கவும். உதவிக்கு HELP என பதிலளிக்கவும்.",
    "personalizedBadge": "தனிப்பயனாக்கப்பட்ட புலங்கள் இயக்கப்பட்டன",
    "charCount": "118 / 160",
    "repliesTitle": "வாடிக்கையாளர் பதில்கள்",
    "repliesBadge": "2-வழி எஸ்எம்எஸ்",
    "inboundText": "உங்கள் ஆர்டர் வந்துகொண்டிருக்கிறது. ஆதரவுக்கு HELP என பதிலளிக்கவும்.",
    "inboundTime": "10:42 • டெலிவரி செய்யப்பட்டது",
    "replyText": "நன்றி! டெலிவரி நேரத்தை மாற்ற முடியுமா?"
  },
  "capabilitiesBadge": "செய்தியிடல் திறன்கள்",
  "capabilitiesTitle": "மேம்பட்ட எஸ்எம்எஸ் அம்சங்கள்",
  "capabilitiesSubtitle": "உங்கள் எஸ்எம்எஸ் செயல்பாட்டின் ஒவ்வொரு பகுதியையும் நிர்வகிக்க, தானியங்குபடுத்த மற்றும் மேம்படுத்த சக்திவாய்ந்த கருவிகள்.",
  "features": [
    {
      "title": "மொத்த எஸ்எம்எஸ் பிரச்சாரங்கள்",
      "desc": "சக்திவாய்ந்த பிரச்சார மேலாண்மை, திட்டமிடல், தொடர்பு பிரிவு மற்றும் துல்லியமான டெலிவரி கண்காணிப்புடன் ஆயிரக்கணக்கான அல்லது மில்லியன் கணக்கான செய்திகளை அனுப்பவும்."
    },
    {
      "title": "இருவழி எஸ்எம்எஸ் (Two-Way SMS)",
      "desc": "ஒரே தளத்திலிருந்து வாடிக்கையாளர் பதில்களைப் பெற்று உரையாடல்களை நிர்வகிக்கவும். வாடிக்கையாளர் ஆதரவு மற்றும் ஈடுபாட்டிற்கு மிகவும் ஏற்றது."
    },
    {
      "title": "எஸ்எம்எஸ் ஏபிஐ (SMS API)",
      "desc": "எங்கள் REST API மூலம் உங்கள் பயன்பாடுகள், CRM அல்லது வணிக மென்பொருளை இணைத்து உங்கள் பணிப்பாய்வுகளை தானியங்குபடுத்துங்கள்."
    },
    {
      "title": "அனுப்புநர் ஐடி மேலாண்மை",
      "desc": "இலக்கு நாடு, பிரச்சாரம், பிராண்ட் அல்லது வாடிக்கையாளர் தேவைகளின் அடிப்படையில் பல அனுப்புநர் ஐடிகளை உருவாக்கி நிர்வகிக்கவும்."
    },
    {
      "title": "ஸ்மார்ட் ரூட்டிங்",
      "desc": "இலக்கு, தொலைத்தொடர்பு நிறுவனம், செலவு, தரம் மற்றும் டெலிவரி செயல்திறன் ஆகியவற்றின் அடிப்படையில் தானாகவே சிறந்த பாதையைத் தேர்ந்தெடுக்கவும்."
    },
    {
      "title": "டெலிவரி அறிக்கைகள் (DLR)",
      "desc": "டெலிவரி செய்யப்பட்டது, தோல்வியுற்றது, நிலுவையில் உள்ளது, காலாவதியானது மற்றும் நிராகரிக்கப்பட்டது போன்ற முழு விவரங்களுடன் செய்தியின் நிலையை நிகழ்நேரத்தில் கண்காணிக்கவும்."
    }
  ],
  "visibilityBadge": "வெளிப்படைத்தன்மை & கட்டுப்பாடு",
  "visibilityTitle": "ஒவ்வொரு செய்திக்கும் என்ன நடக்கிறது என்பதைத் துல்லியமாக அறியுங்கள்",
  "visibilitySubtitle": "நிகழ்நேர பகுப்பாய்வு மற்றும் அறிக்கைகளுடன் உங்கள் எஸ்எம்எஸ் டிராஃபிக்கில் முழுமையான கட்டுப்பாட்டைப் பெறுங்கள்.",
  "visibilityBullets": [
    "நிகழ்நேர எஸ்எம்எஸ் டிராஃபிக் கண்காணிப்பு",
    "ரூட் செயல்திறன் பகுப்பாய்வு",
    "பிரச்சார வெற்றி விகித கண்காணிப்பு",
    "நிகழ்நேர உடனடி எச்சரிக்கைகள்",
    "டெலிவரி மற்றும் தோல்வி புள்ளிவிவரங்கள்",
    "செலவு மற்றும் பயன்பாட்டு அறிக்கைகள்",
    "ஏபிஐ அழைப்புகள் மற்றும் டிராஃபிக் கண்காணிப்பு",
    "நாடு மற்றும் ஆபரேட்டர் அளவிலான அறிக்கைகள்",
    "வாடிக்கையாளர் கணக்கு அளவிலான அறிக்கைகள்",
    "பதிவிறக்கம் செய்யக்கூடிய முழுமையான அறிக்கைகள்"
  ],
  "enterpriseBadge": "நிறுவன அளவிலான தரம்",
  "enterpriseTitle": "மறுவிற்பனையாளர்கள், நிறுவனங்கள் மற்றும் எஸ்எம்எஸ் வழங்குநர்களுக்காக உருவாக்கப்பட்டது",
  "enterpriseSubtitle": "ஒரு பெரிய அளவிலான செய்தியிடல் வணிகத்தின் பின்னணியில் உள்ள குழு அனுமதிகள், விலை நிர்ணயம் மற்றும் உள்கட்டமைப்பை நிர்வகிக்கவும்.",
  "enterpriseCards": {
    "card1": {
      "title": "உங்கள் பணியிடம். உங்கள் பிராண்ட்.",
      "header": "பணியிட அணுகல்",
      "user1Name": "ஆயிஷா மோர்கன்",
      "user1Role": "நிர்வாகி",
      "user2Name": "ஜேம்ஸ் லீ",
      "user2Role": "ஆபரேட்டர்",
      "user3Name": "சாரா கான்",
      "user3Role": "நிதி நிர்வாகி",
      "protectionText": "டிராஃபிக் பாதுகாப்பு செயலில் உள்ளது",
      "bullets": [
        "பங்கு அடிப்படையிலான பல பயனர் அணுகல் (RBAC)",
        "சொந்த பிராண்டிங் கொண்ட ஒயிட்-லேபிள் போர்டல்",
        "பல அடுக்கு வாடிக்கையாளர் கணக்கு மேலாண்மை",
        "மோசடி மற்றும் தவறான பயன்பாட்டு தடுப்பு கண்காணிப்பு"
      ],
      "note": "விளக்கக் கட்டமைப்பு மாதிரி"
    },
    "card2": {
      "title": "வணிகக் கட்டுப்பாடு, எளிமைப்படுத்தப்பட்டது.",
      "header": "கணக்கு பணப்பை மற்றும் இருப்பு",
      "amount": "$4,850.00",
      "sub": "கிடைக்கும் கிரெடிட் • USD",
      "stat1Label": "அக்டோபர் பயன்பாடு",
      "stat1Val": "$2,569.00",
      "stat2Label": "கடைசி ரீசார்ஜ்",
      "stat2Val": "+$5,000.00",
      "pillText": "தானியங்கி பில்லிங் இயக்கப்பட்டது",
      "bullets": [
        "வாலட் மற்றும் கிரெடிட் வரம்பு மேலாண்மை",
        "நெகிழ்வான கட்டண அட்டை அமைப்புகள்",
        "தானியங்கி பில்லிங் மற்றும் இன்வாய்ஸ்",
        "வெளிப்படையான மற்றும் முழுமையான பரிவர்த்தனை வரலாறு"
      ],
      "note": "விளக்கக் கட்டமைப்பு மாதிரி"
    },
    "card3": {
      "title": "நெகிழ்வான விலை. இணைக்கப்பட்ட உலகளாவிய வழிகள்.",
      "header": "விலை மற்றும் இணைப்பு",
      "row1Country": "பிரிட்டன் (UK)",
      "row1Type": "நேரடி ஆபரேட்டர்",
      "row1Rate": "$0.018",
      "row2Country": "இந்தியா (India)",
      "row2Type": "பிரீமியம் A2P",
      "row2Rate": "$0.012",
      "row3Country": "அமெரிக்கா (US)",
      "row3Type": "நிலையான A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP ஆன்லைன்",
      "pill2": "API ஆன்லைன்",
      "bullets": [
        "நாடு வாரியான தனிப்பயன் விலை நிர்ணயம்",
        "ரூட் தரத்தின் அடிப்படையில் படிநிலை கட்டணங்கள்",
        "பல தொலைத்தொடர்பு வழங்குநர்களின் ஒருங்கிணைப்பு",
        "அதிவேக SMPP மற்றும் REST API இணைப்பு"
      ],
      "note": "விளக்கக் கட்டமைப்பு மாதிரி"
    }
  },
  "workflowBadge": "தளத்தின் பணிப்பாய்வு",
  "workflowTitle": "செய்தி உருவாக்கத்திலிருந்து வாடிக்கையாளர் கைபேசி வரை",
  "workflowSteps": [
    {
      "step": "01",
      "title": "பிரச்சாரத்தை உருவாக்கவும்",
      "desc": "செய்தியை எழுதுங்கள், பார்வையாளர்களைத் தேர்வுசெய்யுங்கள் மற்றும் சரியான நேரத்தைத் திட்டமிடுங்கள்."
    },
    {
      "step": "02",
      "title": "ஸ்மார்ட் ரூட்டிங்",
      "desc": "ஒவ்வொரு செய்தியையும் அதன் இலக்கு மற்றும் வேகத் தேவைகளுக்கு ஏற்ப சிறந்த பாதையுடன் பொருத்தவும்."
    },
    {
      "step": "03",
      "title": "உலகளாவிய டெலிவரி",
      "desc": "நேரடி தொலைத்தொடர்பு உள்கட்டமைப்பு மூலம் உலகெங்கிலும் உள்ள மொபைல் நெட்வொர்க்குகளை உடனடியாக அடையுங்கள்."
    },
    {
      "step": "04",
      "title": "நிகழ்நேர அறிக்கை",
      "desc": "டெலிவரி ரசீதுகள், வேக செயல்திறன் மற்றும் பயன்பாட்டு அளவுகளை உங்கள் போர்ட்டலில் நேரலையாகக் கண்காணிக்கவும்."
    }
  ],
  "ctaBadge": "உங்கள் செய்தியிடல் நெட்வொர்க்கை உருவாக்குவோம்",
  "ctaTitle": "வணிக எஸ்எம்எஸ் தீர்வுகளுடன் உங்கள் நிறுவனத்தை வளர்த்தெடுக்கவும்",
  "ctaSubtitle": "அறிவார்ந்த குரல் ரூட்டிங் மற்றும் சர்வதேச டெர்மினேஷன் முதல் AI வாய்ஸ் மற்றும் விர்ச்சுவல் எண்கள் வரை, உலகளாவிய சந்தைகளில் வாடிக்கையாளர்களுடன் தெளிவாகவும் நம்பகத்தன்மையுடனும் இணைக்க iNet Global அளவிடக்கூடிய தொலைத்தொடர்பு தீர்வுகளை வழங்குகிறது.",
  "contactUs": "எங்களைத் தொடர்பு கொள்ளுங்கள்",
  "ctaTrust1": "99.99% நிறுவன SLA உத்தரவாதம்",
  "ctaTrust2": "உடனடி ஏபிஐ மற்றும் எஸ்எம்பிபி அமைப்பு",
  "ctaTrust3": "உலகளாவிய Tier-1 டெலிகாம் ஆபரேட்டர் நேரடி இணைப்பு"
};

const te: OtpSmsTranslation = {
  "heroBadge": "SMS పోర్టల్ పరిష్కారం",
  "heroTitle": "హై-వాల్యూమ్ మెసేజింగ్ కోసం రూపొందించిన శక్తివంతమైన ఎంటర్‌ప్రైజ్ SMS పోర్టల్",
  "heroSubtitle": "ఒకే తెలివైన ప్లాట్‌ఫారమ్ నుండి వ్యాపార SMSలను పంపండి, స్వీకరించండి, నిర్వహించండి మరియు పర్యవేక్షించండి.",
  "heroDesc": "సింగిల్ వెరిఫికేషన్ కోడ్‌ల నుండి ఎంటర్‌ప్రైజ్ స్థాయి భారీ ప్రచారాల వరకు, మా SMS పోర్టల్ మీకు విశ్వసనీయ కమ్యూనికేషన్ కోసం అవసరమైన సాధనాలు, ఆటోమేషన్, స్మార్ట్ రూటింగ్ మరియు విశ్లేషణలను అందిస్తుంది.",
  "getStarted": "ఇప్పుడే ప్రారంభించండి",
  "bookDemo": "డెమో బుక్ చేయండి",
  "heroFeatures": [
    {
      "title": "గ్లోబల్ SMS కవరేజ్"
    },
    {
      "title": "అధునాతన స్మార్ట్ రూటింగ్"
    },
    {
      "title": "బల్క్ SMS & ప్రచారాలు"
    },
    {
      "title": "టూ-వే ఇంటరాక్టివ్ మెసేజింగ్"
    },
    {
      "title": "సులభమైన API ఇంటిగ్రేషన్"
    },
    {
      "title": "రియల్-టైమ్ డెలివరీ నివేదికలు"
    }
  ],
  "managementBadge": "SMS మేనేజ్‌మెంట్ ప్లాట్‌ఫారమ్",
  "managementTitle": "SMS నిర్వహించడానికి మీకు అవసరమైన ప్రతిదీ",
  "platformControlTitle": "ఒకే ప్లాట్‌ఫారమ్. పూర్తి SMS నియంత్రణ.",
  "platformControlDesc": "వేగం, పారదర్శకత మరియు స్కేలబిలిటీ కోసం రూపొందించబడిన కేంద్రీకృత డాష్‌బోర్డ్ నుండి మీ మొత్తం మెసేజింగ్ ఆపరేషన్‌ను నిర్వహించండి.",
  "platformControlBullets": [
    "ప్రచారాలను సులభంగా కంపోజ్ చేయండి, వ్యక్తిగతీకరించండి మరియు షెడ్యూల్ చేయండి",
    "పరిచయాలు మరియు సంభాషణలను ఒకే వర్క్‌స్పేస్‌లో ఉంచండి",
    "సందేశాలు వెళ్లేటప్పుడు డెలివరీ, రూటింగ్ మరియు వినియోగాన్ని ట్రాక్ చేయండి"
  ],
  "campaignCard": {
    "title": "ప్రచారాన్ని సృష్టించండి",
    "draftBadge": "డ్రాఫ్ట్ సేవ్ చేయబడింది",
    "step1": "01 కంపోజ్ చేయండి",
    "step2": "02 ప్రేక్షకులు",
    "step3": "03 షెడ్యూల్",
    "senderLabel": "పంపినవారి ID (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "ప్రేక్షకులు",
    "audienceVal": "ఆర్డర్ అప్‌డేట్‌లు • 24,850 పరిచయాలు",
    "messageLabel": "సందేశం",
    "messageText": "నమస్తే {first_name}, మీ ఆర్డర్ {order_id} పంపబడింది. {tracking_url} వద్ద ట్రాక్ చేయండి. మద్దతు కోసం HELP అని ప్రత్యుత్తరం ఇవ్వండి.",
    "personalizedBadge": "వ్యక్తిగతీకరించిన ఫీల్డ్‌లు ప్రారంభించబడ్డాయి",
    "charCount": "118 / 160",
    "repliesTitle": "కస్టమర్ ప్రత్యుత్తరాలు",
    "repliesBadge": "2-వే SMS",
    "inboundText": "మీ ఆర్డర్ మార్గంలో ఉంది. మద్దతు కోసం HELP అని ప్రత్యుత్తరం ఇవ్వండి.",
    "inboundTime": "10:42 • డెలివరీ చేయబడింది",
    "replyText": "ధన్యవాదాలు! నేను డెలివరీ సమయాన్ని మార్చవచ్చా?"
  },
  "capabilitiesBadge": "మెసేజింగ్ సామర్థ్యాలు",
  "capabilitiesTitle": "అధునాతన SMS ఫీచర్లు",
  "capabilitiesSubtitle": "మీ SMS ఆపరేషన్‌లోని ప్రతి భాగాన్ని నిర్వహించడానికి, ఆటోమేట్ చేయడానికి మరియు ఆప్టిమైజ్ చేయడానికి శక్తివంతమైన సాధనాలు.",
  "features": [
    {
      "title": "బల్క్ SMS ప్రచారాలు",
      "desc": "శక్తివంతమైన ప్రచార నిర్వహణ, షెడ్యూలింగ్, కాంటాక్ట్ సెగ్మెంటేషన్ మరియు డెలివరీ ట్రాకింగ్‌తో వేల లేదా మిలియన్ల సందేశాలను పంపండి."
    },
    {
      "title": "టూ-వే SMS (Two-Way SMS)",
      "desc": "అదే ప్లాట్‌ఫారమ్ నుండి ప్రత్యుత్తరాలను స్వీకరించండి మరియు సంభాషణలను నిర్వహించండి. కస్టమర్ సపోర్ట్, నోటిఫికేషన్‌లు మరియు ఎంగేజ్‌మెంట్‌కు సరైనది."
    },
    {
      "title": "SMS API",
      "desc": "మా శక్తివంతమైన REST APIతో మీ అప్లికేషన్‌లు, CRM లేదా వ్యాపార సాఫ్ట్‌వేర్‌ను కనెక్ట్ చేయండి మరియు మీ వర్క్‌ఫ్లోలను ఆటోమేట్ చేయండి."
    },
    {
      "title": "Sender ID నిర్వహణ",
      "desc": "గమ్యం, ప్రచారం, బ్రాండ్ లేదా కస్టమర్ అవసరాల ఆధారంగా బహుళ పంపినవారి IDలను సృష్టించండి మరియు నిర్వహించండి."
    },
    {
      "title": "స్మార్ట్ రూటింగ్",
      "desc": "గమ్యం, క్యారియర్, ఖర్చు, నాణ్యత మరియు డెలివరీ పనితీరు ఆధారంగా అందుబాటులో ఉన్న ఉత్తమ మార్గాన్ని స్వయంచాలకంగా ఎంచుకోండి."
    },
    {
      "title": "డెలివరీ నివేదికలు (DLR)",
      "desc": "డెలివరీ చేయబడింది, విఫలమైంది, పెండింగ్‌లో ఉంది, గడువు ముగిసింది మరియు తిరస్కరించబడిన వివరణాత్మక నివేదికలతో నిజ సమయంలో సందేశ స్థితిని పర్యవేక్షించండి."
    }
  ],
  "visibilityBadge": "దృశ్యత మరియు నియంత్రణ",
  "visibilityTitle": "ప్రతి సందేశంతో ఏమి జరుగుతుందో ఖచ్చితంగా తెలుసుకోండి",
  "visibilitySubtitle": "నిజ-సమయ విశ్లేషణలు మరియు రిపోర్టింగ్‌తో మీ SMS ట్రాఫిక్‌పై పూర్తి దృశ్యతను పొందండి.",
  "visibilityBullets": [
    "నిజ-సమయ SMS ట్రాఫిక్ పర్యవేక్షణ",
    "రూట్ పనితీరు విశ్లేషణలు",
    "ప్రచార పనితీరు కొలమానాలు",
    "నిజ-సమయ తక్షణ హెచ్చరికలు",
    "డెలివరీ మరియు వైఫల్య గణాంకాలు",
    "ఖర్చు మరియు వినియోగ నివేదికలు",
    "API ట్రాఫిక్ పర్యవేక్షణ",
    "దేశం మరియు క్యారియర్ స్థాయి నివేదికలు",
    "కస్టమర్ మరియు ఖాతా స్థాయి నివేదికలు",
    "డౌన్‌లోడ్ చేసుకోదగిన వివరణాత్మక నివేదికలు"
  ],
  "enterpriseBadge": "ఎంటర్‌ప్రైజ్ రెడీ",
  "enterpriseTitle": "రీసెలర్లు, ఎంటర్‌ప్రైజెస్ మరియు SMS ప్రొవైడర్ల కోసం రూపొందించబడింది",
  "enterpriseSubtitle": "స్కేలబుల్ మెసేజింగ్ వ్యాపారం వెనుక ఉన్న బృందం యాక్సెస్, ధర మరియు మౌలిక సదుపాయాలను సమర్థవంతంగా నిర్వహించండి.",
  "enterpriseCards": {
    "card1": {
      "title": "మీ వర్క్‌స్పేస్. మీ బ్రాండ్.",
      "header": "వర్క్‌స్పేస్ యాక్సెస్",
      "user1Name": "ఆయిషా మోర్గాన్",
      "user1Role": "అడ్మిన్",
      "user2Name": "జేమ్స్ లీ",
      "user2Role": "ఆపరేటర్",
      "user3Name": "సారా ఖాన్",
      "user3Role": "ఫైనాన్స్",
      "protectionText": "ట్రాఫిక్ రక్షణ చురుకుగా ఉంది",
      "bullets": [
        "పాత్ర ఆధారిత బహుళ-వినియోగదారు యాక్సెస్ (RBAC)",
        "సొంత బ్రాండ్‌తో వైట్-లేబుల్ పోర్టల్",
        "బహుళ-స్థాయి కస్టమర్ ఖాతా నిర్వహణ",
        "మోసం మరియు దుర్వినియోగ నిరోధక పర్యవేక్షణ"
      ],
      "note": "ఉదాహరణ కాన్ఫిగరేషన్"
    },
    "card2": {
      "title": "వాణిజ్య నియంత్రణ, సరళీకృతం చేయబడింది.",
      "header": "ఖాతా వాలెట్ మరియు బ్యాలెన్స్",
      "amount": "$4,850.00",
      "sub": "అందుబాటులో ఉన్న క్రెడిట్ • USD",
      "stat1Label": "అక్టోబర్ వినియోగం",
      "stat1Val": "$2,569.00",
      "stat2Label": "చివరి టాప్-అప్",
      "stat2Val": "+$5,000.00",
      "pillText": "ఆటో బిల్లింగ్ ప్రారంభించబడింది",
      "bullets": [
        "వాలెట్ మరియు క్రెడిట్ పరిమితి నిర్వహణ",
        "సౌకర్యవంతమైన రేట్ కార్డ్ సెట్టింగ్‌లు",
        "స్వయంచాలక బిల్లింగ్ మరియు ఇన్‌వాయిస్",
        "పారదర్శక మరియు పూర్తి లావాదేవీల చరిత్ర"
      ],
      "note": "ఉదాహరణ కాన్ఫిగరేషన్"
    },
    "card3": {
      "title": "ఫ్లెక్సిబుల్ ధరలు. అనుసంధానించబడిన మార్గాలు.",
      "header": "ధరలు మరియు కనెక్టివిటీ",
      "row1Country": "UK",
      "row1Type": "డైరెక్ట్ క్యారియర్",
      "row1Rate": "$0.018",
      "row2Country": "భారతదేశం (India)",
      "row2Type": "ప్రీమియం A2P",
      "row2Rate": "$0.012",
      "row3Country": "US",
      "row3Type": "ప్రామాణిక A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP ఆన్‌లైన్",
      "pill2": "API ఆన్‌లైన్",
      "bullets": [
        "దేశాల వారీగా అనుకూలీకరించిన ధరలు",
        "రూట్ నాణ్యత ఆధారంగా టైర్డ్ రేట్లు",
        "బహుళ సరఫరాదారుల రూట్ల ఏకీకరణ",
        "అధిక వేగవంతమైన SMPP మరియు REST API కనెక్టివిటీ"
      ],
      "note": "ఉదాహరణ కాన్ఫిగరేషన్"
    }
  },
  "workflowBadge": "ప్లాట్‌ఫారమ్ వర్క్‌ఫ్లో",
  "workflowTitle": "సందేశం తయారీ నుండి డెలివరీ వరకు",
  "workflowSteps": [
    {
      "step": "01",
      "title": "ప్రచారాన్ని సృష్టించండి",
      "desc": "మీ సందేశాన్ని రాయండి, ప్రేక్షకులను ఎంచుకోండి మరియు సరైన పంపే సమయాన్ని షెడ్యూల్ చేయండి."
    },
    {
      "step": "02",
      "title": "స్మార్ట్ రూటింగ్",
      "desc": "గమ్యం మరియు వేగం అవసరాల కోసం ప్రతి సందేశాన్ని ఉత్తమ మార్గానికి సరిపోల్చండి."
    },
    {
      "step": "03",
      "title": "గ్లోబల్ డెలివరీ",
      "desc": "డైరెక్ట్ టెలికాం మౌలిక సదుపాయాల ద్వారా ప్రపంచవ్యాప్తంగా ఉన్న మొబైల్ నెట్‌వర్క్‌లకు సందేశాలను చేర్చండి."
    },
    {
      "step": "04",
      "title": "రియల్-టైమ్ రిపోర్టింగ్",
      "desc": "డెలివరీ రసీదులు, పనితీరు మరియు వినియోగాన్ని మీ పోర్టల్ నుండి ప్రత్యక్షంగా పర్యవేక్షించండి."
    }
  ],
  "ctaBadge": "మీ మెసేజింగ్ నెట్‌వర్క్‌ను నిర్మిద్దాం",
  "ctaTitle": "వ్యాపార SMS పరిష్కారాలతో మీ వ్యాపారాన్ని విస్తరించండి",
  "ctaSubtitle": "తెలివైన వాయిస్ రూటింగ్ మరియు అంతర్జాతీయ టెర్మినేషన్ నుండి AI వాయిస్ మరియు వర్చువల్ DID నంబర్ల వరకు, ప్రపంచ మార్కెట్లలో కస్టమర్లతో విశ్వసనీయంగా కనెక్ట్ కావడానికి iNet Global స్కేలబుల్ టెలికాం పరిష్కారాలను అందిస్తుంది.",
  "contactUs": "మమ్మల్ని సంప్రదించండి",
  "ctaTrust1": "99.99% ఎంటర్‌ప్రైజ్ SLA హామీ",
  "ctaTrust2": "తక్షణ API & SMPP సెటప్",
  "ctaTrust3": "గ్లోబల్ టైర్-1 క్యారియర్ డైరెక్ట్ కనెక్టివిటీ"
};

const mr: OtpSmsTranslation = {
  "heroBadge": "SMS पोर्टल सोल्यूशन",
  "heroTitle": "मोठ्या प्रमाणावर मेसेजिंगसाठी डिझाइन केलेले शक्तिशाली एंटरप्राइझ SMS पोर्टल",
  "heroSubtitle": "एकाच बुद्धिमान व्यासपीठावरून व्यावसायिक SMS पाठवा, प्राप्त करा, व्यवस्थापित करा आणि निरीक्षण करा.",
  "heroDesc": "वैयक्तिक पडताळणी कोडपासून ते एंटरप्राइझ-स्तरीय मोठ्या मोहिमांपर्यंत, आमचे SMS पोर्टल आपल्याला पूर्ण विश्वासाने संवाद साधण्यासाठी आवश्यक असलेली सर्व साधने, ऑटोमेशन, स्मार्ट रूटिंग आणि विश्लेषण प्रदान करते.",
  "getStarted": "आता सुरू करा",
  "bookDemo": "डेमो बुक करा",
  "heroFeatures": [
    {
      "title": "जागतिक SMS कव्हरेज"
    },
    {
      "title": "प्रगत स्मार्ट रूटिंग"
    },
    {
      "title": "बल्क SMS आणि मोहिमा"
    },
    {
      "title": "द्विमार्गी मेसेजिंग"
    },
    {
      "title": "सोपे API एकत्रीकरण"
    },
    {
      "title": "रिअल-टाइम डिलिव्हरी अहवाल"
    }
  ],
  "managementBadge": "SMS व्यवस्थापन प्लॅटफॉर्म",
  "managementTitle": "SMS व्यवस्थापित करण्यासाठी आपल्याला आवश्यक असलेले सर्वकाही",
  "platformControlTitle": "एकच प्लॅटफॉर्म. संपूर्ण SMS नियंत्रण.",
  "platformControlDesc": "वेग, पारदर्शकता आणि स्केलेबिलिटीसाठी डिझाइन केलेल्या केंद्रीकृत डॅशबोर्डवरून आपले संपूर्ण मेसेजिंग ऑपरेशन व्यवस्थापित करा.",
  "platformControlBullets": [
    "मोहिमा सहजपणे लिहा, वैयक्तिकृत करा आणि शेड्यूल करा",
    "संपर्क आणि संभाषणे एकाच कार्यक्षेत्रात ठेवा",
    "संदेश पाठवताना डिलिव्हरी, रूटिंग आणि खर्चाचा थेट मागोवा घ्या"
  ],
  "campaignCard": {
    "title": "मोहीम तयार करा",
    "draftBadge": "मसुदा जतन केला",
    "step1": "01 लिहा",
    "step2": "02 प्रेक्षक",
    "step3": "03 शेड्यूल करा",
    "senderLabel": "प्रेषक आयडी (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "प्रेक्षक",
    "audienceVal": "ऑर्डर अपडेट्स • २४,८५० संपर्क",
    "messageLabel": "संदेश",
    "messageText": "नमस्कार {first_name}, तुमची ऑर्डर {order_id} पाठवली गेली आहे. {tracking_url} वर ट्रॅक करा. मदतीसाठी HELP उत्तर द्या.",
    "personalizedBadge": "वैयक्तिकृत फील्ड सक्षम",
    "charCount": "११८ / १६०",
    "repliesTitle": "ग्राहकांचे प्रतिसाद",
    "repliesBadge": "२-वे SMS",
    "inboundText": "तुमची ऑर्डर मार्गावर आहे. समर्थनासाठी HELP उत्तर द्या.",
    "inboundTime": "१०:४२ • पोहोचवले",
    "replyText": "धन्यवाद! मी डिलिव्हरीची वेळ बदलू शकतो का?"
  },
  "capabilitiesBadge": "मेसेजिंग क्षमता",
  "capabilitiesTitle": "प्रगत SMS वैशिष्ट्ये",
  "capabilitiesSubtitle": "आपल्या SMS ऑपरेशनचा प्रत्येक भाग व्यवस्थापित, स्वयंचलित आणि ऑप्टिमाइझ करण्यासाठी शक्तिशाली साधने.",
  "features": [
    {
      "title": "बल्क SMS मोहिमा",
      "desc": "शक्तिशाली मोहीम व्यवस्थापन, शेड्यूलिंग, संपर्क वर्गीकरण आणि अचूक डिलिव्हरी ट्रॅकिंगसह हजारो किंवा लाखो संदेश पाठवा."
    },
    {
      "title": "द्विमार्गी SMS (Two-Way SMS)",
      "desc": "त्याच प्लॅटफॉर्मवरून उत्तरे मिळवा आणि संभाषणे व्यवस्थापित करा. ग्राहक समर्थन, सूचना आणि सहभागासाठी परिपूर्ण."
    },
    {
      "title": "SMS API",
      "desc": "आमच्या शक्तिशाली REST API सह तुमचे ॲप्लिकेशन्स, CRM किंवा व्यावसायिक सॉफ्टवेअर कनेक्ट करा आणि वर्कफ्लो स्वयंचलित करा."
    },
    {
      "title": "Sender ID व्यवस्थापन",
      "desc": "गंतव्यस्थान, मोहीम, ब्रँड किंवा ग्राहकांच्या गरजांवर आधारित एकाधिक प्रेषक आयडी तयार करा आणि व्यवस्थापित करा."
    },
    {
      "title": "स्मार्ट रूटिंग",
      "desc": "गंतव्यस्थान, वाहक, खर्च, गुणवत्ता आणि वितरण कामगिरीच्या आधारावर स्वयंचलितपणे सर्वोत्तम उपलब्ध मार्ग निवडा."
    },
    {
      "title": "डिलिव्हरी अहवाल (DLR)",
      "desc": "वितरित, अयशस्वी, प्रलंबित, कालबाह्य आणि नाकारलेल्या तपशीलवार अहवालांसह रिअल-टाइममध्ये संदेश स्थितीचे निरीक्षण करा."
    }
  ],
  "visibilityBadge": "पारदर्शकता आणि नियंत्रण",
  "visibilityTitle": "प्रत्येक संदेशाचे काय होत आहे ते अचूकपणे जाणून घ्या",
  "visibilitySubtitle": "रिअल-टाइम विश्लेषण आणि अहवालांसह आपल्या SMS ट्रॅफिकवर पूर्ण नियंत्रण मिळवा.",
  "visibilityBullets": [
    "थेट SMS ट्रॅफिक निरीक्षण",
    "रूट कामगिरी विश्लेषण",
    "मोहीम यश दर ट्रॅकिंग",
    "रिअल-टाइम त्वरित सूचना",
    "डिलिव्हरी आणि त्रुटींची आकडेवारी",
    "खर्च आणि वापर अहवाल",
    "API ट्रॅफिक मॉनिटरिंग",
    "देश आणि ऑपरेटर पातळीवरील अहवाल",
    "ग्राहक आणि उप-खाते पातळीवरील अहवाल",
    "डाउनलोड करण्यायोग्य तपशीलवार अहवाल"
  ],
  "enterpriseBadge": "एंटरप्राइझ रेडी",
  "enterpriseTitle": "पुनर्विक्रेते, मोठे उद्योग आणि SMS प्रदात्यांसाठी तयार केलेले",
  "enterpriseSubtitle": "मोठ्या प्रमाणातील मेसेजिंग व्यवसायामागील टीम परवानग्या, किंमती आणि तांत्रिक पायाभूत सुविधा सहजतेने व्यवस्थापित करा.",
  "enterpriseCards": {
    "card1": {
      "title": "तुमचे कार्यक्षेत्र. तुमचा ब्रँड.",
      "header": "कार्यक्षेत्र प्रवेश",
      "user1Name": "आयशा मॉर्गन",
      "user1Role": "प्रशासक",
      "user2Name": "जेम्स ली",
      "user2Role": "ऑपरेटर",
      "user3Name": "सारा खान",
      "user3Role": "वित्त",
      "protectionText": "ट्रॅफिक संरक्षण सक्रिय",
      "bullets": [
        "भूमिका-आधारित बहु-वापरकर्ता प्रवेश (RBAC)",
        "स्वतःच्या ब्रँडिंगसह व्हाईट-लेबल पोर्टल",
        "बहुस्तरीय ग्राहक खाते व्यवस्थापन",
        "फसवणूक आणि गैरवापर प्रतिबंधक मॉनिटरिंग"
      ],
      "note": "उदाहरणात्मक कॉन्फिगरेशन"
    },
    "card2": {
      "title": "व्यावसायिक नियंत्रण, सरलीकृत.",
      "header": "खाते वॉलेट आणि शिल्लक",
      "amount": "$4,850.00",
      "sub": "उपलब्ध क्रेडिट • USD",
      "stat1Label": "ऑक्टोबर वापर",
      "stat1Val": "$2,569.00",
      "stat2Label": "शेवटचे टॉप-अप",
      "stat2Val": "+$5,000.00",
      "pillText": "स्वयंचलित बिलिंग सक्षम",
      "bullets": [
        "वॉलेट आणि क्रेडिट मर्यादा व्यवस्थापन",
        "लवचिक दर कार्ड सेटिंग्ज",
        "स्वयंचलित बिलिंग आणि पावत्या",
        "पारदर्शक आणि पूर्ण व्यवहार इतिहास"
      ],
      "note": "उदाहरणात्मक कॉन्फिगरेशन"
    },
    "card3": {
      "title": "लवचिक किंमती. जोडलेले जागतिक मार्ग.",
      "header": "किंमत आणि कनेक्टिव्हिटी",
      "row1Country": "यूके (UK)",
      "row1Type": "थेट ऑपरेटर",
      "row1Rate": "$0.018",
      "row2Country": "भारत (India)",
      "row2Type": "प्रीमियम A2P",
      "row2Rate": "$0.012",
      "row3Country": "यूएस (US)",
      "row3Type": "मानक A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP ऑनलाइन",
      "pill2": "API ऑनलाइन",
      "bullets": [
        "देशानिहाय सानुकूल किंमती",
        "रूट गुणवत्तेवर आधारित स्तरित दर",
        "एकाधिक दूरसंचार पुरवठादारांचे एकत्रीकरण",
        "हाय-थ्रूपुट SMPP आणि REST API कनेक्टिव्हिटी"
      ],
      "note": "उदाहरणात्मक कॉन्फिगरेशन"
    }
  },
  "workflowBadge": "प्लॅटफॉर्म वर्कफ्लो",
  "workflowTitle": "संदेश निर्मितीपासून अंतिम वितरणापर्यंत",
  "workflowSteps": [
    {
      "step": "01",
      "title": "मोहीम तयार करा",
      "desc": "संदेश लिहा, प्रेक्षक निवडा आणि योग्य पाठवण्याची वेळ निश्चित करा."
    },
    {
      "step": "02",
      "title": "स्मार्ट रूटिंग",
      "desc": "गंतव्यस्थान आणि वेगाच्या गरजेनुसार प्रत्येक संदेश सर्वोत्तम मार्गाशी जुळवा."
    },
    {
      "step": "03",
      "title": "जागतिक वितरण",
      "desc": "थेट दूरसंचार पायाभूत सुविधांद्वारे जगभरातील मोबाइल नेटवर्कवर त्वरित पोहोचा."
    },
    {
      "step": "04",
      "title": "थेट अहवाल",
      "desc": "डिलिव्हरी पावत्या, कामगिरी आणि वापर थेट तुमच्या डॅशबोर्डवरून तपासा."
    }
  ],
  "ctaBadge": "चला तुमचे मेसेजिंग नेटवर्क तयार करूया",
  "ctaTitle": "बिझनेस SMS सोल्यूशन्ससह तुमचा व्यवसाय वाढवा",
  "ctaSubtitle": "इंटेलिजेंट व्हॉईस रूटिंग आणि आंतरराष्ट्रीय टर्मिनेशनपासून ते AI व्हॉईस आणि व्हर्च्युअल DID क्रमांकांपर्यंत, जागतिक बाजारपेठेत ग्राहकांशी विश्वासार्हपणे जोडण्यासाठी iNet Global स्केलेबल दूरसंचार उपाय प्रदान करते.",
  "contactUs": "आमच्याशी संपर्क साधा",
  "ctaTrust1": "९९.९९% एंटरप्राइझ SLA हमी",
  "ctaTrust2": "झटपट API आणि SMPP सेटअप",
  "ctaTrust3": "ग्लोबल टियर-१ ऑपरेटर थेट कनेक्टिव्हिटी"
};

const sw: OtpSmsTranslation = {
  "heroBadge": "SULUHISHO LA TOVUTI YA SMS",
  "heroTitle": "Tovuti Yenye Nguvu ya SMS Iliyoundwa kwa Ujumbe wa Kiasi Kikubwa",
  "heroSubtitle": "Tuma, pokea, simamia na ufuatilie SMS za biashara kutoka kwenye jukwaa moja la akili bandia.",
  "heroDesc": "Kuanzia misimbo ya uthibitishaji ya mtu binafsi hadi kampeni kubwa za biashara, Tovuti yetu ya SMS inakupa zana, otomatiki, njia bora na uchanganuzi unaohitaji ili kuwasiliana kwa uaminifu kamili.",
  "getStarted": "Anza Sasa",
  "bookDemo": "Weka Miadi ya Onyesho",
  "heroFeatures": [
    {
      "title": "Ufikiaji wa SMS Ulimwenguni"
    },
    {
      "title": "Uelekezaji Mahiri wa Hali ya Juu"
    },
    {
      "title": "SMS Nyingi na Kampeni"
    },
    {
      "title": "Ujumbe wa Njia Mbili"
    },
    {
      "title": "Muunganisho Rahisi wa API"
    },
    {
      "title": "Ripoti za Uwasilishaji wa Moja kwa Moja"
    }
  ],
  "managementBadge": "JUKWAA LA USIMAMIZI WA SMS",
  "managementTitle": "Kila Kitu Unachohitaji Kusimamia SMS kwa Ufanisi",
  "platformControlTitle": "Jukwaa Moja. Udhibiti Kamili wa SMS.",
  "platformControlDesc": "Simamia operesheni yako yote ya utumaji ujumbe kutoka kwa dashibodi moja iliyoundwa kwa kasi, uwazi na upanuzi usio na kikomo.",
  "platformControlBullets": [
    "Tunga, weka vigezo binafsi, na panga ratiba ya kampeni kwa urahisi",
    "Weka orodha ya mawasiliano na mazungumzo katika eneo moja la kazi",
    "Fuatilia uwasilishaji, uelekezaji wa mtandao, na matumizi kadiri ujumbe unavyosafirishwa"
  ],
  "campaignCard": {
    "title": "Tengeneza kampeni",
    "draftBadge": "Rasimu imehifadhiwa",
    "step1": "01 Tunga Ujumbe",
    "step2": "02 Walengwa",
    "step3": "03 Ratiba",
    "senderLabel": "Jina la Mtumaji (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Walengwa",
    "audienceVal": "Taarifa za oda • Anwani 24,850",
    "messageLabel": "Ujumbe",
    "messageText": "Habari {first_name}, oda yako {order_id} imesafirishwa. Fuatilia kupitia {tracking_url}. Jibu HELP kupata msaada.",
    "personalizedBadge": "Vigezo vya kibinafsi vimewashwa",
    "charCount": "118 / 160",
    "repliesTitle": "Majibu ya wateja",
    "repliesBadge": "SMS ya njia 2",
    "inboundText": "Oda yako iko njiani. Jibu HELP kupata msaada.",
    "inboundTime": "10:42 • Imewasilishwa",
    "replyText": "Asante sana! Je, naweza kubadilisha muda wa kufikishiwa?"
  },
  "capabilitiesBadge": "UWEZO WA UTUMAJI UJUMBE",
  "capabilitiesTitle": "Vipengele vya Kina vya SMS",
  "capabilitiesSubtitle": "Zana zenye nguvu za kusimamia, kuendesha kiotomatiki na kuboresha kila hatua ya utumaji wako wa SMS.",
  "features": [
    {
      "title": "Kampeni za SMS Nyingi",
      "desc": "Tuma maelfu au mamilioni ya ujumbe ukiwa na usimamizi thabiti wa kampeni, upangaji ratiba, mgawanyo wa walengwa, na ufuatiliaji wa uwasilishaji."
    },
    {
      "title": "SMS za Njia Mbili (Two-Way SMS)",
      "desc": "Pokea majibu na dhibiti mazungumzo kutoka kwenye jukwaa lilelile. Inafaa sana kwa huduma kwa wateja, arifa za miamala, na uthibitishaji."
    },
    {
      "title": "SMS API ya Kisasa",
      "desc": "Unganisha programu zako, mifumo ya CRM, tovuti, au programu za kibiashara kupitia REST API yetu na uendeshe michakato kiotomatiki."
    },
    {
      "title": "Usimamizi wa Sender ID",
      "desc": "Unda na udhibiti majina mengi ya mtumaji kulingana na nchi unayotuma, kampeni, chapa, au mahitaji ya kisheria."
    },
    {
      "title": "Uelekezaji Mahiri (Smart Routing)",
      "desc": "Chagua kiotomatiki njia bora zaidi kulingana na nchi, opereta wa mtandao, gharama, ubora, na mafanikio ya uwasilishaji."
    },
    {
      "title": "Ripoti za Uwasilishaji (DLR)",
      "desc": "Fuatilia hali ya ujumbe kwa wakati halisi: Imewasilishwa, Imeshindikana, Inasubiri, Imepitwa na Wakati, na Imekataliwa."
    }
  ],
  "visibilityBadge": "UWAZI NA UDHIBITI",
  "visibilityTitle": "Jua Kila Kitu Kinachotokea kwa Kila Ujumbe",
  "visibilitySubtitle": "Pata uwazi kamili juu ya trafiki yako ya SMS ukiwa na uchanganuzi na ripoti za kina za wakati halisi.",
  "visibilityBullets": [
    "Ufuatiliaji wa moja kwa moja wa trafiki ya SMS",
    "Uchanganuzi wa ufanisi wa njia za mitandao",
    "Ufuatiliaji wa mafanikio ya kampeni",
    "Arifa za papo hapo matatizo yanapotokea",
    "Takwimu za kina za uwasilishaji na sababu za kushindwa",
    "Ripoti za kina za gharama na matumizi",
    "Ufuatiliaji wa maombi kupitia API",
    "Ripoti kulingana na nchi na waendeshaji simu",
    "Ripoti kulingana na akaunti za wateja",
    "Ripoti zinazoweza kupakuliwa kwa urahisi"
  ],
  "enterpriseBadge": "TAYARI KWA BIASHARA KUBWA",
  "enterpriseTitle": "Imejengwa kwa ajili ya Wauzaji, Makampuni Makubwa na Watoa Huduma za SMS",
  "enterpriseSubtitle": "Simamia ruhusa za timu, viwango vya bei, na miundombinu nyuma ya biashara kubwa ya utumaji ujumbe.",
  "enterpriseCards": {
    "card1": {
      "title": "Eneo lako la kazi. Chapa yako.",
      "header": "Ufikiaji wa eneo la kazi",
      "user1Name": "Aisha Morgan",
      "user1Role": "Msimamizi",
      "user2Name": "James Lee",
      "user2Role": "Opereta",
      "user3Name": "Sara Khan",
      "user3Role": "Fedha",
      "protectionText": "Ulinzi wa trafiki unafanya kazi",
      "bullets": [
        "Ufikiaji wa watumiaji wengi kulingana na majukumu (RBAC)",
        "Tovuti ya White-label yenye chapa yako binafsi",
        "Usimamizi wa akaunti za wateja wa viwango vingi",
        "Ufuatiliaji na kuzuia ulaghai na matumizi mabaya"
      ],
      "note": "Picha ya mfano wa usanidi"
    },
    "card2": {
      "title": "Udhibiti wa kibiashara uliorahisishwa.",
      "header": "Pochi ya akaunti na salio",
      "amount": "$4,850.00",
      "sub": "Salio linalopatikana • USD",
      "stat1Label": "Matumizi ya Oktoba",
      "stat1Val": "$2,569.00",
      "stat2Label": "Ongezeko la mwisho",
      "stat2Val": "+$5,000.00",
      "pillText": "Ankara ya kiotomatiki imewashwa",
      "bullets": [
        "Usimamizi wa salio na viwango vya mkopo",
        "Majedwali ya bei na viwango vinavyobadilika",
        "Utoaji ankara na malipo ya kiotomatiki",
        "Historia kamili na wazi ya miamala"
      ],
      "note": "Picha ya mfano wa usanidi"
    },
    "card3": {
      "title": "Bei nafuu. Njia zilizounganishwa kimataifa.",
      "header": "Bei na miunganisho ya mtandao",
      "row1Country": "Uingereza (UK)",
      "row1Type": "Opereta wa moja kwa moja",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "A2P ya Hali ya Juu",
      "row2Rate": "$0.012",
      "row3Country": "Marekani (US)",
      "row3Type": "A2P ya Kawaida",
      "row3Rate": "$0.022",
      "pill1": "SMPP iko mtandaoni",
      "pill2": "API iko mtandaoni",
      "bullets": [
        "Bei maalum kulingana na nchi",
        "Viwango vya bei kulingana na ubora wa njia",
        "Kuunganisha watoa huduma wengi wa mawasiliano",
        "Muunganisho wa kasi kubwa wa SMPP na API"
      ],
      "note": "Picha ya mfano wa usanidi"
    }
  },
  "workflowBadge": "MTIRIRIKO WA KAZI WA JUKWAA",
  "workflowTitle": "Kuanzia Utungaji wa Ujumbe Hadi Kumfikia Mpokeaji",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Tengeneza Kampeni",
      "desc": "Andika ujumbe wako, chagua walengwa na upange muda mzuri wa kuutuma."
    },
    {
      "step": "02",
      "title": "Uelekezaji Mahiri",
      "desc": "Linganisha kila ujumbe na njia ya mtandao yenye kasi na ubora zaidi."
    },
    {
      "step": "03",
      "title": "Uwasilishaji Ulimwenguni",
      "desc": "Fikia mitandao ya simu kote ulimwenguni kupitia miundombinu ya moja kwa moja ya mawasiliano."
    },
    {
      "step": "04",
      "title": "Ripoti za Moja kwa Moja",
      "desc": "Fuatilia risiti za uwasilishaji, ufanisi wa kasi na gharama moja kwa moja kwenye tovuti yako."
    }
  ],
  "ctaBadge": "TUJENGE MTANDAO WAKO WA UTUMAJI UJUMBE",
  "ctaTitle": "Kuuza Biashara Yako kwa Suluhisho za SMS za Biashara",
  "ctaSubtitle": "Kuanzia uelekezaji mahiri wa simu za sauti na usitishaji wa kimataifa wa jumla hadi Sauti ya AI na nambari pepe za DID, iNet Global hutoa suluhisho za mawasiliano zinazoweza kubadilika ili kusaidia biashara kuungana na wateja wao kwa uwazi na ufanisi ulimwenguni kote.",
  "contactUs": "Wasiliana Nasi",
  "ctaTrust1": "Dhamana ya SLA ya Biashara ya 99.99%",
  "ctaTrust2": "Kuanzisha Papo Hapo API & SMPP",
  "ctaTrust3": "Muunganisho wa Moja kwa Moja na Waendeshaji Simu wa Tier-1"
};

const sv: OtpSmsTranslation = {
  "heroBadge": "SMS-PORTALLÖSNING",
  "heroTitle": "Kraftfull SMS-portal Byggd för Meddelandehantering i Stora Volymer",
  "heroSubtitle": "Skicka, ta emot, hantera och övervaka företags-SMS från en och samma intelligenta plattform.",
  "heroDesc": "Från enstaka verifieringskoder till storskaliga marknadskampanjer – vår SMS-portal ger dig verktygen, automatiseringen, smart routing och analyserna du behöver för pålitlig kommunikation.",
  "getStarted": "Kom Igång Nu",
  "bookDemo": "Boka en Demo",
  "heroFeatures": [
    {
      "title": "Global SMS-täckning"
    },
    {
      "title": "Avancerad Smart Routing"
    },
    {
      "title": "Mass-SMS & Kampanjer"
    },
    {
      "title": "Tvåvägsmeddelanden"
    },
    {
      "title": "Smidig API-integration"
    },
    {
      "title": "Leveransrapporter i Realtid"
    }
  ],
  "managementBadge": "SMS-HANTERINGSPLATTFORM",
  "managementTitle": "Allt du Behöver för att Hantera SMS Professionellt",
  "platformControlTitle": "En Plattform. Fullständig SMS-kontroll.",
  "platformControlDesc": "Hantera hela din meddelandeverksamhet från en centraliserad instrumentpanel utformad för snabbhet, transparens och skalbarhet.",
  "platformControlBullets": [
    "Skapa, anpassa med dynamiska variabler och schemalägg kampanjer",
    "Samla kontakter och pågående dialoger i en gemensam arbetsyta",
    "Följ leveransstatus, operatörsrutter och kostnader i realtid"
  ],
  "campaignCard": {
    "title": "Skapa en kampanj",
    "draftBadge": "Utkast sparat",
    "step1": "01 Skriv",
    "step2": "02 Målgrupp",
    "step3": "03 Schemalägg",
    "senderLabel": "Avsändar-ID (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Målgrupp",
    "audienceVal": "Orderuppdateringar • 24 850 kontakter",
    "messageLabel": "Meddelande",
    "messageText": "Hej {first_name}, din order {order_id} har skickats. Spåra på {tracking_url}. Svara HELP för support.",
    "personalizedBadge": "Personliga variabler aktiverade",
    "charCount": "118 / 160",
    "repliesTitle": "Kundsvar",
    "repliesBadge": "2-vägs SMS",
    "inboundText": "Din leverans är på väg. Svara HELP för support.",
    "inboundTime": "10:42 • Levererat",
    "replyText": "Tack! Kan jag ändra önskad leveranstid?"
  },
  "capabilitiesBadge": "MEDDELANDEKAPACITET",
  "capabilitiesTitle": "Avancerade SMS-funktioner",
  "capabilitiesSubtitle": "Kraftfulla verktyg för att hantera, automatisera och optimera varje steg i ditt SMS-flöde.",
  "features": [
    {
      "title": "Mass-SMS Kampanjer",
      "desc": "Skicka tusentals eller miljontals meddelanden med robust kampanjhantering, schemaläggning, kontaktsegmentering och leveransspårning."
    },
    {
      "title": "Tvåvägs-SMS (Two-Way SMS)",
      "desc": "Ta emot svar och hantera konversationer på samma plattform. Perfekt för kundsupport, viktiga aviseringar och engagemang."
    },
    {
      "title": "SMS API-gränssnitt",
      "desc": "Koppla ihop dina applikationer, CRM, e-handel eller affärssystem via vårt REST API och automatisera meddelandeflödena."
    },
    {
      "title": "Hantering av Avsändar-ID",
      "desc": "Skapa och administrera flera alfanumeriska avsändar-ID baserat på destinationsland, kampanj, varumärke eller regelverk."
    },
    {
      "title": "Smart Routing",
      "desc": "Välj automatiskt den bästa tillgängliga rutten baserat på destination, mobiloperatör, kostnad och leveranssäkerhet."
    },
    {
      "title": "Leveransrapporter (DLR)",
      "desc": "Övervaka meddelandestatus i realtid med detaljerade rapporter: Levererat, Misslyckat, Väntande, Utgånget och Avvisat."
    }
  ],
  "visibilityBadge": "SYNLIGHET OCH KONTROLL",
  "visibilityTitle": "Ha Full Koll på Vad Som Händer med Varje Meddelande",
  "visibilitySubtitle": "Få fullständig insyn i din SMS-trafik med realtidsanalyser och omfattande rapportering.",
  "visibilityBullets": [
    "Realtidsövervakning av SMS-trafik",
    "Prestandaanalys per routingrutt",
    "Uppföljning av kampanjresultat",
    "Automatiska varningar i realtid vid avvikelser",
    "Statistik över leveranser och felkoder",
    "Kostnads- och förbrukningsrapporter",
    "Övervakning av API-trafik och anrop",
    "Rapporter per land och mobiloperatör",
    "Rapporter per kundkonto och underkonto",
    "Enkel export och nedladdning av data"
  ],
  "enterpriseBadge": "ANPASSAT FÖR FÖRETAG",
  "enterpriseTitle": "Byggt för Återförsäljare, Företag och SMS-leverantörer",
  "enterpriseSubtitle": "Hantera teambehörigheter, prismodeller och telekominfrastruktur bakom en storskalig meddelandeverksamhet.",
  "enterpriseCards": {
    "card1": {
      "title": "Din arbetsyta. Ditt varumärke.",
      "header": "Åtkomsthantering",
      "user1Name": "Aisha Morgan",
      "user1Role": "Administratör",
      "user2Name": "James Lee",
      "user2Role": "Operatör",
      "user3Name": "Sara Khan",
      "user3Role": "Ekonomi",
      "protectionText": "Trafikskydd aktivt",
      "bullets": [
        "Rollbaserad åtkomstkontroll för flera användare (RBAC)",
        "White-label portal under eget varumärke",
        "Strukturerad hantering av kundkonton i flera nivåer",
        "Realtidsövervakning mot bedrägerier och missbruk"
      ],
      "note": "Illustrativ konfigurationsvy"
    },
    "card2": {
      "title": "Kommersiell kontroll, förenklad.",
      "header": "Kontosaldo och plånbok",
      "amount": "$4,850.00",
      "sub": "Tillgänglig kredit • USD",
      "stat1Label": "Förbrukning oktober",
      "stat1Val": "$2,569.00",
      "stat2Label": "Senaste påfyllning",
      "stat2Val": "+$5,000.00",
      "pillText": "Automatisk fakturering aktiverad",
      "bullets": [
        "Hantering av saldo och kreditgränser",
        "Flexibla prislistor (Rate Cards)",
        "Automatiserad fakturering",
        "Fullständig och transparent transaktionshistorik"
      ],
      "note": "Illustrativ konfigurationsvy"
    },
    "card3": {
      "title": "Flexibla priser. Anslutna rutter.",
      "header": "Priser & operatörsanslutning",
      "row1Country": "Storbritannien (UK)",
      "row1Type": "Direkt operatör",
      "row1Rate": "$0.018",
      "row2Country": "Indien (India)",
      "row2Type": "Premium A2P",
      "row2Rate": "$0.012",
      "row3Country": "USA (US)",
      "row3Type": "Standard A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Landsspecifik prissättning",
        "Nivåanpassade priser efter ruttkvalitet",
        "Integration av flera leverantörsrutter",
        "Högkapacitetsanslutning via SMPP och REST API"
      ],
      "note": "Illustrativ konfigurationsvy"
    }
  },
  "workflowBadge": "PLATTFORMSFLÖDE",
  "workflowTitle": "Från Meddelandeskapande till Mottagarens Mobil",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Skapa Kampanj",
      "desc": "Skriv ditt meddelande, välj målgrupp och schemalägg det optimala sändningstillfället."
    },
    {
      "step": "02",
      "title": "Smart Routing",
      "desc": "Matcha varje meddelande med den snabbaste och mest pålitliga operatörsrutten."
    },
    {
      "step": "03",
      "title": "Global Leverans",
      "desc": "Nå mobilnätverk världen över genom direkt ansluten telekominfrastruktur."
    },
    {
      "step": "04",
      "title": "Realtidsrapportering",
      "desc": "Följ kvitto, leveranshastighet och kostnader live direkt i din portal."
    }
  ],
  "ctaBadge": "LÅT OSS BYGGA DITT MEDDELANDENÄTVERK",
  "ctaTitle": "Få Företaget att Växa med Företagsanpassade SMS-lösningar",
  "ctaSubtitle": "Från intelligent samtalsdirigering och internationell wholesale-terminering till AI Voice och virtuella DID-nummer – iNet Global tillhandahåller skalbara telekomlösningar för att koppla ihop företag med kunder världen över på ett tydligt, pålitligt och effektivt sätt.",
  "contactUs": "Kontakta Oss",
  "ctaTrust1": "Garanterat 99.99% Enterprise SLA",
  "ctaTrust2": "Snabb och Direkt Installation av API & SMPP",
  "ctaTrust3": "Direktanslutning till Globala Tier-1 Operatörer"
};

const el: OtpSmsTranslation = {
  "heroBadge": "ΛΥΣΗ ΠΥΛΗΣ SMS",
  "heroTitle": "Ισχυρή Πύλη SMS Σχεδιασμένη για Ανταλλαγή Μηνυμάτων Μεγάλου Όγκου",
  "heroSubtitle": "Στείλτε, λάβετε, διαχειριστείτε και παρακολουθήστε επιχειρηματικά SMS από μία έξυπνη πλατφόρμα.",
  "heroDesc": "Από μεμονωμένους κωδικούς επαλήθευσης έως εκστρατείες εταιρικής κλίμακας, η πύλη SMS μας σας παρέχει τα εργαλεία, τον αυτοματισμό, τη δρομολόγηση και τα αναλυτικά στοιχεία που χρειάζεστε για αξιόπιστη επικοινωνία.",
  "getStarted": "Ξεκινήστε Τώρα",
  "bookDemo": "Κλείστε μια Επίδειξη",
  "heroFeatures": [
    {
      "title": "Παγκόσμια Κάλυψη SMS"
    },
    {
      "title": "Προηγμένη Έξυπνη Δρομολόγηση"
    },
    {
      "title": "Μαζικά SMS & Καμπάνιες"
    },
    {
      "title": "Αμφίδρομη Ανταλλαγή Μηνυμάτων"
    },
    {
      "title": "Εύκολη Ενσωμάτωση API"
    },
    {
      "title": "Αναφορές Παράδοσης σε Πραγματικό Χρόνο"
    }
  ],
  "managementBadge": "ΠΛΑΤΦΟΡΜΑ ΔΙΑΧΕΙΡΙΣΗΣ SMS",
  "managementTitle": "Όλα Όσα Χρειάζεστε για τη Διαχείριση SMS",
  "platformControlTitle": "Μία Πλατφόρμα. Πλήρης Έλεγχος SMS.",
  "platformControlDesc": "Διαχειριστείτε ολόκληρη τη λειτουργία ανταλλαγής μηνυμάτων από έναν κεντρικό πίνακα ελέγχου, σχεδιασμένο για ταχύτητα, διαφάνεια και επεκτασιμότητα.",
  "platformControlBullets": [
    "Συντάξτε, εξατομικεύστε και προγραμματίστε καμπάνιες με ευκολία",
    "Διατηρήστε επαφές και συνομιλίες σε έναν ενιαίο χώρο εργασίας",
    "Παρακολουθήστε παράδοση, δρομολόγηση και κατανάλωση σε πραγματικό χρόνο"
  ],
  "campaignCard": {
    "title": "Δημιουργία καμπάνιας",
    "draftBadge": "Το προσχέδιο αποθηκεύτηκε",
    "step1": "01 Σύνταξη",
    "step2": "02 Κοινό",
    "step3": "03 Προγραμματισμός",
    "senderLabel": "Ταυτότητα Αποστολέα (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Κοινό",
    "audienceVal": "Ενημερώσεις παραγγελιών • 24.850 επαφές",
    "messageLabel": "Μήνυμα",
    "messageText": "Γεια σας {first_name}, η παραγγελία σας {order_id} έχει αποσταλεί. Εντοπισμός στο {tracking_url}. Απαντήστε HELP για υποστήριξη.",
    "personalizedBadge": "Εξατομικευμένα πεδία ενεργά",
    "charCount": "118 / 160",
    "repliesTitle": "Απαντήσεις πελατών",
    "repliesBadge": "SMS 2 κατευθύνσεων",
    "inboundText": "Η παραγγελία σας βρίσκεται καθ' οδόν. Απαντήστε HELP για βοήθεια.",
    "inboundTime": "10:42 • Παραδόθηκε",
    "replyText": "Ευχαριστώ πολύ! Μπορώ να αλλάξω την ώρα παράδοσης;"
  },
  "capabilitiesBadge": "ΔΥΝΑΤΟΤΗΤΕΣ ΜΗΝΥΜΑΤΩΝ",
  "capabilitiesTitle": "Προηγμένες Δυνατότητες SMS",
  "capabilitiesSubtitle": "Ισχυρά εργαλεία για τη διαχείριση, τον αυτοματισμό και τη βελτιστοποίηση κάθε σταδίου των μηνυμάτων σας.",
  "features": [
    {
      "title": "Μαζικές Καμπάνιες SMS",
      "desc": "Στείλτε χιλιάδες ή εκατομμύρια μηνύματα με ισχυρή διαχείριση καμπάνιας, προγραμματισμό, τμηματοποίηση επαφών και παρακολούθηση παράδοσης."
    },
    {
      "title": "Αμφίδρομο SMS (Two-Way SMS)",
      "desc": "Λάβετε απαντήσεις και διαχειριστείτε συνομιλίες από την ίδια πλατφόρμα. Ιδανικό για υποστήριξη πελατών, ειδοποιήσεις και διαδραστικότητα."
    },
    {
      "title": "SMS API για Ενσωματώσεις",
      "desc": "Συνδέστε τις εφαρμογές σας, το CRM, τον ιστότοπο ή το εταιρικό λογισμικό σας με το ισχυρό REST API και αυτοματοποιήστε τις ροές εργασίας σας."
    },
    {
      "title": "Διαχείριση Sender ID",
      "desc": "Δημιουργήστε και διαχειριστείτε πολλαπλά Sender IDs με βάση τον προορισμό, την καμπάνια, το εμπορικό σήμα ή τις απαιτήσεις των πελατών."
    },
    {
      "title": "Έξυπνη Δρομολόγηση (Smart Routing)",
      "desc": "Επιλέξτε αυτόματα την καλύτερη διαθέσιμη διαδρομή με βάση τον προορισμό, τον πάροχο, το κόστος, την ποιότητα και την ταχύτητα παράδοσης."
    },
    {
      "title": "Αναφορές Παράδοσης (DLR)",
      "desc": "Παρακολουθήστε την κατάσταση των μηνυμάτων σε πραγματικό χρόνο: Παραδόθηκε, Απέτυχε, Σε εκκρεμότητα, Έληξε και Απορρίφθηκε."
    }
  ],
  "visibilityBadge": "ΟΡΑΤΟΤΗΤΑ ΚΑΙ ΕΛΕΓΧΟΣ",
  "visibilityTitle": "Μάθετε Τι Συμβαίνει με Κάθε Μήνυμα Αναλυτικά",
  "visibilitySubtitle": "Αποκτήστε πλήρη εικόνα της κίνησης SMS με αναλύσεις και αναφορές σε πραγματικό χρόνο.",
  "visibilityBullets": [
    "Παρακολούθηση κίνησης SMS σε πραγματικό χρόνο",
    "Αναλύσεις απόδοσης διαδρομών δικτύου",
    "Μέτρηση αποτελεσματικότητας καμπανιών",
    "Άμεσες ειδοποιήσεις συμβάντων σε πραγματικό χρόνο",
    "Στατιστικά παράδοσης και αιτίες αποτυχιών",
    "Αναφορές κόστους και χρήσης",
    "Παρακολούθηση κίνησης και κλήσεων API",
    "Αναφορές ανά χώρα και πάροχο κινητής",
    "Αναφορές ανά λογαριασμό πελάτη",
    "Εύκολη λήψη και εξαγωγή αναφορών"
  ],
  "enterpriseBadge": "ΕΤΟΙΜΟ ΓΙΑ ΕΠΙΧΕΙΡΗΣΕΙΣ",
  "enterpriseTitle": "Σχεδιασμένο για Μεταπωλητές, Επιχειρήσεις και Παρόχους SMS",
  "enterpriseSubtitle": "Διαχειριστείτε την ομάδα, την τιμολόγηση και την τεχνική υποδομή πίσω από μια επιχείρηση ανταλλαγής μηνυμάτων μεγάλης κλίμακας.",
  "enterpriseCards": {
    "card1": {
      "title": "Ο χώρος εργασίας σας. Η επωνυμία σας.",
      "header": "Πρόσβαση στον χώρο εργασίας",
      "user1Name": "Aisha Morgan",
      "user1Role": "Διαχειριστής",
      "user2Name": "James Lee",
      "user2Role": "Χειριστής",
      "user3Name": "Sara Khan",
      "user3Role": "Οικονομικά",
      "protectionText": "Προστασία κίνησης ενεργή",
      "bullets": [
        "Πρόσβαση πολλών χρηστών βάσει ρόλων (RBAC)",
        "White-label πύλη με τη δική σας επωνυμία",
        "Πολυεπίπεδη διαχείριση λογαριασμών πελατών",
        "Συνεχής παρακολούθηση κατά της απάτης και της κατάχρησης"
      ],
      "note": "Ενδεικτική απεικόνιση διαμόρφωσης"
    },
    "card2": {
      "title": "Εμπορικός έλεγχος, απλοποιημένος.",
      "header": "Πορτοφόλι και υπόλοιπο λογαριασμού",
      "amount": "$4,850.00",
      "sub": "Διαθέσιμη πίστωση • USD",
      "stat1Label": "Χρήση Οκτωβρίου",
      "stat1Val": "$2,569.00",
      "stat2Label": "Τελευταία ανανέωση",
      "stat2Val": "+$5,000.00",
      "pillText": "Αυτόματη τιμολόγηση ενεργή",
      "bullets": [
        "Διαχείριση υπολοίπου και πιστωτικών ορίων",
        "Ευέλικτοι τιμοκατάλογοι (Rate Cards)",
        "Αυτοματοποιημένη έκδοση τιμολογίων",
        "Πλήρες και διαφανές ιστορικό συναλλαγών"
      ],
      "note": "Ενδεικτική απεικόνιση διαμόρφωσης"
    },
    "card3": {
      "title": "Ευέλικτη τιμολόγηση. Διασυνδεδεμένες διαδρομές.",
      "header": "Τιμές και διασύνδεση",
      "row1Country": "Ηνωμένο Βασίλειο (UK)",
      "row1Type": "Άμεσος πάροχος",
      "row1Rate": "$0.018",
      "row2Country": "Ινδία (India)",
      "row2Type": "Premium A2P",
      "row2Rate": "$0.012",
      "row3Country": "ΗΠΑ (US)",
      "row3Type": "Standard A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP συνδεδεμένο",
      "pill2": "API συνδεδεμένο",
      "bullets": [
        "Προσαρμοσμένη τιμολόγηση ανά χώρα",
        "Διαβαθμισμένες τιμές ανά ποιότητα διαδρομής",
        "Ενσωμάτωση πολλαπλών προμηθευτών τηλεπικοινωνιών",
        "Συνδεσιμότητα υψηλής ταχύτητας μέσω SMPP και API"
      ],
      "note": "Ενδεικτική απεικόνιση διαμόρφωσης"
    }
  },
  "workflowBadge": "ΡΟΗ ΕΡΓΑΣΙΑΣ ΠΛΑΤΦΟΡΜΑΣ",
  "workflowTitle": "Από τη Σύνταξη του Μηνύματος μέχρι την Παράδοση στον Παραλήπτη",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Δημιουργία Καμπάνιας",
      "desc": "Συντάξτε το μήνυμά σας, επιλέξτε το κοινό και προγραμματίστε την ιδανική στιγμή αποστολής."
    },
    {
      "step": "02",
      "title": "Έξυπνη Δρομολόγηση",
      "desc": "Αντιστοιχίστε κάθε μήνυμα στην ταχύτερη και πιο αξιόπιστη διαδρομή για τον προορισμό του."
    },
    {
      "step": "03",
      "title": "Παγκόσμια Παράδοση",
      "desc": "Προσεγγίστε δίκτυα κινητής τηλεφωνίας παγκοσμίως μέσω άμεσης τηλεπικοινωνιακής υποδομής."
    },
    {
      "step": "04",
      "title": "Αναφορές σε Πραγματικό Χρόνο",
      "desc": "Παρακολουθήστε αποδείξεις παράδοσης, ταχύτητα και κατανάλωση απευθείας από την πύλη σας."
    }
  ],
  "ctaBadge": "ΑΣ ΧΤΙΣΟΥΜΕ ΤΟ ΔΙΚΤΥΟ ΜΗΝΥΜΑΤΩΝ ΣΑΣ",
  "ctaTitle": "Αναπτύξτε την Επιχείρησή σας με Εταιρικές Λύσεις SMS",
  "ctaSubtitle": "Από την έξυπνη δρομολόγηση φωνής και τον διεθνή τερματισμό έως το AI Voice και τους εικονικούς αριθμούς DID, η iNet Global παρέχει κλιμακούμενες τηλεπικοινωνιακές λύσεις που βοηθούν τις επιχειρήσεις να συνδέονται με τους πελάτες τους με σαφήνεια και αξιοπιστία παγκοσμίως.",
  "contactUs": "Επικοινωνήστε μαζί μας",
  "ctaTrust1": "Εγγύηση Εταιρικού SLA 99.99%",
  "ctaTrust2": "Άμεση Ενεργοποίηση API & SMPP",
  "ctaTrust3": "Απευθείας Σύνδεση με Παγκόσμιους Παρόχους Tier-1"
};

const cs: OtpSmsTranslation = {
  "heroBadge": "ŘEŠENÍ SMS PORTÁLU",
  "heroTitle": "Výkonný SMS Portál Vytvořený pro Velkoobjemové Firemní Zprávy",
  "heroSubtitle": "Odesílejte, přijímejte, spravujte a monitorujte firemní SMS z jedné inteligentní platformy.",
  "heroDesc": "Od jednotlivých ověřovacích kódů až po rozsáhlé podnikové kampaně – náš SMS portál vám poskytuje nástroje, automatizaci, chytré směrování a analytiku potřebnou pro spolehlivou komunikaci.",
  "getStarted": "Začít Nyní",
  "bookDemo": "Rezervovat Ukázku",
  "heroFeatures": [
    {
      "title": "Globální SMS Pokrytí"
    },
    {
      "title": "Pokročilé Inteligentní Směrování"
    },
    {
      "title": "Hromadné SMS a Kampaně"
    },
    {
      "title": "Obousměrné Zprávy"
    },
    {
      "title": "Snadná Integrace API"
    },
    {
      "title": "Reporty o Doručení v Reálném Čase"
    }
  ],
  "managementBadge": "PLATFORMA PRO SPRÁVU SMS",
  "managementTitle": "Vše, Co Potřebujete ke Správě Firemních SMS",
  "platformControlTitle": "Jedna Platforma. Kompletní Kontrola nad SMS.",
  "platformControlDesc": "Spravujte celý provoz zpráv z centralizovaného ovládacího panelu navrženého pro vysokou rychlost, přehlednost a škálovatelnost.",
  "platformControlBullets": [
    "Vytvářejte, personalizujte a plánujte kampaně v několika krocích",
    "Mějte kontakty a konverzace uspořádané v jednom pracovním prostoru",
    "Sledujte doručení, směrování a náklady v reálném čase"
  ],
  "campaignCard": {
    "title": "Vytvořit kampaň",
    "draftBadge": "Koncept uložen",
    "step1": "01 Napsat",
    "step2": "02 Příjemci",
    "step3": "03 Naplánovat",
    "senderLabel": "ID Odesílatele (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Cílová skupina",
    "audienceVal": "Stav objednávek • 24 850 kontaktů",
    "messageLabel": "Text zprávy",
    "messageText": "Dobrý den {first_name}, vaše objednávka {order_id} byla odeslána. Sledování: {tracking_url}. Pro podporu odpovězte HELP.",
    "personalizedBadge": "Dynamická pole aktivována",
    "charCount": "118 / 160",
    "repliesTitle": "Odpovědi zákazníků",
    "repliesBadge": "Obousměrné SMS",
    "inboundText": "Vaše objednávka je na cestě. Pro podporu odpovězte HELP.",
    "inboundTime": "10:42 • Doručeno",
    "replyText": "Děkuji! Mohu změnit čas doručení?"
  },
  "capabilitiesBadge": "MOŽNOSTI ZASÍLÁNÍ ZPRÁV",
  "capabilitiesTitle": "Pokročilé Funkce SMS",
  "capabilitiesSubtitle": "Výkonné nástroje pro správu, automatizaci a optimalizaci každé části vašeho SMS provozu.",
  "features": [
    {
      "title": "Hromadné SMS Kampaně",
      "desc": "Odesílejte tisíce nebo miliony zpráv díky efektivní správě kampaní, plánování, segmentaci kontaktů a přesnému sledování doručení."
    },
    {
      "title": "Obousměrné SMS (Two-Way SMS)",
      "desc": "Přijímejte odpovědi a veďte konverzace přímo v platformě. Ideální pro zákaznickou podporu, upozornění a interakci."
    },
    {
      "title": "SMS API Rozhraní",
      "desc": "Propojte své aplikace, CRM, e-shop nebo podnikový software s naším výkonným REST API a automatizujte své komunikační toky."
    },
    {
      "title": "Správa Sender ID",
      "desc": "Vytvářejte a spravujte více alfanumerických identifikátorů odesílatele podle cílové země, kampaně, značky nebo legislativy."
    },
    {
      "title": "Chytré Směrování (Smart Routing)",
      "desc": "Automaticky zvolte nejlepší dostupnou trasu podle cíle, operátora, nákladů, kvality linky a úspěšnosti doručení."
    },
    {
      "title": "Reporty o Doručení (DLR)",
      "desc": "Sledujte stav zpráv v reálném čase: Doručeno, Selhalo, Čeká, Vypršelo a Odmítnuto s podrobnými údaji."
    }
  ],
  "visibilityBadge": "PŘEHLED A KONTROLA",
  "visibilityTitle": "Mějte Přesný Přehled o Tom, Co se Děje s Každou Zprávou",
  "visibilitySubtitle": "Získejte úplnou kontrolu nad svým provozem SMS díky analytice a přehledným reportům v reálném čase.",
  "visibilityBullets": [
    "Sledování SMS provozu v reálném čase",
    "Analýza výkonu jednotlivých tras operátorů",
    "Měření úspěšnosti a efektivity kampaní",
    "Okamžitá automatická upozornění při potížích",
    "Podrobné statistiky doručení a chybových kódů",
    "Transparentní přehledy nákladů a spotřeby",
    "Monitorování provozu API rozhraní",
    "Přehledy podle zemí a mobilních operátorů",
    "Výkazy podle zákaznických a podřízených účtů",
    "Rychlý export a stahování dat na jedno kliknutí"
  ],
  "enterpriseBadge": "PŘIPRAVENO PRO PODNIKY",
  "enterpriseTitle": "Vytvořeno pro Přeprodejce, Velké Podniky a Poskytovatele SMS",
  "enterpriseSubtitle": "Spravujte tým, cenové modely a infrastrukturu škálovatelného podnikání v oblasti zasílání zpráv.",
  "enterpriseCards": {
    "card1": {
      "title": "Váš pracovní prostor. Vaše značka.",
      "header": "Přístup k pracovnímu prostoru",
      "user1Name": "Aisha Morgan",
      "user1Role": "Správce",
      "user2Name": "James Lee",
      "user2Role": "Operátor",
      "user3Name": "Sara Khan",
      "user3Role": "Finance",
      "protectionText": "Ochrana provozu aktivní",
      "bullets": [
        "Víceuživatelský přístup na základě rolí (RBAC)",
        "White-label portál s vlastní značkou",
        "Víceúrovňová správa klientských účtů",
        "Aktivní dohled proti podvodům a zneužití"
      ],
      "note": "Ilustrativní konfigurace"
    },
    "card2": {
      "title": "Obchodní kontrola bez zbytečných složitostí.",
      "header": "Peněženka a zůstatek účtu",
      "amount": "$4,850.00",
      "sub": "Dostupný kredit • USD",
      "stat1Label": "Spotřeba v říjnu",
      "stat1Val": "$2,569.00",
      "stat2Label": "Poslední dobití",
      "stat2Val": "+$5,000.00",
      "pillText": "Automatická fakturace zapnuta",
      "bullets": [
        "Správa zůstatku a úvěrových limitů",
        "Flexibilní nastavení ceníků (Rate Cards)",
        "Automatizovaná fakturace a vyúčtování",
        "Kompletní a transparentní historie transakcí"
      ],
      "note": "Ilustrativní konfigurace"
    },
    "card3": {
      "title": "Flexibilní ceny. Globálně propojené trasy.",
      "header": "Ceny a konektivita",
      "row1Country": "Velká Británie (UK)",
      "row1Type": "Přímý operátor",
      "row1Rate": "$0.018",
      "row2Country": "Indie (India)",
      "row2Type": "Prémiové A2P",
      "row2Rate": "$0.012",
      "row3Country": "USA (US)",
      "row3Type": "Standardní A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Cenotvorba na míru podle jednotlivých zemí",
        "Odstupňované ceny podle kvality trasy",
        "Integrace více telekomunikačních dodavatelů",
        "Vysokokapacitní propojení přes SMPP a REST API"
      ],
      "note": "Ilustrativní konfigurace"
    }
  },
  "workflowBadge": "PRACOVNÍ POSTUP PLATFORMY",
  "workflowTitle": "Od Vytvoření Zprávy až po Doručení Příjemci",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Vytvořte Kampaň",
      "desc": "Napište zprávu, vyberte cílové příjemce a nastavte optimální čas odeslání."
    },
    {
      "step": "02",
      "title": "Chytré Směrování",
      "desc": "Přiřaďte každou SMS nejrychlejší a nejspolehlivější trase dle destinace."
    },
    {
      "step": "03",
      "title": "Globální Doručení",
      "desc": "Oslovte mobilní sítě po celém světě prostřednictvím přímo propojené telekomunikační infrastruktury."
    },
    {
      "step": "04",
      "title": "Přehledy v Reálném Čase",
      "desc": "Sledujte potvrzení o doručení, rychlost a náklady přímo ve svém portálu."
    }
  ],
  "ctaBadge": "VYBUDUJME VAŠI GLOBÁLNÍ SÍŤ ZPRÁV",
  "ctaTitle": "Rozvíjejte Své Podnikání s Firemními SMS Řešeními",
  "ctaSubtitle": "Od inteligentního směrování hlasu a mezinárodní velkoobchodní terminace po AI Voice a virtuální čísla DID – iNet Global poskytuje škálovatelná telekomunikační řešení, která pomáhají firmám spolehlivě a efektivně komunikovat se zákazníky po celém světě.",
  "contactUs": "Kontaktujte Nás",
  "ctaTrust1": "Záruka Podnikového SLA 99.99%",
  "ctaTrust2": "Okamžité Nastavení API & SMPP",
  "ctaTrust3": "Přímé Propojení s Globálními Operátory Tier-1"
};

const ro: OtpSmsTranslation = {
  "heroBadge": "SOLUȚIE PORTAL SMS",
  "heroTitle": "Portal SMS Puternic Creat pentru Mesagerie de Mare Volum",
  "heroSubtitle": "Trimiteți, primiți, gestionați și monitorizați SMS-urile de afaceri dintr-o singură platformă inteligentă.",
  "heroDesc": "De la coduri unice de verificare până la campanii promoționale la scară largă, portalul nostru SMS vă oferă instrumentele, automatizarea, rutarea și analizele necesare pentru a comunica cu maximă fiabilitate.",
  "getStarted": "Începeți Acum",
  "bookDemo": "Programați o Prezentare",
  "heroFeatures": [
    {
      "title": "Acoperire SMS Globală"
    },
    {
      "title": "Rutare Inteligentă Avansată"
    },
    {
      "title": "SMS-uri în Masă & Campanii"
    },
    {
      "title": "Mesagerie Bidirecțională"
    },
    {
      "title": "Integrare Ușoară prin API"
    },
    {
      "title": "Rapoarte de Livrare în Timp Real"
    }
  ],
  "managementBadge": "PLATFORMĂ DE GESTIONARE SMS",
  "managementTitle": "Tot ce Aveți Nevoie pentru a Gestiona SMS-urile Eficient",
  "platformControlTitle": "O Singură Platformă. Control Total asupra SMS-urilor.",
  "platformControlDesc": "Gestionați întreaga operațiune de mesagerie dintr-un panou centralizat conceput pentru viteză, vizibilitate și scalabilitate.",
  "platformControlBullets": [
    "Compuneți, personalizați și programați campanii în câțiva pași simpli",
    "Păstrați contactele și conversațiile într-un singur spațiu de lucru comun",
    "Urmăriți livrarea, rutele și costurile în timp real, pe măsură ce mesajele circulă"
  ],
  "campaignCard": {
    "title": "Creați o campanie",
    "draftBadge": "Ciornă salvată",
    "step1": "01 Compuneți",
    "step2": "02 Audiență",
    "step3": "03 Programare",
    "senderLabel": "ID Expeditor (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Audiență",
    "audienceVal": "Actualizări comenzi • 24.850 contacte",
    "messageLabel": "Mesaj",
    "messageText": "Bună {first_name}, comanda ta {order_id} a fost expediată. Urmărește la {tracking_url}. Răspunde HELP pentru suport.",
    "personalizedBadge": "Câmpuri personalizate active",
    "charCount": "118 / 160",
    "repliesTitle": "Răspunsuri de la clienți",
    "repliesBadge": "SMS bidirecțional",
    "inboundText": "Comanda dvs. este pe drum. Răspundeți HELP pentru asistență.",
    "inboundTime": "10:42 • Livrat",
    "replyText": "Mulțumesc mult! Pot schimba intervalul orar de livrare?"
  },
  "capabilitiesBadge": "CAPACITĂȚI DE MESAGERIE",
  "capabilitiesTitle": "Funcționalități SMS Avansate",
  "capabilitiesSubtitle": "Instrumente puternice pentru a gestiona, automatiza și optimiza fiecare etapă a fluxurilor dvs. de SMS.",
  "features": [
    {
      "title": "Campanii SMS în Masă",
      "desc": "Trimiteți mii sau milioane de mesaje cu instrumente robuste de gestionare a campaniilor, programare flexibilă, segmentare a contactelor și urmărire a livrării."
    },
    {
      "title": "SMS Bidirecțional (Two-Way SMS)",
      "desc": "Primiți răspunsuri și gestionați conversații pe aceeași platformă. Ideal pentru asistență clienți, alerte, autentificare și interacțiune continuă."
    },
    {
      "title": "API SMS Performant",
      "desc": "Conectați-vă aplicațiile, CRM-ul, magazinul online sau sistemele interne prin intermediul puternicului nostru REST API și automatizați-vă fluxurile."
    },
    {
      "title": "Gestionarea Sender ID",
      "desc": "Creați și administrați mai multe ID-uri de expeditor alfanumerice în funcție de țara de destinație, campanie, marcă sau cerințe legislative."
    },
    {
      "title": "Rutare Inteligentă (Smart Routing)",
      "desc": "Selectați automat cea mai bună rută disponibilă în funcție de destinație, operator mobil, cost, calitate și rata de livrare confirmată."
    },
    {
      "title": "Rapoarte de Livrare (DLR)",
      "desc": "Monitorizați starea mesajelor în timp real: Livrat, Eșuat, În așteptare, Expirat și Respins, cu detalii complete."
    }
  ],
  "visibilityBadge": "VIZIBILITATE ȘI CONTROL",
  "visibilityTitle": "Aflați Exact Ce se Întâmplă cu Fiecare Mesaj Trimis",
  "visibilitySubtitle": "Obțineți o vizibilitate completă asupra traficului dvs. de SMS cu analize detaliate și rapoarte în timp real.",
  "visibilityBullets": [
    "Monitorizare live a traficului de SMS-uri",
    "Analize de performanță pe fiecare rută de rețea",
    "Urmărirea eficacității campaniilor de comunicare",
    "Alerte automate în timp real la apariția anomaliilor",
    "Statistici detaliate de livrare și motive de eșec",
    "Rapoarte clare de costuri și consum",
    "Monitorizarea traficului și cererilor prin API",
    "Rapoarte agregate pe țări și operatori de telefonie",
    "Rapoarte structurate pe conturi de clienți",
    "Export și descărcare rapidă a datelor cu un singur clic"
  ],
  "enterpriseBadge": "GATA PENTRU COMPANII MARI",
  "enterpriseTitle": "Construit pentru Revânzători, Companii Mari și Furnizori de SMS",
  "enterpriseSubtitle": "Gestionați echipa, structurile tarifare și infrastructura din spatele unei afaceri de mesagerie la scară largă.",
  "enterpriseCards": {
    "card1": {
      "title": "Spațiul dvs. de lucru. Brandul dvs.",
      "header": "Control acces spațiu de lucru",
      "user1Name": "Aisha Morgan",
      "user1Role": "Administrator",
      "user2Name": "James Lee",
      "user2Role": "Operator",
      "user3Name": "Sara Khan",
      "user3Role": "Finanțe",
      "protectionText": "Protecție trafic activă",
      "bullets": [
        "Acces multi-utilizator bazat pe roluri (RBAC)",
        "Portal White-label personalizat sub propriul brand",
        "Gestionare avansată a conturilor de clienți",
        "Sistem activ de monitorizare anti-fraudă și anti-abuz"
      ],
      "note": "Configurație ilustrativă"
    },
    "card2": {
      "title": "Control comercial și financiar simplificat.",
      "header": "Portofel și sold cont",
      "amount": "$4,850.00",
      "sub": "Credit disponibil • USD",
      "stat1Label": "Consum în octombrie",
      "stat1Val": "$2,569.00",
      "stat2Label": "Ultima reîncărcare",
      "stat2Val": "+$5,000.00",
      "pillText": "Facturare automată activă",
      "bullets": [
        "Gestionarea soldurilor și a limitelor de credit",
        "Tabele de tarife (Rate Cards) flexibile",
        "Facturare și încasare automatizată",
        "Istoric complet și transparent al tranzacțiilor"
      ],
      "note": "Configurație ilustrativă"
    },
    "card3": {
      "title": "Tarife flexibile. Rute interconectate global.",
      "header": "Prețuri și conectivitate",
      "row1Country": "Marea Britanie (UK)",
      "row1Type": "Operator direct",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "A2P Premium",
      "row2Rate": "$0.012",
      "row3Country": "SUA (US)",
      "row3Type": "A2P Standard",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Tarife personalizate pe fiecare țară",
        "Prețuri diferențiate după calitatea rutei",
        "Integrarea mai multor furnizori de telecomunicații",
        "Conectivitate de mare capacitate prin SMPP și REST API"
      ],
      "note": "Configurație ilustrativă"
    }
  },
  "workflowBadge": "FLUXUL DE LUCRU AL PLATFORMEI",
  "workflowTitle": "De la Compunerea Mesajului până la Livrarea pe Telefon",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Creați Campania",
      "desc": "Redactați mesajul, alegeți lista de destinatari și programați momentul optim de expediere."
    },
    {
      "step": "02",
      "title": "Rutare Inteligentă",
      "desc": "Sistemul alocă fiecare SMS celei mai rapide și stabile rute conform destinației."
    },
    {
      "step": "03",
      "title": "Livrare Globală",
      "desc": "Atingeți rețelele mobile din întreaga lume prin intermediul infrastructurii directe de telecomunicații."
    },
    {
      "step": "04",
      "title": "Rapoarte în Timp Real",
      "desc": "Urmăriți confirmările de primire, viteza de transmitere și costurile direct din panou."
    }
  ],
  "ctaBadge": "SĂ CONSTRUIM REȚEAUA DVS. DE MESAGERIE",
  "ctaTitle": "Dezvoltați-vă Afacerea cu Soluții Profesionale de SMS",
  "ctaSubtitle": "De la rutare vocală inteligentă și terminare internațională wholesale până la AI Voice și numere virtuale DID, iNet Global oferă soluții de telecomunicații scalabile care ajută companiile să comunice clar, fiabil și eficient la nivel mondial.",
  "contactUs": "Contactați-ne",
  "ctaTrust1": "Garanție SLA Enterprise de 99.99%",
  "ctaTrust2": "Configurare Imediată prin API & SMPP",
  "ctaTrust3": "Conectivitate Directă cu Operatori Globali Tier-1"
};

const hu: OtpSmsTranslation = {
  "heroBadge": "SMS PORTÁL MEGOLDÁS",
  "heroTitle": "Nagy Forgalomra Tervezett, Nagy Teljesítményű SMS Portál",
  "heroSubtitle": "Küldjön, fogadjon, kezeljen és kövessen nyomon üzleti SMS-eket egyetlen intelligens platformról.",
  "heroDesc": "Az egyedi ellenőrző kódoktól a vállalati szintű nagy volumenű kampányokig SMS portálunk biztosítja azokat az eszközöket, automatizációt, intelligens útválasztást és analitikát, amelyekre a megbízható kommunikációhoz szüksége van.",
  "getStarted": "Kezdés Most",
  "bookDemo": "Demó Kérése",
  "heroFeatures": [
    {
      "title": "Globális SMS Lefedettség"
    },
    {
      "title": "Fejlett Intelligens Útválasztás"
    },
    {
      "title": "Tömeges SMS és Kampányok"
    },
    {
      "title": "Kétirányú Üzenetküldés"
    },
    {
      "title": "Könnyű API Integráció"
    },
    {
      "title": "Valós Idejű Kézbesítési Jelentések"
    }
  ],
  "managementBadge": "SMS MENEDZSMENT PLATFORM",
  "managementTitle": "Minden, Ami az SMS-ek Hatékony Kezeléséhez Szükséges",
  "platformControlTitle": "Egyetlen Platform. Teljes SMS Kontroll.",
  "platformControlDesc": "Irányítsa teljes üzenetküldési műveletét egy központosított vezérlőpultról, amelyet a sebességre, az átláthatóságra és a korlátlan skálázhatóságra terveztünk.",
  "platformControlBullets": [
    "Hozzon létre, személyre szabjon és ütemezzen kampányokat egyszerűen",
    "Tartsa a kapcsolatokat és a beszélgetéseket egyetlen közös munkaterületen",
    "Kövesse nyomon a kézbesítést, az útvonalakat és a költségeket valós időben"
  ],
  "campaignCard": {
    "title": "Kampány létrehozása",
    "draftBadge": "Vázlat elmentve",
    "step1": "01 Megírás",
    "step2": "02 Célközönség",
    "step3": "03 Ütemezés",
    "senderLabel": "Feladó Azonosító (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Célközönség",
    "audienceVal": "Rendelésfrissítések • 24 850 kapcsolat",
    "messageLabel": "Üzenet szövege",
    "messageText": "Kedves {first_name}, a {order_id} számú rendelése feladásra került. Nyomon követés: {tracking_url}. Támogatásért válaszoljon a HELP szóval.",
    "personalizedBadge": "Személyre szabott mezők aktívak",
    "charCount": "118 / 160",
    "repliesTitle": "Ügyfélválaszok",
    "repliesBadge": "2-irányú SMS",
    "inboundText": "Rendelése úton van. Segítségért válaszoljon a HELP szóval.",
    "inboundTime": "10:42 • Kézbesítve",
    "replyText": "Köszönöm szépen! Módosíthatom az átvétel időpontját?"
  },
  "capabilitiesBadge": "ÜZENETKÜLDÉSI KÉPESSÉGEK",
  "capabilitiesTitle": "Fejlett SMS Funkciók",
  "capabilitiesSubtitle": "Hatékony eszközök az SMS-műveletek minden fázisának kezeléséhez, automatizálásához és optimalizálásához.",
  "features": [
    {
      "title": "Tömeges SMS Kampányok",
      "desc": "Küldjön több ezer vagy több millió üzenetet fejlett kampánykezeléssel, ütemezéssel, kapcsolatszegmentálással és valós idejű kézbesítéskövetéssel."
    },
    {
      "title": "Kétirányú SMS (Two-Way SMS)",
      "desc": "Fogadjon válaszokat és folytasson párbeszédet közvetlenül a platformon. Ideális ügyfélszolgálathoz, értesítésekhez, hitelesítéshez és elköteleződéshez."
    },
    {
      "title": "SMS API Integráció",
      "desc": "Kapcsolja össze alkalmazásait, CRM-jét, webáruházát vagy vállalati rendszereit nagy sebességű REST API-nkkal, és automatizálja üzenetfolyamatait."
    },
    {
      "title": "Sender ID Menedzsment",
      "desc": "Hozzon létre és kezeljen több alfanumerikus feladói azonosítót a célország, a kampány, a márka vagy a jogi előírások alapján."
    },
    {
      "title": "Intelligens Útválasztás (Smart Routing)",
      "desc": "Automatikusan válassza ki a legjobb elérhető útvonalat a célállomás, a mobilszolgáltató, a költségek, a vonalminőség és a kézbesítési sikeresség alapján."
    },
    {
      "title": "Kézbesítési Jelentések (DLR)",
      "desc": "Kövesse nyomon az üzenetek állapotát valós időben: Kézbesítve, Sikertelen, Függőben, Lejárt és Elutasítva, részletes naplózással."
    }
  ],
  "visibilityBadge": "ÁTLÁTHATÓSÁG ÉS KONTROLL",
  "visibilityTitle": "Tudja Pontosan, Mi Történik Minden Egyes Üzenettel",
  "visibilitySubtitle": "Szerezzen teljes rálátást SMS-forgalmára valós idejű analitikával és részletes riportokkal.",
  "visibilityBullets": [
    "Élő SMS forgalomfigyelés és monitoring",
    "Útvonal-teljesítmény részletes elemzése",
    "Kampányok eredményességének nyomon követése",
    "Azonnali automatikus figyelmeztetések hiba esetén",
    "Kézbesítési arányok és hibakódok statisztikái",
    "Részletes költség- és felhasználási kimutatások",
    "API forgalom és kérések felügyelete",
    "Országonkénti és mobilszolgáltatónkénti bontás",
    "Ügyfélenkénti és al-fiókonkénti riportok",
    "Egy kattintással letölthető, exportálható adatok"
  ],
  "enterpriseBadge": "VÁLLALATI SZINTRE TERVEZVE",
  "enterpriseTitle": "Viszonteladóknak, Nagyvállalatoknak és SMS Szolgáltatóknak",
  "enterpriseSubtitle": "Kezelje a csapathozzáféréseket, a díjszabást és a technológiai infrastruktúrát egy nagy volumenű üzenetküldő üzletág mögött.",
  "enterpriseCards": {
    "card1": {
      "title": "Az Ön munkaterülete. Az Ön márkája.",
      "header": "Munkaterület jogosultságok",
      "user1Name": "Aisha Morgan",
      "user1Role": "Adminisztrátor",
      "user2Name": "James Lee",
      "user2Role": "Operátor",
      "user3Name": "Sara Khan",
      "user3Role": "Pénzügy",
      "protectionText": "Forgalomvédelem aktív",
      "bullets": [
        "Szerepkör-alapú többfelhasználós hozzáférés (RBAC)",
        "Saját arculatra szabható White-label portál",
        "Többszintű ügyfél- és al-fiókkezelés",
        "Aktív csalás- és visszaélés-megelőzési rendszer"
      ],
      "note": "Szemléltető konfigurációs nézet"
    },
    "card2": {
      "title": "Kereskedelmi felügyelet, leegyszerűsítve.",
      "header": "Fiók egyenleg és pénztárca",
      "amount": "$4,850.00",
      "sub": "Elérhető hitelkeret • USD",
      "stat1Label": "Októberi forgalom",
      "stat1Val": "$2,569.00",
      "stat2Label": "Utolsó feltöltés",
      "stat2Val": "+$5,000.00",
      "pillText": "Automatikus számlázás bekapcsolva",
      "bullets": [
        "Egyenleg és hitelkeret menedzsment",
        "Rugalmas ártáblázatok (Rate Cards)",
        "Automatizált számlázás",
        "Átlátható és teljes tranzakciós előzmények"
      ],
      "note": "Szemléltető konfigurációs nézet"
    },
    "card3": {
      "title": "Rugalmas árak. Globálisan összekapcsolt útvonalak.",
      "header": "Díjszabás és kapcsolatok",
      "row1Country": "Egyesült Királyság (UK)",
      "row1Type": "Közvetlen szolgáltató",
      "row1Rate": "$0.018",
      "row2Country": "India",
      "row2Type": "Prémium A2P",
      "row2Rate": "$0.012",
      "row3Country": "Egyesült Államok (US)",
      "row3Type": "Standard A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP online",
      "pill2": "API online",
      "bullets": [
        "Országonkénti egyedi árazás",
        "Útvonal minőségétől függő sávos tarifák",
        "Több távközlési partner integrációja",
        "Nagy áteresztőképességű SMPP és REST API kapcsolat"
      ],
      "note": "Szemléltető konfigurációs nézet"
    }
  },
  "workflowBadge": "A PLATFORM MUNKAFOLYAMATA",
  "workflowTitle": "Az Üzenet Létrehozásától a Fogadó Fél Készülékéig",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Kampány Létrehozása",
      "desc": "Írja meg az üzenetet, válassza ki a címzetteket, és időzítse a legoptimálisabb küldési időpontot."
    },
    {
      "step": "02",
      "title": "Intelligens Útválasztás",
      "desc": "A rendszer automatikusan a leggyorsabb és legstabilabb útvonalhoz rendeli az egyes SMS-eket."
    },
    {
      "step": "03",
      "title": "Globális Kézbesítés",
      "desc": "Juttassa el üzeneteit a mobilhálózatokra világszerte közvetlenül kapcsolt telekommunikációs infrastruktúránkon keresztül."
    },
    {
      "step": "04",
      "title": "Valós Idejű Riportok",
      "desc": "Kövesse nyomon a kézbesítési igazolásokat, a sebességet és a felmerülő költségeket közvetlenül a portálról."
    }
  ],
  "ctaBadge": "ÉPÍTSÜK KI AZ ÖN ÜZENETKÜLDŐ HÁLÓZATÁT",
  "ctaTitle": "Növelje Vállalkozását Vállalati SMS Megoldásokkal",
  "ctaSubtitle": "Az intelligens hangútválasztástól és a nemzetközi wholesale terminálástól kezdve az AI Voice és a virtuális DID számokig az iNet Global olyan skálázható távközlési megoldásokat nyújt, amelyek segítenek a vállalkozásoknak tisztán, megbízhatóan és hatékonyan kapcsolatba lépni ügyfeleikkel világszerte.",
  "contactUs": "Lépjen Kapcsolatba Velünk",
  "ctaTrust1": "99.99% Vállalati SLA Garancia",
  "ctaTrust2": "Azonnali API és SMPP Üzembe Helyezés",
  "ctaTrust3": "Közvetlen Kapcsolat Globális Tier-1 Szolgáltatókkal"
};

const uk: OtpSmsTranslation = {
  "heroBadge": "РІШЕННЯ ДЛЯ SMS-ПОРТАЛУ",
  "heroTitle": "Потужний SMS-портал, Створений для Масових Корпоративних Розсилок",
  "heroSubtitle": "Надсилайте, отримуйте, керуйте та аналізуйте бізнес-SMS з єдиної інтелектуальної платформи.",
  "heroDesc": "Від поодиноких кодів перевірки до масштабних маркетингових кампаній — наш SMS-портал надає всі необхідні інструменти, автоматизацію, інтелектуальну маршрутизацію та аналітику для бездоганного зв'язку.",
  "getStarted": "Почати Зараз",
  "bookDemo": "Замовити Демо",
  "heroFeatures": [
    {
      "title": "Глобальне SMS-покриття"
    },
    {
      "title": "Розумна Маршрутизація"
    },
    {
      "title": "Масові SMS та Кампанії"
    },
    {
      "title": "Двосторонній Обмін SMS"
    },
    {
      "title": "Швидка Інтеграція через API"
    },
    {
      "title": "Звіти про Доставку в Реальному Часі"
    }
  ],
  "managementBadge": "ПЛАТФОРМА КЕРУВАННЯ SMS",
  "managementTitle": "Все Необхідне для Професійного Керування SMS",
  "platformControlTitle": "Єдина Платформа. Повний Контроль над SMS.",
  "platformControlDesc": "Керуйте всіма процесами обміну повідомленнями з централізованої панелі, розробленої для швидкості, прозорості та масштабованості.",
  "platformControlBullets": [
    "Створюйте, персоналізуйте та плануйте розсилки у зручному інтерфейсі",
    "Зберігайте контакти та історію діалогів в єдиному робочому просторі",
    "Відстежуйте доставку, маршрутизацію та витрати на кожному етапі"
  ],
  "campaignCard": {
    "title": "Створити кампанію",
    "draftBadge": "Чернетку збережено",
    "step1": "01 Текст",
    "step2": "02 Аудиторія",
    "step3": "03 Розклад",
    "senderLabel": "Ім'я відправника (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "Аудиторія",
    "audienceVal": "Оновлення замовлень • 24 850 контактів",
    "messageLabel": "Текст повідомлення",
    "messageText": "Вітаємо, {first_name}! Ваше замовлення {order_id} відправлено. Відстеження: {tracking_url}. Відповідь HELP для підтримки.",
    "personalizedBadge": "Динамічні поля увімкнено",
    "charCount": "118 / 160",
    "repliesTitle": "Відповіді клієнтів",
    "repliesBadge": "2-way SMS",
    "inboundText": "Ваше замовлення вже прямує до вас. Відповідь HELP для допомоги.",
    "inboundTime": "10:42 • Доставлено",
    "replyText": "Дякую! Чи можу я змінити час доставки?"
  },
  "capabilitiesBadge": "МОЖЛИВОСТІ ПЛАТФОРМИ",
  "capabilitiesTitle": "Розширені Функції SMS",
  "capabilitiesSubtitle": "Потужні інструменти для автоматизації, контролю та оптимізації кожного аспекту ваших SMS-розсилок.",
  "features": [
    {
      "title": "Масові SMS-кампанії",
      "desc": "Надсилайте тисячі або мільйони повідомлень завдяки надійному плануванню, сегментації контактів та повному контролю доставки."
    },
    {
      "title": "Двосторонні SMS (Two-Way SMS)",
      "desc": "Отримуйте відповіді та ведіть безперервні діалоги з клієнтами на тій самій платформі. Ідеально для служби підтримки та сповіщень."
    },
    {
      "title": "Інтеграція через SMS API",
      "desc": "Підключайте ваші мобільні додатки, CRM, інтернет-магазини та бізнес-системи через високопродуктивний REST API."
    },
    {
      "title": "Керування Sender ID",
      "desc": "Створюйте та реєструйте альфанумеричні імена відправника для різних країн, брендів або типів рекламних та сервісних розсилок."
    },
    {
      "title": "Розумна Маршрутизація",
      "desc": "Автоматичний вибір оптимального каналу з урахуванням країни призначення, оператора, вартості, якості зв'язку та швидкості доставки."
    },
    {
      "title": "Звіти про Доставку (DLR)",
      "desc": "Контролюйте статус кожного повідомлення в режимі онлайн: Доставлено, Помилка, Очікує, Прострочено та Відхилено."
    }
  ],
  "visibilityBadge": "ПРОЗОРІСТЬ ТА КОНТРОЛЬ",
  "visibilityTitle": "Знайте Точно, Що Відбувається з Кожним Повідомленням",
  "visibilitySubtitle": "Отримайте повну видимість вашого SMS-трафіку завдяки аналітиці та докладним звітам у реальному часі.",
  "visibilityBullets": [
    "Моніторинг SMS-трафіку в реальному часі",
    "Аналітика продуктивності кожного маршруту",
    "Оцінка ефективності маркетингових кампаній",
    "Миттєві автоматичні сповіщення про збої",
    "Статистика успішної доставки та причин помилок",
    "Детальні звіти про витрати та баланс",
    "Моніторинг запитів до API-шлюзів",
    "Звіти в розрізі країн та мобільних операторів",
    "Звітність по кожному клієнтському субакаунту",
    "Швидке вивантаження та експорт даних в один клік"
  ],
  "enterpriseBadge": "ДЛЯ ВЕЛИКОГО БІЗНЕСУ",
  "enterpriseTitle": "Створено для Реселерів, Великих Корпорацій та SMS-провайдерів",
  "enterpriseSubtitle": "Керуйте правами команди, тарифними сітками та технічною інфраструктурою великого телекомунікаційного бізнесу.",
  "enterpriseCards": {
    "card1": {
      "title": "Ваш робочий простір. Ваш бренд.",
      "header": "Керування доступом",
      "user1Name": "Аіша Морган",
      "user1Role": "Адміністратор",
      "user2Name": "Джеймс Лі",
      "user2Role": "Оператор",
      "user3Name": "Сара Хан",
      "user3Role": "Фінанси",
      "protectionText": "Захист трафіку активний",
      "bullets": [
        "Багатокористувацький доступ на основі ролей (RBAC)",
        "White-label портал під вашим власним брендом",
        "Багаторівневе керування клієнтськими акаунтами",
        "Цілодобовий моніторинг захисту від фроду та спаму"
      ],
      "note": "Ілюстративна конфігурація"
    },
    "card2": {
      "title": "Фінансовий контроль без складнощів.",
      "header": "Баланс та гаманець акаунта",
      "amount": "$4,850.00",
      "sub": "Доступний баланс • USD",
      "stat1Label": "Витрати за жовтень",
      "stat1Val": "$2,569.00",
      "stat2Label": "Останнє поповнення",
      "stat2Val": "+$5,000.00",
      "pillText": "Автоматичний білінг увімкнено",
      "bullets": [
        "Керування балансом та кредитними лімітами",
        "Гнучкі тарифні сітки (Rate Cards)",
        "Автоматизоване виставлення рахунків",
        "Повна та прозора історія транзакцій"
      ],
      "note": "Ілюстративна конфігурація"
    },
    "card3": {
      "title": "Гнучкі тарифи. Прямі канали зв'язку.",
      "header": "Тарифи та підключення",
      "row1Country": "Велика Британія (UK)",
      "row1Type": "Прямий оператор",
      "row1Rate": "$0.018",
      "row2Country": "Індія (India)",
      "row2Type": "Преміум A2P",
      "row2Rate": "$0.012",
      "row3Country": "США (US)",
      "row3Type": "Стандартне A2P",
      "row3Rate": "$0.022",
      "pill1": "SMPP онлайн",
      "pill2": "API онлайн",
      "bullets": [
        "Індивідуальні тарифи для кожної країни",
        "Ціноутворення залежно від якості маршруту",
        "Інтеграція декількох постачальників зв'язку",
        "Високошвидкісне підключення через SMPP та REST API"
      ],
      "note": "Ілюстративна конфігурація"
    }
  },
  "workflowBadge": "ПРОЦЕС РОБОТИ ПЛАТФОРМИ",
  "workflowTitle": "Від Створення Повідомлення до Доставки Абоненту",
  "workflowSteps": [
    {
      "step": "01",
      "title": "Створення Кампанії",
      "desc": "Напишіть текст, оберіть базу отримувачів та налаштуйте зручний час відправлення."
    },
    {
      "step": "02",
      "title": "Розумна Маршрутизація",
      "desc": "Кожне повідомлення автоматично направляється найшвидшим та найнадійнішим маршрутом."
    },
    {
      "step": "03",
      "title": "Глобальна Доставка",
      "desc": "Миттєве вручення абонентам мобільних мереж по всьому світу через пряму інфраструктуру."
    },
    {
      "step": "04",
      "title": "Звіти в Реальному Часі",
      "desc": "Відстежуйте квитанції про доставку, швидкість передачі та витрати прямо у своєму кабінеті."
    }
  ],
  "ctaBadge": "ЗБУДУЙМО ВАШУ МЕРЕЖУ ПОВІДОМЛЕНЬ",
  "ctaTitle": "Розвивайте Свій Бізнес за Допомогою Корпоративних SMS-Рішень",
  "ctaSubtitle": "Від інтелектуальної маршрутизації голосових викликів та міжнародної термінації до AI Voice та віртуальних номерів DID — iNet Global надає масштабовані телеком-рішення, які допомагають компаніям надійно та ефективно комунікувати з клієнтами по всьому світу.",
  "contactUs": "Зв'яжіться з Нами",
  "ctaTrust1": "Гарантований Корпоративний SLA 99.99%",
  "ctaTrust2": "Миттєве Налаштування API & SMPP",
  "ctaTrust3": "Пряме Підключення до Світових Операторів Tier-1"
};

const he: OtpSmsTranslation = {
  "heroBadge": "פתרון פורטל SMS",
  "heroTitle": "פורטל SMS עוצמתי שנבנה להעברת הודעות בנפח גבוה",
  "heroSubtitle": "שלח, קבל, נהל ונטר הודעות SMS עסקיות מפלטפורמה חכמה ומאוחדת אחת.",
  "heroDesc": "החל מקודי אימות בודדים ועד לקמפיינים שיווקיים בקנה מידה ארגוני, פורטל ה-SMS שלנו מעניק לך את הכלים, האוטומציה, הניתוב החכם והניתוחים הדרושים לך לתקשורת מהימנה לחלוטין.",
  "getStarted": "התחל עכשיו",
  "bookDemo": "תיאום הדגמה",
  "heroFeatures": [
    {
      "title": "כיסוי SMS עולמי"
    },
    {
      "title": "ניתוב חכם ומתקדם"
    },
    {
      "title": "SMS המוני וקמפיינים"
    },
    {
      "title": "הודעות דו-כיווניות"
    },
    {
      "title": "אינטגרציית API קלה"
    },
    {
      "title": "דוחות מסירה בזמן אמת"
    }
  ],
  "managementBadge": "פלטפורמת ניהול SMS",
  "managementTitle": "כל מה שאתה צריך כדי לנהל הודעות SMS",
  "platformControlTitle": "פלטפורמה אחת. שליטה מלאה ב-SMS.",
  "platformControlDesc": "נהל את כל פעילות העברת ההודעות שלך מלוח בקרה מרכזי שתוכנן למהירות, שקיפות ויכולת התרחבות מלאה.",
  "platformControlBullets": [
    "צור, התאם אישית עם משתנים דינמיים ותזמן קמפיינים בקלות",
    "שמור אנשי קשר ושיחות פעילות בסביבת עבודה אחת ומאורגנת",
    "עקוב אחר סטטוס המסירה, הניתוב והעלויות בזמן אמת"
  ],
  "campaignCard": {
    "title": "יצירת קמפיין הודעות",
    "draftBadge": "טיוטה נשמרה",
    "step1": "01 ניסוח",
    "step2": "02 קהל יעד",
    "step3": "03 תזמון",
    "senderLabel": "זיהוי שולח (Sender ID)",
    "senderVal": "iNet",
    "audienceLabel": "קהל יעד",
    "audienceVal": "עדכוני הזמנות • 24,850 אנשי קשר",
    "messageLabel": "תוכן ההודעה",
    "messageText": "שלום {first_name}, ההזמנה שלך {order_id} נשלחה. מעקב: {tracking_url}. השב HELP לקבלת תמיכה.",
    "personalizedBadge": "שדות מותאמים אישית פעילים",
    "charCount": "118 / 160",
    "repliesTitle": "תגובות לקוחות",
    "repliesBadge": "SMS דו-כיווני",
    "inboundText": "ההזמנה שלך בדרך. השב HELP לקבלת סיוע.",
    "inboundTime": "10:42 • נמסר",
    "replyText": "תודה רבה! האם אוכל לעדכן את שעת המסירה?"
  },
  "capabilitiesBadge": "יכולות העברת הודעות",
  "capabilitiesTitle": "תכונות SMS מתקדמות",
  "capabilitiesSubtitle": "כלים רבי עוצמה לניהול, אוטומציה וייעול כל שלב בפעילות ה-SMS של הארגון שלך.",
  "features": [
    {
      "title": "קמפיינים של SMS המוני",
      "desc": "שלח אלפי או מיליוני הודעות עם ניהול קמפיינים מדויק, תזמון גמיש, פילוח קהלי יעד ומעקב מסירה מהימן."
    },
    {
      "title": "SMS דו-כיווני (Two-Way SMS)",
      "desc": "קבל תגובות ונהל שיחות ישירות מאותה הפלטפורמה. אידיאלי לשירות לקוחות, התראות ואימות אבטחה."
    },
    {
      "title": "ממשק SMS API",
      "desc": "חבר את האפליקציות, ה-CRM, אתר האינטרנט או תוכנות העסק שלך עם REST API בעל ביצועים גבוהים לאוטומציה מלאה."
    },
    {
      "title": "ניהול מזהה שולח (Sender ID)",
      "desc": "צור ונהל שמות שולח מותאמים אישית בהתאם למדינת היעד, הקמפיין, המותג או הדרישות הרגולטוריות."
    },
    {
      "title": "ניתוב חכם (Smart Routing)",
      "desc": "בחר באופן אוטומטי את הנתיב הטוב ביותר בהתאם למפעיל היעד, העלות, איכות הקו ואחוזי ההצלחה."
    },
    {
      "title": "דוחות מסירה מפורטים (DLR)",
      "desc": "עקוב אחר סטטוס ההודעות בזמן אמת: נמסר, נכשל, ממתין, פג תוקף ונדחה, עם נתונים ברורים."
    }
  ],
  "visibilityBadge": "שקיפות ושליטה",
  "visibilityTitle": "דע בדיוק מה קורה עם כל הודעה והודעה",
  "visibilitySubtitle": "קבל נראות מלאה על תעבורת ה-SMS שלך עם ניתוחים מתקדמים ודוחות מקיפים בזמן אמת.",
  "visibilityBullets": [
    "ניטור תעבורת SMS בזמן אמת",
    "ניתוח ביצועים עבור כל נתיב תקשורת",
    "מעקב אחר הצלחת קמפיינים שיווקיים",
    "התראות אוטומטיות בזמן אמת בעת תקלה",
    "סטטיסטיקות מסירה וסיבות שגיאה מפורטות",
    "דוחות עלויות וניצול תקציב מדויקים",
    "ניטור בקשות ותעבורה דרך ממשקי ה-API",
    "דוחות מפולחים לפי מדינות ומפעילי סלולר",
    "דוחות לפי חשבונות לקוח ותתי-חשבונות",
    "הורדה וייצוא נתונים בקליק אחד"
  ],
  "enterpriseBadge": "מוכן לרמה ארגונית",
  "enterpriseTitle": "נבנה עבור משווקים, ארגונים גדולים וספקי SMS",
  "enterpriseSubtitle": "נהל את הרשאות הצוות, מחירוני היעד והתשתית הטכנולוגית שמאחורי מערך הודעות רחב היקף.",
  "enterpriseCards": {
    "card1": {
      "title": "סביבת העבודה שלך. המותג שלך.",
      "header": "הרשאות סביבת עבודה",
      "user1Name": "עאישה מורגן",
      "user1Role": "מנהל מערכת",
      "user2Name": "ג'יימס לי",
      "user2Role": "מפעיל",
      "user3Name": "שרה חאן",
      "user3Role": "כספים",
      "protectionText": "הגנת תעבורה פעילה",
      "bullets": [
        "גישה מרובת משתמשים מבוססת תפקידים (RBAC)",
        "פורטל White-label מותאם אישית למותג שלך",
        "ניהול חשבונות לקוח ותתי-חשבונות רב-שלבי",
        "מערכת הגנה וניטור מפני הונאות ושימוש לרעה"
      ],
      "note": "תצורת המחשה לדוגמה"
    },
    "card2": {
      "title": "שליטה מסחרית ופיננסית פשוטה.",
      "header": "ארנק ויתרת החשבון",
      "amount": "$4,850.00",
      "sub": "אשראי זמין • USD",
      "stat1Label": "שימוש באוקטובר",
      "stat1Val": "$2,569.00",
      "stat2Label": "טעינה אחרונה",
      "stat2Val": "+$5,000.00",
      "pillText": "חיוב אוטומטי מופעל",
      "bullets": [
        "ניהול יתרות ארנק ומסגרות אשראי",
        "הגדרת מחירונים (Rate Cards) גמישים",
        "חיוב והפקת חשבוניות אוטומטית",
        "היסטוריית עסקאות שקופה ומלאה"
      ],
      "note": "תצורת המחשה לדוגמה"
    },
    "card3": {
      "title": "מחירים גמישים. נתיבים מקושרים עולמית.",
      "header": "תמחור וקישוריות",
      "row1Country": "בריטניה (UK)",
      "row1Type": "מפעיל ישיר",
      "row1Rate": "$0.018",
      "row2Country": "הודו (India)",
      "row2Type": "A2P פרימיום",
      "row2Rate": "$0.012",
      "row3Country": "ארה\"ב (US)",
      "row3Type": "A2P סטנדרטי",
      "row3Rate": "$0.022",
      "pill1": "SMPP מחובר",
      "pill2": "API מחובר",
      "bullets": [
        "תמחور מותאם אישית לפי מדינה",
        "תעריפים מדורגים לפי איכות הנתיב",
        "אינטגרציה של מספר ספקי תקשורת",
        "קישוריות בנפח גבוה באמצעות SMPP ו-API"
      ],
      "note": "תצורת המחשה לדוגמה"
    }
  },
  "workflowBadge": "תהליך העבודה בפלטפורמה",
  "workflowTitle": "מיצירת ההודעה ועד למסירה לטלפון הנייד",
  "workflowSteps": [
    {
      "step": "01",
      "title": "יצירת קמפיין",
      "desc": "נסח את ההודעה, בחר את קהל היעד ותזמן את שעת השליחה האידיאלית."
    },
    {
      "step": "02",
      "title": "ניתוב חכם",
      "desc": "התאם כל הודעה לנתיב המהיר והאמין ביותר בהתאם ליעד ולדרישות."
    },
    {
      "step": "03",
      "title": "מסירה עולמית",
      "desc": "הגע לרשתות סלולר ברחבי העולם באמצעות תשתית טלקום ישירה ומקושרת."
    },
    {
      "step": "04",
      "title": "דיווח בזמן אמת",
      "desc": "עקוב אחר אישורי מסירה, ביצועים ועלויות ישירות מהפורטל שלך."
    }
  ],
  "ctaBadge": "בואו נבנה את רשת ההודעות שלכם",
  "ctaTitle": "הרחיבו את העסק שלכם עם פתרונות SMS ארגוניים",
  "ctaSubtitle": "החל מניתוב קולי חכם וסיום שיחות בינלאומי בסיטונאות, ועד ל-Voice AI ומספרים וירטואליים DID – חברת iNet Global מספקת פתרונות תקשורת מתקדמים המסייעים לחברות לתקשר עם לקוחותיהן בבהירות, ביעילות ובאמינות בכל שוק בעולם.",
  "contactUs": "צור קשר",
  "ctaTrust1": "התחייבות ל-99.99% Enterprise SLA",
  "ctaTrust2": "הפעלה מיידית של API ו-SMPP",
  "ctaTrust3": "קישוריות ישירה למפעילי תקשורת Tier-1 בעולם"
};

const translations: Record<string, OtpSmsTranslation> = {
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

export const getOtpSmsTranslations = (
  language: string,
  _regionId?: string,
  _regionName?: string
): OtpSmsTranslation => {
  return translations[language] || translations["en"];
};

export default getOtpSmsTranslations;

import type { WhatsappBusinessTranslation } from "./whatsappBusinessTranslations";

export interface RcsComparisonTranslation {
  comparisonTitle: string;
  comparisonSubtitle: string;
  traditionalSmsTitle: string;
  traditionalSmsBadge: string;
  traditionalSmsItems: string[];
  rcsTitle: string;
  rcsBadge: string;
  rcsItems: string[];
  noticeTitle: string;
  noticeText: string;
}

export type RcsBusinessMessagingTranslation = WhatsappBusinessTranslation;

const en: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS BUSINESS MESSAGING",
  "heroTitle": "Transform Everyday SMS into Rich Conversational RCS",
  "heroDesc": "Elevate mobile messaging with verified sender checkmarks, high-resolution carousel cards, interactive quick-action buttons, and native Android smartphone reach.",
  "talkToExpert": "Talk to an expert",
  "exploreCapabilities": "Explore capabilities",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Verified RCS Brand • Checkmark",
    "msg1": "Hello Jordan! Your flight SK-402 to Zurich is boarding at Gate B12. Your digital boarding pass is ready.",
    "time1": "07:30",
    "actionBtn": "Open Boarding Pass →",
    "msg2": "Thank you! Can I upgrade to an extra legroom seat?",
    "time2": "07:31",
    "msg3": "Seat 12A (Extra Legroom) is available for $25. Tap below to confirm!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Native Android Messages App",
    "secure": "Verified Sender Branding"
  },
  "overviewBadge": "NEXT-GENERATION MOBILE MESSAGING",
  "overviewTitle": "Deliver rich, interactive app-like experiences without an app.",
  "overviewDesc1": "Rich Communication Services (RCS) is the modern standard for business messaging on mobile devices. Reach customers directly inside the native Messages app with verified branding, logos, and high-impact media.",
  "overviewDesc2": "Eliminate plain text constraints. Enable one-tap actions, location sharing, rich media carousels, and automated fallback to SMS so no customer is ever left out.",
  "check1": "Verified Sender Trust & Brand Logo",
  "check2": "Interactive Carousel Cards & Buttons",
  "check3": "Automatic SMS / MMS Fallback",
  "featuresBadge": "KEY CAPABILITIES",
  "featuresTitle": "Rich media. Verified security. Exceptional engagement.",
  "featuresSubtitle": "Everything your marketing and customer experience teams need to deploy RCS at scale.",
  "features": [
    {
      "title": "Verified Sender Branding",
      "desc": "Display your official company logo, brand colors, and verified checkmark to build instant customer trust."
    },
    {
      "title": "High-Resolution Media Carousels",
      "desc": "Send interactive scrollable product cards with images, pricing, and purchase links."
    },
    {
      "title": "One-Tap Suggested Action Buttons",
      "desc": "Allow customers to open maps, dial phone numbers, save calendar events, or visit websites with a single tap."
    },
    {
      "title": "Suggested Quick-Replies",
      "desc": "Present conversational reply chips so users can answer without typing a single word."
    },
    {
      "title": "Automatic Carrier SMS Fallback",
      "desc": "If a recipient device does not support RCS or lacks data, messages automatically fall back to standard SMS."
    },
    {
      "title": "Real-Time Read Receipts & Metrics",
      "desc": "Track verified delivery rates, read receipts, and button click-through telemetry in real time."
    }
  ],
  "howItWorksBadge": "HOW IT WORKS",
  "howItWorksTitle": "Deploy verified RCS campaigns in four steps.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Brand Verification & Setup",
      "desc": "Register your brand profile, logo, colors, and legal documentation with carrier registries."
    },
    {
      "step": "02",
      "title": "Design Interactive Templates",
      "desc": "Create rich media cards, action buttons, and conversation trees in our visual template studio."
    },
    {
      "step": "03",
      "title": "Connect Messaging APIs",
      "desc": "Integrate our unified messaging API with automatic carrier fallback routing."
    },
    {
      "step": "04",
      "title": "Launch & Analyze",
      "desc": "Broadcast rich marketing campaigns or trigger transactional alerts with full click telemetry."
    }
  ],
  "useCasesBadge": "USE CASES",
  "useCasesTitle": "Engage mobile users with richer conversational experiences.",
  "useCasesSubtitle": "Deliver value with interactive mobile communications that boost conversion rates by up to 3x.",
  "interactiveCard": {
    "badge": "VERIFIED RCS MESSAGE",
    "message": "Your package from Apex Gear has been dispatched. Track in real time or change delivery instructions.",
    "btnConfirm": "Track Delivery",
    "btnReschedule": "Change Address"
  },
  "useCases": [
    {
      "title": "Boarding Passes & Ticketing",
      "desc": "Deliver full-color digital boarding passes with live gate updates directly to the phone screen."
    },
    {
      "title": "E-Commerce Flash Sales",
      "desc": "Showcase new product collections with swipeable carousels and instant purchase buttons."
    },
    {
      "title": "Appointment Scheduling",
      "desc": "Send interactive calendar reminders that allow one-tap confirmation or rescheduling."
    },
    {
      "title": "Two-Factor Authentication (2FA)",
      "desc": "Deliver branded, verified one-time passwords with clear security watermarks."
    }
  ],
  "industriesBadge": "INDUSTRIES WE SERVE",
  "industriesTitle": "RCS business messaging across market sectors.",
  "industriesSubtitle": "Helping organizations modernize consumer communications on mobile devices.",
  "industries": [
    {
      "title": "Airlines & Hospitality",
      "desc": "Flight check-in reminders, digital boarding passes, and room upgrade prompts."
    },
    {
      "title": "Banking & FinTech",
      "desc": "Fraud transaction alerts, monthly spending summaries, and card activation."
    },
    {
      "title": "Retail & E-Commerce",
      "desc": "New collection showcases, back-in-stock alerts, and shipping updates."
    },
    {
      "title": "Healthcare",
      "desc": "Prescription refill reminders, clinic appointment confirmations, and telehealth check-ins."
    },
    {
      "title": "Automotive",
      "desc": "Service maintenance alerts, recall notifications, and lease renewal options."
    }
  ],
  "whyBadge": "WHY OUR RCS PLATFORM",
  "whyTitle": "Why Leading Enterprises Choose iNet RCS",
  "whySubtitle": "Carrier-grade messaging infrastructure trusted by global enterprises.",
  "whyCards": {
    "secure": {
      "title": "Verified Brand Integrity",
      "description": "Guaranteed anti-spoofing verification protects your brand from phishing impersonation."
    },
    "cloud": {
      "title": "Worldwide Carrier Interconnects",
      "description": "Direct connections with mobile network operators across North America, Europe, Asia, and Latin America."
    },
    "api": {
      "title": "Unified Single API",
      "description": "One simple API endpoint handles RCS with automatic fallback to SMS without duplicate billing."
    },
    "connectivity": {
      "title": "Guaranteed Global Delivery",
      "description": "Smart fallback engines ensure 100% reach regardless of handset or network operator capability."
    },
    "automated": {
      "title": "Interactive Automation Engine",
      "description": "Create automated chatbot dialogue flows that guide customers from questions to completed actions."
    }
  },
  "apiCard": {
    "title": "RCS Business Messaging API",
    "desc": "Dispatch rich cards, carousel templates, and suggested replies with automated SMS fallback handling."
  },
  "ctaBadge": "UPGRADE TO RCS",
  "ctaTitle": "Bring your brand communication to life with RCS.",
  "ctaSubtitle": "Deliver richer, more engaging mobile messages that earn customer trust and drive higher conversions.",
  "contactUs": "Start with RCS",
  "ctaFootnote": "Full Google Jibe and carrier ecosystem compatibility"
};

const es: RcsBusinessMessagingTranslation = {
  "heroBadge": "MENSAJERÍA EMPRESARIAL RCS",
  "heroTitle": "Transforme el SMS Habitual en RCS Conversacional Enriquecido",
  "heroDesc": "Eleve la mensajería móvil con distintivos de remitente verificado, tarjetas de carrusel de alta resolución, botones de acción rápida interactivos y cobertura nativa en smartphones Android.",
  "talkToExpert": "Hable con un experto",
  "exploreCapabilities": "Explorar capacidades",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Marca RCS Verificada • Distintivo",
    "msg1": "¡Hola Jordan! Su vuelo SK-402 a Zúrich está embarcando por la Puerta B12. Su tarjeta de embarque digital está lista.",
    "time1": "07:30",
    "actionBtn": "Abrir Tarjeta de Embarque →",
    "msg2": "¡Gracias! ¿Puedo actualizar a un asiento con espacio adicional para las piernas?",
    "time2": "07:31",
    "msg3": "El asiento 12A (espacio adicional) está disponible por $25. ¡Toque a continuación para confirmar!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Aplicación Nativa de Mensajes de Android",
    "secure": "Identidad de Marca y Remitente Verificado"
  },
  "overviewBadge": "MENSAJERÍA MÓVIL DE PRÓXIMA GENERACIÓN",
  "overviewTitle": "Ofrezca experiencias interactivas similares a aplicaciones sin necesidad de instalar una app.",
  "overviewDesc1": "Rich Communication Services (RCS) es el estándar moderno de mensajería empresarial en dispositivos móviles. Llegue a sus clientes directamente en la aplicación Mensajes nativa con identidad verificada, logotipos e imágenes de alto impacto.",
  "overviewDesc2": "Elimine las limitaciones del texto simple. Habilite acciones con un toque, envío de ubicaciones, carruseles multimedia interactivos y respaldo automático a SMS para no dejar atrás a ningún usuario.",
  "check1": "Confianza de Remitente Verificado y Logotipo",
  "check2": "Tarjetas y Botones Multimedia Interactivos",
  "check3": "Respaldo Automático a SMS / MMS",
  "featuresBadge": "CAPACIDADES CLAVE",
  "featuresTitle": "Contenido enriquecido. Seguridad verificada. Máxima interacción.",
  "featuresSubtitle": "Todo lo que sus equipos de marketing y experiencia del cliente necesitan para implementar RCS a escala.",
  "features": [
    {
      "title": "Marca de Remitente Verificado",
      "desc": "Muestre su logotipo oficial, colores corporativos y marca de verificación para inspirar confianza instantánea."
    },
    {
      "title": "Carruseles Multimedia en Alta Resolución",
      "desc": "Envíe tarjetas interactivas de productos con imágenes, precios y enlaces directos de compra."
    },
    {
      "title": "Botones de Acción Sugerida con un Toque",
      "desc": "Permita a los clientes abrir mapas, marcar números, guardar eventos de calendario o visitar webs con un solo toque."
    },
    {
      "title": "Respuestas Rápidas Sugeridas",
      "desc": "Presente botones de respuesta conversacionales para que los clientes contesten sin tener que escribir."
    },
    {
      "title": "Respaldo Automático de Operador a SMS",
      "desc": "Si el dispositivo receptor no soporta RCS o carece de datos, los mensajes pasan automáticamente a SMS estándar."
    },
    {
      "title": "Confirmaciones de Lectura y Métricas en Tiempo Real",
      "desc": "Monitoree tasas de entrega verificada, confirmaciones de lectura y clics en botones en tiempo real."
    }
  ],
  "howItWorksBadge": "CÓMO FUNCIONA",
  "howItWorksTitle": "Implemente campañas RCS verificadas en cuatro pasos.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Verificación y Configuración de Marca",
      "desc": "Registre el perfil de su marca, logotipo, colores y documentación legal ante los registros de los operadores."
    },
    {
      "step": "02",
      "title": "Diseño de Plantillas Interactivas",
      "desc": "Cree tarjetas enriquecidas, botones de acción y árboles de conversación en nuestro estudio visual de plantillas."
    },
    {
      "step": "03",
      "title": "Conexión de APIs de Mensajería",
      "desc": "Integre nuestra API unificada de mensajería con enrutamiento automático de respaldo por operador."
    },
    {
      "step": "04",
      "title": "Lanzamiento y Análisis",
      "desc": "Emita campañas interactivas o active alertas transaccionales con telemetría completa de interacción."
    }
  ],
  "useCasesBadge": "CASOS DE USO",
  "useCasesTitle": "Conecte con los usuarios móviles mediante experiencias conversacionales más completas.",
  "useCasesSubtitle": "Aporte valor mediante comunicaciones móviles interactivas que aumentan las tasas de conversión hasta 3 veces.",
  "interactiveCard": {
    "badge": "MENSAJE RCS VERIFICADO",
    "message": "Su paquete de Apex Gear ha sido enviado. Siga su entrega en tiempo real o cambie las instrucciones de envío.",
    "btnConfirm": "Seguir Entrega",
    "btnReschedule": "Cambiar Dirección"
  },
  "useCases": [
    {
      "title": "Tarjetas de Embarque y Entradas",
      "desc": "Envíe pases digitales de embarque a todo color con actualizaciones de puerta directamente a la pantalla del móvil."
    },
    {
      "title": "Ventas Flash de Comercio Electrónico",
      "desc": "Exhiba colecciones de productos con carruseles deslizables y botones de compra instantánea."
    },
    {
      "title": "Programación de Citas",
      "desc": "Envíe recordatorios de citas con confirmación o reprogramación con un solo toque."
    },
    {
      "title": "Autenticación de Dos Factores (2FA)",
      "desc": "Entregue códigos OTP de marca verificados con claras marcas de seguridad antifraude."
    }
  ],
  "industriesBadge": "SECTORES A LOS QUE SERVIMOS",
  "industriesTitle": "Mensajería empresarial RCS en diversos sectores del mercado.",
  "industriesSubtitle": "Ayudamos a organizaciones a modernizar las comunicaciones con los consumidores en dispositivos móviles.",
  "industries": [
    {
      "title": "Aerolíneas y Hotelería",
      "desc": "Recordatorios de facturación, pases de embarque digitales y avisos de mejora de habitación."
    },
    {
      "title": "Banca y FinTech",
      "desc": "Alertas de prevención de fraude, resúmenes mensuales de gastos y activación de tarjetas."
    },
    {
      "title": "Comercio Minorista y E-Commerce",
      "desc": "Lanzamientos de catálogo, alertas de reposición de existencias y novedades de envío."
    },
    {
      "title": "Salud y Bienestar",
      "desc": "Recordatorios de recetas médicas, confirmaciones de consultas y registros de telemedicina."
    },
    {
      "title": "Automoción",
      "desc": "Alertas de revisión y mantenimiento, llamadas a revisión técnica y opciones de renovación."
    }
  ],
  "whyBadge": "POR QUÉ NUESTRA PLATAFORMA RCS",
  "whyTitle": "Por Qué las Grandes Empresas Eligen iNet RCS",
  "whySubtitle": "Infraestructura de mensajería de nivel operador respaldada por empresas globales.",
  "whyCards": {
    "secure": {
      "title": "Integridad de Marca Verificada",
      "description": "La verificación antiphishing garantizada protege a su marca frente a suplantaciones de identidad."
    },
    "cloud": {
      "title": "Interconexión Directa con Operadores Globales",
      "description": "Enlaces directos con operadores de redes móviles en Norteamérica, Europa, Asia y Latinoamérica."
    },
    "api": {
      "title": "API Única y Unificada",
      "description": "Un endpoint de API simple gestiona RCS con respaldo automático a SMS sin cobros duplicados."
    },
    "connectivity": {
      "title": "Entrega Global Garantizada",
      "description": "Mecanismos de respaldo inteligentes aseguran el 100% de alcance sin importar el terminal del usuario."
    },
    "automated": {
      "title": "Motor de Automatización Interactivo",
      "description": "Cree flujos de diálogo con chatbots que guían a los clientes desde la consulta hasta la acción final."
    }
  },
  "apiCard": {
    "title": "API de Mensajería Empresarial RCS",
    "desc": "Envíe tarjetas enriquecidas, plantillas de carrusel y respuestas sugeridas con respaldo automatizado a SMS."
  },
  "ctaBadge": "ACTUALICE A RCS",
  "ctaTitle": "Haga cobrar vida a la comunicación de su marca con RCS.",
  "ctaSubtitle": "Ofrezca mensajes móviles enriquecidos e interactivos que generan confianza y aumentan las conversiones.",
  "contactUs": "Comenzar con RCS",
  "ctaFootnote": "Totalmente compatible con Google Jibe y el ecosistema global de operadores"
};

const zh: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS 商业富媒体通信",
  "heroTitle": "将传统短信升级为沉浸式 RCS 富媒体对话",
  "heroDesc": "通过已验证企业认证标识、高分辨率轮播卡片、交互式一键操作按钮以及安卓智能手机原生支持，全面提升移动通信体验。",
  "talkToExpert": "咨询专家",
  "exploreCapabilities": "探索核心功能",
  "chatScreen": {
    "contactName": "天际航空 Skyline Express",
    "status": "认证 RCS 官方企业 • 蓝勾",
    "msg1": "Jordan 您好！您前往苏黎世的航班 SK-402 正在 B12 登机口登机，电子登机牌已准备就绪。",
    "time1": "07:30",
    "actionBtn": "查看电子登机牌 →",
    "msg2": "非常感谢！我可以升级到额外腿部空间的座位吗？",
    "time2": "07:31",
    "msg3": "座位 12A（宽敞腿部空间）仅需 $25，点击下方即可一键确认！",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "安卓原生信息应用支持",
    "secure": "企业认证发送者品牌背书"
  },
  "overviewBadge": "下一代移动通信体验",
  "overviewTitle": "无需下载独立 App，即可带来原生应用级的交互体验。",
  "overviewDesc1": "富媒体通信服务（RCS）是现代移动设备商业消息的标准。直接在手机原生短信应用中触达用户，展现企业官方品牌、Logo 和高质感多媒体内容。",
  "overviewDesc2": "打破纯文本字数与格式限制。支持一键操作、位置共享、互动轮播卡片，并提供自动降级为标准 SMS 的保障机制，确保 100% 消息触达。",
  "check1": "官方认证标识与品牌 Logo",
  "check2": "交互式轮播卡片与快捷按钮",
  "check3": "自动降级回退 SMS / MMS",
  "featuresBadge": "核心功能亮点",
  "featuresTitle": "高清富媒体。官方安全认证。卓越互动转化率。",
  "featuresSubtitle": "为您提供市场营销与客户体验团队规模化部署 RCS 商业通信所需的一切技术支持。",
  "features": [
    {
      "title": "官方认证发送者品牌",
      "desc": "展示企业官方 Logo、品牌主题色及认证标识，瞬间建立客户安全信任感。"
    },
    {
      "title": "高分辨率多媒体轮播卡片",
      "desc": "发送可滑动的互动商品展示卡，集成高清大图、价格详情与一键下单链接。"
    },
    {
      "title": "一键建议操作按钮",
      "desc": "让客户一键打开地图导航、快速拨打电话、添加日历行程或访问企业网站。"
    },
    {
      "title": "智能快捷回复选项",
      "desc": "提供上下文对话快捷回复气泡，客户无需手动打字即可快速响应。"
    },
    {
      "title": "运营商级别短信自动降级",
      "desc": "若接收端设备不支持 RCS 或无数据流量，系统自动无缝切换为普通短信送达。"
    },
    {
      "title": "实时已读回执与数据洞察",
      "desc": "实时追踪消息发送状态、送达回执、已读确认及各交互按钮的点击转化数据。"
    }
  ],
  "howItWorksBadge": "运作流程",
  "howItWorksTitle": "只需四步，快速上线企业级认证 RCS 消息。",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "企业品牌认证与资料登记",
      "desc": "向全球各大运营商登记企业官方档案、Logo 图标、品牌色彩及合法资质文件。"
    },
    {
      "step": "02",
      "title": "可视化交互模板设计",
      "desc": "在可视化设计平台中轻松构建富媒体卡片、操作按钮与交互对话树分支。"
    },
    {
      "step": "03",
      "title": "无缝对接统一消息 API",
      "desc": "将统一通信 API 接入现有业务系统，享有智能路由与运营商降级保护。"
    },
    {
      "step": "04",
      "title": "全渠道发送与数据分析",
      "desc": "群发富媒体推广活动或触发高价值通知，全程掌控点击与业务转化效果。"
    }
  ],
  "useCasesBadge": "典型应用场景",
  "useCasesTitle": "以丰富的对话式交互体验吸引移动端用户。",
  "useCasesSubtitle": "通过高交互性的移动通信创造深厚价值，助力企业将转化率提升高达 3 倍。",
  "interactiveCard": {
    "badge": "已验证官方 RCS 消息",
    "message": "您在 Apex Gear 订购的包裹已出库发货。您可以实时查看物流轨迹或修改配送说明。",
    "btnConfirm": "追踪快递路线",
    "btnReschedule": "修改配送地址"
  },
  "useCases": [
    {
      "title": "登机牌与电子票务",
      "desc": "直接在手机主界面发送全彩高清电子登机牌，实时动态同步登机口信息。"
    },
    {
      "title": "电商限时促销与上新",
      "desc": "通过可滑动的轮播卡片展示当季爆款商品，并嵌入即时购买按钮。"
    },
    {
      "title": "预约与服务日程提醒",
      "desc": "发送交互式日程通知，支持用户一键确认出席或灵活改期。"
    },
    {
      "title": "双重身份验证（2FA）",
      "desc": "发送带有官方认证背书的一次性安全验证码，杜绝短信伪造与网络钓鱼。"
    }
  ],
  "industriesBadge": "服务行业",
  "industriesTitle": "跨行业的 RCS 商业富媒体通信解决方案。",
  "industriesSubtitle": "赋能各行各业革新移动通信，为全球消费者带来现代化交互体验。",
  "industries": [
    {
      "title": "民航与酒旅",
      "desc": "航班值机通知、高清电子登机牌及酒店房型尊享升级推荐。"
    },
    {
      "title": "银行与金融科技",
      "desc": "可疑交易反欺诈预警、月度账单卡片式总结及快速信用卡激活。"
    },
    {
      "title": "零售与电子商务",
      "desc": "当季新品图文陈列、补货提醒通知以及包裹物流实时动态。"
    },
    {
      "title": "医疗与大健康",
      "desc": "处方取药通知、门诊就诊确认以及在线远程问诊登记入口。"
    },
    {
      "title": "汽车出行服务",
      "desc": "车辆保养维护提醒、安全召回公告以及租约到期续签服务。"
    }
  ],
  "whyBadge": "为什么选择我们",
  "whyTitle": "全球领先企业信赖 iNet RCS 的原因",
  "whySubtitle": "拥有运营商级高可靠架构，保障全球大型企业的全天候通信需求。",
  "whyCards": {
    "secure": {
      "title": "官方防伪品牌权威保障",
      "description": "严格的防冒充认证机制，从源头杜绝网络钓鱼与假冒欺诈，守护品牌声誉。"
    },
    "cloud": {
      "title": "全球运营商直接互联",
      "description": "直连北美、欧洲、亚洲和拉美的主流移动网络运营商，通道畅通无阻。"
    },
    "api": {
      "title": "极简统一单点 API",
      "description": "一个简单接口即可统一收发 RCS，并自动降级为 SMS 短信，杜绝重复计费。"
    },
    "connectivity": {
      "title": "保障全球全量触达",
      "description": "智能回退机制确保不论用户手机型号与网络状况如何，消息均可 100% 必达。"
    },
    "automated": {
      "title": "智能交互自动化引擎",
      "description": "轻松搭建自动对话工作流，引导客户从初始咨询顺畅完成交易闭环。"
    }
  },
  "apiCard": {
    "title": "RCS 商业消息开放 API",
    "desc": "支持调度富媒体卡片、轮播展示模板及建议快捷操作，并内置 SMS 降级保障。"
  },
  "ctaBadge": "立即升级到 RCS",
  "ctaTitle": "让您的企业品牌通信更生动、更高效。",
  "ctaSubtitle": "提供更具互动性、更富吸引力的移动消息，赢得客户信赖并大幅提高转化率。",
  "contactUs": "开始使用 RCS",
  "ctaFootnote": "全面兼容 Google Jibe 与全球主流电信运营商生态系统"
};

const hi: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS बिजनेस मैसेजिंग",
  "heroTitle": "साधारण SMS को समृद्ध संवादात्मक RCS में बदलें",
  "heroDesc": "सत्यापित सेंडर चेकमार्क, हाई-रेज़ोल्यूशन हिंडोला कार्ड, इंटरैक्टिव त्वरित-कार्रवाई बटन और एंड्रॉइड स्मार्टफोन की मूल पहुंच के साथ मोबाइल मैसेजिंग को नई ऊंचाइयों पर ले जाएं।",
  "talkToExpert": "विशेषज्ञ से बात करें",
  "exploreCapabilities": "क्षमताओं का अन्वेषण करें",
  "chatScreen": {
    "contactName": "स्काईलाइन एक्सप्रेस एयरवेज",
    "status": "सत्यापित RCS ब्रांड • चेकमार्क",
    "msg1": "नमस्ते जॉर्डन! ज्यूरिख के लिए आपकी उड़ान SK-402 गेट B12 पर बोर्डिंग कर रही है। आपका डिजिटल बोर्डिंग पास तैयार है।",
    "time1": "07:30",
    "actionBtn": "बोर्डिंग पास खोलें →",
    "msg2": "धन्यवाद! क्या मैं अतिरिक्त लेगरूम वाली सीट पर अपग्रेड कर सकता हूँ?",
    "time2": "07:31",
    "msg3": "सीट 12A (अतिरिक्त लेगरूम) $25 में उपलब्ध है। पुष्टि के लिए नीचे टैप करें!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "नेटिव एंड्रॉइड मैसेज ऐप",
    "secure": "सत्यापित प्रेषक ब्रांडिंग"
  },
  "overviewBadge": "अगली पीढ़ी की मोबाइल मैसेजिंग",
  "overviewTitle": "बिना किसी ऐप डाउनलोड किए, ऐप जैसा समृद्ध और इंटरैक्टिव अनुभव प्रदान करें।",
  "overviewDesc1": "रिच कम्युनिकेशन सर्विसेज (RCS) मोबाइल उपकरणों पर व्यावसायिक संदेशों का आधुनिक वैश्विक मानक है। सत्यापित ब्रांडिंग, लोगो और प्रभावशाली मल्टीमीडिया के साथ ग्राहकों तक सीधे उनके फोन के मैसेज ऐप में पहुंचें।",
  "overviewDesc2": "सादे टेक्स्ट की सीमाओं को समाप्त करें। एक-टैप कार्रवाइयां, स्थान साझाकरण, समृद्ध हिंडोला कार्ड और स्वचालित SMS फ़ॉलबैक सक्षम करें ताकि कोई भी ग्राहक छूट न जाए।",
  "check1": "सत्यापित प्रेषक विश्वास और ब्रांड लोगो",
  "check2": "इंटरैक्टिव हिंडोला कार्ड और त्वरित बटन",
  "check3": "स्वचालित SMS / MMS फ़ॉलबैक",
  "featuresBadge": "प्रमुख क्षमताएं",
  "featuresTitle": "समृद्ध मीडिया। सत्यापित सुरक्षा। असाधारण सहभागिता।",
  "featuresSubtitle": "आपकी मार्केटिंग और ग्राहक अनुभव टीमों को बड़े पैमाने पर RCS तैनात करने के लिए आवश्यक सभी सुविधाएं।",
  "features": [
    {
      "title": "सत्यापित प्रेषक ब्रांडिंग",
      "desc": "ग्राहकों का तत्काल विश्वास जीतने के लिए अपना आधिकारिक कंपनी लोगो, ब्रांड रंग और सत्यापित टिक प्रदर्शित करें।"
    },
    {
      "title": "हाई-डेफिनिशन मीडिया हिंडोला",
      "desc": "छवियों, कीमतों और सीधी खरीदारी लिंक के साथ स्वाइप करने योग्य उत्पाद कार्ड भेजें।"
    },
    {
      "title": "वन-टैप अनुशंसित एक्शन बटन",
      "desc": "ग्राहकों को एक टैप से मैप खोलने, नंबर डायल करने, कैलेंडर इवेंट सेव करने या वेबसाइट पर जाने की सुविधा दें।"
    },
    {
      "title": "सुझाए गए त्वरित उत्तर (Quick-Replies)",
      "desc": "संवादात्मक रिप्लाई चिप्स प्रदान करें ताकि उपयोगकर्ता बिना टाइप किए तुरंत उत्तर दे सकें।"
    },
    {
      "title": "स्वचालित ऑपरेटर SMS फ़ॉलबैक",
      "desc": "यदि प्राप्तकर्ता का डिवाइस RCS का समर्थन नहीं करता है या डेटा बंद है, तो संदेश अपने आप सामान्य SMS में बदल जाता है।"
    },
    {
      "title": "रीयल-टाइम रीड रसीदें और मेट्रिक्स",
      "desc": "रीयल-टाइम में सत्यापित डिलीवरी दरें, पढ़ने की रसीदें और बटन क्लिक-थ्रू ट्रैक करें।"
    }
  ],
  "howItWorksBadge": "यह कैसे काम करता है",
  "howItWorksTitle": "चार चरणों में सत्यापित RCS अभियान तैनात करें।",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "ब्रांड सत्यापन और सेटअप",
      "desc": "कैरियर रजिस्ट्रियों के साथ अपनी ब्रांड प्रोफ़ाइल, लोगो, रंग और कानूनी दस्तावेज़ पंजीकृत करें।"
    },
    {
      "step": "02",
      "title": "इंटरैक्टिव टेम्प्लेट डिज़ाइन करें",
      "desc": "हमारे विज़ुअल टेम्प्लेट स्टूडियो में समृद्ध मीडिया कार्ड, एक्शन बटन और संवाद ट्री बनाएं।"
    },
    {
      "step": "03",
      "title": "मैसेजिंग API कनेक्ट करें",
      "desc": "स्वचालित कैरियर फ़ॉलबैक रूटिंग के साथ हमारे एकीकृत मैसेजिंग API को एकीकृत करें।"
    },
    {
      "step": "04",
      "title": "लॉन्च और विश्लेषण करें",
      "desc": "पूर्ण क्लिक टेलीमेट्री के साथ समृद्ध मार्केटिंग अभियान प्रसारित करें या लेनदेन अलर्ट ट्रिगर करें।"
    }
  ],
  "useCasesBadge": "उपयोग के मामले",
  "useCasesTitle": "समृद्ध संवादात्मक अनुभवों के साथ मोबाइल उपयोगकर्ताओं को जोड़ें।",
  "useCasesSubtitle": "इंटरैक्टिव मोबाइल संचार के साथ मूल्य प्रदान करें जो रूपांतरण दरों को 3 गुना तक बढ़ाता है।",
  "interactiveCard": {
    "badge": "सत्यापित RCS संदेश",
    "message": "Apex Gear से आपका पैकेज भेज दिया गया है। रीयल-टाइम में ट्रैक करें या डिलीवरी निर्देश बदलें।",
    "btnConfirm": "डिलीवरी ट्रैक करें",
    "btnReschedule": "पता बदलें"
  },
  "useCases": [
    {
      "title": "बोर्डिंग पास और टिकटिंग",
      "desc": "लाइव गेट अपडेट के साथ सीधे फोन स्क्रीन पर पूर्ण-रंगीन डिजिटल बोर्डिंग पास वितरित करें।"
    },
    {
      "title": "ई-कॉमर्स फ्लैश सेल",
      "desc": "स्वाइप करने योग्य हिंडोला कार्ड और त्वरित खरीद बटन के साथ नए उत्पाद संग्रह प्रदर्शित करें।"
    },
    {
      "title": "अपॉइंटमेंट शेड्यूलिंग",
      "desc": "इंटरैक्टिव कैलेंडर अनुस्मारक भेजें जो एक-टैप पुष्टि या पुनर्निर्धारण की अनुमति देते हैं।"
    },
    {
      "title": "द्वि-चरणीय प्रमाणीकरण (2FA)",
      "desc": "स्पष्ट सुरक्षा वॉटरमार्क और ब्रांडिंग के साथ सत्यापित वन-टाइम पासवर्ड वितरित करें।"
    }
  ],
  "industriesBadge": "उद्योग जिनकी हम सेवा करते हैं",
  "industriesTitle": "सभी प्रमुख क्षेत्रों में RCS व्यावसायिक मैसेजिंग।",
  "industriesSubtitle": "मोबाइल उपकरणों पर उपभोक्ता संचार को आधुनिक बनाने में वैश्विक संगठनों की सहायता करना।",
  "industries": [
    {
      "title": "एयरलाइंस और आतिथ्य",
      "desc": "उड़ान चेक-इन अनुस्मारक, डिजिटल बोर्डिंग पास और कमरे के उन्नयन के संकेत।"
    },
    {
      "title": "बैंकिंग और फिनटेक",
      "desc": "धोखाधड़ी लेनदेन अलर्ट, मासिक खर्च सारांश और त्वरित कार्ड सक्रियण।"
    },
    {
      "title": "खुदरा और ई-कॉमर्स",
      "desc": "नए उत्पाद संग्रह, स्टॉक उपलब्धता अलर्ट और शिपिंग अपडेट।"
    },
    {
      "title": "स्वास्थ्य सेवा",
      "desc": "प्रिस्क्रिप्शन रीफिल अनुस्मारक, क्लिनिक अपॉइंटमेंट पुष्टि और टेलीहेल्थ चेक-इन।"
    },
    {
      "title": "ऑटोमोटिव",
      "desc": "सेवा रखरखाव अलर्ट, वाहन रिकॉल सूचनाएं और लीज नवीनीकरण विकल्प।"
    }
  ],
  "whyBadge": "हमारा RCS प्लेटफॉर्म क्यों चुनें",
  "whyTitle": "अग्रणी उद्यम iNet RCS क्यों चुनते हैं",
  "whySubtitle": "वैश्विक उद्यमों द्वारा विश्वसनीय कैरियर-ग्रेड मैसेजिंग इंफ्रास्ट्रक्चर।",
  "whyCards": {
    "secure": {
      "title": "सत्यापित ब्रांड अखंडता",
      "description": "गारंटीकृत एंटी-स्पूफिंग सत्यापन आपके ब्रांड को फ़िशिंग प्रतिरूपण से बचाता है।"
    },
    "cloud": {
      "title": "विश्वव्यापी कैरियर इंटरकनेक्ट्स",
      "description": "उत्तरी अमेरिका, यूरोप, एशिया और लैटिन अमेरिका में मोबाइल नेटवर्क ऑपरेटरों के साथ सीधा कनेक्शन।"
    },
    "api": {
      "title": "एकीकृत एकल API",
      "description": "एक सरल API एंडपॉइंट बिना डुप्लिकेट बिलिंग के SMS के स्वचालित फ़ॉलबैक के साथ RCS संभालता है।"
    },
    "connectivity": {
      "title": "गारंटीकृत वैश्विक डिलीवरी",
      "description": "स्मार्ट फ़ॉलबैक इंजन हैंडसेट या नेटवर्क क्षमता की परवाह किए बिना 100% पहुंच सुनिश्चित करते हैं।"
    },
    "automated": {
      "title": "इंटरैक्टिव ऑटोमेशन इंजन",
      "description": "स्वचालित चैटबॉट संवाद प्रवाह बनाएं जो ग्राहकों को प्रश्नों से लेकर पूर्ण कार्यों तक मार्गदर्शन करें।"
    }
  },
  "apiCard": {
    "title": "RCS बिजनेस मैसेजिंग API",
    "desc": "स्वचालित SMS फ़ॉलबैक हैंडलिंग के साथ समृद्ध कार्ड, हिंडोला टेम्प्लेट और सुझाए गए उत्तर भेजें।"
  },
  "ctaBadge": "RCS में अपग्रेड करें",
  "ctaTitle": "RCS के साथ अपने ब्रांड संचार को जीवंत बनाएं।",
  "ctaSubtitle": "समृद्ध, अधिक आकर्षक मोबाइल संदेश वितरित करें जो ग्राहकों का विश्वास अर्जित करते हैं और उच्च रूपांतरण प्रदान करते हैं।",
  "contactUs": "RCS के साथ शुरुआत करें",
  "ctaFootnote": "पूर्ण Google Jibe और वैश्विक वाहक पारिस्थितिकी तंत्र अनुकूलता"
};

const ar: RcsBusinessMessagingTranslation = {
  "heroBadge": "رسائل الأعمال عبر RCS",
  "heroTitle": "حوّل الرسائل القصيرة SMS إلى محادثات تفاعلية غنية عبر RCS",
  "heroDesc": "ارتقِ بتجربة الرسائل عبر الهواتف المحمولة مع علامات التحقق من هوية المرسل، وبطاقات التمرير عالية الدقة، وأزرار الإجراءات السريعة، مع دعم أصلي كامل لهواتف أندرويد.",
  "talkToExpert": "تحدث مع خبير",
  "exploreCapabilities": "استكشف الإمكانيات",
  "chatScreen": {
    "contactName": "خطوط سكاي لاين إكسبريس الجوية",
    "status": "علامة تجارية موثقة • شارة التحقق",
    "msg1": "مرحباً جوردان! صعود الركاب لرحلتك SK-402 إلى زيورخ بدأ عند البوابة B12. بطاقة صعود الطائرة جاهزة.",
    "time1": "07:30",
    "actionBtn": "عرض بطاقة الصعود ←",
    "msg2": "شكراً جزيلاً! هل يمكنني الترقية إلى مقعد بمساحة إضافية للأرجل؟",
    "time2": "07:31",
    "msg3": "المقعد 12A متاح مقابل 25$. اضغط بالأسفل للتأكيد الفوري!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "تطبيق الرسائل الأصلي لنظام أندرويد",
    "secure": "هوية مرسل موثقة ومعتمدة"
  },
  "overviewBadge": "الجيل الجديد من رسائل الهاتف المحمول",
  "overviewTitle": "قدّم تجارب تفاعلية شبيهة بالتطبيقات دون الحاجة لتنزيل أي تطبيق.",
  "overviewDesc1": "تُعد خدمات الاتصال الغنية (RCS) المعيار العالمي الحديث لرسائل الأعمال على الهواتف. تواصل مع عملائك مباشرة داخل تطبيق الرسائل الأساسي مع شعار رسمي موثق ووسائط بصرية مؤثرة.",
  "overviewDesc2": "تخلص من قيود النصوص العادية. فعّل الإجراءات بنقرة واحدة، ومشاركة الموقع، وبطاقات التمرير التفاعلية، والتحويل التلقائي الاحتياطي إلى SMS لضمان وصول الرسالة دون استثناء.",
  "check1": "موثوقية المرسل المعتمد وشعار العلامة",
  "check2": "بطاقات تفاعلية وأزرار سريعة",
  "check3": "تحويل احتياطي تلقائي إلى SMS / MMS",
  "featuresBadge": "القدرات الرئيسية",
  "featuresTitle": "وسائط غنية. أمان موثق. تفاعل استثنائي.",
  "featuresSubtitle": "كل ما تحتاجه فرق التسويق وتجربة العملاء لإطلاق حملات RCS على نطاق واسع.",
  "features": [
    {
      "title": "علامة تجارية موثقة للمرسل",
      "desc": "اعرض شعارك الرسمي وألوان علامتك وشارة التحقق المعتمدة لبناء ثقة فورية مع العملاء."
    },
    {
      "title": "بطاقات تمرير وسائط عالية الدقة",
      "desc": "أرسل بطاقات منتجات تفاعلية قابلة للسحب تتضمن صوراً وأسعاراً وروابط شراء مباشرة."
    },
    {
      "title": "أزرار إجراءات بنقرة واحدة",
      "desc": "مكّن العملاء من فتح الخرائط، الاتصال بالأرقام، حفظ المواعيد بالتقويم، أو زيارة المواقع بنقرة واحدة."
    },
    {
      "title": "اقتراحات الردود السريعة",
      "desc": "قدّم خيارات رد ذكية ومعدة مسبقاً تتيح للعملاء الإجابة دون الحاجة لكتابة أي كلمة."
    },
    {
      "title": "تحويل احتياطي تلقائي لرسائل SMS",
      "desc": "إذا كان هاتف المستلم لا يدعم RCS أو يفتقر لاتصال البيانات، يتم إرسال الرسالة تلقائياً كـ SMS."
    },
    {
      "title": "إشعارات قراءة وتحليلات في الوقت الفعلي",
      "desc": "تتبع معدلات التسليم، وإشعارات القراءة، وبيانات النقر على الأزرار بشكل فوري ودقيق."
    }
  ],
  "howItWorksBadge": "كيف يعمل النظام",
  "howItWorksTitle": "أطلق حملات RCS المعتمدة في أربع خطوات سهلة.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "توثيق العلامة التجارية والإعداد",
      "desc": "سجّل ملف علامتك التجارية وشعارها وألوانها ووثائقها القانونية لدى سجلات المشغلين المعتمدة."
    },
    {
      "step": "02",
      "title": "تصميم القوالب التفاعلية",
      "desc": "أنشئ بطاقات وسائط وأزرار إجراءات ومسارات محادثة داخل استوديو القوالب المرئي المتطور."
    },
    {
      "step": "03",
      "title": "ربط واجهات برمجة الرسائل (API)",
      "desc": "ادمج واجهة برمجة التطبيقات الموحدة مع التوجيه الاحتياطي التلقائي لمشغلي الاتصالات."
    },
    {
      "step": "04",
      "title": "الإطلاق والتحليل",
      "desc": "أرسل حملات تسويقية غنية أو أطلق تنبيهات المعاملات مع تتبع كامل لبيانات التفاعل والنقر."
    }
  ],
  "useCasesBadge": "حالات الاستخدام",
  "useCasesTitle": "تفاعل مع مستخدمي الهواتف بتجارب محادثة غنية وممتعة.",
  "useCasesSubtitle": "قدّم قيمة مضافة عبر اتصالات متنقلة تفاعلية تزيد معدلات التحويل بما يصل إلى 3 أضعاف.",
  "interactiveCard": {
    "badge": "رسالة RCS موثقة",
    "message": "تم شحن شحنتك من Apex Gear بنجاح. تتبع مسار الشحنة مباشرة أو قم بتعديل تعليمات التوصيل.",
    "btnConfirm": "تتبع الشحنة",
    "btnReschedule": "تغيير العنوان"
  },
  "useCases": [
    {
      "title": "بطاقات الصعود والتذاكر",
      "desc": "أرسل بطاقات صعود رقمية ملونة مع تحديثات حية لبوابة الإقلاع مباشرة إلى شاشة الهاتف."
    },
    {
      "title": "عروض التجارة الإلكترونية الخاطفة",
      "desc": "اعرض مجموعات المنتجات الجديدة عبر بطاقات متحركة وأزرار شراء فورية وسلسة."
    },
    {
      "title": "جدولة وتأكيد المواعيد",
      "desc": "أرسل تذكيرات تقويم تفاعلية تتيح التأكيد أو إعادة الجدولة بنقرة واحدة سريعة."
    },
    {
      "title": "المصادقة الثنائية (2FA)",
      "desc": "سلّم كلمات المرور لمرة واحدة بأسلوب موثق وشارات حماية أمنية واضحة ضد الاحتيال."
    }
  ],
  "industriesBadge": "القطاعات التي نخدمها",
  "industriesTitle": "رسائل الأعمال عبر RCS لجميع قطاعات السوق.",
  "industriesSubtitle": "مساعدة المؤسسات الرائدة على تحديث قنوات التواصل مع المستهلكين عبر الهواتف المحمولة.",
  "industries": [
    {
      "title": "الطيران والضيافة",
      "desc": "تذكيرات تسجيل الوصول للرحلات، بطاقات الصعود الرقمية، وترقيات الغرف الفندقية."
    },
    {
      "title": "البنوك والتكنولوجيا المالية",
      "desc": "تنبيهات مكافحة الاحتيال، ملخصات الإنفاق الشهرية، وتنشيط البطاقات المصرفية بنقرة واحدة."
    },
    {
      "title": "التجزئة والتجارة الإلكترونية",
      "desc": "استعراض التشكيلات الجديدة، إشعارات توفر المنتجات، وتحديثات مسار الشحن."
    },
    {
      "title": "الرعاية الصحية",
      "desc": "تذكيرات تجديد الوصفات الطبية، تأكيد مواعيد العيادات، وتسجيل الدخول للاستشارات عن بُعد."
    },
    {
      "title": "قطاع السيارات",
      "desc": "تنبيهات الصيانة الدورية، إشعارات استدعاء المركبات، وخيارات تجديد عقود الإيجار."
    }
  ],
  "whyBadge": "لماذا تختار منصة RCS الخاصة بنا",
  "whyTitle": "لماذا تختار كبرى المؤسسات العالمية iNet RCS",
  "whySubtitle": "بنية تحتية للرسائل بمستوى المشغلين تحظى بثقة الشركات والمؤسسات العالمية.",
  "whyCards": {
    "secure": {
      "title": "سلامة العلامة وموثوقيتها",
      "description": "حماية مؤكدة ضد انتحال الشخصية والتصيد الاحتيالي تحمي علامتك وسمعتها بالكامل."
    },
    "cloud": {
      "title": "ربط مباشر مع مشغلي الاتصالات حول العالم",
      "description": "اتصالات مباشرة مع مشغلي شبكات المحمول في أمريكا الشمالية وأوروبا وآسيا وأمريكا اللاتينية."
    },
    "api": {
      "title": "واجهة برمجة تطبيقات موحدة",
      "description": "نقطة اتصال برمجية واحدة تدير رسائل RCS والتحويل الاحتياطي لـ SMS دون فواتير مزدوجة."
    },
    "connectivity": {
      "title": "تسليم عالمي مضمون",
      "description": "محركات ذكية تضمن وصول الرسائل بنسبة 100% بغض النظر عن طراز هاتف العميل أو شبكته."
    },
    "automated": {
      "title": "محرك أتمتة تفاعلي متقدم",
      "description": "صمم محادثات آلية ترشد العملاء بسلاسة من مرحلة الاستفسار وحتى إتمام الإجراءات بنجاح."
    }
  },
  "apiCard": {
    "title": "واجهة برمجة تطبيقات RCS للأعمال",
    "desc": "أرسل البطاقات التفاعلية وقوالب التمرير والردود السريعة مع إدارة تلقائية للتحويل لـ SMS."
  },
  "ctaBadge": "قم بالترقية إلى RCS الآن",
  "ctaTitle": "اجعل تواصل علامتك التجارية أكثر حيوية وتفاعلية مع RCS.",
  "ctaSubtitle": "قدّم رسائل هاتفية غنية وجذابة تكسب ثقة العملاء وترفع معدلات التحويل إلى مستويات غير مسبوقة.",
  "contactUs": "ابدأ مع RCS",
  "ctaFootnote": "توافق كامل مع Google Jibe ومنظومة مشغلي الاتصالات العالمية"
};

const fr: RcsBusinessMessagingTranslation = {
  "heroBadge": "MESSAGERIE D'ENTREPRISE RCS",
  "heroTitle": "Transformez le SMS Traditionnel en Expérience Conversationnelle RCS",
  "heroDesc": "Améliorez la messagerie mobile avec des badges d'expéditeur vérifié, des carrousels multimédias haute résolution, des boutons d'action rapide interactifs et une portée native sur smartphones Android.",
  "talkToExpert": "Parler à un expert",
  "exploreCapabilities": "Explorer les fonctionnalités",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Marque RCS Vérifiée • Badge Officiel",
    "msg1": "Bonjour Jordan ! L'embarquement pour votre vol SK-402 vers Zurich a commencé porte B12. Votre carte d'accès est prête.",
    "time1": "07:30",
    "actionBtn": "Ouvrir la Carte d'Embarquement →",
    "msg2": "Merci ! Puis-je obtenir un siège avec plus d'espace pour les jambes ?",
    "time2": "07:31",
    "msg3": "Le siège 12A (espace supplémentaire) est disponible pour 25 $. Appuyez ci-dessous pour confirmer !",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Application Messages Native Android",
    "secure": "Identité et Marque Vérifiées"
  },
  "overviewBadge": "MESSAGERIE MOBILE NOUVELLE GÉNÉRATION",
  "overviewTitle": "Offrez des expériences interactives dignes d'une application sans aucune installation requise.",
  "overviewDesc1": "Les Rich Communication Services (RCS) constituent le standard moderne de la communication d'entreprise sur mobile. Touchez vos clients directement dans leur application Messages native avec votre logo officiel et des visuels à fort impact.",
  "overviewDesc2": "Dépassez les contraintes du texte brut. Activez les actions en un clic, le partage de position, les carrousels interactifs et le basculement automatique par SMS pour garantir 100 % de délivrabilité.",
  "check1": "Confiance de l'Expéditeur Vérifié et Logo Officiel",
  "check2": "Carrousels Multimédias et Boutons d'Action Rapide",
  "check3": "Basculement Automatique de Secours SMS / MMS",
  "featuresBadge": "FONCTIONNALITÉS CLÉS",
  "featuresTitle": "Médias enrichis. Sécurité certifiée. Engagement exceptionnel.",
  "featuresSubtitle": "Tous les outils dont vos équipes marketing et relation client ont besoin pour déployer le RCS à grande échelle.",
  "features": [
    {
      "title": "Identité d'Expéditeur Vérifié",
      "desc": "Affichez votre logo officiel, vos couleurs de marque et le badge vérifié pour inspirer une confiance immédiate."
    },
    {
      "title": "Carrousels Médias Haute Résolution",
      "desc": "Envoyez des cartes interactives avec images haute définition, descriptions, tarifs et liens d'achat direct."
    },
    {
      "title": "Boutons d'Action Suggérée en Un Clic",
      "desc": "Permettez à vos clients d'ouvrir des cartes, composer des numéros, ajouter des événements au calendrier ou visiter des liens en un geste."
    },
    {
      "title": "Suggestions de Réponses Rapides",
      "desc": "Proposez des bulles de réponses contextuelles pour permettre aux utilisateurs d'interagir sans saisir de texte."
    },
    {
      "title": "Secours Automatique par SMS Opérateur",
      "desc": "Si l'appareil du destinataire ne prend pas en charge le RCS ou est hors ligne, le message est transmis instantanément par SMS standard."
    },
    {
      "title": "Accusés de Réception et Télémétrie en Temps Réel",
      "desc": "Suivez les taux de remise, confirmations de lecture et taux de clic sur les boutons d'action en temps réel."
    }
  ],
  "howItWorksBadge": "COMMENT ÇA MARCHE",
  "howItWorksTitle": "Déployez vos campagnes RCS vérifiées en quatre étapes simples.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Vérification et Configuration de Marque",
      "desc": "Enregistrez votre profil officiel, logos, couleurs et documents juridiques auprès des registres opérateurs."
    },
    {
      "step": "02",
      "title": "Conception de Modèles Interactifs",
      "desc": "Créez des cartes riches, boutons d'action et arborescences de dialogue dans notre studio visuel intuitif."
    },
    {
      "step": "03",
      "title": "Connexion des API de Messagerie",
      "desc": "Intégrez notre API unifiée avec routage intelligent et secours automatique opérateur par SMS."
    },
    {
      "step": "04",
      "title": "Lancement et Analyse des Performances",
      "desc": "Diffusez des campagnes marketing interactives ou notifications transactionnelles avec télémétrie complète."
    }
  ],
  "useCasesBadge": "CAS D'USAGE",
  "useCasesTitle": "Engagez les utilisateurs mobiles avec des conversations interactives enrichies.",
  "useCasesSubtitle": "Apportez une réelle valeur ajoutée grâce à des échanges mobiles qui multiplient les taux de conversion jusqu'à 3 fois.",
  "interactiveCard": {
    "badge": "MESSAGE RCS VÉRIFIÉ",
    "message": "Votre colis de Apex Gear a été expédié. Suivez son acheminement en temps réel ou modifiez vos instructions de livraison.",
    "btnConfirm": "Suivre la Livraison",
    "btnReschedule": "Modifier l'Adresse"
  },
  "useCases": [
    {
      "title": "Cartes d'Embarquement et Billetterie",
      "desc": "Transmettez des cartes d'embarquement couleur avec mises à jour de porte en direct sur l'écran du mobile."
    },
    {
      "title": "Ventes Flash E-Commerce",
      "desc": "Mettez en avant vos nouvelles collections avec des carrousels à balayage et des boutons d'achat instantané."
    },
    {
      "title": "Planification et Gestion des Rendez-Vous",
      "desc": "Envoyez des rappels interactifs permettant la confirmation ou la replanification en une touche."
    },
    {
      "title": "Authentification à Deux Facteurs (2FA)",
      "desc": "Délivrez des codes à usage unique sécurisés, identifiés par votre marque officielle et protégés contre le phishing."
    }
  ],
  "industriesBadge": "SECTEURS D'ACTIVITÉ",
  "industriesTitle": "La messagerie d'entreprise RCS au service de tous les secteurs.",
  "industriesSubtitle": "Accompagner les grandes organisations dans la modernisation de leurs interactions clients sur smartphone.",
  "industries": [
    {
      "title": "Compagnies Aériennes et Hôtellerie",
      "desc": "Rappels d'enregistrement, cartes d'embarquement numériques et propositions de surclassement de chambre."
    },
    {
      "title": "Banque et FinTech",
      "desc": "Alertes de prévention des fraudes, synthèses mensuelles de dépenses et activation instantanée de carte."
    },
    {
      "title": "Commerce et E-Commerce",
      "desc": "Présentation des nouveaux arrivages, alertes de retour en stock et suivi d'expédition de commande."
    },
    {
      "title": "Santé et Soins Médicaux",
      "desc": "Rappels de renouvellement d'ordonnance, confirmations de consultation et admissions téléconsultation."
    },
    {
      "title": "Automobile et Mobilité",
      "desc": "Alertes de révision périodique, notifications de rappel technique et renouvellement de contrat de leasing."
    }
  ],
  "whyBadge": "POURQUOI NOTRE PLATEFORME RCS",
  "whyTitle": "Pourquoi les Entreprises Leaders Choisissent iNet RCS",
  "whySubtitle": "Une infrastructure de messagerie de niveau opérateur adoptée par des entreprises internationales.",
  "whyCards": {
    "secure": {
      "title": "Intégrité de Marque Certifiée",
      "description": "Une vérification anti-usurpation stricte protégeant votre marque contre le phishing et l'impersonation."
    },
    "cloud": {
      "title": "Interconnexions Opérateurs Mondiales",
      "description": "Liaisons directes avec les opérateurs mobiles en Amérique du Nord, Europe, Asie et Amérique latine."
    },
    "api": {
      "title": "API Unique et Unifiée",
      "description": "Un endpoint d'API simple gère le RCS avec basculement automatique par SMS sans facturation superflue."
    },
    "connectivity": {
      "title": "Délivrabilité Mondiale Garantie",
      "description": "Des moteurs de repli intelligents assurant 100 % de couverture quel que soit l'opérateur ou le terminal."
    },
    "automated": {
      "title": "Moteur d'Automatisation Conversationnelle",
      "description": "Créez des parcours chatbots automatisés guidant vos clients depuis la question jusqu'à l'action finale."
    }
  },
  "apiCard": {
    "title": "API de Messagerie RCS pour Entreprises",
    "desc": "Diffusez des cartes enrichies, des carrousels visuels et des boutons d'action avec repli SMS automatique."
  },
  "ctaBadge": "PASSEZ AU RCS",
  "ctaTitle": "Donnez vie à la communication de votre marque grâce au RCS.",
  "ctaSubtitle": "Offrez des messages mobiles captivants et interactifs qui renforcent la confiance et décuplent les conversions.",
  "contactUs": "Démarrer avec le RCS",
  "ctaFootnote": "Pleine compatibilité avec Google Jibe et l'écosystème international des opérateurs télécoms"
};

const de: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS BUSINESS MESSAGING",
  "heroTitle": "Verwandeln Sie Standard-SMS in Interaktive RCS-Dialoge",
  "heroDesc": "Erhöhen Sie die Qualität mobiler Nachrichten mit verifizierten Absender-Häkchen, hochauflösenden Karussell-Karten, interaktiven Schnellaktions-Schaltflächen und nativer Android-Reichweite.",
  "talkToExpert": "Mit einem Experten sprechen",
  "exploreCapabilities": "Funktionen erkunden",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Verifizierte RCS-Marke • Offizielles Häkchen",
    "msg1": "Hallo Jordan! Das Boarding für Ihren Flug SK-402 nach Zürich hat an Gate B12 begonnen. Ihre Bordkarte ist bereit.",
    "time1": "07:30",
    "actionBtn": "Bordkarte öffnen →",
    "msg2": "Vielen Dank! Kann ich auf einen Sitzplatz mit mehr Beinfreiheit upgraden?",
    "time2": "07:31",
    "msg3": "Sitzplatz 12A (mehr Beinfreiheit) ist für 25 $ verfügbar. Tippen Sie unten zur Bestätigung!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Native Android Messages App",
    "secure": "Verifizierte Absender-Markenidentität"
  },
  "overviewBadge": "MOBILE NACHRICHTEN DER NÄCHSTEN GENERATION",
  "overviewTitle": "Bieten Sie interaktive App-Erlebnisse direkt in der Nachrichten-App – ohne Installation.",
  "overviewDesc1": "Rich Communication Services (RCS) ist der moderne weltweite Standard für mobile Unternehmensnachrichten. Erreichen Sie Kunden direkt in der nativen SMS-App mit verifiziertem Branding, Logo und Multimedia-Inhalten.",
  "overviewDesc2": "Überwinden Sie die Grenzen von reinem Text. Ermöglichen Sie Ein-Klick-Aktionen, Standortfreigaben, interaktive Karussells und automatischen SMS-Fallback, damit jeder Empfänger zuverlässig erreicht wird.",
  "check1": "Geprüfter Absender & Offizielles Marken-Logo",
  "check2": "Interaktive Karussell-Karten & Schnell-Buttons",
  "check3": "Automatischer SMS / MMS Fallback",
  "featuresBadge": "KERNFUNKTIONEN",
  "featuresTitle": "Reichhaltige Medien. Verifizierte Sicherheit. Herausragendes Engagement.",
  "featuresSubtitle": "Alles, was Ihre Marketing- und Kundenserviceteams benötigen, um RCS im großen Maßstab einzusetzen.",
  "features": [
    {
      "title": "Verifiziertes Absender-Branding",
      "desc": "Zeigen Sie Ihr offizielles Unternehmenslogo, Markenfarben und ein Verifizierungshäkchen für sofortiges Vertrauen."
    },
    {
      "title": "Hochauflösende Medien-Karussells",
      "desc": "Senden Sie wischbare Produktkarten mit Bildern, Preisangaben und direkten Kauflinks."
    },
    {
      "title": "One-Tap-Aktionsschaltflächen",
      "desc": "Ermöglichen Sie Kunden mit einem Fingertipp Karten zu öffnen, Anrufe zu starten oder Termine zu speichern."
    },
    {
      "title": "Vorgeschlagene Schnellantworten",
      "desc": "Bieten Sie vorgefertigte Antwort-Chips, damit Kunden reagieren können, ohne tippen zu müssen."
    },
    {
      "title": "Automatischer Mobilfunk-SMS-Fallback",
      "desc": "Unterstützt das Empfängergerät kein RCS oder fehlen mobile Daten, wird die Nachricht automatisch als SMS gesendet."
    },
    {
      "title": "Echtzeit-Lesebestätigungen & Metriken",
      "desc": "Verfolgen Sie Zustellungsraten, Lesebestätigungen und Klicks auf Aktions-Buttons in Echtzeit."
    }
  ],
  "howItWorksBadge": "SO FUNKTIONIERT ES",
  "howItWorksTitle": "In vier Schritten zu verifizierten RCS-Kampagnen.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Markenprüfung & Registrierung",
      "desc": "Registrieren Sie Ihr Unternehmensprofil, Logo, Farben und offizielle Unterlagen bei den Netzbetreibern."
    },
    {
      "step": "02",
      "title": "Interaktive Vorlagen gestalten",
      "desc": "Erstellen Sie Medienkarten, Aktions-Buttons und Konversationsbäume in unserem visuellen Vorlagen-Studio."
    },
    {
      "step": "03",
      "title": "Messaging-APIs verbinden",
      "desc": "Integrieren Sie unsere einheitliche Nachrichten-API mit automatischem Betreiber-Fallback."
    },
    {
      "step": "04",
      "title": "Starten & Analysieren",
      "desc": "Senden Sie reichhaltige Marketingkampagnen oder Transaktionsbenachrichtigungen mit vollständiger Klick-Telemetrie."
    }
  ],
  "useCasesBadge": "ANWENDUNGSFÄLLE",
  "useCasesTitle": "Begeistern Sie Mobilfunknutzer mit interaktiven Dialogerlebnissen.",
  "useCasesSubtitle": "Schaffen Sie Mehrwert durch moderne mobile Kommunikation, die Conversion-Raten um bis zu das Dreifache steigert.",
  "interactiveCard": {
    "badge": "VERIFIZIERTE RCS-NACHRICHT",
    "message": "Ihr Paket von Apex Gear wurde versandt. Verfolgen Sie die Sendung in Echtzeit oder ändern Sie die Lieferadresse.",
    "btnConfirm": "Sendung verfolgen",
    "btnReschedule": "Adresse ändern"
  },
  "useCases": [
    {
      "title": "Bordkarten & Veranstaltungstickets",
      "desc": "Liefern Sie farbige digitale Bordkarten mit Live-Gate-Updates direkt auf den Bildschirm des Smartphones."
    },
    {
      "title": "E-Commerce Flash-Sales",
      "desc": "Präsentieren Sie neue Kollektionen mit durchblätterbaren Karussellkarten und Sofortkauf-Schaltflächen."
    },
    {
      "title": "Terminvereinbarung & Erinnerungen",
      "desc": "Senden Sie interaktive Kalendererinnerungen mit One-Tap-Bestätigung oder flexibler Terminverschiebung."
    },
    {
      "title": "Zwei-Faktor-Authentifizierung (2FA)",
      "desc": "Übermitteln Sie vertrauenswürdige Einmalpasswörter mit offiziellem Markenlogo und Manipulationsschutz."
    }
  ],
  "industriesBadge": "BRANCHENLÖSUNGEN",
  "industriesTitle": "RCS Business Messaging für alle wichtigen Branchen.",
  "industriesSubtitle": "Unterstützung von Organisationen bei der Modernisierung ihrer Kundenkommunikation auf Smartphones.",
  "industries": [
    {
      "title": "Luftfahrt & Hotelgewerbe",
      "desc": "Check-in-Erinnerungen, digitale Bordkarten und exklusive Angebote für Zimmer-Upgrades."
    },
    {
      "title": "Banken & FinTech",
      "desc": "Sicherheitswarnungen bei verdächtigen Transaktionen, monatliche Ausgabenübersichten und Kartenaktivierung."
    },
    {
      "title": "Einzelhandel & E-Commerce",
      "desc": "Vorstellung neuer Kollektionen, Benachrichtigungen bei Wiederverfügbarkeit und Paketstatusmeldungen."
    },
    {
      "title": "Gesundheitswesen",
      "desc": "Rezept-Erinnerungen, Terminbestätigungen in Praxen und Check-ins für Videosprechstunden."
    },
    {
      "title": "Automobilbranche",
      "desc": "Wartungserinnerungen, wichtige Rückrufaktionen und Optionen zur Leasing-Verlängerung."
    }
  ],
  "whyBadge": "WARUM UNSERE RCS-PLATTFORM",
  "whyTitle": "Warum führende Unternehmen auf iNet RCS setzen",
  "whySubtitle": "Messaging-Infrastruktur auf Betreiberniveau, der globale Großunternehmen vertrauen.",
  "whyCards": {
    "secure": {
      "title": "Verifizierte Markenintegrität",
      "description": "Garantierter Anti-Spoofing-Schutz bewahrt Ihre Marke vor Phishing und unbefugter Nachahmung."
    },
    "cloud": {
      "title": "Globale Betreiber-Direktanbindungen",
      "description": "Direkte Verbindungen zu Mobilfunknetzbetreibern in Nordamerika, Europa, Asien und Lateinamerika."
    },
    "api": {
      "title": "Einheitliche Single-API",
      "description": "Ein einfacher API-Endpunkt steuert RCS mit automatischem SMS-Fallback ohne doppelte Gebühren."
    },
    "connectivity": {
      "title": "Garantierte weltweite Zustellung",
      "description": "Intelligente Fallback-Systeme stellen eine 100-prozentige Erreichbarkeit über alle Geräte hinweg sicher."
    },
    "automated": {
      "title": "Interaktive Automatisierungs-Engine",
      "description": "Erstellen Sie automatisierte Dialogflüsse, die Kunden von der Frage bis zum Kaufabschluss begleiten."
    }
  },
  "apiCard": {
    "title": "RCS Business Messaging API",
    "desc": "Versenden Sie Rich-Media-Karten, Karussell-Vorlagen und Aktions-Buttons mit automatischem SMS-Fallback."
  },
  "ctaBadge": "AUF RCS UPGRADEN",
  "ctaTitle": "Erwecken Sie Ihre Markenkommunikation mit RCS zum Leben.",
  "ctaSubtitle": "Bieten Sie ansprechende, interaktive mobile Nachrichten, die Kundenvertrauen schaffen und Conversions maximieren.",
  "contactUs": "Mit RCS starten",
  "ctaFootnote": "Vollständige Kompatibilität mit Google Jibe und dem weltweiten Netzbetreiber-Ökosystem"
};

const ja: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS ビジネス メッセージング",
  "heroTitle": "通常の SMS をリッチで対話的な RCS へと進化",
  "heroDesc": "認証済み送信者マーク、高解像度カルーセルカード、インタラクティブなワンタップ操作ボタン、Android スマートフォンの標準メッセージアプリ対応により、モバイルコミュニケーションを劇的に向上させます。",
  "talkToExpert": "専門スタッフに相談",
  "exploreCapabilities": "機能を詳しく見る",
  "chatScreen": {
    "contactName": "スカイライン・エクスプレス航空",
    "status": "公式認証 RCS ブランド • 公式マーク",
    "msg1": "ジョーダン様、チューリッヒ行き SK-402 便の搭乗がゲート B12 にて開始されました。デジタル搭乗券のご用意が整っております。",
    "time1": "07:30",
    "actionBtn": "搭乗券を表示 →",
    "msg2": "ありがとうございます！足元の広い座席へのアップグレードは可能ですか？",
    "time2": "07:31",
    "msg3": "座席 12A（足元広め）を 25 ドルでご案内可能です。下のボタンをタップして確定してください！",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Android 標準メッセージアプリ対応",
    "secure": "認証済み送信元ブランド保証"
  },
  "overviewBadge": "次世代モバイル メッセージング",
  "overviewTitle": "アプリのダウンロード不要で、アプリ同様のリッチで直感的な対話体験を実現。",
  "overviewDesc1": "リッチ コミュニケーション サービス（RCS）は、モバイル向けビジネスメッセージの世界標準です。公式ロゴや高画質ビジュアルとともに、標準メッセージアプリ内で直接顧客にリーチできます。",
  "overviewDesc2": "テキスト文字数の制限から解放。ワンタップアクション、位置情報共有、高解像度カルーセル、そして確実な到達を支える自動 SMS フォールバックを提供します。",
  "check1": "公式認証送信者の信頼とブランドロゴ",
  "check2": "リッチカルーセルカードとクイックボタン",
  "check3": "自動 SMS / MMS フォールバック保護",
  "featuresBadge": "主な機能と特長",
  "featuresTitle": "リッチメディア。認証済みセキュリティ。圧倒的なエンゲージメント。",
  "featuresSubtitle": "マーケティングおよびカスタマーエクスペリエンスチームが大規模に RCS を展開するために必要なすべてを備えています。",
  "features": [
    {
      "title": "公式認証送信者ブランディング",
      "desc": "公式ロゴ、ブランドカラー、認証バッジを表示し、受信した瞬間にユーザーの信頼を獲得します。"
    },
    {
      "title": "高解像度メディア カルーセル",
      "desc": "画像、価格、購入リンクを組み込んだ、スワイプ可能なインタラクティブ商品カードを配信できます。"
    },
    {
      "title": "ワンタップ推奨アクション ボタン",
      "desc": "地図を開く、電話をかける、カレンダーに予定を登録する、Web サイトを開くなどの操作を 1 タップで完結。"
    },
    {
      "title": "推奨クイックリプライ チップ",
      "desc": "文脈に応じた返信選択肢を提示し、顧客が文字入力の手間なくスムーズに回答できるようにします。"
    },
    {
      "title": "キャリア SMS 自動フォールバック",
      "desc": "受信端末が RCS 非対応の場合やデータ通信圏外の場合、自動的に標準 SMS へ切り替えて確実に届けます。"
    },
    {
      "title": "リアルタイム既読通知とテレメトリ分析",
      "desc": "配信ステータス、既読確認、アクションボタンのクリック率などをリアルタイムに正確に把握可能です。"
    }
  ],
  "howItWorksBadge": "ご利用の流れ",
  "howItWorksTitle": "わずか 4 ステップで認証済み RCS キャンペーンを開始。",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "ブランド認証と初期登録",
      "desc": "通信事業者の公式レジストリに、貴社のブランドプロファイル、ロゴ、カラー、必要書類を登録します。"
    },
    {
      "step": "02",
      "title": "対話テンプレートの設計",
      "desc": "ビジュアルスタジオ上で、リッチメディアカード、ボタン、インタラクティブな分岐シナリオを作成します。"
    },
    {
      "step": "03",
      "title": "メッセージング API の連携",
      "desc": "自動フォールバック機能を備えた統合メッセージング API を、貴社の基幹システムと連携します。"
    },
    {
      "step": "04",
      "title": "配信開始と効果分析",
      "desc": "魅力的なマーケティング配信や重要通知を発信し、詳細なクリックログと成果を分析します。"
    }
  ],
  "useCasesBadge": "活用ユースケース",
  "useCasesTitle": "より豊かな対話型コミュニケーションで顧客を惹きつける。",
  "useCasesSubtitle": "コンバージョン率を最大 3 倍に向上させる高付加価値なモバイル対話体験を提供します。",
  "interactiveCard": {
    "badge": "認証済み RCS メッセージ",
    "message": "Apex Gear からのお荷物が発送されました。配送状況をリアルタイムで追跡するか、受取場所を変更できます。",
    "btnConfirm": "配送状況を確認",
    "btnReschedule": "お届け先を変更"
  },
  "useCases": [
    {
      "title": "搭乗券とデジタルチケット",
      "desc": "搭乗口の最新状況が自動反映されるフルカラー搭乗券をスマホ画面に直接届けます。"
    },
    {
      "title": "EC フラッシュセール & 新作案内",
      "desc": "スワイプ可能なカルーセルカードと即時購入ボタンで注目の新着コレクションを魅力的に紹介。"
    },
    {
      "title": "予約リマインダーとスケジュール管理",
      "desc": "ワンタップで出席確認や日程変更ができるインタラクティブな予定リマインダーを送信。"
    },
    {
      "title": "二要素認証（2FA / OTP）",
      "desc": "公式ブランドのロゴと認証バッジが付いた安全なワンタイムパスワードでなりすましを防止。"
    }
  ],
  "industriesBadge": "業界別ソリューション",
  "industriesTitle": "あらゆる産業分野をサポートする RCS ビジネス メッセージング。",
  "industriesSubtitle": "多様な業界における消費者向けモバイル コミュニケーションの近代化を強力に推進します。",
  "industries": [
    {
      "title": "航空・ホスピタリティ",
      "desc": "フライトのチェックイン案内、デジタル搭乗券、客室アップグレードのご提案。"
    },
    {
      "title": "銀行・フィンテック",
      "desc": "不正利用の即時検知アラート、月次ご利用明細の要約、カードの即時アクティベーション。"
    },
    {
      "title": "小売・E コマース",
      "desc": "新着コレクションのご紹介、再入荷通知、配送追跡情報のリアルタイム更新。"
    },
    {
      "title": "ヘルスケア・医療",
      "desc": "処方箋の調剤完了通知、クリニックの予約確認、オンライン診療のチェックイン案内。"
    },
    {
      "title": "自動車・モビリティ",
      "desc": "定期点検のリマインダー、安全リコール通知、リース契約の更新サポート。"
    }
  ],
  "whyBadge": "選ばれる理由",
  "whyTitle": "世界のトップ企業が iNet RCS を選ぶ理由",
  "whySubtitle": "グローバルエンタープライズに選ばれる、通信キャリア水準の堅牢な基盤。",
  "whyCards": {
    "secure": {
      "title": "認証されたブランドの真正性",
      "description": "厳格ななりすまし防止認証により、フィッシング詐欺から貴社ブランドと顧客を確実に保護します。"
    },
    "cloud": {
      "title": "世界中の通信事業者と直接相互接続",
      "description": "北米、欧州、アジア、中南米の主要携帯キャリアと直接接続された高信頼ルートを保有。"
    },
    "api": {
      "title": "シンプルな単一 API",
      "description": "二重課金の心配なく、RCS と SMS への自動フォールバックを単一のエンドポイントで一元管理。"
    },
    "connectivity": {
      "title": "確実なグローバル到達保証",
      "description": "インテリジェントなフェイルオーバー機能により、機種や通信環境を問わず 100% の到達を実現。"
    },
    "automated": {
      "title": "インタラクティブ自動化エンジン",
      "description": "顧客からの問い合わせから購入・手続き完了までをスムーズに導くチャットボット対話を構築。"
    }
  },
  "apiCard": {
    "title": "RCS ビジネス メッセージング API",
    "desc": "リッチカード、カルーセル、推奨アクションを簡単に配信し、SMS フォールバックを完全自動化。"
  },
  "ctaBadge": "RCS へアップグレード",
  "ctaTitle": "RCS で貴社のブランド コミュニケーションをより魅力的に。",
  "ctaSubtitle": "顧客の信頼を高め、圧倒的なコンバージョンを生み出す先進的なモバイルメッセージを今すぐ始めましょう。",
  "contactUs": "RCS を今すぐ始める",
  "ctaFootnote": "Google Jibe およびグローバルな通信事業者エコシステムと完全互換"
};

const pt: RcsBusinessMessagingTranslation = {
  "heroBadge": "MENSAGENS EMPRESARIAIS RCS",
  "heroTitle": "Transforme o SMS Comum em RCS Conversacional e Interativo",
  "heroDesc": "Eleve a comunicação móvel com selos de remetente verificado, carrosséis de alta resolução, botões de ação rápida e alcance nativo em smartphones Android.",
  "talkToExpert": "Falar com um especialista",
  "exploreCapabilities": "Explorar recursos",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Marca RCS Verificada • Selo Oficial",
    "msg1": "Olá Jordan! O embarque do seu voo SK-402 para Zurique começou no Portão B12. Seu cartão de embarque digital está pronto.",
    "time1": "07:30",
    "actionBtn": "Abrir Cartão de Embarque →",
    "msg2": "Muito obrigado! Posso fazer upgrade para um assento com mais espaço?",
    "time2": "07:31",
    "msg3": "O assento 12A (mais espaço) está disponível por $25. Toque abaixo para confirmar agora mesmo!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Aplicativo Nativo Mensagens Android",
    "secure": "Identidade de Remetente Verificada"
  },
  "overviewBadge": "MENSAGENS MÓVEIS DE PRÓXIMA GERAÇÃO",
  "overviewTitle": "Ofereça experiências ricas e interativas como um app, sem necessidade de download.",
  "overviewDesc1": "O Rich Communication Services (RCS) é o padrão moderno de mensagens comerciais para smartphones. Alcance seus clientes diretamente no app nativo de mensagens com logotipo verificado, cores e visuais de alto impacto.",
  "overviewDesc2": "Elimine as limitações do texto puro. Habilite ações em um toque, compartilhamento de localização, carrosséis multimídia e fallback automático para SMS para garantir que nenhuma mensagem seja perdida.",
  "check1": "Confiança do Remetente Verificado e Logotipo Oficial",
  "check2": "Carrosséis Multimídia e Botões Interativos",
  "check3": "Fallback Automático de Segurança para SMS / MMS",
  "featuresBadge": "PRINCIPAIS RECURSOS",
  "featuresTitle": "Mídia rica. Segurança certificada. Alto engajamento.",
  "featuresSubtitle": "Tudo o que suas equipes de marketing e atendimento precisam para implementar RCS em escala corporativa.",
  "features": [
    {
      "title": "Marca de Remetente Verificado",
      "desc": "Exiba seu logotipo oficial, cores da empresa e o selo de verificação para criar confiança imediata no cliente."
    },
    {
      "title": "Carrosséis de Mídia em Alta Resolução",
      "desc": "Envie cartões interativos de produtos com imagens em alta qualidade, preços e botões de compra direta."
    },
    {
      "title": "Botões de Ação Sugerida em Um Toque",
      "desc": "Permita que clientes abram mapas, façam ligações, agendem eventos no calendário ou acessem sites em um único toque."
    },
    {
      "title": "Sugestões de Resposta Rápida",
      "desc": "Apresente opções de resposta pré-definidas para que os usuários respondam rapidamente sem precisar digitar."
    },
    {
      "title": "Fallback Automático das Operadoras para SMS",
      "desc": "Caso o celular de destino não seja compatível com RCS ou esteja sem conexão de dados, o envio migra para SMS comum."
    },
    {
      "title": "Confirmações de Leitura e Métricas em Tempo Real",
      "desc": "Acompanhe relatórios de entrega, confirmações de leitura e cliques em botões de ação em tempo real."
    }
  ],
  "howItWorksBadge": "COMO FUNCIONA",
  "howItWorksTitle": "Implemente campanhas RCS verificadas em quatro etapas.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Verificação e Registro de Marca",
      "desc": "Cadastre o perfil corporativo, logotipo, identidade visual e documentação legal junto aos registros das operadoras."
    },
    {
      "step": "02",
      "title": "Design de Modelos Interativos",
      "desc": "Crie cartões visuais, botões de ação e árvores de conversação em nosso estúdio gráfico de modelos."
    },
    {
      "step": "03",
      "title": "Conexão de APIs de Mensageria",
      "desc": "Integre nossa API unificada com roteamento inteligente e fallback automático de operadora por SMS."
    },
    {
      "step": "04",
      "title": "Disparo e Análise de Desempenho",
      "desc": "Envie campanhas de marketing ricas ou notificações transacionais com telemetria detalhada de cliques."
    }
  ],
  "useCasesBadge": "CASOS DE USO",
  "useCasesTitle": "Conecte-se com clientes através de conversas móveis dinâmicas.",
  "useCasesSubtitle": "Gere valor real com comunicações interativas que aumentam as taxas de conversão em até 3 vezes.",
  "interactiveCard": {
    "badge": "MENSAGEM RCS VERIFICADA",
    "message": "Sua encomenda da Apex Gear foi despachada. Acompanhe a entrega em tempo real ou altere as instruções de entrega.",
    "btnConfirm": "Rastrear Encomenda",
    "btnReschedule": "Alterar Endereço"
  },
  "useCases": [
    {
      "title": "Cartões de Embarque e Ingressos",
      "desc": "Entregue cartões de embarque coloridos com atualizações de portão em tempo real direto na tela do celular."
    },
    {
      "title": "Vendas Relâmpago e E-Commerce",
      "desc": "Divulgue lançamentos com carrosséis deslizáveis e botões de compra imediata sem fricção."
    },
    {
      "title": "Agendamento e Lembretes de Consultas",
      "desc": "Envie lembretes com opções de confirmação ou reagendamento prático com apenas um clique."
    },
    {
      "title": "Autenticação em Duas Etapas (2FA)",
      "desc": "Envie senhas temporárias (OTP) verificadas, exibindo sua marca e evitando tentativas de phishing."
    }
  ],
  "industriesBadge": "SETORES ATENDIDOS",
  "industriesTitle": "Mensagens empresariais RCS para todos os segmentos de mercado.",
  "industriesSubtitle": "Apoiamos grandes marcas na modernização de seus canais de contato móvel com o consumidor.",
  "industries": [
    {
      "title": "Linhas Aéreas e Hospitalidade",
      "desc": "Lembretes de check-in, cartões digitais de embarque e propostas de upgrade de acomodação."
    },
    {
      "title": "Bancos e FinTech",
      "desc": "Alertas antifraude imediatos, resumos mensais de despesas e ativação instantânea de cartões."
    },
    {
      "title": "Varejo e Comércio Eletrônico",
      "desc": "Apresentação de coleções, avisos de reposição de estoque e notificações de despacho de pedidos."
    },
    {
      "title": "Saúde e Medicina",
      "desc": "Lembretes de prescrições médicas, confirmações de consultas e check-in para telemedicina."
    },
    {
      "title": "Setor Automotivo",
      "desc": "Alertas de revisão veicular, comunicados de recall preventivo e opções de renovação de contratos."
    }
  ],
  "whyBadge": "POR QUE NOSSA PLATAFORMA RCS",
  "whyTitle": "Por Que as Grandes Empresas Escolhem a iNet RCS",
  "whySubtitle": "Infraestrutura de mensageria com padrão de operadora confiada por marcas mundiais.",
  "whyCards": {
    "secure": {
      "title": "Autenticidade e Integridade de Marca",
      "description": "Verificação anti-spoofing garantida que blinda sua empresa contra golpes e falsificação de identidade."
    },
    "cloud": {
      "title": "Interconexões Globais com Operadoras",
      "description": "Conexões diretas com operadoras móveis na América do Norte, Europa, Ásia e América Latina."
    },
    "api": {
      "title": "API Única e Integrada",
      "description": "Um endpoint unificado gerencia RCS e fallback para SMS sem cobranças duplicadas ou complexidade."
    },
    "connectivity": {
      "title": "Entrega Mundial Garantida",
      "description": "Roteamento inteligente que assegura 100% de alcance, independentemente do modelo do aparelho do cliente."
    },
    "automated": {
      "title": "Motor de Automação Interativa",
      "description": "Construa fluxos de diálogo dinâmicos para guiar clientes da dúvida até a conversão final com eficiência."
    }
  },
  "apiCard": {
    "title": "API de Mensageria RCS Empresarial",
    "desc": "Dispare cartões interativos, carrosséis visuais e respostas sugeridas com transição automática para SMS."
  },
  "ctaBadge": "EVOLUA PARA RCS",
  "ctaTitle": "Dê vida à comunicação da sua marca com o poder do RCS.",
  "ctaSubtitle": "Entregue mensagens móveis ricas e envolventes que conquistam a confiança do consumidor e aumentam as vendas.",
  "contactUs": "Começar com RCS",
  "ctaFootnote": "Compatibilidade integral com Google Jibe e o ecossistema mundial de telecomunicações"
};

const ru: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS БИЗНЕС-СООБЩЕНИЯ",
  "heroTitle": "Превратите обычные SMS в интерактивные диалоги RCS",
  "heroDesc": "Выведите мобильные коммуникации на новый уровень: галочки верифицированного отправителя, мультимедийные карусели высокого разрешения, интерактивные кнопки быстрых действий и нативный охват смартфонов Android.",
  "talkToExpert": "Консультация с экспертом",
  "exploreCapabilities": "Изучить возможности",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Верифицированный RCS-бренд • Галочка",
    "msg1": "Здравствуйте, Джордан! Посадка на ваш рейс SK-402 в Цюрих началась у выхода B12. Ваш посадочный талон готов.",
    "time1": "07:30",
    "actionBtn": "Открыть посадочный талон →",
    "msg2": "Большое спасибо! Могу ли я пересесть на место с увеличенным пространством для ног?",
    "time2": "07:31",
    "msg3": "Место 12A доступно за $25. Нажмите ниже для подтверждения!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Штатное приложение Сообщения на Android",
    "secure": "Официальный верифицированный бренд"
  },
  "overviewBadge": "МОБИЛЬНЫЕ СООБЩЕНИЯ НОВОГО ПОКОЛЕНИЯ",
  "overviewTitle": "Интерактивный опыт уровня полноценного приложения без необходимости его установки.",
  "overviewDesc1": "Rich Communication Services (RCS) — современный мировой стандарт корпоративных мобильных сообщений. Общайтесь с клиентами прямо в предустановленном приложении с официальным логотипом и яркими медиа.",
  "overviewDesc2": "Забудьте об ограничениях простого текста. Используйте действия в один клик, обмен геопозицией, интерактивные карусели и автоматический резервный переход на SMS для стопроцентной доставки.",
  "check1": "Доверие к проверенному отправителю и официальный логотип",
  "check2": "Интерактивные карточки-карусели и кнопки быстрых действий",
  "check3": "Автоматический резервный переход на SMS / MMS",
  "featuresBadge": "КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ",
  "featuresTitle": "Богатый мультимедиа. Проверенная безопасность. Высокая вовлеченность.",
  "featuresSubtitle": "Все инструменты, необходимые маркетингу и клиентскому сервису для масштабного запуска RCS.",
  "features": [
    {
      "title": "Официальный брендинг отправителя",
      "desc": "Отображайте фирменный логотип, корпоративные цвета и галочку верификации для мгновенного доверия клиентов."
    },
    {
      "title": "Медиа-карусели высокого разрешения",
      "desc": "Отправляйте интерактивные прокручиваемые карточки товаров с фотографиями, ценами и прямыми кнопками покупки."
    },
    {
      "title": "Кнопки быстрых действий в одно касание",
      "desc": "Позвольте клиентам открывать карты, звонить, сохранять события в календарь или переходить на сайт в одно касание."
    },
    {
      "title": "Рекомендованные быстрые ответы",
      "desc": "Предлагайте удобные кнопки готовых ответов, чтобы пользователи могли взаимодействовать без ввода текста."
    },
    {
      "title": "Автоматический переход на SMS оператора",
      "desc": "Если устройство получателя не поддерживает RCS или нет интернета, сообщение мгновенно отправляется как стандартное SMS."
    },
    {
      "title": "Отчеты о прочтении и метрики в реальном времени",
      "desc": "Отслеживайте доставку, отметки о прочтении и клики по кнопкам действий в реальном времени."
    }
  ],
  "howItWorksBadge": "КАК ЭТО РАБОТАЕТ",
  "howItWorksTitle": "Запуск верифицированных RCS-кампаний в четыре простых шага.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Верификация бренда и регистрация",
      "desc": "Зарегистрируйте профиль компании, логотип, цвета и юридические документы в официальных реестрах операторов."
    },
    {
      "step": "02",
      "title": "Создание интерактивных шаблонов",
      "desc": "Разрабатывайте мультимедийные карточки, кнопки действий и сценарии диалогов в визуальном редакторе."
    },
    {
      "step": "03",
      "title": "Подключение API сообщений",
      "desc": "Интегрируйте единый API платформы с автоматической резервной маршрутизацией через SMS операторов."
    },
    {
      "step": "04",
      "title": "Запуск и сквозная аналитика",
      "desc": "Проводите маркетинговые кампании или отправляйте сервисные оповещения с подробной аналитикой кликов."
    }
  ],
  "useCasesBadge": "ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ",
  "useCasesTitle": "Вовлекайте пользователей смартфонов в интерактивные диалоги.",
  "useCasesSubtitle": "Предоставляйте ценность через мобильные коммуникации, которые повышают конверсию до 3 раз.",
  "interactiveCard": {
    "badge": "ВЕРИФИЦИРОВАННОЕ RCS-СООБЩЕНИЕ",
    "message": "Ваш заказ из Apex Gear отправлен. Отслеживайте перемещение посылки в реальном времени или измените адрес доставки.",
    "btnConfirm": "Отследить заказ",
    "btnReschedule": "Изменить адрес"
  },
  "useCases": [
    {
      "title": "Посадочные талоны и билеты",
      "desc": "Передавайте полноцветные электронные посадочные талоны с актуальным номером выхода прямо на экран."
    },
    {
      "title": "Распродажи и промоакции E-Commerce",
      "desc": "Демонстрируйте каталоги новинок с помощью интерактивных каруселей и кнопок мгновенной покупки."
    },
    {
      "title": "Напоминания о записях и встречах",
      "desc": "Отправляйте напоминания в календарь с возможностью подтвердить или перенести визит в одно касание."
    },
    {
      "title": "Двухфакторная аутентификация (2FA)",
      "desc": "Доставляйте защищенные одноразовые пароли с фирменным брендингом и гарантией защиты от фишинга."
    }
  ],
  "industriesBadge": "ОТРАСЛИ",
  "industriesTitle": "RCS бизнес-сообщения для ключевых секторов экономики.",
  "industriesSubtitle": "Помогаем организациям модернизировать клиентские коммуникации на мобильных устройствах.",
  "industries": [
    {
      "title": "Авиаперевозки и отели",
      "desc": "Напоминания о регистрации на рейс, мобильные посадочные талоны и спецпредложения по улучшению номера."
    },
    {
      "title": "Банки и FinTech",
      "desc": "Оповещения о подозрительных транзакциях, ежемесячные отчеты о расходах и мгновенная активация карт."
    },
    {
      "title": "Ритейл и онлайн-торговля",
      "desc": "Анонсы новых коллекций, уведомления о наличии товаров на складе и обновления статуса доставки."
    },
    {
      "title": "Здравоохранение и медицина",
      "desc": "Напоминания о рецептах, подтверждение записи на прием к врачу и регистрация на телемедицинские консультации."
    },
    {
      "title": "Автомобильный бизнес",
      "desc": "Уведомления о плановом ТО, сервисные отзывы автомобилей и условия продления лизинга."
    }
  ],
  "whyBadge": "ПОЧЕМУ НАША ПЛАТФОРМА RCS",
  "whyTitle": "Почему ведущие корпорации выбирают iNet RCS",
  "whySubtitle": "Инфраструктура сообщений операторского уровня, которой доверяют мировые компании.",
  "whyCards": {
    "secure": {
      "title": "Подтвержденная подлинность бренда",
      "description": "Надежная защита от спуфинга гарантирует сохранность вашего бренда от фишинга и подделок."
    },
    "cloud": {
      "title": "Прямые межоператорские каналы по всему миру",
      "description": "Прямые подключения к сотовым операторам Северной Америки, Европы, Азии и Латинской Америки."
    },
    "api": {
      "title": "Единый унифицированный API",
      "description": "Один простой интерфейс для RCS с автоматическим переходом на SMS без скрытых расходов."
    },
    "connectivity": {
      "title": "Гарантированная глобальная доставка",
      "description": "Интеллектуальные резервные алгоритмы обеспечивают 100% охват независимо от модели телефона пользователя."
    },
    "automated": {
      "title": "Интерактивный движок автоматизации",
      "description": "Создавайте сценарии чат-ботов, которые плавно сопровождают клиента от вопроса до завершенного действия."
    }
  },
  "apiCard": {
    "title": "API бизнес-сообщений RCS",
    "desc": "Отправляйте интерактивные карточки, карусели и готовые ответы с автоматической поддержкой резерва по SMS."
  },
  "ctaBadge": "ПЕРЕХОДИТЕ НА RCS",
  "ctaTitle": "Вдохните жизнь в коммуникации вашего бренда с помощью RCS.",
  "ctaSubtitle": "Доставляйте яркие и интерактивные сообщения, которые вызывают доверие и приносят больше продаж.",
  "contactUs": "Начать работу с RCS",
  "ctaFootnote": "Полная совместимость с Google Jibe и глобальной инфраструктурой операторов связи"
};

const it: RcsBusinessMessagingTranslation = {
  "heroBadge": "MESSAGGISTICA AZIENDALE RCS",
  "heroTitle": "Trasforma i Tradizionali SMS in Coinvolgenti Conversazioni RCS",
  "heroDesc": "Migliora la messaggistica mobile con badge di mittente verificato, schede a carosello ad alta risoluzione, pulsanti di azione rapida e copertura nativa su smartphone Android.",
  "talkToExpert": "Parla con un esperto",
  "exploreCapabilities": "Esplora le funzionalità",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Brand RCS Verificato • Spunta Ufficiale",
    "msg1": "Ciao Jordan! L'imbarco per il tuo volo SK-402 per Zurigo è iniziato al Gate B12. La tua carta d'imbarco è pronta.",
    "time1": "07:30",
    "actionBtn": "Apri Carta d'Imbarco →",
    "msg2": "Grazie! Posso fare un upgrade a un posto con più spazio per le gambe?",
    "time2": "07:31",
    "msg3": "Il posto 12A è disponibile a 25 $. Tocca qui sotto per confermare istantaneamente!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "App Messaggi Nativa Android",
    "secure": "Identità Mittente Ufficiale e Verificata"
  },
  "overviewBadge": "MESSAGGISTICA MOBILE DI PROSSIMA GENERAZIONE",
  "overviewTitle": "Offri esperienze interattive simili a un'applicazione senza richiedere alcun download.",
  "overviewDesc1": "I Rich Communication Services (RCS) rappresentano il moderno standard globale per la messaggistica aziendale. Raggiungi i clienti direttamente nell'app Messaggi predefinita con il tuo logo verificato e contenuti visivi di grande impatto.",
  "overviewDesc2": "Supera i vincoli del testo semplice. Abilita azioni con un tocco, condivisione della posizione, caroselli multimediali e fallback automatico su SMS per non escludere mai nessun cliente.",
  "check1": "Affidabilità del Mittente Verificato e Logo Ufficiale",
  "check2": "Caroselli Multimediali e Pulsanti di Risposta Rapida",
  "check3": "Fallback Automatico di Protezione su SMS / MMS",
  "featuresBadge": "FUNZIONALITÀ PRINCIPALI",
  "featuresTitle": "Media ricchi. Sicurezza certificata. Coinvolgimento senza precedenti.",
  "featuresSubtitle": "Tutto ciò di cui i tuoi team di marketing e assistenza clienti hanno bisogno per distribuire RCS su larga scala.",
  "features": [
    {
      "title": "Branding del Mittente Verificato",
      "desc": "Mostra il tuo logo aziendale, i colori ufficiali e il badge di spunta verificata per ispirare immediata fiducia."
    },
    {
      "title": "Caroselli Multimediali in Alta Risoluzione",
      "desc": "Invia schede prodotto scorrevoli con immagini ad alta definizione, prezzi e link di acquisto diretto."
    },
    {
      "title": "Pulsanti di Azione Consigliata con Un Tocco",
      "desc": "Permetti ai clienti di aprire mappe, avviare chiamate, salvare appuntamenti o visitare pagine web con un solo tocco."
    },
    {
      "title": "Suggerimenti di Risposta Rapida",
      "desc": "Proponi pulsanti di risposta contestuali per consentire agli utenti di rispondere senza dover digitare."
    },
    {
      "title": "Fallback Automatico su SMS Tradizionale",
      "desc": "Se il dispositivo del destinatario non supporta RCS o è offline, il messaggio viene recapitato automaticamente via SMS standard."
    },
    {
      "title": "Conferme di Lettura e Metriche in Tempo Reale",
      "desc": "Monitora i tassi di consegna effettiva, le conferme di lettura e i click sui pulsanti di azione in tempo reale."
    }
  ],
  "howItWorksBadge": "COME FUNZIONA",
  "howItWorksTitle": "Lancia campagne RCS verificate in quattro semplici passaggi.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Verifica e Registrazione del Brand",
      "desc": "Registra il profilo della tua azienda, logo, colori e documenti ufficiali presso i registri degli operatori."
    },
    {
      "step": "02",
      "title": "Creazione di Template Interattivi",
      "desc": "Crea schede multimediali, pulsanti di azione e alberi di conversazione nel nostro visual template studio."
    },
    {
      "step": "03",
      "title": "Integrazione delle API di Messaggistica",
      "desc": "Collega la nostra API unificata con routing intelligente e fallback automatico dell'operatore."
    },
    {
      "step": "04",
      "title": "Lancio e Analisi delle Performance",
      "desc": "Invia campagne promozionali ricche o notifiche transazionali con telemetria completa delle interazioni."
    }
  ],
  "useCasesBadge": "CASI D'USO",
  "useCasesTitle": "Coinvolgi gli utenti mobili attraverso esperienze conversazionali arricchite.",
  "useCasesSubtitle": "Offri valore tramite comunicazioni mobili interattive che aumentano i tassi di conversione fino a 3 volte.",
  "interactiveCard": {
    "badge": "MESSAGGIO RCS VERIFICATO",
    "message": "Il tuo pacco da Apex Gear è stato spedito. Traccia la consegna in tempo reale o modifica l'indirizzo di recapito.",
    "btnConfirm": "Traccia la Spedizione",
    "btnReschedule": "Modifica Indirizzo"
  },
  "useCases": [
    {
      "title": "Carte d'Imbarco e Biglietteria",
      "desc": "Consegna carte d'imbarco a colori con aggiornamenti del gate in tempo reale direttamente sullo schermo."
    },
    {
      "title": "Vendite Promozionali E-Commerce",
      "desc": "Presenta nuove collezioni con caroselli scorrevoli e pulsanti per l'acquisto immediato senza frizioni."
    },
    {
      "title": "Pianificazione e Promemoria Appuntamenti",
      "desc": "Invia promemoria interattivi con opzioni di conferma o riprogrammazione con un solo tocco."
    },
    {
      "title": "Autenticazione a Due Fattori (2FA)",
      "desc": "Invia codici OTP sicuri con logo ufficiale e protezione garantita contro attacchi di spoofing e phishing."
    }
  ],
  "industriesBadge": "SETTORI SUPPORTATI",
  "industriesTitle": "Messaggistica aziendale RCS per ogni comparto industriale.",
  "industriesSubtitle": "Aiutiamo le organizzazioni a modernizzare la comunicazione con i consumatori su smartphone.",
  "industries": [
    {
      "title": "Compagnie Aeree e Hospitality",
      "desc": "Promemoria di check-in volo, carte d'imbarco digitali e proposte personalizzate per upgrade di camera."
    },
    {
      "title": "Banche e FinTech",
      "desc": "Avvisi antifrode immediati, riepiloghi mensili delle spese e attivazione istantanea della carta."
    },
    {
      "title": "Vendita al Dettaglio ed E-Commerce",
      "desc": "Presentazione dei nuovi prodotti, notifiche di disponibilità a magazzino e aggiornamenti di spedizione."
    },
    {
      "title": "Sanità e Benessere",
      "desc": "Promemoria prescrizioni, conferme per visite specialistiche e check-in per telemedicina."
    },
    {
      "title": "Automotive",
      "desc": "Avvisi di manutenzione ordinaria, notifiche di richiamo di sicurezza e opzioni di rinnovo noleggio."
    }
  ],
  "whyBadge": "PERCHÉ LA NOSTRA PIATTAFORMA RCS",
  "whyTitle": "Perché le Grandi Imprese Scelgono iNet RCS",
  "whySubtitle": "Infrastruttura di messaggistica di livello operatore scelta dalle aziende leader mondiali.",
  "whyCards": {
    "secure": {
      "title": "Integrità del Brand Verificata",
      "description": "La verifica anti-spoofing garantita protegge il tuo brand da furti d'identità e tentativi di frode."
    },
    "cloud": {
      "title": "Interconnessioni Dirette con Operatori Globali",
      "description": "Connessioni dirette con gli operatori di rete mobile in Nord America, Europa, Asia e America Latina."
    },
    "api": {
      "title": "API Unica e Semplificata",
      "description": "Un unico endpoint gestisce RCS con fallback automatico su SMS senza doppi addebiti."
    },
    "connectivity": {
      "title": "Consegna Globale Garantita",
      "description": "Motori di fallback intelligenti assicurano il 100% di raggiungibilità indipendentemente dal dispositivo."
    },
    "automated": {
      "title": "Motore di Automazione Interattivo",
      "description": "Crea flussi chatbot automatizzati che guidano i clienti dalla richiesta iniziale all'acquisto finale."
    }
  },
  "apiCard": {
    "title": "API di Messaggistica Aziendale RCS",
    "desc": "Invia schede interattive, modelli a carosello e risposte rapide con gestione automatica del fallback SMS."
  },
  "ctaBadge": "PASSA A RCS",
  "ctaTitle": "Dai nuova vita alla comunicazione del tuo brand con RCS.",
  "ctaSubtitle": "Offri messaggi mobili ricchi e stimolanti che conquistano la fiducia dei clienti e incrementano le vendite.",
  "contactUs": "Inizia con RCS",
  "ctaFootnote": "Piena compatibilità con Google Jibe e l'ecosistema globale degli operatori di telecomunicazioni"
};

const ko: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS 비즈니스 메시징",
  "heroTitle": "기존 SMS를 풍부한 대화형 RCS로 전환하십시오",
  "heroDesc": "인증된 발신자 체크마크, 고해상도 캐러셀 카드, 대화형 퀵 액션 버튼, 안드로이드 스마트폰 기본 지원으로 모바일 메시징의 수준을 한 차원 높이세요.",
  "talkToExpert": "전문가와 상담하기",
  "exploreCapabilities": "주요 기능 살펴보기",
  "chatScreen": {
    "contactName": "스카이라인 익스프레스 항공",
    "status": "공식 인증 RCS 브랜드 • 체크마크",
    "msg1": "안녕하세요 조던님! 취리히행 SK-402 항공편의 탑승이 게이트 B12에서 시작되었습니다. 모바일 탑승권이 준비되었습니다.",
    "time1": "07:30",
    "actionBtn": "탑승권 열기 →",
    "msg2": "감사합니다! 넓은 레그룸 좌석으로 업그레이드할 수 있나요?",
    "time2": "07:31",
    "msg3": "좌석 12A(넓은 레그룸)를 $25에 이용하실 수 있습니다. 아래 버튼을 눌러 확정하세요!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "안드로이드 기본 메시지 앱 지원",
    "secure": "공식 발신자 브랜드 인증"
  },
  "overviewBadge": "차세대 모바일 메시징",
  "overviewTitle": "별도 앱 설치 없이도 앱 수준의 풍부한 인터랙티브 경험을 제공합니다.",
  "overviewDesc1": "RCS(Rich Communication Services)는 모바일 디바이스 비즈니스 메시징의 글로벌 표준입니다. 공식 인증 로고와 생생한 미디어로 기본 메시지 앱에서 고객과 직접 소통하세요.",
  "overviewDesc2": "단순 텍스트의 한계를 뛰어넘으세요. 원터치 액션, 위치 공유, 슬라이드형 캐러셀 카드, 자동 SMS 폴백 지원으로 단 한 명의 고객도 놓치지 않습니다.",
  "check1": "공식 인증 발신자의 신뢰성과 브랜드 로고",
  "check2": "대화형 캐러셀 카드 및 빠른 액션 버튼",
  "check3": "자동 SMS / MMS 폴백 백업",
  "featuresBadge": "핵심 기능",
  "featuresTitle": "풍부한 멀티미디어. 공식 보안 인증. 압도적인 고객 참여도.",
  "featuresSubtitle": "마케팅 및 고객 경험 팀이 대규모로 RCS를 도입하고 확장하는 데 필요한 모든 것을 지원합니다.",
  "features": [
    {
      "title": "공식 발신자 브랜드 인증",
      "desc": "공식 로고, 브랜드 컬러, 인증 체크마크를 표시하여 고객에게 즉각적인 신뢰를 심어줍니다."
    },
    {
      "title": "고해상도 미디어 캐러셀",
      "desc": "고화질 이미지, 가격 정보, 즉시 구매 링크가 포함된 슬라이드형 상품 카드를 발송하세요."
    },
    {
      "title": "원터치 추천 액션 버튼",
      "desc": "지도 열기, 전화 걸기, 캘린더 일정 저장, 웹사이트 방문을 단 한 번의 탭으로 실행하도록 지원합니다."
    },
    {
      "title": "추천 빠른 답장(Quick-Reply)",
      "desc": "텍스트를 입력할 필요 없이 간편하게 응답할 수 있는 대화형 답장 칩을 제공합니다."
    },
    {
      "title": "통신사 표준 SMS 자동 폴백",
      "desc": "수신 기기가 RCS를 지원하지 않거나 데이터가 꺼져 있는 경우 표준 SMS로 자동 전환되어 안전하게 전달됩니다."
    },
    {
      "title": "실시간 읽음 확인 및 분석 지표",
      "desc": "메시지 발송 성공률, 실시간 수신 및 읽음 확인, 버튼 클릭률을 한눈에 추적할 수 있습니다."
    }
  ],
  "howItWorksBadge": "작동 방식",
  "howItWorksTitle": "단 4단계로 공식 인증 RCS 캠페인을 런칭하세요.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "브랜드 인증 및 등록",
      "desc": "통신사 공식 레지스트리에 브랜드 프로필, 로고, 컬러 및 법적 서류를 정식 등록합니다."
    },
    {
      "step": "02",
      "title": "인터랙티브 템플릿 제작",
      "desc": "비주얼 템플릿 스튜디오에서 미디어 카드, 액션 버튼, 대화형 시나리오 트리를 설계합니다."
    },
    {
      "step": "03",
      "title": "메시징 API 연동",
      "desc": "통신사 자동 폴백 라우팅이 탑재된 통합 단일 API를 귀사 시스템에 손쉽게 연동합니다."
    },
    {
      "step": "04",
      "title": "캠페인 발송 및 성과 분석",
      "desc": "풍부한 마케팅 메시지 또는 트랜잭션 알림을 대량 발송하고 상세한 클릭 로그를 분석합니다."
    }
  ],
  "useCasesBadge": "주요 활용 사례",
  "useCasesTitle": "풍부한 대화형 인터페이스로 모바일 사용자를 사로잡으세요.",
  "useCasesSubtitle": "전환율을 최대 3배까지 향상시키는 고효율 모바일 대화 경험을 통해 비즈니스 가치를 높이세요.",
  "interactiveCard": {
    "badge": "공식 인증 RCS 메시지",
    "message": "Apex Gear에서 주문하신 상품이 발송되었습니다. 배송 상태를 실시간으로 추적하거나 배송지 주소를 변경하세요.",
    "btnConfirm": "배송 현황 추적",
    "btnReschedule": "배송지 변경"
  },
  "useCases": [
    {
      "title": "탑승권 및 모바일 티켓",
      "desc": "탑승구 변경 사항이 실시간으로 반영되는 풀컬러 모바일 탑승권을 화면에 직접 전송합니다."
    },
    {
      "title": "이커머스 타임 세일 & 신상품 출시",
      "desc": "슬라이드형 캐러셀 카드와 즉시 구매 버튼으로 신규 컬렉션을 효과적으로 노출하세요."
    },
    {
      "title": "방문 예약 및 일정 리마인더",
      "desc": "원터치로 참석 확인이나 일정 변경이 가능한 인터랙티브 캘린더 알림을 발송합니다."
    },
    {
      "title": "이중 인증 (2FA OTP)",
      "desc": "공식 브랜드 워터마크가 포함된 보안 일회용 비밀번호로 피싱과 스미싱 위험을 원천 차단합니다."
    }
  ],
  "industriesBadge": "적용 산업군",
  "industriesTitle": "다양한 산업을 선도하는 RCS 비즈니스 메시징.",
  "industriesSubtitle": "세계적인 기업들이 스마트폰 환경에서 고객 소통 방식을 현대화하도록 지원합니다.",
  "industries": [
    {
      "title": "항공 및 호텔/여행",
      "desc": "체크인 안내, 디지털 탑승권 발급 및 객실 업그레이드 프로모션."
    },
    {
      "title": "금융 및 핀테크",
      "desc": "이상 거래 탐지 알림, 월별 지출 리포트 및 빠른 카드 활성화 지원."
    },
    {
      "title": "유통 및 이커머스",
      "desc": "시즌 신상품 쇼케이스, 재입고 알림 및 실시간 택배 배송 현황 업데이트."
    },
    {
      "title": "의료 및 헬스케어",
      "desc": "처방전 수령 안내, 병원 예약 확인 및 비대면 진료 접수 안내."
    },
    {
      "title": "자동차 및 모빌리티",
      "desc": "정기 점검 리마인더, 긴급 리콜 공지 및 리스 계약 갱신 안내."
    }
  ],
  "whyBadge": "왜 iNet RCS인가",
  "whyTitle": "글로벌 선도 기업들이 iNet RCS를 신뢰하는 이유",
  "whySubtitle": "글로벌 엔터프라이즈가 검증한 통신사 등급의 안정적인 메시징 인프라.",
  "whyCards": {
    "secure": {
      "title": "인증된 브랜드 무결성",
      "description": "사칭 방지 공식 인증 시스템이 피싱 및 위조 시도로부터 브랜드 신뢰도를 완벽히 지켜냅니다."
    },
    "cloud": {
      "title": "글로벌 통신사 직접 연동망",
      "description": "북미, 유럽, 아시아, 중남미 주요 모바일 네트워크 통신사와 직접 연결된 고품질 라우팅."
    },
    "api": {
      "title": "간결한 단일 통합 API",
      "description": "중복 과금 걱정 없이 RCS 발송과 SMS 자동 폴백을 한 번에 처리하는 단일 API 엔드포인트."
    },
    "connectivity": {
      "title": "전 세계 100% 도달 보장",
      "description": "지능형 폴백 엔진이 단말 기종이나 네트워크 환경에 구애받지 않고 완벽한 수신을 보장합니다."
    },
    "automated": {
      "title": "인터랙티브 자동화 엔진",
      "description": "고객의 초기 질문부터 최종 행동 및 결제까지 매끄럽게 이끄는 챗봇 워크플로우 구축."
    }
  },
  "apiCard": {
    "title": "RCS 비즈니스 메시징 API",
    "desc": "리치 카드, 캐러셀 템플릿, 빠른 답장 액션을 자동 SMS 폴백 처리와 함께 손쉽게 발송하세요."
  },
  "ctaBadge": "RCS로 업그레이드",
  "ctaTitle": "RCS를 통해 브랜드 커뮤니케이션에 활력을 불어넣으세요.",
  "ctaSubtitle": "고객의 신뢰를 구축하고 전환율을 극대화하는 매력적인 모바일 메시징을 지금 바로 시작하세요.",
  "contactUs": "RCS 도입 시작하기",
  "ctaFootnote": "Google Jibe 및 글로벌 이동통신사 에코시스템 완벽 호환"
};

const nl: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS ZAKELIJKE BERICHTEN",
  "heroTitle": "Transformeer Reguliere SMS naar Rijke Conversationele RCS",
  "heroDesc": "Til mobiele communicatie naar een hoger niveau met geverifieerde afzender-vinkjes, carrouselkaarten in hoge resolutie, interactieve actieknoppen en native Android-bereik.",
  "talkToExpert": "Praat met een expert",
  "exploreCapabilities": "Ontdek mogelijkheden",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Geverifieerd RCS-merk • Officieel vinkje",
    "msg1": "Hallo Jordan! Het instappen voor vlucht SK-402 naar Zürich is begonnen bij Gate B12. Je digitale instapkaart is klaar.",
    "time1": "07:30",
    "actionBtn": "Instapkaart openen →",
    "msg2": "Bedankt! Kan ik upgraden naar een stoel met extra beenruimte?",
    "time2": "07:31",
    "msg3": "Stoel 12A is beschikbaar voor $25. Tik hieronder om direct te bevestigen!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Standaard Android Berichten-app",
    "secure": "Geverifieerde afzenderidentiteit"
  },
  "overviewBadge": "VOLGENDE GENERATIE MOBIELE BERICHTEN",
  "overviewTitle": "Bied rijke, app-achtige interactieve ervaringen zonder dat een app nodig is.",
  "overviewDesc1": "Rich Communication Services (RCS) is de moderne wereldstandaard voor zakelijke mobiele berichten. Bereik klanten direct in de standaard Berichten-app met geverifieerd merklogo en rijke media.",
  "overviewDesc2": "Vergeet de beperkingen van gewone tekst. Activeer acties met één tik, locatie delen, rijke carrouselkaarten en automatische terugval naar SMS zodat geen enkele klant wordt gemist.",
  "check1": "Vertrouwen van Geverifieerde Afzender & Logo",
  "check2": "Interactieve Carrouselkaarten & Actieknoppen",
  "check3": "Automatische Terugval naar SMS / MMS",
  "featuresBadge": "KERNFUNCTIONALITEITEN",
  "featuresTitle": "Rijke media. Geverifieerde beveiliging. Uitzonderlijke betrokkenheid.",
  "featuresSubtitle": "Alles wat uw marketing- en klantenserviceteams nodig hebben om RCS op schaal te implementeren.",
  "features": [
    {
      "title": "Geverifieerde Afzenderbranding",
      "desc": "Toon uw officiële bedrijfslogo, merkkleuren en verificatievinkje om direct vertrouwen op te bouwen."
    },
    {
      "title": "Hoge-resolutie Mediacarrousels",
      "desc": "Verstuur veegbare productkaarten met afbeeldingen, prijzen en directe aankoopknoppen."
    },
    {
      "title": "Actieknoppen met Eén Tik",
      "desc": "Laat klanten met één tik kaarten openen, nummers bellen, afspraken opslaan of websites bezoeken."
    },
    {
      "title": "Voorgestelde Snelle Reacties",
      "desc": "Bied vooraf ingestelde antwoordknoppen zodat ontvangers zonder typen direct kunnen reageren."
    },
    {
      "title": "Automatische Provider-SMS-terugval",
      "desc": "Als het toestel van de ontvanger geen RCS ondersteunt of offline is, schakelt het bericht automatisch over naar SMS."
    },
    {
      "title": "Realtime Leesbevestigingen & Statistieken",
      "desc": "Volg afleverpercentages, leesbevestigingen en doorklikken op actieknoppen in realtime."
    }
  ],
  "howItWorksBadge": "HOE HET WERKT",
  "howItWorksTitle": "Lanceer geverifieerde RCS-campagnes in vier eenvoudige stappen.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Merkverificatie & Configuratie",
      "desc": "Registreer uw merkprofiel, logo, kleuren en officiële documentatie bij de providerregisters."
    },
    {
      "step": "02",
      "title": "Interactieve Sjablonen Ontwerpen",
      "desc": "Creëer mediakaarten, actieknoppen en gespreksbomen in onze visuele sjabloonstudio."
    },
    {
      "step": "03",
      "title": "Koppel Berichten-API's",
      "desc": "Integreer onze uniforme API met geautomatiseerde terugvalroutering via telecomproviders."
    },
    {
      "step": "04",
      "title": "Verzenden & Analyseren",
      "desc": "Verstuur rijke marketingcampagnes of transactionele alerts met volledige kliktelemetrie."
    }
  ],
  "useCasesBadge": "TOEPASSINGEN",
  "useCasesTitle": "Betrek mobiele gebruikers met verrijkende gesprekken.",
  "useCasesSubtitle": "Bied meerwaarde met interactieve mobiele communicatie die conversieratio's tot wel 3 keer verhoogt.",
  "interactiveCard": {
    "badge": "GEVERIFIEERD RCS-BERICHT",
    "message": "Je pakket van Apex Gear is verzonden. Volg de bezorging realtime of pas de bezorginstructies aan.",
    "btnConfirm": "Pakket Volgen",
    "btnReschedule": "Adres Wijzigen"
  },
  "useCases": [
    {
      "title": "Instapkaarten & Digitale Tickets",
      "desc": "Lever full-color instapkaarten met realtime gate-updates direct af op het telefoonscherm."
    },
    {
      "title": "E-Commerce Flash Sales",
      "desc": "Presenteer nieuwe collecties met swipebare carrousels en directe aankoopknoppen."
    },
    {
      "title": "Afspraakherinneringen & Planning",
      "desc": "Stuur interactieve kalenderherinneringen waarmee ontvangers met één tik kunnen bevestigen of verzetten."
    },
    {
      "title": "Tweeledige Verificatie (2FA)",
      "desc": "Lever beveiligde eenmalige wachtwoorden met officieel merkwatermerk tegen phishingfraude."
    }
  ],
  "industriesBadge": "SECTOREN DIE WIJ BEDIENEN",
  "industriesTitle": "RCS zakelijke berichten voor diverse marktsectoren.",
  "industriesSubtitle": "Wij ondersteunen toonaangevende organisaties bij het moderniseren van klantcontact op smartphones.",
  "industries": [
    {
      "title": "Luchtvaart & Gastvrijheid",
      "desc": "Incheckherinneringen, digitale instapkaarten en voorstellen voor kamerupgrades."
    },
    {
      "title": "Banken & FinTech",
      "desc": "Fraudewaarschuwingen, maandelijkse uitgavenoverzichten en snelle kaartactivatie."
    },
    {
      "title": "Detailhandel & E-Commerce",
      "desc": "Collectie-introducties, voorraadmeldingen en updates over pakketverzending."
    },
    {
      "title": "Gezondheidszorg",
      "desc": "Herinneringen voor medicatie, bevestigingen voor kliniekafspraken en online check-in."
    },
    {
      "title": "Automotive",
      "desc": "Onderhoudsmeldingen, veiligheidsterugroepacties en opties voor leaseverlenging."
    }
  ],
  "whyBadge": "WAAROM ONS RCS-PLATFORM",
  "whyTitle": "Waarom Toonaangevende Bedrijven Kiezen voor iNet RCS",
  "whySubtitle": "Berichteninfrastructuur van telecomkwaliteit waarop wereldwijde ondernemingen vertrouwen.",
  "whyCards": {
    "secure": {
      "title": "Geverifieerde Merkintegriteit",
      "description": "Gegarandeerde anti-spoofing verificatie beschermt uw merk tegen phishing en identiteitsdiefstal."
    },
    "cloud": {
      "title": "Wereldwijde Directe Providerkoppelingen",
      "description": "Directe verbindingen met mobiele netwerkoperators in Noord-Amerika, Europa, Azië en Latijns-Amerika."
    },
    "api": {
      "title": "Eén Eenvoudige Uniforme API",
      "description": "Eén enkel API-eindpunt beheert RCS met automatische terugval naar SMS zonder dubbele kosten."
    },
    "connectivity": {
      "title": "Gegarandeerde Wereldwijde Aflevering",
      "description": "Slimme fallback-engines garanderen 100% bereik, ongeacht het type toestel van de ontvanger."
    },
    "automated": {
      "title": "Interactieve Automatiseringsmotor",
      "description": "Bouw geautomatiseerde chatbotdialogen die klanten soepel van vraag naar aankoop begeleiden."
    }
  },
  "apiCard": {
    "title": "RCS Zakelijke Berichten API",
    "desc": "Verstuur rijke kaarten, carrouselsjablonen en voorgestelde acties met automatische SMS-terugval."
  },
  "ctaBadge": "UPGRADE NAAR RCS",
  "ctaTitle": "Breng uw merkcommunicatie tot leven met RCS.",
  "ctaSubtitle": "Verstuur rijkere, aantrekkelijkere mobiele berichten die het vertrouwen van klanten vergroten en conversies stimuleren.",
  "contactUs": "Start met RCS",
  "ctaFootnote": "Volledige compatibiliteit met Google Jibe en het wereldwijde ecosysteem van telecomproviders"
};

const tr: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS KURUMSAL MESAJLAŞMA",
  "heroTitle": "Standart SMS'i Zengin ve Etkileşimli RCS Diyaloglarına Dönüştürün",
  "heroDesc": "Doğrulanmış gönderici rozetleri, yüksek çözünürlüklü kaydırmalı kartlar, etkileşimli hızlı işlem butonları ve yerel Android akıllı telefon erişimi ile mobil mesajlaşmanızı zirveye taşıyın.",
  "talkToExpert": "Bir uzmanla görüşün",
  "exploreCapabilities": "Yetenekleri keşfedin",
  "chatScreen": {
    "contactName": "Skyline Express Havayolları",
    "status": "Doğrulanmış RCS Markası • Onay Rozeti",
    "msg1": "Merhaba Jordan! Zürih'e giden SK-402 sefer sayılı uçuşunuz için B12 kapısında biniş başladı. Dijital biniş kartınız hazır.",
    "time1": "07:30",
    "actionBtn": "Biniş Kartını Aç →",
    "msg2": "Teşekkürler! Ekstra bacak mesafeli koltuğa yükseltme yapabilir miyim?",
    "time2": "07:31",
    "msg3": "12A numaralı koltuk (ekstra bacak mesafesi) 25 $ karşılığında müsait. Onaylamak için aşağıya dokunun!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Yerel Android Mesajlar Uygulaması",
    "secure": "Doğrulanmış Gönderici Marka Kimliği"
  },
  "overviewBadge": "YENİ NESİL MOBİL MESAJLAŞMA",
  "overviewTitle": "Uygulama indirmeye gerek kalmadan, uygulama kalitesinde zengin ve etkileşimli deneyimler sunun.",
  "overviewDesc1": "Zengin İletişim Hizmetleri (RCS), mobil cihazlarda kurumsal mesajlaşmanın modern dünya standardıdır. Resmi marka logonuz ve etkileyici multimedya içeriklerinizle müşterilerinize doğrudan yerel mesajlaşma uygulamasında ulaşın.",
  "overviewDesc2": "Düz metin kısıtlamalarını aşın. Tek dokunuşla işlemler, konum paylaşımı, kaydırmalı zengin kartlar ve hiçbir müşterinin geride kalmamasını sağlayan otomatik SMS geri dönüşü sunun.",
  "check1": "Doğrulanmış Gönderici Güveni ve Marka Logosu",
  "check2": "Etkileşimli Kaydırmalı Kartlar ve Hızlı Butonlar",
  "check3": "Otomatik Güvenli SMS / MMS Geri Dönüşü",
  "featuresBadge": "TEMEL YETENEKLER",
  "featuresTitle": "Zengin medya. Doğrulanmış güvenlik. Üstün müşteri etkileşimi.",
  "featuresSubtitle": "Pazarlama ve müşteri deneyimi ekiplerinizin RCS'i büyük ölçekte dağıtmak için ihtiyaç duyduğu her şey.",
  "features": [
    {
      "title": "Doğrulanmış Gönderici Markalaması",
      "desc": "Anında müşteri güveni oluşturmak için resmi şirket logonuzu, kurumsal renklerinizi ve onay rozetinizi sergileyin."
    },
    {
      "title": "Yüksek Çözünürlüklü Medya Karuselleri",
      "desc": "Görseller, fiyatlar ve doğrudan satın alma bağlantıları içeren kaydırılabilir interaktif ürün kartları gönderin."
    },
    {
      "title": "Tek Dokunuşla Önerilen İşlem Butonları",
      "desc": "Müşterilerin harita açmasını, numara aramasını, takvime etkinlik kaydetmesini veya web sitenizi ziyaret etmesini tek tıkla sağlayın."
    },
    {
      "title": "Önerilen Hızlı Yanıtlar",
      "desc": "Kullanıcıların tek bir kelime bile yazmadan zahmetsizce cevap vermesini sağlayan hazır yanıt çipleri sunun."
    },
    {
      "title": "Operatör Seviyesinde Otomatik SMS Geri Dönüşü",
      "desc": "Alıcı cihaz RCS desteklemiyorsa veya veri bağlantısı yoksa, mesajlar otomatik olarak standart SMS üzerinden teslim edilir."
    },
    {
      "title": "Gerçek Zamanlı Okundu Bilgisi ve Metrikler",
      "desc": "Doğrulanmış teslimat oranlarını, okundu bildirimlerini ve buton tıklama verilerini anlık olarak takip edin."
    }
  ],
  "howItWorksBadge": "NASIL ÇALIŞIR",
  "howItWorksTitle": "Doğrulanmış RCS kampanyalarını dört kolay adımda devreye alın.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Marka Doğrulaması ve Kayıt",
      "desc": "Marka profilinizi, logonuzu, kurumsal renklerinizi ve yasal belgelerinizi operatör kayıt sistemlerine kaydedin."
    },
    {
      "step": "02",
      "title": "Etkileşimli Şablonlar Tasarlayın",
      "desc": "Görsel şablon stüdyomuzda zengin medya kartları, işlem butonları ve diyalog ağaçları oluşturun."
    },
    {
      "step": "03",
      "title": "Mesajlaşma API'lerini Bağlayın",
      "desc": "Birleşik mesajlaşma API'mizi otomatik operatör geri dönüş yönlendirmesiyle sistemlerinize entegre edin."
    },
    {
      "step": "04",
      "title": "Gönderin ve Analiz Edin",
      "desc": "Kapsamlı tıklama telemetrisiyle zengin pazarlama kampanyaları yürütün veya işlemsel bildirimler tetikleyin."
    }
  ],
  "useCasesBadge": "KULLANIM ALANLARI",
  "useCasesTitle": "Mobil kullanıcıları zengin diyaloglarla etkileşime geçirin.",
  "useCasesSubtitle": "Dönüşüm oranlarını 3 kata kadar artıran etkileşimli mobil iletişim ile somut değer sunun.",
  "interactiveCard": {
    "badge": "DOĞRULANMIŞ RCS MESAJI",
    "message": "Apex Gear siparişiniz kargoya verildi. Teslimat durumunu canlı takip edin veya teslimat adresinizi güncelleyin.",
    "btnConfirm": "Kargoyu Takip Et",
    "btnReschedule": "Adresi Değiştir"
  },
  "useCases": [
    {
      "title": "Biniş Kartları ve Etkinlik Biletleri",
      "desc": "Canlı kapı güncellemeleri içeren tam renkli dijital biniş kartlarını doğrudan telefon ekranına teslim edin."
    },
    {
      "title": "E-Ticaret Hızlı İndirimleri",
      "desc": "Kaydırılabilir ürün kartları ve anında satın alma butonlarıyla yeni koleksiyonları öne çıkarın."
    },
    {
      "title": "Randevu Planlama ve Hatırlatmalar",
      "desc": "Tek dokunuşla onaylama veya yeniden planlama olanağı sunan interaktif takvim hatırlatıcıları gönderin."
    },
    {
      "title": "İki Aşamalı Doğrulama (2FA)",
      "desc": "Oltalama saldırılarına karşı koruyan resmi marka logosuyla güvenli tek kullanımlık şifreler iletin."
    }
  ],
  "industriesBadge": "HİZMET VERDİĞİMİZ SEKTÖRLER",
  "industriesTitle": "Tüm sektörler için gelişmiş RCS kurumsal mesajlaşma.",
  "industriesSubtitle": "Kuruluşların mobil cihazlarda tüketici iletişimini çağdaş standartlara taşımasına yardımcı oluyoruz.",
  "industries": [
    {
      "title": "Havacılık ve Konaklama",
      "desc": "Uçuş check-in hatırlatıcıları, dijital biniş kartları ve otel odası yükseltme teklifleri."
    },
    {
      "title": "Bankacılık ve FinTech",
      "desc": "Dolandırıcılık önleme uyarıları, aylık harcama özetleri ve anında kart aktivasyonu."
    },
    {
      "title": "Perakende ve E-Ticaret",
      "desc": "Yeni sezon vitrinleri, stok yenileme uyarıları ve sipariş kargo bildirimleri."
    },
    {
      "title": "Sağlık Hizmetleri",
      "desc": "Reçete yenileme hatırlatmaları, klinik randevu teyitleri ve uzaktan sağlık kayıtları."
    },
    {
      "title": "Otomotiv",
      "desc": "Periyodik bakım uyarıları, güvenlik geri çağırma duyuruları ve kiralama yenileme fırsatları."
    }
  ],
  "whyBadge": "NEDEN BİZİM RCS PLATFORMUMUZ",
  "whyTitle": "Lider Kurumlar Neden iNet RCS'i Tercih Ediyor",
  "whySubtitle": "Dünya çapındaki kuruluşların güvendiği operatör kalitesinde mesajlaşma altyapısı.",
  "whyCards": {
    "secure": {
      "title": "Doğrulanmış Marka Güvenilirliği",
      "description": "Garantili kimlik sahteciliği önleme sistemi markanızı oltalama ve taklit girişimlerinden korur."
    },
    "cloud": {
      "title": "Küresel Doğrudan Operatör Bağlantıları",
      "description": "Kuzey Amerika, Avrupa, Asya ve Latin Amerika'daki mobil ağ operatörleriyle doğrudan ara bağlantılar."
    },
    "api": {
      "title": "Basit ve Birleşik Tek API",
      "description": "Tek bir API uç noktası, mükerrer faturalandırma olmadan SMS'e otomatik geri dönüşle RCS'i yönetir."
    },
    "connectivity": {
      "title": "Garantili Küresel Teslimat",
      "description": "Akıllı geri dönüş motorları, cihaz modelinden bağımsız olarak %100 erişim güvencesi sunar."
    },
    "automated": {
      "title": "Etkileşimli Otomasyon Motoru",
      "description": "Müşterileri ilk sorudan tamamlanan işleme kadar yönlendiren otomatik chatbot diyalogları oluşturun."
    }
  },
  "apiCard": {
    "title": "RCS Kurumsal Mesajlaşma API'si",
    "desc": "Zengin kartları, karusel şablonlarını ve işlem butonlarını otomatik SMS geri dönüşü ile kolayca iletin."
  },
  "ctaBadge": "RCS'E YÜKSELTİN",
  "ctaTitle": "RCS ile marka iletişiminize canlılık katın.",
  "ctaSubtitle": "Müşteri güvenini kazanan ve satış dönüşümlerini artıran zengin, etkileşimli mobil mesajlar sunun.",
  "contactUs": "RCS ile Başlayın",
  "ctaFootnote": "Google Jibe ve küresel operatör ekosistemi ile tam uyumluluk"
};

const id: RcsBusinessMessagingTranslation = {
  "heroBadge": "PERPESANAN BISNIS RCS",
  "heroTitle": "Ubah SMS Biasa Menjadi Percakapan Interaktif RCS yang Kaya",
  "heroDesc": "Tingkatkan pesan seluler dengan tanda centang pengirim terverifikasi, kartu carousel resolusi tinggi, tombol tindakan cepat interaktif, dan jangkauan bawaan di ponsel pintar Android.",
  "talkToExpert": "Bicara dengan pakar",
  "exploreCapabilities": "Jelajahi kemampuan",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Merek RCS Terverifikasi • Centang Resmi",
    "msg1": "Halo Jordan! Boarding penerbangan SK-402 Anda ke Zurich telah dibuka di Gerbang B12. Boarding pass digital Anda sudah siap.",
    "time1": "07:30",
    "actionBtn": "Buka Boarding Pass →",
    "msg2": "Terima kasih banyak! Bisakah saya meningkatkan ke kursi dengan ruang kaki ekstra?",
    "time2": "07:31",
    "msg3": "Kursi 12A tersedia seharga $25. Ketuk tombol di bawah untuk konfirmasi instan!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Aplikasi Pesan Bawaan Android",
    "secure": "Identitas Merek Terverifikasi"
  },
  "overviewBadge": "PESAN SELULER GENERASI BERIKUTNYA",
  "overviewTitle": "Hadirkan pengalaman interaktif setara aplikasi tanpa perlu mengunduh aplikasi tambahan.",
  "overviewDesc1": "Rich Communication Services (RCS) adalah standar modern komunikasi bisnis di perangkat seluler. Hubungi pelanggan langsung di aplikasi Pesan bawaan dengan logo merek terverifikasi dan media visual yang memukau.",
  "overviewDesc2": "Hapus keterbatasan teks biasa. Hadirkan aksi sekali ketuk, berbagi lokasi, carousel produk interaktif, dan fallback otomatis ke SMS agar tidak ada pelanggan yang terlewatkan.",
  "check1": "Kepercayaan Pengirim Terverifikasi & Logo Merek",
  "check2": "Kartu Carousel Interaktif & Tombol Cepat",
  "check3": "Fallback Otomatis ke SMS / MMS",
  "featuresBadge": "KEMAMPUAN UTAMA",
  "featuresTitle": "Media kaya. Keamanan terverifikasi. Keterlibatan pelanggan luar biasa.",
  "featuresSubtitle": "Semua kebutuhan tim pemasaran dan layanan pelanggan Anda untuk mengimplementasikan RCS dalam skala besar.",
  "features": [
    {
      "title": "Branding Pengirim Terverifikasi",
      "desc": "Tampilkan logo resmi perusahaan, warna khas merek, dan tanda centang verifikasi untuk membangun kepercayaan instan."
    },
    {
      "title": "Carousel Media Resolusi Tinggi",
      "desc": "Kirim kartu produk interaktif yang dapat digeser lengkap dengan foto beresolusi tinggi, harga, dan tautan belanja."
    },
    {
      "title": "Tombol Tindakan Sekali Ketuk",
      "desc": "Beri kemudahan pelanggan untuk membuka peta, menelepon, menyimpan jadwal kalender, atau mengunjungi situs web."
    },
    {
      "title": "Saran Balasan Cepat (Quick-Reply)",
      "desc": "Sediakan tombol balasan percakapan yang praktis sehingga pelanggan dapat merespons tanpa perlu mengetik."
    },
    {
      "title": "Fallback SMS Operator Otomatis",
      "desc": "Jika perangkat penerima tidak mendukung RCS atau tidak memiliki kuota internet, pesan otomatis terkirim sebagai SMS reguler."
    },
    {
      "title": "Tanda Terima Baca & Metrik Waktu Nyata",
      "desc": "Pantau tingkat keterkiriman pesan, konfirmasi dibaca, dan rasio klik tombol tindakan secara real-time."
    }
  ],
  "howItWorksBadge": "CARA KERJA",
  "howItWorksTitle": "Luncurkan kampanye RCS terverifikasi dalam empat langkah mudah.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Verifikasi Merek & Pengaturan Akun",
      "desc": "Daftarkan profil bisnis, logo, warna, dan dokumen legal Anda ke basis data resmi operator seluler."
    },
    {
      "step": "02",
      "title": "Desain Template Interaktif",
      "desc": "Rancang kartu visual, tombol tindakan, dan alur percakapan interaktif di studio template visual kami."
    },
    {
      "step": "03",
      "title": "Hubungkan API Pesan",
      "desc": "Integrasikan API pesan terpadu kami dengan sistem perutean otomatis fallback operator ke SMS."
    },
    {
      "step": "04",
      "title": "Kirim & Analisis Performa",
      "desc": "Sebarkan kampanye pemasaran visual atau picu notifikasi transaksional dengan telemetri klik yang lengkap."
    }
  ],
  "useCasesBadge": "CONTOH PENGGUNAAN",
  "useCasesTitle": "Libatkan pengguna seluler dengan pengalaman percakapan yang lebih berkesan.",
  "useCasesSubtitle": "Berikan nilai nyata melalui komunikasi seluler interaktif yang mendongkrak rasio konversi hingga 3 kali lipat.",
  "interactiveCard": {
    "badge": "PESAN RCS TERVERIFIKASI",
    "message": "Paket Anda dari Apex Gear telah dikirim. Lacak pengiriman secara langsung atau perbarui instruksi alamat Anda.",
    "btnConfirm": "Lacak Paket",
    "btnReschedule": "Ubah Alamat"
  },
  "useCases": [
    {
      "title": "Boarding Pass & Tiket Digital",
      "desc": "Kirim boarding pass digital berwarna lengkap dengan pembaruan nomor gerbang secara langsung ke layar ponsel."
    },
    {
      "title": "Flash Sale & Promo E-Commerce",
      "desc": "Pamerkan koleksi produk terbaru menggunakan kartu carousel geser dan tombol pembelian instan."
    },
    {
      "title": "Pengingat Janji Temu & Jadwal",
      "desc": "Kirim pengingat jadwal kalender yang memungkinkan konfirmasi atau penjadwalan ulang hanya dengan satu ketukan."
    },
    {
      "title": "Autentikasi Dua Faktor (2FA)",
      "desc": "Kirimkan kode OTP satu kali pakai berlogo resmi dengan jaminan keamanan anti-phishing."
    }
  ],
  "industriesBadge": "INDUSTRI YANG KAMI LAYANI",
  "industriesTitle": "Pesan bisnis RCS untuk berbagai sektor industri.",
  "industriesSubtitle": "Membantu korporasi memodernisasi cara berkomunikasi dengan pelanggan di perangkat seluler.",
  "industries": [
    {
      "title": "Maskapai & Perhotelan",
      "desc": "Pengingat check-in penerbangan, boarding pass digital, dan penawaran upgrade kamar hotel."
    },
    {
      "title": "Perbankan & FinTech",
      "desc": "Peringatan transaksi mencurigakan, ringkasan pengeluaran bulanan, dan aktivasi kartu instan."
    },
    {
      "title": "Ritel & E-Commerce",
      "desc": "Katalog produk baru, notifikasi barang restock, dan pembaruan pengiriman pesanan."
    },
    {
      "title": "Kesehatan & Rumah Sakit",
      "desc": "Pengingat resep obat, konfirmasi jadwal dokter, dan pendaftaran telemedisin."
    },
    {
      "title": "Otomotif",
      "desc": "Pengingat jadwal servis berkala, pengumuman recall keselamatan, dan opsi perpanjangan sewa."
    }
  ],
  "whyBadge": "MENGAPA PLATFORM KAMI",
  "whyTitle": "Alasan Perusahaan Terkemuka Memilih iNet RCS",
  "whySubtitle": "Infrastruktur perpesanan kelas operator yang dipercaya oleh berbagai korporasi global.",
  "whyCards": {
    "secure": {
      "title": "Integritas Merek Terverifikasi",
      "description": "Sistem verifikasi anti-spoofing melindungi reputasi merek Anda dari ancaman penipuan dan peniruan."
    },
    "cloud": {
      "title": "Konektivitas Langsung Operator Global",
      "description": "Koneksi langsung dengan operator jaringan seluler di Amerika Utara, Eropa, Asia, dan Amerika Latin."
    },
    "api": {
      "title": "Satu API Terpadu",
      "description": "Satu endpoint API sederhana mengelola RCS dan fallback otomatis ke SMS tanpa biaya ganda."
    },
    "connectivity": {
      "title": "Jaminan Pengiriman Global",
      "description": "Sistem cerdas memastikan pesan 100% sampai terlepas dari jenis ponsel atau kondisi jaringan pengguna."
    },
    "automated": {
      "title": "Mesin Otomasi Interaktif",
      "description": "Bangun alur percakapan chatbot terotomatisasi yang membimbing pelanggan dari pertanyaan hingga transaksi selesai."
    }
  },
  "apiCard": {
    "title": "API Pesan Bisnis RCS",
    "desc": "Kirim kartu multimedia, template carousel, dan tombol balasan cepat dengan penanganan fallback SMS otomatis."
  },
  "ctaBadge": "UPGRADE KE RCS SEKARANG",
  "ctaTitle": "Hidupkan komunikasi merek Anda dengan kecanggihan RCS.",
  "ctaSubtitle": "Hadirkan pesan seluler yang kaya dan interaktif untuk membangun kepercayaan pelanggan dan melipatgandakan konversi.",
  "contactUs": "Mulai dengan RCS",
  "ctaFootnote": "Kompatibilitas penuh dengan Google Jibe dan ekosistem operator telekomunikasi dunia"
};

const vi: RcsBusinessMessagingTranslation = {
  "heroBadge": "TIN NHẮN DOANH NGHIỆP RCS",
  "heroTitle": "Biến SMS Truyền Thống Thành Trò Chuyện Tương Tác RCS Đa Phương Tiện",
  "heroDesc": "Nâng tầm thông điệp di động với dấu tích người gửi được xác minh, thẻ xoay vòng băng chuyền độ phân giải cao, nút thao tác nhanh tương tác và phạm vi tiếp cận gốc trên điện thoại Android.",
  "talkToExpert": "Trao đổi với chuyên gia",
  "exploreCapabilities": "Khám phá các tính năng",
  "chatScreen": {
    "contactName": "Hãng Hàng Không Skyline Express",
    "status": "Thương hiệu RCS Đã Xác Minh • Dấu Tích",
    "msg1": "Xin chào Jordan! Chuyến bay SK-402 đến Zurich của bạn đang mở cổng lên máy bay B12. Thẻ lên máy bay kỹ thuật số của bạn đã sẵn sàng.",
    "time1": "07:30",
    "actionBtn": "Mở Thẻ Lên Máy Bay →",
    "msg2": "Cảm ơn bạn! Tôi có thể nâng hạng lên ghế có thêm chỗ để chân không?",
    "time2": "07:31",
    "msg3": "Ghế 12A (chỗ để chân rộng) có sẵn với giá $25. Chạm vào nút bên dưới để xác nhận ngay!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Ứng dụng Tin nhắn Gốc trên Android",
    "secure": "Định danh Người gửi Được xác minh"
  },
  "overviewBadge": "TIN NHẮN DI ĐỘNG THẾ HỆ MỚI",
  "overviewTitle": "Cung cấp trải nghiệm tương tác phong phú như ứng dụng mà không cần cài đặt thêm app.",
  "overviewDesc1": "Dịch vụ Liên lạc Đa phương tiện (RCS) là tiêu chuẩn toàn cầu hiện đại cho tin nhắn doanh nghiệp trên thiết bị di động. Tiếp cận khách hàng trực tiếp trong ứng dụng Tin nhắn gốc với logo thương hiệu được xác minh và hình ảnh sắc nét.",
  "overviewDesc2": "Xóa bỏ những giới hạn của văn bản thuần túy. Kích hoạt thao tác bằng một chạm, chia sẻ vị trí, băng chuyền hình ảnh tương tác và cơ chế tự động chuyển tiếp về SMS để không bao giờ bỏ sót khách hàng.",
  "check1": "Độ tin cậy của Người gửi Được xác minh & Logo",
  "check2": "Thẻ Băng chuyền Tương tác & Nút Bấm Nhanh",
  "check3": "Chuyển tiếp Dự phòng Tự động về SMS / MMS",
  "featuresBadge": "TÍNH NĂNG NỔI BẬT",
  "featuresTitle": "Đa phương tiện phong phú. Bảo mật xác thực. Mức độ gắn kết vượt trội.",
  "featuresSubtitle": "Mọi công cụ mà đội ngũ tiếp thị và dịch vụ khách hàng của bạn cần để triển khai RCS ở quy mô lớn.",
  "features": [
    {
      "title": "Xác minh Thương hiệu Người gửi",
      "desc": "Hiển thị logo chính thức, màu sắc nhận diện và dấu tích xác minh để xây dựng niềm tin tức thì với khách hàng."
    },
    {
      "title": "Băng chuyền Phương tiện Độ phân giải Cao",
      "desc": "Gửi các thẻ giới thiệu sản phẩm có thể vuốt chuyển động kèm hình ảnh, giá bán và liên kết mua hàng trực tiếp."
    },
    {
      "title": "Nút Hành động Gợi ý Bằng Một Chạm",
      "desc": "Cho phép khách hàng mở bản đồ, quay số điện thoại, lưu sự kiện lịch hoặc truy cập trang web chỉ với một chạm duy nhất."
    },
    {
      "title": "Gợi ý Phản hồi Nhanh (Quick-Reply)",
      "desc": "Đưa ra các tùy chọn trả lời nhanh theo ngữ cảnh để khách hàng tương tác ngay mà không cần phải gõ phím."
    },
    {
      "title": "Tự động Chuyển tiếp về SMS của Nhà mạng",
      "desc": "Nếu điện thoại người nhận không hỗ trợ RCS hoặc bị mất kết nối mạng, tin nhắn sẽ tự động gửi dưới dạng SMS thông thường."
    },
    {
      "title": "Báo cáo Đã đọc & Đo lường Thời gian Thực",
      "desc": "Theo dõi tỷ lệ phát thành công, xác nhận đã đọc và số lượt nhấp vào các nút thao tác theo thời gian thực."
    }
  ],
  "howItWorksBadge": "CÁCH THỨC HOẠT ĐỘNG",
  "howItWorksTitle": "Triển khai chiến dịch RCS được xác minh chỉ qua bốn bước đơn giản.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Xác minh & Thiết lập Thương hiệu",
      "desc": "Đăng ký hồ sơ công ty, logo, màu sắc thương hiệu và giấy tờ pháp lý với cơ sở dữ liệu nhà mạng viễn thông."
    },
    {
      "step": "02",
      "title": "Thiết kế Mẫu Tương tác Trực quan",
      "desc": "Tạo các thẻ truyền thông đa phương tiện, nút hành động và kịch bản hội thoại trong studio thiết kế trực quan."
    },
    {
      "step": "03",
      "title": "Kết nối API Tin nhắn",
      "desc": "Tích hợp API tin nhắn hợp nhất của chúng tôi với định tuyến chuyển tiếp tự động của nhà mạng qua SMS."
    },
    {
      "step": "04",
      "title": "Phát hành & Phân tích Hiệu quả",
      "desc": "Gửi các chiến dịch tiếp thị tương tác hoặc kích hoạt thông báo giao dịch với số liệu phân tích nhấp chuột chi tiết."
    }
  ],
  "useCasesBadge": "TRƯỜNG HỢP ỨNG DỤNG",
  "useCasesTitle": "Thu hút người dùng di động bằng các trải nghiệm đối thoại sống động.",
  "useCasesSubtitle": "Mang lại giá trị thiết thực thông qua truyền thông tương tác di động giúp tăng tỷ lệ chuyển đổi lên đến 3 lần.",
  "interactiveCard": {
    "badge": "TIN NHẮN RCS ĐÃ XÁC MINH",
    "message": "Kiện hàng của bạn từ Apex Gear đã được gửi đi. Theo dõi lộ trình đơn hàng theo thời gian thực hoặc cập nhật địa chỉ giao hàng.",
    "btnConfirm": "Theo dõi Đơn hàng",
    "btnReschedule": "Đổi Địa chỉ"
  },
  "useCases": [
    {
      "title": "Thẻ Lên Máy Bay & Vé Điện Tử",
      "desc": "Gửi thẻ lên máy bay kỹ thuật số đầy đủ màu sắc với cập nhật cổng bay theo thời gian thực trực tiếp lên màn hình."
    },
    {
      "title": "Ưu Đãi Chớp Nhoáng E-Commerce",
      "desc": "Giới thiệu bộ sưu tập sản phẩm mới bằng thẻ trượt băng chuyền và nút bấm mua sắm tức thì không rào cản."
    },
    {
      "title": "Nhắc Lịch Hẹn & Đặt Chỗ",
      "desc": "Gửi thông báo lịch trình tương tác cho phép xác nhận hoặc dời lịch hẹn thuận tiện chỉ bằng một cú chạm."
    },
    {
      "title": "Xác thực Hai Yếu tố (2FA)",
      "desc": "Cung cấp mã OTP dùng một lần kèm logo thương hiệu chính thức nhằm loại bỏ hoàn toàn nguy cơ lừa đảo giả mạo."
    }
  ],
  "industriesBadge": "NGÀNH NGHỀ PHỤC VỤ",
  "industriesTitle": "Giải pháp tin nhắn doanh nghiệp RCS cho mọi lĩnh vực thị trường.",
  "industriesSubtitle": "Hỗ trợ các doanh nghiệp hàng đầu hiện đại hóa kênh giao tiếp với khách hàng trên điện thoại thông minh.",
  "industries": [
    {
      "title": "Hàng Không & Khách Sạn",
      "desc": "Nhắc nhở làm thủ tục chuyến bay, thẻ lên máy bay điện tử và ưu đãi nâng hạng phòng khách sạn."
    },
    {
      "title": "Ngân Hàng & FinTech",
      "desc": "Cảnh báo gian lận giao dịch tức thì, báo cáo chi tiêu hàng tháng và kích hoạt thẻ ngân hàng nhanh chóng."
    },
    {
      "title": "Bán Lẻ & Thương Mại Điện Tử",
      "desc": "Ra mắt bộ sưu tập thời trang, thông báo hàng về và cập nhật tiến độ vận chuyển đơn hàng."
    },
    {
      "title": "Chăm Sóc Sức Khỏe",
      "desc": "Nhắc lịch uống thuốc theo đơn, xác nhận cuộc hẹn khám bệnh và hướng dẫn tư vấn trực tuyến."
    },
    {
      "title": "Công Nghiệp Ô Tô",
      "desc": "Nhắc bảo dưỡng định kỳ, thông báo triệu hồi an toàn kỹ thuật và gia hạn hợp đồng thuê xe."
    }
  ],
  "whyBadge": "LÝ DO CHỌN CHÚNG TÔI",
  "whyTitle": "Tại Sao Các Tập Đoàn Hàng Đầu Tin Chọn iNet RCS",
  "whySubtitle": "Hạ tầng tin nhắn tiêu chuẩn nhà mạng viễn thông được các doanh nghiệp toàn cầu tín nhiệm.",
  "whyCards": {
    "secure": {
      "title": "Bảo Vệ Tính Toàn Vẹn Thương Hiệu",
      "description": "Cơ chế xác minh chống giả mạo bảo vệ uy tín thương hiệu của bạn trước các hành vi mạo danh và lừa đảo."
    },
    "cloud": {
      "title": "Kết Nối Trực Tiếp Nhà Mạng Toàn Cầu",
      "description": "Đường truyền trực tiếp với các nhà mạng di động tại Bắc Mỹ, Châu Âu, Châu Á và Châu Mỹ Latinh."
    },
    "api": {
      "title": "API Đơn Lẻ Hợp Nhất",
      "description": "Một cổng API duy nhất xử lý tin nhắn RCS và chuyển tiếp tự động sang SMS mà không bị tính cước trùng lặp."
    },
    "connectivity": {
      "title": "Cam Kết Tỷ Lệ Phát Toàn Cầu",
      "description": "Hệ thống dự phòng thông minh bảo đảm khả năng tiếp cận 100% bất kể dòng máy hay tình trạng mạng của người nhận."
    },
    "automated": {
      "title": "Công Cụ Tự Động Hóa Tương Tác",
      "description": "Thiết lập các kịch bản chatbot tự động dẫn dắt khách hàng từ thắc mắc ban đầu đến giao dịch hoàn tất."
    }
  },
  "apiCard": {
    "title": "API Tin Nhắn Doanh Nghiệp RCS",
    "desc": "Gửi thẻ tương tác, mẫu băng chuyền đa phương tiện và nút trả lời gợi ý với dự phòng SMS tự động."
  },
  "ctaBadge": "NÂNG CẤP LÊN RCS NGAY",
  "ctaTitle": "Tạo nên sức sống mới cho hoạt động truyền thông thương hiệu với RCS.",
  "ctaSubtitle": "Cung cấp các tin nhắn di động hấp dẫn, giàu tính tương tác nhằm củng cố niềm tin và nâng cao tỷ lệ chuyển đổi.",
  "contactUs": "Bắt đầu với RCS",
  "ctaFootnote": "Tương thích hoàn toàn với Google Jibe và hệ sinh thái viễn thông toàn cầu"
};

const pl: RcsBusinessMessagingTranslation = {
  "heroBadge": "KOMUNIKACJA BIZNESOWA RCS",
  "heroTitle": "Przekształć Zwykły SMS w Bogate Konwersacje RCS",
  "heroDesc": "Wznieś komunikację mobilną na wyższy poziom dzięki zweryfikowanym oznaczeniom nadawcy, kartom karuzelowym w wysokiej rozdzielczości, interaktywnym przyciskom akcji i natywnemu zasięgowi na smartfonach z systemem Android.",
  "talkToExpert": "Porozmawiaj z ekspertem",
  "exploreCapabilities": "Poznaj możliwości",
  "chatScreen": {
    "contactName": "Linie Lotnicze Skyline Express",
    "status": "Zweryfikowana Marka RCS • Oficjalny Znacznik",
    "msg1": "Cześć Jordan! Boarding na Twój lot SK-402 do Zurychu rozpoczął się przy Bramce B12. Twoja cyfrowa karta pokładowa jest gotowa.",
    "time1": "07:30",
    "actionBtn": "Otwórz Kartę Pokładową →",
    "msg2": "Dziękuję! Czy mogę przejść na miejsce z dodatkową przestrzenią na nogi?",
    "time2": "07:31",
    "msg3": "Miejsce 12A jest dostępne za 25 $. Dotknij poniżej, aby natychmiast potwierdzić!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Natywna Aplikacja Wiadomości Android",
    "secure": "Zweryfikowana Tożsamość Nadawcy"
  },
  "overviewBadge": "WIADOMOŚCI MOBILNE NOWEJ GENERACJI",
  "overviewTitle": "Zaoferuj bogate interaktywne doświadczenia jak w aplikacji, bez konieczności jej pobierania.",
  "overviewDesc1": "Rich Communication Services (RCS) to nowoczesny światowy standard biznesowych wiadomości mobilnych. Docieraj do klientów bezpośrednio w domyślnej aplikacji Wiadomości z oficjalnym logo i angażującymi multimediami.",
  "overviewDesc2": "Zapomnij o ograniczeniach zwykłego tekstu. Wykorzystaj akcje jednym dotknięciem, udostępnianie lokalizacji, interaktywne karuzele produktów i automatyczne przełączanie na SMS, aby nie pominąć żadnego odbiorcy.",
  "check1": "Zaufanie do Zweryfikowanego Nadawcy i Oficjalne Logo",
  "check2": "Interaktywne Karty Karuzelowe i Przyciski Akcji",
  "check3": "Automatyczne Zapasowe Przełączanie na SMS / MMS",
  "featuresBadge": "KLUCZOWE MOŻLIWOŚCI",
  "featuresTitle": "Bogate multimedia. Sprawdzone bezpieczeństwo. Wyjątkowe zaangażowanie.",
  "featuresSubtitle": "Wszystko, czego potrzebują działy marketingu i obsługi klienta do wdrożenia RCS na dużą skalę.",
  "features": [
    {
      "title": "Branding Zweryfikowanego Nadawcy",
      "desc": "Wyświetlaj oficjalne logo firmy, kolory marki i znacznik weryfikacji, budując natychmiastowe zaufanie odbiorców."
    },
    {
      "title": "Karuzele Multimedialne Wysokiej Rozdzielczości",
      "desc": "Wysyłaj przesuwane interaktywne karty produktów ze zdjęciami, cenami i bezpośrednimi linkami do zakupu."
    },
    {
      "title": "Przyciski Akcji Jednego Dotknięcia",
      "desc": "Umożliwiaj klientom otwieranie map, wybieranie numerów, zapisywanie wydarzeń w kalendarzu czy wizyty w witrynie."
    },
    {
      "title": "Sugerowane Szybkie Odpowiedzi",
      "desc": "Proponuj gotowe kafelki odpowiedzi, dzięki którym użytkownicy odpowiadają natychmiast bez konieczności wpisywania tekstu."
    },
    {
      "title": "Automatyczny Fallback na SMS Operatora",
      "desc": "Jeśli urządzenie odbiorcy nie obsługuje RCS lub nie ma dostępu do internetu, wiadomość trafia natychmiast jako SMS."
    },
    {
      "title": "Potwierdzenia Odczytu i Metryki w Czasie Rzeczywistym",
      "desc": "Śledź wskaźniki doręczeń, potwierdzenia przeczytania oraz kliknięcia w przyciski akcji na żywo."
    }
  ],
  "howItWorksBadge": "JAK TO DZIAŁA",
  "howItWorksTitle": "Uruchom zweryfikowane kampanie RCS w czterech prostych krokach.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Weryfikacja i Konfiguracja Marki",
      "desc": "Zarejestruj profil firmy, logo, kolorystykę i dokumentację prawną w oficjalnych rejestrach operatorów."
    },
    {
      "step": "02",
      "title": "Projektowanie Interaktywnych Szablonów",
      "desc": "Twórz karty multimedialne, przyciski akcji i drzewa konwersacji w naszym wizualnym studiu szablonów."
    },
    {
      "step": "03",
      "title": "Integracja API Wiadomości",
      "desc": "Zintegruj nasze zunifikowane API z automatycznym routingiem rezerwowym przez SMS operatora."
    },
    {
      "step": "04",
      "title": "Wysyłka i Zaawansowana Analityka",
      "desc": "Emituj angażujące kampanie marketingowe lub powiadomienia transakcyjne z pełną telemetrią interakcji."
    }
  ],
  "useCasesBadge": "PRZYKŁADY ZASTOSOWANIA",
  "useCasesTitle": "Angażuj użytkowników smartfonów bogatymi dialogami.",
  "useCasesSubtitle": "Dostarczaj wymierną wartość dzięki interaktywnej komunikacji mobilnej, która podnosi współczynniki konwersji nawet 3-krotnie.",
  "interactiveCard": {
    "badge": "ZWERYFIKOWANA WIADOMOŚĆ RCS",
    "message": "Twoja paczka od Apex Gear została nadana. Śledź przesyłkę w czasie rzeczywistym lub zaktualizuj adres dostawy.",
    "btnConfirm": "Śledź Przesyłkę",
    "btnReschedule": "Zmień Adres"
  },
  "useCases": [
    {
      "title": "Karty Pokładowe i Bilety Cyfrowe",
      "desc": "Dostarczaj pełnokolorowe cyfrowe karty pokładowe z aktualizacją bramki na żywo wprost na ekran telefonu."
    },
    {
      "title": "Promocje i Flash Sales E-Commerce",
      "desc": "Prezentuj nowe kolekcje za pomocą przesuwanych karuzeli i przycisków błyskawicznego zakupu."
    },
    {
      "title": "Terminarz i Przypomnienia o Wizytach",
      "desc": "Wysyłaj interaktywne przypomnienia z możliwością potwierdzenia lub zmiany terminu jednym kliknięciem."
    },
    {
      "title": "Uwierzytelnianie Dwuetapowe (2FA)",
      "desc": "Przesyłaj bezpieczne kody jednorazowe z oficjalnym logo marki, skutecznie chroniąc przed phishingiem."
    }
  ],
  "industriesBadge": "OBSŁUGIWANE BRANŻE",
  "industriesTitle": "Komunikacja biznesowa RCS dla wszystkich sektorów rynku.",
  "industriesSubtitle": "Pomagamy wiodącym przedsiębiorstwom unowocześniać dialog z konsumentami na urządzeniach mobilnych.",
  "industries": [
    {
      "title": "Lotnictwo i Hotelarstwo",
      "desc": "Przypomnienia o odprawie, cyfrowe karty pokładowe i propozycje podwyższenia standardu pokoju."
    },
    {
      "title": "Bankowość i FinTech",
      "desc": "Natychmiastowe alerty antyfraudowe, miesięczne podsumowania wydatków i szybka aktywacja kart płatniczych."
    },
    {
      "title": "Handel Detaliczny i E-Commerce",
      "desc": "Premiery nowych kolekcji, powiadomienia o powrocie produktów na stan i statusy dostawy przesyłek."
    },
    {
      "title": "Ochrona Zdrowia",
      "desc": "Przypomnienia o receptach, potwierdzenia wizyt lekarskich i rejestracja na konsultacje online."
    },
    {
      "title": "Motoryzacja",
      "desc": "Powiadomienia o przeglądach okresowych, akcje przywoławcze i opcje odnowienia umowy leasingu."
    }
  ],
  "whyBadge": "DLACZEGO NASZA PLATFORMA RCS",
  "whyTitle": "Dlaczego Wiodące Korporacje Wybierają iNet RCS",
  "whySubtitle": "Infrastruktura wiadomości o standardzie operatorskim, której ufają globalne przedsiębiorstwa.",
  "whyCards": {
    "secure": {
      "title": "Zweryfikowana Integralność Marki",
      "description": "Certyfikowany mechanizm antyspoofingowy chroni Twoją markę przed podszywaniem się i phishingiem."
    },
    "cloud": {
      "title": "Bezpośrednie Styki Operatorskie na Świecie",
      "description": "Bezpośrednie łącza z operatorami sieci komórkowych w Ameryce Północnej, Europie, Azji i Ameryce Łacińskiej."
    },
    "api": {
      "title": "Pojedyncze Zunifikowane API",
      "description": "Jeden prosty interfejs API obsługuje RCS z automatycznym przejściem na SMS bez podwójnych opłat."
    },
    "connectivity": {
      "title": "Gwarancja Globalnego Doręczenia",
      "description": "Inteligentne algorytmy rezerwowe zapewniają 100% dotarcia niezależnie od modelu smartfona odbiorcy."
    },
    "automated": {
      "title": "Interaktywny Silnik Automatyzacji",
      "description": "Buduj zautomatyzowane dialogi chatbotów, które płynnie prowadzą klienta od zapytania do sfinalizowania zakupu."
    }
  },
  "apiCard": {
    "title": "API Wiadomości Biznesowych RCS",
    "desc": "Wysyłaj bogate karty, szablony karuzelowe i szybkie akcje z wbudowaną automatyczną obsługą rezerwy SMS."
  },
  "ctaBadge": "PRZEJDŹ NA RCS JUŻ DZIŚ",
  "ctaTitle": "Ożyw komunikację swojej marki dzięki możliwościom RCS.",
  "ctaSubtitle": "Dostarczaj bogatsze, bardziej angażujące wiadomości mobilne, które budują lojalność i zwiększają konwersję.",
  "contactUs": "Rozpocznij z RCS",
  "ctaFootnote": "Pełna kompatybilność z ekosystemem Google Jibe i globalnymi operatorami telekomunikacyjnymi"
};

const th: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS ข้อความธุรกิจอัจฉริยะ",
  "heroTitle": "เปลี่ยน SMS ธรรมดาให้เป็นการสนทนา RCS แบบอินเทอร์แอคทีฟ",
  "heroDesc": "ยกระดับการส่งข้อความบนมือถือด้วยเครื่องหมายยืนยันตัวตนผู้ส่ง การ์ดภาพสไลด์ความละเอียดสูง ปุ่มคำสั่งลัด และการเข้าถึงผู้ใช้สมาร์ทโฟน Android โดยตรง",
  "talkToExpert": "ปรึกษาผู้เชี่ยวชาญ",
  "exploreCapabilities": "สำรวจคุณสมบัติ",
  "chatScreen": {
    "contactName": "สายการบิน Skyline Express",
    "status": "แบรนด์ RCS ที่ได้รับการยืนยัน • ตราสัญลักษณ์",
    "msg1": "สวัสดี Jordan! เที่ยวบิน SK-402 ไปซูริกของคุณเริ่มเปิดให้ขึ้นเครื่องแล้วที่ประตู B12 บอร์ดดิ้งพาสดิจิทัลของคุณพร้อมใช้งานแล้ว",
    "time1": "07:30",
    "actionBtn": "เปิดบอร์ดดิ้งพาส →",
    "msg2": "ขอบคุณมาก! ฉันสามารถอัปเกรดเป็นที่นั่งที่มีพื้นที่วางขาพิเศษได้ไหม?",
    "time2": "07:31",
    "msg3": "ที่นั่ง 12A (พื้นที่กว้างพิเศษ) ว่างในราคา $25 แตะด้านล่างเพื่อยืนยันทันที!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "แอปข้อความดั้งเดิมของ Android",
    "secure": "แบรนด์ผู้ส่งที่ได้รับการยืนยันอย่างเป็นทางการ"
  },
  "overviewBadge": "ข้อความบนมือถือยุคใหม่",
  "overviewTitle": "มอบประสบการณ์อินเทอร์แอคทีฟเสมือนแอป โดยไม่ต้องดาวน์โหลดแอปพลิเคชันเพิ่มเติม",
  "overviewDesc1": "Rich Communication Services (RCS) คือมาตรฐานระดับโลกสำหรับการส่งข้อความทางธุรกิจบนสมาร์ทโฟน เข้าถึงลูกค้าได้โดยตรงในแอปข้อความดั้งเดิม พร้อมโลโก้ที่ได้รับการรับรองและสื่อภาพที่มีชีวิตชีวา",
  "overviewDesc2": "ก้าวข้ามข้อจำกัดของข้อความธรรมดา เปิดใช้งานการดำเนินการด้วยการแตะเพียงครั้งเดียว การแชร์ตำแหน่ง การ์ดภาพสไลด์สินค้า และระบบสลับไปใช้ SMS อัตโนมัติเพื่อรับประกันการส่งถึงผู้รับทุกคน",
  "check1": "ความน่าเชื่อถือของผู้ส่งที่ผ่านการยืนยันและโลโก้แบรนด์",
  "check2": "การ์ดภาพสไลด์และปุ่มดำเนินการด่วน",
  "check3": "ระบบสลับส่ง SMS / MMS สำรองอัตโนมัติ",
  "featuresBadge": "คุณสมบัติหลัก",
  "featuresTitle": "สื่อมัลติมีเดียสมบูรณ์แบบ ความปลอดภัยระดับสูง การมีส่วนร่วมที่ยอดเยี่ยม",
  "featuresSubtitle": "ทุกสิ่งจำเป็นสำหรับทีมการตลาดและฝ่ายบริการลูกค้า เพื่อขับเคลื่อน RCS ในระดับองค์กร",
  "features": [
    {
      "title": "การสร้างแบรนด์ผู้ส่งที่ได้รับการยืนยัน",
      "desc": "แสดงโลโก้บริษัท สีประจำแบรนด์ และเครื่องหมายรับรองเพื่อสร้างความไว้วางใจให้กับลูกค้าได้ทันที"
    },
    {
      "title": "การ์ดสไลด์มัลติมีเดียความละเอียดสูง",
      "desc": "ส่งการ์ดแคตตาล็อกสินค้าที่เลื่อนได้ พร้อมรูปภาพ รายละเอียดราคา และลิงก์สั่งซื้อทันที"
    },
    {
      "title": "ปุ่มแนะนำการดำเนินการด้วยการแตะครั้งเดียว",
      "desc": "ช่วยให้ลูกค้าเปิดแผนที่ โทรออก บันทึกกิจกรรมลงปฏิทิน หรือเข้าชมเว็บไซต์ได้ง่ายในสัมผัสเดียว"
    },
    {
      "title": "ข้อความตอบกลับด่วนที่แนะนำ",
      "desc": "เสนอตัวเลือกคำตอบด่วนที่เตรียมไว้ล่วงหน้าเพื่อให้ผู้ใช้ตอบกลับได้ทันทีโดยไม่ต้องพิมพ์"
    },
    {
      "title": "ระบบสลับส่ง SMS สำรองจากผู้ให้บริการ",
      "desc": "หากเครื่องผู้รับไม่รองรับ RCS หรือไม่ได้เชื่อมต่ออินเทอร์เน็ต ระบบจะส่งข้อความเป็น SMS ทันที"
    },
    {
      "title": "ใบเสร็จการอ่านและการวัดผลแบบเรียลไทม์",
      "desc": "ติดตามอัตราการส่งมอบ การแจ้งเตือนเปิดอ่าน และสถิติการคลิกปุ่มต่างๆ ได้อย่างแม่นยำตลอดเวลา"
    }
  ],
  "howItWorksBadge": "ขั้นตอนการทำงาน",
  "howItWorksTitle": "เริ่มต้นแคมเปญ RCS ที่ผ่านการยืนยันในสี่ขั้นตอนง่ายๆ",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "การตรวจสอบและตั้งค่าแบรนด์",
      "desc": "ลงทะเบียนโปรไฟล์แบรนด์ โลโก้ สี และเอกสารทางกฎหมายกับหน่วยงานรับรองของผู้ให้บริการ"
    },
    {
      "step": "02",
      "title": "ออกแบบเทมเพลตแบบอินเทอร์แอคทีฟ",
      "desc": "สร้างการ์ดมัลติมีเดีย ปุ่มคำสั่งลัด และโครงสร้างบทสนทนาในสตูดิโอออกแบบที่ใช้งานง่าย"
    },
    {
      "step": "03",
      "title": "เชื่อมต่อ Messaging API",
      "desc": "รวม API การส่งข้อความแบบครบวงจรของเราเข้ากับระบบ พร้อมระบบเราต์ติ้งสำรองอัตโนมัติ"
    },
    {
      "step": "04",
      "title": "เปิดตัวและวิเคราะห์ผลลัพธ์",
      "desc": "บรอดแคสต์แคมเปญการตลาดหรือส่งการแจ้งเตือนธุรกรรม พร้อมการวัดผลการคลิกอย่างสมบูรณ์"
    }
  ],
  "useCasesBadge": "กรณีการใช้งาน",
  "useCasesTitle": "ดึงดูดผู้ใช้มือถือด้วยบทสนทนาที่มีมิติและตอบสนองได้ทันที",
  "useCasesSubtitle": "มอบคุณค่าด้วยการสื่อสารเชิงโต้ตอบบนสมาร์ทโฟนที่ช่วยเพิ่มอัตราคอนเวอร์ชันได้สูงสุดถึง 3 เท่า",
  "interactiveCard": {
    "badge": "ข้อความ RCS ที่ได้รับการยืนยัน",
    "message": "พัสดุของคุณจาก Apex Gear ถูกจัดส่งแล้ว ติดตามสถานะการจัดส่งแบบเรียลไทม์หรือเปลี่ยนแปลงที่อยู่จัดส่ง",
    "btnConfirm": "ติดตามพัสดุ",
    "btnReschedule": "เปลี่ยนที่อยู่"
  },
  "useCases": [
    {
      "title": "บอร์ดดิ้งพาสและบัตรดิจิทัล",
      "desc": "ส่งบัตรโดยสารดิจิทัลสีสันสดใสพร้อมการอัปเดตประตูขึ้นเครื่องแบบสดๆ ไปยังหน้าจอสมาร์ทโฟน"
    },
    {
      "title": "แฟลชเซลและอีคอมเมิร์ซ",
      "desc": "แสดงคอลเลกชันสินค้าใหม่ด้วยการ์ดแคตตาล็อกเลื่อนดูได้พร้อมปุ่มสั่งซื้อทันทีโดยไม่มีสะดุด"
    },
    {
      "title": "การนัดหมายและการแจ้งเตือน",
      "desc": "ส่งการแจ้งเตือนปฏิทินที่ลูกค้าสามารถกดยืนยันหรือขอเลื่อนนัดได้ด้วยการแตะเพียงครั้งเดียว"
    },
    {
      "title": "การยืนยันตัวตนสองขั้นตอน (2FA)",
      "desc": "ส่งรหัส OTP แบบใช้ครั้งเดียวพร้อมลายน้ำแบรนด์อย่างเป็นทางการ ป้องกันการฟิชชิ่งได้อย่างปลอดภัย"
    }
  ],
  "industriesBadge": "อุตสาหกรรมที่เราให้บริการ",
  "industriesTitle": "บริการข้อความธุรกิจ RCS สำหรับทุกภาคอุตสาหกรรม",
  "industriesSubtitle": "ช่วยให้องค์กรชั้นนำปรับปรุงการติดต่อสื่อสารกับผู้บริโภคบนสมาร์ทโฟนให้ทันสมัย",
  "industries": [
    {
      "title": "สายการบินและการบริการ",
      "desc": "การแจ้งเตือนเช็กอิน บอร์ดดิ้งพาสดิจิทัล และข้อเสนออัปเกรดห้องพักของโรงแรม"
    },
    {
      "title": "การธนาคารและฟินเทค",
      "desc": "การแจ้งเตือนธุรกรรมผิดปกติ สรุปยอดค่าใช้จ่ายรายเดือน และการเปิดใช้งานบัตรอย่างรวดเร็ว"
    },
    {
      "title": "ค้าปลีกและอีคอมเมิร์ซ",
      "desc": "การเปิดตัวสินค้าใหม่ การแจ้งเตือนสินค้าพร้อมจำหน่าย และการอัปเดตสถานะจัดส่งพัสดุ"
    },
    {
      "title": "การดูแลสุขภาพและการแพทย์",
      "desc": "การเตือนรับยาตามใบสั่งแพทย์ การยืนยันนัดหมายคลินิก และการลงทะเบียนปรึกษาแพทย์ทางไกล"
    },
    {
      "title": "ยานยนต์",
      "desc": "การแจ้งเตือนเช็กระยะตามรอบ การประกาศเรียกรถคืนเพื่อความปลอดภัย และข้อเสนอต่อสัญญาเช่าซื้อ"
    }
  ],
  "whyBadge": "ทำไมต้องเลือกแพลตฟอร์ม RCS ของเรา",
  "whyTitle": "ทำไมองค์กรชั้นนำจึงไว้วางใจ iNet RCS",
  "whySubtitle": "โครงสร้างพื้นฐานการส่งข้อความระดับผู้ให้บริการเครือข่ายที่ธุรกิจระดับโลกเชื่อมั่น",
  "whyCards": {
    "secure": {
      "title": "ความน่าเชื่อถือของแบรนด์ที่ผ่านการยืนยัน",
      "description": "การรับรองป้องกันการปลอมแปลงตัวตนที่เชื่อถือได้ ช่วยปกป้องแบรนด์ของคุณจากการสวมรอยและฟิชชิ่ง"
    },
    "cloud": {
      "title": "การเชื่อมต่อตรงกับผู้ให้บริการทั่วโลก",
      "description": "เชื่อมโยงโดยตรงกับเครือข่ายมือถือหลักในอเมริกาเหนือ ยุโรป เอเชีย และละตินอเมริกา"
    },
    "api": {
      "title": "API เดี่ยวที่ผสานรวมอย่างลงตัว",
      "description": "จุดเชื่อมต่อ API เดียวรองรับการส่ง RCS พร้อมระบบสลับส่ง SMS อัตโนมัติโดยไม่มีการคิดค่าบริการซ้ำซ้อน"
    },
    "connectivity": {
      "title": "รับประกันการส่งถึงผู้รับทั่วโลก",
      "description": "กลไกสำรองอัจฉริยะช่วยให้เข้าถึงผู้รับได้ 100% ไม่ว่าจะเป็นสมาร์ทโฟนรุ่นใดก็ตาม"
    },
    "automated": {
      "title": "ระบบอัตโนมัติแบบอินเทอร์แอคทีฟ",
      "description": "สร้างโฟลว์แชทบอทอัตโนมัติที่นำทางลูกค้าตั้งแต่การสอบถามข้อมูลเบื้องต้นจนถึงการสั่งซื้อสำเร็จ"
    }
  },
  "apiCard": {
    "title": "RCS Business Messaging API",
    "desc": "ส่งการ์ดภาพ ตัวอย่างแคตตาล็อก และปุ่มตอบกลับอย่างง่ายดาย พร้อมระบบสลับส่ง SMS อัตโนมัติ"
  },
  "ctaBadge": "อัปเกรดเป็น RCS วันนี้",
  "ctaTitle": "เติมเต็มชีวิตชีวาให้กับการสื่อสารของแบรนด์ด้วย RCS",
  "ctaSubtitle": "ส่งข้อความบนมือถือที่มีชีวิตชีวาและดึงดูดใจ เพื่อสร้างความภักดีและเพิ่มยอดขายอย่างก้าวกระโดด",
  "contactUs": "เริ่มต้นใช้งาน RCS",
  "ctaFootnote": "เข้ากันได้อย่างสมบูรณ์กับ Google Jibe และระบบนิเวศของผู้ให้บริการเครือข่ายทั่วโลก"
};

const tl: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS BUSINESS MESSAGING",
  "heroTitle": "Gawing Makulay at Interaktibong RCS ang Karaniwang SMS",
  "heroDesc": "Itaas ang antas ng mobile messaging gamit ang verified sender checkmarks, high-resolution carousel cards, interactive quick-action buttons, at katutubong abot sa mga Android smartphone.",
  "talkToExpert": "Makipag-usap sa eksperto",
  "exploreCapabilities": "Tuklasin ang mga kakayahan",
  "chatScreen": {
    "contactName": "Skyline Express Airways",
    "status": "Beripikadong RCS Brand • Opisyal na Checkmark",
    "msg1": "Kumusta Jordan! Nagsimula na ang boarding para sa iyong flight SK-402 papuntang Zurich sa Gate B12. Handa na ang iyong digital boarding pass.",
    "time1": "07:30",
    "actionBtn": "Buksan ang Boarding Pass →",
    "msg2": "Salamat! Maaari ba akong mag-upgrade sa upuang may dagdag na legroom?",
    "time2": "07:31",
    "msg3": "Available ang Seat 12A sa halagang $25. Pindutin sa ibaba upang kumpirmahin agad!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Katutubong Android Messages App",
    "secure": "Beripikadong Pagkakakilanlan ng Nagpadala"
  },
  "overviewBadge": "BAGONG HENERASYON NG MOBILE MESSAGING",
  "overviewTitle": "Maghatid ng interaktibong karanasan na parang app nang hindi kailangang mag-download ng app.",
  "overviewDesc1": "Ang Rich Communication Services (RCS) ay ang makabagong pandaigdigang pamantayan para sa mensahe ng negosyo sa mobile. Abutin ang mga customer nang direkta sa kanilang katutubong Messages app na may opisyal na logo at magagandang visual.",
  "overviewDesc2": "Alisin ang mga limitasyon ng simpleng text. Paganahin ang one-tap actions, pagbabahagi ng lokasyon, rich carousel cards, at awtomatikong fallback sa SMS upang walang customer na maiwan.",
  "check1": "Tiwala sa Beripikadong Nagpadala at Opisyal na Logo",
  "check2": "Interaktibong Carousel Cards at Action Buttons",
  "check3": "Awtomatikong Proteksyon ng SMS / MMS Fallback",
  "featuresBadge": "PANGUNAHING KAKAYAHAN",
  "featuresTitle": "Mayamang media. Beripikadong seguridad. Kahanga-hangang pakikipag-ugnayan.",
  "featuresSubtitle": "Lahat ng kailangan ng iyong marketing at customer service teams upang magpatupad ng RCS sa malawakang saklaw.",
  "features": [
    {
      "title": "Branding ng Beripikadong Nagpadala",
      "desc": "Ipakita ang iyong opisyal na logo ng kumpanya, mga kulay ng brand, at verified badge upang agad na magtiwala ang customer."
    },
    {
      "title": "High-Resolution Media Carousels",
      "desc": "Magpadala ng mga nai-swipe na card ng produkto na may mga larawan, presyo, at direktang link sa pagbili."
    },
    {
      "title": "One-Tap na Mga Pindutan ng Aksyon",
      "desc": "Pahintulutan ang mga customer na magbukas ng mapa, tumawag, mag-save ng mga appointment, o bumisita sa website sa isang pindot lamang."
    },
    {
      "title": "Iminungkahing Mabilisang Tugon",
      "desc": "Mag-alok ng mga button para sa mabilis na sagot upang makatugon ang mga user nang hindi na kailangang mag-type."
    },
    {
      "title": "Awtomatikong Fallback sa SMS ng Carrier",
      "desc": "Kung ang telepono ng tatanggap ay hindi sumusuporta sa RCS o walang koneksyon sa data, awtomatikong ipapadala ang mensahe bilang SMS."
    },
    {
      "title": "Real-Time na Read Receipts at Sukatan",
      "desc": "Subaybayan ang mga rate ng paghahatid, patunay ng pagbasa, at mga pag-click sa button sa real time."
    }
  ],
  "howItWorksBadge": "PAANO ITO GUMAGANA",
  "howItWorksTitle": "Ilunsad ang beripikadong mga kampanya ng RCS sa apat na simpleng hakbang.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Pag-verify at Pag-setup ng Brand",
      "desc": "Irehistro ang profile ng iyong brand, logo, kulay, at legal na dokumento sa mga opisyal na rehistro ng carrier."
    },
    {
      "step": "02",
      "title": "Disenyo ng mga Interaktibong Template",
      "desc": "Gumawa ng mga rich card, action button, at conversation branches sa aming visual template studio."
    },
    {
      "step": "03",
      "title": "Ikonekta ang Messaging APIs",
      "desc": "Isama ang aming pinag-isang messaging API na may awtomatikong fallback routing ng carrier sa SMS."
    },
    {
      "step": "04",
      "title": "Ilunsad at Suriin ang Resulta",
      "desc": "Magpadala ng mga rich marketing campaigns o transaction alerts na may kumpletong analytics sa bawat pag-click."
    }
  ],
  "useCasesBadge": "MGA HALIMBAWA NG PAGGAMIT",
  "useCasesTitle": "Hikayatin ang mga gumagamit ng mobile gamit ang mas makabuluhang pag-uusap.",
  "useCasesSubtitle": "Magbigay ng halaga gamit ang interaktibong komunikasyon sa mobile na nagpapataas ng conversion rate nang hanggang 3 beses.",
  "interactiveCard": {
    "badge": "BERIPIKADONG MENSAHE NG RCS",
    "message": "Naipadala na ang iyong package mula sa Apex Gear. Subaybayan ang paghahatid o baguhin ang mga tagubilin sa address.",
    "btnConfirm": "Subaybayan ang Package",
    "btnReschedule": "Baguhin ang Address"
  },
  "useCases": [
    {
      "title": "Boarding Passes at Digital Tickets",
      "desc": "Maghatid ng buong kulay na boarding pass na may live gate updates nang direkta sa screen ng telepono."
    },
    {
      "title": "E-Commerce Flash Sales",
      "desc": "Ipakita ang mga bagong koleksyon gamit ang mga nai-swipe na carousel card at pindutan ng agarang pagbili."
    },
    {
      "title": "Pag-iskedyul ng Appointment at Paalala",
      "desc": "Magpadala ng mga paalala sa kalendaryo na may mabilisang opsyon sa pagkumpirma o pag-reschedule."
    },
    {
      "title": "Two-Factor Authentication (2FA)",
      "desc": "Maghatid ng mga ligtas na one-time password na may opisyal na tatak ng kumpanya laban sa mga phishing scams."
    }
  ],
  "industriesBadge": "MGA INDUSTRIYANG PINAGLILINGKURAN",
  "industriesTitle": "RCS business messaging para sa lahat ng sektor ng merkado.",
  "industriesSubtitle": "Tumutulong sa mga nangungunang organisasyon na gawing makabago ang komunikasyon sa mga customer sa mobile.",
  "industries": [
    {
      "title": "Airlines at Hospitality",
      "desc": "Mga paalala sa check-in, digital boarding pass, at mga alok sa pag-upgrade ng kuwarto."
    },
    {
      "title": "Banking at FinTech",
      "desc": "Mga alerto sa panloloko, buwanang buod ng gastos, at agarang pagpapagana ng card."
    },
    {
      "title": "Retail at E-Commerce",
      "desc": "Pagtatanghal ng bagong koleksyon, mga abiso sa stock, at mga update sa pagpapadala ng order."
    },
    {
      "title": "Pangangalagang Pangkalusugan",
      "desc": "Mga paalala sa reseta, kumpirmasyon sa appointment sa klinika, at telemedicine check-ins."
    },
    {
      "title": "Automotive",
      "desc": "Mga alerto sa pagpapanatili ng sasakyan, abiso sa kaligtasan, at mga opsyon sa pag-renew ng lease."
    }
  ],
  "whyBadge": "BAKIT ANG AMING RCS PLATFORM",
  "whyTitle": "Bakit Pinipili ng mga Nangungunang Negosyo ang iNet RCS",
  "whySubtitle": "Inprastruktura ng pagmemensahe na kasing-tatag ng carrier na pinagkakatiwalaan ng pandaigdigang kumpanya.",
  "whyCards": {
    "secure": {
      "title": "Beripikadong Katapatan ng Brand",
      "description": "Tinitiyak ng anti-spoofing verification na protektado ang iyong kumpanya laban sa panloloko at pamemeke."
    },
    "cloud": {
      "title": "Pandaigdigang Direktang Koneksyon sa Carrier",
      "description": "Direktang koneksyon sa mga mobile operator sa North America, Europe, Asia, at Latin America."
    },
    "api": {
      "title": "Isang Pinag-isang API",
      "description": "Isang simpleng API endpoint ang humahawak ng RCS na may awtomatikong paglipat sa SMS nang walang dagdag na bayad."
    },
    "connectivity": {
      "title": "Garantisadong Pandaigdigang Paghahatid",
      "description": "Tinitiyak ng mga matatalinong fallback engine ang 100% pag-abot kahit anong modelo ng handset ng tatanggap."
    },
    "automated": {
      "title": "Interaktibong Automation Engine",
      "description": "Bumuo ng automated chatbot conversations na gumagabay sa mga customer mula sa tanong hanggang sa pagbili."
    }
  },
  "apiCard": {
    "title": "RCS Business Messaging API",
    "desc": "Magpadala ng rich cards, carousel templates, at quick reply actions na may awtomatikong SMS fallback."
  },
  "ctaBadge": "MAG-UPGRADE SA RCS NGAYON",
  "ctaTitle": "Bigyang-buhay ang komunikasyon ng iyong brand gamit ang RCS.",
  "ctaSubtitle": "Maghatid ng mas mayaman at nakakahimok na mobile messages na nagbubuo ng tiwala at nagpapataas ng benta.",
  "contactUs": "Magsimula sa RCS",
  "ctaFootnote": "Ganap na tugma sa Google Jibe at pandaigdigang ecosystem ng mga carrier"
};

const bn: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS বিজনেস মেসেজিং",
  "heroTitle": "সাধারণ SMS-কে রূপান্তর করুন সমৃদ্ধ ও সংলাপালাপী RCS-এ",
  "heroDesc": "যাচাইকৃত প্রেরক টিকমার্ক, উচ্চ রেজোলিউশনের ক্যারোজেল কার্ড, ইন্টারেক্টিভ কুইক-অ্যাকশন বোতাম এবং অ্যান্ড্রয়েড স্মার্টফোনের নেটিভ সমর্থনের সাথে মোবাইল মেসেজিংকে এক নতুন মাত্রায় নিয়ে যান।",
  "talkToExpert": "বিশেষজ্ঞের সাথে কথা বলুন",
  "exploreCapabilities": "সক্ষমতা অন্বেষণ করুন",
  "chatScreen": {
    "contactName": "স্কাইলাইন এক্সপ্রেস এয়ারওয়েজ",
    "status": "যাচাইকৃত RCS ব্র্যান্ড • টিকমার্ক",
    "msg1": "হ্যালো জর্ডান! জুরিখগামী আপনার ফ্লাইট SK-402 এর বোর্ডিং গেট B12-এ শুরু হয়েছে। আপনার ডিজিটাল বোর্ডিং পাস প্রস্তুত।",
    "time1": "07:30",
    "actionBtn": "বোর্ডিং পাস খুলুন →",
    "msg2": "অনেক ধন্যবাদ! আমি কি অতিরিক্ত লেগরুমের সিটে আপগ্রেড করতে পারি?",
    "time2": "07:31",
    "msg3": "সিট 12A (অতিরিক্ত লেগরুম) $25-এ উপলব্ধ। নিশ্চিত করতে নিচে ট্যাপ করুন!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "নেটিভ অ্যান্ড্রয়েড মেসেজ অ্যাপ",
    "secure": "যাচাইকৃত প্রেরক ব্র্যান্ড পরিচয়"
  },
  "overviewBadge": "পরবর্তী প্রজন্মের মোবাইল মেসেজিং",
  "overviewTitle": "কোনো অ্যাপ ডাউনলোড ছাড়াই অ্যাপের মতো সমৃদ্ধ ইন্টারঅ্যাক্টিভ অভিজ্ঞতা দিন।",
  "overviewDesc1": "রিচ কমিউনিকেশন সার্ভিসেস (RCS) হলো মোবাইল ডিভাইসে ব্যবসায়িক মেসেজিংয়ের আধুনিক বৈশ্বিক মানদণ্ড। যাচাইকৃত ব্র্যান্ডিং, লোগো এবং চিত্তাকর্ষক ভিজ্যুয়ালের মাধ্যমে গ্রাহকদের সাথে সরাসরি ফোনের মেসেজ অ্যাপে যুক্ত হন।",
  "overviewDesc2": "প্লেইন টেক্সটের সীমাবদ্ধতা দূর করুন। এক-ট্যাপে অ্যাকশন, লোকেশন শেয়ারিং, সমৃদ্ধ ক্যারোজেল কার্ড এবং স্বয়ংক্রিয় SMS ফলব্যাক সক্রিয় করুন যাতে কোনো গ্রাহকই বাদ না পড়েন।",
  "check1": "যাচাইকৃত প্রেরকের বিশ্বাস ও ব্র্যান্ড লোগো",
  "check2": "ইন্টারেক্টিভ ক্যারোজেল কার্ড ও অ্যাকশন বোতাম",
  "check3": "স্বয়ংক্রিয় SMS / MMS ফলব্যাক সুরক্ষা",
  "featuresBadge": "মূল সক্ষমতা",
  "featuresTitle": "সমৃদ্ধ মিডিয়া। যাচাইকৃত সুরক্ষা। অসাধারণ গ্রাহক সংযোগ।",
  "featuresSubtitle": "আপনার বিপণন এবং গ্রাহক সেবা দলের বৃহৎ পরিসরে RCS পরিচালনার জন্য প্রয়োজনীয় সকল সুবিধা।",
  "features": [
    {
      "title": "যাচাইকৃত প্রেরক ব্র্যান্ডিং",
      "desc": "গ্রাহকদের তাৎক্ষণিক আস্থা অর্জনের জন্য আপনার অফিশিয়াল কোম্পানির লোগো, ব্র্যান্ড কালার এবং ভেরিফাইড টিক চিহ্ন প্রদর্শন করুন।"
    },
    {
      "title": "উচ্চ রেজোলিউশনের মিডিয়া ক্যারোজেল",
      "desc": "ছবি, মূল্য এবং সরাসরি ক্রয়ের লিঙ্ক সহ স্ক্রোলযোগ্য ইন্টারেক্টিভ প্রোডাক্ট কার্ড পাঠান।"
    },
    {
      "title": "এক ট্যাপে প্রস্তাবিত অ্যাকশন বোতাম",
      "desc": "গ্রাহকদের এক ট্যাপেই ম্যাপ খোলা, কল করা, ক্যালেন্ডার ইভেন্ট সেভ করা বা ওয়েবসাইট দেখার সুবিধা দিন।"
    },
    {
      "title": "প্রস্তাবিত কুইক রিপ্লাই (Quick-Replies)",
      "desc": "সংলাপীয় কুইক-রিপ্লাই চিপ দিন যাতে ব্যবহারকারীরা কোনো টাইপ না করেই তাত্ক্ষণিক উত্তর দিতে পারেন।"
    },
    {
      "title": "অপারেটর পর্যায়ে স্বয়ংক্রিয় SMS ফলব্যাক",
      "desc": "যদি প্রাপকের ডিভাইসে RCS সমর্থন না করে বা ইন্টারনেট না থাকে, তবে বার্তাটি স্বয়ংক্রিয়ভাবে SMS হিসেবে পৌঁছায়।"
    },
    {
      "title": "রিয়েল-টাইম রিড রসিদ ও মেট্রিক্স",
      "desc": "রিয়েল টাইমে ডেলিভারি রেট, পড়ার রসিদ এবং বোতামে ক্লিক-থ্রু নিখুঁতভাবে পর্যবেক্ষণ করুন।"
    }
  ],
  "howItWorksBadge": "এটি যেভাবে কাজ করে",
  "howItWorksTitle": "চারটি সহজ ধাপে যাচাইকৃত RCS ক্যাম্পেইন পরিচালনা করুন।",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "ব্র্যান্ড যাচাইকরণ ও সেটআপ",
      "desc": "টেলিকম অপারেটরদের অফিসিয়াল রেজিস্ট্রিতে আপনার ব্র্যান্ড প্রোফাইল, লোগো, রঙ এবং আইনি নথিপত্র নিবন্ধন করুন।"
    },
    {
      "step": "02",
      "title": "ইন্টারেক্টিভ টেমপ্লেট ডিজাইন",
      "desc": "আমাদের ভিজ্যুয়াল টেমপ্লেট স্টুডিওতে রিচ কার্ড, অ্যাকশন বোতাম এবং কথোপকথন প্রবাহ তৈরি করুন।"
    },
    {
      "step": "03",
      "title": "মেসেজিং API সংযোগ",
      "desc": "স্বয়ংক্রিয় ক্যারিয়ার ফলব্যাক রাউটিং সহ আমাদের সমন্বিত মেসেজিং API যুক্ত করুন।"
    },
    {
      "step": "04",
      "title": "প্রচার ও ফলাফল বিশ্লেষণ",
      "desc": "বিস্তারিত ক্লিক টেলিমেট্রি সহ রিচ মার্কেটিং ক্যাম্পেইন প্রচার করুন বা লেনদেনের নোটিফিকেশন পাঠান।"
    }
  ],
  "useCasesBadge": "ব্যবহারের ক্ষেত্র",
  "useCasesTitle": "আকর্ষণীয় কথোপকথনের মাধ্যমে মোবাইল ব্যবহারকারীদের যুক্ত রাখুন।",
  "useCasesSubtitle": "ইন্টারেক্টিভ মোবাইল যোগাযোগের মাধ্যমে মূল্য সরবরাহ করুন যা রূপান্তর হার ৩ গুণ পর্যন্ত বৃদ্ধি করে।",
  "interactiveCard": {
    "badge": "যাচাইকৃত RCS বার্তা",
    "message": "Apex Gear থেকে আপনার পার্সেল পাঠানো হয়েছে। রিয়েল টাইমে ট্র্যাক করুন অথবা ডেলিভারি নির্দেশ পরিবর্তন করুন।",
    "btnConfirm": "পার্সেল ট্র্যাক করুন",
    "btnReschedule": "ঠিকানা পরিবর্তন করুন"
  },
  "useCases": [
    {
      "title": "বোর্ডিং পাস ও টিকিট",
      "desc": "সরাসরি ফোন স্ক্রিনে লাইভ গেট আপডেট সহ রঙিন ডিজিটাল বোর্ডিং পাস সরবরাহ করুন।"
    },
    {
      "title": "ই-কমার্স ফ্ল্যাশ সেলস",
      "desc": "সোয়াইপযোগ্য ক্যারোজেল কার্ড এবং তাত্ক্ষণিক ক্রয় বোতামের সাহায্যে নতুন পণ্য সম্ভার প্রদর্শন করুন।"
    },
    {
      "title": "অ্যাপয়েন্টমেন্ট শিডিউলিং ও রিমাইন্ডার",
      "desc": "ইন্টারেক্টিভ ক্যালেন্ডার রিমাইন্ডার পাঠান যা এক ট্যাপে নিশ্চিত বা পুনর্নির্ধারণ করা যায়।"
    },
    {
      "title": "টু-ফ্যাক্টর প্রমাণীকরণ (2FA)",
      "desc": "ফিশিং প্রতিরোধে অফিসিয়াল ব্র্যান্ড ওয়াটারমার্ক ও লোগো সহ সুরক্ষিত ওয়ান-টাইম পাসওয়ার্ড পাঠান।"
    }
  ],
  "industriesBadge": "যেসব শিল্পে আমরা সেবা দিই",
  "industriesTitle": "বিভিন্ন ব্যবসায়িক খাতের জন্য RCS বিজনেস মেসেজিং।",
  "industriesSubtitle": "স্মার্টফোনে গ্রাহকদের সাথে যোগাযোগের ধরন আধুনিকায়নে শীর্ষস্থানীয় সংস্থাগুলিকে সহায়তা করা।",
  "industries": [
    {
      "title": "এয়ারলাইন্স ও আতিথেয়তা",
      "desc": "ফ্লাইট চেক-ইন রিমাইন্ডার, ডিজিটাল বোর্ডিং পাস এবং হোটেল রুম আপগ্রেড অফার।"
    },
    {
      "title": "ব্যাংকিং ও ফিনটেক",
      "desc": "প্রতারণা প্রতিরোধ অ্যালার্ট, মাসিক খরচের বিবরণী এবং তাৎক্ষণিক কার্ড অ্যাক্টিভেশন।"
    },
    {
      "title": "খুচরা বিক্রয় ও ই-কমার্স",
      "desc": "নতুন পণ্যের প্রদর্শনী, স্টক ফিরে আসার অ্যালার্ট এবং ডেলিভারি ট্র্যাকিং আপডেট।"
    },
    {
      "title": "স্বাস্থ্যসেবা",
      "desc": "প্রেসক্রিপশন রিনিউয়াল রিমাইন্ডার, ক্লিনিক অ্যাপয়েন্টমেন্ট নিশ্চিতকরণ ও টেলিমেডিসিন চেক-ইন।"
    },
    {
      "title": "অটোমোটিভ",
      "desc": "পর্যায়ক্রমিক রক্ষণাবেক্ষণ অ্যালার্ট, সেফটি রিকল নোটিশ এবং লিজ রিনিউয়াল বিকল্প।"
    }
  ],
  "whyBadge": "কেন আমাদের RCS প্ল্যাটফর্ম",
  "whyTitle": "বিশ্বমানের প্রতিষ্ঠানগুলি কেন iNet RCS বেছে নেয়",
  "whySubtitle": "টেলিকম ক্যারিয়ার-গ্রেড মেসেজিং পরিকাঠামো যা বৈশ্বিক সংস্থাগুলির বিশ্বস্ত।",
  "whyCards": {
    "secure": {
      "title": "যাচাইকৃত ব্র্যান্ডের সত্যতা",
      "description": "নিশ্চিত অ্যান্টি-স্পুফিং সুরক্ষা আপনার ব্র্যান্ডকে ফিশিং ও নকল পরিচয় থেকে পুরোপুরি রক্ষা করে।"
    },
    "cloud": {
      "title": "বিশ্বব্যাপী সরাসরি টেলিকম সংযোগ",
      "description": "উত্তর আমেরিকা, ইউরোপ, এশিয়া ও ল্যাটিন আমেরিকার শীর্ষ মোবাইল নেটওয়ার্ক অপারেটরদের সাথে সরাসরি রুট।"
    },
    "api": {
      "title": "একক সমন্বিত API",
      "description": "একটি সহজ API এন্ডপয়েন্ট কোনো অতিরিক্ত খরচ ছাড়া SMS-এ স্বয়ংক্রিয় ফলব্যাক সহ RCS পরিচালনা করে।"
    },
    "connectivity": {
      "title": "নিশ্চিত গ্লোবাল ডেলিভারি",
      "description": "স্মার্ট ফলব্যাক ইঞ্জিন গ্রাহকের ফোনের মডেল নির্বিশেষে ১০০% ডেলিভারি নিশ্চিত করে।"
    },
    "automated": {
      "title": "ইন্টারেক্টিভ অটোমেশন ইঞ্জিন",
      "description": "স্বয়ংক্রিয় চ্যাটবট ডায়ালগ তৈরি করুন যা গ্রাহকদের প্রশ্ন থেকে শুরু করে সফল লেনদেন পর্যন্ত পরিচালিত করে।"
    }
  },
  "apiCard": {
    "title": "RCS বিজনেস মেসেজিং API",
    "desc": "স্বয়ংক্রিয় SMS ফলব্যাক ব্যবস্থা সহ রিচ কার্ড, ক্যারোজেল টেমপ্লেট ও অ্যাকশন বোতাম সহজে পাঠান।"
  },
  "ctaBadge": "এখনই RCS-এ আপগ্রেড করুন",
  "ctaTitle": "RCS-এর মাধ্যমে আপনার ব্র্যান্ড যোগাযোগকে আরও প্রাণবন্ত করুন।",
  "ctaSubtitle": "সমৃদ্ধ ও চিত্তাকর্ষক মোবাইল মেসেজ প্রদান করুন যা গ্রাহকের আস্থা গড়ে তোলে এবং রূপান্তর বৃদ্ধি করে।",
  "contactUs": "RCS দিয়ে শুরু করুন",
  "ctaFootnote": "Google Jibe এবং বৈশ্বিক মোবাইল অপারেটর ইকোসিস্টেমের সাথে সম্পূর্ণ সামঞ্জস্যপূর্ণ"
};

const ta: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS பிசினஸ் மெசேஜிங்",
  "heroTitle": "வழக்கமான SMS-ஐ செழுமையான உரையாடல் RCS-ஆக மாற்றுங்கள்",
  "heroDesc": "சரிபார்க்கப்பட்ட அனுப்புநர் சரிபார்ப்பு அடையாளங்கள், உயர் தெளிவுத்திறன் கொண்ட கொணர்வி அட்டைகள், ஊடாடும் விரைவு-செயல் பொத்தான்கள் மற்றும் ஆண்ட்ராய்டு ஸ்மார்ட்போன்களின் பூர்வீக ஆதரவுடன் மொபைல் மெசேஜிங்கை மேம்படுத்துங்கள்.",
  "talkToExpert": "நிபுணரிடம் பேசுங்கள்",
  "exploreCapabilities": "திறன்களை ஆராயுங்கள்",
  "chatScreen": {
    "contactName": "ஸ்கைலைன் எக்ஸ்பிரஸ் ஏர்வேஸ்",
    "status": "சரிபார்க்கப்பட்ட RCS பிராண்ட் • அதிகாரப்பூர்வ குறி",
    "msg1": "வணக்கம் ஜோர்டான்! சூரிச்சிற்கான உங்கள் விமானம் SK-402 கேட் B12 இல் போர்டிங் தொடங்கப்பட்டுள்ளது. உங்கள் டிஜிட்டல் போர்டிங் பாஸ் தயாராக உள்ளது.",
    "time1": "07:30",
    "actionBtn": "போர்டிங் பாஸைத் திறக்கவும் →",
    "msg2": "மிக்க நன்றி! கூடுதல் கால் இடம் கொண்ட இருக்கைக்கு நான் மேம்படுத்தலாமா?",
    "time2": "07:31",
    "msg3": "இருக்கை 12A (கூடுதல் இடம்) $25 இல் கிடைக்கிறது. உடனடியாக உறுதிப்படுத்த கீழே தட்டவும்!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "ஆண்ட்ராய்டு இயல்புநிலை செய்திகள் செயலி",
    "secure": "சரிபார்க்கப்பட்ட அனுப்புநர் பிராண்டிங்"
  },
  "overviewBadge": "அடுத்த தலைமுறை மொபைல் மெசேஜிங்",
  "overviewTitle": "எந்த ஒரு செயலியையும் பதிவிறக்காமல் செயலி போன்ற வளமான ஊடாடும் அனுபவங்களை வழங்குங்கள்.",
  "overviewDesc1": "ரிச் கம்யூனிகேஷன் சர்வீசஸ் (RCS) என்பது ஸ்மார்ட்போன்களில் வணிகச் செய்திகளுக்கான நவீன உலகளாவிய தரநிலையாகும். அதிகாரப்பூர்வ லோகோ மற்றும் வண்ணமயமான காட்சிகளுடன் வாடிக்கையாளர்களை அவர்களின் செய்திகள் செயலியில் நேரடியாக அணுகுங்கள்.",
  "overviewDesc2": "வெறும் உரையின் வரம்புகளைத் தகர்த்தெறியுங்கள். ஒருமுறை தட்டிச் செயல்படுத்துதல், இருப்பிடப் பகிர்வு, கொணர்வி அட்டைகள் மற்றும் எந்த வாடிக்கையாளரும் விடுபடாமல் இருக்க தானியங்கி SMS ஃபால்பேக்கை இயக்குங்கள்.",
  "check1": "சரிபார்க்கப்பட்ட அனுப்புநரின் நம்பிக்கை & லோகோ",
  "check2": "ஊடாடும் கொணர்வி அட்டைகள் & செயல் பொத்தான்கள்",
  "check3": "தானியங்கி SMS / MMS ஃபால்பேக் பாதுகாப்பு",
  "featuresBadge": "முக்கிய திறன்கள்",
  "featuresTitle": "செழுமையான மீடியா. சரிபார்க்கப்பட்ட பாதுகாப்பு. இணையற்ற ஈடுபாடு.",
  "featuresSubtitle": "உங்கள் மார்க்கெட்டிங் மற்றும் வாடிக்கையாளர் சேவை குழுக்கள் RCS-ஐ பெரிய அளவில் செயல்படுத்த தேவையான அனைத்தும்.",
  "features": [
    {
      "title": "சரிபார்க்கப்பட்ட அனுப்புநர் பிராண்டிங்",
      "desc": "வாடிக்கையாளர் நம்பிக்கையை உடனடியாகப் பெற உங்களின் அதிகாரப்பூர்வ நிறுவன லோகோ, பிராண்ட் வண்ணங்கள் மற்றும் சரிபார்ப்புக் குறியைக் காட்டுங்கள்."
    },
    {
      "title": "உயர் தெளிவுத்திறன் கொண்ட மீடியா கொணர்வி",
      "desc": "படங்கள், விலைகள் மற்றும் நேரடி கொள்முதல் இணைப்புகளுடன் உருட்டக்கூடிய ஊடாடும் தயாரிப்பு அட்டைகளை அனுப்புங்கள்."
    },
    {
      "title": "ஒரே தட்டலில் பரிந்துரைக்கப்பட்ட செயல் பொத்தான்கள்",
      "desc": "வாடிக்கையாளர்கள் வரைபடங்களைத் திறக்க, எண்களை டயல் செய்ய, நிகழ்வுகளைச் சேமிக்க அல்லது இணையதளங்களைப் பார்வையிட ஒரு தட்டலில் உதவுங்கள்."
    },
    {
      "title": "பரிந்துரைக்கப்பட்ட விரைவு பதில்கள்",
      "desc": "பயனர்கள் எதையும் தட்டச்சு செய்யாமல் எளிதாக பதிலளிக்க முன்வரையறுக்கப்பட்ட பதில் சில்லுகளை வழங்குங்கள்."
    },
    {
      "title": "தானியங்கி நெட்வொர்க் SMS ஃபால்பேக்",
      "desc": "பெறுநரின் சாதனம் RCS-ஐ ஆதரிக்கவில்லை என்றால் அல்லது இணையம் இல்லை என்றால், செய்தி தானாகவே நிலையான SMS ஆக அனுப்பப்படும்."
    },
    {
      "title": "நேரலை வாசிப்பு ரசீதுகள் & அளவீடுகள்",
      "desc": "செய்தி விநியோக விகிதங்கள், வாசிப்பு உறுதிப்படுத்தல்கள் மற்றும் பொத்தான் கிளிக்குகளை உடனுக்குடன் கண்காணிக்கவும்."
    }
  ],
  "howItWorksBadge": "இது எவ்வாறு செயல்படுகிறது",
  "howItWorksTitle": "நான்கு எளிய படிகளில் சரிபார்க்கப்பட்ட RCS பிரச்சாரங்களைத் தொடங்குங்கள்.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "பிராண்ட் சரிபார்ப்பு & அமைப்பு",
      "desc": "தொலைத்தொடர்பு நிறுவனங்களின் அதிகாரப்பூர்வ பதிவேடுகளில் உங்கள் பிராண்ட் சுயவிவரம், லோகோ, வண்ணங்கள் மற்றும் சட்ட ஆவணங்களைப் பதிவு செய்யுங்கள்."
    },
    {
      "step": "02",
      "title": "ஊடாடும் டெம்ப்ளேட்களை வடிவமைத்தல்",
      "desc": "எங்களின் காட்சி டெம்ப்ளேட் ஸ்டுடியோவில் மீடியா கார்டுகள், செயல் பொத்தான்கள் மற்றும் உரையாடல் கிளைகளை உருவாக்குங்கள்."
    },
    {
      "step": "03",
      "title": "மெசேஜிங் API இணைத்தல்",
      "desc": "தானியங்கி SMS ஃபால்பேக் ரூட்டிங்குடன் கூடிய எங்களின் ஒருங்கிணைந்த மெசேஜிங் API-ஐ உங்கள் தளத்துடன் இணையுங்கள்."
    },
    {
      "step": "04",
      "title": "வெளியிடுதல் மற்றும் பகுப்பாய்வு",
      "desc": "முழுமையான கிளிக் புள்ளிவிவரங்களுடன் கூடிய விழிப்புணர்வு பிரச்சாரங்களை அல்லது பரிவர்த்தனை விழிப்பூட்டல்களை ஒளிபரப்புங்கள்."
    }
  ],
  "useCasesBadge": "பயன்பாட்டு வழக்குகள்",
  "useCasesTitle": "செழுமையான உரையாடல் அனுபவங்களுடன் மொபைல் பயனர்களை ஈர்க்கவும்.",
  "useCasesSubtitle": "மாற்று விகிதங்களை 3 மடங்கு வரை உயர்த்தும் ஊடாடும் மொபைல் தகவல்தொடர்புகள் மூலம் உண்மையான மதிப்பை வழங்குங்கள்.",
  "interactiveCard": {
    "badge": "சரிபார்க்கப்பட்ட RCS செய்தி",
    "message": "Apex Gear-லிருந்து உங்கள் பார்சல் அனுப்பப்பட்டுள்ளது. நிகழ்நேரத்தில் கண்காணிக்கவும் அல்லது விநியோக வழிமுறைகளை மாற்றவும்.",
    "btnConfirm": "பார்சலைக் கண்காணிக்கவும்",
    "btnReschedule": "முகவரியை மாற்றவும்"
  },
  "useCases": [
    {
      "title": "போர்டிங் பாஸ்கள் & டிக்கெட்டுகள்",
      "desc": "நேரடி கேட் புதுப்பிப்புகளுடன் கூடிய வண்ணமயமான டிஜிட்டல் போர்டிங் பாஸ்களை தொலைபேசி திரைக்கு நேரடியாக வழங்குங்கள்."
    },
    {
      "title": "இ-காமர்ஸ் ஃபிளாஷ் விற்பனை",
      "desc": "ஸ்வைப் செய்யக்கூடிய கொணர்வி அட்டைகள் மற்றும் உடனடி வாங்குதல் பொத்தான்களுடன் புதிய தயாரிப்புகளைக் காட்சிப்படுத்துங்கள்."
    },
    {
      "title": "சந்திப்பு திட்டமிடல் & நினைவூட்டல்கள்",
      "desc": "ஒரே தட்டலில் உறுதிப்படுத்தல் அல்லது மறுதிட்டமிடலை அனுமதிக்கும் ஊடாடும் காலண்டர் நினைவூட்டல்களை அனுப்புங்கள்."
    },
    {
      "title": "இரு காரணி அங்கீகாரம் (2FA)",
      "desc": "ஃபிஷிங் மோசடிகளைத் தடுக்க அதிகாரப்பூர்வ பிராண்ட் வாட்டர்மார்க்குடன் கூடிய பாதுகாப்பான ஒருமுறை கடவுச்சொற்களை வழங்குங்கள்."
    }
  ],
  "industriesBadge": "நாங்கள் சேவை செய்யும் துறைகள்",
  "industriesTitle": "அனைத்து சந்தைப் பிரிவுகளுக்குமான RCS வணிக மெசேஜிங்.",
  "industriesSubtitle": "ஸ்மார்ட்போன்களில் நுகர்வோர் தொடர்புகளை நவீனமயமாக்க முன்னணி நிறுவனங்களுக்கு உதவுகிறோம்.",
  "industries": [
    {
      "title": "விமானப் போக்குவரத்து & விருந்தோம்பல்",
      "desc": "விமான செக்-இன் நினைவூட்டல்கள், டிஜிட்டல் போர்டிங் பாஸ்கள் மற்றும் அறை மேம்படுத்தல் அறிவிப்புகள்."
    },
    {
      "title": "வங்கி & ஃபின்டெக்",
      "desc": "மோசடி பரிவர்த்தனை விழிப்பூட்டல்கள், மாதாந்திர செலவு சுருக்கங்கள் மற்றும் உடனடி கார்டு செயல்படுத்தல்."
    },
    {
      "title": "சில்லறை வணிகம் & இ-காமர்ஸ்",
      "desc": "புதிய தயாரிப்பு வெளியீடுகள், கையிருப்பு நினைவூட்டல்கள் மற்றும் டெலிவரி நிலை அறிவிப்புகள்."
    },
    {
      "title": "சுகாதாரம் & மருத்துவம்",
      "desc": "மருந்து சீட்டு நினைவூட்டல்கள், மருத்துவமனை சந்திப்பு உறுதிப்படுத்தல்கள் மற்றும் தொலைமருத்துவ செக்-இன்."
    },
    {
      "title": "வாகனத் துறை",
      "desc": "பராமரிப்பு நினைவூட்டல்கள், பாதுகாப்பு திரும்பப் பெறுதல் அறிவிப்புகள் மற்றும் குத்தகை புதுப்பித்தல் விருப்பங்கள்."
    }
  ],
  "whyBadge": "எங்கள் RCS தளத்தை ஏன் தேர்வு செய்ய வேண்டும்",
  "whyTitle": "முன்னணி நிறுவனங்கள் iNet RCS-ஐ ஏன் தேர்வு செய்கின்றன",
  "whySubtitle": "உலகளாவிய நிறுவனங்கள் நம்பும் தொலைத்தொடர்பு தரத்திலான மெசேஜிங் கட்டமைப்பு.",
  "whyCards": {
    "secure": {
      "title": "சரிபார்க்கப்பட்ட பிராண்ட் நம்பகத்தன்மை",
      "description": "உறுதிப்படுத்தப்பட்ட போலி எதிர்ப்பு சரிபார்ப்பு உங்கள் பிராண்டை ஆள்மாறாட்ட மோசடிகளிலிருந்து பாதுகாக்கிறது."
    },
    "cloud": {
      "title": "உலகளாவிய நேரடி நெட்வொர்க் இணைப்புகள்",
      "description": "வட அமெரிக்கா, ஐரோப்பா, ஆசியா மற்றும் லத்தீன் அமெரிக்காவில் உள்ள மொபைல் நெட்வொர்க் ஆபரேட்டர்களுடன் நேரடி இணைப்புகள்."
    },
    "api": {
      "title": "ஒருங்கிணைந்த ஒற்றை API",
      "description": "ஒரு எளிய API முனை இரட்டை கட்டணங்கள் இல்லாமல் தானியங்கி SMS ஃபால்பேக்குடன் RCS-ஐக் கையாளுகிறது."
    },
    "connectivity": {
      "title": "உத்தரவாதமான உலகளாவிய விநியோகம்",
      "description": "ஸ்மார்ட் ஃபால்பேக் இயந்திரங்கள் வாடிக்கையாளரின் மொபைல் மாடல் எதுவாக இருந்தாலும் 100% சென்றடைவதை உறுதி செய்கின்றன."
    },
    "automated": {
      "title": "ஊடாடும் ஆட்டோமேஷன் இயந்திரம்",
      "description": "வாடிக்கையாளர்களை ஆரம்பக் கேள்வி முதல் இறுதி நடவடிக்கை வரை வழிநடத்தும் தானியங்கி சாட்போட் உரையாடல்களை உருவாக்குங்கள்."
    }
  },
  "apiCard": {
    "title": "RCS பிசினஸ் மெசேஜிங் API",
    "desc": "தானியங்கி SMS ஃபால்பேக் ஆதரவுடன் ரிச் கார்டுகள், கொணர்வி டெம்ப்ளேட்கள் மற்றும் விரைவு பதில்களை எளிதாக அனுப்புங்கள்."
  },
  "ctaBadge": "RCS-க்கு மேம்படுத்துங்கள்",
  "ctaTitle": "RCS மூலம் உங்கள் பிராண்ட் தகவல்தொடர்புக்கு புத்துயிர் கொடுங்கள்.",
  "ctaSubtitle": "வாடிக்கையாளர் நம்பிக்கையை வென்று மாற்றங்களை அதிகரிக்கும் செழுமையான மற்றும் ஊடாடும் மொபைல் செய்திகளை இப்போதே வழங்குங்கள்.",
  "contactUs": "RCS-ஐத் தொடங்குங்கள்",
  "ctaFootnote": "Google Jibe மற்றும் உலகளாவிய தொலைத்தொடர்பு நிறுவன சுற்றுச்சூழல் அமைப்புடன் முழு இணக்கத்தன்மை கொண்டது"
};

const te: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS బిజినెస్ మెసేజింగ్",
  "heroTitle": "సాధారణ SMSను ఆకట్టుకునే సంభాషణాత్మక RCSగా మార్చండి",
  "heroDesc": "ధృవీకరించబడిన పంపినవారి చెక్‌మార్క్‌లు, అధిక-రిజల్యూషన్ రంగుల రంగుల రంగుల రంగుల రంగుల కార్డులు, ఇంటరాక్టివ్ త్వరిత-చర్య బటన్‌లు మరియు ఆండ్రాయిడ్ స్మార్ట్‌ఫోన్‌ల స్థానిక మద్దతుతో మొబైల్ మెసేజింగ్‌ను అత్యున్నత స్థాయికి తీసుకెళ్లండి.",
  "talkToExpert": "నిపుణుడితో మాట్లాడండి",
  "exploreCapabilities": "సామర్థ్యాలను అన్వేషించండి",
  "chatScreen": {
    "contactName": "స్కైలైన్ ఎక్స్‌ప్రెస్ ఎయిర్‌వేస్",
    "status": "ధృవీకరించబడిన RCS బ్రాండ్ • అధికారిక మార్క్",
    "msg1": "హలో జోర్డాన్! జ్యూరిచ్‌కు మీ విమానం SK-402 బోర్డింగ్ గేట్ B12 వద్ద ప్రారంభమైంది. మీ డిజిటల్ బోర్డింగ్ పాస్ సిద్ధంగా ఉంది.",
    "time1": "07:30",
    "actionBtn": "బోర్డింగ్ పాస్ తెరవండి →",
    "msg2": "చాలా ధన్యవాదాలు! అదనపు లెగ్‌రూమ్ ఉన్న సీటుకు నేను అప్‌గ్రేడ్ కావచ్చా?",
    "time2": "07:31",
    "msg3": "సీట్ 12A (అదనపు స్థలం) $25 వద్ద అందుబాటులో ఉంది. వెంటనే నిర్ధారించడానికి క్రింద నొక్కండి!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "స్థానిక ఆండ్రాయిడ్ మెసేజెస్ యాప్",
    "secure": "ధృవీకరించబడిన పంపినవారి బ్రాండ్ గుర్తింపు"
  },
  "overviewBadge": "తదుపరి తరం మొబైల్ మెసేజింగ్",
  "overviewTitle": "ప్రత్యేక యాప్‌ను ఇన్‌స్టాల్ చేయనవసరం లేకుండానే యాప్ లాంటి ఇంటరాక్టివ్ అనుభవాన్ని అందించండి.",
  "overviewDesc1": "రిచ్ కమ్యూనికేషన్ సర్వీసెస్ (RCS) అనేది స్మార్ట్‌ఫోన్‌లలో వ్యాపార సందేశాల కోసం ఆధునిక అంతర్జాతీయ ప్రమాణం. అధికారిక లోగో మరియు నాణ్యమైన విజువల్స్‌తో మీ కస్టమర్లను వారి మెసేజెస్ యాప్‌లో నేరుగా చేరుకోండి.",
  "overviewDesc2": "సాధారణ టెక్స్ట్ పరిమితులను అధిగమించండి. సింగిల్-ట్యాప్ చర్యలు, స్థాన భాగస్వామ్యం, స్క్రోల్ చేయగల కార్డులు మరియు స్వయంచాలక SMS ఫాల్‌బ్యాక్‌ను ప్రారంభించడం ద్వారా ఏ కస్టమర్‌నూ మిస్ కాకుండా చూసుకోండి.",
  "check1": "ధృవీకరించబడిన పంపినవారి విశ్వసనీయత & అధికారిక లోగో",
  "check2": "ఇంటరాక్టివ్ రంగుల కార్డులు & త్వరిత చర్య బటన్‌లు",
  "check3": "స్వయంచాలక SMS / MMS ఫాల్‌బ్యాక్ రక్షణ",
  "featuresBadge": "కీలక సామర్థ్యాలు",
  "featuresTitle": "రిచ్ మీడియా. ధృవీకరించబడిన భద్రత. అద్భుతమైన కస్టమర్ ఎంగేజ్‌మెంట్.",
  "featuresSubtitle": "మీ మార్కెటింగ్ మరియు కస్టమర్ కేర్ బృందాలు విస్తృత స్థాయిలో RCSని అమలు చేయడానికి అవసరమైనవన్నీ.",
  "features": [
    {
      "title": "ధృవీకరించబడిన బ్రాండింగ్",
      "desc": "కస్టమర్లలో తక్షణ నమ్మకాన్ని కలిగించడానికి మీ అధికారిక కంపెనీ లోగో, బ్రాండ్ రంగులు మరియు వెరిఫైడ్ టిక్‌ను ప్రదర్శించండి."
    },
    {
      "title": "హై-రిజల్యూషన్ మీడియా కార్డులు",
      "desc": "చిత్రాలు, ధరలు మరియు ప్రత్యక్ష కొనుగోలు లింక్‌లతో స్క్రోల్ చేయగల ఇంటరాక్టివ్ ప్రోడక్ట్ కార్డులను పంపండి."
    },
    {
      "title": "వన్-ట్యాప్ సూచించిన చర్య బటన్‌లు",
      "desc": "కస్టమర్లు మ్యాప్‌లను తెరవడానికి, కాల్స్ చేయడానికి, క్యాలెండర్ ఈవెంట్‌లను సేవ్ చేయడానికి ఒకే ట్యాప్‌తో సులభతరం చేయండి."
    },
    {
      "title": "సూచించిన శీఘ్ర సమాధానాలు (Quick-Reply)",
      "desc": "వినియోగదారులు టైప్ చేయకుండానే తక్షణమే సమాధానం ఇవ్వడానికి సంభాషణా చిప్‌లను అందించండి."
    },
    {
      "title": "ఆపరేటర్ స్థాయి ఆటోమేటిక్ SMS ఫాల్‌బ్యాక్",
      "desc": "స్వీకర్త పరికరం RCSని సపోర్ట్ చేయకపోతే లేదా ఇంటర్నెట్ లేకపోతే, సందేశం స్వయంచాలకంగా SMSగా చేరుతుంది."
    },
    {
      "title": "రియల్ టైమ్ చదివిన రసీదులు & విశ్లేషణలు",
      "desc": "సందేశాల డెలివరీ రేట్లు, రీడ్ రసీదులు మరియు బటన్ క్లిక్‌లను నిజ సమయంలో ఖచ్చితంగా పర్యవేక్షించండి."
    }
  ],
  "howItWorksBadge": "ఇది ఎలా పనిచేస్తుంది",
  "howItWorksTitle": "నాలుగు సాధారణ దశల్లో ధృవీకరించబడిన RCS ప్రచారాలను ప్రారంభించండి.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "బ్రాండ్ ధృవీకరణ & సెటప్",
      "desc": "టెలికాం ఆపరేటర్ల అధికారిక రిజిస్ట్రీలలో మీ బ్రాండ్ ప్రొఫైల్, లోగో, రంగులు మరియు చట్టపరమైన పత్రాలను నమోదు చేయండి."
    },
    {
      "step": "02",
      "title": "ఇంటరాక్టివ్ టెంప్లేట్‌ల రూపకల్పన",
      "desc": "మా విజువల్ టెంప్లేట్ స్టూడియోలో మీడియా కార్డులు, యాక్షన్ బటన్‌లు మరియు సంభాషణ ప్రవాహాలను సృష్టించండి."
    },
    {
      "step": "03",
      "title": "మెసేజింగ్ API అనుసంధానం",
      "desc": "ఆటోమేటిక్ ఫాల్‌బ్యాక్ రూటింగ్‌తో మా ఏకీకృత మెసేజింగ్ APIని మీ సిస్టమ్‌లతో అనుసంధానించండి."
    },
    {
      "step": "04",
      "title": "ప్రచారం & ఫలితాల విశ్లేషణ",
      "desc": "పూర్తి క్లిక్ విశ్లేషణలతో రిచ్ మార్కెటింగ్ ప్రచారాలను నిర్వహించండి లేదా లావాదేవీ నోటిఫికేషన్‌లను పంపండి."
    }
  ],
  "useCasesBadge": "ఉపయోగ సందర్భాలు",
  "useCasesTitle": "ఆకర్షణీయమైన సంభాషణ అనుభవాలతో మొబైల్ వినియోగదారులను నిమగ్నం చేయండి.",
  "useCasesSubtitle": "మార్పిడి రేట్లను 3 రెట్లు పెంచే ఇంటరాక్టివ్ మొబైల్ కమ్యూనికేషన్ల ద్వారా నిజమైన విలువను అందించండి.",
  "interactiveCard": {
    "badge": "ధృవీకరించబడిన RCS సందేశం",
    "message": "Apex Gear నుండి మీ పార్శిల్ పంపబడింది. లైవ్ డెలివరీని ట్రాక్ చేయండి లేదా డెలివరీ సూచనలను మార్చండి.",
    "btnConfirm": "పార్శిల్‌ను ట్రాక్ చేయండి",
    "btnReschedule": "చిరునామా మార్చండి"
  },
  "useCases": [
    {
      "title": "బోర్డింగ్ పాస్‌లు & టిక్కెట్లు",
      "desc": "లైవ్ గేట్ అప్‌డేట్‌లతో పూర్తి-రంగు డిజిటల్ బోర్డింగ్ పాస్‌లను నేరుగా ఫోన్ స్క్రీన్‌పై అందించండి."
    },
    {
      "title": "ఇ-కామర్స్ ఫ్లాష్ అమ్మకాలు",
      "desc": "స్వైప్ చేయగల రంగుల కార్డులు మరియు తక్షణ కొనుగోలు బటన్‌లతో సరికొత్త ప్రోడక్ట్ కలెక్షన్‌లను ప్రదర్శించండి."
    },
    {
      "title": "అపాయింట్‌మెంట్ షెడ్యూలింగ్ & రిమైండర్‌లు",
      "desc": "ఒకే ట్యాప్‌తో నిర్ధారణ లేదా రీషెడ్యూల్ అనుమతించే ఇంటరాక్టివ్ క్యాలెండర్ రిమైండర్‌లను పంపండి."
    },
    {
      "title": "రెండు-దశల ప్రమాణీకరణ (2FA)",
      "desc": "ఫిషింగ్ మోసాలను నిరోధించడానికి అధికారిక బ్రాండ్ వాటర్‌మార్క్‌తో సురక్షితమైన వన్-టైమ్ పాస్‌వర్డ్‌లను అందించండి."
    }
  ],
  "industriesBadge": "మేము సేవలందించే రంగాలు",
  "industriesTitle": "అన్ని మార్కెట్ విభాగాల కోసం RCS బిజినెస్ మెసేజింగ్.",
  "industriesSubtitle": "స్మార్ట్‌ఫోన్‌లలో వినియోగదారులతో కమ్యూనికేషన్‌ను ఆధునీకరించడంలో అగ్రగామి సంస్థలకు సహాయం చేస్తున్నాము.",
  "industries": [
    {
      "title": "ఎయిర్‌లైన్స్ & హాస్పిటాలిటీ",
      "desc": "విమాన చెక్-ఇన్ రిమైండర్‌లు, డిజిటల్ బోర్డింగ్ పాస్‌లు మరియు హోటల్ రూమ్ అప్‌గ్రేడ్ ఆఫర్‌లు."
    },
    {
      "title": "బ్యాంకింగ్ & ఫిన్‌టెక్",
      "desc": "మోసపూరిత లావాదేవీ హెచ్చరికలు, నెలవారీ ఖర్చు సారాంశాలు మరియు తక్షణ కార్డ్ యాక్టివేషన్."
    },
    {
      "title": "రిటైల్ & ఇ-కామర్స్",
      "desc": "కొత్త ఉత్పత్తుల ప్రదర్శన, స్టాక్ అలర్ట్‌లు మరియు ఆర్డర్ షిప్పింగ్ అప్‌డేట్‌లు."
    },
    {
      "title": "ఆరోగ్య సంరక్షణ",
      "desc": "ప్రిస్క్రిప్షన్ రిమైండర్‌లు, క్లినిక్ అపాయింట్‌మెంట్ నిర్ధారణలు మరియు టెలిమెడిసిన్ నమోదులు."
    },
    {
      "title": "ఆటోమోటివ్",
      "desc": "సర్వీస్ మెయింటెనెన్స్ అలర్ట్‌లు, సేఫ్టీ రీకాల్ నోటీసులు మరియు లీజ్ రెన్యూవల్ ఎంపికలు."
    }
  ],
  "whyBadge": "మా RCS ప్లాట్‌ఫారమ్‌ను ఎందుకు ఎంచుకోవాలి",
  "whyTitle": "ప్రపంచ అగ్రశ్రేణి సంస్థలు iNet RCSను ఎందుకు ఎంచుకుంటాయి",
  "whySubtitle": "గ్లోబల్ ఎంటర్‌ప్రైజెస్ విశ్వసించే క్యారియర్-గ్రేడ్ మెసేజింగ్ మౌలిక సదుపాయాలు.",
  "whyCards": {
    "secure": {
      "title": "ధృవీకరించబడిన బ్రాండ్ సమగ్రత",
      "description": "గ్యారెంటీడ్ యాంటీ-స్పూఫింగ్ ధృవీకరణ మీ బ్రాండ్‌ను మోసపూరిత వ్యక్తీకరణల నుండి కాపాడుతుంది."
    },
    "cloud": {
      "title": "గ్లోబల్ డైరెక్ట్ టెలికాం కనెక్షన్‌లు",
      "description": "ఉత్తర అమెరికా, యూరప్, ఆసియా మరియు లాటిన్ అమెరికాలోని మొబైల్ నెట్‌వర్క్ ఆపరేటర్లతో ప్రత్యక్ష మార్గాలు."
    },
    "api": {
      "title": "ఏకీకృత సింగిల్ API",
      "description": "ఒకే సరళమైన API ఎండ్‌పాయింట్ అదనపు ఛార్జీలు లేకుండా SMSకి ఆటోమేటిక్ ఫాల్‌బ్యాక్‌తో RCSని నిర్వహిస్తుంది."
    },
    "connectivity": {
      "title": "గ్యారెంటీడ్ గ్లోబల్ డెలివరీ",
      "description": "స్మార్ట్ ఫాల్‌బ్యాక్ ఇంజిన్‌లు మొబైల్ మోడల్‌తో సంబంధం లేకుండా 100% సందేశ చేరికను నిర్ధారిస్తాయి."
    },
    "automated": {
      "title": "ఇంటరాక్టివ్ ఆటోమేషన్ ఇంజిన్",
      "description": "కస్టమర్‌లను ప్రశ్న నుండి కొనుగోలు వరకు సజావుగా నడిపించే ఆటోమేటెడ్ చాట్‌బాట్ ప్రవాహాలను నిర్మించండి."
    }
  },
  "apiCard": {
    "title": "RCS బిజినెస్ మెసేజింగ్ API",
    "desc": "ఆటోమేటిక్ SMS ఫాల్‌బ్యాక్‌తో రిచ్ కార్డులు, రంగుల టెంప్లేట్‌లు మరియు శీఘ్ర చర్యలను పంపండి."
  },
  "ctaBadge": "RCSకి ఇప్పుడే అప్‌గ్రేడ్ చేయండి",
  "ctaTitle": "RCSతో మీ బ్రాండ్ కమ్యూనికేషన్‌కు జీవం పోయండి.",
  "ctaSubtitle": "కస్టమర్ నమ్మకాన్ని గెలుచుకునే మరియు అమ్మకాలను రెట్టింపు చేసే ఆకర్షణీయమైన మొబైల్ సందేశాలను అందించండి.",
  "contactUs": "RCSతో ప్రారంభించండి",
  "ctaFootnote": "Google Jibe మరియు ప్రపంచ టెలికాం ఆపరేటర్ ఎకోసిస్టమ్‌తో పూర్తి అనుకూలత"
};

const mr: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS बिझनेस मेसेजिंग",
  "heroTitle": "साध्या SMS चे समृद्ध आणि संवादात्मक RCS मध्ये रूपांतर करा",
  "heroDesc": "प्रमाणित प्रेषक चेकमार्क, उच्च रिझोल्यूशन कॅरोसेल कार्ड्स, परस्परसंवादी जलद-कृती बटणे आणि अँड्रॉइड स्मार्टफोनच्या मूळ समर्थनासह मोबाइल मेसेजिंगचा अनुभव अधिक समृद्ध करा.",
  "talkToExpert": "तज्ञांशी चर्चा करा",
  "exploreCapabilities": "क्षमता जाणून घ्या",
  "chatScreen": {
    "contactName": "स्कायलाईन एक्सप्रेस एअरवेज",
    "status": "प्रमाणित RCS ब्रँड • चेकमार्क",
    "msg1": "नमस्कार जॉर्डन! झुरिचसाठीच्या तुमच्या SK-402 फ्लाइटचे बोर्डिंग गेट B12 वर सुरू झाले आहे. तुमचा डिजिटल बोर्डिंग पास तयार आहे.",
    "time1": "07:30",
    "actionBtn": "बोर्डिंग पास उघडा →",
    "msg2": "खूप धन्यवाद! मला अतिरिक्त लेगरूम असलेल्या सीटवर अपग्रेड करता येईल का?",
    "time2": "07:31",
    "msg3": "सीट 12A (अतिरिक्त लेगरूम) $25 मध्ये उपलब्ध आहे. त्वरित पुष्टी करण्यासाठी खाली टॅप करा!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "नेटिव्ह अँड्रॉइड मेसेज ॲप",
    "secure": "प्रमाणित प्रेषक ब्रँड ओळख"
  },
  "overviewBadge": "पुढील पिढीचे मोबाइल मेसेजिंग",
  "overviewTitle": "कोणतेही ॲप डाउनलोड न करता ॲपसारखा समृद्ध परस्परसंवादी अनुभव प्रदान करा.",
  "overviewDesc1": "रिच कम्युनिकेशन सर्व्हिसेस (RCS) हे मोबाइल उपकरणांवर व्यावसायिक संदेशांसाठी आधुनिक जागतिक मानक आहे. अधिकृत लोगो आणि दर्जेदार व्हिज्युअल्ससह ग्राहकांशी त्यांच्या मूळ मेसेजिंग ॲपमध्ये थेट संपर्क साधा.",
  "overviewDesc2": "साध्या मजकुराच्या मर्यादा दूर करा. एका टॅपमध्ये कृती, स्थान सामायिकरण, समृद्ध कॅरोसेल कार्ड्स आणि स्वयंचलित SMS फॉलबॅक सक्षम करा जेणेकरून कोणताही ग्राहक वंचित राहणार नाही.",
  "check1": "प्रमाणित प्रेषकाचा विश्वास आणि अधिकृत लोगो",
  "check2": "परस्परसंवादी कॅरोसेल कार्ड्स आणि त्वरित बटणे",
  "check3": "स्वयंचलित सुरक्षित SMS / MMS फॉलबॅक",
  "featuresBadge": "प्रमुख वैशिष्ट्ये",
  "featuresTitle": "समृद्ध मीडिया. प्रमाणित सुरक्षा. अपवादात्मक सहभाग.",
  "featuresSubtitle": "तुमच्या विपणन आणि ग्राहक सेवा पथकांसाठी मोठ्या प्रमाणावर RCS तैनात करण्यासाठी आवश्यक असणारे सर्वकाही.",
  "features": [
    {
      "title": "प्रमाणित प्रेषक ब्रँडिंग",
      "desc": "ग्राहकांचा तात्काळ विश्वास संपादन करण्यासाठी तुमचा अधिकृत लोगो, ब्रँडचे रंग आणि पडताळणी खूण प्रदर्शित करा."
    },
    {
      "title": "हाय-डेफिनिशन मीडिया कॅरोसेल",
      "desc": "चित्रे, किमती आणि थेट खरेदी लिंकसह स्वाइप करण्यायोग्य उत्पादनांची परस्परसंवादी कार्डे पाठवा."
    },
    {
      "title": "एका टॅपमधील कृती बटणे",
      "desc": "ग्राहकांना नकाशे उघडणे, कॉल करणे, कॅलेंडर इव्हेंट सेव्ह करणे किंवा वेबसाइटला भेट देणे एका टॅपमध्ये शक्य करा."
    },
    {
      "title": "सुचवलेली त्वरित उत्तरे (Quick-Replies)",
      "desc": "वापरकर्त्यांना टाइप न करता सहज उत्तर देता यावे म्हणून संवादात्मक रिप्लाय चिप्स उपलब्ध करून द्या."
    },
    {
      "title": "ऑपरेटर स्तरावरील स्वयंचलित SMS फॉलबॅक",
      "desc": "प्राप्तकर्त्याच्या फोनवर RCS सपोर्ट नसल्यास किंवा इंटरनेट बंद असल्यास, संदेश आपोआप सामान्य SMS म्हणून पोहोचतो."
    },
    {
      "title": "रिअल-टाइम वाचन पावत्या आणि मेट्रिक्स",
      "desc": "डिलिव्हरी दर, वाचन पुष्टीकरणे आणि बटण क्लिक-थ्रूचे रिअल-टाइममध्ये अचूक विश्लेषण करा."
    }
  ],
  "howItWorksBadge": "हे कसे कार्य करते",
  "howItWorksTitle": "चार सोप्या चरणांमध्ये प्रमाणित RCS मोहिमा सुरू करा.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "ब्रँड पडताळणी आणि सेटअप",
      "desc": "टेलिकॉम ऑपरेटरच्या अधिकृत नोंदणीमध्ये तुमचे ब्रँड प्रोफाइल, लोगो, रंग आणि कायदेशीर कागदपत्रे नोंदवा."
    },
    {
      "step": "02",
      "title": "परस्परसंवादी टेम्पलेट्सची रचना",
      "desc": "आमच्या व्हिज्युअल स्टुडिओमध्ये रिच कार्डे, ॲक्शन बटणे आणि संभाषण प्रवाह तयार करा."
    },
    {
      "step": "03",
      "title": "मेसेजिंग API जोडणे",
      "desc": "स्वयंचलित ऑपरेटर फॉलबॅक राउटिंगसह आमचे एकात्मिक मेसेजिंग API तुमच्या सिस्टमशी जोडा."
    },
    {
      "step": "04",
      "title": "प्रसारण आणि विश्लेषण",
      "desc": "तपशीलवार क्लिक विश्लेषणासह विपणन मोहिमा राबवा किंवा व्यवहारविषयक सूचना पाठवा."
    }
  ],
  "useCasesBadge": "उपयोग उदाहरणे",
  "useCasesTitle": "समृद्ध संवादात्मक अनुभवांसह मोबाइल वापरकर्त्यांना जोडून ठेवा.",
  "useCasesSubtitle": "परस्परसंवादी मोबाइल संवादाद्वारे मूल्य निर्माण करा जे रूपांतरण दर ३ पटीने वाढवते.",
  "interactiveCard": {
    "badge": "प्रमाणित RCS संदेश",
    "message": "Apex Gear कडून तुमचे पार्सल पाठवण्यात आले आहे. रिअल-टाइममध्ये ट्रॅक करा किंवा डिलिव्हरी पत्ता बदला.",
    "btnConfirm": "पार्सल ट्रॅक करा",
    "btnReschedule": "पत्ता बदला"
  },
  "useCases": [
    {
      "title": "बोर्डिंग पास आणि तिकीटे",
      "desc": "थेट फोन स्क्रीनवर थेट गेट अपडेट्ससह संपूर्ण रंगीत डिजिटल बोर्डिंग पास वितरित करा."
    },
    {
      "title": "ई-कॉमर्स फ्लॅश सेल",
      "desc": "नवीन उत्पादन संग्रह स्वाइप करण्यायोग्य कॅरोसेल आणि त्वरित खरेदी बटणांसह दाखवा."
    },
    {
      "title": "अपॉइंटमेंट शेड्यूलिंग आणि स्मरणपत्रे",
      "desc": "एका टॅपमध्ये पुष्टीकरण किंवा पुनर्नियोजन करू देणारी परस्परसंवादी कॅलेंडर स्मरणपत्रे पाठवा."
    },
    {
      "title": "दोन-घटक प्रमाणीकरण (2FA)",
      "desc": "फिशिंगपासून संपूर्ण संरक्षणासाठी अधिकृत ब्रँड वॉटरमार्कसह सुरक्षित वन-टाइम पासवर्ड पाठवा."
    }
  ],
  "industriesBadge": "आम्ही सेवा देत असलेली क्षेत्रे",
  "industriesTitle": "सर्व व्यावसायिक क्षेत्रांसाठी RCS बिझनेस मेसेजिंग.",
  "industriesSubtitle": "स्मार्टफोनवर ग्राहकांशी संवाद साधण्याच्या पद्धतीचे आधुनिकीकरण करण्यात अग्रगण्य संस्थांना मदत करणे.",
  "industries": [
    {
      "title": "विमान वाहतूक आणि आदरातिथ्य",
      "desc": "फ्लाइट चेक-इन स्मरणपत्रे, डिजिटल बोर्डिंग पास आणि हॉटेल रूम अपग्रेडच्या ऑफर्स."
    },
    {
      "title": "बँकिंग आणि फिनटेक",
      "desc": "फसवणूक व्यवहार सूचना, मासिक खर्चाचा सारांश आणि त्वरित कार्ड सक्रियकरण."
    },
    {
      "title": "किरकोळ विक्री आणि ई-कॉमर्स",
      "desc": "नवीन उत्पादनांचे प्रदर्शन, स्टॉक उपलब्धता सूचना आणि ऑर्डर शिपिंग अपडेट्स."
    },
    {
      "title": "आरोग्यसेवा",
      "desc": "प्रिस्क्रिप्शन रिफिल स्मरणपत्रे, क्लिनिक भेटीची पुष्टी आणि टेलिमेडिसिन चेक-इन."
    },
    {
      "title": "ऑटोमोटिव्ह",
      "desc": "नियमित देखभाल सूचना, सुरक्षितता रिकॉल सूचना आणि लीज नूतनीकरण पर्याय."
    }
  ],
  "whyBadge": "आमचा RCS प्लॅटफॉर्म का निवडावा",
  "whyTitle": "अग्रगण्य संस्था iNet RCS का निवडतात",
  "whySubtitle": "जागतिक उपक्रमांचा विश्वास असलेली टेलिकॉम ऑपरेटर-ग्रेड मेसेजिंग पायाभूत सुविधा.",
  "whyCards": {
    "secure": {
      "title": "प्रमाणित ब्रँड सत्यता",
      "description": "खात्रीशीर अँटी-स्पूफिंग पडताळणी तुमच्या ब्रँडला तोतयागिरी आणि फिशिंगपासून सुरक्षित ठेवते."
    },
    "cloud": {
      "title": "जागतिक थेट टेलिकॉम इंटरकनेक्ट्स",
      "description": "उत्तर अमेरिका, युरोप, आशिया आणि लॅटिन अमेरिकेतील प्रमुख मोबाइल नेटवर्क ऑपरेटर्सशी थेट जोडणी."
    },
    "api": {
      "title": "एकसंध सिंगल API",
      "description": "एक साधा API एंडपॉइंट कोणत्याही अतिरिक्त शुल्काशिवाय SMS मधील स्वयंचलित फॉलबॅकसह RCS हाताळतो."
    },
    "connectivity": {
      "title": "हमी दिलेली जागतिक डिलिव्हरी",
      "description": "स्मार्ट फॉलबॅक इंजिन ग्राहकाच्या फोन मॉडेलचा विचार न करता १००% संदेश पोहोचण्याची खात्री देतात."
    },
    "automated": {
      "title": "परस्परसंवादी ऑटोमेशन इंजिन",
      "description": "स्वयंचलित चॅटबॉट संभाषणे तयार करा जी ग्राहकांना सुरुवातीच्या प्रश्नापासून खरेदी पूर्ण होईपर्यंत मार्गदर्शन करतात."
    }
  },
  "apiCard": {
    "title": "RCS बिझनेस मेसेजिंग API",
    "desc": "स्वयंचलित SMS फॉलबॅकसह समृद्ध कार्डे, कॅरोसेल टेम्पलेट्स आणि त्वरित उत्तरे सहजतेने पाठवा."
  },
  "ctaBadge": "आता RCS वर अपग्रेड करा",
  "ctaTitle": "RCS सह तुमच्या ब्रँड संवादात नवीन ऊर्जा भरा.",
  "ctaSubtitle": "ग्राहकांचा विश्वास निर्माण करणारे आणि व्यवसाय वाढवणारे अधिक आकर्षक मोबाइल संदेश पाठवा.",
  "contactUs": "RCS सह प्रारंभ करा",
  "ctaFootnote": "Google Jibe आणि जागतिक टेलिकॉम ऑपरेटर इकोसिस्टमशी पूर्णपणे सुसंगत"
};

const sw: RcsBusinessMessagingTranslation = {
  "heroBadge": "UJUMBE WA KIBIASHARA WA RCS",
  "heroTitle": "Badilisha SMS ya Kawaida Kuwa Mazungumzo Tajiri ya RCS",
  "heroDesc": "Boresha ujumbe wa simu kwa alama za mtumaji aliyethibitishwa, kadi za slaidi zenye ubora wa juu, vitufe vya hatua za haraka na ufikiaji wa moja kwa moja kwenye simu za Android.",
  "talkToExpert": "Ongea na mtaalamu",
  "exploreCapabilities": "Chunguza uwezo",
  "chatScreen": {
    "contactName": "Shirika la Ndege la Skyline Express",
    "status": "Chapa ya RCS Iliyothibitishwa • Alama ya Ukaguzi",
    "msg1": "Habari Jordan! Kuingia kwenye ndege yako SK-402 kuelekea Zurich kumeanza lango B12. Pasi yako ya kidijitali iko tayari.",
    "time1": "07:30",
    "actionBtn": "Fungua Pasi ya Kupanda Ndege →",
    "msg2": "Asante sana! Je, ninaweza kuboresha hadi kiti chenye nafasi ya ziada ya miguu?",
    "time2": "07:31",
    "msg3": "Kiti 12A kinapatikana kwa $25. Bonyeza hapa chini kuthibitisha papo hapo!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Programu ya Asili ya Ujumbe ya Android",
    "secure": "Utambulisho wa Mtumaji Aliyethibitishwa"
  },
  "overviewBadge": "UJUMBE WA SIMU WA KIZAZI KIJACHO",
  "overviewTitle": "Toa uzoefu tajiri na shirikishi kama programu bila haja ya kupakua app.",
  "overviewDesc1": "Huduma za Mawasiliano Tajiri (RCS) ni kiwango cha kisasa cha kimataifa cha ujumbe wa biashara kwenye simu. Fikia wateja moja kwa moja ndani ya programu yao ya Ujumbe na nembo rasmi na picha zenye mvuto mkubwa.",
  "overviewDesc2": "Ondoa vikwazo vya maandishi ya kawaida. Washa vitendo vya mguso mmoja, kushiriki eneo, kadi za slaidi tajiri, na kurudi nyuma kwa SMS kiotomatiki ili hakuna mteja anayeachwa nyuma.",
  "check1": "Uaminifu wa Mtumaji Aliyethibitishwa & Nembo",
  "check2": "Kadi Shirikishi za Slaidi & Vitufe vya Haraka",
  "check3": "Hifadhi Nakala ya Moja kwa Moja ya SMS / MMS",
  "featuresBadge": "UWEZO MUHIMU",
  "featuresTitle": "Midia tajiri. Usalama uliothibitishwa. Ushiriki wa kipekee.",
  "featuresSubtitle": "Kila kitu ambacho timu zako za masoko na huduma kwa wateja zinahitaji kutekeleza RCS kwa kiwango kikubwa.",
  "features": [
    {
      "title": "Uwekaji Chapa wa Mtumaji Aliyethibitishwa",
      "desc": "Onyesha nembo rasmi ya kampuni yako, rangi za chapa na alama ya uthibitishaji ili kujenga imani ya papo hapo kwa mteja."
    },
    {
      "title": "Slaidi za Midia Zenye Ubora wa Juu",
      "desc": "Tuma kadi shirikishi za bidhaa zinazoweza kutelezeshwa zenye picha, bei na viungo vya ununuzi wa moja kwa moja."
    },
    {
      "title": "Vitufe vya Hatua Zilizopendekezwa kwa Mguso Mmoja",
      "desc": "Ruhusu wateja kufungua ramani, kupiga nambari, kuhifadhi matukio ya kalenda, au kutembelea tovuti kwa mguso mmoja."
    },
    {
      "title": "Majibu ya Haraka Yaliyopendekezwa",
      "desc": "Wasilisha chaguo za majibu ya mazungumzo ili watumiaji waweze kujibu bila kulazimika kuandika neno lolote."
    },
    {
      "title": "Kurudi kwa SMS ya Mtandao Kiotomatiki",
      "desc": "Ikiwa simu ya mpokeaji haitumii RCS au haina intaneti, ujumbe hubadilika kiotomatiki na kutumwa kama SMS ya kawaida."
    },
    {
      "title": "Stakabadhi za Kusoma na Takwimu za Wakati Halisi",
      "desc": "Fuatilia viwango vya uwasilishaji, stakabadhi za kusomwa, na kubofya vitufe vya hatua kwa wakati halisi."
    }
  ],
  "howItWorksBadge": "JINSI INAVYOFANYA KAZI",
  "howItWorksTitle": "Zindua kampeni za RCS zilizothibitishwa katika hatua nne rahisi.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Uthibitishaji wa Chapa na Usanidi",
      "desc": "Sajili wasifu wa chapa yako, nembo, rangi na nyaraka za kisheria kwenye sajili za mitandao ya simu."
    },
    {
      "step": "02",
      "title": "Kubuni Violezo Shirikishi",
      "desc": "Unda kadi tajiri, vitufe vya vitendo na mitiririko ya mazungumzo kwenye studio yetu ya violezo vya picha."
    },
    {
      "step": "03",
      "title": "Unganisha API za Ujumbe",
      "desc": "Unganisha API yetu ya ujumbe iliyounganishwa yenye uelekezaji wa kurudi nyuma kwa SMS ya mtandao kiotomatiki."
    },
    {
      "step": "04",
      "title": "Zindua na Uchanganue",
      "desc": "Tangaza kampeni tajiri za masoko au tuma arifa za miamala ukiwa na uchanganuzi kamili wa mibofyo."
    }
  ],
  "useCasesBadge": "MATUMIZI YA KAWAIDA",
  "useCasesTitle": "Shirikisha watumiaji wa simu kwa mazungumzo tajiri na yenye tija.",
  "useCasesSubtitle": "Toa thamani kupitia mawasiliano ya simu shirikishi ambayo yanaongeza viwango vya ubadilishaji hadi mara 3.",
  "interactiveCard": {
    "badge": "UJUMBE WA RCS ULIOTHIBITISHWA",
    "message": "Kifurushi chako kutoka Apex Gear kimesafirishwa. Fuatilia usafirishaji kwa wakati halisi au badilisha maagizo ya uwasilishaji.",
    "btnConfirm": "Fuatilia Kifurushi",
    "btnReschedule": "Badilisha Anwani"
  },
  "useCases": [
    {
      "title": "Pasi za Kupanda Ndege na Tiketi",
      "desc": "Wasilisha pasi za kidijitali za rangi kamili zenye masasisho ya moja kwa moja ya lango moja kwa moja kwenye skrini ya simu."
    },
    {
      "title": "Mauzo ya Haraka ya E-Commerce",
      "desc": "Onyesha mikusanyiko mipya ya bidhaa ukitumia kadi za slaidi zinazoteleza na vitufe vya ununuzi wa papo hapo."
    },
    {
      "title": "Kupanga Miadi na Vikumbusho",
      "desc": "Tuma vikumbusho shirikishi vya kalenda vinavyoruhusu uthibitisho au kupanga upya kwa mguso mmoja."
    },
    {
      "title": "Uthibitishaji wa Hatua Mbili (2FA)",
      "desc": "Wasilisha manenosiri salama ya mara moja yenye alama ya chapa rasmi kuzuia utapeli wa hadaa."
    }
  ],
  "industriesBadge": "SEKTA TUNAZOHUDUMIA",
  "industriesTitle": "Ujumbe wa kibiashara wa RCS kwa sekta zote za soko.",
  "industriesSubtitle": "Kusaidia mashirika ya kimataifa kuboresha na kufanya mawasiliano ya simu na watumiaji kuwa ya kisasa.",
  "industries": [
    {
      "title": "Mashirika ya Ndege na Ukarimu",
      "desc": "Vikumbusho vya kuingia kwenye ndege, pasi za kidijitali za kupanda ndege na ofa za kuboresha vyumba vya hoteli."
    },
    {
      "title": "Benki na FinTech",
      "desc": "Arifa za kuzuia udanganyifu, muhtasari wa matumizi ya kila mwezi na uwezeshaji wa kadi papo hapo."
    },
    {
      "title": "Biashara ya Rejareja na E-Commerce",
      "desc": "Maonyesho ya bidhaa mpya, arifa za bidhaa zilizorudi ghalani na masasisho ya usafirishaji."
    },
    {
      "title": "Huduma za Afya",
      "desc": "Vikumbusho vya kujaza dawa, uthibitisho wa miadi ya kliniki na usajili wa matibabu ya mbali."
    },
    {
      "title": "Sekta ya Magari",
      "desc": "Arifa za matengenezo ya mara kwa mara, matangazo ya usalama na fursa za kurejesha mkataba wa kukodisha."
    }
  ],
  "whyBadge": "KWA NINI JUKWAA LETU LA RCS",
  "whyTitle": "Kwa Nini Mashirika Yanaongoza Yanachagua iNet RCS",
  "whySubtitle": "Miundombinu ya ujumbe ya kiwango cha mtandao wa simu inayoaminika na mashirika ya kimataifa.",
  "whyCards": {
    "secure": {
      "title": "Uadilifu wa Chapa Iliyothibitishwa",
      "description": "Uthibitishaji unaohakikisha kuzuia uigaji unalinda chapa yako dhidi ya majaribio ya ulaghai na hadaa."
    },
    "cloud": {
      "title": "Viunganishi vya Moja kwa Moja vya Mitandao Ulimwenguni",
      "description": "Viunganisho vya moja kwa moja na waendeshaji wa mitandao ya simu Amerika Kaskazini, Ulaya, Asia na Amerika ya Kusini."
    },
    "api": {
      "title": "API Moja Iliyounganishwa",
      "description": "Kituo kimoja cha API kinashughulikia RCS na kurudi kwa SMS kiotomatiki bila gharama za ziada mara mbili."
    },
    "connectivity": {
      "title": "Uwasilishaji Uliohakikishwa Duniani",
      "description": "Mitambo ya kisasa ya kurudi nyuma inahakikisha ufikiaji wa 100% bila kujali aina ya simu au hali ya mtandao."
    },
    "automated": {
      "title": "Injini ya Uendeshaji wa Kiotomatiki Shirikishi",
      "description": "Unda mazungumzo ya kijibu otomatiki (chatbot) yanayowaongoza wateja kutoka swali hadi kukamilisha ununuzi."
    }
  },
  "apiCard": {
    "title": "API ya Ujumbe wa Kibiashara wa RCS",
    "desc": "Tuma kadi tajiri, violezo vya slaidi na majibu ya haraka ukiwa na usaidizi wa kiotomatiki wa SMS."
  },
  "ctaBadge": "BORESHA HADI RCS SASA",
  "ctaTitle": "Leta uhai kwenye mawasiliano ya chapa yako ukitumia RCS.",
  "ctaSubtitle": "Wasilisha ujumbe wa simu tajiri na unaovutia zaidi unaojenga uaminifu na kukuza mauzo kwa kasi.",
  "contactUs": "Anza na RCS",
  "ctaFootnote": "Utangamano kamili na Google Jibe na mfumo wa ikolojia wa waendeshaji simu duniani"
};

const sv: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS FÖRETAGSMEDDELANDEN",
  "heroTitle": "Förvandla Vanlig SMS till Rika Konversationer med RCS",
  "heroDesc": "Lyft mobilmeddelanden med verifierade avsändarbockar, högupplösta karusellkort, interaktiva snabbåtgärdsknappar och inbyggd räckvidd på Android-smartphones.",
  "talkToExpert": "Prata med en expert",
  "exploreCapabilities": "Utforska funktioner",
  "chatScreen": {
    "contactName": "Flygbolaget Skyline Express",
    "status": "Verifierat RCS-varumärke • Officiell Bock",
    "msg1": "Hej Jordan! Ombordstigningen för ditt flyg SK-402 till Zürich har börjat vid Gate B12. Ditt digitala boardingkort är klart.",
    "time1": "07:30",
    "actionBtn": "Öppna Boardingkort →",
    "msg2": "Tack! Kan jag uppgradera till en sittplats med extra benutrymme?",
    "time2": "07:31",
    "msg3": "Plats 12A är tillgänglig för 25 $. Tryck nedan för att bekräfta direkt!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Inbyggd Android Meddelande-app",
    "secure": "Verifierad Avsändaridentitet"
  },
  "overviewBadge": "NÄSTA GENERATIONS MOBILMEDDELANDEN",
  "overviewTitle": "Erbjud rika, app-liknande interaktiva upplevelser utan att kunden behöver ladda ner en app.",
  "overviewDesc1": "Rich Communication Services (RCS) är den moderna världsstandarden för företagsmeddelanden i mobilen. Nå kunder direkt i den förinstallerade Meddelanden-appen med officiell logotyp och fängslande grafik.",
  "overviewDesc2": "Ta steget bortom begränsningarna med vanlig text. Aktivera åtgärder med ett tryck, platsdelning, bildkaruseller och automatisk SMS-fallback så att inget meddelande missas.",
  "check1": "Förtroende med Verifierad Avsändare & Logotyp",
  "check2": "Interaktiva Karusellkort & Snabbknappar",
  "check3": "Automatisk Reservhantering via SMS / MMS",
  "featuresBadge": "NYCKELFUNKTIONER",
  "featuresTitle": "Rikt medieinnehåll. Verifierad säkerhet. Enastående engagemang.",
  "featuresSubtitle": "Allt dina marknadsförings- och kundserviceteam behöver för att distribuera RCS i stor skala.",
  "features": [
    {
      "title": "Verifierat Varumärke för Avsändare",
      "desc": "Visa din officiella företagslogotyp, varumärkesfärger och verifieringsbock för att skapa omedelbart förtroende."
    },
    {
      "title": "Högupplösta Mediekaruseller",
      "desc": "Skicka svepbara interaktiva produktkort med foton, priser och direkta köplänkar."
    },
    {
      "title": "Föreslagna Åtgärdsknappar med Ett Tryck",
      "desc": "Låt kunderna öppna kartor, ringa samtal, spara kalenderhändelser eller besöka webbplatser med en enkel knapptryckning."
    },
    {
      "title": "Föreslagna Snabbsvar",
      "desc": "Erbjud smarta förvalda svarsknappar så att användare kan svara smidigt utan att behöva skriva."
    },
    {
      "title": "Automatisk Operatörs-SMS-fallback",
      "desc": "Om mottagarens enhet saknar stöd för RCS eller är offline, levereras meddelandet automatiskt som vanlig SMS."
    },
    {
      "title": "Mottagningskvitton och Statistik i Realtid",
      "desc": "Spåra leveransstatus, läsbekräftelser och knappklick i realtid med full transparens."
    }
  ],
  "howItWorksBadge": "HUR DET FUNGERAR",
  "howItWorksTitle": "Starta verifierade RCS-kampanjer i fyra enkla steg.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Varumärkesverifiering & Registrering",
      "desc": "Registrera din företagsprofil, logotyp, färger och juridiska dokument i operatörernas officiella register."
    },
    {
      "step": "02",
      "title": "Designa Interaktiva Mallar",
      "desc": "Skapa bildkort, åtgärdsknappar och dialogträd i vår visuella mallstudio."
    },
    {
      "step": "03",
      "title": "Anslut Meddelande-API:er",
      "desc": "Integrera vårt enhetliga API med automatisk fallback-routing via mobiloperatörer."
    },
    {
      "step": "04",
      "title": "Skicka & Analysera",
      "desc": "Sänd ut rika marknadskampanjer eller transaktionsnotiser med komplett klicktelemetri."
    }
  ],
  "useCasesBadge": "ANVÄNDNINGSOMRÅDEN",
  "useCasesTitle": "Engagera mobilanvändare med berikande dialoger.",
  "useCasesSubtitle": "Skapa mervärde genom interaktiv mobilkommunikation som ökar konverteringsgraden med upp till 3 gånger.",
  "interactiveCard": {
    "badge": "VERIFIERAT RCS-MEDDELANDE",
    "message": "Ditt paket från Apex Gear har skickats. Spåra leveransen i realtid eller ändra leveransinstruktioner.",
    "btnConfirm": "Spåra Paket",
    "btnReschedule": "Ändra Adress"
  },
  "useCases": [
    {
      "title": "Boardingkort och Biljetter",
      "desc": "Leverera digitala boardingkort i fullfärg med live-uppdateringar av gate direkt till mobilskärmen."
    },
    {
      "title": "E-Handel och Flash Sales",
      "desc": "Visa upp nya kollektioner med svepbara karusellkort och snabba köpknappar utan friktion."
    },
    {
      "title": "Bokningspåminnelser och Kalender",
      "desc": "Skicka interaktiva påminnelser med möjlighet att bekräfta eller boka om med ett klick."
    },
    {
      "title": "Tvåfaktorsautentisering (2FA)",
      "desc": "Leverera säkra engångskoder märkta med din officiella logotyp för att skydda mot nätfiske."
    }
  ],
  "industriesBadge": "BRANSCHER VI STÖDJER",
  "industriesTitle": "RCS företagsmeddelanden för alla marknadssektorer.",
  "industriesSubtitle": "Vi hjälper ledande företag att modernisera sin kundkommunikation på smartphones.",
  "industries": [
    {
      "title": "Flyg och Hotell",
      "desc": "Incheckningspåminnelser, digitala boardingkort och förslag på rumsuppgraderingar."
    },
    {
      "title": "Bank och FinTech",
      "desc": "Säkerhetsvarningar för misstänkta transaktioner, månatliga utgiftsöversikter och kortaktivering."
    },
    {
      "title": "Detaljhandel och E-Handel",
      "desc": "Presentation av nya kollektioner, lagervarningar och aviseringar om leveransstatus."
    },
    {
      "title": "Hälso- och Sjukvård",
      "desc": "Receptförnyelser, bekräftelser på läkartider och incheckning för videomöten."
    },
    {
      "title": "Fordon och Mobilitet",
      "desc": "Servicepåminnelser, meddelanden om säkerhetsåterkallelser och förlängning av leasingavtal."
    }
  ],
  "whyBadge": "VARFÖR VÅR RCS-PLATTFORM",
  "whyTitle": "Varför Ledande Företag Väljer iNet RCS",
  "whySubtitle": "Meddelandeinfrastruktur av operatörsklass som globala storföretag litar på.",
  "whyCards": {
    "secure": {
      "title": "Verifierad Varumärkesintegritet",
      "description": "Garanterad anti-spoofing skyddar ditt varumärke mot imitation och bedrägeriförsök."
    },
    "cloud": {
      "title": "Direkt Global Operatörsanslutning",
      "description": "Direkta förbindelser med mobilnätsoperatörer i Nordamerika, Europa, Asien och Latinamerika."
    },
    "api": {
      "title": "Ett Enhetligt API",
      "description": "En enda API-slutpunkt hanterar RCS med automatisk SMS-fallback utan dubbla kostnader."
    },
    "connectivity": {
      "title": "Garanterad Global Leverans",
      "description": "Intelligenta reservmotorer säkerställer 100% räckvidd oavsett mottagarens mobilmodell."
    },
    "automated": {
      "title": "Interaktiv Automatiseringsmotor",
      "description": "Bygg automatiserade chatbotdialoger som guidar kunden från inledande fråga till slutfört köp."
    }
  },
  "apiCard": {
    "title": "API för RCS Företagsmeddelanden",
    "desc": "Skicka rika kort, karusellmallar och svarsknappar med automatisk hantering av SMS-fallback."
  },
  "ctaBadge": "UPPGRADERA TILL RCS",
  "ctaTitle": "Ge nytt liv åt din varumärkeskommunikation med RCS.",
  "ctaSubtitle": "Erbjud rikare och mer engagerande mobilmeddelanden som bygger kundförtroende och ökar försäljningen.",
  "contactUs": "Börja med RCS",
  "ctaFootnote": "Full kompatibilitet med Google Jibe och det globala operatörsekosystemet"
};

const el: RcsBusinessMessagingTranslation = {
  "heroBadge": "ΕΠΙΧΕΙΡΗΜΑΤΙΚΑ ΜΗΝΥΜΑΤΑ RCS",
  "heroTitle": "Μετατρέψτε τα Παραδοσιακά SMS σε Διαδραστικές Συνομιλίες RCS",
  "heroDesc": "Αναβαθμίστε τα μηνύματα κινητής τηλεφωνίας με επαληθευμένα σήματα αποστολέα, κάρτες καρουζέλ υψηλής ανάλυσης, διαδραστικά κουμπιά γρήγορης ενέργειας και εγγενή υποστήριξη σε smartphone Android.",
  "talkToExpert": "Μιλήστε με έναν ειδικό",
  "exploreCapabilities": "Εξερευνήστε δυνατότητες",
  "chatScreen": {
    "contactName": "Αερογραμμές Skyline Express",
    "status": "Επαληθευμένη Επωνυμία RCS • Σήμα Επαλήθευσης",
    "msg1": "Γεια σας Jordan! Η επιβίβαση για την πτήση σας SK-402 προς Ζυρίχη ξεκίνησε στην Πύλη B12. Η ψηφιακή κάρτα επιβίβασής σας είναι έτοιμη.",
    "time1": "07:30",
    "actionBtn": "Άνοιγμα Κάρτας Επιβίβασης →",
    "msg2": "Σας ευχαριστώ πολύ! Μπορώ να κάνω αναβάθμιση σε θέση με επιπλέον χώρο για τα πόδια;",
    "time2": "07:31",
    "msg3": "Η θέση 12A είναι διαθέσιμη για 25 $. Πατήστε παρακάτω για άμεση επιβεβαίωση!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Εγγενής Εφαρμογή Μηνυμάτων Android",
    "secure": "Επαληθευμένη Ταυτότητα Αποστολέα"
  },
  "overviewBadge": "ΜΗΝΥΜΑΤΑ ΚΙΝΗΤΗΣ ΝΕΑΣ ΓΕΝΙΑΣ",
  "overviewTitle": "Προσφέρετε πλούσιες, διαδραστικές εμπειρίες επιπέδου εφαρμογής χωρίς να απαιτείται λήψη app.",
  "overviewDesc1": "Οι Υπηρεσίες Εμπλουτισμένης Επικοινωνίας (RCS) είναι το σύγχρονο παγκόσμιο πρότυπο για επιχειρηματικά μηνύματα. Προσεγγίστε πελάτες απευθείας στην προεπιλεγμένη εφαρμογή Μηνυμάτων με επίσημο λογότυπο και εντυπωσιακά οπτικά μέσα.",
  "overviewDesc2": "Ξεπεράστε τους περιορισμούς του απλού κειμένου. Ενεργοποιήστε ενέργειες με ένα πάτημα, κοινή χρήση τοποθεσίας, εμπλουτισμένες κάρτες καρουζέλ και αυτόματη εφεδρεία σε SMS για να μην μείνει κανένας πελάτης εκτός.",
  "check1": "Αξιοπιστία Επαληθευμένου Αποστολέα & Λογότυπο",
  "check2": "Διαδραστικές Κάρτες Καρουσέλ & Γρήγορα Κουμπιά",
  "check3": "Αυτόματη Εφεδρεία Ασφαλείας σε SMS / MMS",
  "featuresBadge": "ΒΑΣΙΚΕΣ ΔΥΝΑΤΟΤΗΤΕΣ",
  "featuresTitle": "Πλούσια πολυμέσα. Επαληθευμένη ασφάλεια. Εξαιρετική αφοσίωση.",
  "featuresSubtitle": "Όλα όσα χρειάζονται οι ομάδες μάρκετινγκ και εξυπηρέτησης πελατών για την ανάπτυξη RCS σε μεγάλη κλίμακα.",
  "features": [
    {
      "title": "Επωνυμία Επαληθευμένου Αποστολέα",
      "desc": "Εμφανίστε το επίσημο λογότυπο της εταιρείας σας, τα χρώματα του brand και το σήμα επαλήθευσης για άμεση εμπιστοσύνη."
    },
    {
      "title": "Καρουσέλ Πολυμέσων Υψηλής Ανάλυσης",
      "desc": "Στείλτε διαδραστικές κάρτες προϊόντων με δυνατότητα κύλισης, φωτογραφίες, τιμές και συνδέσμους αγοράς."
    },
    {
      "title": "Κουμπιά Προτεινόμενης Ενέργειας με Ένα Πάτημα",
      "desc": "Επιτρέψτε στους πελάτες να ανοίγουν χάρτες, να καλούν αριθμούς, να αποθηκεύουν συμβάντα ή να επισκέπτονται ιστότοπους."
    },
    {
      "title": "Προτεινόμενες Γρήγορες Απαντήσεις",
      "desc": "Προσφέρετε έτοιμα κουμπιά απαντήσεων συνομιλίας, ώστε οι χρήστες να απαντούν χωρίς να χρειάζεται να πληκτρολογήσουν."
    },
    {
      "title": "Αυτόματη Εφεδρεία SMS Παρόχου",
      "desc": "Εάν η συσκευή του παραλήπτη δεν υποστηρίζει RCS ή δεν έχει δεδομένα, το μήνυμα αποστέλλεται αυτόματα ως κανονικό SMS."
    },
    {
      "title": "Αποδεικτικά Ανάγνωσης & Μετρήσεις σε Πραγματικό Χρόνο",
      "desc": "Παρακολουθήστε ποσοστά παράδοσης, επιβεβαιώσεις ανάγνωσης και κλικ σε κουμπιά ενεργειών σε πραγματικό χρόνο."
    }
  ],
  "howItWorksBadge": "ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ",
  "howItWorksTitle": "Ξεκινήστε επαληθευμένες καμπάνιες RCS σε τέσσερα απλά βήματα.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Επαλήθευση Επωνυμίας & Ρύθμιση",
      "desc": "Καταχωρίστε το προφίλ, το λογότυπο, τα χρώματα και τα νομικά έγγραφα της επωνυμίας σας στα μητρώα των παρόχων."
    },
    {
      "step": "02",
      "title": "Σχεδιασμός Διαδραστικών Προτύπων",
      "desc": "Δημιουργήστε κάρτες πολυμέσων, κουμπιά ενεργειών και διαγράμματα συνομιλιών στο οπτικό μας στούντιο προτύπων."
    },
    {
      "step": "03",
      "title": "Σύνδεση API Μηνυμάτων",
      "desc": "Ενσωματώστε το ενοποιημένο API μηνυμάτων μας με αυτόματη εφεδρική δρομολόγηση μέσω SMS παρόχου."
    },
    {
      "step": "04",
      "title": "Έναρξη & Ανάλυση Αποτελεσμάτων",
      "desc": "Μεταδώστε διαδραστικές καμπάνιες μάρκετινγκ ή ειδοποιήσεις συναλλαγών με πλήρη τηλεμετρία αλληλεπίδρασης."
    }
  ],
  "useCasesBadge": "ΠΕΡΙΠΤΩΣΕΙΣ ΧΡΗΣΗΣ",
  "useCasesTitle": "Προσελκύστε χρήστες κινητών με πλούσιες εμπειρίες συνομιλίας.",
  "useCasesSubtitle": "Προσφέρετε αξία μέσω διαδραστικών επικοινωνιών κινητής τηλεφωνίας που αυξάνουν τα ποσοστά μετατροπής έως και 3 φορές.",
  "interactiveCard": {
    "badge": "ΕΠΑΛΗΘΕΥΜΕΝΟ ΜΗΝΥΜΑ RCS",
    "message": "Το δέμα σας από την Apex Gear έχει αποσταλεί. Παρακολουθήστε την παράδοση ζωντανά ή αλλάξτε οδηγίες παράδοσης.",
    "btnConfirm": "Παρακολούθηση Δέματος",
    "btnReschedule": "Αλλαγή Διεύθυνσης"
  },
  "useCases": [
    {
      "title": "Κάρτες Επιβίβασης & Ψηφιακά Εισιτήρια",
      "desc": "Παραδώστε έγχρωμες κάρτες επιβίβασης με ζωντανές ενημερώσεις πύλης απευθείας στην οθόνη του τηλεφώνου."
    },
    {
      "title": "Flash Sales Ηλεκτρονικού Εμπορίου",
      "desc": "Παρουσιάστε νέες συλλογές με κάρτες καρουζέλ κύλισης και κουμπιά άμεσης αγοράς χωρίς περιττά βήματα."
    },
    {
      "title": "Προγραμματισμός & Υπενθυμίσεις Ραντεβού",
      "desc": "Στείλτε διαδραστικές υπενθυμίσεις ημερολογίου που επιτρέπουν επιβεβαίωση ή επαναπρογραμματισμό με ένα άγγιγμα."
    },
    {
      "title": "Έλεγχος Ταυτότητας Δύο Παραγόντων (2FA)",
      "desc": "Παραδώστε ασφαλείς κωδικούς μίας χρήσης με επίσημο λογότυπο, προστατεύοντας από επιθέσεις phishing."
    }
  ],
  "industriesBadge": "ΚΛΑΔΟΙ ΠΟΥ ΕΞΥΠΗΡΕΤΟΥΜΕ",
  "industriesTitle": "Επιχειρηματικά μηνύματα RCS για όλους τους τομείς της αγοράς.",
  "industriesSubtitle": "Βοηθάμε κορυφαίους οργανισμούς να εκσυγχρονίσουν την επικοινωνία με τους καταναλωτές στα smartphone.",
  "industries": [
    {
      "title": "Αεροπορικές Εταιρείες & Φιλοξενία",
      "desc": "Υπενθυμίσεις check-in πτήσεων, ψηφιακές κάρτες επιβίβασης και προτάσεις αναβάθμισης δωματίου."
    },
    {
      "title": "Τράπεζες & FinTech",
      "desc": "Ειδοποιήσεις για ύποπτες συναλλαγές, μηνιαίες περιλήψεις δαπανών και άμεση ενεργοποίηση καρτών."
    },
    {
      "title": "Λιανικό & Ηλεκτρονικό Εμπόριο",
      "desc": "Παρουσίαση νέων συλλογών, ειδοποιήσεις διαθεσιμότητας αποθέματος και ενημερώσεις αποστολής."
    },
    {
      "title": "Υγεία & Ιατρική Φροντίδα",
      "desc": "Υπενθυμίσεις εκτέλεσης συνταγών, επιβεβαιώσεις ιατρικών ραντεβού και είσοδος σε τηλεϊατρική."
    },
    {
      "title": "Αυτοκινητοβιομηχανία",
      "desc": "Ειδοποιήσεις τακτικής συντήρησης, ανακλήσεις ασφαλείας και επιλογές ανανέωσης μίσθωσης."
    }
  ],
  "whyBadge": "ΓΙΑΤΙ Η ΠΛΑΤΦΟΡΜΑ RCS ΜΑΣ",
  "whyTitle": "Γιατί οι Κορυφαίες Επιχειρήσεις Επιλέγουν το iNet RCS",
  "whySubtitle": "Υποδομή μηνυμάτων επιπέδου τηλεπικοινωνιακού παρόχου που εμπιστεύονται παγκόσμιοι οργανισμοί.",
  "whyCards": {
    "secure": {
      "title": "Επαληθευμένη Ακεραιότητα Επωνυμίας",
      "description": "Η εγγυημένη επαλήθευση κατά της πλαστοπροσωπίας προστατεύει την επωνυμία σας από απάτες phishing."
    },
    "cloud": {
      "title": "Παγκόσμιες Απευθείας Διασυνδέσεις Παρόχων",
      "description": "Απευθείας συνδέσεις με παρόχους δικτύων κινητής τηλεφωνίας σε Βόρεια Αμερική, Ευρώπη, Ασία και Λατινική Αμερική."
    },
    "api": {
      "title": "Ενιαίο & Απλό API",
      "description": "Ένα απλό τελικό σημείο API διαχειρίζεται RCS με αυτόματη εφεδρεία σε SMS χωρίς διπλές χρεώσεις."
    },
    "connectivity": {
      "title": "Εγγυημένη Παγκόσμια Παράδοση",
      "description": "Έξυπνοι μηχανισμοί εφεδρείας εξασφαλίζουν 100% πρόσβαση ανεξάρτητα από το μοντέλο του τηλεφώνου."
    },
    "automated": {
      "title": "Μηχανή Διαδραστικού Αυτοματισμού",
      "description": "Δημιουργήστε αυτοματοποιημένες ροές chatbot που καθοδηγούν τους πελάτες από την ερώτηση στην αγορά."
    }
  },
  "apiCard": {
    "title": "API Επιχειρηματικών Μηνυμάτων RCS",
    "desc": "Στείλτε πλούσιες κάρτες, πρότυπα καρουζέλ και κουμπιά ενεργειών με αυτοματοποιημένη υποστήριξη SMS."
  },
  "ctaBadge": "ΑΝΑΒΑΘΜΙΣΤΕ ΣΕ RCS ΤΩΡΑ",
  "ctaTitle": "Δώστε ζωή στην επικοινωνία της επωνυμίας σας με το RCS.",
  "ctaSubtitle": "Προσφέρετε πλουσιότερα, πιο ελκυστικά μηνύματα κινητής τηλεφωνίας που κερδίζουν την εμπιστοσύνη και αυξάνουν τις πωλήσεις.",
  "contactUs": "Ξεκινήστε με RCS",
  "ctaFootnote": "Πλήρης συμβατότητα με το Google Jibe και το παγκόσμιο οικοσύστημα τηλεπικοινωνιακών παρόχων"
};

const cs: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS FIREMNÍ ZPRÁVY",
  "heroTitle": "Proměňte Běžné SMS na Bohaté Konverzační RCS Zprávy",
  "heroDesc": "Posuňte mobilní komunikaci na vyšší úroveň díky ověřeným odznakům odesílatele, karuselovým kartám ve vysokém rozlišení, interaktivním tlačítkům rychlých akcí a nativnímu dosahu na chytrých telefonech Android.",
  "talkToExpert": "Promluvte si s expertem",
  "exploreCapabilities": "Prozkoumat možnosti",
  "chatScreen": {
    "contactName": "Letecká Společnost Skyline Express",
    "status": "Ověřená Značka RCS • Oficiální Odznak",
    "msg1": "Dobrý den, Jordane! Nástup na váš let SK-402 do Curychu byl zahájen u brány B12. Váš digitální palubní lístek je připraven.",
    "time1": "07:30",
    "actionBtn": "Otevřít Palubní Lístek →",
    "msg2": "Děkuji! Mohu přejít na sedadlo s větším prostorem pro nohy?",
    "time2": "07:31",
    "msg3": "Sedadlo 12A je k dispozici za 25 $. Klepnutím níže můžete okamžitě potvrdit!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Nativní Aplikace Zprávy pro Android",
    "secure": "Ověřená Identita Odesílatele"
  },
  "overviewBadge": "MOBILNÍ ZPRÁVY NOVÉ GENERACE",
  "overviewTitle": "Poskytujte interaktivní zážitky na úrovni mobilní aplikace bez nutnosti stahování.",
  "overviewDesc1": "Rich Communication Services (RCS) představují moderní světový standard pro firemní komunikaci na mobilních zařízeních. Oslovte zákazníky přímo v nativní aplikaci Zprávy s oficiálním logem a působivými vizuály.",
  "overviewDesc2": "Překonejte omezení prostého textu. Využijte akce na jedno klepnutí, sdílení polohy, interaktivní karusely a automatický záložní přechod na SMS, aby žádný zákazník nezůstal opomenut.",
  "check1": "Důvěryhodnost Ověřeného Odesílatele a Oficiální Logo",
  "check2": "Interaktivní Karusely a Tlačítka Rychlé Akce",
  "check3": "Automatická Záložní Ochrana přes SMS / MMS",
  "featuresBadge": "KLÍČOVÉ FUNKCE",
  "featuresTitle": "Bohatá média. Ověřené zabezpečení. Výjimečná míra zapojení.",
  "featuresSubtitle": "Vše, co vaše marketingové a zákaznické týmy potřebují k nasazení RCS ve velkém měřítku.",
  "features": [
    {
      "title": "Branding Ověřeného Odesílatele",
      "desc": "Zobrazte oficiální logo společnosti, firemní barvy a ověřovací odznak pro okamžité vybudování důvěry."
    },
    {
      "title": "Multimediální Karusely ve Vysokém Rozlišení",
      "desc": "Odesílejte posuvné interaktivní produktové karty s obrázky, cenami a přímými odkazy na nákup."
    },
    {
      "title": "Doporučená Akční Tlačítka na Jedno Klepnutí",
      "desc": "Umožněte zákazníkům otevírat mapy, vytáčet čísla, ukládat události do kalendáře nebo navštěvovat weby jedním klepnutím."
    },
    {
      "title": "Navrhované Rychlé Odpovědi",
      "desc": "Nabídněte konverzační tlačítka předvolených odpovědí, aby uživatelé mohli reagovat bez nutnosti psaní."
    },
    {
      "title": "Automatický Operátorský Záložní SMS Fallback",
      "desc": "Pokud zařízení příjemce nepodporuje RCS nebo nemá datové připojení, zpráva se automaticky doručí jako standardní SMS."
    },
    {
      "title": "Potvrzení o Přečtení a Metriky v Reálném Čase",
      "desc": "Sledujte míru doručení, potvrzení o přečtení a kliknutí na akční tlačítka v reálném čase."
    }
  ],
  "howItWorksBadge": "JAK TO FUNGUJE",
  "howItWorksTitle": "Spusťte ověřené RCS kampaně ve čtyřech jednoduchých krocích.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Ověření Značky a Nastavení",
      "desc": "Zaregistrujte svůj firemní profil, logo, barvy a právní dokumentaci v oficiálních registrech operátorů."
    },
    {
      "step": "02",
      "title": "Návrh Interaktivních Šablon",
      "desc": "Vytvářejte multimediální karty, akční tlačítka a konverzační stromy v našem vizuálním studiu šablon."
    },
    {
      "step": "03",
      "title": "Propojení Rozhraní API pro Zprávy",
      "desc": "Integrujte naše jednotné API s automatickým záložním směrováním přes operátorské SMS zprávy."
    },
    {
      "step": "04",
      "title": "Odesílání a Pokročilá Analýza",
      "desc": "Vysílejte bohaté marketingové kampaně nebo transakční upozornění s kompletní telemetrií kliknutí."
    }
  ],
  "useCasesBadge": "PŘÍPADY POUŽITÍ",
  "useCasesTitle": "Zaujměte mobilní uživatele poutavějšími konverzacemi.",
  "useCasesSubtitle": "Přinášejte hodnotu prostřednictvím interaktivní mobilní komunikace, která zvyšuje konverzní poměr až 3krát.",
  "interactiveCard": {
    "badge": "OVĚŘENÁ ZPRÁVA RCS",
    "message": "Váš balíček od Apex Gear byl odeslán. Sledujte zásilku v reálném čase nebo upravte pokyny k doručení.",
    "btnConfirm": "Sledovat Zásilku",
    "btnReschedule": "Změnit Adresu"
  },
  "useCases": [
    {
      "title": "Palubní Lístky a Digitální Vstupenky",
      "desc": "Doručujte plnobarevné digitální palubní lístky s živými aktualizacemi nástupní brány přímo na displej telefonu."
    },
    {
      "title": "E-Commerce Bleskové Výprodeje",
      "desc": "Předveďte nové kolekce pomocí posuvných karuselových karet a tlačítek pro okamžitý nákup bez překážek."
    },
    {
      "title": "Plánování a Připomínky Schůzek",
      "desc": "Odesílejte interaktivní připomínky v kalendáři, které umožňují potvrzení nebo změnu termínu jedním klepnutím."
    },
    {
      "title": "Dvoufaktorové Ověřování (2FA)",
      "desc": "Doručujte zabezpečená jednorázová hesla s oficiálním logem značky, chránící před phishingovými útoky."
    }
  ],
  "industriesBadge": "ODVĚTVÍ, KTERÝM POMÁHÁME",
  "industriesTitle": "Firemní zprávy RCS pro všechna tržní odvětví.",
  "industriesSubtitle": "Pomáháme předním organizacím modernizovat komunikaci se zákazníky na chytrých telefonech.",
  "industries": [
    {
      "title": "Letecká Doprava a Pohostinství",
      "desc": "Připomínky odbavení letů, digitální palubní lístky a nabídky na vylepšení hotelových pokojů."
    },
    {
      "title": "Bankovnictví a FinTech",
      "desc": "Okamžitá upozornění na podvodné transakce, měsíční přehledy výdajů a rychlá aktivace platebních karet."
    },
    {
      "title": "Maloobchod a E-Commerce",
      "desc": "Uvedení nových produktů na trh, upozornění na naskladnění a aktualizace stavu přepravy objednávek."
    },
    {
      "title": "Zdravotnictví",
      "desc": "Upozornění na vyzvednutí receptů, potvrzení termínů u lékaře a přihlášení k telemedicínským konzultacím."
    },
    {
      "title": "Automobilový Průmysl",
      "desc": "Upozornění na pravidelný servis, bezpečnostní svolávací akce a možnosti obnovení leasingu."
    }
  ],
  "whyBadge": "PROČ NAŠE PLATFORMA RCS",
  "whyTitle": "Proč Přední Podniky Volí iNet RCS",
  "whySubtitle": "Infrastruktura pro zasílání zpráv na operátorské úrovni, které důvěřují přední světové firmy.",
  "whyCards": {
    "secure": {
      "title": "Ověřená Integrita Značky",
      "description": "Garantované ověření proti spoofingu spolehlivě chrání vaši značku před phishingem a napodobením."
    },
    "cloud": {
      "title": "Globální Přímá Propojení s Operátory",
      "description": "Přímá spojení s mobilními operátory v Severní Americe, Evropě, Asii a Latinské Americe."
    },
    "api": {
      "title": "Jediné Sjednocené API",
      "description": "Jeden jednoduchý koncový bod API obsluhuje RCS s automatickým přepnutím na SMS bez duplicitních poplatků."
    },
    "connectivity": {
      "title": "Garantované Globální Doručení",
      "description": "Inteligentní záložní systémy zajišťují 100% dosah bez ohledu na model telefonu příjemce."
    },
    "automated": {
      "title": "Interaktivní Automatizační Engine",
      "description": "Vytvářejte automatizované chatbotové dialogy, které zákazníky hladce provedou od dotazu až po nákup."
    }
  },
  "apiCard": {
    "title": "API pro Firemní Zprávy RCS",
    "desc": "Odesílejte bohaté karty, karuselové šablony a rychlé odpovědi s automatickou podporou záložní SMS."
  },
  "ctaBadge": "UPGRADUJTE NA RCS NYNÍ",
  "ctaTitle": "Vdechněte komunikaci své značky nový život pomocí RCS.",
  "ctaSubtitle": "Poskytujte bohatší, poutavější mobilní zprávy, které budují důvěru zákazníků a zvyšují konverze.",
  "contactUs": "Začít s RCS",
  "ctaFootnote": "Plná kompatibilnost s Google Jibe a globálním ekosystémem telekomunikačních operátorů"
};

const ro: RcsBusinessMessagingTranslation = {
  "heroBadge": "MESAJE DE AFACERI RCS",
  "heroTitle": "Transformați SMS-ul Obișnuit în Conversații Interactive RCS",
  "heroDesc": "Îmbunătățiți mesageria mobilă cu bife de expeditor verificat, carduri carusel de înaltă rezoluție, butoane interactive de acțiune rapidă și acoperire nativă pe smartphone-urile Android.",
  "talkToExpert": "Vorbiți cu un expert",
  "exploreCapabilities": "Explorați funcționalitățile",
  "chatScreen": {
    "contactName": "Compania Aeriană Skyline Express",
    "status": "Brand RCS Verificat • Bifă Oficială",
    "msg1": "Bună Jordan! Îmbarcarea pentru zborul SK-402 către Zurich a început la Poarta B12. Cartea dvs. de îmbarcare digitală este gata.",
    "time1": "07:30",
    "actionBtn": "Deschide Cartea de Îmbarcare →",
    "msg2": "Mulțumesc mult! Pot face upgrade la un loc cu spațiu suplimentar pentru picioare?",
    "time2": "07:31",
    "msg3": "Locul 12A este disponibil pentru 25 $. Atingeți mai jos pentru confirmare instantanee!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Aplicația Nativă Mesaje Android",
    "secure": "Identitate Verificată a Expeditorului"
  },
  "overviewBadge": "MESAGERIE MOBILĂ DE NOUĂ GENERAȚIE",
  "overviewTitle": "Oferiți experiențe interactive ca într-o aplicație, fără a fi nevoie de instalare.",
  "overviewDesc1": "Rich Communication Services (RCS) reprezintă standardul modern global pentru mesageria de afaceri pe mobil. Comunicați direct în aplicația nativă Mesaje cu logo oficial verificat și imagini de impact.",
  "overviewDesc2": "Eliminați limitările textului simplu. Activați acțiuni cu o singură atingere, partajarea locației, caruseluri interactive și comutare automată de rezervă pe SMS pentru ca niciun client să nu fie omis.",
  "check1": "Încrederea Expeditorului Verificat & Logo Oficial",
  "check2": "Carduri Carusel Interactive & Butoane Rapide",
  "check3": "Protecție Automată de Rezervă prin SMS / MMS",
  "featuresBadge": "CAPABILITĂȚI PRINCIPALE",
  "featuresTitle": "Conținut media bogat. Securitate verificată. Implicare excepțională.",
  "featuresSubtitle": "Tot ce au nevoie echipele dvs. de marketing și asistență pentru a implementa RCS la scară largă.",
  "features": [
    {
      "title": "Branding de Expeditor Verificat",
      "desc": "Afișați sigla oficială a companiei, culorile mărcii și bifa de verificare pentru a inspira încredere instantanee."
    },
    {
      "title": "Caruseluri Media de Înaltă Rezoluție",
      "desc": "Trimiteți carduri interactive glisante cu produse, imagini detaliate, prețuri și linkuri directe de cumpărare."
    },
    {
      "title": "Butoane de Acțiune Sugerată cu o Singură Atingere",
      "desc": "Permiteți clienților să deschidă hărți, să apeleze numere, să salveze evenimente în calendar sau să viziteze site-uri."
    },
    {
      "title": "Sugestii de Răspunsuri Rapide",
      "desc": "Oferiți butoane de răspuns predefinite, astfel încât utilizatorii să răspundă instant fără a fi nevoie să tasteze."
    },
    {
      "title": "Comutare Automată pe SMS de Operator",
      "desc": "Dacă telefonul destinatarului nu acceptă RCS sau nu are conexiune de date, mesajul este transmis automat ca SMS."
    },
    {
      "title": "Confirmări de Citire și Metrici în Timp Real",
      "desc": "Urmăriți ratele de livrare, confirmările de citire și clicurile pe butoanele de acțiune în timp real."
    }
  ],
  "howItWorksBadge": "CUM FUNCȚIONEAZĂ",
  "howItWorksTitle": "Lansați campanii RCS verificate în patru pași simpli.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Verificarea Brandului și Configurare",
      "desc": "Înregistrați profilul companiei, sigla, culorile și documentele legale în registrele oficiale ale operatorilor."
    },
    {
      "step": "02",
      "title": "Proiectarea Șabloanelor Interactive",
      "desc": "Creați carduri media, butoane de acțiune și ramuri de conversație în studioul nostru vizual intuitiv."
    },
    {
      "step": "03",
      "title": "Conectarea API-urilor de Mesagerie",
      "desc": "Integrați API-ul nostru unificat cu rutare automată de rezervă prin SMS-ul operatorului."
    },
    {
      "step": "04",
      "title": "Lansare și Analiză Performanță",
      "desc": "Difuzați campanii de marketing atractive sau alerte tranzacționale cu telemetrie completă a clicurilor."
    }
  ],
  "useCasesBadge": "CAZURI DE UTILIZARE",
  "useCasesTitle": "Atrageți utilizatorii de dispozitive mobile prin conversații mai captivante.",
  "useCasesSubtitle": "Oferiți valoare prin comunicări mobile interactive care cresc ratele de conversie de până la 3 ori.",
  "interactiveCard": {
    "badge": "MESAJ RCS VERIFICAT",
    "message": "Pachetul dvs. de la Apex Gear a fost expediat. Urmăriți livrarea în timp real sau schimbați instrucțiunile de livrare.",
    "btnConfirm": "Urmărire Pachet",
    "btnReschedule": "Schimbare Adresă"
  },
  "useCases": [
    {
      "title": "Cărți de Îmbarcare și Bilete Digitale",
      "desc": "Furnizați cărți de îmbarcare digitale color, cu actualizări de poartă în direct, direct pe ecranul telefonului."
    },
    {
      "title": "Vânzări Promoționale E-Commerce",
      "desc": "Prezentați colecții noi prin carduri carusel glisante și butoane de cumpărare instantanee fără fricțiune."
    },
    {
      "title": "Programări și Mementouri",
      "desc": "Trimiteți mementouri interactive din calendar care permit confirmarea sau reprogramarea cu o singură atingere."
    },
    {
      "title": "Autentificare în Doi Pași (2FA)",
      "desc": "Trimiteți parole unice securizate cu marca dvs. oficială, protejând utilizatorii împotriva atacurilor de phishing."
    }
  ],
  "industriesBadge": "INDUSTRI PE CARE LE DESERVIM",
  "industriesTitle": "Mesagerie de afaceri RCS pentru toate domeniile de piață.",
  "industriesSubtitle": "Ajutăm organizațiile de top să modernizeze comunicarea cu consumatorii pe smartphone-uri.",
  "industries": [
    {
      "title": "Linii Aeriene și Ospitalitate",
      "desc": "Mementouri de check-in, cărți de îmbarcare digitale și propuneri avantajoase de upgrade la camere."
    },
    {
      "title": "Bănci și FinTech",
      "desc": "Alerte de prevenire a fraudelor, rapoarte lunare de cheltuieli și activare instantanee a cardurilor."
    },
    {
      "title": "Comerț cu Amănuntul și E-Commerce",
      "desc": "Lansări de colecții noi, alerte de reaprovizionare a stocurilor și actualizări privind expedierea comenzilor."
    },
    {
      "title": "Sănătate și Medicină",
      "desc": "Mementouri de rețete medicale, confirmări de consultații la clinici și înregistrare la telemedicină."
    },
    {
      "title": "Industria Auto",
      "desc": "Alerte de revizie periodică, notificări de rechemare în service și opțiuni de reînnoire a contractelor de leasing."
    }
  ],
  "whyBadge": "DE CE PLATFORMA NOASTRĂ RCS",
  "whyTitle": "De Ce Companiile Lider Aleg iNet RCS",
  "whySubtitle": "Infrastructură de mesagerie la standard de operator de telecomunicații în care au încredere marile companii.",
  "whyCards": {
    "secure": {
      "title": "Integritate Verificată a Mărcii",
      "description": "Verificarea garantată împotriva falsificării identității protejează brandul împotriva tentativelor de phishing."
    },
    "cloud": {
      "title": "Interconectări Directe cu Operatori Globali",
      "description": "Conexiuni directe cu operatorii de rețele mobile din America de Nord, Europa, Asia și America Latină."
    },
    "api": {
      "title": "API Unic și Simplificat",
      "description": "Un singur endpoint API gestionează RCS cu comutare automată pe SMS fără costuri duble."
    },
    "connectivity": {
      "title": "Livrare Globală Garantată",
      "description": "Motoarele inteligente de rezervă asigură o acoperire de 100%, indiferent de modelul telefonului destinatarului."
    },
    "automated": {
      "title": "Motor de Automatizare Interactiv",
      "description": "Creați fluxuri de dialog automate pentru chatbot care ghidează clienții de la întrebare până la cumpărare."
    }
  },
  "apiCard": {
    "title": "API de Mesagerie RCS pentru Afaceri",
    "desc": "Trimiteți carduri bogate, șabloane carusel și butoane de acțiune cu comutare automată pe SMS integrată."
  },
  "ctaBadge": "TRECEȚI LA RCS ACUM",
  "ctaTitle": "Dați viață comunicării mărcii dvs. prin RCS.",
  "ctaSubtitle": "Oferiți mesaje mobile captivante și interactive care consolidează încrederea și cresc vânzările.",
  "contactUs": "Începeți cu RCS",
  "ctaFootnote": "Compatibilitate deplină cu Google Jibe și ecosistemul global al operatorilor de telefonie"
};

const hu: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS ÜZLETI ÜZENETKÜLDÉS",
  "heroTitle": "Alakítsa át a Hagyományos SMS-t Gazdag, Interaktív RCS-Párbeszédekké",
  "heroDesc": "Emelje új szintre a mobil üzenetküldést hitelesített feladói pipákkal, nagy felbontású lapozható kártyákkal, interaktív gyorsgombokkal és natív Android-eléréssel.",
  "talkToExpert": "Beszéljen egy szakértővel",
  "exploreCapabilities": "Funkciók megismerése",
  "chatScreen": {
    "contactName": "Skyline Express Légitársaság",
    "status": "Hitelesített RCS Márka • Hivatalos Pipa",
    "msg1": "Üdvözöljük Jordan! A zürichi SK-402 járat beszállítása megkezdődött a B12-es kapunál. Digitális beszállókártyája készen áll.",
    "time1": "07:30",
    "actionBtn": "Beszállókártya Megnyitása →",
    "msg2": "Köszönöm szépen! Válthatok nagyobb lábterű ülésre?",
    "time2": "07:31",
    "msg3": "A 12A ülés 25 dollárért elérhető. Érintse meg az alábbi gombot az azonnali megerősítéshez!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Gyári Android Üzenetek Alkalmazás",
    "secure": "Hitelesített Feladói Márkaidentitás"
  },
  "overviewBadge": "ÚJ GENERÁCIÓS MOBIL ÜZENETKÜLDÉS",
  "overviewTitle": "Biztosítson alkalmazásszintű interaktív élményt külön applikáció letöltése nélkül.",
  "overviewDesc1": "A Rich Communication Services (RCS) a mobil üzleti kommunikáció modern globális szabványa. Érje el ügyfeleit közvetlenül a beépített Üzenetek appban hivatalos logóval és látványos képi tartalmakkal.",
  "overviewDesc2": "Hagyja maga mögött a sima szöveg korlátait. Használjon egyérintéses műveleteket, helymegosztást, lapozható termékkártyákat és automatikus SMS-tartalékot, hogy egyetlen ügyfél se maradjon le.",
  "check1": "Hitelesített Feladó Megbízhatósága & Márkalogó",
  "check2": "Interaktív Karusszelkártyák & Gyorsgombok",
  "check3": "Automatikus Biztonsági SMS / MMS Fallback",
  "featuresBadge": "FŐBB FUNKCIÓK",
  "featuresTitle": "Gazdag multimédia. Hitelesített biztonság. Kimagasló ügyfélelköteleződés.",
  "featuresSubtitle": "Minden eszköz, amire marketing- és ügyfélszolgálati csapatainak szüksége van az RCS nagyszabású bevezetéséhez.",
  "features": [
    {
      "title": "Hitelesített Feladói Arculat",
      "desc": "Jelenítse meg hivatalos céglogóját, színeit és a hitelesítési pipát az azonnali ügyfélbizalom megteremtéséhez."
    },
    {
      "title": "Nagy Felbontású Média Karusszelek",
      "desc": "Küldjön lapozható interaktív termékkártyákat fotókkal, árakkal és közvetlen vásárlási hivatkozásokkal."
    },
    {
      "title": "Egyérintéses Javasolt Műveleti Gombok",
      "desc": "Tegye lehetővé a térkép megnyitását, tárcsázást, naptáresemény mentését vagy weboldal látogatását egyetlen érintéssel."
    },
    {
      "title": "Javasolt Gyorsválaszok",
      "desc": "Kínáljon előre megírt válaszlehetőségeket, így a felhasználók gépelés nélkül, azonnal reagálhatnak."
    },
    {
      "title": "Automatikus Szolgáltatói SMS-visszalépés",
      "desc": "Ha a fogadó készülék nem támogatja az RCS-t vagy nincs adatkapcsolata, az üzenet automatikusan normál SMS-ként érkezik meg."
    },
    {
      "title": "Valós Idejű Olvasási Visszajelzések & Statisztikák",
      "desc": "Kövesse a kézbesítési arányokat, az olvasottsági igazolásokat és a gombkattintásokat valós időben."
    }
  ],
  "howItWorksBadge": "HOGYAN MŰKÖDIK",
  "howItWorksTitle": "Indítson hitelesített RCS kampányokat négy egyszerű lépésben.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Márkahitelesítés és Beállítás",
      "desc": "Regisztrálja vállalati profilját, logóját, színeit és hivatalos dokumentumait a szolgáltatói adatbázisokban."
    },
    {
      "step": "02",
      "title": "Interaktív Sablonok Tervezése",
      "desc": "Hozzon létre gazdag kártyákat, akciógombokat és párbeszédfákat vizuális sablonstúdiónkban."
    },
    {
      "step": "03",
      "title": "Üzenetküldő API-k Összekapcsolása",
      "desc": "Integrálja egységesített API-nkat a távközlési szolgáltatók automatikus SMS-tartalék útválasztásával."
    },
    {
      "step": "04",
      "title": "Kiküldés és Elemzés",
      "desc": "Küldjön gazdag marketingkampányokat vagy tranzakciós értesítéseket részletes kattintási statisztikákkal."
    }
  ],
  "useCasesBadge": "FELHASZNÁLÁSI ESETEK",
  "useCasesTitle": "Vonja be a mobilfelhasználókat tartalmasabb párbeszédekkel.",
  "useCasesSubtitle": "Teremtsen értéket interaktív mobilkommunikációval, amely akár 3-szorosára növeli a konverziós arányokat.",
  "interactiveCard": {
    "badge": "HITELESÍTETT RCS ÜZENET",
    "message": "Az Apex Gear csomagját feladtuk. Kövesse nyomon a szállítást valós időben, vagy módosítsa a kézbesítési címet.",
    "btnConfirm": "Csomag Követése",
    "btnReschedule": "Cím Módosítása"
  },
  "useCases": [
    {
      "title": "Beszállókártyák és Digitális Jegyek",
      "desc": "Küldjön színes digitális beszállókártyákat élő kapufrissítésekkel közvetlenül a telefon képernyőjére."
    },
    {
      "title": "E-Kereskedelmi Villámakciók",
      "desc": "Mutasson be új kollekciókat görgethető karusszelkártyákkal és azonnali vásárlási gombokkal akadálytalanul."
    },
    {
      "title": "Időpont-egyeztetés és Emlékeztetők",
      "desc": "Küldjön interaktív naptári emlékeztetőket, amelyek egyetlen érintéssel megerősíthetők vagy átütemezhetők."
    },
    {
      "title": "Kéttényezős Hitelesítés (2FA)",
      "desc": "Biztosítson biztonságos egyszeri jelszavakat hivatalos márkalogóval ellátva az adathalászat megelőzésére."
    }
  ],
  "industriesBadge": "TÁMOGATOTT IPARÁGAK",
  "industriesTitle": "RCS üzleti üzenetküldés minden piaci szektor számára.",
  "industriesSubtitle": "Segítünk a vezető vállalatoknak korszerűsíteni az okostelefonos ügyfélkommunikációt.",
  "industries": [
    {
      "title": "Légitársaságok és Vendéglátás",
      "desc": "Utazási check-in emlékeztetők, digitális beszállókártyák és szobai felminősítési ajánlatok."
    },
    {
      "title": "Bankok és FinTech",
      "desc": "Biztonsági figyelmeztetések gyanús tranzakciókról, havi költési összesítők és azonnali kártyaaktiválás."
    },
    {
      "title": "Kereskedelem és E-Kereskedelem",
      "desc": "Új termékbemutatók, készletértesítések és rendelési szállítási állapotfrissítések."
    },
    {
      "title": "Egészségügy",
      "desc": "Receptkiváltási emlékeztetők, klinikai időpont-visszaigazolások és bejelentkezés telemedicinára."
    },
    {
      "title": "Autóipar",
      "desc": "Időszakos szervizértesítések, biztonsági visszahívások és lízingszerződés-megújítási ajánlatok."
    }
  ],
  "whyBadge": "MIÉRT AZ INET RCS PLATFORM",
  "whyTitle": "Miért Választják a Vezető Vállalatok az iNet RCS-t",
  "whySubtitle": "Szolgáltatói szintű üzenetküldési infrastruktúra, amelyben globális nagyvállalatok bíznak meg.",
  "whyCards": {
    "secure": {
      "title": "Hitelesített Márkaintegritás",
      "description": "Garantált személyazonosság-lopás elleni védelem óvja meg márkáját a csalásoktól és az adathalászattól."
    },
    "cloud": {
      "title": "Közvetlen Globális Szolgáltatói Kapcsolatok",
      "description": "Közvetlen összeköttetés az észak-amerikai, európai, ázsiai és latin-amerikai mobilszolgáltatókkal."
    },
    "api": {
      "title": "Egységesített Egyetlen API",
      "description": "Egyetlen egyszerű API kezeli az RCS-t automatikus SMS-tartalékkal, felesleges dupla költségek nélkül."
    },
    "connectivity": {
      "title": "Garantált Globális Kézbesítés",
      "description": "Intelligens tartalékrendszerek biztosítják a 100%-os elérést a fogadó készülék típusától függetlenül."
    },
    "automated": {
      "title": "Interaktív Automatizálási Motor",
      "description": "Építsen automatizált chatbot-párbeszédeket, amelyek a kezdeti kérdéstől a vásárlásig kísérik az ügyfelet."
    }
  },
  "apiCard": {
    "title": "RCS Üzleti Üzenetküldő API",
    "desc": "Küldjön gazdag kártyákat, karusszelsablonokat és gyorsválaszokat beépített automatikus SMS-tartalékkal."
  },
  "ctaBadge": "VÁLTON RCS-RE MOST",
  "ctaTitle": "Keltse életre márkamarketingjét az RCS segítségével.",
  "ctaSubtitle": "Biztosítson gazdagabb és vonzóbb mobilüzeneteket, amelyek elnyerik az ügyfelek bizalmát és növelik az eladásokat.",
  "contactUs": "Kezdés az RCS-sel",
  "ctaFootnote": "Teljes kompatibilitás a Google Jibe rendszerével és a globális mobilszolgáltatói ökoszisztémával"
};

const uk: RcsBusinessMessagingTranslation = {
  "heroBadge": "RCS БІЗНЕС-ПОВІДОМЛЕННЯ",
  "heroTitle": "Перетворіть Звичайні SMS на Багаті Інтерактивні Діалоги RCS",
  "heroDesc": "Підвищіть ефективність мобільних комунікацій за допомогою галочок верифікованого відправника, каруселей високої роздільної здатності, інтерактивних кнопок швидких дій та нативного охоплення користувачів Android.",
  "talkToExpert": "Консультація з експертом",
  "exploreCapabilities": "Дізнатися про можливості",
  "chatScreen": {
    "contactName": "Авіакомпанія Skyline Express",
    "status": "Верифікований RCS-бренд • Офіційна Галочка",
    "msg1": "Вітаємо, Джордане! Посадка на рейс SK-402 до Цюриха розпочалася біля виходу B12. Ваш цифровий посадковий талон готовий.",
    "time1": "07:30",
    "actionBtn": "Відкрити Посадковий Талон →",
    "msg2": "Щиро дякую! Чи можу я покращити місце до сидіння з додатковим простором для ніг?",
    "time2": "07:31",
    "msg3": "Місце 12A доступне за 25 $. Натисніть нижче для миттєвого підтвердження!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "Штатний Додаток Повідомлення Android",
    "secure": "Офіційний Верифікований Бренд"
  },
  "overviewBadge": "МОБІЛЬНІ ПОВІДОМЛЕННЯ НОВОГО ПОКОЛІННЯ",
  "overviewTitle": "Надавайте інтерактивний досвід рівня повноцінного додатка без необхідності його встановлення.",
  "overviewDesc1": "Rich Communication Services (RCS) — це сучасний світовий стандарт корпоративних мобільних повідомлень. Спілкуйтеся з клієнтами безпосередньо у стандартному додатку Повідомлення з офіційним логотипом та яскравими медіа.",
  "overviewDesc2": "Позбудьтеся обмежень звичайного тексту. Використовуйте дії в один дотик, надсилання геолокації, інтерактивні каруселі та автоматичний резервний перехід на SMS, щоб не пропустити жодного клієнта.",
  "check1": "Довіра до Перевіреного Відправника & Офіційний Логотип",
  "check2": "Інтерактивні Картки-Каруселі & Кнопки Дій",
  "check3": "Автоматичний Резервний Перехід на SMS / MMS",
  "featuresBadge": "КЛЮЧОВІ МОЖЛИВОСТІ",
  "featuresTitle": "Багатий мультимедіа. Перевірена безпека. Виняткове залучення клієнтів.",
  "featuresSubtitle": "Усе, що потрібно вашим командам маркетингу та підтримки для масштабного впровадження RCS.",
  "features": [
    {
      "title": "Брендинг Верифікованого Відправника",
      "desc": "Демонструйте офіційний логотип компанії, корпоративні кольори та галочку верифікації для миттєвої довіри користувачів."
    },
    {
      "title": "Медіа-Каруселі Високої Роздільної Здатності",
      "desc": "Надсилайте інтерактивні картки товарів, що гортаються, з фотографіями, цінами та прямими посиланнями на купівлю."
    },
    {
      "title": "Кнопки Рекомендованих Дій в Один Дотик",
      "desc": "Дозвольте клієнтам відкривати карти, телефонувати, зберігати події в календар або відвідувати сайти одним дотиком."
    },
    {
      "title": "Пропоновані Швидкі Відповіді",
      "desc": "Пропонуйте готові кнопки відповідей, щоб користувачі могли реагувати миттєво без потреби друкувати текст."
    },
    {
      "title": "Автоматичний Резервний SMS-перехід Оператора",
      "desc": "Якщо телефон отримувача не підтримує RCS або не має інтернет-з'єднання, повідомлення автоматично доставляється як SMS."
    },
    {
      "title": "Звіти про Прочитання та Метрики в Реальному Часі",
      "desc": "Відстежуйте показники доставки, підтвердження прочитання та кліки на кнопки в реальному часі."
    }
  ],
  "howItWorksBadge": "ЯК ЦЕ ПРАЦЮЄ",
  "howItWorksTitle": "Запускайте верифіковані RCS-кампанії за чотири простих кроки.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Верифікація Бренду та Налаштування",
      "desc": "Зареєструйте профіль компанії, логотип, кольори та юридичні документи в офіційних реєстрах операторів зв'язку."
    },
    {
      "step": "02",
      "title": "Створення Інтерактивних Шаблонів",
      "desc": "Розробляйте медіа-картки, кнопки дій та сценарії діалогів у нашій візуальній студії шаблонів."
    },
    {
      "step": "03",
      "title": "Підключення API Повідомлень",
      "desc": "Інтегруйте наш єдиний API з автоматичною резервною маршрутизацією через SMS операторів зв'язку."
    },
    {
      "step": "04",
      "title": "Запуск та Аналітика Результатів",
      "desc": "Розсилайте багаті маркетингові кампанії або транзакційні сповіщення з детальною аналітикою кліків."
    }
  ],
  "useCasesBadge": "ПРИКЛАДИ ВИКОРИСТАННЯ",
  "useCasesTitle": "Залучайте користувачів смартфонів до змістовних діалогів.",
  "useCasesSubtitle": "Створюйте цінність завдяки інтерактивній мобільній комунікації, яка збільшує коефіцієнт конверсії до 3 разів.",
  "interactiveCard": {
    "badge": "ВЕРИФІКОВАНЕ RCS-ПОВІДОМЛЕННЯ",
    "message": "Ваше замовлення від Apex Gear відправлено. Відстежуйте доставку в реальному часі або змініть адресу отримувача.",
    "btnConfirm": "Відстежити Посилку",
    "btnReschedule": "Змінити Адресу"
  },
  "useCases": [
    {
      "title": "Посадкові Талони та Квитки",
      "desc": "Доставляйте повноколірні цифрові посадкові талони з живими оновленнями виходу на посадку безпосередньо на екран."
    },
    {
      "title": "Розпродажі та Промоакції E-Commerce",
      "desc": "Демонструйте нові колекції за допомогою карток-каруселей та кнопок швидкої покупки без жодних перешкод."
    },
    {
      "title": "Планування та Нагадування про Зустрічі",
      "desc": "Надсилайте інтерактивні нагадування в календар з можливістю підтвердити або перенести візит в один дотик."
    },
    {
      "title": "Двофакторна Автентифікація (2FA)",
      "desc": "Передавайте безпечні одноразові паролі з офіційним логотипом бренду для надійного захисту від фішингу."
    }
  ],
  "industriesBadge": "ГАЛУЗІ, ЯКІ МИ ОБСЛУГОВУЄМО",
  "industriesTitle": "RCS бізнес-повідомлення для всіх секторів ринку.",
  "industriesSubtitle": "Допомагаємо провідним організаціям модернізувати комунікацію зі споживачами на смартфонах.",
  "industries": [
    {
      "title": "Авіаперевезення та Готельний Бізнес",
      "desc": "Нагадування про реєстрацію на рейс, цифрові посадкові талони та персоналізовані пропозиції покращення номерів."
    },
    {
      "title": "Банки та FinTech",
      "desc": "Сповіщення про підозрілі транзакції, щомісячні звіти про витрати та миттєва активація платіжних карток."
    },
    {
      "title": "Ритейл та Електронна Комерція",
      "desc": "Презентація нових колекцій, повідомлення про наявність товару та оновлення статусу доставки замовлень."
    },
    {
      "title": "Охорона Здоров'я та Медицина",
      "desc": "Нагадування про ліки за рецептом, підтвердження візитів до лікаря та реєстрація на телемедичні консультації."
    },
    {
      "title": "Автомобільний Сектор",
      "desc": "Нагадування про регулярне ТО, сервісні відкликання авто та пропозиції щодо продовження лізингу."
    }
  ],
  "whyBadge": "ЧОМУ НАША ПЛАТФОРМА RCS",
  "whyTitle": "Чому Провідні Підприємства Обирають iNet RCS",
  "whySubtitle": "Інфраструктура повідомлень операторського рівня, якій довіряють провідні світові корпорації.",
  "whyCards": {
    "secure": {
      "title": "Підтверджена Справжність Бренду",
      "description": "Надійний захист від спуфінгу захищає ваш бренд від фішингових атак і спроб несанкціонованої імітації."
    },
    "cloud": {
      "title": "Прямі Міжоператорські Канали у Світі",
      "description": "Прямі з'єднання з операторами мобільних мереж у Північній Америці, Європі, Азії та Латинській Америці."
    },
    "api": {
      "title": "Єдиний Уніфікований API",
      "description": "Один простий API забезпечує роботу з RCS з автоматичним резервом на SMS без зайвих подвійних витрат."
    },
    "connectivity": {
      "title": "Гарантована Глобальна Доставка",
      "description": "Розумні резервні алгоритми забезпечують 100% доставки незалежно від моделі смартфона клієнта."
    },
    "automated": {
      "title": "Інтерактивний Рушій Автоматизації",
      "description": "Створюйте сценарії автоматизованих чат-ботів, які ведуть клієнта від початкового запитання до покупки."
    }
  },
  "apiCard": {
    "title": "API Бізнес-Повідомлень RCS",
    "desc": "Надсилайте мультимедійні картки, каруселі та кнопки дій з автоматичним резервним переходом на SMS."
  },
  "ctaBadge": "ПЕРЕХОДЬТЕ НА RCS ЗАРАЗ",
  "ctaTitle": "Вдихніть нове життя в комунікацію вашого бренду завдяки RCS.",
  "ctaSubtitle": "Доставляйте багатші та привабливіші мобільні повідомлення, які формують довіру та стимулюють продажі.",
  "contactUs": "Розпочати з RCS",
  "ctaFootnote": "Повна сумісність з Google Jibe та світовою екосистемою мобільних операторів зв'язку"
};

const he: RcsBusinessMessagingTranslation = {
  "heroBadge": "הודעות עסקיות RCS",
  "heroTitle": "הפכו הודעות SMS רגילות לשיחות עשירות ואינטראקטיביות ב-RCS",
  "heroDesc": "שדרגו את ההודעות הניידות עם תגי שולח מאומתים, כרטיסי קרוסלה ברזולוציה גבוהה, כפתורי פעולה מהירה ונגישות מקורית בכל סמארטפון אנדרואיד.",
  "talkToExpert": "דבר עם מומחה",
  "exploreCapabilities": "גלה את היכולות",
  "chatScreen": {
    "contactName": "חברת התעופה סקייליין אקספרס",
    "status": "מותג RCS מאומת • תג רשמי",
    "msg1": "שלום ג'ורדן! העלייה לטיסה SK-402 לציריך החלה בשער B12. כרטיס העלייה הדיגיטלי שלך מוכן.",
    "time1": "07:30",
    "actionBtn": "פתח כרטיס עלייה למטוס ←",
    "msg2": "תודה רבה! האם אוכל לשדרג למושב עם מרווח רגליים נוסף?",
    "time2": "07:31",
    "msg3": "מושב 12A זמין עבור $25. לחץ למטה לאישור מיידי!",
    "time3": "07:32"
  },
  "heroBadges": {
    "crm": "אפליקציית ההודעות המקורית של אנדרואיד",
    "secure": "זהות שולח מאומתת ומאושרת"
  },
  "overviewBadge": "הדור הבא של הודעות לנייד",
  "overviewTitle": "העניקו חוויה עשירה ואינטראקטיבית כמו באפליקציה, ללא צורך בהורדת אפליקציה כלל.",
  "overviewDesc1": "שירותי תקשורת עשירים (RCS) הם התקן העולמי המודרני לתקשורת עסקית בנייד. הגיעו ללקוחות ישירות באפליקציית ההודעות המובנית עם לוגו רשמי ותכנים ויזואליים מרשימים.",
  "overviewDesc2": "השתחררו ממגבלות הטקסט הרגיל. הפעילו פעולות בלחיצה אחת, שיתוף מיקום, כרטיסי קרוסלה אינטראקטיביים ומעבר גיבוי אוטומטי ל-SMS כדי שאף לקוח לא יפוספס.",
  "check1": "אמינות שולח מאומת & לוגו מותג",
  "check2": "כרטיסי קרוסלה אינטראקטיביים & כפתורי פעולה",
  "check3": "גיבוי אוטומטי ומאובטח ל-SMS / MMS",
  "featuresBadge": "יכולות מרכזיות",
  "featuresTitle": "מדיה עשירה. אבטחה מאומתת. מעורבות לקוחות יוצאת דופן.",
  "featuresSubtitle": "כל מה שצוותי השיווק ושירות הלקוחות שלכם צריכים כדי לפרוס RCS בהיקף נרחב.",
  "features": [
    {
      "title": "מיתוג שולח מאומת",
      "desc": "הציגו את לוגו החברה הרשמי, צבעי המותג ותג האימות כדי לבנות אמון מיידי אצל הלקוח."
    },
    {
      "title": "קרוסלות מדיה ברזולוציה גבוהה",
      "desc": "שלחו כרטיסי מוצר הניתנים להחלקה עם תמונות, מחירים וקישורי רכישה ישירים."
    },
    {
      "title": "כפתורי פעולה מוצעים בלחיצה אחת",
      "desc": "אפשרו ללקוחות לפתוח מפות, לחייג, לשמור אירועים ביומן או לגלוש לאתר בלחיצה אחת קלה."
    },
    {
      "title": "תשובות מהירות מוצעות",
      "desc": "הציגו אפשרויות תגובה מוכנות מראש כדי שהמשתמשים יוכלו לענות במהירות ללא צורך בהקלדה."
    },
    {
      "title": "מעבר גיבוי אוטומטי ל-SMS של המפעיל",
      "desc": "אם המכשיר אינו תומך ב-RCS או שאין חיבור אינטרנט, ההודעה נשלחת אוטומטית כ-SMS רגיל."
    },
    {
      "title": "אישורי קריאה ומדדים בזמן אמת",
      "desc": "עקבו אחר שיעורי מסירה, אישורי קריאה ולחיצות על כפתורי פעולה בזמן אמת."
    }
  ],
  "howItWorksBadge": "איך זה עובד",
  "howItWorksTitle": "השיקו קמפיינים מאומתים ב-RCS בארבעה שלבים פשוטים.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "אימות מותג והגדרה",
      "desc": "רשמו את פרופיל החברה, הלוגו, הצבעים והמסמכים המשפטיים ברשומות הרשמיות של מפעילי הסלולר."
    },
    {
      "step": "02",
      "title": "עיצוב תבניות אינטראקטיביות",
      "desc": "צרו כרטיסי מדיה, כפתורי פעולה ותרשימי שיחה בסטודיו התבניות הוויזואלי והאינטואיטיבי שלנו."
    },
    {
      "step": "03",
      "title": "חיבור ממשקי API להודעות",
      "desc": "שלבו את ה-API המאוחד שלנו עם ניתוב גיבוי אוטומטי דרך SMS של המפעיל."
    },
    {
      "step": "04",
      "title": "השקה וניתוח ביצועים",
      "desc": "שדרו קמפיינים שיווקיים עשירים או התראות תפעוליות עם ניתוח מלא של לחיצות ומעורבות."
    }
  ],
  "useCasesBadge": "תרחישי שימוש",
  "useCasesTitle": "רתמו את משתמשי הנייד באמצעות חוויות שיחה עשירות ומהנות.",
  "useCasesSubtitle": "ספקו ערך מוסף באמצעות תקשורת ניידת אינטראקטיבית המגדילה את שיעורי ההמרה עד פי 3.",
  "interactiveCard": {
    "badge": "הודעת RCS מאומתת",
    "message": "החבילה שלך מ-Apex Gear נשלחה. עקוב אחר המשלוח בזמן אמת או עדכן את הוראות המסירה.",
    "btnConfirm": "מעקב אחר חבילה",
    "btnReschedule": "שינוי כתובת"
  },
  "useCases": [
    {
      "title": "כרטיסי עלייה למטוס וכרטיסים דיגיטליים",
      "desc": "העבירו כרטיסי עלייה למטוס צבעוניים עם עדכוני שער חיים ישירות למסך הטלפון."
    },
    {
      "title": "מכירות בזק ומסחר אלקטרוני",
      "desc": "הציגו קולקציות חדשות באמצעות כרטיסי קרוסלה נגללים וכפתורי רכישה מיידיים."
    },
    {
      "title": "תזכורות ותיאום פגישות",
      "desc": "שלחו תזכורות יומן אינטראקטיביות המאפשרות אישור או שינוי מועד בלחיצה אחת."
    },
    {
      "title": "אימות דו-שלבי (2FA)",
      "desc": "ספקו סיסמאות חד-פעמיות מאובטחות עם מיתוג רשמי להגנה מפני התקפות פישינג."
    }
  ],
  "industriesBadge": "ענפים שאנו משרתים",
  "industriesTitle": "הודעות עסקיות RCS לכל מגזרי השוק.",
  "industriesSubtitle": "מסייעים לארגונים מובילים לחדש את ערוצי התקשורת עם הצרכנים בסמארטפונים.",
  "industries": [
    {
      "title": "תעופה ואירוח",
      "desc": "תזכורות צ'ק-אין לטיסות, כרטיסי עלייה למטוס דיגיטליים והצעות שדרוג חדרים בבתי מלון."
    },
    {
      "title": "בנקאות ו-FinTech",
      "desc": "התראות מיידיות על עסקאות חשודות, סיכומי הוצאות חודשיים והפעלת כרטיסי אשראי מהירה."
    },
    {
      "title": "קמעונאות ומסחר אלקטרוני",
      "desc": "השקת קולקציות חדשות, התראות על חזרת פריטים למלאי ועדכוני סטטוס שילוח."
    },
    {
      "title": "בריאות ורפואה",
      "desc": "תזכורות לחידוש מרשמים, אישורי תורים במרפאות והרשמה לייעוץ רפואי מרחוק."
    },
    {
      "title": "רכב ותחבורה",
      "desc": "תזכורות לטיפולים תקופתיים, הודעות ריקול בטיחותיות ואפשרויות חידוש עסקאות ליסינג."
    }
  ],
  "whyBadge": "למה לבחור בפלטפורמת ה-RCS שלנו",
  "whyTitle": "מדוע ארגונים מובילים בוחרים ב-iNet RCS",
  "whySubtitle": "תשתית הודעות ברמת מפעיל סלולרי הזוכה לאמון חברות גלובליות מובילות.",
  "whyCards": {
    "secure": {
      "title": "שלמות ואמינות מותג מאומתת",
      "description": "מנגנון אימות מתקדם נגד זיוף זהות מגן על המותג שלכם מפני פישינג והתחזות."
    },
    "cloud": {
      "title": "קישוריות ישירה למפעילי סלולר בעולם",
      "description": "חיבורים ישירים למפעילי רשתות סלולר בצפון אמריקה, אירופה, אסיה ואמריקה הלטינית."
    },
    "api": {
      "title": "ממשק API מאוחד ויחיד",
      "description": "נקודת קצה פשוטה אחת מנהלת RCS עם גיבוי אוטומטי ל-SMS ללא חיובים כפולים."
    },
    "connectivity": {
      "title": "מסירה עולמית מובטחת",
      "description": "מנגנוני גיבוי חכמים מבטיחים 100% הגעה ללא קשר לדגם המכשיר של הנמען."
    },
    "automated": {
      "title": "מנוע אוטומציה אינטראקטיבי",
      "description": "צרו תהליכי צ'אטבוט אוטומטיים המלווים את הלקוחות משלב השאלה ועד להשלמת הפעולה."
    }
  },
  "apiCard": {
    "title": "ממשק API להודעות RCS עסקיות",
    "desc": "שלחו כרטיסים אינטראקטיביים, תבניות קרוסלה וכפתורי מענה מהיר עם תמיכה מובנית ב-SMS."
  },
  "ctaBadge": "שדרגו ל-RCS עכשיו",
  "ctaTitle": "הפיחו חיים בתקשורת המותג שלכם באמצעות RCS.",
  "ctaSubtitle": "ספקו הודעות ניידות עשירות ומושכות יותר הבונות אמון אצל הלקוח ומגדילות את המכירות.",
  "contactUs": "התחילו עם RCS",
  "ctaFootnote": "תאימות מלאה ל-Google Jibe ולאקוסיסטם העולמי של מפעילי הסלולר"
};

const translations: Record<string, RcsBusinessMessagingTranslation> = {
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

export const getRcsBusinessMessagingTranslations = (
  language?: string,
  _region?: string,
  _regionName?: string
): RcsBusinessMessagingTranslation => {
  return (language && translations[language]) || en;
};

export const getRcsTranslations = getRcsBusinessMessagingTranslations;

export default getRcsBusinessMessagingTranslations;

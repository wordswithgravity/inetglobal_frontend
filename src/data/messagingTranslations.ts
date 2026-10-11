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
    inputPlaceholder?: string;
  };
}

export const messagingTranslations: Record<string, MessagingTranslations> = {
  "en": {
    "heroBadge": "MESSAGING SERVICE",
    "heroTitle": "Connect Instantly with Reliable SMS Communication",
    "heroDesc": "Business SMS Solutions provide one of the fastest and most effective ways to communicate with customers, employees, and partners.",
    "getStarted": "Get Started",
    "contactUs": "Contact Us",
    "coreServiceBadge": "OUR CORE SERVICE",
    "coreServiceTitle": "SMS solutions built for every industry",
    "coreServiceSubtitle": "Modular telecom infrastructure engineered for high-availability voice, messaging, and virtual numbers.",
    "services": {
      "wholesaleSms": {
        "title": "Wholesale SMS",
        "description": "High-capacity SMS termination with route options designed around delivery speed, coverage, and cost efficiency.",
        "bullet1": "High delivery assurance",
        "bullet2": "Flexible route options",
        "bullet3": "Global coverage",
        "learnMore": "Learn more"
      },
      "rcsMessaging": {
        "title": "RCS Business Messaging",
        "description": "Deliver critical transactional SMS, OTPs, and rich business messaging directly to handsets worldwide with high delivery assurance.",
        "bullet1": "Rich media & interactive cards",
        "bullet2": "Verified sender branding",
        "bullet3": "Actionable quick replies",
        "learnMore": "Learn more"
      },
      "otpSms": {
        "title": "OTP SMS",
        "description": "Ultra-fast time-critical verification codes and two-factor authentication SMS delivered in seconds globally.",
        "bullet1": "Sub-second delivery speeds",
        "bullet2": "Direct operator binds",
        "bullet3": "High conversion rates",
        "learnMore": "Learn more"
      }
    },
    "whyChooseBadge": "WHY OUR INET SMS SOLUTION",
    "whyChooseTitle": "Why Choose Our SMS Solutions",
    "whyChooseSubtitle": "Built for clear connections, flexible routing, and reliable voice & messaging performance across global markets.",
    "whyCards": {
      "secure": {
        "title": "Secure and Reliable Communication",
        "description": "Our infrastructure is designed to support secure business messaging with high throughput and carrier-grade reliability."
      },
      "cloud": {
        "title": "Cloud-Based Infrastructure",
        "description": "Leverage scalable Cloud Messaging Solutions that eliminate hardware bottlenecks while providing maximum delivery rates."
      },
      "api": {
        "title": "Voice & SMS API Integration",
        "description": "As a trusted Communication API Provider, we help businesses integrate SMS and calling capabilities into websites, mobile apps, CRM systems, and customer platforms."
      },
      "connectivity": {
        "title": "Global Carrier Connectivity",
        "description": "Direct Tier-1 carrier interconnects across 190+ countries ensure uninterrupted, high-priority delivery anywhere in the world."
      },
      "automated": {
        "title": "Automated Messaging Services",
        "description": "Improve engagement through automated notifications, trigger-based campaigns, appointment reminders, and two-way conversations."
      }
    },
    "featuresBadge": "WHAT OUR SMS SERVICES PROVIDES",
    "featuresTitle": "Everything You Need for Smarter SMS Communication",
    "featuresSubtitle": "Reliable messaging infrastructure built to help businesses send, manage, and monitor SMS at scale—with speed, security, and global reach.",
    "features": [
      {
        "title": "Real-Time Analytics",
        "description": "Track delivery, performance, and messaging activity instantly.",
        "subtext": "Live analytics • 24/7 NOC"
      },
      {
        "title": "Global SMS Messaging",
        "description": "Reach customers worldwide with reliable SMS delivery.",
        "subtext": "Quality • Cost • Compliance"
      },
      {
        "title": "High-Speed Delivery",
        "description": "Send messages quickly with optimized global routes.",
        "subtext": "Live analytics • 24/7 NOC"
      },
      {
        "title": "Secure Messaging",
        "description": "Protect business communications with secure infrastructure.",
        "subtext": "Quality • Cost • Compliance"
      },
      {
        "title": "Powerful SMS API",
        "description": "Connect your applications with flexible SMS APIs.",
        "subtext": "Live analytics • 24/7 NOC"
      }
    ],
    "ctaBadge": "LET'S BUILD YOUR MESSAGING NETWORK",
    "ctaTitle": "Grow Your Business with Business SMS Solutions",
    "ctaSubtitle": "From intelligent routing and high-capacity SMS termination to RCS and OTP verification, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
    "floatingBadges": {
      "wholesale": {
        "title": "Wholesale SMS",
        "desc": "High volume messaging"
      },
      "rcs": {
        "title": "RCS Business Messaging",
        "desc": "Rich interactive business messaging"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Special verification message delivery"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global Team",
      "status": "Verified Sender",
      "msg1": "Here is your verification code for the portal: 849201",
      "time1": "10:24 AM",
      "msg2": "Great! Thank you for the update.",
      "time2": "10:25 AM",
      "inputPlaceholder": "Type a message..."
    }
  },
  "es": {
    "heroBadge": "SERVICIO DE MENSAJERÍA",
    "heroTitle": "Conéctese al Instante con Comunicación SMS Confiable",
    "heroDesc": "Las soluciones de SMS empresariales ofrecen una de las formas más rápidas y eficaces de comunicarse con clientes, empleados y socios.",
    "getStarted": "Comenzar",
    "contactUs": "Contáctenos",
    "coreServiceBadge": "NUESTRO SERVICIO PRINCIPAL",
    "coreServiceTitle": "Soluciones de SMS diseñadas para cada industria",
    "coreServiceSubtitle": "Infraestructura de telecomunicaciones modular diseñada para voz de alta disponibilidad, mensajería y números virtuales.",
    "services": {
      "wholesaleSms": {
        "title": "SMS Mayorista",
        "description": "Terminación de SMS de alta capacidad con opciones de ruta diseñadas para velocidad de entrega, cobertura y costo eficiente.",
        "bullet1": "Alta garantía de entrega",
        "bullet2": "Opciones de ruta flexibles",
        "bullet3": "Cobertura global",
        "learnMore": "Saber más"
      },
      "rcsMessaging": {
        "title": "Mensajería Empresarial RCS",
        "description": "Entregue SMS transaccionales, códigos OTP y mensajería enriquecida directamente a dispositivos en todo el mundo.",
        "bullet1": "Multimedia enriquecida y tarjetas interactivas",
        "bullet2": "Marca con remitente verificado",
        "bullet3": "Respuestas rápidas accionables",
        "learnMore": "Saber más"
      },
      "otpSms": {
        "title": "SMS OTP",
        "description": "Códigos de verificación ultrarrápidos y autenticación de dos factores entregados en segundos globalmente.",
        "bullet1": "Velocidad de entrega en submilisegundos",
        "bullet2": "Conexiones directas con operadores",
        "bullet3": "Altas tasas de conversión",
        "learnMore": "Saber más"
      }
    },
    "whyChooseBadge": "POR QUÉ NUESTRA SOLUCIÓN SMS INET",
    "whyChooseTitle": "Por Qué Elegir Nuestras Soluciones SMS",
    "whyChooseSubtitle": "Creado para conexiones claras, enrutamiento flexible y rendimiento confiable de mensajería en mercados globales.",
    "whyCards": {
      "secure": {
        "title": "Comunicación Segura y Confiable",
        "description": "Nuestra infraestructura está diseñada para soportar mensajería empresarial segura con alto rendimiento y confiabilidad de nivel de operador."
      },
      "cloud": {
        "title": "Infraestructura en la Nube",
        "description": "Aproveche soluciones escalables en la nube que eliminan cuellos de botella de hardware y garantizan tasas de entrega máximas."
      },
      "api": {
        "title": "Integración de API de Voz y SMS",
        "description": "Como proveedor confiable de API de comunicación, ayudamos a integrar capacidades de mensajería en sitios web, apps móviles y CRM."
      },
      "connectivity": {
        "title": "Conectividad Global de Operadores",
        "description": "Interconexiones directas con operadores Tier-1 en más de 190 países garantizan una entrega prioritaria sin interrupciones."
      },
      "automated": {
        "title": "Servicios de Mensajería Automatizada",
        "description": "Mejore el compromiso mediante notificaciones automáticas, campañas por eventos, recordatorios y chats bidireccionales."
      }
    },
    "featuresBadge": "LO QUE OFRECEN NUESTROS SERVICIOS SMS",
    "featuresTitle": "Todo lo que Necesita para una Comunicación SMS Inteligente",
    "featuresSubtitle": "Infraestructura confiable para enviar, administrar y monitorear SMS a escala con velocidad, seguridad y alcance global.",
    "features": [
      {
        "title": "Análisis en Tiempo Real",
        "description": "Monitoree la entrega, rendimiento y actividad de mensajería al instante.",
        "subtext": "Análisis en vivo • NOC 24/7"
      },
      {
        "title": "Mensajería SMS Global",
        "description": "Llegue a clientes en todo el mundo con entrega confiable de SMS.",
        "subtext": "Calidad • Costo • Cumplimiento"
      },
      {
        "title": "Entrega de Alta Velocidad",
        "description": "Envíe mensajes rápidamente con rutas globales optimizadas.",
        "subtext": "Análisis en vivo • NOC 24/7"
      },
      {
        "title": "Mensajería Segura",
        "description": "Proteja las comunicaciones comerciales con infraestructura protegida.",
        "subtext": "Calidad • Costo • Cumplimiento"
      },
      {
        "title": "Potente API de SMS",
        "description": "Conecte sus aplicaciones con APIs de SMS flexibles y fáciles de integrar.",
        "subtext": "Análisis en vivo • NOC 24/7"
      }
    ],
    "ctaBadge": "CONSTRUYAMOS SU RED DE MENSAJERÍA",
    "ctaTitle": "Haga Crecer su Negocio con Soluciones SMS Empresariales",
    "ctaSubtitle": "Desde enrutamiento inteligente y terminación mayorista de SMS hasta RCS y verificación OTP, iNet Global proporciona soluciones de comunicación escalables y eficientes.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS Mayorista",
        "desc": "Mensajería de alto volumen"
      },
      "rcs": {
        "title": "Mensajería RCS",
        "desc": "Mensajería interactiva enriquecida"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Entrega de códigos de verificación"
      }
    },
    "chatScreen": {
      "contactName": "Equipo iNet Global",
      "status": "Remitente Verificado",
      "msg1": "Aquí está su código de verificación para el portal: 849201",
      "time1": "10:24 AM",
      "msg2": "¡Excelente! Gracias por la confirmación.",
      "time2": "10:25 AM",
      "inputPlaceholder": "Escribe un mensaje..."
    }
  },
  "zh": {
    "heroBadge": "短信服务",
    "heroTitle": "通过可靠的短信通信即刻建立连接",
    "heroDesc": "企业短信解决方案为与客户、员工和合作伙伴进行高触达沟通提供了快捷高效的方式。",
    "getStarted": "立即开始",
    "contactUs": "联系我们",
    "coreServiceBadge": "核心业务",
    "coreServiceTitle": "专为各行各业量身定制的短信解决方案",
    "coreServiceSubtitle": "高可用语音、短信和虚拟号码模块化电信基础设施。",
    "services": {
      "wholesaleSms": {
        "title": "批发短信",
        "description": "大容量短信落地服务，针对交付速度、覆盖范围和成本效益进行深度优化。",
        "bullet1": "极高送达率保证",
        "bullet2": "灵活多样的路由选择",
        "bullet3": "全球广泛网络覆盖",
        "learnMore": "了解更多"
      },
      "rcsMessaging": {
        "title": "RCS 富媒体商业短信",
        "description": "将关键交易短信、动态验证码和富媒体商务消息直接送达全球终端，保障高送达率。",
        "bullet1": "富媒体与交互卡片",
        "bullet2": "认证发送者官方标识",
        "bullet3": "可快捷操作的一键回复",
        "learnMore": "了解更多"
      },
      "otpSms": {
        "title": "OTP 动态验证码短信",
        "description": "极速下发时间敏感型验证码及双重身份验证短信，数秒内送达全球用户。",
        "bullet1": "亚秒级极速送达",
        "bullet2": "直连全球一级运营商通道",
        "bullet3": "显著提升业务转化率",
        "learnMore": "了解更多"
      }
    },
    "whyChooseBadge": "为什么选择 INET 短信方案",
    "whyChooseTitle": "为什么选择我们的短信解决方案",
    "whyChooseSubtitle": "专为清晰连接、灵活路由分配以及跨全球市场的可靠通信性能而打造。",
    "whyCards": {
      "secure": {
        "title": "安全可靠的企业通信",
        "description": "我们的网络基础设施专为大吞吐量、运营商级稳定性和严苛的安全通信而设计。"
      },
      "cloud": {
        "title": "云原生弹性基础设施",
        "description": "利用可弹性扩展的云短信解决方案，消除硬件性能瓶颈，确保最高送达率。"
      },
      "api": {
        "title": "语音与短信 API 深度集成",
        "description": "作为受信赖的通信 API 服务商，我们助力企业将短信及语音能力无缝嵌入网站、APP及 CRM 系统。"
      },
      "connectivity": {
        "title": "全球运营商直连网络",
        "description": "覆盖 190+ 国家和地区的直连 Tier-1 运营商互联，确保全球范围内全天候高优先级下发。"
      },
      "automated": {
        "title": "全自动智能化消息服务",
        "description": "通过自动化通知、事件触发营销、预约提醒及双向会话功能全面提升用户互动率。"
      }
    },
    "featuresBadge": "短信平台核心功能",
    "featuresTitle": "构建智慧短信通信所需的一切能力",
    "featuresSubtitle": "可靠的通信底层支撑，助企业大规模发送、管理和监控短信，兼具速度、安全与全球触达能力。",
    "features": [
      {
        "title": "实时数据分析",
        "description": "即时追踪短信下发状态、送达表现及通信活跃度指标。",
        "subtext": "实时监控面板 • 7×24 网络运营中心"
      },
      {
        "title": "全球短信覆盖",
        "description": "依托高可靠短信网络触达全球海量移动终端用户。",
        "subtext": "高品质 • 优成本 • 合规合规"
      },
      {
        "title": "超高速下发通道",
        "description": "通过算法智能优化的国际路由通道秒级触达。",
        "subtext": "实时监控面板 • 7×24 网络运营中心"
      },
      {
        "title": "金融级安全加密",
        "description": "通过企业级安全基础设施严密保护商业机密与通信内容。",
        "subtext": "高品质 • 优成本 • 合规合规"
      },
      {
        "title": "强大灵活的短信 API",
        "description": "开发者友好的现代化 REST API，轻松与自有业务系统对接。",
        "subtext": "实时监控面板 • 7×24 网络运营中心"
      }
    ],
    "ctaBadge": "立即构建您的全球消息网络",
    "ctaTitle": "借助企业级短信解决方案加速业务增长",
    "ctaSubtitle": "从智能路由与大容量短信落地到 RCS 与动态验证码，iNet Global 提供高扩展性的电信通信方案，助您全球业务顺畅连接。",
    "floatingBadges": {
      "wholesale": {
        "title": "批发短信",
        "desc": "海量高并发短信"
      },
      "rcs": {
        "title": "RCS 商业消息",
        "desc": "多媒体交互式富媒体"
      },
      "otp": {
        "title": "OTP 验证码",
        "desc": "关键身份认证极速送达"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global 官方团队",
      "status": "认证发送者",
      "msg1": "您的平台登录验证码为：849201，有效期 5 分钟。",
      "time1": "10:24",
      "msg2": "验证码已收到，感谢！",
      "time2": "10:25",
      "inputPlaceholder": "输入消息..."
    }
  },
  "hi": {
    "heroBadge": "मैसेजिंग सेवा",
    "heroTitle": "भरोसेमंद SMS संचार के साथ तुरंत जुड़ें",
    "heroDesc": "बिजनेस SMS समाधान ग्राहकों, कर्मचारियों और भागीदारों के साथ संवाद करने के सबसे तेज़ और प्रभावी तरीकों में से एक हैं।",
    "getStarted": "शुरू करें",
    "contactUs": "संपर्क करें",
    "coreServiceBadge": "हमारी मुख्य सेवा",
    "coreServiceTitle": "हर उद्योग के लिए निर्मित SMS समाधान",
    "coreServiceSubtitle": "उच्च उपलब्धता वाली वॉइस, मैसेजिंग और वर्चुअल नंबरों के लिए मॉड्यूलर टेलीकॉम इन्फ्रास्ट्रक्चर।",
    "services": {
      "wholesaleSms": {
        "title": "होलसेल SMS",
        "description": "उच्च क्षमता वाली SMS टर्मिनेशन, जो डिलीवरी गति, कवरेज और लागत दक्षता के लिए अनुकूलित है।",
        "bullet1": "उच्च डिलीवरी आश्वासन",
        "bullet2": "लचीले रूट विकल्प",
        "bullet3": "वैश्विक कवरेज",
        "learnMore": "और जानें"
      },
      "rcsMessaging": {
        "title": "RCS बिजनेस मैसेजिंग",
        "description": "क्रिटिकल ट्रांजैक्शनल SMS, OTP और रिच बिजनेस मैसेजिंग सीधे दुनिया भर के मोबाइल हैंडसेट पर डिलीवर करें।",
        "bullet1": "रिच मीडिया और इंटरैक्टिव कार्ड",
        "bullet2": "सत्यापित प्रेषक ब्रांडिंग",
        "bullet3": "त्वरित प्रतिक्रिया बटन",
        "learnMore": "और जानें"
      },
      "otpSms": {
        "title": "OTP SMS",
        "description": "अति-त्वरित सत्यापन कोड और दो-चरणीय प्रमाणीकरण SMS जो सेकंडों में विश्व स्तर पर डिलीवर होते हैं।",
        "bullet1": "सब-सेकंड डिलीवरी गति",
        "bullet2": "सीधे ऑपरेटर कनेक्शन",
        "bullet3": "उच्च रूपांतरण दर",
        "learnMore": "और जानें"
      }
    },
    "whyChooseBadge": "हमारा INET SMS समाधान क्यों चुनें",
    "whyChooseTitle": "हमारे SMS समाधान क्यों चुनें",
    "whyChooseSubtitle": "वैश्विक बाजारों में स्पष्ट कनेक्शन, लचीले रूटिंग और विश्वसनीय प्रदर्शन के लिए निर्मित।",
    "whyCards": {
      "secure": {
        "title": "सुरक्षित और विश्वसनीय संचार",
        "description": "हमारा इन्फ्रास्ट्रक्चर उच्च थ्रूपुट और कैरियर-ग्रेड विश्वसनीयता के साथ सुरक्षित बिजनेस मैसेजिंग का समर्थन करता है।"
      },
      "cloud": {
        "title": "क्लाउड-आधारित इन्फ्रास्ट्रक्चर",
        "description": "स्केलेबल क्लाउड मैसेजिंग समाधानों का लाभ उठाएं जो हार्डवेयर बाधाओं को दूर करते हुए अधिकतम डिलीवरी सुनिश्चित करते हैं।"
      },
      "api": {
        "title": "वॉइस और SMS API एकीकरण",
        "description": "एक विश्वसनीय कम्युनिकेशन API प्रदाता के रूप में, हम वेबसाइटों, ऐप्स और CRM सिस्टम में SMS क्षमताओं को जोड़ने में मदद करते हैं।"
      },
      "connectivity": {
        "title": "वैश्विक कैरियर कनेक्टिविटी",
        "description": "190+ देशों में डायरेक्ट टियर-1 कैरियर इंटरकनेक्ट दुनिया में कहीं भी निर्बाध और प्राथमिकता वाली डिलीवरी सुनिश्चित करते हैं।"
      },
      "automated": {
        "title": "स्वचालित मैसेजिंग सेवाएं",
        "description": "स्वचालित सूचनाओं, ट्रिगर-आधारित अभियानों, अपॉइंटमेंट रिमाइंडर और टू-वे चैट के माध्यम से जुड़ाव बढ़ाएं।"
      }
    },
    "featuresBadge": "हमारी SMS सेवाएं क्या प्रदान करती हैं",
    "featuresTitle": "स्मार्ट SMS संचार के लिए आवश्यक सब कुछ",
    "featuresSubtitle": "व्यवसायों को बड़े पैमाने पर SMS भेजने, प्रबंधित करने और मॉनिटर करने में मदद करने के लिए बनाया गया विश्वसनीय इन्फ्रास्ट्रक्चर।",
    "features": [
      {
        "title": "रीयल-टाइम एनालिटिक्स",
        "description": "डिलीवरी स्थिति, प्रदर्शन और मैसेजिंग गतिविधि को तुरंत ट्रैक करें।",
        "subtext": "लाइव एनालिटिक्स • 24/7 NOC"
      },
      {
        "title": "वैश्विक SMS मैसेजिंग",
        "description": "भरोसेमंद SMS डिलीवरी के साथ दुनिया भर के ग्राहकों तक पहुंचें।",
        "subtext": "गुणवत्ता • लागत • अनुपालन"
      },
      {
        "title": "उच्च गति डिलीवरी",
        "description": "अनुकूलित वैश्विक मार्गों के साथ संदेशों को तेजी से भेजें।",
        "subtext": "लाइव एनालिटिक्स • 24/7 NOC"
      },
      {
        "title": "सुरक्षित मैसेजिंग",
        "description": "सुरक्षित इन्फ्रास्ट्रक्चर के साथ व्यावसायिक संचार की रक्षा करें।",
        "subtext": "गुणवत्ता • लागत • अनुपालन"
      },
      {
        "title": "शक्तिशाली SMS API",
        "description": "लचीले और आसान SMS API के साथ अपने अनुप्रयोगों को कनेक्ट करें।",
        "subtext": "लाइव एनालिटिक्स • 24/7 NOC"
      }
    ],
    "ctaBadge": "आइए अपना मैसेजिंग नेटवर्क बनाएं",
    "ctaTitle": "बिजनेस SMS समाधानों के साथ अपने व्यवसाय को बढ़ाएं",
    "ctaSubtitle": "इंटेलिजेंट रूटिंग और होलसेल SMS से लेकर RCS और OTP वेरिफिकेशन तक, iNet Global स्केलेबल समाधान प्रदान करता है।",
    "floatingBadges": {
      "wholesale": {
        "title": "होलसेल SMS",
        "desc": "उच्च मात्रा मैसेजिंग"
      },
      "rcs": {
        "title": "RCS बिजनेस मैसेजिंग",
        "desc": "रिच इंटरैक्टिव बिजनेस मैसेज"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "त्वरित सत्यापन कोड डिलीवरी"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global टीम",
      "status": "सत्यापित प्रेषक",
      "msg1": "पोर्टल के लिए आपका सत्यापन कोड है: 849201",
      "time1": "10:24 AM",
      "msg2": "शानदार! जानकारी के लिए धन्यवाद।",
      "time2": "10:25 AM",
      "inputPlaceholder": "संदेश लिखें..."
    }
  },
  "ar": {
    "heroBadge": "خدمة الرسائل",
    "heroTitle": "تواصل فورياً عبر رسائل SMS موثوقة وعالية الأداء",
    "heroDesc": "توفر حلول الرسائل النصية القصيرة للأعمال إحدى أسرع الطرق وأكثرها فاعلية للتواصل مع العملاء والموظفين والشركاء.",
    "getStarted": "ابدأ الآن",
    "contactUs": "اتصل بنا",
    "coreServiceBadge": "خدمتنا الأساسية",
    "coreServiceTitle": "حلول رسائل نصية مصممة خصيصاً لكل قطاع",
    "coreServiceSubtitle": "بنية تحتية اتصالية معيارية مصممة للصوت عالي التوفر والرسائل والأرقام الافتراضية.",
    "services": {
      "wholesaleSms": {
        "title": "رسائل SMS بالجملة",
        "description": "إنهاء رسائل SMS بسعة هائلة مع خيارات توجيه مصممة لسرعة التسليم والتغطية الشاملة والتكلفة التنافسية.",
        "bullet1": "ضمان تسليم فائق",
        "bullet2": "خيارات توجيه مرنة",
        "bullet3": "تغطية عالمية واسعة",
        "learnMore": "اعرف المزيد"
      },
      "rcsMessaging": {
        "title": "رسائل الأعمال RCS",
        "description": "تسليم رسائل المعاملات الحساسة ورموز التحقق ورسائل الأعمال التفاعلية مباشرة إلى الهواتف حول العالم.",
        "bullet1": "وسائط غنية وبطاقات تفاعلية",
        "bullet2": "هوية مرسل موثقة رسمياً",
        "bullet3": "أزرار ردود سريعة قابلة للتنفيذ",
        "learnMore": "اعرف المزيد"
      },
      "otpSms": {
        "title": "رسائل التحقق OTP",
        "description": "رموز تحقق فائقة السرعة ومصادقة ثنائية يتم تسليمها خلال ثوانٍ في جميع أنحاء العالم.",
        "bullet1": "سرعة تسليم بأقل من ثانية",
        "bullet2": "ربط مباشر مع مشغلي الاتصالات",
        "bullet3": "معدلات تحويل مرتفعة",
        "learnMore": "اعرف المزيد"
      }
    },
    "whyChooseBadge": "لماذا تختار حلول INET SMS",
    "whyChooseTitle": "لماذا تختار حلول الرسائل النصية لدينا",
    "whyChooseSubtitle": "صُممت لتوفير اتصالات نقية وتوجيه مرن وأداء رسائل موثوق عبر الأسواق العالمية.",
    "whyCards": {
      "secure": {
        "title": "اتصالات آمنة وموثوقة",
        "description": "صُممت بنيتنا التحتية لدعم رسائل الأعمال الآمنة مع إنتاجية عالية وموثوقية بمعايير شركات الاتصالات."
      },
      "cloud": {
        "title": "بنية تحتية سحابية مرنة",
        "description": "استفد من حلول الرسائل السحابية القابلة للتوسع التي تقضي على قيود الأجهزة وتضمن أعلى معدلات التسليم."
      },
      "api": {
        "title": "تكامل واجهات برمجة التطبيقات API",
        "description": "بصفتنا مزود موثوق لواجهات برمجة الاتصالات، نساعد الشركات على دمج الرسائل في المواقع والتطبيقات وCRM."
      },
      "connectivity": {
        "title": "اتصال عالمي مع مشغلي الشبكات",
        "description": "ربط مباشر مع مشغلي المستوى الأول Tier-1 في أكثر من 190 دولة يضمن تسليماً متواصلاً وفائق الأولوية."
      },
      "automated": {
        "title": "خدمات الرسائل المؤتمتة",
        "description": "عزز التفاعل عبر الإشعارات التلقائية، الحملات القائمة على الأحداث، تذكيرات المواعيد والمحادثات ثنائية الاتجاه."
      }
    },
    "featuresBadge": "ما تقدمه خدمات الرسائل لدينا",
    "featuresTitle": "كل ما تحتاجه لاتصالات رسائل SMS ذكية",
    "featuresSubtitle": "بنية اتصالات موثوقة لإرسال وإدارة ومراقبة رسائل SMS على نطاق واسع بسرعة وأمان وانتشار عالمي.",
    "features": [
      {
        "title": "تحليلات فورية في الوقت الحقيقي",
        "description": "تتبع حالة التسليم والأداء ونشاط المراسلة بشكل فوري.",
        "subtext": "تحليلات مباشرة • مركز NOC على مدار 24/7"
      },
      {
        "title": "رسائل SMS عالمية",
        "description": "صل إلى العملاء في جميع أنحاء العالم مع تسليم رسائل موثوق.",
        "subtext": "جودة • كفاءة تكلفة • امتثال"
      },
      {
        "title": "تسليم فائق السرعة",
        "description": "أرسل الرسائل بسرعة عبر مسارات دولية محسّنة.",
        "subtext": "تحليلات مباشرة • مركز NOC على مدار 24/7"
      },
      {
        "title": "مراسلة مشفرة وآمنة",
        "description": "احمِ الاتصالات التجارية ببنية تحتية أمنية متقدمة.",
        "subtext": "جودة • كفاءة تكلفة • امتثال"
      },
      {
        "title": "واجهة برمجة تطبيقات قوية",
        "description": "اربط تطبيقاتك البرمجية بواجهات برمجة تطبيقات SMS مرنة وحديثة.",
        "subtext": "تحليلات مباشرة • مركز NOC على مدار 24/7"
      }
    ],
    "ctaBadge": "دعنا نبني شبكة الرسائل الخاصة بك",
    "ctaTitle": "طوّر أعمالك مع حلول رسائل SMS المؤسسية",
    "ctaSubtitle": "من التوجيه الذكي ورسائل الجملة إلى RCS والتحقق OTP، تقدم iNet Global حلول اتصالات قابلة للتوسع وموثوقة عالمياً.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS بالجملة",
        "desc": "رسائل ذات سعة وأحجام ضخمة"
      },
      "rcs": {
        "title": "رسائل RCS للأعمال",
        "desc": "رسائل تفاعلية وسائطية غنية"
      },
      "otp": {
        "title": "رسائل OTP",
        "desc": "تسليم فوري لرموز التحقق"
      }
    },
    "chatScreen": {
      "contactName": "فريق iNet Global",
      "status": "مرسل معتمد وموثق",
      "msg1": "رمز التحقق الخاص بك لتسجيل الدخول إلى البوابة هو: 849201",
      "time1": "10:24 ص",
      "msg2": "ممتاز! شكراً جزيلاً للتأكيد.",
      "time2": "10:25 ص",
      "inputPlaceholder": "اكتب رسالة..."
    }
  },
  "fr": {
    "heroBadge": "SERVICE DE MESSAGERIE",
    "heroTitle": "Connectez-vous Instantanément avec des SMS Fiables",
    "heroDesc": "Les solutions SMS professionnelles offrent l'un des moyens les plus rapides et efficaces de communiquer avec vos clients, employés et partenaires.",
    "getStarted": "Commencer",
    "contactUs": "Contactez-nous",
    "coreServiceBadge": "NOTRE SERVICE PRINCIPAL",
    "coreServiceTitle": "Des solutions SMS conçues pour chaque secteur",
    "coreServiceSubtitle": "Infrastructure télécom modulaire conçue pour la voix haute disponibilité, la messagerie et les numéros virtuels.",
    "services": {
      "wholesaleSms": {
        "title": "SMS de Gros",
        "description": "Terminaison SMS haute capacité avec options de routage optimisées pour la rapidité, la couverture et le coût.",
        "bullet1": "Garantie de livraison élevée",
        "bullet2": "Options de routage flexibles",
        "bullet3": "Couverture mondiale",
        "learnMore": "En savoir plus"
      },
      "rcsMessaging": {
        "title": "Messagerie Professionnelle RCS",
        "description": "Diffusez des SMS transactionnels, des OTP et des messages riches interactifs directement aux combinés mobiles.",
        "bullet1": "Médias enrichis et cartes interactives",
        "bullet2": "Identité d'expéditeur vérifiée",
        "bullet3": "Réponses rapides exploitables",
        "learnMore": "En savoir plus"
      },
      "otpSms": {
        "title": "SMS OTP",
        "description": "Codes de vérification ultra-rapides et authentification à deux facteurs délivrés en quelques secondes dans le monde entier.",
        "bullet1": "Livraison en moins d'une seconde",
        "bullet2": "Liaisons directes avec les opérateurs",
        "bullet3": "Taux de conversion élevés",
        "learnMore": "En savoir plus"
      }
    },
    "whyChooseBadge": "POURQUOI CHOISIR INET SMS",
    "whyChooseTitle": "Pourquoi Choisir Nos Solutions SMS",
    "whyChooseSubtitle": "Conçu pour des connexions limpides, un routage flexible et des performances de messagerie fiables sur tous les marchés mondiaux.",
    "whyCards": {
      "secure": {
        "title": "Communication Sécurisée et Fiable",
        "description": "Notre infrastructure est conçue pour supporter une messagerie d'entreprise haut débit avec une fiabilité de niveau opérateur."
      },
      "cloud": {
        "title": "Infrastructure Basée sur le Cloud",
        "description": "Tirez parti de solutions cloud évolutives éliminant les goulets d'étranglement matériels et maximisant les taux de délivrabilité."
      },
      "api": {
        "title": "Intégration d'API Voix et SMS",
        "description": "En tant que fournisseur d'API télécom de confiance, nous intégrons la messagerie dans vos sites, applications mobiles et CRM."
      },
      "connectivity": {
        "title": "Connectivité Opérateurs Mondiale",
        "description": "Interconnexions directes Tier-1 dans plus de 190 pays garantissant une distribution prioritaire ininterrompue."
      },
      "automated": {
        "title": "Services de Messagerie Automatisés",
        "description": "Améliorez l'engagement avec notifications automatiques, campagnes déclenchées, rappels et échanges bidirectionnels."
      }
    },
    "featuresBadge": "CE QUE NOS SERVICES SMS APPORTENT",
    "featuresTitle": "Tout ce dont Vous Avez Besoin pour des SMS Intelligents",
    "featuresSubtitle": "Infrastructure de messagerie fiable pour expédier, gérer et superviser vos SMS à grande échelle avec rapidité et sécurité.",
    "features": [
      {
        "title": "Analyses en Temps Réel",
        "description": "Suivez instantanément la livraison, les performances et l'activité des messages.",
        "subtext": "Analyses en direct • NOC 24/7"
      },
      {
        "title": "Messagerie SMS Mondiale",
        "description": "Touchez vos clients partout sur le globe avec un acheminement SMS éprouvé.",
        "subtext": "Qualité • Coût • Conformité"
      },
      {
        "title": "Livraison Haute Vitesse",
        "description": "Envoyez des messages rapidement grâce à des routes mondiales optimisées.",
        "subtext": "Analyses en direct • NOC 24/7"
      },
      {
        "title": "Messagerie Sécurisée",
        "description": "Protégez vos communications d'entreprise grâce à une architecture robuste.",
        "subtext": "Qualité • Coût • Conformité"
      },
      {
        "title": "API SMS Performante",
        "description": "Connectez vos applications facilement grâce à des API SMS modulaires.",
        "subtext": "Analyses en direct • NOC 24/7"
      }
    ],
    "ctaBadge": "BÂTISSONS VOTRE RÉSEAU DE MESSAGERIE",
    "ctaTitle": "Développez Votre Entreprise grâce aux Solutions SMS Professionnelles",
    "ctaSubtitle": "Du routage intelligent et de la terminaison en gros aux SMS RCS et OTP, iNet Global fournit des solutions de communication évolutives et performantes.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS de Gros",
        "desc": "Messagerie à très grand volume"
      },
      "rcs": {
        "title": "Messagerie RCS",
        "desc": "Messages interactifs enrichis"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Distribution de codes de vérification"
      }
    },
    "chatScreen": {
      "contactName": "Équipe iNet Global",
      "status": "Expéditeur Vérifié",
      "msg1": "Voici votre code de vérification pour le portail : 849201",
      "time1": "10:24",
      "msg2": "Parfait ! Merci pour la confirmation.",
      "time2": "10:25",
      "inputPlaceholder": "Écrire un message..."
    }
  },
  "de": {
    "heroBadge": "SMS-NACHRICHTENDIENST",
    "heroTitle": "Sofortige Verbindung durch zuverlässige Business-SMS",
    "heroDesc": "Business-SMS-Lösungen bieten eine der schnellsten und effektivsten Möglichkeiten zur Kommunikation mit Kunden, Mitarbeitern und Partnern.",
    "getStarted": "Jetzt starten",
    "contactUs": "Kontaktieren Sie uns",
    "coreServiceBadge": "UNSER KERNANGEBOT",
    "coreServiceTitle": "SMS-Lösungen maßgeschneidert für jede Branche",
    "coreServiceSubtitle": "Modulare Telekommunikationsinfrastruktur für hochverfügbare Sprach-, Nachrichten- und virtuelle Nummerndienste.",
    "services": {
      "wholesaleSms": {
        "title": "Wholesale SMS",
        "description": "Hochkapazitative SMS-Terminierung mit Routenoptionen optimiert für Zustellgeschwindigkeit, Reichweite und Wirtschaftlichkeit.",
        "bullet1": "Hohe Zustellgarantie",
        "bullet2": "Flexible Routing-Optionen",
        "bullet3": "Globale Netzabdeckung",
        "learnMore": "Mehr erfahren"
      },
      "rcsMessaging": {
        "title": "RCS Business Messaging",
        "description": "Übermittlung kritischer Transaktions-SMS, OTPs und interaktiver Rich-Nachrichten direkt auf mobile Endgeräte weltweit.",
        "bullet1": "Rich Media & interaktive Aktionskarten",
        "bullet2": "Verifiziertes Absender-Branding",
        "bullet3": "Sofortige Quick-Reply-Aktionen",
        "learnMore": "Mehr erfahren"
      },
      "otpSms": {
        "title": "OTP SMS",
        "description": "Ultraschnelle zeitkritische Verifizierungscodes und 2FA-Nachrichten sekundenschnell weltweit zugestellt.",
        "bullet1": "Zustellzeiten im Subsekundenbereich",
        "bullet2": "Direkte Carrier-Verbindungen",
        "bullet3": "Hohe Konversionsraten",
        "learnMore": "Mehr erfahren"
      }
    },
    "whyChooseBadge": "WARUM INET SMS-LÖSUNGEN",
    "whyChooseTitle": "Warum Sie unsere SMS-Lösungen wählen sollten",
    "whyChooseSubtitle": "Entwickelt für glasklare Verbindungen, dynamisches Routing und zuverlässige Performance auf globalen Märkten.",
    "whyCards": {
      "secure": {
        "title": "Sichere und zuverlässige Kommunikation",
        "description": "Unsere Infrastruktur ist für sichere Geschäftskommunikation mit hohem Durchsatz und Carrier-Grade-Zuverlässigkeit ausgelegt."
      },
      "cloud": {
        "title": "Cloudbasierte Infrastruktur",
        "description": "Nutzen Sie skalierbare Cloud-Messaging-Lösungen ohne Hardwareengpässe bei maximalen Zustellquoten."
      },
      "api": {
        "title": "Sprach- & SMS-API-Integration",
        "description": "Als bewährter Kommunikations-API-Provider binden wir Messaging nahtlos in Webseiten, mobile Apps und CRM-Systeme ein."
      },
      "connectivity": {
        "title": "Globale Netzbetreiber-Konnektivität",
        "description": "Direkte Tier-1-Zusammenschaltungen in über 190 Ländern gewährleisten unterbrechungsfreie, priorisierte Zustellung."
      },
      "automated": {
        "title": "Automatisierte Messaging-Dienste",
        "description": "Steigern Sie Interaktionen durch automatisierte Benachrichtigungen, Trigger-Kampagnen und bidirektionale Dialoge."
      }
    },
    "featuresBadge": "WAS UNSERE SMS-SERVICES BIETEN",
    "featuresTitle": "Alles, was Sie für intelligentere SMS-Kommunikation benötigen",
    "featuresSubtitle": "Zuverlässige Infrastruktur zum skalierbaren Senden, Verwalten und Überwachen von SMS mit Tempo und Sicherheit.",
    "features": [
      {
        "title": "Echtzeit-Analysen",
        "description": "Zustellung, Leistung und Nachrichtenaktivität sofort live verfolgen.",
        "subtext": "Live-Metriken • 24/7 NOC"
      },
      {
        "title": "Globale SMS-Zustellung",
        "description": "Erreichen Sie Kunden rund um den Globus mit verlässlicher SMS-Übermittlung.",
        "subtext": "Qualität • Kosten • Compliance"
      },
      {
        "title": "High-Speed-Versand",
        "description": "Versenden Sie Nachrichten blitzschnell über optimierte Routen.",
        "subtext": "Live-Metriken • 24/7 NOC"
      },
      {
        "title": "Sichere Nachrichtenübertragung",
        "description": "Schützen Sie Ihre Unternehmenskommunikation mit zertifizierter Sicherheitsarchitektur.",
        "subtext": "Qualität • Kosten • Compliance"
      },
      {
        "title": "Leistungsstarke SMS-API",
        "description": "Verbinden Sie Ihre Applikationen mit flexiblen, entwicklerfreundlichen SMS-APIs.",
        "subtext": "Live-Metriken • 24/7 NOC"
      }
    ],
    "ctaBadge": "BAUEN WIR IHR NACHRICHTENNETZWERK AUF",
    "ctaTitle": "Steigern Sie Ihren Geschäftserfolg mit Enterprise-SMS-Lösungen",
    "ctaSubtitle": "Von intelligentem Routing und Wholesale-SMS bis hin zu RCS und OTP-Verifizierung bietet iNet Global skalierbare Telekommunikation.",
    "floatingBadges": {
      "wholesale": {
        "title": "Wholesale SMS",
        "desc": "Großvolumiges Messaging"
      },
      "rcs": {
        "title": "RCS Business Messaging",
        "desc": "Interaktive Rich-Nachrichten"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Schnelle Sicherheitscodes"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global Team",
      "status": "Verifizierter Absender",
      "msg1": "Hier ist Ihr Verifizierungscode für das Kundenportal: 849201",
      "time1": "10:24",
      "msg2": "Perfekt! Vielen Dank für die Bestätigung.",
      "time2": "10:25",
      "inputPlaceholder": "Nachricht eingeben..."
    }
  },
  "ja": {
    "heroBadge": "メッセージングサービス",
    "heroTitle": "高信頼のSMS通信で瞬時につながる",
    "heroDesc": "ビジネスSMSソリューションは、顧客、従業員、パートナーと確実に連携するための最速かつ最も効果的な手段を提供します。",
    "getStarted": "今すぐ始める",
    "contactUs": "お問い合わせ",
    "coreServiceBadge": "コアサービス",
    "coreServiceTitle": "あらゆる業界向けに構築されたSMSソリューション",
    "coreServiceSubtitle": "高可用性の音声、メッセージング、仮想番号のために設計されたモジュール型通信インフラ。",
    "services": {
      "wholesaleSms": {
        "title": "ホールセールSMS",
        "description": "配信速度、カバレッジ、コスト効率を追求した高容量SMSターミネーションサービス。",
        "bullet1": "高い到達率の保証",
        "bullet2": "柔軟なルーティング選択",
        "bullet3": "グローバルな通信網カバレッジ",
        "learnMore": "詳細を見る"
      },
      "rcsMessaging": {
        "title": "RCSビジネスメッセージング",
        "description": "重要なトランザクションSMS、ワンタイムパスワード、リッチなビジネス通知を高精度に世界の端末へ配信。",
        "bullet1": "リッチメディア＆対話型カード",
        "bullet2": "認証済み送信者ブランド表示",
        "bullet3": "ワンタップクイックアクション",
        "learnMore": "詳細を見る"
      },
      "otpSms": {
        "title": "OTP SMS（認証コード）",
        "description": "ミリ秒単位のスピードで二要素認証コードや緊急通知を世界中へ即時配信。",
        "bullet1": "1秒未満の高速配信",
        "bullet2": "キャリア直接接続ルート",
        "bullet3": "高いコンバージョン率",
        "learnMore": "詳細を見る"
      }
    },
    "whyChooseBadge": "INET SMSを選ぶ理由",
    "whyChooseTitle": "当社のSMSソリューションが選ばれる理由",
    "whyChooseSubtitle": "クリアな接続、柔軟なルーティング、そして世界市場における信頼性の高い通信パフォーマンスを提供します。",
    "whyCards": {
      "secure": {
        "title": "安全で高信頼なエンタープライズ通信",
        "description": "高スループットと通信事業者レベルの信頼性を備え、機密性の高いビジネスメッセージングを強力に支援します。"
      },
      "cloud": {
        "title": "クラウドネイティブ基盤",
        "description": "ハードウェアのボトルネックを排除し、最高水準の到達率を実現するスケーラブルなクラウドソリューション。"
      },
      "api": {
        "title": "音声＆SMS API連携",
        "description": "Webサイト、モバイルアプリ、CRMシステムにSMS送信および通話機能を即座に組み込むことができるREST API。"
      },
      "connectivity": {
        "title": "グローバルキャリア直接接続",
        "description": "世界190カ国以上のTier-1通信事業者との相互接続により、遅延のない優先配信を確実に遂行します。"
      },
      "automated": {
        "title": "自動化メッセージングサービス",
        "description": "トリガー配信、予約リマインダー、双方向チャットボットなど、高度に自動化された顧客エンゲージメントを実現。"
      }
    },
    "featuresBadge": "SMSサービスの主な機能",
    "featuresTitle": "スマートなSMS通信に必要なすべての機能",
    "featuresSubtitle": "スピード、セキュリティ、グローバルな到達力を兼ね備え、大規模なSMS配信と監視を可能にします。",
    "features": [
      {
        "title": "リアルタイム分析ダッシュボード",
        "description": "配信状況、パフォーマンス、通信量をリアルタイムに即座にトラッキング。",
        "subtext": "ライブ分析 • 24時間365日NOC監視"
      },
      {
        "title": "グローバルSMS配信",
        "description": "世界各国のエンドユーザー端末へ確実にSMSをお届けします。",
        "subtext": "高品質 • 最適コスト • 法令遵守"
      },
      {
        "title": "超高速配信ルート",
        "description": "インテリジェントに最適化された国際通信ルートでメッセージを迅速送信。",
        "subtext": "ライブ分析 • 24時間365日NOC監視"
      },
      {
        "title": "エンタープライズセキュリティ",
        "description": "厳格な暗号化とセキュリティプロトコルで企業の機密通信を保護。",
        "subtext": "高品質 • 最適コスト • 法令遵守"
      },
      {
        "title": "柔軟なSMS API",
        "description": "開発者に優しいドキュメントとSDKで、既存システムへスムーズに連携。",
        "subtext": "ライブ分析 • 24時間365日NOC監視"
      }
    ],
    "ctaBadge": "メッセージングネットワークを構築",
    "ctaTitle": "ビジネスSMSソリューションでビジネスを成長させましょう",
    "ctaSubtitle": "インテリジェントルーティングからホールセール配信、RCS、OTP認証まで、iNet Globalがスケーラブルな通信を提供します。",
    "floatingBadges": {
      "wholesale": {
        "title": "ホールセールSMS",
        "desc": "大規模高トラフィック配信"
      },
      "rcs": {
        "title": "RCSメッセージング",
        "desc": "リッチ＆インタラクティブ通知"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "認証コードの即時配信"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global チーム",
      "status": "認証済み送信者",
      "msg1": "ポータルへのログイン認証コードは【849201】です。",
      "time1": "10:24",
      "msg2": "確認できました。ありがとうございます！",
      "time2": "10:25",
      "inputPlaceholder": "メッセージを入力..."
    }
  },
  "pt": {
    "heroBadge": "SERVIÇO DE MENSAGENS",
    "heroTitle": "Conecte-se Instantaneamente com Comunicação SMS Confiável",
    "heroDesc": "Soluções de SMS Corporativo oferecem uma das formas mais ágeis e eficientes de interagir com clientes, equipes e parceiros.",
    "getStarted": "Começar Agora",
    "contactUs": "Fale Conosco",
    "coreServiceBadge": "NOSSO SERVIÇO PRINCIPAL",
    "coreServiceTitle": "Soluções de SMS desenvolvidas para todos os setores",
    "coreServiceSubtitle": "Infraestrutura de telecomunicações modular para voz de alta disponibilidade, mensagens e números virtuais.",
    "services": {
      "wholesaleSms": {
        "title": "SMS Wholesale",
        "description": "Terminação de SMS em massa com rotas otimizadas para velocidade, ampla cobertura e custo competitivo.",
        "bullet1": "Alta taxa de entrega garantida",
        "bullet2": "Opções flexíveis de roteamento",
        "bullet3": "Cobertura internacional ampla",
        "learnMore": "Saiba mais"
      },
      "rcsMessaging": {
        "title": "Mensagens RCS Empresariais",
        "description": "Envie SMS transacionais críticos, códigos OTP e mensagens interativas avançadas diretamente para celulares no mundo inteiro.",
        "bullet1": "Mídia rica e cartões dinâmicos",
        "bullet2": "Identificação de remetente verificado",
        "bullet3": "Respostas rápidas com ações em 1 clique",
        "learnMore": "Saiba mais"
      },
      "otpSms": {
        "title": "SMS OTP",
        "description": "Códigos de verificação ultra rápidos e autenticação de dois fatores entregues em poucos segundos globalmente.",
        "bullet1": "Entrega em menos de um segundo",
        "bullet2": "Conexões diretas com operadoras",
        "bullet3": "Altas taxas de conversão de login",
        "learnMore": "Saiba mais"
      }
    },
    "whyChooseBadge": "POR QUE ESCOLHER A INET SMS",
    "whyChooseTitle": "Por Que Escolher Nossas Soluções de SMS",
    "whyChooseSubtitle": "Construído para conexões estáveis, roteamento dinâmico e performance sólida em telecomunicações globais.",
    "whyCards": {
      "secure": {
        "title": "Comunicação Segura e Confiável",
        "description": "Nossa infraestrutura suporta mensagens corporativas de alta capacidade com confiabilidade padrão de operadora."
      },
      "cloud": {
        "title": "Infraestrutura em Nuvem",
        "description": "Aproveite soluções em nuvem que eliminam gargalos de hardware e oferecem taxas máximas de entregabilidade."
      },
      "api": {
        "title": "Integração de APIs de Voz e SMS",
        "description": "Como provedor de API confiável, integramos SMS e chamadas em websites, aplicativos móveis e sistemas de CRM."
      },
      "connectivity": {
        "title": "Conectividade Global de Operadoras",
        "description": "Interconexões diretas Tier-1 em mais de 190 países garantem entregas ininterruptas e de alta prioridade."
      },
      "automated": {
        "title": "Serviços de Mensagens Automatizados",
        "description": "Melhore o engajamento através de notificações automáticas, campanhas por gatilhos e conversas bidirecionais."
      }
    },
    "featuresBadge": "O QUE NOSSOS SERVIÇOS SMS OFERECEM",
    "featuresTitle": "Tudo o que Você Precisa para uma Comunicação SMS Mais Inteligente",
    "featuresSubtitle": "Infraestrutura robusta para envio, gestão e monitoramento de SMS em larga escala com rapidez e segurança total.",
    "features": [
      {
        "title": "Métricas em Tempo Real",
        "description": "Acompanhe entregas, latência e tráfego de mensagens instantaneamente.",
        "subtext": "Painel em tempo real • NOC 24/7"
      },
      {
        "title": "Envio Global de SMS",
        "description": "Alcance clientes em qualquer parte do planeta com entregas consistentes.",
        "subtext": "Qualidade • Custo • Conformidade"
      },
      {
        "title": "Entrega em Alta Velocidade",
        "description": "Dispare mensagens rapidamente através de rotas internacionais otimizadas.",
        "subtext": "Painel em tempo real • NOC 24/7"
      },
      {
        "title": "Mensagens Criptografadas",
        "description": "Proteja comunicações confidenciais corporativas com tecnologia de ponta.",
        "subtext": "Qualidade • Custo • Conformidade"
      },
      {
        "title": "API de SMS Completa",
        "description": "Integre suas aplicações com facilidade por meio de REST APIs flexíveis.",
        "subtext": "Painel em tempo real • NOC 24/7"
      }
    ],
    "ctaBadge": "VAMOS CONSTRUIR SUA REDE DE MENSAGENS",
    "ctaTitle": "Impulsione Seus Negócios com Soluções de SMS Corporativo",
    "ctaSubtitle": "De roteamento inteligente e terminação de SMS em massa a RCS e autenticação OTP, a iNet Global oferece máxima conectividade.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS Wholesale",
        "desc": "Tráfego de alto volume"
      },
      "rcs": {
        "title": "Mensagens RCS",
        "desc": "Comunicação rica e interativa"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Códigos de segurança imediatos"
      }
    },
    "chatScreen": {
      "contactName": "Equipe iNet Global",
      "status": "Remetente Verificado",
      "msg1": "Seu código de verificação para o portal é: 849201",
      "time1": "10:24",
      "msg2": "Recebido com sucesso, obrigado!",
      "time2": "10:25",
      "inputPlaceholder": "Digite uma mensagem..."
    }
  },
  "ru": {
    "heroBadge": "СЕРВИС СООБЩЕНИЙ",
    "heroTitle": "Мгновенная Связь через Надежные Корпоративные SMS",
    "heroDesc": "Бизнес-SMS — один из самых быстрых и эффективных способов общения с клиентами, сотрудниками и международными партнерами.",
    "getStarted": "Начать",
    "contactUs": "Связаться с нами",
    "coreServiceBadge": "НАШИ ОСНОВНЫЕ УСЛУГИ",
    "coreServiceTitle": "SMS-решения, созданные для любой отрасли",
    "coreServiceSubtitle": "Модульная телеком-инфраструктура операторского класса для голосовой связи, обмена сообщениями и виртуальных номеров.",
    "services": {
      "wholesaleSms": {
        "title": "Оптовые SMS (Wholesale)",
        "description": "Высокоемкая терминация SMS с маршрутизацией, оптимизированной по скорости доставки, охвату и выгодной стоимости.",
        "bullet1": "Гарантированно высокая доставляемость",
        "bullet2": "Гибкие варианты маршрутизации",
        "bullet3": "Глобальное международное покрытие",
        "learnMore": "Подробнее"
      },
      "rcsMessaging": {
        "title": "RCS Бизнес-сообщения",
        "description": "Доставка транзакционных SMS, OTP и интерактивных мультимедийных сообщений непосредственно на смартфоны по всему миру.",
        "bullet1": "Медиа-карточки и кнопки действий",
        "bullet2": "Верифицированный бренд отправителя",
        "bullet3": "Интерактивные быстрые ответы",
        "learnMore": "Подробнее"
      },
      "otpSms": {
        "title": "OTP SMS (Коды подтверждения)",
        "description": "Сверхбыстрая доставка одноразовых паролей и двухфакторной аутентификации за считанные секунды по всему миру.",
        "bullet1": "Скорость доставки менее секунды",
        "bullet2": "Прямые подключения к операторам",
        "bullet3": "Максимальная конверсия входов",
        "learnMore": "Подробнее"
      }
    },
    "whyChooseBadge": "ПОЧЕМУ ВЫБИРАЮТ INET SMS",
    "whyChooseTitle": "Почему Выбирают Наши SMS-решения",
    "whyChooseSubtitle": "Создано для кристально чистой связи, гибкого управления маршрутами и стабильной работы на глобальных рынках.",
    "whyCards": {
      "secure": {
        "title": "Безопасная и надежная связь",
        "description": "Инфраструктура спроектирована для безопасной передачи бизнес-сообщений с высокой пропускной способностью."
      },
      "cloud": {
        "title": "Облачная масштабируемость",
        "description": "Облачные решения устраняют аппаратные ограничения и обеспечивают максимальный процент доставленных SMS."
      },
      "api": {
        "title": "Интеграция через API для голоса и SMS",
        "description": "Легко интегрируйте отправку SMS и телефонные звонки в веб-сайты, мобильные приложения и CRM-системы."
      },
      "connectivity": {
        "title": "Прямое подключение к мировым операторам",
        "description": "Прямые стыки с операторами Tier-1 в 190+ странах гарантируют бесперебойную приоритетную доставку сообщений."
      },
      "automated": {
        "title": "Автоматизированные сервисы сообщений",
        "description": "Повышайте вовлеченность с помощью триггерных рассылок, напоминаний о записях и двустороннего обмена сообщениями."
      }
    },
    "featuresBadge": "ВОЗМОЖНОСТИ НАШЕЙ ПЛАТФОРМЫ",
    "featuresTitle": "Все, Что Нужно для Интеллектуальной SMS-коммуникации",
    "featuresSubtitle": "Надежная телеком-платформа для масштабной отправки, управления и мониторинга SMS на глобальном уровне.",
    "features": [
      {
        "title": "Аналитика в реальном времени",
        "description": "Мгновенное отслеживание статуса доставки, производительности и статистики.",
        "subtext": "Живые метрики • Круглосуточный NOC 24/7"
      },
      {
        "title": "Глобальная рассылка SMS",
        "description": "Охватывайте клиентов по всему миру с надежной доставкой сообщений.",
        "subtext": "Качество • Стоимость • Соответствие"
      },
      {
        "title": "Высокая скорость доставки",
        "description": "Отправляйте сообщения за доли секунды по оптимизированным маршрутам.",
        "subtext": "Живые метрики • Круглосуточный NOC 24/7"
      },
      {
        "title": "Защищенная передача данных",
        "description": "Защита деловой переписки с помощью надежных протоколов шифрования.",
        "subtext": "Качество • Стоимость • Соответствие"
      },
      {
        "title": "Мощный REST API",
        "description": "Быстрое подключение любых приложений с помощью гибкого и простого SMS API.",
        "subtext": "Живые метрики • Круглосуточный NOC 24/7"
      }
    ],
    "ctaBadge": "ПОСТРОЙТЕ СВОЮ СЕТЬ СООБЩЕНИЙ",
    "ctaTitle": "Развивайте Свой Бизнес с Корпоративными SMS-решениями",
    "ctaSubtitle": "От умной маршрутизации и оптовой терминации до RCS и OTP-верификации — iNet Global обеспечивает стабильную масштабируемую связь.",
    "floatingBadges": {
      "wholesale": {
        "title": "Оптовые SMS",
        "desc": "Массовые рассылки больших объемов"
      },
      "rcs": {
        "title": "RCS Сообщения",
        "desc": "Интерактивный медиа-контент"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Мгновенные коды подтверждения"
      }
    },
    "chatScreen": {
      "contactName": "Команда iNet Global",
      "status": "Верифицированный отправитель",
      "msg1": "Ваш код подтверждения для входа в личный кабинет: 849201",
      "time1": "10:24",
      "msg2": "Отлично! Спасибо за оперативность.",
      "time2": "10:25",
      "inputPlaceholder": "Введите сообщение..."
    }
  },
  "it": {
    "heroBadge": "SERVIZIO DI MESSAGGISTICA",
    "heroTitle": "Connettiti Istantaneamente con una Comunicazione SMS Affidabile",
    "heroDesc": "Le soluzioni SMS aziendali offrono uno dei modi più rapidi ed efficaci per comunicare con clienti, dipendenti e partner in tutto il mondo.",
    "getStarted": "Inizia Ora",
    "contactUs": "Contattaci",
    "coreServiceBadge": "IL NOSTRO SERVIZIO CHIAVE",
    "coreServiceTitle": "Soluzioni SMS studiate per ogni settore",
    "coreServiceSubtitle": "Infrastruttura telecomunicazioni modulare per voce ad alta disponibilità, messaggistica e numerazioni virtuali.",
    "services": {
      "wholesaleSms": {
        "title": "SMS Wholesale",
        "description": "Terminazione SMS ad alta capacità con rotte ottimizzate per velocità di consegna, copertura e convenienza economica.",
        "bullet1": "Elevata garanzia di consegna",
        "bullet2": "Opzioni di instradamento flessibili",
        "bullet3": "Copertura capillare a livello globale",
        "learnMore": "Scopri di più"
      },
      "rcsMessaging": {
        "title": "Messaggistica Aziendale RCS",
        "description": "Invia SMS transazionali critici, password monouso OTP e messaggi interattivi direttamente sui dispositivi mobili nel mondo.",
        "bullet1": "Contenuti multimediali e schede interattive",
        "bullet2": "Branding con mittente verificato",
        "bullet3": "Pulsanti di risposta rapida con 1 tocco",
        "learnMore": "Scopri di più"
      },
      "otpSms": {
        "title": "SMS OTP",
        "description": "Codici di verifica ultra veloci e autenticazione a due fattori consegnati in pochi secondi a livello internazionale.",
        "bullet1": "Velocità di consegna sub-secondo",
        "bullet2": "Connessioni dirette con gli operatori",
        "bullet3": "Massimi tassi di conversione al login",
        "learnMore": "Scopri di più"
      }
    },
    "whyChooseBadge": "PERCHÉ SCEGLIERE INET SMS",
    "whyChooseTitle": "Perché Scegliere le Nostre Soluzioni SMS",
    "whyChooseSubtitle": "Progettato per connessioni stabili, instradamento flessibile e prestazioni affidabili sui mercati internazionali.",
    "whyCards": {
      "secure": {
        "title": "Comunicazione Sicura e Affidabile",
        "description": "La nostra infrastruttura supporta la messaggistica aziendale ad alto rendimento con affidabilità carrier-grade."
      },
      "cloud": {
        "title": "Infrastruttura Basata su Cloud",
        "description": "Sfrutta soluzioni cloud scalabili per eliminare i colli di bottiglia hardware e raggiungere tassi di consegna ottimali."
      },
      "api": {
        "title": "Integrazione API Voce e SMS",
        "description": "Fornitore fidato di API di telecomunicazione per integrare funzionalità di messaggistica in siti web, app e CRM."
      },
      "connectivity": {
        "title": "Connettività Globale con i Carrier",
        "description": "Interconnessioni dirette Tier-1 in oltre 190 paesi garantiscono consegne prioritarie e senza interruzioni."
      },
      "automated": {
        "title": "Servizi di Messaggistica Automatizzati",
        "description": "Migliora l'interazione con notifiche automatiche, campagne basate su eventi, promemoria e chat bidirezionali."
      }
    },
    "featuresBadge": "COSA OFFRONO I NOSTRI SERVIZI SMS",
    "featuresTitle": "Tutto Ciò di Cui Hai Bisogno per una Comunicazione SMS Più Intelligente",
    "featuresSubtitle": "Infrastruttura affidabile per inviare, gestire e monitorare SMS su larga scala con velocità, sicurezza e portata mondiale.",
    "features": [
      {
        "title": "Analisi Dati in Tempo Reale",
        "description": "Traccia consegne, prestazioni e volumi di messaggi istantaneamente.",
        "subtext": "Dati live • Centro NOC 24/7"
      },
      {
        "title": "Messaggistica SMS Globale",
        "description": "Raggiungi clienti ovunque nel mondo con un recapito SMS affidabile.",
        "subtext": "Qualità • Costi • Conformità"
      },
      {
        "title": "Consegna ad Alta Velocità",
        "description": "Invia messaggi istantaneamente grazie a rotte globali ottimizzate.",
        "subtext": "Dati live • Centro NOC 24/7"
      },
      {
        "title": "Messaggistica Protetta",
        "description": "Proteggi le comunicazioni aziendali con un'architettura di sicurezza avanzata.",
        "subtext": "Qualità • Costi • Conformità"
      },
      {
        "title": "Potente API SMS",
        "description": "Collega i tuoi sistemi gestionali tramite API SMS flessibili e moderne.",
        "subtext": "Dati live • Centro NOC 24/7"
      }
    ],
    "ctaBadge": "COSTRUIAMO LA TUA RETE DI MESSAGGI",
    "ctaTitle": "Fai Crescere il Tuo Business con Soluzioni SMS Aziendali",
    "ctaSubtitle": "Dall'instradamento intelligente alla terminazione SMS all'ingrosso, fino a RCS e OTP, iNet Global garantisce connettività scalabile.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS Wholesale",
        "desc": "Invio messaggi ad altissimo volume"
      },
      "rcs": {
        "title": "Messaggistica RCS",
        "desc": "Contenuti interattivi ricchi"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Consegna immediata codici di sicurezza"
      }
    },
    "chatScreen": {
      "contactName": "Team iNet Global",
      "status": "Mittente Verificato",
      "msg1": "Ecco il tuo codice di verifica per accedere al portale: 849201",
      "time1": "10:24",
      "msg2": "Ottimo! Grazie per la conferma.",
      "time2": "10:25",
      "inputPlaceholder": "Scrivi un messaggio..."
    }
  },
  "ko": {
    "heroBadge": "메시징 서비스",
    "heroTitle": "신뢰할 수 있는 SMS 통신으로 즉시 연결",
    "heroDesc": "기업용 SMS 솔루션은 고객, 직원 및 글로벌 파트너와 가장 빠르고 효과적으로 소통할 수 있는 통신 수단을 제공합니다.",
    "getStarted": "시작하기",
    "contactUs": "문의하기",
    "coreServiceBadge": "핵심 서비스",
    "coreServiceTitle": "모든 산업에 맞춤화된 엔터프라이즈 SMS 솔루션",
    "coreServiceSubtitle": "고가용성 음성, 메시징 및 가상 번호를 위해 설계된 모듈형 통신 인프라.",
    "services": {
      "wholesaleSms": {
        "title": "도매(Wholesale) SMS",
        "description": "전송 속도, 글로벌 도달 범위 및 비용 효율성을 극대화한 대용량 SMS 종단 서비스.",
        "bullet1": "안정적인 고성능 도달률 보장",
        "bullet2": "유연한 라우팅 경로 선택",
        "bullet3": "전 세계 광범위한 통신망 커버리지",
        "learnMore": "더 알아보기"
      },
      "rcsMessaging": {
        "title": "RCS 비즈니스 메시징",
        "description": "주요 트랜잭션 알림, OTP 인증번호 및 인터랙티브 리치 미디어 메시지를 전 세계 모바일 단말기로 직접 발송.",
        "bullet1": "리치 미디어 및 인터랙티브 카드",
        "bullet2": "공식 인증 발신자 브랜드 표기",
        "bullet3": "원클릭 빠른 응답 액션 버튼",
        "learnMore": "더 알아보기"
      },
      "otpSms": {
        "title": "OTP SMS (인증번호)",
        "description": "밀리초 단위의 신속함으로 2단계 인증 코드 및 긴급 알림을 전 세계에 안전하게 전송합니다.",
        "bullet1": "1초 미만의 초고속 발송 속도",
        "bullet2": "통신사 직접 연동 회선",
        "bullet3": "높은 로그인 전환율",
        "learnMore": "더 알아보기"
      }
    },
    "whyChooseBadge": "INET SMS를 선택해야 하는 이유",
    "whyChooseTitle": "iNet Global SMS 솔루션의 장점",
    "whyChooseSubtitle": "안정적인 연결, 유연한 지능형 라우팅 및 글로벌 시장에서의 탁월한 메시징 성능을 제공합니다.",
    "whyCards": {
      "secure": {
        "title": "안전하고 신뢰할 수 있는 통신",
        "description": "높은 대역폭 처리 능력과 통신사급 신뢰성으로 기업의 보안 메시징을 완벽하게 지원합니다."
      },
      "cloud": {
        "title": "클라우드 기반 인프라",
        "description": "하드웨어 한계를 제거하고 최적의 도달률을 제공하는 확장 가능한 클라우드 메시징 인프라."
      },
      "api": {
        "title": "음성 및 SMS API 연동",
        "description": "신뢰할 수 있는 커뮤니케이션 API 제공업체로서 웹, 모바일 앱, CRM에 SMS 및 통화 기능을 손쉽게 통합합니다."
      },
      "connectivity": {
        "title": "글로벌 통신사 직결 연결망",
        "description": "190개국 이상의 Tier-1 통신사 직통 연결망을 통해 지연 없는 최우선 순위 전송을 보장합니다."
      },
      "automated": {
        "title": "자동화 메시징 서비스",
        "description": "자동 알림, 이벤트 트리거 캠페인, 예약 알림 및 양방향 채팅을 통해 고객 참여율을 혁신적으로 높입니다."
      }
    },
    "featuresBadge": "SMS 서비스 핵심 역량",
    "featuresTitle": "스마트한 SMS 커뮤니케이션을 위한 모든 기능",
    "featuresSubtitle": "속도, 보안 및 전 세계 도달력을 갖추고 대규모 SMS를 안전하게 발송, 관리 및 모니터링할 수 있는 통신망.",
    "features": [
      {
        "title": "실시간 데이터 분석",
        "description": "도달 현황, 전송 성능 및 메시지 트래픽을 실시간으로 추적.",
        "subtext": "실시간 대시보드 • 24/7 연중무휴 관제센터"
      },
      {
        "title": "글로벌 SMS 전송",
        "description": "탁월한 도달률을 바탕으로 전 세계 고객에게 신뢰할 수 있는 SMS 제공.",
        "subtext": "품질 • 비용 • 글로벌 규정 준수"
      },
      {
        "title": "초고속 메시지 발송",
        "description": "최적화된 국제 라우팅 경로를 통해 번개처럼 빠르게 전송.",
        "subtext": "실시간 대시보드 • 24/7 연중무휴 관제센터"
      },
      {
        "title": "철저한 메시지 보안",
        "description": "엔터프라이즈 보안 아키텍처로 비즈니스 통신을 강력하게 보호.",
        "subtext": "품질 • 비용 • 글로벌 규정 준수"
      },
      {
        "title": "강력하고 유연한 SMS API",
        "description": "개발자 친화적인 REST API를 통해 기존 시스템과 매끄럽게 연결.",
        "subtext": "실시간 대시보드 • 24/7 연중무휴 관제센터"
      }
    ],
    "ctaBadge": "글로벌 메시징 네트워크를 구축하세요",
    "ctaTitle": "엔터프라이즈 SMS 솔루션으로 비즈니스를 확장하세요",
    "ctaSubtitle": "지능형 라우팅과 대용량 도매 전송부터 RCS 및 OTP 인증까지, iNet Global은 글로벌 통신을 완벽 지원합니다.",
    "floatingBadges": {
      "wholesale": {
        "title": "도매 SMS",
        "desc": "대규모 대량 트래픽 전송"
      },
      "rcs": {
        "title": "RCS 비즈니스 메시지",
        "desc": "풍부한 인터랙티브 미디어"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "보안 인증번호 즉시 발송"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global 팀",
      "status": "공식 인증 발신자",
      "msg1": "포털 로그인을 위한 인증번호는 [849201] 입니다.",
      "time1": "10:24",
      "msg2": "인증번호 잘 받았습니다. 감사합니다!",
      "time2": "10:25",
      "inputPlaceholder": "메시지를 입력하세요..."
    }
  },
  "nl": {
    "heroBadge": "BERICHTENSERVICE",
    "heroTitle": "Verbind Direct met Betrouwbare Zakelijke SMS-communicatie",
    "heroDesc": "Zakelijke SMS-oplossingen bieden een van de snelste en meest effectieve manieren om te communicieren met klanten, medewerkers en partners.",
    "getStarted": "Aan de Slag",
    "contactUs": "Neem Contact Op",
    "coreServiceBadge": "ONZE KERNVACATURES",
    "coreServiceTitle": "SMS-oplossingen gebouwd voor elke sector",
    "coreServiceSubtitle": "Modulaire telecominfrastructuur ontworpen voor hoogwaardige spraak, messaging en virtuele nummers.",
    "services": {
      "wholesaleSms": {
        "title": "Wholesale SMS",
        "description": "SMS-terminatie met hoge capaciteit en routeringsopties geoptimaliseerd voor afleveringssnelheid, bereik en kostenefficiëntie.",
        "bullet1": "Hoge afleverbewijsgarantie",
        "bullet2": "Flexibele routeringsopties",
        "bullet3": "Wereldwijde netwerkdekking",
        "learnMore": "Meer informatie"
      },
      "rcsMessaging": {
        "title": "RCS Business Messaging",
        "description": "Verzend cruciale transactionele SMS, OTP-codes en interactieve rijke berichten direct naar mobiele toestellen wereldwijd.",
        "bullet1": "Rich media & interactieve kaarten",
        "bullet2": "Geverifieerde afzendernaam",
        "bullet3": "Actiegerichte snelle antwoorden",
        "learnMore": "Meer informatie"
      },
      "otpSms": {
        "title": "OTP SMS (Verificatie)",
        "description": "Supersnelle tijdkritische verificatiecodes en tweefactorauthenticatie binnen seconden wereldwijd afgeleverd.",
        "bullet1": "Aflevering binnen een seconde",
        "bullet2": "Directe providerkoppelingen",
        "bullet3": "Hoge inlogconversies",
        "learnMore": "Meer informatie"
      }
    },
    "whyChooseBadge": "WAAROM KIEZEN VOOR INET SMS",
    "whyChooseTitle": "Waarom Kiezen Voor Onze SMS-oplossingen",
    "whyChooseSubtitle": "Gebouwd voor storingsvrije verbindingen, dynamische routering en betrouwbare prestaties op wereldwijde markten.",
    "whyCards": {
      "secure": {
        "title": "Veilige en Betrouwbare Communicatie",
        "description": "Onze infrastructuur ondersteunt veilige zakelijke communicatie met hoge doorvoer en carrier-grade betrouwbaarheid."
      },
      "cloud": {
        "title": "Cloudgebaseerde Infrastructuur",
        "description": "Profiteer van schaalbare cloudoplossingen die hardwareknelpunten elimineren en maximale afleverpercentages bieden."
      },
      "api": {
        "title": "Spraak- & SMS API-integratie",
        "description": "Als vertrouwde communicatie-API-provider integreren wij SMS naadloos in websites, mobiele apps en CRM-systemen."
      },
      "connectivity": {
        "title": "Wereldwijde Carrier-connectiviteit",
        "description": "Directe Tier-1 interconnecties in meer dan 190 landen garanderen ononderbroken, prioritaire levering."
      },
      "automated": {
        "title": "Geautomatiseerde Berichtenservices",
        "description": "Verhoog de betrokkenheid met automatische meldingen, triggercampagnes, afspraakherinneringen en 2-weg chats."
      }
    },
    "featuresBadge": "WAT ONZE SMS-SERVICES BIEDEN",
    "featuresTitle": "Alles Wat U Nodig Hebt Voor Slimmere SMS-communicatie",
    "featuresSubtitle": "Betrouwbare infrastructuur om SMS op schaal te verzenden, beheren en monitoren met snelheid, veiligheid en bereik.",
    "features": [
      {
        "title": "Real-time Analyses",
        "description": "Volg aflevering, netwerkprestaties en berichtvolumes direct live.",
        "subtext": "Live statistieken • 24/7 NOC-bewaking"
      },
      {
        "title": "Wereldwijde SMS-dekking",
        "description": "Bereik klanten overal ter wereld met betrouwbare aflevering.",
        "subtext": "Kwaliteit • Kosten • Compliance"
      },
      {
        "title": "Hogesnelheidsaflevering",
        "description": "Verstuur berichten razendsnel via geoptimaliseerde internationale routes.",
        "subtext": "Live statistieken • 24/7 NOC-bewaking"
      },
      {
        "title": "Beveiligde Berichten",
        "description": "Bescherm zakelijke communicatie met toonaangevende encryptiestandaarden.",
        "subtext": "Kwaliteit • Kosten • Compliance"
      },
      {
        "title": "Krachtige SMS API",
        "description": "Verbind uw bedrijfsapplicaties met flexibele en moderne REST API's.",
        "subtext": "Live statistieken • 24/7 NOC-bewaking"
      }
    ],
    "ctaBadge": "LATEN WE UW BERICHTENNETWERK BOUWEN",
    "ctaTitle": "Laat Uw Bedrijf Groeien met Zakelijke SMS-oplossingen",
    "ctaSubtitle": "Van intelligente routering en wholesale SMS-terminatie tot RCS en OTP-beveiliging biedt iNet Global schaalbare telecom.",
    "floatingBadges": {
      "wholesale": {
        "title": "Wholesale SMS",
        "desc": "Grootschalige bulkberichten"
      },
      "rcs": {
        "title": "RCS Messaging",
        "desc": "Rijke interactieve communicatie"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Directe beveiligingscodes"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global Team",
      "status": "Geverifieerde Afzender",
      "msg1": "Hier is uw verificatiecode voor het klantenportaal: 849201",
      "time1": "10:24",
      "msg2": "Ontvangen, hartelijk dank voor de snelle service!",
      "time2": "10:25",
      "inputPlaceholder": "Typ een bericht..."
    }
  },
  "tr": {
    "heroBadge": "MESAJLAŞMA SERVİSİ",
    "heroTitle": "Güvenilir SMS İletişimi ile Anında Bağlantı Kurun",
    "heroDesc": "Kurumsal SMS çözümleri, müşteriler, çalışanlar ve iş ortaklarıyla iletişim kurmanın en hızlı ve en etkili yollarından birini sunar.",
    "getStarted": "Hemen Başlayın",
    "contactUs": "Bize Ulaşın",
    "coreServiceBadge": "TEMEL HİZMETİMİZ",
    "coreServiceTitle": "Her sektör için özel olarak geliştirilmiş SMS çözümleri",
    "coreServiceSubtitle": "Yüksek erişilebilirlikli ses, mesajlaşma ve sanal numaralar için tasarlanmış modüler telekomünikasyon altyapısı.",
    "services": {
      "wholesaleSms": {
        "title": "Toptan (Wholesale) SMS",
        "description": "Teslimat hızı, geniş kapsama alanı ve maliyet avantajı için optimize edilmiş yüksek kapasiteli SMS sonlandırma.",
        "bullet1": "Yüksek teslimat güvencesi",
        "bullet2": "Esnek rota seçenekleri",
        "bullet3": "Küresel şebeke kapsaması",
        "learnMore": "Daha fazla bilgi"
      },
      "rcsMessaging": {
        "title": "RCS Kurumsal Mesajlaşma",
        "description": "Kritik işlemsel SMS'leri, OTP şifrelerini ve zengin interaktif iş mesajlarını dünya genelinde doğrudan mobil cihazlara iletin.",
        "bullet1": "Zengin medya ve interaktif kartlar",
        "bullet2": "Doğrulanmış gönderen kimliği",
        "bullet3": "Tek dokunuşla hızlı işlem butonları",
        "learnMore": "Daha fazla bilgi"
      },
      "otpSms": {
        "title": "OTP SMS (Doğrulama)",
        "description": "Saniyeler içinde dünya çapında teslim edilen ultra hızlı iki faktörlü kimlik doğrulama kodları.",
        "bullet1": "Saniyenin altında teslimat süresi",
        "bullet2": "Doğrudan operatör bağlantıları",
        "bullet3": "Yüksek kullanıcı dönüşüm oranları",
        "learnMore": "Daha fazla bilgi"
      }
    },
    "whyChooseBadge": "NEDEN INET SMS ÇÖZÜMLERİ",
    "whyChooseTitle": "Neden Bizim SMS Çözümlerimizi Seçmelisiniz",
    "whyChooseSubtitle": "Net bağlantılar, akıllı yönlendirme ve küresel pazarlarda güvenilir performans için tasarlandı.",
    "whyCards": {
      "secure": {
        "title": "Güvenli ve Kesintisiz İletişim",
        "description": "Altyapımız, yüksek işlem hacmi ve operatör seviyesinde güvenilirlik ile güvenli kurumsal mesajlaşmayı destekler."
      },
      "cloud": {
        "title": "Bulut Tabanlı Altyapı",
        "description": "Donanım darboğazlarını ortadan kaldıran ve maksimum teslimat oranları sağlayan ölçeklenebilir bulut mesajlaşması."
      },
      "api": {
        "title": "Ses ve SMS API Entegrasyonu",
        "description": "Güvenilir iletişim API sağlayıcısı olarak web sitelerine, mobil uygulamalara ve CRM'lere SMS yetenekleri entegre ediyoruz."
      },
      "connectivity": {
        "title": "Küresel Operatör Bağlantısı",
        "description": "190'dan fazla ülkede Tier-1 doğrudan operatör arabağlantıları kesintisiz ve öncelikli teslimat sağlar."
      },
      "automated": {
        "title": "Otomatik Mesajlaşma Hizmetleri",
        "description": "Otomatik bildirimler, tetikleyici tabanlı kampanyalar, randevu hatırlatıcıları ve çift yönlü sohbetlerle etkileşimi artırın."
      }
    },
    "featuresBadge": "SMS HİZMETLERİMİZ NELER SUNAR",
    "featuresTitle": "Daha Akıllı SMS İletişimi İçin İhtiyacınız Olan Her Şey",
    "featuresSubtitle": "Hız, güvenlik ve küresel erişimle SMS'leri büyük ölçekte göndermek, yönetmek ve izlemek için kurumsal platform.",
    "features": [
      {
        "title": "Gerçek Zamanlı Analitik",
        "description": "Teslimat durumunu, performansı ve mesajlaşma trafiğini anında canlı takip edin.",
        "subtext": "Canlı metrikler • 7/24 NOC İzleme"
      },
      {
        "title": "Küresel SMS Dağıtımı",
        "description": "Güvenilir SMS iletimi ile dünya çapındaki müşterilerinize sorunsuzca ulaşın.",
        "subtext": "Kalite • Maliyet • Uyumluluk"
      },
      {
        "title": "Yüksek Hızlı Teslimat",
        "description": "Optimize edilmiş uluslararası rotalarla mesajları anında ulaştırın.",
        "subtext": "Canlı metrikler • 7/24 NOC İzleme"
      },
      {
        "title": "Güvenli Mesajlaşma",
        "description": "İşletme iletişimlerinizi kurumsal güvenlik ve şifreleme altyapısıyla koruyun.",
        "subtext": "Kalite • Maliyet • Uyumluluk"
      },
      {
        "title": "Güçlü SMS API'si",
        "description": "Uygulamalarınızı esnek ve modern REST API'lerimizle kolayca bağlayın.",
        "subtext": "Canlı metrikler • 7/24 NOC İzleme"
      }
    ],
    "ctaBadge": "MESAJLAŞMA AĞINIZI BİRLİKTE kURALIM",
    "ctaTitle": "Kurumsal SMS Çözümleri ile İşinizi Büyütün",
    "ctaSubtitle": "Akıllı yönlendirmeden toptan SMS sonlandırmaya, RCS ve OTP doğrulamasına kadar iNet Global ölçeklenebilir telekom sunar.",
    "floatingBadges": {
      "wholesale": {
        "title": "Toptan SMS",
        "desc": "Yüksek hacimli mesajlaşma"
      },
      "rcs": {
        "title": "RCS Mesajlaşma",
        "desc": "Zengin interaktif mesajlar"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Anlık güvenlik kodları"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global Ekibi",
      "status": "Doğrulanmış Gönderici",
      "msg1": "Portal girişiniz için tek kullanımlık güvenlik kodunuz: 849201",
      "time1": "10:24",
      "msg2": "Kod ulaştı, teşekkürler!",
      "time2": "10:25",
      "inputPlaceholder": "Bir mesaj yazın..."
    }
  },
  "id": {
    "heroBadge": "LAYANAN PENGIRIMAN PESAN",
    "heroTitle": "Terhubung Instan dengan Komunikasi SMS yang Andal",
    "heroDesc": "Solusi SMS Bisnis menyediakan salah satu cara tercepat dan paling efektif untuk berkomunikasi dengan pelanggan, staf, dan mitra.",
    "getStarted": "Mulai Sekarang",
    "contactUs": "Hubungi Kami",
    "coreServiceBadge": "LAYANAN UTAMA KAMI",
    "coreServiceTitle": "Solusi SMS yang dirancang untuk setiap industri",
    "coreServiceSubtitle": "Infrastruktur telekomunikasi modular yang dirancang untuk suara ketersediaan tinggi, pesan, dan nomor virtual.",
    "services": {
      "wholesaleSms": {
        "title": "Wholesale SMS",
        "description": "Terminasi SMS berkapasitas tinggi dengan opsi rute yang dirancang untuk kecepatan pengiriman, jangkauan, dan efisiensi biaya.",
        "bullet1": "Jaminan pengiriman tinggi",
        "bullet2": "Opsi perutean fleksibel",
        "bullet3": "Cakupan jaringan global",
        "learnMore": "Pelajari lebih lanjut"
      },
      "rcsMessaging": {
        "title": "RCS Business Messaging",
        "description": "Kirimkan SMS transaksional kritis, OTP, dan pesan kaya interaktif langsung ke perangkat seluler di seluruh dunia.",
        "bullet1": "Media kaya & kartu interaktif",
        "bullet2": "Identitas pengirim terverifikasi",
        "bullet3": "Tombol tindakan cepat responsif",
        "learnMore": "Pelajari lebih lanjut"
      },
      "otpSms": {
        "title": "SMS OTP",
        "description": "Kode verifikasi sangat cepat dan autentikasi dua faktor yang terkirim dalam hitungan detik secara global.",
        "bullet1": "Kecepatan kirim di bawah satu detik",
        "bullet2": "Koneksi langsung operator",
        "bullet3": "Tingkat konversi login tinggi",
        "learnMore": "Pelajari lebih lanjut"
      }
    },
    "whyChooseBadge": "MENGAPA MEMILIH INET SMS",
    "whyChooseTitle": "Mengapa Memilih Solusi SMS Kami",
    "whyChooseSubtitle": "Dibangun untuk koneksi jernih, perutean fleksibel, dan performa pesan yang andal di pasar global.",
    "whyCards": {
      "secure": {
        "title": "Komunikasi Aman dan Andal",
        "description": "Infrastruktur kami dirancang untuk mendukung pesan bisnis yang aman dengan throughput tinggi dan keandalan tingkat operator."
      },
      "cloud": {
        "title": "Infrastruktur Berbasis Cloud",
        "description": "Manfaatkan solusi cloud skalabel yang meniadakan hambatan perangkat keras sembari memberikan tingkat pengiriman maksimal."
      },
      "api": {
        "title": "Integrasi API Suara & SMS",
        "description": "Sebagai penyedia API komunikasi tepercaya, kami mengintegrasikan SMS ke situs web, aplikasi seluler, dan sistem CRM."
      },
      "connectivity": {
        "title": "Konektivitas Operator Global",
        "description": "Interkoneksi operator Tier-1 langsung di lebih dari 190 negara memastikan pengiriman prioritas tanpa gangguan."
      },
      "automated": {
        "title": "Layanan Pesan Terotomatisasi",
        "description": "Tingkatkan interaksi melalui notifikasi otomatis, kampanye berbasis pemicu, pengingat janji temu, dan percakapan dua arah."
      }
    },
    "featuresBadge": "FITUR UTAMA LAYANAN SMS KAMI",
    "featuresTitle": "Semua yang Anda Butuhkan untuk Komunikasi SMS Lebih Cerdas",
    "featuresSubtitle": "Infrastruktur andal untuk mengirim, mengelola, dan memantau SMS dalam skala besar dengan kecepatan, keamanan, dan jangkauan.",
    "features": [
      {
        "title": "Analitik Waktu Nyata",
        "description": "Lacak pengiriman, performa, dan aktivitas pesan secara instan.",
        "subtext": "Metrik langsung • NOC 24/7"
      },
      {
        "title": "Pengiriman SMS Global",
        "description": "Jangkau pelanggan di seluruh dunia dengan pengiriman SMS yang andal.",
        "subtext": "Kualitas • Biaya • Kepatuhan"
      },
      {
        "title": "Pengiriman Berkecepatan Tinggi",
        "description": "Kirim pesan dengan cepat melalui rute internasional teroptimasi.",
        "subtext": "Metrik langsung • NOC 24/7"
      },
      {
        "title": "Pesan Terenkripsi Aman",
        "description": "Lindungi komunikasi bisnis penting dengan infrastruktur berstandar enterprise.",
        "subtext": "Kualitas • Biaya • Kepatuhan"
      },
      {
        "title": "API SMS yang Andal",
        "description": "Hubungkan aplikasi Anda dengan API SMS yang fleksibel dan ramah pengembang.",
        "subtext": "Metrik langsung • NOC 24/7"
      }
    ],
    "ctaBadge": "MARI BANGUN JARINGAN PESAN ANDA",
    "ctaTitle": "Kembangkan Bisnis Anda dengan Solusi SMS Enterprise",
    "ctaSubtitle": "Dari perutean cerdas dan terminasi SMS grosir hingga verifikasi RCS dan OTP, iNet Global menyediakan telekomunikasi berkinerja tinggi.",
    "floatingBadges": {
      "wholesale": {
        "title": "Wholesale SMS",
        "desc": "Pengiriman pesan bervolume besar"
      },
      "rcs": {
        "title": "Pesan Bisnis RCS",
        "desc": "Pesan interaktif kaya media"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Pengiriman kode verifikasi cepat"
      }
    },
    "chatScreen": {
      "contactName": "Tim iNet Global",
      "status": "Pengirim Terverifikasi",
      "msg1": "Kode verifikasi login portal Anda adalah: 849201",
      "time1": "10:24",
      "msg2": "Sudah diterima, terima kasih atas bantuannya!",
      "time2": "10:25",
      "inputPlaceholder": "Ketik pesan..."
    }
  },
  "vi": {
    "heroBadge": "DỊCH VỤ TIN NHẮN",
    "heroTitle": "Kết Nối Tức Thì với Giải Pháp SMS Doanh Nghiệp Đáng Tin Cậy",
    "heroDesc": "Giải pháp SMS Doanh nghiệp mang đến cách thức nhanh chóng và hiệu quả nhất để tương tác với khách hàng, nhân viên và đối tác toàn cầu.",
    "getStarted": "Bắt đầu ngay",
    "contactUs": "Liên hệ chúng tôi",
    "coreServiceBadge": "DỊCH VỤ CỐT LÕI",
    "coreServiceTitle": "Giải pháp SMS thiết kế cho mọi ngành nghề",
    "coreServiceSubtitle": "Hạ tầng viễn thông dạng mô-đun phục vụ thoại độ sẵn sàng cao, tin nhắn và số điện thoại ảo.",
    "services": {
      "wholesaleSms": {
        "title": "SMS Bán buôn (Wholesale)",
        "description": "Chuyển tiếp SMS dung lượng lớn với các tuyến tối ưu về tốc độ phát tin, độ phủ sóng và chi phí hợp lý.",
        "bullet1": "Đảm bảo tỷ lệ gửi thành công cao",
        "bullet2": "Tùy chọn định tuyến linh hoạt",
        "bullet3": "Độ phủ sóng toàn cầu mạnh mẽ",
        "learnMore": "Tìm hiểu thêm"
      },
      "rcsMessaging": {
        "title": "Tin nhắn Doanh nghiệp RCS",
        "description": "Gửi SMS giao dịch quan trọng, mã OTP và tin nhắn đa phương tiện tương tác trực tiếp tới điện thoại trên toàn thế giới.",
        "bullet1": "Đa phương tiện & thẻ tương tác",
        "bullet2": "Định danh thương hiệu xác thực",
        "bullet3": "Nút hành động phản hồi nhanh",
        "learnMore": "Tìm hiểu thêm"
      },
      "otpSms": {
        "title": "SMS OTP (Mã xác thực)",
        "description": "Mã xác thực tức thời và bảo mật hai lớp gửi đến tay người dùng trong vài giây trên phạm vi toàn cầu.",
        "bullet1": "Tốc độ gửi dưới một giây",
        "bullet2": "Kết nối trực tiếp nhà mạng",
        "bullet3": "Tỷ lệ chuyển đổi đăng nhập cao",
        "learnMore": "Tìm hiểu thêm"
      }
    },
    "whyChooseBadge": "TẠI SAO CHỌN INET SMS",
    "whyChooseTitle": "Lý Do Chọn Giải Pháp SMS Của Chúng Tôi",
    "whyChooseSubtitle": "Được xây dựng cho kết nối thông suốt, định tuyến thông minh và hiệu năng tin cậy trên các thị trường quốc tế.",
    "whyCards": {
      "secure": {
        "title": "Liên Lạc An Toàn và Đáng Tin Cậy",
        "description": "Hạ tầng được thiết kế để hỗ trợ tin nhắn bảo mật với băng thông lớn và độ tin cậy chuẩn nhà mạng."
      },
      "cloud": {
        "title": "Hạ Tầng Điện Toán Đám Mây",
        "description": "Tận dụng giải pháp đám mây linh hoạt giúp loại bỏ giới hạn phần cứng và tối đa hóa tỷ lệ gửi thành công."
      },
      "api": {
        "title": "Tích Hợp API Thoại & SMS",
        "description": "Là nhà cung cấp API uy tín, chúng tôi giúp tích hợp SMS vào trang web, ứng dụng di động và hệ thống CRM dễ dàng."
      },
      "connectivity": {
        "title": "Kết Nối Nhà Mạng Toàn Cầu",
        "description": "Kết nối trực tiếp với các nhà mạng Tier-1 tại hơn 190 quốc gia đảm bảo phân phối tin nhắn ưu tiên không gián đoạn."
      },
      "automated": {
        "title": "Dịch Vụ Tin Nhắn Tự Động Hóa",
        "description": "Tăng tương tác nhờ thông báo tự động, chiến dịch kích hoạt theo sự kiện, nhắc lịch hẹn và hội thoại hai chiều."
      }
    },
    "featuresBadge": "NĂNG LỰC DỊCH VỤ SMS CỦA CHÚNG TÔI",
    "featuresTitle": "Mọi Thứ Bạn Cần Cho Hệ Thống SMS Thông Minh Hơn",
    "featuresSubtitle": "Hạ tầng tin cậy giúp doanh nghiệp gửi, quản lý và giám sát SMS quy mô lớn với tốc độ, bảo mật và phạm vi toàn cầu.",
    "features": [
      {
        "title": "Phân Tích Dữ Liệu Thời Gian Thực",
        "description": "Theo dõi tình trạng gửi tin, hiệu năng và lưu lượng tin nhắn ngay lập tức.",
        "subtext": "Chỉ số trực tiếp • Giám sát NOC 24/7"
      },
      {
        "title": "Gửi SMS Toàn Cầu",
        "description": "Tiếp cận khách hàng tại mọi quốc gia với độ tin cậy vượt trội.",
        "subtext": "Chất lượng • Chi phí • Tuân thủ"
      },
      {
        "title": "Tốc Độ Gửi Cực Nhanh",
        "description": "Chuyển phát tin nhắn tức thì qua các tuyến quốc tế tối ưu.",
        "subtext": "Chỉ số trực tiếp • Giám sát NOC 24/7"
      },
      {
        "title": "Bảo Mật Cấp Doanh Nghiệp",
        "description": "Bảo vệ thông tin liên lạc kinh doanh với cơ chế mã hóa hiện đại.",
        "subtext": "Chất lượng • Chi phí • Tuân thủ"
      },
      {
        "title": "SMS API Mạnh Mẽ",
        "description": "Kết nối các ứng dụng của bạn bằng các REST API linh hoạt và tiện lợi.",
        "subtext": "Chỉ số trực tiếp • Giám sát NOC 24/7"
      }
    ],
    "ctaBadge": "HÃY XÂY DỰNG MẠNG LƯỚI TIN NHẮN CỦA BẠN",
    "ctaTitle": "Mở Rộng Kinh Doanh với Giải Pháp SMS Doanh Nghiệp",
    "ctaSubtitle": "Từ định tuyến thông minh và chuyển tiếp SMS bán buôn đến RCS và xác thực OTP, iNet Global cung cấp viễn thông mở rộng.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS Bán buôn",
        "desc": "Tin nhắn lưu lượng cực lớn"
      },
      "rcs": {
        "title": "Tin nhắn RCS",
        "desc": "Tương tác đa phương tiện phong phú"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Chuyển phát mã bảo mật tức thì"
      }
    },
    "chatScreen": {
      "contactName": "Đội ngũ iNet Global",
      "status": "Người gửi Đã xác minh",
      "msg1": "Mã xác thực đăng nhập cổng thông tin của bạn là: 849201",
      "time1": "10:24",
      "msg2": "Đã nhận được mã, cảm ơn bạn nhiều!",
      "time2": "10:25",
      "inputPlaceholder": "Nhập tin nhắn..."
    }
  },
  "pl": {
    "heroBadge": "USŁUGI KOMUNIKACYJNE SMS",
    "heroTitle": "Błyskawiczna Łączność Dzięki Niezawodnej Komunikacji SMS",
    "heroDesc": "Rozwiązania SMS dla biznesu stanowią jeden z najszybszych i najskuteczniejszych sposobów komunikacji z klientami, pracownikami i partnerami.",
    "getStarted": "Rozpocznij teraz",
    "contactUs": "Skontaktuj się z nami",
    "coreServiceBadge": "NASZA GŁÓWNA USŁUGA",
    "coreServiceTitle": "Rozwiązania SMS stworzone dla każdej branży",
    "coreServiceSubtitle": "Modułowa infrastruktura telekomunikacyjna zaprojektowana dla wysokiej dostępności głosu, wiadomości i numerów wirtualnych.",
    "services": {
      "wholesaleSms": {
        "title": "Hurtowy SMS (Wholesale)",
        "description": "Wysokowydajna terminacja SMS z opcjami routingu zoptymalizowanymi pod kątem szybkości dostarczania, zasięgu i kosztów.",
        "bullet1": "Wysoka gwarancja doręczalności",
        "bullet2": "Elastyczne opcje trasowania",
        "bullet3": "Globalny zasięg operatorów",
        "learnMore": "Dowiedz się więcej"
      },
      "rcsMessaging": {
        "title": "Wiadomości Biznesowe RCS",
        "description": "Dostarczaj krytyczne SMS-y transakcyjne, kody OTP i bogate wiadomości multimedialne bezpośrednio na telefony na całym świecie.",
        "bullet1": "Rich media i interaktywne karty",
        "bullet2": "Zweryfikowany profil nadawcy",
        "bullet3": "Interaktywne przyciski szybkich akcji",
        "learnMore": "Dowiedz się więcej"
      },
      "otpSms": {
        "title": "SMS OTP (Kody weryfikacyjne)",
        "description": "Błyskawiczne kody jednorazowe i uwierzytelnianie dwuskładnikowe dostarczane w ułamku sekundy na całym świecie.",
        "bullet1": "Dostarczenie w czasie poniżej sekundy",
        "bullet2": "Bezpośrednie łącza z operatorami",
        "bullet3": "Wysoka konwersja logowań",
        "learnMore": "Dowiedz się więcej"
      }
    },
    "whyChooseBadge": "DLACZEGO INET SMS",
    "whyChooseTitle": "Dlaczego Warto Wybrać Nasze Rozwiązania SMS",
    "whyChooseSubtitle": "Zbudowane z myślą o stabilnych połączeniach, elastycznym routingu i niezawodnej wydajności na rynkach międzynarodowych.",
    "whyCards": {
      "secure": {
        "title": "Bezpieczna i Niezawodna Komunikacja",
        "description": "Nasza infrastruktura wspiera bezpieczną komunikację biznesową o wysokiej przepustowości i niezawodności klasy operatorskiej."
      },
      "cloud": {
        "title": "Infrastruktura Oparta na Chmurze",
        "description": "Skorzystaj ze skalowalnych rozwiązań chmurowych, które eliminują wąskie gardła sprzętowe i zapewniają maksymalną doręczalność."
      },
      "api": {
        "title": "Integracja API Głosu i SMS",
        "description": "Jako zaufany dostawca API telekomunikacyjnych integrujemy SMS-y ze stronami internetowymi, aplikacjami mobilnymi i systemami CRM."
      },
      "connectivity": {
        "title": "Globalna Łączność Operatorska",
        "description": "Bezpośrednie połączenia z operatorami Tier-1 w ponad 190 krajach zapewniają nieprzerwane i priorytetowe dostarczanie."
      },
      "automated": {
        "title": "Zautomatyzowane Usługi Wiadomości",
        "description": "Zwiększ zaangażowanie dzięki automatycznym powiadomieniom, kampaniom wyzwalanym zdarzeniami i dwukierunkowej komunikacji."
      }
    },
    "featuresBadge": "CO OFERUJĄ NASZE USŁUGI SMS",
    "featuresTitle": "Wszystko, Czego Potrzebujesz do Inteligentnej Komunikacji SMS",
    "featuresSubtitle": "Niezawodna infrastruktura do wysyłania, zarządzania i monitorowania SMS-ów na masową skalę z szybkością i bezpieczeństwem.",
    "features": [
      {
        "title": "Analityka w Czasie Rzeczywistym",
        "description": "Błyskawicznie śledź status doręczeń, wydajność i natężenie ruchu wiadomości.",
        "subtext": "Dane na żywo • NOC 24/7"
      },
      {
        "title": "Globalna Wysyłka SMS",
        "description": "Docieraj do odbiorców na całym świecie z gwarancją niezawodności.",
        "subtext": "Jakość • Koszt • Zgodność"
      },
      {
        "title": "Błyskawiczne Doręczanie",
        "description": "Wysyłaj wiadomości w ułamku sekundy dzięki zoptymalizowanym trasom.",
        "subtext": "Dane na żywo • NOC 24/7"
      },
      {
        "title": "Bezpieczna Transmisja Danych",
        "description": "Chroń poufną komunikację biznesową dzięki zaawansowanym standardom bezpieczeństwa.",
        "subtext": "Jakość • Koszt • Zgodność"
      },
      {
        "title": "Wydajne REST API SMS",
        "description": "Łatwo łącz własne aplikacje biznesowe za pomocą elastycznych interfejsów API.",
        "subtext": "Dane na żywo • NOC 24/7"
      }
    ],
    "ctaBadge": "ZBUDUJ SWOJĄ SIECIOWĄ KOMUNIKACJĘ",
    "ctaTitle": "Rozwijaj Swój Biznes Dzięki Korporacyjnym Rozwiązaniom SMS",
    "ctaSubtitle": "Od inteligentnego routingu po hurtową terminację SMS, RCS i OTP — iNet Global dostarcza w pełni skalowalną telekomunikację.",
    "floatingBadges": {
      "wholesale": {
        "title": "Hurtowy SMS",
        "desc": "Wysyłki o bardzo dużym wolumenie"
      },
      "rcs": {
        "title": "Wiadomości RCS",
        "desc": "Bogate interaktywne multimedia"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Błyskawiczne kody zabezpieczające"
      }
    },
    "chatScreen": {
      "contactName": "Zespół iNet Global",
      "status": "Zweryfikowany Nadawca",
      "msg1": "Twój jednorazowy kod weryfikacyjny do portalu to: 849201",
      "time1": "10:24",
      "msg2": "Kod dotarł natychmiast, dziękuję!",
      "time2": "10:25",
      "inputPlaceholder": "Wpisz wiadomość..."
    }
  },
  "th": {
    "heroBadge": "บริการส่งข้อความ SMS",
    "heroTitle": "เชื่อมต่อได้ทันทีด้วยระบบสื่อสาร SMS ธุรกิจที่มีความน่าเชื่อถือสูง",
    "heroDesc": "โซลูชัน SMS สำหรับธุรกิจมอบช่องทางการสื่อสารที่รวดเร็วและมีประสิทธิภาพสูงสุดในการติดต่อกับลูกค้า พนักงาน และคู่ค้าทั่วโลก",
    "getStarted": "เริ่มต้นใช้งาน",
    "contactUs": "ติดต่อเรา",
    "coreServiceBadge": "บริการหลักของเรา",
    "coreServiceTitle": "โซลูชัน SMS ที่ออกแบบมาเพื่อรองรับทุกกลุ่มอุตสาหกรรม",
    "coreServiceSubtitle": "โครงสร้างพื้นฐานโทรคมนาคมแบบโมดูลาร์ที่ออกแบบมาสำหรับเสียง ข้อความ และหมายเลขเสมือนที่มีความพร้อมใช้งานสูง",
    "services": {
      "wholesaleSms": {
        "title": "SMS ขายส่ง (Wholesale)",
        "description": "บริการส่ง SMS ปริมาณมหาศาลพร้อมเส้นทางที่ออกแบบมาเพื่อความเร็วในการจัดส่ง ความครอบคลุม และความคุ้มค่าด้านต้นทุน",
        "bullet1": "รับประกันอัตราการส่งถึงปลายทางสูง",
        "bullet2": "ตัวเลือกเส้นทางการส่งที่ยืดหยุ่น",
        "bullet3": "ครอบคลุมเครือข่ายทั่วโลก",
        "learnMore": "เรียนรู้เพิ่มเติม"
      },
      "rcsMessaging": {
        "title": "RCS ข้อความธุรกิจอัจฉริยะ",
        "description": "ส่ง SMS ธุรกรรมที่สำคัญ รหัส OTP และข้อความเชิงโต้ตอบแบบริชมีเดียไปยังสมาร์ตโฟนทั่วโลกได้อย่างแม่นยำ",
        "bullet1": "ริชมีเดียและการ์ดแบบโต้ตอบ",
        "bullet2": "เครื่องหมายยืนยันตัวตนผู้ส่งอย่างเป็นทางการ",
        "bullet3": "ปุ่มคำสั่งตอบกลับด่วนเพียงคลิกเดียว",
        "learnMore": "เรียนรู้เพิ่มเติม"
      },
      "otpSms": {
        "title": "SMS OTP (รหัสยืนยันตัวตน)",
        "description": "ส่งรหัสยืนยันความปลอดภัยและระบบ 2FA ที่รวดเร็วเป็นพิเศษถึงมือผู้ใช้ภายในไม่กี่วินาทีทั่วโลก",
        "bullet1": "ความเร็วในการส่งระดับเสี้ยววินาที",
        "bullet2": "เชื่อมต่อตรงกับผู้ให้บริการเครือข่าย",
        "bullet3": "เพิ่มอัตราความสำเร็จในการเข้าสู่ระบบ",
        "learnMore": "เรียนรู้เพิ่มเติม"
      }
    },
    "whyChooseBadge": "ทำไมต้องเลือก INET SMS",
    "whyChooseTitle": "ทำไมจึงควรเลือกใช้โซลูชัน SMS ของเรา",
    "whyChooseSubtitle": "สร้างขึ้นเพื่อการเชื่อมต่อที่คมชัด การกำหนดเส้นทางที่ยืดหยุ่น และประสิทธิภาพการส่งข้อความที่วางใจได้ในระดับสากล",
    "whyCards": {
      "secure": {
        "title": "การสื่อสารที่ปลอดภัยและวางใจได้",
        "description": "โครงสร้างพื้นฐานของเรารองรับการส่งข้อความธุรกิจที่มีความปลอดภัยสูง พร้อมประสิทธิภาพระดับผู้ให้บริการเครือข่าย"
      },
      "cloud": {
        "title": "โครงสร้างพื้นฐานบนระบบคลาวด์",
        "description": "ใช้ประโยชน์จากโซลูชันคลาวด์ที่ปรับขนาดได้ ขจัดปัญหาคอขวดของฮาร์ดแวร์ และให้อัตราการจัดส่งสูงสุด"
      },
      "api": {
        "title": "การรวม API สำหรับเสียงและ SMS",
        "description": "ในฐานะผู้ให้บริการ API การสื่อสารที่เชื่อถือได้ เราช่วยรวม SMS เข้ากับเว็บไซต์ แอปพลิเคชันมือถือ และ CRM ได้อย่างราบรื่น"
      },
      "connectivity": {
        "title": "การเชื่อมต่อกับผู้ให้บริการเครือข่ายทั่วโลก",
        "description": "การเชื่อมต่อตรงระดับ Tier-1 ในกว่า 190 ประเทศช่วยรับประกันการจัดส่งที่มีความสำคัญสูงโดยไม่หยุดชะงัก"
      },
      "automated": {
        "title": "บริการส่งข้อความอัตโนมัติ",
        "description": "เพิ่มการมีส่วนร่วมผ่านการแจ้งเตือนอัตโนมัติ แคมเปญตามเหตุการณ์ การแจ้งเตือนนัดหมาย และการสนทนาโต้ตอบสองทาง"
      }
    },
    "featuresBadge": "ขีดความสามารถของบริการ SMS",
    "featuresTitle": "ทุกสิ่งที่คุณต้องการเพื่อการสื่อสาร SMS ที่ชาญฉลาดยิ่งขึ้น",
    "featuresSubtitle": "โครงสร้างพื้นฐานที่เชื่อถือได้ ช่วยให้ธุรกิจส่ง จัดการ และตรวจสอบ SMS ในระดับสเกลใหญ่ด้วยความเร็วและความปลอดภัย",
    "features": [
      {
        "title": "การวิเคราะห์ข้อมูลแบบเรียลไทม์",
        "description": "ติดตามสถานะการส่ง ประสิทธิภาพ และปริมาณข้อความได้ทันทีในแบบสด",
        "subtext": "แดชบอร์ดสด • ศูนย์ NOC ดูแลตลอด 24/7"
      },
      {
        "title": "การส่ง SMS ครอบคลุมทั่วโลก",
        "description": "เข้าถึงลูกค้าได้ทั่วทุกมุมโลกด้วยการจัดส่ง SMS ที่เชื่อถือได้",
        "subtext": "คุณภาพ • ต้นทุน • มาตรฐานสากล"
      },
      {
        "title": "การจัดส่งความเร็วสูง",
        "description": "ส่งข้อความได้อย่างรวดเร็วผ่านเส้นทางระดับสากลที่ปรับแต่งมาเป็นพิเศษ",
        "subtext": "แดชบอร์ดสด • ศูนย์ NOC ดูแลตลอด 24/7"
      },
      {
        "title": "การส่งข้อความที่มีความปลอดภัยสูง",
        "description": "ปกป้องการสื่อสารทางธุรกิจด้วยโครงสร้างพื้นฐานความปลอดภัยระดับองค์กร",
        "subtext": "คุณภาพ • ต้นทุน • มาตรฐานสากล"
      },
      {
        "title": "SMS API ประสิทธิภาพสูง",
        "description": "เชื่อมต่อแอปพลิเคชันของคุณได้อย่างง่ายดายด้วย REST API ที่ยืดหยุ่น",
        "subtext": "แดชบอร์ดสด • ศูนย์ NOC ดูแลตลอด 24/7"
      }
    ],
    "ctaBadge": "มาร่วมสร้างเครือข่ายข้อความของคุณกันเถอะ",
    "ctaTitle": "ขยายธุรกิจของคุณด้วยโซลูชัน SMS สำหรับองค์กร",
    "ctaSubtitle": "ตั้งแต่การกำหนดเส้นทางอัจฉริยะและ SMS ขายส่ง ไปจนถึง RCS และการตรวจสอบ OTP, iNet Global มอบโทรคมนาคมที่ปรับขนาดได้",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS ขายส่ง",
        "desc": "ส่งข้อความปริมาณมหาศาล"
      },
      "rcs": {
        "title": "RCS ข้อความธุรกิจ",
        "desc": "สื่อแบบโต้ตอบหลากหลายมิติ"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "ส่งรหัสยืนยันทันใจ"
      }
    },
    "chatScreen": {
      "contactName": "ทีมงาน iNet Global",
      "status": "ผู้ส่งที่ได้รับการยืนยัน",
      "msg1": "รหัสยืนยันความปลอดภัยสำหรับการเข้าสู่ระบบของคุณคือ: 849201",
      "time1": "10:24",
      "msg2": "ได้รับรหัสเรียบร้อยแล้ว ขอบคุณมากครับ!",
      "time2": "10:25",
      "inputPlaceholder": "พิมพ์ข้อความ..."
    }
  },
  "tl": {
    "heroBadge": "SERBISYO SA PAGMEMENSAHE",
    "heroTitle": "Agad na Kumonekta gamit ang Maaasahang Komunikasyon sa SMS",
    "heroDesc": "Ang mga solusyon sa SMS ng negosyo ay nagbibigay ng isa sa pinakamabilis at pinaka-epektibong paraan upang makipag-usap sa mga customer, empleyado, at kasosyo.",
    "getStarted": "Magsimula Na",
    "contactUs": "Makipag-ugnayan sa Amin",
    "coreServiceBadge": "ANG AMING PANGUNAHING SERBISYO",
    "coreServiceTitle": "Mga solusyon sa SMS na binuo para sa bawat industriya",
    "coreServiceSubtitle": "Modular na imprastraktura ng telekomunikasyon na idinisenyo para sa high-availability na boses, pagmemensahe, at mga virtual na numero.",
    "services": {
      "wholesaleSms": {
        "title": "Wholesale SMS",
        "description": "Mataas na kapasidad na terminasyon ng SMS na may mga opsyon sa ruta na idinisenyo para sa bilis ng paghahatid, saklaw, at kahusayan sa gastos.",
        "bullet1": "Mataas na katiyakan sa paghahatid",
        "bullet2": "Mga nababagong opsyon sa ruta",
        "bullet3": "Pandaigdigang saklaw ng network",
        "learnMore": "Alamin ang higit pa"
      },
      "rcsMessaging": {
        "title": "RCS Business Messaging",
        "description": "Maghatid ng mga kritikal na transactional SMS, OTP, at mayayamang interactive na mensahe ng negosyo nang direkta sa mga handset sa buong mundo.",
        "bullet1": "Rich media at mga interactive na card",
        "bullet2": "Na-verify na branding ng nagpadala",
        "bullet3": "Mabilis na mga aksyong tugon sa isang pindot",
        "learnMore": "Alamin ang higit pa"
      },
      "otpSms": {
        "title": "OTP SMS (Verification Code)",
        "description": "Napakabilis na mga verification code at two-factor authentication SMS na naihahatid sa loob ng ilang segundo sa buong mundo.",
        "bullet1": "Bilis ng paghahatid na wala pang isang segundo",
        "bullet2": "Direktang koneksyon sa operator",
        "bullet3": "Mataas na rate ng conversion",
        "learnMore": "Alamin ang higit pa"
      }
    },
    "whyChooseBadge": "BAKIT PILIIN ANG AMING INET SMS SOLUTION",
    "whyChooseTitle": "Bakit Piliin ang Aming mga Solusyon sa SMS",
    "whyChooseSubtitle": "Binuo para sa malinaw na koneksyon, flexible na pagruruta, at maaasahang pagganap sa pagmemensahe sa mga pandaigdigang merkado.",
    "whyCards": {
      "secure": {
        "title": "Ligtas at Maaasahang Komunikasyon",
        "description": "Ang aming imprastraktura ay sumusuporta sa ligtas na pagmemensahe ng negosyo na may mataas na throughput at carrier-grade na kalidad."
      },
      "cloud": {
        "title": "Imprastrakturang Nakabatay sa Cloud",
        "description": "Samantalahin ang mga nasusukat na solusyon sa cloud na nag-aalis ng mga bottleneck sa hardware at nagbibigay ng pinakamataas na delivery rate."
      },
      "api": {
        "title": "Pagsasama ng Boses at SMS API",
        "description": "Bilang pinagkakatiwalaang provider ng API, tinutulungan namin ang mga negosyo na isama ang SMS sa mga website, mobile app, at CRM."
      },
      "connectivity": {
        "title": "Pandaigdigang Koneksyon ng Carrier",
        "description": "Ang mga direktang Tier-1 interconnect sa higit 190 bansa ay nagsisiguro ng tuloy-tuloy at mataas na priyoridad na paghahatid."
      },
      "automated": {
        "title": "Awtomatikong Serbisyo sa Pagmemensahe",
        "description": "Pataasin ang pakikipag-ugnayan sa pamamagitan ng mga awtomatikong notification, campaign batay sa trigger, at two-way chat."
      }
    },
    "featuresBadge": "ANG IBINIBIGAY NG AMING MGA SERBISYO SA SMS",
    "featuresTitle": "Lahat ng Kailangan Mo para sa Mas Matalinong Komunikasyon sa SMS",
    "featuresSubtitle": "Maaasahang imprastraktura upang matulungan ang mga negosyo na magpadala, mamahala, at sumubaybay ng SMS sa malaking sukat.",
    "features": [
      {
        "title": "Real-Time na Analytics",
        "description": "Subaybayan ang paghahatid, pagganap, at aktibidad ng pagmemensahe sa real time.",
        "subtext": "Live analytics • 24/7 NOC"
      },
      {
        "title": "Pandaigdigang Pagmemensahe ng SMS",
        "description": "Abutin ang mga customer sa buong mundo nang may maaasahang paghahatid ng SMS.",
        "subtext": "Kalidad • Gastos • Pagsunod"
      },
      {
        "title": "Napakabilis na Paghahatid",
        "description": "Magpadala ng mga mensahe nang mabilis gamit ang mga na-optimize na ruta.",
        "subtext": "Live analytics • 24/7 NOC"
      },
      {
        "title": "Ligtas na Pagmemensahe",
        "description": "Protektahan ang mga komunikasyon sa negosyo gamit ang ligtas na imprastraktura.",
        "subtext": "Kalidad • Gastos • Pagsunod"
      },
      {
        "title": "Makapangyarihang SMS API",
        "description": "Ikonekta ang iyong mga application gamit ang mga flexible na SMS API.",
        "subtext": "Live analytics • 24/7 NOC"
      }
    ],
    "ctaBadge": "BUUIN NATIN ANG IYONG MESSAGING NETWORK",
    "ctaTitle": "Palakihin ang Iyong Negosyo gamit ang Business SMS Solutions",
    "ctaSubtitle": "Mula sa matalinong pagruruta at wholesale SMS hanggang sa RCS at OTP verification, ang iNet Global ay nagbibigay ng maaasahang telekomunikasyon.",
    "floatingBadges": {
      "wholesale": {
        "title": "Wholesale SMS",
        "desc": "Mataas na dami ng pagmemensahe"
      },
      "rcs": {
        "title": "RCS Messaging",
        "desc": "Mayaman at interactive na mensahe"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Mabilis na paghahatid ng verification code"
      }
    },
    "chatScreen": {
      "contactName": "Koponan ng iNet Global",
      "status": "Na-verify na Nagpadala",
      "msg1": "Narito ang iyong verification code para sa portal: 849201",
      "time1": "10:24 AM",
      "msg2": "Natanggap ko na, maraming salamat!",
      "time2": "10:25 AM",
      "inputPlaceholder": "Mag-type ng mensahe..."
    }
  },
  "bn": {
    "heroBadge": "মেসেজিং সেবা",
    "heroTitle": "নির্ভরযোগ্য এসএমএস যোগাযোগের মাধ্যমে তাত্ক্ষণিকভাবে যুক্ত হোন",
    "heroDesc": "ব্যবসায়িক এসএমএস সমাধান গ্রাহক, কর্মী এবং অংশীদারদের সাথে যোগাযোগের অন্যতম দ্রুত ও কার্যকর মাধ্যম সরবরাহ করে।",
    "getStarted": "শুরু করুন",
    "contactUs": "আমাদের সাথে যোগাযোগ করুন",
    "coreServiceBadge": "আমাদের মূল পরিষেবা",
    "coreServiceTitle": "প্রতিটি শিল্পের জন্য বিশেষভাবে নির্মিত এসএমএস সমাধান",
    "coreServiceSubtitle": "উচ্চ উপলব্ধতার ভয়েস, মেসেজিং এবং ভার্চুয়াল নম্বরের জন্য তৈরি মডুলার টেলিকম অবকাঠামো।",
    "services": {
      "wholesaleSms": {
        "title": "হোলসেল এসএমএস",
        "description": "ডেলিভারি গতি, কভারেজ এবং খরচ সাশ্রয়কে প্রাধান্য দিয়ে তৈরি উচ্চ ক্ষমতাসম্পন্ন এসএমএস টার্মিনেশন।",
        "bullet1": "উচ্চ ডেলিভারি নিশ্চয়তা",
        "bullet2": "নমনীয় রাউটিং বিকল্প",
        "bullet3": "বিশ্বব্যাপী ব্যাপক নেটওয়ার্ক কভারেজ",
        "learnMore": "আরও জানুন"
      },
      "rcsMessaging": {
        "title": "আরসিএস বিজনেস মেসেজিং",
        "description": "গুরুত্বপূর্ণ লেনদেন সংক্রান্ত এসএমএস, ওটিপি এবং রিচ মিডিয়া ব্যবসায়িক বার্তা সরাসরি বিশ্বজুড়ে হ্যান্ডসেটে পৌঁছে দিন।",
        "bullet1": "রিচ মিডিয়া এবং ইন্টারেক্টিভ কার্ড",
        "bullet2": "যাচাইকৃত প্রেরক ব্র্যান্ডিং",
        "bullet3": "এক ক্লিকে কার্যকর দ্রুত প্রতিক্রিয়া",
        "learnMore": "আরও জানুন"
      },
      "otpSms": {
        "title": "ওটিপি এসএমএস",
        "description": "অতি দ্রুত সময়োপযোগী যাচাইকরণ কোড এবং দ্বি-পদক্ষেপ প্রমাণীকরণ এসএমএস কয়েক সেকেন্ডের মধ্যে বিশ্বব্যাপী পৌঁছে যায়।",
        "bullet1": "এক সেকেন্ডেরও কম সময়ে ডেলিভারি",
        "bullet2": "সরাসরি অপারেটর সংযোগ",
        "bullet3": "উচ্চ রূপান্তর হার",
        "learnMore": "আরও জানুন"
      }
    },
    "whyChooseBadge": "কেন আমাদের INET SMS সমাধান বেছে নেবেন",
    "whyChooseTitle": "কেন আমাদের এসএমএস সমাধানগুলো বেছে নেবেন",
    "whyChooseSubtitle": "স্পষ্ট সংযোগ, নমনীয় রাউটিং এবং আন্তর্জাতিক বাজারে নির্ভরযোগ্য মেসেজিং পারফরম্যান্সের জন্য নির্মিত।",
    "whyCards": {
      "secure": {
        "title": "নিরাপদ ও নির্ভরযোগ্য যোগাযোগ",
        "description": "আমাদের পরিকাঠামো উচ্চ থ্রুপুট এবং ক্যারিয়ার-গ্রেড নির্ভরযোগ্যতার সাথে নিরাপদ ব্যবসায়িক বার্তা সমর্থন করে।"
      },
      "cloud": {
        "title": "ক্লাউড-ভিত্তিক অবকাঠামো",
        "description": "স্কেলযোগ্য ক্লাউড মেসেজিং সমাধান যা হার্ডওয়্যার সীমাবদ্ধতা দূর করে সর্বোচ্চ ডেলিভারি রেট নিশ্চিত করে।"
      },
      "api": {
        "title": "ভয়েস ও এসএমএস এপিআই ইন্টিগ্রেশন",
        "description": "বিশ্বস্ত যোগাযোগ এপিআই প্রদানকারী হিসেবে আমরা ওয়েবসাইট, মোবাইল অ্যাপ এবং সিআরএম-এ এসএমএস সংযুক্ত করি।"
      },
      "connectivity": {
        "title": "গ্লোবাল ক্যারিয়ার কানেক্টিভিটি",
        "description": "১৯০টিরও বেশি দেশে সরাসরি টিয়ার-১ ক্যারিয়ার ইন্টারকানেক্ট নির্বিঘ্ন এবং অগ্রাধিকারমূলক ডেলিভারি নিশ্চিত করে।"
      },
      "automated": {
        "title": "স্বয়ংক্রিয় মেসেজিং পরিষেবা",
        "description": "স্বয়ংক্রিয় বিজ্ঞপ্তি, ট্রিগার-ভিত্তিক প্রচার এবং দ্বি-মুখী কথোপকথনের মাধ্যমে গ্রাহক সম্পৃক্ততা বৃদ্ধি করুন।"
      }
    },
    "featuresBadge": "আমাদের এসএমএস পরিষেবা যা প্রদান করে",
    "featuresTitle": "স্মার্ট এসএমএস যোগাযোগের জন্য আপনার প্রয়োজনীয় সবকিছু",
    "featuresSubtitle": "গতি, নিরাপত্তা এবং বিশ্বব্যাপী বিস্তৃতি সহ বৃহৎ পরিসরে এসএমএস পাঠানো, পরিচালনা ও পর্যবেক্ষণের নির্ভরযোগ্য ব্যবস্থা।",
    "features": [
      {
        "title": "রিয়েল-টাইম অ্যানালিটিক্স",
        "description": "ডেলিভারি স্থিতি, কর্মক্ষমতা এবং মেসেজিং কার্যকলাপ তাত্ক্ষণিকভাবে ট্র্যাক করুন।",
        "subtext": "লাইভ অ্যানালিটিক্স • ২৪/৭ এনওসি"
      },
      {
        "title": "গ্লোবাল এসএমএস মেসেজিং",
        "description": "নির্ভরযোগ্য এসএমএস ডেলিভারি সহ বিশ্বব্যাপী গ্রাহকদের কাছে পৌঁছান।",
        "subtext": "গুণমান • খরচ • সম্মতি"
      },
      {
        "title": "উচ্চ গতির ডেলিভারি",
        "description": "অপ্টিমাইজ করা গ্লোবাল রুটের মাধ্যমে বার্তাগুলো দ্রুততম সময়ে পাঠান।",
        "subtext": "লাইভ অ্যানালিটিক্স • ২৪/৭ এনওসি"
      },
      {
        "title": "সুরক্ষিত মেসেজিং",
        "description": "নিরাপদ অবকাঠামোর মাধ্যমে ব্যবসায়িক যোগাযোগকে সুরক্ষিত রাখুন।",
        "subtext": "গুণমান • খরচ • সম্মতি"
      },
      {
        "title": "শক্তিশালী এসএমএস এপিআই",
        "description": "নমনীয় এবং আধুনিক এপিআই দিয়ে আপনার অ্যাপ্লিকেশনগুলোকে সহজে সংযুক্ত করুন।",
        "subtext": "লাইভ অ্যানালিটিক্স • ২৪/৭ এনওসি"
      }
    ],
    "ctaBadge": "আসুন আপনার মেসেজিং নেটওয়ার্ক তৈরি করি",
    "ctaTitle": "ব্যবসায়িক এসএমএস সমাধানের সাথে আপনার ব্যবসা বাড়ান",
    "ctaSubtitle": "ইন্টেলিজেন্ট রাউটিং এবং হোলসেল টার্মিনেশন থেকে শুরু করে আরসিএস এবং ওটিপি যাচাইকরণ পর্যন্ত, আইনেট গ্লোবাল স্কেলযোগ্য টেলিকম প্রদান করে।",
    "floatingBadges": {
      "wholesale": {
        "title": "হোলসেল এসএমএস",
        "desc": "বৃহৎ আয়তনের বাল্ক মেসেজিং"
      },
      "rcs": {
        "title": "আরসিএস মেসেজিং",
        "desc": "ইন্টারেক্টিভ সমৃদ্ধ বার্তা"
      },
      "otp": {
        "title": "ওটিপি এসএমএস",
        "desc": "তাত্ক্ষণিক যাচাইকরণ কোড সরবরাহ"
      }
    },
    "chatScreen": {
      "contactName": "আইনেট গ্লোবাল টিম",
      "status": "যাচাইকৃত প্রেরক",
      "msg1": "পোর্টালে লগইনের জন্য আপনার যাচাইকরণ কোডটি হলো: 849201",
      "time1": "10:24 AM",
      "msg2": "কোডটি পেয়েছি, দ্রুত সরবরাহের জন্য ধন্যবাদ!",
      "time2": "10:25 AM",
      "inputPlaceholder": "একটি বার্তা লিখুন..."
    }
  },
  "ta": {
    "heroBadge": "செய்தியிடல் சேவை",
    "heroTitle": "நம்பகமான SMS தகவல்தொடர்புடன் உடனடியாக இணையுங்கள்",
    "heroDesc": "வணிக SMS தீர்வுகள் வாடிக்கையாளர்கள், ஊழியர்கள் மற்றும் கூட்டாளர்களுடன் தொடர்பு கொள்ள மிக விரைவான மற்றும் பயனுள்ள வழிகளை வழங்குகின்றன.",
    "getStarted": "தொடங்குங்கள்",
    "contactUs": "எங்களைத் தொடர்பு கொள்ளுங்கள்",
    "coreServiceBadge": "எங்களின் முக்கிய சேவை",
    "coreServiceTitle": "ஒவ்வொரு தொழில்துறைக்கும் கட்டமைக்கப்பட்ட SMS தீர்வுகள்",
    "coreServiceSubtitle": "உயர் கிடைக்கும் தன்மை கொண்ட குரல், செய்தி மற்றும் மெய்நிகர் எண்களுக்காக வடிவமைக்கப்பட்ட தொலைத்தொடர்பு உள்கட்டமைப்பு.",
    "services": {
      "wholesaleSms": {
        "title": "மொத்த SMS (Wholesale)",
        "description": "டெலிவரி வேகம், உலகளாவிய கவரேஜ் மற்றும் குறைந்த செலவை மையமாகக் கொண்ட உயர் திறன் கொண்ட SMS டெர்மினேஷன்.",
        "bullet1": "உயர் டெலிவரி உத்தரவாதம்",
        "bullet2": "நெகிழ்வான வழித்தட தேர்வுகள்",
        "bullet3": "உலகளாவிய நெட்வொர்க் கவரேஜ்",
        "learnMore": "மேலும் அறிய"
      },
      "rcsMessaging": {
        "title": "RCS வணிகச் செய்தியிடல்",
        "description": "முக்கிய பரிவர்த்தனை SMS, OTP மற்றும் ஊடாடும் ஊடகச் செய்திகளை உலகளவில் மொபைல்களுக்கு நேரடியாக வழங்கவும்.",
        "bullet1": "ரிச் மீடியா மற்றும் ஊடாடும் அட்டைகள்",
        "bullet2": "சரிபார்க்கப்பட்ட அனுப்புநர் பிராண்டிங்",
        "bullet3": "ஒரு கிளிக்கில் உடனடி பதில் பொத்தான்கள்",
        "learnMore": "மேலும் அறிய"
      },
      "otpSms": {
        "title": "OTP SMS (சரிபார்ப்புக் குறியீடு)",
        "description": "மிக விரைவான நேர-முக்கியத்துவ சரிபார்ப்புக் குறியீடுகள் மற்றும் 2FA செய்திகள் சில நொடிகளில் உலகளவில் வழங்கப்படுகின்றன.",
        "bullet1": "ஒரு நொடிக்கும் குறைவான டெலிவரி வேகம்",
        "bullet2": "நேரடி ஆபரேட்டர் இணைப்புகள்",
        "bullet3": "உயர் உள்நுழைவு மாற்று விகிதங்கள்",
        "learnMore": "மேலும் அறிய"
      }
    },
    "whyChooseBadge": "எங்கள் INET SMS தீர்வை ஏன் தேர்வு செய்ய வேண்டும்",
    "whyChooseTitle": "எங்கள் SMS தீர்வுகளை ஏன் தேர்வு செய்ய வேண்டும்",
    "whyChooseSubtitle": "தெளிவான இணைப்புகள், நெகிழ்வான ரூட்டிங் மற்றும் உலகளாவிய சந்தைகளில் நம்பகமான செய்தியிடல் செயல்திறனுக்காக உருவாக்கப்பட்டது.",
    "whyCards": {
      "secure": {
        "title": "பாதுகாப்பான மற்றும் நம்பகமான தொடர்பு",
        "description": "எங்கள் உள்கட்டமைப்பு உயர் செயல்திறன் மற்றும் கேரியர்-கிரேடு நம்பகத்தன்மையுடன் பாதுகாப்பான வணிகச் செய்திகளை ஆதரிக்கிறது."
      },
      "cloud": {
        "title": "கிளவுட் அடிப்படையிலான உள்கட்டமைப்பு",
        "description": "வன்பொருள் தடைகளை நீக்கி அதிகபட்ச டெலிவரி விகிதங்களை வழங்கும் கிளவுட் செய்தியிடல் தீர்வுகளைப் பயன்படுத்தவும்."
      },
      "api": {
        "title": "குரல் மற்றும் SMS API ஒருங்கிணைப்பு",
        "description": "நம்பகமான API வழங்குநராக இணையதளங்கள், மொபைல் பயன்பாடுகள் மற்றும் CRM ஆகியவற்றில் SMS திறன்களை ஒருங்கிணைக்க உதவுகிறோம்."
      },
      "connectivity": {
        "title": "உலகளாவிய கேரியர் இணைப்பு",
        "description": "190+ நாடுகளில் உள்ள நேரடி Tier-1 கேரியர் இணைப்புகள் தடையில்லா மற்றும் முன்னுரிமை டெலிவரியை உறுதி செய்கின்றன."
      },
      "automated": {
        "title": "தானியங்கி செய்தியிடல் சேவைகள்",
        "description": "தானியங்கி அறிவிப்புகள், தூண்டுதல் சார்ந்த பிரச்சாரங்கள் மற்றும் இருவழி உரையாடல்கள் மூலம் வாடிக்கையாளர் ஈடுபாட்டை அதிகரிக்கவும்."
      }
    },
    "featuresBadge": "எங்கள் SMS சேவைகள் வழங்குபவை",
    "featuresTitle": "புத்திசாலித்தனமான SMS தகவல்தொடர்புக்கு தேவையான அனைத்தும்",
    "featuresSubtitle": "வேகம், பாதுகாப்பு மற்றும் உலகளாவிய பரவலுடன் பெரிய அளவில் SMS அனுப்பவும், நிர்வகிக்கவும், கண்காணிக்கவும் உதவும் தளம்.",
    "features": [
      {
        "title": "நிகழ்நேர பகுப்பாய்வு",
        "description": "டெலிவரி நிலை, செயல்திறன் மற்றும் செய்தி செயல்பாட்டை உடனடியாகக் கண்காணிக்கவும்.",
        "subtext": "நேரலை பகுப்பாய்வு • 24/7 NOC கண்காணிப்பு"
      },
      {
        "title": "உலகளாவிய SMS செய்தியிடல்",
        "description": "நம்பகமான SMS டெலிவரி மூலம் உலகெங்கிலும் உள்ள வாடிக்கையாளர்களை சென்றடையுங்கள்.",
        "subtext": "தரம் • விலை சிக்கனம் • இணக்கம்"
      },
      {
        "title": "அதிவேக டெலிவரி",
        "description": "மேம்படுத்தப்பட்ட சர்வதேச வழித்தடங்கள் மூலம் செய்திகளை மிக வேகமாக அனுப்பவும்.",
        "subtext": "நேரலை பகுப்பாய்வு • 24/7 NOC கண்காணிப்பு"
      },
      {
        "title": "பாதுகாக்கப்பட்ட செய்தியிடல்",
        "description": "நிறுவன பாதுகாப்பு உள்கட்டமைப்புடன் வணிகத் தகவல்தொடர்புகளைப் பாதுகாக்கவும்.",
        "subtext": "தரம் • விலை சிக்கனம் • இணக்கம்"
      },
      {
        "title": "சக்திவாய்ந்த SMS API",
        "description": "நெகிழ்வான மற்றும் நவீன API களுடன் உங்கள் பயன்பாடுகளை எளிதாக இணைக்கவும்.",
        "subtext": "நேரலை பகுப்பாய்வு • 24/7 NOC கண்காணிப்பு"
      }
    ],
    "ctaBadge": "உங்கள் செய்தியிடல் நெட்வொர்க்கை உருவாக்குவோம்",
    "ctaTitle": "வணிக SMS தீர்வுகளுடன் உங்கள் வணிகத்தை வளர்த்துக் கொள்ளுங்கள்",
    "ctaSubtitle": "அறிவார்ந்த ரூட்டிங் மற்றும் மொத்த விற்பனை SMS முதல் RCS மற்றும் OTP சரிபார்ப்பு வரை, iNet Global அளவிடக்கூடிய தகவல்தொடர்புகளை வழங்குகிறது.",
    "floatingBadges": {
      "wholesale": {
        "title": "மொத்த SMS",
        "desc": "அதிக அளவிலான மொத்த செய்திகள்"
      },
      "rcs": {
        "title": "RCS வணிகச் செய்திகள்",
        "desc": "ஊடாடும் ரிச் மீடியா செய்திகள்"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "உடனடி சரிபார்ப்புக் குறியீடு விநியோகம்"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global குழு",
      "status": "சரிபார்க்கப்பட்ட அனுப்புநர்",
      "msg1": "போர்டல் உள்நுழைவுக்கான உங்கள் சரிபார்ப்புக் குறியீடு: 849201",
      "time1": "10:24 AM",
      "msg2": "குறியீடு கிடைத்துவிட்டது, மிக்க நன்றி!",
      "time2": "10:25 AM",
      "inputPlaceholder": "செய்தியை உள்ளிடவும்..."
    }
  },
  "te": {
    "heroBadge": "మెసేజింగ్ సేవ",
    "heroTitle": "నమ్మకమైన SMS కమ్యూనికేషన్‌తో తక్షణమే కనెక్ట్ అవ్వండి",
    "heroDesc": "వ్యాపార SMS సొల్యూషన్స్ కస్టమర్‌లు, ఉద్యోగులు మరియు భాగస్వాములతో కమ్యూనికేట్ చేయడానికి వేగవంతమైన మరియు అత్యంత ప్రభావవంతమైన మార్గాలను అందిస్తాయి.",
    "getStarted": "ప్రారంభించండి",
    "contactUs": "మమ్మల్ని సంప్రదించండి",
    "coreServiceBadge": "మా ప్రధాన సేవ",
    "coreServiceTitle": "ప్రతి పరిశ్రమ కోసం రూపొందించబడిన SMS పరిష్కారాలు",
    "coreServiceSubtitle": "అధిక లభ్యత గల వాయిస్, మెసేజింగ్ మరియు వర్చువల్ నంబర్ల కోసం రూపొందించబడిన మాడ్యులర్ టెలికాం మౌలిక సదుపాయాలు.",
    "services": {
      "wholesaleSms": {
        "title": "హోల్‌సేల్ SMS",
        "description": "డెలివరీ వేగం, గ్లోబల్ కవరేజ్ మరియు తక్కువ ఖర్చు ఆధారంగా రూపొందించబడిన అధిక సామర్థ్యం గల SMS టెర్మినేషన్.",
        "bullet1": "అధిక డెలివరీ హామీ",
        "bullet2": "సౌకర్యవంతమైన రూట్ ఎంపికలు",
        "bullet3": "ప్రపంచవ్యాప్త నెట్‌వర్క్ కవరేజ్",
        "learnMore": "మరింత తెలుసుకోండి"
      },
      "rcsMessaging": {
        "title": "RCS బిజినెస్ మెసేజింగ్",
        "description": "కీలకమైన లావాదేవీల SMS, OTPలు మరియు ఇంటరాక్టివ్ రిచ్ మీడియా వ్యాపార సందేశాలను ప్రపంచవ్యాప్తంగా మొబైల్‌లకు నేరుగా డెలివరీ చేయండి.",
        "bullet1": "రిచ్ మీడియా & ఇంటరాక్టివ్ కార్డులు",
        "bullet2": "ధృవీకరించబడిన పంపినవారి బ్రాండింగ్",
        "bullet3": "ఒకే క్లిక్‌తో తక్షణ ప్రతిస్పందనలు",
        "learnMore": "మరింత తెలుసుకోండి"
      },
      "otpSms": {
        "title": "OTP SMS (ధృవీకరణ కోడ్)",
        "description": "అతి వేగవంతమైన ధృవీకరణ కోడ్‌లు మరియు 2FA సందేశాలు ప్రపంచవ్యాప్తంగా సెకన్లలో డెలివరీ చేయబడతాయి.",
        "bullet1": "ఒక సెకను కంటే తక్కువ డెలివరీ వేగం",
        "bullet2": "నేరుగా ఆపరేటర్ కనెక్షన్‌లు",
        "bullet3": "అధిక లాగిన్ మార్పిడి రేట్లు",
        "learnMore": "మరింత తెలుసుకోండి"
      }
    },
    "whyChooseBadge": "మా INET SMS పరిష్కారాన్ని ఎందుకు ఎంచుకోవాలి",
    "whyChooseTitle": "మా SMS పరిష్కారాలను ఎందుకు ఎంచుకోవాలి",
    "whyChooseSubtitle": "స్పష్టమైన కనెక్షన్‌లు, ఫ్లెక్సిబుల్ రూటింగ్ మరియు గ్లోబల్ మార్కెట్‌లలో నమ్మకమైన మెసేజింగ్ పనితీరు కోసం రూపొందించబడింది.",
    "whyCards": {
      "secure": {
        "title": "సురక్షితమైన మరియు నమ్మకమైన కమ్యూనికేషన్",
        "description": "మా మౌలిక సదుపాయాలు అధిక నిర్గమాంశ మరియు క్యారియర్-గ్రేడ్ విశ్వసనీయతతో సురక్షితమైన వ్యాపార సందేశాలకు మద్దతు ఇస్తాయి."
      },
      "cloud": {
        "title": "క్లౌడ్ ఆధారిత మౌలిక సదుపాయాలు",
        "description": "హార్డ్‌వేర్ అడ్డంకులను తొలగించి గరిష్ట డెలివరీ రేట్లను అందించే స్కేలబుల్ క్లౌడ్ మెసేజింగ్ పరిష్కారాలను ఉపయోగించుకోండి."
      },
      "api": {
        "title": "వాయిస్ & SMS API ఇంటిగ్రేషన్",
        "description": "విశ్వసనీయ API ప్రొవైడర్‌గా వెబ్‌సైట్‌లు, యాప్‌లు మరియు CRMలలో SMS ఫీచర్లను సులభంగా అనుసంధానించడంలో సహాయం చేస్తాము."
      },
      "connectivity": {
        "title": "గ్లోబల్ క్యారియర్ కనెక్టివిటీ",
        "description": "190 కంటే ఎక్కువ దేశాల్లోని డైరెక్ట్ Tier-1 క్యారియర్ ఇంటర్‌కనెక్ట్‌లు నిరంతరాయమైన ప్రాధాన్యత డెలివరీని నిర్ధారిస్తాయి."
      },
      "automated": {
        "title": "ఆటోమేటెడ్ మెసేజింగ్ సేవలు",
        "description": "ఆటోమేటిక్ నోటిఫికేషన్‌లు, ట్రిగ్గర్-ఆధారిత ప్రచారాలు మరియు ద్వైపాక్షిక చాట్‌ల ద్వారా కస్టమర్ ఎంగేజ్‌మెంట్‌ను మెరుగుపరచండి."
      }
    },
    "featuresBadge": "మా SMS సేవలు అందించే ఫీచర్లు",
    "featuresTitle": "తెలివైన SMS కమ్యూనికేషన్ కోసం మీకు కావలసినవన్నీ",
    "featuresSubtitle": "వేగం, భద్రత మరియు గ్లోబల్ రీచ్‌తో భారీ స్థాయిలో SMS పంపడానికి, నిర్వహించడానికి మరియు పర్యవేక్షించడానికి బలమైన ప్లాట్‌ఫారమ్.",
    "features": [
      {
        "title": "రియల్ టైమ్ అనలిటిక్స్",
        "description": "డెలివరీ స్థితి, పనితీరు మరియు సందేశ కార్యకలాపాలను నిజ సమయంలో ట్రాక్ చేయండి.",
        "subtext": "లైవ్ విశ్లేషణలు • 24/7 NOC పర్యవేక్షణ"
      },
      {
        "title": "గ్లోబల్ SMS మెసేజింగ్",
        "description": "నమ్మకమైన SMS డెలివరీతో ప్రపంచవ్యాప్తంగా ఉన్న కస్టమర్‌లను చేరుకోండి.",
        "subtext": "నాణ్యత • ఖర్చు • నిబంధనల పాటించటం"
      },
      {
        "title": "హై-స్పీడ్ డెలివరీ",
        "description": "ఆప్టిమైజ్ చేయబడిన అంతర్జాతీయ మార్గాల ద్వారా సందేశాలను వేగంగా పంపండి.",
        "subtext": "లైవ్ విశ్లేషణలు • 24/7 NOC పర్యవేక్షణ"
      },
      {
        "title": "సురక్షితమైన మెసేజింగ్",
        "description": "ఎంటర్‌ప్రైజ్ సెక్యూరిటీ ఆర్కిటెక్చర్‌తో వ్యాపార కమ్యూనికేషన్‌లను రక్షించండి.",
        "subtext": "నాణ్యత • ఖర్చు • నిబంధనల పాటించటం"
      },
      {
        "title": "శక్తివంతమైన SMS API",
        "description": "సౌకర్యవంతమైన మరియు ఆధునిక REST APIలతో మీ అప్లికేషన్‌లను సులభంగా కనెక్ట్ చేయండి.",
        "subtext": "లైవ్ విశ్లేషణలు • 24/7 NOC పర్యవేక్షణ"
      }
    ],
    "ctaBadge": "మీ మెసేజింగ్ నెట్‌వర్క్‌ను నిర్మిద్దాం",
    "ctaTitle": "బిజినెస్ SMS సొల్యూషన్స్‌తో మీ వ్యాపారాన్ని విస్తరించండి",
    "ctaSubtitle": "ఇంటెలిజెంట్ రూటింగ్ మరియు హోల్‌సేల్ SMS నుండి RCS మరియు OTP ధృవీకరణ వరకు, iNet Global స్కేలబుల్ టెలికాంను అందిస్తుంది.",
    "floatingBadges": {
      "wholesale": {
        "title": "హోల్‌సేల్ SMS",
        "desc": "అధిక వాల్యూమ్ బల్క్ మెసేజింగ్"
      },
      "rcs": {
        "title": "RCS బిజినెస్ మెసేజింగ్",
        "desc": "రిచ్ ఇంటరాక్టివ్ సందేశాలు"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "తక్షణ ధృవీకరణ కోడ్ డెలివరీ"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global బృందం",
      "status": "ధృవీకరించబడిన పంపినవారు",
      "msg1": "పోర్టల్ లాగిన్ కోసం మీ ధృవీకరణ కోడ్: 849201",
      "time1": "10:24 AM",
      "msg2": "కోడ్ అందింది, ధన్యవాదాలు!",
      "time2": "10:25 AM",
      "inputPlaceholder": "సందేశాన్ని టైప్ చేయండి..."
    }
  },
  "mr": {
    "heroBadge": "मेसेजिंग सेवा",
    "heroTitle": "विश्वासार्ह एसएमएस संवादासह त्वरित कनेक्ट व्हा",
    "heroDesc": "बिझनेस एसएमएस सोल्यूशन्स ग्राहक, कर्मचारी आणि भागीदारांशी संवाद साधण्याचा सर्वात जलद आणि प्रभावी मार्ग प्रदान करतात.",
    "getStarted": "सुरू करा",
    "contactUs": "आमच्याशी संपर्क साधा",
    "coreServiceBadge": "आमची मुख्य सेवा",
    "coreServiceTitle": "प्रत्येक उद्योगासाठी तयार केलेले एसएमएस सोल्यूशन्स",
    "coreServiceSubtitle": "उच्च उपलब्धता व्हॉइस, मेसेजिंग आणि व्हर्च्युअल नंबरसाठी तयार केलेली मॉड्यूलर टेलिकॉम पायाभूत सुविधा.",
    "services": {
      "wholesaleSms": {
        "title": "घाऊक (Wholesale) एसएमएस",
        "description": "डिलिव्हरी गती, कव्हरेज आणि किफायतशीर खर्चासाठी ऑप्टिमाइझ केलेली उच्च क्षमतेची एसएमएस टर्मिनेशन सेवा.",
        "bullet1": "उच्च डिलिव्हरी हमी",
        "bullet2": "लवचिक राउटिंग पर्याय",
        "bullet3": "जागतिक नेटवर्क कव्हरेज",
        "learnMore": "अधिक जाणून घ्या"
      },
      "rcsMessaging": {
        "title": "आरसीएस बिझनेस मेसेजिंग",
        "description": "महत्त्वाचे ट्रान्झॅक्शनल एसएमएस, ओटीपी आणि समृद्ध मीडिया व्यवसाय संदेश जगभरातील हँडसेटवर थेट वितरित करा.",
        "bullet1": "रिच मीडिया आणि संवादी कार्डे",
        "bullet2": "प्रमाणित प्रेषक ब्रँडिंग",
        "bullet3": "एका क्लिकवर जलद कृती बटणे",
        "learnMore": "अधिक जाणून घ्या"
      },
      "otpSms": {
        "title": "ओटीपी एसएमएस (पडताळणी कोड)",
        "description": "अतिजलद वेळेवर पडताळणी कोड आणि द्वि-स्तरीय प्रमाणीकरण एसएमएस काही सेकंदात जगभरात वितरित केले जातात.",
        "bullet1": "एका सेकंदापेक्षा कमी डिलिव्हरी गती",
        "bullet2": "थेट ऑपरेटर जोडणी",
        "bullet3": "उच्च रूपांतरण दर",
        "learnMore": "अधिक जाणून घ्या"
      }
    },
    "whyChooseBadge": "आमचे INET SMS सोल्यूशन का निवडावे",
    "whyChooseTitle": "आमचे एसएमएस सोल्यूशन्स का निवडावेत",
    "whyChooseSubtitle": "स्पष्ट कनेक्शन, लवचिक राउटिंग आणि जागतिक बाजारपेठेत विश्वासार्ह मेसेजिंग कामगिरीसाठी डिझाइन केलेले.",
    "whyCards": {
      "secure": {
        "title": "सुरक्षित आणि विश्वासार्ह संवाद",
        "description": "आमची पायाभूत सुविधा उच्च थ्रूपुट आणि कॅरियर-ग्रेड विश्वासार्हतेसह सुरक्षित व्यवसाय मेसेजिंगला समर्थन देते."
      },
      "cloud": {
        "title": "क्लाउड-आधारित पायाभूत सुविधा",
        "description": "हार्डवेअर अडथळे दूर करून जास्तीत जास्त डिलिव्हरी दर देणाऱ्या स्केलेबल क्लाउड मेसेजिंग सोल्यूशन्सचा लाभ घ्या."
      },
      "api": {
        "title": "व्हॉइस आणि एसएमएस एपीआय एकत्रीकरण",
        "description": "विश्वासार्ह एपीआय प्रदाता म्हणून आम्ही वेबसाइट्स, मोबाईल ॲप्स आणि सीआरएममध्ये एसएमएस क्षमता जोडण्यास मदत करतो."
      },
      "connectivity": {
        "title": "ग्लोबल कॅरियर कनेक्टिव्हिटी",
        "description": "१९०+ देशांमधील थेट टियर-१ कॅरियर इंटरकनेक्ट अखंड आणि प्राधान्यीकृत डिलिव्हरी सुनिश्चित करतात."
      },
      "automated": {
        "title": "स्वयंचलित मेसेजिंग सेवा",
        "description": "स्वयंचलित सूचना, इव्हेंट-आधारित मोहिमा, भेटींच्या आठवणी आणि दुतर्फा चॅटद्वारे ग्राहक सहभाग वाढवा."
      }
    },
    "featuresBadge": "आमच्या एसएमएस सेवा काय देतात",
    "featuresTitle": "स्मार्ट एसएमएस संवादासाठी आवश्यक असलेले सर्व काही",
    "featuresSubtitle": "गती, सुरक्षितता आणि जागतिक पोहोच सह मोठ्या प्रमाणावर एसएमएस पाठवणे, व्यवस्थापित करणे आणि देखरेख करणे सोपे.",
    "features": [
      {
        "title": "रिअल-टाइम विश्लेषण",
        "description": "डिलिव्हरी स्थिती, कार्यप्रदर्शन आणि मेसेजिंग क्रियाकलाप त्वरित ट्रॅक करा.",
        "subtext": "थेट विश्लेषण • २४/७ एनओसी देखरेख"
      },
      {
        "title": "ग्लोबल एसएमएस मेसेजिंग",
        "description": "विश्वासार्ह एसएमएस डिलिव्हरीसह जगभरातील ग्राहकांपर्यंत पोहोचा.",
        "subtext": "गुणवत्ता • खर्च • नियम पूर्तता"
      },
      {
        "title": "हाय-स्पीड डिलिव्हरी",
        "description": "ऑप्टिमाइझ केलेल्या आंतरराष्ट्रीय मार्गांद्वारे संदेश जलद गतीने पाठवा.",
        "subtext": "थेट विश्लेषण • २४/७ एनओसी देखरेख"
      },
      {
        "title": "सुरक्षित मेसेजिंग",
        "description": "एंटरप्राइझ सुरक्षा प्रणालीसह व्यावसायिक संवाद सुरक्षित ठेवा.",
        "subtext": "गुणवत्ता • खर्च • नियम पूर्तता"
      },
      {
        "title": "शक्तिशाली एसएमएस एपीआय",
        "description": "लवचिक आणि आधुनिक REST API सह तुमचे ॲप्लिकेशन्स सहज कनेक्ट करा.",
        "subtext": "थेट विश्लेषण • २४/७ एनओसी देखरेख"
      }
    ],
    "ctaBadge": "चला तुमचे मेसेजिंग नेटवर्क तयार करूया",
    "ctaTitle": "बिझनेस एसएमएस सोल्यूशन्ससह तुमचा व्यवसाय वाढवा",
    "ctaSubtitle": "बुद्धिमान राउटिंग आणि घाऊक एसएमएस ते आरसीएस आणि ओटीपी पडताळणीपर्यंत, iNet Global स्केलेबल टेलिकॉम प्रदान करते.",
    "floatingBadges": {
      "wholesale": {
        "title": "घाऊक एसएमएस",
        "desc": "मोठ्या प्रमाणातील बल्क मेसेजिंग"
      },
      "rcs": {
        "title": "आरसीएस मेसेजिंग",
        "desc": "संवादी समृद्ध मीडिया संदेश"
      },
      "otp": {
        "title": "ओटीपी एसएमएस",
        "desc": "त्वरित सुरक्षा कोड वितरण"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global टीम",
      "status": "प्रमाणित प्रेषक",
      "msg1": "पोर्टल लॉगिनसाठी तुमचा पडताळणी कोड आहे: 849201",
      "time1": "10:24 AM",
      "msg2": "कोड मिळाला, वेळेवर डिलिव्हरीबद्दल धन्यवाद!",
      "time2": "10:25 AM",
      "inputPlaceholder": "संदेश टाईप करा..."
    }
  },
  "sw": {
    "heroBadge": "HUDUMA YA KUTUMA UJUMBE",
    "heroTitle": "Ungana Papo Hapo kwa Mawasiliano ya SMS ya Kuaminika",
    "heroDesc": "Suluhisho za SMS za Biashara hutoa njia ya haraka na yenye ufanisi zaidi ya kuwasiliana na wateja, wafanyakazi na washirika.",
    "getStarted": "Anza Sasa",
    "contactUs": "Wasiliana Nasi",
    "coreServiceBadge": "HUDUMA YETU YA MSINGI",
    "coreServiceTitle": "Suluhisho za SMS zilizoundwa kwa kila sekta",
    "coreServiceSubtitle": "Miundombinu thabiti ya mawasiliano ya simu iliyoundwa kwa sauti, ujumbe na nambari pepe za kiwango cha juu.",
    "services": {
      "wholesaleSms": {
        "title": "SMS za Jumla (Wholesale)",
        "description": "Usambazaji wa SMS wa uwezo wa juu wenye njia zilizoboreshwa kwa kasi, wigo mpana na gharama nafuu.",
        "bullet1": "Dhamana ya juu ya uwasilishaji",
        "bullet2": "Chaguo rahisi za njia za mawasiliano",
        "bullet3": "Ufikiaji mpana wa kimataifa",
        "learnMore": "Jifunze zaidi"
      },
      "rcsMessaging": {
        "title": "Ujumbe wa Biashara wa RCS",
        "description": "Tuma SMS muhimu za miamala, nambari za siri (OTP) na ujumbe shirikishi wenye picha na video moja kwa moja kwenye simu.",
        "bullet1": "Maudhui ya picha, video na kadi shirikishi",
        "bullet2": "Kitambulisho cha mtumaji kilichothibitishwa",
        "bullet3": "Vitufe vya majibu ya haraka ya papo hapo",
        "learnMore": "Jifunze zaidi"
      },
      "otpSms": {
        "title": "SMS za OTP (Nambari ya Uthibitishaji)",
        "description": "Nambari za uthibitishaji wa papo hapo na usalama wa hatua mbili (2FA) zinazowasilishwa kwa sekunde chache duniani kote.",
        "bullet1": "Kasi ya uwasilishaji chini ya sekunde moja",
        "bullet2": "Viunganishi vya moja kwa moja na mitandao ya simu",
        "bullet3": "Kiwango cha juu cha mafanikio ya kuingia",
        "learnMore": "Jifunze zaidi"
      }
    },
    "whyChooseBadge": "KWA NINI UCHAGUE SULUHU YA INET SMS",
    "whyChooseTitle": "Kwa Nini Uchague Suluhisho Zetu za SMS",
    "whyChooseSubtitle": "Imejengwa kwa miunganisho thabiti, upangaji bora wa njia na utendaji wa kuaminika katika masoko ya kimataifa.",
    "whyCards": {
      "secure": {
        "title": "Mawasiliano Salama na ya Kuaminika",
        "description": "Miundombinu yetu imeundwa kusaidia utumaji salama wa ujumbe wa kibiashara wenye uwezo mkubwa na viwango vya juu vya mtandao."
      },
      "cloud": {
        "title": "Miundombinu ya Wingu (Cloud)",
        "description": "Tumia suluhisho za wingu zinazoweza kukua na biashara yako bila vikwazo vya maunzi huku zikitoa uwasilishaji wa hali ya juu."
      },
      "api": {
        "title": "Muunganisho wa API ya Sauti na SMS",
        "description": "Kama mtoa huduma anayeaminika wa API, tunasaidia kuunganisha uwezo wa SMS kwenye tovuti, programu za simu na mifumo ya CRM."
      },
      "connectivity": {
        "title": "Muunganisho wa Kimataifa wa Mitandao",
        "description": "Viunganishi vya moja kwa moja vya Tier-1 katika zaidi ya nchi 190 vinahakikisha uwasilishaji wa kipaumbele bila kukatizwa."
      },
      "automated": {
        "title": "Huduma za Ujumbe wa Kiotomatiki",
        "description": "Boresha ushirikiano kupitia arifa za kiotomatiki, kampeni maalum, vikumbusho vya miadi na mazungumzo ya njia mbili."
      }
    },
    "featuresBadge": "KILE AMBACHO HUDUMA ZETU ZA SMS ZINATOA",
    "featuresTitle": "Kila Kitu Unachohitaji kwa Mawasiliano Bora ya SMS",
    "featuresSubtitle": "Miundombinu ya kuaminika inayosaidia biashara kutuma, kusimamia na kufuatilia SMS kwa kiwango kikubwa kwa kasi na usalama.",
    "features": [
      {
        "title": "Takwimu za Wakati Halisi",
        "description": "Fuatilia uwasilishaji, utendaji na shughuli za ujumbe mara moja mubashara.",
        "subtext": "Takwimu mubashara • Ufuatiliaji wa 24/7 NOC"
      },
      {
        "title": "Utumaji wa SMS Duniani Kote",
        "description": "Wafikie wateja kote ulimwenguni kwa uwasilishaji wa SMS unaotegemewa.",
        "subtext": "Ubora • Gharama nafuu • Uzingatiaji wa sheria"
      },
      {
        "title": "Uwasilishaji wa Kasi ya Juu",
        "description": "Tuma ujumbe haraka kupitia njia za kimataifa zilizoboreshwa.",
        "subtext": "Takwimu mubashara • Ufuatiliaji wa 24/7 NOC"
      },
      {
        "title": "Ujumbe Uliolindwa Salama",
        "description": "Linda mawasiliano ya kibiashara kwa mifumo ya usalama ya kiwango cha juu.",
        "subtext": "Ubora • Gharama nafuu • Uzingatiaji wa sheria"
      },
      {
        "title": "API Imara ya SMS",
        "description": "Unganisha programu zako kwa urahisi ukitumia API rahisi na za kisasa za SMS.",
        "subtext": "Takwimu mubashara • Ufuatiliaji wa 24/7 NOC"
      }
    ],
    "ctaBadge": "TUJENGE MTANDAO WAKO WA MAWASILIANO",
    "ctaTitle": "Kukuza Biashara Yako kwa Suluhisho za SMS za Biashara",
    "ctaSubtitle": "Kuanzia upangaji njia bora na usambazaji wa jumla hadi RCS na uthibitishaji wa OTP, iNet Global hutoa mawasiliano yanayokua nawe.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS za Jumla",
        "desc": "Ujumbe wa ujazo mkubwa"
      },
      "rcs": {
        "title": "Ujumbe wa RCS",
        "desc": "Maudhui shirikishi yenye picha na video"
      },
      "otp": {
        "title": "SMS za OTP",
        "desc": "Utoaji wa haraka wa nambari za uthibitisho"
      }
    },
    "chatScreen": {
      "contactName": "Timu ya iNet Global",
      "status": "Mtumaji Aliyeidhinishwa",
      "msg1": "Nambari yako ya uthibitishaji kuingia kwenye tovuti ni: 849201",
      "time1": "10:24 AM",
      "msg2": "Nimepokea, asanteni sana kwa huduma ya haraka!",
      "time2": "10:25 AM",
      "inputPlaceholder": "Andika ujumbe..."
    }
  },
  "sv": {
    "heroBadge": "MEDDELANDETJÄNST",
    "heroTitle": "Koppla Upp Direkt med Tillförlitlig Företags-SMS",
    "heroDesc": "Företags-SMS är ett av de snabbaste och mest effektiva sätten att kommunicera med kunder, medarbetare och internationella partners.",
    "getStarted": "Kom Igång",
    "contactUs": "Kontakta Oss",
    "coreServiceBadge": "VÅR KÄRNTJÄNST",
    "coreServiceTitle": "SMS-lösningar anpassade för varje bransch",
    "coreServiceSubtitle": "Modulär telekominfrastruktur konstruerad för hög tillgänglighet inom röst, meddelanden och virtuella nummer.",
    "services": {
      "wholesaleSms": {
        "title": "Wholesale SMS",
        "description": "Högkapacitets-SMS-terminering med rutter optimerade för leveranshastighet, global täckning och kostnadseffektivitet.",
        "bullet1": "Hög leveransgaranti",
        "bullet2": "Flexibla routingalternativ",
        "bullet3": "Omfattande global nätverkstäckning",
        "learnMore": "Läs mer"
      },
      "rcsMessaging": {
        "title": "RCS Business Messaging",
        "description": "Leverera kritiska transaktions-SMS, OTP-koder och rika interaktiva företagsmeddelanden direkt till mobila enheter i hela världen.",
        "bullet1": "Rich media & interaktiva handlingskort",
        "bullet2": "Verifierad avsändaridentitet med varumärke",
        "bullet3": "Snabbsvarsknappar med ett klick",
        "learnMore": "Läs mer"
      },
      "otpSms": {
        "title": "OTP SMS (Engångskoder)",
        "description": "Blixtsnabba tidskritiska verifieringskoder och tvåfaktorsautentisering levererade på sekunder globalt.",
        "bullet1": "Sub-sekunds leveranshastighet",
        "bullet2": "Direkta operatörsförbindelser",
        "bullet3": "Höga konverteringsgrader vid inloggning",
        "learnMore": "Läs mer"
      }
    },
    "whyChooseBadge": "VARFÖR VÄLJA INET SMS",
    "whyChooseTitle": "Varför Välja Våra SMS-lösningar",
    "whyChooseSubtitle": "Byggt för kristallklara förbindelser, flexibel routing och tillförlitlig meddelandeprestanda på globala marknader.",
    "whyCards": {
      "secure": {
        "title": "Säker och Tillförlitlig Kommunikation",
        "description": "Vår infrastruktur stöder säker företagsmeddelandehantering med hög kapacitet och tillförlitlighet av operatörsklass."
      },
      "cloud": {
        "title": "Molnbaserad Infrastruktur",
        "description": "Dra nytta av skalbara molnlösningar som eliminerar hårdvaruflaskhalsar och ger maximala leveransnivåer."
      },
      "api": {
        "title": "Röst- och SMS-API-integration",
        "description": "Som en pålitlig API-leverantör integrerar vi SMS i webbplatser, mobilappar och CRM-system sömlöst."
      },
      "connectivity": {
        "title": "Global Operatörsanslutning",
        "description": "Direkta Tier-1-sammankopplingar i över 190 länder garanterar oavbruten och prioriterad meddelandeleverans."
      },
      "automated": {
        "title": "Automatiserade Meddelandetjänster",
        "description": "Öka engagemanget genom automatiska aviseringar, händelsebaserade utskick, påminnelser och tvåvägskommunikation."
      }
    },
    "featuresBadge": "VAD VÅRA SMS-TJÄNSTER ERBJUDER",
    "featuresTitle": "Allt Du Behöver för Smartare SMS-kommunikation",
    "featuresSubtitle": "Pålitlig infrastruktur för att skicka, hantera och övervaka SMS i stor skala med hastighet, säkerhet och räckvidd.",
    "features": [
      {
        "title": "Realtidsanalys",
        "description": "Följ leveransstatus, prestanda och meddelandevolymer direkt i realtid.",
        "subtext": "Live-mätvärden • 24/7 NOC-övervakning"
      },
      {
        "title": "Global SMS-distribution",
        "description": "Nå kunder över hela världen med tillförlitlig och säker SMS-leverans.",
        "subtext": "Kvalitet • Kostnad • Efterlevnad"
      },
      {
        "title": "Höghastighetsleverans",
        "description": "Skicka meddelanden blixtsnabbt via optimerade internationella rutter.",
        "subtext": "Live-mätvärden • 24/7 NOC-övervakning"
      },
      {
        "title": "Säker Dataöverföring",
        "description": "Skydda känslig företagskommunikation med modern krypteringsarkitektur.",
        "subtext": "Kvalitet • Kostnad • Efterlevnad"
      },
      {
        "title": "Kraftfullt SMS-API",
        "description": "Koppla ihop dina affärsapplikationer med flexibla och moderna REST-API:er.",
        "subtext": "Live-mätvärden • 24/7 NOC-övervakning"
      }
    ],
    "ctaBadge": "LÅT OSS BYGGA ERT MEDDELANDENÄTVERK",
    "ctaTitle": "Utveckla Verksamheten med Företags-SMS-lösningar",
    "ctaSubtitle": "Från intelligent routing och grossistterminering till RCS och OTP-säkerhet erbjuder iNet Global skalbar telekom.",
    "floatingBadges": {
      "wholesale": {
        "title": "Wholesale SMS",
        "desc": "Massmeddelanden i hög volym"
      },
      "rcs": {
        "title": "RCS Meddelanden",
        "desc": "Rikt interaktivt innehåll"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Omedelbara säkerhetskoder"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global Team",
      "status": "Verifierad Avsändare",
      "msg1": "Här är din verifieringskod för inloggning på portalen: 849201",
      "time1": "10:24",
      "msg2": "Koden mottagen, tack för snabb leverans!",
      "time2": "10:25",
      "inputPlaceholder": "Skriv ett meddelande..."
    }
  },
  "el": {
    "heroBadge": "ΥΠΗΡΕΣΙΑ ΜΗΝΥΜΑΤΩΝ",
    "heroTitle": "Συνδεθείτε Άμεσα με Αξιόπιστη Επικοινωνία SMS",
    "heroDesc": "Οι λύσεις Business SMS προσφέρουν έναν από τους ταχύτερους και πιο αποτελεσματικούς τρόπους επικοινωνίας με πελάτες, προσωπικό και συνεργάτες.",
    "getStarted": "Ξεκινήστε Τώρα",
    "contactUs": "Επικοινωνήστε Μαζί Μας",
    "coreServiceBadge": "Η ΒΑΣΙΚΗ ΜΑΣ ΥΠΗΡΕΣΙΑ",
    "coreServiceTitle": "Λύσεις SMS σχεδιασμένες για κάθε κλάδο",
    "coreServiceSubtitle": "Αρθρωτή τηλεπικοινωνιακή υποδομή υψηλής διαθεσιμότητας για φωνή, μηνύματα και εικονικούς αριθμούς.",
    "services": {
      "wholesaleSms": {
        "title": "Χονδρική SMS (Wholesale)",
        "description": "Τερματισμός SMS υψηλής χωρητικότητας με δρομολόγηση βελτιστοποιημένη για ταχύτητα παράδοσης, κάλυψη και οικονομική απόδοση.",
        "bullet1": "Υψηλή εγγύηση παράδοσης",
        "bullet2": "Ευέλικτες επιλογές διαδρομών",
        "bullet3": "Παγκόσμια κάλυψη δικτύων",
        "learnMore": "Μάθετε περισσότερα"
      },
      "rcsMessaging": {
        "title": "Επιχειρηματικά Μηνύματα RCS",
        "description": "Παράδοση κρίσιμων συναλλακτικών SMS, κωδικών OTP και διαδραστικών μηνυμάτων πολυμέσων απευθείας σε συσκευές παγκοσμίως.",
        "bullet1": "Πλούσια πολυμέσα & διαδραστικές κάρτες",
        "bullet2": "Επαληθευμένη ταυτότητα αποστολέα",
        "bullet3": "Κουμπιά γρήγορων ενεργειών με 1 πάτημα",
        "learnMore": "Μάθετε περισσότερα"
      },
      "otpSms": {
        "title": "SMS OTP (Κωδικοί Επαλήθευσης)",
        "description": "Ταχύτατοι κωδικοί ασφαλείας και ταυτοποίηση δύο παραγόντων που παραδίδονται σε δευτερόλεπτα σε όλο τον κόσμο.",
        "bullet1": "Χρόνος παράδοσης κάτω του δευτερολέπτου",
        "bullet2": "Απευθείας συνδέσεις με παρόχους",
        "bullet3": "Υψηλά ποσοστά επιτυχούς σύνδεσης",
        "learnMore": "Μάθετε περισσότερα"
      }
    },
    "whyChooseBadge": "ΓΙΑΤΙ ΝΑ ΕΠΙΛΕΞΕΤΕ ΤΗΝ INET SMS",
    "whyChooseTitle": "Γιατί να Επιλέξετε τις Λύσεις SMS μας",
    "whyChooseSubtitle": "Σχεδιασμένο για πεντακάθαρες συνδέσεις, ευέλικτη δρομολόγηση και σταθερή απόδοση μηνυμάτων στις διεθνείς αγορές.",
    "whyCards": {
      "secure": {
        "title": "Ασφαλής & Αξιόπιστη Επικοινωνία",
        "description": "Η υποδομή μας υποστηρίζει ασφαλή επιχειρηματικά μηνύματα υψηλής διεκπεραίωσης με αξιοπιστία επιπέδου τηλεπικοινωνιακού παρόχου."
      },
      "cloud": {
        "title": "Υποδομή Βασισμένη στο Cloud",
        "description": "Αξιοποιήστε κλιμακούμενες λύσεις cloud messaging που εξαλείφουν περιορισμούς υλικού και παρέχουν μέγιστα ποσοστά παράδοσης."
      },
      "api": {
        "title": "Ενσωμάτωση API Φωνής & SMS",
        "description": "Ως αξιόπιστος πάροχος API, ενσωματώνουμε δυνατότητες SMS σε ιστότοπους, εφαρμογές για κινητά και συστήματα CRM."
      },
      "connectivity": {
        "title": "Παγκόσμια Συνδεσιμότητα Παρόχων",
        "description": "Απευθείας διασυνδέσεις Tier-1 σε περισσότερες από 190 χώρες εξασφαλίζουν αδιάλειπτη και υψηλής προτεραιότητας παράδοση."
      },
      "automated": {
        "title": "Αυτοματοποιημένες Υπηρεσίες Μηνυμάτων",
        "description": "Βελτιώστε την αλληλεπίδραση με αυτόματες ειδοποιήσεις, καμπάνιες βάσει γεγονότων, υπενθυμίσεις και αμφίδρομες συνομιλίες."
      }
    },
    "featuresBadge": "ΤΙ ΠΡΟΣΦΕΡΟΥΝ ΟΙ ΥΠΗΡΕΣΙΕΣ SMS ΜΑΣ",
    "featuresTitle": "Όλα Όσα Χρειάζεστε για Εξυπνότερη Επικοινωνία SMS",
    "featuresSubtitle": "Αξιόπιστη υποδομή για μαζική αποστολή, διαχείριση και παρακολούθηση SMS σε μεγάλη κλίμακα με ταχύτητα και ασφάλεια.",
    "features": [
      {
        "title": "Αναλύσεις σε Πραγματικό Χρόνο",
        "description": "Παρακολουθήστε ζωντανά την κατάσταση παράδοσης, την απόδοση και την κίνηση των μηνυμάτων.",
        "subtext": "Ζωντανές μετρήσεις • 24/7 επίβλεψη NOC"
      },
      {
        "title": "Παγκόσμια Αποστολή SMS",
        "description": "Προσεγγίστε πελάτες σε οποιοδήποτε σημείο του πλανήτη με αποδεδειγμένη αξιοπιστία.",
        "subtext": "Ποιότητα • Κόστος • Συμμόρφωση"
      },
      {
        "title": "Παράδοση Υψηλής Ταχύτητας",
        "description": "Στείλτε μηνύματα αστραπιαία μέσω βελτιστοποιημένων διεθνών διαδρομών.",
        "subtext": "Ζωντανές μετρήσεις • 24/7 επίβλεψη NOC"
      },
      {
        "title": "Ασφαλής Μετάδοση Μηνυμάτων",
        "description": "Προστατεύστε τις επιχειρηματικές επικοινωνίες με σύγχρονη αρχιτεκτονική κρυπτογράφησης.",
        "subtext": "Ποιότητα • Κόστος • Συμμόρφωση"
      },
      {
        "title": "Ισχυρό REST API SMS",
        "description": "Συνδέστε εύκολα τις εφαρμογές σας με ευέλικτα και σύγχρονα API SMS.",
        "subtext": "Ζωντανές μετρήσεις • 24/7 επίβλεψη NOC"
      }
    ],
    "ctaBadge": "ΑΣ ΧΤΙΣΟΥΜΕ ΤΟ ΔΙΚΤΥΟ ΜΗΝΥΜΑΤΩΝ ΣΑΣ",
    "ctaTitle": "Αναπτύξτε την Επιχείρησή σας με Εταιρικές Λύσεις SMS",
    "ctaSubtitle": "Από έξυπνη δρομολόγηση και χονδρικό τερματισμό έως RCS και επαλήθευση OTP, η iNet Global παρέχει κλιμακούμενες τηλεπικοινωνίες.",
    "floatingBadges": {
      "wholesale": {
        "title": "Χονδρική SMS",
        "desc": "Μηνύματα πολύ μεγάλου όγκου"
      },
      "rcs": {
        "title": "Μηνύματα RCS",
        "desc": "Διαδραστικό πλούσιο περιεχόμενο"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Άμεση παράδοση κωδικών ασφαλείας"
      }
    },
    "chatScreen": {
      "contactName": "Ομάδα iNet Global",
      "status": "Επαληθευμένος Αποστολέας",
      "msg1": "Ο κωδικός επαλήθευσης για την είσοδο στην πύλη είναι: 849201",
      "time1": "10:24",
      "msg2": "Ο κωδικός ελήφθη, ευχαριστώ πολύ!",
      "time2": "10:25",
      "inputPlaceholder": "Πληκτρολογήστε ένα μήνυμα..."
    }
  },
  "cs": {
    "heroBadge": "SLUŽBA ZASÍLÁNÍ ZPRÁV",
    "heroTitle": "Okamžité Spojení Díky Spolehlivé Firemní SMS Komunikaci",
    "heroDesc": "Firemní SMS řešení představují jeden z nejrychlejších a nejúčinnějších způsobů komunikace se zákazníky, zaměstnanci a partnery.",
    "getStarted": "Začít Nyní",
    "contactUs": "Kontaktujte Nás",
    "coreServiceBadge": "NAŠE HLAVNÍ SLUŽBA",
    "coreServiceTitle": "SMS řešení navržená na míru každému odvětví",
    "coreServiceSubtitle": "Modulární telekomunikační infrastruktura pro vysokou dostupnost hlasu, zpráv a virtuálních čísel.",
    "services": {
      "wholesaleSms": {
        "title": "Velkoobchodní (Wholesale) SMS",
        "description": "Vysokokapacitní terminace SMS s možnostmi trasování optimalizovanými pro rychlost doručení, pokrytí a hospodárnost.",
        "bullet1": "Vysoká záruka doručitelnosti",
        "bullet2": "Flexibilní možnosti trasování",
        "bullet3": "Celosvětové síťové pokrytí",
        "learnMore": "Zjistit více"
      },
      "rcsMessaging": {
        "title": "Firemní Zprávy RCS",
        "description": "Doručujte kritické transakční SMS, OTP kódy a bohaté interaktivní firemní zprávy přímo na mobilní telefony po celém světě.",
        "bullet1": "Bohatá média a interaktivní karty",
        "bullet2": "Ověřená identita odesílatele",
        "bullet3": "Rychlé akční odpovědi jedním klepnutím",
        "learnMore": "Zjistit více"
      },
      "otpSms": {
        "title": "OTP SMS (Ověřovací Kódy)",
        "description": "Bleskurychlé časově kritické ověřovací kódy a dvoufaktorová autentizace doručované během několika sekund po celém světě.",
        "bullet1": "Doručení za méně než jednu sekundu",
        "bullet2": "Přímé propojení s mobilními operátory",
        "bullet3": "Vysoká míra konverze přihlášení",
        "learnMore": "Zjistit více"
      }
    },
    "whyChooseBadge": "PROČ ZVOLIT INET SMS ŘEŠENÍ",
    "whyChooseTitle": "Proč Zvolit Naše SMS Řešení",
    "whyChooseSubtitle": "Vybudováno pro čisté spojení, inteligentní směrování a spolehlivý výkon na mezinárodních trzích.",
    "whyCards": {
      "secure": {
        "title": "Bezpečná a Spolehlivá Komunikace",
        "description": "Naše infrastruktura podporuje bezpečné zasílání zpráv s vysokou propustností a spolehlivostí na úrovni operátora."
      },
      "cloud": {
        "title": "Cloudová Infrastruktura",
        "description": "Využijte škálovatelná cloudová řešení, která odstraňují hardwarová omezení a zajišťují maximální míru doručení."
      },
      "api": {
        "title": "Integrace Hlasových a SMS API",
        "description": "Jako prověřený poskytovatel komunikačních API pomáháme integrovat SMS do webů, mobilních aplikací a CRM systémů."
      },
      "connectivity": {
        "title": "Globální Konektivita Operátorů",
        "description": "Přímé propojky s Tier-1 operátory ve více než 190 zemích zajišťují nepřetržité a prioritní doručování."
      },
      "automated": {
        "title": "Automatizované Služby Zpráv",
        "description": "Zvyšte zapojení zákazníků pomocí automatických notifikací, událostních kampaní a obousměrných konverzací."
      }
    },
    "featuresBadge": "CO NABÍZEJÍ NAŠE SMS SLUŽBY",
    "featuresTitle": "Vše, Co Potřebujete pro Chytřejší SMS Komunikaci",
    "featuresSubtitle": "Spolehlivá infrastruktura pro odesílání, správu a monitorování SMS ve velkém měřítku s rychlostí a bezpečností.",
    "features": [
      {
        "title": "Analýzy v Reálném Čase",
        "description": "Sledujte stav doručení, výkonnost a objem zpráv okamžitě živě.",
        "subtext": "Živá data • 24/7 NOC dohled"
      },
      {
        "title": "Globální Distribuce SMS",
        "description": "Oslovte zákazníky kdekoli na světě se spolehlivým doručením zpráv.",
        "subtext": "Kvalita • Náklady • Shoda s předpisy"
      },
      {
        "title": "Vysokorychlostní Doručení",
        "description": "Odesílejte zprávy bleskově prostřednictvím optimalizovaných mezinárodních tras.",
        "subtext": "Živá data • 24/7 NOC dohled"
      },
      {
        "title": "Zabezpečený Přenos Zpráv",
        "description": "Chraňte firemní komunikaci pomocí špičkového šifrování a bezpečnostních protokolů.",
        "subtext": "Kvalita • Náklady • Shoda s předpisy"
      },
      {
        "title": "Výkonné SMS API",
        "description": "Snadno propojte své firemní aplikace pomocí moderních a flexibilních REST API.",
        "subtext": "Živá data • 24/7 NOC dohled"
      }
    ],
    "ctaBadge": "VYBUDUJME SPOLEČNĚ VAŠI SÍŤ ZPRÁV",
    "ctaTitle": "Rozvíjejte Své Podnikání s Firemními SMS Řešeními",
    "ctaSubtitle": "Od inteligentního směrování a velkoobchodního SMS provozu až po RCS a OTP ověřování nabízí iNet Global špičkový telekom.",
    "floatingBadges": {
      "wholesale": {
        "title": "Velkoobchodní SMS",
        "desc": "Zasílání zpráv ve vysokých objemech"
      },
      "rcs": {
        "title": "RCS Zprávy",
        "desc": "Bohatý interaktivní obsah"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Okamžité doručení bezpečnostních kódů"
      }
    },
    "chatScreen": {
      "contactName": "Tým iNet Global",
      "status": "Ověřený Odesílatel",
      "msg1": "Váš ověřovací kód pro přihlášení do klientského portálu je: 849201",
      "time1": "10:24",
      "msg2": "Kód dorazil v pořádku, děkuji!",
      "time2": "10:25",
      "inputPlaceholder": "Napište zprávu..."
    }
  },
  "ro": {
    "heroBadge": "SERVICIU DE MESAJE",
    "heroTitle": "Conectați-vă Instantaneu prin Comunicații SMS Fiabile",
    "heroDesc": "Soluțiile Business SMS oferă una dintre cele mai rapide și eficiente metode de comunicare cu clienții, angajații și partenerii.",
    "getStarted": "Începeți Acum",
    "contactUs": "Contactați-ne",
    "coreServiceBadge": "SERVICIUL NOSTRU PRINCIPAL",
    "coreServiceTitle": "Soluții SMS concepute pentru fiecare industrie",
    "coreServiceSubtitle": "Infrastructură telecom modulară proiectată pentru disponibilitate înaltă a vocii, mesajelor și numerelor virtuale.",
    "services": {
      "wholesaleSms": {
        "title": "SMS Wholesale (En-Gros)",
        "description": "Terminare SMS de mare capacitate cu rute optimizate pentru viteza de livrare, acoperire globală și costuri avantajoase.",
        "bullet1": "Garanție ridicată de livrare",
        "bullet2": "Opțiuni flexibile de rutare",
        "bullet3": "Acoperire globală a rețelei",
        "learnMore": "Aflați mai multe"
      },
      "rcsMessaging": {
        "title": "Mesagerie de Afaceri RCS",
        "description": "Livrați SMS-uri tranzacționale critice, coduri OTP și mesaje interactive bogate direct pe terminalele mobile din întreaga lume.",
        "bullet1": "Conținut multimedia și carduri interactive",
        "bullet2": "Branding cu expeditor verificat",
        "bullet3": "Butoane de acțiune rapidă cu o singură atingere",
        "learnMore": "Aflați mai multe"
      },
      "otpSms": {
        "title": "SMS OTP (Coduri de Verificare)",
        "description": "Coduri de verificare ultra-rapide și autentificare cu doi factori livrate în câteva secunde la nivel internațional.",
        "bullet1": "Viteză de livrare sub o secundă",
        "bullet2": "Conexiuni directe cu operatorii",
        "bullet3": "Rată ridicată de conversie a autentificării",
        "learnMore": "Aflați mai multe"
      }
    },
    "whyChooseBadge": "DE CE SĂ ALEGEȚI SOLUȚIA INET SMS",
    "whyChooseTitle": "De Ce să Alegeți Soluțiile Noastre SMS",
    "whyChooseSubtitle": "Construit pentru conexiuni stabile, rutare dinamică și performanță de încredere a mesajelor pe piețele internaționale.",
    "whyCards": {
      "secure": {
        "title": "Comunicare Sigură și Fiabilă",
        "description": "Infrastructura noastră suportă mesageria de afaceri securizată cu un debit ridicat și fiabilitate de nivel telecom."
      },
      "cloud": {
        "title": "Infrastructură Bazată pe Cloud",
        "description": "Profitați de soluțiile cloud scalabile care elimină limitările hardware și asigură rate optime de livrare."
      },
      "api": {
        "title": "Integrare API Voce și SMS",
        "description": "Furnizor de încredere de API-uri telecom pentru integrarea SMS-urilor în site-uri, aplicații mobile și CRM."
      },
      "connectivity": {
        "title": "Conectivitate Globală cu Operatorii",
        "description": "Interconectările directe Tier-1 în peste 190 de țări garantează livrarea neîntreruptă și prioritară."
      },
      "automated": {
        "title": "Servicii de Mesagerie Automatizate",
        "description": "Creșteți implicarea prin notificări automate, campanii pe bază de evenimente și conversații bidirecționale."
      }
    },
    "featuresBadge": "CE OFERĂ SERVICIILE NOASTRE SMS",
    "featuresTitle": "Tot ce Aveți Nevoie pentru o Comunicare SMS mai Inteligentă",
    "featuresSubtitle": "Infrastructură de încredere pentru trimiterea, gestionarea și monitorizarea SMS-urilor la scară largă cu viteză și securitate.",
    "features": [
      {
        "title": "Analize în Timp Real",
        "description": "Urmăriți starea livrării, performanța și volumele de mesaje instantaneu.",
        "subtext": "Date live • Monitorizare NOC 24/7"
      },
      {
        "title": "Expediere SMS Globală",
        "description": "Ajungeți la clienți din orice colț al lumii cu o livrare de încredere.",
        "subtext": "Calitate • Cost • Conformitate"
      },
      {
        "title": "Livrare de Mare Viteză",
        "description": "Trimiteți mesaje fulgerător prin rute internaționale optimizate.",
        "subtext": "Date live • Monitorizare NOC 24/7"
      },
      {
        "title": "Transmisie Securizată",
        "description": "Protejați comunicațiile confidențiale de afaceri prin protocoale moderne de criptare.",
        "subtext": "Calitate • Cost • Conformitate"
      },
      {
        "title": "API SMS Performant",
        "description": "Conectați-vă cu ușurință aplicațiile prin API-uri REST flexibile și intuitive.",
        "subtext": "Date live • Monitorizare NOC 24/7"
      }
    ],
    "ctaBadge": "SĂ VĂ CONSTRUIM REȚEAUA DE MESAJE",
    "ctaTitle": "Dezvoltați-vă Afacerea cu Soluții SMS Enterprise",
    "ctaSubtitle": "De la rutare inteligentă și terminare SMS wholesale până la RCS și verificare OTP, iNet Global asigură telecomunicații de vârf.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS Wholesale",
        "desc": "Mesaje la volume foarte mari"
      },
      "rcs": {
        "title": "Mesagerie RCS",
        "desc": "Conținut bogat și interactiv"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "Livrare imediată a codurilor de securitate"
      }
    },
    "chatScreen": {
      "contactName": "Echipa iNet Global",
      "status": "Expeditor Verificat",
      "msg1": "Codul dumneavoastră de verificare pentru acces în portal este: 849201",
      "time1": "10:24",
      "msg2": "Am primit codul rapid, vă mulțumesc!",
      "time2": "10:25",
      "inputPlaceholder": "Scrieți un mesaj..."
    }
  },
  "hu": {
    "heroBadge": "ÜZENETKÜLDŐ SZOLGÁLTATÁS",
    "heroTitle": "Lépjen Kapcsolatba Azonnal Megbízható Üzleti SMS-sel",
    "heroDesc": "Az üzleti SMS-megoldások a leggyorsabb és leghatékonyabb módot kínálják az ügyfelekkel, munkatársakkal és partnerekkel való kapcsolattartásra.",
    "getStarted": "Kezdés Most",
    "contactUs": "Kapcsolatfelvétel",
    "coreServiceBadge": "FŐ SZOLGÁLTATÁSUNK",
    "coreServiceTitle": "Minden iparágra szabott SMS-megoldások",
    "coreServiceSubtitle": "Moduláris telekommunikációs infrastruktúra a magas rendelkezésre állású hang, üzenetküldés és virtuális számok számára.",
    "services": {
      "wholesaleSms": {
        "title": "Nagykereskedelmi (Wholesale) SMS",
        "description": "Nagy kapacitású SMS-végződtetés a kézbesítési sebességre, lefedettségre és költséghatékonyságra optimalizált útvonalakkal.",
        "bullet1": "Magas kézbesítési garancia",
        "bullet2": "Rugalmas útválasztási lehetőségek",
        "bullet3": "Globális nemzetközi hálózati lefedettség",
        "learnMore": "Tudjon meg többet"
      },
      "rcsMessaging": {
        "title": "RCS Üzleti Üzenetküldés",
        "description": "Kritikus tranzakciós SMS-ek, OTP-kódok és gazdag interaktív üzleti üzenetek továbbítása közvetlenül a mobilokra világszerte.",
        "bullet1": "Gazdag média és interaktív kártyák",
        "bullet2": "Hitelesített feladói azonosító",
        "bullet3": "Egyetlen érintéssel elérhető gyorsműveletek",
        "learnMore": "Tudjon meg többet"
      },
      "otpSms": {
        "title": "OTP SMS (Hitelesítő Kódok)",
        "description": "Rendkívül gyors biztonsági ellenőrző kódok és kétlépcsős azonosítás másodpercek alatt kézbesítve globálisan.",
        "bullet1": "Egy másodperc alatti kézbesítés",
        "bullet2": "Közvetlen szolgáltatói kapcsolatok",
        "bullet3": "Magas bejelentkezési konverziós arány",
        "learnMore": "Tudjon meg többet"
      }
    },
    "whyChooseBadge": "MIÉRT AZ INET SMS MEGOLDÁS",
    "whyChooseTitle": "Miért Válassza a Mi SMS-megoldásainkat",
    "whyChooseSubtitle": "Tiszta kapcsolatokra, intelligens útválasztásra és megbízható nemzetközi teljesítményre tervezve.",
    "whyCards": {
      "secure": {
        "title": "Biztonságos és Megbízható Kommunikáció",
        "description": "Infrastruktúránk támogatja a biztonságos üzleti üzenetküldést nagy átviteli sebességgel és szolgáltatói szintű megbízhatósággal."
      },
      "cloud": {
        "title": "Felhőalapú Infrastruktúra",
        "description": "Használja ki a skálázható felhőmegoldásokat, amelyek megszüntetik a hardveres korlátokat és maximális kézbesítést biztosítanak."
      },
      "api": {
        "title": "Hang- és SMS API Integráció",
        "description": "Megbízható API-szolgáltatóként segítünk az SMS-képességek weboldalakba, mobilalkalmazásokba és CRM-ekbe történő beépítésében."
      },
      "connectivity": {
        "title": "Globális Szolgáltatói Kapcsolódás",
        "description": "A közvetlen Tier-1 kapcsolatok több mint 190 országban garantálják a megszakítás nélküli és prioritásos kézbesítést."
      },
      "automated": {
        "title": "Automatizált Üzenetküldő Szolgáltatások",
        "description": "Növelje az elköteleződést automatikus értesítésekkel, eseményvezérelt kampányokkal és kétirányú beszélgetésekkel."
      }
    },
    "featuresBadge": "MIT NYÚJTANAK SMS-SZOLGÁLTATÁSAINK",
    "featuresTitle": "Minden, Amire Szüksége Van az Okosabb SMS-kommunikációhoz",
    "featuresSubtitle": "Megbízható platform SMS-ek tömeges küldéséhez, kezeléséhez és valós idejű felügyeletéhez sebességgel és biztonsággal.",
    "features": [
      {
        "title": "Valós Idejű Elemzések",
        "description": "Kövesse nyomon a kézbesítési állapotot, a teljesítményt és a forgalmat azonnal élőben.",
        "subtext": "Élő mérőszámok • 24/7 NOC felügyelet"
      },
      {
        "title": "Globális SMS-küldés",
        "description": "Érje el ügyfeleit a világ bármely pontján garantáltan megbízható kézbesítéssel.",
        "subtext": "Minőség • Költség • Megfelelőség"
      },
      {
        "title": "Villámgyors Kézbesítés",
        "description": "Küldjön üzeneteket pillanatok alatt az optimalizált nemzetközi útvonalakon keresztül.",
        "subtext": "Élő mérőszámok • 24/7 NOC felügyelet"
      },
      {
        "title": "Biztonságos Adatátvitel",
        "description": "Védje a bizalmas vállalati kommunikációt fejlett biztonsági és titkosítási protokollokkal.",
        "subtext": "Minőség • Költség • Megfelelőség"
      },
      {
        "title": "Nagy Teljesítményű SMS API",
        "description": "Csatlakoztassa üzleti rendszereit könnyedén modern és rugalmas REST API-jaink segítségével.",
        "subtext": "Élő mérőszámok • 24/7 NOC felügyelet"
      }
    ],
    "ctaBadge": "ÉPÍTSÜK KI ÜZENETKÜLDŐ HÁLÓZATÁT",
    "ctaTitle": "Növelje Vállalkozását Vállalati SMS-megoldásokkal",
    "ctaSubtitle": "Az intelligens útválasztástól és a nagykereskedelmi SMS-től az RCS-ig és az OTP-hitelesítésig az iNet Global mindent biztosít.",
    "floatingBadges": {
      "wholesale": {
        "title": "Nagykereskedelmi SMS",
        "desc": "Nagy volumenű tömeges üzenetküldés"
      },
      "rcs": {
        "title": "RCS Üzenetek",
        "desc": "Gazdag interaktív tartalom"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Biztonsági kódok azonnali továbbítása"
      }
    },
    "chatScreen": {
      "contactName": "iNet Global Csapat",
      "status": "Hitelesített Feladó",
      "msg1": "Az Ön ellenőrző kódja a portálra történő belépéshez: 849201",
      "time1": "10:24",
      "msg2": "A kód megérkezett, köszönöm a gyors segítséget!",
      "time2": "10:25",
      "inputPlaceholder": "Írjon üzenetet..."
    }
  },
  "uk": {
    "heroBadge": "СЕРВІС ПОВІДОМЛЕНЬ",
    "heroTitle": "Миттєвий Зв'язок Завдяки Надійним Корпоративним SMS",
    "heroDesc": "Бізнес-SMS — один із найшвидших та найефективніших способів зв'язку з клієнтами, співробітниками та міжнародними партнерами.",
    "getStarted": "Почати Зараз",
    "contactUs": "Зв'яжіться з Нами",
    "coreServiceBadge": "НАША ОСНОВНА ПОСЛУГА",
    "coreServiceTitle": "SMS-рішення, створені для кожної галузі",
    "coreServiceSubtitle": "Модульна телеком-інфраструктура операторського рівня для високоякісного голосового зв'язку, повідомлень та віртуальних номерів.",
    "services": {
      "wholesaleSms": {
        "title": "Оптові (Wholesale) SMS",
        "description": "Високоємна термінація SMS з маршрутизацією, оптимізованою для швидкості доставки, покриття та вигідної вартості.",
        "bullet1": "Висока гарантія доставки",
        "bullet2": "Гнучкі варіанти маршрутизації",
        "bullet3": "Глобальне міжнародне покриття",
        "learnMore": "Дізнатися більше"
      },
      "rcsMessaging": {
        "title": "Бізнес-повідомлення RCS",
        "description": "Доставка транзакційних SMS, OTP та багатих інтерактивних повідомлень безпосередньо на мобільні телефони по всьому світу.",
        "bullet1": "Мультимедійні картки та кнопки дій",
        "bullet2": "Верифікований брендинг відправника",
        "bullet3": "Швидкі інтерактивні відповіді в 1 клік",
        "learnMore": "Дізнатися більше"
      },
      "otpSms": {
        "title": "OTP SMS (Одноразові Паролі)",
        "description": "Надшвидка доставка одноразових кодів перевірки та двофакторної автентифікації за лічені секунди по всьому світу.",
        "bullet1": "Швидкість доставки менше секунди",
        "bullet2": "Прямі підключення до операторів",
        "bullet3": "Висока конверсія успішних входів",
        "learnMore": "Дізнатися більше"
      }
    },
    "whyChooseBadge": "ЧОМУ ОБИРАЮТЬ INET SMS",
    "whyChooseTitle": "Чому Варто Обрати Наші SMS-рішення",
    "whyChooseSubtitle": "Створено для кришталево чистого зв'язку, гнучкої маршрутизації та стабільної продуктивності на міжнародних ринках.",
    "whyCards": {
      "secure": {
        "title": "Безпечний та Надійний Зв'язок",
        "description": "Наша інфраструктура підтримує безпечний обмін бізнес-повідомленнями з високою пропускною здатністю операторського рівня."
      },
      "cloud": {
        "title": "Хмарна Інфраструктура",
        "description": "Використовуйте масштабовані хмарні рішення, які усувають апаратні обмеження та забезпечують максимальну доставку."
      },
      "api": {
        "title": "Інтеграція API для Голосу та SMS",
        "description": "Як перевірений постачальник комунікаційних API, ми допомагаємо інтегрувати SMS у веб-сайти, мобільні додатки та CRM."
      },
      "connectivity": {
        "title": "Глобальна Підключеність до Операторів",
        "description": "Прямі з'єднання Tier-1 у понад 190 країнах гарантують безперебійну доставку з найвищим пріоритетом."
      },
      "automated": {
        "title": "Автоматизовані Сервіси Повідомлень",
        "description": "Підвищуйте залученість клієнтів за допомогою тригерних розсилок, нагадувань про події та двосторонніх діалогів."
      }
    },
    "featuresBadge": "ЩО ПРОПОНУЮТЬ НАШІ SMS-СЕРВІСИ",
    "featuresTitle": "Все, Що Потрібно для Розумної SMS-комунікації",
    "featuresSubtitle": "Надійна платформа для масової відправки, керування та моніторингу SMS з високою швидкістю та безпекою.",
    "features": [
      {
        "title": "Аналітика в Реальному Часі",
        "description": "Відстежуйте стан доставки, продуктивність і трафік повідомлень безпосередньо наживо.",
        "subtext": "Живі показники • Цілодобовий NOC 24/7"
      },
      {
        "title": "Глобальне Розсилання SMS",
        "description": "Охоплюйте клієнтів у будь-якій точці світу з гарантованою надійністю.",
        "subtext": "Якість • Вартість • Відповідність нормам"
      },
      {
        "title": "Надшвидка Доставка",
        "description": "Надсилайте повідомлення за долі секунди через оптимізовані міжнародні маршрути.",
        "subtext": "Живі показники • Цілодобовий NOC 24/7"
      },
      {
        "title": "Захищена Передача Повідомлень",
        "description": "Захищайте ділове листування за допомогою сучасних стандартів шифрування.",
        "subtext": "Якість • Вартість • Відповідність нормам"
      },
      {
        "title": "Потужний REST API для SMS",
        "description": "Легко інтегруйте власні додатки за допомогою сучасних і гнучких інтерфейсів API.",
        "subtext": "Живі показники • Цілодобовий NOC 24/7"
      }
    ],
    "ctaBadge": "ПОБУДУЙМО ВАШУ МЕРЕЖУ ПОВІДОМЛЕНЬ",
    "ctaTitle": "Розвивайте Свій Бізнес з Корпоративними SMS-рішеннями",
    "ctaSubtitle": "Від розумної маршрутизації та оптової термінації до RCS та OTP-верифікації — iNet Global забезпечує стабільний масштабований зв'язок.",
    "floatingBadges": {
      "wholesale": {
        "title": "Оптові SMS",
        "desc": "Масові розсилки великих обсягів"
      },
      "rcs": {
        "title": "RCS Повідомлення",
        "desc": "Багатий інтерактивний медіавміст"
      },
      "otp": {
        "title": "OTP SMS",
        "desc": "Миттєві коди безпеки"
      }
    },
    "chatScreen": {
      "contactName": "Команда iNet Global",
      "status": "Верифікований Відправник",
      "msg1": "Ваш код підтвердження для входу в кабінет: 849201",
      "time1": "10:24",
      "msg2": "Код отримано вчасно, щиро дякую!",
      "time2": "10:25",
      "inputPlaceholder": "Введіть повідомлення..."
    }
  },
  "he": {
    "heroBadge": "שירות הודעות",
    "heroTitle": "התחברו מיידית עם תקשורת SMS אמינה ועוצמתית",
    "heroDesc": "פתרונות SMS עסקיים מספקים את אחת הדרכים המהירות והיעילות ביותר לתקשורת שוטפת עם לקוחות, עובדים ושותפים בינלאומיים.",
    "getStarted": "התחל עכשיו",
    "contactUs": "צור קשר",
    "coreServiceBadge": "שירות הליבה שלנו",
    "coreServiceTitle": "פתרונות SMS המותאמים לכל ענף ותעשייה",
    "coreServiceSubtitle": "תשתית טלקום מודולרית מתקדמת המיועדת לקול בזמינות גבוהה, הודעות טקסט ומספרים וירטואליים.",
    "services": {
      "wholesaleSms": {
        "title": "SMS בסיטונאות (Wholesale)",
        "description": "סיום הודעות SMS בקיבולת גבוהה עם נתיבי תעבורה המותאמים למהירות מסירה, כיסוי עולמי ועלות משתלמת.",
        "bullet1": "אחוז מסירה גבוה במיוחד",
        "bullet2": "אפשרויות ניתוב גמישות",
        "bullet3": "כיסוי רשת בינלאומי מלא",
        "learnMore": "למידע נוסף"
      },
      "rcsMessaging": {
        "title": "הודעות עסקיות RCS",
        "description": "משלוח הודעות SMS קריטיות, קודי אימות והודעות מדיה עשירות ואינטראקטיביות ישירות למכשירי קצה ברחבי העולם.",
        "bullet1": "מדיה עשירה וכרטיסיות אינטראקטיביות",
        "bullet2": "מיתוג שולח מאומת ומאובטח",
        "bullet3": "כפתורי תגובה מהירה בלחיצה אחת",
        "learnMore": "למידע נוסף"
      },
      "otpSms": {
        "title": "SMS OTP (קודי אימות חד-פעמיים)",
        "description": "קודי אימות מהירים במיוחד ואימות דו-שלבי הנמסרים תוך שניות בודדות לכל יעד בעולם.",
        "bullet1": "מהירות מסירה של פחות משנייה",
        "bullet2": "חיבור ישיר לספקי תקשורת",
        "bullet3": "אחוזי המרה גבוהים בהתחברות",
        "learnMore": "למידע נוסף"
      }
    },
    "whyChooseBadge": "למה לבחור בפתרונות INET SMS",
    "whyChooseTitle": "מדוע לבחור בפתרונות ה-SMS שלנו",
    "whyChooseSubtitle": "נבנה עבור חיבורים יציבים, ניתוב דינמי חכם וביצועי תקשורת ללא פשרות בשווקים בינלאומיים.",
    "whyCards": {
      "secure": {
        "title": "תקשורת מאובטחת ואמינה",
        "description": "התשתית שלנו תומכת בהודעות עסקיות מאובטחות עם תפוקה גדולה ואמינות בסטנדרט של ספקי תקשורת מובילים."
      },
      "cloud": {
        "title": "תשתית מבוססת ענן",
        "description": "פתרונות ענן מתקדמים המבטלים צווארי בקבוק בחומרה ומספקים אחוזי מסירה מקסימליים בכל קנה מידה."
      },
      "api": {
        "title": "אינטגרציית API לקול ו-SMS",
        "description": "כספק API תקשורת אמין, אנו מאפשרים הטמעה פשוטה של שליחת הודעות באתרי אינטרנט, אפליקציות ו-CRM."
      },
      "connectivity": {
        "title": "קישוריות בינלאומית למפעילים",
        "description": "חיבורים ישירים לספקי Tier-1 בלמעלה מ-190 מדינות מבטיחים מסירה רציפה בעדיפות עליונה."
      },
      "automated": {
        "title": "שירותי הודעות אוטומטיים",
        "description": "הגדילו את המעורבות באמצעות התראות אוטומטיות, קמפיינים מבוססי טריגרים ושיחות דו-כיווניות חכמות."
      }
    },
    "featuresBadge": "מה שירותי ה-SMS שלנו מעניקים",
    "featuresTitle": "כל מה שאתם צריכים לתקשורת SMS חכמה יותר",
    "featuresSubtitle": "תשתית אמינה המאפשרת לארגונים לשלוח, לנהל ולנטר הודעות SMS בהיקפים עצומים במהירות ובביטחון.",
    "features": [
      {
        "title": "ניתוח נתונים בזמן אמת",
        "description": "מעקב חי ומיידי אחר סטטוס המסירה, ביצועי הרשת ונפח ההודעות.",
        "subtext": "מדדים חיים • מוקד NOC 24/7"
      },
      {
        "title": "הפצת SMS עולמית",
        "description": "הגיעו ללקוחות בכל מקום בעולם עם מסירה אמינה ואיכותית.",
        "subtext": "איכות • עלות • תאימות רגולטורית"
      },
      {
        "title": "מסירה במהירות שיא",
        "description": "שליחת הודעות במהירות הבזק דרך נתיבים בינלאומיים מותאמים.",
        "subtext": "מדדים חיים • מוקד NOC 24/7"
      },
      {
        "title": "הודעות מוצפנות ומאובטחות",
        "description": "הגנה מלאה על תקשורת עסקית רגישה עם ארכיטקטורת אבטחה ברמה הגבוהה ביותר.",
        "subtext": "איכות • עלות • תאימות רגולטורית"
      },
      {
        "title": "REST API מתקדם ל-SMS",
        "description": "חיבור פשוט של מערכות הארגון באמצעות ממשקי API גמישים ומודרניים.",
        "subtext": "מדדים חיים • מוקד NOC 24/7"
      }
    ],
    "ctaBadge": "בואו נבנה את רשת ההודעות שלכם",
    "ctaTitle": "הרחיבו את העסק שלכם עם פתרונות SMS ארגוניים",
    "ctaSubtitle": "מניתוב חכם וסיום SMS בסיטונאות ועד RCS ואימות OTP, חברת iNet Global מספקת תקשורת מתקדמת ללא גבולות.",
    "floatingBadges": {
      "wholesale": {
        "title": "SMS בסיטונאות",
        "desc": "משלוח הודעות בנפחים גדולים"
      },
      "rcs": {
        "title": "הודעות RCS",
        "desc": "מדיה אינטראקטיבית עשירה"
      },
      "otp": {
        "title": "SMS OTP",
        "desc": "מסירה מיידית של קודי אבטחה"
      }
    },
    "chatScreen": {
      "contactName": "צוות iNet Global",
      "status": "שולח מאומת",
      "msg1": "קוד האימות שלך לכניסה לפורטל הוא: 849201",
      "time1": "10:24",
      "msg2": "הקוד התקבל בהצלחה, תודה רבה!",
      "time2": "10:25",
      "inputPlaceholder": "הקלד הודעה..."
    }
  }
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

export default getMessagingTranslations;

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
  "en": {
    "heroBadge": "VOICE SERVICE",
    "heroTitle": "Power Business Communication with Voice Solutions",
    "heroDesc": "Reliable, scalable voice solutions for clear communication, global connectivity, and growing businesses.",
    "getStarted": "Get Started",
    "contactUs": "Contact Us",
    "coreServiceBadge": "OUR CORE SERVICE",
    "coreServiceTitle": "Voice solutions built for every industry",
    "coreServiceSubtitle": "Modular telecom infrastructure engineered for high-availability voice, messaging, and virtual numbers.",
    "services": {
      "wholesale": {
        "title": "Wholesale Voice",
        "description": "International voice termination with route options designed around quality, coverage and cost.",
        "bullet1": "High-quality voice connections",
        "bullet2": "Flexible route options",
        "bullet3": "Global coverage",
        "learnMore": "Learn more"
      },
      "aiVoice": {
        "title": "Ai Voice",
        "description": "Deliver conversational AI voice agents, smart IVR, and automated speech interactions directly to handsets worldwide with high assurance.",
        "bullet1": "Conversational AI agents",
        "bullet2": "Smart voice IVR routing",
        "bullet3": "Global carrier termination",
        "learnMore": "Learn more"
      },
      "virtualNumbers": {
        "title": "Virtual Number (DID)",
        "description": "Unify Voice, SMS, WhatsApp, and Verification into a single developer-friendly REST API suite designed for instant deployment.",
        "bullet1": "Instant DID provisioning",
        "bullet2": "100+ countries coverage",
        "bullet3": "Two-way call & SMS support",
        "learnMore": "Learn more"
      }
    },
    "whyChooseBadge": "WHY OUR INET VOICE SOLUTION",
    "whyChooseTitle": "Why Choose Our Voice Solutions",
    "whyChooseSubtitle": "Built for clear connections, flexible routing, and reliable voice performance across global markets.",
    "whyCards": {
      "secure": {
        "title": "Secure and Reliable Communication",
        "description": "Our infrastructure is designed to support secure voice communication with high availability and enterprise-grade reliability."
      },
      "cloud": {
        "title": "Cloud-Based Infrastructure",
        "description": "Leverage flexible Cloud Voice Solutions that eliminate the need for expensive hardware while providing scalability, reliability, and cost efficiency."
      },
      "api": {
        "title": "Voice API Integration",
        "description": "As a trusted Voice API Provider, we help businesses integrate calling capabilities into websites, mobile apps, CRM systems, and customer service platforms."
      },
      "connectivity": {
        "title": "Global Voice Connectivity",
        "description": "Our Business Voice Solutions allow companies to connect with customers and teams across multiple countries with crystal-clear voice quality and reliable network performance."
      },
      "automated": {
        "title": "Automated Voice Services",
        "description": "Improve customer experiences through IVR systems, automated call routing, voice notifications, and appointment reminders."
      }
    },
    "howItWorksBadge": "HOW IT WORKS",
    "howItWorksTitle": "Connecting Every Call Through Intelligent Voice Routing",
    "howItWorksSubtitle": "Our global voice network connects businesses to reliable carrier routes and destinations, delivering clear, consistent communication at scale.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Business",
        "description": "Bring your SBC, PBX, contact center or communications application over secure SIP.",
        "subtext": "SIP credentials • IP authentication"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global Network",
        "description": "Intelligent routing engine selects the lowest latency and highest ASR/ACD carrier route.",
        "subtext": "SIP credentials • IP authentication"
      },
      "step3": {
        "step": "03",
        "title": "Global Carrier Routes",
        "description": "Direct Tier-1 carrier interconnects across 190+ countries with redundant failover paths.",
        "subtext": "SIP credentials • IP authentication"
      },
      "step4": {
        "step": "04",
        "title": "Customer",
        "description": "Crystal-clear voice quality delivered to end-user handsets, softphones, or PSTN destinations.",
        "subtext": "SIP credentials • IP authentication"
      }
    },
    "ctaBadge": "LET'S BUILD YOUR VOICE NETWORK",
    "ctaTitle": "Power Your Business With Reliable Voice Connectivity Worldwide",
    "ctaSubtitle": "Tell us where you need to connect, the traffic you carry and what delivery quality means to your business. Our messaging & voice team will help shape the right routing and integration plan.",
    "defaultLocations": [
      {
        "city": "London",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "es": {
    "heroBadge": "SERVICIO DE VOZ",
    "heroTitle": "Impulse la Comunicación Empresarial con Soluciones de Voz",
    "heroDesc": "Soluciones de voz confiables y escalables para una comunicación clara, conectividad global y negocios en crecimiento.",
    "getStarted": "Comenzar",
    "contactUs": "Contáctenos",
    "coreServiceBadge": "NUESTRO SERVICIO PRINCIPAL",
    "coreServiceTitle": "Soluciones de voz creadas para cada industria",
    "coreServiceSubtitle": "Infraestructura de telecomunicaciones modular diseñada para voz de alta disponibilidad, mensajería y números virtuales.",
    "services": {
      "wholesale": {
        "title": "Voz Mayorista",
        "description": "Terminación de voz internacional con opciones de ruta diseñadas para calidad, cobertura y costo.",
        "bullet1": "Conexiones de voz de alta calidad",
        "bullet2": "Opciones de ruta flexibles",
        "bullet3": "Cobertura global",
        "learnMore": "Saber más"
      },
      "aiVoice": {
        "title": "Voz con IA",
        "description": "Implemente agentes de voz con IA conversacional, IVR inteligente e interacciones de voz automatizadas a nivel mundial.",
        "bullet1": "Agentes de IA conversacionales",
        "bullet2": "Enrutamiento IVR inteligente",
        "bullet3": "Terminación con operadores globales",
        "learnMore": "Saber más"
      },
      "virtualNumbers": {
        "title": "Número Virtual (DID)",
        "description": "Unifique voz, SMS, WhatsApp y verificación en un paquete de API REST fácil de implementar.",
        "bullet1": "Aprovisionamiento instantáneo de DID",
        "bullet2": "Cobertura en más de 100 países",
        "bullet3": "Llamadas y SMS bidireccionales",
        "learnMore": "Saber más"
      }
    },
    "whyChooseBadge": "POR QUÉ NUESTRA SOLUCIÓN DE VOZ INET",
    "whyChooseTitle": "Por Qué Elegir Nuestras Soluciones de Voz",
    "whyChooseSubtitle": "Diseñado para conexiones claras, enrutamiento flexible y rendimiento de voz confiable en mercados globales.",
    "whyCards": {
      "secure": {
        "title": "Comunicación Segura y Confiable",
        "description": "Nuestra infraestructura está diseñada para soportar comunicación de voz segura con alta disponibilidad y nivel empresarial."
      },
      "cloud": {
        "title": "Infraestructura en la Nube",
        "description": "Aproveche soluciones de voz en la nube que eliminan la necesidad de hardware costoso con escalabilidad y confiabilidad."
      },
      "api": {
        "title": "Integración de API de Voz",
        "description": "Como proveedor confiable de API de voz, ayudamos a integrar capacidades de llamadas en sitios web, apps móviles y CRM."
      },
      "connectivity": {
        "title": "Conectividad Global de Voz",
        "description": "Nuestras soluciones permiten conectar con clientes y equipos en múltiples países con calidad nítida y alto rendimiento."
      },
      "automated": {
        "title": "Servicios de Voz Automatizados",
        "description": "Mejore las experiencias de los clientes con sistemas IVR, enrutamiento de llamadas automatizado y notificaciones de voz."
      }
    },
    "howItWorksBadge": "CÓMO FUNCIONA",
    "howItWorksTitle": "Conectando Cada Llamada a Través de Enrutamiento Inteligente",
    "howItWorksSubtitle": "Nuestra red de voz global conecta empresas con rutas de operadores confiables, brindando comunicación clara y uniforme a escala.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Empresa",
        "description": "Conecte su SBC, PBX, centro de contacto o aplicación de comunicaciones a través de SIP seguro.",
        "subtext": "Credenciales SIP • Autenticación IP"
      },
      "step2": {
        "step": "02",
        "title": "Red Global iNet",
        "description": "El motor de enrutamiento inteligente selecciona la ruta con menor latencia y mayor ASR/ACD.",
        "subtext": "Credenciales SIP • Autenticación IP"
      },
      "step3": {
        "step": "03",
        "title": "Rutas de Operadores Globales",
        "description": "Interconexiones directas Tier-1 en más de 190 países con rutas de respaldo redundantes.",
        "subtext": "Credenciales SIP • Autenticación IP"
      },
      "step4": {
        "step": "04",
        "title": "Cliente Final",
        "description": "Calidad de voz nítida entregada a teléfonos móviles, softphones o destinos PSTN.",
        "subtext": "Credenciales SIP • Autenticación IP"
      }
    },
    "ctaBadge": "CONSTRUYAMOS SU RED DE VOZ",
    "ctaTitle": "Impulse su Negocio con Conectividad de Voz Confiable en Todo el Mundo",
    "ctaSubtitle": "Díganos dónde necesita conectarse, el tráfico que maneja y lo que la calidad significa para su negocio. Nuestro equipo diseñará el plan ideal.",
    "defaultLocations": [
      {
        "city": "Londres",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapur",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "Nueva York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubái",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "zh": {
    "heroBadge": "语音服务",
    "heroTitle": "通过专业语音解决方案赋能企业通信",
    "heroDesc": "可靠且具高扩展性的语音解决方案，助力实现清晰通话、全球互联及业务快速增长。",
    "getStarted": "立即开始",
    "contactUs": "联系我们",
    "coreServiceBadge": "核心业务",
    "coreServiceTitle": "专为各行各业量身打造的语音解决方案",
    "coreServiceSubtitle": "面向高可用语音、短信和虚拟号码的高性能电信级基础设施。",
    "services": {
      "wholesale": {
        "title": "批发语音 (Wholesale)",
        "description": "国际语音落地服务，在通话品质、全球覆盖和成本效益之间达到完美平衡。",
        "bullet1": "卓越高清通话品质",
        "bullet2": "灵活多样的路由选择",
        "bullet3": "全球广泛网络覆盖",
        "learnMore": "了解更多"
      },
      "aiVoice": {
        "title": "AI 智能语音",
        "description": "向全球终端提供交互式 AI 语音助理、智能 IVR 导航和自动化语音交互服务。",
        "bullet1": "拟人化交互式 AI 代理",
        "bullet2": "智能语音 IVR 动态路由",
        "bullet3": "全球一级运营商落地通道",
        "learnMore": "了解更多"
      },
      "virtualNumbers": {
        "title": "虚拟号码 (DID)",
        "description": "将语音、短信、WhatsApp 及身份验证统一整合至开发者友好的 REST API 套件中。",
        "bullet1": "全球 DID 号码即时开通",
        "bullet2": "覆盖全球 100+ 国家和地区",
        "bullet3": "支持双向通话与双向短信",
        "learnMore": "了解更多"
      }
    },
    "whyChooseBadge": "为什么选择 INET 语音方案",
    "whyChooseTitle": "为什么选择我们的企业语音解决方案",
    "whyChooseSubtitle": "专为高品质通话连接、智能动态路由及跨全球市场的可靠网络性能而构建。",
    "whyCards": {
      "secure": {
        "title": "安全可靠的企业通信",
        "description": "我们的网络架构专为高可用性、电信级稳定性和高安全性语音通信而设计。"
      },
      "cloud": {
        "title": "云原生弹性基础设施",
        "description": "利用灵活的云语音解决方案，摆脱昂贵的硬件设备束缚，兼顾弹性扩展与成本效益。"
      },
      "api": {
        "title": "现代化语音 API 集成",
        "description": "作为受信赖的通信 API 服务商，助力企业轻松将通话能力嵌入网站、移动应用与 CRM 系统。"
      },
      "connectivity": {
        "title": "全球运营商直连网络",
        "description": "借助覆盖多国的企业级语音服务，让您以水晶般清晰的音质跨国连接客户与团队。"
      },
      "automated": {
        "title": "全自动智能化语音服务",
        "description": "通过智能 IVR、自动呼叫路由、语音通知及日程提醒，全方位优化客户体验。"
      }
    },
    "howItWorksBadge": "工作原理",
    "howItWorksTitle": "通过智能语音路由精准连接每一次通话",
    "howItWorksSubtitle": "我们的全球语音网络将企业连接到可靠的运营商优质路由与目的地，提供规模化的高清通信。",
    "steps": {
      "step1": {
        "step": "01",
        "title": "企业接入端",
        "description": "通过安全 SIP 中继连接您的 SBC、PBX、联络中心或通信业务应用。",
        "subtext": "SIP 鉴权 • IP 白名单认证"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global 核心网络",
        "description": "智能路由调度算法自动选取最低延迟及最高 ASR/ACD 的优质通道。",
        "subtext": "SIP 鉴权 • IP 白名单认证"
      },
      "step3": {
        "step": "03",
        "title": "全球运营商路由",
        "description": "直连全球 190+ 国家和地区的 Tier-1 运营商，具备冗余故障倒换保障。",
        "subtext": "SIP 鉴权 • IP 白名单认证"
      },
      "step4": {
        "step": "04",
        "title": "终端客户",
        "description": "将高清无损音质直接送达最终用户手机、软电话客户端或 PSTN 目的地。",
        "subtext": "SIP 鉴权 • IP 白名单认证"
      }
    },
    "ctaBadge": "立即构建您的全球语音网络",
    "ctaTitle": "借助可靠的全球语音连接赋能您的业务",
    "ctaSubtitle": "告诉我们您的业务需求、预计话务量及品质要求，我们的语音与技术团队将为您量身定制路由方案。",
    "defaultLocations": [
      {
        "city": "伦敦",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "新加坡",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "纽约",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "迪拜",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "hi": {
    "heroBadge": "वॉइस सेवा",
    "heroTitle": "वॉइस समाधानों के साथ व्यावसायिक संचार को सशक्त बनाएं",
    "heroDesc": "स्पष्ट संचार, वैश्विक कनेक्टिविटी और बढ़ते व्यवसायों के लिए विश्वसनीय, स्केलेबल वॉइस समाधान।",
    "getStarted": "शुरू करें",
    "contactUs": "संपर्क करें",
    "coreServiceBadge": "हमारी मुख्य सेवा",
    "coreServiceTitle": "हर उद्योग के लिए निर्मित वॉइस समाधान",
    "coreServiceSubtitle": "उच्च उपलब्धता वाली वॉइस, मैसेजिंग और वर्चुअल नंबरों के लिए मॉड्यूलर टेलीकॉम इन्फ्रास्ट्रक्चर।",
    "services": {
      "wholesale": {
        "title": "होलसेल वॉइस",
        "description": "गुणवत्ता, कवरेज और लागत दक्षता के लिए अनुकूलित अंतरराष्ट्रीय वॉइस टर्मिनेशन सेवा।",
        "bullet1": "उच्च गुणवत्ता वाले वॉइस कनेक्शन",
        "bullet2": "लचीले रूटिंग विकल्प",
        "bullet3": "वैश्विक कवरेज",
        "learnMore": "और जानें"
      },
      "aiVoice": {
        "title": "एआई वॉइस",
        "description": "संवादात्मक एआई वॉइस एजेंट, स्मार्ट आईवीआर और स्वचालित वॉइस इंटरैक्शन दुनिया भर में वितरित करें।",
        "bullet1": "संवादात्मक एआई वॉइस एजेंट्स",
        "bullet2": "स्मार्ट वॉइस आईवीआर रूटिंग",
        "bullet3": "ग्लोबल कैरियर टर्मिनेशन",
        "learnMore": "और जानें"
      },
      "virtualNumbers": {
        "title": "वर्चुअल नंबर (DID)",
        "description": "वॉइस, एसएमएस, व्हाट्सएप और सत्यापन को एक डेवलपर-अनुकूल रेस्ट एपीआई में एकीकृत करें।",
        "bullet1": "त्वरित डीआईडी प्रावधान",
        "bullet2": "100+ देशों में कवरेज",
        "bullet3": "टू-वे कॉल और एसएमएस सपोर्ट",
        "learnMore": "और जानें"
      }
    },
    "whyChooseBadge": "हमारा INET वॉइस समाधान क्यों चुनें",
    "whyChooseTitle": "हमारे वॉइस समाधान क्यों चुनें",
    "whyChooseSubtitle": "स्पष्ट कनेक्शन, लचीले रूटिंग और वैश्विक बाजारों में विश्वसनीय वॉइस प्रदर्शन के लिए निर्मित।",
    "whyCards": {
      "secure": {
        "title": "सुरक्षित और विश्वसनीय संचार",
        "description": "हमारा इन्फ्रास्ट्रक्चर उच्च उपलब्धता और एंटरप्राइज-ग्रेड विश्वसनीयता के साथ सुरक्षित संचार का समर्थन करता है।"
      },
      "cloud": {
        "title": "क्लाउड-आधारित इन्फ्रास्ट्रक्चर",
        "description": "लचीले क्लाउड वॉइस समाधानों का लाभ उठाएं जो महंगे हार्डवेयर की आवश्यकता को समाप्त करते हैं।"
      },
      "api": {
        "title": "वॉइस API एकीकरण",
        "description": "एक विश्वसनीय वॉइस API प्रदाता के रूप में, हम वेबसाइटों, ऐप्स और सीआरएम में कॉलिंग सुविधाओं को जोड़ते हैं।"
      },
      "connectivity": {
        "title": "वैश्विक वॉइस कनेक्टिविटी",
        "description": "क्रिस्टल-क्लियर आवाज गुणवत्ता के साथ कई देशों में ग्राहकों और टीमों से आसानी से जुड़ें।"
      },
      "automated": {
        "title": "स्वचालित वॉइस सेवाएं",
        "description": "आईवीआर सिस्टम, स्वचालित कॉल रूटिंग और वॉइस सूचनाओं के माध्यम से ग्राहक अनुभव को बेहतर बनाएं।"
      }
    },
    "howItWorksBadge": "यह कैसे काम करता है",
    "howItWorksTitle": "इंटेलिजेंट वॉइस रूटिंग के माध्यम से हर कॉल को जोड़ना",
    "howItWorksSubtitle": "हमारा वैश्विक वॉइस नेटवर्क व्यवसायों को विश्वसनीय कैरियर मार्गों से जोड़ता है, जिससे स्पष्ट संचार मिलता है।",
    "steps": {
      "step1": {
        "step": "01",
        "title": "व्यवसाय",
        "description": "सुरक्षित एसआईपी (SIP) पर अपना एसबीसी, पीबीएक्स, संपर्क केंद्र या संचार एप्लिकेशन कनेक्ट करें।",
        "subtext": "SIP क्रेडेंशियल्स • आईपी प्रमाणीकरण"
      },
      "step2": {
        "step": "02",
        "title": "iNet ग्लोबल नेटवर्क",
        "description": "इंटेलिजेंट रूटिंग इंजन न्यूनतम विलंबता और उच्चतम गुणवत्ता वाले मार्ग का चयन करता है।",
        "subtext": "SIP क्रेडेंशियल्स • आईपी प्रमाणीकरण"
      },
      "step3": {
        "step": "03",
        "title": "वैश्विक कैरियर मार्ग",
        "description": "190+ देशों में सीधे टियर-1 कैरियर इंटरकनेक्ट रिडंडेंट पाथवे के साथ।",
        "subtext": "SIP क्रेडेंशियल्स • आईपी प्रमाणीकरण"
      },
      "step4": {
        "step": "04",
        "title": "ग्राहक",
        "description": "एंड-यूज़र हैंडसेट, सॉफ्टफ़ोन या पीएसटीएन गंतव्यों पर क्रिस्टल-क्लियर वॉइस गुणवत्ता।",
        "subtext": "SIP क्रेडेंशियल्स • आईपी प्रमाणीकरण"
      }
    },
    "ctaBadge": "आइए अपना वॉइस नेटवर्क बनाएं",
    "ctaTitle": "विश्व स्तर पर विश्वसनीय वॉइस कनेक्टिविटी के साथ अपने व्यवसाय को शक्ति दें",
    "ctaSubtitle": "हमें बताएं कि आपको कहाँ कनेक्ट करने की आवश्यकता है, आपका ट्रैफ़िक कितना है। हमारी टीम सही योजना तैयार करेगी।",
    "defaultLocations": [
      {
        "city": "लंदन",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "सिंगापुर",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "न्यूयॉर्क",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "दुबई",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "ar": {
    "heroBadge": "خدمة الصوت",
    "heroTitle": "عزز اتصالات الأعمال بحلول صوتية متقدمة",
    "heroDesc": "حلول صوتية موثوقة وقابلة للتوسع لتواصل فائق الوضوح وربط عالمي يلبي متطلبات الأعمال المتنامية.",
    "getStarted": "ابدأ الآن",
    "contactUs": "اتصل بنا",
    "coreServiceBadge": "خدمتنا الأساسية",
    "coreServiceTitle": "حلول صوتية مصممة خصيصاً لكل قطاع",
    "coreServiceSubtitle": "بنية تحتية اتصالية معيارية مصممة للصوت عالي التوفر والرسائل والأرقام الافتراضية.",
    "services": {
      "wholesale": {
        "title": "الصوت بالجملة (Wholesale)",
        "description": "إنهاء المكالمات الدولية مع خيارات توجيه مصممة حول الجودة العالية والتغطية والتكلفة المدروسة.",
        "bullet1": "اتصالات صوتية عالية الجودة والنقاء",
        "bullet2": "خيارات توجيه مرنة ومتعددة",
        "bullet3": "تغطية عالمية واسعة النطاق",
        "learnMore": "اعرف المزيد"
      },
      "aiVoice": {
        "title": "الصوت بالذكاء الاصطناعي",
        "description": "نشر وكلاء صوت بالذكاء الاصطناعي التوليدي، رد آلي ذكي IVR، وتفاعلات صوتية مؤتمتة عالمياً.",
        "bullet1": "وكلاء ذكاء اصطناعي تفاعليون",
        "bullet2": "توجيه صوتي ذكي بأنظمة IVR",
        "bullet3": "إنهاء مكالمات عبر مشغلين عالميين",
        "learnMore": "اعرف المزيد"
      },
      "virtualNumbers": {
        "title": "الأرقام الافتراضية (DID)",
        "description": "توحيد الصوت، SMS، واتساب والتحقق في حزمة واجهات برمجة تطبيقات REST متكاملة للمطورين.",
        "bullet1": "توفير فوري لأرقام DID",
        "bullet2": "تغطية في أكثر من 100 دولة",
        "bullet3": "دعم المكالمات والرسائل ثنائية الاتجاه",
        "learnMore": "اعرف المزيد"
      }
    },
    "whyChooseBadge": "لماذا تختار حلول INET الصوتية",
    "whyChooseTitle": "لماذا تختار حلولنا الصوتية",
    "whyChooseSubtitle": "صُممت لتوفير اتصالات نقية وتوجيه ذكي وأداء صوتي موثوق عبر الأسواق العالمية.",
    "whyCards": {
      "secure": {
        "title": "اتصالات آمنة وموثوقة",
        "description": "صُممت بنيتنا التحتية لدعم الاتصالات الصوتية الآمنة مع توفر فائق وموثوقية بمعايير شركات الاتصالات."
      },
      "cloud": {
        "title": "بنية تحتية سحابية مرنة",
        "description": "استفد من حلول الصوت السحابية التي تلغي الحاجة إلى أجهزة باهظة الثمن مع ضمان التوسع والكفاءة."
      },
      "api": {
        "title": "تكامل واجهات برمجة الصوت API",
        "description": "بصفتنا مزوداً موثوقاً للـ API، نساعد على دمج ميزات الاتصال في المواقع والتطبيقات وCRM."
      },
      "connectivity": {
        "title": "اتصال صوتي عالمي شامل",
        "description": "تتيح حلولنا للشركات التواصل مع العملاء وفرق العمل في بلدان متعددة بجودة صوت فائقة النقاء."
      },
      "automated": {
        "title": "خدمات صوتية مؤتمتة",
        "description": "عزز تجارب العملاء من خلال أنظمة IVR، التوجيه الآلي للمكالمات، الإشعارات الصوتية والتذكيرات."
      }
    },
    "howItWorksBadge": "كيف يعمل النظام",
    "howItWorksTitle": "ربط كل مكالمة من خلال التوجيه الصوتي الذكي",
    "howItWorksSubtitle": "تربط شبكتنا الصوتية العالمية الشركات بمسارات مشغلين موثوقة ومحطات عالمية، لتوفير اتصالات نقية ومستمرة.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "بوابة الأعمال",
        "description": "اربط أجهزة SBC أو سنترال PBX أو مركز الاتصال أو التطبيقات عبر بروتوكول SIP الآمن.",
        "subtext": "بيانات اعتماد SIP • مصادقة IP"
      },
      "step2": {
        "step": "02",
        "title": "شبكة iNet العالمية",
        "description": "يحدد محرك التوجيه الذكي المسار الأقل تأخيراً والأعلى في مقاييس ASR/ACD.",
        "subtext": "بيانات اعتماد SIP • مصادقة IP"
      },
      "step3": {
        "step": "03",
        "title": "مسارات المشغلين العالمية",
        "description": "ربط مباشر مع مشغلي المستوى الأول Tier-1 في أكثر من 190 دولة مع مسارات احتياطية بديلة.",
        "subtext": "بيانات اعتماد SIP • مصادقة IP"
      },
      "step4": {
        "step": "04",
        "title": "المستخدم النهائي",
        "description": "جودة صوت نقية وفائقة الوضوح تصل مباشرة إلى هواتف المستخدمين أو وجهات PSTN.",
        "subtext": "بيانات اعتماد SIP • مصادقة IP"
      }
    },
    "ctaBadge": "دعنا نبني شبكتك الصوتية",
    "ctaTitle": "عزز أعمالك باتصال صوتي موثوق به حول العالم",
    "ctaSubtitle": "أخبرنا باحتياجات الربط وحجم الحركة ومستوى الجودة المطلوب. سيساعدك فريقنا في تصميم الخطة المثالية.",
    "defaultLocations": [
      {
        "city": "لندن",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "سنغافورة",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "نيويورك",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "دبي",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "fr": {
    "heroBadge": "SERVICE VOCAL",
    "heroTitle": "Propulsez Vos Communications grâce aux Solutions Vocales",
    "heroDesc": "Des solutions vocales fiables et évolutives pour une communication claire, une connectivité internationale et une croissance durable.",
    "getStarted": "Commencer",
    "contactUs": "Contactez-nous",
    "coreServiceBadge": "NOTRE SERVICE PRINCIPAL",
    "coreServiceTitle": "Des solutions vocales conçues pour chaque industrie",
    "coreServiceSubtitle": "Infrastructure télécom modulaire pour la voix haute disponibilité, la messagerie et les numéros virtuels.",
    "services": {
      "wholesale": {
        "title": "Voix de Gros (Wholesale)",
        "description": "Terminaison vocale internationale avec options de routage axées sur la qualité audio, la couverture et le coût.",
        "bullet1": "Connexions vocales haute définition",
        "bullet2": "Options de routage flexibles",
        "bullet3": "Couverture mondiale exhaustive",
        "learnMore": "En savoir plus"
      },
      "aiVoice": {
        "title": "Voix IA (AI Voice)",
        "description": "Déployez des agents vocaux IA conversationnels, des SVI intelligents et des interactions automatisées à l'échelle mondiale.",
        "bullet1": "Agents IA conversationnels",
        "bullet2": "Routage SVI vocal intelligent",
        "bullet3": "Terminaison opérateurs mondiale",
        "learnMore": "En savoir plus"
      },
      "virtualNumbers": {
        "title": "Numéros Virtuels (DID)",
        "description": "Unifiez la Voix, les SMS, WhatsApp et la vérification dans une suite d'API REST moderne pensée pour les développeurs.",
        "bullet1": "Approvisionnement instantané de DID",
        "bullet2": "Couverture dans plus de 100 pays",
        "bullet3": "Support appels & SMS bidirectionnels",
        "learnMore": "En savoir plus"
      }
    },
    "whyChooseBadge": "POURQUOI CHOISIR INET VOICE",
    "whyChooseTitle": "Pourquoi Choisir Nos Solutions Vocales",
    "whyChooseSubtitle": "Conçu pour des liaisons limpides, un routage intelligent et des performances vocales stables sur tous les marchés mondiaux.",
    "whyCards": {
      "secure": {
        "title": "Communication Sécurisée et Fiable",
        "description": "Notre architecture prend en charge les communications vocales critiques avec une disponibilité élevée de classe opérateur."
      },
      "cloud": {
        "title": "Infrastructure Télécom Cloud",
        "description": "Bénéficiez de solutions voix cloud flexibles éliminant le matériel coûteux tout en offrant évolutivité et économies."
      },
      "api": {
        "title": "Intégration d'API Vocale",
        "description": "En tant que fournisseur d'API reconnu, nous intégrons les fonctions d'appel dans vos sites, applications et CRM."
      },
      "connectivity": {
        "title": "Connectivité Vocale Mondiale",
        "description": "Nos solutions permettent de joindre vos clients et équipes dans de nombreux pays avec une qualité audio cristalline."
      },
      "automated": {
        "title": "Services Vocaux Automatisés",
        "description": "Optimisez l'expérience client grâce aux SVI interactifs, au routage automatique d'appels et aux notifications vocales."
      }
    },
    "howItWorksBadge": "COMMENT ÇA MARCHE",
    "howItWorksTitle": "Connecter Chaque Appel Grâce au Routage Intelligent",
    "howItWorksSubtitle": "Notre réseau vocal mondial relie vos activités à des routes opérateurs de premier ordre, assurant des appels limpides à grande échelle.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Entreprise",
        "description": "Raccordez votre SBC, PBX, centre de contact ou application métier via un trunk SIP sécurisé.",
        "subtext": "Identifiants SIP • Authentification IP"
      },
      "step2": {
        "step": "02",
        "title": "Réseau Global iNet",
        "description": "Le moteur de routage dynamique choisit la route opérateur à la latence la plus faible et au meilleur ratio ASR/ACD.",
        "subtext": "Identifiants SIP • Authentification IP"
      },
      "step3": {
        "step": "03",
        "title": "Routes Opérateurs Mondiales",
        "description": "Interconnexions directes Tier-1 dans plus de 190 pays avec chemins de basculement redondants.",
        "subtext": "Identifiants SIP • Authentification IP"
      },
      "step4": {
        "step": "04",
        "title": "Client Final",
        "description": "Une qualité vocale HD irréprochable acheminée vers les combinés mobiles, softphones ou réseaux PSTN.",
        "subtext": "Identifiants SIP • Authentification IP"
      }
    },
    "ctaBadge": "CONSTRUISONS VOTRE RÉSEAU VOCAL",
    "ctaTitle": "Alimentez Votre Entreprise avec une Connectivité Vocale Mondiale et Fiable",
    "ctaSubtitle": "Indiquez-nous vos destinations cibles, vos volumes de trafic et vos exigences qualité. Notre équipe établira le plan de routage parfait.",
    "defaultLocations": [
      {
        "city": "Londres",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapour",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubaï",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "de": {
    "heroBadge": "SPRACHDIENST (VOICE)",
    "heroTitle": "Stärken Sie Ihre Geschäftskommunikation mit Voice-Lösungen",
    "heroDesc": "Zuverlässige, skalierbare Sprachlösungen für glasklare Verbindungen, globale Konnektivität und wachsende Unternehmen.",
    "getStarted": "Jetzt starten",
    "contactUs": "Kontaktieren Sie uns",
    "coreServiceBadge": "UNSER KERNANGEBOT",
    "coreServiceTitle": "Sprachlösungen maßgeschneidert für jede Branche",
    "coreServiceSubtitle": "Modulare Telekommunikationsinfrastruktur für hochverfügbare Sprach-, Nachrichten- und virtuelle Nummerndienste.",
    "services": {
      "wholesale": {
        "title": "Wholesale Voice",
        "description": "Internationale Sprachterminierung mit Routenoptionen abgestimmt auf maximale Audioqualität, Reichweite und Wirtschaftlichkeit.",
        "bullet1": "Kristallklare Sprachverbindungen",
        "bullet2": "Flexible Routing-Optionen",
        "bullet3": "Globale internationale Netzabdeckung",
        "learnMore": "Mehr erfahren"
      },
      "aiVoice": {
        "title": "KI-Sprachlösungen (AI Voice)",
        "description": "Bereitstellung dialogorientierter KI-Voice-Agenten, intelligenter Sprachmenüs (IVR) und automatisierter Interaktionen weltweit.",
        "bullet1": "Konversationelle KI-Agenten",
        "bullet2": "Intelligente IVR-Sprachsteuerung",
        "bullet3": "Terminierung über weltweite Netzbetreiber",
        "learnMore": "Mehr erfahren"
      },
      "virtualNumbers": {
        "title": "Virtuelle Nummern (DID)",
        "description": "Vereinen Sie Sprache, SMS, WhatsApp und Identitätsprüfung in einer entwicklerfreundlichen REST-API-Suite.",
        "bullet1": "Sofortige Bereitstellung von DIDs",
        "bullet2": "Abdeckung in über 100 Ländern",
        "bullet3": "Bidirektionale Anruf- & SMS-Unterstützung",
        "learnMore": "Mehr erfahren"
      }
    },
    "whyChooseBadge": "WARUM INET VOICE-LÖSUNGEN",
    "whyChooseTitle": "Warum Sie Unsere Sprachlösungen Wählen Sollten",
    "whyChooseSubtitle": "Entwickelt für stabile Sprachkanäle, dynamisches Routing und zuverlässige Telefonieleistung auf globalen Märkten.",
    "whyCards": {
      "secure": {
        "title": "Sichere und zuverlässige Kommunikation",
        "description": "Unsere Infrastruktur unterstützt hochsichere Sprachverbindungen mit Hochverfügbarkeit auf Netzbetreiberniveau."
      },
      "cloud": {
        "title": "Cloudbasierte Sprachinfrastruktur",
        "description": "Nutzen Sie flexible Cloud-Voice-Lösungen, die teure Vor-Ort-Hardware überflüssig machen und Skalierbarkeit garantieren."
      },
      "api": {
        "title": "Sprach-API-Integration",
        "description": "Als bewährter Voice-API-Provider integrieren wir Telefoniefunktionen direkt in Webseiten, mobile Apps und CRM-Systeme."
      },
      "connectivity": {
        "title": "Globale Sprach-Konnektivität",
        "description": "Verbinden Sie Ihre Kunden und Teams weltweit in bester HD-Sprachqualität und mit erstklassiger Netzwerkstabilität."
      },
      "automated": {
        "title": "Automatisierte Sprachdienste",
        "description": "Optimieren Sie den Kundenservice durch interaktive IVR-Systeme, automatische Anrufweiterleitung und Sprachbenachrichtigungen."
      }
    },
    "howItWorksBadge": "SO FUNKTIONIERT ES",
    "howItWorksTitle": "Präzise Verbindung jedes Anrufs durch intelligentes Routing",
    "howItWorksSubtitle": "Unser globales Sprachnetzwerk verbindet Unternehmen mit zuverlässigen Betreiberrouten für konsistente HD-Sprachqualität.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Unternehmen",
        "description": "Binden Sie Ihren SBC, Ihre PBX-Telefonanlage oder Ihr Contact Center über sichere SIP-Trunks an.",
        "subtext": "SIP-Zugangsdaten • IP-Authentifizierung"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global Core-Netzwerk",
        "description": "Die intelligente Routing-Engine wählt automatisch den Pfad mit der geringsten Latenz und besten ASR/ACD-Werten.",
        "subtext": "SIP-Zugangsdaten • IP-Authentifizierung"
      },
      "step3": {
        "step": "03",
        "title": "Globale Carrier-Routen",
        "description": "Direkte Tier-1-Zusammenschaltungen in über 190 Ländern mit redundanten Ausfallpfaden.",
        "subtext": "SIP-Zugangsdaten • IP-Authentifizierung"
      },
      "step4": {
        "step": "04",
        "title": "Endkunde",
        "description": "Kristallklare Sprachqualität wird direkt auf Mobilgeräte, Softphones oder PSTN-Anschlüsse übertragen.",
        "subtext": "SIP-Zugangsdaten • IP-Authentifizierung"
      }
    },
    "ctaBadge": "BAUEN WIR IHR SPRACHNETZWERK AUF",
    "ctaTitle": "Stärken Sie Ihr Business mit Weltweiter, Zuverlässiger Telefonie",
    "ctaSubtitle": "Teilen Sie uns Ihre Verbindungsziele, Ihr Anrufvolumen und Ihre Qualitätskriterien mit. Unser Fachteam erstellt das optimale Konzept.",
    "defaultLocations": [
      {
        "city": "London",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapur",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "ja": {
    "heroBadge": "音声サービス",
    "heroTitle": "高品質な音声ソリューションでビジネス通信を加速",
    "heroDesc": "クリアな通話品質、グローバルな相互接続性、ビジネスの継続的成長を支える信頼性の高い音声プラットフォーム。",
    "getStarted": "今すぐ始める",
    "contactUs": "お問い合わせ",
    "coreServiceBadge": "コアサービス",
    "coreServiceTitle": "あらゆる業界向けに設計された音声ソリューション",
    "coreServiceSubtitle": "高可用性の音声通話、SMS、仮想番号のために構築されたモジュール型通信インフラ。",
    "services": {
      "wholesale": {
        "title": "ホールセール音声 (Wholesale Voice)",
        "description": "音質、通信到達率、コスト効率を徹底的に追求した国際音声ターミネーションサービス。",
        "bullet1": "クリアで高品質な音声接続",
        "bullet2": "柔軟なルーティング選択肢",
        "bullet3": "世界規模の通信網カバレッジ",
        "learnMore": "詳細を見る"
      },
      "aiVoice": {
        "title": "AI 音声ソリューション",
        "description": "対話型AI音声エージェント、スマートIVR、自動音声応答を世界中の端末へ高品質に提供。",
        "bullet1": "自然な対話型AIエージェント",
        "bullet2": "高度なインテリジェントIVR機能",
        "bullet3": "世界の大手通信キャリア接続",
        "learnMore": "詳細を見る"
      },
      "virtualNumbers": {
        "title": "仮想電話番号 (DID)",
        "description": "音声、SMS、WhatsApp、認証機能を開発者フレンドリーなREST APIスイートに統合。",
        "bullet1": "DID番号の即時プロビジョニング",
        "bullet2": "世界100カ国以上の番号提供",
        "bullet3": "双方向通話＆SMS送受信対応",
        "learnMore": "詳細を見る"
      }
    },
    "whyChooseBadge": "INET VOICEを選ぶ理由",
    "whyChooseTitle": "当社の音声ソリューションが選ばれる理由",
    "whyChooseSubtitle": "ノイズのないクリアな通話、インテリジェントな経路制御、世界市場における高い可用性を実現。",
    "whyCards": {
      "secure": {
        "title": "安全で確実なエンタープライズ通信",
        "description": "高スループットと通信キャリアレベルの信頼性を備え、企業の重要通話を安全に保護します。"
      },
      "cloud": {
        "title": "クラウドベースの柔軟な基盤",
        "description": "高額な専用ハードウェアを不要にし、優れた拡張性とコスト削減を両立するクラウド音声ソリューション。"
      },
      "api": {
        "title": "音声 API 連携",
        "description": "信頼できる通信APIプロバイダーとして、Webサイトやアプリ、CRMに通話機能を容易に組み込めます。"
      },
      "connectivity": {
        "title": "世界を結ぶ音声コネクティビティ",
        "description": "世界中の拠点や顧客と、途切れのない高音質通話と安定したネットワークでスムーズに接続。"
      },
      "automated": {
        "title": "高度な自動音声サービス",
        "description": "自動IVR、スマート着信振り分け、予約確認の自動コールなどで顧客満足度を大幅に向上させます。"
      }
    },
    "howItWorksBadge": "システム概要",
    "howItWorksTitle": "インテリジェントルーティングで確実につながる通話",
    "howItWorksSubtitle": "当社のグローバル音声網が、安定した大手キャリア回線へと通話を接続し、規模を問わずクリアな会話をお届けします。",
    "steps": {
      "step1": {
        "step": "01",
        "title": "企業クライアント",
        "description": "SBC、PBX、コンタクトセンター、業務アプリをセキュアなSIPトランク経由で接続。",
        "subtext": "SIP認証 • IPアドレス認証"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global ネットワーク",
        "description": "インテリジェント制御エンジンが低遅延かつ高ASR/ACDの最適通信ルートを瞬時に自動選択。",
        "subtext": "SIP認証 • IPアドレス認証"
      },
      "step3": {
        "step": "03",
        "title": "グローバルキャリア網",
        "description": "世界190カ国以上のTier-1キャリアと直接相互接続し、障害時の冗長経路も完備。",
        "subtext": "SIP認証 • IPアドレス認証"
      },
      "step4": {
        "step": "04",
        "title": "エンドユーザー",
        "description": "携帯電話、ソフトフォン、固定電話網（PSTN）へ最高品質のHD音声をそのまま配信。",
        "subtext": "SIP認証 • IPアドレス認証"
      }
    },
    "ctaBadge": "音声ネットワークを構築しましょう",
    "ctaTitle": "世界基準の高品質な音声接続でビジネスを加速",
    "ctaSubtitle": "接続対象国、予想トラフィック、求める品質をお知らせください。専門チームが最適なルーティングをご提案します。",
    "defaultLocations": [
      {
        "city": "ロンドン",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "シンガポール",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "ニューヨーク",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "ドバイ",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "pt": {
    "heroBadge": "SERVIÇO DE VOZ",
    "heroTitle": "Potencialize as Comunicações Empresariais com Soluções de Voz",
    "heroDesc": "Soluções de voz confiáveis e escaláveis para comunicação nítida, conectividade global e crescimento dos negócios.",
    "getStarted": "Começar Agora",
    "contactUs": "Fale Conosco",
    "coreServiceBadge": "NOSSO SERVIÇO PRINCIPAL",
    "coreServiceTitle": "Soluções de voz desenvolvidas para cada indústria",
    "coreServiceSubtitle": "Infraestrutura de telecomunicações modular para voz de alta disponibilidade, mensagens e números virtuais.",
    "services": {
      "wholesale": {
        "title": "Voz Wholesale (Atacado)",
        "description": "Terminação de voz internacional com opções de rotas baseadas em qualidade, ampla cobertura e custo competitivo.",
        "bullet1": "Conexões de voz em alta definição",
        "bullet2": "Opções flexíveis de roteamento",
        "bullet3": "Cobertura internacional ampla",
        "learnMore": "Saiba mais"
      },
      "aiVoice": {
        "title": "Voz com IA (AI Voice)",
        "description": "Disponibilize agentes de voz com IA conversacional, URA inteligente e interações de fala automatizadas em escala global.",
        "bullet1": "Agentes de IA conversacionais",
        "bullet2": "Roteamento inteligente de URA (IVR)",
        "bullet3": "Terminação em operadoras globais",
        "learnMore": "Saiba mais"
      },
      "virtualNumbers": {
        "title": "Números Virtuais (DID)",
        "description": "Unifique Voz, SMS, WhatsApp e Verificação em uma suíte de APIs REST moderna pronta para desenvolvedores.",
        "bullet1": "Provisionamento imediato de DIDs",
        "bullet2": "Cobertura em mais de 100 países",
        "bullet3": "Chamadas e SMS bidirecionais",
        "learnMore": "Saiba mais"
      }
    },
    "whyChooseBadge": "POR QUE ESCOLHER A INET VOICE",
    "whyChooseTitle": "Por Que Escolher Nossas Soluções de Voz",
    "whyChooseSubtitle": "Construído para conexões estáveis, roteamento dinâmico e desempenho sólido em telecomunicações globais.",
    "whyCards": {
      "secure": {
        "title": "Comunicação Segura e Confiável",
        "description": "Nossa infraestrutura suporta comunicação de voz corporativa com alta disponibilidade e qualidade carrier-grade."
      },
      "cloud": {
        "title": "Infraestrutura de Voz em Nuvem",
        "description": "Aproveite soluções em nuvem flexíveis que eliminam equipamentos caros, oferecendo escalabilidade e economia."
      },
      "api": {
        "title": "Integração de APIs de Voz",
        "description": "Como provedor de API confiável, integramos recursos de chamadas em sites, aplicativos móveis e sistemas de CRM."
      },
      "connectivity": {
        "title": "Conectividade Global de Voz",
        "description": "Conecte-se com clientes e equipes em múltiplos países com áudio cristalino e excelente estabilidade de rede."
      },
      "automated": {
        "title": "Serviços de Voz Automatizados",
        "description": "Aprimore o atendimento com sistemas de URA, roteamento inteligente de chamadas e lembretes automáticos."
      }
    },
    "howItWorksBadge": "COMO FUNCIONA",
    "howItWorksTitle": "Conectando Cada Chamada Através de Roteamento Inteligente",
    "howItWorksSubtitle": "Nossa rede de voz global interliga sua empresa a rotas de operadoras confiáveis para garantir chamadas nítidas em grande escala.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Empresa",
        "description": "Conecte seu SBC, PABX, contact center ou aplicação via entroncamento SIP criptografado.",
        "subtext": "Credenciais SIP • Autenticação por IP"
      },
      "step2": {
        "step": "02",
        "title": "Rede Global iNet",
        "description": "O mecanismo inteligente seleciona o caminho de menor latência e melhores índices ASR/ACD.",
        "subtext": "Credenciais SIP • Autenticação por IP"
      },
      "step3": {
        "step": "03",
        "title": "Rotas de Operadoras Globais",
        "description": "Interconexões diretas Tier-1 em mais de 190 países com rotas redundantes de failover.",
        "subtext": "Credenciais SIP • Autenticação por IP"
      },
      "step4": {
        "step": "04",
        "title": "Cliente Final",
        "description": "Voz com clareza cristalina entregue em celulares, softphones ou linhas fixas tradicionais.",
        "subtext": "Credenciais SIP • Autenticação por IP"
      }
    },
    "ctaBadge": "VAMOS CONSTRUIR SUA REDE DE VOZ",
    "ctaTitle": "Impulsione Seus Negócios com Conectividade de Voz Global Confiável",
    "ctaSubtitle": "Conte-nos quais destinos você precisa alcançar e seus volumes de tráfego. Nossa equipe montará o plano de roteamento perfeito.",
    "defaultLocations": [
      {
        "city": "Londres",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapura",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "Nova York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "ru": {
    "heroBadge": "ГОЛОСОВОЙ СЕРВИС",
    "heroTitle": "Эффективная Бизнес-Связь с Передовыми Голосовыми Решениями",
    "heroDesc": "Надежные и масштабируемые голосовые сервисы для кристально чистого звука, глобальной связности и роста вашего бизнеса.",
    "getStarted": "Начать",
    "contactUs": "Связаться с нами",
    "coreServiceBadge": "НАШИ ОСНОВНЫЕ УСЛУГИ",
    "coreServiceTitle": "Голосовые решения для любой отрасли бизнеса",
    "coreServiceSubtitle": "Модульная телеком-инфраструктура операторского класса для телефонии, обмена сообщениями и виртуальных номеров.",
    "services": {
      "wholesale": {
        "title": "Оптовая Голосовая Связь (Wholesale)",
        "description": "Международная терминация вызовов с маршрутами, оптимизированными по качеству звука, охвату и выгодным тарифам.",
        "bullet1": "Высокое HD-качество аудиосоединений",
        "bullet2": "Гибкие варианты маршрутизации",
        "bullet3": "Глобальное международное покрытие",
        "learnMore": "Подробнее"
      },
      "aiVoice": {
        "title": "Голосовой ИИ (AI Voice)",
        "description": "Развертывание диалоговых голосовых ИИ-агентов, умного IVR и автоматизированного речевого взаимодействия по всему миру.",
        "bullet1": "Диалоговые ИИ-агенты",
        "bullet2": "Интеллектуальная маршрутизация IVR",
        "bullet3": "Терминация через мировых операторов",
        "learnMore": "Подробнее"
      },
      "virtualNumbers": {
        "title": "Виртуальные Номера (DID)",
        "description": "Объединяйте голос, SMS, WhatsApp и верификацию в едином наборе современных REST API для разработчиков.",
        "bullet1": "Мгновенное подключение DID номеров",
        "bullet2": "Покрытие в более чем 100 странах",
        "bullet3": "Поддержка входящих и исходящих звонков и SMS",
        "learnMore": "Подробнее"
      }
    },
    "whyChooseBadge": "ПОЧЕМУ ВЫБИРАЮТ INET VOICE",
    "whyChooseTitle": "Почему Выбирают Наши Голосовые Решения",
    "whyChooseSubtitle": "Создано для кристально чистой связи, интеллектуальной маршрутизации и стабильной работы на международных рынках.",
    "whyCards": {
      "secure": {
        "title": "Безопасная и надежная связь",
        "description": "Наша инфраструктура обеспечивает безопасную голосовую связь с высокой доступностью операторского уровня."
      },
      "cloud": {
        "title": "Облачная голосовая платформа",
        "description": "Используйте гибкие облачные решения, устраняющие необходимость в дорогостоящем оборудовании, с полной масштабируемостью."
      },
      "api": {
        "title": "Интеграция голосовых API",
        "description": "Легко встраивайте функции телефонии в веб-сайты, мобильные приложения и CRM-системы через наш API."
      },
      "connectivity": {
        "title": "Глобальная голосовая связность",
        "description": "Общайтесь с клиентами и командами по всему миру с безупречным качеством звука и стабильностью соединения."
      },
      "automated": {
        "title": "Автоматизированные сервисы телефонии",
        "description": "Улучшайте клиентский опыт с помощью интерактивных IVR, автоматического распределения звонков и уведомлений."
      }
    },
    "howItWorksBadge": "КАК ЭТО РАБОТАЕТ",
    "howItWorksTitle": "Соединение Каждого Звонка Через Умную Маршрутизацию",
    "howItWorksSubtitle": "Наша всемирная голосовая сеть соединяет ваш бизнес с надежными операторскими маршрутами для стабильной связи любого масштаба.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Бизнес-инфраструктура",
        "description": "Подключайте свой SBC, АТС (PBX), контакт-центр или приложение через защищенный SIP-транк.",
        "subtext": "SIP-авторизация • IP-аутентификация"
      },
      "step2": {
        "step": "02",
        "title": "Сеть iNet Global",
        "description": "Интеллектуальный движок выбирает маршрут с минимальной задержкой и наилучшими показателями ASR/ACD.",
        "subtext": "SIP-авторизация • IP-аутентификация"
      },
      "step3": {
        "step": "03",
        "title": "Международные Маршруты Операторов",
        "description": "Прямые стыки с операторами Tier-1 в 190+ странах с резервными путями переключения.",
        "subtext": "SIP-авторизация • IP-аутентификация"
      },
      "step4": {
        "step": "04",
        "title": "Абонент",
        "description": "Безупречное HD-звучание доставляется прямо на мобильные устройства, софтфоны или номера PSTN.",
        "subtext": "SIP-авторизация • IP-аутентификация"
      }
    },
    "ctaBadge": "ПОСТРОЙТЕ СВОЮ ГОЛОСОВУЮ СЕТЬ",
    "ctaTitle": "Обеспечьте Свой Бизнес Надежной Телефонией по Всему Миру",
    "ctaSubtitle": "Расскажите нам о ваших целевых направлениях и объемах трафика. Наша команда поможет настроить идеальный план маршрутизации.",
    "defaultLocations": [
      {
        "city": "Лондон",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Сингапур",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "Нью-Йорк",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Дубай",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "it": {
    "heroBadge": "SERVIZIO VOCALE",
    "heroTitle": "Potenzia la Comunicazione Aziendale con Soluzioni Vocali Avanzate",
    "heroDesc": "Soluzioni vocali affidabili e scalabili per comunicazioni limpide, connettività globale e aziende in forte crescita.",
    "getStarted": "Inizia Ora",
    "contactUs": "Contattaci",
    "coreServiceBadge": "IL NOSTRO SERVIZIO CHIAVE",
    "coreServiceTitle": "Soluzioni vocali sviluppate su misura per ogni settore",
    "coreServiceSubtitle": "Infrastruttura telecomunicazioni modulare per voce ad alta disponibilità, messaggistica e numerazioni virtuali.",
    "services": {
      "wholesale": {
        "title": "Voce Wholesale (All'Ingrosso)",
        "description": "Terminazione vocale internazionale con rotte ottimizzate per qualità audio cristallina, copertura e convenienza.",
        "bullet1": "Connessioni vocali in alta definizione",
        "bullet2": "Opzioni di instradamento flessibili",
        "bullet3": "Copertura capillare a livello globale",
        "learnMore": "Scopri di più"
      },
      "aiVoice": {
        "title": "Voce con Intelligenza Artificiale",
        "description": "Distribuisci agenti vocali con IA conversazionale, IVR evoluti e interazioni vocali automatiche in tutto il mondo.",
        "bullet1": "Agenti IA conversazionali",
        "bullet2": "Routing vocale IVR intelligente",
        "bullet3": "Terminazione tramite carrier globali",
        "learnMore": "Scopri di più"
      },
      "virtualNumbers": {
        "title": "Numeri Virtuali (DID)",
        "description": "Riunisci Voce, SMS, WhatsApp e Autenticazione in una suite di REST API moderne pronte all'uso.",
        "bullet1": "Attivazione istantanea di DID",
        "bullet2": "Copertura in oltre 100 paesi",
        "bullet3": "Supporto chiamate e SMS bidirezionali",
        "learnMore": "Scopri di più"
      }
    },
    "whyChooseBadge": "PERCHÉ SCEGLIERE INET VOICE",
    "whyChooseTitle": "Perché Scegliere le Nostre Soluzioni Vocali",
    "whyChooseSubtitle": "Progettato per connessioni stabili, instradamento flessibile e prestazioni affidabili sui mercati internazionali.",
    "whyCards": {
      "secure": {
        "title": "Comunicazione Sicura e Affidabile",
        "description": "La nostra infrastruttura supporta chiamate aziendali sicure con elevata disponibilità e affidabilità carrier-grade."
      },
      "cloud": {
        "title": "Infrastruttura Vocale Cloud",
        "description": "Sfrutta soluzioni vocali cloud flessibili che eliminano l'hardware costoso, offrendo scalabilità ed efficienza dei costi."
      },
      "api": {
        "title": "Integrazione API Vocali",
        "description": "Provider fidato di API per integrare funzionalità di chiamata all'interno di siti web, app mobili e CRM."
      },
      "connectivity": {
        "title": "Connettività Vocale Globale",
        "description": "Connettiti con clienti e colleghi in molti paesi con qualità audio eccellente e prestazioni di rete continue."
      },
      "automated": {
        "title": "Servizi Vocali Automatizzati",
        "description": "Migliora l'esperienza utente attraverso sistemi IVR, instradamento automatico delle chiamate e notifiche vocali."
      }
    },
    "howItWorksBadge": "COME FUNZIONA",
    "howItWorksTitle": "Connettere Ogni Chiamata con Instradamento Intelligente",
    "howItWorksSubtitle": "La nostra rete vocale globale collega la tua azienda a rotte affidabili, offrendo comunicazioni cristalline su vasta scala.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Azienda",
        "description": "Collega il tuo SBC, PBX, contact center o applicazione tramite trunk SIP sicuro.",
        "subtext": "Credenziali SIP • Autenticazione IP"
      },
      "step2": {
        "step": "02",
        "title": "Rete Globale iNet",
        "description": "Il motore di instradamento intelligente seleziona la rotta a latenza più bassa e con il miglior ASR/ACD.",
        "subtext": "Credenziali SIP • Autenticazione IP"
      },
      "step3": {
        "step": "03",
        "title": "Rotte Carrier Mondiali",
        "description": "Interconnessioni dirette Tier-1 in oltre 190 paesi con percorsi di backup ridondanti.",
        "subtext": "Credenziali SIP • Autenticazione IP"
      },
      "step4": {
        "step": "04",
        "title": "Destinatario Finale",
        "description": "Qualità audio HD cristallina consegnata su dispositivi mobili, softphone o linee fisse PSTN.",
        "subtext": "Credenziali SIP • Autenticazione IP"
      }
    },
    "ctaBadge": "COSTRUIAMO LA TUA RETE VOCALE",
    "ctaTitle": "Supporta il Tuo Business con Telefonia Globale Affidabile",
    "ctaSubtitle": "Spiegaci le destinazioni necessarie, i volumi di traffico e le tue aspettative di qualità. Configureremo il piano perfetto.",
    "defaultLocations": [
      {
        "city": "Londra",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "ko": {
    "heroBadge": "음성 서비스 (VOICE)",
    "heroTitle": "음성 솔루션으로 기업 커뮤니케이션의 역량을 강화하세요",
    "heroDesc": "선명한 통화 품질, 글로벌 연결성, 비즈니스 성장을 지원하는 신뢰할 수 있는 엔터프라이즈 음성 통신 플랫폼.",
    "getStarted": "시작하기",
    "contactUs": "문의하기",
    "coreServiceBadge": "핵심 서비스",
    "coreServiceTitle": "모든 산업에 맞춤화된 전문 음성 솔루션",
    "coreServiceSubtitle": "고가용성 음성, 메시징 및 가상 번호를 위해 설계된 모듈형 통신 인프라.",
    "services": {
      "wholesale": {
        "title": "도매 음성 (Wholesale Voice)",
        "description": "통화 품질, 전 세계 커버리지, 비용 효율성을 균형 있게 최적화한 국제 음성 종단 서비스.",
        "bullet1": "고품질 HD 음성 연결",
        "bullet2": "유연한 라우팅 경로 선택",
        "bullet3": "전 세계 광범위한 통신망 커버리지",
        "learnMore": "더 알아보기"
      },
      "aiVoice": {
        "title": "AI 음성 솔루션",
        "description": "대화형 AI 보이스 에이전트, 스마트 IVR, 자동화된 음성 안내를 전 세계 단말기에 안정적으로 제공.",
        "bullet1": "자연스러운 대화형 AI 에이전트",
        "bullet2": "지능형 음성 IVR 라우팅",
        "bullet3": "글로벌 통신사 직결 발신",
        "learnMore": "더 알아보기"
      },
      "virtualNumbers": {
        "title": "가상 전화번호 (DID)",
        "description": "음성 통화, SMS, WhatsApp, 인증 기능을 개발자 친화적인 REST API 제품군으로 완벽 통합.",
        "bullet1": "즉각적인 DID 번호 발급",
        "bullet2": "100개국 이상의 번호 지원",
        "bullet3": "양방향 통화 및 SMS 완벽 지원",
        "learnMore": "더 알아보기"
      }
    },
    "whyChooseBadge": "INET VOICE를 선택해야 하는 이유",
    "whyChooseTitle": "iNet Global 음성 솔루션의 독보적인 장점",
    "whyChooseSubtitle": "잡음 없는 선명한 연결, 유연한 지능형 경로 제어 및 글로벌 시장에서의 신뢰할 수 있는 통신 품질.",
    "whyCards": {
      "secure": {
        "title": "안전하고 신뢰할 수 있는 통신",
        "description": "통신사급 신뢰성과 강력한 보안 아키텍처로 엔터프라이즈의 핵심 음성 통신을 보호합니다."
      },
      "cloud": {
        "title": "클라우드 기반 음성 인프라",
        "description": "고가의 하드웨어 장비 없이도 뛰어난 확장성과 비용 절감을 제공하는 클라우드 보이스 솔루션."
      },
      "api": {
        "title": "음성 API 손쉬운 연동",
        "description": "검증된 통신 API를 통해 웹사이트, 모바일 앱, CRM에 통화 및 음성 안내 기능을 즉시 구현합니다."
      },
      "connectivity": {
        "title": "글로벌 음성 연결망",
        "description": "전 세계 고객 및 해외 지사와 끊김 없는 고음질 음성으로 원활하게 소통할 수 있습니다."
      },
      "automated": {
        "title": "자동화된 스마트 음성 서비스",
        "description": "대화형 IVR 시스템, 자동 전화 라우팅, 알림 콜 등을 통해 고객 경험을 극대화합니다."
      }
    },
    "howItWorksBadge": "작동 방식",
    "howItWorksTitle": "지능형 라우팅을 통한 모든 통화의 최적 연결",
    "howItWorksSubtitle": "글로벌 음성 네트워크가 신뢰할 수 있는 통신사 회선으로 연결하여 대규모 통화에서도 선명한 음질을 제공합니다.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "기업 시스템",
        "description": "보안 SIP 트렁크를 통해 SBC, 사내 교환기(PBX), 고객센터 및 통신 앱을 연결합니다.",
        "subtext": "SIP 자격증명 • IP 인증"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global 코어망",
        "description": "지능형 라우팅 엔진이 최저 지연 시간과 최고 통화 성공률(ASR/ACD) 회선을 자동 선택합니다.",
        "subtext": "SIP 자격증명 • IP 인증"
      },
      "step3": {
        "step": "03",
        "title": "글로벌 통신사 경로",
        "description": "전 세계 190개국 이상의 Tier-1 통신사와 직통 연결되며 이중화 백업 회선을 지원합니다.",
        "subtext": "SIP 자격증명 • IP 인증"
      },
      "step4": {
        "step": "04",
        "title": "수신 고객",
        "description": "선명한 HD 통화 품질이 전 세계 휴대폰, 소프트폰, 일반 유선 전화망(PSTN)으로 바로 전달됩니다.",
        "subtext": "SIP 자격증명 • IP 인증"
      }
    },
    "ctaBadge": "글로벌 음성 네트워크를 구축하세요",
    "ctaTitle": "신뢰할 수 있는 글로벌 음성 연결로 비즈니스를 확장하세요",
    "ctaSubtitle": "필요한 국가, 예상 트래픽 규모, 원하는 통화 품질을 알려주시면 최적의 맞춤형 라우팅 플랜을 제공해 드립니다.",
    "defaultLocations": [
      {
        "city": "런던",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "싱가포르",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "뉴욕",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "두바이",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "nl": {
    "heroBadge": "SPRAAKDIENST (VOICE)",
    "heroTitle": "Versterk Bedrijfscommunicatie met Geavanceerde Spraakoplossingen",
    "heroDesc": "Betrouwbare en schaalbare spraakoplossingen voor kristalheldere communicatie, wereldwijde connectiviteit en groei.",
    "getStarted": "Aan de Slag",
    "contactUs": "Neem Contact Op",
    "coreServiceBadge": "ONZE KERNVACATURES",
    "coreServiceTitle": "Spraakoplossingen gebouwd voor elke sector",
    "coreServiceSubtitle": "Modulaire telecominfrastructuur ontworpen voor hoogwaardige spraak, messaging en virtuele nummers.",
    "services": {
      "wholesale": {
        "title": "Wholesale Voice",
        "description": "Internationale spraakterminatie met routes geoptimaliseerd voor audiokwaliteit, wereldwijd bereik en kostenefficiëntie.",
        "bullet1": "Hoogwaardige HD-spraakverbindingen",
        "bullet2": "Flexibele routeringsopties",
        "bullet3": "Wereldwijde netwerkdekking",
        "learnMore": "Meer informatie"
      },
      "aiVoice": {
        "title": "AI Spraakoplossingen",
        "description": "Implementeer conversationele AI-spraakagenten, slimme IVR-menu's en geautomatiseerde spraakinteracties wereldwijd.",
        "bullet1": "Conversationele AI-spraakagenten",
        "bullet2": "Slimme IVR-spraakroutering",
        "bullet3": "Terminatie via wereldwijde operators",
        "learnMore": "Meer informatie"
      },
      "virtualNumbers": {
        "title": "Virtuele Telefoonnummers (DID)",
        "description": "Verenig spraak, SMS, WhatsApp en identiteitsverificatie in één moderne ontwikkelaar-vriendelijke REST API-suite.",
        "bullet1": "Directe levering van DID-nummers",
        "bullet2": "Dekking in meer dan 100 landen",
        "bullet3": "Tweeweg bellen en SMS-ondersteuning",
        "learnMore": "Meer informatie"
      }
    },
    "whyChooseBadge": "WAAROM KIEZEN VOOR INET VOICE",
    "whyChooseTitle": "Waarom Kiezen Voor Onze Spraakoplossingen",
    "whyChooseSubtitle": "Ontworpen voor ruisvrije verbindingen, dynamische routering en betrouwbare prestaties op wereldwijde markten.",
    "whyCards": {
      "secure": {
        "title": "Veilige en Betrouwbare Communicatie",
        "description": "Onze infrastructuur ondersteunt veilige spraakcommunicatie met hoge beschikbaarheid en carrier-grade betrouwbaarheid."
      },
      "cloud": {
        "title": "Cloudgebaseerde Spraakinfrastructuur",
        "description": "Gebruik flexibele cloud voice-oplossingen zonder dure lokale hardware, met optimale schaalbaarheid en lagere kosten."
      },
      "api": {
        "title": "Spraak-API Integratie",
        "description": "Als betrouwbare API-provider integreren wij belfunctionaliteiten naadloos in websites, mobiele apps en CRM-systemen."
      },
      "connectivity": {
        "title": "Wereldwijde Spraakconnectiviteit",
        "description": "Verbind klanten en teams in tientallen landen met kristalheldere audiokwaliteit en stabiele netwerkprestaties."
      },
      "automated": {
        "title": "Geautomatiseerde Spraakdiensten",
        "description": "Verbeter de klantervaring met interactieve IVR-systemen, geautomatiseerde oproeproutering en spraaknotificaties."
      }
    },
    "howItWorksBadge": "HOE HET WERKT",
    "howItWorksTitle": "Elk Gesprek Slim Verbinden via Intelligente Routering",
    "howItWorksSubtitle": "Ons wereldwijde spraaknetwerk verbindt bedrijven met betrouwbare operatorroutes voor consistente kwaliteit op grote schaal.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Bedrijfsaansluiting",
        "description": "Verbind uw SBC, PBX-telefooncentrale, contactcenter of communicatie-app via een beveiligde SIP-trunk.",
        "subtext": "SIP-inloggegevens • IP-authenticatie"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global Kernnetwerk",
        "description": "De intelligente routeringsengine kiest automatisch de route met de laagste latentie en hoogste ASR/ACD.",
        "subtext": "SIP-inloggegevens • IP-authenticatie"
      },
      "step3": {
        "step": "03",
        "title": "Wereldwijde Operatorroutes",
        "description": "Directe Tier-1 interconnecties in meer dan 190 landen met redundante failover-paden.",
        "subtext": "SIP-inloggegevens • IP-authenticatie"
      },
      "step4": {
        "step": "04",
        "title": "Eindgebruiker",
        "description": "Kristalheldere HD-audiokwaliteit direct geleverd naar mobiele telefoons, softphones of vaste lijnen (PSTN).",
        "subtext": "SIP-inloggegevens • IP-authenticatie"
      }
    },
    "ctaBadge": "LATEN WE UW SPRAAKNETWERK BOUWEN",
    "ctaTitle": "Versterk Uw Bedrijf met Betrouwbare Wereldwijde Telefonie",
    "ctaSubtitle": "Vertel ons welke bestemmingen u nodig hebt en wat uw belvolumes zijn. Ons team stelt het ideale routeringsplan samen.",
    "defaultLocations": [
      {
        "city": "Londen",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "tr": {
    "heroBadge": "SES HİZMETLERİ (VOICE)",
    "heroTitle": "Gelişmiş Ses Çözümleri ile İşletme İletişiminizi Güçlendirin",
    "heroDesc": "Net iletişim, küresel bağlantı ve büyüyen işletmeler için güvenilir, ölçeklenebilir kurumsal ses çözümleri.",
    "getStarted": "Hemen Başlayın",
    "contactUs": "Bize Ulaşın",
    "coreServiceBadge": "TEMEL HİZMETİMİZ",
    "coreServiceTitle": "Her sektör için özel olarak tasarlanmış ses çözümleri",
    "coreServiceSubtitle": "Yüksek erişilebilirlikli ses, mesajlaşma ve sanal numaralar için modüler telekomünikasyon altyapısı.",
    "services": {
      "wholesale": {
        "title": "Toptan Ses (Wholesale Voice)",
        "description": "Üstün ses kalitesi, küresel kapsama alanı ve uygun maliyet dengesiyle uluslararası ses sonlandırma hizmeti.",
        "bullet1": "Yüksek kaliteli HD ses bağlantıları",
        "bullet2": "Esnek rota yönlendirme seçenekleri",
        "bullet3": "Geniş küresel şebeke kapsaması",
        "learnMore": "Daha fazla bilgi"
      },
      "aiVoice": {
        "title": "Yapay Zeka Ses (AI Voice)",
        "description": "Diyalog tabanlı yapay zeka ses asistanları, akıllı IVR sistemleri ve otomatik sesli bildirimleri küresel çapta uygulayın.",
        "bullet1": "Diyalog tabanlı yapay zeka ajanları",
        "bullet2": "Akıllı sesli IVR yönlendirmesi",
        "bullet3": "Küresel operatör sonlandırması",
        "learnMore": "Daha fazla bilgi"
      },
      "virtualNumbers": {
        "title": "Sanal Numaralar (DID)",
        "description": "Ses, SMS, WhatsApp ve kimlik doğrulama hizmetlerini geliştirici dostu modern REST API paketinde birleştirin.",
        "bullet1": "Anında DID numarası tahsisi",
        "bullet2": "100'den fazla ülkede numara desteği",
        "bullet3": "Çift yönlü çağrı ve SMS desteği",
        "learnMore": "Daha fazla bilgi"
      }
    },
    "whyChooseBadge": "NEDEN INET SES ÇÖZÜMLERİ",
    "whyChooseTitle": "Neden Bizim Ses Çözümlerimizi Seçmelisiniz",
    "whyChooseSubtitle": "Kesintisiz ve parazitsiz bağlantılar, akıllı yönlendirme ve küresel pazarlarda güvenilir performans için geliştirildi.",
    "whyCards": {
      "secure": {
        "title": "Güvenli ve Kesintisiz İletişim",
        "description": "Altyapımız, kurumsal ses trafiğini operatör düzeyinde yüksek güvenilirlik ve tam koruma ile destekler."
      },
      "cloud": {
        "title": "Bulut Tabanlı Ses Altyapısı",
        "description": "Pahalı donanım yatırımlarına gerek kalmadan ölçeklenebilirlik ve tasarruf sunan esnek bulut ses çözümleri."
      },
      "api": {
        "title": "Ses API Entegrasyonu",
        "description": "Güvenilir telekom API sağlayıcısı olarak web sitelerine, uygulamalara ve CRM'lere ses yetenekleri entegre ediyoruz."
      },
      "connectivity": {
        "title": "Küresel Ses Bağlantısı",
        "description": "Müşterileriniz ve ekiplerinizle kristal netliğinde ses kalitesi ve üstün ağ performansıyla kesintisiz iletişim kurun."
      },
      "automated": {
        "title": "Otomatik Ses Hizmetleri",
        "description": "Etkileşimli IVR sistemleri, otomatik çağrı yönlendirme ve sesli randevu hatırlatıcıları ile müşteri memnuniyetini artırın."
      }
    },
    "howItWorksBadge": "NASIL ÇALIŞIR",
    "howItWorksTitle": "Akıllı Yönlendirme ile Her Çağrıyı Kusursuz Bağlayın",
    "howItWorksSubtitle": "Küresel ses ağımız, işletmeleri güvenilir operatör rotalarına bağlayarak her ölçekte berrak iletişim sağlar.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "İşletme Girişi",
        "description": "SBC, santral (PBX), çağrı merkezi veya iletişim uygulamanızı güvenli SIP üzerinden bağlayın.",
        "subtext": "SIP Kimlik Bilgileri • IP Doğrulama"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global Çekirdek Ağı",
        "description": "Akıllı yönlendirme motoru en düşük gecikmeye ve en yüksek ASR/ACD başarı oranına sahip rotayı otomatik seçer.",
        "subtext": "SIP Kimlik Bilgileri • IP Doğrulama"
      },
      "step3": {
        "step": "03",
        "title": "Küresel Operatör Rotaları",
        "description": "Yedekli failover hatlarıyla 190'dan fazla ülkede Tier-1 operatörler ile doğrudan ara bağlantı.",
        "subtext": "SIP Kimlik Bilgileri • IP Doğrulama"
      },
      "step4": {
        "step": "04",
        "title": "Son Kullanıcı",
        "description": "Kristal netliğinde HD ses kalitesi doğrudan mobil cihazlara, softphone'lara veya sabit hatlara (PSTN) iletilir.",
        "subtext": "SIP Kimlik Bilgileri • IP Doğrulama"
      }
    },
    "ctaBadge": "SES AĞINIZI BİRLİKTE kURALIM",
    "ctaTitle": "İşletmenizi Küresel ve Güvenilir Ses Bağlantısıyla Donatın",
    "ctaSubtitle": "Bağlanmak istediğiniz ülkeleri, çağrı hacminizi ve kalite standartlarınızı bize iletin. Ekibimiz en iyi planı hazırlasın.",
    "defaultLocations": [
      {
        "city": "Londra",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapur",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "id": {
    "heroBadge": "LAYANAN SUARA (VOICE)",
    "heroTitle": "Tingkatkan Komunikasi Bisnis dengan Solusi Suara Terdepan",
    "heroDesc": "Solusi suara yang andal dan terukur untuk komunikasi yang jernih, konektivitas global, dan pertumbuhan bisnis berkelanjutan.",
    "getStarted": "Mulai Sekarang",
    "contactUs": "Hubungi Kami",
    "coreServiceBadge": "LAYANAN UTAMA KAMI",
    "coreServiceTitle": "Solusi suara yang dirancang untuk setiap sektor industri",
    "coreServiceSubtitle": "Infrastruktur telekomunikasi modular yang dirancang untuk suara ketersediaan tinggi, pesan, dan nomor virtual.",
    "services": {
      "wholesale": {
        "title": "Wholesale Voice (Suara Grosir)",
        "description": "Terminasi panggilan internasional dengan opsi perutean yang dioptimalkan untuk kualitas audio, jangkauan, dan biaya.",
        "bullet1": "Koneksi suara HD berkualitas tinggi",
        "bullet2": "Opsi perutean fleksibel",
        "bullet3": "Cakupan jaringan internasional luas",
        "learnMore": "Pelajari lebih lanjut"
      },
      "aiVoice": {
        "title": "Solusi AI Suara (AI Voice)",
        "description": "Hadirkan agen suara AI percakapan, IVR cerdas, dan respons suara otomatis ke perangkat di seluruh dunia.",
        "bullet1": "Agen suara AI percakapan alami",
        "bullet2": "Perutean IVR suara cerdas",
        "bullet3": "Terminasi operator telekomunikasi global",
        "learnMore": "Pelajari lebih lanjut"
      },
      "virtualNumbers": {
        "title": "Nomor Telepon Virtual (DID)",
        "description": "Satukan Suara, SMS, WhatsApp, dan Verifikasi ke dalam rangkaian REST API modern yang ramah pengembang.",
        "bullet1": "Penyediaan nomor DID instan",
        "bullet2": "Cakupan di lebih dari 100 negara",
        "bullet3": "Mendukung panggilan & SMS dua arah",
        "learnMore": "Pelajari lebih lanjut"
      }
    },
    "whyChooseBadge": "MENGAPA MEMILIH INET VOICE",
    "whyChooseTitle": "Mengapa Memilih Solusi Suara Kami",
    "whyChooseSubtitle": "Dibangun untuk panggilan jernih bebas gangguan, perutean cerdas, dan performa andal di pasar global.",
    "whyCards": {
      "secure": {
        "title": "Komunikasi Aman dan Andal",
        "description": "Infrastruktur kami mendukung komunikasi suara perusahaan yang aman dengan ketersediaan tinggi tingkat operator."
      },
      "cloud": {
        "title": "Infrastruktur Suara Berbasis Cloud",
        "description": "Manfaatkan solusi cloud fleksibel yang menghilangkan kebutuhan perangkat keras mahal dengan skalabilitas penuh."
      },
      "api": {
        "title": "Integrasi API Suara",
        "description": "Sebagai penyedia API terpercaya, kami membantu mengintegrasikan fitur panggilan ke situs web, aplikasi, dan CRM."
      },
      "connectivity": {
        "title": "Konektivitas Suara Global",
        "description": "Hubungkan pelanggan dan tim di berbagai negara dengan kualitas audio sebening kristal dan jaringan stabil."
      },
      "automated": {
        "title": "Layanan Suara Terotomatisasi",
        "description": "Tingkatkan kepuasan pelanggan melalui sistem IVR, perutean panggilan otomatis, dan pengingat jadwal suara."
      }
    },
    "howItWorksBadge": "CARA KERJA",
    "howItWorksTitle": "Menghubungkan Setiap Panggilan Melalui Perutean Cerdas",
    "howItWorksSubtitle": "Jaringan suara global kami menghubungkan bisnis ke rute operator terpercaya untuk menghasilkan komunikasi jernih pada skala besar.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Sistem Bisnis",
        "description": "Sambungkan SBC, PBX, contact center, atau aplikasi bisnis Anda melalui SIP trunking yang aman.",
        "subtext": "Kredensial SIP • Autentikasi IP"
      },
      "step2": {
        "step": "02",
        "title": "Jaringan Inti iNet Global",
        "description": "Mesin perutean cerdas memilih jalur dengan latensi terendah dan tingkat keberhasilan ASR/ACD tertinggi.",
        "subtext": "Kredensial SIP • Autentikasi IP"
      },
      "step3": {
        "step": "03",
        "title": "Rute Operator Global",
        "description": "Interkoneksi langsung Tier-1 di lebih dari 190 negara dengan jalur cadangan redundan.",
        "subtext": "Kredensial SIP • Autentikasi IP"
      },
      "step4": {
        "step": "04",
        "title": "Pelanggan Akhir",
        "description": "Kualitas audio HD yang jernih diantarkan langsung ke ponsel, softphone, atau nomor telepon tetap (PSTN).",
        "subtext": "Kredensial SIP • Autentikasi IP"
      }
    },
    "ctaBadge": "MARI BANGUN JARINGAN SUARA ANDA",
    "ctaTitle": "Dukung Bisnis Anda dengan Konektivitas Suara Global yang Andal",
    "ctaSubtitle": "Beri tahu kami tujuan panggilan dan perkiraan volume Anda. Tim ahli kami akan menyusun rencana perutean yang optimal.",
    "defaultLocations": [
      {
        "city": "London",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapura",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "vi": {
    "heroBadge": "DỊCH VỤ THOẠI (VOICE)",
    "heroTitle": "Nâng Tầm Giao Tiếp Doanh Nghiệp với Giải Pháp Thoại Tiên Tiến",
    "heroDesc": "Giải pháp thoại đáng tin cậy và có khả năng mở rộng cao, mang đến chất lượng âm thanh trong trẻo, kết nối toàn cầu và sự phát triển vượt bậc.",
    "getStarted": "Bắt đầu ngay",
    "contactUs": "Liên hệ chúng tôi",
    "coreServiceBadge": "DỊCH VỤ CỐT LÕI",
    "coreServiceTitle": "Giải pháp thoại chuyên biệt cho từng lĩnh vực kinh doanh",
    "coreServiceSubtitle": "Hạ tầng viễn thông dạng mô-đun phục vụ thoại độ sẵn sàng cao, tin nhắn và số điện thoại ảo.",
    "services": {
      "wholesale": {
        "title": "Thoại Bán buôn (Wholesale Voice)",
        "description": "Dịch vụ chuyển tiếp cuộc gọi quốc tế với các tuyến tối ưu hóa về chất lượng âm thanh, độ phủ và chi phí cạnh tranh.",
        "bullet1": "Kết nối thoại HD chất lượng cao",
        "bullet2": "Tùy chọn định tuyến linh hoạt",
        "bullet3": "Độ phủ sóng mạng lưới toàn cầu",
        "learnMore": "Tìm hiểu thêm"
      },
      "aiVoice": {
        "title": "Thoại Trí Tuệ Nhân Tạo (AI Voice)",
        "description": "Triển khai trợ lý thoại AI đàm thoại, tổng đài IVR thông minh và tương tác giọng nói tự động trên quy mô quốc tế.",
        "bullet1": "Trợ lý ảo AI đàm thoại tự nhiên",
        "bullet2": "Định tuyến tổng đài IVR thông minh",
        "bullet3": "Chuyển tiếp qua mạng viễn thông quốc tế",
        "learnMore": "Tìm hiểu thêm"
      },
      "virtualNumbers": {
        "title": "Số Điện Thoại Ảo (DID)",
        "description": "Tích hợp Thoại, SMS, WhatsApp và xác thực bảo mật trong bộ API REST hiện đại, dễ dàng cho lập trình viên.",
        "bullet1": "Cấp phát số DID tức thì",
        "bullet2": "Đầu số tại hơn 100 quốc gia",
        "bullet3": "Hỗ trợ cuộc gọi & SMS hai chiều",
        "learnMore": "Tìm hiểu thêm"
      }
    },
    "whyChooseBadge": "TẠI SAO CHỌN INET VOICE",
    "whyChooseTitle": "Lý Do Chọn Giải Pháp Thoại Của Chúng Tôi",
    "whyChooseSubtitle": "Được xây dựng cho chất lượng đàm thoại trong trẻo, định tuyến thông minh và hiệu năng ổn định tại mọi thị trường.",
    "whyCards": {
      "secure": {
        "title": "Liên Lạc An Toàn và Đáng Tin Cậy",
        "description": "Hạ tầng bảo vệ các cuộc gọi kinh doanh quan trọng với độ sẵn sàng cao chuẩn nhà mạng viễn thông hàng đầu."
      },
      "cloud": {
        "title": "Hạ Tầng Thoại Đám Mây",
        "description": "Tận dụng giải pháp thoại đám mây linh hoạt giúp loại bỏ chi phí phần cứng cồng kềnh, dễ dàng mở rộng và tiết kiệm ngân sách."
      },
      "api": {
        "title": "Tích Hợp API Thoại",
        "description": "Là đối tác cung cấp API uy tín, chúng tôi giúp tích hợp chức năng nghe gọi vào trang web, ứng dụng di động và CRM."
      },
      "connectivity": {
        "title": "Kết Nối Thoại Quốc Tế",
        "description": "Kết nối khách hàng và đối tác xuyên quốc gia với âm thanh rõ nét và đường truyền ổn định không ngắt quãng."
      },
      "automated": {
        "title": "Dịch Vụ Thoại Tự Động Hóa",
        "description": "Tối ưu hóa dịch vụ khách hàng với hệ thống IVR tương tác, phân bổ cuộc gọi tự động và nhắc lịch hẹn bằng giọng nói."
      }
    },
    "howItWorksBadge": "CƠ CHẾ HOẠT ĐỘNG",
    "howItWorksTitle": "Kết Nối Từng Cuộc Gọi Qua Hệ Thống Định Tuyến Thông Minh",
    "howItWorksSubtitle": "Mạng lưới thoại toàn cầu của chúng tôi kết nối doanh nghiệp đến các tuyến nhà mạng uy tín, mang lại âm thanh chuẩn xác trên quy mô lớn.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Doanh Nghiệp",
        "description": "Kết nối SBC, tổng đài PBX, contact center hoặc ứng dụng thoại qua đường truyền SIP trunking bảo mật.",
        "subtext": "Thông tin SIP • Xác thực IP"
      },
      "step2": {
        "step": "02",
        "title": "Mạng Lưới Lõi iNet Global",
        "description": "Thuật toán định tuyến tự động chọn tuyến có độ trễ thấp nhất và chỉ số ASR/ACD thành công cao nhất.",
        "subtext": "Thông tin SIP • Xác thực IP"
      },
      "step3": {
        "step": "03",
        "title": "Tuyến Nhà Mạng Quốc Tế",
        "description": "Liên kết trực tiếp với các nhà mạng Tier-1 tại hơn 190 quốc gia với các đường dẫn dự phòng bảo vệ.",
        "subtext": "Thông tin SIP • Xác thực IP"
      },
      "step4": {
        "step": "04",
        "title": "Người Dùng Cuối",
        "description": "Chất lượng âm thanh HD sống động truyền thẳng tới điện thoại di động, softphone hoặc điện thoại cố định (PSTN).",
        "subtext": "Thông tin SIP • Xác thực IP"
      }
    },
    "ctaBadge": "HÃY XÂY DỰNG MẠNG LƯỚI THOẠI CỦA BẠN",
    "ctaTitle": "Trang Bị Cho Doanh Nghiệp Hệ Thống Thoại Đẳng Cấp Toàn Cầu",
    "ctaSubtitle": "Hãy chia sẻ với chúng tôi các thị trường mục tiêu và lưu lượng cuộc gọi. Đội ngũ kỹ sư sẽ tư vấn phương án định tuyến hoàn hảo nhất.",
    "defaultLocations": [
      {
        "city": "Luân Đôn",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "pl": {
    "heroBadge": "USŁUGI GŁOSOWE (VOICE)",
    "heroTitle": "Wzmocnij Komunikację Biznesową Dzięki Nowoczesnym Rozwiązaniom Głosowym",
    "heroDesc": "Niezawodne i skalowalne rozwiązania głosowe zapewniające krystalicznie czyste połączenia, globalną łączność i dynamiczny rozwój biznesu.",
    "getStarted": "Rozpocznij teraz",
    "contactUs": "Skontaktuj się z nami",
    "coreServiceBadge": "NASZA GŁÓWNA USŁUGA",
    "coreServiceTitle": "Rozwiązania głosowe dopasowane do każdej branży",
    "coreServiceSubtitle": "Modułowa infrastruktura telekomunikacyjna dla wysokiej dostępności głosu, wiadomości i numerów wirtualnych.",
    "services": {
      "wholesale": {
        "title": "Hurtowy Głos (Wholesale Voice)",
        "description": "Międzynarodowa terminacja połączeń z trasami zoptymalizowanymi pod kątem jakości dźwięku, zasięgu i niskich kosztów.",
        "bullet1": "Połączenia głosowe wysokiej jakości HD",
        "bullet2": "Elastyczne opcje trasowania połączeń",
        "bullet3": "Ogólnoświatowy zasięg telekomunikacyjny",
        "learnMore": "Dowiedz się więcej"
      },
      "aiVoice": {
        "title": "Głosowa Sztuczna Inteligencja (AI Voice)",
        "description": "Wdrażaj konwersacyjnych agentów głosowych AI, inteligentne IVR oraz automatyczne powiadomienia mowy na całym świecie.",
        "bullet1": "Konwersacyjni agenci głosowi AI",
        "bullet2": "Inteligentne trasowanie głosowe IVR",
        "bullet3": "Terminacja przez globalnych operatorów",
        "learnMore": "Dowiedz się więcej"
      },
      "virtualNumbers": {
        "title": "Wirtualne Numery Telefonów (DID)",
        "description": "Połącz Głos, SMS, WhatsApp i uwierzytelnianie w jednym nowoczesnym pakiecie REST API dla programistów.",
        "bullet1": "Błyskawiczne przydzielanie numerów DID",
        "bullet2": "Zasięg w ponad 100 krajach świata",
        "bullet3": "Dwukierunkowa obsługa połączeń i SMS",
        "learnMore": "Dowiedz się więcej"
      }
    },
    "whyChooseBadge": "DLACZEGO INET VOICE",
    "whyChooseTitle": "Dlaczego Warto Wybrać Nasze Usługi Głosowe",
    "whyChooseSubtitle": "Zbudowane z myślą o krystalicznie czystych połączeniach, inteligentnym routingu i niezawodnej łączności międzynarodowej.",
    "whyCards": {
      "secure": {
        "title": "Bezpieczna i Niezawodna Komunikacja",
        "description": "Nasza infrastruktura wspiera bezpieczną telefonię korporacyjną o wysokiej dostępności klasy operatorskiej."
      },
      "cloud": {
        "title": "Chmurowa Infrastruktura Telefoniczna",
        "description": "Wykorzystaj elastyczne rozwiązania chmurowe, które eliminują drogi sprzęt telekomunikacyjny i zapewniają skalowalność."
      },
      "api": {
        "title": "Integracja API Głosowego",
        "description": "Jako zaufany dostawca API ułatwiamy integrację funkcji dzwonienia ze stronami internetowymi, aplikacjami i systemami CRM."
      },
      "connectivity": {
        "title": "Globalna Łączność Telefoniczna",
        "description": "Łącz się z klientami i zespołami w kilkudziesięciu krajach z krystalicznie czystym dźwiękiem i stabilną siecią."
      },
      "automated": {
        "title": "Zautomatyzowane Usługi Głosowe",
        "description": "Zwiększ zadowolenie klientów dzięki interaktywnym systemom IVR, automatycznemu kolejkowaniu i powiadomieniom głosowym."
      }
    },
    "howItWorksBadge": "JAK TO DZIAŁA",
    "howItWorksTitle": "Łączenie Każdej Rozmowy Dzięki Inteligentnemu Trasowaniu",
    "howItWorksSubtitle": "Nasza globalna sieć głosowa łączy firmy z niezawodnymi trasami operatorskimi, gwarantując czysty dźwięk na dużą skalę.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Infrastruktura Klienta",
        "description": "Podłącz swój kontroler SBC, centralę PBX, call center lub aplikację za pośrednictwem bezpiecznego trunku SIP.",
        "subtext": "Dane uwierzytelniające SIP • Autoryzacja IP"
      },
      "step2": {
        "step": "02",
        "title": "Sieć Rdzeniowa iNet Global",
        "description": "Inteligentny silnik routingu automatycznie dobiera trasę o najniższym opóźnieniu i najwyższym współczynniku ASR/ACD.",
        "subtext": "Dane uwierzytelniające SIP • Autoryzacja IP"
      },
      "step3": {
        "step": "03",
        "title": "Międzynarodowe Trasy Operatorskie",
        "description": "Bezpośrednie styki z operatorami Tier-1 w ponad 190 krajach z redundancją łączy zapasowych.",
        "subtext": "Dane uwierzytelniające SIP • Autoryzacja IP"
      },
      "step4": {
        "step": "04",
        "title": "Odbiorca Połączenia",
        "description": "Krystalicznie czysty dźwięk HD dostarczany bezpośrednio na smartfony, telefony programowe (softphony) lub PSTN.",
        "subtext": "Dane uwierzytelniające SIP • Autoryzacja IP"
      }
    },
    "ctaBadge": "ZBUDUJ SWOJĄ SIEĆ TELEFONICZNĄ",
    "ctaTitle": "Zapewnij Swojej Firmie Niezawodną Globalną Łączność Głosową",
    "ctaSubtitle": "Opowiedz nam o swoich docelowych rynkach i przewidywanym wolumenie ruchu. Nasi eksperci dobiorą najlepszy plan routingu.",
    "defaultLocations": [
      {
        "city": "Londyn",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapur",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "Nowy Jork",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubaj",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "th": {
    "heroBadge": "บริการเสียง (VOICE)",
    "heroTitle": "เสริมพลังการสื่อสารทางธุรกิจด้วยโซลูชันเสียงขั้นสูง",
    "heroDesc": "โซลูชันเสียงที่มีความเสถียรและปรับขนาดได้ เพื่อการสื่อสารที่คมชัด การเชื่อมต่อระดับโลก และการเติบโตทางธุรกิจที่ยั่งยืน",
    "getStarted": "เริ่มต้นใช้งาน",
    "contactUs": "ติดต่อเรา",
    "coreServiceBadge": "บริการหลักของเรา",
    "coreServiceTitle": "โซลูชันเสียงที่ออกแบบมาเพื่อรองรับทุกกลุ่มอุตสาหกรรม",
    "coreServiceSubtitle": "โครงสร้างพื้นฐานโทรคมนาคมแบบโมดูลาร์สำหรับเสียง ข้อความ และหมายเลขเสมือนที่มีความพร้อมใช้งานสูง",
    "services": {
      "wholesale": {
        "title": "บริการเสียงขายส่ง (Wholesale Voice)",
        "description": "บริการต่อสายสัญญาณเสียงระหว่างประเทศด้วยเส้นทางที่ปรับแต่งเพื่อคุณภาพเสียงระดับ HD ความครอบคลุม และต้นทุนที่คุ้มค่า",
        "bullet1": "การเชื่อมต่อเสียงระดับ HD คุณภาพสูง",
        "bullet2": "ตัวเลือกเส้นทางการโทรที่ยืดหยุ่น",
        "bullet3": "ครอบคลุมเครือข่ายทั่วโลก",
        "learnMore": "เรียนรู้เพิ่มเติม"
      },
      "aiVoice": {
        "title": "AI ระบบเสียงอัจฉริยะ (AI Voice)",
        "description": "ใช้งานตัวแทนเสียง AI เชิงสนทนา ระบบตอบรับอัตโนมัติ IVR อัจฉริยะ และการโต้ตอบด้วยเสียงอัตโนมัติไปยังอุปกรณ์ทั่วโลก",
        "bullet1": "ตัวแทนเสียง AI เชิงสนทนาที่เป็นธรรมชาติ",
        "bullet2": "การกำหนดเส้นทาง IVR ด้วยเสียงอัจฉริยะ",
        "bullet3": "ส่งสัญญาณตรงผ่านผู้ให้บริการระดับโลก",
        "learnMore": "เรียนรู้เพิ่มเติม"
      },
      "virtualNumbers": {
        "title": "หมายเลขโทรศัพท์เสมือน (DID)",
        "description": "รวมบริการเสียง, SMS, WhatsApp และการยืนยันตัวตนไว้ในชุด REST API ที่ทันสมัยและใช้งานง่ายสำหรับนักพัฒนา",
        "bullet1": "จัดสรรหมายเลข DID ได้ในทันที",
        "bullet2": "ครอบคลุมมากกว่า 100 ประเทศทั่วโลก",
        "bullet3": "รองรับการโทรและการส่ง SMS แบบสองทาง",
        "learnMore": "เรียนรู้เพิ่มเติม"
      }
    },
    "whyChooseBadge": "ทำไมต้องเลือก INET VOICE",
    "whyChooseTitle": "ทำไมจึงควรเลือกใช้บริการเสียงของเรา",
    "whyChooseSubtitle": "สร้างขึ้นเพื่อการโทรที่คมชัดไร้เสียงรบกวน การกำหนดเส้นทางอัจฉริยะ และประสิทธิภาพที่เชื่อถือได้ในระดับสากล",
    "whyCards": {
      "secure": {
        "title": "การสื่อสารที่ปลอดภัยและวางใจได้",
        "description": "โครงสร้างพื้นฐานของเรารองรับการโทรธุรกิจที่มีความปลอดภัยสูง พร้อมความเสถียรระดับผู้ให้บริการเครือข่าย"
      },
      "cloud": {
        "title": "โครงสร้างพื้นฐานเสียงบนระบบคลาวด์",
        "description": "ใช้ประโยชน์จากโซลูชันเสียงบนคลาวด์ที่ช่วยลดค่าใช้จ่ายด้านฮาร์ดแวร์ พร้อมความยืดหยุ่นในการขยายระบบ"
      },
      "api": {
        "title": "การรวม API สำหรับระบบเสียง",
        "description": "ในฐานะผู้ให้บริการ API ที่เชื่อถือได้ เราช่วยเพิ่มฟังก์ชันการโทรลงในเว็บไซต์ แอปมือถือ และระบบ CRM ได้อย่างง่ายดาย"
      },
      "connectivity": {
        "title": "การเชื่อมต่อระบบเสียงทั่วโลก",
        "description": "ติดต่อสื่อสารกับลูกค้าและทีมงานในหลายประเทศด้วยคุณภาพเสียงคมชัดระดับคริสตัลและเครือข่ายที่เสถียร"
      },
      "automated": {
        "title": "บริการเสียงอัตโนมัติ",
        "description": "ยกระดับประสบการณ์ของลูกค้าด้วยระบบ IVR การโอนสายอัตโนมัติ และการแจ้งเตือนด้วยเสียง"
      }
    },
    "howItWorksBadge": "ขั้นตอนการทำงาน",
    "howItWorksTitle": "เชื่อมต่อทุกสายการโทรด้วยการกำหนดเส้นทางอัจฉริยะ",
    "howItWorksSubtitle": "เครือข่ายเสียงระดับโลกของเราเชื่อมโยงธุรกิจเข้ากับเส้นทางผู้ให้บริการที่เชื่อถือได้ เพื่อส่งมอบการสื่อสารที่คมชัดในทุกระดับ",
    "steps": {
      "step1": {
        "step": "01",
        "title": "ระบบธุรกิจ",
        "description": "เชื่อมต่อ SBC, ตู้สาขา PBX, คอลเซ็นเตอร์ หรือแอปพลิเคชันของคุณผ่าน SIP Trunking ที่มีความปลอดภัยสูง",
        "subtext": "ข้อมูลประจำตัว SIP • การตรวจสอบสิทธิ์ IP"
      },
      "step2": {
        "step": "02",
        "title": "เครือข่ายหลัก iNet Global",
        "description": "ระบบกำหนดเส้นทางอัจฉริยะจะเลือกเส้นทางที่มีความหน่วงต่ำที่สุดและมีอัตรา ASR/ACD สำเร็จสูงสุดโดยอัตโนมัติ",
        "subtext": "ข้อมูลประจำตัว SIP • การตรวจสอบสิทธิ์ IP"
      },
      "step3": {
        "step": "03",
        "title": "เส้นทางผู้ให้บริการระดับโลก",
        "description": "เชื่อมต่อตรงกับผู้ให้บริการ Tier-1 ในกว่า 190 ประเทศ พร้อมเส้นทางสำรองที่ปลอดภัย",
        "subtext": "ข้อมูลประจำตัว SIP • การตรวจสอบสิทธิ์ IP"
      },
      "step4": {
        "step": "04",
        "title": "ปลายทางลูกค้า",
        "description": "คุณภาพเสียงระดับ HD ที่คมชัดส่งตรงถึงโทรศัพท์มือถือ ซอฟต์โฟน หรือหมายเลขโทรศัพท์พื้นฐาน (PSTN)",
        "subtext": "ข้อมูลประจำตัว SIP • การตรวจสอบสิทธิ์ IP"
      }
    },
    "ctaBadge": "มาร่วมสร้างเครือข่ายเสียงของคุณ",
    "ctaTitle": "ขับเคลื่อนธุรกิจของคุณด้วยการเชื่อมต่อเสียงระดับโลกที่วางใจได้",
    "ctaSubtitle": "บอกให้เราทราบถึงประเทศปลายทาง ปริมาณการใช้งาน และมาตรฐานคุณภาพที่ต้องการ ทีมผู้เชี่ยวชาญจะจัดสรรแผนที่ดีที่สุดให้คุณ",
    "defaultLocations": [
      {
        "city": "ลอนดอน",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "สิงคโปร์",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "นิวยอร์ก",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "ดูไบ",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "tl": {
    "heroBadge": "SERBISYO SA BOSES (VOICE)",
    "heroTitle": "Palakasin ang Komunikasyon sa Negosyo gamit ang mga Solusyon sa Boses",
    "heroDesc": "Maaasahan at nasusukat na mga solusyon sa boses para sa malinaw na komunikasyon, pandaigdigang koneksyon, at lumalagong mga negosyo.",
    "getStarted": "Magsimula Na",
    "contactUs": "Makipag-ugnayan sa Amin",
    "coreServiceBadge": "ANG AMING PANGUNAHING SERBISYO",
    "coreServiceTitle": "Mga solusyon sa boses na binuo para sa bawat industriya",
    "coreServiceSubtitle": "Modular na imprastraktura ng telekomunikasyon na idinisenyo para sa high-availability na boses, pagmemensahe, at mga virtual na numero.",
    "services": {
      "wholesale": {
        "title": "Wholesale Voice",
        "description": "Pandaigdigang terminasyon ng boses na may mga opsyon sa ruta na idinisenyo para sa kalidad ng audio, saklaw, at kahusayan sa gastos.",
        "bullet1": "Mataas na kalidad ng mga koneksyon sa boses",
        "bullet2": "Mga nababagong opsyon sa ruta",
        "bullet3": "Pandaigdigang saklaw ng network",
        "learnMore": "Alamin ang higit pa"
      },
      "aiVoice": {
        "title": "AI Voice Solutions",
        "description": "Maghatid ng mga conversational AI voice agent, matalinong IVR, at automated na pakikipag-ugnayan sa boses sa buong mundo.",
        "bullet1": "Conversational AI voice agents",
        "bullet2": "Matalinong pagruruta ng IVR sa boses",
        "bullet3": "Pandaigdigang terminasyon sa carrier",
        "learnMore": "Alamin ang higit pa"
      },
      "virtualNumbers": {
        "title": "Virtual Number (DID)",
        "description": "Pag-isahin ang Boses, SMS, WhatsApp, at Verification sa isang developer-friendly na REST API suite para sa mabilisang deployment.",
        "bullet1": "Mabilisang paglalaan ng DID number",
        "bullet2": "Saklaw sa mahigit 100 bansa",
        "bullet3": "Suporta para sa two-way call at SMS",
        "learnMore": "Alamin ang higit pa"
      }
    },
    "whyChooseBadge": "BAKIT PILIIN ANG AMING INET VOICE SOLUTION",
    "whyChooseTitle": "Bakit Piliin ang Aming mga Solusyon sa Boses",
    "whyChooseSubtitle": "Binuo para sa malinaw na koneksyon, flexible na pagruruta, at maaasahang pagganap sa boses sa mga pandaigdigang merkado.",
    "whyCards": {
      "secure": {
        "title": "Ligtas at Maaasahang Komunikasyon",
        "description": "Ang aming imprastraktura ay sumusuporta sa secure na komunikasyon sa boses na may mataas na availability at carrier-grade na kalidad."
      },
      "cloud": {
        "title": "Imprastrakturang Nakabatay sa Cloud",
        "description": "Samantalahin ang flexible na cloud voice solutions na nag-aalis ng mamahaling hardware habang nagbibigay ng scalability at tipid sa gastos."
      },
      "api": {
        "title": "Pagsasama ng Voice API",
        "description": "Bilang pinagkakatiwalaang provider ng Voice API, tinutulungan namin ang mga negosyo na isama ang pagtawag sa mga website, app, at CRM."
      },
      "connectivity": {
        "title": "Pandaigdigang Koneksyon sa Boses",
        "description": "Nagbibigay-daan sa mga kumpanya na kumonekta sa mga customer sa iba't ibang bansa na may malinaw na kalidad ng boses."
      },
      "automated": {
        "title": "Awtomatikong Serbisyo sa Boses",
        "description": "Pahusayin ang karanasan ng customer sa pamamagitan ng mga IVR system, automated na pagruruta ng tawag, at mga paalala sa boses."
      }
    },
    "howItWorksBadge": "KUNG PAANO ITO GUMAGANA",
    "howItWorksTitle": "Pagkonekta sa Bawat Tawag sa Pamamagitan ng Matalinong Pagruruta",
    "howItWorksSubtitle": "Ang aming pandaigdigang network sa boses ay nagkokonekta sa mga negosyo sa maaasahang mga ruta ng carrier para sa pare-parehong kalidad.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Negosyo",
        "description": "Ikonekta ang iyong SBC, PBX, contact center o application sa pamamagitan ng secure na SIP.",
        "subtext": "Mga kredensyal ng SIP • Pagpapatunay ng IP"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global Core Network",
        "description": "Pinipili ng matalinong routing engine ang ruta ng carrier na may pinakamababang latency at pinakamataas na ASR/ACD.",
        "subtext": "Mga kredensyal ng SIP • Pagpapatunay ng IP"
      },
      "step3": {
        "step": "03",
        "title": "Pandaigdigang Ruta ng Carrier",
        "description": "Direktang Tier-1 carrier interconnects sa 190+ bansa na may redundant na failover path.",
        "subtext": "Mga kredensyal ng SIP • Pagpapatunay ng IP"
      },
      "step4": {
        "step": "04",
        "title": "Huling Kustomer",
        "description": "Napakalinaw na kalidad ng boses na naihahatid sa mga handset, softphone, o destinasyon ng PSTN.",
        "subtext": "Mga kredensyal ng SIP • Pagpapatunay ng IP"
      }
    },
    "ctaBadge": "BUUIN NATIN ANG IYONG VOICE NETWORK",
    "ctaTitle": "Palakasin ang Iyong Negosyo gamit ang Maaasahang Pandaigdigang Koneksyon sa Boses",
    "ctaSubtitle": "Sabihin sa amin kung saan mo kailangang kumonekta at ang iyong volume ng tawag. Tutulungan ka ng aming team na buuin ang perpektong plano.",
    "defaultLocations": [
      {
        "city": "London",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "bn": {
    "heroBadge": "ভয়েস সেবা",
    "heroTitle": "ভয়েস সমাধানের মাধ্যমে ব্যবসায়িক যোগাযোগকে শক্তিশালী করুন",
    "heroDesc": "পরিষ্কার যোগাযোগ, বিশ্বব্যাপী সংযোগ এবং ক্রমবর্ধমান ব্যবসার জন্য নির্ভরযোগ্য এবং স্কেলযোগ্য ভয়েস সমাধান।",
    "getStarted": "শুরু করুন",
    "contactUs": "আমাদের সাথে যোগাযোগ করুন",
    "coreServiceBadge": "আমাদের মূল পরিষেবা",
    "coreServiceTitle": "প্রতিটি শিল্পের জন্য বিশেষভাবে নির্মিত ভয়েস সমাধান",
    "coreServiceSubtitle": "উচ্চ উপলব্ধতার ভয়েস, মেসেজিং এবং ভার্চুয়াল নম্বরের জন্য তৈরি মডুলার টেলিকম অবকাঠামো।",
    "services": {
      "wholesale": {
        "title": "হোলসেল ভয়েস (Wholesale Voice)",
        "description": "আন্তর্জাতিক কল সমাপ্তি পরিষেবা যা কল গুণমান, কভারেজ এবং সাশ্রয়ী খরচের নিখুঁত সমন্বয়ে তৈরি।",
        "bullet1": "উচ্চ মানের এইচডি ভয়েস সংযোগ",
        "bullet2": "নমনীয় রাউটিং বিকল্প",
        "bullet3": "ব্যাপক বিশ্বব্যাপী নেটওয়ার্ক কভারেজ",
        "learnMore": "আরও জানুন"
      },
      "aiVoice": {
        "title": "এআই ভয়েস সমাধান",
        "description": "সংলাপভিত্তিক এআই ভয়েস এজেন্ট, স্মার্ট আইভিআর এবং স্বয়ংক্রিয় ভয়েস ইন্টারঅ্যাকশন বিশ্বজুড়ে মোবাইল হ্যান্ডসেটে পৌঁছে দিন।",
        "bullet1": "সংলাপভিত্তিক এআই ভয়েস এজেন্ট",
        "bullet2": "বুদ্ধিমান ভয়েস আইভিআর রাউটিং",
        "bullet3": "গ্লোবাল ক্যারিয়ার টার্মিনেশন",
        "learnMore": "আরও জানুন"
      },
      "virtualNumbers": {
        "title": "ভার্চুয়াল নম্বর (DID)",
        "description": "ভয়েস, এসএমএস, হোয়াটসঅ্যাপ এবং যাচাইকরণকে একটি সহজ এবং আধুনিক রেস্ট এপিআই স্যুটে একীভূত করুন।",
        "bullet1": "তাত্ক্ষণিক ডিআইডি নম্বর বরাদ্দ",
        "bullet2": "১০০টিরও বেশি দেশে কভারেজ",
        "bullet3": "দ্বিমুখী কল এবং এসএমএস সহায়তা",
        "learnMore": "আরও জানুন"
      }
    },
    "whyChooseBadge": "কেন আমাদের INET VOICE সমাধান বেছে নেবেন",
    "whyChooseTitle": "কেন আমাদের ভয়েস সমাধানগুলো বেছে নেবেন",
    "whyChooseSubtitle": "স্পষ্ট সংযোগ, নমনীয় রাউটিং এবং আন্তর্জাতিক বাজারে নির্ভরযোগ্য টেলিফোনি কর্মক্ষমতার জন্য নির্মিত।",
    "whyCards": {
      "secure": {
        "title": "নিরাপদ ও নির্ভরযোগ্য যোগাযোগ",
        "description": "আমাদের অবকাঠামো উচ্চ উপলব্ধতা এবং ক্যারিয়ার-গ্রেড নির্ভরযোগ্যতার সাথে সুরক্ষিত ভয়েস যোগাযোগ সমর্থন করে।"
      },
      "cloud": {
        "title": "ক্লাউড-ভিত্তিক ভয়েস অবকাঠামো",
        "description": "নমনীয় ক্লাউড ভয়েস সমাধান ব্যবহার করুন যা ব্যয়বহুল হার্ডওয়্যারের প্রয়োজনীয়তা দূর করে স্কেলেবিলিটি প্রদান করে।"
      },
      "api": {
        "title": "ভয়েস এপিআই ইন্টিগ্রেশন",
        "description": "একটি বিশ্বস্ত এপিআই প্রদানকারী হিসেবে আমরা ওয়েবসাইট, অ্যাপ এবং সিআরএম-এ কলিং সুবিধা যুক্ত করতে সহায়তা করি।"
      },
      "connectivity": {
        "title": "গ্লোবাল ভয়েস কানেক্টিভিটি",
        "description": "ক্রিস্টাল-ক্লিয়ার ভয়েস কোয়ালিটি এবং স্থিতিশীল নেটওয়ার্কের মাধ্যমে একাধিক দেশের গ্রাহকদের সাথে নিরবচ্ছিন্ন সংযোগ স্থাপন করুন।"
      },
      "automated": {
        "title": "স্বয়ংক্রিয় ভয়েস পরিষেবা",
        "description": "আইভিআর সিস্টেম, স্বয়ংক্রিয় কল রাউটিং এবং ভয়েস নোটিফিকেশনের মাধ্যমে গ্রাহক সন্তুষ্টি উল্লেখযোগ্যভাবে বৃদ্ধি করুন।"
      }
    },
    "howItWorksBadge": "এটি যেভাবে কাজ করে",
    "howItWorksTitle": "বুদ্ধিমান রাউটিংয়ের মাধ্যমে প্রতিটি কলকে নির্ভুলভাবে সংযুক্ত করা",
    "howItWorksSubtitle": "আমাদের গ্লোবাল ভয়েস নেটওয়ার্ক ব্যবসাগুলোকে বিশ্বস্ত ক্যারিয়ার রুটের সাথে সংযুক্ত করে বৃহৎ পরিসরে স্পষ্ট যোগাযোগ নিশ্চিত করে।",
    "steps": {
      "step1": {
        "step": "০১",
        "title": "ব্যবসায়িক সংযোগ",
        "description": "সুরক্ষিত এসআইপি (SIP) ট্রাঙ্কের মাধ্যমে আপনার এসবিসি, পিবিএক্স বা যোগাযোগ অ্যাপ্লিকেশন সংযুক্ত করুন।",
        "subtext": "SIP শংসাপত্র • আইপি প্রমাণীকরণ"
      },
      "step2": {
        "step": "০২",
        "title": "আইনেট গ্লোবাল কোর নেটওয়ার্ক",
        "description": "বুদ্ধিমান রাউটিং ইঞ্জিন সর্বনিম্ন বিলম্ব এবং সর্বোচ্চ এএসআর/এসিডি সাফল্যের রুট নির্বাচন করে।",
        "subtext": "SIP শংসাপত্র • আইপি প্রমাণীকরণ"
      },
      "step3": {
        "step": "০৩",
        "title": "গ্লোবাল ক্যারিয়ার রুট",
        "description": "১৯০টিরও বেশি দেশে সরাসরি টিয়ার-১ ক্যারিয়ার ইন্টারকানেক্ট রিডান্ডেন্ট ব্যাকআপ পাথের সাথে।",
        "subtext": "SIP শংসাপত্র • আইপি প্রমাণীকরণ"
      },
      "step4": {
        "step": "০৪",
        "title": "চূড়ান্ত গ্রাহক",
        "description": "ক্রিস্টাল-ক্লিয়ার এইচডি অডিও কোয়ালিটি সরাসরি মোবাইল, সফটফোন বা ল্যান্ডলাইনে পৌঁছে যায়।",
        "subtext": "SIP শংসাপত্র • আইপি প্রমাণীকরণ"
      }
    },
    "ctaBadge": "আসুন আপনার ভয়েস নেটওয়ার্ক তৈরি করি",
    "ctaTitle": "বিশ্বজুড়ে নির্ভরযোগ্য ভয়েস কানেক্টিভিটির সাথে আপনার ব্যবসা সম্প্রসারণ করুন",
    "ctaSubtitle": "আপনার কাঙ্ক্ষিত গন্তব্য এবং আনুমানিক কল ভলিউম আমাদের জানান। আমাদের প্রযুক্তি দল আপনার জন্য সেরা রাউটিং পরিকল্পনা তৈরি করবে।",
    "defaultLocations": [
      {
        "city": "লন্ডন",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "সিঙ্গাপুর",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "নিউ ইয়র্ক",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "দুবাই",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "ta": {
    "heroBadge": "குரல் சேவை (VOICE)",
    "heroTitle": "நவீன குரல் தீர்வுகளுடன் வணிகத் தகவல்தொடர்பை மேம்படுத்துங்கள்",
    "heroDesc": "தெளிவான தகவல்தொடர்பு, உலகளாவிய இணைப்பு மற்றும் வளர்ந்து வரும் வணிகங்களுக்கான நம்பகமான குரல் தீர்வுகள்.",
    "getStarted": "தொடங்குங்கள்",
    "contactUs": "எங்களைத் தொடர்பு கொள்ளுங்கள்",
    "coreServiceBadge": "எங்களின் முக்கிய சேவை",
    "coreServiceTitle": "ஒவ்வொரு தொழில்துறைக்கும் கட்டமைக்கப்பட்ட குரல் தீர்வுகள்",
    "coreServiceSubtitle": "உயர் கிடைக்கும் தன்மை கொண்ட குரல், செய்தி மற்றும் மெய்நிகர் எண்களுக்காக வடிவமைக்கப்பட்ட தொலைத்தொடர்பு உள்கட்டமைப்பு.",
    "services": {
      "wholesale": {
        "title": "மொத்த குரல் சேவை (Wholesale Voice)",
        "description": "ஒலி தரம், உலகளாவிய கவரேஜ் மற்றும் குறைந்த செலவை மையமாகக் கொண்ட சர்வதேச குரல் அழைப்பு டெர்மினேஷன்.",
        "bullet1": "உயர்தர HD குரல் இணைப்புகள்",
        "bullet2": "நெகிழ்வான வழித்தட தேர்வுகள்",
        "bullet3": "உலகளாவிய நெட்வொர்க் கவரேஜ்",
        "learnMore": "மேலும் அறிய"
      },
      "aiVoice": {
        "title": "AI குரல் தீர்வுகள் (AI Voice)",
        "description": "உரையாடல் AI வாய்ஸ் ஏஜெண்டுகள், ஸ்மார்ட் IVR மற்றும் தானியங்கி குரல் தொடர்புகளை உலகளவில் வழங்குங்கள்.",
        "bullet1": "இயற்கையான உரையாடல் AI முகவர்கள்",
        "bullet2": "அறிவார்ந்த IVR குரல் ரூட்டிங்",
        "bullet3": "உலகளாவிய தொலைத்தொடர்பு டெர்மினேஷன்",
        "learnMore": "மேலும் அறிய"
      },
      "virtualNumbers": {
        "title": "மெய்நிகர் எண்கள் (DID)",
        "description": "குரல், SMS, WhatsApp மற்றும் சரிபார்ப்பை டெவலப்பர்களுக்கு ஏற்ற நவீன REST API தொகுப்பில் ஒருங்கிணைக்கவும்.",
        "bullet1": "உடனடி DID எண் ஒதுக்கீடு",
        "bullet2": "100+ நாடுகளில் எண்கள் கிடைக்கும் தன்மை",
        "bullet3": "இருவழி அழைப்பு & SMS ஆதரவு",
        "learnMore": "மேலும் அறிய"
      }
    },
    "whyChooseBadge": "எங்கள் INET VOICE தீர்வை ஏன் தேர்வு செய்ய வேண்டும்",
    "whyChooseTitle": "எங்கள் குரல் தீர்வுகளை ஏன் தேர்வு செய்ய வேண்டும்",
    "whyChooseSubtitle": "தெளிவான இணைப்புகள், நெகிழ்வான ரூட்டிங் மற்றும் உலகளாவிய சந்தைகளில் நம்பகமான செயல்திறனுக்காக உருவாக்கப்பட்டது.",
    "whyCards": {
      "secure": {
        "title": "பாதுகாப்பான மற்றும் நம்பகமான தொடர்பு",
        "description": "எங்கள் உள்கட்டமைப்பு உயர் கிடைக்கும் தன்மை மற்றும் கேரியர்-கிரேடு நம்பகத்தன்மையுடன் பாதுகாப்பான குரல் அழைப்புகளை ஆதரிக்கிறது."
      },
      "cloud": {
        "title": "கிளவுட் அடிப்படையிலான உள்கட்டமைப்பு",
        "description": "விலையுயர்ந்த வன்பொருளைத் தவிர்த்து அதிக சேமிப்பையும் அளவிடுதலையும் தரும் கிளவுட் குரல் தீர்வுகளைப் பயன்படுத்துங்கள்."
      },
      "api": {
        "title": "குரல் API ஒருங்கிணைப்பு",
        "description": "நம்பகமான API வழங்குநராக இணையதளங்கள், பயன்பாடுகள் மற்றும் CRM ஆகியவற்றில் அழைப்பு திறன்களை எளிதாக இணைக்கிறோம்."
      },
      "connectivity": {
        "title": "உலகளாவிய குரல் இணைப்பு",
        "description": "தெளிவான ஆடியோ தரம் மற்றும் நிலையான நெட்வொர்க் மூலம் பல நாடுகளில் உள்ள வாடிக்கையாளர்களுடன் தடையின்றி இணையுங்கள்."
      },
      "automated": {
        "title": "தானியங்கி குரல் சேவைகள்",
        "description": "IVR அமைப்புகள், தானியங்கி அழைப்பு ரூட்டிங் மற்றும் குரல் நினைவூட்டல்கள் மூலம் வாடிக்கையாளர் திருப்தியை அதிகரிக்கவும்."
      }
    },
    "howItWorksBadge": "இது எவ்வாறு செயல்படுகிறது",
    "howItWorksTitle": "அறிவார்ந்த ரூட்டிங் மூலம் ஒவ்வொரு அழைப்பையும் துல்லியமாக இணைத்தல்",
    "howItWorksSubtitle": "எங்கள் உலகளாவிய குரல் நெட்வொர்க் வணிகங்களை நம்பகமான கேரியர் வழிகளுடன் இணைத்து உயர்தர ஒலியை வழங்குகிறது.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "வணிக நுழைவாயில்",
        "description": "பாதுகாப்பான SIP வழியாக உங்கள் SBC, PBX, தொடர்பு மையம் அல்லது பயன்பாட்டை இணைக்கவும்.",
        "subtext": "SIP சான்றுகள் • IP அங்கீகாரம்"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global மைய நெட்வொர்க்",
        "description": "அறிவார்ந்த ரூட்டிங் இயந்திரம் மிகக் குறைந்த தாமதம் மற்றும் அதிக வெற்றி விகிதம் கொண்ட பாதையைத் தேர்ந்தெடுக்கிறது.",
        "subtext": "SIP சான்றுகள் • IP அங்கீகாரம்"
      },
      "step3": {
        "step": "03",
        "title": "உலகளாவிய கேரியர் வழிகள்",
        "description": "190+ நாடுகளில் உள்ள நேரடி Tier-1 கேரியர் இணைப்புகள் மாற்று காப்புப் பாதைகளுடன் வழங்கப்படுகின்றன.",
        "subtext": "SIP சான்றுகள் • IP அங்கீகாரம்"
      },
      "step4": {
        "step": "04",
        "title": "இறுதிப் பயனர்",
        "description": "படிகம் போன்ற தெளிவான HD ஆடியோ தரம் மொபைல்கள், சாஃப்ட்போன்கள் அல்லது லேண்ட்லைன்களுக்கு சென்றடைகிறது.",
        "subtext": "SIP சான்றுகள் • IP அங்கீகாரம்"
      }
    },
    "ctaBadge": "உங்கள் குரல் நெட்வொர்க்கை உருவாக்குவோம்",
    "ctaTitle": "நம்பகமான உலகளாவிய குரல் இணைப்புடன் உங்கள் வணிகத்தை மேம்படுத்துங்கள்",
    "ctaSubtitle": "உங்களுக்குத் தேவையான நாடுகள் மற்றும் அழைப்பு அளவை எங்களிடம் கூறுங்கள். எங்கள் குழு சிறந்த திட்டத்தை அமைக்கும்.",
    "defaultLocations": [
      {
        "city": "லண்டன்",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "சிங்கப்பூர்",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "நியூயார்க்",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "துபாய்",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "te": {
    "heroBadge": "వాయిస్ సేవ (VOICE)",
    "heroTitle": "అధునాతన వాయిస్ సొల్యూషన్స్‌తో వ్యాపార కమ్యూనికేషన్‌ను బలోపేతం చేయండి",
    "heroDesc": "స్పష్టమైన కమ్యూనికేషన్, గ్లోబల్ కనెక్టివిటీ మరియు వేగంగా అభివృద్ధి చెందుతున్న వ్యాపారాల కోసం నమ్మకమైన వాయిస్ సొల్యూషన్స్.",
    "getStarted": "ప్రారంభించండి",
    "contactUs": "మమ్మల్ని సంప్రదించండి",
    "coreServiceBadge": "మా ప్రధాన సేవ",
    "coreServiceTitle": "ప్రతి పరిశ్రమ కోసం ప్రత్యేకంగా రూపొందించబడిన వాయిస్ పరిష్కారాలు",
    "coreServiceSubtitle": "అధిక లభ్యత గల వాయిస్, మెసేజింగ్ మరియు వర్చువల్ నంబర్ల కోసం రూపొందించబడిన మాడ్యులర్ టెలికాం మౌలిక సదుపాయాలు.",
    "services": {
      "wholesale": {
        "title": "హోల్‌సేల్ వాయిస్ (Wholesale Voice)",
        "description": "ఆడియో నాణ్యత, ప్రపంచవ్యాప్త కవరేజ్ మరియు తక్కువ ఖర్చు ఆధారంగా ఆప్టిమైజ్ చేయబడిన అంతర్జాతీయ వాయిస్ టెర్మినేషన్.",
        "bullet1": "అధిక నాణ్యత గల HD వాయిస్ కనెక్షన్‌లు",
        "bullet2": "సౌకర్యవంతమైన రూటింగ్ ఎంపికలు",
        "bullet3": "ప్రపంచవ్యాప్త నెట్‌వర్క్ కవరేజ్",
        "learnMore": "మరింత తెలుసుకోండి"
      },
      "aiVoice": {
        "title": "AI వాయిస్ సొల్యూషన్స్",
        "description": "సంభాషణాత్మక AI వాయిస్ ఏజెంట్లు, స్మార్ట్ IVR మరియు ఆటోమేటెడ్ స్పీచ్ ఇంటరాక్షన్‌లను ప్రపంచవ్యాప్తంగా మొబైల్‌లకు అందించండి.",
        "bullet1": "సహజమైన సంభాషణాత్మక AI ఏజెంట్లు",
        "bullet2": "ఇంటెలిజెంట్ వాయిస్ IVR రూటింగ్",
        "bullet3": "గ్లోబల్ క్యారియర్ టెర్మినేషన్",
        "learnMore": "మరింత తెలుసుకోండి"
      },
      "virtualNumbers": {
        "title": "వర్చువల్ ఫోన్ నంబర్లు (DID)",
        "description": "వాయిస్, SMS, WhatsApp మరియు ధృవీకరణను డెవలపర్-స్నేహపూర్వక REST API సూట్‌లో ఏకీకృతం చేయండి.",
        "bullet1": "తక్షణ DID నంబర్ కేటాయింపు",
        "bullet2": "100 కంటే ఎక్కువ దేశాలలో కవరేజ్",
        "bullet3": "ద్వైపాక్షిక కాల్ & SMS మద్దతు",
        "learnMore": "మరింత తెలుసుకోండి"
      }
    },
    "whyChooseBadge": "మా INET VOICE పరిష్కారాన్ని ఎందుకు ఎంచుకోవాలి",
    "whyChooseTitle": "మా వాయిస్ పరిష్కారాలను ఎందుకు ఎంచుకోవాలి",
    "whyChooseSubtitle": "స్పష్టమైన కనెక్షన్‌లు, ఫ్లెక్సిబుల్ రూటింగ్ మరియు గ్లోబల్ మార్కెట్‌లలో స్థిరమైన పనితీరు కోసం రూపొందించబడింది.",
    "whyCards": {
      "secure": {
        "title": "సురక్షితమైన మరియు నమ్మకమైన కమ్యూనికేషన్",
        "description": "మా మౌలిక సదుపాయాలు క్యారియర్-గ్రేడ్ విశ్వసనీయతతో సురక్షితమైన వ్యాపార వాయిస్ కాల్స్‌కు మద్దతు ఇస్తాయి."
      },
      "cloud": {
        "title": "క్లౌడ్ ఆధారిత వాయిస్ మౌలిక సదుపాయాలు",
        "description": "ఖరీదైన హార్డ్‌వేర్ పరికరాల అవసరం లేకుండా స్కేలబిలిటీ మరియు పొదుపును అందించే క్లౌడ్ వాయిస్ సొల్యూషన్స్."
      },
      "api": {
        "title": "వాయిస్ API ఇంటిగ్రేషన్",
        "description": "విశ్వసనీయ API ప్రొవైడర్‌గా వెబ్‌సైట్‌లు, యాప్‌లు మరియు CRMలలో కాలింగ్ ఫీచర్లను సులభంగా అనుసంధానించవచ్చు."
      },
      "connectivity": {
        "title": "గ్లోబల్ వాయిస్ కనెక్టివిటీ",
        "description": "క్రిస్టల్-క్లియర్ ఆడియో నాణ్యత మరియు స్థిరమైన నెట్‌వర్క్‌తో అనేక దేశాలలోని కస్టమర్‌లతో సులభంగా మాట్లాడండి."
      },
      "automated": {
        "title": "ఆటోమేటెడ్ వాయిస్ సేవలు",
        "description": "IVR సిస్టమ్‌లు, ఆటోమేటిక్ కాల్ రూటింగ్ మరియు వాయిస్ రిమైండర్‌ల ద్వారా కస్టమర్ సంతృప్తిని పెంచండి."
      }
    },
    "howItWorksBadge": "ఇది ఎలా పనిచేస్తుంది",
    "howItWorksTitle": "ఇంటెలిజెంట్ రూటింగ్ ద్వారా ప్రతి కాల్‌ను ఖచ్చితంగా కనెక్ట్ చేయడం",
    "howItWorksSubtitle": "మా గ్లోబల్ వాయిస్ నెట్‌వర్క్ వ్యాపారాలను నమ్మకమైన క్యారియర్ మార్గాలకు అనుసంధానించి స్పష్టమైన సంభాషణను అందిస్తుంది.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "వ్యాపార వ్యవస్థ",
        "description": "సురక్షితమైన SIP ట్రంకింగ్ ద్వారా మీ SBC, PBX, కాల్ సెంటర్ లేదా అప్లికేషన్‌ను కనెక్ట్ చేయండి.",
        "subtext": "SIP ఆధారాలు • IP ప్రమాణీకరణ"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global కోర్ నెట్‌వర్క్",
        "description": "ఇంటెలిజెంట్ రూటింగ్ ఇంజిన్ స్వయంచాలకంగా అతి తక్కువ జాప్యం మరియు అత్యధిక ASR/ACD గల మార్గాన్ని ఎంచుకుంటుంది.",
        "subtext": "SIP ఆధారాలు • IP ప్రమాణీకరణ"
      },
      "step3": {
        "step": "03",
        "title": "గ్లోబల్ క్యారియర్ రూట్లు",
        "description": "190 కంటే ఎక్కువ దేశాల్లోని డైరెక్ట్ Tier-1 క్యారియర్ ఇంటర్‌కనెక్ట్‌లు బ్యాకప్ మార్గాలతో నిరంతరాయంగా పనిచేస్తాయి.",
        "subtext": "SIP ఆధారాలు • IP ప్రమాణీకరణ"
      },
      "step4": {
        "step": "04",
        "title": "చివరి వినియోగదారు",
        "description": "క్రిస్టల్-క్లియర్ HD ఆడియో నాణ్యత నేరుగా మొబైల్స్, సాఫ్ట్‌ఫోన్‌లు లేదా ల్యాండ్‌లైన్‌లకు అందించబడుతుంది.",
        "subtext": "SIP ఆధారాలు • IP ప్రమాణీకరణ"
      }
    },
    "ctaBadge": "మీ వాయిస్ నెట్‌వర్క్‌ను నిర్మిద్దాం",
    "ctaTitle": "విశ్వసనీయమైన గ్లోబల్ వాయిస్ కనెక్టివిటీతో మీ వ్యాపారాన్ని విస్తరించండి",
    "ctaSubtitle": "మీకు అవసరమైన గమ్యస్థానాలు మరియు కాల్ వాల్యూమ్‌లను మాకు తెలియజేయండి. మా నిపుణుల బృందం సరైన ప్లాన్‌ను రూపొందిస్తుంది.",
    "defaultLocations": [
      {
        "city": "లండన్",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "సింగపూర్",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "న్యూయార్క్",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "దుబాయ్",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "mr": {
    "heroBadge": "व्हॉइस सेवा (VOICE)",
    "heroTitle": "आधुनिक व्हॉइस सोल्यूशन्ससह व्यावसायिक संवाद अधिक सक्षम करा",
    "heroDesc": "स्पष्ट संवाद, जागतिक कनेक्टिव्हिटी आणि वेगाने वाढणाऱ्या व्यवसायांसाठी विश्वासार्ह आणि स्केलेबल व्हॉइस सोल्यूशन्स.",
    "getStarted": "सुरू करा",
    "contactUs": "आमच्याशी संपर्क साधा",
    "coreServiceBadge": "आमची मुख्य सेवा",
    "coreServiceTitle": "प्रत्येक उद्योगासाठी तयार केलेले व्यावसायिक व्हॉइस सोल्यूशन्स",
    "coreServiceSubtitle": "उच्च उपलब्धता व्हॉइस, मेसेजिंग आणि व्हर्च्युअल नंबरसाठी तयार केलेली मॉड्यूलर टेलिकॉम पायाभूत सुविधा.",
    "services": {
      "wholesale": {
        "title": "घाऊक व्हॉइस (Wholesale Voice)",
        "description": "आंतरराष्ट्रीय कॉल टर्मिनेशन सेवा जी ऑडिओ गुणवत्ता, जागतिक कव्हरेज आणि कमी खर्चासाठी ऑप्टिमाइझ केलेली आहे.",
        "bullet1": "उच्च दर्जाचे एचडी व्हॉइस कनेक्शन",
        "bullet2": "लवचिक राउटिंग पर्याय",
        "bullet3": "जागतिक नेटवर्क कव्हरेज",
        "learnMore": "अधिक जाणून घ्या"
      },
      "aiVoice": {
        "title": "एआय व्हॉइस सोल्यूशन्स (AI Voice)",
        "description": "संवादी एआय व्हॉइस एजंट्स, स्मार्ट आयव्हीआर आणि स्वयंचलित व्हॉइस संवाद जगभरातील उपकरणांवर वितरित करा.",
        "bullet1": "संवादी नैसर्गिक एआय एजंट्स",
        "bullet2": "स्मार्ट व्हॉइस आयव्हीआर राउटिंग",
        "bullet3": "ग्लोबल कॅरियर टर्मिनेशन",
        "learnMore": "अधिक जाणून घ्या"
      },
      "virtualNumbers": {
        "title": "व्हर्च्युअल फोन नंबर (DID)",
        "description": "व्हॉइस, एसएमएस, व्हॉट्सॲप आणि पडताळणी एका आधुनिक रेस्ट एपीआई सूटमध्ये एकत्रित करा.",
        "bullet1": "त्वरित डीआयडी नंबर वाटप",
        "bullet2": "१०० हून अधिक देशांमध्ये कव्हरेज",
        "bullet3": "दुतर्फा कॉल आणि एसएमएस सपोर्ट",
        "learnMore": "अधिक जाणून घ्या"
      }
    },
    "whyChooseBadge": "आमचे INET VOICE सोल्यूशन का निवडावे",
    "whyChooseTitle": "आमचे व्हॉइस सोल्यूशन्स का निवडावेत",
    "whyChooseSubtitle": "स्पष्ट कनेक्शन, लवचिक राउटिंग आणि जागतिक बाजारपेठेत विश्वासार्ह कॉलिंग कार्यक्षमतेसाठी डिझाइन केलेले.",
    "whyCards": {
      "secure": {
        "title": "सुरक्षित आणि विश्वासार्ह संवाद",
        "description": "आमची पायाभूत सुविधा कॅरियर-ग्रेड विश्वासार्हतेसह सुरक्षित व्यावसायिक कॉल्सना समर्थन देते."
      },
      "cloud": {
        "title": "क्लाउड-आधारित व्हॉइस इन्फ्रास्ट्रक्चर",
        "description": "महागड्या उपकरणांची गरज नसलेले स्केलेबल क्लाउड सोल्यूशन्स जे खर्च कमी करून लवचिकता देतात."
      },
      "api": {
        "title": "व्हॉइस एपीआय एकत्रीकरण",
        "description": "विश्वसनीय एपीआय प्रदाता म्हणून आम्ही वेबसाइट्स, ॲप्स आणि सीआरएममध्ये कॉलिंग क्षमता सहज जोडतो."
      },
      "connectivity": {
        "title": "ग्लोबल व्हॉइस कनेक्टिव्हिटी",
        "description": "क्रिस्टल-क्लियर आवाज गुणवत्ता आणि स्थिर नेटवर्कसह अनेक देशांतील ग्राहकांशी सहज कनेक्ट व्हा."
      },
      "automated": {
        "title": "स्वयंचलित व्हॉइस सेवा",
        "description": "आयव्हीआर प्रणाली, स्वयंचलित कॉल वितरण आणि व्हॉइस रिमाइंडर्सद्वारे ग्राहक अनुभव सुधारा."
      }
    },
    "howItWorksBadge": "हे कसे कार्य करते",
    "howItWorksTitle": "बुद्धिमान राउटिंगद्वारे प्रत्येक कॉल अचूकपणे जोडणे",
    "howItWorksSubtitle": "आमचे जागतिक व्हॉइस नेटवर्क व्यवसायांना विश्वासार्ह कॅरियर मार्गांशी जोडून उत्कृष्ट ध्वनी गुणवत्ता प्रदान करते.",
    "steps": {
      "step1": {
        "step": "०१",
        "title": "व्यवसाय प्रणाली",
        "description": "सुरक्षित एसआयपी (SIP) ट्रंकद्वारे तुमचे एसबीसी, पीबीएक्स, संपर्क केंद्र किंवा ॲप्लिकेशन जोडा.",
        "subtext": "SIP क्रेडेन्शियल्स • आयपी ऑथेंटिकेशन"
      },
      "step2": {
        "step": "०२",
        "title": "iNet Global कोअर नेटवर्क",
        "description": "इंटेलिजेंट राउटिंग इंजिन आपोआप सर्वात कमी लेटन्सी आणि उच्च यश दर असलेला मार्ग निवडते.",
        "subtext": "SIP क्रेडेन्शियल्स • आयपी ऑथेंटिकेशन"
      },
      "step3": {
        "step": "०३",
        "title": "ग्लोबल कॅरियर मार्ग",
        "description": "१९०+ देशांमधील थेट टियर-१ कॅरियर इंटरकनेक्ट्स रिडंडंट बॅकअप मार्गांसह उपलब्ध.",
        "subtext": "SIP क्रेडेन्शियल्स • आयपी ऑथेंटिकेशन"
      },
      "step4": {
        "step": "०४",
        "title": "अंतिम ग्राहक",
        "description": "क्रिस्टल-क्लियर एचडी ध्वनी गुणवत्ता थेट मोबाइल, सॉफ्टफोन किंवा लँडलाइनवर पोहोचते.",
        "subtext": "SIP क्रेडेन्शियल्स • आयपी ऑथेंटिकेशन"
      }
    },
    "ctaBadge": "चला तुमचे व्हॉइस नेटवर्क तयार करूया",
    "ctaTitle": "जागतिक विश्वासार्ह व्हॉइस कनेक्टिव्हिटीसह तुमचा व्यवसाय वाढवा",
    "ctaSubtitle": "तुमची उद्दिष्टे आणि अंदाजे कॉल व्हॉल्यूम आम्हाला सांगा. आमची तज्ज्ञ टीम योग्य राउटिंग योजना तयार करेल.",
    "defaultLocations": [
      {
        "city": "लंडन",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "सिंगापूर",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "न्यूयॉर्क",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "दुबई",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "sw": {
    "heroBadge": "HUDUMA YA SAUTI (VOICE)",
    "heroTitle": "Wezesha Mawasiliano ya Biashara kwa Suluhisho za Kisasa za Sauti",
    "heroDesc": "Suluhisho za sauti za kuaminika na zinazoweza kukua kwa mawasiliano yaliyo wazi, muunganisho wa kimataifa na ukuaji wa biashara.",
    "getStarted": "Anza Sasa",
    "contactUs": "Wasiliana Nasi",
    "coreServiceBadge": "HUDUMA YETU YA MSINGI",
    "coreServiceTitle": "Suluhisho za sauti zilizoundwa kwa kila sekta",
    "coreServiceSubtitle": "Miundombinu thabiti ya mawasiliano ya simu iliyoundwa kwa sauti, ujumbe na nambari pepe za kiwango cha juu.",
    "services": {
      "wholesale": {
        "title": "Sauti ya Jumla (Wholesale Voice)",
        "description": "Huduma ya kimataifa ya kumalizia simu yenye njia zilizoboreshwa kwa ubora wa juu wa sauti, wigo mpana na bei nafuu.",
        "bullet1": "Miunganisho ya sauti ya HD ya kiwango cha juu",
        "bullet2": "Chaguo rahisi za uelekezaji simu",
        "bullet3": "Ufikiaji mpana wa mitandao ya kimataifa",
        "learnMore": "Jifunze zaidi"
      },
      "aiVoice": {
        "title": "Sauti ya Akili Mnemba (AI Voice)",
        "description": "Tumia maajenti wa sauti wa AI, mifumo mahiri ya IVR na mwingiliano wa sauti wa kiotomatiki ulimwenguni kote.",
        "bullet1": "Maajenti wa sauti wa mazungumzo ya asili ya AI",
        "bullet2": "Uelekezaji mahiri wa menyu ya sauti ya IVR",
        "bullet3": "Usambazaji wa moja kwa moja kupitia mitandao",
        "learnMore": "Jifunze zaidi"
      },
      "virtualNumbers": {
        "title": "Nambari Pepe za Simu (DID)",
        "description": "Unganisha Sauti, SMS, WhatsApp na uthibitishaji kwenye mfumo rahisi wa kisasa wa REST API kwa watengenezaji.",
        "bullet1": "Utoaji wa haraka wa nambari za DID",
        "bullet2": "Upatikanaji katika zaidi ya nchi 100",
        "bullet3": "Msaada kamili wa simu na SMS za pande mbili",
        "learnMore": "Jifunze zaidi"
      }
    },
    "whyChooseBadge": "KWA NINI UCHAGUE INET VOICE",
    "whyChooseTitle": "Kwa Nini Uchague Suluhisho Zetu za Sauti",
    "whyChooseSubtitle": "Imejengwa kwa simu zilizo wazi bila mikwaruzo, upangaji bora wa njia na utendaji thabiti kimataifa.",
    "whyCards": {
      "secure": {
        "title": "Mawasiliano Salama na ya Kuaminika",
        "description": "Miundombinu yetu inalinda simu muhimu za kibiashara kwa viwango vya juu vya mtandao na usalama kamili."
      },
      "cloud": {
        "title": "Miundombinu ya Sauti ya Wingu",
        "description": "Tumia suluhisho za wingu zinazookoa gharama za vifaa vya kienyeji huku zikitoa uwezo mkubwa wa kukua na biashara."
      },
      "api": {
        "title": "Muunganisho wa API ya Sauti",
        "description": "Kama mtoa huduma wa API anayeaminika, tunarahisisha kuweka uwezo wa kupiga simu kwenye tovuti, programu na CRM."
      },
      "connectivity": {
        "title": "Muunganisho wa Sauti Ulimwenguni",
        "description": "Ungana na wateja na wafanyakazi katika nchi nyingi kwa sauti safi kabisa na mtandao usio na hitilafu."
      },
      "automated": {
        "title": "Huduma za Sauti za Kiotomatiki",
        "description": "Boresha kuridhika kwa wateja kupitia mifumo ya IVR, uelekezaji simu wa kiotomatiki na vikumbusho vya sauti."
      }
    },
    "howItWorksBadge": "JINSI INAVYOFANYA KAZI",
    "howItWorksTitle": "Kuunganisha Kila Simu Kupitia Uelekezaji Mahiri",
    "howItWorksSubtitle": "Mtandao wetu wa sauti wa kimataifa unaunganisha biashara na njia za mitandao salama kwa sauti nzuri kwa kiwango chochote.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Mfumo wa Biashara",
        "description": "Unganisha SBC, PBX, kituo cha huduma kwa wateja au programu yako kupitia SIP trunk salama.",
        "subtext": "Vitambulisho vya SIP • Uthibitishaji wa IP"
      },
      "step2": {
        "step": "02",
        "title": "Mtandao Mkuu wa iNet Global",
        "description": "Mfumo mahiri unachagua kiotomatiki njia yenye ucheleweshaji mdogo zaidi na viwango vya juu vya ASR/ACD.",
        "subtext": "Vitambulisho vya SIP • Uthibitishaji wa IP"
      },
      "step3": {
        "step": "03",
        "title": "Njia za Mitandao ya Kimataifa",
        "description": "Viunganishi vya moja kwa moja vya Tier-1 katika nchi zaidi ya 190 vikiwa na njia mbadala za dharura.",
        "subtext": "Vitambulisho vya SIP • Uthibitishaji wa IP"
      },
      "step4": {
        "step": "04",
        "title": "Mteja wa Mwisho",
        "description": "Sauti safi kabisa ya HD inawasilishwa moja kwa moja kwenye simu za mkononi, softphones au simu za mezani (PSTN).",
        "subtext": "Vitambulisho vya SIP • Uthibitishaji wa IP"
      }
    },
    "ctaBadge": "TUJENGE MTANDAO WAKO WA SAUTI",
    "ctaTitle": "Imarisha Biashara Yako kwa Mawasiliano ya Sauti ya Uhakika Duniani",
    "ctaSubtitle": "Tueleze maeneo unayohitaji kuunganisha na makadirio ya idadi ya simu. Wataalamu wetu wataandaa mpango bora wa kiufundi.",
    "defaultLocations": [
      {
        "city": "London",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "sv": {
    "heroBadge": "RÖSTTJÄNSTER (VOICE)",
    "heroTitle": "Stärk Företagskommunikationen med Avancerade Röstlösningar",
    "heroDesc": "Tillförlitliga och skalbara röstlösningar för kristallklara samtal, global uppkoppling och hållbar affärstillväxt.",
    "getStarted": "Kom Igång",
    "contactUs": "Kontakta Oss",
    "coreServiceBadge": "VÅR KÄRNTJÄNST",
    "coreServiceTitle": "Röstlösningar skräddarsydda för varje bransch",
    "coreServiceSubtitle": "Modulär telekominfrastruktur konstruerad för hög tillgänglighet inom röst, meddelanden och virtuella nummer.",
    "services": {
      "wholesale": {
        "title": "Wholesale Voice (Grossiströst)",
        "description": "Internationell röstterminering med rutter optimerade för HD-ljudkvalitet, bred global täckning och kostnadseffektivitet.",
        "bullet1": "Kristallklara HD-röstanslutningar",
        "bullet2": "Flexibla samtalsdirigeringsalternativ",
        "bullet3": "Omfattande global nätverkstäckning",
        "learnMore": "Läs mer"
      },
      "aiVoice": {
        "title": "AI Röstlösningar (AI Voice)",
        "description": "Driftsätt konversationella AI-röstagenter, smarta talsvarssystem (IVR) och automatiserade röstinteraktioner globalt.",
        "bullet1": "Konversationella AI-röstagenter",
        "bullet2": "Intelligent IVR-samtalsstyrning",
        "bullet3": "Terminering via globala teleoperatörer",
        "learnMore": "Läs mer"
      },
      "virtualNumbers": {
        "title": "Virtuella Telefonnummer (DID)",
        "description": "Förena Röst, SMS, WhatsApp och identitetsverifiering i en modern, utvecklarvänlig REST API-svit.",
        "bullet1": "Omedelbar tilldelning av DID-nummer",
        "bullet2": "Täckning i fler än 100 länder",
        "bullet3": "Fullt stöd för tvåvägssamtal och SMS",
        "learnMore": "Läs mer"
      }
    },
    "whyChooseBadge": "VARFÖR VÄLJA INET VOICE",
    "whyChooseTitle": "Varför Välja Våra Röstlösningar",
    "whyChooseSubtitle": "Konstruerat för störningsfria anslutningar, dynamisk dirigering och pålitlig prestanda på internationella marknader.",
    "whyCards": {
      "secure": {
        "title": "Säker och Tillförlitlig Kommunikation",
        "description": "Vår infrastruktur stödjer säker företagstelefoni med hög tillgänglighet och operatörsklassad stabilitet."
      },
      "cloud": {
        "title": "Molnbaserad Röstinfrastruktur",
        "description": "Dra nytta av flexibla molnröstlösningar som eliminerar dyr hårdvara och erbjuder full skalbarhet och lägre kostnader."
      },
      "api": {
        "title": "Röst-API-integration",
        "description": "Som en pålitlig telekom-API-partner hjälper vi till att integrera samtalsfunktioner i webbplatser, appar och CRM."
      },
      "connectivity": {
        "title": "Global Röstuppkoppling",
        "description": "Koppla upp kunder och medarbetare i tiotals länder med kristallklart ljud och ett stabilt nätverk utan avbrott."
      },
      "automated": {
        "title": "Automatiserade Rösttjänster",
        "description": "Förbättra kundupplevelsen med interaktiva IVR-system, automatisk samtalsdirigering och röstpåminnelser."
      }
    },
    "howItWorksBadge": "HUR DET FUNGERAR",
    "howItWorksTitle": "Koppla Varje Samtal Rätt med Intelligent Dirigering",
    "howItWorksSubtitle": "Vårt globala röstnätverk kopplar ditt företag till pålitliga operatörsrutter för konsekvent ljudkvalitet i stor skala.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Företagssystem",
        "description": "Anslut din SBC, telefonväxel (PBX), kontaktcenter eller applikation via en säker SIP-trunk.",
        "subtext": "SIP-inloggningsuppgifter • IP-autentisering"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global Kärnnätverk",
        "description": "Den intelligenta dirigeringsmotorn väljer automatiskt rutten med lägst latens och bäst ASR/ACD-statistik.",
        "subtext": "SIP-inloggningsuppgifter • IP-autentisering"
      },
      "step3": {
        "step": "03",
        "title": "Globala Operatörsrutter",
        "description": "Direkta Tier-1-anslutningar i fler än 190 länder med redundanta reservvägar.",
        "subtext": "SIP-inloggningsuppgifter • IP-autentisering"
      },
      "step4": {
        "step": "04",
        "title": "Slutanvändare",
        "description": "Kristallklar HD-ljudkvalitet levereras direkt till mobiltelefoner, datortelefoner (softphones) eller fasta nätet (PSTN).",
        "subtext": "SIP-inloggningsuppgifter • IP-autentisering"
      }
    },
    "ctaBadge": "LÅT OSS BYGGA ERT RÖSTNÄTVERK",
    "ctaTitle": "Ge Er Verksamhet Global och Pålitlig Telefoni i Världsklass",
    "ctaSubtitle": "Berätta vilka länder ni vill nå och era uppskattade samtalsvolymer. Vårt expertteam skräddarsyr den bästa lösningen.",
    "defaultLocations": [
      {
        "city": "London",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "el": {
    "heroBadge": "ΥΠΗΡΕΣΙΑ ΦΩΝΗΣ (VOICE)",
    "heroTitle": "Ενισχύστε την Εταιρική Επικοινωνία με Προηγμένες Λύσεις Φωνής",
    "heroDesc": "Αξιόπιστες και κλιμακούμενες λύσεις φωνής για κρυστάλλινη επικοινωνία, παγκόσμια συνδεσιμότητα και αναπτυσσόμενες επιχειρήσεις.",
    "getStarted": "Ξεκινήστε Τώρα",
    "contactUs": "Επικοινωνήστε Μαζί Μας",
    "coreServiceBadge": "Η ΒΑΣΙΚΗ ΜΑΣ ΥΠΗΡΕΣΙΑ",
    "coreServiceTitle": "Λύσεις φωνής σχεδιασμένες για κάθε κλάδο",
    "coreServiceSubtitle": "Αρθρωτή τηλεπικοινωνιακή υποδομή υψηλής διαθεσιμότητας για φωνή, μηνύματα και εικονικούς αριθμούς.",
    "services": {
      "wholesale": {
        "title": "Χονδρική Φωνή (Wholesale Voice)",
        "description": "Διεθνής τερματισμός κλήσεων με επιλογές δρομολόγησης σχεδιασμένες γύρω από την ποιότητα ήχου, την κάλυψη και την αποδοτικότητα.",
        "bullet1": "Συνδέσεις φωνής υψηλής ποιότητας HD",
        "bullet2": "Ευέλικτες επιλογές δρομολόγησης",
        "bullet3": "Παγκόσμια κάλυψη δικτύων",
        "learnMore": "Μάθετε περισσότερα"
      },
      "aiVoice": {
        "title": "Φωνή Τεχνητής Νοημοσύνης (AI Voice)",
        "description": "Αναπτύξτε διαδραστικούς πράκτορες φωνής AI, έξυπνα συστήματα IVR και αυτοματοποιημένες φωνητικές αλληλεπιδράσεις διεθνώς.",
        "bullet1": "Συνομιλιακοί πράκτορες φωνής AI",
        "bullet2": "Έξυπνη δρομολόγηση φωνητικού IVR",
        "bullet3": "Τερματισμός μέσω παγκόσμιων παρόχων",
        "learnMore": "Μάθετε περισσότερα"
      },
      "virtualNumbers": {
        "title": "Εικονικοί Αριθμοί (DID)",
        "description": "Ενοποιήστε Φωνή, SMS, WhatsApp και Επαλήθευση σε μία σύγχρονη σουίτα REST API σχεδιασμένη για προγραμματιστές.",
        "bullet1": "Άμεση εκχώρηση αριθμών DID",
        "bullet2": "Κάλυψη σε περισσότερες από 100 χώρες",
        "bullet3": "Υποστήριξη αμφίδρομων κλήσεων & SMS",
        "learnMore": "Μάθετε περισσότερα"
      }
    },
    "whyChooseBadge": "ΓΙΑΤΙ ΝΑ ΕΠΙΛΕΞΕΤΕ ΤΗΝ INET VOICE",
    "whyChooseTitle": "Γιατί να Επιλέξετε τις Λύσεις Φωνής μας",
    "whyChooseSubtitle": "Σχεδιασμένο για καθαρές συνδέσεις, ευέλικτη δρομολόγηση και αξιόπιστη τηλεφωνική απόδοση στις παγκόσμιες αγορές.",
    "whyCards": {
      "secure": {
        "title": "Ασφαλής & Αξιόπιστη Επικοινωνία",
        "description": "Η υποδομή μας υποστηρίζει ασφαλή τηλεφωνία με υψηλή διαθεσιμότητα και αξιοπιστία επιπέδου παρόχου τηλεπικοινωνιών."
      },
      "cloud": {
        "title": "Cloud Υποδομή Φωνής",
        "description": "Αξιοποιήστε ευέλικτες cloud λύσεις που εξαλείφουν το ακριβό υλικό, προσφέροντας κλιμακωσιμότητα και εξοικονόμηση κόστους."
      },
      "api": {
        "title": "Ενσωμάτωση API Φωνής",
        "description": "Ως αξιόπιστος πάροχος API, ενσωματώνουμε δυνατότητες κλήσεων σε ιστότοπους, εφαρμογές και συστήματα CRM."
      },
      "connectivity": {
        "title": "Παγκόσμια Φωνητική Συνδεσιμότητα",
        "description": "Συνδεθείτε με πελάτες και ομάδες σε πολλές χώρες με κρυστάλλινη ποιότητα ήχου και σταθερό δίκτυο χωρίς διακοπές."
      },
      "automated": {
        "title": "Αυτοματοποιημένες Υπηρεσίες Φωνής",
        "description": "Βελτιώστε την εξυπηρέτηση πελατών μέσω συστημάτων IVR, αυτόματης δρομολόγησης κλήσεων και φωνητικών υπενθυμίσεων."
      }
    },
    "howItWorksBadge": "ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ",
    "howItWorksTitle": "Σύνδεση Κάθε Κλήσης Μέσω Έξυπνης Δρομολόγησης",
    "howItWorksSubtitle": "Το παγκόσμιο δίκτυο φωνής μας συνδέει τις επιχειρήσεις με αξιόπιστες διαδρομές παρόχων, διασφαλίζοντας καθαρό ήχο σε μεγάλη κλίμακα.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Επιχειρηματικό Σύστημα",
        "description": "Συνδέστε το SBC, το τηλεφωνικό κέντρο PBX, το contact center ή την εφαρμογή σας μέσω ασφαλούς SIP trunk.",
        "subtext": "Διαπιστευτήρια SIP • Έλεγχος ταυτότητας IP"
      },
      "step2": {
        "step": "02",
        "title": "Κεντρικό Δίκτυο iNet Global",
        "description": "Η έξυπνη μηχανή δρομολόγησης επιλέγει αυτόματα τη διαδρομή με τη χαμηλότερη καθυστέρηση και το υψηλότερο ASR/ACD.",
        "subtext": "Διαπιστευτήρια SIP • Έλεγχος ταυτότητας IP"
      },
      "step3": {
        "step": "03",
        "title": "Παγκόσμιες Διαδρομές Παρόχων",
        "description": "Απευθείας διασυνδέσεις Tier-1 σε περισσότερες από 190 χώρες με πλεονάζουσες εφεδρικές διαδρομές.",
        "subtext": "Διαπιστευτήρια SIP • Έλεγχος ταυτότητας IP"
      },
      "step4": {
        "step": "04",
        "title": "Τελικός Χρήστης",
        "description": "Κρυστάλλινη ποιότητα ήχου HD που παραδίδεται σε κινητά τηλέφωνα, softphones ή σταθερές γραμμές PSTN.",
        "subtext": "Διαπιστευτήρια SIP • Έλεγχος ταυτότητας IP"
      }
    },
    "ctaBadge": "ΑΣ ΧΤΙΣΟΥΜΕ ΤΟ ΦΩΝΗΤΙΚΟ ΔΙΚΤΥΟ ΣΑΣ",
    "ctaTitle": "Ενισχύστε την Επιχείρησή σας με Αξιόπιστη Παγκόσμια Τηλεφωνία",
    "ctaSubtitle": "Ενημερώστε μας για τους προορισμούς και τους όγκους κλήσεων. Η εξειδικευμένη ομάδα μας θα διαμορφώσει το ιδανικό σχέδιο.",
    "defaultLocations": [
      {
        "city": "Λονδίνο",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Σιγκαπούρη",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "Νέα Υόρκη",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Ντουμπάι",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "cs": {
    "heroBadge": "HLASOVÉ SLUŽBY (VOICE)",
    "heroTitle": "Posilte Firemní Komunikaci s Pokročilými Hlasovými Řešeními",
    "heroDesc": "Spolehlivá a škálovatelná hlasová řešení pro křišťálově čistou komunikaci, globální konektivitu a rostoucí podniky.",
    "getStarted": "Začít Nyní",
    "contactUs": "Kontaktujte Nás",
    "coreServiceBadge": "NAŠE HLAVNÍ SLUŽBA",
    "coreServiceTitle": "Hlasová řešení vytvořená na míru každému odvětví",
    "coreServiceSubtitle": "Modulární telekomunikační infrastruktura pro vysokou dostupnost hlasu, zpráv a virtuálních čísel.",
    "services": {
      "wholesale": {
        "title": "Velkoobchodní Hlas (Wholesale Voice)",
        "description": "Mezinárodní terminace hovorů s možnostmi trasování optimalizovanými pro kvalitu zvuku, globální pokrytí a nízké náklady.",
        "bullet1": "Kvalitní HD hlasové spojení",
        "bullet2": "Flexibilní možnosti směrování",
        "bullet3": "Celosvětové síťové pokrytí",
        "learnMore": "Zjistit více"
      },
      "aiVoice": {
        "title": "AI Hlasová Řešení (AI Voice)",
        "description": "Nasaďte konverzační AI hlasové agenty, chytré IVR systémy a automatizované hlasové interakce po celém světě.",
        "bullet1": "Přirození konverzační AI agenti",
        "bullet2": "Inteligentní směrování IVR",
        "bullet3": "Terminace přes globální operátory",
        "learnMore": "Zjistit více"
      },
      "virtualNumbers": {
        "title": "Virtuální Telefonní Čísla (DID)",
        "description": "Sjednoťte Hlas, SMS, WhatsApp a ověřování do jednoho moderního balíčku REST API pro vývojáře.",
        "bullet1": "Okamžité zřízení DID čísel",
        "bullet2": "Pokrytí ve více než 100 zemích",
        "bullet3": "Podpora obousměrných hovorů a SMS",
        "learnMore": "Zjistit více"
      }
    },
    "whyChooseBadge": "PROČ ZVOLIT INET VOICE",
    "whyChooseTitle": "Proč Zvolit Naše Hlasová Řešení",
    "whyChooseSubtitle": "Vybudováno pro čisté spojení bez šumu, inteligentní směrování a spolehlivý výkon na mezinárodních trzích.",
    "whyCards": {
      "secure": {
        "title": "Bezpečná a Spolehlivá Komunikace",
        "description": "Naše infrastruktura podporuje zabezpečenou telefonii s vysokou dostupností a spolehlivostí na úrovni operátora."
      },
      "cloud": {
        "title": "Cloudová Hlasová Infrastruktura",
        "description": "Využijte flexibilní cloudová řešení, která eliminují drahý hardware a nabízejí plnou škálovatelnost a úspory."
      },
      "api": {
        "title": "Integrace Hlasového API",
        "description": "Jako prověřený poskytovatel komunikačních API pomáháme integrovat funkce volání do webů, aplikací a CRM systémů."
      },
      "connectivity": {
        "title": "Globální Hlasová Konektivita",
        "description": "Spojte se se zákazníky a týmy v desítkách zemí s křišťálově čistým zvukem a stabilní sítí bez výpadků."
      },
      "automated": {
        "title": "Automatizované Hlasové Služby",
        "description": "Zvyšte spokojenost zákazníků díky interaktivním systémům IVR, automatickému směrování hovorů a hlasovým upomínkám."
      }
    },
    "howItWorksBadge": "JAK TO FUNGUJE",
    "howItWorksTitle": "Spojení Každého Hovoru Díky Inteligentnímu Směrování",
    "howItWorksSubtitle": "Naše globální hlasová síť spojuje firmy se spolehlivými trasami operátorů a zajišťuje čistý zvuk v jakémkoli měřítku.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Firemní Systém",
        "description": "Připojte svůj SBC, telefonní ústřednu PBX, kontaktní centrum nebo aplikaci přes zabezpečený SIP trunk.",
        "subtext": "SIP přihlašovací údaje • IP autentizace"
      },
      "step2": {
        "step": "02",
        "title": "Páteřní Síť iNet Global",
        "description": "Inteligentní směrovací engine automaticky vybere trasu s nejnižší latencí a nejvyšší úspěšností ASR/ACD.",
        "subtext": "SIP přihlašovací údaje • IP autentizace"
      },
      "step3": {
        "step": "03",
        "title": "Trasy Mezinárodních Operátorů",
        "description": "Přímé propojení Tier-1 operátorů ve více než 190 zemích s redundantními záložními trasami.",
        "subtext": "SIP přihlašovací údaje • IP autentizace"
      },
      "step4": {
        "step": "04",
        "title": "Koncový Uživatel",
        "description": "Křišťálově čistá kvalita zvuku HD je doručována přímo na mobilní telefony, softphony nebo pevné linky PSTN.",
        "subtext": "SIP přihlašovací údaje • IP autentizace"
      }
    },
    "ctaBadge": "VYBUDUJME SPOLEČNĚ VAŠI HLASOVOU SÍŤ",
    "ctaTitle": "Zajistěte Svému Podnikání Spolehlivou Globální Telefonii",
    "ctaSubtitle": "Sdělte nám své cílové země a odhadované objemy volání. Náš tým odborníků navrhne optimální plán trasování.",
    "defaultLocations": [
      {
        "city": "Londýn",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapur",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubaj",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "ro": {
    "heroBadge": "SERVICIU DE VOCE (VOICE)",
    "heroTitle": "Consolidați Comunicațiile de Afaceri cu Soluții Vocale Avansate",
    "heroDesc": "Soluții vocale fiabile și scalabile pentru o comunicare clară, conectivitate globală și dezvoltarea durabilă a afacerii.",
    "getStarted": "Începeți Acum",
    "contactUs": "Contactați-ne",
    "coreServiceBadge": "SERVICIUL NOSTRU PRINCIPAL",
    "coreServiceTitle": "Soluții vocale dezvoltate pentru fiecare industrie",
    "coreServiceSubtitle": "Infrastructură telecom modulară proiectată pentru disponibilitate înaltă a vocii, mesajelor și numerelor virtuale.",
    "services": {
      "wholesale": {
        "title": "Voce Wholesale (En-Gros)",
        "description": "Terminare internațională a apelurilor cu rute optimizate pentru calitate audio de înaltă fidelitate, acoperire și costuri avantajoase.",
        "bullet1": "Conexiuni vocale HD de înaltă calitate",
        "bullet2": "Opțiuni flexibile de rutare a apelurilor",
        "bullet3": "Acoperire globală extinsă",
        "learnMore": "Aflați mai multe"
      },
      "aiVoice": {
        "title": "Soluții Vocale cu IA (AI Voice)",
        "description": "Implementați agenți vocali conversaționali cu IA, sisteme IVR inteligente și interacțiuni vocale automate în întreaga lume.",
        "bullet1": "Agenți vocali conversaționali cu IA",
        "bullet2": "Rutare vocală inteligentă IVR",
        "bullet3": "Terminare prin operatori telecom globali",
        "learnMore": "Aflați mai multe"
      },
      "virtualNumbers": {
        "title": "Numere de Telefon Virtuale (DID)",
        "description": "Unificați Vocea, SMS-ul, WhatsApp și Verificarea într-o suită modernă de API-uri REST gata de utilizare.",
        "bullet1": "Alocare instantanee a numerelor DID",
        "bullet2": "Acoperire în peste 100 de țări",
        "bullet3": "Suport apeluri și SMS bidirecționale",
        "learnMore": "Aflați mai multe"
      }
    },
    "whyChooseBadge": "DE CE SĂ ALEGEȚI INET VOICE",
    "whyChooseTitle": "De Ce să Alegeți Soluțiile Noastre Vocale",
    "whyChooseSubtitle": "Construit pentru conexiuni clare fără interferențe, rutare inteligentă și stabilitate pe piețele internaționale.",
    "whyCards": {
      "secure": {
        "title": "Comunicare Sigură și Fiabilă",
        "description": "Infrastructura noastră protejează apelurile de afaceri cu o disponibilitate înaltă și fiabilitate de nivel telecom."
      },
      "cloud": {
        "title": "Infrastructură Vocală în Cloud",
        "description": "Profitați de soluțiile vocale flexibile în cloud care elimină echipamentele costisitoare și asigură scalabilitate."
      },
      "api": {
        "title": "Integrare API Voce",
        "description": "Furnizor de încredere de API-uri pentru a integra funcții de apelare în site-uri web, aplicații mobile și CRM-uri."
      },
      "connectivity": {
        "title": "Conectivitate Vocală Globală",
        "description": "Conectați-vă cu clienții și echipele din zeci de țări cu o claritate impecabilă a sunetului și o rețea stabilă."
      },
      "automated": {
        "title": "Servicii Vocale Automatizate",
        "description": "Creșteți satisfacția clienților prin sisteme IVR interactive, distribuire automată a apelurilor și alerte vocale."
      }
    },
    "howItWorksBadge": "CUM FUNCȚIONEAZĂ",
    "howItWorksTitle": "Conectarea Fiecărui Apel Prin Rutare Inteligentă",
    "howItWorksSubtitle": "Rețeaua noastră vocală globală conectează afacerea dumneavoastră la rute sigure de operator pentru o calitate ireproșabilă la orice scară.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Sistem de Afaceri",
        "description": "Conectați SBC-ul, centrala PBX, call center-ul sau aplicația dumneavoastră printr-un trunk SIP securizat.",
        "subtext": "Acreditări SIP • Autentificare IP"
      },
      "step2": {
        "step": "02",
        "title": "Rețeaua Centrală iNet Global",
        "description": "Motorul inteligent selectează automat ruta cu cea mai mică latență și cea mai mare rată de succes ASR/ACD.",
        "subtext": "Acreditări SIP • Autentificare IP"
      },
      "step3": {
        "step": "03",
        "title": "Rute de Operatori Globali",
        "description": "Interconectări directe Tier-1 în peste 190 de țări cu rute de rezervă redundante.",
        "subtext": "Acreditări SIP • Autentificare IP"
      },
      "step4": {
        "step": "04",
        "title": "Destinatar Final",
        "description": "Sunetul HD cristalin este livrat direct pe telefoane mobile, softphone-uri sau linii fixe PSTN.",
        "subtext": "Acreditări SIP • Autentificare IP"
      }
    },
    "ctaBadge": "SĂ VĂ CONSTRUIM REȚEAUA DE VOCE",
    "ctaTitle": "Echipați-vă Afacerea cu Telefonie Globală Fiabilă",
    "ctaSubtitle": "Spuneți-ne destinațiile necesare și volumele estimate de apeluri. Echipa noastră de experți va configura soluția optimă.",
    "defaultLocations": [
      {
        "city": "Londra",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Singapore",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubai",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "hu": {
    "heroBadge": "HANGSZOLGÁLTATÁS (VOICE)",
    "heroTitle": "Erősítse Meg Vállalati Kommunikációját Fejlett Hangmegoldásokkal",
    "heroDesc": "Megbízható és skálázható hangmegoldások a kristálytiszta beszélgetésekhez, globális összeköttetéshez és a növekedéshez.",
    "getStarted": "Kezdés Most",
    "contactUs": "Kapcsolatfelvétel",
    "coreServiceBadge": "FŐ SZOLGÁLTATÁSUNK",
    "coreServiceTitle": "Minden iparág számára kifejlesztett hangmegoldások",
    "coreServiceSubtitle": "Moduláris telekommunikációs infrastruktúra a magas rendelkezésre állású hang, üzenetküldés és virtuális számok számára.",
    "services": {
      "wholesale": {
        "title": "Nagykereskedelmi Hang (Wholesale Voice)",
        "description": "Nemzetközi hívásvégződtetés a kiváló hangminőségre, lefedettségre és költséghatékonyságra optimalizált útvonalakkal.",
        "bullet1": "Kiváló minőségű HD hangkapcsolatok",
        "bullet2": "Rugalmas hívásirányítási lehetőségek",
        "bullet3": "Globális nemzetközi hálózati lefedettség",
        "learnMore": "Tudjon meg többet"
      },
      "aiVoice": {
        "title": "Mesterséges Intelligencia Hang (AI Voice)",
        "description": "Telepítsen társalgási AI hangügynököket, intelligens IVR rendszereket és automatizált hangos interakciókat világszerte.",
        "bullet1": "Természetes társalgási AI ügynökök",
        "bullet2": "Intelligens IVR hangirányítás",
        "bullet3": "Végződtetés globális szolgáltatókon keresztül",
        "learnMore": "Tudjon meg többet"
      },
      "virtualNumbers": {
        "title": "Virtuális Telefonszámok (DID)",
        "description": "Egyesítse a Hangot, SMS-t, WhatsAppot és a Hitelesítést egyetlen korszerű, fejlesztőbarát REST API csomagban.",
        "bullet1": "Azonnali DID számkiosztás",
        "bullet2": "Lefedettség több mint 100 országban",
        "bullet3": "Kétirányú hívás- és SMS-támogatás",
        "learnMore": "Tudjon meg többet"
      }
    },
    "whyChooseBadge": "MIÉRT AZ INET VOICE MEGOLDÁS",
    "whyChooseTitle": "Miért Válassza a Mi Hangmegoldásainkat",
    "whyChooseSubtitle": "Zajmentes tiszta kapcsolatokra, intelligens útválasztásra és megbízható nemzetközi teljesítményre tervezve.",
    "whyCards": {
      "secure": {
        "title": "Biztonságos és Megbízható Kommunikáció",
        "description": "Infrastruktúránk védi a kritikus vállalati hívásokat magas rendelkezésre állással és szolgáltatói szintű megbízhatósággal."
      },
      "cloud": {
        "title": "Felhőalapú Hanginfrastruktúra",
        "description": "Használjon felhőalapú megoldásokat, amelyek feleslegessé teszik a drága hardvereket, és rugalmas skálázást biztosítanak."
      },
      "api": {
        "title": "Hang API Integráció",
        "description": "Megbízható API-szolgáltatóként segítünk a hívásfunkciók weboldalakba, alkalmazásokba és CRM-ekbe való beépítésében."
      },
      "connectivity": {
        "title": "Globális Hangkapcsolat",
        "description": "Kapcsolódjon ügyfeleihez és csapataihoz számos országban kristálytiszta hangminőséggel és stabil hálózattal."
      },
      "automated": {
        "title": "Automatizált Hangszolgáltatások",
        "description": "Növelje az ügyfél-elégedettséget interaktív IVR rendszerekkel, automatikus híváselosztással és hangos emlékeztetőkkel."
      }
    },
    "howItWorksBadge": "HOGYAN MŰKÖDIK",
    "howItWorksTitle": "Minden Hívás Intelligens Összekapcsolása",
    "howItWorksSubtitle": "Globális hálózatunk megbízható szolgáltatói útvonalakhoz kapcsolja vállalkozását a tökéletes hangminőség érdekében.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Vállalati Rendszer",
        "description": "Csatlakoztassa SBC-jét, PBX telefonközpontját, ügyfélszolgálatát vagy alkalmazását biztonságos SIP-trönkön keresztül.",
        "subtext": "SIP hitelesítő adatok • IP azonosítás"
      },
      "step2": {
        "step": "02",
        "title": "iNet Global Központi Hálózat",
        "description": "Az intelligens útválasztó motor automatikusan a legkisebb késleltetésű és legmagasabb ASR/ACD útvonalat választja.",
        "subtext": "SIP hitelesítő adatok • IP azonosítás"
      },
      "step3": {
        "step": "03",
        "title": "Globális Szolgáltatói Útvonalak",
        "description": "Közvetlen Tier-1 összeköttetések több mint 190 országban redundáns tartalék útvonalakkal.",
        "subtext": "SIP hitelesítő adatok • IP azonosítás"
      },
      "step4": {
        "step": "04",
        "title": "Végfelhasználó",
        "description": "A kristálytiszta HD hang közvetlenül mobilokra, szoftveres telefonokra vagy vezetékes vonalakra (PSTN) érkezik.",
        "subtext": "SIP hitelesítő adatok • IP azonosítás"
      }
    },
    "ctaBadge": "ÉPÍTSÜK KI HANGHÁLÓZATÁT",
    "ctaTitle": "Támogassa Vállalkozását Megbízható Globális Telefóniával",
    "ctaSubtitle": "Mondja el, mely országokat szeretné elérni, és mekkora hívásforgalommal számol. Szakértőink kidolgozzák a legjobb megoldást.",
    "defaultLocations": [
      {
        "city": "London",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Szingapúr",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "New York",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Dubaj",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "uk": {
    "heroBadge": "ГОЛОСОВИЙ СЕРВІС (VOICE)",
    "heroTitle": "Підсилюйте Корпоративний Зв'язок за Допомогою Інноваційних Голосових Рішень",
    "heroDesc": "Надійні та масштабовані голосові сервіси для кришталево чистого звуку, глобальної зв'язності та впевненого розвитку бізнесу.",
    "getStarted": "Почати Зараз",
    "contactUs": "Зв'яжіться з Нами",
    "coreServiceBadge": "НАША ОСНОВНА ПОСЛУГА",
    "coreServiceTitle": "Голосові рішення, створені для кожної галузі",
    "coreServiceSubtitle": "Модульна телеком-інфраструктура операторського рівня для високоякісного голосового зв'язку, повідомлень та віртуальних номерів.",
    "services": {
      "wholesale": {
        "title": "Оптовий Голосовий Зв'язок (Wholesale Voice)",
        "description": "Міжнародна термінація викликів з маршрутами, оптимізованими для якості звуку, глобального покриття та вигідної вартості.",
        "bullet1": "Високоякісні HD голосові з'єднання",
        "bullet2": "Гнучкі варіанти маршрутизації викликів",
        "bullet3": "Широке міжнародне покриття мережі",
        "learnMore": "Дізнатися більше"
      },
      "aiVoice": {
        "title": "Голосовий Штучний Інтелект (AI Voice)",
        "description": "Розгортайте діалогових голосових ШІ-агентів, розумні системи IVR та автоматизовані голосові сценарії по всьому світу.",
        "bullet1": "Природні діалогові ШІ-агенти",
        "bullet2": "Розумна маршрутизація меню IVR",
        "bullet3": "Термінація через провідних операторів",
        "learnMore": "Дізнатися більше"
      },
      "virtualNumbers": {
        "title": "Віртуальні Телефонні Номери (DID)",
        "description": "Об'єднуйте Голос, SMS, WhatsApp та верифікацію в єдиному сучасному наборі REST API для розробників.",
        "bullet1": "Миттєве підключення номерів DID",
        "bullet2": "Покриття у понад 100 країнах світу",
        "bullet3": "Повна підтримка двосторонніх дзвінків та SMS",
        "learnMore": "Дізнатися більше"
      }
    },
    "whyChooseBadge": "ЧОМУ ОБИРАЮТЬ INET VOICE",
    "whyChooseTitle": "Чому Варто Обрати Наші Голосові Рішення",
    "whyChooseSubtitle": "Створено для чистих з'єднань без шумів, інтелектуальної маршрутизації та надійної роботи на міжнародних ринках.",
    "whyCards": {
      "secure": {
        "title": "Безпечний та Надійний Зв'язок",
        "description": "Наша інфраструктура захищає корпоративну телефонію з високою доступністю операторського рівня."
      },
      "cloud": {
        "title": "Хмарна Голосова Інфраструктура",
        "description": "Використовуйте гнучкі хмарні рішення, які позбавляють від дорогого обладнання та забезпечують легке масштабування."
      },
      "api": {
        "title": "Інтеграція Голосових API",
        "description": "Як надійний провайдер телеком-API, ми допомагаємо легко інтегрувати дзвінки у сайти, мобільні додатки та CRM."
      },
      "connectivity": {
        "title": "Глобальна Голосова Підключеність",
        "description": "Спілкуйтеся з клієнтами та командами у багатьох країнах із кришталево чистим звуком та стабільною мережею."
      },
      "automated": {
        "title": "Автоматизовані Сервіси Телефонії",
        "description": "Покращуйте рівень обслуговування за допомогою інтерактивних IVR, розумного розподілу викликів та сповіщень."
      }
    },
    "howItWorksBadge": "ЯК ЦЕ ПРАЦЮЄ",
    "howItWorksTitle": "З'єднання Кожного Дзвінка Через Розумну Маршрутизацію",
    "howItWorksSubtitle": "Наша світова голосова мережа підключає бізнес до перевірених маршрутів для забезпечення бездоганного звуку.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "Корпоративна Система",
        "description": "Підключайте свій SBC, АТС (PBX), контакт-центр або додаток через захищений SIP-транк.",
        "subtext": "Облікові дані SIP • IP-автентифікація"
      },
      "step2": {
        "step": "02",
        "title": "Ядро Мережі iNet Global",
        "description": "Інтелектуальний движок маршрутизації автоматично обирає шлях з найменшою затримкою та найвищим ASR/ACD.",
        "subtext": "Облікові дані SIP • IP-автентифікація"
      },
      "step3": {
        "step": "03",
        "title": "Міжнародні Операторські Маршрути",
        "description": "Прямі з'єднання Tier-1 у понад 190 країнах із резервними резервованими каналами.",
        "subtext": "Облікові дані SIP • IP-автентифікація"
      },
      "step4": {
        "step": "04",
        "title": "Кінцевий Абонент",
        "description": "Кришталево чистий звук HD доставляється прямо на мобільні телефони, софтфони або стаціонарні лінії PSTN.",
        "subtext": "Облікові дані SIP • IP-автентифікація"
      }
    },
    "ctaBadge": "ПОБУДУЙМО ВАШУ ГОЛОСОВУ МЕРЕЖУ",
    "ctaTitle": "Забезпечте Свій Бізнес Надійною Телефонією Світового Рівня",
    "ctaSubtitle": "Розкажіть нам про потрібні напрямки та обсяги трафіку. Наша команда розробить ідеальний план маршрутизації.",
    "defaultLocations": [
      {
        "city": "Лондон",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "Сінгапур",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "Нью-Йорк",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "Дубай",
        "phone": "+971 XXXX XXXX"
      }
    ]
  },
  "he": {
    "heroBadge": "שירות קולי (VOICE)",
    "heroTitle": "העצימו את התקשורת העסקית עם פתרונות קול מתקדמים",
    "heroDesc": "פתרונות קול אמינים ומודולריים לתקשורת צלולה ואיכותית, קישוריות עולמית וצמיחה עסקית מתמשכת.",
    "getStarted": "התחל עכשיו",
    "contactUs": "צור קשר",
    "coreServiceBadge": "שירות הליבה שלנו",
    "coreServiceTitle": "פתרונות קול המותאמים לכל ענף ותעשייה",
    "coreServiceSubtitle": "תשתית טלקום מודולרית מתקדמת המיועדת לקול בזמינות גבוהה, הודעות טקסט ומספרים וירטואליים.",
    "services": {
      "wholesale": {
        "title": "קול בסיטונאות (Wholesale Voice)",
        "description": "סיום שיחות בינלאומיות עם נתיבים המותאמים לאיכות שמע מעולה, כיסוי בינלאומי ועלויות תחרותיות.",
        "bullet1": "חיבורי שמע HD צלולים ואיכותיים",
        "bullet2": "אפשרויות ניתוב שיחות גמישות",
        "bullet3": "כיסוי רשת בינלאומי מקיף",
        "learnMore": "למידע נוסף"
      },
      "aiVoice": {
        "title": "פתרונות קול מבוססי AI",
        "description": "הטמיעו סוכני קול מבוססי בינה מלאכותית, נתבי שיחות IVR חכמים ואינטראקציות קוליות אוטומטיות בכל העולם.",
        "bullet1": "סוכני שיחה קוליים טבעיים ב-AI",
        "bullet2": "ניתוב שיחות קולי חכם ב-IVR",
        "bullet3": "סיום שיחות ישיר אצל מפעילי תקשורת",
        "learnMore": "למידע נוסף"
      },
      "virtualNumbers": {
        "title": "מספרי טלפון וירטואליים (DID)",
        "description": "איחוד שיחות קוליות, SMS, וואטסאפ ואימות משתמשים בחבילת REST API מודרנית ופשוטה למפתחים.",
        "bullet1": "הקצאה מיידית של מספרי DID",
        "bullet2": "כיסוי מספרים ביותר מ-100 מדינות",
        "bullet3": "תמיכה מלאה בשיחות והודעות דו-כיווניות",
        "learnMore": "למידע נוסף"
      }
    },
    "whyChooseBadge": "למה לבחור בפתרונות INET VOICE",
    "whyChooseTitle": "מדוע לבחור בפתרונות הקול שלנו",
    "whyChooseSubtitle": "נבנה עבור שיחות חלקות ללא רעשים, ניתוב דינמי חכם וביצועי טלפוניה ללא פשרות בעולם.",
    "whyCards": {
      "secure": {
        "title": "תקשורת מאובטחת ואמינה",
        "description": "התשתית שלנו תומכת בשיחות עסקיות מאובטחות עם זמינות גבוהה ואמינות של מפעילי תקשורת מובילים."
      },
      "cloud": {
        "title": "תשתית קול מבוססת ענן",
        "description": "פתרונות ענן מתקדמים המבטלים את הצורך בציוד חומרה יקר, ומספקים גמישות, חיסכון והתרחבות פשוטה."
      },
      "api": {
        "title": "אינטגרציית API קולי",
        "description": "כספק API תקשורת אמין, אנו מאפשרים להטמיע בקלות שיחות טלפון באתרי אינטרנט, אפליקציות ומערכות CRM."
      },
      "connectivity": {
        "title": "קישוריות קולית בינלאומית",
        "description": "התחברו ללקוחות וצוותים בעשרות מדינות באיכות שמע צלולה וברשת יציבה ללא ניתוקים."
      },
      "automated": {
        "title": "שירותי קול אוטומטיים",
        "description": "שפרו את שביעות רצון הלקוחות באמצעות מערכות IVR אינטראקטיביות, ניתוב שיחות אוטומטי ותזכורות קוליות."
      }
    },
    "howItWorksBadge": "איך זה עובד",
    "howItWorksTitle": "חיבור כל שיחה באמצעות ניתוב קולי חכם",
    "howItWorksSubtitle": "רשת הקול הבינלאומית שלנו מחברת עסקים לנתיבי מפעילים אמינים לקבלת איכות שיחה ללא פשרות בכל היקף.",
    "steps": {
      "step1": {
        "step": "01",
        "title": "מערכת הארגון",
        "description": "חברו את ה-SBC, מרכזיית ה-PBX, מוקד השירות או האפליקציה שלכם באמצעות SIP Trunk מאובטח.",
        "subtext": "פרטי אימות SIP • אימות כתובת IP"
      },
      "step2": {
        "step": "02",
        "title": "רשת הליבה של iNet Global",
        "description": "מנוע הניתוב החכם בוחר אוטומטית את הנתיב בעל השיהוי הנמוך ביותר ושיעורי ה-ASR/ACD הגבוהים ביותר.",
        "subtext": "פרטי אימות SIP • אימות כתובת IP"
      },
      "step3": {
        "step": "03",
        "title": "נתיבי מפעילים גלובליים",
        "description": "חיבורים ישירים לספקי Tier-1 בלמעלה מ-190 מדינות עם נתיבי גיבוי יתירים להבטחת רציפות.",
        "subtext": "פרטי אימות SIP • אימות כתובת IP"
      },
      "step4": {
        "step": "04",
        "title": "משתמש הקצה",
        "description": "איכות שמע HD צלולה לחלוטין הנמסרת ישירות למכשירים ניידים, טלפוני תוכנה (Softphones) או רשת PSTN.",
        "subtext": "פרטי אימות SIP • אימות כתובת IP"
      }
    },
    "ctaBadge": "בואו נבנה את רשת הקול שלכם",
    "ctaTitle": "העניקו לעסק שלכם תקשורת קולית גלובלית אמינה",
    "ctaSubtitle": "ספרו לנו על היעדים הנדרשים והיקפי השיחות הצפויים. צוות המומחים שלנו יתאים את תוכנית הניתוב המושלמת.",
    "defaultLocations": [
      {
        "city": "לונדון",
        "phone": "+44 XXXX XXXX"
      },
      {
        "city": "סינגפור",
        "phone": "+65 XXXX XXXX"
      },
      {
        "city": "ניו יורק",
        "phone": "+1 XXXX XXXX"
      },
      {
        "city": "דובאי",
        "phone": "+971 XXXX XXXX"
      }
    ]
  }
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

export default getVoiceTranslations;

export interface PolicyPageContent {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: {
    title: string;
    description: string;
    points?: string[];
  }[];
  contactHeading: string;
  contactIntro: string;
  companyName: string;
  emailLabel: string;
  emailValue: string;
  websiteLabel: string;
  websiteValue: string;
  addressLabel: string;
  addressValue: string[];
}

export interface LegalTranslations {
  privacyPolicy: PolicyPageContent;
  termsOfService: PolicyPageContent;
  securityCompliance: PolicyPageContent;
}

export const legalTranslations: Record<string, LegalTranslations> = {
  // 1. English
  en: {
    privacyPolicy: {
      metaTitle: "Privacy Policy | iNet Global",
      metaDescription:
        "Learn how iNet Global collects, uses, and protects personal information across its telecommunications and business communication services.",
      badge: "DATA PRIVACY & PROTECTION",
      title: "Privacy Policy",
      lastUpdated: "Last Updated: June 2024",
      intro:
        "iNet Global Services Limited respects your privacy and is committed to protecting your personal and business information. This policy explains how we collect, use, and safeguard information when you visit our website or use our telecommunications services.",
      sections: [
        {
          title: "Information We Collect",
          description:
            "We may collect contact details, business information, technical data, and service-related information necessary to provide and improve our services.",
          points: [
            "Contact and account credentials including full name, business email, and phone number.",
            "Technical telemetry such as IP addresses, browser specifications, and device network identifiers.",
            "Communications metadata necessary for lawful telecommunications transmission and route diagnostics.",
          ],
        },
        {
          title: "How We Use Information",
          description:
            "We use information to deliver services, respond to inquiries, maintain security, improve performance, and meet applicable legal obligations.",
          points: [
            "Delivering wholesale voice termination, SMS routing, and virtual DID connectivity.",
            "Authenticating enterprise accounts and mitigating telecom fraud.",
            "Complying with statutory reporting requirements under the Labuan Companies Act 1990 and global telecommunications regulations.",
          ],
        },
        {
          title: "Data Protection",
          description:
            "We apply appropriate safeguards to help protect information against unauthorized access, misuse, loss, or disclosure.",
          points: [
            "Enterprise encryption in transit and at rest across carrier-grade communication pipelines.",
            "Strict role-based access restrictions limited to verified operations personnel.",
            "Periodic security audits and round-the-clock infrastructure telemetry monitoring.",
          ],
        },
        {
          title: "Third-Party Services",
          description:
            "We may share relevant information with authorized service providers and telecommunications partners when necessary to deliver our services or comply with legal requirements.",
          points: [
            "Licensed global Tier-1 telecom operators and underlying carrier transit partners.",
            "Accredited infrastructure facilities and cloud delivery networks.",
            "Competent regulatory authorities where mandated by applicable legislation.",
          ],
        },
      ],
      contactHeading: "Contact Us",
      contactIntro:
        "For privacy-related questions or requests, please contact:",
      companyName: "iNet Global Services Limited",
      emailLabel: "Email",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "Website",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "Address",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia",
      ],
    },
    termsOfService: {
      metaTitle: "Terms of Service | iNet Global",
      metaDescription:
        "Review the terms governing website access and the use of iNet Global telecommunications and business communication services.",
      badge: "LEGAL AGREEMENT",
      title: "Terms of Service",
      lastUpdated: "Last Updated: June 2024",
      intro:
        "These Terms of Service govern your access to the iNet Global website and use of our telecommunications services. By using our website or services, you agree to the terms applicable to your use.",
      sections: [
        {
          title: "Our Services",
          description:
            "iNet Global provides wholesale voice, SMS messaging, OTP verification, virtual numbers, and business communication services, subject to availability and applicable agreements.",
          points: [
            "Wholesale Voice termination and flexible SIP trunking architecture.",
            "High-throughput transactional SMS, verification OTPs, and RCS business messaging.",
            "International Virtual DID numbers and cloud-based call center dialer suites.",
          ],
        },
        {
          title: "Acceptable Use",
          description:
            "Customers must use our services lawfully and must not engage in fraud, unauthorized messaging, security violations, or other prohibited activities.",
          points: [
            "No transmission of unsolicited commercial communications (spam) or unconsented traffic.",
            "Strict prohibition of spoofing, phishing, artificial call inflation, or unlawful robocalls.",
            "Full compliance with origin-and-destination regional telecom licensing requirements.",
          ],
        },
        {
          title: "Service Availability",
          description:
            "We aim to provide reliable services; however, availability may be affected by maintenance, network conditions, and third-party providers.",
          points: [
            "Services are engineered with carrier-grade redundancy and multi-route failover protocols.",
            "Scheduled network maintenance windows will be communicated in advance whenever practicable.",
            "External upstream transit network disruptions remain beyond our direct operational control.",
          ],
        },
        {
          title: "Liability & Governance",
          description:
            "Applicable liability, payment, suspension, and termination terms are governed by the relevant customer agreement and applicable law.",
          points: [
            "Service agreements are executed in accordance with the Laws of Labuan, Malaysia.",
            "Suspension rights are reserved immediately for severe violations of acceptable use provisions.",
          ],
        },
      ],
      contactHeading: "Contact Us",
      contactIntro:
        "For inquiries regarding these Terms of Service or master service agreements, please contact:",
      companyName: "iNet Global Services Limited",
      emailLabel: "Email",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "Website",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "Address",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia",
      ],
    },
    securityCompliance: {
      metaTitle: "Security & Compliance | iNet Global",
      metaDescription:
        "Discover iNet Global's approach to telecommunications security, responsible messaging, data protection, and compliance.",
      badge: "INFRASTRUCTURE SECURITY",
      title: "Security & Compliance",
      lastUpdated: "Last Updated: June 2024",
      intro:
        "At iNet Global Services Limited, we prioritize secure, reliable, and responsible telecommunications. We work to protect our communication infrastructure and support the safe use of our voice, messaging, and connectivity services.",
      sections: [
        {
          title: "Network Security",
          description:
            "We use appropriate safeguards to help protect network infrastructure and support service reliability.",
          points: [
            "Distributed DDoS mitigation and real-time SIP perimeter session border controllers (SBC).",
            "Multi-region interconnect nodes with continuous automated network latency and failover telemetry.",
            "Automated packet anomaly detection and high-concurrency traffic isolation.",
          ],
        },
        {
          title: "Data Protection",
          description:
            "We aim to protect information handled through our services using appropriate technical and organizational measures.",
          points: [
            "TLS/SRTP media and signaling encryption safeguarding sensitive business communications.",
            "Hardened data processing facilities meeting international security benchmarks.",
            "Periodic penetration testing and vulnerability mitigation protocols.",
          ],
        },
        {
          title: "Responsible Messaging",
          description:
            "We expect customers to follow applicable laws, messaging consent requirements, and relevant telecommunications policies.",
          points: [
            "Adherence to TCR 10DLC, CTIA guidelines, TCPA, and localized opt-in regulations.",
            "Prohibition of deceptive sender headers and content violating telecom operator policies.",
            "Active monitoring and suppression of reported malicious messaging patterns.",
          ],
        },
        {
          title: "Fraud Prevention",
          description:
            "We do not support fraudulent, abusive, or unlawful use of our services and may take appropriate action in accordance with applicable agreements.",
          points: [
            "Real-time International Revenue Share Fraud (IRSF) algorithmic interception.",
            "Short-duration call anomaly monitoring and automatic threshold throttling.",
            "Immediate route suspension upon identification of credential compromise or illicit traffic.",
          ],
        },
      ],
      contactHeading: "Report a Security Concern",
      contactIntro:
        "For security-related concerns or responsible disclosure reports, contact us at:",
      companyName: "iNet Global Services Limited",
      emailLabel: "Security Contact Email",
      emailValue: "security@inetglobalservices.com",
      websiteLabel: "Website",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "Address",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia",
      ],
    },
  },

  // 2. Spanish
  es: {
    privacyPolicy: {
      metaTitle: "Política de Privacidad | iNet Global",
      metaDescription:
        "Conozca cómo iNet Global recopila, utiliza y protege la información personal en sus servicios de telecomunicaciones y comunicación empresarial.",
      badge: "PRIVACIDAD Y PROTECCIÓN DE DATOS",
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Junio de 2024",
      intro:
        "iNet Global Services Limited respeta su privacidad y está comprometida a proteger su información personal y comercial. Esta política explica cómo recopilamos, usamos y protegemos la información cuando visita nuestro sitio web o utiliza nuestros servicios de telecomunicaciones.",
      sections: [
        {
          title: "Información que Recopilamos",
          description:
            "Podemos recopilar datos de contacto, información comercial, datos técnicos e información relacionada con el servicio necesaria para proporcionar y mejorar nuestros servicios.",
        },
        {
          title: "Cómo Usamos la Información",
          description:
            "Utilizamos la información para prestar servicios, responder a consultas, mantener la seguridad, mejorar el rendimiento y cumplir con las obligaciones legales aplicables.",
        },
        {
          title: "Protección de Datos",
          description:
            "Aplicamos las medidas de seguridad adecuadas para ayudar a proteger la información contra el acceso no autorizado, el uso indebido, la pérdida o la divulgación.",
        },
        {
          title: "Servicios de Terceros",
          description:
            "Podemos compartir información relevante con proveedores de servicios autorizados y socios de telecomunicaciones cuando sea necesario para prestar nuestros servicios o cumplir con los requisitos legales.",
        },
      ],
      contactHeading: "Contáctenos",
      contactIntro:
        "Para preguntas o solicitudes relacionadas con la privacidad, comuníquese con:",
      companyName: "iNet Global Services Limited",
      emailLabel: "Correo Electrónico",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "Sitio Web",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "Dirección",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malasia",
      ],
    },
    termsOfService: {
      metaTitle: "Términos de Servicio | iNet Global",
      metaDescription:
        "Revise los términos que rigen el acceso al sitio web y el uso de los servicios de telecomunicaciones y comunicación empresarial de iNet Global.",
      badge: "ACUERDO LEGAL",
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: Junio de 2024",
      intro:
        "Estos Términos de Servicio rigen su acceso al sitio web de iNet Global y el uso de nuestros servicios de telecomunicaciones. Al utilizar nuestro sitio web o servicios, acepta los términos aplicables a su uso.",
      sections: [
        {
          title: "Nuestros Servicios",
          description:
            "iNet Global proporciona voz mayorista, mensajería SMS, verificación OTP, números virtuales y servicios de comunicación empresarial, sujeto a disponibilidad y acuerdos aplicables.",
        },
        {
          title: "Uso Aceptable",
          description:
            "Los clientes deben utilizar nuestros servicios de manera legal y no deben participar en fraudes, mensajes no autorizados, violaciones de seguridad u otras actividades prohibidas.",
        },
        {
          title: "Disponibilidad del Servicio",
          description:
            "Nuestro objetivo es proporcionar servicios confiables; sin embargo, la disponibilidad puede verse afectada por el mantenimiento, las condiciones de la red y los proveedores externos.",
        },
        {
          title: "Responsabilidad",
          description:
            "Los términos aplicables de responsabilidad, pago, suspensión y terminación se rigen por el acuerdo de cliente relevante y la ley aplicable.",
        },
      ],
      contactHeading: "Contáctenos",
      contactIntro:
        "Para preguntas o solicitudes relacionadas con la privacidad o los términos, comuníquese con:",
      companyName: "iNet Global Services Limited",
      emailLabel: "Correo Electrónico",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "Sitio Web",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "Dirección",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malasia",
      ],
    },
    securityCompliance: {
      metaTitle: "Seguridad y Cumplimiento | iNet Global",
      metaDescription:
        "Descubra el enfoque de iNet Global sobre seguridad en telecomunicaciones, mensajería responsable, protección de datos y cumplimiento normativo.",
      badge: "SEGURIDAD DE LA INFRAESTRUCTURA",
      title: "Seguridad y Cumplimiento",
      lastUpdated: "Última actualización: Junio de 2024",
      intro:
        "En iNet Global Services Limited, priorizamos las telecomunicaciones seguras, confiables y responsables. Trabajamos para proteger nuestra infraestructura de comunicación y respaldar el uso seguro de nuestros servicios de voz, mensajería y conectividad.",
      sections: [
        {
          title: "Seguridad de la Red",
          description:
            "Utilizamos medidas de seguridad adecuadas para ayudar a proteger la infraestructura de la red y respaldar la confiabilidad del servicio.",
        },
        {
          title: "Protección de Datos",
          description:
            "Nuestro objetivo es proteger la información manejada a través de nuestros servicios utilizando medidas técnicas y organizativas adecuadas.",
        },
        {
          title: "Mensajería Responsable",
          description:
            "Esperamos que los clientes sigan las leyes aplicables, los requisitos de consentimiento de mensajería y las políticas de telecomunicaciones relevantes.",
        },
        {
          title: "Prevención del Fraude",
          description:
            "No respaldamos el uso fraudulendente, abusivo o ilegal de nuestros servicios y podemos tomar las medidas pertinentes de conformidad con los acuerdos aplicables.",
        },
      ],
      contactHeading: "Informar una Inquietud de Seguridad",
      contactIntro:
        "Para inquietudes relacionadas con la seguridad, contáctenos en:",
      companyName: "iNet Global Services Limited",
      emailLabel: "Correo de Contacto de Seguridad",
      emailValue: "security@inetglobalservices.com",
      websiteLabel: "Sitio Web",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "Dirección",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malasia",
      ],
    },
  },

  // 3. Simplified Chinese
  zh: {
    privacyPolicy: {
      metaTitle: "隐私政策 | iNet Global",
      metaDescription:
        "了解 iNet Global 如何在其电信和商业通信服务中收集、使用和保护个人信息。",
      badge: "数据隐私与安全保护",
      title: "隐私政策",
      lastUpdated: "最近更新：2024年6月",
      intro:
        "iNet Global Services Limited 尊重您的隐私，并致力于保护您的个人与商业信息。本政策阐明了在您访问我们的网站或使用我们的电信服务时，我们如何收集、使用和保护您的信息。",
      sections: [
        {
          title: "我们收集的信息",
          description:
            "我们可能会收集提供和改进服务所必需的联系方式、企业信息、技术数据和与服务相关的记录。",
        },
        {
          title: "我们如何使用信息",
          description:
            "我们使用这些信息来提供服务、响应客户咨询、维护系统安全、提高性能并履行适用的法律义务。",
        },
        {
          title: "数据保护",
          description:
            "我们采取了严格的管理和技术安全措施，以防止未经授权的访问、滥用、丢失或泄露。",
        },
        {
          title: "第三方服务",
          description:
            "在提供服务或遵守法定要求所必需时，我们可能会与经授权的服务商和国际电信运营商伙伴共享必要信息。",
        },
      ],
      contactHeading: "联系我们",
      contactIntro: "如对隐私政策有任何疑问或请求，请通过以下方式联系：",
      companyName: "iNet Global Services Limited",
      emailLabel: "隐私联系邮箱",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "官方网站",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "注册地址",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia (马来西亚)",
      ],
    },
    termsOfService: {
      metaTitle: "服务条款 | iNet Global",
      metaDescription:
        "查阅有关访问 iNet Global 网站以及使用电信和企业通信服务的管理条款。",
      badge: "法律协议",
      title: "服务条款",
      lastUpdated: "最近更新：2024年6月",
      intro:
        "这些服务条款规范您对 iNet Global 网站及电信服务的访问和使用。使用我们的网站或服务即表示您同意适用条款。",
      sections: [
        {
          title: "我们的服务",
          description:
            "iNet Global 提供批发语音、短信、OTP 验证、虚拟号码和企业通信服务，具体视服务可用性和协议而定。",
        },
        {
          title: "合理使用规则",
          description:
            "客户必须合法使用我们的服务，严禁从事欺诈、未经授权的群发消息、安全侵害或其他违禁行为。",
        },
        {
          title: "服务可用性",
          description:
            "我们致力于提供稳定可靠的服务；但可用性可能会受维护窗口、网络环境及第三方基础运营商影响。",
        },
        {
          title: "责任与终止",
          description:
            "适用的责任、付款、暂停及终止条款均受相关客户主服务协议及适用法律管辖。",
        },
      ],
      contactHeading: "联系我们",
      contactIntro: "如有关于服务条款的疑问，请联系：",
      companyName: "iNet Global Services Limited",
      emailLabel: "法务联系邮箱",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "官方网站",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "注册地址",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia (马来西亚)",
      ],
    },
    securityCompliance: {
      metaTitle: "安全与合规 | iNet Global",
      metaDescription:
        "了解 iNet Global 在电信安全、合规消息传递、数据保护和行业法规方面的综合实践。",
      badge: "通信基础设施安全",
      title: "安全与合规",
      lastUpdated: "最近更新：2024年6月",
      intro:
        "在 iNet Global Services Limited，我们始终坚持安全、可靠且负责任的电信服务标准。我们保护基础设施并确保语音、短信和连接服务的合规运营。",
      sections: [
        {
          title: "网络安全",
          description:
            "我们实施行业领先的防护措施，保护网络物理与逻辑基础设施，并确保服务的高可用性。",
        },
        {
          title: "数据保护",
          description:
            "我们运用完善的技术与组织安全机制，保护通过我们服务处理的所有数据资产。",
        },
        {
          title: "合规负责的消息传递",
          description:
            "我们要求所有客户严格遵守反垃圾信息法规、用户同意规则及国际电信运营商各项合规条例。",
        },
        {
          title: "反欺诈与风险控制",
          description:
            "我们绝不容忍欺诈、骚扰或非法使用行为，并保留根据协议立即采取拦截和法律行动的权利。",
        },
      ],
      contactHeading: "报告安全问题",
      contactIntro: "如有安全方面的隐患反馈，请联系：",
      companyName: "iNet Global Services Limited",
      emailLabel: "安全联系邮箱",
      emailValue: "security@inetglobalservices.com",
      websiteLabel: "官方网站",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "注册地址",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia (马来西亚)",
      ],
    },
  },

  // 4. Hindi
  hi: {
    privacyPolicy: {
      metaTitle: "गोपनीयता नीति | iNet Global",
      metaDescription:
        "जानें कि iNet Global अपनी दूरसंचार और व्यावसायिक संचार सेवाओं में व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करता है।",
      badge: "डेटा गोपनीयता एवं सुरक्षा",
      title: "गोपनीयता नीति (Privacy Policy)",
      lastUpdated: "अंतिम अद्यतन: जून 2024",
      intro:
        "iNet Global Services Limited आपकी गोपनीयता का सम्मान करता है और आपकी व्यक्तिगत एवं व्यावसायिक जानकारी की सुरक्षा के लिए प्रतिबद्ध है। यह नीति बताती है कि जब आप हमारी वेबसाइट पर आते हैं या हमारी दूरसंचार सेवाओं का उपयोग करते हैं तो हम जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।",
      sections: [
        {
          title: "जानकारी जो हम एकत्र करते हैं",
          description:
            "हम अपनी सेवाओं को प्रदान करने और बेहतर बनाने के लिए आवश्यक संपर्क विवरण, व्यावसायिक जानकारी, तकनीकी डेटा और सेवा संबंधी जानकारी एकत्र कर सकते हैं।",
        },
        {
          title: "हम जानकारी का उपयोग कैसे करते हैं",
          description:
            "हम सेवाएं प्रदान करने, पूछताछ का जवाब देने, सुरक्षा बनाए रखने, प्रदर्शन में सुधार करने और लागू कानूनी दायित्वों को पूरा करने के लिए जानकारी का उपयोग करते हैं।",
        },
        {
          title: "डेटा सुरक्षा",
          description:
            "हम जानकारी को अनधिकृत पहुंच, दुरुपयोग, हानि या प्रकटीकरण से बचाने के लिए उचित सुरक्षा उपाय लागू करते हैं।",
        },
        {
          title: "तृतीय-पक्ष सेवाएं",
          description:
            "अपनी सेवाएं देने या कानूनी आवश्यकताओं का पालन करने के लिए आवश्यक होने पर हम अधिकृत सेवा प्रदाताओं और दूरसंचार भागीदारों के साथ प्रासंगिक जानकारी साझा कर सकते हैं।",
        },
      ],
      contactHeading: "संपर्क करें",
      contactIntro:
        "गोपनीयता से संबंधित प्रश्नों या अनुरोधों के लिए कृपया संपर्क करें:",
      companyName: "iNet Global Services Limited",
      emailLabel: "ईमेल",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "वेबसाइट",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "पता",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia (मलेशिया)",
      ],
    },
    termsOfService: {
      metaTitle: "सेवा की शर्तें | iNet Global",
      metaDescription:
        "iNet Global दूरसंचार और व्यावसायिक संचार सेवाओं तक पहुंच और उपयोग को नियंत्रित करने वाली शर्तों की समीक्षा करें।",
      badge: "कानूनी अनुबंध",
      title: "सेवा की शर्तें (Terms of Service)",
      lastUpdated: "अंतिम अद्यतन: जून 2024",
      intro:
        "ये सेवा की शर्तें iNet Global वेबसाइट तक आपकी पहुंच और हमारी दूरसंचार सेवाओं के उपयोग को नियंत्रित करती हैं। हमारी वेबसाइट या सेवाओं का उपयोग करके, आप लागू शर्तों से सहमत होते हैं।",
      sections: [
        {
          title: "हमारी सेवाएं",
          description:
            "iNet Global उपलब्धता और लागू समझौतों के अधीन थोक वॉयस, एसएमएस संदेश, ओटीपी सत्यापन, वर्चुअल नंबर और व्यावसायिक संचार सेवाएं प्रदान करता है।",
        },
        {
          title: "स्वीकार्य उपयोग",
          description:
            "ग्राहकों को हमारी सेवाओं का उपयोग कानूनी रूप से करना चाहिए और धोखाधड़ी, अनधिकृत संदेश भेजने, सुरक्षा उल्लंघनों या अन्य निषिद्ध गतिविधियों में शामिल नहीं होना चाहिए।",
        },
        {
          title: "सेवा की उपलब्धता",
          description:
            "हम विश्वसनीय सेवाएं प्रदान करने का लक्ष्य रखते हैं; हालांकि, रखरखाव, नेटवर्क की स्थिति और तीसरे पक्ष के प्रदाताओं द्वारा उपलब्धता प्रभावित हो सकती है।",
        },
        {
          title: "दायित्व",
          description:
            "लागू दायित्व, भुगतान, निलंबन और समाप्ति की शर्तें प्रासंगिक ग्राहक समझौते और लागू कानून द्वारा शासित होती हैं।",
        },
      ],
      contactHeading: "संपर्क करें",
      contactIntro: "सेवा शर्तों से संबंधित प्रश्नों के लिए कृपया संपर्क करें:",
      companyName: "iNet Global Services Limited",
      emailLabel: "ईमेल",
      emailValue: "info@inetglobalservices.com",
      websiteLabel: "वेबसाइट",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "पता",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia (मलेशिया)",
      ],
    },
    securityCompliance: {
      metaTitle: "सुरक्षा एवं अनुपालन | iNet Global",
      metaDescription:
        "दूरसंचार सुरक्षा, जिम्मेदार संदेश, डेटा सुरक्षा और अनुपालन के लिए iNet Global के दृष्टिकोण की खोज करें।",
      badge: "सुरक्षा एवं विनियामक अनुपालन",
      title: "सुरक्षा एवं अनुपालन (Security & Compliance)",
      lastUpdated: "अंतिम अद्यतन: जून 2024",
      intro:
        "iNet Global Services Limited में, हम सुरक्षित, विश्वसनीय और जिम्मेदार दूरसंचार को प्राथमिकता देते हैं। हम अपने बुनियादी ढांचे की रक्षा करने और अपनी सेवाओं के सुरक्षित उपयोग का समर्थन करने के लिए काम करते हैं।",
      sections: [
        {
          title: "नेटवर्क सुरक्षा",
          description:
            "हम नेटवर्क बुनियादी ढांचे की रक्षा करने और सेवा विश्वसनीयता का समर्थन करने के लिए उपयुक्त सुरक्षा उपायों का उपयोग करते हैं।",
        },
        {
          title: "डेटा सुरक्षा",
          description:
            "हम उचित तकनीकी और संगठनात्मक उपायों का उपयोग करके अपनी सेवाओं के माध्यम से संभाली जाने वाली जानकारी की सुरक्षा करने का लक्ष्य रखते हैं।",
        },
        {
          title: "जिम्मेदार संदेश सेवा",
          description:
            "हम उम्मीद करते हैं कि ग्राहक लागू कानूनों, संदेश सहमति आवश्यकताओं और प्रासंगिक दूरसंचार नीतियों का पालन करेंगे।",
        },
        {
          title: "धोखाधड़ी की रोकथाम",
          description:
            "हम अपनी सेवाओं के धोखाधड़ी, अपमानजनक या गैरकानूनी उपयोग का समर्थन नहीं करते हैं और समझौतों के अनुसार उचित कार्रवाई कर सकते हैं।",
        },
      ],
      contactHeading: "सुरक्षा संबंधी चिंता की रिपोर्ट करें",
      contactIntro: "सुरक्षा संबंधी चिंताओं के लिए, हमसे संपर्क करें:",
      companyName: "iNet Global Services Limited",
      emailLabel: "सुरक्षा संपर्क ईमेल",
      emailValue: "security@inetglobalservices.com",
      websiteLabel: "वेबसाइट",
      websiteValue: "https://www.inetglobalservices.com/",
      addressLabel: "पता",
      addressValue: [
        "Tower, Financial Park Labuan,",
        "Jalan Merdeka, 87000 F.T of labuan,",
        "Malaysia (मलेशिया)",
      ],
    },
  },
};

/**
 * Helper function to retrieve legal translations for any of the 31 supported languages,
 * gracefully falling back to English (or closest equivalent) if not explicitly defined.
 */
export const getLegalTranslations = (
  languageCode: string,
): LegalTranslations => {
  if (legalTranslations[languageCode]) {
    return legalTranslations[languageCode];
  }
  // Default fallback is English
  return legalTranslations.en;
};

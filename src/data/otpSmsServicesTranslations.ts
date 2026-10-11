import type { WholesaleMessageTranslation } from "./wholesaleMessageTranslations";

export interface OtpComparisonTranslation {
  comparisonTitle: string;
  comparisonSubtitle: string;
  otpTitle: string;
  otpBadge: string;
  otpItems: string[];
  appTitle: string;
  appBadge: string;
  appItems: string[];
  securityNotice: string;
}

export interface OtpSmsServicesTranslation extends WholesaleMessageTranslation {
  comparison: OtpComparisonTranslation;
}

const en: OtpSmsServicesTranslation = {
  "heroBadge": "OTP SMS SERVICES • AUTHENTICATION INFRASTRUCTURE",
  "heroTitle": "Every Verification, Connected with Confidence",
  "heroDesc": "Protect customer accounts and simplify user authentication with reliable OTP SMS services. Send one-time passwords for logins, registrations, password resets, and transaction verification through messaging infrastructure designed to support secure and efficient authentication workflows.",
  "talkToExpert": "Talk to an OTP Specialist",
  "exploreCapabilities": "Explore Capabilities",
  "stats": {
    "routing": "Reliable OTP",
    "routingLabel": "Timely OTP Delivery",
    "traffic": "Simple API",
    "trafficLabel": "Flexible API Integration",
    "insights": "Global Reach",
    "insightsLabel": "Global SMS Connectivity"
  },
  "heroLiveBadge1": {
    "title": "Instant OTP Delivery",
    "label": "Low-latency verification routes"
  },
  "heroLiveBadge2": {
    "title": "Carrier-Grade 2FA",
    "sub": "Direct operator routing"
  },
  "whyBadge": "MESSAGING INFRASTRUCTURE",
  "whyTitle": "Messaging Infrastructure That Protects Every Verification",
  "whySubtitle1": "Support secure customer authentication with OTP messaging designed for timely delivery, application integration, and scalable verification requirements.",
  "whySubtitle2": "Engineered for low-latency transmission and high delivery assurance across international operator networks.",
  "whyCards": [
    {
      "title": "Reliable OTP Delivery",
      "desc": "Send one-time passwords through SMS routes designed to support consistent delivery across supported destinations and mobile networks.",
      "footer": "High delivery assurance"
    },
    {
      "title": "Fast Verification Messages",
      "desc": "Help users complete authentication workflows efficiently with timely OTP delivery, subject to network and operator conditions.",
      "footer": "Low-latency routing"
    },
    {
      "title": "Flexible API Integration",
      "desc": "Connect OTP SMS capabilities with websites, mobile applications, and backend systems through supported messaging APIs.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Scalable Authentication",
      "desc": "Support growing user registrations, login requests, and transaction verification volumes with flexible messaging capacity.",
      "footer": "High-volume throughput"
    }
  ],
  "capabilitiesBadge": "ONE OTP PLATFORM",
  "capabilitiesTitle": "One OTP Platform, Built Around Your Business",
  "capabilitiesDesc": "Support different authentication journeys with OTP SMS services designed for everyday digital interactions and business-critical verification processes.",
  "designSolution": "Start Verifying Users",
  "solutionNote": "Configured for high-volume 2FA, logins, and transactional authentication.",
  "capabilities": [
    {
      "title": "Login Verification",
      "desc": "Verify user access by sending one-time passwords during supported login workflows.",
      "tag": "Login 2FA"
    },
    {
      "title": "Account Registration",
      "desc": "Confirm new user registrations with OTP messages that help validate access to a supplied mobile number.",
      "tag": "Sign-Up"
    },
    {
      "title": "Password Reset",
      "desc": "Support account recovery workflows with one-time passwords for eligible password reset requests.",
      "tag": "Account Recovery"
    },
    {
      "title": "Transaction Authentication",
      "desc": "Add an SMS-based verification step to supported financial and business transaction workflows.",
      "tag": "Transactions"
    },
    {
      "title": "User Identity Verification",
      "desc": "Help validate mobile number ownership during registration and other appropriate identity verification processes.",
      "tag": "Identity"
    },
    {
      "title": "Application Security",
      "desc": "Integrate OTP messaging into web applications, mobile apps, and digital services to support authentication requirements.",
      "tag": "App Security"
    },
    {
      "title": "Automated OTP Triggers",
      "desc": "Trigger verification messages through configured application events and authentication workflows.",
      "tag": "Automated"
    },
    {
      "title": "High-Volume OTP Messaging",
      "desc": "Support large volumes of verification requests with messaging capacity aligned with business demand.",
      "tag": "Scalable Volume"
    }
  ],
  "howItWorksBadge": "VERIFICATION WORKFLOW",
  "howItWorksTitle": "How OTP Delivery Operates",
  "howItWorksSubtitle": "Low-latency API submission to handset delivery within seconds.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "User Request",
      "desc": "The user triggers an authentication event such as a login, signup, or financial transaction.",
      "note": "Application trigger"
    },
    {
      "step": "02",
      "title": "API Submission",
      "desc": "Your system passes the one-time code to our OTP API gateway via secure REST endpoints.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Priority Carrier Routing",
      "desc": "The message is dispatched immediately over dedicated direct carrier routes with priority queueing.",
      "note": "Low latency routing"
    },
    {
      "step": "04",
      "title": "Handset Delivery & Verification",
      "desc": "The user receives the code and completes authentication, while delivery status is returned via webhook.",
      "note": "Real-time DLR receipt"
    }
  ],
  "networkBadge": "GLOBAL SMS COVERAGE",
  "networkTitle": "A Global Network Designed to Keep Verification Moving",
  "networkDesc": "Connect with users across supported markets through SMS connectivity designed to support authentication and account verification workflows.",
  "networkBullets": [
    "SMS connectivity across supported destinations",
    "Integration with authentication systems",
    "Scalable OTP message volumes",
    "Delivery status visibility where available",
    "Flexible API-based message submission",
    "Support for time-sensitive verification workflows"
  ],
  "networkStats": [
    {
      "val": "Global Coverage",
      "label": "Global SMS coverage across destinations"
    },
    {
      "val": "Priority Routes",
      "label": "Low latency verification traffic"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP Carrier Gateway",
    "sub": "Direct carrier routing for time-sensitive authentication"
  },
  "networkFooterNote": "Delivery speed and route options depend on destination operator policies and recipient network conditions.",
  "momentsBadge": "USE CASES & INDUSTRIES",
  "momentsTitle": "Built for Every Verification Moment",
  "momentsSubtitle": "OTP SMS supports digital authentication across industries where businesses need to verify users, protect account access, or confirm important actions.",
  "moments": [
    {
      "title": "Banking and Financial Services",
      "desc": "Support login verification and transaction authentication through OTP workflows designed to complement broader security controls.",
      "footer": "Financial 2FA & payment authorization"
    },
    {
      "title": "E-commerce and Retail",
      "desc": "Verify customer accounts, support secure sign-ins, and help protect eligible checkout and account actions.",
      "footer": "Secure checkout & account protection"
    },
    {
      "title": "Travel and Hospitality",
      "desc": "Confirm customer registrations, account access, and booking-related actions through SMS-based verification.",
      "footer": "Booking validation & passenger security"
    },
    {
      "title": "Digital Platforms and Applications",
      "desc": "Integrate OTP messaging into user registration, password recovery, and login processes across web and mobile applications.",
      "footer": "Smooth user onboarding & recovery"
    }
  ],
  "comparison": {
    "comparisonTitle": "See How OTP SMS Supports Authentication",
    "comparisonSubtitle": "Choose the appropriate verification method based on your application requirements, user experience, security needs, and target audience.",
    "otpTitle": "OTP SMS",
    "otpBadge": "Universal Mobile Access",
    "otpItems": [
      "Delivers one-time passwords to mobile numbers",
      "Works with SMS-capable mobile phones",
      "Can support registration, login, and recovery workflows",
      "Depends on mobile network delivery conditions"
    ],
    "appTitle": "App-Based Authentication",
    "appBadge": "Software Authenticator",
    "appItems": [
      "Can generate codes or approval requests within an authentication app",
      "May work without SMS connectivity, depending on the method",
      "Requires users to configure or access the relevant application",
      "Can offer security benefits depending on implementation"
    ],
    "securityNotice": "Security recommendation: OTP SMS can help verify possession of a mobile number, but it is not phishing-resistant and may be vulnerable to SIM swapping, interception, or social engineering. For sensitive systems, consider additional authentication controls and risk-based verification."
  },
  "intelligenceBadge": "DELIVERY INTELLIGENCE",
  "intelligenceTitle": "Sub-Second Latency & Real-Time Delivery Reports",
  "intelligenceDesc": "Monitor OTP performance metrics, carrier response times, and real-time delivery receipts (DLR) to ensure your users never experience authentication delays.",
  "intelligenceBullets": [
    "High-priority queueing for instant OTP dispatch",
    "Real-time DLR webhooks and status visibility",
    "Automated route failover for maximum delivery rates",
    "Detailed latency analytics by country and operator"
  ],
  "intelligenceFootnote": "Webhooks notify your security systems immediately upon handset receipt.",
  "messageLogCard": {
    "title": "OTP Delivery Status Feed",
    "badge": "PRIORITY DLR",
    "tab1": "Delivered",
    "tab2": "Queued",
    "tab3": "Verified",
    "colType": "Type",
    "colState": "Status",
    "colReceipt": "Carrier Latency",
    "row1Type": "Login OTP",
    "row1State": "Delivered",
    "row1Receipt": "1.2s Handset DLR",
    "row2Type": "Password Reset",
    "row2State": "Delivered",
    "row2Receipt": "0.9s Handset DLR",
    "row3Type": "Transaction Auth",
    "row3State": "Delivered",
    "row3Receipt": "1.1s Handset DLR",
    "footerText": "Sub-second verification delivery across global mobile operators"
  },
  "protectionTitle": "Protection Built for Critical Verification",
  "protectionBadge": "SECURITY & COMPLIANCE",
  "protectionCards": [
    {
      "title": "Rate Limiting & Abuse Prevention",
      "desc": "Safeguard against SMS pumping and brute force with configurable velocity limits."
    },
    {
      "title": "Global Sender ID Compliance",
      "desc": "Ensure international compliance and sender registration across regulated destinations."
    }
  ],
  "timelineBadge": "STRUCTURED IMPLEMENTATION",
  "timelineTitle": "From Integration to Verification, Together",
  "timelineSubtitle": "Deploy OTP SMS with a structured implementation process that aligns with your application, security requirements, and expected message traffic.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Share Your Requirements",
      "desc": "Provide details about your application, target countries, expected OTP volumes, and authentication workflows."
    },
    {
      "step": "02",
      "title": "Plan the Verification Flow",
      "desc": "Define OTP triggers, validity periods, resend limits, message templates, and appropriate verification rules."
    },
    {
      "step": "03",
      "title": "Integrate the SMS API",
      "desc": "Connect your application or authentication system to the supported OTP messaging API."
    },
    {
      "step": "04",
      "title": "Test and Validate",
      "desc": "Test message delivery, verification logic, rate limits, failure handling, and user experience before deployment."
    },
    {
      "step": "05",
      "title": "Go Live",
      "desc": "Launch your OTP messaging workflow and monitor available delivery metrics and verification performance."
    }
  ],
  "integrationPlan": {
    "title": "OTP Verification Specs",
    "planBadge": "PRODUCTION READY",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Time-Sensitive 2FA & Auth Codes",
    "formats": "Numeric OTP, Alphanumeric Tokens",
    "feedback": "Real-Time DLR Delivery Receipts",
    "senderSetup": "Registered Sender ID / Short Code",
    "check1": "Configured expiration timers & retry throttling",
    "check2": "Fallback routes and delivery status webhooks ready",
    "discussNote": "Speak with our specialists to plan your authentication integration.",
    "discussBtn": "Start Integration"
  },
  "faqBadge": "FREQUENTLY ASKED QUESTIONS",
  "faqTitle": "Common Questions About OTP SMS Services",
  "faqSubtitle": "Learn how our low-latency infrastructure secures your authentication flows.",
  "faqs": [
    {
      "q": "How fast are OTP SMS messages delivered?",
      "a": "Our priority OTP routes deliver codes in seconds under standard carrier network conditions."
    },
    {
      "q": "What APIs are available for OTP integration?",
      "a": "We support developer-friendly REST APIs with comprehensive documentation, code samples, and SMPP v3.4 for enterprise high-throughput setups."
    },
    {
      "q": "How can we protect against SMS pumping and fraud?",
      "a": "We provide built-in rate limiting, velocity checks, destination blocking, and IP whitelist capabilities to prevent abusive traffic."
    }
  ],
  "ctaBadge": "UPGRADE AUTHENTICATION",
  "ctaTitle": "Make Every Verification More Reliable",
  "ctaSubtitle": "Support your digital customer journeys with OTP SMS services designed for authentication, account verification, and transaction confirmation. Integrate messaging into your applications and deliver verification codes through supported mobile networks.",
  "contactUs": "Get Started with OTP SMS",
  "ctaFootnote": "Speak with our specialists to learn more about OTP messaging routes and API setup."
};

const es: OtpSmsServicesTranslation = {
  "heroBadge": "SERVICIOS SMS OTP • INFRAESTRUCTURA DE AUTENTICACIÓN",
  "heroTitle": "Cada verificación, conectada con total confianza y rapidez",
  "heroDesc": "Proteja las cuentas de sus clientes y simplifique la autenticación con servicios SMS OTP de alta confiabilidad. Envíe contraseñas de un solo uso para inicios de sesión, registros, restablecimiento de credenciales y validación de transacciones con latencia ultrabaja.",
  "talkToExpert": "Hablar con un Especialista en OTP",
  "exploreCapabilities": "Explorar Capacidades",
  "stats": {
    "routing": "OTP Confiable",
    "routingLabel": "Entrega Inmediata",
    "traffic": "API Flexible",
    "trafficLabel": "Integración Sencilla",
    "insights": "Alcance Global",
    "insightsLabel": "Conectividad Móvil Directa"
  },
  "heroLiveBadge1": {
    "title": "Entrega Instantánea",
    "label": "Rutas de verificación con baja latencia"
  },
  "heroLiveBadge2": {
    "title": "2FA Grado Operador",
    "sub": "Enrutamiento directo y prioritario"
  },
  "whyBadge": "INFRAESTRUCTURA DE SEGURIDAD",
  "whyTitle": "Infraestructura de mensajería que protege cada verificación",
  "whySubtitle1": "Respalde la autenticación segura de usuarios con mensajería OTP diseñada para entrega puntual, integración fluida y escalabilidad masiva.",
  "whySubtitle2": "Diseñada para transmisión de latencia mínima y máxima tasa de entrega en redes internacionales de telecomunicaciones.",
  "whyCards": [
    {
      "title": "Entrega Confiable de OTP",
      "desc": "Envíe códigos de un solo uso a través de rutas SMS directas diseñadas para una tasa de llegada consistente en redes móviles globales.",
      "footer": "Alta garantía de entrega"
    },
    {
      "title": "Mensajes de Verificación Rápidos",
      "desc": "Permita que los usuarios completen sus flujos de autenticación rápidamente con entregas en segundos.",
      "footer": "Enrutamiento de baja latencia"
    },
    {
      "title": "Integración Flexible mediante API",
      "desc": "Conecte capacidades de SMS OTP con sitios web, aplicaciones móviles y sistemas backend mediante API REST y SMPP.",
      "footer": "API REST y SMPP"
    },
    {
      "title": "Autenticación Escalable",
      "desc": "Gestione picos masivos de registros, inicios de sesión y validación de transacciones con capacidad de alto rendimiento.",
      "footer": "Capacidad de alto volumen"
    }
  ],
  "capabilitiesBadge": "PLATAFORMA INTEGRAL OTP",
  "capabilitiesTitle": "Una plataforma OTP integral diseñada para su empresa",
  "capabilitiesDesc": "Cubra diversos escenarios de autenticación digital con servicios SMS OTP adaptados a procesos críticos de negocio.",
  "designSolution": "Comenzar a Verificar Usuarios",
  "solutionNote": "Configurado para alto volumen de 2FA, inicios de sesión y autenticación transaccional.",
  "capabilities": [
    {
      "tag": "Inicio 2FA",
      "title": "Verificación de Inicio de Sesión",
      "desc": "Verifique el acceso de los usuarios enviando contraseñas de un solo uso durante los flujos de inicio de sesión."
    },
    {
      "tag": "Registro",
      "title": "Registro de Nuevas Cuentas",
      "desc": "Confirme registros de usuarios validando la posesión del número de teléfono móvil suministrado."
    },
    {
      "tag": "Recuperación",
      "title": "Restablecimiento de Contraseñas",
      "desc": "Facilite la recuperación segura de cuentas enviando códigos OTP para solicitudes legítimas de restablecimiento."
    },
    {
      "tag": "Transacciones",
      "title": "Autenticación de Transacciones",
      "desc": "Agregue un paso de verificación por SMS para autorizar transacciones financieras y pagos digitales."
    },
    {
      "tag": "Identidad",
      "title": "Validación de Identidad Digital",
      "desc": "Valide la propiedad del número móvil durante el onboarding y procesos KYC de cumplimiento normativo."
    },
    {
      "tag": "Seguridad App",
      "title": "Seguridad de Aplicaciones",
      "desc": "Integre mensajería OTP en aplicaciones web y móviles para reforzar la seguridad de la plataforma."
    },
    {
      "tag": "Automatizado",
      "title": "Disparadores Automáticos de OTP",
      "desc": "Active mensajes de verificación automáticos ante eventos específicos y reglas de autenticación del sistema."
    },
    {
      "tag": "Alto Volumen",
      "title": "Mensajería OTP a Gran Escala",
      "desc": "Procese grandes volúmenes de solicitudes de verificación con capacidad adaptada a la demanda corporativa."
    }
  ],
  "howItWorksBadge": "FLUJO DE TRABAJO",
  "howItWorksTitle": "Cómo opera la entrega de códigos OTP",
  "howItWorksSubtitle": "Envío mediante API con latencia de submilisegundos y entrega al terminal móvil en segundos.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Solicitud del Usuario",
      "desc": "El usuario desencadena un evento de autenticación como inicio de sesión, registro o pago.",
      "note": "Evento en la aplicación"
    },
    {
      "step": "02",
      "title": "Envío a la API",
      "desc": "Su sistema envía el código temporal a nuestra pasarela OTP mediante endpoints REST seguros.",
      "note": "API REST / SMPP"
    },
    {
      "step": "03",
      "title": "Enrutamiento Prioritario",
      "desc": "El mensaje se despacha de inmediato a través de rutas de operadores directos con colas de alta prioridad.",
      "note": "Enrutamiento prioritario"
    },
    {
      "step": "04",
      "title": "Entrega y Verificación",
      "desc": "El usuario recibe el código y completa el acceso; el estado de entrega se devuelve vía webhook.",
      "note": "Reporte DLR en tiempo real"
    }
  ],
  "networkBadge": "COBERTURA MÓVIL GLOBAL",
  "networkTitle": "Red global diseñada para mantener activas las verificaciones",
  "networkDesc": "Conéctese con usuarios en mercados internacionales a través de enlaces SMS directos para flujos de autenticación.",
  "networkBullets": [
    "Conectividad SMS directa hacia destinos globales soportados",
    "Integración transparente con sistemas de autenticación y 2FA",
    "Capacidad de escalar volúmenes de mensajes sin degradar la latencia",
    "Visibilidad del estado de entrega en tiempo real mediante reportes DLR",
    "Envío flexible de mensajes mediante API y protocolos estándar",
    "Soporte especializado para flujos de verificación sensibles al tiempo"
  ],
  "networkStats": [
    {
      "val": "Cobertura Global",
      "label": "Conectividad internacional en múltiples operadores"
    },
    {
      "val": "Rutas Prioritarias",
      "label": "Tráfico de verificación con mínima latencia"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Pasarela OTP de Operador",
    "sub": "Enrutamiento directo para autenticación crítica en tiempo real"
  },
  "networkFooterNote": "La velocidad de entrega y las rutas dependen de las políticas de los operadores de destino y del estado de las redes.",
  "momentsBadge": "CASOS DE USO E INDUSTRIAS",
  "momentsTitle": "Diseñado para cada momento de verificación",
  "momentsSubtitle": "El SMS OTP respalda la autenticación digital en industrias donde las empresas necesitan verificar identidades y proteger accesos.",
  "moments": [
    {
      "title": "Banca y Servicios Financieros",
      "desc": "Proteja el acceso a cuentas y autorice transferencias bancarias mediante flujos OTP de alta seguridad.",
      "footer": "2FA financiero y autorización de pagos"
    },
    {
      "title": "Comercio Electrónico y Retail",
      "desc": "Verifique cuentas de clientes, asegure compras en línea y proteja transacciones durante el pago.",
      "footer": "Compras seguras y protección de cuentas"
    },
    {
      "title": "Viajes y Hospitalidad",
      "desc": "Confirme reservas, registros de pasajeros y accesos a itinerarios mediante verificación SMS.",
      "footer": "Validación de reservas y seguridad"
    },
    {
      "title": "Plataformas y Aplicaciones Digitales",
      "desc": "Integre códigos de verificación en procesos de onboarding, recuperación y autenticación de usuarios.",
      "footer": "Onboarding seguro y rápido"
    }
  ],
  "comparison": {
    "comparisonTitle": "Cómo respalda el SMS OTP la autenticación de usuarios",
    "comparisonSubtitle": "Seleccione el método de verificación adecuado según su aplicación, experiencia de usuario y requisitos de seguridad.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Acceso Móvil Universal",
    "otpItems": [
      "Entrega códigos temporales a cualquier teléfono móvil",
      "Funciona en todos los terminales sin necesidad de instalar apps",
      "Ideal para registros masivos, accesos y recuperaciones",
      "Sujeto a las condiciones de conectividad de la red móvil"
    ],
    "appTitle": "Autenticación basada en Apps",
    "appBadge": "Autenticador de Software",
    "appItems": [
      "Genera códigos o solicitudes push dentro de una aplicación dedicada",
      "Puede funcionar sin cobertura celular si hay Wi-Fi disponible",
      "Requiere que el usuario descargue y configure una app adicional",
      "Ofrece beneficios de seguridad adicionales según la implementación"
    ],
    "securityNotice": "Recomendación de seguridad: El SMS OTP valida la posesión de una línea móvil, pero no es inmune a ataques de ingeniería social o intercambio de SIM. Para plataformas críticas, combine OTP con controles de riesgo adicionales."
  },
  "intelligenceBadge": "INTELIGENCIA DE ENTREGA",
  "intelligenceTitle": "Latencia en segundos y reportes de entrega en tiempo real",
  "intelligenceDesc": "Supervise métricas de rendimiento, tiempos de respuesta de operadores y confirmaciones DLR para evitar retrasos en el acceso de sus usuarios.",
  "intelligenceBullets": [
    "Colas de alta prioridad para despacho inmediato de contraseñas de un solo uso",
    "Webhooks DLR en tiempo real para visibilidad instantánea del estado de entrega",
    "Conmutación automática de rutas para garantizar la máxima tasa de entrega",
    "Métricas detalladas de latencia desglosadas por país y operador de destino"
  ],
  "intelligenceFootnote": "Los webhooks notifican a sus sistemas de seguridad tan pronto como el terminal móvil recibe el código.",
  "messageLogCard": {
    "title": "Monitoreo de Entrega OTP en Vivo",
    "badge": "DLR PRIORITARIO",
    "tab1": "Entregados",
    "tab2": "En Cola",
    "tab3": "Verificados",
    "colType": "Tipo",
    "colState": "Estado",
    "colReceipt": "Latencia del Operador",
    "row1Type": "OTP de Inicio",
    "row1State": "Entregado",
    "row1Receipt": "1.2s DLR Terminal",
    "row2Type": "Restablecimiento",
    "row2State": "Entregado",
    "row2Receipt": "0.9s DLR Terminal",
    "row3Type": "Autorización Pago",
    "row3State": "Entregado",
    "row3Receipt": "1.1s DLR Terminal",
    "footerText": "Entrega de verificación en segundos a través de operadores móviles globales"
  },
  "protectionTitle": "Protección diseñada para verificaciones críticas",
  "protectionBadge": "SEGURIDAD Y CUMPLIMIENTO",
  "protectionCards": [
    {
      "title": "Límites de Frecuencia y Prevención de Abusos",
      "desc": "Proteja su plataforma contra ataques de fuerza bruta y bombeo de SMS con límites de velocidad configurables."
    },
    {
      "title": "Cumplimiento Global de ID de Remitente",
      "desc": "Asegure el cumplimiento normativo internacional y el registro oficial de remitentes en destinos regulados."
    }
  ],
  "timelineBadge": "IMPLEMENTACIÓN ESTRUCTURADA",
  "timelineTitle": "De la integración a la verificación, paso a paso",
  "timelineSubtitle": "Despliegue SMS OTP con un proceso estructurado alineado con los requisitos de seguridad y volumen de su aplicación.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Defina sus Requisitos",
      "desc": "Indique detalles sobre su aplicación, países de destino, volúmenes estimados de OTP y flujos de autenticación."
    },
    {
      "step": "02",
      "title": "Diseñe el Flujo de Verificación",
      "desc": "Configure tiempos de expiración, límites de reenvío, plantillas de texto y reglas de seguridad de los códigos."
    },
    {
      "step": "03",
      "title": "Integre la API de SMS",
      "desc": "Conecte sus aplicaciones y sistemas de autenticación a nuestra API OTP mediante endpoints REST seguros."
    },
    {
      "step": "04",
      "title": "Pruebas y Validación",
      "desc": "Valide la velocidad de entrega, el manejo de fallos y la experiencia del usuario antes de pasar a producción."
    },
    {
      "step": "05",
      "title": "Lanzamiento en Producción",
      "desc": "Active el tráfico oficial de verificación con soporte técnico continuo y monitoreo de entregabilidad en vivo."
    }
  ],
  "integrationPlan": {
    "title": "Especificaciones de Integración OTP",
    "planBadge": "LISTO PARA PRODUCCIÓN",
    "connection": "API REST / Webhooks / SMPP",
    "traffic": "2FA Crítico y Códigos de Verificación",
    "formats": "OTP Numérico, Tokens Alfanuméricos",
    "feedback": "Reportes de Entrega DLR en Tiempo Real",
    "senderSetup": "ID de Remitente Registrado / Código Corto",
    "check1": "Temporizadores de expiración y límites de reintento configurados",
    "check2": "Rutas de respaldo y webhooks de entrega listos para producción",
    "discussNote": "Consulte con nuestros ingenieros para planificar su arquitectura de autenticación.",
    "discussBtn": "Iniciar Integración"
  },
  "faqBadge": "PREGUNTAS FRECUENTES",
  "faqTitle": "Preguntas habituales sobre servicios SMS OTP",
  "faqSubtitle": "Conozca cómo nuestra infraestructura de baja latencia asegura sus accesos.",
  "faqs": [
    {
      "q": "¿Con qué rapidez se entregan los mensajes SMS OTP?",
      "a": "Nuestras rutas prioritarias entregan los códigos en cuestión de segundos en condiciones normales de red de los operadores."
    },
    {
      "q": "¿Qué API están disponibles para integrar el servicio OTP?",
      "a": "Ofrecemos API REST documentadas para desarrolladores con ejemplos de código, así como conectividad SMPP v3.4 para entornos corporativos."
    },
    {
      "q": "¿Cómo podemos protegernos contra el fraude y el bombeo de SMS?",
      "a": "Proveemos límites de velocidad integrados, bloqueos por destino y listas blancas de IP para prevenir tráfico abusivo y sobrecostos."
    }
  ],
  "ctaBadge": "OPTIMICE SU AUTENTICACIÓN",
  "ctaTitle": "Haga que cada verificación sea más rápida y confiable",
  "ctaSubtitle": "Refuerce los flujos digitales de sus usuarios con servicios SMS OTP diseñados para autenticación, verificación de cuentas y confirmación de pagos.",
  "contactUs": "Comenzar con SMS OTP",
  "ctaFootnote": "Hable con nuestros especialistas para conocer más sobre rutas de autenticación y configuración de API."
};

const zh: OtpSmsServicesTranslation = {
  "heroBadge": "OTP 短信服务 • 身份验证基础设施",
  "heroTitle": "每一次验证，皆安全可靠且极速送达",
  "heroDesc": "借助高可靠的 OTP 短信服务保护客户账户并简化身份验证流程。通过专为高效、安全认证工作流设计的电信级短信基础设施，为用户登录、注册、密码重置和交易验证发送一次性验证码。",
  "talkToExpert": "咨询 OTP 专家",
  "exploreCapabilities": "探索服务能力",
  "stats": {
    "routing": "可靠 OTP",
    "routingLabel": "准时极速送达",
    "traffic": "简洁 API",
    "trafficLabel": "灵活轻松集成",
    "insights": "全球覆盖",
    "insightsLabel": "全网运营商直连"
  },
  "heroLiveBadge1": {
    "title": "秒级瞬时送达",
    "label": "极低延迟的专属验证通道"
  },
  "heroLiveBadge2": {
    "title": "运营商级 2FA",
    "sub": "专用直连路由保障"
  },
  "whyBadge": "安全基础设施",
  "whyTitle": "保障每一次身份验证的专业通信基础设施",
  "whySubtitle1": "通过专为即时送达、系统集成及高并发弹性扩展而构建的 OTP 验证码短信服务，全力支持客户账户安全。",
  "whySubtitle2": "专为国际电信网络设计，具备超低传输延迟和极高的送达率保障。",
  "whyCards": [
    {
      "title": "高可靠的 OTP 送达",
      "desc": "通过优质专属短信通道发送一次性密码，确保在各个支持的目标市场和移动网络中稳定交付。",
      "footer": "高到达率保障"
    },
    {
      "title": "极速验证消息传输",
      "desc": "凭借秒级快速交付，帮助用户顺畅、高效地完成各项身份认证与安全登录流程。",
      "footer": "低延迟路由"
    },
    {
      "title": "灵活便捷的 API 集成",
      "desc": "通过标准 REST API 和 SMPP 协议，将 OTP 短信无缝连接至您的网站、移动应用与后端系统。",
      "footer": "REST API 与 SMPP"
    },
    {
      "title": "弹性高并发处理能力",
      "desc": "凭借强劲的系统吞吐量，从容应对业务增长与突发的海量注册、登录及交易验证高峰。",
      "footer": "大容量高并发"
    }
  ],
  "capabilitiesBadge": "一站式 OTP 平台",
  "capabilitiesTitle": "围绕您的业务量身打造的一体化 OTP 平台",
  "capabilitiesDesc": "支持多样化的数字身份验证场景，为日常线上交互及关键业务审核提供坚实保障。",
  "designSolution": "立即开始验证用户",
  "solutionNote": "专为高并发 2FA、安全登录与交易风控认证优化配置。",
  "capabilities": [
    {
      "tag": "登录 2FA",
      "title": "登录身份验证",
      "desc": "在受支持的登录流程中发送一次性验证码，强化账户安全防护。"
    },
    {
      "tag": "用户注册",
      "title": "新用户注册校验",
      "desc": "在注册环节通过 OTP 验证用户填写的手机号码真实性与归属权。"
    },
    {
      "tag": "找回密码",
      "title": "密码重置与账户恢复",
      "desc": "在用户申请重置密码时发送安全验证码，防止账户被非法盗用。"
    },
    {
      "tag": "交易认证",
      "title": "关键交易核验",
      "desc": "在资金流转、大额支付和关键业务操作环节加入短信安全验证。"
    },
    {
      "tag": "身份核验",
      "title": "手机号所有权校验",
      "desc": "在合规 KYC 及实名验证过程中，高效验证用户与手机号的绑定关系。"
    },
    {
      "tag": "应用安全",
      "title": "全端应用安全接入",
      "desc": "将 OTP 短信无缝集成到 Web、移动客户端与数字服务中，满足安全规范。"
    },
    {
      "tag": "自动化触发",
      "title": "自动化事件触发",
      "desc": "根据应用端预设的安全策略与用户操作事件，实现验证码的自动下发。"
    },
    {
      "tag": "大容量扩展",
      "title": "海量并发短信息",
      "desc": "依托充足的通道储备与高并发架构，平稳支撑业务营销与验证峰值。"
    }
  ],
  "howItWorksBadge": "验证流程",
  "howItWorksTitle": "OTP 验证码交付流程",
  "howItWorksSubtitle": "从 API 毫秒级提交到手机终端秒级接收的全流程。",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "用户触发请求",
      "desc": "用户在客户端触发登录、注册、修改密码或支付等需要安全校验的事件。",
      "note": "应用端触发"
    },
    {
      "step": "02",
      "title": "API 快速提交",
      "desc": "您的业务系统通过高安全级别的 REST API 接口将验证码信息提交给网关。",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "运营商高优先级路由",
      "desc": "系统将消息立即放入专属高优先级队列，通过直连运营商通道瞬间派发。",
      "note": "低延迟专属通道"
    },
    {
      "step": "04",
      "title": "终端送达与回执",
      "desc": "用户手机秒级收到验证码并完成验证，同时系统通过 Webhook 回传详细送达回执。",
      "note": "实时 DLR 回执"
    }
  ],
  "networkBadge": "全球短信覆盖",
  "networkTitle": "确保验证畅通无阻的全球通信网络",
  "networkDesc": "通过覆盖全球多国的专属短信直连能力，全方位支持全球用户的身份验证与风控流程。",
  "networkBullets": [
    "覆盖全球主要国家与地区的运营商短信直连网络",
    "与各类 2FA 双因素认证及身份安全系统无缝对接",
    "支持海量验证码弹性并发下发，延迟低且稳定",
    "提供端到端透明的实时送达状态回执（DLR）",
    "支持标准 RESTful API 与 SMPP 协议快速接入",
    "针对对时间敏感度极高的验证场景提供专属保障"
  ],
  "networkStats": [
    {
      "val": "全球覆盖",
      "label": "直连全球主流国家与移动运营商"
    },
    {
      "val": "优先通道",
      "label": "低延迟专享验证码通道"
    }
  ],
  "networkBadgeOverlay": {
    "title": "运营商专属 OTP 网关",
    "sub": "面向时间敏感型认证的直连运营商高优先级路由"
  },
  "networkFooterNote": "实际送达速度受目标国家政策、运营商网络状况及终端信号环境影响。",
  "momentsBadge": "应用场景与行业",
  "momentsTitle": "赋能每一个关键验证时刻",
  "momentsSubtitle": "OTP 短信广泛应用于需要确认用户身份、保护资产安全或审核关键动作的各行各业。",
  "moments": [
    {
      "title": "银行与金融科技",
      "desc": "结合多层次安全风控，为账户登录、资金转账和线上支付提供可靠的短信 2FA 验证。",
      "footer": "金融 2FA 与支付授权"
    },
    {
      "title": "跨境电商与零售",
      "desc": "核实新客账户、保障安全登录，并在关键结算结账环节保护消费者账户权益。",
      "footer": "安全结算与账户保护"
    },
    {
      "title": "旅游与出行服务",
      "desc": "通过短信验证码确认旅客注册、车票酒店预订变更及行程信息安全访问。",
      "footer": "预订确认与旅客安全"
    },
    {
      "title": "数字平台与互联网应用",
      "desc": "在用户注册、密码找回和跨设备登录中嵌入 OTP 验证，打造流畅且安全的认证体验。",
      "footer": "顺畅的新客入驻与恢复"
    }
  ],
  "comparison": {
    "comparisonTitle": "了解 OTP 短信在身份认证中的独特优势",
    "comparisonSubtitle": "根据应用场景、用户体验、安全标准及目标受众，选择最适配的身份核验方案。",
    "otpTitle": "OTP 短信验证码",
    "otpBadge": "全终端免安装通用访问",
    "otpItems": [
      "直接发送一次性密码至手机，开箱即用",
      "兼容所有支持短信接收的移动手机设备",
      "广泛适用于注册、快速登录及账户找回",
      "送达依赖当地移动网络通信信号与环境"
    ],
    "appTitle": "基于 App 的身份验证器",
    "appBadge": "软件身份验证器",
    "appItems": [
      "在专用身份验证器应用内动态生成验证码或 Push",
      "在无移动蜂窝网络但有 Wi-Fi 情况下仍可运行",
      "需要用户额外下载、安装并完成初始绑定设置",
      "可提供特定机制下的端到端密码学防护"
    ],
    "securityNotice": "安全合规建议：OTP 短信可有效验证用户对手机号的实际持有权，但可能面临伪基站或 SIM 卡劫持风险。对于极高价值金融资产，建议结合风控模型与多因素认证组合部署。"
  },
  "intelligenceBadge": "智能监控与回执",
  "intelligenceTitle": "秒级低延迟与全透明实时交付报告",
  "intelligenceDesc": "实时监控 OTP 发送指标、运营商响应时延及状态回执（DLR），确保用户身份认证零等待。",
  "intelligenceBullets": [
    "专属高优先级队列，实现验证码即发即传",
    "全量实时 DLR 状态回执，支持 Webhook 即时回调",
    "智能多路由灾备自动切换，保障极限工况下送达率",
    "按国家、区域与运营商维度的多维度延迟统计看板"
  ],
  "intelligenceFootnote": "一旦手机终端成功接收验证码，系统将通过 Webhook 立即通知您的后端系统。",
  "messageLogCard": {
    "title": "OTP 实时投递状态看板",
    "badge": "优先回执",
    "tab1": "已送达",
    "tab2": "排队中",
    "tab3": "已核验",
    "colType": "验证类型",
    "colState": "状态",
    "colReceipt": "运营商延迟",
    "row1Type": "登录验证码",
    "row1State": "已送达",
    "row1Receipt": "1.2s 终端 DLR",
    "row2Type": "密码重置",
    "row2State": "已送达",
    "row2Receipt": "0.9s 终端 DLR",
    "row3Type": "交易支付确认",
    "row3State": "已送达",
    "row3Receipt": "1.1s 终端 DLR",
    "footerText": "在全球移动运营商网络中实现亚秒级极速送达"
  },
  "protectionTitle": "专为关键验证设计的全方位防护",
  "protectionBadge": "安全与风控合规",
  "protectionCards": [
    {
      "title": "频次限制与防刷轰炸保护",
      "desc": "提供精细化速率限制与风控过滤，有效防御短信轰炸、接口被刷及撞库攻击。"
    },
    {
      "title": "国际发送者 ID 合规报备",
      "desc": "遵循全球监管要求，为企业统一办理并配置官方合规的 Sender ID 与通道报备。"
    }
  ],
  "timelineBadge": "规范化落地流程",
  "timelineTitle": "从接口联调到生产上线，全程陪伴",
  "timelineSubtitle": "遵循结构化实施规范，确保短信服务与您的业务安全策略及容量需求完美匹配。",
  "timelineSteps": [
    {
      "step": "01",
      "title": "需求沟通与评估",
      "desc": "了解您的业务形态、目标国家、预估短信体量及典型认证使用场景。"
    },
    {
      "step": "02",
      "title": "认证工作流规划",
      "desc": "明确验证码有效时长、重试冷却时间、短信文案模板及风控规则。"
    },
    {
      "step": "03",
      "title": "API 快速集成联调",
      "desc": "开发人员将业务系统接入我们的高可用 REST API 或 SMPP 网关。"
    },
    {
      "step": "04",
      "title": "全真测试与验收",
      "desc": "在沙盒与准生产环境中全面测试多运营商送达时效、错误处理及回执回调。"
    },
    {
      "step": "05",
      "title": "正式上线与持续护航",
      "desc": "平稳切换生产流量，提供全天候技术支持与实时通道质量监控。"
    }
  ],
  "integrationPlan": {
    "title": "OTP 验证系统集成规范",
    "planBadge": "生产就绪",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "关键 2FA 验证与一次性密码",
    "formats": "纯数字 OTP、字母数字混合 Token",
    "feedback": "端到端实时 DLR 送达回执",
    "senderSetup": "合规报备的 Sender ID / 专用短码",
    "check1": "配置过期时钟、重试流控及防刷安全策略",
    "check2": "灾备自动容灾路由与实时回调系统部署完毕",
    "discussNote": "立即与我们的技术专家沟通，制定专属的身份认证实施方案。",
    "discussBtn": "开始系统集成"
  },
  "faqBadge": "常见问题",
  "faqTitle": "关于 OTP 短信服务的常见疑问解答",
  "faqSubtitle": "深入了解低延迟电信级通信基础设施如何守护您的业务安全。",
  "faqs": [
    {
      "q": "OTP 短信通常多长时间能送达用户手机？",
      "a": "在常规运营商网络环境下，我们的高优先级通道通常在数秒之内即可将验证码送达用户终端。"
    },
    {
      "q": "支持哪些开发接口形式？",
      "a": "提供规范易懂的 RESTful API、主流语言 SDK 示例代码，以及适用于企业级超大并发场景的 SMPP v3.4 协议。"
    },
    {
      "q": "平台如何防范短信接口被恶意盗刷或轰炸？",
      "a": "系统内置 IP 黑白名单、手机号下发频次限制、滑动验证交互防范以及异常流量拦截等全方位安全策略。"
    }
  ],
  "ctaBadge": "升级身份验证体系",
  "ctaTitle": "让每一次身份核验更加安全、快捷与可靠",
  "ctaSubtitle": "借助电信级 OTP 短信服务，赋能数字化客户旅程，确保用户注册、登录与关键交易无缝畅通。",
  "contactUs": "开启 OTP 短信服务",
  "ctaFootnote": "欢迎联系我们的专业架构师团队，获取通道配置建议与 API 接入文档。"
};

const hi: OtpSmsServicesTranslation = {
  "heroBadge": "OTP एसएमएस सेवाएं • प्रमाणीकरण अवसंरचना",
  "heroTitle": "प्रत्येक सत्यापन, पूर्ण विश्वसनीयता और आत्मविश्वास के साथ",
  "heroDesc": "विश्वसनीय OTP एसएमएस सेवाओं के साथ ग्राहक खातों को सुरक्षित रखें और उपयोगकर्ता प्रमाणीकरण को सरल बनाएं। सुरक्षित और कुशल प्रमाणीकरण वर्कफ़्लो के लिए डिज़ाइन किए गए मैसेजिंग इंफ्रास्ट्रक्चर के माध्यम से लॉगिन, पंजीकरण, पासवर्ड रीसेट और लेनदेन सत्यापन के लिए वन-टाइम पासवर्ड भेजें।",
  "talkToExpert": "OTP विशेषज्ञ से बात करें",
  "exploreCapabilities": "क्षमताओं का अन्वेषण करें",
  "stats": {
    "routing": "विश्वसनीय OTP",
    "routingLabel": "समय पर तुरंत डिलीवरी",
    "traffic": "सरल API",
    "trafficLabel": "लचीला आसान एकीकरण",
    "insights": "वैश्विक पहुंच",
    "insightsLabel": "ग्लोबल ऑपरेटर कनेक्टिविटी"
  },
  "heroLiveBadge1": {
    "title": "तत्काल OTP डिलीवरी",
    "label": "कम विलंबता वाले सत्यापन मार्ग"
  },
  "heroLiveBadge2": {
    "title": "कैरियर-ग्रेड 2FA",
    "sub": "सीधा ऑपरेटर रूटिंग"
  },
  "whyBadge": "सुरक्षा अवसंरचना",
  "whyTitle": "मैसेजिंग इंफ्रास्ट्रक्चर जो प्रत्येक सत्यापन की सुरक्षा करता है",
  "whySubtitle1": "समय पर डिलीवरी, एप्लिकेशन एकीकरण और बड़े पैमाने पर सत्यापन आवश्यकताओं के लिए निर्मित मजबूत सुरक्षा समाधान।",
  "whySubtitle2": "अंतरराष्ट्रीय ऑपरेटर नेटवर्क पर न्यूनतम विलंबता और उच्च डिलीवरी दर सुनिश्चित करने के लिए डिज़ाइन किया गया।",
  "whyCards": [
    {
      "title": "विश्वसनीय OTP डिलीवरी",
      "desc": "समर्थित गंतव्यों और मोबाइल नेटवर्कों पर सुसंगत डिलीवरी सुनिश्चित करने के लिए समर्पित प्राथमिक मार्गों के माध्यम से वन-टाइम पासवर्ड भेजें।",
      "footer": "उच्च डिलीवरी आश्वासन"
    },
    {
      "title": "तीव्र सत्यापन संदेश",
      "desc": "समय पर OTP डिलीवरी के साथ उपयोगकर्ताओं को प्रमाणीकरण वर्कफ़्लो आसानी से और तुरंत पूरा करने में मदद करें।",
      "footer": "कम विलंबता रूटिंग"
    },
    {
      "title": "लचीला API एकीकरण",
      "desc": "मानक REST API और SMPP के माध्यम से वेबसाइटों, मोबाइल ऐप्स और बैकएंड सिस्टम से OTP एसएमएस क्षमताओं को आसानी से जोड़ें।",
      "footer": "REST API और SMPP"
    },
    {
      "title": "स्केलेबल प्रमाणीकरण",
      "desc": "बढ़ते उपयोगकर्ता पंजीकरण, लॉगिन अनुरोधों और वित्तीय लेनदेन के भारी वॉल्यूम को आसानी से संभालें।",
      "footer": "उच्च-मात्रा थ्रूपुट"
    }
  ],
  "capabilitiesBadge": "एक संपूर्ण OTP प्लेटफॉर्म",
  "capabilitiesTitle": "आपके व्यवसाय की सुरक्षा के लिए निर्मित समग्र OTP प्लेटफॉर्म",
  "capabilitiesDesc": "दैनिक डिजिटल बातचीत और महत्वपूर्ण व्यावसायिक प्रक्रियाओं के लिए डिज़ाइन की गई OTP सेवाओं के साथ विभिन्न प्रमाणीकरण चरणों का समर्थन करें।",
  "designSolution": "उपयोगकर्ताओं का सत्यापन शुरू करें",
  "solutionNote": "उच्च-मात्रा 2FA, सुरक्षित लॉगिन और लेन-देन प्रमाणीकरण के लिए विशेष रूप से कॉन्फ़िगर किया गया।",
  "capabilities": [
    {
      "tag": "लॉगिन 2FA",
      "title": "लॉगिन सत्यापन",
      "desc": "उपयोगकर्ता खातों की सुरक्षा के लिए लॉगिन के दौरान वन-टाइम पासवर्ड भेजकर पहचान सत्यापित करें।"
    },
    {
      "tag": "पंजीकरण",
      "title": "खाता पंजीकरण",
      "desc": "दिए गए मोबाइल नंबर के स्वामित्व की पुष्टि करने के लिए नए उपयोगकर्ता पंजीकरण पर तुरंत OTP भेजें।"
    },
    {
      "tag": "पासवर्ड रीसेट",
      "title": "पासवर्ड पुनर्प्राप्ति",
      "desc": "सत्यापित पासवर्ड रीसेट अनुरोधों के लिए वन-टाइम पासवर्ड भेजकर सुरक्षित खाता पुनर्प्राप्ति सुनिश्चित करें।"
    },
    {
      "tag": "लेनदेन",
      "title": "लेन-देन प्रमाणीकरण",
      "desc": "वित्तीय लेनदेन और महत्वपूर्ण व्यावसायिक प्रक्रियाओं में अतिरिक्त सुरक्षा परत जोड़ने के लिए एसएमएस सत्यापन जोड़ें।"
    },
    {
      "tag": "पहचान",
      "title": "पहचान सत्यापन",
      "desc": "ऑनबोर्डिंग और केवाईसी प्रक्रियाओं के दौरान मोबाइल नंबर के स्वामित्व को सत्यापित करने में सहायता करें।"
    },
    {
      "tag": "ऐप सुरक्षा",
      "title": "एप्लिकेशन सुरक्षा",
      "desc": "सुरक्षा आवश्यकताओं का अनुपालन करने के लिए वेब ऐप्स और मोबाइल ऐप्स में सीधे OTP मैसेजिंग एकीकृत करें।"
    },
    {
      "tag": "स्वचालित",
      "title": "स्वचालित OTP ट्रिगर",
      "desc": "कॉन्फ़िगर किए गए एप्लिकेशन ईवेंट्स और प्रमाणीकरण वर्कफ़्लो के आधार पर स्वचालित रूप से सत्यापन संदेश भेजें।"
    },
    {
      "tag": "स्केलेबल क्षमता",
      "title": "उच्च-मात्रा OTP मैसेजिंग",
      "desc": "व्यावसायिक मांग के अनुरूप बड़े पैमाने पर सत्यापन अनुरोधों को संभालने के लिए उच्च क्षमता का लाभ उठाएं।"
    }
  ],
  "howItWorksBadge": "सत्यापन वर्कफ़्लो",
  "howItWorksTitle": "OTP डिलीवरी कैसे काम करती है",
  "howItWorksSubtitle": "API से सबमिट होने से लेकर सेकंडों में हैंडसेट पर डिलीवरी तक।",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "उपयोगकर्ता अनुरोध",
      "desc": "उपयोगकर्ता लॉगिन, साइनअप या वित्तीय लेनदेन जैसी प्रमाणीकरण गतिविधि शुरू करता है।",
      "note": "एप्लिकेशन ट्रिगर"
    },
    {
      "step": "02",
      "title": "API सबमिशन",
      "desc": "आपका सिस्टम सुरक्षित REST एंडपॉइंट्स के माध्यम से हमारे OTP API गेटवे को वन-टाइम कोड भेजता है।",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "प्राथमिकता कैरियर रूटिंग",
      "desc": "संदेश तुरंत प्राथमिकता कतारों के साथ समर्पित प्रत्यक्ष दूरसंचार मार्गों पर भेजा जाता है।",
      "note": "कम विलंबता रूटिंग"
    },
    {
      "step": "04",
      "title": "हैंडसेट डिलीवरी और सत्यापन",
      "desc": "उपयोगकर्ता को कोड प्राप्त होता है और सत्यापन पूरा होता है, जबकि डिलीवरी स्थिति वेबहुक द्वारा वापस भेजी जाती है।",
      "note": "वास्तविक समय DLR रसीद"
    }
  ],
  "networkBadge": "ग्लोबल एसएमएस कवरेज",
  "networkTitle": "सत्यापन को निर्बाध रखने के लिए डिज़ाइन किया गया एक वैश्विक नेटवर्क",
  "networkDesc": "प्रमाणीकरण और खाता सत्यापन वर्कफ़्लो के लिए विश्वसनीय एसएमएस कनेक्टिविटी के माध्यम से उपयोगकर्ताओं से जुड़ें।",
  "networkBullets": [
    "समर्थित अंतरराष्ट्रीय गंतव्यों में विश्वसनीय एसएमएस कनेक्टिविटी",
    "मौजूदा प्रमाणीकरण प्रणालियों के साथ सहज एकीकरण",
    "मांग के अनुसार स्केलेबल OTP संदेश वॉल्यूम क्षमता",
    "रीयल-टाइम DLR डिलीवरी स्थिति की पूर्ण दृश्यता",
    "लचीला API-आधारित मैसेज सबमिशन और प्रबंधन",
    "समय-संवेदनशील सत्यापन वर्कफ़्लो के लिए समर्पित प्राथमिक रूट"
  ],
  "networkStats": [
    {
      "val": "ग्लोबल कवरेज",
      "label": "विश्वभर के प्रमुख दूरसंचार ऑपरेटरों से सीधा जुड़ाव"
    },
    {
      "val": "प्राथमिक मार्ग",
      "label": "न्यूनतम विलंबता वाला विशेष प्रमाणीकरण ट्रैफ़िक"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP कैरियर गेटवे",
    "sub": "समय-संवेदनशील प्रमाणीकरण के लिए प्रत्यक्ष ऑपरेटर रूटिंग"
  },
  "networkFooterNote": "डिलीवरी की गति और मार्ग विकल्प गंतव्य ऑपरेटर नीतियों और नेटवर्क स्थितियों पर निर्भर करते हैं।",
  "momentsBadge": "उपयोग के मामले और उद्योग",
  "momentsTitle": "प्रत्येक महत्वपूर्ण सत्यापन क्षण के लिए निर्मित",
  "momentsSubtitle": "OTP एसएमएस विभिन्न उद्योगों में डिजिटल प्रमाणीकरण का समर्थन करता है जहां पहचान सत्यापन और खाता सुरक्षा आवश्यक है।",
  "moments": [
    {
      "title": "बैंकिंग और वित्तीय सेवाएं",
      "desc": "व्यापक सुरक्षा नियंत्रणों के साथ लॉगिन सत्यापन और लेन-देन प्रमाणीकरण को सशक्त बनाएं।",
      "footer": "वित्तीय 2FA और भुगतान प्राधिकरण"
    },
    {
      "title": "ई-कॉमर्स और खुदरा",
      "desc": "ग्राहक खातों को सत्यापित करें, सुरक्षित साइन-इन सुनिश्चित करें और ऑनलाइन चेकआउट की रक्षा करें।",
      "footer": "सुरक्षित चेकआउट और खाता सुरक्षा"
    },
    {
      "title": "यात्रा और आतिथ्य",
      "desc": "एसएमएस सत्यापन के माध्यम से आरक्षण, खाता पहुंच और बुकिंग से संबंधित कार्यों की पुष्टि करें।",
      "footer": "बुकिंग सत्यापन और यात्री सुरक्षा"
    },
    {
      "title": "डिजिटल प्लेटफॉर्म और ऐप्स",
      "desc": "वेब और मोबाइल अनुप्रयोगों में उपयोगकर्ता पंजीकरण, पासवर्ड पुनर्प्राप्ति और लॉगिन में OTP जोड़ें।",
      "footer": "आसान उपयोगकर्ता ऑनबोर्डिंग और सुरक्षा"
    }
  ],
  "comparison": {
    "comparisonTitle": "देखें कि OTP एसएमएस प्रमाणीकरण को कैसे सशक्त बनाता है",
    "comparisonSubtitle": "अपनी सुरक्षा आवश्यकताओं, उपयोगकर्ता अनुभव और लक्षित दर्शकों के आधार पर सबसे उपयुक्त सत्यापन विधि चुनें।",
    "otpTitle": "OTP एसएमएस",
    "otpBadge": "सार्वभौमिक मोबाइल पहुंच",
    "otpItems": [
      "मोबाइल नंबरों पर सीधे वन-टाइम पासवर्ड डिलीवर करता है",
      "बिना किसी ऐप डाउनलोड के सभी मोबाइल फोन पर काम करता है",
      "पंजीकरण, लॉगिन और खाता पुनर्प्राप्ति के लिए आदर्श",
      "मोबाइल नेटवर्क और कनेक्टिविटी स्थितियों पर निर्भर"
    ],
    "appTitle": "ऐप-आधारित प्रमाणीकरण",
    "appBadge": "सॉफ्टवेयर ऑथेंटिकेटर",
    "appItems": [
      "ऑथेंटिकेटर ऐप के भीतर कोड या अनुमोदन अनुरोध उत्पन्न करता है",
      "पद्धति के आधार पर, एसएमएस कनेक्टिविटी के बिना भी काम कर सकता है",
      "उपयोगकर्ताओं को संबंधित एप्लिकेशन इंस्टॉल और कॉन्फ़िगर करने की आवश्यकता होती है",
      "कार्यान्वयन के आधार पर विशिष्ट सुरक्षा लाभ प्रदान कर सकता है"
    ],
    "securityNotice": "सुरक्षा सलाह: OTP एसएमएस मोबाइल नंबर के कब्जे को सत्यापित करने में मदद करता है, लेकिन यह फ़िशिंग-प्रतिरोधी नहीं है। अत्यधिक संवेदनशील प्रणालियों के लिए अतिरिक्त सुरक्षा नियंत्रणों पर विचार करें।"
  },
  "intelligenceBadge": "डिलीवरी इंटेलिजेंस",
  "intelligenceTitle": "सेकंडों में डिलीवरी और वास्तविक समय डिलीवरी रिपोर्ट",
  "intelligenceDesc": "OTP प्रदर्शन मेट्रिक्स और वास्तविक समय डिलीवरी रसीदों (DLR) की निगरानी करें ताकि उपयोगकर्ताओं को कभी भी देरी का सामना न करना पड़े।",
  "intelligenceBullets": [
    "तत्काल OTP प्रेषण के लिए उच्च-प्राथमिकता कतार प्रणाली",
    "त्वरित स्थिति दृश्यता के लिए रीयल-टाइम DLR वेबहुक",
    "अधिकतम डिलीवरी दर के लिए स्वचालित रूट फेलओवर",
    "देश और ऑपरेटर के अनुसार विस्तृत विलंबता विश्लेषण"
  ],
  "intelligenceFootnote": "जैसे ही हैंडसेट पर कोड प्राप्त होता है, वेबहुक तुरंत आपके सुरक्षा सिस्टम को सूचित करते हैं।",
  "messageLogCard": {
    "title": "लाइव OTP डिलीवरी स्थिति",
    "badge": "प्राथमिकता DLR",
    "tab1": "वितरित",
    "tab2": "कतार में",
    "tab3": "सत्यापित",
    "colType": "प्रकार",
    "colState": "स्थिति",
    "colReceipt": "कैरियर विलंबता",
    "row1Type": "लॉगिन OTP",
    "row1State": "वितरित",
    "row1Receipt": "1.2s हैंडसेट DLR",
    "row2Type": "पासवर्ड रीसेट",
    "row2State": "वितरित",
    "row2Receipt": "0.9s हैंडसेट DLR",
    "row3Type": "लेनदेन प्रमाणीकरण",
    "row3State": "वितरित",
    "row3Receipt": "1.1s हैंडसेट DLR",
    "footerText": "वैश्विक ऑपरेटरों में सेकंडों में सत्यापन डिलीवरी"
  },
  "protectionTitle": "गंभीर सत्यापन के लिए निर्मित सुरक्षा",
  "protectionBadge": "सुरक्षा और अनुपालन",
  "protectionCards": [
    {
      "title": "दर सीमित करना और दुरुपयोग रोकथाम",
      "desc": "कॉन्फ़िगर करने योग्य सीमाओं के साथ एसएमएस पंपिंग और ब्रूट फोर्स हमलों से अपने सिस्टम की रक्षा करें।"
    },
    {
      "title": "वैश्विक प्रेषक आईडी अनुपालन",
      "desc": "विनियमित अंतरराष्ट्रीय गंतव्यों में आधिकारिक सेंडर आईडी पंजीकरण और स्थानीय कानूनों का अनुपालन सुनिश्चित करें।"
    }
  ],
  "timelineBadge": "चरणबद्ध कार्यान्वयन",
  "timelineTitle": "एकीकरण से सत्यापन तक, एक व्यवस्थित प्रक्रिया",
  "timelineSubtitle": "अपने एप्लिकेशन, सुरक्षा आवश्यकताओं और अपेक्षित ट्रैफ़िक के अनुरूप एक संरचित प्रक्रिया के साथ OTP एसएमएस तैनात करें।",
  "timelineSteps": [
    {
      "step": "01",
      "title": "अपनी आवश्यकताएं साझा करें",
      "desc": "अपने एप्लिकेशन, लक्षित देशों, अनुमानित OTP वॉल्यूम और प्रमाणीकरण प्रवाह के बारे में विवरण प्रदान करें।"
    },
    {
      "step": "02",
      "title": "सत्यापन प्रवाह की योजना बनाएं",
      "desc": "OTP समाप्ति समय, पुनः प्रयास सीमाएं, संदेश टेम्पलेट और सुरक्षा नियम निर्धारित करें।"
    },
    {
      "step": "03",
      "title": "एसएमएस API को एकीकृत करें",
      "desc": "अपने एप्लिकेशन को हमारे सुरक्षित REST एंडपॉइंट्स या SMPP गेटवे से कनेक्ट करें।"
    },
    {
      "step": "04",
      "title": "परीक्षण और सत्यापन करें",
      "desc": "उत्पादन में जाने से पहले संदेश डिलीवरी, विफलता प्रबंधन और उपयोगकर्ता अनुभव का परीक्षण करें।"
    },
    {
      "step": "05",
      "title": "लाइव जाएं",
      "desc": "अपने OTP वर्कफ़्लो को लॉन्च करें और उपलब्ध डिलीवरी मेट्रिक्स की वास्तविक समय में निगरानी करें।"
    }
  ],
  "integrationPlan": {
    "title": "OTP सत्यापन विनिर्देश",
    "planBadge": "उत्पादन के लिए तैयार",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "समय-संवेदनशील 2FA और प्रमाणीकरण कोड",
    "formats": "संख्यात्मक OTP, अल्फ़ान्यूमेरिक टोकन",
    "feedback": "वास्तविक समय DLR डिलीवरी रसीदें",
    "senderSetup": "पंजीकृत प्रेषक आईडी / शॉर्ट कोड",
    "check1": "समाप्ति टाइमर और थ्रॉटलिंग नियम कॉन्फ़िगर किए गए",
    "check2": "फॉलबैक रूट और डिलीवरी वेबहुक उत्पादन के लिए तैयार",
    "discussNote": "अपने प्रमाणीकरण एकीकरण की योजना बनाने के लिए हमारे विशेषज्ञों से बात करें।",
    "discussBtn": "एकीकरण शुरू करें"
  },
  "faqBadge": "अक्सर पूछे जाने वाले प्रश्न",
  "faqTitle": "OTP एसएमएस सेवाओं के बारे में सामान्य प्रश्न",
  "faqSubtitle": "जानें कि हमारा कम विलंबता वाला इंफ्रास्ट्रक्चर आपके प्रमाणीकरण प्रवाह को कैसे सुरक्षित करता है।",
  "faqs": [
    {
      "q": "OTP एसएमएस संदेश कितनी तेजी से वितरित होते हैं?",
      "a": "मानक वाहक नेटवर्क स्थितियों के तहत हमारे प्राथमिकता वाले OTP मार्ग कुछ ही सेकंड में कोड वितरित करते हैं।"
    },
    {
      "q": "OTP एकीकरण के लिए कौन से API उपलब्ध हैं?",
      "a": "हम विस्तृत दस्तावेज़ीकरण के साथ डेवलपर-अनुकूल REST API और उच्च-मात्रा वाले सेटअप के लिए SMPP v3.4 का समर्थन करते हैं।"
    },
    {
      "q": "हम एसएमएस पंपिंग और धोखाधड़ी से कैसे रक्षा कर सकते हैं?",
      "a": "हम अनपेक्षित ट्रैफ़िक को रोकने के लिए अंतर्निहित दर सीमा, गंतव्य अवरोधन और आईपी श्वेतसूची क्षमताएं प्रदान करते हैं।"
    }
  ],
  "ctaBadge": "प्रमाणीकरण अपग्रेड करें",
  "ctaTitle": "प्रत्येक सत्यापन को अधिक विश्वसनीय बनाएं",
  "ctaSubtitle": "प्रमाणीकरण, खाता सत्यापन और लेनदेन पुष्टि के लिए डिज़ाइन की गई OTP सेवाओं के साथ अपनी डिजिटल यात्रा को सुरक्षित करें।",
  "contactUs": "OTP एसएमएस के साथ शुरुआत करें",
  "ctaFootnote": "OTP मैसेजिंग मार्गों और API सेटअप के बारे में अधिक जानने के लिए हमारे विशेषज्ञों से परामर्श करें।"
};

const ar: OtpSmsServicesTranslation = {
  "heroBadge": "خدمات الرسائل القصيرة OTP • البنية التحتية للمصادقة",
  "heroTitle": "كل عملية تحقق، متصلة بثقة تامة وسرعة فائقة",
  "heroDesc": "احمِ حسابات عملائك وبسّط عملية مصادقة المستخدمين من خلال خدمات رسائل OTP فائقة الموثوقية. أرسل كلمات المرور لمرة واحدة لتسجيل الدخول، إنشاء الحسابات، إعادة تعيين كلمات المرور، والتحقق من المعاملات عبر بنية تحتية مخصصة لأعلى معايير الأمان.",
  "talkToExpert": "تحدث مع خبير OTP",
  "exploreCapabilities": "استكشف القدرات",
  "stats": {
    "routing": "رمز OTP موثوق",
    "routingLabel": "تسليم فوري ومباشر",
    "traffic": "واجهة API مرنة",
    "trafficLabel": "تكامل سريع وسهل",
    "insights": "تغطية عالمية",
    "insightsLabel": "اتصال مباشر بالمشغلين"
  },
  "heroLiveBadge1": {
    "title": "تسليم فوري للرموز",
    "label": "مسارات تحقق ذات استجابة فورية"
  },
  "heroLiveBadge2": {
    "title": "مصادقة 2FA على مستوى المشغل",
    "sub": "توجيه ذو أولوية قصوى"
  },
  "whyBadge": "البنية التحتية للأمان",
  "whyTitle": "بنية تحتية للمراسلة تحمي كل عملية تحقق",
  "whySubtitle1": "ادعم المصادقة الآمنة لعملائك من خلال رسائل OTP المصممة للتسليم الدقيق، والتكامل السلس، والقدرة العالية على التوسع.",
  "whySubtitle2": "مُصممة لنقل البيانات بأقل زمن استجابة وأعلى معدلات وصول مضمونة عبر شبكات الاتصالات الدولية.",
  "whyCards": [
    {
      "title": "تسليم موثوق لرموز OTP",
      "desc": "أرسل كلمات المرور لمرة واحدة عبر مسارات رسائل قصيرة مخصصة تضمن وصولاً متسقاً إلى كافة الوجهات والشبكات المدعومة.",
      "footer": "ضمان وصول عالي"
    },
    {
      "title": "رسائل تحقق فائقة السرعة",
      "desc": "ساعد المستخدمين على إكمال عمليات تسجيل الدخول والتحقق بسرعة وسلاسة مع وصول الرموز في غضون ثوانٍ.",
      "footer": "توجيه بزمن انتقال فائق الصغر"
    },
    {
      "title": "تكامل مرن عبر واجهات API",
      "desc": "اربط خدمات OTP بمواقع الويب وتطبيقات الهواتف والأنظمة الخلفية عبر واجهات REST API وبروتوكول SMPP.",
      "footer": "REST API و SMPP"
    },
    {
      "title": "مصادقة قابلة للتوسع",
      "desc": "تعامل بكفاءة مع أعداد المستخدمين المتزايدة، وطلبات التسجيل الضخمة، والتحقق من المعاملات في أوقات الذروة.",
      "footer": "سعة معالجة عالية الحجم"
    }
  ],
  "capabilitiesBadge": "منصة OTP شاملة",
  "capabilitiesTitle": "منصة OTP متكاملة مبنية خصيصاً لتناسب احتياجات أعمالك",
  "capabilitiesDesc": "ادعم مختلف مراحل التحقق الرقمي عبر خدمات رسائل OTP المصممة للمعاملات الرقمية اليومية والعمليات الحيوية.",
  "designSolution": "ابدأ في التحقق من المستخدمين",
  "solutionNote": "مُعدة خصيصاً للمصادقة الثنائية (2FA) الضخمة وتسجيل الدخول والتحقق المالي.",
  "capabilities": [
    {
      "tag": "دخول 2FA",
      "title": "التحقق من تسجيل الدخول",
      "desc": "تحقق من وصول المستخدمين بإرسال كلمات مرور لمرة واحدة أثناء تسجيل الدخول لتعزيز الأمان."
    },
    {
      "tag": "إنشاء حساب",
      "title": "تسجيل الحسابات الجديدة",
      "desc": "أكّد تسجيلات المستخدمين الجدد من خلال التحقق الفوري من ملكية رقم الهاتف المحمول."
    },
    {
      "tag": "استعادة الحساب",
      "title": "إعادة تعيين كلمة المرور",
      "desc": "سهّل استرداد الحسابات بأمان عن طريق إرسال رموز تحقق مؤقتة لطلبات إعادة التعيين المعتمدة."
    },
    {
      "tag": "المعاملات",
      "title": "مصادقة المعاملات المالية",
      "desc": "أضف خطوة تحقق عبر الرسائل القصيرة لتأكيد التحويلات المالية والمعاملات الحساسة."
    },
    {
      "tag": "الهوية",
      "title": "التحقق من هوية المستخدم",
      "desc": "تحقق من ملكية رقم الهاتف المحمول أثناء التسجيل وإجراءات التحقق من الهوية (KYC)."
    },
    {
      "tag": "أمان التطبيقات",
      "title": "أمان التطبيقات والمنصات",
      "desc": "ادمج رسائل OTP في تطبيقات الويب والهواتف والخدمات الرقمية لتلبية المعايير الأمنية الصارمة."
    },
    {
      "tag": "أتمتة",
      "title": "إطلاق الرموز تلقائياً",
      "desc": "أرسل رسائل التحقق تلقائياً بناءً على أحداث معينة داخل التطبيق وقواعد المصادقة المحددة."
    },
    {
      "tag": "سعة هائلة",
      "title": "رسائل OTP بأحجام ضخمة",
      "desc": "تعامل مع أعداد هائلة من طلبات التحقق مع بنية تحتية تواكب متطلبات نمو عملك بكفاءة."
    }
  ],
  "howItWorksBadge": "مراحل التحقق",
  "howItWorksTitle": "كيف تعمل آلية تسليم رموز OTP",
  "howItWorksSubtitle": "من إرسال الطلب عبر الـ API وحتى وصول الرمز إلى الهاتف في ثوانٍ معدودة.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "طلب المستخدم",
      "desc": "يقوم المستخدم ببدء إجراء يتطلب المصادقة مثل الدخول أو التسجيل أو الدفع.",
      "note": "حدث بالتطبيق"
    },
    {
      "step": "02",
      "title": "إرسال عبر API",
      "desc": "يقوم نظامك بتمرير الرمز المؤقت إلى بوابة OTP الآمنة عبر واجهة REST API.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "توجيه ذو أولوية",
      "desc": "تُرسل الرسالة فوراً عبر مسارات مشغلي الاتصالات المباشرة مع طوابير ذات أولوية قصوى.",
      "note": "توجيه بأقل زمن انتقال"
    },
    {
      "step": "04",
      "title": "الاستلام والتحقق",
      "desc": "يستلم المستخدم الرمز ويكمل التحقق، ويتم إرجاع حالة التسليم مباشرة عبر الويب هوك.",
      "note": "إشعار DLR لحظي"
    }
  ],
  "networkBadge": "تغطية عالمية للرسائل",
  "networkTitle": "شبكة عالمية مصممة لضمان استمرارية عمليات التحقق",
  "networkDesc": "تواصل مع المستخدمين في الأسواق العالمية عبر اتصال مباشر للرسائل القصيرة يدعم تدفقات المصادقة الحيوية.",
  "networkBullets": [
    "اتصال موثوق للرسائل القصيرة عبر مختلف الوجهات الدولية المدعومة",
    "تكامل سلس مع أنظمة المصادقة والأمان الحالية",
    "سعات رسائل قابلة للتطوير لتلبية متطلبات التحقق المتزايدة",
    "رؤية واضحة ومباشرة لحالات التسليم عبر تقارير DLR اللحظية",
    "إرسال مرن للرسائل عبر واجهات برمجة التطبيقات الحديثة",
    "دعم مخصص ومستمر لعمليات التحقق الحساسة للوقت"
  ],
  "networkStats": [
    {
      "val": "تغطية عالمية",
      "label": "اتصال مباشر مع مشغلي الهواتف حول العالم"
    },
    {
      "val": "مسارات ذات أولوية",
      "label": "حركة مرور منخفضة التأخير للتحقق الأمني"
    }
  ],
  "networkBadgeOverlay": {
    "title": "بوابة مشغلي OTP",
    "sub": "توجيه مباشر للأولويات للمصادقة الحساسة للوقت"
  },
  "networkFooterNote": "تعتمد سرعة التسليم والمسارات على سياسات مشغلي الوجهة وظروف شبكة الهاتف المتلقي.",
  "momentsBadge": "حالات الاستخدام والقطاعات",
  "momentsTitle": "مبنية لدعم كل لحظة تحقق أمني",
  "momentsSubtitle": "تدعم رسائل OTP المصادقة الرقمية في مختلف القطاعات التي تحتاج للتحقق من هوية عملائها وحماية حساباتهم.",
  "moments": [
    {
      "title": "البنوك والخدمات المالية",
      "desc": "ادعم التحقق من الدخول والعمليات المصرفية عبر مسارات OTP مجهزة بأعلى درجات الأمان.",
      "footer": "المصادقة الثنائية وتفويض الدفع"
    },
    {
      "title": "التجارة الإلكترونية والتجزئة",
      "desc": "تحقق من حسابات العملاء، وأمّن عمليات الدفع، واحمِ سلة التسوق عند إتمام الشراء.",
      "footer": "دفع آمن وحماية للحسابات"
    },
    {
      "title": "السياحة والضيافة",
      "desc": "أكّد حجوزات العملاء والوصول إلى التذاكر وتحديثات الرحلات عبر التحقق النصي الفوري.",
      "footer": "تأكيد الحجز وسلامة المسافرين"
    },
    {
      "title": "المنصات والتطبيقات الرقمية",
      "desc": "ادمج رسائل OTP في عمليات تسجيل المستخدمين، واستعادة الحسابات، والدخول عبر الويب والموبايل.",
      "footer": "انضمام سلس وحماية دائمة"
    }
  ],
  "comparison": {
    "comparisonTitle": "تعرف على كيفية دعم رسائل OTP للمصادقة الرقمية",
    "comparisonSubtitle": "اختر أسلوب التحقق المناسب بناءً على متطلبات التطبيق، تجربة المستخدم، ومستوى الأمان المطلوب.",
    "otpTitle": "رسائل OTP القصيرة",
    "otpBadge": "وصول شامل لكافة الهواتف",
    "otpItems": [
      "تسليم كلمات المرور لمرة واحدة إلى أرقام الهواتف مباشرة",
      "تعمل على جميع الهواتف المحمولة دون الحاجة لتثبيت تطبيقات إضافية",
      "تدعم تسجيل المستخدمين والدخول واستعادة الحسابات بسلاسة",
      "تعتمد على ظروف اتصال شبكة الهاتف المحمول"
    ],
    "appTitle": "المصادقة عبر التطبيقات",
    "appBadge": "تطبيقات المصادقة البرمجية",
    "appItems": [
      "توليد رموز أو طلبات موافقة داخل تطبيق مصادقة مخصص",
      "يمكن أن تعمل بدون شبكة خلوية في حال توفر اتصال Wi-Fi",
      "تتطلب من المستخدم تنزيل وضبط التطبيق مسبقاً",
      "توفر مزايا أمان متقدمة اعتماداً على آلية التطبيق"
    ],
    "securityNotice": "توصية أمنية: تساعد رسائل OTP في التحقق من حيازة رقم الهاتف، لكنها قد تكون عرضة لهجمات مبادلة الشريحة (SIM Swap). للأنظمة بالغة الحساسية، يُنصح بتطبيق ضوابط أمنية إضافية."
  },
  "intelligenceBadge": "ذكاء التسليم",
  "intelligenceTitle": "تسليم فوري في ثوانٍ وتقارير تسليم لحظية",
  "intelligenceDesc": "راقب مؤشرات أداء رسائل OTP، وأوقات استجابة المشغلين، وإشعارات التسليم اللحظية (DLR) لتفادي أي تأخير لعملائك.",
  "intelligenceBullets": [
    "طوابير ذات أولوية قصوى لإرسال فوري لرموز التحقق",
    "إشعارات ويب هوك فورية لحالة التسليم ورؤية مباشرة للحالة",
    "تحويل تلقائي للمسارات البديلة لضمان أعلى نسب وصول",
    "تحليلات دقيقة لأوقات الاستجابة مصنفة حسب البلد والمشغل"
  ],
  "intelligenceFootnote": "تُخطر خوادمك تلقائياً عبر الويب هوك بمجرد استلام الهاتف المحمول لرسالة التحقق.",
  "messageLogCard": {
    "title": "سجل متابعة تسليم رموز OTP المباشر",
    "badge": "إشعار أولوية",
    "tab1": "تم التسليم",
    "tab2": "في الانتظار",
    "tab3": "تم التحقق",
    "colType": "النوع",
    "colState": "الحالة",
    "colReceipt": "زمن استجابة المشغل",
    "row1Type": "رمز تسجيل الدخول",
    "row1State": "تم التسليم",
    "row1Receipt": "1.2 ثانية للهاتف",
    "row2Type": "إعادة تعيين كلمة المرور",
    "row2State": "تم التسليم",
    "row2Receipt": "0.9 ثانية للهاتف",
    "row3Type": "مصادقة عملية مالية",
    "row3State": "تم التسليم",
    "row3Receipt": "1.1 ثانية للهاتف",
    "footerText": "تسليم فوري لرسائل التحقق عبر مشغلي الهواتف حول العالم"
  },
  "protectionTitle": "حماية مصممة لعمليات التحقق الحيوية",
  "protectionBadge": "الأمان والامتثال",
  "protectionCards": [
    {
      "title": "تحديد المعدل ومنع الاحتيال",
      "desc": "احمِ نظامك من هجمات التخمين وضخ الرسائل المكلفة (SMS Pumping) بفضل ضوابط سرعة قابلة للتخصيص."
    },
    {
      "title": "الامتثال الدولي لاسم المرسل (Sender ID)",
      "desc": "اضمن التسجيل الرسمي والمعتمد لمعرف المرسل والالتزام بكافة اللوائح والأنظمة في الدول الموجه إليها."
    }
  ],
  "timelineBadge": "خطوات تنفيذ منظمة",
  "timelineTitle": "من التكامل وحتى التشغيل الفعلي، خطوة بخطوة",
  "timelineSubtitle": "انشر رسائل OTP وفق مسار منظم يتوافق تماماً مع متطلبات أمان تطبيقك وحجم الحركة المتوقع.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "تحديد المتطلبات",
      "desc": "شاركنا تفاصيل تطبيقك، والبلدان المستهدفة، وحجم الرسائل المتوقع، ومسارات المصادقة المطلوبة."
    },
    {
      "step": "02",
      "title": "تخطيط مسار التحقق",
      "desc": "حدد فترات صلاحية الرمز، وحدود إعادة الإرسال، وقوالب الرسائل، وضوابط الأمان الملائمة."
    },
    {
      "step": "03",
      "title": "ربط واجهة الـ API",
      "desc": "اربط تطبيقك أو نظام المصادقة الخاص بك مع واجهات الـ REST API أو SMPP الآمنة لدينا."
    },
    {
      "step": "04",
      "title": "الاختبار والتحقق",
      "desc": "اختبر سرعة تسليم الرسائل، وتجربة المستخدم، ومعالجة الأخطاء قبل الانتقال إلى البيئة الحية."
    },
    {
      "step": "05",
      "title": "الإطلاق والمتابعة",
      "desc": "أطلق خدمة رسائل OTP في بيئة الإنتاج مع الاستفادة من المراقبة المباشرة والدعم الهندسي المستمر."
    }
  ],
  "integrationPlan": {
    "title": "مواصفات تكامل نظام التحقق OTP",
    "planBadge": "جاهز للإنتاج",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "رموز المصادقة 2FA الحساسة للوقت",
    "formats": "رموز رقمية، رموز أبجدية رقمية",
    "feedback": "إشعارات تسليم DLR فورية ولحظية",
    "senderSetup": "اسم مرسل مسجل معتمد / رمز قصير",
    "check1": "ضبط مؤقتات انتهاء الصلاحية وحدود المحاولات",
    "check2": "جاهزية المسارات الاحتياطية وإشعارات الويب هوك",
    "discussNote": "تحدث مع مهندسينا لتخطيط وتصميم بنية المصادقة المثلى لمنصتك.",
    "discussBtn": "بدء التكامل البرمجي"
  },
  "faqBadge": "الأسئلة الشائعة",
  "faqTitle": "إجابات على الأسئلة الأكثر شيوعاً حول خدمات OTP",
  "faqSubtitle": "تعرف على كيفية مساهمة بنيتنا التحتية فائقة السرعة في حماية وتأمين مساراتك الرقمية.",
  "faqs": [
    {
      "q": "ما هي السرعة المعتادة لوصول رسائل OTP إلى المستخدم؟",
      "a": "تصل رموز التحقق عبر مساراتنا المخصصة ذات الأولوية في غضون ثوانٍ معدودة في ظروف الشبكة الاعتيادية."
    },
    {
      "q": "ما هي واجهات برمجة التطبيقات (APIs) المتاحة للربط؟",
      "a": "نوفر واجهات REST API سهلة الاستخدام وموثقة جيداً للمطورين، إلى جانب بروتوكول SMPP v3.4 للأحجام الضخمة."
    },
    {
      "q": "كيف نحمي أنفسنا من هجمات الاحتيال وضخ الرسائل (SMS Pumping)؟",
      "a": "نوفر ميزات متقدمة تشمل تحديد معدلات الإرسال، وفحص العناوين، وحظر الوجهات المشبوهة، والقوائم البيضاء للـ IP."
    }
  ],
  "ctaBadge": "ارتقِ بمستوى المصادقة",
  "ctaTitle": "اجعل كل عملية تحقق أكثر سرعة وموثوقية وأماناً",
  "ctaSubtitle": "عزز رحلة عملائك الرقمية من خلال خدمات رسائل OTP المصممة للمصادقة وتأكيد المعاملات عبر شبكات موثوقة عالمياً.",
  "contactUs": "ابدأ الآن مع رسائل OTP",
  "ctaFootnote": "تواصل مع خبرائنا لاكتشاف أفضل مسارات الرسائل وإعداد واجهات الربط البرمجي."
};

const fr: OtpSmsServicesTranslation = {
  "heroBadge": "SERVICES SMS OTP • INFRASTRUCTURE D'AUTHENTIFICATION",
  "heroTitle": "Chaque vérification, connectée avec une fiabilité absolue",
  "heroDesc": "Protégez les comptes de vos clients et simplifiez l'authentification avec des services SMS OTP hautement fiables. Envoyez des mots de passe à usage unique pour les connexions, inscriptions, réinitialisations de mot de passe et validations de transactions grâce à une infrastructure réseau conçue pour des flux sécurisés et rapides.",
  "talkToExpert": "Parler à un spécialiste OTP",
  "exploreCapabilities": "Explorer les fonctionnalités",
  "stats": {
    "routing": "OTP Fiable",
    "routingLabel": "Distribution Immédiate",
    "traffic": "API Simple",
    "trafficLabel": "Intégration Fluide",
    "insights": "Portée Mondiale",
    "insightsLabel": "Connectivité Directe Opérateurs"
  },
  "heroLiveBadge1": {
    "title": "Livraison Instantanée",
    "label": "Routes de vérification à très faible latence"
  },
  "heroLiveBadge2": {
    "title": "2FA Niveau Opérateur",
    "sub": "Routage direct et prioritaire"
  },
  "whyBadge": "INFRASTRUCTURE DE SÉCURITÉ",
  "whyTitle": "Une infrastructure de messagerie qui protège chaque vérification",
  "whySubtitle1": "Soutenez l'authentification sécurisée des utilisateurs avec une messagerie OTP optimisée pour une livraison immédiate, une intégration aisée et une évolutivité massive.",
  "whySubtitle2": "Conçue pour une latence minimale et des taux de distribution exceptionnels sur l'ensemble des réseaux mobiles internationaux.",
  "whyCards": [
    {
      "title": "Distribution Fiable d'OTP",
      "desc": "Envoyez des mots de passe à usage unique via des liaisons directes garantissant une réception constante sur tous les réseaux mondiaux.",
      "footer": "Garantie de livraison élevée"
    },
    {
      "title": "Messages de Vérification Rapides",
      "desc": "Permettez à vos utilisateurs de finaliser leurs connexions en quelques secondes grâce à des temps de transit minimaux.",
      "footer": "Routage à faible latence"
    },
    {
      "title": "Intégration API Flexible",
      "desc": "Connectez les capacités SMS OTP à vos sites internet, applications mobiles et systèmes métier via nos API REST et passerelles SMPP.",
      "footer": "API REST & SMPP"
    },
    {
      "title": "Authentification Évolutive",
      "desc": "Gérez sereinement les pics de trafic lors des campagnes, inscriptions massives et transactions à fort volume.",
      "footer": "Débit haute capacité"
    }
  ],
  "capabilitiesBadge": "PLATEFORME OTP COMPLÈTE",
  "capabilitiesTitle": "Une plateforme OTP unique, pensée pour vos besoins métier",
  "capabilitiesDesc": "Accompagnez l'ensemble de vos parcours d'authentification numérique avec des services adaptés aux exigences des entreprises.",
  "designSolution": "Commencer à vérifier les utilisateurs",
  "solutionNote": "Configuré pour les volumes élevés de 2FA, connexions sécurisées et authentifications transactionnelles.",
  "capabilities": [
    {
      "tag": "Connexion 2FA",
      "title": "Vérification de Connexion",
      "desc": "Validez l'accès des utilisateurs en envoyant un mot de passe à usage unique lors des étapes de connexion."
    },
    {
      "tag": "Inscription",
      "title": "Création de Compte",
      "desc": "Confirmez les nouvelles inscriptions en validant instantanément la possession du numéro de téléphone mobile."
    },
    {
      "tag": "Récupération",
      "title": "Réinitialisation de Mot de Passe",
      "desc": "Sécurisez la récupération de compte en envoyant des codes à usage unique pour chaque demande légitime."
    },
    {
      "tag": "Transactions",
      "title": "Authentification des Transactions",
      "desc": "Ajoutez une étape de vérification SMS pour valider les paiements en ligne et opérations sensibles."
    },
    {
      "tag": "Identité",
      "title": "Vérification d'Identité Mobile",
      "desc": "Confirmez l'authenticité des numéros de téléphone lors des parcours KYC et de conformité réglementaire."
    },
    {
      "tag": "Sécurité App",
      "title": "Sécurité Applicative",
      "desc": "Intégrez les SMS OTP au cœur de vos applications web et mobiles pour respecter les standards de sécurité."
    },
    {
      "tag": "Automatisé",
      "title": "Déclencheurs OTP Automatisés",
      "desc": "Déclenchez automatiquement l'envoi de codes en fonction d'événements système et de règles d'authentification."
    },
    {
      "tag": "Fort Volume",
      "title": "Messagerie OTP Haute Capacité",
      "desc": "Traitez d'importants volumes de requêtes de vérification grâce à une infrastructure taillée pour la croissance."
    }
  ],
  "howItWorksBadge": "FLUX DE TRAVAIL",
  "howItWorksTitle": "Fonctionnement du cycle de livraison OTP",
  "howItWorksSubtitle": "De la soumission par API à la réception sur le mobile en quelques secondes seulement.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Requête Utilisateur",
      "desc": "L'utilisateur déclenche une action nécessitant une vérification (connexion, inscription, paiement).",
      "note": "Événement applicatif"
    },
    {
      "step": "02",
      "title": "Soumission API",
      "desc": "Votre système transmet le code temporaire à notre passerelle via des points de terminaison REST sécurisés.",
      "note": "API REST / SMPP"
    },
    {
      "step": "03",
      "title": "Routage Opérateur Prioritaire",
      "desc": "Le message est expédié sans délai sur des liaisons directes bénéficiant d'une file d'attente prioritaire.",
      "note": "Routage prioritaire"
    },
    {
      "step": "04",
      "title": "Réception & Validation",
      "desc": "L'utilisateur saisit son code et finalise sa connexion ; le statut de livraison est renvoyé en temps réel par webhook.",
      "note": "Accusé DLR en direct"
    }
  ],
  "networkBadge": "COUVERTURE SMS MONDIALE",
  "networkTitle": "Un réseau mondial conçu pour assurer la continuité des vérifications",
  "networkDesc": "Rejoignez vos utilisateurs sur tous les marchés clés grâce à une connectivité SMS internationale dédiée aux flux d'authentification.",
  "networkBullets": [
    "Connectivité SMS directe sur l'ensemble des destinations internationales",
    "Intégration transparente avec vos plateformes d'authentification existantes",
    "Capacité évolutive pour absorber tous vos volumes de SMS OTP",
    "Visibilité complète sur les accusés de réception (DLR) en temps réel",
    "Soumission flexible et documentée via des API modernes",
    "Support dédié pour les flux de vérification nécessitant une livraison urgente"
  ],
  "networkStats": [
    {
      "val": "Couverture Mondiale",
      "label": "Interconnexion directe avec les opérateurs mondiaux"
    },
    {
      "val": "Routes Prioritaires",
      "label": "Trafic de vérification traité avec une latence minimale"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Passerelle Opérateur OTP",
    "sub": "Routage prioritaire direct pour l'authentification critique en temps réel"
  },
  "networkFooterNote": "La vitesse de livraison dépend des politiques des opérateurs locaux et des conditions du réseau de destination.",
  "momentsBadge": "CAS D'USAGE & INDUSTRIES",
  "momentsTitle": "Conçu pour chaque moment clé de vérification",
  "momentsSubtitle": "Le SMS OTP protège les parcours numériques dans tous les secteurs où l'authentification et la confiance sont essentielles.",
  "moments": [
    {
      "title": "Banque et Services Financiers",
      "desc": "Sécurisez les connexions aux comptes et autorisez les virements grâce à des flux OTP ultra-sécurisés.",
      "footer": "2FA bancaire & validation de paiements"
    },
    {
      "title": "E-Commerce et Commerce de Détail",
      "desc": "Vérifiez les comptes clients, prévenez les fraudes et sécurisez le processus de paiement.",
      "footer": "Paiement sécurisé & protection des comptes"
    },
    {
      "title": "Voyages et Hôtellerie",
      "desc": "Validez les réservations, l'accès aux billets et la gestion des réservations par SMS instantané.",
      "footer": "Validation de billets & sécurité des passagers"
    },
    {
      "title": "Plateformes Digitales & SaaS",
      "desc": "Intégrez des codes de vérification dans les phases d'onboarding, de réinitialisation et d'accès multi-appareils.",
      "footer": "Onboarding fluide & protection permanente"
    }
  ],
  "comparison": {
    "comparisonTitle": "Découvrez comment le SMS OTP renforce l'authentification",
    "comparisonSubtitle": "Choisissez la méthode adaptée à vos contraintes de sécurité, à vos parcours utilisateurs et à votre audience.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Accessibilité Universelle",
    "otpItems": [
      "Délivre les codes temporaires sur n'importe quel numéro de mobile",
      "Fonctionne sur tous les téléphones sans aucune application requise",
      "Idéal pour les inscriptions rapides, connexions et récupérations",
      "Tributaire de la couverture du réseau mobile de l'opérateur"
    ],
    "appTitle": "Authentification par Application",
    "appBadge": "Authentificateur Logiciel",
    "appItems": [
      "Génère des codes ou des requêtes push dans une application dédiée",
      "Peut fonctionner sans réseau cellulaire si une connexion Wi-Fi est active",
      "Exige que l'utilisateur installe et configure une application préalable",
      "Offre des mécanismes de sécurité supplémentaires selon la configuration"
    ],
    "securityNotice": "Recommandation de sécurité : le SMS OTP valide efficacement la possession d'une ligne mobile, mais reste exposé au SIM swap. Pour les environnements hautement sensibles, combinez l'OTP avec des facteurs de risque complémentaires."
  },
  "intelligenceBadge": "INTELLIGENCE DE LIVRAISON",
  "intelligenceTitle": "Latence de quelques secondes & rapports de livraison en temps réel",
  "intelligenceDesc": "Suivez les performances d'acheminement, les temps de réponse des opérateurs et les accusés de réception (DLR) pour éliminer toute friction utilisateur.",
  "intelligenceBullets": [
    "Files d'attente prioritaires garantissant une expédition immédiate des OTP",
    "Webhooks DLR en direct pour une transparence totale sur le statut de livraison",
    "Bascule automatique d'itinéraires pour maximiser les taux d'aboutissement",
    "Analyses détaillées de latence par pays et par opérateur mobile"
  ],
  "intelligenceFootnote": "Vos systèmes reçoivent une notification par webhook dès que le code est réceptionné par le mobile du destinataire.",
  "messageLogCard": {
    "title": "Suivi en direct de la livraison OTP",
    "badge": "DLR PRIORITAIRE",
    "tab1": "Livrés",
    "tab2": "En file",
    "tab3": "Vérifiés",
    "colType": "Type",
    "colState": "Statut",
    "colReceipt": "Latence Opérateur",
    "row1Type": "OTP Connexion",
    "row1State": "Livré",
    "row1Receipt": "1.2s DLR Mobile",
    "row2Type": "Mot de passe",
    "row2State": "Livré",
    "row2Receipt": "0.9s DLR Mobile",
    "row3Type": "Auth Paiement",
    "row3State": "Livré",
    "row3Receipt": "1.1s DLR Mobile",
    "footerText": "Distribution quasi-instantanée sur les réseaux mobiles internationaux"
  },
  "protectionTitle": "Une sécurité conçue pour vos vérifications critiques",
  "protectionBadge": "SÉCURITÉ & CONFORMITÉ",
  "protectionCards": [
    {
      "title": "Limitation de Débit & Anti-Fraude",
      "desc": "Préservez votre infrastructure contre le pompage de SMS et les attaques par force brute grâce à des plafonds configurables."
    },
    {
      "title": "Conformité Mondiale des ID Expéditeur",
      "desc": "Garantissez le respect des réglementations locales et l'enregistrement officiel de vos Sender ID dans les pays régulés."
    }
  ],
  "timelineBadge": "DÉPLOIEMENT MÉTHODIQUE",
  "timelineTitle": "De l'intégration à la mise en production, pas à pas",
  "timelineSubtitle": "Déployez vos SMS OTP grâce à une méthodologie structurée, adaptée aux exigences de vos applications et à vos volumes.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Définition des Besoins",
      "desc": "Partagez vos cas d'usage, pays de destination, volumes estimés et flux d'authentification prévus."
    },
    {
      "step": "02",
      "title": "Conception du Parcours",
      "desc": "Définissez la durée de validité des codes, les limites de relance et les modèles de messages."
    },
    {
      "step": "03",
      "title": "Intégration de l'API",
      "desc": "Connectez vos applications à notre passerelle via nos API REST documentées ou passerelles SMPP."
    },
    {
      "step": "04",
      "title": "Tests et Validation",
      "desc": "Validez la rapidité d'acheminement, la gestion des erreurs et l'expérience utilisateur en bac à sable."
    },
    {
      "step": "05",
      "title": "Mise en Production",
      "desc": "Activez vos flux en conditions réelles avec le soutien de nos équipes techniques et une surveillance continue."
    }
  ],
  "integrationPlan": {
    "title": "Spécifications de l'Intégration OTP",
    "planBadge": "PRÊT POUR LA PRODUCTION",
    "connection": "API REST / Webhooks / SMPP",
    "traffic": "2FA Critique & Codes d'Authentification",
    "formats": "OTP Numériques, Jetons Alphanumériques",
    "feedback": "Accusés de Réception DLR en Temps Réel",
    "senderSetup": "Sender ID Enregistré / Numéro Court Dédié",
    "check1": "Délais d'expiration et limites de renvoi paramétrés",
    "check2": "Itinéraires de secours et webhooks opérationnels",
    "discussNote": "Échangez avec nos spécialistes pour concevoir votre architecture d'authentification.",
    "discussBtn": "Démarrer l'Intégration"
  },
  "faqBadge": "QUESTIONS FRÉQUENTES",
  "faqTitle": "Tout savoir sur les services SMS OTP",
  "faqSubtitle": "Découvrez comment notre infrastructure ultra-rapide sécurise vos accès utilisateurs.",
  "faqs": [
    {
      "q": "En combien de temps les SMS OTP sont-ils reçus ?",
      "a": "Nos liaisons prioritaires acheminent les codes en quelques secondes dans des conditions de réseau opérateur standards."
    },
    {
      "q": "Quelles API sont disponibles pour intégrer le service OTP ?",
      "a": "Nous proposons des API REST modernes et documentées avec des exemples de code, ainsi que le protocole SMPP v3.4 pour les débits élevés."
    },
    {
      "q": "Comment se prémunir contre la fraude et le pompage de SMS ?",
      "a": "Nous intégrons des contrôles de vélocité, le blocage de préfixes à risque et la mise sur liste blanche d'adresses IP pour neutraliser le trafic abusif."
    }
  ],
  "ctaBadge": "MODERNISEZ VOTRE AUTHENTIFICATION",
  "ctaTitle": "Rendez chaque vérification plus rapide et plus fiable",
  "ctaSubtitle": "Sécurisez les parcours de vos clients avec des services SMS OTP conçus pour l'authentification et la confirmation de paiements sur tous les réseaux mobiles.",
  "contactUs": "Commencer avec le SMS OTP",
  "ctaFootnote": "Consultez nos experts pour en savoir plus sur nos routes prioritaires et nos options d'intégration API."
};

const de: OtpSmsServicesTranslation = {
  "heroBadge": "OTP-SMS-DIENSTE • AUTHENTIFIZIERUNGS-INFRASTRUKTUR",
  "heroTitle": "Jede Verifizierung verlässlich, sicher und sekundenschnell zugestellt",
  "heroDesc": "Schützen Sie Kundenkonten und optimieren Sie die Benutzerauthentifizierung mit hochzuverlässigen OTP-SMS-Diensten. Senden Sie Einmalpasswörter für Logins, Registrierungen, Passwort-Resets und Transaktionsprüfungen über eine Telekommunikationsinfrastruktur, die für minimale Latenz und höchste Sicherheit entwickelt wurde.",
  "talkToExpert": "Mit einem OTP-Spezialisten sprechen",
  "exploreCapabilities": "Leistungsmerkmale entdecken",
  "stats": {
    "routing": "Zuverlässiges OTP",
    "routingLabel": "Pünktliche Zustellung",
    "traffic": "Einfache API",
    "trafficLabel": "Flexible Integration",
    "insights": "Globale Reichweite",
    "insightsLabel": "Direkte Netzanbindung"
  },
  "heroLiveBadge1": {
    "title": "Sofortige Zustellung",
    "label": "Niedriglatenz-Routen für Verifizierungen"
  },
  "heroLiveBadge2": {
    "title": "Carrier-Grade 2FA",
    "sub": "Direktes Operator-Routing"
  },
  "whyBadge": "SICHERHEITS-INFRASTRUKTUR",
  "whyTitle": "Messaging-Infrastruktur, die jede Verifizierung absichert",
  "whySubtitle1": "Unterstützen Sie sichere Kundenauthentifizierung mit OTP-SMS, die für pünktliche Zustellung, einfache Anbindung und maximale Skalierbarkeit entwickelt wurden.",
  "whySubtitle2": "Entwickelt für minimale Latenzzeiten und höchste Zustellraten über weltweite Mobilfunknetze hinweg.",
  "whyCards": [
    {
      "title": "Zuverlässige OTP-Zustellung",
      "desc": "Senden Sie Einmalpasswörter über dedizierte SMS-Routen mit konstant hoher Erfolgsquote in allen Zielmärkten.",
      "footer": "Hohe Zustellsicherheit"
    },
    {
      "title": "Schnelle Verifizierungsnachrichten",
      "desc": "Ermöglichen Sie Nutzern einen reibungslosen Login-Prozess mit Zustellzeiten von wenigen Sekunden.",
      "footer": "Niedrige Latenzzeiten"
    },
    {
      "title": "Flexible API-Integration",
      "desc": "Integrieren Sie OTP-Funktionen nahtlos in Webportale, Apps und Backend-Systeme über moderne REST-APIs und SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Skalierbare Authentifizierung",
      "desc": "Bewältigen Sie mühelos Lastspitzen bei Registrierungen, Anmeldeanfragen und Transaktionen.",
      "footer": "Hoher Durchsatz"
    }
  ],
  "capabilitiesBadge": "GANZHEITLICHE OTP-PLATTFORM",
  "capabilitiesTitle": "Eine integrierte OTP-Plattform für Ihre Sicherheitsanforderungen",
  "capabilitiesDesc": "Unterstützen Sie unterschiedlichste Verifizierungsszenarien mit SMS-Diensten, die auf geschäftskritische Prozesse abgestimmt sind.",
  "designSolution": "Nutzerverifizierung starten",
  "solutionNote": "Optimiert für hochvolumige 2FA, Logins und transaktionsbezogene Verifizierungen.",
  "capabilities": [
    {
      "tag": "Login-2FA",
      "title": "Login-Verifizierung",
      "desc": "Sichern Sie Benutzerkonten durch Einmalpasswörter bei sensiblen Anmeldevorgängen zuverlässig ab."
    },
    {
      "tag": "Registrierung",
      "title": "Neukunden-Registrierung",
      "desc": "Bestätigen Sie neue Benutzerkonten durch Überprüfung der angegebenen Mobilfunknummer."
    },
    {
      "tag": "Passwort-Reset",
      "title": "Konto-Wiederherstellung",
      "desc": "Ermöglichen Sie die sichere Passwortrücksetzung durch zeitlich begrenzte OTP-Codes."
    },
    {
      "tag": "Transaktionen",
      "title": "Transaktions-Authentifizierung",
      "desc": "Fügen Sie eine SMS-Verifizierungsstufe für Freigaben von Überweisungen und Zahlungen hinzu."
    },
    {
      "tag": "Identitätsprüfung",
      "title": "Identitätsvalidierung",
      "desc": "Verifizieren Sie die Inhaberschaft von Mobilfunknummern im Rahmen von KYC- und Compliance-Prozessen."
    },
    {
      "tag": "App-Sicherheit",
      "title": "Applikationssicherheit",
      "desc": "Binden Sie OTP-Verfahren direkt in Web- und Mobile-Apps ein, um Sicherheitsvorgaben zu erfüllen."
    },
    {
      "tag": "Automatisiert",
      "title": "Automatisierte OTP-Trigger",
      "desc": "Lösen Sie Verifizierungscodes anhand vordefinierter Systemereignisse und Richtlinien automatisch aus."
    },
    {
      "tag": "Hochvolumen",
      "title": "Skalierbares OTP-Messaging",
      "desc": "Verarbeiten Sie auch größte Anfragevolumina stabil und ohne Leistungseinbußen."
    }
  ],
  "howItWorksBadge": "VERIFIZIERUNGSABLAUF",
  "howItWorksTitle": "So funktioniert der OTP-Zustellungsprozess",
  "howItWorksSubtitle": "Von der API-Anfrage bis zum Empfang auf dem Endgerät in wenigen Sekunden.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Benutzeraktion",
      "desc": "Der Nutzer stößt ein sicherheitsrelevantes Ereignis wie Login, Registrierung oder Bezahlung an.",
      "note": "Applikationsereignis"
    },
    {
      "step": "02",
      "title": "API-Übermittlung",
      "desc": "Ihr System sendet den Einmalcode über unsere gesicherten REST-Endpunkte an das SMS-Gateway.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Priorisiertes Carrier-Routing",
      "desc": "Die Nachricht wird sofort über direkte Netzbetreiber-Routen mit höchster Priorität versendet.",
      "note": "Prioritäres Routing"
    },
    {
      "step": "04",
      "title": "Empfang & Bestätigung",
      "desc": "Der Nutzer erhält den Code und schließt die Aktion ab; der Zustellstatus wird per Webhook gemeldet.",
      "note": "Echtzeit-DLR"
    }
  ],
  "networkBadge": "GLOBALE SMS-ABDECKUNG",
  "networkTitle": "Ein weltweites Netz für unterbrechungsfreie Verifizierungen",
  "networkDesc": "Erreichen Sie Nutzer in allen relevanten Märkten über direkte SMS-Anbindungen für verlässliche Authentifizierungsprozesse.",
  "networkBullets": [
    "Direkte SMS-Konnektivität zu internationalen Netzbetreibern",
    "Nahtlose Integration in bestehende 2FA- und Identitätssysteme",
    "Skalierbare Kapazitäten für wachsende OTP-Anfragevolumina",
    "Vollständige Transparenz dank Echtzeit-Zustellberichten (DLR)",
    "Entwicklerfreundliche REST-APIs und bewährte SMPP-Schnittstellen",
    "Fokussierter Support für zeitkritische Verifizierungsworkflows"
  ],
  "networkStats": [
    {
      "val": "Globale Abdeckung",
      "label": "Direktanbindung an weltweite Mobilfunknetze"
    },
    {
      "val": "Prioritätsrouten",
      "label": "Minimalste Latenz für kritische Verifizierungen"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP-Carrier-Gateway",
    "sub": "Direktes Operator-Routing für zeitkritische Authentifizierung"
  },
  "networkFooterNote": "Die tatsächliche Zustellgeschwindigkeit unterliegt den lokalen Bestimmungen und der Netzqualität vor Ort.",
  "momentsBadge": "EINSATZBEREICHE & BRANCHEN",
  "momentsTitle": "Entwickelt für jeden kritischen Verifizierungsmoment",
  "momentsSubtitle": "OTP-SMS bildet das Fundament digitaler Authentifizierung in Branchen, in denen Vertrauen und Verlässlichkeit zählen.",
  "moments": [
    {
      "title": "Banken und Finanzdienstleister",
      "desc": "Schützen Sie Kontenzugriffe und Zahlungsfreigaben mit hochentwickelten OTP-Sicherheitsverfahren.",
      "footer": "Finanz-2FA & Zahlungsautorisierung"
    },
    {
      "title": "E-Commerce und Handel",
      "desc": "Überprüfen Sie Neukunden, sichern Sie Anmeldungen ab und schützen Sie den Bezahlvorgang.",
      "footer": "Sicherer Checkout & Kontoschutz"
    },
    {
      "title": "Reisen und Mobilität",
      "desc": "Bestätigen Sie Ticketbuchungen, Buchungsänderungen und Kundenprofile verlässlich per SMS.",
      "footer": "Buchungsbestätigung & Reisesicherheit"
    },
    {
      "title": "Digitale Plattformen und SaaS",
      "desc": "Binden Sie Verifizierungscodes in Registrierungen, Logins und Konto-Wiederherstellungen ein.",
      "footer": "Reibungsloses Onboarding & Schutz"
    }
  ],
  "comparison": {
    "comparisonTitle": "Vergleich: Wie OTP-SMS Ihre Authentifizierung stärkt",
    "comparisonSubtitle": "Wählen Sie das optimale Verfahren auf Basis Ihrer Sicherheitsanforderungen, Nutzerführung und Zielgruppe.",
    "otpTitle": "OTP-SMS",
    "otpBadge": "Universelle Erreichbarkeit",
    "otpItems": [
      "Zustellung von Einmalpasswörtern direkt auf jedes Mobiltelefon",
      "Funktioniert ohne zusätzliche App-Installationen sofort",
      "Perfekt geeignet für Neuregistrierungen, Logins und Notfallwiederherstellung",
      "Abhängig von der Netzabdeckung des jeweiligen Mobilfunkanbieters"
    ],
    "appTitle": "App-basierte Authentifizierung",
    "appBadge": "Software-Authenticator",
    "appItems": [
      "Generiert Codes oder Push-Bestätigungen innerhalb einer App",
      "Funktioniert bei vorhandenem WLAN auch ohne Mobilfunknetz",
      "Setzt die Installation und vorherige Einrichtung einer App voraus",
      "Bietet je nach Systemarchitektur zusätzliche Sicherheitsmerkmale"
    ],
    "securityNotice": "Sicherheitshinweis: OTP-SMS prüft den Besitz einer Rufnummer zuverlässig, ist jedoch nicht immun gegen SIM-Swapping. Für besonders schützenswerte Konten empfehlen sich zusätzliche Risikoanalysen."
  },
  "intelligenceBadge": "INTELLIGENTE ZUSTELLUNG",
  "intelligenceTitle": "Sekundenschnelle Zustellung & lückenlose Echtzeitberichte",
  "intelligenceDesc": "Überwachen Sie Zustellzeiten, Netzbetreiber-Latenzen und Statusberichte (DLR), um Verzögerungen beim Login auszuschließen.",
  "intelligenceBullets": [
    "Priorisierte Warteschlangen für den sofortigen Versand von Verifizierungscodes",
    "Echtzeit-DLR-Webhooks für unmittelbare Statusübersicht",
    "Automatisches Route-Failover für maximale Zustellquoten",
    "Detaillierte Latenzanalysen nach Ländern und Mobilfunknetzbetreibern"
  ],
  "intelligenceFootnote": "Webhooks benachrichtigen Ihre Backend-Systeme in dem Moment, in dem der Code das Endgerät erreicht.",
  "messageLogCard": {
    "title": "Live-Status der OTP-Zustellung",
    "badge": "PRIO-DLR",
    "tab1": "Zugestellt",
    "tab2": "In Warteschlange",
    "tab3": "Verifiziert",
    "colType": "Typ",
    "colState": "Status",
    "colReceipt": "Netzbetreiber-Latenz",
    "row1Type": "Login-OTP",
    "row1State": "Zugestellt",
    "row1Receipt": "1.2s Endgeräte-DLR",
    "row2Type": "Passwort-Reset",
    "row2State": "Zugestellt",
    "row2Receipt": "0.9s Endgeräte-DLR",
    "row3Type": "Transaktions-Auth",
    "row3State": "Zugestellt",
    "row3Receipt": "1.1s Endgeräte-DLR",
    "footerText": "Sekundenschnelle Verifizierungszustellung über globale Mobilfunknetze"
  },
  "protectionTitle": "Sicherheit für geschäftskritische Verifizierungen",
  "protectionBadge": "SICHERHEIT & COMPLIANCE",
  "protectionCards": [
    {
      "title": "Ratenbegrenzung & Missbrauchsschutz",
      "desc": "Schützen Sie Ihre Plattform vor SMS-Pumping und Brute-Force-Angriffen durch anpassbare Velocity-Limits."
    },
    {
      "title": "Globale Sender-ID-Compliance",
      "desc": "Gewährleisten Sie die Einhaltung internationaler Vorschriften und offizielle Absender-Registrierungen in allen Zielländern."
    }
  ],
  "timelineBadge": "STRUKTURIERTE EINFÜHRUNG",
  "timelineTitle": "Von der API-Anbindung bis zum Produktivbetrieb",
  "timelineSubtitle": "Führen Sie OTP-SMS strukturiert und passgenau zu den Sicherheits- und Lastanforderungen Ihres Unternehmens ein.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Bedarfsanalyse",
      "desc": "Definieren Sie Anforderungen, Zielländer, erwartete Volumina und Anwendungsfälle."
    },
    {
      "step": "02",
      "title": "Workflow-Planung",
      "desc": "Legen Sie Gültigkeitsdauer, Wiederholungsintervalle und Sicherheitsrichtlinien fest."
    },
    {
      "step": "03",
      "title": "API-Anbindung",
      "desc": "Integrieren Sie unsere modernen REST-APIs oder SMPP-Schnittstellen in Ihr System."
    },
    {
      "step": "04",
      "title": "Testing & Validierung",
      "desc": "Testen Sie Zustellgeschwindigkeit, Fehlerbehandlung und Benutzerführung in der Sandbox."
    },
    {
      "step": "05",
      "title": "Produktivstart",
      "desc": "Aktivieren Sie den Live-Betrieb mit technischem Support und permanenter Qualitätsüberwachung."
    }
  ],
  "integrationPlan": {
    "title": "Spezifikationen der OTP-Integration",
    "planBadge": "PRODUKTIONSBEREIT",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Zeitkritische 2FA- & Verifizierungscodes",
    "formats": "Numerische OTPs, Alphanumerische Token",
    "feedback": "Echtzeit-DLR-Zustellberichte",
    "senderSetup": "Registrierte Sender-ID / Kurzwahlnummer",
    "check1": "Ablauftimer und Wiederholungsbeschränkungen konfiguriert",
    "check2": "Fallback-Routen und Zustell-Webhooks einsatzbereit",
    "discussNote": "Sprechen Sie mit unseren Technikern, um Ihre Authentifizierungsarchitektur zu planen.",
    "discussBtn": "Integration starten"
  },
  "faqBadge": "HÄUFIG GESTELLTE FRAGEN",
  "faqTitle": "Wichtige Fragen zu unseren OTP-SMS-Diensten",
  "faqSubtitle": "Erfahren Sie, wie unsere Niedriglatenz-Infrastruktur Ihre Authentifizierung zuverlässig schützt.",
  "faqs": [
    {
      "q": "Wie schnell werden OTP-SMS-Nachrichten zugestellt?",
      "a": "Unsere priorisierten Routen stellen Codes unter normalen Netzbedingungen innerhalb weniger Sekunden zu."
    },
    {
      "q": "Welche APIs stehen für die Integration bereit?",
      "a": "Wir bieten entwicklerfreundliche REST-APIs mit Dokumentation und Codebeispielen sowie SMPP v3.4 für Großkunden."
    },
    {
      "q": "Wie wird mein System vor SMS-Pumping und Betrug geschützt?",
      "a": "Wir bieten integrierte Ratenbegrenzungen, Rufnummernprüfung, Zielblockaden und IP-Whitelisting gegen missbräuchlichen Datenverkehr."
    }
  ],
  "ctaBadge": "AUTHENTIFIZIERUNG AUFWERTEN",
  "ctaTitle": "Gestalten Sie jede Verifizierung noch schneller und verlässlicher",
  "ctaSubtitle": "Stärken Sie Ihre digitalen Kundenprozesse mit modernen OTP-SMS-Diensten für Logins, Kontoschutz und Transaktionen.",
  "contactUs": "Mit OTP-SMS starten",
  "ctaFootnote": "Kontaktieren Sie unsere Spezialisten für Details zu priorisierten Routen und Schnittstellen."
};

const ja: OtpSmsServicesTranslation = {
  "heroBadge": "OTP SMS サービス • 認証インフラストラクチャ",
  "heroTitle": "すべての認証を、確かな信頼とスピードで確実に接続",
  "heroDesc": "高信頼の OTP SMS サービスで顧客アカウントを保護し、ユーザー認証を効率化します。安全で高速な認証ワークフローのために設計された通信インフラにより、ログイン、新規登録、パスワード再設定、決済確認のワンタイムパスワードを確実に届けます。",
  "talkToExpert": "OTP 専門スタッフに相談",
  "exploreCapabilities": "機能一覧を見る",
  "stats": {
    "routing": "高信頼 OTP",
    "routingLabel": "タイムリーな即時配信",
    "traffic": "シンプルな API",
    "trafficLabel": "柔軟なシステム連携",
    "insights": "グローバルリーチ",
    "insightsLabel": "通信事業者直接接続"
  },
  "heroLiveBadge1": {
    "title": "瞬時配信",
    "label": "超低遅延の専用認証ルート"
  },
  "heroLiveBadge2": {
    "title": "キャリアグレード 2FA",
    "sub": "直接接続による優先ルーティング"
  },
  "whyBadge": "セキュリティインフラ",
  "whyTitle": "あらゆる認証を確実に保護するメッセージングインフラ",
  "whySubtitle1": "タイムリーな配信、容易なシステム連携、高い拡張性を備えた専用 SMS により、安全な顧客認証を支援します。",
  "whySubtitle2": "世界各国の通信キャリア網において超低遅延と極めて高い到達率を実現するよう設計されています。",
  "whyCards": [
    {
      "title": "高信頼の OTP 配信",
      "desc": "主要な送信先およびモバイルネットワーク全体で安定した到達率を誇る専用ルートを通じてワンタイムパスワードを配信します。",
      "footer": "高到達率の保証"
    },
    {
      "title": "迅速な認証メッセージ",
      "desc": "わずか数秒でのスピーディーなコード着信により、ユーザーがストレスなく認証を完了できるよう支援します。",
      "footer": "超低遅延ルーティング"
    },
    {
      "title": "柔軟な API 連携",
      "desc": "標準 REST API および SMPP プロトコルにより、Web サイト、アプリ、基幹システムへスムーズに組み込めます。",
      "footer": "REST API & SMPP"
    },
    {
      "title": "スケーラブルな認証基盤",
      "desc": "急増するユーザー登録やログイン、大規模な決済確認トランザクションのピーク時も安定して処理します。",
      "footer": "大容量トラフィック対応"
    }
  ],
  "capabilitiesBadge": "ワンストップ OTP プラットフォーム",
  "capabilitiesTitle": "企業のセキュリティ要件に最適化された総合 OTP 基盤",
  "capabilitiesDesc": "日常的なオンライン利用から極めて重要なビジネストランザクションまで、多様な認証シナリオを強力にサポートします。",
  "designSolution": "認証の導入を開始する",
  "solutionNote": "大量の 2FA、ログイン認証、決済確認トランザクションに最適化されています。",
  "capabilities": [
    {
      "tag": "ログイン 2FA",
      "title": "ログイン認証",
      "desc": "ログイン時にワンタイムパスワードを送信し、不正アクセスを防止してアカウントを保護します。"
    },
    {
      "tag": "新規登録",
      "title": "アカウント新規登録",
      "desc": "登録時に入力された電話番号の所持確認を即座に行い、不正アカウントの作成を未然に防ぎます。"
    },
    {
      "tag": "パスワード再設定",
      "title": "パスワードリセット",
      "desc": "本人確認用のワンタイムパスワードを発行し、安全かつ迅速なアカウント復旧フローを実現します。"
    },
    {
      "tag": "決済・取引",
      "title": "決済・重要取引の認証",
      "desc": "送金や高額決済などの重要な手続きに SMS 認証を追加し、取引の安全性を大幅に高めます。"
    },
    {
      "tag": "本人確認",
      "title": "電話番号の本人性確認",
      "desc": "KYC や各種会員確認において、ユーザーと携帯電話番号の正当な紐付けを検証します。"
    },
    {
      "tag": "アプリ保護",
      "title": "アプリケーションセキュリティ",
      "desc": "Web やモバイルアプリにシームレスに組み込み、プラットフォーム全体のセキュリティを底上げします。"
    },
    {
      "tag": "自動連携",
      "title": "自動トリガー配信",
      "desc": "システムの安全基準や特定のアクションイベントに基づき、認証コードを自動で即座に配信します。"
    },
    {
      "tag": "高スループット",
      "title": "大量 OTP メッセージング",
      "desc": "ビジネスの急成長やキャンペーン時の膨大な認証リクエストも、余裕の大容量帯域で処理します。"
    }
  ],
  "howItWorksBadge": "認証ワークフロー",
  "howItWorksTitle": "OTP 配信の仕組みと流れ",
  "howItWorksSubtitle": "API 送信からわずか数秒でユーザーの端末へ安全に届くまでのプロセス。",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "ユーザーのリクエスト",
      "desc": "ユーザーがログイン、会員登録、送金などの認証が必要なアクションを実行します。",
      "note": "アプリからのトリガー"
    },
    {
      "step": "02",
      "title": "API リクエスト送信",
      "desc": "貴社システムからセキュアな REST API 経由で OTP ゲートウェイへ認証コードを送信します。",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "最優先キャリアルーティング",
      "desc": "メッセージは優先キューに格納され、直結キャリアルートを経由して瞬時に発信されます。",
      "note": "超低遅延ルート"
    },
    {
      "step": "04",
      "title": "端末受信と認証完了",
      "desc": "ユーザーがコードを受信して認証を完了。到達結果は Webhook 経由でリアルタイムに返却されます。",
      "note": "リアルタイム DLR 受領"
    }
  ],
  "networkBadge": "グローバル SMS カバレッジ",
  "networkTitle": "円滑な認証を支え続けるグローバルネットワーク",
  "networkDesc": "世界各国の通信キャリアと直接接続された高品質 SMS ネットワークにより、海外ユーザーの認証も安定して支えます。",
  "networkBullets": [
    "世界主要国のモバイルキャリア網への直接接続性",
    "既存の認証システムや 2FA 基盤とのシームレスな統合",
    "急激なトラフィック増にも柔軟に対応する高い拡張性",
    "リアルタイム DLR（配信確認）による高いステータス透明性",
    "開発者向けの分かりやすい REST API と標準プロトコル",
    "即時性が極めて重要な認証シナリオのための専門サポート"
  ],
  "networkStats": [
    {
      "val": "世界規模の網羅性",
      "label": "世界各国の通信キャリアと直接連携"
    },
    {
      "val": "最優先ルート",
      "label": "極限まで遅延を抑えた認証専用トラフィック"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP 専用キャリアゲートウェイ",
    "sub": "即時性が求められる認証のための直接優先ルーティング"
  },
  "networkFooterNote": "実際の到達速度やルートは、送信先端末の電波状況や現地の通信規制によって異なる場合があります。",
  "momentsBadge": "導入業界とユースケース",
  "momentsTitle": "あらゆる重要な認証の瞬間に寄り添う基盤",
  "momentsSubtitle": "強固な本人確認とアカウント保護が不可欠なあらゆるデジタルビジネスで活用されています。",
  "moments": [
    {
      "title": "銀行・フィンテック",
      "desc": "高度なセキュリティ対策の一環として、ログインや送金承認に堅牢な SMS OTP を活用。",
      "footer": "金融 2FA & 決済承認"
    },
    {
      "title": "E コマース・小売",
      "desc": "顧客アカウントの安全なログインを確保し、決済や重要情報の変更を不正アクセスから保護。",
      "footer": "安全な決済 & アカウント保護"
    },
    {
      "title": "旅行・ホスピタリティ",
      "desc": "予約確定、搭乗手続き、旅程情報の確認を SMS 認証で安全かつスムーズに実現。",
      "footer": "予約の安全性 & 旅行者の保護"
    },
    {
      "title": "デジタルプラットフォーム・SaaS",
      "desc": "ユーザー登録、パスワード復旧、多要素ログインに組み込み、快適で安全な利用環境を構築。",
      "footer": "快適なオンボーディング & 安全維持"
    }
  ],
  "comparison": {
    "comparisonTitle": "OTP SMS が認証をどのように強化するか",
    "comparisonSubtitle": "貴社のセキュリティ要件、ユーザー体験、利用者層に合わせて最適な認証手段をお選びいただけます。",
    "otpTitle": "OTP SMS",
    "otpBadge": "全端末共通の圧倒的アクセシビリティ",
    "otpItems": [
      "携帯電話番号へワンタイムパスワードを直接配信",
      "専用アプリの事前インストール不要で、全機種で即座に機能",
      "新規会員登録、ログイン、緊急時のアカウント復旧に最適",
      "端末側のモバイル通信環境および電波状況に依存"
    ],
    "appTitle": "アプリ型認証（Authenticator）",
    "appBadge": "ソフトウェア認証器",
    "appItems": [
      "専用アプリ内で認証コードやプッシュ承認リクエストを生成",
      "Wi-Fi 環境があれば携帯電波が届かない場所でも動作可能",
      "ユーザーによるアプリのダウンロードと初期設定作業が必須",
      "設定方法やシステム設計に応じた独自のセキュリティを提供"
    ],
    "securityNotice": "セキュリティに関する推奨事項：OTP SMS は端末の所持確認として極めて有効ですが、SIM スワップなどのリスクを考慮し、機密性の高いシステムではリスクベース認証や多要素認証の併用を推奨します。"
  },
  "intelligenceBadge": "インテリジェント配信",
  "intelligenceTitle": "数秒以内の超高速配信とリアルタイムレポート",
  "intelligenceDesc": "OTP の到達メトリクス、キャリア応答速度、配信ステータス（DLR）を常時監視し、ユーザーを待たせません。",
  "intelligenceBullets": [
    "即時配信を担保する優先キューイングシステム",
    "リアルタイム DLR Webhook による透明な配信ステータス",
    "最大到達率を維持する自動ルートフェイルオーバー",
    "国別・通信キャリア別の詳細な配信遅延分析ダッシュボード"
  ],
  "intelligenceFootnote": "端末へコードが届いた瞬間に、Webhook を通じて貴社システムへ受領通知が送られます。",
  "messageLogCard": {
    "title": "OTP 配信ステータス監視ログ",
    "badge": "優先 DLR",
    "tab1": "配信完了",
    "tab2": "キュー待機中",
    "tab3": "検証済み",
    "colType": "種別",
    "colState": "状態",
    "colReceipt": "キャリア応答時間",
    "row1Type": "ログイン OTP",
    "row1State": "配信完了",
    "row1Receipt": "1.2 秒（端末受領）",
    "row2Type": "パスワード再設定",
    "row2State": "配信完了",
    "row2Receipt": "0.9 秒（端末受領）",
    "row3Type": "決済承認",
    "row3State": "配信完了",
    "row3Receipt": "1.1 秒（端末受領）",
    "footerText": "グローバルキャリア網において数秒以内の高速配信を実現"
  },
  "protectionTitle": "重要な認証を守り抜く強固な保護機能",
  "protectionBadge": "セキュリティとコンプライアンス",
  "protectionCards": [
    {
      "title": "レートリミット & 不正送信防止",
      "desc": "設定可能なリクエスト頻度制限により、SMS ポンピング詐欺や総当たり攻撃からインフラを保護します。"
    },
    {
      "title": "国際送信者 ID（Sender ID）コンプライアンス",
      "desc": "送信先各国の法規制に準拠し、正規の Sender ID の事前登録や送信審査を完全にサポートします。"
    }
  ],
  "timelineBadge": "体系的な導入ステップ",
  "timelineTitle": "導入計画から本番稼働までのロードマップ",
  "timelineSubtitle": "セキュリティ基準と予想されるトラフィック量に合わせて、段階的かつスムーズに導入を進めます。",
  "timelineSteps": [
    {
      "step": "01",
      "title": "要件ヒアリング",
      "desc": "対象アプリ、送信先国、想定配信ボリューム、認証フローの詳細を確認します。"
    },
    {
      "step": "02",
      "title": "認証フロー設計",
      "desc": "コードの有効期限、再送間隔、メッセージ文面、不正防止ルールを定義します。"
    },
    {
      "step": "03",
      "title": "API 連携・実装",
      "desc": "セキュアな REST API または SMPP 経由で貴社システムとゲートウェイを接続します。"
    },
    {
      "step": "04",
      "title": "検証・テスト",
      "desc": "サンドボックス環境で配信速度、エラーハンドリング、ユーザー体験を入念に検証します。"
    },
    {
      "step": "05",
      "title": "本番ローンチ",
      "desc": "本番トラフィックの送信を開始し、専門チームが常時監視と品質維持をサポートします。"
    }
  ],
  "integrationPlan": {
    "title": "OTP 認証連携仕様",
    "planBadge": "本番稼働対応",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "2FA および重要認証コード",
    "formats": "数字 OTP、英数字トークン",
    "feedback": "リアルタイム DLR 配信確認",
    "senderSetup": "公認 Sender ID / 専用ショートコード",
    "check1": "有効期限タイマーおよび再試行レート制限の設定完了",
    "check2": "迂回フェイルオーバールートおよび Webhook の稼働確認完了",
    "discussNote": "貴社に最適な認証アーキテクチャの設計について、専門エンジニアにご相談ください。",
    "discussBtn": "連携の相談を開始する"
  },
  "faqBadge": "よくあるご質問",
  "faqTitle": "OTP SMS サービスに関する FAQ",
  "faqSubtitle": "超低遅延インフラが貴社の認証セキュリティをどのように支えるかをご確認いただけます。",
  "faqs": [
    {
      "q": "OTP SMS はどのくらいの速さで届きますか？",
      "a": "通常のキャリアネットワーク環境下において、優先ルート経由で通常数秒以内に端末へ着信します。"
    },
    {
      "q": "どのような API を利用できますか？",
      "a": "充実したドキュメントとサンプルコードを備えた REST API のほか、大規模通信向けの SMPP v3.4 に対応しています。"
    },
    {
      "q": "SMS ポンピング詐欺や不正リクエストの対策はありますか？",
      "a": "IP ホワイトリスト、送信頻度制限（レートリミット）、特定国・地域への送信制限機能などを標準装備しています。"
    }
  ],
  "ctaBadge": "認証セキュリティの強化",
  "ctaTitle": "すべてのユーザー認証を、より速く、より確実に",
  "ctaSubtitle": "強固な認証、アカウント保護、決済確認のために設計された高品質 OTP SMS で、安心のデジタル体験を提供しましょう。",
  "contactUs": "OTP SMS の利用を開始する",
  "ctaFootnote": "専用ルートの設計や API 接続の詳細については、当社のスペシャリストにお気軽にお問い合わせください。"
};

const pt: OtpSmsServicesTranslation = {
  "heroBadge": "SERVIÇOS SMS OTP • INFRAESTRUTURA DE AUTENTICAÇÃO",
  "heroTitle": "Cada verificação, conectada com total confiança e agilidade",
  "heroDesc": "Proteja as contas dos seus clientes e simplifique a autenticação de usuários com serviços SMS OTP altamente confiáveis. Envie senhas de uso único para logins, cadastros, redefinição de senhas e validação de transações por meio de uma infraestrutura com ultra baixa latência.",
  "talkToExpert": "Falar com Especialista em OTP",
  "exploreCapabilities": "Explorar Recursos",
  "stats": {
    "routing": "OTP Confiável",
    "routingLabel": "Entrega Imediata",
    "traffic": "API Simples",
    "trafficLabel": "Integração Flexível",
    "insights": "Alcance Global",
    "insightsLabel": "Conexão Direta com Operadoras"
  },
  "heroLiveBadge1": {
    "title": "Entrega Instantânea",
    "label": "Rotas de verificação com baixa latência"
  },
  "heroLiveBadge2": {
    "title": "2FA Nível Operadora",
    "sub": "Roteamento direto e prioritário"
  },
  "whyBadge": "INFRAESTRUTURA DE SEGURANÇA",
  "whyTitle": "Infraestrutura de mensagens que protege cada verificação",
  "whySubtitle1": "Garanta autenticação segura aos seus clientes com mensagens OTP criadas para entrega pontual, fácil integração e capacidade de escala massiva.",
  "whySubtitle2": "Projetada para transmissão de baixa latência e máxima garantia de entrega em redes de telecomunicações internacionais.",
  "whyCards": [
    {
      "title": "Entrega Confiável de OTP",
      "desc": "Envie senhas temporárias por rotas diretas de SMS para assegurar taxas de entrega elevadas em todas as operadoras parceiras.",
      "footer": "Alta garantia de entrega"
    },
    {
      "title": "Mensagens Rápidas de Validação",
      "desc": "Permita que os usuários concluam fluxos de login em poucos segundos graças a rotas prioritárias de entrega rápida.",
      "footer": "Roteamento de baixa latência"
    },
    {
      "title": "Integração Flexível por API",
      "desc": "Conecte capacidades de SMS OTP a sites, aplicativos móveis e sistemas de retaguarda usando APIs REST e SMPP padronizadas.",
      "footer": "API REST & SMPP"
    },
    {
      "title": "Autenticação Escalável",
      "desc": "Suporte volumes massivos de cadastros, acessos simultâneos e validações bancárias com infraestrutura de alto rendimento.",
      "footer": "Capacidade para alto tráfego"
    }
  ],
  "capabilitiesBadge": "PLATAFORMA INTEGRADA OTP",
  "capabilitiesTitle": "Uma plataforma OTP completa para as necessidades do seu negócio",
  "capabilitiesDesc": "Atenda a diversos cenários de autenticação digital com serviços de mensagens adequados a processos corporativos críticos.",
  "designSolution": "Comece a Verificar Usuários",
  "solutionNote": "Configurado para alto volume de 2FA, logins seguros e autenticação transacional.",
  "capabilities": [
    {
      "tag": "Login 2FA",
      "title": "Verificação de Login",
      "desc": "Valide o acesso dos usuários enviando senhas de uso único durante as etapas de login para evitar invasões."
    },
    {
      "tag": "Cadastro",
      "title": "Registro de Nova Conta",
      "desc": "Confirme novos cadastros validando a posse real do número de celular informado pelo usuário."
    },
    {
      "tag": "Recuperação",
      "title": "Redefinição de Senha",
      "desc": "Permita a recuperação segura de contas enviando códigos temporários para solicitações legítimas."
    },
    {
      "tag": "Transações",
      "title": "Autenticação de Transações",
      "desc": "Adicione uma camada de confirmação por SMS para aprovação de transferências bancárias e pagamentos."
    },
    {
      "tag": "Identidade",
      "title": "Validação de Identidade",
      "desc": "Confirme a titularidade da linha telefônica em processos de conformidade, KYC e segurança de cadastro."
    },
    {
      "tag": "Segurança App",
      "title": "Segurança de Aplicativos",
      "desc": "Integre mensagens OTP diretamente em apps e plataformas web para atender às normas de segurança da informação."
    },
    {
      "tag": "Automatizado",
      "title": "Disparos Automáticos de OTP",
      "desc": "Envie mensagens de verificação automaticamente com base em eventos do sistema e regras de segurança."
    },
    {
      "tag": "Alto Volume",
      "title": "Mensageria OTP em Escala",
      "desc": "Processe grandes volumes de requisições com capacidade de infraestrutura alinhada ao crescimento do seu negócio."
    }
  ],
  "howItWorksBadge": "FLUXO DE VERIFICAÇÃO",
  "howItWorksTitle": "Como opera o ciclo de entrega de OTP",
  "howItWorksSubtitle": "Da submissão via API à entrega no aparelho celular em questão de segundos.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Solicitação do Usuário",
      "desc": "O usuário realiza uma ação que exige validação, como login, cadastro ou pagamento.",
      "note": "Disparo no aplicativo"
    },
    {
      "step": "02",
      "title": "Submissão via API",
      "desc": "Seu sistema envia o código temporário ao nosso gateway OTP via endpoints REST protegidos.",
      "note": "API REST / SMPP"
    },
    {
      "step": "03",
      "title": "Roteamento Prioritário",
      "desc": "A mensagem é despachada imediatamente por rotas diretas de operadoras com filas de prioridade máxima.",
      "note": "Roteamento prioritário"
    },
    {
      "step": "04",
      "title": "Recebimento e Confirmação",
      "desc": "O usuário recebe o código e conclui o acesso; o status de entrega é retornado via webhook.",
      "note": "Comprovante DLR em tempo real"
    }
  ],
  "networkBadge": "COBERTURA GLOBAL DE SMS",
  "networkTitle": "Rede global projetada para manter suas verificações sempre ativas",
  "networkDesc": "Conecte-se com clientes em mercados internacionais por meio de links diretos de SMS criados para fluxos de autenticação.",
  "networkBullets": [
    "Conectividade direta de SMS para destinos em todo o mundo",
    "Integração perfeita com sistemas de autenticação e 2FA existentes",
    "Capacidade escalável para suportar picos de tráfego de códigos OTP",
    "Transparência total com comprovantes de entrega (DLR) em tempo real",
    "Envio descomplicado via APIs REST documentadas e protocolos estáveis",
    "Suporte focado em fluxos de verificação sensíveis ao tempo"
  ],
  "networkStats": [
    {
      "val": "Cobertura Global",
      "label": "Interconexão direta com operadoras internacionais"
    },
    {
      "val": "Rotas Prioritárias",
      "label": "Tráfego de validação com latência mínima"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Gateway de Operadora OTP",
    "sub": "Roteamento prioritário direto para autenticações de tempo crítico"
  },
  "networkFooterNote": "A velocidade e as opções de rota dependem das políticas locais das operadoras e das condições da rede.",
  "momentsBadge": "CASOS DE USO E SETORES",
  "momentsTitle": "Desenvolvido para cada momento de verificação",
  "momentsSubtitle": "O SMS OTP viabiliza a autenticação digital nos setores onde a validação de identidade e a proteção de dados são cruciais.",
  "moments": [
    {
      "title": "Bancos e Serviços Financeiros",
      "desc": "Proteja acessos a contas e aprove operações financeiras com fluxos OTP de segurança reforçada.",
      "footer": "2FA financeiro e autorização de pagamento"
    },
    {
      "title": "E-Commerce e Varejo",
      "desc": "Verifique contas de clientes, proteja logins e garanta compras seguras na etapa do checkout.",
      "footer": "Checkout protegido e segurança de conta"
    },
    {
      "title": "Viagens e Hospitalidade",
      "desc": "Confirme reservas, emissão de bilhetes e alterações de voos por meio de verificação instantânea via SMS.",
      "footer": "Confirmação de reservas e proteção de viajantes"
    },
    {
      "title": "Plataformas Digitais e Aplicativos",
      "desc": "Incorpore mensagens OTP em cadastros, redefinições de senha e acessos entre múltiplos dispositivos.",
      "footer": "Onboarding seguro e retenção de usuários"
    }
  ],
  "comparison": {
    "comparisonTitle": "Veja como o SMS OTP fortalece a autenticação de usuários",
    "comparisonSubtitle": "Escolha o método mais adequado com base nos requisitos da aplicação, experiência do usuário e níveis de segurança.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Acessibilidade Universal",
    "otpItems": [
      "Entrega códigos temporários diretamente em qualquer número de celular",
      "Funciona em qualquer aparelho sem a necessidade de baixar apps",
      "Ideal para cadastros em massa, logins rápidos e recuperação de conta",
      "Depende das condições de sinal e rede da operadora móvel"
    ],
    "appTitle": "Autenticação por Aplicativo",
    "appBadge": "Autenticador de Software",
    "appItems": [
      "Gera códigos ou solicitações push em um aplicativo dedicado",
      "Pode operar sem sinal de celular caso haja conexão Wi-Fi ativa",
      "Exige que o usuário instale e configure o aplicativo previamente",
      "Oferece camadas extras de proteção dependendo da implementação"
    ],
    "securityNotice": "Recomendação de segurança: O SMS OTP é altamente eficaz para verificar a posse da linha móvel, mas pode ser vulnerável a golpes de troca de chip (SIM Swap). Para sistemas altamente críticos, combine o OTP com análises de risco adicionais."
  },
  "intelligenceBadge": "INTELIGÊNCIA DE ENTREGA",
  "intelligenceTitle": "Latência em segundos e relatórios de entrega em tempo real",
  "intelligenceDesc": "Monitore o desempenho de entrega, tempo de resposta das operadoras e relatórios DLR para eliminar atrasos na autenticação.",
  "intelligenceBullets": [
    "Filas de alta prioridade para expedição imediata de senhas de uso único",
    "Webhooks de DLR em tempo real para visibilidade total do status",
    "Failover automático de rotas para assegurar índices máximos de entrega",
    "Métricas detalhadas de latência segmentadas por país e operadora"
  ],
  "intelligenceFootnote": "Seus servidores são notificados via webhook assim que o celular do usuário recebe o código.",
  "messageLogCard": {
    "title": "Monitoramento em Tempo Real de OTP",
    "badge": "DLR PRIORITÁRIO",
    "tab1": "Entregues",
    "tab2": "Em Fila",
    "tab3": "Validados",
    "colType": "Tipo",
    "colState": "Status",
    "colReceipt": "Latência da Operadora",
    "row1Type": "OTP de Login",
    "row1State": "Entregue",
    "row1Receipt": "1.2s DLR Aparelho",
    "row2Type": "Redefinir Senha",
    "row2State": "Entregue",
    "row2Receipt": "0.9s DLR Aparelho",
    "row3Type": "Auth Pagamento",
    "row3State": "Entregue",
    "row3Receipt": "1.1s DLR Aparelho",
    "footerText": "Entrega de autenticação em segundos nas operadoras móveis mundiais"
  },
  "protectionTitle": "Proteção construída para verificações críticas",
  "protectionBadge": "SEGURANÇA E CONFORMIDADE",
  "protectionCards": [
    {
      "title": "Limite de Frequência e Prevenção a Fraudes",
      "desc": "Proteja sua plataforma contra ataques de força bruta e bombeamento abusivo de SMS (SMS Pumping)."
    },
    {
      "title": "Conformidade Global de Identificador (Sender ID)",
      "desc": "Garanta registro oficial de remetente e conformidade com as exigências regulatórias dos países de destino."
    }
  ],
  "timelineBadge": "IMPLEMENTAÇÃO ESTRUTURADA",
  "timelineTitle": "Da integração à operação assistida, passo a passo",
  "timelineSubtitle": "Implante o SMS OTP por meio de um processo metódico, alinhado aos padrões de segurança e ao volume do seu produto.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Levantamento de Requisitos",
      "desc": "Defina características da aplicação, países-alvo, volumes previstos e jornadas de validação."
    },
    {
      "step": "02",
      "title": "Desenho do Fluxo",
      "desc": "Estipule tempo de expiração dos códigos, intervalos de reenvio e modelos de mensagens."
    },
    {
      "step": "03",
      "title": "Integração das APIs",
      "desc": "Conecte sua aplicação às nossas APIs REST protegidas ou canais SMPP corporativos."
    },
    {
      "step": "04",
      "title": "Testes e Homologação",
      "desc": "Valide latência de entrega, tratamento de exceções e experiência do usuário no ambiente sandbox."
    },
    {
      "step": "05",
      "title": "Entrada em Produção",
      "desc": "Inicie os disparos em ambiente real com monitoramento constante e suporte técnico contínuo."
    }
  ],
  "integrationPlan": {
    "title": "Especificações de Integração OTP",
    "planBadge": "PRONTO PARA PRODUÇÃO",
    "connection": "API REST / Webhooks / SMPP",
    "traffic": "Códigos de 2FA e Autenticações Críticas",
    "formats": "OTP Numérico, Tokens Alfanuméricos",
    "feedback": "Comprovantes de Entrega DLR em Tempo Real",
    "senderSetup": "Sender ID Registrado / Short Code Oficial",
    "check1": "Temporizadores de expiração e limites de reenvio ativos",
    "check2": "Rotas de contingência e webhooks de entrega operacionais",
    "discussNote": "Fale com nossos engenheiros para planejar a arquitetura de autenticação da sua plataforma.",
    "discussBtn": "Iniciar Integração"
  },
  "faqBadge": "PERGUNTAS FREQUENTES",
  "faqTitle": "Principais dúvidas sobre os serviços SMS OTP",
  "faqSubtitle": "Entenda como nossa infraestrutura de baixa latência garante a segurança dos seus usuários.",
  "faqs": [
    {
      "q": "Em quanto tempo os códigos SMS OTP são entregues?",
      "a": "Nossas rotas prioritárias entregam as mensagens em poucos segundos sob condições normais de rede celular."
    },
    {
      "q": "Quais APIs estão disponíveis para integração?",
      "a": "Oferecemos APIs REST modernas e documentadas para desenvolvedores, além de conexão SMPP v3.4 para ambientes de alto tráfego."
    },
    {
      "q": "Como proteger o sistema contra fraudes e SMS Pumping?",
      "a": "Disponibilizamos filtros automáticos de velocidade, bloqueio de destinos suspeitos e listas de permissão de IP."
    }
  ],
  "ctaBadge": "MODERNIZE SUA AUTENTICAÇÃO",
  "ctaTitle": "Torne cada validação mais rápida, segura e confiável",
  "ctaSubtitle": "Aprimore as jornadas digitais dos seus clientes com serviços SMS OTP criados para autenticação e confirmação de transações com alcance global.",
  "contactUs": "Começar com SMS OTP",
  "ctaFootnote": "Consulte nossos especialistas para saber mais sobre rotas prioritárias e configurações de API."
};

const ru: OtpSmsServicesTranslation = {
  "heroBadge": "СЛУЖБЫ SMS OTP • ИНФРАСТРУКТУРА АУТЕНТИФИКАЦИИ",
  "heroTitle": "Каждая верификация доставлена с максимальной надежностью и скоростью",
  "heroDesc": "Защитите учетные записи клиентов и упростите аутентификацию с помощью высоконадежных сервисов SMS OTP. Отправляйте одноразовые пароли для входа, регистрации, восстановления доступа и подтверждения транзакций через телекоммуникационную инфраструктуру операторского уровня.",
  "talkToExpert": "Связаться со специалистом по OTP",
  "exploreCapabilities": "Изучить возможности",
  "stats": {
    "routing": "Надежный OTP",
    "routingLabel": "Своевременная доставка",
    "traffic": "Простой API",
    "trafficLabel": "Гибкая интеграция",
    "insights": "Глобальный охват",
    "insightsLabel": "Прямое подключение к сетям"
  },
  "heroLiveBadge1": {
    "title": "Мгновенная доставка",
    "label": "Маршруты верификации с ультранизкой задержкой"
  },
  "heroLiveBadge2": {
    "title": "2FA операторского класса",
    "sub": "Прямой приоритетный роутинг"
  },
  "whyBadge": "ИНФРАСТРУКТУРА БЕЗОПАСНОСТИ",
  "whyTitle": "Инфраструктура сообщений, защищающая каждую операцию",
  "whySubtitle1": "Обеспечьте надежную аутентификацию пользователей благодаря SMS-сообщениям OTP, созданным для точной доставки, легкой интеграции и высокой масштабируемости.",
  "whySubtitle2": "Разработано для минимальных задержек и высоких показателей доставляемости в сетях международных операторов связи.",
  "whyCards": [
    {
      "title": "Надежная доставка OTP",
      "desc": "Отправляйте одноразовые пароли по выделенным прямым каналам с гарантированно высокой проходимостью во всех поддерживаемых странах.",
      "footer": "Высокая гарантия доставки"
    },
    {
      "title": "Быстрые проверочные сообщения",
      "desc": "Помогите пользователям мгновенно завершать процессы входа и подтверждения благодаря доставке кодов за секунды.",
      "footer": "Минимальное время задержки"
    },
    {
      "title": "Гибкая интеграция по API",
      "desc": "Легко подключайте функции SMS OTP к веб-сервисам, мобильным приложениям и серверным системам через REST API и SMPP.",
      "footer": "REST API и SMPP"
    },
    {
      "title": "Масштабируемая аутентификация",
      "desc": "Легко справляйтесь с пиковыми нагрузками при массовых регистрациях, авторизациях и валидациях финансовых операций.",
      "footer": "Высокая пропускная способность"
    }
  ],
  "capabilitiesBadge": "ЕДИНАЯ ПЛАТФОРМА OTP",
  "capabilitiesTitle": "Комплексная платформа OTP, созданная для задач вашего бизнеса",
  "capabilitiesDesc": "Поддерживайте различные сценарии цифровой проверки с помощью SMS-сервисов, оптимизированных для критически важных процессов.",
  "designSolution": "Начать верификацию пользователей",
  "solutionNote": "Настроено для больших объемов двухфакторной аутентификации (2FA), входа и подтверждения транзакций.",
  "capabilities": [
    {
      "tag": "Вход 2FA",
      "title": "Проверка подлинности при входе",
      "desc": "Подтверждайте права доступа пользователей отправкой одноразовых паролей на этапе авторизации."
    },
    {
      "tag": "Регистрация",
      "title": "Регистрация учетных записей",
      "desc": "Подтверждайте создание аккаунтов, проверяя реальное владение указанным номером телефона."
    },
    {
      "tag": "Сброс пароля",
      "title": "Восстановление доступа",
      "desc": "Обеспечьте безопасное восстановление учетной записи с помощью временных кодов для подтвержденных запросов."
    },
    {
      "tag": "Транзакции",
      "title": "Аутентификация транзакций",
      "desc": "Добавьте шаг SMS-проверки для подтверждения денежных переводов и значимых платежных операций."
    },
    {
      "tag": "Идентификация",
      "title": "Проверка номера телефона",
      "desc": "Валидируйте владение телефонным номером в процессах верификации личности и соблюдения нормативных требований (KYC)."
    },
    {
      "tag": "Защита ПО",
      "title": "Безопасность приложений",
      "desc": "Встраивайте SMS OTP в веб-платформы и мобильные приложения для строгого соблюдения стандартов защиты данных."
    },
    {
      "tag": "Автоматизация",
      "title": "Автоматические триггеры OTP",
      "desc": "Автоматически инициируйте отправку кодов на основе системных событий и заданных правил безопасности."
    },
    {
      "tag": "Высокий объем",
      "title": "Масштабируемые объемы OTP",
      "desc": "Обрабатывайте огромные массивы запросов на проверку с пропускной способностью, соответствующей росту бизнеса."
    }
  ],
  "howItWorksBadge": "РАБОЧИЙ ПРОЦЕСС",
  "howItWorksTitle": "Как функционирует цикл доставки кодов OTP",
  "howItWorksSubtitle": "От отправки запроса через API до поступления на мобильный телефон за считанные секунды.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Запрос пользователя",
      "desc": "Пользователь инициирует действие, требующее проверки подлинности: вход, регистрацию или платеж.",
      "note": "Событие приложения"
    },
    {
      "step": "02",
      "title": "Отправка через API",
      "desc": "Ваша система передает временный код на наш шлюз через защищенные конечные точки REST API.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Приоритетный маршрут оператора",
      "desc": "Сообщение мгновенно направляется по прямым партнерским каналам с наивысшим приоритетом очереди.",
      "note": "Минимальная задержка"
    },
    {
      "step": "04",
      "title": "Доставка и подтверждение",
      "desc": "Пользователь получает код и завершает авторизацию; статус доставки возвращается через вебхук в реальном времени.",
      "note": "Отчет DLR онлайн"
    }
  ],
  "networkBadge": "ГЛОБАЛЬНОЕ ПОКРЫТИЕ SMS",
  "networkTitle": "Всемирная сеть для бесперебойной доставки кодов верификации",
  "networkDesc": "Связывайтесь с пользователями на ключевых рынках через прямые SMS-каналы, оптимизированные для аутентификации.",
  "networkBullets": [
    "Прямое подключение к операторам мобильной связи по всему миру",
    "Простая интеграция с существующими системами 2FA и защиты данных",
    "Гибкое масштабирование мощностей под любые пиковые объемы OTP",
    "Полная прозрачность доставки благодаря отчетам DLR в реальном времени",
    "Удобная отправка через документированный REST API и стандартные протоколы",
    "Выделенная техническая поддержка для чувствительных ко времени процессов"
  ],
  "networkStats": [
    {
      "val": "Глобальный охват",
      "label": "Прямые подключения к операторам мобильной связи"
    },
    {
      "val": "Приоритетные пути",
      "label": "Трафик верификации с ультранизкой задержкой"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Шлюз OTP операторского уровня",
    "sub": "Прямой роутинг для срочной аутентификации в реальном времени"
  },
  "networkFooterNote": "Фактическая скорость и маршрутизация зависят от политик локальных операторов и условий сети получателя.",
  "momentsBadge": "СФЕРЫ ПРИМЕНЕНИЯ",
  "momentsTitle": "Создано для каждого важного момента подтверждения",
  "momentsSubtitle": "SMS OTP поддерживает цифровую проверку в отраслях, где критически важна защита профилей и безопасность операций.",
  "moments": [
    {
      "title": "Банки и финансовые технологии",
      "desc": "Обеспечьте безопасность доступа к счетам и авторизацию денежных переводов с помощью надежного OTP.",
      "footer": "Финансовый 2FA и авторизация платежей"
    },
    {
      "title": "Электронная коммерция и ритейл",
      "desc": "Проверяйте профили покупателей, защищайте авторизацию и подтверждайте оплату на этапе оформления заказа.",
      "footer": "Безопасный чекаут и защита аккаунтов"
    },
    {
      "title": "Путешествия и бронирование",
      "desc": "Подтверждайте бронирование билетов, доступ к броням и действия пассажиров через мгновенные SMS.",
      "footer": "Валидация бронирований и безопасность"
    },
    {
      "title": "Цифровые сервисы и SaaS",
      "desc": "Интегрируйте одноразовые пароли в регистрацию, вход и восстановление учетных записей на любых устройствах.",
      "footer": "Быстрый онбординг и постоянная защита"
    }
  ],
  "comparison": {
    "comparisonTitle": "Как SMS OTP усиливает цифровую аутентификацию",
    "comparisonSubtitle": "Выберите оптимальный метод проверки в соответствии с требованиями безопасности и удобством пользователей.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Универсальная доступность",
    "otpItems": [
      "Доставляет одноразовые пароли на любые мобильные номера",
      "Работает на всех мобильных телефонах без установки приложений",
      "Идеально подходит для массовых регистраций, входа и сброса пароля",
      "Зависит от покрытия и качества сети сотового оператора"
    ],
    "appTitle": "Аутентификация через приложение",
    "appBadge": "Программный аутентификатор",
    "appItems": [
      "Генерирует коды или push-подтверждения внутри отдельного приложения",
      "Может работать без сотовой связи при наличии активного Wi-Fi",
      "Требует от пользователя предварительной установки и настройки приложения",
      "Предоставляет дополнительные механизмы криптографической защиты"
    ],
    "securityNotice": "Рекомендация по безопасности: SMS OTP подтверждает владение телефонным номером, но уязвим к перевыпуску SIM-карт. Для особо критичных финансовых систем используйте комплексные меры риск-анализа."
  },
  "intelligenceBadge": "ИНТЕЛЛЕКТУАЛЬНАЯ ДОСТАВКА",
  "intelligenceTitle": "Секундная скорость и прозрачные отчеты о доставке",
  "intelligenceDesc": "Контролируйте показатели доставки, время отклика операторов и статусы DLR, чтобы пользователи не сталкивались с задержками.",
  "intelligenceBullets": [
    "Приоритетные очереди для мгновенного выпуска одноразовых кодов",
    "Вебхуки DLR в реальном времени для постоянного контроля статуса",
    "Автоматическое переключение на резервные маршруты для максимальной доставляемости",
    "Подробная аналитика задержек с детализацией по странам и операторам связи"
  ],
  "intelligenceFootnote": "Ваши серверы получают уведомление через вебхук в ту же секунду, когда телефон абонента принимает SMS.",
  "messageLogCard": {
    "title": "Журнал статусов доставки OTP",
    "badge": "ПРИОРИТЕТ DLR",
    "tab1": "Доставлено",
    "tab2": "В очереди",
    "tab3": "Проверено",
    "colType": "Тип",
    "colState": "Статус",
    "colReceipt": "Задержка оператора",
    "row1Type": "OTP для входа",
    "row1State": "Доставлено",
    "row1Receipt": "1.2с DLR на устройство",
    "row2Type": "Сброс пароля",
    "row2State": "Доставлено",
    "row2Receipt": "0.9с DLR на устройство",
    "row3Type": "Подтверждение оплаты",
    "row3State": "Доставлено",
    "row3Receipt": "1.1с DLR на устройство",
    "footerText": "Доставка кодов за секунды через глобальные мобильные сети"
  },
  "protectionTitle": "Защита критически важных операций проверки",
  "protectionBadge": "БЕЗОПАСНОСТЬ И КОМПЛАЕНС",
  "protectionCards": [
    {
      "title": "Ограничение частоты и защита от фрода",
      "desc": "Обеспечьте защиту от атак перебора и мошеннического накачивания трафика (SMS pumping) с помощью настраиваемых лимитов."
    },
    {
      "title": "Международный комплаенс Sender ID",
      "desc": "Гарантируйте официальную регистрацию имени отправителя и полное соответствие законодательству стран назначения."
    }
  ],
  "timelineBadge": "ЭТАПЫ ВНЕДРЕНИЯ",
  "timelineTitle": "От интеграции API до промышленного запуска",
  "timelineSubtitle": "Подключайте SMS OTP по отработанной схеме, полностью адаптированной под архитектуру и объемы вашего сервиса.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Определение требований",
      "desc": "Укажите страны отправки, планируемые объемы сообщений и особенности сценариев проверки."
    },
    {
      "step": "02",
      "title": "Проектирование логики",
      "desc": "Задайте время жизни кодов, лимиты повторных запросов, шаблоны текстов и политики безопасности."
    },
    {
      "step": "03",
      "title": "Интеграция API",
      "desc": "Подключите ваши системы к нашему шлюзу через современные REST API или SMPP."
    },
    {
      "step": "04",
      "title": "Тестирование и проверка",
      "desc": "Проверьте скорость поступления сообщений, обработку ошибок и удобство для пользователей в песочнице."
    },
    {
      "step": "05",
      "title": "Запуск в эксплуатацию",
      "desc": "Начните отправку рабочего трафика при постоянном мониторинге качества и экспертной техподдержке."
    }
  ],
  "integrationPlan": {
    "title": "Параметры интеграции OTP",
    "planBadge": "ГОТОВО К ЗАПУСКУ",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Срочные коды 2FA и проверки подлинности",
    "formats": "Цифровые OTP, буквенно-цифровые токены",
    "feedback": "Отчеты о доставке DLR в реальном времени",
    "senderSetup": "Зарегистрированный Sender ID / Короткий номер",
    "check1": "Настроены таймеры истечения срока действия и лимиты повторов",
    "check2": "Резервные каналы и вебхуки статусов готовы к работе",
    "discussNote": "Проконсультируйтесь с нашими экспертами для создания надежной архитектуры аутентификации.",
    "discussBtn": "Начать интеграцию"
  },
  "faqBadge": "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
  "faqTitle": "Ответы на ключевые вопросы о сервисах SMS OTP",
  "faqSubtitle": "Узнайте, как инфраструктура с минимальной задержкой защищает ваши процессы авторизации.",
  "faqs": [
    {
      "q": "Как быстро доставляются SMS-сообщения с кодами OTP?",
      "a": "Наши приоритетные каналы доставляют одноразовые пароли за считанные секунды в стандартных условиях сети оператора."
    },
    {
      "q": "Какие протоколы и API доступны для подключения?",
      "a": "Мы предоставляем понятный REST API с подробными примерами кода, а также протокол SMPP v3.4 для крупных корпоративных систем."
    },
    {
      "q": "Как предотвратить SMS-фрод и накрутку расходов (SMS pumping)?",
      "a": "Мы предлагаем встроенные механизмы ограничения скорости запросов, блокировку подозрительных префиксов и белые списки IP."
    }
  ],
  "ctaBadge": "СОВЕРШЕНСТВУЙТЕ АУТЕНТИФИКАЦИЮ",
  "ctaTitle": "Сделайте каждую проверку быстрее, безопаснее и надежнее",
  "ctaSubtitle": "Поддержите цифровые сервисы профессиональными SMS OTP для регистрации, защиты аккаунтов и финансовых транзакций.",
  "contactUs": "Подключить SMS OTP",
  "ctaFootnote": "Свяжитесь с нашими специалистами, чтобы выбрать оптимальные маршруты и настроить API."
};

const it: OtpSmsServicesTranslation = {
  "heroBadge": "SERVIZI SMS OTP • INFRASTRUTTURA DI AUTENTICAZIONE",
  "heroTitle": "Ogni verifica, connessa con affidabilità assoluta e tempestività",
  "heroDesc": "Proteggi gli account dei tuoi clienti e semplifica l'autenticazione degli utenti con servizi SMS OTP ad alta affidabilità. Invia password monouso per accessi, registrazioni, reimpostazione delle credenziali e convalida delle transazioni grazie a un'infrastruttura ad altissima velocità.",
  "talkToExpert": "Parla con uno Specialista OTP",
  "exploreCapabilities": "Esplora le Funzionalità",
  "stats": {
    "routing": "OTP Affidabile",
    "routingLabel": "Consegna Immediata",
    "traffic": "API Semplice",
    "trafficLabel": "Integrazione Flessibile",
    "insights": "Copertura Globale",
    "insightsLabel": "Connessione Diretta con Operatori"
  },
  "heroLiveBadge1": {
    "title": "Consegna Istantanea",
    "label": "Rotte di verifica a latenza ultrabassa"
  },
  "heroLiveBadge2": {
    "title": "2FA Livello Operatore",
    "sub": "Routing diretto e prioritario"
  },
  "whyBadge": "INFRASTRUTTURA DI SICUREZZA",
  "whyTitle": "Infrastruttura di messaggistica che protegge ogni verifica",
  "whySubtitle1": "Supporta l'autenticazione sicura dei clienti con SMS OTP progettati per una consegna tempestiva, un'integrazione fluida e una scalabilità elevata.",
  "whySubtitle2": "Progettata per garantire latenza minima e tassi di recapito eccezionali su tutte le reti mobili internazionali.",
  "whyCards": [
    {
      "title": "Consegna Affidabile di OTP",
      "desc": "Invia codici monouso tramite rotte SMS dirette per garantire un recapito costante verso tutti gli operatori supportati.",
      "footer": "Alta garanzia di consegna"
    },
    {
      "title": "Messaggi di Verifica Veloci",
      "desc": "Consenti agli utenti di completare le procedure di accesso in pochi secondi grazie a tempi di transito minimi.",
      "footer": "Routing a bassa latenza"
    },
    {
      "title": "Integrazione API Flessibile",
      "desc": "Collega le funzionalità SMS OTP a siti web, applicazioni mobili e sistemi aziendali tramite API REST e SMPP standard.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Autenticazione Scalabile",
      "desc": "Gestisci senza problemi picchi improvvisi di registrazioni, accessi simultanei e verifiche di transazioni ad alto volume.",
      "footer": "Portata ad alto volume"
    }
  ],
  "capabilitiesBadge": "PIATTAFORMA OTP COMPLETA",
  "capabilitiesTitle": "Una piattaforma OTP integrata progettata per il tuo business",
  "capabilitiesDesc": "Supporta molteplici percorsi di autenticazione digitale con servizi di messaggistica adatti a processi critici aziendali.",
  "designSolution": "Inizia a Verificare gli Utenti",
  "solutionNote": "Configurato per alti volumi di 2FA, accessi sicuri e autenticazione delle transazioni.",
  "capabilities": [
    {
      "tag": "Login 2FA",
      "title": "Verifica dell'Accesso",
      "desc": "Convalida l'accesso degli utenti inviando password monouso durante i passaggi di login per prevenire intrusioni."
    },
    {
      "tag": "Registrazione",
      "title": "Creazione Nuovo Account",
      "desc": "Conferma le nuove registrazioni verificando il reale possesso del numero di cellulare fornito dall'utente."
    },
    {
      "tag": "Ripristino",
      "title": "Reimpostazione Password",
      "desc": "Consenti il recupero sicuro dell'account inviando codici OTP per le richieste legittime di reimpostazione."
    },
    {
      "tag": "Transazioni",
      "title": "Autenticazione Transazioni",
      "desc": "Aggiungi un passaggio di verifica SMS per autorizzare pagamenti online e operazioni finanziarie sensibili."
    },
    {
      "tag": "Identità",
      "title": "Verifica dell'Identità Digitale",
      "desc": "Valida la titolarità del numero di telefono cellulare nei percorsi KYC e nelle verifiche di conformità."
    },
    {
      "tag": "Sicurezza App",
      "title": "Sicurezza delle Applicazioni",
      "desc": "Integra gli SMS OTP in app web e mobili per soddisfare rigorosi requisiti e standard di sicurezza."
    },
    {
      "tag": "Automatizzato",
      "title": "Trigger OTP Automatizzati",
      "desc": "Invia messaggi di verifica in modo automatico in risposta a specifici eventi di sistema e regole di autenticazione."
    },
    {
      "tag": "Volumi Elevati",
      "title": "Messaggistica OTP ad Alta Capacità",
      "desc": "Elabora grandi volumi di richieste di verifica con una capacità di trasmissione allineata alla crescita del business."
    }
  ],
  "howItWorksBadge": "FLUSSO DI LAVORO",
  "howItWorksTitle": "Come funziona il ciclo di consegna OTP",
  "howItWorksSubtitle": "Dall'inoltro tramite API alla ricezione sul telefono cellulare in una manciata di secondi.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Richiesta dell'Utente",
      "desc": "L'utente avvia un'operazione che richiede convalida come accesso, registrazione o pagamento.",
      "note": "Evento nell'applicazione"
    },
    {
      "step": "02",
      "title": "Inoltro via API",
      "desc": "Il tuo sistema trasmette il codice temporaneo al nostro gateway OTP tramite endpoint REST sicuri.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Routing Prioritario Operatore",
      "desc": "Il messaggio viene instradato immediatamente su rotte dirette con code ad altissima priorità.",
      "note": "Routing a bassa latenza"
    },
    {
      "step": "04",
      "title": "Ricezione e Convalida",
      "desc": "L'utente riceve il codice e completa l'accesso; lo stato di consegna viene restituito in tempo reale via webhook.",
      "note": "Ricevuta DLR in tempo reale"
    }
  ],
  "networkBadge": "COPERTURA SMS GLOBALE",
  "networkTitle": "Una rete globale creata per mantenere le verifiche sempre attive",
  "networkDesc": "Connettiti con gli utenti in tutto il mondo attraverso collegamenti SMS diretti dedicati all'autenticazione sicura.",
  "networkBullets": [
    "Connettività SMS diretta verso tutte le principali destinazioni internazionali",
    "Integrazione immediata con i sistemi di autenticazione e 2FA esistenti",
    "Capacità scalabile per gestire qualsiasi picco nel volume dei messaggi OTP",
    "Piena visibilità sullo stato di consegna grazie alle ricevute DLR in tempo reale",
    "Invio flessibile tramite moderne API REST e protocolli standardizzati",
    "Assistenza dedicata per flussi di verifica critici sensibili al fattore tempo"
  ],
  "networkStats": [
    {
      "val": "Copertura Globale",
      "label": "Interconnessione diretta con gli operatori mobili mondiali"
    },
    {
      "val": "Rotte Prioritarie",
      "label": "Traffico di verifica gestito con latenza minima"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Gateway Operatore OTP",
    "sub": "Instradamento prioritario diretto per autenticazioni di tempo critico"
  },
  "networkFooterNote": "La velocità effettiva e le rotte dipendono dalle normative locali degli operatori e dalle condizioni di rete del destinatario.",
  "momentsBadge": "CASI D'USO E SETTORI",
  "momentsTitle": "Creato per ogni momento critico di verifica",
  "momentsSubtitle": "L'SMS OTP supporta l'autenticazione digitale nei settori in cui verificare gli utenti e proteggere gli account è indispensabile.",
  "moments": [
    {
      "title": "Banche e Servizi Finanziari",
      "desc": "Proteggi gli accessi ai conti e autorizza i pagamenti con flussi OTP ad altissima sicurezza.",
      "footer": "2FA finanziario e autorizzazione pagamenti"
    },
    {
      "title": "E-Commerce e Retail",
      "desc": "Verifica gli account dei clienti, proteggi gli accessi e rendi sicure le transazioni durante il checkout.",
      "footer": "Checkout protetto e sicurezza account"
    },
    {
      "title": "Viaggi e Ospitalità",
      "desc": "Conferma prenotazioni, emissione biglietti e variazioni di viaggio tramite verifica SMS immediata.",
      "footer": "Conferma prenotazioni e tutela passeggeri"
    },
    {
      "title": "Piattaforme Digitali e SaaS",
      "desc": "Integra codici monouso in registrazioni, ripristino credenziali e accessi multi-dispositivo.",
      "footer": "Onboarding fluido e protezione continua"
    }
  ],
  "comparison": {
    "comparisonTitle": "Scopri come l'SMS OTP potenzia l'autenticazione digitale",
    "comparisonSubtitle": "Scegli il metodo di verifica ideale in base alle esigenze della tua applicazione, all'esperienza utente e agli standard di sicurezza.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Accessibilità Universale",
    "otpItems": [
      "Invia password monouso direttamente a qualsiasi numero di cellulare",
      "Funziona su tutti i telefoni senza necessità di installare alcuna app",
      "Ideale per registrazioni rapide, accessi e ripristino delle credenziali",
      "Dipende dalla copertura e dalle condizioni di rete dell'operatore mobile"
    ],
    "appTitle": "Autenticazione tramite App",
    "appBadge": "Autenticatore Software",
    "appItems": [
      "Genera codici o richieste push all'interno di un'app dedicata",
      "Può funzionare senza rete cellulare se è attiva una connessione Wi-Fi",
      "Richiede all'utente il download e la configurazione preventiva dell'applicazione",
      "Offre ulteriori vantaggi crittografici a seconda dell'implementazione"
    ],
    "securityNotice": "Raccomandazione di sicurezza: l'SMS OTP convalida il possesso della linea mobile, ma può essere vulnerabile ad attacchi di SIM swap. Per ambienti altamente sensibili, combina l'OTP con controlli di rischio aggiuntivi."
  },
  "intelligenceBadge": "INTELLIGENZA DI CONSEGNA",
  "intelligenceTitle": "Latenza di pochi secondi e report di consegna in tempo reale",
  "intelligenceDesc": "Monitora i parametri prestazionali, i tempi di risposta degli operatori e le ricevute DLR per evitare ritardi nell'autenticazione.",
  "intelligenceBullets": [
    "Code ad alta priorità per l'inoltro immediato delle password temporanee",
    "Webhook DLR in tempo reale per una visibilità istantanea dello stato di consegna",
    "Failover automatico delle rotte per garantire percentuali di recapito massime",
    "Analisi dettagliate sulla latenza suddivise per paese e operatore di telefonia"
  ],
  "intelligenceFootnote": "I tuoi sistemi ricevono una notifica webhook nello stesso momento in cui il telefono del destinatario riceve il codice.",
  "messageLogCard": {
    "title": "Monitoraggio Consegne OTP in Tempo Reale",
    "badge": "DLR PRIORITARIO",
    "tab1": "Consegnati",
    "tab2": "In Coda",
    "tab3": "Verificati",
    "colType": "Tipo",
    "colState": "Stato",
    "colReceipt": "Latenza Operatore",
    "row1Type": "OTP di Accesso",
    "row1State": "Consegnato",
    "row1Receipt": "1.2s DLR Dispositivo",
    "row2Type": "Reset Password",
    "row2State": "Consegnato",
    "row2Receipt": "0.9s DLR Dispositivo",
    "row3Type": "Auth Pagamento",
    "row3State": "Consegnato",
    "row3Receipt": "1.1s DLR Dispositivo",
    "footerText": "Consegna di verifica in pochi secondi attraverso gli operatori mobili mondiali"
  },
  "protectionTitle": "Protezione progettata per verifiche critiche",
  "protectionBadge": "SICUREZZA E CONFORMITÀ",
  "protectionCards": [
    {
      "title": "Limitazione di Frequenza e Prevenzione Frodi",
      "desc": "Proteggi la piattaforma da attacchi brute-force e dal pompaggio illecito di SMS (SMS pumping) con limiti di velocità configurabili."
    },
    {
      "title": "Conformità Globale del Mittente (Sender ID)",
      "desc": "Assicura la registrazione ufficiale del mittente e il rispetto rigoroso delle normative vigenti nei paesi di destinazione."
    }
  ],
  "timelineBadge": "PIANO DI IMPLEMENTAZIONE",
  "timelineTitle": "Dall'integrazione API all'entrata in produzione, passo dopo passo",
  "timelineSubtitle": "Attiva il servizio SMS OTP con un processo metodico e conforme ai requisiti di sicurezza e ai volumi della tua azienda.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Analisi dei Requisiti",
      "desc": "Definisci caratteristiche dell'applicazione, paesi di destinazione, volumi previsti e casi d'uso."
    },
    {
      "step": "02",
      "title": "Pianificazione del Flusso",
      "desc": "Imposta tempi di scadenza dei codici, limiti di reinvio e modelli dei messaggi."
    },
    {
      "step": "03",
      "title": "Integrazione delle API",
      "desc": "Connetti i tuoi sistemi al nostro gateway tramite API REST sicure o protocollo SMPP."
    },
    {
      "step": "04",
      "title": "Collaudo e Validazione",
      "desc": "Verifica tempi di recapito, gestione degli errori ed esperienza utente in ambiente sandbox."
    },
    {
      "step": "05",
      "title": "Rilascio in Produzione",
      "desc": "Avvia l'invio del traffico reale con monitoraggio costante e supporto tecnico qualificato."
    }
  ],
  "integrationPlan": {
    "title": "Specifiche di Integrazione OTP",
    "planBadge": "PRONTO PER LA PRODUZIONE",
    "connection": "API REST / Webhooks / SMPP",
    "traffic": "2FA Critico e Codici di Verifica",
    "formats": "OTP Numerici, Token Alfanumerici",
    "feedback": "Ricevute di Consegna DLR in Tempo Reale",
    "senderSetup": "Sender ID Registrato / Numero Breve Dedicato",
    "check1": "Timer di scadenza e limiti di frequenza configurati",
    "check2": "Rotte di riserva e webhook operativi per la produzione",
    "discussNote": "Confrontati con i nostri specialisti per progettare l'architettura di autenticazione ideale per il tuo servizio.",
    "discussBtn": "Inizia l'Integrazione"
  },
  "faqBadge": "DOMANDE FREQUENTI",
  "faqTitle": "Tutto quello che c'è da sapere sui servizi SMS OTP",
  "faqSubtitle": "Scopri come la nostra infrastruttura ultraveloce protegge i tuoi accessi utente.",
  "faqs": [
    {
      "q": "In quanto tempo vengono recapitati i messaggi SMS OTP?",
      "a": "Le nostre rotte prioritarie consegnano i codici in pochi secondi in condizioni di rete mobile standard."
    },
    {
      "q": "Quali API sono disponibili per l'integrazione del servizio?",
      "a": "Offriamo moderne API REST corredate da documentazione tecnica completa ed esempi di codice, oltre al protocollo SMPP v3.4 per traffico elevato."
    },
    {
      "q": "Come possiamo proteggerci da frodi e pompaggio di SMS (SMS Pumping)?",
      "a": "Mettiamo a disposizione controlli di velocità integrati, filtri di destinazione a rischio e whitelist di indirizzi IP per bloccare traffico abusivo."
    }
  ],
  "ctaBadge": "POTENZIA L'AUTENTICAZIONE",
  "ctaTitle": "Rendi ogni verifica più rapida, sicura e affidabile",
  "ctaSubtitle": "Supporta i percorsi digitali dei tuoi clienti con servizi SMS OTP progettati per l'autenticazione, la protezione degli account e la conferma delle transazioni.",
  "contactUs": "Inizia con SMS OTP",
  "ctaFootnote": "Contatta i nostri esperti per scoprire di più sulle rotte prioritarie e sulle configurazioni API."
};

const ko: OtpSmsServicesTranslation = {
  "heroBadge": "OTP SMS 서비스 • 인증 인프라스트럭처",
  "heroTitle": "모든 인증을 완벽한 신뢰와 초저지연 속도로 안전하게 연결",
  "heroDesc": "신뢰할 수 있는 고품질 OTP SMS 서비스로 고객 계정을 안전하게 보호하고 사용자 인증 절차를 간소화하세요. 보안성과 처리 효율성에 특화된 글로벌 통신 인프라를 통해 로그인, 회원가입, 비밀번호 재설정 및 금융 결제 확인을 위한 일회용 비밀번호(OTP)를 전송합니다.",
  "talkToExpert": "OTP 전문가와 상담하기",
  "exploreCapabilities": "기능 및 역량 알아보기",
  "stats": {
    "routing": "신뢰할 수 있는 OTP",
    "routingLabel": "정확하고 신속한 전달",
    "traffic": "직관적인 API",
    "trafficLabel": "유연한 연동 및 배포",
    "insights": "글로벌 네트워크",
    "insightsLabel": "통신사 직접 연동"
  },
  "heroLiveBadge1": {
    "title": "즉각적인 전송",
    "label": "초저지연 전용 인증 라우팅"
  },
  "heroLiveBadge2": {
    "title": "통신사 등급 2FA",
    "sub": "다이렉트 우선순위 라우팅"
  },
  "whyBadge": "보안 인프라",
  "whyTitle": "모든 인증 과정을 안전하게 보호하는 메시징 인프라",
  "whySubtitle1": "신속한 전달, 간편한 연동, 대규모 확장이 가능한 전용 OTP SMS로 안전한 고객 인증 체계를 구축하세요.",
  "whySubtitle2": "글로벌 모바일 네트워크 전반에서 최소한의 지연 시간과 압도적인 도달 성공률을 제공하도록 설계되었습니다.",
  "whyCards": [
    {
      "title": "신뢰할 수 있는 OTP 전송",
      "desc": "지원되는 모든 국가 및 이동통신사 망에서 일관된 전달 성공률을 유지하는 직결 경로로 일회용 인증번호를 전송합니다.",
      "footer": "높은 도달률 보장"
    },
    {
      "title": "신속한 인증 메시지",
      "desc": "수초 이내의 초고속 전송을 통해 사용자가 지연 없이 안전하게 로그인과 인증 절차를 완료할 수 있도록 지원합니다.",
      "footer": "초저지연 라우팅"
    },
    {
      "title": "유연한 API 연동",
      "desc": "REST API 및 SMPP 표준 규격을 통해 웹사이트, 모바일 앱, 사내 백엔드 시스템에 간편하게 OTP 기능을 연결하세요.",
      "footer": "REST API 및 SMPP 지원"
    },
    {
      "title": "확장 가능한 인증 처리",
      "desc": "회원가입 폭증, 동시 접속 로그인, 대규모 금융 거래 검증 등 트래픽 피크 타임에도 안정적인 처리량을 보장합니다.",
      "footer": "대용량 고속 처리량"
    }
  ],
  "capabilitiesBadge": "올인원 OTP 플랫폼",
  "capabilitiesTitle": "귀사의 비즈니스에 맞춰 최적화된 통합 OTP 플랫폼",
  "capabilitiesDesc": "일상적인 디지털 서비스 이용부터 보안이 극히 중요한 금융 거래까지, 다양한 인증 요구사항을 완벽히 지원합니다.",
  "designSolution": "사용자 인증 시작하기",
  "solutionNote": "대규모 2FA, 안전한 로그인 및 금융 트랜잭션 인증에 최적화 구성되었습니다.",
  "capabilities": [
    {
      "tag": "로그인 2FA",
      "title": "로그인 본인 확인",
      "desc": "로그인 시 일회용 비밀번호를 발송하여 계정 무단 도용을 방지하고 보안을 강화합니다."
    },
    {
      "tag": "회원가입",
      "title": "신규 계정 등록",
      "desc": "가입 시 입력된 휴대폰 번호의 실소유 여부를 즉각 검증하여 허위 계정 생성을 차단합니다."
    },
    {
      "tag": "비밀번호 재설정",
      "title": "계정 복구 및 재설정",
      "desc": "인증된 비밀번호 재설정 요청에 대해 일회용 인증코드를 전송하여 안전한 계정 복구를 지원합니다."
    },
    {
      "tag": "거래 인증",
      "title": "금융 및 결제 거래 인증",
      "desc": "송금, 결제 등 주요 금융 절차에 SMS 인증 단계를 추가하여 전자상거래의 안전성을 극대화합니다."
    },
    {
      "tag": "본인 인증",
      "title": "휴대폰 번호 실명 확인",
      "desc": "KYC 및 각종 규정 준수 절차에서 사용자 본인 명의의 휴대폰 번호 일치 여부를 검증합니다."
    },
    {
      "tag": "앱 보안",
      "title": "애플리케이션 보안 강화",
      "desc": "웹 및 모바일 앱 서비스 전반에 OTP 메시징을 통합하여 정보보안 가이드라인을 충족합니다."
    },
    {
      "tag": "자동화",
      "title": "자동화된 OTP 발송 트리거",
      "desc": "사전 설정된 시스템 이벤트 및 보안 정책에 따라 인증번호를 자동으로 즉각 발송합니다."
    },
    {
      "tag": "대규모 볼륨",
      "title": "대용량 고속 OTP 메시징",
      "desc": "비즈니스 급성장 및 대규모 마케팅 시 발생하는 수많은 인증 요청을 지연 없이 소화합니다."
    }
  ],
  "howItWorksBadge": "인증 워크플로우",
  "howItWorksTitle": "OTP 메시지 전달 작동 프로세스",
  "howItWorksSubtitle": "API 호출부터 사용자의 단말기 수신까지 불과 수초 만에 완료되는 단계별 흐름.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "사용자 인증 요청",
      "desc": "사용자가 로그인, 가입, 결제 등 인증이 필요한 작업을 서비스 내에서 시작합니다.",
      "note": "앱 내 이벤트 발생"
    },
    {
      "step": "02",
      "title": "API 호출 및 전송",
      "desc": "귀사의 시스템이 보안 REST 엔드포인트를 통해 당사 OTP 게이트웨이로 인증코드를 전달합니다.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "통신사 우선순위 라우팅",
      "desc": "메시지가 최우선 대기열을 통해 직결 통신사망으로 지체 없이 즉시 발송됩니다.",
      "note": "초저지연 라우팅"
    },
    {
      "step": "04",
      "title": "단말기 수신 및 검증",
      "desc": "사용자가 코드를 수신하여 인증을 마치며, 전송 상태 결과는 웹훅을 통해 실시간 회신됩니다.",
      "note": "실시간 DLR 수신"
    }
  ],
  "networkBadge": "글로벌 SMS 커버리지",
  "networkTitle": "전 세계 어디서나 중단 없는 인증을 보장하는 글로벌 네트워크",
  "networkDesc": "각국 통신사망과의 다이렉트 연동을 통해 글로벌 사용자의 신원 검증과 계정 보호를 완벽하게 뒷받침합니다.",
  "networkBullets": [
    "전 세계 주요 이동통신사 망과의 다이렉트 SMS 연결성",
    "기존 2FA 및 사내 인증 시스템과의 유연한 결합",
    "트래픽 폭증 시에도 안정적인 대용량 처리 인프라",
    "실시간 전송 결과 리포트(DLR)를 통한 투명한 상태 확인",
    "개발자 친화적인 REST API 및 표준 통신 규격 지원",
    "시간에 민감한 핵심 인증 워크플로우를 위한 전담 기술 지원"
  ],
  "networkStats": [
    {
      "val": "글로벌 커버리지",
      "label": "전 세계 통신사 네트워크 직접 연결"
    },
    {
      "val": "우선순위 경로",
      "label": "최소한의 지연을 보장하는 인증 전용 트래픽"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP 전용 캐리어 게이트웨이",
    "sub": "시간에 민감한 인증을 위한 직결 우선순위 라우팅"
  },
  "networkFooterNote": "실제 전달 속도는 수신 국가의 규제 정책과 수신자 단말기의 통신망 환경에 따라 달라질 수 있습니다.",
  "momentsBadge": "주요 활용 분야",
  "momentsTitle": "결정적인 인증의 순간을 위한 최상의 선택",
  "momentsSubtitle": "강력한 본인 확인과 자산 보호가 필수적인 글로벌 선도 기업들이 OTP SMS를 채택하고 있습니다.",
  "moments": [
    {
      "title": "은행 및 핀테크 금융",
      "desc": "계정 로그인 검증과 송금 및 결제 승인을 강력한 이중 보안(2FA)으로 철저히 보호합니다.",
      "footer": "금융 2FA 및 결제 승인"
    },
    {
      "title": "이커머스 및 리테일",
      "desc": "신규 고객의 본인 확인을 신속히 완료하고, 결제 단계에서의 보안을 철저히 유지합니다.",
      "footer": "안전한 체크아웃 및 계정 보호"
    },
    {
      "title": "여행 및 항공/모빌리티",
      "desc": "티켓 예매, 예약 변경, 탑승권 조회를 SMS 본인 확인으로 안전하고 간편하게 처리합니다.",
      "footer": "예약 검증 및 탑승객 보안"
    },
    {
      "title": "디지털 플랫폼 및 SaaS",
      "desc": "회원가입, 비밀번호 복구, 다중 기기 로그인 과정에 인증코드를 적용하여 서비스 신뢰도를 제고합니다.",
      "footer": "원활한 사용자 온보딩 및 보호"
    }
  ],
  "comparison": {
    "comparisonTitle": "OTP SMS가 디지털 인증을 강화하는 방법 비교",
    "comparisonSubtitle": "서비스의 보안 수준, 사용자 경험 및 고객 환경에 적합한 최적의 인증 방식을 선택하세요.",
    "otpTitle": "OTP SMS",
    "otpBadge": "압도적인 전 단말 보편성",
    "otpItems": [
      "휴대폰 번호로 일회용 인증번호를 즉시 직접 발송",
      "별도의 전용 앱 설치 없이 모든 휴대폰 단말기에서 바로 작동",
      "대규모 회원가입, 신속한 로그인, 긴급 계정 복구에 최적",
      "이동통신사의 전파 상태 및 망 환경에 영향을 받음"
    ],
    "appTitle": "앱 기반 인증기 (Authenticator)",
    "appBadge": "소프트웨어 인증기",
    "appItems": [
      "전용 인증 앱 내에서 코드 생성 또는 푸시 알림 승인 방식",
      "Wi-Fi가 연결되어 있다면 셀룰러 망이 없는 환경에서도 작동 가능",
      "사용자가 사전에 인증 앱을 다운로드하고 계정을 등록해야 함",
      "시스템 설계 방식에 따라 추가적인 암호학적 보안 기능 제공"
    ],
    "securityNotice": "보안 가이드라인: OTP SMS는 번호 소유 여부를 확인하는 탁월한 방법이지만, SIM 스와핑 공격의 위험이 있을 수 있습니다. 극도로 민감한 금융 거래에는 추가적인 리스크 기반 인증을 함께 적용하시기 바랍니다."
  },
  "intelligenceBadge": "인텔리전트 전송",
  "intelligenceTitle": "수초 이내의 초고속 전송 및 실시간 상태 리포트",
  "intelligenceDesc": "전송 성공률, 통신사 응답 시간, 실시간 DLR 리포트를 모니터링하여 사용자의 인증 대기 시간을 완전히 제거합니다.",
  "intelligenceBullets": [
    "인증코드 즉시 발송을 위한 최우선 순위 대기열 시스템",
    "투명한 전송 결과 파악을 위한 실시간 DLR 웹훅",
    "최상의 도달률을 보장하는 자동 대체 경로(Failover) 기능",
    "국가별, 이동통신사별 상세 전송 지연 시간 분석 대시보드"
  ],
  "intelligenceFootnote": "사용자의 휴대폰에 코드가 도착하는 즉시 웹훅을 통해 귀사 서버로 수신 알림이 전달됩니다.",
  "messageLogCard": {
    "title": "실시간 OTP 전송 상태 피드",
    "badge": "우선순위 DLR",
    "tab1": "전송 완료",
    "tab2": "대기 중",
    "tab3": "검증 완료",
    "colType": "유형",
    "colState": "상태",
    "colReceipt": "통신사 지연 시간",
    "row1Type": "로그인 OTP",
    "row1State": "전송 완료",
    "row1Receipt": "1.2초 단말기 DLR",
    "row2Type": "비밀번호 재설정",
    "row2State": "전송 완료",
    "row2Receipt": "0.9초 단말기 DLR",
    "row3Type": "결제 트랜잭션 인증",
    "row3State": "전송 완료",
    "row3Receipt": "1.1초 단말기 DLR",
    "footerText": "글로벌 이동통신사 네트워크 전반에서 초 단위 고속 인증 전달"
  },
  "protectionTitle": "중요 인증 작업을 빈틈없이 지키는 보안성",
  "protectionBadge": "보안 및 규정 준수",
  "protectionCards": [
    {
      "title": "호출 빈도 제한 및 부정 발송 방지",
      "desc": "유연한 속도 제한 설정을 통해 SMS 펌핑 사기 및 무차별 대입 공격으로부터 인프라 비용과 보안을 보호합니다."
    },
    {
      "title": "글로벌 발신번호(Sender ID) 규정 준수",
      "desc": "수신 국가별 통신 규제에 맞춘 공식 발신번호 사전 등록과 규정 준수를 완벽히 대행합니다."
    }
  ],
  "timelineBadge": "체계적인 도입 단계",
  "timelineTitle": "API 연동부터 실제 서비스 오픈까지의 로드맵",
  "timelineSubtitle": "애플리케이션의 보안 요구사항과 트래픽 규모에 맞춘 체계적인 절차를 통해 신속하게 도입하세요.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "요구사항 분석",
      "desc": "서비스 특성, 타겟 국가, 예상 발송 볼륨, 인증 시나리오를 구체적으로 파악합니다."
    },
    {
      "step": "02",
      "title": "인증 흐름 설계",
      "desc": "코드 유효기간, 재발송 제한 시간, 메시지 템플릿, 보안 룰셋을 정의합니다."
    },
    {
      "step": "03",
      "title": "API 연동 개발",
      "desc": "당사의 안전한 REST API 엔드포인트 또는 대용량 SMPP 규격을 시스템에 연결합니다."
    },
    {
      "step": "04",
      "title": "테스트 및 검증",
      "desc": "샌드박스 환경에서 전달 속도, 오류 예외 처리, 사용자 편의성을 면밀히 점검합니다."
    },
    {
      "step": "05",
      "title": "상용 서비스 오픈",
      "desc": "엔지니어링 팀의 실시간 모니터링 및 품질 관리 지원 하에 정식 트래픽 발송을 시작합니다."
    }
  ],
  "integrationPlan": {
    "title": "OTP 인증 시스템 연동 규격",
    "planBadge": "상용 서비스 준비 완료",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "실시간 보안 2FA 및 본인확인 코드",
    "formats": "숫자형 OTP, 영숫자 혼합 토큰",
    "feedback": "실시간 DLR 전송 결과 수신",
    "senderSetup": "사전 등록된 발신번호 / 공식 단축번호",
    "check1": "유효시간 타이머 및 재시도 속도 제한 규칙 설정 완료",
    "check2": "우회 대체 경로 및 실시간 결과 수신 웹훅 가동 준비 완료",
    "discussNote": "귀사에 최적화된 인증 아키텍처 설계를 위해 전문 엔지니어와 상담하세요.",
    "discussBtn": "연동 개발 시작하기"
  },
  "faqBadge": "자주 묻는 질문",
  "faqTitle": "OTP SMS 서비스 관련 핵심 질문과 답변",
  "faqSubtitle": "초저지연 글로벌 인프라가 어떻게 귀사의 비즈니스 보안을 보호하는지 확인하세요.",
  "faqs": [
    {
      "q": "OTP SMS 메시지는 얼마나 빨리 전달되나요?",
      "a": "표준 이동통신사 망 환경에서 당사의 우선순위 직결 루트를 통해 통상 수초 이내에 단말기로 즉각 전달됩니다."
    },
    {
      "q": "시스템 연동을 위해 어떤 인터페이스가 제공되나요?",
      "a": "상세한 예제 코드가 포함된 REST API를 제공하며, 대용량 트래픽 처리가 필요한 엔터프라이즈를 위해 SMPP v3.4 규격을 지원합니다."
    },
    {
      "q": "SMS 펌핑 사기나 비정상 트래픽 공격은 어떻게 차단하나요?",
      "a": "IP 화이트리스트, 동일 번호 발송 빈도 제한(Rate Limiting), 비정상 위험 국가 차단 등 다층 방어 체계를 기본 제공합니다."
    }
  ],
  "ctaBadge": "인증 보안 고도화",
  "ctaTitle": "모든 사용자 인증을 더욱 빠르고 안전하며 확실하게",
  "ctaSubtitle": "계정 보호와 결제 승인을 위해 설계된 고품질 OTP SMS로 전 세계 고객에게 안전하고 신뢰할 수 있는 디지털 경험을 선사하세요.",
  "contactUs": "OTP SMS 도입 시작하기",
  "ctaFootnote": "우선순위 전용 경로 및 연동 가이드에 대해 자세히 알아보려면 전문가와 상담하세요."
};

const nl: OtpSmsServicesTranslation = {
  "heroBadge": "OTP-SMS-DIENSTEN • AUTHENTICATIE-INFRASTRUCTUUR",
  "heroTitle": "Elke verificatie verbonden met maximale betrouwbaarheid en snelheid",
  "heroDesc": "Bescherm klantaccounts en vereenvoudig gebruikersauthenticatie met uiterst betrouwbare OTP-SMS-diensten. Verstuur eenmalige wachtwoorden voor logins, registraties, wachtwoordresets en transactiebevestigingen via een telecominfrastructuur die speciaal is ontworpen voor minimale latentie en hoge beveiliging.",
  "talkToExpert": "Praat met een OTP-specialist",
  "exploreCapabilities": "Ontdek mogelijkheden",
  "stats": {
    "routing": "Betrouwbare OTP",
    "routingLabel": "Directe aflevering",
    "traffic": "Eenvoudige API",
    "trafficLabel": "Flexibele integratie",
    "insights": "Wereldwijd bereik",
    "insightsLabel": "Directe operatorverbinding"
  },
  "heroLiveBadge1": {
    "title": "Directe aflevering",
    "label": "Verificatieroutes met ultralage latentie"
  },
  "heroLiveBadge2": {
    "title": "Carrier-grade 2FA",
    "sub": "Directe prioritaire routering"
  },
  "whyBadge": "BEVEILIGINGSINFRASTRUCTUUR",
  "whyTitle": "Messaging-infrastructuur die elke verificatie beschermt",
  "whySubtitle1": "Ondersteun veilige klantauthenticatie met OTP-berichten ontworpen voor tijdige bezorging, soepele integratie en grootschalige capaciteit.",
  "whySubtitle2": "Ontworpen voor minimale vertraging en uitzonderlijk hoge bezorgingspercentages op internationale mobiele netwerken.",
  "whyCards": [
    {
      "title": "Betrouwbare OTP-aflevering",
      "desc": "Verstuur eenmalige codes via directe SMS-verbindingen met gegarandeerde aankomstpercentages bij alle ondersteunde netwerken.",
      "footer": "Hoge aflevergarantie"
    },
    {
      "title": "Snelle verificatieberichten",
      "desc": "Help gebruikers verificatieworkflows binnen enkele seconden te voltooien dankzij minimale transittijden.",
      "footer": "Lage latentie-routering"
    },
    {
      "title": "Flexibele API-integratie",
      "desc": "Verbind OTP-SMS-mogelijkheden moeiteloos met websites, mobiele apps en backend-systemen via REST API's en SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Schaalbare authenticatie",
      "desc": "Verwerk piekvolumes bij massale registraties, aanmeldingen en transactievalidaties zonder haperingen.",
      "footer": "Hoge doorvoercapaciteit"
    }
  ],
  "capabilitiesBadge": "TOTAAL OTP-PLATFORM",
  "capabilitiesTitle": "Een geïntegreerd OTP-platform afgestemd op uw onderneming",
  "capabilitiesDesc": "Ondersteun uiteenlopende authenticatiescenario's met SMS-diensten die naadloos aansluiten op bedrijfskritische processen.",
  "designSolution": "Start met verificatie",
  "solutionNote": "Geoptimaliseerd voor grootschalige 2FA, veilige logins en transactieauthenticatie.",
  "capabilities": [
    {
      "tag": "Login 2FA",
      "title": "Inlogverificatie",
      "desc": "Verifieer de identiteit van gebruikers door eenmalige wachtwoorden te sturen tijdens het inlogproces."
    },
    {
      "tag": "Registratie",
      "title": "Accountregistratie",
      "desc": "Bevestig nieuwe aanmeldingen door het opgegeven mobiele telefoonnummer direct te valideren."
    },
    {
      "tag": "Wachtwoordreset",
      "title": "Accountherstel",
      "desc": "Ondersteun veilig accountherstel met eenmalige tijdelijke codes voor goedgekeurde aanvragen."
    },
    {
      "tag": "Transacties",
      "title": "Transactie-authenticatie",
      "desc": "Voeg een extra SMS-verificatiestap toe voor het autoriseren van financiële overboekingen en betalingen."
    },
    {
      "tag": "Identiteit",
      "title": "Identiteitsvalidatie",
      "desc": "Valideer het eigendom van telefoonnummers tijdens onboarding en compliance-processen (KYC)."
    },
    {
      "tag": "App-beveiliging",
      "title": "Applicatieveiligheid",
      "desc": "Integreer OTP-berichten rechtstreeks in web- en mobiele applicaties om te voldoen aan strenge beveiligingseisen."
    },
    {
      "tag": "Geautomatiseerd",
      "title": "Automatische OTP-triggers",
      "desc": "Verzend automatisch verificatiecodes op basis van vooraf ingestelde applicatiegebeurtenissen."
    },
    {
      "tag": "Groot volume",
      "title": "Grootschalige OTP-verzending",
      "desc": "Verwerk enorme hoeveelheden verificatieverzoeken met een infrastructuur die meegroeit met uw vraag."
    }
  ],
  "howItWorksBadge": "VERIFICATIEWORKFLOW",
  "howItWorksTitle": "Hoe het OTP-bezorgingsproces werkt",
  "howItWorksSubtitle": "Van API-verzending tot aflevering op het mobiele toestel in enkele seconden.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Gebruikersverzoek",
      "desc": "De gebruiker start een actie die verificatie vereist, zoals inloggen, registreren of afrekenen.",
      "note": "Applicatie-trigger"
    },
    {
      "step": "02",
      "title": "API-verzending",
      "desc": "Uw systeem verstuurt de code via beveiligde REST-endpoints naar onze OTP-gateway.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Prioritaire netwerkroutering",
      "desc": "Het bericht wordt direct verwerkt via directe operatorverbindingen met de hoogste prioriteit.",
      "note": "Lage latentie"
    },
    {
      "step": "04",
      "title": "Ontvangst & validatie",
      "desc": "De gebruiker ontvangt de code en rondt de verificatie af; de status wordt via webhook teruggekoppeld.",
      "note": "Realtime DLR"
    }
  ],
  "networkBadge": "WERELDWIJDE SMS-DEKKING",
  "networkTitle": "Een internationaal netwerk dat verificaties ononderbroken laat doorgaan",
  "networkDesc": "Bereik gebruikers in alle belangrijke markten via directe SMS-connectiviteit geoptimaliseerd voor authenticatie.",
  "networkBullets": [
    "Directe SMS-connectiviteit naar ondersteunde internationale bestemmingen",
    "Moeiteloze integratie met bestaande authenticatie- en 2FA-systemen",
    "Schaalbare berichtcapaciteit voor groeiende volumes",
    "Volledig inzicht in afleverstatussen dankzij realtime DLR-rapportages",
    "Flexibele indiening via moderne REST API's en industriestandaarden",
    "Gespecialiseerde ondersteuning voor tijdskritische verificatieprocessen"
  ],
  "networkStats": [
    {
      "val": "Wereldwijde dekking",
      "label": "Directe koppeling met mobiele operators wereldwijd"
    },
    {
      "val": "Prioriteitsroutes",
      "label": "Verificatieverkeer met minimale vertraging"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP-operatorgateway",
    "sub": "Directe prioritering voor tijdskritische authenticatie"
  },
  "networkFooterNote": "De werkelijke afleversnelheid hangt af van het beleid van lokale operators en de signaalkwaliteit van de ontvanger.",
  "momentsBadge": "TOEPASSINGEN & SECTOREN",
  "momentsTitle": "Ontwikkeld voor elk cruciaal verificatiemoment",
  "momentsSubtitle": "OTP-SMS vormt de basis van digitale verificatie in sectoren waar beveiliging en vertrouwen vooropstaan.",
  "moments": [
    {
      "title": "Banken en financiële diensten",
      "desc": "Beveilig accounttoegang en autoriseer overboekingen met uiterst betrouwbare OTP-stromen.",
      "footer": "Financiële 2FA & betaalautorisatie"
    },
    {
      "title": "E-Commerce en detailhandel",
      "desc": "Valideer klantaccounts, beveilig logins en bescherm betalingen tijdens het afrekenen.",
      "footer": "Veilige checkout & accountbescherming"
    },
    {
      "title": "Reizen en gastvrijheid",
      "desc": "Bevestig ticketboekingen, accounttoegang en wijzigingen via directe SMS-verificatie.",
      "footer": "Boekingsvalidatie & reizigersveiligheid"
    },
    {
      "title": "Digitale platformen en SaaS",
      "desc": "Integreer verificatiecodes bij registratie, wachtwoordherstel en aanmeldingen op meerdere apparaten.",
      "footer": "Soepele onboarding & permanente bescherming"
    }
  ],
  "comparison": {
    "comparisonTitle": "Vergelijk: hoe OTP-SMS uw authenticatie versterkt",
    "comparisonSubtitle": "Kies de methode die het beste aansluit bij uw beveiligingsnormen, gebruikerservaring en doelgroep.",
    "otpTitle": "OTP-SMS",
    "otpBadge": "Universele toegankelijkheid",
    "otpItems": [
      "Levert eenmalige codes direct af op elk mobiel nummer",
      "Werkt direct op elk toestel zonder dat een app geïnstalleerd hoeft te worden",
      "Ideaal voor massale registraties, logins en accountherstel",
      "Afhankelijk van de dekking en netwerkomstandigheden van de mobiele provider"
    ],
    "appTitle": "App-gebaseerde authenticatie",
    "appBadge": "Software-authenticator",
    "appItems": [
      "Genereert codes of push-bevestigingen in een speciale app",
      "Kan functioneren zonder mobiel bereik als er een Wi-Fi-verbinding is",
      "Vereist dat de gebruiker de app vooraf downloadt en configureert",
      "Biedt specifieke cryptografische voordelen afhankelijk van de implementatie"
    ],
    "securityNotice": "Veiligheidsadvies: OTP-SMS controleert betrouwbaar het bezit van een mobiel nummer, maar kan kwetsbaar zijn voor SIM-swapping. Voor uiterst gevoelige systemen raden we aanvullende risicobeoordelingen aan."
  },
  "intelligenceBadge": "INTELLIGENTE BEZORGING",
  "intelligenceTitle": "Aflevering binnen seconden & realtime statusrapportages",
  "intelligenceDesc": "Houd toezicht op afleverstatistieken, operatorresponstijden en DLR-berichten om inlogvertragingen te voorkomen.",
  "intelligenceBullets": [
    "Prioritaire wachtrijen voor directe verzending van verificatiecodes",
    "Realtime DLR-webhooks voor directe transparantie over de status",
    "Automatische route-failover voor maximale bezorgingsgarantie",
    "Gedetailleerde latentie-analyses per land en per telecomoperator"
  ],
  "intelligenceFootnote": "Uw servers ontvangen via webhook bericht op het exacte moment dat de code het mobiele toestel bereikt.",
  "messageLogCard": {
    "title": "Live OTP-afleverstatus",
    "badge": "PRIO-DLR",
    "tab1": "Afgeleverd",
    "tab2": "In wachtrij",
    "tab3": "Geverifieerd",
    "colType": "Type",
    "colState": "Status",
    "colReceipt": "Operatorlatentie",
    "row1Type": "Login-OTP",
    "row1State": "Afgeleverd",
    "row1Receipt": "1.2s Toestel-DLR",
    "row2Type": "Wachtwoordreset",
    "row2State": "Afgeleverd",
    "row2Receipt": "0.9s Toestel-DLR",
    "row3Type": "Transactie-auth",
    "row3State": "Afgeleverd",
    "row3Receipt": "1.1s Toestel-DLR",
    "footerText": "Verificatieaflevering binnen enkele seconden wereldwijd"
  },
  "protectionTitle": "Beveiliging gebouwd voor kritieke verificaties",
  "protectionBadge": "BEVEILIGING & COMPLIANCE",
  "protectionCards": [
    {
      "title": "Snelheidsbeperking & fraudepreventie",
      "desc": "Bescherm uw systemen tegen brute-force-aanvallen en kostbare SMS-pumping dankzij instelbare snelheidslimieten."
    },
    {
      "title": "Wereldwijde Sender-ID-naleving",
      "desc": "Garandeer officiële afzenderregistratie en naleving van alle lokale wettelijke telecomnormen in bestemmingslanden."
    }
  ],
  "timelineBadge": "GESTUURDE IMPLEMENTATIE",
  "timelineTitle": "Van integratie tot livegang, stap voor stap",
  "timelineSubtitle": "Activeer OTP-SMS met een gestructureerd proces dat exact aansluit bij de eisen en volumes van uw platform.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Behoeftebepaling",
      "desc": "Breng bestemmingen, verwachte volumes en authenticatie-eisen helder in kaart."
    },
    {
      "step": "02",
      "title": "Workflow-ontwerp",
      "desc": "Stel geldigheidsduur, hertragingsintervallen en berichtformats nauwkeurig in."
    },
    {
      "step": "03",
      "title": "API-koppeling",
      "desc": "Verbind uw systemen via onze beveiligde REST API's of industriële SMPP-verbindingen."
    },
    {
      "step": "04",
      "title": "Testen & valideren",
      "desc": "Controleer afleversnelheid, foutafhandeling en gebruikersgemak uitvoerig in de sandbox."
    },
    {
      "step": "05",
      "title": "Livegang",
      "desc": "Schakel productieberichten in met continue monitoring en deskundige technische ondersteuning."
    }
  ],
  "integrationPlan": {
    "title": "Specificaties OTP-integratie",
    "planBadge": "KLAAR VOOR PRODUCTIE",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Tijdskritische 2FA- & verificatiecodes",
    "formats": "Numerieke OTP's, alfanumerieke tokens",
    "feedback": "Realtime DLR-afleverbevestigingen",
    "senderSetup": "Geregistreerde Sender ID / Korte code",
    "check1": "Verval-timers en verzendbeperkingen geconfigureerd",
    "check2": "Back-uproutes en statuswebhooks operationeel",
    "discussNote": "Overleg met onze architecten om de beste authenticatie-infrastructuur voor uw dienst te realiseren.",
    "discussBtn": "Start integratie"
  },
  "faqBadge": "VEELGESTELDE VRAGEN",
  "faqTitle": "Belangrijke vragen over onze OTP-SMS-diensten",
  "faqSubtitle": "Lees hoe onze infrastructuur met lage latentie uw authenticatiestromen doeltreffend beschermt.",
  "faqs": [
    {
      "q": "Hoe snel worden OTP-SMS-berichten afgeleverd?",
      "a": "Onze prioritaire verbindingen bezorgen codes onder normale netwerkomstandigheden binnen enkele seconden op het toestel."
    },
    {
      "q": "Welke API's zijn beschikbaar voor koppeling?",
      "a": "Wij bieden moderne REST API's met documentatie en codevoorbeelden, plus SMPP v3.4 voor veeleisende zakelijke omgevingen."
    },
    {
      "q": "Hoe wordt mijn platform beschermd tegen SMS-pumping en fraude?",
      "a": "Wij bieden standaard ingebouwde snelheidslimieten, bestemmingblokkades en IP-whitelisting tegen ongewenst dataverkeer."
    }
  ],
  "ctaBadge": "UPGRADE AUTHENTICATIE",
  "ctaTitle": "Maak elke verificatie sneller, veiliger en betrouwbaarder",
  "ctaSubtitle": "Versterk de digitale ervaringen van uw klanten met OTP-SMS-diensten gebouwd voor authenticatie en transactiebevestigingen.",
  "contactUs": "Aan de slag met OTP-SMS",
  "ctaFootnote": "Neem contact op met onze experts voor meer informatie over prioritaire routes en API-configuraties."
};

const tr: OtpSmsServicesTranslation = {
  "heroBadge": "OTP SMS HİZMETLERİ • KİMLİK DOĞRULAMA ALTYAPISI",
  "heroTitle": "Her doğrulama, mutlak güvenilirlik ve yüksek hızla bağlantıda",
  "heroDesc": "Yüksek güvenilirlikli OTP SMS hizmetleriyle müşteri hesaplarını koruyun ve kullanıcı kimlik doğrulamasını basitleştirin. Düşük gecikmeli ve güvenli mesajlaşma altyapımız üzerinden oturum açma, kayıt, şifre sıfırlama ve finansal işlem onayları için tek kullanımlık şifreler gönderin.",
  "talkToExpert": "OTP Uzmanıyla Görüşün",
  "exploreCapabilities": "Yetenekleri Keşfedin",
  "stats": {
    "routing": "Güvenilir OTP",
    "routingLabel": "Anında Hızlı Teslimat",
    "traffic": "Basit API",
    "trafficLabel": "Esnek Sistem Entegrasyonu",
    "insights": "Küresel Erişim",
    "insightsLabel": "Doğrudan Operatör Bağlantısı"
  },
  "heroLiveBadge1": {
    "title": "Anında Teslimat",
    "label": "Ultra düşük gecikmeli doğrulama rotaları"
  },
  "heroLiveBadge2": {
    "title": "Operatör Düzeyinde 2FA",
    "sub": "Doğrudan öncelikli yönlendirme"
  },
  "whyBadge": "GÜVENLİK ALTYAPISI",
  "whyTitle": "Her doğrulamayı koruyan güçlü mesajlaşma altyapısı",
  "whySubtitle1": "Zamanında teslimat, sorunsuz entegrasyon ve yüksek ölçeklenebilirlik için tasarlanmış OTP SMS hizmetiyle güvenli kimlik doğrulamasını destekleyin.",
  "whySubtitle2": "Uluslararası mobil şebekelerde en düşük gecikme süresi ve maksimum iletim başarısı için geliştirildi.",
  "whyCards": [
    {
      "title": "Güvenilir OTP İletimi",
      "desc": "Tüm desteklenen operatörlerde ve ülkelerde tutarlı yüksek iletim oranına sahip doğrudan rotalarla tek kullanımlık şifreler iletin.",
      "footer": "Yüksek iletim güvencesi"
    },
    {
      "title": "Hızlı Doğrulama Mesajları",
      "desc": "Saniyeler içinde ulaşan kodlar sayesinde kullanıcılarınızın oturum açma ve işlem adımlarını gecikmesiz tamamlamasını sağlayın.",
      "footer": "Düşük gecikmeli yönlendirme"
    },
    {
      "title": "Esnek API Entegrasyonu",
      "desc": "REST API ve SMPP protokolleri üzerinden OTP SMS altyapısını web sitelerine, mobil uygulamalara ve kurumsal sistemlere hızla bağlayın.",
      "footer": "REST API ve SMPP"
    },
    {
      "title": "Ölçeklenebilir Kimlik Doğrulama",
      "desc": "Ani kayıt artışlarında, yoğun oturum açma saatlerinde ve kampanya dönemlerindeki yüksek işlem hacimlerinde kesintisiz performans sağlayın.",
      "footer": "Yüksek hacimli veri akışı"
    }
  ],
  "capabilitiesBadge": "BÜTÜNLEŞİK OTP PLATFORMU",
  "capabilitiesTitle": "İşletmenizin güvenlik ihtiyaçlarına göre şekillendirilmiş OTP platformu",
  "capabilitiesDesc": "Günlük dijital etkileşimlerden kritik kurumsal süreçlere kadar tüm kimlik doğrulama aşamalarını destekleyin.",
  "designSolution": "Kullanıcıları Doğrulamaya Başlayın",
  "solutionNote": "Yüksek hacimli 2FA, güvenli giriş ve işlemsel kimlik doğrulama için optimize edildi.",
  "capabilities": [
    {
      "tag": "Giriş 2FA",
      "title": "Oturum Açma Doğrulaması",
      "desc": "Oturum açma aşamasında tek kullanımlık şifreler göndererek kullanıcı hesaplarını yetkisiz erişimlere karşı koruyun."
    },
    {
      "tag": "Kayıt",
      "title": "Yeni Hesap Kaydı",
      "desc": "Kayıt anında verilen telefon numarasının gerçek sahipliğini anında teyit ederek sahte hesap oluşumunu önleyin."
    },
    {
      "tag": "Şifre Sıfırlama",
      "title": "Hesap Kurtarma",
      "desc": "Yetkili şifre sıfırlama taleplerine yönelik tek kullanımlık kodlar ileterek güvenli hesap kurtarma sağlayın."
    },
    {
      "tag": "İşlemler",
      "title": "Finansal İşlem Doğrulama",
      "desc": "Para transferleri ve kritik online ödemeler için ek bir SMS güvenlik adımı ekleyerek riskleri sıfırlayın."
    },
    {
      "tag": "Kimlik Teyidi",
      "title": "Numara Sahipliği Doğrulama",
      "desc": "Müşteri kabulü (KYC) ve uyumluluk süreçlerinde kullanıcı ile telefon numarası arasındaki bağı onaylayın."
    },
    {
      "tag": "Uygulama Güvenliği",
      "title": "Uygulama Güvenliği",
      "desc": "Yasal güvenlik gereksinimlerini karşılamak amacıyla OTP mesajlaşmasını doğrudan web ve mobil uygulamalarınıza entegre edin."
    },
    {
      "tag": "Otomasyon",
      "title": "Otomatik OTP Tetikleyicileri",
      "desc": "Tanımlı sistem olaylarına ve güvenlik kurallarına bağlı olarak doğrulama kodlarının otomatik iletilmesini sağlayın."
    },
    {
      "tag": "Yüksek Kapasite",
      "title": "Yüksek Hacimli OTP Trafiği",
      "desc": "Büyüyen işletme taleplerine ve ani yoğunluklara uyumlu bant genişliği ile binlerce doğrulamayı aynı anda yönetin."
    }
  ],
  "howItWorksBadge": "İŞ AKIŞI",
  "howItWorksTitle": "OTP iletim döngüsü nasıl çalışır?",
  "howItWorksSubtitle": "API çağrısından kullanıcının cep telefonuna ulaşana kadar geçen süreç saniyeler içinde tamamlanır.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Kullanıcı Talebi",
      "desc": "Kullanıcı uygulama içinde giriş, kayıt veya ödeme gibi doğrulama gerektiren bir işlemi başlatır.",
      "note": "Uygulama tetikleyicisi"
    },
    {
      "step": "02",
      "title": "API Üzerinden Gönderim",
      "desc": "Sisteminiz, tek kullanımlık kodu güvenli REST uç noktaları üzerinden OTP ağ geçidimize iletir.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Öncelikli Operatör Yönlendirmesi",
      "desc": "Mesaj, en yüksek öncelikli kuyruklar üzerinden doğrudan operatör hatlarına anında sevk edilir.",
      "note": "Düşük gecikmeli yönlendirme"
    },
    {
      "step": "04",
      "title": "Cihaza Teslimat ve Onay",
      "desc": "Kullanıcı kodu alarak işlemi tamamlar; iletim durumu webhook aracılığıyla anlık olarak sisteminize iletilir.",
      "note": "Gerçek zamanlı DLR raporu"
    }
  ],
  "networkBadge": "KÜRESEL SMS KAPSAMASI",
  "networkTitle": "Doğrulamaların kesintisiz sürmesini sağlayan küresel iletişim ağı",
  "networkDesc": "Kimlik doğrulama süreçleri için özel olarak optimize edilmiş SMS bağlantısıyla uluslararası kullanıcılarınıza doğrudan ulaşın.",
  "networkBullets": [
    "Dünya genelindeki mobil operatörlere doğrudan SMS bağlantısı",
    "Mevcut 2FA ve kimlik doğrulama sistemleriyle sorunsuz uyum",
    "Trafik artışlarında hız kaybetmeyen esnek altyapı kapasitesi",
    "Gerçek zamanlı teslimat raporları (DLR) ile tam şeffaflık",
    "Geliştirici dostu REST API ve endüstri standardı protokoller",
    "Zamana duyarlı kritik doğrulama akışları için uzman destek"
  ],
  "networkStats": [
    {
      "val": "Küresel Kapsama",
      "label": "Dünya çapında doğrudan operatör bağlantıları"
    },
    {
      "val": "Öncelikli Rotalar",
      "label": "Minimum gecikmeyle iletilen kritik doğrulama trafiği"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP Operatör Ağ Geçidi",
    "sub": "Zamana duyarlı kimlik doğrulamalar için doğrudan öncelikli yönlendirme"
  },
  "networkFooterNote": "Teslimat hızı ve rota seçenekleri, hedef ülkedeki operatör politikalarına ve alıcı şebekesine göre değişiklik gösterebilir.",
  "momentsBadge": "KULLANIM ALANLARI VE SEKTÖRLER",
  "momentsTitle": "Her kritik doğrulama anı için özel olarak tasarlandı",
  "momentsSubtitle": "Güvenli kullanıcı kimlik doğrulamasının ve hesap korumasının vazgeçilmez olduğu tüm sektörlerde OTP SMS kullanılır.",
  "moments": [
    {
      "title": "Bankacılık ve Finansal Hizmetler",
      "desc": "Hesap girişlerini ve para transferlerini yüksek güvenlikli OTP akışlarıyla koruyun.",
      "footer": "Finansal 2FA ve ödeme onayı"
    },
    {
      "title": "E-Ticaret ve Perakende",
      "desc": "Müşteri hesaplarını doğrulayın, oturumları koruyun ve ödeme aşamasında güvenliği sağlayın.",
      "footer": "Güvenli ödeme ve hesap koruması"
    },
    {
      "title": "Seyahat ve Konaklama",
      "desc": "Bilet alımlarını, rezervasyon değişikliklerini ve yolcu işlemlerini anında SMS ile teyit edin.",
      "footer": "Rezervasyon onayı ve yolcu güvenliği"
    },
    {
      "title": "Dijital Platformlar ve SaaS",
      "desc": "Kayıt, şifre yenileme ve çoklu cihaz giriş süreçlerine tek kullanımlık kodlar entegre edin.",
      "footer": "Sorunsuz üye katılımı ve tam koruma"
    }
  ],
  "comparison": {
    "comparisonTitle": "OTP SMS'in kimlik doğrulamayı nasıl güçlendirdiğini keşfedin",
    "comparisonSubtitle": "Uygulama gereksinimlerinize, kullanıcı deneyiminize ve güvenlik standartlarınıza en uygun yöntemi seçin.",
    "otpTitle": "OTP SMS",
    "otpBadge": "Evrensel Mobil Erişim",
    "otpItems": [
      "Tek kullanımlık şifreleri doğrudan tüm cep telefonu numaralarına iletir",
      "Kullanıcının herhangi bir ek uygulama indirmesine gerek kalmadan hemen çalışır",
      "Kitlesel kayıtlar, hızlı girişler ve şifre kurtarma için idealdir",
      "Alıcı operatörün hücresel şebeke çekim koşullarına bağlıdır"
    ],
    "appTitle": "Uygulama Tabanlı Doğrulayıcı",
    "appBadge": "Yazılımsal Doğrulayıcı",
    "appItems": [
      "Özel bir doğrulama uygulaması içinde kodlar veya anlık bildirimler üretir",
      "Wi-Fi bağlantısı olduğu sürece hücresel hat çekmese de çalışabilir",
      "Kullanıcının uygulamayı önceden yüklemesini ve eşleştirmesini gerektirir",
      "Uygulama mimarisine bağlı olarak ek şifreleme avantajları sağlayabilir"
    ],
    "securityNotice": "Güvenlik tavsiyesi: OTP SMS telefon numarasının sahipliğini etkin şekilde doğrular ancak SIM kopyalama risklerine karşı hassas olabilir. Yüksek riskli finansal işlemler için ilave güvenlik katmanları değerlendirilmelidir."
  },
  "intelligenceBadge": "AKILLI İLETİM",
  "intelligenceTitle": "Saniyeler içinde teslimat ve anlık iletim raporları",
  "intelligenceDesc": "Kullanıcıların beklemesini önlemek için OTP iletim oranlarını, operatör yanıt sürelerini ve DLR durumlarını anlık izleyin.",
  "intelligenceBullets": [
    "Tek kullanımlık kodların anında sevki için yüksek öncelikli kuyruk yapısı",
    "Anlık durum görünürlüğü için gerçek zamanlı DLR webhook bildirimleri",
    "Maksimum ulaşma oranı için otomatik yedek rota geçişi (failover)",
    "Ülke ve operatör bazında ayrıntılı gecikme analiz paneli"
  ],
  "intelligenceFootnote": "Kod kullanıcının telefonuna ulaştığı anda webhook sisteminize anında bildirim gönderir.",
  "messageLogCard": {
    "title": "Canlı OTP İletim Durumu Akışı",
    "badge": "ÖNCELİKLİ DLR",
    "tab1": "İletildi",
    "tab2": "Kuyrukta",
    "tab3": "Doğrulandı",
    "colType": "Tür",
    "colState": "Durum",
    "colReceipt": "Operatör Gecikmesi",
    "row1Type": "Giriş OTP",
    "row1State": "İletildi",
    "row1Receipt": "1.2 sn Cihaz DLR",
    "row2Type": "Şifre Sıfırlama",
    "row2State": "İletildi",
    "row2Receipt": "0.9 sn Cihaz DLR",
    "row3Type": "Ödeme Onayı",
    "row3State": "İletildi",
    "row3Receipt": "1.1 sn Cihaz DLR",
    "footerText": "Küresel operatör ağlarında saniyeler içinde doğrulama teslimatı"
  },
  "protectionTitle": "Kritik doğrulamalar için tasarlanmış kurumsal güvenlik",
  "protectionBadge": "GÜVENLİK VE UYUMLULUK",
  "protectionCards": [
    {
      "title": "Hız Sınırlaması ve Suistimal Önleme",
      "desc": "Yapılandırılabilir hız sınırlarıyla sisteminizi SMS pompalama (pumping) ve kaba kuvvet saldırılarına karşı koruyun."
    },
    {
      "title": "Küresel Gönderen Adı (Sender ID) Uyumluluğu",
      "desc": "Uluslararası yasal düzenlemelere ve operatör kayıt zorunluluklarına tam uyumlu gönderen adı tahsisi sağlayın."
    }
  ],
  "timelineBadge": "YAPILANDIRILMIŞ GEÇİŞ PLANI",
  "timelineTitle": "Entegrasyondan canlı yayına adım adım süreç",
  "timelineSubtitle": "Uygulamanızın güvenlik standartlarına ve hacim hedeflerine uygun, planlı bir süreçle OTP SMS'i devreye alın.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Gereksinimlerin Belirlenmesi",
      "desc": "Hedef ülkeler, beklenen OTP hacmi ve kimlik doğrulama süreçlerinizi netleştirin."
    },
    {
      "step": "02",
      "title": "Akışın Tasarlanması",
      "desc": "Kod geçerlilik sürelerini, yeniden deneme limitlerini ve mesaj şablonlarını yapılandırın."
    },
    {
      "step": "03",
      "title": "API Entegrasyonu",
      "desc": "Sisteminizi güvenli REST API uç noktalarımıza veya kurumsal SMPP protokolümüze bağlayın."
    },
    {
      "step": "04",
      "title": "Test ve Doğrulama",
      "desc": "İletim hızlarını, hata yakalama mekanizmalarını ve kullanıcı deneyimini test ortamında onaylayın."
    },
    {
      "step": "05",
      "title": "Canlıya Geçiş",
      "desc": "Sürekli teknik destek ve gerçek zamanlı izleme eşliğinde resmi trafiğinizi başlatın."
    }
  ],
  "integrationPlan": {
    "title": "OTP Entegrasyon Özellikleri",
    "planBadge": "CANLI YAYINA HAZIR",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Zamana Duyarlı 2FA ve Doğrulama Kodları",
    "formats": "Sayısal OTP, Alfanümerik Tokenlar",
    "feedback": "Gerçek Zamanlı DLR İletim Raporları",
    "senderSetup": "Kayıtlı Gönderici Adı / Tahsisli Kısa Numara",
    "check1": "Zaman aşımı süreleri ve istek sınırlamaları yapılandırıldı",
    "check2": "Yedek rotalar ve durum bildirim webhook'ları yayına hazır",
    "discussNote": "Kimlik doğrulama altyapınızı planlamak için teknik ekibimizle görüşün.",
    "discussBtn": "Entegrasyonu Başlat"
  },
  "faqBadge": "SIKÇA SORULAN SORULAR",
  "faqTitle": "OTP SMS hizmetleri hakkında merak edilenler",
  "faqSubtitle": "Düşük gecikmeli altyapımızın kimlik doğrulama süreçlerinizi nasıl koruduğunu öğrenin.",
  "faqs": [
    {
      "q": "OTP SMS mesajları ne kadar sürede teslim edilir?",
      "a": "Öncelikli rotalarımız standart şebeke koşullarında kodları saniyeler içinde kullanıcı cihazına ulaştırır."
    },
    {
      "q": "Entegrasyon için hangi API'ler sunulmaktadır?",
      "a": "Kapsamlı belgelere ve kod örneklerine sahip REST API'ler ile yüksek hacimli sistemler için SMPP v3.4 protokolünü destekliyoruz."
    },
    {
      "q": "SMS pompalama ve dolandırıcılık saldırılarına karşı nasıl önlem alabiliriz?",
      "a": "Sistemimiz entegre hız kısıtlamaları, riskli hedef engelleme ve IP beyaz liste özellikleri ile kötüye kullanımı engeller."
    }
  ],
  "ctaBadge": "KİMLİK DOĞRULAMAYI YÜKSELTİN",
  "ctaTitle": "Her doğrulamayı daha hızlı, güvenli ve güvenilir hale getirin",
  "ctaSubtitle": "Kimlik doğrulama, hesap güvenliği ve ödeme onayı için geliştirilmiş OTP SMS hizmetleriyle dijital süreçlerinizi güçlendirin.",
  "contactUs": "OTP SMS ile Başlayın",
  "ctaFootnote": "Öncelikli yönlendirme rotaları ve API yapılandırmaları hakkında detaylı bilgi için uzmanlarımıza danışın."
};

const id: OtpSmsServicesTranslation = {
  "heroBadge": "LAYANAN SMS OTP • INFRASTRUKTUR AUTENTIKASI",
  "heroTitle": "Setiap verifikasi, terhubung dengan keandalan penuh dan kecepatan tinggi",
  "heroDesc": "Lindungi akun pelanggan dan sederhanakan proses verifikasi pengguna dengan layanan SMS OTP berkeandalan tinggi. Kirim kata sandi sekali pakai untuk login, pendaftaran akun baru, reset kata sandi, dan validasi transaksi finansial melalui infrastruktur telekomunikasi berlatensi rendah.",
  "talkToExpert": "Bicara dengan Spesialis OTP",
  "exploreCapabilities": "Jelajahi Kemampuan",
  "stats": {
    "routing": "OTP Tepercaya",
    "routingLabel": "Pengiriman Tepat Waktu",
    "traffic": "API Sederhana",
    "trafficLabel": "Integrasi Sistem Fleksibel",
    "insights": "Jangkauan Global",
    "insightsLabel": "Koneksi Langsung Operator"
  },
  "heroLiveBadge1": {
    "title": "Pengiriman Instan",
    "label": "Rute verifikasi berlatensi sangat rendah"
  },
  "heroLiveBadge2": {
    "title": "2FA Tingkat Operator",
    "sub": "Perutean langsung berprioritas tinggi"
  },
  "whyBadge": "INFRASTRUKTUR KEAMANAN",
  "whyTitle": "Infrastruktur pesan yang melindungi setiap proses verifikasi",
  "whySubtitle1": "Dukung autentikasi pelanggan yang aman dengan pesan OTP yang dirancang untuk pengiriman cepat, integrasi aplikasi yang mudah, dan skalabilitas masif.",
  "whySubtitle2": "Dirancang untuk latensi minimal dan tingkat keberhasilan pengiriman tertinggi di seluruh jaringan operator seluler internasional.",
  "whyCards": [
    {
      "title": "Pengiriman OTP yang Andal",
      "desc": "Kirim kata sandi sekali pakai melalui jalur SMS langsung yang memastikan tingkat ketercapaian konsisten di semua operator tujuan.",
      "footer": "Jaminan pengiriman tinggi"
    },
    {
      "title": "Pesan Verifikasi Cepat",
      "desc": "Bantu pengguna menyelesaikan alur login dan verifikasi dalam hitungan detik berkat waktu transit yang sangat singkat.",
      "footer": "Perutean latensi rendah"
    },
    {
      "title": "Integrasi API yang Fleksibel",
      "desc": "Hubungkan kemampuan SMS OTP ke situs web, aplikasi seluler, dan sistem backend melalui REST API dan protokol SMPP standar.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Autentikasi yang Terukur",
      "desc": "Kelola lonjakan pengguna saat registrasi massal, login bersamaan, dan verifikasi transaksi tanpa hambatan sistem.",
      "footer": "Throughput volume tinggi"
    }
  ],
  "capabilitiesBadge": "PLATFORM OTP LENGKAP",
  "capabilitiesTitle": "Platform OTP terpadu yang dirancang sesuai kebutuhan bisnis Anda",
  "capabilitiesDesc": "Dukung berbagai skenario autentikasi digital dengan layanan perpesanan yang siap menangani alur verifikasi penting perusahaan.",
  "designSolution": "Mulai Verifikasi Pengguna",
  "solutionNote": "Dikonfigurasi untuk 2FA bervolume tinggi, login aman, dan autentikasi transaksi.",
  "capabilities": [
    {
      "tag": "Login 2FA",
      "title": "Verifikasi Masuk Akun",
      "desc": "Validasi akses pengguna dengan mengirimkan kata sandi sekali pakai saat proses login guna mencegah pembajakan akun."
    },
    {
      "tag": "Pendaftaran",
      "title": "Registrasi Akun Baru",
      "desc": "Konfirmasi pendaftaran pengguna baru dengan memvalidasi kepemilikan nomor ponsel secara instan."
    },
    {
      "tag": "Reset Sandi",
      "title": "Pemulihan Akun Aman",
      "desc": "Fasilitasi pemulihan akun yang aman dengan mengirimkan kode OTP untuk permintaan reset kata sandi yang sah."
    },
    {
      "tag": "Transaksi",
      "title": "Autentikasi Transaksi Keuangan",
      "desc": "Tambahkan langkah verifikasi SMS untuk menyetujui transfer dana, pembayaran, dan transaksi penting lainnya."
    },
    {
      "tag": "Identitas",
      "title": "Validasi Identitas Pengguna",
      "desc": "Pastikan kepemilikan nomor telepon seluler selama proses onboarding dan kepatuhan regulasi (KYC)."
    },
    {
      "tag": "Keamanan Aplikasi",
      "title": "Keamanan Aplikasi & Portal",
      "desc": "Integrasikan SMS OTP langsung ke dalam aplikasi web dan seluler untuk memenuhi standar kepatuhan informasi."
    },
    {
      "tag": "Otomatisasi",
      "title": "Pemicu OTP Otomatis",
      "desc": "Kirimkan kode verifikasi secara otomatis berdasarkan peristiwa sistem dan aturan keamanan yang telah ditentukan."
    },
    {
      "tag": "Kapasitas Besar",
      "title": "Pesan OTP Volume Tinggi",
      "desc": "Proses ribuan permintaan verifikasi per detik dengan kapasitas infrastruktur yang siap menopang pertumbuhan bisnis."
    }
  ],
  "howItWorksBadge": "ALUR VERIFIKASI",
  "howItWorksTitle": "Cara kerja siklus pengiriman kode OTP",
  "howItWorksSubtitle": "Dari pengiriman API hingga diterima di ponsel pengguna hanya dalam beberapa detik.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Permintaan Pengguna",
      "desc": "Pengguna memicu tindakan yang membutuhkan autentikasi seperti login, registrasi, atau pembayaran.",
      "note": "Pemicu aplikasi"
    },
    {
      "step": "02",
      "title": "Pengiriman via API",
      "desc": "Sistem Anda mengirimkan kode OTP ke gateway kami melalui endpoint REST API yang aman.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Perutean Operator Prioritas",
      "desc": "Pesan langsung dikirim melalui rute operator langsung dengan antrean berprioritas tertinggi.",
      "note": "Perutean latensi rendah"
    },
    {
      "step": "04",
      "title": "Penerimaan & Verifikasi",
      "desc": "Pengguna menerima kode dan menyelesaikan autentikasi; status pengiriman dikembalikan secara real-time via webhook.",
      "note": "Tanda terima DLR real-time"
    }
  ],
  "networkBadge": "CAKUPAN SMS GLOBAL",
  "networkTitle": "Jaringan global yang dirancang menjaga kelancaran setiap verifikasi",
  "networkDesc": "Jangkau pengguna di berbagai belahan dunia melalui konektivitas SMS langsung yang dioptimalkan untuk alur autentikasi aman.",
  "networkBullets": [
    "Konektivitas SMS langsung ke operator seluler terkemuka di seluruh dunia",
    "Integrasi mudah dengan sistem autentikasi dan 2FA yang sudah ada",
    "Kapasitas pesan yang dapat diskalakan sesuai lonjakan lalu lintas data",
    "Visibilitas status pengiriman lengkap melalui laporan DLR real-time",
    "Pengiriman fleksibel melalui REST API modern dan protokol standar",
    "Dukungan teknis khusus untuk proses verifikasi yang peka terhadap waktu"
  ],
  "networkStats": [
    {
      "val": "Cakupan Global",
      "label": "Koneksi langsung ke operator seluler internasional"
    },
    {
      "val": "Rute Prioritas",
      "label": "Lalu lintas verifikasi dengan latensi minimal"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Gateway Operator OTP",
    "sub": "Perutean operator langsung untuk autentikasi penting tepat waktu"
  },
  "networkFooterNote": "Kecepatan pengiriman aktual bergantung pada kebijakan operator negara tujuan dan kondisi sinyal penerima.",
  "momentsBadge": "KASUS PENGGUNAAN & INDUSTRI",
  "momentsTitle": "Dibangun untuk setiap momen verifikasi penting",
  "momentsSubtitle": "SMS OTP mendukung autentikasi digital di berbagai industri yang mewajibkan perlindungan akun dan verifikasi identitas.",
  "moments": [
    {
      "title": "Perbankan dan Layanan Keuangan",
      "desc": "Amankan login akun dan otorisasi pembayaran finansial dengan alur OTP berstandar perbankan.",
      "footer": "2FA finansial & otorisasi pembayaran"
    },
    {
      "title": "E-Commerce dan Ritel Online",
      "desc": "Verifikasi akun pembeli, amankan proses masuk, dan lindungi pembayaran saat proses checkout.",
      "footer": "Checkout aman & perlindungan akun"
    },
    {
      "title": "Perjalanan dan Perhotelan",
      "desc": "Konfirmasi reservasi tiket, akses pemesanan, dan verifikasi data penumpang via SMS instan.",
      "footer": "Validasi pemesanan & keamanan penumpang"
    },
    {
      "title": "Platform Digital dan Aplikasi SaaS",
      "desc": "Sematkan kode OTP dalam pendaftaran, pemulihan akun, dan login multi-perangkat.",
      "footer": "Onboarding lancar & proteksi berkelanjutan"
    }
  ],
  "comparison": {
    "comparisonTitle": "Pelajari bagaimana SMS OTP memperkuat sistem autentikasi",
    "comparisonSubtitle": "Pilih metode verifikasi yang paling sesuai dengan kebutuhan aplikasi, kenyamanan pengguna, dan standar keamanan Anda.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Aksesibilitas Universal",
    "otpItems": [
      "Mengirimkan kata sandi sekali pakai langsung ke nomor ponsel mana pun",
      "Bekerja di semua jenis ponsel tanpa perlu mengunduh aplikasi tambahan",
      "Sangat cocok untuk registrasi massal, login cepat, dan pemulihan akun",
      "Bergantung pada kondisi jaringan seluler operator penerima"
    ],
    "appTitle": "Autentikasi Berbasis Aplikasi",
    "appBadge": "Aplikasi Autentikator",
    "appItems": [
      "Menghasilkan kode atau permintaan persetujuan di dalam aplikasi khusus",
      "Dapat berfungsi tanpa jaringan seluler asalkan terhubung ke Wi-Fi",
      "Mengharuskan pengguna mengunduh dan mengatur aplikasi terlebih dahulu",
      "Menawarkan lapisan keamanan kriptografi tambahan sesuai implementasi"
    ],
    "securityNotice": "Rekomendasi keamanan: SMS OTP sangat efektif untuk memverifikasi kepemilikan nomor ponsel, namun dapat rentan terhadap pertukaran SIM (SIM Swap). Untuk transaksi bernilai tinggi, kombinasikan dengan kontrol risiko tambahan."
  },
  "intelligenceBadge": "INTELIGENSI PENGIRIMAN",
  "intelligenceTitle": "Latensi dalam hitungan detik & laporan pengiriman real-time",
  "intelligenceDesc": "Pantau metrik performa pengiriman, waktu respons operator, dan tanda terima DLR agar pengguna tidak mengalami hambatan saat masuk.",
  "intelligenceBullets": [
    "Antrean prioritas tinggi untuk pengiriman kata sandi sekali pakai secara instan",
    "Webhook DLR real-time untuk visibilitas status pengiriman tanpa jeda",
    "Pengalihan rute otomatis (failover) guna memastikan tingkat keberhasilan optimal",
    "Analisis latensi mendalam berdasarkan negara dan operator telekomunikasi"
  ],
  "intelligenceFootnote": "Server Anda akan menerima notifikasi webhook seketika saat kode berhasil diterima oleh ponsel pengguna.",
  "messageLogCard": {
    "title": "Pemantauan Status Pengiriman OTP",
    "badge": "DLR PRIORITAS",
    "tab1": "Terkirim",
    "tab2": "Dalam Antrean",
    "tab3": "Terverifikasi",
    "colType": "Tipe",
    "colState": "Status",
    "colReceipt": "Latensi Operator",
    "row1Type": "OTP Login",
    "row1State": "Terkirim",
    "row1Receipt": "1.2s DLR Ponsel",
    "row2Type": "Reset Sandi",
    "row2State": "Terkirim",
    "row2Receipt": "0.9s DLR Ponsel",
    "row3Type": "Auth Pembayaran",
    "row3State": "Terkirim",
    "row3Receipt": "1.1s DLR Ponsel",
    "footerText": "Pengiriman verifikasi dalam hitungan detik di operator seluler global"
  },
  "protectionTitle": "Keamanan yang dibangun untuk verifikasi penting",
  "protectionBadge": "KEAMANAN & KEPATUHAN",
  "protectionCards": [
    {
      "title": "Pembatasan Kecepatan & Pencegahan Penipuan",
      "desc": "Lindungi sistem dari serangan brute force dan manipulasi lonjakan biaya SMS (SMS pumping) dengan batas kecepatan fleksibel."
    },
    {
      "title": "Kepatuhan ID Pengirim (Sender ID) Global",
      "desc": "Pastikan pendaftaran resmi nama pengirim dan kepatuhan penuh terhadap regulasi telekomunikasi di negara tujuan."
    }
  ],
  "timelineBadge": "TAHAPAN IMPLEMENTASI",
  "timelineTitle": "Dari integrasi API hingga peluncuran resmi, langkah demi langkah",
  "timelineSubtitle": "Terapkan SMS OTP dengan proses terstruktur yang selaras dengan standar keamanan dan volume layanan Anda.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Analisis Kebutuhan",
      "desc": "Tentukan spesifikasi aplikasi, negara tujuan, perkiraan volume pesan, dan skenario autentikasi."
    },
    {
      "step": "02",
      "title": "Perancangan Alur",
      "desc": "Atur masa berlaku kode, batas pengiriman ulang, dan format template pesan verifikasi."
    },
    {
      "step": "03",
      "title": "Integrasi API",
      "desc": "Sambungkan sistem Anda ke gateway kami melalui REST API atau protokol SMPP enterprise."
    },
    {
      "step": "04",
      "title": "Pengujian & Validasi",
      "desc": "Uji kecepatan pengiriman, penanganan kesalahan, dan pengalaman pengguna di lingkungan sandbox."
    },
    {
      "step": "05",
      "title": "Peluncuran Resmi",
      "desc": "Mulai alirkan lalu lintas produksi dengan pemantauan berkala dan dukungan teknis 24/7."
    }
  ],
  "integrationPlan": {
    "title": "Spesifikasi Integrasi OTP",
    "planBadge": "SIAP PRODUKSI",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Kode 2FA & Autentikasi Kritis Waktu",
    "formats": "OTP Numerik, Token Alfanumerik",
    "feedback": "Tanda Terima Pengiriman DLR Real-Time",
    "senderSetup": "Sender ID Terdaftar / Short Code Resmi",
    "check1": "Timer kedaluwarsa dan pembatasan laju pengiriman aktif",
    "check2": "Rute cadangan dan webhook status operasional",
    "discussNote": "Diskusikan dengan arsitek kami untuk merancang infrastruktur autentikasi terbaik bagi platform Anda.",
    "discussBtn": "Mulai Integrasi"
  },
  "faqBadge": "PERTANYAAN UMUM",
  "faqTitle": "Jawaban atas pertanyaan seputar layanan SMS OTP",
  "faqSubtitle": "Pelajari bagaimana infrastruktur berlatensi rendah kami mengamankan alur verifikasi Anda.",
  "faqs": [
    {
      "q": "Seberapa cepat pesan SMS OTP dapat sampai ke pengguna?",
      "a": "Rute prioritas kami mengirimkan kode verifikasi dalam hitungan detik dalam kondisi jaringan seluler standar."
    },
    {
      "q": "API apa saja yang disediakan untuk integrasi?",
      "a": "Kami menyediakan REST API ramah pengembang dengan dokumentasi lengkap, serta protokol SMPP v3.4 untuk volume perusahaan besar."
    },
    {
      "q": "Bagaimana cara mencegah penipuan SMS pumping dan biaya membengkak?",
      "a": "Kami menyediakan filter pembatasan frekuensi pengiriman, pemblokiran nomor tujuan berisiko, dan whitelist IP untuk menghentikan lalu lintas mencurigakan."
    }
  ],
  "ctaBadge": "TINGKATKAN AUTENTIKASI",
  "ctaTitle": "Jadikan setiap verifikasi lebih cepat, aman, dan tepercaya",
  "ctaSubtitle": "Tingkatkan pengalaman digital pelanggan Anda dengan layanan SMS OTP yang andal untuk autentikasi, perlindungan akun, dan konfirmasi pembayaran.",
  "contactUs": "Mulai Gunakan SMS OTP",
  "ctaFootnote": "Hubungi tim spesialis kami untuk informasi lebih lanjut mengenai rute prioritas dan integrasi API."
};

const vi: OtpSmsServicesTranslation = {
  "heroBadge": "DỊCH VỤ SMS OTP • HẠ TẦNG XÁC THỰC BẢO MẬT",
  "heroTitle": "Mỗi mã xác thực, kết nối tin cậy tuyệt đối và tốc độ vượt trội",
  "heroDesc": "Bảo vệ tài khoản khách hàng và tối ưu hóa quy trình xác thực người dùng với dịch vụ SMS OTP độ tin cậy cao. Gửi mật khẩu dùng một lần cho các tác vụ đăng nhập, đăng ký tài khoản, đặt lại mật khẩu và phê duyệt giao dịch thông qua hạ tầng viễn thông độ trễ thấp chuyên biệt.",
  "talkToExpert": "Trao đổi với Chuyên gia OTP",
  "exploreCapabilities": "Khám phá Tính năng",
  "stats": {
    "routing": "OTP Tin Cậy",
    "routingLabel": "Chuyển Phát Kịp Thời",
    "traffic": "API Đơn Giản",
    "trafficLabel": "Tích Hợp Linh Hoạt",
    "insights": "Phủ Sóng Toàn Cầu",
    "insightsLabel": "Kết Nối Nhà Mạng Trực Tiếp"
  },
  "heroLiveBadge1": {
    "title": "Chuyển Phát Tức Thì",
    "label": "Tuyến xác thực độ trễ cực thấp"
  },
  "heroLiveBadge2": {
    "title": "2FA Cấp Nhà Mạng",
    "sub": "Định tuyến trực tiếp ưu tiên cao"
  },
  "whyBadge": "HẠ TẦNG AN NINH",
  "whyTitle": "Hạ tầng tin nhắn bảo vệ từng giao dịch xác thực",
  "whySubtitle1": "Hỗ trợ xác thực khách hàng an toàn với tin nhắn OTP được tối ưu hóa cho tốc độ gửi nhanh, tích hợp thuận tiện và khả năng mở rộng quy mô lớn.",
  "whySubtitle2": "Được thiết kế cho độ trễ truyền tải tối thiểu và tỷ lệ gửi thành công vượt trội trên mạng lưới viễn thông quốc tế.",
  "whyCards": [
    {
      "title": "Chuyển Phát OTP Đáng Tin Cậy",
      "desc": "Gửi mật khẩu dùng một lần qua các tuyến SMS trực tiếp, đảm bảo tỷ lệ nhận ổn định trên toàn bộ các mạng di động hỗ trợ.",
      "footer": "Bảo đảm tỷ lệ gửi cao"
    },
    {
      "title": "Tin Nhắn Xác Thực Tốc Độ Cao",
      "desc": "Giúp người dùng hoàn tất các bước đăng nhập và bảo mật trong vài giây nhờ thời gian truyền dữ liệu siêu nhanh.",
      "footer": "Định tuyến độ trễ thấp"
    },
    {
      "title": "Tích Hợp API Linh Hoạt",
      "desc": "Kết nối dịch vụ SMS OTP với website, ứng dụng di động và hệ thống nội bộ thông qua chuẩn REST API và SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Xác Thực Mở Rộng Linh Hoạt",
      "desc": "Xử lý mượt mà lượng lớn yêu cầu đăng ký, đăng nhập và xác thực giao dịch vào những khung giờ cao điểm.",
      "footer": "Băng thông dung lượng lớn"
    }
  ],
  "capabilitiesBadge": "NỀN TẢNG OTP TOÀN DIỆN",
  "capabilitiesTitle": "Nền tảng OTP trọn gói đáp ứng mọi tiêu chuẩn bảo mật doanh nghiệp",
  "capabilitiesDesc": "Đáp ứng đa dạng kịch bản xác thực số với các dịch vụ tin nhắn phù hợp cho những quy trình vận hành then chốt.",
  "designSolution": "Bắt đầu Xác thực Người dùng",
  "solutionNote": "Cấu hình tối ưu cho xác thực hai yếu tố (2FA) lưu lượng lớn, đăng nhập an toàn và giao dịch tài chính.",
  "capabilities": [
    {
      "tag": "Đăng nhập 2FA",
      "title": "Xác Thực Đăng Nhập",
      "desc": "Xác minh quyền truy cập bằng cách gửi mã OTP khi người dùng đăng nhập để ngăn chặn xâm nhập trái phép."
    },
    {
      "tag": "Đăng ký",
      "title": "Đăng Ký Tài Khoản Mới",
      "desc": "Xác thực việc tạo tài khoản mới bằng cách kiểm tra quyền sở hữu thực tế của số điện thoại được cung cấp."
    },
    {
      "tag": "Khôi phục",
      "title": "Đặt Lại Mật Khẩu",
      "desc": "Hỗ trợ khôi phục tài khoản an toàn bằng mật khẩu dùng một lần cho các yêu cầu cấp lại mật khẩu hợp lệ."
    },
    {
      "tag": "Giao dịch",
      "title": "Xác Thực Giao Dịch",
      "desc": "Bổ sung bước xác minh qua tin nhắn SMS để phê duyệt các giao dịch chuyển tiền và thanh toán trực tuyến."
    },
    {
      "tag": "Định danh",
      "title": "Xác Minh Danh Tính Người Dùng",
      "desc": "Xác thực số điện thoại di động trong quá trình thẩm định khách hàng (KYC) và tuân thủ quy định pháp lý."
    },
    {
      "tag": "Bảo mật App",
      "title": "An Toàn Ứng Dụng",
      "desc": "Tích hợp tin nhắn OTP vào ứng dụng web và di động nhằm đáp ứng các yêu cầu bảo mật thông tin nghiêm ngặt."
    },
    {
      "tag": "Tự động hóa",
      "title": "Kích Hoạt OTP Tự Động",
      "desc": "Gửi mã xác thực tự động dựa trên các sự kiện ứng dụng và chính sách bảo mật đã được thiết lập."
    },
    {
      "tag": "Lưu lượng lớn",
      "title": "Tin Nhắn OTP Dung Lượng Cao",
      "desc": "Xử lý hàng ngàn yêu cầu xác thực mỗi giây với năng lực hạ tầng sẵn sàng cho sự tăng trưởng vượt bậc của doanh nghiệp."
    }
  ],
  "howItWorksBadge": "QUY TRÌNH XÁC THỰC",
  "howItWorksTitle": "Quy trình chuyển phát mã OTP hoạt động như thế nào",
  "howItWorksSubtitle": "Từ lệnh gọi API đến khi nhận tin nhắn trên điện thoại chỉ trong vài giây.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Yêu Cầu Từ Người Dùng",
      "desc": "Người dùng kích hoạt một hành động yêu cầu bảo mật như đăng nhập, đăng ký hoặc thanh toán.",
      "note": "Sự kiện trên ứng dụng"
    },
    {
      "step": "02",
      "title": "Gửi Yêu Cầu Qua API",
      "desc": "Hệ thống của bạn chuyển mã xác thực đến cổng OTP của chúng tôi qua các endpoint REST API bảo mật.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Định Tuyến Nhà Mạng Ưu Tiên",
      "desc": "Tin nhắn được chuyển phát ngay lập tức qua các tuyến trực tiếp của nhà mạng với hàng đợi ưu tiên cao nhất.",
      "note": "Định tuyến độ trễ thấp"
    },
    {
      "step": "04",
      "title": "Nhận Mã & Xác Nhận",
      "desc": "Người dùng nhận mã và hoàn tất thao tác; trạng thái chuyển phát được thông báo tức thì qua webhook.",
      "note": "Báo cáo DLR thời gian thực"
    }
  ],
  "networkBadge": "ĐỘ PHỦ SMS TOÀN CẦU",
  "networkTitle": "Mạng lưới quốc tế duy trì dòng chảy xác thực liên tục",
  "networkDesc": "Tiếp cận khách hàng tại các thị trường quốc tế thông qua kết nối SMS trực tiếp chuyên biệt cho quy trình bảo mật.",
  "networkBullets": [
    "Kết nối SMS trực tiếp tới các nhà mạng viễn thông hàng đầu trên thế giới",
    "Tích hợp trơn tru với các hệ thống xác thực và 2FA sẵn có của doanh nghiệp",
    "Khả năng mở rộng linh hoạt đáp ứng mọi đợt bùng nổ lưu lượng tin nhắn",
    "Minh bạch trạng thái gửi tin với báo cáo DLR thời gian thực",
    "Gửi tin thuận tiện qua REST API hiện đại và giao thức chuẩn doanh nghiệp",
    "Hỗ trợ chuyên sâu cho các luồng xác thực nhạy cảm về thời gian"
  ],
  "networkStats": [
    {
      "val": "Phủ Sóng Toàn Cầu",
      "label": "Kết nối trực tiếp tới các nhà mạng quốc tế"
    },
    {
      "val": "Tuyến Ưu Tiên",
      "label": "Lưu lượng xác thực với độ trễ thấp nhất"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Cổng OTP Nhà Mạng",
    "sub": "Định tuyến ưu tiên trực tiếp cho các tác vụ xác thực khẩn cấp"
  },
  "networkFooterNote": "Tốc độ gửi thực tế phụ thuộc vào chính sách của nhà mạng tại nước sở tại và tình trạng sóng của người nhận.",
  "momentsBadge": "TÌNH HUỐNG SỬ DỤNG & NGÀNH NGHỀ",
  "momentsTitle": "Được thiết kế cho mọi khoảnh khắc xác thực quan trọng",
  "momentsSubtitle": "SMS OTP bảo vệ quy trình chuyển đổi số trong các ngành đòi hỏi sự tin cậy cao và an toàn tài khoản tuyệt đối.",
  "moments": [
    {
      "title": "Ngân hàng và Tài chính Số",
      "desc": "Bảo vệ tài khoản khách hàng và xác thực các giao dịch chuyển khoản với quy trình OTP tiêu chuẩn cao.",
      "footer": "2FA tài chính & phê duyệt giao dịch"
    },
    {
      "title": "Thương mại Điện tử và Bán lẻ",
      "desc": "Xác minh tài khoản người mua, bảo mật đăng nhập và bảo vệ quy trình thanh toán trực tuyến.",
      "footer": "Thanh toán an toàn & bảo vệ tài khoản"
    },
    {
      "title": "Du lịch và Vận chuyển",
      "desc": "Xác nhận đặt chỗ, tra cứu vé điện tử và cập nhật hành trình thông qua tin nhắn xác thực SMS.",
      "footer": "Xác thực đặt chỗ & bảo vệ hành khách"
    },
    {
      "title": "Nền tảng Số và Ứng dụng SaaS",
      "desc": "Tích hợp mã xác thực vào quá trình đăng ký, khôi phục tài khoản và đăng nhập đa thiết bị.",
      "footer": "Gia nhập dễ dàng & bảo mật dài lâu"
    }
  ],
  "comparison": {
    "comparisonTitle": "Khám phá cách SMS OTP nâng tầm giải pháp xác thực",
    "comparisonSubtitle": "Lựa chọn phương thức tối ưu nhất dựa trên yêu cầu của ứng dụng, trải nghiệm người dùng và tiêu chuẩn an toàn.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Tiếp Cận Toàn Diện Mọi Thiết Bị",
    "otpItems": [
      "Chuyển phát mật khẩu một lần trực tiếp tới bất kỳ số điện thoại nào",
      "Hoạt động ngay trên mọi thiết bị di động mà không cần cài thêm ứng dụng",
      "Lý tưởng cho đăng ký hàng loạt, đăng nhập nhanh và khôi phục tài khoản",
      "Phụ thuộc vào điều kiện sóng và mạng di động của thuê bao nhận"
    ],
    "appTitle": "Xác Thực Qua Ứng Dụng",
    "appBadge": "Ứng Dụng Tạo Mã",
    "appItems": [
      "Tạo mã xác thực hoặc thông báo phê duyệt trong một ứng dụng riêng biệt",
      "Có thể hoạt động khi mất sóng di động nếu thiết bị kết nối Wi-Fi",
      "Yêu cầu người dùng phải tải về, cài đặt và cấu hình ứng dụng từ trước",
      "Cung cấp các cơ chế bảo mật bổ sung tùy thuộc vào cách thức triển khai"
    ],
    "securityNotice": "Khuyến nghị bảo mật: SMS OTP xác thực hiệu quả quyền sở hữu số điện thoại, nhưng có thể chịu rủi ro hoán đổi SIM (SIM swap). Với các giao dịch tài chính trọng yếu, hãy kết hợp thêm các giải pháp kiểm soát rủi ro đa tầng."
  },
  "intelligenceBadge": "HỆ THỐNG PHÂN PHỐI THÔNG MINH",
  "intelligenceTitle": "Độ trễ tính bằng giây & báo cáo trạng thái thời gian thực",
  "intelligenceDesc": "Giám sát hiệu suất gửi tin, thời gian phản hồi của nhà mạng và biên nhận DLR để người dùng không phải chờ đợi.",
  "intelligenceBullets": [
    "Hàng đợi ưu tiên cao giúp phát hành mã OTP ngay lập tức",
    "Webhook DLR thời gian thực cho cái nhìn minh bạch về tiến độ gửi",
    "Tự động chuyển tuyến dự phòng đảm bảo tỷ lệ hoàn thành tối đa",
    "Phân tích độ trễ chi tiết theo từng quốc gia và nhà mạng viễn thông"
  ],
  "intelligenceFootnote": "Hệ thống của bạn sẽ nhận được thông báo qua webhook ngay tại thời điểm thiết bị nhận được mã.",
  "messageLogCard": {
    "title": "Theo Dõi Trạng Thái Gửi OTP Trực Tiếp",
    "badge": "DLR ƯU TIÊN",
    "tab1": "Đã gửi",
    "tab2": "Đang chờ",
    "tab3": "Đã xác thực",
    "colType": "Loại",
    "colState": "Trạng thái",
    "colReceipt": "Độ trễ Nhà mạng",
    "row1Type": "OTP Đăng nhập",
    "row1State": "Đã gửi",
    "row1Receipt": "1.2s DLR Thiết bị",
    "row2Type": "Đặt lại mật khẩu",
    "row2State": "Đã gửi",
    "row2Receipt": "0.9s DLR Thiết bị",
    "row3Type": "Xác thực giao dịch",
    "row3State": "Đã gửi",
    "row3Receipt": "1.1s DLR Thiết bị",
    "footerText": "Chuyển phát mã xác thực trong vài giây trên các mạng di động quốc tế"
  },
  "protectionTitle": "Bảo mật chuyên biệt cho các giao dịch quan trọng",
  "protectionBadge": "AN NINH & TUÂN THỦ",
  "protectionCards": [
    {
      "title": "Giới Hạn Tần Suất & Chống Gian Lận",
      "desc": "Bảo vệ hệ thống khỏi tấn công dò mã (brute force) và gian lận phát sinh cước SMS (SMS pumping) với hạn mức linh hoạt."
    },
    {
      "title": "Tuân Thủ Định Danh Người Gửi (Sender ID) Toàn Cầu",
      "desc": "Đảm bảo đăng ký tên định danh người gửi chính thức và tuân thủ nghiêm ngặt các quy định viễn thông địa phương."
    }
  ],
  "timelineBadge": "LỘ TRÌNH TRIỂN KHAI",
  "timelineTitle": "Từ tích hợp API đến vận hành thực tế, từng bước vững chắc",
  "timelineSubtitle": "Triển khai dịch vụ SMS OTP theo quy trình chuyên nghiệp, đồng bộ với kiến trúc an ninh và lưu lượng của doanh nghiệp.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Khảo Sát Yêu Cầu",
      "desc": "Xác định thị trường mục tiêu, sản lượng tin nhắn dự kiến và các luồng xác thực cần thiết."
    },
    {
      "step": "02",
      "title": "Thiết Kế Luồng Xác Thực",
      "desc": "Thiết lập thời gian hết hạn của mã, giới hạn gửi lại và mẫu nội dung tin nhắn chuẩn."
    },
    {
      "step": "03",
      "title": "Tích Hợp API",
      "desc": "Kết nối hệ thống của bạn với cổng OTP qua REST API bảo mật hoặc giao thức SMPP."
    },
    {
      "step": "04",
      "title": "Kiểm Thử & Đánh Giá",
      "desc": "Kiểm tra tốc độ chuyển phát, kịch bản xử lý lỗi và trải nghiệm người dùng trong môi trường sandbox."
    },
    {
      "step": "05",
      "title": "Vận Hành Chính Thức",
      "desc": "Bắt đầu phát hành lưu lượng thực tế với sự giám sát chặt chẽ và hỗ trợ kỹ thuật liên tục."
    }
  ],
  "integrationPlan": {
    "title": "Thông Số Tích Hợp OTP",
    "planBadge": "SẴN SÀNG CHO SẢN PHẨM",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Mã 2FA & Xác Thực Khẩn Cấp",
    "formats": "Mã số OTP, Token Chữ và Số",
    "feedback": "Biên Nhận Chuyển Phát DLR Thời Gian Thực",
    "senderSetup": "Sender ID Đã Đăng Ký / Đầu Số Ngắn",
    "check1": "Đã cài đặt thời gian hết hạn và giới hạn tần suất gửi tin",
    "check2": "Các tuyến dự phòng và webhook trạng thái đã hoạt động",
    "discussNote": "Trao đổi với các chuyên gia kỹ thuật để xây dựng kiến trúc xác thực tối ưu cho dịch vụ của bạn.",
    "discussBtn": "Bắt Đầu Tích Hợp"
  },
  "faqBadge": "CÂU HỎI THƯỜNG GẶP",
  "faqTitle": "Giải đáp các thắc mắc về dịch vụ SMS OTP",
  "faqSubtitle": "Tìm hiểu cách hạ tầng độ trễ thấp bảo vệ toàn diện các luồng xác thực người dùng của bạn.",
  "faqs": [
    {
      "q": "Tin nhắn SMS OTP được chuyển phát nhanh đến mức nào?",
      "a": "Các tuyến ưu tiên của chúng tôi chuyển mã đến tay người nhận chỉ trong vài giây trong điều kiện mạng di động bình thường."
    },
    {
      "q": "Hệ thống hỗ trợ những phương thức kết nối API nào?",
      "a": "Chúng tôi cung cấp chuẩn REST API thân thiện kèm tài liệu chi tiết, mã mẫu và giao thức SMPP v3.4 cho nhu cầu tải lớn."
    },
    {
      "q": "Doanh nghiệp có thể phòng tránh gian lận SMS pumping như thế nào?",
      "a": "Nền tảng tích hợp sẵn tính năng giới hạn tần suất gửi tin, chặn đầu số rủi ro và whitelist địa chỉ IP để loại bỏ lưu lượng xấu."
    }
  ],
  "ctaBadge": "NÂNG CẤP XÁC THỰC",
  "ctaTitle": "Giúp mỗi lượt xác thực trở nên nhanh chóng, an toàn và tin cậy hơn",
  "ctaSubtitle": "Tối ưu hóa trải nghiệm khách hàng với dịch vụ SMS OTP được xây dựng riêng cho xác thực tài khoản và phê duyệt giao dịch trên toàn thế giới.",
  "contactUs": "Bắt Đầu với SMS OTP",
  "ctaFootnote": "Liên hệ với đội ngũ chuyên gia của chúng tôi để tìm hiểu thêm về các tuyến ưu tiên và cấu hình API."
};

const pl: OtpSmsServicesTranslation = {
  "heroBadge": "USŁUGI SMS OTP • INFRASTRUKTURA UWIERZYTELNIANIA",
  "heroTitle": "Każda weryfikacja dostarczona z absolutną niezawodnością i szybkością",
  "heroDesc": "Chroń konta klientów i upraszczaj procesy uwierzytelniania użytkowników dzięki wysoce niezawodnym usługom SMS OTP. Wysyłaj jednorazowe hasła do logowania, rejestracji, resetowania haseł i autoryzacji transakcji za pośrednictwem dedykowanej infrastruktury telekomunikacyjnej o ultraniskich opóźnieniach.",
  "talkToExpert": "Porozmawiaj ze specjalistą ds. OTP",
  "exploreCapabilities": "Poznaj możliwości",
  "stats": {
    "routing": "Niezawodne OTP",
    "routingLabel": "Błyskawiczne doręczenie",
    "traffic": "Proste API",
    "trafficLabel": "Elastyczna integracja",
    "insights": "Zasięg globalny",
    "insightsLabel": "Bezpośrednie łącza operatorskie"
  },
  "heroLiveBadge1": {
    "title": "Natychmiastowe doręczenie",
    "label": "Trasy weryfikacyjne o ultraniskim opóźnieniu"
  },
  "heroLiveBadge2": {
    "title": "2FA klasy operatorskiej",
    "sub": "Bezpośredni priorytetowy routing"
  },
  "whyBadge": "INFRASTRUKTURA BEZPIECZEŃSTWA",
  "whyTitle": "Infrastruktura wiadomości zabezpieczająca każdą operację",
  "whySubtitle1": "Wspieraj bezpieczne uwierzytelnianie klientów dzięki wiadomościom OTP stworzonym z myślą o natychmiastowym doręczeniu, bezproblemowej integracji i wysokiej skalowalności.",
  "whySubtitle2": "Zaprojektowana z myślą o minimalnych opóźnieniach i najwyższych wskaźnikach doręczalności w międzynarodowych sieciach komórkowych.",
  "whyCards": [
    {
      "title": "Niezawodne doręczanie kodów OTP",
      "desc": "Wysyłaj hasła jednorazowe dedykowanymi trasami bezpośrednimi gwarantującymi stałą i wysoką skuteczność u wszystkich obsługiwanych operatorów.",
      "footer": "Wysoka gwarancja doręczenia"
    },
    {
      "title": "Szybkie komunikaty weryfikacyjne",
      "desc": "Umożliwiaj użytkownikom błyskawiczne logowanie i finalizację operacji dzięki czasom dostarczenia liczonym w sekundach.",
      "footer": "Routing o niskim opóźnieniu"
    },
    {
      "title": "Elastyczna integracja przez API",
      "desc": "Bezproblemowo łącz usługi SMS OTP ze stronami internetowymi, aplikacjami mobilnymi i systemami backendowymi poprzez REST API oraz SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Skalowalne uwierzytelnianie",
      "desc": "Pewnie obsługuj nagłe skoki ruchu podczas rejestracji, masowych logowań i autoryzacji transakcji finansowych.",
      "footer": "Wysoka przepustowość"
    }
  ],
  "capabilitiesBadge": "KOMPLEKSOWA PLATFORMA OTP",
  "capabilitiesTitle": "Zintegrowana platforma OTP dopasowana do wymagań Twojego biznesu",
  "capabilitiesDesc": "Obsługuj różnorodne scenariusze weryfikacji tożsamości cyfrowej dzięki usługom SMS zoptymalizowanym pod kątem procesów krytycznych.",
  "designSolution": "Rozpocznij weryfikację użytkowników",
  "solutionNote": "Skonfigurowana z myślą o masowej obsłudze 2FA, bezpiecznym logowaniu i autoryzacji transakcji.",
  "capabilities": [
    {
      "tag": "Logowanie 2FA",
      "title": "Weryfikacja logowania",
      "desc": "Potwierdzaj tożsamość użytkowników poprzez wysyłkę haseł jednorazowych, skutecznie blokując nieautoryzowany dostęp."
    },
    {
      "tag": "Rejestracja",
      "title": "Rejestracja nowych kont",
      "desc": "Potwierdzaj tworzenie nowych kont, natychmiast weryfikując autentyczność podanego numeru telefonu komórkowego."
    },
    {
      "tag": "Reset hasła",
      "title": "Odzyskiwanie konta",
      "desc": "Zapewnij bezpieczne procedury odzyskiwania dostępu do konta dzięki czasowym kodom weryfikacyjnym."
    },
    {
      "tag": "Transakcje",
      "title": "Autoryzacja transakcji",
      "desc": "Dodaj krok weryfikacji SMS do autoryzacji przelewów bankowych, płatności online i kluczowych operacji."
    },
    {
      "tag": "Tożsamość",
      "title": "Potwierdzanie tożsamości",
      "desc": "Weryfikuj prawo własności numeru telefonu w procesach wdrożeniowych (onboarding) oraz procedurach KYC i compliance."
    },
    {
      "tag": "Bezpieczeństwo app",
      "title": "Ochrona aplikacji",
      "desc": "Integruj SMS OTP bezpośrednio w aplikacjach webowych i mobilnych, spełniając rygorystyczne normy bezpieczeństwa."
    },
    {
      "tag": "Automatyzacja",
      "title": "Automatyczne wyzwalanie kodów",
      "desc": "Wysyłaj kody weryfikacyjne w sposób automatyczny w odpowiedzi na zdefiniowane zdarzenia systemowe i reguły."
    },
    {
      "tag": "Wysoki wolumen",
      "title": "Masowa wysyłka kodów OTP",
      "desc": "Przetwarzaj tysiące żądań weryfikacyjnych na sekundę dzięki infrastrukturze przygotowanej na dynamiczny wzrost firmy."
    }
  ],
  "howItWorksBadge": "PRZEPŁYW WERYFIKACJI",
  "howItWorksTitle": "Jak działa proces dostarczania kodów OTP",
  "howItWorksSubtitle": "Od wywołania API po odbiór na telefonie użytkownika w zaledwie kilka sekund.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Żądanie użytkownika",
      "desc": "Użytkownik rozpoczyna w aplikacji działanie wymagające weryfikacji, np. logowanie, rejestrację lub płatność.",
      "note": "Zdarzenie w aplikacji"
    },
    {
      "step": "02",
      "title": "Wysłanie przez API",
      "desc": "Twój system przekazuje kod tymczasowy do naszej bramki OTP poprzez bezpieczne punkty końcowe REST API.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Priorytetowy routing operatorski",
      "desc": "Wiadomość jest bezzwłocznie ekspediowana bezpośrednimi trasami z zachowaniem najwyższego priorytetu kolejki.",
      "note": "Niskie opóźnienie"
    },
    {
      "step": "04",
      "title": "Doręczenie i autoryzacja",
      "desc": "Użytkownik odbiera kod i kończy autoryzację; status doręczenia jest zwracany w czasie rzeczywistym przez webhook.",
      "note": "Raport DLR na żywo"
    }
  ],
  "networkBadge": "GLOBALNY ZASIĘG SMS",
  "networkTitle": "Międzynarodowa sieć gwarantująca ciągłość procesów weryfikacji",
  "networkDesc": "Docieraj do użytkowników na całym świecie dzięki bezpośrednim łączom SMS zoptymalizowanym pod kątem bezpiecznego uwierzytelniania.",
  "networkBullets": [
    "Bezpośrednie połączenia z operatorami komórkowymi na rynkach międzynarodowych",
    "Płynna integracja z istniejącymi platformami 2FA i mechanizmami autoryzacji",
    "Skalowalna przepustowość zapobiegająca opóźnieniom w momentach szczytowych",
    "Pełna przejrzystość procesów dzięki raportom doręczenia (DLR) w czasie rzeczywistym",
    "Wygodna wysyłka za pośrednictwem nowoczesnego REST API oraz protokołów branżowych",
    "Dedykowane wsparcie inżynieryjne dla operacji wymagających natychmiastowego doręczenia"
  ],
  "networkStats": [
    {
      "val": "Globalny zasięg",
      "label": "Bezpośrednie połączenia z wiodącymi sieciami telekomunikacyjnymi"
    },
    {
      "val": "Trasy priorytetowe",
      "label": "Ruch weryfikacyjny obsługiwany z minimalnym opóźnieniem"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Bramka operatorska OTP",
    "sub": "Bezpośredni routing priorytetowy dla krytycznych operacji w czasie rzeczywistym"
  },
  "networkFooterNote": "Rzeczywisty czas doręczenia zależy od regulacji operatorów docelowych oraz warunków sieciowych odbiorcy.",
  "momentsBadge": "ZASTOSOWANIA I BRANŻE",
  "momentsTitle": "Stworzone z myślą o każdym kluczowym momencie weryfikacji",
  "momentsSubtitle": "SMS OTP stanowi fundament bezpiecznej transformacji cyfrowej w sektorach, gdzie ochrona tożsamości jest priorytetem.",
  "moments": [
    {
      "title": "Bankowość i Finanse",
      "desc": "Zabezpieczaj logowanie do bankowości elektronicznej i autoryzuj transakcje za pomocą wysoce bezpiecznych kodów OTP.",
      "footer": "Finansowe 2FA i autoryzacja płatności"
    },
    {
      "title": "E-Commerce i Handel Detaliczny",
      "desc": "Weryfikuj konta kupujących, chroń dane logowania i zabezpieczaj transakcje podczas finalizacji koszyka.",
      "footer": "Bezpieczny checkout i ochrona kont"
    },
    {
      "title": "Turystyka i Hotelarstwo",
      "desc": "Potwierdzaj rezerwacje, dostęp do biletów oraz modyfikacje rezerwacji poprzez błyskawiczną weryfikację SMS.",
      "footer": "Weryfikacja rezerwacji i bezpieczeństwo pasażerów"
    },
    {
      "title": "Platformy Cyfrowe i SaaS",
      "desc": "Wdrażaj kody jednorazowe podczas rejestracji, procedury resetowania haseł i logowania na wielu urządzeniach.",
      "footer": "Płynny onboarding i stała ochrona"
    }
  ],
  "comparison": {
    "comparisonTitle": "Zobacz, jak SMS OTP wzmacnia cyfrowe uwierzytelnianie",
    "comparisonSubtitle": "Wybierz metodę najlepiej odpowiadającą architekturze aplikacji, wygodzie użytkownika i standardom bezpieczeństwa.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Powszechna Dostępność",
    "otpItems": [
      "Dostarcza hasła jednorazowe bezpośrednio na dowolny numer telefonu komórkowego",
      "Działa natychmiast na każdym aparacie telefonicznym bez instalacji aplikacji",
      "Idealny do masowych rejestracji, szybkiego logowania i awaryjnego odzyskiwania kont",
      "Zależny od bieżącego zasięgu sieci komórkowej operatora odbiorcy"
    ],
    "appTitle": "Aplikacje Uwierzytelniające",
    "appBadge": "Uwierzytelniacz Programowy",
    "appItems": [
      "Generuje kody lub powiadomienia push w dedykowanej aplikacji",
      "Może działać bez zasięgu sieci komórkowej przy aktywnym połączeniu Wi-Fi",
      "Wymaga od użytkownika uprzedniego pobrania, instalacji i konfiguracji aplikacji",
      "Oferuje dodatkowe mechanizmy kryptograficzne w zależności od wdrożenia"
    ],
    "securityNotice": "Zalecenie bezpieczeństwa: SMS OTP skutecznie potwierdza fizyczne posiadanie numeru telefonu, lecz może być podatny na ataki typu SIM swap. W przypadku systemów krytycznych zaleca się łączenie OTP z wieloskładnikową oceną ryzyka."
  },
  "intelligenceBadge": "INTELIGENTNE DORĘCZANIE",
  "intelligenceTitle": "Doręczenie w ułamku sekundy i raporty doręczeń w czasie rzeczywistym",
  "intelligenceDesc": "Monitoruj wskaźniki doręczalności, czas odpowiedzi operatorów i statusy DLR, eliminując opóźnienia w procesie logowania.",
  "intelligenceBullets": [
    "Kolejkowanie o najwyższym priorytecie zapewniające natychmiastową ekspedycję haseł",
    "Webhooki DLR na żywo dające pełną przejrzystość każdego wysłanego komunikatu",
    "Automatyczne przełączanie na trasy zapasowe dla maksymalnej skuteczności",
    "Szczegółowa analityka opóźnień w rozbiciu na kraje i operatorów telekomunikacyjnych"
  ],
  "intelligenceFootnote": "Twoje serwery otrzymują powiadomienie przez webhook dokładnie w momencie odebrania kodu przez telefon odbiorcy.",
  "messageLogCard": {
    "title": "Monitorowanie Statusu Wysyłki OTP",
    "badge": "PRIORYTET DLR",
    "tab1": "Doręczone",
    "tab2": "W kolejce",
    "tab3": "Zweryfikowane",
    "colType": "Typ",
    "colState": "Status",
    "colReceipt": "Opóźnienie operatora",
    "row1Type": "OTP logowania",
    "row1State": "Doręczono",
    "row1Receipt": "1.2s DLR telefonu",
    "row2Type": "Reset hasła",
    "row2State": "Doręczono",
    "row2Receipt": "0.9s DLR telefonu",
    "row3Type": "Auth płatności",
    "row3State": "Doręczono",
    "row3Receipt": "1.1s DLR telefonu",
    "footerText": "Doręczenie weryfikacji w sekundy w sieciach operatorów na całym świecie"
  },
  "protectionTitle": "Ochrona zaprojektowana dla newralgicznych operacji",
  "protectionBadge": "BEZPIECZEŃSTWO I ZGODNOŚĆ",
  "protectionCards": [
    {
      "title": "Limity Częstotliwości i Ochrona Przed Nadużyciami",
      "desc": "Zabezpiecz infrastrukturę przed atakami brute force i kosztownym pompowaniem ruchu SMS (SMS pumping) dzięki konfigurowalnym limitom."
    },
    {
      "title": "Globalna Zgodność Identyfikatora Nadawcy (Sender ID)",
      "desc": "Zapewnij oficjalną rejestrację alfanumerycznego ID nadawcy i pełną zgodność z lokalnymi regulacjami w krajach docelowych."
    }
  ],
  "timelineBadge": "STRUKTURYZOWANE WDROŻENIE",
  "timelineTitle": "Od integracji API po start produkcyjny, krok po kroku",
  "timelineSubtitle": "Uruchom usługi SMS OTP w oparciu o uporządkowany proces dopasowany do wymogów architektonicznych i obciążenia Twojego serwisu.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Określenie Wymagań",
      "desc": "Ustal kraje docelowe, prognozowane wolumeny wiadomości oraz ścieżki weryfikacji użytkowników."
    },
    {
      "step": "02",
      "title": "Projektowanie Przepływu",
      "desc": "Skonfiguruj czasy ważności kodów, limity ponowień oraz szablony treści komunikatów."
    },
    {
      "step": "03",
      "title": "Integracja API",
      "desc": "Połącz swoje środowisko z naszą bramką za pośrednictwem nowoczesnego REST API lub protokołu SMPP."
    },
    {
      "step": "04",
      "title": "Testy i Walidacja",
      "desc": "Sprawdź czasy doręczeń, obsługę błędów i doświadczenie użytkownika w środowisku sandbox."
    },
    {
      "step": "05",
      "title": "Start Produkcyjny",
      "desc": "Uruchom wysyłkę na środowisku produkcyjnym pod stałym nadzorem inżynierskim i monitoringiem."
    }
  ],
  "integrationPlan": {
    "title": "Specyfikacja Integracji OTP",
    "planBadge": "GOTOWE DO WDROŻENIA",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Kody 2FA i Weryfikacja Wrażliwa na Czas",
    "formats": "Numeryczne OTP, Alfanumeryczne Tokeny",
    "feedback": "Raporty Doręczenia DLR w Czasie Rzeczywistym",
    "senderSetup": "Zarejestrowany Sender ID / Dedykowany Numer Krótki",
    "check1": "Skonfigurowane timery wygaśnięcia i limity częstotliwości wysyłek",
    "check2": "Trasy zapasowe oraz webhooki raportowania gotowe do produkcji",
    "discussNote": "Skonsultuj się z naszym zespołem inżynierów, aby zaprojektować optymalną architekturę uwierzytelniania.",
    "discussBtn": "Rozpocznij Integrację"
  },
  "faqBadge": "CZĘSTO ZADAWANE PYTANIA",
  "faqTitle": "Wszystko, co musisz wiedzieć o usługach SMS OTP",
  "faqSubtitle": "Dowiedz się, jak nasza infrastruktura o niskim opóźnieniu zabezpiecza Twoje procesy biznesowe.",
  "faqs": [
    {
      "q": "Jak szybko doręczane są wiadomości SMS z kodami OTP?",
      "a": "Nasze priorytetowe łącza dostarczają wiadomości w zaledwie kilka sekund w standardowych warunkach sieci komórkowych."
    },
    {
      "q": "Jakie interfejsy programistyczne są dostępne do integracji?",
      "a": "Udostępniamy nowoczesne REST API z wyczerpującą dokumentacją i przykładami kodu, a także protokół SMPP v3.4 dla dużych wolumenów."
    },
    {
      "q": "Jak zabezpieczyć się przed wyłudzeniami i pompowaniem SMS (SMS Pumping)?",
      "a": "Wbudowane filtry prędkości wysyłek, blokowanie ryzykownych kierunków geograficznych i białe listy IP skutecznie eliminują nadużycia."
    }
  ],
  "ctaBadge": "ULEPSZ UWIERZYTELNIANIE",
  "ctaTitle": "Uczyń każdą weryfikację szybszą, bezpieczniejszą i bardziej niezawodną",
  "ctaSubtitle": "Zadbaj o cyfrowe doświadczenia swoich klientów dzięki usługom SMS OTP stworzonym do bezpiecznego logowania, ochrony kont i potwierdzania transakcji.",
  "contactUs": "Rozpocznij z SMS OTP",
  "ctaFootnote": "Skontaktuj się z naszymi ekspertami, aby poznać szczegóły dotyczące priorytetowych tras i konfiguracji API."
};

const th: OtpSmsServicesTranslation = {
  "heroBadge": "บริการ SMS OTP • โครงสร้างพื้นฐานการยืนยันตัวตน",
  "heroTitle": "ทุกการยืนยันตัวตน เชื่อมต่อด้วยความมั่นใจและรวดเร็วสูงสุด",
  "heroDesc": "ปกป้องบัญชีลูกค้าและเพิ่มความสะดวกในการยืนยันตัวตนด้วยบริการ SMS OTP ที่มีความน่าเชื่อถือสูง ส่งรหัสผ่านแบบใช้ครั้งเดียวสำหรับการเข้าสู่ระบบ การลงทะเบียน การรีเซ็ตรหัสผ่าน และการอนุมัติธุรกรรมผ่านโครงสร้างพื้นฐานโทรคมนาคมความหน่วงต่ำระดับโลก",
  "talkToExpert": "ปรึกษาผู้เชี่ยวชาญ OTP",
  "exploreCapabilities": "สำรวจฟังก์ชันการทำงาน",
  "stats": {
    "routing": "OTP ที่เชื่อถือได้",
    "routingLabel": "ส่งถึงทันทีในเสี้ยววินาที",
    "traffic": "API ที่ใช้งานง่าย",
    "trafficLabel": "ผสานรวมระบบได้ยืดหยุ่น",
    "insights": "ครอบคลุมทั่วโลก",
    "insightsLabel": "เชื่อมต่อตรงกับผู้ให้บริการเครือข่าย"
  },
  "heroLiveBadge1": {
    "title": "ส่งถึงทันที",
    "label": "เส้นทางการยืนยันตัวตนความหน่วงต่ำพิเศษ"
  },
  "heroLiveBadge2": {
    "title": "2FA ระดับผู้ให้บริการ",
    "sub": "การกำหนดเส้นทางตรงลำดับความสำคัญสูงสุด"
  },
  "whyBadge": "โครงสร้างพื้นฐานความปลอดภัย",
  "whyTitle": "โครงสร้างพื้นฐานการส่งข้อความที่ปกป้องทุกการยืนยันตัวตน",
  "whySubtitle1": "สนับสนุนการยืนยันตัวตนที่ปลอดภัยของลูกค้าด้วยบริการ SMS OTP ที่ออกแบบมาเพื่อการจัดส่งที่ตรงเวลา การเชื่อมต่อที่ราบรื่น และความสามารถในการขยายขนาดได้อย่างไร้ขีดจำกัด",
  "whySubtitle2": "พัฒนาขึ้นเพื่อลดความล่าช้าในการส่งสัญญาณและมอบอัตราความสำเร็จในการส่งถึงปลายทางสูงสุดบนเครือข่ายมือถือทั่วโลก",
  "whyCards": [
    {
      "title": "การจัดส่ง OTP ที่เชื่อถือได้",
      "desc": "ส่งรหัสผ่านแบบใช้ครั้งเดียวผ่านเส้นทาง SMS ตรง เพื่อให้มั่นใจในอัตราการส่งถึงที่สม่ำเสมอในทุกเครือข่ายปลายทาง",
      "footer": "รับประกันอัตราการส่งถึงสูงสุด"
    },
    {
      "title": "ข้อความยืนยันตัวตนที่รวดเร็ว",
      "desc": "ช่วยให้ผู้ใช้ทำขั้นตอนการเข้าสู่ระบบและทำธุรกรรมให้เสร็จสิ้นได้ในไม่กี่วินาทีด้วยระยะเวลาการส่งที่รวดเร็วเป็นพิเศษ",
      "footer": "การกำหนดเส้นทางความหน่วงต่ำ"
    },
    {
      "title": "การผสานรวม API ที่ยืดหยุ่น",
      "desc": "เชื่อมต่อระบบ SMS OTP เข้ากับเว็บไซต์ แอปพลิเคชันมือถือ และระบบหลังบ้านผ่าน REST API และโพรโทคอล SMPP มาตรฐาน",
      "footer": "REST API และ SMPP"
    },
    {
      "title": "ระบบการยืนยันตัวตนที่ปรับขยายได้",
      "desc": "รองรับปริมาณการลงทะเบียน การเข้าสู่ระบบ และการยืนยันธุรกรรมจำนวนมหาศาลได้อย่างมั่นคงในช่วงเวลาที่มีการใช้งานสูงสุด",
      "footer": "รองรับปริมาณธุรกรรมมหาศาล"
    }
  ],
  "capabilitiesBadge": "แพลตฟอร์ม OTP ครบวงจร",
  "capabilitiesTitle": "แพลตฟอร์ม OTP แบบครบวงจรที่สร้างขึ้นเพื่อตอบสนองธุรกิจของคุณ",
  "capabilitiesDesc": "รองรับสถานการณ์การยืนยันตัวตนดิจิทัลที่หลากหลายด้วยบริการ SMS ที่ปรับให้เหมาะสมกับกระบวนการทำงานที่สำคัญขององค์กร",
  "designSolution": "เริ่มต้นการยืนยันตัวตนผู้ใช้",
  "solutionNote": "กำหนดค่ามาเป็นพิเศษสำหรับ 2FA ปริมาณสูง การเข้าสู่ระบบที่ปลอดภัย และการยืนยันธุรกรรมทางการเงิน",
  "capabilities": [
    {
      "tag": "เข้าสู่ระบบ 2FA",
      "title": "การยืนยันตัวตนเมื่อเข้าสู่ระบบ",
      "desc": "ตรวจสอบสิทธิ์การเข้าถึงของผู้ใช้โดยการส่งรหัสผ่านแบบใช้ครั้งเดียวระหว่างการเข้าสู่ระบบเพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต"
    },
    {
      "tag": "การลงทะเบียน",
      "title": "การลงทะเบียนบัญชีใหม่",
      "desc": "ยืนยันการลงทะเบียนของผู้ใช้ใหม่โดยการตรวจสอบการเป็นเจ้าของหมายเลขโทรศัพท์มือถือที่ระบุในทันที"
    },
    {
      "tag": "รีเซ็ตรหัสผ่าน",
      "title": "การกู้คืนบัญชีอย่างปลอดภัย",
      "desc": "ช่วยให้การกู้คืนบัญชีทำได้อย่างปลอดภัยด้วยรหัสผ่านแบบใช้ครั้งเดียวสำหรับคำขอรีเซ็ตรหัสผ่านที่ถูกต้อง"
    },
    {
      "tag": "ธุรกรรม",
      "title": "การยืนยันธุรกรรมทางการเงิน",
      "desc": "เพิ่มขั้นตอนการยืนยันตัวตนผ่าน SMS เพื่ออนุมัติการโอนเงินและการชำระเงินออนไลน์ที่สำคัญ"
    },
    {
      "tag": "การระบุตัวตน",
      "title": "การตรวจสอบความเป็นเจ้าของเบอร์",
      "desc": "ตรวจสอบสิทธิ์การเป็นเจ้าของหมายเลขโทรศัพท์ในกระบวนการเริ่มต้นใช้งาน (Onboarding) และการปฏิบัติตามกฎระเบียบ (KYC)"
    },
    {
      "tag": "ความปลอดภัยของแอป",
      "title": "ความปลอดภัยของแอปพลิเคชัน",
      "desc": "ผสานรวม SMS OTP เข้ากับเว็บและแอปมือถือเพื่อตอบสนองมาตรฐานและข้อกำหนดด้านความปลอดภัยของข้อมูล"
    },
    {
      "tag": "ระบบอัตโนมัติ",
      "title": "การส่ง OTP อัตโนมัติ",
      "desc": "ส่งรหัสยืนยันตัวตนโดยอัตโนมัติตามเหตุการณ์ในระบบและกฎเกณฑ์ด้านความปลอดภัยที่กำหนดไว้ล่วงหน้า"
    },
    {
      "tag": "ปริมาณสูง",
      "title": "การส่งข้อความ OTP ปริมาณมาก",
      "desc": "ประมวลผลคำขอยืนยันตัวตนหลายพันรายการต่อวินาทีด้วยโครงสร้างพื้นฐานที่พร้อมรองรับการเติบโตของธุรกิจ"
    }
  ],
  "howItWorksBadge": "ขั้นตอนการยืนยันตัวตน",
  "howItWorksTitle": "วงจรการจัดส่งรหัส OTP ทำงานอย่างไร",
  "howItWorksSubtitle": "ตั้งแต่การเรียกใช้คำสั่งผ่าน API จนถึงการรับข้อความบนโทรศัพท์มือถือในเวลาเพียงไม่กี่วินาที",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "คำขอจากผู้ใช้",
      "desc": "ผู้ใช้เริ่มต้นการดำเนินการที่ต้องการยืนยันตัวตน เช่น การเข้าสู่ระบบ การลงทะเบียน หรือการชำระเงิน",
      "note": "เหตุการณ์ในแอปพลิเคชัน"
    },
    {
      "step": "02",
      "title": "ส่งคำขอผ่าน API",
      "desc": "ระบบของคุณส่งรหัสชั่วคราวไปยังเกตเวย์ OTP ของเราผ่าน REST API Endpoint ที่มีความปลอดภัยสูง",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "กำหนดเส้นทางตรงความสำคัญสูง",
      "desc": "ข้อความจะถูกส่งออกทันทีผ่านเส้นทางตรงของผู้ให้บริการเครือข่ายด้วยคิวที่มีลำดับความสำคัญสูงสุด",
      "note": "ความหน่วงต่ำเป็นพิเศษ"
    },
    {
      "step": "04",
      "title": "รับข้อความและยืนยันเสร็จสิ้น",
      "desc": "ผู้ใช้ได้รับรหัสและเสร็จสิ้นขั้นตอนการยืนยัน สถานะการจัดส่งจะถูกส่งกลับแบบเรียลไทม์ผ่าน Webhook",
      "note": "รายงาน DLR เรียลไทม์"
    }
  ],
  "networkBadge": "ความครอบคลุม SMS ทั่วโลก",
  "networkTitle": "เครือข่ายระดับโลกที่ออกแบบมาเพื่อให้กระบวนการยืนยันตัวตนดำเนินไปอย่างต่อเนื่อง",
  "networkDesc": "เข้าถึงผู้ใช้ในตลาดต่างประเทศผ่านการเชื่อมต่อ SMS โดยตรงที่ปรับแต่งมาเพื่อขั้นตอนการยืนยันตัวตนที่ปลอดภัย",
  "networkBullets": [
    "การเชื่อมต่อ SMS ตรงไปยังผู้ให้บริการเครือข่ายมือถือชั้นนำทั่วโลก",
    "ผสานรวมเข้ากับระบบ 2FA และระบบการยืนยันตัวตนเดิมได้อย่างราบรื่น",
    "ความสามารถในการขยายขนาดเพื่อรองรับปริมาณข้อความที่เพิ่มขึ้นอย่างก้าวกระโดด",
    "มองเห็นสถานะการจัดส่งได้อย่างโปร่งใสด้วยรายงานการส่งมอบ (DLR) แบบเรียลไทม์",
    "ส่งข้อความได้อย่างยืดหยุ่นผ่าน REST API ที่ทันสมัยและโพรโทคอลระดับองค์กร",
    "ทีมสนับสนุนเฉพาะทางสำหรับกระบวนการยืนยันตัวตนที่คำนึงถึงเวลาเป็นสำคัญ"
  ],
  "networkStats": [
    {
      "val": "ครอบคลุมทั่วโลก",
      "label": "เชื่อมต่อตรงกับผู้ให้บริการเครือข่ายโทรศัพท์เคลื่อนที่สากล"
    },
    {
      "val": "เส้นทางลำดับความสำคัญสูง",
      "label": "ทราฟฟิกการยืนยันตัวตนด้วยความหน่วงต่ำที่สุด"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP Carrier Gateway",
    "sub": "การกำหนดเส้นทางตรงลำดับความสำคัญสูงสำหรับการยืนยันตัวตนที่ต้องการความเร็วทันที"
  },
  "networkFooterNote": "ความเร็วในการส่งจริงขึ้นอยู่กับนโยบายของผู้ให้บริการเครือข่ายในแต่ละประเทศและสภาพสัญญาณของอุปกรณ์ปลายทาง",
  "momentsBadge": "กรณีการใช้งานและอุตสาหกรรม",
  "momentsTitle": "สร้างขึ้นสำหรับทุกช่วงเวลาสำคัญของการยืนยันตัวตน",
  "momentsSubtitle": "SMS OTP ช่วยสนับสนุนการยืนยันตัวตนดิจิทัลในทุกภาคอุตสาหกรรมที่ความน่าเชื่อถือและความปลอดภัยของบัญชีมีความสำคัญสูงสุด",
  "moments": [
    {
      "title": "การธนาคารและบริการทางการเงิน",
      "desc": "ปกป้องการเข้าสู่ระบบบัญชีและอนุมัติการทำธุรกรรมโอนเงินด้วยระบบ OTP ที่มีความปลอดภัยระดับสูง",
      "footer": "2FA ทางการเงินและการอนุมัติการชำระเงิน"
    },
    {
      "title": "อีคอมเมิร์ซและการค้าปลีก",
      "desc": "ตรวจสอบบัญชีลูกค้า ป้องกันการฉ้อโกง และเพิ่มความปลอดภัยในขั้นตอนการชำระเงินออนไลน์",
      "footer": "การชำระเงินที่ปลอดภัยและการปกป้องบัญชี"
    },
    {
      "title": "การท่องเที่ยวและการบริการ",
      "desc": "ยืนยันการจองตั๋ว การเข้าถึงข้อมูลการเดินทาง และการเปลี่ยนแปลงเที่ยวบินด้วยการตรวจสอบผ่าน SMS ทันที",
      "footer": "การยืนยันการจองและความปลอดภัยของผู้โดยสาร"
    },
    {
      "title": "แพลตฟอร์มดิจิทัลและ SaaS",
      "desc": "ติดตั้งรหัสยืนยันตัวตนในการลงทะเบียน การกู้คืนรหัสผ่าน และการเข้าสู่ระบบจากหลายอุปกรณ์",
      "footer": "เริ่มต้นใช้งานอย่างราบรื่นและการปกป้องถาวร"
    }
  ],
  "comparison": {
    "comparisonTitle": "เปรียบเทียบ: วิธีที่ SMS OTP ช่วยยกระดับการยืนยันตัวตนดิจิทัล",
    "comparisonSubtitle": "เลือกวิธีที่เหมาะสมที่สุดตามข้อกำหนดด้านความปลอดภัย ประสบการณ์ของผู้ใช้ และกลุ่มเป้าหมายของคุณ",
    "otpTitle": "SMS OTP",
    "otpBadge": "เข้าถึงได้ในทุกอุปกรณ์อย่างสากล",
    "otpItems": [
      "ส่งรหัสผ่านแบบใช้ครั้งเดียวไปยังหมายเลขโทรศัพท์มือถือทุกเบอร์ได้โดยตรง",
      "ใช้งานได้ทันทีบนโทรศัพท์มือถือทุกรุ่นโดยไม่ต้องติดตั้งแอปพลิเคชันเพิ่มเติม",
      "เหมาะอย่างยิ่งสำหรับการลงทะเบียนจำนวนมาก การเข้าสู่ระบบที่รวดเร็ว และการกู้คืนบัญชี",
      "ขึ้นอยู่กับพื้นที่ให้บริการและสภาพเครือข่ายโทรศัพท์เคลื่อนที่ของผู้รับ"
    ],
    "appTitle": "การยืนยันตัวตนผ่านแอป",
    "appBadge": "แอปสร้างรหัสยืนยันตัวตน",
    "appItems": [
      "สร้างรหัสหรือการแจ้งเตือนเพื่ออนุมัติภายในแอปพลิเคชันเฉพาะ",
      "สามารถทำงานได้โดยไม่ต้องมีสัญญาณโทรศัพท์หากมีสัญญาณ Wi-Fi",
      "กำหนดให้ผู้ใช้ต้องดาวน์โหลด ติดตั้ง และกำหนดค่าแอปพลิเคชันล่วงหน้า",
      "มีคุณสมบัติด้านการเข้ารหัสความปลอดภัยเพิ่มเติมตามรูปแบบการติดตั้ง"
    ],
    "securityNotice": "คำแนะนำด้านความปลอดภัย: SMS OTP ยืนยันการครอบครองหมายเลขโทรศัพท์ได้อย่างมีประสิทธิภาพ แต่อาจมีความเสี่ยงจากการสลับซิม (SIM Swap) สำหรับระบบที่มีความสำคัญสูงมาก ควรใช้ร่วมกับมาตรการประเมินความเสี่ยงหลายปัจจัย"
  },
  "intelligenceBadge": "ระบบการส่งอัจฉริยะ",
  "intelligenceTitle": "ส่งถึงในเสี้ยววินาทีและรายงานสถานะแบบเรียลไทม์",
  "intelligenceDesc": "ตรวจสอบตัวชี้วัดประสิทธิภาพการส่ง เวลาตอบสนองของผู้ให้บริการ และรายงาน DLR เพื่อป้องกันไม่ให้ผู้ใช้พบกับความล่าช้า",
  "intelligenceBullets": [
    "คิวที่มีลำดับความสำคัญสูงสุดช่วยให้ส่งรหัสยืนยันตัวตนได้ในทันที",
    "Webhook DLR แบบเรียลไทม์ช่วยให้เห็นสถานะการส่งข้อความได้อย่างโปร่งใส",
    "ระบบสลับเส้นทางสำรองอัตโนมัติ (Failover) เพื่ออัตราความสำเร็จสูงสุด",
    "การวิเคราะห์ความหน่วงโดยละเอียดแยกตามประเทศและผู้ให้บริการเครือข่าย"
  ],
  "intelligenceFootnote": "เซิร์ฟเวอร์ของคุณจะได้รับการแจ้งเตือนผ่าน Webhook ในวินาทีเดียวกับที่โทรศัพท์ของผู้รับได้รับรหัส",
  "messageLogCard": {
    "title": "บันทึกการตรวจสอบการส่ง OTP แบบสด",
    "badge": "DLR ลำดับความสำคัญสูง",
    "tab1": "ส่งสำเร็จ",
    "tab2": "อยู่ในคิว",
    "tab3": "ยืนยันแล้ว",
    "colType": "ประเภท",
    "colState": "สถานะ",
    "colReceipt": "ความหน่วงของผู้ให้บริการ",
    "row1Type": "OTP เข้าสู่ระบบ",
    "row1State": "ส่งสำเร็จ",
    "row1Receipt": "1.2 วินาที DLR อุปกรณ์",
    "row2Type": "รีเซ็ตรหัสผ่าน",
    "row2State": "ส่งสำเร็จ",
    "row2Receipt": "0.9 วินาที DLR อุปกรณ์",
    "row3Type": "อนุมัติธุรกรรม",
    "row3State": "ส่งสำเร็จ",
    "row3Receipt": "1.1 วินาที DLR อุปกรณ์",
    "footerText": "ส่งมอบการยืนยันตัวตนในไม่กี่วินาทีบนเครือข่ายมือถือทั่วโลก"
  },
  "protectionTitle": "ความปลอดภัยที่สร้างขึ้นสำหรับการยืนยันตัวตนที่สำคัญ",
  "protectionBadge": "ความปลอดภัยและการปฏิบัติตามข้อกำหนด",
  "protectionCards": [
    {
      "title": "การจำกัดความถี่และการป้องกันการทุจริต",
      "desc": "ปกป้องระบบจากการโจมตีแบบ Brute Force และการปั๊ม SMS ที่สร้างค่าใช้จ่ายเกินจริง (SMS pumping) ด้วยขีดจำกัดความเร็วที่กำหนดได้"
    },
    {
      "title": "การปฏิบัติตามข้อกำหนด Sender ID ทั่วโลก",
      "desc": "รับประกันการลงทะเบียนชื่อผู้ส่งอย่างเป็นทางการและการปฏิบัติตามกฎระเบียบของหน่วยงานโทรคมนาคมในประเทศปลายทางอย่างครบถ้วน"
    }
  ],
  "timelineBadge": "แผนการดำเนินงานที่เป็นระบบ",
  "timelineTitle": "ตั้งแต่การเชื่อมต่อ API จนถึงการเปิดใช้งานจริงอย่างเป็นขั้นเป็นตอน",
  "timelineSubtitle": "เริ่มใช้งาน SMS OTP ด้วยกระบวนการที่เป็นระเบียบ สอดคล้องกับมาตรฐานความปลอดภัยและปริมาณการใช้งานขององค์กรคุณ",
  "timelineSteps": [
    {
      "step": "01",
      "title": "ระบุความต้องการ",
      "desc": "กำหนดประเทศปลายทาง ปริมาณข้อความที่คาดการณ์ และขั้นตอนการยืนยันตัวตนที่จำเป็น"
    },
    {
      "step": "02",
      "title": "ออกแบบขั้นตอนการทำงาน",
      "desc": "ตั้งค่าระยะเวลาหมดอายุของรหัส ขีดจำกัดในการส่งซ้ำ และเทมเพลตข้อความยืนยันตัวตน"
    },
    {
      "step": "03",
      "title": "เชื่อมต่อระบบ API",
      "desc": "เชื่อมต่อระบบของคุณเข้ากับเกตเวย์ของเราผ่าน REST API ที่ปลอดภัยหรือโพรโทคอล SMPP"
    },
    {
      "step": "04",
      "title": "ทดสอบและตรวจสอบความถูกต้อง",
      "desc": "ตรวจสอบความเร็วในการส่ง การจัดการข้อผิดพลาด และประสบการณ์ของผู้ใช้ในสภาพแวดล้อม Sandbox"
    },
    {
      "step": "05",
      "title": "เปิดใช้งานระบบจริง",
      "desc": "เริ่มส่งข้อความในสภาพแวดล้อมจริงพร้อมการดูแลอย่างใกล้ชิดและการสนับสนุนทางเทคนิคอย่างต่อเนื่อง"
    }
  ],
  "integrationPlan": {
    "title": "ข้อกำหนดทางเทคนิคการเชื่อมต่อ OTP",
    "planBadge": "พร้อมสำหรับการใช้งานจริง",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "รหัส 2FA และการยืนยันตัวตนที่สำคัญ",
    "formats": "รหัส OTP ตัวเลข, โทเค็นตัวอักษรและตัวเลข",
    "feedback": "รายงานสถานะการส่งมอบ DLR แบบเรียลไทม์",
    "senderSetup": "Sender ID ที่ลงทะเบียนอย่างถูกต้อง / เบอร์สั้นพิเศษ",
    "check1": "กำหนดค่าเวลาหมดอายุของรหัสและการจำกัดอัตราการส่งเรียบร้อยแล้ว",
    "check2": "เส้นทางสำรองและ Webhook รายงานสถานะพร้อมใช้งานในการทำงานจริง",
    "discussNote": "ปรึกษากับวิศวกรผู้เชี่ยวชาญของเราเพื่อออกแบบสถาปัตยกรรมการยืนยันตัวตนที่เหมาะสมที่สุดสำหรับบริการของคุณ",
    "discussBtn": "เริ่มต้นการเชื่อมต่อระบบ"
  },
  "faqBadge": "คำถามที่พบบ่อย",
  "faqTitle": "คำถามยอดนิยมเกี่ยวกับบริการ SMS OTP",
  "faqSubtitle": "เรียนรู้วิธีที่โครงสร้างพื้นฐานความหน่วงต่ำของเราช่วยปกป้องขั้นตอนการยืนยันตัวตนของคุณอย่างปลอดภัย",
  "faqs": [
    {
      "q": "ข้อความ SMS OTP ถูกส่งถึงผู้รับรวดเร็วเพียงใด?",
      "a": "เส้นทางลำดับความสำคัญสูงของเราส่งรหัสถึงมือผู้รับภายในเวลาไม่กี่วินาทีภายใต้สภาพเครือข่ายมือถือปกติ"
    },
    {
      "q": "มี API รูปแบบใดบ้างสำหรับการเชื่อมต่อระบบ?",
      "a": "เรามี REST API ที่ใช้งานง่ายพร้อมเอกสารประกอบและตัวอย่างโค้ดอย่างครบถ้วน รวมถึงโพรโทคอล SMPP v3.4 สำหรับปริมาณการใช้งานระดับองค์กร"
    },
    {
      "q": "ระบบสามารถป้องกันการฉ้อโกงและการปั๊ม SMS (SMS Pumping) ได้อย่างไร?",
      "a": "ระบบของเรามีฟิลเตอร์จำกัดความถี่ในการส่ง การบล็อกหมายเลขปลายทางที่มีความเสี่ยง และ IP Whitelist เพื่อกำจัดทราฟฟิกที่ไม่พึงประสงค์"
    }
  ],
  "ctaBadge": "ยกระดับการยืนยันตัวตน",
  "ctaTitle": "ทำให้ทุกการยืนยันตัวตนรวดเร็ว ปลอดภัย และน่าเชื่อถือยิ่งขึ้น",
  "ctaSubtitle": "เพิ่มประสิทธิภาพประสบการณ์ดิจิทัลของลูกค้าด้วยบริการ SMS OTP ที่สร้างขึ้นสำหรับการยืนยันตัวตน การปกป้องบัญชี และการอนุมัติธุรกรรมทั่วโลก",
  "contactUs": "เริ่มต้นใช้งาน SMS OTP",
  "ctaFootnote": "ติดต่อทีมผู้เชี่ยวชาญของเราเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับเส้นทางลำดับความสำคัญสูงและการเชื่อมต่อ API"
};

const tl: OtpSmsServicesTranslation = {
  "heroBadge": "MGA SERBISYO NG SMS OTP • IMPRASTRAKTURA NG PAGPAPATOTOO",
  "heroTitle": "Bawat beripikasyon, konektado nang may buong tiwala at bilis",
  "heroDesc": "Protektahan ang mga account ng customer at pasimplehin ang pagpapatotoo ng user gamit ang mga serbisyong SMS OTP na may mataas na pagiging maaasahan. Magpadala ng mga one-time password para sa mga login, pagpaparehistro, pag-reset ng password, at pagpapatunay ng transaksyon sa pamamagitan ng imprastraktura ng pagmemensahe na may napakababang latency.",
  "talkToExpert": "Kausapin ang Eksperto sa OTP",
  "exploreCapabilities": "Tuklasin ang mga Kakayahan",
  "stats": {
    "routing": "Maaasahang OTP",
    "routingLabel": "Maagap na Paghahatid",
    "traffic": "Simpleng API",
    "trafficLabel": "Madaling Integrasyon",
    "insights": "Pandaigdigang Saklaw",
    "insightsLabel": "Direktang Koneksyon sa Operator"
  },
  "heroLiveBadge1": {
    "title": "Mabilisang Paghahatid",
    "label": "Mga ruta ng beripikasyon na may mababang latency"
  },
  "heroLiveBadge2": {
    "title": "2FA sa Antas ng Carrier",
    "sub": "Direktang priyoridad na pagruruta"
  },
  "whyBadge": "IMPRASTRAKTURA NG SEGURIDAD",
  "whyTitle": "Imprastraktura ng pagmemensahe na nagpoprotekta sa bawat beripikasyon",
  "whySubtitle1": "Suportahan ang ligtas na pagpapatotoo ng customer gamit ang mga mensaheng OTP na idinisenyo para sa maagap na paghahatid, maayos na integrasyon, at malakihang kakayahan sa pagpapalawak.",
  "whySubtitle2": "Binuo para sa kaunting pagkaantala sa pagpapadala at pinakamataas na tagumpay sa paghahatid sa mga internasyonal na mobile network.",
  "whyCards": [
    {
      "title": "Maaasahang Paghahatid ng OTP",
      "desc": "Magpadala ng mga one-time password sa pamamagitan ng mga direktang ruta ng SMS na tinitiyak ang pare-parehong tagumpay sa paghahatid sa lahat ng sinusuportahang destinasyon.",
      "footer": "Mataas na katiyakan sa paghahatid"
    },
    {
      "title": "Mabilis na Mensahe ng Beripikasyon",
      "desc": "Tulungan ang mga user na tapusin ang kanilang mga proseso ng pag-log in at pagpapatunay sa loob ng ilang segundo gamit ang mabilis na pagpapadala.",
      "footer": "Mababang latency na pagruruta"
    },
    {
      "title": "May Kakayahang umangkop na Integrasyon ng API",
      "desc": "Ikonekta ang mga kakayahan ng SMS OTP sa mga website, mobile app, at backend system gamit ang karaniwang REST API at SMPP protocol.",
      "footer": "REST API at SMPP"
    },
    {
      "title": "Napapalawak na Pagpapatotoo",
      "desc": "Pamahalaan ang dagsa ng mga pagpaparehistro, sabay-sabay na pag-log in, at pagpapatunay ng transaksyon nang walang pagkaantala.",
      "footer": "Mataas na dami ng throughput"
    }
  ],
  "capabilitiesBadge": "KUMPLETONG PLATAPORMA NG OTP",
  "capabilitiesTitle": "Isang pinagsamang plataporma ng OTP na binuo para sa iyong negosyo",
  "capabilitiesDesc": "Suportahan ang iba't ibang sitwasyon ng digital na pagpapatunay gamit ang mga serbisyo ng SMS na inangkop para sa mga kritikal na proseso ng negosyo.",
  "designSolution": "Simulan ang Pagpapatotoo ng mga User",
  "solutionNote": "Naka-configure para sa mataas na dami ng 2FA, ligtas na pag-log in, at pagpapatunay ng transaksyon.",
  "capabilities": [
    {
      "tag": "Login 2FA",
      "title": "Beripikasyon sa Pag-log in",
      "desc": "I-validate ang pag-access ng user sa pamamagitan ng pagpapadala ng mga one-time password sa pag-log in upang maiwasan ang panghihimasok."
    },
    {
      "tag": "Pagpaparehistro",
      "title": "Pagpaparehistro ng Bagong Account",
      "desc": "Kumpirmahin ang mga bagong pagpaparehistro sa pamamagitan ng agarang pagpapatunay sa pagmamay-ari ng ibinigay na numero ng mobile."
    },
    {
      "tag": "I-reset ang Password",
      "title": "Pagbawi ng Account",
      "desc": "Paganahin ang ligtas na pagbawi ng account gamit ang mga one-time code para sa mga lehitimong kahilingan sa pag-reset ng password."
    },
    {
      "tag": "Mga Transaksyon",
      "title": "Pagpapatunay ng Transaksyon",
      "desc": "Magdagdag ng hakbang sa pagpapatunay ng SMS para sa pag-apruba ng mga paglilipat ng bangko at sensitibong online na pagbabayad."
    },
    {
      "tag": "Pagkakakilanlan",
      "title": "Pagpapatunay ng Pagkakakilanlan",
      "desc": "I-validate ang pagmamay-ari ng numero ng mobile phone sa panahon ng onboarding at mga proseso ng pagsunod sa regulasyon (KYC)."
    },
    {
      "tag": "Seguridad ng App",
      "title": "Seguridad ng Aplikasyon",
      "desc": "Isama ang mga mensaheng OTP nang direkta sa mga web at mobile app upang matugunan ang mahigpit na mga pamantayan sa seguridad."
    },
    {
      "tag": "Awtomatisado",
      "title": "Awtomatikong Pag-trigger ng OTP",
      "desc": "Awtomatikong magpadala ng mga verification code batay sa mga kaganapan sa system at paunang itinakdang mga patakaran sa seguridad."
    },
    {
      "tag": "Mataas na Dami",
      "title": "Malakihang Pagmemensahe ng OTP",
      "desc": "Iproseso ang libu-libong kahilingan sa pagpapatunay bawat segundo gamit ang imprastraktura na handa para sa paglago ng iyong negosyo."
    }
  ],
  "howItWorksBadge": "DALOY NG PROSESO",
  "howItWorksTitle": "Paano gumagana ang paghahatid ng OTP code",
  "howItWorksSubtitle": "Mula sa kahilingan sa API hanggang sa pagtanggap sa mobile phone sa loob lamang ng ilang segundo.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Kahilingan ng User",
      "desc": "Pinasimulan ng user ang isang aksyon na nangangailangan ng beripikasyon tulad ng pag-log in, pagpaparehistro, o pagbabayad.",
      "note": "Kaganapan sa aplikasyon"
    },
    {
      "step": "02",
      "title": "Pagsusumite sa API",
      "desc": "Ipinapasa ng iyong system ang pansamantalang code sa aming OTP gateway sa pamamagitan ng mga secure na REST API endpoint.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Priyoridad na Pagruruta",
      "desc": "Agad na ipinapadala ang mensahe sa pamamagitan ng direktang ruta ng operator na may pinakamataas na priyoridad sa pila.",
      "note": "Mababang latency"
    },
    {
      "step": "04",
      "title": "Pagtanggap at Pagsusuri",
      "desc": "Natatanggap ng user ang code at kinukumpleto ang pagpapatunay; ang katayuan sa paghahatid ay agad na ibinabalik sa pamamagitan ng webhook.",
      "note": "Real-time na DLR"
    }
  ],
  "networkBadge": "PANDAIGDIGANG SAKLAW NG SMS",
  "networkTitle": "Isang pandaigdigang network na binuo upang panatilihing tuluy-tuloy ang mga beripikasyon",
  "networkDesc": "Abutin ang mga user sa buong mundo sa pamamagitan ng direktang koneksyon sa SMS na na-optimize para sa ligtas na pagpapatotoo.",
  "networkBullets": [
    "Direktang koneksyon sa SMS sa mga nangungunang mobile operator sa buong mundo",
    "Madaling pagsasama sa umiiral nang mga sistema ng pagpapatotoo at 2FA",
    "Maaaring palawaking kapasidad ng pagmemensahe para sa dumaraming bilang ng mga kahilingan",
    "Buong transparency sa mga katayuan ng paghahatid gamit ang real-time na mga ulat sa paghahatid (DLR)",
    "Maginhawang pagpapadala sa pamamagitan ng modernong REST API at mga pamantayang protocol sa industriya",
    "Nakatuong suporta sa teknolohiya para sa mga proseso ng beripikasyon na sensitibo sa oras"
  ],
  "networkStats": [
    {
      "val": "Pandaigdigang Saklaw",
      "label": "Direktang koneksyon sa mga mobile operator sa buong mundo"
    },
    {
      "val": "Mga Priyoridad na Ruta",
      "label": "Trapiko ng pagpapatunay na may kaunting pagkaantala"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP Carrier Gateway",
    "sub": "Direktang priyoridad na pagruruta para sa mabilisang pagpapatotoo"
  },
  "networkFooterNote": "Ang aktwal na bilis ng paghahatid ay nakasalalay sa mga patakaran ng lokal na operator at kondisyon ng signal ng tatanggap.",
  "momentsBadge": "MGA HALIMBAWA AT INDUSTRIYA",
  "momentsTitle": "Binuo para sa bawat kritikal na sandali ng beripikasyon",
  "momentsSubtitle": "Sinusuportahan ng SMS OTP ang digital na pagpapatotoo sa mga industriya kung saan mahalaga ang tiwala at proteksyon ng account.",
  "moments": [
    {
      "title": "Pagbabangko at Serbisyong Pinansyal",
      "desc": "Protektahan ang pag-access sa account at pahintulutan ang mga paglilipat gamit ang mga secure na proseso ng OTP.",
      "footer": "Finansyal na 2FA at awtorisasyon sa pagbabayad"
    },
    {
      "title": "E-Commerce at Retail",
      "desc": "I-verify ang mga account ng customer, protektahan ang mga pag-log in, at i-secure ang mga pagbabayad sa pag-checkout.",
      "footer": "Protektadong pag-checkout at seguridad ng account"
    },
    {
      "title": "Paglalakbay at Pagtanggap ng Bisita",
      "desc": "Kumpirmahin ang mga booking ng tiket, pag-access sa account, at mga pagbabago sa pamamagitan ng agarang beripikasyon sa SMS.",
      "footer": "Pagpapatunay ng booking at kaligtasan ng pasahero"
    },
    {
      "title": "Mga Digital na Plataporma at SaaS",
      "desc": "Isama ang mga verification code sa pagpaparehistro, pagbawi ng password, at pag-log in sa maraming device.",
      "footer": "Maayos na onboarding at patuloy na proteksyon"
    }
  ],
  "comparison": {
    "comparisonTitle": "Tingnan kung paano pinalalakas ng SMS OTP ang digital na pagpapatotoo",
    "comparisonSubtitle": "Piliin ang pamamaraang pinakaangkop sa mga kinakailangan sa seguridad, karanasan ng user, at target na madla.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Pandaigdigang Pagiging Naa-access",
    "otpItems": [
      "Naghahatid ng mga one-time code nang direkta sa anumang numero ng mobile",
      "Gumagana kaagad sa anumang mobile phone nang hindi kailangang mag-install ng karagdagang app",
      "Tamang-tama para sa maramihang pagpaparehistro, mabilis na pag-log in, at pagbawi ng account",
      "Depende sa saklaw at mga kondisyon ng network ng tatanggap na mobile operator"
    ],
    "appTitle": "Pagpapatotoo Batay sa App",
    "appBadge": "Software Authenticator",
    "appItems": [
      "Bumubuo ng mga code o kahilingan sa push sa loob ng isang nakalaang app",
      "Maaaring gumana nang walang cellular network kung may aktibong koneksyon sa Wi-Fi",
      "Nangangailangan sa user na i-download at i-configure ang application muna",
      "Nag-aalok ng mga karagdagang tampok sa seguridad ng cryptographic depende sa pagpapatupad"
    ],
    "securityNotice": "Rekomendasyon sa seguridad: Ang SMS OTP ay epektibong nagpapatunay sa pagmamay-ari ng isang mobile number, ngunit maaaring mahina sa mga pag-atake sa pagpapalit ng SIM (SIM Swap). Para sa mga sistemang may mataas na kahalagahan, gumamit ng karagdagang pagsusuri sa panganib."
  },
  "intelligenceBadge": "MABISANG PAGHAHATID",
  "intelligenceTitle": "Paghahatid sa loob ng ilang segundo at real-time na ulat sa paghahatid",
  "intelligenceDesc": "Subaybayan ang mga sukatan sa paghahatid, oras ng pagtugon ng operator, at mga ulat sa DLR upang maiwasan ang mga pagkaantala sa pag-log in.",
  "intelligenceBullets": [
    "Mga pila na may mataas na priyoridad para sa agarang pagpapadala ng mga verification code",
    "Real-time na mga DLR webhook para sa agarang kalinawan sa katayuan ng paghahatid",
    "Awtomatikong paglipat sa backup na ruta (failover) para sa pinakamataas na tagumpay sa paghahatid",
    "Detalyadong pagsusuri sa latency ayon sa bansa at mobile operator"
  ],
  "intelligenceFootnote": "Makatatanggap ang iyong mga server ng abiso sa pamamagitan ng webhook sa sandaling matanggap ng telepono ang code.",
  "messageLogCard": {
    "title": "Live na Katayuan ng Paghahatid ng OTP",
    "badge": "PRIORIDAD NA DLR",
    "tab1": "Naihatid",
    "tab2": "Nasa Pila",
    "tab3": "Napatunayan",
    "colType": "Uri",
    "colState": "Katayuan",
    "colReceipt": "Latency ng Operator",
    "row1Type": "Login OTP",
    "row1State": "Naihatid",
    "row1Receipt": "1.2s Device DLR",
    "row2Type": "Reset ng Password",
    "row2State": "Naihatid",
    "row2Receipt": "0.9s Device DLR",
    "row3Type": "Auth ng Pagbabayad",
    "row3State": "Naihatid",
    "row3Receipt": "1.1s Device DLR",
    "footerText": "Paghahatid ng beripikasyon sa loob ng ilang segundo sa mga pandaigdigang mobile network"
  },
  "protectionTitle": "Seguridad na binuo para sa mga kritikal na beripikasyon",
  "protectionBadge": "SEGURIDAD AT PAGSUNOD SA MGA PATAKARAN",
  "protectionCards": [
    {
      "title": "Limitasyon sa Rate at Pag-iwas sa Pandaraya",
      "desc": "Protektahan ang iyong system mula sa mga pag-atake ng brute force at magastos na SMS pumping gamit ang mga naiaangkop na limitasyon sa bilis."
    },
    {
      "title": "Pandaigdigang Pagsunod sa Sender ID",
      "desc": "Tiyakin ang opisyal na pagpaparehistro ng pangalan ng nagpadala at buong pagsunod sa mga lokal na regulasyon sa telekomunikasyon sa mga destinasyong bansa."
    }
  ],
  "timelineBadge": "ISTRUKTURADONG PAGPAPATUPAD",
  "timelineTitle": "Mula sa integrasyon ng API hanggang sa pagpapatakbo, sunud-sunod na proseso",
  "timelineSubtitle": "Ilunsad ang SMS OTP gamit ang isang maayos na proseso na ganap na tumutugma sa mga pamantayan sa seguridad at dami ng trapiko ng iyong platform.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Pagtukoy ng mga Kinakailangan",
      "desc": "Tukuyin ang mga bansang patutunguhan, inaasahang dami ng mensahe, at mga sitwasyon ng beripikasyon."
    },
    {
      "step": "02",
      "title": "Pagdidisenyo ng Daloy ng Proseso",
      "desc": "Itakda ang tagal ng bisa ng code, mga agwat ng muling pagpapadala, at mga template ng mensahe."
    },
    {
      "step": "03",
      "title": "Integrasyon ng API",
      "desc": "Ikonekta ang iyong mga system sa aming gateway sa pamamagitan ng mga secure na REST API o SMPP protocol."
    },
    {
      "step": "04",
      "title": "Pagsubok at Pagpapatunay",
      "desc": "Suriin ang bilis ng paghahatid, paghawak sa error, at karanasan ng user sa sandbox environment."
    },
    {
      "step": "05",
      "title": "Paglulunsad sa Produksyon",
      "desc": "Simulan ang pagpapadala ng opisyal na trapiko nang may tuluy-tuloy na pagsubaybay at suportang teknikal."
    }
  ],
  "integrationPlan": {
    "title": "Mga Pagtutukoy ng Integrasyon ng OTP",
    "planBadge": "HANDA NA PARA SA PRODUKSYON",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Mga 2FA Code at Mabilisang Beripikasyon",
    "formats": "Numerong OTP, Alphanumeric Tokens",
    "feedback": "Real-time na mga Ulat sa Paghahatid ng DLR",
    "senderSetup": "Rehistradong Sender ID / Nakatalagang Maikling Numero",
    "check1": "Naka-configure ang mga expiration timer at limitasyon sa pagpapadala",
    "check2": "Handa na para sa produksyon ang mga backup na ruta at webhook ng katayuan",
    "discussNote": "Kumonsulta sa aming mga espesyalista upang idisenyo ang pinakamahusay na arkitektura ng pagpapatotoo para sa iyong platform.",
    "discussBtn": "Simulan ang Integrasyon"
  },
  "faqBadge": "MGA MADALAS ITANONG",
  "faqTitle": "Mga madalas itanong tungkol sa mga serbisyo ng SMS OTP",
  "faqSubtitle": "Alamin kung paano pinoprotektahan ng aming imprastraktura na may mababang latency ang iyong mga daloy ng pagpapatotoo.",
  "faqs": [
    {
      "q": "Gaano kabilis naihahatid ang mga mensaheng SMS OTP?",
      "a": "Naihahatid ng aming mga ruta na may priyoridad ang mga verification code sa loob ng ilang segundo sa ilalim ng karaniwang mga kondisyon ng mobile network."
    },
    {
      "q": "Anong mga API ang available para sa integrasyon?",
      "a": "Nagbibigay kami ng modernong REST API na may kumpletong dokumentasyon at mga halimbawa ng code, pati na rin ang SMPP v3.4 protocol para sa mataas na dami ng trapiko."
    },
    {
      "q": "Paano mapoprotektahan ang aming platform laban sa SMS pumping at pandaraya?",
      "a": "Nag-aalok kami ng mga built-in na filter sa limitasyon ng bilis, pag-block sa mga kahina-hinalang destinasyon, at mga IP whitelist upang ihinto ang mapanlinlang na trapiko."
    }
  ],
  "ctaBadge": "I-UPGRADE ANG PAGPAPATOTOO",
  "ctaTitle": "Gawing mas mabilis, mas ligtas, at mas maaasahan ang bawat beripikasyon",
  "ctaSubtitle": "Palakasin ang mga digital na karanasan ng iyong mga customer gamit ang mga serbisyo ng SMS OTP na binuo para sa ligtas na pag-log in, proteksyon ng account, at kumpirmasyon ng pagbabayad.",
  "contactUs": "Magsimula sa SMS OTP",
  "ctaFootnote": "Makipag-ugnayan sa aming mga eksperto upang matuto nang higit pa tungkol sa mga priyoridad na ruta at mga pagsasaayos ng API."
};

const bn: OtpSmsServicesTranslation = {
  "heroBadge": "ওটিপি এসএমএস সেবা • প্রমাণীকরণ অবকাঠামো",
  "heroTitle": "প্রতিটি যাচাইকরণ, সম্পূর্ণ নির্ভরযোগ্যতা এবং দ্রুততম সংযোগের সাথে",
  "heroDesc": "উচ্চ নির্ভরযোগ্যতাসম্পন্ন ওটিপি এসএমএস সেবার মাধ্যমে গ্রাহকদের অ্যাকাউন্ট সুরক্ষিত রাখুন এবং ব্যবহারকারীর প্রমাণীকরণ সহজতর করুন। লগইন, নতুন নিবন্ধন, পাসওয়ার্ড রিসেট এবং আর্থিক লেনদেন নিশ্চিতকরণের জন্য অতি-স্বল্প বিলম্বের আন্তর্জাতিক টেলিকম অবকাঠামোর মাধ্যমে এককালীন পাসওয়ার্ড পাঠান।",
  "talkToExpert": "ওটিপি বিশেষজ্ঞের সাথে কথা বলুন",
  "exploreCapabilities": "সুযোগ-সুবিধাগুলো দেখুন",
  "stats": {
    "routing": "নির্ভরযোগ্য ওটিপি",
    "routingLabel": "তাৎক্ষণিক সঠিক সময়ে বিতরণ",
    "traffic": "সহজ এপিআই",
    "trafficLabel": "সহজ ও নমনীয় ইন্টিগ্রেশন",
    "insights": "বিশ্বব্যাপী বিস্তার",
    "insightsLabel": "সরাসরি অপারেটর সংযোগ"
  },
  "heroLiveBadge1": {
    "title": "তাৎক্ষণিক ডেলিভারি",
    "label": "অতি-স্বল্প বিলম্বের যাচাইকরণ রুট"
  },
  "heroLiveBadge2": {
    "title": "ক্যারিয়ার-গ্রেড ২এফএ",
    "sub": "সরাসরি সর্বোচ্চ অগ্রাধিকার রাউটিং"
  },
  "whyBadge": "নিরাপত্তা অবকাঠামো",
  "whyTitle": "বার্তা আদান-প্রদানের অবকাঠামো যা প্রতিটি যাচাইকরণ সুরক্ষিত রাখে",
  "whySubtitle1": "সময়মতো বার্তা পৌঁছানো, সহজ অ্যাপ্লিকেশন ইন্টিগ্রেশন এবং বিপুল পরিমাণ বার্তা ধারণক্ষমতার জন্য তৈরি ওটিপি পরিষেবার সাহায্যে নিরাপদ গ্রাহক প্রমাণীকরণ নিশ্চিত করুন।",
  "whySubtitle2": "আন্তর্জাতিক মোবাইল নেটওয়ার্কগুলোতে সর্বনিম্ন লেটেন্সি এবং সর্বোচ্চ ডেলিভারি রেট নিশ্চিত করার জন্য বিশেষভাবে প্রস্তুত।",
  "whyCards": [
    {
      "title": "নির্ভরযোগ্য ওটিপি বিতরণ",
      "desc": "সমর্থিত গন্তব্য এবং মোবাইল নেটওয়ার্ক জুড়ে অবিচল ও ধারাবাহিক বার্তা প্রাপ্তির নিশ্চয়তা সহ এককালীন পাসওয়ার্ড পাঠান।",
      "footer": "উচ্চ ডেলিভারি নিশ্চয়তা"
    },
    {
      "title": "দ্রুততম যাচাইকরণ বার্তা",
      "desc": "মাত্র কয়েক সেকেন্ডে ওটিপি পৌঁছে দিয়ে ব্যবহারকারীদের দ্রুত লগইন এবং নিরাপত্তা প্রক্রিয়া সম্পন্ন করতে সাহায্য করুন।",
      "footer": "স্বল্প বিলম্বের রাউটিং"
    },
    {
      "title": "নমনীয় এপিআই ইন্টিগ্রেশন",
      "desc": "স্ট্যান্ডার্ড REST API এবং SMPP প্রোটোকলের মাধ্যমে ওয়েবসাইট, মোবাইল অ্যাপ এবং ব্যাকএন্ড সিস্টেমে ওটিপি এসএমএস সুবিধা যুক্ত করুন।",
      "footer": "REST API এবং SMPP"
    },
    {
      "title": "স্কেলেবল প্রমাণীকরণ ব্যবস্থা",
      "desc": "ব্যবহারকারীর নিবন্ধন বৃদ্ধি, ব্যাপক লগইন চাপ এবং লেনদেন যাচাইকরণের উচ্চ ভলিউম অনায়াসে পরিচালনা করুন।",
      "footer": "উচ্চ ভলিউম সক্ষমতা"
    }
  ],
  "capabilitiesBadge": "একক ওটিপি প্ল্যাটফর্ম",
  "capabilitiesTitle": "আপনার ব্যবসায়িক প্রয়োজনে তৈরি একটি সমন্বিত ওটিপি প্ল্যাটফর্ম",
  "capabilitiesDesc": "দৈনন্দিন ডিজিটাল কার্যক্রম থেকে শুরু করে অত্যন্ত গুরুত্বপূর্ণ ব্যবসায়িক প্রক্রিয়ার জন্য উপযুক্ত ওটিপি এসএমএস সেবার মাধ্যমে প্রমাণীকরণকে শক্তিশালী করুন।",
  "designSolution": "ব্যবহারকারী যাচাইকরণ শুরু করুন",
  "solutionNote": "উচ্চ ভলিউম ২এফএ, নিরাপদ লগইন এবং আর্থিক লেনদেন প্রমাণীকরণের জন্য বিশেষভাবে সাজানো।",
  "capabilities": [
    {
      "tag": "লগইন ২এফএ",
      "title": "লগইন প্রমাণীকরণ",
      "desc": "অননুমোদিত প্রবেশ রোধ করতে লগইনের সময় এককালীন পাসওয়ার্ড পাঠিয়ে ব্যবহারকারীর পরিচয় যাচাই করুন।"
    },
    {
      "tag": "নিবন্ধন",
      "title": "নতুন অ্যাকাউন্ট নিবন্ধন",
      "desc": "প্রদত্ত মোবাইল নম্বরের প্রকৃত মালিকানা তাৎক্ষণিকভাবে নিশ্চিত করে ভুয়া অ্যাকাউন্ট তৈরি বন্ধ করুন।"
    },
    {
      "tag": "পাসওয়ার্ড রিসেট",
      "title": "নিরাপদ অ্যাকাউন্ট পুনরুদ্ধার",
      "desc": "বৈধ পাসওয়ার্ড রিসেট অনুরোধের জন্য সময়োপযোগী ওটিপি পাঠিয়ে নিরাপদ অ্যাকাউন্ট পুনরুদ্ধার নিশ্চিত করুন।"
    },
    {
      "tag": "লেনদেন",
      "title": "লেনদেন প্রমাণীকরণ",
      "desc": "তহবিল স্থানান্তর এবং সংবেদনশীল অনলাইন পেমেন্ট অনুমোদনের জন্য অতিরিক্ত এসএমএস যাচাইকরণ স্তর যোগ করুন।"
    },
    {
      "tag": "শনাক্তকরণ",
      "title": "মোবাইল নম্বর যাচাইকরণ",
      "desc": "গ্রাহক অনবোর্ডিং এবং নিয়ন্ত্রণমূলক কেওয়াইসি (KYC) প্রক্রিয়ায় মোবাইল নম্বরের বৈধতা নিশ্চিত করুন।"
    },
    {
      "tag": "অ্যাপ নিরাপত্তা",
      "title": "অ্যাপ্লিকেশন নিরাপত্তা",
      "desc": "তথ্য সুরক্ষা নীতি ও মান বজায় রাখতে সরাসরি ওয়েব এবং মোবাইল অ্যাপে ওটিপি মেসেজিং যুক্ত করুন।"
    },
    {
      "tag": "স্বয়ংক্রিয়",
      "title": "স্বয়ংক্রিয় ওটিপি ট্রিগার",
      "desc": "অ্যাপ্লিকেশনের নির্দিষ্ট ঘটনা এবং পূর্বনির্ধারিত নিরাপত্তা বিধিমালার ওপর ভিত্তি করে স্বয়ংক্রিয় কোড পাঠান।"
    },
    {
      "tag": "উচ্চ ভলিউম",
      "title": "বৃহৎ পরিসরে ওটিপি মেসেজিং",
      "desc": "ব্যবসায়ের ক্রমবর্ধমান চাহিদার সাথে সামঞ্জস্য রেখে প্রতি সেকেন্ডে হাজার হাজার যাচাইকরণ অনুরোধ নিরাপদে প্রসেস করুন।"
    }
  ],
  "howItWorksBadge": "যাচাইকরণ প্রক্রিয়া",
  "howItWorksTitle": "ওটিপি কোড বিতরণ কীভাবে কাজ করে",
  "howItWorksSubtitle": "এপিআই অনুরোধ পাঠানো থেকে মাত্র কয়েক সেকেন্ডের মধ্যে ব্যবহারকারীর ফোনে কোড পৌঁছানোর সম্পূর্ণ ধাপ।",
  "howItWorksSteps": [
    {
      "step": "০১",
      "title": "ব্যবহারকারীর অনুরোধ",
      "desc": "ব্যবহারকারী অ্যাপে প্রমাণীকরণ প্রয়োজন এমন কোনো ক্রিয়া শুরু করেন যেমন লগইন, নিবন্ধন বা পেমেন্ট।",
      "note": "অ্যাপ্লিকেশনে ট্রিগার"
    },
    {
      "step": "০২",
      "title": "এপিআই মাধ্যমে প্রেরণ",
      "desc": "আপনার সিস্টেম নিরাপদ REST API এন্ডপয়েন্টের মাধ্যমে আমাদের ওটিপি গেটওয়েতে অস্থায়ী কোডটি পাঠায়।",
      "note": "REST API / SMPP"
    },
    {
      "step": "০৩",
      "title": "অগ্রাধিকার ক্যারিয়ার রাউটিং",
      "desc": "বার্তাটি সর্বোচ্চ অগ্রাধিকার কিউ সহ সরাসরি মোবাইল অপারেটরের চ্যানেলে তাৎক্ষণিকভাবে প্রেরণ করা হয়।",
      "note": "স্বল্প বিলম্বের রাউটিং"
    },
    {
      "step": "০৪",
      "title": "ফোনে প্রাপ্তি ও যাচাই",
      "desc": "ব্যবহারকারী কোডটি পান এবং যাচাইকরণ সম্পন্ন করেন; বিতরণের স্থিতি ওয়েবহুকের মাধ্যমে তাৎক্ষণিক জানানো হয়।",
      "note": "রিয়েল-টাইম DLR রিপোর্ট"
    }
  ],
  "networkBadge": "গ্লোবাল এসএমএস কভারেজ",
  "networkTitle": "যাচাইকরণ প্রক্রিয়াকে অবিচ্ছিন্ন রাখতে তৈরি একটি বিশ্বমানের নেটওয়ার্ক",
  "networkDesc": "নিরাপদ প্রমাণীকরণ প্রক্রিয়ার জন্য বিশেষভাবে প্রস্তুত সরাসরি এসএমএস সংযোগের মাধ্যমে আন্তর্জাতিক ব্যবহারকারীদের কাছে পৌঁছান।",
  "networkBullets": [
    "বিশ্বজুড়ে শীর্ষস্থানীয় মোবাইল নেটওয়ার্ক অপারেটরদের সাথে সরাসরি এসএমএস সংযোগ",
    "বিদ্যমান ২এফএ এবং প্রমাণীকরণ সিস্টেমের সাথে সহজ ইন্টিগ্রেশন",
    "চাহিদা অনুযায়ী যেকোনো মুহূর্তে ওটিপি বার্তার ধারণক্ষমতা বৃদ্ধির সুবিধা",
    "রিয়েল-টাইম ডেলিভারি রিপোর্টের (DLR) মাধ্যমে বিতরণের স্বচ্ছতা",
    "আধুনিক REST API এবং ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রোটোকলের মাধ্যমে সহজ নিয়ন্ত্রণ",
    "সময়-সংবেদনশীল যাচাইকরণ প্রক্রিয়ার জন্য সার্বক্ষণিক বিশেষায়িত প্রযুক্তি সহায়তা"
  ],
  "networkStats": [
    {
      "val": "গ্লোবাল কভারেজ",
      "label": "বিশ্বব্যাপী মোবাইল অপারেটরদের সাথে সরাসরি আন্তঃসংযোগ"
    },
    {
      "val": "অগ্রাধিকার রুট",
      "label": "সর্বনিম্ন বিলম্ব সহ অতি-জরুরি প্রমাণীকরণ ট্রাফিক"
    }
  ],
  "networkBadgeOverlay": {
    "title": "ওটিপি ক্যারিয়ার গেটওয়ে",
    "sub": "সময়-সংবেদনশীল প্রমাণীকরণের জন্য সরাসরি অগ্রাধিকার রাউটিং"
  },
  "networkFooterNote": "প্রকৃত ডেলিভারি গতি গন্তব্য দেশের স্থানীয় টেলিকম নীতিমালা এবং গ্রাহকের মোবাইল নেটওয়ার্কের ওপর নির্ভরশীল।",
  "momentsBadge": "ব্যবহারের ক্ষেত্র ও শিল্প",
  "momentsTitle": "প্রতিটি গুরুত্বপূর্ণ যাচাইকরণের মুহূর্তের জন্য নির্মিত",
  "momentsSubtitle": "যেসব ক্ষেত্রে পরিচয় যাচাই এবং অ্যাকাউন্ট সুরক্ষা অপরিহার্য, সেখানে ওটিপি এসএমএস ডিজিটাল নিরাপত্তা নিশ্চিত করে।",
  "moments": [
    {
      "title": "ব্যাংকিং ও আর্থিক সেবা",
      "desc": "উচ্চ নিরাপত্তাসম্পন্ন ওটিপি প্রক্রিয়ার মাধ্যমে অ্যাকাউন্টে প্রবেশ এবং অর্থ স্থানান্তর সুরক্ষিত রাখুন।",
      "footer": "আর্থিক ২এফএ ও পেমেন্ট অনুমোদন"
    },
    {
      "title": "ই-কমার্স ও অনলাইন খুচরা বিক্রয়",
      "desc": "ক্রেতাদের অ্যাকাউন্ট যাচাই করুন, লগইন সুরক্ষিত রাখুন এবং চেকআউট পর্যায়ে লেনদেন নিরাপদ করুন।",
      "footer": "নিরাপদ চেকআউট ও অ্যাকাউন্ট সুরক্ষা"
    },
    {
      "title": "ভ্রমণ ও আতিথেয়তা",
      "desc": "টিকিট বুকিং, বুকিং বিবরণ পরিবর্তন এবং যাত্রী পরিচয় যাচাই তাৎক্ষণিক এসএমএসের মাধ্যমে নিশ্চিত করুন।",
      "footer": "বুকিং যাচাই ও যাত্রীদের নিরাপত্তা"
    },
    {
      "title": "ডিজিটাল প্ল্যাটফর্ম ও সাস (SaaS)",
      "desc": "নতুন নিবন্ধন, পাসওয়ার্ড পুনরুদ্ধার এবং একাধিক ডিভাইসে লগইন প্রক্রিয়ায় এককালীন কোড যুক্ত করুন।",
      "footer": "সহজ অনবোর্ডিং ও স্থায়ী নিরাপত্তা"
    }
  ],
  "comparison": {
    "comparisonTitle": "ওটিপি এসএমএস কীভাবে ডিজিটাল প্রমাণীকরণকে শক্তিশালী করে তা দেখুন",
    "comparisonSubtitle": "আপনার অ্যাপের চাহিদা, ব্যবহারকারীর অভিজ্ঞতা এবং নিরাপত্তা মানের ওপর ভিত্তি করে সঠিক যাচাইকরণ পদ্ধতি বেছে নিন।",
    "otpTitle": "ওটিপি এসএমএস",
    "otpBadge": "সার্বজনীন মোবাইল সুবিধা",
    "otpItems": [
      "যেকোনো মোবাইল নম্বরে সরাসরি এককালীন পাসওয়ার্ড পৌঁছে দেয়",
      "কোনো অতিরিক্ত অ্যাপ ইনস্টল করার প্রয়োজন ছাড়াই সব ফোনে সরাসরি কাজ করে",
      "ব্যাপক হারে নিবন্ধন, দ্রুত লগইন এবং অ্যাকাউন্ট পুনরুদ্ধারের জন্য সেরা",
      "গ্রাহকের মোবাইল নেটওয়ার্ক ও কভারেজের ওপর নির্ভরশীল"
    ],
    "appTitle": "অ্যাপ-ভিত্তিক প্রমাণীকরণ",
    "appBadge": "সফটওয়্যার প্রমাণীকরণকারী",
    "appItems": [
      "একটি নির্দিষ্ট অ্যাপের মধ্যে কোড তৈরি করে বা পুশ বিজ্ঞপ্তি পাঠায়",
      "ওয়াই-ফাই সংযোগ থাকলে সেলুলার নেটওয়ার্ক ছাড়াও কাজ করতে পারে",
      "ব্যবহারকারীকে আগেই অ্যাপটি ডাউনলোড ও কনফিগার করতে হয়",
      "সিস্টেমের নকশার ওপর নির্ভর করে অতিরিক্ত ক্রিপ্টোগ্রাফিক সুরক্ষা প্রদান করে"
    ],
    "securityNotice": "নিরাপত্তা পরামর্শ: ওটিপি এসএমএস একটি মোবাইল নম্বরের প্রকৃত ব্যবহার যাচাই করার ক্ষেত্রে অত্যন্ত কার্যকর, তবে এটি সিম সোয়াপিং (SIM Swap) ঝুঁকির সম্মুখীন হতে পারে। অতি-সংবেদনশীল আর্থিক প্ল্যাটফর্মে বহুমুখী ঝুঁকি নিয়ন্ত্রণের ব্যবস্থা রাখুন।"
  },
  "intelligenceBadge": "বুদ্ধিমত্তা সম্পন্ন বিতরণ",
  "intelligenceTitle": "কয়েক সেকেন্ডে ডেলিভারি ও রিয়েল-টাইম স্ট্যাটাস রিপোর্ট",
  "intelligenceDesc": "ওটিপি বিতরণের কার্যকারিতা, অপারেটরের সাড়া দেওয়ার সময় এবং DLR স্ট্যাটাস পর্যবেক্ষণ করুন যাতে ব্যবহারকারীরা বিলম্বের মুখে না পড়েন।",
  "intelligenceBullets": [
    "কোড দ্রুত প্রেরণের জন্য নিবেদিত সর্বোচ্চ অগ্রাধিকার কিউ ব্যবস্থা",
    "স্ট্যাটাস তাৎক্ষণিকভাবে জানার জন্য রিয়েল-টাইম DLR ওয়েবহুক",
    "সর্বোচ্চ ডেলিভারি হার বজায় রাখতে স্বয়ংক্রিয় রুট ফেইলওভার",
    "দেশ ও টেলিকম অপারেটর ভিত্তিক বিস্তারিত লেটেন্সি বিশ্লেষণ ড্যাশবোর্ড"
  ],
  "intelligenceFootnote": "গ্রাহকের ফোনে কোডটি পৌঁছানোর সাথে সাথেই আপনার সার্ভার ওয়েবহুকের মাধ্যমে নোটিফিকেশন পেয়ে যায়।",
  "messageLogCard": {
    "title": "লাইভ ওটিপি ডেলিভারি মনিটরিং লগ",
    "badge": "অগ্রাধিকার DLR",
    "tab1": "বিতরিত",
    "tab2": "অপেক্ষমাণ",
    "tab3": "যাচাইকৃত",
    "colType": "ধরন",
    "colState": "অবস্থা",
    "colReceipt": "অপারেটর লেটেন্সি",
    "row1Type": "লগইন ওটিপি",
    "row1State": "বিতরিত",
    "row1Receipt": "১.২ সেকেন্ড ডিভাইস DLR",
    "row2Type": "পাসওয়ার্ড রিসেট",
    "row2State": "বিতরিত",
    "row2Receipt": "০.৯ সেকেন্ড ডিভাইস DLR",
    "row3Type": "পেমেন্ট প্রমাণীকরণ",
    "row3State": "বিতরিত",
    "row3Receipt": "১.১ সেকেন্ড ডিভাইস DLR",
    "footerText": "আন্তর্জাতিক মোবাইল নেটওয়ার্কে সেকেন্ডের মধ্যে যাচাইকরণ ডেলিভারি"
  },
  "protectionTitle": "গুরুত্বপূর্ণ যাচাইকরণ কাজের জন্য নির্মিত সুরক্ষা",
  "protectionBadge": "নিরাপত্তা ও সম্মতি",
  "protectionCards": [
    {
      "title": "রেট লিমিটিং ও অপব্যবহার প্রতিরোধ",
      "desc": "কনফিগারযোগ্য গতির সীমার মাধ্যমে ব্রুট-ফোর্স আক্রমণ এবং ব্যয়বহুল এসএমএস পাম্পিং (SMS pumping) জালিয়াতি থেকে সিস্টেম রক্ষা করুন।"
    },
    {
      "title": "আন্তর্জাতিক প্রেরক আইডি (Sender ID) সম্মতি",
      "desc": "গন্তব্য দেশের স্থানীয় টেলিকম আইন মেনে অফিসিয়াল সেন্ডার আইডি নিবন্ধন ও অনুমোদন নিশ্চিত করুন।"
    }
  ],
  "timelineBadge": "পরিকল্পিত বাস্তবায়ন",
  "timelineTitle": "এপিআই সংযুক্তি থেকে উৎপাদন পরিবেশ চালু পর্যন্ত ধাপসমূহ",
  "timelineSubtitle": "আপনার প্ল্যাটফর্মের নিরাপত্তা মানদণ্ড এবং বার্তার পরিমাণের সাথে সামঞ্জস্য রেখে একটি সুশৃঙ্খল প্রক্রিয়ার মাধ্যমে ওটিপি এসএমএস চালু করুন।",
  "timelineSteps": [
    {
      "step": "০১",
      "title": "চাহিদা নিরূপণ",
      "desc": "গন্তব্য দেশ, সম্ভাব্য বার্তার পরিমাণ এবং নির্দিষ্ট প্রমাণীকরণ প্রবাহ স্পষ্টভাবে চিহ্নিত করুন।"
    },
    {
      "step": "০২",
      "title": "প্রক্রিয়া নকশা",
      "desc": "কোডের মেয়াদ, পুনরায় পাঠানোর সময়সীমা এবং বার্তার সঠিক টেক্সট ফরম্যাট নির্ধারণ করুন।"
    },
    {
      "step": "০৩",
      "title": "এপিআই ইন্টিগ্রেশন",
      "desc": "আমাদের নিরাপদ REST API বা এন্টারপ্রাইজ SMPP প্রোটোকলের সাথে আপনার সিস্টেম সংযুক্ত করুন।"
    },
    {
      "step": "০৪",
      "title": "পরীক্ষা ও যাচাইকরণ",
      "desc": "স্যান্ডবক্স পরিবেশে বার্তা পৌঁছানোর গতি, ত্রুটি হ্যান্ডলিং এবং ব্যবহারকারীর অভিজ্ঞতা পুঙ্খানুপুঙ্খ পরীক্ষা করুন।"
    },
    {
      "step": "০৫",
      "title": "সরাসরি সম্প্রচার ও সেবা চালু",
      "desc": "সার্বক্ষণিক পর্যবেক্ষণ এবং ডেডিকেটেড প্রযুক্তিগত সহায়তার মাধ্যমে লাইভ ট্রাফিক শুরু করুন।"
    }
  ],
  "integrationPlan": {
    "title": "ওটিপি ইন্টিগ্রেশন প্রযুক্তিগত বিবরণ",
    "planBadge": "প্রোডাকশন প্রস্তুত",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "জরুরি ২এফএ ও প্রমাণীকরণ কোড",
    "formats": "সংখ্যাত্মক ওটিপি, আলফানিউমেরিক টোকেন",
    "feedback": "রিয়েল-টাইম DLR ডেলিভারি রিপোর্ট",
    "senderSetup": "অনুমোদিত প্রেরক আইডি / ডেডিকেটেড শর্ট কোড",
    "check1": "মেয়াদ শেষ হওয়ার টাইমার এবং বার্তা পাঠানোর সীমার নিয়ম প্রস্তুত",
    "check2": "বিকল্প রুট এবং স্ট্যাটাস রিপোর্ট ওয়েবহুক সম্পূর্ণ সক্রিয়",
    "discussNote": "আপনার সেবার জন্য আদর্শ প্রমাণীকরণ কাঠামো সাজাতে আমাদের বিশেষজ্ঞদের সাথে আলোচনা করুন।",
    "discussBtn": "ইন্টিগ্রেশন শুরু করুন"
  },
  "faqBadge": "সাধারণ জিজ্ঞাসা",
  "faqTitle": "ওটিপি এসএমএস সেবা সম্পর্কে সচরাচর জিজ্ঞাসিত প্রশ্নাবলী",
  "faqSubtitle": "আমাদের অতি-স্বল্প বিলম্বের অবকাঠামো কীভাবে আপনার ডিজিটাল যাচাইকরণকে সুরক্ষিত করে তা জানুন।",
  "faqs": [
    {
      "q": "ওটিপি এসএমএস কোড কতটা দ্রুত ফোনে পৌঁছায়?",
      "a": "স্বাভাবিক মোবাইল নেটওয়ার্ক পরিস্থিতিতে আমাদের সর্বোচ্চ অগ্রাধিকার রুটের মাধ্যমে কোডগুলো কয়েক সেকেন্ডের মধ্যে ফোনে পৌঁছে যায়।"
    },
    {
      "q": "সিস্টেমে সংযুক্ত করার জন্য কী কী এপিআই সুবিধা রয়েছে?",
      "a": "আমরা কোড উদাহরণ সহ সহজবোধ্য REST API এবং বৃহৎ পরিসরের সিস্টেমের জন্য SMPP v3.4 প্রোটোকল সরবরাহ করে থাকি।"
    },
    {
      "q": "আমরা কীভাবে এসএমএস পাম্পিং এবং জালিয়াতি থেকে নিজেদের রক্ষা করতে পারি?",
      "a": "আমাদের প্ল্যাটফর্মে অন্তর্নির্মিত রেট লিমিটিং, সন্দেহজনক দেশ ব্লক এবং আইপি হোয়াইটলিস্ট সুবিধা রয়েছে যা অনাকাঙ্ক্ষিত ট্রাফিক প্রতিরোধ করে।"
    }
  ],
  "ctaBadge": "প্রমাণীকরণ উন্নত করুন",
  "ctaTitle": "প্রতিটি যাচাইকরণকে করুন আরও দ্রুত, নিরাপদ এবং শতভাগ নির্ভরযোগ্য",
  "ctaSubtitle": "লগইন, অ্যাকাউন্ট সুরক্ষা এবং আর্থিক লেনদেন অনুমোদনের জন্য বিশেষভাবে তৈরি ওটিপি এসএমএস সেবার মাধ্যমে আপনার গ্রাহকদের নিরাপদ সেবা প্রদান করুন।",
  "contactUs": "ওটিপি এসএমএস শুরু করুন",
  "ctaFootnote": "অগ্রাধিকার রাউটিং এবং এপিআই সংযোগ সংক্রান্ত বিস্তারিত তথ্যের জন্য আমাদের বিশেষজ্ঞদের সাথে কথা বলুন।"
};

const ta: OtpSmsServicesTranslation = {
  "heroBadge": "OTP SMS சேவைகள் • அங்கீகார உள்கட்டமைப்பு",
  "heroTitle": "ஒவ்வொரு சரிபார்ப்பும், முழு நம்பகத்தன்மை மற்றும் அதிவேகத்துடன் இணைக்கப்பட்டுள்ளது",
  "heroDesc": "நம்பகமான OTP SMS சேவைகள் மூலம் வாடிக்கையாளர் கணக்குகளைப் பாதுகாத்து பயனர் அங்கீகாரத்தை எளிதாக்குங்கள். மிகக் குறைந்த தாமதத்துடன் கூடிய தொலைத்தொடர்பு உள்கட்டமைப்பு வழியாக உள்நுழைவுகள், பதிவுகள், கடவுச்சொல் மீட்டமைப்புகள் மற்றும் பரிவர்த்தனை சரிபார்ப்புகளுக்கு ஒருமுறை கடவுச்சொற்களை (OTP) அனுப்புங்கள்.",
  "talkToExpert": "OTP நிபுணருடன் பேசுங்கள்",
  "exploreCapabilities": "செயல்பாடுகளை ஆராயுங்கள்",
  "stats": {
    "routing": "நம்பகமான OTP",
    "routingLabel": "உடனடி விநியோகம்",
    "traffic": "எளிய API",
    "trafficLabel": "நெகிழ்வான ஒருங்கிணைப்பு",
    "insights": "உலகளாவிய ரீச்",
    "insightsLabel": "நேரடி ஆபரேட்டர் இணைப்பு"
  },
  "heroLiveBadge1": {
    "title": "உடனடி டெலிவரி",
    "label": "மிகக் குறைந்த தாமத சரிபார்ப்பு பாதைகள்"
  },
  "heroLiveBadge2": {
    "title": "கேரியர்-கிரேடு 2FA",
    "sub": "நேரடி முன்னுரிமை ரூட்டிங்"
  },
  "whyBadge": "பாதுகாப்பு உள்கட்டமைப்பு",
  "whyTitle": "ஒவ்வொரு சரிபார்ப்பையும் பாதுகாக்கும் செய்தி உள்கட்டமைப்பு",
  "whySubtitle1": "நேரத்திற்கு விநியோகம் செய்தல், எளிதான பயன்பாட்டு ஒருங்கிணைப்பு மற்றும் அளவிடக்கூடிய தேவைகளுக்காக உருவாக்கப்பட்ட OTP செய்திகளுடன் பாதுகாப்பான வாடிக்கையாளர் அங்கீகாரத்தை ஆதரிக்கவும்.",
  "whySubtitle2": "சர்வதேச மொபைல் நெட்வொர்க்குகளில் குறைந்த தாமதம் மற்றும் அதிக விநியோக உத்தரவாதத்திற்காக பிரத்யேகமாக வடிவமைக்கப்பட்டது.",
  "whyCards": [
    {
      "title": "நம்பகமான OTP விநியோகம்",
      "desc": "ஆதரிக்கப்படும் அனைத்து மொபைல் நெட்வொர்க்குகளிலும் நிலையான அதிக டெலிவரி விகிதத்தை உறுதி செய்யும் நேரடி வழிகள் வழியாக ஒருமுறை கடவுச்சொற்களை அனுப்புங்கள்.",
      "footer": "அதிக டெலிவரி உத்தரவாதம்"
    },
    {
      "title": "விரைவான சரிபார்ப்பு செய்திகள்",
      "desc": "நொடிகளில் வந்து சேரும் செய்திகள் மூலம் பயனர்கள் தங்கள் உள்நுழைவு மற்றும் சரிபார்ப்பு செயல்முறைகளை விரைவாக முடிக்க உதவுங்கள்.",
      "footer": "குறைந்த தாமத ரூட்டிங்"
    },
    {
      "title": "நெகிழ்வான API ஒருங்கிணைப்பு",
      "desc": "நிலையான REST API மற்றும் SMPP நெறிமுறைகள் மூலம் இணையதளங்கள், மொபைல் பயன்பாடுகள் மற்றும் சர்வர் அமைப்புகளுடன் OTP SMS திறன்களை எளிதாக இணைக்கவும்.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "அளவிடக்கூடிய அங்கீகாரம்",
      "desc": "புதிய பயனர்கள் பதிவு, ஒரே நேரத்தில் உள்நுழைவு மற்றும் அதிக பரிவர்த்தனை சரிபார்ப்பு அளவுகளைத் தடையின்றி நிர்வகிக்கவும்.",
      "footer": "அதிக அளவு திறன்"
    }
  ],
  "capabilitiesBadge": "முழுமையான OTP தளம்",
  "capabilitiesTitle": "உங்கள் வணிகத் தேவைகளுக்கு ஏற்ப கட்டமைக்கப்பட்ட விரிவான OTP தளம்",
  "capabilitiesDesc": "அன்றாட டிஜிட்டல் பரிவர்த்தனைகள் முதல் முக்கியமான வணிக செயல்முறைகள் வரை பல்வேறு அங்கீகார சூழ்நிலைகளை ஆதரிக்கவும்.",
  "designSolution": "பயனர்களைச் சரிபார்க்கத் தொடங்குங்கள்",
  "solutionNote": "அதிக அளவு 2FA, பாதுகாப்பான உள்நுழைவு மற்றும் பரிவர்த்தனை அங்கீகாரத்திற்காக வடிவமைக்கப்பட்டுள்ளது.",
  "capabilities": [
    {
      "tag": "உள்நுழைவு 2FA",
      "title": "உள்நுழைவு சரிபார்ப்பு",
      "desc": "கணக்குகளைப் பாதுகாக்க உள்நுழைவின் போது ஒருமுறை கடவுச்சொற்களை அனுப்பி அங்கீகரிக்கப்படாத அணுகலைத் தடுக்கவும்."
    },
    {
      "tag": "பதிவு",
      "title": "புதிய கணக்கு பதிவு",
      "desc": "வழங்கப்பட்ட மொபைல் எண்ணின் உண்மையான உரிமையை உடனடியாகச் சரிபார்த்து புதிய பயனர் பதிவுகளை உறுதிப்படுத்தவும்."
    },
    {
      "tag": "கடவுச்சொல் மீட்டமைப்பு",
      "title": "பாதுகாப்பான கணக்கு மீட்பு",
      "desc": "சரியான கடவுச்சொல் மீட்டமைப்பு கோரிக்கைகளுக்கு தற்காலிக குறியீடுகளை அனுப்பி கணக்குகளைப் பாதுகாப்பாக மீட்டெடுக்க உதவவும்."
    },
    {
      "tag": "பரிவர்த்தனைகள்",
      "title": "பரிவர்த்தனை அங்கீகாரம்",
      "desc": "பணப்பரிமாற்றங்கள் மற்றும் முக்கியமான ஆன்லைன் கட்டணங்களை அங்கீகரிக்க கூடுதல் SMS சரிபார்ப்பு படியைச் சேர்க்கவும்."
    },
    {
      "tag": "அடையாளம்",
      "title": "மொபைல் எண் உரிமை சரிபார்ப்பு",
      "desc": "வாடிக்கையாளர் பதிவு மற்றும் சட்டப்பூர்வ KYC செயல்முறைகளின் போது மொபைல் எண்ணின் உரிமையை உறுதிப்படுத்தவும்."
    },
    {
      "tag": "பயன்பாட்டு பாதுகாப்பு",
      "title": "செயலி பாதுகாப்பு",
      "desc": "தகவல் பாதுகாப்பு விதிமுறைகளைப் பூர்த்தி செய்ய வலை மற்றும் மொபைல் பயன்பாடுகளில் நேரடியாக OTP செய்திகளை இணைக்கவும்."
    },
    {
      "tag": "தானியங்கி",
      "title": "தானியங்கி OTP தூண்டுதல்கள்",
      "desc": "முன்பே வரையறுக்கப்பட்ட கணினி நிகழ்வுகள் மற்றும் பாதுகாப்பு விதிகளின் அடிப்படையில் தானாகவே சரிபார்ப்புக் குறியீடுகளை அனுப்பவும்."
    },
    {
      "tag": "அதிக அளவு",
      "title": "பெரிய அளவிலான OTP செய்தியிடல்",
      "desc": "வணிகத்தின் வளர்ச்சிக்கு ஏற்ப வினாடிக்கு ஆயிரக்கணக்கான சரிபார்ப்புக் கோரிக்கைகளைத் தடையின்றிச் செயல்படுத்தவும்."
    }
  ],
  "howItWorksBadge": "சரிபார்ப்பு பணிப்பாய்வு",
  "howItWorksTitle": "OTP விநியோக செயல்முறை எவ்வாறு செயல்படுகிறது",
  "howItWorksSubtitle": "API அழைப்பிலிருந்து மொபைல் போனில் பெறுவது வரையிலான செயல்முறை சில நொடிகளில் முடிகிறது.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "பயனர் கோரிக்கை",
      "desc": "பயனர் உள்நுழைவு, பதிவு அல்லது கட்டணம் செலுத்துதல் போன்ற அங்கீகாரம் தேவைப்படும் செயலைத் தொடங்குகிறார்.",
      "note": "பயன்பாட்டு தூண்டுதல்"
    },
    {
      "step": "02",
      "title": "API மூலம் சமர்ப்பித்தல்",
      "desc": "உங்கள் கணினி தற்காலிகக் குறியீட்டை பாதுகாப்பான REST API எண்ட்பாயிண்ட்கள் மூலம் எங்கள் OTP நுழைவாயிலுக்கு அனுப்புகிறது.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "முன்னுரிமை ஆபரேட்டர் ரூட்டிங்",
      "desc": "செய்தி உடனடியாக அதிக முன்னுரிமை வரிசையுடன் நேரடி ஆபரேட்டர் பாதைகள் வழியாக அனுப்பப்படுகிறது.",
      "note": "குறைந்த தாமத ரூட்டிங்"
    },
    {
      "step": "04",
      "title": "போனில் பெறுதல் & சரிபார்ப்பு",
      "desc": "பயனர் குறியீட்டைப் பெற்று சரிபார்ப்பை முடிக்கிறார்; டெலிவரி நிலை வெப்ஹூக் மூலம் உடனடியாகத் தெரிவிக்கப்படுகிறது.",
      "note": "நிகழ்நேர DLR ரசீது"
    }
  ],
  "networkBadge": "உலகளாவிய SMS கவரேஜ்",
  "networkTitle": "தடையற்ற சரிபார்ப்பை உறுதி செய்யும் சர்வதேச நெட்வொர்க்",
  "networkDesc": "பாதுகாப்பான அங்கீகாரப் பணிகளுக்காக பிரத்யேகமாக அமைக்கப்பட்ட நேரடி SMS இணைப்புகள் மூலம் சர்வதேச வாடிக்கையாளர்களை அடையுங்கள்.",
  "networkBullets": [
    "உலகளவில் முன்னணி மொபைல் நெட்வொர்க் ஆபரேட்டர்களுடன் நேரடி SMS இணைப்பு",
    "தற்போதுள்ள 2FA மற்றும் அங்கீகார அமைப்புகளுடன் தடையற்ற ஒருங்கிணைப்பு",
    "அதிகரிக்கும் தேவைக்கு ஏற்ப தானாக விரிவடையும் செய்தி திறன்",
    "நிகழ்நேர DLR அறிக்கைகள் மூலம் டெலிவரி நிலையின் முழு வெளிப்படைத்தன்மை",
    "நவீன REST API மற்றும் தொழில்முறை நெறிமுறைகள் மூலம் எளிதான மேலாண்மை",
    "நேரம் மிக முக்கியமான சரிபார்ப்பு செயல்முறைகளுக்கான பிரத்யேக தொழில்நுட்ப ஆதரவு"
  ],
  "networkStats": [
    {
      "val": "உலகளாவிய கவரேஜ்",
      "label": "சர்வதேச மொபைல் ஆபரேட்டர்களுடன் நேரடி இணைப்பு"
    },
    {
      "val": "முன்னுரிமை பாதைகள்",
      "label": "மிகக் குறைந்த தாமதத்துடன் சரிபார்ப்பு போக்குவரத்து"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP ஆபரேட்டர் கேட்வே",
    "sub": "நேரத்திற்கு முக்கியமான சரிபார்ப்புகளுக்கான நேரடி முன்னுரிமை ரூட்டிங்"
  },
  "networkFooterNote": "உண்மையான விநியோக வேகம் உள்ளூர் தொலைத்தொடர்பு கொள்கைகள் மற்றும் பெறுநரின் சிக்னல் சூழலைப் பொறுத்தது.",
  "momentsBadge": "பயன்பாட்டு சூழல்கள் & துறைகள்",
  "momentsTitle": "ஒவ்வொரு முக்கியமான சரிபார்ப்பு தருணத்திற்காகவும் உருவாக்கப்பட்டது",
  "momentsSubtitle": "அடையாள சரிபார்ப்பு மற்றும் கணக்குப் பாதுகாப்பு அவசியமான அனைத்து துறைகளிலும் OTP SMS பாதுகாப்பை உறுதி செய்கிறது.",
  "moments": [
    {
      "title": "வங்கி மற்றும் நிதிச் சேவைகள்",
      "desc": "உயர் பாதுகாப்பு OTP செயல்முறைகள் மூலம் கணக்கு உள்நுழைவுகள் மற்றும் பணப்பரிமாற்றங்களைப் பாதுகாக்கவும்.",
      "footer": "நிதி 2FA & கட்டண அங்கீகாரம்"
    },
    {
      "title": "மின் வணிகம் மற்றும் சில்லறை வர்த்தகம்",
      "desc": "வாடிக்கையாளர் கணக்குகளைச் சரிபார்க்கவும், உள்நுழைவுகளைப் பாதுகாக்கவும் மற்றும் கட்டணப் படியைப் பாதுகாக்கவும்.",
      "footer": "பாதுகாப்பான செக்அவுட் & கணக்கு பாதுகாப்பு"
    },
    {
      "title": "பயணம் மற்றும் விருந்தோம்பல்",
      "desc": "டிக்கெட் முன்பதிவுகள், முன்பதிவு விவரங்கள் மற்றும் மாற்றங்களை உடனடி SMS சரிபார்ப்பு மூலம் உறுதிப்படுத்தவும்.",
      "footer": "முன்பதிவு சரிபார்ப்பு & பயணிகளின் பாதுகாப்பு"
    },
    {
      "title": "டிஜிட்டல் தளங்கள் & SaaS",
      "desc": "பதிவு, கடவுச்சொல் மீட்பு மற்றும் பல சாதன உள்நுழைவுகளில் ஒருமுறை குறியீடுகளைப் பயன்படுத்தவும்.",
      "footer": "சிரமமற்ற தொடக்கம் & நிரந்தர பாதுகாப்பு"
    }
  ],
  "comparison": {
    "comparisonTitle": "OTP SMS டிஜிட்டல் அங்கீகாரத்தை எவ்வாறு பலப்படுத்துகிறது என்பதைப் பாருங்கள்",
    "comparisonSubtitle": "உங்கள் பாதுகாப்புத் தேவைகள், பயனர் வசதி மற்றும் இலக்கு பார்வையாளர்களுக்கு மிகவும் பொருத்தமான முறையைத் தேர்ந்தெடுக்கவும்.",
    "otpTitle": "OTP SMS",
    "otpBadge": "அனைத்து சாதனங்களிலும் எளிதான அணுகல்",
    "otpItems": [
      "எந்தவொரு மொபைல் எண்ணிற்கும் ஒருமுறை குறியீடுகளை நேரடியாக அனுப்புகிறது",
      "கூடுதல் செயலியைப் பதிவிறக்காமல் எந்த போன்களிலும் உடனடியாக வேலை செய்கிறது",
      "அதிக எண்ணிக்கையிலான பதிவுகள், விரைவான உள்நுழைவுகள் மற்றும் மீட்புகளுக்குச் சிறந்தது",
      "பெறுநரின் மொபைல் ஆபரேட்டர் நெட்வொர்க் கவரேஜைப் பொறுத்தது"
    ],
    "appTitle": "செயலி அடிப்படையிலான அங்கீகாரம்",
    "appBadge": "மென்பொருள் அங்கீகரிப்பான்",
    "appItems": [
      "ஒரு குறிப்பிட்ட செயலிக்குள் குறியீடுகள் அல்லது ஒப்புதல் அறிவிப்புகளை உருவாக்குகிறது",
      "Wi-Fi இணைப்பு இருந்தால் செல்லுலார் சிக்னல் இல்லாமலும் செயல்பட முடியும்",
      "பயனர் முன்கூட்டியே செயலியைப் பதிவிறக்கி அமைக்க வேண்டும்",
      "கட்டமைப்பைப் பொறுத்து கூடுதல் மறைகுறியாக்கப் பாதுகாப்பை வழங்குகிறது"
    ],
    "securityNotice": "பாதுகாப்புப் பரிந்துரை: OTP SMS மொபைல் எண்ணின் உரிமையை உறுதிப்படுத்துவதில் மிகவும் பயனுள்ளதாக இருக்கும், ஆனால் இது SIM Swap அபாயங்களுக்கு ஆளாகக்கூடும். மிக முக்கியமான நிதி அமைப்புகளுக்குக் கூடுதல் பாதுகாப்பு அடுக்குகளைப் பயன்படுத்தவும்."
  },
  "intelligenceBadge": "அறிவார்ந்த விநியோகம்",
  "intelligenceTitle": "நொடிகளில் டெலிவரி மற்றும் நிகழ்நேர விநியோக அறிக்கைகள்",
  "intelligenceDesc": "பயனர்கள் தாமதங்களைச் சந்திக்காமல் இருப்பதை உறுதிசெய்ய விநியோக அளவீடுகள், ஆபரேட்டர் மறுமொழி நேரம் மற்றும் DLR நிலைகளைத் தொடர்ந்து கண்காணிக்கவும்.",
  "intelligenceBullets": [
    "சரிபார்ப்புக் குறியீடுகளை உடனடியாக அனுப்ப முன்னுரிமை வரிசை அமைப்பு",
    "நிலையை உடனடியாகத் தெரிந்துகொள்ள நிகழ்நேர DLR வெப்ஹூக்குகள்",
    "அதிகபட்ச விநியோக விகிதங்களை உறுதிப்படுத்த தானியங்கி மாற்று வழிப்பாதை (failover)",
    "நாடு மற்றும் தொலைத்தொடர்பு ஆபரேட்டர் வாரியாக விரிவான தாமதப் பகுப்பாய்வு பலகை"
  ],
  "intelligenceFootnote": "குறியீடு பயனரின் மொபைலை அடைந்த அதே நொடியில் உங்கள் சர்வர்கள் வெப்ஹூக் மூலம் அறிவிப்பைப் பெறுகின்றன.",
  "messageLogCard": {
    "title": "நேரலை OTP விநியோக கண்காணிப்பு",
    "badge": "முன்னுரிமை DLR",
    "tab1": "டெலிவரி செய்யப்பட்டது",
    "tab2": "வரிசையில்",
    "tab3": "சரிபார்க்கப்பட்டது",
    "colType": "வகை",
    "colState": "நிலை",
    "colReceipt": "ஆபரேட்டர் தாமதம்",
    "row1Type": "உள்நுழைவு OTP",
    "row1State": "டெலிவரி செய்யப்பட்டது",
    "row1Receipt": "1.2 வினாடி DLR",
    "row2Type": "கடவுச்சொல் மீட்டமைப்பு",
    "row2State": "டெலிவரி செய்யப்பட்டது",
    "row2Receipt": "0.9 வினாடி DLR",
    "row3Type": "கட்டண அங்கீகாரம்",
    "row3State": "டெலிவரி செய்யப்பட்டது",
    "row3Receipt": "1.1 வினாடி DLR",
    "footerText": "சர்வதேச மொபைல் நெட்வொர்க்குகளில் நொடிகளில் சரிபார்ப்பு விநியோகம்"
  },
  "protectionTitle": "முக்கியமான சரிபார்ப்புகளுக்காக உருவாக்கப்பட்ட பாதுகாப்பு",
  "protectionBadge": "பாதுகாப்பு & இணக்கம்",
  "protectionCards": [
    {
      "title": "வேக வரம்பு மற்றும் மோசடி தடுப்பு",
      "desc": "சரிசெய்யக்கூடிய வேக வரம்புகளுடன் புரூட்-ஃபோர்ஸ் தாக்குதல்கள் மற்றும் தேவையற்ற SMS pumping மோசடியிலிருந்து அமைப்பைப் பாதுகாக்கவும்."
    },
    {
      "title": "சர்வதேச அனுப்புநர் ஐடி (Sender ID) இணக்கம்",
      "desc": "இலக்கு நாடுகளின் உள்ளூர் தொலைத்தொடர்பு சட்டங்களுக்கு ஏற்ப அதிகாரப்பூர்வ அனுப்புநர் பெயரைப் பதிவுசெய்து பயன்படுத்துங்கள்."
    }
  ],
  "timelineBadge": "திட்டமிடப்பட்ட செயல்படுத்தல்",
  "timelineTitle": "API இணைப்பிலிருந்து நேரடி இயக்கம் வரை படிப்படியான செயல்முறை",
  "timelineSubtitle": "உங்கள் பயன்பாட்டின் பாதுகாப்புத் தரங்கள் மற்றும் போக்குவரத்து அளவிற்கு ஏற்ப ஒரு முறையான செயல்முறையுடன் OTP SMS-ஐத் தொடங்கவும்.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "தேவைகளை அறிதல்",
      "desc": "இலக்கு நாடுகள், எதிர்பார்க்கப்படும் செய்திகளின் அளவு மற்றும் சரிபார்ப்பு செயல்முறைகளைத் தெளிவாக வரையறுக்கவும்."
    },
    {
      "step": "02",
      "title": "பணிப்பாய்வு வடிவமைப்பு",
      "desc": "குறியீட்டின் காலாவதி நேரம், மீண்டும் அனுப்பும் இடைவெளி மற்றும் செய்தி வார்ப்புருக்களை அமைக்கவும்."
    },
    {
      "step": "03",
      "title": "API ஒருங்கிணைப்பு",
      "desc": "எங்கள் பாதுகாப்பான REST API அல்லது SMPP நெறிமுறைகளுடன் உங்கள் கணினியை இணைக்கவும்."
    },
    {
      "step": "04",
      "title": "சோதனை மற்றும் சரிபார்ப்பு",
      "desc": "சோதனைச் சூழலில் செய்தி விநியோக வேகம், பிழை கையாளுதல் மற்றும் பயனர் அனுபவத்தை முழுமையாகச் சோதிக்கவும்."
    },
    {
      "step": "05",
      "title": "நேரடி இயக்கம்",
      "desc": "தொடர்ச்சியான தொழில்நுட்ப ஆதரவு மற்றும் நேரடி கண்காணிப்புடன் அதிகாரப்பூர்வ செய்தியிடலைத் தொடங்குங்கள்."
    }
  ],
  "integrationPlan": {
    "title": "OTP ஒருங்கிணைப்பு விவரக்குறிப்புகள்",
    "planBadge": "தயாரிப்புக்குத் தயார்",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "நேரத்திற்கு முக்கியமான 2FA குறியீடுகள்",
    "formats": "எண் OTP, எழுத்துரு டோக்கன்கள்",
    "feedback": "நிகழ்நேர DLR விநியோக ரசீதுகள்",
    "senderSetup": "பதிவுசெய்யப்பட்ட அனுப்புநர் ஐடி / பிரத்யேக குறுகிய எண்",
    "check1": "காலாவதி டைமர்கள் மற்றும் அனுப்பும் வரம்பு விதிகள் கட்டமைக்கப்பட்டுள்ளன",
    "check2": "காப்புப் பிரதி வழிகள் மற்றும் நிலை வெப்ஹூக்குகள் முழுமையாகத் தயாராக உள்ளன",
    "discussNote": "உங்கள் சேவைக்கான சிறந்த அங்கீகாரக் கட்டமைப்பை வடிவமைக்க எங்கள் நிபுணர்களுடன் ஆலோசிக்கவும்.",
    "discussBtn": "ஒருங்கிணைப்பைத் தொடங்குங்கள்"
  },
  "faqBadge": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  "faqTitle": "OTP SMS சேவைகள் குறித்த முக்கிய கேள்விகளுக்கான பதில்கள்",
  "faqSubtitle": "எங்கள் அதிவேக உள்கட்டமைப்பு உங்கள் டிஜிட்டல் சரிபார்ப்புகளை எவ்வாறு பாதுகாக்கிறது என்பதை அறியவும்.",
  "faqs": [
    {
      "q": "OTP SMS செய்திகள் எவ்வளவு விரைவாக டெலிவரி செய்யப்படும்?",
      "a": "சாதாரண நெட்வொர்க் சூழலில் எங்கள் முன்னுரிமைப் பாதைகள் மூலம் குறியீடுகள் சில நொடிகளில் பயனருக்குச் சென்றடையும்."
    },
    {
      "q": "ஒருங்கிணைப்புக்கு என்னென்ன API விருப்பங்கள் உள்ளன?",
      "a": "நாங்கள் தெளிவான REST API மற்றும் அதிக அளவு செய்திகளுக்கான SMPP v3.4 நெறிமுறையை வழங்குகிறோம்."
    },
    {
      "q": "SMS pumping மற்றும் மோசடிகளிலிருந்து தளத்தை எவ்வாறு பாதுகாக்கலாம்?",
      "a": "எங்கள் தளத்தில் உள்ளமைக்கப்பட்ட வேக வரம்பு கட்டுப்பாடுகள், சந்தேகத்திற்குரிய எண்களைத் தடுத்தல் மற்றும் IP அனுமதிப் பட்டியல்கள் மூலம் போலி போக்குவரத்தைத் தடுக்கலாம்."
    }
  ],
  "ctaBadge": "அங்கீகாரத்தை மேம்படுத்துங்கள்",
  "ctaTitle": "ஒவ்வொரு சரிபார்ப்பையும் வேகமாகவும், பாதுகாப்பாகவும், நம்பகமானதாகவும் ஆக்குங்கள்",
  "ctaSubtitle": "கணக்குப் பாதுகாப்பு மற்றும் கட்டண உறுதிப்படுத்தலுக்காக வடிவமைக்கப்பட்ட நம்பகமான OTP SMS சேவைகள் மூலம் உங்கள் வாடிக்கையாளர்களுக்கு பாதுகாப்பான டிஜிட்டல் சேவையை வழங்குங்கள்.",
  "contactUs": "OTP SMS உடன் தொடங்குங்கள்",
  "ctaFootnote": "முன்னுரிமைப் பாதைகள் மற்றும் API அமைப்புகள் பற்றிய கூடுதல் தகவல்களுக்கு எங்கள் நிபுணர்களைத் தொடர்பு கொள்ளுங்கள்."
};

const te: OtpSmsServicesTranslation = {
  "heroBadge": "OTP SMS సేవలు • ప్రామాణీకరణ మౌలిక సదుపాయాలు",
  "heroTitle": "ప్రతి ధృవీకరణ, సంపూర్ణ విశ్వసనీయత మరియు వేగంతో అనుసంధానించబడింది",
  "heroDesc": "అత్యున్నత విశ్వసనీయత కలిగిన OTP SMS సేవల ద్వారా కస్టమర్ ఖాతాలను రక్షించండి మరియు వినియోగదారు ధృవీకరణను సులభతరం చేయండి. అత్యల్ప జాప్యం కలిగిన టెలికాం ఇన్ఫ్రాస్ట్రక్చర్ ద్వారా లాగిన్‌లు, కొత్త రిజిస్ట్రేషన్‌లు, పాస్‌వర్డ్ రీసెట్‌లు మరియు ఆర్థిక లావాదేవీల ఆమోదం కోసం వన్-టైమ్ పాస్‌వర్డ్‌లను పంపండి.",
  "talkToExpert": "OTP నిపుణుడితో మాట్లాడండి",
  "exploreCapabilities": "సామర్థ్యాలను అన్వేషించండి",
  "stats": {
    "routing": "విశ్వసనీయ OTP",
    "routingLabel": "సకాలంలో తక్షణ డెలివరీ",
    "traffic": "సరళమైన API",
    "trafficLabel": "సులభమైన ఇంటిగ్రేషన్",
    "insights": "గ్లోబల్ రీచ్",
    "insightsLabel": "డైరెక్ట్ ఆపరేటర్ కనెక్టివిటీ"
  },
  "heroLiveBadge1": {
    "title": "తక్షణ డెలివరీ",
    "label": "అత్యల్ప జాప్యం కలిగిన ధృవీకరణ మార్గాలు"
  },
  "heroLiveBadge2": {
    "title": "క్యారియర్-గ్రేడ్ 2FA",
    "sub": "డైరెక్ట్ అత్యున్నత ప్రాధాన్యత రూటింగ్"
  },
  "whyBadge": "భద్రతా మౌలిక సదుపాయాలు",
  "whyTitle": "ప్రతి ధృవీకరణను రక్షించే పటిష్టమైన మెసేజింగ్ నెట్‌వర్క్",
  "whySubtitle1": "సకాలంలో డెలివరీ, సులభమైన సిస్టమ్ అనుసంధానం మరియు భారీ ట్రాఫిక్‌ను తట్టుకునేలా రూపొందించిన OTP SMS ద్వారా కస్టమర్ ప్రామాణీకరణను పటిష్టం చేయండి.",
  "whySubtitle2": "అంతర్జాతీయ మొబైల్ నెట్‌వర్క్‌లలో అతి తక్కువ జాప్యం మరియు అత్యధిక డెలివరీ రేట్లను అందించేలా ప్రత్యేకంగా రూపొందించబడింది.",
  "whyCards": [
    {
      "title": "విశ్వసనీయ OTP డెలివరీ",
      "desc": "అన్ని ప్రముఖ టెలికాం ఆపరేటర్లలో స్థిరమైన మరియు గరిష్ట డెలివరీని నిర్ధారించే డైరెక్ట్ రూట్ల ద్వారా వన్-టైమ్ పాస్‌వర్డ్‌లను పంపండి.",
      "footer": "గరిష్ట డెలివరీ హామీ"
    },
    {
      "title": "వేగవంతమైన ధృవీకరణ సందేశాలు",
      "desc": "క్షణాల్లో చేరే కోడ్‌లతో వినియోగదారులు తమ లాగిన్ మరియు ఖాతా ధృవీకరణ ప్రక్రియలను ఆలస్యం లేకుండా పూర్తి చేయడానికి సహాయపడండి.",
      "footer": "తక్కువ జాప్యం రూటింగ్"
    },
    {
      "title": "ఫ్లెక్సిబుల్ API ఇంటిగ్రేషన్",
      "desc": "ప్రామాణిక REST API మరియు SMPP ప్రోటోకాల్‌ల ద్వారా వెబ్‌సైట్‌లు, మొబైల్ యాప్‌లు మరియు బ్యాకెండ్ సిస్టమ్‌లకు OTP SMS ఫీచర్లను సులభంగా అనుసంధానించండి.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "స్కేలబుల్ ప్రామాణీకరణ",
      "desc": "యూజర్ల నమోదు పెరుగుదల, ఏకకాల లాగిన్ రద్దీ మరియు అధిక లావాదేవీల ధృవీకరణ పరిమాణాలను ఎలాంటి అవాంతరాలు లేకుండా నిర్వహించండి.",
      "footer": "అధిక సామర్థ్యం థ్రూపుట్"
    }
  ],
  "capabilitiesBadge": "సమగ్ర OTP ప్లాట్‌ఫారమ్",
  "capabilitiesTitle": "మీ వ్యాపార భద్రతా ప్రమాణాలకు అనుగుణంగా రూపొందించబడిన సమగ్ర OTP ప్లాట్‌ఫారమ్",
  "capabilitiesDesc": "నిత్య డిజిటల్ పరస్పర చర్యల నుండి కీలక వ్యాపార ప్రక్రియల వరకు విభిన్న ప్రామాణీకరణ దృశ్యాలకు మద్దతు ఇవ్వండి.",
  "designSolution": "వినియోగదారుల ధృవీకరణను ప్రారంభించండి",
  "solutionNote": "భారీ పరిమాణ 2FA, సురక్షిత లాగిన్ మరియు లావాదేవీల ప్రామాణీకరణ కోసం ప్రత్యేకంగా కాన్ఫిగర్ చేయబడింది.",
  "capabilities": [
    {
      "tag": "లాగిన్ 2FA",
      "title": "లాగిన్ ధృవీకరణ",
      "desc": "అనధికారిక యాక్సెస్‌ను నిరోధించడానికి లాగిన్ సమయంలో వన్-టైమ్ పాస్‌వర్డ్‌లను పంపడం ద్వారా ఖాతాల భద్రతను నిర్ధారించండి."
    },
    {
      "tag": "రిజిస్ట్రేషన్",
      "title": "కొత్త ఖాతా నమోదు",
      "desc": "నమోదు సమయంలో ఇచ్చిన మొబైల్ నంబర్ యొక్క వాస్తవ యాజమాన్యాన్ని తక్షణమే ధృవీకరించడం ద్వారా నకిలీ ఖాతాలను నివారించండి."
    },
    {
      "tag": "పాస్‌వర్డ్ రీసెట్",
      "title": "ఖాతా పునరుద్ధరణ",
      "desc": "అధీకృత పాస్‌వర్డ్ రీసెట్ అభ్యర్థనల కోసం సమయపాలన గల కోడ్‌లను పంపడం ద్వారా సురక్షిత ఖాతా పునరుద్ధరణను ప్రారంభించండి."
    },
    {
      "tag": "లావాదేవీలు",
      "title": "లావాదేవీల ప్రామాణీకరణ",
      "desc": "ఆన్‌లైన్ చెల్లింపులు మరియు నిధుల బదిలీలను ఆమోదించడానికి అదనపు SMS ధృవీకరణ దశను జోడించి మోసాలను అరికట్టండి."
    },
    {
      "tag": "గుర్తింపు తనిఖీ",
      "title": "మొబైల్ నంబర్ గుర్తింపు ధృవీకరణ",
      "desc": "కస్టమర్ ఆన్‌బోర్డింగ్ మరియు చట్టబద్ధమైన KYC ప్రక్రియల సమయంలో మొబైల్ నంబర్ యాజమాన్యాన్ని స్పష్టంగా ధృవీకరించండి."
    },
    {
      "tag": "యాప్ భద్రత",
      "title": "అప్లికేషన్ సెక్యూరిటీ",
      "desc": "కఠినమైన సమాచార భద్రతా ప్రమాణాలకు అనుగుణంగా వెబ్ మరియు మొబైల్ యాప్‌లలో నేరుగా OTP సందేశాలను అనుసంధానించండి."
    },
    {
      "tag": "ఆటోమేషన్",
      "title": "ఆటోమేటెడ్ OTP ట్రిగ్గర్స్",
      "desc": "ముందుగా నిర్వచించిన సిస్టమ్ ఈవెంట్‌లు మరియు భద్రతా నిబంధనల ఆధారంగా ధృవీకరణ కోడ్‌లను స్వయంచాలకంగా పంపండి."
    },
    {
      "tag": "భారీ పరిమాణం",
      "title": "భారీ పరిమాణ OTP మెసేజింగ్",
      "desc": "వ్యాపార వృద్ధి మరియు ప్రచారాల సమయంలో సెకనుకు వేలాది ధృవీకరణ అభ్యర్థనలను సమర్థవంతంగా ప్రాసెస్ చేయండి."
    }
  ],
  "howItWorksBadge": "ధృవీకరణ వర్క్‌ఫ్లో",
  "howItWorksTitle": "OTP డెలివరీ ప్రక్రియ ఎలా పనిచేస్తుంది",
  "howItWorksSubtitle": "API కాల్ నుండి మొబైల్ ఫోన్‌లో కోడ్ అందుకోవడం వరకు కేవలం కొన్ని సెకన్లలో పూర్తయ్యే ప్రక్రియ.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "వినియోగదారు అభ్యర్థన",
      "desc": "వినియోగదారు యాప్‌లో లాగిన్, రిజిస్ట్రేషన్ లేదా చెల్లింపు వంటి ప్రామాణీకరణ అవసరమైన చర్యను ప్రారంభిస్తారు.",
      "note": "అప్లికేషన్ ట్రిగ్గర్"
    },
    {
      "step": "02",
      "title": "API ద్వారా సబ్మిట్ చేయడం",
      "desc": "మీ సిస్టమ్ సురక్షితమైన REST API ఎండ్‌పాయింట్ల ద్వారా మా OTP గేట్‌వేకి తాత్కాలిక కోడ్‌ను పంపుతుంది.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "ప్రాధాన్యత క్యారియర్ రూటింగ్",
      "desc": "సందేశం అత్యున్నత ప్రాధాన్యత క్యూతో డైరెక్ట్ టెలికాం ఆపరేటర్ లైన్ల ద్వారా తక్షణమే డిస్పాచ్ చేయబడుతుంది.",
      "note": "తక్కువ జాప్యం రూటింగ్"
    },
    {
      "step": "04",
      "title": "మొబైల్‌లో అందుకోవడం & పూర్తి కావడం",
      "desc": "వినియోగదారు కోడ్‌ను అందుకుని ధృవీకరణను పూర్తి చేస్తారు; డెలివరీ స్థితి వెబ్‌హుక్ ద్వారా నిజ-సమయంలో అందించబడుతుంది.",
      "note": "రియల్-టైమ్ DLR రసీదు"
    }
  ],
  "networkBadge": "గ్లోబల్ SMS కవరేజ్",
  "networkTitle": "ధృవీకరణలను నిరంతరాయంగా ఉంచడానికి రూపొందించబడిన ప్రపంచ స్థాయి నెట్‌వర్క్",
  "networkDesc": "సురక్షిత ప్రామాణీకరణ పనుల కోసం ప్రత్యేకంగా అనుకూలీకరించిన డైరెక్ట్ SMS కనెక్టివిటీ ద్వారా ప్రపంచవ్యాప్త వినియోగదారులను చేరుకోండి.",
  "networkBullets": [
    "ప్రపంచవ్యాప్తంగా ప్రముఖ మొబైల్ నెట్‌వర్క్ ఆపరేటర్లతో డైరెక్ట్ SMS కనెక్టివిటీ",
    "ఇప్పటికే ఉన్న 2FA మరియు ప్రామాణీకరణ వ్యవస్థలతో సులభమైన ఏకీకరణ",
    "ట్రాఫిక్ రద్దీ సమయంలో స్వయంచాలకంగా విస్తరించే భారీ మెసేజ్ కెపాసిటీ",
    "రియల్-టైమ్ డెలివరీ రసీదుల (DLR) ద్వారా డెలివరీ స్థితి యొక్క పూర్తి పారదర్శకత",
    "ఆధునిక REST API మరియు ప్రామాణిక ప్రోటోకాల్‌ల ద్వారా సులభమైన నిర్వహణ",
    "సమయ-సున్నితమైన ధృవీకరణ ప్రక్రియల కోసం నిరంతర నిపుణుల సాంకేతిక మద్దతు"
  ],
  "networkStats": [
    {
      "val": "గ్లోబల్ కవరేజ్",
      "label": "అంతర్జాతీయ మొబైల్ ఆపరేటర్లతో ప్రత్యక్ష అనుసంధానం"
    },
    {
      "val": "ప్రాధాన్యత మార్గాలు",
      "label": "అత్యల్ప జాప్యంతో కూడిన ధృవీకరణ ట్రాఫిక్"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP క్యారియర్ గేట్‌వే",
    "sub": "సమయ-సున్నితమైన ప్రామాణీకరణల కోసం డైరెక్ట్ ప్రాధాన్యత రూటింగ్"
  },
  "networkFooterNote": "వాస్తవ డెలివరీ వేగం స్థానిక టెలికాం నిబంధనలు మరియు వినియోగదారుడి నెట్‌వర్క్ సిగ్నల్ పరిస్థితులపై ఆధారపడి ఉంటుంది.",
  "momentsBadge": "వినియోగ రంగాలు & పరిశ్రమలు",
  "momentsTitle": "ప్రతి కీలకమైన ధృవీకరణ క్షణం కోసం నిర్మించబడింది",
  "momentsSubtitle": "ఖాతా రక్షణ మరియు గుర్తింపు ధృవీకరణ అత్యవసరమైన అన్ని రంగాలలో OTP SMS డిజిటల్ భద్రతను కాపాడుతుంది.",
  "moments": [
    {
      "title": "బ్యాంకింగ్ మరియు ఆర్థిక సేవలు",
      "desc": "అత్యున్నత స్థాయి భద్రతతో కూడిన OTP ద్వారా ఖాతా లాగిన్‌లను మరియు నిధుల బదిలీలను రక్షించండి.",
      "footer": "ఆర్థిక 2FA & చెల్లింపు ఆమోదం"
    },
    {
      "title": "ఇ-కామర్స్ మరియు రిటైల్",
      "desc": "కొనుగోలుదారుల ఖాతాలను ధృవీకరించండి, లాగిన్‌లను రక్షించండి మరియు చెక్‌అవుట్ దశలో మోసాలను నివారించండి.",
      "footer": "రక్షిత చెక్‌అవుట్ & ఖాతా భద్రత"
    },
    {
      "title": "ప్రయాణం మరియు ఆతిథ్యం",
      "desc": "టికెట్ బుకింగ్‌లు, రిజర్వేషన్ యాక్సెస్ మరియు మార్పులను తక్షణ SMS ధృవీకరణ ద్వారా నిర్ధారించండి.",
      "footer": "బుకింగ్ ధృవీకరణ & ప్రయాణికుల భద్రత"
    },
    {
      "title": "డిజిటల్ ప్లాట్‌ఫారమ్‌లు & SaaS",
      "desc": "రిజిస్ట్రేషన్, పాస్‌వర్డ్ పునరుద్ధరణ మరియు బహుళ-పరికర లాగిన్‌లలో వన్-టైమ్ కోడ్‌లను పొందుపరచండి.",
      "footer": "సజావుగా ఆన్‌బోర్డింగ్ & నిరంతర రక్షణ"
    }
  ],
  "comparison": {
    "comparisonTitle": "OTP SMS డిజిటల్ ప్రామాణీకరణను ఎలా పటిష్టం చేస్తుందో చూడండి",
    "comparisonSubtitle": "మీ భద్రతా ప్రమాణాలు, వినియోగదారు సౌలభ్యం మరియు లక్ష్య వర్గానికి అత్యంత అనుకూలమైన పద్ధతిని ఎంచుకోండి.",
    "otpTitle": "OTP SMS",
    "otpBadge": "సార్వత్రిక మొబైల్ లభ్యత",
    "otpItems": [
      "ఏ మొబైల్ నంబర్‌కైనా నేరుగా వన్-టైమ్ కోడ్‌లను అందజేస్తుంది",
      "అదనపు యాప్‌లను డౌన్‌లోడ్ చేయకుండా అన్ని మొబైల్ ఫోన్లలో నేరుగా పనిచేస్తుంది",
      "భారీ నమోదులు, వేగవంతమైన లాగిన్‌లు మరియు అత్యవసర ఖాతా రికవరీకి ఉత్తమమైనది",
      "స్వీకర్త మొబైల్ ఆపరేటర్ నెట్‌వర్క్ సిగ్నల్ మరియు కవరేజ్ పరిస్థితులపై ఆధారపడి ఉంటుంది"
    ],
    "appTitle": "యాప్-ఆధారిత ప్రామాణీకరణ",
    "appBadge": "సాఫ్ట్‌వేర్ ప్రామాణీకరణ సాధనం",
    "appItems": [
      "ప్రత్యేక యాప్‌లో కోడ్‌లు లేదా పుష్ అనుమతి నోటిఫికేషన్‌లను ఉత్పత్తి చేస్తుంది",
      "Wi-Fi కనెక్టివిటీ ఉంటే సెల్యులార్ సిగ్నల్ లేకపోయినా పనిచేయగలదు",
      "వినియోగదారు ముందుగానే యాప్‌ను డౌన్‌లోడ్ చేసి కాన్ఫిగర్ చేసుకోవడం అవసరం",
      "ఆర్కిటెక్చర్ ఆధారంగా అదనపు క్రిప్టోగ్రాఫిక్ భద్రతా ఫీచర్లను అందిస్తుంది"
    ],
    "securityNotice": "భద్రతా సిఫార్సు: OTP SMS మొబైల్ నంబర్ యాజమాన్యాన్ని సమర్థవంతంగా నిర్ధారిస్తుంది, అయితే ఇది SIM స్వాపింగ్ (SIM Swap) ప్రమాదాలకు గురయ్యే అవకాశం ఉంది. అత్యంత విలువైన ఆర్థిక వ్యవస్థల కోసం బహుళ-కారకాల రిస్క్ నియంత్రణలను జోడించండి."
  },
  "intelligenceBadge": "తెలివైన డెలివరీ వ్యవస్థ",
  "intelligenceTitle": "సెకన్లలో డెలివరీ & రియల్-టైమ్ స్టేటస్ రిపోర్టింగ్",
  "intelligenceDesc": "వినియోగదారులు ఆలస్యాన్ని ఎదుర్కోకుండా ఉండేందుకు డెలివరీ మెట్రిక్స్, ఆపరేటర్ ప్రతిస్పందన సమయాలు మరియు DLR స్టేటస్‌లను నిరంతరం పర్యవేక్షించండి.",
  "intelligenceBullets": [
    "కోడ్‌లను తక్షణమే పంపడానికి అత్యున్నత ప్రాధాన్యత క్యూ వ్యవస్థ",
    "స్థితిని స్పష్టంగా తెలుసుకోవడానికి రియల్-టైమ్ DLR వెబ్‌హుక్స్",
    "గరిష్ట డెలివరీ విజయాన్ని నిర్ధారించడానికి ఆటోమేటిక్ రూట్ ఫెయిల్‌ఓవర్",
    "దేశం మరియు టెలికాం ఆపరేటర్ల వారీగా వివరణాత్మక జాప్యం విశ్లేషణ బోర్డు"
  ],
  "intelligenceFootnote": "కోడ్ వినియోగదారు మొబైల్‌కు చేరిన అదే క్షణంలో మీ సర్వర్లు వెబ్‌హుక్ ద్వారా నోటిఫికేషన్‌ను అందుకుంటాయి.",
  "messageLogCard": {
    "title": "లైవ్ OTP డెలివరీ మానిటరింగ్ లాగ్",
    "badge": "ప్రాధాన్యత DLR",
    "tab1": "డెలివరీ చేయబడింది",
    "tab2": "క్యూలో ఉంది",
    "tab3": "ధృవీకరించబడింది",
    "colType": "రకం",
    "colState": "స్థితి",
    "colReceipt": "ఆపరేటర్ జాప్యం",
    "row1Type": "లాగిన్ OTP",
    "row1State": "డెలివరీ చేయబడింది",
    "row1Receipt": "1.2 సెకన్లు డివైస్ DLR",
    "row2Type": "పాస్‌వర్డ్ రీసెట్",
    "row2State": "డెలివరీ చేయబడింది",
    "row2Receipt": "0.9 సెకన్లు డివైస్ DLR",
    "row3Type": "చెల్లింపు ఆమోదం",
    "row3State": "డెలివరీ చేయబడింది",
    "row3Receipt": "1.1 సెకన్లు డివైస్ DLR",
    "footerText": "అంతర్జాతీయ మొబైల్ నెట్‌వర్క్‌లలో సెకన్లలో ధృవీకరణ డెలివరీ"
  },
  "protectionTitle": "కీలకమైన ధృవీకరణ పనుల కోసం నిర్మించిన భద్రత",
  "protectionBadge": "భద్రత & నిబంధనల పాటించటం",
  "protectionCards": [
    {
      "title": "రేట్ లిమిటింగ్ & దుర్వినియోగ నివారణ",
      "desc": "కాన్ఫిగర్ చేయగల వేగ పరిమితులతో బ్రూట్-ఫోర్స్ దాడులు మరియు అనవసరపు SMS pumping మోసాల నుండి మీ సిస్టమ్‌ను రక్షించండి."
    },
    {
      "title": "గ్లోబల్ సెండర్ ID (Sender ID) సమ్మతి",
      "desc": "గమ్యస్థాన దేశాల స్థానిక టెలికాం చట్టాలకు అనుగుణంగా అధికారిక పంపినవారి పేరు నమోదు మరియు చట్టబద్ధమైన సమ్మతిని నిర్ధారించండి."
    }
  ],
  "timelineBadge": "క్రమబద్ధమైన అమలు ప్రణాళిక",
  "timelineTitle": "API అనుసంధానం నుండి లైవ్ ప్రారంభం వరకు దశలవారీ ప్రక్రియ",
  "timelineSubtitle": "మీ ప్లాట్‌ఫారమ్ భద్రతా ప్రమాణాలు మరియు ట్రాఫిక్ పరిమాణానికి సరిపోయే పద్ధతిలో OTP SMS-ను ప్రారంభించండి.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "అవసరాల విశ్లేషణ",
      "desc": "లక్ష్య దేశాలు, అంచనా వేసిన సందేశాల పరిమాణం మరియు ధృవీకరణ దృశ్యాలను స్పష్టంగా నిర్వచించండి."
    },
    {
      "step": "02",
      "title": "వర్క్‌ఫ్లో డిజైన్",
      "desc": "కోడ్ చెల్లుబాటు వ్యవధి, పునఃప్రయత్న పరిమితులు మరియు సందేశ టెంప్లేట్ ఫార్మాట్‌లను సెట్ చేయండి."
    },
    {
      "step": "03",
      "title": "API ఇంటిగ్రేషన్",
      "desc": "మా సురక్షిత REST API లేదా ఎంటర్‌ప్రైజ్ SMPP ప్రోటోకాల్ ద్వారా మీ సిస్టమ్‌ను గేట్‌వేకి కనెక్ట్ చేయండి."
    },
    {
      "step": "04",
      "title": "పరీక్ష మరియు ధృవీకరణ",
      "desc": "శాండ్‌బాక్స్ వాతావరణంలో డెలివరీ వేగం, లోపాల నిర్వహణ మరియు వినియోగదారు అనుభవాన్ని పూర్తిగా పరీక్షించండి."
    },
    {
      "step": "05",
      "title": "లైవ్ డిప్లాయ్‌మెంట్",
      "desc": "నిరంతర నాణ్యత పర్యవేక్షణ మరియు సాంకేతిక మద్దతుతో అధికారిక లైవ్ ట్రాఫిక్‌ను ప్రారంభించండి."
    }
  ],
  "integrationPlan": {
    "title": "OTP ఇంటిగ్రేషన్ సాంకేతిక లక్షణాలు",
    "planBadge": "ప్రొడక్షన్ రెడీ",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "సమయ-సున్నితమైన 2FA మరియు భద్రతా కోడ్‌లు",
    "formats": "సంఖ్యా OTP, ఆల్ఫాన్యూమరిక్ టోకెన్లు",
    "feedback": "రియల్-టైమ్ DLR డెలివరీ రసీదులు",
    "senderSetup": "నమోదిత సెండర్ ID / షార్ట్ కోడ్",
    "check1": "గడువు ముగింపు టైమర్‌లు మరియు వేగ పరిమితి నిబంధనలు అమర్చబడ్డాయి",
    "check2": "బ్యాకప్ మార్గాలు మరియు స్టేటస్ వెబ్‌హుక్స్ పూర్తిగా సిద్ధంగా ఉన్నాయి",
    "discussNote": "మీ సేవల కోసం ఆదర్శవంతమైన ప్రామాణీకరణ నిర్మాణాన్ని రూపొందించడానికి మా ఇంజనీరింగ్ బృందంతో చర్చించండి.",
    "discussBtn": "ఇంటిగ్రేషన్ ప్రారంభించండి"
  },
  "faqBadge": "తరచుగా అడిగే ప్రశ్నలు",
  "faqTitle": "OTP SMS సేవల గురించి ముఖ్యమైన సందేహాలు మరియు సమాధానాలు",
  "faqSubtitle": "మా అత్యల్ప జాప్య మౌలిక సదుపాయాలు మీ డిజిటల్ ధృవీకరణలను ఎలా కాపాడుతాయో తెలుసుకోండి.",
  "faqs": [
    {
      "q": "OTP SMS సందేశాలు ఎంత త్వరగా డెలివరీ చేయబడతాయి?",
      "a": "సాధారణ సెల్యులార్ నెట్‌వర్క్ పరిస్థితులలో మా ప్రాధాన్యత మార్గాల ద్వారా కోడ్‌లు కొన్ని సెకన్లలో వినియోగదారుడి మొబైల్‌కు చేరతాయి."
    },
    {
      "q": "సిస్టమ్ అనుసంధానం కోసం ఏ API ఎంపికలు అందుబాటులో ఉన్నాయి?",
      "a": "మేము ఉదాహరణ కోడ్‌లతో కూడిన డెవలపర్-స్నేహపూర్వక REST API మరియు భారీ ట్రాఫిక్ కోసం SMPP v3.4 ప్రోటోకాల్‌ను అందిస్తున్నాము."
    },
    {
      "q": "SMS pumping మరియు మోసపూరిత ట్రాఫిక్ నుండి సిస్టమ్‌ను ఎలా రక్షించుకోవచ్చు?",
      "a": "మా ప్లాట్‌ఫారమ్ అంతర్నిర్మిత రేట్ లిమిట్స్, అనుమానాస్పద నంబర్ల బ్లాకింగ్ మరియు IP శ్వేతజాబితా (Whitelist) ఫీచర్లను అందిస్తుంది."
    }
  ],
  "ctaBadge": "ప్రామాణీకరణను అప్‌గ్రేడ్ చేయండి",
  "ctaTitle": "ప్రతి ధృవీకరణను వేగవంతంగా, సురక్షితంగా మరియు విశ్వసనీయంగా మార్చండి",
  "ctaSubtitle": "ఖాతా రక్షణ మరియు చెల్లింపుల ధృవీకరణ కోసం ప్రత్యేకంగా రూపొందించిన అత్యున్నత నాణ్యత గల OTP SMS సేవల ద్వారా మీ వినియోగదారులకు భద్రతను అందించండి.",
  "contactUs": "OTP SMS తో ప్రారంభించండి",
  "ctaFootnote": "ప్రాధాన్యత మార్గాలు మరియు API కాన్ఫిగరేషన్‌ల గురించి మరింత సమాచారం కోసం మా నిపుణులను సంప్రదించండి."
};

const mr: OtpSmsServicesTranslation = {
  "heroBadge": "OTP एसएमएस सेवा • प्रमाणीकरण पायाभूत सुविधा",
  "heroTitle": "प्रत्येक पडताळणी, संपूर्ण विश्वासार्हता आणि सर्वोच्च वेगाने जोडलेली",
  "heroDesc": "अत्युच्च विश्वासार्हतेच्या OTP SMS सेवांसह ग्राहक खाती सुरक्षित करा आणि वापरकर्ता पडताळणी प्रक्रिया सुलभ बनवा. लॉगिन, नवीन नोंदणी, पासवर्ड रीसेट आणि आर्थिक व्यवहार मंजुरीसाठी आंतरराष्ट्रीय दूरसंचार नेटवर्कद्वारे वन-टाइम पासवर्ड (OTP) पाठवा.",
  "talkToExpert": "OTP तज्ञांशी चर्चा करा",
  "exploreCapabilities": "वैशिष्ट्ये जाणून घ्या",
  "stats": {
    "routing": "विश्वसनीय OTP",
    "routingLabel": "अचूक वेळेत वितरण",
    "traffic": "सोपे API",
    "trafficLabel": "लवचिक प्रणाली एकत्रीकरण",
    "insights": "जागतिक पोहोच",
    "insightsLabel": "थेट ऑपरेटर जोडणी"
  },
  "heroLiveBadge1": {
    "title": "तत्काळ वितरण",
    "label": "अति-कमी विलंबाचे पडताळणी मार्ग"
  },
  "heroLiveBadge2": {
    "title": "कॅरियर-ग्रेड 2FA",
    "sub": "थेट सर्वोच्च प्राधान्य राउटिंग"
  },
  "whyBadge": "सुरक्षा पायाभूत सुविधा",
  "whyTitle": "प्रत्येक पडताळणीचे रक्षण करणारी संदेशवहन प्रणाली",
  "whySubtitle1": "वेळेवर पोहोचणे, सुलभ ॲप्लिकेशन एकत्रीकरण आणि मोठ्या प्रमाणातील संदेश वहनासाठी तयार केलेल्या OTP सेवांसह सुरक्षित ग्राहक प्रमाणीकरण सुनिश्चित करा.",
  "whySubtitle2": "आंतरराष्ट्रीय मोबाइल नेटवर्कवर किमान विलंब आणि सर्वोच्च वितरण दर राखण्यासाठी विशेष रचना.",
  "whyCards": [
    {
      "title": "विश्वसनीय OTP वितरण",
      "desc": "समर्थित देशांमध्ये आणि मोबाइल नेटवर्कवर सातत्यपूर्ण उच्च वितरण दर राखणाऱ्या थेट मार्गांद्वारे वन-टाइम पासवर्ड पाठवा.",
      "footer": "उच्च वितरण हमी"
    },
    {
      "title": "जलद पडताळणी संदेश",
      "desc": "काही सेकंदात पोहोचणाऱ्या कोड्समुळे वापरकर्त्यांना लॉगिन आणि सुरक्षा प्रक्रिया जलद पूर्ण करण्यास मदत करा.",
      "footer": "कमी विलंबाचे राउटिंग"
    },
    {
      "title": "लवचिक API एकत्रीकरण",
      "desc": "प्रमाणित REST API आणि SMPP द्वारे वेबसाइट्स, मोबाइल ॲप्स आणि बॅकएंड सिस्टम्सशी OTP SMS कार्यक्षमता सहज जोडा.",
      "footer": "REST API आणि SMPP"
    },
    {
      "title": "स्केलेबल प्रमाणीकरण",
      "desc": "नोंदणीतील वाढ, एकाच वेळी होणारे लॉगिन आणि व्यवहारांची पडताळणी गर्दीच्या वेळीही विनाअडथळा हाताळा.",
      "footer": "मोठ्या क्षमतेचा थ्रूपुट"
    }
  ],
  "capabilitiesBadge": "सर्वसमावेशक OTP प्लॅटफॉर्म",
  "capabilitiesTitle": "तुमच्या व्यवसाय गरजांनुसार तयार केलेले एकात्मिक OTP प्लॅटफॉर्म",
  "capabilitiesDesc": "दैनंदिन डिजिटल व्यवहारांपासून ते अत्यंत महत्त्वाच्या व्यावसायिक प्रक्रियेपर्यंत सर्व प्रमाणीकरण टप्प्यांना बळकट करा.",
  "designSolution": "वापरकर्ता पडताळणी सुरू करा",
  "solutionNote": "मोठ्या प्रमाणातील 2FA, सुरक्षित लॉगिन आणि आर्थिक व्यवहार पडताळणीसाठी विशेषतः कॉन्फिगर केलेले.",
  "capabilities": [
    {
      "tag": "लॉगिन 2FA",
      "title": "लॉगिन पडताळणी",
      "desc": "अनधिकृत प्रवेश रोखण्यासाठी लॉगिनच्या वेळी वन-टाइम पासवर्ड पाठवून खात्यांची सुरक्षा सुनिश्चित करा."
    },
    {
      "tag": "नोंदणी",
      "title": "नवीन खाते नोंदणी",
      "desc": "दिलेल्या मोबाइल नंबरची खरी मालकी तत्काळ तपासून नवीन वापरकर्ता नोंदणीची खात्री करा."
    },
    {
      "tag": "पासवर्ड रीसेट",
      "title": "सुरक्षित खाते पुनर्प्राप्ती",
      "desc": "वैध पासवर्ड रीसेट विनंत्यांसाठी तात्पुरते कोड्स पाठवून सुरक्षित खाते पुनर्प्राप्ती सुलभ करा."
    },
    {
      "tag": "व्यवहार",
      "title": "व्यवहार प्रमाणीकरण",
      "desc": "ऑनलाइन पेमेंट आणि निधी हस्तांतरण मंजूर करण्यासाठी अतिरिक्त SMS पडताळणी टप्पा जोडून सुरक्षितता वाढवा."
    },
    {
      "tag": "ओळख पडताळणी",
      "title": "मोबाइल नंबर मालकी पडताळणी",
      "desc": "ग्राहक ऑनबोर्डिंग आणि कायदेशीर KYC प्रक्रियेदरम्यान मोबाइल नंबरची वैधता तपासा."
    },
    {
      "tag": "ॲप सुरक्षा",
      "title": "ॲप्लिकेशन सुरक्षा",
      "desc": "माहिती सुरक्षा मानकांची पूर्तता करण्यासाठी थेट वेब आणि मोबाइल ॲप्समध्ये OTP संदेशवहन समाविष्ट करा."
    },
    {
      "tag": "स्वयंचलित",
      "title": "स्वयंचलित OTP ट्रिगर्स",
      "desc": "प्रणालीतील विशिष्ट घटना आणि सुरक्षा नियमांवर आधारित पडताळणी कोड्स आपोआप पाठवा."
    },
    {
      "tag": "मोठी क्षमता",
      "title": "मोठ्या प्रमाणातील OTP संदेशवहन",
      "desc": "व्यवसायाच्या वाढत्या मागणीनुसार दर सेकंदाला हजारो पडताळणी विनंत्या सुरक्षितपणे हाताळा."
    }
  ],
  "howItWorksBadge": "पडताळणी कार्यप्रणाली",
  "howItWorksTitle": "OTP वितरण प्रक्रिया कशी कार्य करते",
  "howItWorksSubtitle": "API कॉलपासून मोबाइल फोनवर कोड मिळेपर्यंत काही सेकंदात पूर्ण होणारी प्रक्रिया.",
  "howItWorksSteps": [
    {
      "step": "०१",
      "title": "वापरकर्त्याची विनंती",
      "desc": "वापरकर्ता ॲपमध्ये लॉगिन, नोंदणी किंवा पेमेंट यासारखी पडताळणी आवश्यक असणारी कृती सुरू करतो.",
      "note": "ॲप्लिकेशन ट्रिगर"
    },
    {
      "step": "०२",
      "title": "API द्वारे पाठवणे",
      "desc": "तुमची सिस्टीम सुरक्षित REST API एंडपॉइंट्सद्वारे आमच्या OTP गेटवेकडे तात्पुरता कोड पाठवते.",
      "note": "REST API / SMPP"
    },
    {
      "step": "०३",
      "title": "प्राधान्य कॅरियर राउटिंग",
      "desc": "संदेश सर्वोच्च प्राधान्य रांगेसह थेट मोबाइल ऑपरेटर मार्गांवरून तत्काळ रवाना केला जातो.",
      "note": "कमी विलंबाचे राउटिंग"
    },
    {
      "step": "०४",
      "title": "फोनवर कोड मिळणे व पडताळणी",
      "desc": "वापरकर्त्याला कोड मिळतो आणि तो पडताळणी पूर्ण करतो; वितरण स्थिती वेबहुकद्वारे लगेच कळवली जाते.",
      "note": "रिअल-टाइम DLR पावती"
    }
  ],
  "networkBadge": "जागतिक SMS कव्हरेज",
  "networkTitle": "पडताळणी अविरत सुरू ठेवण्यासाठी सज्ज असलेले जागतिक नेटवर्क",
  "networkDesc": "सुरक्षित प्रमाणीकरण कामांसाठी थेट SMS कनेक्टिव्हिटीद्वारे जगभरातील वापरकर्त्यांपर्यंत पोहोचा.",
  "networkBullets": [
    "जगभरातील आघाडीच्या मोबाइल नेटवर्क ऑपरेटर्सशी थेट SMS जोडणी",
    "विद्यमान 2FA आणि प्रमाणीकरण प्रणालींशी अखंड एकात्मता",
    "वाढत्या गरजेनुसार आपोआप वाढणारी संदेशवहन क्षमता",
    "रिअल-टाइम डिलिव्हरी रिपोर्ट्स (DLR) द्वारे वितरणाची पूर्ण पारदर्शकता",
    "आधुनिक REST API आणि उद्योग मानक प्रोटोकॉल्सद्वारे सोपे व्यवस्थापन",
    "वेळेस अत्यंत संवेदनशील असणाऱ्या पडताळणी प्रक्रियांसाठी विशेष तांत्रिक साहाय्य"
  ],
  "networkStats": [
    {
      "val": "जागतिक कव्हरेज",
      "label": "आंतरराष्ट्रीय मोबाइल ऑपरेटर्सशी थेट इंटरकनेक्शन"
    },
    {
      "val": "प्राधान्य मार्ग",
      "label": "किमान विलंबासह तातडीचा पडताळणी ट्रॅफिक"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP कॅरियर गेटवे",
    "sub": "वेळेस संवेदनशील प्रमाणीकरणासाठी थेट प्राधान्य राउटिंग"
  },
  "networkFooterNote": "प्रत्यक्ष वितरण गती स्थानिक दूरसंचार नियम आणि वापरकर्त्याच्या नेटवर्क परिस्थितीवर अवलंबून असते.",
  "momentsBadge": "वापर क्षेत्रे आणि उद्योग",
  "momentsTitle": "प्रत्येक महत्त्वाच्या पडताळणी क्षणासाठी निर्मित",
  "momentsSubtitle": "जिथे ओळख पडताळणी आणि खात्याची सुरक्षितता अत्यावश्यक आहे, तिथे OTP SMS डिजिटल विश्वास टिकवून ठेवतो.",
  "moments": [
    {
      "title": "बँकिंग आणि वित्तीय सेवा",
      "desc": "उच्च सुरक्षिततेच्या OTP प्रक्रियेद्वारे खाते लॉगिन आणि निधी हस्तांतरण सुरक्षित ठेवा.",
      "footer": "आर्थिक 2FA आणि पेमेंट मंजुरी"
    },
    {
      "title": "ई-कॉमर्स आणि किरकोळ विक्री",
      "desc": "ग्राहकांची खाती पडताळा, लॉगिन सुरक्षित करा आणि चेकआउट टप्प्यावर होणारी फसवणूक टाळा.",
      "footer": "सुरक्षित चेकआउट आणि खाते संरक्षण"
    },
    {
      "title": "प्रवास आणि आदरातिथ्य",
      "desc": "तिकीट बुकिंग, आरक्षण तपशील आणि बदल त्वरित SMS पडताळणीद्वारे निश्चित करा.",
      "footer": "बुकिंग पडताळणी आणि प्रवाशांची सुरक्षा"
    },
    {
      "title": "डिजिटल प्लॅटफॉर्म्स आणि SaaS",
      "desc": "नोंदणी, पासवर्ड पुनर्प्राप्ती आणि अनेक उपकरणांवर लॉगिन प्रक्रियेत वन-टाइम कोड्स समाविष्ट करा.",
      "footer": "सुलभ ऑनबोर्डिंग आणि कायमस्वरूपी संरक्षण"
    }
  ],
  "comparison": {
    "comparisonTitle": "OTP SMS डिजिटल प्रमाणीकरण कसे बळकट करतो ते पहा",
    "comparisonSubtitle": "तुमच्या सुरक्षा गरजा, वापरकर्ता अनुभव आणि लक्षित ग्राहकांनुसार योग्य पद्धत निवडा.",
    "otpTitle": "OTP SMS",
    "otpBadge": "सर्व उपकरणांवर थेट उपलब्धता",
    "otpItems": [
      "कोणत्याही मोबाइल नंबरवर थेट वन-टाइम पासवर्ड पोहोचवतो",
      "कोणतेही अतिरिक्त ॲप डाऊनलोड न करता सर्व फोनवर थेट कार्य करतो",
      "मोठ्या प्रमाणातील नोंदणी, जलद लॉगिन आणि खाते पुनर्प्राप्तीसाठी सर्वोत्तम",
      "प्राप्तकर्त्याच्या मोबाइल नेटवर्क कव्हरेज आणि सिग्नलवर अवलंबून"
    ],
    "appTitle": "ॲप-आधारित प्रमाणीकरण",
    "appBadge": "सॉफ्टवेअर ऑथेंटिकेटर",
    "appItems": [
      "एका विशिष्ट ॲपमध्ये कोड्स किंवा पुश सूचना जनरेट करतो",
      "वाय-फाय कनेक्टिव्हिटी असल्यास सेल्युलर नेटवर्क नसतानाही काम करू शकतो",
      "वापरकर्त्याने आधीच ॲप डाऊनलोड करून सेटअप करणे आवश्यक आहे",
      "प्रणालीच्या रचनेनुसार अतिरिक्त क्रिप्टोग्राफिक सुरक्षा वैशिष्ट्ये प्रदान करतो"
    ],
    "securityNotice": "सुरक्षा सल्ला: OTP SMS मोबाइल नंबरची मालकी पडताळण्यासाठी अत्यंत प्रभावी आहे, परंतु SIM Swap हल्ल्यांचा धोका असू शकतो. अतिसंवेदनशील वित्तीय प्रणालींसाठी बहु-घटक जोखीम नियंत्रणे वापरा."
  },
  "intelligenceBadge": "बुद्धिमान वितरण प्रणाली",
  "intelligenceTitle": "काही सेकंदात डिलिव्हरी आणि रिअल-टाइम स्टेटस रिपोर्टिंग",
  "intelligenceDesc": "वापरकर्त्यांना विलंबाचा सामना करावा लागू नये म्हणून वितरण दर, ऑपरेटर प्रतिसाद वेळ आणि DLR स्थितीचे सतत निरीक्षण करा.",
  "intelligenceBullets": [
    "कोड्स तत्काळ पाठवण्यासाठी सर्वोच्च प्राधान्य रांग व्यवस्था",
    "स्थिती लगेच समजण्यासाठी रिअल-टाइम DLR वेबहुक्स",
    "सर्वोच्च वितरण यश दर राखण्यासाठी स्वयंचलित मार्ग बदल (failover)",
    "देश आणि दूरसंचार ऑपरेटरनुसार तपशीलवार विलंब विश्लेषण डॅशबोर्ड"
  ],
  "intelligenceFootnote": "कोड वापरकर्त्याच्या फोनवर पोहोचल्याच्या क्षणीच तुमच्या सर्व्हर्सना वेबहुकद्वारे सूचना मिळते.",
  "messageLogCard": {
    "title": "थेट OTP वितरण मॉनिटरिंग लॉग",
    "badge": "प्राधान्य DLR",
    "tab1": "वितरित",
    "tab2": "रांगेत",
    "tab3": "पडताळणी पूर्ण",
    "colType": "प्रकार",
    "colState": "स्थिती",
    "colReceipt": "ऑपरेटर विलंब",
    "row1Type": "लॉगिन OTP",
    "row1State": "वितरित",
    "row1Receipt": "१.२ सेकंद डिव्हाइस DLR",
    "row2Type": "पासवर्ड रीसेट",
    "row2State": "वितरित",
    "row2Receipt": "०.९ सेकंद डिव्हाइस DLR",
    "row3Type": "पेमेंट मंजुरी",
    "row3State": "वितरित",
    "row3Receipt": "१.१ सेकंद डिव्हाइस DLR",
    "footerText": "जागतिक मोबाइल नेटवर्कवर सेकंदात पडताळणी वितरण"
  },
  "protectionTitle": "महत्त्वाच्या पडताळणी कामांसाठी तयार केलेली सुरक्षा",
  "protectionBadge": "सुरक्षा आणि कायदेशीर अनुपालन",
  "protectionCards": [
    {
      "title": "दर मर्यादा आणि फसवणूक प्रतिबंध",
      "desc": "कॉन्फिगर करण्यायोग्य गती मर्यादांसह ब्रूट-फोर्स हल्ले आणि महागड्या SMS pumping फसवणुकीपासून सिस्टम सुरक्षित ठेवा."
    },
    {
      "title": "जागतिक प्रेषक आयडी (Sender ID) अनुपालन",
      "desc": "गंतव्य देशांमधील स्थानिक दूरसंचार नियमांनुसार अधिकृत प्रेषक नाव नोंदणी आणि कायदेशीर नियमांचे पालन सुनिश्चित करा."
    }
  ],
  "timelineBadge": "पद्धतशीर अंमलबजावणी योजना",
  "timelineTitle": "API जोडणीपासून ते थेट सेवा सुरू करण्यापर्यंतचे टप्पे",
  "timelineSubtitle": "तुमच्या प्लॅटफॉर्मच्या सुरक्षा मानकांशी सुसंगत अशा व्यवस्थित प्रक्रियेद्वारे OTP SMS सेवा सुरू करा.",
  "timelineSteps": [
    {
      "step": "०१",
      "title": "गरजांचे विश्लेषण",
      "desc": "लक्षित देश, अंदाजे संदेश क्षमता आणि विशिष्ट पडताळणी प्रवाह निश्चित करा."
    },
    {
      "step": "०२",
      "title": "वर्कफ्लो रचना",
      "desc": "कोडची वैधता वेळ, पुन्हा पाठवण्याची मर्यादा आणि संदेश मसुदा स्वरूप सेट करा."
    },
    {
      "step": "०३",
      "title": "API जोडणी",
      "desc": "आमच्या सुरक्षित REST API किंवा एंटरप्राइझ SMPP प्रोटोकॉलद्वारे तुमची प्रणाली जोडा."
    },
    {
      "step": "०४",
      "title": "चाचणी आणि पडताळणी",
      "desc": "सँडबॉक्स वातावरणात वितरण वेग, त्रुटी हाताळणी आणि वापरकर्ता अनुभव तपासा."
    },
    {
      "step": "०५",
      "title": "थेट सेवा सुरू",
      "desc": "तांत्रिक देखरेख आणि सतत समर्थनासह प्रत्यक्ष संदेशवहन सुरू करा."
    }
  ],
  "integrationPlan": {
    "title": "OTP एकत्रीकरण तांत्रिक तपशील",
    "planBadge": "उत्पादनासाठी सज्ज",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "वेळेस संवेदनशील 2FA आणि सुरक्षा कोड्स",
    "formats": "संख्यात्मक OTP, अल्फान्यूमेरिक टोकन्स",
    "feedback": "रिअल-टाइम DLR वितरण पावत्या",
    "senderSetup": "नोंदणीकृत सेंडर आयडी / शॉर्ट कोड",
    "check1": "कालबाह्यता टायमर्स आणि गती मर्यादा नियम सक्रिय केले आहेत",
    "check2": "बॅकअप मार्ग आणि स्टेटस वेबहुक्स पूर्णपणे कार्यरत आहेत",
    "discussNote": "तुमच्या सेवेसाठी योग्य प्रमाणीकरण आर्किटेक्चर तयार करण्यासाठी आमच्या तज्ञांशी चर्चा करा.",
    "discussBtn": "एकत्रीकरण सुरू करा"
  },
  "faqBadge": "वारंवार विचारले जाणारे प्रश्न",
  "faqTitle": "OTP SMS सेवेबद्दल महत्त्वाची माहिती",
  "faqSubtitle": "आमची अति-कमी विलंबाची पायाभूत सुविधा तुमच्या डिजिटल पडताळणीचे रक्षण कसे करते ते जाणून घ्या.",
  "faqs": [
    {
      "q": "OTP SMS संदेश किती लवकर पोहोचतात?",
      "a": "सर्वसामान्य नेटवर्क परिस्थितीत आमच्या प्राधान्य मार्गांद्वारे कोड्स काही सेकंदात वापरकर्त्याच्या फोनवर पोहोचतात."
    },
    {
      "q": "प्रणाली जोडणीसाठी कोणते API पर्याय उपलब्ध आहेत?",
      "a": "आम्ही तपशीलवार दस्तऐवजीकरणासह सुलभ REST API आणि मोठ्या ट्रॅफिकसाठी SMPP v3.4 प्रोटोकॉल प्रदान करतो."
    },
    {
      "q": "SMS pumping आणि फसवणुकीपासून स्वतःचे रक्षण कसे करावे?",
      "a": "आमच्या प्लॅटफॉर्मवर अंगभूत दर मर्यादा, संशयास्पद देश ब्लॉक आणि IP व्हाइटलिस्ट सुविधा आहेत ज्या नको असलेला ट्रॅफिक रोखतात."
    }
  ],
  "ctaBadge": "प्रमाणीकरण अपग्रेड करा",
  "ctaTitle": "प्रत्येक पडताळणी जलद, सुरक्षित आणि १००% विश्वासार्ह बनवा",
  "ctaSubtitle": "खाते सुरक्षा आणि आर्थिक व्यवहारांसाठी विशेषतः तयार केलेल्या OTP SMS सेवेसह ग्राहकांना सुरक्षित डिजिटल अनुभव द्या.",
  "contactUs": "OTP SMS सह सुरू करा",
  "ctaFootnote": "प्राधान्य राउटिंग आणि API कॉन्फिगरेशनबद्दल अधिक जाणून घेण्यासाठी आमच्या तज्ञांशी संपर्क साधा."
};

const sw: OtpSmsServicesTranslation = {
  "heroBadge": "HUDUMA ZA SMS OTP • MIUNDOMBINU YA UTAMBULISHO",
  "heroTitle": "Kila uthibitishaji, umeunganishwa kwa uhakika na kasi ya juu",
  "heroDesc": "Linda akaunti za wateja na kurahisisha mchakato wa uthibitishaji wa watumiaji ukitumia huduma za SMS OTP zenye uaminifu wa hali ya juu. Tuma nywila za mara moja (OTP) kwa ajili ya kuingia, usajili, kubadilisha nywila na uthibitishaji wa miamala kupitia miundombinu ya mawasiliano ya simu yenye ucheleweshaji mdogo zaidi.",
  "talkToExpert": "Wasiliana na Mtaalamu wa OTP",
  "exploreCapabilities": "Gundua Uwezo",
  "stats": {
    "routing": "OTP ya Kuaminika",
    "routingLabel": "Uwasilishaji wa Papo Hapo",
    "traffic": "API Rahisi",
    "trafficLabel": "Muunganisho Rahisi wa Mifumo",
    "insights": "Ufikiaji wa Ulimwenguni",
    "insightsLabel": "Muunganisho wa Moja kwa Moja na Opereta"
  },
  "heroLiveBadge1": {
    "title": "Uwasilishaji wa Haraka",
    "label": "Njia za uthibitishaji zenye ucheleweshaji mdogo"
  },
  "heroLiveBadge2": {
    "title": "2FA ya Kiwango cha Opereta",
    "sub": "Uelekezaji wa moja kwa moja wenye kipaumbele"
  },
  "whyBadge": "MIUNDOMBINU YA USALAMA",
  "whyTitle": "Miundombinu ya ujumbe inayolinda kila uthibitishaji",
  "whySubtitle1": "Wezesha uthibitishaji salama wa wateja kwa ujumbe wa OTP ulioundwa kwa ajili ya utoaji wa haraka, muunganisho rahisi wa programu na uwezo mkubwa wa kubeba ujazo mkubwa.",
  "whySubtitle2": "Imebuniwa kwa ucheleweshaji wa chini kabisa na viwango vya juu vya uwasilishaji katika mitandao ya kimataifa ya simu za mkononi.",
  "whyCards": [
    {
      "title": "Uwasilishaji wa OTP wa Kuaminika",
      "desc": "Tuma nywila za mara moja kupitia njia za moja kwa moja za SMS zinazohakikisha ufikiaji thabiti na wa juu katika mitandao yote inayotumika.",
      "footer": "Uhakika wa juu wa uwasilishaji"
    },
    {
      "title": "Ujumbe wa Uthibitishaji wa Haraka",
      "desc": "Wasaidie watumiaji kukamilisha hatua za kuingia na miamala ndani ya sekunde chache kutokana na usafirishaji wa haraka.",
      "footer": "Uelekezaji wa ucheleweshaji mdogo"
    },
    {
      "title": "Muunganisho Rahisi wa API",
      "desc": "Unganisha huduma za SMS OTP kwenye tovuti, programu za simu na mifumo ya ndani kwa kutumia REST API na itifaki za kawaida za SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Utambulisho Unaoweza Kupimika",
      "desc": "Dhibiti ongezeko kubwa la usajili, uingiaji wa pamoja na uthibitishaji wa miamala wakati wa kilele bila changamoto za kimfumo.",
      "footer": "Kiwango cha juu cha ujazo"
    }
  ],
  "capabilitiesBadge": "JUKWAA KIKAMILIFU LA OTP",
  "capabilitiesTitle": "Jukwaa jumuishi la OTP lililobuniwa kulingana na mahitaji ya biashara yako",
  "capabilitiesDesc": "Kidhi matukio mbalimbali ya uthibitishaji wa kidijitali kwa huduma za SMS zinazolingana na michakato muhimu ya kibiashara.",
  "designSolution": "Anza Kuthibitisha Watumiaji",
  "solutionNote": "Imesanidiwa kwa 2FA ya ujazo wa juu, uingiaji salama na uthibitishaji wa miamala ya kifedha.",
  "capabilities": [
    {
      "tag": "Kuingia 2FA",
      "title": "Uthibitishaji wa Kuingia",
      "desc": "Thibitisha ufikiaji wa watumiaji kwa kutuma nywila ya mara moja wakati wa kuingia ili kuzuia uvamizi wa akaunti."
    },
    {
      "tag": "Usajili",
      "title": "Usajili wa Akaunti Mpya",
      "desc": "Thibitisha usajili mpya kwa kuhakiki umiliki halisi wa nambari ya simu iliyotolewa mara moja."
    },
    {
      "tag": "Rudisha Nywila",
      "title": "Urejeshaji Salama wa Akaunti",
      "desc": "Wezesha urejeshaji salama wa akaunti kwa kutuma misimbo ya muda kwa maombi halali ya kurejesha nywila."
    },
    {
      "tag": "Miamala",
      "title": "Uthibitishaji wa Miamala",
      "desc": "Ongeza hatua ya uthibitishaji wa SMS ili kuidhinisha uhamishaji wa fedha na malipo muhimu mtandaoni."
    },
    {
      "tag": "Utambulisho",
      "title": "Uhakiki wa Umiliki wa Nambari",
      "desc": "Thibitisha umiliki wa nambari ya simu wakati wa kuanza kutumia huduma (onboarding) na kufuata kanuni za KYC."
    },
    {
      "tag": "Usalama wa App",
      "title": "Usalama wa Programu",
      "desc": "Unganisha ujumbe wa OTP moja kwa moja kwenye wavuti na programu za simu ili kukidhi viwango vya usalama wa taarifa."
    },
    {
      "tag": "Kiotomatiki",
      "title": "Vichochezi vya OTP Kiotomatiki",
      "desc": "Tuma misimbo ya uthibitishaji kiotomatiki kulingana na matukio ya mfumo na sera za usalama zilizowekwa."
    },
    {
      "tag": "Ujazo Mkubwa",
      "title": "Ujumbe wa OTP wa Ujazo wa Juu",
      "desc": "Chakata maelfu ya maombi ya uthibitishaji kwa sekunde moja kwa miundombinu iliyo tayari kwa ukuaji wa biashara."
    }
  ],
  "howItWorksBadge": "MCHAKATO WA UTHIBITISHAJI",
  "howItWorksTitle": "Jinsi mzunguko wa utoaji wa msimbo wa OTP unavyofanya kazi",
  "howItWorksSubtitle": "Kuanzia ombi la API hadi kupokelewa kwenye simu ya mkononi ndani ya sekunde chache tu.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Ombi la Mtumiaji",
      "desc": "Mtumiaji anaanzisha kitendo kinachohitaji uthibitisho kama vile kuingia, kujisajili au kufanya malipo.",
      "note": "Kichochezi cha programu"
    },
    {
      "step": "02",
      "title": "Uwasilishaji Kupitia API",
      "desc": "Mfumo wako unatuma msimbo wa muda kwenye lango letu la OTP kupitia miisho salama ya REST API.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Uelekezaji wa Opereta wa Kipaumbele",
      "desc": "Ujumbe unatumwa mara moja kupitia njia za moja kwa moja za mtandao zikiwa na kipaumbele cha juu.",
      "note": "Ucheleweshaji mdogo"
    },
    {
      "step": "04",
      "title": "Kupokea na Kuthibitisha",
      "desc": "Mtumiaji anapokea msimbo na kukamilisha uthibitishaji; hali ya utoaji inarejeshwa papo hapo kupitia webhook.",
      "note": "Risiti ya DLR ya moja kwa moja"
    }
  ],
  "networkBadge": "UFIKIAJI WA SMS DUNIANI",
  "networkTitle": "Mtandao wa kimataifa ulioundwa kuweka uthibitishaji ukiendelea bila kukatika",
  "networkDesc": "Wafikie watumiaji katika masoko ya kimataifa kupitia viunganishi vya moja kwa moja vya SMS vilivyoboreshwa kwa ajili ya uthibitishaji salama.",
  "networkBullets": [
    "Muunganisho wa moja kwa moja wa SMS kwa waendeshaji wakuu wa mitandao ya simu duniani",
    "Muunganisho rahisi na mifumo iliyopo ya 2FA na utambulisho",
    "Uwezo wa kupanuka kukidhi ongezeko kubwa la ujumbe wa uthibitishaji",
    "Uwazi kamili wa hali ya uwasilishaji kupitia ripoti za wakati halisi (DLR)",
    "Uwasilishaji unaofaa kupitia REST API za kisasa na itifaki za kawaida za kiviwanda",
    "Msaada wa kiufundi uliojitolea kwa michakato ya uthibitishaji inayozingatia muda"
  ],
  "networkStats": [
    {
      "val": "Ufikiaji wa Kimataifa",
      "label": "Muunganisho wa moja kwa moja na mitandao ya simu duniani"
    },
    {
      "val": "Njia za Kipaumbele",
      "label": "Trafiki ya uthibitishaji yenye ucheleweshaji mdogo zaidi"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Lango la Opereta la OTP",
    "sub": "Uelekezaji wa kipaumbele wa moja kwa moja kwa uthibitishaji wa dharura wa wakati halisi"
  },
  "networkFooterNote": "Kasi halisi ya utoaji inategemea sera za waendeshaji wa ndani na hali ya mtandao ya mpokeaji.",
  "momentsBadge": "MATUMIZI & SEKTA",
  "momentsTitle": "Imejengwa kwa kila wakati muhimu wa uthibitishaji",
  "momentsSubtitle": "SMS OTP inawezesha uthibitishaji wa kidijitali katika sekta ambapo ulinzi wa akaunti na uhakiki wa utambulisho ni muhimu.",
  "moments": [
    {
      "title": "Benki na Huduma za Kifedha",
      "desc": "Linda ufikiaji wa akaunti na uidhinishe uhamishaji wa fedha kwa michakato salama ya OTP.",
      "footer": "2FA ya kifedha & idhini ya malipo"
    },
    {
      "title": "Biashara ya Mtandaoni na Rejareja",
      "desc": "Thibitisha akaunti za wateja, linda uingiaji na uhakikishe miamala wakati wa malipo.",
      "footer": "Malipo salama & ulinzi wa akaunti"
    },
    {
      "title": "Usafiri na Ukarimu",
      "desc": "Thibitisha uhifadhi wa tiketi, maelezo ya nafasi na mabadiliko kupitia uthibitishaji wa haraka wa SMS.",
      "footer": "Uhakiki wa nafasi & usalama wa abiria"
    },
    {
      "title": "Majukwaa ya Kidijitali na SaaS",
      "desc": "Weka misimbo ya uthibitishaji katika usajili, urejeshaji wa nywila na kuingia kwenye vifaa vingi.",
      "footer": "Kuanza bila vikwazo & ulinzi endelevu"
    }
  ],
  "comparison": {
    "comparisonTitle": "Tazama jinsi SMS OTP inavyoimarisha uthibitishaji wa kidijitali",
    "comparisonSubtitle": "Chagua njia inayofaa zaidi kulingana na mahitaji ya programu, uzoefu wa mtumiaji na viwango vya usalama.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Ufikiaji wa Jumla Kwenye Vifaa Vyote",
    "otpItems": [
      "Inatuma misimbo ya mara moja moja kwa moja kwa nambari yoyote ya simu",
      "Inafanya kazi mara moja kwenye simu zote bila kuhitaji kupakua programu ya ziada",
      "Bora kwa usajili wa watu wengi, uingiaji wa haraka na urejeshaji wa akaunti",
      "Inategemea ufikiaji wa mtandao na mawimbi ya opereta anayepokea"
    ],
    "appTitle": "Uthibitishaji wa Programu",
    "appBadge": "Programu ya Kuthibitisha",
    "appItems": [
      "Inazalisha misimbo au arifa za idhini ndani ya programu maalum",
      "Inaweza kufanya kazi bila mtandao wa simu ikiwa kuna Wi-Fi inayofanya kazi",
      "Inahitaji mtumiaji kupakua na kusanidi programu mapema",
      "Inatoa vipengele vya ziada vya usalama wa kriptografia kulingana na usanidi"
    ],
    "securityNotice": "Ushauri wa usalama: SMS OTP inathibitisha umiliki wa nambari ya simu kwa ufanisi, lakini inaweza kukabiliwa na mashambulizi ya kubadilisha SIM (SIM Swap). Kwa mifumo nyeti sana ya kifedha, tumia udhibiti wa hatari wa ziada."
  },
  "intelligenceBadge": "UTOAJI WENYE AKILI",
  "intelligenceTitle": "Uwasilishaji ndani ya sekunde & ripoti za moja kwa moja za ufuatiliaji",
  "intelligenceDesc": "Fuatilia viwango vya utoaji, muda wa majibu wa opereta na hali za DLR ili kuhakikisha watumiaji hawakutani na ucheleweshaji.",
  "intelligenceBullets": [
    "Mistari ya kipaumbele cha juu kwa utumaji wa haraka wa misimbo ya uthibitishaji",
    "Webhooks za moja kwa moja za DLR kwa uwazi kamili wa hali ya utoaji",
    "Ubadilishaji wa njia mbadala kiotomatiki (failover) ili kuhakikisha mafanikio ya juu zaidi",
    "Uchambuzi wa kina wa ucheleweshaji kulingana na nchi na waendeshaji wa mawasiliano"
  ],
  "intelligenceFootnote": "Seva zako hupokea arifa kupitia webhook wakati ule ule simu inapopokea msimbo.",
  "messageLogCard": {
    "title": "Ufuatiliaji wa Moja kwa Moja wa OTP",
    "badge": "KIPAUMBELE DLR",
    "tab1": "Imefikishwa",
    "tab2": "Kwenye foleni",
    "tab3": "Imethibitishwa",
    "colType": "Aina",
    "colState": "Hali",
    "colReceipt": "Muda wa Opereta",
    "row1Type": "OTP ya Kuingia",
    "row1State": "Imefikishwa",
    "row1Receipt": "Sekunde 1.2 DLR ya Simu",
    "row2Type": "Rudisha Nywila",
    "row2State": "Imefikishwa",
    "row2Receipt": "Sekunde 0.9 DLR ya Simu",
    "row3Type": "Idhini ya Malipo",
    "row3State": "Imefikishwa",
    "row3Receipt": "Sekunde 1.1 DLR ya Simu",
    "footerText": "Utoaji wa uthibitishaji ndani ya sekunde katika mitandao ya simu ya kimataifa"
  },
  "protectionTitle": "Usalama ulioundwa kwa ajili ya uthibitishaji muhimu",
  "protectionBadge": "USALAMA NA UTIIFU WA KISHERIA",
  "protectionCards": [
    {
      "title": "Kikomo cha Kasi na Kuzuia Udanganyifu",
      "desc": "Linda mifumo dhidi ya mashambulizi ya nguvu (brute force) na utumaji ghali wa udanganyifu wa SMS (SMS pumping) kwa vikomo vinavyoweza kubadilishwa."
    },
    {
      "title": "Uzingatiaji wa Jina la Mtumaji (Sender ID) Duniani",
      "desc": "Hakikisha usajili rasmi wa jina la mtumaji na uzingatiaji kamili wa sheria za mawasiliano katika nchi unazotuma ujumbe."
    }
  ],
  "timelineBadge": "MPANGO WA UTEKELEZAJI",
  "timelineTitle": "Kutoka kwenye uunganishaji wa API hadi uzinduzi rasmi, hatua kwa hatua",
  "timelineSubtitle": "Anzisha SMS OTP kwa mchakato uliopangwa vizuri unaolingana na viwango vya usalama na ujazo wa jukwaa lako.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Uchambuzi wa Mahitaji",
      "desc": "Tambua nchi unazolenga, makadirio ya idadi ya ujumbe na michakato ya uthibitishaji inayohitajika."
    },
    {
      "step": "02",
      "title": "Ubunifu wa Mchakato",
      "desc": "Weka muda wa mwisho wa msimbo, vipindi vya kutuma tena na miundo ya ujumbe wa uthibitishaji."
    },
    {
      "step": "03",
      "title": "Muunganisho wa API",
      "desc": "Unganisha mifumo yako kwenye lango letu kupitia REST API salama au itifaki ya SMPP ya biashara."
    },
    {
      "step": "04",
      "title": "Majaribio na Uhakiki",
      "desc": "Kagua kasi ya uwasilishaji, ushughulikiaji wa hitilafu na urahisi wa mtumiaji katika mazingira ya majaribio."
    },
    {
      "step": "05",
      "title": "Kuanza Kutumika Rasmi",
      "desc": "Anza kutuma ujumbe halisi ukiwa na ufuatiliaji thabiti na usaidizi endelevu wa kiufundi."
    }
  ],
  "integrationPlan": {
    "title": "Vipimo vya Muunganisho wa OTP",
    "planBadge": "TAYARI KWA UZALISHAJI",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Misimbo ya 2FA na Uthibitishaji wa Haraka",
    "formats": "OTP ya Nambari, Ishara za Herufi na Nambari",
    "feedback": "Risiti za Uwasilishaji za DLR za Wakati Halisi",
    "senderSetup": "Sender ID Iliyosajiliwa / Nambari Fupi ya Kipekee",
    "check1": "Saa za kumalizika muda na sheria za kuzuia utumaji zimesanidiwa",
    "check2": "Njia za dharura na webhook za ripoti ziko tayari kufanya kazi",
    "discussNote": "Zungumza na wahandisi wetu ili kubuni mfumo bora wa uthibitishaji kwa huduma yako.",
    "discussBtn": "Anza Muunganisho"
  },
  "faqBadge": "MASWALI YA MARA KWA MARA",
  "faqTitle": "Maswali muhimu kuhusu huduma za SMS OTP",
  "faqSubtitle": "Jifunze jinsi miundombinu yetu yenye ucheleweshaji mdogo inavyolinda uthibitishaji wako wa kidijitali.",
  "faqs": [
    {
      "q": "Ujumbe wa SMS OTP hufikishwa kwa kasi gani?",
      "a": "Njia zetu za kipaumbele hufikisha misimbo ndani ya sekunde chache chini ya hali ya kawaida ya mtandao wa simu."
    },
    {
      "q": "Je, ni API gani zinazopatikana kwa ajili ya kuunganisha?",
      "a": "Tunatoa REST API iliyo wazi na mifano ya programu, pamoja na itifaki ya SMPP v3.4 kwa ujazo mkubwa wa kibiashara."
    },
    {
      "q": "Tunawezaje kujilinda dhidi ya udanganyifu wa SMS pumping?",
      "a": "Mfumo wetu unajumuisha vizuizi vya kasi vilivyojengwa ndani, kuzuia nambari za maeneo hatarishi na orodha zilizoidhinishwa za IP."
    }
  ],
  "ctaBadge": "BORESHA UTAMBULISHO",
  "ctaTitle": "Fanya kila uthibitishaji uwe wa haraka, salama na wa kuaminika",
  "ctaSubtitle": "Wape wateja wako uzoefu salama wa kidijitali kwa huduma za SMS OTP zilizoundwa kwa ajili ya ulinzi wa akaunti na uidhinishaji wa miamala.",
  "contactUs": "Anza na SMS OTP",
  "ctaFootnote": "Wasiliana na wataalamu wetu kwa maelezo zaidi kuhusu njia za kipaumbele na usanidi wa API."
};

const sv: OtpSmsServicesTranslation = {
  "heroBadge": "OTP-SMS-TJÄNSTER • AUTENTISERINGSINFRASTRUKTUR",
  "heroTitle": "Varje verifiering ansluten med absolut tillförlitlighet och snabbhet",
  "heroDesc": "Skydda kundkonton och förenkla användarautentiseringen med extremt tillförlitliga OTP-SMS-tjänster. Skicka engångslösenord för inloggningar, registreringar, lösenordsåterställningar och transaktionsgodkännanden via en telekominfrastruktur byggd för minimal latens och maximal säkerhet.",
  "talkToExpert": "Tala med en OTP-specialist",
  "exploreCapabilities": "Utforska funktioner",
  "stats": {
    "routing": "Pålitlig OTP",
    "routingLabel": "Omedelbar leverans",
    "traffic": "Enkelt API",
    "trafficLabel": "Smidig integration",
    "insights": "Global räckvidd",
    "insightsLabel": "Direkt operatörsanslutning"
  },
  "heroLiveBadge1": {
    "title": "Direkt leverans",
    "label": "Verifieringsrutter med ultralåg latens"
  },
  "heroLiveBadge2": {
    "title": "Carrier-grade 2FA",
    "sub": "Direkt prioriterad dirigering"
  },
  "whyBadge": "SÄKERHETSINFRASTRUKTUR",
  "whyTitle": "Meddelandeinfrastruktur som skyddar varje verifiering",
  "whySubtitle1": "Stöd säker kundautentisering med OTP-meddelanden utformade för snabb leverans, enkel applikationsintegration och hög skalbarhet.",
  "whySubtitle2": "Utvecklad för minimal överföringsfördröjning och marknadsledande leveranssäkerhet i internationella mobilnätverk.",
  "whyCards": [
    {
      "title": "Pålitlig OTP-leverans",
      "desc": "Skicka engångslösenord via direkta operatörsrutter som säkerställer konsekvent hög framkomlighet i alla nätverk.",
      "footer": "Hög leveransgaranti"
    },
    {
      "title": "Snabba verifieringsmeddelanden",
      "desc": "Låt användare slutföra sina inloggningar och transaktioner på några sekunder tack vare minimala transittider.",
      "footer": "Låglatensdirigering"
    },
    {
      "title": "Flexibel API-integration",
      "desc": "Anslut OTP-SMS till webbplatser, mobilappar och backend-system via standardiserade REST-API:er och SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Skalbar autentisering",
      "desc": "Hantera trafiktoppar vid massregistreringar, samtidiga inloggningar och transaktioner med hög kapacitet utan avbrott.",
      "footer": "Hög volymkapacitet"
    }
  ],
  "capabilitiesBadge": "KOMPLETT OTP-PLATTFORM",
  "capabilitiesTitle": "En heltäckande OTP-plattform anpassad för ditt företags behov",
  "capabilitiesDesc": "Stöd en mängd olika digitala autentiseringsscenarier med SMS-tjänster optimerade för affärskritiska processer.",
  "designSolution": "Börja verifiera användare",
  "solutionNote": "Konfigurerad för storskalig 2FA, säkra inloggningar och transaktionsverifiering.",
  "capabilities": [
    {
      "tag": "Inloggning 2FA",
      "title": "Inloggningsverifiering",
      "desc": "Bekräfta användarbehörighet genom att skicka engångskoder vid inloggning för att förhindra obehörig åtkomst."
    },
    {
      "tag": "Registrering",
      "title": "Registrering av nya konton",
      "desc": "Bekräfta nya användarkonton genom att omedelbart validera ägarskapet av det angivna mobilnumret."
    },
    {
      "tag": "Återställning",
      "title": "Säker kontoåterställning",
      "desc": "Möjliggör säker återställning av lösenord genom att skicka tidsbegränsade koder för legitima förfrågningar."
    },
    {
      "tag": "Transaktioner",
      "title": "Transaktionsautentisering",
      "desc": "Lägg till ett extra SMS-steg för att godkänna banköverföringar, onlinebetalningar och känsliga operationer."
    },
    {
      "tag": "Identitet",
      "title": "Validering av mobilnummer",
      "desc": "Verifiera mobilnummer i samband med onboarding och regelefterlevnadsprocesser (KYC)."
    },
    {
      "tag": "App-säkerhet",
      "title": "Applikationssäkerhet",
      "desc": "Integrera OTP-SMS direkt i webb- och mobilapplikationer för att uppfylla strikta säkerhetskrav."
    },
    {
      "tag": "Automatiserad",
      "title": "Automatiska OTP-utskick",
      "desc": "Skicka verifieringskoder automatiskt baserat på systemhändelser och fördefinierade säkerhetsregler."
    },
    {
      "tag": "Hög volym",
      "title": "Storskalig OTP-meddelandehantering",
      "desc": "Behandla tusentals verifieringsförfrågningar per sekund med en infrastruktur redo för företagets expansion."
    }
  ],
  "howItWorksBadge": "VERIFIERINGSFLÖDE",
  "howItWorksTitle": "Hur leveransprocessen för OTP fungerar",
  "howItWorksSubtitle": "Från API-anrop till mottagande på mobiltelefonen på bara några sekunder.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Användarförfrågan",
      "desc": "Användaren initierar en åtgärd som kräver verifiering, t.ex. inloggning, registrering eller betalning.",
      "note": "Händelse i applikationen"
    },
    {
      "step": "02",
      "title": "Överföring via API",
      "desc": "Ditt system skickar den temporära koden till vår OTP-gateway via säkra REST API-slutpunkter.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Prioriterad operatörsdirigering",
      "desc": "Meddelandet skickas omedelbart via direkta operatörskanaler med högsta prioritet i kön.",
      "note": "Ultralåg latens"
    },
    {
      "step": "04",
      "title": "Mottagning & bekräftelse",
      "desc": "Användaren tar emot koden och slutför verifieringen; leveransstatus skickas tillbaka i realtid via webhook.",
      "note": "Realtids-DLR"
    }
  ],
  "networkBadge": "GLOBAL SMS-TÄCKNING",
  "networkTitle": "Ett globalt nätverk byggt för att hålla verifieringar igång utan avbrott",
  "networkDesc": "Nå användare på alla internationella marknader via direkta SMS-anslutningar optimerade för autentisering.",
  "networkBullets": [
    "Direkt SMS-anslutning till ledande mobiloperatörer över hela världen",
    "Smidig integrering med befintliga 2FA- och autentiseringssystem",
    "Skalbar kapacitet som klarar plötsliga volymtoppar av meddelanden",
    "Full insyn i leveransstatus genom leveransrapporter (DLR) i realtid",
    "Bekväm hantering via moderna REST-API:er och branschstandardiserade protokoll",
    "Dedikerad teknisk support för tidskritiska verifieringsflöden"
  ],
  "networkStats": [
    {
      "val": "Global täckning",
      "label": "Direktanslutning till internationella mobiloperatörer"
    },
    {
      "val": "Prioriterade rutter",
      "label": "Verifieringstrafik med minsta möjliga fördröjning"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP-operatörsgateway",
    "sub": "Direkt prioriterad dirigering för tidskritisk autentisering i realtid"
  },
  "networkFooterNote": "Den faktiska leveranshastigheten beror på lokala operatörsregler och mottagarens nätverksförhållanden.",
  "momentsBadge": "ANVÄNDNINGSOMRÅDEN & BRANSCHER",
  "momentsTitle": "Byggd för varje kritiskt verifieringsögonblick",
  "momentsSubtitle": "OTP-SMS säkrar den digitala kundresan i branscher där identitetsverifiering och kontoskydd är helt avgörande.",
  "moments": [
    {
      "title": "Bank och Finansiella Tjänster",
      "desc": "Skydda kontoinloggningar och godkänn penningtransaktioner med extremt säkra OTP-flöden.",
      "footer": "Finansiell 2FA & betalningsgodkännande"
    },
    {
      "title": "E-Handel och Detaljhandel",
      "desc": "Verifiera kundkonton, skydda inloggningar och säkra betalningar i kassan.",
      "footer": "Säker kassa & kontoskydd"
    },
    {
      "title": "Resor och Hotell",
      "desc": "Bekräfta biljettbokningar, bokningsinformation och ändringar via omedelbar SMS-verifiering.",
      "footer": "Bokningsvalidering & passagerarsäkerhet"
    },
    {
      "title": "Digitala Plattformar och SaaS",
      "desc": "Integrera verifieringskoder i registreringar, lösenordsåterställningar och inloggningar på flera enheter.",
      "footer": "Smidig onboarding & kontinuerligt skydd"
    }
  ],
  "comparison": {
    "comparisonTitle": "Se hur OTP-SMS stärker digital autentisering",
    "comparisonSubtitle": "Välj den metod som bäst matchar dina säkerhetskrav, användarupplevelse och målgrupp.",
    "otpTitle": "OTP-SMS",
    "otpBadge": "Universell Tillgänglighet",
    "otpItems": [
      "Levererar engångskoder direkt till alla mobilnummer i världen",
      "Fungerar omedelbart på alla mobiltelefoner utan extra appinstallation",
      "Perfekt för massregistreringar, snabba inloggningar och kontoåterställning",
      "Beroende av mottagande mobiloperatörs täckning och signalstyrka"
    ],
    "appTitle": "App-baserad Autentisering",
    "appBadge": "Mjukvaruautentiserare",
    "appItems": [
      "Genererar koder eller push-godkännanden i en dedikerad app",
      "Kan fungera utan mobiltäckning om Wi-Fi-anslutning finns",
      "Kräver att användaren laddar ner och ställer in appen i förväg",
      "Erbjuder ytterligare kryptografiska säkerhetsfördelar beroende på implementation"
    ],
    "securityNotice": "Säkerhetsrekommendation: OTP-SMS bekräftar effektivt innehavet av ett mobilnummer, men kan vara sårbart för SIM-swap. För särskilt kritiska finansiella system rekommenderas ytterligare riskkontroller."
  },
  "intelligenceBadge": "INTELLIGENT LEVERANS",
  "intelligenceTitle": "Leverans på några sekunder & realtidsrapportering",
  "intelligenceDesc": "Övervaka leveransmätvärden, operatörssvarstider och DLR-rapporter för att eliminera fördröjningar vid inloggning.",
  "intelligenceBullets": [
    "Köer med högsta prioritet för omedelbar avsändning av verifieringskoder",
    "DLR-webhooks i realtid för omedelbar insyn i leveransstatus",
    "Automatisk övergång till reservrutter (failover) för maximal framkomlighet",
    "Detaljerad latensanalys uppdelad efter land och mobiloperatör"
  ],
  "intelligenceFootnote": "Dina servrar får ett meddelande via webhook i samma sekund som koden tas emot av mobiltelefonen.",
  "messageLogCard": {
    "title": "Realtidslogg för OTP-leverans",
    "badge": "PRIO-DLR",
    "tab1": "Levererat",
    "tab2": "I kö",
    "tab3": "Verifierat",
    "colType": "Typ",
    "colState": "Status",
    "colReceipt": "Operatörslatens",
    "row1Type": "Inloggnings-OTP",
    "row1State": "Levererat",
    "row1Receipt": "1.2s Enhets-DLR",
    "row2Type": "Lösenordsåterställning",
    "row2State": "Levererat",
    "row2Receipt": "0.9s Enhets-DLR",
    "row3Type": "Betalningsgodkännande",
    "row3State": "Levererat",
    "row3Receipt": "1.1s Enhets-DLR",
    "footerText": "Verifieringsleverans på sekunder i globala mobilnät"
  },
  "protectionTitle": "Säkerhet byggd för kritiska verifieringsuppgifter",
  "protectionBadge": "SÄKERHET & REGELEFTERLEVNAD",
  "protectionCards": [
    {
      "title": "Hastighetsbegränsning & Skydd mot Bedrägerier",
      "desc": "Skydda systemet mot brute force-attacker och dyr SMS-pumping med anpassningsbara hastighetsgränser."
    },
    {
      "title": "Global Efterlevnad av Avsändar-ID (Sender ID)",
      "desc": "Garantera officiell registrering av avsändarnamn och full efterlevnad av lokala telekomlagar i destinationsländerna."
    }
  ],
  "timelineBadge": "STRUKTURERAD IMPLEMENTERING",
  "timelineTitle": "Från API-integration till produktionsstart, steg för steg",
  "timelineSubtitle": "Driftsätt OTP-SMS med en strukturerad process anpassad efter plattformens säkerhetskrav och volymer.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Kravspecifikation",
      "desc": "Identifiera målländer, förväntade meddelandevolymer och specifika verifieringsflöden."
    },
    {
      "step": "02",
      "title": "Flödesdesign",
      "desc": "Ställ in giltighetstid för koder, intervall för återutsändning och meddelandemallar."
    },
    {
      "step": "03",
      "title": "API-integration",
      "desc": "Koppla ihop dina system med vår gateway via säkra REST-API:er eller enterprise-SMPP."
    },
    {
      "step": "04",
      "title": "Testning & Validering",
      "desc": "Verifiera leveranshastighet, felhantering och användarupplevelse i sandlådemiljö."
    },
    {
      "step": "05",
      "title": "Produktionsstart",
      "desc": "Börja skicka skarp trafik med kontinuerlig övervakning och dedikerad teknisk support."
    }
  ],
  "integrationPlan": {
    "title": "Specifikationer för OTP-integration",
    "planBadge": "REDO FÖR PRODUKTION",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Tidskänsliga 2FA-koder & Verifieringar",
    "formats": "Numeriska OTP:er, Alfanumeriska Tokens",
    "feedback": "Leveransrapporter (DLR) i Realtid",
    "senderSetup": "Registrerat Avsändar-ID / Kortnummer",
    "check1": "Utgångstimer och begränsningsregler har konfigurerats",
    "check2": "Reservrutter och status-webhooks är fullt operativa",
    "discussNote": "Diskutera med våra experter för att utforma den bästa autentiseringsarkitekturen för din tjänst.",
    "discussBtn": "Starta Integration"
  },
  "faqBadge": "VANLIGA FRÅGOR",
  "faqTitle": "Viktiga frågor och svar om OTP-SMS-tjänster",
  "faqSubtitle": "Läs mer om hur vår låglatensinfrastruktur skyddar dina digitala verifieringar.",
  "faqs": [
    {
      "q": "Hur snabbt levereras OTP-SMS-meddelanden?",
      "a": "Våra prioriterade rutter levererar verifieringskoder på några sekunder under normala mobilnätsförhållanden."
    },
    {
      "q": "Vilka API:er finns tillgängliga för integration?",
      "a": "Vi erbjuder moderna REST-API:er med utförlig dokumentation och kodexempel, samt SMPP v3.4 för höga trafikvolymer."
    },
    {
      "q": "Hur skyddar vi vår plattform mot SMS-pumping och bedrägerier?",
      "a": "Vår plattform erbjuder inbyggda hastighetsbegränsningar, blockering av riskdestinationer och IP-vitlistning för att stoppa oönskad trafik."
    }
  ],
  "ctaBadge": "UPPGRADERA AUTENTISERINGEN",
  "ctaTitle": "Gör varje verifiering snabbare, säkrare och mer pålitlig",
  "ctaSubtitle": "Ge dina kunder en säker digital upplevelse med högkvalitativa OTP-SMS-tjänster byggda för kontoskydd och transaktionsbekräftelse.",
  "contactUs": "Börja med OTP-SMS",
  "ctaFootnote": "Kontakta våra specialister för mer information om prioriterade rutter och API-inställningar."
};

const el: OtpSmsServicesTranslation = {
  "heroBadge": "ΥΠΗΡΕΣΙΕΣ SMS OTP • ΥΠΟΔΟΜΗ ΤΑΥΤΟΠΟΙΗΣΗΣ",
  "heroTitle": "Κάθε επαλήθευση, συνδεδεμένη με απόλυτη αξιοπιστία και ταχύτητα",
  "heroDesc": "Προστατεύστε τους λογαριασμούς πελατών και απλοποιήστε την ταυτοποίηση χρηστών με εξαιρετικά αξιόπιστες υπηρεσίες SMS OTP. Στείλτε κωδικούς μίας χρήσης για σύνδεση, εγγραφή, επαναφορά κωδικού και έγκριση συναλλαγών μέσω τηλεπικοινωνιακής υποδομής εξαιρετικά χαμηλής καθυστέρησης.",
  "talkToExpert": "Μιλήστε με έναν ειδικό OTP",
  "exploreCapabilities": "Εξερευνήστε τις δυνατότητες",
  "stats": {
    "routing": "Αξιόπιστο OTP",
    "routingLabel": "Άμεση παράδοση",
    "traffic": "Απλό API",
    "trafficLabel": "Ευέλικτη ενσωμάτωση",
    "insights": "Παγκόσμια εμβέλεια",
    "insightsLabel": "Απευθείας σύνδεση με παρόχους"
  },
  "heroLiveBadge1": {
    "title": "Άμεση παράδοση",
    "label": "Διαδρομές επαλήθευσης εξαιρετικά χαμηλής καθυστέρησης"
  },
  "heroLiveBadge2": {
    "title": "2FA επιπέδου παρόχου",
    "sub": "Απευθείας δρομολόγηση υψηλής προτεραιότητας"
  },
  "whyBadge": "ΥΠΟΔΟΜΗ ΑΣΦΑΛΕΙΑΣ",
  "whyTitle": "Υποδομή μηνυμάτων που προστατεύει κάθε διαδικασία επαλήθευσης",
  "whySubtitle1": "Υποστηρίξτε την ασφαλή ταυτοποίηση πελατών με μηνύματα OTP σχεδιασμένα για έγκαιρη παράδοση, απρόσκοπτη ενσωμάτωση και τεράστια κλιμάκωση.",
  "whySubtitle2": "Σχεδιασμένο για ελάχιστη καθυστέρηση μετάδοσης και κορυφαία ποσοστά παράδοσης σε όλα τα διεθνή δίκτυα κινητής τηλεφωνίας.",
  "whyCards": [
    {
      "title": "Αξιόπιστη παράδοση OTP",
      "desc": "Στείλτε κωδικούς μίας χρήσης μέσω απευθείας διαδρομών SMS που εξασφαλίζουν σταθερά υψηλή επιτυχία σε όλους τους υποστηριζόμενους παρόχους.",
      "footer": "Υψηλή εγγύηση παράδοσης"
    },
    {
      "title": "Ταχύτατα μηνύματα επαλήθευσης",
      "desc": "Βοηθήστε τους χρήστες να ολοκληρώσουν τις διαδικασίες σύνδεσης και ασφάλειας σε λίγα δευτερόλεπτα χάρη στους ελάχιστους χρόνους διαμεταγωγής.",
      "footer": "Δρομολόγηση χαμηλής καθυστέρησης"
    },
    {
      "title": "Ευέλικτη ενσωμάτωση API",
      "desc": "Συνδέστε εύκολα τις δυνατότητες SMS OTP σε ιστότοπους, εφαρμογές για κινητά και backend συστήματα μέσω τυποποιημένων REST API και SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Κλιμακούμενη ταυτοποίηση",
      "desc": "Διαχειριστείτε άψογα απότομες αυξήσεις εγγραφών, ταυτόχρονες συνδέσεις και επαληθεύσεις συναλλαγών υψηλού όγκου χωρίς καθυστερήσεις.",
      "footer": "Υψηλή χωρητικότητα διεκπεραίωσης"
    }
  ],
  "capabilitiesBadge": "ΟΛΟΚΛΗΡΩΜΕΝΗ ΠΛΑΤΦΟΡΜΑ OTP",
  "capabilitiesTitle": "Μια ολοκληρωμένη πλατφόρμα OTP προσαρμοσμένη στις ανάγκες της επιχείρησής σας",
  "capabilitiesDesc": "Υποστηρίξτε ποικίλα σενάρια ψηφιακής ταυτοποίησης με υπηρεσίες SMS κατάλληλες για κρίσιμες εταιρικές διαδικασίες.",
  "designSolution": "Ξεκινήστε την επαλήθευση χρηστών",
  "solutionNote": "Διαμορφωμένο για υψηλό όγκο 2FA, ασφαλή σύνδεση και ταυτοποίηση συναλλαγών.",
  "capabilities": [
    {
      "tag": "Σύνδεση 2FA",
      "title": "Επαλήθευση σύνδεσης",
      "desc": "Επαληθεύστε την πρόσβαση των χρηστών στέλνοντας κωδικούς μίας χρήσης κατά τη σύνδεση για να αποτρέψετε παραβιάσεις λογαριασμών."
    },
    {
      "tag": "Εγγραφή",
      "title": "Εγγραφή νέου λογαριασμού",
      "desc": "Επιβεβαιώστε τις νέες εγγραφές επικυρώνοντας άμεσα την πραγματική κατοχή του αριθμού κινητού τηλεφώνου."
    },
    {
      "tag": "Επαναφορά",
      "title": "Ασφαλής ανάκτηση λογαριασμού",
      "desc": "Επιτρέψτε την ασφαλή ανάκτηση λογαριασμού στέλνοντας προσωρινούς κωδικούς για νόμιμα αιτήματα επαναφοράς κωδικού."
    },
    {
      "tag": "Συναλλαγές",
      "title": "Ταυτοποίηση συναλλαγών",
      "desc": "Προσθέστε ένα βήμα επαλήθευσης SMS για την έγκριση τραπεζικών εμβασμάτων και ευαίσθητων ηλεκτρονικών πληρωμών."
    },
    {
      "tag": "Ταυτότητα",
      "title": "Επικύρωση κατοχής αριθμού",
      "desc": "Επιβεβαιώστε την κυριότητα του αριθμού τηλεφώνου κατά το onboarding και τις διαδικασίες κανονιστικής συμμόρφωσης (KYC)."
    },
    {
      "tag": "Ασφάλεια App",
      "title": "Ασφάλεια εφαρμογών",
      "desc": "Ενσωματώστε μηνύματα OTP απευθείας σε web και mobile εφαρμογές για να ικανοποιήσετε αυστηρά πρότυπα ασφάλειας πληροφοριών."
    },
    {
      "tag": "Αυτοματοποιημένο",
      "title": "Αυτοματοποιημένα triggers OTP",
      "desc": "Στείλτε κωδικούς επαλήθευσης αυτόματα με βάση συμβάντα του συστήματος και προκαθορισμένους κανόνες ασφάλειας."
    },
    {
      "tag": "Υψηλός όγκος",
      "title": "Μηνύματα OTP μεγάλης κλίμακας",
      "desc": "Επεξεργαστείτε χιλιάδες αιτήματα επαλήθευσης ανά δευτερόλεπτο με υποδομή έτοιμη να υποστηρίξει την ανάπτυξη της επιχείρησής σας."
    }
  ],
  "howItWorksBadge": "ΡΟΗ ΕΠΑΛΗΘΕΥΣΗΣ",
  "howItWorksTitle": "Πώς λειτουργεί ο κύκλος παράδοσης κωδικών OTP",
  "howItWorksSubtitle": "Από την κλήση API μέχρι την παραλαβή στο κινητό τηλέφωνο σε λίγα μόλις δευτερόλεπτα.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Αίτημα χρήστη",
      "desc": "Ο χρήστης ξεκινά μια ενέργεια που απαιτεί επαλήθευση, όπως σύνδεση, εγγραφή ή πληρωμή.",
      "note": "Συμβάν στην εφαρμογή"
    },
    {
      "step": "02",
      "title": "Υποβολή μέσω API",
      "desc": "Το σύστημά σας μεταβιβάζει τον προσωρινό κωδικό στην πύλη OTP μας μέσω ασφαλών REST API endpoints.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Δρομολόγηση προτεραιότητας",
      "desc": "Το μήνυμα αποστέλλεται άμεσα μέσω απευθείας διαδρομών παρόχων με ουρά υψηλότερης προτεραιότητας.",
      "note": "Εξαιρετικά χαμηλή καθυστέρηση"
    },
    {
      "step": "04",
      "title": "Λήψη και ολοκλήρωση",
      "desc": "Ο χρήστης λαμβάνει τον κωδικό και ολοκληρώνει την επαλήθευση. Η κατάσταση παράδοσης επιστρέφεται σε πραγματικό χρόνο μέσω webhook.",
      "note": "Αναφορά DLR πραγματικού χρόνου"
    }
  ],
  "networkBadge": "ΠΑΓΚΟΣΜΙΑ ΚΑΛΥΨΗ SMS",
  "networkTitle": "Ένα διεθνές δίκτυο σχεδιασμένο να διατηρεί τις επαληθεύσεις αδιάλειπτες",
  "networkDesc": "Προσεγγίστε χρήστες σε όλο τον κόσμο μέσω απευθείας συνδέσεων SMS βελτιστοποιημένων για ασφαλή ταυτοποίηση.",
  "networkBullets": [
    "Απευθείας συνδεσιμότητα SMS με κορυφαίους παρόχους κινητής τηλεφωνίας παγκοσμίως",
    "Ομαλή ενσωμάτωση με υπάρχοντα συστήματα 2FA και ταυτοποίησης",
    "Επεκτάσιμη χωρητικότητα για απότομες αυξήσεις στον όγκο μηνυμάτων επαλήθευσης",
    "Πλήρης διαφάνεια κατάστασης παράδοσης χάρη στις αναφορές DLR σε πραγματικό χρόνο",
    "Βολική αποστολή μέσω σύγχρονων REST API και τυποποιημένων πρωτοκόλλων",
    "Εξειδικευμένη τεχνική υποστήριξη για διαδικασίες επαλήθευσης ευαίσθητες στον χρόνο"
  ],
  "networkStats": [
    {
      "val": "Παγκόσμια κάλυψη",
      "label": "Απευθείας διασύνδεση με διεθνείς παρόχους κινητής"
    },
    {
      "val": "Διαδρομές προτεραιότητας",
      "label": "Κίνηση επαλήθευσης με ελάχιστη καθυστέρηση"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Πύλη παρόχου OTP",
    "sub": "Απευθείας δρομολόγηση προτεραιότητας για επείγουσες ταυτοποιήσεις σε πραγματικό χρόνο"
  },
  "networkFooterNote": "Η πραγματική ταχύτητα παράδοσης εξαρτάται από τις πολιτικές των τοπικών παρόχων και το σήμα του παραλήπτη.",
  "momentsBadge": "ΠΕΡΙΠΤΩΣΕΙΣ ΧΡΗΣΗΣ & ΚΛΑΔΟΙ",
  "momentsTitle": "Σχεδιασμένο για κάθε κρίσιμη στιγμή επαλήθευσης",
  "momentsSubtitle": "Το SMS OTP υποστηρίζει την ψηφιακή ταυτοποίηση σε τομείς όπου η προστασία λογαριασμών είναι υψίστης σημασίας.",
  "moments": [
    {
      "title": "Τράπεζες και Χρηματοοικονομικά",
      "desc": "Προστατεύστε την πρόσβαση σε λογαριασμούς και εγκρίνετε μεταφορές χρημάτων με εξαιρετικά ασφαλείς ροές OTP.",
      "footer": "Χρηματοοικονομικό 2FA & έγκριση πληρωμών"
    },
    {
      "title": "Ηλεκτρονικό Εμπόριο και Λιανική",
      "desc": "Επαληθεύστε λογαριασμούς πελατών, προστατεύστε τις συνδέσεις και διασφαλίστε συναλλαγές στο ταμείο.",
      "footer": "Ασφαλές checkout & προστασία λογαριασμών"
    },
    {
      "title": "Ταξίδια και Φιλοξενία",
      "desc": "Επιβεβαιώστε κρατήσεις εισιτηρίων, στοιχεία κράτησης και αλλαγές μέσω άμεσης επαλήθευσης SMS.",
      "footer": "Επικύρωση κρατήσεων & ασφάλεια επιβατών"
    },
    {
      "title": "Ψηφιακές Πλατφόρμες και SaaS",
      "desc": "Ενσωματώστε κωδικούς επαλήθευσης σε εγγραφές, επαναφορές κωδικών και συνδέσεις από πολλές συσκευές.",
      "footer": "Ομαλό onboarding & διαρκής προστασία"
    }
  ],
  "comparison": {
    "comparisonTitle": "Δείτε πώς το SMS OTP ενισχύει την ψηφιακή ταυτοποίηση",
    "comparisonSubtitle": "Επιλέξτε τη μέθοδο που ταιριάζει καλύτερα στις απαιτήσεις ασφαλείας, την εμπειρία χρήστη και το κοινό σας.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Καθολική Προσβασιμότητα σε Όλες τις Συσκευές",
    "otpItems": [
      "Παραδίδει κωδικούς μίας χρήσης απευθείας σε οποιονδήποτε αριθμό κινητού",
      "Λειτουργεί άμεσα σε όλα τα κινητά τηλέφωνα χωρίς απαίτηση λήψης εφαρμογής",
      "Ιδανικό για μαζικές εγγραφές, γρήγορες συνδέσεις και ανάκτηση λογαριασμών",
      "Εξαρτάται από την κάλυψη και το σήμα του παρόχου κινητής τηλεφωνίας του παραλήπτη"
    ],
    "appTitle": "Ταυτοποίηση μέσω Εφαρμογής",
    "appBadge": "Λογισμικό Authenticator",
    "appItems": [
      "Δημιουργεί κωδικούς ή ειδοποιήσεις έγκρισης μέσα σε ειδική εφαρμογή",
      "Μπορεί να λειτουργήσει χωρίς σήμα κινητής εφόσον υπάρχει ενεργό Wi-Fi",
      "Απαιτεί από τον χρήστη να κατεβάσει και να ρυθμίσει την εφαρμογή εκ των προτέρων",
      "Προσφέρει πρόσθετα κρυπτογραφικά πλεονεκτήματα ασφαλείας ανάλογα με την υλοποίηση"
    ],
    "securityNotice": "Σύσταση ασφαλείας: Το SMS OTP επιβεβαιώνει αποτελεσματικά την κατοχή αριθμού κινητού, αλλά μπορεί να είναι ευάλωτο σε επιθέσεις SIM swap. Για κρίσιμα χρηματοοικονομικά συστήματα, συνδυάστε το με πρόσθετους ελέγχους κινδύνου."
  },
  "intelligenceBadge": "ΕΞΥΠΝΗ ΠΑΡΑΔΟΣΗ",
  "intelligenceTitle": "Παράδοση σε δευτερόλεπτα & αναφορές κατάστασης πραγματικού χρόνου",
  "intelligenceDesc": "Παρακολουθήστε μετρήσεις απόδοσης, χρόνους απόκρισης παρόχων και αναφορές DLR για να εξαλείψετε καθυστερήσεις κατά τη σύνδεση.",
  "intelligenceBullets": [
    "Ουρές υψηλής προτεραιότητας για άμεση αποστολή κωδικών επαλήθευσης",
    "Webhooks DLR σε πραγματικό χρόνο για άμεση διαφάνεια της κατάστασης παράδοσης",
    "Αυτόματη εναλλαγή σε εφεδρικές διαδρομές (failover) για μέγιστη επιτυχία παράδοσης",
    "Λεπτομερής ανάλυση καθυστέρησης ανά χώρα και πάροχο τηλεπικοινωνιών"
  ],
  "intelligenceFootnote": "Οι διακομιστές σας λαμβάνουν ειδοποίηση μέσω webhook το ίδιο δευτερόλεπτο που το κινητό τηλέφωνο λαμβάνει τον κωδικό.",
  "messageLogCard": {
    "title": "Ζωντανή Καταγραφή Παράδοσης OTP",
    "badge": "DLR ΠΡΟΤΕΡΑΙΟΤΗΤΑΣ",
    "tab1": "Παραδόθηκαν",
    "tab2": "Στην ουρά",
    "tab3": "Επαληθεύτηκαν",
    "colType": "Τύπος",
    "colState": "Κατάσταση",
    "colReceipt": "Καθυστέρηση Παρόχου",
    "row1Type": "OTP Σύνδεσης",
    "row1State": "Παραδόθηκε",
    "row1Receipt": "1.2s DLR Συσκευής",
    "row2Type": "Επαναφορά Κωδικού",
    "row2State": "Παραδόθηκε",
    "row2Receipt": "0.9s DLR Συσκευής",
    "row3Type": "Έγκριση Πληρωμής",
    "row3State": "Παραδόθηκε",
    "row3Receipt": "1.1s DLR Συσκευής",
    "footerText": "Παράδοση επαλήθευσης σε δευτερόλεπτα στα διεθνή δίκτυα κινητής τηλεφωνίας"
  },
  "protectionTitle": "Ασφάλεια σχεδιασμένη για κρίσιμες επαληθεύσεις",
  "protectionBadge": "ΑΣΦΑΛΕΙΑ & ΣΥΜΜΟΡΦΩΣΗ",
  "protectionCards": [
    {
      "title": "Περιορισμός Ρυθμού & Πρόληψη Απάτης",
      "desc": "Προστατέψτε τα συστήματα από επιθέσεις brute force και δαπανηρή απάτη SMS pumping με προσαρμόσιμα όρια ταχύτητας."
    },
    {
      "title": "Παγκόσμια Συμμόρφωση Αναγνωριστικού Αποστολέα (Sender ID)",
      "desc": "Εξασφαλίστε επίσημη καταχώριση ονόματος αποστολέα και πλήρη συμμόρφωση με τους τοπικούς τηλεπικοινωνιακούς κανονισμούς."
    }
  ],
  "timelineBadge": "ΔΟΜΗΜΕΝΗ ΥΛΟΠΟΙΗΣΗ",
  "timelineTitle": "Από την ενσωμάτωση API έως την παραγωγική λειτουργία, βήμα προς βήμα",
  "timelineSubtitle": "Ενεργοποιήστε το SMS OTP με μια μεθοδική διαδικασία προσαρμοσμένη στα πρότυπα ασφαλείας και τον όγκο της πλατφόρμας σας.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Καθορισμός Απαιτήσεων",
      "desc": "Προσδιορίστε χώρες προορισμού, εκτιμώμενο όγκο μηνυμάτων και απαιτούμενες ροές ταυτοποίησης."
    },
    {
      "step": "02",
      "title": "Σχεδιασμός Ροής",
      "desc": "Ορίστε χρόνο λήξης κωδικών, διαστήματα επανάληψης και πρότυπα κειμένων μηνυμάτων."
    },
    {
      "step": "03",
      "title": "Ενσωμάτωση API",
      "desc": "Συνδέστε τα συστήματά σας στην πύλη μας μέσω ασφαλών REST API ή εταιρικού πρωτοκόλλου SMPP."
    },
    {
      "step": "04",
      "title": "Δοκιμές & Επικύρωση",
      "desc": "Ελέγξτε ταχύτητα παράδοσης, διαχείριση σφαλμάτων και εμπειρία χρήστη στο περιβάλλον sandbox."
    },
    {
      "step": "05",
      "title": "Επίσημη Έναρξη",
      "desc": "Ξεκινήστε την αποστολή πραγματικής κίνησης με συνεχή επίβλεψη και εξειδικευμένη τεχνική υποστήριξη."
    }
  ],
  "integrationPlan": {
    "title": "Προδιαγραφές Ενσωμάτωσης OTP",
    "planBadge": "ΕΤΟΙΜΟ ΓΙΑ ΠΑΡΑΓΩΓΗ",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Κωδικοί 2FA & Επείγουσες Επαληθεύσεις",
    "formats": "Αριθμητικά OTP, Αλφαριθμητικά Tokens",
    "feedback": "Αναφορές Παράδοσης DLR Πραγματικού Χρόνου",
    "senderSetup": "Καταχωρημένο Sender ID / Ειδικός Σύντομος Κωδικός",
    "check1": "Έχουν ρυθμιστεί χρονόμετρα λήξης και κανόνες περιορισμού ρυθμού",
    "check2": "Εφεδρικές διαδρομές και webhooks κατάστασης πλήρως λειτουργικά",
    "discussNote": "Συζητήστε με τους μηχανικούς μας για να σχεδιάσετε την ιδανική αρχιτεκτονική ταυτοποίησης για την υπηρεσία σας.",
    "discussBtn": "Έναρξη Ενσωμάτωσης"
  },
  "faqBadge": "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ",
  "faqTitle": "Σημαντικές ερωτήσεις και απαντήσεις για τις υπηρεσίες SMS OTP",
  "faqSubtitle": "Μάθετε πώς η υποδομή χαμηλής καθυστέρησης προστατεύει τις ψηφιακές επαληθεύσεις σας.",
  "faqs": [
    {
      "q": "Πόσο γρήγορα παραδίδονται τα μηνύματα SMS OTP;",
      "a": "Οι διαδρομές προτεραιότητάς μας παραδίδουν τους κωδικούς σε λίγα δευτερόλεπτα υπό κανονικές συνθήκες δικτύου κινητής."
    },
    {
      "q": "Ποιες επιλογές API είναι διαθέσιμες για ενσωμάτωση;",
      "a": "Παρέχουμε σύγχρονο REST API με αναλυτική τεκμηρίωση και παραδείγματα κώδικα, καθώς και πρωτόκολλο SMPP v3.4 για μεγάλο όγκο κίνησης."
    },
    {
      "q": "Πώς προστατεύεται η πλατφόρμα από SMS pumping και απάτες;",
      "a": "Η πλατφόρμα μας προσφέρει ενσωματωμένα φίλτρα περιορισμού ρυθμού, αποκλεισμό επικίνδυνων προορισμών και IP whitelists για την αποτροπή κακόβουλης κίνησης."
    }
  ],
  "ctaBadge": "ΑΝΑΒΑΘΜΙΣΤΕ ΤΗΝ ΤΑΥΤΟΠΟΙΗΣΗ",
  "ctaTitle": "Κάντε κάθε επαλήθευση ταχύτερη, ασφαλέστερη και πιο αξιόπιστη",
  "ctaSubtitle": "Ενισχύστε τις ψηφιακές εμπειρίες των πελατών σας με υπηρεσίες SMS OTP σχεδιασμένες για προστασία λογαριασμών και επιβεβαίωση συναλλαγών.",
  "contactUs": "Ξεκινήστε με SMS OTP",
  "ctaFootnote": "Επικοινωνήστε με τους ειδικούς μας για περισσότερες πληροφορίες σχετικά με τις διαδρομές προτεραιότητας και τη διαμόρφωση API."
};

const cs: OtpSmsServicesTranslation = {
  "heroBadge": "SLUŽBY SMS OTP • AUTENTIZAČNÍ INFRASTRUKTURA",
  "heroTitle": "Každé ověření doručeno s absolutní spolehlivostí a bleskovou rychlostí",
  "heroDesc": "Chraňte účty svých zákazníků a zjednodušte ověřování uživatelů pomocí vysoce spolehlivých služeb SMS OTP. Odesílejte jednorázová hesla pro přihlášení, registraci, obnovení hesel a schvalování transakcí prostřednictvím telekomunikační infrastruktury s minimální latencí.",
  "talkToExpert": "Promluvte si s expertem na OTP",
  "exploreCapabilities": "Prozkoumat možnosti",
  "stats": {
    "routing": "Spolehlivé OTP",
    "routingLabel": "Okamžité doručení",
    "traffic": "Jednoduché API",
    "trafficLabel": "Flexibilní integrace",
    "insights": "Globální dosah",
    "insightsLabel": "Přímé propojení s operátory"
  },
  "heroLiveBadge1": {
    "title": "Okamžité doručení",
    "label": "Ověřovací trasy s ultranízkou latencí"
  },
  "heroLiveBadge2": {
    "title": "2FA operátorské třídy",
    "sub": "Přímé prioritní směrování"
  },
  "whyBadge": "BEZPEČNOSTNÍ INFRASTRUKTURA",
  "whyTitle": "Infrastruktura zpráv, která spolehlivě chrání každé ověření",
  "whySubtitle1": "Podpořte bezpečné ověřování zákazníků pomocí zpráv OTP navržených pro včasné doručení, snadnou integraci aplikací a masivní škálovatelnost.",
  "whySubtitle2": "Navrženo pro minimální zpoždění přenosu a špičkovou míru doručitelnosti v mezinárodních mobilních sítích.",
  "whyCards": [
    {
      "title": "Spolehlivé doručování OTP",
      "desc": "Odesílejte jednorázová hesla prostřednictvím přímých SMS tras zaručujících trvale vysokou úspěšnost ve všech podporovaných sítích.",
      "footer": "Vysoká garance doručení"
    },
    {
      "title": "Bleskové ověřovací zprávy",
      "desc": "Umožněte uživatelům dokončit přihlášení a bezpečnostní procesy během několika sekund díky minimálním časům přenosu.",
      "footer": "Směrování s nízkou latencí"
    },
    {
      "title": "Flexibilní integrace přes API",
      "desc": "Snadno propojte funkce SMS OTP s webovými stránkami, mobilními aplikacemi a backendovými systémy prostřednictvím REST API a SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Škálovatelná autentizace",
      "desc": "Bez problémů zvládněte špičkový nápor registrací, souběžných přihlášení a ověřování transakcí o vysokém objemu.",
      "footer": "Vysoká propustnost"
    }
  ],
  "capabilitiesBadge": "KOMPLETNÍ PLATFORMA OTP",
  "capabilitiesTitle": "Ucelená platforma OTP navržená přesně pro potřeby vašeho podnikání",
  "capabilitiesDesc": "Podporujte nejrůznější scénáře digitálního ověřování pomocí služeb SMS přizpůsobených kritickým firemním procesům.",
  "designSolution": "Začněte ověřovat uživatele",
  "solutionNote": "Optimalizováno pro velkoobjemové 2FA, bezpečné přihlašování a schvalování finančních transakcí.",
  "capabilities": [
    {
      "tag": "Přihlášení 2FA",
      "title": "Ověření přihlášení",
      "desc": "Ověřte přístup uživatelů odesláním jednorázového hesla při přihlášení, abyste zabránili neoprávněnému vniknutí do účtu."
    },
    {
      "tag": "Registrace",
      "title": "Registrace nového účtu",
      "desc": "Potvrďte vytváření nových účtů okamžitým ověřením skutečného vlastnictví zadaného mobilního telefonního čísla."
    },
    {
      "tag": "Reset hesla",
      "title": "Bezpečná obnova účtu",
      "desc": "Umožněte bezpečné obnovení účtu zasláním časově omezených kódů pro legitimní žádosti o resetování hesla."
    },
    {
      "tag": "Transakce",
      "title": "Autentizace transakcí",
      "desc": "Přidejte krok ověření přes SMS pro schvalování bankovních převodů a citlivých online plateb."
    },
    {
      "tag": "Identita",
      "title": "Ověření vlastnictví čísla",
      "desc": "Potvrďte vlastnictví telefonního čísla během onboardingu a procesů dodržování předpisů (KYC)."
    },
    {
      "tag": "Zabezpečení app",
      "title": "Zabezpečení aplikací",
      "desc": "Integrujte zprávy OTP přímo do webových a mobilních aplikací, abyste splnili přísné bezpečnostní standardy."
    },
    {
      "tag": "Automatizace",
      "title": "Automatické OTP triggery",
      "desc": "Odesílejte ověřovací kódy automaticky na základě systémových událostí a předdefinovaných bezpečnostních pravidel."
    },
    {
      "tag": "Vysoký objem",
      "title": "Velkoobjemové zprávy OTP",
      "desc": "Zpracovávejte tisíce ověřovacích požadavků za sekundu díky infrastruktuře připravené na růst vašeho podnikání."
    }
  ],
  "howItWorksBadge": "OVĚŘOVACÍ WORKFLOW",
  "howItWorksTitle": "Jak funguje cyklus doručování kódů OTP",
  "howItWorksSubtitle": "Od volání API až po doručení na mobilní telefon během několika málo sekund.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Požadavek uživatele",
      "desc": "Uživatel spustí akci vyžadující ověření, jako je přihlášení, registrace nebo platba.",
      "note": "Událost v aplikaci"
    },
    {
      "step": "02",
      "title": "Odeslání přes API",
      "desc": "Váš systém předá dočasný kód na naši OTP bránu prostřednictvím zabezpečených koncových bodů REST API.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Prioritní směrování operátora",
      "desc": "Zpráva je okamžitě odeslána přímými trasami operátorů s nejvyšší prioritou ve frontě.",
      "note": "Nízká latence"
    },
    {
      "step": "04",
      "title": "Přijetí a ověření",
      "desc": "Uživatel obdrží kód a dokončí ověření; stav doručení je okamžitě vrácen prostřednictvím webhooku.",
      "note": "DLR hlášení v reálném čase"
    }
  ],
  "networkBadge": "GLOBÁLNÍ SMS POKRYTÍ",
  "networkTitle": "Mezinárodní síť navržená tak, aby ověřování probíhalo bez přerušení",
  "networkDesc": "Oslovte uživatele po celém světě prostřednictvím přímých SMS spojení optimalizovaných pro bezpečné ověřování.",
  "networkBullets": [
    "Přímá SMS konektivita k předním mobilním operátorům po celém světě",
    "Snadná integrace se stávajícími systémy 2FA a ověřování identity",
    "Škálovatelná kapacita schopná zvládnout náhlé špičky v objemu zpráv",
    "Plná transparentnost stavu doručení díky hlášením DLR v reálném čase",
    "Pohodlné odesílání prostřednictvím moderního REST API a standardních protokolů",
    "Specializovaná technická podpora pro časově kritické ověřovací procesy"
  ],
  "networkStats": [
    {
      "val": "Globální pokrytí",
      "label": "Přímé propojení s mezinárodními mobilními operátory"
    },
    {
      "val": "Prioritní trasy",
      "label": "Ověřovací provoz s minimálním zpožděním"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP operátorská brána",
    "sub": "Přímé prioritní směrování pro časově kritické ověřování v reálném čase"
  },
  "networkFooterNote": "Skutečná rychlost doručení závisí na předpisech místních operátorů a kvalitě mobilního signálu příjemce.",
  "momentsBadge": "PŘÍPADY POUŽITÍ & ODVĚTVÍ",
  "momentsTitle": "Vytvořeno pro každý kritický moment ověření",
  "momentsSubtitle": "SMS OTP zajišťuje digitální ověřování v odvětvích, kde je ochrana účtů a důvěra na prvním místě.",
  "moments": [
    {
      "title": "Bankovnictví a Finanční Služby",
      "desc": "Zabezpečte přístupy k účtům a schvalujte převody peněz pomocí vysoce bezpečných procesů OTP.",
      "footer": "Finanční 2FA & autorizace plateb"
    },
    {
      "title": "E-Commerce a Maloobchod",
      "desc": "Ověřujte účty zákazníků, chraňte přihlašování a zabezpečte transakce při placení.",
      "footer": "Bezpečný checkout & ochrana účtů"
    },
    {
      "title": "Cestování a Pohostinství",
      "desc": "Potvrzujte rezervace jízdenek, přístup k rezervacím a změny pomocí okamžitého ověření přes SMS.",
      "footer": "Ověření rezervací & bezpečnost cestujících"
    },
    {
      "title": "Digitální Platformy a SaaS",
      "desc": "Integrujte ověřovací kódy do registrací, obnovení hesel a přihlašování na více zařízeních.",
      "footer": "Plynulý onboarding & trvalá ochrana"
    }
  ],
  "comparison": {
    "comparisonTitle": "Podívejte se, jak SMS OTP posiluje digitální ověřování",
    "comparisonSubtitle": "Vyberte metodu, která nejlépe odpovídá vašim bezpečnostním požadavkům, uživatelskému komfortu a cílové skupině.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Univerzální Dostupnost na Všech Zařízeních",
    "otpItems": [
      "Doručuje jednorázové kódy přímo na jakékoliv mobilní číslo na světě",
      "Funguje okamžitě na všech mobilních telefonech bez nutnosti instalovat aplikaci",
      "Ideální pro hromadné registrace, rychlé přihlášení a nouzové obnovení účtu",
      "Závisí na pokrytí a síle signálu mobilního operátora příjemce"
    ],
    "appTitle": "Aplikace pro Autentizaci",
    "appBadge": "Softwarový Autentizátor",
    "appItems": [
      "Generuje kódy nebo push notifikace ve vyhrazené aplikaci",
      "Může fungovat bez mobilního signálu, pokud je k dispozici aktivní Wi-Fi",
      "Vyžaduje, aby si uživatel aplikaci předem stáhl a nakonfiguroval",
      "Poskytuje další kryptografické bezpečnostní výhody v závislosti na implementaci"
    ],
    "securityNotice": "Bezpečnostní doporučení: SMS OTP spolehlivě potvrzuje fyzické držení telefonního čísla, ale může být zranitelné vůči útokům typu SIM swap. U vysoce citlivých finančních systémů doporučujeme kombinaci s dalšími kontrolami rizik."
  },
  "intelligenceBadge": "INTELIGENTNÍ DORUČOVÁNÍ",
  "intelligenceTitle": "Doručení během sekund & reporting v reálném čase",
  "intelligenceDesc": "Sledujte metriky doručení, časy odezvy operátorů a hlášení DLR, abyste eliminovali jakékoliv zpoždění při přihlašování.",
  "intelligenceBullets": [
    "Fronty s nejvyšší prioritou pro okamžité odesílání ověřovacích kódů",
    "Real-time DLR webhooky pro okamžitý přehled o stavu doručení",
    "Automatické přepnutí na záložní trasy (failover) pro maximální úspěšnost",
    "Podrobná analýza latence rozdělená podle zemí a mobilních operátorů"
  ],
  "intelligenceFootnote": "Vaše servery obdrží oznámení přes webhook ve stejnou sekundu, kdy mobilní telefon kód přijme.",
  "messageLogCard": {
    "title": "Živý Přehled Doručování OTP",
    "badge": "PRIORITNÍ DLR",
    "tab1": "Doručeno",
    "tab2": "Ve frontě",
    "tab3": "Ověřeno",
    "colType": "Typ",
    "colState": "Stav",
    "colReceipt": "Latence Operátora",
    "row1Type": "Přihlašovací OTP",
    "row1State": "Doručeno",
    "row1Receipt": "1.2s Zařízení DLR",
    "row2Type": "Reset Hesla",
    "row2State": "Doručeno",
    "row2Receipt": "0.9s Zařízení DLR",
    "row3Type": "Schválení Platby",
    "row3State": "Doručeno",
    "row3Receipt": "1.1s Zařízení DLR",
    "footerText": "Doručování ověření v řádu sekund v globálních mobilních sítích"
  },
  "protectionTitle": "Bezpečnost navržená pro kritické ověřovací úkony",
  "protectionBadge": "BEZPEČNOST & SHODA S PŘEDPISY",
  "protectionCards": [
    {
      "title": "Rychlostní Limity a Prevence Podvodů",
      "desc": "Chraňte systémy před útoky hrubou silou a nákladným podvodným pumpováním SMS (SMS pumping) pomocí nastavitelných limitů."
    },
    {
      "title": "Globální Shoda ID Odesílatele (Sender ID)",
      "desc": "Zajistěte oficiální registraci jména odesílatele a plný soulad s místními telekomunikačními předpisy v cílových zemích."
    }
  ],
  "timelineBadge": "STRUKTUROVANÁ IMPLEMENTACE",
  "timelineTitle": "Od integrace API až po ostrý provoz, krok za krokem",
  "timelineSubtitle": "Nasaďte SMS OTP pomocí metodického procesu přizpůsobeného bezpečnostním standardům a objemu vaší platformy.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Definice Požadavků",
      "desc": "Určete cílové země, odhadovaný objem zpráv a potřebné ověřovací toky."
    },
    {
      "step": "02",
      "title": "Návrh Procesu",
      "desc": "Nastavte dobu platnosti kódů, intervaly opakovaného odeslání a šablony zpráv."
    },
    {
      "step": "03",
      "title": "Integrace API",
      "desc": "Propojte své systémy s naší bránou prostřednictvím zabezpečeného REST API nebo podnikového protokolu SMPP."
    },
    {
      "step": "04",
      "title": "Testování & Validace",
      "desc": "Ověřte rychlost doručení, zpracování chyb a uživatelský komfort v testovacím prostředí sandbox."
    },
    {
      "step": "05",
      "title": "Spuštění v Produkci",
      "desc": "Začněte odesílat reálný provoz za stálého dohledu a nepřetržité technické podpory."
    }
  ],
  "integrationPlan": {
    "title": "Technické Parametry Integrace OTP",
    "planBadge": "PŘIPRAVENO PRO PRODUKCI",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Časově Kritické 2FA Kódy & Ověření",
    "formats": "Číselná OTP, Alfanumerické Tokeny",
    "feedback": "Potvrzení o Doručení (DLR) v Reálném Čase",
    "senderSetup": "Registrované ID Odesílatele / Vyhrazené Zkrácené Číslo",
    "check1": "Časovače vypršení platnosti a pravidla omezení rychlosti nakonfigurovány",
    "check2": "Záložní trasy a stavové webhooky plně připraveny k provozu",
    "discussNote": "Poraďte se s našimi specialisty a navrhněte ideální autentizační architekturu pro vaši službu.",
    "discussBtn": "Zahájit Integraci"
  },
  "faqBadge": "ČASTO KLADENÉ DOTAZY",
  "faqTitle": "Důležité otázky a odpovědi o službách SMS OTP",
  "faqSubtitle": "Zjistěte, jak naše infrastruktura s nízkou latencí chrání vaše digitální ověřovací procesy.",
  "faqs": [
    {
      "q": "Jak rychle jsou zprávy SMS OTP doručovány?",
      "a": "Naše prioritní trasy doručují ověřovací kódy během několika sekund za běžných podmínek mobilní sítě."
    },
    {
      "q": "Jaké možnosti API jsou k dispozici pro integraci?",
      "a": "Poskytujeme moderní REST API s podrobnou dokumentací a ukázkami kódu, a také protokol SMPP v3.4 pro vysoké objemy provozu."
    },
    {
      "q": "Jak můžeme naši platformu chránit před SMS pumpingem a podvody?",
      "a": "Naše platforma nabízí vestavěné filtry pro omezení rychlosti, blokování rizikových destinací a IP whitelisting k eliminaci podvodného provozu."
    }
  ],
  "ctaBadge": "UPGRADUJTE AUTENTIZACI",
  "ctaTitle": "Učiňte každé ověření rychlejším, bezpečnějším a spolehlivějším",
  "ctaSubtitle": "Poskytněte svým zákazníkům bezpečný digitální zážitek díky vysoce kvalitním službám SMS OTP navrženým pro ochranu účtů a potvrzování transakcí.",
  "contactUs": "Začněte s SMS OTP",
  "ctaFootnote": "Kontaktujte naše specialisty pro více informací o prioritních trasách a konfiguraci API."
};

const ro: OtpSmsServicesTranslation = {
  "heroBadge": "SERVICII SMS OTP • INFRASTRUCTURĂ DE AUTENTIFICARE",
  "heroTitle": "Fiecare verificare, conectată cu fiabilitate absolută și viteză maximă",
  "heroDesc": "Protejați conturile clienților și simplificați autentificarea utilizatorilor cu servicii SMS OTP de înaltă încredere. Trimiteți parole unice pentru conectare, înregistrare, resetare de parole și autorizare de tranzacții printr-o infrastructură de telecomunicații cu latență minimă.",
  "talkToExpert": "Vorbește cu un specialist OTP",
  "exploreCapabilities": "Explorează funcționalitățile",
  "stats": {
    "routing": "OTP Fiabil",
    "routingLabel": "Livrare Imediată",
    "traffic": "API Simplu",
    "trafficLabel": "Integrare Flexibilă",
    "insights": "Acoperire Globală",
    "insightsLabel": "Conexiune Directă cu Operatorii"
  },
  "heroLiveBadge1": {
    "title": "Livrare Instantanee",
    "label": "Rute de verificare cu latență ultra-redusă"
  },
  "heroLiveBadge2": {
    "title": "2FA Nivel Operator",
    "sub": "Rutare directă prioritară"
  },
  "whyBadge": "INFRASTRUCTURĂ DE SECURITATE",
  "whyTitle": "Infrastructură de mesagerie care protejează fiecare verificare",
  "whySubtitle1": "Susțineți autentificarea securizată a utilizatorilor cu mesaje OTP create pentru livrare la timp, integrare facilă și scalabilitate masivă.",
  "whySubtitle2": "Proiectat pentru timpi de transmisie minimi și rate maxime de livrare în rețelele mobile internaționale.",
  "whyCards": [
    {
      "title": "Livrare Fiabilă de Coduri OTP",
      "desc": "Trimiteți parole unice prin rute directe SMS care asigură o rată constantă de succes în toate rețelele partenere.",
      "footer": "Garanție înaltă de livrare"
    },
    {
      "title": "Mesaje Rapide de Verificare",
      "desc": "Permiteți utilizatorilor să finalizeze fluxurile de autentificare în câteva secunde datorită timpilor minimi de tranzit.",
      "footer": "Rutare cu latență redusă"
    },
    {
      "title": "Integrare Flexibilă prin API",
      "desc": "Conectați capacitățile SMS OTP la site-uri web, aplicații mobile și sisteme backend prin REST API și SMPP standard.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Autentificare Scalabilă",
      "desc": "Gestionați cu ușurință vârfurile mari de înregistrări, conectări concomitente și validări de tranzacții fără întreruperi.",
      "footer": "Debit de volum mare"
    }
  ],
  "capabilitiesBadge": "PLATFORMĂ INTEGRATĂ OTP",
  "capabilitiesTitle": "O platformă OTP completă adaptată cerințelor afacerii dumneavoastră",
  "capabilitiesDesc": "Susțineți diverse scenarii de autentificare digitală cu servicii SMS configurate pentru procese corporative critice.",
  "designSolution": "Începeți Verificarea Utilizatorilor",
  "solutionNote": "Optimizat pentru volume mari de 2FA, conectări sigure și autentificări tranzacționale.",
  "capabilities": [
    {
      "tag": "Conectare 2FA",
      "title": "Verificarea Conectării",
      "desc": "Validați accesul utilizatorilor prin trimiterea de parole de unică folosință la conectare pentru a preveni accesul neautorizat."
    },
    {
      "tag": "Înregistrare",
      "title": "Înregistrarea Conturilor Noi",
      "desc": "Confirmați înregistrările noi prin validarea instantanee a deținerii numărului de telefon mobil furnizat."
    },
    {
      "tag": "Resetare Parolă",
      "title": "Recuperarea Sigură a Contului",
      "desc": "Permiteți recuperarea securizată a conturilor prin trimiterea de coduri temporare pentru cererile legitime de resetare."
    },
    {
      "tag": "Tranzacții",
      "title": "Autentificarea Tranzacțiilor",
      "desc": "Adăugați un pas de verificare SMS pentru aprobarea transferurilor bancare și a plăților online importante."
    },
    {
      "tag": "Identitate",
      "title": "Validarea Numărului de Telefon",
      "desc": "Confirmați titularul numărului mobil în cadrul proceselor de înregistrare și conformitate KYC."
    },
    {
      "tag": "Securitate App",
      "title": "Securitatea Aplicațiilor",
      "desc": "Integrați mesajele OTP direct în aplicațiile web și mobile pentru a respecta cele mai stricte standarde de securitate."
    },
    {
      "tag": "Automatizat",
      "title": "Declanșatori OTP Automati",
      "desc": "Trimiteți coduri de verificare în mod automat pe baza evenimentelor din sistem și a regulilor prestabilite."
    },
    {
      "tag": "Volum Mare",
      "title": "Mesagerie OTP la Scară Largă",
      "desc": "Procesați mii de solicitări de verificare pe secundă cu o infrastructură pregătită pentru expansiunea continuă a afacerii."
    }
  ],
  "howItWorksBadge": "FLUX DE VERIFICARE",
  "howItWorksTitle": "Cum funcționează ciclul de livrare a codurilor OTP",
  "howItWorksSubtitle": "De la apelul API până la primirea mesajului pe telefonul mobil în doar câteva secunde.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Solicitarea Utilizatorului",
      "desc": "Utilizatorul inițiază o acțiune care necesită verificare precum conectarea, înregistrarea sau efectuarea unei plăți.",
      "note": "Eveniment în aplicație"
    },
    {
      "step": "02",
      "title": "Transmitere prin API",
      "desc": "Sistemul dumneavoastră transmite codul temporar către gateway-ul nostru OTP prin endpoint-uri REST securizate.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Rutare Prioritară prin Operatori",
      "desc": "Mesajul este expediat imediat pe rute directe de operator cu coadă de prioritate maximă.",
      "note": "Latență redusă"
    },
    {
      "step": "04",
      "title": "Primire și Validare",
      "desc": "Utilizatorul primește codul și finalizează verificarea; starea livrării este returnată în timp real prin webhook.",
      "note": "Raport DLR în timp real"
    }
  ],
  "networkBadge": "ACOPERIRE SMS GLOBALĂ",
  "networkTitle": "O rețea internațională construită pentru a menține verificările fără întrerupere",
  "networkDesc": "Comunicați cu utilizatorii din întreaga lume prin conexiuni directe SMS optimizate pentru fluxuri sigure de autentificare.",
  "networkBullets": [
    "Conectivitate SMS directă către principalii operatori de telefonie mobilă globali",
    "Integrare facilă cu sistemele existente de 2FA și autentificare",
    "Capacitate scalabilă pentru a prelua fără întârzieri vârfurile mari de mesaje",
    "Transparență completă asupra stării de livrare prin rapoarte DLR în timp real",
    "Expediere simplă prin REST API moderne și protocoale standard din industrie",
    "Suport tehnic dedicat pentru procesele de verificare sensibile la timp"
  ],
  "networkStats": [
    {
      "val": "Acoperire Globală",
      "label": "Interconectare directă cu operatorii mobili internaționali"
    },
    {
      "val": "Rute Prioritare",
      "label": "Trafic de verificare gestionat cu latență minimă"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Gateway Operator OTP",
    "sub": "Rutare prioritară directă pentru autentificări urgente în timp real"
  },
  "networkFooterNote": "Viteza reală de livrare depinde de reglementările operatorilor locali și de acoperirea rețelei destinatarului.",
  "momentsBadge": "APLICAȚII & SECTOARE",
  "momentsTitle": "Creat pentru fiecare moment critic de verificare",
  "momentsSubtitle": "SMS OTP asigură autentificarea digitală în domeniile unde protecția conturilor și încrederea sunt esențiale.",
  "moments": [
    {
      "title": "Bănci și Servicii Financiare",
      "desc": "Protejați accesul la conturi și autorizați transferurile financiare prin fluxuri OTP de înaltă securitate.",
      "footer": "2FA financiar & autorizare plăți"
    },
    {
      "title": "E-Commerce și Retail",
      "desc": "Verificați conturile cumpărătorilor, protejați conectările și asigurați plățile la finalizarea comenzii.",
      "footer": "Checkout protejat & securitatea contului"
    },
    {
      "title": "Turism și Ospitalitate",
      "desc": "Confirmați rezervările de bilete, detaliile sejurului și modificările prin verificare SMS instantanee.",
      "footer": "Validare rezervări & siguranța călătorilor"
    },
    {
      "title": "Platforme Digitale și SaaS",
      "desc": "Integrați coduri de verificare la înregistrare, resetarea parolei și conectarea pe dispozitive multiple.",
      "footer": "Onboarding facil & protecție continuă"
    }
  ],
  "comparison": {
    "comparisonTitle": "Comparație: Cum îmbunătățește SMS OTP autentificarea digitală",
    "comparisonSubtitle": "Alegeți metoda care se potrivește cel mai bine cerințelor dumneavoastră de securitate, experienței utilizatorului și publicului țintă.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Accesibilitate Universală",
    "otpItems": [
      "Livrează coduri unice direct pe orice număr de telefon mobil din lume",
      "Funcționează imediat pe orice telefon fără a necesita instalarea vreunei aplicații",
      "Ideal pentru înregistrări masive, conectări rapide și recuperarea conturilor",
      "Depinde de acoperirea și calitatea semnalului operatorului mobil destinatar"
    ],
    "appTitle": "Autentificare prin Aplicație",
    "appBadge": "Autentificator Software",
    "appItems": [
      "Generează coduri sau notificări de aprobare într-o aplicație dedicată",
      "Poate funcționa fără semnal celular dacă există o conexiune Wi-Fi activă",
      "Necesită ca utilizatorul să descarce și să configureze aplicația în prealabil",
      "Oferă măsuri suplimentare de securitate criptografică în funcție de configurare"
    ],
    "securityNotice": "Recomandare de securitate: SMS OTP validează eficient posesia numărului de telefon, dar poate fi expus atacurilor de schimbare a SIM-ului (SIM Swap). Pentru sisteme financiare de mare importanță, combinați-l cu analize de risc suplimentare."
  },
  "intelligenceBadge": "DISTRIBUȚIE INTELIGENTĂ",
  "intelligenceTitle": "Livrare în câteva secunde & raportare în timp real",
  "intelligenceDesc": "Monitorizați indicatorii de livrare, timpul de răspuns al operatorilor și rapoartele DLR pentru a preveni întârzierile la conectare.",
  "intelligenceBullets": [
    "Cozi de prioritate maximă pentru expedierea imediată a codurilor de verificare",
    "Webhook-uri DLR în timp real pentru o transparență instantanee a stării de livrare",
    "Comutare automată pe rute de rezervă (failover) pentru o rată de succes maximă",
    "Analize detaliate de latență defalcate pe țări și operatori de telecomunicații"
  ],
  "intelligenceFootnote": "Serverele dumneavoastră primesc notificare prin webhook în aceeași secundă în care telefonul mobil primește codul.",
  "messageLogCard": {
    "title": "Monitorizare Livrare OTP în Timp Real",
    "badge": "DLR PRIORITAR",
    "tab1": "Livrate",
    "tab2": "În coadă",
    "tab3": "Verificate",
    "colType": "Tip",
    "colState": "Stare",
    "colReceipt": "Latență Operator",
    "row1Type": "OTP Conectare",
    "row1State": "Livrat",
    "row1Receipt": "1.2s DLR Dispozitiv",
    "row2Type": "Resetare Parolă",
    "row2State": "Livrat",
    "row2Receipt": "0.9s DLR Dispozitiv",
    "row3Type": "Auth Plată",
    "row3State": "Livrat",
    "row3Receipt": "1.1s DLR Dispozitiv",
    "footerText": "Livrare de verificare în câteva secunde pe rețelele mobile globale"
  },
  "protectionTitle": "Securitate creată pentru verificări critice",
  "protectionBadge": "SECURITATE & CONFORMITATE",
  "protectionCards": [
    {
      "title": "Limitare de Ritm și Prevenire a Fraudelor",
      "desc": "Protejați sistemele împotriva atacurilor de tip brute force și a fraudelor costisitoare de pompare de SMS (SMS pumping) cu limite configurabile."
    },
    {
      "title": "Conformitate Globală Sender ID",
      "desc": "Asigurați înregistrarea oficială a numelui expeditorului și conformitatea deplină cu legile locale din țările de destinație."
    }
  ],
  "timelineBadge": "IMPLEMENTARE METODICĂ",
  "timelineTitle": "De la integrarea API la lansarea în producție, pas cu pas",
  "timelineSubtitle": "Activați serviciul SMS OTP printr-un proces structurat, aliniat la standardele de securitate și volumele afacerii dumneavoastră.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Analiza Cerințelor",
      "desc": "Stabiliți țările vizate, volumele estimate de mesaje și scenariile de verificare necesare."
    },
    {
      "step": "02",
      "title": "Proiectarea Fluxului",
      "desc": "Configurați durata de valabilitate a codurilor, intervalele de reexpediere și șabloanele de mesaje."
    },
    {
      "step": "03",
      "title": "Integrarea API",
      "desc": "Conectați sistemele dumneavoastră la gateway-ul nostru prin REST API securizate sau protocolul SMPP."
    },
    {
      "step": "04",
      "title": "Testare & Validare",
      "desc": "Verificați viteza de livrare, gestionarea erorilor și experiența utilizatorului în mediul sandbox."
    },
    {
      "step": "05",
      "title": "Lansare în Producție",
      "desc": "Începeți expedierea traficului real beneficiind de monitorizare constantă și suport tehnic dedicat."
    }
  ],
  "integrationPlan": {
    "title": "Specificații Tehnice Integrare OTP",
    "planBadge": "PREGĂTIT PENTRU PRODUCȚIE",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Coduri 2FA & Verificări Urgente",
    "formats": "OTP Numerice, Tokenuri Alfanumerice",
    "feedback": "Confirmări de Livrare DLR în Timp Real",
    "senderSetup": "Sender ID Înregistrat / Număr Scurt Dedicat",
    "check1": "Temporizatoarele de expirare și limitările de viteză sunt configurate",
    "check2": "Rutele de rezervă și webhook-urile de raportare sunt complet funcționale",
    "discussNote": "Discutați cu specialiștii noștri pentru a proiecta arhitectura optimă de autentificare pentru platforma dumneavoastră.",
    "discussBtn": "Începe Integrarea"
  },
  "faqBadge": "ÎNTREBĂRI FRECVENTE",
  "faqTitle": "Răspunsuri la întrebările esențiale despre serviciile SMS OTP",
  "faqSubtitle": "Aflați cum infrastructura noastră cu latență redusă vă protejează procesele de verificare digitală.",
  "faqs": [
    {
      "q": "Cât de repede sunt livrate mesajele SMS OTP?",
      "a": "Rutele noastre prioritare livrează codurile de verificare în doar câteva secunde în condiții standard de rețea mobilă."
    },
    {
      "q": "Ce opțiuni de API sunt disponibile pentru integrare?",
      "a": "Oferim REST API moderne cu documentație detaliată și mostre de cod, precum și protocolul SMPP v3.4 pentru volume mari corporative."
    },
    {
      "q": "Cum putem preveni fraudele și pomparea de SMS-uri (SMS pumping)?",
      "a": "Platforma include filtre de limitare a vitezei, blocarea destinațiilor riscante și liste albe de IP-uri pentru a elimina traficul abuziv."
    }
  ],
  "ctaBadge": "MODERNIZAȚI AUTENTIFICAREA",
  "ctaTitle": "Faceți fiecare verificare mai rapidă, mai sigură și mai fiabilă",
  "ctaSubtitle": "Oferiți clienților o experiență digitală de încredere prin servicii SMS OTP de înaltă performanță pentru protecția conturilor și autorizarea plăților.",
  "contactUs": "Începeți cu SMS OTP",
  "ctaFootnote": "Contactați echipa noastră pentru mai multe informații despre rutele prioritare și opțiunile de configurare API."
};

const hu: OtpSmsServicesTranslation = {
  "heroBadge": "OTP SMS SZOLGÁLTATÁSOK • HITELESÍTÉSI INFRASTRUKTÚRA",
  "heroTitle": "Minden hitelesítés maximális megbízhatósággal és gyorsasággal célba ér",
  "heroDesc": "Védje meg ügyfelei fiókjait és egyszerűsítse a felhasználói azonosítást rendkívül megbízható OTP SMS szolgáltatásokkal. Küldjön egyszeri jelszavakat belépésekhez, regisztrációkhoz, jelszó-visszaállításokhoz és tranzakció-jóváhagyásokhoz minimális késleltetésű távközlési infrastruktúrán keresztül.",
  "talkToExpert": "Beszéljen OTP szakértővel",
  "exploreCapabilities": "Funkciók felfedezése",
  "stats": {
    "routing": "Megbízható OTP",
    "routingLabel": "Azonnali kézbesítés",
    "traffic": "Egyszerű API",
    "trafficLabel": "Rugalmas integráció",
    "insights": "Globális elérés",
    "insightsLabel": "Közvetlen operátori kapcsolat"
  },
  "heroLiveBadge1": {
    "title": "Azonnali kézbesítés",
    "label": "Ultragyors azonosítási útvonalak"
  },
  "heroLiveBadge2": {
    "title": "Operátori szintű 2FA",
    "sub": "Közvetlen prioritásos továbbítás"
  },
  "whyBadge": "BIZTONSÁGI INFRASTRUKTÚRA",
  "whyTitle": "Üzenetküldési infrastruktúra, amely minden ellenőrzést megvéd",
  "whySubtitle1": "Támogassa a biztonságos ügyfélazonosítást olyan OTP SMS-ekkel, amelyeket pontos kézbesítésre, egyszerű alkalmazás-integrációra és hatalmas skálázhatóságra terveztünk.",
  "whySubtitle2": "Minimális átviteli késleltetésre és kiemelkedő célbaérési arányokra kifejlesztve nemzetközi mobilhálózatokon.",
  "whyCards": [
    {
      "title": "Megbízható OTP kézbesítés",
      "desc": "Küldjön egyszeri kódokat közvetlen SMS útvonalakon, amelyek garantálják az egyenletesen magas sikeres kézbesítést minden támogatott hálózatban.",
      "footer": "Magas kézbesítési garancia"
    },
    {
      "title": "Gyors hitelesítő üzenetek",
      "desc": "Segítse a felhasználókat a belépési és biztonsági folyamatok másodpercek alatti befejezésében a minimális továbbítási idő révén.",
      "footer": "Alacsony késleltetésű továbbítás"
    },
    {
      "title": "Rugalmas API integráció",
      "desc": "Kapcsolja össze egyszerűen az OTP SMS funkciókat weboldalakkal, mobilappokkal és háttérrendszerekkel REST API-n és SMPP-n keresztül.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Skálázható azonosítás",
      "desc": "Kezelje zökkenőmentesen a hirtelen regisztrációs csúcsokat, egyidejű belépéseket és a nagy forgalmú tranzakciókat leállás nélkül.",
      "footer": "Nagy áteresztőképesség"
    }
  ],
  "capabilitiesBadge": "TELJES KÖRŰ OTP PLATFORM",
  "capabilitiesTitle": "Az Ön üzleti igényeire szabott integrált OTP platform",
  "capabilitiesDesc": "Támogassa a legkülönfélébb digitális azonosítási helyzeteket üzletileg kritikus folyamatokhoz optimalizált SMS szolgáltatásokkal.",
  "designSolution": "Kezdje el a felhasználók azonosítását",
  "solutionNote": "Nagy forgalmú 2FA-ra, biztonságos bejelentkezésekre és tranzakció-hitelesítésre optimalizálva.",
  "capabilities": [
    {
      "tag": "Belépés 2FA",
      "title": "Bejelentkezés-ellenőrzés",
      "desc": "Erősítse meg a felhasználók jogosultságát egyszeri jelszavakkal a bejelentkezés során az illetéktelen hozzáférések kizárására."
    },
    {
      "tag": "Regisztráció",
      "title": "Új fiók regisztrációja",
      "desc": "Hagyja jóvá az új regisztrációkat a megadott mobiltelefonszám valós birtoklásának azonnali visszaigazolásával."
    },
    {
      "tag": "Visszaállítás",
      "title": "Biztonságos fiók-helyreállítás",
      "desc": "Tegye lehetővé a fiókok biztonságos visszaállítását időkorlátos kódokkal a jogos jelszó-visszaállítási kérésekhez."
    },
    {
      "tag": "Tranzakciók",
      "title": "Tranzakció-hitelesítés",
      "desc": "Egészítse ki a banki átutalásokat és az online fizetési műveleteket biztonsági SMS lépéssel a kockázatok megszüntetésére."
    },
    {
      "tag": "Azonosítás",
      "title": "Telefonszám-ellenőrzés",
      "desc": "Erősítse meg a telefonszám birtoklását az onboarding és a jogszabályi megfelelési (KYC) folyamatok során."
    },
    {
      "tag": "Alkalmazásvédelem",
      "title": "Alkalmazásbiztonság",
      "desc": "Építse be az OTP SMS-eket közvetlenül a webes és mobilalkalmazásokba a szigorú adatbiztonsági követelmények teljesítéséhez."
    },
    {
      "tag": "Automatizált",
      "title": "Automatikus OTP indítás",
      "desc": "Küldjön hitelesítő kódokat automatikusan előre meghatározott rendszeresemények és biztonsági szabályok alapján."
    },
    {
      "tag": "Nagy volumen",
      "title": "Tömeges OTP üzenetküldés",
      "desc": "Dolgozzon fel másodpercenként több ezer kérést a vállalkozása növekedésével lépést tartó kapacitással."
    }
  ],
  "howItWorksBadge": "ELLENŐRZÉSI FOLYAMAT",
  "howItWorksTitle": "Hogyan működik az OTP kódok kézbesítési folyamata",
  "howItWorksSubtitle": "Az API hívástól a mobiltelefonon történő kézhezvételig mindössze néhány másodperc alatt.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Felhasználói kérés",
      "desc": "A felhasználó azonosítást igénylő műveletet kezdeményez, mint például belépés, regisztráció vagy fizetés.",
      "note": "Alkalmazási esemény"
    },
    {
      "step": "02",
      "title": "API-n keresztüli beküldés",
      "desc": "Rendszere biztonságos REST API végpontokon keresztül átadja az ideiglenes kódot OTP átjárónknak.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Prioritásos operátori továbbítás",
      "desc": "Az üzenet haladéktalanul elindul a közvetlen szolgáltatói vonalakon a legmagasabb prioritású sorban.",
      "note": "Minimális késleltetés"
    },
    {
      "step": "04",
      "title": "Átvétel és visszaigazolás",
      "desc": "A felhasználó megkapja a kódot és befejezi az azonosítást; a kézbesítési állapot azonnal visszajut webhookon keresztül.",
      "note": "Valós idejű DLR"
    }
  ],
  "networkBadge": "GLOBÁLIS SMS LEFEDETTSÉG",
  "networkTitle": "Világméretű hálózat az ellenőrzések folyamatos működésének biztosítására",
  "networkDesc": "Érje el felhasználóit nemzetközileg a biztonságos azonosításra optimalizált közvetlen SMS kapcsolatokon keresztül.",
  "networkBullets": [
    "Közvetlen SMS kapcsolat a világ vezető mobilszolgáltatóival",
    "Könnyű integráció meglévő 2FA és azonosítási rendszerekkel",
    "Méretezhető kapacitás az üzenetforgalom hirtelen megugrásainak kezelésére",
    "Teljes átláthatóság a kézbesítési állapotról a valós idejű DLR jelentésekkel",
    "Kényelmes beküldés modern REST API-kon és iparági szabvány protokollokon keresztül",
    "Dedikált szakmai támogatás a szigorúan időérzékeny azonosítási folyamatokhoz"
  ],
  "networkStats": [
    {
      "val": "Globális lefedettség",
      "label": "Közvetlen kapcsolat nemzetközi mobilhálózatokkal"
    },
    {
      "val": "Kiemelt útvonalak",
      "label": "Minimális késleltetéssel kezelt hitelesítési forgalom"
    }
  ],
  "networkBadgeOverlay": {
    "title": "OTP operátori átjáró",
    "sub": "Közvetlen prioritásos továbbítás azonnali és kritikus hitelesítésekhez"
  },
  "networkFooterNote": "A tényleges kézbesítési sebesség a helyi operátori szabályozásoktól és a címzett térerősségétől függ.",
  "momentsBadge": "ALKALMAZÁSI TERÜLETEK & IPARÁGAK",
  "momentsTitle": "Minden kritikus hitelesítési pillanatra felkészítve",
  "momentsSubtitle": "Az OTP SMS támogatja a digitális folyamatokat minden olyan szektorban, ahol a fiókvédelem és a bizalom elsődleges.",
  "moments": [
    {
      "title": "Bankok és Pénzügyi Szolgáltatások",
      "desc": "Védje a számlahozzáféréseket és hagyjon jóvá pénzügyi átutalásokat biztonságos OTP folyamatokkal.",
      "footer": "Pénzügyi 2FA & fizetési jóváhagyás"
    },
    {
      "title": "E-Kereskedelem és Kiskereskedelem",
      "desc": "Ellenőrizze a vásárlói fiókokat, védje a belépéseket és tegye biztonságossá a tranzakciókat a pénztárnál.",
      "footer": "Védett fizetés & fiókbiztonság"
    },
    {
      "title": "Utazás és Vendéglátás",
      "desc": "Erősítse meg a jegyfoglalásokat, a foglalási adatokat és a változtatásokat azonnali SMS-ellenőrzéssel.",
      "footer": "Foglalás-visszaigazolás & utasbiztonság"
    },
    {
      "title": "Digitális Platformok és SaaS",
      "desc": "Építsen be kódokat a regisztrációkba, jelszó-visszaállításokba és a többeszközös bejelentkezésekbe.",
      "footer": "Zökkenőmentes belépés & tartós védelem"
    }
  ],
  "comparison": {
    "comparisonTitle": "Nézze meg, hogyan erősíti az OTP SMS a digitális hitelesítést",
    "comparisonSubtitle": "Válassza ki a biztonsági elvárásainak, felhasználói élményének és célközönségének legmegfelelőbb módszert.",
    "otpTitle": "OTP SMS",
    "otpBadge": "Univerzális Elérhetőség Minden Készüléken",
    "otpItems": [
      "Egyszeri kódokat kézbesít közvetlenül bármely mobiltelefonszámra",
      "Bármelyik telefonon azonnal működik további alkalmazás letöltése nélkül",
      "Kiválóan alkalmas tömeges regisztrációkhoz, gyors belépéshez és fiók-helyreállításhoz",
      "A fogadó mobilszolgáltató hálózati lefedettségétől és vételétől függ"
    ],
    "appTitle": "Alkalmazásalapú Hitelesítés",
    "appBadge": "Szoftveres Hitelesítő",
    "appItems": [
      "Kódokat vagy jóváhagyási értesítéseket generál egy külön applikáción belül",
      "Mobilhálózat nélkül is működhet, amennyiben aktív Wi-Fi kapcsolat áll rendelkezésre",
      "Megköveteli a felhasználótól az alkalmazás előzetes letöltését és beállítását",
      "A megvalósítástól függően további kriptográfiai biztonsági előnyöket nyújt"
    ],
    "securityNotice": "Biztonsági ajánlás: Az OTP SMS hatékonyan igazolja a telefonszám birtoklását, de kitett lehet a SIM-swap támadásoknak. Kiemelten érzékeny pénzügyi rendszerek esetén kombinálja további kockázatkezelési szabályokkal."
  },
  "intelligenceBadge": "INTELLIGENS KÉZBESÍTÉS",
  "intelligenceTitle": "Másodpercek alatti kézbesítés & valós idejű állapotjelentés",
  "intelligenceDesc": "Kövesse nyomon a kézbesítési mutatókat, operátori válaszidőket és DLR jelentéseket a bejelentkezési késedelmek megelőzésére.",
  "intelligenceBullets": [
    "Kiemelt prioritású várólisták az egyszeri kódok azonnali kiküldéséhez",
    "Valós idejű DLR webhookok a kézbesítési állapot azonnali átláthatóságáért",
    "Automatikus tartalék útvonalváltás (failover) a maximális sikerességért",
    "Részletes késleltetési elemzések országonként és mobilszolgáltatónként"
  ],
  "intelligenceFootnote": "Szerverei pontosan abban a másodpercben kapnak értesítést webhookon, amikor a mobiltelefon fogadja a kódot.",
  "messageLogCard": {
    "title": "Élő OTP Kézbesítés-ellenőrzési Napló",
    "badge": "PRIORITÁSOS DLR",
    "tab1": "Kézbesítve",
    "tab2": "Várakozik",
    "tab3": "Igazolva",
    "colType": "Típus",
    "colState": "Állapot",
    "colReceipt": "Operátori késleltetés",
    "row1Type": "Belépési OTP",
    "row1State": "Kézbesítve",
    "row1Receipt": "1.2s Készülék DLR",
    "row2Type": "Jelszóreset",
    "row2State": "Kézbesítve",
    "row2Receipt": "0.9s Készülék DLR",
    "row3Type": "Fizetés-auth",
    "row3State": "Kézbesítve",
    "row3Receipt": "1.1s Készülék DLR",
    "footerText": "Másodpercek alatti hitelesítési kézbesítés globális mobilhálózatokon"
  },
  "protectionTitle": "Kritikus azonosítási feladatokra tervezett védelem",
  "protectionBadge": "BIZTONSÁG & MEGFELELŐSÉG",
  "protectionCards": [
    {
      "title": "Sebességkorlátozás és Csalásmegelőzés",
      "desc": "Védje meg rendszereit a brute force támadásoktól és a költséges SMS-pumpálástól testre szabható kéréskorlátokkal."
    },
    {
      "title": "Globális Feladói Azonosító (Sender ID) Megfelelőség",
      "desc": "Biztosítsa a hivatalos feladónév-regisztrációt és a helyi távközlési jogszabályok teljes körű betartását."
    }
  ],
  "timelineBadge": "STRUKTURÁLT BEVEZETÉS",
  "timelineTitle": "Az API integrációtól az éles indulásig, lépésről lépésre",
  "timelineSubtitle": "Vezesse be az OTP SMS-t a platformja biztonsági elvárásaihoz és forgalmához igazodó, átgondolt folyamattal.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Követelmények Feltárása",
      "desc": "Határozza meg a célországokat, a becsült forgalmat és a szükséges azonosítási folyamatokat."
    },
    {
      "step": "02",
      "title": "Folyamattervezés",
      "desc": "Állítsa be a kódok érvényességi idejét, az újraküldési korlátokat és az üzenetsablonokat."
    },
    {
      "step": "03",
      "title": "API Bekötés",
      "desc": "Kapcsolja össze rendszereit átjárónkkal biztonságos REST API-nkon vagy vállalati SMPP-nken keresztül."
    },
    {
      "step": "04",
      "title": "Tesztelés & Érvényesítés",
      "desc": "Ellenőrizze a kézbesítési sebességet, a hibakezelést és a felhasználói élményt a sandbox környezetben."
    },
    {
      "step": "05",
      "title": "Éles Üzembe Állás",
      "desc": "Indítsa el a valós forgalmat folyamatos felügyelet és dedikált mérnöki támogatás mellett."
    }
  ],
  "integrationPlan": {
    "title": "OTP Integrációs Műszaki Paraméterek",
    "planBadge": "ÉLES ÜZEMRE KÉSZ",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Időérzékeny 2FA Kódok & Hitelesítés",
    "formats": "Numerikus OTP, Alfanumerikus Tokenek",
    "feedback": "Valós Idejű DLR Kézbesítési Jelentések",
    "senderSetup": "Regisztrált Sender ID / Dedikált Rövid Szám",
    "check1": "Lejárati időzítők és kéréskorlátozási szabályok beállítva",
    "check2": "Tartalék útvonalak és állapot-webhookok működésre készek",
    "discussNote": "Kérje ki mérnökeink véleményét a szolgáltatásához leginkább illeszkedő hitelesítési architektúráról.",
    "discussBtn": "Integráció Indítása"
  },
  "faqBadge": "GYAKRAN ISMÉTELT KÉRDÉSEK",
  "faqTitle": "Fontos kérdések és válaszok az OTP SMS szolgáltatásokról",
  "faqSubtitle": "Tudja meg, hogyan védi meg az alacsony késleltetésű infrastruktúra az Ön digitális ellenőrzési folyamatait.",
  "faqs": [
    {
      "q": "Milyen gyorsan érkeznek meg az OTP SMS üzenetek?",
      "a": "Kiemelt útvonalaink normál mobilhálózati körülmények között néhány másodperc alatt eljuttatják a kódokat a címzetthez."
    },
    {
      "q": "Milyen API lehetőségek állnak rendelkezésre az integrációhoz?",
      "a": "Korszerű REST API-t biztosítunk kódpéldákkal és dokumentációval, valamint SMPP v3.4 protokollt nagyvállalati forgalomhoz."
    },
    {
      "q": "Hogyan védekezhetünk az SMS-pumpálás és a csalások ellen?",
      "a": "Platformunk beépített sebességkorlátokat, kockázatos desztinációk blokkolását és IP-fehérlistázást kínál a visszaélések kiszűrésére."
    }
  ],
  "ctaBadge": "KORSZERŰSÍTSE AZ AZONOSÍTÁST",
  "ctaTitle": "Tegyen minden ellenőrzést gyorsabbá, biztonságosabbá és megbízhatóbbá",
  "ctaSubtitle": "Biztosítson biztonságos digitális élményt ügyfeleinek számlavédelemre és fizetési jóváhagyásokra tervezett OTP SMS szolgáltatásokkal.",
  "contactUs": "Kezdés OTP SMS-sel",
  "ctaFootnote": "Vegye fel a kapcsolatot szakértőinkkel a prioritásos útvonalakról és az API-beállításokról szóló tájékoztatásért."
};

const uk: OtpSmsServicesTranslation = {
  "heroBadge": "СЛУЖБИ SMS OTP • ІНФРАСТРУКТУРА АУТЕНТИФІКАЦІЇ",
  "heroTitle": "Кожна верифікація доставлена з абсолютною надійністю та швидкістю",
  "heroDesc": "Захистіть облікові записи клієнтів та спростіть аутентифікацію користувачів за допомогою високонадійних служб SMS OTP. Надсилайте одноразові паролі для входу, реєстрації, відновлення доступу та підтвердження транзакцій через телекомунікаційну інфраструктуру ультранизької затримки.",
  "talkToExpert": "Зв'язатися зі спеціалістом з OTP",
  "exploreCapabilities": "Дослідити можливості",
  "stats": {
    "routing": "Надійний OTP",
    "routingLabel": "Миттєва доставка",
    "traffic": "Простий API",
    "trafficLabel": "Гнучка інтеграція",
    "insights": "Глобальне охоплення",
    "insightsLabel": "Пряме з'єднання з операторами"
  },
  "heroLiveBadge1": {
    "title": "Миттєва доставка",
    "label": "Маршрути перевірки з ультранизькою затримкою"
  },
  "heroLiveBadge2": {
    "title": "2FA операторського рівня",
    "sub": "Прямий пріоритетний роутинг"
  },
  "whyBadge": "ІНФРАСТРУКТУРА БЕЗПЕКИ",
  "whyTitle": "Інфраструктура повідомлень, що надійно захищає кожну операцію",
  "whySubtitle1": "Підтримуйте безпечну аутентифікацію користувачів завдяки SMS-повідомленням OTP, створеним для оперативної доставки, легкої інтеграції та масштабного зростання.",
  "whySubtitle2": "Розроблено для мінімальної затримки передачі та найвищих показників успішної доставки у міжнародних мережах зв'язку.",
  "whyCards": [
    {
      "title": "Надійна доставка OTP",
      "desc": "Надсилайте одноразові паролі через виділені прямі SMS-маршрути, що забезпечують стабільно високу якість зв'язку у всіх мережах.",
      "footer": "Висока гарантія доставки"
    },
    {
      "title": "Швидкі повідомлення верифікації",
      "desc": "Допоможіть користувачам завершувати процеси входу та безпеки за лічені секунди завдяки мінімальному часу транзиту.",
      "footer": "Маршрутизація з низькою затримкою"
    },
    {
      "title": "Гнучка інтеграція через API",
      "desc": "Легко підключайте функції SMS OTP до веб-сайтів, мобільних додатків та серверних платформ через REST API та SMPP.",
      "footer": "REST API & SMPP"
    },
    {
      "title": "Масштабована аутентифікація",
      "desc": "Впевнено обробляйте пікові навантаження під час масових реєстрацій, одночасних входів та підтвердження транзакцій.",
      "footer": "Висока пропускна здатність"
    }
  ],
  "capabilitiesBadge": "КОМПЛЕКСНА ПЛАТФОРМА OTP",
  "capabilitiesTitle": "Інтегрована платформа OTP, адаптована під потреби вашого бізнесу",
  "capabilitiesDesc": "Підтримуйте різноманітні сценарії цифрової ідентифікації за допомогою SMS-сервісів, оптимізованих для критично важливих процесів.",
  "designSolution": "Почати верифікацію користувачів",
  "solutionNote": "Налаштовано для великих обсягів 2FA, безпечного входу та аутентифікації транзакцій.",
  "capabilities": [
    {
      "tag": "Вхід 2FA",
      "title": "Перевірка під час входу",
      "desc": "Підтверджуйте права доступу користувачів відправкою одноразових паролів під час авторизації для блокування несанкціонованого доступу."
    },
    {
      "tag": "Реєстрація",
      "title": "Реєстрація нових облікових записів",
      "desc": "Підтверджуйте створення нових акаунтів миттєвою перевіркою реального володіння вказаним номером мобільного телефону."
    },
    {
      "tag": "Скидання пароля",
      "title": "Безпечне відновлення акаунта",
      "desc": "Забезпечте надійне відновлення доступу за допомогою тимчасових кодів для легітимних запитів на зміну пароля."
    },
    {
      "tag": "Транзакції",
      "title": "Аутентифікація транзакцій",
      "desc": "Додайте крок SMS-перевірки для авторизації банківських переказів та важливих онлайн-платежів."
    },
    {
      "tag": "Ідентифікація",
      "title": "Підтвердження номера телефону",
      "desc": "Перевіряйте володіння номером телефону в процесах реєстрації та виконання регуляторних вимог (KYC)."
    },
    {
      "tag": "Безпека додатків",
      "title": "Безпека застосунків",
      "desc": "Інтегруйте повідомлення OTP безпосередньо у веб- та мобільні додатки для відповідності суворим нормам захисту інформації."
    },
    {
      "tag": "Автоматизація",
      "title": "Автоматичні тригери OTP",
      "desc": "Надсилайте коди верифікації автоматично на основі системних подій та попередньо встановлених правил безпеки."
    },
    {
      "tag": "Великий обсяг",
      "title": "Масштабовані обсяги OTP",
      "desc": "Обробляйте тисячі запитів на перевірку щосекунди завдяки інфраструктурі, готовій до стрімкого зростання компанії."
    }
  ],
  "howItWorksBadge": "РОБОЧИЙ ПРОЦЕС ВЕРИФІКАЦІЇ",
  "howItWorksTitle": "Як працює цикл доставки кодів OTP",
  "howItWorksSubtitle": "Від виклику API до отримання на мобільному телефоні лише за кілька секунд.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "Запит користувача",
      "desc": "Користувач ініціює дію, що вимагає перевірки: вхід у систему, реєстрацію або платіж.",
      "note": "Подія в додатку"
    },
    {
      "step": "02",
      "title": "Відправка через API",
      "desc": "Ваша система передає тимчасовий код на наш шлюз OTP через захищені кінцеві точки REST API.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "Пріоритетне маршрутизування",
      "desc": "Повідомлення негайно відправляється прямими каналами операторів із найвищим пріоритетом у черзі.",
      "note": "Низька затримка"
    },
    {
      "step": "04",
      "title": "Отримання та підтвердження",
      "desc": "Користувач отримує код і завершує верифікацію; статус доставки повертається в реальному часі через вебхук.",
      "note": "Звіт DLR онлайн"
    }
  ],
  "networkBadge": "ГЛОБАЛЬНЕ ПОКРИТТЯ SMS",
  "networkTitle": "Міжнародна мережа, створена для безперебійного підтвердження операцій",
  "networkDesc": "Охоплюйте користувачів у всьому світі через прямі канали SMS, оптимізовані для безпечної аутентифікації.",
  "networkBullets": [
    "Пряме підключення до провідних мобільних операторів у всьому світі",
    "Проста інтеграція з наявними системами 2FA та верифікації",
    "Масштабована потужність для безперебійної обробки сплесків трафіку",
    "Повна прозорість процесу завдяки звітам про доставку (DLR) у реальному часі",
    "Зручна відправка через сучасні REST API та галузеві протоколи",
    "Виділена інженерна підтримка для процесів верифікації, чутливих до часу"
  ],
  "networkStats": [
    {
      "val": "Глобальне покриття",
      "label": "Пряме з'єднання з міжнародними мобільними операторами"
    },
    {
      "val": "Пріоритетні шляхи",
      "label": "Трафік верифікації з мінімальною затримкою"
    }
  ],
  "networkBadgeOverlay": {
    "title": "Операторський шлюз OTP",
    "sub": "Пряма пріоритетна маршрутизація для термінової аутентифікації в реальному часі"
  },
  "networkFooterNote": "Фактична швидкість доставки залежить від правил місцевих операторів зв'язку та умов мережі отримувача.",
  "momentsBadge": "СФЕРИ ВИКОРИСТАННЯ & ГАЛУЗІ",
  "momentsTitle": "Створено для кожного вирішального моменту перевірки",
  "momentsSubtitle": "SMS OTP забезпечує цифрове підтвердження в галузях, де безпека даних та захист акаунтів є найвищим пріоритетом.",
  "moments": [
    {
      "title": "Банки та Фінансові Сервіси",
      "desc": "Захищайте вхід до акаунтів та авторизуйте грошові перекази за допомогою високонадійних процесів OTP.",
      "footer": "Фінансовий 2FA & авторизація платежів"
    },
    {
      "title": "Електронна Комерція та Ритейл",
      "desc": "Перевіряйте акаунти покупців, захищайте вхід та убезпечуйте платежі під час оформлення замовлення.",
      "footer": "Захищений чекаут & збереження акаунтів"
    },
    {
      "title": "Подорожі та Гостинність",
      "desc": "Підтверджуйте бронювання квитків, доступ до рейсів та зміни замовлень через миттєву перевірку SMS.",
      "footer": "Валідація бронювань & безпека пасажирів"
    },
    {
      "title": "Цифрові Платформи та SaaS",
      "desc": "Впроваджуйте одноразові коди під час реєстрації, зміни пароля та входу з багатьох пристроїв.",
      "footer": "Легкий онбординг & постійний захист"
    }
  ],
  "comparison": {
    "comparisonTitle": "Порівняння: як SMS OTP підсилює цифрову аутентифікацію",
    "comparisonSubtitle": "Оберіть метод, який найкраще відповідає вашим стандартам безпеки, зручності користувачів та цільовій аудиторії.",
    "otpTitle": "SMS OTP",
    "otpBadge": "Універсальна Доступність на Всіх Пристроях",
    "otpItems": [
      "Доставляє одноразові паролі безпосередньо на будь-який мобільний номер у світі",
      "Працює на всіх мобільних телефонах без необхідності встановлювати сторонній додаток",
      "Ідеально підходить для масових реєстрацій, швидкого входу та відновлення доступу",
      "Залежить від покриття та якості сигналу мобільного оператора одержувача"
    ],
    "appTitle": "Аутентифікація через Додаток",
    "appBadge": "Програмний Аутентифікатор",
    "appItems": [
      "Генерує коди або push-сповіщення всередині спеціального додатка",
      "Може функціонувати без мобільного зв'язку за наявності активного Wi-Fi",
      "Вимагає від користувача попереднього завантаження та налаштування додатка",
      "Забезпечує додаткові криптографічні заходи безпеки залежно від налаштування"
    ],
    "securityNotice": "Рекомендація з безпеки: SMS OTP надійно підтверджує фізичне володіння номером телефону, але може бути вразливим до атак заміни SIM-картки (SIM Swap). Для критично важливих фінансових систем поєднуйте його з додатковими оцінками ризиків."
  },
  "intelligenceBadge": "ІНТЕЛЕКТУАЛЬНА ДОСТАВКА",
  "intelligenceTitle": "Доставка за секунди & прозорі звіти в реальному часі",
  "intelligenceDesc": "Контролюйте показники доставки, швидкість відповіді операторів та звіти DLR для запобігання затримкам при вході.",
  "intelligenceBullets": [
    "Черги найвищого пріоритету для негайної відправки одноразових кодів",
    "Вебхуки DLR у реальному часі для повної прозорості статусу відправлення",
    "Автоматичне перемикання на резервні канали (failover) для максимального успіху",
    "Детальна аналітика затримок з розбивкою за країнами та мобільними операторами"
  ],
  "intelligenceFootnote": "Ваші сервери отримують сповіщення через вебхук рівно в ту секунду, коли телефон приймає повідомлення.",
  "messageLogCard": {
    "title": "Онлайн Моніторинг Доставки OTP",
    "badge": "ПРІОРИТЕТ DLR",
    "tab1": "Доставлено",
    "tab2": "У черзі",
    "tab3": "Перевірено",
    "colType": "Тип",
    "colState": "Статус",
    "colReceipt": "Затримка оператора",
    "row1Type": "OTP для входу",
    "row1State": "Доставлено",
    "row1Receipt": "1.2с DLR Пристрою",
    "row2Type": "Скидання пароля",
    "row2State": "Доставлено",
    "row2Receipt": "0.9с DLR Пристрою",
    "row3Type": "Auth Платежу",
    "row3State": "Доставлено",
    "row3Receipt": "1.1с DLR Пристрою",
    "footerText": "Доставка кодів за секунди у міжнародних мобільних мережах"
  },
  "protectionTitle": "Безпека, створена для відповідальних перевірок",
  "protectionBadge": "БЕЗПЕКА & ВІДПОВІДНІСТЬ НОРМАМ",
  "protectionCards": [
    {
      "title": "Обмеження Частоти та Захист від Фроду",
      "desc": "Захистіть інфраструктуру від атак підбору та витратного спам-накачування SMS (SMS pumping) за допомогою гнучких лімітів."
    },
    {
      "title": "Міжнародна Відповідність Імені Відправника (Sender ID)",
      "desc": "Забезпечте офіційну реєстрацію імені відправника та повне дотримання законодавства у країнах призначення."
    }
  ],
  "timelineBadge": "ЕТАПИ ВПРОВАДЖЕННЯ",
  "timelineTitle": "Від інтеграції API до промислового старту, крок за кроком",
  "timelineSubtitle": "Запустіть послугу SMS OTP за структурованою схемою, адаптованою до вимог безпеки та обсягів вашого бізнесу.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "Визначення Вимог",
      "desc": "Уточніть країни відправки, прогнозовані обсяги повідомлень та особливості сценаріїв верифікації."
    },
    {
      "step": "02",
      "title": "Проєктування Логіки",
      "desc": "Встановіть тривалість дії кодів, інтервали повторної відправки та шаблони повідомлень."
    },
    {
      "step": "03",
      "title": "Інтеграція API",
      "desc": "Підключіть ваші системи до нашого шлюзу через безпечні REST API або корпоративний протокол SMPP."
    },
    {
      "step": "04",
      "title": "Тестування & Перевірка",
      "desc": "Перевірте швидкість доставки, обробку помилок та взаємодію з користувачем у тестовому середовищі sandbox."
    },
    {
      "step": "05",
      "title": "Запуск у Продакшн",
      "desc": "Розпочніть передачу реального трафіку за постійного моніторингу якості та технічної підтримки."
    }
  ],
  "integrationPlan": {
    "title": "Технічні Параметри Інтеграції OTP",
    "planBadge": "ГОТОВО ДО ЗАПУСКУ",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "Термінові Коди 2FA & Автентифікація",
    "formats": "Цифрові OTP, Буквено-цифрові Токени",
    "feedback": "Звіти про Доставку DLR у Реальному Часі",
    "senderSetup": "Зареєстрований Sender ID / Короткий Номер",
    "check1": "Таймери завершення дії та правила обмеження частоти налаштовано",
    "check2": "Резервні канали та вебхуки звітів готові до роботи",
    "discussNote": "Проконсультуйтеся з нашими фахівцями для побудови надійної архітектури аутентифікації вашого сервісу.",
    "discussBtn": "Почати Інтеграцію"
  },
  "faqBadge": "ПОШИРЕНІ ЗАПИТАННЯ",
  "faqTitle": "Відповіді на важливі питання про служби SMS OTP",
  "faqSubtitle": "Дізнайтеся, як наша інфраструктура з низькою затримкою захищає ваші цифрові процеси перевірки.",
  "faqs": [
    {
      "q": "Як швидко доставляються SMS-повідомлення з кодами OTP?",
      "a": "Наші пріоритетні маршрути доставляють одноразові паролі за лічені секунди за стандартних умов мобільної мережі."
    },
    {
      "q": "Які протоколи та API доступні для інтеграції?",
      "a": "Ми надаємо зручний REST API з повною документацією та прикладами коду, а також протокол SMPP v3.4 для великих обсягів."
    },
    {
      "q": "Як захистити платформу від SMS-накачування (SMS pumping) та шахрайства?",
      "a": "Наша платформа містить вбудовані обмеження швидкості, блокування підозрілих напрямків та білі списки IP для відсікання небажаного трафіку."
    }
  ],
  "ctaBadge": "МОДЕРНІЗУЙТЕ АУТЕНТИФІКАЦІЮ",
  "ctaTitle": "Зробіть кожну верифікацію швидшою, безпечнішою та надійнішою",
  "ctaSubtitle": "Подаруйте своїм клієнтам безпечний цифровий досвід за допомогою високоякісних служб SMS OTP для захисту акаунтів та підтвердження платежів.",
  "contactUs": "Почати з SMS OTP",
  "ctaFootnote": "Зверніться до наших експертів для отримання детальної інформації про пріоритетні маршрути та налаштування API."
};

const he: OtpSmsServicesTranslation = {
  "heroBadge": "שירותי SMS OTP • תשתית אימות מתקדמת",
  "heroTitle": "כל אימות, מחובר באמינות מוחלטת ובמהירות שיא",
  "heroDesc": "הגנו על חשבונות הלקוחות ופשטו את תהליכי אימות המשתמשים באמצעות שירותי SMS OTP בעלי אמינות גבוהה במיוחד. שלחו סיסמאות חד-פעמיות להתחברות, הרשמה, איפוס סיסמאות ואישור עסקאות דרך תשתית תקשורת בינלאומית בעלת השהיה מזערית.",
  "talkToExpert": "דברו עם מומחה OTP",
  "exploreCapabilities": "גלו את היכולות",
  "stats": {
    "routing": "OTP מהימן",
    "routingLabel": "מסירה מדויקת ומיידית",
    "traffic": "API פשוט",
    "trafficLabel": "אינטגרציה גמישה ומהירה",
    "insights": "פריסה עולמית",
    "insightsLabel": "קישוריות מפעילים ישירה"
  },
  "heroLiveBadge1": {
    "title": "מסירה מיידית",
    "label": "נתיבי אימות בהשהיה אולטרה-נמוכה"
  },
  "heroLiveBadge2": {
    "title": "2FA ברמת מפעיל",
    "sub": "ניתוב ישיר בעדיפות עליונה"
  },
  "whyBadge": "תשתית אבטחה",
  "whyTitle": "תשתית הודעות המגינה על כל פעולת אימות",
  "whySubtitle1": "תמכו באימות מאובטח של לקוחות באמצעות הודעות OTP שנועדו למסירה מדויקת, הטמעה קלה והתרחבות מסיבית.",
  "whySubtitle2": "תוכנן לזמני השהיה מינימליים ולשיעורי מסירה מובילים ברשתות הסלולר הבינלאומיות.",
  "whyCards": [
    {
      "title": "מסירת OTP אמינה",
      "desc": "שלחו סיסמאות חד-פעמיות דרך נתיבי SMS ישירים המבטיחים אחוזי הגעה עקביים וגבוהים בכל הרשתות הנתמכות.",
      "footer": "אחריות מסירה גבוהה"
    },
    {
      "title": "הודעות אימות מהירות",
      "desc": "סייעו למשתמשים להשלים את תהליכי ההתחברות והאבטחה בתוך שניות ספורות הודות לזמני מעבר מהירים ביותר.",
      "footer": "ניתוב בהשהיה נמוכה"
    },
    {
      "title": "אינטגרציית API גמישה",
      "desc": "חברו בקלות את יכולות ה-SMS OTP לאתרי אינטרנט, אפליקציות סלולריות ומערכות ליבה באמצעות REST API ו-SMPP תקניים.",
      "footer": "REST API ו-SMPP"
    },
    {
      "title": "אימות בעל יכולת התרחבות",
      "desc": "נהלו ללא הפרעה עומסי שיא של הרשמות המוניות, התחברויות בו-זמניות ואישורי עסקאות בהיקפים כבדים.",
      "footer": "קיבולת תעבורה גבוהה"
    }
  ],
  "capabilitiesBadge": "פלטפורמת OTP מקיפה",
  "capabilitiesTitle": "פלטפורמת OTP אחודה שנבנתה במדויק לצורכי העסק שלכם",
  "capabilitiesDesc": "תמכו במגוון תרחישי אימות דיגיטלי באמצעות שירותי הודעות המותאמים לתהליכים עסקיים קריטיים.",
  "designSolution": "התחילו לאמת משתמשים",
  "solutionNote": "מוגדר מראש עבור כמויות גדולות של 2FA, התחברויות מאובטחות ואימות עסקאות פיננסיות.",
  "capabilities": [
    {
      "tag": "כניסה 2FA",
      "title": "אימות בעת התחברות",
      "desc": "וודאו את זהות המשתמשים על ידי שליחת סיסמה חד-פעמית בעת ההתחברות כדי לחסום חדירות לא מורשות."
    },
    {
      "tag": "הרשמה",
      "title": "רישום חשבונות חדשים",
      "desc": "אשרו הרשמות חדשות על ידי אימות מיידי של הבעלות על מספר הטלפון הנייד שהוזן."
    },
    {
      "tag": "איפוס סיסמה",
      "title": "שחזור חשבון מאובטח",
      "desc": "אפשרו שחזור חשבון בטוח באמצעות שליחת קודים זמניים עבור בקשות לגיטימיות לאיפוס סיסמה."
    },
    {
      "tag": "עסקאות",
      "title": "אימות עסקאות כספיות",
      "desc": "הוסיפו שלב אימות ב-SMS לאישור העברות בנקאיות ותשלומים מקוונים רגישים למניעת הונאות."
    },
    {
      "tag": "זהות",
      "title": "אימות בעלות על מספר",
      "desc": "וודאו את הבעלות על מספר הטלפון במהלך תהליכי קליטת לקוחות (Onboarding) ועמידה ברגולציית KYC."
    },
    {
      "tag": "אבטחת אפליקציות",
      "title": "אבטחת אפליקציות",
      "desc": "שלבו הודעות OTP ישירות באפליקציות אינטרנט ומובייל כדי לעמוד בתקני אבטחת מידע מחמירים."
    },
    {
      "tag": "אוטומציה",
      "title": "טריגרים אוטומטיים ל-OTP",
      "desc": "שלחו קודי אימות באופן אוטומטי בהתבסס על אירועי מערכת וכללי אבטחה מוגדרים מראש."
    },
    {
      "tag": "נפח גבוה",
      "title": "הודעות OTP בקנה מידה רחב",
      "desc": "עבדו אלפי בקשות אימות בכל שנייה באמצעות תשתית ערוכה לצמיחה מואצת של החברה."
    }
  ],
  "howItWorksBadge": "תהליך האימות",
  "howItWorksTitle": "כיצד פועל מחזור מסירת קודי ה-OTP",
  "howItWorksSubtitle": "מקריאת ה-API ועד לקבלת ההודעה בטלפון הנייד בתוך שניות ספורות.",
  "howItWorksSteps": [
    {
      "step": "01",
      "title": "בקשת משתמש",
      "desc": "המשתמש יוזם פעולה הדורשת אימות כגון התחברות, הרשמה או ביצוע תשלום.",
      "note": "אירוע באפליקציה"
    },
    {
      "step": "02",
      "title": "שליחה דרך ה-API",
      "desc": "המערכת שלכם מעבירה את הקוד הזמני לשער ה-OTP שלנו באמצעות נקודות קצה מאובטחות של REST API.",
      "note": "REST API / SMPP"
    },
    {
      "step": "03",
      "title": "ניתוב מפעיל בעדיפות",
      "desc": "ההודעה נשלחת באופן מיידי בנתיבי מפעילים ישירים עם תור בעדיפות הגבוהה ביותר.",
      "note": "השהיה נמוכה"
    },
    {
      "step": "04",
      "title": "קבלה ואימות",
      "desc": "המשתמש מקבל את הקוד ומשלים את האימות; סטטוס המסירה מוחזר בזמן אמת באמצעות webhook.",
      "note": "דוח DLR בזמן אמת"
    }
  ],
  "networkBadge": "כיסוי SMS עולמי",
  "networkTitle": "רשת בינלאומית שנועדה להבטיח אימותים רציפים ללא הפרעה",
  "networkDesc": "הגיעו למשתמשים בכל רחבי העולם באמצעות חיבורי SMS ישירים המותאמים לתהליכי אימות מאובטחים.",
  "networkBullets": [
    "קישוריות SMS ישירה למפעילי סלולר מובילים ברחבי העולם",
    "אינטגרציה חלקה עם מערכות 2FA ואימות קיימות",
    "קיבולת מתרחבת לטיפול בעליות חדות בהיקף הודעות האימות",
    "שקיפות מלאה על סטטוס המסירה באמצעות דוחות DLR בזמן אמת",
    "שליחה נוחה באמצעות REST API מודרני ופרוטוקולים מקובלים בתעשייה",
    "תמיכה טכנית ייעודית עבור תהליכי אימות רגישים לזמן"
  ],
  "networkStats": [
    {
      "val": "כיסוי עולמי",
      "label": "חיבור ישיר למפעילי סלולר בינלאומיים"
    },
    {
      "val": "נתיבי עדיפות",
      "label": "תעבורת אימות בהשהיה מינימלית"
    }
  ],
  "networkBadgeOverlay": {
    "title": "שער מפעיל OTP",
    "sub": "ניתוב עדיפות ישיר עבור אימותים דחופים בזמן אמת"
  },
  "networkFooterNote": "מהירות המסירה בפועל תלויה במדיניות המפעילים המקומיים וברמת הקליטה של מכשיר הנמען.",
  "momentsBadge": "שימושים & ענפים",
  "momentsTitle": "נבנה עבור כל רגע אימות קריטי",
  "momentsSubtitle": "SMS OTP מאבטח תהליכים דיגיטליים בענפים שבהם הגנה על חשבונות ואמון המשתמשים הם בעדיפות עליונה.",
  "moments": [
    {
      "title": "בנקאות ושירותים פיננסיים",
      "desc": "הגנו על כניסות לחשבונות ואשרו העברות כספים באמצעות תהליכי OTP ברמת אבטחה מקסימלית.",
      "footer": "2FA פיננסי & אישור תשלומים"
    },
    {
      "title": "מסחר מקוון וקמעונאות",
      "desc": "אמתו חשבונות קונים, הגנו על כניסות ואבטחו את שלב התשלום בעת הרכישה.",
      "footer": "קופה מאובטחת & הגנת חשבון"
    },
    {
      "title": "תיירות ואירוח",
      "desc": "אשרו הזמנות כרטיסים, פרטי הזמנה ושינויים באמצעות אימות SMS מיידי.",
      "footer": "אימות הזמנות & בטיחות נוסעים"
    },
    {
      "title": "פלטפורמות דיגיטליות ו-SaaS",
      "desc": "שלבו קודי אימות בהרשמות, איפוס סיסמאות והתחברויות ממכשירים מרובים.",
      "footer": "קליטה נוחה & הגנה רציפה"
    }
  ],
  "comparison": {
    "comparisonTitle": "ראו כיצד SMS OTP מחזק את האימות הדיגיטלי",
    "comparisonSubtitle": "בחרו את השיטה המתאימה ביותר בהתאם לדרישות האבטחה, חוויית המשתמש וקהל היעד שלכם.",
    "otpTitle": "SMS OTP",
    "otpBadge": "נגישות אוניברסלית בכל המכשירים",
    "otpItems": [
      "מוסר סיסמאות חד-פעמיות ישירות לכל מספר טלפון נייד בעולם",
      "פועל מיידית בכל מכשיר טלפון ללא צורך בהורדת אפליקציה נוספת",
      "אידיאלי להרשמות המוניות, התחברויות מהירות ושחזור חשבונות",
      "תלוי ברמת הקליטה ותנאי הרשת של מפעיל הסלולר המקבל"
    ],
    "appTitle": "אימות מבוסס אפליקציה",
    "appBadge": "מאמת תוכנה",
    "appItems": [
      "מייצר קודים או התראות אישור בתוך אפליקציה ייעודית",
      "יכול לפעול ללא קליטה סלולרית אם ישנו חיבור Wi-Fi פעיל",
      "דורש מהמשתמש להוריד ולהגדיר את האפליקציה מבעוד מועד",
      "מספק יתרונות אבטחה קריפטוגרפיים נוספים בהתאם להטמעה"
    ],
    "securityNotice": "המלצת אבטחה: SMS OTP מוכיח ביעילות את החזקת מספר הטלפון, אך עלול להיות חשוף למתקפות החלפת SIM (SIM Swap). במערכות פיננסיות קריטיות, שלבו בקרות סיכון נוספות."
  },
  "intelligenceBadge": "הפצה חכמה",
  "intelligenceTitle": "מסירה בתוך שניות & דוחות סטטוס בזמן אמת",
  "intelligenceDesc": "נטרו מדדי מסירה, זמני תגובה של מפעילים ודוחות DLR כדי למנוע עיכובים בעת התחברות המשתמשים.",
  "intelligenceBullets": [
    "תורים בעדיפות עליונה לשילוח מיידי של קודי אימות",
    "Webhooks של DLR בזמן אמת לשקיפות מיידית על סטטוס המסירה",
    "מעבר אוטומטי לנתיבי גיבוי (failover) להבטחת אחוזי הצלחה מקסימליים",
    "ניתוח השהיה מפורט ומפולח לפי מדינות ומפעילי תקשורת"
  ],
  "intelligenceFootnote": "השרתים שלכם מקבלים התראה דרך webhook באותה שנייה שבה הטלפון הנייד מקבל את הקוד.",
  "messageLogCard": {
    "title": "יומן ניטור מסירת OTP חי",
    "badge": "DLR עדיפות",
    "tab1": "נמסרו",
    "tab2": "בתור",
    "tab3": "אומתו",
    "colType": "סוג",
    "colState": "סטטוס",
    "colReceipt": "השהיית מפעיל",
    "row1Type": "OTP התחברות",
    "row1State": "נמסר",
    "row1Receipt": "1.2 שניות DLR מכשיר",
    "row2Type": "איפוס סיסמה",
    "row2State": "נמסר",
    "row2Receipt": "0.9 שניות DLR מכשיר",
    "row3Type": "אישור תשלום",
    "row3State": "נמסר",
    "row3Receipt": "1.1 שניות DLR מכשיר",
    "footerText": "מסירת אימות בתוך שניות ברשתות הסלולר הבינלאומיות"
  },
  "protectionTitle": "אבטחה שנבנתה עבור משימות אימות קריטיות",
  "protectionBadge": "אבטחה & עמידה ברגולציה",
  "protectionCards": [
    {
      "title": "הגבלת קצב ומניעת הונאות",
      "desc": "הגנו על המערכות מפני מתקפות brute force והונאות שאיבת SMS (SMS pumping) יקרות באמצעות מגבלות קצב גמישות."
    },
    {
      "title": "עמידה ברגולציית מזהה שולח (Sender ID)",
      "desc": "הבטיחו רישום רשמי של שם השולח ועמידה מלאה בחוקי התקשורת המקומיים במדינות היעד."
    }
  ],
  "timelineBadge": "הטמעה מובנית",
  "timelineTitle": "מאינטגרציית ה-API ועד לעלייה לאוויר, צעד אחר צעד",
  "timelineSubtitle": "הפעילו את שירות SMS OTP בתהליך מסודר המותאם לתקני האבטחה ולהיקפי הפעילות שלכם.",
  "timelineSteps": [
    {
      "step": "01",
      "title": "אפיון דרישות",
      "desc": "הגדירו מדינות יעד, כמויות הודעות צפויות ותרחישי אימות נדרשים."
    },
    {
      "step": "02",
      "title": "עיצוב התהליך",
      "desc": "קבעו את זמן תוקף הקודים, מרווחי השליחה החוזרת ותבניות ההודעות."
    },
    {
      "step": "03",
      "title": "אינטגרציית API",
      "desc": "חברו את המערכות שלכם לשער שלנו באמצעות REST API מאובטח או פרוטוקול SMPP."
    },
    {
      "step": "04",
      "title": "בדיקות ואימות",
      "desc": "בדקו מהירות מסירה, טיפול בשגיאות וחוויית משתמש בסביבת sandbox."
    },
    {
      "step": "05",
      "title": "עלייה לייצור",
      "desc": "התחילו לשלוח תעבורה חיה תחת ניטור שוטף ותמיכה טכנית ייעודית."
    }
  ],
  "integrationPlan": {
    "title": "מפרט טכני לאינטגרציית OTP",
    "planBadge": "מוכן לייצור",
    "connection": "REST API / Webhooks / SMPP",
    "traffic": "קודי 2FA ואימותים דחופים",
    "formats": "OTP מספרי, אסימונים אלפאנומריים",
    "feedback": "דוחות מסירה DLR בזמן אמת",
    "senderSetup": "Sender ID רשום / מספר מקוצר ייעודי",
    "check1": "טיימרים לתפוגה וכללי הגבלת קצב הוגדרו בהצלחה",
    "check2": "נתיבי גיבוי ו-webhooks של סטטוסים מוכנים לפעילות",
    "discussNote": "התייעצו עם המהנדסים שלנו כדי לתכנן את ארכיטקטורת האימות האידיאלית עבור השירות שלכם.",
    "discussBtn": "התחלת אינטגרציה"
  },
  "faqBadge": "שאלות נפוצות",
  "faqTitle": "תשובות לשאלות מרכזיות על שירותי SMS OTP",
  "faqSubtitle": "למדו כיצד תשתית ההשהיה הנמוכה שלנו מגנה על תהליכי האימות הדיגיטליים שלכם.",
  "faqs": [
    {
      "q": "כמה מהר נמסרות הודעות SMS OTP?",
      "a": "נתיבי העדיפות שלנו מוסרים קודי אימות בתוך שניות ספורות בתנאי רשת סלולרית רגילים."
    },
    {
      "q": "אילו אפשרויות API זמינות לאינטגרציה?",
      "a": "אנו מספקים REST API מודרני בליווי תיעוד מקיף ודוגמאות קוד, וכן פרוטוקול SMPP v3.4 עבור נפחי תעבורה גדולים."
    },
    {
      "q": "כיצד נוכל להגן על הפלטפורמה מפני הונאות ו-SMS pumping?",
      "a": "הפלטפורמה שלנו כוללת מנגנוני הגבלת קצב מובנים, חסימת יעדים בסיכון ורשימות IP לבנות לנטרול תעבורה זדונית."
    }
  ],
  "ctaBadge": "שדרגו את האימות",
  "ctaTitle": "הפכו כל פעולת אימות למהירה, בטוחה ואמינה יותר",
  "ctaSubtitle": "העניקו ללקוחותיכם חוויה דיגיטלית בטוחה עם שירותי SMS OTP איכותיים שנועדו להגנה על חשבונות ואישור עסקאות.",
  "contactUs": "התחילו עם SMS OTP",
  "ctaFootnote": "צרו קשר עם המומחים שלנו לקבלת מידע נוסף על נתיבי עדיפות והגדרות API."
};

const translations: Record<string, OtpSmsServicesTranslation> = {
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

export const getOtpSmsServicesTranslations = (
  language?: string,
  _region?: string,
  _regionName?: string
): OtpSmsServicesTranslation => {
  return (language && translations[language]) || en;
};

export default getOtpSmsServicesTranslations;

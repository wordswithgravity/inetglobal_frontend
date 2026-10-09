import type { RegionContent } from "./regionContent";

// Helper to format country name from ID
export const getFormattedCountryName = (regionId: string): string => {
  if (!regionId || regionId === "global") return "Global";
  return regionId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Dictionary of language-specific base templates
export const languageTemplates: Record<
  string,
  (country: string, isGlobal: boolean, currency: string) => RegionContent
> = {
  // ==========================================
  // ENGLISH (en)
  // ==========================================
  en: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "GLOBAL COMMUNICATIONS INFRASTRUCTURE"
        : `${country.toUpperCase()} TELECOM INFRASTRUCTURE`,
      titleLine1: isGlobal ? "Global" : `Best SMS & Call Traffic`,
      titleLine2: isGlobal ? "Communication," : `Services In ${country},`,
      titleLine3: isGlobal ? "Built For Business." : `Built For Enterprise Scale.`,
      description: isGlobal
        ? "Reliable voice, messaging and virtual numbers for companies that need to stay connected across borders, across teams, and across every customer touchpoint."
        : `Empowering enterprises in ${country} with high-throughput SMS routes, ultra-low latency voice termination, and direct operator interconnects.`,
      primaryCta: isGlobal ? "Get Started" : `Start in ${country}`,
      secondaryCta: isGlobal ? "Explore Service" : `Explore ${country} Routes`,
      timeline: {
        voice: isGlobal ? "Business Voice" : `${country} Voice Traffic (CLI)`,
        messaging: isGlobal ? "SMS & Messaging" : `${country} SMS & OTP Routes`,
        numbers: isGlobal ? "Virtual Numbers" : `${country} Virtual DID Numbers`,
        footerNote1: isGlobal ? "One platform" : "Direct Carrier Routes",
        footerNote2: isGlobal ? "Global reach" : "100% Regulatory Compliant",
      },
    },
    coreServices: {
      badge: isGlobal ? "CORE SERVICE" : `${country.toUpperCase()} SERVICES & OPERATOR INTERCONNECTS`,
      titleLine1: isGlobal ? "Communication Solutions For" : `Best Voice & Messaging Services In ${country}`,
      titleLine2: isGlobal ? "Every Customer Journey" : "For Scalable Enterprises",
      description: isGlobal
        ? "Modular telecom infrastructure engineered for high availability voice, messaging, and virtual numbers worldwide."
        : `Carrier-grade telecom infrastructure in ${country} with 99.99% uptime, sub-2s OTP delivery, and direct operator interconnects.`,
      services: [
        {
          title: isGlobal ? "Voice Services" : `${country} Voice & SIP Trunking`,
          description: isGlobal
            ? "International SIP trunking with flexible route options designed around quality, localized CLI coverage, and optimized termination costs."
            : `High-concurrency call traffic in ${country} with guaranteed CLI, premium route termination, and direct local telco interconnects.`,
          features: [
            isGlobal ? "High-quality voice connections" : "Pure CLI Route Guarantee",
            isGlobal ? "Flexible route options" : "Direct Operator Interconnects",
            isGlobal ? "Global coverage" : `Pan-${country} Virtual & Toll-Free Numbers`,
          ],
        },
        {
          title: isGlobal ? "Messaging" : `Best SMS Services in ${country}`,
          description: isGlobal
            ? "Deliver critical transactional SMS, OTPs, and rich business messaging directly to handsets worldwide with high delivery assurance."
            : `High-speed transactional SMS, verification codes under 2 seconds, and compliant bulk marketing across all operators in ${country}.`,
          features: [
            isGlobal ? "Sub-second OTP delivery" : `Direct Operator Whitelisting in ${country}`,
            isGlobal ? "High delivery assurance" : "Sub-2s OTP Delivery Guarantee",
            isGlobal ? "Rich media messaging (RCS)" : "Dynamic Failover & Operator Routing",
          ],
        },
        {
          title: isGlobal ? "Omnichannels" : `${country} Omnichannel & WhatsApp API`,
          description: isGlobal
            ? "Unify Voice, SMS, WhatsApp, and Verification into a single developer-friendly REST API suite designed for instant deployment."
            : `Official WhatsApp Business API, RCS rich communication, and multi-channel messaging tailored for customer engagement in ${country}.`,
          features: [
            isGlobal ? "Official WhatsApp Business API" : "Official WhatsApp Business API",
            isGlobal ? "RCS conversational messaging" : "RCS Verified Sender with Brand Badge",
            isGlobal ? "Unified REST API suite" : "Unified Multi-Channel Rest APIs",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "BUSINESS SOLUTIONS" : `${country.toUpperCase()} BUSINESS SOLUTIONS`,
      title: isGlobal ? "Solutions For Every Customer Journey" : `Solutions Engineered For ${country}`,
      description: isGlobal
        ? "Connect, engage and communicate with customers through reliable voice, messaging and omnichannel solutions."
        : `High-performance communication stack tailored for enterprises, fintechs, and high-growth businesses in ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "OTP Auth",
          tagline: "Secure. Fast. Reliable.",
          title: `Instant OTP Authentication (${country})`,
          description: `Deliver one-time passwords quickly and securely for registrations, logins, account recovery, and payment verification across ${country}.`,
          features: [
            "Sub-2s fast and reliable OTP delivery",
            "Multi-carrier direct failover protection",
            `Optimized routes across all operators in ${country}`,
          ],
          customerStatus: "Identity Verified",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Your verification code is",
            bodyBold: "53193",
            validTime: "Valid for 5 minutes. Do not share.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Authentication",
            title: "Verify your Mobile Number",
            subtitle: `We've sent a verification code to your registered number in ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verify and Continue",
            subNote: "Didn't receive the code?\nResend code in 00:45",
          },
        },
        {
          id: "banking",
          name: "Banking",
          tagline: "Secure. Connected. Trusted.",
          title: `Banking & Financial Services (${country})`,
          description: `Enable secure customer communication with real-time transactional SMS, balance updates, and payment alerts designed for financial institutions in ${country}.`,
          features: [
            "Encrypted banking-grade security pipelines",
            "Real-time debit/credit & payment notifications",
            "High-throughput transactional SMS delivery",
          ],
          customerStatus: "Transaction Received",
          notification: {
            header: "Bank Transaction Alert",
            body: `Your payment of ${currency}250.00 was completed successfully.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Banking",
            title: "Payment Successful",
            subtitle: `${currency}250.00 processed securely in your account.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Completed",
              reference: "TXN-849201",
            },
            buttonText: "View Statement",
            subNote: "✓ Delivered via Secure Carrier Pipeline",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Reach. Engage. Convert.",
          title: `Marketing Communications (${country})`,
          description: `Connect with consumers through targeted messaging campaigns that deliver promotions, seasonal offers, and brand announcements at scale in ${country}.`,
          features: [
            "High-volume promotional SMS delivery",
            "Audience segmentation & smart scheduling",
            "Real-time click-tracking and conversion analytics",
          ],
          customerStatus: "Offer Delivered",
          notification: {
            header: "Exclusive Offer",
            line1: "SPECIAL 30% OFF",
            line2: `Exclusive deals available across ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Special Deals",
            badge: "Limited Offer",
            title: "Exclusive Discount Just For You",
            subtitle: `Enjoy 30% off your next purchase.\nOffer valid until the end of the month.`,
            buttonText: "Claim Offer",
            subNote: `✓ Sent to verified subscribers in ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Reminders",
          tagline: "Timely. Reliable. Automated.",
          title: `Automated Customer Reminders (${country})`,
          description: `Keep customers informed with automated reminders for appointments, invoice due dates, subscription renewals, and scheduled events in ${country}.`,
          features: [
            "Automated multi-channel schedule notifications",
            "Direct payment links embedded in messages",
            "Reduce missed appointments and overdue payments",
          ],
          customerStatus: "Reminder Delivered",
          notification: {
            header: "Appointment Reminder",
            line1: "Scheduled for Tomorrow",
            line2: "Please arrive 10 minutes prior to your appointment.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Reminders",
            title: "Appointment Scheduled Tomorrow",
            subtitle: "Your scheduled session is confirmed for 10:30 AM.",
            infoCard: {
              label: "Location / Center",
              value: `${country} Central Center`,
            },
            buttonText: "Confirm Attendance",
            subNote: "Reply 1 to confirm or 2 to reschedule",
          },
        },
        {
          id: "emergency",
          name: "Emergency",
          tagline: "Critical. Fast. Always Connected.",
          title: `Emergency & Safety Broadcasts (${country})`,
          description: `Deliver priority emergency notifications instantly when every second matters, ensuring public safety and business continuity across ${country}.`,
          features: [
            "High-priority route bypassing standard delivery queues",
            "Geographic circle targeting for mass public alerts",
            "Multi-channel failover across SMS and Voice alerts",
          ],
          customerStatus: "Broadcast Alert Delivered",
          notification: {
            header: "Public Safety Advisory",
            line1: "Urgent Weather Advisory",
            line2: "Follow local authorities' safety directives.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Emergency Alert",
            title: "Urgent Weather Advisory",
            subtitle: "Severe weather condition reported. Please stay indoors and check local advisories.",
            infoCard: {
              label: "Affected Region",
              value: country,
            },
            buttonText: "View Safe Zones",
            subNote: "Official Safety Broadcast Notification",
          },
        },
        {
          id: "order",
          name: "Order Alert",
          tagline: "Inform. Track. Deliver.",
          title: `Real-time Order & Delivery Alerts (${country})`,
          description: `Keep shoppers updated throughout their delivery journey with instant dispatch alerts, courier tracking, and OTP verification upon delivery in ${country}.`,
          features: [
            "Real-time dispatch and shipment status updates",
            "Courier arrival alerts with live location links",
            "Secure delivery verification OTPs",
          ],
          customerStatus: "Out for Delivery",
          notification: {
            header: "Order Status Update",
            line1: "Order #IN849201 Dispatched",
            line2: `Your package is arriving today in ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Order Tracking",
            title: "Your Order is on the Way",
            subtitle: "The delivery partner is on the way with your package.",
            infoCard: {
              label: "Delivery OTP",
              value: "8492",
            },
            buttonText: "Track on Map",
            subNote: "Contactless delivery enabled",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "INDUSTRY EXPERTISE" : `INDUSTRY EXPERTISE - ${country.toUpperCase()}`,
      titleLine1: "Communication Solutions Built",
      titleLine2: isGlobal ? "For Every Industry" : `For ${country} Enterprises`,
      description: isGlobal
        ? "Connect, engage and communicate with customers through reliable voice, messaging and omnichannel solutions."
        : `Tailored telecom infrastructure meeting local regulations, compliance standards, and consumer habits in ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Banking",
          title: `Banking & Fintech in ${country}`,
          description: `Secure transactional SMS, localized compliance, and real-time payment authentication for financial institutions in ${country}.`,
        },
        {
          id: "healthcare",
          name: "Healthcare",
          title: `Healthcare & Clinics in ${country}`,
          description: `Patient appointment reminders, prescription updates, and telemedicine communication across ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce and Retail",
          title: `E-Commerce & Retail in ${country}`,
          description: `Order tracking updates, promotional sale messaging, and customer support channels for brands in ${country}.`,
        },
        {
          id: "education",
          name: "Education",
          title: `Education & Universities in ${country}`,
          description: `Admission notices, campus alerts, fee payment reminders, and parent communication platforms in ${country}.`,
        },
        {
          id: "travel",
          name: "Travel and Hospitality",
          title: `Travel & Tourism in ${country}`,
          description: `Flight gate updates, hotel check-in SMS, and 24/7 guest support across destinations in ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "CONNECT WITH US" : `CONNECT WITH US IN ${country.toUpperCase()}`,
      titleLine1: "Let's Build The Right Communication",
      titleLine2: isGlobal ? "Connection." : `Connection In ${country}.`,
      description: isGlobal
        ? "With iNet Global Services, businesses can leverage reliable Business SMS Solutions to improve customer engagement, strengthen security, and streamline communication. Whether you need Transactional SMS, OTP SMS Service, or a scalable Bulk SMS Service, our platform delivers the speed, security, and performance your business demands."
        : `Partner with iNet Global for direct carrier SMS routes, crystal-clear voice traffic, and full regulatory compliance in ${country}. Connect directly with our enterprise team for dedicated testing and pricing.`,
    },
    footer: {
      description: isGlobal
        ? "Global communication infrastructure for businesses that need reliable voice, messaging and omnichannel connectivity."
        : `Enterprise communication infrastructure delivering carrier-grade Voice, SMS, Virtual Numbers, and Omnichannel APIs in ${country} and worldwide.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). All right reserved.`,
    },
  }),

  // ==========================================
  // SPANISH (es)
  // ==========================================
  es: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "INFRAESTRUCTURA GLOBAL DE COMUNICACIONES"
        : `INFRAESTRUCTURA DE TELECOMUNICACIONES EN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Comunicación Global," : `Los Mejores Servicios SMS y`,
      titleLine2: isGlobal ? "Construida Para" : `Tráfico de Voz en ${country},`,
      titleLine3: isGlobal ? "Los Negocios." : `Para Grandes Empresas.`,
      description: isGlobal
        ? "Voz, mensajería y números virtuales confiables para empresas que necesitan mantenerse conectadas a través de fronteras, equipos y cada punto de contacto con el cliente."
        : `Potenciando a las empresas en ${country} con rutas de SMS de alta velocidad, terminación de voz de latencia ultra baja e interconexión directa con operadores.`,
      primaryCta: isGlobal ? "Comenzar" : `Comenzar en ${country}`,
      secondaryCta: isGlobal ? "Explorar Servicios" : `Ver Rutas en ${country}`,
      timeline: {
        voice: isGlobal ? "Voz Empresarial" : `Tráfico de Voz en ${country} (CLI)`,
        messaging: isGlobal ? "SMS y Mensajería" : `Rutas de SMS y OTP en ${country}`,
        numbers: isGlobal ? "Números Virtuales" : `Números DID en ${country}`,
        footerNote1: isGlobal ? "Una sola plataforma" : "Rutas Directas de Operador",
        footerNote2: isGlobal ? "Alcance global" : "100% Cumplimiento Normativo",
      },
    },
    coreServices: {
      badge: isGlobal ? "SERVICIOS PRINCIPALES" : `SERVICIOS Y CONECTIVIDAD EN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Soluciones de Comunicación Para" : `Los Mejores Servicios de Voz y SMS en ${country}`,
      titleLine2: isGlobal ? "Cada Experiencia de Cliente" : "Para Empresas Escalables",
      description: isGlobal
        ? "Infraestructura de telecomunicaciones modular diseñada para voz, mensajería y números virtuales de alta disponibilidad en todo el mundo."
        : `Infraestructura de nivel operador en ${country} con 99.99% de disponibilidad, entrega de OTP en menos de 2 segundos y conexión directa.`,
      services: [
        {
          title: isGlobal ? "Servicios de Voz" : `Troncales SIP y Voz en ${country}`,
          description: isGlobal
            ? "Troncales SIP internacionales con opciones de rutas flexibles diseñadas en torno a la calidad, cobertura CLI localizada y costes optimizados."
            : `Tráfico de llamadas de alta concurrencia en ${country} con garantía de CLI, terminación premium y conexiones directas.`,
          features: [
            isGlobal ? "Conexiones de voz de alta calidad" : "Garantía de Ruta CLI Pura",
            isGlobal ? "Opciones de rutas flexibles" : "Interconexión Directa con Operadores",
            isGlobal ? "Cobertura global completa" : `Números Virtuales y Gratuitos en ${country}`,
          ],
        },
        {
          title: isGlobal ? "Mensajería SMS" : `Mejores Servicios SMS en ${country}`,
          description: isGlobal
            ? "Entregue SMS transaccionales críticos, OTPs y mensajería empresarial enriquecida directamente a teléfonos móviles en todo el mundo."
            : `SMS transaccionales de alta velocidad, códigos de verificación en menos de 2 segundos y marketing masivo compatible en ${country}.`,
          features: [
            isGlobal ? "Entrega de OTP en milisegundos" : `Registro y Aprobación Oficial en ${country}`,
            isGlobal ? "Alta garantía de entrega" : "Garantía de Entrega de OTP < 2s",
            isGlobal ? "Mensajería enriquecida (RCS)" : "Enrutamiento Dinámico entre Operadores",
          ],
        },
        {
          title: isGlobal ? "Omnicanalidad" : `Omnicanal y API de WhatsApp en ${country}`,
          description: isGlobal
            ? "Unifique Voz, SMS, WhatsApp y Verificación en una sola suite de API REST diseñada para una integración instantánea."
            : `API oficial de WhatsApp Business, mensajería interactiva RCS y atención multicanal para clientes en ${country}.`,
          features: [
            isGlobal ? "API Oficial de WhatsApp Business" : "API Oficial de WhatsApp Business",
            isGlobal ? "Mensajería conversacional RCS" : "Remitente Verificado con Insignia Verde",
            isGlobal ? "Suite de API REST unificada" : "APIs REST Unificadas Multicanal",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "SOLUCIONES EMPRESARIALES" : `SOLUCIONES PARA ${country.toUpperCase()}`,
      title: isGlobal ? "Soluciones Para Cada Etapa del Cliente" : `Soluciones Diseñadas Para ${country}`,
      description: isGlobal
        ? "Conecte, interactúe y comuníquese con clientes mediante soluciones confiables de voz, mensajería y omnicanalidad."
        : `Plataforma de comunicación de alto rendimiento diseñada para empresas, fintechs y líderes del mercado en ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Autenticación OTP",
          tagline: "Seguro. Rápido. Confiable.",
          title: `Autenticación OTP Instantánea (${country})`,
          description: `Entregue contraseñas de un solo uso de forma rápida y segura para registros, inicios de sesión y verificación de pagos en ${country}.`,
          features: [
            "Entrega rápida y confiable de OTP en < 2s",
            "Protección con respaldo multicanal y WhatsApp",
            `Rutas optimizadas en todos los operadores de ${country}`,
          ],
          customerStatus: "Identidad Verificada",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Su código de verificación es",
            bodyBold: "53193",
            validTime: "Válido por 5 minutos. No lo comparta.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Autenticación",
            title: "Verifique su Número Móvil",
            subtitle: `Hemos enviado un código de verificación a su número registrado en ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verificar y Continuar",
            subNote: "¿No recibió el código?\nReenviar en 00:45",
          },
        },
        {
          id: "banking",
          name: "Banca y Finanzas",
          tagline: "Seguro. Conectado. Confiable.",
          title: `Servicios Bancarios y Financieros (${country})`,
          description: `Permita una comunicación segura con alertas de transacciones en tiempo real, confirmaciones de pago y notificaciones bancarias en ${country}.`,
          features: [
            "Tuberías de seguridad con cifrado bancario",
            "Alertas de débito y crédito en tiempo real",
            "Entrega de SMS transaccionales de alto volumen",
          ],
          customerStatus: "Transacción Recibida",
          notification: {
            header: "Alerta Bancaria de Transacción",
            body: `Su pago de ${currency}250.00 se ha completado con éxito.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Banca",
            title: "Pago Realizado con Éxito",
            subtitle: `${currency}250.00 procesados de forma segura en su cuenta.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Completado",
              reference: "TXN-849201",
            },
            buttonText: "Ver Estado de Cuenta",
            subNote: "✓ Entregado mediante canal seguro de operador",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Alcance. Conecte. Convierta.",
          title: `Comunicaciones de Marketing (${country})`,
          description: `Conéctese con los consumidores mediante campañas de mensajería dirigida que entregan promociones, ofertas de temporada y novedades en ${country}.`,
          features: [
            "Entrega masiva de SMS promocionales",
            "Segmentación de audiencia y programación inteligente",
            "Seguimiento de clics y conversiones en tiempo real",
          ],
          customerStatus: "Oferta Entregada",
          notification: {
            header: "Oferta Exclusiva",
            line1: "30% DE DESCUENTO",
            line2: `Ofertas especiales disponibles en todo ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Ofertas Especiales",
            badge: "Oferta Limitada",
            title: "Descuento Exclusivo Para Ti",
            subtitle: "Obtén un 30% de descuento en tu próxima compra.\nVálido hasta fin de mes.",
            buttonText: "Aprovechar Oferta",
            subNote: `✓ Enviado a suscriptores verificados en ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Recordatorios",
          tagline: "Oportuno. Confiable. Automatizado.",
          title: `Recordatorios Automatizados (${country})`,
          description: `Mantenga a los clientes informados con recordatorios automáticos de citas médicas, vencimientos de facturas y eventos en ${country}.`,
          features: [
            "Notificaciones programadas multicanal automáticas",
            "Enlaces de pago directo integrados en los mensajes",
            "Reduzca citas perdidas y pagos atrasados",
          ],
          customerStatus: "Recordatorio Recibido",
          notification: {
            header: "Recordatorio de Cita",
            line1: "Programada para Mañana",
            line2: "Por favor llegue 10 minutos antes de su cita.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Recordatorios",
            title: "Tu Cita es Mañana",
            subtitle: "Su sesión programada está confirmada para las 10:30 AM.",
            infoCard: {
              label: "Ubicación / Centro",
              value: `Centro Médico ${country}`,
            },
            buttonText: "Confirmar Asistencia",
            subNote: "Responde 1 para confirmar o 2 para reprogramar",
          },
        },
        {
          id: "emergency",
          name: "Emergencias",
          tagline: "Crítico. Rápido. Siempre Conectado.",
          title: `Alertas de Emergencia y Seguridad (${country})`,
          description: `Entregue alertas prioritarias de forma instantánea en situaciones urgentes para salvaguardar vidas y la continuidad del negocio en ${country}.`,
          features: [
            "Rutas de prioridad que evitan colas estándar",
            "Segmentación geográfica para alertas masivas",
            "Respaldo automático con transmisiones de voz y SMS",
          ],
          customerStatus: "Alerta Entregada",
          notification: {
            header: "Aviso de Seguridad Pública",
            line1: "Alerta Meteorológica Urgente",
            line2: "Siga las instrucciones de las autoridades locales.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Alerta de Emergencia",
            title: "Aviso Meteorológico Urgente",
            subtitle: "Condiciones climáticas severas reportadas. Permanezca en un lugar seguro.",
            infoCard: {
              label: "Zona Afectada",
              value: country,
            },
            buttonText: "Ver Zonas Seguras",
            subNote: "Transmisión Oficial de Protección Civil",
          },
        },
        {
          id: "order",
          name: "Alertas de Pedidos",
          tagline: "Informar. Rastrear. Entregar.",
          title: `Seguimiento de Pedidos y Envíos (${country})`,
          description: `Mantenga informados a los compradores en cada etapa de entrega con notificaciones de despacho, seguimiento de repartidores y códigos OTP en ${country}.`,
          features: [
            "Actualizaciones de envío y entrega en tiempo real",
            "Notificaciones de llegada del repartidor con enlace",
            "Código OTP para entrega segura y sin contacto",
          ],
          customerStatus: "En Camino para Entrega",
          notification: {
            header: "Actualización de Pedido",
            line1: "Pedido #IN849201 Enviado",
            line2: `Su paquete llega hoy a ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Seguimiento",
            title: "Tu Pedido Está en Camino",
            subtitle: "El repartidor está en camino con tu paquete.",
            infoCard: {
              label: "Código OTP de Entrega",
              value: "8492",
            },
            buttonText: "Rastrear en el Mapa",
            subNote: "Entrega sin contacto habilitada",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "EXPERIENCIA EN LA INDUSTRIA" : `EXPERIENCIA EN LA INDUSTRIA - ${country.toUpperCase()}`,
      titleLine1: "Soluciones de Comunicación Creadas",
      titleLine2: isGlobal ? "Para Cada Sector" : `Para Empresas en ${country}`,
      description: isGlobal
        ? "Conecte, interactúe y comuníquese con clientes mediante soluciones confiables de voz, mensajería y omnicanalidad."
        : `Infraestructura adaptada a las normativas locales y hábitos de consumo en ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Banca y Finanzas",
          title: `Banca y Fintech en ${country}`,
          description: `SMS transaccionales seguros, cumplimiento normativo y autenticación de pagos en tiempo real para instituciones financieras en ${country}.`,
        },
        {
          id: "healthcare",
          name: "Salud",
          title: `Sector Salud y Clínicas en ${country}`,
          description: `Recordatorios de citas médicas, recetas electrónicas y comunicación de telemedicina en ${country}.`,
        },
        {
          id: "ecommerce",
          name: "Comercio Electrónico",
          title: `E-Commerce y Retail en ${country}`,
          description: `Seguimiento de pedidos, campañas promocionales y soporte omnicanal para marcas en ${country}.`,
        },
        {
          id: "education",
          name: "Educación",
          title: `Educación y Universidades en ${country}`,
          description: `Avisos de admisión, alertas del campus, recordatorios de pago de cuotas y plataformas escolares en ${country}.`,
        },
        {
          id: "travel",
          name: "Viajes y Turismo",
          title: `Viajes y Hospitalidad en ${country}`,
          description: `Actualizaciones de vuelos, SMS de check-in hotelero y atención 24/7 para huéspedes en ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "CONÉCTATE CON NOSOTROS" : `CONÉCTATE CON NOSOTROS EN ${country.toUpperCase()}`,
      titleLine1: "Construyamos la Conexión de Comunicación",
      titleLine2: isGlobal ? "Adecuada." : `Adecuada en ${country}.`,
      description: isGlobal
        ? "Con iNet Global Services, las empresas pueden aprovechar soluciones confiables de SMS para mejorar la interacción, fortalecer la seguridad y optimizar la comunicación."
        : `Asóciese con iNet Global para rutas de SMS directas de operador, tráfico de voz nítido y total cumplimiento normativo en ${country}.`,
    },
    footer: {
      description: isGlobal
        ? "Infraestructura de comunicación global para empresas que necesitan conectividad confiable de voz, mensajería y omnicanalidad."
        : `Infraestructura empresarial que ofrece Voz, SMS, Números Virtuales y APIs Omnicanal de nivel operador en ${country} y en todo el mundo.`,
      email: isGlobal ? "espanol@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Centro Empresarial Internacional,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Distrito Financiero,`,
        line3: isGlobal ? "Estados Unidos" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Todos los derechos reservados.`,
    },
  }),

  // ==========================================
  // CHINESE (zh - 中文 简体)
  // ==========================================
  zh: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal ? "全球通信基础设施平台" : `${country.toUpperCase()} 企业级通信基础设施`,
      titleLine1: isGlobal ? "全球互联通信，" : `${country} 优质短信与`,
      titleLine2: isGlobal ? "专为现代企业" : `语音通话专线服务，`,
      titleLine3: isGlobal ? "量身打造。" : `赋能高并发企业出海与本土业务。`,
      description: isGlobal
        ? "为全球企业提供可靠的国际语音专线、商业短信与虚拟号码接入，跨越国家与网络边界，无缝触达全球每个客户触点。"
        : `为 ${country} 企业提供运营商直连的高吞吐量商业短信、超低延迟国际语音专线和符合本土通信法规的可靠服务。`,
      primaryCta: isGlobal ? "立即体验" : `开启 ${country} 业务`,
      secondaryCta: isGlobal ? "探索通信服务" : `查看 ${country} 专线路由`,
      timeline: {
        voice: isGlobal ? "企业国际语音" : `${country} 语音直连专线 (CLI)`,
        messaging: isGlobal ? "商业短信 & 验证码" : `${country} 商业短信 & 验证码通道`,
        numbers: isGlobal ? "全球虚拟号码 (DID)" : `${country} 本地虚拟号码 (DID)`,
        footerNote1: isGlobal ? "单一统一平台" : "运营商官方直连专线",
        footerNote2: isGlobal ? "覆盖全球网络" : "100% 符合当地法规合规",
      },
    },
    coreServices: {
      badge: isGlobal ? "核心通信服务" : `${country.toUpperCase()} 运营商直连与核心通信服务`,
      titleLine1: isGlobal ? "覆盖全客户生命周期的" : `${country} 顶级语音与消息推送服务`,
      titleLine2: isGlobal ? "全方位通信解决方案" : "专为高增长与规模化企业打造",
      description: isGlobal
        ? "模块化电信级基础设施，为全球高并发语音、国际短信和虚拟号码提供 99.99% 的高可用性保障。"
        : `在 ${country} 提供 99.99% SLA 保障、2 秒内验证码送达和运营商直联的电信级通信管道。`,
      services: [
        {
          title: isGlobal ? "国际语音服务" : `${country} 国际语音与 SIP 中继`,
          description: isGlobal
            ? "国际高品质 SIP 中继，具备清晰的主叫显号 (CLI) 覆盖、高接通率与高性价比的全球落地路由。"
            : `在 ${country} 提供保障 CLI 显示、高并发语音呼叫与直连本地运营商的高品质通话路由。`,
          features: [
            isGlobal ? "高品质低延迟语音连接" : "纯正 CLI 主叫显号保障",
            isGlobal ? "灵活的多路由智能调度" : "本地主流运营商官方直连",
            isGlobal ? "全球广泛网络覆盖" : `${country} 全境本地及 400/800 免费号码`,
          ],
        },
        {
          title: isGlobal ? "商业短信服务" : `${country} 商业短信与验证码通道`,
          description: isGlobal
            ? "向全球手机极速发送关键交易短信、动态验证码与富媒体商业营销消息，保障超高送达率。"
            : `在 ${country} 享有高并发交易短信通道、2 秒极速验证码送达和合规的短信签名报备支持。`,
          features: [
            isGlobal ? "毫秒级验证码极速触达" : `${country} 运营商官方白名单与签名报备`,
            isGlobal ? "超高到达率与状态回执" : "验证码 2 秒极速送达保证",
            isGlobal ? "5G RCS 富媒体消息支持" : "多通道智能负载与自动故障倒换",
          ],
        },
        {
          title: isGlobal ? "全渠道即时通讯" : `${country} 全渠道与 WhatsApp 商业 API`,
          description: isGlobal
            ? "将语音、短信、WhatsApp 商业版和安全验证整合为面向开发者的统一 REST API 接口。"
            : `官方 Meta WhatsApp Business API、RCS 富媒体消息与面向 ${country} 市场的多渠道客户互动方案。`,
          features: [
            isGlobal ? "官方 WhatsApp Business API" : "官方 WhatsApp Business API 接入",
            isGlobal ? "RCS 5G 富媒体互动消息" : "RCS 绿色认证企业官方标示",
            isGlobal ? "统一 REST API 开发套件" : "统一多渠道 REST API 极速部署",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "业务解决方案" : `${country.toUpperCase()} 商业应用解决方案`,
      title: isGlobal ? "贯穿客户全生命周期的解决方案" : `专为 ${country} 数字化生态量身定制`,
      description: isGlobal
        ? "借助可靠的语音、短信和全渠道方案，与全球客户建立更紧密、更可信的连接。"
        : `为 ${country} 的金融科技、跨境电商和企业服务打造的高并发、高稳定性通信服务套件。`,
      solutions: [
        {
          id: "otp",
          name: "动态验证码 (OTP)",
          tagline: "极速 · 安全 · 稳定",
          title: `秒级动态验证码服务 (${country})`,
          description: `为 ${country} 用户注册、登录、找回密码及大额支付提供毫秒级、高送达率的安全身份验证。`,
          features: [
            "2 秒内极速送达，到达率 > 99%",
            "多通道智能故障转移与 WhatsApp 备用通道",
            `针对 ${country} 本地主流运营商深度优化通道`,
          ],
          customerStatus: "身份验证成功",
          notification: {
            header: `iNet 安全中心 (${country})`,
            body: "您的验证码为",
            bodyBold: "53193",
            validTime: "5分钟内有效，请勿泄露给他人。",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "安全验证",
            title: "验证您的手机号码",
            subtitle: `已向您在 ${country} 绑定的手机号发送了 5 位验证码。`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "验证并继续",
            subNote: "未收到验证码？\n00:45 秒后重新获取",
          },
        },
        {
          id: "banking",
          name: "金融与银行",
          tagline: "合规 · 加密 · 值得信赖",
          title: `银行与金融级通知服务 (${country})`,
          description: `为 ${country} 的商业银行和金融机构提供交易提醒、动账短信、还款通知与高级别数据加密保障。`,
          features: [
            "符合国际金融安全标准的端到端加密通道",
            "毫秒级出入金及实时转账动账提醒",
            "亿级高并发大容量交易通知支持",
          ],
          customerStatus: "交易已完成",
          notification: {
            header: "银行动账提醒",
            body: `您的账户已成功完成一笔 ${currency}250.00 的支付交易。`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "手机银行",
            title: "支付处理成功",
            subtitle: `${currency}250.00 已成功从您的账户中结算。`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "已完成",
              reference: "TXN-849201",
            },
            buttonText: "查看电子账单",
            subNote: "✓ 已通过银行专用安全专线送达",
          },
        },
        {
          id: "marketing",
          name: "营销推广",
          tagline: "精准触达 · 高互动 · 促转化",
          title: `商业营销短信触达 (${country})`,
          description: `在 ${country} 开展大促活动、节日营销与会员特惠通知，支持海量并发与精准用户圈选。`,
          features: [
            "超大容量群发通道，分钟级触达百万用户",
            "受众智能细分与定时群发机制",
            "实时短链点击追踪与转化漏斗分析",
          ],
          customerStatus: "特惠已送达",
          notification: {
            header: "专属会员特惠",
            line1: "限时立享 7 折特惠",
            line2: `全 ${country} 范围独家专属礼遇已为您开启。`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "独家特惠",
            badge: "限时活动",
            title: "为您定制的专属大促礼券",
            subtitle: "下一单立享 30% 折扣。\n活动有效期至本月底。",
            buttonText: "立即领取优惠",
            subNote: `✓ 已成功触达 ${country} 认证会员`,
          },
        },
        {
          id: "reminders",
          name: "预约提醒",
          tagline: "准时 · 自动化 · 零失误",
          title: `自动化客户日程与缴费提醒 (${country})`,
          description: `通过自动化消息提醒客户看诊预约、账单到期、会议日程与会员续费，大幅减少失约率。`,
          features: [
            "多渠道自动化定时日程提醒",
            "短信内嵌一键在线支付或确认链接",
            "有效降低失约率与逾期欠费风险",
          ],
          customerStatus: "提醒已确认",
          notification: {
            header: "日程预约提醒",
            line1: "您明天的预约日程",
            line2: "请于预约时间前 10 分钟到达前台签到。",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "日程中心",
            title: "您的预约安排在明天",
            subtitle: "您的预约已确认，时间为上午 10:30。",
            infoCard: {
              label: "预约地点",
              value: `${country} 国际服务中心`,
            },
            buttonText: "确认准时出席",
            subNote: "回复 1 确认出席，回复 2 改期",
          },
        },
        {
          id: "emergency",
          name: "应急通知",
          tagline: "关键时刻 · 极速必达 · 保持连接",
          title: `突发事件与公共安全广播 (${country})`,
          description: `在突发事件和极端天气中，秒级群发关键安全预警，保障 ${country} 公共安全与业务连续性。`,
          features: [
            "最高优先级路由，绕过常规等待队列",
            "支持基于地理位置的指定区域广播",
            "短信与语音自动轮询通知保障",
          ],
          customerStatus: "预警广播已送达",
          notification: {
            header: "公共安全预警",
            line1: "极端天气紧急预警通知",
            line2: "请遵循当地应急管理部门的安全指引。",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "应急广播",
            title: "极端天气紧急预警",
            subtitle: "检测到严重恶劣天气，请尽量留在室内并注意防范。",
            infoCard: {
              label: "受影响地区",
              value: country,
            },
            buttonText: "查看避难指引",
            subNote: "国家应急响应广播通知",
          },
        },
        {
          id: "order",
          name: "订单物流",
          tagline: "实时通知 · 全程追踪 · 准时送达",
          title: `实时订单状态与物流配送通知 (${country})`,
          description: `从下单、打包出库到派送上门，为 ${country} 消费者提供全程实时物流短信和收货验证码。`,
          features: [
            "实时订单出库、发货与物流节点通知",
            "配送员接单与实时位置地图链接",
            "收货验证码保障包裹安全签收",
          ],
          customerStatus: "包裹派送中",
          notification: {
            header: "订单物流通知",
            line1: "订单 #IN849201 已发出",
            line2: `您的包裹预计将于今天在 ${country} 送达。`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "物流追踪",
            title: "您的包裹正在派送中",
            subtitle: "快递员正在为您加紧派送包裹，请保持电话畅通。",
            infoCard: {
              label: "收货提货码",
              value: "8492",
            },
            buttonText: "查看地图实时位置",
            subNote: "支持无接触安全配送",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "行业解决方案" : `行业解决方案 - ${country.toUpperCase()}`,
      titleLine1: "为各行业量身定制的",
      titleLine2: isGlobal ? "全场景通信方案" : `${country} 企业专属解决方案`,
      description: isGlobal
        ? "借助可靠的语音、短信和全渠道方案，与各行业客户建立更紧密、更可信的连接。"
        : `满足 ${country} 本地监管合规要求与消费者使用习惯的行业通信架构。`,
      industries: [
        {
          id: "banking",
          name: "金融与银行",
          title: `${country} 银行与金融科技`,
          description: `高安全交易短信、合规报备与实时支付验证，赋能 ${country} 顶尖金融机构。`,
        },
        {
          id: "healthcare",
          name: "医疗健康",
          title: `${country} 医疗机构与互联网医院`,
          description: `患者就诊提醒、电子处方通知与远程医疗协同通信，保障信息准确及时。`,
        },
        {
          id: "ecommerce",
          name: "电商与零售",
          title: `${country} 跨境与本土电商零售`,
          description: `订单物流节点推送、大促促销短信与全天候智能客服，提升复购与转化。`,
        },
        {
          id: "education",
          name: "教育培训",
          title: `${country} 教育机构与高等院校`,
          description: `录取通知、缴费提醒、校园安全广播与家校协同通知平台。`,
        },
        {
          id: "travel",
          name: "旅游与出行",
          title: `${country} 航空出行业与酒店酒旅`,
          description: `航班变动实时短信、酒店入住确认与 24/7 旅客专属即时客服通道。`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "与我们建立联系" : `联系 ${country.toUpperCase()} 业务顾问`,
      titleLine1: "让我们为您打造",
      titleLine2: isGlobal ? "最合适的通信连接方案。" : `在 ${country} 最优的通信连接。`,
      description: isGlobal
        ? "借助 iNet Global 的企业通信服务，企业可利用高可靠的商业短信与语音方案提升客户互动、增强安全性并简化运营流程。"
        : `携手 iNet Global，获得 ${country} 运营商直连短信通道、高清语音专线与全套合规支持。立即联系我们进行通道测试与专属报价。`,
    },
    footer: {
      description: isGlobal
        ? "为需要高可靠国际语音、商业短信和全渠道连接的全球企业提供通信基础设施。"
        : `在 ${country} 及全球范围内提供电信级国际语音、商业短信、虚拟号码和全渠道 API 通信基础设施。`,
      email: isGlobal ? "china@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `国际商业中心大厦,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `金融核心区,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). 版权所有。`,
    },
  }),

  // ==========================================
  // HINDI (hi - हिन्दी)
  // ==========================================
  hi: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal ? "वैश्विक संचार अवसंरचना" : `${country.toUpperCase()} टेलीकॉम इंफ्रास्ट्रक्चर`,
      titleLine1: isGlobal ? "वैश्विक संचार," : `${country} में सर्वश्रेष्ठ एसएमएस और`,
      titleLine2: isGlobal ? "व्यवसाय के लिए" : `कॉल ट्रैफ़िक सेवाएं,`,
      titleLine3: isGlobal ? "निर्मित समाधान।" : `उद्यम स्तर के लिए तैयार।`,
      description: isGlobal
        ? "कंपनियों के लिए विश्वसनीय वॉइस, मैसेजिंग और वर्चुअल नंबर, जो सीमाओं और हर ग्राहक टचपॉइंट पर जुड़े रहना चाहते हैं।"
        : `${country} में उच्च गति वाले एसएमएस, अल्ट्रा-लो लेटेंसी वॉइस और डायरेक्ट टेलीकॉम ऑपरेटर रूट के साथ व्यवसायों को सशक्त बनाना।`,
      primaryCta: isGlobal ? "शुरू करें" : `${country} में शुरू करें`,
      secondaryCta: isGlobal ? "सेवाएं देखें" : `${country} रूट्स देखें`,
      timeline: {
        voice: isGlobal ? "बिजनेस वॉइस" : `${country} वॉइस ट्रैफ़िक (CLI)`,
        messaging: isGlobal ? "एसएमएस और मैसेजिंग" : `${country} एसएमएस और ओटीपी रूट्स`,
        numbers: isGlobal ? "वर्चुअल नंबर" : `${country} वर्चुअल डीआईडी नंबर`,
        footerNote1: isGlobal ? "एक एकीकृत प्लेटफॉर्म" : "डायरेक्ट ऑपरेटर रूट्स",
        footerNote2: isGlobal ? "वैश्विक पहुंच" : "100% नियामक अनुपालित",
      },
    },
    coreServices: {
      badge: isGlobal ? "मुख्य सेवाएं" : `${country.toUpperCase()} सेवाएं और ऑपरेटर इंटरकनेक्ट`,
      titleLine1: isGlobal ? "हर ग्राहक यात्रा के लिए" : `${country} में सर्वश्रेष्ठ वॉइस और मैसेजिंग सेवाएं`,
      titleLine2: isGlobal ? "संचार समाधान" : "स्केलेबल उद्यमों के लिए",
      description: isGlobal
        ? "दुनिया भर में उच्च उपलब्धता वाली वॉइस, मैसेजिंग और वर्चुअल नंबरों के लिए मॉड्यूलर टेलीकॉम इंफ्रास्ट्रक्चर।"
        : `${country} में 99.99% अपटाइम, 2 सेकंड में ओटीपी डिलीवरी और डायरेक्ट ऑपरेटर इंटरकनेक्ट।`,
      services: [
        {
          title: isGlobal ? "वॉइस सेवाएं" : `${country} वॉइस और एसआईपी ट्रंकिंग`,
          description: isGlobal
            ? "गुणवत्ता, स्थानीय सीएलआई कवरेज और अनुकूलित समाप्ति लागत के लिए अंतरराष्ट्रीय एसआईपी ट्रंकिंग।"
            : `${country} में शुद्ध सीएलआई गारंटी, प्रीमियम रूट और स्थानीय टेलीकॉम डायरेक्ट इंटरकनेक्ट।`,
          features: [
            isGlobal ? "उच्च गुणवत्ता वाले वॉइस कनेक्शन" : "शुद्ध सीएलआई रूट गारंटी",
            isGlobal ? "लचीले रूट विकल्प" : "प्रमुख ऑपरेटर डायरेक्ट इंटरकनेक्ट",
            isGlobal ? "वैश्विक कवरेज" : `${country} वर्चुअल और टोल-फ्री नंबर`,
          ],
        },
        {
          title: isGlobal ? "मैसेजिंग सेवाएं" : `${country} में सर्वश्रेष्ठ एसएमएस सेवाएं`,
          description: isGlobal
            ? "दुनिया भर में मोबाइल हैंडसेट पर महत्वपूर्ण ट्रांजेक्शनल एसएमएस, ओटीपी और बिजनेस मैसेजिंग वितरित करें।"
            : `${country} में अल्ट्रा-फास्ट ट्रांजेक्शनल एसएमएस, 2 सेकंड से कम में ओटीपी और अनुपालित मार्केटिंग मैसेजिंग।`,
          features: [
            isGlobal ? "सब-सेकंड ओटीपी डिलीवरी" : `${country} में ऑपरेटर व्हाइटलिस्टिंग सहायता`,
            isGlobal ? "उच्च डिलीवरी विश्वसनीयता" : "2 सेकंड से कम में ओटीपी डिलीवरी गारंटी",
            isGlobal ? "आरसीएस रिच मैसेजिंग" : "डायनामिक ऑपरेटर रूटिंग और बैकअप",
          ],
        },
        {
          title: isGlobal ? "ओमनीचैनल प्लेटफॉर्म" : `${country} ओमनीचैनल और व्हाट्सएप बिजनेस एपीआई`,
          description: isGlobal
            ? "वॉइस, एसएमएस, व्हाट्सएप और सुरक्षा सत्यापन को एक एकीकृत डेवलपर-फ्रेंडली रेस्ट एपीआई सूट में जोड़ें।"
            : `आधिकारिक व्हाट्सएप बिजनेस एपीआई, आरसीएस मैसेजिंग और ${country} में ग्राहकों के लिए बहु-चैनल समाधान।`,
          features: [
            isGlobal ? "आधिकारिक व्हाट्सएप बिजनेस एपीआई" : "आधिकारिक व्हाट्सएप बिजनेस एपीआई",
            isGlobal ? "आरसीएस रिच मैसेजिंग" : "सत्यापित सेंडर ग्रीन टिक बैज",
            isGlobal ? "एकीकृत रेस्ट एपीआई सूट" : "यूनिफाइड मल्टी-चैनल रेस्ट एपीआई",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "व्यावसायिक समाधान" : `${country.toUpperCase()} व्यापार समाधान`,
      title: isGlobal ? "ग्राहक यात्रा के लिए समाधान" : `${country} के लिए विशेष रूप से निर्मित`,
      description: isGlobal
        ? "विश्वसनीय वॉइस, मैसेजिंग और ओमनीचैनल समाधानों के माध्यम से ग्राहकों से जुड़ें और संवाद करें।"
        : `${country} में फिनटेक, ई-कॉमर्स और उद्यमों के लिए डिज़ाइन किया गया उच्च-प्रदर्शन संचार स्टैक।`,
      solutions: [
        {
          id: "otp",
          name: "ओटीपी प्रमाणीकरण",
          tagline: "सुरक्षित · तीव्र · विश्वसनीय",
          title: `त्वरित ओटीपी प्रमाणीकरण (${country})`,
          description: `${country} में पंजीकरण, लॉगिन, पासवर्ड रिकवरी और भुगतान सत्यापन के लिए सुरक्षित रूप से ओटीपी भेजें।`,
          features: [
            "2 सेकंड में तेज़ और विश्वसनीय ओटीपी डिलीवरी",
            "व्हाट्सएप और एसएमएस मल्टी-चैनल बैकअप सुरक्षा",
            `${country} के सभी ऑपरेटरों में अनुकूलित रूट्स`,
          ],
          customerStatus: "पहचान सत्यापित",
          notification: {
            header: `iNet सुरक्षा (${country})`,
            body: "आपका सत्यापन कोड है",
            bodyBold: "53193",
            validTime: "5 मिनट के लिए वैध। किसी के साथ साझा न करें।",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "प्रमाणीकरण",
            title: "अपना मोबाइल नंबर सत्यापित करें",
            subtitle: `हमने ${country} में आपके पंजीकृत नंबर पर 5 अंकों का कोड भेजा है।`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "सत्यापित करें और आगे बढ़ें",
            subNote: "कोड नहीं मिला?\n00:45 सेकंड में पुनः भेजें",
          },
        },
        {
          id: "banking",
          name: "बैंकिंग और वित्त",
          tagline: "सुरक्षित · कनेक्टेड · भरोसेमंद",
          title: `बैंकिंग और वित्तीय सेवाएं (${country})`,
          description: `${country} में बैंकों के लिए ट्रांजेक्शनल एसएमएस, बैलेंस अपडेट और भुगतान अलर्ट के साथ सुरक्षित ग्राहक संचार सक्षम करें।`,
          features: [
            "बैंक-ग्रेड एन्क्रिप्शन सुरक्षा पाइपलाइन",
            "रीयल-टाइम डेबिट और क्रेडिट भुगतान सूचनाएं",
            "उच्च-मात्रा ट्रांजेक्शनल एसएमएस डिलीवरी",
          ],
          customerStatus: "भुगतान प्राप्त हुआ",
          notification: {
            header: "बैंक ट्रांजेक्शन अलर्ट",
            body: `आपके खाते में ${currency}250.00 का भुगतान सफलतापूर्वक पूरा हुआ।`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "बैंकिंग",
            title: "भुगतान सफल रहा",
            subtitle: `आपके खाते में ${currency}250.00 सुरक्षित रूप से प्रोसेस किए गए हैं।`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "सफल",
              reference: "TXN-849201",
            },
            buttonText: "विवरण देखें",
            subNote: "✓ सुरक्षित टेलीकॉम चैनल द्वारा डिलीवर",
          },
        },
        {
          id: "marketing",
          name: "मार्केटिंग अभियान",
          tagline: "पहुंचें · जोड़ें · रूपांतरित करें",
          title: `मार्केटिंग संचार अभियान (${country})`,
          description: `${country} में लक्षित मैसेजिंग अभियानों के माध्यम से प्रचार, ऑफ़र और ब्रांड घोषणाएं वितरित करें।`,
          features: [
            "उच्च-मात्रा प्रमोशनल एसएमएस डिलीवरी",
            "स्मार्ट ऑडियंस सेगमेंटेशन और शेड्यूलिंग",
            "रीयल-टाइम क्लिक ट्रैकिंग और रूपांतरण विश्लेषण",
          ],
          customerStatus: "ऑफ़र डिलीवर हुआ",
          notification: {
            header: "विशेष ऑफ़र",
            line1: "फ्लैट 30% छूट",
            line2: `${country} में आपके लिए विशेष सौदे उपलब्ध हैं।`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "विशेष सौदे",
            badge: "सीमित समय ऑफ़र",
            title: "आपके लिए विशेष छूट",
            subtitle: "अपनी अगली खरीदारी पर 30% छूट पाएं।\nऑफ़र महीने के अंत तक वैध है।",
            buttonText: "ऑफ़र क्लेम करें",
            subNote: `✓ ${country} के सत्यापित ग्राहकों को भेजा गया`,
          },
        },
        {
          id: "reminders",
          name: "रिमाइंडर",
          tagline: "समय पर · स्वचालित · विश्वसनीय",
          title: `स्वचालित ग्राहक रिमाइंडर (${country})`,
          description: `अपॉइंटमेंट, बिल देय तिथि और नवीनीकरण के लिए स्वचालित रिमाइंडर के साथ ग्राहकों को सूचित रखें।`,
          features: [
            "स्वचालित मल्टी-चैनल शेड्यूल सूचनाएं",
            "संदेश में डायरेक्ट भुगतान लिंक",
            "मिस्ड अपॉइंटमेंट और देरी को कम करें",
          ],
          customerStatus: "रिमाइंडर डिलीवर हुआ",
          notification: {
            header: "अपॉइंटमेंट रिमाइंडर",
            line1: "कल के लिए निर्धारित",
            line2: "कृपया अपने समय से 10 मिनट पहले पहुंचें।",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "रिमाइंडर",
            title: "आपका अपॉइंटमेंट कल है",
            subtitle: "आपका निर्धारित सत्र सुबह 10:30 बजे के लिए पुष्ट है।",
            infoCard: {
              label: "स्थान / केंद्र",
              value: `${country} सेवा केंद्र`,
            },
            buttonText: "उपस्थिति की पुष्टि करें",
            subNote: "पुष्टि के लिए 1 या बदलने के लिए 2 का उत्तर दें",
          },
        },
        {
          id: "emergency",
          name: "आपातकालीन सूचना",
          tagline: "महत्वपूर्ण · त्वरित · हमेशा कनेक्टेड",
          title: `आपातकालीन और सुरक्षा अलर्ट (${country})`,
          description: `${country} में संकट या आपदा के समय महत्वपूर्ण जानकारी तुरंत प्रसारित करने के लिए प्राथमिकता चैनल।`,
          features: [
            "उच्च प्राथमिकता रूट जो सामान्य कतारों से आगे है",
            "बड़े पैमाने पर अलर्ट के लिए भौगोलिक लक्ष्यीकरण",
            "एसएमएस और वॉइस कॉल बैकअप ट्रांसमिशन",
          ],
          customerStatus: "अलर्ट डिलीवर हुआ",
          notification: {
            header: "सार्वजनिक सुरक्षा सूचना",
            line1: "मौसम चेतावनी अलर्ट",
            line2: "कृपया स्थानीय सुरक्षा निर्देशों का पालन करें।",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "आपातकालीन अलर्ट",
            title: "मौसम सुरक्षा परामर्श",
            subtitle: "खराब मौसम की चेतावनी दी गई है। कृपया सुरक्षित स्थान पर रहें।",
            infoCard: {
              label: "प्रभावित क्षेत्र",
              value: country,
            },
            buttonText: "सुरक्षित क्षेत्र देखें",
            subNote: "राष्ट्रीय आपदा प्रबंधन आधिकारिक प्रसारण",
          },
        },
        {
          id: "order",
          name: "ऑर्डर ट्रैकिंग",
          tagline: "सूचित करें · ट्रैक करें · डिलीवर करें",
          title: `रीयल-टाइम ऑर्डर और डिलीवरी अलर्ट (${country})`,
          description: `${country} में डिस्पैच नोटिफिकेशन, राइडर ट्रैकिंग और डिलीवरी ओटीपी के साथ ग्राहकों को अपडेट रखें।`,
          features: [
            "रीयल-टाइम शिपमेंट और डिस्पैच स्थिति अपडेट",
            "लाइव लोकेशन लिंक के साथ डिलीवरी राइडर अलर्ट",
            "सुरक्षित डिलीवरी सत्यापन ओटीपी",
          ],
          customerStatus: "डिलीवरी के लिए निकला",
          notification: {
            header: "ऑर्डर स्टेटस अपडेट",
            line1: "ऑर्डर #IN849201 डिस्पैच हुआ",
            line2: `आपका पैकेज आज ${country} में डिलीवर हो रहा है।`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "ऑर्डर ट्रैकिंग",
            title: "आपका ऑर्डर रास्ते में है",
            subtitle: "डिलीवरी पार्टनर आपका पैकेज लेकर आ रहा है।",
            infoCard: {
              label: "डिलीवरी ओटीपी",
              value: "8492",
            },
            buttonText: "मैप पर ट्रैक करें",
            subNote: "संपर्क रहित डिलीवरी सक्षम",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "उद्योग विशेषज्ञता" : `उद्योग विशेषज्ञता - ${country.toUpperCase()}`,
      titleLine1: "उद्योगों के लिए निर्मित",
      titleLine2: isGlobal ? "संचार समाधान" : `${country} उद्यमों के लिए विशेष`,
      description: isGlobal
        ? "विश्वसनीय वॉइस, मैसेजिंग और ओमनीचैनल समाधानों के माध्यम से हर उद्योग के ग्राहकों से जुड़ें।"
        : `${country} में स्थानीय नियमों और उपभोक्ता प्राथमिकताओं को पूरा करने वाली संचार अवसंरचना।`,
      industries: [
        {
          id: "banking",
          name: "बैंकिंग",
          title: `${country} में बैंकिंग और फिनटेक`,
          description: `सुरक्षित ट्रांजेक्शनल एसएमएस, स्थानीय अनुपालन और वित्तीय संस्थानों के लिए रीयल-टाइम भुगतान सत्यापन।`,
        },
        {
          id: "healthcare",
          name: "हेल्थकेयर",
          title: `${country} में स्वास्थ्य सेवा और क्लीनिक`,
          description: `मरीज़ों के अपॉइंटमेंट रिमाइंडर, डिजिटल रिपोर्ट और टेलीमेडिसिन संचार।`,
        },
        {
          id: "ecommerce",
          name: "ई-कॉमर्स और रिटेल",
          title: `${country} में ई-कॉमर्स और रिटेल`,
          description: `ऑर्डर ट्रैकिंग, फ़ेस्टिव सेल प्रमोशन और बहु-चैनल ग्राहक सहायता।`,
        },
        {
          id: "education",
          name: "शिक्षा",
          title: `${country} में शिक्षा और विश्वविद्यालय`,
          description: `प्रवेश सूचनाएं, कैंपस अलर्ट, शुल्क भुगतान रिमाइंडर और अभिभावक संचार मंच।`,
        },
        {
          id: "travel",
          name: "यात्रा और आतिथ्य",
          title: `${country} में यात्रा और पर्यटन`,
          description: `फ़्लाइट अपडेट, होटल चेक-इन एसएमएस और चौबीसों घंटे ग्राहक सहायता।`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "हमसे संपर्क करें" : `${country.toUpperCase()} में हमसे जुड़ें`,
      titleLine1: "आइए एक सही संचार संबंध",
      titleLine2: isGlobal ? "स्थापित करें।" : `${country} में स्थापित करें।`,
      description: isGlobal
        ? "iNet Global Services के साथ, व्यवसाय ग्राहक जुड़ाव में सुधार, सुरक्षा को मजबूत करने और संचार को सुव्यवस्थित करने के लिए विश्वसनीय एसएमएस समाधानों का लाभ उठा सकते हैं।"
        : `${country} में डायरेक्ट कैरियर एसएमएस, क्रिस्टल-क्लियर वॉइस ट्रैफ़िक और पूर्ण अनुपालन के लिए iNet Global के साथ साझेदारी करें।`,
    },
    footer: {
      description: isGlobal
        ? "विश्वसनीय वॉइस, मैसेजिंग और ओमनीचैनल कनेक्टिविटी की आवश्यकता वाले व्यवसायों के लिए वैश्विक संचार अवसंरचना।"
        : `${country} और दुनिया भर में कैरियर-ग्रेड वॉइस, एसएमएस, वर्चुअल नंबर और ओमनीचैनल एपीआई प्रदान करने वाला उद्यम संचार इंफ्रास्ट्रक्चर।`,
      email: isGlobal ? "india@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+91 1800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `इंटरनेशनल बिजनेस सेंटर,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `फाइनेंशियल डिस्ट्रिक्ट,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). सर्वाधिकार सुरक्षित।`,
    },
  }),

  // ==========================================
  // ARABIC (ar - العربية)
  // ==========================================
  ar: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal ? "البنية التحتية العالمية للاتصالات" : `البنية التحتية للاتصالات في ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "اتصالات عالمية،" : `أفضل خدمات الرسائل القصيرة`,
      titleLine2: isGlobal ? "مصممة خصيصاً" : `وحركة المكالمات في ${country}،`,
      titleLine3: isGlobal ? "للأعمال الحديثة." : `مبنية للمؤسسات الكبرى.`,
      description: isGlobal
        ? "خدمات صوتية ورسائل وأرقام افتراضية موثوقة للشركات التي تحتاج إلى البقاء على اتصال عبر الحدود وفرق العمل وكل نقطة اتصال مع العملاء."
        : `تمكين المؤسسات في ${country} بمسارات رسائل قصيرة عالية السرعة وإنهاء صوتي فائق السرعة وربط مباشر مع المشغلين.`,
      primaryCta: isGlobal ? "ابدأ الآن" : `ابدأ في ${country}`,
      secondaryCta: isGlobal ? "استكشف الخدمات" : `استكشف مسارات ${country}`,
      timeline: {
        voice: isGlobal ? "الصوت للأعمال" : `حركة الصوت في ${country} (CLI)`,
        messaging: isGlobal ? "الرسائل و OTP" : `مسارات SMS و OTP في ${country}`,
        numbers: isGlobal ? "الأرقام الافتراضية" : `أرقام DID الافتراضية في ${country}`,
        footerNote1: isGlobal ? "منصة موحدة" : "مسارات مباشرة مع المشغلين",
        footerNote2: isGlobal ? "انتشار عالمي" : "100% امتثال تنظيمي كامل",
      },
    },
    coreServices: {
      badge: isGlobal ? "الخدمات الأساسية" : `خدمات وشبكات المشغلين في ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "حلول اتصالات شاملة" : `أفضل خدمات الصوت والرسائل في ${country}`,
      titleLine2: isGlobal ? "لكل مرحلة من تجربة العميل" : "للمؤسسات والشركات الكبرى",
      description: isGlobal
        ? "بنية تحتية مرنة للاتصالات مصممة لتوفير خدمات الصوت والرسائل والأرقام الافتراضية بجاهزية عالية عالمياً."
        : `بنية تحتية بمستوى المشغلين في ${country} مع وقت تشغيل 99.99% وتسليم OTP خلال أقل من ثانيتين.`,
      services: [
        {
          title: isGlobal ? "خدمات الصوت" : `خطوط SIP والصوت في ${country}`,
          description: isGlobal
            ? "خطوط SIP دولية مع خيارات توجيه مرنة مصممة حول الجودة وتغطية CLI المحلية وتكلفة منخفضة."
            : `حركة مكالمات عالية السعة في ${country} مع ضمان إظهار رقم المتصل CLI وإنهاء مكالمات مباشر.`,
          features: [
            isGlobal ? "اتصالات صوتية فائقة الجودة" : "ضمان مسار CLI نقي بنسبة 100%",
            isGlobal ? "خيارات توجيه ذكية ومرنة" : "ربط مباشر مع كبرى شركات الاتصالات",
            isGlobal ? "تغطية عالمية واسعة" : `أرقام افتراضية ومجانية في ${country}`,
          ],
        },
        {
          title: isGlobal ? "الرسائل النصية SMS" : `أفضل خدمات الرسائل في ${country}`,
          description: isGlobal
            ? "تسليم رسائل المعاملات الحيوية ورموز التحقق OTP والرسائل التفاعلية مباشرة لهواتف المستخدمين حول العالم."
            : `رسائل معاملات فائقة السرعة، ورموز تحقق في أقل من ثانيتين، وتسويق جماعي متوافق في ${country}.`,
          features: [
            isGlobal ? "تسليم فوري لرموز التحقق" : `اعتماد رسمي وقوائم بيضاء في ${country}`,
            isGlobal ? "نسبة وصول عالية جداً" : "ضمان تسليم OTP خلال أقل من ثانيتين",
            isGlobal ? "رسائل الوسائط الغنية (RCS)" : "توجيه ديناميكي ذكي وحماية من الأعطال",
          ],
        },
        {
          title: isGlobal ? "القنوات المتعددة" : `القنوات المتعددة وواتساب للأعمال في ${country}`,
          description: isGlobal
            ? "دمج الصوت والرسائل النصية وواتساب والتحقق في واجهة REST API موحدة وسهلة الاستخدام."
            : `واجهة Meta WhatsApp Business API الرسمية ورسائل RCS المتقدمة المخصصة للسوق في ${country}.`,
          features: [
            isGlobal ? "واجهة واتساب للأعمال الرسمية" : "واجهة WhatsApp Business API الرسمية",
            isGlobal ? "رسائل تفاعلية حديثة RCS" : "شارة التحقق الخضراء للمرسل المعتمد",
            isGlobal ? "واجهات برمجة تطبيقات موحدة" : "واجهات REST API موحدة وشاملة",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "حلول الأعمال" : `حلول الأعمال في ${country.toUpperCase()}`,
      title: isGlobal ? "حلول متكاملة لرحلة العميل" : `حلول مصممة خصيصاً لـ ${country}`,
      description: isGlobal
        ? "تواصل وتفاعل مع العملاء عبر حلول الصوت والرسائل والقنوات المتعددة الموثوقة."
        : `منظومة اتصالات عالية الأداء مصممة للتكنولوجيا المالية والتجارة الإلكترونية في ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "التحقق بـ OTP",
          tagline: "آمن · سريع · موثوق",
          title: `التحقق الفوري بـ OTP (${country})`,
          description: `تسليم كلمات المرور لمرة واحدة بسرعة وأمان للتسجيل وتسجيل الدخول وتأكيد المدفوعات في ${country}.`,
          features: [
            "تسليم OTP فائق السرعة خلال أقل من ثانيتين",
            "حماية وتحويل تلقائي عبر قنوات واتساب البديلة",
            `مسارات محسّنة عبر جميع مشغلي الاتصالات في ${country}`,
          ],
          customerStatus: "تم التحقق من الهوية",
          notification: {
            header: `مركز أمان iNet (${country})`,
            body: "رمز التحقق الخاص بك هو",
            bodyBold: "53193",
            validTime: "صالح لمدة 5 دقائق. لا تشاركه مع أي شخص.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "المصادقة",
            title: "تأكيد رقم هاتفك المحمول",
            subtitle: `أرسلنا رمز تحقق مكون من 5 أرقام إلى رقمك المسجل في ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "تحقق ومتابعة",
            subNote: "لم تستلم الرمز؟\nإعادة الإرسال خلال 00:45",
          },
        },
        {
          id: "banking",
          name: "البنوك والتمويل",
          tagline: "آمن · متصل · موثوق",
          title: `الخدمات المصرفية والمالية (${country})`,
          description: `تواصل آمن وموثوق مع العملاء عبر رسائل المعاملات وإشعارات الدفع وتحديثات الحساب في ${country}.`,
          features: [
            "قنوات اتصال مشفرة بمعايير الأمان المصرفية",
            "إشعارات فورية لعمليات الإيداع والسحب والتحويل",
            "سعة عالية جداً لمعالجة ملايين الرسائل المالية",
          ],
          customerStatus: "تمت المعاملة بنجاح",
          notification: {
            header: "تنبيه المعاملات المصرفية",
            body: `تم إتمام عملية الدفع بمبلغ ${currency}250.00 بنجاح.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "الخدمات المصرفية",
            title: "تمت المعاملة بنجاح",
            subtitle: `تمت معالجة مبلغ ${currency}250.00 بأمان في حسابك.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "مكتمل",
              reference: "TXN-849201",
            },
            buttonText: "عرض كشف الحساب",
            subNote: "✓ تم التسليم عبر قناة مصرفية آمنة",
          },
        },
        {
          id: "marketing",
          name: "التسويق والحملات",
          tagline: "وصول · تفاعل · نتائج",
          title: `حملات الرسائل التسويقية (${country})`,
          description: `تواصل مع المستهلكين من خلال حملات رسائل موجهة تقدم العروض الترويجية والخصومات الموسمية في ${country}.`,
          features: [
            "إرسال رسائل ترويجية بكميات ضخمة في دقائق",
            "تقسيم ذكي للجمهور وجدولة مسبقة للحملات",
            "تتبع فوري للنقرات ومعدلات التحويل",
          ],
          customerStatus: "تم تسليم العرض",
          notification: {
            header: "عرض خاص وحصري",
            line1: "خصم 30% لفترة محدودة",
            line2: `عروض حصرية متاحة الآن في جميع أنحاء ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "عروض حصرية",
            badge: "عرض محدود",
            title: "خصم استثنائي مخصص لك",
            subtitle: "احصل على خصم 30% على طلبك القادم.\nالعرض سارٍ حتى نهاية الشهر.",
            buttonText: "استفد من العرض",
            subNote: `✓ تم الإرسال إلى المشتركين المعتمدين في ${country}`,
          },
        },
        {
          id: "reminders",
          name: "التذكيرات الآلية",
          tagline: "في الموعد · مؤتمت · دقيق",
          title: `تذكيرات العملاء الآلية (${country})`,
          description: `إبقاء العملاء على اطلاع دائم بتذكيرات آلية للمواعيد والفواتير المستحقة وتجديد الاشتراكات في ${country}.`,
          features: [
            "إشعارات مواعيد تلقائية متعددة القنوات",
            "روابط دفع مباشرة مدمجة داخل الرسالة",
            "تقليل المواعيد الفائتة والدفعات المتأخرة",
          ],
          customerStatus: "تم استلام التذكير",
          notification: {
            header: "تذكير بالموعد",
            line1: "موعدك محدد غداً",
            line2: "يرجى الحضور قبل الموعد بـ 10 دقائق.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "التذكيرات",
            title: "موعدك محدد غداً",
            subtitle: "جلستك القادمة مؤكدة في تمام الساعة 10:30 صباحاً.",
            infoCard: {
              label: "الموقع / المركز",
              value: `المركز الطبي الرئيسي في ${country}`,
            },
            buttonText: "تأكيد الحضور",
            subNote: "أرسل 1 للتأكيد أو 2 لتغيير الموعد",
          },
        },
        {
          id: "emergency",
          name: "تنبيهات الطوارئ",
          tagline: "حاسم · سريع · اتصال دائم",
          title: `بث الطوارئ والسلامة العامة (${country})`,
          description: `تسليم تنبيهات الطوارئ العاجلة على الفور عند الحاجة لحماية السلامة واستمرارية الأعمال في ${country}.`,
          features: [
            "مسارات فائقة الأولوية تتجاوز قوائم الانتظار",
            "استهداف جغرافي مخصص للبث الشامل",
            "بث صوتي ورسائل نصية احتياطية متزامنة",
          ],
          customerStatus: "تم تسليم التنبيه",
          notification: {
            header: "تنبيه السلامة العامة",
            line1: "تحذير جوي عاجل",
            line2: "يرجى اتباع إرشادات الدفاع المدني والسلطات المحلية.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "تنبيه طوارئ",
            title: "تحذير جوي عاجل",
            subtitle: "تم رصد تقلبات جوية حادة. يرجى البقاء في مكان آمن واتباع التعليمات.",
            infoCard: {
              label: "المنطقة المتأثرة",
              value: country,
            },
            buttonText: "عرض المناطق الآمنة",
            subNote: "بث رسمي من هيئة إدارة الأزمات والطوارئ",
          },
        },
        {
          id: "order",
          name: "إشعارات الطلبات",
          tagline: "إشعار · تتبع · تسليم",
          title: `تتبع الطلبات والشحنات الفوري (${country})`,
          description: `إبقاء المتسوقين على علم بكل خطوة من التوصيل مع إشعارات الشحن وتتبع المندوب ورمز OTP للاستلام في ${country}.`,
          features: [
            "تحديثات لحظية لحالة الشحن والتجهيز",
            "تنبيه وصول المندوب مع رابط الخريطة الحية",
            "رمز OTP للتسليم الآمن والموثوق",
          ],
          customerStatus: "في الطريق للتسليم",
          notification: {
            header: "تحديث حالة الشحنة",
            line1: "تم شحن الطلب #IN849201",
            line2: `شحنتك في طريقها للتسليم اليوم في ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "تتبع الشحنة",
            title: "طلبك في طريقه إليك",
            subtitle: "المندوب في طريقه لتسليم طلبك الآن.",
            infoCard: {
              label: "رمز استلام الشحنة",
              value: "8492",
            },
            buttonText: "تتبع الموقع على الخريطة",
            subNote: "التسليم بدون تلامس متاح",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "خبرات القطاعات" : `خبرات القطاعات - ${country.toUpperCase()}`,
      titleLine1: "حلول اتصالات متطورة مصممة",
      titleLine2: isGlobal ? "لكل قطاع وصناعة" : `لمؤسسات ${country}`,
      description: isGlobal
        ? "تواصل وتفاعل مع العملاء عبر حلول الصوت والرسائل والقنوات المتعددة الموثوقة."
        : `بنية اتصالات متوافقة تماماً مع القوانين واللوائح وسلوك المستهلكين في ${country}.`,
      industries: [
        {
          id: "banking",
          name: "الخدمات المالية",
          title: `البنوك والتكنولوجيا المالية في ${country}`,
          description: `رسائل المعاملات الآمنة والامتثال المصرفي وتأكيد المدفوعات الفورية للبنوك في ${country}.`,
        },
        {
          id: "healthcare",
          name: "الرعاية الصحية",
          title: `المستشفيات والمراكز الطبية في ${country}`,
          description: `تذكيرات مواعيد المرضى، الوصفات الطبية الرقمية، واستشارات الطب الاتصالي.`,
        },
        {
          id: "ecommerce",
          name: "التجارة والتجزئة",
          title: `التجارة الإلكترونية والتجزئة في ${country}`,
          description: `تحديثات الشحن، عروض التخفيضات الكبرى، وخدمة العملاء الذكية متعددة القنوات.`,
        },
        {
          id: "education",
          name: "التعليم",
          title: `الجامعات والمؤسسات التعليمية في ${country}`,
          description: `إشعارات القبول الجامعي، تنبيهات الرسوم الدراسية، وتواصل أولياء الأمور.`,
        },
        {
          id: "travel",
          name: "السياحة والضيافة",
          title: `السفر والطيران والضيافة في ${country}`,
          description: `تحديثات الرحلات الجوية الفورية، تأكيد حجوزات الفنادق، ودعم الضيوف على مدار الساعة.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "تواصل معنا" : `تواصل معنا في ${country.toUpperCase()}`,
      titleLine1: "دعنا نبني قناة الاتصال",
      titleLine2: isGlobal ? "المثالية لأعمالك." : `المثالية في ${country}.`,
      description: isGlobal
        ? "مع خدمات iNet Global، يمكن للشركات الاستفادة من حلول الرسائل والاتصالات الموثوقة لتعزيز تفاعل العملاء ورفع الأمان وتبسيط العمليات."
        : `شارك مع iNet Global للحصول على مسارات رسائل مباشرة، وجودة صوت فائقة النقاء، وامتثال كامل في ${country}. تواصل مع فريقنا لاختبار المسارات والأسعار المخصصة.`,
    },
    footer: {
      description: isGlobal
        ? "بنية تحتية عالمية للاتصالات للشركات التي تحتاج إلى خدمات صوتية ورسائل وقنوات متعددة فائقة الاعتمادية."
        : `بنية تحتية للاتصالات المؤسسية توفر خدمات الصوت والرسائل والأرقام الافتراضية وواجهات APIs في ${country} وحول العالم.`,
      email: isGlobal ? "arabic@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `مركز الأعمال الدولي،`,
        line2: isGlobal ? "San Francisco, CA 94105," : `حي المال والأعمال،`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). جميع الحقوق محفوظة.`,
    },
  }),

  // ==========================================
  // FRENCH (fr - Français)
  // ==========================================
  fr: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "INFRASTRUCTURE MONDIALE DE TÉLÉCOMMUNICATIONS"
        : `INFRASTRUCTURE DE TÉLÉCOMS EN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Communication Mondiale," : `Meilleurs Services SMS et`,
      titleLine2: isGlobal ? "Conçue Pour" : `Trafic Vocal en ${country},`,
      titleLine3: isGlobal ? "Les Entreprises." : `Taillés Pour la Grande Échelle.`,
      description: isGlobal
        ? "Solutions fiables de voix, messagerie et numéros virtuels pour les entreprises connectées à travers les frontières, les équipes et chaque point de contact client."
        : `Propulsez vos opérations en ${country} grâce à des routes SMS à haut débit, une terminaison voix à latence ultra-faible et des interconnexions directes avec les opérateurs.`,
      primaryCta: isGlobal ? "Commencer" : `Démarrer en ${country}`,
      secondaryCta: isGlobal ? "Explorer les Services" : `Voir les Routes en ${country}`,
      timeline: {
        voice: isGlobal ? "Voix Entreprise" : `Trafic Vocal en ${country} (CLI)`,
        messaging: isGlobal ? "SMS & Messagerie" : `Routes SMS & OTP en ${country}`,
        numbers: isGlobal ? "Numéros Virtuels" : `Numéros DID en ${country}`,
        footerNote1: isGlobal ? "Une seule plateforme" : "Routes Directes Opérateurs",
        footerNote2: isGlobal ? "Portée mondiale" : "100% Conforme aux Réglementations",
      },
    },
    coreServices: {
      badge: isGlobal ? "SERVICES PRINCIPAUX" : `SERVICES & INTERCONNEXIONS EN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Solutions de Communication Pour" : `Meilleurs Services Voix & SMS en ${country}`,
      titleLine2: isGlobal ? "Chaque Expérience Client" : "Pour Entreprises en Forte Croissance",
      description: isGlobal
        ? "Infrastructure télécom modulaire garantissant une haute disponibilité pour la voix, la messagerie et les numéros virtuels dans le monde entier."
        : `Infrastructure de niveau opérateur en ${country} avec 99,99% de disponibilité, livraison d'OTP en moins de 2 secondes et interconnexions directes.`,
      services: [
        {
          title: isGlobal ? "Services Vocaux" : `Voix & Trunking SIP en ${country}`,
          description: isGlobal
            ? "Trunking SIP international avec options de routage flexibles axées sur la qualité, la couverture CLI localisée et des coûts optimisés."
            : `Trafic d'appels à haute concurrence en ${country} avec garantie CLI, terminaison premium et connexion directe aux opérateurs locaux.`,
          features: [
            isGlobal ? "Connexions vocales haute qualité" : "Garantie de Route CLI Pure",
            isGlobal ? "Routage intelligent et flexible" : "Interconnexions Directes Opérateurs",
            isGlobal ? "Couverture mondiale" : `Numéros Virtuels & Sans Frais en ${country}`,
          ],
        },
        {
          title: isGlobal ? "Messagerie SMS" : `Meilleurs Services SMS en ${country}`,
          description: isGlobal
            ? "Envoyez des SMS transactionnels critiques, des codes OTP et des messages riches directement sur les mobiles du monde entier."
            : `SMS transactionnels ultra-rapides, codes de vérification livrés en moins de 2 secondes et campagnes marketing conformes en ${country}.`,
          features: [
            isGlobal ? "Livraison d'OTP ultra-rapide" : `Enregistrement officiel d'émetteur en ${country}`,
            isGlobal ? "Haute garantie de délivrabilité" : "Garantie de Livraison OTP < 2s",
            isGlobal ? "Messagerie enrichie (RCS)" : "Routage Dynamique Multi-Opérateurs",
          ],
        },
        {
          title: isGlobal ? "Omnicanal" : `Omnicanal & API WhatsApp en ${country}`,
          description: isGlobal
            ? "Unifiez Voix, SMS, WhatsApp et Authentification dans une suite d'API REST conçue pour un déploiement instantané."
            : `API officielle WhatsApp Business, messagerie interactive RCS et solutions multicanales pour engager vos clients en ${country}.`,
          features: [
            isGlobal ? "API Officielle WhatsApp Business" : "API Officielle WhatsApp Business",
            isGlobal ? "Messagerie conversationnelle RCS" : "Badge d'Expéditeur Vérifié Officiel",
            isGlobal ? "Suite complète d'API REST" : "APIs REST Unifiées Multicanal",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "SOLUTIONS MÉTIERS" : `SOLUTIONS MÉTIERS EN ${country.toUpperCase()}`,
      title: isGlobal ? "Des Solutions Pour Tout le Parcours Client" : `Solutions Conçues Pour ${country}`,
      description: isGlobal
        ? "Connectez, engagez et communiquez avec vos clients grâce à des solutions fiables de voix, SMS et omnicanal."
        : `Stack de communication haute performance taillée pour les fintechs, le e-commerce et les grandes entreprises en ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Authentification OTP",
          tagline: "Sécurisé · Rapide · Fiable",
          title: `Authentification OTP Instantanée (${country})`,
          description: `Délivrez des codes à usage unique rapidement et en toute sécurité pour les inscriptions, connexions et paiements en ${country}.`,
          features: [
            "Livraison ultra-rapide et fiable en moins de 2s",
            "Protection avec basculement automatique WhatsApp",
            `Routes optimisées sur tous les réseaux en ${country}`,
          ],
          customerStatus: "Identité Vérifiée",
          notification: {
            header: `iNet Sécurité (${country})`,
            body: "Votre code de vérification est",
            bodyBold: "53193",
            validTime: "Valide pendant 5 minutes. Ne le partagez pas.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Authentification",
            title: "Vérifiez votre Numéro Mobile",
            subtitle: `Nous avons envoyé un code de vérification à votre numéro enregistré en ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Vérifier et Continuer",
            subNote: "Code non reçu ?\nRenvoyer dans 00:45",
          },
        },
        {
          id: "banking",
          name: "Banque & Finance",
          tagline: "Sécurisé · Connecté · Conforme",
          title: `Services Bancaires & Financiers (${country})`,
          description: `Assurez une communication sécurisée avec des alertes de débit/crédit en temps réel et des notifications de paiement en ${country}.`,
          features: [
            "Tunnels de sécurité chiffrés de niveau bancaire",
            "Notifications de transaction et solde en temps réel",
            "Capacité d'envoi de SMS transactionnels massifs",
          ],
          customerStatus: "Transaction Effectuée",
          notification: {
            header: "Alerte de Transaction Bancaire",
            body: `Votre paiement de ${currency}250.00 a été effectué avec succès.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Banque en Ligne",
            title: "Paiement Réussi",
            subtitle: `${currency}250.00 traités avec succès sur votre compte.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Complété",
              reference: "TXN-849201",
            },
            buttonText: "Consulter le Relevé",
            subNote: "✓ Livré via canal opérateur sécurisé",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Cibler · Engager · Convertir",
          title: `Campagnes Marketing Ciblées (${country})`,
          description: `Touchez vos consommateurs grâce à des campagnes SMS ciblées diffusant promotions et offres exclusives en ${country}.`,
          features: [
            "Envoi de SMS promotionnels à très grand volume",
            "Segmentation d'audience et planification intelligente",
            "Suivi des clics et analyses de conversion en direct",
          ],
          customerStatus: "Offre Délivrée",
          notification: {
            header: "Offre Exclusive",
            line1: "RÉDUCTION DE 30%",
            line2: `Offres spéciales disponibles dans tout ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Offres Spéciales",
            badge: "Offre Limitée",
            title: "Remise Exclusive Pour Vous",
            subtitle: "Bénéficiez de 30% de réduction sur votre prochain achat.\nOffre valable jusqu'à la fin du mois.",
            buttonText: "Profiter de l'Offre",
            subNote: `✓ Envoyé aux abonnés vérifiés en ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Rappels",
          tagline: "À l'Heure · Automatisé · Efficace",
          title: `Rappels Automatisés de Rendez-vous (${country})`,
          description: `Tenez vos clients informés avec des rappels automatisés de consultations, échéances de factures et événements en ${country}.`,
          features: [
            "Notifications de calendrier multicanales automatisées",
            "Liens de paiement direct intégrés dans les SMS",
            "Réduction des rendez-vous manqués et retards",
          ],
          customerStatus: "Rappel Délivré",
          notification: {
            header: "Rappel de Rendez-vous",
            line1: "Prévu pour Demain",
            line2: "Merci d'arriver 10 minutes avant l'heure prévue.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Rappels",
            title: "Votre Rendez-vous est Demain",
            subtitle: "Votre séance est confirmée pour 10h30.",
            infoCard: {
              label: "Lieu / Centre",
              value: `Centre Médical Central ${country}`,
            },
            buttonText: "Confirmer ma Présence",
            subNote: "Répondez 1 pour confirmer ou 2 pour reporter",
          },
        },
        {
          id: "emergency",
          name: "Alertes d'Urgence",
          tagline: "Critique · Immédiat · Toujours Connecté",
          title: `Diffusion d'Alertes et Sécurité Publique (${country})`,
          description: `Diffusez instantanément des alertes prioritaires lorsque chaque seconde compte pour préserver la sécurité en ${country}.`,
          features: [
            "Routes prioritaires contournant les files d'attente",
            "Ciblage géographique pour alertes de masse",
            "Diffusion combinée voix et SMS de secours",
          ],
          customerStatus: "Alerte d'Urgence Livrée",
          notification: {
            header: "Avis de Sécurité Publique",
            line1: "Alerte Météo d'Urgence",
            line2: "Veuillez suivre les consignes des autorités locales.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Alerte d'Urgence",
            title: "Avis Météo d'Urgence",
            subtitle: "Conditions météorologiques sévères signalées. Veuillez rester à l'abri.",
            infoCard: {
              label: "Zone Concernée",
              value: country,
            },
            buttonText: "Consulter les Zones Sûres",
            subNote: "Diffusion Officielle des Services de Sécurité",
          },
        },
        {
          id: "order",
          name: "Suivi de Commande",
          tagline: "Informer · Suivre · Livrer",
          title: `Alertes de Commande & Livraison en Temps Réel (${country})`,
          description: `Informez vos acheteurs à chaque étape de la livraison avec notifications d'expédition, suivi de coursier et code OTP en ${country}.`,
          features: [
            "Mises à jour d'expédition et d'acheminement en direct",
            "Alerte d'arrivée du livreur avec géolocalisation",
            "Code OTP pour une remise de colis sécurisée",
          ],
          customerStatus: "En Cours de Livraison",
          notification: {
            header: "Statut de votre Commande",
            line1: "Commande #IN849201 Expédiée",
            line2: `Votre colis arrive aujourd'hui en ${country}.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Suivi de Colis",
            title: "Votre Commande est en Route",
            subtitle: "Le livreur est en route avec votre colis.",
            infoCard: {
              label: "Code OTP de Réception",
              value: "8492",
            },
            buttonText: "Suivre sur la Carte",
            subNote: "Livraison sans contact disponible",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "EXPERTISE SECTORIELLE" : `EXPERTISE SECTORIELLE - ${country.toUpperCase()}`,
      titleLine1: "Solutions de Communication Conçues",
      titleLine2: isGlobal ? "Pour Chaque Secteur" : `Pour les Entreprises en ${country}`,
      description: isGlobal
        ? "Connectez, engagez et communiquez avec vos clients grâce à des solutions fiables de voix, SMS et omnicanal."
        : `Infrastructure adaptée aux normes réglementaires et habitudes de consommation en ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Banque & Finance",
          title: `Banque & Fintech en ${country}`,
          description: `SMS transactionnels ultra-sécurisés, conformité locale et authentification des paiements en temps réel en ${country}.`,
        },
        {
          id: "healthcare",
          name: "Santé",
          title: `Santé & Cliniques en ${country}`,
          description: `Rappels de rendez-vous patients, ordonnances électroniques et téléconsultations sécurisées.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce",
          title: `E-Commerce & Retail en ${country}`,
          description: `Suivi des commandes, promotions exclusives et support client multicanal pour les marques.`,
        },
        {
          id: "education",
          name: "Éducation",
          title: `Éducation & Universités en ${country}`,
          description: `Avis d'admission, alertes de campus, rappels de frais scolaires et communication parents.`,
        },
        {
          id: "travel",
          name: "Voyages & Tourisme",
          title: `Voyages & Hôtellerie en ${country}`,
          description: `Mises à jour de vols en direct, confirmations d'hôtels et conciergerie 24/7 pour les voyageurs.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "CONTACTEZ-NOUS" : `CONTACTEZ-NOUS EN ${country.toUpperCase()}`,
      titleLine1: "Construisons Ensemble la Connexion",
      titleLine2: isGlobal ? "Idéale Pour Vos Équipes." : `Idéale en ${country}.`,
      description: isGlobal
        ? "Avec iNet Global Services, développez l'engagement client, renforcez la sécurité et fluidifiez vos communications d'entreprise."
        : `Associez-vous à iNet Global pour des routes SMS directes opérateurs, une voix cristalline et une conformité totale en ${country}.`,
    },
    footer: {
      description: isGlobal
        ? "Infrastructure mondiale de télécommunications pour les entreprises exigeant une connectivité voix, SMS et omnicanal de haute fiabilité."
        : `Infrastructure de télécoms d'entreprise délivrant Voix, SMS, Numéros Virtuels et APIs Omnicanal en ${country} et dans le monde entier.`,
      email: isGlobal ? "france@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Centre d'Affaires International,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Quartier Financier,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Tous droits réservés.`,
    },
  }),

  // ==========================================
  // GERMAN (de - Deutsch)
  // ==========================================
  de: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal ? "GLOBALE TELEKOMMUNIKATIONS-INFRASTRUKTUR" : `TELEKOMMUNIKATIONS-INFRASTRUKTUR IN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Globale Kommunikation," : `Beste SMS- & Sprachtelefonie-`,
      titleLine2: isGlobal ? "Maßgeschneidert Für" : `Dienste in ${country},`,
      titleLine3: isGlobal ? "Ihr Unternehmen." : `Für Enterprise-Skalierung.`,
      description: isGlobal
        ? "Zuverlässige Sprach-, Messaging- und virtuelle Rufnummernlösungen für Unternehmen, die über Grenzen, Teams und alle Kundenkontaktpunkte hinweg verbunden bleiben müssen."
        : `Stärken Sie Ihr Unternehmen in ${country} mit schnellen SMS-Routen, extrem niedrigen Latenzen bei der Sprachterminierung und direkten Betreiberanbindungen.`,
      primaryCta: isGlobal ? "Jetzt Starten" : `In ${country} starten`,
      secondaryCta: isGlobal ? "Dienste Entdecken" : `Routen in ${country} ansehen`,
      timeline: {
        voice: isGlobal ? "Unternehmens-Sprache" : `Sprachverkehr in ${country} (CLI)`,
        messaging: isGlobal ? "SMS & Messaging" : `SMS- & OTP-Routen in ${country}`,
        numbers: isGlobal ? "Virtuelle Rufnummern" : `Virtuelle DID-Nummern in ${country}`,
        footerNote1: isGlobal ? "Eine zentrale Plattform" : "Direkte Betreiber-Routen",
        footerNote2: isGlobal ? "Weltweite Reichweite" : "100% DSGVO- & Regulierungs-konform",
      },
    },
    coreServices: {
      badge: isGlobal ? "KERNDIENSTE" : `BETREIBER-ROUTEN & DIENSTE IN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Kommunikationslösungen Für" : `Erstklassige Sprach- & SMS-Dienste in ${country}`,
      titleLine2: isGlobal ? "Jede Phase der Customer Journey" : "Für Wachstumsstarke Unternehmen",
      description: isGlobal
        ? "Modulare Telekommunikations-Infrastruktur für hochverfügbare Sprachverbindungen, Messaging und weltweite virtuelle Rufnummern."
        : `Netzbetreiber-Qualität in ${country} mit 99,99% Verfügbarkeit, OTP-Zustellung unter 2 Sekunden und direkten Netzanbindungen.`,
      services: [
        {
          title: isGlobal ? "Sprachdienste (Voice)" : `SIP-Trunking & Sprache in ${country}`,
          description: isGlobal
            ? "Internationales SIP-Trunking mit flexiblen Routing-Optionen, optimiert für höchste Audioqualität, lokale CLI-Abdeckung und günstige Terminierungskosten."
            : `Hochkapazitiver Sprachverkehr in ${country} mit garantierter CLI-Übermittlung und direkten Verbindungen zu lokalen Netzbetreibern.`,
          features: [
            isGlobal ? "Kristallklare Sprachqualität" : "Garantierte echte CLI-Routen",
            isGlobal ? "Intelligentes flexibles Routing" : "Direkte Carrier-Zusammenschaltungen",
            isGlobal ? "Umfassende weltweite Abdeckung" : `Virtuelle & gebührenfreie Rufnummern in ${country}`,
          ],
        },
        {
          title: isGlobal ? "Messaging & SMS" : `Beste SMS-Dienste in ${country}`,
          description: isGlobal
            ? "Zuverlässige Zustellung geschäftskritischer Transaktions-SMS, OTP-Codes und interaktiver Business-Nachrichten direkt auf Mobiltelefone weltweit."
            : `Ultra-schnelle Transaktions-SMS, Verifizierungscodes unter 2 Sekunden und rechtskonforme Marketingnachrichten in ${country}.`,
          features: [
            isGlobal ? "OTP-Zustellung im Millisekundenbereich" : `Offizielle Sender-ID-Registrierung in ${country}`,
            isGlobal ? "Höchste Zustellgarantie" : "Garantierte OTP-Zustellung in < 2 Sek.",
            isGlobal ? "RCS Rich-Media-Messaging" : "Dynamisches Multi-Carrier-Routing",
          ],
        },
        {
          title: isGlobal ? "Omnichannel-Plattform" : `Omnichannel & WhatsApp API in ${country}`,
          description: isGlobal
            ? "Vereinen Sie Sprache, SMS, WhatsApp und Identitätsprüfung in einer entwicklerfreundlichen REST-API-Suite für sofortige Bereitstellung."
            : `Offizielle Meta WhatsApp Business API, RCS-Messaging und moderne Kundeninteraktion in ${country}.`,
          features: [
            isGlobal ? "Offizielle WhatsApp Business API" : "Offizielle WhatsApp Business API",
            isGlobal ? "Interaktive RCS-Nachrichten" : "Verifizierter Absender mit grünem Haken",
            isGlobal ? "Einheitliche REST-API-Suite" : "Zentrale Omnichannel REST-APIs",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "UNTERNEHMENSLÖSUNGEN" : `LÖSUNGEN FÜR ${country.toUpperCase()}`,
      title: isGlobal ? "Lösungen Für Die Gesamte Customer Journey" : `Maßgeschneiderte Lösungen Für ${country}`,
      description: isGlobal
        ? "Verbinden und begeistern Sie Kunden mit zuverlässigen Sprach-, Messaging- und Omnichannel-Lösungen."
        : `Leistungsstarker Kommunikations-Stack für Fintechs, E-Commerce und Marktführer in ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "OTP-Authentifizierung",
          tagline: "Sicher · Schnell · Zuverlässig",
          title: `Sofortige OTP-Verifizierung (${country})`,
          description: `Zustellung von Einmalpasswörtern in Sekundenschnelle für sichere Registrierungen, Logins und Zahlungsfreigaben in ${country}.`,
          features: [
            "Zuverlässige Zustellung in unter 2 Sekunden",
            "Multi-Carrier-Ausfallsicherheit mit WhatsApp-Fallback",
            `Optimierte Routen zu allen Mobilfunkbetreibern in ${country}`,
          ],
          customerStatus: "Identität Bestätigt",
          notification: {
            header: `iNet Sicherheit (${country})`,
            body: "Ihr Sicherheitscode lautet",
            bodyBold: "53193",
            validTime: "5 Minuten gültig. Nicht weitergeben.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Authentifizierung",
            title: "Mobilnummer Bestätigen",
            subtitle: `Wir haben einen 5-stelligen Bestätigungscode an Ihre Nummer in ${country} gesendet.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Bestätigen und Weiter",
            subNote: "Keinen Code erhalten?\nErneut senden in 00:45",
          },
        },
        {
          id: "banking",
          name: "Banking & Finanzen",
          tagline: "Sicher · Verbunden · DSGVO-Konform",
          title: `Bank- & Finanzdienstleistungen (${country})`,
          description: `Sichere Kundenkommunikation mit Echtzeit-Transaktions-SMS, Kontobenachrichtigungen und Zahlungsbestätigungen in ${country}.`,
          features: [
            "Verschlüsselte Sicherheitsleitungen nach Bankenstandard",
            "Echtzeit-Meldungen bei Abbuchungen und Gutschriften",
            "Hohe Durchsatzraten für Massen-Transaktions-SMS",
          ],
          customerStatus: "Transaktion Erfolgreich",
          notification: {
            header: "Bank-Transaktionsmitteilung",
            body: `Ihre Zahlung über ${currency}250.00 wurde erfolgreich ausgeführt.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Online-Banking",
            title: "Zahlung Erfolgreich",
            subtitle: `${currency}250.00 wurden sicher von Ihrem Konto verbucht.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Abgeschlossen",
              reference: "TXN-849201",
            },
            buttonText: "Kontoauszug Anzeigen",
            subNote: "✓ Über gesicherten Banken-Kanal übermittelt",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Erreichen · Begeistern · Konvertieren",
          title: `Zielgerichtete Marketing-Kampagnen (${country})`,
          description: `Erreichen Sie Konsumenten mit personalisierten SMS-Kampagnen für Sonderaktionen, saisonale Angebote und Produkteinführungen in ${country}.`,
          features: [
            "High-Volume-Versand für Millionen von Nachrichten",
            "Smarte Zielgruppensegmentierung und Zeitsteuerung",
            "Echtzeit-Klick-Tracking und Konversionsanalysen",
          ],
          customerStatus: "Angebot Zugestellt",
          notification: {
            header: "Exklusives Angebot",
            line1: "30% RABATT SICHERN",
            line2: `Exklusive Vorteile jetzt in ganz ${country} verfügbar.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Sonderangebote",
            badge: "Limitiertes Angebot",
            title: "Exklusiver Rabatt Für Sie",
            subtitle: "Sichern Sie sich 30% Rabatt auf Ihren nächsten Einkauf.\nGültig bis Monatsende.",
            buttonText: "Angebot Einlösen",
            subNote: `✓ An verifizierte Abonnenten in ${country} gesendet`,
          },
        },
        {
          id: "reminders",
          name: "Terminerinnerungen",
          tagline: "Pünktlich · Automatisiert · Zuverlässig",
          title: `Automatisierte Terminerinnerungen (${country})`,
          description: `Halten Sie Kunden mit automatisierten Erinnerungen an Arzttermine, Fälligkeiten und Vertragsverlängerungen in ${country} auf dem Laufenden.`,
          features: [
            "Automatisierte kanalübergreifende Terminhinweise",
            "Direkte Zahlungs- und Bestätigungslinks in der Nachricht",
            "Reduzierung von Terminausfällen und Zahlungsverzögerungen",
          ],
          customerStatus: "Erinnerung Zugestellt",
          notification: {
            header: "Terminerinnerung",
            line1: "Termin für Morgen Geplant",
            line2: "Bitte erscheinen Sie 10 Minuten vor Beginn.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Erinnerungen",
            title: "Ihr Termin ist Morgen",
            subtitle: "Ihr gebuchter Termin ist für 10:30 Uhr bestätigt.",
            infoCard: {
              label: "Standort / Zentrum",
              value: `Zentralzentrum ${country}`,
            },
            buttonText: "Teilnahme Bestätigen",
            subNote: "Antworten Sie mit 1 zum Bestätigen oder 2 zum Verschieben",
          },
        },
        {
          id: "emergency",
          name: "Notfallwarnungen",
          tagline: "Kritisch · Sofort · Immer Verbunden",
          title: `Notfall- & Katastrophenwarnungen (${country})`,
          description: `Verteilen Sie dringende Warnmeldungen sekundenschnell zur Sicherung der Bevölkerung und Aufrechterhaltung des Geschäftsbetriebs in ${country}.`,
          features: [
            "Prioritätsrouten unter Umgehung normaler Warteschlangen",
            "Geografische Zielgruppen-Warnungen bei Großlagen",
            "Kombinierte SMS- und Sprach-Alarmierungssysteme",
          ],
          customerStatus: "Warnmeldung Zugestellt",
          notification: {
            header: "Öffentliche Sicherheitswarnung",
            line1: "Dringende Unwetterwarnung",
            line2: "Bitte befolgen Sie die Anweisungen der lokalen Behörden.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Notfallwarnung",
            title: "Dringende Unwetterwarnung",
            subtitle: "Schwere Wetterbedingungen gemeldet. Bitte bleiben Sie im Gebäude und meiden Sie Gefahrenbereiche.",
            infoCard: {
              label: "Betroffene Region",
              value: country,
            },
            buttonText: "Schutzzonen Einsehen",
            subNote: "Offizielle Warnmeldung des Katastrophenschutzes",
          },
        },
        {
          id: "order",
          name: "Bestellstatus",
          tagline: "Informieren · Verfolgen · Liefern",
          title: `Echtzeit-Bestell- & Lieferbenachrichtigungen (${country})`,
          description: `Begleiten Sie Käufer während des gesamten Lieferprozesses mit Versandmeldungen, Live-Sendungsverfolgung und Übergabe-OTP in ${country}.`,
          features: [
            "Echtzeit-Updates zu Versand- und Bearbeitungsstatus",
            "Zustellhinweise mit Live-Kartenverfolgung des Fahrers",
            "Sichere Paketübergabe mit Verifizierungs-OTP",
          ],
          customerStatus: "In Zustellung",
          notification: {
            header: "Bestellstatus-Update",
            line1: "Bestellung #IN849201 Versandt",
            line2: `Ihr Paket wird heute in ${country} zugestellt.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Sendungsverfolgung",
            title: "Ihre Lieferung ist Unterwegs",
            subtitle: "Der Zusteller ist auf dem Weg zu Ihrer Adresse.",
            infoCard: {
              label: "Übergabe-OTP",
              value: "8492",
            },
            buttonText: "Live Auf Karte Verfolgen",
            subNote: "Kontaktlose Übergabe aktiviert",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "BRANCHENEXPERTISE" : `BRANCHENEXPERTISE - ${country.toUpperCase()}`,
      titleLine1: "Kommunikationslösungen Entwickelt",
      titleLine2: isGlobal ? "Für Jede Branche" : `Für Unternehmen in ${country}`,
      description: isGlobal
        ? "Verbinden und begeistern Sie Kunden mit zuverlässigen Sprach-, Messaging- und Omnichannel-Lösungen."
        : `Maßgeschneiderte Infrastruktur unter Einhaltung aller lokalen Regulierungen und Datenschutzstandards in ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Banking & Finanzen",
          title: `Banking & Fintech in ${country}`,
          description: `Hochsichere Transaktions-SMS, regulatorische Compliance und Echtzeit-Zahlungsüberprüfung für Finanzinstitute in ${country}.`,
        },
        {
          id: "healthcare",
          name: "Gesundheitswesen",
          title: `Kliniken & Praxen in ${country}`,
          description: `Patienten-Terminerinnerungen, digitale Rezepte und datenschutzkonforme Telemedizin-Kommunikation.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce & Handel",
          title: `E-Commerce & Handel in ${country}`,
          description: `Versandbenachrichtigungen, saisonale Sonderaktionen und kanalübergreifender Kundenservice.`,
        },
        {
          id: "education",
          name: "Bildungswesen",
          title: `Universitäten & Schulen in ${country}`,
          description: `Zulassungsbescheide, Campus-Warnmeldungen, Gebührenerinnerungen und Eltern-Kommunikationsplattformen.`,
        },
        {
          id: "travel",
          name: "Reise & Touristik",
          title: `Touristik & Hotellerie in ${country}`,
          description: `Flugzeitänderungen per SMS, Hotel-Check-in-Informationen und 24/7 Gästebetreuung weltweit.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "KONTAKTIEREN SIE UNS" : `KONTAKT IN ${country.toUpperCase()}`,
      titleLine1: "Lassen Sie Uns Die Richtige Verbindung",
      titleLine2: isGlobal ? "Aufbauen." : `In ${country} Aufbauen.`,
      description: isGlobal
        ? "Mit den iNet Global Services profitieren Unternehmen von erstklassigen Business-SMS- und Sprachlösungen zur Steigerung der Kundenbindung und Sicherheit."
        : `Setzen Sie auf iNet Global für direkte Betreiber-SMS, glasklare Sprachverbindungen und 100% Konformität in ${country}.`,
    },
    footer: {
      description: isGlobal
        ? "Globale Telekommunikations-Infrastruktur für Unternehmen mit höchsten Ansprüchen an Ausfallsicherheit bei Sprache, SMS und Omnichannel."
        : `Carrier-Grade-Telekommunikation für Sprache, SMS, virtuelle Rufnummern und Omnichannel-APIs in ${country} und weltweit.`,
      email: isGlobal ? "germany@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Internationales Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Finanzviertel,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Alle Rechte vorbehalten.`,
    },
  }),
};

// Generic localized content retriever for any region + any language
export const getLocalizedContent = (
  regionId: string = "global",
  languageId: string = "en"
): RegionContent => {
  const country = getFormattedCountryName(regionId);
  const isGlobal = !regionId || regionId === "global";

  // Select currency symbol
  let currency = "$";
  if (regionId === "india") currency = "₹";
  else if (regionId === "china" || regionId === "japan") currency = "¥";
  else if (regionId === "united-kingdom") currency = "£";
  else if (
    ["germany", "france", "spain", "italy", "netherlands"].includes(regionId)
  )
    currency = "€";
  else if (regionId === "united-arab-emirates") currency = "AED ";
  else if (regionId === "saudi-arabia") currency = "SAR ";

  const templateFn = languageTemplates[languageId] || languageTemplates["en"];
  return templateFn(country, isGlobal, currency);
};

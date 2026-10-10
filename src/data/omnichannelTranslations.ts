export interface OmnichannelTranslation {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  getStarted: string;
  contactUs: string;
  chatScreen: {
    contactName: string;
    status: string;
    msg1: string;
    time1: string;
    msg2: string;
    time2: string;
    typeMessage: string;
  };
  floatingBadges: {
    wholesale: { title: string; desc: string };
    telegram: { title: string; desc: string };
    facebook: { title: string; desc: string };
  };
  whyServiceBadge: string;
  whyServiceTitle: string;
  whyServiceSubtitle: string;
  channels: Array<{
    id: string;
    title: string;
    description: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    learnMore: string;
  }>;
  whyChooseBadge: string;
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  whyCards: {
    api: { title: string; description: string };
    secure: { title: string; description: string };
    cloud: { title: string; description: string };
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
}

const en: OmnichannelTranslation = {
  heroBadge: "OMNICHANNEL SERVICE",
  heroTitle: "Connect Every Customer Conversation Through One Platform",
  heroDesc:
    "iNET Global Services offers strong Omnichannel Communication Solutions which many online messaging routes into one platform plus API.",
  getStarted: "Get Started",
  contactUs: "Contact Us",
  chatScreen: {
    contactName: "iNet Global",
    status: "Active Omnichannel",
    msg1: "With iNet Global, your SMS, WhatsApp & Telegram routes stay unified.",
    time1: "10:24 AM",
    msg2: "Great! Thank you for the update!",
    time2: "10:25 AM",
    typeMessage: "Type a message...",
  },
  floatingBadges: {
    wholesale: {
      title: "Wholesale SMS",
      desc: "Customer conversations",
    },
    telegram: {
      title: "Telegram",
      desc: "Instant customer messaging",
    },
    facebook: {
      title: "Facebook",
      desc: "Customer engagement",
    },
  },
  whyServiceBadge: "WHY OUR SERVICE",
  whyServiceTitle: "Onmichannel Services that works for your business",
  whyServiceSubtitle:
    "Built for teams that need reach, delivery insight and control over their A2P traffic.",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "International voice termination with route options designed around quality, coverage and cost.",
      bullet1: "High- quality voice connections",
      bullet2: "Flexible route options",
      bullet3: "Global coverage",
      learnMore: "Learn more",
    },
    {
      id: "telegram",
      title: "Telegram",
      description:
        "Deliver critical transactional SMS, OTPs, and rich business messaging directly to handsets worldwide with high delivery assurance.",
      bullet1: "High- quality voice connections",
      bullet2: "Flexible route options",
      bullet3: "Global coverage",
      learnMore: "Learn more",
    },
    {
      id: "instagram",
      title: "Instagram",
      description:
        "Unify Voice, SMS, WhatsApp, and Verification into a single developer-friendly REST API suite designed for deployment.",
      bullet1: "High- quality voice connections",
      bullet2: "Flexible route options",
      bullet3: "Global coverage",
      learnMore: "Learn more",
    },
    {
      id: "facebook",
      title: "Facebook Messenger",
      description:
        "Engage with customers seamlessly on Facebook with conversational bots, rich media support, and automated responses.",
      bullet1: "High- quality voice connections",
      bullet2: "Flexible route options",
      bullet3: "Global coverage",
      learnMore: "Learn more",
    },
    {
      id: "rcs",
      title: "RCS & Viber",
      description:
        "High-conversion next-generation rich channels with verified sender badges, action chips, and interactive cards.",
      bullet1: "High- quality voice connections",
      bullet2: "Flexible route options",
      bullet3: "Global coverage",
      learnMore: "Learn more",
    },
  ],
  whyChooseBadge: "WHY OUR INET VOICE SOLUTION",
  whyChooseTitle: "Why Choose Our Omnichannel Communication Solutions",
  whyChooseSubtitle:
    "Built for clear connections, flexible routing, and reliable voice performance across global markets.",
  whyCards: {
    api: {
      title: "Voice API Integration",
      description:
        "As a trusted Voice API Provider, we help businesses integrate calling capabilities into websites, mobile apps, CRM systems, and customer service platforms.",
    },
    secure: {
      title: "Secure and Reliable Communication",
      description:
        "End-to-end encrypted messaging pathways engineered for enterprise compliance and 99.999% uptime.",
    },
    cloud: {
      title: "Cloud-Based Infrastructure",
      description:
        "Scalable elastic cloud fabric adapting to traffic spikes with zero delay and instant failover.",
    },
    connectivity: {
      title: "Global Omnichannel Connectivity",
      description:
        "Direct Tier-1 interconnects with 800+ mobile operators across 190+ countries worldwide.",
    },
    automated: {
      title: "Automated Workflow Routing",
      description:
        "Smart channel fallback logic to guarantee message receipt at optimal cost and highest delivery speed.",
    },
  },
  featuresBadge: "WHAT OUR SMS SERVICES PROVIDES",
  featuresTitle:
    "Connect Every Channel. Strengthen Every Customer Relationship.",
  featuresSubtitle:
    "Reliable messaging infrastructure built to help businesses send, manage, and monitor SMS at scale—with speed, security, and global reach.",
  features: [
    {
      title: "Smart Channel Routing",
      description:
        "Track delivery, performance, and messaging activity instantly.",
      subtext: "SIP credentials • IP authentication",
    },
    {
      title: "Workflow Automation",
      description:
        "Reach customers worldwide with reliable SMS delivery.",
      subtext: "Quality • Cost • Compliance",
    },
    {
      title: "Banking & Financial Services",
      description:
        "Send messages quickly with optimized global routes.",
      subtext: "Live analytics • 24/7 NOC",
    },
    {
      title: "Multi-Channel Communication",
      description:
        "Protect business communications with secure infrastructure.",
      subtext: "Quality • Cost • Compliance",
    },
    {
      title: "CRM Integration",
      description:
        "Connect customer data with your communication workflows.",
      subtext: "Live analytics • 24/7 NOC",
    },
  ],
  ctaBadge: "LET'S BUILD YOUR MESSAGING NETWORK",
  ctaTitle: "Grow Your Business with Business SMS Solutions",
  ctaSubtitle:
    "From intelligent voice routing and international termination to AI Voice and virtual numbers, iNet Global provides scalable communication solutions that help businesses connect with customers clearly, reliably, and efficiently across global markets.",
};

const es: OmnichannelTranslation = {
  heroBadge: "SERVICIO OMNICANAL",
  heroTitle: "Conecte Cada Conversación con Clientes en una Sola Plataforma",
  heroDesc:
    "iNET Global Services ofrece soluciones de comunicación omnicanal robustas que integran múltiples canales en una única plataforma y API.",
  getStarted: "Comenzar",
  contactUs: "Contáctenos",
  chatScreen: {
    contactName: "iNet Global",
    status: "Omnicanal Activo",
    msg1: "Con iNet Global, sus rutas de SMS, WhatsApp y Telegram se mantienen unificadas.",
    time1: "10:24",
    msg2: "¡Excelente! ¡Gracias por la actualización!",
    time2: "10:25",
    typeMessage: "Escribe un mensaje...",
  },
  floatingBadges: {
    wholesale: { title: "SMS Mayorista", desc: "Conversaciones con clientes" },
    telegram: { title: "Telegram", desc: "Mensajería instantánea" },
    facebook: { title: "Facebook", desc: "Interacción con clientes" },
  },
  whyServiceBadge: "POR QUÉ NUESTRO SERVICIO",
  whyServiceTitle: "Servicios omnicanal que funcionan para su negocio",
  whyServiceSubtitle:
    "Diseñado para equipos que necesitan alcance, visibilidad y control sobre su tráfico A2P.",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "Terminación internacional con opciones de enrutamiento diseñadas para máxima calidad, cobertura y costo.",
      bullet1: "Conexiones de voz de alta calidad",
      bullet2: "Opciones de ruta flexibles",
      bullet3: "Cobertura global",
      learnMore: "Saber más",
    },
    {
      id: "telegram",
      title: "Telegram",
      description:
        "Envíe SMS transaccionales críticos, OTPs y mensajería empresarial a nivel mundial con alta garantía de entrega.",
      bullet1: "Conexiones de voz de alta calidad",
      bullet2: "Opciones de ruta flexibles",
      bullet3: "Cobertura global",
      learnMore: "Saber más",
    },
    {
      id: "instagram",
      title: "Instagram",
      description:
        "Unifique Voz, SMS, WhatsApp y Verificación en una suite REST API fácil de integrar.",
      bullet1: "Conexiones de voz de alta calidad",
      bullet2: "Opciones de ruta flexibles",
      bullet3: "Cobertura global",
      learnMore: "Saber más",
    },
    {
      id: "facebook",
      title: "Facebook Messenger",
      description:
        "Interactúe con clientes en Facebook con bots conversacionales y soporte automatizado.",
      bullet1: "Conexiones de voz de alta calidad",
      bullet2: "Opciones de ruta flexibles",
      bullet3: "Cobertura global",
      learnMore: "Saber más",
    },
  ],
  whyChooseBadge: "POR QUÉ NUESTRA SOLUCIÓN OMNICANAL",
  whyChooseTitle: "Por Qué Elegir Nuestras Soluciones Omnicanal",
  whyChooseSubtitle:
    "Construido para conexiones nítidas, enrutamiento flexible y alto rendimiento.",
  whyCards: {
    api: {
      title: "Integración de API de Voz y Canales",
      description:
        "Como proveedor de confianza, ayudamos a empresas a integrar capacidades de mensajería y llamadas en aplicaciones y CRM.",
    },
    secure: {
      title: "Comunicación Segura y Confiable",
      description:
        "Canales encriptados de extremo a extremo diseñados para cumplimiento empresarial y 99.999% de disponibilidad.",
    },
    cloud: {
      title: "Infraestructura en la Nube",
      description:
        "Estructura elástica escalable que se adapta a picos de tráfico sin demoras.",
    },
    connectivity: {
      title: "Conectividad Omnicanal Global",
      description:
        "Interconexión Tier-1 con más de 800 operadores móviles en 190+ países.",
    },
    automated: {
      title: "Enrutamiento Automatizado",
      description:
        "Lógica inteligente de respaldo para garantizar la entrega al menor costo.",
    },
  },
  featuresBadge: "LO QUE OFRECEN NUESTROS SERVICIOS",
  featuresTitle:
    "Conecte Cada Canal. Fortalezca Cada Relación con el Cliente.",
  featuresSubtitle:
    "Infraestructura confiable para enviar, administrar y monitorear mensajes a escala.",
  features: [
    {
      title: "Enrutamiento Inteligente de Canales",
      description: "Monitoree entrega y rendimiento al instante.",
      subtext: "Credenciales SIP • Autenticación IP",
    },
    {
      title: "Automatización de Flujos",
      description: "Llegue a clientes con entrega de SMS confiable.",
      subtext: "Calidad • Costo • Cumplimiento",
    },
    {
      title: "Servicios Bancarios y Financieros",
      description: "Envíe mensajes rápidamente con rutas optimizadas.",
      subtext: "Análisis en vivo • NOC 24/7",
    },
    {
      title: "Comunicación Multicanal",
      description: "Proteja comunicaciones con infraestructura segura.",
      subtext: "Calidad • Costo • Cumplimiento",
    },
    {
      title: "Integración CRM",
      description: "Conecte datos de clientes a sus flujos de trabajo.",
      subtext: "Análisis en vivo • NOC 24/7",
    },
  ],
  ctaBadge: "CONSTRUYAMOS SU RED DE MENSAJERÍA",
  ctaTitle: "Haga Crecer su Negocio con Soluciones Omnicanal",
  ctaSubtitle:
    "Desde enrutamiento inteligente hasta IA y números virtuales, iNet Global ofrece soluciones escalables en mercados globales.",
};

const ja: OmnichannelTranslation = {
  heroBadge: "オムニチャネルサービス",
  heroTitle: "すべての顧客との対話を一つのプラットフォームに統合",
  heroDesc:
    "iNET Global Servicesは、複数のオンラインメッセージング経路を1つのプラットフォームとAPIに集約する強力なオムニチャネル通信ソリューションを提供します。",
  getStarted: "今すぐ始める",
  contactUs: "お問い合わせ",
  chatScreen: {
    contactName: "iNet Global",
    status: "アクティブなオムニチャネル",
    msg1: "iNet Globalなら、SMS、WhatsApp、Telegramのルートを一元管理できます。",
    time1: "10:24",
    msg2: "素晴らしい！アップデートをありがとうございます！",
    time2: "10:25",
    typeMessage: "メッセージを入力...",
  },
  floatingBadges: {
    wholesale: { title: "ホールセールSMS", desc: "顧客との対話" },
    telegram: { title: "Telegram", desc: "即時メッセージング" },
    facebook: { title: "Facebook", desc: "顧客エンゲージメント" },
  },
  whyServiceBadge: "サービスの特長",
  whyServiceTitle: "ビジネスに最適なオムニチャネルサービス",
  whyServiceSubtitle:
    "到達力、配信インサイト、A2Pトラフィック制御を必要とするチーム向けに設計されています。",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "品質、カバレッジ、コストを重視したルートオプションを備えた国際通信サービス。",
      bullet1: "高品質な音声およびメッセージ接続",
      bullet2: "柔軟なルーティングオプション",
      bullet3: "グローバルカバレッジ",
      learnMore: "詳細を見る",
    },
    {
      id: "telegram",
      title: "Telegram",
      description:
        "重要なトランザクションSMS、ワンタイムパスワード（OTP）、リッチメッセージを高配信保証で世界中の端末にお届けします。",
      bullet1: "高品質な音声およびメッセージ接続",
      bullet2: "柔軟なルーティングオプション",
      bullet3: "グローバルカバレッジ",
      learnMore: "詳細を見る",
    },
    {
      id: "instagram",
      title: "Instagram",
      description:
        "音声、SMS、WhatsApp、本人確認を開発者に優しいREST APIスイートに統合。",
      bullet1: "高品質な音声およびメッセージ接続",
      bullet2: "柔軟なルーティングオプション",
      bullet3: "グローバルカバレッジ",
      learnMore: "詳細を見る",
    },
    {
      id: "facebook",
      title: "Facebook Messenger",
      description:
        "自動化されたチャットボットとリッチメディアでFacebook上の顧客とスムーズに対話。",
      bullet1: "高品質な音声およびメッセージ接続",
      bullet2: "柔軟なルーティングオプション",
      bullet3: "グローバルカバレッジ",
      learnMore: "詳細を見る",
    },
  ],
  whyChooseBadge: "当社のオムニチャネルソリューションが選ばれる理由",
  whyChooseTitle: "当社のオムニチャネル通信ソリューションを選ぶ理由",
  whyChooseSubtitle:
    "世界中の市場で、クリアな接続、柔軟なルーティング、信頼性の高いパフォーマンスを実現します。",
  whyCards: {
    api: {
      title: "音声・チャネルAPI統合",
      description:
        "信頼できるプロバイダーとして、ウェブサイト、アプリ、CRMにシームレスな通信機能を統合します。",
    },
    secure: {
      title: "安全で信頼性の高い通信",
      description:
        "エンタープライズ要件を満たすエンドツーエンド暗号化と99.999%の稼働率。",
    },
    cloud: {
      title: "クラウドベースのインフラストラクチャ",
      description:
        "トラフィックの急増に遅延なく即座に対応するスケーラブルなクラウド基盤。",
    },
    connectivity: {
      title: "グローバルオムニチャネル接続",
      description:
        "世界190以上の国で800以上の通信キャリアとTier-1直接相互接続。",
    },
    automated: {
      title: "自動化ワークフロールーティング",
      description:
        "最適コストと最高速度でメッセージ到達を保証するスマートフォールバック。",
    },
  },
  featuresBadge: "サービスが提供する価値",
  featuresTitle: "すべてのチャネルを繋ぎ、顧客との絆を強化",
  featuresSubtitle:
    "グローバルなスピードとセキュリティを備え、大規模なメッセージングを支援する信頼の基盤。",
  features: [
    {
      title: "スマートチャネルルーティング",
      description: "配信状況、パフォーマンス、アクティビティを即座に追跡。",
      subtext: "SIP認証 • IP認証",
    },
    {
      title: "ワークフロー自動化",
      description: "信頼性の高いSMS配信で世界中の顧客へリーチ。",
      subtext: "品質 • コスト • コンプライアンス",
    },
    {
      title: "銀行・金融サービス",
      description: "最適化されたグローバルルートで迅速にメッセージを送信。",
      subtext: "ライブ分析 • 24時間年中無休NOC",
    },
    {
      title: "マルチチャネルコミュニケーション",
      description: "堅牢で安全なインフラでビジネス通信を保護。",
      subtext: "品質 • コスト • コンプライアンス",
    },
    {
      title: "CRM統合",
      description: "顧客データを通信ワークフローに直接連携。",
      subtext: "ライブ分析 • 24時間年中無休NOC",
    },
  ],
  ctaBadge: "メッセージングネットワークを構築しましょう",
  ctaTitle: "オムニチャネルソリューションでビジネスを成長",
  ctaSubtitle:
    "インテリジェントルーティングからAI、仮想番号まで、iNet Globalは世界中で確かな通信ソリューションを提供します。",
};

const te: OmnichannelTranslation = {
  heroBadge: "ఓమ్నిఛానల్ సర్వీస్",
  heroTitle: "ఒకే ప్లాట్‌ఫారమ్ ద్వారా ప్రతి కస్టమర్ సంభాషణను అనుసంధానించండి",
  heroDesc:
    "iNET Global Services బలమైన ఓమ్నిఛానల్ కమ్యూనికేషన్ సొల్యూషన్స్‌ను అందిస్తుంది, ఇది అనేక ఆన్‌లైన్ మెసేజింగ్ మార్గాలను ఒకే ప్లాట్‌ఫారమ్ మరియు API లోకి కలుపుతుంది.",
  getStarted: "ప్రారంభించండి",
  contactUs: "మమ్మల్ని సంప్రదించండి",
  chatScreen: {
    contactName: "iNet Global",
    status: "యాక్టివ్ ఓమ్నిఛానల్",
    msg1: "iNet Global తో మీ SMS, WhatsApp మరియు Telegram మార్గాలు ఏకీకృతంగా ఉంటాయి.",
    time1: "10:24 AM",
    msg2: "చాలా బాగుంది! సమాచారం అందించినందుకు ధన్యవాదాలు!",
    time2: "10:25 AM",
    typeMessage: "సందేశాన్ని టైప్ చేయండి...",
  },
  floatingBadges: {
    wholesale: { title: "హోల్‌సేల్ SMS", desc: "కస్టమర్ సంభాషణలు" },
    telegram: { title: "టెలిగ్రామ్", desc: "తక్షణ కస్టమర్ మెసేజింగ్" },
    facebook: { title: "ఫేస్‌బుక్", desc: "కస్టమర్ ఎంగేజ్‌మెంట్" },
  },
  whyServiceBadge: "మా సేవను ఎందుకు ఎంచుకోవాలి",
  whyServiceTitle: "మీ వ్యాపారం కోసం పనిచేసే ఓమ్నిఛానల్ సేవలు",
  whyServiceSubtitle:
    "రీచ్, డెలివరీ అంతర్దృష్టులు మరియు A2P ట్రాఫిక్‌పై నియంత్రణ అవసరమైన బృందాల కోసం నిర్మించబడింది.",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp బిజినెస్",
      description:
        "నాణ్యత, కవరేజ్ మరియు ఖర్చు చుట్టూ రూపొందించబడిన రూట్ ఎంపికలతో అంతర్జాతీయ కమ్యూనికేషన్.",
      bullet1: "అధిక-నాణ్యత కనెక్షన్లు",
      bullet2: "ఫ్లెక్సిబుల్ రూట్ ఎంపికలు",
      bullet3: "ప్రపంచవ్యాప్త కవరేజ్",
      learnMore: "మరింత తెలుసుకోండి",
    },
    {
      id: "telegram",
      title: "టెలిగ్రామ్",
      description:
        "అత్యున్నత డెలివరీ హామీతో ప్రపంచవ్యాప్తంగా హ్యాండ్‌సెట్‌లకు ట్రాన్సాక్షనల్ SMS, OTPలు మరియు రిచ్ బిజినెస్ మెసేజింగ్ పంపండి.",
      bullet1: "అధిక-నాణ్యత కనెక్షన్లు",
      bullet2: "ఫ్లెక్సిబుల్ రూట్ ఎంపికలు",
      bullet3: "ప్రపంచవ్యాప్త కవరేజ్",
      learnMore: "మరింత తెలుసుకోండి",
    },
    {
      id: "instagram",
      title: "ఇన్‌స్టాగ్రామ్",
      description:
        "వాయిస్, SMS, WhatsApp మరియు ధృవీకరణను ఒకే డెవలపర్-ఫ్రెండ్లీ REST API సూట్‌గా ఏకీకృతం చేయండి.",
      bullet1: "అధిక-నాణ్యత కనెక్షన్లు",
      bullet2: "ఫ్లెక్సిబుల్ రూట్ ఎంపికలు",
      bullet3: "ప్రపంచవ్యాప్త కవరేజ్",
      learnMore: "మరింత తెలుసుకోండి",
    },
  ],
  whyChooseBadge: "మా ఓమ్నిఛానల్ పరిష్కారాన్ని ఎందుకు ఎంచుకోవాలి",
  whyChooseTitle: "మా ఓమ్నిఛానల్ కమ్యూనికేషన్ పరిష్కారాలను ఎందుకు ఎంచుకోవాలి",
  whyChooseSubtitle:
    "స్పష్టమైన కనెక్షన్‌లు, సౌకర్యవంతమైన రూటింగ్ మరియు విశ్వసనీయ పనితీరు కోసం నిర్మించబడింది.",
  whyCards: {
    api: {
      title: "వాయిస్ & ఛానల్ API ఇంటిగ్రేషన్",
      description:
        "విశ్వసనీయ ప్రొవైడర్‌గా, వెబ్‌సైట్‌లు, మొబైల్ యాప్‌లు మరియు CRMలలో కాలింగ్ మరియు మెసేజింగ్ సామర్థ్యాలను అనుసంధానించడంలో సహాయం చేస్తాము.",
    },
    secure: {
      title: "సురక్షితమైన మరియు విశ్వసనీయ కమ్యూనికేషన్",
      description: "ఎంటర్‌ప్రైజ్ సమ్మతి మరియు 99.999% అప్‌టైమ్ కోసం రూపొందించబడింది.",
    },
    cloud: {
      title: "క్లౌడ్ ఆధారిత మౌలిక సదుపాయాలు",
      description: "ఎటువంటి ఆలస్యం లేకుండా ట్రాఫిక్ డిమాండ్‌కు అనుగుణంగా స్కేల్ అవుతుంది.",
    },
    connectivity: {
      title: "గ్లోబల్ ఓమ్నిఛానల్ కనెక్టివిటీ",
      description: "190+ దేశాలలో 800+ మొబైల్ ఆపరేటర్లతో డైరెక్ట్ టైర్-1 ఇంటర్‌కనెక్ట్స్.",
    },
    automated: {
      title: "ఆటోమేటెడ్ వర్క్‌ఫ్లో రూటింగ్",
      description: "సరైన ఖర్చు మరియు అత్యధిక వేగంతో సందేశం చేరేలా స్మార్ట్ రూటింగ్.",
    },
  },
  featuresBadge: "మా సేవలు అందించే ఫీచర్లు",
  featuresTitle: "ప్రతి ఛానల్‌ను కనెక్ట్ చేయండి. ప్రతి కస్టమర్ సంబంధాన్ని బలోపేతం చేయండి.",
  featuresSubtitle:
    "వేగం, భద్రత మరియు ప్రపంచవ్యాప్త రీచ్‌తో పెద్ద ఎత్తున మెసేజింగ్ నిర్వహించడానికి నమ్మకమైన మౌలిక సదుపాయాలు.",
  features: [
    {
      title: "స్మార్ట్ ఛానల్ రూటింగ్",
      description: "డెలివరీ, పనితీరు మరియు కార్యాచరణను తక్షణమే ట్రాక్ చేయండి.",
      subtext: "SIP ఆధారాలు • IP ప్రామాణీకరణ",
    },
    {
      title: "వర్క్‌ఫ్లో ఆటోమేషన్",
      description: "విశ్వసనీయ SMS డెలివరీతో ప్రపంచవ్యాప్త కస్టమర్‌లను చేరుకోండి.",
      subtext: "నాణ్యత • ఖర్చు • సమ్మతి",
    },
    {
      title: "బ్యాంకింగ్ & ఫైనాన్షియల్ సర్వీసెస్",
      description: "ఆప్టిమైజ్ చేసిన మార్గాలతో సందేశాలను వేగంగా పంపండి.",
      subtext: "లైవ్ విశ్లేషణలు • 24/7 NOC",
    },
    {
      title: "మల్టీ-ఛానల్ కమ్యూనికేషన్",
      description: "సురక్షితమైన మౌలిక సదుపాయాలతో వ్యాపార కమ్యూనికేషన్‌ను రక్షించండి.",
      subtext: "నాణ్యత • ఖర్చు • సమ్మతి",
    },
    {
      title: "CRM ఇంటిగ్రేషన్",
      description: "కస్టమర్ డేటాను మీ కమ్యూనికేషన్ వర్క్‌ఫ్లోలకు కనెక్ట్ చేయండి.",
      subtext: "లైవ్ విశ్లేషణలు • 24/7 NOC",
    },
  ],
  ctaBadge: "మీ మెసేజింగ్ నెట్‌వర్క్‌ను రూపొందించుకోండి",
  ctaTitle: "బిజినెస్ సొల్యూషన్స్‌తో మీ వ్యాపారాన్ని వృద్ధి చేసుకోండి",
  ctaSubtitle:
    "ఇంటెలిజెంట్ వాయిస్ రూటింగ్ నుండి AI మరియు వర్చువల్ నంబర్ల వరకు, iNet Global విశ్వసనీయ కమ్యూనికేషన్ పరిష్కారాలను అందిస్తుంది.",
};

const ta: OmnichannelTranslation = {
  heroBadge: "ஆம்னிசேனல் சேவை",
  heroTitle: "ஒரே தளத்தின் மூலம் அனைத்து வாடிக்கையாளர் உரையாடல்களையும் இணைக்கவும்",
  heroDesc:
    "iNET Global Services பல ஆன்லைன் செய்தி சேனல்களை ஒரே தளம் மற்றும் API இல் இணைக்கும் சக்திவாய்ந்த ஆம்னிசேனல் தகவல் தொடர்பு தீர்வுகளை வழங்குகிறது.",
  getStarted: "தொடங்குங்கள்",
  contactUs: "எங்களைத் தொடர்பு கொள்ளவும்",
  chatScreen: {
    contactName: "iNet Global",
    status: "செயலில் உள்ள ஆம்னிசேனல்",
    msg1: "iNet Global மூலம் உங்கள் SMS, WhatsApp மற்றும் Telegram வழிகள் ஒருங்கிணைக்கப்பட்டுள்ளன.",
    time1: "10:24 AM",
    msg2: "அற்புதம்! புதுப்பித்தலுக்கு நன்றி!",
    time2: "10:25 AM",
    typeMessage: "ஒரு செய்தியை தட்டச்சு செய்க...",
  },
  floatingBadges: {
    wholesale: { title: "மொத்த SMS", desc: "வாடிக்கையாளர் உரையாடல்கள்" },
    telegram: { title: "டெலிகிராம்", desc: "உடனடி வாடிக்கையாளர் செய்தி" },
    facebook: { title: "பேஸ்புக்", desc: "வாடிக்கையாளர் ஈடுபாடு" },
  },
  whyServiceBadge: "எங்கள் சேவையை ஏன் தேர்வு செய்ய வேண்டும்",
  whyServiceTitle: "உங்கள் வணிகத்திற்கான ஆம்னிசேனல் சேவைகள்",
  whyServiceSubtitle:
    "அணிகளுக்குத் தேவையான வேகம், விநியோகத் துல்லியம் மற்றும் A2P டிராஃபிக் கட்டுப்பாடு ஆகியவற்றை வழங்குகிறது.",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "தரம், கவரேஜ் மற்றும் செலவு ஆகியவற்றின் அடிப்படையில் வடிவமைக்கப்பட்ட சர்வதேச இணைப்பு விருப்பங்கள்.",
      bullet1: "உயர்தர இணைப்புகள்",
      bullet2: "நெகிழ்வான பாதை விருப்பங்கள்",
      bullet3: "உலகளாவிய கவரேஜ்",
      learnMore: "மேலும் அறிக",
    },
    {
      id: "telegram",
      title: "டெலிகிராம்",
      description:
        "உயர் விநியோக உத்தரவாதத்துடன் உலகெங்கிலும் உள்ள கைபேசிகளுக்கு முக்கியமான SMS, OTPகள் மற்றும் வணிக செய்திகளை அனுப்பவும்.",
      bullet1: "உயர்தர இணைப்புகள்",
      bullet2: "நெகிழ்வான பாதை விருப்பங்கள்",
      bullet3: "உலகளாவிய கவரேஜ்",
      learnMore: "மேலும் அறிக",
    },
    {
      id: "instagram",
      title: "இன்ஸ்டாகிராம்",
      description:
        "குரல், SMS, WhatsApp மற்றும் சரிபார்ப்பை டெவலப்பர்களுக்கு ஏற்ற REST API தொகுப்பாக இணைக்கவும்.",
      bullet1: "உயர்தர இணைப்புகள்",
      bullet2: "நெகிழ்வான பாதை விருப்பங்கள்",
      bullet3: "உலகளாவிய கவரேஜ்",
      learnMore: "மேலும் அறிக",
    },
  ],
  whyChooseBadge: "எங்கள் ஆம்னிசேனல் தீர்வை ஏன் தேர்வு செய்ய வேண்டும்",
  whyChooseTitle: "எங்கள் ஆம்னிசேனல் தொடர்பு தீர்வுகளை ஏன் தேர்வு செய்ய வேண்டும்",
  whyChooseSubtitle:
    "தெளிவான இணைப்புகள், நெகிழ்வான ரூட்டிங் மற்றும் நம்பகமான செயல்திறனுக்காக உருவாக்கப்பட்டது.",
  whyCards: {
    api: {
      title: "குரல் & சேனல் API ஒருங்கிணைப்பு",
      description:
        "நம்பகமான வழங்குநராக, இணையதளங்கள், பயன்பாடுகள் மற்றும் CRMகளில் தகவல் தொடர்பு திறன்களை இணைக்க உதவுகிறோம்.",
    },
    secure: {
      title: "பாதுகாப்பான மற்றும் நம்பகமான தொடர்பு",
      description: "நிறுவன இணக்கம் மற்றும் 99.999% இயக்க நேரத்திற்காக வடிவமைக்கப்பட்டுள்ளது.",
    },
    cloud: {
      title: "கிளவுட் அடிப்படையிலான கட்டமைப்பு",
      description: "போக்குவரத்து தேவைகளுக்கு ஏற்ப எந்த தாமதமும் இன்றி தானாக செயல்படும் கிளவுட் கட்டமைப்பு.",
    },
    connectivity: {
      title: "உலகளாவிய ஆம்னிசேனல் இணைப்பு",
      description: "190+ நாடுகளில் 800+ மொபைல் ஆபரேட்டர்களுடன் நேரடி இணைப்பு.",
    },
    automated: {
      title: "தானியங்கி பணிப்பாய்வு ரூட்டிங்",
      description: "குறைந்த செலவில் மற்றும் அதிக வேகத்தில் செய்திகள் சென்றடைவதை உறுதி செய்யும் ஸ்மார்ட் ரூட்டிங்.",
    },
  },
  featuresBadge: "எங்கள் சேவைகள் வழங்குவது",
  featuresTitle: "ஒவ்வொரு சேனலையும் இணைக்கவும். வாடிக்கையாளர் உறவை வலுப்படுத்தவும்.",
  featuresSubtitle:
    "வேகம், பாதுகாப்பு மற்றும் உலகளாவிய கவரேஜுடன் பெரிய அளவில் செய்திகளை அனுப்ப உதவும் நம்பகமான கட்டமைப்பு.",
  features: [
    {
      title: "ஸ்மார்ட் சேனல் ரூட்டிங்",
      description: "விநியோகம் மற்றும் செயல்திறனை உடனடியாகக் கண்காணிக்கவும்.",
      subtext: "SIP நற்சான்றிதழ்கள் • IP அங்கீகாரம்",
    },
    {
      title: "பணிப்பாய்வு தானியங்குமயமாக்கல்",
      description: "நம்பகமான SMS விநியோகத்துடன் வாடிக்கையாளர்களை அடையுங்கள்.",
      subtext: "தரம் • செலவு • இணக்கம்",
    },
    {
      title: "வங்கி & நிதிச் சேவைகள்",
      description: "மேம்படுத்தப்பட்ட வழிகள் மூலம் செய்திகளை விரைவாக அனுப்பவும்.",
      subtext: "நேரடி பகுப்பாய்வு • 24/7 NOC",
    },
    {
      title: "மல்டி-சேனல் தொடர்பு",
      description: "பாதுகாப்பான கட்டமைப்புடன் வணிக தகவல்தொடர்புகளைப் பாதுகாக்கவும்.",
      subtext: "தரம் • செலவு • இணக்கம்",
    },
    {
      title: "CRM ஒருங்கிணைப்பு",
      description: "வாடிக்கையாளர் தரவை உங்கள் பணிப்பாய்வுகளுடன் இணைக்கவும்.",
      subtext: "நேரடி பகுப்பாய்வு • 24/7 NOC",
    },
  ],
  ctaBadge: "உங்கள் செய்தி நெட்வொர்க்கை உருவாக்குங்கள்",
  ctaTitle: "ஆம்னிசேனல் தீர்வுகள் மூலம் உங்கள் வணிகத்தை வளர்க்கவும்",
  ctaSubtitle:
    "நுண்ணறிவு ரூட்டிங் முதல் AI மற்றும் மெய்நிகர் எண்கள் வரை, iNet Global நம்பகமான தீர்வுகளை வழங்குகிறது.",
};

const ar: OmnichannelTranslation = {
  heroBadge: "خدمة قنوات الاتصال الموحدة",
  heroTitle: "اربط جميع محادثات العملاء عبر منصة واحدة",
  heroDesc:
    "تقدم iNET Global Services حلول اتصالات شاملة وقوية تدمج العديد من مسارات الرسائل في منصة واحدة وواجهة برمجة تطبيقات (API).",
  getStarted: "ابدأ الآن",
  contactUs: "اتصل بنا",
  chatScreen: {
    contactName: "iNet Global",
    status: "قنوات متعددة نشطة",
    msg1: "مع iNet Global، تظل مسارات SMS و WhatsApp و Telegram موحدة.",
    time1: "10:24 ص",
    msg2: "رائع! شكراً جزيلاً على التحديث!",
    time2: "10:25 ص",
    typeMessage: "اكتب رسالة...",
  },
  floatingBadges: {
    wholesale: { title: "رسائل SMS بالجملة", desc: "محادثات العملاء" },
    telegram: { title: "تيليجرام", desc: "رسائل فورية للعملاء" },
    facebook: { title: "فيسبوك", desc: "تفاعل وتواصل مباشر" },
  },
  whyServiceBadge: "لماذا تختار خدماتنا",
  whyServiceTitle: "خدمات قنوات متعددة مصممة خصيصاً لأعمالك",
  whyServiceSubtitle:
    "مبنية للفرق التي تحتاج إلى وصول واسع وتحكم فائق ورؤية دقيقة لحركة مرور A2P.",
  channels: [
    {
      id: "whatsapp",
      title: "واتساب للأعمال (WhatsApp)",
      description:
        "خيارات إنهاء دولية مصممة بأعلى معايير الجودة والتغطية والتكلفة التنافسية.",
      bullet1: "اتصالات عالية الجودة",
      bullet2: "خيارات توجيه مرنة",
      bullet3: "تغطية عالمية واسعة",
      learnMore: "اعرف المزيد",
    },
    {
      id: "telegram",
      title: "تيليجرام (Telegram)",
      description:
        "تسليم رسائل المعاملات الحساسة و OTP والرسائل الغنية مباشرة للهواتف في جميع أنحاء العالم.",
      bullet1: "اتصالات عالية الجودة",
      bullet2: "خيارات توجيه مرنة",
      bullet3: "تغطية عالمية واسعة",
      learnMore: "اعرف المزيد",
    },
    {
      id: "instagram",
      title: "إنستغرام (Instagram)",
      description:
        "توحيد الصوت والرسائل النصية وواتساب والتحقق في واجهة REST API سهلة الاستخدام للمطورين.",
      bullet1: "اتصالات عالية الجودة",
      bullet2: "خيارات توجيه مرنة",
      bullet3: "تغطية عالمية واسعة",
      learnMore: "اعرف المزيد",
    },
  ],
  whyChooseBadge: "لماذا تختار حلولنا الموحدة",
  whyChooseTitle: "لماذا تختار حلول الاتصالات الموحدة الشاملة لدينا",
  whyChooseSubtitle:
    "مبنية لتوفير اتصالات نقية وتوجيه ذكي وأداء فائق الموثوقية عبر الأسواق العالمية.",
  whyCards: {
    api: {
      title: "تكامل واجهات برمجة التطبيقات (API)",
      description:
        "بصفتنا مزود اتصالات موثوق، نساعد الشركات على دمج إمكانات المراسلة والمكالمات في التطبيقات و CRM.",
    },
    secure: {
      title: "اتصال آمن وموثوق",
      description:
        "مسارات مشفرة بالكامل مصممة للامتثال المؤسسي ونسبة تشغيل 99.999%.",
    },
    cloud: {
      title: "بنية تحتية سحابية متطورة",
      description:
        "بنية سحابية مرنة تتكيف مع ارتفاع حركة المرور دون أي تأخير.",
    },
    connectivity: {
      title: "اتصال عالمي واسع النطاق",
      description:
        "ربط مباشر من المستوى الأول (Tier-1) مع أكثر من 800 مشغل شبكة في 190+ دولة.",
    },
    automated: {
      title: "توجيه آلي ذكي لسير العمل",
      description:
        "منطق احتياطي ذكي لضمان استلام الرسائل بأفضل تكلفة وأعلى سرعة تسليم.",
    },
  },
  featuresBadge: "ما تقدمه خدماتنا",
  featuresTitle: "اربط كل قناة. عزز كل علاقة مع عملائك.",
  featuresSubtitle:
    "بنية تحتية موثوقة لمساعدة الشركات على إرسال وإدارة ومراقبة الرسائل بأمان وسرعة فائقة.",
  features: [
    {
      title: "توجيه ذكي للقنوات",
      description: "تتبع التسليم والأداء ونشاط الرسائل بشكل فوري.",
      subtext: "بيانات اعتماد SIP • مصادقة IP",
    },
    {
      title: "أتمتة سير العمل",
      description: "الوصول إلى العملاء في جميع أنحاء العالم بتسليم موثوق.",
      subtext: "الجودة • التكلفة • الامتثال",
    },
    {
      title: "الخدمات المصرفية والمالية",
      description: "إرسال الرسائل بسرعة مع مسارات عالمية محسّنة.",
      subtext: "تحليلات مباشرة • مركز عمليات NOC 24/7",
    },
    {
      title: "اتصالات متعددة القنوات",
      description: "حماية الاتصالات المؤسسية ببنية تحتية فائقة الأمان.",
      subtext: "الجودة • التكلفة • الامتثال",
    },
    {
      title: "تكامل CRM",
      description: "ربط بيانات العملاء بسير عمل الاتصالات الخاص بك.",
      subtext: "تحليلات مباشرة • مركز عمليات NOC 24/7",
    },
  ],
  ctaBadge: "دعنا نبني شبكة المراسلة الخاصة بك",
  ctaTitle: "نمّ أعمالك مع حلول الرسائل والاتصالات الموحدة",
  ctaSubtitle:
    "من التوجيه الذكي إلى الذكاء الاصطناعي والأرقام الافتراضية، تقدم iNet Global حلولاً قابلة للتوسع عالمياً.",
};

const zh: OmnichannelTranslation = {
  heroBadge: "全渠道通信服务",
  heroTitle: "通过统一平台连接每一次客户对话",
  heroDesc:
    "iNET Global Services 提供强大的全渠道通信解决方案，将多条在线消息传递路线整合至单一平台与 API 中。",
  getStarted: "立即体验",
  contactUs: "联系我们",
  chatScreen: {
    contactName: "iNet Global",
    status: "全渠道已激活",
    msg1: "借助 iNet Global，您的短信、WhatsApp 与 Telegram 路由实现完全统一。",
    time1: "10:24",
    msg2: "太棒了！非常感谢您的及时更新！",
    time2: "10:25",
    typeMessage: "输入消息...",
  },
  floatingBadges: {
    wholesale: { title: "批发短信", desc: "客户顺畅沟通" },
    telegram: { title: "Telegram", desc: "即时客户互动" },
    facebook: { title: "Facebook", desc: "社交触达与互动" },
  },
  whyServiceBadge: "为什么选择我们的服务",
  whyServiceTitle: "专为企业打造的高效全渠道服务",
  whyServiceSubtitle:
    "专为需要全球覆盖、交付洞察和全面掌控 A2P 流量的团队量身定制。",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp 商业版",
      description:
        "围绕高质量、高覆盖率与高性价比设计的国际通信路由选择。",
      bullet1: "高品质连接",
      bullet2: "灵活的路由选项",
      bullet3: "全球覆盖",
      learnMore: "了解更多",
    },
    {
      id: "telegram",
      title: "Telegram",
      description:
        "以极高的送达率向全球设备发送关键交易短信、OTP 验证码与富媒体商业消息。",
      bullet1: "高品质连接",
      bullet2: "灵活的路由选项",
      bullet3: "全球覆盖",
      learnMore: "了解更多",
    },
    {
      id: "instagram",
      title: "Instagram",
      description:
        "将语音、短信、WhatsApp 和身份验证统一至对开发者友好的 REST API 套件中。",
      bullet1: "高品质连接",
      bullet2: "灵活的路由选项",
      bullet3: "全球覆盖",
      learnMore: "了解更多",
    },
  ],
  whyChooseBadge: "为什么选择全渠道通信解决方案",
  whyChooseTitle: "选择我们全渠道通信解决方案的理由",
  whyChooseSubtitle:
    "专为全球市场中清晰的连接、灵活的路由和可靠的通信性能而构建。",
  whyCards: {
    api: {
      title: "语音与全渠道 API 集成",
      description:
        "作为值得信赖的服务商，我们帮助企业将通话和消息传递功能无缝集成到网站、应用与 CRM 中。",
    },
    secure: {
      title: "安全可靠的企业通信",
      description: "端到端加密通道，专为满足企业合规性和 99.999% 的可用性而设计。",
    },
    cloud: {
      title: "云原生弹性基础设施",
      description: "可根据流量峰值实时自动伸缩的云网络架构，零延迟且支持即时故障转移。",
    },
    connectivity: {
      title: "全球全渠道互联互通",
      description: "与全球 190 多个国家的 800 多家主流移动运营商建立 Tier-1 直连互联。",
    },
    automated: {
      title: "自动化工作流路由",
      description: "智能多通道降级逻辑，以最优成本和最高送达速度确保消息成功送达。",
    },
  },
  featuresBadge: "我们的全渠道服务提供",
  featuresTitle: "连接每一个渠道，巩固每一段客户关系",
  featuresSubtitle:
    "可靠的消息传递基础设施，助力企业以高速、安全和全球化的能力大规模管理消息。",
  features: [
    {
      title: "智能渠道路由",
      description: "实时追踪交付状态、性能表现与通信活动。",
      subtext: "SIP 凭据 • IP 鉴权",
    },
    {
      title: "工作流自动化",
      description: "通过高可靠性的消息交付触达全球客户。",
      subtext: "质量 • 成本 • 合规",
    },
    {
      title: "银行与金融服务",
      description: "利用全球优化路由快速安全地分发关键消息。",
      subtext: "实时分析 • 24/7 NOC 监控",
    },
    {
      title: "多渠道统一通信",
      description: "借助高安全性基础设施保护企业关键通信资产。",
      subtext: "质量 • 成本 • 合规",
    },
    {
      title: "CRM 深度集成",
      description: "将客户数据无缝接入现有通信工作流中。",
      subtext: "实时分析 • 24/7 NOC 监控",
    },
  ],
  ctaBadge: "构建您的专属通信网络",
  ctaTitle: "借助全渠道解决方案加速企业业务增长",
  ctaSubtitle:
    "从智能路由到 AI 语音与虚拟号码，iNet Global 提供全球领先的通信解决方案。",
};

const hi: OmnichannelTranslation = {
  heroBadge: "ओम्नीचैनल सेवा",
  heroTitle: "एक ही प्लेटफॉर्म से हर ग्राहक संवाद को जोड़ें",
  heroDesc:
    "iNET Global Services मजबूत ओम्नीचैनल संचार समाधान प्रदान करता है जो कई ऑनलाइन मैसेजिंग मार्गों को एक ही प्लेटफॉर्म और API में एकीकृत करता है।",
  getStarted: "शुरू करें",
  contactUs: "संपर्क करें",
  chatScreen: {
    contactName: "iNet Global",
    status: "सक्रिय ओम्नीचैनल",
    msg1: "iNet Global के साथ आपके SMS, WhatsApp और Telegram रूट्स पूरी तरह एकीकृत रहते हैं।",
    time1: "10:24 AM",
    msg2: "शानदार! इस महत्वपूर्ण अपडेट के लिए धन्यवाद!",
    time2: "10:25 AM",
    typeMessage: "संदेश लिखें...",
  },
  floatingBadges: {
    wholesale: { title: "थोक SMS", desc: "ग्राहक संवाद" },
    telegram: { title: "Telegram", desc: "त्वरित मैसेजिंग" },
    facebook: { title: "Facebook", desc: "ग्राहक सहभागिता" },
  },
  whyServiceBadge: "हमारी सेवा क्यों चुनें",
  whyServiceTitle: "ओम्नीचैनल सेवाएं जो आपके व्यवसाय के लिए काम करती हैं",
  whyServiceSubtitle:
    "उन टीमों के लिए निर्मित जिन्हें अपनी A2P ट्रैफिक पर व्यापक पहुंच, डिलीवरी इनसाइट और पूर्ण नियंत्रण की आवश्यकता है।",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "गुणवत्ता, कवरेज और लागत को ध्यान में रखकर तैयार किए गए रूट विकल्पों के साथ अंतर्राष्ट्रीय संचार।",
      bullet1: "उच्च गुणवत्ता वाले कनेक्शन",
      bullet2: "लचीले रूट विकल्प",
      bullet3: "वैश्विक कवरेज",
      learnMore: "और जानें",
    },
    {
      id: "telegram",
      title: "Telegram",
      description:
        "उच्च डिलीवरी आश्वासन के साथ दुनिया भर के हैंडसेटों पर महत्वपूर्ण लेनदेन संबंधी SMS, OTP और व्यावसायिक संदेश भेजें।",
      bullet1: "उच्च गुणवत्ता वाले कनेक्शन",
      bullet2: "लचीले रूट विकल्प",
      bullet3: "वैश्विक कवरेज",
      learnMore: "और जानें",
    },
    {
      id: "instagram",
      title: "Instagram",
      description:
        "वॉयस, SMS, WhatsApp और सत्यापन को डेवलपर-अनुकूल REST API में एकीकृत करें।",
      bullet1: "उच्च गुणवत्ता वाले कनेक्शन",
      bullet2: "लचीले रूट विकल्प",
      bullet3: "वैश्विक कवरेज",
      learnMore: "और जानें",
    },
  ],
  whyChooseBadge: "हमारा समाधान क्यों चुनें",
  whyChooseTitle: "हमारे ओम्नीचैनल संचार समाधान क्यों चुनें",
  whyChooseSubtitle:
    "स्पष्ट कनेक्शन, लचीली रूटिंग और वैश्विक बाजारों में विश्वसनीय प्रदर्शन के लिए निर्मित।",
  whyCards: {
    api: {
      title: "वॉयस और चैनल API एकीकरण",
      description:
        "एक विश्वसनीय प्रदाता के रूप में, हम वेबसाइटों, ऐप्स और CRM में मैसेजिंग और कॉलिंग क्षमताओं को एकीकृत करने में मदद करते हैं।",
    },
    secure: {
      title: "सुरक्षित और विश्वसनीय संचार",
      description:
        "एंटरप्राइज अनुपालन और 99.999% अपटाइम के लिए एंड-टू-एंड एन्क्रिप्टेड रास्ते।",
    },
    cloud: {
      title: "क्लाउड आधारित इंफ्रास्ट्रक्चर",
      description:
        "बिना किसी देरी के ट्रैफिक में वृद्धि के अनुसार तुरंत ढलने वाला क्लाउड नेटवर्क।",
    },
    connectivity: {
      title: "वैश्विक ओम्नीचैनल कनेक्टिविटी",
      description:
        "190+ देशों में 800+ मोबाइल ऑपरेटरों के साथ डायरेक्ट टियर-1 इंटरकनेक्ट्स।",
    },
    automated: {
      title: "स्वचालित वर्कफ़्लो रूटिंग",
      description:
        "सर्वोत्तम लागत और उच्चतम गति पर संदेश प्राप्त करने के लिए स्मार्ट फॉलबैक लॉजिक।",
    },
  },
  featuresBadge: "हमारी सेवाएं क्या प्रदान करती हैं",
  featuresTitle: "हर चैनल को कनेक्ट करें। हर ग्राहक संबंध को मजबूत बनाएं।",
  featuresSubtitle:
    "गति, सुरक्षा और वैश्विक पहुंच के साथ बड़े पैमाने पर संदेश भेजने और प्रबंधित करने में मदद करने वाला विश्वसनीय इंफ्रास्ट्रक्चर।",
  features: [
    {
      title: "स्मार्ट चैनल रूटिंग",
      description: "डिलीवरी और प्रदर्शन को तुरंत ट्रैक करें।",
      subtext: "SIP क्रेडेंशियल • IP प्रमाणीकरण",
    },
    {
      title: "वर्कफ़्लो ऑटोमेशन",
      description: "विश्वसनीय डिलीवरी के साथ दुनिया भर के ग्राहकों तक पहुंचें।",
      subtext: "गुणवत्ता • लागत • अनुपालन",
    },
    {
      title: "बैंकिंग और वित्तीय सेवाएं",
      description: "अनुकूलित मार्गों के साथ संदेश तेजी से भेजें।",
      subtext: "लाइव एनालिटिक्स • 24/7 NOC",
    },
    {
      title: "मल्टी-चैनल संचार",
      description: "सुरक्षित इंफ्रास्ट्रक्चर के साथ व्यावसायिक संचार को सुरक्षित रखें।",
      subtext: "गुणवत्ता • लागत • अनुपालन",
    },
    {
      title: "CRM एकीकरण",
      description: "ग्राहक डेटा को अपने संचार वर्कफ़्लो से कनेक्ट करें।",
      subtext: "लाइव एनालिटिक्स • 24/7 NOC",
    },
  ],
  ctaBadge: "आइए अपना मैसेजिंग नेटवर्क बनाएं",
  ctaTitle: "ओम्नीचैनल सॉल्यूशंस के साथ अपने व्यवसाय को आगे बढ़ाएं",
  ctaSubtitle:
    "इंटेलिजेंट रूटिंग से लेकर AI और वर्चुअल नंबरों तक, iNet Global स्केलेबल समाधान प्रदान करता है।",
};

const fr: OmnichannelTranslation = {
  heroBadge: "SERVICE OMNICANAL",
  heroTitle: "Connectez Chaque Conversation Client via une Seule Plateforme",
  heroDesc:
    "iNET Global Services offre des solutions de communication omnicanale puissantes unifiant de multiples canaux de messagerie dans une plateforme unique avec API.",
  getStarted: "Commencer",
  contactUs: "Contactez-nous",
  chatScreen: {
    contactName: "iNet Global",
    status: "Omnicanal Actif",
    msg1: "Avec iNet Global, vos routes SMS, WhatsApp et Telegram restent unifiées.",
    time1: "10:24",
    msg2: "Parfait ! Merci pour cette mise à jour !",
    time2: "10:25",
    typeMessage: "Écrivez un message...",
  },
  floatingBadges: {
    wholesale: { title: "SMS Wholesale", desc: "Conversations clients" },
    telegram: { title: "Telegram", desc: "Messagerie instantanée" },
    facebook: { title: "Facebook", desc: "Engagement client" },
  },
  whyServiceBadge: "POURQUOI NOTRE SERVICE",
  whyServiceTitle: "Des services omnicanaux adaptés à votre entreprise",
  whyServiceSubtitle:
    "Conçu pour les équipes ayant besoin de portée, de visibilité sur les livraisons et de contrôle du trafic A2P.",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "Options de routage international conçues pour une qualité, une couverture et un coût optimaux.",
      bullet1: "Connexions de haute qualité",
      bullet2: "Options de routage flexibles",
      bullet3: "Couverture mondiale",
      learnMore: "En savoir plus",
    },
    {
      id: "telegram",
      title: "Telegram",
      description:
        "Envoyez des SMS transactionnels, des OTP et des messages riches dans le monde entier avec une garantie de livraison élevée.",
      bullet1: "Connexions de haute qualité",
      bullet2: "Options de routage flexibles",
      bullet3: "Couverture mondiale",
      learnMore: "En savoir plus",
    },
    {
      id: "instagram",
      title: "Instagram",
      description:
        "Unifiez la voix, les SMS, WhatsApp et la vérification dans une suite d'API REST pour développeurs.",
      bullet1: "Connexions de haute qualité",
      bullet2: "Options de routage flexibles",
      bullet3: "Couverture mondiale",
      learnMore: "En savoir plus",
    },
  ],
  whyChooseBadge: "POURQUOI CHOISIR NOTRE SOLUTION",
  whyChooseTitle: "Pourquoi Choisir Nos Solutions de Communication Omnicanale",
  whyChooseSubtitle:
    "Conçu pour des connexions claires, un routage flexible et des performances fiables sur les marchés mondiaux.",
  whyCards: {
    api: {
      title: "Intégration API Voix et Canaux",
      description:
        "En tant que fournisseur de confiance, nous aidons les entreprises à intégrer des capacités de communication dans leurs applications et CRM.",
    },
    secure: {
      title: "Communication Sécurisée et Fiable",
      description:
        "Canaux chiffrés de bout en bout conçus pour la conformité et une disponibilité de 99,999 %.",
    },
    cloud: {
      title: "Infrastructure Cloud Élastique",
      description:
        "Structure cloud évolutive s'adaptant aux pics de trafic sans délai ni interruption.",
    },
    connectivity: {
      title: "Connectivité Omnicanale Mondiale",
      description:
        "Interconnexions directes Tier-1 avec plus de 800 opérateurs dans 190+ pays.",
    },
    automated: {
      title: "Routage Automatisé des Flux",
      description:
        "Logique de secours intelligente garantissant la réception des messages au meilleur coût et à la vitesse maximale.",
    },
  },
  featuresBadge: "CE QUE NOS SERVICES OFFRENT",
  featuresTitle: "Connectez Chaque Canal. Renforcez Chaque Relation Client.",
  featuresSubtitle:
    "Une infrastructure fiable pour envoyer, gérer et surveiller les messages à grande échelle avec rapidité et sécurité.",
  features: [
    {
      title: "Routage Intelligent des Canaux",
      description: "Suivez instantanément les livraisons et les performances.",
      subtext: "Identifiants SIP • Authentification IP",
    },
    {
      title: "Automatisation des Flux",
      description: "Touchez vos clients partout dans le monde avec une livraison fiable.",
      subtext: "Qualité • Coût • Conformité",
    },
    {
      title: "Services Bancaires et Financiers",
      description: "Envoyez des messages rapidement grâce à des routes mondiales optimisées.",
      subtext: "Analyses en direct • NOC 24/7",
    },
    {
      title: "Communication Multicanale",
      description: "Protégez vos communications d'entreprise avec une infrastructure sécurisée.",
      subtext: "Qualité • Coût • Conformité",
    },
    {
      title: "Intégration CRM",
      description: "Connectez les données clients à vos flux de travail de communication.",
      subtext: "Analyses en direct • NOC 24/7",
    },
  ],
  ctaBadge: "CONSTRUISONS VOTRE RÉSEAU DE MESSAGERIE",
  ctaTitle: "Développez Votre Entreprise avec des Solutions Omnicanales",
  ctaSubtitle:
    "Du routage intelligent à l'IA vocale et aux numéros virtuels, iNet Global fournit des solutions de communication fiables et évolutives.",
};

const de: OmnichannelTranslation = {
  heroBadge: "OMNICHANNEL-SERVICE",
  heroTitle: "Verbinden Sie Jede Kundenkonversation über Eine Plattform",
  heroDesc:
    "iNET Global Services bietet leistungsstarke Omnichannel-Kommunikationslösungen, die viele Messaging-Kanäle in einer Plattform und API bündeln.",
  getStarted: "Jetzt Starten",
  contactUs: "Kontaktieren Sie Uns",
  chatScreen: {
    contactName: "iNet Global",
    status: "Aktiver Omnichannel",
    msg1: "Mit iNet Global bleiben Ihre SMS-, WhatsApp- und Telegram-Routen vereint.",
    time1: "10:24",
    msg2: "Großartig! Vielen Dank für das Update!",
    time2: "10:25",
    typeMessage: "Nachricht eingeben...",
  },
  floatingBadges: {
    wholesale: { title: "Wholesale-SMS", desc: "Kundenkonversationen" },
    telegram: { title: "Telegram", desc: "Sofortige Kundennachrichten" },
    facebook: { title: "Facebook", desc: "Kundeninteraktion" },
  },
  whyServiceBadge: "WARUM UNSER SERVICE",
  whyServiceTitle: "Omnichannel-Dienste, die für Ihr Unternehmen funktionieren",
  whyServiceSubtitle:
    "Entwickelt für Teams, die Reichweite, Zustellungsüberblick und Kontrolle über ihren A2P-Verkehr benötigen.",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "Internationale Terminierung mit Routing-Optionen für höchste Qualität, Abdeckung und Wirtschaftlichkeit.",
      bullet1: "Hochwertige Verbindungen",
      bullet2: "Flexible Routing-Optionen",
      bullet3: "Globale Abdeckung",
      learnMore: "Mehr erfahren",
    },
    {
      id: "telegram",
      title: "Telegram",
      description:
        "Senden Sie kritische transaktionale SMS, OTPs und Rich Messaging mit hoher Zustellgarantie weltweit.",
      bullet1: "Hochwertige Verbindungen",
      bullet2: "Flexible Routing-Optionen",
      bullet3: "Globale Abdeckung",
      learnMore: "Mehr erfahren",
    },
    {
      id: "instagram",
      title: "Instagram",
      description:
        "Vereinen Sie Voice, SMS, WhatsApp und Verifizierung in einer entwicklerfreundlichen REST-API-Suite.",
      bullet1: "Hochwertige Verbindungen",
      bullet2: "Flexible Routing-Optionen",
      bullet3: "Globale Abdeckung",
      learnMore: "Mehr erfahren",
    },
  ],
  whyChooseBadge: "WARUM UNSERE OMNICHANNEL-LÖSUNG",
  whyChooseTitle: "Warum Sie Unsere Omnichannel-Kommunikationslösungen Wählen Sollten",
  whyChooseSubtitle:
    "Entwickelt für klare Verbindungen, flexibles Routing und zuverlässige Leistung auf globalen Märkten.",
  whyCards: {
    api: {
      title: "Sprach- und Kanal-API-Integration",
      description:
        "Als vertrauenswürdiger Anbieter helfen wir Unternehmen, Kommunikationsfunktionen in Apps und CRMs zu integrieren.",
    },
    secure: {
      title: "Sichere und Zuverlässige Kommunikation",
      description:
        "Vollständig verschlüsselte Kommunikationswege für Enterprise-Compliance und 99,999 % Betriebszeit.",
    },
    cloud: {
      title: "Cloudbasierte Infrastruktur",
      description:
        "Skalierbare Cloud-Infrastruktur, die sich ohne Verzögerung an Verkehrsspitzen anpasst.",
    },
    connectivity: {
      title: "Globale Omnichannel-Konnektivität",
      description:
        "Direkte Tier-1-Zusammenschaltungen mit über 800 Mobilfunkbetreibern in 190+ Ländern.",
    },
    automated: {
      title: "Automatisierte Workflow-Routen",
      description:
        "Intelligente Ausfalllogik für garantierte Nachrichtenzustellung bei optimalen Kosten.",
    },
  },
  featuresBadge: "WAS UNSERE DIENSTE BIETEN",
  featuresTitle: "Verbinden Sie Jeden Kanal. Stärken Sie Jede Kundenbeziehung.",
  featuresSubtitle:
    "Zuverlässige Messaging-Infrastruktur, um Nachrichten mit Geschwindigkeit, Sicherheit und globaler Reichweite zu skalieren.",
  features: [
    {
      title: "Intelligentes Kanal-Routing",
      description: "Zustellung, Leistung und Messaging-Aktivitäten sofort verfolgen.",
      subtext: "SIP-Anmeldedaten • IP-Authentifizierung",
    },
    {
      title: "Workflow-Automatisierung",
      description: "Kunden weltweit mit zuverlässiger SMS-Zustellung erreichen.",
      subtext: "Qualität • Kosten • Compliance",
    },
    {
      title: "Banking & Finanzdienstleistungen",
      description: "Nachrichten schnell über optimierte globale Routen versenden.",
      subtext: "Live-Analysen • 24/7 NOC",
    },
    {
      title: "Multichannel-Kommunikation",
      description: "Geschäftskommunikation mit sicherer Infrastruktur schützen.",
      subtext: "Qualität • Kosten • Compliance",
    },
    {
      title: "CRM-Integration",
      description: "Kundendaten nahtlos mit Ihren Kommunikations-Workflows verbinden.",
      subtext: "Live-Analysen • 24/7 NOC",
    },
  ],
  ctaBadge: "LASSEN SIE UNS IHR MESSAGING-NETZWERK AUFBAUEN",
  ctaTitle: "Wachsen Sie mit Modernen Omnichannel-Lösungen",
  ctaSubtitle:
    "Von intelligentem Routing bis hin zu KI und virtuellen Nummern bietet iNet Global zuverlässige Kommunikationslösungen weltweit.",
};

const translations: Record<string, OmnichannelTranslation> = {
  en,
  es,
  ja,
  te,
  ta,
  ar,
  zh,
  hi,
  fr,
  de,
};

export const getOmnichannelTranslations = (
  languageId: string,
  _regionId?: string,
  _regionName?: string
): OmnichannelTranslation => {
  return translations[languageId] || translations["en"];
};

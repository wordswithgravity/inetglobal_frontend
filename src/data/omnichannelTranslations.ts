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
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Connect through WhatsApp conversations",
        "bullet1": "Rich media & interactive catalogs",
        "bullet2": "Verified business profile",
        "bullet3": "Automated chatbot workflows",
        "learnMore": "Learn more"
    },
    {
        "id": "voice-calls",
        "title": "Voice Calls",
        "description": "Business voice communication",
        "bullet1": "Crystal-clear global voice termination",
        "bullet2": "Intelligent SIP & WebRTC routing",
        "bullet3": "Direct carrier connectivity",
        "learnMore": "Learn more"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Engage customers through Telegram",
        "bullet1": "Instant conversational messaging",
        "bullet2": "Secure bot-driven interactions",
        "bullet3": "Broadcast channels & groups",
        "learnMore": "Learn more"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Connect through Instagram messaging",
        "bullet1": "Direct message automation",
        "bullet2": "Story mentions & quick replies",
        "bullet3": "E-commerce customer support",
        "learnMore": "Learn more"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Connect through Facebook messaging",
        "bullet1": "Automated Messenger conversations",
        "bullet2": "Rich media carousels & cards",
        "bullet3": "Unified customer inbox",
        "learnMore": "Learn more"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Engage customers through TikTok",
        "bullet1": "Direct audience engagement",
        "bullet2": "Inquiry response & support",
        "bullet3": "Mobile-first social interaction",
        "learnMore": "Learn more"
    },
    {
        "id": "live-chat",
        "title": "Live Chat Plugin",
        "description": "Real-time website customer conversations",
        "bullet1": "Embeddable website widget",
        "bullet2": "Real-time visitor conversations",
        "bullet3": "Seamless agent handoff",
        "learnMore": "Learn more"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Rich conversational messaging",
        "bullet1": "Verified sender branding & logos",
        "bullet2": "Action buttons & suggested replies",
        "bullet3": "High-engagement carousels",
        "learnMore": "Learn more"
    },
    {
        "id": "email",
        "title": "Email",
        "description": "Integrated business email communication",
        "bullet1": "Integrated business communication",
        "bullet2": "Transactional receipts & alerts",
        "bullet3": "Unified omnichannel fallback",
        "learnMore": "Learn more"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Conéctese a través de conversaciones de WhatsApp",
        "bullet1": "Archivos multimedia y catálogos interactivos",
        "bullet2": "Perfil de empresa verificado",
        "bullet3": "Flujos de chatbot automatizados",
        "learnMore": "Saber más"
    },
    {
        "id": "voice-calls",
        "title": "Llamadas de Voz",
        "description": "Comunicación de voz empresarial de alta definición",
        "bullet1": "Terminación de voz global con claridad cristalina",
        "bullet2": "Enrutamiento inteligente SIP y WebRTC",
        "bullet3": "Conectividad directa con operadores",
        "learnMore": "Saber más"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Interactúe con clientes a través de Telegram",
        "bullet1": "Mensajería conversacional instantánea",
        "bullet2": "Interacciones seguras basadas en bots",
        "bullet3": "Canales de difusión y grupos",
        "learnMore": "Saber más"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Conéctese mediante la mensajería de Instagram",
        "bullet1": "Automatización de mensajes directos",
        "bullet2": "Menciones en historias y respuestas rápidas",
        "bullet3": "Atención al cliente para comercio electrónico",
        "learnMore": "Saber más"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Conéctese mediante la mensajería de Facebook",
        "bullet1": "Conversaciones automatizadas en Messenger",
        "bullet2": "Carruseles multimedia y tarjetas interactivas",
        "bullet3": "Bandeja de entrada unificada de clientes",
        "learnMore": "Saber más"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Interactúe con clientes a través de TikTok",
        "bullet1": "Interacción directa con la audiencia",
        "bullet2": "Respuesta a consultas y soporte ágil",
        "bullet3": "Interacción social adaptada a móviles",
        "learnMore": "Saber más"
    },
    {
        "id": "live-chat",
        "title": "Plugin de Chat en Vivo",
        "description": "Conversaciones web en tiempo real con clientes",
        "bullet1": "Widget integrable en sitios web",
        "bullet2": "Conversaciones en tiempo real con visitantes",
        "bullet3": "Transferencia fluida a agentes",
        "learnMore": "Saber más"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Mensajería conversacional enriquecida",
        "bullet1": "Identidad y logotipos de remitente verificado",
        "bullet2": "Botones de acción y respuestas sugeridas",
        "bullet3": "Carruseles de alta tasa de interacción",
        "learnMore": "Saber más"
    },
    {
        "id": "email",
        "title": "Correo Electrónico",
        "description": "Comunicación por correo corporativo integrada",
        "bullet1": "Comunicación corporativa integrada",
        "bullet2": "Recibos y alertas transaccionales",
        "bullet3": "Respaldo unificado omnicanal",
        "learnMore": "Saber más"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "WhatsApp で顧客とリアルタイムに対話",
        "bullet1": "リッチメディアと対話型商品カタログ",
        "bullet2": "公式認証済みのビジネス プロファイル",
        "bullet3": "自動化されたチャットボット シナリオ",
        "learnMore": "詳しく見る"
    },
    {
        "id": "voice-calls",
        "title": "音声通話 (Voice Calls)",
        "description": "高音質な企業向けグローバル音声通信",
        "bullet1": "世界規模でクリアな高品質音声ターミネーション",
        "bullet2": "インテリジェントな SIP & WebRTC ルーティング",
        "bullet3": "主要通信キャリアへの直接相互接続",
        "learnMore": "詳しく見る"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Telegram を通じて顧客と活発につながる",
        "bullet1": "高速かつ安全なチャット メッセージング",
        "bullet2": "高度なボットによる対話の自動化",
        "bullet3": "一斉配信チャンネルとコミュニティ グループ",
        "learnMore": "詳しく見る"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Instagram メッセージでファンや顧客と交流",
        "bullet1": "ダイレクト メッセージ (DM) の自動処理",
        "bullet2": "ストーリーズ メンション自動返信 & クイック応答",
        "bullet3": "EC・オンライン ショップ向けの接客サポート",
        "learnMore": "詳しく見る"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Facebook Messenger で世界中の顧客と対話",
        "bullet1": "Messenger での自動接客・問い合わせ対応",
        "bullet2": "リッチメディア カルーセルとアクション カード",
        "bullet3": "すべての問い合わせを集約する統一受信トレイ",
        "learnMore": "詳しく見る"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "TikTok 上で若い世代の顧客とダイレクトに交流",
        "bullet1": "モバイル ファーストな視聴者との直接対話",
        "bullet2": "スピーディーな問い合わせ対応と顧客サポート",
        "bullet3": "トレンドを捉えたソーシャル コミュニケーション",
        "learnMore": "詳しく見る"
    },
    {
        "id": "live-chat",
        "title": "ライブ チャット プラグイン",
        "description": "Web サイト訪問者とのリアルタイム オンライン接客",
        "bullet1": "サイトに手軽に埋め込めるチャット ウィジェット",
        "bullet2": "訪問者との即時リアルタイム会話",
        "bullet3": "ボットからオペレーターへのスムーズな引き継ぎ",
        "learnMore": "詳しく見る"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "表現力豊かな次世代リッチ メッセージング",
        "bullet1": "認証済みブランド ロゴとセキュリティ マーク",
        "bullet2": "推奨アクション ボタンとクイック返信チップ",
        "bullet3": "高エンゲージメントを生む画像カルーセル",
        "learnMore": "詳しく見る"
    },
    {
        "id": "email",
        "title": "トランザクション メール",
        "description": "オムニチャネルと統合された企業向けメール配信",
        "bullet1": "統合された高信頼ビジネス メール通信",
        "bullet2": "重要取引の領収書・明細および通知アラート",
        "bullet3": "オムニチャネル連携による自動フォールバック",
        "learnMore": "詳しく見る"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "ప్రపంచంలో అత్యంత ప్రజాదరణ పొందిన మెసేజింగ్ యాప్‌లో కస్టమర్‌లతో నేరుగా కనెక్ట్ అవ్వండి.",
        "bullet1": "ధృవీకరించబడిన వ్యాపార ప్రొఫైల్ బ్యాడ్జ్",
        "bullet2": "రిచ్ మీడియా & ఇంటరాక్టివ్ బటన్లు",
        "bullet3": "స్వయంచాలక చాట్‌బాట్లు & మద్దతు",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "voice-calls",
        "title": "వాయిస్ కాల్స్ & క్లౌడ్ IVR",
        "description": "స్మార్ట్ రూటింగ్, కాల్ రికార్డింగ్ మరియు స్పష్టమైన ఆడియోతో స్కేలబుల్ క్లౌడ్ వాయిస్ సొల్యూషన్స్.",
        "bullet1": "స్మార్ట్ ఇంటరాక్టివ్ IVR వ్యవస్థలు",
        "bullet2": "HD స్పష్టతతో గ్లోబల్ వాయిస్ కాల్స్",
        "bullet3": "AI ఆటోమేషన్ & కాల్ విశ్లేషణలు",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "కస్టమర్ సేవ, ఆటోమేటెడ్ బాట్‌లు మరియు నోటిఫికేషన్‌ల కోసం టెలిగ్రామ్ వేగాన్ని ఉపయోగించుకోండి.",
        "bullet1": "అపరిమిత గ్రూపులు & ప్రసార ఛానెల్‌లు",
        "bullet2": "శక్తివంతమైన బాట్ ఆటోమేషన్ ఇంటిగ్రేషన్",
        "bullet3": "ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్టెడ్ సురక్షిత మెసేజింగ్",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "ఇన్‌స్టాగ్రామ్ డిఎమ్‌లలో ఆటోమేటెడ్ రిప్లైలతో సోషల్ ఎంగేజ్‌మెంట్‌ను ఆదాయంగా మార్చుకోండి.",
        "bullet1": "స్టోరీ ప్రత్యుత్తరాలు & ప్రస్తావనల ఆటోమేషన్",
        "bullet2": "కామెంట్-టు-డిఎమ్ ఆటోమేషన్ ప్రవాహాలు",
        "bullet3": "ఇన్‌-యాప్ ప్రొడక్ట్ బ్రౌజింగ్ సపోర్ట్",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "ఫేస్‌బుక్ మెసెంజర్‌లో మీ కస్టమర్‌లను కలవండి మరియు ప్రశ్నలను వెంటనే పరిష్కరించండి.",
        "bullet1": "మెసెంజర్‌లో తక్షణ లీడ్ క్యాప్చర్",
        "bullet2": "రిచ్ కారౌసెల్ కార్డ్‌లు & త్వరిత ప్రత్యుత్తరాలు",
        "bullet3": "లైవ్ ఏజెంట్ హ్యాండ్‌ఆఫ్ సపోర్ట్",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "tiktok",
        "title": "TikTok బిజినెస్ మెసేజింగ్",
        "description": "టిక్‌టాక్ బిజినెస్ మెసేజింగ్ ద్వారా ఆధునిక తరం కొనుగోలుదారులను ఆకట్టుకోండి.",
        "bullet1": "కొనుగోలుదారుల కోసం ఇన్‌-యాప్ కస్టమర్ సపోర్ట్",
        "bullet2": "వీడియో లీడ్‌లకు త్వరిత ప్రత్యుత్తరాల ఆటోమేషన్",
        "bullet3": "సోషల్ కామర్స్ లీడ్ క్యాప్చర్ ఇంటిగ్రేషన్",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "live-chat",
        "title": "వెబ్‌సైట్ లైవ్ చాట్",
        "description": "మీ వెబ్‌సైట్ మరియు మొబైల్ యాప్‌లలో రియల్ టైమ్ మద్దతుతో సందర్శకులను లీడ్స్‌గా మార్చండి.",
        "bullet1": "లైట్ వెయిట్ కస్టమ్ వెబ్ విడ్జెట్",
        "bullet2": "AI బాట్ నుండి ఏజెంట్‌కు స్మూత్ బదిలీ",
        "bullet3": "రియల్ టైమ్ విజిటర్ సందర్భం & పేజీ అంతర్దృష్టులు",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "rcs",
        "title": "RCS బిజినెస్ మెసేజింగ్",
        "description": "బ్రాండెడ్ ధృవీకరణ మరియు ఇంటరాక్టివ్ బటన్లతో తదుపరి తరం SMS అనుభవాన్ని అందించండి.",
        "bullet1": "వెరిఫైడ్ బ్రాండ్ గుర్తింపు & టిక్ మార్క్",
        "bullet2": "స్క్రోలబుల్ ఇమేజ్ కారౌసెల్స్ & చర్యలు",
        "bullet3": "ఆటోమేటిక్ SMS / MMS ఫాల్‌బ్యాక్ రక్షణ",
        "learnMore": "మరింత తెలుసుకోండి"
    },
    {
        "id": "email",
        "title": "ఎంటర్‌ప్రైజ్ ఇమెయిల్ సొల్యూషన్స్",
        "description": "లావాదేవీ మరియు మార్కెటింగ్ ఇమెయిల్‌లను విశ్వసనీయమైన డెలివరీ రేట్లతో పంపండి.",
        "bullet1": "ఉన్నతమైన ఇన్‌బాక్స్ డెలివరీ రేట్లు",
        "bullet2": "డైనమిక్ వ్యక్తిగతీకరించిన టెంప్లేట్లు",
        "bullet3": "సమగ్ర ట్రాకింగ్, క్లిక్‌లు & విశ్లేషణలు",
        "learnMore": "మరింత తెలుసుకోండి"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "WhatsApp உரையாடல்கள் மூலம் வாடிக்கையாளர்களுடன் இணைந்திருங்கள்",
        "bullet1": "செழுமையான மீடியா மற்றும் ஊடாடும் தயாரிப்பு பட்டியல்கள்",
        "bullet2": "சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ வணிக சுயவிவரம்",
        "bullet3": "தானியங்கி சாட்போட் பணிப்பாய்வுகள்",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "voice-calls",
        "title": "குரல் அழைப்புகள் (Voice Calls)",
        "description": "உயர்தர வணிக குரல் தொடர்பு தீர்வுகள்",
        "bullet1": "தெளிவான உலகளாவிய குரல் அழைப்பு சேவை",
        "bullet2": "புத்திசாலித்தனமான SIP மற்றும் WebRTC ரூட்டிங்",
        "bullet3": "தொலைத்தொடர்பு நிறுவனங்களுடன் நேரடி அதிவேக இணைப்பு",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Telegram மூலம் வாடிக்கையாளர்களுடன் எளிதாக உரையாடுங்கள்",
        "bullet1": "உடனடி மற்றும் பாதுகாப்பான அரட்டை செய்திகள்",
        "bullet2": "பாட் அடிப்படையிலான தானியங்கி பதில்கள்",
        "bullet3": "ஒளிபரப்பு சேனல்கள் மற்றும் சமூக குழுக்கள்",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Instagram நேரடி செய்திகள் மூலம் வாடிக்கையாளர்களை அடையுங்கள்",
        "bullet1": "நேரடி செய்திகள் (DMs) தானியக்கமாக்கல்",
        "bullet2": "ஸ்டோரி குறிப்புகளுக்கு உடனடி பதில்கள்",
        "bullet3": "இ-காமர்ஸ் வாடிக்கையாளர் சேவைக்கு உகந்தது",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Facebook Messenger மூலம் உலகளாவிய வாடிக்கையாளர்களுடன் பேசுங்கள்",
        "bullet1": "தானியங்கி Messenger உரையாடல்கள்",
        "bullet2": "மல்டிமீடியா கொணர்வி தயாரிப்பு அட்டைகள்",
        "bullet3": "அனைத்து வாடிக்கையாளர்களுக்கும் ஒரே இன்பாக்ஸ்",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "TikTok தளத்தில் உள்ள நுகர்வோருடன் இணைந்திருங்கள்",
        "bullet1": "மொபைல் பார்வையாளர்களுடன் நேரடி ஈடுபாடு",
        "bullet2": "விசாரணைகளுக்கு விரைவான பதில்கள் மற்றும் ஆதரவு",
        "bullet3": "ஸ்மார்ட்போன்களுக்காக வடிவமைக்கப்பட்ட சமூக தொடர்பு",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "live-chat",
        "title": "லைவ் சாட் விட்ஜெட்",
        "description": "வலைத்தள பார்வையாளர்களுடன் நிகழ்நேர நேரடி உரையாடல்",
        "bullet1": "எந்த வலைத்தளத்திலும் எளிதாகப் பொருத்தக்கூடிய விட்ஜெட்",
        "bullet2": "செயலில் உள்ள பார்வையாளர்களுடன் உடனடி உரையாடல்",
        "bullet3": "மனித முகவர்களுக்கு தடையற்ற அழைப்பு பரிமாற்றம்",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "அடுத்த தலைமுறை நவீன ஊடாடும் மெசேஜிங்",
        "bullet1": "சரிபார்க்கப்பட்ட அனுப்புநர் பிராண்டிங் & அதிகாரப்பூர்வ லோகோ",
        "bullet2": "செயல் பொத்தான்கள் மற்றும் விரைவு பதில் குறிப்புகள்",
        "bullet3": "அதிக விற்பனை மாற்றங்களை தரும் வண்ணமயமான அட்டைகள்",
        "learnMore": "மேலும் அறிய"
    },
    {
        "id": "email",
        "title": "பரிவர்த்தனை மின்னஞ்சல் (Email)",
        "description": "ஆம்னிசேனலுடன் ஒருங்கிணைக்கப்பட்ட வணிக மின்னஞ்சல்",
        "bullet1": "பாதுகாப்பான மற்றும் ஒருங்கிணைந்த கார்ப்பரேட் மின்னஞ்சல்",
        "bullet2": "பரிவர்த்தனை ரசீதுகள் மற்றும் முக்கிய அறிவிப்புகள்",
        "bullet3": "தானியங்கி ஆம்னிசேனல் ஃபால்பேக் பாதுகாப்பு",
        "learnMore": "மேலும் அறிய"
    }
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
        "id": "whatsapp",
        "title": "واتساب للأعمال (WhatsApp Business)",
        "description": "تواصل مع العملاء عبر محادثات واتساب التفاعلية",
        "bullet1": "وسائط غنية وكتالوجات منتجات تفاعلية",
        "bullet2": "ملف تجاري موثق رسمي ومعتمد",
        "bullet3": "أتمتة ذكية لمسارات روبوتات المحادثة",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "voice-calls",
        "title": "المكالمات الصوتية (Voice Calls)",
        "description": "اتصالات صوتية للمؤسسات فائقة النقاء",
        "bullet1": "إنهاء مكالمات صوتية عالمي بوضوح كريستالي",
        "bullet2": "توجيه ذكي عبر بروتوكولات SIP و WebRTC",
        "bullet3": "ربط مباشر مع مشغلي شبكات الاتصالات",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "telegram",
        "title": "تيليجرام (Telegram)",
        "description": "تفاعل مع العملاء مباشرة عبر تيليجرام",
        "bullet1": "مراسلة فورية بمحادثات حية وسريعة",
        "bullet2": "تفاعلات آمنة مدعومة بالبوتات الذكية",
        "bullet3": "قنوات بث واسعة ومجموعات تفاعلية",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "instagram",
        "title": "إنستغرام (Instagram)",
        "description": "تواصل عبر رسائل إنستغرام التفاعلية",
        "bullet1": "أتمتة الرسائل المباشرة Direct Messages",
        "bullet2": "ردود فورية على إشارات القصص Stories",
        "bullet3": "دعم مخصص لعملاء التجارة الإلكترونية",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "facebook",
        "title": "فيسبوك (Facebook)",
        "description": "تواصل مع الجمهور عبر فيسبوك ماسنجر",
        "bullet1": "محادثات ماسنجر مؤتمتة وسريعة",
        "bullet2": "بطاقات وقوائم منتجات متعددة الوسائط",
        "bullet3": "صندوق وارد موحد لمحادثات العملاء",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "tiktok",
        "title": "تيك توك (TikTok)",
        "description": "تفاعل مع العملاء عبر منصة تيك توك",
        "bullet1": "تفاعل مباشر مع الجمهور الحديث",
        "bullet2": "استجابة سريعة للاستفسارات والدعم",
        "bullet3": "تفاعل اجتماعي أصلي مصمم للهواتف",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "live-chat",
        "title": "برمجية الدردشة الحية (Live Chat)",
        "description": "محادثات مباشرة وفورية مع زوار الموقع",
        "bullet1": "أداة دردشة قابلة للتضمين في المواقع",
        "bullet2": "محادثات حية فورية مع الزوار",
        "bullet3": "تحويل سلس للعميل إلى الموظفين",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "rcs",
        "title": "رسائل الأعمال RCS",
        "description": "الجيل الجديد من رسائل الهواتف التفاعلية",
        "bullet1": "علامة تجارية وشعار موثق للمرسل",
        "bullet2": "أزرار إجراءات واقتراحات رد سريعة",
        "bullet3": "بطاقات متحركة عالية التأثير والتفاعل",
        "learnMore": "اعرف المزيد"
    },
    {
        "id": "email",
        "title": "البريد الإلكتروني (Email)",
        "description": "اتصالات بريد إلكتروني تجارية متكاملة",
        "bullet1": "اتصالات أعمال مدمجة وموحدة",
        "bullet2": "إشعارات المعاملات والتنبيهات الهامة",
        "bullet3": "توجيه احتياطي موحد عبر القنوات",
        "learnMore": "اعرف المزيد"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp 商业版",
        "description": "通过 WhatsApp 展开沉浸式客户对话",
        "bullet1": "多媒体内容与交互式商品目录",
        "bullet2": "已验证官方商业认证档案",
        "bullet3": "自动化智能聊天机器人流程",
        "learnMore": "了解更多"
    },
    {
        "id": "voice-calls",
        "title": "高清语音通话",
        "description": "企业级高保真全球语音通信",
        "bullet1": "水晶般清晰的全球语音话务落地",
        "bullet2": "智能 SIP 与 WebRTC 智能路由",
        "bullet3": "全球电信运营商直接互联通道",
        "learnMore": "了解更多"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "通过 Telegram 高效触达与连接客户",
        "bullet1": "瞬时会话式即时消息传递",
        "bullet2": "安全强大的 Bot 交互自动化",
        "bullet3": "官方广播频道与大型客户群组",
        "learnMore": "了解更多"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "通过 Instagram 社交私信连接活跃消费者",
        "bullet1": "私信 Direct Message 自动化处理",
        "bullet2": "快拍 Story 提及自动答复与快捷回复",
        "bullet3": "电商社交导购与客户服务",
        "learnMore": "了解更多"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "通过 Facebook Messenger 连接全球受众",
        "bullet1": "自动化 Messenger 智能对话系统",
        "bullet2": "富媒体轮播商品展示卡片",
        "bullet3": "统一的跨渠道客户综合收件箱",
        "learnMore": "了解更多"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "在 TikTok 上深度吸引新一代移动消费者",
        "bullet1": "与全球受众直接建立私信连接",
        "bullet2": "高响应度的咨询解答与售后支持",
        "bullet3": "移动端原生的潮流社交互动体验",
        "learnMore": "了解更多"
    },
    {
        "id": "live-chat",
        "title": "在线实时客服插件",
        "description": "网站访客实时沟通与商机转化",
        "bullet1": "免开发快速嵌入式网站浮窗",
        "bullet2": "实时捕捉并接待在线访客咨询",
        "bullet3": "人机协同无缝转接真人客服",
        "learnMore": "了解更多"
    },
    {
        "id": "rcs",
        "title": "RCS 商业消息",
        "description": "下一代原生富媒体对话通信",
        "bullet1": "官方认证企业品牌标识与防伪背书",
        "bullet2": "一键建议操作按钮与快捷回复气泡",
        "bullet3": "高转化率互动式多媒体轮播展示",
        "learnMore": "了解更多"
    },
    {
        "id": "email",
        "title": "企业电子邮件",
        "description": "与全渠道深度融合的企业级邮件通信",
        "bullet1": "统一的综合企业级邮件触达能力",
        "bullet2": "关键业务交易凭据与紧急警报推送",
        "bullet3": "全渠道智能防丢失备用投递路由",
        "learnMore": "了解更多"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "WhatsApp बातचीत के माध्यम से ग्राहकों से जुड़ें",
        "bullet1": "रिच मीडिया और इंटरैक्टिव कैटलॉग",
        "bullet2": "सत्यापित व्यावसायिक प्रोफ़ाइल",
        "bullet3": "स्वचालित चैटबॉट वर्कफ़्लो",
        "learnMore": "और जानें"
    },
    {
        "id": "voice-calls",
        "title": "वॉयस कॉल्स (Voice Calls)",
        "description": "व्यावसायिक वॉयस संचार समाधान",
        "bullet1": "क्रिस्टल-स्पष्ट वैश्विक वॉयस टर्मिनेशन",
        "bullet2": "बुद्धिमान SIP और WebRTC रूटिंग",
        "bullet3": "प्रत्यक्ष ऑपरेटर कनेक्टिविटी",
        "learnMore": "और जानें"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Telegram के माध्यम से ग्राहकों को जोड़ें",
        "bullet1": "त्वरित संवादात्मक संदेश",
        "bullet2": "सुरक्षित बॉट-संचालित इंटरैक्शन",
        "bullet3": "प्रसारण चैनल और समूह",
        "learnMore": "और जानें"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Instagram मैसेजिंग के माध्यम से जुड़ें",
        "bullet1": "डायरेक्ट मैसेज ऑटोमेशन",
        "bullet2": "स्टोरी मेंशन और त्वरित उत्तर",
        "bullet3": "ई-कॉमर्स ग्राहक सहायता",
        "learnMore": "और जानें"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Facebook मैसेजिंग के माध्यम से जुड़ें",
        "bullet1": "स्वचालित मैसेंजर वार्तालाप",
        "bullet2": "रिच मीडिया हिंडोला और कार्ड",
        "bullet3": "एकीकृत ग्राहक इनबॉक्स",
        "learnMore": "और जानें"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "TikTok के माध्यम से ग्राहकों को आकर्षित करें",
        "bullet1": "प्रत्यक्ष दर्शक जुड़ाव",
        "bullet2": "पूछताछ प्रतिक्रिया और समर्थन",
        "bullet3": "मोबाइल-प्रथम सामाजिक संपर्क",
        "learnMore": "और जानें"
    },
    {
        "id": "live-chat",
        "title": "लाइव चैट विजेट (Live Chat)",
        "description": "वेबसाइट आगंतुकों से रीयल-टाइम बातचीत",
        "bullet1": "वेबसाइट में एम्बेड करने योग्य विजेट",
        "bullet2": "आगंतुकों के साथ वास्तविक समय में संवाद",
        "bullet3": "मानव एजेंटों को सहज हैंडऑफ़",
        "learnMore": "और जानें"
    },
    {
        "id": "rcs",
        "title": "RCS बिजनेस मैसेजिंग",
        "description": "अगली पीढ़ी की समृद्ध संवादात्मक मैसेजिंग",
        "bullet1": "सत्यापित प्रेषक ब्रांडिंग और लोगो",
        "bullet2": "एक्शन बटन और सुझाए गए उत्तर",
        "bullet3": "उच्च-जुड़ाव वाले हिंडोला कार्ड",
        "learnMore": "और जानें"
    },
    {
        "id": "email",
        "title": "ईमेल (Email)",
        "description": "एकीकृत व्यावसायिक ईमेल संचार",
        "bullet1": "एकीकृत व्यावसायिक संचार",
        "bullet2": "लेनदेन संबंधी रसीदें और अलर्ट",
        "bullet3": "एकीकृत ऑम्नीचैनल फॉलबैक",
        "learnMore": "और जानें"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Interagissez grâce aux conversations WhatsApp",
        "bullet1": "Médias enrichis et catalogues interactifs",
        "bullet2": "Profil d'entreprise officiel et vérifié",
        "bullet3": "Flux automatisés de chatbots conversationnels",
        "learnMore": "En savoir plus"
    },
    {
        "id": "voice-calls",
        "title": "Appels Vocaux",
        "description": "Communication vocale d'entreprise haute fidélité",
        "bullet1": "Terminaison vocale mondiale d'une clarté cristalline",
        "bullet2": "Routage intelligent SIP et WebRTC",
        "bullet3": "Connectivité directe avec les opérateurs télécoms",
        "learnMore": "En savoir plus"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Engagez vos clients directement sur Telegram",
        "bullet1": "Messagerie instantanée et interactive",
        "bullet2": "Interactions sécurisées par bots automatisés",
        "bullet3": "Canaux de diffusion et groupes de communauté",
        "learnMore": "En savoir plus"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Communiquez via la messagerie directe d'Instagram",
        "bullet1": "Automatisation des messages directs (DM)",
        "bullet2": "Réponses aux mentions en stories et raccourcis",
        "bullet3": "Support client adapté au commerce en ligne",
        "learnMore": "En savoir plus"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Connectez-vous via Facebook Messenger",
        "bullet1": "Conversations Messenger automatisées",
        "bullet2": "Carrousels multimédias et cartes interactives",
        "bullet3": "Boîte de réception client centralisée",
        "learnMore": "En savoir plus"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Captez vos clients sur la plateforme TikTok",
        "bullet1": "Engagement direct avec les audiences mobiles",
        "bullet2": "Réponses instantanées aux demandes et support",
        "bullet3": "Interactions sociales pensées pour le mobile",
        "learnMore": "En savoir plus"
    },
    {
        "id": "live-chat",
        "title": "Widget de Chat en Direct",
        "description": "Échanges en temps réel avec les visiteurs de votre site",
        "bullet1": "Widget intégrable facilement sur tout site web",
        "bullet2": "Conversations en direct avec les visiteurs",
        "bullet3": "Transfert fluide et instantané vers les agents",
        "learnMore": "En savoir plus"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Messagerie conversationnelle enrichie nouvelle génération",
        "bullet1": "Identité de marque et logo d'expéditeur vérifiés",
        "bullet2": "Boutons d'action et suggestions de réponse",
        "bullet3": "Carrousels interactifs à fort engagement",
        "learnMore": "En savoir plus"
    },
    {
        "id": "email",
        "title": "E-mail Transactionnel",
        "description": "Communication par e-mail d'entreprise intégrée",
        "bullet1": "Communication d'entreprise intégrée et fiable",
        "bullet2": "Reçus transactionnels et notifications d'alerte",
        "bullet3": "Secours automatique omnicanal unifié",
        "learnMore": "En savoir plus"
    }
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
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Treten Sie über WhatsApp-Dialoge mit Kunden in Kontakt",
        "bullet1": "Reichhaltige Medien und interaktive Kataloge",
        "bullet2": "Verifiziertes offizielles Unternehmensprofil",
        "bullet3": "Automatisierte Chatbot-Workflows",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "voice-calls",
        "title": "Sprachanrufe (Voice Calls)",
        "description": "Kristallklare Sprachkommunikation für Unternehmen",
        "bullet1": "Weltweite Sprachtransmission in bester Tonqualität",
        "bullet2": "Intelligentes SIP- und WebRTC-Routing",
        "bullet3": "Direkte Netzanbindung an Mobilfunkbetreiber",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Erreichen Sie Ihre Kunden direkt über Telegram",
        "bullet1": "Interaktives Messaging in Echtzeit",
        "bullet2": "Sichere bot-gestützte Kundeninteraktionen",
        "bullet3": "Offizielle Broadcast-Kanäle und Gruppen",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Kommunizieren Sie über Instagram-Direktnachrichten",
        "bullet1": "Automatisierung von Direktnachrichten (DMs)",
        "bullet2": "Erwähnungen in Stories & konfigurierte Schnellantworten",
        "bullet3": "Kundenbetreuung für E-Commerce",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Verbinden Sie sich über Facebook Messenger",
        "bullet1": "Automatisierte Konversationen im Messenger",
        "bullet2": "Multimediale Karussellkarten und Aktions-Buttons",
        "bullet3": "Zentralisierter Posteingang für Kundenanfragen",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Sprechen Sie Ihre Kunden auf TikTok an",
        "bullet1": "Direkter Dialog mit mobilen Zielgruppen",
        "bullet2": "Schnelle Reaktionszeiten bei Supportanfragen",
        "bullet3": "Social-Media-Interaktion für Mobilgeräte",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "live-chat",
        "title": "Live-Chat-Widget",
        "description": "Echtzeit-Dialoge mit Besuchern auf Ihrer Website",
        "bullet1": "Einfach integrierbares Website-Widget",
        "bullet2": "Direkte Konversationen mit Webseitenbesuchern",
        "bullet3": "Nahtlose Weiterleitung an Service-Mitarbeiter",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Interaktive Rich-Messaging-Dialoge der nächsten Generation",
        "bullet1": "Verifizierte Absenderidentität und Logos",
        "bullet2": "Aktions-Schaltflächen und Antwortvorschläge",
        "bullet3": "Karussellkarten mit hoher Klickrate",
        "learnMore": "Mehr erfahren"
    },
    {
        "id": "email",
        "title": "Transaktions-E-Mail",
        "description": "Integrierte geschäftliche E-Mail-Kommunikation",
        "bullet1": "Integrierte geschäftliche Kommunikation",
        "bullet2": "Transaktionsbelege und Statuswarnungen",
        "bullet3": "Zuverlässiger einheitlicher Omnichannel-Fallback",
        "learnMore": "Mehr erfahren"
    }
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


const pt: OmnichannelTranslation = {
  ...en,
  heroBadge: "SERVIÇO OMNICHANNEL",
  heroTitle: "Conecte Cada Conversa com Clientes em Uma Só Plataforma",
  heroDesc: "A iNET Global Services oferece soluções robustas de comunicação omnichannel que unificam diversos canais de mensagens em uma plataforma e API única.",
  getStarted: "Começar",
  contactUs: "Fale Conosco",
  whyServiceBadge: "CANAIS INCLUÍDOS",
  whyServiceTitle: "Por Que Escolher Nossa Plataforma Omnichannel",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Conecte-se por meio de conversas envolventes no WhatsApp",
        "bullet1": "Mídia rica e catálogos interativos de produtos",
        "bullet2": "Perfil de negócios verificado e oficial",
        "bullet3": "Fluxos inteligentes de chatbots automatizados",
        "learnMore": "Saiba mais"
    },
    {
        "id": "voice-calls",
        "title": "Chamadas de Voz",
        "description": "Comunicação de voz corporativa em alta definição",
        "bullet1": "Terminação global de voz com clareza cristalina",
        "bullet2": "Roteamento inteligente SIP e WebRTC",
        "bullet3": "Conectividade direta com operadoras móveis",
        "learnMore": "Saiba mais"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Engaje clientes diretamente no Telegram",
        "bullet1": "Mensagens conversacionais instantâneas",
        "bullet2": "Interações seguras orientadas por bots",
        "bullet3": "Canais de transmissão e grupos comunitários",
        "learnMore": "Saiba mais"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Conecte-se por meio das mensagens diretas do Instagram",
        "bullet1": "Automação de mensagens diretas (DMs)",
        "bullet2": "Menções em stories e respostas rápidas",
        "bullet3": "Atendimento ao cliente para e-commerce",
        "learnMore": "Saiba mais"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Conecte-se aos seus clientes pelo Facebook Messenger",
        "bullet1": "Conversas automatizadas no Messenger",
        "bullet2": "Carrosséis de mídia rica e cartões visuais",
        "bullet3": "Caixa de entrada de clientes unificada",
        "learnMore": "Saiba mais"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Engaje seu público-alvo no TikTok",
        "bullet1": "Interação direta com audiências modernas",
        "bullet2": "Respostas rápidas a dúvidas e suporte",
        "bullet3": "Comunicação social otimizada para celular",
        "learnMore": "Saiba mais"
    },
    {
        "id": "live-chat",
        "title": "Widget de Chat ao Vivo",
        "description": "Atendimento em tempo real aos visitantes do seu site",
        "bullet1": "Widget facilmente incorporável em websites",
        "bullet2": "Conversas com visitantes em tempo real",
        "bullet3": "Transição suave e rápida para agentes humanos",
        "learnMore": "Saiba mais"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Mensageria conversacional rica de última geração",
        "bullet1": "Identidade de remetente verificado com logotipo",
        "bullet2": "Botões de ação rápida e sugestões de resposta",
        "bullet3": "Carrosséis visuais de alto engajamento",
        "learnMore": "Saiba mais"
    },
    {
        "id": "email",
        "title": "E-mail Transacional",
        "description": "Comunicação por e-mail corporativo integrada",
        "bullet1": "Comunicação de negócios integrada e segura",
        "bullet2": "Recibos e alertas críticos de transações",
        "bullet3": "Fallback omnicanal unificado de segurança",
        "learnMore": "Saiba mais"
    }
],
  whyChooseBadge: "POR QUE NOSSA SOLUÇÃO",
  whyChooseTitle: "Comunicação Unificada com Clientes Construída para Escala",
  featuresBadge: "RECURSOS DA PLATAFORMA",
  featuresTitle: "Capacidades Completas de Engajamento de Clientes",
  ctaBadge: "CONSTRUA SUA REDE OMNICHANNEL",
  ctaTitle: "Cresça com Soluções Omnichannel Modernas",
  ctaSubtitle: "Do WhatsApp e Instagram ao SMS e Voz, centralize todas as interações da sua empresa.",
};

const ru: OmnichannelTranslation = {
  ...en,
  heroBadge: "ОМНИКАНАЛЬНЫЙ СЕРВИС",
  heroTitle: "Объедините все диалоги с клиентами на одной платформе",
  heroDesc: "iNET Global Services предлагает мощные омниканальные коммуникационные решения, объединяющие множество каналов сообщений в единую платформу и API.",
  getStarted: "Начать",
  contactUs: "Связаться с нами",
  whyServiceBadge: "ПОДДЕРЖИВАЕМЫЕ КАНАЛЫ",
  whyServiceTitle: "Почему выбирают нашу омниканальную платформу",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Общайтесь с клиентами через диалоги в WhatsApp",
        "bullet1": "Интерактивные каталоги и богатые медиа",
        "bullet2": "Верифицированный бизнес-профиль с галочкой",
        "bullet3": "Автоматизированные сценарии чат-ботов",
        "learnMore": "Подробнее"
    },
    {
        "id": "voice-calls",
        "title": "Голосовые вызовы (Voice Calls)",
        "description": "Корпоративная голосовая связь высокого качества",
        "bullet1": "Кристально чистая глобальная терминация голоса",
        "bullet2": "Интеллектуальная маршрутизация SIP и WebRTC",
        "bullet3": "Прямые подключения к сотовым операторам",
        "learnMore": "Подробнее"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Вовлекайте клиентов через популярный мессенджер Telegram",
        "bullet1": "Мгновенный обмен сообщениями и файлами",
        "bullet2": "Безопасные взаимодействия на базе ботов",
        "bullet3": "Информационные каналы и закрытые группы",
        "learnMore": "Подробнее"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Взаимодействуйте через личные сообщения в Instagram",
        "bullet1": "Автоматизация прямых сообщений (Direct)",
        "bullet2": "Ответы на отметки в Stories и быстрые реакции",
        "bullet3": "Клиентская поддержка для интернет-магазинов",
        "learnMore": "Подробнее"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Общайтесь с пользователями через Facebook Messenger",
        "bullet1": "Автоматизированные диалоги в Messenger",
        "bullet2": "Медиа-карусели и карточки продуктов",
        "bullet3": "Единый почтовый ящик для клиентских запросов",
        "learnMore": "Подробнее"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Привлекайте активную аудиторию через TikTok",
        "bullet1": "Прямое взаимодействие с мобильной аудиторией",
        "bullet2": "Быстрые ответы на запросы и консультации",
        "bullet3": "Современный социальный контакт для смартфонов",
        "learnMore": "Подробнее"
    },
    {
        "id": "live-chat",
        "title": "Виджет онлайн-чата",
        "description": "Общение с посетителями сайта в режиме реального времени",
        "bullet1": "Легко встраиваемый виджет для веб-сайта",
        "bullet2": "Живые диалоги с посетителями страниц",
        "bullet3": "Бесшовный перевод диалога на оператора",
        "learnMore": "Подробнее"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Интерактивные диалоговые сообщения нового поколения",
        "bullet1": "Официальный логотип и верификация отправителя",
        "bullet2": "Кнопки быстрых действий и подсказки ответов",
        "bullet3": "Вовлекающие мультимедийные карусели",
        "learnMore": "Подробнее"
    },
    {
        "id": "email",
        "title": "Транзакционный Email",
        "description": "Интегрированная корпоративная email-рассылка",
        "bullet1": "Надежная корпоративная email-связь",
        "bullet2": "Чеки транзакций и важные уведомления",
        "bullet3": "Автоматический омниканальный резерв",
        "learnMore": "Подробнее"
    }
],
  whyChooseBadge: "ПОЧЕМУ НАШЕ РЕШЕНИЕ",
  whyChooseTitle: "Единая коммуникация с клиентами для масштабирования",
  featuresBadge: "ФУНКЦИИ ПЛАТФОРМЫ",
  featuresTitle: "Полный набор инструментов для взаимодействия с клиентами",
  ctaBadge: "ПОСТРОЙТЕ ВАШУ ОМНИКАНАЛЬНУЮ СЕТЬ",
  ctaTitle: "Растите вместе с современными омниканальными решениями",
  ctaSubtitle: "От умной маршрутизации до диалогового ИИ: WhatsApp, Instagram, SMS и звонки в одном месте.",
};

const it: OmnichannelTranslation = {
  ...en,
  heroBadge: "SERVIZIO OMNICANALE",
  heroTitle: "Connetti Ogni Conversazione con i Clienti Tramite un'Unica Piattaforma",
  heroDesc: "iNET Global Services offre potenti soluzioni di comunicazione omnicanale che unificano molteplici canali di messaggistica in una piattaforma e API.",
  getStarted: "Inizia Ora",
  contactUs: "Contattaci",
  whyServiceBadge: "CANALI INCLUSI",
  whyServiceTitle: "Perché Scegliere la Nostra Piattaforma Omnicanale",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Comunica tramite conversazioni interattive su WhatsApp",
        "bullet1": "Media ricchi e cataloghi prodotto interattivi",
        "bullet2": "Profilo aziendale ufficiale verificato",
        "bullet3": "Flussi automatizzati con chatbot intelligenti",
        "learnMore": "Scopri di più"
    },
    {
        "id": "voice-calls",
        "title": "Chiamate Vocali (Voice Calls)",
        "description": "Comunicazione vocale aziendale ad alta fedeltà",
        "bullet1": "Terminazione vocale globale dalla chiarezza cristallina",
        "bullet2": "Instradamento intelligente SIP e WebRTC",
        "bullet3": "Interconnessioni dirette con operatori di rete",
        "learnMore": "Scopri di più"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Coinvolgi i tuoi clienti direttamente su Telegram",
        "bullet1": "Messaggistica conversazionale istantanea",
        "bullet2": "Interazioni protette e gestite da bot",
        "bullet3": "Canali broadcast e gruppi dedicati",
        "learnMore": "Scopri di più"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Connettiti tramite i messaggi diretti di Instagram",
        "bullet1": "Automazione delle risposte ai Direct Messages",
        "bullet2": "Menzioni nelle Stories e risposte rapide",
        "bullet3": "Supporto clienti ottimizzato per l'e-commerce",
        "learnMore": "Scopri di più"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Raggiungi il tuo pubblico con Facebook Messenger",
        "bullet1": "Conversazioni automatiche su Messenger",
        "bullet2": "Caroselli di prodotti e schede multimediali",
        "bullet3": "Casella di posta unificata per i clienti",
        "learnMore": "Scopri di più"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Entra in contatto con i clienti su TikTok",
        "bullet1": "Coinvolgimento diretto delle community mobile",
        "bullet2": "Risposte immediate alle richieste di supporto",
        "bullet3": "Interazione sociale nativa per smartphone",
        "learnMore": "Scopri di più"
    },
    {
        "id": "live-chat",
        "title": "Widget Live Chat",
        "description": "Conversazioni in tempo reale con i visitatori del sito",
        "bullet1": "Widget facilmente integrabile su qualsiasi sito web",
        "bullet2": "Dialoghi in tempo reale con i potenziali acquirenti",
        "bullet3": "Passaggio fluido ed immediato agli operatori",
        "learnMore": "Scopri di più"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Messaggistica conversazionale evoluta di nuova generazione",
        "bullet1": "Identità e loghi del mittente verificati",
        "bullet2": "Pulsanti d'azione rapida e risposte suggerite",
        "bullet3": "Caroselli visivi ad altissimo tasso di conversione",
        "learnMore": "Scopri di più"
    },
    {
        "id": "email",
        "title": "Email Transazionali",
        "description": "Comunicazione email aziendale integrata nel flusso",
        "bullet1": "Comunicazione aziendale integrata e sicura",
        "bullet2": "Ricevute e avvisi transazionali importanti",
        "bullet3": "Canale di fallback omnicanale automatico",
        "learnMore": "Scopri di più"
    }
],
  whyChooseBadge: "PERCHÉ LA NOSTRA SOLUZIONE",
  whyChooseTitle: "Comunicazione Unificata Costruita per la Scalabilità",
  featuresBadge: "CARATTERISTICHE DELLA PIATTAFORMA",
  featuresTitle: "Funzionalità Complete per il Coinvolgimento dei Clienti",
  ctaBadge: "COSTRUISCI LA TUA RETE OMNICANALE",
  ctaTitle: "Cresci con le Moderne Soluzioni Omnicanale",
  ctaSubtitle: "Dall'instradamento intelligente all'IA conversazionale: WhatsApp, Instagram, SMS e Voce uniti.",
};

const ko: OmnichannelTranslation = {
  ...en,
  heroBadge: "옴니채널 서비스",
  heroTitle: "하나의 플랫폼으로 모든 고객 대화를 연결하세요",
  heroDesc: "iNET Global Services는 여러 온라인 메시징 채널을 하나의 플랫폼과 API로 통합하는 강력한 옴니채널 통신 솔루션을 제공합니다.",
  getStarted: "시작하기",
  contactUs: "문의하기",
  whyServiceBadge: "지원 채널",
  whyServiceTitle: "당사의 옴니채널 플랫폼을 선택해야 하는 이유",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "WhatsApp 대화를 통한 실시간 고객 소통",
        "bullet1": "풍부한 멀티미디어 및 인터랙티브 상품 카탈로그",
        "bullet2": "공식 인증된 비즈니스 프로필 마크",
        "bullet3": "지능형 챗봇 자동화 워크플로우",
        "learnMore": "더 알아보기"
    },
    {
        "id": "voice-calls",
        "title": "음성 통화 (Voice Calls)",
        "description": "기업을 위한 고품질 글로벌 음성 커뮤니케이션",
        "bullet1": "선명하고 깨끗한 전 세계 음성 통화 연결",
        "bullet2": "지능형 SIP 및 WebRTC 기반 최적 라우팅",
        "bullet3": "글로벌 통신사 직결 회선망 확보",
        "learnMore": "더 알아보기"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Telegram 채널을 통해 고객과 빠르게 소통",
        "bullet1": "신속하고 안전한 대화형 메시징",
        "bullet2": "강력한 봇 기반 자동화 응답",
        "bullet3": "공식 브로드캐스트 채널 및 커뮤니티 그룹",
        "learnMore": "더 알아보기"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Instagram 다이렉트 메시지를 통한 고객 참여",
        "bullet1": "DM(다이렉트 메시지) 자동화 처리",
        "bullet2": "스토리 언급 자동 응답 및 빠른 답변 칩",
        "bullet3": "이커머스 전용 고객 지원 솔루션",
        "learnMore": "더 알아보기"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Facebook Messenger로 전 세계 고객과 대화",
        "bullet1": "Messenger 자동화 대화 및 상담",
        "bullet2": "리치 미디어 캐러셀 및 상품 카드",
        "bullet3": "모든 고객 문의를 모아보는 통합 수신함",
        "learnMore": "더 알아보기"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "TikTok 플랫폼에서 최신 모바일 세대와 소통",
        "bullet1": "타깃 잠재 고객과의 직접적인 다이렉트 소통",
        "bullet2": "신속한 문의 응대 및 친절한 지원",
        "bullet3": "모바일 환경에 최적화된 소셜 인터랙션",
        "learnMore": "더 알아보기"
    },
    {
        "id": "live-chat",
        "title": "라이브 채팅 플러그인",
        "description": "웹사이트 방문자와의 실시간 실시간 상담",
        "bullet1": "모든 웹사이트에 손쉽게 삽입 가능한 위젯",
        "bullet2": "방문 고객과의 즉각적인 실시간 대화",
        "bullet3": "챗봇에서 전문 상담원으로의 자연스러운 전환",
        "learnMore": "더 알아보기"
    },
    {
        "id": "rcs",
        "title": "RCS 비즈니스 메시징",
        "description": "풍부한 표현력의 차세대 대화형 메시징",
        "bullet1": "공식 발신자 브랜드 인증 및 로고",
        "bullet2": "원터치 추천 액션 버튼 및 빠른 답장",
        "bullet3": "높은 반응을 이끌어내는 인터랙티브 캐러셀",
        "learnMore": "더 알아보기"
    },
    {
        "id": "email",
        "title": "트랜잭션 이메일",
        "description": "옴니채널과 유기적으로 결합된 기업용 이메일",
        "bullet1": "통합된 고신뢰 기업 비즈니스 이메일",
        "bullet2": "주문 내역, 영수증 및 중요 알림 발송",
        "bullet3": "옴니채널 연동 자동 안전 폴백",
        "learnMore": "더 알아보기"
    }
],
  whyChooseBadge: "솔루션의 강점",
  whyChooseTitle: "확장성을 위해 구축된 통합 고객 커뮤니케이션",
  featuresBadge: "플랫폼 주요 기능",
  featuresTitle: "완벽한 고객 인게이지먼트 역량",
  ctaBadge: "옴니채널 네트워크를 구축하세요",
  ctaTitle: "최신 옴니채널 솔루션으로 비즈니스를 성장시키세요",
  ctaSubtitle: "지능형 라우팅부터 대화형 AI까지, WhatsApp, Instagram, SMS, 음성을 한곳에서 관리하세요.",
};

const nl: OmnichannelTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL DIENST",
  heroTitle: "Verbind Elk Klantgesprek via Eén Platform",
  heroDesc: "iNET Global Services biedt krachtige omnichannel communicatieoplossingen die meerdere messaging-kanalen verenigen in één platform en API.",
  getStarted: "Aan de slag",
  contactUs: "Contacteer ons",
  whyServiceBadge: "INBEGREPEN KANALEN",
  whyServiceTitle: "Waarom Kiezen voor Ons Omnichannel Platform",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Verbind via interactieve gesprekken op WhatsApp",
        "bullet1": "Rijke media en interactieve productcatalogi",
        "bullet2": "Geverifieerd officieel bedrijfsprofiel",
        "bullet3": "Geautomatiseerde chatbot-workflows",
        "learnMore": "Meer informatie"
    },
    {
        "id": "voice-calls",
        "title": "Spraakoproepen (Voice Calls)",
        "description": "Zakelijke spraakcommunicatie in hoge kwaliteit",
        "bullet1": "Kraakheldere wereldwijde spraakterminatie",
        "bullet2": "Intelligente SIP- en WebRTC-routering",
        "bullet3": "Directe netwerkkoppelingen met providers",
        "learnMore": "Meer informatie"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Betrek klanten direct via Telegram",
        "bullet1": "Directe en snelle gespreksberichten",
        "bullet2": "Veilige interacties aangedreven door bots",
        "bullet3": "Broadcast-kanalen en community-groepen",
        "learnMore": "Meer informatie"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Verbind via Instagram Direct Messages",
        "bullet1": "Automatisering van directe berichten (DM's)",
        "bullet2": "Reacties op story-vermeldingen en snelle antwoorden",
        "bullet3": "Klantenservice geoptimaliseerd voor e-commerce",
        "learnMore": "Meer informatie"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Communiceer met klanten via Facebook Messenger",
        "bullet1": "Geautomatiseerde Messenger-gesprekken",
        "bullet2": "Multimediale carrouselkaarten en actieknoppen",
        "bullet3": "Gecentraliseerde inbox voor al uw klanten",
        "learnMore": "Meer informatie"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Bereik en betrek uw doelgroep op TikTok",
        "bullet1": "Directe interactie met mobiele gebruikers",
        "bullet2": "Snelle reacties op vragen en klantenservice",
        "bullet3": "Sociale communicatie ontworpen voor smartphones",
        "learnMore": "Meer informatie"
    },
    {
        "id": "live-chat",
        "title": "Live Chat Widget",
        "description": "Realtime communicatie met websitebezoekers",
        "bullet1": "Eenvoudig integreerbare website-widget",
        "bullet2": "Directe gesprekken met actieve bezoekers",
        "bullet3": "Soepele overdracht naar medewerkers",
        "learnMore": "Meer informatie"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Rijke conversationele berichten van de nieuwste generatie",
        "bullet1": "Geverifieerde afzenderidentiteit en logo's",
        "bullet2": "Actieknoppen en voorgestelde antwoordopties",
        "bullet3": "Boeiende beeldcarrousels met hoge conversie",
        "learnMore": "Meer informatie"
    },
    {
        "id": "email",
        "title": "Transactionele E-mail",
        "description": "Geïntegreerde zakelijke e-mailcommunicatie",
        "bullet1": "Betrouwbare zakelijke communicatie",
        "bullet2": "Aankoopbewijzen en statusmeldingen",
        "bullet3": "Automatische omnichannel-terugvaloptie",
        "learnMore": "Meer informatie"
    }
],
  whyChooseBadge: "WAAROM ONZE OPLOSSING",
  whyChooseTitle: "Geünificeerde Klantcommunicatie Gebouwd voor Schaal",
  featuresBadge: "PLATFORMFUNCTIES",
  featuresTitle: "Complete Klantbetrokkenheidsmogelijkheden",
  ctaBadge: "BOUW UW OMNICHANNEL NETWERK",
  ctaTitle: "Groei met Moderne Omnichannel Oplossingen",
  ctaSubtitle: "Van intelligente routering tot AI: beheer WhatsApp, Instagram, SMS en Spraak op één centrale plek.",
};

const tr: OmnichannelTranslation = {
  ...en,
  heroBadge: "ÇOK KANALLI (OMNICHANNEL) HİZMET",
  heroTitle: "Her Müşteri İletişimini Tek Bir Platform Üzerinden Bağlayın",
  heroDesc: "iNET Global Services, birden çok mesajlaşma kanalını tek bir platform ve API'de birleştiren güçlü çok kanallı iletişim çözümleri sunar.",
  getStarted: "Başlayın",
  contactUs: "Bize Ulaşın",
  whyServiceBadge: "DAHİL OLAN KANALLAR",
  whyServiceTitle: "Neden Omnichannel Platformumuzu Seçmelisiniz",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "WhatsApp sohbetleri üzerinden müşterilerle etkileşim kurun",
        "bullet1": "Zengin medya ve interaktif ürün katalogları",
        "bullet2": "Doğrulanmış resmi işletme profili",
        "bullet3": "Otomatik chatbot iş akışları",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "voice-calls",
        "title": "Sesli Aramalar (Voice Calls)",
        "description": "Kurumsal düzeyde yüksek kaliteli sesli iletişim",
        "bullet1": "Kristal netliğinde küresel ses sonlandırma",
        "bullet2": "Akıllı SIP ve WebRTC yönlendirme altyapısı",
        "bullet3": "Operatörlerle doğrudan yüksek hızlı bağlantı",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Telegram üzerinden müşterilerinizle hızlı iletişim kurun",
        "bullet1": "Anlık ve etkileşimli sohbet mesajlaşması",
        "bullet2": "Bot destekli güvenli otomatik yanıtlar",
        "bullet3": "Yayın kanalları ve topluluk grupları",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Instagram Direkt Mesajları ile müşterilere ulaşın",
        "bullet1": "Doğrudan mesaj (DM) otomasyonu",
        "bullet2": "Hikaye bahsetmelerine yanıt ve hızlı butonlar",
        "bullet3": "E-ticaret için optimize edilmiş müşteri desteği",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Facebook Messenger ile küresel kitlelerle görüşün",
        "bullet1": "Otomatik Messenger sohbetleri ve karşılama",
        "bullet2": "Zengin medya karuselleri ve ürün kartları",
        "bullet3": "Tüm talepleri toplayan tek müşteri gelen kutusu",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "TikTok üzerinden genç ve dinamik kitleye ulaşın",
        "bullet1": "Doğrudan kitle etkileşimi ve sohbet",
        "bullet2": "Sorulara anında yanıt ve destek",
        "bullet3": "Mobil öncelikli modern sosyal etkileşim",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "live-chat",
        "title": "Canlı Destek Eklentisi",
        "description": "Web sitesi ziyaretçileriyle gerçek zamanlı sohbet",
        "bullet1": "Web sitelerine kolayca entegre edilen widget",
        "bullet2": "Ziyaretçilerle gerçek zamanlı görüşmeler",
        "bullet3": "Müşteri temsilcilerine kesintisiz aktarım",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Yeni nesil zengin ve interaktif mesajlaşma",
        "bullet1": "Doğrulanmış gönderici rozeti ve logolar",
        "bullet2": "Hızlı işlem butonları ve önerilen yanıtlar",
        "bullet3": "Yüksek dönüşüm sağlayan kaydırmalı kartlar",
        "learnMore": "Daha fazla bilgi"
    },
    {
        "id": "email",
        "title": "İşlemsel E-Posta",
        "description": "Çok kanallı platforma entegre kurumsal e-posta",
        "bullet1": "Entegre ve güvenilir kurumsal iletişim",
        "bullet2": "İşlem makbuzları ve kritik bildirimler",
        "bullet3": "Otomatik çok kanallı yedek iletim rotası",
        "learnMore": "Daha fazla bilgi"
    }
],
  whyChooseBadge: "NEDEN BİZİM ÇÖZÜMÜMÜZ",
  whyChooseTitle: "Büyüme İçin Tasarlanmış Birleşik Müşteri İletişimi",
  featuresBadge: "PLATFORM ÖZELLİKLERİ",
  featuresTitle: "Kapsamlı Müşteri Etkileşim Yetenekleri",
  ctaBadge: "OMNICHANNEL AĞINIZI KURUN",
  ctaTitle: "Modern Çok Kanallı Çözümlerle Büyüyün",
  ctaSubtitle: "Akıllı yönlendirmeden yapay zekaya; WhatsApp, Instagram, SMS ve Sesi tek bir yerden yönetin.",
};

const id: OmnichannelTranslation = {
  ...en,
  heroBadge: "LAYANAN OMNICHANNEL",
  heroTitle: "Hubungkan Setiap Percakapan Pelanggan Melalui Satu Platform",
  heroDesc: "iNET Global Services menawarkan solusi komunikasi omnichannel andal yang menyatukan berbagai saluran pesan ke dalam satu platform dan API.",
  getStarted: "Mulai Sekarang",
  contactUs: "Hubungi Kami",
  whyServiceBadge: "SALURAN TERSEDIA",
  whyServiceTitle: "Mengapa Memilih Platform Omnichannel Kami",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Terhubung melalui percakapan interaktif di WhatsApp",
        "bullet1": "Media kaya dan katalog produk interaktif",
        "bullet2": "Profil bisnis resmi terverifikasi dengan centang",
        "bullet3": "Alur kerja chatbot cerdas terotomatisasi",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "voice-calls",
        "title": "Panggilan Suara (Voice Calls)",
        "description": "Komunikasi suara korporat berkualitas tinggi",
        "bullet1": "Terminasi suara global jernih sejernih kristal",
        "bullet2": "Perutean pintar berbasis SIP dan WebRTC",
        "bullet3": "Konektivitas langsung ke operator telekomunikasi",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Libatkan pelanggan secara cepat melalui Telegram",
        "bullet1": "Pesan percakapan instan dan aman",
        "bullet2": "Interaksi terotomatisasi dengan bot cerdas",
        "bullet3": "Saluran siaran publik dan grup komunitas",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Terhubung melalui pesan langsung di Instagram",
        "bullet1": "Otomatisasi pesan langsung (Direct Message)",
        "bullet2": "Respons otomatis sebutan cerita & balasan cepat",
        "bullet3": "Dukungan pelanggan optimal untuk e-commerce",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Berkomunikasi dengan audiens melalui Facebook Messenger",
        "bullet1": "Percakapan terotomatisasi di Messenger",
        "bullet2": "Kartu produk dan carousel media visual",
        "bullet3": "Kotak masuk terpadu untuk semua pertanyaan",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Jangkau pelanggan aktif di platform TikTok",
        "bullet1": "Interaksi langsung dengan audiens modern",
        "bullet2": "Tanggapan cepat untuk pertanyaan dan bantuan",
        "bullet3": "Interaksi sosial berbasis seluler terkini",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "live-chat",
        "title": "Widget Obrolan Langsung",
        "description": "Percakapan real-time dengan pengunjung situs web Anda",
        "bullet1": "Widget praktis yang mudah disematkan di web",
        "bullet2": "Komunikasi langsung saat pengunjung aktif",
        "bullet3": "Pengalihan mulus ke agen layanan pelanggan",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Pesan percakapan interaktif generasi terbaru",
        "bullet1": "Identitas merek pengirim dan logo terverifikasi",
        "bullet2": "Tombol aksi instan dan saran balasan cepat",
        "bullet3": "Kartu carousel beresolusi tinggi dengan interaksi tinggi",
        "learnMore": "Pelajari selengkapnya"
    },
    {
        "id": "email",
        "title": "Email Transaksional",
        "description": "Komunikasi email bisnis terintegrasi",
        "bullet1": "Komunikasi korporat terpadu dan aman",
        "bullet2": "Bukti transaksi dan pemberitahuan penting",
        "bullet3": "Rute pencadangan otomatis lintas omnichannel",
        "learnMore": "Pelajari selengkapnya"
    }
],
  whyChooseBadge: "MENGAPA SOLUSI KAMI",
  whyChooseTitle: "Komunikasi Pelanggan Terpadu yang Dibangun untuk Skala Besar",
  featuresBadge: "FITUR PLATFORM",
  featuresTitle: "Kemampuan Keterlibatan Pelanggan Lengkap",
  ctaBadge: "BANGUN JARINGAN OMNICHANNEL ANDA",
  ctaTitle: "Berkembang dengan Solusi Omnichannel Modern",
  ctaSubtitle: "Dari perutean cerdas hingga AI, satukan WhatsApp, Instagram, SMS, dan Suara di satu tempat.",
};

const vi: OmnichannelTranslation = {
  ...en,
  heroBadge: "DỊCH VỤ ĐA KÊNH (OMNICHANNEL)",
  heroTitle: "Kết Nối Mọi Cuộc Trò Chuyện Khách Hàng Qua Một Nền Tảng",
  heroDesc: "iNET Global Services cung cấp giải pháp truyền thông đa kênh hợp nhất nhiều luồng tin nhắn vào một nền tảng và API duy nhất.",
  getStarted: "Bắt Đầu",
  contactUs: "Liên Hệ Chúng Tôi",
  whyServiceBadge: "KÊNH TÍCH HỢP",
  whyServiceTitle: "Tại Sao Nên Chọn Nền Tảng Đa Kênh Của Chúng Tôi",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Kết nối thông qua các cuộc trò chuyện trên WhatsApp",
        "bullet1": "Đa phương tiện phong phú và danh mục sản phẩm tương tác",
        "bullet2": "Hồ sơ doanh nghiệp chính thức được xác minh",
        "bullet3": "Quy trình chatbot tự động hóa thông minh",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "voice-calls",
        "title": "Cuộc Gọi Thoại (Voice Calls)",
        "description": "Truyền thông thoại doanh nghiệp chất lượng âm thanh cao",
        "bullet1": "Định tuyến đầu cuối cuộc gọi toàn cầu rõ ràng như pha lê",
        "bullet2": "Định tuyến thông minh dựa trên giao thức SIP và WebRTC",
        "bullet3": "Kết nối trực tiếp tốc độ cao với các nhà mạng",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Tương tác với khách hàng hiệu quả qua Telegram",
        "bullet1": "Nhắn tin hội thoại bảo mật và nhanh chóng",
        "bullet2": "Tự động hóa tương tác qua Bot thông minh",
        "bullet3": "Kênh truyền thông phát sóng và hội nhóm lớn",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Kết nối thông qua tin nhắn trực tiếp Instagram",
        "bullet1": "Tự động hóa tin nhắn trực tiếp (Direct Message)",
        "bullet2": "Phản hồi nhắc đến trong Story và trả lời nhanh",
        "bullet3": "Chăm sóc khách hàng tối ưu cho thương mại điện tử",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Tiếp cận khách hàng qua Facebook Messenger",
        "bullet1": "Hội thoại tự động trên nền tảng Messenger",
        "bullet2": "Thẻ trưng bày sản phẩm dạng băng chuyền đa phương tiện",
        "bullet3": "Hộp thư đến hợp nhất quản lý mọi khách hàng",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Tương tác với thế hệ khách hàng trẻ trên TikTok",
        "bullet1": "Giao tiếp trực tiếp với khán giả di động",
        "bullet2": "Phản hồi thắc mắc và hỗ trợ kịp thời",
        "bullet3": "Tương tác mạng xã hội ưu tiên trải nghiệm di động",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "live-chat",
        "title": "Tiện Ích Trò Chuyện Trực Tuyến",
        "description": "Trò chuyện thời gian thực với khách truy cập website",
        "bullet1": "Tiện ích dễ dàng tích hợp vào mọi website",
        "bullet2": "Đối thoại trực tiếp với khách đang online",
        "bullet3": "Chuyển giao mượt mà sang nhân viên tư vấn",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Tin nhắn hội thoại đa phương tiện thế hệ mới",
        "bullet1": "Nhận diện thương hiệu và logo người gửi đã xác minh",
        "bullet2": "Nút hành động nhanh và tùy chọn trả lời gợi ý",
        "bullet3": "Thẻ băng chuyền tương tác với tỷ lệ chuyển đổi cao",
        "learnMore": "Tìm hiểu thêm"
    },
    {
        "id": "email",
        "title": "Email Giao Dịch",
        "description": "Truyền thông email doanh nghiệp tích hợp đa kênh",
        "bullet1": "Truyền thông doanh nghiệp tích hợp và tin cậy",
        "bullet2": "Biên nhận giao dịch và thông báo trạng thái quan trọng",
        "bullet3": "Kênh dự phòng tự động đồng bộ trên toàn hệ thống",
        "learnMore": "Tìm hiểu thêm"
    }
],
  whyChooseBadge: "ƯU THẾ GIẢI PHÁP",
  whyChooseTitle: "Giao Tiếp Khách Hàng Hợp Nhất Cho Mọi Quy Mô",
  featuresBadge: "TÍNH NĂNG NỀN TẢNG",
  featuresTitle: "Khả Năng Tương Tác Khách Hàng Toàn Diện",
  ctaBadge: "XÂY DỰNG MẠNG LƯỚI ĐA KÊNH",
  ctaTitle: "Phát Triển Với Giải Pháp Đa Kênh Hiện Đại",
  ctaSubtitle: "Từ định tuyến thông minh đến AI, quản lý tập trung WhatsApp, Instagram, SMS và Thoại.",
};

const pl: OmnichannelTranslation = {
  ...en,
  heroBadge: "USŁUGA OMNICHANNEL",
  heroTitle: "Połącz Każdą Rozmowę z Klientem na Jednej Platformie",
  heroDesc: "iNET Global Services oferuje solidne rozwiązania komunikacji omnichannel łączące liczne kanały wiadomości w jedną platformę i API.",
  getStarted: "Rozpocznij",
  contactUs: "Skontaktuj się",
  whyServiceBadge: "DOSTĘPNE KANAŁY",
  whyServiceTitle: "Dlaczego Warto Wybrać Naszą Platformę Omnichannel",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Komunikuj się poprzez interaktywne rozmowy w aplikacji WhatsApp",
        "bullet1": "Bogate multimedia i interaktywne katalogi produktów",
        "bullet2": "Zweryfikowany oficjalny profil biznesowy",
        "bullet3": "Zautomatyzowane ścieżki inteligentnych chatbotów",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "voice-calls",
        "title": "Połączenia Głosowe (Voice Calls)",
        "description": "Krystalicznie czysta komunikacja głosowa dla przedsiębiorstw",
        "bullet1": "Globalna terminacja połączeń głosowych najwyższej jakości",
        "bullet2": "Inteligentne trasowanie oparte na protokołach SIP i WebRTC",
        "bullet3": "Bezpośrednia łączność operatorska Tier-1",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Angażuj klientów bezpośrednio w aplikacji Telegram",
        "bullet1": "Błyskawiczna i bezpieczna wymiana wiadomości",
        "bullet2": "Automatyzacja interakcji za pomocą botów",
        "bullet3": "Oficjalne kanały nadawcze i grupy społecznościowe",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Buduj relacje poprzez wiadomości bezpośrednie na Instagramie",
        "bullet1": "Automatyzacja wiadomości prywatnych (Direct Messages)",
        "bullet2": "Odpowiedzi na wzmianki w relacjach Stories i szybkie reakcje",
        "bullet3": "Wsparcie klienta zoptymalizowane pod e-commerce",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Docieraj do odbiorców poprzez komunikator Facebook Messenger",
        "bullet1": "Zautomatyzowane rozmowy w aplikacji Messenger",
        "bullet2": "Karty produktowe i karuzele multimedialne",
        "bullet3": "Jedna zintegrowana skrzynka odbiorcza dla klientów",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Angażuj nowoczesnych odbiorców na platformie TikTok",
        "bullet1": "Bezpośrednia interakcja ze społecznością mobilną",
        "bullet2": "Szybkie odpowiadanie na zapytania i wsparcie",
        "bullet3": "Interakcja społecznościowa dostosowana do smartfonów",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "live-chat",
        "title": "Widget Czatu Na Żywo",
        "description": "Rozmowy w czasie rzeczywistym z gośćmi Twojej witryny",
        "bullet1": "Łatwy do wdrożenia widget na dowolnej stronie",
        "bullet2": "Bezpośredni dialog z aktywnymi odwiedzającymi",
        "bullet3": "Płynne przekazywanie rozmowy do konsultantów",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Bogate interaktywne wiadomości nowej generacji",
        "bullet1": "Zweryfikowany profil nadawcy i oficjalne logo",
        "bullet2": "Przyciski akcji oraz sugerowane odpowiedzi",
        "bullet3": "Karuzele graficzne o wysokiej skuteczności",
        "learnMore": "Dowiedz się więcej"
    },
    {
        "id": "email",
        "title": "Transakcyjny E-mail",
        "description": "Zintegrowana firmowa komunikacja pocztowa",
        "bullet1": "Niezawodna zintegrowana komunikacja biznesowa",
        "bullet2": "Potwierdzenia transakcji i kluczowe powiadomienia",
        "bullet3": "Automatyczny rezerwowy kanał wielokanałowy",
        "learnMore": "Dowiedz się więcej"
    }
],
  whyChooseBadge: "DLACZEGO NASZE ROZWIĄZANIE",
  whyChooseTitle: "Zunifikowana Komunikacja z Klientem Stworzona do Skalowania",
  featuresBadge: "FUNKCJE PLATFORMY",
  featuresTitle: "Kompletne Narzędzia Zaangażowania Klienta",
  ctaBadge: "ZBUDUJ SWOJĄ SIEĆ OMNICHANNEL",
  ctaTitle: "Rozwijaj Się Dzięki Nowoczesnym Rozwiązaniom Omnichannel",
  ctaSubtitle: "Od inteligentnego routingu po AI: połącz WhatsApp, Instagram, SMS i Voice w jednym miejscu.",
};

const th: OmnichannelTranslation = {
  ...en,
  heroBadge: "บริการออมนิแชนเนล",
  heroTitle: "เชื่อมต่อทุกบทสนทนากับลูกค้าผ่านแพลตฟอร์มเดียว",
  heroDesc: "iNET Global Services ให้บริการโซลูชันการสื่อสารแบบ Omnichannel ที่ผสานรวมช่องทางการส่งข้อความออนไลน์หลายช่องทางไว้ในแพลตฟอร์มเดียวและ API",
  getStarted: "เริ่มต้นใช้งาน",
  contactUs: "ติดต่อเรา",
  whyServiceBadge: "ช่องทางที่รองรับ",
  whyServiceTitle: "ทำไมต้องเลือกแพลตฟอร์ม Omnichannel ของเรา",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "เชื่อมต่อผ่านการสนทนาทางธุรกิจบน WhatsApp",
        "bullet1": "สื่อมัลติมีเดียและแคตตาล็อกสินค้าแบบอินเทอร์แอคทีฟ",
        "bullet2": "โปรไฟล์ธุรกิจอย่างเป็นทางการที่ผ่านการยืนยัน",
        "bullet3": "เวิร์กโฟลว์แชทบอทอัตโนมัติอัจฉริยะ",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "voice-calls",
        "title": "บริการโทรด้วยเสียง (Voice Calls)",
        "description": "การสื่อสารด้วยเสียงระดับองค์กรที่มีความคมชัดสูง",
        "bullet1": "บริการส่งสัญญาณเสียงทั่วโลกที่คมชัดระดับพรีเมียม",
        "bullet2": "ระบบเราต์ติ้งอัจฉริยะด้วย SIP และ WebRTC",
        "bullet3": "การเชื่อมต่อตรงกับผู้ให้บริการเครือข่ายชั้นนำ",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "มีส่วนร่วมกับลูกค้าอย่างรวดเร็วผ่าน Telegram",
        "bullet1": "การส่งข้อความสนทนาแบบเรียลไทม์ที่ปลอดภัย",
        "bullet2": "การโต้ตอบอัตโนมัติด้วยบอทอัจฉริยะ",
        "bullet3": "ช่องทางบรอดแคสต์และกลุ่มชุมชนขนาดใหญ่",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "เชื่อมต่อกับลูกค้าผ่านข้อความส่วนตัวบน Instagram",
        "bullet1": "ระบบตอบกลับข้อความอัตโนมัติ (Direct Message)",
        "bullet2": "ตอบกลับการแท็กใน Story และปุ่มลัดตอบด่วน",
        "bullet3": "การดูแลลูกค้าสำหรับธุรกิจอีคอมเมิร์ซโดยเฉพาะ",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "สื่อสารกับกลุ่มเป้าหมายผ่าน Facebook Messenger",
        "bullet1": "การสนทนาอัตโนมัติบน Messenger",
        "bullet2": "การ์ดแสดงสินค้าและแคตตาล็อกแบบเลื่อนดูได้",
        "bullet3": "กล่องข้อความรวมศูนย์จัดการลูกค้าทั้งหมด",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "ดึงดูดและมีส่วนร่วมกับลูกค้าบนแพลตฟอร์ม TikTok",
        "bullet1": "การปฏิสัมพันธ์โดยตรงกับผู้ชมยุคใหม่บนมือถือ",
        "bullet2": "การตอบคำถามและให้ความช่วยเหลืออย่างรวดเร็ว",
        "bullet3": "การสื่อสารทางสังคมที่ออกแบบมาเพื่อสมาร์ทโฟน",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "live-chat",
        "title": "วิดเจ็ตแชทสด (Live Chat)",
        "description": "การสนทนาแบบเรียลไทม์กับผู้เยี่ยมชมเว็บไซต์ของคุณ",
        "bullet1": "วิดเจ็ตที่ติดตั้งง่ายบนทุกหน้าเว็บไซต์",
        "bullet2": "เปิดบทสนทนาทันทีเมื่อมีผู้เยี่ยมชมกำลังใช้งาน",
        "bullet3": "การโอนสายสนทนาไปยังเจ้าหน้าที่อย่างราบรื่น",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "การส่งข้อความเชิงโต้ตอบยุคใหม่ที่เต็มไปด้วยฟีเจอร์",
        "bullet1": "โลโก้และเครื่องหมายยืนยันตัวตนผู้ส่งอย่างเป็นทางการ",
        "bullet2": "ปุ่มแนะนำการดำเนินการและตัวเลือกตอบกลับด่วน",
        "bullet3": "การ์ดภาพสไลด์สินค้าที่กระตุ้นการตัดสินใจซื้อ",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    {
        "id": "email",
        "title": "อีเมลธุรกรรม (Email)",
        "description": "การสื่อสารทางอีเมลระดับองค์กรที่ผสานรวมเข้าด้วยกัน",
        "bullet1": "การสื่อสารทางธุรกิจที่เชื่อถือได้และครบวงจร",
        "bullet2": "ใบเสร็จธุรกรรมและการแจ้งเตือนที่สำคัญ",
        "bullet3": "เส้นทางส่งสำรองอัตโนมัติของระบบ Omnichannel",
        "learnMore": "เรียนรู้เพิ่มเติม"
    }
],
  whyChooseBadge: "จุดเด่นของโซลูชัน",
  whyChooseTitle: "การสื่อสารกับลูกค้าแบบครบวงจรที่สร้างขึ้นเพื่อการเติบโต",
  featuresBadge: "ฟังก์ชันแพลตฟอร์ม",
  featuresTitle: "ขีดความสามารถการมีส่วนร่วมกับลูกค้าอย่างสมบูรณ์แบบ",
  ctaBadge: "สร้างเครือข่ายออมนิแชนเนลของคุณ",
  ctaTitle: "เติบโตไปพร้อมกับโซลูชัน Omnichannel ที่ทันสมัย",
  ctaSubtitle: "ตั้งแต่การกำหนดเส้นทางอัจฉริยะไปจนถึง AI รวม WhatsApp, Instagram, SMS และ Voice ไว้ที่เดียว",
};

const tl: OmnichannelTranslation = {
  ...en,
  heroBadge: "SERBISYO NG OMNICHANNEL",
  heroTitle: "Ikonekta ang Bawat Usapan sa Kustomer sa Isang Platform",
  heroDesc: "Nag-aalok ang iNET Global Services ng matibay na mga solusyon sa omnichannel na pinagsasama ang maramihang mga channel sa pagmemensahe sa isang platform at API.",
  getStarted: "Magsimula Na",
  contactUs: "Makipag-ugnayan",
  whyServiceBadge: "KASAMANG MGA CHANNEL",
  whyServiceTitle: "Bakit Piliin ang Aming Omnichannel Platform",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "Kumonekta sa pamamagitan ng mga usapan sa WhatsApp",
        "bullet1": "Rich media at mga interaktibong katalogo ng produkto",
        "bullet2": "Opisyal at beripikadong profile ng negosyo",
        "bullet3": "Awtomatikong chatbot workflows para sa tuluy-tuloy na serbisyo",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "voice-calls",
        "title": "Tawag sa Boses (Voice Calls)",
        "description": "Mataas na kalidad ng komunikasyon sa boses ng kumpanya",
        "bullet1": "Napakalinaw na pandaigdigang pagtatapos ng boses",
        "bullet2": "Matalinong SIP at WebRTC routing system",
        "bullet3": "Direktang koneksyon sa mga telecom carriers",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Hikayatin ang mga customer gamit ang Telegram",
        "bullet1": "Agad-agad at ligtas na pakikipag-chat",
        "bullet2": "Matalinong interaksyon gamit ang bots",
        "bullet3": "Mga broadcast channels at pampublikong grupo",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Kumonekta gamit ang direktang pagmemensahe sa Instagram",
        "bullet1": "Awtomatisasyon ng mga Direktang Mensahe (DMs)",
        "bullet2": "Pagsagot sa mga pagbanggit sa Story at mabilisang tugon",
        "bullet3": "Suporta sa customer na dinisenyo para sa e-commerce",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Makipag-ugnayan sa mga customer sa pamamagitan ng Messenger",
        "bullet1": "Awtomatikong mga usapan sa Messenger",
        "bullet2": "Mga visual card at carousel ng produkto",
        "bullet3": "Pinag-isang inbox para sa lahat ng customer",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "Makipag-ugnayan sa mga modernong gumagamit ng TikTok",
        "bullet1": "Direktang pakikipag-ugnayan sa mobile audience",
        "bullet2": "Mabilis na pagtugon sa mga katanungan at suporta",
        "bullet3": "Pakikipagkapwa-tao na nakatuon sa karanasan sa mobile",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "live-chat",
        "title": "Plugin ng Live Chat",
        "description": "Real-time na pakikipag-usap sa mga bisita ng website",
        "bullet1": "Widget na madaling ilagay sa anumang website",
        "bullet2": "Pakikipag-usap sa mga aktibong bisita sa mismong oras",
        "bullet3": "Madaling pagpasa ng usapan sa mga buhay na ahente",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "Makabagong interaktibong pagmemensahe sa telepono",
        "bullet1": "Opisyal na logo at beripikadong tatak ng nagpadala",
        "bullet2": "Mga pindutan ng aksyon at iminungkahing sagot",
        "bullet3": "Mga nakakaengganyong carousel card para sa benta",
        "learnMore": "Alamin ang higit pa"
    },
    {
        "id": "email",
        "title": "Transactional Email",
        "description": "Pinag-isang komunikasyon sa email ng negosyo",
        "bullet1": "Maaasahang pinagsamang komunikasyon sa negosyo",
        "bullet2": "Mga resibo ng transaksyon at mahalagang alerto",
        "bullet3": "Awtomatikong backup na ruta sa buong omnichannel",
        "learnMore": "Alamin ang higit pa"
    }
],
  whyChooseBadge: "BAKIT ANG AMING SOLUSYON",
  whyChooseTitle: "Pinag-isang Komunikasyon sa Kustomer Para sa Paglago",
  featuresBadge: "MGA TAMPOK NG PLATFORM",
  featuresTitle: "Kumpletong Kakayahan sa Pakikipag-ugnayan sa Kustomer",
  ctaBadge: "BUUIN ANG IYONG OMNICHANNEL NETWORK",
  ctaTitle: "Lumago Gamit ang Makabagong mga Solusyon sa Omnichannel",
  ctaSubtitle: "Mula sa matalinong routing hanggang sa AI, pagsamahin ang WhatsApp, Instagram, SMS, at Boses sa iisang lugar.",
};

const bn: OmnichannelTranslation = {
  ...en,
  heroBadge: "অমনিচ্যানেল পরিষেবা",
  heroTitle: "একটি প্ল্যাটফর্মের মাধ্যমে প্রতিটি গ্রাহক কথোপকথন যুক্ত করুন",
  heroDesc: "iNET Global Services শক্তিশালী অমনিচ্যানেল সমাধান প্রদান করে যা একাধিক অনলাইন মেসেজিং চ্যানেলকে একক প্ল্যাটফর্ম ও API-তে একত্রিত করে।",
  getStarted: "শুরু করুন",
  contactUs: "যোগাযোগ করুন",
  whyServiceBadge: "অন্তর্ভুক্ত চ্যানেলগুলি",
  whyServiceTitle: "কেন আমাদের অমনিচ্যানেল প্ল্যাটফর্ম বেছে নেবেন",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business",
        "description": "WhatsApp কথোপকথনের মাধ্যমে গ্রাহকদের সাথে সংযুক্ত হন",
        "bullet1": "সমৃদ্ধ মিডিয়া এবং ইন্টারঅ্যাক্টিভ পণ্য ক্যাটালগ",
        "bullet2": "যাচাইকৃত অফিসিয়াল ব্যবসায়িক প্রোফাইল",
        "bullet3": "স্বয়ংক্রিয় স্মার্ট চ্যাটবট ওয়ার্কফ্লো",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "voice-calls",
        "title": "ভয়েস কল (Voice Calls)",
        "description": "ব্যবসায়িক ক্রিস্টাল-ক্লিয়ার ভয়েস যোগাযোগ",
        "bullet1": "বিশ্বমানের স্বচ্ছ ভয়েস টার্মিনেশন সুবিধা",
        "bullet2": "বুদ্ধিমান SIP এবং WebRTC রাউটিং প্রযুক্তি",
        "bullet3": "টেলিকম অপারেটরদের সাথে সরাসরি উচ্চগতির সংযোগ",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "telegram",
        "title": "Telegram",
        "description": "Telegram চ্যানেলের মাধ্যমে গ্রাহকদের সম্পৃক্ত করুন",
        "bullet1": "তাত্ক্ষণিক ও নিরাপদ কথোপকথন মেসেজিং",
        "bullet2": "স্মার্ট বট-চালিত স্বয়ংক্রিয় গ্রাহক সেবা",
        "bullet3": "ব্রডকাস্ট চ্যানেল এবং বড় কমিউনিটি গ্রুপ",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "instagram",
        "title": "Instagram",
        "description": "Instagram ডিরেক্ট মেসেজের মাধ্যমে সরাসরি যুক্ত হন",
        "bullet1": "ডিরেক্ট মেসেজ (DM) স্বয়ংক্রিয় পরিচালনা",
        "bullet2": "স্টোরি মেনশন অটো-রেসপন্স ও কুইক রিপ্লাই",
        "bullet3": "ই-কমার্সের জন্য বিশেষায়িত গ্রাহক সহায়তা",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "facebook",
        "title": "Facebook",
        "description": "Facebook Messenger-এর মাধ্যমে বিশ্বব্যাপী গ্রাহকের সাথে সংযোগ",
        "bullet1": "স্বয়ংক্রিয় Messenger গ্রাহক বার্তালাপ",
        "bullet2": "রিচ মিডিয়া ক্যারোজেল ও পণ্য প্রদর্শনী কার্ড",
        "bullet3": "সব গ্রাহক বার্তার জন্য একটি কেন্দ্রীয় ইনবক্স",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "tiktok",
        "title": "TikTok",
        "description": "TikTok প্ল্যাটফর্মে তরুণ প্রজন্মের গ্রাহকদের সাথে সম্পৃক্ত হন",
        "bullet1": "মোবাইল গ্রাহকদের সাথে সরাসরি মিথস্ক্রিয়া",
        "bullet2": "দ্রুত অনুসন্ধান সমাধান এবং গ্রাহক সমর্থন",
        "bullet3": "স্মার্টফোনের উপযোগী আধুনিক সামাজিক যোগাযোগ",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "live-chat",
        "title": "লাইভ চ্যাট উইজেট",
        "description": "ওয়েবসাইট ভিজিটরদের সাথে রিয়েল-টাইমে সরাসরি কথা বলুন",
        "bullet1": "ওয়েবসাইটে সহজে যুক্তযোগ্য চ্যাট উইজেট",
        "bullet2": "লাইভ থাকা ভিজিটরদের সাথে তাত্ক্ষণিক আলাপ",
        "bullet3": "বট থেকে সাপোর্ট এজেন্টের কাছে মসৃণ স্থানান্তর",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "rcs",
        "title": "RCS",
        "description": "পরবর্তী প্রজন্মের সমৃদ্ধ ও ইন্টারেক্টিভ মেসেজিং",
        "bullet1": "যাচাইকৃত প্রেরক ব্র্যান্ডিং ও প্রাতিষ্ঠানিক লোগো",
        "bullet2": "এক ট্যাপ অ্যাকশন বোতাম ও প্রস্তাবিত দ্রুত উত্তর",
        "bullet3": "উচ্চ রূপান্তর সৃষ্টিকারী ইন্টারেক্টিভ ক্যারোজেল",
        "learnMore": "আরও জানুন"
    },
    {
        "id": "email",
        "title": "ট্রানজ্যাকশনাল ইমেইল",
        "description": "অমনিচ্যানেলের সাথে সমন্বিত ব্যবসায়িক ইমেইল সেবা",
        "bullet1": "নির্ভরযোগ্য ব্যবসায়িক ইমেইল যোগাযোগ ব্যবস্থা",
        "bullet2": "লেনদেন রসিদ ও জরুরি বিজ্ঞপ্তি তাৎক্ষণিক প্রেরণ",
        "bullet3": "স্বয়ংক্রিয় অমনিচ্যানেল ব্যাকআপ ডেলিভারি রুট",
        "learnMore": "আরও জানুন"
    }
],
  whyChooseBadge: "আমাদের সমাধানের সুবিধা",
  whyChooseTitle: "বৃহৎ পরিসরে তৈরি সমন্বিত গ্রাহক যোগাযোগ",
  featuresBadge: "প্ল্যাটফর্মের বৈশিষ্ট্য",
  featuresTitle: "সম্পূর্ণ গ্রাহক সম্পৃক্ততার সক্ষমতা",
  ctaBadge: "আপনার অমনিচ্যানেল নেটওয়ার্ক তৈরি করুন",
  ctaTitle: "আধুনিক অমনিচ্যানেল সমাধানের সাথে এগিয়ে যান",
  ctaSubtitle: "স্মার্ট রাউটিং থেকে শুরু করে কৃত্রিম বুদ্ধিমত্তা; হোয়াটসঅ্যাপ, ইনস্টাগ্রাম, এসএমএস এবং ভয়েস এক জায়গায় পরিচালনা করুন।",
};

const mr: OmnichannelTranslation = {
  ...en,
  heroBadge: "ऑम्नीचॅनेल सेवा",
  heroTitle: "एकाच प्लॅटफॉर्मवरून प्रत्येक ग्राहक संवाद जोडा",
  heroDesc: "iNET Global Services शक्तिशाली ऑम्नीचॅनेल संप्रेषण सोल्यूशन्स प्रदान करते जे एकाधिक मेसेजिंग मार्ग एकाच प्लॅटफॉर्म आणि API मध्ये एकत्र आणतात.",
  getStarted: "सुरू करा",
  contactUs: "संपर्क साधा",
  whyServiceBadge: "समाविष्ट चॅनेल",
  whyServiceTitle: "आमचे ऑम्नीचॅनेल प्लॅटफॉर्म का निवडावे",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "जगातील सर्वात लोकप्रिय मेसेजिंग ॲपवर ग्राहकांशी थेट आणि वेगाने कनेक्ट व्हा.",
        "bullet1": "सत्यापित बिझनेस प्रोफाइल बॅज (ग्रीन टिक)",
        "bullet2": "रिच मीडिया, कॅरोसेल आणि बटणे",
        "bullet3": "स्वयंचलित चॅटबॉट्स आणि २४/७ सपोर्ट",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "voice-calls",
        "title": "व्हॉइस कॉल्स आणि क्लाउड IVR",
        "description": "स्मार्ट राउटिंग, कॉल रेकॉर्डिंग आणि उत्कृष्ट ऑडिओ गुणवत्तेसह क्लाउड व्हॉइस सोल्यूशन्स.",
        "bullet1": "स्मार्ट मल्टी-लेव्हल IVR प्रणाली",
        "bullet2": "HD स्पष्टतेसह जागतिक व्हॉइस कॉल्स",
        "bullet3": "AI ऑटोमेशन आणि संपूर्ण कॉल विश्लेषण",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "ग्राहक सेवा, स्वयंचलित बॉट्स आणि त्वरित नोटिफिकेशन्ससाठी टेलिग्रामच्या गतीचा लाभ घ्या.",
        "bullet1": "अमर्यादित ग्रुप्स आणि ब्रॉडकास्ट चॅनेल्स",
        "bullet2": "शक्तिशाली बॉट ऑटोमेशन इंटिग्रेशन",
        "bullet3": "एंड-टू-एंड एनक्रिप्टेड सुरक्षित मेसेजिंग",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "इंस्टाग्राम डीएममध्ये त्वरित उत्तरांसह सोशल प्रतिबद्धतेचे रूपांतर महसुलात करा.",
        "bullet1": "स्टोरी रिप्लाय आणि मेन्शन्सचे ऑटोमेशन",
        "bullet2": "कमेंट-टू-डीएम ऑटोमेशन प्रवाह",
        "bullet3": "ॲप-मधील उत्पादन माहिती आणि विक्री सहाय्य",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "फेसबुक मेसेंजरवर ग्राहकांशी कनेक्ट व्हा आणि त्यांच्या शंकांचे त्वरित निरसन करा.",
        "bullet1": "मेसेंजरमध्ये त्वरित लीड कॅप्चर",
        "bullet2": "रिच कॅरोसेल कार्ड्स आणि द्रुत उत्तरे",
        "bullet3": "लाईव्ह एजंटकडे सुरळीत हस्तांतरण",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "tiktok",
        "title": "TikTok बिझनेस मेसेजिंग",
        "description": "टिकटॉक बिझनेस मेसेजिंगद्वारे नव्या पिढीच्या ग्राहकांना सहजपणे आकर्षित करा.",
        "bullet1": "ग्राहकांसाठी ॲप-मधील थेट खरेदी सहाय्य",
        "bullet2": "व्हिडिओ लीड्ससाठी द्रुत उत्तर ऑटोमेशन",
        "bullet3": "सोशल कॉमर्स लीड जनरेशन इंटिग्रेशन",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "live-chat",
        "title": "वेबसाइट लाइव्ह चॅट",
        "description": "वेबसाइट आणि मोबाईल ॲपवर रिअल-टाइम समर्थनासह अभ्यागतांचे रूपांतर ग्राहकांमध्ये करा.",
        "bullet1": "अतिशय हलके आणि सानुकूल करण्यायोग्य वेब विजेट",
        "bullet2": "AI बॉट ते लाईव्ह एजंट अखंड हस्तांतरण",
        "bullet3": "रिअल-टाइम वापरकर्ता माहिती आणि संदर्भ",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "rcs",
        "title": "RCS बिझनेस मेसेजिंग",
        "description": "ब्रँडेड सत्यापन आणि परस्परसंवादी बटणांसह पुढील पिढीचा SMS अनुभव प्रदान करा.",
        "bullet1": "सत्यापित ब्रँड ओळख आणि लोगो",
        "bullet2": "स्क्रोल करण्यायोग्य कॅरोसेल आणि ॲक्शन बटणे",
        "bullet3": "स्वयंचलित एसएमएस / एमएमएस फॉलबॅक सुरक्षा",
        "learnMore": "अधिक जाणून घ्या"
    },
    {
        "id": "email",
        "title": "एंटरप्राइझ ईमेल सोल्यूशन्स",
        "description": "उत्कृष्ट इनबॉक्स वितरण दरांसह ट्रान्झॅक्शनल आणि मार्केटिंग ईमेल्स अखंड पाठवा.",
        "bullet1": "उच्च दर्जाचे इनबॉक्स वितरण दर",
        "bullet2": "डायनॅमिक वैयक्तिकृत ईमेल टेम्पलेट्स",
        "bullet3": "सखोल ट्रॅकिंग, क्लिक्स आणि विश्लेषण",
        "learnMore": "अधिक जाणून घ्या"
    }
],
  whyChooseBadge: "आमचे सोल्यूशन का निवडावे",
  whyChooseTitle: "मोठ्या प्रमाणासाठी तयार केलेला युनिफाइड ग्राहक संवाद",
  featuresBadge: "प्लॅटफॉर्म वैशिष्ट्ये",
  featuresTitle: "संपूर्ण ग्राहक सहभाग क्षमता",
  ctaBadge: "तुमचे ऑम्नीचॅनेल नेटवर्क तयार करा",
  ctaTitle: "आधुनिक ऑम्नीचॅनेल सोल्यूशन्ससह व्यवसाय वाढवा",
  ctaSubtitle: "व्हॉट्सॲप, इंस्टाग्राम, एसएमएस आणि व्हॉइस एकाच ठिकाणी सहजपणे व्यवस्थापित करा.",
};

const sw: OmnichannelTranslation = {
  ...en,
  heroBadge: "HUDUMA YA OMNICHANNEL",
  heroTitle: "Unganisha Kila Mazungumzo ya Mteja Kupitia Jukwaa Moja",
  heroDesc: "iNET Global Services inatoa suluhisho thabiti za mawasiliano ya omnichannel zinazounganisha njia nyingi za ujumbe kuwa jukwaa moja na API.",
  getStarted: "Anza Sasa",
  contactUs: "Wasiliana Nasi",
  whyServiceBadge: "NJIA ZILIZOJUMUISHWA",
  whyServiceTitle: "Kwa Nini Uchague Jukwaa Letu la Omnichannel",
  channels: [
    {
        "id": "whatsapp",
        "title": "API ya WhatsApp Business",
        "description": "Ungana na wateja moja kwa moja kwenye programu maarufu zaidi ya kutuma ujumbe ulimwenguni.",
        "bullet1": "Beji rasmi ya wasifu wa biashara iliyothibitishwa",
        "bullet2": "Picha, video na vitufe shirikishi",
        "bullet3": "Boti za kiotomatiki na usaidizi wa wataalamu",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "voice-calls",
        "title": "Simu za Sauti na Cloud IVR",
        "description": "Suluhisho za sauti za wingu zenye uelekezaji mahiri, kurekodi simu, na sauti safi kabisa ya ubora wa juu.",
        "bullet1": "Mifumo mahiri ya IVR ya viwango vingi",
        "bullet2": "Simu za sauti za kimataifa zenye uwazi wa HD",
        "bullet3": "Uendeshaji wa AI na uchanganuzi wa simu kwa kina",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "Tumia kasi ya Telegram kwa huduma ya wateja, boti za kiotomatiki, na arifa za papo hapo.",
        "bullet1": "Vikundi visivyo na kikomo na vituo vya matangazo",
        "bullet2": "Ushirikiano wa hali ya juu wa boti za kiotomatiki",
        "bullet3": "Ujumbe salama uliosimbwa kuanzia mwanzo hadi mwisho",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "Badilisha mwingiliano wa mitandao ya kijamii kuwa mauzo kwa majibu ya kiotomatiki kwenye DM za Instagram.",
        "bullet1": "Uendeshaji wa majibu ya Story na kutajwa",
        "bullet2": "Mifumo ya kiotomatiki ya kutoka maoni hadi DM",
        "bullet3": "Usaidizi wa ununuzi wa bidhaa ndani ya programu",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "Kutana na wateja wako kwenye Facebook Messenger na utatue maswali mara moja.",
        "bullet1": "Kupata wateja watarajiwa papo hapo kwenye Messenger",
        "bullet2": "Kadi za picha za kuvutia na majibu ya haraka",
        "bullet3": "Uhamisho mzuri wa mazungumzo kwa mtoa huduma wa moja kwa moja",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "tiktok",
        "title": "Ujumbe wa Biashara wa TikTok",
        "description": "Shirikisha kizazi kijacho cha wanunuzi kupitia ujumbe wa biashara wa TikTok bila usumbufu.",
        "bullet1": "Usaidizi wa wateja ndani ya programu kwa wanunuzi",
        "bullet2": "Majibu ya haraka ya kiotomatiki kwa miongozo ya video",
        "bullet3": "Ushirikiano wa biashara ya kijamii na uvumbuzi",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "live-chat",
        "title": "Gumzo la Moja kwa Moja la Tovuti",
        "description": "Badilisha wageni wa tovuti kuwa wateja kwa usaidizi wa wakati halisi kwenye wavuti na programu yako.",
        "bullet1": "Kidirisha chepesi na kinachoweza kubinafsishwa",
        "bullet2": "Uhamisho usio na dosari kutoka kwa boti ya AI hadi kwa mhudumu",
        "bullet3": "Muktadha wa wageni wa wakati halisi na kurasa wanazotazama",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "rcs",
        "title": "Ujumbe wa Biashara wa RCS",
        "description": "Boresha matumizi ya SMS ya kizazi kijacho ukitumia uthibitishaji wa chapa na vitufe shirikishi.",
        "bullet1": "Utambulisho na nembo ya chapa iliyothibitishwa",
        "bullet2": "Kadi za picha zinazoweza kuteleza na vitendo vya papo hapo",
        "bullet3": "Mbadala wa kiotomatiki wa SMS / MMS kwa usalama",
        "learnMore": "Jifunze Zaidi"
    },
    {
        "id": "email",
        "title": "Suluhisho za Barua Pepe za Biashara",
        "description": "Tuma barua pepe za miamala na matangazo kwa viwango vya juu vya kufika kwenye kikasha.",
        "bullet1": "Viwango vya juu vya uwasilishaji kwenye kisanduku kikuu",
        "bullet2": "Violezo vya barua pepe vinavyobadilika na kubinafsishwa",
        "bullet3": "Ufuatiliaji wa kina, mibofyo na uchanganuzi wa data",
        "learnMore": "Jifunze Zaidi"
    }
],
  whyChooseBadge: "KWA NINI SULUHISHO LETU",
  whyChooseTitle: "Mawasiliano ya Wateja Yaliyounganishwa kwa Ukubwa wa Biashara",
  featuresBadge: "VIPENGELE VYA JUKWAA",
  featuresTitle: "Uwezo Kamili wa Kuingiliana na Wateja",
  ctaBadge: "JENGA MTANDAO WAKO WA OMNICHANNEL",
  ctaTitle: "Kuza Biashara Yako kwa Suluhisho za Kisasa za Omnichannel",
  ctaSubtitle: "Kuanzia uelekezaji mahiri hadi AI, unganisha WhatsApp, Instagram, SMS na Sauti sehemu moja.",
};

const sv: OmnichannelTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL-TJÄNST",
  heroTitle: "Koppla Samman Alla Kundkonversationer via En Plattform",
  heroDesc: "iNET Global Services erbjuder kraftfulla omnichannel-lösningar som förenar flera meddelandekanaler i en gemensam plattform och API.",
  getStarted: "Kom Igång",
  contactUs: "Kontakta Oss",
  whyServiceBadge: "INKLUDERADE KANALER",
  whyServiceTitle: "Varför Välja Vår Omnichannel-plattform",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "Nå kunder direkt på världens mest använda meddelandeapp med verifierad närvaro.",
        "bullet1": "Verifierat företagsprofilmärke (grön bock)",
        "bullet2": "Rika medier, karuseller och interaktiva knappar",
        "bullet3": "Automatiserade chattrobotar och dygnet-runt-support",
        "learnMore": "Läs mer"
    },
    {
        "id": "voice-calls",
        "title": "Röstsamtal & Moln-IVR",
        "description": "Skalbara molnröstlösningar med intelligent dirigering, samtalsinspelning och kristallklart ljud.",
        "bullet1": "Smarta flernivå-IVR-system",
        "bullet2": "Globala röstsamtal med HD-klarhet",
        "bullet3": "AI-automatisering och djupgående samtalsanalys",
        "learnMore": "Läs mer"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "Utnyttja Telegrams snabbhet för kundtjänst, automatiserade robotar och blixtsnabba aviseringar.",
        "bullet1": "Obegränsade grupper och sändningskanaler",
        "bullet2": "Kraftfull botautomatisering och integration",
        "bullet3": "End-to-end-krypterad och säker meddelandehantering",
        "learnMore": "Läs mer"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "Förvandla engagemang i sociala medier till intäkter med automatiserade svar i Instagram DM.",
        "bullet1": "Automatisering av händelsesvar och omnämnanden",
        "bullet2": "Automationsflöden från kommentarer till direktmeddelanden",
        "bullet3": "Stöd för produktbläddring och köp i appen",
        "learnMore": "Läs mer"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "Möt dina kunder på Facebook Messenger och lös ärenden blixtsnabbt med interaktiva verktyg.",
        "bullet1": "Omedelbar leadinsamling i Messenger",
        "bullet2": "Rika karusellkort och snabbsvarsknappar",
        "bullet3": "Smidig överlämning till mänskliga agenter",
        "learnMore": "Läs mer"
    },
    {
        "id": "tiktok",
        "title": "TikTok Business Messaging",
        "description": "Engagera nästa generations konsumenter sömlöst via TikTok Business Messaging.",
        "bullet1": "Kundsupport direkt i appen för köpare",
        "bullet2": "Snabb svarsautomatisering för videoleads",
        "bullet3": "Integrationer för social handel och konvertering",
        "learnMore": "Läs mer"
    },
    {
        "id": "live-chat",
        "title": "Livechatt på webbplatsen",
        "description": "Konvertera besökare till lojala kunder med realtidssupport direkt på din webbplats och app.",
        "bullet1": "Fjäderlätt och anpassningsbar webbwidget",
        "bullet2": "Sömlös eskalering från AI-bot till liveagent",
        "bullet3": "Besökskontext och sidhistorik i realtid",
        "learnMore": "Läs mer"
    },
    {
        "id": "rcs",
        "title": "RCS Business Messaging",
        "description": "Leverera nästa generations SMS-upplevelse med verifierat varumärke och interaktiva åtgärder.",
        "bullet1": "Verifierad varumärkesidentitet med logotyp",
        "bullet2": "Bläddringsbara bildkaruseller och snabbknappar",
        "bullet3": "Automatisk reservlösning till SMS / MMS",
        "learnMore": "Läs mer"
    },
    {
        "id": "email",
        "title": "Företagsanpassade e-postlösningar",
        "description": "Skicka transaktionella meddelanden och marknadsföringskampanjer med marknadsledande leveransprecision.",
        "bullet1": "Högsta leveransbarhet till primära inkorgen",
        "bullet2": "Dynamiska och personanpassade e-postmallar",
        "bullet3": "Omfattande spårning, klick- och leveransanalys",
        "learnMore": "Läs mer"
    }
],
  whyChooseBadge: "VARFÖR VÅR LÖSNING",
  whyChooseTitle: "Enhetlig Kundkommunikation Byggd för Skalbarhet",
  featuresBadge: "PLATTFORMSFUNKTIONER",
  featuresTitle: "Fullständiga Funktioner för Kundengagemang",
  ctaBadge: "BYGG ERT OMNICHANNEL-NÄTVERK",
  ctaTitle: "Väx med Moderna Omnichannel-lösningar",
  ctaSubtitle: "Från intelligent dirigering till AI: samla WhatsApp, Instagram, SMS och Röst på ett ställe.",
};

const el: OmnichannelTranslation = {
  ...en,
  heroBadge: "ΥΠΗΡΕΣΙΑ OMNICHANNEL",
  heroTitle: "Συνδέστε Κάθε Συνομιλία με Πελάτη Μέσα από Μία Πλατφόρμα",
  heroDesc: "Η iNET Global Services παρέχει ισχυρές λύσεις πολυκαναλικής επικοινωνίας που ενοποιούν πολλαπλά κανάλια μηνυμάτων σε μία πλατφόρμα και API.",
  getStarted: "Ξεκινήστε",
  contactUs: "Επικοινωνήστε Μαζί Μας",
  whyServiceBadge: "ΠΕΡΙΛΑΜΒΑΝΟΜΕΝΑ ΚΑΝΑΛΙΑ",
  whyServiceTitle: "Γιατί να Επιλέξετε την Πλατφόρμα Omnichannel μας",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "Συνδεθείτε απευθείας με τους πελάτες στην πιο δημοφιλή εφαρμογή ανταλλαγής μηνυμάτων στον κόσμο.",
        "bullet1": "Επαληθευμένο σήμα επίσημου εταιρικού προφίλ",
        "bullet2": "Πλούσια πολυμέσα & διαδραστικά κουμπιά",
        "bullet3": "Αυτοματοποιημένα chatbot & υποστήριξη 24/7",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "voice-calls",
        "title": "Φωνητικές Κλήσεις & Cloud IVR",
        "description": "Επεκτάσιμες λύσεις φωνής στο cloud με έξυπνη δρομολόγηση, καταγραφή κλήσεων και κρυστάλλινο ήχο HD.",
        "bullet1": "Έξυπνα συστήματα IVR πολλαπλών επιπέδων",
        "bullet2": "Παγκόσμιες τηλεφωνικές κλήσεις υψηλής ευκρίνειας",
        "bullet3": "Αυτοματοποίηση AI & αναλυτικά στοιχεία κλήσεων",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "Αξιοποιήστε την ταχύτητα του Telegram για εξυπηρέτηση πελατών, αυτοματοποιημένα bots και άμεσες ειδοποιήσεις.",
        "bullet1": "Απεριόριστες ομάδες και κανάλια εκπομπής",
        "bullet2": "Ισχυρή ενσωμάτωση αυτοματισμού bots",
        "bullet3": "Κρυπτογραφημένα μηνύματα από άκρο σε άκρο",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "Μετατρέψτε την αλληλεπίδραση στα social media σε έσοδα με αυτοματοποιημένες απαντήσεις στα Instagram DMs.",
        "bullet1": "Αυτοματοποίηση απαντήσεων σε Stories & αναφορές",
        "bullet2": "Ροές αυτοματισμού από σχόλια σε DM",
        "bullet3": "Υποστήριξη περιήγησης προϊόντων εντός εφαρμογής",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "Συναντήστε τους πελάτες σας στο Facebook Messenger και επιλύστε ερωτήματα άμεσα.",
        "bullet1": "Άμεση συλλογή leads στο Messenger",
        "bullet2": "Κάρτες carousel πλούσιων μέσων & γρήγορες απαντήσεις",
        "bullet3": "Ομαλή μεταβίβαση σε εκπρόσωπο εξυπηρέτησης",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "tiktok",
        "title": "TikTok Business Messaging",
        "description": "Προσελκύστε τη νέα γενιά καταναλωτών μέσω των επιχειρηματικών μηνυμάτων του TikTok.",
        "bullet1": "Υποστήριξη πελατών εντός εφαρμογής για αγοραστές",
        "bullet2": "Γρήγορη αυτοματοποίηση απαντήσεων για video leads",
        "bullet3": "Ενσωμάτωση δημιουργίας leads social commerce",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "live-chat",
        "title": "Live Chat Ιστοσελίδας",
        "description": "Μετατρέψτε τους επισκέπτες σε πελάτες με υποστήριξη σε πραγματικό χρόνο στον ιστότοπο και την εφαρμογή σας.",
        "bullet1": "Ελαφρύ και πλήρως προσαρμόσιμο web widget",
        "bullet2": "Απρόσκοπτη κλιμάκωση από AI bot σε ζωντανό εκπρόσωπο",
        "bullet3": "Πλαίσιο επισκέπτη και ιστορικό σελίδας σε πραγματικό χρόνο",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "rcs",
        "title": "RCS Business Messaging",
        "description": "Προσφέρετε την εμπειρία SMS επόμενης γενιάς με επώνυμη επαλήθευση και διαδραστικά κουμπιά ενεργειών.",
        "bullet1": "Επαληθευμένη ταυτότητα επωνυμίας & επίσημο λογότυπο",
        "bullet2": "Κυλιόμενα carousels εικόνων & κουμπιά δράσης",
        "bullet3": "Αυτόματη εφεδρική αποστολή SMS / MMS",
        "learnMore": "Μάθετε περισσότερα"
    },
    {
        "id": "email",
        "title": "Εταιρικές Λύσεις Email",
        "description": "Στείλτε συναλλακτικά και διαφημιστικά μηνύματα email με κορυφαία ποσοστά παράδοσης στα εισερχόμενα.",
        "bullet1": "Εξαιρετικά ποσοστά παράδοσης στο πρωτεύον inbox",
        "bullet2": "Δυναμικά και εξατομικευμένα πρότυπα email",
        "bullet3": "Πλήρης παρακολούθηση, κλικ και αναλυτικά δεδομένα",
        "learnMore": "Μάθετε περισσότερα"
    }
],
  whyChooseBadge: "ΓΙΑΤΙ Η ΔΙΚΗ ΜΑΣ ΛΥΣΗ",
  whyChooseTitle: "Ενοποιημένη Επικοινωνία Πελατών Σχεδιασμένη για Ανάπτυξη",
  featuresBadge: "ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ ΠΛΑΤΦΟΡΜΑΣ",
  featuresTitle: "Πλήρεις Δυνατότητες Αλληλεπίδρασης με Πελάτες",
  ctaBadge: "ΧΤΙΣΤΕ ΤΟ OMNICHANNEL ΔΙΚΤΥΟ ΣΑΣ",
  ctaTitle: "Αναπτυχθείτε με Σύγχρονες Λύσεις Omnichannel",
  ctaSubtitle: "Από έξυπνη δρομολόγηση έως AI: διαχειριστείτε WhatsApp, Instagram, SMS και Φωνή κεντρικά.",
};

const cs: OmnichannelTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL SLUŽBA",
  heroTitle: "Propojte Každou Konverzaci se Zákazníkem Přes Jednu Platformu",
  heroDesc: "iNET Global Services nabízí výkonná omnichannel řešení, která sjednocují více komunikačních tras do jediné platformy a API.",
  getStarted: "Začít Nyní",
  contactUs: "Kontaktujte Nás",
  whyServiceBadge: "ZAHRNUTÉ KANÁLY",
  whyServiceTitle: "Proč Zvolit Naši Omnichannel Platformu",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "Spojte se přímo se zákazníky v nejoblíbenější aplikaci pro zasílání zpráv na světě.",
        "bullet1": "Ověřený odznak firemního profilu (zelená fajfka)",
        "bullet2": "Bohatá média, karusely a interaktivní tlačítka",
        "bullet3": "Automatizovaní chatboti a nepřetržitá podpora",
        "learnMore": "Zjistit více"
    },
    {
        "id": "voice-calls",
        "title": "Hlasové hovory a Cloud IVR",
        "description": "Škálovatelná cloudová hlasová řešení s inteligentním směrováním, nahráváním hovorů a křišťálově čistým zvukem.",
        "bullet1": "Chytré víceúrovňové IVR systémy",
        "bullet2": "Globální hlasové hovory v HD kvalitě",
        "bullet3": "Automatizace pomocí AI a detailní analytika hovorů",
        "learnMore": "Zjistit více"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "Využijte rychlost Telegramu pro zákaznický servis, automatizované roboty a okamžitá oznámení.",
        "bullet1": "Neomezené skupiny a vysílací kanály",
        "bullet2": "Výkonná integrace automatizace botů",
        "bullet3": "End-to-end šifrovaná a bezpečná komunikace",
        "learnMore": "Zjistit více"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "Proměňte zapojení na sociálních sítích v tržby díky automatickým odpovědím v Instagram DM.",
        "bullet1": "Automatizace odpovědí na Stories a zmínky",
        "bullet2": "Automatizační toky od komentářů po přímé zprávy",
        "bullet3": "Podpora procházení a nákupu produktů přímo v aplikaci",
        "learnMore": "Zjistit více"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "Oslovte své zákazníky na Facebook Messengeru a vyřešte jejich dotazy během okamžiku.",
        "bullet1": "Okamžitý zisk potenciálních zákazníků v Messengeru",
        "bullet2": "Bohaté karuselové karty a tlačítka rychlých odpovědí",
        "bullet3": "Hladké předání živému operátorovi",
        "learnMore": "Zjistit více"
    },
    {
        "id": "tiktok",
        "title": "TikTok Business Messaging",
        "description": "Zapojte novou generaci nakupujících prostřednictvím zpráv TikTok Business.",
        "bullet1": "Zákaznická podpora přímo v aplikaci pro nakupující",
        "bullet2": "Rychlá automatizace odpovědí pro video leady",
        "bullet3": "Integrace sběru leadů ze sociálního obchodování",
        "learnMore": "Zjistit více"
    },
    {
        "id": "live-chat",
        "title": "Webový Live Chat",
        "description": "Přeměňte návštěvníky webu na zákazníky díky podpoře v reálném čase přímo na vašem webu a v aplikaci.",
        "bullet1": "Lehký a plně přizpůsobitelný webový widget",
        "bullet2": "Plynulý přechod z AI bota na živého agenta",
        "bullet3": "Kontext návštěvníka a historie stránek v reálném čase",
        "learnMore": "Zjistit více"
    },
    {
        "id": "rcs",
        "title": "RCS Business Messaging",
        "description": "Poskytněte SMS zážitek nové generace se značkovým ověřením a interaktivními akčními tlačítky.",
        "bullet1": "Ověřená identita značky s oficiálním logem",
        "bullet2": "Posuvné obrázkové karusely a akční tlačítka",
        "bullet3": "Automatické záložní doručení přes SMS / MMS",
        "learnMore": "Zjistit více"
    },
    {
        "id": "email",
        "title": "Podniková e-mailová řešení",
        "description": "Odesílejte transakční i marketingové e-maily s vynikající doručitelností do primární schránky.",
        "bullet1": "Špičková míra doručení do doručené pošty",
        "bullet2": "Dynamické a personalizované šablony e-mailů",
        "bullet3": "Komplexní sledování, kliknutí a analytika",
        "learnMore": "Zjistit více"
    }
],
  whyChooseBadge: "PROČ NAŠE ŘEŠENÍ",
  whyChooseTitle: "Sjednocená Komunikace se Zákazníky Postavená pro Růst",
  featuresBadge: "FUNKCE PLATFORMY",
  featuresTitle: "Kompletní Schopnosti Zákaznického Zapojení",
  ctaBadge: "VYBUDUJTE SVOU OMNICHANNEL SÍŤ",
  ctaTitle: "Rostěte s Moderními Omnichannel Řešeními",
  ctaSubtitle: "Od inteligentního směrování po AI: spravujte WhatsApp, Instagram, SMS a Hlas z jednoho místa.",
};

const ro: OmnichannelTranslation = {
  ...en,
  heroBadge: "SERVICIU OMNICHANNEL",
  heroTitle: "Conectați Fiecare Conversație cu Clienții Printr-o Singură Platformă",
  heroDesc: "iNET Global Services oferă soluții puternice de comunicare omnichannel care unifică multiple canale de mesagerie într-o singură platformă și API.",
  getStarted: "Începeți Acum",
  contactUs: "Contactați-ne",
  whyServiceBadge: "CANALE INCLUSE",
  whyServiceTitle: "De Ce să Alegeți Platforma Noastră Omnichannel",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "Conectați-vă direct cu clienții pe cea mai populară aplicație de mesagerie din lume.",
        "bullet1": "Insignă verificată de profil de afaceri (bifă verde)",
        "bullet2": "Fișiere media bogate, caruseluri și butoane interactive",
        "bullet3": "Chatboți automatizați și asistență non-stop 24/7",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "voice-calls",
        "title": "Apeluri Vocale & Cloud IVR",
        "description": "Soluții vocale scalabile în cloud, cu rutare inteligentă, înregistrare apeluri și claritate audio HD.",
        "bullet1": "Sisteme IVR inteligente pe mai multe niveluri",
        "bullet2": "Apeluri vocale globale cu claritate audio HD",
        "bullet3": "Automatizare AI și analize aprofundate ale apelurilor",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "Utilizați viteza Telegram pentru asistență clienți, boți automatizați și notificări instantanee.",
        "bullet1": "Grupuri nelimitate și canale de difuzare",
        "bullet2": "Integrare puternică pentru automatizarea boților",
        "bullet3": "Mesagerie securizată, criptată cap-la-cap",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "Transformați interacțiunile de pe rețelele sociale în venituri prin răspunsuri automate în DM-urile de pe Instagram.",
        "bullet1": "Automatizarea răspunsurilor la Stories și mențiuni",
        "bullet2": "Fluxuri de automatizare de la comentarii la mesaje DM",
        "bullet3": "Suport pentru răsfoirea și achiziția produselor în aplicație",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "Interacționați cu clienții pe Facebook Messenger și rezolvați solicitările rapid cu funcții interactive.",
        "bullet1": "Captare instantanee a lead-urilor în Messenger",
        "bullet2": "Carduri carusel bogate și opțiuni de răspuns rapid",
        "bullet3": "Transfer fluid către agenți umani",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "tiktok",
        "title": "Mesagerie de Afaceri TikTok",
        "description": "Implicați noua generație de cumpărători prin intermediul mesageriei de afaceri TikTok.",
        "bullet1": "Suport clienți în aplicație pentru cumpărători",
        "bullet2": "Răspunsuri automate rapide pentru oportunitățile din videoclipuri",
        "bullet3": "Integrare pentru achiziția de clienți prin social commerce",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "live-chat",
        "title": "Live Chat pe Site",
        "description": "Transformați vizitatorii în clienți fideli cu asistență în timp real direct pe site-ul și în aplicația dvs.",
        "bullet1": "Widget web extrem de ușor și complet personalizabil",
        "bullet2": "Tranziție fără întreruperi de la botul AI la un agent live",
        "bullet3": "Contextul vizitatorului și istoricul paginilor în timp real",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "rcs",
        "title": "RCS Business Messaging",
        "description": "Oferiți experiența SMS a viitorului cu verificare oficială a brandului și butoane interactive.",
        "bullet1": "Identitate verificată a mărcii cu siglă oficială",
        "bullet2": "Caruseluri de imagini derulabile și butoane de acțiune",
        "bullet3": "Trimitere de rezervă automată prin SMS / MMS",
        "learnMore": "Aflați mai multe"
    },
    {
        "id": "email",
        "title": "Soluții de Email Enterprise",
        "description": "Trimiteți emailuri tranzacționale și de marketing cu rate superioare de livrare în inbox-ul principal.",
        "bullet1": "Rată excelentă de livrare direct în inbox",
        "bullet2": "Șabloane de email dinamice și personalizate",
        "bullet3": "Urmărire completă a performanței, clicurilor și conversiilor",
        "learnMore": "Aflați mai multe"
    }
],
  whyChooseBadge: "DE CE SOLUȚIA NOASTRĂ",
  whyChooseTitle: "Comunicare Unificată cu Clienții Construită pentru Scalare",
  featuresBadge: "CARACTERISTICI PLATFORMĂ",
  featuresTitle: "Capacități Complete de Interacțiune cu Clienții",
  ctaBadge: "CONSTRUIȚI REȚEAUA OMNICHANNEL",
  ctaTitle: "Creșteți cu Soluții Omnichannel Moderne",
  ctaSubtitle: "De la rutare inteligentă la AI: reuniți WhatsApp, Instagram, SMS și Voce într-un singur loc.",
};

const hu: OmnichannelTranslation = {
  ...en,
  heroBadge: "OMNICHANNEL SZOLGÁLTATÁS",
  heroTitle: "Kapcsolja Össze Minden Ügyfélbeszélgetését Egyetlen Platformon",
  heroDesc: "Az iNET Global Services fejlett omnichannel kommunikációs megoldásokat kínál, amelyek több üzenetküldő csatornát egyesítenek egyetlen platformban és API-ban.",
  getStarted: "Kezdés",
  contactUs: "Kapcsolatfelvétel",
  whyServiceBadge: "ELÉRHETŐ CSATORNÁK",
  whyServiceTitle: "Miért Válassza Omnichannel Platformunkat",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "Lépjen kapcsolatba ügyfeleivel közvetlenül a világ legnépszerűbb üzenetküldő alkalmazásában.",
        "bullet1": "Hitelesített üzleti profiljelvény (zöld pipa)",
        "bullet2": "Gazdag médiatartalmak, lapozható kártyák és interaktív gombok",
        "bullet3": "Automatizált chatbotok és 24/7 ügyféltámogatás",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "voice-calls",
        "title": "Hanghívások és Felhő IVR",
        "description": "Skálázható felhőalapú hangmegoldások intelligens irányítással, hívásrögzítéssel és kristálytiszta hanggal.",
        "bullet1": "Intelligens többszintű IVR menürendszerek",
        "bullet2": "Globális hanghívások kristálytiszta HD minőségben",
        "bullet3": "MI automatizáció és részletes híváselemzés",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "Használja ki a Telegram gyorsaságát az ügyfélszolgálatban, automatizált botokkal és azonnali értesítésekkel.",
        "bullet1": "Korlátlan csoportok és közvetítő csatornák",
        "bullet2": "Erőteljes bot-automatizálási integráció",
        "bullet3": "Végpontok közötti titkosítással védett üzenetküldés",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "Alakítsa a közösségi média érdeklődőket bevétellé automatizált válaszokkal az Instagram direkt üzenetekben.",
        "bullet1": "Stories és megemlítések automatikus megválaszolása",
        "bullet2": "Kommentekből direkt üzenetet indító automatizmusok",
        "bullet3": "Alkalmazáson belüli termékböngészés és vásárlási támogatás",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "Beszélgessen ügyfeleivel a Facebook Messengeren és oldja meg kérdéseiket villámgyorsan.",
        "bullet1": "Azonnali érdeklődőszerzés közvetlenül a Messengerben",
        "bullet2": "Képes lapozókártyák és gyorsválasz gombok",
        "bullet3": "Zökkenőmentes átirányítás élő ügyfélszolgálatoshoz",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "tiktok",
        "title": "TikTok Üzleti Üzenetküldés",
        "description": "Érje el a vásárlók új generációját közvetlenül a TikTok üzleti üzenetkezelésén keresztül.",
        "bullet1": "Alkalmazáson belüli ügyfélszolgálat a vásárlóknak",
        "bullet2": "Gyors válaszautomatizálás videós érdeklődésekhez",
        "bullet3": "Social commerce ügyfélszerzési integráció",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "live-chat",
        "title": "Weboldali Élő Csevegés (Live Chat)",
        "description": "Alakítsa a weboldal látogatóit vásárlókká valós idejű támogatással weboldalán és mobilalkalmazásában.",
        "bullet1": "Könnyűsúlyú és teljesen testreszabható webes widget",
        "bullet2": "Zökkenőmentes átadás a mesterséges intelligenciától az élő ügynöknek",
        "bullet3": "Valós idejű látogatói kontextus és előzmények",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "rcs",
        "title": "RCS Üzleti Üzenetküldés",
        "description": "Nyújtson új generációs SMS élményt hitelesített márkajelzéssel és interaktív gombokkal.",
        "bullet1": "Hitelesített márkaidentitás logóval",
        "bullet2": "Lapozható képkártyák és egykattintásos műveletek",
        "bullet3": "Automatikus tartalék SMS / MMS kézbesítés",
        "learnMore": "Tudjon meg többet"
    },
    {
        "id": "email",
        "title": "Vállalati Email Megoldások",
        "description": "Küldjön tranzakciós és marketing emaileket kimagasló kézbesítési arányokkal a postaládába.",
        "bullet1": "Kiváló kézbesítési arány az elsődleges postafiókba",
        "bullet2": "Dinamikus és személyre szabott email sablonok",
        "bullet3": "Átfogó megnyitási, kattintási és konverziós analitika",
        "learnMore": "Tudjon meg többet"
    }
],
  whyChooseBadge: "MIÉRT A MI MEGOLDÁSUNK",
  whyChooseTitle: "Egységes Ügyfélkommunikáció a Skálázhatóságért",
  featuresBadge: "PLATFORM JELLEMZŐI",
  featuresTitle: "Teljes Körű Ügyfélelköteleződési Képességek",
  ctaBadge: "ÉPÍTSE KI OMNICHANNEL HÁLÓZATÁT",
  ctaTitle: "Növekedjen Modern Omnichannel Megoldásokkal",
  ctaSubtitle: "Az intelligens útválasztástól az AI-ig: kezelje a WhatsApp, Instagram, SMS és Hang szolgáltatásokat egy helyen.",
};

const uk: OmnichannelTranslation = {
  ...en,
  heroBadge: "ОМНІКАНАЛЬНИЙ СЕРВІС",
  heroTitle: "Об'єднайте Кожну Розмову з Клієнтом Через Єдину Платформу",
  heroDesc: "iNET Global Services надає надійні рішення омніканальних комунікацій, які об'єднують безліч каналів обміну повідомленнями в одну платформу та API.",
  getStarted: "Почати",
  contactUs: "Зв'яжіться з нами",
  whyServiceBadge: "ПІДТРИМУВАНІ КАНАЛИ",
  whyServiceTitle: "Чому Варто Обрати Нашу Омніканальну Платформу",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "Спілкуйтеся безпосередньо з клієнтами у найпопулярнішому додатку обміну повідомленнями у світі.",
        "bullet1": "Підтверджений бейдж бізнес-профілю (зелена галочка)",
        "bullet2": "Багатий медіаконтент, каруселі та інтерактивні кнопки",
        "bullet3": "Автоматизовані чат-боти та цілодобова підтримка 24/7",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "voice-calls",
        "title": "Голосові дзвінки та Хмарний IVR",
        "description": "Масштабовані хмарні голосові рішення з розумною маршрутизацією, записом дзвінків і кришталево чистим HD-звуком.",
        "bullet1": "Розумні багаторівневі системи IVR",
        "bullet2": "Глобальні голосові дзвінки з HD чіткістю",
        "bullet3": "ШІ-автоматизація та глибока аналітика розмов",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "Використовуйте швидкість Telegram для обслуговування клієнтів, автоматизованих ботів і миттєвих сповіщень.",
        "bullet1": "Необмежені групи та канали мовлення",
        "bullet2": "Потужна інтеграція бот-автоматизації",
        "bullet3": "Наскрізне шифрування та безпечний обмін повідомленнями",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "Перетворюйте взаємодію в соціальних мережах на продажі завдяки авто-відповідям в Instagram DM.",
        "bullet1": "Автоматизація відповідей на Stories та згадки",
        "bullet2": "Автоматизовані сценарії переходу від коментарів до DM",
        "bullet3": "Підтримка вибору та купівлі товарів у додатку",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "Спілкуйтеся зі своїми клієнтами у Facebook Messenger і миттєво вирішуйте їхні запитання.",
        "bullet1": "Миттєве залучення лідів у Messenger",
        "bullet2": "Інформативні картки-каруселі та кнопки швидких відповідей",
        "bullet3": "Плавна передача діалогу живому оператору",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "tiktok",
        "title": "Бізнес-повідомлення TikTok",
        "description": "Залучайте молоде покоління покупців через інтегровані бізнес-повідомлення TikTok.",
        "bullet1": "Підтримка покупців безпосередньо в додатку",
        "bullet2": "Швидка авто-відповідь на звернення з відео",
        "bullet3": "Інтеграція залучення лідів із social commerce",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "live-chat",
        "title": "Онлайн-чат на сайті",
        "description": "Перетворюйте відвідувачів сайту на лояльних клієнтів завдяки підтримці в реальному часі на сайті та в додатку.",
        "bullet1": "Легкий та повністю налаштовуваний веб-віджет",
        "bullet2": "Безшовна передача діалогу від ШІ-бота до оператора",
        "bullet3": "Контекст відвідувача та історія переглядів у реальному часі",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "rcs",
        "title": "RCS Business Messaging",
        "description": "Надайте клієнтам досвід SMS нового покоління з верифікацією бренду та інтерактивними кнопками дій.",
        "bullet1": "Верифікована ідентичність бренду з офіційним логотипом",
        "bullet2": "Каруселі зображень із прокруткою та кнопками дій",
        "bullet3": "Автоматичний резервний перехід на SMS / MMS",
        "learnMore": "Дізнатися більше"
    },
    {
        "id": "email",
        "title": "Корпоративні рішення Email",
        "description": "Надсилайте транзакційні та маркетингові листи з найвищими показниками доставлення в основну папку.",
        "bullet1": "Найвища доставлення у вхідні (Inbox)",
        "bullet2": "Динамічні та персоналізовані шаблони листів",
        "bullet3": "Комплексне відстеження відкриттів, кліків та аналітика",
        "learnMore": "Дізнатися більше"
    }
],
  whyChooseBadge: "ЧОМУ НАШЕ РІШЕННЯ",
  whyChooseTitle: "Єдина Комунікація з Клієнтами для Масштабування",
  featuresBadge: "ФУНКЦІЇ ПЛАТФОРМИ",
  featuresTitle: "Повні Можливості для Залучення Клієнтів",
  ctaBadge: "СТВОРІТЬ СВОЮ ОМНІКАНАЛЬНУ МЕРЕЖУ",
  ctaTitle: "Зростайте з Сучасними Омніканальними Рішеннями",
  ctaSubtitle: "Від розумної маршрутизації до ШІ: керуйте WhatsApp, Instagram, SMS та Дзвінками в одному центрі.",
};

const he: OmnichannelTranslation = {
  ...en,
  heroBadge: "שירות אומניצ'אנל",
  heroTitle: "חברו כל שיחת לקוח דרך פלטפורמה אחת חכמה",
  heroDesc: "iNET Global Services מציעה פתרונות תקשורת רב-ערוציים רבי עוצמה המאחדים ערוצי הודעות מקוונים מרובים לפלטפורמה ו-API אחת.",
  getStarted: "התחל עכשיו",
  contactUs: "צור קשר",
  whyServiceBadge: "ערוצים כלולים",
  whyServiceTitle: "למה לבחור בפלטפורמת האומניצ'אנל שלנו",
  channels: [
    {
        "id": "whatsapp",
        "title": "WhatsApp Business API",
        "description": "התחברו ישירות ללקוחות באפליקציית המסרים המובילה והפופולרית ביותר בעולם.",
        "bullet1": "תג פרופיל עסקי מאומת (וי ירוק)",
        "bullet2": "מדיה עשירה, קרוסלות תמונות וכפתורים אינטראקטיביים",
        "bullet3": "צ'אטבוטים אוטומטיים ותמיכה שוטפת 24/7",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "voice-calls",
        "title": "שיחות קוליות ו-Cloud IVR",
        "description": "פתרונות קול בענן עם ניתוב חכם, הקלטת שיחות ואיכות שמע צלולה ואיכותית.",
        "bullet1": "מערכות IVR חכמות מרובות שלבים",
        "bullet2": "שיחות קוליות גלובליות באיכות HD צלולה",
        "bullet3": "אוטומציית AI וניתוח שיחות מעמיק",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "telegram",
        "title": "Telegram Business",
        "description": "נצלו את המהירות של טלגרם לשירות לקוחות, בוטים אוטומטיים והתראות מיידיות.",
        "bullet1": "קבוצות ללא הגבלה וערוצי שידור המוניים",
        "bullet2": "שילוב אוטומציה עוצמתי עם בוטים",
        "bullet3": "הודעות מאובטחות ומוצפנות מקצה לקצה",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "instagram",
        "title": "Instagram Direct Messaging",
        "description": "הפכו מעורבות ברשתות החברתיות להכנסות עם מענה אוטומטי ב-Direct של אינסטגרם.",
        "bullet1": "אוטומציית תגובות ל-Stories ותיוגים",
        "bullet2": "תהליכי אוטומציה מתגובות להודעות פרטיות",
        "bullet3": "תמיכה בגלישה ורכישת מוצרים ישירות באפליקציה",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "facebook",
        "title": "Facebook Messenger",
        "description": "פגשו את הלקוחות שלכם ב-Facebook Messenger ופתרו פניות במהירות ובקלות.",
        "bullet1": "איסוף לידים מיידי ישירות ב-Messenger",
        "bullet2": "כרטיסי קרוסלה עשירים וכפתורי מענה מהיר",
        "bullet3": "העברה חלקה ונוחה לנציג אנושי",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "tiktok",
        "title": "הודעות עסקיות ב-TikTok",
        "description": "צרו מעורבות עם הדור הבא של הצרכנים באמצעות הודעות עסקיות של TikTok.",
        "bullet1": "שירות לקוחות בתוך האפליקציה לקונים",
        "bullet2": "מענה אוטומטי מהיר ללידים מסרטונים",
        "bullet3": "אינטגרציה לאיסוף לידים מ-Social Commerce",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "live-chat",
        "title": "צ'אט חי באתר (Live Chat)",
        "description": "המירו מבקרים באתר ללקוחות באמצעות תמיכה בזמן אמת באתר ובאפליקציה שלכם.",
        "bullet1": "ווידג'ט אתר קל משקל וניתן להתאמה מלאה",
        "bullet2": "מעבר חלק ויעיל מבוט בינה מלאכותית לנציג אנושי",
        "bullet3": "הקשר מבקרים והיסטוריית דפים בזמן אמת",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "rcs",
        "title": "RCS Business Messaging",
        "description": "ספקו חוויית SMS מהדור הבא עם אימות מותג רשמי וכפתורי פעולה אינטראקטיביים.",
        "bullet1": "זהות מותג מאומתת עם לוגו רשמי",
        "bullet2": "קרוסלות תמונות נגללות וכפתורי פעולה בלחיצה אחת",
        "bullet3": "גיבוי אוטומטי ל-SMS / MMS להבטחת מסירה",
        "learnMore": "למידע נוסף"
    },
    {
        "id": "email",
        "title": "פתרונות אימייל ארגוניים",
        "description": "שלחו הודעות דוא\"ל עסקאיות ושיווקיות עם אחוזי מסירה מובילים ישירות לתיבת הדואר הראשית.",
        "bullet1": "אחוזי מסירה מעולים ישירות ל-Inbox",
        "bullet2": "תבניות דוא\"ל דינמיות ומותאמות אישית",
        "bullet3": "מעקב מקיף, נתוני הקלקות ואנליטיקה מתקדמת",
        "learnMore": "למידע נוסף"
    }
],
  whyChooseBadge: "היתרון התחרותי שלנו",
  whyChooseTitle: "תקשורת לקוחות אחודה המיועדת להתרחבות עסקית",
  featuresBadge: "תכונות הפלטפורמה",
  featuresTitle: "יכולות מלאות לחיבור ומעורבות לקוחות",
  ctaBadge: "בואו נבנה את רשת האומניצ'אנל שלכם",
  ctaTitle: "צמחו עם פתרונות אומניצ'אנל מודרניים",
  ctaSubtitle: "מניתוב חכם ועד בינה מלאכותית: רכזו את WhatsApp, Instagram, SMS וקול במקום אחד.",
};

const translations: Record<string, OmnichannelTranslation> = {
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

export const getOmnichannelTranslations = (
  languageId: string,
  _regionId?: string,
  _regionName?: string
): OmnichannelTranslation => {
  return translations[languageId] || translations["en"];
};

export default getOmnichannelTranslations;

import type { RegionContent } from "./regionContent";

export const extendedTemplatesPart1: Record<
  string,
  (country: string, isGlobal: boolean, currency: string) => RegionContent
> = {
  // 1. Portuguese (Português - pt)
  pt: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "INFRAESTRUTURA GLOBAL DE COMUNICAÇÕES"
        : `INFRAESTRUTURA DE TELECOMUNICAÇÕES EM ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Comunicação Global," : `Melhores Serviços de SMS e`,
      titleLine2: isGlobal ? "Construída Para" : `Tráfego de Voz em ${country},`,
      titleLine3: isGlobal ? "Empresas Modernas." : `Escala Empresarial Garantida.`,
      description: isGlobal
        ? "Voz confiável, mensageria e números virtuais para empresas que precisam permanecer conectadas através de fronteiras, equipes e em cada ponto de contato."
        : `Capacitando empresas em ${country} com rotas de SMS de alto volume, terminação de voz de latência ultrabaixa e interconexões diretas com operadoras.`,
      primaryCta: isGlobal ? "Começar Agora" : `Iniciar em ${country}`,
      secondaryCta: isGlobal ? "Explorar Serviços" : `Ver Rotas em ${country}`,
      timeline: {
        voice: isGlobal ? "Voz Empresarial" : `Tráfego de Voz (CLI) em ${country}`,
        messaging: isGlobal ? "SMS & Mensagens" : `Rotas de SMS e OTP em ${country}`,
        numbers: isGlobal ? "Números Virtuais" : `Números Virtuais DID em ${country}`,
        footerNote1: isGlobal ? "Plataforma Única" : "Rotas Diretas de Operadoras",
        footerNote2: isGlobal ? "Alcance Global" : "Conformidade Regulatória 100%",
      },
    },
    coreServices: {
      badge: isGlobal ? "SERVIÇOS PRINCIPAIS" : `SERVIÇOS & INTERCONEXÕES EM ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Soluções de Comunicação Para" : `Melhores Serviços de Voz e SMS em ${country}`,
      titleLine2: isGlobal ? "Toda a Jornada do Cliente" : "Para Empresas em Expansão",
      description: isGlobal
        ? "Infraestrutura de telecomunicações modular projetada para alta disponibilidade em voz, mensagens e números virtuais no mundo todo."
        : `Infraestrutura de classe operadora em ${country} com 99,99% de disponibilidade, entrega de OTP em menos de 2s e interconexões locais diretas.`,
      services: [
        {
          title: isGlobal ? "Serviços de Voz" : `Terminação de Voz & SIP Trunk em ${country}`,
          description: isGlobal
            ? "SIP trunking internacional com rotas flexíveis orientadas à qualidade máxima, cobertura de CLI local e custos otimizados."
            : `Tráfego de chamadas de alta concorrência em ${country} com garantia de CLI, rotas premium e interconexão direta com operadoras locais.`,
          features: [
            isGlobal ? "Conexões de voz em alta definição" : "Garantia de Rota CLI Pura",
            isGlobal ? "Opções flexíveis de roteamento" : "Interconexões Diretas com Operadoras",
            isGlobal ? "Cobertura global e redundante" : `Números DID Virtuais em todo o(a) ${country}`,
          ],
        },
        {
          title: isGlobal ? "Mensagens SMS" : `Melhores Serviços de SMS em ${country}`,
          description: isGlobal
            ? "Envie SMS transacionais críticos, códigos OTP e mensagens corporativas ricas diretamente para celulares no mundo inteiro."
            : `SMS transacional ultrarrápido, códigos de verificação em menos de 2s e campanhas autorizadas em todas as operadoras em ${country}.`,
          features: [
            isGlobal ? "Entrega de OTP em milissegundos" : `Whitelist Direta de Operadoras em ${country}`,
            isGlobal ? "Alta garantia de entregabilidade" : "Entrega de OTP Garantida Sub-2s",
            isGlobal ? "Mensagens ricas com RCS" : "Failover Dinâmico entre Operadoras",
          ],
        },
        {
          title: isGlobal ? "Omnicanalidade" : `API Omnichannel & WhatsApp em ${country}`,
          description: isGlobal
            ? "Integre Voz, SMS, WhatsApp e Autenticação em uma suíte de APIs REST unificada e pronta para implementação imediata."
            : `API oficial do WhatsApp Business, mensageria interativa RCS e canais integrados para engajamento de clientes em ${country}.`,
          features: [
            isGlobal ? "API Oficial do WhatsApp Business" : "API Oficial do WhatsApp Business",
            isGlobal ? "Mensagens interativas RCS" : "Remetente Verificado RCS com Selo Oficial",
            isGlobal ? "APIs REST unificadas" : "APIs REST Unificadas Multicanal",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "SOLUÇÕES EMPRESARIAIS" : `SOLUÇÕES EMPRESARIAIS EM ${country.toUpperCase()}`,
      title: isGlobal ? "Soluções Para Toda a Jornada do Cliente" : `Soluções Desenvolvidas Para ${country}`,
      description: isGlobal
        ? "Conecte, engaje e comunique-se com seus clientes através de ferramentas seguras e confiáveis de voz, SMS e omnichannel."
        : `Infraestrutura de telecomunicação de alto desempenho desenhada para grandes corporações, fintechs e negócios em ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Autenticação OTP",
          tagline: "Seguro. Rápido. Confiável.",
          title: `Autenticação Instantânea por OTP (${country})`,
          description: `Entregue senhas de uso único com agilidade e máxima segurança para cadastros, logins, recuperação de conta e autorização de pagamentos em ${country}.`,
          features: [
            "Entrega de OTP ultrarrápida em menos de 2 segundos",
            "Proteção contra falhas com redundância entre operadoras",
            `Rotas otimizadas para todas as redes em ${country}`,
          ],
          customerStatus: "Identidade Verificada",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Seu código de verificação é",
            bodyBold: "53193",
            validTime: "Válido por 5 minutos. Não compartilhe.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Autenticação",
            title: "Confirme seu Número de Celular",
            subtitle: `Enviamos um código de verificação para o seu número cadastrado em ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verificar e Continuar",
            subNote: "Não recebeu o código?\nReenviar em 00:45",
          },
        },
        {
          id: "banking",
          name: "Bancos & Finanças",
          tagline: "Seguro. Conectado. Confiável.",
          title: `Serviços Financeiros & Bancários (${country})`,
          description: `Comunicação financeira altamente segura com alertas de transações em tempo real, extratos e notificações de saldo para instituições em ${country}.`,
          features: [
            "Canais criptografados com padrão de segurança bancária",
            "Notificações instantâneas de débito, crédito e transferências",
            "Alta capacidade de envio para SMS transacionais",
          ],
          customerStatus: "Transação Confirmada",
          notification: {
            header: "Alerta de Transação Bancária",
            body: `Seu pagamento de ${currency} 250,00 foi processado com sucesso.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Bancos",
            title: "Pagamento Confirmado",
            subtitle: `${currency} 250,00 processado com total segurança na sua conta.`,
            bankingDetails: {
              amount: `${currency} 250,00`,
              status: "Concluído",
              reference: "TXN-849201",
            },
            buttonText: "Ver Comprovante",
            subNote: "✓ Entregue via canal bancário dedicado e seguro",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Alcance. Engajamento. Conversão.",
          title: `Comunicação de Marketing (${country})`,
          description: `Engaje seu público com campanhas direcionadas de SMS e mensagens ricas com promoções personalizadas e comunicados de marca em ${country}.`,
          features: [
            "Envio massivo de SMS promocional com alta taxa de abertura",
            "Segmentação de audiência e agendamento inteligente",
            "Monitoramento de cliques e métricas de conversão em tempo real",
          ],
          customerStatus: "Oferta Entregue",
          notification: {
            header: "Oferta Exclusiva",
            line1: "DESCONTO ESPECIAL DE 30%",
            line2: `Condições imperdíveis disponíveis em todo(a) ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Ofertas Especiais",
            badge: "Tempo Limitado",
            title: "Desconto Exclusivo Para Você",
            subtitle: `Ganhe 30% OFF na sua próxima compra.\nVálido até o fim deste mês.`,
            buttonText: "Aproveitar Desconto",
            subNote: `✓ Enviado para assinantes verificados em ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Lembretes",
          tagline: "Pontual. Confiável. Automatizado.",
          title: `Lembretes Automatizados para Clientes (${country})`,
          description: `Mantenha seus clientes atualizados com lembretes automáticos de agendamentos, vencimento de faturas, renovações e reuniões em ${country}.`,
          features: [
            "Notificações automatizadas multicanal com antecedência",
            "Links diretos de pagamento integrados na mensagem",
            "Redução expressiva de ausências e inadimplência",
          ],
          customerStatus: "Lembrete Entregue",
          notification: {
            header: "Lembrete de Consulta",
            line1: "Agendado para Amanhã",
            line2: "Por favor, chegue com 10 minutos de antecedência.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Lembretes",
            title: "Compromisso Marcado para Amanhã",
            subtitle: "Seu horário foi confirmado com sucesso para as 10:30.",
            infoCard: {
              label: "Local / Unidade",
              value: `Unidade Central de ${country}`,
            },
            buttonText: "Confirmar Presença",
            subNote: "Responda 1 para confirmar ou 2 para reagendar",
          },
        },
        {
          id: "emergency",
          name: "Emergências",
          tagline: "Crítico. Rápido. Sempre Conectado.",
          title: `Alertas de Emergência e Segurança (${country})`,
          description: `Dispare alertas emergenciais prioritários instantaneamente quando cada segundo importa, garantindo proteção pública e continuidade de negócios em ${country}.`,
          features: [
            "Rotas de altíssima prioridade sem fila de espera",
            "Segmentação geográfica para alertas públicos em massa",
            "Redundância imediata com failover entre SMS e chamadas de voz",
          ],
          customerStatus: "Alerta Geral Enviado",
          notification: {
            header: "Alerta de Defesa Civil",
            line1: "Aviso Meteorológico Urgente",
            line2: "Siga as orientações das autoridades competentes.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Alerta de Emergência",
            title: "Aviso Meteorológico Urgente",
            subtitle: "Condições climáticas adversas detectadas. Permaneça em local protegido e acompanhe os avisos.",
            infoCard: {
              label: "Região Afetada",
              value: country,
            },
            buttonText: "Ver Áreas Seguras",
            subNote: "Notificação oficial de segurança pública",
          },
        },
        {
          id: "order",
          name: "Pedidos & Entregas",
          tagline: "Informe. Rastreie. Entregue.",
          title: `Alertas de Envio e Rastreamento em Tempo Real (${country})`,
          description: `Acompanhe cada etapa da entrega com avisos instantâneos de despacho, código de rastreio e autenticação de entrega por OTP em ${country}.`,
          features: [
            "Atualizações em tempo real sobre status e despacho",
            "Avisos de chegada do entregador com mapa ao vivo",
            "Código de confirmação OTP seguro para recebimento",
          ],
          customerStatus: "Saiu para Entrega",
          notification: {
            header: "Atualização de Pedido",
            line1: "Pedido #IN849201 Despachado",
            line2: `Sua encomenda chega hoje em ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Rastreio de Pedido",
            title: "Seu Pedido Está a Caminho",
            subtitle: "O entregador já está a caminho com o seu pacote.",
            infoCard: {
              label: "Código OTP de Entrega",
              value: "8492",
            },
            buttonText: "Acompanhar no Mapa",
            subNote: "Entrega sem contato físico habilitada",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "EXPERIÊNCIA POR SETOR" : `EXPERIÊNCIA SETORIAL - ${country.toUpperCase()}`,
      titleLine1: "Soluções de Comunicação Criadas",
      titleLine2: isGlobal ? "Para Cada Indústria" : `Para Grandes Empresas em ${country}`,
      description: isGlobal
        ? "Conecte, engaje e converse com seus clientes por meio de soluções consolidadas de voz, mensagens e canais digitais integrados."
        : `Infraestrutura adaptada aos regulamentos vigentes, exigências de conformidade e dinâmica dos consumidores em ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Bancos e Finanças",
          title: `Bancos & Fintechs em ${country}`,
          description: `SMS transacional protegido, conformidade financeira estrita e validação de pagamentos em tempo real em ${country}.`,
        },
        {
          id: "healthcare",
          name: "Saúde e Clínicas",
          title: `Hospitais & Clínicas em ${country}`,
          description: `Lembretes de consultas, avisos de exames e canais diretos para telemedicina em todo o(a) ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce e Varejo",
          title: `Comércio Eletrônico & Varejo em ${country}`,
          description: `Status de pedidos, avisos de promoções relâmpago e atendimento omnicanal para marcas em ${country}.`,
        },
        {
          id: "education",
          name: "Educação e Universidades",
          title: `Escolas & Universidades em ${country}`,
          description: `Comunicados de matrícula, avisos urgentes no campus e canais de relacionamento entre pais e instituições em ${country}.`,
        },
        {
          id: "travel",
          name: "Turismo e Hospitalidade",
          title: `Turismo & Aviação em ${country}`,
          description: `Atualizações de portão de embarque, confirmações de hospedagem e assistência 24/7 a viajantes em ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "FALE CONOSCO" : `CONECTE-SE CONOSCO EM ${country.toUpperCase()}`,
      titleLine1: "Vamos Construir a Conexão de",
      titleLine2: isGlobal ? "Comunicação Certa." : `Comunicação Ideal em ${country}.`,
      description: isGlobal
        ? "Com a iNet Global Services, sua empresa utiliza soluções robustas de SMS e voz para elevar o engajamento, fortalecer a segurança e simplificar processos. Oferecemos SMS transacional, códigos OTP e envio massivo com velocidade e confiabilidade comprovadas."
        : `Conte com a iNet Global para rotas diretas de SMS, terminação de voz com clareza cristalina e conformidade total com as normas em ${country}. Fale com nossos consultores corporativos para testes dedicados e tarifas exclusivas.`,
    },
    footer: {
      description: isGlobal
        ? "Infraestrutura global de comunicação para organizações que exigem máxima confiabilidade em voz, mensageria e omnicanalidade."
        : `Infraestrutura corporativa fornecendo voz de nível operadora, SMS, números DID virtuais e APIs multicanal em ${country} e no mundo.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Estados Unidos" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Todos os direitos reservados.`,
    },
  }),

  // 2. Russian (Русский - ru)
  ru: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "ГЛОБАЛЬНАЯ ТЕЛЕКОМ-ИНФРАСТРУКТУРА"
        : `ТЕЛЕКОММУНИКАЦИОННАЯ ИНФРАСТРУКТУРА В ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Глобальная Связь," : `Лучший SMS и Голосовой Трафик`,
      titleLine2: isGlobal ? "Созданная Для" : `В Стране: ${country},`,
      titleLine3: isGlobal ? "Масштабного Бизнеса." : `Корпоративного Уровня.`,
      description: isGlobal
        ? "Надежная голосовая связь, корпоративные сообщения и виртуальные номера для компаний, объединяющие филиалы, команды и клиентов по всему миру."
        : `Обеспечиваем предприятия в ${country} высокоскоростными SMS-каналами, ультранизкой задержкой голосовой связи и прямыми интерконнектами с операторами.`,
      primaryCta: isGlobal ? "Начать работу" : `Подключить в ${country}`,
      secondaryCta: isGlobal ? "Все услуги" : `Маршруты в ${country}`,
      timeline: {
        voice: isGlobal ? "Корпоративный голос" : `Голосовой трафик (CLI) в ${country}`,
        messaging: isGlobal ? "SMS и сообщения" : `Каналы SMS и OTP в ${country}`,
        numbers: isGlobal ? "Виртуальные номера" : `Виртуальные номера DID в ${country}`,
        footerNote1: isGlobal ? "Единая платформа" : "Прямые каналы операторов",
        footerNote2: isGlobal ? "Глобальный охват" : "100% соответствие регуляторным нормам",
      },
    },
    coreServices: {
      badge: isGlobal ? "ОСНОВНЫЕ УСЛУГИ" : `УСЛУГИ И ИНТЕРКОННЕКТЫ В ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Телеком-решения для каждого" : `Лучшие сервисы связи в ${country}`,
      titleLine2: isGlobal ? "этапа взаимодействия с клиентом" : "Для растущего бизнеса",
      description: isGlobal
        ? "Модульная инфраструктура связи операторского класса с высокой доступностью голосовых услуг, SMS и виртуальных номеров по всему миру."
        : `Телекоммуникационная платформа в ${country} с доступностью 99,99%, доставкой OTP менее 2 секунд и прямыми стыками с операторами.`,
      services: [
        {
          title: isGlobal ? "Голосовая связь" : `SIP-транкинг и голос в ${country}`,
          description: isGlobal
            ? "Международный SIP-транкинг с гибкой маршрутизацией, премиальным качеством CLI и оптимизированной стоимостью терминации."
            : `Высоконагруженный голосовой трафик в ${country} с гарантированной подстановкой номеров (CLI) и прямым подключением к местным сетям.`,
          features: [
            isGlobal ? "HD-качество голосовых соединений" : "Гарантия чистых CLI-маршрутов",
            isGlobal ? "Гибкие варианты маршрутизации" : "Прямые интерконнекты с операторами",
            isGlobal ? "Глобальное резервирование" : `Виртуальные номера DID по всей стране (${country})`,
          ],
        },
        {
          title: isGlobal ? "Сообщения SMS" : `Лучшие SMS-сервисы в ${country}`,
          description: isGlobal
            ? "Доставка транзакционных SMS, кодов подтверждения и бизнес-сообщений на мобильные телефоны по всему миру с высокой гарантией доставки."
            : `Молниеносные сервисные SMS, доставка OTP до 2 секунд и согласованные массовые рассылки по всем операторам в ${country}.`,
          features: [
            isGlobal ? "Мгновенная доставка OTP" : `Прямая регистрация буквенных Sender ID в ${country}`,
            isGlobal ? "Высокая гарантия доставки" : "Гарантия доставки OTP до 2 секунд",
            isGlobal ? "Мультимедийные сообщения RCS" : "Динамическая балансировка и защита от сбоев",
          ],
        },
        {
          title: isGlobal ? "Омниканальность" : `API омниканальности и WhatsApp в ${country}`,
          description: isGlobal
            ? "Единый набор REST API для интеграции голоса, SMS, WhatsApp и верификации, готовый к быстрому внедрению разработчиками."
            : `Официальный WhatsApp Business API, сообщения RCS и единые каналы коммуникации с клиентами в ${country}.`,
          features: [
            isGlobal ? "Официальный WhatsApp Business API" : "Официальный WhatsApp Business API",
            isGlobal ? "Интерактивные диалоги RCS" : "Верифицированный профиль бренда в RCS",
            isGlobal ? "Унифицированный REST API" : "Единая платформа REST API для всех каналов",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "БИЗНЕС-РЕШЕНИЯ" : `БИЗНЕС-РЕШЕНИЯ В ${country.toUpperCase()}`,
      title: isGlobal ? "Решения для каждого сценария взаимодействия" : `Решения для бизнеса в ${country}`,
      description: isGlobal
        ? "Обеспечьте надежную связь и вовлечение клиентов с помощью защищенных голосовых, SMS и омниканальных решений."
        : `Высокопроизводительный телеком-стек, оптимизированный для корпораций, финтех-проектов и масштабируемых компаний в ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Авторизация OTP",
          tagline: "Безопасно. Быстро. Надежно.",
          title: `Мгновенная доставка одноразовых паролей (${country})`,
          description: `Быстрая и безопасная доставка одноразовых кодов для регистрации, входа в аккаунт, сброса паролей и подтверждения платежей в ${country}.`,
          features: [
            "Доставка OTP менее чем за 2 секунды",
            "Автоматическое переключение между операторами при сбоях",
            `Оптимизированные каналы ко всем мобильным сетям в ${country}`,
          ],
          customerStatus: "Личность подтверждена",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Ваш код подтверждения:",
            bodyBold: "53193",
            validTime: "Действителен 5 минут. Никому не сообщайте.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Авторизация",
            title: "Подтвердите номер телефона",
            subtitle: `Мы отправили код подтверждения на ваш номер в ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Подтвердить и продолжить",
            subNote: "Не получили код?\nОтправить повторно через 00:45",
          },
        },
        {
          id: "banking",
          name: "Банкинг и финансы",
          tagline: "Безопасно. Стабильно. Проверено.",
          title: `Банковские и финансовые сервисы (${country})`,
          description: `Безопасные финансовые уведомления: мгновенные отчеты о транзакциях, списаниях, пополнениях и изменении баланса в ${country}.`,
          features: [
            "Шифрованные каналы банковского уровня безопасности",
            "Моментальные уведомления о списаниях и переводах",
            "Высокая пропускная способность для транзакционных сообщений",
          ],
          customerStatus: "Транзакция выполнена",
          notification: {
            header: "Уведомление от банка",
            body: `Платеж на сумму ${currency}250.00 успешно выполнен.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Банкинг",
            title: "Оплата прошла успешно",
            subtitle: `${currency}250.00 списано с вашего счета с подтверждением безопасности.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Выполнено",
              reference: "TXN-849201",
            },
            buttonText: "Посмотреть чек",
            subNote: "✓ Доставлено по защищенному выделенному каналу",
          },
        },
        {
          id: "marketing",
          name: "Маркетинг",
          tagline: "Охват. Вовлечение. Конверсия.",
          title: `Маркетинговые рассылки (${country})`,
          description: `Привлекайте клиентов с помощью таргетированных SMS-кампаний, персональных скидок и промо-акций в масштабе всей страны (${country}).`,
          features: [
            "Массовые рекламные рассылки с высоким коэффициентом открываемости",
            "Сегментация аудитории и интеллектуальное расписание",
            "Статистика кликов и конверсий в режиме реального времени",
          ],
          customerStatus: "Предложение доставлено",
          notification: {
            header: "Специальное предложение",
            line1: "СКИДКА 30% ДЛЯ ВАС",
            line2: `Эксклюзивные предложения действуют по всей стране: ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Акции и скидки",
            badge: "Ограниченное время",
            title: "Персональная скидка специально для вас",
            subtitle: `Получите скидку 30% на следующий заказ.\nПредложение активно до конца месяца.`,
            buttonText: "Получить скидку",
            subNote: `✓ Отправлено проверенным подписчикам в ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Напоминания",
          tagline: "Вовремя. Точно. Автоматизировано.",
          title: `Автоматические напоминания клиентам (${country})`,
          description: `Информируйте клиентов о записях на прием, приближающихся платежах, продлении подписок и запланированных событиях в ${country}.`,
          features: [
            "Автоматические рассылки по расписанию через разные каналы",
            "Ссылки на быструю оплату прямо в тексте сообщения",
            "Снижение числа неявок и просроченных платежей",
          ],
          customerStatus: "Напоминание доставлено",
          notification: {
            header: "Напоминание о записи",
            line1: "Запланировано на завтра",
            line2: "Пожалуйста, приходите за 10 минут до начала приема.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Напоминания",
            title: "Запись подтверждена на завтра",
            subtitle: "Ваш визит назначен на 10:30 утра.",
            infoCard: {
              label: "Адрес отделения",
              value: `Центральный офис в ${country}`,
            },
            buttonText: "Подтвердить визит",
            subNote: "Ответьте 1 для подтверждения или 2 для переноса",
          },
        },
        {
          id: "emergency",
          name: "Экстренные оповещения",
          tagline: "Важно. Мгновенно. Всегда на связи.",
          title: `Экстренное оповещение и безопасность (${country})`,
          description: `Мгновенная доставка критических оповещений, когда важна каждая секунда, для обеспечения безопасности населения и устойчивости бизнеса в ${country}.`,
          features: [
            "Высший приоритет доставки вне стандартных очередей",
            "Географическое таргетирование для массового информирования",
            "Резервирование каналов с автоматическим переходом на голос при сбоях SMS",
          ],
          customerStatus: "Оповещение доставлено",
          notification: {
            header: "Служба безопасности",
            line1: "Штормовое предупреждение",
            line2: "Следуйте инструкциям местных экстренных служб.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Экстренное оповещение",
            title: "Штормовое предупреждение",
            subtitle: "Зафиксированы неблагоприятные погодные условия. Оставайтесь в безопасном месте.",
            infoCard: {
              label: "Регион оповещения",
              value: country,
            },
            buttonText: "Список безопасных зон",
            subNote: "Официальное уведомление службы безопасности",
          },
        },
        {
          id: "order",
          name: "Статус заказов",
          tagline: "Информируйте. Отслеживайте. Доставляйте.",
          title: `Уведомления о доставке и заказах (${country})`,
          description: `Держите покупателей в курсе: оповещения об отправке, ссылки на отслеживание курьера и одноразовые коды подтверждения вручения в ${country}.`,
          features: [
            "Актуальный статус комплектации и отправки заказов",
            "Оповещение о приближении курьера с отслеживанием на карте",
            "Безопасное подтверждение вручения через проверочный код OTP",
          ],
          customerStatus: "Передано курьеру",
          notification: {
            header: "Статус заказа",
            line1: "Заказ #IN849201 передан курьеру",
            line2: `Доставка ожидается сегодня в ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Отслеживание доставки",
            title: "Ваш заказ уже в пути",
            subtitle: "Курьер везет вашу посылку по указанному адресу.",
            infoCard: {
              label: "Код для получения",
              value: "8492",
            },
            buttonText: "Смотреть на карте",
            subNote: "Доступна бесконтактная передача заказа",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "ЭКСПЕРТИЗА В ОТРАСЛЯХ" : `ОТРАСЛЕВАЯ ЭКСПЕРТИЗА - ${country.toUpperCase()}`,
      titleLine1: "Телекоммуникационные решения,",
      titleLine2: isGlobal ? "созданные для всех отраслей" : `разработанные для бизнеса в ${country}`,
      description: isGlobal
        ? "Объединяйте клиентов и масштабируйте каналы с надежной голосовой связью, SMS и омниканальными решениями."
        : `Инфраструктура, адаптированная под национальные регламенты, стандарты безопасности и привычки клиентов в ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Банки и финансы",
          title: `Банковский сектор и финтех в ${country}`,
          description: `Защищенные сервисные SMS, строгое соответствие регуляторным требованиям и верификация транзакций в реальном времени в ${country}.`,
        },
        {
          id: "healthcare",
          name: "Здравоохранение",
          title: `Медицинские центры и клиники в ${country}`,
          description: `Напоминания о приеме у врача, готовность результатов анализов и каналы связи для телемедицины по всей стране (${country}).`,
        },
        {
          id: "ecommerce",
          name: "Электронная коммерция",
          title: `Онлайн-торговля и ритейл в ${country}`,
          description: `Уведомления о посылках, персонализированные скидки и омниканальная клиентская поддержка для брендов в ${country}.`,
        },
        {
          id: "education",
          name: "Образование",
          title: `Университеты и школы в ${country}`,
          description: `Оповещения об экзаменах, рассылки для родителей и важные объявления учебных заведений в ${country}.`,
        },
        {
          id: "travel",
          name: "Туризм и гостиницы",
          title: `Путешествия и отели в ${country}`,
          description: `Изменения выходов на посадку, подтверждения бронирования номеров и поддержка гостей 24/7 в ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "СВЯЗАТЬСЯ С НАМИ" : `СВЯЗАТЬСЯ С НАМИ В ${country.toUpperCase()}`,
      titleLine1: "Постройте надежное телеком-решение",
      titleLine2: isGlobal ? "для вашей компании." : `для вашего бизнеса в ${country}.`,
      description: isGlobal
        ? "С решениями iNet Global Services компании получают масштабируемые SMS и голосовые инструменты для защиты данных, привлечения клиентов и оптимизации расходов. Транзакционные SMS, сервисы OTP и массовые рассылки — все с максимальной надежностью и скоростью."
        : `Станьте партнером iNet Global для получения прямых операторских SMS-маршрутов, безупречного голоса и полного юридического соответствия в ${country}. Свяжитесь с нашими экспертами для бесплатного тестирования и индивидуального расчета цен.`,
    },
    footer: {
      description: isGlobal
        ? "Глобальная инфраструктура корпоративных коммуникаций для компаний, которым требуется гарантированное качество голоса, сообщений и омниканальных API."
        : `Инфраструктура операторского класса, обеспечивающая надежную голосовую связь, SMS, виртуальные DID-номера и API в ${country} и по всему миру.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Все права защищены.`,
    },
  }),

  // 3. Italian (Italiano - it)
  it: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "INFRASTRUTTURA DI COMUNICAZIONE GLOBALE"
        : `INFRASTRUTTURA TELECOMUNICAZIONI IN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Comunicazione Globale," : `I Migliori Servizi SMS e`,
      titleLine2: isGlobal ? "Progettata Per" : `Traffico Voce in ${country},`,
      titleLine3: isGlobal ? "Le Grandi Imprese." : `Pronti Per la Scala Enterprise.`,
      description: isGlobal
        ? "Servizi voce affidabili, messaggistica aziendale e numeri virtuali per connettere sedi, team e clienti senza confini."
        : `Soluzioni telecomunicative per aziende in ${country} con canali SMS ad alta velocità, terminazione voce a bassissima latenza e interconnessioni dirette.`,
      primaryCta: isGlobal ? "Inizia Ora" : `Inizia in ${country}`,
      secondaryCta: isGlobal ? "Esplora Servizi" : `Rotte in ${country}`,
      timeline: {
        voice: isGlobal ? "Voce Aziendale" : `Traffico Voce (CLI) in ${country}`,
        messaging: isGlobal ? "SMS & Messaggistica" : `Rotte SMS e OTP in ${country}`,
        numbers: isGlobal ? "Numeri Virtuali" : `Numeri Virtuali DID in ${country}`,
        footerNote1: isGlobal ? "Piattaforma Unica" : "Rotte Dirette con Operatori",
        footerNote2: isGlobal ? "Copertura Mondiale" : "100% Conforme alle Normative",
      },
    },
    coreServices: {
      badge: isGlobal ? "SERVIZI PRINCIPALI" : `SERVIZI E INTERCONNESSIONI IN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Soluzioni di comunicazione per ogni" : `Migliori Servizi Voce e SMS in ${country}`,
      titleLine2: isGlobal ? "fase del customer journey" : "Per Imprese in Crescita",
      description: isGlobal
        ? "Infrastruttura telecom scalabile e modulare progettata per un'elevata disponibilità nei servizi voce, SMS e numeri virtuali nel mondo."
        : `Infrastruttura di livello operatore in ${country} con disponibilità al 99,99%, recapito OTP in meno di 2 secondi e interconnessioni dirette.`,
      services: [
        {
          title: isGlobal ? "Servizi Voce" : `SIP Trunking e Voce in ${country}`,
          description: isGlobal
            ? "SIP trunking internazionale con routing flessibile, alta qualità audio, copertura CLI trasparente e costi di terminazione ottimizzati."
            : `Traffico voce ad alta contemporaneità in ${country} con garanzia CLI, terminazione su rotte premium e connessioni dirette ai carrier locali.`,
          features: [
            isGlobal ? "Qualità audio HD certificata" : "Garanzia di Rotte CLI Pure",
            isGlobal ? "Opzioni di routing personalizzabili" : "Interconnessioni Dirette con Operatori",
            isGlobal ? "Copertura globale e ridondante" : `Numeri DID Virtuali in tutta ${country}`,
          ],
        },
        {
          title: isGlobal ? "Messaggistica SMS" : `Servizi SMS Avanzati in ${country}`,
          description: isGlobal
            ? "Invio di SMS transazionali critici, codici OTP e comunicazioni aziendali ricche direttamente sui dispositivi mobili in tutto il mondo."
            : `SMS transazionali istantanei, codici di verifica in meno di 2 secondi e campagne promozionali conformi su tutti gli operatori in ${country}.`,
          features: [
            isGlobal ? "Consegna OTP immediata" : `Registrazione Sender ID Diretta in ${country}`,
            isGlobal ? "Garanzia di consegna superiore" : "Garanzia di Consegna OTP Sub-2s",
            isGlobal ? "Messaggi ricchi RCS" : "Failover Dinamico e Routing Multi-Operatore",
          ],
        },
        {
          title: isGlobal ? "Omnicanalità" : `API Omnichannel & WhatsApp in ${country}`,
          description: isGlobal
            ? "Unisci Voce, SMS, WhatsApp e Notifiche in una suite di REST API moderne pensata per sviluppatori e pronta all'uso."
            : `API ufficiale WhatsApp Business, messaggistica interattiva RCS e comunicazioni integrate su misura per clienti in ${country}.`,
          features: [
            isGlobal ? "API Ufficiale WhatsApp Business" : "API Ufficiale WhatsApp Business",
            isGlobal ? "Conversazioni avanzate su RCS" : "Mittente Verificato RCS con Badge Ufficiale",
            isGlobal ? "Suite REST API unificata" : "API REST Multicanale Complete",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "SOLUZIONI AZIENDALI" : `SOLUZIONI AZIENDALI IN ${country.toUpperCase()}`,
      title: isGlobal ? "Soluzioni per ogni fase del percorso cliente" : `Soluzioni Pensate Per ${country}`,
      description: isGlobal
        ? "Coinvolgi i tuoi clienti e crea interazioni affidabili tramite canali vocali, SMS e soluzioni omnicanale ad alte prestazioni."
        : `Stack di telecomunicazioni avanzato progettato per imprese, fintech e organizzazioni ad alto volume di traffico in ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Autenticazione OTP",
          tagline: "Sicuro. Veloce. Affidabile.",
          title: `Autenticazione Istantanea con OTP (${country})`,
          description: `Invia password monouso in modo rapido e sicuro per registrazioni, accessi, recupero credenziali e autorizzazione pagamenti in ${country}.`,
          features: [
            "Consegna OTP garantita in meno di 2 secondi",
            "Protezione automatica con failover multi-operatore",
            `Canali prioritari ottimizzati per tutti gli operatori in ${country}`,
          ],
          customerStatus: "Identità Verificata",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Il tuo codice di verifica è",
            bodyBold: "53193",
            validTime: "Valido per 5 minuti. Non condividere.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Autenticazione",
            title: "Verifica il tuo Numero Mobile",
            subtitle: `Abbiamo inviato un codice di sicurezza al tuo numero registrato in ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verifica e Continua",
            subNote: "Non hai ricevuto il codice?\nInvia di nuovo in 00:45",
          },
        },
        {
          id: "banking",
          name: "Banche e Finanza",
          tagline: "Protetto. Connesso. Trasparente.",
          title: `Servizi Bancari e Finanziari (${country})`,
          description: `Comunicazioni finanziarie conformi con avvisi di transazione in tempo reale, saldo conto e conferme di bonifico per istituti in ${country}.`,
          features: [
            "Connessioni crittografate con standard bancari",
            "Notifiche istantanee di addebito, accredito e transazione",
            "Canali transazionali ad altissima capacità",
          ],
          customerStatus: "Transazione Eseguita",
          notification: {
            header: "Avviso Transazione Bancaria",
            body: `Il tuo pagamento di ${currency}250.00 è stato completato con successo.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Servizi Bancari",
            title: "Pagamento Riuscito",
            subtitle: `${currency}250.00 elaborato in totale sicurezza sul tuo conto.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Completato",
              reference: "TXN-849201",
            },
            buttonText: "Visualizza Ricevuta",
            subNote: "✓ Inviato tramite canale bancario protetto e certificato",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Raggiungi. Coinvolgi. Converti.",
          title: `Campagne di Comunicazione e Marketing (${country})`,
          description: `Raggiungi i consumatori con campagne mirate di messaggi promozionali, sconti dedicati e comunicazioni di brand su vasta scala in ${country}.`,
          features: [
            "Invio massivo di SMS promozionali ad altissimo tasso di apertura",
            "Segmentazione avanzata del pubblico e programmazione oraria",
            "Analisi dei click e monitoraggio delle conversioni in tempo reale",
          ],
          customerStatus: "Offerta Consegnata",
          notification: {
            header: "Offerta Esclusiva",
            line1: "SCONTO SPECIALE DEL 30%",
            line2: `Offerte imperdibili valide in tutta la regione (${country}).`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Offerte Speciali",
            badge: "Tempo Limitato",
            title: "Sconto Esclusivo Riservato a Te",
            subtitle: `Approfitta del 30% di sconto sul tuo prossimo ordine.\nOfferta valida fino a fine mese.`,
            buttonText: "Riscatta Offerta",
            subNote: `✓ Inviato a utenti verificati in ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Promemoria",
          tagline: "Puntuale. Automatico. Efficace.",
          title: `Promemoria Automatici per i Clienti (${country})`,
          description: `Informa i clienti in anticipo su appuntamenti, scadenze fatture, rinnovi di abbonamento ed eventi in calendario in ${country}.`,
          features: [
            "Notifiche automatiche multicanale pianificate",
            "Link di pagamento sicuri inseriti direttamente nel messaggio",
            "Riduzione drastica dei mancati appuntamenti e dei ritardi di pagamento",
          ],
          customerStatus: "Promemoria Recapitato",
          notification: {
            header: "Promemoria Appuntamento",
            line1: "Fissato per Domani",
            line2: "Ti preghiamo di presentarti 10 minuti prima dell'orario stabilito.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Promemoria",
            title: "Appuntamento Confermato per Domani",
            subtitle: "La tua sessione è programmata per le ore 10:30.",
            infoCard: {
              label: "Sede / Struttura",
              value: `Centro Principale ${country}`,
            },
            buttonText: "Conferma Presenza",
            subNote: "Rispondi 1 per confermare o 2 per riprogrammare",
          },
        },
        {
          id: "emergency",
          name: "Avvisi d'Emergenza",
          tagline: "Critico. Tempestivo. Connesso.",
          title: `Notifiche di Emergenza e Pubblica Sicurezza (${country})`,
          description: `Diffusione istantanea di avvisi prioritari quando ogni secondo è fondamentale, per tutelare la sicurezza dei cittadini e la continuità operativa in ${country}.`,
          features: [
            "Routing ad altissima priorità con canale dedicato",
            "Targeting geografico per avvisi alla popolazione su vasta scala",
            "Failover automatico su chiamate vocali in caso di indisponibilità SMS",
          ],
          customerStatus: "Avviso Straordinario Inviato",
          notification: {
            header: "Avviso di Protezione Civile",
            line1: "Allerta Meteo Urgente",
            line2: "Seguire scrupolosamente le indicazioni delle autorità.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Allerta di Sicurezza",
            title: "Allerta Meteo Urgente",
            subtitle: "Condizioni meteorologiche avverse segnalate nella tua area. Rimani al sicuro e segui gli aggiornamenti.",
            infoCard: {
              label: "Area Interessata",
              value: country,
            },
            buttonText: "Visualizza Zone Sicure",
            subNote: "Comunicazione ufficiale di pubblica sicurezza",
          },
        },
        {
          id: "order",
          name: "Ordini e Spedizioni",
          tagline: "Informa. Traccia. Consegna.",
          title: `Stato Ordini e Spedizioni in Tempo Reale (${country})`,
          description: `Aggiorna i tuoi clienti durante tutta la consegna: notifiche di partenza, tracking del corriere e verifica tramite codice OTP alla consegna in ${country}.`,
          features: [
            "Notifiche in tempo reale sulla preparazione e spedizione",
            "Avviso di arrivo del corriere con mappa interattiva",
            "Codice OTP protetto per la conferma del ritiro",
          ],
          customerStatus: "In Consegna",
          notification: {
            header: "Aggiornamento Spedizione",
            line1: "Ordine #IN849201 Spedito",
            line2: `Il pacco verrà consegnato oggi in ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Tracciamento Spedizione",
            title: "Il tuo Pacco è in Arrivo",
            subtitle: "Il corriere è in viaggio per consegnare la tua spedizione.",
            infoCard: {
              label: "Codice OTP Ritiro",
              value: "8492",
            },
            buttonText: "Segui sulla Mappa",
            subNote: "Consegna senza contatto abilitata",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "COMPETENZE DI SETTORE" : `COMPETENZE DI SETTORE - ${country.toUpperCase()}`,
      titleLine1: "Soluzioni di Telecomunicazione Progettate",
      titleLine2: isGlobal ? "Per Ogni Settore di Mercato" : `Per le Aziende in ${country}`,
      description: isGlobal
        ? "Crea relazioni solide con i tuoi clienti sfruttando servizi professionali voce, messaggistica istantanea e canali digitali integrati."
        : `Infrastruttura conforme alle normative locali, agli standard di sicurezza e alle abitudini degli utenti in ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Banche e Finanza",
          title: `Banche e Fintech in ${country}`,
          description: `SMS transazionali ad alta sicurezza, conformità bancaria e autenticazione pagamenti in tempo reale in ${country}.`,
        },
        {
          id: "healthcare",
          name: "Sanità e Cliniche",
          title: `Ospedali e Strutture Sanitarie in ${country}`,
          description: `Promemoria visite mediche, notifiche di referti pronti e canali di supporto per telemedicina in ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce e Vendite",
          title: `Commercio Elettronico e Retail in ${country}`,
          description: `Tracciamento ordini in tempo reale, promozioni flash e assistenza clienti omnicanale per marchi in ${country}.`,
        },
        {
          id: "education",
          name: "Istruzione e Università",
          title: `Scuole e Atenei Universitari in ${country}`,
          description: `Comunicazioni relative a esami e immatricolazioni, avvisi urgenti di campus e canali per studenti e famiglie in ${country}.`,
        },
        {
          id: "travel",
          name: "Turismo e Viaggi",
          title: `Turismo e Trasporti in ${country}`,
          description: `Aggiornamenti sui voli, conferme di prenotazione alberghiera e supporto per viaggiatori 24/7 in ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "CONTATTACI" : `CONTATTACI IN ${country.toUpperCase()}`,
      titleLine1: "Costruiamo Insieme la Connessione",
      titleLine2: isGlobal ? "Perfetta per il tuo Business." : `Ideale per le tue Attività in ${country}.`,
      description: isGlobal
        ? "Con iNet Global Services, le aziende ottengono soluzioni SMS e voce affidabili per incrementare l'ingaggio dei clienti, innalzare la sicurezza e ottimizzare i processi operativi. Che tu abbia bisogno di SMS transazionali, OTP o invii massivi, la nostra piattaforma offre prestazioni senza compromessi."
        : `Collabora con iNet Global per ottenere rotte SMS dirette, voce con qualità cristallina e conformità totale alle leggi locali in ${country}. Contatta subito il nostro team commerciale per test dedicati e tariffe su misura.`,
    },
    footer: {
      description: isGlobal
        ? "Infrastruttura di telecomunicazione globale per aziende che pretendono massima affidabilità nei servizi voce, messaggistica e connettività omnicanale."
        : `Infrastruttura di livello enterprise per la fornitura di voce operatore, SMS, numerazioni virtuali DID e API multicanale in ${country} e in tutto il mondo.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Stati Uniti" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Tutti i diritti riservati.`,
    },
  }),

  // 4. Korean (한국어 - ko)
  ko: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "글로벌 통신 인프라 플랫폼"
        : `${country.toUpperCase()} 통신 인프라 솔루션`,
      titleLine1: isGlobal ? "글로벌 비즈니스를 위한," : `최고의 SMS 및 음성 트래픽`,
      titleLine2: isGlobal ? "안정적인 커뮤니케이션" : `${country} 현지 엔터프라이즈 서비스,`,
      titleLine3: isGlobal ? "최고의 통신 인프라." : `대규모 엔터프라이즈 전용 설계.`,
      description: isGlobal
        ? "국경과 팀, 모든 고객 접점을 원활하게 연결해야 하는 기업을 위한 신뢰할 수 있는 음성 통신, 엔터프라이즈 메시징 및 가상 번호 솔루션입니다."
        : `초고속 SMS 전송 경로, 초저지연 음성 통신 종단 및 현지 통신사 직접 연동망을 통해 ${country} 내 기업의 비즈니스를 지원합니다.`,
      primaryCta: isGlobal ? "지금 시작하기" : `${country}에서 시작하기`,
      secondaryCta: isGlobal ? "서비스 둘러보기" : `${country} 라우트 확인하기`,
      timeline: {
        voice: isGlobal ? "비즈니스 음성" : `${country} 음성 트래픽 (CLI)`,
        messaging: isGlobal ? "SMS 및 메시징" : `${country} SMS 및 OTP 라우트`,
        numbers: isGlobal ? "가상 번호 (DID)" : `${country} 가상 번호 DID`,
        footerNote1: isGlobal ? "단일 통합 플랫폼" : "통신사 직접 연동 경로",
        footerNote2: isGlobal ? "전 세계 커버리지" : "100% 현지 규제 준수",
      },
    },
    coreServices: {
      badge: isGlobal ? "핵심 서비스" : `${country.toUpperCase()} 서비스 및 통신사 직접 연동`,
      titleLine1: isGlobal ? "고객과의 모든 여정을 위한" : `${country} 최고의 음성 및 메시징 서비스`,
      titleLine2: isGlobal ? "엔터프라이즈 통신 솔루션" : "성장하는 기업을 위한 최적의 인프라",
      description: isGlobal
        ? "전 세계 어디서나 고가용성 음성 통화, 대용량 메시징, 가상 번호를 안정적으로 제공하는 모듈형 텔레콤 인프라입니다."
        : `99.99% 가동 시간, 2초 이내의 빠른 OTP 인증 및 통신사 직접 연동을 보장하는 ${country} 캐리어급 통신 네트워크입니다.`,
      services: [
        {
          title: isGlobal ? "음성 서비스" : `${country} 음성 및 SIP 트렁킹`,
          description: isGlobal
            ? "최고의 통화 음질, 현지 발신번호 표시(CLI) 및 최적화된 통화 원가를 바탕으로 설계된 글로벌 SIP 트렁킹 서비스입니다."
            : `발신번호 표시 보장, 프리미엄 통화 품질 및 현지 통신사 직접 연결을 갖춘 ${country} 내 고용량 음성 트래픽 처리 솔루션입니다.`,
          features: [
            isGlobal ? "고음질 HD 음성 연결" : "순수 CLI 발신번호 보장",
            isGlobal ? "유연한 라우팅 옵션" : "현지 통신사 직접 연동",
            isGlobal ? "글로벌 이중화 커버리지" : `${country} 전역 가상 DID 및 수신자부담 번호`,
          ],
        },
        {
          title: isGlobal ? "메시징 솔루션" : `${country} 엔터프라이즈 SMS 서비스`,
          description: isGlobal
            ? "전 세계 휴대폰으로 필수 트랜잭션 SMS, 일회용 비밀번호(OTP), 풍부한 비즈니스 메시지를 높은 도달률로 직접 전달합니다."
            : `초고속 트랜잭션 알림, 2초 이내 인증 코드 전송, ${country} 모든 이동통신사 규정을 준수하는 대량 발송 시스템입니다.`,
          features: [
            isGlobal ? "초단위 빠른 OTP 전송" : `${country} 공식 발신번호 화이트리스트 등록`,
            isGlobal ? "탁월한 도달률 보장" : "2초 이내 OTP 도착 보장",
            isGlobal ? "RCS 리치 메시징 지원" : "장애 방지 동적 다중 통신사 라우팅",
          ],
        },
        {
          title: isGlobal ? "옴니채널 연동" : `${country} 옴니채널 및 WhatsApp API`,
          description: isGlobal
            ? "음성, SMS, WhatsApp, 본인 인증 기능을 개발자 친화적인 단일 REST API 제품군으로 손쉽게 통합하여 즉시 배포할 수 있습니다."
            : `공식 WhatsApp Business API, RCS 인터랙티브 메시징 및 ${country} 고객 맞춤형 다채널 커뮤니케이션 기능을 제공합니다.`,
          features: [
            isGlobal ? "공식 WhatsApp Business API" : "공식 WhatsApp Business API",
            isGlobal ? "RCS 대화형 인터랙티브 메시지" : "인증된 기업 뱃지가 포함된 RCS 프로필",
            isGlobal ? "통합 REST API 제품군" : "통합 다채널 REST API 완비",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "비즈니스 솔루션" : `${country.toUpperCase()} 비즈니스 솔루션`,
      title: isGlobal ? "고객 여정의 모든 순간을 위한 통신 솔루션" : `${country} 비즈니스를 위해 설계된 솔루션`,
      description: isGlobal
        ? "안전하고 신뢰할 수 있는 음성, SMS, 옴니채널 도구를 통해 고객과 긴밀하게 소통하고 연결을 유지하세요."
        : `${country}의 대기업, 금융기관, 핀테크 및 고성장 기업을 위해 최적화된 고성능 통신 스택입니다.`,
      solutions: [
        {
          id: "otp",
          name: "OTP 본인인증",
          tagline: "보안. 신속. 신뢰.",
          title: `초고속 OTP 일회용 비밀번호 인증 (${country})`,
          description: `${country} 전역에서 신규 회원가입, 로그인, 계정 복구 및 결제 승인 시 일회용 보안 비밀번호를 가장 빠르고 안전하게 전달합니다.`,
          features: [
            "2초 이내의 안정적인 초고속 OTP 발송",
            "통신사 장애 시 자동 우회 다중 경로 보호",
            `${country} 내 모든 통신사에 맞춤 최적화된 경로`,
          ],
          customerStatus: "본인 인증 완료",
          notification: {
            header: `iNet OTP (${country})`,
            body: "고객님의 인증번호는 다음과 같습니다:",
            bodyBold: "53193",
            validTime: "5분간 유효합니다. 타인에게 절대 공유하지 마세요.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "본인인증",
            title: "휴대폰 번호 인증",
            subtitle: `${country}에 등록된 휴대폰 번호로 인증번호 5자리를 전송했습니다.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "인증 후 계속 진행",
            subNote: "인증번호를 받지 못하셨나요?\n00:45 후 재전송 가능",
          },
        },
        {
          id: "banking",
          name: "금융 및 뱅킹",
          tagline: "철저한 보안. 연결. 높은 신뢰.",
          title: `금융 및 핀테크 알림 서비스 (${country})`,
          description: `${country} 내 금융기관 및 핀테크를 위해 실시간 거래 내역, 잔액 변동, 계좌 이체 알림을 금융 보안 표준으로 전달합니다.`,
          features: [
            "금융 전용 암호화 보안 파이프라인 적용",
            "실시간 입출금 및 결제 알림 즉시 발송",
            "대용량 트랜잭션 전송에 최적화된 고성능 인프라",
          ],
          customerStatus: "거래 처리 완료",
          notification: {
            header: "은행 입출금 거래 알림",
            body: `고객님의 ${currency}250.00 결제가 성공적으로 승인되었습니다.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "금융 서비스",
            title: "결제 완료 안내",
            subtitle: `${currency}250.00 금액이 안전하게 정상 처리되었습니다.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "처리 완료",
              reference: "TXN-849201",
            },
            buttonText: "이용내역 확인",
            subNote: "✓ 전용 금융 보안 네트워크를 통해 안전하게 전달됨",
          },
        },
        {
          id: "marketing",
          name: "마케팅 메시징",
          tagline: "도달. 참여. 매출 전환.",
          title: `타깃 마케팅 커뮤니케이션 (${country})`,
          description: `${country} 전역의 고객에게 프로모션, 시즌 할인, 신제품 출시 알림을 맞춤형 대량 메시징으로 신속하게 전달하세요.`,
          features: [
            "열람률 높은 대용량 마케팅 SMS 발송 지원",
            "정밀한 고객 세그먼트 분류 및 스마트 예약 발송",
            "실시간 링크 클릭 추적 및 전환 성과 분석",
          ],
          customerStatus: "혜택 안내 전달됨",
          notification: {
            header: "회원 전용 특별 혜택",
            line1: "특별 30% 즉시 할인 쿠폰",
            line2: `${country} 전 지역에서 사용 가능한 혜택입니다.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "특별 프로모션",
            badge: "기간 한정",
            title: "고객님만을 위한 특별 할인",
            subtitle: `다음 구매 시 30% 할인 혜택을 누려보세요.\n본 혜택은 이달 말까지 유효합니다.`,
            buttonText: "쿠폰 받기",
            subNote: `✓ ${country} 내 수신 동의 회원에게 발송된 공식 메시지`,
          },
        },
        {
          id: "reminders",
          name: "일정 및 리마인더",
          tagline: "정확한 시간. 신뢰. 자동화.",
          title: `고객 맞춤형 자동 리마인더 (${country})`,
          description: `${country} 고객의 예약 일정, 청구서 납부 기한, 정기 구독 갱신 등 잊기 쉬운 일정을 자동 알림으로 전달합니다.`,
          features: [
            "다채널 일정 자동 알림 시스템",
            "메시지 내 즉시 결제 가능한 다이렉트 링크 삽입",
            "예약 노쇼(No-Show) 및 연체율 획기적 감소",
          ],
          customerStatus: "안내 발송 완료",
          notification: {
            header: "방문 예약 안내",
            line1: "내일 방문 예정입니다",
            line2: "예약 시간 10분 전까지 도착해 주시기 바랍니다.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "예약 리마인더",
            title: "내일 방문 일정이 있습니다",
            subtitle: "고객님의 예약이 오전 10:30으로 확정되었습니다.",
            infoCard: {
              label: "방문 장소 / 지점",
              value: `${country} 중앙 센터`,
            },
            buttonText: "방문 확정하기",
            subNote: "참석 시 1번, 일정 변경 시 2번을 회신해 주세요",
          },
        },
        {
          id: "emergency",
          name: "긴급 재난 알림",
          tagline: "신속. 긴급. 상시 연결.",
          title: `긴급 안전 방송 및 재난 알림 (${country})`,
          description: `초 단위가 중요한 긴급 상황 발생 시 ${country} 전역에 최우선 알림을 전달하여 인명 안전과 비즈니스 연속성을 보호합니다.`,
          features: [
            "일반 대기열을 우회하는 최우선 순위 긴급 전송 라우트",
            "대규모 주민 알림을 위한 정밀 지리적 권역 타기팅",
            "SMS 수신 불가 시 음성 안내로 자동 전환되는 이중화 보호",
          ],
          customerStatus: "긴급 알림 발송됨",
          notification: {
            header: "재난안전대책본부 안내",
            line1: "기상 이변 긴급 주의보",
            line2: "안전 지침을 준수하시고 외출을 자제해 주세요.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "긴급 안전 알림",
            title: "기상 이변 긴급 주의보",
            subtitle: "해당 지역에 악천후가 발생했습니다. 실내에 머무르며 안내 방송에 주의를 기울여 주십시오.",
            infoCard: {
              label: "발령 지역",
              value: country,
            },
            buttonText: "안전 대피소 확인",
            subNote: "공식 공공 안전 방송 알림",
          },
        },
        {
          id: "order",
          name: "주문 및 배송",
          tagline: "안내. 위치 추적. 안전 배송.",
          title: `실시간 주문 및 배송 추적 알림 (${country})`,
          description: `${country} 고객에게 출고 안내, 실시간 택배 배송 현황 및 배송 기사 전달 시 인증번호까지 모든 단계를 실시간으로 안내합니다.`,
          features: [
            "실시간 상품 출고 및 집하 배송 상태 알림",
            "배송 기사 도착 예정 안내 및 실시간 위치 링크",
            "안전한 수령을 위한 보안 배송 인증 OTP",
          ],
          customerStatus: "배송 출발 완료",
          notification: {
            header: "주문 배송 현황 안내",
            line1: "주문번호 #IN849201 배송 출발",
            line2: `고객님의 상품이 오늘 ${country} 주소지로 도착할 예정입니다.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "배송 현황 조회",
            title: "상품이 배송 중입니다",
            subtitle: "배송 기사님이 고객님의 상품을 전달하기 위해 이동 중입니다.",
            infoCard: {
              label: "수령 확인 인증번호",
              value: "8492",
            },
            buttonText: "배송 위치 지도 확인",
            subNote: "비대면 문 앞 안전 배송 지원",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "산업별 전문 솔루션" : `산업별 솔루션 - ${country.toUpperCase()}`,
      titleLine1: "모든 산업 환경에 맞춰 설계된",
      titleLine2: isGlobal ? "엔터프라이즈 통신 솔루션" : `${country} 기업을 위한 특화 솔루션`,
      description: isGlobal
        ? "검증된 음성, 메시징, 디지털 채널을 결합하여 고객과의 소통을 원활하게 구축하고 확장하세요."
        : `${country} 현지 통신 법령, 정보보호 기준 및 소비자 이용 패턴에 정밀하게 맞춰진 맞춤형 인프라입니다.`,
      industries: [
        {
          id: "banking",
          name: "금융 및 뱅킹",
          title: `${country} 뱅킹 및 핀테크`,
          description: `고보안 트랜잭션 SMS, 전자금융 컴플라이언스 준수 및 실시간 인증 지원 (${country}).`,
        },
        {
          id: "healthcare",
          name: "의료 및 헬스케어",
          title: `${country} 병원 및 의료 클리닉`,
          description: `진료 예약 리마인더, 처방전 안내 및 원격 진료 소통 지원 (${country}).`,
        },
        {
          id: "ecommerce",
          name: "이커머스 및 리테일",
          title: `${country} 전자상거래 및 유통`,
          description: `실시간 배송 조회, 특가 프로모션 메시지 및 다채널 고객센터 지원 (${country}).`,
        },
        {
          id: "education",
          name: "교육 및 대학교",
          title: `${country} 교육기관 및 대학교`,
          description: `합격 안내, 캠퍼스 긴급 공지, 등록금 납부 알림 및 학부모 알림 시스템 (${country}).`,
        },
        {
          id: "travel",
          name: "항공 및 여행",
          title: `${country} 여행 및 호텔`,
          description: `탑승 게이트 변경 안내, 호텔 예약 확인 및 연중무휴 24시간 여행객 지원 (${country}).`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "문의하기" : `${country.toUpperCase()} 지사 문의하기`,
      titleLine1: "비즈니스에 최적화된",
      titleLine2: isGlobal ? "통신 인프라를 구축하세요." : `${country} 맞춤형 통신 인프라를 구축하세요.`,
      description: isGlobal
        ? "iNet Global Services를 통해 기업은 안정적인 비즈니스 SMS 솔루션을 도입하여 고객 참여도를 높이고 보안을 강화하며 운영을 간소화할 수 있습니다. 트랜잭션 메시지부터 OTP 인증, 대량 발송까지 신속하고 강력한 서비스를 제공합니다."
        : `${country} 전용 통신사 직결 SMS 경로, 선명한 프리미엄 음성 통신 및 규제 완전 준수를 위해 iNet Global과 파트너십을 맺으세요. 전담 기업 담당자와 상담하여 무료 테스트와 맞춤 요금을 확인해 보세요.`,
    },
    footer: {
      description: isGlobal
        ? "안정적인 음성, 대용량 메시징, 옴니채널 연결을 필요로 하는 전 세계 기업을 위한 통신 인프라입니다."
        : `${country} 및 전 세계 시장에서 통신사급 음성, SMS, 가상 DID 번호, 옴니채널 API를 제공하는 기업용 인프라입니다.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "미국" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). 모든 권리 보유.`,
    },
  }),

  // 5. Dutch (Nederlands - nl)
  nl: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "WERELDWIJDE COMMUNICATIE-INFRASTRUCTUUR"
        : `TELECOM INFRASTRUCTUUR IN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Wereldwijde Verbinding," : `Beste SMS- & Spraakverkeer`,
      titleLine2: isGlobal ? "Gebouwd Voor Het" : `In ${country},`,
      titleLine3: isGlobal ? "Moderne Bedrijf." : `Klaar Voor Zakelijke Schaal.`,
      description: isGlobal
        ? "Betrouwbare spraak, zakelijke messaging en virtuele nummers voor bedrijven die grenzeloos verbonden willen blijven over teams en klantcontactmomenten heen."
        : `Wij ondersteunen bedrijven in ${country} met SMS-routes met hoge capaciteit, ultra-lage latentie voor spraakterminatie en directe verbindingen met telecomoperatoren.`,
      primaryCta: isGlobal ? "Aan de slag" : `Start in ${country}`,
      secondaryCta: isGlobal ? "Diensten bekijken" : `Routes in ${country}`,
      timeline: {
        voice: isGlobal ? "Zakelijke Spraak" : `Spraakverkeer (CLI) in ${country}`,
        messaging: isGlobal ? "SMS & Messaging" : `SMS- en OTP-routes in ${country}`,
        numbers: isGlobal ? "Virtuele Nummers" : `Virtuele DID-nummers in ${country}`,
        footerNote1: isGlobal ? "Eén platform" : "Directe Operator Routes",
        footerNote2: isGlobal ? "Wereldwijd bereik" : "100% Conform Regelgeving",
      },
    },
    coreServices: {
      badge: isGlobal ? "KERNDIENSTEN" : `DIENSTEN EN INTERCONNECTS IN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Communicatieoplossingen voor elke" : `Beste Spraak- & SMS-diensten in ${country}`,
      titleLine2: isGlobal ? "fase van de klantreis" : "Voor Groeiende Ondernemingen",
      description: isGlobal
        ? "Modulaire telecominfrastructuur ontworpen voor maximale beschikbaarheid in spraak, messaging en virtuele nummers wereldwijd."
        : `Carrier-grade telecominfrastructuur in ${country} met 99,99% uptime, OTP-levering onder 2 seconden en directe operatorverbindingen.`,
      services: [
        {
          title: isGlobal ? "Spraakoplossingen" : `SIP Trunking & Spraak in ${country}`,
          description: isGlobal
            ? "Internationale SIP trunking met flexibele routes, kristalheldere audiokwaliteit, lokale nummerherkenning (CLI) en geoptimaliseerde tarieven."
            : `Hoogwaardig spraakverkeer in ${country} met gegarandeerde nummerweergave, premium routes en rechtstreekse verbindingen met telecomproviders.`,
          features: [
            isGlobal ? "HD-spraakverbindingen van hoge kwaliteit" : "Gegarandeerde Pure CLI-routes",
            isGlobal ? "Flexibele routeringsopties" : "Directe Operator Interconnects",
            isGlobal ? "Wereldwijde redundante dekking" : `Landelijke virtuele DID-nummers in ${country}`,
          ],
        },
        {
          title: isGlobal ? "SMS Messaging" : `Beste SMS-diensten in ${country}`,
          description: isGlobal
            ? "Verstuur kritieke transactionele SMS, verificatiecodes (OTP) en rijke zakelijke berichten direct naar mobiele toestellen wereldwijd."
            : `Bliksemsnelle transactionele SMS, verificatie binnen 2 seconden en conforme bulkmessaging bij alle netwerken in ${country}.`,
          features: [
            isGlobal ? "Sub-seconde OTP-levering" : `Officiële Sender ID Whitelisting in ${country}`,
            isGlobal ? "Hoge afleveringszekerheid" : "Sub-2s OTP-aflevergarantie",
            isGlobal ? "RCS rijke mediaberichten" : "Dynamische failover tussen operatoren",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `Omnichannel & WhatsApp API in ${country}`,
          description: isGlobal
            ? "Verbind Spraak, SMS, WhatsApp en Verificatie via één overzichtelijke REST API suite die klaar is voor snelle integratie."
            : `Officiële WhatsApp Business API, interactieve RCS-messaging en geïntegreerde kanalen speciaal afgestemd op klanten in ${country}.`,
          features: [
            isGlobal ? "Officiële WhatsApp Business API" : "Officiële WhatsApp Business API",
            isGlobal ? "RCS interactieve messaging" : "Geverifieerd RCS-profiel met bedrijfsbadge",
            isGlobal ? "Uniforme REST API suite" : "Complete Multichannel REST API's",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "ZAKELIJKE OPLOSSINGEN" : `ZAKELIJKE OPLOSSINGEN IN ${country.toUpperCase()}`,
      title: isGlobal ? "Oplossingen voor elke stap in de klantreis" : `Oplossingen Ontworpen Voor ${country}`,
      description: isGlobal
        ? "Verbind, activeer en communiceer betrouwbaar met klanten via professionele spraak-, SMS- en omnichanneloplossingen."
        : `Hoogwaardige communicatie-infrastructuur gebouwd voor enterprises, fintech-bedrijven en scale-ups in ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "OTP Verificatie",
          tagline: "Veilig. Snel. Betrouwbaar.",
          title: `Directe OTP Verificatie (${country})`,
          description: `Verstuur eenmalige toegangscodes snel en veilig voor accountregistraties, inloggen, accountherstel en betalingsverificaties in ${country}.`,
          features: [
            "Gegarandeerde aflevering van OTP binnen 2 seconden",
            "Automatische failoverbescherming tussen meerdere netwerken",
            `Geoptimaliseerde routes naar alle operatoren in ${country}`,
          ],
          customerStatus: "Identiteit Geverifieerd",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Uw verificatiecode is",
            bodyBold: "53193",
            validTime: "5 minuten geldig. Deel deze code met niemand.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Verificatie",
            title: "Verifieer uw Mobiele Nummer",
            subtitle: `We hebben een beveiligingscode verstuurd naar uw geregistreerde nummer in ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verifiëren en Doorgaan",
            subNote: "Geen code ontvangen?\nOpnieuw versturen over 00:45",
          },
        },
        {
          id: "banking",
          name: "Banken & Financiën",
          tagline: "Veilig. Verbonden. Betrouwbaar.",
          title: `Bank- en Financiële Diensten (${country})`,
          description: `Beveiligde communicatie met realtime meldingen van betalingstransacties, afschrijvingen en saldo-updates voor banken in ${country}.`,
          features: [
            "Versleutelde bankbeveiligingsprotocollen",
            "Realtime meldingen bij debet/credit en transacties",
            "Hoge capaciteit voor transactionele SMS-levering",
          ],
          customerStatus: "Transactie Voltooid",
          notification: {
            header: "Bank Transactiemelding",
            body: `Uw betaling van ${currency}250,00 is succesvol verwerkt.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Bankieren",
            title: "Betaling Geslaagd",
            subtitle: `${currency}250,00 is veilig en correct verwerkt op uw rekening.`,
            bankingDetails: {
              amount: `${currency}250,00`,
              status: "Voltooid",
              reference: "TXN-849201",
            },
            buttonText: "Afschrift Bekijken",
            subNote: "✓ Verzonden via een gecertificeerde bankveilige verbinding",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Bereik. Betrek. Converteer.",
          title: `Marketingcommunicatie & Campagnes (${country})`,
          description: `Bereik consumenten met gerichte SMS-campagnes, exclusieve acties en merkaankondigingen op grote schaal in ${country}.`,
          features: [
            "Grootschalige promotionele SMS met hoge openingspercentages",
            "Doelgroepsegmentatie en geavanceerde verzendplanning",
            "Realtime click-tracking en conversie-inzichten",
          ],
          customerStatus: "Aanbieding Bezorgd",
          notification: {
            header: "Exclusieve Aanbieding",
            line1: "SPECIALE 30% KORTING",
            line2: `Exclusieve deals nu beschikbaar in heel ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Speciale Aanbiedingen",
            badge: "Tijdelijke Deal",
            title: "Exclusieve Korting Speciaal Voor U",
            subtitle: `Profiteer van 30% korting op uw volgende aankoop.\nGeldig tot het einde van deze maand.`,
            buttonText: "Korting Claimen",
            subNote: `✓ Verzonden naar geverifieerde abonnees in ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Herinneringen",
          tagline: "Tijdig. Accuraat. Geautomatiseerd.",
          title: `Geautomatiseerde Klantherinneringen (${country})`,
          description: `Houd klanten op de hoogte met automatische meldingen voor afspraken, factuurvervaldata, abonnementen en bijeenkomsten in ${country}.`,
          features: [
            "Geautomatiseerde multikanaal meldingen volgens planning",
            "Directe betaallinks geïntegreerd in het bericht",
            "Aanzienlijke verlaging van no-shows en betalingsachterstanden",
          ],
          customerStatus: "Herinnering Afgeleverd",
          notification: {
            header: "Afspraakherinnering",
            line1: "Gepland voor Morgen",
            line2: "Gelieve 10 minuten voor aanvang aanwezig te zijn.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Herinneringen",
            title: "Afspraak Gepland voor Morgen",
            subtitle: "Uw afspraak staat bevestigd voor 10:30 uur.",
            infoCard: {
              label: "Locatie / Vestiging",
              value: `Centraal Station ${country}`,
            },
            buttonText: "Aanwezigheid Bevestigen",
            subNote: "Antwoord 1 om te bevestigen of 2 om te verzetten",
          },
        },
        {
          id: "emergency",
          name: "Noodmeldingen",
          tagline: "Kritiek. Snel. Altijd Bereikbaar.",
          title: `Nood- en Veiligheidsuitzendingen (${country})`,
          description: `Directe verspreiding van urgente veiligheidsberichten wanneer elke seconde telt, ter bescherming van mensen en bedrijfscontinuïteit in ${country}.`,
          features: [
            "Hoogste verzendprioriteit die standaard wachtrijen omzeilt",
            "Geografische afbakening voor grootschalige openbare meldingen",
            "Multikanaal failover naar gesproken spraakoproepen bij SMS-storing",
          ],
          customerStatus: "Noodbericht Verzonden",
          notification: {
            header: "Openbare Veiligheidsdienst",
            line1: "Dringende Weerswaarschuwing",
            line2: "Volg de aanwijzingen van de lokale autoriteiten op.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Noodmelding",
            title: "Dringende Weerswaarschuwing",
            subtitle: "Er zijn zware weersomstandigheden vastgesteld. Blijf binnen en houd de officiële berichten in de gaten.",
            infoCard: {
              label: "Betrokken Gebied",
              value: country,
            },
            buttonText: "Veilige Zones Bekijken",
            subNote: "Officiële veiligheidsmelding",
          },
        },
        {
          id: "order",
          name: "Bestelstatussen",
          tagline: "Informeer. Volg. Bezorg.",
          title: `Realtime Order- en Bezorgstatussen (${country})`,
          description: `Houd kopers op de hoogte tijdens het hele bezorgtraject met verzendbevestigingen, live koerierstracking en OTP-ontvangstverificatie in ${country}.`,
          features: [
            "Realtime updates over gereedmaking en verzending",
            "Aankomstmelding van de koerier met live tracking link",
            "Veilige verificatiecode (OTP) bij overhandiging van het pakket",
          ],
          customerStatus: "Onderweg voor Bezorging",
          notification: {
            header: "Bestelstatus Update",
            line1: "Bestelling #IN849201 Verzonden",
            line2: `Uw pakket wordt vandaag bezorgd in ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Bestelling Volgen",
            title: "Uw Pakket is Onderweg",
            subtitle: "De bezorger is onderweg met uw bestelling.",
            infoCard: {
              label: "Aflever OTP-code",
              value: "8492",
            },
            buttonText: "Volgen op Kaart",
            subNote: "Contactloze bezorging mogelijk",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "SECTOR EXPERTISE" : `SECTOREXPERTISE - ${country.toUpperCase()}`,
      titleLine1: "Communicatieoplossingen Gebouwd",
      titleLine2: isGlobal ? "Voor Elke Bedrijfstak" : `Voor Ondernemingen in ${country}`,
      description: isGlobal
        ? "Verbind en communiceer vlekkeloos met uw klanten dankzij betrouwbare spraak-, SMS- en omnichanneldiensten."
        : `Infrastructuur die naadloos voldoet aan lokale telecomwetgeving, compliancestandaarden en gebruikersgewoonten in ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Banken en Financiën",
          title: `Banken & Fintech in ${country}`,
          description: `Beveiligde transactionele SMS, financiële compliance en realtime betalingsverificatie in ${country}.`,
        },
        {
          id: "healthcare",
          name: "Zorg en Klinieken",
          title: `Zorginstellingen & Klinieken in ${country}`,
          description: `Herinneringen voor afspraken, uitslagen en betrouwbare communicatie voor telegeneeskunde in ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce en Retail",
          title: `E-Commerce & Retail in ${country}`,
          description: `Realtime tracking, promotionele flitsacties en omnichannel klantenservicekanalen in ${country}.`,
        },
        {
          id: "education",
          name: "Onderwijs en Universiteiten",
          title: `Scholen & Universiteiten in ${country}`,
          description: `Inschrijvingsberichten, campusnoodmeldingen en oudercommunicatie in ${country}.`,
        },
        {
          id: "travel",
          name: "Toerisme en Reizen",
          title: `Reizen & Hospitality in ${country}`,
          description: `Poortwijzigingen, hotelbevestigingen en 24/7 ondersteuning voor reizigers in ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "NEEM CONTACT OP" : `CONTACT IN ${country.toUpperCase()}`,
      titleLine1: "Laten We Samen de Juiste",
      titleLine2: isGlobal ? "Verbinding Creëren." : `Telecomverbinding Bouwen in ${country}.`,
      description: isGlobal
        ? "Met iNet Global Services beschikken bedrijven over betrouwbare zakelijke SMS- en spraakoplossingen om klantinteracties te verbeteren, veiligheid te verhogen en communicatiestromen te stroomlijnen. Wij leveren snelheid, continuïteit en prestaties."
        : `Werk samen met iNet Global voor directe SMS-routes, haarscherpe spraakterminatie en volledige naleving van de wetgeving in ${country}. Neem contact op met ons team voor een gratis test en offertes op maat.`,
    },
    footer: {
      description: isGlobal
        ? "Wereldwijde communicatie-infrastructuur voor bedrijven die afhankelijk zijn van betrouwbare spraak, messaging en omnichannel connectiviteit."
        : `Enterprise communicatie-infrastructuur voor spraak, SMS, virtuele DID-nummers en omnichannel API's in ${country} en wereldwijd.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Verenigde Staten" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Alle rechten voorbehouden.`,
    },
  }),

  // 6. Turkish (Türkçe - tr)
  tr: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "KÜRESEL İLETİŞİM ALTYAPISI"
        : `${country.toUpperCase()} TELEKOM ALTYAPISI`,
      titleLine1: isGlobal ? "Küresel İletişim," : `En İyi SMS ve Ses Trafiği`,
      titleLine2: isGlobal ? "Büyük İşletmeler İçin" : `${country} Bölgesinde,`,
      titleLine3: isGlobal ? "Özel Olarak Tasarlandı." : `Kurumsal Ölçekte Hazır.`,
      description: isGlobal
        ? "Sınırların, ekiplerin ve tüm müşteri temas noktalarının ötesinde bağlantıda kalması gereken şirketler için güvenilir ses, mesajlaşma ve sanal numara çözümleri."
        : `${country} içindeki işletmelere yüksek kapasiteli SMS rotaları, ultra düşük gecikmeli ses sonlandırma ve doğrudan operatör ara bağlantıları sağlıyoruz.`,
      primaryCta: isGlobal ? "Hemen Başlayın" : `${country} İçin Başlayın`,
      secondaryCta: isGlobal ? "Hizmetleri İnceleyin" : `${country} Rotalarını Görün`,
      timeline: {
        voice: isGlobal ? "Kurumsal Ses" : `${country} Ses Trafiği (CLI)`,
        messaging: isGlobal ? "SMS ve Mesajlaşma" : `${country} SMS ve OTP Rotaları`,
        numbers: isGlobal ? "Sanal Numaralar" : `${country} Sanal DID Numaraları`,
        footerNote1: isGlobal ? "Tek Platform" : "Doğrudan Operatör Bağlantıları",
        footerNote2: isGlobal ? "Küresel Erişim" : "%100 Mevzuata Uygunluk",
      },
    },
    coreServices: {
      badge: isGlobal ? "TEMEL HİZMETLER" : `${country.toUpperCase()} HİZMETLERİ VE OPERATÖR BAĞLANTILARI`,
      titleLine1: isGlobal ? "Tüm müşteri yolculuğu için" : `${country} En İyi Ses ve SMS Hizmetleri`,
      titleLine2: isGlobal ? "gelişmiş iletişim çözümleri" : "Büyüyen Kurumsal Şirketler İçin",
      description: isGlobal
        ? "Dünya çapında ses, mesajlaşma ve sanal numaralarda yüksek erişilebilirlik sağlamak üzere tasarlanmış modüler telekomünikasyon altyapısı."
        : `%99,99 kesintisiz çalışma, 2 saniyenin altında OTP iletimi ve yerel operatör bağlantıları ile ${country} standartlarında telekomünikasyon gücü.`,
      services: [
        {
          title: isGlobal ? "Ses Hizmetleri" : `${country} Ses ve SIP Trunking`,
          description: isGlobal
            ? "Üstün ses kalitesi, yerel numara gösterimi (CLI) ve optimize edilmiş maliyetlerle tasarlanmış uluslararası SIP trunking hizmetleri."
            : `Garantili CLI, premium arama rotaları ve yerel telekom operatörleriyle doğrudan bağlantılarla ${country} yüksek yoğunluklu çağrı trafiği.`,
          features: [
            isGlobal ? "Yüksek kaliteli HD ses bağlantıları" : "Saf CLI Rota Garantisi",
            isGlobal ? "Esnek yönlendirme seçenekleri" : "Doğrudan Operatör Bağlantıları",
            isGlobal ? "Küresel yedekli kapsama alanı" : `${country} Genelinde Sanal DID ve Ücretsiz Hatlar`,
          ],
        },
        {
          title: isGlobal ? "Mesajlaşma" : `${country} En İyi SMS Hizmetleri`,
          description: isGlobal
            ? "Kritik işlemsel SMS'leri, OTP doğrulama kodlarını ve zengin kurumsal mesajları dünya çapındaki cep telefonlarına yüksek teslimat oranıyla iletin."
            : `2 saniyenin altında doğrulama kodları, yüksek hızlı işlemsel SMS'ler ve ${country} içindeki tüm operatörlerde mevzuata uygun toplu gönderim.`,
          features: [
            isGlobal ? "Saniyenin altında OTP iletimi" : `${country} Doğrudan Gönderici Başlığı Kaydı`,
            isGlobal ? "Yüksek teslimat güvencesi" : "2 Saniyenin Altında OTP İletim Garantisi",
            isGlobal ? "RCS zengin medya mesajlaşması" : "Dinamik Operatör Yedekleme ve Yönlendirme",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `${country} Omnichannel ve WhatsApp API`,
          description: isGlobal
            ? "Ses, SMS, WhatsApp ve Kimlik Doğrulamayı hızlı entegrasyona hazır tek bir REST API paketinde birleştirin."
            : `Resmi WhatsApp Business API, RCS interaktif mesajlaşma ve ${country} müşterileri için özel çok kanallı iletişim araçları.`,
          features: [
            isGlobal ? "Resmi WhatsApp Business API" : "Resmi WhatsApp Business API",
            isGlobal ? "RCS interaktif konuşma deneyimi" : "Onaylı Marka Rozeti ile RCS Gönderici",
            isGlobal ? "Birleşik REST API paketi" : "Birleşik Çok Kanallı REST API Desteği",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "İŞ ÇÖZÜMLERİ" : `${country.toUpperCase()} İŞ ÇÖZÜMLERİ`,
      title: isGlobal ? "Müşteri Yolculuğunun Her Adımı İçin Çözümler" : `${country} İçin Geliştirilmiş Çözümler`,
      description: isGlobal
        ? "Güvenilir ses, mesajlaşma ve çok kanallı araçlar aracılığıyla müşterilerinizle her an kesintisiz iletişim kurun."
        : `${country} içindeki kurumsal şirketler, fintech kuruluşları ve ölçeklenen markalar için tasarlanmış yüksek performanslı telekomünikasyon mimarisi.`,
      solutions: [
        {
          id: "otp",
          name: "OTP Doğrulama",
          tagline: "Güvenli. Hızlı. Güvenilir.",
          title: `Anında OTP Şifre Doğrulama (${country})`,
          description: `${country} genelinde kayıt, giriş, şifre kurtarma ve ödeme onayları için tek kullanımlık şifreleri en hızlı ve güvenli şekilde iletin.`,
          features: [
            "2 saniyenin altında ultra hızlı ve güvenilir OTP iletimi",
            "Operatör kesintilerine karşı çoklu kanal otomatik yedekleme",
            `${country} içindeki tüm operatörlere optimize edilmiş rotalar`,
          ],
          customerStatus: "Kimlik Doğrulandı",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Doğrulama kodunuz:",
            bodyBold: "53193",
            validTime: "5 dakika geçerlidir. Kimseyle paylaşmayın.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Kimlik Doğrulama",
            title: "Cep Telefonunuzu Doğrulayın",
            subtitle: `${country} üzerinde kayıtlı telefon numaranıza doğrulama kodu gönderdik.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Doğrula ve Devam Et",
            subNote: "Kod gelmedi mi?\n00:45 sonra tekrar gönder",
          },
        },
        {
          id: "banking",
          name: "Bankacılık ve Finans",
          tagline: "Güvenli. Bağlantılı. Şeffaf.",
          title: `Bankacılık ve Finansal Hizmetler (${country})`,
          description: `${country} finans kurumları için gerçek zamanlı işlem bildirimleri, bakiye güncellemeleri ve ödeme onayları sunan yüksek güvenlikli iletişim altyapısı.`,
          features: [
            "Bankacılık standartlarında şifrelenmiş güvenlik kanalları",
            "Anlık borç/alacak ve transfer işlem bildirimleri",
            "Yüksek hacimli işlemsel SMS iletim altyapısı",
          ],
          customerStatus: "İşlem Gerçekleşti",
          notification: {
            header: "Banka İşlem Bildirimi",
            body: `${currency}250.00 tutarındaki ödemeniz başarıyla tamamlandı.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Bankacılık",
            title: "Ödeme Başarılı",
            subtitle: `${currency}250.00 tutarı hesabınızdan güvenli şekilde işlendi.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Tamamlandı",
              reference: "TXN-849201",
            },
            buttonText: "Dekontu Görüntüle",
            subNote: "✓ Güvenli ve sertifikalı operatör kanalıyla iletilmiştir",
          },
        },
        {
          id: "marketing",
          name: "Pazarlama",
          tagline: "Ulaşın. Etkileşim Kurun. Dönüştürün.",
          title: `Pazarlama ve Kampanya İletişimi (${country})`,
          description: `${country} genelinde geniş kitlelere özel indirimler, dönemsel kampanyalar ve marka duyuruları ulaştıran hedefli SMS çözümleri.`,
          features: [
            "Yüksek açılma oranına sahip toplu tanıtım SMS'leri",
            "Kitle segmentasyonu ve akıllı zamanlama yönetimi",
            "Gerçek zamanlı tıklama takibi ve dönüşüm analizleri",
          ],
          customerStatus: "Teklif İletildi",
          notification: {
            header: "Özel Fırsat",
            line1: "%30 ÖZEL İNDİRİM FIRSATI",
            line2: `Tüm ${country} genelinde geçerli avantajlı teklifler.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Özel Fırsatlar",
            badge: "Sınırlı Süre",
            title: "Size Özel İndirim Fırsatı",
            subtitle: `Sonraki alışverişinizde %30 indirim kazanın.\nBu teklif ay sonuna kadar geçerlidir.`,
            buttonText: "Fırsatı Kullan",
            subNote: `✓ ${country} izinli kullanıcılarına gönderilmiştir`,
          },
        },
        {
          id: "reminders",
          name: "Hatırlatmalar",
          tagline: "Zamanında. Güvenilir. Otomatik.",
          title: `Otomatik Müşteri Hatırlatmaları (${country})`,
          description: `${country} müşterileriniz için randevu saatleri, fatura son ödeme tarihleri ve abonelik yenilemeleri hakkında otomatik bildirimler gönderin.`,
          features: [
            "Çok kanallı otomatik zamanlanmış bildirimler",
            "Mesaj içerisine gömülü doğrudan ödeme bağlantıları",
            "Kaçırılan randevuları ve gecikmiş ödemeleri minimuma indirme",
          ],
          customerStatus: "Hatırlatma İletildi",
          notification: {
            header: "Randevu Hatırlatması",
            line1: "Yarın İçin Planlandı",
            line2: "Lütfen randevu saatinizden 10 dakika önce geliniz.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Hatırlatmalar",
            title: "Yarın Randevunuz Var",
            subtitle: "Randevunuz saat 10:30 olarak onaylanmıştır.",
            infoCard: {
              label: "Konum / Merkez",
              value: `${country} Merkez Şubesi`,
            },
            buttonText: "Katılımı Onayla",
            subNote: "Onaylamak için 1, ertelemek için 2 yazın",
          },
        },
        {
          id: "emergency",
          name: "Acil Durum Bildirimleri",
          tagline: "Kritik. Hızlı. Kesintisiz.",
          title: `Acil Durum ve Güvenlik Yayınları (${country})`,
          description: `Her saniyenin hayati önem taşıdığı anlarda ${country} genelinde acil durum bildirimlerini anında ileterek toplum güvenliğini koruyun.`,
          features: [
            "Standart kuyrukları atlayan en yüksek öncelikli rota",
            "Geniş halk duyuruları için coğrafi konum hedeflemesi",
            "SMS iletilemediğinde otomatik sesli aramaya geçiş güvencesi",
          ],
          customerStatus: "Acil Bildirim İletildi",
          notification: {
            header: "Kamu Güvenliği Uyarısı",
            line1: "Acil Hava Durumu Uyarısı",
            line2: "Lütfen yetkililerin güvenlik talimatlarına uyunuz.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Acil Durum Uyarısı",
            title: "Acil Hava Durumu Uyarısı",
            subtitle: "Şiddetli hava koşulları tespit edildi. Lütfen güvenli alanlarda kalın ve resmi duyuruları takip edin.",
            infoCard: {
              label: "Etkilenen Bölge",
              value: country,
            },
            buttonText: "Güvenli Bölgeleri Gör",
            subNote: "Resmi güvenlik yayını bildirimidir",
          },
        },
        {
          id: "order",
          name: "Sipariş ve Kargo",
          tagline: "Bilgilendir. Takip Et. Teslim Et.",
          title: `Gerçek Zamanlı Sipariş ve Kargo Takibi (${country})`,
          description: `${country} müşterilerinize kargoya verilme anından canlı harita takibine ve teslimat anında OTP onayına kadar her adımı bildirin.`,
          features: [
            "Gerçek zamanlı paketleme ve kargo çıkış bildirimleri",
            "Canlı konum bağlantılı kurye yaklaşma alarmları",
            "Güvenli teslimat doğrulama kodları (OTP)",
          ],
          customerStatus: "Dağıtıma Çıktı",
          notification: {
            header: "Sipariş Durumu",
            line1: "#IN849201 Nolu Sipariş Sevk Edildi",
            line2: `Paketiniz bugün ${country} adresinize ulaştırılacaktır.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Kargo Takibi",
            title: "Siparişiniz Yolda",
            subtitle: "Kuryemiz paketinizi teslim etmek üzere adresinize geliyor.",
            infoCard: {
              label: "Teslimat Kodu (OTP)",
              value: "8492",
            },
            buttonText: "Haritada İzle",
            subNote: "Temassız teslimat seçeneği aktiftir",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "SEKTÖREL UZMANLIK" : `SEKTÖREL UZMANLIK - ${country.toUpperCase()}`,
      titleLine1: "Tüm Endüstriler İçin Özel Olarak",
      titleLine2: isGlobal ? "Tasarlanmış İletişim Çözümleri" : `${country} Şirketlerine Yönelik Çözümler`,
      description: isGlobal
        ? "Güvenilir ses, mesajlaşma ve entegre dijital kanallarla müşterilerinizle güçlü ve kalıcı bağlar kurun."
        : `${country} yasal mevzuatlarına, bilgi güvenliği standartlarına ve kullanıcı alışkanlıklarına tam uyumlu altyapı.`,
      industries: [
        {
          id: "banking",
          name: "Bankacılık ve Finans",
          title: `${country} Bankacılık ve Fintech`,
          description: `Güvenli işlemsel SMS, bankacılık regülasyonlarına tam uyum ve gerçek zamanlı işlem doğrulamaları (${country}).`,
        },
        {
          id: "healthcare",
          name: "Sağlık ve Klinikler",
          title: `${country} Hastaneler ve Sağlık Kurumları`,
          description: `Hasta randevu hatırlatmaları, tahlil sonuç bildirimleri ve teletıp iletişimi (${country}).`,
        },
        {
          id: "ecommerce",
          name: "E-Ticaret ve Perakende",
          title: `${country} E-Ticaret ve Perakende Markaları`,
          description: `Kargo takip bildirimleri, flaş indirim mesajları ve omnichannel müşteri destek kanalları (${country}).`,
        },
        {
          id: "education",
          name: "Eğitim ve Üniversiteler",
          title: `${country} Okullar ve Üniversiteler`,
          description: `Kayıt bilgilendirmeleri, kampüs acil duyuruları ve veli bilgilendirme sistemleri (${country}).`,
        },
        {
          id: "travel",
          name: "Turizm ve Konaklama",
          title: `${country} Havacılık ve Otelcilik`,
          description: `Uçuş kapı değişiklikleri, otel rezervasyon onayları ve 7/24 kesintisiz seyahat desteği (${country}).`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "BİZE ULAŞIN" : `${country.toUpperCase()} OFİSİMİZLE İLETİŞİME GEÇİN`,
      titleLine1: "Şirketiniz İçin En Doğru",
      titleLine2: isGlobal ? "İletişim Altyapısını Kuralım." : `Telekom Çözümünü ${country} Pazarında Kuralım.`,
      description: isGlobal
        ? "iNet Global Services ile şirketler, müşteri etkileşimini artırmak, güvenliği pekiştirmek ve iş akışlarını kolaylaştırmak için sağlam kurumsal SMS ve ses altyapısından faydalanır. İşlemsel SMS, OTP ve toplu mesajlaşmada hız ve güvenilirlik sunuyoruz."
        : `${country} genelinde doğrudan operatör SMS hatları, berrak ses kalitesi ve tam yasal uyumluluk için iNet Global ile ortaklık kurun. Kurumsal uzmanlarımızla ücretsiz test ve avantajlı fiyatlar için hemen görüşün.`,
    },
    footer: {
      description: isGlobal
        ? "Yüksek kaliteli ses, mesajlaşma ve omnichannel bağlantıya ihtiyaç duyan işletmeler için küresel kurumsal iletişim altyapısı."
        : `${country} ve dünya çapında operatör kalitesinde Ses, SMS, Sanal DID Numaraları ve Çok Kanallı API'ler sağlayan telekomünikasyon platformu.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Amerika Birleşik Devletleri" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Tüm hakları saklıdır.`,
    },
  }),

  // 7. Indonesian (Bahasa Indonesia - id)
  id: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "INFRASTRUKTUR KOMUNIKASI GLOBAL"
        : `INFRASTRUKTUR TELEKOMUNIKASI ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Komunikasi Global," : `Layanan SMS & Panggilan Terbaik`,
      titleLine2: isGlobal ? "Dirancang Khusus Untuk" : `Di ${country},`,
      titleLine3: isGlobal ? "Skala Perusahaan." : `Siap Untuk Skala Korporasi.`,
      description: isGlobal
        ? "Solusi suara, perpesanan bisnis, dan nomor virtual andal bagi perusahaan yang membutuhkan koneksi tanpa batas lintas batas negara, tim, dan interaksi pelanggan."
        : `Memberdayakan perusahaan di ${country} dengan rute SMS berkapasitas tinggi, terminasi suara berlatensi ultra-rendah, dan interkoneksi langsung ke operator lokal.`,
      primaryCta: isGlobal ? "Mulai Sekarang" : `Mulai di ${country}`,
      secondaryCta: isGlobal ? "Pelajari Layanan" : `Jelajahi Rute ${country}`,
      timeline: {
        voice: isGlobal ? "Suara Korporasi" : `Lalu Lintas Suara (CLI) di ${country}`,
        messaging: isGlobal ? "SMS & Pesan" : `Rute SMS & OTP di ${country}`,
        numbers: isGlobal ? "Nomor Virtual" : `Nomor Virtual DID di ${country}`,
        footerNote1: isGlobal ? "Satu Platform" : "Rute Langsung Operator",
        footerNote2: isGlobal ? "Jangkauan Global" : "100% Sesuai Regulasi",
      },
    },
    coreServices: {
      badge: isGlobal ? "LAYANAN UTAMA" : `LAYANAN & INTERKONEKSI DI ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Solusi komunikasi untuk setiap" : `Layanan Suara & SMS Terbaik di ${country}`,
      titleLine2: isGlobal ? "tahapan perjalanan pelanggan" : "Untuk Bisnis yang Berkembang",
      description: isGlobal
        ? "Infrastruktur telekomunikasi modular yang dirancang untuk ketersediaan tinggi dalam layanan suara, perpesanan, dan nomor virtual di seluruh dunia."
        : `Infrastruktur telekomunikasi kelas operator di ${country} dengan uptime 99,99%, pengiriman OTP di bawah 2 detik, dan koneksi langsung operator.`,
      services: [
        {
          title: isGlobal ? "Layanan Suara" : `Terminasi Suara & SIP Trunk di ${country}`,
          description: isGlobal
            ? "SIP trunking internasional dengan opsi perutean fleksibel, kualitas audio jernih, jangkauan CLI lokal, dan biaya terminasi hemat."
            : `Lalu lintas panggilan kapasitas tinggi di ${country} dengan jaminan CLI, terminasi rute premium, dan interkoneksi langsung ke operator seluler.`,
          features: [
            isGlobal ? "Koneksi panggilan suara HD berkualitas tinggi" : "Jaminan Rute CLI Murni",
            isGlobal ? "Opsi perutean lalu lintas fleksibel" : "Interkoneksi Langsung dengan Operator",
            isGlobal ? "Cakupan redundan di seluruh dunia" : `Nomor Virtual DID Pan-${country}`,
          ],
        },
        {
          title: isGlobal ? "Perpesanan SMS" : `Layanan SMS Bisnis di ${country}`,
          description: isGlobal
            ? "Kirimkan SMS transaksional penting, kode OTP, dan pesan promosi interaktif langsung ke ponsel di seluruh dunia dengan jaminan pengiriman tinggi."
            : `SMS transaksional super cepat, kode verifikasi di bawah 2 detik, dan pengiriman massal resmi di semua operator di ${country}.`,
          features: [
            isGlobal ? "Pengiriman OTP di bawah 1 detik" : `Pendaftaran Sender ID Resmi di ${country}`,
            isGlobal ? "Jaminan tingkat keterkiriman tinggi" : "Garansi Pengiriman OTP Sub-2 Detik",
            isGlobal ? "Pesan media kaya dengan RCS" : "Failover Dinamis & Pengalihan Operator Otomatis",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `API Omnichannel & WhatsApp di ${country}`,
          description: isGlobal
            ? "Satukan Voice, SMS, WhatsApp, dan Verifikasi ke dalam satu rangkaian REST API modern yang siap digunakan oleh pengembang."
            : `API resmi WhatsApp Business, pesan interaktif RCS, dan perpesanan terpadu untuk interaksi pelanggan di ${country}.`,
          features: [
            isGlobal ? "API Resmi WhatsApp Business" : "API Resmi WhatsApp Business",
            isGlobal ? "Pesan percakapan interaktif RCS" : "Pengirim Terverifikasi RCS dengan Lencana Resmi",
            isGlobal ? "Rangkaian REST API terpadu" : "Rangkaian Lengkap API REST Multi-Saluran",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "SOLUSI BISNIS" : `SOLUSI BISNIS DI ${country.toUpperCase()}`,
      title: isGlobal ? "Solusi Untuk Setiap Langkah Interaksi Pelanggan" : `Solusi Dirancang Untuk ${country}`,
      description: isGlobal
        ? "Terhubung, berinteraksi, dan berkomunikasi dengan pelanggan melalui solusi suara, SMS, dan omnichannel yang aman dan andal."
        : `Platform telekomunikasi berkinerja tinggi yang disesuaikan untuk korporasi, fintech, dan bisnis berskala besar di ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Autentikasi OTP",
          tagline: "Aman. Cepat. Andal.",
          title: `Autentikasi OTP Instan (${country})`,
          description: `Kirimkan kata sandi sekali pakai (OTP) secara cepat dan aman untuk registrasi akun, login, pemulihan akun, dan otorisasi pembayaran di ${country}.`,
          features: [
            "Pengiriman OTP super cepat dalam waktu kurang dari 2 detik",
            "Perlindungan failover otomatis antar-operator seluler",
            `Rute prioritas teroptimasi di seluruh jaringan di ${country}`,
          ],
          customerStatus: "Identitas Terverifikasi",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Kode verifikasi Anda adalah",
            bodyBold: "53193",
            validTime: "Berlaku 5 menit. Jangan bagikan kepada siapa pun.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Autentikasi",
            title: "Verifikasi Nomor Ponsel Anda",
            subtitle: `Kami telah mengirimkan kode verifikasi ke nomor terdaftar Anda di ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verifikasi dan Lanjutkan",
            subNote: "Tidak menerima kode?\nKirim ulang dalam 00:45",
          },
        },
        {
          id: "banking",
          name: "Perbankan & Keuangan",
          tagline: "Aman. Terhubung. Terpercaya.",
          title: `Layanan Perbankan & Finansial (${country})`,
          description: `Komunikasi finansial aman dengan notifikasi transaksi langsung, pembaruan saldo, dan konfirmasi transfer untuk lembaga perbankan di ${country}.`,
          features: [
            "Jalur keamanan terenkripsi berstandar perbankan",
            "Notifikasi debit/kredit dan transaksi seketika",
            "Kapasitas pengiriman tinggi untuk SMS transaksional",
          ],
          customerStatus: "Transaksi Selesai",
          notification: {
            header: "Notifikasi Transaksi Bank",
            body: `Pembayaran Anda sebesar ${currency}250.00 telah berhasil diproses.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Perbankan",
            title: "Pembayaran Berhasil",
            subtitle: `${currency}250.00 telah diproses dengan aman di rekening Anda.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Berhasil",
              reference: "TXN-849201",
            },
            buttonText: "Lihat Bukti Transaksi",
            subNote: "✓ Dikirim melalui jalur aman operator telekomunikasi resmi",
          },
        },
        {
          id: "marketing",
          name: "Pemasaran",
          tagline: "Jangkau. Ajak. Konversi.",
          title: `Komunikasi Pemasaran & Promosi (${country})`,
          description: `Jangkau konsumen melalui kampanye SMS bertarget dengan penawaran eksklusif, diskon musiman, dan pengumuman merek berskala besar di ${country}.`,
          features: [
            "Pengiriman SMS promosi massal dengan tingkat keterbacaan tinggi",
            "Segmentasi audiens dan penjadwalan pintar",
            "Pelacakan klik dan analitik konversi langsung",
          ],
          customerStatus: "Penawaran Terkirim",
          notification: {
            header: "Penawaran Eksklusif",
            line1: "DISKON KHUSUS 30%",
            line2: `Penawaran eksklusif kini tersedia di seluruh ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Promo Spesial",
            badge: "Waktu Terbatas",
            title: "Diskon Eksklusif Khusus Untuk Anda",
            subtitle: `Dapatkan potongan 30% untuk transaksi Anda berikutnya.\nBerlaku sampai akhir bulan ini.`,
            buttonText: "Klaim Diskon",
            subNote: `✓ Dikirimkan kepada pelanggan resmi di ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Pengingat Jadwal",
          tagline: "Tepat Waktu. Andal. Otomatis.",
          title: `Pengingat Otomatis Untuk Pelanggan (${country})`,
          description: `Pastikan pelanggan tidak ketinggalan jadwal dengan notifikasi otomatis untuk janji temu, jatuh tempo tagihan, dan perpanjangan langganan di ${country}.`,
          features: [
            "Notifikasi jadwal otomatis multi-saluran",
            "Tautan pembayaran langsung di dalam pesan",
            "Mengurangi tingkat ketidakhadiran dan keterlambatan pembayaran",
          ],
          customerStatus: "Pengingat Diterima",
          notification: {
            header: "Pengingat Janji Temu",
            line1: "Dijadwalkan untuk Besok",
            line2: "Harap hadir 10 menit sebelum waktu janji temu Anda.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Pengingat",
            title: "Janji Temu Terjadwal Besok",
            subtitle: "Jadwal kunjungan Anda telah dikonfirmasi pukul 10:30 WIB.",
            infoCard: {
              label: "Lokasi / Cabang",
              value: `Kantor Pusat ${country}`,
            },
            buttonText: "Konfirmasi Kehadiran",
            subNote: "Balas 1 untuk konfirmasi atau 2 untuk ubah jadwal",
          },
        },
        {
          id: "emergency",
          name: "Peringatan Darurat",
          tagline: "Kritis. Cepat. Selalu Siaga.",
          title: `Peringatan Darurat & Keselamatan Publik (${country})`,
          description: `Kirimkan peringatan darurat seketika saat setiap detik sangat berharga demi melindungi keselamatan masyarakat dan kelangsungan bisnis di ${country}.`,
          features: [
            "Rute prioritas tertinggi yang melewati antrean pesan umum",
            "Penargetan wilayah geografis untuk siaran publik massal",
            "Pengalihan otomatis ke panggilan suara jika SMS tidak terkirim",
          ],
          customerStatus: "Peringatan Darurat Terkirim",
          notification: {
            header: "Pemberitahuan Keselamatan Publik",
            line1: "Peringatan Cuaca Ekstrem",
            line2: "Patuhi arahan keselamatan dari pihak berwenang setempat.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Peringatan Darurat",
            title: "Peringatan Cuaca Ekstrem",
            subtitle: "Kondisi cuaca buruk dilaporkan di wilayah Anda. Harap tetap berada di dalam ruangan dan pantau kabar resmi.",
            infoCard: {
              label: "Wilayah Terdampak",
              value: country,
            },
            buttonText: "Lihat Zona Aman",
            subNote: "Pemberitahuan siaran resmi keselamatan publik",
          },
        },
        {
          id: "order",
          name: "Status Pesanan",
          tagline: "Beri Tahu. Lacak. Antar.",
          title: `Notifikasi Status Pesanan & Pengiriman (${country})`,
          description: `Berikan informasi terkini kepada pembeli dari status pengiriman gudang, pelacakan kurir secara langsung, hingga konfirmasi OTP saat barang tiba di ${country}.`,
          features: [
            "Pembaruan status pemrosesan dan pengiriman secara seketika",
            "Notifikasi kedatangan kurir dengan tautan lokasi langsung",
            "Kode OTP aman untuk verifikasi serah terima paket",
          ],
          customerStatus: "Sedang Diantar Kurir",
          notification: {
            header: "Pembaruan Status Pesanan",
            line1: "Pesanan #IN849201 Dikirim",
            line2: `Paket Anda dijadwalkan tiba hari ini di ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Pelacakan Pesanan",
            title: "Paket Anda Sedang Diantar",
            subtitle: "Kurir sedang dalam perjalanan menuju alamat Anda.",
            infoCard: {
              label: "Kode OTP Pengiriman",
              value: "8492",
            },
            buttonText: "Lacak di Peta",
            subNote: "Pengantaran tanpa kontak langsung diaktifkan",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "KEAHLIAN INDUSTRI" : `KEAHLIAN SEKTOR - ${country.toUpperCase()}`,
      titleLine1: "Solusi Telekomunikasi Yang Dibangun",
      titleLine2: isGlobal ? "Untuk Setiap Sektor Industri" : `Untuk Perusahaan di ${country}`,
      description: isGlobal
        ? "Bangun komunikasi yang kuat dan efektif dengan pelanggan melalui perpaduan layanan suara, SMS, dan saluran digital terpadu."
        : `Infrastruktur yang dirancang sesuai regulasi telekomunikasi setempat, standar keamanan, dan kebutuhan konsumen di ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Perbankan dan Keuangan",
          title: `Perbankan & Fintech di ${country}`,
          description: `SMS transaksional terenkripsi, kepatuhan finansial ketat, dan verifikasi pembayaran instan di ${country}.`,
        },
        {
          id: "healthcare",
          name: "Kesehatan dan Medis",
          title: `Rumah Sakit & Klinik Medis di ${country}`,
          description: `Pengingat jadwal konsultasi dokter, hasil laboratorium, dan saluran komunikasi telemedisin di ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce dan Ritel",
          title: `E-Commerce & Ritel di ${country}`,
          description: `Pelacakan resi pengiriman, pesan promosi kilat, dan layanan pelanggan omnichannel di ${country}.`,
        },
        {
          id: "education",
          name: "Pendidikan dan Kampus",
          title: `Institusi Pendidikan & Universitas di ${country}`,
          description: `Pemberitahuan penerimaan mahasiswa, pengumuman darurat kampus, dan komunikasi orang tua murid di ${country}.`,
        },
        {
          id: "travel",
          name: "Pariwisata dan Perhotelan",
          title: `Maskapai & Perhotelan di ${country}`,
          description: `Pemberitahuan pergantian gerbang boarding, konfirmasi reservasi kamar, dan bantuan wisatawan 24/7 di ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "HUBUNGI KAMI" : `HUBUNGI KAMI DI ${country.toUpperCase()}`,
      titleLine1: "Mari Bangun Solusi Komunikasi",
      titleLine2: isGlobal ? "Yang Tepat Untuk Bisnis Anda." : `Terbaik Untuk Bisnis Anda di ${country}.`,
      description: isGlobal
        ? "Bersama iNet Global Services, bisnis dapat memanfaatkan solusi SMS dan suara terpercaya untuk meningkatkan kepuasan pelanggan, memperkuat keamanan akun, dan mengoptimalkan komunikasi. Kami hadir memberikan kecepatan, keandalan, dan performa terbaik."
        : `Bermitralah dengan iNet Global untuk mendapatkan rute SMS operator langsung, panggilan suara jernih, dan kepatuhan penuh terhadap regulasi di ${country}. Hubungi tim kami sekarang untuk pengujian gratis dan penawaran harga terbaik.`,
    },
    footer: {
      description: isGlobal
        ? "Infrastruktur komunikasi global untuk perusahaan yang membutuhkan keandalan tinggi pada layanan suara, perpesanan, dan konektivitas omnichannel."
        : `Infrastruktur kelas korporasi yang menyediakan layanan Voice, SMS, Nomor Virtual DID, dan API Omnichannel di ${country} dan dunia.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Amerika Serikat" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Hak cipta dilindungi undang-undang.`,
    },
  }),

  // 8. Vietnamese (Tiếng Việt - vi)
  vi: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "HẠ TẦNG VIỄN THÔNG TOÀN CẦU"
        : `HẠ TẦNG VIỄN THÔNG TẠI ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Kết Nối Toàn Cầu," : `Dịch Vụ SMS & Thoại Hàng Đầu`,
      titleLine2: isGlobal ? "Được Thiết Kế Cho" : `Tại ${country},`,
      titleLine3: isGlobal ? "Doanh Nghiệp Quy Mô Lớn." : `Chuẩn Doanh Nghiệp Toàn Diện.`,
      description: isGlobal
        ? "Dịch vụ thoại, tin nhắn doanh nghiệp và đầu số ảo tin cậy giúp kết nối mượt mà qua các biên giới, đội ngũ và từng điểm chạm khách hàng."
        : `Cung cấp cho doanh nghiệp tại ${country} các tuyến SMS lưu lượng lớn, định tuyến cuộc gọi độ trễ cực thấp và kết nối trực tiếp với nhà mạng.`,
      primaryCta: isGlobal ? "Bắt Đầu Ngay" : `Bắt đầu tại ${country}`,
      secondaryCta: isGlobal ? "Khám Phá Dịch Vụ" : `Xem tuyến tại ${country}`,
      timeline: {
        voice: isGlobal ? "Thoại Doanh Nghiệp" : `Lưu lượng Thoại (CLI) tại ${country}`,
        messaging: isGlobal ? "SMS & Tin Nhắn" : `Tuyến SMS & OTP tại ${country}`,
        numbers: isGlobal ? "Đầu Số Ảo" : `Đầu số ảo DID tại ${country}`,
        footerNote1: isGlobal ? "Một nền tảng duy nhất" : "Kết nối trực tiếp nhà mạng",
        footerNote2: isGlobal ? "Phủ sóng toàn cầu" : "Tuân thủ 100% quy định pháp luật",
      },
    },
    coreServices: {
      badge: isGlobal ? "DỊCH VỤ CỐT LÕI" : `DỊCH VỤ & KẾT NỐI NHÀ MẠNG TẠI ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Giải pháp viễn thông cho mọi" : `Dịch Vụ Thoại & SMS Tốt Nhất Tại ${country}`,
      titleLine2: isGlobal ? "hành trình trải nghiệm khách hàng" : "Dành Cho Doanh Nghiệp Tăng Trưởng",
      description: isGlobal
        ? "Hạ tầng viễn thông dạng mô-đun được thiết kế với độ sẵn sàng cao cho thoại, tin nhắn và số ảo trên toàn thế giới."
        : `Hạ tầng viễn thông cấp nhà mạng tại ${country} với thời gian hoạt động 99,99%, gửi OTP dưới 2 giây và kết nối nội địa trực tiếp.`,
      services: [
        {
          title: isGlobal ? "Dịch Vụ Thoại" : `Thoại Doanh Nghiệp & SIP Trunk tại ${country}`,
          description: isGlobal
            ? "SIP trunking quốc tế với tùy chọn định tuyến linh hoạt, chất lượng âm thanh HD, hiển thị số gọi (CLI) và tối ưu hóa chi phí cước."
            : `Lưu lượng cuộc gọi đồng thời cao tại ${country} với cam kết định tuyến CLI chuẩn, đường truyền cao cấp và kết nối trực tiếp nhà mạng địa phương.`,
          features: [
            isGlobal ? "Kết nối thoại HD chất lượng cao" : "Cam kết tuyến hiển thị số CLI chuẩn",
            isGlobal ? "Tùy chọn định tuyến thông minh linh hoạt" : "Kết nối trực tiếp tới các nhà mạng",
            isGlobal ? "Phủ sóng dự phòng trên toàn cầu" : `Đầu số ảo DID toàn quốc tại ${country}`,
          ],
        },
        {
          title: isGlobal ? "Tin Nhắn SMS" : `Dịch Vụ SMS Doanh Nghiệp tại ${country}`,
          description: isGlobal
            ? "Gửi tin nhắn SMS giao dịch quan trọng, mã OTP xác thực và tin nhắn thương hiệu tới các thuê bao di động toàn cầu với tỷ lệ phát cao."
            : `Tin nhắn giao dịch tức thì, mã xác minh dưới 2 giây và gửi tin nhắn quảng cáo tuân thủ quy định trên tất cả các mạng tại ${country}.`,
          features: [
            isGlobal ? "Gửi mã OTP nhanh dưới 1 giây" : `Đăng ký Brandname chính thức tại ${country}`,
            isGlobal ? "Đảm bảo tỷ lệ chuyển phát thành công" : "Cam kết phát mã OTP dưới 2 giây",
            isGlobal ? "Tin nhắn tương tác đa phương tiện RCS" : "Cơ chế dự phòng định tuyến tự động",
          ],
        },
        {
          title: isGlobal ? "Đa Kênh Omnichannel" : `API Đa Kênh & WhatsApp tại ${country}`,
          description: isGlobal
            ? "Hợp nhất Thoại, SMS, WhatsApp và Xác thực thành một bộ REST API chuẩn cho nhà phát triển, dễ dàng tích hợp và triển khai ngay."
            : `API WhatsApp Business chính thức, tin nhắn tương tác RCS và kết nối đa kênh được tối ưu cho khách hàng tại ${country}.`,
          features: [
            isGlobal ? "API chính thức WhatsApp Business" : "API chính thức WhatsApp Business",
            isGlobal ? "Tin nhắn hội thoại tương tác RCS" : "Hồ sơ thương hiệu xác minh chính thức trên RCS",
            isGlobal ? "Bộ REST API đồng bộ duy nhất" : "Hệ thống REST API đa kênh hoàn chỉnh",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "GIẢI PHÁP DOANH NGHIỆP" : `GIẢI PHÁP DOANH NGHIỆP TẠI ${country.toUpperCase()}`,
      title: isGlobal ? "Giải Pháp Cho Mọi Giai Đoạn Tương Tác Khách Hàng" : `Giải Pháp Được Thiết Kế Riêng Cho ${country}`,
      description: isGlobal
        ? "Kết nối, tương tác và chăm sóc khách hàng qua các giải pháp thoại, tin nhắn và đa kênh bảo mật và đáng tin cậy."
        : `Nền tảng công nghệ viễn thông hiệu năng cao dành cho các tập đoàn, công ty fintech và doanh nghiệp tăng trưởng tại ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Xác Thực OTP",
          tagline: "Bảo mật. Tức thì. Ổn định.",
          title: `Xác Thực Mã OTP Tức Thì (${country})`,
          description: `Gửi mã mật khẩu dùng một lần (OTP) nhanh chóng và bảo mật cho việc đăng ký, đăng nhập, khôi phục tài khoản và xác thực thanh toán tại ${country}.`,
          features: [
            "Tốc độ gửi mã OTP cực nhanh dưới 2 giây",
            "Cơ chế tự động chuyển đổi tuyến khi nhà mạng gặp sự cố",
            `Tối ưu hóa các tuyến tới mọi nhà mạng viễn thông tại ${country}`,
          ],
          customerStatus: "Đã Xác Minh Danh Tính",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Mã xác thực của bạn là",
            bodyBold: "53193",
            validTime: "Hiệu lực trong 5 phút. Vui lòng không chia sẻ mã này.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Xác Thực",
            title: "Xác Minh Số Điện Thoại",
            subtitle: `Chúng tôi đã gửi mã xác minh đến số điện thoại đã đăng ký của bạn tại ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Xác Minh và Tiếp Tục",
            subNote: "Chưa nhận được mã?\nGửi lại mã sau 00:45",
          },
        },
        {
          id: "banking",
          name: "Ngân Hàng & Tài Chính",
          tagline: "An toàn. Kết nối. Tin cậy.",
          title: `Dịch Vụ Tài Chính & Ngân Hàng (${country})`,
          description: `Kênh truyền thông tin tài chính an toàn với cảnh báo giao dịch theo thời gian thực, biến động số dư và thông báo thanh toán tại ${country}.`,
          features: [
            "Hệ thống mã hóa đạt tiêu chuẩn bảo mật ngân hàng",
            "Thông báo tức thời biến động số dư nợ/có và chuyển khoản",
            "Năng lực gửi tin nhắn giao dịch lưu lượng cực lớn",
          ],
          customerStatus: "Giao Dịch Thành Công",
          notification: {
            header: "Thông Báo Giao Dịch Ngân Hàng",
            body: `Giao dịch thanh toán ${currency}250.00 của bạn đã hoàn tất thành công.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Ngân Hàng",
            title: "Thanh Toán Thành Công",
            subtitle: `Khoản tiền ${currency}250.00 đã được xử lý an toàn trong tài khoản của bạn.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Đã Hoàn Tất",
              reference: "TXN-849201",
            },
            buttonText: "Xem Chi Tiết Sao Kê",
            subNote: "✓ Được gửi qua tuyến viễn thông chuyên biệt bảo mật cao",
          },
        },
        {
          id: "marketing",
          name: "Tiếp Thị & Marketing",
          tagline: "Tiếp cận. Thu hút. Chuyển đổi.",
          title: `Truyền Thông & Tiếp Thị Quảng Bá (${country})`,
          description: `Tiếp cận người tiêu dùng thông qua các chiến dịch tin nhắn mục tiêu với ưu đãi độc quyền, khuyến mãi mùa lễ và thông báo thương hiệu tại ${country}.`,
          features: [
            "Gửi tin nhắn SMS quảng cáo hàng loạt với tỷ lệ mở cao",
            "Phân khúc tệp khách hàng và lên lịch gửi thông minh",
            "Theo dõi lượt click và phân tích chuyển đổi theo thời gian thực",
          ],
          customerStatus: "Ưu Đãi Đã Gửi",
          notification: {
            header: "Ưu Đãi Độc Quyền",
            line1: "GIẢM GIÁ ĐẶC BIỆT 30%",
            line2: `Khuyến mãi hấp dẫn áp dụng trên toàn ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Ưu Đãi Đặc Biệt",
            badge: "Có Hạn",
            title: "Ưu Đãi Dành Riêng Cho Bạn",
            subtitle: `Nhận ngay ưu đãi giảm 30% cho đơn hàng tiếp theo.\nÁp dụng đến hết tháng này.`,
            buttonText: "Nhận Mã Ngay",
            subNote: `✓ Đã gửi đến danh sách thuê bao đã xác thực tại ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Nhắc Lịch Tự Động",
          tagline: "Đúng giờ. Chính xác. Tự động.",
          title: `Nhắc Lịch Tự Động Cho Khách Hàng (${country})`,
          description: `Thông báo kịp thời cho khách hàng về lịch hẹn, hạn thanh toán hóa đơn, gia hạn dịch vụ và các sự kiện đã lên lịch tại ${country}.`,
          features: [
            "Tự động gửi thông báo lịch hẹn qua nhiều kênh liên lạc",
            "Tích hợp liên kết thanh toán trực tiếp trong nội dung tin nhắn",
            "Giảm thiểu đáng kể tình trạng quên lịch và trễ hạn thanh toán",
          ],
          customerStatus: "Đã Gửi Nhắc Nhở",
          notification: {
            header: "Nhắc Lịch Hẹn",
            line1: "Lịch hẹn vào Ngày Mai",
            line2: "Vui lòng có mặt trước 10 phút so với giờ hẹn.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Nhắc Hẹn",
            title: "Lịch Hẹn Được Xếp Vào Ngày Mai",
            subtitle: "Buổi hẹn của bạn đã được xác nhận lúc 10:30 sáng.",
            infoCard: {
              label: "Địa điểm / Cơ sở",
              value: `Chi nhánh Trung tâm ${country}`,
            },
            buttonText: "Xác Nhận Có Mặt",
            subNote: "Soạn 1 để xác nhận hoặc 2 để dời lịch hẹn",
          },
        },
        {
          id: "emergency",
          name: "Cảnh Báo Khẩn Cấp",
          tagline: "Khẩn cấp. Tức thì. Luôn kết nối.",
          title: `Cảnh Báo An Toàn & Tình Huống Khẩn Cấp (${country})`,
          description: `Phát đi các thông báo khẩn cấp ngay lập tức khi từng giây đều quý giá, bảo vệ sự an toàn của người dân và duy trì hoạt động kinh doanh tại ${country}.`,
          features: [
            "Tuyến ưu tiên cao nhất, vượt qua hàng đợi tin nhắn thông thường",
            "Định vị theo khu vực địa lý cho các thông báo đại chúng diện rộng",
            "Tự động chuyển tiếp sang cuộc gọi thoại nếu tin nhắn không thể gửi",
          ],
          customerStatus: "Đã Phát Cảnh Báo",
          notification: {
            header: "Cảnh Báo An Toàn Công Cộng",
            line1: "Thông Báo Thời Tiết Nguy Cấp",
            line2: "Vui lòng tuân thủ hướng dẫn của cơ quan chức năng.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Cảnh Báo Khẩn Cấp",
            title: "Cảnh Báo Thời Tiết Nguy Cấp",
            subtitle: "Thời tiết khắc nghiệt được dự báo trong khu vực. Vui lòng ở trong nhà và theo dõi thông tin chính thức.",
            infoCard: {
              label: "Khu Vực Bị Ảnh Hưởng",
              value: country,
            },
            buttonText: "Xem Điểm Trú Ẩn An Toàn",
            subNote: "Thông báo phát thanh an toàn công cộng chính thức",
          },
        },
        {
          id: "order",
          name: "Đơn Hàng & Vận Chuyển",
          tagline: "Thông báo. Theo dõi. Giao hàng.",
          title: `Theo Dõi Đơn Hàng & Vận Chuyển Theo Thời Gian Thực (${country})`,
          description: `Cập nhật cho khách mua hàng trong suốt hành trình giao vận: từ thông báo xuất kho, vị trí tài xế đến mã OTP xác nhận nhận hàng tại ${country}.`,
          features: [
            "Cập nhật trạng thái xuất kho và vận chuyển theo thời gian thực",
            "Thông báo tài xế đang đến kèm đường dẫn vị trí trực tiếp",
            "Mã OTP an toàn để xác thực giao nhận bưu kiện",
          ],
          customerStatus: "Đang Giao Hàng",
          notification: {
            header: "Cập Nhật Trạng Thái Đơn Hàng",
            line1: "Đơn hàng #IN849201 Đang Được Giao",
            line2: `Kiện hàng sẽ được giao trong hôm nay tại ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Theo Dõi Đơn Hàng",
            title: "Đơn Hàng Của Bạn Đang Trên Đường Giao",
            subtitle: "Tài xế giao hàng đang di chuyển để giao kiện hàng tới bạn.",
            infoCard: {
              label: "Mã OTP Nhận Hàng",
              value: "8492",
            },
            buttonText: "Theo Dõi Trên Bản Đồ",
            subNote: "Hỗ trợ giao hàng không tiếp xúc trực tiếp",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "CHUYÊN MÔN THEO NGÀNH" : `CHUYÊN MÔN THEO NGÀNH - ${country.toUpperCase()}`,
      titleLine1: "Giải Pháp Viễn Thông Được Thiết Kế",
      titleLine2: isGlobal ? "Cho Từng Ngành Nghề" : `Dành Cho Doanh Nghiệp tại ${country}`,
      description: isGlobal
        ? "Kết nối và xây dựng mối quan hệ bền vững với khách hàng qua các dịch vụ thoại, SMS và kênh số tích hợp đáng tin cậy."
        : `Hạ tầng viễn thông đáp ứng đầy đủ các quy định địa phương, tiêu chuẩn bảo mật và thói quen tiêu dùng tại ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Ngân Hàng và Tài Chính",
          title: `Ngân Hàng & Fintech tại ${country}`,
          description: `SMS giao dịch bảo mật cao, tuân thủ các quy định ngân hàng và xác thực giao dịch tức thì tại ${country}.`,
        },
        {
          id: "healthcare",
          name: "Y Tế và Phòng Khám",
          title: `Bệnh Viện & Cơ Sở Y Tế tại ${country}`,
          description: `Nhắc lịch khám bệnh, thông báo kết quả xét nghiệm và kênh liên lạc khám chữa bệnh từ xa tại ${country}.`,
        },
        {
          id: "ecommerce",
          name: "Thương Mại Điện Tử",
          title: `Thương Mại Điện Tử & Bán Lẻ tại ${country}`,
          description: `Cập nhật hành trình đơn hàng, tin nhắn khuyến mãi chớp nhoáng và chăm sóc khách hàng đa kênh tại ${country}.`,
        },
        {
          id: "education",
          name: "Giáo Dục và Đào Tạo",
          title: `Trường Học & Đại Học tại ${country}`,
          description: `Thông báo tuyển sinh, cảnh báo khẩn cấp trong trường học và sổ liên lạc điện tử tại ${country}.`,
        },
        {
          id: "travel",
          name: "Du Lịch và Khách Sạn",
          title: `Du Lịch & Hàng Không tại ${country}`,
          description: `Thông báo thay đổi cửa khởi hành, xác nhận đặt phòng khách sạn và hỗ trợ du khách 24/7 tại ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "LIÊN HỆ VỚI CHÚNG TÔI" : `LIÊN HỆ VỚI CHÚNG TÔI TẠI ${country.toUpperCase()}`,
      titleLine1: "Cùng Xây Dựng Kết Nối",
      titleLine2: isGlobal ? "Viễn Thông Phù Hợp." : `Viễn Thông Tối Ưu Tại ${country}.`,
      description: isGlobal
        ? "Với iNet Global Services, các doanh nghiệp có thể ứng dụng các giải pháp SMS và thoại đáng tin cậy để tăng mức độ tương tác của khách hàng, tăng cường an ninh dữ liệu và tối ưu vận hành. Chúng tôi mang đến tốc độ, sự ổn định và hiệu năng cao nhất."
        : `Hợp tác cùng iNet Global để sở hữu các tuyến SMS trực tiếp, chất lượng thoại rõ nét và tuân thủ pháp lý toàn diện tại ${country}. Liên hệ ngay với đội ngũ chuyên gia của chúng tôi để thử nghiệm miễn phí và nhận báo giá ưu đãi.`,
    },
    footer: {
      description: isGlobal
        ? "Hạ tầng viễn thông toàn cầu cho các doanh nghiệp cần sự tin cậy tuyệt đối trong dịch vụ thoại, tin nhắn và kết nối đa kênh."
        : `Hạ tầng viễn thông cấp doanh nghiệp cung cấp dịch vụ Thoại, SMS, Đầu số ảo DID và API Đa Kênh tại ${country} và trên thế giới.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Hoa Kỳ" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Mọi quyền được bảo lưu.`,
    },
  }),

  // 9. Polish (Polski - pl)
  pl: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "GLOBALNA INFRASTRUKTURA TELEKOMUNIKACYJNA"
        : `INFRASTRUKTURA TELEKOMUNIKACYJNA W ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Globalna Komunikacja," : `Najlepsze Usługi SMS i Ruchu`,
      titleLine2: isGlobal ? "Stworzona Dla" : `Głosowego w ${country},`,
      titleLine3: isGlobal ? "Nowoczesnego Biznesu." : `Dla Przedsiębiorstw na Dużą Skalę.`,
      description: isGlobal
        ? "Niezawodne usługi głosowe, wiadomości biznesowe i numery wirtualne dla firm, które łączą zespoły, rynki zagraniczne i klientów w każdym punkcie kontaktu."
        : `Zapewniamy przedsiębiorstwom w ${country} trasy SMS o wysokiej przepustowości, ultraniskie opóźnienia w terminacji głosu i bezpośrednie styki z operatorami.`,
      primaryCta: isGlobal ? "Rozpocznij Teraz" : `Rozpocznij w ${country}`,
      secondaryCta: isGlobal ? "Poznaj Usługi" : `Zobacz Trasy w ${country}`,
      timeline: {
        voice: isGlobal ? "Głos Biznesowy" : `Ruch Głosowy (CLI) w ${country}`,
        messaging: isGlobal ? "SMS & Wiadomości" : `Trasy SMS i OTP w ${country}`,
        numbers: isGlobal ? "Numery Wirtualne" : `Numery Wirtualne DID w ${country}`,
        footerNote1: isGlobal ? "Jedna Platforma" : "Bezpośrednie Trasy Operatorskie",
        footerNote2: isGlobal ? "Zasięg Globalny" : "100% Zgodności z Regulacjami",
      },
    },
    coreServices: {
      badge: isGlobal ? "GŁÓWNE USŁUGI" : `USŁUGI I STYKI OPERATORSKIE W ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Rozwiązania komunikacyjne dla" : `Najlepsze Usługi Głosowe i SMS w ${country}`,
      titleLine2: isGlobal ? "każdego etapu ścieżki klienta" : "Dla Rozwijających Się Przedsiębiorstw",
      description: isGlobal
        ? "Modułowa infrastruktura telekomunikacyjna zaprojektowana z myślą o wysokiej dostępności usług głosowych, SMS i numerów wirtualnych na całym świecie."
        : `Infrastruktura klasy operatorskiej w ${country} z dostępnością 99,99%, doręczaniem OTP w czasie poniżej 2 sekund i bezpośrednimi łączami.`,
      services: [
        {
          title: isGlobal ? "Usługi Głosowe" : `SIP Trunking i Głos w ${country}`,
          description: isGlobal
            ? "Międzynarodowy SIP trunking z elastycznym trasowaniem, najwyższą jakością dźwięku, gwarancją CLI i optymalnymi stawkami terminacji."
            : `Wysokowydajny ruch połączeń w ${country} z gwarantowaną prezentacją numeru (CLI), trasami premium i bezpośrednimi stykami z lokalnymi sieciami.`,
          features: [
            isGlobal ? "Krystalicznie czysta jakość głosu HD" : "Gwarancja Czystych Tras CLI",
            isGlobal ? "Elastyczne opcje trasowania ruchu" : "Bezpośrednie Styki Operatorskie",
            isGlobal ? "Globalna redundancja i zasięg" : `Ogólnokrajowe Numery Wirtualne DID w ${country}`,
          ],
        },
        {
          title: isGlobal ? "Wiadomości SMS" : `Usługi SMS dla Biznesu w ${country}`,
          description: isGlobal
            ? "Wysyłaj krytyczne SMS-y transakcyjne, kody weryfikacyjne OTP oraz bogate wiadomości biznesowe prosto na telefony komórkowe na całym świecie."
            : `Błyskawiczne SMS-y transakcyjne, kody weryfikacyjne poniżej 2 sekund i w pełni zgodna masowa wysyłka we wszystkich sieciach w ${country}.`,
          features: [
            isGlobal ? "Doręczenie OTP poniżej sekundy" : `Oficjalna Rejestracja Nadawcy (Sender ID) w ${country}`,
            isGlobal ? "Maksymalna skuteczność doręczeń" : "Gwarancja Doręczenia OTP Poniżej 2 Sekund",
            isGlobal ? "Wiadomości multimedialne RCS" : "Dynamiczny Failover i Ochrona Przed Awariami",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `API Omnichannel i WhatsApp w ${country}`,
          description: isGlobal
            ? "Połącz Głos, SMS, WhatsApp i Weryfikację tożsamości w jeden przejrzysty zestaw REST API, gotowy do natychmiastowej integracji."
            : `Oficjalne API WhatsApp Business, interaktywne wiadomości RCS i zintegrowana komunikacja dopasowana do klientów w ${country}.`,
          features: [
            isGlobal ? "Oficjalne API WhatsApp Business" : "Oficjalne API WhatsApp Business",
            isGlobal ? "Interaktywny czat biznesowy RCS" : "Zweryfikowany Profil Marki z Odznaką w RCS",
            isGlobal ? "Spójny pakiet REST API" : "Pełny Zestaw Wielokanałowych REST API",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "ROZWIĄZANIA DLA BIZNESU" : `ROZWIĄZANIA BIZNESOWE W ${country.toUpperCase()}`,
      title: isGlobal ? "Rozwiązania dla każdego etapu kontaktu z klientem" : `Rozwiązania Stworzone Dla ${country}`,
      description: isGlobal
        ? "Docieraj, angażuj i buduj trwałe relacje z klientami dzięki bezpiecznym i stabilnym rozwiązaniom głosowym, SMS i omnichannel."
        : `Wysokowydajny stos technologiczny opracowany dla korporacji, sektora fintech i dynamicznie skalujących się firm w ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Uwierzytelnianie OTP",
          tagline: "Bezpieczne. Szybkie. Niezawodne.",
          title: `Błyskawiczne Kody Jednorazowe OTP (${country})`,
          description: `Wysyłaj hasła jednorazowe natychmiast i z najwyższym bezpieczeństwem przy rejestracji kont, logowaniu, odzyskiwaniu haseł i autoryzacji płatności w ${country}.`,
          features: [
            "Doręczanie kodów OTP w czasie poniżej 2 sekund",
            "Automatyczny failover i ochrona przed awariami sieci",
            `Zoptymalizowane trasy do wszystkich operatorów w ${country}`,
          ],
          customerStatus: "Tożsamość Zweryfikowana",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Twój kod weryfikacyjny to:",
            bodyBold: "53193",
            validTime: "Ważny przez 5 minut. Nikomu go nie udostępniaj.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Uwierzytelnianie",
            title: "Potwierdź swój numer telefonu",
            subtitle: `Wysłaliśmy kod weryfikacyjny na Twój numer zarejestrowany w ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Zweryfikuj i Kontynuuj",
            subNote: "Nie otrzymałeś kodu?\nWyślij ponownie za 00:45",
          },
        },
        {
          id: "banking",
          name: "Bankowość i Finanse",
          tagline: "Bezpieczne. Stabilne. Zaufane.",
          title: `Usługi Bankowe i Finansowe (${country})`,
          description: `Bezpieczna komunikacja bankowa z powiadomieniami o transakcjach w czasie rzeczywistym, zmianach salda i autoryzacjach przelewów w ${country}.`,
          features: [
            "Szyfrowane łącza o standardzie bezpieczeństwa bankowego",
            "Natychmiastowe alerty o obciążeniach, uznaniach i przelewach",
            "Wysoka przepustowość dla wiadomości transakcyjnych",
          ],
          customerStatus: "Transakcja Zrealizowana",
          notification: {
            header: "Powiadomienie Bankowe",
            body: `Płatność na kwotę ${currency}250.00 została pomyślnie zrealizowana.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Bankowość",
            title: "Płatność Zakończona Sukcesem",
            subtitle: `Kwota ${currency}250.00 została bezpiecznie zaksięgowana na Twoim koncie.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Zrealizowano",
              reference: "TXN-849201",
            },
            buttonText: "Pobierz Potwierdzenie",
            subNote: "✓ Wysłano przez certyfikowany, bezpieczny kanał operatorski",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Zasięg. Zaangażowanie. Sprzedaż.",
          title: `Komunikacja Marketingowa i Kampanie (${country})`,
          description: `Docieraj do odbiorców dzięki ukierunkowanym kampaniom SMS z rabatami, ofertami sezonowymi i ogłoszeniami marek na szeroką skalę w ${country}.`,
          features: [
            "Masowa wysyłka promocyjna o najwyższych wskaźnikach otwarć",
            "Precyzyjna segmentacja odbiorców i inteligentny harmonogram",
            "Śledzenie kliknięć i analityka konwersji w czasie rzeczywistym",
          ],
          customerStatus: "Oferta Dostarczona",
          notification: {
            header: "Oferta Specjalna",
            line1: "ZNIŻKA 30% SPECJALNIE DLA CIEBIE",
            line2: `Wyjątkowe okazje dostępne w całym kraju (${country}).`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Okazje i Promocje",
            badge: "Czas Ograniczony",
            title: "Ekskluzywny Rabat Dla Ciebie",
            subtitle: `Zyskaj 30% zniżki na kolejne zakupy.\nOferta ważna do końca bieżącego miesiąca.`,
            buttonText: "Odbierz Rabat",
            subNote: `✓ Wysłano do zweryfikowanych subskrybentów w ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Przypomnienia",
          tagline: "Na Czas. Pewnie. Automatycznie.",
          title: `Automatyczne Przypomnienia dla Klientów (${country})`,
          description: `Uprzedzaj klientów o terminach wizyt, zbliżających się płatnościach za faktury i odnowieniach subskrypcji w ${country}.`,
          features: [
            "Zautomatyzowane powiadomienia wysyłane wieloma kanałami",
            "Bezpośrednie linki do szybkich płatności w treści wiadomości",
            "Drastyczne zmniejszenie liczby opuszczonych wizyt i opóźnień",
          ],
          customerStatus: "Przypomnienie Doręczone",
          notification: {
            header: "Przypomnienie o Wizycie",
            line1: "Zaplanowano na Jutro",
            line2: "Prosimy o przybycie 10 minut przed wyznaczoną godziną.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Przypomnienia",
            title: "Termin Wizyty Zaplanowany na Jutro",
            subtitle: "Twoja wizyta została potwierdzona na godzinę 10:30.",
            infoCard: {
              label: "Lokalizacja / Placówka",
              value: `Oddział Centralny ${country}`,
            },
            buttonText: "Potwierdź Obecność",
            subNote: "Odpisz 1 aby potwierdzić lub 2 aby przełożyć termin",
          },
        },
        {
          id: "emergency",
          name: "Alerty Kryzysowe",
          tagline: "Kluczowe. Natychmiastowe. Zawsze.",
          title: `Alerty Kryzysowe i Bezpieczeństwo Publiczne (${country})`,
          description: `Natychmiastowe rozsyłanie pilnych ostrzeżeń w sytuacjach zagrożenia, gdy liczy się każda sekunda, dla ochrony życia i mienia w ${country}.`,
          features: [
            "Najwyższy priorytet wysyłki z pominięciem standardowych kolejek",
            "Targetowanie geograficzne do masowego ostrzegania ludności",
            "Automatyczny failover na połączenia głosowe przy braku doręczenia SMS",
          ],
          customerStatus: "Alert Kryzysowy Wysłany",
          notification: {
            header: "Służby Bezpieczeństwa Publicznego",
            line1: "Pilne Ostrzeżenie Meteorologiczne",
            line2: "Stosuj się do zaleceń lokalnych służb ratunkowych.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Alert Bezpieczeństwa",
            title: "Pilne Ostrzeżenie Pogodowe",
            subtitle: "W Twoim regionie prognozowane są niebezpieczne zjawiska atmosferyczne. Pozostań w bezpiecznym miejscu.",
            infoCard: {
              label: "Obszar Zagrożony",
              value: country,
            },
            buttonText: "Sprawdź Bezpieczne Schronienia",
            subNote: "Oficjalny komunikat służb ratunkowych",
          },
        },
        {
          id: "order",
          name: "Zamówienia i Przesyłki",
          tagline: "Informuj. Śledź. Dostarczaj.",
          title: `Śledzenie Zamówień i Dostaw w Czasie Rzeczywistym (${country})`,
          description: `Informuj kupujących na każdym kroku: od wysyłki z magazynu po śledzenie kuriera na żywo i weryfikację odbioru kodem OTP w ${country}.`,
          features: [
            "Bieżące powiadomienia o kompletacji i nadaniu przesyłki",
            "Powiadomienie o przyjeździe kuriera z linkiem do mapy na żywo",
            "Bezpieczny kod OTP do potwierdzenia odbioru paczki",
          ],
          customerStatus: "W Doręczeniu",
          notification: {
            header: "Status Twojego Zamówienia",
            line1: "Zamówienie #IN849201 Wysłane",
            line2: `Paczka zostanie doręczona dzisiaj pod adres w ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Śledzenie Przesyłki",
            title: "Twoja Paczka Jest Już w Drodze",
            subtitle: "Kurier jedzie pod Twój adres, aby dostarczyć przesyłkę.",
            infoCard: {
              label: "Kod Odbioru OTP",
              value: "8492",
            },
            buttonText: "Śledź na Mapie",
            subNote: "Dostępne bezkontaktowe wydanie przesyłki",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "DOŚWIADCZENIE BRANŻOWE" : `SPECJALIZACJA BRANŻOWA - ${country.toUpperCase()}`,
      titleLine1: "Rozwiązania Telekomunikacyjne Stworzone",
      titleLine2: isGlobal ? "Dla Każdej Branży Rynkowej" : `Dla Przedsiębiorstw w ${country}`,
      description: isGlobal
        ? "Buduj trwałe zaangażowanie klientów dzięki niezawodnym usługom głosowym, komunikacji SMS i zintegrowanym kanałom cyfrowym."
        : `Infrastruktura w pełni dostosowana do lokalnych przepisów telekomunikacyjnych, standardów RODO i potrzeb konsumentów w ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Bankowość i Finanse",
          title: `Bankowość i Fintech w ${country}`,
          description: `Bezpieczne SMS-y transakcyjne, rygorystyczna zgodność finansowa i natychmiastowe potwierdzenia przelewów (${country}).`,
        },
        {
          id: "healthcare",
          name: "Ochrona Zdrowia",
          title: `Szpitale i Przychodnie w ${country}`,
          description: `Powiadomienia o terminach wizyt, gotowości wyników badań i telemedycyna w całym kraju (${country}).`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce i Handel",
          title: `E-Commerce i Handel Detaliczny w ${country}`,
          description: `Śledzenie paczek, wiadomości o błyskawicznych promocjach i wielokanałowa obsługa klienta w ${country}.`,
        },
        {
          id: "education",
          name: "Edukacja i Uczelnie",
          title: `Szkoły i Uniwersytety w ${country}`,
          description: `Komunikaty rekrutacyjne, pilne ogłoszenia dla studentów i platformy kontaktu z rodzicami w ${country}.`,
        },
        {
          id: "travel",
          name: "Turystyka i Hotelarstwo",
          title: `Linie Lotnicze i Hotele w ${country}`,
          description: `Powiadomienia o zmianie bramek, potwierdzenia rezerwacji i całodobowe wsparcie dla podróżnych w ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "SKONTAKTUJ SIĘ" : `SKONTAKTUJ SIĘ Z NAMI W ${country.toUpperCase()}`,
      titleLine1: "Zbudujmy Odpowiednie",
      titleLine2: isGlobal ? "Rozwiązanie Komunikacyjne." : `Rozwiązanie Telekomunikacyjne w ${country}.`,
      description: isGlobal
        ? "Dzięki iNet Global Services firmy mogą wdrażać stabilne usługi SMS i głosowe, zwiększając zaangażowanie odbiorców, podnosząc bezpieczeństwo i optymalizując koszty operacyjne. Zapewniamy najwyższą szybkość, niezawodność i wydajność."
        : `Zostań partnerem iNet Global i zyskaj bezpośrednie trasy SMS, krystalicznie czysty dźwięk oraz pełną zgodność prawną w ${country}. Skontaktuj się z naszymi doradcami, aby uruchomić bezpłatne testy i otrzymać ofertę dopasowaną do potrzeb.`,
    },
    footer: {
      description: isGlobal
        ? "Globalna infrastruktura telekomunikacyjna dla przedsiębiorstw wymagających najwyższej stabilności w usługach głosowych, SMS i omnichannel."
        : `Infrastruktura klasy enterprise dostarczająca głos operatorski, SMS, wirtualne numery DID oraz API wielokanałowe w ${country} i na całym świecie.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Stany Zjednoczone" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Wszelkie prawa zastrzeżone.`,
    },
  }),

  // 10. Thai (ไทย - th)
  th: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "โครงสร้างพื้นฐานด้านการสื่อสารระดับโลก"
        : `โครงสร้างพื้นฐานโทรคมนาคมใน ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "การสื่อสารระดับโลก," : `บริการ SMS และทราฟฟิกเสียงที่ดีที่สุด`,
      titleLine2: isGlobal ? "สร้างขึ้นเพื่อ" : `ในประเทศ ${country},`,
      titleLine3: isGlobal ? "ธุรกิจขนาดใหญ่." : `พร้อมสำหรับระดับองค์กร.`,
      description: isGlobal
        ? "บริการเสียง ข้อความธุรกิจ และเบอร์เสมือนที่เชื่อถือได้ เพื่อให้ธุรกิจเชื่อมต่ออย่างไร้พรมแดน ระหว่างทีม และในทุกจุดสัมผัสของลูกค้า"
        : `เสริมพลังให้ธุรกิจใน ${country} ด้วยเส้นทาง SMS ประสิทธิภาพสูง การเชื่อมต่อเสียงที่มีความหน่วงต่ำเป็นพิเศษ และการเชื่อมต่อตรงกับผู้ให้บริการเครือข่าย`,
      primaryCta: isGlobal ? "เริ่มต้นใช้งาน" : `เริ่มต้นใน ${country}`,
      secondaryCta: isGlobal ? "ดูบริการทั้งหมด" : `ดูเส้นทางใน ${country}`,
      timeline: {
        voice: isGlobal ? "เสียงสำหรับธุรกิจ" : `ทราฟฟิกเสียง (CLI) ใน ${country}`,
        messaging: isGlobal ? "SMS และข้อความ" : `เส้นทาง SMS & OTP ใน ${country}`,
        numbers: isGlobal ? "เบอร์เสมือน" : `เบอร์เสมือน DID ใน ${country}`,
        footerNote1: isGlobal ? "แพลตฟอร์มเดียวครบวงจร" : "เส้นทางตรงจากโอเปอเรเตอร์",
        footerNote2: isGlobal ? "ครอบคลุมทั่วโลก" : "ปฏิบัติตามกฎระเบียบ 100%",
      },
    },
    coreServices: {
      badge: isGlobal ? "บริการหลัก" : `บริการและการเชื่อมต่อเครือข่ายใน ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "โซลูชันการสื่อสารสำหรับทุก" : `บริการเสียงและ SMS ที่ดีที่สุดใน ${country}`,
      titleLine2: isGlobal ? "ขั้นตอนของเส้นทางลูกค้า" : "สำหรับองค์กรที่กำลังเติบโต",
      description: isGlobal
        ? "โครงสร้างพื้นฐานโทรคมนาคมแบบโมดูลาร์ที่ออกแบบมาเพื่อความพร้อมใช้งานสูงในด้านเสียง ข้อความ และเบอร์เสมือนทั่วโลก"
        : `โครงสร้างพื้นฐานโทรคมนาคมระดับผู้ให้บริการใน ${country} พร้อมความพร้อมใช้งาน 99.99% ส่ง OTP ภายใน 2 วินาที และการเชื่อมต่อตรงในท้องถิ่น`,
      services: [
        {
          title: isGlobal ? "บริการเสียง" : `บริการเสียงและ SIP Trunking ใน ${country}`,
          description: isGlobal
            ? "SIP trunking ระหว่างประเทศพร้อมตัวเลือกการกำหนดเส้นทางที่ยืดหยุ่น คุณภาพเสียงระดับพรีเมียม การแสดงเบอร์โทรต้นทาง (CLI) และต้นทุนที่คุ้มค่า"
            : `ทราฟฟิกการโทรพร้อมกันสูงใน ${country} พร้อมการรับประกัน CLI เส้นทางคุณภาพระดับพรีเมียม และการเชื่อมต่อตรงกับเครือข่ายมือถือในประเทศ`,
          features: [
            isGlobal ? "การเชื่อมต่อเสียง HD คุณภาพสูง" : "รับประกันเส้นทาง CLI แท้ 100%",
            isGlobal ? "ตัวเลือกการกำหนดเส้นทางที่ยืดหยุ่น" : "เชื่อมต่อตรงกับผู้ให้บริการเครือข่าย",
            isGlobal ? "ครอบคลุมทั่วโลกพร้อมระบบสำรอง" : `เบอร์เสมือน DID ทั่วทั้งประเทศ (${country})`,
          ],
        },
        {
          title: isGlobal ? "บริการข้อความ SMS" : `บริการ SMS ธุรกิจที่ดีที่สุดใน ${country}`,
          description: isGlobal
            ? "ส่ง SMS ธุรกรรมที่สำคัญ รหัส OTP และข้อความธุรกิจแบบมัลติมีเดียตรงสู่โทรศัพท์มือถือทั่วโลกด้วยความมั่นใจในการส่งถึงผู้รับ"
            : `SMS ธุรกรรมความเร็วสูง รหัสยืนยันภายใน 2 วินาที และบริการส่ง SMS ปริมาณมากที่ถูกต้องตามกฎเกณฑ์ทุกเครือข่ายใน ${country}`,
          features: [
            isGlobal ? "ส่ง OTP ภายในเสี้ยววินาที" : `การลงทะเบียน Sender ID โดยตรงใน ${country}`,
            isGlobal ? "รับประกันอัตราการส่งถึงปลายทางสูง" : "รับประกันส่งรหัส OTP ภายใน 2 วินาที",
            isGlobal ? "ส่งข้อความมัลติมีเดีย RCS" : "ระบบสลับเส้นทางสำรองอัตโนมัติป้องกันข้อผิดพลาด",
          ],
        },
        {
          title: isGlobal ? "ออมนิแชนแนล" : `Omnichannel & WhatsApp API ใน ${country}`,
          description: isGlobal
            ? "รวมเสียง, SMS, WhatsApp และการยืนยันตัวตนไว้ในชุด REST API เดียวที่ใช้งานง่ายและพร้อมสำหรับการติดตั้งทันที"
            : `API ทางการของ WhatsApp Business, การส่งข้อความโต้ตอบ RCS และช่องทางสื่อสารที่ปรับแต่งสำหรับลูกค้าใน ${country}`,
          features: [
            isGlobal ? "WhatsApp Business API อย่างเป็นทางการ" : "WhatsApp Business API อย่างเป็นทางการ",
            isGlobal ? "การส่งข้อความสนทนาแบบโต้ตอบ RCS" : "โปรไฟล์แบรนด์ที่ได้รับการยืนยันบน RCS พร้อมตราสัญลักษณ์",
            isGlobal ? "ชุด REST API รวมศูนย์ใช้งานง่าย" : "REST API หลากหลายช่องทางแบบครบวงจร",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "โซลูชันธุรกิจ" : `โซลูชันธุรกิจใน ${country.toUpperCase()}`,
      title: isGlobal ? "โซลูชันสำหรับทุกขั้นตอนการเดินทางของลูกค้า" : `โซลูชันที่พัฒนาขึ้นเพื่อ ${country}`,
      description: isGlobal
        ? "เชื่อมต่อ มีส่วนร่วม และสื่อสารกับลูกค้าผ่านโซลูชันเสียง ข้อความ และออมนิแชนแนลที่ปลอดภัยและมีเสถียรภาพสูงสุด"
        : `สแตกโทรคมนาคมประสิทธิภาพสูงที่ออกแบบมาสำหรับองค์กรขนาดใหญ่ ฟินเทค และธุรกิจที่เติบโตอย่างรวดเร็วใน ${country}`,
      solutions: [
        {
          id: "otp",
          name: "การยืนยันตัวตน OTP",
          tagline: "ปลอดภัย. รวดเร็ว. เชื่อถือได้.",
          title: `การยืนยันตัวตนด้วยรหัส OTP ทันใจ (${country})`,
          description: `ส่งรหัสผ่านใช้ครั้งเดียวอย่างรวดเร็วและปลอดภัยสำหรับการลงทะเบียน การเข้าสู่ระบบ การกู้คืนบัญชี และการยืนยันการชำระเงินใน ${country}`,
          features: [
            "ส่งรหัส OTP รวดเร็วและแม่นยำภายในไม่เกิน 2 วินาที",
            "ระบบสำรองข้ามเครือข่ายอัตโนมัติป้องกันความล้มเหลว",
            `เส้นทางที่ปรับแต่งอย่างเหมาะสมสำหรับทุกเครือข่ายใน ${country}`,
          ],
          customerStatus: "ยืนยันตัวตนสำเร็จ",
          notification: {
            header: `iNet OTP (${country})`,
            body: "รหัสยืนยันของคุณคือ",
            bodyBold: "53193",
            validTime: "ใช้งานได้ภายใน 5 นาที โปรดอย่าเปิดเผยรหัสนี้",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "การยืนยันตัวตน",
            title: "ยืนยันหมายเลขโทรศัพท์มือถือของคุณ",
            subtitle: `เราได้ส่งรหัสยืนยันไปยังหมายเลขที่คุณลงทะเบียนไว้ใน ${country}`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "ยืนยันและดำเนินการต่อ",
            subNote: "ไม่ได้รับรหัส?\nส่งรหัสใหม่อีกครั้งใน 00:45",
          },
        },
        {
          id: "banking",
          name: "การธนาคารและการเงิน",
          tagline: "ปลอดภัย. เชื่อมต่อ. น่าเชื่อถือ.",
          title: `บริการด้านการธนาคารและการเงิน (${country})`,
          description: `การสื่อสารทางการเงินที่มีความปลอดภัยสูง พร้อมการแจ้งเตือนธุรกรรม ยอดเงินคงเหลือ และการยืนยันการโอนเงินแบบเรียลไทม์ใน ${country}`,
          features: [
            "ท่อส่งข้อมูลความปลอดภัยระดับมาตรฐานสถาบันการเงิน",
            "การแจ้งเตือนยอดเงินเข้า-ออกและรายการธุรกรรมแบบเรียลไทม์",
            "รองรับการส่งข้อความ SMS ธุรกรรมปริมาณมหาศาล",
          ],
          customerStatus: "ทำรายการสำเร็จ",
          notification: {
            header: "การแจ้งเตือนธุรกรรมธนาคาร",
            body: `การชำระเงินจำนวน ${currency}250.00 ของคุณเสร็จสมบูรณ์แล้ว`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "บริการธนาคาร",
            title: "ชำระเงินสำเร็จ",
            subtitle: `ยอดเงิน ${currency}250.00 ดำเนินการในบัญชีของคุณอย่างปลอดภัย`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "เสร็จสมบูรณ์",
              reference: "TXN-849201",
            },
            buttonText: "ดูสลิปรายการ",
            subNote: "✓ ส่งผ่านช่องทางเครือข่ายความปลอดภัยระดับธนาคาร",
          },
        },
        {
          id: "marketing",
          name: "การตลาด",
          tagline: "เข้าถึง. สร้างการมีส่วนร่วม. สร้างยอดขาย.",
          title: `การสื่อสารและการตลาด (${country})`,
          description: `เข้าถึงผู้บริโภคด้วยแคมเปญข้อความตรงเป้าหมาย มอบโปรโมชันพิเศษ ส่วนลดตามฤดูกาล และข่าวสารแบรนด์ในวงกว้างใน ${country}`,
          features: [
            "ส่งข้อความ SMS โปรโมชันปริมาณมากด้วยอัตราการเปิดอ่านสูง",
            "การแบ่งกลุ่มเป้าหมายและการตั้งเวลาส่งข้อความอัจฉริยะ",
            "การติดตามการคลิกลิงก์และวิเคราะห์อัตราการแปลงผลแบบเรียลไทม์",
          ],
          customerStatus: "ส่งข้อเสนอแล้ว",
          notification: {
            header: "ข้อเสนอสุดพิเศษ",
            line1: "รับส่วนลดพิเศษ 30%",
            line2: `สิทธิพิเศษสำหรับผู้ใช้บริการทั่วประเทศ (${country})`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "โปรโมชันพิเศษ",
            badge: "เวลาจำกัด",
            title: "ส่วนลดสุดพิเศษเฉพาะคุณเท่านั้น",
            subtitle: `รับส่วนลด 30% สำหรับการสั่งซื้อครั้งต่อไป\nข้อเสนอนี้ใช้ได้ถึงสิ้นเดือนนี้เท่านั้น`,
            buttonText: "รับสิทธิ์ส่วนลด",
            subNote: `✓ ส่งถึงสมาชิกที่ได้รับการยืนยันใน ${country}`,
          },
        },
        {
          id: "reminders",
          name: "การแจ้งเตือน",
          tagline: "ตรงเวลา. แม่นยำ. อัตโนมัติ.",
          title: `การแจ้งเตือนลูกค้าอัตโนมัติ (${country})`,
          description: `แจ้งเตือนลูกค้าล่วงหน้าสำหรับนัดหมาย วันครบกำหนดชำระบิล การต่ออายุสมาชิก และกิจกรรมที่กำหนดไว้ใน ${country}`,
          features: [
            "ระบบแจ้งเตือนตามกำหนดการหลายช่องทางแบบอัตโนมัติ",
            "แนบลิงก์ชำระเงินด่วนได้โดยตรงในเนื้อหาข้อความ",
            "ลดปัญหาการพลาดนัดหมายและการชำระเงินล่าช้าอย่างมีประสิทธิภาพ",
          ],
          customerStatus: "ส่งการแจ้งเตือนแล้ว",
          notification: {
            header: "แจ้งเตือนการนัดหมาย",
            line1: "มีนัดหมายในวันพรุ่งนี้",
            line2: "กรุณาเดินทางมาถึงก่อนเวลานัดหมาย 10 นาที",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "การแจ้งเตือน",
            title: "คุณมีนัดหมายในวันพรุ่งนี้",
            subtitle: "การนัดหมายของคุณได้รับการยืนยันเวลา 10:30 น.",
            infoCard: {
              label: "สถานที่ / สาขา",
              value: `ศูนย์บริการหลักใน ${country}`,
            },
            buttonText: "ยืนยันการเข้ารับบริการ",
            subNote: "ตอบ 1 เพื่อยืนยัน หรือ 2 เพื่อเปลี่ยนเวลานัดหมาย",
          },
        },
        {
          id: "emergency",
          name: "แจ้งเตือนเหตุฉุกเฉิน",
          tagline: "วิกฤต. รวดเร็ว. เชื่อมต่อเสมอ.",
          title: `การแจ้งเตือนฉุกเฉินและความปลอดภัยสาธารณะ (${country})`,
          description: `ส่งการแจ้งเตือนฉุกเฉินที่มีความสำคัญสูงสุดทันทีเมื่อทุกวินาทีมีค่า เพื่อความปลอดภัยของประชาชนและความต่อเนื่องทางธุรกิจใน ${country}`,
          features: [
            "เส้นทางความสำคัญสูงสุดโดยไม่ผ่านคิวส่งข้อความปกติ",
            "การกำหนดเป้าหมายตามพื้นที่ภูมิศาสตร์สำหรับการแจ้งเตือนประชาชน",
            "ระบบสลับไปส่งสัญญาณเสียงอัตโนมัติหากไม่สามารถส่ง SMS ได้",
          ],
          customerStatus: "ส่งสัญญาณแจ้งเตือนแล้ว",
          notification: {
            header: "ประกาศความปลอดภัยสาธารณะ",
            line1: "แจ้งเตือนสภาพอากาศรุนแรง",
            line2: "โปรดปฏิบัติตามคำแนะนำของเจ้าหน้าที่อย่างเคร่งครัด",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "สัญญาณเตือนภัยฉุกเฉิน",
            title: "แจ้งเตือนสภาพอากาศรุนแรง",
            subtitle: "มีรายงานสภาพอากาศแปรปรวนในพื้นที่ โปรดอยู่ในที่ปลอดภัยและติดตามประกาศอย่างใกล้ชิด",
            infoCard: {
              label: "พื้นที่ที่ได้รับผลกระทบ",
              value: country,
            },
            buttonText: "ดูพื้นที่ปลอดภัย",
            subNote: "การแจ้งเตือนความปลอดภัยสาธารณะอย่างเป็นทางการ",
          },
        },
        {
          id: "order",
          name: "สถานะคำสั่งซื้อ",
          tagline: "แจ้งเตือน. ติดตาม. ส่งมอบ.",
          title: `ติดตามสถานะคำสั่งซื้อและการจัดส่งแบบเรียลไทม์ (${country})`,
          description: `แจ้งสถานะให้ผู้ซื้อทราบตลอดการจัดส่ง ตั้งแต่เริ่มส่งออกจากคลัง ติดตามพิกัดผู้จัดส่งสด และยืนยันการรับพัสดุด้วยรหัส OTP ใน ${country}`,
          features: [
            "อัปเดตสถานะการบรรจุและการจัดส่งพัสดุแบบเรียลไทม์",
            "แจ้งเตือนพนักงานจัดส่งใกล้ถึงพร้อมลิงก์แผนที่สด",
            "รหัส OTP เพื่อยืนยันการรับมอบพัสดุอย่างปลอดภัย",
          ],
          customerStatus: "กำลังนำจ่ายพัสดุ",
          notification: {
            header: "อัปเดตสถานะคำสั่งซื้อ",
            line1: "คำสั่งซื้อ #IN849201 กำลังจัดส่ง",
            line2: `พัสดุของคุณจะถูกส่งถึงปลายทางใน ${country} วันนี้`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "ติดตามพัสดุ",
            title: "พัสดุของคุณอยู่ระหว่างการจัดส่ง",
            subtitle: "พนักงานส่งพัสดุกำลังเดินทางนำพัสดุไปส่งยังที่อยู่ของคุณ",
            infoCard: {
              label: "รหัส OTP รับพัสดุ",
              value: "8492",
            },
            buttonText: "ติดตามบนแผนที่",
            subNote: "รองรับการจัดส่งแบบไร้การสัมผัส",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "ความเชี่ยวชาญตามกลุ่มอุตสาหกรรม" : `ความเชี่ยวชาญในอุตสาหกรรม - ${country.toUpperCase()}`,
      titleLine1: "โซลูชันการสื่อสารโทรคมนาคมที่พัฒนาขึ้น",
      titleLine2: isGlobal ? "สำหรับทุกกลุ่มอุตสาหกรรม" : `สำหรับองค์กรธุรกิจใน ${country}`,
      description: isGlobal
        ? "เชื่อมต่อและสร้างความผูกพันกับลูกค้าผ่านบริการเสียง ข้อความ และช่องทางดิจิทัลแบบครบวงจรที่มีเสถียรภาพสูงสุด"
        : `โครงสร้างพื้นฐานที่สอดคล้องกับข้อกำหนดโทรคมนาคม มาตรฐานความปลอดภัย และพฤติกรรมของผู้บริโภคใน ${country}`,
      industries: [
        {
          id: "banking",
          name: "การธนาคารและการเงิน",
          title: `การธนาคารและฟินเทคใน ${country}`,
          description: `SMS ธุรกรรมความปลอดภัยสูง การปฏิบัติตามกฎระเบียบทางการเงิน และการตรวจสอบสิทธิ์แบบเรียลไทม์ใน ${country}`,
        },
        {
          id: "healthcare",
          name: "การแพทย์และการดูแลสุขภาพ",
          title: `โรงพยาบาลและคลินิกใน ${country}`,
          description: `การแจ้งเตือนนัดหมายแพทย์ ผลการตรวจทางห้องปฏิบัติการ และการสื่อสารการแพทย์ทางไกลใน ${country}`,
        },
        {
          id: "ecommerce",
          name: "อีคอมเมิร์ซและการค้าปลีก",
          title: `อีคอมเมิร์ซและค้าปลีกใน ${country}`,
          description: `การติดตามสถานะคำสั่งซื้อ ข้อความแฟลชเซลล์ และบริการสนับสนุนลูกค้าแบบหลายช่องทางใน ${country}`,
        },
        {
          id: "education",
          name: "การศึกษาและมหาวิทยาลัย",
          title: `สถาบันการศึกษาและมหาวิทยาลัยใน ${country}`,
          description: `ประกาศรับสมัคร ข่าวสารฉุกเฉินในรั้วมหาวิทยาลัย และการติดต่อสื่อสารกับผู้ปกครองใน ${country}`,
        },
        {
          id: "travel",
          name: "การท่องเที่ยวและการโรงแรม",
          title: `สายการบินและการโรงแรมใน ${country}`,
          description: `แจ้งเตือนการเปลี่ยนประตูขึ้นเครื่อง ยืนยันการจองห้องพัก และการดูแลผู้เดินทางตลอด 24 ชั่วโมงใน ${country}`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "ติดต่อเรา" : `ติดต่อทีมงานของเราใน ${country.toUpperCase()}`,
      titleLine1: "มาร่วมสร้างการเชื่อมต่อ",
      titleLine2: isGlobal ? "การสื่อสารที่ตอบโจทย์ธุรกิจ." : `ด้านโทรคมนาคมที่เหมาะสมใน ${country}.`,
      description: isGlobal
        ? "ด้วยบริการจาก iNet Global Services องค์กรสามารถนำโซลูชัน SMS และเสียงระดับมืออาชีพไปใช้เพื่อเพิ่มการมีส่วนร่วมของลูกค้า เสริมสร้างความปลอดภัย และปรับกระบวนการทำงานให้คล่องตัว เรามอบความเร็ว ความน่าเชื่อถือ และประสิทธิภาพสูงสุด"
        : `ร่วมเป็นพันธมิตรกับ iNet Global เพื่อเข้าถึงเส้นทาง SMS ตรงจากโอเปอเรเตอร์ เสียงสนทนาคมชัดระดับ HD และการปฏิบัติตามกฎเกณฑ์ใน ${country} ติดต่อทีมงานฝ่ายขายองค์กรของเราเพื่อรับการทดสอบระบบและข้อเสนอราคาพิเศษ`,
    },
    footer: {
      description: isGlobal
        ? "โครงสร้างพื้นฐานการสื่อสารระดับโลกสำหรับองค์กรที่ต้องการความเสถียรสูงสุดในบริการเสียง ข้อความ และการเชื่อมต่อแบบออมนิแชนแนล"
        : `โครงสร้างพื้นฐานระดับองค์กรที่ให้บริการเสียง, SMS, เบอร์เสมือน DID และ API ออมนิแชนแนลใน ${country} และทั่วโลก`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "สหรัฐอเมริกา" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). สงวนลิขสิทธิ์ทั้งหมด.`,
    },
  }),

  // 11. Tagalog / Filipino (tl)
  tl: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "PANDAIGDIGANG IMPRASTRAKTURA SA KOMUNIKASYON"
        : `TELECOM INFRASTRUCTURE SA ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Pandaigdigang Komunikasyon," : `Pinakamahusay na SMS at Voice`,
      titleLine2: isGlobal ? "Binuo Para sa" : `Trapiko sa ${country},`,
      titleLine3: isGlobal ? "Makabagong Negosyo." : `Handa Para sa Malalaking Negosyo.`,
      description: isGlobal
        ? "Maaasahang voice, business messaging, at virtual numbers para sa mga kumpanyang kailangang manatiling konektado sa mga bansa, koponan, at bawat customer."
        : `Pinapalakas ang mga negosyo sa ${country} gamit ang high-volume SMS routes, ultra-low latency voice termination, at direktang koneksyon sa mga lokal na telecom operator.`,
      primaryCta: isGlobal ? "Magsimula Na" : `Magsimula sa ${country}`,
      secondaryCta: isGlobal ? "Tingnan ang Serbisyo" : `Mga Ruta sa ${country}`,
      timeline: {
        voice: isGlobal ? "Pangnegosyong Boses" : `Voice Traffic (CLI) sa ${country}`,
        messaging: isGlobal ? "SMS at Pagmemensahe" : `Mga Ruta ng SMS & OTP sa ${country}`,
        numbers: isGlobal ? "Mga Virtual Number" : `Mga Virtual DID Number sa ${country}`,
        footerNote1: isGlobal ? "Isang plataporma" : "Direktang Ruta ng Carrier",
        footerNote2: isGlobal ? "Pandaigdigang abot" : "100% Sumusunod sa Regulasyon",
      },
    },
    coreServices: {
      badge: isGlobal ? "PANGUNAHING SERBISYO" : `MGA SERBISYO AT KONEKSYON SA ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Mga solusyon sa komunikasyon para sa" : `Pinakamahusay na Voice at SMS sa ${country}`,
      titleLine2: isGlobal ? "bawat hakbang ng customer" : "Para sa Lumalagong Negosyo",
      description: isGlobal
        ? "Modular na telecom infrastructure na idinisenyo para sa mataas na availability sa boses, pagmemensahe, at mga virtual number sa buong mundo."
        : `Carrier-grade telecom infrastructure sa ${country} na may 99.99% uptime, sub-2s OTP delivery, at direktang interconnects sa mga lokal na network.`,
      services: [
        {
          title: isGlobal ? "Mga Serbisyong Boses" : `SIP Trunking at Boses sa ${country}`,
          description: isGlobal
            ? "Pandaigdigang SIP trunking na may nababagong routing, de-kalidad na audio, lokal na CLI coverage, at abot-kayang termination rates."
            : `Mataas na concurrency ng tawag sa ${country} na may garantisadong CLI, premium routes, at direktang koneksyon sa mga lokal na telco.`,
          features: [
            isGlobal ? "Mataas na kalidad ng HD voice connections" : "Garantisadong Tunay na CLI Route",
            isGlobal ? "Flexible na mga opsyon sa routing" : "Direktang Koneksyon sa mga Telco",
            isGlobal ? "Pandaigdigang redundant coverage" : `Pambansang Virtual DID Numbers sa buong ${country}`,
          ],
        },
        {
          title: isGlobal ? "Pagmemensahe ng SMS" : `Pinakamahusay na SMS sa ${country}`,
          description: isGlobal
            ? "Magpadala ng mga transactional SMS, OTP code, at rich business messages nang direkta sa mga cellphone sa buong mundo na may mataas na delivery rate."
            : `Mabilis na transactional SMS, verification codes sa loob ng 2 segundo, at compliant bulk messaging sa lahat ng network sa ${country}.`,
          features: [
            isGlobal ? "Sub-second na pagpapadala ng OTP" : `Opisyal na Pagpaparehistro ng Sender ID sa ${country}`,
            isGlobal ? "Mataas na kasiguruhan sa paghahatid" : "Garantisadong Sub-2s OTP Delivery",
            isGlobal ? "Rich media messaging gamit ang RCS" : "Dynamic Failover at Proteksyon sa Rutang Pang-emergency",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `Omnichannel at WhatsApp API sa ${country}`,
          description: isGlobal
            ? "Pagsamahin ang Boses, SMS, WhatsApp, at Verification sa isang developer-friendly REST API suite na madaling i-deploy."
            : `Opisyal na WhatsApp Business API, RCS interactive messaging, at mga pinag-isang channel na iniangkop para sa mga customer sa ${country}.`,
          features: [
            isGlobal ? "Opisyal na WhatsApp Business API" : "Opisyal na WhatsApp Business API",
            isGlobal ? "RCS interactive na pag-uusap" : "Beripikadong Profile ng Brand sa RCS",
            isGlobal ? "Pinag-isang REST API suite" : "Kumpletong Multi-Channel REST APIs",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "MGA SOLUSYON SA NEGOSYO" : `MGA SOLUSYON PANGNEGOSYO SA ${country.toUpperCase()}`,
      title: isGlobal ? "Mga Solusyon Para sa Bawat Yugto ng Customer" : `Mga Solusyong Binuo Para sa ${country}`,
      description: isGlobal
        ? "Kumonekta, makipag-ugnayan, at maghatid ng maaasahang serbisyo sa pamamagitan ng voice, SMS, at omnichannel solutions."
        : `Mataas na kalidad ng komunikasyon na binuo para sa mga enterprise, fintech, at lumalagong kumpanya sa ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Pagpapatunay ng OTP",
          tagline: "Ligtas. Mabilis. Maaasahan.",
          title: `Mabilisang OTP Verification (${country})`,
          description: `Magpadala ng one-time passwords nang mabilis at ligtas para sa pagpaparehistro, pag-login, pagbawi ng account, at pagpapatunay ng bayad sa ${country}.`,
          features: [
            "Mabilis at maaasahang paghahatid ng OTP sa loob ng 2 segundo",
            "Awtomatikong proteksyon sa failover sa pagitan ng mga network",
            `Na-optimize na mga ruta sa lahat ng telco sa ${country}`,
          ],
          customerStatus: "Kumpirmadong Pagkakakilanlan",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Ang iyong verification code ay",
            bodyBold: "53193",
            validTime: "Wasto sa loob ng 5 minuto. Huwag ibahagi kahit kanino.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Pagpapatunay",
            title: "I-verify ang iyong Mobile Number",
            subtitle: `Nagpadala kami ng verification code sa iyong nakarehistrong numero sa ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "I-verify at Magpatuloy",
            subNote: "Hindi natanggap ang code?\nIpadala muli sa 00:45",
          },
        },
        {
          id: "banking",
          name: "Bangko at Pinansyal",
          tagline: "Protektado. Konektado. Maaasahan.",
          title: `Mga Serbisyong Pampinansyal at Bangko (${country})`,
          description: `Ligtas na komunikasyon sa bangko gamit ang real-time transactional alerts, balance updates, at kumpirmasyon ng bayad sa ${country}.`,
          features: [
            "Naka-encrypt na banking-grade security pipelines",
            "Mabilisang abiso sa debit/credit at paglilipat ng pondo",
            "Mataas na kapasidad para sa transactional SMS",
          ],
          customerStatus: "Matagumpay na Transaksyon",
          notification: {
            header: "Abiso sa Transaksyon sa Bangko",
            body: `Ang iyong bayad na ${currency}250.00 ay matagumpay na naproseso.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Pagbabangko",
            title: "Matagumpay ang Pagbabayad",
            subtitle: `Ang ${currency}250.00 ay ligtas na naproseso sa iyong account.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Nakumpleto",
              reference: "TXN-849201",
            },
            buttonText: "Tingnan ang Resibo",
            subNote: "✓ Ipinadala sa pamamagitan ng secure carrier pipeline",
          },
        },
        {
          id: "marketing",
          name: "Pang-market",
          tagline: "Abot. Hikayat. Benta.",
          title: `Komunikasyon sa Marketing at Promosyon (${country})`,
          description: `Abutin ang mga mamimili gamit ang mga target na mensahe ng promo, diskwento, at anunsyo ng brand sa buong ${country}.`,
          features: [
            "Bultuhang promotional SMS na may mataas na open rate",
            "Pagtukoy sa tamang audience at matalinong iskedyul",
            "Real-time click tracking at pagsusuri sa conversion",
          ],
          customerStatus: "Naihatid ang Alok",
          notification: {
            header: "Eksklusibong Alok",
            line1: "ESPESYAL NA 30% DISKWENTO",
            line2: `Mga eksklusibong deal na available sa buong ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Espesyal na Promosyon",
            badge: "Limitadong Oras",
            title: "Eksklusibong Diskwento Para sa Iyo",
            subtitle: `Tangkilikin ang 30% bawas sa iyong susunod na transaksyon.\nMay bisa hanggang katapusan ng buwan.`,
            buttonText: "Kunin ang Diskwento",
            subNote: `✓ Ipinadala sa mga rehistradong subscriber sa ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Mga Paalala",
          tagline: "Napapanahon. Tumpak. Awtomatiko.",
          title: `Awtomatikong Paalala sa mga Kliyente (${country})`,
          description: `Panatilihing may alam ang mga customer gamit ang mga awtomatikong paalala para sa appointment, bayarin, at mga kaganapan sa ${country}.`,
          features: [
            "Awtomatikong abiso sa iskedyul gamit ang iba't ibang channel",
            "Direktang link ng bayad na nakapaloob sa mensahe",
            "Mabawasan ang mga hindi pagsipot at naantalang bayarin",
          ],
          customerStatus: "Naihatid ang Paalala",
          notification: {
            header: "Paalala sa Iskedyul",
            line1: "Nakatakda Para Bukas",
            line2: "Mangyaring dumating nang 10 minuto bago ang iyong oras.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Mga Paalala",
            title: "May Nakatakdang Appointment Bukas",
            subtitle: "Ang iyong session ay kumpirmado para sa 10:30 AM.",
            infoCard: {
              label: "Lokasyon / Sangay",
              value: `Sentral na Tanggapan ng ${country}`,
            },
            buttonText: "Kumpirmahin ang Pagdalo",
            subNote: "Sumagot ng 1 para kumpirmahin o 2 para i-reschedule",
          },
        },
        {
          id: "emergency",
          name: "Abisong Pang-emergency",
          tagline: "Kritikal. Mabilis. Palaging Konektado.",
          title: `Mga Alerto sa Kaligtasan at Emergency (${country})`,
          description: `Maghatid ng mga agarang abiso kapag bawat segundo ay mahalaga upang mapanatili ang kaligtasan ng publiko at negosyo sa ${country}.`,
          features: [
            "Mataas na priyoridad na ruta na lumalagpas sa karaniwang pila",
            "Targeting ayon sa heograpiya para sa malawakang babala sa publiko",
            "Awtomatikong paglipat sa voice calls kung hindi maihatid ang SMS",
          ],
          customerStatus: "Naihatid ang Babala",
          notification: {
            header: "Babala sa Pampublikong Kaligtasan",
            line1: "Agarang Babala sa Panahon",
            line2: "Sundin ang mga tagubilin ng mga lokal na awtoridad.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Alerto sa Emergency",
            title: "Agarang Babala sa Panahon",
            subtitle: "May naiulat na masamang panahon sa iyong lugar. Manatili sa loob at subaybayan ang mga opisyal na ulat.",
            infoCard: {
              label: "Apektadong Rehiyon",
              value: country,
            },
            buttonText: "Tingnan ang Ligtas na Lugar",
            subNote: "Opisyal na pampublikong babala sa kaligtasan",
          },
        },
        {
          id: "order",
          name: "Status ng Order",
          tagline: "Ipaalam. Subaybayan. Ihatid.",
          title: `Real-time na Pagsubaybay sa Order at Delivery (${country})`,
          description: `I-update ang mga mamimili sa bawat hakbang ng delivery: mula sa pagpapadala, live na lokasyon ng rider, hanggang sa OTP sa pagtanggap sa ${country}.`,
          features: [
            "Real-time na mga update sa paghahanda at pagpapadala ng package",
            "Abiso sa pagdating ng courier na may live map link",
            "Secure na delivery OTP para sa maayos na pagtanggap",
          ],
          customerStatus: "Papadala Na",
          notification: {
            header: "Update sa Status ng Order",
            line1: "Order #IN849201 ay Ipinadala Na",
            line2: `Darating ang iyong package ngayon sa ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Pagsubaybay sa Order",
            title: "Paparating Na ang Iyong Order",
            subtitle: "Kasalukuyang papunta na ang courier dala ang iyong package.",
            infoCard: {
              label: "Delivery OTP Code",
              value: "8492",
            },
            buttonText: "Sundan sa Mapa",
            subNote: "Naka-enable ang contactless delivery",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "DALUBHASA SA INDUSTRIYA" : `DALUBHASA SA INDUSTRIYA - ${country.toUpperCase()}`,
      titleLine1: "Mga Solusyon sa Komunikasyon na Binuo",
      titleLine2: isGlobal ? "Para sa Bawat Industriya" : `Para sa mga Negosyo sa ${country}`,
      description: isGlobal
        ? "Bumuo ng pangmatagalang ugnayan sa mga customer sa pamamagitan ng de-kalidad na boses, mensahe, at mga pinag-isang digital channel."
        : `Impraestruktura na sumusunod sa mga lokal na batas, pamantayan sa proteksyon ng data, at gawi ng mamimili sa ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Bangko at Pinansyal",
          title: `Bangko at Fintech sa ${country}`,
          description: `Ligtas na transactional SMS, mahigpit na pagsunod sa regulasyon, at agarang pagpapatunay ng bayad sa ${country}.`,
        },
        {
          id: "healthcare",
          name: "Kalusugan at Klinika",
          title: `Mga Ospital at Klinika sa ${country}`,
          description: `Paalala sa pagpapatingin, resulta ng laboratoryo, at telemedicine communication sa buong ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce at Retail",
          title: `E-Commerce at Retail sa ${country}`,
          description: `Pagsubaybay sa padala, flash sale promos, at multi-channel customer service sa ${country}.`,
        },
        {
          id: "education",
          name: "Edukasyon at Unibersidad",
          title: `Mga Paaralan at Unibersidad sa ${country}`,
          description: `Mga anunsyo sa admission, emergency alerts sa campus, at ugnayan sa mga magulang sa ${country}.`,
        },
        {
          id: "travel",
          name: "Turismo at Pagtanggap",
          title: `Aviation at Turismo sa ${country}`,
          description: `Mga pagbabago sa boarding gate, kumpirmasyon sa hotel, at 24/7 suporta sa mga biyahero sa ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "MAKIPAG-UGNAYAN SA AMIN" : `MAKIPAG-UGNAYAN SA ${country.toUpperCase()}`,
      titleLine1: "Bumuo Tayo ng Tamang",
      titleLine2: isGlobal ? "Koneksyon sa Komunikasyon." : `Koneksyon sa Telecom sa ${country}.`,
      description: isGlobal
        ? "Sa iNet Global Services, maaaring gamitin ng mga negosyo ang maaasahang SMS at voice solutions upang mapabuti ang pakikipag-ugnayan sa customer, palakasin ang seguridad, at pabilisin ang mga operasyon. Naghahatid kami ng bilis, tibay, at mataas na performance."
        : `Makipagtulungan sa iNet Global para sa direktang carrier SMS routes, malinaw na boses, at buong pagsunod sa batas sa ${country}. Kumontak sa aming enterprise team para sa libreng testing at presyo.`,
    },
    footer: {
      description: isGlobal
        ? "Pandaigdigang impraestruktura sa komunikasyon para sa mga negosyong nangangailangan ng maaasahang voice, messaging, at omnichannel connectivity."
        : `Enterprise-grade communications infrastructure na nagbibigay ng Voice, SMS, Virtual DID Numbers, at Omnichannel APIs sa ${country} at sa buong mundo.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Estados Unidos" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Nakalaan ang lahat ng karapatan.`,
    },
  }),
};

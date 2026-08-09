export interface Project {
  id: string;
  title: string;
  category: 'SMM & BRAND IDENTITY' | 'NEURO-CINEMATIC' | 'E-COMMERCE & PRINT' | 'VIBE-CODING & FAST WEB' | 'AI ARCHITECTURE & AGENTS';
  subtitle?: string;
  description: string;
  strategy?: string;
  result?: string;
  tags: string[];
  imagePlaceholderRatio: string;
  featured?: boolean;
}

export interface PortfolioData {
  author: {
    name: string;
    role: string;
    tagline: string;
    manifesto: string;
    metrics: { label: string; value: string }[];
  };
  contacts: {
    telegram: string;
    whatsapp: string;
    email: string;
    behance: string;
    github: string;
    linkedin: string;
  };
  process: string[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  author: {
    name: "CHERNIKOV // CREATIVE DIRECTION & AI ENGINEERING",
    role: "Direction KA Engineering / AI-Creator / Design",
    tagline: "Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, бренд-вес и кастомных ИИ-ассистентов, сокращая Time-to-Market в 3–5 раз без потери качества.",
    manifesto: "Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, бренд-вес и кастомных ИИ-ассистентов, сокращая Time-to-Market в 3–5 раз без потери качества.",
    metrics: [
      { label: "Time-to-Market", value: "3-5x Faster" },
      { label: "Web Launch", value: "7 Days" },
      { label: "Design Consistency", value: "100%" }
    ]
  },
  contacts: {
    telegram: "[INSERT_TELEGRAM_LINK]",
    whatsapp: "[INSERT_WHATSAPP_LINK]",
    email: "[INSERT_EMAIL]",
    behance: "[INSERT_BEHANCE_LINK]",
    github: "[INSERT_GITHUB_LINK]",
    linkedin: "[INSERT_LINKEDIN_LINK]"
  },
  process: [
    "Discovery",
    "Rapid Vibe-Coding",
    "Deployment"
  ],
  projects: [
    {
      id: "eidos-massage",
      title: "EIDOS MASSAGE STUDIO",
      category: "SMM & BRAND IDENTITY",
      subtitle: "От комнаты к своему пространству",
      description: "Построение единого визуального языка от контента в соцсетях до печатных носителей. Чистая эстетика, типографика, фокус на профессиональной реабилитации.",
      result: "100% единый стиль во всех точках касания (SMM, печать). Рост вовлеченности и формирование образа премиального пространства.",
      tags: ["SMM", "Brand Identity", "Print"],
      imagePlaceholderRatio: "16/9",
      featured: true
    },
    {
      id: "makeup-leanca",
      title: "MAKE-UP ARTIST LEANCA",
      category: "SMM & BRAND IDENTITY",
      subtitle: "Упаковка портфолио для Beauty & FX индустрии",
      description: "Создание детализированных слайдов-каруселей для соцсетей гримера. Включает работы 'Горный эльф' и 'Дипломная в киногриме'.",
      tags: ["FX Makeup", "Carousel Design", "SMM"],
      imagePlaceholderRatio: "4/5"
    },
    {
      id: "cinematic-production",
      title: "CINEMATIC PRODUCTION",
      category: "NEURO-CINEMATIC",
      subtitle: "Брендинг и генеративный продакшен без миллионных бюджетов",
      description: "Создание глубоких цифровых сред с помощью сложного промпт-инжиниринга. Генерация фотореалистичных сцен (макро, студийный свет, природные локации), заменяющих традиционные фотосессии.",
      tags: ["Prompt Engineering", "AI Generation", "Product Visuals"],
      imagePlaceholderRatio: "16/9",
      featured: true
    },
    {
      id: "ecommerce-cases",
      title: "E-COMMERCE CASES",
      category: "E-COMMERCE & PRINT",
      description: "Сдержанные цифровые среды и карточки товаров для e-commerce в условиях визуального шума маркетплейсов.",
      tags: ["E-Commerce", "Marketplaces", "UI"],
      imagePlaceholderRatio: "1/1"
    },
    {
      id: "poster-design",
      title: "POSTER DESIGN",
      category: "E-COMMERCE & PRINT",
      description: "Серия графических постеров с акцентом на выразительную типографику и композицию.",
      tags: ["Poster Art", "Typography", "Print"],
      imagePlaceholderRatio: "3/4"
    },
    {
      id: "longread-psychology",
      title: "ЛОНГРИД ПО ПСИХОЛОГИИ",
      category: "E-COMMERCE & PRINT",
      description: "Продуманный редакционный дизайн лонгрида с высокой читаемостью и структурированной подачей материала.",
      tags: ["Editorial", "Longread", "Layout"],
      imagePlaceholderRatio: "16/9"
    },
    {
      id: "academic-presentation",
      title: "АКАДЕМИЧЕСКАЯ ПРЕЗЕНТАЦИЯ",
      category: "E-COMMERCE & PRINT",
      description: "Премиальная верстка и визуализация сложных тезисов для академического выступления.",
      tags: ["Presentation", "Infographics"],
      imagePlaceholderRatio: "16/9"
    },
    {
      id: "apartment-inspection",
      title: "ПРИЕМКА КВАРТИРЫ",
      category: "E-COMMERCE & PRINT",
      description: "Коммерческая презентация и маркетинговые материалы для сервиса приемки недвижимости.",
      tags: ["Commercial Presentation", "Branding"],
      imagePlaceholderRatio: "16/9"
    },
    {
      id: "eidos-studio-web",
      title: "EIDOS-STUDIO.RU",
      category: "VIBE-CODING & FAST WEB",
      subtitle: "Запуск сайта под ключ за 7 дней",
      description: "Сочетание профессиональных знаний дизайн-систем и быстрой ИИ-разработки. Полное создание UI/UX, верстка и деплой функционального сайта за неделю.",
      result: "Альтернатива раздутым веб-студиям с циклом в 1.5-2 месяца. Чистый код, адаптив, моментальная загрузка.",
      tags: ["Vibe-Coding", "Next.js", "UI/UX", "7-Day Launch"],
      imagePlaceholderRatio: "16/9",
      featured: true
    },
    {
      id: "kai-intelligence",
      title: "K.A.I. INTELLIGENCE",
      category: "AI ARCHITECTURE & AGENTS",
      subtitle: "Автономный ИИ-ассистент для массажной студии",
      description: "Интегрированный умный ассистент на базе Llama 3.3 / Python / Google Apps Script. Квалифицирует посетителей, отвечает на вопросы, снимает страхи и конвертирует в запись.",
      result: "Снял нагрузку с администраторов во время первичных консультаций и повысил конверсию в запись.",
      tags: ["Llama 3.3", "Python", "Google Apps Script", "AI Agent"],
      imagePlaceholderRatio: "16/9",
      featured: true
    }
  ]
};

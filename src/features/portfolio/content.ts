import type { SupportedLocale } from '@/lib/preferences'

export interface NavSection {
  id: string
  label: string
}

export interface ProjectItem {
  title: string
  summary: string
  outcome: string
  stack: string[]
}

export interface HighlightItem {
  title: string
  description: string
}

export interface PortfolioCopy {
  meta: {
    title: string
    description: string
    skipToContent: string
  }
  controls: {
    languageLabel: string
    languageToggleLabel: string
    themeLabel: string
    themeToggleLabel: string
    pdfLabel: string
    pdfDescription: string
    pdfDownloadLabel: string
    pdfDownloadDescription: string
    englishShort: string
    spanishShort: string
    darkLabel: string
    lightLabel: string
  }
  navSections: NavSection[]
  hero: {
    eyebrow: string
    title: string
    highlight: string
    description: string
    primaryCta: string
    secondaryCta: string
    mobilePrimaryCta: string
    mobileSecondaryCta: string
    mobileCardTitle: string
    mobileCardDescription: string
    statOneLabel: string
    statOneValue: string
    statOneDescription: string
    statTwoLabel: string
    statTwoValue: string
    statTwoDescription: string
  }
  devicePill: {
    mobile: string
    desktop: string
  }
  about: {
    eyebrow: string
    title: string
    lead: string
    highlights: HighlightItem[]
  }
  projects: {
    eyebrow: string
    title: string
    lead: string
    items: ProjectItem[]
  }
  stack: {
    eyebrow: string
    title: string
    lead: string
    notes: HighlightItem[]
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    panelEyebrow: string
    panelTitle: string
    panelDescription: string
    emailLabel: string
    githubLabel: string
    linkedinLabel: string
  }
  pdf: {
    routeTitle: string
    routeLead: string
    printAction: string
    backToSite: string
    helper: string
  }
}

const portfolioContent: Record<SupportedLocale, PortfolioCopy> = {
  en: {
    meta: {
      title: 'Dario Rodríguez | Functional Analyst & IT Technician',
      description:
        "Portfolio of Dario Rodríguez, functional analyst and IT technician. Projects, technical growth, product thinking, and a practical view of how I build useful systems.",
      skipToContent: 'Skip to content'
    },
    controls: {
      languageLabel: 'Language',
      languageToggleLabel: 'Switch site language',
      themeLabel: 'Theme',
      themeToggleLabel: 'Switch between dark and light mode',
      pdfLabel: 'Print PDF',
      pdfDescription: 'Open printable portfolio view',
      pdfDownloadLabel: 'Download PDF',
      pdfDownloadDescription: 'Download rendered PDF file',
      englishShort: 'EN',
      spanishShort: 'ES',
      darkLabel: 'Dark',
      lightLabel: 'Light'
    },
    navSections: [
      { id: 'intro', label: 'Intro' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'stack', label: 'Focus' },
      { id: 'contact', label: 'Contact' }
    ],
    hero: {
      eyebrow: 'Personal archive',
      title: 'Functional analysis, IT execution, and product-minded building.',
      highlight: 'A compact portfolio shaped from real projects, learning rhythm, and hands-on technical growth.',
      description:
        "I'm Dario Rodríguez, a functional analyst and IT technician from Buenos Aires. I enjoy solving problems, documenting clearly, learning fast, and building practical products that feel understandable for both users and teams.",
      primaryCta: 'View projects',
      secondaryCta: 'Current focus',
      mobilePrimaryCta: 'View projects',
      mobileSecondaryCta: 'Contact',
      mobileCardTitle: 'What this portfolio represents',
      mobileCardDescription:
        'A concise version of a much bigger personal archive: background, work rhythm, key projects, aspirations, and ways of working.',
      statOneLabel: 'Base',
      statOneValue: 'Buenos Aires',
      statOneDescription: 'Villa Lynch, San Martín. Available for opportunities and remote-friendly collaboration.',
      statTwoLabel: 'Current focus',
      statTwoValue: 'Build + learn',
      statTwoDescription: 'Growing through personal projects, applied documentation, AI-assisted workflows, and practical tech study.'
    },
    devicePill: {
      mobile: 'Mobile-aware render path',
      desktop: 'Desktop-aware render path'
    },
    about: {
      eyebrow: 'About',
      title: 'Clear communication, adaptive execution, and useful systems.',
      lead:
        'My strongest value is combining technical curiosity with structured thinking. I care about solving real problems, keeping work understandable, and improving continuously without losing calm or clarity.',
      highlights: [
        {
          title: 'Strengths',
          description:
            'Problem-solving, communication, documentation, ownership, support, and product thinking shaped by both formal study and self-directed work.'
        },
        {
          title: 'Preferred tools',
          description:
            'Astro, React, Tailwind, Node.js, PHP, MySQL, JavaScript, HTML, CSS, Windows, and practical tooling that helps ship without noise.'
        },
        {
          title: 'Working style',
          description:
            'Collaborative, self-taught, organized, and proactive. I like building with momentum, documenting decisions, and helping other people move faster.'
        },
        {
          title: 'What matters to me',
          description:
            'Clarity, consistency, accessible experiences, steady growth, useful systems, and execution that stays calm under pressure.'
        }
      ]
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects that mix technical execution with practical intent.',
      lead:
        'Most of my best learning came from building for real use cases: internal tooling, open source utilities, and products that solve specific day-to-day friction.',
      items: [
        {
          title: 'AppGro',
          summary:
            'A project management and agricultural operations tool born from a real client need: organize production, daily tasks, inventory, and reporting without depending on paperwork-heavy workflows.',
          outcome: 'Helped complete systems analysis studies while delivering a useful, client-oriented product.',
          stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS']
        },
        {
          title: 'QR Pass',
          summary:
            'A web application for visitor access control using generated and scanned QR codes. Built to make building entry faster, safer, and easier to audit digitally.',
          outcome: 'Expanded my architecture thinking while documenting functionality and working through more complex flows.',
          stack: ['JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'QR libraries']
        },
        {
          title: 'Android Mic',
          summary:
            'An open-source Android app that turns a phone into an external microphone for a computer over Wi-Fi or USB. Built from a personal need and finished with accessibility in mind.',
          outcome: 'Deepened my React Native, mobile, and audio-processing skills through a complete shipped product.',
          stack: ['React Native', 'Java', 'Kotlin', 'Android SDK', 'Audio processing']
        }
      ]
    },
    stack: {
      eyebrow: 'Focus',
      title: 'How I am growing right now.',
      lead:
        'My current rhythm mixes project execution, structured learning, and steady long-term direction. I want to contribute to real products while strengthening technical depth and analytical judgment.',
      notes: [
        {
          title: 'Professional direction',
          description:
            'I am aiming for consulting, IT agency, or startup environments where I can contribute through analysis, support, implementation, and product-oriented problem solving.'
        },
        {
          title: 'Learning rhythm',
          description:
            'Most weeks are split between deep work, technology study, AI-assisted productivity, documentation, and staying current with cybersecurity, cloud, and product tooling.'
        },
        {
          title: 'Project mindset',
          description:
            'I enjoy building independent projects because they let me practice architecture, delivery, accessibility, and ownership without waiting for perfect conditions.'
        },
        {
          title: 'Human side',
          description:
            'Coffee, music, bass, gym, gaming, and gardening keep me grounded. Balance matters because better systems also come from better rhythms.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Open to conversations and new opportunities.',
      lead:
        'Best next step is a direct conversation. I am available for roles where technical execution, analysis, documentation, and growth mindset are all valuable.',
      panelEyebrow: 'Next conversation',
      panelTitle: 'If the work needs clarity, adaptability, and practical delivery, let’s talk.',
      panelDescription:
        'I am especially interested in environments where I can keep learning, contribute to real products, and help turn complex requirements into useful outcomes.',
      emailLabel: 'dariorodriguez7810@gmail.com',
      githubLabel: 'github.com/Dario849',
      linkedinLabel: 'linkedin.com/in/dario-rodriguez'
    },
    pdf: {
      routeTitle: 'Printable portfolio view',
      routeLead: 'Use browser print dialog, then choose “Save as PDF” to export this portfolio.',
      printAction: 'Print / Save as PDF',
      backToSite: 'Back to site',
      helper: 'Print dialog can open automatically. If it does not, use button below.'
    }
  },
  es: {
    meta: {
      title: 'Darío Rodríguez | Analista funcional y técnico IT',
      description:
        'Portafolio de Darío Rodríguez, analista funcional y técnico IT. Proyectos, crecimiento técnico, pensamiento de producto y una mirada práctica sobre cómo construyo sistemas útiles.',
      skipToContent: 'Saltar al contenido'
    },
    controls: {
      languageLabel: 'Idioma',
      languageToggleLabel: 'Cambiar idioma del sitio',
      themeLabel: 'Tema',
      themeToggleLabel: 'Cambiar entre modo oscuro y claro',
      pdfLabel: 'Imprimir PDF',
      pdfDescription: 'Abrir vista imprimible del portafolio',
      pdfDownloadLabel: 'Descargar PDF',
      pdfDownloadDescription: 'Descargar archivo PDF renderizado',
      englishShort: 'EN',
      spanishShort: 'ES',
      darkLabel: 'Oscuro',
      lightLabel: 'Claro'
    },
    navSections: [
      { id: 'intro', label: 'Inicio' },
      { id: 'about', label: 'Sobre mí' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'stack', label: 'Enfoque' },
      { id: 'contact', label: 'Contacto' }
    ],
    hero: {
      eyebrow: 'Archivo personal',
      title: 'Análisis funcional, ejecución IT y construcción con mirada de producto.',
      highlight: 'Un portafolio compacto armado desde proyectos reales, ritmo de aprendizaje y crecimiento técnico aplicado.',
      description:
        'Soy Darío Rodríguez, analista funcional y técnico IT de Buenos Aires. Disfruto resolver problemas, documentar con claridad, aprender rápido y construir productos prácticos que resulten entendibles para usuarios y equipos.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Enfoque actual',
      mobilePrimaryCta: 'Ver proyectos',
      mobileSecondaryCta: 'Contacto',
      mobileCardTitle: 'Qué resume este portafolio',
      mobileCardDescription:
        'Una versión breve de un archivo personal mucho más amplio: trayectoria, ritmo de trabajo, proyectos clave, aspiraciones y forma de construir.',
      statOneLabel: 'Base',
      statOneValue: 'Buenos Aires',
      statOneDescription: 'Villa Lynch, San Martín. Disponible para oportunidades y colaboración remota.',
      statTwoLabel: 'Enfoque actual',
      statTwoValue: 'Construir + aprender',
      statTwoDescription: 'Crecimiento a través de proyectos propios, documentación aplicada, flujos con IA y estudio técnico constante.'
    },
    devicePill: {
      mobile: 'Render optimizado para móvil',
      desktop: 'Render optimizado para escritorio'
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Comunicación clara, ejecución adaptable y sistemas útiles.',
      lead:
        'Mi mayor valor está en combinar curiosidad técnica con pensamiento estructurado. Me importa resolver problemas reales, mantener el trabajo entendible y mejorar de forma continua sin perder calma ni claridad.',
      highlights: [
        {
          title: 'Fortalezas',
          description:
            'Resolución de problemas, comunicación, documentación, autonomía, soporte y pensamiento de producto, desarrollados entre estudio formal y práctica autodidacta.'
        },
        {
          title: 'Herramientas preferidas',
          description:
            'Astro, React, Tailwind, Node.js, PHP, MySQL, JavaScript, HTML, CSS, Windows y tooling práctico que ayuda a entregar sin ruido.'
        },
        {
          title: 'Estilo de trabajo',
          description:
            'Colaborativo, autodidacta, organizado y proactivo. Me gusta construir con ritmo, documentar decisiones y ayudar a que otras personas avancen mejor.'
        },
        {
          title: 'Lo que me importa',
          description:
            'Claridad, consistencia, experiencias accesibles, crecimiento sostenido, sistemas útiles y una ejecución serena incluso bajo presión.'
        }
      ]
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Proyectos donde la ejecución técnica responde a una necesidad concreta.',
      lead:
        'Gran parte de mi mejor aprendizaje surgió construyendo para casos de uso reales: herramientas internas, utilidades open source y productos que resuelven fricción cotidiana.',
      items: [
        {
          title: 'AppGro',
          summary:
            'Herramienta de gestión de proyectos y operaciones agrícolas nacida desde una necesidad real de cliente: ordenar producción, tareas diarias, inventario y reportes sin depender de procesos cargados de papel.',
          outcome: 'Me ayudó a cerrar etapa académica en análisis de sistemas y a entregar una solución útil orientada a cliente.',
          stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS']
        },
        {
          title: 'QR Pass',
          summary:
            'Aplicación web para control de accesos de visitantes mediante generación y escaneo de QR. Pensada para agilizar ingresos, aumentar seguridad y dejar trazabilidad digital.',
          outcome: 'Amplió mi criterio de arquitectura mientras documentaba funcionalidades y resolvía flujos más complejos.',
          stack: ['JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Librerías QR']
        },
        {
          title: 'Android Mic',
          summary:
            'Aplicación open source para convertir un teléfono Android en micrófono externo para computadora por Wi-Fi o USB. Nació de una necesidad propia y se cerró como producto completo con foco en accesibilidad.',
          outcome: 'Profundizó mis capacidades en React Native, mobile y procesamiento de audio a través de un producto terminado.',
          stack: ['React Native', 'Java', 'Kotlin', 'Android SDK', 'Audio processing']
        }
      ]
    },
    stack: {
      eyebrow: 'Enfoque',
      title: 'Cómo estoy creciendo hoy.',
      lead:
        'Mi ritmo actual mezcla ejecución de proyectos, aprendizaje estructurado y dirección profesional a largo plazo. Quiero aportar en productos reales mientras fortaleciendo profundidad técnica y criterio analítico.',
      notes: [
        {
          title: 'Dirección profesional',
          description:
            'Estoy apuntando a consultoras, agencias IT o startups donde pueda aportar desde análisis, soporte, implementación y resolución orientada a producto.'
        },
        {
          title: 'Ritmo de aprendizaje',
          description:
            'La mayoría de mis semanas se reparten entre trabajo profundo, estudio tecnológico, productividad asistida por IA, documentación y actualización en ciberseguridad, cloud y herramientas de producto.'
        },
        {
          title: 'Mentalidad de proyecto',
          description:
            'Disfruto construir proyectos independientes porque me permiten practicar arquitectura, entrega, accesibilidad y ownership sin esperar condiciones perfectas.'
        },
        {
          title: 'Lado humano',
          description:
            'Café, música, bajo, gimnasio, gaming y jardinería me mantienen equilibrado. El balance importa porque mejores sistemas también salen de mejores ritmos.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Abierto a conversaciones y nuevas oportunidades.',
      lead:
        'El mejor siguiente paso es hablar directo. Estoy disponible para roles donde ejecución técnica, análisis, documentación y ganas de crecer generen valor real.',
      panelEyebrow: 'Próxima conversación',
      panelTitle: 'Si el trabajo necesita claridad, adaptabilidad y entrega práctica, conversemos.',
      panelDescription:
        'Me interesan especialmente contextos donde pueda seguir aprendiendo, aportar a productos reales y ayudar a convertir requerimientos complejos en resultados útiles.',
      emailLabel: 'dariorodriguez7810@gmail.com',
      githubLabel: 'github.com/Dario849',
      linkedinLabel: 'linkedin.com/in/devdariorodriguez'
    },
    pdf: {
      routeTitle: 'Vista imprimible del portafolio',
      routeLead: 'Usa diálogo de impresión del navegador y luego elige “Guardar como PDF” para exportar este portafolio.',
      printAction: 'Imprimir / Guardar PDF',
      backToSite: 'Volver al sitio',
      helper: 'Diálogo de impresión puede abrirse automáticamente. Si no ocurre, usa botón inferior.'
    }
  }
}

export function getPortfolioContent(locale: SupportedLocale): PortfolioCopy {
  return portfolioContent[locale]
}

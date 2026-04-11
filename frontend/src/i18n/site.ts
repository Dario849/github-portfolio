import { createInstance } from "i18next";

const resources = {
  en: {
    translation: {
      site: {
        metadata: {
          title: "[Your Name] | [Professional Title]",
          description:
            "[Short Bio: replace this with a concise summary of who you are, what you do, and what people can explore on this site.]",
        },
        languageSettings: {
          caption: "Language",
          ariaLabel: "Language settings",
          englishLabel: "English",
          spanishLabel: "Spanish",
        },
        sectionRail: {
          ariaLabel: "Section timeline",
          mobileLabel: "Jump to section",
        },
        themeToggle: {
          title: "Change color theme",
          ariaLabel: "Toggle dark mode",
          caption: "Theme",
        },
        header: {
          eyebrow: "Personal archive",
          subtitle: "[About Me Blog Title]",
          primaryNavAriaLabel: "Primary",
          navItems: [
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#rhythm", label: "Rhythm" },
            { href: "#projects", label: "Projects" },
            { href: "#aspirations", label: "Aspirations" },
            { href: "#contact", label: "Contact" },
          ],
        },
        hero: {
          eyebrow: "Detailed about-me blog",
          status: "[Current Status / Tagline]",
          identity: "[Your Name] / [Professional Title]",
          title: {
            start: "A living record of",
            highlight: "who I am,",
            end: "what I build, and where I'm going.",
          },
          bio:
            "[Short Bio] Replace this paragraph with a clear personal introduction that explains your identity, strengths, and the tone of the site in a way that feels human and specific.",
          primaryCta: "View featured work",
          secondaryCta: "Contact placeholder",
          quickFacts: [
            { label: "Base", value: "[Current City or Region]" },
            { label: "Focus", value: "[Professional Title] + [Current Main Priority]" },
            { label: "Availability", value: "[Availability Status]" },
          ],
        },
        snapshot: {
          eyebrow: "Snapshot",
          title: "At a glance",
          items: [
            {
              label: "Current priority",
              value: "[Main focus right now]",
            },
            {
              label: "Learning",
              value: "[Topic, tool, language, or discipline you are currently improving]",
            },
            {
              label: "Outside work",
              value: "[A short line about hobbies, routines, family, sport, art, or community]",
            },
          ],
        },
        prompt: {
          eyebrow: "Writing prompt",
          quote:
            "\"Replace this with a line that captures your personal philosophy, direction, or the kind of builder/person you want people to remember.\"",
        },
        about: {
          section: "Section 01",
          title: "About me",
          summary:
            "[Longer About Summary] Replace this block with a fuller narrative about your background, motivations, values, communication style, and the kind of work you enjoy doing most.",
          cards: [
            {
              title: "Strengths",
              description:
                "[Examples: problem-solving, communication, ownership, adaptability, support, documentation, product thinking.]",
            },
            {
              title: "Preferred tools",
              description: "[List the technologies and workflows you genuinely like using.]",
            },
            {
              title: "Working style",
              description:
                "[Write how you collaborate, learn, document, organize, and support others.]",
            },
            {
              title: "What matters to me",
              description:
                "[Examples: clarity, consistency, useful systems, accessible experiences, growth, calm execution.]",
            },
          ],
        },
        experience: {
          section: "Section 02",
          title: "Work experience",
          cta: "[Open to conversations]",
          items: [
            {
              period: "[2024 - Present]",
              role: "[Current Role Title]",
              company: "[Current Company or Organization]",
              summary:
                "[Write a concise summary of your responsibilities, impact, and the type of problems you solve here.]",
              wins: [
                "[Highlight a measurable achievement or area of ownership.]",
                "[Mention a project, process improvement, or collaboration success.]",
              ],
            },
            {
              period: "[2022 - 2024]",
              role: "[Previous Role Title]",
              company: "[Previous Company or Organization]",
              summary:
                "[Use this entry for the role that most clearly shows your growth, versatility, or technical depth.]",
              wins: [
                "[Describe a skill you strengthened.]",
                "[Describe a challenge you handled well.]",
              ],
            },
            {
              period: "[Earlier Experience]",
              role: "[Earlier Role Title]",
              company: "[Earlier Company or Organization]",
              summary:
                "[Use older roles to show foundation, transferable skills, or the path that led to your current direction.]",
              wins: [
                "[Mention a lesson, strength, or milestone from this period.]",
                "[Mention another relevant contribution or area of growth.]",
              ],
            },
          ],
        },
        rhythm: {
          section: "Section 03",
          title: "Actual schedule / current rhythm",
          summary:
            "Use this section to describe how your week is structured, where your attention goes right now, and how you balance work, study, side projects, and recovery.",
          currentFocus: {
            intro: "Right now I am focused on",
            focus: "[current work, study, or project]",
            middle: "while balancing",
            balance: "[other commitment]",
            end: "and dedicating time each week to",
            learning: "[learning goal or discipline]",
          },
          items: [
            {
              label: "Deep work",
              level: 5,
              detail:
                "[Describe where your strongest weekly focus goes right now: building, studying, shipping, mentoring, or support.]",
            },
            {
              label: "Learning",
              level: 4,
              detail:
                "[Note what you are currently learning or practicing on a recurring basis.]",
            },
            {
              label: "Community",
              level: 3,
              detail:
                "[Use this for collaboration, mentoring, volunteering, or knowledge sharing.]",
            },
            {
              label: "Recovery",
              level: 4,
              detail:
                "[Use this to describe how you protect balance, rest, and sustainability.]",
            },
          ],
        },
        hobbies: {
          section: "Section 04",
          title: "Hobbies & interests",
          visualLabel: "Hobby placeholder",
          items: [
            {
              title: "[Hobby 1]",
              description:
                "[Write why this hobby matters to you, what it gives you, or how it complements your work.]",
            },
            {
              title: "[Hobby 2]",
              description:
                "[Use this to add personality and show how you spend your time beyond work.]",
            },
            {
              title: "[Hobby 3]",
              description:
                "[Mention a recurring interest, craft, sport, or subject you enjoy exploring.]",
            },
          ],
        },
        activities: {
          section: "Section 05",
          title: "Extra activities",
          items: [
            {
              title: "[Extra Activity 1]",
              description:
                "[Examples: mentoring, volunteering, community organizing, language study, content creation, or certifications.]",
            },
            {
              title: "[Extra Activity 2]",
              description:
                "[Use this area to show initiative outside your core day-to-day work.]",
            },
          ],
        },
        projects: {
          section: "Section 06",
          title: "Featured projects",
          summary:
            "Keep these project cards concise but specific. They should quickly communicate what you built, what role you played, and what makes the project worth opening.",
          visualLabel: "Project placeholder",
          outcomeLabel: "Outcome",
          linkLabel: "[Project Link]",
          items: [
            {
              name: "[Project 1]",
              type: "[Portfolio / Product / Internal Tool / Open Source]",
              stack: "[Astro, React, Tailwind, Node.js, etc.]",
              outcome: "[What this project achieved or what it taught you.]",
              description:
                "[Summarize the problem, what you built, and the reason it deserves a place in your featured work.]",
              href: "[Project Link]",
            },
            {
              name: "[Project 2]",
              type: "[Portfolio / Product / Internal Tool / Open Source]",
              stack: "[Tech Stack]",
              outcome: "[Result or key learning.]",
              description:
                "[Use this card for a project that shows a different strength: UI, architecture, support, analysis, or delivery.]",
              href: "[Project Link]",
            },
            {
              name: "[Project 3]",
              type: "[Portfolio / Product / Internal Tool / Open Source]",
              stack: "[Tech Stack]",
              outcome: "[Result or key learning.]",
              description:
                "[Use this card to show range, depth, or a project that reflects your aspirations.]",
              href: "[Project Link]",
            },
          ],
        },
        aspirations: {
          section: "Section 07",
          title: "Aspirations",
          summary:
            "Use this area to explain what kind of builder, teammate, and professional you want to become. The best versions of this section feel directional, honest, and specific.",
          goalLabel: "Goal",
          items: [
            "[Aspiration 1: the kind of work or impact you want to grow into.]",
            "[Aspiration 2: the type of problems, industries, or teams you want to contribute to.]",
            "[Aspiration 3: the skills, habits, or responsibilities you want to keep developing.]",
          ],
        },
        contact: {
          section: "Section 08",
          title: "Contact & next conversation",
          summary:
            "Replace this area with the clearest way for people to reach you, understand your availability, and continue the conversation after exploring your story.",
          items: [
            { label: "Email", value: "[Email Address]", href: "mailto:[Email Address]" },
            { label: "GitHub", value: "[GitHub URL]", href: "[GitHub URL]" },
            { label: "LinkedIn", value: "[LinkedIn URL]", href: "[LinkedIn URL]" },
            { label: "Website", value: "[Portfolio URL]", href: "[Portfolio URL]" },
          ],
        },
        footer: {
          identity: "[Your Name] / [Professional Title] / [Availability Status]",
          edition: "{{year}} placeholder edition for manual replacement",
        },
      },
    },
  },
  es: {
    translation: {
      site: {
        metadata: {
          title: "[Tu Nombre] | [Título Profesional]",
          description:
            "[Biografía corta: reemplaza esto con un resumen conciso de quién eres, qué haces y qué puede explorar la gente en este sitio.]",
        },
        languageSettings: {
          caption: "Idioma",
          ariaLabel: "Ajustes de idioma",
          englishLabel: "Inglés",
          spanishLabel: "Español",
        },
        sectionRail: {
          ariaLabel: "Linea de secciones",
          mobileLabel: "Ir a una seccion",
        },
        themeToggle: {
          title: "Cambiar tema de color",
          ariaLabel: "Cambiar modo oscuro",
          caption: "Tema",
        },
        header: {
          eyebrow: "Archivo personal",
          subtitle: "[Título del blog sobre mí]",
          primaryNavAriaLabel: "Principal",
          navItems: [
            { href: "#about", label: "Sobre mí" },
            { href: "#experience", label: "Experiencia" },
            { href: "#rhythm", label: "Ritmo" },
            { href: "#projects", label: "Proyectos" },
            { href: "#aspirations", label: "Aspiraciones" },
            { href: "#contact", label: "Contacto" },
          ],
        },
        hero: {
          eyebrow: "Blog detallado sobre mí",
          status: "[Estado actual / Lema]",
          identity: "[Tu Nombre] / [Título Profesional]",
          title: {
            start: "Un registro vivo de",
            highlight: "quién soy,",
            end: "lo que construyo y hacia dónde voy.",
          },
          bio:
            "[Biografía corta] Reemplaza este párrafo con una introducción personal clara que explique tu identidad, fortalezas y el tono del sitio de una manera humana y específica.",
          primaryCta: "Ver trabajo destacado",
          secondaryCta: "Contacto provisional",
          quickFacts: [
            { label: "Base", value: "[Ciudad o región actual]" },
            { label: "Enfoque", value: "[Título Profesional] + [Prioridad principal actual]" },
            { label: "Disponibilidad", value: "[Estado de disponibilidad]" },
          ],
        },
        snapshot: {
          eyebrow: "Panorama",
          title: "De un vistazo",
          items: [
            {
              label: "Prioridad actual",
              value: "[En lo que más me enfoco ahora]",
            },
            {
              label: "Aprendizaje",
              value: "[Tema, herramienta, idioma o disciplina que estás mejorando ahora]",
            },
            {
              label: "Fuera del trabajo",
              value: "[Una línea breve sobre hobbies, rutinas, familia, deporte, arte o comunidad]",
            },
          ],
        },
        prompt: {
          eyebrow: "Punto de escritura",
          quote:
            "\"Reemplaza esto con una frase que capture tu filosofía personal, tu dirección o el tipo de persona/creador que quieres que la gente recuerde.\"",
        },
        about: {
          section: "Sección 01",
          title: "Sobre mí",
          summary:
            "[Resumen más amplio] Reemplaza este bloque con una narrativa más completa sobre tu trayectoria, motivaciones, valores, estilo de comunicación y el tipo de trabajo que más disfrutas.",
          cards: [
            {
              title: "Fortalezas",
              description:
                "[Ejemplos: resolución de problemas, comunicación, responsabilidad, adaptabilidad, soporte, documentación, visión de producto.]",
            },
            {
              title: "Herramientas preferidas",
              description:
                "[Enumera las tecnologías y flujos de trabajo que realmente disfrutas usar.]",
            },
            {
              title: "Estilo de trabajo",
              description:
                "[Describe cómo colaboras, aprendes, documentas, organizas y apoyas a otras personas.]",
            },
            {
              title: "Lo que me importa",
              description:
                "[Ejemplos: claridad, consistencia, sistemas útiles, experiencias accesibles, crecimiento, ejecución serena.]",
            },
          ],
        },
        experience: {
          section: "Sección 02",
          title: "Experiencia laboral",
          cta: "[Abierto a conversaciones]",
          items: [
            {
              period: "[2024 - Actualidad]",
              role: "[Título del puesto actual]",
              company: "[Empresa u organización actual]",
              summary:
                "[Escribe un resumen conciso de tus responsabilidades, impacto y el tipo de problemas que resuelves aquí.]",
              wins: [
                "[Destaca un logro medible o un área de responsabilidad.]",
                "[Menciona un proyecto, una mejora de proceso o un éxito de colaboración.]",
              ],
            },
            {
              period: "[2022 - 2024]",
              role: "[Título del puesto anterior]",
              company: "[Empresa u organización anterior]",
              summary:
                "[Usa esta entrada para el rol que mejor muestre tu crecimiento, versatilidad o profundidad técnica.]",
              wins: [
                "[Describe una habilidad que fortaleciste.]",
                "[Describe un reto que manejaste bien.]",
              ],
            },
            {
              period: "[Experiencia anterior]",
              role: "[Título de un puesto anterior]",
              company: "[Empresa u organización anterior]",
              summary:
                "[Usa roles más antiguos para mostrar tu base, habilidades transferibles o el camino que te llevó a tu dirección actual.]",
              wins: [
                "[Menciona una lección, fortaleza o hito de esta etapa.]",
                "[Menciona otra contribución relevante o un área de crecimiento.]",
              ],
            },
          ],
        },
        rhythm: {
          section: "Sección 03",
          title: "Horario real / ritmo actual",
          summary:
            "Usa esta sección para describir cómo se estructura tu semana, hacia dónde va tu atención ahora y cómo equilibras trabajo, estudio, proyectos paralelos y recuperación.",
          currentFocus: {
            intro: "Ahora mismo estoy enfocado en",
            focus: "[trabajo, estudio o proyecto actual]",
            middle: "mientras equilibro",
            balance: "[otro compromiso]",
            end: "y dedico tiempo cada semana a",
            learning: "[meta o disciplina de aprendizaje]",
          },
          items: [
            {
              label: "Trabajo profundo",
              level: 5,
              detail:
                "[Describe en qué se concentra más tu foco semanal ahora: construir, estudiar, lanzar, mentoría o soporte.]",
            },
            {
              label: "Aprendizaje",
              level: 4,
              detail:
                "[Anota lo que estás aprendiendo o practicando de forma recurrente.]",
            },
            {
              label: "Comunidad",
              level: 3,
              detail:
                "[Usa esto para colaboración, mentoría, voluntariado o compartir conocimiento.]",
            },
            {
              label: "Recuperación",
              level: 4,
              detail:
                "[Úsalo para describir cómo proteges el equilibrio, el descanso y la sostenibilidad.]",
            },
          ],
        },
        hobbies: {
          section: "Sección 04",
          title: "Hobbies e intereses",
          visualLabel: "Imagen referencial del hobby",
          items: [
            {
              title: "[Hobby 1]",
              description:
                "[Escribe por qué este hobby te importa, qué te aporta o cómo complementa tu trabajo.]",
            },
            {
              title: "[Hobby 2]",
              description:
                "[Úsalo para añadir personalidad y mostrar cómo pasas tu tiempo fuera del trabajo.]",
            },
            {
              title: "[Hobby 3]",
              description:
                "[Menciona un interés, oficio, deporte o tema que disfrutes explorar con frecuencia.]",
            },
          ],
        },
        activities: {
          section: "Sección 05",
          title: "Actividades extra",
          items: [
            {
              title: "[Actividad extra 1]",
              description:
                "[Ejemplos: mentoría, voluntariado, organización comunitaria, estudio de idiomas, creación de contenido o certificaciones.]",
            },
            {
              title: "[Actividad extra 2]",
              description:
                "[Usa esta área para mostrar iniciativa fuera de tu trabajo principal.]",
            },
          ],
        },
        projects: {
          section: "Sección 06",
          title: "Proyectos destacados",
          summary:
            "Mantén estas tarjetas de proyecto concisas pero específicas. Deben comunicar rápido qué construiste, cuál fue tu rol y por qué vale la pena abrir el proyecto.",
          visualLabel: "Imagen referencial del proyecto",
          outcomeLabel: "Resultado",
          linkLabel: "[Enlace del proyecto]",
          items: [
            {
              name: "[Proyecto 1]",
              type: "[Portafolio / Producto / Herramienta interna / Código abierto]",
              stack: "[Astro, React, Tailwind, Node.js, etc.]",
              outcome: "[Lo que logró este proyecto o lo que te enseñó.]",
              description:
                "[Resume el problema, lo que construiste y la razón por la que merece un lugar en tu trabajo destacado.]",
              href: "[Enlace del proyecto]",
            },
            {
              name: "[Proyecto 2]",
              type: "[Portafolio / Producto / Herramienta interna / Código abierto]",
              stack: "[Stack tecnológico]",
              outcome: "[Resultado o aprendizaje clave.]",
              description:
                "[Usa esta tarjeta para un proyecto que muestre otra fortaleza: UI, arquitectura, soporte, análisis o entrega.]",
              href: "[Enlace del proyecto]",
            },
            {
              name: "[Proyecto 3]",
              type: "[Portafolio / Producto / Herramienta interna / Código abierto]",
              stack: "[Stack tecnológico]",
              outcome: "[Resultado o aprendizaje clave.]",
              description:
                "[Usa esta tarjeta para mostrar amplitud, profundidad o un proyecto que refleje tus aspiraciones.]",
              href: "[Enlace del proyecto]",
            },
          ],
        },
        aspirations: {
          section: "Sección 07",
          title: "Aspiraciones",
          summary:
            "Usa esta área para explicar en qué tipo de creador, compañero y profesional quieres convertirte. Las mejores versiones de esta sección se sienten honestas, específicas y con dirección.",
          goalLabel: "Meta",
          items: [
            "[Aspiración 1: el tipo de trabajo o impacto hacia el que quieres crecer.]",
            "[Aspiración 2: el tipo de problemas, industrias o equipos a los que quieres contribuir.]",
            "[Aspiración 3: las habilidades, hábitos o responsabilidades que quieres seguir desarrollando.]",
          ],
        },
        contact: {
          section: "Sección 08",
          title: "Contacto y próxima conversación",
          summary:
            "Reemplaza esta área con la forma más clara de contactarte, entender tu disponibilidad y continuar la conversación después de explorar tu historia.",
          items: [
            { label: "Correo", value: "[Correo electrónico]", href: "mailto:[Correo electrónico]" },
            { label: "GitHub", value: "[URL de GitHub]", href: "[URL de GitHub]" },
            { label: "LinkedIn", value: "[URL de LinkedIn]", href: "[URL de LinkedIn]" },
            { label: "Sitio web", value: "[URL del portafolio]", href: "[URL del portafolio]" },
          ],
        },
        footer: {
          identity: "[Tu Nombre] / [Título Profesional] / [Estado de disponibilidad]",
          edition: "{{year}} edición provisional para reemplazo manual",
        },
      },
    },
  },
} as const;

export type Language = keyof typeof resources;
export type SiteCopy = (typeof resources)["en"]["translation"]["site"];
export interface DerivedSiteMetadata {
  title: string;
  description: string;
  keywords: string;
  aiSummary: string;
  locale: string;
  siteName: string;
  author: string;
  creator: string;
  structuredData: Record<string, unknown>;
}

export const defaultLanguage: Language = "en";

export const getPathForLanguage = (language: Language) => {
  return language === "es" ? "/es/" : "/";
};

const languageLocales: Record<Language, string> = {
  en: "en_US",
  es: "es_ES",
};

const normalizeText = (value: string) => {
  return value.replace(/\s+/g, " ").trim();
};

const uniqueValues = (values: string[]) => {
  const seen = new Set<string>();

  return values.filter((value) => {
    const normalized = normalizeText(value);

    if (!normalized) {
      return false;
    }

    const key = normalized.toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

const truncateText = (value: string, maxLength: number) => {
  const normalized = normalizeText(value);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}...`;
};

const getProfileIdentity = (copy: SiteCopy) => {
  const [namePart = copy.hero.identity, rolePart = copy.hero.identity] = copy.hero.identity
    .split("/")
    .map((part) => normalizeText(part));

  return {
    name: namePart,
    role: rolePart,
  };
};

export const getDerivedSiteMetadata = (
  copy: SiteCopy,
  language: Language,
  pageUrl?: string,
  imageUrl?: string,
): DerivedSiteMetadata => {
  const profile = getProfileIdentity(copy);
  const sameAs = copy.contact.items
    .map((item) => item.href)
    .filter((href) => href.startsWith("http://") || href.startsWith("https://"));
  const keywords = uniqueValues([
    copy.header.eyebrow,
    copy.header.subtitle,
    copy.hero.identity,
    copy.hero.status,
    copy.about.title,
    ...copy.about.cards.map((card) => card.title),
    copy.experience.title,
    ...copy.experience.items.map((item) => item.role),
    copy.rhythm.title,
    ...copy.rhythm.items.map((item) => item.label),
    copy.hobbies.title,
    ...copy.hobbies.items.map((item) => item.title),
    copy.activities.title,
    ...copy.activities.items.map((item) => item.title),
    copy.projects.title,
    ...copy.projects.items.flatMap((item) => [item.name, item.type, item.stack]),
    copy.aspirations.title,
    copy.contact.title,
    ...copy.contact.items.map((item) => item.label),
  ]).join(", ");
  const aiSummary = truncateText(
    [
      copy.metadata.description,
      copy.hero.bio,
      copy.about.summary,
      copy.experience.items[0]?.summary ?? "",
      copy.projects.summary,
      copy.contact.summary,
    ].join(" "),
    420,
  );
  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: language,
    name: copy.metadata.title,
    description: copy.metadata.description,
    ...(pageUrl ? { url: pageUrl } : {}),
    ...(imageUrl ? { image: imageUrl } : {}),
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      description: copy.hero.bio,
      ...(pageUrl ? { url: pageUrl } : {}),
      ...(sameAs.length > 0 ? { sameAs } : {}),
      knowsAbout: uniqueValues([
        ...copy.about.cards.map((card) => card.title),
        ...copy.projects.items.map((item) => item.stack),
        ...copy.rhythm.items.map((item) => item.label),
      ]),
    },
    hasPart: copy.header.navItems.map((item) => ({
      "@type": "WebPageElement",
      name: item.label,
      url: pageUrl ? `${pageUrl}${item.href}` : item.href,
    })),
  };

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    keywords,
    aiSummary,
    locale: languageLocales[language],
    siteName: copy.header.subtitle,
    author: profile.name,
    creator: profile.name,
    structuredData,
  };
};

export const getSiteCopy = async (language: Language): Promise<SiteCopy> => {
  const i18n = createInstance();

  await i18n.init({
    resources,
    lng: language,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });

  return i18n.t("site", { returnObjects: true }) as SiteCopy;
};

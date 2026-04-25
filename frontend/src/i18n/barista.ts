import { withBasePath } from "./site";

export const baristaPublicUrl = "https://dario849.github.io/github-portfolio/barista/";
export const portfolioPublicUrl = "https://dario849.github.io/github-portfolio/";
export const baristaRoutePath = withBasePath("barista/");
export const baristaPdfPath = withBasePath("barista/dario-rodriguez-barista.pdf");

export const baristaCopy = {
  metadata: {
    title: "Darío Rodríguez | Perfil barista",
    description:
      "Perfil barista de Darío Rodríguez, home brewer autodidacta, analista, programador y informático con interés genuino por el café preparado con intención, buscando su primera oportunidad profesional en barra.",
  },
  header: {
    eyebrow: "Perfil barista",
    subtitle: "Home brewer autodidacta listo para dar salto a barra",
    homeLabel: "Volver al portfolio",
  },
  navItems: [
    { href: "#historia", label: "Historia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#espresso", label: "Espresso" },
    { href: "#servicio", label: "Servicio" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
  ],
  sectionRail:{
    ariaLabel: "Navegación por secciones del perfil barista",
    mobileLabel: "Navegar secciones",
  },
  media: {
    visualLabel: "Foto del perfil barista",
    items: [
      {
        title: "Mi espacio de trabajo",
        caption:
          "Proceso de preparación, limpieza, orden y cuidado de cada detalle.",
      },
      {
        title: "Aprendizaje con método",
        caption:
          "El método de prensa francesa me permitió entender variables y resultados en taza, y desarrollar criterio para mejorar cada preparación.",
      },
      {
        title: "Control de variables",
        caption:
          "La cata y el análisis de cada taza me ayudaron a entender la relación entre molienda, temperatura, tiempo de extracción y resultado final en taza.",
      },
      {
        title: "Café espresso y café con leche",
        caption:
          "Personalmente un buen café no necesita nada más que café de calidad, pero esta imagen acompaña la sección de bebidas con criterio, donde destaco que el espresso es la base de un buen Flat White, Cortado o Cappuccino.",
      },
      {
        title: "Ritmo de barra",
        caption:
          "Mayor espacio de trabajo y ritmo constante como parte central de la experiencia de servicio que busco.",
      },
    ],
  },
  carousel: {
    section: "Sección 05",
    title: "Galería de práctica y resultados",
    summary:
      "Este carrusel reúne el resto de las fotos del proceso, las bebidas y las pruebas que no aparecen en las otras secciones. Sirve como muestra visual complementaria del trabajo, la constancia y el interés real por café.",
    previousLabel: "Imagen anterior",
    nextLabel: "Siguiente imagen",
    pauseLabel: "Pausar reproducción automática",
    resumeLabel: "Reanudar reproducción automática",
    slideAriaLabel: "Abrir imagen ampliada",
    items: [
      {
        title: "Práctica constante en casa",
        caption: "Sesiones de prueba y repetición para mejorar criterio y consistencia.",
      },
      {
        title: "Relación entre molienda y extracción",
        caption: "El grosor determina la intensidad de la extracción, encontrar el balance es el punto clave.",
      },
      {
        title: "Americano",
        caption: "Práctica de balance entre intensidad del shot y cantidad de agua para lograr taza equilibrada.",
      },
      {
        title: "Más horas de espresso",
        caption: "Pruebas y ajustes para seguir empujando la calidad del shot.",
      },
      {
        title: "Parte del trabajo",
        caption: "Orden, herramientas limpias y listas para el próximo café como parte central del proceso.",
      },
      {
        title: "Tamping y nivel de crema",
        caption: "Existe una relación entre el tamping, la extracción y la calidad de la crema del café.",
      },
      {
        title: "Prolijidad antes que nada",
        caption: "Reducir desperdicio pesando los gramos necesarios con exáctitud para mantener la estación limpia, cuidando cada detalle para mejorar el resultado final.",
      },
      {
        title: "Otro shot de espresso",
        caption: "Siempre hay lugar para mejoras tanto en las herramientas de trabajo como en la técnica de preparación.",
      },
      {
        title: "Estación de trabajo",
        caption: "Barra de café en casa: espacio dedicado, ordenado y cuidado para practicar con foco en calidad y consistencia para llevar esa disciplina a un contexto profesional.",
      }
    ],
  },
  hero: {
    eyebrow: "Café, método y consistencia",
    identity: "Darío Rodríguez / Home brewer autodidacta / Buscando primera oportunidad como barista",
    title: {
      start: "Quiero llevar mi",
      highlight: "experiencia cafetera",
      end: "de casa a una barra real.",
    },
    summary:
      "Mi interés genuino por el café preparado con intención empezó cerca de mis 20 años, cuando descubrí que cambiar la molienda, el método y el cuidado del proceso cambiaba por completo el resultado en taza.",
    summaryTail:
      "Hoy busco una primera oportunidad como barista donde pueda convertir esa disciplina de home brewing en servicio constante, buen espresso y una experiencia cuidada para cada cliente.",
    primaryCta: "Descargar PDF barista",
    secondaryCta: "Escribirme por correo",
    quickFacts: [
      { label: "Objetivo", value: "Primer puesto profesional como barista" },
      { label: "Base técnica", value: "Prensa francesa, espresso, flat white y cortado" },
      { label: "Prioridades", value: "Limpieza, materia prima y consistencia en taza" },
    ],
  },
  snapshot: {
    eyebrow: "Panorama actual",
    title: "Qué ofrezco hoy",
    items: [
      {
        label: "Mentalidad",
        value: "Me gusta entender variables, repetir procesos bien y mejorar cada taza con criterio.",
      },
      {
        label: "Fortaleza",
        value: "Orden de estación, constancia de ritmo y foco en calidad antes que improvisación.",
      },
      {
        label: "Punto honesto",
        value: "Soy autodidacta: tengo base sólida de preparación y todavía quiero ganar práctica real en barra.",
      },
    ],
  },
  story: {
    section: "Sección 01",
    title01: "Cómo empezó todo",
    title02: "Más sobre mí",
    title03: "Mis estudios y experiencia laboral",
    intro01:
      "Antes tomaba café sin demasiado interés. El cambio llegó al ver a un colega de mi papá moler café a mano y prepararlo en prensa francesa: no era café de especialidad de alto nivel, pero el ritual, proceso y resultado final eran claramente mejores que el café habitual. A partir de ahí de a poco empecé a interesarme más y más por la preparación, a investigar por mi cuenta, a practicar con método y a mejorar cada vez más el resultado en taza. Hoy en día estoy abierto a cualquier oportunidad laboral que se me presente, tengo un abaníco de habilidades varias para ofrecer, y ganas reales de aportar, aprender y crecer dentro de un equipo de trabajo.",
    intro02:
      "Mis estudios y trabajo siempre estuvieron relacionados con tecnología, pero el café se volvió un hobby serio que me llevó a investigar, practicar y mejorar cada vez más. Hoy busco dar el salto a barra para convertir esa experiencia autodidacta en aprendizaje real dentro de un equipo profesional.",
    intro03:
      "Tengo un título superior en análisis de sistemas y título secundario en informática, se programar en PHP, Python, Javascript, y demás. Tengo experiencia laboral en atención al cliente para un almacén/fiambrería y experiencia como soporte técnico dentro oficinas de márketing/callcenter. Me gusta entender cómo funcionan las cosas, elaborar proyectos propios, investigar por mi cuenta y mejorar con práctica constante, tengo una mentalidad creativa y analítica a la vez, ataco problemas con criterio y paciencia, y me gusta trabajar en equipo para aprender de otros y aportar lo mío.",
    steps: [
      {
        title: "Primer clic con método",
        description:
          "Ese momento me mostró que el café no era solo bebida: era molienda, preparación previa, atención y resultado final en taza.",
      },
      {
        title: "Primera prensa francesa",
        description:
          "Mi primer equipo propio fue una prensa francesa. Ahí empecé a practicar de verdad y a prestar atención a cada variable.",
      },
      {
        title: "Aprender control de variables",
        description:
          "Fui profundizando en grosor de molienda, temperatura del agua y tiempo de extracción para entender mejor equilibrio, cuerpo y limpieza en taza.",
      },
      {
        title: "Subir el nivel en casa",
        description:
          "Después conseguí un molinillo de mayor calidad y una cafetera espresso. Ese salto me permitió preparar cafés capaces de competir con una cafetería desde mi propia casa.",
      },
    ],
  },
  skills: {
    section: "Sección 02",
    title: "Base técnica y criterio en preparación",
    intro:
      "Lo que más disfruto es explorar variables hasta encontrar el mejor perfil y balance posible de sabores sin perder consistencia.",
    items: [
      {
        title: "Métodos y extracción",
        points: [
          "Práctica sostenida con prensa francesa y espresso.",
          "Atención al tamaño de molienda según método y resultado buscado.",
          "Control de temperatura del agua y tiempo de extracción.",
          "Búsqueda de balance entre intensidad, cuerpo y limpieza.",
        ],
      },
      {
        title: "Espresso en casa",
        points: [
          "Uso de molinillo y cafetera espresso propios.",
          "Interés real por ajuste de variables hasta lograr shots más sólidos.",
          "Importancia de crema, textura y estabilidad del resultado.",
          "Mentalidad de mejora continua, no de receta fija.",
        ],
      },
      {
        title: "Criterio operativo",
        points: [
          "Limpieza permanente del área de trabajo.",
          "Respeto por calidad de materia prima dentro de cada contexto.",
          "Capacidad para sostener ritmo de servicio con orden.",
          "Enfoque en entregar buen café de manera constante.",
        ],
      },
    ],
  },
  espresso: {
    section: "Sección 03",
    title: "Espresso, leche y bebidas con criterio",
    summary:
      "Para mí un flat white o un cortado no dependen solo del latte art. Lo principal sigue siendo calidad del shot, leche bien trabajada, temperatura correcta y una crema que acompañe el resultado final.",
    highlights: [
      "Prioridad en shot de espresso bien resuelto antes que en decoración.",
      "Cuidado de temperatura y textura para no desnaturalizar la leche.",
      "Interés por bebidas como flat white y cortado desde equilibrio y ejecución.",
      "Latte art todavía en desarrollo: lo presento con honestidad, no como habilidad cerrada.",
    ],
    noteTitle: "Punto honesto",
    note:
      "En casa es más difícil practicar latte art con continuidad porque casi siempre preparo café para mí mismo o, con suerte, para un familiar. Quiero ganar más horas reales de práctica en contexto profesional.",
  },
  service: {
    section: "Sección 04",
    title: "Cómo me veo trabajando en barra",
    summary:
      "Me veo sin problemas sirviendo café a velocidad constante para quien tenga ganas de tomar un buen café. Busco un lugar donde valoren ganas reales de aprender, cuidado del producto y disciplina de trabajo.",
    items: [
      {
        title: "Constancia",
        description:
          "Puedo repetir procesos con atención y sostener criterio de calidad durante el servicio.",
      },
      {
        title: "Orden",
        description:
          "Mantener limpia la estación y cuidar herramientas e insumos es parte central del trabajo, no detalle opcional.",
      },
      {
        title: "Aprendizaje real",
        description:
          "Quiero absorber experiencia de barra, ajustar técnica y crecer rápido dentro de un equipo serio.",
      },
    ],
  },
  contact: {
    section: "Sección 06",
    title: "Contacto y siguiente paso",
    summary:
      "Si buscás alguien con interés genuino por café, base técnica autodidacta y ganas reales de crecer como barista, me interesa conversar.",
    items: [
      { label: "Correo", value: "dariorodriguez7810@gmail.com", href: "mailto:dariorodriguez7810@gmail.com" },
      { label: "Número", value: "+54 11 6535-7441", href: "tel:+541165357441" },
      { label: "LinkedIn", value: "Dario Rodriguez", href: "https://www.linkedin.com/in/devdariorodriguez/" },
      { label: "Perfil online", value: portfolioPublicUrl, href: portfolioPublicUrl },
    ],
  },
  pdf: {
    downloadLabel: "Descargar PDF barista",
    helper:
      "Versión compacta, con menos styling, pensada para descargar, compartir e imprimir en papel.",
    fileName: "dario-rodriguez-barista.pdf",
    qrTitle: "Perfil online",
    qrCaption: "Escaneá este QR para abrir versión web del perfil barista.",
  },
} as const;

export type BaristaCopy = typeof baristaCopy;

export interface BaristaMetadata {
  title: string;
  description: string;
  keywords: string;
  locale: string;
  structuredData: Record<string, unknown>;
}

export const getBaristaMetadata = (pageUrl = baristaPublicUrl): BaristaMetadata => {
  const keywords = [
    "barista",
    "home brewer",
    "espresso",
    "prensa francesa",
    "molienda",
    "extracción",
    "flat white",
    "cortado",
    "café",
    "Darío Rodríguez",
  ].join(", ");

  return {
    title: baristaCopy.metadata.title,
    description: baristaCopy.metadata.description,
    keywords,
    locale: "es_ES",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      inLanguage: "es",
      name: baristaCopy.metadata.title,
      description: baristaCopy.metadata.description,
      url: pageUrl,
      mainEntity: {
        "@type": "Person",
        name: "Darío Rodríguez",
        jobTitle: "Barista junior / Home brewer autodidacta",
        description: baristaCopy.hero.summary,
        url: pageUrl,
        sameAs: baristaCopy.contact.items
          .map((item) => item.href)
          .filter((href) => href.startsWith("http://") || href.startsWith("https://")),
        knowsAbout: [
          "Espresso",
          "Prensa francesa",
          "Control de molienda",
          "Control de extracción",
          "Leche texturizada",
          "Calidad en estación de trabajo",
        ],
      },
    },
  };
};

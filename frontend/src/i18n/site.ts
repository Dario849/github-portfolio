import { createInstance } from "i18next";

const resources = {
  en: {
    translation: {
      site: {
        metadata: {
          title: "Dario Rodríguez | Functional Analyst & IT Technician",
          description:
            "This is a detailed about-me blog for Dario Rodríguez, a Functional Analyst & IT Technician. Explore Dario's background, work experience, current focus, hobbies, and aspirations in this personal archive that offers a comprehensive view of who he is, what he builds, and where he's going.",
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
          subtitle: "Know me better than a resume",
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
          status: "Online//",
          identity: "Dario Rodríguez / Functional Analyst & IT Technician",
          title: {
            start: "A living record of",
            highlight: "who I am,",
            end: " and where I'm going.",
          },
          bio:
            "Hi, I'm Dario Rodríguez, a Functional Analyst & IT Technician. I enjoy building things, exploring new technologies, music, coffee, and more.",
          bioLastSentence:
            "Keep reading...",
          primaryCta: "View featured work",
          secondaryCta: "Contact placeholder",
          quickFacts: [
            { label: "Base", value: "Villa Lynch, San Martín, Buenos Aires, Argentina" },
            { label: "Focus", value: "Landing a job, learning new technologies and living life to the fullest" },
            { label: "Availability", value: "Available for new opportunities, fully committed to personal and professional growth" },
          ],
        },
        snapshot: {
          eyebrow: "Snapshot",
          title: "At a glance",
          items: [
            {
              label: "Current priority",
              value: "Learning how to cope with the fast-paced world of technology while maintaining a balanced and fulfilling life.",
            },
            {
              label: "Learning",
              value: "Improving my skills in functional analysis and IT techniques.",
            },
            {
              label: "Outside work",
              value: "Enjoying music, coffee, and exploring new technologies in my free time.",
            },
          ],
        },
        prompt: {
          eyebrow: "Writing prompt",
          quote:
            "\"Discovering oneself is a lifelong journey.\"",
        },
        about: {
          section: "Section 01",
          title: "About me",
          summary:
            "I am a passionate and dedicated professional with a strong background in functional analysis and IT techniques. I value continuous learning, effective communication, and collaboration. I enjoy tackling challenging problems, exploring new technologies, and contributing to meaningful projects.",
          cards: [
            {
              title: "Strengths",
              description:
                "Problem-solving, communication, ownership, adaptability, support, documentation, product thinking.",
            },
            {
              title: "Preferred tools",
              description: "PHP, MySQL, JavaScript, HTML, CSS, Astro, Node.js, Windows, etc.",
            },
            {
              title: "Working style",
              description:
                "Collaborative, continuous learner, documenter, task organizer, and supporter of others.",
            },
            {
              title: "What matters to me",
              description:
                "Being consistent, clarity, useful systems, accessible experiences, growth, serene execution.",
            },
          ],
        },
        experience: {
          section: "Section 02",
          title: "Work experience",
          cta: "[Open to conversations]",
          items: [
            {
              period: "[May 2025 - Present]",
              role: "Independent / Personal projects",
              company: "Freelance and own projects",
              summary:
                "I currently dedicate myself to building personal projects and offering help to acquaintances and friends. This allows me to apply my skills, learn new technologies, and stay active in the tech community while I look for professional opportunities that align with my aspirations.",
              wins: [
                "Self-taught and proactive in learning and building projects independently, which has allowed me to develop technical and project management skills without relying on a formal work environment.",
                "My most current and favorite project is Android Mic, I discovered React Native, and I built a finished product, wrote technical documentation, and created accessibility for all users, and published it as open source for others to use.",
              ],
            },
            {
              period: "[Jul 2023 - May 2025]",
              role: "IT Support Technician",
              company: "Callcenter office for anonymous client in San Isidro",
              summary:
                "I provided first-level IT support within the office, resolving hardware and software issues for employees. Also management and resolution of SaaS issues like CRM, spreadsheets, email, and internal communication tools.(under informal contract)",
              wins: [
                "[Describe a skill you strengthened.]",
                "[Describe a challenge you handled well.]",
              ],
            },
            {
              period: "[Mar 2022 - Nov 2022]",
              role: "Client service",
              company: "Deli and Cheese Shop Don Navarro",
              summary:
                "I attended customers, managed orders, made home deliveries in the area, performed cleaning and stock control.(under informal contract)",
              wins: [
                "Dealing with customers in a friendly and efficient manner, ensuring their satisfaction and loyalty.",
                "Utilizing specific machinery of the industry and maintaining the cleanliness and hygiene of the place, complying with quality standards and food safety.",
              ],
            },
          ],
        },
        rhythm: {
          section: "Section 03",
          title: "Actual schedule / current rhythm",
          summary:
            "My day is currently structured in blocks of time dedicated to different activities. I spend most of my week working on IT projects, learning new technologies, and staying updated on tech news. I currently dedicate a large portion of time to my hobbies and interests to stay motivated and creative.",
          currentFocus: {
            intro: "Right now I am focused on",
            focus: "becoming independent and building my own projects",
            middle: "while balancing",
            balance: "my hobbies and interests",
            end: "and dedicating time each week to",
            learning: "Cybersecurity, cloud technologies, and keeping up with tech news.",
          },
          items: [
            {
              label: "Deep work",
              level: 5,
              detail:
                "I dedicate my strongest weekly focus to deep work, whether it's building, studying, shipping, mentoring, or providing support.",
            },
            {
              label: "Learning",
              level: 4,
              detail:
                "I spend a significant portion of my time learning new technologies and tools, as well as improving my skills using AI and productivity techniques.",
            },
            {
              label: "Community",
              level: 3,
              detail:
                "I keep in touch with friends and acquaintances who share my interests, collaborating on personal projects and sharing knowledge and resources to grow together.",
            },
            {
              label: "Recovery",
              level: 4,
              detail:
                "I take part of my week to activities that allow me to rest, recharge and maintain a healthy work-life balance.",
            },
          ],
        },
        hobbies: {
          section: "Section 04",
          title: "Hobbies & interests",
          visualLabel: "Hobby placeholder",
          items: [
            {
              title: "Coffee enthusiast",
              description:
                "I enjoy exploring different coffee brewing methods and tasting various coffee beans. It's a hobby that allows me to appreciate the art and science behind a good cup of coffee.",
            },
            {
              title: "Gym",
              description:
                "I enjoy going to the gym to stay fit and maintain a healthy lifestyle. It's a way to relieve stress, build strength, and improve overall well-being.",
            },
            {
              title: "Bassist",
              description:
                "I practiced electric bass for several years, which allowed me to develop musical skills, discipline, and creativity. Although I don't do it professionally, music is an important part of my life.",
            },
          ],
        },
        activities: {
          section: "Section 05",
          title: "Extra activities",
          items: [
            {
              title: "Gaming",
              description:
                "I enjoy playing video games in my free time. It's a form of entertainment, relaxation, and also a way to connect with friends and online communities.",
            },
            {
              title: "Gardening",
              description:
                "I enjoy taking care of plants and maintaining my garden with a variety of fruit plants and vegetables. I enjoy the outdoors in a more relaxed way and the routine of care.",
            },
          ],
        },
        projects: {
          section: "Section 06",
          title: "Featured projects",
          summary:
            "A brief overview of some of the projects I've worked on.",
          visualLabel: "Referential image for the project",
          outcomeLabel: "Outcome",
          linkLabel: "View project",
          items: [
            {
              name: "AppGro",
              type: "Portfolio / Product / Internal Tool / Open Source",
              stack: "PHP, MySQL, JavaScript, HTML, CSS",
              outcome: "Completion of systems analysis degree, satisfied client.",
              description:
                "AppGro is a comprehensive project management tool designed to streamline workflows and enhance team collaboration. It offers features such as task tracking, resource management, and real-time reporting, helping teams stay organized and efficient.",
              href: "https://github.com/Dario849/AppGro",
            },
            {
              name: "QR Pass",
              type: "Internal Tool / Product / Open Source",
              stack: "JavaScript, HTML, CSS, QR generation and scanning libraries, PostgreSQL",
              outcome: "In the process of documenting architecture and functionalities, learning new technologies.",
              description:
                "QR Pass is a web application that allows generating and scanning QR codes to facilitate and record access to buildings. The application allows users to generate unique QR codes for each visitor, which can be scanned at the building entrance to quickly and securely record their access, without the need for physical cards or traditional access control systems. It enables keeping a digital record of accesses, improving security and efficiency in visitor management.",
              href: "https://github.com/Dario849/QRpassport",
            },
            {
              name: "Android Mic",
              type: "Open Source / Internal Tool",
              stack: "React Native, Java, Kotlin, audio processing libraries, Android SDK",
              outcome: "Accessibility to an external microphone for Android users, learning mobile development and audio processing.",
              description:
                "Built by me and for me, Android Mic is a mobile application that turns your Android phone into an external microphone for your computer. The app connects via Wi-Fi or USB, allowing you to transmit high-quality audio from your phone to your computer, which is ideal for video calls, recordings, or streaming. It's an accessible solution for those who need an external microphone but don't want to invest in additional hardware.",
              href: "https://github.com/Dario849/AndroidMic",
            },
          ],
        },
        aspirations: {
          section: "Section 07",
          title: "Aspirations",
          summary:
            "My main aspiration is to live as a professional within the world of technology, and who knows, maybe in the future I can live retired in the countryside away from the city, meanwhile, I try to keep up to date and improving to be able to grow professionally. Some other of my dreams would be to be part of or be creator of a real product, that contributes to humanity.",
          goalLabel: "Goal",
          items: [
            "Working within a consulting firm, IT agency, or startup that allows me to grow, learn, and contribute value through my technical and analytical skills.",
            "Helping a multi-disciplinary team build a product that makes a positive difference in people's lives.",
            "Getting to a place where I can live comfortably, with financial and emotional stability, enjoying my hobbies and interests.",
          ],
        },
        contact: {
          section: "Section 08",
          title: "Contact & next conversation",
          summary:
            "You can reach out to me through the following channels.",
          calltoAction: "Contact me",
          items: [
            { label: "Email", value: "dariorodriguez7810@gmail.com", href: "mailto:dariorodriguez7810@gmail.com" },
            { label: "GitHub", value: "Dario849", href: "https://github.com/Dario849" },
            { label: "LinkedIn", value: "Darío Rodríguez", href: "https://www.linkedin.com/in/dario-rodriguez/" },
            { label: "Website", value: "My Portfolio", href: "https://dario849.github.io/" },
          ],
        },
        footer: {
          identity: "Dario Rodríguez / Functional Analyst & IT Technician / Available full-time",
          edition: "{{date}} Last edition",
        },
      },
    },
  },
  es: {
    translation: {
      site: {
        metadata: {
          title: "Darío | Analísta funcional técnico",
          description:
            "Este es un blog detallado sobre mí para Darío, un Analísta funcional técnico. Explora el fondo, la experiencia laboral, el enfoque actual, los hobbies y las aspiraciones de Darío en este archivo personal que ofrece una vista completa de quién es, lo que construye y hacia dónde va.",
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
          subtitle: "Conoceme mejor que un currículum",
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
          status: "En línea//",
          identity: "Darío / Analísta funcional & técnico de IT",
          title: {
            start: "Un registro vivo de",
            highlight: "quién soy,",
            end: " y hacia dónde voy.",
          },
          bio:
            "Hola, soy Darío, un Analísta funcional & técnico de IT. Me gusta construir cosas, explorar nuevas tecnologías, la música, el café y más.",
          primaryCta: "Ver trabajo destacado",
          secondaryCta: "Contacto provisional",
          quickFacts: [
            { label: "Base", value: "Villa Lynch, San Martín, Buenos Aires, Argentina" },
            { label: "Enfoque", value: "Conseguir un trabajo, aprender nuevas tecnologías y vivir la vida al máximo" },
            { label: "Disponibilidad", value: "Disponible para nuevas oportunidades, completamente comprometido con el crecimiento personal y profesional" },
          ],
        },
        snapshot: {
          eyebrow: "Panorama",
          title: "De un vistazo",
          items: [
            {
              label: "Prioridad actual",
              value: "Aprender a lidiar con el mundo acelerado de la tecnología mientras mantengo una vida equilibrada y satisfactoria.",
            },
            {
              label: "Aprendizaje",
              value: "Mejorando mis habilidades en análisis funcional y técnicas de IT.",
            },
            {
              label: "Fuera del trabajo",
              value: "Disfruto de la música, el café, y explorar nuevas tecnologías en mi tiempo libre.",
            },
          ],
        },
        prompt: {
          eyebrow: "Punto de escritura",
          quote:
            "\"Persevera y triunfarás\"",
        },
        about: {
          section: "Sección 01",
          title: "Sobre mí",
          summary:
            "Crecí en Buenos Aires, Argentina, y desde joven me fascinó cómo las cosas funcionan detrás de escena. Empecé a construir mi propio PC a los 15 años, lo que me llevó a estudiar informática y análisis de sistemas. Me apasiona resolver problemas complejos, aprender nuevas tecnologías y crear soluciones que tengan un impacto positivo. Valoro la claridad, la colaboración y el crecimiento continuo, tanto en mi vida profesional como personal.",
          cards: [
            {
              title: "Fortalezas",
              description:
                "resolución de problemas, comunicación, adaptabilidad, documentación, pensamiento de producto.",
            },
            {
              title: "Herramientas preferidas",
              description:
                "Astro, React, Tailwind, Node.js, PHP, Python, Windows, etc.",
            },
            {
              title: "Estilo de trabajo",
              description:
                "Colaboro con amigos y conocidos, aprendo continuamente, documento procesos, organizo tareas y apoyo a otras personas.",
            },
            {
              title: "Lo que me importa",
              description:
                "claridad, consistencia, sistemas útiles, experiencias accesibles, crecimiento, ejecución serena.",
            },
          ],
        },
        experience: {
          section: "Sección 02",
          title: "Experiencia laboral",
          cta: "[Abierto a conversaciones]",
          items: [
            {
              period: "[May 2025 - Presente]",
              role: "Independiente / Proyectos personales",
              company: "Freelance y proyectos propios",
              summary:
                "Actualmente me dedico a construir proyectos personales y ofrecer ayuda a conocidos y amigos. Esto me permite aplicar mis habilidades, aprender nuevas tecnologías y mantenerme activo en la comunidad tecnológica mientras busco oportunidades profesionales que se alineen con mis aspiraciones.",
              wins: [
                "Autodidactismo y proactividad para aprender y construir proyectos de manera independiente, lo que me ha permitido desarrollar habilidades técnicas y de gestión de proyectos sin depender de un entorno laboral formal.",
                "Mi proyecto más actual y favorito es Android Mic, descubrí React Native, y elaboré un producto finalizado, redacté documentación técnica y creé accesibilidad para todos los usuarios, y lo publiqué como código abierto para que otros puedan usarlo.",
              ],
            },
            {
              period: "[Jul 2023 - May 2025]",
              role: "Soporte técnico IT junior",
              company: "Oficina de callcenter para cliente anónimo en San Isidro",
              summary:
                "Brindaba soporte técnico de primer nivel dentro de la oficina resolviendo problemas de hardware y software para los empleados. También gestión y resolución de problemas de SaaS como CRM, hojas de cálculo, correo electrónico y herramientas de comunicación interna.(bajo contrato informal)",
              wins: [
                "Desarrollo de habilidades técnicas en soporte IT, incluyendo diagnóstico de problemas, resolución de conflictos y gestión de herramientas SaaS, lo que me permitió brindar un soporte eficiente y mejorar la experiencia tecnológica de los empleados.",
                "Colaboración y comunicación efectiva con equipos técnicos y no técnicos, lo que contribuyó a resolver problemas de manera rápida y a mantener un ambiente de trabajo productivo.",
              ],
            },
            {
              period: "[Mar 2022 - Nov 2022]",
              role: "Atención al cliente",
              company: "Fiambrería y Quesería Don Navarro",
              summary:
                "Atendía a los clientes, gestionaba pedidos, realizaba entregas a domicilio por la zona, realizaba limpieza y control de stock.(bajo contrato informal)",
              wins: [
                "Trato con clientes de forma amable y eficiente, asegurando su satisfacción y fidelidad.",
                "Manejo de maquinaria específica del rubro y mantenimiento de la limpieza e higiene del local, cumpliendo con los estándares de calidad y seguridad alimentaria.",
              ],
            },
          ],
        },
        rhythm: {
          section: "Sección 03",
          title: "Horario real / ritmo actual",
          summary:
            "Mi día atualmente está estructurado en bloques de tiempo dedicados a diferentes actividades. Paso la mayor parte de mi semana trabajando en proyectos de IT, aprendiendo nuevas tecnologías y manteniendome actualizado en noticias tecnológicas. Actualmente dedico gran parte del tiempo a mis hobbies e intereses para mantenerme motivado y creativo.",
          currentFocus: {
            intro: "Ahora mismo estoy enfocado en",
            focus: "independizarme y construir mis propios proyectos",
            middle: "mientras equilibro",
            balance: "mis hobbies e intereses",
            end: "y dedico tiempo cada semana a",
            learning: "Ciberseguridad, tecnologías en la nube, y mantenerme al día con las noticias tecnológicas.",
          },
          items: [
            {
              label: "Trabajo profundo",
              level: 4,
              detail:
                "Dedico mi enfoque semanal más fuerte al trabajo profundo, ya sea construyendo, estudiando, enviando proyectos, mentoreando o brindando soporte.",
            },
            {
              label: "Aprendizaje",
              level: 4,
              detail:
                "Actualmente estoy aprendiendo sobre nuevas tecnologías y herramientas de desarrollo, así como mejorando mis habilidades con el uso de la IA y productividad.",
            },
            {
              label: "Comunidad",
              level: 3,
              detail:
                "Me mantengo en contacto con amigos y conocidos que comparten mis intereses, colaborando en proyectos personales y compartiendo conocimientos y recursos para crecer juntos.",
            },
            {
              label: "Recuperación",
              level: 4,
              detail:
                "Dedico tiempo a actividades que me permiten descansar, recargar energías y mantener un equilibrio saludable entre trabajo y vida personal.",
            },
          ],
        },
        hobbies: {
          section: "Sección 04",
          title: "Hobbies e intereses",
          visualLabel: "Imagen referencial del hobby",
          items: [
            {
              title: "Barista aficionado",
              description:
                "Me encanta el café y disfruto experimentando con diferentes métodos de preparación, granos y técnicas para crear la taza perfecta. Amo poder compartir esta pasión con amigos y familiares, y siempre estoy buscando nuevas formas de mejorar mis habilidades como barista casero.",
            },
            {
              title: "Gimnasio",
              description:
                "Disfruto mantenerme en forma y cuidar mi salud física a través del ejercicio regular en el gimnasio. Es una buena forma de liberar el estrés y rematar el día (o empezar el día).",
            },
            {
              title: "Bajista",
              description:
                "Practiqué bajo eléctrico durante varios años, lo que me permitió desarrollar habilidades musicales, disciplina y creatividad. Aunque no lo hago profesionalmente, la música es una parte importante de mi vida.",
            },
          ],
        },
        activities: {
          section: "Sección 05",
          title: "Actividades extra",
          items: [
            {
              title: "Gaming",
              description:
                "Disfruto jugar videojuegos en mi tiempo libre. Es una forma de entretenimiento, relajación y también de conectar con amigos y comunidades en línea.",
            },
            {
              title: "Jardinería",
              description:
                "Disfruto cuidar de las plantas y mantener el jardín con una variedad de plantas frutales y verduras. Disfruto del aire libre de una manera más relajada y la rutina del cuidado.",
            },
          ],
        },
        projects: {
          section: "Sección 06",
          title: "Proyectos destacados",
          summary:
            "Un breve resumen de algunos de los proyectos en los que he trabajado.",
          visualLabel: "Imagen referencial del proyecto",
          outcomeLabel: "Resultado",
          linkLabel: "Ver proyecto",
          items: [
            {
              name: "AppGro",
              type: "Código abierto / Producto / Herramienta interna",
              stack: "PHP, MySQL, JavaScript, HTML, CSS",
              outcome: "Finalización de la carrera de análisis de sistemas, cliente satisfecho.",
              description:
                "Appgro proviene de la necesidad de un cliente dueño de un capo agrícola de llevar un control digital de su producción. La aplicación permite gestionar cultivos, registrar actividades diarias, controlar inventarios y generar reportes personalizados para optimizar la producción agrícola, sin necesidad de pilas de papeles o conocimientos técnicos avanzados.",
              href: "https://github.com/Dario849/AppGro",
            },
            {
              name: "QR Pass",
              type: "Herramienta interna / Producto / Código abierto",
              stack: "JavaScript, HTML, CSS, librerías de generación y escaneo de QR, PostgreSQL",
              outcome: "En proceso de documentación de arquitectura y funcionalidades, aprendizaje de nuevas tecnologías.",
              description:
                "QR Pass es una aplicación web que permite generar y escanear códigos QR para facilitar y registrar el acceso a edificios. La aplicación permite a los usuarios generar códigos QR únicos para cada visitante, que pueden ser escaneados en la entrada del edificio para registrar su acceso de manera rápida y segura, sin necesidad de tarjetas físicas o sistemas de control de acceso tradicionales. Posibilita llevar un registro digital de los accesos, mejorando la seguridad y la eficiencia en la gestión de visitantes.",
              href: "https://github.com/Dario849/QRpassport",
            },
            {
              name: "Android Mic",
              type: "Código abierto / Herramienta interna",
              stack: "React Native, Java, Kotlin, librerías de procesamiento de audio, Android SDK",
              outcome: "Accesibilidad a un micrófono externo para usuarios de Android, aprendizaje de desarrollo móvil y procesamiento de audio.",
              description:
                "Desarrollado por mí y para mí, Android Mic es una aplicación móvil que convierte tu teléfono Android en un micrófono externo para tu computadora. La aplicación se conecta a través de Wi-Fi o USB, permitiendo transmitir audio de alta calidad desde el teléfono a la computadora, lo que es ideal para videollamadas, grabaciones o streaming. Es una solución accesible para quienes necesitan un micrófono externo pero no quieren invertir en hardware adicional.",
              href: "https://github.com/Dario849/AndroidMic",
            },
          ],
        },
        aspirations: {
          section: "Sección 07",
          title: "Aspiraciones",
          summary:
            "Mi sueño es vivir como profesional dentro del mundo de la tecnología, y quien sabe, quizá en un futuro pueda vivir retirado en el campo lejos de la ciudad, mientras tanto, me intento mantener al día y mejorando para poder crecer profesionalmente. Algunos otros de mis sueños serían poder formar parte o ser creador de un producto real, que aporte a la humanidad.",
          goalLabel: "Meta",
          items: [
            "Trabajar dentro de una empresa de consultoría, agencia de IT o startup que me permita crecer, aprender y aportar valor a través de mis habilidades técnicas y de análisis.",
            "Explotar al máximo las nuevas herramientas de IA para mejorar mi productividad, aprender nuevas tecnologías y construir proyectos personales que me apasionan.",
            "Vivir tranquilo, con estabilidad económica y emocional, disfrutando de mis hobbies e intereses.",
          ],
        },
        contact: {
          section: "Sección 08",
          title: "Contacto y próxima conversación",
          summary:
            "La mejor forma de contactarme es enviándome un correo electrónico. También tengo LinkedIn, y GitHub.",
          calltoAction: "Contactame",
          items: [
            { label: "Correo", value: "dariorodriguez7810@gmail.com", href: "mailto:dariorodriguez7810@gmail.com" },
            { label: "GitHub", value: "Dario849", href: "https://github.com/Dario849" },
            { label: "LinkedIn", value: "Dario Rodriguez", href: "https://www.linkedin.com/in/devdariorodriguez/" },
            { label: "Sitio web", value: "Mi Portafolio", href: "https://dario849.github.io/github-portfolio/" },
          ],
        },
        footer: {
          identity: "Darío Rodríguez / Analísta funcional & técnico de IT / Disponible full-time",
          edition: "{{date}} última edición",
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

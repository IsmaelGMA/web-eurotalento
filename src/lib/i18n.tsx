import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = {
  nav: { servicios: string; enfoque: string; contacto: string; toggleAria: string };
  hero: { title: string; body: string; tagline: string; cta: string };
  servicios: {
    section1: {
      eyebrow: string;
      title: string;
      p1: string;
      p2: string;
      big: string;
    };
    section2: {
      eyebrow: string;
      title: string;
      subtitle: string;
      p1: string;
      items: string[];
    };
    section3: {
      eyebrow: string;
      title: string;
      p1: string;
      areasLabel: string;
    };
  };
  areas: { eyebrow: string; title: string }[];
  clientes: { eyebrow: string; title: string };
  enfoque: { eyebrow: string; phrase: ReactNode };
  contacto: {
    eyebrow: string;
    title: string;
    body: string;
    thanks: string;
    thanksBody: string;
    sendAnother: string;
    fields: {
      nombre: string;
      empresa: string;
      email: string;
      telefono: string;
      servicio: string;
      mensaje: string;
      selectPlaceholder: string;
      optSeleccion: string;
      optTuhr: string;
      optFormacion: string;
      optOtro: string;
      rgpd: ReactNode;
      submit: string;
    };
    errors: {
      nombre: string;
      empresa: string;
      email: string;
      emailInvalid: string;
      servicio: string;
      mensaje: string;
      rgpd: string;
    };
  };
  footer: { tagline: string; privacy: string };
};

const es: Dict = {
  nav: { servicios: "Servicios", enfoque: "Enfoque", contacto: "Contacto", toggleAria: "Cambiar a inglés" },
  hero: {
    title: "El mejor talento para tu organización.",
    body: "Acompañamos a empresas a incorporar y gestionar talento, a ser tu Manager de RRHH externo a través del servicio de Interim Management, e impartimos formación a empresas, en formato In-Company o en abierto, para mejorar la productividad individual y de equipo, así como la empleabilidad de las personas.",
    tagline: "Ni más, ni menos.",
    cta: "Hablemos",
  },
  servicios: {
    section1: {
      eyebrow: "Servicios — 01",
      title: "Reclutamiento y selección de talento.",
      p1: "La incorporación de talento es un proceso clave de negocio con impacto directo en la cuenta de resultados. Si no lo lidera un profesional capaz de abordar todas las fases con garantías, la rentabilidad se resiente.",
      p2: "Hacemos búsquedas de Middle Management y Dirección para los sectores de Distribución/Retail y Gran Distribución, Gran Consumo, Hotel Management, Servicios y Banca.",
      big: "de adecuación persona/puesto, mediante tecnología en el reclutamiento y técnicas de evaluación precisas.",
    },
    section2: {
      eyebrow: "Servicios — 02",
      title: "tuHR®",
      subtitle: "Dirección Interina de Recursos Humanos.",
      p1: "Un servicio clave para empresas que quieran abordar, de manera temporal, proyectos de distinto alcance:",
      items: [
        "Creación y puesta en marcha de la función de recursos humanos en organizaciones con un volumen de negocio y de personal que exija una gestión profesionalizada.",
        "Incorporación a tiempo parcial de un/a directivo/a de RRHH altamente cualificado/a para liderar la función.",
        "Diseño y puesta en marcha de un proyecto específico de gestión.",
        "Cobertura temporal de un/a directivo/a por sustitución o transición.",
        "Liderazgo de procesos de gestión del cambio estratégico, productivo o comercial.",
      ],
    },
    section3: {
      eyebrow: "Servicios — 03",
      title: "Formación In Company.",
      p1: "Diseñamos y ejecutamos acciones formativas ad hoc. Tras un trabajo de campo inicial donde ahondamos en la necesidad concreta, desarrollamos las sesiones y los casos prácticos poniendo en valor la casuística de la empresa y la experiencia de nuestros consultores.",
      areasLabel: "Áreas",
    },
  },
  areas: [
    { eyebrow: "Liderazgo", title: "Habilidades directivas" },
    { eyebrow: "Ventas", title: "Habilidades comerciales" },
    { eyebrow: "Habilidades digitales", title: "IA aplicada en reclutamiento y selección" },
    { eyebrow: "Desarrollo de talento", title: "Evaluación y técnicas de desarrollo" },
    { eyebrow: "PYMEs", title: "Gestión digital de RRHH" },
    { eyebrow: "Carrera", title: "Mentoring de carrera y empleo" },
    { eyebrow: "Escuelas de negocio", title: "Empleabilidad, gestión de carrera y orientación ejecutiva y laboral" },
  ],
  clientes: { eyebrow: "Confianza", title: "Algunos de nuestros clientes." },
  enfoque: {
    eyebrow: "Enfoque",
    phrase: (
      <>
        Conocimiento <span style={{ color: "#d68a63" }}>+</span> 25 años de experiencia en RRHH y entornos internacionales{" "}
        <span style={{ color: "#d68a63" }}>+</span> tecnología <span style={{ color: "#d68a63" }}>+</span> investigación{" "}
        <span style={{ color: "#d68a63" }}>=</span> soluciones «ad hoc» con impacto real en el negocio.
      </>
    ),
  },
  contacto: {
    eyebrow: "Contacto",
    title: "Hablemos.",
    body: "Cuéntanos qué necesitas. Te responderemos con una propuesta clara, sin rodeos.",
    thanks: "Gracias.",
    thanksBody: "Te responderemos lo antes posible.",
    sendAnother: "Enviar otro mensaje",
    fields: {
      nombre: "Nombre y apellidos",
      empresa: "Empresa",
      email: "Email",
      telefono: "Teléfono (opcional)",
      servicio: "Servicio de interés",
      mensaje: "Mensaje",
      selectPlaceholder: "Selecciona una opción",
      optSeleccion: "Reclutamiento y selección",
      optTuhr: "tuHR® — Dirección interina de RRHH",
      optFormacion: "Formación In Company",
      optOtro: "Otro",
      rgpd: (
        <>
          He leído y acepto la{" "}
          <a href="#privacidad" style={{ textDecoration: "underline" }}>
            política de privacidad
          </a>{" "}
          y el tratamiento de mis datos conforme al RGPD.
        </>
      ),
      submit: "Enviar",
    },
    errors: {
      nombre: "Indica tu nombre y apellidos.",
      empresa: "Indica el nombre de tu empresa.",
      email: "Indica tu email.",
      emailInvalid: "Introduce un email válido.",
      servicio: "Selecciona un servicio.",
      mensaje: "Cuéntanos brevemente tu necesidad.",
      rgpd: "Debes aceptar la política de privacidad.",
    },
  },
  footer: { tagline: "Estudio de Consultoría", privacy: "Política de privacidad" },
};

const en: Dict = {
  nav: { servicios: "Services", enfoque: "Approach", contacto: "Contact", toggleAria: "Switch to Spanish" },
  hero: {
    title: "The best talent for your organization.",
    body: "We help companies hire the best talent, build and develop the HR function from the ground up through our Interim Management service, and deliver training to improve individual and team productivity.",
    tagline: "Nothing more, nothing less.",
    cta: "Let's talk",
  },
  servicios: {
    section1: {
      eyebrow: "Services — 01",
      title: "Talent recruitment & selection.",
      p1: "Bringing in talent is a core business process with a direct impact on the bottom line. Without a professional capable of leading every stage with confidence, profitability suffers.",
      p2: "We run Middle Management and Executive searches for Retail and Mass Distribution, FMCG, Hotel Management, Services and Banking.",
      big: "person-role fit, through recruitment technology and precise assessment techniques.",
    },
    section2: {
      eyebrow: "Services — 02",
      title: "tuHR®",
      subtitle: "Interim HR Management.",
      p1: "A key service for companies that need to tackle projects of different scope on a temporary basis:",
      items: [
        "Setting up and launching the HR function in organizations whose size and headcount demand professional management.",
        "Part-time onboarding of a highly qualified HR leader to run the function.",
        "Design and roll-out of a specific management project.",
        "Temporary coverage of a leadership role for replacement or transition.",
        "Leading strategic, operational or commercial change-management processes.",
      ],
    },
    section3: {
      eyebrow: "Services — 03",
      title: "In-Company Training.",
      p1: "We design and deliver bespoke training. After an initial discovery phase to deeply understand the need, we build sessions and case studies that draw on the company's reality and our consultants' experience.",
      areasLabel: "Areas",
    },
  },
  areas: [
    { eyebrow: "Leadership", title: "Management skills" },
    { eyebrow: "Sales", title: "Commercial skills" },
    { eyebrow: "Digital skills", title: "AI applied to recruitment & selection" },
    { eyebrow: "Talent development", title: "Assessment and development techniques" },
    { eyebrow: "SMEs", title: "Digital HR management" },
    { eyebrow: "Career", title: "Career and employability mentoring" },
    { eyebrow: "Business schools", title: "Employability, career management and executive & job orientation" },
  ],
  clientes: { eyebrow: "Trust", title: "Some of our clients." },
  enfoque: {
    eyebrow: "Approach",
    phrase: (
      <>
        Knowledge <span style={{ color: "#d68a63" }}>+</span> 25 years of HR experience in international environments{" "}
        <span style={{ color: "#d68a63" }}>+</span> technology <span style={{ color: "#d68a63" }}>+</span> research{" "}
        <span style={{ color: "#d68a63" }}>=</span> bespoke solutions with real business impact.
      </>
    ),
  },
  contacto: {
    eyebrow: "Contact",
    title: "Let's talk.",
    body: "Tell us what you need. We'll get back to you with a clear, no-nonsense proposal.",
    thanks: "Thank you.",
    thanksBody: "We'll get back to you as soon as possible.",
    sendAnother: "Send another message",
    fields: {
      nombre: "Full name",
      empresa: "Company",
      email: "Email",
      telefono: "Phone (optional)",
      servicio: "Service of interest",
      mensaje: "Message",
      selectPlaceholder: "Select an option",
      optSeleccion: "Recruitment & selection",
      optTuhr: "tuHR® — Interim HR Management",
      optFormacion: "In-Company Training",
      optOtro: "Other",
      rgpd: (
        <>
          I have read and accept the{" "}
          <a href="#privacidad" style={{ textDecoration: "underline" }}>
            privacy policy
          </a>{" "}
          and the processing of my data under GDPR.
        </>
      ),
      submit: "Send",
    },
    errors: {
      nombre: "Please enter your full name.",
      empresa: "Please enter your company name.",
      email: "Please enter your email.",
      emailInvalid: "Please enter a valid email.",
      servicio: "Please select a service.",
      mensaje: "Briefly tell us what you need.",
      rgpd: "You must accept the privacy policy.",
    },
  },
  footer: { tagline: "Consulting Studio", privacy: "Privacy policy" },
};

const DICTS: Record<Lang, Dict> = { es, en };

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void; toggle: () => void };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "es" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LangContext.Provider value={{ lang, t: DICTS[lang], setLang, toggle }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

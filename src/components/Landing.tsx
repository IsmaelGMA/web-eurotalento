import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "#1d1d1f" : "#ffffff";
  const subColor = tone === "dark" ? "#6e6e73" : "#86868b";
  return (
    <span className="inline-flex items-baseline gap-2">
      <span
        style={{
          color,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontSize: 18,
        }}
      >
        COREbusiness
      </span>
      <span aria-hidden="true" style={{ color: subColor, fontSize: 14 }}>
        —
      </span>
      <span
        className="hidden sm:inline"
        style={{
          color: subColor,
          fontSize: 13,
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        Estudio de Consultoría
      </span>
    </span>
  );
}

function HeroLogo() {
  // Wordmark grande para el hero (placeholder hasta que se suba el PNG del logo).
  return (
    <div className="flex flex-col items-center gap-3">
      <span
        style={{
          color: "#ffffff",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          fontSize: "clamp(34px, 5vw, 48px)",
          lineHeight: 1,
        }}
      >
        COREbusiness
      </span>
      <span
        style={{
          color: "#86868b",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
        }}
      >
        Estudio de Consultoría
      </span>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#enfoque", label: "Enfoque" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.55)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        transition: "background-color 250ms ease, border-color 250ms ease",
      }}
    >
      <nav className="container-core flex h-14 items-center justify-between">
        <a href="#top" aria-label="COREbusiness inicio">
          <Wordmark />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] font-medium tracking-tight"
                style={{ color: "#1d1d1f", transition: "opacity 150ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <div className="relative h-3 w-5">
            <span
              className="absolute left-0 right-0 h-px bg-black transition-transform"
              style={{ top: open ? "50%" : 0, transform: open ? "translateY(-50%) rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 right-0 h-px bg-black transition-transform"
              style={{ bottom: open ? "50%" : 0, transform: open ? "translateY(50%) rotate(-45deg)" : "none" }}
            />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90" style={{ backdropFilter: "blur(20px)" }}>
          <ul className="container-core flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 text-[15px] font-medium"
                  style={{ color: "#1d1d1f" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center px-6 pt-24 pb-20"
      style={{ background: "#000000", color: "#ffffff" }}
    >
      <div className="container-core flex flex-col items-center text-center">
        <div className="reveal">
          <HeroLogo />
        </div>
        <h1
          className="h-display reveal mt-14 max-w-[18ch]"
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            color: "#ffffff",
          }}
        >
          El mejor talento para tu organización.
        </h1>
        <p
          className="reveal body-lg mt-7 max-w-[58ch]"
          style={{ color: "#86868b" }}
        >
          Acompañamos a empresas a incorporar el mejor talento, a crear y desarrollar la función de
          recursos humanos a través del Interim Management, e impartimos formación que mejora la
          productividad y genera bienestar laboral.
        </p>
        <p
          className="reveal mt-6 italic"
          style={{ color: "#ffffff", fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Ni más, ni menos.
        </p>
        <div className="reveal mt-12">
          <a href="#contacto" className="btn-core btn-light">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow" style={{ color: "#b55a30" }}>
      {children}
    </span>
  );
}

function ServiceBlock({
  bg,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  bg: "white" | "alt";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      className="px-6 py-28 md:py-36"
      style={{ background: bg === "white" ? "#ffffff" : "#f5f5f7" }}
    >
      <div className="container-core grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5 reveal">
          {eyebrow && (
            <div className="mb-4">
              <SectionLabel>{eyebrow}</SectionLabel>
            </div>
          )}
          <h2
            className="h-display"
            style={{ fontSize: "clamp(32px, 4.4vw, 52px)", color: "#1d1d1f" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-4"
              style={{ color: "#6e6e73", fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em" }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="md:col-span-7 reveal">{children}</div>
      </div>
    </section>
  );
}

function BigNumber() {
  return (
    <div
      className="reveal mt-20 flex flex-col items-center text-center"
      aria-label="95% de adecuación persona/puesto"
    >
      <span
        style={{
          color: "#1d1d1f",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          fontSize: "clamp(120px, 20vw, 240px)",
          lineHeight: 0.9,
        }}
      >
        95%
      </span>
      <p
        className="mt-6 max-w-[44ch]"
        style={{ color: "#6e6e73", fontSize: 15, lineHeight: 1.6 }}
      >
        de adecuación persona/puesto, mediante tecnología en el reclutamiento y técnicas de
        evaluación precisas.
      </p>
    </div>
  );
}

function CleanList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 divide-y" style={{ borderColor: "#e5e5e7" }}>
      {items.map((t, i) => (
        <li
          key={i}
          className="flex gap-6 py-6"
          style={{ borderTop: i === 0 ? "1px solid #e5e5e7" : undefined, borderBottom: i === items.length - 1 ? "1px solid #e5e5e7" : undefined }}
        >
          <span
            style={{
              color: "#6e6e73",
              fontVariantNumeric: "tabular-nums",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              minWidth: 28,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p style={{ color: "#1d1d1f", fontSize: 17, lineHeight: 1.6 }}>{t}</p>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-3">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full px-4 py-2"
          style={{
            background: "#ffffff",
            border: "1px solid #e5e5e7",
            color: "#1d1d1f",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Servicios() {
  return (
    <div id="servicios">
      <ServiceBlock
        bg="white"
        eyebrow="Servicios — 01"
        title="Reclutamiento y selección de talento."
      >
        <p className="body-lg" style={{ color: "#1d1d1f" }}>
          La incorporación de talento es un proceso clave de negocio con impacto directo en la
          cuenta de resultados. Si no lo lidera un profesional capaz de abordar todas las fases con
          garantías, la rentabilidad se resiente.
        </p>
        <p className="body-lg mt-5" style={{ color: "#6e6e73" }}>
          Hacemos búsquedas de Middle Management y Dirección para los sectores de
          Distribución/Retail y Gran Distribución, Gran Consumo, Hotel Management, Servicios y
          Banca.
        </p>
        <BigNumber />
      </ServiceBlock>

      <ServiceBlock
        bg="alt"
        eyebrow="Servicios — 02"
        title="tuHR®"
        subtitle="Dirección Interina de Recursos Humanos."
      >
        <p className="body-lg" style={{ color: "#1d1d1f" }}>
          Un servicio clave para empresas que quieran abordar, de manera temporal, proyectos de
          distinto alcance:
        </p>
        <CleanList
          items={[
            "Creación y puesta en marcha de la función de recursos humanos en organizaciones con un volumen de negocio y de personal que exija una gestión profesionalizada.",
            "Incorporación a tiempo parcial de un/a directivo/a de RRHH altamente cualificado/a para liderar la función.",
            "Diseño y puesta en marcha de un proyecto específico de gestión.",
            "Cobertura temporal de un/a directivo/a por sustitución o transición.",
            "Liderazgo de procesos de gestión del cambio estratégico, productivo o comercial.",
          ]}
        />
      </ServiceBlock>

      <ServiceBlock
        bg="white"
        eyebrow="Servicios — 03"
        title="Formación In Company."
      >
        <p className="body-lg" style={{ color: "#1d1d1f" }}>
          Diseñamos y ejecutamos acciones formativas ad hoc. Tras un trabajo de campo inicial donde
          ahondamos en la necesidad concreta, desarrollamos las sesiones y los casos prácticos
          poniendo en valor la casuística de la empresa y la experiencia de nuestros consultores.
        </p>
        <div className="mt-8">
          <SectionLabel>Áreas</SectionLabel>
        </div>
        <Chips
          items={[
            "Habilidades directivas",
            "Habilidades comerciales",
            "Habilidades digitales · IA en reclutamiento y selección",
            "Desarrollo de talento y gestión de la formación",
            "Gestión digital de RRHH para PYMEs",
            "Mentoring de carrera y empleo",
            "Empleabilidad para escuelas de negocio",
          ]}
        />
      </ServiceBlock>
    </div>
  );
}

function Enfoque() {
  return (
    <section
      id="enfoque"
      className="px-6 py-36 md:py-48"
      style={{ background: "#000000", color: "#ffffff" }}
    >
      <div className="container-core flex flex-col items-center gap-20 text-center">
        <div className="reveal">
          <SectionLabel>
            <span style={{ color: "#86868b" }}>Enfoque</span>
          </SectionLabel>
        </div>
        <div className="reveal flex flex-col items-center gap-5">
          <span
            style={{
              color: "#86868b",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            Selección de talento
          </span>
          <p
            className="h-display max-w-[28ch]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", color: "#ffffff" }}
          >
            No trabajamos a éxito. Entendemos la relación con el cliente como la de un socio
            estratégico, donde el compromiso de ambas partes garantiza el cumplimiento de los
            objetivos.
          </p>
        </div>
        <div className="reveal flex flex-col items-center gap-5">
          <span
            style={{
              color: "#86868b",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            Formación In Company
          </span>
          <p
            className="h-display max-w-[28ch]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", color: "#ffffff" }}
          >
            No trabajamos con quien solo quiere gastar su presupuesto de formación. Sin compromiso y
            voluntad de mejora, preferimos no actuar.
          </p>
        </div>
      </div>
    </section>
  );
}

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  rgpd: boolean;
};

const EMPTY: FormState = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  servicio: "",
  mensaje: "",
  rgpd: false,
};

function Field({
  label,
  htmlFor,
  error,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="eyebrow" style={{ color: "#6e6e73" }}>
        {label}
      </label>
      {children}
      {hint && !error && (
        <span style={{ color: "#6e6e73", fontSize: 12 }}>{hint}</span>
      )}
      {error && (
        <span role="alert" style={{ color: "#b00020", fontSize: 12 }}>
          {error}
        </span>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #d2d2d7",
  borderRadius: 8,
  padding: "14px 16px",
  fontSize: 16,
  color: "#1d1d1f",
  width: "100%",
  fontFamily: "inherit",
};

function Contacto() {
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const validate = (s: FormState) => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!s.nombre.trim()) e.nombre = "Indica tu nombre y apellidos.";
    if (!s.empresa.trim()) e.empresa = "Indica el nombre de tu empresa.";
    if (!s.email.trim()) e.email = "Indica tu email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim()))
      e.email = "Introduce un email válido.";
    if (!s.servicio) e.servicio = "Selecciona un servicio.";
    if (!s.mensaje.trim()) e.mensaje = "Cuéntanos brevemente tu necesidad.";
    if (!s.rgpd) e.rgpd = "Debes aceptar la política de privacidad.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // TODO: enviar a backend / servicio email
      setDone(true);
      setData(EMPTY);
      formRef.current?.reset();
    }
  };

  return (
    <section id="contacto" className="px-6 py-28 md:py-36" style={{ background: "#f5f5f7" }}>
      <div className="container-core">
        <div className="reveal text-center">
          <SectionLabel>Contacto</SectionLabel>
          <h2
            className="h-display mt-5"
            style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "#1d1d1f" }}
          >
            Hablemos.
          </h2>
          <p className="body-lg mt-5 mx-auto max-w-[52ch]" style={{ color: "#6e6e73" }}>
            Cuéntanos qué necesitas. Te responderemos con una propuesta clara, sin rodeos.
          </p>
        </div>

        {done ? (
          <div
            className="reveal mx-auto mt-16 max-w-[640px] rounded-xl bg-white p-12 text-center"
            style={{ border: "1px solid #e5e5e7" }}
            role="status"
            aria-live="polite"
          >
            <p
              className="h-display"
              style={{ fontSize: 28, color: "#1d1d1f" }}
            >
              Gracias.
            </p>
            <p className="mt-3" style={{ color: "#6e6e73", fontSize: 17 }}>
              Te responderemos lo antes posible.
            </p>
            <button
              type="button"
              onClick={() => setDone(false)}
              className="btn-core btn-dark mt-8"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            className="reveal mx-auto mt-16 grid max-w-[720px] gap-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nombre y apellidos" htmlFor="nombre" error={errors.nombre}>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  value={data.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  style={inputStyle}
                />
              </Field>
              <Field label="Empresa" htmlFor="empresa" error={errors.empresa}>
                <input
                  id="empresa"
                  type="text"
                  autoComplete="organization"
                  required
                  value={data.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  style={inputStyle}
                />
              </Field>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  style={inputStyle}
                />
              </Field>
              <Field label="Teléfono (opcional)" htmlFor="telefono">
                <input
                  id="telefono"
                  type="tel"
                  autoComplete="tel"
                  value={data.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                  style={inputStyle}
                />
              </Field>
            </div>

            <Field label="Servicio de interés" htmlFor="servicio" error={errors.servicio}>
              <select
                id="servicio"
                required
                value={data.servicio}
                onChange={(e) => update("servicio", e.target.value)}
                style={{ ...inputStyle, appearance: "none", backgroundImage: "linear-gradient(45deg, transparent 50%, #6e6e73 50%), linear-gradient(135deg, #6e6e73 50%, transparent 50%)", backgroundPosition: "calc(100% - 20px) 22px, calc(100% - 14px) 22px", backgroundSize: "6px 6px, 6px 6px", backgroundRepeat: "no-repeat" }}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="seleccion">Reclutamiento y selección</option>
                <option value="tuhr">tuHR® — Dirección interina de RRHH</option>
                <option value="formacion">Formación In Company</option>
                <option value="otro">Otro</option>
              </select>
            </Field>

            <Field label="Mensaje" htmlFor="mensaje" error={errors.mensaje}>
              <textarea
                id="mensaje"
                required
                rows={6}
                value={data.mensaje}
                onChange={(e) => update("mensaje", e.target.value)}
                style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
              />
            </Field>

            <div className="flex items-start gap-3 pt-2">
              <input
                id="rgpd"
                type="checkbox"
                checked={data.rgpd}
                onChange={(e) => update("rgpd", e.target.checked)}
                style={{ marginTop: 4, width: 18, height: 18, accentColor: "#000000" }}
              />
              <label htmlFor="rgpd" style={{ color: "#1d1d1f", fontSize: 14, lineHeight: 1.5 }}>
                He leído y acepto la{" "}
                <a href="#privacidad" style={{ textDecoration: "underline" }}>
                  política de privacidad
                </a>{" "}
                y el tratamiento de mis datos conforme al RGPD.
              </label>
            </div>
            {errors.rgpd && (
              <span role="alert" style={{ color: "#b00020", fontSize: 12, marginTop: -8 }}>
                {errors.rgpd}
              </span>
            )}

            <div className="pt-4">
              <button type="submit" className="btn-core btn-dark w-full md:w-auto">
                Enviar
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="px-6 py-16"
      style={{ background: "#000000", color: "#86868b" }}
    >
      <div className="container-core flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Wordmark tone="light" />
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#86868b",
            }}
          >
            Estudio de Consultoría
          </span>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 text-[13px]">
          <a href="#privacidad" style={{ color: "#86868b" }}>
            Política de privacidad
          </a>
          <span>© {new Date().getFullYear()} COREbusiness</span>
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  useReveal();
  return (
    <main lang="es">
      <Navbar />
      <Hero />
      <Servicios />
      <Enfoque />
      <Contacto />
      <Footer />
    </main>
  );
}

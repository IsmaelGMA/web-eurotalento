import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import eurotalentoLogoAsset from "@/assets/eurotalento-logo-07-verde.jpg.asset.json";
import { LangProvider, useLang } from "@/lib/i18n";

const EUROTALENTO_LOGO = eurotalentoLogoAsset.url;



function AreasGrid() {
  const { t } = useLang();
  return (
    <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {t.areas.map((a) => (
        <li
          key={a.title}
          className="group flex flex-col overflow-hidden rounded-[22px]"
          style={{
            background: "#f5f3ee",
            border: "1px solid #e5e5e7",
            transition: "transform 300ms ease, box-shadow 300ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(0,0,0,0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div className="px-6 pt-6">
            <span
              style={{
                color: "#b55a30",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              {a.eyebrow}
            </span>
            <h3
              className="mt-2"
              style={{
                color: "#5a5e4d",
                fontSize: 13.5,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                fontWeight: 300,
              }}
            >
              {a.title}
            </h3>
          </div>
          <div className="px-6 pb-6" />

        </li>
      ))}
    </ul>
  );
}


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
  const color = tone === "dark" ? "#6e6e73" : "#ffffff";
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
        Eurotalento
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

function LogoBand() {
  return (
    <section
      aria-label="Eurotalento · Estudio de Consultoría"
      className="px-6 py-6 md:py-8"
      style={{ background: "#ffffff" }}
    >
      <div className="container-core flex justify-center">
        <img
          src={EUROTALENTO_LOGO}
          alt="Eurotalento · Estudio de Consultoría"
          className="mx-auto block"
          style={{
            width: "100%",
            maxWidth: 720,
            height: "auto",
          }}
        />
      </div>
    </section>
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
        Eurotalento
      </span>
      <span
        style={{
          color: "#d68a63",
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

function LangToggle({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, toggle, t } = useLang();
  const color = tone === "dark" ? "#6e6e73" : "#ffffff";
  const border = tone === "dark" ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.4)";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.toggleAria}
      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[12px] font-semibold tracking-wide"
      style={{ color, border: `1px solid ${border}`, letterSpacing: "0.08em" }}
    >
      <span style={{ opacity: lang === "es" ? 1 : 0.45 }}>ES</span>
      <span aria-hidden="true" style={{ opacity: 0.5 }}>/</span>
      <span style={{ opacity: lang === "en" ? 1 : 0.45 }}>EN</span>
    </button>
  );
}

function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: t.nav.servicios },
    { href: "#enfoque", label: t.nav.enfoque },
    { href: "#contacto", label: t.nav.contacto },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.7)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        transition: "background-color 250ms ease, border-color 250ms ease",
      }}
    >
      <nav className="container-core flex h-14 items-center justify-between">
        <a href="#top" aria-label="Eurotalento" className="block h-6 w-6" />
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex items-center rounded-full px-4 py-1.5 text-[14px] font-medium tracking-tight"
                  style={{ backgroundColor: "#5a5e4d", color: "#ffffff", transition: "background-color 200ms ease, opacity 150ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4a4e3f")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5a5e4d")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
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
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5" style={{ backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)" }}>
          <ul className="container-core flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 text-[15px] font-medium"
                  style={{ color: "#6e6e73" }}
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
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center px-6 pt-24 pb-20"
      style={{ background: "#5a5e4d", color: "#f5f3ee" }}
    >
      <div className="container-core flex flex-col items-center text-center">
        <h1
          className="h-display reveal max-w-[18ch]"
          style={{ fontSize: "clamp(40px, 7vw, 72px)", color: "#ffffff" }}
        >
          {t.hero.title}
        </h1>
        <p className="reveal body-lg mt-7 max-w-[58ch]" style={{ color: "#eef0e8" }}>
          {t.hero.body}
        </p>
        <p
          className="reveal mt-6 italic"
          style={{ color: "#ffffff", fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          {t.hero.tagline}
        </p>
        <div className="reveal mt-12">
          <a href="#contacto" className="btn-core btn-dark">
            {t.hero.cta}
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
      style={{ background: bg === "white" ? "#ffffff" : "#eef0e8" }}
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
            style={{ fontSize: "clamp(32px, 4.4vw, 52px)", color: "#6e6e73" }}
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
  const { t } = useLang();
  return (
    <div
      className="reveal mt-20 flex flex-col items-center text-center"
      aria-label="95%"
    >
      <span
        style={{
          color: "#b55a30",
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
        {t.servicios.section1.big}
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
          <p style={{ color: "#6e6e73", fontSize: 17, lineHeight: 1.6 }}>{t}</p>
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
            color: "#6e6e73",
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
  const { t } = useLang();
  return (
    <div id="servicios">
      <ServiceBlock
        bg="white"
        eyebrow={t.servicios.section1.eyebrow}
        title={t.servicios.section1.title}
      >
        <p className="body-lg" style={{ color: "#6e6e73" }}>
          {t.servicios.section1.p1}
        </p>
        <p className="body-lg mt-5" style={{ color: "#6e6e73" }}>
          {t.servicios.section1.p2}
        </p>
        <BigNumber />
      </ServiceBlock>

      <ServiceBlock
        bg="alt"
        eyebrow={t.servicios.section2.eyebrow}
        title={t.servicios.section2.title}
        subtitle={t.servicios.section2.subtitle}
      >
        <p className="body-lg" style={{ color: "#6e6e73" }}>
          {t.servicios.section2.p1}
        </p>
        <CleanList items={t.servicios.section2.items} />
      </ServiceBlock>

      <ServiceBlock
        bg="white"
        eyebrow={t.servicios.section3.eyebrow}
        title={t.servicios.section3.title}
      >
        <p className="body-lg" style={{ color: "#6e6e73" }}>
          {t.servicios.section3.p1}
        </p>
        <div className="mt-8">
          <SectionLabel>{t.servicios.section3.areasLabel}</SectionLabel>
        </div>
        <AreasGrid />
      </ServiceBlock>
    </div>
  );
}


import avoltaLogo from "@/assets/clients/avolta.png.asset.json";
import wdfLogo from "@/assets/clients/world-duty-free.png.asset.json";
import konectaLogo from "@/assets/clients/konecta.png.asset.json";
import puntoformLogo from "@/assets/clients/puntoform.png.asset.json";
import gozoLogo from "@/assets/clients/gozo.png.asset.json";
import grykosLogo from "@/assets/clients/grykos.png.asset.json";
import vitalgranaLogo from "@/assets/clients/vitalgrana.png.asset.json";
import cinkLogo from "@/assets/clients/cink-venturing.png.asset.json";
import sherpaLogo from "@/assets/clients/sherpa-tribe.png.asset.json";
import rotorLogo from "@/assets/clients/rotor.png.asset.json";
import eoiLogo from "@/assets/clients/eoi.png.asset.json";
import indraLogo from "@/assets/clients/indra.png.asset.json";

type Cliente = { name: string; logo?: string };

const CLIENTES: Cliente[] = [
  { name: "Avolta", logo: avoltaLogo.url },
  { name: "World Duty Free", logo: wdfLogo.url },
  { name: "Grupo Konecta", logo: konectaLogo.url },
  { name: "Puntoform", logo: puntoformLogo.url },
  { name: "GOZO", logo: gozoLogo.url },
  { name: "GRYKOS", logo: grykosLogo.url },
  { name: "Vitalgrana", logo: vitalgranaLogo.url },
  { name: "Cink Venturing", logo: cinkLogo.url },
  { name: "Sherpa Tribe", logo: sherpaLogo.url },
  { name: "Rotor Bike Components", logo: rotorLogo.url },
  { name: "EOI Escuela de Organización Industrial", logo: eoiLogo.url },
  { name: "Indra", logo: indraLogo.url },
];

function Clientes() {
  const { t } = useLang();
  return (
    <section id="clientes" className="px-6 py-28 md:py-36" style={{ background: "#ffffff" }}>
      <div className="container-core">
        <div className="reveal text-center">
          <SectionLabel>{t.clientes.eyebrow}</SectionLabel>
          <h2
            className="h-display mt-5 mx-auto max-w-[24ch]"
            style={{ fontSize: "clamp(32px, 4.4vw, 52px)", color: "#6e6e73" }}
          >
            {t.clientes.title}
          </h2>
        </div>
        <ul
          className="reveal mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
          style={{
            border: "1px solid #e5e5e7",
            borderRadius: 22,
            overflow: "hidden",
            background: "#f5f3ee",
          }}
        >
          {CLIENTES.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-center"
              style={{
                minHeight: 140,
                borderRight: "1px solid #e5e5e7",
                borderBottom: "1px solid #e5e5e7",
                color: "#6e6e73",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                padding: "24px 16px",
                textAlign: "center",
              }}
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className={`w-auto object-contain ${
                    ["Avolta", "World Duty Free", "Grupo Konecta", "GOZO", "GRYKOS", "Rotor Bike Components", "EOI Escuela de Organización Industrial", "Indra"].includes(c.name)
                      ? "max-h-24"
                      : "max-h-16"
                  }`}
                />
              ) : (
                c.name
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}



function Enfoque() {
  const { t } = useLang();
  const phraseStyle = {
    fontSize: "clamp(28px, 3.6vw, 44px)",
    color: "#f5f3ee",
  };
  return (
    <section
      id="enfoque"
      className="px-6 py-36 md:py-48"
      style={{ background: "#5a5e4d", color: "#f5f3ee" }}
    >
      <div className="container-core flex flex-col items-center gap-20 text-center">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "#d68a63", letterSpacing: "0.2em" }}>
            {t.enfoque.eyebrow}
          </span>
        </div>
        <div className="reveal flex flex-col items-center gap-5">
          <p className="h-display max-w-[24ch]" style={phraseStyle}>
            {t.enfoque.phrase}
          </p>
        </div>
      </div>
    </section>
  );
}



function Contacto() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contacto"
      className="px-6 py-28 lg:px-10 lg:py-40"
      style={{ background: "#eef0e8" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p
            className="mb-6 text-[12px] uppercase tracking-[0.25em]"
            style={{ color: "#b55a30" }}
          >
            {t.contacto.eyebrow}
          </p>
          <h2
            className="text-[40px] font-light leading-[1.05] tracking-tight sm:text-[52px]"
            style={{ color: "#6e6e73" }}
          >
            {t.contacto.title}
          </h2>
          <p
            className="mt-6 max-w-md text-[16px] font-light leading-relaxed"
            style={{ color: "#6e6e73" }}
          >
            {t.contacto.body}
          </p>

          <dl className="mt-12 space-y-4 text-[14px]" style={{ color: "#6e6e73" }}>
            <div className="flex gap-3">
              <dt className="w-24" style={{ color: "#6e6e73" }}>
                Email
              </dt>
              <dd>
                <a
                  href="mailto:hola@eurotalento.com"
                  className="transition-colors"
                  style={{ color: "#6e6e73" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#b55a30")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
                >
                  hola@eurotalento.com
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24" style={{ color: "#6e6e73" }}>
                Sedes
              </dt>
              <dd>Madrid · Asturias</dd>
            </div>
          </dl>
        </div>

        <div className="reveal lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white p-8 sm:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ContactField label={t.contacto.fields.nombre} name="nombre" required />
              <ContactField label={t.contacto.fields.email} name="email" type="email" required />
              <ContactField
                label={t.contacto.fields.empresa}
                name="empresa"
                className="sm:col-span-2"
              />
              <ContactField
                label={t.contacto.fields.mensaje}
                name="mensaje"
                textarea
                className="sm:col-span-2"
                required
              />
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-[12px]" style={{ color: "#6e6e73" }}>
                {t.contacto.fields.rgpd}
              </p>
              <button
                type="submit"
                disabled={sent}
                className="shrink-0 rounded-full px-7 py-3 text-[14px] font-medium text-white transition-all disabled:opacity-60"
                style={{ background: "#b55a30" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#5a5e4d")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#b55a30")}
              >
                {sent ? `${t.contacto.thanks} ✓` : t.contacto.fields.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

interface ContactFieldProps {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  className?: string;
}

function ContactField({
  label,
  name,
  type = "text",
  textarea,
  required,
  className = "",
}: ContactFieldProps) {
  const base =
    "peer block w-full border-b bg-transparent pt-6 pb-2 text-[15px] placeholder-transparent outline-none transition-colors";
  const style: React.CSSProperties = {
    borderColor: "rgba(29,29,31,0.15)",
    color: "#6e6e73",
  };
  return (
    <div className={`relative ${className}`}>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={label}
          required={required}
          rows={4}
          className={`${base} resize-none focus:border-[#b55a30]`}
          style={style}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          required={required}
          className={`${base} focus:border-[#b55a30]`}
          style={style}
        />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-1 text-[11px] uppercase tracking-[0.18em] transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[14px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-[#b55a30]"
        style={{ color: "#6e6e73" }}
      >
        {label}
      </label>
    </div>
  );
}


function Footer() {
  const { t } = useLang();
  return (
    <footer className="px-6 py-16" style={{ background: "#5a5e4d", color: "#eef0e8" }}>
      <div className="container-core flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <span
            style={{ color: "#eef0e8", fontWeight: 600, letterSpacing: "-0.02em", fontSize: 18 }}
          >
            Eurotalento
          </span>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#d68a63",
            }}
          >
            {t.footer.tagline}
          </span>
          <span style={{ color: "#eef0e8", fontSize: 13 }}>Madrid · Asturias</span>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 text-[13px]">
          <a href="#privacidad" style={{ color: "#eef0e8" }}>
            {t.footer.privacy}
          </a>
          <span>© {new Date().getFullYear()} Eurotalento</span>
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  useReveal();
  return (
    <LangProvider>
      <main>
        <Navbar />
        <LogoBand />
        <Hero />
        <Servicios />
        <Enfoque />
        <Clientes />
        <Contacto />
        <Footer />
      </main>
    </LangProvider>
  );
}


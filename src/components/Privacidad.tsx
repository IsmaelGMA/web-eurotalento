import { Link } from "@tanstack/react-router";
import { LangProvider, useLang } from "@/lib/i18n";

const CONTENT = {
  es: {
    back: "← Volver",
    title: "Política de privacidad",
    updated: "Última actualización: agosto de 2026",
    blocks: [
      {
        h: "1. Responsable del tratamiento",
        p: [
          "Eurotalento (en adelante, «Eurotalento»), estudio de consultoría de recursos humanos con actividad en Madrid y Asturias, es el responsable del tratamiento de los datos personales que nos facilites a través de este sitio web.",
          "Correo de contacto: hola@eurotalento.com",
        ],
      },
      {
        h: "2. Datos que recogemos",
        p: [
          "Únicamente tratamos los datos que nos facilitas voluntariamente a través del formulario de contacto: nombre y apellidos, empresa, dirección de correo electrónico, teléfono (opcional), servicio de interés y el contenido del mensaje.",
          "No utilizamos cookies de perfilado ni herramientas de publicidad comportamental.",
        ],
      },
      {
        h: "3. Finalidad y base jurídica",
        p: [
          "Tratamos tus datos para atender tu solicitud de información, responderte y, en su caso, elaborar y remitirte una propuesta de servicios.",
          "La base jurídica es tu consentimiento expreso (art. 6.1.a del RGPD), que otorgas al marcar la casilla de aceptación, y el interés legítimo en mantener la relación de contacto profesional iniciada por ti.",
        ],
      },
      {
        h: "4. Conservación",
        p: [
          "Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, posteriormente, durante los plazos legalmente exigibles. Si no llega a existir relación contractual, se suprimen transcurrido un año desde el último contacto.",
        ],
      },
      {
        h: "5. Destinatarios",
        p: [
          "No cedemos tus datos a terceros salvo obligación legal. Utilizamos proveedores tecnológicos de alojamiento y de infraestructura de correo que actúan como encargados del tratamiento, con contratos que garantizan un nivel de protección conforme al RGPD.",
        ],
      },
      {
        h: "6. Tus derechos",
        p: [
          "Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a hola@eurotalento.com.",
          "También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que el tratamiento no se ajusta a la normativa.",
        ],
      },
      {
        h: "7. Seguridad",
        p: [
          "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración. El acceso a las solicitudes recibidas está restringido al equipo de Eurotalento.",
        ],
      },
    ],
  },
  en: {
    back: "← Back",
    title: "Privacy policy",
    updated: "Last updated: August 2026",
    blocks: [
      {
        h: "1. Data controller",
        p: [
          "Eurotalento, an HR consulting studio operating in Madrid and Asturias, is the controller of the personal data you provide through this website.",
          "Contact email: hola@eurotalento.com",
        ],
      },
      {
        h: "2. Data we collect",
        p: [
          "We only process the data you voluntarily submit through the contact form: full name, company, email address, phone (optional), service of interest and the content of your message.",
          "We do not use profiling cookies or behavioural advertising tools.",
        ],
      },
      {
        h: "3. Purpose and legal basis",
        p: [
          "We process your data to handle your enquiry, reply to you and, where applicable, prepare and send you a service proposal.",
          "The legal basis is your explicit consent (Art. 6.1.a GDPR), given when you tick the acceptance box, and our legitimate interest in maintaining the professional contact you initiated.",
        ],
      },
      {
        h: "4. Retention",
        p: [
          "We keep your data for as long as needed to handle your enquiry and afterwards for any legally required periods. If no contractual relationship arises, data is deleted one year after the last contact.",
        ],
      },
      {
        h: "5. Recipients",
        p: [
          "We do not share your data with third parties except where legally required. We rely on hosting and email infrastructure providers acting as processors under agreements ensuring GDPR-compliant protection.",
        ],
      },
      {
        h: "6. Your rights",
        p: [
          "You may exercise your rights of access, rectification, erasure, objection, restriction and portability, and withdraw your consent at any time, by writing to hola@eurotalento.com.",
          "You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) if you believe the processing does not comply with the law.",
        ],
      },
      {
        h: "7. Security",
        p: [
          "We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss or alteration. Access to submitted enquiries is restricted to the Eurotalento team.",
        ],
      },
    ],
  },
} as const;

function PrivacidadInner() {
  const { lang, toggle } = useLang();
  const c = CONTENT[lang];

  return (
    <main style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <div className="mb-14 flex items-center justify-between">
          <Link to="/" className="text-[13px]" style={{ color: "#6e6e73" }}>
            {c.back}
          </Link>
          <button
            onClick={toggle}
            className="rounded-full px-4 py-1.5 text-[12px] uppercase tracking-[0.15em]"
            style={{ background: "#5a5e4d", color: "#ffffff" }}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>

        <p className="mb-5 text-[12px] uppercase tracking-[0.25em]" style={{ color: "#b55a30" }}>
          Eurotalento
        </p>
        <h1
          className="text-[38px] font-light leading-[1.08] tracking-tight sm:text-[48px]"
          style={{ color: "#6e6e73" }}
        >
          {c.title}
        </h1>
        <p className="mt-4 text-[13px]" style={{ color: "#6e6e73" }}>
          {c.updated}
        </p>

        <div className="mt-16 space-y-12">
          {c.blocks.map((b) => (
            <section key={b.h}>
              <h2
                className="mb-4 text-[15px] font-medium tracking-tight"
                style={{ color: "#b55a30" }}
              >
                {b.h}
              </h2>
              {b.p.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 text-[15px] font-light leading-relaxed"
                  style={{ color: "#6e6e73" }}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
      <footer className="px-6 py-14" style={{ background: "#5a5e4d", color: "#eef0e8" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between text-[13px]">
          <Link to="/" style={{ color: "#eef0e8" }}>
            Eurotalento
          </Link>
          <span>© {new Date().getFullYear()} Eurotalento</span>
        </div>
      </footer>
    </main>
  );
}

export function Privacidad() {
  return (
    <LangProvider>
      <PrivacidadInner />
    </LangProvider>
  );
}

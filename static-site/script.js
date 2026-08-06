/* ============================================================
   Eurotalento — versión estática
   Idioma (ES/EN), animaciones de scroll, menú y formulario
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Diccionarios ---------------- */

  var DICT = {
    es: {
      nav: { servicios: "Servicios", enfoque: "Enfoque", contacto: "Contacto" },
      hero: {
        title: "El mejor talento para tu organización.",
        body: "Acompañamos a empresas a incorporar y gestionar talento, a ser tu Manager de RRHH externo a través del servicio de Interim Management, e impartimos formación a empresas, en formato In-Company o en abierto, para mejorar la productividad individual y de equipo, así como la empleabilidad de las personas.",
        tagline: "Ni más, ni menos.",
        cta: "Hablemos"
      },
      servicios: {
        section1: {
          eyebrow: "Servicios — 01",
          title: "Reclutamiento y selección de talento.",
          p1: "La incorporación de talento es un proceso clave de negocio con impacto directo en la cuenta de resultados. Si no lo lidera un profesional capaz de abordar todas las fases con garantías, la rentabilidad se resiente.",
          p2: "Hacemos búsquedas de Middle Management y Dirección para los sectores de Distribución/Retail y Gran Distribución, Gran Consumo, Hotel Management, Servicios y Banca.",
          big: "de adecuación persona/puesto, mediante tecnología en el reclutamiento y técnicas de evaluación precisas."
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
            "Liderazgo de procesos de gestión del cambio estratégico, productivo o comercial."
          ]
        },
        section3: {
          eyebrow: "Servicios — 03",
          title: "Formación In Company.",
          p1: "Diseñamos y ejecutamos acciones formativas ad hoc. Tras un trabajo de campo inicial donde ahondamos en la necesidad concreta, desarrollamos las sesiones y los casos prácticos poniendo en valor la casuística de la empresa y la experiencia de nuestros consultores.",
          areasLabel: "Áreas"
        }
      },
      areas: [
        { eyebrow: "Liderazgo", title: "Habilidades directivas" },
        { eyebrow: "Ventas", title: "Habilidades comerciales" },
        { eyebrow: "Habilidades digitales", title: "IA aplicada en reclutamiento y selección" },
        { eyebrow: "Desarrollo de talento", title: "Evaluación y técnicas de desarrollo" },
        { eyebrow: "PYMEs", title: "Gestión digital de RRHH" },
        { eyebrow: "Carrera", title: "Mentoring de carrera y empleo" },
        { eyebrow: "Escuelas de negocio", title: "Empleabilidad, gestión de carrera y orientación ejecutiva y laboral" }
      ],
      clientes: { eyebrow: "Confianza", title: "Algunos de nuestros clientes." },
      enfoque: {
        eyebrow: "Enfoque",
        phrase: 'Conocimiento <span class="op">+</span> 25 años de experiencia en RRHH y entornos internacionales <span class="op">+</span> tecnología <span class="op">+</span> investigación <span class="op">=</span> soluciones «ad hoc» con impacto real en el negocio.'
      },
      contacto: {
        eyebrow: "Contacto",
        title: "Hablemos.",
        body: "Cuéntanos qué necesitas. Te responderemos con una propuesta clara, sin rodeos.",
        fields: {
          nombre: "Nombre y apellidos",
          empresa: "Empresa",
          email: "Email",
          mensaje: "Mensaje",
          rgpd: 'He leído y acepto la <a href="privacidad.html">política de privacidad</a> y el tratamiento de mis datos conforme al RGPD.',
          submit: "Enviar"
        },
        sending: "Enviando…",
        ok: "Gracias. Te responderemos lo antes posible.",
        error: "No hemos podido enviar tu mensaje. Escríbenos a hola@eurotalento.com.",
        invalid: "Revisa el nombre, el email y el mensaje."
      },
      footer: { tagline: "Estudio de Consultoría", privacy: "Política de privacidad" }
    },

    en: {
      nav: { servicios: "Services", enfoque: "Approach", contacto: "Contact" },
      hero: {
        title: "The best talent for your organization.",
        body: "We help companies hire and manage talent, act as your external HR Manager through our Interim Management service, and deliver training — in-company or open enrolment — to improve individual and team productivity as well as people's employability.",
        tagline: "Nothing more, nothing less.",
        cta: "Let's talk"
      },
      servicios: {
        section1: {
          eyebrow: "Services — 01",
          title: "Talent recruitment & selection.",
          p1: "Bringing in talent is a core business process with a direct impact on the bottom line. Without a professional capable of leading every stage with confidence, profitability suffers.",
          p2: "We run Middle Management and Executive searches for Retail and Mass Distribution, FMCG, Hotel Management, Services and Banking.",
          big: "person-role fit, through recruitment technology and precise assessment techniques."
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
            "Leading strategic, operational or commercial change-management processes."
          ]
        },
        section3: {
          eyebrow: "Services — 03",
          title: "In-Company Training.",
          p1: "We design and deliver bespoke training. After an initial discovery phase to deeply understand the need, we build sessions and case studies that draw on the company's reality and our consultants' experience.",
          areasLabel: "Areas"
        }
      },
      areas: [
        { eyebrow: "Leadership", title: "Management skills" },
        { eyebrow: "Sales", title: "Commercial skills" },
        { eyebrow: "Digital skills", title: "AI applied to recruitment & selection" },
        { eyebrow: "Talent development", title: "Assessment and development techniques" },
        { eyebrow: "SMEs", title: "Digital HR management" },
        { eyebrow: "Career", title: "Career and employability mentoring" },
        { eyebrow: "Business schools", title: "Employability, career management and executive & job orientation" }
      ],
      clientes: { eyebrow: "Trust", title: "Some of our clients." },
      enfoque: {
        eyebrow: "Approach",
        phrase: 'Knowledge <span class="op">+</span> 25 years of HR experience in international environments <span class="op">+</span> technology <span class="op">+</span> research <span class="op">=</span> bespoke solutions with real business impact.'
      },
      contacto: {
        eyebrow: "Contact",
        title: "Let's talk.",
        body: "Tell us what you need. We'll get back to you with a clear, no-nonsense proposal.",
        fields: {
          nombre: "Full name",
          empresa: "Company",
          email: "Email",
          mensaje: "Message",
          rgpd: 'I have read and accept the <a href="privacidad.html">privacy policy</a> and the processing of my data under GDPR.',
          submit: "Send"
        },
        sending: "Sending…",
        ok: "Thank you. We'll get back to you as soon as possible.",
        error: "We couldn't send your message. Please email hola@eurotalento.com.",
        invalid: "Please check your name, email and message."
      },
      footer: { tagline: "Consulting Studio", privacy: "Privacy policy" }
    }
  };

  /* ---------------- Utilidades ---------------- */

  function get(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc == null ? undefined : acc[key];
    }, obj);
  }

  function esc(str) {
    return String(str).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  var lang = "es";
  try {
    var saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") lang = saved;
  } catch (e) {}

  /* ---------------- Render de idioma ---------------- */

  function renderLists(t) {
    var list = document.getElementById("tuhrList");
    if (list) {
      list.innerHTML = t.servicios.section2.items
        .map(function (item, i) {
          var n = String(i + 1).padStart(2, "0");
          return '<li><span class="num">' + n + "</span><p>" + esc(item) + "</p></li>";
        })
        .join("");
    }

    var areas = document.getElementById("areasGrid");
    if (areas) {
      areas.innerHTML = t.areas
        .map(function (a) {
          return (
            '<li><span class="area-eyebrow">' + esc(a.eyebrow) +
            "</span><h3>" + esc(a.title) + "</h3></li>"
          );
        })
        .join("");
    }
  }

  function applyLang(next) {
    lang = next;
    var t = DICT[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = get(t, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = get(t, el.getAttribute("data-i18n-html"));
      if (typeof value === "string") el.innerHTML = value;
    });

    // Los placeholders alimentan la animación de las etiquetas flotantes
    document.querySelectorAll(".field label[data-i18n]").forEach(function (label) {
      var input = document.getElementById(label.getAttribute("for"));
      if (input) input.setAttribute("placeholder", label.textContent);
    });

    document.querySelectorAll("[data-lang-chip]").forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-lang-chip") === lang);
    });

    renderLists(t);

    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  /* ---------------- Navbar ---------------- */

  var navbar = document.getElementById("navbar");
  var burger = document.getElementById("burger");

  function onScroll() {
    if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (burger) {
    burger.addEventListener("click", function () {
      var open = navbar.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".navbar__mobile a").forEach(function (a) {
    a.addEventListener("click", function () {
      navbar.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLang(lang === "es" ? "en" : "es");
    });
  }

  /* ---------------- Animación al hacer scroll ---------------- */

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- Formulario de contacto ---------------- */

  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var submitBtn = document.getElementById("submitBtn");

  function setStatus(message, kind) {
    if (!status) return;
    status.textContent = message;
    status.className = "form-status" + (kind ? " is-" + kind : "");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = DICT[lang];

      var nombre = form.nombre.value.trim();
      var email = form.email.value.trim();
      var mensaje = form.mensaje.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

      if (!nombre || !emailOk || !mensaje) {
        setStatus(t.contacto.invalid, "error");
        return;
      }

      submitBtn.disabled = true;
      setStatus(t.contacto.sending, null);

      fetch(form.getAttribute("action"), {
        method: "POST",
        body: new FormData(form),
        headers: { "X-Requested-With": "XMLHttpRequest" }
      })
        .then(function (res) {
          return res.json().catch(function () { return { ok: res.ok }; });
        })
        .then(function (data) {
          if (data && data.ok) {
            form.reset();
            applyLang(lang); // restaura placeholders
            setStatus(t.contacto.ok, "ok");
          } else {
            setStatus(t.contacto.error, "error");
          }
        })
        .catch(function () {
          setStatus(t.contacto.error, "error");
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  /* ---------------- Año en el pie ---------------- */

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------------- Arranque ---------------- */

  applyLang(lang);
})();

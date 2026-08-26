/**
 * Estilo Terminal de autor: composición editorial oscura, rail técnico y verde señal
 * como indicador semántico. La portada 3D debe respirar a la derecha y el texto no se centra.
 */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Copy,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

// Clave gratuita de https://web3forms.com — pegar acá antes de publicar
// para que el formulario de contacto envíe mensajes de verdad.
const WEB3FORMS_ACCESS_KEY = "cd152f45-44b8-46e1-ab7e-d1bc757c46cb";

// Número de WhatsApp con código de país, sin espacios ni signos (ej. 5493451234567).
const WHATSAPP_NUMBER = "5493442535341";

const projects = [
  {
    title: "Quiosquito",
    type: "Sistema de gestión para kioscos y drugstores",
    description: (
      <>
        Sistema de gestión para kioscos, drugstores y comercios minoristas con punto de venta, facturación electrónica ARCA, caja diaria, stock, vencimientos, proveedores, reportes, integración de Mercado Pago y{" "}
        <strong>operación multi-sucursal.</strong>
      </>
    ),
    tags: ["Punto de venta", "AFIP", "Multi-sucursal"],
    image: "/shots/quiosquito-pos.png",
    logo: "/logos/quiosquito-card.png",
    url: "https://www.quiosquito.com.ar",
    accent: "slate",
    stats: ["Web + escritorio", "Mercado Pago"],
  },
  {
    title: "Glamdo",
    type: "SaaS para peluquerías, barbería y servicios de belleza",
    description:
      "Software para barberías, manicuras y spas: agenda de turnos, bot de WhatsApp, campañas de marketing, carga de servicios y profesionales, POS e integración de Mercado Pago.",
    tags: ["Multi-tenant", "WhatsApp", "Mercado Pago"],
    image: "/shots/glamdo-dashboard.png",
    logo: "/logos/glamdo-card.png",
    url: "https://www.glamdo.com.ar",
    accent: "lime",
    stats: ["Google Calendar", "Node.js + React"],
  },
  {
    title: "Zylos ERP",
    type: "ERP para distribuidoras y pymes",
    description:
      "Sistema multiempresa para ventas, caja, clientes, proveedores, cuentas corrientes y facturación electrónica; incorpora app móvil y asistente con IA.",
    tags: ["Multi-tenant", "React Native", "PostgreSQL"],
    image: "/shots/zylos-stock.png",
    logo: "/logos/zylos.png",
    url: "https://github.com/nazarenorodriguez013",
    accent: "line",
    stats: ["App móvil", "Asistente IA"],
  },
];

const skills = [
  { label: "HTML / CSS / JavaScript / React", value: 90, note: "Frontend y experiencia de producto" },
  { label: "Node.js / Python / PHP / C#", value: 86, note: "Backend e integraciones" },
  { label: "PostgreSQL / MySQL / SQL Server", value: 84, note: "Datos y operación" },
  { label: "SaaS multi-tenant", value: 89, note: "ERPs para negocios reales" },
  { label: "Web / móvil / escritorio", value: 82, note: "Entrega multi-plataforma" },
  { label: "Git / Docker / Linux", value: 78, note: "Herramientas de desarrollo" },
];

const workflow = [
  {
    date: "Producto",
    title: "ERPs, SaaS, páginas web, APIs y otros productos a medida",
    tag: "Sistema",
    read: "Idea → producción",
  },
  {
    date: "Integraciones",
    title: "AFIP, Mercado Pago, WhatsApp, Google Calendar y más",
    tag: "Ecosistema",
    read: "Conectado",
  },
  {
    date: "Entrega",
    title: "Interfaces web, apps móviles y software de escritorio",
    tag: "Entrega",
    read: "Multi-superficie",
  },
];

const contactQuestions = [
  {
    name: "tipo_proyecto",
    question: "¿Qué tipo de proyecto es?",
    options: ["Página web", "Sistema de gestión", "Integración o API", "Automatización"],
  },
  {
    name: "presupuesto",
    question: "¿Qué presupuesto estimás?",
    options: [
      "Menos de $500.000",
      "$500.000 - $1.500.000",
      "Más de $1.500.000",
      "Prefiero definirlo después",
    ],
  },
  {
    name: "tiempo_desarrollo",
    question: "¿Cuánto tiempo estimás para el desarrollo?",
    options: ["Menos de 1 mes", "1 a 3 meses", "Más de 3 meses", "No tengo estimado"],
  },
  {
    name: "punto_partida",
    question: "¿Desde dónde arrancamos?",
    options: [
      "Arranco de cero",
      "Ya tengo algo para mejorar",
      "Necesito integrar algo existente",
      "Quiero migrar desde otro sistema",
    ],
  },
];

function Hero3D() {
  return (
    <div className="nr-hero-stage" aria-hidden="true">
      <img className="nr-hero-image" src="/hero/nazareno-nr-3d.png" alt="" />
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="nav-link">
      {children}
      <span className="nav-link-line" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(0);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const totalSteps = contactQuestions.length + 2;

  const skillsRef = useRef<HTMLDivElement>(null);
  const notasRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [notasVisible, setNotasVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setSkillsVisible(true);
      setNotasVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === skillsRef.current) setSkillsVisible(true);
          if (entry.target === notasRef.current) setNotasVisible(true);
        });
      },
      { threshold: 0.25 },
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (notasRef.current) observer.observe(notasRef.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("nazarenorodriguez013@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nazarenorodriguez013@gmail.com&su=${encodeURIComponent(
    "Consulta desde el portafolio",
  )}&body=${encodeURIComponent("Hola Nazareno, te escribo porque...")}`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Nazareno, te escribo porque...",
  )}`;

  return (
    <div className="site-shell">
      <aside className="control-rail" aria-label="Navegación principal">
        <a className="brand-mark" href="#top" aria-label="Inicio de Nazareno Rodríguez">
          <img src="/logos/nr-mark.svg" alt="" />
        </a>
        <a className="brand-wordmark" href="#top" aria-label="Nazareno Rodríguez, volver al inicio">
          <span>Nazareno</span><span>Rodríguez<i /></span>
        </a>

        <nav className="rail-nav">
          <span className="rail-index">Index · 01—05</span>
          <NavLink href="#work">Trabajo</NavLink>
          <NavLink href="#skills">Stack</NavLink>
          <NavLink href="#writing">Notas</NavLink>
          <NavLink href="#contact">Contacto</NavLink>
        </nav>

        <div className="rail-status">
          <span className="status-dot" />
          <span>Sys online · Disponible</span>
        </div>
        <div className="rail-socials">
          <a href="https://github.com/nazarenorodriguez013" aria-label="GitHub de Nazareno Rodríguez" target="_blank" rel="noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nazarenorodriguez013" aria-label="LinkedIn de Nazareno Rodríguez" target="_blank" rel="noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </aside>

      <header className="mobile-header">
        <a className="brand-mark" href="#top" aria-label="Inicio de Nazareno Rodríguez">
          <img src="/logos/nr-mark.svg" alt="" />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir navegación">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <nav className="mobile-menu">
            <a href="#work" onClick={() => setMenuOpen(false)}>Trabajo</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Stack</a>
            <a href="#writing" onClick={() => setMenuOpen(false)}>Notas</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
          </nav>
        )}
      </header>

      <main id="top" className="main-canvas">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="lime-square" /> Full Stack Developer · Concordia, Entre Ríos, Argentina</p>
            <h1 id="hero-title">
              Software de gestión<br />
              para negocios<br />
              <em>reales.</em>
            </h1>
            <p className="hero-intro">
              Soy Nazareno Rodríguez, desarrollador full stack y estudiante de la Tecnicatura Universitaria en Programación (UTN). Creo ERPs y SaaS completos para la operación diaria.
            </p>
            <div className="hero-actions">
              <a href="#work" className="primary-action">Ver proyectos <ArrowDownRight size={18} /></a>
              <a href="https://github.com/nazarenorodriguez013" className="text-action" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art reveal-art">
            <Hero3D />
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-art-meta">
              <span>RENDER_01</span><span>NR / PERSONAL MARK</span><span>2026</span>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-grid section-pad" aria-labelledby="work-title">
          <div className="section-side">
            <p className="section-number">01</p>
            <p className="side-caption">Mis proyectos</p>
          </div>
          <div className="section-content">
            <div className="section-heading">
              <div>
                <p className="eyebrow">// TRABAJO</p>
                <h2 id="work-title">Softwares de<br /><em>Gestión Comercial</em></h2>
              </div>
              <p className="heading-note">Sistemas completos, facturación electrónica ARCA, inventario, datos e interfaces simples para tener tu negocio bajo control.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article key={project.title} className={`project-card project-${index + 1}`}>
                  <div className="project-visual">
                    <div className="project-logo-display">
                      <img src={project.logo} alt={`Logo de ${project.title}`} />
                    </div>
                    <img className="project-photo" src={project.image} alt="" />
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-info">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-footer">
                      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}><ArrowUpRight size={19} /></a>
                    </div>
                  </div>
                  <div className="project-stats">
                    {project.stats.map((stat) => <span key={stat}>{stat}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <a className="archive-link" href="https://github.com/nazarenorodriguez013" target="_blank" rel="noreferrer">Explorar GitHub <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section id="skills" className="skills-section section-grid section-pad" aria-labelledby="skills-title">
          <div className="section-side">
            <p className="section-number">02</p>
            <p className="side-caption">Stack tecnológico</p>
          </div>
          <div className="section-content skills-content">
            <div className="section-heading compact-heading">
              <div>
                <p className="eyebrow">// STACK</p>
                <h2 id="skills-title">Herramientas más<br /><em>utilizadas para el desarrollo.</em></h2>
              </div>
              <div className="skills-pullquote"><Terminal size={18} /><span>“Conectando distintas tecnologías según la necesidad de cada cliente.”</span></div>
            </div>
            <div className="skill-matrix" ref={skillsRef}>
              {skills.map((skill, index) => (
                <div
                  className={`skill-row reveal-row${skillsVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                  key={skill.label}
                >
                  <span className="skill-count">0{index + 1}</span>
                  <div className="skill-name"><strong>{skill.label}</strong><span>{skill.note}</span></div>
                  <div className="skill-meter" aria-label={`${skill.label}: ${skill.value}%`}><span style={{ width: skillsVisible ? `${skill.value}%` : "0%" }} /></div>
                  <span className="skill-value">{skill.value}%</span>
                </div>
              ))}
            </div>
            <div className="stack-cluster">
              <div className="stack-caption"><Layers3 size={17} /> Las más habituales</div>
              <div className="stack-items"><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>MySQL</span><span>Docker</span><span>Linux</span><span>C#</span></div>
            </div>
          </div>
        </section>

        <section id="writing" className="writing-section section-grid section-pad" aria-labelledby="writing-title">
          <div className="section-side">
            <p className="section-number">03</p>
            <p className="side-caption">Notas de trabajo</p>
          </div>
          <div className="section-content">
            <div className="section-heading writing-heading">
              <div>
                <p className="eyebrow">// notas</p>
                <h2 id="writing-title">Producto, integraciones<br /><em>y entrega.</em></h2>
              </div>
              <div className="writing-route"><span>BUILD_LOG / NR</span><a href="https://github.com/nazarenorodriguez013" target="_blank" rel="noreferrer" className="subtle-action">Ver perfil GitHub <ArrowUpRight size={15} /></a></div>
            </div>
            <div className="article-list" ref={notasRef}>
              {workflow.map((article, index) => (
                <div
                  className={`article-row reveal-row${notasVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  key={article.title}
                >
                  <span className="article-count">{article.date}</span>
                  <p className="article-title">{article.title}</p>
                  <span className="article-tag">{article.tag}</span>
                  <span className="article-meta">{article.read}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="oss-section section-grid" aria-label="Desarrollo integral de producto">
          <div className="oss-rail-line" />
          <div className="oss-content">
            <div className="oss-icon"><Layers3 size={21} /></div>
            <div><p className="eyebrow">// end to end</p><h2>Del flujo de trabajo<br /><em>al sistema completo.</em></h2></div>
            <p>Diseño y construyo soluciones completas: backend, frontend, bases de datos, apps móviles y de escritorio, e integraciones de negocio.</p>
            <a href="https://github.com/nazarenorodriguez013" className="primary-action small-action" target="_blank" rel="noreferrer">Ver perfil GitHub <Github size={17} /></a>
          </div>
        </section>

        <footer id="contact" className="contact-footer section-grid" aria-labelledby="contact-title">
          <div className="footer-topline"><span className="footer-eyebrow">// contacto</span><span>Disponible para proyectos de software</span></div>
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="eyebrow"><Sparkles size={14} /> hablemos de software</p>
              <h2 id="contact-title">¿Tenés algún<br />proyecto<br /><em>en mente?</em></h2>
              <p>Contame de qué se trata y charlamos cómo lo llevamos adelante.</p>
              <div className="contact-actions">
                <button className="copy-email" onClick={copyEmail}><Mail size={16} /> nazarenorodriguez013@gmail.com <Copy size={14} /><span>{copied ? "Copiado" : "Copiar"}</span></button>
                <a className="contact-alt-action" href={gmailComposeUrl} target="_blank" rel="noreferrer"><Mail size={15} /> Escribir por Gmail</a>
                <a className="contact-alt-action" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a>
              </div>
            </div>
            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="Consulta desde el portafolio" />
              <input type="hidden" name="redirect" value="https://nazarenorodriguez013.github.io/gracias" />
              <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <div className="step-progress-bar" aria-hidden="true">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <span key={i} className={`step-seg${i <= step ? " step-seg-active" : ""}`} />
                ))}
              </div>
              <p className="step-progress">Paso {step + 1} de {totalSteps}</p>
              {contactQuestions.map((q, qi) => (
                <fieldset
                  className="chip-field form-step"
                  key={q.name}
                  style={{ display: step === qi ? undefined : "none" }}
                >
                  <legend>{q.question}</legend>
                  <div className="chip-group">
                    {q.options.map((opt, oi) => {
                      const id = `${q.name}-${oi}`;
                      return (
                        <div className="chip" key={opt}>
                          <input
                            type="radio"
                            id={id}
                            name={q.name}
                            value={opt}
                            onChange={() =>
                              window.setTimeout(() => setStep((s) => Math.min(s + 1, totalSteps - 1)), 220)
                            }
                          />
                          <label htmlFor={id}>{opt}</label>
                        </div>
                      );
                    })}
                  </div>
                  <div className="step-nav">
                    {qi > 0 && (
                      <button type="button" className="step-back" onClick={() => setStep(qi - 1)}>
                        ← Atrás
                      </button>
                    )}
                    <button type="button" className="step-skip" onClick={() => setStep(qi + 1)}>
                      Siguiente
                    </button>
                  </div>
                </fieldset>
              ))}
              <div className="form-step" style={{ display: step === contactQuestions.length ? undefined : "none" }}>
                <label>
                  Contexto
                  <textarea ref={messageRef} required name="message" rows={4} placeholder="Cuéntame qué estás construyendo." />
                </label>
                <div className="step-nav">
                  <button type="button" className="step-back" onClick={() => setStep(contactQuestions.length - 1)}>
                    ← Atrás
                  </button>
                  <button
                    type="button"
                    className="step-skip"
                    onClick={() => {
                      if (messageRef.current?.reportValidity()) setStep(contactQuestions.length + 1);
                    }}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
              <div
                className="form-step"
                style={{ display: step === contactQuestions.length + 1 ? undefined : "none" }}
              >
                <label>Nombre<input required name="name" placeholder="Cómo te llamas" /></label>
                <label>Email<input required type="email" name="email" placeholder="tu@equipo.com" /></label>
                <div className="step-nav">
                  <button type="button" className="step-back" onClick={() => setStep(contactQuestions.length)}>
                    ← Atrás
                  </button>
                  <button className="primary-action form-action" type="submit">
                    Escribir a Nazareno <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="footer-bottom">
            <a className="footer-brand" href="#top" aria-label="Nazareno Rodríguez, volver al inicio"><img src="/logos/nr-mark.svg" alt="" /><span>Nazareno<br />Rodríguez<i /></span></a>
            <a className="resume-link" href="https://github.com/nazarenorodriguez013" target="_blank" rel="noreferrer"><Github size={16} /> Perfil en GitHub</a>
            <a className="resume-link" href="https://www.linkedin.com/in/nazarenorodriguez013" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <span>© 2026 Nazareno Rodríguez</span>
            <span>Diseñado y programado con intención.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

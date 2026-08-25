/**
 * Estilo Terminal de autor: composición editorial oscura, rail técnico y verde señal
 * como indicador semántico. La portada 3D debe respirar a la derecha y el texto no se centra.
 */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Copy,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  ServerCog,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Glamdo",
    type: "SaaS para servicios de belleza",
    description:
      "SaaS multi-tenant para peluquerías y barberías: turnos, fidelización, caja e inventario, campañas y un bot de WhatsApp para reservas automáticas.",
    tags: ["Multi-tenant", "WhatsApp", "Mercado Pago"],
    image: "/shots/glamdo-dashboard.png",
    url: "https://www.glamdo.com.ar",
    accent: "lime",
    stats: ["Google Calendar", "Node.js + React"],
  },
  {
    id: "02",
    title: "Quiosquito",
    type: "Sistema de gestión minorista",
    description:
      "Punto de venta para kioscos y minoristas con facturación AFIP, stock, vencimientos, proveedores, reportes y operación multi-sucursal.",
    tags: ["Punto de venta", "AFIP", "Multi-sucursal"],
    image: "/shots/quiosquito-pos.png",
    url: "https://www.quiosquito.com.ar",
    accent: "slate",
    stats: ["Web + escritorio", "Mercado Pago"],
  },
  {
    id: "03",
    title: "Zylos ERP",
    type: "ERP para distribuidoras y pymes",
    description:
      "Sistema multiempresa para ventas, caja, clientes, proveedores, cuentas corrientes y facturación electrónica; incorpora app móvil y asistente con IA.",
    tags: ["Multi-tenant", "React Native", "PostgreSQL"],
    image: "/shots/zylos-stock.png",
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
    title: "ERPs y SaaS pensados para operar todos los días",
    tag: "Sistema",
    read: "Idea → producción",
  },
  {
    date: "Integraciones",
    title: "AFIP, Mercado Pago, WhatsApp y Google Calendar",
    tag: "Ecosistema",
    read: "Conectado",
  },
  {
    date: "Plataformas",
    title: "Interfaces web, apps móviles y software de escritorio",
    tag: "Entrega",
    read: "Multi-superficie",
  },
];

function Hero3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particlesEl = particlesRef.current;

    if (particlesEl && !reduceMotion) {
      const COUNT = 22;
      for (let i = 0; i < COUNT; i++) {
        const p = document.createElement("span");
        p.className = "hero-3d-particle";
        const size = 2 + Math.random() * 3;
        p.style.left = Math.random() * 100 + "%";
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.setProperty("--p-op", (0.25 + Math.random() * 0.45).toFixed(2));
        p.style.animationDuration = 9 + Math.random() * 10 + "s";
        p.style.animationDelay = Math.random() * -18 + "s";
        particlesEl.appendChild(p);
      }
    }

    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!stage || !tilt || reduceMotion || !window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tilt.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg)`;
    };
    const onLeave = () => {
      tilt.style.transform = "rotateY(0deg) rotateX(0deg)";
    };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="hero-3d-stage" ref={stageRef}>
      <div className="hero-3d-particles" ref={particlesRef} />
      <div className="hero-3d-tilt" ref={tiltRef}>
        <div className="hero-3d-orbit">
          <div className="hero-3d-card card-glamdo">
            <img src="/logos/glamdo.svg" alt="" />
            <span>Glamdo</span>
          </div>
          <div className="hero-3d-card card-quiosquito">
            <img src="/logos/quiosquito.svg" alt="" />
            <span>Quiosquito</span>
          </div>
          <div className="hero-3d-card card-zylos">
            <img src="/logos/zylos.png" alt="" />
          </div>
        </div>
      </div>
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

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("nazarenorodriguez013@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const message = form.get("message")?.toString() || "";
    window.location.href = `mailto:nazarenorodriguez013@gmail.com?subject=${encodeURIComponent(
      `Consulta desde el portafolio — ${name}`,
    )}&body=${encodeURIComponent(`De: ${name} (${email})\n\n${message}`)}`;
  };

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
            <Github size={17} />
          </a>
          <a href="https://www.linkedin.com/in/nazarenorodriguez013" aria-label="LinkedIn de Nazareno Rodríguez" target="_blank" rel="noreferrer">
            <Linkedin size={17} />
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
            <div className="hero-art-label label-top">// selected object</div>
            <Hero3D />
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-art-meta">
              <span>RENDER_01</span><span>NR / SYSTEMS</span><span>2026</span>
            </div>
          </div>
          <div className="tech-strip reveal-up">
            <span>// construido con</span>
            <div className="tech-list">
              <span><Braces size={15} /> TypeScript</span>
              <span><Code2 size={15} /> React</span>
              <span><Database size={15} /> Postgres</span>
              <span><ServerCog size={15} /> Cloud</span>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-grid section-pad" aria-labelledby="work-title">
          <div className="section-side">
            <p className="section-number">01</p>
            <p className="side-caption">Proyectos principales<br />Producto y operación</p>
          </div>
          <div className="section-content">
            <div className="section-heading">
              <div>
                <p className="eyebrow">// shipped products</p>
                <h2 id="work-title">Sistemas que<br /><em>mueven negocios.</em></h2>
              </div>
              <p className="heading-note">Productos completos que conectan operación, facturación, datos e interfaces para negocios reales.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article key={project.title} className={`project-card project-${index + 1}`}>
                  <div className="project-visual">
                    <img src={project.image} alt="" />
                    <span className="project-id">{project.id}</span>
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
            <p className="side-caption">Stack tecnológico<br />Para producto real.</p>
          </div>
          <div className="section-content skills-content">
            <div className="section-heading compact-heading">
              <div>
                <p className="eyebrow">// technical range</p>
                <h2 id="skills-title">Tecnología para<br /><em>hacer que opere.</em></h2>
              </div>
              <div className="skills-pullquote"><Terminal size={18} /><span>“Del punto de venta a la facturación: un sistema que acompaña la operación.”</span></div>
            </div>
            <div className="skill-matrix">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill.label}>
                  <span className="skill-count">0{index + 1}</span>
                  <div className="skill-name"><strong>{skill.label}</strong><span>{skill.note}</span></div>
                  <div className="skill-meter" aria-label={`${skill.label}: ${skill.value}%`}><span style={{ width: `${skill.value}%` }} /></div>
                  <span className="skill-value">{skill.value}%</span>
                </div>
              ))}
            </div>
            <div className="stack-cluster">
              <div className="stack-caption"><Layers3 size={17} /> En la rotación</div>
              <div className="stack-items"><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>MySQL</span><span>Docker</span><span>Linux</span><span>C#</span></div>
            </div>
          </div>
        </section>

        <section id="writing" className="writing-section section-grid section-pad" aria-labelledby="writing-title">
          <div className="section-side">
            <p className="section-number">03</p>
            <p className="side-caption">Forma de trabajo<br />De punta a punta.</p>
          </div>
          <div className="section-content">
            <div className="section-heading writing-heading">
              <div>
                <p className="eyebrow">// approach</p>
                <h2 id="writing-title">De la idea<br /><em>a la operación.</em></h2>
              </div>
              <div className="writing-route"><span>BUILD_LOG / NR</span><a href="https://github.com/nazarenorodriguez013" target="_blank" rel="noreferrer" className="subtle-action">Ver perfil GitHub <ArrowUpRight size={15} /></a></div>
            </div>
            <div className="article-list">
              {workflow.map((article, index) => (
                <a href="https://github.com/nazarenorodriguez013" target="_blank" rel="noreferrer" className="article-row" key={article.title}>
                  <span className="article-count">0{index + 1}</span>
                  <p className="article-title">{article.title}</p>
                  <span className="article-tag">{article.tag}</span>
                  <span className="article-meta">{article.read}</span>
                  <ArrowUpRight className="article-arrow" size={18} />
                  <span className="article-date">{article.date}</span>
                </a>
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
          <div className="footer-topline"><span>// 04 — contacto</span><span>Disponible para proyectos de software</span></div>
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="eyebrow"><Sparkles size={14} /> hablemos de software</p>
              <h2 id="contact-title">¿Tenés un negocio<br />que necesita un<br /><em>sistema?</em></h2>
              <p>¿Charlamos sobre un proyecto o una oportunidad? Escribime y contame qué necesitás resolver.</p>
              <button className="copy-email" onClick={copyEmail}><Mail size={16} /> nazarenorodriguez013@gmail.com <Copy size={14} /><span>{copied ? "Copiado" : "Copiar"}</span></button>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              <label>Nombre<input required name="name" placeholder="Cómo te llamas" /></label>
              <label>Email<input required type="email" name="email" placeholder="tu@equipo.com" /></label>
              <label>Contexto<textarea required name="message" rows={4} placeholder="Cuéntame qué estás construyendo." /></label>
              <button className="primary-action form-action" type="submit">Escribir a Nazareno <ArrowUpRight size={18} /></button>
            </form>
          </div>
          <div className="footer-bottom">
            <a className="footer-brand" href="#top" aria-label="Nazareno Rodríguez, volver al inicio"><img src="/logos/nr-mark.svg" alt="" /><span>Nazareno<br />Rodríguez<i /></span></a>
            <a className="resume-link" href="https://github.com/nazarenorodriguez013" target="_blank" rel="noreferrer"><Github size={16} /> Perfil en GitHub</a>
            <span>© 2026 Nazareno Rodríguez</span>
            <span>Diseñado y programado con intención.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

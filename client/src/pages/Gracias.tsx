import { ArrowUpRight, Check } from "lucide-react";

export default function Gracias() {
  return (
    <div className="thanks-page">
      <div className="thanks-card">
        <span className="thanks-icon">
          <Check size={22} />
        </span>
        <p className="eyebrow">// mensaje enviado</p>
        <h1>
          Gracias, ya lo <em>recibí.</em>
        </h1>
        <p>Te voy a responder apenas pueda a la dirección que dejaste.</p>
        <a className="primary-action" href="/">
          Volver al portafolio <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}

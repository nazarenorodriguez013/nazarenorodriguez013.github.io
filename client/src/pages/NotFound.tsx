import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="thanks-page">
      <div className="thanks-card">
        <p className="eyebrow">// 404</p>
        <h1>
          Esta página no <em>existe.</em>
        </h1>
        <p>Puede que se haya movido o que el link esté mal escrito.</p>
        <a className="primary-action" href="/">
          Volver al portafolio <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}

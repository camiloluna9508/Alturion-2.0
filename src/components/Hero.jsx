import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid-lines" aria-hidden="true">
        <div className="hero__grid-line" style={{ left: '25%' }} />
        <div className="hero__grid-line" style={{ left: '50%' }} />
        <div className="hero__grid-line" style={{ left: '75%' }} />
      </div>

      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__glass-card">
          <span className="hero__glass-tag">[ 2026 ] · Ingeniería Integral</span>
          <span className="hero__glass-certs">RITEL · RETIE · SG-SST · Cobertura Nacional</span>
        </div>

        <p className="hero__eyebrow">
          Tecnología · Telecomunicaciones · Energía · Infraestructura
        </p>

        <h1 className="hero__headline">
          Ingeniería<br />
          que <span className="hero__headline-accent">CONECTA</span><br />
          el país<span className="hero__headline-accent">.</span>
        </h1>

        <p className="hero__subhead">
          Diseñamos, construimos e integramos infraestructura de alto impacto.
          Del diseño a la operación, con rigor técnico y cobertura en más de 20
          departamentos.
        </p>

        <div className="hero__ctas">
          <a href="#proyectos" className="hero__cta hero__cta--primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="hero__cta hero__cta--secondary">
            Contáctenos →
          </a>
        </div>

        <div className="hero__differentiators">
          <div className="hero__diff-item">
            <span className="hero__diff-check">✓</span>
            <span>Ciclo completo propio — del diseño a la operación, sin intermediarios</span>
          </div>
          <div className="hero__diff-item">
            <span className="hero__diff-check">✓</span>
            <span>Respaldados por 17 años de operación de SINERCOM S.A.S.</span>
          </div>
          <div className="hero__diff-item">
            <span className="hero__diff-check">✓</span>
            <span>Proyectos ejecutados en más de 20 departamentos de Colombia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import './Pillars.css';

const pillars = [
  {
    num: '01',
    title: 'Calidad',
    icon: '✦',
    items: [
      'Procesos documentados y trazables',
      'Entregables auditables en cada etapa',
      'Planes de calidad por proyecto',
      'Cumplimiento normativo estricto',
    ],
  },
  {
    num: '02',
    title: 'Seguridad',
    icon: '⛡',
    items: [
      'Personal certificado en campo',
      'Protocolos de trabajo seguros',
      'SG-SST implementado y activo',
      'Planes de emergencia por obra',
    ],
  },
  {
    num: '03',
    title: 'Sostenibilidad',
    icon: '❋',
    items: [
      'Manejo ambiental responsable',
      'Prácticas de bajo impacto en campo',
      'Eficiencia energética en diseños',
      'Disposición adecuada de residuos',
    ],
  },
];

export default function Pillars() {
  return (
    <section className="pillars" id="nosotros">
      <div className="pillars__inner">
        <p className="pillars__eyebrow">Cómo lo hacemos</p>
        <h2 className="pillars__title">Tres pilares, un solo propósito</h2>
        <p className="pillars__desc">
          Ejecutamos cada proyecto con precisión técnica, control y trazabilidad
          en cada etapa, garantizando resultados confiables y de alto nivel.
        </p>

        <div className="pillars__grid">
          {pillars.map((p, i) => (
            <div key={i} className="pillars__card">
              <div className="pillars__card-icon">{p.icon}</div>
              <span className="pillars__card-label">Pilar {p.num}</span>
              <h3 className="pillars__card-title">{p.title}</h3>
              <div className="pillars__card-sep" />
              <ul className="pillars__card-list">
                {p.items.map((item, j) => (
                  <li key={j} className="pillars__card-item">
                    <span className="pillars__card-dot" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pillars__card-hover-bar" />
            </div>
          ))}
        </div>

        <div className="pillars__quote">
          <div className="pillars__quote-line" />
          <p className="pillars__quote-text">
            Más que entregar soluciones, construimos relaciones basadas en
            confianza, seguridad y responsabilidad con el entorno.
          </p>
        </div>
      </div>
    </section>
  );
}

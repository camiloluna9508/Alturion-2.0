import { useState } from 'react';
import './Services.css';

const verticals = [
  {
    num: '01',
    title: 'Infraestructura',
    icon: '⬡',
    desc: 'La base física de todo proyecto. Obras civiles especializadas para el despliegue de redes con capacidad para operar en todo tipo de terreno.',
    tags: ['Obra civil', 'Canalización', 'SPT', 'Zanjas y ductos'],
    details: [
      'Obra civil especializada en terrenos de alta complejidad',
      'Canalización subterránea y aérea para redes',
      'Cajas de inspección y cámaras de empalme',
      'Sistemas de puesta a tierra (SPT)',
      'Mampostería y acabados técnicos',
      'Excavación y conformación de zanjas',
      'Pedestales y estructuras de soporte',
      'Adecuación de cuartos técnicos',
      'Andenes, urbanismo y obra complementaria',
    ],
  },
  {
    num: '02',
    title: 'Energía',
    icon: '⚡',
    desc: 'Diseño, construcción y operación de sistemas eléctricos que garantizan suministro confiable y eficiente, en cumplimiento de la normativa nacional.',
    tags: ['Subestaciones', 'Redes B.T / M.T', 'Energía solar', 'RETIE'],
    details: [
      'Subestaciones eléctricas hasta 800 KVA',
      'Redes eléctricas de baja tensión (B.T)',
      'Redes eléctricas de media tensión (M.T)',
      'Plantas solares fotovoltaicas on-grid y off-grid',
      'Plantas solares flotantes',
      'Caja combinadora e inversores',
      'Transformadores y medidores',
      'Iluminación y sistemas DALI',
      'Eficiencia energética y puesta en marcha',
    ],
  },
  {
    num: '03',
    title: 'Telecomunicaciones',
    icon: '◎',
    desc: 'Despliegue e integración de redes que conectan ciudades, empresas y territorios. Desde la fibra óptica hasta los sistemas de videovigilancia urbana.',
    tags: ['Fibra óptica', 'CCTV urbano', 'Cableado estructurado', 'RITEL'],
    details: [
      'Tendido e instalación de fibra óptica',
      'Empalmería y certificación de redes',
      'Implementación de sistemas CCTV urbano',
      'Cableado estructurado certificado',
      'Postes y estructuras para despliegue de redes',
      'Sistemas de videovigilancia LPR',
      'Radioenlaces y microondas',
      'Infraestructura para BTS y sitios 5G',
      'Cumplimiento RITEL en todas las instalaciones',
    ],
  },
  {
    num: '04',
    title: 'Tecnología',
    icon: '◈',
    desc: 'Integración tecnológica para entornos inteligentes, automatización industrial y gestión remota de infraestructura esencial.',
    tags: ['Integración 5G', 'Semaforización', 'Sistemas DALI', 'LPR / SCADA'],
    details: [
      'Integración de redes 5G y conectividad avanzada',
      'Semaforización y control de movilidad urbana (AUCE)',
      'Sistemas de iluminación inteligente DALI',
      'Automatización industrial y SCADA',
      'Gestión remota de infraestructura esencial',
      'Sistemas de control de acceso',
      'Configuración de routers, switches y equipos activos',
      'Cámaras LPR y analítica de video',
      'Integración de UPS, sensores y equipos de respaldo',
    ],
  },
];

const proServices = [
  'Diseños de ingeniería',
  'Interventoría técnica',
  'Interventoría administrativa',
  'Consultoría especializada',
  'Auditoría técnica',
  'Evaluación financiera de proyectos',
];

export default function Services() {
  const [active, setActive] = useState(null);

  const toggle = (idx) => setActive(active === idx ? null : idx);

  return (
    <section className="services" id="servicios">
      <div className="services__inner">
        <p className="services__eyebrow">Lo que hacemos</p>
        <h2 className="services__title">
          Cuatro verticales / un mismo sistema
        </h2>
        <p className="services__desc">
          Estructuramos nuestra oferta en cuatro verticales integradas que
          permiten desarrollar proyectos de ingeniería de principio a fin.
        </p>

        <div className="services__grid">
          {verticals.map((v, i) => (
            <button
              key={i}
              className={`services__card ${active === i ? 'services__card--active' : ''}`}
              onClick={() => toggle(i)}
              aria-expanded={active === i}
            >
              <span className="services__card-num">{v.num}</span>
              <div className="services__card-icon">{v.icon}</div>
              <h3 className="services__card-title">{v.title}</h3>
              <p className="services__card-desc">{v.desc}</p>
              <div className="services__card-tags">
                {v.tags.map((t) => (
                  <span key={t} className="services__tag">{t}</span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {active !== null && (
          <div className="services__detail" key={active}>
            <h4 className="services__detail-title">
              Servicios de {verticals[active].title}
            </h4>
            <div className="services__detail-grid">
              {verticals[active].details.map((d, i) => (
                <div key={i} className="services__detail-item">
                  <span className="services__detail-dot" />
                  {d}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="services__pro">
          <div className="services__pro-left">
            <span className="services__pro-icon">◆</span>
            <div>
              <h4 className="services__pro-title">Servicios Profesionales</h4>
              <p className="services__pro-subtitle">Capa transversal a todas las verticales</p>
            </div>
          </div>
          <div className="services__pro-divider" />
          <div className="services__pro-chips">
            {proServices.map((s) => (
              <span key={s} className="services__pro-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

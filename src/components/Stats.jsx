import './Stats.css';

const stats = [
  { value: '+17 años', label: 'De experiencia acumulada del equipo' },
  { value: '$18.000 M', label: 'En proyectos desarrollados' },
  { value: '+20 departamentos', label: 'Con cobertura operativa en Colombia' },
  { value: '+40 proyectos', label: 'De referencia ejecutados' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner">
        {stats.map((s, i) => (
          <div key={i} className="stats__item">
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

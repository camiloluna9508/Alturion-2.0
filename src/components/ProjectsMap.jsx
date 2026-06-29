import { useState } from 'react';
import ColombiaMap from './ColombiaMap';
import ProjectPanel from './ProjectPanel';
import { departmentProjects, nationalProject } from '../data/departmentProjects';
import './ProjectsMap.css';

export default function ProjectsMap() {
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <section className="projects-map" id="proyectos">
      <div className="projects-map__inner">
        <p className="projects-map__eyebrow">Proyectos ejecutados</p>
        <h2 className="projects-map__title">Presencia en todo el territorio</h2>
        <p className="projects-map__desc">
          Haz clic en un departamento destacado para ver los proyectos ejecutados en esa zona.
        </p>

        <div className="projects-map__layout">
          <div className="projects-map__map-wrap">
            <ColombiaMap onSelect={setSelectedDept} selectedDept={selectedDept} />
            <div className="projects-map__legend">
              <div className="projects-map__legend-item">
                <span className="projects-map__legend-dot projects-map__legend-dot--active" />
                Departamento con proyecto ejecutado
              </div>
              <div className="projects-map__legend-item">
                <span className="projects-map__legend-dot projects-map__legend-dot--inactive" />
                Sin proyecto registrado
              </div>
            </div>
          </div>
          <ProjectPanel deptKey={selectedDept} onClose={() => setSelectedDept(null)} />
        </div>

        <ul className="sr-only" aria-label="Lista de departamentos con proyectos">
          {Object.entries(departmentProjects).map(([key, dept]) => (
            <li key={key}>
              <button onClick={() => setSelectedDept(key)}>
                {dept.name} — {dept.projects.length} proyecto(s)
              </button>
            </li>
          ))}
        </ul>

        <div className="projects-map__national">
          <div className="projects-map__national-badge">COBERTURA NACIONAL</div>
          <div className="projects-map__national-content">
            <div>
              <h4 className="projects-map__national-title">{nationalProject.title}</h4>
              <p className="projects-map__national-metrics">{nationalProject.metrics}</p>
              <p className="projects-map__national-note">{nationalProject.note}</p>
            </div>
            <div className="projects-map__national-meta">
              <span className="projects-map__national-year">{nationalProject.year}</span>
              <span className="projects-map__national-cat">{nationalProject.category}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

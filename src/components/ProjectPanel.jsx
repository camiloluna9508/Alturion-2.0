import { AnimatePresence, motion } from 'framer-motion';
import { departmentProjects } from '../data/departmentProjects';

export default function ProjectPanel({ deptKey, onClose }) {
  const data = deptKey ? departmentProjects[deptKey] : null;

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          key={deptKey}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="project-panel"
        >
          <div className="project-panel__header">
            <div>
              <div className="project-panel__name">{data.name}</div>
              <div className="project-panel__count">
                {data.projects.length === 1
                  ? '1 PROYECTO EJECUTADO'
                  : `${data.projects.length} PROYECTOS EJECUTADOS`}
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Cerrar panel"
              className="project-panel__close"
            >
              ✕
            </button>
          </div>

          <div className="project-panel__list">
            {data.projects.map((p, i) => (
              <div key={i} className="project-panel__card">
                <div className="project-panel__card-img">
                  {p.image ? (
                    <img src={p.image} alt={p.title} />
                  ) : (
                    <span className="project-panel__placeholder">◈</span>
                  )}
                  <div className="project-panel__year">{p.year}</div>
                </div>
                <div className="project-panel__card-body">
                  <div className="project-panel__category">{p.category}</div>
                  <div className="project-panel__card-title">{p.title}</div>
                  <div className="project-panel__metrics">{p.metrics}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

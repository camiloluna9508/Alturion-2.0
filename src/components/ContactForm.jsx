import { useState } from 'react';
import './ContactForm.css';

const projectTypes = [
  'Infraestructura civil',
  'Red de fibra óptica',
  'Sistema eléctrico / energía',
  'CCTV / videovigilancia',
  'Tecnología / automatización',
  'Interventoría o consultoría',
  'Otro',
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  description: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Requerido';
    if (!form.company.trim()) e.company = 'Requerido';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Correo inválido';
    if (!form.phone.trim() || form.phone.trim().length < 6)
      e.phone = 'Mínimo 6 caracteres';
    if (!form.projectType) e.projectType = 'Seleccione un tipo';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(
      `Solicitud de asesoría — ${form.projectType} · ${form.company}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa: ${form.company}\nCorreo: ${form.email}\nTeléfono: ${form.phone}\nTipo de proyecto: ${form.projectType}\nUbicación: ${form.location || 'No especificada'}\n\nDescripción:\n${form.description || 'No proporcionada'}`
    );

    window.location.href = `mailto:contacto@alturion.com.co?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__inner">
        <div className="contact__sidebar">
          <div className="contact__info-card">
            <h4 className="contact__info-title">Información de contacto</h4>
            <div className="contact__info-items">
              <div className="contact__info-item">
                <span className="contact__info-icon">✉</span>
                <span>contacto@alturion.com.co</span>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">✆</span>
                <span>311 552 6686</span>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">◉</span>
                <span>Cra. 10 # 79-33, Ibagué, Colombia</span>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">◎</span>
                <span>www.alturion.com.co</span>
              </div>
            </div>
          </div>

          <div className="contact__wa-card">
            <h4 className="contact__wa-title">Atención al cliente</h4>
            <p className="contact__wa-desc">
              Escríbanos por WhatsApp para una respuesta más rápida.
            </p>
            <a
              href="https://wa.me/573115526686?text=Hola%20Alturion%2C%20me%20gustar%C3%ADa%20recibir%20atenci%C3%B3n%20al%20cliente."
              target="_blank"
              rel="noopener noreferrer"
              className="contact__wa-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <span className="contact__wa-label">Atención al cliente</span>
                <span className="contact__wa-number">+57 311 552 6686</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact__form-wrap">
          <p className="contact__eyebrow">Hablemos</p>
          <h2 className="contact__title">Solicite asesoría para su proyecto</h2>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label">Nombre completo *</label>
                <input
                  className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>
              <div className="contact__field">
                <label className="contact__label">Empresa u organización *</label>
                <input
                  className={`contact__input ${errors.company ? 'contact__input--error' : ''}`}
                  type="text"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                />
                {errors.company && <span className="contact__error">{errors.company}</span>}
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label">Correo electrónico *</label>
                <input
                  className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>
              <div className="contact__field">
                <label className="contact__label">Teléfono / WhatsApp *</label>
                <input
                  className={`contact__input ${errors.phone ? 'contact__input--error' : ''}`}
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
                {errors.phone && <span className="contact__error">{errors.phone}</span>}
              </div>
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label">Tipo de proyecto *</label>
                <select
                  className={`contact__input contact__select ${errors.projectType ? 'contact__input--error' : ''}`}
                  value={form.projectType}
                  onChange={(e) => update('projectType', e.target.value)}
                >
                  <option value="">Seleccionar...</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.projectType && <span className="contact__error">{errors.projectType}</span>}
              </div>
              <div className="contact__field">
                <label className="contact__label">Departamento / Ciudad</label>
                <input
                  className="contact__input"
                  type="text"
                  value={form.location}
                  onChange={(e) => update('location', e.target.value)}
                />
              </div>
            </div>

            <div className="contact__field contact__field--full">
              <label className="contact__label">Descripción breve del proyecto</label>
              <textarea
                className="contact__input contact__textarea"
                rows={4}
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={sent}
            >
              {sent ? 'Solicitud preparada ✓' : 'Solicitar asesoría'}
            </button>

            {sent && (
              <p className="contact__confirmation">
                Se ha abierto su cliente de correo con los datos del formulario.
                Si no se abrió automáticamente, escriba directamente a{' '}
                <strong>contacto@alturion.com.co</strong>.
              </p>
            )}

            <p className="contact__legal">
              Al enviar este formulario, usted autoriza el tratamiento de sus datos
              personales de acuerdo con la Ley 1581 de 2012 de protección de datos
              personales de Colombia.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

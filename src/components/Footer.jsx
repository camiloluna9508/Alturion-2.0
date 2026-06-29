import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Bloque de cierre */}
      <div className="footer__cta-block">
        <div className="footer__cta-glow" aria-hidden="true" />
        <div className="footer__cta-inner">
          <div className="footer__cta-text">
            <span className="footer__cta-tag">¿Tiene un proyecto en mente?</span>
            <h2 className="footer__cta-headline">
              Hablemos de su{' '}
              <span className="footer__cta-accent">próximo</span> proyecto.
            </h2>
            <p className="footer__cta-desc">
              Nuestro equipo técnico está listo para asesorarle. Del diseño a la
              operación, con cobertura en más de 20 departamentos de Colombia.
            </p>
          </div>
          <div className="footer__cta-buttons">
            <a href="#contacto" className="footer__cta-btn footer__cta-btn--primary">
              Solicitar asesoría
            </a>
            <a
              href="https://wa.me/573115526686"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__cta-btn footer__cta-btn--secondary"
            >
              Atención al cliente
            </a>
          </div>
        </div>
      </div>

      {/* Grid principal */}
      <div className="footer__grid-wrap">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              ALTURI<span className="footer__logo-accent">O</span>N
            </div>
            <p className="footer__tagline">Ingeniería que conecta</p>
            <p className="footer__brand-desc">
              Empresa colombiana de ingeniería integral. Infraestructura, energía,
              telecomunicaciones y tecnología.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">RITEL</span>
              <span className="footer__badge">RETIE</span>
              <span className="footer__badge">SG-SST</span>
              <span className="footer__badge">+20 Departamentos</span>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Servicios</h4>
            <ul className="footer__list">
              <li><a href="#servicios">Infraestructura civil</a></li>
              <li><a href="#servicios">Energía y sistemas eléctricos</a></li>
              <li><a href="#servicios">Telecomunicaciones</a></li>
              <li><a href="#servicios">Tecnología e integración</a></li>
              <li><a href="#servicios">Interventoría y consultoría</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Empresa</h4>
            <ul className="footer__list">
              <li><a href="#nosotros">Quiénes somos</a></li>
              <li><a href="#proyectos">Proyectos ejecutados</a></li>
              <li><a href="#nosotros">Nuestro equipo</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Tratamiento de datos</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__list footer__list--contact">
              <li>Cra. 10 # 79-33, Ibagué, Colombia</li>
              <li>311 552 6686</li>
              <li>contacto@alturion.com.co</li>
              <li>www.alturion.com.co</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wordmark decorativo */}
      <div className="footer__wordmark-wrap" aria-hidden="true">
        <div className="footer__wordmark">ALTURION</div>
      </div>

      {/* Barra inferior */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            © 2026 Alturion SAS · Todos los derechos reservados · Ibagué, Colombia
          </p>
          <div className="footer__bottom-links">
            <a href="#">Política de privacidad</a>
            <span>·</span>
            <a href="#">Tratamiento de datos · Ley 1581/2012</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

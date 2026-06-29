import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          ALTURI<span className="navbar__logo-accent">O</span>N
        </a>

        <button
          className={`navbar__hamburger ${open ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="navbar__cta"
            onClick={() => setOpen(false)}
          >
            Contáctenos
          </a>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import logoFull from "../assets/logos/brody-full-on-dark.png";

const LINKS = [
  { label: "Problema", href: "#problema" },
  { label: "Cómo trabajamos", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="inicio">
      <div className="container nav-wrap">
        <a className="brand" href="#inicio" aria-label="Brody, inicio">
          <img src={logoFull} alt="Brody" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav${open ? " is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

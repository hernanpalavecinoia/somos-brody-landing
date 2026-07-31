import logoFull from "../assets/logos/brody-full-on-dark.png";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <img src={logoFull} alt="Brody, soluciones con IA" />
        <div className="footer-meta">
          <p>Soluciones estratégicas para responder, convertir y crecer.</p>
          <a
            className="footer-social"
            href="https://www.instagram.com/somosbrody/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Brody en Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

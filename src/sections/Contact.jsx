import { WHATSAPP_LINK_DEFAULT } from "../config";

export function Contact() {
  return (
    <section className="section-light contact" id="contacto">
      <div className="dot-field dot-field-left" aria-hidden="true"></div>
      <div className="dot-field dot-field-right" aria-hidden="true"></div>
      <div className="container contact-inner reveal">
        <h2>Contanos dónde se está frenando tu negocio</h2>
        <p>
          No necesitás tener claro qué solución contratar.
          <br />
          Escribinos qué está pasando y analizamos cómo podemos ayudarte.
        </p>
        <a
          className="button button-primary button-large whatsapp-link"
          href={WHATSAPP_LINK_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}

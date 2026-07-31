import { WHATSAPP_LINK } from "../config";
import heroIllustration from "../assets/illustrations/hero-automation.svg";

export function Hero() {
  return (
    <section className="hero section-dark">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <h1>
            Tu negocio
            <br />
            pierde clientes
            <br />
            porque{" "}
            <span>
              nadie
              <br />
              contesta a tiempo?
            </span>
          </h1>
          <p>
            En Brody detectamos dónde se pierden tus oportunidades y
            diseñamos soluciones para responder, convertir y dar seguimiento
            de forma más eficiente.
          </p>
          <p>
            Aplicamos automatización e inteligencia artificial solo cuando
            realmente ayudan a mejorar tu negocio.
          </p>
          <div className="button-row">
            <a
              className="button button-primary whatsapp-link"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribinos por WhatsApp
            </a>
            <a className="button button-ghost" href="#metodo">
              Ver cómo trabajamos
            </a>
          </div>
        </div>

        <div
          className="hero-visual reveal reveal-delay"
          aria-label="Ilustración de un asistente de inteligencia artificial respondiendo consultas"
        >
          <img
            src={heroIllustration}
            alt="Asistente virtual de Brody atendiendo una consulta comercial"
          />
        </div>
      </div>
    </section>
  );
}

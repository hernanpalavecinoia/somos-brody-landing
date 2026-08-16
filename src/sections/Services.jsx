import { REVEAL_DELAY } from "../lib/reveal";
import aiIcon from "../assets/illustrations/service-ai.svg";
import adsIcon from "../assets/illustrations/service-ads.svg";
import designIcon from "../assets/illustrations/service-design.svg";

const CARDS = [
  {
    icon: aiIcon,
    alt: "Icono de automatizaciones con inteligencia artificial",
    label: "Automatizaciones con IA",
    labelClass: "service-label-purple",
    text: "Creamos sistemas que responden consultas, califican oportunidades y acompañan a cada cliente durante el proceso, incluso cuando vos no estás disponible.",
    listClass: "",
    items: ["Respuestas 24/7", "Clasificación de consultas", "Acompañamiento hasta el cierre"],
  },
  {
    icon: adsIcon,
    alt: "Icono de campañas y Meta Ads",
    label: "Meta Ads",
    labelClass: "service-label-lime",
    text: "Si todavía no tenés campañas armadas (o no te convencen los resultados), te las armamos y gestionamos mes a mes en Instagram y Facebook.",
    listClass: "list-lime",
    items: ["Campaña armada de cero", "Gestión y optimización mensual", "Para sumar tráfico si todavía no lo tenés"],
  },
  {
    icon: designIcon,
    alt: "Icono de diseño gráfico y comunicación visual",
    label: "Diseño gráfico",
    labelClass: "service-label-purple",
    text: "Creamos las piezas visuales que tu negocio necesita para comunicar con claridad, sostener sus campañas y mantener una identidad coherente.",
    listClass: "",
    items: ["Piezas que comunican y venden", "Identidad visual consistente", "Diseño para campañas y redes"],
  },
];

export function Services() {
  return (
    <section className="section-light services" id="servicios">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Servicios</span>
          <h2>La solución depende del problema</h2>
        </div>

        <div className="services-grid">
          {CARDS.map((card, i) => (
            <article key={card.label} className={`service-card reveal ${REVEAL_DELAY[i]}`}>
              <img src={card.icon} alt={card.alt} />
              <h3 className={`service-label ${card.labelClass}`}>{card.label}</h3>
              <p>{card.text}</p>
              <ul className={card.listClass}>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { REVEAL_DELAY } from "../lib/reveal";
import diagnosticIcon from "../assets/illustrations/diagnostic.svg";
import proposalIcon from "../assets/illustrations/proposal.svg";
import implementationIcon from "../assets/illustrations/implementation.svg";

const CARDS = [
  {
    n: 1,
    icon: diagnosticIcon,
    alt: "Ilustración de diagnóstico y análisis",
    title: "Diagnóstico",
    text: "Analizamos tu negocio para detectar dónde se están perdiendo oportunidades: en el tráfico, la conversión o el seguimiento.",
  },
  {
    n: 2,
    icon: proposalIcon,
    alt: "Ilustración de una propuesta armada a medida",
    title: "Propuesta a medida",
    text: "Definimos qué necesita realmente tu negocio y diseñamos una solución acorde al problema, combinando solo las herramientas necesarias.",
  },
  {
    n: 3,
    icon: implementationIcon,
    alt: "Ilustración de implementación y puesta en marcha",
    title: (
      <>
        Implementación
        <br />y seguimiento
      </>
    ),
    text: "Ponemos la solución en marcha, medimos su funcionamiento y realizamos los ajustes necesarios para que siga respondiendo a los objetivos del negocio.",
  },
];

export function Method() {
  return (
    <section className="section-dark method" id="metodo">
      <div className="container">
        <div className="section-heading section-heading-dark reveal">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>
            Primero entendemos, <span>después proponemos</span>
          </h2>
        </div>

        <div className="method-grid">
          {CARDS.map((card, i) => (
            <article key={card.n} className={`method-card reveal ${REVEAL_DELAY[i]}`}>
              <span className="number-badge">{card.n}</span>
              <img src={card.icon} alt={card.alt} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

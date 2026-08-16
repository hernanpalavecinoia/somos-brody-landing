import { REVEAL_DELAY } from "../lib/reveal";

const CARDS = [
  {
    n: 1,
    title: "Tiempo de respuesta",
    text: "¿Tardás horas en contestar y el cliente ya eligió a otro?",
  },
  {
    n: 2,
    title: "Tareas repetitivas",
    text: "¿Perdés tiempo respondiendo siempre lo mismo en vez de vender?",
  },
  {
    n: 3,
    title: "Agendamiento",
    text: "¿Conseguís que te escriban, pero se pierde tiempo coordinando el horario de la reunión?",
  },
];

export function Problem() {
  return (
    <section className="section-light problem" id="problema">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">El problema</span>
          <h2>¿Dónde se te escapan los clientes que ya te escriben?</h2>
        </div>

        <div className="problem-grid">
          {CARDS.map((card, i) => (
            <article key={card.n} className={`problem-card reveal ${REVEAL_DELAY[i]}`}>
              <span className="number-badge">{card.n}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="problem-callout reveal">
          <div className="callout-icon" aria-hidden="true">
            <svg viewBox="0 0 90 90">
              <circle cx="39" cy="39" r="24" />
              <path d="M57 57 77 77M29 46V33M39 46V25M49 46V37" />
            </svg>
          </div>
          <p>
            No necesitás saber qué herramienta o tecnología implementar.
            Contanos qué está pasando en tu negocio: analizamos dónde está el
            freno y te recomendamos qué conviene mejorar, incorporando
            tecnología solo cuando realmente suma.
          </p>
        </div>
      </div>
    </section>
  );
}

import { REVEAL_DELAY } from "../lib/reveal";

const CARDS = [
  {
    n: 1,
    title: "Tráfico",
    text: "¿No estás llegando a suficientes personas interesadas en lo que ofrecés?",
  },
  {
    n: 2,
    title: "Conversión",
    text: "¿Recibís consultas, pero pocas terminan convirtiéndose en ventas?",
  },
  {
    n: 3,
    title: "Seguimiento",
    text: "¿Conseguís clientes, pero no tenés un sistema para que vuelvan a comprarte?",
  },
];

export function Problem() {
  return (
    <section className="section-light problem" id="problema">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">El problema</span>
          <h2>¿En dónde se traba tu negocio?</h2>
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

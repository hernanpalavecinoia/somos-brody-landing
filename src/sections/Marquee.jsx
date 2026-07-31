const ITEMS = ["Analizamos tu caso", "Proponemos con criterio", "Implementamos y ajustamos"];
const REPEATS_PER_HALF = 4;

function Track({ keyPrefix }) {
  return Array.from({ length: REPEATS_PER_HALF }).flatMap((_, r) =>
    ITEMS.map((item) => (
      <span key={`${keyPrefix}-${r}-${item}`}>
        {item}
        <b> • </b>
      </span>
    )),
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-label="Cómo trabaja Brody">
      <div className="marquee-track">
        <Track keyPrefix="a" />
        <Track keyPrefix="b" />
      </div>
    </div>
  );
}

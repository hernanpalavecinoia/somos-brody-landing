import { ChatDemo } from "./ChatDemo";

export function Demo() {
  return (
    <section className="section-dark demo" id="hablar-con-bro">
      <div className="container">
        <div className="section-heading section-heading-dark reveal">
          <h2>
            Así convertimos consultas <span>en oportunidades</span>
          </h2>
        </div>

        <div className="demo-panel reveal">
          <div className="demo-copy">
            <span className="mini-pill">Probalo vos mismo</span>
            <h3>Hablá con Bro</h3>
            <p>Probá en vivo cómo respondería tu propio asistente.</p>
            <p>
              Bro te muestra cómo sería tu negocio atendiendo consultas,
              respondiendo al instante y acompañando clientes 24/7.
            </p>
            <a href="#contacto" className="text-link">
              Quiero mejorar mi atención →
            </a>
          </div>
          <div className="demo-image">
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

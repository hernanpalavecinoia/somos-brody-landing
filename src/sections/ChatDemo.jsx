import { useState } from "react";
import { CHAT_WEBHOOK_URL, WHATSAPP_LINK } from "../config";

const INITIAL_MESSAGE = "Contame tu rubro y te muestro en vivo cómo respondería a tus clientes 👋";
const MAX_RESUMEN = 300;

export function ChatDemo() {
  const [messages, setMessages] = useState([
    { rol: "bro", contenido: INITIAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const mensaje = input.trim();
    if (!mensaje || sending) return;

    const historial = messages.map((m) => ({ rol: m.rol, contenido: m.contenido }));
    setMessages((prev) => [...prev, { rol: "usuario", contenido: mensaje }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch(CHAT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje, historial }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { rol: "bro", contenido: data.respuesta || "No pude responder, escribinos por WhatsApp." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { rol: "bro", contenido: "Hubo un problema de conexión. Escribinos por WhatsApp." },
      ]);
    } finally {
      setSending(false);
    }
  }

  // Mensajes que escribió la persona en el demo (no los de Bro-web).
  const mensajesUsuario = messages.filter((m) => m.rol === "usuario").map((m) => m.contenido);
  const yaHabloConBro = mensajesUsuario.length > 0;

  // Resumen corto de lo que ya contó, para precargarlo en WhatsApp.
  // Si la persona lo borra y escribe "hola" en su lugar, Bro lo trata como
  // un contacto directo de cero (mismo comportamiento de siempre) — esto
  // es solo un atajo para no repetir lo que ya dijo acá.
  function armarResumen() {
    let resumen = mensajesUsuario.join(" "); // texto crudo, en orden
    if (resumen.length > MAX_RESUMEN) resumen = resumen.slice(0, MAX_RESUMEN).trim() + "...";
    return `Vengo de la web. Ya le conté esto a Bro: "${resumen}"`;
  }

  const whatsappHref = yaHabloConBro
    ? `${WHATSAPP_LINK}?text=${encodeURIComponent(armarResumen())}`
    : WHATSAPP_LINK;

  return (
    <div className="chat-panel">
      <div className="chat-panel__header">
        <div className="chat-panel__avatar">B</div>
        <div className="chat-panel__title">
          <strong>Bro</strong>
          <span>Asistente de Brody · en línea</span>
        </div>
      </div>

      <div className="chat-panel__messages">
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble chat-bubble--${m.rol === "usuario" ? "user" : "bro"}`}>
            {m.contenido}
          </div>
        ))}
        {sending && (
          <div className="chat-bubble chat-bubble--bro chat-bubble--pending">Escribiendo...</div>
        )}
      </div>

      <form className="chat-panel__form" onSubmit={handleSubmit}>
        <input
          className="chat-panel__input"
          type="text"
          placeholder="Escribí un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={sending}
        />
        <button
          className="chat-panel__send"
          type="submit"
          aria-label="Enviar mensaje"
          disabled={sending || !input.trim()}
        >
          ➤
        </button>
      </form>

      {yaHabloConBro && (
        <a
          className="chat-panel__whatsapp-cta"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Continuar por WhatsApp →
        </a>
      )}
    </div>
  );
}

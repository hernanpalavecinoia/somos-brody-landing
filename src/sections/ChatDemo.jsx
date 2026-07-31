import { useState } from "react";
import { CHAT_WEBHOOK_URL } from "../config";

const INITIAL_MESSAGE = "Contame tu rubro y te muestro cómo te atendería 👋";

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
    </div>
  );
}

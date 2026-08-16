export const WHATSAPP_NUMBER = "5491149405107";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Mensaje precargado para los botones de WhatsApp que NO vienen del chat demo
// (ese tiene su propio mensaje con contexto, armado en ChatDemo.jsx).
const WHATSAPP_DEFAULT_TEXT = "Hola! Vengo de la web de Brody, quiero saber más.";
export const WHATSAPP_LINK_DEFAULT = `${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

export const CHAT_WEBHOOK_URL =
  "https://vestigio-abogados-n8n.zwhzlv.easypanel.host/webhook/brody-chat";

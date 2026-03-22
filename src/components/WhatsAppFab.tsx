import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5491100000000?text=Hola%20Cecilia%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta";

const WhatsAppFab = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppFab;

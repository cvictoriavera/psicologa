import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const WHATSAPP_URL =
  "https://wa.me/5491100000000?text=Hola%20Cecilia%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("¡Mensaje enviado! Te responderé pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Empezá hoy tu camino
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <Input
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl py-6 bg-card border-border"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                placeholder="Tu email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl py-6 bg-card border-border"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <Textarea
                placeholder="¿En qué puedo ayudarte?"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl bg-card border-border resize-none"
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              size="lg"
              className="rounded-full px-8 py-6 w-full font-semibold shadow-soft"
            >
              <Send className="mr-2 h-5 w-5" />
              Enviar mensaje
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 font-sans">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">
                    La forma más rápida de agendar tu turno.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold hover:underline mt-1 inline-block"
                  >
                    Escribime ahora →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 font-sans">Email</h4>
                  <p className="text-muted-foreground text-sm">contacto@ceciliabenitp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 font-sans">Modalidad</h4>
                  <p className="text-muted-foreground text-sm">Atención online · Sesiones virtuales</p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 mt-10 italic text-foreground/70 text-lg">
              "Un lugar seguro para ti."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

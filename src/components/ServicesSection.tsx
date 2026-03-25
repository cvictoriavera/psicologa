import { motion } from "framer-motion";
import {
  Brain,
  HeartHandshake,
  Flame,
  Compass,
  ShieldAlert,
  Sparkles,
  HandHeart,
  Lightbulb,
} from "lucide-react";

const services = [
  { icon: Brain, title: "Ansiedad", desc: "Herramientas para gestionar la ansiedad y recuperar la calma." },
  { icon: HeartHandshake, title: "Relaciones", desc: "Construir vínculos sanos y resolver conflictos interpersonales." },
  { icon: Flame, title: "Ataques de pánico", desc: "Acompañamiento para entender y atravesar las crisis de pánico." },
  { icon: Compass, title: "Duelos", desc: "Duelos por seres queridos o migratorios. Acompañamiento en el dolor." },
  { icon: ShieldAlert, title: "Urgencias subjetivas", desc: "Contención en momentos de crisis emocional aguda." },
  { icon: Sparkles, title: "Gestión de emociones", desc: "Aprender a identificar, expresar y regular tus emociones." },
  { icon: HandHeart, title: "Consejería en salud mental", desc: "Orientación profesional para el bienestar psicológico." },
  { icon: Lightbulb, title: "Acompañamiento psicológico", desc: "Un espacio para explorar, entender y crecer." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ¿Qué te trae por acá?
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto mt-2">Cada persona es única, y tu proceso también lo es.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-sans">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

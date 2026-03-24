import { motion } from "framer-motion";
import ceciliaImg from "@/assets/cecilia-02.jpeg";
import logoImg from "@/assets/logo-corazon.png";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 ">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img
                src={ceciliaImg}
                alt="Lic. Cecilia Belén Benito - Psicóloga Clínica"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6">
              <img src={logoImg} alt="Logo" className="w-20 h-20 object-contain" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg font-semibold text-fancy tracking-[0.2em] text-primary mb-3">
              Un poco sobre mí
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hola, soy Cecilia
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy Psicóloga Clínica y creo profundamente en que cada persona
                tiene la capacidad de sanar y transformarse. Mi enfoque es
                cálido, empático y respetuoso de tus tiempos.
              </p>
              <p>
                Trabajo con adolescentes y adultos que buscan un espacio
                seguro donde puedan expresarse sin juicios. Cada proceso es
                único y lo acompaño con compromiso y dedicación.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                "Soltar el control es aprender a conocer tu paz."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

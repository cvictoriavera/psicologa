import { motion } from "framer-motion";
import { Users, MessageCircle, Video, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_PROGRAM =
  "https://wa.me/5491100000000?text=Hola%20Cecilia%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Programa%20para%20Hombres";

const ProgramSection = () => {
  return (
    <section id="programa" className="py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-foreground shadow-card"
        >
          {/* Background overlay if needed */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/90 opacity-95" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Column */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 transition-colors rounded-full px-4 py-2 mb-8">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Programa Grupal Virtual
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                  Programa para Hombres:
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Repensando la violencia
                </h3>

                <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed max-w-xl">
                  Un espacio seguro y confidencial para reflexionar sobre las
                  conductas violentas, entender su origen y desarrollar herramientas
                  para construir relaciones más sanas.
                </p>

                <p className="text-white/60 text-sm md:text-base mb-10 max-w-xl">
                  Este grupo es virtual y está abierto a cualquier persona que considere que lo
                  necesita o tiene dificultades de control en sus relaciones.
                </p>

                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold shadow-soft hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={WHATSAPP_PROGRAM} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Más información
                  </a>
                </Button>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4 max-w-md ml-auto w-full">

                {/* Card 1 */}
                <div className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Modalidad Virtual</h4>
                    <p className="text-white/60 text-sm">Desde cualquier lugar</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Espacio seguro</h4>
                    <p className="text-white/60 text-sm">Sin juzgar, con respeto</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Proceso de cambio</h4>
                    <p className="text-white/60 text-sm">Herramientas concretas</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;

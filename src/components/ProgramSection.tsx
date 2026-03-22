import { motion } from "framer-motion";
import { Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_PROGRAM =
  "https://wa.me/5491100000000?text=Hola%20Cecilia%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20Programa%20para%20Hombres";

const ProgramSection = () => {
  return (
    <section id="programa" className="py-24 gradient-section">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(300_73%_28%)] via-[hsl(280_50%_35%)] to-[hsl(342_100%_72%)] opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                Grupo virtual
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Programa para Hombres:
              <br />
              <span className="italic font-normal opacity-90">
                Repensando la violencia
              </span>
            </h2>

            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
              Un espacio grupal virtual para quienes reconocen dificultades de
              control en sus relaciones y desean trabajar en ello. No
              necesitás un diagnóstico: si sentís que lo necesitás, este
              espacio es para vos.
            </p>

            <p className="text-white/60 text-sm mb-10">
              Puede participar cualquier persona que considere que lo necesita.
            </p>

            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base font-semibold bg-white text-foreground hover:bg-white/90 shadow-soft"
              asChild
            >
              <a href={WHATSAPP_PROGRAM} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Quiero más información
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;

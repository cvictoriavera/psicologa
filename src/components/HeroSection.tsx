import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5491100000000?text=Hola%20Cecilia%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/7195994/7195994-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(340_60%_88%/0.85)] via-[hsl(280_50%_90%/0.80)] to-[hsl(260_60%_88%/0.90)]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold tracking-[0.25em] text-secondary-foreground mb-4"
        >
          Psicóloga Clínica Online
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl text-foreground font-bold leading-tight mb-6"
        >
          Hablar sana lo que el silencio rompe.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground max-w-xl mx-auto mb-10"
        >
          Acompaño tu proceso, respeto tu tiempo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold shadow-soft"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendá tu turno
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold bg-card/60 backdrop-blur-sm border-border hover:bg-card/80"
            asChild
          >
            <a href="#contacto">Escribime</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

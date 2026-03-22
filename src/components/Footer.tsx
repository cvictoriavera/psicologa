import logoImg from "@/assets/logo-corazon.png";

const Footer = () => (
  <footer className="py-12 gradient-section border-t border-border">
    <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cecilia Belén Benito · Psicóloga Clínica
        </span>
      </div>
      <p className="text-xs text-muted-foreground/60 italic">
        "Hablar sana lo que el silencio rompe."
      </p>
    </div>
  </footer>
);

export default Footer;

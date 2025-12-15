import { Cpu, Heart, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 neon-line opacity-30" />
      
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Cpu className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              AI<span className="text-gradient">Hub</span>
            </span>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted-foreground transition-all hover:text-primary hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Credits */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              Creado con <Heart className="h-4 w-4 fill-accent text-accent animate-pulse" /> por el equipo de IA
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Empresa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
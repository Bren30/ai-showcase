import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-sm font-semibold text-foreground">
              AI Hub
            </span>
          </div>
          
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Creado con <Heart className="h-4 w-4 fill-category-marketing text-category-marketing" /> por el equipo de IA
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold text-foreground">
              AI Hub
            </span>
            <span className="text-xs text-muted-foreground">
              Herramientas Inteligentes
            </span>
          </div>
        </div>
        
        <nav className="hidden items-center gap-6 md:flex">
          <a 
            href="#proyectos" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Proyectos
          </a>
          <a 
            href="#categorias" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Categorías
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

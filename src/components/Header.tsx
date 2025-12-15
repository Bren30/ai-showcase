import { Cpu, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <Cpu className="h-5 w-5 text-primary-foreground" />
            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              AI<span className="text-gradient">Hub</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Intelligence Platform
            </span>
          </div>
        </div>
        
        <nav className="hidden items-center gap-8 md:flex">
          <a 
            href="#proyectos" 
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Explorar
          </a>
          <a 
            href="#categorias" 
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Categorías
          </a>
          <a 
            href="#stats" 
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Impacto
          </a>
        </nav>

        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#proyectos" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Explorar
            </a>
            <a href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Categorías
            </a>
            <a href="#stats" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Impacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
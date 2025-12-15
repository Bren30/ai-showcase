import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div 
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            12 herramientas disponibles
          </div>
          
          <h1 
            className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in md:text-5xl lg:text-6xl"
            style={{ animationDelay: "200ms" }}
          >
            Herramientas de IA
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              para toda la empresa
            </span>
          </h1>
          
          <p 
            className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            Descubre las aplicaciones inteligentes que tu equipo de IA ha creado para hacer tu trabajo más fácil y productivo.
          </p>
          
          <div 
            className="mx-auto max-w-xl opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar herramientas por nombre, función o área..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-14 w-full rounded-2xl border-border/50 bg-card pl-12 pr-4 text-base shadow-card transition-all placeholder:text-muted-foreground focus:border-primary focus:shadow-card-hover focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

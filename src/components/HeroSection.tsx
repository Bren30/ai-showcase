import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[100px] animate-float" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div 
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-muted-foreground">12 herramientas activas</span>
            <Sparkles className="h-3.5 w-3.5 text-accent" />
          </div>
          
          <h1 
            className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in md:text-6xl lg:text-7xl"
            style={{ animationDelay: "200ms" }}
          >
            Inteligencia Artificial
            <span className="block mt-2 text-gradient">
              al alcance de todos
            </span>
          </h1>
          
          <p 
            className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: "300ms" }}
          >
            Descubre las herramientas que nuestro equipo de IA ha creado para potenciar tu trabajo. 
            Sin código, sin complicaciones, solo resultados.
          </p>
          
          <div 
            className="mx-auto max-w-xl opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-20 blur-lg group-focus-within:opacity-40 transition-opacity" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por nombre, función o área..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="h-14 w-full rounded-2xl border-border/50 bg-card/80 pl-12 pr-4 text-base backdrop-blur-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Populares:</span>
              {["Chatbot", "Reportes", "Análisis"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSearchChange(tag)}
                  className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 neon-line opacity-50" />
    </section>
  );
};

export default HeroSection;
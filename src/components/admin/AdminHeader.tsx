import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, Plus } from "lucide-react";

interface AdminHeaderProps {
  onNewProject: () => void;
}

export const AdminHeader = ({ onNewProject }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link 
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Volver al portal</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-primary" />
                <div className="absolute inset-0 w-6 h-6 bg-primary/50 blur-lg" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="text-gradient">Admin</span>
                <span className="text-foreground/80 ml-1">Panel</span>
              </span>
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={onNewProject}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-button hover:shadow-glow"
          >
            <Plus className="w-4 h-4" />
            Nuevo Proyecto
          </button>
        </div>
      </div>
    </header>
  );
};

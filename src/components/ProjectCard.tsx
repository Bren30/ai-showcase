import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Project, type CategoryType } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryGradients: Record<CategoryType, string> = {
  support: "from-category-support/20 to-category-support/5",
  marketing: "from-category-marketing/20 to-category-marketing/5",
  finance: "from-category-finance/20 to-category-finance/5",
  hr: "from-category-hr/20 to-category-hr/5",
  sales: "from-category-sales/20 to-category-sales/5",
  operations: "from-category-operations/20 to-category-operations/5",
  docs: "from-category-docs/20 to-category-docs/5",
};

const categoryColors: Record<CategoryType, string> = {
  support: "text-category-support",
  marketing: "text-category-marketing",
  finance: "text-category-finance",
  hr: "text-category-hr",
  sales: "text-category-sales",
  operations: "text-category-operations",
  docs: "text-category-docs",
};

const categoryBorders: Record<CategoryType, string> = {
  support: "border-category-support/30 hover:border-category-support/60",
  marketing: "border-category-marketing/30 hover:border-category-marketing/60",
  finance: "border-category-finance/30 hover:border-category-finance/60",
  hr: "border-category-hr/30 hover:border-category-hr/60",
  sales: "border-category-sales/30 hover:border-category-sales/60",
  operations: "border-category-operations/30 hover:border-category-operations/60",
  docs: "border-category-docs/30 hover:border-category-docs/60",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const Icon = project.icon;
  
  return (
    <article 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up",
        categoryBorders[project.category]
      )}
      style={{ animationDelay: `${100 + index * 75}ms` }}
    >
      {/* Gradient header */}
      <div className={cn("h-1.5 w-full bg-gradient-to-r", categoryGradients[project.category].replace("/20", "").replace("/5", ""))} />
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform group-hover:scale-110",
            categoryGradients[project.category]
          )}>
            <Icon className={cn("h-6 w-6", categoryColors[project.category])} />
          </div>
          <span className={cn("text-xs font-mono", categoryColors[project.category])}>
            {project.id}
          </span>
        </div>
        
        {/* Title & Category */}
        <div className="mb-3">
          <span className={cn("text-xs font-medium uppercase tracking-wider", categoryColors[project.category])}>
            {project.categoryLabel}
          </span>
          <h3 className="mt-1 font-display text-lg font-semibold text-foreground group-hover:text-gradient transition-all">
            {project.name}
          </h3>
        </div>
        
        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        {/* Author */}
        <div className="mb-5 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-xs font-semibold text-foreground">
            {project.author.split(" ").map(n => n[0]).join("")}
          </div>
          <span className="text-sm text-muted-foreground">{project.author}</span>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button 
            asChild
            className={cn(
              "flex-1 gap-2 rounded-xl font-medium transition-all",
              "bg-gradient-to-r from-primary to-accent hover:shadow-glow text-primary-foreground"
            )}
          >
            <a href={project.accessUrl} target="_blank" rel="noopener noreferrer">
              <Sparkles className="h-4 w-4" />
              Usar ahora
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            asChild
            className="shrink-0 rounded-xl border-border/50 hover:border-primary/50 hover:text-primary"
          >
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              title="Ver código fuente"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br opacity-10", categoryGradients[project.category])} />
      </div>
    </article>
  );
};

export default ProjectCard;
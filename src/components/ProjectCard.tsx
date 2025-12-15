import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type Project, type CategoryType } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColorClasses: Record<CategoryType, string> = {
  support: "bg-category-support/10 text-category-support border-category-support/20",
  marketing: "bg-category-marketing/10 text-category-marketing border-category-marketing/20",
  finance: "bg-category-finance/10 text-category-finance border-category-finance/20",
  hr: "bg-category-hr/10 text-category-hr border-category-hr/20",
  sales: "bg-category-sales/10 text-category-sales border-category-sales/20",
  operations: "bg-category-operations/10 text-category-operations border-category-operations/20",
  docs: "bg-category-docs/10 text-category-docs border-category-docs/20",
};

const iconBgClasses: Record<CategoryType, string> = {
  support: "bg-category-support",
  marketing: "bg-category-marketing",
  finance: "bg-category-finance",
  hr: "bg-category-hr",
  sales: "bg-category-sales",
  operations: "bg-category-operations",
  docs: "bg-category-docs",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const Icon = project.icon;
  
  return (
    <article 
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${100 + index * 50}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between p-5 pb-3">
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", iconBgClasses[project.category])}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <Badge 
          variant="outline" 
          className={cn("border", categoryColorClasses[project.category])}
        >
          {project.categoryLabel}
        </Badge>
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">{project.id}</span>
        </div>
        
        <h3 className="mb-2 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        
        <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        {/* Author */}
        <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary font-medium text-secondary-foreground">
            {project.author.split(" ").map(n => n[0]).join("")}
          </div>
          <span>{project.author}</span>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button 
            asChild
            className="flex-1 gap-2 rounded-xl bg-primary font-medium shadow-button transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <a href={project.accessUrl} target="_blank" rel="noopener noreferrer">
              Usar ahora
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            asChild
            className="shrink-0 rounded-xl border-border/50"
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
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
    </article>
  );
};

export default ProjectCard;

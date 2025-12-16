import { ArrowRight, Github } from "lucide-react";
import { Project, categoryLabels } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors: Record<string, { bg: string; text: string; button: string }> = {
  support: { 
    bg: "bg-category-support/10", 
    text: "text-category-support",
    button: "bg-category-support hover:bg-category-support/90"
  },
  marketing: { 
    bg: "bg-category-marketing/10", 
    text: "text-category-marketing",
    button: "bg-category-marketing hover:bg-category-marketing/90"
  },
  finance: { 
    bg: "bg-category-finance/10", 
    text: "text-category-finance",
    button: "bg-category-finance hover:bg-category-finance/90"
  },
  hr: { 
    bg: "bg-category-hr/10", 
    text: "text-category-hr",
    button: "bg-category-hr hover:bg-category-hr/90"
  },
  sales: { 
    bg: "bg-category-sales/10", 
    text: "text-category-sales",
    button: "bg-category-sales hover:bg-category-sales/90"
  },
  operations: { 
    bg: "bg-category-operations/10", 
    text: "text-category-operations",
    button: "bg-category-operations hover:bg-category-operations/90"
  },
  docs: { 
    bg: "bg-category-docs/10", 
    text: "text-category-docs",
    button: "bg-category-docs hover:bg-category-docs/90"
  },
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const Icon = project.icon;
  const colors = categoryColors[project.category];

  return (
    <article 
      className="project-card animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
          {categoryLabels[project.category]}
        </span>
      </div>

      {/* Content */}
      <p className="text-xs text-muted-foreground mb-2">{project.id}</p>
      <h3 className="font-display font-bold text-lg text-foreground mb-2">
        {project.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Author */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
          {project.author.split(' ').map(n => n[0]).join('')}
        </span>
        <span>{project.author}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <a
          href={project.accessUrl}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-medium transition-all ${colors.button}`}
        >
          Usar ahora
          <ArrowRight className="w-4 h-4" />
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            title="Ver en GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;

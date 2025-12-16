import { Project, categoryLabels } from "@/data/projects";
import { Edit2, Trash2, ExternalLink, Github } from "lucide-react";

interface AdminProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (projectId: string) => void;
}

const categoryGradients: Record<string, string> = {
  support: "from-category-support/20 to-category-support/5",
  marketing: "from-category-marketing/20 to-category-marketing/5",
  finance: "from-category-finance/20 to-category-finance/5",
  hr: "from-category-hr/20 to-category-hr/5",
  sales: "from-category-sales/20 to-category-sales/5",
  operations: "from-category-operations/20 to-category-operations/5",
  docs: "from-category-docs/20 to-category-docs/5",
};

const categoryColors: Record<string, string> = {
  support: "text-category-support",
  marketing: "text-category-marketing",
  finance: "text-category-finance",
  hr: "text-category-hr",
  sales: "text-category-sales",
  operations: "text-category-operations",
  docs: "text-category-docs",
};

export const AdminProjectList = ({ projects, onEdit, onDelete }: AdminProjectListProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-display font-bold text-foreground">
          Proyectos Registrados
        </h2>
        <span className="text-sm text-muted-foreground">
          {projects.length} proyectos
        </span>
      </div>

      <div className="space-y-3">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className={`glass rounded-xl p-4 bg-gradient-to-r ${categoryGradients[project.category]} border border-border/50 hover:border-primary/30 transition-all group`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-background/50 ${categoryColors[project.category]}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground font-mono">
                      {project.id}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-background/50 ${categoryColors[project.category]}`}>
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground truncate">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    por {project.author}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.accessUrl && project.accessUrl !== "#" && (
                    <a
                      href={project.accessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      title="Ver proyecto"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => onEdit(project)}
                    className="p-2 rounded-lg bg-background/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    title="Editar"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`¿Eliminar "${project.name}"?`)) {
                        onDelete(project.id);
                      }
                    }}
                    className="p-2 rounded-lg bg-background/50 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {projects.length === 0 && (
        <div className="glass rounded-2xl p-12 text-center">
          <p className="text-muted-foreground">
            No hay proyectos registrados. Crea el primero.
          </p>
        </div>
      )}
    </div>
  );
};

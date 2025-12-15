import ProjectCard from "./ProjectCard";
import { type Project } from "@/data/projects";
import { Search, Frown } from "lucide-react";

interface ProjectsGridProps {
  projects: Project[];
  searchQuery: string;
}

const ProjectsGrid = ({ projects, searchQuery }: ProjectsGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          {searchQuery ? (
            <Search className="h-8 w-8 text-muted-foreground" />
          ) : (
            <Frown className="h-8 w-8 text-muted-foreground" />
          )}
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
          No se encontraron herramientas
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {searchQuery 
            ? `No hay resultados para "${searchQuery}". Intenta con otros términos.`
            : "No hay herramientas en esta categoría por el momento."
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;

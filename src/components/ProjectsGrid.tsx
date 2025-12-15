import ProjectCard from "./ProjectCard";
import { type Project } from "@/data/projects";
import { Search, Frown, Sparkles } from "lucide-react";

interface ProjectsGridProps {
  projects: Project[];
  searchQuery: string;
}

const ProjectsGrid = ({ projects, searchQuery }: ProjectsGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl glass">
          {searchQuery ? (
            <Search className="h-10 w-10 text-muted-foreground" />
          ) : (
            <Frown className="h-10 w-10 text-muted-foreground" />
          )}
        </div>
        <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
          No se encontraron herramientas
        </h3>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          {searchQuery 
            ? `No hay resultados para "${searchQuery}". Intenta con otros términos o explora las categorías.`
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
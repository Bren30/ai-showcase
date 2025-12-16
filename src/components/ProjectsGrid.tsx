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
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          {searchQuery ? <Search className="w-8 h-8 text-muted-foreground" /> : <Frown className="w-8 h-8 text-muted-foreground" />}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No se encontraron herramientas</h3>
        <p className="text-muted-foreground">
          {searchQuery ? "Intenta con otros términos de búsqueda" : "No hay herramientas en esta categoría"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;

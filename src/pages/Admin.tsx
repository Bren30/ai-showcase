import { useState } from "react";
import { Project, CategoryType, categoryLabels, projects as initialProjects } from "@/data/projects";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { AdminProjectList } from "@/components/admin/AdminProjectList";
import { 
  MessageCircle, 
  FileBarChart, 
  Users, 
  Pencil, 
  TrendingUp, 
  Globe, 
  FileText, 
  Ticket, 
  Mail, 
  Calendar, 
  ShoppingCart, 
  Shield,
  type LucideIcon 
} from "lucide-react";

export const iconOptions: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "MessageCircle", label: "Chat", icon: MessageCircle },
  { value: "FileBarChart", label: "Reportes", icon: FileBarChart },
  { value: "Users", label: "Usuarios", icon: Users },
  { value: "Pencil", label: "Edición", icon: Pencil },
  { value: "TrendingUp", label: "Tendencias", icon: TrendingUp },
  { value: "Globe", label: "Global", icon: Globe },
  { value: "FileText", label: "Documentos", icon: FileText },
  { value: "Ticket", label: "Tickets", icon: Ticket },
  { value: "Mail", label: "Email", icon: Mail },
  { value: "Calendar", label: "Calendario", icon: Calendar },
  { value: "ShoppingCart", label: "Compras", icon: ShoppingCart },
  { value: "Shield", label: "Seguridad", icon: Shield },
];

export const getIconByName = (name: string): LucideIcon => {
  const found = iconOptions.find(opt => opt.value === name);
  return found?.icon || MessageCircle;
};

export interface ProjectFormData {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  author: string;
  category: CategoryType;
  iconName: string;
  githubUrl: string;
  accessUrl: string;
  features: string;
  useCases: string;
}

const Admin = () => {
  const [projectsList, setProjectsList] = useState<Project[]>(initialProjects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateProject = (formData: ProjectFormData) => {
    const newProject: Project = {
      id: formData.id,
      name: formData.name,
      description: formData.description,
      longDescription: formData.longDescription,
      author: formData.author,
      category: formData.category,
      categoryLabel: categoryLabels[formData.category],
      icon: getIconByName(formData.iconName),
      githubUrl: formData.githubUrl,
      accessUrl: formData.accessUrl,
      features: formData.features.split(",").map(f => f.trim()).filter(Boolean),
      useCases: formData.useCases.split(",").map(u => u.trim()).filter(Boolean),
    };

    if (editingProject) {
      setProjectsList(prev => prev.map(p => p.id === editingProject.id ? newProject : p));
    } else {
      setProjectsList(prev => [...prev, newProject]);
    }
    
    setEditingProject(null);
    setIsFormOpen(false);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const handleDelete = (projectId: string) => {
    setProjectsList(prev => prev.filter(p => p.id !== projectId));
  };

  const handleNewProject = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader onNewProject={handleNewProject} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className={`bg-card rounded-2xl p-6 sticky top-24 border border-border shadow-card transition-all duration-300 ${isFormOpen ? 'ring-2 ring-primary/50' : ''}`}>
              <h2 className="text-xl font-display font-bold text-primary mb-6">
                {editingProject ? "Editar Proyecto" : "Nuevo Proyecto"}
              </h2>
              {isFormOpen ? (
                <ProjectForm 
                  onSubmit={handleCreateProject}
                  editingProject={editingProject}
                  onCancel={() => {
                    setIsFormOpen(false);
                    setEditingProject(null);
                  }}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Haz clic en "Nuevo Proyecto" para agregar una herramienta al catálogo
                  </p>
                  <button
                    onClick={handleNewProject}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-button"
                  >
                    Crear Proyecto
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Projects List Section */}
          <div className="lg:col-span-2">
            <AdminProjectList 
              projects={projectsList}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;

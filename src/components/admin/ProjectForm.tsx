import { useState, useEffect } from "react";
import { Project, CategoryType, categoryLabels } from "@/data/projects";
import { iconOptions, ProjectFormData } from "@/pages/Admin";
import { X } from "lucide-react";

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  editingProject: Project | null;
  onCancel: () => void;
}

const categories: { value: CategoryType; label: string }[] = Object.entries(categoryLabels).map(
  ([value, label]) => ({ value: value as CategoryType, label })
);

export const ProjectForm = ({ onSubmit, editingProject, onCancel }: ProjectFormProps) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    id: "",
    name: "",
    description: "",
    longDescription: "",
    author: "",
    category: "support",
    iconName: "MessageCircle",
    githubUrl: "",
    accessUrl: "",
    features: "",
    useCases: "",
  });

  useEffect(() => {
    if (editingProject) {
      const iconName = iconOptions.find(opt => opt.icon === editingProject.icon)?.value || "MessageCircle";
      setFormData({
        id: editingProject.id,
        name: editingProject.name,
        description: editingProject.description,
        longDescription: editingProject.longDescription,
        author: editingProject.author,
        category: editingProject.category,
        iconName,
        githubUrl: editingProject.githubUrl,
        accessUrl: editingProject.accessUrl,
        features: editingProject.features.join(", "),
        useCases: editingProject.useCases.join(", "),
      });
    } else {
      setFormData({
        id: `AI-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 100)).padStart(2, '0')}`,
        name: "",
        description: "",
        longDescription: "",
        author: "",
        category: "support",
        iconName: "MessageCircle",
        githubUrl: "",
        accessUrl: "",
        features: "",
        useCases: "",
      });
    }
  }, [editingProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof ProjectFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const inputClass = "w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";
  const labelClass = "block text-sm font-medium text-foreground mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-muted-foreground">ID: {formData.id}</span>
        <button
          type="button"
          onClick={onCancel}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div>
        <label className={labelClass}>Nombre del Proyecto *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={inputClass}
          placeholder="Ej: Asistente de Soporte"
        />
      </div>

      <div>
        <label className={labelClass}>Descripción Corta *</label>
        <input
          type="text"
          required
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className={inputClass}
          placeholder="Breve descripción (una línea)"
        />
      </div>

      <div>
        <label className={labelClass}>Descripción Detallada</label>
        <textarea
          value={formData.longDescription}
          onChange={(e) => handleChange("longDescription", e.target.value)}
          className={`${inputClass} resize-none h-20`}
          placeholder="Descripción más completa del proyecto"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Autor *</label>
          <input
            type="text"
            required
            value={formData.author}
            onChange={(e) => handleChange("author", e.target.value)}
            className={inputClass}
            placeholder="Nombre del autor"
          />
        </div>

        <div>
          <label className={labelClass}>Categoría *</label>
          <select
            value={formData.category}
            onChange={(e) => handleChange("category", e.target.value as CategoryType)}
            className={inputClass}
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Icono</label>
        <div className="grid grid-cols-4 gap-2">
          {iconOptions.map(opt => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleChange("iconName", opt.value)}
                className={`p-3 rounded-xl border transition-all ${
                  formData.iconName === opt.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50"
                }`}
                title={opt.label}
              >
                <Icon className="w-5 h-5 mx-auto" />
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className={labelClass}>URL de Acceso</label>
        <input
          type="url"
          value={formData.accessUrl}
          onChange={(e) => handleChange("accessUrl", e.target.value)}
          className={inputClass}
          placeholder="https://..."
        />
      </div>

      <div>
        <label className={labelClass}>URL de GitHub</label>
        <input
          type="url"
          value={formData.githubUrl}
          onChange={(e) => handleChange("githubUrl", e.target.value)}
          className={inputClass}
          placeholder="https://github.com/..."
        />
      </div>

      <div>
        <label className={labelClass}>Características (separadas por coma)</label>
        <input
          type="text"
          value={formData.features}
          onChange={(e) => handleChange("features", e.target.value)}
          className={inputClass}
          placeholder="Feature 1, Feature 2, Feature 3"
        />
      </div>

      <div>
        <label className={labelClass}>Casos de Uso (separados por coma)</label>
        <input
          type="text"
          value={formData.useCases}
          onChange={(e) => handleChange("useCases", e.target.value)}
          className={inputClass}
          placeholder="Caso 1, Caso 2, Caso 3"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-3 border border-border rounded-xl text-foreground hover:bg-muted transition-all"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-button"
        >
          {editingProject ? "Guardar Cambios" : "Crear Proyecto"}
        </button>
      </div>
    </form>
  );
};

import { 
  LayoutGrid, 
  MessageCircle, 
  Megaphone, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Settings, 
  FileText 
} from "lucide-react";
import { CategoryType, categoryLabels } from "@/data/projects";

interface CategoryFilterProps {
  selectedCategory: CategoryType | "all";
  onCategoryChange: (category: CategoryType | "all") => void;
}

const categories: { id: CategoryType | "all"; icon: React.ElementType }[] = [
  { id: "all", icon: LayoutGrid },
  { id: "support", icon: MessageCircle },
  { id: "marketing", icon: Megaphone },
  { id: "finance", icon: DollarSign },
  { id: "hr", icon: Users },
  { id: "sales", icon: ShoppingCart },
  { id: "operations", icon: Settings },
  { id: "docs", icon: FileText },
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <section className="py-8 border-y border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            const label = cat.id === "all" ? "Todas" : categoryLabels[cat.id];
            
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`category-btn flex items-center gap-2 ${isActive ? "active" : ""}`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;

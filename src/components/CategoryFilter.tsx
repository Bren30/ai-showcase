import { cn } from "@/lib/utils";
import { type CategoryType, categoryLabels } from "@/data/projects";
import { 
  MessageCircle, 
  Megaphone, 
  DollarSign, 
  Users, 
  Target, 
  Settings, 
  FileText,
  LayoutGrid
} from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: CategoryType | "all";
  onCategoryChange: (category: CategoryType | "all") => void;
}

const categoryIcons: Record<CategoryType | "all", typeof MessageCircle> = {
  all: LayoutGrid,
  support: MessageCircle,
  marketing: Megaphone,
  finance: DollarSign,
  hr: Users,
  sales: Target,
  operations: Settings,
  docs: FileText,
};

const categoryGradients: Record<CategoryType | "all", string> = {
  all: "from-foreground/20 to-foreground/10",
  support: "from-category-support to-cyan-400",
  marketing: "from-category-marketing to-pink-400",
  finance: "from-category-finance to-emerald-400",
  hr: "from-category-hr to-purple-400",
  sales: "from-category-sales to-amber-400",
  operations: "from-category-operations to-blue-400",
  docs: "from-category-docs to-yellow-400",
};

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: (CategoryType | "all")[] = [
    "all",
    "support",
    "marketing",
    "finance",
    "hr",
    "sales",
    "operations",
    "docs",
  ];

  return (
    <section id="categorias" className="py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide md:justify-center md:gap-3 md:pb-0 md:flex-wrap">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const isSelected = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                  isSelected
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground glass"
                )}
              >
                {isSelected && (
                  <div className={cn(
                    "absolute inset-0 rounded-xl bg-gradient-to-r opacity-90",
                    categoryGradients[category]
                  )} />
                )}
                <Icon className={cn("relative h-4 w-4", isSelected && category !== "all" && "text-background")} />
                <span className={cn("relative whitespace-nowrap", isSelected && category !== "all" && "text-background")}>
                  {category === "all" ? "Todas" : categoryLabels[category]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
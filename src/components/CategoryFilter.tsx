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

const categoryColors: Record<CategoryType | "all", string> = {
  all: "bg-foreground/10 text-foreground",
  support: "bg-category-support/10 text-category-support",
  marketing: "bg-category-marketing/10 text-category-marketing",
  finance: "bg-category-finance/10 text-category-finance",
  hr: "bg-category-hr/10 text-category-hr",
  sales: "bg-category-sales/10 text-category-sales",
  operations: "bg-category-operations/10 text-category-operations",
  docs: "bg-category-docs/10 text-category-docs",
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
    <section id="categorias" className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 md:px-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide md:justify-center md:gap-3 md:pb-0">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const isSelected = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                  isSelected
                    ? cn(categoryColors[category], "ring-2 ring-offset-2 ring-offset-background")
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                style={{
                  ...(isSelected && category !== "all" && {
                    "--tw-ring-color": `hsl(var(--category-${category}))`,
                  } as React.CSSProperties)
                }}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">
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

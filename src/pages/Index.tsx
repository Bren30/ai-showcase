import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import StatsSection from "@/components/StatsSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import { projects, type CategoryType } from "@/data/projects";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | "all">("all");

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query) ||
          p.author.toLowerCase().includes(query) ||
          p.id.toLowerCase().includes(query)
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <HeroSection 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        <StatsSection />
        
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        
        <section id="proyectos" className="py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {selectedCategory === "all" 
                    ? "Todas las herramientas" 
                    : `Herramientas de ${projects.find(p => p.category === selectedCategory)?.categoryLabel || ""}`
                  }
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {filteredProjects.length} {filteredProjects.length === 1 ? "herramienta disponible" : "herramientas disponibles"}
                </p>
              </div>
            </div>
            
            <ProjectsGrid 
              projects={filteredProjects} 
              searchQuery={searchQuery}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

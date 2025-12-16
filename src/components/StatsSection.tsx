import { Zap, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "12",
    label: "Herramientas Activas",
    color: "bg-category-support/10 text-category-support",
  },
  {
    icon: Users,
    value: "7",
    label: "Áreas Beneficiadas",
    color: "bg-category-hr/10 text-category-hr",
  },
  {
    icon: Clock,
    value: "+500h",
    label: "Horas Ahorradas/Mes",
    color: "bg-category-finance/10 text-category-finance",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfacción de Usuarios",
    color: "bg-category-sales/10 text-category-sales",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="stats-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground text-center mt-1">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

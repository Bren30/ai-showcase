import { Zap, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "12",
    label: "Herramientas Activas",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    value: "7",
    label: "Áreas Beneficiadas",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Clock,
    value: "+500h",
    label: "Horas Ahorradas/Mes",
    color: "text-category-finance",
    bgColor: "bg-category-finance/10",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfacción de Usuarios",
    color: "text-category-marketing",
    bgColor: "bg-category-marketing/10",
  },
];

const StatsSection = () => {
  return (
    <section className="border-y border-border/50 bg-card/30 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="flex flex-col items-center text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <span className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

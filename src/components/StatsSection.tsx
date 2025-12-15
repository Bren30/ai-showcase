import { Zap, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "12",
    label: "Herramientas Activas",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Users,
    value: "7",
    label: "Áreas Beneficiadas",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Clock,
    value: "+500h",
    label: "Horas Ahorradas/Mes",
    gradient: "from-category-finance to-emerald-400",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Satisfacción",
    gradient: "from-category-sales to-amber-400",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl glass opacity-0 animate-fade-in transition-all hover:scale-105"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} transition-transform group-hover:scale-110`}>
                <stat.icon className="h-7 w-7 text-background" />
              </div>
              <span className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
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
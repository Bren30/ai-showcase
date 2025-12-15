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

export type CategoryType = 
  | "support" 
  | "marketing" 
  | "finance" 
  | "hr" 
  | "sales" 
  | "operations" 
  | "docs";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  author: string;
  category: CategoryType;
  categoryLabel: string;
  icon: LucideIcon;
  githubUrl: string;
  accessUrl: string;
  features: string[];
  useCases: string[];
}

export const categoryLabels: Record<CategoryType, string> = {
  support: "Soporte",
  marketing: "Marketing",
  finance: "Finanzas",
  hr: "Recursos Humanos",
  sales: "Ventas",
  operations: "Operaciones",
  docs: "Documentación",
};

export const projects: Project[] = [
  {
    id: "AI-2024-01",
    name: "Asistente de Soporte Interno",
    description: "Responde preguntas sobre políticas, beneficios y procedimientos de la empresa de forma instantánea.",
    longDescription: "Tu compañero virtual para resolver dudas del día a día. Pregunta sobre vacaciones, beneficios, políticas internas y más. Respuestas claras y rápidas, 24/7.",
    author: "María García",
    category: "support",
    categoryLabel: "Soporte",
    icon: MessageCircle,
    githubUrl: "https://github.com/empresa/asistente-soporte",
    accessUrl: "#",
    features: ["Respuestas instantáneas", "Disponible 24/7", "Historial de consultas"],
    useCases: ["Consultar políticas de vacaciones", "Preguntas sobre beneficios", "Procedimientos internos"],
  },
  {
    id: "AI-2024-02",
    name: "Generador de Reportes Financieros",
    description: "Crea informes financieros profesionales automáticamente a partir de tus datos.",
    longDescription: "Transforma números en informes claros y profesionales. Solo sube tus datos y obtén reportes listos para presentar en minutos.",
    author: "Carlos Mendoza",
    category: "finance",
    categoryLabel: "Finanzas",
    icon: FileBarChart,
    githubUrl: "https://github.com/empresa/generador-reportes",
    accessUrl: "#",
    features: ["Múltiples formatos", "Gráficos automáticos", "Exportación a PDF/Excel"],
    useCases: ["Reportes mensuales", "Análisis trimestrales", "Presentaciones a directivos"],
  },
  {
    id: "AI-2024-03",
    name: "Analizador de Candidatos",
    description: "Evalúa y filtra CVs automáticamente según los requisitos del puesto.",
    longDescription: "Ahorra horas revisando currículums. Define lo que buscas y recibe una lista ordenada de los mejores candidatos con resúmenes claros.",
    author: "Ana Rodríguez",
    category: "hr",
    categoryLabel: "Recursos Humanos",
    icon: Users,
    githubUrl: "https://github.com/empresa/analizador-cvs",
    accessUrl: "#",
    features: ["Ranking automático", "Resúmenes de candidatos", "Filtros personalizables"],
    useCases: ["Procesos de selección masiva", "Búsqueda de perfiles específicos", "Pre-screening inicial"],
  },
  {
    id: "AI-2024-04",
    name: "Asistente de Redacción Marketing",
    description: "Genera textos creativos para campañas, redes sociales y comunicaciones.",
    longDescription: "Tu equipo creativo potenciado. Genera ideas, textos para anuncios, posts para redes sociales y más en segundos.",
    author: "Laura Sánchez",
    category: "marketing",
    categoryLabel: "Marketing",
    icon: Pencil,
    githubUrl: "https://github.com/empresa/asistente-marketing",
    accessUrl: "#",
    features: ["Múltiples tonos de voz", "Optimizado para redes", "Sugerencias de mejora"],
    useCases: ["Posts para redes sociales", "Copy para anuncios", "Newsletters"],
  },
  {
    id: "AI-2024-05",
    name: "Predictor de Ventas",
    description: "Visualiza tendencias y proyecciones de ventas con análisis inteligente.",
    longDescription: "Anticípate al mercado. Visualiza proyecciones de ventas basadas en datos históricos y tendencias actuales.",
    author: "Roberto López",
    category: "sales",
    categoryLabel: "Ventas",
    icon: TrendingUp,
    githubUrl: "https://github.com/empresa/predictor-ventas",
    accessUrl: "#",
    features: ["Dashboard interactivo", "Alertas automáticas", "Comparativas históricas"],
    useCases: ["Planificación de inventario", "Metas de ventas", "Presupuestos"],
  },
  {
    id: "AI-2024-06",
    name: "Traductor de Documentos",
    description: "Traduce documentos corporativos manteniendo formato y terminología de la empresa.",
    longDescription: "Traducciones profesionales que entienden tu negocio. Mantiene el formato original y usa la terminología correcta de tu industria.",
    author: "Isabel Torres",
    category: "docs",
    categoryLabel: "Documentación",
    icon: Globe,
    githubUrl: "https://github.com/empresa/traductor-docs",
    accessUrl: "#",
    features: ["15+ idiomas", "Preserva formato", "Glosario personalizado"],
    useCases: ["Materiales de capacitación", "Documentos legales", "Comunicados internacionales"],
  },
  {
    id: "AI-2024-07",
    name: "Generador de Cotizaciones",
    description: "Crea propuestas comerciales profesionales de forma rápida y consistente.",
    longDescription: "Propuestas que venden. Genera cotizaciones profesionales con todos los detalles que tus clientes necesitan.",
    author: "Fernando Ruiz",
    category: "sales",
    categoryLabel: "Ventas",
    icon: FileText,
    githubUrl: "https://github.com/empresa/generador-cotizaciones",
    accessUrl: "#",
    features: ["Plantillas personalizables", "Cálculos automáticos", "Seguimiento de propuestas"],
    useCases: ["Propuestas de servicios", "Cotizaciones de productos", "Renovaciones de contratos"],
  },
  {
    id: "AI-2024-08",
    name: "Clasificador de Tickets",
    description: "Organiza y prioriza automáticamente los casos de soporte al cliente.",
    longDescription: "Nunca pierdas un caso urgente. Clasifica automáticamente los tickets por prioridad y tipo para que tu equipo se enfoque en lo importante.",
    author: "Patricia Vargas",
    category: "support",
    categoryLabel: "Soporte",
    icon: Ticket,
    githubUrl: "https://github.com/empresa/clasificador-tickets",
    accessUrl: "#",
    features: ["Priorización automática", "Asignación inteligente", "Métricas de rendimiento"],
    useCases: ["Soporte al cliente", "Helpdesk interno", "Gestión de incidencias"],
  },
  {
    id: "AI-2024-09",
    name: "Asistente de Emails",
    description: "Redacta respuestas profesionales a emails de forma rápida y efectiva.",
    longDescription: "Responde emails en segundos. Genera respuestas profesionales adaptadas al contexto y tono de cada conversación.",
    author: "Diego Morales",
    category: "operations",
    categoryLabel: "Operaciones",
    icon: Mail,
    githubUrl: "https://github.com/empresa/asistente-emails",
    accessUrl: "#",
    features: ["Sugerencias contextuales", "Múltiples tonos", "Plantillas guardadas"],
    useCases: ["Respuestas a clientes", "Comunicaciones internas", "Seguimientos"],
  },
  {
    id: "AI-2024-10",
    name: "Planificador de Reuniones",
    description: "Optimiza tu calendario y sugiere los mejores horarios para reuniones.",
    longDescription: "Olvídate del ping-pong de emails para agendar. Encuentra automáticamente el mejor horario para todos los participantes.",
    author: "Sofía Herrera",
    category: "operations",
    categoryLabel: "Operaciones",
    icon: Calendar,
    githubUrl: "https://github.com/empresa/planificador-reuniones",
    accessUrl: "#",
    features: ["Sincronización de calendarios", "Sugerencias inteligentes", "Recordatorios automáticos"],
    useCases: ["Reuniones de equipo", "Llamadas con clientes", "Entrevistas"],
  },
  {
    id: "AI-2024-11",
    name: "Optimizador de Compras",
    description: "Analiza patrones de compra y sugiere oportunidades de ahorro.",
    longDescription: "Compra más inteligente. Identifica oportunidades de ahorro analizando tus patrones de compra y proveedores.",
    author: "Alejandro Núñez",
    category: "finance",
    categoryLabel: "Finanzas",
    icon: ShoppingCart,
    githubUrl: "https://github.com/empresa/optimizador-compras",
    accessUrl: "#",
    features: ["Análisis de proveedores", "Alertas de precios", "Reportes de ahorro"],
    useCases: ["Negociación con proveedores", "Consolidación de compras", "Auditorías"],
  },
  {
    id: "AI-2024-12",
    name: "Detector de Riesgos",
    description: "Identifica y alerta sobre posibles riesgos operacionales en tiempo real.",
    longDescription: "Protege tu operación. Monitorea continuamente indicadores clave y te alerta antes de que los problemas escalen.",
    author: "Gabriela Flores",
    category: "operations",
    categoryLabel: "Operaciones",
    icon: Shield,
    githubUrl: "https://github.com/empresa/detector-riesgos",
    accessUrl: "#",
    features: ["Monitoreo 24/7", "Alertas configurables", "Dashboard de riesgos"],
    useCases: ["Compliance", "Auditorías internas", "Gestión de incidentes"],
  },
];

export const getProjectsByCategory = (category: CategoryType): Project[] => {
  return projects.filter(p => p.category === category);
};

export const searchProjects = (query: string): Project[] => {
  const lowerQuery = query.toLowerCase();
  return projects.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.categoryLabel.toLowerCase().includes(lowerQuery) ||
    p.author.toLowerCase().includes(lowerQuery)
  );
};

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Wrench, Users, Mountain } from "lucide-react";

const camps = [
  {
    icon: Compass,
    title: "Camp 1: Despertar Digital",
    subtitle: "Fundamentos da IA e diagnóstico digital",
    description: "Compreenda os fundamentos da Inteligência Artificial e descubra como a transformação digital pode revolucionar seu negócio. Realize um diagnóstico completo do seu cenário atual."
  },
  {
    icon: Wrench,
    title: "Camp 2: Ferramentas e Estratégias",
    subtitle: "Aplicações práticas e prototipagem",
    description: "Aprenda a utilizar as principais ferramentas de IA no mercado. Desenvolva protótipos e aplique estratégias práticas que podem ser implementadas imediatamente no seu negócio."
  },
  {
    icon: Users,
    title: "Camp 3: Transformação e Cultura",
    subtitle: "Liderança e cultura de inovação",
    description: "Desenvolva uma cultura organizacional voltada para inovação. Aprenda a liderar equipes na era digital e a implementar mudanças sustentáveis em sua empresa."
  },
  {
    icon: Mountain,
    title: "Camp 4: Visão de Futuro",
    subtitle: "Plano de ação e celebração no topo",
    description: "Chegue ao cume com um plano de ação completo e personalizado. Celebre suas conquistas e trace o caminho para continuar escalando novos patamares com sua empresa."
  }
];

const Camps = () => {
  return (
    <section className="py-24 relative" id="camps">
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Nossos Acampamentos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Quatro etapas para conquistar o topo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {camps.map((camp, index) => {
            const Icon = camp.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {camp.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-muted-foreground">
                    {camp.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {camp.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Camps;

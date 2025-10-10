import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Lightbulb, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Entender o impacto da IA nos negócios",
    description: "Compreenda como a Inteligência Artificial está transformando o mercado e identifique oportunidades únicas para seu segmento."
  },
  {
    icon: TrendingUp,
    title: "Aplicar ferramentas tecnológicas no dia a dia",
    description: "Domine as principais ferramentas de IA e automação que podem otimizar processos e aumentar a produtividade da sua empresa."
  },
  {
    icon: Lightbulb,
    title: "Desenvolver uma cultura de inovação",
    description: "Aprenda a criar um ambiente organizacional que estimula a criatividade, a experimentação e a transformação digital."
  },
  {
    icon: Rocket,
    title: "Criar estratégias digitais com visão de futuro",
    description: "Desenvolva planos estratégicos que preparam sua empresa para os desafios e oportunidades da era digital."
  }
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Por Que Nos Escolher?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Para empresários, líderes e gestores que querem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 border-primary/20 bg-card/80 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const trainers = [
  {
    name: "Silvana Rosa",
    bio: "Empresária, mentora e especialista em inovação com IA.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "Fábio Morassi",
    bio: "Founder da GDR Serviços Digitais, agência de performance que potencializa negócios com estratégia, tecnologia e criatividade. Especialista em Inteligência Artificial na DTCode e LowCodeSchool, Head Comercial da Universidade da Neurociência, estrategista digital, palestrante, escritor e especialista comportamental. Uno visão analítica e sensibilidade humana para criar soluções que geram resultados concretos.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Ivan Nogueira",
    bio: "Especialista em automações e Inteligência Artificial com mais de 10 anos de experiência no mercado digital. Desenvolveu metodologias comprovadas para implementar soluções de automação que reduzem drasticamente o tempo gasto em processos repetitivos, permitindo que empresas cresçam sem a necessidade de contratar mais funcionários.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  }
];

const Trainers = () => {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden" id="trainers">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="h-10 w-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Treinadores</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Especialistas que vão guiar você até o topo
          </p>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 border-border/50 bg-card/80 backdrop-blur"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="shrink-0">
                    <img 
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.3)] group-hover:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {trainer.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

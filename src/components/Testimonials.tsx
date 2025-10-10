import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechCorp",
    content: "O Everest Bootcamp transformou completamente nossa visão sobre IA. Implementamos soluções que aumentaram nossa produtividade em 300%.",
    rating: 5,
  },
  {
    name: "Ana Paula Mendes",
    role: "Diretora de Inovação, StartupX",
    content: "Os treinadores são incríveis! Conseguimos criar uma cultura de inovação real na empresa. Resultados surpreendentes em apenas 3 meses.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Founder, DigitalPro",
    content: "A metodologia é muito prática. Saímos do bootcamp com projetos reais implementados e um plano de ação claro para o futuro.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="h-10 w-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Depoimentos</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            O que nossos participantes dizem sobre a experiência
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-primary/30 bg-card/80 backdrop-blur hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

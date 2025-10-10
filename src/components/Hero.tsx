import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/everest-hero-dark.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <Badge className="mb-6 animate-glow-pulse px-6 py-2 text-sm bg-primary/20 border-primary text-primary hover:bg-primary/30">
          + de 1000 pessoas impactadas
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient glow-effect">Everest Bootcamp</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          A escalada definitiva para empresários que querem dominar a Inteligência Artificial 
          e a tecnologia nos negócios
        </p>
        
        <Button 
          size="lg" 
          className="px-8 py-6 text-lg font-semibold shadow-[0_0_30px_hsl(var(--primary-glow)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.6)] hover:scale-105 transition-all"
          onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Começar Agora
        </Button>
        
        <div className="mt-16 animate-bounce">
          <ChevronDown className="h-8 w-8 mx-auto text-primary opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

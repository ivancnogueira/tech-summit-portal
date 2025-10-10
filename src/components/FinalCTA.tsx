import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60" />
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Tech decoration elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-lg rotate-12" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-lg -rotate-12" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 animate-glow-pulse">
            <Rocket className="h-16 w-16 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para Conquistar o Topo?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Junte-se aos empresários que já estão transformando seus negócios com 
            Inteligência Artificial e tecnologia
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="px-12 py-7 text-xl font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-300"
            onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Começar Minha Escalada Agora
          </Button>
          
          <p className="mt-8 text-white/80 text-lg">
            Vagas limitadas • Inscrições abertas
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

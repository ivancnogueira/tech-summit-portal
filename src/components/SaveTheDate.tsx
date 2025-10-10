import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const SaveTheDate = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto border-2 border-primary/30 bg-card/80 backdrop-blur shadow-[0_0_50px_hsl(var(--primary)/0.3)]">
          <CardContent className="p-12 text-center">
            <div className="mb-8 inline-block">
              <div className="h-20 w-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto animate-glow-pulse">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient glow-effect">Save the Date</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-xl">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="font-semibold">Data:</span>
                <span className="text-muted-foreground">[A definir]</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-xl">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="font-semibold">Local:</span>
                <span className="text-muted-foreground">[Presencial / Online / Híbrido]</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-xl">
                <Users className="h-6 w-6 text-primary" />
                <span className="font-semibold text-primary">Vagas Limitadas!</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold shadow-[0_0_30px_hsl(var(--primary-glow)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.6)] hover:scale-105 transition-all"
              onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Garantir Minha Vaga
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SaveTheDate;

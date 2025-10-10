import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const RegistrationForm = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="inscricao">
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-10 w-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Inscreva-se Agora</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Garanta sua vaga nesta jornada transformadora
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto border-2 border-primary/30 bg-card/80 backdrop-blur shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Formulário de Inscrição</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Nome Completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    className="border-primary/30 focus:border-primary bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="border-primary/30 focus:border-primary bg-background/50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">Telefone</Label>
                  <Input 
                    id="phone" 
                    placeholder="(00) 00000-0000" 
                    className="border-primary/30 focus:border-primary bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">Empresa</Label>
                  <Input 
                    id="company" 
                    placeholder="Nome da empresa" 
                    className="border-primary/30 focus:border-primary bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position" className="text-base">Cargo</Label>
                <Input 
                  id="position" 
                  placeholder="Seu cargo" 
                  className="border-primary/30 focus:border-primary bg-background/50"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg font-semibold shadow-[0_0_30px_hsl(var(--primary-glow)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary-glow)/0.6)] hover:scale-105 transition-all"
              >
                Confirmar Inscrição
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;

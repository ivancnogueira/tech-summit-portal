import { Mountain, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Everest Bootcamp</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              A escalada definitiva para empresários que querem dominar a IA e tecnologia.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#camps" className="text-background/70 hover:text-primary transition-colors">
                  Acampamentos
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-background/70 hover:text-primary transition-colors">
                  Treinadores
                </a>
              </li>
              <li>
                <a href="#inscricao" className="text-background/70 hover:text-primary transition-colors">
                  Inscrição
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Redes Sociais</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Newsletter</h3>
            <p className="text-background/70 text-sm mb-4">
              Receba novidades e conteúdos exclusivos
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Seu e-mail" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button size="icon" className="shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Everest Bootcamp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

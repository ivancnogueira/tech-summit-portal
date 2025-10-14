import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import WorkingFlipGallery from "@/components/ui/working-flip-gallery";

const trainers = [
  {
    name: "Silvana Rosa",
    bio: "Empresária, mentora e especialista em inovação com IA.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    galleryImages: [
      { title: 'Silvana Rosa', url: '/silvana-rosa/silvana-rosa-01.png' },
      { title: 'Silvana Rosa', url: '/silvana-rosa/silvana-rosa-02.png' },
      { title: 'Silvana Rosa', url: '/silvana-rosa/silvana-rosa-03.png' }
    ]
  },
  {
    name: "Fábio Morassi",
    bio: "Founder da GDR Serviços Digitais, agência de performance que potencializa negócios com estratégia, tecnologia e criatividade. Especialista em Inteligência Artificial na DTCode e LowCodeSchool, Head Comercial da Universidade da Neurociência, estrategista digital, palestrante, escritor e especialista comportamental. Uno visão analítica e sensibilidade humana para criar soluções que geram resultados concretos.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    galleryImages: [
      { title: 'Fábio Morassi', url: '/fabio-morassi/fabio-morassi-01.png' },
      { title: 'Fábio Morassi', url: '/fabio-morassi/fabio-morassi-02.png' },
      { title: 'Fábio Morassi', url: '/fabio-morassi/fabio-morassi-03.png' }
    ]
  },
  {
    name: "Ivan Nogueira",
    bio: "Especialista em automações e Inteligência Artificial com mais de 10 anos de experiência no mercado digital. Desenvolveu metodologias comprovadas para implementar soluções de automação que reduzem drasticamente o tempo gasto em processos repetitivos, permitindo que empresas cresçam sem a necessidade de contratar mais funcionários.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    galleryImages: [
      { title: 'Ivan Nogueira', url: '/ivan-nogueira/ivan-nogueira-01.png' },
      { title: 'Ivan Nogueira', url: '/ivan-nogueira/ivan-nogueira-02.png' },
      { title: 'Ivan Nogueira', url: '/ivan-nogueira/ivan-nogueira-03.png' }
    ]
  }
];

const Trainers = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background/50" id="trainers">
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
        
        <div className="space-y-24 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Coluna da Imagem */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative">
                    {trainer.galleryImages ? (
                      <WorkingFlipGallery images={trainer.galleryImages} />
                    ) : (
                      <div className="w-[320px] h-[480px] md:w-[400px] md:h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                        <img 
                          src={trainer.image}
                          alt={trainer.name}
                          className="w-64 h-64 rounded-full object-cover border-4 border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Coluna da Bio */}
                <div className="w-full lg:w-1/2">
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                      {trainer.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {trainer.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;

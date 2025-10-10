import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O que é o Everest Bootcamp?",
    answer: "O Everest Bootcamp é um programa intensivo de treinamento que prepara empresários e líderes para dominar Inteligência Artificial e tecnologia nos negócios. Através de 4 camps progressivos, você aprende desde fundamentos até implementação prática.",
  },
  {
    question: "Qual o formato do bootcamp?",
    answer: "O bootcamp é estruturado em 4 camps progressivos: Camp 1 (Despertar Digital), Camp 2 (Ferramentas e Estratégias), Camp 3 (Transformação e Cultura) e Camp 4 (Visão de Futuro). Cada camp tem atividades práticas, cases reais e mentorias.",
  },
  {
    question: "Preciso ter conhecimento técnico prévio?",
    answer: "Não! O programa foi desenvolvido para empresários e líderes de negócios. Começamos do básico e progredimos de forma didática. O foco é na aplicação prática da IA nos negócios, não em programação.",
  },
  {
    question: "Quanto tempo dura o programa?",
    answer: "O programa completo tem duração variável dependendo do formato escolhido (intensivo ou regular). Cada camp possui módulos específicos que podem ser cursados de forma flexível, adequando-se à agenda de cada participante.",
  },
  {
    question: "Qual o investimento necessário?",
    answer: "O investimento varia conforme o formato e modalidade escolhida (presencial, online ou híbrido). Entre em contato para receber uma proposta personalizada com condições especiais para inscrições antecipadas.",
  },
  {
    question: "Há certificado ao final do programa?",
    answer: "Sim! Ao concluir todos os camps, você recebe um certificado de conclusão do Everest Bootcamp, validando suas competências em IA e transformação digital para negócios.",
  },
  {
    question: "Posso participar online?",
    answer: "Sim! Oferecemos modalidades presencial, online e híbrida. A experiência online é completa com aulas ao vivo, mentorias individuais, acesso a plataforma de conteúdos e networking com outros participantes.",
  },
  {
    question: "Quem são os treinadores?",
    answer: "Nossos treinadores são especialistas reconhecidos: Silvana Rosa (empresária e mentora em inovação com IA), Fábio Morassi (founder da GDR e especialista em estratégia digital) e Ivan Nogueira (especialista em automações e IA com mais de 10 anos de experiência).",
  },
  {
    question: "O que está incluído no programa?",
    answer: "Incluímos: acesso a todos os 4 camps, materiais didáticos exclusivos, ferramentas de IA, mentorias em grupo, comunidade exclusiva de networking, certificado de conclusão e suporte contínuo durante todo o programa.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia de satisfação. Se após o primeiro camp você não estiver satisfeito com o conteúdo e metodologia, devolvemos 100% do investimento. Acreditamos na qualidade do nosso programa e queremos que você tenha total segurança na sua decisão.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="h-10 w-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Perguntas Frequentes</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o Everest Bootcamp
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-primary/30 rounded-lg px-6 bg-card/80 backdrop-blur hover:border-primary/60 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

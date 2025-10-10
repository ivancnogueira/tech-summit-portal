import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "1º Lote",
      subtitle: "Ingresso Individual",
      people: "1 pessoa",
      price: "R$297",
      features: [
        "Acesso completo ao acampamento",
        "Material de apoio",
        "Certificado de participação",
        "Coffee break incluído"
      ]
    },
    {
      title: "1º Lote",
      subtitle: "Ingresso Duplo",
      people: "2 pessoas",
      price: "R$497",
      features: [
        "Acesso completo ao acampamento",
        "Material de apoio para 2 pessoas",
        "Certificado de participação",
        "Coffee break incluído",
        "Desconto especial"
      ],
      highlighted: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Adquira seu ingresso
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal para você e garanta sua vaga
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Melhor Valor
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="text-sm font-semibold text-primary mb-2">
                  {plan.title}
                </div>
                <CardTitle className="text-2xl mb-2">
                  {plan.subtitle}
                </CardTitle>
                <CardDescription className="text-base">
                  {plan.people}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Garantir Vaga
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

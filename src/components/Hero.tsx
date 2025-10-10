import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import heroImage from "@/assets/everest-hero-dark.jpg";

const Hero = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([]);
  const mouseTrail = useRef<Array<{ x: number; y: number }>>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    // Initialize snowflakes
    const initialFlakes = [...Array(30)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 8 + Math.random() * 12,
      opacity: 0.4 + Math.random() * 0.6
    }));
    setSnowflakes(initialFlakes);

    const handleMouseMove = (e: MouseEvent) => {
      mouseTrail.current.unshift({ x: e.clientX, y: e.clientY });
      if (mouseTrail.current.length > 30) {
        mouseTrail.current.pop();
      }
    };

    const animate = () => {
      setSnowflakes(prevFlakes => 
        prevFlakes.map((flake, index) => {
          const target = mouseTrail.current[index] || mouseTrail.current[mouseTrail.current.length - 1];
          if (!target) return flake;

          const dx = target.x - flake.x;
          const dy = target.y - flake.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 5) {
            const speed = 0.1 + (index * 0.002);
            return {
              ...flake,
              x: flake.x + dx * speed,
              y: flake.y + dy * speed
            };
          }
          return flake;
        })
      );
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>
      
      {/* Snowfall Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map((flake, i) => (
          <div
            key={i}
            className="absolute transition-all duration-100 ease-linear"
            style={{
              left: `${flake.x}px`,
              top: `${flake.y}px`,
              opacity: flake.opacity,
              fontSize: `${flake.size}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            ❄
          </div>
        ))}
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

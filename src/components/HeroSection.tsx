
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center sparkle-bg animated-gradient overflow-hidden">
      {/* Elementos gráficos animados de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Linhas geométricas animadas */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título principal com animação */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Segurança <span className="text-accent">Inteligente</span>
            <br />
            <span className="text-4xl md:text-6xl">com Visão Computacional</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Prevenção proativa de acidentes em ambientes de alta tensão através de 
            <span className="text-accent font-semibold"> tecnologia de monitoramento inteligente</span>
          </p>
          
          {/* Descrição adicional */}
          <p className="text-lg text-white/80 mb-12 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
            Nossa solução revolucionária utiliza câmeras com visão computacional avançada para 
            calcular distâncias e intenções de movimento, garantindo máxima segurança operacional
          </p>
          
          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button 
              size="lg" 
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-4 text-lg font-semibold animate-pulse-glow"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              Conhecer Nossos Planos
            </Button>
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
      
      {/* Overlay para melhor legibilidade */}
      <div className="absolute inset-0 bg-primary/20"></div>
    </section>
  );
};

export default HeroSection;


import { Button } from '@/components/ui/button';

const PlansSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 2.999",
      period: "/mês",
      description: "Ideal para pequenas instalações",
      features: [
        "Até 4 câmeras de monitoramento",
        "Alertas em tempo real",
        "Análise básica de distância",
        "Relatórios mensais",
        "Suporte técnico durante horário comercial",
        "Dashboard web básico",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      price: "R$ 5.999",
      period: "/mês", 
      description: "Para operações de médio porte",
      features: [
        "Até 15 câmeras de monitoramento",
        "Alertas instantâneos multi-canal",
        "IA avançada de prevenção de acidentes",
        "Análise preditiva de comportamento",
        "Relatórios personalizados em tempo real",
        "Suporte técnico prioritário 24/7",
        "Dashboard completo + app mobile",
        "Integração com sistemas existentes",
        "Treinamento da equipe incluído",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Soluções corporativas completas",
      features: [
        "Câmeras ilimitadas",
        "Sistema de alertas customizado",
        "IA proprietária para análise complexa",
        "Integração completa com ERP/SAP",
        "Relatórios executivos automatizados",
        "Suporte dedicado 24/7/365",
        "Plataforma white-label personalizada",
        "Consultoria especializada contínua",
        "Implementação e migração completa",
        "SLA garantido de 99.9% uptime",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 sparkle-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nosso Ecossistema de <span className="text-accent">Proteção</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Soluções inteligentes e personalizadas que se adaptam às necessidades específicas 
              da sua operação, garantindo máxima segurança com tecnologia de ponta
            </p>
          </div>
          
          {/* Cards dos planos */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 shadow-xl hover-lift transition-all duration-300 ${
                  plan.isPopular ? 'scale-105 border-4 border-accent' : ''
                }`}
              >
                {/* Badge "Mais Popular" */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-6 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-primary text-sm font-bold">✓</span>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full py-3 font-semibold text-lg ${
                    plan.isPopular
                      ? 'bg-accent text-primary hover:bg-accent/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Solicitar Cotação' : 'Contratar Agora'}
                </Button>
              </div>
            ))}
          </div>
          
          {/* Informações adicionais */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 frosted-glass px-8 py-4 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-white/80">Monitoramento</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-white/80">Disponibilidade</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">0 Acidentes</div>
                <div className="text-white/80">Nosso Objetivo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

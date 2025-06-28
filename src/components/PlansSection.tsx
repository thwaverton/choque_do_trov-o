
import { Button } from '@/components/ui/button';

const PlansSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 1.499",
      period: "/mês",
      description: "Ideal para pequenos negócios",
      features: [
        "Até 2 pontos de monitoramento",
        "Alertas via WhatsApp",
        "Relatórios mensais básicos",
        "Suporte via chat",
        "Dashboard web simples",
      ],
      isPopular: false,
    },
    {
      name: "Profissional",
      price: "R$ 3.999",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Até 8 pontos de monitoramento",
        "Alertas multi-canal instantâneos",
        "Relatórios personalizados semanais",
        "Suporte prioritário 24/7",
        "Dashboard avançado + app mobile",
        "Integração com sistemas existentes",
        "Análise de tendências",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Sob Consulta",
      period: "",
      description: "Soluções corporativas completas",
      features: [
        "Monitoramento ilimitado",
        "Sistema de alertas customizado",
        "Relatórios em tempo real",
        "Suporte dedicado 24/7/365",
        "Plataforma white-label",
        "Integração completa via API",
        "Inteligência artificial avançada",
        "Consultoria especializada incluída",
        "Treinamento completo da equipe",
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
              Nossos <span className="text-accent">Planos</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Soluções flexíveis do Choque do Trovão para proteger seu negócio com tecnologia de ponta
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
                        <span className="text-primary text-sm font-bold">⚡</span>
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
                <div className="text-white/80">Proteção</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.8%</div>
                <div className="text-white/80">Precisão</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">⚡ Rápido</div>
                <div className="text-white/80">Como um Raio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

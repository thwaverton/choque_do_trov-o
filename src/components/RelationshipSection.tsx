
const RelationshipSection = () => {
  const steps = [
    {
      number: "01",
      title: "Análise Inicial",
      description: "Avaliação completa do seu ambiente e necessidades específicas de segurança",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Projeto Personalizado",
      description: "Desenvolvimento de solução customizada para sua operação",
      icon: "📋"
    },
    {
      number: "03",
      title: "Implementação",
      description: "Instalação profissional e configuração do sistema de monitoramento",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Treinamento",
      description: "Capacitação completa da sua equipe para utilização do sistema",
      icon: "🎓"
    },
    {
      number: "05",
      title: "Suporte Contínuo",
      description: "Acompanhamento, manutenção e otimizações constantes",
      icon: "🤝"
    }
  ];

  const values = [
    {
      title: "Parceria Verdadeira",
      description: "Não somos apenas fornecedores, somos parceiros estratégicos no seu sucesso e segurança",
      icon: "🤝"
    },
    {
      title: "Suporte Excepcional", 
      description: "Equipe especializada disponível 24/7 para garantir operação contínua",
      icon: "🚀"
    },
    {
      title: "Transparência Total",
      description: "Comunicação clara, relatórios detalhados e métricas transparentes",
      icon: "📊"
    },
    {
      title: "Inovação Constante",
      description: "Atualizações regulares e novas funcionalidades sem custos adicionais",
      icon: "💡"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-white to-secondary/50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-l from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Como nos <span className="text-accent">Relacionamos</span>
              <br />
              <span className="text-3xl md:text-4xl">com Nossos Clientes</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Construímos relacionamentos duradouros baseados na confiança, excelência e resultados
            </p>
          </div>
          
          {/* Processo de trabalho */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Nosso Processo de <span className="text-accent">Implementação</span>
            </h3>
            
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center relative">
                  {/* Linha conectora */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-accent/30 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4 hover-lift frosted-glass">
                      <div className="text-4xl mb-2">{step.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Nossos valores no relacionamento */}
          <div>
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Nossos <span className="text-accent">Compromissos</span> com Você
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover-lift frosted-glass"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{value.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="bg-primary p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 sparkle-bg opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Pronto para Transformar sua <span className="text-accent">Segurança?</span>
                </h3>
                <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                  Entre em contato conosco e descubra como podemos revolucionar 
                  a segurança da sua operação
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors">
                    Falar com Especialista
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
                    Agendar Demonstração
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationshipSection;

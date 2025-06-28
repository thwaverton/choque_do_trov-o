
const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Quem <span className="text-accent">Somos</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lideramos a revolução da segurança industrial com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Lado esquerdo - Texto principal */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transformar a segurança do trabalho através da <strong>inovação tecnológica</strong>, 
                  proporcionando ambientes de trabalho mais seguros e eficientes em áreas de alta tensão. 
                  Utilizamos visão computacional avançada para prevenir acidentes antes que aconteçam.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser a <strong>referência mundial</strong> em soluções de segurança inteligente, 
                  estabelecendo novos padrões de prevenção de acidentes e proteção de vidas humanas 
                  no ambiente industrial.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossos Valores</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Inovação Contínua:</strong> Sempre na vanguarda tecnológica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Segurança Absoluta:</strong> Comprometimento total com a proteção</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Excelência Técnica:</strong> Qualidade superior em todas as soluções</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Lado direito - Tecnologia e Benefícios */}
            <div className="bg-gradient-to-br from-secondary to-white p-8 rounded-2xl shadow-lg hover-lift">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Como Nossa Tecnologia <span className="text-accent">Funciona</span>
              </h3>
              
              <div className="space-y-6">
                <div className="frosted-glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-primary mb-3">🎯 Detecção Inteligente</h4>
                  <p className="text-gray-700">
                    Câmeras com IA identificam pessoas e equipamentos em tempo real, 
                    calculando posições e movimentos com precisão milimétrica.
                  </p>
                </div>
                
                <div className="frosted-glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-primary mb-3">⚡ Análise Preditiva</h4>
                  <p className="text-gray-700">
                    Algoritmos avançados preveem intenções de movimento e calculam 
                    riscos de aproximação a zonas perigosas.
                  </p>
                </div>
                
                <div className="frosted-glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-primary mb-3">🚨 Alerta Proativo</h4>
                  <p className="text-gray-700">
                    Sistema de alertas instantâneos impede acidentes antes que ocorram, 
                    salvando vidas e protegendo equipamentos.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-4 bg-accent/10 px-6 py-3 rounded-full">
                  <span className="text-accent font-bold text-xl">99.9%</span>
                  <span className="text-gray-700">de precisão na detecção</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

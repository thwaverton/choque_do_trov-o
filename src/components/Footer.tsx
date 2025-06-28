
const Footer = () => {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full sparkle-bg opacity-20"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Informações da empresa */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">
                Choque do <span className="text-accent">Trovão</span>
              </h3>
              <p className="text-white/80 mb-6 max-w-md">
                Revolucionando a segurança elétrica com tecnologia de monitoramento inteligente 
                para prevenção de acidentes e proteção total de pessoas e equipamentos.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-accent">📧</span>
                  <span>contato@choquedotrovao.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent">📱</span>
                  <span>(11) 98765-4321</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent">📍</span>
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
            
            {/* Links úteis */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-accent">Soluções</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">Monitoramento Elétrico</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Detecção de Riscos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Alertas Instantâneos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Relatórios Inteligentes</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Consultoria Técnica</a></li>
              </ul>
            </div>
            
            {/* Suporte */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-accent">Suporte</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Documentação Técnica</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Treinamentos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Suporte 24/7</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Status do Sistema</a></li>
              </ul>
            </div>
          </div>
          
          {/* Linha divisória */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © 2024 Choque do Trovão. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Política de Privacidade
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Termos de Uso
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                  Cookies
                </a>
              </div>
            </div>
          </div>
          
          {/* Selo de qualidade */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 frosted-glass px-6 py-3 rounded-full">
              <span className="text-accent">⚡</span>
              <span className="text-sm font-medium">Tecnologia Brasileira | Proteção Garantida 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

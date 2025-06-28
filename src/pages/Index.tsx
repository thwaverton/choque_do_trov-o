
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PlansSection from '../components/PlansSection';
import RelationshipSection from '../components/RelationshipSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Seção Hero/Banner Principal */}
      <HeroSection />
      
      {/* Seção Quem Somos */}
      <AboutSection />
      
      {/* Seção Nossos Planos */}
      <PlansSection />
      
      {/* Seção Como nos Relacionamos com o Cliente */}
      <RelationshipSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

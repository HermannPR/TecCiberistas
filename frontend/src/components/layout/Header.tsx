import { useState } from 'react';
import { Button } from '@/components/ui';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (    <header className="fixed top-0 left-0 right-0 z-50 bg-ciberista-white/95 backdrop-blur-lg border-b border-ciberista-gray-medium">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-ciberista-blue rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">C</span>
            </div>            <div>
              <h1 className="text-xl font-bold text-ciberista-text-primary">Ciberistas</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-ciberista-text-secondary hover:text-ciberista-blue transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('talleres')}
              className="text-ciberista-text-secondary hover:text-ciberista-green transition-colors font-medium"
            >
              Talleres
            </button>            <button 
              onClick={() => scrollToSection('sedes')}
              className="text-ciberista-text-secondary hover:text-ciberista-purple transition-colors font-medium"
            >
              Sedes
            </button>            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-ciberista-text-secondary hover:text-ciberista-purple transition-colors font-medium"
            >
              Testimonios
            </button>
            <Button 
              variant="gradient" 
              onClick={() => scrollToSection('inscripcion')}
              className="rounded-full"
            >
              Inscríbete
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">              <span className={`block h-0.5 bg-ciberista-text-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 bg-ciberista-text-primary transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-ciberista-text-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ciberista-gray-medium">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-ciberista-text-secondary hover:text-ciberista-blue transition-colors font-medium text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('talleres')}
                className="text-ciberista-text-secondary hover:text-ciberista-green transition-colors font-medium text-left"
              >
                Talleres
              </button>
              <button 
                onClick={() => scrollToSection('sedes')}
                className="text-ciberista-text-secondary hover:text-ciberista-purple transition-colors font-medium text-left"
              >
                Sedes
              </button>              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-ciberista-text-secondary hover:text-ciberista-purple transition-colors font-medium text-left"
              >
                Testimonios
              </button>
              <Button 
                variant="gradient" 
                onClick={() => scrollToSection('inscripcion')}
                className="self-start rounded-full"
              >
                Inscríbete
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

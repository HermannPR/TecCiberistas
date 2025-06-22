import React from 'react';
import { Button } from '../ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Talleres', href: '#workshops' },
    { name: 'Sedes', href: '#sedes' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Inscripción', href: '#registration' },
  ];

  return (    <footer className="bg-ciberista-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-ciberista-green rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                C
              </div>
              <span className="text-2xl font-bold">Ciberistas</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Transformamos vidas a través de la educación tecnológica. 
              Únete a nuestra comunidad y desarrolla las habilidades del futuro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1 text-sm">📧 Email</h4>                <a 
                  href="mailto:ciberistas@csoftmty.org" 
                  className="text-blue hover:text-blue/80 text-sm transition-colors"
                >
                  ciberistas@csoftmty.org
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-1 text-sm">📞 Teléfono</h4>
                <p className="text-gray-300 text-sm">+52 (81) 8358-2000</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1 text-sm">📍 Dirección</h4>
                <p className="text-gray-300 text-sm">
                  Av. Eugenio Garza Sada 2501<br/>
                  Col. Tecnológico, Monterrey, N.L.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ciberistas. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-1">
            <Button 
              variant="gradient"
              className="text-sm px-6"
              onClick={() => window.open('https://csoftmty.wufoo.com/forms/ciberistas-registro/', '_blank')}
            >
              ¡Inscríbete Ahora!
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

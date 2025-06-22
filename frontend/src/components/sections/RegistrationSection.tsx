import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

const RegistrationSection: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://csoftmty.wufoo.com/forms/registro-ciberistas-tec-mtymarzo-2025/', '_blank');
  };  return (
    <section id="inscripcion" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue mb-4">
              🚀 Inicia tu transformación digital
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Completa el formulario de registro oficial del Tecnológico de Monterrey 
              y da el primer paso hacia tu nueva carrera en tecnología
            </p>            <div className="bg-blue/10 border border-blue/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-blue font-medium">
                Regístrate en el formulario para el taller que desees!
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">            {/* Call to Action */}
            <Card className="p-8 text-center bg-green text-white shadow-2xl border-0">
              <div className="mb-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  ¡Regístrate ahora!
                </h3>
                <p className="text-white/90 mb-8 text-lg">
                  Accede al formulario oficial del Tecnológico de Monterrey y asegura tu lugar 
                  en cualquiera de nuestros talleres gratuitos.
                </p>
              </div>
              
              <Button 
                onClick={handleRegisterClick}
                size="lg"
                className="bg-white text-green hover:bg-gray-100 font-bold py-4 px-8 text-xl w-full transform hover:scale-105 transition-all duration-300 shadow-xl border-0"
              >
                🎯 Ir al formulario oficial
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
              
              <p className="text-white/80 text-sm mt-4">
                Se abrirá en una nueva ventana • Tecnológico de Monterrey
              </p>
            </Card>{/* Info Panel */}
            <div className="space-y-6">
              <Card className="p-6 bg-blue text-white shadow-xl border-0">
                <h3 className="text-xl font-bold mb-4">¿Por qué elegir Ciberistas?</h3>
                <ul className="space-y-3">                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Metodología práctica con proyectos reales
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Instructores con experiencia en la industria
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Red de contactos y oportunidades laborales
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Certificación reconocida por la industria
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Programa 100% gratuito
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proceso de admisión</h3>
                <div className="space-y-4">                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Completa el formulario</h4>
                      <p className="text-gray-600 text-sm">Envíanos tu información y preferencias</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">¡Comienza tu journey!</h4>
                      <p className="text-gray-600 text-sm">Inicia tu transformación digital</p>
                    </div>
                  </div>
                </div>
              </Card>              <Card className="p-6 bg-green/10 border-green/20">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-medium text-green">Inscripciones abiertas</h4>
                </div>
                <p className="text-green/80 text-sm">
                  Próximo grupo inicia en marzo 2025. ¡Cupos limitados!
                </p>
              </Card>
            </div>
          </div>

          {/* Additional CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Tienes preguntas?
              </h3>
              <p className="text-gray-600 mb-6">
                Si necesitas más información antes de registrarte, no dudes en contactarnos.
              </p>              <div className="flex flex-col sm:flex-row gap-4 justify-center">                <Button 
                  variant="outline" 
                  className="border-blue text-blue hover:bg-blue/10 transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('mailto:ciberistas@csoftmty.org', '_blank')}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Enviar email
                </Button>                <Button 
                  variant="outline" 
                  className="border-green text-green hover:bg-green/10 transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('tel:+528183582000', '_blank')}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Llamar ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

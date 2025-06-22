import { Button } from '@/components/ui';

const Hero = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('inscripcion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };  return (
    <section id="inicio" className="pt-16 bg-ciberista-white min-h-screen flex items-center">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ciberista-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ciberista-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ciberista-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-ciberista-gray-light rounded-full text-ciberista-text-primary font-medium text-sm border border-ciberista-gray-medium">
                <span className="w-2 h-2 bg-ciberista-green rounded-full mr-2 animate-pulse"></span>
                ¡Inscripciones abiertas!
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-display font-black text-ciberista-text-primary leading-tight">
                Explora el mundo de la{' '}
                <span className="text-ciberista-purple">
                  programación
                </span>
              </h1>
              
              <p className="text-xl text-ciberista-text-secondary leading-relaxed">
                Únete a <strong>Ciberistas</strong> y descubre tu potencial en el mundo de la tecnología. 
                Talleres gratuitos diseñados para jóvenes de 6 a 18 años.
              </p>
            </div>            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-ciberista-blue">500+</div>
                <div className="text-sm text-ciberista-text-light">Estudiantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-ciberista-green">15+</div>
                <div className="text-sm text-ciberista-text-light">Talleres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-ciberista-purple">8</div>
                <div className="text-sm text-ciberista-text-light">Sedes</div>
              </div>
            </div>            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gradient" 
                size="xl"
                onClick={scrollToRegistration}
                className="rounded-full font-bold"
              >
                Inscríbete GRATIS 🚀
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => {
                  const element = document.getElementById('talleres');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-ciberista-purple text-ciberista-purple hover:bg-ciberista-gray-light rounded-full font-bold transform hover:scale-105 transition-all duration-300"
              >
                Ver talleres
              </Button>
            </div>            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-ciberista-text-light">
              <div className="flex items-center space-x-2">
                <span className="text-ciberista-green">✓</span>
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-ciberista-green">✓</span>
                <span>Certificado oficial</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-ciberista-green">✓</span>
                <span>Presencial y virtual</span>
              </div>
            </div>
          </div>          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-ciberista-blue rounded-3xl p-8 shadow-2xl">
              {/* Code snippet mockup */}
              <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green rounded-full"></div>
                </div>
                <div className="space-y-2 text-green">
                  <div>
                    <span className="text-purple">function</span>{' '}
                    <span className="text-blue">crearFuturo</span>() {'{'}
                  </div>
                  <div className="ml-4">
                    <span className="text-purple">const</span>{' '}
                    <span className="text-blue">sueno</span> = 
                    <span className="text-green">"programar"</span>;
                  </div>
                  <div className="ml-4">
                    <span className="text-purple">return</span>{' '}
                    <span className="text-blue">sueno</span> + 
                    <span className="text-green">" realidad"</span>;
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-ciberista-green rounded-lg rotate-12"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-ciberista-purple rounded-full"></div>
              <div className="absolute top-8 -right-6 w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Background decorations */}
            <div className="absolute inset-0 bg-ciberista-gray-light rounded-3xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-ciberista-gray-medium/50 rounded-3xl transform -rotate-2 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

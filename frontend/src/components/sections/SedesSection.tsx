import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { PlaceholderImage } from '../ui';

interface Sede {
  id: number;
  name: string;
  address: string;
  phone?: string;
  image: string;
  features: string[];
  tipo: 'presencial' | 'virtual';
}

const sedes: Sede[] = [
  // Sedes Presenciales del Tecnológico de Monterrey
  {
    id: 1,
    name: "Campus Monterrey",
    address: "Av. Eugenio Garza Sada 2501 Col. Tecnológico, Monterrey, N.L.",
    image: "/images/campus-monterrey.jpg",
    features: ["Laboratorios de última generación", "Biblioteca digital", "Aulas especializadas", "Centro de innovación"],
    tipo: 'presencial'
  },
  {
    id: 2,
    name: "Campus Estado de México",
    address: "Carretera Lago de Guadalupe Km. 3.5, Atizapán de Zaragoza, Estado de México",
    image: "/images/campus-estado-mexico.jpg",
    features: ["Espacios colaborativos", "Laboratorios de cómputo", "Aulas inteligentes", "Centro de emprendimiento"],
    tipo: 'presencial'
  },
  {
    id: 3,
    name: "Campus Ciudad de México",
    address: "Calle del Puente 222 Col. Ejidos de Huipulco, Ciudad de México",
    image: "/images/campus-cdmx.jpg",
    features: ["Centro de innovación", "Laboratorios especializados", "Aulas multimedia", "Biblioteca científica"],
    tipo: 'presencial'
  },
  {
    id: 4,
    name: "Campus Guadalajara",
    address: "Av. Ramón Corona 2514 Col. Nuevo México, Zapopan, Jalisco",
    image: "/images/campus-guadalajara.jpg",
    features: ["Laboratorios de ingeniería", "Centro de diseño", "Aulas colaborativas", "Incubadora de empresas"],
    tipo: 'presencial'
  },
  {
    id: 5,
    name: "Campus Santa Fe",
    address: "Av. Carlos Lazo 100 Col. Santa Fe, Ciudad de México",
    image: "/images/campus-santa-fe.jpg",
    features: ["Aulas ejecutivas", "Centro de negocios", "Laboratorios financieros", "Espacios de networking"],
    tipo: 'presencial'
  },
  {
    id: 6,
    name: "Campus Sonora Norte",
    address: "Blvd. Enrique Mazón López 965 Col. Itson, Obregón, Sonora",
    image: "/images/campus-sonora.jpg",
    features: ["Laboratorios agroindustriales", "Centro de sustentabilidad", "Aulas especializadas", "Vivero de empresas"],
    tipo: 'presencial'
  },
  {
    id: 7,
    name: "Campus Eugenio Garza Lagüera",
    address: "Av. Eugenio Garza Sada 427 Col. Altavista, Monterrey, N.L.",
    image: "/images/campus-garza-laguera.jpg",
    features: ["Centro médico", "Laboratorios de salud", "Aulas de simulación", "Hospital universitario"],
    tipo: 'presencial'
  },
  {
    id: 8,
    name: "Universidad TecMilenio",
    address: "Múltiples ubicaciones en México",
    image: "/images/tecmilenio.jpg",
    features: ["Modalidad flexible", "Campus distribuidos", "Enfoque profesional", "Horarios convenientes"],
    tipo: 'presencial'  },
  // Campus Virtuales
  {
    id: 10,
    name: "Universidad Virtual",
    address: "Plataforma en línea",
    image: "/images/universidad-virtual.jpg",
    features: ["Plataforma 24/7", "Contenido interactivo", "Profesores especializados", "Flexibilidad horaria"],
    tipo: 'virtual'
  }
];

const SedesSection: React.FC = () => {
  const sedesPresenciales = sedes.filter(sede => sede.tipo === 'presencial');
  const sedesVirtuales = sedes.filter(sede => sede.tipo === 'virtual');

  return (    <section id="sedes" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue mb-4">
            Nuestras Sedes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El Tecnológico de Monterrey cuenta con múltiples campus en México para ofrecerte 
            la mejor experiencia de aprendizaje, tanto presencial como virtual.
          </p>
        </div>        {/* Sedes Presenciales */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue mb-8 text-center">
            Modalidad Presencial
          </h3>          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {sedesPresenciales.map((sede) => (              <Card key={sede.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={sede.image} 
                    alt={sede.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <PlaceholderImage 
                    name={sede.name}
                    className="absolute inset-0 w-full h-full"
                    style={{ display: 'none' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h4 className="text-white text-lg font-bold text-center px-4 drop-shadow-lg">
                      {sede.name}
                    </h4>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-4">                    <p className="text-gray-600 text-sm mb-3 flex items-start">
                      <svg className="w-4 h-4 mr-2 text-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {sede.address}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Características:</h5>
                    <ul className="space-y-1">
                      {sede.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 text-xs">
                          <svg className="w-3 h-3 mr-2 text-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>        {/* Sedes Virtuales */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue mb-8 text-center">
            Modalidad Virtual
          </h3>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {sedesVirtuales.map((sede) => (
              <Card key={sede.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={sede.image} 
                    alt={sede.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <PlaceholderImage 
                    name={sede.name}
                    className="absolute inset-0 w-full h-full"
                    style={{ display: 'none' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h4 className="text-white text-xl font-bold text-center px-4 drop-shadow-lg">
                      {sede.name}
                    </h4>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-600 mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-purple" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                      </svg>
                      {sede.address}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Características:</h5>
                    <ul className="space-y-2">
                      {sede.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>                  </div>
                </div>
              </Card>
            ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Quieres más información sobre nuestros campus y modalidades?
          </p>          <Button 
            size="lg" 
            className="bg-blue hover:bg-blue/90"
            onClick={() => window.open('mailto:ciberistas@csoftmty.org', '_blank')}
          >
            Contactar para más información
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SedesSection;

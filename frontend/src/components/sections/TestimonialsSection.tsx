import React from 'react';
import { Card } from '../ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "Desarrolladora Frontend",
    company: "TechCorp",
    content: "Los talleres de Ciberistas me ayudaron a conseguir mi primer trabajo en tech. Los instructores son excelentes y el contenido muy actualizado.",
    avatar: "/images/avatar-maria.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Analista de Datos",
    company: "DataInnovation",
    content: "Increíble experiencia. Pasé de no saber programar a trabajar como analista de datos en solo 6 meses. Totalmente recomendado.",
    avatar: "/images/avatar-carlos.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Product Manager",
    company: "StartupHub",
    content: "Los talleres no solo me enseñaron habilidades técnicas, sino también cómo trabajar en equipo y gestionar proyectos digitales.",
    avatar: "/images/avatar-ana.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Luis Hernández",
    role: "Cybersecurity Specialist",
    company: "SecureNet",
    content: "El programa de ciberseguridad superó mis expectativas. Ahora trabajo protegiendo infraestructuras críticas.",
    avatar: "/images/avatar-luis.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Sofia Vargas",
    role: "UX Designer",
    company: "DesignStudio",
    content: "Excelente metodología de enseñanza. Los proyectos prácticos me prepararon perfectamente para el mundo laboral.",
    avatar: "/images/avatar-sofia.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "David Chen",
    role: "Full Stack Developer",
    company: "DevSolutions",
    content: "La comunidad de Ciberistas es increíble. Seguimos en contacto y colaborando en proyectos después de graduarnos.",
    avatar: "/images/avatar-david.jpg",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue mb-4">
            Lo que dicen nuestros egresados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 1,000 profesionales han transformado sus carreras con nosotros. 
            Conoce sus historias de éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue mb-2">1000+</div>
              <div className="text-gray-600">Egresados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue mb-2">95%</div>
              <div className="text-gray-600">Tasa de empleabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue mb-2">4.9/5</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue mb-2">50+</div>
              <div className="text-gray-600">Empresas aliadas</div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            ¿Quieres ser parte de nuestra comunidad de profesionales exitosos?
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

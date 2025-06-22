import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui';
import { useWorkshops } from '@/hooks/useWorkshops';
import type { Workshop } from '@/types/workshop';
import { formatDate, formatTimeRange, getAgeRange } from '@/lib/utils';

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  const isAvailable = workshop.available && workshop.current < workshop.capacity;
  const spotsLeft = workshop.capacity - workshop.current;  // Función para obtener colores dinámicos basados en el tipo de taller
  const getWorkshopColors = (name: string, format: string) => {
    const nameHash = name.length % 4;
    const colorSchemes = [
      { bg: 'bg-blue/10', text: 'text-blue', hover: 'group-hover:text-blue' },
      { bg: 'bg-green/10', text: 'text-green', hover: 'group-hover:text-green' },
      { bg: 'bg-purple/10', text: 'text-purple', hover: 'group-hover:text-purple' },
      { bg: 'bg-medium', text: 'text-gray-700', hover: 'group-hover:text-gray-600' },
    ];
    
    if (format === 'Virtual') {
      return { bg: 'bg-blue/10', text: 'text-blue', hover: 'group-hover:text-blue' };
    } else if (format.includes('brido')) {
      return { bg: 'bg-purple/10', text: 'text-purple', hover: 'group-hover:text-purple' };
    }
    
    return colorSchemes[nameHash];
  };

  const colors = getWorkshopColors(workshop.name, workshop.format);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border border-current/20`}>
                {workshop.format}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {getAgeRange(workshop.ages)}
              </span>
            </div>
            <CardTitle className={`text-xl font-bold ${colors.hover} transition-colors`}>
              {workshop.name}
            </CardTitle>
          </div>          <div className={`w-4 h-4 rounded-full shadow-md ${
            isAvailable ? 'bg-green animate-pulse' : 'bg-red-500'
          }`} title={isAvailable ? 'Disponible' : 'Lleno'}></div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm line-clamp-3 flex-1">{workshop.description}</p>
          <div className="space-y-4 text-sm">          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-blue text-lg">📅</span>
              <div>
                <span className="font-medium text-gray-900">Fecha:</span>
                <p className="text-gray-600">{formatDate(workshop.date)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple text-lg">⏰</span>
              <div>
                <span className="font-medium text-gray-900">Horario:</span>
                <p className="text-gray-600">{formatTimeRange(workshop.start_time, workshop.end_time)}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-green text-lg">📍</span>
            <div>
              <span className="font-medium text-gray-900">Ubicación:</span>
              <p className="text-gray-600">{workshop.location}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-purple text-lg">👨‍🏫</span>
            <div>
              <span className="font-medium text-gray-900">Instructor:</span>
              <p className="text-gray-600">{workshop.teached_by}</p>
            </div>
          </div>          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <span className="text-blue text-lg">👥</span>
              <div>
                <span className="font-medium text-gray-900">Cupos:</span>
                <span className={`ml-2 text-sm font-bold ${
                  isAvailable ? 'text-green' : 'text-red-600'
                }`}>
                  {workshop.current}/{workshop.capacity}
                </span>
              </div>
            </div>
            {isAvailable && (
              <span className="bg-green/10 text-green px-3 py-1 rounded-full text-xs font-bold border border-green/20">
                {spotsLeft} disponibles
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const WorkshopsSection = () => {
  const { data: workshopsData, isLoading, error } = useWorkshops();

  // Safely extract workshops array with proper type safety
  const workshops: Workshop[] = workshopsData?.data || [];

  const handleRegisterClick = () => {
    window.open('https://csoftmty.wufoo.com/forms/registro-ciberistas-tec-mtymarzo-2025/', '_blank');
  };
  if (isLoading) {
    return (
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando talleres...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600">Error al cargar los talleres. Por favor, intenta de nuevo más tarde.</p>
          </div>
        </div>
      </section>
    );
  }  return (
    <section id="talleres" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-blue mb-6">
            Descubre tu{' '}
            <span className="text-purple">
              pasión
            </span>{' '}
            por la tecnología
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explora nuestros talleres gratuitos diseñados para despertar tu creatividad 
            y desarrollar habilidades tecnológicas del futuro.
          </p>

          {/* Llamada principal a la acción */}
          <div className="mb-12">            <Button 
              onClick={handleRegisterClick}
              size="lg"
              className="bg-gradient-to-r from-green to-green hover:from-green hover:to-green/90 text-white font-bold py-4 px-8 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              🚀 Inscríbete a cualquier taller
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Todos los talleres son completamente gratuitos
            </p>
          </div>
        </div>

        {workshops?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay talleres disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {workshops?.map((workshop) => (
              <WorkshopCard 
                key={workshop.id} 
                workshop={workshop}
              />
            ))}
          </div>
        )}        {/* Sección informativa adicional */}
        <div className="mt-16 text-center bg-gradient-to-r from-green to-green-600 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-black text-white mb-4">
            ¿Listo para comenzar tu journey tecnológico? 🚀
          </h3>
          <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
            Únete a más de 1,000 estudiantes que ya han transformado su futuro con nuestros talleres.
            ¡Es tu momento de brillar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleRegisterClick}
              variant="outline"
              size="lg"
              className="bg-white text-green hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold shadow-xl border-0 transform hover:scale-105 transition-all duration-300"
            >
              Inscríbete ahora
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green rounded-full px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('sedes');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver sedes disponibles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;

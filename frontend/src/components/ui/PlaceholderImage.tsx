import React from 'react';

interface PlaceholderImageProps {
  name: string;
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ name, className, style }) => {  // Generar un color basado en el hash del nombre
  const getColorFromName = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = [
      'from-blue to-blue/80',
      'from-green to-green/80', 
      'from-purple to-purple/80',
      'from-blue/80 to-purple/80',
      'from-green/80 to-blue/80',
      'from-purple/80 to-green/80'
    ];
    return colors[Math.abs(hash) % colors.length];
  };

  const gradientClass = getColorFromName(name);
  const initials = name.split(' ').map(word => word[0]).join('').slice(0, 3).toUpperCase();
  return (
    <div 
      className={`bg-gradient-to-br ${gradientClass} flex items-center justify-center ${className}`}
      style={style}
    >
      <div className="text-center text-white">
        <div className="text-4xl font-bold mb-2">{initials}</div>
        <div className="text-sm font-medium opacity-90">{name}</div>
      </div>
    </div>
  );
};

export default PlaceholderImage;

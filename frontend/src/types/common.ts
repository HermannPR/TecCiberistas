export interface Sede {
  id: number;
  name: string;
  location: string;
  type: 'Universidad' | 'Centro Comunitario' | 'Virtual';
  contact: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  workshop: string;
  content: string;
  image?: string;
  bg: string;
}

export interface Stat {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

export interface RegistrationFormData {
  // Información del participante
  participantName: string;
  participantLastName: string;
  participantAge: number;
  participantGender: 'M' | 'F' | 'Otro';
  participantEmail: string;
  participantPhone: string;
  
  // Información del tutor
  tutorName: string;
  tutorLastName: string;
  tutorEmail: string;
  tutorPhone: string;
  tutorRelation: string;
  
  // Información académica
  school: string;
  grade: string;
  hasComputer: boolean;
  hasInternet: boolean;
  programmingExperience: 'Ninguna' | 'Básica' | 'Intermedia' | 'Avanzada';
  
  // Selección de taller
  selectedWorkshopId?: number;
  motivation: string;
  expectations: string;
}

export interface RegistrationStepProps {
  data: RegistrationFormData;
  updateData: (data: Partial<RegistrationFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
  isValid: boolean;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

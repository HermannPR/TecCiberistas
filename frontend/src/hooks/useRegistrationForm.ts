import { useState, useCallback } from 'react';
import type { RegistrationFormData, FormErrors } from '@/types/registration';
import { validateEmail, validatePhone } from '@/lib/utils';

const initialFormData: RegistrationFormData = {
  participantName: '',
  participantLastName: '',
  participantAge: 0,
  participantGender: 'M',
  participantEmail: '',
  participantPhone: '',
  tutorName: '',
  tutorLastName: '',
  tutorEmail: '',
  tutorPhone: '',
  tutorRelation: '',
  school: '',
  grade: '',
  hasComputer: false,
  hasInternet: false,
  programmingExperience: 'Ninguna',
  selectedWorkshopId: undefined,
  motivation: '',
  expectations: '',
};

export const useRegistrationForm = () => {
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});

  const updateData = useCallback((data: Partial<RegistrationFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  }, []);

  const validateStep = useCallback((step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 0: // Información del participante
        if (!formData.participantName.trim()) newErrors.participantName = 'Nombre requerido';
        if (!formData.participantLastName.trim()) newErrors.participantLastName = 'Apellido requerido';
        if (formData.participantAge < 6 || formData.participantAge > 18) newErrors.participantAge = 'Edad debe estar entre 6 y 18 años';
        if (!validateEmail(formData.participantEmail)) newErrors.participantEmail = 'Email inválido';
        if (!validatePhone(formData.participantPhone)) newErrors.participantPhone = 'Teléfono inválido';
        break;

      case 1: // Información del tutor
        if (!formData.tutorName.trim()) newErrors.tutorName = 'Nombre del tutor requerido';
        if (!formData.tutorLastName.trim()) newErrors.tutorLastName = 'Apellido del tutor requerido';
        if (!validateEmail(formData.tutorEmail)) newErrors.tutorEmail = 'Email del tutor inválido';
        if (!validatePhone(formData.tutorPhone)) newErrors.tutorPhone = 'Teléfono del tutor inválido';
        if (!formData.tutorRelation.trim()) newErrors.tutorRelation = 'Relación con el participante requerida';
        break;

      case 2: // Información académica
        if (!formData.school.trim()) newErrors.school = 'Institución educativa requerida';
        if (!formData.grade.trim()) newErrors.grade = 'Grado académico requerido';
        break;

      case 3: // Selección de taller
        if (!formData.selectedWorkshopId) newErrors.selectedWorkshopId = 'Selecciona un taller';
        if (!formData.motivation.trim()) newErrors.motivation = 'Motivación requerida';
        if (!formData.expectations.trim()) newErrors.expectations = 'Expectativas requeridas';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const nextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, validateStep]);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setErrors({});
  }, []);

  return {
    formData,
    currentStep,
    errors,
    updateData,
    nextStep,
    prevStep,
    resetForm,
    validateStep: () => validateStep(currentStep),
  };
};

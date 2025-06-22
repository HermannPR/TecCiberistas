import { useState } from 'react';

interface AdultRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  workshop: string;
  experience: string;
  motivation: string;
}

export const useAdultRegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitRegistration = async (formData: AdultRegistrationData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el registro');
      }

      const result = await response.json();
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitRegistration,
    isLoading,
    error,
  };
};

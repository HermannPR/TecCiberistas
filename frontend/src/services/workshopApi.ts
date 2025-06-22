import { apiClient } from '@/lib/api';
import type { Workshop, WorkshopFormData, ApiResponse } from '@/types/workshop';

export const workshopApi = {
  // Obtener todos los talleres
  getWorkshops: async (page: number = 1): Promise<ApiResponse<Workshop[]>> => {
    return apiClient.get<ApiResponse<Workshop[]>>(`/workshops?page=${page}`);
  },

  // Crear nuevo taller
  createWorkshop: async (workshopData: WorkshopFormData): Promise<{ message: string }> => {
    return apiClient.post<{ message: string }>('/workshops', workshopData);
  },

  // Obtener taller por ID
  getWorkshopById: async (id: number): Promise<Workshop> => {
    return apiClient.get<Workshop>(`/workshops/${id}`);
  },
};

import { apiClient } from '@/lib/api';
import type { Date, ApiResponse } from '@/types/workshop';

export const dateApi = {
  // Obtener todas las fechas
  getDates: async (page: number = 1): Promise<ApiResponse<Date[]>> => {
    return apiClient.get<ApiResponse<Date[]>>(`/dates?page=${page}`);
  },

  // Crear nueva fecha
  createDate: async (dateData: { date: string }): Promise<{ message: string }> => {
    return apiClient.post<{ message: string }>('/dates', dateData);
  },
};

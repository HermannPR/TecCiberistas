import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { workshopApi } from '@/services/workshopApi';
import { dateApi } from '@/services/dateApi';
import type { WorkshopFormData } from '@/types/workshop';

export const useWorkshops = (page: number = 1) => {
  return useQuery({
    queryKey: ['workshops', page],
    queryFn: () => workshopApi.getWorkshops(page),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useWorkshopById = (id: number) => {
  return useQuery({
    queryKey: ['workshop', id],
    queryFn: () => workshopApi.getWorkshopById(id),
    enabled: !!id,
  });
};

export const useCreateWorkshop = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (workshopData: WorkshopFormData) => 
      workshopApi.createWorkshop(workshopData),
    onSuccess: () => {
      // Invalidate and refetch workshops
      queryClient.invalidateQueries({ queryKey: ['workshops'] });
    },
  });
};

export const useDates = (page: number = 1) => {
  return useQuery({
    queryKey: ['dates', page],
    queryFn: () => dateApi.getDates(page),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Types for the workshop system
export interface Workshop {
  id: number;
  group_id: number;
  name: string;
  format: 'Presencial' | 'Virtual';
  date_id: number;
  date: string; // From JOIN with dates table
  start_time: string;
  end_time: string;
  capacity: number;
  current: number;
  teached_by: string;
  description: string;
  ages: string;
  requisites: string;
  objective: string;
  gender: string;
  location: string;
  available: boolean;
}

export interface Date {
  id: number;
  date: string; // YYYY-MM-DD format
}

export interface WorkshopFormData {
  group_id?: number;
  name: string;
  format: 'Presencial' | 'Virtual';
  date_id: number;
  start_time: string;
  end_time: string;
  capacity: number;
  current?: number;
  teached_by: string;
  description: string;
  ages: string;
  requisites: string;
  objective: string;
  gender: string;
  location: string;
  available: boolean;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  meta?: {
    page: number;
  };
}

export interface ApiError {
  message: string;
  statusCode?: number;
}

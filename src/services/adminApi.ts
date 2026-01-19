// API service functions for admin user management

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'nanny' | 'client';
  createdAt?: string;
  lastLogin?: string;
  activeBookings?: number;
  canBeDeleted?: boolean;
  canBeConverted?: boolean;
  conversionWarnings?: string[];
}

interface DeleteUserResponse {
  success: boolean;
  message: string;
  deletedUser: {
    id: string;
    email: string;
    type: 'nanny' | 'client';
    deletedAt: string;
  };
}

interface ConvertUserTypeResponse {
  success: boolean;
  message: string;
  convertedUser: {
    id: string;
    email: string;
    previousType: 'nanny' | 'client';
    newType: 'nanny' | 'client';
    convertedAt: string;
  };
}

interface GetUserDetailsResponse {
  id: string;
  email: string;
  name: string;
  type: 'nanny' | 'client';
  createdAt: string;
  lastLogin: string;
  canBeDeleted: boolean;
  canBeConverted: boolean;
  activeBookings: number;
  conversionWarnings?: string[];
}

// Get authentication token from storage or context
const getAuthToken = (): string | null => {
  // This should be replaced with your actual auth token retrieval logic
  return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
};

// Generic API request helper
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const token = getAuthToken();
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Delete user
export const deleteUser = async (
  userId: string,
  reason?: string
): Promise<DeleteUserResponse> => {
  return apiRequest<DeleteUserResponse>(`/admin/users/${userId}`, {
    method: 'DELETE',
    body: JSON.stringify({ reason }),
  });
};

// Convert user type
export const convertUserType = async (
  userId: string,
  targetType: 'nanny' | 'client',
  reason?: string
): Promise<ConvertUserTypeResponse> => {
  return apiRequest<ConvertUserTypeResponse>(`/admin/users/${userId}/convert-type`, {
    method: 'POST',
    body: JSON.stringify({ targetType, reason }),
  });
};

// Get user details with eligibility info
export const getUserDetails = async (userId: string): Promise<GetUserDetailsResponse> => {
  return apiRequest<GetUserDetailsResponse>(`/admin/users/${userId}`);
};

// Get all clients
export const getClients = async (): Promise<User[]> => {
  return apiRequest<User[]>('/admin/clients');
};

// Get all nannies
export const getNannies = async (): Promise<User[]> => {
  return apiRequest<User[]>('/admin/nannies');
};

export type { User, DeleteUserResponse, ConvertUserTypeResponse, GetUserDetailsResponse };



// React Query hooks for admin user management

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  deleteUser,
  convertUserType,
  getUserDetails,
  getClients,
  getNannies,
} from '@/services/adminApi';

// Query keys
export const adminUserKeys = {
  all: ['admin-users'] as const,
  clients: () => [...adminUserKeys.all, 'clients'] as const,
  nannies: () => [...adminUserKeys.all, 'nannies'] as const,
  detail: (id: string) => [...adminUserKeys.all, 'detail', id] as const,
};

// Get all clients
export const useClients = () => {
  return useQuery({
    queryKey: adminUserKeys.clients(),
    queryFn: getClients,
    staleTime: 30000, // 30 seconds
  });
};

// Get all nannies
export const useNannies = () => {
  return useQuery({
    queryKey: adminUserKeys.nannies(),
    queryFn: getNannies,
    staleTime: 30000, // 30 seconds
  });
};

// Get user details
export const useUserDetails = (userId: string) => {
  return useQuery({
    queryKey: adminUserKeys.detail(userId),
    queryFn: () => getUserDetails(userId),
    enabled: !!userId,
  });
};

// Delete user mutation
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, reason }: { userId: string; reason?: string }) =>
      deleteUser(userId, reason),
    onSuccess: (data, variables) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: adminUserKeys.clients() });
      queryClient.invalidateQueries({ queryKey: adminUserKeys.nannies() });
      queryClient.invalidateQueries({ queryKey: adminUserKeys.detail(variables.userId) });
      
      toast.success('User deleted successfully', {
        description: `${data.deletedUser.email} has been deleted from the system.`,
      });
    },
    onError: (error: Error) => {
      toast.error('Failed to delete user', {
        description: error.message || 'An error occurred while deleting the user.',
      });
    },
  });
};

// Convert user type mutation
export const useConvertUserType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      targetType,
      reason,
    }: {
      userId: string;
      targetType: 'nanny' | 'client';
      reason?: string;
    }) => convertUserType(userId, targetType, reason),
    onSuccess: (data, variables) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: adminUserKeys.clients() });
      queryClient.invalidateQueries({ queryKey: adminUserKeys.nannies() });
      queryClient.invalidateQueries({ queryKey: adminUserKeys.detail(variables.userId) });
      
      toast.success('User type converted successfully', {
        description: `${data.convertedUser.email} has been converted from ${data.convertedUser.previousType} to ${data.convertedUser.newType}.`,
      });
    },
    onError: (error: Error) => {
      toast.error('Failed to convert user type', {
        description: error.message || 'An error occurred while converting the user type.',
      });
    },
  });
};



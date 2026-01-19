import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useDeleteUser } from '@/hooks/useAdminUsers';
import { AlertTriangle, Loader2 } from 'lucide-react';

interface DeleteUserDialogProps {
  user: {
    id: string;
    name: string;
    email: string;
    type: 'nanny' | 'client';
    activeBookings?: number;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const DeleteUserDialog = ({
  user,
  open,
  onOpenChange,
  onSuccess,
}: DeleteUserDialogProps) => {
  const [reason, setReason] = useState('');
  const deleteUserMutation = useDeleteUser();

  const handleDelete = async () => {
    try {
      await deleteUserMutation.mutateAsync({
        userId: user.id,
        reason: reason.trim() || undefined,
      });
      setReason('');
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      // Error is handled by the mutation hook
    }
  };

  const isLoading = deleteUserMutation.isPending;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <AlertDialogTitle>Delete User</AlertDialogTitle>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription className="space-y-4">
          <div>
            <p className="text-base font-medium text-foreground mb-2">
              Are you sure you want to delete this user?
            </p>
            <div className="bg-muted p-3 rounded-md space-y-1">
              <p className="text-sm">
                <span className="font-medium">Name:</span> {user.name}
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-sm">
                <span className="font-medium">Type:</span>{' '}
                <span className="capitalize">{user.type}</span>
              </p>
              {user.activeBookings !== undefined && user.activeBookings > 0 && (
                <p className="text-sm text-destructive font-medium mt-2">
                  ⚠️ This user has {user.activeBookings} active booking(s). Deletion may fail if bookings are not cancelled first.
                </p>
              )}
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
            <p className="text-sm text-destructive font-medium mb-1">
              Warning: This action cannot be undone
            </p>
            <p className="text-xs text-muted-foreground">
              All user data, including profile information, bookings, and history, will be permanently deleted from the system.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="delete-reason" className="text-sm">
              Reason for deletion (optional)
            </Label>
            <Textarea
              id="delete-reason"
              placeholder="Enter reason for deletion (for audit purposes)..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[80px] resize-none"
              disabled={isLoading}
            />
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              'Delete User'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};



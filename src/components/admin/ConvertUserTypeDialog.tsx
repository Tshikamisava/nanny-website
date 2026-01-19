import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useConvertUserType } from '@/hooks/useAdminUsers';
import { Loader2, ArrowRight, Users, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ConvertUserTypeDialogProps {
  user: {
    id: string;
    name: string;
    email: string;
    currentType: 'nanny' | 'client';
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const ConvertUserTypeDialog = ({
  user,
  open,
  onOpenChange,
  onSuccess,
}: ConvertUserTypeDialogProps) => {
  const [reason, setReason] = useState('');
  const convertUserTypeMutation = useConvertUserType();

  const targetType = user.currentType === 'nanny' ? 'client' : 'nanny';

  const handleConvert = async () => {
    try {
      await convertUserTypeMutation.mutateAsync({
        userId: user.id,
        targetType,
        reason: reason.trim() || undefined,
      });
      setReason('');
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      // Error is handled by the mutation hook
    }
  };

  const isLoading = convertUserTypeMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Convert User Type</DialogTitle>
          <DialogDescription>
            Convert this user from {user.currentType} to {targetType}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* User Info */}
          <div className="bg-muted p-3 rounded-md space-y-1">
            <p className="text-sm">
              <span className="font-medium">Name:</span> {user.name}
            </p>
            <p className="text-sm">
              <span className="font-medium">Email:</span> {user.email}
            </p>
          </div>

          {/* Conversion Preview */}
          <div className="flex items-center justify-center gap-4 p-4 bg-muted/50 rounded-md">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                {user.currentType === 'nanny' ? (
                  <Users className="h-5 w-5 text-primary" />
                ) : (
                  <User className="h-5 w-5 text-primary" />
                )}
                <Badge variant="outline" className="capitalize">
                  {user.currentType}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">Current Type</p>
            </div>

            <ArrowRight className="h-5 w-5 text-muted-foreground" />

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                {targetType === 'nanny' ? (
                  <Users className="h-5 w-5 text-primary" />
                ) : (
                  <User className="h-5 w-5 text-primary" />
                )}
                <Badge variant="default" className="capitalize">
                  {targetType}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">New Type</p>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-md p-3">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-medium mb-1">
              What will change:
            </p>
            <ul className="text-xs text-amber-800 dark:text-amber-300 space-y-1 list-disc list-inside">
              <li>User type will be updated to {targetType}</li>
              <li>Type-specific data will be migrated or archived</li>
              <li>User will need to complete {targetType} profile setup</li>
              {user.currentType === 'nanny' && (
                <li>Nanny-specific data (certifications, availability) will be archived</li>
              )}
              {user.currentType === 'client' && (
                <li>Client-specific data (family info, preferences) will be archived</li>
              )}
            </ul>
          </div>

          {/* Reason Input */}
          <div className="space-y-2">
            <Label htmlFor="convert-reason" className="text-sm">
              Reason for conversion (optional)
            </Label>
            <Textarea
              id="convert-reason"
              placeholder="Enter reason for conversion (e.g., registration error)..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[80px] resize-none"
              disabled={isLoading}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button onClick={handleConvert} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Converting...
              </>
            ) : (
              `Convert to ${targetType}`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};



import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Trash2, ArrowRightLeft, Edit } from 'lucide-react';
import { DeleteUserDialog } from './DeleteUserDialog';
import { ConvertUserTypeDialog } from './ConvertUserTypeDialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface UserActionsDropdownProps {
  user: {
    id: string;
    name: string;
    email: string;
    type: 'nanny' | 'client';
    activeBookings?: number;
  };
  canDelete?: boolean;
  canConvert?: boolean;
  onEdit?: () => void;
  onDeleteSuccess?: () => void;
  onConvertSuccess?: () => void;
}

export const UserActionsDropdown = ({
  user,
  canDelete = true,
  canConvert = true,
  onEdit,
  onDeleteSuccess,
  onConvertSuccess,
}: UserActionsDropdownProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [convertDialogOpen, setConvertDialogOpen] = useState(false);

  const targetType = user.type === 'nanny' ? 'client' : 'nanny';

  return (
    <>
      <TooltipProvider>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {onEdit && (
              <DropdownMenuItem onClick={onEdit}>
                <Edit className="mr-2 h-4 w-4" />
                Edit User
              </DropdownMenuItem>
            )}
            {onEdit && <DropdownMenuSeparator />}
            {canConvert ? (
              <DropdownMenuItem onClick={() => setConvertDialogOpen(true)}>
                <ArrowRightLeft className="mr-2 h-4 w-4" />
                Convert to {targetType}
              </DropdownMenuItem>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <DropdownMenuItem disabled>
                      <ArrowRightLeft className="mr-2 h-4 w-4" />
                      Convert to {targetType}
                    </DropdownMenuItem>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cannot convert user with active bookings</p>
                </TooltipContent>
              </Tooltip>
            )}
            {canDelete ? (
              <DropdownMenuItem
                onClick={() => setDeleteDialogOpen(true)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete User
              </DropdownMenuItem>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <DropdownMenuItem
                      disabled
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete User
                    </DropdownMenuItem>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {user.activeBookings && user.activeBookings > 0
                      ? `Cannot delete user with ${user.activeBookings} active booking(s)`
                      : 'Cannot delete this user'}
                  </p>
                </TooltipContent>
              </Tooltip>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipProvider>

      <DeleteUserDialog
        user={user}
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onSuccess={onDeleteSuccess}
      />

      <ConvertUserTypeDialog
        user={{
          id: user.id,
          name: user.name,
          email: user.email,
          currentType: user.type,
        }}
        open={convertDialogOpen}
        onOpenChange={setConvertDialogOpen}
        onSuccess={onConvertSuccess}
      />
    </>
  );
};



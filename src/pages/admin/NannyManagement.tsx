import { useNannies } from '@/hooks/useAdminUsers';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserActionsDropdown } from '@/components/admin/UserActionsDropdown';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Loader2, Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NannyManagement = () => {
  const { data: nannies, isLoading, error, refetch } = useNannies();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-destructive">Failed to load nannies</p>
        <Button onClick={() => refetch()}>Try Again</Button>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Nanny Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage nannies and their accounts
          </p>
        </div>
        <Button onClick={() => navigate('/admin/nannies/new')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Nanny
        </Button>
      </div>

      {/* Nannies Table */}
      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Nannies</h2>
            <Badge variant="secondary" className="ml-2">
              {nannies?.length || 0}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            View and manage all nannies in the system
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Active Bookings</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nannies && nannies.length > 0 ? (
              nannies.map((nanny) => (
                <TableRow key={nanny.id}>
                  <TableCell className="font-medium">{nanny.name}</TableCell>
                  <TableCell>{nanny.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {nanny.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {nanny.activeBookings !== undefined ? (
                      <Badge
                        variant={
                          nanny.activeBookings > 0 ? 'default' : 'secondary'
                        }
                      >
                        {nanny.activeBookings}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {nanny.canBeDeleted === false ? (
                      <Badge variant="outline" className="text-amber-600">
                        Protected
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-green-600">
                        Active
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <UserActionsDropdown
                      user={{
                        id: nanny.id,
                        name: nanny.name,
                        email: nanny.email,
                        type: nanny.type,
                        activeBookings: nanny.activeBookings,
                      }}
                      canDelete={nanny.canBeDeleted !== false}
                      canConvert={nanny.canBeConverted !== false}
                      onDeleteSuccess={() => refetch()}
                      onConvertSuccess={() => refetch()}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No nannies found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
    </AdminLayout>
  );
};

export default NannyManagement;


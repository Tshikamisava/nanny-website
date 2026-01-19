import { useClients } from '@/hooks/useAdminUsers';
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

const ClientManagement = () => {
  const { data: clients, isLoading, error, refetch } = useClients();
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
        <p className="text-destructive">Failed to load clients</p>
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
          <h1 className="text-3xl font-bold">Client Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage clients and their accounts
          </p>
        </div>
        <Button onClick={() => navigate('/admin/clients/new')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      {/* Clients Table */}
      <div className="border rounded-lg">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Clients</h2>
            <Badge variant="secondary" className="ml-2">
              {clients?.length || 0}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            View and manage all clients in the system
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
            {clients && clients.length > 0 ? (
              clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {client.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {client.activeBookings !== undefined ? (
                      <Badge
                        variant={
                          client.activeBookings > 0 ? 'default' : 'secondary'
                        }
                      >
                        {client.activeBookings}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {client.canBeDeleted === false ? (
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
                        id: client.id,
                        name: client.name,
                        email: client.email,
                        type: client.type,
                        activeBookings: client.activeBookings,
                      }}
                      canDelete={client.canBeDeleted !== false}
                      canConvert={client.canBeConverted !== false}
                      onDeleteSuccess={() => refetch()}
                      onConvertSuccess={() => refetch()}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No clients found
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

export default ClientManagement;


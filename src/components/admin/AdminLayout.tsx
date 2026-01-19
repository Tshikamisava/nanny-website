import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  Users,
  User,
  UserCog,
  Calendar,
  Gift,
  DollarSign,
  GraduationCap,
  MessageCircle,
  CheckCircle,
  Settings,
  ClipboardList,
  CreditCard,
  BarChart3,
} from 'lucide-react';
import NannyGoldBrand from '@/components/NannyGoldBrand';

interface AdminLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { path: '/admin', label: 'Overview', icon: Home },
  { path: '/admin/nanny-management', label: 'Nanny Management', icon: Users },
  { path: '/admin/nanny-profiles', label: 'Nanny Profiles', icon: User },
  { path: '/admin/client-management', label: 'Client Management', icon: UserCog },
  { path: '/admin/booking-management', label: 'Booking Management', icon: Calendar },
  { path: '/admin/booking-calendar', label: 'Booking Calendar', icon: Calendar },
  { path: '/admin/referral-program', label: 'Referral Program', icon: Gift },
  { path: '/admin/invoicing-rewards', label: 'Invoicing & Rewards', icon: DollarSign },
  { path: '/admin/invoice-management', label: 'Invoice Management', icon: DollarSign },
  { path: '/admin/professional-development', label: 'Professional Development', icon: GraduationCap },
  { path: '/admin/support-disputes', label: 'Support & Disputes', icon: MessageCircle },
  { path: '/admin/onboarding-verification', label: 'Onboarding & Verification', icon: CheckCircle },
  { path: '/admin/interview-management', label: 'Interview Management', icon: UserCog },
  { path: '/admin/user-management', label: 'User Management', icon: Settings },
  { path: '/admin/admin-tools', label: 'Admin Tools', icon: Settings },
  { path: '/admin/testing-suite', label: 'Testing Suite', icon: ClipboardList },
  { path: '/admin/payments-finance', label: 'Payments & Finance', icon: CreditCard },
  { path: '/admin/analytics-reports', label: 'Analytics & Reports', icon: BarChart3 },
];

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col">
          <div className="p-4 border-b border-sidebar-border">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Admin Panel</h2>
          </div>
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="h-16 border-b bg-background flex items-center px-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t bg-background p-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <NannyGoldBrand size="sm" className="inline-block" />
                <span>© 2026 <NannyGoldBrand size="sm" className="inline-block" />. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="mailto:care@nannygold.co.za" className="hover:text-foreground">
                  care@nannygold.co.za
                </a>
                <a href="tel:+27662733942" className="hover:text-foreground">
                  +27 66 273 3942
                </a>
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};


import { Outlet } from 'react-router';
import { Nav } from '~/components/shared/nav';
import { AppSidebar } from '~/components/shared/sidebar';
import { SidebarProvider } from '~/components/ui/sidebar';

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <Nav />
          <main className="p-6 gradient-bg min-h-[calc(100vh-4rem)]">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

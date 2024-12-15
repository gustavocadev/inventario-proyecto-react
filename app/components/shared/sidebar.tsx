import {
  Home,
  ShoppingCart,
  Package,
  Calendar,
  Receipt,
  Users,
  BarChart,
} from 'lucide-react';
import { Link } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar';

const menuItems = [
  { title: 'Inicio', icon: Home, url: '/' },
  { title: 'Pedidos', icon: ShoppingCart, url: '/pedidos' },
  { title: 'Inventario', icon: Package, url: '/inventario' },
  { title: 'Reservas', icon: Calendar, url: '/reservas' },
  { title: 'Facturación', icon: Receipt, url: '/facturacion' },
  { title: 'Empleados', icon: Users, url: '/empleados' },
  { title: 'Reportes', icon: BarChart, url: '/reportes' },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={'/dashboard' + item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

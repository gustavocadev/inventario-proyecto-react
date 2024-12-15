import {
  ShoppingCart,
  Package,
  Calendar,
  Receipt,
  Users,
  BarChart,
} from 'lucide-react';
import { ModuleCard } from '~/components/module-card';

const modules = [
  {
    title: 'Gestión de Pedidos',
    description: 'Registra y gestiona los pedidos del restaurante',
    icon: ShoppingCart,
    color: 'bg-red-100 text-red-600',
    href: '/pedidos',
  },
  {
    title: 'Administración de Inventario',
    description: 'Gestiona el inventario de ingredientes y productos',
    icon: Package,
    color: 'bg-blue-100 text-blue-600',
    href: '/inventario',
  },
  {
    title: 'Gestión de Reservas',
    description: 'Administra las reservas de mesas',
    icon: Calendar,
    color: 'bg-green-100 text-green-600',
    href: '/reservas',
  },
  {
    title: 'Facturación y Pagos',
    description: 'Genera facturas y gestiona los pagos',
    icon: Receipt,
    color: 'bg-purple-100 text-purple-600',
    href: '/facturacion',
  },
  {
    title: 'Gestión de Empleados',
    description: 'Administra los empleados y sus turnos',
    icon: Users,
    color: 'bg-yellow-100 text-yellow-600',
    href: '/empleados',
  },
  {
    title: 'Generación de Reportes',
    description: 'Genera reportes de ventas, inventario y desempeño',
    icon: BarChart,
    color: 'bg-orange-100 text-orange-600',
    href: '/reportes',
  },
];

export default function () {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Panel de Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <ModuleCard key={module.title} {...module} />
        ))}
      </div>
    </div>
  );
}

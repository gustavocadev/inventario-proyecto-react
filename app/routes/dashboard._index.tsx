import { Link } from 'react-router';
import { LinkCard } from '~/components/link-card';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

export default function () {
  const options = [
    {
      title: 'Gestión de Pedidos',
      description: 'Registra y gestiona los pedidos del restaurante',
      color: 'bg-gradient-to-br from-red-500 to-pink-500',
      href: '/pedidos',
    },
    {
      title: 'Administración de Inventario',
      description: 'Gestiona el inventario de ingredientes y productos',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      href: '/inventario',
    },
    {
      title: 'Gestión de Reservas',
      description: 'Administra las reservas de mesas',
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      href: '/reservas',
    },
    {
      title: 'Facturación y Pagos',
      description: 'Genera facturas y gestiona los pagos',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-500',
      href: '/facturacion',
    },
    {
      title: 'Gestión de Empleados',
      description: 'Administra los empleados y sus turnos',
      color: 'bg-gradient-to-br from-yellow-500 to-amber-500',
      href: '/empleados',
    },
    {
      title: 'Generación de Reportes',
      description: 'Genera reportes de ventas, inventario y desempeño',
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      href: '/reportes',
    },
  ];
  return (
    <div className="min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {options.map((option) => (
          <LinkCard
            description={option.description}
            title={option.title}
            color={option.color}
            href={option.href}
          />
        ))}
      </div>
    </div>
  );
}

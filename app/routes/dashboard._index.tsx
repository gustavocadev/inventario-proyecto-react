import { LinkCard } from '~/components/link-card';

export default function () {
  const options = [
    {
      title: 'Gestión de Pedidos',
      description: 'Registra y gestiona los pedidos del restaurante',
      color: 'bg-gradient-to-br from-red-100 to-pink-100',
      textColor: 'text-red-600',
      href: '/pedidos',
    },
    {
      title: 'Administración de Inventario',
      description: 'Gestiona el inventario de ingredientes y productos',
      color: 'bg-gradient-to-br from-blue-100 to-cyan-100',
      textColor: 'text-blue-600',
      href: '/inventario',
    },
    {
      title: 'Gestión de Reservas',
      description: 'Administra las reservas de mesas',
      color: 'bg-gradient-to-br from-green-100 to-emerald-100',
      textColor: 'text-green-600',
      href: '/reservas',
    },
    {
      title: 'Facturación y Pagos',
      description: 'Genera facturas y gestiona los pagos',
      color: 'bg-gradient-to-br from-purple-100 to-indigo-100',
      textColor: 'text-purple-600',
      href: '/facturacion',
    },
    {
      title: 'Gestión de Empleados',
      description: 'Administra los empleados y sus turnos',
      color: 'bg-gradient-to-br from-yellow-100 to-amber-100',
      textColor: 'text-yellow-600',
      href: '/empleados',
    },
    {
      title: 'Generación de Reportes',
      description: 'Genera reportes de ventas, inventario y desempeño',
      color: 'bg-gradient-to-br from-orange-100 to-red-100',
      textColor: 'text-orange-600',
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
            textColor={option.textColor}
            href={option.href}
          />
        ))}
      </div>
    </div>
  );
}

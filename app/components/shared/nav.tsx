import { Link } from 'react-router';

const routes = [
  {
    href: '/dashboard',
    label: 'Inicio',
  },
  {
    href: '/dashboard/pedidos',
    label: 'Pedidos',
  },
  {
    href: '/dashboard/inventario',
    label: 'Inventario',
  },
  {
    href: '/dashboard/reservas',
    label: 'Reservas',
  },
  {
    href: '/dashboard/facturacion',
    label: 'Facturación',
  },
  {
    href: '/dashboard/empleados',
    label: 'Empleados',
  },
  {
    href: '/dashboard/reportes',
    label: 'Reportes',
  },
];

export const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {routes.map((route) => (
          <li key={route.href}>
            <Link to={route.href} className="hover:text-gray-300">
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

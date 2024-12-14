import { Link, Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <div>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/dashboard" className="hover:text-gray-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/dashboard/pedidos" className="hover:text-gray-300">
                Pedidos
              </Link>
            </li>
            <li>
              <Link to="/dashboard/inventario" className="hover:text-gray-300">
                Inventario
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reservas" className="hover:text-gray-300">
                Reservas
              </Link>
            </li>
            <li>
              <Link to="/dashboard/facturacion" className="hover:text-gray-300">
                Facturación
              </Link>
            </li>
            <li>
              <Link to="/dashboard/empleados" className="hover:text-gray-300">
                Empleados
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reportes" className="hover:text-gray-300">
                Reportes
              </Link>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

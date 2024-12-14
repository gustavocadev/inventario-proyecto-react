import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function () {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Link
          to="/dashboard/pedidos"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Gestión de Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Registra y gestiona los pedidos del restaurante
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/inventario"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Administración de Inventario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Gestiona el inventario de ingredientes y productos
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/reservas"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Gestión de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">Administra las reservas de mesas</p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/facturacion"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Facturación y Pagos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Genera facturas y gestiona los pagos
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/empleados"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Gestión de Empleados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Administra los empleados y sus turnos
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/reportes"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Generación de Reportes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Genera reportes de ventas, inventario y desempeño
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Link
          to="/dashboard/pedidos"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Gestión de Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Registra y gestiona los pedidos del restaurante
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/inventario"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                Administración de Inventario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Gestiona el inventario de ingredientes y productos
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/reservas"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Gestión de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">Administra las reservas de mesas</p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/facturacion"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Facturación y Pagos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Genera facturas y gestiona los pagos
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/empleados"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Gestión de Empleados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Administra los empleados y sus turnos
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/dashboard/reportes"
          className="no-underline transform hover:scale-105 transition-transform duration-200"
        >
          <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Generación de Reportes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Genera reportes de ventas, inventario y desempeño
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

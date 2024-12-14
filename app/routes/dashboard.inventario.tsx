import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

type Producto = {
  id: number;
  nombre: string;
  cantidad: number;
  umbral: number;
};

export default function AdministracionInventario() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    cantidad: "",
    umbral: "",
  });

  const agregarProducto = () => {
    if (
      nuevoProducto.nombre &&
      nuevoProducto.cantidad &&
      nuevoProducto.umbral
    ) {
      setProductos([
        ...productos,
        {
          id: Date.now(),
          nombre: nuevoProducto.nombre,
          cantidad: parseInt(nuevoProducto.cantidad),
          umbral: parseInt(nuevoProducto.umbral),
        },
      ]);
      setNuevoProducto({ nombre: "", cantidad: "", umbral: "" });
    }
  };

  const actualizarCantidad = (id: number, nuevaCantidad: number) => {
    setProductos(
      productos.map((producto) =>
        producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
      )
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Administración de Inventario</h1>
      <Card>
        <CardHeader>
          <CardTitle>Nuevo Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Nombre del producto"
              value={nuevoProducto.nombre}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
              }
            />
            <Input
              placeholder="Cantidad"
              type="number"
              value={nuevoProducto.cantidad}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, cantidad: e.target.value })
              }
            />
            <Input
              placeholder="Umbral de alerta"
              type="number"
              value={nuevoProducto.umbral}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, umbral: e.target.value })
              }
            />
            <Button onClick={agregarProducto}>Agregar Producto</Button>
          </div>
        </CardContent>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Producto</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Umbral</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productos.map((producto) => (
            <TableRow key={producto.id}>
              <TableCell>{producto.nombre}</TableCell>
              <TableCell>{producto.cantidad}</TableCell>
              <TableCell>{producto.umbral}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={producto.cantidad}
                  onChange={(e) =>
                    actualizarCantidad(producto.id, parseInt(e.target.value))
                  }
                  className="w-20 mr-2"
                />
                <Button
                  onClick={() =>
                    actualizarCantidad(producto.id, producto.cantidad + 1)
                  }
                >
                  +
                </Button>
                <Button
                  onClick={() =>
                    actualizarCantidad(
                      producto.id,
                      Math.max(0, producto.cantidad - 1)
                    )
                  }
                  className="ml-2"
                >
                  -
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {productos
        .filter((p) => p.cantidad < p.umbral)
        .map((p) => (
          <Alert key={p.id} variant="destructive">
            <AlertTitle>Alerta de inventario bajo</AlertTitle>
            <AlertDescription>
              El producto {p.nombre} está por debajo del umbral. Cantidad
              actual: {p.cantidad}, Umbral: {p.umbral}
            </AlertDescription>
          </Alert>
        ))}
    </div>
  );
}

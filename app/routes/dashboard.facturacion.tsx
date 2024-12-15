import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

type Factura = {
  id: number;
  mesa: number;
  items: { nombre: string; precio: number; cantidad: number }[];
  total: number;
  estado: 'pendiente' | 'pagada';
  metodoPago?: string;
};

export default function FacturacionPagos() {
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [nuevaFactura, setNuevaFactura] = useState({
    mesa: '',
    items: [{ nombre: '', precio: '', cantidad: '' }],
  });

  const agregarItem = () => {
    setNuevaFactura({
      ...nuevaFactura,
      items: [...nuevaFactura.items, { nombre: '', precio: '', cantidad: '' }],
    });
  };

  const actualizarItem = (index: number, campo: string, valor: string) => {
    const nuevosItems = nuevaFactura.items.map((item, i) =>
      i === index ? { ...item, [campo]: valor } : item
    );
    setNuevaFactura({ ...nuevaFactura, items: nuevosItems });
  };

  const generarFactura = () => {
    if (
      nuevaFactura.mesa &&
      nuevaFactura.items.every(
        (item) => item.nombre && item.precio && item.cantidad
      )
    ) {
      const items = nuevaFactura.items.map((item) => ({
        nombre: item.nombre,
        precio: parseFloat(item.precio),
        cantidad: parseInt(item.cantidad),
      }));
      const total = items.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
      );
      setFacturas([
        ...facturas,
        {
          id: Date.now(),
          mesa: parseInt(nuevaFactura.mesa),
          items,
          total,
          estado: 'pendiente',
        },
      ]);
      setNuevaFactura({
        mesa: '',
        items: [{ nombre: '', precio: '', cantidad: '' }],
      });
    }
  };

  const registrarPago = (id: number, metodoPago: string) => {
    setFacturas(
      facturas.map((factura) =>
        factura.id === id
          ? { ...factura, estado: 'pagada', metodoPago }
          : factura
      )
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Facturación y Pagos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Nueva Factura</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input
              placeholder="Número de mesa"
              value={nuevaFactura.mesa}
              onChange={(e) =>
                setNuevaFactura({ ...nuevaFactura, mesa: e.target.value })
              }
            />
            {nuevaFactura.items.map((item, index) => (
              <div key={index} className="flex space-x-2">
                <Input
                  placeholder="Nombre del item"
                  value={item.nombre}
                  onChange={(e) =>
                    actualizarItem(index, 'nombre', e.target.value)
                  }
                />
                <Input
                  placeholder="Precio"
                  type="number"
                  value={item.precio}
                  onChange={(e) =>
                    actualizarItem(index, 'precio', e.target.value)
                  }
                />
                <Input
                  placeholder="Cantidad"
                  type="number"
                  value={item.cantidad}
                  onChange={(e) =>
                    actualizarItem(index, 'cantidad', e.target.value)
                  }
                />
              </div>
            ))}
            <div className="flex gap-2">
              <Button onClick={agregarItem}>Agregar Item</Button>
              <Button onClick={generarFactura}>Generar Factura</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mesa</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facturas.map((factura) => (
            <TableRow key={factura.id}>
              <TableCell>{factura.mesa}</TableCell>
              <TableCell>
                {factura.items.map((item, index) => (
                  <div key={index}>
                    {item.nombre} x{item.cantidad}
                  </div>
                ))}
              </TableCell>
              <TableCell>S/. {factura.total.toFixed(2)}</TableCell>
              <TableCell>{factura.estado}</TableCell>
              <TableCell>
                {factura.estado === 'pendiente' && (
                  <Select
                    onValueChange={(value) => registrarPago(factura.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Método de pago" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="efectivo">Efectivo</SelectItem>
                      <SelectItem value="tarjeta">Tarjeta</SelectItem>
                      <SelectItem value="movil">Pago móvil</SelectItem>
                    </SelectContent>
                  </Select>
                )}
                {factura.estado === 'pagada' && factura.metodoPago}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

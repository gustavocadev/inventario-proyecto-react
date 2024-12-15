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

type Pedido = {
  id: number;
  mesa: number;
  items: string;
  estado: 'pendiente' | 'preparando' | 'listo' | 'entregado' | 'cancelado';
};

export default function GestionPedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [nuevoPedido, setNuevoPedido] = useState({ mesa: '', items: '' });

  const agregarPedido = () => {
    if (nuevoPedido.mesa && nuevoPedido.items) {
      setPedidos([
        ...pedidos,
        {
          id: Date.now(),
          mesa: parseInt(nuevoPedido.mesa),
          items: nuevoPedido.items,
          estado: 'pendiente',
        },
      ]);
      setNuevoPedido({ mesa: '', items: '' });
    }
  };

  const actualizarEstado = (id: number, nuevoEstado: Pedido['estado']) => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, estado: nuevoEstado } : pedido
      )
    );
  };

  const cancelarPedido = (id: number) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Gestión de Pedidos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Nuevo Pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Número de mesa"
              value={nuevoPedido.mesa}
              onChange={(e) =>
                setNuevoPedido({ ...nuevoPedido, mesa: e.target.value })
              }
            />
            <Input
              placeholder="Items del pedido"
              value={nuevoPedido.items}
              onChange={(e) =>
                setNuevoPedido({ ...nuevoPedido, items: e.target.value })
              }
            />
            <Button onClick={agregarPedido}>Agregar Pedido</Button>
          </div>
        </CardContent>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mesa</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pedidos.map((pedido) => (
            <TableRow key={pedido.id}>
              <TableCell>{pedido.mesa}</TableCell>
              <TableCell>{pedido.items}</TableCell>
              <TableCell>{pedido.estado}</TableCell>
              <TableCell className="flex">
                <Select
                  onValueChange={(value) =>
                    actualizarEstado(pedido.id, value as Pedido['estado'])
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Cambiar estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="preparando">Preparando</SelectItem>
                    <SelectItem value="listo">Listo</SelectItem>
                    <SelectItem value="entregado">Entregado</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="destructive"
                  onClick={() => cancelarPedido(pedido.id)}
                  className="ml-2"
                >
                  Cancelar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

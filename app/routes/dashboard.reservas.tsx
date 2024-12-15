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

export function meta() {
  return [
    { title: 'Reservas' },
    { name: 'description', content: 'Gestión de reservas de mesas' },
  ];
}

type Reserva = {
  id: number;
  nombre: string;
  fecha: string;
  hora: string;
  mesa: number;
  personas: number;
};

export default function GestionReservas() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [nuevaReserva, setNuevaReserva] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    mesa: '',
    personas: '',
  });

  const agregarReserva = () => {
    if (
      nuevaReserva.nombre &&
      nuevaReserva.fecha &&
      nuevaReserva.hora &&
      nuevaReserva.mesa &&
      nuevaReserva.personas
    ) {
      setReservas([
        ...reservas,
        {
          id: Date.now(),
          nombre: nuevaReserva.nombre,
          fecha: nuevaReserva.fecha,
          hora: nuevaReserva.hora,
          mesa: parseInt(nuevaReserva.mesa),
          personas: parseInt(nuevaReserva.personas),
        },
      ]);
      setNuevaReserva({
        nombre: '',
        fecha: '',
        hora: '',
        mesa: '',
        personas: '',
      });
      // Aquí se enviaría la confirmación por correo o WhatsApp
      console.log('Enviando confirmación de reserva...');
    }
  };

  const cancelarReserva = (id: number) => {
    setReservas(reservas.filter((reserva) => reserva.id !== id));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Gestión de Reservas de Mesas</h1>
      <Card>
        <CardHeader>
          <CardTitle>Nueva Reserva</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input
              placeholder="Nombre del cliente"
              value={nuevaReserva.nombre}
              onChange={(e) =>
                setNuevaReserva({ ...nuevaReserva, nombre: e.target.value })
              }
            />
            <Input
              type="date"
              value={nuevaReserva.fecha}
              onChange={(e) =>
                setNuevaReserva({ ...nuevaReserva, fecha: e.target.value })
              }
            />
            <Input
              type="time"
              value={nuevaReserva.hora}
              onChange={(e) =>
                setNuevaReserva({ ...nuevaReserva, hora: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Número de mesa"
              value={nuevaReserva.mesa}
              onChange={(e) =>
                setNuevaReserva({ ...nuevaReserva, mesa: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Número de personas"
              value={nuevaReserva.personas}
              onChange={(e) =>
                setNuevaReserva({ ...nuevaReserva, personas: e.target.value })
              }
            />
            <Button onClick={agregarReserva}>Hacer Reserva</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((mesa) => (
          <Card
            key={mesa}
            className={`p-4 text-center ${
              reservas.some((r) => r.mesa === mesa)
                ? 'bg-red-100'
                : 'bg-green-100'
            }`}
          >
            Mesa {mesa}
          </Card>
        ))}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Hora</TableHead>
            <TableHead>Mesa</TableHead>
            <TableHead>Personas</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservas.map((reserva) => (
            <TableRow key={reserva.id}>
              <TableCell>{reserva.nombre}</TableCell>
              <TableCell>{reserva.fecha}</TableCell>
              <TableCell>{reserva.hora}</TableCell>
              <TableCell>{reserva.mesa}</TableCell>
              <TableCell>{reserva.personas}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => cancelarReserva(reserva.id)}
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

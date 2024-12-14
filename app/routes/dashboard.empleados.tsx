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

type Empleado = {
  id: number;
  nombre: string;
  puesto: string;
  turno: string;
  horaEntrada: string;
  horaSalida: string;
};

export default function GestionEmpleados() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    puesto: "",
    turno: "",
    horaEntrada: "",
    horaSalida: "",
  });

  const agregarEmpleado = () => {
    if (
      nuevoEmpleado.nombre &&
      nuevoEmpleado.puesto &&
      nuevoEmpleado.turno &&
      nuevoEmpleado.horaEntrada &&
      nuevoEmpleado.horaSalida
    ) {
      setEmpleados([
        ...empleados,
        {
          id: Date.now(),
          ...nuevoEmpleado,
        },
      ]);
      setNuevoEmpleado({
        nombre: "",
        puesto: "",
        turno: "",
        horaEntrada: "",
        horaSalida: "",
      });
    }
  };

  const registrarAsistencia = (id: number, tipo: "entrada" | "salida") => {
    const ahora = new Date().toLocaleTimeString();
    setEmpleados(
      empleados.map((empleado) =>
        empleado.id === id
          ? {
              ...empleado,
              [tipo === "entrada" ? "horaEntrada" : "horaSalida"]: ahora,
            }
          : empleado
      )
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Gestión de Empleados</h1>
      <Card>
        <CardHeader>
          <CardTitle>Nuevo Empleado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input
              placeholder="Nombre del empleado"
              value={nuevoEmpleado.nombre}
              onChange={(e) =>
                setNuevoEmpleado({ ...nuevoEmpleado, nombre: e.target.value })
              }
            />
            <Input
              placeholder="Puesto"
              value={nuevoEmpleado.puesto}
              onChange={(e) =>
                setNuevoEmpleado({ ...nuevoEmpleado, puesto: e.target.value })
              }
            />
            <Input
              placeholder="Turno"
              value={nuevoEmpleado.turno}
              onChange={(e) =>
                setNuevoEmpleado({ ...nuevoEmpleado, turno: e.target.value })
              }
            />
            <Input
              type="time"
              placeholder="Hora de entrada"
              value={nuevoEmpleado.horaEntrada}
              onChange={(e) =>
                setNuevoEmpleado({
                  ...nuevoEmpleado,
                  horaEntrada: e.target.value,
                })
              }
            />
            <Input
              type="time"
              placeholder="Hora de salida"
              value={nuevoEmpleado.horaSalida}
              onChange={(e) =>
                setNuevoEmpleado({
                  ...nuevoEmpleado,
                  horaSalida: e.target.value,
                })
              }
            />
            <Button onClick={agregarEmpleado}>Agregar Empleado</Button>
          </div>
        </CardContent>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Puesto</TableHead>
            <TableHead>Turno</TableHead>
            <TableHead>Hora Entrada</TableHead>
            <TableHead>Hora Salida</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {empleados.map((empleado) => (
            <TableRow key={empleado.id}>
              <TableCell>{empleado.nombre}</TableCell>
              <TableCell>{empleado.puesto}</TableCell>
              <TableCell>{empleado.turno}</TableCell>
              <TableCell>{empleado.horaEntrada}</TableCell>
              <TableCell>{empleado.horaSalida}</TableCell>
              <TableCell>
                <Button
                  onClick={() => registrarAsistencia(empleado.id, "entrada")}
                  className="mr-2"
                >
                  Entrada
                </Button>
                <Button
                  onClick={() => registrarAsistencia(empleado.id, "salida")}
                >
                  Salida
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

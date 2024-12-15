import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

export default function GeneracionReportes() {
  const [tipoReporte, setTipoReporte] = useState('');
  const [periodo, setPeriodo] = useState('');

  const generarReporte = () => {
    // Aquí iría la lógica para generar el reporte seleccionado
    console.log(
      `Generando reporte de ${tipoReporte} para el período ${periodo}`
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Generación de Reportes</h1>
      <Card>
        <CardHeader>
          <CardTitle>Seleccionar Reporte</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select onValueChange={setTipoReporte}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de reporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ventas">Reporte de Ventas</SelectItem>
              <SelectItem value="inventario">Reporte de Inventario</SelectItem>
              <SelectItem value="empleados">Reporte de Empleados</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setPeriodo}>
            <SelectTrigger>
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diario">Diario</SelectItem>
              <SelectItem value="semanal">Semanal</SelectItem>
              <SelectItem value="mensual">Mensual</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={generarReporte} disabled={!tipoReporte || !periodo}>
            Generar Reporte
          </Button>
        </CardContent>
      </Card>
      {tipoReporte && periodo && (
        <Card>
          <CardHeader>
            <CardTitle>Vista previa del reporte</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Aquí se mostraría una vista previa o resumen del reporte de{' '}
              {tipoReporte} para el período {periodo}.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

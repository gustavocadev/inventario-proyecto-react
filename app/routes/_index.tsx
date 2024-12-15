import { Link, useNavigate } from 'react-router';
import type { Route } from './+types/_index';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Restaurante Toro Mocho 🍉' },
    { name: 'description', content: 'Restaurante Toro Mocho' },
  ];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('login');
  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    nav('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-red-600">
      <header className="py-6 bg-[#3D2B1F] flex flex-col items-center justify-center">
        <div className="w-48 h-48 relative mb-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tmocho-FUj8dD614CZQSzLQpccStohrCwJ9Aw.jpeg"
            alt="Toro Mocho Restaurant Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-center text-yellow-300 font-serif">
          RESTAURANTE TORO MOCHO
        </h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-red-600">
                Nuestra Cocina
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL·E%202024-12-15%2011.32.48%20-%20A%20vibrant%20and%20inviting%20image%20of%20a%20beautifully%20plated%20Spanish%20cuisine%20with%20dishes%20like%20grilled%20meats,%20colorful%20tapas,%20and%20a%20rich%20dessert%20displayed%20on%20a-XnC2kB1VQMvUQbDM3B2rydrwu97DLQ.webp"
                  alt="Platos Especiales"
                  width={260}
                  className="object-cover rounded-lg mx-auto"
                />
              </div>
              <p className="text-gray-700">
                Descubre nuestra exquisita selección de platos preparados con
                los mejores ingredientes.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-red-600">
                Experiencia Culinaria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL·E%202024-12-15%2011.32.48%20-%20A%20vibrant%20and%20inviting%20image%20of%20a%20beautifully%20plated%20Spanish%20cuisine%20with%20dishes%20like%20grilled%20meats,%20colorful%20tapas,%20and%20a%20rich%20dessert%20displayed%20on%20a-XnC2kB1VQMvUQbDM3B2rydrwu97DLQ.webp"
                  alt="Experiencia Gastronómica"
                  width={260}
                  className="object-cover rounded-lg mx-auto"
                />
              </div>
              <p className="text-gray-700">
                Una experiencia gastronómica única que combina sabor, tradición
                y excelencia.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-red-600">
                Eventos Especiales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL·E%202024-12-15%2011.32.48%20-%20A%20vibrant%20and%20inviting%20image%20of%20a%20beautifully%20plated%20Spanish%20cuisine%20with%20dishes%20like%20grilled%20meats,%20colorful%20tapas,%20and%20a%20rich%20dessert%20displayed%20on%20a-XnC2kB1VQMvUQbDM3B2rydrwu97DLQ.webp"
                  alt="Eventos Especiales"
                  width={260}
                  className="object-cover rounded-lg mx-auto"
                />
              </div>
              <p className="text-gray-700">
                Celebra tus momentos especiales con nosotros. ¡Hacemos de cada
                ocasión algo memorable!
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-block bg-[#3D2B1F] hover:bg-[#2A1F16] text-yellow-300 font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 shadow-lg "
          >
            Acceder al Sistema de Gestión
          </Link>
        </div>
      </main>
      <footer className="bg-[#3D2B1F] py-4 mt-8">
        <p className="text-center text-yellow-300">
          © 2023 Restaurante Toro Mocho. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

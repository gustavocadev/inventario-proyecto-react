import { useNavigate } from "react-router";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("login");
  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    nav("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="w-[350px] bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-purple-700">
            Bienvenido
          </CardTitle>
          <CardDescription className="text-pink-600">
            Accede a tu cuenta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
              >
                Iniciar Sesión
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
              >
                Registrarse
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-purple-700">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                    className="border-purple-300 focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-purple-700">
                    Contraseña
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="border-purple-300 focus:border-purple-500"
                  />
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-pink-700">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                    className="border-pink-300 focus:border-pink-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-pink-700">
                    Contraseña
                  </Label>
                  <Input
                    id="register-password"
                    type="password"
                    required
                    className="border-pink-300 focus:border-pink-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-pink-700">
                    Confirmar Contraseña
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    className="border-pink-300 focus:border-pink-500"
                  />
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
                  type="submit"
                >
                  Registrarse
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="w-full text-purple-600 hover:text-purple-800"
            onClick={() => setActiveTab("forgot-password")}
          >
            ¿Olvidaste tu contraseña?
          </Button>
        </CardFooter>
      </Card>
      {activeTab === "forgot-password" && (
        <Card className="w-[350px] absolute bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-red-600">
              Recuperar Contraseña
            </CardTitle>
            <CardDescription className="text-pink-600">
              Ingresa tu correo para recuperar tu contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setActiveTab("login");
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="recovery-email" className="text-red-600">
                  Correo Electrónico
                </Label>
                <Input
                  id="recovery-email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  required
                  className="border-red-300 focus:border-red-500"
                />
              </div>
              <Button
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                type="submit"
              >
                Enviar Instrucciones
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              variant="link"
              className="w-full text-red-600 hover:text-red-800"
              onClick={() => setActiveTab("login")}
            >
              Volver al inicio de sesión
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

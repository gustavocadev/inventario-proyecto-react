import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Nav = ({ onToggleSidebar }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-primary">
          Restaurante Toromocho 🍉
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          Ayuda
        </Button>
        <Button variant="ghost" size="sm">
          Perfil
        </Button>
      </div>
    </nav>
  );
};

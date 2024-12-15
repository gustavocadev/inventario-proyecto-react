import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Link } from 'react-router';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
}

export const ModuleCard = ({
  title,
  description,
  icon: Icon,
  color,
  href,
}: ModuleCardProps) => {
  return (
    <Link
      to={'/dashboard' + href}
      className="transition-transform transform hover:scale-105"
    >
      <Card className="card-hover cursor-pointer">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

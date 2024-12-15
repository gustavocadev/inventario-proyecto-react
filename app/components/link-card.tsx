import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

type Props = {
  title: string;
  description: string;
  color: string;
  href: string;
};

export const LinkCard = ({ title, description, color, href }: Props) => {
  return (
    <Link
      to={href}
      className="no-underline transform hover:scale-105 transition-transform duration-200 hover:shadow-xl"
      aria-label="Ir a Gestión de Pedidos"
    >
      <Card className="bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className={color}>
          <CardTitle className="text-2xl text-red-600">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { cn } from '~/lib/utils';

type Props = {
  title: string;
  description: string;
  color: string;
  textColor: string;
  href: string;
};

export const LinkCard = ({
  title,
  description,
  color,
  href,
  textColor,
}: Props) => {
  return (
    <Link
      to={'/dashboard' + href}
      className="no-underline transform hover:scale-105 transition-transform duration-200 hover:shadow-xl"
      aria-label="Ir a Gestión de Pedidos"
    >
      <Card className="bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader className={color}>
          <CardTitle className={`text-2xl ${textColor}`}>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

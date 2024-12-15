import { Outlet } from 'react-router';
import { Nav } from '~/components/shared/nav';

export default function Dashboard() {
  return (
    <div>
      <Nav />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

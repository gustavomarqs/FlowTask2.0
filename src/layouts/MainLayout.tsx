import { Outlet } from 'react-router-dom';
import { AppSidebar } from '../components/AppSidebar';

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 bg-[var(--bg-dark)] p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--primary)]">Minhas Tarefas</h1>
        </header>
        <main className="space-y-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
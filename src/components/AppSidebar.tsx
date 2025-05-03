import { NavLink } from 'react-router-dom';
import { FiHome, FiAward, FiMessageCircle, FiSettings } from 'react-icons/fi';

export function AppSidebar() {
  const links = [
    { path: '/', label: 'Tarefas', icon: <FiHome /> },
    { path: '/facanhas', label: 'Façanhas', icon: <FiAward /> },
    { path: '/pensamentos', label: 'Pensamentos', icon: <FiMessageCircle /> },
    { path: '/configuracoes', label: 'Configurações', icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 bg-[var(--bg-card)] h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-8">FlowTask</h2>
        <nav className="space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 rounded-lg ${
                  isActive ? 'bg-[var(--primary)] text-[var(--bg-dark)]' : 'hover:bg-gray-700'
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
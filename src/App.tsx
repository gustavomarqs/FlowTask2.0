import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import TasksPage from './pages/TasksPage';
import AchievementsPage from './pages/AchievementsPage';
import ThoughtsPage from './pages/ThoughtsPage';
import ConfiguracoesPage from './pages/ConfiguracoesPage';
import NotFound from './pages/NotFound';
import { TaskCard } from "../components/cards/TaskCard";
import { AchievementCard } from "../components/cards/AchievementCard";
import { ThoughtCard } from "../components/cards/ThoughtCard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TasksPage />} />
        <Route path="facanhas" element={<AchievementsPage />} />
        <Route path="pensamentos" element={<ThoughtsPage />} />
        <Route path="configuracoes" element={<ConfiguracoesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

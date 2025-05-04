import React from 'react';
import { TaskCard } from "./components/cards/TaskCard";
import { AchievementCard } from "./components/cards/AchievementCard";
import { ThoughtCard } from "./components/cards/ThoughtCard";

const App: React.FC = () => {
  // Dados fictícios para teste
  const taskData = {
    id: "1",
    title: "Estudar React",
    description: "Revisar hooks e context API",
    date: "2025-05-03",
    status: "pendente",
    category: "Estudo",
  };

  const achievementData = {
    id: "1",
    title: "Concluir Projeto",
    description: "Finalizar o projeto FlowTask",
    date: "2025-05-01",
    category: "Trabalho",
  };

  const thoughtData = {
    id: "1",
    title: "Pensamento do Dia",
    description: "A prática leva à perfeição.",
    date: "2025-05-02",
  };

  return (
    <div className="p-4 space-y-4">
      <TaskCard
        task={taskData}
        onComplete={(id) => console.log(`Tarefa ${id} concluída`)}
        onEdit={(task) => console.log("Editar tarefa:", task)}
        onDelete={(id) => console.log(`Tarefa ${id} excluída`)}
      />
      <AchievementCard
        achievement={achievementData}
        onEdit={(achievement) => console.log("Editar conquista:", achievement)}
        onDelete={(id) => console.log(`Conquista ${id} excluída`)}
      />
      <ThoughtCard
        thought={thoughtData}
        onEdit={(thought) => console.log("Editar pensamento:", thought)}
        onDelete={(id) => console.log(`Pensamento ${id} excluído`)}
      />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-dark: #1e1e2f;
  --bg-card: #2a2a3f;
  --text-light: #ffffff;
  --text-muted: #a1a1aa;
  --primary: #00d9ff;
  --secondary: #00ffcc;
}

body {
  @apply bg-[var(--bg-dark)] text-[var(--text-light)] font-sans;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (task: string) => {
    setTasks(tasks.filter(t => t !== task));
  };

  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-gray-800 text-white p-4">
        <ul>
          <li className="mb-4 hover:text-gray-400 cursor-pointer">Tarefas</li>
          <li className="mb-4 hover:text-gray-400 cursor-pointer">Conquistas</li>
          <li className="mb-4 hover:text-gray-400 cursor-pointer">Pensamentos</li>
          <li className="hover:text-gray-400 cursor-pointer">Configurações</li>
        </ul>
      </nav>
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-6">Bem-vindo ao FlowTask!</h1>
        <div className="task-input-container">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Adicione uma nova tarefa..." 
          />
          <button onClick={handleAddTask}>Adicionar</button>
        </div>
        <div className="task-list">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className="task-item">
                <span>{task}</span>
                <button onClick={() => handleDeleteTask(task)}>Excluir</button>
              </div>
            ))
          ) : (
            <p>Nenhuma tarefa adicionada ainda!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

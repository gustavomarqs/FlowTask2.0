import { useState } from "react";
import { TaskForm } from "../components/tasks/TaskForm";

const TasksPage = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSave = (data: any) => {
    console.log("Dados salvos:", data);
    // Lógica para salvar ou editar a tarefa
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">Minhas Tarefas</h1>
        <button
          onClick={() => {
            setEditData(null);
            setIsTaskFormOpen(true);
          }}
          className="bg-[var(--primary)] text-[var(--bg-dark)] px-4 py-2 rounded-lg hover:bg-[var(--secondary)]"
        >
          + Nova Tarefa
        </button>
      </div>
      <TaskForm
        isOpen={isTaskFormOpen}
        onClose={() => setIsTaskFormOpen(false)}
        onSave={handleSave}
        editData={editData}
        type="task"
      />
    </div>
  );
};

export default TasksPage;
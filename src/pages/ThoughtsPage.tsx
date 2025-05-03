import { useState } from "react";
import { TaskForm } from "../components/tasks/TaskForm";

const ThoughtsPage = () => {
  const [isThoughtFormOpen, setIsThoughtFormOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSave = (data: any) => {
    console.log("Pensamento salvo:", data);
    // Lógica para salvar ou editar o pensamento
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">Meus Pensamentos</h1>
        <button
          onClick={() => {
            setEditData(null);
            setIsThoughtFormOpen(true);
          }}
          className="bg-[var(--primary)] text-[var(--bg-dark)] px-4 py-2 rounded-lg hover:bg-[var(--secondary)]"
        >
          + Novo Pensamento
        </button>
      </div>
      <TaskForm
        isOpen={isThoughtFormOpen}
        onClose={() => setIsThoughtFormOpen(false)}
        onSave={handleSave}
        editData={editData}
        type="thought"
      />
    </div>
  );
};

export default ThoughtsPage;
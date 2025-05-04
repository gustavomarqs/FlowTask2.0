import { useState } from "react";
import { TaskForm } from "../components/tasks/TaskForm";

type ItemData = {
  id?: string;
  title: string;
  description: string;
  date: string;
  createdAt?: string;
};

const AchievementsPage = () => {
  const [isAchievementFormOpen, setIsAchievementFormOpen] = useState(false);
  const [editData, setEditData] = useState<ItemData | undefined>(undefined);

  const handleSave = (data: any) => {
    console.log("Conquista salva:", data);
    // Lógica para salvar ou editar a conquista
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[var(--primary)]">Minhas Conquistas</h1>
        <button
          onClick={() => {
            setEditData(undefined); // Substitua null por undefined
            setIsAchievementFormOpen(true);
          }}
          className="bg-[var(--primary)] text-[var(--bg-dark)] px-4 py-2 rounded-lg hover:bg-[var(--secondary)]"
        >
          + Nova Conquista
        </button>
      </div>
      <TaskForm
        isOpen={isAchievementFormOpen}
        onClose={() => setIsAchievementFormOpen(false)}
        onSave={handleSave}
        editData={editData}
        type="achievement"
      />
    </div>
  );
};

export default AchievementsPage;
import { useState } from "react";
import { EntryForm } from "../components/forms/EntryForm";
import { useEntryContext } from "../context/EntryContext";

const TasksPage = () => {
  const { entries, addEntry, editEntry } = useEntryContext();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSave = (data: any) => {
    if (data.id) {
      editEntry({ ...data, type: "task" });
    } else {
      addEntry({ ...data, id: Date.now().toString(), type: "task" });
    }
    setIsFormOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsFormOpen(true)}>+ Nova Tarefa</button>
      {isFormOpen && (
        <EntryForm
          type="task"
          onSave={handleSave}
          onClose={() => setIsFormOpen(false)}
          editData={editData}
        />
      )}
      <div>
        {entries
          .filter((entry) => entry.type === "task")
          .map((entry) => (
            <div key={entry.id}>{entry.title}</div>
          ))}
      </div>
    </div>
  );
};

export default TasksPage;
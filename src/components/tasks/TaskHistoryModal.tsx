import { useState } from "react";

type TaskHistoryModalProps = {
  taskTitle: string;
  entries: { date: string; completed: boolean; details?: string }[];
  onClose: () => void;
};

export const TaskHistoryModal: React.FC<TaskHistoryModalProps> = ({ taskTitle, entries, onClose }) => {
  const [filter, setFilter] = useState<"all" | "completed" | "missed">("all");

  const filteredEntries = entries.filter((entry) => {
    if (filter === "all") return true;
    if (filter === "completed") return entry.completed;
    if (filter === "missed") return !entry.completed;
    return true;
  });

  const filterOptions = [
    { value: "all", label: "Todos" },
    { value: "completed", label: "Concluídos" },
    { value: "missed", label: "Não Concluídos" },
  ];

  return (
    <div className="p-6 bg-[var(--bg-card)] rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Histórico: {taskTitle}</h2>
      <div className="flex gap-4 mb-4">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value as "all" | "completed" | "missed")}
            className={`px-4 py-2 rounded ${
              filter === option.value
                ? "bg-[var(--primary)] text-[var(--bg-dark)]"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Data</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry, index) => (
            <tr key={index} className="border-t border-gray-600">
              <td className="py-2">{entry.date}</td>
              <td className={`py-2 ${entry.completed ? "text-green-500" : "text-red-500"}`}>
                {entry.completed ? "Concluído" : "Não Concluído"}
              </td>
              <td className="py-2">{entry.details || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400">
          Fechar
        </button>
      </div>
    </div>
  );
};
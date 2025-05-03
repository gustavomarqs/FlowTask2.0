import { useState, useEffect } from "react";

type TaskFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { id?: string; title: string; description: string; date: string; createdAt?: string }) => void;
  editData?: { id?: string; title: string; description: string; date: string; createdAt?: string };
  type: "task" | "thought" | "achievement"; // Define o tipo do item
};

export const TaskForm: React.FC<TaskFormProps> = ({ isOpen, onClose, onSave, editData, type }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<{ title?: string; description?: string; date?: string }>({});

  // Atualiza os campos ao abrir o modal para edição
  useEffect(() => {
    if (editData) {
      setTitle(editData.title || "");
      setDescription(editData.description || "");
      setDate(editData.date || "");
    } else {
      setTitle("");
      setDescription("");
      setDate("");
    }
  }, [editData, isOpen]);

  // Validação dos campos
  const validate = () => {
    const newErrors: { title?: string; description?: string; date?: string } = {};
    if (!title.trim()) newErrors.title = "O título é obrigatório.";
    if (!description.trim()) newErrors.description = "A descrição é obrigatória.";
    if (!date.trim()) newErrors.date = "A data é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submissão do formulário
  const handleSubmit = () => {
    if (!validate()) return;

    const data = {
      id: editData?.id,
      title,
      description,
      date,
      createdAt: editData?.createdAt || new Date().toISOString(),
    };

    onSave(data);
    onClose();
  };

  // Define o título do modal dinamicamente
  const modalTitle = editData
    ? `Editar ${type === "task" ? "Tarefa" : type === "thought" ? "Pensamento" : "Conquista"}`
    : `Nova ${type === "task" ? "Tarefa" : type === "thought" ? "Pensamento" : "Conquista"}`;

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[var(--bg-card)] p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">{modalTitle}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Título</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full p-2 rounded bg-gray-700 text-white ${
                  errors.title ? "border border-red-500" : ""
                }`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Descrição</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full p-2 rounded bg-gray-700 text-white ${
                  errors.description ? "border border-red-500" : ""
                }`}
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Data</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full p-2 rounded bg-gray-700 text-white ${
                  errors.date ? "border border-red-500" : ""
                }`}
              />
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[var(--primary)] text-[var(--bg-dark)] px-4 py-2 rounded hover:bg-[var(--secondary)] transition"
            >
              {editData ? "Salvar Alterações" : "Registrar"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};
import { useState, useEffect } from "react";

type EntryFormProps = {
  type: "task" | "achievement" | "thought";
  onSave: (data: { id?: string; title: string; description: string; date: string }) => void;
  onClose: () => void;
  editData?: { id?: string; title: string; description: string; date: string };
};

export const EntryForm: React.FC<EntryFormProps> = ({ type, onSave, onClose, editData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

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
  }, [editData]);

  const handleSubmit = () => {
    onSave({ id: editData?.id, title, description, date });
    onClose();
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        {editData ? `Editar ${type}` : `Novo ${type}`}
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Data</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancelar
        </button>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          {editData ? "Salvar Alterações" : "Registrar"}
        </button>
      </div>
    </div>
  );
};
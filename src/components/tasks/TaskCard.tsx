import { Clock, Check, Edit, Trash2, Timer } from "lucide-react";

type TaskCardProps = {
  title: string;
  description?: string;
  date: string;
  time: string;
  category: string;
  isCompleted: boolean;
  onComplete: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onStartFocus?: () => void;
};

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  date,
  time,
  category,
  isCompleted,
  onComplete,
  onEdit,
  onDelete,
  onStartFocus,
}) => {
  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        isCompleted ? "opacity-60 line-through border-gray-500" : "border-[var(--primary)]"
      } hover:shadow-lg transition`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-sm bg-[var(--secondary)] text-[var(--bg-dark)] px-2 py-1 rounded">
          {category}
        </span>
      </div>
      {description && <p className="text-sm text-gray-400 mb-2">{description}</p>}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Clock className="w-4 h-4 mr-1" />
        {date} às {time}
      </div>
      <div className="flex gap-2">
        <button
          onClick={onComplete}
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-400"
        >
          <Check className="w-4 h-4" />
        </button>
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        {onStartFocus && (
          <button
            onClick={onStartFocus}
            className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-400"
          >
            <Timer className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
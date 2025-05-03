import { TaskCard } from "./TaskCard";

type UnifiedTaskListProps = {
  regularTasks: { id: string; title: string; date: string; time: string; category: string; isCompleted: boolean }[];
  recurringTasks: { id: string; title: string; date: string; time: string; category: string; isCompleted: boolean }[];
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const UnifiedTaskList: React.FC<UnifiedTaskListProps> = ({
  regularTasks,
  recurringTasks,
  onComplete,
  onEdit,
  onDelete,
}) => {
  const allTasks = [...regularTasks, ...recurringTasks].sort((a, b) =>
    new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime()
  );

  if (allTasks.length === 0) {
    return <p className="text-center text-gray-400">Nenhuma tarefa para hoje!</p>;
  }

  return (
    <div className="space-y-4">
      {allTasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          date={task.date}
          time={task.time}
          category={task.category}
          isCompleted={task.isCompleted}
          onComplete={() => onComplete(task.id)}
          onEdit={() => onEdit(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
};
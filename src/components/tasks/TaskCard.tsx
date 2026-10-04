import type { Task } from "../../types/task";
import { formatDueDate, daysUntilDue } from "../../utils/taskUtils";
import { CalendarIcon, CheckCircleIcon, EditIcon, TrashIcon } from "../ui/Icons";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onToggleComplete: (task: Task) => void;
}

const priorityStyles = {
  high: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300",
  medium: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  low: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
};

const statusLabels = {
  todo: "To do",
  "in-progress": "In progress",
  completed: "Completed",
};

export default function TaskCard({ task, onEdit, onDelete, onToggleComplete }: TaskCardProps) {
  const dueIn = daysUntilDue(task.dueDate);
  const overdue = dueIn < 0 && task.status !== "completed";

  return (
    <article className={`group rounded-2xl border bg-white p-5 transition hover:border-slate-300 dark:bg-slate-900 dark:hover:border-slate-700 ${task.status === "completed" ? "border-slate-200 opacity-80 dark:border-slate-800" : "border-slate-200 dark:border-slate-800"}`}>
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggleComplete(task)}
          className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition ${
            task.status === "completed"
              ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-950"
              : "border-slate-200 text-slate-300 hover:border-slate-400 hover:text-slate-600 dark:border-slate-700 dark:text-slate-600 dark:hover:border-slate-500 dark:hover:text-slate-300"
          }`}
          aria-label={task.status === "completed" ? "Mark task as incomplete" : "Mark task as complete"}
        >
          <CheckCircleIcon size={17} />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                  {task.category}
                </span>
                <span className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${priorityStyles[task.priority]}`}>
                  {task.priority}
                </span>
              </div>
              <h3 className={`mt-3 text-base font-extrabold leading-snug text-slate-950 dark:text-white ${task.status === "completed" ? "line-through decoration-slate-300 dark:decoration-slate-600" : ""}`}>
                {task.title}
              </h3>
            </div>

            <div className="flex items-center gap-1 opacity-70 transition group-hover:opacity-100">
              <button
                onClick={() => onEdit(task)}
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label={`Edit ${task.title}`}
              >
                <EditIcon size={16} />
              </button>
              <button
                onClick={() => onDelete(task)}
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-300"
                aria-label={`Delete ${task.title}`}
              >
                <TrashIcon size={16} />
              </button>
            </div>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{task.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 text-xs font-semibold dark:border-slate-800">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
              {statusLabels[task.status]}
            </span>
            <span className={`ml-auto flex items-center gap-1.5 ${overdue ? "text-rose-500" : "text-slate-400"}`}>
              <CalendarIcon size={14} />
              {formatDueDate(task.dueDate)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

import { useEffect } from "react";
import type { Task, TaskDraft } from "../../types/task";
import { XIcon } from "../ui/Icons";
import TaskForm from "./TaskForm";

interface TaskModalProps {
  open: boolean;
  task?: Task | null;
  onClose: () => void;
  onSubmit: (draft: TaskDraft) => void;
}

export default function TaskModal({ open, task, onClose, onSubmit }: TaskModalProps) {
  useEffect(() => {
    if (!open) return;
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-slate-950/45 p-4" role="dialog" aria-modal="true" aria-labelledby="task-modal-title">
      <button className="absolute inset-0" onClick={onClose} aria-label="Close task dialog" />
      <div className="relative my-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{task ? "Update task" : "New task"}</p>
            <h2 id="task-modal-title" className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              {task ? "Edit task details" : "Create a new task"}
            </h2>
            <p className="mt-1 text-sm text-slate-400">Keep the task clear, actionable, and easy to track.</p>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" aria-label="Close modal">
            <XIcon size={17} />
          </button>
        </div>
        <TaskForm task={task} onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
}

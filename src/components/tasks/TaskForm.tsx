import { useEffect, useState, type FormEvent } from "react";
import type { Task, TaskCategory, TaskDraft, TaskPriority, TaskStatus } from "../../types/task";

interface TaskFormProps {
  task?: Task | null;
  onSubmit: (draft: TaskDraft) => void;
  onCancel: () => void;
}

const emptyDraft: TaskDraft = {
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
  category: "Development",
  dueDate: "",
};

export default function TaskForm({ task, onSubmit, onCancel }: TaskFormProps) {
  const [form, setForm] = useState<TaskDraft>(emptyDraft);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(task ? {
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      category: task.category,
      dueDate: task.dueDate,
    } : emptyDraft);
    setError("");
  }, [task]);

  function updateField<K extends keyof TaskDraft>(field: K, value: TaskDraft[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.title.trim()) {
      setError("Please add a task title.");
      return;
    }
    if (!form.dueDate) {
      setError("Please choose a due date.");
      return;
    }

    onSubmit({
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
    });
  }

  const inputClass = "mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200/70 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-600 dark:focus:ring-slate-800";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="task-title" className="text-sm font-bold text-slate-700 dark:text-slate-200">Task title</label>
        <input
          id="task-title"
          autoFocus
          value={form.title}
          onChange={(event) => updateField("title", event.target.value)}
          placeholder="e.g. Build responsive navbar"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="task-description" className="text-sm font-bold text-slate-700 dark:text-slate-200">Description</label>
        <textarea
          id="task-description"
          rows={4}
          value={form.description}
          onChange={(event) => updateField("description", event.target.value)}
          placeholder="Add a short description of the task..."
          className={`${inputClass} h-auto resize-none py-3 leading-6`}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FieldSelect label="Status" value={form.status} onChange={(value) => updateField("status", value as TaskStatus)} options={[["todo", "To do"], ["in-progress", "In progress"], ["completed", "Completed"]]} />
        <FieldSelect label="Priority" value={form.priority} onChange={(value) => updateField("priority", value as TaskPriority)} options={[["low", "Low"], ["medium", "Medium"], ["high", "High"]]} />
        <FieldSelect label="Category" value={form.category} onChange={(value) => updateField("category", value as TaskCategory)} options={[["Design", "Design"], ["Development", "Development"], ["Research", "Research"], ["Personal", "Personal"]]} />
        <div>
          <label htmlFor="task-date" className="text-sm font-bold text-slate-700 dark:text-slate-200">Due date</label>
          <input id="task-date" type="date" value={form.dueDate} onChange={(event) => updateField("dueDate", event.target.value)} className={inputClass} />
        </div>
      </div>

      {error && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">{error}</p>}

      <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end dark:border-slate-800">
        <button type="button" onClick={onCancel} className="rounded-xl px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">Cancel</button>
        <button type="submit" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
          {task ? "Save changes" : "Create task"}
        </button>
      </div>
    </form>
  );
}

function FieldSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: [string, string][] }) {
  const id = `task-${label.toLowerCase()}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-slate-700 dark:text-slate-200">{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200/70 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-600 dark:focus:ring-slate-800">
        {options.map(([optionValue, optionLabel]) => <option key={optionValue} value={optionValue}>{optionLabel}</option>)}
      </select>
    </div>
  );
}

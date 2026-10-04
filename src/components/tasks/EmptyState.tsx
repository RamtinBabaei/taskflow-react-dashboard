import { InboxIcon, PlusIcon } from "../ui/Icons";

interface EmptyStateProps {
  onAddTask: () => void;
}

export default function EmptyState({ onAddTask }: EmptyStateProps) {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center dark:border-slate-700 dark:bg-slate-900">
      <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300"><InboxIcon size={23} /></span>
      <h3 className="mt-4 text-lg font-extrabold text-slate-900 dark:text-white">No tasks found</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">Try changing your filters or create a new task to get your workspace moving.</p>
      <button onClick={onAddTask} className="mx-auto mt-5 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"><PlusIcon size={16} />Add task</button>
    </div>
  );
}

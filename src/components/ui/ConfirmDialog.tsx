import { TrashIcon, XIcon } from "./Icons";

interface ConfirmDialogProps {
  open: boolean;
  taskTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog({ open, taskTitle, onCancel, onConfirm }: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/45 p-4" role="alertdialog" aria-modal="true">
      <button className="absolute inset-0" aria-label="Cancel delete" onClick={onCancel} />
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300"><TrashIcon size={20} /></span>
          <button onClick={onCancel} className="grid h-9 w-9 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Close"><XIcon size={16} /></button>
        </div>
        <h2 className="mt-5 text-xl font-extrabold text-slate-950 dark:text-white">Delete this task?</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">“{taskTitle}” will be permanently removed from your workspace.</p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onCancel} className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-500 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">Cancel</button>
          <button onClick={onConfirm} className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700">Delete task</button>
        </div>
      </div>
    </div>
  );
}

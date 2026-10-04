import { CheckCircleIcon } from "./Icons";

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;
  return (
    <div className="fixed bottom-5 right-5 z-[90] flex max-w-sm items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"><CheckCircleIcon size={17} /></span>
      {message}
    </div>
  );
}

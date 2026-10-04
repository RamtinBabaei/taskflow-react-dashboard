interface ProgressCardProps {
  completed: number;
  total: number;
  todo: number;
  inProgress: number;
}

export default function ProgressCard({ completed, total, todo, inProgress }: ProgressCardProps) {
  const percentage = total ? Math.round((completed / total) * 100) : 0;
  const circumference = 2 * Math.PI * 44;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-950 dark:text-white">Progress overview</p>
          <p className="mt-1 text-xs text-slate-400">A simple snapshot of your current workload.</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{percentage}% done</span>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <div className="relative h-28 w-28 shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-label={`${percentage}% completed`}>
            <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="text-slate-900 transition-all duration-700 dark:text-slate-200"
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <p className="text-2xl font-extrabold text-slate-950 dark:text-white">{percentage}%</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">complete</p>
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          <ProgressRow label="Completed" value={completed} dot="bg-slate-900 dark:bg-slate-200" />
          <ProgressRow label="In progress" value={inProgress} dot="bg-slate-500" />
          <ProgressRow label="To do" value={todo} dot="bg-slate-300 dark:bg-slate-700" />
        </div>
      </div>
    </article>
  );
}

function ProgressRow({ label, value, dot }: { label: string; value: number; dot: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      <span className="text-slate-500 dark:text-slate-400">{label}</span>
      <span className="ml-auto font-extrabold text-slate-800 dark:text-slate-100">{value}</span>
    </div>
  );
}

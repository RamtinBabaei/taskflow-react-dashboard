import type { Task } from "../../types/task";
import { daysUntilDue, formatDueDate } from "../../utils/taskUtils";
import { CalendarIcon } from "../ui/Icons";

interface UpcomingTasksProps {
  tasks: Task[];
}

export default function UpcomingTasks({ tasks }: UpcomingTasksProps) {
  const upcoming = [...tasks]
    .filter((task) => task.status !== "completed")
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 3);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div>
        <p className="text-sm font-bold text-slate-950 dark:text-white">Upcoming deadlines</p>
        <p className="mt-1 text-xs text-slate-400">The next tasks that need your attention.</p>
      </div>

      <div className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
        {upcoming.map((task) => {
          const days = daysUntilDue(task.dueDate);
          return (
            <div key={task.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                <CalendarIcon size={17} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-800 dark:text-slate-100">{task.title}</p>
                <p className="mt-0.5 text-xs text-slate-400">{formatDueDate(task.dueDate)}</p>
              </div>
              <span className={`text-xs font-semibold ${days < 0 ? "text-rose-500" : days <= 2 ? "text-amber-600 dark:text-amber-400" : "text-slate-400"}`}>
                {days < 0 ? `${Math.abs(days)}d late` : days === 0 ? "Today" : `${days}d`}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

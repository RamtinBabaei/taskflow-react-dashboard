import type { AppView, Task, TaskPriority, TaskSort, TaskStatus } from "../types/task";
import StatCard from "../components/dashboard/StatCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import UpcomingTasks from "../components/dashboard/UpcomingTasks";
import TaskCard from "../components/tasks/TaskCard";
import FilterBar from "../components/tasks/FilterBar";
import EmptyState from "../components/tasks/EmptyState";
import { ArrowUpRightIcon, CheckCircleIcon, ClockIcon, PlusIcon, TasksIcon } from "../components/ui/Icons";

interface DashboardProps {
  view: AppView;
  allTasks: Task[];
  visibleTasks: Task[];
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  todoTasks: number;
  statusFilter: TaskStatus | "all";
  priorityFilter: TaskPriority | "all";
  sortBy: TaskSort;
  onStatusChange: (value: TaskStatus | "all") => void;
  onPriorityChange: (value: TaskPriority | "all") => void;
  onSortChange: (value: TaskSort) => void;
  onClearFilters: () => void;
  onAddTask: () => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
  onToggleComplete: (task: Task) => void;
}

const viewCopy = {
  dashboard: { eyebrow: "Workspace overview", title: "Focus on what matters today.", description: "Review your workload, deadlines, and progress in one calm workspace." },
  all: { eyebrow: "Task library", title: "All your work, one place.", description: "Search, filter, and organize everything on your list." },
  completed: { eyebrow: "Completed work", title: "A clear record of your progress.", description: "Review the tasks you have finished and keep your momentum visible." },
};

export default function Dashboard({
  view,
  allTasks,
  visibleTasks,
  totalTasks,
  completedTasks,
  inProgressTasks,
  todoTasks,
  statusFilter,
  priorityFilter,
  sortBy,
  onStatusChange,
  onPriorityChange,
  onSortChange,
  onClearFilters,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onToggleComplete,
}: DashboardProps) {
  const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const copy = viewCopy[view];
  const hasFilters = statusFilter !== "all" || priorityFilter !== "all" || sortBy !== "newest";

  return (
    <main className="px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div className="mx-auto max-w-[1500px]">
        <section className="rounded-2xl border border-slate-200 bg-white px-6 py-7 dark:border-slate-800 dark:bg-slate-900 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{copy.eyebrow}</p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{copy.title}</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">{copy.description}</p>
            </div>
            <button onClick={onAddTask} className="flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"><PlusIcon size={17} />New task</button>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Total tasks" value={totalTasks} helper="Across your workspace" tone="violet" icon={<TasksIcon size={19} />} />
          <StatCard label="In progress" value={inProgressTasks} helper="Currently being worked on" tone="blue" icon={<ClockIcon size={19} />} />
          <StatCard label="Completed" value={completedTasks} helper="Finished tasks" tone="emerald" icon={<CheckCircleIcon size={19} />} />
          <StatCard label="Completion rate" value={`${completionRate}%`} helper="Based on all tasks" tone="amber" icon={<ArrowUpRightIcon size={19} />} />
        </section>

        {view === "dashboard" && (
          <section className="mt-6 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <ProgressCard completed={completedTasks} total={totalTasks} todo={todoTasks} inProgress={inProgressTasks} />
            <UpcomingTasks tasks={allTasks} />
          </section>
        )}

        <section className="mt-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Task workspace</p>
              <div className="mt-1 flex items-baseline gap-3">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">{view === "completed" ? "Completed tasks" : "Your tasks"}</h2>
                <span className="text-sm font-semibold text-slate-400">{visibleTasks.length} shown</span>
              </div>
            </div>
            <FilterBar status={statusFilter} priority={priorityFilter} sortBy={sortBy} onStatusChange={onStatusChange} onPriorityChange={onPriorityChange} onSortChange={onSortChange} onClear={onClearFilters} hasFilters={hasFilters} />
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-2">
            {visibleTasks.length ? visibleTasks.map((task) => (
              <TaskCard key={task.id} task={task} onEdit={onEditTask} onDelete={onDeleteTask} onToggleComplete={onToggleComplete} />
            )) : <EmptyState onAddTask={onAddTask} />}
          </div>
        </section>
      </div>
    </main>
  );
}

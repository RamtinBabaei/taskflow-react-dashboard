import type { AppView } from "../../types/task";
import { CheckCircleIcon, DashboardIcon, TasksIcon, XIcon } from "../ui/Icons";

interface SidebarProps {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
  completedCount: number;
  totalCount: number;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const navItems = [
  { id: "dashboard" as const, label: "Dashboard", icon: DashboardIcon },
  { id: "all" as const, label: "All tasks", icon: TasksIcon },
  { id: "completed" as const, label: "Completed", icon: CheckCircleIcon },
];

export default function Sidebar({
  activeView,
  onViewChange,
  completedCount,
  totalCount,
  isMobileOpen,
  onMobileClose,
}: SidebarProps) {
  const completionRate = totalCount
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  return (
    <>
      {isMobileOpen && (
        <button
          aria-label='Close navigation'
          className='fixed inset-0 z-40 bg-slate-950/35 lg:hidden'
          onClick={onMobileClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white px-4 py-5 transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex items-center justify-between px-2'>
          <button
            className='flex items-center gap-3 rounded-xl text-left'
            onClick={() => onViewChange("dashboard")}
          >
            <span className='grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950'>
              <CheckCircleIcon size={21} />
            </span>
            <span>
              <span className='block text-lg font-extrabold tracking-tight text-slate-950 dark:text-white'>
                TaskFlow
              </span>
              <span className='block text-xs font-medium text-slate-400'>
                Personal workspace
              </span>
            </span>
          </button>

          <button
            className='grid h-9 w-9 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 lg:hidden dark:hover:bg-slate-900'
            onClick={onMobileClose}
            aria-label='Close sidebar'
          >
            <XIcon size={18} />
          </button>
        </div>

        <nav className='mt-9 space-y-1' aria-label='Main navigation'>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            const count =
              item.id === "completed"
                ? completedCount
                : item.id === "all"
                  ? totalCount
                  : null;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onViewChange(item.id);
                  onMobileClose();
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-white"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/70 dark:hover:text-white"
                }`}
              >
                <span
                  className={`grid h-8 w-8 place-items-center rounded-lg ${isActive ? "bg-white text-slate-950 shadow-sm dark:bg-slate-800 dark:text-white" : "text-slate-400"}`}
                >
                  <Icon size={18} />
                </span>
                <span>{item.label}</span>
                {count !== null && (
                  <span className='ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300'>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className='mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-slate-400'>
                Progress
              </p>
              <p className='mt-1 text-2xl font-extrabold text-slate-950 dark:text-white'>
                {completionRate}%
              </p>
            </div>
            <span className='grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'>
              <CheckCircleIcon size={18} />
            </span>
          </div>
          <div className='mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800'>
            <div
              className='h-full rounded-full bg-slate-900 transition-all duration-500 dark:bg-slate-200'
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <p className='mt-2 text-xs text-slate-400'>
            {completedCount} of {totalCount} tasks completed
          </p>
        </div>

        <div className='mt-4 flex items-center gap-3 px-2 py-2'>
          <div className='grid h-9 w-9 place-items-center rounded-full bg-slate-200 text-xs font-extrabold text-slate-700 dark:bg-slate-800 dark:text-slate-200'>
            MA
          </div>
          <div className='min-w-0'>
            <p className='truncate text-sm font-bold text-slate-800 dark:text-slate-100'>
              {" "}
              Ramtin Babaei
            </p>
            <p className='truncate text-xs text-slate-400'>
              Frontend developer
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

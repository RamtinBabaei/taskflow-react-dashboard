import type { TaskPriority, TaskSort, TaskStatus } from "../../types/task";
import { ChevronDownIcon } from "../ui/Icons";

interface FilterBarProps {
  status: TaskStatus | "all";
  priority: TaskPriority | "all";
  sortBy: TaskSort;
  onStatusChange: (value: TaskStatus | "all") => void;
  onPriorityChange: (value: TaskPriority | "all") => void;
  onSortChange: (value: TaskSort) => void;
  onClear: () => void;
  hasFilters: boolean;
}

export default function FilterBar({
  status,
  priority,
  sortBy,
  onStatusChange,
  onPriorityChange,
  onSortChange,
  onClear,
  hasFilters,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select
        ariaLabel="Filter by status"
        value={status}
        onChange={(value) => onStatusChange(value as TaskStatus | "all")}
        options={[
          ["all", "All statuses"],
          ["todo", "To do"],
          ["in-progress", "In progress"],
          ["completed", "Completed"],
        ]}
      />
      <Select
        ariaLabel="Filter by priority"
        value={priority}
        onChange={(value) => onPriorityChange(value as TaskPriority | "all")}
        options={[
          ["all", "All priorities"],
          ["high", "High priority"],
          ["medium", "Medium priority"],
          ["low", "Low priority"],
        ]}
      />
      <Select
        ariaLabel="Sort tasks"
        value={sortBy}
        onChange={(value) => onSortChange(value as TaskSort)}
        options={[
          ["newest", "Newest first"],
          ["due-date", "Due date"],
          ["priority", "Priority"],
        ]}
      />

      {hasFilters && (
        <button
          onClick={onClear}
          className="rounded-lg px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

function Select({ ariaLabel, value, onChange, options }: { ariaLabel: string; value: string; onChange: (value: string) => void; options: [string, string][] }) {
  return (
    <label className="relative">
      <span className="sr-only">{ariaLabel}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-9 text-xs font-bold text-slate-600 outline-none transition hover:border-slate-300 focus:border-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:focus:border-slate-600"
        aria-label={ariaLabel}
      >
        {options.map(([optionValue, label]) => <option key={optionValue} value={optionValue}>{label}</option>)}
      </select>
      <ChevronDownIcon size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
    </label>
  );
}

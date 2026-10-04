import type { Task, TaskPriority } from "../types/task";

const priorityRank: Record<TaskPriority, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export function sortTasks(tasks: Task[], sortBy: "newest" | "due-date" | "priority") {
  return [...tasks].sort((a, b) => {
    if (sortBy === "due-date") {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }

    if (sortBy === "priority") {
      return priorityRank[b.priority] - priorityRank[a.priority];
    }

    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function formatDueDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export function daysUntilDue(date: string) {
  const target = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - today.getTime()) / 86_400_000);
}

export type TaskStatus = "todo" | "in-progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";
export type TaskCategory = "Design" | "Development" | "Research" | "Personal";
export type AppView = "dashboard" | "all" | "completed";
export type TaskSort = "newest" | "due-date" | "priority";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  dueDate: string;
  createdAt: string;
}

export interface TaskDraft {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  dueDate: string;
}

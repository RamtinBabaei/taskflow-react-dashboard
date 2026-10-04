import { useMemo, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import TaskModal from "./components/tasks/TaskModal";
import ConfirmDialog from "./components/ui/ConfirmDialog";
import Toast from "./components/ui/Toast";
import Dashboard from "./pages/Dashboard";
import { initialTasks } from "./data/tasks";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTheme } from "./hooks/useTheme";
import { sortTasks } from "./utils/taskUtils";
import type { AppView, Task, TaskDraft, TaskPriority, TaskSort, TaskStatus } from "./types/task";

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("taskflow-portfolio-tasks-v1", initialTasks);
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState<AppView>("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | "all">("all");
  const [sortBy, setSortBy] = useState<TaskSort>("newest");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteTask, setDeleteTask] = useState<Task | null>(null);
  const [toastMessage, setToastMessage] = useState("");

  const completedTasks = tasks.filter((task) => task.status === "completed").length;
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress").length;
  const todoTasks = tasks.filter((task) => task.status === "todo").length;

  const visibleTasks = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const viewTasks = view === "completed" ? tasks.filter((task) => task.status === "completed") : tasks;

    const filtered = viewTasks.filter((task) => {
      const matchesSearch = !normalizedQuery || [task.title, task.description, task.category].some((value) => value.toLowerCase().includes(normalizedQuery));
      const matchesStatus = statusFilter === "all" || task.status === statusFilter;
      const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    });

    return sortTasks(filtered, sortBy);
  }, [tasks, view, searchQuery, statusFilter, priorityFilter, sortBy]);

  function showToast(message: string) {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(""), 2600);
  }

  function openCreateModal() {
    setEditingTask(null);
    setIsTaskModalOpen(true);
  }

  function openEditModal(task: Task) {
    setEditingTask(task);
    setIsTaskModalOpen(true);
  }

  function closeTaskModal() {
    setIsTaskModalOpen(false);
    setEditingTask(null);
  }

  function handleTaskSubmit(draft: TaskDraft) {
    if (editingTask) {
      setTasks((current) => current.map((task) => task.id === editingTask.id ? { ...task, ...draft } : task));
      showToast("Task updated successfully");
    } else {
      const newTask: Task = {
        ...draft,
        id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : String(Date.now()),
        createdAt: new Date().toISOString(),
      };
      setTasks((current) => [newTask, ...current]);
      showToast("New task created");
    }
    closeTaskModal();
  }

  function confirmDeleteTask() {
    if (!deleteTask) return;
    setTasks((current) => current.filter((task) => task.id !== deleteTask.id));
    setDeleteTask(null);
    showToast("Task deleted");
  }

  function toggleTaskComplete(task: Task) {
    setTasks((current) => current.map((item) => item.id === task.id ? { ...item, status: item.status === "completed" ? "todo" : "completed" } : item));
    showToast(task.status === "completed" ? "Task moved back to todo" : "Task completed — nice work!");
  }

  function clearFilters() {
    setStatusFilter("all");
    setPriorityFilter("all");
    setSortBy("newest");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-white">
      <Sidebar
        activeView={view}
        onViewChange={setView}
        completedCount={completedTasks}
        totalCount={tasks.length}
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />

      <div className="min-h-screen lg:pl-72">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          theme={theme}
          onThemeToggle={toggleTheme}
          onMenuOpen={() => setIsMobileSidebarOpen(true)}
        />

        <Dashboard
          view={view}
          allTasks={tasks}
          visibleTasks={visibleTasks}
          totalTasks={tasks.length}
          completedTasks={completedTasks}
          inProgressTasks={inProgressTasks}
          todoTasks={todoTasks}
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          sortBy={sortBy}
          onStatusChange={setStatusFilter}
          onPriorityChange={setPriorityFilter}
          onSortChange={setSortBy}
          onClearFilters={clearFilters}
          onAddTask={openCreateModal}
          onEditTask={openEditModal}
          onDeleteTask={setDeleteTask}
          onToggleComplete={toggleTaskComplete}
        />
      </div>

      <TaskModal open={isTaskModalOpen} task={editingTask} onClose={closeTaskModal} onSubmit={handleTaskSubmit} />
      <ConfirmDialog open={Boolean(deleteTask)} taskTitle={deleteTask?.title ?? ""} onCancel={() => setDeleteTask(null)} onConfirm={confirmDeleteTask} />
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;

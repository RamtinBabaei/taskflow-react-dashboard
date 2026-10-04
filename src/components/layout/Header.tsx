import type { Theme } from "../../hooks/useTheme";
import { MenuIcon, MoonIcon, SearchIcon, SunIcon } from "../ui/Icons";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  theme: Theme;
  onThemeToggle: () => void;
  onMenuOpen: () => void;
}

export default function Header({
  searchQuery,
  onSearchChange,
  theme,
  onThemeToggle,
  onMenuOpen,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1500px] items-center gap-3">
        <button
          onClick={onMenuOpen}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 lg:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          aria-label="Open navigation"
        >
          <MenuIcon />
        </button>

        <div className="relative min-w-0 flex-1 sm:max-w-xl">
          <SearchIcon size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search tasks or categories"
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-slate-600 dark:focus:ring-slate-800"
          />
        </div>

        <button
          onClick={onThemeToggle}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </button>
      </div>
    </header>
  );
}

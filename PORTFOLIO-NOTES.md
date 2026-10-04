# How to talk about TaskFlow in an interview

## 30-second explanation

TaskFlow is a minimal, responsive task-management dashboard I built with React, TypeScript, Tailwind CSS, and Vite. I focused on reusable components, typed data models, CRUD workflows, filtering and search, dark mode, and persistent localStorage state. I also built the UI without a component library so I could practice layout, responsive behavior, accessibility, and component architecture directly.

## Good interview talking points

1. **State design** — tasks live in App state through a reusable `useLocalStorage` hook, while filters and UI state are separate.
2. **Derived data** — task counts and filtered results are derived instead of duplicated in state.
3. **TypeScript** — task status, priority, category, and view values use union types to prevent invalid values.
4. **Reusable UI** — TaskCard, StatCard, TaskForm, Sidebar, modal, and filter controls are separated by responsibility.
5. **Accessibility** — semantic buttons/labels, visible focus states, modal Escape handling, aria labels, and keyboard-friendly controls.
6. **Responsive design** — desktop fixed sidebar becomes an off-canvas navigation on smaller screens.
7. **Persistence** — user changes survive refreshes through localStorage.

## What I would add with more time

- API and database persistence
- Authentication
- Unit and component tests
- Drag-and-drop task columns
- Optimistic server updates

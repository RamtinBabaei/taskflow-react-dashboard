# TaskFlow — Minimal React Task Dashboard

A polished task-management dashboard built as a frontend portfolio project with **React, TypeScript, Tailwind CSS, Vite, responsive UI patterns, local persistence, and reusable components**.

## Highlights

- Create, edit, delete, and complete tasks
- Search across title, description, and category
- Filter by status and priority
- Sort by newest, due date, or priority
- Dynamic dashboard statistics and completion progress
- Upcoming-deadline overview
- Light / dark theme with saved preference
- Tasks persisted in `localStorage`
- Responsive mobile sidebar and desktop dashboard layout
- Accessible labels, buttons, focus states, modal escape handling, and semantic HTML
- Reusable TypeScript components and custom hooks
- No icon dependency: icons are reusable inline SVG React components

## Tech stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- LocalStorage
- Git / GitHub ready

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── dashboard/    # statistics, progress, upcoming deadlines
│   ├── layout/       # sidebar and top header
│   ├── tasks/        # task cards, filters, form, modal
│   └── ui/           # SVG icons, toast, confirmation dialog
├── data/             # starter tasks
├── hooks/            # localStorage and theme hooks
├── pages/            # dashboard composition
├── types/            # TypeScript domain types
├── utils/            # task sorting / date helpers
├── App.tsx
├── index.css
└── main.tsx
```

## Frontend concepts demonstrated

- Component composition and separation of concerns
- Typed props and union types
- Controlled forms
- CRUD state updates
- Derived state with `useMemo`
- Custom hooks
- Conditional rendering
- Array methods (`map`, `filter`, `sort`)
- Responsive design
- Dark mode
- Persistent browser storage
- Accessible modal and form interactions

## Suggested GitHub description

> A minimal responsive task-management dashboard built with React, TypeScript, Tailwind CSS, localStorage, CRUD workflows, filtering, search, dark mode, and reusable components.

## Suggested resume bullet

> Built a responsive task-management dashboard with React, TypeScript, and Tailwind CSS, implementing CRUD operations, search/filtering, persistent localStorage state, dark mode, responsive navigation, and reusable typed components.

## Future improvements

- Drag-and-drop Kanban board
- Backend API + authentication
- Tests with Vitest / React Testing Library
- Keyboard shortcuts
- Cloud sync

## License

MIT — feel free to use this project as a personal portfolio project and continue extending it.

## Deploy to GitHub Pages

A ready-to-use GitHub Actions workflow is included at `.github/workflows/deploy.yml`.
After pushing the repository, choose **Settings → Pages → GitHub Actions**. Every push to `main` or `master` can then build and deploy the project automatically.

For Persian step-by-step instructions, see `GITHUB-PUBLISH-FA.md`.

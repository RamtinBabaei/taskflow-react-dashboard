import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  helper: string;
  icon: ReactNode;
  tone: "violet" | "blue" | "emerald" | "amber";
}

export default function StatCard({ label, value, helper, icon }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">{value}</p>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{icon}</span>
      </div>
      <p className="mt-4 text-xs font-medium text-slate-400">{helper}</p>
    </article>
  );
}

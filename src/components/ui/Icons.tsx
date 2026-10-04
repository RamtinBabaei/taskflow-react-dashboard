import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function IconBase({ size = 20, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function DashboardIcon(props: IconProps) {
  return <IconBase {...props}><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></IconBase>;
}
export function TasksIcon(props: IconProps) {
  return <IconBase {...props}><path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/></IconBase>;
}
export function CheckCircleIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></IconBase>;
}
export function PlusIcon(props: IconProps) {
  return <IconBase {...props}><path d="M12 5v14M5 12h14"/></IconBase>;
}
export function SearchIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></IconBase>;
}
export function SunIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></IconBase>;
}
export function MoonIcon(props: IconProps) {
  return <IconBase {...props}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></IconBase>;
}
export function MenuIcon(props: IconProps) {
  return <IconBase {...props}><path d="M4 7h16M4 12h16M4 17h16"/></IconBase>;
}
export function XIcon(props: IconProps) {
  return <IconBase {...props}><path d="m6 6 12 12M18 6 6 18"/></IconBase>;
}
export function CalendarIcon(props: IconProps) {
  return <IconBase {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></IconBase>;
}
export function EditIcon(props: IconProps) {
  return <IconBase {...props}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z"/></IconBase>;
}
export function TrashIcon(props: IconProps) {
  return <IconBase {...props}><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v6M14 11v6"/></IconBase>;
}
export function ChevronDownIcon(props: IconProps) {
  return <IconBase {...props}><path d="m6 9 6 6 6-6"/></IconBase>;
}
export function ArrowUpRightIcon(props: IconProps) {
  return <IconBase {...props}><path d="M7 17 17 7M7 7h10v10"/></IconBase>;
}
export function ClockIcon(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></IconBase>;
}
export function SparklesIcon(props: IconProps) {
  return <IconBase {...props}><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2ZM19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7ZM5 14l.7 1.8L7.5 16l-1.8.7L5 18.5l-.7-1.8L2.5 16l1.8-.7Z"/></IconBase>;
}
export function InboxIcon(props: IconProps) {
  return <IconBase {...props}><path d="M4 4h16l2 9v7H2v-7Z"/><path d="M2 13h6l2 3h4l2-3h6"/></IconBase>;
}
export function RotateIcon(props: IconProps) {
  return <IconBase {...props}><path d="M20 7v5h-5"/><path d="M4.9 19a9 9 0 1 0-.9-9"/></IconBase>;
}

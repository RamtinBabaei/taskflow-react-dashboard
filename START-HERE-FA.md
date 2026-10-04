# راهنمای شروع TaskFlow

این نسخه برای Portfolio و GitHub آماده شده است.

## 1) باز کردن پروژه

فولدر `TaskFlow-Minimal-Portfolio` را با VS Code باز کن. دقت کن Terminal باید دقیقاً در همان فولدری باشد که `package.json` قرار دارد.

## 2) نصب پکیج‌ها

```powershell
npm install
```

## 3) اجرای پروژه

```powershell
npm run dev
```

آدرسی که Vite نشان می‌دهد (معمولاً `http://localhost:5173`) را در مرورگر باز کن.

## 4) تست build نهایی

```powershell
npm run build
```

اگر build بدون error تمام شد، پروژه برای Deploy آماده است.

## امکانات نسخه نهایی

- Add Task
- Edit Task
- Delete Task با confirmation
- Complete / Reopen Task
- Search
- Filter بر اساس status و priority
- Sort بر اساس newest / due date / priority
- آمار داینامیک
- Progress chart
- Upcoming deadlines
- Dark Mode
- Responsive sidebar برای موبایل
- LocalStorage (اطلاعات بعد از Refresh باقی می‌ماند)
- UI مدرن و reusable components
- TypeScript types
- GitHub Pages workflow

## نکته درباره اطلاعات اولیه

Taskهای داخل `src/data/tasks.ts` فقط داده‌های اولیه هستند. بعد از اولین اجرا، تغییرات کاربر داخل LocalStorage مرورگر ذخیره می‌شوند.

اگر خواستی دوباره Taskهای اولیه را ببینی، Local Storage مربوط به `taskflow-portfolio-tasks-v1` را در DevTools پاک کن.

## نسخه Minimal UI
در این نسخه پالت رنگی عمداً محدود شده است: Slate / White / Charcoal رنگ‌های اصلی هستند و رنگ‌های قرمز و زرد فقط برای وضعیت‌های مهم مثل حذف، overdue و deadline نزدیک استفاده می‌شوند. Gradientها و Glowهای نسخه قبلی حذف شده‌اند تا UI آرام‌تر و حرفه‌ای‌تر باشد.

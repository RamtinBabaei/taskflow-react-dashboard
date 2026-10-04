# انتشار پروژه در GitHub

## ساخت Repository

در GitHub یک repository جدید با نام پیشنهادی زیر بساز:

```text
TaskFlow-React-Dashboard
```

README یا .gitignore را هنگام ساخت Repository در GitHub اضافه نکن، چون پروژه خودش این فایل‌ها را دارد.

## اتصال پروژه Local به GitHub

داخل Terminal پروژه:

```powershell
git init
git add .
git commit -m "feat: build professional TaskFlow dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/TaskFlow-React-Dashboard.git
git push -u origin main
```

به جای `YOUR_USERNAME` نام کاربری GitHub خودت را قرار بده.

## انتشار Demo با GitHub Pages

پروژه workflow آماده دارد:

```text
.github/workflows/deploy.yml
```

بعد از Push:

1. Repository را در GitHub باز کن.
2. وارد **Settings** شو.
3. بخش **Pages** را باز کن.
4. Source را روی **GitHub Actions** قرار بده.
5. از تب **Actions** وضعیت Deploy را بررسی کن.

پس از موفق شدن workflow، GitHub آدرس Live Demo را بهت می‌دهد.

## پیشنهاد برای Repository

**Description:**

```text
Modern responsive task-management dashboard built with React, TypeScript, Tailwind CSS, CRUD, search/filtering, dark mode and localStorage.
```

**Topics:**

```text
react
typescript
tailwindcss
vite
frontend
portfolio
responsive-design
task-manager
dark-mode
localstorage
```

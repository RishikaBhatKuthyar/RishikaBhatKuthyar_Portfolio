# Portfolio Application Restructure

This guide will help you restructure the portfolio application following clean coding practices.

## New Directory Structure

```
my-portfolio/
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Button/
│   │   ├── Navbar/
│   │   ├── SkillBar/
│   │   └── ShortcutHelpDialog/
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Resume/
│   │   ├── Blog/
│   │   └── Contact/
│   ├── layouts/
│   │   └── MainLayout/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Step-by-Step Commands to Restructure

Follow these commands to create the new structure:
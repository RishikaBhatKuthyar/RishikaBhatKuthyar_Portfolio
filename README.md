# 🧑‍💻 My Portfolio

A full-stack web application built using a modern tech stack to showcase who I am as a developer. It highlights my technical expertise, software projects, and engineering skills through a clean and responsive UI. Built with scalability and performance in mind, the frontend runs on React and Tailwind CSS with Vite for ultra-fast builds, while Express.js and TypeScript power the backend to handle server logic and APIs.


---

## 🛠 Tech Stack

| Layer        | Stack                        | Description                                                         |
|--------------|------------------------------|---------------------------------------------------------------------|
| Frontend     | React, Vite, Tailwind CSS    | Modern SPA with utility-first styling and fast dev server           |
| Styling      | PostCSS                      | CSS pre-processing pipeline for Tailwind and vendor compatibility   |
| Backend      | Node.js, Express, TypeScript | REST API server and request routing                                 |
| Package Mgmt | npm                          | Handles dependencies and script execution                           |
| Dev Tools    | Vite                         | Frontend bundler and live dev server                                |
| AI Scaffolder| Replit AI                    | Generated project setup and architecture                            |

---

## 📁 Project Structure

```
RishikaBhatKuthyar_Portfolio/
├── client/                   # Frontend (React + Vite)
│   └── src/
│       ├── components/       # Reusable UI components
│       ├── hooks/            # Custom React hooks
│       ├── layouts/          # Layout components
│       ├── pages/            # Page-level components
│       ├── styles/           # Tailwind/global styles
│       ├── types/            # TypeScript interfaces/types
│       └── utils/            # Shared frontend utilities
├── server/                   # Backend (Express + TS)
│   ├── index.ts              # Entry point
│   ├── routes.ts             # API route definitions
│   ├── storage.ts            # Storage-related utilities
│   └── vite.ts               # Dev server integration
├── shared/                   # Shared logic between client/server
├── .gitignore                # Git exclusions
├── tailwind.config.ts        # Tailwind CSS config
├── postcss.config.js         # PostCSS plugin config
├── vite.config.ts            # Vite project config
├── tsconfig.json             # TypeScript config
├── package.json              # Project metadata & scripts
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+)

### Installation

```bash
# Clone the repository
git clone https://github.com/RishikaBhatKuthyar/Rishika_Portfolio.git
cd Rishika_Portfolio

# Install all dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Access the portfolio at:

```
http://localhost:3000

```

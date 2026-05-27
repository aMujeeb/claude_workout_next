# ClaudeWokout Next

A high-performance Next.js application built with cutting-edge tools and optimized modern conventions.

---

> [!NOTE]
> This project is designed, built, and maintained autonomously using the **Antigravity IDE** — a state-of-the-art agentic AI development environment engineered by the Google DeepMind team.

---

## 🛠️ Technology Stack

This application is built with a highly cohesive, modern technology stack:

*   **Core Framework**: [Next.js 16.2.6](https://nextjs.org/) (App Router)
*   **Library**: [React 19.2.4](https://react.dev/) (utilizing modern React features, Server Components by default, and asynchronous API integrations)
*   **Language**: [TypeScript 5](https://www.typescriptlang.org/) for robust static typing and advanced type safety
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) configured via `@tailwindcss/postcss` for seamless utility-first styling without legacy `tailwind.config.js` bloat
*   **Fonts**: Geist Sans & Geist Mono integrated smoothly via `next/font/google`
*   **Tooling & Linting**: ESLint 9 with `eslint-config-next`

---

## 🚀 Getting Started

### 1. Installation

Install dependencies using `npm`:

```bash
npm install
```

### 2. Development

Start the development server with Turbopack fast refreshing:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build

Verify TypeScript compilation, compile the optimized production bundle, and statically optimize components:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

### 4. Linting

Run ESLint to verify codebase consistency and syntax rules:

```bash
npm run lint
```

---

## 📐 Architecture & Key Conventions

*   **Asynchronous Route Props**: In Next.js 16, route properties such as `params` and `searchParams` are Promises. They must be awaited (e.g., `const { slug } = await params`).
*   **Server Components by Default**: All layout and page files inside `src/app` render on the server. Interactive nodes are isolated into client component boundaries using `"use client"`.
*   **CSS v4 Configurations**: Global variables and design tokens are declared dynamically in `src/app/globals.css` via the native CSS `@theme` rules instead of standard configuration files.
 
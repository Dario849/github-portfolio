# 🛠️ Portfolio Website (Development Branch)

This branch contains the active development of my personal portfolio, built with a modern, performance-focused stack.

The goal of this project is to create a **high-quality developer portfolio** that demonstrates not only technical skills, but also **UI/UX awareness, performance optimization, and product thinking**.

---

## 🚀 Tech Stack

### Core
- **Astro** — Static-first architecture with partial hydration
- **TailwindCSS** — Utility-first styling for fast and consistent UI
- **React** — For interactive components and dynamic UI

---

## 🧩 Planned Features

- ⚡ Fast, optimized performance (Astro-first approach)
- 🎨 Clean and modern UI with strong visual hierarchy
- 🌗 Dark / Light mode
- 📱 Fully responsive design (mobile-first)
- 🧠 Project case studies (problem → solution approach)
- ✍️ Blog section (MDX-based)
- 🔍 Project filtering system
- 📊 Interactive components (charts / visualizations)
- ✨ Subtle animations and micro-interactions

---

## 📚 UI / Visualization / Interaction Libraries

These are selected to enhance UX **without sacrificing performance**:

### 🎨 UI & Components
- **shadcn/ui** → Accessible, customizable components
- **Radix UI** → Headless UI primitives (for modals, dropdowns, etc.)

---

### 🎞️ Animations
- **Framer Motion** → Smooth, declarative animations (React-based)
- **Lenis** → Smooth scrolling experience (optional, subtle use)

---

### 📊 Data Visualization
- **Recharts** → Simple and clean charts (React-based)
- **Chart.js** → Alternative for more customizable graphs

---

### 🧠 3D / Advanced Visuals
- **Three.js** → 3D rendering (only if meaningful)
- **@react-three/fiber** → React renderer for Three.js
- **Spline** → Lightweight 3D embeds

---

### 🧰 Utilities
- **clsx / classnames** → Conditional class handling
- **tailwind-merge** → Merge Tailwind classes safely
- **date-fns** → Date formatting

---


### ✍️ Content
- **MDX** → Blog posts and rich content inside Astro

---

## 📁 Project Structure
```text
+---public
|   +---fonts
|   \---icons
\---src
    +---assets
    +---components
    +---content
    |   \---blog
    +---layouts
    +---pages
    |   \---blog
    \---styles
```

---

## 🧪 Development Goals

This project is not just where i will be building a portfolio, but where i will be practicing:

- **Writing clean, maintainable code**
- **Structuring a scalable frontend architecture**
- **Applying UI/UX best practices**
- **Optimizing for performance and accessibility**

---
## 🧭 Roadmap
- **Setup Astro project**
- **Configure TailwindCSS**
- **Create base layout and design system**
- **Build Home page**
- **Build Projects section**
- **Add blog with MDX**
- **Implement dark mode**
- **Add animations and polish UI**
- **Optimize performance (Lighthouse)**
## ⚙️ Stack build process

```bash
# Install dependencies
npm install

# start astro project
npm create astro@latest

# Add tailwind, react, etc.. to project
npx astro add <integrationName>

# Start development server
npm run dev
```
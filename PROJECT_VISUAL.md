<!-- Visual Project Map for Nux -->

# 🎨 Nux — Project Visual Map

```
┌─────────────────────────────────────────────────────────────────┐
│                     NUX - PERSONAL WEBPAGE                       │
│                  React + TypeScript + Vite                       │
└─────────────────────────────────────────────────────────────────┘

                          ┌──────────────┐
                          │  index.html  │ ← Site Shell
                          └──────┬───────┘
                                 │
                    ┌────────────────────────────┐
                    │    React App (#root)       │
                    └────────────┬───────────────┘
                                 │
                    ┌────────────────────────────┐
                    │      src/main.tsx          │
                    │      src/App.tsx           │
                    └────────────┬───────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
         ┌────▼────┐      ┌──────▼──────┐    ┌────▼────┐
         │components│      │  sections/  │    │index.css│
         │  (Radix) │      │  (Routes)   │    │ (Tailw) │
         └──────────┘      └─────────────┘    └─────────┘
         
         Shadcn UI         Page Layout        Global Styles
         + Radix UI        + Content           + Animations


┌──────────────────────────────────────────────────────────────────┐
│                     PROJECT ROOT STRUCTURE                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  📄 Configuration Files:                                          │
│  ├─ vite.config.ts          ⚡ Build & Dev Setup                 │
│  ├─ tailwind.config.js      🎨 Styling System                   │
│  ├─ postcss.config.js       🔧 CSS Processing                   │
│  ├─ eslint.config.js        ✓ Code Quality                      │
│  ├─ tsconfig.json           📝 TypeScript Rules                 │
│  └─ components.json         🛠 Component Metadata               │
│                                                                   │
│  📦 Dependencies:                                                 │
│  ├─ package.json            📋 Packages List                    │
│  └─ package-lock.json       🔒 Exact Versions                   │
│                                                                   │
│  📚 Documentation:                                                │
│  ├─ README.md               📖 This File                         │
│  └─ info.md                 ℹ️ Generated Notes                  │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────┐
│                        TECH STACK LAYERS                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  🎯 PRESENTATION LAYER                                           │
│  ├─ Radix UI Primitives     (Headless Components)               │
│  ├─ Shadcn-inspired UI      (Built on Radix)                    │
│  └─ Tailwind CSS            (Utility-first Styling)             │
│                                                                   │
│  ⚙️ FRAMEWORK LAYER                                              │
│  ├─ React                   (UI Library)                         │
│  ├─ TypeScript              (Type Safety)                        │
│  └─ react-hook-form + Zod   (Forms & Validation)               │
│                                                                   │
│  🎬 ANIMATION LAYER                                              │
│  └─ GSAP                    (Animation Engine)                  │
│                                                                   │
│  🚀 BUILD & RUNTIME                                              │
│  └─ Vite                    (Dev Server & Build Tool)           │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────┐
│                      DEVELOPMENT WORKFLOW                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  npm install        ──→  Install all dependencies                │
│                                                                   │
│  npm run dev        ──→  Start dev server (localhost:5173)       │
│                     │                                             │
│                     ├─ Hot Module Replacement (HMR)             │
│                     └─ TypeScript type checking                 │
│                                                                   │
│  npm run lint       ──→  Check code quality                      │
│                     │                                             │
│                     └─ Fix with eslint.config.js                │
│                                                                   │
│  npm run build      ──→  Production bundle                       │
│                     │                                             │
│                     └─ Output: dist/ (minified, optimized)      │
│                                                                   │
│  npm run preview    ──→  Preview production build locally        │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────┐
│                     DEPLOYMENT PATHWAYS                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│     dist/ (production build)                                     │
│       │                                                           │
│       ├──→ ✨ Vercel      (Recommended: Auto-detects Vite)      │
│       │                                                           │
│       ├──→ 🔗 Netlify     (Drag-drop or Git integration)        │
│       │                                                           │
│       └──→ 📄 GitHub Pages (Static export to gh-pages)          │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────┐
│                     MISSING PIECES (TODO)                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ❌ src/ directory is currently empty or missing                 │
│                                                                   │
│     Recommended structure:                                        │
│                                                                   │
│     src/                                                          │
│     ├─ main.tsx        ← React entry point                      │
│     ├─ App.tsx         ← Root component                         │
│     ├─ index.css       ← Global styles + Tailwind              │
│     ├─ components/     ← Reusable UI (Radix + Shadcn)         │
│     └─ sections/       ← Page sections & routes                │
│                                                                   │
│  ⚠️ Add these to make the site functional & previewable          │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

```

---

### 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERACTION                          │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
          ┌────────────────────────────┐
          │   React Components         │
          │  (src/App.tsx + sections)  │
          └───────────┬────────────────┘
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
    ┌──────────────┐        ┌─────────────────┐
    │ Radix UI     │        │  react-hook-    │
    │ + Shadcn     │        │  form + Zod     │
    │ (Components) │        │ (Form Logic)    │
    └──────────────┘        └─────────────────┘
          │                         │
          └────────────┬────────────┘
                       │
                       ▼
          ┌────────────────────────────┐
          │  Tailwind CSS              │
          │  (Styling)                 │
          └───────────┬────────────────┘
                       │
                       ▼
          ┌────────────────────────────┐
          │  GSAP (Optional)           │
          │  (Animations & Effects)    │
          └────────────────────────────┘
```

---

### 📋 Quick Reference

| Aspect | Technology |
|--------|-----------|
| **Language** | TypeScript |
| **UI Framework** | React + Vite |
| **Styling** | Tailwind CSS |
| **UI Components** | Radix UI + Shadcn-inspired |
| **Forms** | react-hook-form + Zod |
| **Animation** | GSAP |
| **Linting** | ESLint |
| **Node Version** | 20+ |
| **Package Manager** | npm |

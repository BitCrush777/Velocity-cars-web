# 🏎️ Velocity Motors Experience

Welcome to the **Velocity Motors Experience**! This is a luxury online car dealership platform featuring a real-time 3D vehicle configurator. It has been built using modern web technologies in a clean, modular way, making it ideal for beginners to learn React, Three.js, and Next.js.

Live Website: **[https://bitcrush777.github.io/Velocity-cars-web/](https://bitcrush777.github.io/Velocity-cars-web/)**

---

## 🛠️ Technology Stack Explained

*   **Next.js (App Router)**: The framework used to manage pages, layouts, and routing.
*   **React & TypeScript**: Used for creating interactive elements (tabs, inputs, sliders) with type safety.
*   **Tailwind CSS**: A utility-first CSS framework for luxury dark-mode aesthetics.
*   **Three.js & React Three Fiber (R3F)**: Renders the interactive 3D car model directly in the browser canvas.
*   **Lucide React**: Premium icon pack for dashboard UI.

---

## 📂 Project Architecture

Here is a simple map of where everything is located:

```text
├── .github/workflows/      # Automated scripts to deploy the site to GitHub Pages
├── src/
│   ├── app/                # Page folders
│   │   ├── configure/      # 3D Configurator page (e.g. /configure/lamborghini-revuelto-2024)
│   │   ├── inventory/      # Dealership fleet search & filter page
│   │   ├── vehicles/       # Detailed specifications page
│   │   ├── globals.css     # Global CSS styling
│   │   └── page.tsx        # Home Page (hero, investment calculator)
│   ├── components/         # Reusable UI Blocks
│   │   ├── BackgroundShader.tsx # Custom WebGL animated energy background
│   │   ├── Configurator3D.tsx   # React Three Fiber 3D scene & car geometry
│   │   ├── TopNavBar.tsx        # Header navigation
│   │   └── Footer.tsx           # Footer details
│   └── data/
│       └── inventory.ts    # Central mock database of vehicle details
├── next.config.ts          # Configurations for static page exports
└── package.json            # Lists dependencies and scripts
```

---

## 💡 Code Highlights (For Learning)

### 1. The 3D Configurator (`src/components/Configurator3D.tsx`)
This component uses **React Three Fiber** (a React wrapper for Three.js) to render a 3D car silhouette. It dynamically updates:
*   **Paint finish**: Adjusts `roughness` and `metalness` based on whether the user selects *Matte*, *Metallic*, *Gloss*, *Satin*, or *Chrome*.
*   **Body Kit components**: Conditional rendering of splitters and spoilers based on toggled checkboxes.

### 2. Custom WebGL Shader (`src/components/BackgroundShader.tsx`)
Renders a custom neon blue wave pattern on a GPU canvas to create a futuristic vibe. It uses WebGL fragment shaders for high performance.

### 3. Dynamic Filtering (`src/app/inventory/page.tsx`)
Uses React's `useMemo` to filter through the database array dynamically as you type or adjust filters, calculating performance indicators instantly.

---

## 🚀 Running Locally

Want to play around with the code? Follow these simple steps:

1.  **Clone your repository**:
    ```bash
    git clone https://github.com/BitCrush777/Velocity-cars-web.git
    cd Velocity-cars-web
    ```
2.  **Install dependencies**:
    ```bash
    npm install --legacy-peer-deps
    ```
3.  **Run the local server**:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:3000` in your browser.

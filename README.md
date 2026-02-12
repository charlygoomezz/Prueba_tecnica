## Technical Test for Junior Developer

## Introduction

This project is a simple and modern Kanban board built with React, TypeScript, and Vite. It allows you to create groups (columns), add cards to each group, and visually link cards using edges. The UI is styled with TailwindCSS and supports drag-and-drop for groups and cards.

## Features

- ⚡️ Fast development with Vite and HMR
- 🟦 Built with React 19 and TypeScript
- 🎨 Styled using TailwindCSS
- ➕ Create and remove groups (columns)
- ➕ Add up to 5 cards per group
- 🔗 Link cards visually with edges
- 🖱️ Drag and drop support for groups and cards
- ♿ Accessible and responsive design

## Tech Stack

- [![React][React.js]][React-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![Vite][Vite]][Vite-url]
- [![TypeScript][TypeScript]][TypeScript-url]

## Project Structure

````text
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── CreateButton.tsx
│   │   ├── EdgeLayer.tsx
│   │   └── Group.tsx
│   ├── constants/
│   ├── hooks/
│   │   └── useBoard.ts
│   └── types/
│       └── board.types.ts
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

## Getting Started

Follow these steps to get the project up and running locally:

### Prerequisites

1. Clone the repository

```bash
git clone https://github.com/charlygoomezz/Prueba_tecnica.git
````

2. Install dependecies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

5. Open your browser and visit:

```bash
[npm run dev](http://'your-localhost)')
```

## Contact

For any questions or feedback, feel free to reach out:

    •	LinkedIn: www.linkedin.com/in/cgomezprosper￼
    •	Email: cgomezprosper@gmail.com￼

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

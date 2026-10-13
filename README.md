# Arete

Gamified task manager: create your own tasks, finish them and earn experience. A pet project built to practice React and Redux and to set up ESLint and Prettier. Not meant to be taken too seriously.

**[Live demo](https://arete-my-dream.vercel.app)**

<img width="1910" height="876" alt="Arete app screenshot" src="https://github.com/user-attachments/assets/7665bc36-3199-45e0-9032-c33fcb11cba4" />

## Tech stack

- React 18, Redux Toolkit, React Redux, React Router 7, react-select
- EmailJS (`@emailjs/browser`)
- Vite 7
- ESLint + Prettier (with sort-imports and css-order plugins)

## Getting started

**Prerequisites:** Node.js 20.19+ (or 22.12+) and npm.

```bash
git clone https://github.com/feverK13/Arete.git
cd Arete
npm install
npm run dev
```

Open the address printed in the terminal (usually `http://localhost:5173`).

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server with HMR      |
| `npm run build`   | Create a production build          |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Check the code with ESLint         |
| `npm run format`  | Format the code with Prettier      |

## Backend and services

- Data (users, tasks) is stored on [MockAPI](https://mockapi.io); the endpoint is set in `src/store/apiData.js`.
- The feedback form on the About page uses [EmailJS](https://www.emailjs.com); IDs are set in `src/pages/AboutUsPage.jsx`.
- No `.env` is required. To use your own services, replace these values.

> Authentication is a demo: passwords are stored and checked on the client side. Don't use real passwords.

## Roadmap

Development is paused: I got what I was aiming for. I plan to come back and polish the implementation on the starter stack (JS, CSS, React, Redux).

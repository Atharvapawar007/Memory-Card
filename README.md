# Pokémon Memory Card

A memory game built with React and Vite. Click each Pokémon card once to grow
your score, but don't click the same Pokémon twice.

## How to play

- The game loads 16 distinct Pokémon, selected from the first 200 Pokémon.
- Every card click shuffles the cards.
- Clicking a Pokémon for the first time adds a point.
- Clicking a Pokémon you have already chosen resets your score.
- Click every Pokémon once to win.
- Your best score is saved in the browser.

## Getting started

You need Node.js and npm installed.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. The game retrieves Pokémon
names and images from [PokéAPI](https://pokeapi.co/), so an internet connection
is required when the app loads.

## Available commands

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the development server         |
| `npm run build`        | Create a production build in `dist/` |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run format`       | Format project files with Prettier   |
| `npm run format:check` | Check formatting with Prettier       |

## Built with

- React
- Vite
- PokéAPI

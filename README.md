# P5 Generative Gallery

A stunning gallery of 33 generative art sketches and interactive experiments built with **Next.js**, **React**, and **p5.js**. This project was originally a Vite + React application and has been beautifully remodelled into a Next.js template inspired by the Image Gallery Starter.

## Features

- **33 Unique Sketches**: Explore a variety of creative coding concepts including Flow Fields, Reaction Diffusion, Double Pendulums, Fourier Epicycles, Cellular Automata, and more.
- **Next.js App**: Fast, optimized, and SSR-ready architecture for displaying the gallery.
- **Client-Side p5.js Integration**: Uses dynamic imports to seamlessly run p5.js sketches in a modern React environment without SSR conflicts.
- **Masonry Gallery**: An elegant, responsive masonry grid layout displaying thumbnails of all 33 days.
- **Immersive Viewer**: A dedicated, full-screen interactive viewer for each sketch with smooth animations and togglable info overlays.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI & Styling**: [React](https://reactjs.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **Generative Art**: [p5.js](https://p5js.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the gallery. Click on any thumbnail to interact with the sketch!

## Project Structure

- `pages/index.tsx`: The main gallery page with the masonry layout.
- `pages/p5/[id].tsx`: The dynamic route rendering individual p5 sketches.
- `components/P5Viewer.tsx`: The client-side wrapper that dynamically loads the p5 canvas.
- `components/P5Wrapper.tsx`: The React component that manages the p5 instance lifecycle.
- `utils/days/`: Contains the logic for all 33 generative sketches.
- `utils/metadata.ts`: Static metadata (titles, descriptions, thumbnail paths) for the gallery grid.

## License

MIT

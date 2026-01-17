import { flowField } from './day1';
import { recursiveTree } from './day2';
import { reactionDiffusion } from './day3';
import { voronoi } from './day4';
import { doublePendulum } from './day5';
import { fourierEpicycles } from './day6';
import { gameOfLife } from './day7';
import { perlinTerrain } from './day8';
import { phyllotaxis } from './day9';
import { kineticType } from './day10';
import { kaleidoscope } from './day11';
import { simpleFluid } from './day12';
import { metaballs } from './day13';
import { lorenzAttractor } from './day14';
import { mondrian } from './day15';
import { stochasticTree } from './day16';
import { sineWaves } from './day17';
import { delaunaySimple } from './day18';
import { emojiPhysics } from './day19';
import { pixelSorter } from './day20';
import { spirograph } from './day21';
import { brownianWalk } from './day22';
import { moirePatterns } from './day23';
import { fftVisuals } from './day24';
import { asciiArt } from './day25';
import { smartRockets } from './day26';
import { neuralWeb } from './day27';
import { tesseract } from './day28';
import { physarum } from './day29';
import { shapeMorphing } from './day30';
import { isometricCity } from './day31';
import { gravityWells } from './day32';
import { remixFinal } from './day33';
import p5 from 'p5';

export interface DaySketch {
  id: number;
  title: string;
  sketch: (p: p5) => void;
  description: string;
  thumbnail?: string;
}

export const days: DaySketch[] = [
  { id: 1, title: 'Flow Field', sketch: flowField, description: 'Noise-driven vector particles creating organic flow patterns.', thumbnail: '/thumbnails/day1.png' },
  { id: 2, title: 'Recursive Tree', sketch: recursiveTree, description: 'An interactive fractal tree that grows towards your mouse.', thumbnail: '/thumbnails/day2.png' },
  { id: 3, title: 'Reaction Diffusion', sketch: reactionDiffusion, description: 'Turing-pattern simulation of chemical reactions.', thumbnail: '/thumbnails/day3.png' },
  { id: 4, title: 'Voronoi', sketch: voronoi, description: 'Click to add points and watch the Voronoi cells dynamically partition space.', thumbnail: '/thumbnails/day4.png' },
  { id: 5, title: 'Double Pendulum', sketch: doublePendulum, description: 'A simulation of double-pendulum chaos with a glowing trace.', thumbnail: '/thumbnails/day5.png' },
  { id: 6, title: 'Fourier Epicycles', sketch: fourierEpicycles, description: 'Visualizing how fundamental circular motions can draw complex waveforms.', thumbnail: '/thumbnails/day6.png' },
  { id: 7, title: 'Game of Life', sketch: gameOfLife, description: 'Conway’s cellular automata: life, death, and complex patterns from simple rules.', thumbnail: '/thumbnails/day7.png' },
  { id: 8, title: 'Perlin Terrain', sketch: perlinTerrain, description: 'Generative infinite landscape using 3D Perlin noise.', thumbnail: '/thumbnails/day8.png' },
  { id: 9, title: 'Phyllotaxis', sketch: phyllotaxis, description: 'Algorithmic growth pattern inspired by the arrangement of leaves on a plant stem.', thumbnail: '/thumbnails/day9.png' },
  { id: 10, title: 'Kinetic Type', sketch: kineticType, description: 'Reactive typography that dances and scales with your mouse movement.', thumbnail: '/thumbnails/day10.png' },
  { id: 11, title: 'Kaleidoscope', sketch: kaleidoscope, description: 'Drag your mouse to create beautiful radially symmetric patterns.', thumbnail: '/thumbnails/day11.png' },
  { id: 12, title: 'Simple Fluid', sketch: simpleFluid, description: 'Particle-based fluid behavior with organic movement and fading trails.', thumbnail: '/thumbnails/day12.png' },
  { id: 13, title: 'Metaballs', sketch: metaballs, description: 'Fluid-like "gooey" spheres that merge smoothly when they get close.', thumbnail: '/thumbnails/day13.png' },
  { id: 14, title: 'Lorenz Attractor', sketch: lorenzAttractor, description: 'A visualization of the classic strange attractor in 3D space.', thumbnail: '/thumbnails/day14.png' },
  { id: 15, title: 'Mondrian', sketch: mondrian, description: 'Procedural generate art in the iconic style of Piet Mondrian.', thumbnail: '/thumbnails/day15.png' },
  { id: 16, title: 'Stochastic Tree', sketch: stochasticTree, description: 'Fractal tree growth with random branching probabilities.', thumbnail: '/thumbnails/day16.png' },
  { id: 17, title: 'Sine Waves', sketch: sineWaves, description: 'Rhythmic, overlapping waves creating a shimmering sea of sine.', thumbnail: '/thumbnails/day17.png' },
  { id: 18, title: 'Mesh Points', sketch: delaunaySimple, description: 'A dynamic point mesh connecting nearby nodes in a fluid web.', thumbnail: '/thumbnails/day18.png' },
  { id: 19, title: 'Emoji Physics', sketch: emojiPhysics, description: 'Fun gravity and collision simulation using your favorite emojis.', thumbnail: '/thumbnails/day19.png' },
  { id: 20, title: 'Pixel Sorter', sketch: pixelSorter, description: 'A glitch art effect that sorts pixels by brightness to create liquid streaks.', thumbnail: '/thumbnails/day20.png' },
  { id: 21, title: 'Spirograph', sketch: spirograph, description: 'Generative hypotrochoid patterns. Drag to change radii and offset.', thumbnail: '/thumbnails/day21.png' },
  { id: 22, title: 'Brownian Walk', sketch: brownianWalk, description: 'Tracing the chaotic drift of a random walker across the canvas.', thumbnail: '/thumbnails/day22.png' },
  { id: 23, title: 'Moiré Patterns', sketch: moirePatterns, description: 'Optical interference patterns created by overlapping geometric shapes.', thumbnail: '/thumbnails/day23.png' },
  { id: 24, title: 'FFT Visuals', sketch: fftVisuals, description: 'Simulated audio spectrum visualization with rhythmic frequency bars.', thumbnail: '/thumbnails/day24.png' },
  { id: 25, title: 'ASCII Art', sketch: asciiArt, description: 'Real-time ASCII conversion of generative patterns using text density mapping.', thumbnail: '/thumbnails/day25.png' },
  { id: 26, title: 'Smart Rockets', sketch: smartRockets, description: 'Rockets "learning" to find a target through simple evolutionary impulses.', thumbnail: '/thumbnails/day26.png' },
  { id: 27, title: 'Neural Web', sketch: neuralWeb, description: 'Visualizing a connected network of pulsing nodes and shifting synapses.', thumbnail: '/thumbnails/day27.png' },
  { id: 28, title: 'Tesseract', sketch: tesseract, description: 'A rotating 4D hypercube projected into our three-dimensional view.', thumbnail: '/thumbnails/day28.png' },
  { id: 29, title: 'Physarum', sketch: physarum, description: 'Agent-based simulation inspired by the foraging patterns of slime mould.', thumbnail: '/thumbnails/day29.png' },
  { id: 30, title: 'Shape Morphing', sketch: shapeMorphing, description: 'A smooth, mathematical transition between a circle and a square.', thumbnail: '/thumbnails/day30.png' },
  { id: 31, title: 'Isometric City', sketch: isometricCity, description: 'Procedural generation of a 3D city skyline using noise-directed block heights.', thumbnail: '/thumbnails/day31.png' },
  { id: 32, title: 'Gravity Wells', sketch: gravityWells, description: 'Particle paths bending around multiple invisible centers of gravity.', thumbnail: '/thumbnails/day32.png' },
  { id: 33, title: 'Remix Finale', sketch: remixFinal, description: 'A grand finale combining particles, symmetry, and persistence into a generative mandala.', thumbnail: '/thumbnails/day33.png' },
];

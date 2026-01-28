// Custom glitch transitions for Slidev
import { defineTransition } from '@slidev/types'

// Glitch out transition - distorts and fades
export const glitchOut = defineTransition({
  name: 'glitch-out',
  css: `
    .slidev-transition-glitch-out-enter-active,
    .slidev-transition-glitch-out-leave-active {
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .slidev-transition-glitch-out-enter-from {
      opacity: 0;
      filter: blur(10px) hue-rotate(90deg);
      transform: translateX(30px) skewX(10deg);
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    }

    .slidev-transition-glitch-out-leave-to {
      opacity: 0;
      filter: blur(10px) hue-rotate(-90deg);
      transform: translateX(-30px) skewX(-10deg);
      clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
    }
  `
})

// RGB Split transition
export const rgbSplit = defineTransition({
  name: 'rgb-split',
  css: `
    .slidev-transition-rgb-split-enter-active,
    .slidev-transition-rgb-split-leave-active {
      transition: all 0.5s ease;
    }

    .slidev-transition-rgb-split-enter-from {
      opacity: 0;
      text-shadow: -20px 0 #ff0040, 20px 0 #00ffff;
      transform: scale(1.1);
    }

    .slidev-transition-rgb-split-leave-to {
      opacity: 0;
      text-shadow: 20px 0 #ff0040, -20px 0 #00ffff;
      transform: scale(0.9);
    }
  `
})

// Static/noise transition
export const staticNoise = defineTransition({
  name: 'static-noise',
  css: `
    .slidev-transition-static-noise-enter-active,
    .slidev-transition-static-noise-leave-active {
      transition: all 0.3s steps(5);
    }

    .slidev-transition-static-noise-enter-from,
    .slidev-transition-static-noise-leave-to {
      opacity: 0;
      filter: grayscale(1) contrast(3);
    }
  `
})

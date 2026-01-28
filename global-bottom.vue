<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glitchIntensity = ref(0)
let glitchInterval = null

onMounted(() => {
  // Random glitch intensity spikes
  glitchInterval = setInterval(() => {
    if (Math.random() > 0.9) {
      glitchIntensity.value = Math.random() * 10
      setTimeout(() => {
        glitchIntensity.value = 0
      }, 100 + Math.random() * 200)
    }
  }, 500)
})

onUnmounted(() => {
  if (glitchInterval) clearInterval(glitchInterval)
})
</script>

<template>
  <!-- Noise texture overlay -->
  <div class="noise-layer" />

  <!-- Random glitch bars -->
  <div
    v-if="glitchIntensity > 5"
    class="glitch-bar"
    :style="{
      top: `${Math.random() * 100}%`,
      height: `${2 + Math.random() * 8}px`,
      animationDuration: `${0.05 + Math.random() * 0.1}s`
    }"
  />

  <!-- Corner decorations -->
  <div class="corner-deco corner-tl" />
  <div class="corner-deco corner-br" />

  <!-- Scanline accent -->
  <div class="scanline-accent" />
</template>

<style scoped>
.noise-layer {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0.015;
  pointer-events: none;
  z-index: 9997;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  animation: noise-move 0.5s steps(3) infinite;
}

@keyframes noise-move {
  0% { transform: translate(0, 0); }
  33% { transform: translate(-5%, -5%); }
  66% { transform: translate(5%, 5%); }
  100% { transform: translate(-3%, 3%); }
}

.glitch-bar {
  position: fixed;
  left: 0;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 255, 0.4),
    rgba(255, 0, 255, 0.4),
    transparent
  );
  pointer-events: none;
  z-index: 9998;
  animation: glitch-bar-move linear infinite;
  mix-blend-mode: screen;
}

@keyframes glitch-bar-move {
  0% { transform: translateX(-100%); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}

.corner-deco {
  position: fixed;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(0, 255, 255, 0.3);
  pointer-events: none;
  z-index: 9996;
}

.corner-tl {
  top: 20px;
  left: 20px;
  border-right: none;
  border-bottom: none;
  animation: corner-pulse 2s ease-in-out infinite;
}

.corner-br {
  bottom: 20px;
  right: 20px;
  border-left: none;
  border-top: none;
  animation: corner-pulse 2s ease-in-out infinite 1s;
}

@keyframes corner-pulse {
  0%, 100% {
    border-color: rgba(0, 255, 255, 0.3);
    box-shadow: none;
  }
  50% {
    border-color: rgba(255, 0, 255, 0.5);
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.3);
  }
}

.scanline-accent {
  position: fixed;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 255, 255, 0.3) 20%,
    rgba(255, 0, 255, 0.3) 80%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 9995;
  animation: scanline-move 6s linear infinite;
  opacity: 0.4;
}

@keyframes scanline-move {
  0% { top: -2px; }
  100% { top: 100%; }
}
</style>

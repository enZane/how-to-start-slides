<script setup lang="ts">
interface Props {
  section: string
  title: string
  subtitle: string
  accentColor?: 'cyan' | 'magenta'
}

const props = withDefaults(defineProps<Props>(), {
  accentColor: 'cyan'
})

const primaryColor = props.accentColor === 'cyan' ? 'glitch-cyan' : 'glitch-magenta'
const secondaryColor = props.accentColor === 'cyan' ? 'glitch-magenta' : 'glitch-cyan'
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="w-64 h-64 border rotate-45 animate-pulse"
        :class="`border-${primaryColor}/20`"
      ></div>
    </div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="w-48 h-48 border rotate-12 animate-pulse"
        :class="`border-${secondaryColor}/20`"
        style="animation-delay: 0.5s"
      ></div>
    </div>

    <div class="relative z-10">
      <div class="text-sm uppercase tracking-widest mb-4" :class="`text-${primaryColor}`">
        // {{ section }}
      </div>

      <h1 class="text-5xl font-bold">{{ title }}</h1>

      <div class="text-xl mt-4" :class="`text-${secondaryColor}`">
        {{ subtitle }}
      </div>

      <div class="flex justify-center gap-4 mt-8">
        <div
          class="h-1 bg-glitch-cyan"
          :class="accentColor === 'cyan' ? 'w-12' : 'w-4'"
        ></div>
        <div class="w-8 h-1 bg-glitch-magenta"></div>
        <div
          class="h-1 bg-glitch-red"
          :class="accentColor === 'cyan' ? 'w-4' : 'w-12'"
        ></div>
      </div>
    </div>
  </div>
</template>

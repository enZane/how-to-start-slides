<script setup lang="ts">
interface Props {
  primary: string
  secondary?: string
  primaryEffect?: 'neon-cyan' | 'neon-magenta' | 'neon-red' | 'none'
  secondaryEffect?: 'neon-cyan' | 'neon-magenta' | 'neon-red' | 'none'
  size?: 'md' | 'lg' | 'xl'
}

withDefaults(defineProps<Props>(), {
  primaryEffect: 'neon-cyan',
  secondaryEffect: 'neon-magenta',
  size: 'lg'
})

const sizeMap = {
  md: { primary: 'text-4xl', secondary: 'text-3xl' },
  lg: { primary: 'text-5xl', secondary: 'text-4xl' },
  xl: { primary: 'text-6xl', secondary: 'text-5xl' }
}
</script>

<template>
  <div class="text-center">
    <div
      :class="[
        'font-bold mb-8',
        sizeMap[size].primary,
        primaryEffect !== 'none' ? primaryEffect : ''
      ]"
      v-html="primary"
    />

    <div
      v-if="secondary"
      :class="[
        'font-bold mt-4',
        sizeMap[size].secondary,
        secondaryEffect !== 'none' ? secondaryEffect : ''
      ]"
      v-html="secondary"
    />

    <slot />
  </div>
</template>

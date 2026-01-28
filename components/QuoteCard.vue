<script setup lang="ts">
interface Props {
  quote: string
  author: string
  title?: string
  variant?: 'default' | 'bordered'
}

withDefaults(defineProps<Props>(), {
  variant: 'default'
})
</script>

<template>
  <div
    :class="[
      'p-12 rounded-lg',
      variant === 'bordered' ? 'glitch-border bg-black/40' : ''
    ]"
  >
    <h2 class="text-3xl font-bold">"{{ quote }}"</h2>

    <div class="text-lg text-glitch-magenta mt-4">
      — {{ author }}
    </div>

    <div v-if="title" class="text-sm opacity-50 mt-2 text-glitch-cyan">
      {{ title }}
    </div>

    <slot />
  </div>
</template>

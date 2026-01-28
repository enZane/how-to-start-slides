<script setup lang="ts">
interface Props {
  icon: string
  name: string
  description: string
  price?: string
  color?: 'pink' | 'fuchsia' | 'purple' | 'cyan' | 'green'
  priceColor?: 'pink' | 'fuchsia' | 'purple' | 'cyan' | 'green'
}

withDefaults(defineProps<Props>(), {
  color: 'pink'
})

const colorMap = {
  pink: 'bg-pink-500/20',
  fuchsia: 'bg-fuchsia-500/20',
  purple: 'bg-purple-500/20',
  cyan: 'bg-cyan-500/20',
  green: 'bg-green-500/20'
}
</script>

<template>
  <div :class="['p-5 rounded-lg', colorMap[color]]">
    <div class="text-3xl mb-3">{{ icon }}</div>
    <div class="text-xl font-bold mb-2">{{ name }}</div>
    <div class="text-sm opacity-70 mb-3">{{ description }}</div>
    <div
      v-if="price"
      :class="['text-xs px-2 py-1 rounded inline-block', colorMap[priceColor || color]]"
    >
      {{ price }}
    </div>
    <slot />
  </div>
</template>

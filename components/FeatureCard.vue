<script setup lang="ts">
interface Props {
  icon?: string
  title: string
  description?: string
  color?: 'pink' | 'fuchsia' | 'purple' | 'cyan' | 'gray' | 'green'
  badge?: string
  badgeColor?: 'pink' | 'fuchsia' | 'purple' | 'cyan' | 'gray' | 'green'
}

withDefaults(defineProps<Props>(), {
  color: 'pink'
})

const colorMap = {
  pink: 'bg-pink-500/20',
  fuchsia: 'bg-fuchsia-500/20',
  purple: 'bg-purple-500/20',
  cyan: 'bg-cyan-500/20',
  gray: 'bg-gray-500/20',
  green: 'bg-green-500/20'
}
</script>

<template>
  <div :class="['p-4 rounded-lg', colorMap[color]]">
    <div v-if="icon" class="text-3xl mb-2">{{ icon }}</div>
    <div class="text-xl font-bold mb-2">{{ title }}</div>
    <div v-if="description" class="opacity-70 text-sm">{{ description }}</div>
    <div
      v-if="badge"
      :class="['text-xs px-2 py-1 rounded inline-block mt-3', colorMap[badgeColor || color]]"
    >
      {{ badge }}
    </div>
    <slot />
  </div>
</template>

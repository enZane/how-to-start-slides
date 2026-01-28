<script setup lang="ts">
interface Props {
  color?: 'pink' | 'fuchsia' | 'purple' | 'cyan' | 'gray'
  variant?: 'filled' | 'bordered'
}

withDefaults(defineProps<Props>(), {
  color: 'pink',
  variant: 'bordered'
})

const colorMap = {
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500', text: 'text-pink-400' },
  fuchsia: { bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500', text: 'text-fuchsia-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500', text: 'text-purple-400' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500', text: 'text-cyan-400' },
  gray: { bg: 'bg-gray-500/10', border: 'border-gray-500', text: 'text-gray-400' }
}
</script>

<template>
  <div
    :class="[
      'p-4 rounded',
      colorMap[color].bg,
      variant === 'bordered' ? `border-l-4 ${colorMap[color].border}` : ''
    ]"
  >
    <slot />
  </div>
</template>

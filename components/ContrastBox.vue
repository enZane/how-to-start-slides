<script setup lang="ts">
interface Props {
  icon?: string
  label: string
  text: string
  variant?: 'negative' | 'positive'
}

withDefaults(defineProps<Props>(), {
  variant: 'positive'
})
</script>

<template>
  <div
    :class="[
      'p-4 rounded-lg',
      variant === 'negative' ? 'bg-gray-500/20' : 'bg-pink-500/20'
    ]"
  >
    <div class="font-bold mb-2">
      {{ icon || (variant === 'negative' ? '❌' : '✅') }} {{ label }}
    </div>
    <div class="opacity-80">{{ text }}</div>
  </div>
</template>

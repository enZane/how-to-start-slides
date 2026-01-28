<script setup lang="ts">
interface CheckItem {
  text: string
  color?: 'pink' | 'fuchsia' | 'purple' | 'cyan'
}

interface Props {
  items: CheckItem[]
  defaultColor?: 'pink' | 'fuchsia' | 'purple' | 'cyan'
}

withDefaults(defineProps<Props>(), {
  defaultColor: 'pink'
})

const colorMap = {
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400' },
  fuchsia: { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-400' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' }
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['p-3 rounded', colorMap[item.color || defaultColor].bg]"
    >
      <span :class="['font-bold', colorMap[item.color || defaultColor].text]">✓</span>
      {{ item.text }}
    </div>
  </div>
</template>

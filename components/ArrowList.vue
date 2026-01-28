<script setup lang="ts">
interface ArrowItem {
  text: string
  highlight?: boolean
}

interface Props {
  items: ArrowItem[]
  color?: 'pink' | 'fuchsia' | 'purple' | 'cyan'
}

withDefaults(defineProps<Props>(), {
  color: 'fuchsia'
})

const colorMap = {
  pink: { bg: 'bg-pink-500/10', bgHighlight: 'bg-pink-500/20', text: 'text-pink-400' },
  fuchsia: { bg: 'bg-fuchsia-500/10', bgHighlight: 'bg-fuchsia-500/20', text: 'text-fuchsia-400' },
  purple: { bg: 'bg-purple-500/10', bgHighlight: 'bg-purple-500/20', text: 'text-purple-400' },
  cyan: { bg: 'bg-cyan-500/10', bgHighlight: 'bg-cyan-500/20', text: 'text-cyan-400' }
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'p-3 rounded',
        item.highlight ? colorMap[color].bgHighlight + ' font-bold' : colorMap[color].bg
      ]"
    >
      <span :class="colorMap[color].text">→</span> {{ item.text }}
    </div>
  </div>
</template>

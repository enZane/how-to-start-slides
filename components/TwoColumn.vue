<script setup lang="ts">
interface Props {
  leftTitle?: string
  rightTitle?: string
  leftColor?: 'pink' | 'fuchsia' | 'purple' | 'cyan' | 'gray'
  rightColor?: 'pink' | 'fuchsia' | 'purple' | 'cyan' | 'gray'
  gap?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  leftColor: 'pink',
  rightColor: 'fuchsia',
  gap: 'lg'
})

const colorMap = {
  pink: 'text-pink-400',
  fuchsia: 'text-fuchsia-400',
  purple: 'text-purple-400',
  cyan: 'text-cyan-400',
  gray: 'text-gray-400'
}

const gapMap = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8'
}
</script>

<template>
  <div :class="['grid grid-cols-2 mt-8', gapMap[gap]]">
    <div>
      <div v-if="leftTitle" :class="['text-xl font-bold mb-4', colorMap[leftColor]]">
        {{ leftTitle }}
      </div>
      <slot name="left" />
    </div>

    <div>
      <div v-if="rightTitle" :class="['text-xl font-bold mb-4', colorMap[rightColor]]">
        {{ rightTitle }}
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

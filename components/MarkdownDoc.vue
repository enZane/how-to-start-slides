<script setup lang="ts">
interface Metadata {
  id?: string
  title?: string
  type?: string
  status?: string
  priority?: string
  complexity?: string
  dependencies?: string[]
  tags?: string[]
  assignee?: string
  created_date?: string
  [key: string]: unknown
}

interface Props {
  filename?: string
  maxHeight?: string
  meta?: Metadata
}

withDefaults(defineProps<Props>(), {
  filename: '',
  maxHeight: '400px'
})

const statusColors: Record<string, string> = {
  backlog: 'bg-gray-500/20 text-gray-300',
  'in-progress': 'bg-blue-500/20 text-blue-300',
  'in_progress': 'bg-blue-500/20 text-blue-300',
  review: 'bg-yellow-500/20 text-yellow-300',
  done: 'bg-green-500/20 text-green-300',
  blocked: 'bg-red-500/20 text-red-300'
}

const priorityColors: Record<string, string> = {
  P0: 'bg-red-500/30 text-red-300',
  P1: 'bg-orange-500/30 text-orange-300',
  P2: 'bg-yellow-500/30 text-yellow-300',
  P3: 'bg-gray-500/30 text-gray-300'
}
</script>

<template>
  <div class="markdown-doc rounded-lg overflow-hidden border border-gray-700 bg-gray-900/80 shadow-xl">
    <!-- Window chrome -->
    <div class="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <span v-if="filename" class="text-gray-400 text-sm ml-2 font-mono">{{ filename }}</span>
    </div>

    <!-- Content -->
    <div
      class="p-5 overflow-y-auto"
      :style="{ maxHeight }"
    >
      <!-- Frontmatter metadata -->
      <div v-if="meta" class="mb-4 p-3 bg-gray-800/50 rounded border border-gray-700 font-mono text-xs">
        <div class="text-gray-500 mb-2">---</div>
        <div class="space-y-1">
          <div v-if="meta.id" class="flex">
            <span class="text-purple-400 w-28">id:</span>
            <span class="text-cyan-300">{{ meta.id }}</span>
          </div>
          <div v-if="meta.title" class="flex">
            <span class="text-purple-400 w-28">title:</span>
            <span class="text-green-300">"{{ meta.title }}"</span>
          </div>
          <div v-if="meta.type" class="flex">
            <span class="text-purple-400 w-28">type:</span>
            <span class="text-yellow-300">{{ meta.type }}</span>
          </div>
          <div v-if="meta.status" class="flex items-center">
            <span class="text-purple-400 w-28">status:</span>
            <span :class="['px-1.5 py-0.5 rounded text-xs', statusColors[meta.status] || 'text-gray-300']">
              {{ meta.status }}
            </span>
          </div>
          <div v-if="meta.priority" class="flex items-center">
            <span class="text-purple-400 w-28">priority:</span>
            <span :class="['px-1.5 py-0.5 rounded text-xs', priorityColors[meta.priority] || 'text-gray-300']">
              {{ meta.priority }}
            </span>
          </div>
          <div v-if="meta.complexity" class="flex">
            <span class="text-purple-400 w-28">complexity:</span>
            <span class="text-orange-300">{{ meta.complexity }}</span>
          </div>
          <div v-if="meta.dependencies?.length" class="flex">
            <span class="text-purple-400 w-28">dependencies:</span>
            <span class="text-cyan-300">[{{ meta.dependencies.join(', ') }}]</span>
          </div>
          <div v-if="meta.tags?.length" class="flex">
            <span class="text-purple-400 w-28">tags:</span>
            <span class="text-pink-300">[{{ meta.tags.join(', ') }}]</span>
          </div>
          <div v-if="meta.assignee" class="flex">
            <span class="text-purple-400 w-28">assignee:</span>
            <span class="text-gray-300">{{ meta.assignee }}</span>
          </div>
          <div v-if="meta.created_date" class="flex">
            <span class="text-purple-400 w-28">created_date:</span>
            <span class="text-gray-300">{{ meta.created_date }}</span>
          </div>
        </div>
        <div class="text-gray-500 mt-2">---</div>
      </div>

      <!-- Markdown content -->
      <div class="prose prose-invert prose-sm max-w-none">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.markdown-doc :deep(h1) {
  @apply text-lg font-bold text-white mb-3 mt-0 pb-2 border-b border-gray-700;
}

.markdown-doc :deep(h2) {
  @apply text-base font-semibold text-pink-400 mb-2 mt-4;
}

.markdown-doc :deep(h3) {
  @apply text-sm font-semibold text-fuchsia-400 mb-2 mt-3;
}

.markdown-doc :deep(p) {
  @apply text-gray-300 mb-2 text-xs leading-relaxed;
}

.markdown-doc :deep(ul) {
  @apply list-none pl-0 mb-3 space-y-0.5;
}

.markdown-doc :deep(li) {
  @apply text-gray-300 text-xs;
}

.markdown-doc :deep(code) {
  @apply bg-gray-800 text-pink-300 px-1.5 py-0.5 rounded text-xs font-mono;
}

.markdown-doc :deep(a) {
  @apply text-cyan-400 hover:text-cyan-300 underline;
}

.markdown-doc :deep(strong) {
  @apply text-white font-semibold;
}

/* Checkbox styling */
.markdown-doc :deep(input[type="checkbox"]) {
  @apply mr-2 accent-pink-500;
}
</style>

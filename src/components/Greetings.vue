<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Data arrays
const words = [
  'un·\u200Bcon·\u200Bven\u200Btion·\u200Bal',
  'Indie·\u200BIndeed',
  'Worse is better',
]

const shells = ['>', '$', ']', '_', '%', '#']

// Reactive state
const word = ref('')
const shell = ref('')

// Utility functions
function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Pick random values when component mounts
onMounted(() => {
  word.value = getRandom(words)
  shell.value = getRandom(shells)
})
</script>

<template>
    <div class="flex border-y border-dashed border-gray48">
        <span class="text-4xl xl:text-7xl">{{ shell }}</span>
        <span class="text-4xl xl:text-7xl">&nbsp;</span>
        <span class="italic text-4xl xl:text-7xl">{{ word }}</span>
        <img class="h-5 xl:h-5 pl-2" src="/images/logo.webp" alt="Logo">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Data arrays
const words = [
  t('home.greeting.1'),
  t('home.greeting.2'),
  t('home.greeting.3')
]

const frame = ref('|')
const frames = ['|', '/', '-', '\\']
let i = 0
let timer: ReturnType<typeof setInterval>

function startSpinner() {
  timer = setInterval(() => {
    frame.value = frames[i]
    i = (i + 1) % frames.length
  }, 300)
}

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
  startSpinner()
})
</script>

<template>
    <div class="flex border-y border-dashed border-gray48">
        <span class="text-4xl lg:text-7xl font-black">{{ frame }}</span>
        <span class="text-4xl lg:text-7xl">&nbsp;</span>
        <span class="italic text-4xl lg:text-7xl">{{ word }}</span>
        <img class="h-5 xl:h-5 pl-2" src="/images/logo.webp" alt="Logo">
    </div>
</template>

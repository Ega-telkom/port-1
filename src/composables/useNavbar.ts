// composables/useNavbar.ts
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useNavbar() {
  const route = useRoute()
  const isOpen = ref<boolean>(false)

  const toggle = (): void => {
    isOpen.value = !isOpen.value
  }

  const handleResize = (): void => {
    if (window.innerWidth >= 1024) { // md breakpoint
      isOpen.value = false
    }
  }

  watch(() => route.path, () => {
    isOpen.value = false
  })

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { isOpen, toggle }
}

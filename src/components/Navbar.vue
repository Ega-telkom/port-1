<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { useNavbar } from '@/composables/useNavbar'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()
const { isOpen, toggle } = useNavbar()

interface MenuItem {
  label: string
  href?: string
  to?: string
  class?: string
  isExternal?: boolean
}

const menuItems: MenuItem[] = [
  {
    label: t('navbar.download_cv'),
    href: '/misc/CV.pdf',
    class: 'bg-hacker hover:underline primary text-neutral-950',
    isExternal: true
  },
  { label: t('link.about'), to: '/about' },
  { label: t('link.project'), to: '/project' },
  { label: t('link.skill'), to: '/skill' },
]

const isActive = (to?: string) => {
  return to && route.path === to
}

const getLinkClass = (item: MenuItem) => {
  if (item.class) return item.class

  const baseClass = 'text-white hover:underline'
  const activeClass = isActive(item.to) ? 'underline' : ''

  return `${baseClass} ${activeClass}`
}
</script>

<template>
    <nav class="border-b border-gray48">
        <div class="max-w-6xl mx-auto border-x px-5 border-gray48">
            <div class="h-16 flex items-center justify-between">
                <RouterLink to="/" class="flex items-center space-x-3">
                    <img src="/images/logo.webp" alt="Logo" class="h-7 md:h-5">
                </RouterLink>

                <button type="button" @click="toggle" class="md:hidden cursor-pointer">
                    <span class="sr-only">Open main menu</span>
                    <img class="h-7" src="/images/menu.webp" alt="Menu icon">
                </button>

                <!-- Desktop menu -->
                <div class="hidden md:block">
                    <ul class="flex flex-row space-x-8">
                        <li v-for="item in menuItems" :key="item.label">
                            <RouterLink v-if="item.to" :to="item.to" :class="getLinkClass(item)">
                                {{ item.label }}
                            </RouterLink>
                            <a v-else :href="item.href" :class="getLinkClass(item)">
                                {{ item.label }}
                            </a>
                        </li>
                        <li class="text-white">
                            <span class="underline">>EN</span>
                            <span>/</span>
                            <a href="id/" class="hover:underline">ID</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-show="isOpen" class="md:hidden pb-4">
                <ul class="flex flex-col gap-3">
                    <li v-for="item in menuItems" :key="item.label">
                        <RouterLink v-if="item.to" :to="item.to" :class="getLinkClass(item)">
                            {{ item.label }}
                        </RouterLink>
                        <a v-else :href="item.href" :class="getLinkClass(item)">
                            {{ item.label }}
                        </a>
                    </li>
                    <li class="text-white">
                        <span class="underline">>EN</span>
                        <span>/</span>
                        <a href="id/" class="hover:underline">ID</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

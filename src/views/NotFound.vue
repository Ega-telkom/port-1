<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
import { useHead } from '@unhead/vue'
import { computed } from 'vue'

useHead({
  title: computed(() => t('404.title')),
  meta: [
    { name: 'description', content: computed(() => t('404.desc')) },
    { property: 'og:title', content: computed(() => t('404.title')) },
    { property: 'og:description', content: computed(() => t('404.desc')) },
    // { property: 'og:image', content: 'https://example.com/og.jpg' },
    { property: 'og:type', content: 'website' },
  ],
  htmlAttrs: {
    lang: computed(() => locale.value)
  }
})
</script>
<template>
    <div class="border p-2 w-fit">
        {{ t("404.1") }}<br />
        {{ t("404.2") }}<br />
    </div>
    <pre>
       \
        \   ^__^
         \  (oo)\_______
            (o>)\       )\/\
                ||----w |
                ||     ||
            ^^^^^^^^^^^^^^^^</pre
    >
</template>

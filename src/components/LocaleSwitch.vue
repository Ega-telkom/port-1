<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import type { Locale } from "@/types/i18n";

const route = useRoute();
const router = useRouter();

const currentLocale = computed<Locale>(() => {
    const raw = route.params.locale;
    return raw === "id" ? "id" : "en";
});

function switchLocale(locale: Locale) {
    router.push({
        name: route.name!,
        params: {
            ...route.params,
            locale: locale === "en" ? undefined : locale,
        },
        query: route.query,
    });
}
</script>

<template>
    <span
        @click="switchLocale('en')"
        :class="{ active: currentLocale === 'en' }"
        class="hover:underline cursor-pointer"
        >EN</span
    >
    /
    <span
        @click="switchLocale('id')"
        :class="{ active: currentLocale === 'id' }"
        class="hover:underline cursor-pointer"
        >ID</span
    >
</template>

<style scoped>
span.active {
    background: #000;
    color: white;
}
</style>

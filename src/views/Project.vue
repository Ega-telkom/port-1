<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const projectKeys = ['port-1', 'jalurku', 'Phostel']
</script>

<template>
    <!-- content -->
    <div class="border p-5 mb-5 w-fit mx-auto text-center">
        <span class="font-bold">{{ t("project.title") }}</span><br />
    </div>

    <div v-for="key in projectKeys" :key="key">
        <h2 class="mb-2 border-b font-bold">
            {{ t(`project.${key}.title`) }}
        </h2>
        <div class="max-w-6xl bg-neutral-200 border mb-2">
            <img
            fetchpriority="high"
            class="w-full object-cover object-top"
            :src="t(`project.${key}.image`)"
            :alt="t(`project.${key}.title`)"
            />
        </div>
        <p class="mb-6">{{ t(`project.${key}.content`) }}</p>
    </div>
</template>

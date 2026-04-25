<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "@components/Navbar.vue";
import DotMatrixPaper from "@components/DotMatrixPaper.vue";
import LocaleSwitch from "@components/LocaleSwitch.vue";

onMounted(() => {
    [
        "/images/port-1.webp",
        "/images/fundivest.webp",
        "/images/biblio.webp",
        "/images/jalurku.webp",
        "/images/smilebox.webp",
        "/images/eatscape.webp",
        "/images/phostel.webp",
    ].forEach((src) => {
        const img = new Image();
        img.src = src;
    });
});
</script>

<template>
    <DotMatrixPaper
        :hole-size="14"
        :hole-gap="20"
        :strip-width="30"
        class="max-w-5xl mx-auto md:my-5"
    >
        <Navbar />
        <router-view />
    </DotMatrixPaper>
</template>

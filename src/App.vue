<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "@components/Navbar.vue";
import DotMatrixPaper from "@components/DotMatrixPaper.vue";
import LocaleSwitch from "@components/LocaleSwitch.vue";

onMounted(() => {
    [
        "/images/thumb/port-1.webp",
        "/images/thumb/fundivest.webp",
        "/images/thumb/biblio.webp",
        "/images/thumb/jalurku.webp",
        "/images/thumb/smilebox.webp",
        "/images/thumb/eatscape.webp",
        "/images/thumb/phostel.webp",
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
        class="max-w-5xl mx-auto lg:my-5"
    >
        <Navbar />
        <router-view />
    </DotMatrixPaper>
</template>

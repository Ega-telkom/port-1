<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
import DotMatrixPaper from "@components/DotMatrixPaper.vue";
import LocaleSwitch from "@components/LocaleSwitch.vue";
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

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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

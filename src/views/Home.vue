<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, tm, rt } = useI18n()
const skillCategories = ['tool', 'programming', 'framework', 'language'] as const
</script>
<template>
    <div class="border p-2 w-fit">
        {{ t("home.greeting.1") }}<br />
        {{ t("home.greeting.2") }}<br />
        {{ t("home.greeting.3") }}
    </div>
    <pre>
       \
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
            ^^^^^^^^^^^^^^^^</pre
    >
    <!-- content -->
    <div class="text-black main max-w-6xl mx-auto mb-2">
        <h2 class="border-b font-bold">
            <a
                name="this-site"
                class="hover:underline focus:underline"
                href="#this-site"
                >{{ t("home.summary.title") }}</a
            >
        </h2>
        <p class="pb-6 pt-2">
            {{ t("home.summary.content") }}
        </p>

        <h2 class="border-b font-bold">
            <a
                name="this-site"
                class="hover:underline focus:underline"
                href="#this-site"
                >{{ t("home.social.title") }}</a
            >
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 border-l border-black mb-6">
            <div class="border-r border-b border-black p-4">
                <a
                    href="https://github.com/Ega-telkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2"
                >
                    <img
                        src="/images/github.svg"
                        alt="Github Logo"
                        class="h-lh w-auto"
                    />
                    <p class="hover:underline">Ega-telkom</p>
                </a>
            </div>
            <div class="border-r border-b border-black p-4">
                <a
                    href="https://github.com/Ega-telkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2"
                >
                    <img
                        src="/images/github.svg"
                        alt="Github Logo"
                        class="h-lh w-auto"
                    />
                    <p class="hover:underline">greneboy</p>
                </a>
            </div>
            <div class="border-r border-b border-black p-4">
                <a
                    href="https://github.com/Ega-telkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2"
                >
                    <img
                        src="/images/linkedin.svg"
                        alt="Linkedin Logo"
                        class="h-lh w-auto"
                    />
                    <p class="hover:underline">Ega natha</p>
                </a>
            </div>
            <div class="border-r border-b border-black p-4">
                <a
                    href="https://github.com/Ega-telkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2"
                >
                    <img
                        src="/images/youtube.svg"
                        alt="Youtube Logo"
                        class="h-lh w-auto"
                    />
                    <p class="hover:underline">Ega-telkom</p>
                </a>
            </div>
        </div>

        <h2 class="border-b font-bold">
            <a
                name="this-site"
                class="hover:underline focus:underline"
                href="#this-site"
                >{{ t("home.skill.title") }}</a
            >
        </h2>
        <div class="pt-2 grid grid-cols-2 md:flex gap-8 md:gap-16 mb-6">
            <div v-for="key in skillCategories" :key="key">
                <p class="font-bold">{{ t(`home.skill.${key}.title`) }}</p>
                <ul class="list-disc pl-5">
                    <li v-for="(item, idx) in tm(`home.skill.${key}.items`)" :key="idx">
                        {{ rt(item) }}
                    </li>
                </ul>
            </div>
        </div>

        <h2 class="border-b font-bold">
            <a
                name="this-site"
                class="hover:underline focus:underline"
                href="#this-site"
                >{{ t("home.contact.title") }}</a
            >
        </h2>
        <ul>
            <li>Email:</li>
            <li>Phone/Whatsapp:</li>
        </ul>
    </div>
</template>

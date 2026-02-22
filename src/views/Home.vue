<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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
        <div class="pt-2 grid grid-cols-2 md:flex gap-8 md:gap-16">
            <div>
                <p class="font-bold">{{ t("home.skill.tool") }}</p>
                <ul class="list-disc pl-5">
                    <li>Linux</li>
                    <li>Bash/Fish</li>
                    <li>LaTeX</li>
                    <li>Typst</li>
                    <li>git</li>
                    <li>vim</li>
                    <li>LaTeX</li>
                </ul>
            </div>
            <div>
                <p class="font-bold">{{ t("home.skill.language") }}</p>
                <ul class="list-disc pl-5">
                    <li>Go</li>
                    <li>Kotlin</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div>
                <p class="font-bold">{{ t("home.skill.framework") }}</p>
                <ul class="list-disc pl-5">
                    <li>Go Fiber</li>
                    <li>Vite/Vuejs</li>
                </ul>
            </div>
        </div>
    </div>
</template>

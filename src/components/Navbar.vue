<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import type { RouteLocationRaw } from "vue-router";
import { useNavbar } from "@/composables/useNavbar";
import { useI18n } from "vue-i18n";
import LocaleSwitch from "@/components/LocaleSwitch.vue";

const { t } = useI18n();
const route = useRoute();
const { isOpen, toggle } = useNavbar();

interface MenuItem {
    label: string;
    to?: RouteLocationRaw;
    href?: string;
    isExternal?: boolean;
}

const currentLocale = computed<"en" | "id">(() => {
    return (route.params.locale as "en" | "id") || "en";
});

const menuItems = computed<MenuItem[]>(() => [
    {
        label: t("link.cv"),
        href: "/misc/test.pdf",
        isExternal: true,
    },
    {
        label: t("link.project"),
        to: {
            name: "project",
            params: currentLocale.value === "id" ? { locale: "id" } : {},
        },
    },
]);
</script>

<template>
    <nav class="mb-5">
        <div class="flex items-stretch justify-between">
            <!-- Logo / Home -->
            <RouterLink
                :to="{
                    name: 'home',
                    params: currentLocale === 'en' ? {} : { locale: 'id' },
                }"
                class="font-bold hover:underline pb-2"
            >
                <span v-if="route.name === 'home'"> PORTFOLIO-1 v.2.0.0 </span>
                <span v-else> ← {{ t("navbar.home") }}</span>
            </RouterLink>

            <!-- Mobile Toggle -->
            <button
                type="button"
                @click="toggle"
                :class="isOpen ? 'border-x border-t -mb-px' : 'border -mb-px'"
                class="bg-white px-2 lg:hidden cursor-pointer"
            >
                MENU
            </button>

            <!-- Desktop Menu -->
            <div class="hidden lg:block">
                <ul class="flex flex-row space-x-6 items-center">
                    <li v-for="item in menuItems" :key="item.label">
                        <RouterLink
                            v-if="item.to"
                            :to="item.to"
                            class="text-black hover:underline"
                            active-class="underline"
                        >
                            {{ item.label }}
                        </RouterLink>

                        <a
                            v-else-if="item.href"
                            :href="item.href"
                            class="text-black hover:underline"
                            target="_blank"
                            rel="noopener"
                        >
                            {{ item.label }}
                        </a>
                    </li>
                    <p>-</p>
                    <li>
                        <LocaleSwitch />
                    </li>
                </ul>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-show="isOpen" class="lg:hidden p-2 border">
            <ul class="flex flex-col gap-3">
                <li v-for="item in menuItems" :key="item.label">
                    <RouterLink
                        v-if="item.to"
                        :to="item.to"
                        class="text-black hover:underline"
                        active-class="underline"
                        @click="toggle"
                    >
                        {{ item.label }}
                    </RouterLink>

                    <a
                        v-else-if="item.href"
                        :href="item.href"
                        class="text-black hover:underline"
                        target="_blank"
                        rel="noopener"
                    >
                        {{ item.label }}
                    </a>
                </li>

                <li>
                    <LocaleSwitch />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { onMounted, onUnmounted, ref } from 'vue'
import 'photoswipe/style.css'

const imgRef = ref()

const lightbox = new PhotoSwipeLightbox({
  pswpModule: () => import('photoswipe'),
})

onMounted(() => lightbox.init())
onUnmounted(() => lightbox.destroy())

const projectKeys = [
    "port-1",
    "fundivest",
    "Biblio",
    "jalurku",
    "Smilebox",
    "Eatscape",
    "Phostel",
];

function openImage(key: string, event: MouseEvent) {
  const img = event.target as HTMLImageElement
  const fullSrc = t(`project.${key}.image`)
  const thumbSrc = fullSrc.replace('/images/', '/images/thumb/')

  lightbox.loadAndOpen(0, [{
    src: fullSrc,
    msrc: thumbSrc,
    width: parseInt(t(`project.${key}.imageWidth`)),
    height: parseInt(t(`project.${key}.imageHeight`)),
    thumbEl: img
  }])
}
</script>

<template>
    <!-- content -->
    <div class="border p-5 mb-5 w-fit mx-auto text-center">
        <span class="font-bold">{{ t("project.title") }}</span
        ><br />
        <i>{{ t("project.desc") }}</i>
    </div>

    <div class="columns-1 md:columns-2 gap-6">
        <div
            v-for="key in projectKeys"
            :key="key"
            class="break-inside-avoid mb-6"
        >
            <div class="flex">
                <h2
                    class="font-bold px-3 py-1 border border-b-0 bg-neutral-200 text-sm translate-y-px"
                >
                    {{ t(`project.${key}.title`) }}
                </h2>
            </div>
            <div class="border">
                <div class="bg-neutral-200 cursor-zoom-in pt-2 px-4 flex justify-center overflow-hidden">
                    <img :src="t(`project.${key}.image`).replace('/images/', '/images/thumb/')" 
                         @click="openImage(key, $event)" class="shadow-md object-cover object-top"/>
                </div>
            </div>
            <p
                class="text-sm px-3 py-1 border-x"
                :class="{
                    'border-b': !t(`project.${key}.link1.url`),
                }"
            >
                {{ t(`project.${key}.content`) }}
            </p>
            <div
                v-if="t(`project.${key}.link1.url`)"
                :class="{
                    'border-b':
                        t(`project.${key}.link1.url`) ||
                        t(`project.${key}.link2.url`),
                }"
                class="flex border [border-top-style:dashed] border-x"
            >
                <a
                    v-if="t(`project.${key}.link1.url`)"
                    :href="t(`project.${key}.link1.url`)"
                    class="flex gap-1 items-center text-sm px-3 py-1 border-t-0"
                >
                    <span class="text-sm! material-icons no-underline!"
                        >open_in_new</span
                    >
                    <span class="underline hover:decoration-dashed">
                        {{ t(`project.${key}.link1.name`) }}
                    </span>
                </a>
                <a
                    v-if="t(`project.${key}.link2.url`)"
                    :href="t(`project.${key}.link2.url`)"
                    class="flex gap-1 items-center text-sm py-1 border-t-0"
                >
                    <span class="text-sm! material-icons no-underline!"
                        >open_in_new</span
                    >
                    <span class="underline hover:decoration-dashed">
                        {{ t(`project.${key}.link2.name`) }}
                    </span>
                </a>
            </div>
        </div>
        <div class="break-inside-avoid mb-6">
            <div class="flex">
                <h2
                    class="font-bold px-3 py-1 border border-b-0 bg-neutral-200 text-sm translate-y-px"
                >
                    {{ t("project.more.title") }}
                </h2>
            </div>
            <div class="border">
                <div
                    class="bg-neutral-200 py-5 text-sm px-3 border-b border-dashed"
                >
                    {{ t("project.more.content") }}
                    <pre>
   \
    \    ^__^
     \   (oo)\_______
         (__)\       )\/\
             ||----w |
             ||     ||
         ^^^^^^^^^^^^^^^^</pre
                    >
                </div>
                <div class="flex border-t border-dashed">
                    <a
                        href="https://github.com/USERNAME"
                        class="flex gap-1 items-center text-sm px-3 py-1"
                    >
                        <span class="text-sm! material-icons no-underline!"
                            >open_in_new</span
                        >
                        <span class="underline hover:decoration-dashed"
                            >GitHub</span
                        >
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.pswp__img {
  background: transparent !important; /* atau warna sesuai background page */
  transition: opacity 0.2s ease;
}
</style>

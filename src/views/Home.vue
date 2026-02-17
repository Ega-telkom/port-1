<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import Greeting from '@components/Greetings.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n'
import * as AsciinemaPlayer from "asciinema-player";
import 'asciinema-player/dist/bundle/asciinema-player.css';
import '@/hacker.css';

const { t } = useI18n()
const loading = ref(false)

const playerContainer = ref<HTMLDivElement | null>(null)
const frame = ref('|')

const frames = ['|', '/', '-', '\\']
let i = 0
let timer: ReturnType<typeof setInterval>
let showTimer: ReturnType<typeof setTimeout>

function startSpinner() {
  timer = setInterval(() => {
    frame.value = frames[i]
    i = (i + 1) % frames.length
  }, 100)
}

function finishLoading() {
  clearTimeout(showTimer)
  loading.value = false
}

onMounted(() => {

  startSpinner()

  showTimer = setTimeout(() => {
    loading.value = true
  }, 1000)

  if (!playerContainer.value) return

  const player = AsciinemaPlayer.create(
    '/casts/lavat.cast',
    playerContainer.value,
    {
      terminalFontFamily: "'IBM Plex Mono', monospace",
      loop: true,
      autoPlay: true,
      controls: false,
      fit: false,
      theme: 'hacker',
    }
  )

  player.addEventListener('playing', () => {
    clearInterval(timer)
    finishLoading()
  })
});

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
    <div class="border-b border-gray48">
        <div class="max-w-6xl mx-auto border-x border-gray48">
            <img fetchpriority="high" class="w-full object-cover h-32 lg:h-48" src="/images/banner.webp"
                alt="Banner">
        </div>
    </div>

    <!-- content -->
    <div class="text-white main max-w-6xl mx-auto border-x border-gray48">
        <Greeting />

        <div class="bg-black h-64 overflow-hidden">
            <p class="pt-2" v-if="loading">&nbsp;{{ frame }} <span class="text-hacker">[INFO]</span> Downloading cast...</p>
            <p v-if="loading">&nbsp;{{ frame }} <span class="text-hacker">[INFO]</span> Loading playerContainer...</p>
            <p v-if="loading">&nbsp;{{ frame }} <span class="text-hacker">[INFO]</span> Finishing...</p>
            <div v-show="!loading" ref="playerContainer" class="player-container"></div>
        </div>

        <h2 class="overflow-hidden text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="about" class="hover:underline focus:underline" href="#about"><span class="border-r border-gray48">&nbsp;1&nbsp;</span> {{ t('home.about.title') }}</a></h2>
        <div class="bg-black pb-12 xl:pb-24 p-2 xl:p-5">
            <div class="flex mb-5">
                <a class="active:decoration-wavy hover:decoration-wavy underline" href="about.html">/about.html ></a>
            </div>
            <div class="grid xl:grid-cols-4 grid-cols-2 md:grid-cols-3 overflow-hidden gap-5 xl:gap-10">
                <a href="https://github.com/Ega-telkom" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/github.webp" alt="Github">
                    <p>Ega-telkom</p>
                    <span class="underline text-neutral-500">Github<span class="material-icons-outlined">open_in_new</span></span>
                </a>
                <a href="https://github.com/greneboy" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/github.webp" alt="Github">
                    <p>greneboy</p>
                    <span class="underline text-neutral-500">Github<span class="material-icons-outlined">open_in_new</span></span>
                </a>
                <a href="https://www.linkedin.com/in/ega-natha-29469434b/" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/linkedin.webp" alt="LinkedIn">
                    <p>Ega natha</p>
                    <span class="underline text-neutral-500">LinkedIn<span class="material-icons-outlined">open_in_new</span></span>
                </a>
                <a href="https://www.youtube.com/@Ega-y8k" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/youtube.webp" alt="YouTube">
                    <p>@Ega-y8k</p>
                    <span class="underline text-neutral-500">YouTube<span class="material-icons-outlined">open_in_new</span></span>
                </a>
            </div>
        </div>

        <h2 class="overflow-hidden text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="skills" class="hover:underline focus:underline" href="#skills"><span class="border-r border-gray48">&nbsp;2&nbsp;</span> {{ t('home.skill.title') }}</a></h2>
        <div class="bg-black pb-12 xl:pb-24 p-2 xl:p-5">
            <div class="flex pb-5">
                <span>In summary I like to program by programming, design by designing, do by doing.</span>
            </div>
            <div>
                <a class="active:decoration-wavy hover:decoration-wavy underline" href="skill.html">/skill.html ></a>
                <div class="border border-dashed border-gray48 flex flex-wrap gap-12 mt-5">
                    <img class="h-8 xl:h-12" src="/images/vim.webp" alt="Vim">
                    <img class="h-8 xl:h-12" src="/images/vscode.webp" alt="Visual Studio Code">
                    <img class="h-8 xl:h-12" src="/images/archlinux.webp" alt="Arch Linux">
                    <img class="h-8 xl:h-12" src="/images/tux.webp" alt="Tux">
                    <img class="h-8 xl:h-12" src="/images/c.webp" alt="C">
                    <img class="h-8 xl:h-12" src="/images/latex-logo.webp" alt="LaTeX">
                    <img class="h-8 xl:h-12" src="/images/osm.webp" alt="OpenSreetMap">
                    <img class="h-8 xl:h-12" src="/images/josm.webp" alt="JOSM">
                    <img class="h-8 xl:h-12" src="/images/bash.webp" alt="Bash">
                    <img class="h-8 xl:h-12" src="/images/html.webp" alt="HTML5">
                    <img class="h-8 xl:h-12" src="/images/nodejs.webp" alt="Node.js">
                    <img class="h-8 xl:h-12" src="/images/tailwind.webp" alt="Tailwind CSS">
                    <img class="h-8 xl:h-12" src="/images/css.webp" alt="CSS">
                    <img class="h-8 xl:h-12" src="/images/git.webp" alt="git">
                </div>
            </div>
        </div>

        <h2 class="overflow-hidden text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="projects" class="hover:underline focus:underline" href="#projects"><span class="border-r border-gray48">&nbsp;3&nbsp;</span> {{ t('home.project.title')}}</a></h2>
        <div class="bg-black pb-12 xl:pb-24 p-2 xl:p-5">
            <div class="flex pb-5">
                <span>port-1, Phostel, Delira, Form.</span>
            </div>
            <div>
                <a class="active:decoration-wavy hover:decoration-wavy underline" href="project.html">/project.html ></a>
                <div class="border border-dashed border-gray48 flex flex-wrap gap-12 mt-5">
                    <img class="h-8 xl:h-12" src="/images/icon.webp" alt="port-1">
                    <img class="h-8 xl:h-12" src="/images/project_phostel_icon.webp" alt="Phostel">
                    <img class="h-8 xl:h-12" src="/images/project_delira_icon.webp" alt="Delira">
                </div>
            </div>
        </div>

        <h2 class="overflow-hidden text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="contact" class="hover:underline focus:underline" href="#contact"><span class="border-r border-gray48">&nbsp;4&nbsp;</span>  {{ t('home.contact.title')}}</a></h2>
        <div class="bg-black pt-2 xl:pt-5">
            <form id="form" class="grid grid-cols-1 gap-5">
                <input type="email" placeholder="Email" id="498696631" name="entry.498696631" class="border hover:border-solid focus:border-solid border-dashed border-white p-3 bg-black" required>
                <textarea placeholder="Message..." id="223126343" name="entry.223126343" cols="30" rows="10" class="border hover:border-solid focus:border-solid border-dashed border-white p-3 bg-black" required></textarea>
                <button type="submit" class="border-dashed border border-hacker hover:bg-hacker hover:text-black focus:text-black focus:bg-hacker p-3">Kirim</button>
            </form>
        </div>
      </div>
</template>

<style scoped>
  :deep(.vch__legend) {
    display: none;
  }
</style>

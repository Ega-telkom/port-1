<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import Greeting from '@components/Greetings.vue'
import { ref, onMounted } from 'vue';
import { CalendarHeatmap } from 'vue3-calendar-heatmap';
import githubData from '@/data/Ega-telkom.json';

const heatmapData = githubData.contributions;
const containerRef = ref<HTMLElement>();

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.scrollLeft = containerRef.value.scrollWidth;
  }
});
</script>

<template>
    <div class="border-b border-gray48">
        <div class="max-w-7xl mx-auto border-x border-gray48">
            <img fetchpriority="high" class="w-full object-cover h-32 xl:h-48" src="/images/banner.webp"
                alt="Banner">
        </div>
    </div>

    <!-- content -->
    <div class="text-white main max-w-7xl mx-auto border-x border-gray48 px-2 xl:px-0">

        <span class="bg-black block text-neutral-600 text-sm">#h1-greet mb-10 xl:mb-20 flex</span>
        <Greeting />
        
        <div ref="containerRef" class="h-80 overflow-x-auto overflow-y-hidden">
          <CalendarHeatmap 
            :values="heatmapData" 
            :end-date="new Date()"
          />
        </div>

        <span class="block text-neutral-600 text-sm">#h2-who mb-12</span>
        <h2 class="text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="about" class="hover:underline focus:underline" href="#about"># Who Am I?</a></h2>
        <div class="bg-black pb-12 xl:pb-24 p-2 xl:p-5">
            <div class="flex mb-5">
                <a class="active:decoration-wavy hover:decoration-wavy underline" href="about.html">/about.html ></a>
            </div> 
            <div class="grid xl:grid-cols-4 grid-cols-2 md:grid-cols-3 overflow-hidden gap-5 xl:gap-10">
                <a href="https://github.com/Ega-telkom" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/github.webp" alt="Github">
                    <p>Ega-telkom</p>
                    <span class="underline">Github<span class="material-icons-outlined">open_in_new</span></span>
                </a>
                <a href="https://github.com/greneboy" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/github.webp" alt="Github">
                    <p>greneboy</p>
                    <span class="underline">Github<span class="material-icons-outlined">open_in_new</span></span>
                </a>
                <a href="https://www.linkedin.com/in/ega-natha-29469434b/" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/linkedin.webp" alt="LinkedIn">
                    <p>Ega natha</p>
                    <span class="underline">LinkedIn<span class="material-icons-outlined">open_in_new</span></span>
                </a>
                <a href="https://www.youtube.com/@Ega-y8k" target="_blank" rel="noopener noreferrer" class="border border-dashed border-gray48 hover:border-solid focus:border-solid cursor-pointer">
                    <img class="xl:h-8 h-6 mb-5" src="/images/youtube.webp" alt="YouTube">
                    <p>@Ega-y8k</p>
                    <span class="underline">YouTube<span class="material-icons-outlined">open_in_new</span></span>
                </a>
            </div>
        </div>

        <span class="bg-black block text-neutral-600 text-sm">#h2-skills mb-12</span>
        <h2 class="text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="skills" class="hover:underline focus:underline" href="#skills"># Skills &#8595;</a></h2>
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

        <span class="bg-black block text-neutral-600 text-sm">#h2-projects</span>
        <h2 class="text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="projects" class="hover:underline focus:underline" href="#projects"># Projects &#8595;</a></h2>
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

        <span class="bg-black block text-neutral-600 text-sm">#h2-contact mb-12</span>
        <h2 class="text-3xl xl:text-5xl border-y border-dashed border-gray48"><a name="contact" class="hover:underline focus:underline" href="#contact"># Contact &#8595;&#8595;</a></h2>

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
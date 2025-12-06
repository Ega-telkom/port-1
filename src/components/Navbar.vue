<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <!-- navigation bar -->
    <nav class="h-16 z-2 border-b border-gray48">
        <div class="max-w-7xl mx-auto flex flex-wrap h-full items-center justify-between mx-auto border-x px-5 border-gray48">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/logo.webp" alt="Logo" class="h-7 md:h-5">
            </RouterLink>

            <!-- hamburger menu-->
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center text-sm md:hidden cursor-pointer" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <img class="h-7 md:h-5" src="/images/menu.webp" alt="Menu icon">
            </button>

            <!-- navbar menu -->
            <div class="mt-5 flex md:mt-0 hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="gap-3 font-medium flex flex-col md:p-0 mt-0 md:gap-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                    <li>
                        <a class="bg-hacker hover:underline primary text-neutral-950" href="/misc/CV.pdf">Download CV</a>
                    </li>
                    <li>
                        <RouterLink to="/about" class="text-white block md:border-0 md:p-0 hover:underline navigation ">/about</RouterLink>
                    </li>
                    <li>
                        <a href="project.html" class="text-white block md:border-0 md:p-0 hover:underline navigation ">/project</a>
                    </li>
                    <li>
                        <a href="skill.html" class="text-white block md:border-0 md:p-0 hover:underline navigation ">/skill</a>
                    </li>
                    <li class="text-white">
                        <span class="underline" title="English (Selected)">>EN</span>
                        <span>/</span>
                        <a href="id/" class="hover:underline" title="Bahasa Indonesia">ID</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>
<template>
    <!-- footer -->
    <footer class="border p-2">
      <h2 class="border-b text-neutral-500 border-neutral-500 font-bold mb-4">
        <a name="this-site" class="hover:underline focus:underline" href="#this-site">
          {{ t('footer.title') }}
        </a>
      </h2>
        <!-- <span class="bg-black block text-neutral-600 text-sm">#footer text-white p-4</span> -->
        <div class="mx-auto w-full max-w-6xl">
            <div class="md:flex md:justify-between pb-15 lg:pb-20">
                <div class="grid grid-cols-1 gap-10 lg:gap-5 sm:grid-cols-2">
                    <div>
                      <h2 class="mb-2 text-sm text-neutral-400 uppercase">
                        {{ t('footer.social.title') }}
                      </h2>
                        <ul class="flex xl:grid gap-2">
                            <li class="">
                                <a href="https://github.com/Ega-telkom/" target="_blank" rel="noopener noreferrer" class="underline">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ega-natha-29469434b/" target="_blank" rel="noopener noreferrer" class="underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                      <h2 class="mb-2 text-sm text-neutral-400 uppercase">
                        {{ t('footer.title') }}
                      </h2>
                      <ul class="flex xl:grid gap-2">
                        <li>
                          <a href="about.html" class="underline">About</a>
                        </li>
                        <li>
                          <a href="skill.html" class="underline">Skills</a>
                        </li>
                        <li>
                          <a href="https://github.com/Ega-telkom/port-1" target="_blank" rel="noopener noreferrer" class="underline">Source Code</a>
                        </li>
                      </ul>
                    </div>
                    <div class="w-auto">
                        <h2 class="mb-2 text-sm text-neutral-400 uppercase">Address</h2>
                        <p class="pr-10">SMK Telkom Purwokerto, Jalan Mayor Jenderal DI. Panjaitan, Teluk, Purwokerto, Banyumas, Central Java, Java, 53141</p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="sm:mx-auto">
        <div class="grid mt-2">
          <div class="mx-auto w-full max-w-6xl">
            <div class="flex justify-between">
              <span class="sm:text-center">(C) 2026 Ega, <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer" class="hover:underline">MIT License</a>. Indie·Indeed(TM)</span>
              <div>
                <span class="bg-red-500">&nbsp;DEV&nbsp;</span>
                <!--<span class="bg-hacker">&nbsp;PROD&nbsp;</span>-->
                <span class="bg-black text-white">&nbsp;v2.0.0&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
    </footer>
</template>

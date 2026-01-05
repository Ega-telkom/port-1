<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import type { Map } from 'leaflet'

// Ref dengan type
const mapContainer = ref<HTMLDivElement | null>(null)
let map: Map | null = null

// Fix default icon
const DefaultIcon = L.icon({
  iconUrl: '/images/logo.webp',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [-3, -76],
})

L.Marker.prototype.options.icon = DefaultIcon

onMounted(() => {
  if (!mapContainer.value) return
  
  // Inisialisasi map
  map = L.map(mapContainer.value).setView([-7.435167, 109.250249], 9)
  
  // Tambahkan tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)
  
  // Tambahkan marker
  L.marker([-7.435167, 109.250249])
    .addTo(map)
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>
<template>
    <!-- footer -->
    <footer class="text-white border-t border-gray48">
        <!-- <span class="bg-black block text-neutral-600 text-sm">#footer text-white p-4</span> -->
        <div class="mx-auto w-full max-w-6xl border-x border-gray48">
            <div class="mb-12"><img class="h-20 xl:h-30" src="/images/large.webp" alt=""></div>
            <div class="md:flex md:justify-between pb-15 lg:pb-20">
                <div class="grid grid-cols-1 gap-10 lg:gap-5 sm:grid-cols-2">
                    <div>
                        <h2 class="mb-2 text-sm text-neutral-400 uppercase">Socials</h2>
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
                        <h2 class="mb-2 text-sm text-neutral-400 uppercase">See Also</h2>
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
    </footer>
    <hr class="border-neutral-950 sm:mx-auto">
    <div class="grid border-y border-gray48">
        <div class="mx-auto w-full max-w-6xl border-x border-gray48">
            <div class="flex justify-between">
                <span class="text-sm text-white sm:text-center">(C) 2025 Ega, <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer" class="hover:underline">MIT License</a>. Indie·Indeed(TM)</span>
                <div>
                    <span class="bg-hacker">&nbsp;PROD&nbsp;</span>
                    <span class="bg-gray48 text-white">&nbsp;v1.5&nbsp;</span> 
                </div>
            </div>
        </div>
    </div>
        <div class="mx-auto w-full max-w-6xl border-x border-gray48">
            <div class="box bg-transparent">&nbsp;</div>
            <div class="box bg-transparent">&nbsp;</div>
            <div class="box bg-transparent">&nbsp;</div>
            <div class="box bg-transparent">&nbsp;</div>
        </div>
    
</template>
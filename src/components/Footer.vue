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
        <div class="mx-auto w-full max-w-7xl border-x border-gray48">
            <div class="mb-12"><img class="h-20 xl:h-30" src="/images/large.webp" alt=""></div>
            <div class="md:flex md:justify-between">
                <div class="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase border-y border-dashed border-gray48">Socials</h2>
                        <ul class="font-medium flex xl:grid gap-5">
                            <li class="">
                                <a href="https://github.com/Ega-telkom/" target="_blank" rel="noopener noreferrer" class="hover:underline">Github<span class="material-icons-outlined">open_in_new</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ega-natha-29469434b/" target="_blank" rel="noopener noreferrer" class="hover:underline">LinkedIn<span class="material-icons-outlined">open_in_new</span></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase border-y border-dashed border-gray48">See Also</h2>
                        <ul class="font-medium flex xl:grid gap-5">
                            <li>
                                <a href="about.html" class="hover:underline">About</a>
                            </li>
                            <li>
                                <a href="skill.html" class="hover:underline">Skills</a>
                            </li>
                            <li>
                                <a href="https://github.com/Ega-telkom/port-1" target="_blank" rel="noopener noreferrer" class="hover:underline">Source Code<span class="material-icons-outlined">open_in_new</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-auto">
                        <h2 class="mb-6 text-sm font-semibold uppercase border-y border-dashed border-gray48">Address</h2>
                        <p>SMK Telkom Purwokerto, Jalan Mayor Jenderal DI. Panjaitan, Teluk, Purwokerto, Banyumas, Central Java, Java, 53141</p>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold uppercase border-y border-dashed border-gray48">Maps</h2>
                        <div ref="mapContainer" style="height: 400px; width: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <hr class="border-neutral-950 sm:mx-auto">
    <div class="grid border-y border-gray48">
        <div class="mx-auto w-full max-w-7xl border-x border-gray48">
            <div class="box bg-hacker"><span class="text-sm text-black sm:text-center">(C) 2025 Ega, <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer" class="hover:underline">MIT License</a>. Indie·Indeed(TM)</span></div>
            <div class="box bg-black">&nbsp;</div>
            <div class="box bg-gray24">&nbsp;</div>
            <div class="box bg-gray48">&nbsp;</div>
            <div class="box bg-white">&nbsp;</div>
        </div>
    </div>
        <div class="mx-auto w-full max-w-7xl border-x border-gray48">
            <div class="box bg-transparent">&nbsp;</div>
            <div class="box bg-transparent">&nbsp;</div>
            <div class="box bg-transparent">&nbsp;</div>
            <div class="box bg-transparent">&nbsp;</div>
        </div>
    
</template>
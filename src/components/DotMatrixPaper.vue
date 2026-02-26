<template>
  <div ref="containerRef" class="dot-matrix-paper" :class="props.class">
    <div class="holes-strip holes-left" aria-hidden="true">
      <div v-for="n in holeCount" :key="'l-' + n" class="hole" />
    </div>

    <div ref="contentRef" class="paper-content">
      <slot />
    </div>

    <div class="holes-strip holes-right" aria-hidden="true">
      <div v-for="n in holeCount" :key="'r-' + n" class="hole" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  class: String,
  holeSize: { type: Number, default: 16 },
  holeGap: { type: Number, default: 24 },
  stripWidth: { type: Number, default: 32 },
})

const containerRef = ref(null)
const contentRef = ref(null)
const holeCount = ref(1)

function recalc() {
  if (!contentRef.value) return
  const h = contentRef.value.offsetHeight
  holeCount.value = Math.max(1, Math.floor(h / (props.holeSize + props.holeGap)))
}

let ro
onMounted(async () => {
  await nextTick()
  recalc()
  ro = new ResizeObserver(recalc)
  ro.observe(contentRef.value)
})
onBeforeUnmount(() => ro?.disconnect())
</script>

<style scoped>
.dot-matrix-paper {
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  border: 1px solid #000000;
  align-items: flex-start; /* TAMBAH INI */
  position: relative;
  /* HAPUS min-height — ini yang bikin container ga mau mengecil */
}

.holes-strip {
  width: v-bind('props.stripWidth + "px"');
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: v-bind('props.holeGap/2 + "px"') 0;
  gap: v-bind('props.holeGap + "px"');
  flex-shrink: 0;
  overflow: hidden; /* PENTING: biar lubang ga nahan tinggi */
}

.holes-left {
  border-right: 1px dashed #000000;
}

.holes-right {
  border-left: 1px dashed #000000;
}

@media (max-width: 640px) {
  .holes-right, .holes-left { display: none; }
}

.hole {
  width: v-bind('props.holeSize + "px"');
  height: v-bind('props.holeSize + "px"');
  border-radius: 50%;
  background: white;
  border: 1px solid #000000;
  flex-shrink: 0;
}

.paper-content {
  flex: 1;
  align-self: flex-start; /* TAMBAH INI */
  padding: 0.8rem;
  background-size: 100% 24px;
}
</style>

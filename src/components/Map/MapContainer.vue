<template>
  <div ref="container" class="relative w-full h-full overflow-hidden bg-gray-200 touch-none" @mousedown="startDrag"
    @mousemove="onDrag" @mouseup="endDrag" @mouseleave="endDrag" @wheel.prevent="onWheel" @pointermove="onPointerMove"
    @pointerup="onPointerUp" @pointercancel="onPointerUp">
    <img @pointerdown.self="onPointerDown" ref="image" :src="src" alt="Image Viewer" draggable="false"
      @load="onImageLoad"
      class="select-none cursor-grab absolute top-1/2 left-1/2 max-w-none rounded-b-4xl will-change-transform" :style="{
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transformOrigin: 'center center'
      }" />

    <div v-for="marker in markers" :key="marker.id" class="absolute isolate" :style="markerStyle(marker)">
      <div class="w-5 h-5 rounded-full bg-red-500 border-3 shadow cursor-pointer relative"
        :style="`border-color: ${marker.color};`" @click.stop="toggleMarker(marker)">
      </div>
    </div>
    <div v-if="activeMarker" class="absolute isolate" :style="markerStyle(activeMarker)">
      <div class="w-5 h-5 rounded-full bg-red-500 border-3 shadow cursor-pointer relative z-100"
        :style="`border-color: ${activeMarker.color};`" @click.stop="toggleMarker(activeMarker)">
      </div>

      <transition name="fade">
        <div v-if="activeMarker"
          :class="cn('absolute w-48 bg-white-primary rounded-lg shadow-lg p-2 text-sm', getTooltipPosition(activeMarker))">
          <div class="font-semibold text-gray-800">{{ activeMarker.name }}</div>
          <div class="text-gray-600">{{ activeMarker.description }}</div>
        </div>
      </transition>
    </div>

    <div class="absolute top-2 right-2 flex flex-col gap-2">
      <button class="bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100"
        @click="zoomIn">
        +
      </button>
      <button class="bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100"
        @click="zoomOut">
        –
      </button>
    </div>
  </div>
</template>

<script setup
  lang="ts">
  import { cn } from '@/lib/utils';
  import type { Marker } from '@/types/marker';
  import { serverMarkers } from '@/utils/serverMarkers';
  import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

  interface Props {
    src: string;
    maxScale?: number;
    zoomStep?: number;
  }
  const props = defineProps<Props>();

  const markers = ref<Marker[]>([]);
  serverMarkers.forEach((marker) => {
    marker.markers.forEach((m) => {
      markers.value.push(m)
    })
  })

  const container = ref<HTMLDivElement | null>(null);
  const image = ref<HTMLImageElement | null>(null);

  const naturalSize = reactive({ w: 0, h: 0 });
  const scale = ref(1);
  const minScale = ref(1);
  const maxScale = ref(props.maxScale ?? 5);
  const position = reactive({ x: 0, y: 0 });

  const isDragging = ref(false);
  const dragStart = reactive({ x: 0, y: 0 });

  const isPinching = ref(false);
  const pointers = new Map<number, { x: number; y: number }>();
  let initialPinchDist = 0;
  let initialScale = 1;
  let pinchCenter = { x: 0, y: 0 };

  let ro: ResizeObserver | null = null;

  function recomputeMinScale() {
    if (!container.value || !naturalSize.w || !naturalSize.h) return;
    const { width: cw, height: ch } = container.value.getBoundingClientRect();
    const sX = cw / naturalSize.w;
    const sY = ch / naturalSize.h;
    const nextMin = Math.max(sX, sY);
    minScale.value = nextMin;
    if (scale.value < nextMin) scale.value = nextMin;
    const c = clampPosition(position.x, position.y);
    position.x = c.x;
    position.y = c.y;
  }

  function clampPosition(x: number, y: number) {
    if (!container.value) return { x, y };
    const { width: cw, height: ch } = container.value.getBoundingClientRect();
    const iw = naturalSize.w * scale.value;
    const ih = naturalSize.h * scale.value;
    const maxX = Math.max(0, (iw - cw) / 2);
    const maxY = Math.max(0, (ih - ch) / 2);
    return { x: Math.min(maxX, Math.max(-maxX, x)), y: Math.min(maxY, Math.max(-maxY, y)) };
  }

  function getContainerCenter() {
    const rect = container.value!.getBoundingClientRect();
    return { cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 };
  }

  function startDrag(e: MouseEvent) {
    if (isPinching.value) return;
    isDragging.value = true;
    dragStart.x = e.clientX - position.x;
    dragStart.y = e.clientY - position.y;
  }

  function onDrag(e: MouseEvent) {
    if (!isDragging.value) return;
    const nx = e.clientX - dragStart.x;
    const ny = e.clientY - dragStart.y;
    const c = clampPosition(nx, ny);
    position.x = c.x;
    position.y = c.y;
  }

  function endDrag() {
    isDragging.value = false;
  }

  function zoomAt(cx: number, cy: number, direction: 'in' | 'out') {
    const step = props.zoomStep ?? 0.2;
    const from = scale.value;
    const to =
      direction === 'in'
        ? Math.min(from + step, maxScale.value)
        : Math.max(from - step, minScale.value);
    if (to === from) return;

    const { cx: ccx, cy: ccy } = getContainerCenter();
    const dx = cx - ccx;
    const dy = cy - ccy;
    position.x += dx * (1 - to / from);
    position.y += dy * (1 - to / from);

    scale.value = to;
    const c = clampPosition(position.x, position.y);
    position.x = c.x;
    position.y = c.y;
  }

  function onWheel(e: WheelEvent) {
    zoomAt(e.clientX, e.clientY, e.deltaY < 0 ? 'in' : 'out');
  }

  function zoomIn() {
    const { cx, cy } = getContainerCenter();
    zoomAt(cx, cy, 'in');
  }
  function zoomOut() {
    const { cx, cy } = getContainerCenter();
    zoomAt(cx, cy, 'out');
  }

  function onPointerDown(e: PointerEvent) {
    activeMarker.value = null;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  }
  function onPointerMove(e: PointerEvent) {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size === 2) {
      const pts = Array.from(pointers.values());
      const dx = pts[0].x - pts[1].x;
      const dy = pts[0].y - pts[1].y;
      const dist = Math.hypot(dx, dy);

      if (!isPinching.value) {
        isPinching.value = true;
        initialPinchDist = dist;
        initialScale = scale.value;
        pinchCenter = {
          x: (pts[0].x + pts[1].x) / 2,
          y: (pts[0].y + pts[1].y) / 2,
        };
      } else {
        const ratio = dist / initialPinchDist;
        const newScale = Math.min(Math.max(initialScale * ratio, minScale.value), maxScale.value);
        const { cx, cy } = getContainerCenter();
        const dxCenter = pinchCenter.x - cx;
        const dyCenter = pinchCenter.y - cy;
        position.x += dxCenter * (1 - newScale / scale.value);
        position.y += dyCenter * (1 - newScale / scale.value);
        scale.value = newScale;
        const c = clampPosition(position.x, position.y);
        position.x = c.x;
        position.y = c.y;
      }
    }
  }
  function onPointerUp(e: PointerEvent) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) {
      isPinching.value = false;
    }
  }

  function onImageLoad() {
    if (!image.value) return;
    naturalSize.w = image.value.naturalWidth;
    naturalSize.h = image.value.naturalHeight;
    recomputeMinScale();
    position.x = 0;
    position.y = 0;
  }

  onMounted(() => {
    if (container.value) {
      ro = new ResizeObserver(() => recomputeMinScale());
      ro.observe(container.value);
    }
  });
  onBeforeUnmount(() => {
    ro?.disconnect();
  });

  function markerStyle(marker: Marker) {
    if (!image.value) return {}

    const imgW = naturalSize.w * scale.value
    const imgH = naturalSize.h * scale.value
    const offsetX = (marker.x - 0.5) * imgW
    const offsetY = (marker.y - 0.5) * imgH

    return {
      left: '50%',
      top: '50%',
      transform: `translate(-50%, -50%) translate(${position.x + offsetX}px, ${position.y + offsetY}px)`,
      zIndex: 10
    }
  }

  const activeMarker = ref<Marker | null>(null)
  function toggleMarker(marker: Marker) {
    if (!activeMarker.value) {
      activeMarker.value = marker
      markers.value.filter(m => m.id !== marker.id)
      return
    }
    if (activeMarker.value.id === marker.id) {
      activeMarker.value = null
      if (markers.value.find(m => m.id === marker.id)) return
      markers.value.push(marker)
      return
    }
    activeMarker.value = marker
    markers.value.filter(m => m.id !== marker.id)
    return
  }

  function getTooltipPosition(marker: Marker) {
    if (marker.tooltip === 'top') {
      return 'bottom-6 left-1/2 -translate-x-1/2'
    }
    if (marker.tooltip === 'left') {
      return 'top-1/2 left-6 -translate-y-1/2'
    }
    if (marker.tooltip === 'right') {
      return 'top-1/2 right-6 -translate-y-1/2'
    }
    return 'top-6 left-1/2 -translate-x-1/2'
  }
</script>

<style scoped>
.cursor-grab:active {
  cursor: grabbing;
}
</style>

<script setup
  lang="ts">
  import { ref } from 'vue';
  import MarkersList from './Markers/MarkersList.vue';
  import type { MarkerList } from '@/types/marker';
  import { serverMarkers } from '@/utils/serverMarkers';



  const markers = ref<MarkerList[]>(serverMarkers)

</script>

<template>

  <div class="px-8 py-2">
    <h1>
      Список локаций
    </h1>
    <div v-for="markerList in markers" :key="markerList.title">
      <MarkersList :title="markerList.title" :markers="markerList.markers" />
    </div>
  </div>

</template>

<style scoped>
h1 {
  color: var(--color-white-primary);
  font-size: 48px;
  font-weight: bold;
}
</style>

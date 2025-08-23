<script setup
  lang="ts">
  import MapContainer from '@/components/Map/MapContainer.vue';
  import MarkersContainer from '@/components/Map/MarkersContainer.vue';

</script>

<template>

  <div class="flex items-center justify-center map-size p-4 bg-semi-transparent overflow-hidden space-x-4">
    <div class="h-full aspect-square">
      <MapContainer src="/high_res_chernarus_sa_map_edited.jpg" />
    </div>
    <div class="h-full w-[500px] bg-semi-transparent">
      <MarkersContainer />
    </div>
  </div>


</template>

<style scoped>
.bg-semi-transparent {
  background-color: rgba(86, 77, 93, 0.1);
}

.map-size {
  height: calc(100dvh - 96px);
}
</style>

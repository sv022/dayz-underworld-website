<script setup
  lang="ts">
  import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <div class="background">
    <div class="foreground">
      <NavBar />
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('/underworld_bg.png');
  /* Adjust path as needed */
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  /* Optional: adjust image positioning */
  background-blend-mode: soft-light;
  height: 100%;
}

.foreground {
  background-color: rgba(52, 52, 52, 0.5);
  height: 100%;
}
</style>

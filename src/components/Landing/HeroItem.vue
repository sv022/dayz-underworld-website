<script setup
  lang="ts">
  import { ArrowRightIcon } from 'lucide-vue-next';
  import Button from '../ui/button/Button.vue';

</script>

<template>

  <div class="flex flex-col h-lvh min-h-[300px] items-center gap-11 p-10">
    <h1 class="text-cardinal-red">Underworld PVE</h1>
    <p class="text-white-secondary w-[520px] text-center p-2">
      Уникальные локации, грозные противники и огромное
      разнообразние
      контента -
      погрузитесь в атмосферу жизни в
      суровом мире после конца света
    </p>
    <a href="https://wargm.ru/server/74881" target="_blank">
      <Button
        class="flex items-center text-center w-40 bg-cardinal-red hover:bg-cardinal-red-highlight py-8 font-bold text-xl">
        <p>Играть</p>
        <ArrowRightIcon class="size-7" />
      </Button>
    </a>
  </div>

</template>

<style scoped>
h1 {
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-weight: Regular;
  font-size: 86px;
  text-align: center;
}
</style>

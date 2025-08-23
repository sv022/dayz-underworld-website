<script setup
  lang="ts">
  import { ArrowRightIcon, Hexagon } from 'lucide-vue-next';
  import Button from './ui/button/Button.vue';

</script>

<template>

  <header id="header" class="flex items-center justify-between h-20 px-4 md:px-32 sticky top-0 z-50">
    <div class="flex items-center justify-start basis-1/3">
      <a href="/">
        <span class="flex items-center justify-center text-white-primary font-bold space-x-2">
          <Hexagon />
          <p>Underworld</p>
        </span>
      </a>
    </div>

    <nav class="flex justify-center items-center basis-1/3 px-4 gap-10 text-white-secondary text-nowrap">

      <a href="#about">О проекте</a>

      <a href="/shop">Магазин</a>

      <a href="/map">Карта</a>

      <a href="https://discord.com/invite/yWE39QEQbn" target="_blank">Наш дискорд</a>

    </nav>

    <div class="flex items-center justify-end basis-1/3">
      <Button
        class="w-3xs h-11 bg-transparent hover:bg-transparent hover:border-cardinal-red-highlight hover:text-cardinal-red-highlight border border-cardinal-red text-cardinal-red">
        <span class="px-4">Войти c помощью Steam</span>
        <ArrowRightIcon />
      </Button>
    </div>

  </header>

</template>

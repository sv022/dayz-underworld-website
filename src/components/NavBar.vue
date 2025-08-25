<script setup
  lang="ts">
  import { ArrowRightIcon, Hexagon, LogOut } from 'lucide-vue-next';
  import Button from './ui/button/Button.vue';
  import { useUserStore } from '@/stores/user';
  import { storeToRefs } from 'pinia';
  import { RouterLink, useRoute } from 'vue-router';


  const realm = import.meta.env.VITE_STEAM_AUTH_SERVER_PATH
  const authPath = import.meta.env.VITE_AUTH_SERVER_GET_STEAMID_PATH

  const userStore = useUserStore()

  const { isLoggedIn, username } = storeToRefs(userStore)

</script>

<template>

  <header id="header" class="flex items-center justify-between h-20 px-4 md:px-32 sticky top-0 z-50">
    <div class="flex items-center justify-start basis-1/3">
      <RouterLink to="/">
        <span class="flex items-center justify-center text-white-primary font-bold space-x-2">
          <Hexagon />
          <p>Underworld</p>
        </span>
      </RouterLink>
    </div>

    <nav class="flex justify-center items-center basis-1/3 px-4 gap-10 text-white-secondary text-nowrap">


      <a v-if="useRoute().path === '/'" href='#about'>О проекте</a>
      <RouterLink v-else to="/">О проекте</RouterLink>

      <RouterLink to="/shop">Магазин</RouterLink>

      <RouterLink to="/map">Карта</RouterLink>

      <a href="https://discord.com/invite/yWE39QEQbn" target="_blank">Наш дискорд</a>

    </nav>

    <div class="flex items-center justify-end basis-1/3">
      <div v-if="isLoggedIn" class="flex items-center md:space-x-8">
        <RouterLink to="/profile">
          <h4 class="text-white-primary font-bold text-xl">{{ username }}</h4>
        </RouterLink>
        <LogOut class=" text-cardinal-red cursor-pointer" @click="userStore.logout" />
      </div>
      <a v-else :href="realm + authPath">
        <Button
          class="w-3xs h-11 bg-transparent hover:bg-transparent hover:border-cardinal-red-highlight hover:text-cardinal-red-highlight border border-cardinal-red text-cardinal-red">
          <span class="px-4">Войти c помощью Steam</span>
          <ArrowRightIcon />
        </Button>
      </a>
    </div>

  </header>

</template>

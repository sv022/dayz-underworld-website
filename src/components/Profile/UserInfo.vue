<script setup
  lang="ts">

  import { useUserStore } from '@/stores/user';
  import { storeToRefs } from 'pinia';

  const userStore = useUserStore()
  const { steamID, username, profileURL } = storeToRefs(userStore)

</script>

<template>

  <div class="flex flex-col py-8 gap-16 text-left line-clamp-1">
    <div class="flex px-8">
      <h3>Steam ID</h3>
      <p>{{ steamID }}</p>
    </div>
    <div class="flex px-8">
      <h3>Имя пользователя</h3>
      <p>{{ username }}</p>
    </div>
    <div class="flex px-8">
      <h3>Профиль</h3>
      <a :href="profileURL" target="_blank">
        <p>{{ profileURL }}</p>
      </a>
    </div>
  </div>

</template>
<style scoped>
h3 {
  color: var(--color-white-primary);
  font-size: 18px;
  font-weight: bold;
  flex-basis: 50%;
}

p {
  color: var(--color-white-primary);
  font-size: 16px;
  line-clamp: 1;
}
</style>

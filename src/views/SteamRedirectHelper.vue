<script setup
  lang="ts">
  import router from '@/router';
  import { useUserStore } from '@/stores/user';
  import { Loader } from 'lucide-vue-next';
  import { useRoute } from 'vue-router';

  console.log(useRoute().query)

  const steamID = useRoute().query.steamid!.toString()
  const username = useRoute().query.username!.toString()
  const profileURL = useRoute().query.profileurl!.toString()

  const userStore = useUserStore()

  userStore.login(steamID, username, profileURL)

  router.push({ name: 'home' })
</script>

<template>

  <div class="flex items-center justify-center container-height">
    <Loader class="animate-spin text-cardinal-red" />
  </div>

</template>

<style scoped>
.container-height {
  height: calc(100vh - 86px);
}
</style>

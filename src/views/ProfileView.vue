<script setup
  lang="ts">
  import EmptyTab from '@/components/Profile/EmptyTab.vue';
  import UserInfo from '@/components/Profile/UserInfo.vue';
  import Button from '@/components/ui/button/Button.vue';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  import { ref } from 'vue';

  interface Tab {
    name: string
    title: string
  }

  const tabSelected = ref('info')

  const tabs = ref<Tab[]>([
    {
      name: 'info',
      title: 'Информация'
    },
    {
      name: 'purchases',
      title: 'Покупки'
    },
    {
      name: 'payments',
      title: 'Платежи'
    },
    {
      name: 'promocodes',
      title: 'Промокоды'
    }
  ])
</script>


<template>

  <div class="flex items-center justify-center container-height w-full px-60 py-10">
    <div class="flex h-full w-full max-w-[1080px] bg-semi-transparent overflow-hidden">
      <Tabs v-model="tabSelected" class="w-full" default-value="info" orientation="vertical">
        <TabsList>
          <TabsTrigger v-for="tab in tabs" :key="tab.name" :value="tab.name">
            <Button :variant="tabSelected === tab.name ? 'default' : 'outline'" class="w-36 h-12 font-bold">{{
              tab.title }}</Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <UserInfo />
        </TabsContent>
        <TabsContent value="purchases">
          <EmptyTab />
        </TabsContent>
        <TabsContent value="payments">
          <EmptyTab />
        </TabsContent>
        <TabsContent value="promocodes">
          <EmptyTab />
        </TabsContent>
      </Tabs>
    </div>

  </div>

</template>
<style scoped>
.container-height {
  height: calc(100vh - 86px);
}

.bg-semi-transparent {
  background-color: rgba(86, 77, 93, 0.1);
}
</style>

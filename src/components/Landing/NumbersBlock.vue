<script setup
  lang="ts">
  import NumbersItem from './Numbers/NumbersItem.vue';
  const numbersList = [
    {
      title: '20+',
      text: 'Проработанных атмосферных локаций'
    },
    {
      title: '100+',
      text: 'Сюжетных и ежедневных квестов'
    },
    {
      title: '50+',
      text: 'Различных рецептов крафта'
    }
  ]
</script>

<template>

  <div class="w-full px-32 pb-12">
    <div class="flex gap-10">
      <NumbersItem class="basis-1/3" v-for="item in numbersList" :title="item.title" :text="item.text"
        :key="item.title" />
    </div>
  </div>

</template>

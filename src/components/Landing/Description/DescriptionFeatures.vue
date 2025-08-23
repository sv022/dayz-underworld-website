<script setup
  lang="ts">
  import FeatureItem from './FeatureItem.vue';

  const featuresList = [
    {
      title: 'Проработанные сюжетные и ежедневные квесты',
      description: 'Выполняй различные задания и получай ценные награды, исследуй мир Underworld, находи скрытые загадки и секреты и стань первопроходцем в новом суровом мире.'
    },
    {
      title: 'Аномалии, добыча руды и многое другое',
      description: 'Уникальные игровые механики, которые позволяют с головой погрузиться в атмосферу выживания и борьбы за ресурсы сделают ваш геймплей разнообразным и не дадут заскучать'
    },
    {
      title: 'Уникальное снаряжение и транспорт',
      description: 'На нашем сервере представлено огромное разнообразие снаряжения, оружия и транспорта на любой вкус - заходи и собери собственный набор лучшего снаряжения для выживания'
    }
  ]


</script>

<template>

  <div class="flex items-center justify-between px-32 py-12 pb-10">
    <div class="flex flex-col basis-[40%] gap-12">
      <FeatureItem v-for="feature in featuresList" :title="feature.title" :description="feature.description"
        :key="feature.title" />
    </div>
    <div class="w-1/2 aspect-video -translate-y-16">
      <img class="rounded-2xl" src="/danz.png" alt="danz">
    </div>
  </div>

</template>

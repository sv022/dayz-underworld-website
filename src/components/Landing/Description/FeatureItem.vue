<script setup
  lang="ts">

  import { ArrowRight } from 'lucide-vue-next';

  const props = defineProps<{
    title: string,
    description: string
  }>();

</script>

<template>

  <div class="flex gap-4">
    <ArrowRight class="size-6 my-3 text-cardinal-red" />
    <div class="flex flex-col gap-6">
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>
    </div>
  </div>

</template>

<style scoped>
h3 {
  color: var(--color-white-primary);
  font-size: 30px;
  font-weight: bold;
}

p {
  color: var(--color-white-secondary);
  font-size: 16px;
}

.width-40 {
  width: 40%;
}
</style>

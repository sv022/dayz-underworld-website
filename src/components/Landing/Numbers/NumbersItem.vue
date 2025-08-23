<script setup
  lang="ts">
  const props = defineProps<{
    title: string,
    text: string
  }>();

</script>

<template>

  <div class="flex flex-col gap-4 items-center">
    <h2>
      {{ props.title }}
    </h2>
    <p>
      {{ props.text }}
    </p>
  </div>

</template>

<style scoped>
h2 {
  width: 100%;
  text-align: center;
  color: var(--color-white-primary);
  font-size: 96px;
  font-weight: bold;
  border-bottom: 1px solid var(--color-lavander);
}

p {
  color: var(--color-white-secondary);
  font-size: 16px;
}
</style>

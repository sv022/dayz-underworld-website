<template>

  <div class="container-height">
    <div class="flex flex-col items-center text-center justify-between pt-32 px-32 overflow-hidden">
      <div>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
      </div>
      <a class="text-white-secondary mt-16" href="/">Вернуться на главную</a>
    </div>
  </div>


</template>
<style scoped>
.container-height {
  height: 100%;
  overflow: hidden;
}

h1 {
  color: var(--color-cardinal-red);
  font-size: 96px;
  font-weight: bold;
}

h2 {
  color: var(--color-white-primary);
  font-size: 48px;
  font-weight: bold;
}
</style>

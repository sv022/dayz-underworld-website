<script setup
  lang="ts">
  import Button from '../ui/button/Button.vue';

</script>

<template>

  <div class="w-full px-32 py-12 bg-semi-transparent">
    <div class="flex py-14 justify-around">
      <h2 class="max-w-[500px]">Начни играть уже сегодня</h2>
      <div class="pt-2 space-y-7 max-w-2xl">
        <p>
          Заходи на наш сервер в Discord и голосуй за проект на Wargm, чтобы быть в курсе всех обновлений и получать
          игровые бонусы за голосование
        </p>
        <div class="flex items-center space-x-7">
          <a href="https://discord.com/invite/yWE39QEQbn" target="_blank">
            <Button class="h-14 bg-cardinal-red hover:bg-cardinal-red-highlight font-bold px-8 py-4">
              Наш Discord
            </Button>
          </a>
          <a href="https://wargm.ru/server/74881" target="_blank">
            <Button variant="outline"
              class="h-14 border-cardinal-red hover:border-cardinal-red-highlight hover:text-cardinal-red-highlight text-cardinal-red px-8">
              Наш проект на Wargm
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
h2 {
  color: var(--color-white-primary);
  font-size: 64px;
  font-weight: bold;
  padding: 0px;
  margin-top: -8px;
  line-height: 64px;
}

p {
  color: var(--color-white-secondary);
  font-size: 16px;
}

.bg-semi-transparent {
  background-color: rgba(86, 77, 93, 0.1);
}
</style>

<script setup
  lang="ts">

  import Accordion from '../ui/accordion/Accordion.vue';
  import AccordionContent from '../ui/accordion/AccordionContent.vue';
  import AccordionItem from '../ui/accordion/AccordionItem.vue';
  import AccordionTrigger from '../ui/accordion/AccordionTrigger.vue';

  const questions = [
    {
      q: 'Существуют ли бонусы для новых игроков?',
      a: 'Да, мы предлагаем бонусы для новых игроков, чтобы они могли начать играть в на нашем проекте с удовольствием. Для получения дополнительной информации заходите на наш Discord сервер.',
    },
    {
      q: 'Проводятся ли на сервере мероприятия?',
      a: 'Мы стараемся регулярно проводить различные розыгрыши и ивенты для наших игроков. За всеми событиями вы можете следить на нашем Discord сервере.',
    },
    {
      q: 'Как я могу обратиться за помощью, если у меня возникнут проблемы при игре на сервере?',
      a: 'При возникновении любых трудностей или вопросов, связанных с игровым процессом, вы можете обратиться к нам на нашем Discord сервере. Мы всегда рады помочь.',
    },
    {
      q: 'Я хочу предложить идею для развития проекта. Как это сделать?',
      a: 'Мы рады принять любые предложения и идеи. Пожалуйста, направьте нам свое сообщение на наш Discord сервер.',
    }
  ]


</script>

<template>

  <div class="w-full px-32 py-12">
    <div class="flex justify-between">
      <h2>Часто задаваемые вопросы</h2>
      <div class="basis-1/2">
        <Accordion type="single" collapsible>
          <AccordionItem class="p-4 accordion-border" v-for="question in questions" :key="question.q"
            :value="question.q">
            <AccordionTrigger>
              <h3>
                {{ question.q }}
              </h3>
            </AccordionTrigger>
            <AccordionContent class="pt-4">
              <p>
                {{ question.a }}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>

</template>

<style scoped>
h2 {
  color: var(--color-white-primary);
  font-size: 64px;
  font-weight: bold;
  width: 512px;
}

h3 {
  color: var(--color-white-primary);
  font-size: 24px;
  font-weight: bold;
}

p {
  color: var(--color-white-secondary);
  font-size: 16px;
}

.accordion-border {
  border-color: rgba(86, 77, 93, 0.7);
}
</style>

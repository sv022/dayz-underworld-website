<script setup
  lang="ts">
  import type { Marker } from '@/types/marker';

  import Accordion from '@/components/ui/accordion/Accordion.vue';
  import AccordionContent from '@/components/ui/accordion/AccordionContent.vue';
  import AccordionItem from '@/components/ui/accordion/AccordionItem.vue';
  import AccordionTrigger from '@/components/ui/accordion/AccordionTrigger.vue';
  import { MapPin } from 'lucide-vue-next';

  const props = defineProps<{
    title: string
    markers: Marker[]
  }>();

</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem class="p-4 accordion-border" :value='props.title'>
      <AccordionTrigger>
        <h2>
          {{ props.title }}
        </h2>
      </AccordionTrigger>
      <AccordionContent class="pt-4">
        <ul class="space-y-4">
          <li v-for="marker in props.markers" :key="marker.id" :value="marker.name">
            <span class="flex items-center gap-4">
              <MapPin class="size-6 my-3" :style="`color: ${marker.color};`" />
              <h3>{{ marker.name }}</h3>
            </span>
            <p v-for="(line, lineNumber) of marker.description.split('\n')" v-bind:key="lineNumber">
              {{ line }}<br />
            </p>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style scoped>
h2 {
  color: var(--color-white-primary);
  font-size: 24px;
  font-weight: bold;
}

h3 {
  color: var(--color-white-primary);
  font-size: 18px;
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

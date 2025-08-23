<script setup
  lang="ts">
  import ActionBlock from '@/components/Landing/ActionBlock.vue';
  import DescriptionBlock from '@/components/Landing/DescriptionBlock.vue';
  import FAQBlock from '@/components/Landing/FAQBlock.vue';
  import FeaturesBlock from '@/components/Landing/FeaturesBlock.vue';
  import FooterItem from '@/components/Landing/FooterItem.vue';
  import HeroItem from '@/components/Landing/HeroItem.vue';
  import NumbersBlock from '@/components/Landing/NumbersBlock.vue';
  import { smoothScrollTo } from '@/utils/smoothScroll';

  import { ref, onMounted, onBeforeUnmount } from "vue";


  const containerRef = ref<HTMLDivElement | null>(null);
  const heroRef = ref<HTMLElement | null>(null);
  const nextRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    const el = containerRef.value;
    if (!el) return;

    let triggered = false;

    const onWheel = (e: WheelEvent) => {
      if (triggered) return;

      if (el.scrollTop < 8 && e.deltaY > 0) {
        e.preventDefault();
        triggered = true;

        if (nextRef.value) {
          const containerRect = el.getBoundingClientRect();
          const targetRect = nextRef.value.getBoundingClientRect();

          const targetY =
            el.scrollTop + (targetRect.top - containerRect.top);

          smoothScrollTo(el, targetY, 800); // <-- скорость регулируется duration
        }

        setTimeout(() => {
          triggered = false;
        }, 2000);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    onBeforeUnmount(() => {
      el.removeEventListener("wheel", onWheel);
    });
  });

</script>

<template>

  <div ref="containerRef" class="container-height overflow-y-scroll">
    <section ref="heroRef" class="h-screen">
      <HeroItem />
    </section>
    <section ref="nextRef" class="min-h-[600px] ease-in">
      <NumbersBlock />
      <ActionBlock />
      <DescriptionBlock />
      <FeaturesBlock />
      <FAQBlock />
      <FooterItem />
    </section>
  </div>

</template>

<style scoped>
.container-height {
  height: calc(100vh - 86px);
}
</style>

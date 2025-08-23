<script setup
    lang="ts">

    const props = defineProps<{
        title: string,
        text: string
    }>();

</script>

<template>

    <div class="flex flex-col items-center space-y-6 max-w-xs">
        <slot></slot>
        <div class="text-center space-y-4">
            <h4>{{ props.title }}</h4>
            <p>{{ props.text }}</p>
        </div>
    </div>

</template>

<style scoped>
h4 {
    color: var(--color-white-primary);
    font-size: 24px;
    font-weight: bold;
}

p {
    color: var(--color-white-secondary);
    font-size: 16px;
}
</style>
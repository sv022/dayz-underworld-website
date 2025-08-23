<script setup
    lang="ts">
    import { Bookmark, Clock, Map, Phone } from 'lucide-vue-next';
    import FeatureItem from './Features/FeatureItem.vue';

    const featuresList = [
        {
            title: 'Уникальные локации и точки интереса',
            text: 'На сервере вы найдете стилизованные под атмосферу безопасные зоны, масштабные данжи и многое другое '
        },
        {
            title: 'Разнообразие контента',
            text: 'На нашем сервере вы сможете найти себе занятие на любой вкус - охота, рыбалка, зачистка опасных зон, добыча руды - каждый найдет занятие по душе'
        },
        {
            title: 'Отзывчивая администрация',
            text: 'Администрация нашего сервера в любое время готова прийти игрокам на помощь и ответить на любые ваши вопросы'
        },
        {
            title: 'Регулярные обновления',
            text: 'Наш проект активно развивается - мы стараемся регулярно добавлять новый контент чтобы вы точно не успели заскучать'
        }
    ]

</script>

<template>

    <div class="flex items-center justify-center px-32 py-12 bg-semi-transparent">
        <div class="flex flex-col w-full items-center justify-center gap-15">
            <h2>Почему наш проект?</h2>
            <div class="flex w-full justify-between gap-10">
                <FeatureItem :title="featuresList[0].title" :text="featuresList[0].text">
                    <Map class="size-10 text-cardinal-red" />
                </FeatureItem>
                <FeatureItem :title="featuresList[1].title" :text="featuresList[1].text">
                    <Bookmark class="size-10 text-cardinal-red" />
                </FeatureItem>
                <FeatureItem :title="featuresList[2].title" :text="featuresList[2].text">
                    <Phone class="size-10 text-cardinal-red" />
                </FeatureItem>
                <FeatureItem :title="featuresList[3].title" :text="featuresList[3].text">
                    <Clock class="size-10 text-cardinal-red" />
                </FeatureItem>
            </div>
        </div>
    </div>

</template>

<style scoped>
h2 {
    color: var(--color-white-primary);
    font-size: 48px;
    font-weight: bold;
}

.bg-semi-transparent {
    background-color: rgba(86, 77, 93, 0.1);
}
</style>
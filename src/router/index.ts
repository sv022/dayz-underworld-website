import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MapView from '@/views/MapView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Home', layout: DefaultLayout },
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
      meta: { title: 'Map', layout: DefaultLayout },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Page not found',
      component: PageNotFound,
      meta: { title: 'Not Found', layout: DefaultLayout },
    },
  ],
})

export default router

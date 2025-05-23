import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import AdView from '../views/CreateAdView.vue'
import ImagesPage from '../pages/CreateAdPages/ImagesPage.vue'
import InformationPage from '../pages/CreateAdPages/InformationPage.vue'
import ReviewPage from '../pages/CreateAdPages/ReviewPage.vue'
import PublishPage from '../pages/CreateAdPages/PublishPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/create_ad',
      name: 'create_ad',
      component: AdView,
      redirect: '/create_ad/images',
      children: [
        {
          path: 'images',
          name: 'images',
          component: ImagesPage,
        },
        {
          path: 'information',
          name: 'information',
          component: InformationPage,
        },
        {
          path: 'review',
          name: 'review',
          component: ReviewPage,
        },
        {
          path: 'publish',
          name: 'publish',
          component: PublishPage,
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router

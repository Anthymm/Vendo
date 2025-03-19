import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdView from '../views/CreateAdView.vue'
import ImagesPage from '../pages/CreatedAdPages/ImagesPage.vue'
import InformationPage from '../pages/CreatedAdPages/InformationPage.vue'
import ReviewPage from '../pages/CreatedAdPages/ReviewPage.vue'
import PublishPage from '../pages/CreatedAdPages/PublishPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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

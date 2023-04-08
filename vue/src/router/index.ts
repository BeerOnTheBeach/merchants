import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationView from '../views/LocationView.vue'
import LocationDetailView from '../views/LocationDetailView.vue'
import CharacterView from '../views/CharacterView.vue'
import CharacterDetailView from '../views/CharacterDetailView.vue'
import MerchantView from '../views/MerchantView.vue'
import MerchantDetailView from '../views/MerchantDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/character',
      name: 'Characters',
      component: CharacterView
    },
    {
      path: '/character/:id',
      name: 'Character',
      component: CharacterDetailView
    },
    {
      path: '/location',
      name: 'Location',
      component: LocationView
    },
    {
      path: '/location/:id',
      name: 'Ort',
      component: LocationDetailView,
      children: [
        {
          path: '/merchant',
          name: 'Merchants',
          component: MerchantView
        },
        {
          path: '/merchant/:id',
          name: 'Merchant',
          component: MerchantDetailView
        },
      ]
    },
  ]
})

export default router

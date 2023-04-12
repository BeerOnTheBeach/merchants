import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationView from '../views/LocationView.vue'
import LocationDetailView from '../views/LocationDetailView.vue'
import CharacterView from '../views/CharacterView.vue'
import CharacterDetailView from '../views/CharacterDetailView.vue'
import MerchantView from '../views/MerchantView.vue'
import MerchantDetailView from '../views/MerchantDetailView.vue'
import MerchantOverviewView from '../views/MerchantOverviewView.vue'
import WorldView from '../views/WorldView.vue'
import WorldDetailView from '../views/WorldDetailView.vue'

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
      path: '/character/:characterId',
      name: 'Character',
      component: CharacterDetailView
    },
    {
      path: '/location',
      name: 'Location',
      component: LocationView
    },
    {
      path: '/location/:locationId',
      name: 'Ort',
      component: LocationDetailView,
    },
    {
      path: '/world',
      name: 'Worlds',
      component: WorldView
    },
    {
      path: '/world/:worldId',
      name: 'World',
      component: WorldDetailView
    },
    {
      path: '/location/:locationId/merchant',
      name: 'Merchants',
      component: MerchantView
    },
    {
      path: '/location/:locationId/merchant/:merchantId',
      name: 'Merchant',
      component: MerchantDetailView
    },
    {
      path: '/merchant-list',
      name: 'All Merchants',
      component: MerchantOverviewView
    },
  ]
})

export default router

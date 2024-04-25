import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
          {
            path:"/",
            name:'home',
            component: () => import("@/views/Home/Home.vue"),
          },
          {
            path:"/Menu",
            name:'menu',
            component: () => import("@/views/Menu/Menu.vue"),
          }
      ]
    },
  ]
})

export default router

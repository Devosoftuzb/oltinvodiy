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
          },
          {
            path:"/AboutUs",
            name:'aboutus',
            component: () => import("@/views/AboutUs/AboutUs.vue"),
          },
          {
            path:"/Gallary",
            name:'gallary',
            component: () => import("@/views/Gallary/Gallary.vue"),
          },
          {
            path:"/Contact",
            name:'contact',
            component: () => import("@/views/Contact/Contact.vue"),
          }
      ]
    },
  ]
})

export default router

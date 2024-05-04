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
    {
      path:"/Admin",
      name:"admin",
      component:() => import('../admin/Dashboard/Dashboard.vue'),
    },
    {
      path:"/GallaryAdmin",
      name:"gallaryadmin",
      component:() => import('../admin/Gallary/Gallary.vue'),
    },
    {
      path:"/MenuAdmin",
      name:"menuadmin",
      component:() => import('../admin/Menu/Menu.vue'),
    },
    {
      path:"/HabarlarAdmin",
      name:"habarlaradmin",
      component:() => import('../admin/Habarlar/Habarlar.vue'),
    },
    {
      path:"/CategoryAdmin",
      name:"category",
      component:() => import('../admin/Category/Category.vue'),
    },
    {
      path:"/MenuPDF",
      name:"menupdf",
      component:() => import('../admin/MenuPdf/MenuPdf.vue'),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/Error/Error.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../admin/Login/login.vue"),
    },
  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");

  if (
    (to.name == "admin" ||
      to.name == "gallaryAdmin" ||
      to.name == "menuAdmin" ||
      to.name == "category" ||
      to.name == "menupdf" ||
      to.name == "habarlarAdmin") &&
    to.name !== "login" &&
    !token
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});
export default router

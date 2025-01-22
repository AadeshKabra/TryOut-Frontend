import { createRouter, createWebHistory } from 'vue-router'
import AuthGoogle from '@/components/AuthGoogle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../App.vue"),
    },
    {
      path: "/auth/google",
      name: "AuthGoogle",
      component: AuthGoogle
    },
  ],
})

export default router

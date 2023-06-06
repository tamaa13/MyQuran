import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === 'login') {
    next({ name: 'home' });
  } else if (!localStorage.access_token && to.name === 'login') {
    next(); // Continue with the navigation
  } else if (!localStorage.access_token && to.name === 'register') {
    next(); // Continue with the navigation
  } else if (localStorage.access_token && to.name === 'register') {
    next({ name: 'home' }); // Continue with the navigation for other cases
  } else {
    next()
  }
});

export default router

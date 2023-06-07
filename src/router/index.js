import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'

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
    {
      path: '/:id',
      name: 'detail',
      component: DetailView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && (to.name === 'login' || to.name === 'register')) {
    next({ name: 'home' }); // Redirect to home page
  } else if (!localStorage.access_token && to.name !== 'login' && to.name !== 'register') {
    next({ name: 'login' }); // Redirect to login page
  } else {
    next(); // Continue with the navigation
  }
});


export default router

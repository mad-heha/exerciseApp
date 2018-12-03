import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/meal',
      name: 'meal',
      component: () => import(/* webpackChunkName: "meal" */ './views/Meal.vue')
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: () => import(/* webpackChunkName: "exercise" */ './views/Exercise.vue')
    },
    
  ]
})

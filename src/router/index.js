import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { },
    component: () => import(/* webpackChunkName: "default" */ '../views/Home')
  },
  {
    path: '/MyWork',
    name: 'MyWork',
    component: () =>
      import(/* webpackChunkName: "default" */ '../views/MyWork')
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: () =>
      import(/* webpackChunkName: "default" */ '../views/AboutMe')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router

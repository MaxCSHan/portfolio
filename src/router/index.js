import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: { },
    component: () => import(/* webpackChunkName: "default" */ '../views/Home'),
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "auth" */ '../views/Home')
      }
    ]}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router

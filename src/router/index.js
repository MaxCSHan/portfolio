import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {},
    component: () => import(/* webpackChunkName: "default" */ '../views/Home')
  },
  {
    path: '/MyWork',
    name: 'MyWork',
    component: () => import(/* webpackChunkName: "default" */ '../views/MyWork')
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: () => import(/* webpackChunkName: "default" */ '../views/AboutMe')
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "default" */ '../views/Chat')
  },
  {
    path: '/ChatRoom',
    name: 'ChatRoom',
    meta: { requireParams: ['roomId'], notExistTo: 'Chat' },
    component: () => import(/* webpackChunkName: "default" */ '../views/ChatRoom')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireParams)) {
    const checkRecords = to.matched.filter((record) => record.meta.requireParams)
    for (const checkRecord of checkRecords) {
      const requireParams = checkRecord.meta.requireParams
      const notExistTo = checkRecord.meta.notExistTo
      if (requireParams && requireParams.length > 0) {
        if (requireParams.some((item) => !to.params[item])) {
          if (notExistTo) {
            next({ name: notExistTo })
          } else {
            router.go(-1)
          }
          break
        }
      }
    }
    next()

  }
  else{
    next()
  }
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/cjjz'
    },{
      path: '/cjjz',
      name: 'cjjz',
      component: () => import('@/views/cjjz.vue'),
    },{
      path: '/jczy',
      name: 'jczy',
      component: () => import('@/views/jczy.vue'),
    },{
      path: '/khzb',
      name: 'khzb',
      component: () => import('@/views/khzb.vue'),
    },{
      path: '/ywzb',
      name: 'ywzb',
      component: () => import('@/views/ywzb.vue'),
    }
  ]
})

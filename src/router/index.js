import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/recruitment',
    name: 'Recruitment',
    component: () => import('../views/Recruitment.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/latest',
    name: 'Latest',
    component: () => import('../views/Latest.vue')
  },
  {
    path: '/leadership',
    name: 'Leadership',
    component: () => import('../views/Leadership.vue'),
  },
    {
        path:"/leadership/ceo",
        name:"CEO",
        component: () => import('../views/ceo.vue')
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

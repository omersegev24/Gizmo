import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home.vue'
import aboutPage from '../views/about.vue'
import editorPage from '../views/editor.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/about',
    name: 'About',
    component: aboutPage
  },
  {
    path: '/editor',
    name: 'Editor',
    component: editorPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import End from '../views/End.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/end',
    name: 'end',
    component: End
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

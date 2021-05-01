import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Camisaria from '../views/Camisaria.vue'
import Alfataria from '../views/Alfataria.vue'
import Depoimento from '../views/Depoimento.vue'
import Contato from '../views/Contato.vue'

const routes = [
  {
    path: '/home',
    name: 'Empresa',
    component: Home
  },
  {
    path: '/camisaria',
    name: 'CAMISARIA',
    component: Camisaria
  },
  {
    path: '/alfataria',
    name: 'ALFATARIA',
    component: Alfataria
  },
  {
    path: '/depoimento',
    name: 'DEPOIMENTO',
    component: Depoimento
  },
  {
    path: '/contato',
    name: 'CONTATO',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import View from './views/Visualizar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/view',
      name: 'view',
      component: View
    }
  ]
})

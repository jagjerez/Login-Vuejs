import Vue from 'vue'
import Router from 'vue-router'
import JGLogin from '@/components/JG/JGLogin'
import JGRegister from '@/components/JG/JGRegister'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'JGLogin',
      component: JGLogin
    },
    {
      path: '/register',
      name: 'JGRegister',
      component: JGRegister
    }
  ]
})

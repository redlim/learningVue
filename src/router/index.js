import Vue from 'vue'
import Router from 'vue-router'
import User from '../components/users'
import Test from '../components/test'
import vueResource from 'vue-resource'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: User
    },
    {
      path: '/test',
      component: Test
    }
  ]
})

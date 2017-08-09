import Vue from 'vue'
import Router from 'vue-router'
import catApp from '../components/catApp/catApp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/catApp'
    },
    {
      path: '/catApp',
      component: catApp
    }
  ]
})

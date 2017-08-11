import Vue from 'vue'
import Router from 'vue-router'
import catApp from '../components/catApp/catApp.vue'
import catClass from '../components/cat-class/cat-class.vue'
import catFood from '../components/cat-food/cat-food.vue'
import catFooter from '../components/cat-Footer/cat-footer.vue'
import catTin from '../components/cat-tin/cat-tin.vue'

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

import Vue from 'vue'
import app from './App'
import router from './router'
import {Swipe,SwipeItem} from 'mint-ui'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})

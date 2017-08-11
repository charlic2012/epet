import Vue from 'vue'
import app from './App'
import VueScroller from 'vue-scroller'
import VueCarousel from 'vue-carousel'
import router from './router'
/* eslint-disable no-new */
Vue.use(VueScroller)
Vue.use(VueCarousel)
new Vue({
  el: '#app',
  router,
  render: h => h(app),
})

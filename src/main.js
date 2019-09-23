
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible/flexible'
import Util from './utils/util'
Vue.use(Util)

import Vant from 'vant'
import 'vant/lib/index.css'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)	
Vue.use(Vant)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

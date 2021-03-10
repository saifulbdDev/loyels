import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

require('@/assets/css/bootstrap.min.css')
require('@/assets/css/style.css')
require('@/assets/css/responsive.css')

Vue.use(VueAxios, axios)

import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({

  router,
  render: h => h(App), store
}).$mount('#app')

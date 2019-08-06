import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

import scss from './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  scss
}).$mount('#app')

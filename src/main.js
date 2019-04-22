import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from './router.js'

Vue.config.productionTip = false
// vue继承JQ
Vue.prototype.$ = $
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

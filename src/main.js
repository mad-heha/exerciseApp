import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from './components/Select.vue'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  el: '#ap',
  data: {
    options: [
      '5',
      '10',
      '15'
    ]
  }
})
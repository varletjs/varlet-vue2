import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@varlet/touch-emulator'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

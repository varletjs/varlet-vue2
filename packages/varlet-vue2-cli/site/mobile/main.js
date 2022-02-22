import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@varlet/touch-emulator'

import Icon from '../components/icon'
import AppBar from '../components/app-bar'
import Button from '../components/button'
import Cell from '../components/cell'
import Ripple from '../components/ripple'
import '../components/styles/common.less'
import '../components/styles/elevation.less'

Vue.use(Icon)
  .use(AppBar)
  .use(Cell)
  .use(Ripple)
  .use(Button)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

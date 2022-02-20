import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@varlet/touch-emulator'

import Icon from '../components/icon'
import Cell from '../components/cell'
import Ripple from '../components/ripple'
import CodeExample from '../components/code-example'
import Snackbar from '../components/snackbar'

Snackbar.allowMultiple(true)

Vue.use(Cell)
  .use(Ripple)
  .use(Icon)
  .use(CodeExample)
  .use(Snackbar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

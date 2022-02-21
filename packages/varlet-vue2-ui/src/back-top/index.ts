import type { VueConstructor } from 'vue'
import BackTop from './BackTop.vue'

BackTop.install = function (app: VueConstructor) {
  app.component(BackTop.name, BackTop)
}

export const _BackTopComponent = BackTop

export default BackTop

import type { VueConstructor } from 'vue'
import Divider from './Divider.vue'

Divider.install = function (app: VueConstructor) {
  app.component(Divider.name, Divider)
}

export const _DividerComponent = Divider

export default Divider

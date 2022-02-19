import type { VueConstructor } from 'vue'
import Sticky from './Sticky.vue'

Sticky.install = function (app: VueConstructor) {
  app.component(Sticky.name, Sticky)
}

export const _StickyComponent = Sticky

export default Sticky

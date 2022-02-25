import type { VueConstructor } from 'vue'
import Swipe from './Swipe.vue'

Swipe.install = function (app: VueConstructor) {
  app.component(Swipe.name, Swipe)
}

export const _SwipeComponent = Swipe

export default Swipe

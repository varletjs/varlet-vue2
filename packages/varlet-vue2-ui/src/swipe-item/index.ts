import type { VueConstructor } from 'vue'
import SwipeItem from './SwipeItem.vue'

SwipeItem.install = function (app: VueConstructor) {
  app.component(SwipeItem.name, SwipeItem)
}

export const _SwipeItemComponent = SwipeItem

export default SwipeItem

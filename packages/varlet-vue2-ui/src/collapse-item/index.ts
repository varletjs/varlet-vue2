import type { VueConstructor } from 'vue'
import CollapseItem from './CollapseItem.vue'

CollapseItem.install = function (app: VueConstructor) {
  app.component(CollapseItem.name, CollapseItem)
}

export const _CollapseItemComponent = CollapseItem

export default CollapseItem

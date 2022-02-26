import type { VueConstructor } from 'vue'
import TabItem from './TabItem.vue'

TabItem.install = function (app: VueConstructor) {
  app.component(TabItem.name, TabItem)
}

export const _TabItemComponent = TabItem

export default TabItem

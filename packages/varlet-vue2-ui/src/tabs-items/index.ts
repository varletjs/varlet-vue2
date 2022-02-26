import type { VueConstructor } from 'vue'
import TabsItems from './TabsItems.vue'

TabsItems.install = function (app: VueConstructor) {
  app.component(TabsItems.name, TabsItems)
}

export const _TabsItemsComponent = TabsItems

export default TabsItems

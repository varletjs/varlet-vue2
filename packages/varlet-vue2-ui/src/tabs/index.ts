import type { VueConstructor } from 'vue'
import Tabs from './Tabs.vue'

Tabs.install = function (app: VueConstructor) {
  app.component(Tabs.name, Tabs)
}

export const _TabsComponent = Tabs

export default Tabs

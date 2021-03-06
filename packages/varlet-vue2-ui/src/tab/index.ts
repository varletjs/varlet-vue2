import type { VueConstructor } from 'vue'
import Tab from './Tab.vue'

Tab.install = function (app: VueConstructor) {
  app.component(Tab.name, Tab)
}

export const _TabComponent = Tab

export default Tab

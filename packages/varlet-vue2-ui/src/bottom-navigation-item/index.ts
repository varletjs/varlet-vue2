import type { VueConstructor } from 'vue'
import BottomNavigationItem from './BottomNavigationItem.vue'

BottomNavigationItem.install = function (app: VueConstructor) {
  app.component(BottomNavigationItem.name, BottomNavigationItem)
}

export const _BottomNavigationItemComponent = BottomNavigationItem

export default BottomNavigationItem

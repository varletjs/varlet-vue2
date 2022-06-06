import type { VueConstructor } from 'vue'
import BottomNavigation from './BottomNavigation.vue'

BottomNavigation.install = function (app: VueConstructor) {
  app.component(BottomNavigation.name, BottomNavigation)
}

export const _BottomNavigationComponent = BottomNavigation

export default BottomNavigation

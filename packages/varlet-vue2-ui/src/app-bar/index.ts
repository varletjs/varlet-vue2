import type { VueConstructor } from 'vue'
import AppBar from './AppBar.vue'

AppBar.install = function (app: VueConstructor) {
  app.component(AppBar.name, AppBar)
}

export const _AppBarComponent = AppBar

export default AppBar

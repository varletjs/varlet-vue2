import type { VueConstructor } from 'vue'
import Menu from './Menu'

Menu.install = function (app: VueConstructor) {
  app.component(Menu.name, Menu)
}

export const _MenuComponent = Menu

export default Menu

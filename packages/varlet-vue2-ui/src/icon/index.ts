import type { VueConstructor } from 'vue'
import Icon from './Icon.vue'

Icon.install = function (app: VueConstructor) {
  app.component(Icon.name, Icon)
}

export const _IconComponent = Icon

export default Icon

import type { VueConstructor } from 'vue'
import Switch from './Switch.vue'

Switch.install = function (app: VueConstructor) {
  app.component(Switch.name, Switch)
}

export const _SwitchComponent = Switch

export default Switch

import type { VueConstructor } from 'vue'
import Checkbox from './Checkbox.vue'

Checkbox.install = function (app: VueConstructor) {
  app.component(Checkbox.name, Checkbox)
}

export const _CheckboxComponent = Checkbox

export default Checkbox

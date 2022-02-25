import type { VueConstructor } from 'vue'
import CheckboxGroup from './CheckboxGroup.vue'

CheckboxGroup.install = function (app: VueConstructor) {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

export const _CheckboxGroupComponent = CheckboxGroup

export default CheckboxGroup

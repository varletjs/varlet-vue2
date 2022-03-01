import type { VueConstructor } from 'vue'
import Select from './Select.vue'

Select.install = function (app: VueConstructor) {
  app.component(Select.name, Select)
}

export const _SelectComponent = Select

export default Select

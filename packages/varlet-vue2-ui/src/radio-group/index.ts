import { VueConstructor } from 'vue'
import RadioGroup from './RadioGroup.vue'

RadioGroup.install = function (app: VueConstructor) {
  app.component(RadioGroup.name, RadioGroup)
}

export const _RadioGroupComponent = RadioGroup

export default RadioGroup

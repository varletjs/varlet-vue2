import type { VueConstructor } from 'vue'
import Option from './Option.vue'

Option.install = function (app: VueConstructor) {
  app.component(Option.name, Option)
}

export const _OptionComponent = Option

export default Option

import type { VueConstructor } from 'vue'
import Radio from './Radio.vue'

Radio.install = function (app: VueConstructor) {
  app.component(Radio.name, Radio)
}

export const _RadioComponent = Radio

export default Radio

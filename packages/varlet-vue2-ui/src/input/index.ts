import type { VueConstructor } from 'vue'
import Input from './Input.vue'

Input.install = function (app: VueConstructor) {
  app.component(Input.name, Input)
}

export const _InputComponent = Input

export default Input

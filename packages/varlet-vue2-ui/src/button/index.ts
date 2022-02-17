import type { VueConstructor } from 'vue'
import Button from './Button.vue'

Button.install = function (app: VueConstructor) {
  app.component(Button.name, Button)
}

export const _ButtonComponent = Button

export default Button

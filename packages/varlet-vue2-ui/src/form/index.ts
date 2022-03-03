import type { VueConstructor } from 'vue'
import Form from './Form.vue'

Form.install = function (app: VueConstructor) {
  app.component(Form.name, Form)
}

export const _FormComponent = Form

export default Form

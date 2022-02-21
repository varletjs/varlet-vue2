import type { VueConstructor } from 'vue'
import FormDetails from './FormDetails.vue'

FormDetails.install = function (app: VueConstructor) {
  app.component(FormDetails.name, FormDetails)
}

export const _FormDetailsComponent = FormDetails

export default FormDetails

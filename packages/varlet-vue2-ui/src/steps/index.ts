import type { VueConstructor } from 'vue'
import Steps from './Steps.vue'

Steps.install = function (app: VueConstructor) {
  app.component(Steps.name, Steps)
}

export const _StepsComponent = Steps

export default Steps

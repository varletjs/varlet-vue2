import type { VueConstructor } from 'vue'
import Step from './Step.vue'

Step.install = function (app: VueConstructor) {
  app.component(Step.name, Step)
}

export const _StepComponent = Step

export default Step

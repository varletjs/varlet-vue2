import { VueConstructor } from 'vue'
import Rate from './Rate.vue'

Rate.install = function (app: VueConstructor) {
  app.component(Rate.name, Rate)
}

export const _RateComponent = Rate

export default Rate

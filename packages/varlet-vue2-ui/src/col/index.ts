import type { VueConstructor } from 'vue'
import Col from './Col.vue'

Col.install = function (app: VueConstructor) {
  app.component(Col.name, Col)
}

export const _ColComponent = Col

export default Col

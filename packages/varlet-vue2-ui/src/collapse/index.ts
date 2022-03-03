import type { VueConstructor } from 'vue'
import Collapse from './Collapse.vue'

Collapse.install = function (app: VueConstructor) {
  app.component(Collapse.name, Collapse)
}

export const _CollapseComponent = Collapse

export default Collapse

import type { VueConstructor } from 'vue'
import Row from './Row.vue'

Row.install = function (app: VueConstructor) {
  app.component(Row.name, Row)
}

export const _RowComponent = Row

export default Row

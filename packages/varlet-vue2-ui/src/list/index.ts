import type { VueConstructor } from 'vue'
import List from './List.vue'

List.install = function (app: VueConstructor) {
  app.component(List.name, List)
}

export const _ListComponent = List

export default List

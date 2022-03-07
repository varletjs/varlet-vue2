import Table from './Table.vue'
import type { VueConstructor } from 'vue'

Table.install = function (app: VueConstructor) {
  app.component(Table.name, Table)
}

export const _TableComponent = Table

export default Table

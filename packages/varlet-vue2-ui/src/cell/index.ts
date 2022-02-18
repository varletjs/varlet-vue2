import type { VueConstructor } from 'vue'
import Cell from './Cell.vue'

Cell.install = function (app: VueConstructor) {
  app.component(Cell.name, Cell)
}

export const _CellComponent = Cell

export default Cell

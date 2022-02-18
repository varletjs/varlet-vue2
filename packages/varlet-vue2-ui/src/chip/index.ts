import type { VueConstructor } from 'vue'
import Chip from './Chip.vue'

Chip.install = function (app: VueConstructor) {
  app.component(Chip.name, Chip)
}

export const _ChipComponent = Chip

export default Chip

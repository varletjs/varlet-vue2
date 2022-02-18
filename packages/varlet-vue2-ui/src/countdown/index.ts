import type { VueConstructor } from 'vue'
import Countdown from './Countdown.vue'

Countdown.install = function (app: VueConstructor) {
  app.component(Countdown.name, Countdown)
}

export const _CountdownComponent = Countdown

export default Countdown

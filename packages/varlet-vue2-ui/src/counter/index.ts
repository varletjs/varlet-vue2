import type { VueConstructor } from 'vue'
import Counter from './Counter.vue'

Counter.install = function (app: VueConstructor) {
  app.component(Counter.name, Counter)
}

export const _CounterComponent = Counter

export default Counter

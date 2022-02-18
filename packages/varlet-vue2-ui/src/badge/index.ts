import type { VueConstructor } from 'vue'
import Badge from './Badge.vue'

Badge.install = function (app: VueConstructor) {
  app.component(Badge.name, Badge)
}

export const _BadgeComponent = Badge

export default Badge

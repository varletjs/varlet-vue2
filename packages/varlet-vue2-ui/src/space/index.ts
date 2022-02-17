import type { VueConstructor } from 'vue'
import Space from './Space.jsx'

Space.install = function (app: VueConstructor) {
  app.component(Space.name, Space)
}

export const _SpaceComponent = Space

export default Space

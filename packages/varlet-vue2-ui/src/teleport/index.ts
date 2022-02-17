import type { VueConstructor } from 'vue'
import Teleport from './Teleport.jsx'

Teleport.install = function (app: VueConstructor) {
  app.component(Teleport.name, Teleport)
}

export const _TeleportComponent = Teleport

export default Teleport

import type { VueConstructor } from 'vue'
import Popup from './Popup'

Popup.install = function (app: VueConstructor) {
  app.component(Popup.name, Popup)
}

export const _PopupComponent = Popup

export default Popup

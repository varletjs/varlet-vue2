import type { VueConstructor } from 'vue'
import Slider from './Slider.vue'

Slider.install = function (app: VueConstructor) {
  app.component(Slider.name, Slider)
}

export const _SliderComponent = Slider

export default Slider

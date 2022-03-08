import type { VueConstructor } from 'vue'
import TimePicker from './TimePicker.vue'

TimePicker.install = function (app: VueConstructor) {
  app.component(TimePicker.name, TimePicker)
}

export const _TimePickerComponent = TimePicker

export default TimePicker

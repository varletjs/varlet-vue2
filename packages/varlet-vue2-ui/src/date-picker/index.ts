import type { VueConstructor } from 'vue'
import DatePicker from './DatePicker.vue'

DatePicker.install = function (app: VueConstructor) {
  app.component(DatePicker.name, DatePicker)
}

export const _DatePickerComponent = DatePicker

export default DatePicker

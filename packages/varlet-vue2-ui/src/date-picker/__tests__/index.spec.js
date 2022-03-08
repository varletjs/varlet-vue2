import DatePicker from '..'
import Vue from 'vue'

test('test datePicker plugin', () => {
  Vue.use(DatePicker)
  expect(Vue.component(DatePicker.name)).toBeTruthy()
})

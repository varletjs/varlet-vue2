import Vue from 'vue'
import FormDetails from '..'

test('test form details plugin', () => {
  const app = Vue.use(FormDetails)
  expect(app.component(FormDetails.name)).toBeTruthy()
})

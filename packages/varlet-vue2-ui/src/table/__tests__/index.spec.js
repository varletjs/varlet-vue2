import example from '../example'
import Table from '..'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

test('test table example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test table plugin', () => {
  Vue.use(Table)
  expect(Vue.component(Table.name)).toBeTruthy()
})

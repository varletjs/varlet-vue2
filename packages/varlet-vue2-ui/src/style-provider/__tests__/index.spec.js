import StyleProvider from '../index'
import VarStyleProvider from '../StyleProvider'
import Vue from 'vue'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/jest'

test('test styleProvider component plugin', () => {
  Vue.use(StyleProvider)
  expect(Vue.component(StyleProvider.Component.name)).toBeTruthy()
})

test('test styleProvider plugin', () => {
  Vue.use(VarStyleProvider)
  expect(Vue.component(VarStyleProvider.name)).toBeTruthy()
})

test('test styleProvider functional', async () => {
  StyleProvider({
    'cell-font-size': '30px',
  })

  await delay(0)
  expect(getComputedStyle(document.documentElement).getPropertyValue('--cell-font-size')).toBe('30px')
})

test('test styleProvider component', async () => {
  const wrapper = mount(VarStyleProvider)

  const el = wrapper.find('.var-style-provider')
  expect(el.exists()).toBe(true)

  await wrapper.setProps({
    styleVars: {
      'cell-font-size': '30px',
    },
  })
  expect(el.attributes('style')).toBe('--cell-font-size: 30px;')
})

import example from '../example'
import Lazy, { imageCache } from '..'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, mockDoubleRaf, trigger } from '../../utils/jest'

test('test lazy example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test lazy plugin', () => {
  Vue.use(Lazy)
  expect(Vue.directive('lazy')).toBeTruthy()
})

const Wrapper = {
  directives: { Lazy },
  data: () => ({
    src: 'https://varlet.gitee.io/varlet-ui-vue2/cat.jpg',
    error: 'https://varlet.gitee.io/varlet-ui-vue2/error.jpg',
  }),
  template: `
    <img
      :lazy-error="error"
      v-lazy="src"
    >
  `,
}

test('test lazy load', async () => {
  const { mockRestore } = mockDoubleRaf()
  const wrapper = mount(Wrapper)
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.element._lazy.preloadImage, 'load')
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
  imageCache.clear()
  mockRestore()
})

test('test lazy error with attempt', async () => {
  const { mockRestore } = mockDoubleRaf()
  const wrapper = mount(Wrapper)
  expect(wrapper.html()).toMatchSnapshot()

  await delay(80)

  await trigger(wrapper.element._lazy.preloadImage, 'error')
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.element._lazy.preloadImage, 'error')
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.element._lazy.preloadImage, 'error')
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
  imageCache.clear()
  mockRestore()
})

test('test lazy updated', async () => {
  const { mockRestore } = mockDoubleRaf()
  const wrapper = mount(Wrapper)
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.element._lazy.preloadImage, 'load')
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ src: 'https://varlet.gitee.io/varlet-ui-vue2/dog.jpg' })
  await delay(80)

  await trigger(wrapper.element._lazy.preloadImage, 'load')
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
  imageCache.clear()
  mockRestore()
})

test('test lazy background-image', async () => {
  const { mockRestore } = mockDoubleRaf()
  const wrapper = mount({
    directives: { Lazy },
    template: `
      <img v-lazy:background-image="'https://varlet.gitee.io/varlet-ui-vue2/cat.jpg'">
    `,
  })
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(wrapper.element._lazy.preloadImage, 'load')
  await delay(80)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
  imageCache.clear()
  mockRestore()
})

import Vue from 'vue'
import Sticky from '..'
import VarSticky from '../Sticky'
import { delay, mockDoubleRaf, trigger } from '../../utils/jest'
import { mount } from '@vue/test-utils'

mockDoubleRaf()

test('test sticky plugin', () => {
  Vue.use(Sticky)
  expect(Vue.component(Sticky.name)).toBeTruthy()
})

test('test sticky z-index', async () => {
  const wrapper = mount(VarSticky, {
    propsData: {
      zIndex: 100,
    },
    attachTo: document.body,
  })
  await delay(100)

  expect(wrapper.element.style.zIndex).toBe('100')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test sticky onScroll', async () => {
  const onScroll = jest.fn()

  const wrapper = mount(VarSticky, {
    propsData: {
      onScroll,
    },
    scopedSlots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  expect(onScroll).toHaveBeenCalledTimes(1)
  await trigger(window, 'scroll')
  expect(onScroll).toHaveBeenCalledTimes(2)
  wrapper.destroy()
})

test('test sticky scrolling with css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'sticky' })

  const wrapper = mount(VarSticky, {
    propsData: {
      offsetTop: 100,
      cssMode: true,
    },
    scopedSlots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})

test('test sticky scrolling without css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'relative' })

  const wrapper = mount(VarSticky, {
    propsData: {
      offsetTop: 100,
    },
    scopedSlots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })

  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 100 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})

test('test sticky disabled with css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'sticky' })

  const wrapper = mount(VarSticky, {
    propsData: {
      offsetTop: 100,
      cssMode: true,
      disabled: true,
    },
    scopedSlots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})

test('test sticky disabled without css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'relative' })

  const wrapper = mount(VarSticky, {
    propsData: {
      offsetTop: 100,
      disabled: true,
    },
    scopedSlots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })

  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 100 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.destroy()
})

import example from '../example'
import Vue from 'vue'
import Chip from '..'
import VarChip from '../Chip'
import { mount } from '@vue/test-utils'

test('test chip example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test chip plugin', () => {
  Vue.use(Chip)
  expect(Vue.component(Chip.name)).toBeTruthy()
})

test('test chip color & textColor', () => {
  const wrapper = mount(VarChip, {
    propsData: {
      color: '#000',
      textColor: '#000',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test chip close', () => {
  const onClose = jest.fn()

  const wrapper = mount(VarChip, {
    propsData: {
      closable: true,
    },
    listeners: {
      close: onClose,
    },
  })

  const closeEl = wrapper.find('.var-chip--close')
  expect(closeEl.exists()).toBe(true)
  closeEl.trigger('click')
  expect(onClose).toHaveBeenCalledTimes(1)
})

test('test chip styles', () => {
  const wrapper = mount(VarChip, {
    propsData: {
      closable: true,
      size: 'large',
      round: true,
      plain: true,
      block: true,
      iconName: 'fire',
    },
    scopedSlots: {
      default: '<div>chip text</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

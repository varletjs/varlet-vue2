import example from '../example'
import Rate from '..'
import VarRate from '../Rate'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, mockOffset, trigger } from '../../utils/jest'

mockOffset()

test('test rate example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test rate plugin', () => {
  Vue.use(Rate)
  expect(Vue.component(Rate.name)).toBeTruthy()
})

test('test rate onChange', async () => {
  const onChange = jest.fn()
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarRate, {
    propsData: {
      value: 0,
    },
    listeners: {
      change: onChange,
      input: onInput,
    },
  })

  await wrapper.find('.var-rate__content').trigger('click')
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(wrapper.props('value')).toBe(1)

  wrapper.destroy()
})

test('test rate half', async () => {
  const onChange = jest.fn()
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarRate, {
    propsData: {
      half: true,
      value: 0,
    },
    listeners: {
      change: onChange,
      input: onInput,
    },
  })

  await trigger(wrapper.find('.var-rate__content'), 'click')
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(wrapper.props('value')).toBe(0.5)

  wrapper.destroy()
})

test('test rate validation', async () => {
  const onChange = jest.fn()
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarRate, {
    propsData: {
      value: 0,
      rules: [(v) => v >= 1 || '至少选择一分'],
    },
    listeners: {
      change: onChange,
      input: onInput,
    },
  })

  wrapper.vm.validate()
  await delay(16)

  expect(wrapper.find('.var-form-details__message').text()).toBe('至少选择一分')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-rate__content').trigger('click')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('value')).toBe(0)

  wrapper.destroy()
})

test('test rate disabled & readonly', async () => {
  const onChange = jest.fn()

  const wrapper = mount(VarRate, {
    propsData: {
      disabled: true,
      readonly: false,
    },
    listeners: {
      change: onChange,
    },
  })

  await wrapper.find('.var-rate__content').trigger('click')
  expect(wrapper.html()).toMatchSnapshot()
  expect(onChange).toHaveBeenCalledTimes(0)

  await wrapper.setProps({ disabled: false, readonly: true })
  await wrapper.find('.var-rate__content').trigger('click')
  expect(wrapper.html()).toMatchSnapshot()
  expect(onChange).toHaveBeenCalledTimes(0)
})

test('test rate count', () => {
  const wrapper = mount(VarRate, {
    propsData: {
      count: 10,
    },
  })

  expect(wrapper.findAll('.var-rate__content').length).toBe(10)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test rate gap', () => {
  const wrapper = mount(VarRate, {
    propsData: {
      gap: 10,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

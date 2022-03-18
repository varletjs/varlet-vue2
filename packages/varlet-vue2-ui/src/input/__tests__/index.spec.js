import example from '../example'
import Input from '..'
import VarInput from '../Input'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay } from '../../utils/jest'

test('test input example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test input plugin', () => {
  Vue.use(Input)
  expect(Vue.component(Input.name)).toBeTruthy()
})

test('test input focus & blur', async () => {
  const onFocus = jest.fn()
  const onBlur = jest.fn()

  const wrapper = mount(VarInput, {
    listeners: {
      focus: onFocus,
      blur: onBlur,
    },
  })

  wrapper.vm.focus()
  await wrapper.find('.var-input__input').trigger('focus')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.blur()
  await wrapper.find('.var-input__input').trigger('blur')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test input onInput & onChange & onClick', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))
  const onChange = jest.fn()
  const onClick = jest.fn()

  const wrapper = mount(VarInput, {
    propsData: {
      value: '',
    },
    listeners: {
      input: onInput,
      change: onChange,
      click: onClick,
    },
  })

  await wrapper.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)

  wrapper.find('.var-input__input').setValue('t')

  await wrapper.find('.var-input__input').trigger('input')
  expect(onInput).lastCalledWith('t', new Event('input'))
  expect(wrapper.props('value')).toBe('t')

  await wrapper.find('.var-input__input').trigger('change')
  expect(onChange).lastCalledWith('t', new Event('input'))

  wrapper.destroy()
})

test('test input maxlength', () => {
  const wrapper = mount(VarInput, {
    propsData: {
      value: 'text',
      maxlength: 100,
    },
  })

  expect(wrapper.find('.var-form-details__length').text()).toBe('4/100')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test input hint to be false', () => {
  const wrapper = mount(VarInput, {
    propsData: {
      value: 'text',
      hint: false,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test input clear', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))
  const onClear = jest.fn()

  const wrapper = mount(VarInput, {
    propsData: {
      value: 'text',
      clearable: true,
    },
    listeners: {
      clear: onClear,
      input: onInput,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-input__clear-icon').trigger('click')
  expect(onClear).lastCalledWith('')
  expect(wrapper.props('value')).toBe('')

  wrapper.destroy()
})

const triggerEvents = async (wrapper) => {
  await wrapper.find('.var-input__input').trigger('input')
  await wrapper.find('.var-input__input').trigger('change')
  await wrapper.find('.var-input__clear-icon').trigger('click')
  await wrapper.trigger('click')
}

test('test input disabled', async () => {
  const onClear = jest.fn()
  const onClick = jest.fn()
  const onInput = jest.fn()
  const onChange = jest.fn()

  const wrapper = mount(VarInput, {
    propsData: {
      value: 'hello',
      clearable: true,
      disabled: true,
    },
    listeners: {
      input: onInput,
      clear: onClear,
      click: onClick,
      change: onChange,
    },
  })

  await triggerEvents(wrapper)

  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.destroy()
})

test('test input readonly', async () => {
  const onClear = jest.fn()
  const onClick = jest.fn()
  const onInput = jest.fn()
  const onChange = jest.fn()

  const wrapper = mount(VarInput, {
    propsData: {
      value: 'hello',
      clearable: true,
      readonly: true,
    },
    listeners: {
      input: onInput,
      clear: onClear,
      click: onClick,
      chnage: onChange,
    },
  })

  await triggerEvents(wrapper)

  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(2)
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.destroy()
})

test('test input validation', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarInput, {
    propsData: {
      value: '',
      rules: [(v) => v.length > 3 || '长度必须大于3'],
    },
    listeners: {
      input: onInput,
    },
  })

  wrapper.find('.var-input__input').setValue('1')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').text()).toBe('长度必须大于3')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('value')).toBe('')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.find('.var-input__input').setValue('1234')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

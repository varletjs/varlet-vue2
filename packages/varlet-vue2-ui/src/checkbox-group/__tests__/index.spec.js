import example from '../example'
import CheckboxGroup from '..'
import Checkbox from '../../checkbox'
import VarCheckboxGroup from '../CheckboxGroup'
import VarCheckbox from '../../checkbox/Checkbox'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay } from '../../utils/jest'

test('test checkbox example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test checkbox group plugin', () => {
  Vue.use(CheckboxGroup)
  expect(Vue.component(CheckboxGroup.name)).toBeTruthy()
})

test('test checkbox plugin', () => {
  Vue.use(Checkbox)
  expect(Vue.component(Checkbox.name)).toBeTruthy()
})

test('test checkbox check value', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarCheckbox, {
    propsData: {
      value: false,
    },
    listeners: {
      input: onInput,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onInput).lastCalledWith(true)
  expect(wrapper.props('value')).toBe(true)

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onInput).lastCalledWith(false)
  expect(wrapper.props('value')).toBe(false)

  wrapper.destroy()
})

test('test checkbox check value with custom value', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarCheckbox, {
    propsData: {
      value: 0,
      uncheckedValue: 0,
      checkedValue: 1,
    },
    listeners: {
      input: onInput,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onInput).lastCalledWith(1)
  expect(wrapper.props('value')).toBe(1)

  wrapper.destroy()
})

test('test checkbox onClick & onChange', async () => {
  const onClick = jest.fn()
  const onChange = jest.fn()

  const wrapper = mount(VarCheckbox, {
    propsData: {
      value: false,
    },
    listeners: {
      click: onClick,
      change: onChange,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).lastCalledWith(true)

  wrapper.destroy()
})

test('test checkbox toggle method', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarCheckbox, {
    propsData: {
      value: false,
    },
    listeners: {
      input: onInput,
    },
  })

  wrapper.vm.toggle()
  await delay(16)

  expect(onInput).lastCalledWith(true)
  expect(wrapper.props('value')).toBe(true)

  wrapper.destroy()
})

test('test checkbox disabled', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))
  const onClick = jest.fn()
  const onChange = jest.fn()

  const wrapper = mount(VarCheckbox, {
    propsData: {
      value: false,
      disabled: true,
    },
    listeners: {
      click: onClick,
      change: onChange,
      input: onInput,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.props('value')).toBe(false)

  wrapper.destroy()
})

test('test checkbox readonly', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))
  const onClick = jest.fn()
  const onChange = jest.fn()

  const wrapper = mount(VarCheckbox, {
    propsData: {
      value: false,
      readonly: true,
    },
    listeners: {
      click: onClick,
      change: onChange,
      input: onInput,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.props('value')).toBe(false)

  wrapper.destroy()
})

test('test checkbox with checkbox group', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])
  await wrapper.find('.var-checkbox').trigger('click')
  expect(wrapper.vm.value).toStrictEqual([])

  wrapper.destroy()
})

test('test checkbox validation', async () => {
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarCheckbox, {
    propsData: {
      value: false,
      rules: [(v) => v || '您必须勾选'],
    },
    listeners: {
      input: onInput,
    },
  })

  wrapper.vm.validate()
  await delay(16)

  expect(wrapper.find('.var-form-details__message').text()).toBe('您必须勾选')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-checkbox').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('value')).toBe(false)

  wrapper.destroy()
})

test('test checkbox group max', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group :max="1" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  const checkboxes = wrapper.findAll('.var-checkbox')

  await checkboxes.at(0).trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])

  await checkboxes.at(1).trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.destroy()
})

test('test checkbox group validation', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group ref="checkboxGroup" :rules="[v => v.length >= 1 || '至少选一个']" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  const { checkboxGroup } = wrapper.vm.$refs

  checkboxGroup.validate()
  await delay(16)
  expect(wrapper.find('.var-form-details__message').text()).toBe('至少选一个')
  expect(wrapper.html()).toMatchSnapshot()

  checkboxGroup.reset()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([])

  await wrapper.find('.var-checkbox').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test checkbox group checkAll & inverseAll methods', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [1],
    }),
    template: `
      <var-checkbox-group ref="checkboxGroup" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  await delay(16)
  const { checkboxGroup } = wrapper.vm.$refs

  checkboxGroup.inverseAll()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([2])

  checkboxGroup.checkAll()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([1, 2])

  wrapper.destroy()
})

test('test checkbox group layout direction', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group direction="vertical" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

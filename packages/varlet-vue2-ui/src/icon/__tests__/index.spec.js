import example from '../example'
import Icon from '..'
import VarIcon from '../Icon'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay } from '../../utils/jest'

test('test icon example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test icon plugin', () => {
  Vue.use(Icon)
  expect(Vue.component(Icon.name)).toBeTruthy()
})

test('test icon onClick', () => {
  const onClick = jest.fn()

  const wrapper = mount(VarIcon, {
    listeners: {
      click: onClick,
    },
  })

  wrapper.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  wrapper.destroy()
})

test('test icon transition name', async () => {
  const wrapper = mount(VarIcon, {
    propsData: {
      transition: 0,
      name: 'check',
    },
  })

  expect(wrapper.find('.var-icon-check').exists()).toBeTruthy()
  expect(wrapper.element.style.transition).toEqual('transform 0ms')

  await wrapper.setProps({
    transition: 300,
    name: 'error',
  })

  await delay(400)

  expect(wrapper.find('.var-icon-error').exists()).toBeTruthy()
  expect(wrapper.element.style.transition).toEqual('transform 300ms')
  wrapper.destroy()
})

test('test icon namespace', () => {
  const wrapper = mount(VarIcon, {
    propsData: {
      name: 'check',
      namespace: 'custom-icon',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test icon styles', () => {
  const wrapper = mount(VarIcon, {
    propsData: {
      color: '#000',
      size: '36px',
      name: 'check',
      transition: 0,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

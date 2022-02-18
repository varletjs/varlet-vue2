import example from '../example'
import Vue from 'vue'
import Progress from '..'
import VarProgress from '../Progress'
import { mount } from '@vue/test-utils'

test('test progress example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test progress plugin', () => {
  Vue.use(Progress)
  expect(Vue.component(Progress.name)).toBeTruthy()
})

test('test linear progress prop', () => {
  const wrapper = mount(VarProgress, {
    propsData: {
      value: 30,
      lineWidth: 8,
      color: '#ff9800',
      trackColor: '#f5cb90',
      ripple: true,
      label: true,
    },
    scopedSlots: {
      default: '<div>success</div>',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test circle progress prop', () => {
  const wrapper = mount(VarProgress, {
    propsData: {
      mode: 'circle',
      value: 30,
      lineWidth: 8,
      color: '#ff9800',
      trackColor: '#f5cb90',
      size: 50,
      rotate: 10,
      label: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

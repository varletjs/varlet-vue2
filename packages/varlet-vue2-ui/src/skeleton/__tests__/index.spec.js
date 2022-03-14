import example from '../example'
import Vue from 'vue'
import Skeleton from '..'
import VarSkeleton from '../Skeleton'
import { mount } from '@vue/test-utils'

test('test skeleton example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test skeleton plugin', () => {
  Vue.use(Skeleton)
  expect(Vue.component(Skeleton.name)).toBeTruthy()
})

test('test skeleton loading', async () => {
  const wrapper = mount(VarSkeleton, {
    propsData: {
      loading: true,
    },
    scopedSlots: {
      default: "<div class='skeleton-default-slot'></div>",
    },
  })

  expect(wrapper.find('.skeleton-default-slot').exists()).toBeFalsy()

  await wrapper.setProps({ loading: false })
  expect(wrapper.find('.skeleton-default-slot').exists()).toBeTruthy()

  wrapper.destroy()
})

test('test skeleton styles', () => {
  const wrapper = mount(VarSkeleton, {
    propsData: {
      title: true,
      card: true,
      avatar: true,
      titleWidth: '100px',
      cardHeight: '100px',
      avatarSize: '100px',
      rows: 2,
      rowsWidth: ['600px', '500px'],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test skeleton fullscreen', () => {
  const wrapper = mount(VarSkeleton, {
    propsData: {
      fullscreen: true,
      fullscreenZIndex: 1000,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

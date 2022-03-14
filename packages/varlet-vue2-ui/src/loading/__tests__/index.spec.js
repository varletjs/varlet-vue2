import example from '../example'
import Loading from '..'
import VarLoading from '../Loading'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

test('test loading example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test loading plugin', () => {
  Vue.use(Loading)
  expect(Vue.component(Loading.name)).toBeTruthy()
})

test('test circle props', async () => {
  const wrapper = mount(VarLoading, {
    propsData: {
      type: 'circle',
      color: '#2979ff',
      radius: '12',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test wave props', async () => {
  const wrapper = mount(VarLoading, {
    propsData: {
      type: 'wave',
      color: '#2979ff',
      size: 'small',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test cube props', async () => {
  const wrapper = mount(VarLoading, {
    propsData: {
      type: 'cube',
      color: '#2979ff',
      size: 'small',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test rect props', async () => {
  const wrapper = mount(VarLoading, {
    propsData: {
      type: 'rect',
      color: '#2979ff',
      size: 'small',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test disappear props', async () => {
  const wrapper = mount(VarLoading, {
    propsData: {
      type: 'disappear',
      color: '#2979ff',
      size: 'small',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test slots', async () => {
  const template = `
    <var-loading description="loading...." type="circle" :loading="loading">
      <div>test</div>
    </var-loading>
  `
  const wrapper = mount({
    components: {
      [VarLoading.name]: VarLoading,
    },
    data() {
      return {
        loading: false,
      }
    },
    template,
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ loading: true })

  expect(wrapper.html()).toMatchSnapshot()
})

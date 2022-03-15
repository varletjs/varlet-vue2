import VarDivider from '../Divider'
import Vue from 'vue'
import example from '../example'
import { mount } from '@vue/test-utils'

test('test divider plugin', () => {
  Vue.use(VarDivider)
  expect(Vue.component(VarDivider.name)).toBeTruthy()
})

test('test divider example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test divider inset and vertical prop', async () => {
  const wrapper = mount(VarDivider, {
    propsData: {
      inset: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    inset: 36,
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    inset: '-36px',
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    inset: '-36px',
    vertical: true,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test divider dashed and margin prop', async () => {
  const wrapper = mount(VarDivider)

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    dashed: true,
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    dashed: false,
    margin: '36px 0',
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test divider description prop', () => {
  const desc = 'description'
  const wrapper = mount(VarDivider, {
    propsData: {
      description: desc,
    },
  })
  expect(wrapper.text()).toBe(desc)
  wrapper.destroy()
})

test('test default slot of divider', () => {
  const wrapper = mount({
    components: {
      [VarDivider.name]: VarDivider,
    },
    template: `
      <var-divider>
        <span>description</span>
      </var-divider>
    `,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

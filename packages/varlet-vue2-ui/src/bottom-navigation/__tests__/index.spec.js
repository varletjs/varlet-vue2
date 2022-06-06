import example from '../example'
import BottomNavigation from '..'
import BottomNavigationItem from '../../bottom-navigation-item'
import VarBottomNavigation from '../BottomNavigation'
import VarBottomNavigationItem from '../../bottom-navigation-item/BottomNavigationItem'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay } from '../../utils/jest'

test('test bottom-navigation example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test bottom-navigation plugin', () => {
  Vue.use(BottomNavigation).use(BottomNavigationItem)
  expect(Vue.component(BottomNavigation.name)).toBeTruthy()
})

test('test bottom-navigation before-change prevent switch', async () => {
  const onBeforeChange = jest.fn(() => false)
  const Wrapper = {
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    props: ['onBeforeChange'],
    data: () => ({
      active: 0,
    }),
    template: `
    <var-bottom-navigation :active.sync="active" @before-change="onBeforeChange">
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper, {
    propsData: {
      onBeforeChange,
    },
  })
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item').at(1)
  await bottomNavigationItem.trigger('click')

  expect(onBeforeChange).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.active).toBe(0)

  wrapper.destroy()
})

test('test bottom-navigation before-change return promise', async () => {
  const onBeforeChange = jest.fn(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 300)
      })
  )
  const Wrapper = {
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    props: ['onBeforeChange'],
    data: () => ({
      active: 0,
    }),
    template: `
    <var-bottom-navigation :active.sync="active" @before-change="onBeforeChange">
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper, {
    propsData: {
      onBeforeChange,
    },
  })
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item').at(1)
  await bottomNavigationItem.trigger('click')
  expect(wrapper.vm.active).toBe(0)

  await delay(600)
  expect(onBeforeChange).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.active).toBe(1)

  wrapper.destroy()
})

test('test bottom-navigation change event', async () => {
  let dummy
  const handleChange = jest.fn((active) => {
    dummy = active
  })
  const Wrapper = {
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    data: () => ({
      active: 0,
    }),
    methods: {
      handleChange,
    },
    template: `
    <var-bottom-navigation :active.sync="active" @change="handleChange">
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item').at(1)
  await bottomNavigationItem.trigger('click')

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(dummy).toBe(1)

  wrapper.destroy()
})

test('test bottom-navigation-item click event', async () => {
  let dummy
  const handleClick = jest.fn((active) => {
    dummy = active
  })
  const Wrapper = {
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    data: () => ({
      active: 0,
    }),
    methods: {
      handleClick,
    },
    template: `
    <var-bottom-navigation :active.sync="active">
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item @click="handleClick" label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(16)

  const bottomNavigationItem = wrapper.findAll('.var-bottom-navigation-item').at(1)
  await bottomNavigationItem.trigger('click')

  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(dummy).toBe(1)

  wrapper.destroy()
})

test('test BottomNavigation relation BottomNavigationItems', async () => {
  const Wrapper = {
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    data: () => ({
      active: 0,
    }),
    template: `
    <var-bottom-navigation :active.sync="active">
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(100)

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setData({ active: 1 })

  await delay(50)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('fab button', async () => {
  const Wrapper = {
    components: {
      [VarBottomNavigation.name]: VarBottomNavigation,
      [VarBottomNavigationItem.name]: VarBottomNavigationItem,
    },
    data: () => ({
      active: 0,
    }),
    template: `
    <var-bottom-navigation :active.sync="active">
      <template #fab>
        <div class="tab_example" />
      </template>
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
    </var-bottom-navigation>
    `,
  }
  const wrapper = mount(Wrapper)
  await delay(100)

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

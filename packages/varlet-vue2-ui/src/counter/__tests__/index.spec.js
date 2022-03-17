import example from '../example'
import Counter from '..'
import VarCounter from '../Counter'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test counter example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test counter plugin', () => {
  Vue.use(Counter)
  expect(Vue.component(Counter.name)).toBeTruthy()
})

test('test counter increment & decrement', async () => {
  const wrapper = mount({
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 0,
    }),
    template: `<var-counter v-model="value" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(1)
  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.destroy()
})

test('test counter initial value over max', async () => {
  const wrapper = mount({
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 11,
    }),
    template: `<var-counter :max="10" v-model="value" />`,
  })
  expect(wrapper.vm.value).toBe(10)

  wrapper.destroy()
})

test('test counter initial value less min', async () => {
  const Wrapper = {
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: -1,
    }),
    template: `<var-counter :min="0" v-model="value" />`,
  }
  const wrapper = mount(Wrapper)
  expect(wrapper.vm.value).toBe(0)

  wrapper.destroy()
})

test('test counter onChange', async () => {
  const onChange = jest.fn()
  const Wrapper = {
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 0,
    }),
    methods: {
      onChange,
    },
    template: `<var-counter v-model="value" @change="onChange" />`,
  }
  const wrapper = mount(Wrapper)

  wrapper.find('.var-counter__input').setValue('1')
  await wrapper.find('.var-counter__input').trigger('change')
  expect(onChange).lastCalledWith(1)

  wrapper.destroy()
})

test('test counter press increment', async () => {
  const wrapper = mount({
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 0,
    }),
    template: `<var-counter v-model="value" />`,
  })

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchstart')
  await delay(800)

  const current = wrapper.vm.value
  expect(current).toBeGreaterThan(0)

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchend')
  await delay(100)
  expect(wrapper.vm.value).toBe(current)

  wrapper.destroy()
})

test('test counter press decrement', async () => {
  const wrapper = mount({
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 0,
    }),
    template: `<var-counter v-model="value" />`,
  })

  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchstart')
  await delay(750)

  const current = wrapper.vm.value
  expect(current).toBeLessThan(0)

  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchend')
  await delay(750)
  expect(wrapper.vm.value).toBe(current)

  wrapper.destroy()
})

test('test counter lazy change', async () => {
  const wrapper = mount({
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 0,
    }),
    methods: {
      onBeforeChange(value, change) {
        const isInc = value > wrapper.vm.value
        change(isInc ? value + 1 : value - 1)
      },
    },
    template: `<var-counter lazy-change v-model="value" @before-change="onBeforeChange" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(2)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.destroy()
})

test('test counter disabled', async () => {
  const wrapper = mount({
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 0,
    }),
    template: `<var-counter disabled v-model="value" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)
})

test('test counter validation', async () => {
  const wrapper = mount({
    components: {
      [VarCounter.name]: VarCounter,
    },
    data: () => ({
      value: 0,
    }),
    template: `<var-counter ref="counter" :rules="[v => v > 0 || '必须大于0']" v-model="value" />`,
  })

  const { counter } = wrapper.vm.$refs

  counter.validate()
  await delay(16)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__message').text()).toBe('必须大于0')

  await wrapper.find('.var-counter__increment-button').trigger('click')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()

  counter.reset()
  await delay(16)
  expect(wrapper.vm.value).toBe(0)
})

import example from '../example'
import Countdown from '..'
import VarCountdown from '../Countdown'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, mockConsole } from '../../utils/jest'

test('test countdown example', () => {
  const { mockRestore } = mockConsole('log')
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()

  mockRestore()
})

test('test countdown plugin', () => {
  Vue.use(Countdown)
  expect(Vue.component(Countdown.name)).toBeTruthy()
})

test('test countdown format prop', () => {
  const wrapper = mount(VarCountdown, {
    propsData: {
      time: 108000000,
      autoStart: false,
      format: 'HH : mm : ss : SS',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test countdown autostart prop', async () => {
  const wrapper = mount(VarCountdown, {
    propsData: {
      time: 10800,
      autoStart: false,
    },
  })

  const text = wrapper.text()

  await delay(100)

  expect(wrapper.text()).toBe(text)
})

test('test countdown onEnd and onChange', async () => {
  const onEnd = jest.fn()
  const onChange = jest.fn()

  mount(VarCountdown, {
    listeners: {
      end: onEnd,
      change: onChange,
    },
    propsData: {
      time: 1000,
    },
  })

  await delay(1100)

  expect(onEnd).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalled()
})

test('test start, pause and reset methods', async () => {
  const template = `<var-countdown :time="time" ref="countdown" :auto-start="false" />`
  const wrapper = mount({
    components: {
      [VarCountdown.name]: VarCountdown,
    },
    data() {
      return {
        time: 108000,
      }
    },
    template,
  })

  const text = wrapper.text()

  await delay(100)

  expect(wrapper.text()).toBe(text)

  wrapper.vm.$refs.countdown.start()

  await delay(100)

  expect(wrapper.text()).not.toBe(text)

  wrapper.vm.$refs.countdown.pause()
  const text1 = wrapper.text()

  await delay(100)

  expect(wrapper.text()).toBe(text1)

  wrapper.vm.$refs.countdown.reset()

  await delay(500)

  expect(wrapper.text()).toBe(text)
})

test('test change event argument', async () => {
  const onChange = jest.fn()

  mount(VarCountdown, {
    listeners: {
      change: onChange,
    },
    propsData: {
      time: 1,
    },
  })

  await delay(50)

  expect(onChange.mock.calls[0][0]).toEqual({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 1,
  })
})

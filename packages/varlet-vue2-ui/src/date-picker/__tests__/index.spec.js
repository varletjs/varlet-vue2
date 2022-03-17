import DatePicker from '..'
import VarDatePicker from '../DatePicker'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, mockConsole, triggerDrag } from '../../utils/jest'
import dayjs from 'dayjs/esm'

const [currentYear, currentMonth] = dayjs().format('YYYY-MM').split('-')

test('test datePicker plugin', () => {
  Vue.use(DatePicker)
  expect(Vue.component(DatePicker.name)).toBeTruthy()
})

describe('test datePicker style and type', () => {
  test('test datePicker style and date', async () => {
    const template = `
    <var-date-picker
      v-model="date"
      shadow
      header-color="purple"
      color="#7bb872"
      :show-current="false"
    />
  `
    const wrapper = mount({
      components: {
        [VarDatePicker.name]: VarDatePicker,
      },
      data() {
        return {
          date: '2021-04-08',
        }
      },
      template,
    })

    await delay(0)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('test datePicker style and month', async () => {
    const template = `
    <var-date-picker
      v-model="date"
      type="month"
      shadow
      header-color="purple"
      color="#7bb872"
      :show-current="false"
    />
  `
    const wrapper = mount({
      components: {
        [VarDatePicker.name]: VarDatePicker,
      },
      data() {
        return {
          date: '2021-04',
        }
      },
      template,
    })

    await delay(0)

    expect(wrapper.html()).toMatchSnapshot()
  })
})

test('test datePicker style and type', async () => {
  const template = `
    <var-date-picker
      :type="type"
      v-model="date"
      shadow
      header-color="purple"
      color="#7bb872"
      :show-current="false"
    />
  `
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        type: 'month',
        date: '2021-05',
      }
    },
    template,
  })

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ type: 'date', date: '2021-05-19' })

  await delay(200)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test allowedDates prop', async () => {
  const wrapper = mount(VarDatePicker, {
    propsData: {
      allowedDates: (val) => {
        return parseInt(val.split('-')[2], 10) % 2 === 1
      },
      value: '2021-03-01',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test firstDayOfWeek prop', async () => {
  const wrapper = mount(VarDatePicker, {
    propsData: {
      firstDayOfWeek: '3',
      value: '2021-03-01',
    },
  })

  await delay(0)
  expect(wrapper.findComponent('.var-day-picker__head').findComponent('li').text()).toBe('三')
})

test('test max and min', async () => {
  const wrapper = mount(VarDatePicker, {
    propsData: {
      max: '2021-4-8',
      min: '2021-4-8',
      value: '2021-4-8',
    },
  })

  await delay(0)
  expect(wrapper.findComponent('.var-picker-header__value').text()).toBe('2021 四月')

  await wrapper.findComponent('.var-picker-header').findComponent('button').trigger('click')
  await delay(200)
  expect(wrapper.findComponent('.var-picker-header__value').text()).toBe('2021 四月')

  await wrapper.findComponent('.var-picker-header__value').trigger('click')
  await delay(200)
  await wrapper.findComponent('.var-picker-header__value').trigger('click')
  await delay(200)

  expect(wrapper.findComponent('.var-year-picker__panel').findAll('li').length).toBe(1)
})

test('test datePicker v-model', async () => {
  const template = `<var-date-picker :type="type" v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        type: 'month',
        date: '2021-05',
      }
    },
    template,
  })

  await delay(0)
  await wrapper.findComponent('.var-picker-header').findComponent('button').trigger('click')
  await delay(200)
  await wrapper.findComponent('.var-month-picker__content').findComponent('ul').findComponent('button').trigger('click')
  expect(wrapper.vm.date).toBe('2020-01')

  await wrapper.findComponent('.var-picker-header__value').trigger('click')
  await delay(200)
  await wrapper.findComponent('.var-year-picker__panel').findComponent('li').trigger('click')
  await delay(200)
  await wrapper.findComponent('.var-month-picker__content').findComponent('ul').findComponent('button').trigger('click')
  expect(wrapper.vm.date).not.toBe('2021-01')

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await wrapper.findComponent('.var-picker-header').findComponent('button').trigger('click')
  await delay(200)
  await wrapper.findComponent('.var-day-picker__button--usable').trigger('click')
  expect(wrapper.vm.date).toBe('2021-04-01')
})

test('test datePicker multiple prop', async () => {
  const template = `<var-date-picker multiple v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: ['2021-05-19'],
      }
    },
    template,
  })

  await delay(0)
  const elements = wrapper.findAll('.var-day-picker__button--usable')
  await elements.at(0).trigger('click')
  await elements.at(1).trigger('click')
  await elements.at(2).trigger('click')

  expect(wrapper.vm.date).toEqual([
    '2021-05-19',
    `${currentYear}-${currentMonth}-01`,
    `${currentYear}-${currentMonth}-02`,
    `${currentYear}-${currentMonth}-03`,
  ])

  await elements.at(0).trigger('click')
  expect(wrapper.vm.date).toEqual([
    '2021-05-19',
    `${currentYear}-${currentMonth}-02`,
    `${currentYear}-${currentMonth}-03`,
  ])
})

test('test datePicker range prop', async () => {
  const fn = jest.fn()
  const { mockRestore } = mockConsole('error', fn)

  const template = `<var-date-picker range :type="type" v-model="date" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: ['2021-05-19', '2021-05-18'],
        type: 'date',
      }
    },
    template,
  })

  await delay(0)
  const elements = wrapper.findAll('.var-day-picker__button--usable')
  await elements.at(0).trigger('click')
  await elements.at(2).trigger('click')

  expect(wrapper.vm.date).toEqual([`${currentYear}-${currentMonth}-01`, `${currentYear}-${currentMonth}-03`])

  await wrapper.setData({ type: 'month', date: null })
  await wrapper.setData({ type: 'month', date: ['2021-05', '2021-06'] })
  await delay(0)
  const lis = wrapper.findComponent('.var-month-picker__content').findComponent('ul').findAll('li')
  await lis.at(0).findComponent('button').trigger('click')
  await lis.at(2).findComponent('button').trigger('click')
  expect(wrapper.vm.date).toEqual([`${currentYear}-01`, `${currentYear}-03`])
  expect(fn).toHaveBeenCalledTimes(1)

  mockRestore()
})

test('test datePicker readonly', async () => {
  const template = `<var-date-picker v-model="date" readonly :type="type" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        type: 'month',
        date: '2021-05',
      }
    },
    template,
  })

  await delay(0)
  await wrapper.findComponent('.var-month-picker__content').findComponent('ul').findComponent('button').trigger('click')
  await delay(200)
  expect(wrapper.vm.date).toBe('2021-05')

  await wrapper.setData({ type: 'date', date: '2021-05-19' })
  await wrapper.findComponent('.var-day-picker__button--usable').trigger('click')
  await delay(200)
  expect(wrapper.vm.date).toBe('2021-05-19')
})

test('test datePicker touchable prop', async () => {
  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021-04-08',
        type: 'date',
      }
    },
    template: `<var-date-picker v-model="date" :type="type" />`,
  })

  const pickBodyEl = wrapper.findComponent('.var-date-picker-body')
  const headerEl = wrapper.findComponent('.var-picker-header__value')

  await triggerDrag(pickBodyEl, 0, 100)
  expect(headerEl.text()).toBe('2021 四月')
  await triggerDrag(pickBodyEl, 100, 0)
  await delay(300)
  expect(headerEl.text()).toBe('2021 三月')
})

test('test value legal', async () => {
  const fn = jest.fn()
  const { mockRestore } = mockConsole('error', fn)
  const template = `<var-date-picker v-model="date" :multiple="multiple" />`

  const wrapper = mount({
    components: {
      [VarDatePicker.name]: VarDatePicker,
    },
    data() {
      return {
        date: '2021-05-01',
        multiple: true,
      }
    },
    template,
  })

  await delay(0)
  await wrapper.setData({ multiple: false, date: [] })
  await delay(0)
  await wrapper.setData({ multiple: false, date: 'Invalid Date' })
  expect(fn).toHaveBeenCalledTimes(3)

  mockRestore()
})

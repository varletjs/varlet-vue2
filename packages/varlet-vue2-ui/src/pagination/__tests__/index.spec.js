import example from '../example'
import Pagination from '..'
import VarPagination from '../Pagination'
import Vue from 'vue'
import { mount } from '@vue/test-utils'
import { delay, trigger } from '../../utils/jest'

test('test pagination example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test pagination plugin', () => {
  Vue.use(Pagination)
  expect(Vue.component(Pagination.name)).toBeTruthy()
})

describe('simple mode', () => {
  test('mount', () => {
    const wrapper = mount(VarPagination, {
      propsData: {
        total: '123',
        showTotal(total, range) {
          return `${range[0]}-${range[1]} of ${total} items`
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })

  test('disabled prop', () => {
    const wrapper = mount(VarPagination, {
      propsData: {
        disabled: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
})

describe('basic mode', () => {
  test('mount', () => {
    const wrapper = mount(VarPagination, {
      propsData: {
        total: '123',
        simple: false,
        showQuickJumper: true,
        showTotal(total, range) {
          return `${range[0]}-${range[1]} of ${total} items`
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })

  test('disabled prop', () => {
    const wrapper = mount(VarPagination, {
      propsData: {
        disabled: true,
        simple: false,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })

  test('click ellipsis', async () => {
    const change = jest.fn()
    const template = `
      <var-pagination
        current="10"
        :size="20"
        total="325"
        :max-pager-count="4"
        :simple="false"
        @change="change"
      />
    `
    const wrapper = mount({
      components: {
        [VarPagination.name]: VarPagination,
      },

      methods: {
        change,
      },
      template,
    })

    await delay(0)

    const prev = wrapper.find('.var-pagination__item[item-mode="head"]')
    const next = wrapper.find('.var-pagination__item[item-mode="tail"]')

    expect(wrapper.find('.var-pagination__item-active').text()).toBe('10')

    await next.trigger('click')
    expect(wrapper.find('.var-pagination__item-active').text()).toBe('14')

    await prev.trigger('click')
    expect(wrapper.find('.var-pagination__item-active').text()).toBe('10')

    expect(change).toBeCalledTimes(2)
    wrapper.destroy()
  })
})

test('Size related props', async () => {
  const template = `<var-pagination total="115" size="20" :show-size-changer="sizeChange" :size-option="sizeOption"/>`

  const wrapper = mount({
    components: {
      [VarPagination.name]: VarPagination,
    },
    data() {
      return {
        sizeChange: true,
        sizeOption: [10, 20, 30, 40],
      }
    },
    template,
  })

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()

  const lists = document.querySelectorAll('.var-pagination__list')

  expect(lists.length).toBe(4)

  expect(lists[3].innerHTML.includes('40')).toBeTruthy()

  await wrapper.setData({ sizeChange: false })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('change current and size', async () => {
  const wrapper = mount(VarPagination, {
    propsData: {
      current: 4,
      size: 10,
      total: 300,
    },
  })

  const input = wrapper.find('.var-input__input')
  const sizeEl = wrapper.find('.var-pagination__size-open')

  expect(input.element.value).toBe('4')
  expect(sizeEl.text().includes('10')).toBe(true)

  await wrapper.setProps({
    current: 5,
    size: 20,
  })

  expect(input.element.value).toBe('5')
  expect(sizeEl.text().includes('20')).toBe(true)

  wrapper.destroy()
})

test('change event', async () => {
  const change = jest.fn()
  const template = `<var-pagination current="2" :size="20" total="325" @change="change" />`

  const wrapper = mount({
    components: {
      [VarPagination.name]: VarPagination,
    },

    methods: {
      change,
    },
    template,
  })

  await delay(0)

  const items = wrapper.findAll('.var-pagination__item')
  const next = wrapper.find('.var-pagination__next')
  const input = wrapper.find('.var-input__input')

  await input.trigger('blur')
  expect(input.element.value).toBe('2')

  await items.at(0).trigger('click')
  expect(input.element.value).toBe('1')

  await items.at(1).trigger('click')
  expect(input.element.value).toBe('2')
  expect(change).toBeCalledTimes(2)

  await wrapper.find('.var-pagination__size-open').trigger('click')
  const li = document.querySelector('.var-cell__title')
  await trigger(li, 'click')

  expect(change).toBeCalledTimes(3)
  expect(wrapper.find('.var-pagination__simple').text().includes('33')).toBe(true)
  wrapper.destroy()
})

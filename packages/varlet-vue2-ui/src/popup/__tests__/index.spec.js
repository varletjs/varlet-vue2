import Popup from '..'
import VarPopup from '../Popup'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

test('test popup plugin', () => {
  Vue.use(Popup)
  expect(Vue.component(Popup.name)).toBeTruthy()
})

const Wrapper = {
  components: {
    [VarPopup.name]: VarPopup,
  },
  props: ['closeOnClickOverlay', 'onOpen', 'onClose', 'onClickOverlay'],
  data: () => ({
    show: false,
  }),
  template: `
   <var-popup :show.sync="show" v-bind="$props">
      default slot content
    </var-popup>
  `,
}

test('test popup show', async () => {
  const wrapper = mount(Wrapper)
  expect(wrapper.find('.var-popup').isVisible()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ show: true })
  expect(wrapper.find('.var-popup').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ show: false })
  expect(wrapper.find('.var-popup').isVisible()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.destroy()
})

test('test popup onOpen & onClose', async () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()

  const Wrapper = {
    components: {
      [VarPopup.name]: VarPopup,
    },
    data: () => ({
      show: false,
    }),
    methods: {
      onOpen,
      onClose,
    },
    template: `
      <var-popup :show.sync="show" @open="onOpen" @close="onClose">
        default slot content
      </var-popup>`,
  }

  const wrapper = mount(Wrapper)
  await wrapper.setData({ show: true })
  expect(onOpen).toHaveBeenCalledTimes(1)

  await wrapper.setData({ show: false })
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test popup close on clickOverlay', async () => {
  const onClose = jest.fn()
  const onClickOverlay = jest.fn()

  const Wrapper = {
    components: {
      [VarPopup.name]: VarPopup,
    },
    data: () => ({
      show: false,
      closeOnClickOverlay: true,
    }),
    methods: {
      onClickOverlay,
      onClose,
    },
    template: `
      <var-popup :show.sync="show" @clickOverlay="onClickOverlay" @close="onClose" :closeOnClickOverlay="closeOnClickOverlay">
        default slot content
      </var-popup>`,
  }

  const wrapper = mount(Wrapper)

  await wrapper.setData({ show: true })

  await wrapper.find('.var-popup__overlay').trigger('click')
  expect(onClickOverlay).toHaveBeenCalledTimes(1)
  expect(onClose).toHaveBeenCalledTimes(1)

  await wrapper.setData({ closeOnClickOverlay: false, show: true })
  await wrapper.find('.var-popup__overlay').trigger('click')
  expect(onClickOverlay).toHaveBeenCalledTimes(2)
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test popup z-index', async () => {
  const wrapper = mount(Wrapper)

  await wrapper.setData({ show: true })

  const prevPopupZIndex = window.getComputedStyle(wrapper.find('.var-popup').element).zIndex
  const prevOverlayZIndex = window.getComputedStyle(wrapper.find('.var-popup__overlay').element).zIndex

  await wrapper.setData({ show: false })
  await wrapper.setData({ show: true })
  expect(window.getComputedStyle(wrapper.find('.var-popup').element).zIndex).toBe(String(+prevPopupZIndex + 3))
  expect(window.getComputedStyle(wrapper.find('.var-popup__overlay').element).zIndex).toBe(
    String(+prevOverlayZIndex + 3)
  )

  wrapper.destroy()
})

import Dialog from '..'
import VarDialog from '../Dialog'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

test('test dialog component plugin', () => {
  Vue.use(Dialog.Component)
  expect(Vue.component(Dialog.Component.name)).toBeTruthy()
})

/* const Wrapper = {
  components: {
    [VarDialog.name]: VarDialog,
  },
  props: ['closeOnClickOverlay', 'onBeforeClose', 'onClickOverlay'],
  data: () => ({
    show: false,
  }),
  template: `
    <var-dialog v-model:show="show" v-bind="$props" />
  `,
}

test('test dialog component click overlay', async () => {
  const onClickOverlay = jest.fn()

  const wrapper = mount(Wrapper, {
    propsData: {
      onClickOverlay,
      closeOnClickOverlay: false,
    },
  })
  await wrapper.setData({ show: true })

  await wrapper.find('.var-popup__overlay').trigger('click')
  expect(onClickOverlay).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.show).toBe(true)

  await wrapper.setProps({ closeOnClickOverlay: true })
  await wrapper.find('.var-popup__overlay').trigger('click')
  expect(onClickOverlay).toHaveBeenCalledTimes(2)
  expect(wrapper.vm.show).toBe(false)

  wrapper.destroy()
})

test('test dialog component onBeforeClose', async () => {
  const onBeforeClose = jest.fn()

  const wrapper = mount(Wrapper, {
    listeners: {
      beforeClose: onBeforeClose,
    },
  })
  await wrapper.setData({ show: true })

  await wrapper.find('.var-popup__overlay').trigger('click')
  expect(onBeforeClose).toHaveBeenCalledTimes(1)

  await wrapper.find('.var-dialog__cancel-button').trigger('click')
  expect(onBeforeClose).toHaveBeenCalledTimes(2)

  await wrapper.find('.var-dialog__confirm-button').trigger('click')
  expect(onBeforeClose).toHaveBeenCalledTimes(3)

  wrapper.destroy()
})
 */

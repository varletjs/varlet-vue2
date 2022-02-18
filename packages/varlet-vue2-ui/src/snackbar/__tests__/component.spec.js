import Vue from 'vue'
import Snackbar from '..'
import VarSnackbar from '../Snackbar'
import example from '../example'
import { mount } from '@vue/test-utils'
import { delay, mockStubs } from '../../utils/jest'

test('test snackbar example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test snackbar component plugin', () => {
  Vue.use(Snackbar.Component)
  expect(Vue.component(Snackbar.Component.name)).toBeTruthy()
})

test('test snackbar style', async () => {
  const template = `
     <var-snackbar
      :show.sync="show"
      type="error"
      position="center"
      content-class="test-snackbar"
      vertical
      :duration="500"
      loading-type="wave"
      loading-size="large"
      content="test snackbar"
      forbid-click
      lock-scroll
    />
   `
  mount({
    components: {
      [VarSnackbar.name]: VarSnackbar,
    },
    data() {
      return {
        show: true,
      }
    },
    template,
  })

  await delay(200)
  expect(document.body.innerHTML).toMatchSnapshot()

  await delay(500)
  expect(document.querySelector('.var-snackbar').style.display).toBe('none')
})

test('test snackbar event', async () => {
  const open = jest.fn()
  const opened = jest.fn()
  const close = jest.fn()
  const closed = jest.fn()
  const { mockRestore } = mockStubs()

  const template = `
    <var-snackbar :show.sync="show" @open="open" @opened="opened" @close="close" @closed="closed">
      Snackbar
    </var-snackbar>`

  const wrapper = mount({
    components: {
      [VarSnackbar.name]: VarSnackbar,
    },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      open,
      opened,
      close,
      closed,
    },
    template,
  })

  await delay(0)
  await wrapper.setData({ show: true })
  await delay(200)
  await wrapper.setData({ show: false })
  await delay(200)

  expect(open).toHaveBeenCalledTimes(1)
  expect(opened).toHaveBeenCalledTimes(1)
  expect(close).toHaveBeenCalledTimes(1)
  expect(closed).toHaveBeenCalledTimes(1)

  mockRestore()
})

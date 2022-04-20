import ImagePreview from '../index'
import VarImagePreview from '../ImagePreview.vue'
import Vue from 'vue'
import { delay, trigger, triggerDrag } from '../../utils/jest'
import { mount } from '@vue/test-utils'

test('test image preview plugin', () => {
  Vue.use(ImagePreview)
  expect(Vue.component(VarImagePreview.name)).toBeTruthy()
})

test('test image preview functional show & close', async () => {
  const onOpen = jest.fn()
  const onOpened = jest.fn()
  const onClose = jest.fn()
  const onClosed = jest.fn()

  ImagePreview({
    onOpen,
    onOpened,
    onClose,
    onClosed,
  })

  await delay(200)
  expect(onOpen).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onOpened).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup').style.display).toBe('')

  ImagePreview.close()

  await delay(20)
  expect(onClose).toHaveBeenCalledTimes(1)
  await delay(300)
  expect(onClosed).toHaveBeenCalledTimes(1)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})

test('test image preview onChange callback', async () => {
  const onChange = jest.fn()

  ImagePreview({
    images: ['https://varlet-vue2.vercel.app/cat.jpg', 'https://varlet-vue2.vercel.app/cat2.jpg'],
    onChange,
  })
  await delay(200)

  const track = document.querySelector('.var-swipe__track')
  await triggerDrag(track, -100, 0)
  expect(onChange).toHaveBeenLastCalledWith(1)

  await triggerDrag(track, 100, 0)
  expect(onChange).toHaveBeenLastCalledWith(0)

  ImagePreview.close()
  await delay(16)
})

test('test image preview closeable', async () => {
  ImagePreview({
    closeable: true,
  })
  await delay(200)
  await trigger(document.querySelector('.var-image-preview__close-icon'), 'click')
  await delay(300)
  expect(document.querySelector('.var-popup')).toBeFalsy()
})

test('test image preview extra slot', async () => {
  const template = `
    <var-image-preview :images="images" :show.sync="show">
      <template #extra>
       <div>extra</div>
      </template>
    </var-image-preview>`

  const wrapper = mount({
    components: {
      [VarImagePreview.name]: VarImagePreview,
    },
    data: () => ({
      images: ['https://varlet-vue2.vercel.app/cat.jpg'],
      show: true,
    }),
    template,
  })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-image-preview__extra').isVisible()).toBe(true)

  wrapper.destroy()
})

import example from '../example'
import Uploader from '..'
import VarUploader from '../Uploader'
import ImagePreview from '../../image-preview'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, mockFileReader, mockStubs } from '../../utils/jest'

const createEvent = (filename) => {
  return {
    target: {
      files: [new File([], filename)],
    },
  }
}

test('test uploader example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test uploader plugin', () => {
  Vue.use(Uploader)
  expect(Vue.component(Uploader.name)).toBeTruthy()
})

test('test uploader onAfterRead', async () => {
  const onAfterRead = jest.fn()

  const wrapper = mount(VarUploader, {
    listeners: {
      afterRead: onAfterRead,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test uploader onBeforeRead', async () => {
  const onAfterRead = jest.fn()

  const wrapper = mount(VarUploader, {
    listeners: {
      afterRead: onAfterRead,
      beforeRead: (file) => file.name.endsWith('jpg'),
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onAfterRead).toHaveBeenCalledTimes(0)

  await wrapper.vm.handleChange(createEvent('cat.jpg'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test uploader preview', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const { mockRestore: mockRestoreStubs } = mockStubs()
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarUploader, {
    propsData: {
      value: [],
    },
    listeners: {
      input: onInput,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.jpg'))
  await delay(16)
  await wrapper.find('.var-uploader__file').trigger('click')
  await delay(100)

  expect(document.querySelector('.var-popup').style.display).toBe('')
  ImagePreview.close()
  await delay(300)

  mockRestoreStubs()
  wrapper.destroy()
  mockRestore()
})

test('test uploader onOversize', async () => {
  const onOversize = jest.fn()

  const wrapper = mount(VarUploader, {
    propsData: {
      maxsize: -1,
    },
    listeners: {
      oversize: onOversize,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onOversize).toHaveBeenCalledTimes(1)

  wrapper.destroy()
})

test('test uploader onRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onInput = jest.fn((value) => wrapper.setProps({ value }))
  const onRemove = jest.fn()

  const wrapper = mount(VarUploader, {
    propsData: {
      value: [],
    },
    listeners: {
      remove: onRemove,
      input: onInput,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onInput).toHaveBeenCalledTimes(1)

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onInput).toHaveBeenCalledTimes(2)
  expect(onRemove).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.value).toStrictEqual([])

  wrapper.destroy()
  mockRestore()
})

test('test uploader onBeforeRemove', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onInput = jest.fn((value) => wrapper.setProps({ value }))
  const onBeforeRemove = jest.fn(() => false)
  const onRemove = jest.fn()

  const wrapper = mount(VarUploader, {
    propsData: {
      value: [],
    },
    listeners: {
      beforeRemove: onBeforeRemove,
      remove: onRemove,
      input: onInput,
    },
  })

  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onInput).toHaveBeenCalledTimes(1)

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onBeforeRemove).toHaveBeenCalledTimes(1)
  expect(onInput).toHaveBeenCalledTimes(1)
  expect(onRemove).toHaveBeenCalledTimes(0)
  expect(wrapper.vm.value).toHaveLength(1)

  wrapper.destroy()
  mockRestore()
})

test('test uploader validation', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarUploader, {
    propsData: {
      value: [],
      rules: [(v) => v.length >= 1 || '您至少上传一个'],
    },
    listeners: {
      input: onInput,
    },
  })

  wrapper.vm.validate()
  await delay(16)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__message').text()).toBe('您至少上传一个')

  await wrapper.vm.handleChange(createEvent('cat.png'))
  await delay(16)
  expect(onInput).toHaveBeenCalledTimes(1)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([])

  wrapper.destroy()
  mockRestore()
})

test('test uploader disabled', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onInput = jest.fn((value) => wrapper.setProps({ value }))
  const onRemove = jest.fn()
  const onAfterRead = jest.fn()

  const wrapper = mount(VarUploader, {
    propsData: {
      disabled: false,
      value: [],
    },
    listeners: {
      afterRead: onAfterRead,
      remove: onRemove,
      input: onInput,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.vm.handleChange(createEvent('cat.png'))
  expect(onAfterRead).toHaveBeenCalledTimes(1)

  await wrapper.setProps({ disabled: true })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-uploader__action-input[disabled]').exists()).toBeTruthy()

  await wrapper.find('.var-uploader__file-close').trigger('click')
  expect(onRemove).toHaveBeenCalledTimes(0)

  wrapper.destroy()
  mockRestore()
})

test('test uploader length over maxlength in multiple mode', async () => {
  const { mockRestore } = mockFileReader('data:image/png;base64,')
  const onInput = jest.fn((value) => wrapper.setProps({ value }))

  const wrapper = mount(VarUploader, {
    propsData: {
      maxlength: 1,
      value: [],
    },
    listeners: {
      input: onInput,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  const event = {
    target: {
      files: [new File([], 'cat.png'), new File([], 'dog.png')],
    },
  }

  await wrapper.vm.handleChange(event)
  expect(wrapper.vm.value.length).toBe(1)

  wrapper.destroy()
  mockRestore()
})

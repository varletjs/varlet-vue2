import example from '../example'
import Vue from 'vue'
import Card from '..'
import VarCard from '../Card'
import { mount } from '@vue/test-utils'

test('test card example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test card plugin', () => {
  Vue.use(Card)
  expect(Vue.component(Card.name)).toBeTruthy()
})

test('test card props', async () => {
  const wrapper = mount(VarCard, {
    propsData: {
      title: 'This is Card',
      description: 'This is description',
      subtitle: 'This is subtitle',
      src: 'https://varlet-vue2.vercel.app/cat.jpg',
      fit: 'cover',
      height: '200px',
      alt: 'This is an image',
      elevation: '2',
      ripple: true,
    },
    scopedSlots: {
      extra: '<div>text</div>',
    },
  })

  expect(wrapper.find('img').attributes('style')).toMatch('height: 200px')
  expect(wrapper.find('img').attributes('style')).toMatch('object-fit: cover')
  expect(wrapper.find('img').attributes('alt')).toMatch('This is an image')
  expect(wrapper.find('img').attributes('src')).toMatch('https://varlet-vue2.vercel.app/cat.jpg')
  expect(wrapper.find('.var-card__title').text()).toBe('This is Card')
  expect(wrapper.find('.var-card__subtitle').text()).toBe('This is subtitle')
  expect(wrapper.find('.var-card__description').text()).toBe('This is description')
  expect(wrapper.find('.var-card__footer').text()).toBe('text')
  expect(wrapper.classes()).toContain('var-elevation--2')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.destroy()
})

test('test card onClick with null callback', () => {
  const wrapper = mount(VarCard)
  wrapper.trigger('click')
  wrapper.destroy()
})

test('test card onClick', () => {
  const onClick = jest.fn()
  const wrapper = mount(VarCard, {
    listeners: {
      click: onClick,
    },
  })

  wrapper.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  wrapper.destroy()
})

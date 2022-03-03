import Swipe from '..'
import SwipeItem from '../../swipe-item'
import VarSwipe from '../Swipe'
import VarSwipeItem from '../../swipe-item/SwipeItem'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import { delay, mockOffset, triggerDrag } from '../../utils/jest'

mockOffset()

test('test swipe & swipe-item plugin', () => {
  Vue.use(Swipe).use(SwipeItem)
  expect(Vue.component(Swipe.name)).toBeTruthy()
  expect(Vue.component(SwipeItem.name)).toBeTruthy()
})

// const Wrapper = {
//   components: {
//     [VarSwipe.name]: VarSwipe,
//     [VarSwipeItem.name]: VarSwipeItem,
//   },
//   props: ['onChange', 'initialIndex'],
//   template: `
//     <var-swipe ref="swipe" style="width: 100px; height: 100px" v-bind="$props">
//       <var-swipe-item>1</var-swipe-item>
//       <var-swipe-item>2</var-swipe-item>
//       <var-swipe-item>3</var-swipe-item>
//     </var-swipe>
//   `,
// }

// test('test swipe next & prev & to method', async () => {
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     listeners: {
//       change: onChange,
//     },
//   })
//   await delay(50)

//   const {
//     swipe: { prev, next, to },
//   } = wrapper.vm.$refs

//   to(0)
//   expect(onChange).toHaveBeenCalledTimes(0)
//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   next()
//   expect(onChange).toHaveBeenLastCalledWith(1)
//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   prev()
//   expect(onChange).toHaveBeenLastCalledWith(0)
//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   to(2)
//   expect(onChange).toHaveBeenLastCalledWith(2)
//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   next()
//   expect(onChange).toHaveBeenLastCalledWith(0)
//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   prev()
//   expect(onChange).toHaveBeenLastCalledWith(2)
//   await delay(100)
//   expect(wrapper.html()).toMatchSnapshot()

//   wrapper.destroy()
// })

// test('test render initial index', async () => {
//   const wrapper = mount(Wrapper, {
//     propsData: {
//       initialIndex: 2,
//     },
//   })
//   await delay(50)
//   expect(wrapper.html()).toMatchSnapshot()
//   wrapper.destroy()
// })

// test('test touch with loop', async () => {
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     listeners: {
//       change: onChange,
//     },
//   })
//   await delay(50)

//   const track = wrapper.find('.var-swipe__track')

//   await triggerDrag(track, -100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(1)
//   await triggerDrag(track, -100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(2)
//   await triggerDrag(track, -100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(0)
//   await triggerDrag(track, 100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(2)
//   await triggerDrag(track, 100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(1)
//   await triggerDrag(track, 100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(0)

//   wrapper.destroy()
// })

// test('test touch without loop', async () => {
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     propsData: {
//       loop: false,
//     },
//     listeners: {
//       change: onChange,
//     },
//   })
//   await delay(50)

//   const track = wrapper.find('.var-swipe__track')

//   await triggerDrag(track, 100, 0)
//   expect(onChange).toHaveBeenCalledTimes(0)
//   await triggerDrag(track, -100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(1)
//   await triggerDrag(track, -100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(2)
//   await triggerDrag(track, -100, 0)
//   expect(onChange).toHaveBeenLastCalledWith(2)

//   wrapper.destroy()
// })

// test('test touch with vertical', async () => {
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     propsData: {
//       vertical: true,
//     },
//     listeners: {
//       change: onChange,
//     },
//   })
//   await delay(50)

//   const track = wrapper.find('.var-swipe__track')

//   await triggerDrag(track, 0, -100)
//   expect(onChange).toHaveBeenCalledTimes(1)
//   await triggerDrag(track, 0, -100)
//   expect(onChange).toHaveBeenLastCalledWith(2)

//   wrapper.destroy()
// })

// test('test touch forbid touchable', async () => {
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     propsData: {
//       touchable: false,
//     },
//     listeners: {
//       change: onChange,
//     },
//   })
//   await delay(50)

//   const track = wrapper.find('.var-swipe__track')

//   await triggerDrag(track, -100, 0)
//   expect(onChange).toHaveBeenCalledTimes(0)

//   wrapper.destroy()
// })

// test('test autoplay', async () => {
//   const onChange = jest.fn()

//   const wrapper = mount(Wrapper, {
//     propsData: {
//       autoplay: 100,
//     },
//     listeners: {
//       change: onChange,
//     },
//   })
//   await delay(100)
//   await delay(100)
//   expect(onChange).toHaveBeenLastCalledWith(1)
//   await delay(100)
//   expect(onChange).toHaveBeenLastCalledWith(2)
//   wrapper.destroy()
// })

<template>
  <div class="var-slider">
    <div
      class="var-slider-block"
      :class="[isDisabled ? 'var-slider__disable' : null, errorMessage ? 'var-slider__error' : null]"
      :style="{
        height: thumbSize === undefined ? thumbSize : `${3 * toNumber(thumbSize)}px`,
        margin: thumbSize === undefined ? thumbSize : `0 ${toNumber(thumbSize) / 2}px`,
      }"
      ref="sliderEl"
      @click="click"
    >
      <div class="var-slider__track">
        <div
          class="var-slider__track-background"
          :style="{
            background: trackColor,
            height: trackHeight + 'px',
          }"
        ></div>
        <div class="var-slider__track-fill" :style="getFillStyle"></div>
      </div>
      <div
        v-for="item in thumbList"
        class="var-slider__thumb"
        :key="item.enumValue"
        :style="{
          left: `${item.value}%`,
          zIndex: thumbsProps[item.enumValue].active ? 1 : undefined,
        }"
        @touchstart="start($event, item.enumValue)"
        @touchmove="move($event, item.enumValue)"
        @touchend="end(item.enumValue)"
        @touchcancel="end(item.enumValue)"
      >
        <slot name="button" :current-value="item.value">
          <div
            class="var-slider__thumb-block"
            :style="{
              background: thumbColor,
              height: thumbSize + 'px',
              width: thumbSize + 'px',
            }"
          ></div>
          <div
            class="var-slider__thumb-ripple"
            :class="[thumbsProps[item.enumValue].active ? 'var-slider__thumb-ripple-active' : null]"
            :style="{
              background: thumbColor,
              ...getRippleSize(item),
            }"
          ></div>
          <div
            class="var-slider__thumb-label"
            :class="[showLabel(item.enumValue) ? 'var-slider__thumb-label-active' : null]"
            :style="{
              background: labelColor,
              color: labelTextColor,
              height: thumbSize === undefined ? thumbSize : `${2 * toNumber(thumbSize)}px`,
              width: thumbSize === undefined ? thumbSize : `${2 * toNumber(thumbSize)}px`,
            }"
          >
            <span>{{ item.value }}</span>
          </div>
        </slot>
      </div>
    </div>
    <var-form-details :error-message="errorMessage" class="var-slider__form" var-slider-cover />
  </div>
</template>

<script>
import { defineComponent } from '../utils/create'
import { getLeft } from '../utils/elements'
import { isArray, isNumber, toNumber } from '../utils/shared'
import { props } from './props'
import VarFormDetails from '../form-details'
import { ValidationMixin } from '../utils/mixins/validation'
import { createChildrenMixin } from '../utils/mixins/relation'

export default defineComponent({
  name: 'VarSlider',

  mixins: [ValidationMixin, createChildrenMixin('form', { parentKey: 'form', childrenKey: 'formItems' })],

  components: {
    VarFormDetails,
  },

  props,

  data: () => ({
    maxWidth: 0,
    isScroll: false,
    thumbsProps: {
      first: {
        startPosition: 0,
        currentLeft: 0,
        active: false,
        percentValue: 0,
      },
      second: {
        startPosition: 0,
        currentLeft: 0,
        active: false,
        percentValue: 0,
      },
    },
  }),

  computed: {
    unitWidth() {
      return (this.maxWidth / 100) * toNumber(this.step)
    },

    thumbList() {
      let list = [{ value: this.value, enumValue: 'first' }]

      if (this.range && isArray(this.value)) {
        list = [
          { value: this.value[0], enumValue: 'first' },
          { value: this.value[1], enumValue: 'second' },
        ]
      }

      return list
    },

    getFillStyle() {
      const { activeColor, range, value } = this

      const width = range && isArray(value) ? Math.abs(value[0] - value[1]) : value

      const left = range && isArray(value) ? Math.min(value[0], value[1]) : 0

      return {
        width: `${width}%`,
        left: `${left}%`,
        background: activeColor,
      }
    },

    isDisabled() {
      return this.disabled || this.form?.disabled
    },

    isReadonly() {
      return this.readonly || this.form?.readonly
    },
  },

  mounted() {
    if (!this.stepValidator() || !this.valueValidator()) return

    this.maxWidth = this.$refs.sliderEl.offsetWidth
  },

  watch: {
    value(newValue) {
      if (!this.stepValidator() || !this.valueValidator() || this.isScroll) return
      this.setProps(newValue, toNumber(this.step))
    },

    step(newValue) {
      if (!this.stepValidator() || !this.valueValidator() || this.isScroll) return
      this.setProps(this.value, toNumber(newValue))
    },

    maxWidth() {
      this.setProps()
    },
  },

  methods: {
    toNumber,

    validate() {
      this._validate(this.rules, this.value)
    },

    validateWithTrigger() {
      this.$nextTick(() => {
        const { rules, value } = this
        this._validateWithTrigger(['onChange'], 'onChange', rules, value)
      })
    },

    getRippleSize(item) {
      let size

      if (this.thumbSize !== undefined) {
        size = this.thumbsProps[item.enumValue].active ? `${3 * toNumber(this.thumbSize)}px` : '0px'
      }

      return {
        height: size,
        width: size,
      }
    },

    showLabel(type) {
      if (this.labelVisible === 'always') return true
      if (this.labelVisible === 'never') return false

      return this.thumbsProps[type].active
    },

    setPercent(moveDistance, type) {
      const { step, range, value, getListeners } = this
      const { onChange, onInput } = getListeners()

      let rangeValue = []
      const stepNumber = toNumber(step)
      const roundDistance = Math.round(moveDistance / this.unitWidth)
      const curValue = roundDistance * stepNumber
      const prevValue = this.thumbsProps[type].percentValue

      this.thumbsProps[type].percentValue = curValue / stepNumber
      if (range && isArray(value)) {
        rangeValue = type === 'first' ? [curValue, value[1]] : [value[0], curValue]
      }

      if (prevValue !== curValue) {
        const localValue = range ? rangeValue : curValue
        onChange?.(localValue)
        onInput?.(localValue)
        this.validateWithTrigger()
      }
    },

    getType(offset) {
      if (!this.range) return 'first'
      const thumb1Distance = this.thumbsProps.first.percentValue * this.unitWidth
      const thumb2Distance = this.thumbsProps.second.percentValue * this.unitWidth
      const offsetToThumb1 = Math.abs(offset - thumb1Distance)
      const offsetToThumb2 = Math.abs(offset - thumb2Distance)

      return offsetToThumb1 <= offsetToThumb2 ? 'first' : 'second'
    },

    start(event, type) {
      if (!this.maxWidth) this.maxWidth = this.$refs.sliderEl.offsetWidth
      if (this.isDisabled || this.isReadonly) return
      this.getListeners().onStart?.()
      this.isScroll = true
      this.thumbsProps[type].startPosition = event.touches[0].clientX
    },

    move(event, type) {
      if (this.isDisabled || this.isReadonly || !this.isScroll) return
      let moveDistance =
        event.touches[0].clientX - this.thumbsProps[type].startPosition + this.thumbsProps[type].currentLeft
      this.thumbsProps[type].active = true

      if (moveDistance <= 0) moveDistance = 0
      else if (moveDistance >= this.maxWidth) moveDistance = this.maxWidth

      this.setPercent(moveDistance, type)
    },

    end(type) {
      const { isDisabled, isReadonly, range, value, getListeners } = this
      if (isDisabled || isReadonly) return
      let rangeValue = []

      this.thumbsProps[type].currentLeft = this.thumbsProps[type].percentValue * this.unitWidth
      this.thumbsProps[type].active = false

      const curValue = this.thumbsProps[type].percentValue

      if (range && isArray(value)) {
        rangeValue = type === 'first' ? [curValue, value[1]] : [value[0], curValue]
      }

      getListeners().onEnd?.(range ? rangeValue : curValue)
      this.isScroll = false
    },

    click(event) {
      if (this.isDisabled || this.isReadonly) return
      if (event.target.closest('.var-slider__thumb')) return
      const offset = event.clientX - getLeft(event.currentTarget)
      const type = this.getType(offset)
      this.setPercent(offset, type)
      this.end(type)
    },

    stepValidator() {
      const stepNumber = toNumber(this.step)
      if (isNaN(stepNumber)) {
        console.warn('[Varlet] Slider: type of prop "step" should be Number')
        return false
      }
      if (stepNumber < 1 || stepNumber > 100) {
        console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100')
        return false
      }
      if (parseInt(`${this.step}`, 10) !== stepNumber) {
        console.warn('[Varlet] Slider: "step" should be an Integer')
        return false
      }
      return true
    },

    valueValidator() {
      const { range, value } = this
      if (range && !isArray(value)) {
        console.error('[Varlet] Slider: "value" should be an Array')
        return false
      }
      if (!range && isArray(value)) {
        console.error('[Varlet] Slider: "value" should be a Number')
        return false
      }
      if (range && isArray(value) && value.length < 2) {
        console.error('[Varlet] Slider: "value" should have two value')
        return false
      }
      return true
    },

    setProps(value = this.value, step = toNumber(this.step)) {
      if (this.range && isArray(value)) {
        this.thumbsProps.first.percentValue = value[0] / step
        this.thumbsProps.first.currentLeft = this.thumbsProps.first.percentValue * this.unitWidth

        this.thumbsProps.second.percentValue = value[1] / step
        this.thumbsProps.second.currentLeft = this.thumbsProps.second.percentValue * this.unitWidth
      } else if (isNumber(value)) {
        this.thumbsProps.first.currentLeft = (value / step) * this.unitWidth
      }
    },

    reset() {
      const resetValue = this.range ? [0, 0] : 0
      this.getListeners().onInput?.(resetValue)
      this.resetValidation()
    },
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import './slider';
</style>
